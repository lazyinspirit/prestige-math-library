---
id: post-r2-freed-witten-dbrane-anomaly-constraint
kind: postulate
title: "Freed–Witten worldvolume anomaly constraint"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 7
deps:
  - def-gts-differential-twist-and-twisted-differential-k-theory
  - thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
  - lem-r2-w3-equality-for-oriented-normal-bundle
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-normalized-pin-spin-product-and-norm-laws
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
dependency_roles:
  def-gts-differential-twist-and-twisted-differential-k-theory: formulation-prerequisite
  thm-gts-spin-and-spin-c-obstruction-and-torsor-classification: formulation-prerequisite
  lem-r2-w3-equality-for-oriented-normal-bundle: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  lem-normalized-pin-spin-product-and-norm-laws: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Source-backed anomaly constraint for oriented Type II worldsheets and D-branes in a spin target. The source excludes orientifolds and Type I; an orientifold use needs a separate anomaly analysis. The cited paper presents its cohomological condition as sufficient, not as a proved necessary and sufficient classification."
empirical_premises: []
sources:
  references:
    - title: "Daniel S. Freed and Edward Witten, Anomalies in String Theory with D-Branes"
      url: https://arxiv.org/pdf/hep-th/9907189v2
      locator: "Introduction, §1 equation (1.12) and footnote 3, and §6 equation (6.9)."
    - title: "Dale Husemoller, Michael Joachim, Branislav Jurčo, and Martin Schotten, Basic Bundle Theory and K-Cohomology Invariants"
      url: https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf
      locator: "Chapter 4, Role of the Freed–Witten Anomaly and the Twisted K-Theory, PDF pp. 17–20."
verification:
  sources_checked:
    date: 2026-10-26
    scope: Read the full Freed–Witten paper and the complete relevant Husemoller chapter passage; checked the stated worldsheet, target, normal-bundle, and exclusion hypotheses.
    by: batch-85 beta authoring
    evidence: research/conformal-field-theory-string-theory-all-97-2026-10-26-batch-85.source-coverage.json
---

## Postulate

Let $Y$ be a finite-dimensional Hausdorff second-countable oriented smooth $10$-manifold with a chosen auxiliary Riemannian metric and a supplied spin structure on its oriented tangent bundle. Let $Q$ be a finite-dimensional Hausdorff second-countable oriented smooth manifold without boundary, and let $i:Q\hookrightarrow Y$ be a smooth embedding representing a Type II D-brane worldvolume. Set $\nu=(i^*TY)/TQ\cong(TQ)^\perp$ to be the real normal bundle, oriented by the orientations of $Y$ and $Q$. Let $\zeta_B\in H^3(Y;\mathbb Z)$ be the integral characteristic class of the NS $B$-field, with curvature convention $H_3/(2\pi)$. Adopt the source's worldvolume anomaly condition
$$i^*\zeta_B=W_3(\nu)\in H^3(Q;\mathbb Z).$$
For an oriented bundle $E$, write $W_3(E)=\widetilde\beta_2(w_2(E))$, the integral Bockstein of its second Stiefel–Whitney class. Since $TY|_Q\cong TQ\oplus\nu$, the spin condition gives $w_2(TY|_Q)=0$, and [[lem-r2-w3-equality-for-oriented-normal-bundle]] yields $W_3(TQ)=W_3(\nu)$. Thus the same constraint can be written $i^*\zeta_B=W_3(Q)$. If the $B$-field is topologically trivial, this reduces to $W_3(\nu)=0$; for a positive-rank normal bundle, the Spin-c obstruction criterion of [[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]] identifies this with existence of the required Spin-c structure under its full AC and smooth-manifold base hypotheses. For the zero-rank normal bundle, the rank conventions give $w_2(0)=W_3(0)=0$. The negative-square zero-dimensional Clifford algebra is $\mathbb R$ and its norm-one even group is $\{\pm1\}$, so $\operatorname{Spin}^c(0)=(\{\pm1\}\times U(1))/\langle(-1,-1)\rangle\cong U(1)$; its trivial principal bundle supplies a Spin-c lift of the trivial $SO(0)$ frame bundle. Thus the zero-rank case is established directly, without applying a positive-rank theorem.

This is an adopted physical anomaly-cancellation constraint, not a pure mathematical theorem. Freed and Witten explicitly exclude orientifolds and Type I strings; the source's footnote states that its displayed cohomological condition is sufficient. No necessity claim, orientifold extension, or complete torsion/K-theory anomaly classification is made here.

## Statement references

[[def-gts-differential-twist-and-twisted-differential-k-theory]]

[[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]

[[lem-r2-w3-equality-for-oriented-normal-bundle]]
