---
id: def-homologically-simply-connected-complex-domain
kind: definition
title: "Homologically simply connected complex domains"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-null-homologous-and-homologous-complex-cycles, def-complex-domain, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

A complex domain $\Omega$ ([[def-complex-domain]]) is **homologically simply
connected** when every complex chain which is a cycle and whose trace lies in
$\Omega$ ([[def-complex-chain-and-cycle]]) is null-homologous in $\Omega$
([[def-null-homologous-and-homologous-complex-cycles]]); equivalently, when

$$n(\Gamma,p)=0\qquad\text{for every cycle }\Gamma\text{ in }\Omega\text{ and every }p\in\mathbb C\setminus\Omega,$$

with the index of [[def-integration-and-index-of-complex-chain]].

## Remarks

**The qualifier is part of the name and is kept in every use.** The condition
above is about indices, and it is the only notion of simple connectivity defined
or used on this page: no notion involving loops, homotopies or a fundamental
group is introduced here, and none is invoked in any proof below. Writing
"homologically simply connected" everywhere is what keeps that scope visible to a
reader who knows the other notions from elsewhere.

**$\mathbb C$ itself is homologically simply connected**, because
$\mathbb C\setminus\mathbb C$ is empty and the condition is then vacuous. More
generally the condition constrains a domain only through the points it omits.

**Connectedness is part of the definition**, since a complex domain is nonempty,
open and connected. That is a convenience rather than a necessity for the index
condition itself, and every result below that assumes homological simple
connectivity therefore has a connected domain available.
