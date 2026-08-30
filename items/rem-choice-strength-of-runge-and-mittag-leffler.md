---
id: rem-choice-strength-of-runge-and-mittag-leffler
kind: remark
title: "Choice bookkeeping for Runge and Mittag-Leffler"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-runge-approximation-on-plane-domains,
       thm-mittag-leffler-theorem-on-plane-domains]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.2 and §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3 and §4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Remark

The proofs on this page separate two kinds of choice.

First, the compact-set Runge theorem is finitary once the pole representatives
are named: the enclosing cycle is a finite polygonal chain, the Riemann sums use
finite sampling, and pole pushing moves finitely many poles along finitely many
disc chains.

Second, the domain versions need an exhaustion and one representative in each
component of $\widehat{\mathbb C}\setminus\Omega$. The exhaustion can be chosen
canonically, but the complementary representatives are genuine extra data unless
the domain already comes with a distinguished choice, for example when the
complement is connected and $\{\infty\}$ is the pole set. The local proofs
therefore stay within ordinary finitary reasoning, while the global statements
record exactly where the component-by-component bookkeeping enters.
