---
id: ex-backward-heat-exists-for-finite-dirichlet-eigenfunction-sums
kind: example
title: Finite sine sums admit a backward Dirichlet heat solution
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-sine-and-cosine-derivatives
  - thm-derivative-of-exponential
  - thm-sine-cosine-zero-sets-and-fundamental-period
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (2019)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§9.1, printed pp. 109–111, (197)–(199); §10.3.2, printed pp. 144–145, (346)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§3.1, Dirichlet sine modes; §6.4, backward uniqueness"
---

## Example

For $T>0$ and a finite terminal sine sum
$g(x)=\sum_{k=1}^Na_k\sin(kx)$ on $(0,\pi)$, the function
$$u(x,t)=\sum_{k=1}^Na_ke^{k^2(T-t)}\sin(kx)\qquad(0\le t\le T)$$
solves $u_t-u_{xx}=0$, vanishes at $x=0$ and $x=\pi$, and has $u(x,T)=g(x)$.
Every such finite terminal datum therefore has a classical backward extension,
although its mode amplification grows without bound as $k$ increases.

## Facts & Assumptions

**Given:** $T>0$, a finite integer $N\ge1$, real coefficients $a_1,\dots,a_N$, and the terminal sum $g(x)=\sum_{k=1}^Na_k\sin(kx)$ on $(0,\pi)$.

[F1] $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]), so differentiating twice gives $\partial_x^2\sin(kx)=-k^2\sin(kx)$ by the chain rule [[thm-chain-rule]].

[F2] The exponential satisfies $\frac{d}{dt}e^{k^2(T-t)}=-k^2e^{k^2(T-t)}$ ([[thm-derivative-of-exponential]], [[thm-chain-rule]]).

[F3] Finite sums and scalar multiples of differentiable functions are differentiable with the expected derivatives ([[thm-algebra-of-derivatives]]).

[F4] $\sin0=0$ and $\sin(k\pi)=0$ for every integer $k$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]), and the cylinder vocabulary is that of [[def-parabolic-cylinder-and-parabolic-boundary]].

## Verification

**Given:** $T>0$, $N\ge1$, real $a_1,\dots,a_N$, the terminal sum $g$, and $u(x,t)=\sum_{k=1}^Na_ke^{k^2(T-t)}\sin(kx)$.

1.1 For each $k$ the summand $u_k(x,t)=a_ke^{k^2(T-t)}\sin(kx)$ satisfies $\partial_tu_k=-k^2u_k$ by [F2] and $\partial_x^2u_k=-k^2u_k$ by [F1], so $\partial_tu_k-\partial_x^2u_k=0$ on $(0,\pi)\times(0,T]$. [F1, F2, given]

2.1 Since $u$ is a finite sum of the summands of step 1.1, [F3] gives $\partial_tu=\sum_k\partial_tu_k$ and $\partial_x^2u=\sum_k\partial_x^2u_k$, so $u_t-u_{xx}=\sum_k(\partial_tu_k-\partial_x^2u_k)=0$; moreover $u(0,t)=\sum_ka_k\sin0=0$ and $u(\pi,t)=\sum_ka_k\sin(k\pi)=0$ for every $t$ by [F4], while $u(x,T)=\sum_ka_k\sin(kx)=g(x)$ because $e^0=1$; the sum is smooth because it has finitely many smooth summands. [step 1.1, F3, F4, given]

3.1 Step 2.1 exhibits, for every finite terminal sine sum $g$, the classical backward solution $u$ on the closed rectangle, so existence is unconditional for finite data; the $k$-th summand carries the factor $e^{k^2(T-t)}$, which equals $e^{k^2T}$ at $t=0$ and grows without bound as $k$ increases, so no uniform amplification bound over all $k$ is claimed, in agreement with the example's final sentence and the unboundedness of the backward solution map. [step 2.1, given] ∎ 