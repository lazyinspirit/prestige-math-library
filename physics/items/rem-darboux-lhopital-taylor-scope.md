---
id: rem-darboux-lhopital-taylor-scope
kind: remark
title: "Scope, endpoint, factorial, and deferred-remainder conventions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-higher-derivatives-and-smoothness, def-neighbourhood-r, thm-darboux-theorem-for-derivatives, cor-injective-or-monotone-derivative-is-continuous, thm-lhopital-zero-over-zero, thm-lhopital-infinity-over-infinity, thm-taylor-schlomilch-roche-remainder, thm-taylor-peano-remainder, def-factorial-and-falling-factorial, def-binomial-coefficient, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Remarks

Higher derivatives are the recursive objects of [[def-higher-derivatives-and-smoothness]]. Darboux's theorem ([[thm-darboux-theorem-for-derivatives]]) concerns every first derivative, without assuming that derivative continuous. The two L'Hôpital theorems, [[thm-lhopital-zero-over-zero]] and [[thm-lhopital-infinity-over-infinity]], require their stated derivative and nonvanishing hypotheses and do not assert converses.

Endpoint derivatives and finite-endpoint limits are one-sided when the domain supplies only one side. Natural factorials and binomial coefficients ([[def-factorial-and-falling-factorial]], [[def-binomial-coefficient]]) enter real formulas through the canonical embedding $\iota$ of [[def-canonical-natural]]. Darboux's property alone has no general continuity converse; the page's [[cor-injective-or-monotone-derivative-is-continuous]] proves continuity under the stated injectivity or monotonicity hypotheses.

The Schlömilch-Roche formula ([[thm-taylor-schlomilch-roche-remainder]]) assumes
an $(n+1)$-st derivative on an interval. Peano's formula
([[thm-taylor-peano-remainder]]) assumes $n$-fold differentiability on an
open interval $N_\delta(a)$ around the expansion point
([[def-neighbourhood-r]]), but not continuity of the $n$-th derivative. No
integral remainder, Borel interpolation theorem, or assertion about Dini
derivatives is made here.
