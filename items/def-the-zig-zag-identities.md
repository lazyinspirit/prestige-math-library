---
id: def-the-zig-zag-identities
kind: definition
title: "The zig-zag identities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-dual-and-right-dual-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, formulas (2.43)-(2.46)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

For a left dual $(X^\vee,\operatorname{ev}_X,\operatorname{coev}_X)$ of $X$,
the two identity composites in [[def-left-dual-and-right-dual-object]] are
called the **zig-zag identities** or **snake identities** for the pair
$(X^\vee,X)$.

For a right dual $({}^\vee X,\operatorname{ev}'_X,\operatorname{coev}'_X)$ of
$X$, the corresponding mirror composites are the zig-zag identities for the
pair $(X,{}^\vee X)$.

Thus a dual object is exactly duality data together with the relevant pair of
zig-zag identities.
