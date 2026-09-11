---
id: lem-lc-solovay-density-locality-and-null-joins
kind: lemma
title: Solovay densities and localized small null joins
status: draft
origin: pipeline
deps: [lem-lc-probability-algebra-completeness, def-lc-complete-ultrafilters-and-measurable-cardinals, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-monotone-convergence-for-the-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-axiom-of-choice, prop-closure-properties-of-measurable-functions-used-by-the-integral]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Bagaria and da Silva (2023), Theorem 2.9 p.8; local proof of the ground probability-algebra density construction and identities
      url: https://diposit.ub.edu/dspace/bitstream/2445/214429/1/847279.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume ZFC. Let $\kappa$ be an uncountable cardinal with $|[0,1]|<\kappa$, let $U$ be a proper $\kappa$-complete ultrafilter on a set $I$, and let $(X,\Sigma,\mu)$ be a probability space with probability algebra $(\mathbb B,m)$. For every $a=(a_i)_{i\in I}\in\mathbb B^I$ there is a unique almost-everywhere class of measurable functions $h_a:X\to[0,1]$ such that, for every $c\in\mathbb B$,

$$\int_c h_a\,d\mu=\nu_a(c),\qquad \{i:m(c\wedge a_i)=\nu_a(c)\}\in U.$$

Here $\int_c$ means integration over any measurable representative of $c$. This class assignment is a set function on $\mathbb B^I$. The following identities are independent of the chosen representatives of the densities:

1. If $c\wedge a_i=c\wedge b_i$ for all $i$ in some member of $U$, then $h_a=h_b$ almost everywhere on $c$.
2. If $Z\subseteq I$ and $a_i=1$ on $Z$, $a_i=0$ off $Z$, then $h_a$ is the constant $1$ when $Z\in U$ and the constant $0$ otherwise. Coordinatewise complementation gives $h_{\neg a}=1-h_a$ almost everywhere.
3. For a sequence $(a^n)_{n<\omega}$ in $\mathbb B^I$, let $a_i=\bigvee_n a_i^n$. If $c\wedge a_i^n\wedge a_i^r=0$ for every $i\in I$ and $n\ne r$, then $h_a=\sum_n h_{a^n}$ almost everywhere on $c$. The sum is finite almost everywhere on $c$.
4. For any ordinal $\beta<\kappa$ and family $(a^\xi)_{\xi<\beta}$ in $\mathbb B^I$, set $a_i=\bigvee_{\xi<\beta}a_i^\xi$. If every $h_{a^\xi}$ is zero almost everywhere on the same $c$, then $h_a$ is zero almost everywhere on $c$.

In particular, writing $z(a)=[\{x:h_a(x)=0\}]\in\mathbb B$, the last assertion is the Boolean inequality

$$\bigwedge_{\xi<\beta}z(a^\xi)\le z(a).$$

This is a theorem inside the original probability space and its algebra. It does not assert a forcing truth lemma or the existence of a measure on new subsets in a generic extension.

## Facts & Assumptions

**Given:** The probability space, $\kappa$ and $U$ in the statement. All indexed families here are sets in the universe where $U$ is complete.

[F1] The probability algebra is well-defined and complete; $m$ is strictly positive and countably additive, and meet distributes over arbitrary joins. ([[lem-lc-probability-algebra-completeness]])

[F2] A proper $\kappa$-complete ultrafilter is closed under intersections indexed below $\kappa$, including the empty intersection $I$. ([[def-lc-complete-ultrafilters-and-measurable-cardinals]])

[F3] A finite positive measure absolutely continuous with respect to a probability measure has an integrable real-valued RN density, unique almost everywhere. The common finite exhaustion can be constantly $X$. ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]])

[F4] Integrals of integrable functions are linear. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F5] Nonnegative integrals are monotone and homogeneous. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F6] Increasing nonnegative measurable functions have the corresponding increasing limit of integrals. ([[thm-monotone-convergence-for-the-integral]])

[F7] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F8] AC indexes the small sets of real values, supplies the probability-algebra and RN selections, and can select representatives from the set-indexed density classes. It is not Global Choice. ([[def-axiom-of-choice]])

[F9] Sums, truncations, measurable restrictions and increasing limits have the required measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

## Proof

