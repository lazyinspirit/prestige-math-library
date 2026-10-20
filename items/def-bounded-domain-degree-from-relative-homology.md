---
id: def-bounded-domain-degree-from-relative-homology
kind: definition
title: Bounded-domain degree from relative homology
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [lem-bounded-domain-degree-properties]
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
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
---
## Definition

Let $d\ge1$, let $U\subset\mathbb R^d$ be bounded and open, and let $f:\overline U\to\mathbb R^d$ be continuous. For $y\notin f(\partial U)$ the set $K=f^{-1}(\{y\})\cap U$ is compact in $U$: its closure preimage is closed in the compact set $\overline U$ and avoids $\partial U$. Give $U$ its standard orientation. Let $[U]_K\in H_d(U,U\setminus K;\mathbb Z)$ be the unique relative orientation class restricting to the standard local orientation generator at each $x\in K$; for $K=\varnothing$ use the zero class. Let $[\mathbb R^d]_{\{y\}}$ be the positive generator of $H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z)\cong\mathbb Z$. The bounded-domain degree is the integer $\deg(f,U,y)$ determined by

$$f_*[U]_K=\deg(f,U,y)[\mathbb R^d]_{\{y\}},$$

where $f$ is regarded as a map of pairs $(U,U\setminus K)\to(\mathbb R^d,\mathbb R^d\setminus\{y\})$. The following local lemma proves that this definition is well-defined and has the required normalization, additivity, and moving-target homotopy properties.

## Definition references

[[def-relative-singular-homology]]

[[def-r-orientation-of-a-topological-manifold]]

[[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]

[[lem-compatible-local-orientation-classes-exist-over-compact-subsets]]

[[prop-relative-homology-is-functorial-for-maps-of-pairs]]

[Chizat and Bach, Appendix C.3.1](https://arxiv.org/pdf/1805.09545)

[Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)
