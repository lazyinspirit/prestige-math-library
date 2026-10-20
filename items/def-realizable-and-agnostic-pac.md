---
id: def-realizable-and-agnostic-pac
kind: definition
title: "Realizable and agnostic PAC learning"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-identically-distributed-and-iid-random-variables
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §§2.1–2.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapters 2–4"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Definition

Let $(\mathcal X,\Sigma_X)$ be a measurable instance space, let the binary label space $\{0,1\}$ have its discrete sigma-algebra, and let $\mathcal H$ be a finite nonempty class of measurable classifiers $h:\mathcal X\to\{0,1\}$. For a probability law $P$ on $\mathcal X\times\{0,1\}$, write $R_P(h)=P\{(x,y):h(x)\ne y\}$ for the population zero-one risk. A sample of size $m\ge1$ consists of $m$ independent observations with common law $P$; write $\widehat R_S(h)=m^{-1}\sum_{i=1}^m\mathbf 1\{h(X_i)\ne Y_i\}$ for its empirical zero-one risk. The law $P$ is realizable by $\mathcal H$ if some $h^*\in\mathcal H$ satisfies $R_P(h^*)=0$.

Put $\mathcal Z=\mathcal X\times\{0,1\}$ with its product sigma-algebra. For fixed $m\ge1$, a deterministic learner is a measurable map $A:\mathcal Z^m\to\mathcal H$, where the finite set $\mathcal H$ has its discrete sigma-algebra. For a law $P$ on $\mathcal Z$, let $S=(Z_1,\ldots,Z_m)$ be an IID sample with common law $P$, and write $\mathbb P_S$ for probability under its joint law. For $0<\epsilon,\delta<1$, the learner is $(\epsilon,\delta)$-PAC realizable if, for every law $P$ realizable by $\mathcal H$, $\mathbb P_S\{R_P(A(S))\le\epsilon\}\ge1-\delta$. It is agnostic $(\epsilon,\delta)$-PAC if, for every law $P$ on $\mathcal Z$, $\mathbb P_S\{R_P(A(S))-\inf_{h\in\mathcal H}R_P(h)\le\epsilon\}\ge1-\delta$. A randomized learner uses a measurable probability space $(\mathcal U,\Sigma_U,Q)$ and a measurable output map $A:\mathcal Z^m\times\mathcal U\to\mathcal H$, with a seed $U\sim Q$ independent of $S$; in both criteria replace $A(S)$ by $A(S,U)$ and $\mathbb P_S$ by the joint probability $\mathbb P_{S,U}$. All risks and the infimum are finite because the zero-one loss is bounded by one. These definitions impose no computational-efficiency claim.

## Definition references

[[def-supervised-learning-problem]]: a supervised problem specifies measurable instance and label spaces, a joint law, measurable predictors, and a measurable loss.

[[def-population-and-empirical-risk]]: population risk is the expected loss and empirical risk is the sample average of that loss.

[[def-identically-distributed-and-iid-random-variables]]: IID observations are mutually independent and have the same law.
