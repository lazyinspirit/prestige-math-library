---
id: lem-gts-freedlott-structure-maps-well-defined
kind: lemma
title: Freed–Lott underlying class and curvature are well defined
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 7
proof_strategy: direct
deps:
  - def-gts-freedlott-differential-k-cycle
justified_by: []
dependency_roles:
  def-gts-freedlott-differential-k-cycle: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Daniel S. Freed and John Lott, An Index Theorem in Differential K-Theory
      url: https://arxiv.org/pdf/0907.3508v2
      locator: Section 2.2, the Chern–Simons relation and curvature map.
---

## Statement

For the even Freed–Lott cycle presentation on a finite-dimensional Hausdorff second-countable smooth manifold $M$, the assignments $I(E,h,\nabla,\phi)=[E]$ and $R(E,h,\nabla,\phi)=\operatorname{ch}(\nabla)+d\phi$ descend from generators to homomorphisms on the quotient group. The curvature is closed.

## Statement references

[[def-gts-freedlott-differential-k-cycle]]

## Facts & Assumptions

**Given:** The cycle generators and the two generating relations in [[def-gts-freedlott-differential-k-cycle]]. Use the Freed–Lott Chern–Simons convention stated there.

[F1] [[def-gts-freedlott-differential-k-cycle]]: generators are Hermitian complex bundles with compatible connection and odd periodic forms modulo exact forms; the short-exact-sequence relation uses $d\operatorname{CS}=\operatorname{ch}(\nabla^2)-\operatorname{ch}(\nabla^1)-\operatorname{ch}(\nabla^3)$.

## Proof

**Given:** The quotient presentation and [F1].

1.1 An isometric bundle isomorphism intertwining the connections preserves the topological $K$-class and pulls the Chern–Weil form back to the same form; its carried-forward periodic form is the same quotient class. Hence both $I$ and $R$ assign equal values to isomorphic generators. The same applies to the formal direct-sum relation because $K^0$ addition and the Chern character are additive under direct sum. [F1, given, algebra]

2.1 For a Hermitian short exact sequence, the defining class relation gives $[E_2]=[E_1]+[E_3]$ in the Grothendieck group, so $I$ is unchanged. For curvature, subtract the two sides and use the defining form relation: $$R(E_2,\phi_2)-R(E_1,\phi_1)-R(E_3,\phi_3)=d\operatorname{CS}+d(\phi_2-\phi_1-\phi_3)=d\operatorname{CS}-d\operatorname{CS}=0.$$ Thus both maps vanish on every generator of the relation subgroup and descend to its quotient. Finally $dR(E,\phi)=d\operatorname{ch}(\nabla)+d^2\phi=0$, since Chern–Weil forms are closed and $d^2=0$. [F1, step 1.1, algebra] ∎

