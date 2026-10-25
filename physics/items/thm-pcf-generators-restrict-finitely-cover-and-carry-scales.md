---
id: thm-pcf-generators-restrict-finitely-cover-and-carry-scales
kind: theorem
title: Pcf generators restrict, finitely cover, and carry scales
status: published
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals, thm-progressive-pcf-has-universally-cofinal-sequences, lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds, thm-pcf-cofinality-ideals-have-single-generators, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-lemma]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 4.4 and Claim 4.5 pp. 39–40; Lemma 4.10 through Lemma 4.14 and Exercise 4.15(1), pp. 42–44"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $A$ be a nonempty progressive set of infinite regular cardinals and fix generators $(B_\mu[A])_{\mu\in\operatorname{pcf}(A)}$. For cardinals outside $\operatorname{pcf}(A)$ put $B_\mu[A]=\varnothing$. Then:

1. If $A_0\subseteq A$ and $\lambda\in\operatorname{pcf}(A_0)$, then $A_0\cap B_\lambda[A]$ generates $J_{\le\lambda}[A_0]$ over $J_{<\lambda}[A_0]$, and equals any $B_\lambda[A_0]$ modulo the latter ideal.
2. Every $X\subseteq A$ is covered by finitely many $B_\mu[A]$ with $\mu\in\operatorname{pcf}(X)$. Consequently, for every cardinal $\lambda$, $J_{<\lambda}[A]$ consists exactly of subsets of finite unions of $B_\mu[A]$ with $\mu<\lambda$.
3. Every universal $\lambda$-sequence, for $\lambda\in\operatorname{pcf}(A)$, restricts to a strict cofinal scale on $\prod B_\lambda/J_{<\lambda}[B_\lambda]$, of true cofinality $\lambda$.
4. For a proper filter $F$ on $A$ and any cardinal $\lambda$, the following are equivalent: $\operatorname{tcf}(\prod A/F)=\lambda$; $B_\lambda\in F$ and $J_{<\lambda}[A]^*\subseteq F$; every ultrafilter extending $F$ has product cofinality $\lambda$. In particular an ultrafilter's product cofinality is the least generator index it contains.
5. The cofinality of $\prod A$ under everywhere comparison is $\max\operatorname{pcf}(A)$, whether cofinality is defined using weak or strict domination.

## Facts & Assumptions

**Given:** The set $A$, AC and generating sequence of the statement. A proper filter excludes the empty set; comparisons modulo a filter require the corresponding comparison set to belong to that filter.

[F1] PCF is monotone, ultrafilter support extension preserves product cofinality, and a strict cofinal chain has its stated regular true cofinality ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] Cofinality ideals restrict by intersection, and their membership criterion tests supported ultrafilters ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] The ultrafilter cutoff equivalences identify cofinality $\lambda$ with avoiding $J_{<\lambda}$ and meeting $J_{\le\lambda}$ ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F4] Every nonempty progressive subset has a maximum possible cofinality ([[thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals]]).

[F5] Universal sequences exist for every index in PCF ([[thm-progressive-pcf-has-universally-cofinal-sequences]]).

[F6] Generators are positive and unique modulo the smaller ideal; their criterion is larger-ideal membership and containment by every cofinality-$\lambda$ ultrafilter ([[thm-pcf-cofinality-ideals-have-single-generators]]).

[F7] Under AC every proper filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]).

[F8] Infinite cardinal multiplication and addition absorb smaller cardinals ([[cor-cardinal-absorption]]).

[A1] AC selects witnesses from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 For nonempty $A_0\subseteq A$, progressiveness persists because $|A_0|\le|A|<\min A\le\min A_0$. Fix $\lambda\in\operatorname{pcf}(A_0)$ and put $B=B_\lambda[A]$. F6 gives $B\in J_{\le\lambda}[A]$, so F2 gives $B\cap A_0\in J_{\le\lambda}[A_0]$. If $D_0$ on $A_0$ has cofinality $\lambda$, define $D=\{Y\subseteq A:Y\cap A_0\in D_0\}$. F1 gives the same cofinality on $A$, so F6 gives $B\in D$, which means $B\cap A_0\in D_0$. F6's criterion on the progressive support $A_0$ now proves generation; its uniqueness proves equality modulo $J_{<\lambda}[A_0]$ with every chosen generator there. [F1, F2, F6, given]

1.2 Fix $\lambda\in\operatorname{pcf}(A)$, $I=J_{<\lambda}[A]$, $B=B_\lambda[A]$ and any universal sequence $f$. F6 says $B\notin I$, so $I\restriction B$ is proper and the restricted chain is strict. Suppose some $h\in\prod B$ is not strictly below any restricted $f_\xi$ modulo this ideal. Then $T_\xi=\{a\in B:f_\xi(a)\le h(a)\}$ is positive for each $\xi$. For $\xi<\eta$, outside the $I$-small failure set of $f_\xi<f_\eta$ we have $T_\eta\subseteq T_\xi$. Hence for any finitely many indices with largest index $\eta$, their $T$-intersection contains $T_\eta$ minus a finite union of small sets and is positive. Its intersection with $B\setminus E$ for any $E\in I$ is still nonempty. Thus the family of these $T$ sets and the dual ideal on $B$ has the finite intersection property and generates a proper filter. By F7 extend it to an ultrafilter on $B$, and extend by support to $D$ on $A$ using F1. This $D$ contains $B$, avoids $I$, and meets $J_{\le\lambda}$ through $B$; F3 gives cofinality $\lambda$. Extend $h$ by zero off $B$ to a product function $\bar h$. Every $T_\xi\in D$ yields $f_\xi\le_D\bar h$. Universality gives $\eta$ with $\bar h+1\le_D f_\eta$, a contradiction to those two inequalities on their $D$-large intersection. Here $\bar h+1$ is a product member because every coordinate is an infinite cardinal. Thus every $h$ is strictly dominated by a restricted term. F1 gives true cofinality $\lambda$, proving clause 3. [F1, F2, F3, F6, F7]

