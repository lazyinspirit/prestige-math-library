---
title: The actual smooth restriction arrow gives the point-supported cycle fiber
status: published
research_item: lem-author-59b1a831fe59-actual-support
dependency_level: 15
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood)
- [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input)
- [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. For $V,L,x$ above and every $j\geq0$, the actual restriction arrow of the specified EM complexes is equivalent, as an arrow diagram, to
$$[z^j(V,\bullet)[-2j]\longrightarrow z^j(V\setminus\{x\},\bullet)[-2j]].$$
Its fiber is therefore $z_x^j(V,\bullet)[-2j]$. These equivalences compare actual restriction maps and the fiber projections before taking cohomology. The same diagram identifies the arrow with the classical coefficient-complex restriction used below. No hypothesis that $k$ be finitely generated over its prime field is required.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed compatible site and universe bounds discharge the inherited premises of the neighbourhood and support constructions and the open-natural classical comparison in [F1]–[F3] at the annotated applications below. The chain, dimension and formal fiber computations introduce no additional choice principle.

**Given:** The Axiom of Choice, the fixed compatible site and universe bounds, and the exact smooth finite-type pair $x\in V$, its residue field $L$ from the neighbourhood supplier, and $j\geq0$.

**Goal:** Transfer the actual support fiber, not choose isomorphisms of its groups after the fact.

[F1] [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input) gives the natural EM-to-cdh transformation on qcqs prime-field schemes and its equivalence on regular Noetherian schemes, for every nonnegative weight.

[F2] [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input) gives, for each nonnegative weight, the BEM fixed-site comparison to cycles and the MVW classical coefficient zigzag on all opens of the single smooth ambient $S=V$ over perfect $k$. [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood) verifies its hypotheses on $V$ and its complement.

[F3] [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) gives the supported cycle complex as the actual restriction fiber by its imported Bloch localization theorem; [def-supported-complex-indexing](item-def-supported-complex-indexing) fixes fiber and cohomological shifts.

## Proof
1.1 Both smooth objects are regular Noetherian after forgetting to the prime field. Apply [F1] to their actual open arrow. Apply [F2] on the single fixed ambient $S=V$, restricting its equivalence to the opens $V$ and $V\setminus\{x\}$. The MVW coefficient functor on this same open diagram is equivalent to the cycle functor, whose arrow is actual open restriction. Compose in the functor category of arrows, inverting only its natural equivalences. This proves the displayed arrow equivalence in arbitrary nonnegative weight. [A1, F1, F2, given]

2.1 Fibers are functorial finite limits of coherent arrows. Taking them in step 1.1 preserves equivalences and their projections. Apply [F3] to replace the derived cycle fiber by its fixed-support subcomplex; cochain reindexing and shift $[-2j]$ commute with fibers. This gives the asserted fiber equivalence. The same construction through the classical intermediate identifies the actual classical restriction fiber, and not an unrelated relative-motive group. [A1, F2, F3, step 1.1] ∎
