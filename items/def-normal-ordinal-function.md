---
id: def-normal-ordinal-function
kind: definition
title: "Normal ordinal functions"
status: draft
origin: pipeline
deps: ["def-club-subsets-of-ordinals"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Definition 14.3, p.80"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
    - title: "Welch, Definition 2.11, printed p.20; live original reread"
      url: https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf
---

## Definition

For a regular uncountable cardinal $\kappa$, a function $f:\kappa\to\kappa$ is **normal** if it is strictly increasing and, for each nonzero limit $\lambda<\kappa$,

$$f(\lambda)=\sup_{\xi<\lambda}f(\xi).$$

There is no requirement that $f(0)=0$. The analogous notation for a class function on all ordinals uses the same two clauses, but the theorems on this page have the set domain $\kappa$.
