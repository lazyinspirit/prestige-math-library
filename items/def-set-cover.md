---
id: def-set-cover
kind: definition
title: "The set cover decision problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  scraped: []
  references:
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

An instance of **SET COVER** consists of a finite set
$$ U=\{u_1,\ldots,u_m\}, $$
a family of subsets
$$ \mathcal{S}=\{S_1,\ldots,S_n\}\subseteq \mathcal{P}(U), $$
and a natural number $k$. It is a yes-instance when there exist indices
$i_1,\ldots,i_t$ with $t\le k$ such that
$$ S_{i_1}\cup\cdots\cup S_{i_t}=U. $$
