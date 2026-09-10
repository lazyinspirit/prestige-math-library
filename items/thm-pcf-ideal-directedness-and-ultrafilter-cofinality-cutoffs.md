---
id: thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs
kind: theorem
title: Pcf ideal directedness and ultrafilter cofinality cutoffs
status: draft
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-characterisation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 3.4 and Corollary 3.5, pp. 32–33"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $A$ be a nonempty progressive set of infinite regular cardinals. For every cardinal $\lambda$, $\prod A/J_{<\lambda}[A]$ is $\lambda$-directed: every family of fewer than $\lambda$ functions has a weak upper bound. If the ideal is proper, bounds can be taken strict; for an improper ideal only weak directedness is intended. For every ultrafilter $D$ on $A$,

$$\operatorname{cf}(\prod A/D)<\lambda\quad\Longleftrightarrow\quad D\cap J_{<\lambda}[A]\ne\varnothing,$$

$$\operatorname{cf}(\prod A/D)=\lambda\quad\Longleftrightarrow\quad D\cap J_{<\lambda}[A]=\varnothing\ \text{ and }\ D\cap J_{\le\lambda}[A]\ne\varnothing.$$

These assertions include finite $A$ and all finite, infinite and singular cutoffs $\lambda$. For $A=\varnothing$, the product is a singleton, all these ideals are improper, weak directedness holds and the ultrafilter assertions are vacuous.

## Facts & Assumptions

**Given:** AC and the product and cutoff conventions of the statement. A weak upper bound becomes strict upon adding one at each infinite-cardinal coordinate, when the ideal is proper.

[F1] PCF is monotone, preserves finite unions, equals $A$ for finite $A$, and consists of infinite regular ultraproduct cofinalities; restrictions to ultrafilter supports preserve the quotient order ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] The cutoff families are ideals and restrict to subsets; $B\notin J_{<\lambda}[A]$ means some ultrafilter supported on $B$ has product cofinality at least $\lambda$. Every such ultrafilter contains $J_{<\lambda}[A]^*$ ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] A regular-length directed product has a strictly increasing chain dominating any prescribed family at successor stages, with $(*)_\kappa$ when $\kappa$ is uncountable regular, $\kappa^{++}$ is below that length and $\{a:a\le\kappa^{++}\}$ is small ([[lem-directed-progressive-products-have-club-continuous-chains]]).

[F4] Strong increase with regular $|A|<\kappa$ gives the $\kappa$ projection property ([[lem-strong-increase-gives-bounding-projections]]).

[F5] For regular length greater than $|A|^+$, the $|A|^+$ projection property gives a unique exact upper bound, with a positive limit-valued representative; exactness passes to larger proper ideals ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F6] A set smaller than the cofinality of a limit ordinal is bounded; cofinal subsets of that cardinality exist ([[thm-cofinality-basics]], (c)–(d)).

[F7] Successor cardinals are regular under AC ([[thm-regularity-of-the-alephs]], (b)).

[F8] An ultrafilter contains exactly one of each set and its complement ([[thm-ultrafilter-characterisation]]).

[A1] AC supplies enumerations and simultaneous bound witnesses ([[def-axiom-of-choice]]).

## Proof

1.1 If $A=\varnothing$, the empty function is the sole product member; no ultrafilter exists by F1. If $I=J_{<\lambda}[A]$ is improper, every comparison failure set belongs to $I$, so the zero function weakly bounds every family. Assume henceforth that $A\ne\varnothing$ and $I$ is proper. For finite $A$, F1–F2 give $I=\mathcal P(S)$ with $S=\{a\in A:a<\lambda\}$. For $|H|<\lambda$, define $b(a)=\sup\{f(a)+1:f\in H\}$ on $A\setminus S$, and $b(a)=0$ on $S$. At each remaining coordinate, $|H|<\lambda\le a=\operatorname{cf}(a)$, so F6 gives $b(a)<a$. Thus $b$ strictly bounds $H$ modulo $I$. The empty $H$ has supremum zero. At $\lambda=0$ there are no families of size less than $\lambda$, so directedness is vacuous. [F1, F2, F6, given]

2.1 Let $A$ be infinite and $\tau=|A|$. Progressiveness gives $a>\tau$ for all $a\in A$. If $\lambda\le\tau^{+3}$, there are at most three cardinals in $A$ below $\lambda$. Their set $S$ belongs to $I$ by the finite PCF calculation in F1. The supremum formula of step 1.1 on $A\setminus S$ again bounds every $<\lambda$ family. If $\lambda>\tau^{+3}$, remove instead $S=A\cap(\tau^{+3}+1)$, also finite and $I$-small. Let $A'=A\setminus S$ and $I'=I\cap\mathcal P(A')=J_{<\lambda}[A']$ by F2. Restriction and zero extension preserve and reflect comparisons modulo these ideals: a failure set differs from its restricted version only inside $S\in I$. Bounds on $A'$ therefore extend to bounds on $A$. We have $\min A'>\tau^{+3}$, $A'$ infinite and $|A'|\le\tau$. If $I'$ were improper, $A'=A\setminus S\in I$ would imply $A\in I$, impossible. It remains to bound families on this proper reduced support. [step 1.1, F1, F2, F6]

