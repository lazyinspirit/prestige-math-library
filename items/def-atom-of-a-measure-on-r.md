---
id: def-atom-of-a-measure-on-r
kind: definition
title: "An atom of a measure on $\\mathbb{R}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure, def-borel-sigma-algebra]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $\mu$ be a Borel measure on $\mathbb{R}$, that is, a measure in the sense
of [[def-measure]] on the Borel sigma-algebra
[[def-borel-sigma-algebra]]. A point $a \in \mathbb{R}$ is an **atom of $\mu$**
when

$$\mu(\{a\}) > 0.$$

Equivalently, $\mu$ has a point mass at $a$.
