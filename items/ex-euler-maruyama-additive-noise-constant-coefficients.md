---
id: ex-euler-maruyama-additive-noise-constant-coefficients
kind: example
title: "Euler–Maruyama for a constant-coefficient additive-noise equation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-euler-maruyama
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-ito-integral-for-square-integrable-predictable-processes
  - def-ito-sde-and-strong-solution
  - thm-ito-integral-process-has-a-continuous-martingale-version
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §1 and §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Facts & Assumptions

**Given:** AC, $T=1$, $h=1/n$ for an integer $n\ge1$, and
$X_0=0$. Work on a complete filtered probability space whose filtration is
right-continuous and contains every null subset in $\mathcal F_0$. Let $W$ be
a scalar standard Brownian motion adapted to this filtration, with
$W_t-W_s$ independent of $\mathcal F_s$ for every $0\le s<t\le1$. Take
$b(t,x)=1$ and $\sigma(t,x)=1$.

[F1] The Euler–Maruyama step is
$Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)\Delta W_k$.
[[alg-euler-maruyama]]

[F2] On $[t_k,t_{k+1}]$, the interpolation is
$Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$.
[[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F3] The uniform-moment theorem bounds
$\sup_{t\le T}\mathbb E|Y_t|^p$ whenever $\mathbb E|X_0|^p<\infty$.
[[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F4] The Itô integral of the constant integrand $1$ equals the Brownian
increment.
[[def-ito-integral-for-square-integrable-predictable-processes]]

[F5] A strong solution is an adapted continuous process satisfying the
finite-coordinate Itô equation indistinguishably.
[[def-ito-sde-and-strong-solution]]

[F6] The finite-energy Itô-integral process has a continuous martingale
version, and any two such continuous versions agree at all times on a
measurable probability-one event.
[[thm-ito-integral-process-has-a-continuous-martingale-version]]

[A1] AC is inherited from the Brownian-motion and Itô-integral interfaces;
the explicit calculation below makes no choice.
[[def-axiom-of-choice]]

## Example

Consider the scalar additive-noise equation $dX_t=dt+dW_t$ on $[0,1]$.
The coefficients are constant, and for each $n$ the uniform mesh has
$n$ steps of length $h=1/n$.

## Verification

1.1 The functions $b=1$ and $\sigma=1$ are jointly Borel, globally Lipschitz in state with constant $0$, and satisfy the stated linear-growth bound with a finite $K$. Their time increments vanish, so the required half-Hölder time modulus holds. The deterministic initial value $X_0=0$ is $\mathcal F_0$-measurable, independent of future Brownian increments, and has every finite moment. [given, algebra]

1.2 From [F1], induction gives $Y_k=kh+W_{kh}$. Substituting the coefficients into [F2] gives $Y_t=kh+(t-kh)+W_{kh}+W_t-W_{kh}=t+W_t$ on every interval. By [F4], at every fixed time the candidate path $X_t=t+W_t$ satisfies the integral equation. The continuous-version theorem [F6] and equality at all rational times identify these processes indistinguishably; hence [F5] makes this adapted continuous candidate a strong solution. Any strong solution with the same data equals $t+W_t$ directly from the constant-coefficient equation, so this is the exact path. [F1, F2, F4, F5, F6, algebra]

2.1 The initial value $X_0=0$ has every finite moment. Applying [F3] for each finite $p\ge2$ therefore proves finite moments of the grid, step, and interpolated processes uniformly in $n$ and $t\le1$. The explicit identity $Y_t=t+W_t$ from step 1.2 also identifies the exact path. AC in [A1] is inherited from the cited interfaces; no choice enters these computations. [A1, F3, step 1.2, algebra] ∎
