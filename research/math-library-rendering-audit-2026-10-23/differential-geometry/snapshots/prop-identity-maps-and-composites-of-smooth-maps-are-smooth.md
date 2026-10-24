---
id: prop-identity-maps-and-composites-of-smooth-maps-are-smooth
kind: proposition
title: "Identity maps and composites of smooth maps are smooth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       lem-chart-independence-of-c-r-smoothness,
       prop-smooth-maps-are-continuous,
       thm-chain-rule-for-total-derivatives,
       prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

Let $M$, $N$, $P$ be smooth manifolds.

1. The identity map $\mathrm{id}_M:M\to M$ is smooth.
2. If $F:M\to N$ and $G:N\to P$ are smooth, then $G\circ F:M\to P$ is smooth.

## Facts & Assumptions

**Given:** Smooth manifolds $M,N,P$ and smooth (respectively $C^r$) maps $F:M\to N$, $G:N\to P$.

[F1] Smooth charts are members of the maximal atlas of the smooth structure ([[def-smooth-manifold]]), and a chart is a homeomorphism onto an open Euclidean set ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[F2] A map is $C^r$ at $p$ when its representative with respect to one — hence, by chart independence, every — suitable chart pair is $C^r$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[lem-chart-independence-of-c-r-smoothness]]).

[L1] If $u:W\to W'$ is smooth and $g:W'\to W''$ is $C^r$, then $g\circ u$ is $C^r$; and if $h:W\to W'$ is $C^r$ and $v:W'\to W''$ is smooth, then $v\circ h$ is $C^r$ ([[prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: $\mathrm{id}_M$ is continuous. For a smooth chart $(U,\varphi)$, its representative with respect to $(U,\varphi)$ on both sides is $\varphi\circ\mathrm{id}_M\circ\varphi^{-1}=\mathrm{id}_{\varphi(U)}$, which is smooth: its first coordinate partials are constant, and all higher partials vanish. Thus [F2] makes $\mathrm{id}_M$ smooth at every point. [given, F1, F2]

1.2 Claim 2, continuity: $F$ and $G$ are continuous by [[prop-smooth-maps-are-continuous]], so $G\circ F$ is continuous. For $p\in M$ choose a chart $(W,\chi)$ of $P$ at $G(F(p))$, then a chart $(V,\psi)$ of $N$ at $F(p)$ with $G(V)\subseteq W$, and finally a chart $(U,\varphi)$ of $M$ at $p$ with $F(U)\subseteq V$; continuity permits these restrictions. [given, F1]

2.1 On $\varphi(U)$, the representative of the composite with respect to $(U,\varphi)$ and $(W,\chi)$ is $\chi\circ(G\circ F)\circ\varphi^{-1} =\bigl(\chi\circ G\circ\psi^{-1}\bigr)\circ\bigl(\psi\circ F\circ\varphi^{-1}\bigr)$. Both factors are smooth near the relevant points by [F2], so their composite is smooth by [L1]. Since step 1.2 already established continuity, [F2] makes $G\circ F$ smooth at $p$. [F2, L1, step 1.2]

3.1 Applying step 2.1 at every point shows $G\circ F$ is smooth on all of $M$, and step 1.1 gives smoothness of the identity. Hence both claims are proved. [step 1.1, step 2.1] ∎
