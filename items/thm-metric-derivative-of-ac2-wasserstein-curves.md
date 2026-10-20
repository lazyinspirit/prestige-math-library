---
id: "thm-metric-derivative-of-ac2-wasserstein-curves"
kind: theorem
title: "Metric derivatives of AC2 Wasserstein curves"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "def-ac2-curves-in-wasserstein-two", "thm-wasserstein-two-is-a-metric", "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions", "thm-first-fundamental-theorem-of-calculus-for-l-one", "thm-holder-inequality-for-integrals", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-dependent-choice", "def-countable-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "The scalar absolutely-continuous FTC requires Countable and Dependent Choice; AC supplies both. The distance family is explicitly indexed by rational times."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 1.1.2"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.2"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume the Axiom of Choice. If $T>0$ and $\mu\in AC^2([0,T];\mathcal P_2(\mathbb R^d))$, then the metric derivative
$$|\dot\mu_t|=\lim_{h\to0}\frac{W_2(\mu_{t+h},\mu_t)}{|h|}$$
exists for almost every $t\in(0,T)$, is measurable and belongs to $L^2(0,T)$. For all $0\le s\le t\le T$,
$$W_2(\mu_s,\mu_t)\le\int_s^t|\dot\mu_r|dr.$$
It is the least nonnegative square-integrable upper control: if $g\in L^2(0,T)$ and $W_2(\mu_s,\mu_t)\le\int_s^t g(r)dr$ for all $s\le t$, then $|\dot\mu_t|\le g(t)$ almost everywhere.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[def-ac2-curves-in-wasserstein-two]]

[[thm-wasserstein-two-is-a-metric]]

[[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[[thm-first-fundamental-theorem-of-calculus-for-l-one]]

[[thm-holder-inequality-for-integrals]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 1.1.2](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.2](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC and a curve $\mu\in AC^2([0,T];\mathcal P_2(\mathbb R^d))$ with an $L^2$ upper control $g$.

[F1] A real absolutely continuous function on a compact interval is differentiable almost everywhere and equals its initial value plus the integral of its derivative; the indefinite integral of an $L^1$ function has derivative equal to that integrand almost everywhere. These scalar facts require Countable and Dependent Choice. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[thm-first-fundamental-theorem-of-calculus-for-l-one]] [[def-countable-choice]] [[def-dependent-choice]]

[F2] AC implies the countable- and dependent-choice principles in [F1]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F4] Holder on the finite interval gives $g\in L^1(0,T)$ from $g\in L^2(0,T)$. [[thm-holder-inequality-for-integrals]]

[F3] The Wasserstein distance satisfies the triangle inequality, hence the reverse triangle inequality for distance to a fixed point. [[thm-wasserstein-two-is-a-metric]]

## Proof
1.1 Let $D=\mathbb Q\cap[0,T]$ together with $0,T$. For each $q\in D$, set $f_q(t)=W_2(\mu_t,\mu_q)$. The reverse triangle inequality and the assumed control give $|f_q(t)-f_q(s)|\le\int_s^t g(r)dr$, so $f_q$ is absolutely continuous. By [F1], it has a derivative almost everywhere, and because $g\in L^1$ by Holder, at common differentiability points of $f_q$ and $G(t)=\int_0^t g(r)dr$, difference quotients give $|f_q'(t)|\le g(t)$. Since $D$ is countable, outside one null set all these derivatives exist and are bounded by $g$. Define $m(t)=\sup_{q\in D}|f_q'(t)|$ there and set $m=0$ on the null set. Difference quotients along $h=1/n$ give measurable versions of the scalar derivatives, so $m$ is measurable; also $0\le m\le g$ almost everywhere and hence $m\in L^2(0,T)$. [given, F1, F2, F3, F4]

2.1 For any $s,t$, continuity of the curve and density of $D$ imply $W_2(\mu_s,\mu_t)=\sup_{q\in D}|f_q(t)-f_q(s)|.$ The inequality from right to left is the reverse triangle inequality. For the other direction take $q_j\in D$ with $q_j\to s$; then $f_{q_j}(s)\to0$ and $f_{q_j}(t)\to W_2(\mu_t,\mu_s)$. For each q, [F1] and step 1.1 give $|f_q(t)-f_q(s)|\le\int_s^t|f_q'(r)|dr\le\int_s^t m(r)dr$. Taking the supremum proves $W_2(\mu_s,\mu_t)\le\int_s^t m(r)dr$. [F1, F3, step 1.1]

3.1 The function $H(t)=\int_0^t m(r)dr$ is absolutely continuous, and [F1] gives $H'(t)=m(t)$ almost everywhere. At a time t where $H$ is differentiable and every $f_q$ is differentiable, step 2.1 gives $\limsup_{h\to0}\frac{W_2(\mu_{t+h},\mu_t)}{|h|}\le m(t),$ while $W_2(\mu_{t+h},\mu_t)\ge|f_q(t+h)-f_q(t)|$ gives a lower limit at least $|f_q'(t)|$ for every q. Taking the supremum yields a lower limit at least $m(t)$. Thus the metric derivative exists and equals $m(t)$ almost everywhere. The interval bound and square integrability follow from step 2.1 and $m\le g$. [F1, step 1.1, step 2.1]

4.1 Let h be any other nonnegative $L^2$ upper control. Repeating the scalar difference-quotient bound of step 1.1 with h gives $|f_q'(t)|\le h(t)$ almost everywhere for each q. Countability of D lets these inequalities hold off a single null set, so $m(t)\le h(t)$ there. By step 3.1, $|\dot\mu_t|=m(t)$ almost everywhere, proving leastness. [F1, step 1.1, step 3.1] ∎
