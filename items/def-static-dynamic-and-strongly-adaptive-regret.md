---
id: def-static-dynamic-and-strongly-adaptive-regret
kind: definition
title: "Static, dynamic, interval, and strongly adaptive regret"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-online-decision-protocol, def-adversary-and-feedback-model, def-expectation-of-a-nonnegative-or-integrable-random-variable]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.1, PDF pp. 23–24: static regret; §§10.1–10.2.1, PDF pp. 190–194: dynamic regret, path length, adaptive regret, and strongly adaptive algorithms."
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§4.4, PDF pp. 68–69 / printed pp. 60–61: expected stochastic reward regret, finite means, and comparator attainment."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.1.1, PDF pp. 148–149: regret against a best fixed comparator in hindsight."
    - title: "Amit Daniely, Alon Gonen, and Shai Shalev-Shwartz, Strongly Adaptive Online Learning"
      url: "https://proceedings.mlr.press/v37/daniely15.pdf"
      locator: "Section 1.1, PDF p. 2: interval regret, uniform environment criterion, and expectation convention for randomized protocols."
verification:
  precheck: n/a
---

## Definition

Let a finite-horizon online protocol have horizon $T$, action set $K$, round losses $f_t:K\to\mathbb R$, and learner choices $x_t\in K$. Whenever a minimum below is used, assume it is finite and attained. For a fixed comparator $u\in K$, the realized regret is
$$
R_T(u):=\sum_{t=1}^T f_t(x_t)-\sum_{t=1}^T f_t(u).
$$
The **static regret** is
$$
R_T^{\rm stat}:=\sum_{t=1}^T f_t(x_t)-\min_{u\in K}\sum_{t=1}^T f_t(u).
$$
For randomized learners or environments, **expected regret** is the expectation of the specified regret random variable over their joint randomness, when that random variable is measurable and integrable. In a stochastic finite-arm reward model with means $(\mu_i)_{i\in[N]}$, let $\mu^*:=\max_{i\in[N]}\mu_i$. The **pseudo-regret** is the random variable
$$
\bar R_T:=\sum_{t=1}^T(\mu^*-\mu_{A_t}),
$$
whereas the **realized reward regret** is
$$
R_T^{\rm rew}:=\sum_{t=1}^T(\mu^*-Y_t).
$$

For dynamic comparators, suppose $K\subseteq\mathbb R^d$ for a positive integer $d$ and fix a norm $\|\cdot\|:\mathbb R^d\to[0,\infty)$, meaning $\|v\|=0$ exactly when $v=0$, $\|\lambda v\|=|\lambda|\|v\|$ for every $\lambda\in\mathbb R$, and $\|v+w\|\le\|v\|+\|w\|$. Given a comparator sequence $u_{1:T}=(u_1,\ldots,u_T)\in K^T$, the **dynamic regret** and its **path length** are
$$
R_T^{\rm dyn}(u_{1:T}):=\sum_{t=1}^T f_t(x_t)-\sum_{t=1}^T f_t(u_t),\qquad P(u_{1:T}):=1+\sum_{t=1}^{T-1}\|u_t-u_{t+1}\|.
$$
For a nonempty contiguous integer interval $I=[r,s]$ with $1\le r\le s\le T$, its **interval regret** is
$$
R_I:=\sum_{t=r}^s f_t(x_t)-\min_{u\in K}\sum_{t=r}^s f_t(u),
$$
and the **adaptive regret** is $\max_{1\le r\le s\le T}R_{[r,s]}$. For an algorithm $A$ producing the choices $x_1,\ldots,x_T$, write $R_I(A)$ for its interval regret on $I$. The algorithm is **strongly adaptive** relative to a specified loss, feedback, adversary, and comparator class precisely when there are a stated base algorithm $A_0$, constants $C>0$ and $p\ge0$, and a specified bound $B_{A_0}(n)$ on $A_0$'s static regret at horizon $n$ in that same class, such that, uniformly over every positive horizon $T$ and every environment in that class, for every nonempty contiguous interval $I\subseteq\{1,\ldots,T\}$,
$$
R_I(A)\le C\bigl(\log(eT)\bigr)^p B_{A_0}(|I|),
$$
where $\log$ is the natural logarithm and $|I|=s-r+1$; $A_0$, $B_{A_0}$, $C$, and $p$ are fixed independently of $T$, $I$, and the environment. The displayed criterion is pathwise, including for randomized protocols. **Strong adaptivity in expectation** instead requires $\mathbb E[R_I(A)]$ to satisfy the displayed bound for every deterministic interval $I$, with measurable, integrable interval regrets and with $B_{A_0}(n)$ an expected static-regret bound in the same class. Almost-sure or high-probability versions must be explicitly qualified: for each horizon, all interval inequalities must hold simultaneously with probability one or at least the stated $1-\delta$, respectively, and the base bound must use the same probability mode with any dependence on $\delta$ specified. Strong adaptivity is a regret property relative to intervals; it does not imply anytime statistical validity.

## Definition references

[[def-online-decision-protocol]]: the horizon, action set, round losses, and learner choices used in the regret formulas.

[[def-adversary-and-feedback-model]]: the stochastic finite-arm model and the distinction between its reward means and adversarial losses.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expected regret is an integral on the underlying probability space when the regret is measurable and integrable.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §1.1, PDF pp. 23–24; §§10.1–10.2.1, PDF pp. 190–194.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §4.4, PDF pp. 68–69.

[Tengyu Ma, *Lecture Notes for Machine Learning Theory*](https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf): §11.1.1, PDF pp. 148–149.

[Amit Daniely, Alon Gonen, and Shai Shalev-Shwartz, *Strongly Adaptive Online Learning*](https://proceedings.mlr.press/v37/daniely15.pdf): §1.1, PDF p. 2; expectation is the randomized convention there, while the modes above are distinguished explicitly.
