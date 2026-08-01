---
id: rem-metric-spaces-have-sigma-discrete-bases
kind: remark
title: 'Under choice, every metric space has a $\sigma$-discrete basis'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
proved_here: false
deps: []
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  sources_checked:
    date: 2026-08-01
    scope: exact-statement-and-conventions
    by: Alpha Step-6 audit
external_dependency:
  source_url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
  exact_statement: "Every metrizable space has a sigma-discrete open base, the necessity half used in Bing's metrization theorem."
  local_proof_attempt: "The proposed first-centre cells are not generally open: in R with integer centres at scale 1 ordered 0,1,-1,2,..., the cell for 1 is [1,2)."
  necessity: "Bing's classical characterization is retained with a visible external dependency because a correct disjoint open refinement construction is not available in this in-scope proof development."
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of Topological Spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space has a $\sigma$-discrete open basis.

**Not proved in this library.** This is a source-backed fallback rather than a
local proof. The discarded construction assigns every point to a first centre and
then asserts that the resulting cells are open. They need not be: in
$\mathbb R$, with integer centres at scale $1$ ordered $0,1,-1,2,\ldots$, the
cell assigned to $1$ is $[1,2)$. Intersecting it with a positive-distance
condition does not repair that failure.

**Why it remains visible.** Bing's standard necessity direction needs a real
discrete-open refinement argument. The external-dependency marker is retained
on this result and its consequences so that none of them is mistaken for a
locally established theorem.
