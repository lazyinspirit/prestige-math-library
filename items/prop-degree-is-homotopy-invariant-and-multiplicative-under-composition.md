---
id: "prop-degree-is-homotopy-invariant-and-multiplicative-under-composition"
kind: "proposition"
title: "Degree is homotopy invariant and multiplicative under composition"
deps: ["def-degree-of-a-self-map-of-an-oriented-sphere", "cor-homotopic-maps-induce-the-same-map-on-singular-homology"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Degree properties (c),(d), p.134"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree properties (c),(d), p.134"
status: "draft"
origin: "pipeline"
proof_strategy: "Apply the published homotopy and functoriality statements to the chosen integral generator. The converse classification is not part of this proposition."
---

## Statement

For $n\ge1$ and continuous sphere self-maps $f,g$, homotopic maps have the same degree and $\deg(g\circ f)=\deg(g)\deg(f)$. Every homotopy equivalence $S^n\to S^n$ has degree $1$ or $-1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using cor-homology-of-spheres. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying $$f_*[S^n]=\deg(f)[S^n].$$ The induced map is furnished by prop-relative-homology-is-functorial-for-maps-of-pairs with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$. ([[def-degree-of-a-self-map-of-an-oriented-sphere]])

[F2] If $f,g:X\to Y$ are homotopic continuous maps, then for every $n\geq 0$ and every abelian group $G$ the induced homomorphisms on singular homology agree: $$H_n(f_\#)=H_n(g_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G).$$ ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]])

## Proof

1.1 Homotopic maps induce the same homomorphism on integral $H_n$, so their multiples of the orientation generator agree. This proves homotopy invariance, including constant maps. [F1, F2]

1.2 Functoriality gives $(g\circ f)_*[S^n]=g_*(\deg(f)[S^n])=\deg(f)\deg(g)[S^n]$, so the integers multiply. The identity has degree $1$. [F1, algebra]

2.1 If $u$ is a homotopy inverse of $f$, then $1=\deg(u\circ f)=\deg(u)\deg(f)$. The only units of $\mathbb Z$ are $\pm1$, proving the last assertion without a converse. [step 1.1, step 1.2, algebra] ∎
