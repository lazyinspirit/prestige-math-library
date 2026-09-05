---
id: def-subset-sum-and-partition
kind: definition
title: "Subset sum and partition decision problems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP2"
      url: "https://lucatrevisan.github.io/30540/notes-np2.pdf"
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

An instance of **SUBSET SUM** is a finite list of positive integers
$$ a_1,\ldots,a_n $$
written in binary together with a target integer $d>0$, also written in binary.
It is a yes-instance when some subset of the listed integers sums exactly to
$d$.

An instance of **PARTITION** is a finite list of positive integers
$$ q_1,\ldots,q_r $$
written in binary. It is a yes-instance when the list can be divided into two
subcollections having the same total sum.
