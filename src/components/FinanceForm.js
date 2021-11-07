import React from "react";
import { Form, Input } from "antd";

const FinanceForm = (props) => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form
        form={form}
        name="financeBreezeForm"
        layout={props.width > 760 ? "inline" : "vertical"}
        onValuesChange={(changedValues) =>
          props.onFinishCalculate(changedValues)
        }
      >
        <Form.Item
          style={{ margin: "10px" }}
          name="currentMortgagePayment"
          label="Mortgage Payment (PI)"
          rules={[{ required: true }]}
        >
          <Input type="number" defaultValue={props.currentMortgagePayment} />
        </Form.Item>
        <Form.Item
          style={{ margin: "10px" }}
          name="remainingBalance"
          label="Remaining Balance"
          rules={[{ required: true }]}
        >
          <Input type="number" defaultValue={props.remainingBalance} />
        </Form.Item>
      </Form>
      <Form
        form={form}
        name="financeBreezeForm"
        layout={props.width > 760 ? "inline" : "vertical"}
        onValuesChange={(changedValues) =>
          props.onFinishCalculate(changedValues)
        }
      >
        <Form.Item
          style={{ margin: "10px" }}
          name="interest"
          label="Interest Rate"
          rules={[{ required: true }]}
        >
          <Input type="number" defaultValue={props.interest} />
        </Form.Item>
        <Form.Item
          style={{ margin: "10px" }}
          name="additionalMortgagePayment"
          label="Additional Payment"
          rules={[{ required: true }]}
        >
          <Input type="number" defaultValue={props.additionalMortgagePayment} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FinanceForm;
