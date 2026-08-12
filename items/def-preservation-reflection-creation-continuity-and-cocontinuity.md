---
id: def-preservation-reflection-creation-continuity-and-cocontinuity
kind: definition
title: "Preservation, reflection, and creation of limits and colimits; continuous and cocontinuous functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram, def-functor-and-contravariant-functor, def-natural-isomorphism]
justified_by: []
aliases: [def-continuous-functor, def-cocontinuous-functor]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.4.1 and Remark 3.4.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Let $F:\mathcal C\to\mathcal D$ be a functor
([[def-functor-and-contravariant-functor]]) and fix an indexing category
$\mathcal J$.

- $F$ **preserves $\mathcal J$-limits** if the image under $F$ of every
  limiting cone over $D:\mathcal J\to\mathcal C$ is limiting over $FD$.
- $F$ **reflects $\mathcal J$-limits** if a cone over $D$ is limiting whenever
  its image is limiting.
- In the ordinary isomorphism-invariant sense used here, $F$ **creates
  $\mathcal J$-limits** if every limiting cone over $FD$ is isomorphic as a
  cone ([[def-natural-isomorphism]]) to the image of a cone over $D$, that
  source cone is limiting, and any source cone whose image is limiting is
  limiting. This does not require an on-the-nose lift of the target apex.
- The functor **strictly creates $\mathcal J$-limits** if every limiting cone
  over $FD$ has a unique lift with exactly the same apex and legs under $F$,
  and that lifted cone is limiting. Strict creation therefore contains data
  not demanded by ordinary isomorphism-invariant creation.

The terms **preserves**, **reflects**, and **creates colimits** use cocones and
colimits ([[def-limit-and-colimit-of-a-diagram]]). A functor is **continuous**
if it preserves all small limits and **cocontinuous** if it preserves all small
colimits.
