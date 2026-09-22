---
id: thm-shelah-baire-model-separates-baire-property-from-measurability
kind: theorem
title: Shelah's model separates universal Baire property from universal measurability
status: draft
origin: pipeline
deps: [thm-countable-first-order-completeness, thm-forcing-theorem, thm-baire-property-model-equiconsistent-with-zfc, thm-shelah-ch-omega-one-sweet-construction, thm-shelah-inner-model-all-sets-of-reals-have-baire-property, thm-constructibility-is-absolute-and-l-is-minimal, thm-shelah-inner-model-satisfies-zf-and-dependent-choice, def-lc-inaccessible-and-mahlo-cardinals, thm-lc-inaccessible-rank-segments-model-zfc, lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one, thm-raisonnier-filter-is-rapid-from-null-code-measurability, lem-raisonnier-family-is-a-sigma-one-three-filter, thm-rapid-filters-are-not-lebesgue-measurable, def-countable-choice, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.16, Conclusion 7.17 and remarks (3)-(4), pp. 43-44"}
---

## Statement

Relative to $\operatorname{Con}(\mathrm{ZFC})$, it is consistent that ZF+DC
holds, every set of reals has the Baire property, and not every set of reals is
Lebesgue measurable. Thus universal Baire property does not entail universal
Lebesgue measurability over ZF+DC.

## Facts & Assumptions

**Given:** The model-theoretic assumption $\operatorname{Con}(\mathrm{ZFC})$ and Shelah's published relative-consistency construction.

[F1] [[thm-constructibility-is-absolute-and-l-is-minimal]] is a theorem of ZF. Its external comparison clause assumes transitivity, but the theorem itself may be evaluated **inside** any first-order model of ZF. In particular, internally, a definable transitive inner class with all ordinals computes the same $L$ as its ambient model. No external transitivity of the model used below is inferred.

[F2] [[def-lc-inaccessible-and-mahlo-cardinals]] defines inaccessibility, while [[thm-lc-inaccessible-rank-segments-model-zfc]] proves in ZFC that $V_\kappa$ models ZFC when $\kappa$ is inaccessible and that inaccessibility below $\kappa$ is absolute to that rank segment. This theorem too can be interpreted internally in an arbitrary first-order model.

[F3] [[thm-shelah-ch-omega-one-sweet-construction]] constructs the required forcing over every ZFC+CH ground. When the ground also satisfies $V=L$, [[thm-shelah-inner-model-all-sets-of-reals-have-baire-property]] proves at the exact homogeneity and Borel-to-open interfaces that the resulting $N=HOD(S)$ has universal Baire property. [[thm-baire-property-model-equiconsistent-with-zfc]] is used only for the published metatheoretic comparison, not as the construction interface.

[F4] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]: $N$ has the same ordinals and reals as the extension and satisfies ZF+DC.

[F5] [[lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one]]: in ZF+Countable Choice, if the ambient $\omega_1$ is not inaccessible in its constructible universe, there is a real $x$ with $\omega_1^{L[x]}=\omega_1$.

[F6] [[thm-raisonnier-filter-is-rapid-from-null-code-measurability]]: under Countable Choice and $\omega_1^{L[x]}=\omega_1$, measurability of every $A(x\oplus r)$, for all reals $r$, makes $F(x)$ rapid.

[F7] [[lem-raisonnier-family-is-a-sigma-one-three-filter]] and [[thm-rapid-filters-are-not-lebesgue-measurable]]: $F(x)$ is a set of reals, and if rapid it is not Lebesgue measurable. Dependent Choice ([[def-dependent-choice]]) implies Countable Choice ([[def-countable-choice]]).

[F8] [[thm-countable-first-order-completeness]] supplies a countable model of the consistent countable theory ZFC. The fixed-formula definability induction in [[thm-forcing-theorem]] is a ZF proof scheme. Although that item's external semantic formulation assumes a transitive ground, an arbitrary model of ZFC satisfies the corresponding internal Boolean-valued truth theorem. Since the model below is externally countable, a generic ultrafilter exists by recursively meeting its externally countable list of internal dense sets; the extension is formed as the quotient of internal names by that ultrafilter, using internal Boolean values, rather than by an external well-founded recursion on names.

## Proof

