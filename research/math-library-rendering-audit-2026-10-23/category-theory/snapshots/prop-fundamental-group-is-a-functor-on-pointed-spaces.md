---
id: prop-fundamental-group-is-a-functor-on-pointed-spaces
kind: proposition
title: "The fundamental group is a functor $\\pi_1:\\mathbf{Top}_*\\to\\mathbf{Grp}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-groups-and-homomorphisms-form-category-grp, prop-topological-spaces-and-continuous-maps-form-category-top, def-functor-and-contravariant-functor, def-induced-homomorphism-on-fundamental-groups, thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathbf{Top}_*$ have pointed spaces $(X,x_0)$ as objects and
basepoint-preserving continuous maps as morphisms. The assignment

$$\pi_1:\mathbf{Top}_*\longrightarrow\mathbf{Grp},\qquad (X,x_0)\longmapsto\pi_1(X,x_0)$$

and $f\mapsto f_*$ is a functor.

## Facts & Assumptions

**Given:** Pointed spaces and basepoint-preserving continuous maps.

[L1] Spaces and continuous maps form $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]), and groups and homomorphisms form $\mathbf{Grp}$ ([[prop-groups-and-homomorphisms-form-category-grp]]).

[L2] The induced map $f_*$ on fundamental groups is the homomorphism of [[def-induced-homomorphism-on-fundamental-groups]], and induced maps satisfy $(g\circ f)_*=g_*\circ f_*$ and $(1_X)_*=1_{\pi_1(X,x_0)}$ ([[thm-induced-fundamental-group-map-functoriality]]).

[L3] A functor preserves identities and composition ([[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 Basepoint-preserving continuous maps contain identities and are closed under composition, so they form the stated pointed category. [given, L1]

2.1 By [L2], every morphism $f$ is sent to a group homomorphism $f_*$, and the identity and composite equations required in [L3] hold. [step 1.1, L2, L3]

3.1 Therefore the object and morphism assignments define a functor $\pi_1:\mathbf{Top}_*\to\mathbf{Grp}$. [step 2.1, L1, L3] ∎

