---
id: def-upper-semicontinuous-regularization
kind: definition
title: "Upper-semicontinuous regularization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  audited: 2026-08-27
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open and let $v:\Omega\to[-\infty,\infty)$ be
any function. Its **upper-semicontinuous regularization** is
$$v^*(z):=\limsup_{w\to z}v(w)=\lim_{\rho\downarrow0}\sup\{v(w):|w-z|<\rho,\ w\in\Omega\}.$$

## Remarks

The function $v^*$ is upper semicontinuous by construction and satisfies
$v\le v^*$. It is the least upper-semicontinuous majorant of $v$: any
upper-semicontinuous $g$ with $v\le g$ also satisfies $v^*\le g$.
