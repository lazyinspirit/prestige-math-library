---
id: def-barrier-and-regular-boundary-point
kind: definition
title: "Barriers and regular boundary points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-subharmonic-function, def-perron-envelope-for-the-plane-dirichlet-problem]
verification:
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

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$.

A **barrier at $\zeta$** is a subharmonic function $b:\Omega\to[-\infty,0)$ such
that:

1. $b(z)\to0$ as $z\to\zeta$ with $z\in\Omega$;
2. for every neighbourhood $V$ of $\zeta$ there is a constant $c_V<0$ with
   $$\limsup_{\substack{z\to\eta\\ z\in\Omega}}b(z)\le c_V \qquad(\eta\in\partial\Omega\setminus V).$$

The boundary point $\zeta$ is **regular** when for every continuous boundary
datum $\varphi:\partial\Omega\to\mathbb R$, the regularized Perron envelope
$H_\varphi$ satisfies
$$\lim_{\substack{z\to\zeta\\ z\in\Omega}}H_\varphi(z)=\varphi(\zeta).$$

## Remarks

The barrier is global on $\Omega$, but the second clause is exactly what makes a
local peak function sufficient: once one is globalized, it is automatically
separated from $0$ away from the marked boundary point.
