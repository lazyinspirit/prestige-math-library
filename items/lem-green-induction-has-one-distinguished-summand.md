---
id: lem-green-induction-has-one-distinguished-summand
kind: lemma
title: Green induction has one distinguished summand
status: published
origin: pipeline
deps: [thm-green-vertex-source-existence-and-conjugacy, def-green-exceptional-intersection-families, lem-green-exceptional-family-containment-and-fusion, lem-green-vertex-retention-and-inducing-lift, lem-green-mackey-intersections-force-proper-vertices, lem-green-restriction-has-one-distinguished-summand, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-krull-schmidt-for-finite-dimensional-kg-modules, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Statement

Assume AC. Use the finite-dimensional characteristic-$p$ setting and families of [[def-green-exceptional-intersection-families]]. For an indecomposable $kH$-module $U$ with vertex $Q\in\mathcal Z$,

$$\operatorname{Ind}_H^G U\cong M\oplus E,$$

where $M$ is indecomposable with vertex $Q$, occurs once, $E$ is relatively $\mathcal X$-projective, and $U\mid\operatorname{Res}_H^G M$. Exactly one indecomposable summand has a vertex in $\mathcal Z$.

## Facts & Assumptions

**Given:** These groups, modules and vertex; $\mid$ denotes being isomorphic to a direct summand.

[A1] AC ([[def-axiom-of-choice]]) is inherited through the finite-length decomposition argument.

[F1] The families and admissible vertex class are defined in [[def-green-exceptional-intersection-families]].

[F2] For subgroups of $P$, $H$-$\mathcal Y$ containment is equivalent to $G$-$\mathcal X$ containment ([[lem-green-exceptional-family-containment-and-fusion]]).

[F3] Restriction to any subgroup containing a vertex retains that vertex in a summand ([[lem-green-vertex-retention-and-inducing-lift]]).

[F4] Mackey error transport holds in both required directions, and $\mathcal Y$ errors exclude admissible vertices ([[lem-green-mackey-intersections-force-proper-vertices]]).

[F5] A $\mathcal Z$-vertex $G$-module has exactly one admissible restriction summand, with the same vertex ([[lem-green-restriction-has-one-distinguished-summand]]).

[F6] Transitivity, vertex containment and summand extraction hold ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]]).

[F7] Finite indecomposable decompositions have unique multiplicities ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

[F8] Vertices exist and are conjugate ([[thm-green-vertex-source-existence-and-conjugacy]]).

## Proof

1.1 The input $U$ is relatively $P$-projective by transitivity from $Q\leq P$. F4 gives $\operatorname{Res}_H^G\operatorname{Ind}_H^G U\cong U\oplus Y$, with $Y$ relatively $\mathcal Y$-projective. The exclusion assertion of F4 makes $U$ non-$\mathcal Y$-projective. Thus its multiplicity in this restriction is exactly one. [F4, F6, given]

2.1 Under the inherited AC assumption, decompose $\operatorname{Ind}_H^G U=\bigoplus_jM_j$. Comparing restrictions with 1.1 by F7, exactly one index, say $j=1$, has $U\mid\operatorname{Res}_H^G M_1$. For $j\ne1$, every indecomposable of $\operatorname{Res}_H^G M_j$ occurs in $Y$, so this restriction is $\mathcal Y$-projective. Each $M_j$ is relatively $Q$-projective, and vertex containment permits a vertex $T_j\leq Q$ after conjugation in $G$. [A1, F6, F7, F8, step 1.1]

3.1 For $j\ne1$, F3 retains a $T_j$-vertex summand in $\operatorname{Res}_H^G M_j$, since $T_j\leq Q\leq H$. This summand is $\mathcal Y$-projective by 2.1, so F6 gives $T_j\leq_H\mathcal Y$. F2 gives $T_j\leq_G\mathcal X$. Transitivity and conjugation of induction therefore make $M_j$ relatively projective for a member of $\mathcal X$. Their direct sum is $\mathcal X$-projective. [F2, F3, F6, step 2.1]

3.2 Put $M=M_1$ and $T=T_1$. If $M$ were $\mathcal X$-projective, its restriction would be $\mathcal Y$-projective by F4, contrary to its summand $U$ from 2.1. Consequently $T\leq Q\leq P$ is not $G$-contained in $\mathcal X$: such containment would make $M$ $\mathcal X$-projective by transitivity. Thus $T\in\mathcal Z$. Apply F5 to $M$. Its unique non-$\mathcal Y$ restriction summand has vertex $T$ and must be $U$, by 1.1 and 2.1. Since vertices of $U$ are $H$-conjugate, $T$ is $H$-conjugate to $Q$; hence $Q$ itself is a $G$-vertex of $M$. [F1, F4, F5, F6, F8, step 1.1, step 2.1]

4.1 The other summands are $\mathcal X$-projective by 3.1, so their vertices cannot be in $\mathcal Z$, by vertex containment and F1. In particular none is isomorphic to $M$, proving multiplicity one and uniqueness. We already have $U\mid\operatorname{Res}_H^G M$. When $H=G$, induction is identified with $U$ by $g\otimes u\mapsto gu$, so the complement is zero. When $P=1$ this same case is forced. The zero input is excluded; a zero complement is allowed. These statements prove the result. [F1, F6, step 2.1, step 3.1, step 3.2] QED
