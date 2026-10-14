---
id: def-dqm-submodel-through-a-law
kind: definition
title: A dominated differentiable-in-quadratic-mean submodel
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - def-axiom-of-choice
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
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2, Definition 1.6
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Definition

Let $\mathcal M$ be a model of probability measures on a measurable space $(\mathcal X,\mathcal A)$, let $\epsilon>0$, and let $t\mapsto P_t\in\mathcal M$ be a path for $0\le t<\epsilon$ with $P_0=P$. It is **dominated by a common measure** when one supplied sigma-finite positive measure $\mu$ satisfies $P_t\ll\mu$ for every $t$ ([[def-dominated-statistical-experiment]]). Write $p_t=dP_t/d\mu$ and $p=p_0$ for simultaneously supplied nonnegative density versions; the existence and normalization of each density are the Radon–Nikodym properties in [[def-likelihood-density]] and [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]. The Axiom of Choice is the library convention for selecting such a family of versions along a path ([[def-axiom-of-choice]]). The DQM property below is unchanged by replacing any $p_t$ by another version, since each $L^2(\mu)$ norm is unchanged by a $\mu$-null modification.

The path is **differentiable in quadratic mean at $0$**, with **score** $s\in L^2(P)$, when

$$\left\|\sqrt{p_t}-\sqrt p-\frac{t}{2}s\sqrt p\right\|_{L^2(\mu)}=o(t)\qquad(t\downarrow0).$$

Here $o(t)$ means that the displayed norm divided by $t$ tends to $0$ as $t\downarrow0$; $L^2(P)$ and $L^2(\mu)$ are quotient spaces modulo almost-everywhere equality ([[def-l-p-space-as-a-quotient-by-null-functions]]). The definition is directional. A two-sided regular submodel qualifies by restricting it to $t\ge0$. No mean-zero condition is assumed in this definition.
