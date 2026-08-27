---
id: def-perron-family-for-the-plane-dirichlet-problem
kind: definition
title: "The Perron lower family for continuous boundary data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-subharmonic-function]
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
$\varphi:\partial\Omega\to\mathbb R$ be continuous. A function
$v:\Omega\to[-\infty,\infty)$ is a **Perron lower function** for
$(\Omega,\varphi)$ when:

1. $v$ is subharmonic on $\Omega$;
2. for every $\zeta\in\partial\Omega$,
   $$\limsup_{\substack{z\to\zeta\\ z\in\Omega}}v(z)\le\varphi(\zeta).$$

The collection of all such functions is the **Perron lower family** and is
denoted $\mathcal P(\varphi,\Omega)$.

## Remarks

The word lower refers to the boundary condition: members of the family are
subharmonic functions that stay below the prescribed boundary datum in the
limsup sense.
