---
id: def-fractional-ideal
kind: definition
title: "Fractional ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-of-fractions]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a domain with fraction field $K=\operatorname{Frac}(R)$
([[def-field-of-fractions]]). A **fractional ideal** of $R$ is a nonzero
$R$-submodule $I\subseteq K$ for which there exists $0\neq d\in R$ with
$dI\subseteq R$.

Thus a fractional ideal is a submodule of the fixed ambient field $K$, not an
equivalence class of formal fractions.
