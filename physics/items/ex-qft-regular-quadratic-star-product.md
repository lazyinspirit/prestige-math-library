---
id: ex-qft-regular-quadratic-star-product
kind: example
title: Explicit regular quadratic Wick star product
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-regular-polynomial-functional-algebra
  - def-distribution
  - thm-qft-regular-wick-star-associativity
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  def-distribution: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 5
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 5, equation (56) for regular contractions and Example 5.2 for the quadratic Wick-contraction coefficients.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, section 3.3.2, equations (3.243)–(3.245), the four-field contraction expansion.
---

## Example

Let $f,g\in\mathcal D(\mathbb R^d)$, let
$\ell_f(\phi)=\int f(x)\phi(x)\,dx$, and let $W$ be any continuous
bidistribution. For the regular quadratic functionals
$F(\phi)=\ell_f(\phi)^2$ and $G(\phi)=\ell_g(\phi)^2$, the finite
contraction formula is
$$ F\star_W G =\ell_f^2\ell_g^2+4\eta W(f,g)\ell_f\ell_g+2\eta^2W(f,g)^2. $$
The formula is exact in the formal parameter $\eta$.

## Facts & Assumptions

[A1] Let $d\ge1$, $X=\mathbb R^d$, $f,g\in\mathcal D(X)$, and define $\ell_f(\phi)=\int_X f(x)\phi(x)\,dx$ and $\ell_g$ analogously. Let $W\in\mathcal D'(X\times X)$ be a continuous complex-bilinear distribution, and let $\eta$ be formal.

[F1] The first two derivative kernels of $\ell_f^2$ are $2\ell_f(\phi)f$ and $2f\otimes f$, and higher derivatives vanish; the same formulas hold for $g$. The integrals defining $\ell_f$ and $\ell_g$ use the componentwise complex Riemann convention of [[def-qft-regular-polynomial-functional-algebra]].

[F2] A distribution is a continuous complex-linear functional on the test space with bilinear pairing ([[def-distribution]]).

[F3] For continuous bidistributions, the regular star product is the finite contraction sum $F\star_WG=\sum_k\eta^k\langle W^{\otimes k},F^{(k)}\otimes G^{(k)}\rangle/k!$ ([[thm-qft-regular-wick-star-associativity]]).

## Verification

**Given:** [A1]–[F3].

1.1 Substituting the derivatives in [F1] into [F3], terms with $k\ge3$ vanish, so the only contributions are $k=0,1,2$. [given, A1, F1, F2, F3, algebra]

2.1 The $k=0$ term is $\ell_f^2\ell_g^2$. The $k=1$ term is $\eta\langle W,(2\ell_f f)\otimes(2\ell_g g)\rangle =4\eta W(f,g)\ell_f\ell_g$. [step 1.1, A1, F1, F2, F3, algebra]

3.1 The $k=2$ term is $\frac{\eta^2}{2}\langle W^{\otimes2},(2f\otimes f)\otimes (2g\otimes g)\rangle=2\eta^2W(f,g)^2$, because the two independent pairings each equal $W(f,g)$. Adding the three contributions proves the displayed formula. [step 1.1, F1, F2, F3, algebra] ∎
