---
id: thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity
kind: theorem
title: All sets of reals in Solovay L(R) have LM, BP, and PSP
status: draft
origin: pipeline
deps: [thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice, def-solovay-levy-collapse-setup, def-forcing-name-valuation-and-generic-extension, lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-absorption-factorization-and-homogeneity, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, lem-solovay-borel-code-and-regularity-absoluteness, lem-solovay-random-and-cohen-generics-are-large, lem-solovay-homogeneous-truth-has-borel-representatives, lem-solovay-perfect-tree-of-mutually-generic-name-interpretations, def-vitali-set-on-the-unit-interval, def-bernstein-set-on-r, thm-choice-bernstein-set-pathology, thm-choice-implies-dependent-implies-countable-choice, thm-countable-union-of-countable, thm-r-uncountable, def-linear-basis, def-linear-combination-and-span, cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn, thm-steinhaus-difference-set-contains-a-ball, thm-cauchy-functional-equation-regularity, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-rationals-countable, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: homogeneous-regularity-transfer
sources:
  references:
    - {title: "Solovay 1970, Theorem 1 and Parts II–III", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
    - {title: "Unger 2015, pp. 1–2", url: "https://www.math.toronto.edu/sunger/solovay-model.pdf"}
    - {title: "Kanamori, The Higher Infinite, proof of Theorem 11.1", url: "https://math.cs.kitami-it.ac.jp/~fuchino/xbooks/The-Higher-Infinite-optimized.pdf", locator: "§11, printed pp. 139–143"}
---

## Statement

Every set of reals in $L(\mathbb R)$ is Lebesgue measurable, has BP, and has PSP. The no-Vitali, no-Bernstein, no-Hamel-basis, linear-additive-map, failure-of-AC, and no-Banach–Tarski conclusions hold there as well.

## Facts & Assumptions

**Given:** $K=L(\mathbb R)^{V[G]}$.

[F1] [[thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice]]: $K$ is ZF+DC with all ambient reals and ordinals, and its canonical map $F:\operatorname{Ord}\times\mathbb R\twoheadrightarrow K$ codes every element from one real and one ordinal.

[F2] [[lem-solovay-random-and-cohen-generics-are-large]] and [[lem-solovay-homogeneous-truth-has-borel-representatives]]: localized definitions have Borel representatives off null/meagre generic exceptions.

[F3] [[def-solovay-levy-collapse-setup]], [[def-forcing-name-valuation-and-generic-extension]], [[lem-solovay-absorption-factorization-and-homogeneity]], [[lem-forcing-monotonicity-density-and-decision]], [[lem-solovay-perfect-tree-of-mutually-generic-name-interpretations]], and [[lem-solovay-borel-code-and-regularity-absoluteness]]: a real in a bounded extension has a name over its interval collapse; a condition excluding every ground-real value gives a coded perfect family of interpretations, and homogeneous tail truth preserves the fixed membership formula.

[F4] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: real parameters localize to bounded collapse stages, whose reals are countable in the final extension. The interval-forcing name used below comes instead from the generic-extension definition cited in F3.

[F5] [[thm-forcing-theorem]]: a true statement about a name in a generic extension is forced by some condition in that generic.

[F6] [[def-vitali-set-on-the-unit-interval]], [[def-bernstein-set-on-r]], [[thm-choice-bernstein-set-pathology]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-countable-union-of-countable]], [[thm-r-uncountable]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-rationals-countable]], and [[def-axiom-of-choice]]: these are the exact ZF, countable-choice, measure, and reductio inputs for the Vitali/Bernstein and failure-of-AC consequences.

[F7] [[def-linear-basis]], [[def-linear-combination-and-span]], [[cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn]], [[thm-steinhaus-difference-set-contains-a-ball]], and [[thm-cauchy-functional-equation-regularity]]: these supply unique Hamel coordinates, measurable-subgroup rigidity, and measurable additive-map regularity.

[F8] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], and [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]: canonical binary cylinders have their dyadic measures, Euclidean measure completes the product measure under Countable Choice, and translations and orthogonal maps preserve measurability and measure under their stated hypotheses.

