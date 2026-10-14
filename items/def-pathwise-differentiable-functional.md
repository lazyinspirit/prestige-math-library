---
id: def-pathwise-differentiable-functional
kind: definition
title: Pathwise differentiability and parameter influence curves
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps: [def-axiom-of-choice, def-countable-choice, def-dqm-submodel-through-a-law, def-mean-zero-square-integrable-space, def-tangent-set, def-tangent-space, thm-dqm-score-mean-zero, thm-mean-zero-square-integrable-space-is-hilbert, thm-influence-curve-representers, thm-riesz-representation-for-hilbert-space, thm-tangent-space-is-closed-linear-subspace]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 1–3 (Springer, 2002)"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, arXiv:1709.06418v1 (2017)"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Definition

Let $P$ be a probability law for one observation, let $\mathcal P$ be a model of laws containing $P$, and let $\psi:\mathcal P\to\mathbb R^k$ be a target functional, where $k\ge1$ is finite. A one-sided path $t\mapsto P_t$, $0\le t<\epsilon$, through $P=P_0$ is **differentiable in quadratic mean (DQM)** with score $s\in L^2(P)$ when its densities $p_t,p$ relative to one common sigma-finite measure $\mu$ satisfy

$$\left\|\sqrt{p_t}-\sqrt p-\frac{t}{2}s\sqrt p\right\|_{L^2(\mu)}=o(t)\qquad(t\downarrow0).$$

The score initially belongs to $L^2(P)$; [[thm-dqm-score-mean-zero]] proves it is unique modulo $P$-almost-sure equality and has mean zero, so it lies in $L^2_0(P)$ as defined by [[def-mean-zero-square-integrable-space]]. The allowed scores form the **tangent set** of the designated paths ([[def-tangent-set]]); their **tangent space** $\mathcal T$ is the closure of their real linear span in $L^2_0(P)$ ([[def-tangent-space]]). It is a closed linear subspace by [[thm-tangent-space-is-closed-linear-subspace]], and hence a Hilbert space under Countable Choice ([[thm-mean-zero-square-integrable-space-is-hilbert]]).

The functional $\psi$ is **pathwise differentiable at $P$ relative to $\mathcal T$** if the right derivative $\dot\psi_P(s):=\lim_{t\downarrow0}(\psi(P_t)-\psi(P))/t$ exists for every allowed path, depends only on its score, and extends to a continuous linear map $\dot\psi_P:\mathcal T\to\mathbb R^k$. A vector $\phi\in L^2_0(P)^k$ is a **parameter influence curve** (or representer) when

$$\dot\psi_P(s)=E_P[\phi s]\qquad(s\in\mathcal T),$$

with the expectation interpreted coordinatewise. The Hilbert-space Riesz theorem gives a unique representer in $\mathcal T^k$; it is the **canonical gradient**. This representation requires Countable Choice, as in [[thm-riesz-representation-for-hilbert-space]] and [[def-countable-choice]]. The supplied density versions along a path use the separate Axiom of Choice in [[def-dqm-submodel-through-a-law]] and [[def-axiom-of-choice]]. The full set of ambient representers and its projection characterization are proved in [[thm-influence-curve-representers]].

## Remarks

The tangent space is the closed linear span of allowed scores, not necessarily the full $L^2_0(P)$; restricting or enlarging the allowed paths can therefore change pathwise differentiability and the canonical gradient. A parameter influence curve is a derivative representer. This definition does not assert that an estimator attaining a bound exists.
