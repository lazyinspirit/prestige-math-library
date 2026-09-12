---
id: ex-finite-a1-specialization-of-weyl-kac
kind: example
title: Finite A1 specialization of Weyl Kac
deps: ["thm-weyl-kac-character-formula", "prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Theorem 10.2.1 specialized to A1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Theorem 11.2.1 specialized to A1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For $\mathfrak{sl}_2$ and $m\in\mathbb Z_{\ge0}$, with $\alpha=2\omega$,
$$\operatorname{ch}L(m\omega)=\frac{e^{(m+1)\omega}-e^{-(m+1)\omega}}{e^\omega-e^{-\omega}}=\sum_{j=0}^m e^{(m-2j)\omega}.$$
Thus the simple module has dimension $m+1$ and every listed weight has multiplicity one.

## Facts & Assumptions

**Given:** Type $A_1$, $\alpha(h)=2$ and $\omega(h)=1$.

[F1] [[thm-weyl-kac-character-formula]] gives the formal quotient.

[F2] [[prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras]] identifies the finite-type presentation with its semisimple algebra.

## Verification

1.1 The rank-one presentation in F2 has the three generators $e,h,f$ with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, so it is $\mathfrak{sl}_2$. There is one positive root $\alpha=2\omega$, and its reflection sends $\omega$ to $-\omega$, giving $W=\{1,s\}$ and $\rho=\omega$. Inserting these in F1 gives the displayed quotient. [F1, F2, algebra]

2.1 Set $x=e^{-2\omega}$. After cancelling a monomial, the quotient in step 1.1 is $e^{m\omega}(1-x^{m+1})/(1-x)$. The polynomial identity $(1-x)\sum_{j=0}^m x^j=1-x^{m+1}$ proves the finite expansion, since $1-x$ is a formal unit. Distinct $j$ give distinct weights, each with coefficient one, so the total dimension is $m+1$. At $m=0$ the sum is $1$, and at $m=1$ it is $e^\omega+e^{-\omega}$. No numerical division at $x=1$ is used; the dimension is read from the already finite polynomial. [step 1.1, algebra] ∎