3.1 Keep $I'$ fixed and prove, by induction on cardinals $\rho<\lambda$, that every family $H\subseteq\prod A'$ of size $\rho$ has a bound. This induction is valid because a nonempty set of failed cardinal sizes below $\lambda$ would have a least member. If $\rho<\min A'$, the pointwise formula $b(a)=\sup_{f\in H}(f(a)+1)$ is below every $a$ by F6 and is a strict bound. If $\rho$ is singular and all smaller sizes are bounded, enumerate $H=(h_\xi)_{\xi<\rho}$ by AC and fix cofinal indices $(\gamma_j)_{j<\operatorname{cf}(\rho)}$ in $\rho$. Each subfamily with $\xi<\gamma_j$ has a bound by induction. AC chooses these bounds simultaneously; the family of bounds has size at most $\operatorname{cf}(\rho)<\rho$, so induction bounds it too. For each $h_\xi$ choose $j$ with $\xi<\gamma_j$; composing its two weak comparisons gives a common weak bound for $H$, and a coordinate successor gives a strict bound. [step 2.1, F1, F6, A1]

4.1 It remains to consider regular $\rho\ge\min A'>\tau^{+3}$. The induction assumption makes the product $\rho$-directed. Put $\kappa=\tau^+$, regular by F7 and uncountable because $\tau$ is infinite. Then $\kappa^{++}=\tau^{+3}<\rho$, $|A'|\le\tau<\kappa$, and $\{a\in A':a\le\kappa^{++}\}=\varnothing\in I'$. Apply F3 to an enumeration of $H$, obtaining a strict $\rho$-chain $(f_\xi)$ with each enumerated member pointwise below $f_{\xi+1}$ and with $(*)_\kappa$. Set $\tau'=|A'|$. Restrict those strong subsequences to their first $(\tau')^+$ terms; F7 makes that cardinal regular and $(\tau')^+\le\tau^+=\kappa<\rho$. F4 gives the $(\tau')^+$ projection property, and F5 gives a positive limit-valued exact bound $h$. Cap it pointwise at the coordinate identity, writing $h'(a)=\min\{h(a),a\}$. This is still an upper bound since both entries of the minimum are upper bounds. It is exact because $g<_{I'}h'$ implies $g<_{I'}h$, which is strictly below some $f_\xi$ by exactness. Also $h'$ is positive and limit-valued. Replace $h$ by $h'$, so now $h(a)\le a$ everywhere. [step 3.1, F3, F4, F5, F7, A1]

5.1 Put $B=\{a\in A':h(a)=a\}$. If $B\notin I'$, F2 gives an ultrafilter $D$ on $A'$ containing $B$, of cofinality at least $\lambda$, and containing $(I')^*$. Let $J=\{X\subseteq A':A'\setminus X\in D\}$, a larger proper ideal; comparison modulo $J$ is comparison modulo $D$. F5 transfers exactness of $h$ to $J$. In the linear order $\prod A'/D$, the $\rho<\lambda$ chain cannot be cofinal, by its cofinality lower bound, so a point witnessing noncofinality strictly bounds the entire chain. Represent it by $t\in\prod A'$. On $B\in D$, $t(a)<a=h(a)$, hence $t<_Dh$. Exactness modulo $D$ then gives $t<_Df_\xi$ for some $\xi$, contradicting that $t$ bounds every chain term. Therefore $B\in I'$. Reset $h$ to zero on $B$. The result belongs to $\prod A'$ because $h(a)<a$ off $B$, and it remains an upper bound modulo $I'$. Since each member of $H$ is below a chain term, it bounds $H$. This closes the regular case of the induction. Steps 1.1–3.1 now give directedness for every cutoff, including singular $\lambda$, after extension to $A$. [step 1.1, step 2.1, step 3.1, step 4.1, F1, F2, F5]

6.1 Write $\nu=\operatorname{cf}(\prod A/D)$. If $X\in D\cap J_{<\lambda}[A]$, F2 gives $\nu<\lambda$. Conversely, suppose $D$ avoids $J_{<\lambda}[A]$ and $\nu<\lambda$. AC selects representatives of a cofinal family of $\nu$ quotient classes. The directedness just proved gives these representatives a strict upper bound modulo the proper ideal $J_{<\lambda}[A]$, hence modulo $D$: the complement of every ideal-small set belongs to $D$, since an ultrafilter contains either a set or its complement. A strict bound cannot bound a cofinal family in a linear order without a last element (F1). This contradiction proves $\nu\ge\lambda$ when the ideal is avoided, and establishes both directions of the first equivalence. Apply it also at $\lambda^+$: avoidance at $\lambda$ means $\nu\ge\lambda$, and meeting at $\lambda^+$ means $\nu<\lambda^+$. Since $\nu$ is a cardinal, these two inequalities hold exactly when $\nu=\lambda$. This proves both directions of the second equivalence. If $\lambda$ is finite or singular, $\nu=\lambda$ is impossible because F1 makes $\nu$ infinite regular, and the equivalent right side is correspondingly impossible. QED. [step 5.1, F1, F2, F8, A1]
