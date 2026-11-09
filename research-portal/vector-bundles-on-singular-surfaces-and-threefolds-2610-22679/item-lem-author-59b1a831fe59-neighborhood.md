---
title: A smooth point has the exact finite-type excision pair
status: draft
research_item: lem-author-59b1a831fe59-neighborhood
dependency_level: 14
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and the completed universe bounds. Let $X$ be a qcqs $k$-scheme of pure finite dimension $d$, where $k$ is perfect, and let $x$ be a closed point at which $X\to\operatorname{Spec}k$ is smooth. There is an affine smooth separated finite-type neighbourhood $V$ of $x$, pure of dimension $d$. Its residue field $L=\kappa(x)$ is finite separable over $k$, and $\operatorname{Spec}L\hookrightarrow V$ has pure codimension $d$. Both $X\setminus\{x\}$ and $V\setminus\{x\}$ are qcqs. For every $j\geq0$, actual EM Nisnevich descent gives the support-excision equivalence $C_{j,x}(X)\simeq C_{j,x}(V)$, compatibly with support-to-global maps. Here $C_{j,x}$ is the unshifted cohomological restriction fiber, not its $[2j]$ spectral shift.

## Facts & Assumptions
**Given:** Exactly the hypotheses above; smooth at $x$ means smooth on some open neighbourhood, with the usual locally finite-presentation condition.

**Goal:** Verify the actual geometric and descent hypotheses before applying a classical purity theorem.

[F1] [def-article-conventions](item-def-article-conventions) and [def-cohomology-with-support](item-def-cohomology-with-support) give qcqs and support conventions. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) gives derived Nisnevich descent on this category. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) is the conditional excision theorem.

[F2] [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input) supplies finite-type dimensions, transcendence-degree dimensions of domains, and finite closed-point residue fields. Smooth finite-type schemes are regular Noetherian, with locally constant relative dimension.

## Proof
1.1 Choose an affine open in the smooth neighbourhood containing $x$ and shrink within its relative-dimension stratum. It is smooth separated finite type over $k$, pure of some dimension $e$. In the usual finite-type setting, purity of $X$ and [F2] give $e=d$. The same conclusion holds if only qcqs $X$ is assumed: let $T$ be the reduced irreducible component through the chosen local smooth component, with function field $K$. Its finite-type nonempty open has dimension $e=\operatorname{trdeg}_kK$. Every affine coordinate domain on $T$ is a subalgebra of $K$; any finite strict prime chain in it remains strict in some finitely generated $k$-subalgebra, by choosing one witness for each strict inclusion. That subalgebra has dimension at most $\operatorname{trdeg}_kK=e$. Every finite specialization chain in $T$ lies in an affine open containing its most special point. Hence $\dim T\leq e$, while its open of dimension $e$ gives the reverse inequality. Purity of $X$ gives $\dim T=d$, so $e=d$. Denote the resulting neighbourhood by $V$. [F2, given, construct]

2.1 Since $x$ is closed in $V$, [F2] gives finite $L/k$; perfectness makes it separable. Thus both $V$ and $\operatorname{Spec}L$ belong to the smooth separated finite-type category, and the dimension formula gives codimension $d$. The open $V\setminus\{x\}$ is quasi-compact because $V$ is Noetherian. To prove $X\setminus\{x\}$ quasi-compact without imposing global Noetherianness, take any open cover of it. Together with $V$ it covers quasi-compact $X$, so finitely many members plus $V$ suffice. Finitely many members also cover quasi-compact $V\setminus\{x\}$. These two finite selections cover $X\setminus\{x\}$. Quasi-separatedness is inherited by open subschemes. [F1, F2, step 1.1]

3.1 The two opens $V$ and $X\setminus\{x\}$ cover $X$, with intersection $V\setminus\{x\}$. They form a Nisnevich two-open cover, and all four objects are qcqs by step 2.1. Apply the actual derived Nisnevich descent of [F1] and then its conditional excision theorem. This supplies exactly the claimed restriction-induced support equivalence and support-to-global compatibility for every nonnegative weight. [F1, step 2.1] ∎
