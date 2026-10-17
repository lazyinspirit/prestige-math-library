---
id: def-convergence-in-distribution-for-real-random-variables
kind: definition
title: "Convergence in distribution for real random variables"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-atom-and-continuity-point-of-a-law, def-cumulative-distribution-function-of-a-random-variable, def-law-or-distribution-of-a-random-element]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For real random variables $(X_n)$ and $X$, write $X_n\Rightarrow X$, or
$X_n\to X$ **in distribution**, when
$$F_{X_n}(x)\longrightarrow F_X(x)$$
at every continuity point $x$ of $F_X$. Here $F_X$ is the CDF from
[[def-cumulative-distribution-function-of-a-random-variable]] and continuity
points are those of [[def-atom-and-continuity-point-of-a-law]].
