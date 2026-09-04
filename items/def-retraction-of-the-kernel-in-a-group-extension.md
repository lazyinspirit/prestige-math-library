---
id: def-retraction-of-the-kernel-in-a-group-extension
kind: definition
title: "A retraction of the kernel in a group extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-split-extension-of-groups]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Definition

For a group extension

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1,$$

a **retraction of the kernel** is a group homomorphism
$r:E\to N$ ([[def-group-homomorphism]]) such that

$$r\circ i=\operatorname{id}_N.$$

So $r$ restricts to the inverse of the chosen kernel inclusion on the embedded
copy of $N$. This notion is attached to the short exact sequence of
[[def-split-extension-of-groups]], not merely to the abstract middle group.
