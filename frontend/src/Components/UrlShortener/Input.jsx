import {
  Button,
  TextInput,
  Paper,
  Stack,
  Title,
  Text,
} from "@mantine/core";

import React, { useState } from "react";
import Service from "../../utils/http.js";

export default function Input({ setResponse }) {
  const service = new Service();

  const [payload, setPayload] = useState({
    originalUrl: "",
    expiresAt: "",
    title: "",
    customUrl: "",
  });

  const generateShortCode = async () => {
    try {
      const response = await service.post("s", payload);
      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #d9b3ff 0%, #c9c6ff 40%, #b8ecff 100%)",
      }}
    >
      <Paper
        shadow="xl"
        radius="30px"
        p="40px"
        style={{
          width: "550px",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <Stack>

          {/* Heading */}
          <Title
            order={1}
            ta="center"
            style={{
              color: "#4A148C",
              fontSize: "42px",
              fontWeight: "800",
            }}
          >
            URL Shortener
          </Title>

          <Text ta="center" c="#2E2E2E" size="lg">
            Generate custom short URLs instantly
          </Text>

          {/* Original URL */}
          <TextInput
            size="lg"
            radius="xl"
            label="Original URL"
            placeholder="https://example.com"
            onChange={(e) => {
              setPayload({
                ...payload,
                originalUrl: e.target.value,
              });
            }}
            styles={{
              label: {
                color: "#4A148C",
                fontWeight: "700",
              },
              input: {
                background: "rgba(255,255,255,0.7)",
                border: "none",
                color: "#2E2E2E",
                fontWeight: "600",
              },
            }}
          />

          {/* Title */}
          <TextInput
            size="lg"
            radius="xl"
            label="Title"
            placeholder="My Website"
            onChange={(e) => {
              setPayload({
                ...payload,
                title: e.target.value,
              });
            }}
            styles={{
              label: {
                color: "#6A1B9A",
                fontWeight: "700",
              },
              input: {
                background: "rgba(255,255,255,0.7)",
                border: "none",
                color: "#2E2E2E",
                fontWeight: "600",
              },
            }}
          />

          {/* Custom URL */}
          <TextInput
            size="lg"
            radius="xl"
            label="Custom URL"
            placeholder="custom-link"
            onChange={(e) => {
              setPayload({
                ...payload,
                customUrl: e.target.value,
              });
            }}
            styles={{
              label: {
                color: "#1565C0",
                fontWeight: "700",
              },
              input: {
                background: "rgba(255,255,255,0.7)",
                border: "none",
                color: "#2E2E2E",
                fontWeight: "600",
              },
            }}
          />

          {/* Expiry */}
          <TextInput
            size="lg"
            radius="xl"
            type="datetime-local"
            label="Expiry Date"
            onChange={(e) => {
              setPayload({
                ...payload,
                expiresAt: e.target.value,
              });
            }}
            styles={{
              label: {
                color: "#00838F",
                fontWeight: "700",
              },
              input: {
                background: "rgba(255,255,255,0.7)",
                border: "none",
                color: "#2E2E2E",
                fontWeight: "600",
              },
            }}
          />

          {/* Button */}
          <Button
            size="lg"
            radius="xl"
            fullWidth
            disabled={payload.originalUrl === ""}
            onClick={() => generateShortCode()}
            variant="gradient"
            gradient={{ from: "violet", to: "blue" }}
            style={{
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Shorten URL
          </Button>

        </Stack>
      </Paper>
    </div>
  );
}