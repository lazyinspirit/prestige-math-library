---
id: def-compactly-generated-based-space-and-well-pointed-object
kind: definition
title: Compactly generated based spaces and well-pointed objects
status: published
origin: pipeline
deps: ["def-compactly-generated-conventions-for-based-homotopy", "def-cofibration-and-homotopy-extension-property"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 175--179
---

## Definition

On this page a **based space** is a compactly generated weak Hausdorff space
$X$ equipped with a chosen point $*_X\in X$. Products are the compactly
generated products from the published CGWH convention, and every quotient is
kified after taking the ordinary quotient.

A based space $X$ is **well-pointed** when the inclusion

$$ \{*_X\}\hookrightarrow X $$

is an unbased cofibration, in the sense of the published homotopy-extension
property. Thus well-pointedness is an additional hypothesis: it is not being
asserted for every based CGWH space. The structure spaces of every sequential
prespectrum on this page are required to be well-pointed. No choice principle
is used in these conventions.