1.1 First reconstruct the integral foundation used by [F3]–[F7]. Augment every finite disjoint display $s=\sum_ra_r\mathbf1_{E_r}$ of a nonnegative simple function by $X\setminus\bigcup_rE_r$ with coefficient $0$. Intersections of two augmented displays partition $X$, and equality of the functions makes their coefficients equal on every nonempty cell. Finite additivity and $0\cdot(+\infty)=0$ therefore prove representation independence. Common augmented refinements give simple monotonicity and additivity termwise; homogeneity is direct for scalar $0$ and termwise for a positive scalar. Taking suprema over simple minorants gives nonnegative monotonicity. If $0\le f_j\uparrow f$, put $L=\sup_j\int f_j$. For every simple $s\le f$ and $0<c<1$, the sets $A_j=\{f_j\ge cs\}$ increase to $X$, including on the zero level of $s$, and continuity from below for the finite-sum measure $A\mapsto\int_A s$ gives $c\int s=\lim_jc\int_{A_j}s\le L$. Let $c\uparrow1$ and take the supremum over $s$ to obtain MCT. Applying MCT to sums of increasing simple approximants gives nonnegative additivity; positive/negative and real/imaginary decompositions then give finite $L^1$ linearity. Finally, if $g\ge0$ and $\int g=0$, then $(1/n)\mu\{g\ge1/n\}\le\int g$ for every $n$, so $g=0$ almost everywhere; the converse follows because every simple minorant is supported, apart from its zero cell, on a null set. These arguments supply the exact affected parts of [F4]–[F7], and with them substituted at its base the unaffected RN construction and uniqueness argument in [F3] applies. [F3, F4, F5, F6, F7, construct]

1.2 Every function $v:I\to[0,1]$ has exactly one $U$-large fibre. If none were large, the complements of all its fibres would belong to $U$. The range has cardinality below $\kappa$, so indexing it by an ordinal below $\kappa$ using F8 and applying F2 would put their empty intersection in the proper ultrafilter. Two disjoint fibres cannot both belong to a proper filter. Apply this to $v(i)=m(c\wedge a_i)$ for each $(a,c)$ to define the unique number $\nu_a(c)$. Uniqueness and Replacement give a set function of $(a,c)$, with $0\le\nu_a(c)\le m(c)$ and $\nu_a(0)=0$. [F1, F2, F8]

2.1 Fix $a$ and pairwise disjoint $c_n\in\mathbb B$, and put $c=\bigvee_n c_n$. Intersect the $U$-large fibres defining $\nu_a(c)$ and all $\nu_a(c_n)$. This countable intersection is in $U$ by F2 and is nonempty. At any $i$ in it, meet-distributivity and countable additivity from F1 give $m(c\wedge a_i)=\sum_n m(c_n\wedge a_i)$, hence $\nu_a(c)=\sum_n\nu_a(c_n)$. Thus $E\mapsto\nu_a([E])$ is a finite positive measure on $\Sigma$, dominated by $\mu$. It is absolutely continuous, and its total variation equals itself: each measurable finite partition sums to the measure of its union because all values are nonnegative. F3 therefore applies with the constant finite exhaustion $X$. [F1, F2, F3, step 1.1, step 1.2]

3.1 Let $h$ be the integrable real RN density from step 2.1. For each positive integer $n$, put $E_n=\{h\le-1/n\}$ and $T_n=\{h\ge1+1/n\}$. Linearity and monotonicity give $\nu_a([E_n])=\int_{E_n}h\,d\mu\le-\mu(E_n)/n$ and $\nu_a([T_n])\ge(1+1/n)\mu(T_n)$. Since $0\le\nu_a([E_n])$ and $\nu_a([T_n])\le\mu(T_n)$, both sets are null. Their countable union contains the set where $h\notin[0,1]$. Replacing $h$ by $\min(1,\max(0,h))$ gives a measurable $[0,1]$-valued density; integration is unchanged on the null exceptional set. F3 gives almost-everywhere uniqueness. The set of all measurable functions $X\to[0,1]$ is a subset of $[0,1]^X$; each equivalence class of densities is thus a nonempty set, uniquely specified by $a$. Replacement gives the class assignment as a set function, and F8 permits simultaneous representatives if desired. Integrals over equivalent measurable representatives of $c$ agree, because these functions are bounded and the symmetric difference is null. [F1, F3, F4, F5, F8, F9, step 1.1, step 1.2, step 2.1]

