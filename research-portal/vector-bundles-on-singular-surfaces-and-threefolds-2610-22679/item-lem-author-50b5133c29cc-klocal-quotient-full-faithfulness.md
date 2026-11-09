---
title: Full faithfulness of the perfect triangulated quotient
status: draft
research_item: lem-author-50b5133c29cc-klocal-quotient-full-faithfulness
dependency_level: 11
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel)
- [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)


## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and $T=X\setminus U$, the actual restriction induces a fully faithful triangulated functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U).$$
The quotient inverts precisely maps whose restriction to $U$ is invertible.

## Facts & Assumptions
**Given:** The actual enhanced restriction and its ordinary homotopy functor. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Verify fullness and faithfulness, without assuming essential surjectivity.

[A1] Choice is inherited when invoking the actual restriction and kernel interface in [F1] and the supplied enhanced perfect categories. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) identifies the kernel and the denominator class $S$ consisting of maps whose cone is supported on $T$.

[F2] [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) supplies the ordinary Verdier quotient as $S^{-1}h\mathrm{Perf}(X)$, roofs for restricted maps, and the equalizer property for maps with identical restriction.

## Proof
1.1 Since restriction kills the kernel, it factors through the Verdier quotient. Given a morphism $b:j^*E\to j^*F$, [F2] gives perfect $Q$ and $c:Q\to E$, $a:Q\to F$ with $c\in S$ and $b=(j^*a)(j^*c)^{-1}$. Thus the quotient roof $E\xleftarrow{c}Q\xrightarrow{a}F$ maps to $b$, proving fullness on all object pairs. [A1, F1, F2]

2.1 Every quotient morphism is a roof $(c,a)$ as in step 1.1. If its restriction is zero, then $j^*a=0$ because $j^*c$ is invertible. The equalizer property in [F2], applied to $a$ and the zero map, gives $d:Q'\to Q$ with $d\in S$ and $ad=0$. Refining the roof by $d$ identifies it with the zero roof in the quotient. Hence the induced map on each abelian Hom group has zero kernel and is injective. Along with fullness this proves the Statement for the functor induced by actual restriction. [F1, F2, step 1.1] ∎
