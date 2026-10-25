---
id: "thm-canonical-truncations-fit-a-distinguished-triangle"
kind: "theorem"
title: "Canonical truncations fit a distinguished triangle"
deps: ["lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology", "thm-the-derived-category-inherits-a-triangulated-structure", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "thm-long-exact-sequence-in-homology"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/08J5"
      title: "Remark 13.12.4 and its three triangles"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every short exact sequence $0\to A\xrightarrow iB\xrightarrow qC\to0$ of cochain complexes gives a natural distinguished triangle $A\to B\to C\to A[1]$ in $D(\mathcal A)$. In particular, for every integer $n$ there are canonical distinguished triangles

$$\tau^{\leq n}X\to X\to\tau^{\geq n+1}X\to(\tau^{\leq n}X)[1],$$

$$\tau^{\leq n}X\to\tau^{\leq n+1}X\to H^{n+1}(X)[-n-1]\to(\tau^{\leq n}X)[1],$$

$$H^n(X)[-n]\to\tau^{\geq n}X\to\tau^{\geq n+1}X\to H^n(X)[-n+1].$$

## Facts & Assumptions

**Given:** Every short exact sequence $0\to A\xrightarrow iB\xrightarrow qC\to0$ of cochain complexes gives a natural distinguished triangle $A\to B\to C\to A[1]$ in $D(\mathcal A)$. In particular, for every integer $n$ there are canonical distinguished triangles

$$\tau^{\leq n}X\to X\to\tau^{\geq n+1}X\to(\tau^{\leq n}X)[1],$$

$$\tau^{\leq n}X\to\tau^{\leq n+1}X\to H^{n+1}(X)[-n-1]\to(\tau^{\leq n}X)[1],$$

$$H^n(X)[-n]\to\tau^{\geq n}X\to\tau^{\geq n+1}X\to H^n(X)[-n+1].$$

[F1] Canonical truncations preserve the stated cohomology degrees and give natural truncation maps ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

[F2] The derived category is triangulated, its localization is exact, and images of cone triangles are distinguished ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[F3] A short exact sequence of complexes in an abelian category gives a long exact homology sequence ([[thm-long-exact-sequence-in-homology]]).

## Proof

1.1 Define $e:\operatorname{Cone}(i)\to C$ by $e(b,a)=q(b)$. It is a termwise epimorphic complex map. Its kernel identifies with $\operatorname{Cone}(1_A)$ via $(a',a)\mapsto(i(a'),a)$; the homotopy $h(a',a)=(0,a')$ contracts this kernel, including when $A=0$. The long exact sequence for kernel, cone and quotient makes $e$ a quasi-isomorphism. [F3, algebra]

2.1 The cone triangle is distinguished and $Q(e)$ is invertible. Transporting it gives the short-exact-sequence triangle with connecting map $Q(p)Q(e)^{-1}$, where $p(b,a)=a$ maps to $A[1]$. A map of short exact sequences induces $(b,a)\mapsto(vb,ua)$ on cones, commuting with $e$ and $p$; this proves naturality with the stated signs. [F2, step 1.1, algebra]

3.1 Apply this construction to $0\to\tau^{\leq n}X\to X\to R\to0$. The quotient has $R^n=X^n/\ker d^n\cong\operatorname{im}d^n$, $R^i=X^i$ for $i>n$ and zero below. The natural $R\to\tau^{\geq n+1}X$ is zero at $n$, the quotient at $n+1$, and identity above. Its kernel is the two-term identity complex on $\operatorname{im}d^n$, so it is a quasi-isomorphism. This yields the first triangle. [F1, step 2.1, algebra]

4.1 Apply the first triangle to $\tau^{\leq n+1}X$ at cut $n$; its lower tail has just $H^{n+1}(X)$ in degree $n+1$. Apply it to $\tau^{\geq n}X$ at cut $n$; its upper head is just $H^n(X)$ in degree $n$. The cohomology formulas and natural comparison maps identify the remaining truncations, giving the second and third triangles. [F1, step 3.1, algebra] ∎
