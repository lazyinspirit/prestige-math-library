---
id: "thm-continuity-equation-implies-ac2"
kind: theorem
title: "Finite-action continuity equations generate AC2 Wasserstein curves"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-continuity-equation-with-finite-action", "def-ac2-curves-in-wasserstein-two", "thm-superposition-for-finite-action-continuity-equations", "thm-metric-derivative-of-ac2-wasserstein-curves", "thm-minkowski-integral-inequality", "def-axiom-of-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is inherited from the superposition and scalar metric-derivative suppliers; constructing the path couplings and applying Minkowski adds no choice."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 8.3.1, PDF pp. 183–186"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume AC. Let $T>0$ and let $(\mu_t,v_t)$ be a narrowly continuous finite-action solution of the continuity equation on $[0,T]\times\mathbb R^d$. Then $t\mapsto\mu_t$ belongs to $AC^2([0,T];\mathcal P_2(\mathbb R^d))$ and, for almost every $t$,
$$|\dot\mu_t|\le\left(\int|v_t(x)|^2d\mu_t(x)\right)^{1/2}.$$

## Statement references

[[def-continuity-equation-with-finite-action]]

[[def-ac2-curves-in-wasserstein-two]]

[[thm-superposition-for-finite-action-continuity-equations]]

[[thm-metric-derivative-of-ac2-wasserstein-curves]]

[[thm-minkowski-integral-inequality]]

[[def-axiom-of-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC and the narrowly continuous finite-action solution $(\mu_t,v_t)$.

[F1] There is a probability law $\eta$ on $C([0,T];\mathbb R^d)$ whose time marginals are $\mu_t$, whose almost every path is absolutely continuous with $\dot\gamma(t)=v_t(\gamma(t))$ almost everywhere, and whose expected path action equals the Eulerian action. [[thm-superposition-for-finite-action-continuity-equations]]

[F2] Minkowski's integral inequality bounds the $L^2$ norm of a time integral by the time integral of the $L^2$ norms. [[thm-minkowski-integral-inequality]]

[F3] The metric derivative theorem identifies the least $L^2$ upper control of a Wasserstein curve with its metric derivative. [[thm-metric-derivative-of-ac2-wasserstein-curves]]

## Proof
1.1 For $0\le s<t\le T$, push $\eta$ forward by $\gamma\mapsto(\gamma(s),\gamma(t))$ to obtain a coupling of $\mu_s,\mu_t$ by [F1]. For almost every path, absolute continuity gives $|\gamma(t)-\gamma(s)|\le\int_s^t|\dot\gamma(r)|dr$. Minkowski [F2], applied with the path probability space and Lebesgue measure on $[s,t]$, yields $W_2(\mu_s,\mu_t)\le\left(\int\left(\int_s^t|\dot\gamma(r)|dr\right)^2d\eta\right)^{1/2}\le\int_s^t\left(\int|\dot\gamma(r)|^2d\eta\right)^{1/2}dr.$ The marginal identity and the pathwise velocity identity in [F1] identify the inner integral for almost every r as $\int|v_r(x)|^2d\mu_r(x)$. Put $g(r)=(\int|v_r|^2d\mu_r)^{1/2}$. Finite action gives $g\in L^2(0,T)$, and the displayed bound for every interval implies W2-continuity and the defining $AC^2$ upper-control inequality. [given, F1, F2]

2.1 By [F3], the metric derivative exists almost everywhere and is no larger than any nonnegative $L^2$ upper control. Applying it to $g$ from step 1.1 gives $|\dot\mu_t|\le g(t)$ almost everywhere, as claimed. [F3, step 1.1] ∎
