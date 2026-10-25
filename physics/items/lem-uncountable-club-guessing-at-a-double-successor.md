---
id: lem-uncountable-club-guessing-at-a-double-successor
kind: lemma
title: Club guessing at the double successor of an uncountable regular cardinal
status: published
origin: pipeline
deps: [thm-small-intersections-of-clubs, thm-regular-cofinality-strata-are-stationary, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 2.17, uncountable case, pp. 20–21"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $\kappa$ be an uncountable regular cardinal and $\theta=\kappa^{++}$. There is a sequence $(C_\delta)_{\delta\in E^\theta_\kappa}$ such that every $C_\delta$ is a club of $\delta$ of order type $\kappa$, and for every club $D\subseteq\theta$ there is $\delta\in E^\theta_\kappa$ with $C_\delta\subseteq D$. Here $E^\theta_\kappa=\{\delta<\theta:\operatorname{cf}(\delta)=\kappa\}$; clubs contain their nonzero limit points below their ambient ordinal.

## Facts & Assumptions

**Given:** AC and the cardinals in the statement. For a club $E$ write $E'=\{\delta<\theta:\delta\text{ is a nonzero limit and }\sup(E\cap\delta)=\delta\}$.

[F1] Fewer than $\operatorname{cf}(\rho)$ clubs of an ordinal $\rho$ of uncountable cofinality intersect to a club, including the empty intersection $\rho$ ([[thm-small-intersections-of-clubs]]).

[F2] $E^\theta_\kappa$ is stationary when $\kappa$ is infinite regular and $\kappa<\operatorname{cf}(\theta)$ ([[thm-regular-cofinality-strata-are-stationary]]).

[F3] Cofinal subsets of a limit ordinal have cardinality at least its cofinality, and that cardinality is attained; a set of fewer than $\operatorname{cf}(\rho)$ ordinals below $\rho$ is therefore bounded ([[thm-cofinality-basics]], (c)–(d)).

[F4] Under AC successor cardinals are regular ([[thm-regularity-of-the-alephs]], (b)).

[F5] Specified rules recurse on a well-order ([[thm-transfinite-recursion]]).

[A1] AC selects one member from each nonempty set of witnesses ([[def-axiom-of-choice]]).

## Proof

1.1 Put $S=E^\theta_\kappa$. Both $\kappa^+$ and $\theta$ are regular by F4, and $S$ is stationary by F2 since $\kappa<\theta=\operatorname{cf}(\theta)$. For each $\delta\in S$, F3 supplies a cofinal subset of size $\kappa$. Enumerate it by $\kappa$ and build a continuous strictly increasing cofinal sequence in $\delta$: at successors exceed the previous value and the next enumerated value, and at nonzero limits take the supremum. Each intermediate supremum is below $\delta$ by F3. F5 supplies this recursion, and its range $C^0_\delta$ is closed, cofinal and has order type $\kappa$. AC selects these witnesses simultaneously for the set $S$. [F2, F3, F4, F5, A1]

2.1 For every club $E\subseteq\theta$, $E'$ is club and contained in $E$. Indeed, above any $\gamma<\theta$ take a strictly increasing countable sequence in $E$ by repeatedly taking the least larger point. Its supremum is below $\theta$ by F3 and lies in $E'$ above $\gamma$. If nonzero limit $\eta<\theta$ is an accumulation point of $E'$, every $\gamma<\eta$ has some $\zeta\in E'\cap\eta$ above it and then a point of $E\cap\zeta$ above $\gamma$. Thus $\sup(E\cap\eta)=\eta$, so $\eta\in E'$. Closure of $E$ gives $E'\subseteq E$. For $\delta\in S\cap E'$, both $C^0_\delta$ and $E\cap\delta$ are clubs of $\delta$. Their intersection is club by F1, since $2<\kappa=\operatorname{cf}(\delta)$. Its order type is at most $\kappa$ as a subset of $C^0_\delta$, and its cardinality is at least $\kappa$ by F3; hence its order type is exactly $\kappa$. [step 1.1, F1, F3]

3.1 Consider the assertion that some club $E\subseteq\theta$ has the following property: every club $D\subseteq\theta$ contains $C^0_\delta\cap E$ for some $\delta\in S\cap E'$. If it failed, for each club $E$ the set of clubs $D$ satisfying $C^0_\delta\cap E\not\subseteq D$ for all $\delta\in S\cap E'$ would be nonempty. These witness sets are subsets of $\mathcal P(\theta)$; A1 fixes a choice $D(E)$ on this set-indexed family. By F5 define $E_0=\theta$, $E_{\alpha+1}=(E_\alpha\cap D(E_\alpha))'$, and $E_\gamma=\bigcap_{\alpha<\gamma}E_\alpha$ at nonzero limits, for $\alpha,\gamma<\kappa^+$. Each is club by step 2.1 and F1, since all intersection lengths are below $\theta$. The sequence decreases by inclusion, and $E_* =\bigcap_{\alpha<\kappa^+}E_\alpha$ is also club because $\kappa^+<\operatorname{cf}(\theta)$. [step 1.1, step 2.1, F1, F5, A1]

4.1 F2 gives $\delta\in S\cap E_*$. For every $x\in C^0_\delta\setminus E_*$, let $r(x)<\kappa^+$ be the least stage with $x\notin E_{r(x)}$. There are at most $\kappa$ such stages because $|C^0_\delta|=\kappa$. F3 and the regularity of $\kappa^+$ from F4 give an $\alpha<\kappa^+$ at least all of them; if there are none, take $\alpha=0$. Then $C^0_\delta\cap E_\alpha=C^0_\delta\cap E_* =C^0_\delta\cap E_{\alpha+1}$. But $\delta\in E_{\alpha+1}\subseteq E_\alpha'$, so the choice of $D(E_\alpha)$ gives an $x\in C^0_\delta\cap E_\alpha$ outside $D(E_\alpha)$. Since $E_{\alpha+1}\subseteq D(E_\alpha)$, that $x$ is outside $E_{\alpha+1}$, contradicting the equality. Consequently the assertion of step 3.1 holds. [step 1.1, step 2.1, step 3.1, F2, F3, F4]

5.1 Take a successful $E$ and set $C_\delta=C^0_\delta\cap E$ for $\delta\in S\cap E'$, and $C_\delta=C^0_\delta$ for the remaining $\delta\in S$. Each is club of order type $\kappa$ by steps 1.1–2.1. For any club $D\subseteq\theta$, the success property supplies $\delta\in S\cap E'$ with $C_\delta=C^0_\delta\cap E\subseteq D$. This is the required sequence on all of $S$. QED. [step 1.1, step 2.1, step 3.1, step 4.1]
