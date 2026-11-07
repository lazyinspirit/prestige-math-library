---
id: thm-number-ring-quillen-k-rational-primitive-special-linear-homology
kind: theorem
title: Number-ring rational Quillen K-groups and stable special-linear primitives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-enumerable-projective-quillen-q-plus-comparison
  - thm-monoidal-bar-telescope-group-completion-homology
  - thm-number-ring-elementary-special-linear-rational-homology-comparison
  - thm-rational-hurewicz-for-rationally-finite-type-homotopy-commutative-cw-h-spaces
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - def-higher-quillen-k-group-of-ring-of-integers
---

## Statement

Let $K$ be a number field, $R=\mathcal O_K$, and suppose that $H_j(B\operatorname{SL}_\infty(R);\mathbb Q)$ is finite-dimensional for every $j\ge0$. For every $n\ge2$ there is a natural isomorphism
$$K_n(R)\otimes\mathbb Q\xrightarrow{\cong}P H_n(B\operatorname{SL}_\infty(R);\mathbb Q),$$
where $K_n$ is the stated Quillen Q-construction group and $P$ denotes primitives for the diagonal coproduct. The assertion uses no axiom of choice, does not assert finite generation of the integral K-groups, and assumes the displayed rational homology finiteness rather than Borel's arithmetic calculation.

## Statement references

[[thm-enumerable-projective-quillen-q-plus-comparison]]

[[thm-monoidal-bar-telescope-group-completion-homology]]

[[thm-number-ring-elementary-special-linear-rational-homology-comparison]]

[[thm-rational-hurewicz-for-rationally-finite-type-homotopy-commutative-cw-h-spaces]]

[[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[[def-higher-quillen-k-group-of-ring-of-integers]]

## Facts & Assumptions

**Given:** The number ring and finite-dimensional rational special-linear homology in the Statement.

[F1] The explicit plus CW model P_R receives BGL∞ and is a homology isomorphism for every local coefficient module over GL∞/E∞; its actual weak map to the direct-sum group-completion component identifies its higher homotopy with the Q-defined K-groups. [[thm-enumerable-projective-quillen-q-plus-comparison]]

[F2] The actual direct-sum localization is a homotopy-commutative H-space group completion, with the explicit monoidal structures. [[thm-monoidal-bar-telescope-group-completion-homology]]

[F3] BE∞→BSL∞ induces an isomorphism on rational homology. [[thm-number-ring-elementary-special-linear-rational-homology-comparison]]

[F4] The rational Hurewicz map of a connected based CW homotopy-commutative and homotopy-associative H-space of finite-dimensional rational homology identifies rational homotopy with diagonal primitives, under the based coherence hypotheses stated there. [[thm-rational-hurewicz-for-rationally-finite-type-homotopy-commutative-cw-h-spaces]]

[F5] Weak homotopy equivalences induce integral homology isomorphisms without choice. [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[F6] The higher K-groups of R are the homotopy groups of the Q-construction loop space as stated. [[def-higher-quillen-k-group-of-ring-of-integers]]

## Proof

**Proof technique:** Local-coefficient plus comparison on universal covers and rational Hurewicz.

1.1 Write G=GL∞(R), E=E∞(R), Q=G/E. The actual map BG→P_R of [F1] induces the quotient on π₁. Pull back the path-class universal cover of P_R along this map. Its connected component over the basepoint is the cover of BG associated with E; its groupoid model is the action groupoid of G on Q, whose full subgroupoid at the identity object is E. The inclusion of that one-object subgroupoid is fully faithful and every object is connected to it by an arrow. For one finite sphere or homotopy only finitely many such arrows are needed, proving that this cover is weakly equivalent to BE without a chosen global coset section. [F1, given, construct, algebra]

2.1 Take the regular local coefficient module Z[Q] in [F1]. The cellular chain complex with this local system is the ordinary chain complex of the path-class universal cover: every cell of the base has the set of all its actual lifts as a free Q-set, and the incidence maps are the lifted characteristic maps. The same calculation on BG gives the chains of its E-cover. Thus the local homology isomorphism from [F1], together with the explicit groupoid comparison of step 1.1 and [F5], identifies H_*(BE;Z) with the integral homology of the universal cover of P_R. No choice of one lift per cell is required: all lifts are retained. The identification is induced by actual maps, so it preserves the diagonal coalgebra after tensoring with Q. [F1, F5, step 1.1, construct, algebra]

3.1 Let L₀ be the identity component of the explicit direct-sum group-completion space from [F2], and U its path-class universal cover. The actual based weak map P_R→L₀ of [F1] lifts uniquely to a based map of their universal covers. Covering homotopy lifting identifies higher homotopy groups with those of the bases, so this lift is a weak equivalence; [F5] makes it a homology isomorphism. Thus step 2.1 gives a natural diagonal-coalgebra isomorphism H_*(BE;Q)≅H_*(U;Q). Composing its inverse with [F3] yields H_*(U;Q)≅H_*(BSL∞;Q). Hence H_j(U;Q) is finite-dimensional for every j by the Given hypothesis. [F1, F2, F3, F5, step 2.1, construct, algebra]

4.1 The symmetric monoidal direct-sum construction of [F2] supplies a based homotopy-associative and homotopy-commutative product on L₀, with based unit, associativity and symmetry homotopies arising from the actual unit, associator and symmetry maps. Its universal cover U is a CW complex: use all lifts of the supplied characteristic cells, rather than selecting one per cell. Because U and every finite product U^r are simply connected, the product and each specified based coherence homotopy lift uniquely to U, starting at the chosen basepoint. The lifts retain the unit, associativity and commutativity homotopies. Consequently U satisfies the exact H-space hypotheses of [F4], and its rational homology is finite-dimensional by step 3.1. [F2, F4, step 3.1, construct, algebra]

5.1 For n≥2, the covering U→L₀ identifies π_n(U) with π_n(L₀), and the actual weak Q-comparison of [F1]–[F6] identifies that group with K_n(R). Apply [F4] to U. Its Hurewicz image is precisely the primitive part of H_n(U;Q). The isomorphism of step 3.1 is induced by actual maps and therefore preserves diagonal coproducts; it carries those primitives bijectively to P H_n(BSL∞;Q). Combining these maps gives the displayed natural isomorphism. The zero primitive space is allowed, and no conclusion on integral finite generation is inferred. Retain the universal-cover and rational Hurewicz constructions above. [F1, F4, F6, step 3.1, step 4.1, construct, algebra, discharge-construct] ∎
