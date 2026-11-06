---
id: lem-cmp-finite-cover-multiplies-euler-characteristic
kind: lemma
title: Euler characteristic of a finite covering of a compact smooth manifold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-path-lifting-for-covering-maps
  - thm-heine-borel-rn
  - thm-lebesgue-number-lemma
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-euler-poincare-formula-for-finite-cw-complexes
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
  thm-path-lifting-for-covering-maps: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-lebesgue-number-lemma: mathematical-premise
  thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations: mathematical-premise
  thm-euler-poincare-formula-for-finite-cw-complexes: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Chapter 2, §2.2, printed pp. 147–148 (PDF pp. 154–155): finite CW Euler characteristic and Theorem 2.44; the covering-cell lift argument is given locally below."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical finite-cover identity for Euler characteristic; no physical interpretation is used."
---

## Statement

Assume the Axiom of Choice. Let $p:E\to B$ be a covering map with exactly $d\ge1$ points in each fiber: every point of $B$ has an open neighborhood $U$ whose inverse image is a disjoint union of $d$ open sets, each mapped homeomorphically onto $U$. Let $B$ be a compact, Hausdorff, second-countable, finite-dimensional smooth manifold without boundary. For a space $Z$ admitting a finite CW structure, define $\chi(Z)=\sum_k(-1)^k c_k$, where $c_k$ is the number of its $k$-cells; the Euler–Poincaré formula makes this independent of the chosen finite CW structure. Then $E$ is compact, admits a finite CW structure, and
$$\chi(E)=d\,\chi(B).$$

## Statement references

[[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[[thm-euler-poincare-formula-for-finite-cw-complexes]]

[[def-covering-map-and-evenly-covered-neighbourhoods]]

[[thm-path-lifting-for-covering-maps]]

[[thm-heine-borel-rn]]

[[thm-lebesgue-number-lemma]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a compact smooth boundaryless manifold $B$, and a covering map $p:E\to B$ with exactly $d$ points in every fiber.

[F1] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] gives a finite triangulation of a compact smooth manifold (the boundary-free case of its statement).

[F2] [[thm-euler-poincare-formula-for-finite-cw-complexes]] identifies the Euler characteristic of a finite CW complex with the alternating sum of the ranks of its integral homology groups.

[F3] [[def-axiom-of-choice]] is an ambient hypothesis retained in this lemma. The triangulation supplier declares AC but explicitly makes it dispensable: its construction uses only finite choices. No essential use of full AC is made here.

[F4] [[def-covering-map-and-evenly-covered-neighbourhoods]] defines a covering by evenly covered open neighborhoods; in the present finite-sheeted case every fiber has exactly $d$ points.

[F5] [[thm-path-lifting-for-covering-maps]] gives existence and uniqueness of a lift of every path after its initial lift is specified.

[F6] [[thm-heine-borel-rn]] makes the closed interval $I=[0,1]$ compact, and [[thm-lebesgue-number-lemma]] gives a finite subdivision subordinate to the pulled-back evenly-covered neighborhoods of any fixed path.

## Proof

**Given:** The covering $p:E\to B$, its constant finite fiber size $d$, and [F1]–[F6].

1.1 By [F1], choose a finite triangulation of $B$. Write $c_k$ for the number of its $k$-simplices. The triangulation supplier and the choices of lifts below require only finite choices; AC is retained solely as the declared ambient hypothesis. [given, F1, F3]

2.1 Let $\phi:D^k\to B$ be the characteristic map of one triangulation cell, choose $x_0\in D^k$, and form its pullback covering $q:\widetilde D^k\to D^k$. For each of the $d$ points $e_0$ over $\phi(x_0)$, and each $x\in D^k$, lift the radial path $t\mapsto\phi((1-t)x_0+tx)$ from $e_0$ using [F5], and define $s_{e_0}(x)$ to be its endpoint. To verify continuity, fix $x_*$ and consider the parameter map $F(x,t)=\phi((1-t)x_0+tx)$. Cover the compact path $F(\{x_*\}\times I)$ by evenly covered open sets. By [F6], choose a subdivision $0=t_0<\cdots<t_m=1$ so each closed segment $F(\{x_*\}\times[t_j,t_{j+1}])$ lies in one such set $U_j$. Continuity of $F$ and compactness of each segment allow one to shrink a neighborhood $N$ of $x_*$ so that $F(N\times[t_j,t_{j+1}])\subset U_j$ for every $j$. Starting with $e_0$, successively use the inverse homeomorphism on the sheet over $U_j$ that contains the already constructed lift at $t_j$; after finitely shrinking $N$ so each preceding endpoint remains in that open sheet, these formulas give a continuous lift on $N\times I$. Uniqueness in [F5] identifies it with the radial path lifts, so $s_{e_0}$ is continuous near $x_*$. The $d$ sections are disjoint by uniqueness: if two meet, lifting the reversed radial path from the meeting point forces their distinct initial points over $\phi(x_0)$ to agree. They exhaust every fiber because a point over $x$ lifts the reversed radial path to one of the $d$ points over $\phi(x_0)$. On a connected evenly covered neighborhood in $D^k$, each continuous section lies in one sheet, so its image is open and the restricted projection is a homeomorphism. Thus the pullback consists of exactly $d$ copies of $D^k$. Applying this cell by cell, and inducting over the finite skeleta so each lifted boundary map lands in the lifted lower skeleton, gives a finite CW structure on $E$ with $d c_k$ cells in each dimension $k$. [given, F4, F5, F6, step 1.1, construct]

3.1 The lifted CW structure has alternating cell sum $\sum_k(-1)^k d c_k=d\sum_k(-1)^k c_k$. By [F2], this equals the homological Euler characteristic of each finite CW complex, so $\chi(E)=d\chi(B)$. The finite CW structure is built from finitely many compact closed cell images, so $E$ is compact. [given, F2, step 1.1, step 2.1, algebra] ∎
