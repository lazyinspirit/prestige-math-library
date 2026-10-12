---
requires: ["gr-gr14-full-high-regularity-symmetric-hyperbolic-proof"]
page: gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples
title: "Gr14 Full High Regularity Symmetric Hyperbolic Proof — Examples"
status: draft
library: physics
items: []
examples: ["cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves",
          "ex-gr-periodic-energy-method-check",
          "cex-gr-negative-sound-speed-derivative-breaks-evolution",
          "ex-gr-fluid-principal-symbol-radiation"]
---
This page collects worked checks and countermodels for
[[gr-gr14-full-high-regularity-symmetric-hyperbolic-proof]].

**Constant-coefficient energy method.** [[ex-gr-periodic-energy-method-check]]
solves the periodic transport system $\partial_tu+2\partial_1u=0$ explicitly,
identifies the solution with the E0 Galerkin limit and verifies the weighted
energy identity $e'(t)=0$.

**Sharpness of the torus embedding.** 
[[cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves]] exhibits the
shell functions on $\mathbb T^3_{2\pi}$ whose $C^0/H^1$ ratio diverges, showing
that the hypothesis $s-m>3/2$ of [[lem-gr-periodic-sobolev-embedding]] cannot
be relaxed at $s-m=1$.

**Fluid principal symbol.** [[ex-gr-fluid-principal-symbol-radiation]] computes
the symbol matrix of [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]] at
a radiation equation of state and evaluates its positive eigenvalues.

**Failure without sound-speed positivity.**
[[cex-gr-negative-sound-speed-derivative-breaks-evolution]] linearizes the
barotropic system at a state with $p'(\epsilon_0)<0$, exhibits the Fourier
modes growing like $\cosh(\sqrt{-p'}n t)$ and shows that no fixed-Sobolev
local existence with continuous dependence can hold without a positivity
hypothesis on $p'$.
