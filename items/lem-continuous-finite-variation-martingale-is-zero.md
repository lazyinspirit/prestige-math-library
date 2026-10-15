---
id: lem-continuous-finite-variation-martingale-is-zero
kind: lemma
title: "A continuous finite-variation martingale is constant"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-continuous-time-adapted-process-and-martingale
  - def-conditional-expectation-as-an-ae-class
  - thm-taking-out-what-is-known
  - thm-dominated-convergence
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-bounded-variation-and-total-variation
  - thm-heine-borel-r
  - thm-heine-cantor-r
  - def-law-modification-and-indistinguishability-of-processes
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.3, PDF pp. 3–4"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"

---

## Statement

Let $D=(D_t)_{0\le t\le T}$ be a continuous martingale relative to a
filtration $(\mathcal F_t)$, with $D_0=0$. Suppose each path has finite total
variation $V_T(D)$ and $\mathbb E V_T(D)<\infty$. Then $D$ is indistinguishably
zero on $[0,T]$.

## Facts & Assumptions

**Given:** A finite horizon $T$, a filtered probability space, and a continuous adapted martingale $D$ with $D_0=0$ and integrable pathwise total variation.

[F1] The all-pairs martingale identity holds at every $s\le t$, and the continuous-path hypothesis supplies a measurable probability-one event on which each path of $D$ is continuous. ([[def-continuous-time-adapted-process-and-martingale]])

[F2] A bounded $\mathcal F_s$-measurable factor can be taken outside conditional expectation given $\mathcal F_s$. ([[thm-taking-out-what-is-known]])

[F3] Dominated convergence passes limits through integrals under an integrable majorant. ([[thm-dominated-convergence]])

[F4] Total variation bounds every partition sum of absolute increments. ([[def-bounded-variation-and-total-variation]])

[F5] Every finite closed interval $[0,T]$ is compact. ([[thm-heine-borel-r]])

[F6] A continuous real function on a compact subset of $\mathbb R$ is uniformly continuous. ([[thm-heine-cantor-r]])

[F7] A nonnegative random variable with expectation zero vanishes almost surely. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F8] Indistinguishability means equality for every time outside one measurable probability-one event. ([[def-law-modification-and-indistinguishability-of-processes]])

[A1] AC is inherited from the conditional-expectation interface used by the continuous-time martingale definition. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $R>0$ and define $\phi_R(x)=\max(-R,\min(x,R))$ and $$G_R(x)=\begin{cases}x^2/2,&|x|\le R,\\R|x|-R^2/2,&|x|\ge R.\end{cases}$$ The explicit piecewise formula gives $G_R'=\phi_R$; $\phi_R$ is bounded by $R$ and is $1$-Lipschitz, while $G_R\ge0$ and $G_R(x)=0$ exactly when $x=0$. Splitting an interval at $-R$ and $R$ if needed and using the Lipschitz bound gives, for all $x,y\in\mathbb R$, $$|G_R(y)-G_R(x)-\phi_R(x)(y-x)|\le\tfrac12|y-x|^2.$$ [construct, algebra]

2.1 Fix $t\in(0,T]$ and deterministic partitions $0=t_0^m<\cdots<t_{q_m}^m=t$ with mesh tending to zero. Put $$S_m=\sum_{j=0}^{q_m-1}\phi_R(D_{t_j^m})(D_{t_{j+1}^m}-D_{t_j^m}).$$ Each coefficient is bounded and $\mathcal F_{t_j^m}$-measurable. The martingale identity and [F2] give $\mathbb E S_m=0$. The estimate of step 1.1 and the total-variation bound [F4] imply $$|S_m-G_R(D_t)+G_R(D_0)|\le\tfrac12\sum_j|D_{t_{j+1}^m}-D_{t_j^m}|^2\le\tfrac12\max_j|D_{t_{j+1}^m}-D_{t_j^m}|\,V_T(D).$$ On the probability-one continuity event in [F1], compactness [F5] and Heine--Cantor [F6] make the maximum increment tend to zero. Thus $S_m\to G_R(D_t)$ almost surely, since $D_0=0$. Also $|S_m|\le R V_T(D)$, an integrable bound by the hypothesis. Dominated convergence [F3] yields $\mathbb E G_R(D_t)=0$. Since $G_R$ is nonnegative and vanishes only at zero, [F7] gives $D_t=0$ almost surely. [A1, F1, F2, F3, F4, F5, F6, F7, given, construct]

3.1 The conclusion also holds at $t=0$ because $D_0=0$. For every rational $r\in[0,T]$, step 2.1 gives a measurable probability-one event on which $D_r=0$. Intersect these countably many events with the probability-one continuity event from [F1]. On the resulting measurable probability-one event, continuity and density of the rationals give $D_t=0$ for every $t\in[0,T]$. By [F8], $D$ is indistinguishably zero. [F1, F8, step 2.1, given, construct] ∎

## Source notes

Bass's Section 2.3 discusses càdlàg martingale decompositions and the jump-bracket framework. The bounded-integrand partition argument above supplies the finite-horizon finite-variation martingale proof used here.
