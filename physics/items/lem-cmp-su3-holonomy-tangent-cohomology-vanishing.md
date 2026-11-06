---
id: lem-cmp-su3-holonomy-tangent-cohomology-vanishing
kind: lemma
title: Tangent-bundle end cohomology vanishing under exact SU(3) holonomy
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gts-compact-calabiyau-manifold-conventions
  - lem-cmp-strict-su3-hodge-number-count
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - lem-kahler-commutators-and-laplacian-type-preservation
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  lem-cmp-strict-su3-hodge-number-count: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  lem-kahler-commutators-and-laplacian-type-preservation: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 20–23: Calabi–Yau Hodge/holomorphic-form conventions. The local determinant-holonomy, contraction and Hodge-star arguments below supply the analytic endpoint vanishings."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical cohomology vanishing conditional on exact SU(3) holonomy; no holonomy or metric existence is asserted."
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth projective Calabi–Yau threefold over $\mathbb C$ equipped with a Kähler metric whose Levi-Civita holonomy is exactly $SU(3)$. Then the coherent cohomology of its holomorphic tangent bundle satisfies $H^0(X,T_X)=0$ and $H^3(X,T_X)=0$.

## Statement references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[lem-cmp-strict-su3-hodge-number-count]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

## Facts & Assumptions

**Given:** A smooth projective threefold $X$, a nowhere-zero holomorphic volume form $\Omega\in H^0(X,K_X)$, a Kähler metric with exact $SU(3)$ holonomy, and the Axiom of Choice.

[F1] [[lem-cmp-strict-su3-hodge-number-count]] gives $h^{1,0}(X)=h^{2,0}(X)=0$ for a connected compact Kähler threefold with zero Ricci form and exact $SU(3)$ holonomy.

[F2] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] identifies analytic sheaf cohomology $H^q(X,\Omega_X^p)$ with harmonic $(p,q)$-forms. Here the star is the complex-linear extension of the real Riemannian Hodge star, characterized by $\alpha\wedge *\overline\beta=\langle\alpha,\beta\rangle dV$ for forms of equal degree.

[F3] [[def-gts-compact-calabiyau-manifold-conventions]] supplies the chosen trivialization of $K_X$; the displayed $\Omega$ is its nowhere-zero section.

[F4] [[lem-kahler-commutators-and-laplacian-type-preservation]] states that the Hodge Laplacian commutes with the Hodge star and preserves bidegree on a compact Kähler manifold under AC.

[A1] The cohomology convention is $h^{p,q}=dim H^q(X,\Omega_X^p)$, as in [F1].

## Proof

**Given:** The data in the Statement and [F1]–[F4].

1.1 Parallel transport on $K_X=\Lambda^3(T_X^{1,0})^*$ acts by the inverse determinant of tangent parallel transport. Every holonomy element lies in $SU(3)$, so this action is trivial. Transporting one nonzero canonical covector from a fixed point gives a path-independent global parallel section: two paths differ by a holonomy element acting trivially. The canonical connection is therefore flat. In holomorphic coordinates its curvature is $\partial\bar\partial\log\det(g_{i\bar j})$, up to an overall curvature sign, by tracing the tangent Chern connection matrix $g^{-1}\partial g$ and passing to the dual determinant line. Consequently $\rho=-i\partial\bar\partial\log\det(g_{i\bar j})=0$. All the hypotheses of [F1] are now checked, giving $h^{1,0}=h^{2,0}=0$. [given, F1, F3, algebra, construct]

2.1 Contraction with the nowhere-zero three-form defines a holomorphic bundle map $T_X\to\Omega_X^2$, $v\mapsto\iota_v\Omega$. In a basis $e_1,e_2,e_3$ with $\Omega(e_1,e_2,e_3)\ne0$, it sends each basis vector to a nonzero multiple of the complementary basis two-form, so it is an isomorphism. Hence $H^0(X,T_X)\cong H^0(X,\Omega_X^2)=0$ by step 1.1. [given, F3, A1, step 1.1, construct]

3.1 The same holomorphic bundle isomorphism gives $H^3(X,T_X)\cong H^3(X,\Omega_X^2)$. By [F2], the latter is represented by harmonic $(2,3)$-forms. In complex dimension three, the Hodge star sends type $(p,q)$ to $(3-q,3-p)$, as follows on wedge monomials in a unitary coframe. It is invertible and commutes with the Hodge Laplacian by [F4], so it identifies harmonic $(2,3)$-forms with harmonic $(0,1)$-forms. Complex conjugation identifies the latter with harmonic $(1,0)$-forms, whose dimension is $h^{1,0}=0$ by step 1.1. Thus $H^3(X,T_X)=0$, with analytic sheaf cohomology used throughout. [given, F2, F4, step 1.1, step 2.1, algebra] ∎
