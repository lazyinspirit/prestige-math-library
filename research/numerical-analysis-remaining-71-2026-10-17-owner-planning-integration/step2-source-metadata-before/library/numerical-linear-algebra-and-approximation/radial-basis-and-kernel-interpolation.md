---
page: radial-basis-and-kernel-interpolation
title: "Radial basis and kernel interpolation"
status: draft
requires:
  - finite-precision-direct-factorizations
  - polynomial-interpolation-and-remainder
items:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - lem-rbf-augmented-system-is-invertible
  - def-normalized-matern-spectral-kernel
  - lem-matern-spectral-integral-and-normalization
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-weighted-fourier-space-is-hilbert-and-injective
  - lem-schwartz-dense-in-fourier-bessel-potential-space
  - lem-matern-native-space-fourier-identity-and-positive-definiteness
  - lem-restricted-matern-native-space-is-sobolev
  - lem-cone-sites-admit-stable-polynomial-norming-stencils
  - lem-sobolev-zeros-bound-on-a-cone-domain
  - thm-native-interpolation-projection-and-power-function
  - thm-matern-interpolation-fill-distance-error
  - lem-separated-sites-matern-gram-bound
  - cor-matern-mesh-ratio-conditioning-bound
  - alg-augmented-rbf-finite-difference-weights
  - thm-rbf-fd-polynomial-reproduction-and-local-truncation
examples: []
---

This page defines strict positive-definite interpolation, strict conditional-positive-definite polynomial augmentation, site fill and separation, and an exact augmented RBF-FD procedure. For arbitrary fixed $d\ge1$, $\nu>0$, and $a>0$, it derives the normalized Matérn spectral kernel and proves its weighted-Fourier native-space identity, the restriction-quotient equivalence with $H^{\nu+d/2}(\Omega)$, and the projection and power-function formulas. On bounded Lipschitz domains with a stated uniform interior cone condition, stable polynomial norming stencils give a complete scattered-zeros estimate and the $h^\nu$ interpolation and power-function rate. The fill-distance rate needs no mesh-ratio condition. A separate compact-frequency-window argument proves the $q^{2\nu}$ Gram eigenvalue lower bound for separated sites and the exact-arithmetic conditioning consequence under bounded mesh ratio. The RBF-FD item proves polynomial reproduction and a Taylor truncation estimate retaining the actual weight norm; unisolvence alone is not claimed to bound that norm. Choice assumptions inherited from the weighted-$L^2$ and Hilbert-projection suppliers are stated locally. No Gaussian flat-limit stability, RBF-QR algorithm, PDE stability, or floating-point guarantee for the augmented indefinite solve is asserted.
