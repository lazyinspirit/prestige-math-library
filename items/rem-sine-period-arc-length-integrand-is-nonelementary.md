---
id: rem-sine-period-arc-length-integrand-is-nonelementary
kind: remark
title: "The sine-period arc-length integrand has no elementary antiderivative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [ex-sine-period-arc-length-as-a-complete-elliptic-integral]
justified_by: []
aliases: []
landmark: false
proved_here: false
external_dependency:
  source_url: "https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf"
  exact_statement: "For a nondegenerate modulus $0<k<1$, the elliptic integral of the second kind has no expression by elementary antiderivatives."
  local_proof_attempt: "The preceding example reduces the sine-period length to the modulus $k=1/\\sqrt2$; proving non-elementarity from there requires Liouville's theorem on elementary antiderivatives or equivalent differential algebra, neither of which is available in the declared prerequisite closure."
  necessity: "The exact length is proved locally, while the design also requires an honest record that this elliptic integral is not elementary; separating the sourced statement avoids pretending to develop differential algebra."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. M. Hall, Special Functions, §3.1, Example 3.1.2"
      url: "https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf"
pipeline_run: null
---

The reduction in [[ex-sine-period-arc-length-as-a-complete-elliptic-integral]] is exact: the sine-period length is $4\sqrt2\,E(1/\sqrt2)$. What is not proved here is the differential-algebraic statement behind the word *elliptic*. For a nondegenerate modulus $0<k<1$, the integrand

$$\sqrt{1-k^2\sin^2t}$$

has no elementary antiderivative. In particular $k=1/\sqrt2$ is nondegenerate, so the displayed arc-length integral is not reducible by an elementary antiderivative.

A local proof would require Liouville's theorem on elementary antiderivatives or equivalent differential algebra. That machinery is not among this development's prerequisites, so the non-elementarity assertion is recorded from Hall's treatment rather than presented as locally proved.
