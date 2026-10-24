---
id: rem-jordan-rectifiable-terminology
kind: remark
title: "The term “rectifiable” for Jordan measurable sets is unrelated to rectifiable curves"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-jordan-boundary-criterion, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Munkres, Analysis on Manifolds, Jordan content terminology"
      url: "https://studylib.net/doc/28170627/analysis-on-manifolds--advanced-books-classics-----james-..."
pipeline_run: null
---

## Remarks

Some multivariable-analysis texts, including Munkres, call a bounded set **rectifiable** when its boundary has content zero. By [[thm-jordan-boundary-criterion]], these are exactly the bounded Jordan measurable sets of [[def-jordan-inner-and-outer-content]].

This terminology is unrelated to rectifiable curves and does not assert finite curve length. It creates no dependency on arc length.
