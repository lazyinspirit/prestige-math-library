---
id: def-vc-pac-learning-criterion
kind: definition
title: "Measurable PAC learning criteria for a possibly infinite VC class"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-realizable-and-agnostic-pac
  - def-population-and-empirical-risk
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapters 2–4"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Definition

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $H$ be a nonempty class of measurable functions $h:\mathcal X\to\{0,1\}$, put $\mathcal Z=\mathcal X\times\{0,1\}$ with its product sigma-algebra, and let $P$ be a probability law on $\mathcal Z$. For a fixed sample size $m\ge1$, a **risk-measurable learning rule** is a map $A:\mathcal Z^m\to H$ for which the real-valued maps $S\mapsto R_P(A(S))$ and $S\mapsto\widehat R_S(A(S))$ are measurable; if the class infimum is used, also require $S\mapsto\inf_{h\in H}\widehat R_S(h)$ to be measurable. The **realizable condition** is that some $h^*\in H$ has $R_P(h^*)=0$. The rule is **consistent** on a sample when $\widehat R_S(A(S))=0$, an **exact ERM** when it attains $\inf_{h\in H}\widehat R_S(h)$, and an **$\eta$-approximate ERM** for finite $\eta\ge0$ when $\widehat R_S(A(S))\le\inf_{h\in H}\widehat R_S(h)+\eta$.

For $0<\epsilon,\delta<1$, $A$ is **realizable $(\epsilon,\delta)$-PAC** on $H$ if for every law $P$ satisfying the realizable condition, $\mathbb P_{S\sim P^m}\{R_P(A(S))\le\epsilon\}\ge1-\delta$. It is **agnostic $(\epsilon,\delta)$-PAC** if for every law $P$ on $\mathcal Z$, $\mathbb P_{S\sim P^m}\{R_P(A(S))-\inf_{h\in H}R_P(h)\le\epsilon\}\ge1-\delta$. These are probability criteria only; no existence, attainment, measurability of a selector beyond the stated risk maps, or computational-efficiency claim is implicit. When $H$ is finite and $A$ is measurable into the discrete space $H$, these probability formulas are the criteria in the finite-class definition.

## Definition references

[[def-realizable-and-agnostic-pac]]: gives the same realizable and agnostic probability criteria when $H$ is finite and the learner takes values in that finite class.

[[def-population-and-empirical-risk]]: population risk is the expected nonnegative loss and empirical risk is its sample average; here the loss is binary zero-one loss.

[Mohri et al., Chapter 2](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): finite-class PAC criteria and risk notation.

[Shalev-Shwartz and Ben-David, Chapters 2–4](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf): PAC learning and VC-dimension framework.