4.1 Suppose the hypothesis of locality holds on $J\in U$, and let $d\le c$. For $i\in J$, $d\wedge a_i=d\wedge b_i$. Intersecting $J$ with the two defining large fibres in step 1.2 proves $\nu_a(d)=\nu_b(d)$. Choose a measurable representative $C$ of $c$. Consequently $1_C h_a$ and $1_C h_b$ have identical integrals over every $E\in\Sigma$, since those integrals equal $\nu_a([E]\wedge c)$ and $\nu_b([E]\wedge c)$. Both are densities of the same finite measure, so F3 gives their equality almost everywhere, which is exactly equality on $c$. [F2, F3, step 1.2, step 3.1]

4.2 For the indicator family of $Z$, the values $m(c\wedge a_i)$ are $m(c)$ on $Z$ and zero off $Z$. The ultrafilter decides $Z$, so step 1.2 gives $\nu_a(c)=m(c)$ or zero accordingly, including $c=0$. Constant densities $1$ and $0$ represent these measures, so uniqueness gives the assertion. For complements, $m(c\wedge\neg a_i)=m(c)-m(c\wedge a_i)$ for every $i$, and the large-fibre equation yields $\nu_{\neg a}(c)=m(c)-\nu_a(c)$. F4 shows that $1-h_a$ represents this measure, so uniqueness gives the complement identity. [F1, F2, F3, F4, step 1.2, step 3.1]

4.3 For the sequence in clause 3 and any $d\le c$, the family $(d\wedge a_i^n)_n$ is disjoint for every $i$. Meet-distributivity and countable additivity give $m(d\wedge a_i)=\sum_n m(d\wedge a_i^n)$. Intersect the countably many defining large fibres, including that for $a$, to obtain $\nu_a(d)=\sum_n\nu_{a^n}(d)$. Choose nonnegative representatives of all these densities by F8. For a measurable representative $C$ of $c$, F4 and F6 applied to $1_C\sum_{n<N}h_{a^n}$ show that its increasing pointwise limit has integral over $E$ equal to $\nu_a([E]\wedge c)$. Its total integral is at most $1$, so the set where the limit is infinite is null: on that set every constant bound has integral at most $1$, forcing its measure to be zero. Replace the limit there by zero to obtain a real integrable density of the same finite measure as $1_C h_a$. F3 gives equality almost everywhere, proving clause 3 and the asserted finiteness on $c$. [F1, F2, F3, F4, F5, F6, F8, F9, step 1.2, step 3.1]

5.1 For clause 4, the hypotheses and F7 give $\nu_{a^\xi}(c)=0$ for every $\xi<\beta$. By step 1.2 each set $J_\xi=\{i:m(c\wedge a_i^\xi)=0\}$ belongs to $U$. Their intersection $J$ is in $U$ by F2. For $i\in J$, strict positivity in F1 makes every $c\wedge a_i^\xi$ the zero Boolean element. Meet-distributivity now gives $c\wedge a_i=\bigvee_{\xi<\beta}(c\wedge a_i^\xi)=0$. Thus $\nu_a(c)=0$ by the unique large-fibre rule, and F7 gives $h_a=0$ almost everywhere on $c$. For $\beta=0$, $J=I$, every $a_i=0$ and step 4.2 gives the zero density directly. No union of fewer than $\kappa$ measurable exceptional sets has been formed. [F1, F2, F7, step 1.2, step 3.1, step 4.2]

6.1 The zero set of each density is measurable and its class is independent of its representative, by almost-everywhere uniqueness. Put $c=\bigwedge_{\xi<\beta}z(a^\xi)$ using F1. For each $\xi$, the inequality $c\le z(a^\xi)$ means precisely that $h_{a^\xi}$ vanishes almost everywhere on a representative of $c$. Step 5.1 then gives $c\le z(a)$. This includes the empty meet $c=1$, the singleton family and the zero condition. All constructions and identities concern sets and functions in the original universe; no generic interpretation has entered the argument. [F1, step 3.1, step 5.1] ∎
