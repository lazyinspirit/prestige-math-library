---
id: fs-a-maximal-ode-solution-has-a-closed-interval-domain
kind: false-statement
title: "A maximal ODE solution need not have a closed interval domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-the-maximal-solution-domain-is-open,
       thm-existence-and-uniqueness-of-a-maximal-ode-solution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.2"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

**False claim:** a maximal solution of an ODE has a closed interval as its
domain of definition.

## Facts & Assumptions

**Given:** The solution $x(t)=1/(1-t)$ of $x'=x^2$ with $x(0)=1$.

[L1] Every IVP has a unique maximal solution on an open interval ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F1] The maximal solution domain is open in the time-state variables ([[prop-the-maximal-solution-domain-is-open]]).

## Refutation

**Proof technique:** direct.

1.1 The explicit solution $x(t)=1/(1-t)$ solves $x'=x^2$ for all $t<1$ and [given] cannot be extended through $t=1$, so its maximal interval is $(-\infty,1)$. [given]

2.1 This domain is open and not closed. That matches [L1] and [F1], and it [F1, L1, step 1.1] directly refutes the false claim. [F1, L1, step 1.1] ∎
