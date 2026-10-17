---
id: thm-drift-implicit-euler-sde-strong-order-half
kind: theorem
title: "Strong order one-half for drift-implicit Euler–Maruyama"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-drift-implicit-euler-sde
  - thm-superlinear-sde-global-existence-and-moments
  - thm-local-sde-existence-and-uniqueness-until-exit
  - thm-backward-euler-dissipative-resolvent-contraction
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - lem-brownian-ito-integral-bdg-moment-bound
  - lem-brownian-ito-integral-l1-maximal-bound
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-holder-inequality-for-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-gronwall-integral-inequality
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, Theorem 5.3 and proof"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, §1"
      url: "https://arxiv.org/pdf/1010.3756"
---

## Statement

Assume AC. Let $d,m\ge1$ be finite, $T>0$, and consider the autonomous
SDE with $b\in C^1(\mathbb R^d;\mathbb R^d)$ and globally Lipschitz
$\sigma:\mathbb R^d\to\mathbb R^{d\times m}$. Suppose that for constants
$\mu\ge0$, $C<\infty$, and an integer $q\ge1$,
$$\langle x-y,b(x)-b(y)\rangle\le-\mu|x-y|^2, \qquad \|Db(x)\|\le C(1+|x|^q).$$
Let $\xi$ have all finite moments and let $X$ be the corresponding global
strong solution. For $N\ge\max(1,\lceil T\rceil)$, put $h=T/N$ and let
$Y_n$ be the exact-resolvent drift-implicit Euler–Maruyama values from
[[alg-drift-implicit-euler-sde]]. There is a constant $C_T$ independent of
$N$ such that
$$\mathbb E\max_{0\le n\le N}|X_{t_n}-Y_n|^2\le C_T h.$$
Moreover, for two such numerical sequences driven by the same Brownian
increments but with initial values $\xi,\widetilde\xi$,
$$\mathbb E|Y_n-\widetilde Y_n|^2 \le e^{L_\sigma^2t_n}\mathbb E|\xi-\widetilde\xi|^2,$$
where $L_\sigma$ is a global Lipschitz constant of $\sigma$. The second
estimate is finite-time mean-square stability; it does not claim strict
contraction when diffusion is present.

## Facts & Assumptions

**Given:** AC; the dissipative SDE and moment hypotheses in the Statement; $h=T/N\le1$; and the drift-implicit scheme.

[F1] The backward Euler resolvent exists on all of $\mathbb R^d$ and obeys $|R_h(u)-R_h(v)|\le(1+h\mu)^{-1}|u-v|$. [[thm-backward-euler-dissipative-resolvent-contraction]]

[F2] The exact SDE solution is global and has finite path-supremum moments of every finite order. [[thm-superlinear-sde-global-existence-and-moments]]

[F3] The exact SDE satisfies its local Itô integral equation, and its finite-energy integrals satisfy the Itô isometry. [[def-locally-lipschitz-ito-sde-and-maximal-solution]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F4] The Brownian Itô integral satisfies the $L^p$ maximal estimate in [[lem-brownian-ito-integral-bdg-moment-bound]] and the $L^1$ maximal estimate $\mathbb E\sup|\int H dW|\le16\sqrt m\,\mathbb E(\int\|H\|_F^2)^{1/2}$ in [[lem-brownian-ito-integral-l1-maximal-bound]].

[F5] The polynomial derivative bound implies $|b(x)-b(y)|\le C'(1+|x|^q+|y|^q)|x-y|$ by integrating $Db$ along the segment from $x$ to $y$. This is a consequence of the Statement's derivative hypothesis.

[F6] Hölder's inequality gives the $L^p$ bounds for time integrals and products used in the local-increment estimates. [[thm-holder-inequality-for-integrals]]

