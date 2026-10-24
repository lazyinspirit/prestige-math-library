---
id: thm-mollified-biot-savart-kernel-has-l1-consistency
kind: theorem
title: L1 consistency of the mollified Biot-Savart kernel
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-euclidean-inner-product
  - def-mollified-biot-savart-vortex-kernel
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - def-countable-choice
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: Countable Choice is required by the polar-coordinate and L1 change-of-variables suppliers used in the estimate; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: Gregory R. Baker and Lan D. Pham, A Comparison of Blob Methods for Vortex Sheet Roll Up
      url: https://people.math.osu.edu/baker.27/blobs.pdf
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Assume Countable Choice and the radial compactly supported mollifier of [[def-mollified-biot-savart-vortex-kernel]]. Write $\|F\|_{L^1}:=\int_{\mathbb R^2}|F(x)|dx$ and let $\|g\|_{L^\infty}$ be the essential supremum of $|g|$. There is a constant $C_\rho<\infty$, independent of $\varepsilon>0$, such that
$$\|K_\varepsilon-K\|_{L^1(\mathbb R^2)}\le C_\rho\varepsilon.$$
Consequently, for every bounded measurable vorticity density $\omega$,
$$\|(K_\varepsilon-K)*\omega\|_{L^\infty}\le C_\rho\varepsilon\|\omega\|_{L^\infty}.$$
This is an error estimate at fixed $\varepsilon$; it does not prove a singular-limit theorem for the particle dynamics.

## Facts & Assumptions

**Given:** The mollifier and kernel in [[def-mollified-biot-savart-vortex-kernel]], and Countable Choice for polar integration.

[A1] Assume Countable Choice for the polar-coordinate and $L^1$ change-of-variables suppliers ([[def-countable-choice]]).

[F1] The mollifier is radial, nonnegative, supported in $|z|\le\varepsilon$, and has mass one ([[def-mollified-biot-savart-vortex-kernel]]).

[F2] Polar coordinates give $\int f(x)d\lambda_2(x)=\int_0^\infty\int_{S^1}f(r\theta)r\,d\sigma(\theta)dr$ for nonnegative Borel $f$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] Taylor expansion through first order has a second-derivative remainder bounded along admitted segments ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

[F4] Under Countable Choice, a $C^1$ diffeomorphism obeys change of variables for $L^1$ functions ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F5] The Euclidean norm on $\mathbb R^2$ is the square root of the sum of coordinate squares ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 On $|x|\le2\varepsilon$, [F2] and $|K(x)|\le(2\pi|x|)^{-1}$ give $\int_{|x|\le2\varepsilon}|K(x)|dx\le C\varepsilon$. Also $|K_\varepsilon(x)|\le\|\rho_\varepsilon\|_\infty\int_{|w|\le3\varepsilon}|K(w)|dw\le C_\rho/\varepsilon,$ so its integral over this disk is at most $C_\rho\varepsilon$. [A1, F1, F2, algebra]

1.2 First, each component $z_j\rho_\varepsilon(z)$ is integrable because it is bounded and compactly supported. Radiality makes it odd under the reflection $z\mapsto-z$; applying [F4] to that reflection, whose Jacobian determinant has absolute value one, gives $\int z_j\rho_\varepsilon(z)\,dz=-\int z_j\rho_\varepsilon(z)\,dz$, hence every first-moment component is zero. Now fix $|x|>2\varepsilon$ and $|z|\le\varepsilon$. The segment from $x$ to $x-z$ is contained in the open ball $B_{|x|/2}(x)$, which is convex and avoids the origin, and each second coordinate derivative of $K(w)=w^\perp/(2\pi|w|^2)$ is bounded there by $C|x|^{-3}$: direct differentiation gives terms of the forms $c\,w_i|w|^{-4}$ and $c\,w_iw_jw_k|w|^{-6}$. Apply the scalar Taylor theorem [F3] to each component of $K$ along this segment. The coordinate remainders are each bounded by $C|z|^2|x|^{-3}$, so [F5] gives the vector bound $K(x-z)=K(x)-DK(x)z+R(x,z)$ with $|R(x,z)|\le C|z|^2|x|^{-3}$. Integrating in $z$ against $\rho_\varepsilon$, the linear term vanishes by the just-proved first-moment identity, and $\int|z|^2\rho_\varepsilon(z)dz\le\varepsilon^2$. Hence $|K_\varepsilon(x)-K(x)|\le C\varepsilon^2|x|^{-3}$. [F1, F3, F4, F5, algebra]

2.1 Integrating the bound in step 1.2 by [F2] over $|x|>2\varepsilon$ gives at most $C\varepsilon^2\int_{2\varepsilon}^\infty r^{-3}rdr\,\sigma(S^1)\le C\varepsilon.$ Together with step 1.1 this proves the stated $L^1$ estimate. [F2, step 1.1, step 1.2, algebra]

3.1 For each $x$, the convolution difference is absolutely bounded by $\int|K_\varepsilon(x-y)-K(x-y)|\,|\omega(y)|dy\le\|K_\varepsilon-K\|_1\|\omega\|_\infty.$ Taking the essential supremum in $x$ and using step 2.1 proves the force estimate. [step 2.1, algebra] ∎