1.1 By [F8], take a countable first-order model $M\models\mathrm{ZFC}$; it may be externally ill-founded. Perform the following construction internally to $M$. Its constructible universe $L^M$ satisfies ZFC+GCH. If $M$ thinks that $L^M$ has no inaccessible, set $N_0=L^M$. Otherwise let $\kappa$ be what $L^M$ regards as its least inaccessible and set $$N_0=(V_\kappa)^{L^M}.$$ The internal instance of [F2] says that this rank segment satisfies ZFC and that every internally inaccessible ordinal below $\kappa$ would already be inaccessible in $L^M$, contrary to the internal minimality of $\kappa$. Since $L^M\models V=L$ and internally every member of this inaccessible rank segment has transitive closure of size below $\kappa$, its constructible rank is below $\kappa$; the internal constructibility recursion [F1] therefore gives $N_0\models V=L$. Thus in both cases $N_0$ is an externally countable first-order model of ZFC+$V=L$+"there is no inaccessible cardinal", and hence of ZFC+CH. This is an internal model construction; no external well-foundedness or transitivity of $M$ or $N_0$ is asserted. [F1, F2, F8]

2.1 Inside $N_0$, apply the direct ZFC+CH construction theorem in [F3] and let $P$ be the forcing it produces. Externally enumerate all dense subsets of the Boolean completion of $P$ that belong to the countable structure $N_0$, recursively meet them, and let $G$ be the generated $N_0$-generic ultrafilter. Form $N_0[G]$ as the Boolean-valued quotient of the internal $N_0$-names: equality and membership of two quotient classes are determined by whether their internal Boolean values lie in $G$. The internal fixed-formula truth theorem from [F8] validates every standard formula and axiom used here; no external recursion through the possibly ill-founded name relation is required. In $N_0[G]$ form the definable inner class $N=HOD(S)$. Because step 1.1 arranged $N_0\models V=L$, the inner-model conclusions in [F3] and [F4] apply and make $N$ a first-order model of ZF+DC in which every set of reals has the Baire property. [F3, F4, F8, step 1.1]

3.1 In addition, [F4] says internally in $N_0[G]$ that $N$ is transitive and has all of the extension's ordinals and reals. This is the hypothesis needed for the internal constructibility comparison below. [F4, step 2.1]

3.2 We first compute $L$ across the forcing extension without invoking the external transitivity clause of [F1]. The standard ZFC proof formalised by the forcing theorem says that set forcing adds no ordinals. It then proves, by internal induction on the common ordinals, that $$L_\alpha^{N_0[G]}=L_\alpha^{N_0}$$ for every internal ordinal $\alpha$: the zero and limit steps are immediate, and at a successor both sides take the definable subsets of the same preceding set structure, whose first-order satisfaction relation is unchanged. Since $N_0\models V=L$, the union of the ground levels is all of $N_0$. Therefore $N_0[G]$ internally satisfies $$L^{N_0[G]}=N_0.$$ This is a theorem proved and evaluated inside the arbitrary model, not an external absoluteness comparison between transitive universes. [F1, F8, step 1.1, step 2.1]

4.1 Now reason inside $N_0[G]$. The class $N$ is there a definable transitive ZF inner model containing every ordinal by step 3.1. The internal instance of the ZF theorem [F1] therefore gives $$L^N=L^{N_0[G]}=N_0.$$ Consequently $N$ satisfies that its constructible universe has no inaccessible cardinal, because that is exactly the first-order property arranged internally in $N_0$ at step 1.1. This establishes the same-$L$ invariant without ever treating the externally ill-founded structures as transitive. [F1, step 1.1, step 3.1, step 3.2]

5.1 Suppose toward a contradiction that every set of reals in $N$ is Lebesgue measurable. DC gives Countable Choice by [F7]. Since step 4.1 makes $\omega_1^N$ noninaccessible in $L^N$, [F5] supplies a real $x\in N$ with $\omega_1^{L[x]}=\omega_1^N$. For every real $r\in N$, the set $A(x\oplus r)$ is a set of reals in $N$ and is therefore measurable by the supposition. This is the full uniform premise of [F6], not just its instance at $r=0$, so $F(x)$ is rapid. But $F(x)$ is itself a set of reals by [F7] and a rapid filter is not Lebesgue measurable, contradicting the supposition. Hence $N$ contains a nonmeasurable set of reals. [F5, F6, F7, step 4.1]

6.1 Starting from the countable arbitrary model supplied by consistency, steps 1.1--5.1 construct a first-order model $N$ of $\mathrm{ZF}+\mathrm{DC}+\text{all BP}+\neg\text{all LM}$. Hence $$\operatorname{Con}(\mathrm{ZFC})\to \operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all BP}+\neg\text{all LM}).$$ No transitive-model consequence of bare consistency is used. [F3, F8, step 1.1, step 2.1, step 5.1]

7.1 The steps above establish the relative consistency and the failure of the implication from universal BP to universal LM over ZF+DC; this is the Statement. [step 3.1, step 5.1, step 6.1] ∎
