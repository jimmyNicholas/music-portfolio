import { Box, Button, Flex, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="">
      <Box className="bg-slate-500 px-4">
        <Flex gap="4" justify="flex-end">
          <Link
            variant="plain"
            href="/"
            className="bg-purple-500 px-2 my-2 rounded-lg"
          >
            home
          </Link>
          <Link
            variant="plain"
            href="#"
            className="bg-purple-500 px-2 my-2 rounded-lg"
          >
            about
          </Link>
          <Link
            variant="plain"
            href="#"
            className="bg-purple-500 px-2 my-2 rounded-lg"
          >
            [//..//] Lash Lash
          </Link>
          <Link
            variant="plain"
            href="#"
            className="bg-purple-500 px-2 my-2 rounded-lg"
          >
            Mongen
          </Link>
        </Flex>
      </Box>
    </div>
  );
}
