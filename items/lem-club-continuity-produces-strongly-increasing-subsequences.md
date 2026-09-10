---
id: lem-club-continuity-produces-strongly-increasing-subsequences
kind: lemma
title: Club continuity produces strongly increasing subsequences
status: draft
origin: pipeline
deps: [def-strong-increase-and-bounding-projections-for-countable-products, lem-uncountable-club-guessing-at-a-double-successor, thm-small-intersections-of-clubs, thm-cofinality-basics, thm-transfinite-recursion, def-axiom-of-choice, thm-regularity-of-the-alephs]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Lemma 2.19 pp. 21–23 and Lemma 2.7 pp. 14–15"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $I$ be any proper ideal on an infinite set $A$, let $\kappa$ be uncountable regular, and let $\lambda>\kappa^{++}$ be regular. Suppose $(f_\alpha)_{\alpha<\lambda}$ is a strictly $<_I$ increasing sequence of ordinal functions on $A$. Suppose also that for every $\delta<\lambda$ with $\operatorname{cf}(\delta)=\kappa^{++}$ there are a club $E_\delta\subseteq\delta$ and $\beta<\lambda$ such that

$$\sup_{\alpha\in E_\delta}f_\alpha<_I f_\beta,$$

where the supremum is pointwise. Then $(*)_\kappa$ holds: every unbounded $U\subseteq\lambda$ contains indices of order type $\kappa$ forming a strongly increasing subsequence. In particular this holds for countably many coordinates and the finite ideal. No completeness or singleton-membership assumption on $I$ is required.

## Facts & Assumptions

**Given:** The hypotheses in the statement and an arbitrary unbounded $U\subseteq\lambda$.

[F1] Strong increase has individual witnesses $Z_\alpha\in I$ with $f_\alpha(a)<f_\beta(a)$ outside $Z_\alpha\cup Z_\beta$ for $\alpha<\beta$; $(*)_\kappa$ requires this on an order-type-$\kappa$ subsequence of every unbounded set ([[def-strong-increase-and-bounding-projections-for-countable-products]]).

[F2] For $\theta=\kappa^{++}$ there are clubs $C_\eta\subseteq\eta$ of order type $\kappa$, indexed by $\eta\in E^\theta_\kappa$, such that every club of $\theta$ contains one $C_\eta$ ([[lem-uncountable-club-guessing-at-a-double-successor]]).

[F3] Two clubs in an ordinal of uncountable cofinality have club intersection ([[thm-small-intersections-of-clubs]]).

[F4] Cofinality is a lower bound for the cardinality of a cofinal subset, and is attained; subsets smaller than a regular cardinal are bounded ([[thm-cofinality-basics]], (c)–(d)).

[F5] A specified rule recurses on a well-order ([[thm-transfinite-recursion]]).

[F6] Under AC successor cardinals, including $\theta$, are regular ([[thm-regularity-of-the-alephs]], (b)).

[A1] AC supplies simultaneous witnesses when required ([[def-axiom-of-choice]]).

## Proof

1.1 Put $\theta=\kappa^{++}$ and fix the family in F2. Define a continuous strictly increasing $\xi:\theta\to\lambda$. Start with $\xi(0)=0$. At a nonzero limit take the supremum of previous values. At stage $i+1$, for every $\eta\in E^\theta_\kappa$ put $h_{\eta,i}(a)=\sup\{f_{\xi(j)}(a):j\in C_\eta\cap(i+1)\}$, with empty supremum zero. If some $\sigma<\lambda$ with $\sigma>\xi(i)$ satisfies $h_{\eta,i}<_If_\sigma$, record the least such $\sigma$; otherwise record $\xi(i)+1$. Choose $\xi(i+1)$ to be the least element of $U$ strictly above $\xi(i)$ and all recorded ordinals. There are at most $\theta<\lambda$ records, so F4 makes their supremum less than $\lambda$, and unboundedness of $U$ supplies that least point. Limit stages likewise remain below $\lambda$. F5 defines the recursion. Whenever a genuine bound was recorded, transitivity of $<_I$ gives $h_{\eta,i}<_If_{\xi(i+1)}$: outside the union of the two comparison-failure sets, the two strict ordinal inequalities compose. [F1, F2, F4, F5, A1]

