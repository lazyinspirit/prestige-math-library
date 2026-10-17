---
page: tgr-mhs02
title: Positive chiral current and exponential test-coordinate model
status: published
library: mathematics
companion: tgr-mhs02-examples
requires:
- qft-mf01
- countability-and-uncountability
- lebesgue-measure-on-euclidean-space
- properties-of-the-integral-and-the-working-ftc
- complex-differentiability-and-cauchy-riemann
- the-total-derivative
- the-complex-exponential-and-eulers-formula
- the-exponential-function
- the-lebesgue-integral-and-the-convergence-theorems
- product-measures-and-the-fubini-tonelli-theorems
- orthonormal-bases-parseval-and-fourier-series
- density-separability-and-convolution-in-lp
- the-logarithm-and-general-powers
- inner-product-spaces-and-orthogonality
- schwartz-space-and-the-plancherel-theorem
- tempered-distributions-and-the-fourier-transform
- sine-cosine-and-the-definition-of-pi
- complex-power-series-and-analytic-functions
- simply-connected-plane-domains
- contour-integration
items:
- lem-tgr-positive-damping-boundary
- lem-tgr-exponential-current
- lem-tgr-thermal-contour-spectrum
examples: []
---

[[lem-tgr-positive-damping-boundary]] defines a distribution on $\mathbb R^d$ as a continuous complex-linear functional on $C_c^\infty(\mathbb R^d;\mathbb C)$ with its usual fixed-support Fr\'echet and compact-test inductive-limit topologies. It defines $\mathbf 1_m\otimes B$ by the displayed test pairing and proves that smooth positive damping preserves the lower double-pole boundary.

[[lem-tgr-exponential-current]] defines $J(f)$ on the invariant finite-particle domain and proves that every fixed-domain matrix coefficient is a distribution. It defines positive type by the nonnegative tested quadratic form $\langle C,\varphi_{f,f}\rangle$, where $\varphi_{f,f}(s)=\int\overline{f(x+s)}f(x)\,dx$, and defines its chiral model as the single positive-frequency sector $k>0$. The exponential-coordinate current is $j_\kappa(g)=J(f_g)$ for the compact-test pullback stated there; this is the current distribution used in the rest of the page.

[[lem-tgr-thermal-contour-spectrum]] defines the angular-frequency spectrum as the Fourier transform with kernel $e^{-i\omega s}$ of the tested two-point covariance and proves its continuous value at zero and detailed-balance relation. The proof uses the displayed analytic strip and rectangle with exactly one double pole.

The claims are mathematical statements about this specified test-coordinate model. They do not derive Hawking radiation from collapse, restrict a four-dimensional field to a null curve, assign a measured temperature, assert a detector response, or establish the norm-continuous C*-algebra KMS structure defined and explicitly excluded in [[lem-tgr-thermal-contour-spectrum]]. The complete conditional proofs and source dispositions are recorded in the assigned item and batch evidence.
