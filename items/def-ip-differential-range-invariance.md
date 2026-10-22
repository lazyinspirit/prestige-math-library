---
id: def-ip-differential-range-invariance
kind: definition
title: Differential range invariance for Banach-space maps
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-banach-space
  - def-ip-tangential-cone-condition
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equation (1.6)"
      url: "https://arxiv.org/pdf/2403.18704"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $X$, $Y$, and $Z$ be real Banach spaces, let $U\subseteq X$ be nonempty, let $x_0\in U$, and let $F:U\to Y$ be a map. A **differential range-invariance factorization at $x_0$ on $U$** consists of a bounded linear map $K:Z\to Y$ and a map $r:U\to Z$ such that

$$F(x)-F(x_0)=Kr(x)\qquad(x\in U).$$

Thus every data increment lies in the range of the fixed operator $K$. The factorization alone does not assert that $K$ is injective, that $r$ is unique, or that a tangential-cone inequality holds. If $U$ is open and $F$ and $r$ are Fréchet differentiable, differentiating this identity gives $F'(x)=Kr'(x)$ at every $x\in U$; no converse is asserted without further hypotheses.

## Definition references

[[def-banach-space|Real Banach spaces and their norm metrics]]

[[def-ip-tangential-cone-condition|The distinct local Hilbert-space tangential cone condition]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equation (1.6)](https://arxiv.org/pdf/2403.18704)
