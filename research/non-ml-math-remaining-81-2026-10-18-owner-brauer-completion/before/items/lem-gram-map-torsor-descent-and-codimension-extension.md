---
id: lem-gram-map-torsor-descent-and-codimension-extension
kind: lemma
title: Full-rank Gram torsor descent and extension across lower-rank strata
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [lem-symmetric-and-alternating-rank-coordinate-rings, lem-gram-map-fibers-and-rank-strata]
proof_strategy: direct
axiom_use: "No choice principle is used in the stated finite-dimensional descent target."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, Theorem 2.0.3"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 12–14: full-rank orthogonal quotient argument and codimension extension; it uses its imported normality theorem."
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, §4"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 19–22: the tensor-centralizer theorem is deduced after importing the classical FFT/SFT."
---

## Statement

Let $k$ be algebraically closed of characteristic zero, let $V$ have dimension $m\ge1$ with a nondegenerate symmetric form or dimension $m=2n\ge2$ with a nondegenerate alternating form, and let $t\ge m+1$. On the full-rank locus of the rank-$\le m$ Gram variety, the Gram map from spanning tuples in $V^t$ is a principal bundle for the full orthogonal or symplectic group in the étale topology. Its regular invariant functions descend to regular functions on that locus. The omitted rank-$\le m-1$ symmetric stratum has codimension $t-m+1$, and the omitted rank-$\le m-2$ alternating stratum has codimension $2(t-m)+1$. Using normality of the rank varieties, each descended function extends uniquely across the omitted stratum.

## Facts & Assumptions

**Given:** The rank-variety ideal and normality claims required in [[lem-symmetric-and-alternating-rank-coordinate-rings]], and the rank-stratum dimensions in [[lem-gram-map-fibers-and-rank-strata]].

[F1] [[lem-symmetric-and-alternating-rank-coordinate-rings]]: the Gram rank varieties have the stated prime ideals and are normal. This in-run supplier is not yet proved and is not accepted.

[F2] [[lem-gram-map-fibers-and-rank-strata]]: full-rank Gram fibers are single free group orbits; the symmetric and alternating lower-rank codimensions have the stated formulas.

## Proof

Escalated: the pointwise orbit calculation in [F2] does not construct a scheme-theoretic torsor. A complete proof must give regular local sections on principal-minor charts (including the orthogonal étale square-root/diagonalization cover and symplectic Gaussian elimination), prove the faithfully flat equalizer/descent statement for regular functions, and then use the normality in [F1] to extend uniquely across codimension at least two. Those steps have not been authored here.
