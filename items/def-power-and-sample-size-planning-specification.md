---
id: def-power-and-sample-size-planning-specification
kind: definition
title: "Power and sample-size planning specifications"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-randomized-test
  - def-test-size-and-power
  - def-natural-numbers
  - def-measurable-function-between-measurable-spaces
  - lem-least-feasible-sample-size-exists
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §§7.1–7.7, printed pp. 149–161"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §7.2.2.2, PDF pp. 2019–2021"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/E-Handbook.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $\mathsf E_d=((\mathcal X_d,\mathcal A_d),\Theta,(P_{\theta,d})_{\theta\in\Theta})$ be the specified statistical experiment for each candidate plan $d$ in a nonempty or empty candidate set $\mathcal D$. A plan records its sampling or assignment law, a permitted allocation vector $\mathbf n(d)=(n_1,\ldots,n_g)$ for an integer $g\ge1$, with nonnegative integer counts $n_j$, and its total sample size $n(d)=\sum_{j=1}^g n_j\in\mathbb N_{\ge1}$. Which allocations are permitted, including any positive lower bounds, capacity limits, or costs, is part of $\mathcal D$.

For a test plan, fix disjoint nonempty hypotheses $\Theta_0,\Theta_1\subseteq\Theta$, a measurable randomized test function $\varphi_d:\mathcal X_d\to[0,1]$ ([[def-randomized-test]]), and a nonempty target set $\Theta_\star\subseteq\Theta_1$. Its power at $\theta$ is $\pi_d(\theta)=E_{\theta,d}[\varphi_d(X)]$, its size is $s_d=\sup_{\theta\in\Theta_0}\pi_d(\theta)$, and its type-II error at a specified alternative $\theta$ is $1-\pi_d(\theta)$ ([[def-test-size-and-power]]). A target effect is the declared alternative parameter or contrast, for example $\delta=\mu_1-\mu_0$ in a scalar location model. The sidedness is fixed by the test's predeclared rejection region: an upper or lower tail, or a stated two-sided region such as $\{|T_d-c_0|>c\}$; no conversion from a one-sided cutoff to a two-sided cutoff is implicit.

A test-based request specifies nominal size $\alpha\in[0,1]$, target type-II error $\beta\in[0,1]$, and the target set $\Theta_\star$. A plan meets it when $s_d\le\alpha$ and $\pi_d(\theta)\ge1-\beta$ for every $\theta\in\Theta_\star$, together with every other declared design constraint.

An optional precision request specifies a scalar estimand $\psi:\Theta\to\mathbb R$, measurable endpoint functions $L_d,U_d:(\mathcal X_d,\mathcal A_d)\to(\mathbb R,\mathcal B(\mathbb R))$ with $L_d\le U_d$ and interval $C_d(X)=[L_d(X),U_d(X)]$, a target set $\Theta_\star$, coverage target $1-\gamma$ with $\gamma\in[0,1]$, maximum width $w>0$, and width assurance $1-\eta$ with $\eta\in[0,1]$. It is met when, for every $\theta\in\Theta_\star$,
$$P_{\theta,d}\{\psi(\theta)\in C_d(X)\}\ge1-\gamma \quad\text{and}\quad P_{\theta,d}\{U_d(X)-L_d(X)\le w\}\ge1-\eta.$$
Thus precision is a property of the stated interval procedure and sampling law, not just a target effect label.

Let $\mathcal F\subseteq\mathcal D$ be the plans meeting all selected test, precision, allocation, and resource conditions. The planned sample size is $\text{none}$ if $\mathcal F=\varnothing$, and otherwise is the least integer in $\{n(d):d\in\mathcal F\}$. Among plans tied at that size, the specification may return any one or a declared tie-breaking choice. The definition is an extensional selection rule over its declared candidates; a finite search algorithm is a separate procedure.

## Remarks

The condition that a plan meets a target is always tied to its declared model, observation and assignment laws, test or interval, effect, allocation, sidedness, and constraints. No model-adequacy or universal power guarantee follows from the planning record.

The least-size or none characterization is extensional on the full candidate set. Operational evaluation over all positive sizes is supplied by [[alg-positive-integer-power-sample-size-search]] and its separate correctness theorem. Its ascending branch requires a feasible size to terminate; reporting none over the whole domain requires a sound global certificate. The finite-list algorithm retains its distinct supplied-list guarantee.
