---
id: def-equivalence-of-extensions
kind: definition
title: "Equivalence of extensions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extension-of-an-object-by-an-object-in-an-abelian-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

For extensions $\xi:0\to N\to E\to M\to0$ and $\xi':0\to N\to E'\to M\to0$, an **equivalence** is a morphism $u:E\to E'$ making the diagram of short exact sequences commute with identity maps on $N$ and $M$. Equivalence is deliberately stronger data than merely an isomorphism $E\cong E'$: the maps to the fixed endpoints must be respected.
