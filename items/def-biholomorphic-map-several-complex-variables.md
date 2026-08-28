---
id: def-biholomorphic-map-several-complex-variables
kind: definition
title: "Biholomorphic maps between open sets in $\\mathbb{C}^m$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-map-and-complex-jacobian, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 5.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Definition

Let $m\ge1$, and let $U,V\subseteq\mathbb C^m$ be open. A map $F:U\to V$ is
**biholomorphic** if it is bijective ([[def-injection-surjection-bijection]]),
holomorphic on $U$, and its inverse $F^{-1}:V\to U$ is holomorphic in the
sense of [[def-holomorphic-map-and-complex-jacobian]]. A biholomorphic map is a
**biholomorphism** from $U$ onto $V$.

For local use, $F$ is **biholomorphic between neighbourhoods of $a$ and
$F(a)$** when there are open sets $U_0\subseteq U$ and $V_0\subseteq V$ with
$a\in U_0$, $F(a)\in V_0$, and $F|_{U_0}:U_0\to V_0$ a biholomorphism.
