{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

    # for `flake-utils.lib.eachSystem`
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ ];
          config.allowUnfree = false;
        };
      in
      {
        devShells = {
          default = with pkgs; pkgs.mkShellNoCC {
            buildInputs = [
              git
              hugo
            ];

            # shellHook = with pkgs; ''
            #   export PRISMA_SCHEMA_ENGINE_BINARY="${prisma-engines}/bin/schema-engine"
            #   export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
            #   export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
            # '';
          };
        };
      }
    );
}
