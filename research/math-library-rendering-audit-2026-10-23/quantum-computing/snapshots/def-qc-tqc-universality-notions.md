---
id: def-qc-tqc-universality-notions
kind: definition
title: Exact, projective, and encoded braid universality
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-projective-gate-and-metric
  - def-qc-tqc-fixed-charge-encoding
  - def-qc-tqc-logical-error-and-leakage
dependency_level: 9
axiom_use: None; these are finite-dimensional group and norm definitions.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11; §IV.B.c, PDF pp. 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.5 and 9.17, PDF pp. 13–16 and 61–62
---

## Definition

Let $\Gamma\le U(V)$ be a subgroup acting on a nonzero finite-dimensional
Hilbert space $V$. It is **exactly universal** on $V$ when $\Gamma=U(V)$,
**projectively exactly universal** when its image in $PU(V)$ is all of
$PU(V)$, and **projectively dense** when that image is dense in the metric
$d_P$ of [[def-qc-tqc-projective-gate-and-metric]].

For an encoding $J:\mathcal C\to V$ with code projector $P=JJ^*$, the action
is **approximate logical-and-leakage universal** if for every
$U\in U(\mathcal C)$ and every $\epsilon>0$ there is $W\in\Gamma$ and a
phase $z\in U(1)$ such that
$$\|PWP-zJUJ^*\|_{\mathrm{op}}\le\epsilon,\qquad \|(I-P)WP\|_{\mathrm{op}}\le\epsilon.$$
This last notion includes a leakage bound as a separate requirement; projective
density on one fusion block alone does not supply it.
