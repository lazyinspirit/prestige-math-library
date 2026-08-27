---
id: lem-perron-family-is-nonempty-and-bounded
kind: lemma
title: "The Perron family is nonempty and uniformly bounded by the boundary data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perron-family-for-the-plane-dirichlet-problem, thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\varphi:\partial\Omega\to\mathbb R$ be continuous. Put
$$m=\min_{\partial\Omega}\varphi,\qquad M=\max_{\partial\Omega}\varphi.$$
Then:

1. $\mathcal P(\varphi,\Omega)$ is nonempty;
2. every $v\in\mathcal P(\varphi,\Omega)$ satisfies $v\le M$ on $\Omega$;
3. the constant function $m$ belongs to $\mathcal P(\varphi,\Omega)$, so the
   Perron envelope satisfies $m\le U_\varphi\le M$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a continuous boundary datum $\varphi:\partial\Omega\to\mathbb R$.

[L1] The Perron lower family consists of subharmonic functions satisfying the boundary limsup inequality against $\varphi$ ([[def-perron-family-for-the-plane-dirichlet-problem]]).

[L2] A subharmonic function on a connected domain cannot attain a finite interior maximum unless it is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 The constant function $m$ is harmonic, hence subharmonic, and its boundary limsup equals $m\le\varphi$. Therefore $m\in\mathcal P(\varphi,\Omega)$ by [L1], so the Perron family is nonempty. [L1, given]

1.2 Let $v\in\mathcal P(\varphi,\Omega)$ and fix $\varepsilon>0$. By the boundary limsup condition in [L1], every boundary point $\zeta$ has a neighbourhood $U_\zeta$ such that $v\le M+\varepsilon$ on $U_\zeta\cap\Omega$. The boundary is compact because $\Omega$ is bounded, so finitely many such neighbourhoods cover $\partial\Omega$; their union leaves a compact set $K\Subset\Omega$. If $v$ exceeded $M+\varepsilon$ somewhere in $\Omega$, then upper semicontinuity would make $v$ attain its maximum over $K$ at an interior point with value $>M+\varepsilon$, contradicting [L2] because $v$ is not constant with that value near the boundary collar. Hence $v\le M+\varepsilon$ on $\Omega$. [L1, L2, given]

2.1 Letting $\varepsilon\downarrow0$ in step 1.2 gives $v\le M$ on $\Omega$ for every $v\in\mathcal P(\varphi,\Omega)$. Together with step 1.1, this yields $m\le U_\varphi\le M$. [step 1.1, step 1.2] ∎
