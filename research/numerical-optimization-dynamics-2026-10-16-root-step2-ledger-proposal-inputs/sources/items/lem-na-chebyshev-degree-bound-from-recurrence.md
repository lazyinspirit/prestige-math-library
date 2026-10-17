---
id: lem-na-chebyshev-degree-bound-from-recurrence
kind: lemma
title: "The Chebyshev recurrence gives degree at most its index"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-chebyshev-polynomials-first-and-second-kind, def-real-polynomial-degree-leading-coefficient-and-monic, thm-induction-principle]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The coefficient-support induction is finite and choice-free.
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, the Chebyshev polynomial basis used in the interpolant."
---

## Statement

For every integer $n\ge0$, the coefficient list of the first-kind Chebyshev polynomial $T_n$ from [[def-chebyshev-polynomials-first-and-second-kind]] has no nonzero coefficient above index $n$. In particular, $\deg T_n\le n$.

## Facts & Assumptions

**Given:** The recursively defined first-kind Chebyshev polynomials.

[A1] $n$ ranges over nonnegative integer indices.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, $T_{k+2}=2XT_{k+1}-T_k$, and polynomial multiplication uses coefficient convolution.

[F2] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a formal polynomial is a finite coefficient list and its degree is the largest index with nonzero coefficient.

[F3] [[thm-induction-principle]]: induction on natural indices is valid.

## Proof

1.1 Define $P(k)$ to assert that $T_k$ has no nonzero coefficient above $k$ and $T_{k+1}$ has none above $k+1$. At $k=0$, this holds because $T_0=1$ and $T_1=X$ by [F1]. [given, A1, F1, base, algebra]

1.2 Assume $P(k)$. By [F1], the coefficient of $XT_{k+1}$ at index $q$ is the coefficient of $T_{k+1}$ at index $q-1$ (zero when $q=0$), so it vanishes for $q>k+2$. The coefficient of $T_k$ vanishes for those indices as well; hence $T_{k+2}=2XT_{k+1}-T_k$ has no coefficient above $k+2$. Together with the second assertion of $P(k)$, this is $P(k+1)$. [A1, F1, F2, IH, algebra]

2.1 By [F3], steps 1.1 and 1.2 prove $P(k)$ for every natural $k$. Its first clause gives the support bound for every $n$ in [A1]. [given, A1, F3, step 1.1, step 1.2, induction, discharge-induction] ∎
