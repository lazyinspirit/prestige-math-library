---
id: thm-trust-region-epsilon-iteration-complexity
kind: theorem
title: "Trust-region first-order complexity counts both successful and unsuccessful trials"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-trust-region-method
  - lem-trust-region-ratio-accuracy-for-small-radii
  - lem-trust-region-cauchy-decrease
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-natural-logarithm-bounded-by-argument
  - thm-of-archimedean
  - lem-geometric-sequence-null
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
      locator: "Chapter 4, §4.2, Theorem 4.2 and proof, printed pp. 77–80 / PDF pp. 97–100: successful-step decrease and trust-radius control."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 20–22: successful decrease, unsuccessful-step radius contraction, and global iteration accounting."
---

## Statement

For every nonstationary trial of [[alg-trust-region-method]], the selected
predicted reduction is positive, and every accepted trial strictly decreases
the objective.

Assume the hypotheses and parameter ranges of
[[thm-trust-region-global-liminf-gradient]], and let $f_{inf}$ be a lower
bound for $f$. For each target $0<\varepsilon\le1$, run
[[alg-trust-region-method]] until its first iterate with
$\|\nabla f(x_k)\|_2\le\varepsilon$. Define
$$c_\delta:=\min\left\{\frac1{2M_B}, \frac{\theta_C(1-\eta_2)}{2(L+M_B)}\right\},\qquad c_R:=\min\{\Delta_0,\gamma_{dec}\min\{c_\delta,\Delta_{max}\}\},$$
where a zero denominator means $+\infty$, and put
$$c_P:=\min\{c_R,1/M_B\},\qquad c_S:=\tfrac12\eta_1\theta_Cc_P>0.$$
Then the number $N_s$ of accepted steps before reaching the target and the
number $N_u$ of rejected trials obey
$$N_s\le\frac{f(x_0)-f_{inf}}{c_S\varepsilon^2},$$
$$N_u\le\frac{\log(\Delta_0/r_\varepsilon)+N_s\log\gamma_{inc}} {|\log\gamma_{dec}|},\qquad r_\varepsilon:=\min\{\Delta_0,\gamma_{dec}\min\{c_\delta\varepsilon, \Delta_{max}\}\}.$$
Here $\log$ denotes the natural logarithm of a positive real.
Consequently, accepted steps and total trials $N_s+N_u$ are
$O(\varepsilon^{-2})$ as $\varepsilon\downarrow0$. An outer cap at least
the resulting total-trial bound suffices for the finite-budget algorithm to
return `target-achieved` or `stationary`, with gradient norm at most
$\varepsilon$.

## Facts & Assumptions

**Given:** The model-Hessian bound, gradient Lipschitz bound, bounded-below
objective, parameter ranges, and step safeguard of the trust-region method.

[F1] [[alg-trust-region-method]]: each step has predicted reduction at least
$\theta_C$ times the Cauchy decrease; a rejection multiplies $\Delta$ by
$\gamma_{dec}$; an accepted update multiplies it by a factor in
$[1,\gamma_{inc}]$, respecting $\Delta_{max}$.

[F2] [[lem-trust-region-cauchy-decrease]]: if $a:=\|g_k\|_2>0$, then
$$m_k(0)-m_k(p_C)\ge\tfrac12a\min\{\Delta_k,a/\|B_k\|_2\},$$
with the zero-matrix convention stated there.

[F3] [[lem-trust-region-ratio-accuracy-for-small-radii]]: when
$a\ge\varepsilon$ and $\Delta_k\le c_\delta\varepsilon$, the algorithm's
small-radius branch gives $\rho_k\ge\eta_2$ and uses the boundary Cauchy
step, so rejection is impossible.

[F4] [[def-natural-logarithm]]: $\log x$ is defined for $x>0$ as the inverse
of the real exponential.

[F5] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing,
$\log1=0$, and the product and quotient laws hold for positive arguments.

[F6] [[lem-natural-logarithm-bounded-by-argument]]:
$0\le\log y\le y-1\le y$ for $y\ge1$.

[F7] [[thm-of-archimedean]]: for every real $R$ there is an integer
$m\in\mathbb N$ with $m>R$.

[F8] [[lem-geometric-sequence-null]]: if $0<q<1$, then $q^j\to0$ as
$j\to\infty$.

[A1] The target satisfies $0<\varepsilon\le1$.

[A2] Every model matrix is symmetric with norm at most $M_B$, and the
gradient is $L$-Lipschitz on every trial segment.

[A3] The objective satisfies $f(x)\ge f_{inf}$ at all iterates.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $\bar\delta_\varepsilon:= \min\{c_\delta\varepsilon,\Delta_{max}\}$. Every radius during a pre-target trial is at least $$r_\varepsilon=\min\{\Delta_0,\gamma_{dec}\bar\delta_\varepsilon\}>0.$$ Indeed, this holds initially. If a trial is rejected, [F3] implies its radius exceeded $\bar\delta_\varepsilon$, since at or below that threshold the ratio is at least $\eta_2$; after multiplication by $\gamma_{dec}$ the new radius is greater than $\gamma_{dec}\bar\delta_\varepsilon$. An accepted update does not decrease the radius. Induction proves the bound. [given, A1, A2, F1, F3, induction, algebra]

