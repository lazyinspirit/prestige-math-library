---
dependency_level: 17
id: lem-imprimitive-hecke-logarithmic-derivative-finite-euler-control
kind: lemma
title: Exact finite-Euler control of imprimitive Hecke logarithmic derivatives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- thm-finite-order-hecke-l-euler-product
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- thm-ideal-norm-is-multiplicative
- thm-number-field-integral-ideal-factorisation-in-zf
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited from primitive induction and the accepted analytic completion.
  Finite Euler differentiation and its numerical bound introduce no further choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: 'Printed58–61: primitive conductors, Euler products and Theorem1.9 formulation/sketch. The
      complete local argument below is independently reconstructed, not imported from that sketch.'
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§§6–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Ray characters, primitive induction and finite Euler comparison; actual local suppliers are
      used at their exact number-field hypotheses.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field and let $\xi$ be a finite-order ray-class character modulo $\mathfrak m$, induced by its unique primitive character $\psi$ of conductor $\mathfrak f\mid\mathfrak m$. For $\operatorname{Re}s=\sigma>1$, write
$$D_{\mathfrak m}(s,\xi)=-\operatorname{Re}\frac{L'_{\mathfrak m}}{L_{\mathfrak m}}(s,\xi),\qquad D(s,\psi)=-\operatorname{Re}\frac{L'}L(s,\psi).$$
Then
$$D_{\mathfrak m}(s,\xi)=D(s,\psi)-\operatorname{Re}\sum_{\substack{\mathfrak p\mid\mathfrak m_0\\\mathfrak p\nmid\mathfrak f_0}}\frac{\psi(\mathfrak p)(N\mathfrak p)^{-s}\log N\mathfrak p}{1-\psi(\mathfrak p)(N\mathfrak p)^{-s}},$$
and
$$|D_{\mathfrak m}(s,\xi)-D(s,\psi)|\le\sum_{\mathfrak p\mid\mathfrak m_0}\frac{\log N\mathfrak p}{(N\mathfrak p)^\sigma-1}\le\log N\mathfrak m_0.$$
For the trivial character at real $\sigma>1$ the correction has the one-sided sign
$$D_{\mathfrak m}(\sigma,1_{\mathfrak m})\le D(\sigma,1).$$
The finite Euler factors define a meromorphic continuation of $L_{\mathfrak m}$ on $\operatorname{Re}s>0$, have no zeros there, and preserve all zero multiplicities and the possible simple trivial pole at $1$ of the primitive function. The primitive inducing character is trivial exactly when $\xi$ is trivial.

## Facts & Assumptions

**Given:** The stated inducing character, modulus and AC/CC branch.

[F1] Conductors and primitive inducing characters are unique, all ray maps are onto, and triviality is preserved under pullback. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F2] On $\operatorname{Re}s>1$, $L_{\mathfrak m}(s,\xi)=L(s,\psi)\prod_{\mathfrak p\mid\mathfrak m_0,\ \mathfrak p\nmid\mathfrak f_0}(1-\psi(\mathfrak p)(N\mathfrak p)^{-s})$ and the Euler products converge absolutely. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[thm-finite-order-hecke-l-euler-product]]

[F3] The primitive completion, with the stated gamma factors, is entire after clearing its possible poles at $0,1$ and is nonzero there after that clearing. Gamma is holomorphic and nonzero for positive real part. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F4] Ideal norms are multiplicative positive integers and integral ideals have finite prime factorizations. [[thm-ideal-norm-is-multiplicative]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[A1] AC and CC retain the exact number-field and analytic supplier branch. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The data above.

1.1 Every displayed Euler factor in [F2] is nonzero for $\sigma>1$, since $|\psi(\mathfrak p)(N\mathfrak p)^{-s}|=(N\mathfrak p)^{-\sigma}<1$. The logarithmic derivative of $1-zq^{-s}$ is $zq^{-s}\log q/(1-zq^{-s})$, with positive sign. Differentiating the finite product identity therefore gives the asserted negative correction in $D_{\mathfrak m}$. The primitive Euler product is also nonzero: its absolutely convergent scalar logarithmic series exponentiates to the product. Thus all quotients used here are defined. [A1, F2, given, algebra]

2.1 The triangle inequality bounds each correction by $\log q/(q^\sigma-1)$. For $q\ge2$ and $\sigma>1$, $q^\sigma-1\ge q-1\ge1$, so its sum is at most $\sum_{\mathfrak p\mid\mathfrak m_0}\log N\mathfrak p\le\log N\mathfrak m_0$ by [F4]. If the character is trivial and $s=\sigma$ real, every numerator and denominator in the correction is positive real; subtraction gives the claimed one-sided inequality. Empty prime lists give equality. [F1, F4, step 1.1, algebra]

3.1 Each finite factor is entire. A zero requires $|q^{-s}|=1$, hence $\operatorname{Re}s=0$, so the product is nonzero on the whole right half-plane. By [F3], division of the pole-cleared completion by its nonzero right-half-plane gamma factors supplies a meromorphic primitive $L$ there, holomorphic for nontrivial $\psi$ and with a possible pole only at $1$ for trivial $\psi$; its pole is simple and nonzero because the cleared value at $1$ is nonzero. Multiplication by the finite product continues $L_{\mathfrak m}$ and preserves zeros and orders at every point of this half-plane, as well as that pole. The triviality equivalence follows from surjectivity [F1]. [F1, F2, F3, step 1.1, algebra] ∎ 