---
id: def-measurable-finite-group-orbit-pvalues
kind: definition
title: "Full-orbit and tie-randomized permutation p-values"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-measurable-finite-group-permutation-setup
  - def-orbit-rank-p-value
  - def-independent-random-elements
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, §§2.1–2.2 and 3.3–3.4"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
verification:
  precheck: n/a
---

## Definition

In a setup as in [[def-measurable-finite-group-permutation-setup]], the
**inclusive full-orbit upper-tail p-value** at $x\in\mathcal X$ is
$$p_{\mathrm{orb}}(x):=\frac{\#\{g\in G:T(g\cdot x)\ge T(x)\}}{|G|}.$$
If $U$ is independent of the data and uniform on $[0,1]$, meaning
$\mathbb P(U\le u)=u$ for every $u\in[0,1]$, the **tie-randomized full-orbit
p-value** is
$$p_{\mathrm{tie}}(x,U):=\frac{\#\{g\in G:T(g\cdot x)>T(x)\}+U\,\#\{g\in G:T(g\cdot x)=T(x)\}}{|G|}.$$
Independence is in the sense of
[[def-independent-random-elements]]. Each count is over group elements with
multiplicity, so nonfree actions are handled without replacing $|G|$ by the
number of distinct orbit points.

On the finite-space special case with invariant null laws, these formulas are the inclusive and
tie-randomized ranks of [[def-orbit-rank-p-value]]. The null-law validity
argument is supplied separately from this definition.
