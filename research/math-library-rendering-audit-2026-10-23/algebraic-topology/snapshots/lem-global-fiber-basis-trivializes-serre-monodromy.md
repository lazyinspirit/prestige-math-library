---
id: lem-global-fiber-basis-trivializes-serre-monodromy
kind: lemma
title: A global fiber basis trivializes Serre monodromy
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid, prop-singular-cohomology-is-contravariantly-functorial, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, proof of Theorem 33.5"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 33, Theorem 33.5 and proof, printed pp.122–123"
---

## Statement

Assume AC.  Let $p:E\to B$ be a Serre fibration and let
$e_1,\ldots,e_m\in H^*(E;R)$ be homogeneous classes whose restrictions form
an $R$-basis of $H^*(F_b;R)$ for every fiber $F_b$.  Then the
fiber-cohomology local system is constant, with the displayed restricted
classes as its basis.

## Facts & Assumptions

**Given:** The fibration, commutative coefficient ring, and supplied finite family in the statement.

[F1] [[lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid]] gives the cohomological path-transport local system under AC, including naturality for maps of fibers.

[F2] [[prop-singular-cohomology-is-contravariantly-functorial]] gives contravariant restriction and its composition law.

[A1] [[def-axiom-of-choice]] is assumed only for the strict-fiber cohomological comparison used by [F1].

## Proof

**Proof technique:** naturality of restriction under fiber transport.

1.1 Let $\gamma:b\to c$ be a path.  Fiber transport is represented, up to the equivalence built into [F1], by a map $T_\gamma:F_b\to F_c$ lying over the path.  The inclusion maps of the endpoint fibers into $E$ are homotopic after composing the first with $T_\gamma$.  Therefore [F2] gives $T_\gamma^*(e_i|_{F_c})=e_i|_{F_b}$ for every $i$, in the variance convention of [F1]. [F1, F2]

2.1 Since the restricted $e_i$ are a basis in both endpoint stalks, step 1.1 says that the transport matrix sends every named basis vector to the corresponding named basis vector.  It is therefore the identity matrix.  This holds for every path class, so the basis identifies the local system with the constant graded $R$-module $H^*(F_b;R)$. [F1, step 1.1]

3.1 If $m=0$, the basis hypothesis says every stalk is the zero module and the conclusion is the constant zero system.  The zero ring and zero-degree classes obey the same calculation.  A path-connected base is not needed: the argument applies independently on each component on which the same finite list is a basis.  No basis or representative is chosen; the list is part of the hypotheses.  AC is used exactly through [A1] in [F1]. [F1, A1, step 2.1] ∎
