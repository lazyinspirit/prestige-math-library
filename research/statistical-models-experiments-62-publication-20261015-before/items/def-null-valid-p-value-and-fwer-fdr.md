---
id: def-null-valid-p-value-and-fwer-fdr
kind: definition
title: Null-valid p-values and familywise and false-discovery error rates
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-p-value
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jelle J. Goeman and Aldo Solari, The Sequential Rejection Principle of Familywise Error Control, Section 3, Eq. (11)"
      url: "https://arxiv.org/pdf/1211.3313"
    - title: "William Fithian, STAT 210A Lecture 26: Multiple Testing, PDF pp. 1–2 and 12–13"
      url: "https://www.stat.berkeley.edu/~wfithian/courses/stat210a/lectures/lecture26-F21.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment ([[def-statistical-experiment]]), and fix an integer $m\ge1$ before observing the data. Write $[m]=\{1,\ldots,m\}$. A **finite family of null hypotheses** is a fixed list $H_{01},\ldots,H_{0m}$ with each $H_{0i}\subseteq\Theta$. For each $i\in[m]$, let $p_i:\mathcal X\to[0,1]$ be a p-value statistic ([[def-p-value]]). It is **valid for $H_{0i}$** when

$$P_\theta\{x:p_i(x)\le u\}\le u\qquad(\theta\in H_{0i},\ 0\le u\le1).$$

If $H_{0i}=\varnothing$, this universal condition is vacuous and $i$ never belongs to a true-null index set. For a nonempty null it agrees with the published valid-p-value definition. The family may have any joint dependence among its p-values. Validity is required only under the corresponding null laws; a p-value statistic alone does not imply validity.

For $\theta\in\Theta$, the **true-null index set** is
$$I_0(\theta):=\{i\in[m]:\theta\in H_{0i}\}.$$
A fixed deterministic multiple-testing rule is a family of measurable rejection events $D_i\in\mathcal A$, one for each $i\in[m]$. Its total number of rejections and number of false rejections at parameter $\theta$ are
$$R:=\sum_{i=1}^m\mathbf1_{D_i},\qquad V_\theta:=\sum_{i\in I_0(\theta)}\mathbf1_{D_i}.$$
Its **familywise error rate (FWER)** at $\theta$ is $P_\theta(V_\theta\ge1)$, and its **false discovery rate (FDR)** at $\theta$ is
$$E_\theta\!\left[\frac{V_\theta}{R\vee1}\right],$$
where $R\vee1=\max\{R,1\}$. The random variable $V_\theta/(R\vee1)$ is the **false discovery proportion (FDP)**. Strong FWER control at level $\alpha$ means that this FWER is at most $\alpha$ for every $\theta\in\Theta$, including parameters for which only some of the null hypotheses are true. The denominator convention makes the FDP zero when no hypothesis is rejected.

If the testing rule uses auxiliary randomization, include that randomizer in the observation and its sigma-algebra before defining the rejection events $D_i$.

These quantities are well-defined: the finite sums of indicators are measurable, $0\le V_\theta\le R$, and $0\le V_\theta/(R\vee1)\le1$, so the ratio is integrable under each probability law ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).
