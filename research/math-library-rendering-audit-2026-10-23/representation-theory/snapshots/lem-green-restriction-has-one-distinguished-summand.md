---
id: lem-green-restriction-has-one-distinguished-summand
kind: lemma
title: Green restriction has one distinguished summand
status: published
origin: pipeline
deps: [lem-relative-projectivity-mackey-intersections-for-finite-modules, def-green-exceptional-intersection-families, lem-green-exceptional-family-containment-and-fusion, lem-green-vertex-retention-and-inducing-lift, lem-green-mackey-intersections-force-proper-vertices, thm-krull-schmidt-for-finite-dimensional-kg-modules, def-axiom-of-choice]
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

Assume AC. In the finite-dimensional characteristic-$p$ setting of [[def-green-exceptional-intersection-families]], let $M$ be an indecomposable $kG$-module with vertex $Q\in\mathcal Z$. Then $\operatorname{Res}_H^G M\cong U\oplus E$, where $U$ is indecomposable with vertex $Q$, occurs once, $E$ is relatively $\mathcal Y$-projective, and $M\mid\operatorname{Ind}_H^G U$. No other summand has a vertex in $\mathcal Z$. The notation $X\mid Y$ means that $X$ is isomorphic to a direct summand of $Y$.

## Facts & Assumptions

**Given:** Such a nonzero $M$, with $Q\leq P\leq H$.

[A1] AC ([[def-axiom-of-choice]]) is retained through the inherited finite-length decomposition argument.

[F1] Exceptional-family conventions are those of [[def-green-exceptional-intersection-families]].

[F2] Admissible subgroups avoid $H$-conjugate containment in $\mathcal Y$, and $P$ is admissible ([[lem-green-exceptional-family-containment-and-fusion]]).

[F3] Restriction retains a $Q$-vertex summand, and separately an inducing $H$-module with vertex $Q$ exists ([[lem-green-vertex-retention-and-inducing-lift]]).

[F4] Relatively $P$-projective inputs have $\mathcal Y$-projective errors after restriction of induction; those errors exclude admissible vertices ([[lem-green-mackey-intersections-force-proper-vertices]]).

[F5] Finite indecomposable multiplicities are unique ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

[F6] Induction is transitive and restriction preserves splittings ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]]).

## Proof

1.1 The inducing assertion in F3 supplies an indecomposable $H$-module $U$ with vertex $Q$ and $M\mid\operatorname{Ind}_H^G U$. Relative projectivity passes up $Q\leq P\leq H$ by transitivity of induction, so $U$ is relatively $P$-projective. F4 gives $\operatorname{Res}_H^G\operatorname{Ind}_H^G U\cong U\oplus E_0$, where $E_0$ is $\mathcal Y$-projective. These inherited existence arguments use the assumed AC. [A1, F3, F4, F6, given]

1.2 The separate restriction assertion in F3 supplies $W\mid\operatorname{Res}_H^G M$ with vertex $Q$. By F2 and F4 neither $W$ nor $U$ is $\mathcal Y$-projective. Thus no indecomposable in $E_0$ is isomorphic to either one. [F2, F3, F4, given]

2.1 Restricting the split inclusion from 1.1 makes $\operatorname{Res}_H^G M$ a direct summand of $U\oplus E_0$. By F5, its indecomposable multiset is a submultiset of that of $U\oplus E_0$. The copy of $W$ from 1.2 cannot lie in $E_0$, so $W\cong U$. Exactly one copy is available. The remaining multiset is contained in that of $E_0$, giving a complementary $E\mid E_0$. Family-projectivity is summand-closed as proved in F4, so $E$ is $\mathcal Y$-projective. [F4, F5, F6, step 1.1, step 1.2]

3.1 The inducing witness was obtained in 1.1, before any inverse correspondence. Every summand of $E$ has vertices excluded from $\mathcal Z$ by F2 and F4. If $H=G$, restriction is the identity and the empty error family forces $E=0$. If $P=1$, the normalizer hypothesis forces $H=G$. The zero module is excluded as an input but permitted as the complement. Since $P\in\mathcal Z$, the case $Q=P$ is included. This proves all claims. [F1, F2, F4, step 1.1, step 2.1] QED
