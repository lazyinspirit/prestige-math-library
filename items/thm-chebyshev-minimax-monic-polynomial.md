---
id: thm-chebyshev-minimax-monic-polynomial
kind: theorem
title: "For $n\\ge1$, $2^{1-n}T_n$ is the minimax monic polynomial of degree $n$ on $[-1,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind, lem-chebyshev-degree-leading-coefficients-and-extreme-values, thm-chebyshev-multiple-angle-identities, thm-sine-cosine-signs-monotonicity-and-ranges, thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, def-real-polynomial-degree-leading-coefficient-and-monic, thm-extreme-value-r, thm-algebra-of-continuous-functions, thm-intermediate-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Statement

For $n\ge1$, the polynomial $P_n=2^{1-n}T_n$ is monic of degree $n$ and for every monic real polynomial $q$ of degree $n$,
$$\max_{x\in[-1,1]}|q(x)|\ge2^{1-n}=\max_{x\in[-1,1]}|P_n(x)|.$$
Equality is attained by $P_n$. The conventions and prerequisite facts used below are recorded in [[def-chebyshev-polynomials-first-and-second-kind]], [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]], [[thm-chebyshev-multiple-angle-identities]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]], [[def-real-polynomial-degree-leading-coefficient-and-monic]], [[thm-extreme-value-r]], [[thm-algebra-of-continuous-functions]], and [[thm-intermediate-value]].

## Facts & Assumptions

**Given:** A natural $n\ge1$ and a monic polynomial $q$ of degree $n$.

[L1] [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]] says that $T_n$ has degree $n$ and leading coefficient $2^{n-1}$.

[L2] [[thm-chebyshev-multiple-angle-identities]] gives $T_n(\cos\theta)=\cos(n\theta)$ and $T_n(\cos(j\pi/n))=(-1)^j$ for $0\le j\le n$.

[L3] [[thm-sine-cosine-signs-monotonicity-and-ranges]] says that cosine has range $[-1,1]$ and is strictly decreasing on $[0,\pi]$.

[L4] [[thm-intermediate-value]] gives a zero between opposite signs of a continuous real-valued function.

[L5] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]] bounds the number of distinct real roots by the degree.

[L6] [[thm-extreme-value-r]] makes the maximum of $|q|$ on the nonempty compact interval $[-1,1]$ exist once $q$ is continuous.

[L7] [[thm-algebra-of-continuous-functions]] states that every real polynomial function is continuous.

## Proof

**Proof technique:** contradiction.

1.1 By [L1], $P_n=2^{1-n}T_n$ is monic of degree $n$. Put $y_j=\cos((n-j)\pi/n)$ for $0\le j\le n$. By [L3], $y_0<\cdots<y_n$, and [L2] gives $P_n(y_j)=(-1)^{n-j}2^{1-n}$. [L1, L2, L3]

2.1 For each $x\in[-1,1]$, [L3] supplies $\theta$ with $x=\cos\theta$; [L2] then gives $|P_n(x)|=2^{1-n}|\cos(n\theta)|\le2^{1-n}$. Equality holds at every $y_j$, so $\max_{[-1,1]}|P_n|=2^{1-n}$. [L2, L3, step 1.1]

2.2 By [L7], $q$ and hence $|q|$ are continuous, so [L6] makes the displayed maximum well-defined. Suppose, for contradiction, that it is $<2^{1-n}$. Then $r:=q-P_n$ has degree at most $n-1$. At the successive points $y_j$, the values of $r$ have the opposite alternating signs to $P_n$, hence are nonzero and alternate. [L6, L7, assume-contra, step 1.1]

3.1 By [L7], $r$ is continuous, so [L4] gives a root of $r$ in each disjoint interval $(y_j,y_{j+1})$ $(0\le j<n)$. Thus $r$ has at least $n$ distinct roots, contradicting [L5] because step 2.2 makes $r$ nonzero of degree at most $n-1$. The contradiction proves the lower bound, while step 2.1 proves equality for $P_n$. [L4, L5, L7, step 2.1, step 2.2, discharge-contradiction] ∎
