---
id: def-quotient-lie-algebra
kind: definition
title: Quotient Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [lem-lie-algebra-quotient-bracket-is-well-defined]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.3, before Lemma 5.17"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

For an ideal $\mathfrak i\trianglelefteq\mathfrak g$, the quotient vector space
$\mathfrak g/\mathfrak i$ equipped with

$$[x+\mathfrak i,y+\mathfrak i]=[x,y]+\mathfrak i$$

is the **quotient Lie algebra**. The bracket is representative-independent and
satisfies all Lie identities by
[[lem-lie-algebra-quotient-bracket-is-well-defined]]. The canonical projection
$\pi:\mathfrak g\to\mathfrak g/\mathfrak i$ is linear and satisfies
$\pi([x,y])=[\pi(x),\pi(y)]$.

