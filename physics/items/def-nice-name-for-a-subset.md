---
id: def-nice-name-for-a-subset
kind: definition
title: Nice names for subsets of a ground-model set
status: published
origin: pipeline
deps: [def-forcing-names-and-name-rank, def-check-names-and-the-canonical-generic-name, def-poset-ccc-and-knaster-property]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, nice-name reduction in the proof of Theorem 3.31", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

For a forcing order $P$ and ground-model set $A$, a **nice $P$-name for a subset of $A$** is a name

$$\dot x=\{\langle\check a,p\rangle:a\in A\text{ and }p\in A_a\},$$

where each $A_a\subseteq P$ is an antichain. Empty $A_a$ are allowed, and if $A=\varnothing$ the displayed union is the empty name. Niceness alone does not assert that an arbitrary name is equivalent to such a name; that is the content of the next theorem.
