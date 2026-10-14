---
id: def-anytime-valid-p-value-process
kind: definition
title: Anytime-valid p-value processes
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-filtration-and-filtered-probability-space
  - def-discrete-stopping-time
  - def-randomized-test
  - lem-measurable-rejection-function-defines-randomized-test
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §2.7"
      url: https://arxiv.org/pdf/2210.01948
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Lemma 3 and §6"
      url: https://arxiv.org/pdf/1810.08240
---

## Definition

Let $\mathcal P_0$ be a family of probability laws on a common discrete filtered
probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0})$. A process
$p=(p_t)_{t\ge0}$ is an **anytime-valid p-value process** for $\mathcal P_0$ if
each $p_t$ is $\mathcal F_t$-measurable with values in $[0,1]$ and, for every
$P\in\mathcal P_0$ and $\alpha\in(0,1)$,
$$P(\exists t\ge0:p_t\le\alpha)\le\alpha.$$

At time $t$, the rejection rule at threshold $\alpha$ is the
$\mathcal F_t$-measurable test function $\varphi_{t,\alpha}
=\mathbf 1_{\{p_t\le\alpha\}}$ in the sense of
[[def-randomized-test]]: the indicator supplies a binary probability kernel by
[[lem-measurable-rejection-function-defines-randomized-test]]. For any stopping time $\tau:\Omega\to\mathbb N_0\cup\{\infty\}$
[[def-discrete-stopping-time]], the rejection event is
$$\{\tau<\infty,\ p_\tau\le\alpha\}=\bigcup_{t\ge0}\bigl(\{\tau=t\}\cap\{p_t\le\alpha\}\bigr).$$
For $t=0$, $\{\tau=t\}=\{\tau\le0\}\in\mathcal F_0$; for $t\ge1$,
$\{\tau=t\}=\{\tau\le t\}\setminus\{\tau\le t-1\}\in\mathcal F_t$ by the
stopping-time condition and filtration property. Thus each term is in
$\mathcal F_t$, so this event is measurable and is contained
in the all-times crossing event; the definition therefore controls rejection
after data-dependent stopping.
