---
id: lem-lc-fine-measure-coordinate-family
kind: lemma
title: Fine-measure coordinates avoiding small supports
status: published
origin: pipeline
deps: [thm-lc-strong-compactness-fine-measures-and-logic, def-lc-fine-ultrafilters-strong-compactness-and-supercompactness, def-lc-complete-ultrafilters-and-measurable-cardinals, thm-ordinal-arithmetic-monotonicity, thm-hartogs, thm-mostowski-collapse]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Bagaria and da Silva (2023), Lemma 2.8 pp.6–7 and support calculation in Theorem 2.10 pp.9–10; strong-compactness specialization
      url: https://diposit.ub.edu/dspace/bitstream/2445/214429/1/847279.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

In ZFC let $\kappa$ be strongly compact and $\lambda\ge\kappa$ a cardinal. There exist a set $I$, a nonprincipal $\kappa$-complete ultrafilter $U$ on $I$, and functions $f_\alpha:I\to\kappa$ for $\alpha<\lambda$ such that

$$\{x:f_\alpha(x)<f_\beta(x)\}\in U\quad(\alpha<\beta<\lambda),\qquad \{x:f_\alpha(x)>\delta\}\in U\quad(\alpha<\lambda,\ \delta<\kappa).$$

Consequently, for every finite $F\subseteq\lambda$ and every $S\subseteq\kappa$ with $|S|<\kappa$, the following set belongs to $U$:

$$H(F,S)=\{x\in I:f_\alpha(x)\ne f_\beta(x)\text{ for distinct }\alpha,\beta\in F,\ \text{and }f_\alpha(x)\notin S\text{ for all }\alpha\in F\}.$$

The construction takes $I=P_\kappa(\rho)$ for a cardinal $\rho>\kappa+\lambda$, with ordinal addition in this bound. It does not require normality of $U$ or a cofinality restriction on $\lambda$.

## Facts & Assumptions

**Given:** ZFC, a strongly compact cardinal $\kappa$ (regular uncountable by convention), and a cardinal $\lambda\ge\kappa$. The asserted measure is an ultrafilter in the ground universe; no real-valued measure extension is asserted.

[F1] Strong compactness gives a fine $\kappa$-complete ultrafilter on every $P_\kappa(\rho)$ for cardinal $\rho\ge\kappa$. ([[thm-lc-strong-compactness-fine-measures-and-logic]])

[F2] $P_\kappa(\rho)$ consists of the subsets of $\rho$ of size below $\kappa$, and fineness puts each point cone in $U$. ([[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]])

[F3] Completeness applies to every intersection indexed by an ordinal below $\kappa$; its empty intersection is $I$. ([[def-lc-complete-ultrafilters-and-measurable-cardinals]])

[F4] Ordinal addition is strictly increasing in its right argument and $\kappa\le\kappa+\alpha$. ([[thm-ordinal-arithmetic-monotonicity]])

[F5] The Hartogs number is the least ordinal not injecting into a specified set. ([[thm-hartogs]])

[F6] Every well-order has a unique ordinal order type and a unique order isomorphism onto that ordinal. ([[thm-mostowski-collapse]])

## Proof

1.1 Put $\theta=\kappa+\lambda$ and let $\rho$ be its Hartogs number. Then $\rho>\theta$: otherwise inclusion would inject $\rho$ into $\theta$. Also $\rho$ is an initial ordinal. A bijection from $\rho$ to some $\eta<\rho$, followed by an injection of $\eta$ into $\theta$ supplied by minimality of $\rho$, would contradict its defining property. Thus $\rho$ is a cardinal above $\kappa$. Set $I=P_\kappa(\rho)$ and take a fine $\kappa$-complete ultrafilter $U$ by F1. It is nonprincipal: for each $x\in I$ there is $\xi\in\rho\setminus x$, since $|x|<\kappa\le\rho$; its point cone is in $U$ and omits $x$, so $\{x\}\notin U$. [F1, F2, F4, F5]

2.1 For $\alpha<\lambda$ put $t_\alpha=\kappa+\alpha$ and define $f_\alpha(x)=\operatorname{otp}(x\cap t_\alpha)$, using the inherited ordinal order. F4 gives $\kappa\le t_\alpha<\theta<\rho$ and $t_\alpha<t_\beta$ for $\alpha<\beta$. F6 makes each value unique; Separation and Replacement give all functions and their indexed family. Every value is below $\kappa$: the order isomorphism gives it the cardinality of $x\cap t_\alpha$, which is below $\kappa$; an ordinal at least the initial ordinal $\kappa$ cannot have that cardinality. For the empty index $x=\varnothing$ every value is zero. [F2, F4, F6, step 1.1]

3.1 If $\alpha<\beta<\lambda$ and $t_\alpha\in x$, then $x\cap t_\alpha$ is exactly the proper initial segment below the element $t_\alpha$ of the well-order $x\cap t_\beta$. Under the order isomorphism of F6 its order type is therefore an ordinal strictly below the order type of $x\cap t_\beta$. The point cone at $t_\alpha$ belongs to $U$ by fineness, so upward closure gives $\{x:f_\alpha(x)<f_\beta(x)\}\in U$. [F2, F6, step 2.1]

3.2 Fix $\delta<\kappa$. Intersect the point cones at all $\xi\le\delta$. This is a $U$-member by F3, since $\delta+1<\kappa$. For finite $\delta$ this follows from uncountability. For infinite $\delta$, the new last point can be sent to zero, each natural number shifted to its successor, and each ordinal in $[\omega,\delta)$ fixed; this injects $\delta+1$ into $\delta$, so $\delta+1$ cannot reach the initial ordinal $\kappa$. At an index in this intersection, $\delta+1\subseteq x\cap t_\alpha$, because $t_\alpha\ge\kappa$. In fact $\delta+1$ is an initial segment there. Restricting the order isomorphism of F6 shows $f_\alpha(x)\ge\delta+1>\delta$. Upward closure proves the second displayed assertion, including $\delta=0$ and $\alpha=0$. [F2, F3, F6, step 2.1]

4.1 For fixed $\alpha<\lambda$, intersect $\{x:f_\alpha(x)>\delta\}$ over $\delta\in S$. The inherited ordinal order on $S\subseteq\kappa$ has order type below $\kappa$, by the same initial-cardinal argument as in step 2.1, so F3 applies without choosing an enumeration. The intersection lies in $U$ and is contained in $\{x:f_\alpha(x)\notin S\}$. For finite $F$, intersect these avoidance sets and the finitely many comparison sets from step 3.1 for ordered pairs $\alpha<\beta$ in $F$. This $U$-member is contained in $H(F,S)$, proving the conclusion by upward closure. If $F$ is empty then $H(F,S)=I$; if $S$ is empty its avoidance intersections are $I$; a singleton $F$ requires no pair comparisons. Neither this construction nor its proof uses normality or any restriction on $\operatorname{cf}(\lambda)$. [F3, F6, step 2.1, step 3.1, step 3.2] ∎
