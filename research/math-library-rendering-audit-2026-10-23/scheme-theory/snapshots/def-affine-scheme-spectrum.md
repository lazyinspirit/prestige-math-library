---
id: def-affine-scheme-spectrum
kind: definition
title: "The underlying space of an affine spectrum"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime-spectrum-and-vanishing-sets, def-principal-distinguished-subset-of-spectrum, def-ringed-space, def-locally-ringed-space]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Section 26.5"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Definition

All rings below are commutative with $1$. For a ring $A$, the **underlying
topological spectrum** is the Zariski space whose points are the prime ideals
of $A$; its basic opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$. This
notation is deliberately topological until the structure sheaf is constructed.
For $A=0$ there are no proper prime ideals, so this space is empty.