1.3 Put $M=\max\operatorname{pcf}(A)$, which exists by F4 and is infinite by F1. Every everywhere-cofinal family maps to a cofinal family in an ultraproduct of cofinality $M$, so has cardinality at least $M$. For the opposite inequality, use A1 and F5 to choose a universal sequence for every $\mu\in\operatorname{pcf}(A)$. Its terms are indexed by pairs $(\mu,\xi)$ with $\mu\le M$ and $\xi<\mu$; there are at most $M$ such pairs by F8, since the set of cardinals at most $M$ injects into $M+1$, which has cardinality $M$. Let $H$ consist of all finite pointwise maxima of those terms, including the empty maximum $0$. For each finite length, F8 bounds the number of tuples by $M$; the countable union still has size at most $M$ by F8 and AC. All members of $H$ belong to the product and $H$ is closed under binary maxima. Given $g\in\prod A$, put $T_h=\{a:g(a)<h(a)\}$. The identity $T_{\max(h,k)}=T_h\cup T_k$ shows that if no $T_h=A$, the subsets of these sets form a proper ideal: its empty member comes from $h=0$, its union closure is the displayed identity, and it omits $A$. Extend its proper dual filter by F7 to $D$. For every $h\in H$, $A\setminus T_h\in D$, so $h\le_Dg$. But $\mu=\operatorname{cf}(\prod A/D)$ belongs to $\operatorname{pcf}(A)$ and its chosen universal sequence is contained in $H$; cofinality of that sequence dominates $g+1$ in $D$, contradicting its bound by $g$. Some $T_h=A$, proving strict everywhere domination. Weak cofinality has the same lower bound and strict cofinality the proved upper bound, so both equal $M$. [F1, F4, F5, F7, F8, A1]

2.1 The empty set is covered by the empty family. Suppose a nonempty $X\subseteq A$ failed clause 2, and choose such an $X$ with least $\mu=\max\operatorname{pcf}(X)$; F4 applies by progressiveness as in step 1.1. By that step, $X\cap B_\mu[A]$ generates the larger ideal on $X$. Since $X\in J_{\le\mu}[X]$, its remainder $Y=X\setminus B_\mu[A]$ belongs to $J_{<\mu}[X]$. If $Y$ is empty, $B_\mu$ alone covers $X$. Otherwise F4 gives $\nu=\max\operatorname{pcf}(Y)<\mu$ by F2. Minimality of the counterexample gives a finite cover of $Y$ by generators indexed in $\operatorname{pcf}(Y)\subseteq\operatorname{pcf}(X)$, using F1. Adjoining $B_\mu$ covers $X$, again a contradiction. Thus the finite-cover assertion holds. If $X\in J_{<\lambda}[A]$, each index in this cover is below $\lambda$ by F2. Conversely for $\mu<\lambda$ with $\mu\in\operatorname{pcf}(A)$, $B_\mu\in J_{\le\mu}[A]\subseteq J_{<\lambda}[A]$ by F2 and F6; indices outside PCF contribute empty sets. Downward and finite-union closure prove the converse ideal characterization, including $\lambda=0$. [step 1.1, F1, F2, F4, F6]

2.2 For any proper filter $F$, a set $S$ lies in every ultrafilter extension if and only if $S\in F$. One direction is inclusion. For the other, if $S\notin F$, each $T\in F$ meets $A\setminus S$, since $T\subseteq S$ would force $S\in F$. Finite intersections in $F$ show that adjoining $A\setminus S$ has the finite intersection property; its generated filter is proper and F7 extends it to an ultrafilter omitting $S$. Now if a strict cofinal regular $\lambda$-chain exists modulo $F$, it remains strict and cofinal in every ultrafilter extension. F1 therefore gives cofinality $\lambda$ in all of them. Conversely suppose every extension has that cofinality. There is at least one extension by F7, so $\lambda\in\operatorname{pcf}(A)$. By F6 each extension contains $B_\lambda$, and by F3 each avoids $J_{<\lambda}$, hence contains each member of its dual. Applying the just-proved intersection property separately to these sets gives $B_\lambda\in F$ and $J_{<\lambda}^*\subseteq F$. Finally suppose these latter conditions hold. They imply $B_\lambda\ne\varnothing$, hence $\lambda\in\operatorname{pcf}(A)$ by our empty-generator convention. By F5 and step 1.2 take a scale on $B_\lambda$ modulo the restricted ideal and extend each term by zero off $B_\lambda$. For every comparison its successful set contains $B_\lambda\setminus E$ for some $E\in J_{<\lambda}[A]$, which belongs to $F$. For any product function, restrict it to $B_\lambda$ and use the scale there; the same set calculation proves cofinality modulo $F$. Strictness and F1 give true cofinality $\lambda$. This proves all three implications and covers cardinals outside PCF as well. [step 1.2, F1, F3, F5, F6, F7]

3.1 For an ultrafilter $D$, set $\lambda=\operatorname{cf}(\prod A/D)$. F6 puts $B_\lambda\in D$ and F3 makes $D$ avoid $J_{<\lambda}$. If $\mu<\lambda$, then $B_\mu\in J_{<\lambda}$ by the ideal inclusion calculated in step 2.1 (or is empty), so $B_\mu\notin D$. Thus the least generator index in $D$ exists and equals $\lambda$, which also proves the converse characterization of that least index. Clauses 1, 3 and 5 were proved in steps 1.1–1.3, clause 2 in step 2.1 and the filter equivalence in step 2.2. QED. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, F3, F6]
