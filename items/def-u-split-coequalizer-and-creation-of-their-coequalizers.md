---
id: def-u-split-coequalizer-and-creation-of-their-coequalizers
kind: definition
title: "$U$-split pairs and ordinary or strict creation of their coequalizers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-split-coequalizer, def-preservation-reflection-creation-continuity-and-cocontinuity]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.4.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $U:\mathcal D\to\mathcal C$ be a functor. A parallel pair $f,g:d\rightrightarrows d'$ in $\mathcal D$ is **$U$-split** when its image under $U$ extends to a split coequalizer diagram in $\mathcal C$ ([[def-split-coequalizer]]).

The functor $U$ **creates coequalizers of $U$-split pairs** when each chosen split coequalizer of $Uf$ and $Ug$ is isomorphic, as a coequalizer diagram, to the image under $U$ of a coequalizer of $f$ and $g$, and every lifted fork whose image is a coequalizer is itself a coequalizer. This is ordinary isomorphism-invariant creation in the sense of [[def-preservation-reflection-creation-continuity-and-cocontinuity]].

The functor $U$ **strictly creates coequalizers of $U$-split pairs** when every supplied splitting has a unique lift on the same apex and legs, and the lifted fork is a coequalizer. Strict creation therefore specifies the lifted object and structure on the nose, rather than only up to isomorphism.
