---
id: lem-qftx-borel-base-is-paracompact-of-cw-type
kind: lemma
title: The fixed-locus Borel base is paracompact and of CW type
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-paracompact-space
  - lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model
  - lem-universal-complex-flag-bundle-is-bt-n
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-paracompact-space: mathematical-premise
  lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model: mathematical-premise
  lem-universal-complex-flag-bundle-is-bt-n: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Allen Hatcher, Vector Bundles and K-Theory
      url: https://people.math.harvard.edu/~dafr/M392C-2012/Readings/Hatcher.pdf
      locator: Appendix “Paracompactness,” Propositions 1.18 and 1.20, printed pp. 35–37.
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Appendix, Theorem A.6 on products of CW complexes, printed pp. 524–525.
landmark: false
---

## Statement

Assume AC. Let $r\geq0$, let $T=(\mathbb R/\mathbb Z)^r$ use the product Milnor model $BT=(\mathbb{CP}^{\infty})^r$ with its ordinary product topology, and let $F$ be a compact finite-dimensional Hausdorff second-countable smooth manifold without boundary. Then $BT\times F$ is paracompact Hausdorff and has the homotopy type of a CW complex. In fact, there is a finite CW complex $K$ such that $BT\times F\simeq BT\times K$.

## Statement references

[Paracompactness of CW complexes] [Hatcher, Vector Bundles and K-Theory, Appendix, Proposition 1.20, printed p. 36](https://people.math.harvard.edu/~dafr/M392C-2012/Readings/Hatcher.pdf)

[Product topology and CW structures] [Hatcher, Appendix, Theorem A.6, printed pp. 524–525](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

## Facts & Assumptions

**Given:** AC, $r\geq0$, the product-torus classifying-space model, and compact smooth $F$.

[A1] Full AC includes the choice hypotheses of the compact-manifold and product classifying-space constructions. [[def-axiom-of-choice]]

[F1] For $r\geq1$, $BT=(\mathbb{CP}^{\infty})^r$ has a countable CW structure whose CW topology is the ordinary product topology; the complete product-topology argument is given in the supplier's proof. [[lem-universal-complex-flag-bundle-is-bt-n]]

[F2] A compact smooth Riemannian manifold admits a finite strongly geodesically convex cover whose finite nerve is homotopy equivalent to it. [[lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model]]

[F3] Every CW complex and every compact Hausdorff space is paracompact Hausdorff. Hatcher's proof for CW complexes constructs subordinate partitions over the skeleta; the compact Hausdorff case is his Proposition 1.18. [Hatcher, Appendix, Propositions 1.18 and 1.20, printed pp. 35–37.]

## Proof

**Given:** The data in the statement.

1.1 If $r=0$, $BT$ is a point and the CW and paracompact assertions reduce to the compact manifold $F$. For $r\geq1$, [F1] gives $BT$ its ordinary product CW topology, and [F3] makes it paracompact Hausdorff. By [F2], choose a finite CW complex $K$ and a homotopy equivalence $h:F\to K$. Since $K$ is finite, its CW product with the CW complex $BT$ has the ordinary product topology; hence $BT\times K$ is a CW complex. The maps $\mathrm{id}_{BT}\times h$ and the product of a homotopy inverse with $\mathrm{id}_{BT}$ are homotopy inverses, since their coordinate homotopies are continuous in the product topology. Thus $BT\times F$ has CW type. If $F=\varnothing$, take $K=\varnothing$. [A1, F1, F2, F3, construct]

2.1 If $F=\varnothing$, the product is empty and paracompact Hausdorff, so assume $F\ne\varnothing$. To prove paracompactness of $BT\times F$, let $\mathcal U$ be an open cover. For each $x\in BT$ and $y\in F$, choose a product neighborhood $O_{x,y}\times V_{x,y}$ of $(x,y)$ contained in some member $U_{x,y}\in\mathcal U$. Compactness of $F$ selects finitely many $y_1,\ldots,y_m$ whose $V_{x,y_j}$ cover $F$. Then $O_x=\bigcap_{j=1}^m O_{x,y_j}$ is an open neighborhood of $x$, and $O_x\times F$ is covered by $U_{x,y_1},\ldots,U_{x,y_m}$. Paracompactness of $BT$ gives a locally finite open refinement $\{W_\alpha\}$ of $\{O_x\}$. For each $\alpha$, choose $x_\alpha$ with $W_\alpha\subseteq O_{x_\alpha}$; the finitely many sets $(W_\alpha\times F)\cap U_{x_\alpha,y_j}$ cover $W_\alpha\times F$, are open, and refine $\mathcal U$. They are locally finite because a neighborhood $N\times F$ meets sets indexed by only those $\alpha$ for which $W_\alpha$ meets $N$, a finite set. Hence $BT\times F$ is paracompact. It is Hausdorff as a product of Hausdorff spaces. The point and rank-zero cases satisfy the same conclusions. [F1, F3, given, construct] ∎
