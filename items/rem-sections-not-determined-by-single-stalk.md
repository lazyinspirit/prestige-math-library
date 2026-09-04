---
id: rem-sections-not-determined-by-single-stalk
kind: remark
title: "A single stalk does not determine a global section"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-stalk-of-presheaf, def-germ-of-section]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 4"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

If two sections have the same germ at one point, they only agree on some
possibly tiny neighbourhood of that point. Nothing in
[[def-stalk-of-presheaf]] or [[def-germ-of-section]] lets one recover the values
of either section away from that neighbourhood.

For example, on the sheaf of continuous real-valued functions on $\mathbb R$, a
function supported near $2$ and the zero function have the same germ at $0$ but
are different global sections. Stalkwise arguments therefore need either all
points at once or a neighbourhoodwise statement that can be glued.
