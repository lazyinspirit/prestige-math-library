---
id: rem-the-erdos-hajnal-conjecture
kind: remark
title: "The Erdős–Hajnal conjecture: every fixed forbidden induced graph admits a positive exponent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, Conjecture 1.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "A. Chernikov, MATH 223M notes, Conjecture 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

The **Erdős–Hajnal conjecture** asserts that every finite graph $H$ has the Erdős–Hajnal property: equivalently, for each $H$ there is an exponent $\epsilon(H)>0$ such that every nonempty $H$-free graph $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^{\epsilon(H)}$ ([[def-erdos-hajnal-property-and-constant]], [[def-h-free-and-family-free-graph]]).
