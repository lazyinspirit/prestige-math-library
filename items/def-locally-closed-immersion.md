---
id: def-locally-closed-immersion
kind: definition
title: Immersion of schemes
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-open-immersion-schemes, def-closed-immersion-schemes]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Definition 26.10.2(5) and Section 26.21.2, printed pp.18, 39-40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

A morphism of schemes $f:Z\to X$ is an **immersion**, also called a
**locally closed immersion**, if there exist an open subscheme
$j:U\hookrightarrow X$ ([[def-open-immersion-schemes]]) and a closed immersion
$i:Z\to U$ ([[def-closed-immersion-schemes]]) with $f=j\circ i$. A factorization
is a device exhibiting $f$, not extra data attached to it: whether $f$ is an
immersion is a property of the morphism $f$ alone, and closed immersions
($U=X$) and open immersions (with $i$ an isomorphism onto $U$) are immersions.

For such a factorization the image $f(Z)=j(i(Z))$ is closed in the open
subscheme $U$, hence is a locally closed subset of $X$, and $i$ identifies $Z$
with a closed subscheme of $U$; one says that $Z$ carries the **induced locally
closed subscheme structure** on that image. Since $j$ is a homeomorphism onto
$U$, the induced structure is unchanged when the ambient open subscheme is
replaced by a smaller one containing $f(Z)$, so the property may be checked
after restricting the target to any open subscheme containing the image.