[F9] [[thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: $K$ has DC and hence Countable Choice.

## Proof

1.1 If $A\subseteq\mathbb R$ lies in $K$, choose $(\alpha,r)$ with $A=F(\alpha,r)$. Thus membership in $A$ is expressed by the canonical hierarchy definition from the single real $r$ and ordinal $\alpha$; no unlisted earlier-stage parameters remain. Localize $r$ by F4. Since $L(\mathbb R)$ is canonically definable from the class of all reals, the remaining homogeneous forcing fixes the membership formula. F2 gives Borel $B$ with $A\triangle B$ contained in a coded null set, and likewise an open representative modulo a coded meagre set. All witness codes are reals and hence lie in $K$ by F1. Absoluteness and internal DC therefore give LM and BP in $K$. [F1, F2, F4]

1.2 Use F8's half-open binary coding $b:[0,1)\to2^\omega$. Let $D$ be the Borel conull set of $x$ for which none of the three residue-class subsequences $k\mapsto b(x)(3k+j)$ is eventually $1$. Splitting those subsequences and decoding them gives a Borel bijection $T:D\to[0,1)^3$; its inverse interleaves the three canonical codes. A length-$3k$ cylinder has measure $2^{-3k}$ and maps to a product of three length-$k$ dyadic intervals, also of measure $2^{-3k}$. The monotone-class argument from these generating cylinders, followed by the product-completion theorem in F8, shows that $T$ and $T^{-1}$ preserve Borel sets and send Borel null sets to Borel null sets. This conclusion is derived here, not attributed to the one-way statement of the dyadic lemma. [F8, F9]

1.3 Let $N=V[G_\xi]$ be the bounded intermediate stage containing $r$. By F4, $N\cap\mathbb R$ has in the final extension an enumeration coded by a real, so that enumeration belongs to $K$ by F1. If $A$ is uncountable in $K$, some $z\in A\setminus N$ therefore exists. Localize $z$ to $V[G_\eta]=N[H]$ for some $\eta>\xi$ and choose in $N$ a name $\dot\tau$ for $z$ over the interval collapse $Q$.

2.1 In $N$ let $D=\{q\in Q:(\exists y\in\mathbb R^N)\ q\Vdash\dot\tau=\check y\}$. The actual generic $H$ misses $D$. Since $D\cup\{q:q\perp D\}$ is a dense set of $N$, some $p_0\in H$ is incompatible with $D$, so no extension of $p_0$ forces a ground-real value. The truth lemma and homogeneous tail forcing give $p_1\in H$ forcing the canonical membership formula from step 1.1. Take $p\in H$ below both. Apply F3 below $p$: every branch interpretation satisfies that membership formula, and the resulting injective continuous image is perfect. Its tree and image codes are reals and hence belong to $K$. Thus $A$ has a perfect subset. This uses the forcing predicate only on set parameters in $N$, never the external formula “$\dot\tau\notin N$.” If no such $z$ exists, the displayed enumeration instead proves $A$ countable. [F1, F3, F4, F5, step 1.1, step 1.3]

2.2 If $H$ were a Hamel basis, choose one $b\in H$ and take its rational coefficient homomorphism $c_b$. Its proper measurable kernel $W$ is either positive measure, when F7 gives $W=\mathbb R$, or null, when F8 preserves nullness under translation and F6 makes the rational cosets $qb+W$ cover $\mathbb R$ by a null set, contradicting the unit interval. For arbitrary additive $f$, the measurable sets $\{x\in[-1,1]:|f(x)|\le n\}$ cover $[-1,1]$; one has positive measure, so F7 bounds $f$ near zero and gives $f(x)=xf(1)$. [F6, F7, F8, step 1.1]

2.3 For $E\subseteq[0,1)^3$ in $K$, the set $A=T^{-1}[E]$ lies in $K$. Step 1.1 supplies Borel $B,N$ with $N$ null and $A\mathbin\triangle B\subseteq N$. After intersecting with $D$, bimeasurability and null preservation from step 1.2 give $E\mathbin\triangle T[B\cap D]\subseteq T[N\cap D]$, so completeness makes $E$ measurable. Integer translates then cover $\mathbb R^3$. F9 supplies Countable Choice, exactly the hypothesis of the product and orthogonal-invariance interfaces. Thus every subset of $\mathbb R^3$ in $K$ is measurable. If a positive-radius closed ball of measure $V$ had a one-use finite partition whose rigid images partitioned two disjoint copies, F8 and finite additivity would give $V=2V$, while inner and outer cubes from F6 give $0<V<\infty$. A radius-zero ball has one source point and hence one rigid image, not the two target points. [F6, F8, F9, step 1.1, step 1.2]

2.4 A Vitali selector $V$ would be measurable by step 1.1. If it were null, its explicitly rational-indexed translates would cover $[0,1]$ by a null set; if it had positive measure, arbitrarily many disjoint translates inside $[-1,2]$ would exceed that interval's finite measure. Translation invariance here is F8. For a Bernstein $B$, F1 and F6 make a two-term union of countable sets countable, so one of $B$ and its complement is uncountable; each has no nonempty perfect subset, contradicting step 1.3. If $K$ satisfied AC, F6 would construct a Bernstein set, so full AC fails. [F1, F6, F8, step 1.1, step 1.3]

3.1 Consequently all stated regularity and anti-choice conclusions hold in $K=L(\mathbb R)$, without identifying it with $M$ or importing a theorem whose subject is $M$. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4] ∎