[F7] If $u(t)\le A+\int_0^tBu(s)ds$ with nonnegative continuous $u$, then $u(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F8] Euclidean Cauchy--Schwarz gives $|\langle x,y\rangle|\le|x||y|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F9] A finite-energy Itô integral has a continuous square-integrable martingale version, so its increments over grid intervals have conditional mean zero given the preceding sigma-algebra. [[thm-ito-integral-process-has-a-continuous-martingale-version]]

[F10] Tonelli's theorem interchanges expectation and time integration for the nonnegative increment and diffusion bounds used below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC is inherited through the Brownian, resolvent, and Itô interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions and suppliers in the Statement and Facts.

1.1 First prove stability. For two updates with difference $e_n=Y_n-\widetilde Y_n$, the resolvent estimate [F1] and Brownian independence give $$\begin{aligned} \mathbb E(|e_{n+1}|^2\mid\mathcal F_{t_n}) &\le(1+h\mu)^{-2} \mathbb E\left(|e_n+ (\sigma(Y_n)-\sigma(\widetilde Y_n))\Delta W_n|^2 \mid\mathcal F_{t_n}\right)\\ &\le(1+hL_\sigma^2)|e_n|^2. \end{aligned}$$ The cross term vanishes because $e_n$ and the diffusion difference are $\mathcal F_{t_n}$-measurable and $\Delta W_n$ is independent with mean zero; its covariance is $hI_m$. Iterating and using $(1+hL_\sigma^2)^n\le e^{L_\sigma^2t_n}$ proves the second estimate. [A1, F1, given, algebra]

1.2 Let $X_n=X_{t_n}$ and define $$d_{n+1}=\int_{t_n}^{t_{n+1}}(b(X_s)-b(X_{n+1}))ds, \qquad m_{n+1}=\int_{t_n}^{t_{n+1}}(\sigma(X_s)-\sigma(X_n))dW_s.$$ The SDE integral equation gives $X_{n+1}-hb(X_{n+1})=X_n+\sigma(X_n)\Delta W_n+d_{n+1}+m_{n+1}$. With $R_h=(I-hb)^{-1}$, the numerical update and [F1] therefore imply, for $e_n=Y_n-X_n$, $$|e_{n+1}|\le|e_n+\xi_{n+1}-d_{n+1}|, \qquad \xi_{n+1}=\int_{t_n}^{t_{n+1}}(\sigma(Y_n)-\sigma(X_s))dW_s.$$ The identity for $\xi_{n+1}$ follows by adding and subtracting $\sigma(X_n)\Delta W_n$. Its conditional mean given $\mathcal F_{t_n}$ is zero by [F9]. [F1, F3, F9, given, algebra]

1.3 From [F2], linear growth of $\sigma$, and the SDE equation, for $r=2,4$ and $s\in[t_n,t_{n+1}]$, $$\mathbb E|X_s-X_n|^r\le C_r h^{r/2}.$$ Indeed the drift increment has $r$th moment at most $h^{r-1}\int_{t_n}^{t_{n+1}}\mathbb E|b(X_u)|^rdu\le C h^r$ by Hölder and [F10], while [F4] bounds the stochastic increment by $C_r\mathbb E(\int_{t_n}^{t_{n+1}}\|\sigma(X_u)\|_F^2du)^{r/2} \le C_rh^{r/2}$. The polynomial local-Lipschitz estimate [F5], all moments in [F2], and Hölder [F6] then give $$\mathbb E|d_{n+1}|^2\le C h^3.$$ The isometry [F3] and global Lipschitzness of $\sigma$ give the unconditional bound $$\mathbb E|\xi_{n+1}|^2\le C h\mathbb E|e_n|^2+C h^2.$$ [F2, F3, F4, F5, F6, F10, given, algebra]

