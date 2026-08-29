---
id: ex-a-compactly-supported-vector-field-with-global-solutions
kind: example
title: "A compactly supported vector field with global solutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Example

Let $\rho:\mathbb R^n\to[0,1]$ be a smooth bump function supported in the closed
unit ball, and fix $v\in\mathbb R^n$. Then

$$V(x):=\rho(x)\,v$$

is a compactly supported smooth vector field, so all of its maximal solutions
are global.

## Facts & Assumptions

**Given:** A smooth bump function $\rho$ supported in $\overline B(0,1)$ and a vector $v\in\mathbb R^n$.

[L1] Every compactly supported smooth Euclidean vector field is complete ([[cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete]]).

## Verification

**Proof technique:** direct.

1.1 The support of $V(x)=\rho(x)v$ is contained in the compact support of $\rho$, [given] and $V$ is smooth because it is a scalar multiple of the constant vector $v$ by a smooth scalar function. [given]

2.1 Therefore [L1] applies and makes every maximal trajectory of $V$ global. [L1, step 1.1] Outside the support of $\rho$, the field vanishes and the solution is locally constant, which is consistent with that completeness conclusion. [L1, step 1.1] ∎
