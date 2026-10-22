---
id: prop-qftx-finite-gaussian-shell-semigroup
kind: proposition
domain: mathematics
library: mathematics
title: Successive Gaussian shell integration composes
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-qftx-finite-gaussian-shell-transform
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
forward_refs: []
dependency_roles:
  def-qftx-finite-gaussian-shell-transform: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  lem-characteristic-function-of-a-multivariate-normal-law: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Skinner, Advanced Quantum Field Theory, Chapter 2: QFT in Zero Dimensions"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf"
      locator: "§§2.1–2.2, printed pp.13–16: normalized Gaussian integration at a finite regulator."
    - title: "Nima Moshayedi, Quantum Field Theory and Functional Integrals"
      url: "https://arxiv.org/pdf/1902.08652"
      locator: "§11.2, printed pp.44–48: finite-dimensional Gaussian laws and their characteristic functions."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $d\ge1$, let $C_1,C_2$ be real symmetric positive-semidefinite $d\times d$ covariance matrices, and let $f:\mathbb R^d\to[0,\infty]$ be Borel. With $T_C$ as in [[def-qftx-finite-gaussian-shell-transform]],
$$T_{C_2}(T_{C_1}f)(x)=T_{C_1+C_2}f(x)\qquad(x\in\mathbb R^d),$$
as an equality in $[0,\infty]$. In particular, for every finite nonnegative Borel potential $V$,
$$\exp[-(V_{C_1})_{C_2}(x)]=\exp[-V_{C_1+C_2}(x)].$$
The Gaussian measures are normalized probabilities, so no determinant/vacuum constant appears; changing to unnormalized Gaussian weights requires carrying their normalization factors. This is an exact finite-regulator semigroup identity. Differentiating it to obtain a Polchinski-type flow is not asserted and would require a differentiable covariance path and separate differentiability/integrability hypotheses.

## Facts & Assumptions

**Given:** AC; finite dimension; the covariance matrices and Borel function in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the finite-dimensional Gaussian laws.

[F1] [[def-qftx-finite-gaussian-shell-transform]]: $T_Cf(x)=\int f(x+z)\,d\gamma_C(z)$, and $V_C=-\log T_C(e^{-V})$ when $V$ is finite nonnegative Borel.

[F2] [[def-multivariate-normal-law]]: the law $\gamma_C$ exists for every positive-semidefinite covariance $C$, including singular $C$.

[F3] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the product of sigma-finite measures is a sigma-finite measure with the rectangle product formula.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable complex functions on a sigma-finite product may be integrated in either order.

[F5] [[lem-characteristic-function-of-a-multivariate-normal-law]]: $\gamma_C$ has characteristic function $\exp(-u^TCu/2)$, and that transform uniquely determines its law, including singular $C$.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions have measurable section integrals and equal iterated integrals.

## Proof

**Proof technique:** product Gaussian law and Tonelli.

**Given:** The hypotheses and conventions in the Statement.

1.1 On $(\mathbb R^d,\gamma_{C_1})\times(\mathbb R^d,\gamma_{C_2})$, the sum map $(y,z)\mapsto y+z$ has characteristic function
$$
\int e^{iu\cdot(y+z)}\,d(\gamma_{C_1}\times\gamma_{C_2})
=\exp(-u^TC_1u/2)\exp(-u^TC_2u/2)
=\exp[-u^T(C_1+C_2)u/2].
$$
The product measure exists by [F3], the integrand is bounded and therefore integrable, and [F4] justifies the iterated integral/product factorization. Since $C_1+C_2$ is positive semidefinite, [F2] and [F5] identify the pushforward under addition as $\gamma_{C_1+C_2}$. This includes singular and zero covariances. [A1, F2, F3, F4, F5, given]

2.1 The function $(x,y,z)\mapsto f(x+y+z)$ is nonnegative and Borel. Apply [F6] to integrate first in $y$ and then in $z$; the resulting iterated integral equals the integral against the product law of $(y,z)$. By step 1.1 its pushforward under addition is $\gamma_{C_1+C_2}$. Therefore
$$\int\left(\int f(x+z+y)\,d\gamma_{C_1}(y)\right)d\gamma_{C_2}(z)
=\int f(x+w)\,d\gamma_{C_1+C_2}(w),$$
including the value $+\infty$. By [F1] this is exactly $T_{C_2}(T_{C_1}f)(x)=T_{C_1+C_2}f(x)$. [F1, F6, step 1.1, given]

3.1 For finite nonnegative Borel $V$, [F1] gives $\exp[-V_{C_1}(x)]=T_{C_1}(e^{-V})(x)$ and the corresponding identity after applying $C_2$. Substituting $f=e^{-V}$ into step 2.1 proves the stated potential-weight identity. Since the normalized Gaussian integrals are expectations under probability laws, no determinant factor occurs. No differentiation or covariance-path limit was used. [F1, step 2.1, algebra] ∎
