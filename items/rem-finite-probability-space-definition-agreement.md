---
id: rem-finite-probability-space-definition-agreement
kind: remark
title: "Agreement with the published finite probability-space definition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-finite-probability-space-and-event]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

The earlier item [[def-finite-probability-space-and-event]] and the present
measure-theoretic formulation describe the same finite object. The theorem above
does not replace the published finite definition; it identifies it with the
probability-measure language on the full power set.

This agreement keeps two boundary features visible. First, every subset of a
finite sample space remains measurable. Second, an outcome of weight $0$ is
still part of the sample space, so a nonempty event may still have probability
$0$.
