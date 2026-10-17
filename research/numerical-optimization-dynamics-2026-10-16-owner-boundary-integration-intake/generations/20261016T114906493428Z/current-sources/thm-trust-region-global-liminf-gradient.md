---
id: thm-trust-region-global-liminf-gradient
kind: theorem
title: "Cauchy-decrease trust-region iterations have liminf gradient norm zero"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-trust-region-method
  - lem-trust-region-ratio-accuracy-for-small-radii
  - lem-trust-region-cauchy-decrease
  - lem-geometric-sequence-null
  - def-limsup-liminf
  - lem-extended-reals-complete
  - def-upper-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.2, Theorem 4.2 and proof, printed pp. 77–80 / PDF pp. 97–100: trust-region global convergence to a zero-gradient subsequence."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 20–22: ratio accuracy, radius lower bounds, and the liminf-gradient argument."
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ be $C^1$, bounded below, and have an
$L$-Lipschitz gradient on every trial segment. At every iteration let $B_k$
be symmetric with $\|B_k\|_2\le M_B$ for a fixed $M_B\ge0$. Run an infinite
trust-region process of [[alg-trust-region-method]] with no positive target
and no outer cap, fixed $0<\eta_1<\eta_2<1$,
$0<\gamma_{dec}<1<\gamma_{inc}$, $0<\theta_C\le1$, and
$0<\Delta_0\le\Delta_{max}$. If it does not terminate at a stationary
point, then
$$\liminf_{k\to\infty}\|\nabla f(x_k)\|_2=0.$$

## Facts & Assumptions

**Given:** The smoothness, boundedness, and update assumptions of the
Statement and the algorithm's Cauchy-decrease safeguard.

[F1] [[alg-trust-region-method]]: every selected step has predicted
reduction at least $\theta_C$ times the Cauchy decrease; when
$\Delta_k\le\|g_k\|_2/(2M_B)$, the algorithm uses the Cauchy step. A rejected
trial multiplies the radius by $\gamma_{dec}$; an accepted trial either
keeps it or increases it, capped by $\Delta_{max}$.

[F2] [[lem-trust-region-cauchy-decrease]]: for $g_k\ne0$,
$$m_k(0)-m_k(p_C)\ge\tfrac12\|g_k\|_2 \min\{\Delta_k,\|g_k\|_2/\|B_k\|_2\},$$
with the zero-matrix convention stated there.

[F3] [[lem-trust-region-ratio-accuracy-for-small-radii]]: if
$\|g_k\|_2\ge\varepsilon>0$ and
$$\Delta_k\le\min\left\{\frac{\varepsilon}{2M_B}, \frac{\theta_C(1-\eta_2)\varepsilon}{2(L+M_B)}\right\},$$
then $\rho_k\ge\eta_2$ for a step with the stated Cauchy-decrease fraction.
Zero denominators mean $+\infty$.

[F4] [[lem-geometric-sequence-null]]: if $0<q<1$, then $q^j\to0$ as
$j\to\infty$.

[F5] [[def-limsup-liminf]]: $\liminf_k a_k=\sup_n i_n$, where
$i_n:=\inf\{a_k:k\ge n\}$.

[F6] [[lem-extended-reals-complete]]: every tail has a greatest lower bound
in $\overline{\mathbb R}$; it lies below every tail element and above every
other lower bound.

[F7] [[def-upper-bound]]: if every element of a set is at most $b$, then $b$
is an upper bound and its supremum is at most $b$.

[A1] $f$ has a finite lower bound on $\mathbb R^n$.

[A2] Every $B_k$ is symmetric and obeys $\|B_k\|_2\le M_B$.

[A3] $\nabla f$ is $L$-Lipschitz on each generated trial segment.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix any $\varepsilon>0$ and suppose that $\|g_k\|_2\ge\varepsilon$ for every $k\ge K$. Put $$d_\varepsilon:=\min\left\{\frac{\varepsilon}{2M_B}, \frac{\theta_C(1-\eta_2)\varepsilon}{2(L+M_B)}\right\},\qquad \bar d_\varepsilon:=\min\{d_\varepsilon,\Delta_{max}\},$$ where zero denominators are interpreted as $+\infty$. Define $r_\varepsilon:=\min\{\Delta_K,\gamma_{dec}\bar d_\varepsilon\}>0$. Every radius from index $K$ onward is at least $r_\varepsilon$: this holds at index $K$; an accepted update does not shrink the radius; and a rejected update can occur only when $\Delta_k>\bar d_\varepsilon$, so its new radius is greater than $\gamma_{dec}\bar d_\varepsilon\ge r_\varepsilon$. The rejection restriction follows from [F1], [F3], and $\|g_k\|_2\ge\varepsilon$; if $\bar d_\varepsilon=\Delta_{max}$ then rejection is impossible. [given, A2, A3, F1, F3, induction, algebra]

2.1 Suppose, for contradiction, that $\|g_k\|_2\ge\varepsilon$ for every $k$ after some index. An infinite block of rejections would give radii $\gamma_{dec}^j\Delta$ tending to zero by [F4], contradicting step 1.1. Thus there are infinitely many accepted steps. At every such sufficiently late step, [F2] and [F1] give $$m_k(0)-m_k(p_k)\ge\tfrac12\theta_C\varepsilon \min\{r_\varepsilon,\varepsilon/M_B\}>0,$$ using the zero-matrix convention if $M_B=0$. Since acceptance means $\rho_k\ge\eta_1$, each accepted step decreases $f$ by at least $\eta_1$ times this fixed positive quantity. Infinitely many such decreases contradict the lower bound [A1]. Therefore the gradients cannot eventually stay above any $\varepsilon>0$. [given, A1, A2, F1, F2, F4, step 1.1, assume-contra, algebra, discharge-contradiction]

3.1 Put $a_k:=\|g_k\|_2$. Since every $a_k\ge0$, zero is a lower bound of each tail; [F6] therefore gives $0\le i_n\le a_k$ for every $k\ge n$, and [F5] gives $\liminf_k a_k\ge0$. Suppose instead that $\liminf_k a_k>0$. Choose $\varepsilon>0$ strictly below this extended-real value (take $\varepsilon=1$ if it is $+\infty$). If $i_n\le\varepsilon$ for every $n$, then [F7] makes $\varepsilon$ an upper bound for all $i_n$ and therefore $\liminf_k a_k=\sup_n i_n\le\varepsilon$, a contradiction. Thus some $i_N>\varepsilon$, and [F6] implies $a_k\ge i_N>\varepsilon$ for all $k\ge N$. This contradicts step 2.1. Hence the liminf is zero. [step 2.1, F5, F6, F7, choose, assume-contra, discharge-contradiction] ∎