1.2 For any nonstationary trial, $\|g_k\|_2>0$ and $\Delta_k>0$. By [F2], the Cauchy step has $P_C>0$. The selection rule either chooses a candidate with predicted decrease at least $\theta_C P_C$, or uses $p_C$; the small-radius override also uses $p_C$. Since $0<\theta_C\le1$, every branch therefore gives $P_k\ge\theta_C P_C>0$, so the ratio in the algorithm is defined. [F1, F2, given, cases, algebra]

2.1 If the target were never reached, every rejection block would be finite: an infinite block would multiply a fixed radius by $\gamma_{dec}^j\to0$ by [F8], eventually making $\Delta\le\bar\delta_\varepsilon$, where [F3] forbids rejection. Thus an infinite pre-target run would contain infinitely many accepted trials. For any accepted trial its starting gradient norm $a$ exceeds $\varepsilon$. From step 1.1, $\Delta_k\ge r_\varepsilon\ge c_R\varepsilon$, because $\varepsilon\le1$ and $$\min\{c_\delta\varepsilon,\Delta_{max}\} \ge\varepsilon\min\{c_\delta,\Delta_{max}\}.$$ Since $\Delta_0\ge\varepsilon\Delta_0$, taking the minimum with $\Delta_0$ in the definition of $r_\varepsilon$ gives $r_\varepsilon\ge c_R\varepsilon$. Also $a/\|B_k\|_2\ge\varepsilon/M_B$, with the stated infinity convention if $M_B=0$. Hence $$\min\{\Delta_k,a/\|B_k\|_2\}\ge c_P\varepsilon.$$ By [F1] and [F2], the predicted reduction is at least $\tfrac12\theta_Cc_P\varepsilon^2$. Acceptance gives actual decrease at least $\eta_1$ times this amount, namely $c_S\varepsilon^2$. If the target were never reached, after $m$ accepted trials the objective would be at most $f(x_0)-m c_S\varepsilon^2$. By [F7] choose an integer $m>(f(x_0)-f_{inf})/(c_S\varepsilon^2)$; this contradicts [A3]. Therefore the target is reached after finitely many accepted trials. Summing their decreases gives $N_s c_S\varepsilon^2\le f(x_0)-f_{inf}$, the claimed successful-step bound. [given, A1, A2, A3, F1, F2, F3, F7, F8, step 1.1, choose, assume-contra, discharge-contradiction, algebra]

2.2 Let $\Delta_T$ be the radius after the accepted trial that first reaches the target. Each rejected trial multiplies the radius by $\gamma_{dec}$; each accepted update multiplies it by some $r_j\in[1,\gamma_{inc}]$. Therefore $$\Delta_T=\Delta_0\gamma_{dec}^{N_u}\prod_{j=1}^{N_s}r_j.$$ Step 1.1 gives $\Delta_T\ge r_\varepsilon$. By [F5], $\log\gamma_{dec}<0$, and logarithms of positive products give $$\log\Delta_T=\log\Delta_0+N_u\log\gamma_{dec} +\sum_{j=1}^{N_s}\log r_j.$$ Rearranging and using $\log r_j\le\log\gamma_{inc}$ yields $$N_u|\log\gamma_{dec}| =\log(\Delta_0/\Delta_T)+\sum_{j=1}^{N_s}\log r_j \le\log(\Delta_0/r_\varepsilon)+N_s\log\gamma_{inc},$$ which proves the rejection bound, including every rejected trial. [given, F1, F4, F5, step 1.1, algebra]

3.1 Since $r_\varepsilon\ge c_R\varepsilon$ for $0<\varepsilon\le1$, [F5] gives $$\log(\Delta_0/r_\varepsilon) \le\log(\Delta_0/(c_R\varepsilon)) =\log(\Delta_0/c_R)+\log(1/\varepsilon).$$ By [F6], $\log(1/\varepsilon)\le1/\varepsilon$; since $0<\varepsilon\le1$, $1/\varepsilon\le1/\varepsilon^2$. Thus the radius term is $O(\varepsilon^{-2})$, as is $N_s$ by step 2.1, so $N_s+N_u=O(\varepsilon^{-2})$. If the finite outer cap allows at least that many trials, the process reaches the target before the cap. [given, F5, F6, step 2.1, step 2.2, algebra]

4.1 On an accepted trial, $\rho_k\ge\eta_1>0$ and $P_k>0$ by step 1.2. Thus $f(x_{k+1})=f(x_k)-\rho_kP_k<f(x_k)$, proving strict decrease at every accepted trial. [F1, step 1.2, algebra] ∎

