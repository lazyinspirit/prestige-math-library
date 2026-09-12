---
id: thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals
kind: theorem
title: Progressive pcf has a maximum and continuous cutoff ideals
status: published
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-lemma]
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
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 3.6, Corollary 3.7 and Exercise 3.8, p. 34"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Every nonempty progressive set $A$ of infinite regular cardinals has a largest possible cofinality $M=\max\operatorname{pcf}(A)$, and

$$|\operatorname{pcf}(A)|\le 2^{|A|}.$$

For every nonzero cardinal $\lambda$,

$$J_{<\lambda}[A]=\bigcup_{\theta<\lambda,\ \theta\text{ a cardinal}}J_{\le\theta}[A].$$

For every nonzero limit cardinal $\lambda$ one also has $J_{<\lambda}[A]=\bigcup_{\theta<\lambda,\ \theta\text{ a cardinal}}J_{<\theta}[A]$. The maximum assertion excludes $A=\varnothing$; for that support PCF is empty, the cardinal bound and both stated positive-cutoff identities remain valid. At $\lambda=0$ either displayed union is empty whereas $J_{<0}[A]=\{\varnothing\}$, so no zero-cutoff union identity is asserted.

## Facts & Assumptions

**Given:** AC and a nonempty progressive $A$, until the empty-support clause is treated. All ideal cutoffs below are cardinal cutoffs.

[F1] PCF is a set of infinite regular cardinals, contains $A$, is monotone, and equals $A$ for finite $A$ ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] $J_{<\lambda}[A]$ is increasing with $\lambda$, is proper for $\lambda\in\operatorname{pcf}(A)$, and consists of $X$ with $\operatorname{pcf}(X)\subseteq\lambda$; $J_{\le\lambda}=J_{<\lambda^+}$ ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] An ultrafilter has cofinality at least $\lambda$ exactly when it avoids $J_{<\lambda}$, and has cofinality equal to $\lambda$ exactly when it avoids $J_{<\lambda}$ and meets $J_{\le\lambda}$ ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F4] Under AC every proper filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]).

[F5] Injections of well-orderable sets give cardinal inequalities ([[lem-cardinal-arithmetic-basic-laws]], (a)).

[A1] AC gives simultaneous choices from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 Put $P=\operatorname{pcf}(A)$, a nonempty set by F1, and $I=\bigcup_{\lambda\in P}J_{<\lambda}[A]$. This is an ideal: it contains the empty set because $P\ne\varnothing$; it is downward closed by F2; and if two members lie in the ideals with cutoffs $\lambda,\mu\in P$, both lie in the ideal with the larger of those two cutoffs, which also contains their union. It is proper because every constituent omits $A$. Its dual $I^*=\{A\setminus X:X\in I\}$ contains $A$, omits the empty set and is upward closed and closed under finite intersections, by complementing the ideal axioms. It is therefore a proper filter. F4 supplies an ultrafilter $D\supseteq I^*$. This $D$ avoids $I$, since containing both $X$ and its complement would put the empty set in $D$. [F1, F2, F4]

1.2 For each $\lambda\in P$ there is an ultrafilter of cofinality $\lambda$, and F3 supplies $X_\lambda\in J_{\le\lambda}[A]\setminus J_{<\lambda}[A]$. The corresponding nonempty witness sets lie in $\mathcal P(A)$; AC selects $X_\lambda$ simultaneously. If $\lambda<\mu$ in $P$, every member of $\operatorname{pcf}(X_\lambda)$ is at most $\lambda<\mu$, so $X_\lambda\in J_{<\mu}[A]$, whereas $X_\mu\notin J_{<\mu}[A]$. Thus $X_\lambda\ne X_\mu$. This injection $P\to\mathcal P(A)$ gives $|P|\le|\mathcal P(A)|=2^{|A|}$ by F5: subsets correspond bijectively to their characteristic functions, and a bijection $|A|\to A$ transports these to binary functions on $|A|$. [F1, F2, F3, F5, A1]

2.1 Put $M=\operatorname{cf}(\prod A/D)\in P$ by F1. For each $\lambda\in P$, step 1.1 shows that $D$ avoids $J_{<\lambda}$; hence $M\ge\lambda$ by F3. Since $M$ itself belongs to $P$, it is its maximum. In particular the maximum is infinite regular, not merely a supremum outside PCF. This proof applies to every nonempty progressive subset $X\subseteq A$, since $|X|\le|A|<\min A\le\min X$; the first inequality follows from its inclusion by F5. [step 1.1, F1, F3, F5]

3.1 Fix $\lambda>0$. If nonempty $X\in J_{<\lambda}[A]$, step 2.1 applied to $X$ gives the cardinal $\theta=\max\operatorname{pcf}(X)<\lambda$. Every possible cofinality of $X$ is at most $\theta$, hence $X\in J_{\le\theta}[A]$. For $X=\varnothing$, use $\theta=0<\lambda$ and $\operatorname{pcf}(\varnothing)=\varnothing$ from F1. Conversely, if $X\in J_{\le\theta}[A]$ with cardinal $\theta<\lambda$, every member of $\operatorname{pcf}(X)$ is at most $\theta$ and hence below $\lambda$; thus $X\in J_{<\lambda}[A]$. This proves both inclusions in the first identity for every nonzero cutoff, including one and singular cutoffs. [step 2.1, F1, F2]

4.1 If $\lambda$ is a nonzero limit cardinal, it is infinite. For nonempty $X\in J_{<\lambda}$ take $\mu=\max\operatorname{pcf}(X)<\lambda$ as in step 3.1; since $\lambda$ is not a successor, $\mu^+<\lambda$, and $X\in J_{<\mu^+}$. For the empty $X$ choose cutoff zero, which is below $\lambda$ and whose ideal contains the empty set. The reverse inclusion follows from monotonicity of the cutoff ideals, proving the second identity. If $A=\varnothing$, F1 gives empty PCF and every cutoff ideal equals $\{\varnothing\}$; each positive-cutoff union has an index (zero), so equals that same ideal, and $0\le2^0=1$ gives the cardinal bound. If $A$ is finite nonempty, F1 gives $P=A$, whose largest element is its maximum, in agreement with step 2.1. Finally at cutoff zero, F1 and singleton monotonicity show that no nonempty subset is null; hence $J_{<0}[A]=\{\varnothing\}$, while the union indexed below zero has no members. This verifies the stated exceptions. QED. [step 2.1, step 1.2, step 3.1, F1, F2]
