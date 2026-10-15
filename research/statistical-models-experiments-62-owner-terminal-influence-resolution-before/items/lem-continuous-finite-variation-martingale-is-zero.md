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
  - def-continuous-time-stopping-time
  - def-conditional-expectation-as-an-ae-class
  - thm-taking-out-what-is-known
  - thm-dominated-convergence
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-bounded-variation-and-total-variation
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

[F1] A continuous-time martingale is adapted, integrable at each time, and satisfies $\mathbb E[D_t\mid\mathcal F_s]=D_s$ for every $s\le t$. ([[def-continuous-time-adapted-process-and-martingale]])

[F2] $\tau$ is a stopping time when $\{\tau\le t\}\in\mathcal F_t$ for every $t$. ([[def-continuous-time-stopping-time]])

[F3] A bounded $\mathcal F_s$-measurable factor can be taken outside conditional expectation given $\mathcal F_s$. ([[thm-taking-out-what-is-known]])

[F4] Dominated convergence passes limits through event integrals. ([[thm-dominated-convergence]])

[F5] Total variation is the supremum of finite sums of absolute increments. ([[def-bounded-variation-and-total-variation]])

[F6] Indistinguishability means equality for every time outside one measurable probability-one event. ([[def-law-modification-and-indistinguishability-of-processes]])

[A1] AC is inherited from the conditional-expectation interface used by the continuous-time martingale definition. ([[def-axiom-of-choice]])

## Proof

1.1 For each $t$, define $V_t$ as the total variation of $D$ on $[0,t]$ by [F5]. Since $D$ is continuous, this is the supremum of the variation sums over partitions with rational interior points and endpoint $t$, so $V_t$ is $\mathcal F_t$-measurable; its paths are continuous and nondecreasing. For each integer $n\ge1$, let $\tau_n=\inf\{t:V_t\ge n\}\wedge T$. Continuity and monotonicity give $\{\tau_n\le t\}=\{V_t\ge n\}$ for $t<T$, so [F2] makes $\tau_n$ a bounded stopping time. The stopped path $D^{\tau_n}$ is continuous, has variation at most $n$, and is bounded by $n$. [F1, F2, F5, given, construct]

2.1 Fix $0\le s<t\le T$, $B\in\mathcal F_s$, and deterministic partitions $s=u_0<\cdots<u_m=t$ whose mesh tends to zero. Set $S_m=\sum_{j=0}^{m-1}\mathbf1_B\mathbf1_{\{\tau_n>u_j\}}(D_{u_{j+1}}-D_{u_j})$. Each coefficient is bounded and $\mathcal F_{u_j}$-measurable, so [F1] and [F3] give $\mathbb E S_m=0$. Pathwise the sum telescopes up to the first partition point after $\tau_n$; continuity gives $S_m\to\mathbf1_B(D_{t\wedge\tau_n}-D_{s\wedge\tau_n})$. Also $|S_m|\le V_T(D)$, which is integrable. By [F4], $\mathbb E[\mathbf1_B(D_{t\wedge\tau_n}-D_{s\wedge\tau_n})]=0$. Since this holds for every $B\in\mathcal F_s$, $D^{\tau_n}$ is a martingale. [A1, step 1.1, F1, F3, F4, choose]

3.1 For any deterministic partition $0=t_0<\cdots<t_m=T$, increments of the bounded martingale $D^{\tau_n}$ are square-integrable and pairwise orthogonal: for $i<j$, $\mathbb E[\Delta_iD^{\tau_n}\Delta_jD^{\tau_n}]=\mathbb E[\Delta_iD^{\tau_n}\,\mathbb E(\Delta_jD^{\tau_n}\mid\mathcal F_{t_j})]=0$. Hence $\mathbb E[(D_{T\wedge\tau_n})^2]=\sum_j\mathbb E[(\Delta_jD^{\tau_n})^2]$. The pathwise sum is at most $n\max_j|\Delta_jD^{\tau_n}|$, which tends to zero as the mesh tends to zero by continuity; it is bounded by $n^2$. Dominated convergence gives $D_{T\wedge\tau_n}=0$ almost surely. The martingale identity then gives $D_{r\wedge\tau_n}=0$ almost surely at every rational $r\in[0,T]$; continuity and countability give $D^{\tau_n}\equiv0$ almost surely. [step 2.1, F1, F4, given, algebra]

4.1 Since $V_T(D)<\infty$ almost surely, for each path some integer $n>V_T(D)$ has $\tau_n=T$. Intersecting the probability-one events from step 3.1 over the countably many $n$ therefore gives $D_t=0$ for every $t\in[0,T]$ on one probability-one event. By [F6], $D$ is indistinguishably zero. [F6, step 3.1, given, choose] ∎

## Source notes

Bass gives the finite-variation martingale and jump-bracket framework; Protter develops the general martingale and semimartingale bracket theory. The localization and partition argument above supplies the complete finite-horizon proof used here.
