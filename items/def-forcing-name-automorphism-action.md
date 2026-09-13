---
id: def-forcing-name-automorphism-action
kind: definition
title: Automorphisms acting on forcing names
status: published
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, def-forcing-names-and-name-rank, def-group-isomorphism-and-automorphism, thm-transfinite-recursion]
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
    - {title: "Karagila, Forcing & Symmetric Extensions, Definitions 10.1 and 10.5", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

A forcing automorphism $\pi:P\to P$ is a bijection preserving and reflecting the order, hence compatibility and incompatibility. Its action on names is defined by name-rank recursion:

$$\pi\dot x=\{\langle\pi\dot y,\pi p\rangle:\langle\dot y,p\rangle\in\dot x\}.$$

Induction proves $(\pi\sigma)\dot x=\pi(\sigma\dot x)$, $\pi^{-1}(\pi\dot x)=\dot x$, and rank preservation. The same induction gives $\pi\check x=\check x$ for every ground set. Images of dense sets are dense, and if $G$ is generic then $\pi``G$ is generic. No choice principle is required.
