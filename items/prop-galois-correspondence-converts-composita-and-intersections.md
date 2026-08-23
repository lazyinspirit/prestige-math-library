---
id: prop-galois-correspondence-converts-composita-and-intersections
kind: proposition
title: "The Galois correspondence exchanges composita with subgroup intersections and field intersections with generated subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory, def-generated-subgroup, lem-intersection-of-subgroups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.13"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be finite Galois, and let $E_i=K^{H_i}$ correspond to subgroups $H_i\le\operatorname{Gal}(K/F)$ for $i=1,2$. Then

$$\operatorname{Gal}(K/E_1E_2)=H_1\cap H_2,$$

and

$$\operatorname{Gal}(K/E_1\cap E_2)=\langle H_1,H_2\rangle.$$

## Facts & Assumptions

**Given:** The compositum $E_1E_2$, the generated subgroup $\langle H_1,H_2\rangle$ of [[def-generated-subgroup]], and the subgroup intersection of [[lem-intersection-of-subgroups]].

[L1] The assignments $H\mapsto K^H$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing bijections ([[thm-fundamental-theorem-of-finite-galois-theory]]).

## Proof

**Proof technique:** direct.

1.1 An automorphism of $K$ fixes $E_1E_2$ exactly when it fixes every element of both $E_1$ and $E_2$, exactly when it belongs to both $H_1$ and $H_2$. Therefore $\operatorname{Gal}(K/E_1E_2)=H_1\cap H_2$. [L1, algebra]

2.1 An element of $K$ is fixed by $\langle H_1,H_2\rangle$ exactly when it is fixed by every element of both generating subgroups, so $K^{\langle H_1,H_2\rangle}=K^{H_1}\cap K^{H_2}=E_1\cap E_2$. Applying [L1] gives the second formula. These membership equivalences also cover equal fields, the base and top fields, and trivial or full subgroups. [L1, step 1.1] ∎
