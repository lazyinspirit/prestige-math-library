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
  audited: 2026-08-29
  precheck: pass
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

1.1 Claim 1: for a smooth chart $(U,\varphi)$, the representative of [given, F1, F2] $\mathrm{id}_M$ with respect to $(U,\varphi)$ and $(U,\varphi)$ is $\varphi\circ\mathrm{id}_M\circ\varphi^{-1}=\mathrm{id}_{\varphi(U)}$, which is smooth, each coordinate partial being a constant function; [F2] then declares $\mathrm{id}_M$ smooth at every point, and continuity holds by [[prop-smooth-maps-are-continuous]]. [given, F1, F2]

1.2 Claim 2, continuity: both maps are continuous (smooth maps are continuous), [given, choose] so $G\circ F$ is continuous; for $p\in M$ choose a chart $(W,\chi)$ of $P$ at $G(F(p))$ and then charts $(V,\psi)$ of $N$ at $F(p)$ with $G(V)\subseteq W$ and $(U,\varphi)$ of $M$ at $p$ with $F(U)\subseteq V$, which is possible because $F$ and $G$ are continuous and charts exist. [given, choose]

1.3 The representative of the composite with respect to $(U,\varphi)$ and [given, F2, L1] $(W,\chi)$ is $\chi\circ(G\circ F)\circ\varphi^{-1} =\bigl(\chi\circ G\circ\psi^{-1}\bigr)\circ\bigl(\psi\circ F\circ\varphi^{-1} \bigr)$ on $\varphi\bigl(U\cap F^{-1}(V)\cap(G\circ F)^{-1}(W)\bigr)$. The two factors are smooth by the smoothness of $F$ and $G$ through [F2], so [L1] makes their composite smooth. Hence $G\circ F$ is smooth at $p$ by [F2]. [given, F2, L1]

2.1 Applying step 1.3 at every point shows $G\circ F$ is smooth on all of $M$, and step 1.1 gives smoothness of the identity. Hence both claims are proved. [step 1.1, step 1.3] ∎
