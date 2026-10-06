---
id: cex-expansion-shock-is-weak-but-not-entropic
kind: counterexample
title: The expansion shock is weak but not entropic
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-rankine-hugoniot-jump-condition, def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, def-convex-entropy-entropy-flux-pair, ex-burgers-rarefaction-riemann-solution, def-distributional-weak-solution-of-a-scalar-conservation-law, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§§5.1–5.2, pp. 32–40"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.2, pp. 352–353"
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

Let $f(u)=\tfrac12u^2$ and let the Riemann data be $u_0(x)=0$ for $x<0$ and
$u_0(x)=1$ for $x>0$. The increasing-state jump with left state $u^-=0$, right
state $u^+=1$, and speed $s=\frac12$ is
$$u(t,x)=\begin{cases}0,&x<t/2,\\1,&x>t/2.\end{cases}$$
It is a distributional weak solution with those data because the
Rankine--Hugoniot condition holds. It is not a Kruzhkov entropy solution: for
the convex entropy $\eta(u)=\tfrac12u^2$ with flux $q(u)=\tfrac13u^3$, the jump
production is $[q]-s[\eta]=\tfrac13-\tfrac14=\tfrac1{12}>0$. It also fails the
Kruzhkov test $k=\tfrac12$: $q_k(0)=\tfrac18$, $q_k(1)=\tfrac38$, and
$[\eta_k]=0$, so $[q_k]-s[\eta_k]=\tfrac14>0$. For the same Riemann data,
[[ex-burgers-rarefaction-riemann-solution]] gives an entropy solution, so the
Rankine--Hugoniot condition alone admits both the expansion shock and the
entropy rarefaction
([[thm-rankine-hugoniot-jump-condition]],
[[def-kruzhkov-entropy-solution]],
[[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, the Riemann datum $u_0=\mathbf 1_{(0,\infty)}$, the expansion-shock profile $u$ with speed $s=\tfrac12$, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] Interface computation: for a single jump with traces $u^-$ on the left and $u^+$ on the right of the ray $x=st$, the weak residual against a test concentrated near the ray is proportional to $[f]-s[u]$ with $[h]=h(u^+)-h(u^-)$; the Rankine--Hugoniot condition $s[u]=[f]$ makes it vanish, so a jump profile with that condition is a distributional weak solution ([[thm-rankine-hugoniot-jump-condition]], [[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

[F2] Entropy production at a jump: for an entropy pair $(\eta,q)$ the distribution $\partial_t\eta(u)+\partial_xq(u)$ equals $\bigl([q]-s[\eta]\bigr)\delta_\Gamma$, so the entropy inequality holds iff $[q]-s[\eta]\le0$; this is the general chord condition, and for the Kruzhkov pairs $\eta_k(s)=|s-k|$, $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ the same test applies ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]], [[def-kruzhkov-entropy-solution]], [[def-convex-entropy-entropy-flux-pair]]).

[F3] For the same Riemann data the Burgers rarefaction $u(t,x)=0$ for $x\le0$, $x/t$ for $0<x<t$, $1$ for $x\ge t$ is the entropy solution ([[ex-burgers-rarefaction-riemann-solution]]).

## Proof

**Proof technique:** direct.

1.1 **The shock is a weak solution.** With $u^-=0$, $u^+=1$: $[u]=1$ and $[f]=\tfrac12$, so $s=\tfrac12$ satisfies $s[u]=\tfrac12=[f]$. By [F1] the interface coefficient of the weak residual vanishes, so $u$ is a distributional weak solution of $u_t+\partial_x(\tfrac12u^2)=0$ with datum $u_0$; the strong local $L^1$ trace is immediate because $u(t,\cdot)$ equals the step datum except on the interval $(0,t/2)$ of length $t/2$. [F1]


1.2 **Failure of the convex entropy inequality.** Take $\eta(u)=\tfrac12u^2$ and $q(u)=\tfrac13u^3$, so that $q'(u)=u^2=\eta'(u)f'(u)$ and $(\eta,q)$ is a convex entropy pair. The jump coefficients are $[\eta]=\tfrac12(1^2-0^2)=\tfrac12$ and $[q]=\tfrac13(1^3-0^3)=\tfrac13$, so by [F2] the entropy production is $[q]-s[\eta]=\tfrac13-\tfrac12\cdot\tfrac12=\tfrac13-\tfrac14=\tfrac1{12}>0$. The entropy inequality fails strictly at the jump. [F2]


1.3 **Failure in the Kruzhkov family.** For $k=\tfrac12$, $\eta_k(0)=|0-\tfrac12|=\tfrac12=\eta_k(1)$, so $[\eta_k]=0$; and $q_k(s)=\operatorname{sgn}(s-\tfrac12)(\tfrac12s^2-\tfrac18)$ gives $q_k(0)=(-1)(-\tfrac18)=\tfrac18$ and $q_k(1)=\tfrac12-\tfrac18=\tfrac38$, so $[q_k]=\tfrac38-\tfrac18=\tfrac14$. Hence $[q_k]-s[\eta_k]=\tfrac14>0$, directly violating a Kruzhkov entropy inequality that every entropy solution must satisfy. Equivalently, the chord through $(0,0)$ and $(1,\tfrac12)$ lies above the convex parabola, so the one-sided chord condition of [F2] fails for the upward jump $u^-=0<u^+=1$. [F2]


2.1 **Conclusion.** The expansion shock is a distributional weak solution with the prescribed data but fails the entropy condition, while the rarefaction of [F3] is the entropy solution of the same Riemann problem. Thus the Rankine--Hugoniot condition and the weak formulation alone admit non-entropic solutions, and an entropy selection principle is needed. [F2, F3, step 1.1, step 1.2, step 1.3] ∎
