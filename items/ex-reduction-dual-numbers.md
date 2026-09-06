---
id: ex-reduction-dual-numbers
kind: example
title: "Reduction of the dual-number point"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-reduction-of-scheme, def-reduced-affine-scheme]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 12"
      url: "https://stacks.math.columbia.edu/tag/01J1"
---
## Example

Let $k$ be a field. For $A=k[\epsilon]/(\epsilon^2)$, the nilradical is
$(\epsilon)$. Hence
$\operatorname{Spec}A_{\mathrm{red}}=\operatorname{Spec}(A/(\epsilon))
=\operatorname{Spec}k$. The underlying space has one point before and after
reduction, but only the former has a nonzero nilpotent.
