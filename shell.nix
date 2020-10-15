let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-13_x
    yarn
    autoreconfHook
    mozjpeg
  ];
}
