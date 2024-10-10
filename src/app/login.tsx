import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";
import { useActionData, useNavigation } from "react-router-dom";

function LoginPage() {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != null;

  const actionData = useActionData() as { error: string } | undefined;

  // bg-teal-400
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-2/3 flex items-center justify-center">
        <div className="w-102">
          <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
          <p className="text-gray-500 mb-6 text-center">
            Enter your credentials to access your account
          </p>
          <Form
            layout="vertical"
            onFinish={() => {
              // Handle form submission
            }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Your email address"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Your password"
              />
            </Form.Item>
            <Form.Item>
              <div className="flex justify-between items-center">
                <Switch className="bg-slate-300" />{" "}
                <span className="ml-2">Remember me</span>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-teal-500 hover:bg-teal-600"
                loading={isLoggingIn}
              >
                {isLoggingIn ? "Logging in..." : "Log In"}
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center">
            <a href="#" className="text-teal-500 hover:underline">
              Don't have an account? Sign up
            </a>
          </p>
          {actionData && actionData.error && (
            <p className="text-red-500 mt-4 text-center">{actionData.error}</p>
          )}
        </div>
      </div>
      <div className="w-1/3 bg-teal-400 flex items-center justify-center rounded-bl-3xl h-[calc(100vh-70px)]">
        <div className="text-white text-6xl font-bold flex items-center">
          <svg
            className="w-16 h-16 mr-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          chakra
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
