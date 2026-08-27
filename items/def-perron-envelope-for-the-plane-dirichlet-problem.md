---
id: def-perron-envelope-for-the-plane-dirichlet-problem
kind: definition
title: "The Perron envelope and its regularization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-perron-family-for-the-plane-dirichlet-problem]
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

Let $\Omega$ be a bounded complex domain and let
$\varphi:\partial\Omega\to\mathbb R$ be continuous. The **Perron envelope** is
the pointwise supremum
$$U_\varphi(z):=\sup\{v(z):v\in\mathcal P(\varphi,\Omega)\},\qquad z\in\Omega.$$

Its **regularized Perron envelope** is defined directly by
$$H_\varphi(z):=\lim_{\rho\downarrow0}\sup\{U_\varphi(w):w\in\Omega,\ |w-z|<\rho\}.$$

## Remarks

This limsup is meaningful with values in $[-\infty,+\infty]$ before any
boundedness theorem is used. The next lemma proves
$\min_{\partial\Omega}\varphi\le U_\varphi\le
\max_{\partial\Omega}\varphi$, so in the present Perron setting $H_\varphi$ is
finite-valued and is exactly the upper-semicontinuous regularization $U_\varphi^*$.
