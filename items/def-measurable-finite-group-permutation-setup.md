---
id: def-measurable-finite-group-permutation-setup
kind: definition
title: "Measurable finite-group permutation setups"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-group
  - def-group-action
  - def-measurable-function-between-measurable-spaces
  - def-finite-group-randomization-test
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, §§2.1–2.2 and 3.1–3.4"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]), let
$\varnothing\ne\Theta_0\subseteq\Theta$, and let $G$ be a finite group
([[def-group]]) acting on $\mathcal X$ by a left action
([[def-group-action]]). Require that each map $x\mapsto g\cdot x$ is
measurable from $(\mathcal X,\mathcal A)$ to itself and that
$T:\mathcal X\to\mathbb R$ is measurable
([[def-measurable-function-between-measurable-spaces]]).

For $\theta\in\Theta_0$, the null law is **invariant under the action** when
$P_\theta(\{x:g\cdot x\in A\})=P_\theta(A)$ for every $g\in G$ and
$A\in\mathcal A$. Equivalently, $g\cdot X$ and $X$ have the same law when
$X\sim P_\theta$. The setup defines the action and score whether or not this
invariance condition holds; the validity theorem below assumes it for every
null parameter.

The data space need not be finite, and the action need not be free. Group
elements, including distinct elements that send $x$ to the same point, remain
distinct transformations in every group average. On a finite data space with
the full power-set sigma-algebra, if every null law is invariant, the setup specializes to
[[def-finite-group-randomization-test]].
