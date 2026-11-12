---
id: lem-author-f08c343a07fc-cancel-module-classes
kind: lemma
title: Affine bundle classes are actual projective-module classes
status: published
domain: mathematics
deps:
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
  - math:def-functor-and-contravariant-functor
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-isomorphism-groupoid-and-connected-category
  - math:prop-natural-isomorphisms-are-componentwise-isomorphisms
dependency_roles:
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-equivalence-and-adjoint-equivalence-of-categories: mathematical-premise
  math:def-isomorphism-groupoid-and-connected-category: mathematical-premise
  math:prop-natural-isomorphisms-are-componentwise-isomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Assume AC. For a commutative unital ring $A$, the maps $E\mapsto\Gamma(\operatorname{Spec}A,E)$ and $P\mapsto\widetilde P$ induce inverse bijections between rank-$r$ bundle isomorphism classes and constant-rank-$r$ finite projective module isomorphism classes. In particular two bundles are isomorphic if and only if their modules of sections are isomorphic.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, with $r\geq0$.

**Goal:** Establish the stated inverse bijections and the isomorphism criterion for arbitrary bundles.

[A1] Assume the Axiom of Choice (AC), as required by the affine supplier. No further choice is used in the passage to isomorphism classes. [[math:def-axiom-of-choice]]

[F1] Use the bundle, finite projective module and rank definitions of the affine interface. Write $X=\operatorname{Spec}A$, $U(E)=\Gamma(X,E)$ and $V(P)=\widetilde P$. These functors are quasi-inverse equivalences and preserve rank. [[lem-affine-bundle-module-interface]]

[F2] A covariant functor preserves identity morphisms and composition. A morphism is an isomorphism if it has a two-sided inverse; its isomorphism class identifies all objects isomorphic to it. [[math:def-functor-and-contravariant-functor]] [[math:def-isomorphism-groupoid-and-connected-category]]

[F3] Quasi-inverse equivalence data include natural isomorphisms $1\Rightarrow VU$ and $UV\Rightarrow1$. Every component of a natural isomorphism is an isomorphism. [[math:def-equivalence-and-adjoint-equivalence-of-categories]] [[math:prop-natural-isomorphisms-are-componentwise-isomorphisms]]

## Proof

1.1 By [F1], $U$ and $V$ send rank-$r$ objects to rank-$r$ objects. Identities, inverses and composition make isomorphism an equivalence relation. If $g$ is a two-sided inverse to $f$, then for either functor $H=U,V$, [F2] gives $H(g)\circ H(f)=H(g\circ f)=H(1)=1$ and $H(f)\circ H(g)=1$. Thus both assignments preserve isomorphisms and induce well-defined maps on the stated isomorphism classes. [A1, F1, F2]

2.1 By [F1] and [F3], the equivalence has invertible components giving $VU(E)\cong E$ and $UV(P)\cong P$. The composites of the induced maps on classes are therefore identities, proving the inverse bijections in every rank. For arbitrary bundles $E,F$, an isomorphism $E\cong F$ gives $U(E)\cong U(F)$ by step 1.1. Conversely, an isomorphism $U(E)\cong U(F)$ gives $VU(E)\cong VU(F)$ after applying $V$, and composing with the displayed component isomorphisms gives $E\cong F$. AC enters only through the affine result [F1]. [A1, F1, F3, step 1.1] ∎
