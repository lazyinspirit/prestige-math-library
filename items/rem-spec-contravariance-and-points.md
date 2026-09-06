---
id: rem-spec-contravariance-and-points
kind: remark
title: "Contravariance reverses coordinates and scheme points are not only classical points"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-affine-scheme-ring-anti-equivalence, def-closed-point-scheme, def-generic-point-irreducible-closed-subset, def-residue-field-scheme-point]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Section 26.6"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
An arrow $A\to B$ of coordinate rings induces an arrow
$\operatorname{Spec}B\to\operatorname{Spec}A$. A scheme point has its residue
field $\kappa(x)$; it need not be a closed point or evaluation at a ground-field
element. Generic points are the basic warning against that identification.