2.1 Squaring the error inequality in step 1.2 and applying $2|e_n||d_{n+1}|\le h|e_n|^2+h^{-1}|d_{n+1}|^2$ and $2|\xi_{n+1}||d_{n+1}|\le|\xi_{n+1}|^2+|d_{n+1}|^2$ gives $$|e_{n+1}|^2\le(1+h)|e_n|^2+ 2\langle e_n,\xi_{n+1}\rangle+ 2|\xi_{n+1}|^2+(2+h^{-1})|d_{n+1}|^2.$$ By [F9], the increments $\xi_{n+1}$ are martingale differences. Summing their unconditional second-moment bound from step 1.3 gives $\sum_{n<N}\mathbb E|\xi_{n+1}|^2 \le Ch\sum_{n<N}\mathbb E|e_n|^2+Ch$; step 1.3 also gives $\sum_{n<N}(2+h^{-1})\mathbb E|d_{n+1}|^2\le Ch$. [F8, F9, step 1.2, step 1.3, algebra]

2.2 Put $v_j=\mathbb E\max_{k\le j}|e_k|^2$ for $0\le j\le N$. For each $j\le N$, the partial sums $M_j=2\sum_{n<j}\langle e_n,\xi_{n+1}\rangle$ form a martingale by [F9]. Written as one Brownian Itô integral, its integrand on $[t_n,t_{n+1}]$ is $2e_n^{\mathsf T}(\sigma(Y_n)-\sigma(X_s))$. The $L^1$ maximal bound [F4] gives $$\mathbb E\max_{l\le j}|M_l|\le32\sqrt m\,\mathbb E\left[\max_{n<j}|e_n|\left(\sum_{n<j}\int_{t_n}^{t_{n+1}}\|\sigma(Y_n)-\sigma(X_s)\|_F^2ds\right)^{1/2}\right].$$ Applying $uv\le\varepsilon u^2+(4\varepsilon)^{-1}v^2$ (obtained by expanding $(\sqrt\varepsilon u-v/(2\sqrt\varepsilon))^2\ge0$) factors out the error maximum and yields, for any $\varepsilon>0,$ $$\mathbb E\max_{l\le j}|M_l|\le\varepsilon v_{j-1}+C_\varepsilon\mathbb E\sum_{n<j}\int_{t_n}^{t_{n+1}}\|\sigma(Y_n)-\sigma(X_s)\|_F^2ds.$$ By Lipschitzness, $\|\sigma(Y_n)-\sigma(X_s)\|_F^2\le2L_\sigma^2(|e_n|^2+|X_s-X_n|^2)$. Step 1.3 and Tonelli [F10] then give $$\mathbb E\max_{l\le j}|M_l|\le\varepsilon v_{j-1}+C_\varepsilon h\sum_{n<j}\mathbb E|e_n|^2+C_\varepsilon h,$$ since $\sum_{n<j}\int_{t_n}^{t_{n+1}}\mathbb E|X_s-X_n|^2ds\le Ch$. [F4, F8, F9, F10, step 1.3, given, algebra]

3.1 Recall $v_j$ from step 2.2; $e_0=0$ because both methods start from $\xi$. Subtract $|e_n|^2$ from both sides of step 2.1 and sum from $n=0$ to $j-1$. Taking the maximum over partial endpoints makes the martingale term $\max_{l\le j}|M_l|$; the remaining nonnegative terms have expectation at most $C h\sum_{k<j}v_k+Ch$ by the local bounds in steps 1.3--2.2. Use step 2.2 with $\varepsilon=1/2$; since $v_{j-1}\le v_j$, absorb the martingale contribution to obtain $$v_j\le C h\sum_{k<j}v_k+Ch.$$ Choose $C_0\ge C$ so this implies $v_j\le C_0w_j$ for $w_j=h+h\sum_{k<j}v_k$. Then $w_{j+1}=w_j+hv_j\le(1+C_0h)w_j$ and $w_0=h$, so $v_N\le C_0h(1+C_0h)^N\le C_0e^{C_0T}h$. This proves the first assertion; the stability assertion was proved in step 1.1. AC is exactly [A1]. [A1, F7, step 1.1, step 1.3, step 2.1, step 2.2, algebra] ∎
