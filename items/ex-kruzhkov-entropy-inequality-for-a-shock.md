---
id: ex-kruzhkov-entropy-inequality-for-a-shock
kind: example
title: The Kruzhkov entropy inequality across a shock
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [ex-burgers-shock-riemann-solution, def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, thm-rankine-hugoniot-jump-condition, def-abs-value, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, Proposition 5.13, pp. 46–48"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, pp. 16–19"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=\tfrac12u^2$, let $u_L>u_R$, and let $u$ be the shock of
[[ex-burgers-shock-riemann-solution]] with speed $s=\frac{u_L+u_R}{2}$. For the
Kruzhkov entropy $\eta_k(u)=|u-k|$ with flux
$q_k(u)=\operatorname{sgn}(u-k)(f(u)-f(k))$, the entropy-production
distribution in space--time is
$$\partial_t\eta_k(u)+\partial_xq_k(u)=\bigl([q_k]-s[\eta_k]\bigr)\,\delta(x-st),$$
where $\delta(x-st)$ denotes the distribution paired by
$\langle\delta(x-st),\varphi\rangle=\int\varphi(t,st)\,dt$ (equivalently, the
density with respect to arclength on $\Gamma$ is divided by
$\sqrt{1+s^2}$). Direct computation gives, for every $k\in\mathbb R$,
$$[q_k]-s[\eta_k]=\begin{cases}0,&k\le u_R\text{ or }k\ge u_L,\\[2pt](k-u_R)(k-u_L)<0,&u_R<k<u_L,\end{cases}$$
so the distribution is nonpositive, with strict dissipation exactly for
$u_R<k<u_L$. For $u_L=1$, $u_R=0$, $k=\tfrac12$, the coefficient is
$-\tfrac14$ ([[def-kruzhkov-entropy-solution]],
[[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]],
[[thm-rankine-hugoniot-jump-condition]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, states $u_L>u_R$, the shock $u$ with speed $s=(u_L+u_R)/2$, the Kruzhkov pairs $\eta_k,q_k$, and the jumps $[h]=h(u_R)-h(u_L)$ across the interface.

[F1] The shock is the entropy solution of the Riemann problem with speed $s=(u_L+u_R)/2$: the Rankine--Hugoniot condition $s[u]=[f]$ holds and the jump is admissible; it is a distributional weak solution with the Riemann data ([[ex-burgers-shock-riemann-solution]]).

[F2] Entropy production at a single jump: for a piecewise constant profile with one jump of speed $s$, $\partial_t\eta(u)=(-s)[\eta]\,\delta(x-st)$ and $\partial_xq(u)=[q]\,\delta(x-st)$ with the pairing convention of the statement, so $\partial_t\eta(u)+\partial_xq(u)=\bigl([q]-s[\eta]\bigr)\delta(x-st)$; the entropy inequality requires this coefficient to be nonpositive, which is exactly the chord criterion ([[def-kruzhkov-entropy-solution]], [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]], [[thm-rankine-hugoniot-jump-condition]]).

[F3] For $f(u)=\tfrac12u^2$ the Kruzhkov flux is $q_k(u)=\operatorname{sgn}(u-k)\tfrac{u^2-k^2}{2}=\tfrac{(u+k)|u-k|}{2}$ by the identity $u^2-k^2=(u-k)(u+k)$ and the definition of the absolute value ([[def-abs-value]], [[def-kruzhkov-entropy-solution]]).

## Proof

**Proof technique:** direct.

1.1 **The production measure.** On $\{x<st\}$ the profile equals the constant $u_L$ and on $\{x>st\}$ it equals $u_R$; for a piecewise constant function with a single jump of speed $s$ the distributional derivatives are the jump measures described in [F2]. Hence $\partial_t\eta_k(u)+\partial_xq_k(u)=\bigl([q_k]-s[\eta_k]\bigr)\delta(x-st)$ with $[q_k]=q_k(u_R)-q_k(u_L)$ and $[\eta_k]=\eta_k(u_R)-\eta_k(u_L)$; positive coefficients violate the entropy inequality. [F1, F2]


2.1 **The cases $k\le u_R$ and $k\ge u_L$.** If $k\le u_R$, then both states lie above $k$, so $\eta_k(u_L)=u_L-k$, $\eta_k(u_R)=u_R-k$, $q_k(u_L)=\tfrac{u_L^2-k^2}{2}$, $q_k(u_R)=\tfrac{u_R^2-k^2}{2}$ by [F3], and $[q_k]-s[\eta_k]=\tfrac{u_R^2-u_L^2}{2}-\tfrac{u_L+u_R}{2}(u_R-u_L)=0$. If $k\ge u_L$, then both states lie below $k$, so $\eta_k(u)=k-u$ and $q_k(u)=\tfrac{k^2-u^2}{2}$ at both states by [F3]; hence $[q_k]=\tfrac{u_L^2-u_R^2}{2}$ and $[\eta_k]=u_L-u_R$, and the same subtraction again gives $0$. [F3, step 1.1]


2.2 **The case $u_R<k<u_L$.** Here $q_k(u_L)=(u_L^2-k^2)/2$ and $q_k(u_R)=(k^2-u_R^2)/2$, so $[q_k]=k^2-(u_L^2+u_R^2)/2$. Also $[\eta_k]=2k-u_R-u_L$. Therefore $$[q_k]-s[\eta_k]=k^2-\frac{u_L^2+u_R^2}{2}-\frac{u_L+u_R}{2}(2k-u_R-u_L)=(k-u_R)(k-u_L)<0.$$ The strict sign follows from $k-u_R>0$ and $k-u_L<0$. [F3, step 1.1]


3.1 **The unit example.** For $u_L=1$, $u_R=0$, $k=\tfrac12$: $s=\tfrac12$ and $(k-u_R)(k-u_L)=\tfrac12\cdot(-\tfrac12)=-\tfrac14$, so the production distribution is $-\tfrac14\delta(x-t/2)$, nonpositive as required. [step 1.1, step 2.2] ∎
