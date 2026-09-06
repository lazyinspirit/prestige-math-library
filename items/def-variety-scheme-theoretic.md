---
id: def-variety-scheme-theoretic
kind: definition
title: "Scheme-theoretic varieties"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-scheme, def-locally-finite-type-and-finite-type-morphism, def-scheme-over-base, def-affine-overlap-separation-condition]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Lemma 21.7"
      url: "https://stacks.math.columbia.edu/tag/01KP"
---
## Definition

For a field $k$, a **$k$-variety** in this scheme-theoretic convention is an
integral $k$-scheme of finite type whose structural morphism satisfies the
affine-overlap separation condition over $k$.
