---
id: prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains
kind: proposition
title: "Time-t flow maps are diffeomorphisms between open domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\Phi:\mathcal D\to M$ be the maximal flow of a smooth vector field $X$.
For each $t\in\mathbb R$, the time-$t$ map

$$ \Phi_t:\mathcal D_t\to \mathcal D_{-t}, \qquad \Phi_t(p):=\Phi(t,p), $$

where $\mathcal D_t:=\{p:(t,p)\in\mathcal D\}$, is a diffeomorphism with inverse
$\Phi_{-t}$.

## Facts & Assumptions

**Given:** The maximal flow $\Phi:\mathcal D\to M$ of a smooth vector field $X$ and a time $t\in\mathbb R$.

[L1] The maximal flow has open domain and satisfies the local group law ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the slices $\mathcal D_t$ and $\mathcal D_{-t}$ are open in $M$ because $\mathcal D$ is open in $\mathbb R\times M$. The map $\Phi_t$ is smooth as a restriction of the smooth flow map. [L1, given]

1.2 Whenever $(t,p)\in\mathcal D$, the local group law from [L1] gives $$ \Phi_{-t}(\Phi_t(p))=\Phi(-t,\Phi(t,p))=\Phi(0,p)=p. $$ The same argument with $-t$ in place of $t$ shows $\Phi_t(\Phi_{-t}(q))=q$ for $q\in\mathcal D_{-t}$. [L1]

2.1 Thus $\Phi_t$ and $\Phi_{-t}$ are inverse smooth maps between the open sets $\mathcal D_t$ and $\mathcal D_{-t}$, so $\Phi_t$ is a diffeomorphism. [step 1.1, step 1.2] ∎
