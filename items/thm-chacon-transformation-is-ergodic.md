---
id: "thm-chacon-transformation-is-ergodic"
kind: "theorem"
title: "Chacon transformation is ergodic"
deps: ["lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets", "def-chacon-three-cut-one-spacer-towers", "lem-chacon-levels-approximate-measurable-sets", "def-ergodic-measure-preserving-system", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Katok–Thouvenot rank-one generating partitions paragraph p.697, expanded local ergodicity argument
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
    - title: Sarig Problem 3.8–3.9 p.101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. The normalized Chacon probability transformation is ergodic.

## Facts & Assumptions

[F1] Chacon is an invertible probability transformation agreeing on an invariant conull set with all finite partial translations [[lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets]].

[F2] Any positive-measure set has arbitrarily late levels of proportion exceeding $1-\delta$ for each $\delta>0$; the towers exhaust measure one [[lem-chacon-levels-approximate-measurable-sets]].

[F3] Ergodicity tests strictly invariant measurable sets [[def-ergodic-measure-preserving-system]].

[F4] Assume AC [[def-axiom-of-choice]].

[F5] At each stage r, the tower is an ordered list of $h_r$ equal-width levels and its partial map translates each level to the next [[def-chacon-three-cut-one-spacer-towers]].

## Proof

**Given:** A strictly invariant measurable set $E$ for Chacon with $\mu(E)>0$.

1.1 Fix $0<\delta<1$. At every sufficiently late stage r, F2 supplies a level J with $\mu(E\cap J)>(1-\delta)w_r$. Repeatedly composing F5's consecutive partial translations shows that the finite partial map sends level j to level k after $k-j$ iterates whenever $j\le k<h_r$. F1 makes the limiting T agree with these arrows on its invariant conull set. Strict invariance implies equality of the measures of E in these levels, since the iterates preserve measure and membership in E. Removing the fixed null complement does not affect these equalities. Hence every level of this tower has E-measure greater than $(1-\delta)w_r$. [F1, F2, F4, F5]

2.1 Summing over the disjoint levels gives $\mu(E)\ge\mu(E\cap C_r)>(1-\delta)\mu(C_r)$. Letting $r\to\infty$ gives $\mu(E)\ge1-\delta$ because $\mu(C_r)\to1$. Since every $0<\delta<1$ is allowed and $\mu(E)\le1$, $\mu(E)=1$. Sets of zero measure already satisfy the alternative. This is ergodicity by F3. AC is inherited from the measure construction and generating-level approximation, with only one finite-stage level needed at a time. [F3, F4, step 1.1] ∎
