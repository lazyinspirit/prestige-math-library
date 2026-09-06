---
id: thm-slutsky-for-real-random-variables
kind: theorem
title: "Slutsky's theorem for real random variables"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convergence-in-distribution-for-real-random-variables, def-convergence-in-probability, def-random-element-and-real-random-variable]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.2, Exercises 3.2.12--3.2.14"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
---

## Statement

Let $(X_n)$ and $(Y_n)$ be real random variables on one probability space, and let $X$ be a real random variable (possibly on another space). If $X_n\Rightarrow X$ and $Y_n\to c$ in probability for $c\in\mathbb R$, then $X_n+Y_n\Rightarrow X+c$ and $X_nY_n\Rightarrow cX$. If $c\ne0$, define $Q_n=X_n/Y_n$ on $\{Y_n\ne0\}$ and give $Q_n$ any fixed value on $\{Y_n=0\}$. Then $Q_n\Rightarrow X/c$.

## Facts & Assumptions

**Given:** $(X_n)$ and $(Y_n)$ are on one probability space; $X_n\Rightarrow X$, $Y_n\to c$ in probability, and the displayed quotient convention when $c\ne0$.

[L1] Distributional convergence is CDF convergence at continuity points ([[def-convergence-in-distribution-for-real-random-variables]]).

[L2] Probability convergence makes $\mathbb P(|Y_n-c|>\delta)\to0$ for each $\delta>0$ ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 For real $U_n,V_n$ on a common probability space, if $U_n\Rightarrow U$ and $|V_n-U_n|\to0$ in probability, then $V_n\Rightarrow U$. Indeed, for every $\delta>0$, with $p_n=\mathbb P(|V_n-U_n|>\delta)$, $$F_{U_n}(t-\delta)-p_n\le F_{V_n}(t) \le F_{U_n}(t+\delta)+p_n.$$ At a continuity point $t$ of $F_U$, take $\delta\downarrow0$ through values for which both $t-\delta$ and $t+\delta$ are continuity points. These values exist because a CDF has at most countably many jumps (for each positive integer $k$, there are at most $k$ jumps larger than $1/k$). First let $n\to\infty$ for each such $\delta$, then let $\delta\downarrow0$; [L1] and [L2] give the assertion. [L1, L2]

1.2 The CDF definition [L1] gives both affine operations needed below.
First, $X_n+a\Rightarrow X+a$ because
$F_{X_n+a}(t)=F_{X_n}(t-a)$. It also gives
$aX_n\Rightarrow aX$ for every constant $a$: for $a>0$ use
$F_{aX_n}(t)=F_{X_n}(t/a)$; for $a<0$, use $F_{aX_n}(t)=1-F_{X_n}((t/a)-)$ and squeeze the left limit between $F_{X_n}(t/a-\delta)$ and $F_{X_n}(t/a)$, taking $\delta\downarrow0$ through continuity points $t/a-\delta$; and for
$a=0$ the claim is immediate. At continuity points of the transformed limit
CDF, the corresponding point of $F_X$ is a continuity point. [L1]

1.3 The sequence $(X_n)$ is bounded in probability: CDF convergence [L1] at two continuity points outside a sufficiently large interval makes $\limsup_n\mathbb P(|X_n|>M)$ arbitrarily small. Therefore $$\mathbb P(|X_n(Y_n-c)|>\varepsilon) \le\mathbb P(|X_n|>M)+\mathbb P(|Y_n-c|>\varepsilon/M)$$ shows $X_n(Y_n-c)\to0$ in probability. If $c\ne0$, on $|Y_n-c|<|c|/2$, $$\left|Q_n-X_n/c\right| \le\frac{2}{|c|^2}|X_n||Y_n-c|,$$ and the exceptional event $\{|Y_n-c|\ge|c|/2\}$ contains $\{Y_n=0\}$ and has probability at most $\mathbb P(|Y_n-c|>|c|/4)\to0$; the same boundedness argument gives $Q_n-X_n/c\to0$ in probability. [L1, L2]

2.1 Addition follows from step 1.1 with $U_n=X_n+c$ and $V_n=X_n+Y_n$: $U_n\Rightarrow X+c$ by step 1.2, while $|V_n-U_n|=|Y_n-c|\to0$ in probability by [L2]. [step 1.1, step 1.2, L2]

3.1 Apply step 1.1 to $U_n=cX_n$, $V_n=X_nY_n$, using step 1.2 and step 1.3, to obtain $X_nY_n\Rightarrow cX$. When $c\ne0$, apply it again to $U_n=X_n/c$, $V_n=Q_n$, to obtain $Q_n\Rightarrow X/c$. [step 1.1, step 1.2, step 1.3] ∎
