"use client";

import { signIn, signUp, updateUser } from "@/lib/auth-client";
// import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";


function SignUpPage() {

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    
    const { data, error } = await signUp.email({
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        password: userData.password,
    });

    if (data) {
      // Update user profile after sign up
      const { data: updatedUser, error: updateError } = await updateUser({
        name: userData.name,
        bio: userData.bio,
      });
      console.log('User profile updated:', updatedUser, updateError);
    }

    console.log(data, error);
  };

  const handleGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });
    console.log('after google sign in:', resData);
  };

  return (
    <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="bio"
            validate={(value) => {
              if (value.length < 10) {
                return "Bio must be at least 10 characters";
              }

              return null;
            }}
          >
            <Label>Bio</Label>
            <TextArea placeholder="Tell us about yourself..." />
            <Description>Minimum 10 characters</Description>
            <FieldError />
          </TextField>


            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                if (value.length < 8) {
                    return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                }

                return null;
                }}
            >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
            </TextField>


        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            {/* <FloppyDisk /> */}
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
      {/* or */}
      <p className="text-center font-bold my-4 text-gray-500">OR</p>
      <Button onClick={handleGoogleSignIn} variant="secondary">
        Sign in with Google
      </Button>
    </Form>
  );
}


export default SignUpPage;