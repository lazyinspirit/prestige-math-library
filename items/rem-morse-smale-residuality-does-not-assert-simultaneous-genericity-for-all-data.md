---
id: rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data
kind: remark
title: "Morse--Smale residuality does not assert simultaneous genericity for all data"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function, thm-relative-morse-smale-perturbation-of-a-gradient-like-field]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, §2.12"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

The residual theorem fixes $f$ and varies metrics.  The relative theorem varies a field while protecting specified local data.  Varying the function, a metric, and a continuation family are different parameter problems; none follows merely by reusing the word “generic.”