2.1 Let $\delta=\sup_{i<\theta}\xi(i)$. F4 gives $\delta<\lambda$. The increasing cofinal enumeration shows $\operatorname{cf}(\delta)\le\theta$. If $B\subseteq\delta$ were cofinal of size less than $\theta$, send each $b\in B$ to the least $i$ with $b<\xi(i)$. These indices would be unbounded in $\theta$, contradicting its regularity from F6. Thus $\operatorname{cf}(\delta)=\theta$. The range $D$ of $\xi$ is club in $\delta$: continuity includes every nonzero limit point below $\delta$, and its supremum is $\delta$. By hypothesis choose $E_\delta$ and a bound $f_\beta$. F3 makes $D\cap E_\delta$ club in $\delta$; pulling back under the continuous enumeration gives a club $C=\{i<\theta:\xi(i)\in E_\delta\}$ in $\theta$. In detail unboundedness follows from that of $D\cap E_\delta$, and at a nonzero limit of indices in $C$, continuity of $\xi$ and closure of $E_\delta$ give membership in $C$. By F2 fix $\eta$ with $C_\eta\subseteq C$. [step 1.1, F2, F3, F4, F6]

3.1 Every prefix supremum $h_{\eta,i}$ now has a strict bound in the chain: it is pointwise at most $\sup_{\alpha\in E_\delta}f_\alpha<_If_\beta$, and a chain member of index greater than both $\beta$ and $\xi(i)$ is also a strict bound. Thus all its bound questions in step 1.1 were positive. If $i<j$ belong to $C_\eta$, then $i+1\le j$ and $h_{\eta,i}<_If_{\xi(i+1)}\le_If_{\xi(j)}$. The last comparison allows equality when $j=i+1$. Hence $h_{\eta,i}<_If_{\xi(j)}$ for all such pairs. [step 1.1, step 2.1, F1]

4.1 Enumerate $C_\eta$ continuously as $(c_\rho)_{\rho<\kappa}$. Its nonaccumulation points other than its first point are exactly $c_{\rho+1}$ for $\rho<\kappa$: at a nonzero limit the enumeration is continuous, whereas a successor has previous maximum $c_\rho$. Write $j_\rho=c_{\rho+1}$ and $t_\rho=f_{\xi(j_\rho)}$. Define $Z_\rho=\{a:h_{\eta,c_\rho}(a)\ge t_\rho(a)\}\in I$ by step 3.1. For $\rho<\sigma$, $j_\rho\le c_\sigma$, so $t_\rho\le h_{\eta,c_\sigma}$ pointwise, and therefore $t_\rho(a)<t_\sigma(a)$ whenever $a\notin Z_\sigma$. In particular $(t_\rho)_{\rho<\kappa}$ is strongly increasing, witnessed by $(Z_\rho)$. [step 3.1, F1]

5.1 To obtain indices in $U$, set $u_\rho=f_{\xi(j_\rho+1)}$. Its index belongs to $U$ by step 1.1, and these indices strictly increase with $\rho$. Since $j_\rho<j_\rho+1\le j_{\rho+1}$, the chain gives $t_\rho<_Iu_\rho\le_It_{\rho+1}$. Put $P_\rho=\{a:t_\rho(a)\ge u_\rho(a)\}$ and $Q_\rho=\{a:u_\rho(a)>t_{\rho+1}(a)\}$, both in $I$, and set $W_\rho=Z_\rho\cup Z_{\rho+1}\cup P_\rho\cup Q_\rho$. For $\rho<\sigma$ and $a\notin W_\rho\cup W_\sigma$, one has $u_\rho(a)\le t_{\rho+1}(a)\le t_\sigma(a)<u_\sigma(a)$. The middle inequality is equality if $\sigma=\rho+1$, and is strict by step 4.1 otherwise. Thus the $u_\rho$ are strongly increasing with witnesses $W_\rho\in I$. They form an order-type-$\kappa$ subsequence indexed in the arbitrary $U$, proving $(*)_\kappa$. Only finite unions of ideal sets were used; the countable finite-ideal specialization follows by taking those sets to be finite. QED. [step 1.1, step 4.1, F1]
