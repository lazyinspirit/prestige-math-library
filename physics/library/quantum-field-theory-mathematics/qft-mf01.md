---
page: qft-mf01
title: "Schwartz/distribution spaces and Hilbert Fock conventions"
status: published
library: mathematics
companion: qft-mf01-examples
requires: ["fourier-transform-convolution-and-approximate-identities", "qm-math-oscillator", "schwartz-space-and-the-plancherel-theorem", "field-extensions-and-the-complex-numbers", "tempered-distributions-and-the-fourier-transform", "density-separability-and-convolution-in-lp"]
items:
  - def-qft-fock-and-test-spaces
  - lem-qft-hermite-graph-core-for-position
  - lem-qft-l2-product-tensor-identification
  - lem-qft-fock-ccr-car
  - lem-qft-fock-one-mode-splitting
  - lem-qft-second-quantized-spectrum
  - lem-qft-segal-weyl-domain
examples: []
---

This page fixes Schwartz tests, compactly supported smooth tests and tempered distributions, then the second-variable-linear Hilbert pairing and symmetric or antisymmetric Fock sectors. Creation and annihilation are defined sector by sector, and the local results distinguish their maximal domains from the dense finite-particle domain. The bosonic CCR hold on that common invariant domain; the fermionic CAR hold for bounded operators on the full antisymmetric Fock space.

Three intermediate results supply the product-L2 tensor identification, the Hermite graph core for position multiplication and the one-mode Fock factorization. They support the Segal field closure and the exact second-quantized multiplier domains. The Segal convention is $(a^\dagger(h)+a(h))/\sqrt2$, with Weyl phase $\exp(-i\operatorname{Im}\langle h,k\rangle_2/2)$ and vacuum Gaussian $\exp(-\|h\|^2/4)$. All choice assumptions are stated in the individual items as Countable Choice.

The arguments use the declared tensor, Fourier, Hermite and operator-domain suppliers. Dereziński, Tong, Teschl and Dyatlov are cited for source context in the items and coverage record. The completed author records PDF fetch-stamp limitations caused by unavailable `mutool`; documented local arguments and source-resolution records do not constitute fetched-PDF verification or independent acceptance. The content remains draft mathematical construction, with no physical statistics assignment, point-field measurement or empirical claim.
