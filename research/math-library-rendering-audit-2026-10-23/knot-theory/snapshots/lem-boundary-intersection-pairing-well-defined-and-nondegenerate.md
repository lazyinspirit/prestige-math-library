---
id: lem-boundary-intersection-pairing-well-defined-and-nondegenerate
kind: lemma
title: The boundary intersection pairing is well defined and rationally nondegenerate
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-intersection-lattice-of-a-four-manifold-with-boundary
  - thm-poincare-lefschetz-duality
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
  - thm-collar-neighborhood-theorem
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: §3.3, Poincaré–Lefschetz duality for manifolds with boundary and cup-product pairing, printed pp. 252–255
---

## Statement

Assume the Axiom of Choice. Let $W$ be a compact connected oriented smooth four-manifold with rational-homology-sphere boundary $M$. The signed intersection pairing on interior two-cycles descends to a symmetric integer-valued bilinear form on $H_2(W;\mathbb Z)/\operatorname{Tor}$, this group is free of finite rank, and the form is nondegenerate after extending scalars to $\mathbb Q$. The form need not be unimodular.

## Statement references

[[def-intersection-lattice-of-a-four-manifold-with-boundary|Boundary intersection lattice and rational-homology-sphere convention]]

## Facts & Assumptions

**Given:** Full AC and a compact connected oriented smooth four-manifold $W$ with $\partial W=M$ and $H_*(M;\mathbb Q)\cong H_*(S^3;\mathbb Q)$.

[F1] The long exact sequence of the pair contains $H_2(M;\mathbb Q)\to H_2(W;\mathbb Q)\to H_2(W,M;\mathbb Q)\to H_1(M;\mathbb Q)$. Both end groups vanish by the boundary hypothesis. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F2] Poincaré–Lefschetz duality identifies $H_2(W,M;\mathbb Q)$ with $H^2(W;\mathbb Q)$. [[thm-poincare-lefschetz-duality]]

[F3] Over the field $\mathbb Q$, the universal-coefficient theorem identifies $H^2(W;\mathbb Q)$ with $\operatorname{Hom}_{\mathbb Q}(H_2(W;\mathbb Q),\mathbb Q)$. [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F4] Double $W$ along a boundary collar; the resulting closed smooth manifold has finite CW homotopy type under full AC. Folding the second copy into the first makes $W$ a homotopy retract of the double, so $H_2(W;\mathbb Z)$ is a direct summand of a finitely generated group. [[thm-collar-neighborhood-theorem]] [[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]]

[F5] The boundary intersection form is the signed intersection pairing on interior representatives. [[def-intersection-lattice-of-a-four-manifold-with-boundary]]

[A1] Full AC is assumed for the finite-CW homotopy-type supplier [F4].

## Proof

**Given:** The data and suppliers [F1]–[F5].

1.1 The collar of $M$ lets every absolute two-cycle be moved into $\operatorname{int}W$. The signed transverse intersection number is integer-valued and bilinear. Since $H_2(M;\mathbb Q)=0$, [F1] shows that $H_2(W;\mathbb Q)\to H_2(W,M;\mathbb Q)$ is an isomorphism. [given, F1, F5, construct]

2.1 The pairing map over $\mathbb Q$ is the composite $H_2(W;\mathbb Q)\to H_2(W,M;\mathbb Q)\xrightarrow{\operatorname{PD}^{-1}}H^2(W;\mathbb Q)\to\operatorname{Hom}_{\mathbb Q}(H_2(W;\mathbb Q),\mathbb Q)$. Every map in this composite is an isomorphism by step 1.1, [F2], and [F3], so the form is rationally nondegenerate. [F1, F2, F3, step 1.1, algebra]

3.1 By [F4] and [A1], $H_2(W;\mathbb Z)$ is finitely generated, so its torsion-free quotient is a finite-rank free abelian group. If $x$ has finite order $m$, bilinearity gives $mQ_W(x,y)=Q_W(mx,y)=0$ in $\mathbb Z$, hence $Q_W(x,y)=0$; the same argument applies in the other variable. Thus the form descends to the torsion-free quotient. The four-dimensional cup-product sign is $(-1)^{2\cdot2}=+1$, so the form is symmetric. [F4, F5, A1, step 2.1, algebra] ∎

