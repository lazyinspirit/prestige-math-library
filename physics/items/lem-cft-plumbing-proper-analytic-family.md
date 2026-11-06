---
id: lem-cft-plumbing-proper-analytic-family
kind: lemma
title: Proper family from disjoint analytic plumbing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-cft-plumbing-and-sewing-parameter
  - lem-cft-plumbing-local-smoothing-node
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  lem-cft-plumbing-local-smoothing-node: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: "AC is carried through the compact-surface genus convention; the compactness and local chart arguments here use no additional choice."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§1.2.1 for the proper family plumbing construction and punctured parameter polydisk."
---

## Statement

Let $\pi:\mathcal C\to B$ be a proper holomorphic submersion whose fibers are compact pointed worldsheets. For finitely many pairwise disjoint pairs of marked sections, suppose product-coordinate neighborhoods $D_{r_j}\times B$ and $D_{s_j}\times B$ are specified along the two sections of pair $j$. Choose fixed radii $0<r_j^0<r_j$ and $0<s_j^0<s_j$, and put $Q=\prod_{j=1}^R D_{r_j^0s_j^0}$, where $D_a=\{q\in\mathbb C:|q|<a\}$. Remove the open subdisks of radii $r_j^0,s_j^0$ from each fiber and glue in, for each pair, the local fixture $z_jw_j=q_j$, $|z_j|\le r_j^0$, $|w_j|\le s_j^0$, along its two boundary circles by the given coordinates. The resulting total space is a Hausdorff complex manifold and its map to $B\times Q$ is proper and holomorphic. Over $B\times Q^\times$, where $Q^\times=\{\mathbf q\in Q:q_j\ne0\text{ for all }j\}$, this map is a proper holomorphic submersion with compact fibers. At $q_j=0$, the corresponding fiber has the nodal local model $z_jw_j=0$. No algebraic stable-curve compactification is asserted.

## Statement references

[[def-cft-pointed-analytic-worldsheet]]

[[def-cft-plumbing-and-sewing-parameter]]

[[lem-cft-plumbing-local-smoothing-node]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Facts & Assumptions

**Given:** The proper holomorphic submersion $\pi$, globally specified product-coordinate disks along the chosen sections, pairwise disjoint plumbing neighborhoods, fixed smaller radii $r_j^0,s_j^0$, and parameters $\mathbf q\in Q$.

[F1] [[def-cft-pointed-analytic-worldsheet]]: the original family map is a proper holomorphic submersion with compact fibers.

[F2] [[def-cft-plumbing-and-sewing-parameter]]: the local replacement relation is $z_jw_j=q_j$; on the smaller disks it is defined for $|q_j|<r_j^0s_j^0$.

[F3] [[lem-cft-plumbing-local-smoothing-node]]: each nonzero local fiber is a smooth annulus and the zero fiber is the specified node.

[F4] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: the coordinate charts and transition maps used here are holomorphic complex-manifold charts.

## Proof

1.1 Since $|q_j|<r_j^0s_j^0$, the fixture boundary $|z_j|=r_j^0$ has $|w_j|=|q_j/z_j|<s_j^0$, and the boundary $|w_j|=s_j^0$ has $|z_j|<r_j^0$. Thus the fixture has two disjoint boundary collars, each attached to the matching boundary of the original complement by its given coordinate. The plumbing neighborhoods of distinct pairs are disjoint, so these finitely many identifications do not overlap or identify points from different pairs. [given, F1, F2, construct]

1.2 In the interior of a fixture, eliminating $q_j$ by $q_j=z_jw_j$ gives holomorphic coordinates consisting of the base coordinates, $z_j,w_j$, and all other sewing parameters. At the seam $|z_j|=r_j^0$, the transition to the original chart is $w_j=q_j/z_j$, holomorphic because $z_j\ne0$; at the other seam it is $z_j=q_j/w_j$, holomorphic because $w_j\ne0$. These collar charts extend across the seams. The total space is smooth at the node as well, since $q_j=z_jw_j$ is a coordinate on the target rather than a constraint on the total-space coordinates. To check Hausdorffness, form the equivalence relation on the finite disjoint union of the original complement and fixtures. Each seam is a closed embedded boundary with a disjoint collar; the relation is the diagonal together with the finitely many closed graphs of the seam identifications and their reverses. Every equivalence class has at most two points, because distinct pairs have disjoint neighborhoods and the two boundary circles of each fixture are disjoint. Given two distinct classes, choose disjoint neighborhoods of their finitely many representatives in the Hausdorff pieces; if a representative lies on a seam, shrink its neighborhood within that seam's collar and saturate it by the paired collar neighborhood. Disjointness of the collars keeps the resulting saturated neighborhoods disjoint, so their images separate the two classes in the quotient. Thus the finite gluing is Hausdorff. By [F3], the fibers have the asserted annulus and node models. [given, F2, F3, F4, algebra]

1.3 Let $K\subset B\times Q$ be compact. It is closed because the target is Hausdorff. The original-complement part of its preimage is a closed subset of $\pi^{-1}(K_B)\times K_Q$, where $K_B,K_Q$ are the compact projections of $K$; this product is compact by [F1]. Each fixture part of the preimage is closed in $K_B\times\overline D_{r_j^0}\times\overline D_{s_j^0}\times K_Q$, hence compact. The full preimage of $K$ is obtained from the finite union of these compact pieces by the collar identifications, so it is a continuous image of a compact space and is compact. This proves properness. [given, F1, F2, algebra]

2.1 Fix $\mathbf q\in Q^\times$. The closed fixture in the Statement is parametrized by $z_j$ on the closed annulus $|q_j|/s_j^0\le|z_j|\le r_j^0$, with $w_j=q_j/z_j$. It is compact as a closed bounded subset of $\mathbb C$; F3 supplies the smooth open-annulus model for its interior. Its two boundary circles have disjoint collars by step 1.1. Attaching them to the compact original complements therefore gives a compact fiber without boundary. In the fixture, $q_j\ne0$ implies $(z_j,w_j)\ne(0,0)$, so the differential of $(z_j,w_j)\mapsto z_jw_j$ is the nonzero functional $w_j\,dz_j+z_j\,dw_j$. The sewing parameters for different pairs are independent, and outside the fixtures the original family map is a submersion by [F1]. Hence the glued map is a submersion over $B\times Q^\times$. It is holomorphic by step 1.2 and proper by step 1.3, proving the claim. [given, F1, F2, F3, step 1.2, step 1.3, algebra] ∎

## Family plumbing diagram

The span records the local fixture and its two projections. The horizontal map is $(b,z_j,w_j,\mathbf q)\mapsto(b,\mathbf q)$ and the vertical map is $(b,z_j,w_j,\mathbf q)\mapsto(b,z_j,w_j)$; the proof uses the local equations and collar charts, not the drawing.

```tikzcd
\mathcal P_j:=\{(b,z_j,w_j,\mathbf q)\in B\times\overline D_{r_j^0}\times\overline D_{s_j^0}\times Q: z_jw_j=q_j\} \arrow[r,"\pi_j"] \arrow[d,"\mathrm{pr}_{B,z_j,w_j}"'] & B\times Q \\
B\times\overline D_{r_j^0}\times\overline D_{s_j^0}
```
