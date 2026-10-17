---
id: lem-na-chebyshev-degree-bound-from-recurrence
kind: lemma
title: "The Chebyshev recurrence gives degree at most its index"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-chebyshev-polynomials-first-and-second-kind, def-real-polynomial-degree-leading-coefficient-and-monic]
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

## Proof

1.1 The initial indices $0,1$ lie in the nonnegative integer range [A1], and the initial polynomials $T_0=1$ and $T_1=X$ have no nonzero coefficient above those indices by [F1]. [given, A1, F1, base, algebra]

1.2 For successive nonnegative indices in [A1], suppose $T_k$ has no coefficient above $k$ and $T_{k+1}$ has none above $k+1$. By [F1], the coefficient of $XT_{k+1}$ at index $q$ is the coefficient of $T_{k+1}$ at index $q-1$ (zero when $q=0$), so it vanishes for $q>k+2$. The coefficient of $T_k$ vanishes for those indices as well; hence $2XT_{k+1}-T_k$ has no coefficient above $k+2$. [A1, F1, F2, IH, induction, algebra]

2.1 Step 1.1 supplies the two base indices and step 1.2 advances them, so induction proves the support bound for every nonnegative integer index $n$ in [A1]. [given, A1, step 1.1, step 1.2, induction, discharge-induction] ∎
