---
id: ex-sdc-constant-predictor-too-few-sweeps
kind: example
title: Too few sweeps lower the order from Gauss collocation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - thm-sdc-finite-sweeps-raise-order
  - prop-one-node-gauss-collocation-order-two
  - alg-explicit-left-euler-sdc-sweep
  - lem-one-node-gauss-data-is-midpoint
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-local-defect-order-m
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - thm-binomial-theorem
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-derivative-of-exponential
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - cor-mean-value-theorem
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3, Theorem 3.1
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Example

Assume Countable Choice for the Lebesgue interval-measure formula. Apply one-node Gauss SDC to $y'=y$, $y(0)=1$, on $[0,1]$, using the constant predictor, fixed stopping tolerance $\mathrm{tol}=1$, and a sweep budget $K\ge1$. For sufficiently small uniform steps, the first residual check accepts the uncorrected predictor at every step.

## Facts & Assumptions

**Given:** The one-node Gauss tableau, explicit-left-Euler SDC sweep, constant predictor, unit tolerance, a budget $K\ge1$, uniform mesh $h=1/N$, and the supplied flag `invariance_certified=true`; step 1.1 verifies its guarantee.

[F1] [[alg-explicit-left-euler-sdc-sweep]]: the first update uses $Q_\Delta=0$ for one node, computes $U^1$, and returns $U^0$ if $\|U^1-U^0\|\le(1-q)\mathrm{tol}$.

[F2] [[prop-one-node-gauss-collocation-order-two]]: the fully solved one-node Gauss method is implicit midpoint and has global order two on the stated smooth tube.

[F3] [[thm-sdc-finite-sweeps-raise-order]]: a fixed candidate $U^k$ from a constant predictor has the guaranteed global-error bound $O(h^{\min(1,k+1)})$ when used as the one-node method under its hypotheses. For $U^0$ this is an $O(h)$ bound; it does not exclude a higher order in a particular problem.

[F5] [[def-real-exponential-function-and-e]]: $e=\sum_{j=0}^{\infty}1/j!$.

[F6] [[lem-exponential-dominates-one-plus-x]]: $1+x\le\exp(x)$ for real $x$.

[F7] [[thm-binomial-theorem]]: $(1+x)^N=\sum_{j=0}^N\binom Njx^j$ for a nonnegative integer $N$.

[F8] [[def-first-order-ode-initial-value-problem-and-solution]] and [[thm-derivative-of-exponential]]: an exact solution is differentiable, and $\exp'(t)=\exp(t)$.

[F9] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[thm-exponential-addition-formula]]: the product and chain rules hold, and $\exp(s)\exp(t)=\exp(s+t)$.

[F10] [[cor-mean-value-theorem]]: a differentiable function with zero derivative on an interval is constant there.

[F11] [[thm-exponential-is-strictly-increasing]]: if $a\le b$, then $\exp(a)\le\exp(b)$.

[F12] [[lem-one-node-gauss-data-is-midpoint]] and [[alg-explicit-left-euler-sdc-sweep]]: for one-node Gauss data, $Q_{11}=1/2$ and $Q_\Delta=0$, so at a start state $u$ the sweep map is $S_u(V)=u+(h/2)V$ and $q=h/2$.

[F13] [[thm-sdc-sweep-contraction-and-error-bound]]: if the inner stage map preserves a nonempty closed product ball and $a<1$, $q<1$, then the collocation branch exists uniquely in that ball.

[F14] [[thm-collocation-local-defect-order-m]]: for $M=1$, the exact-path integrand must satisfy a uniform derivative bound $\|g_h'\|_\infty=O(h)$.

[A1] Countable Choice, inherited from the one-node Gaussian moment data used in [F2].

## Verification

1.1 Let the common state tube be $[0,2e]$ and take the time-fiber start sets $\mathcal U_n=[1,e]$; the field $f(t,y)=y$ is bounded there by $B=2e$ and is $1$-Lipschitz. For every start $u\in\mathcal U_n$, use the one-stage closed product ball $\mathcal C_u=[0,2u]$, which contains the constant predictor $U^0=u$. By [F12], for $V\in\mathcal C_u$ the inner/outer sweep map is $S_u(V)=u+(h/2)V$, whose values lie in $[u,u+hu]\subseteq[u,2u]\subseteq\mathcal C_u$ when $0<h\le1$. The contraction constants are $a=0$ and $q=h/2\le1/2$, with $q=(1/2)h$. Thus [F13] supplies the unique local collocation branch in $\mathcal C_u$, uniformly for the start states used in the stability comparison. Now induct on the mesh index. If all earlier checks passed, then $y_n=(1+h)^n>0$; for $nh\le1$, [F6] gives $(1+h)^n\le\exp(nh)$ and [F11] gives $\exp(nh)\le e$, so $y_n\in\mathcal U_n$ and the stage set hypotheses just verified apply. The first sweep value is $U^1=y_n+(h/2)y_n$, with update residual $r_0=h|y_n|/2\le eh/2$. For sufficiently small $h$, $eh/2\le1-h/2=(1-q)\mathrm{tol}$, so [F1] returns $U^0$ after the first check and the endpoint is $y_{n+1}=(1+h)y_n$. This closes the induction for every step. [A1, F1, F5, F6, F11, F12, F13, given, induction, algebra]

1.2 Let $y$ be any exact IVP solution. By [F8]–[F9], $z(t)=\exp(-t)y(t)$ has derivative $z'(t)=-\exp(-t)y(t)+\exp(-t)y'(t)=0$. [F10] on each interval $[0,t]$ gives $z(t)=z(0)=1$; the addition formula [F9] then gives $y(t)=\exp(t)$ and in particular $y(1)=e$. Thus the exact grid states also lie in $\mathcal U_n=[1,e]$. On a step starting at $t_n$, the exact-path integrand is $g_h(s)=e^{t_n+hs}$, so $g_h'(s)=he^{t_n+hs}$ and $\|g_h'\|_\infty\le eh$ for $0\le t_n+hs\le1$. This verifies the $M=1$ exact-path derivative premise in [F14]. [F8, F9, F10, F14, algebra]

2.1 The computed final value is $(1+1/N)^N$. For $N\ge2$, [F7] gives its $j$th coefficient as $\binom NjN^{-j}=\frac1{j!}\prod_{r=0}^{j-1}(1-r/N)$ for $j\le N$, which is at most $1/j!$; omitted terms for $j>N$ are positive in [F5]. The $j=2$ coefficient alone differs from $1/2!$ by $1/(2N)$, so $e-(1+1/N)^N\ge1/(2N)=h/2$. Therefore this accepted finite-tolerance method is not order two; [F3] supplies an $O(h)$ global-error bound for the uncorrected stage, while [F2] gives order two for the fully solved collocation method. More explicitly, step 1.1 gives $y_n=(1+h)^n\ge1$, hence the accepted first residual obeys $r_0=hy_n/2\ge h/2$. The ratio $r_0/h^3\ge1/(2h^2)\to\infty$, so the accepted residual is not $O(h^3)$. This diagnoses failure of that residual target; the independent endpoint lower bound above proves that the accepted method is not order two. [F2, F3, F5, F7, step 1.1, step 1.2, algebra] ∎
