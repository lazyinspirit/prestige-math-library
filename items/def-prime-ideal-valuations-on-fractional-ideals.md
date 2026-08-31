---
id: def-prime-ideal-valuations-on-fractional-ideals
kind: definition
title: "Prime-ideal valuations on fractional ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dedekind-domain, thm-nonzero-ideals-in-dedekind-domains-are-invertible, lem-dedekind-localisation-at-nonzero-prime-is-dvr, thm-ideals-in-a-dvr]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a Dedekind domain, let $\mathfrak p$ be a nonzero prime ideal, and
let $I$ be a nonzero fractional ideal of $R$. By
[[lem-dedekind-localisation-at-nonzero-prime-is-dvr]], the localisation
$R_{\mathfrak p}$ is a DVR, and by
[[thm-nonzero-ideals-in-dedekind-domains-are-invertible]] together with
[[thm-ideals-in-a-dvr]] the localised ideal has the form
$$
I_{\mathfrak p}=\mathfrak p^nR_{\mathfrak p}
$$
for a unique integer $n$. This integer is the **prime-ideal valuation** of $I$
at $\mathfrak p$, written $v_{\mathfrak p}(I):=n$.
