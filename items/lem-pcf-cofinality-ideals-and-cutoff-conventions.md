---
id: lem-pcf-cofinality-ideals-and-cutoff-conventions
kind: lemma
title: Pcf cofinality ideals and cutoff conventions
status: draft
origin: pipeline
deps: [thm-ultrafilter-characterisation, lem-progressive-products-and-true-cofinality-transfers, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
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
    - title: "Abraham and Magidor, Cardinal Arithmetic, §3.1 opening definitions and dual-filter identity, p. 32"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. For a set $A$ of infinite regular cardinals and a cardinal $\lambda$, put

$$J_{<\lambda}[A]=\{E\subseteq A:\operatorname{pcf}(E)\subseteq\lambda\},\qquad J_{\le\lambda}[A]=J_{<\lambda^+}[A].$$

The first condition means that every member of $\operatorname{pcf}(E)$ is strictly less than $\lambda$. These are possibly improper ideals, increasing with the cutoff, and for $B\subseteq A$ one has $J_{<\lambda}[B]=J_{<\lambda}[A]\cap\mathcal P(B)$. The singleton $\{a\}$ belongs to $J_{<\lambda}[A]$ exactly when $a<\lambda$. If $\lambda\in\operatorname{pcf}(A)$, then $J_{<\lambda}[A]$ is proper.

Membership of $E$ in $J_{<\lambda}[A]$ is equivalent to every ultrafilter $D$ on $A$ containing $E$ having $\operatorname{cf}(\prod A/D)<\lambda$. With $J^*=\{A\setminus E:E\in J\}$, one has

$$J_{<\lambda}[A]^*=\bigcap\{D:D\text{ is an ultrafilter on }A,\ \operatorname{cf}(\prod A/D)\ge\lambda\}.$$

The intersection of an empty family here is taken inside $\mathcal P(A)$, hence equals $\mathcal P(A)$; in that case the dual is an improper filter family. No assertion is made here that a fixed ultrafilter of cofinality below $\lambda$ must meet $J_{<\lambda}[A]$; that later cutoff theorem needs directedness.

## Facts & Assumptions

**Given:** AC, a set $A$ of infinite regular cardinals, a cardinal $\lambda$, and the displayed definitions.

[F1] The PCF transfer lemma proves the empty and singleton values, monotonicity, and finite-union preservation ([[lem-progressive-products-and-true-cofinality-transfers]], Statement).

[F2] An ultrafilter contains exactly one of each set and its complement ([[thm-ultrafilter-characterisation]]).

[F3] Restriction to a support in an ultrafilter and extension from that support preserve the ultraproduct order and cofinality ([[lem-progressive-products-and-true-cofinality-transfers]], Statement, support-restriction clause).

[A1] AC is assumed, as in the PCF transfer lemma ([[def-axiom-of-choice]]).

## Proof

1.1 Since $\operatorname{pcf}(\varnothing)=\varnothing$, the empty set belongs to $J_{<\lambda}[A]$. If $E$ belongs and $H\subseteq E$, monotonicity gives $\operatorname{pcf}(H)\subseteq\operatorname{pcf}(E)\subseteq\lambda$. If $E,H$ both belong, finite-union preservation gives $\operatorname{pcf}(E\cup H)=\operatorname{pcf}(E)\cup\operatorname{pcf}(H)\subseteq\lambda$. Thus it is an ideal; the same argument with $\lambda^+$ gives $J_{\le\lambda}$. Larger cutoffs enlarge the ideals because the corresponding ordinal intervals are nested. For $E\subseteq B\subseteq A$, the statement $\operatorname{pcf}(E)\subseteq\lambda$ does not depend on the ambient set, proving the restriction identity in both directions. [F1, A1, given]

1.2 By the singleton calculation, $\operatorname{pcf}(\{a\})=\{a\}$, so its membership is exactly $a<\lambda$, including failure at the endpoint $a=\lambda$. If $\lambda\in\operatorname{pcf}(A)$, then $\operatorname{pcf}(A)\not\subseteq\lambda$, so $A\notin J_{<\lambda}[A]$. If $A$ is empty, its only ideal here is $\{\varnothing\}$, improper on the empty support. For nonempty $A$ and $\lambda=0$ or $1$, the singleton calculation and monotonicity show that only the empty subset is null, since all coordinates are infinite. For a finite $A$, the same calculation gives exactly $J_{<\lambda}[A]=\mathcal P(\{a\in A:a<\lambda\})$. [F1, given, algebra]

2.1 Suppose first that $E\in J_{<\lambda}[A]$ and $D$ is an ultrafilter on $A$ containing $E$. Restrict $D$ to $E$; by the support isomorphism its product cofinality is unchanged and belongs to $\operatorname{pcf}(E)$, hence is below $\lambda$. Conversely, if every such $D$ has cofinality below $\lambda$, any ultrafilter on $E$ extends to one on $A$ supported on $E$ with the same cofinality. Thus every member of $\operatorname{pcf}(E)$ is below $\lambda$, proving membership. For $E=\varnothing$ both the universal ultrafilter assertions are vacuous and membership was proved in step 1.1. [F3, step 1.1]

3.1 A set $H\subseteq A$ belongs to every ultrafilter of cofinality at least $\lambda$ exactly when none of those ultrafilters contains $A\setminus H$, by the complementary-pair law in F2. By step 2.1 this is exactly $A\setminus H\in J_{<\lambda}[A]$, or $H\in J_{<\lambda}[A]^*$. This proves both inclusions in the dual identity. If there are no high-cofinality ultrafilters, step 2.1 with $E=A$ puts $A$ in the ideal, so the ideal and its dual are both $\mathcal P(A)$; the empty-intersection convention gives the same result. No witnesses are chosen in these computations beyond the AC-dependent facts already proved in F1. QED. [F2, step 2.1]
