---
id: ex-cycle-index-of-d-four
kind: example
title: "The cycle index of D_8"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [thm-cycle-index-of-dihedral-group]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Section 15.5: Applications of Pólya's Enumeration Formula"
      url: "https://appliedcombinatorics.org/book/s_polya_apps.html"
pipeline_run: null
---

## Example

For the square,

$$Z(D_8)=\frac18\left(s_1^4+2s_1^2s_2+3s_2^2+2s_4\right).$$

The four rotations contribute

$$s_1^4,\ s_2^2,\ s_4,\ s_4,$$

the two reflections through opposite vertices contribute $s_1^2s_2$, and the
two reflections through opposite edges contribute $s_2^2$.
