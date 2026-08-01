---
id: def-tangent-cotangent-secant-cosecant
kind: definition
title: "Tangent, cotangent, secant, and cosecant on their exact natural domains"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Definition

Define
$$\tan x:=\frac{\sin x}{\cos x}\quad(x\ne\pi/2+m\pi),\qquad\cot x:=\frac{\cos x}{\sin x}\quad(x\ne m\pi),$$
$$\sec x:=\frac1{\cos x}\quad(x\ne\pi/2+m\pi),\qquad\csc x:=\frac1{\sin x}\quad(x\ne m\pi),$$
where $m$ ranges over the integers. The exclusions are exactly the zero sets of [[thm-sine-cosine-zero-sets-and-fundamental-period]].
