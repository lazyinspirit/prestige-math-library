---
id: lem-na-chebyshev-recurrence-angle-identity
kind: lemma
title: "The Chebyshev recurrence agrees with cosine multiple angles"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-chebyshev-polynomials-first-and-second-kind, thm-sine-and-cosine-addition-formulas, thm-induction-principle]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The finite induction uses no choice principle.
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Chebyshev points and their use in the quadrature formula."
---

## Statement

For every integer $n\ge0$ and every real $\theta$, the first-kind Chebyshev polynomial from [[def-chebyshev-polynomials-first-and-second-kind]] satisfies
$$T_n(\cos\theta)=\cos(n\theta).$$

## Facts & Assumptions

**Given:** An integer $n\ge0$ and a real angle $\theta$.

[A1] $n$ is a nonnegative integer and $\theta\in\mathbb R$.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, and $T_{k+2}=2XT_{k+1}-T_k$ for every $k\ge0$.

[F2] [[thm-sine-and-cosine-addition-formulas]]: $\cos((k+2)\theta)=2\cos\theta\cos((k+1)\theta)-\cos(k\theta)$ for every integer $k\ge0$ and real $\theta$.

[F3] [[thm-induction-principle]]: an identity true at the initial indices and preserved by the stated recurrence holds for every natural index.

## Proof

1.1 For the fixed real $\theta$ in [A1], define $P(k)$ to assert the identity at both indices $k$ and $k+1$. At $k=0$, the identities for $T_0$ and $T_1$ give $P(0)$. [given, A1, F1, base, algebra]

1.2 Fix $\theta\in\mathbb R$ as in [A1] and suppose $P(k)$. By the polynomial recurrence [F1], $T_{k+2}(\cos\theta)=2\cos\theta\,T_{k+1}(\cos\theta)-T_k(\cos\theta)$. Substituting the two induction hypotheses and then [F2] gives $T_{k+2}(\cos\theta)=\cos((k+2)\theta)$, so $P(k+1)$ holds. [given, A1, F1, F2, IH, algebra]

2.1 By [F3], steps 1.1 and 1.2 prove $P(k)$ for every natural $k$; its first clause is the identity for every $n$ in [A1]. [A1, F3, step 1.1, step 1.2, induction, discharge-induction] ∎
