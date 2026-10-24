---
id: def-quasi-compact-and-quasi-separated-morphism
kind: definition
title: "Quasi-compact and quasi-separated morphisms"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, def-quasi-compact-and-quasi-separated-scheme, def-affine-open-subscheme]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 19"
      url: "https://stacks.math.columbia.edu/tag/01KV"
---
## Definition

A morphism $f:X\to S$ is **quasi-compact** if $f^{-1}(V)$ is quasi-compact for
every quasi-compact open $V\subseteq S$. It is **quasi-separated** if, for
affine opens $U,U'\subseteq X$ lying over a common affine open of $S$, the
intersection $U\cap U'$ is quasi-compact. This affine criterion is the
definition used here, before the diagonal construction is available.
