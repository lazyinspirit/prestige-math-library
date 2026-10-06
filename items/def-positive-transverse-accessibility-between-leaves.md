---
id: def-positive-transverse-accessibility-between-leaves
kind: definition
title: "Positive transverse accessibility between leaves"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-c1-regular-codimension-one-foliation-and-transverse-orientation]
justified_by: [lem-positive-transverse-accessibility-is-a-preorder]
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations, English translation by J. A. Zilber"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Definition1.4 and Lemma1.1, printed p.2; mutual-accessibility component definition immediately following Lemma1.1"
---

## Definition

Let F be a C² transversely oriented codimension-one foliation on a smooth manifold M
without boundary, with its chosen positive transverse direction. A positive transverse
segment is a C² map c:[0,1]→M whose transverse derivative is strictly positive in every
positively signed foliated chart, including the one-sided endpoint derivatives. It is an
immersed curve and need not be embedded. For leaves A,B write $A\succeq_F B$ when A=B or
when such a nonempty segment has c(0)∈A and c(1)∈B. The clause A=B is formal
reflexivity, corresponding to Novikov’s empty-segment convention; it does not assert a
positive return segment or a closed transversal. This is the direction of Novikov’s A≥B:
the positive segment goes from A to B.
