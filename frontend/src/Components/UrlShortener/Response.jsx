import {
  Paper,
  Stack,
  Text,
  Title,
  Image,
  Button,
  Group,
  Badge,
} from "@mantine/core";

import React from "react";

export default function Response({ response }) {

  const shortUrl =
    import.meta.env.VITE_DEV_PROXY +
    "/api/s/" +
    response.shortCode;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${shortUrl}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #d9b3ff 0%, #c9c6ff 40%, #b8ecff 100%)",
        padding: "20px",
      }}
    >
      <Paper
        shadow="xl"
        radius="30px"
        p="40px"
        style={{
          width: "550px",
          textAlign: "center",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <Stack align="center">

          {/* Heading */}
          <Title
            order={1}
            style={{
              color: "#4A148C",
              fontSize: "40px",
              fontWeight: "800",
            }}
          >
            URL Generated
          </Title>

          {/* Title Badge */}
          {response.title && (
            <Badge
              size="xl"
              radius="xl"
              variant="gradient"
              gradient={{ from: "violet", to: "blue" }}
            >
              {response.title}
            </Badge>
          )}

          {/* URL */}
          <Text
            size="lg"
            fw={700}
            style={{
              color: "#0D47A1",
              wordBreak: "break-word",
            }}
          >
            {shortUrl}
          </Text>

          {/* QR Code */}
          <Paper
            radius="xl"
            p="md"
            shadow="md"
            style={{
              background: "white",
            }}
          >
            <Image
              src={qrUrl}
              alt="QR Code"
              width={220}
              height={220}
            />
          </Paper>

          {/* Additional Information */}
          <Paper
            radius="xl"
            p="lg"
            w="100%"
            style={{
              background: "rgba(255,255,255,0.35)",
            }}
          >
            <Stack gap="sm">

              {/* Custom URL */}
              <Group justify="space-between">
                <Text fw={700} c="#6A1B9A">
                  Custom URL
                </Text>

                <Text c="#2E2E2E" fw={600}>
                  {response.customUrl || "Not Added"}
                </Text>
              </Group>

              {/* Expiry Date */}
              <Group justify="space-between">
                <Text fw={700} c="#1565C0">
                  Expiry Date
                </Text>

                <Text c="#2E2E2E" fw={600}>
                  {response.expiresAt || "No Expiry"}
                </Text>
              </Group>

              {/* Short Code */}
              <Group justify="space-between">
                <Text fw={700} c="#00838F">
                  Short Code
                </Text>

                <Text c="#2E2E2E" fw={600}>
                  {response.shortCode}
                </Text>
              </Group>

            </Stack>
          </Paper>

          {/* Creator Details */}
          <Paper
            radius="xl"
            p="md"
            w="100%"
            style={{
              background: "rgba(255,255,255,0.35)",
            }}
          >
            <Text fw={700} size="lg" c="#6A1B9A">
              Created By
            </Text>

            <Text size="md" c="#2E2E2E" fw={600}>
              Susmitha
            </Text>

            <Text size="sm" c="#1565C0">
              srisusmithagedela@gmail.com
            </Text>
          </Paper>

          {/* Button */}
          <Group>
            <Button
              component="a"
              href={shortUrl}
              target="_blank"
              radius="xl"
              variant="gradient"
              gradient={{ from: "violet", to: "blue" }}
            >
              Open URL
            </Button>
          </Group>

        </Stack>
      </Paper>
    </div>
  );
}