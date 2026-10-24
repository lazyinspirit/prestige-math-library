---
id: thm-holomorphic-inverse-function-theorem-several-variables
kind: theorem
title: "The holomorphic inverse function theorem in several complex variables"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-biholomorphic-map-several-complex-variables, def-holomorphic-map-and-complex-jacobian, lem-real-jacobian-determinant-of-a-complex-linear-map, thm-euclidean-inverse-function-theorem, thm-componentwise-holomorphy-in-several-complex-variables, cor-holomorphic-functions-in-several-variables-are-smooth]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 5.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 5.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open, let $F:U\to\mathbb C^m$ be
holomorphic, and let $a\in U$. If $\det J_{\mathbb C}F(a)\ne0$, then there are
open neighbourhoods $U_0\subseteq U$ of $a$ and $V_0$ of $F(a)$ such that
$F|_{U_0}:U_0\to V_0$ is biholomorphic.

If $G:V_0\to U_0$ denotes the inverse, then

$$DG(w)=DF(G(w))^{-1}\qquad(w\in V_0).$$

## Facts & Assumptions

**Given:** The open set $U$, the holomorphic map $F:U\to\mathbb C^m$, and the point $a\in U$ with $\det J_{\mathbb C}F(a)\ne0$.

[L1] A holomorphic map into $\mathbb C^m$ has holomorphic scalar components, and holomorphic scalar functions of several variables are smooth in the real coordinates ([[thm-componentwise-holomorphy-in-several-complex-variables]], [[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[L2] For a complex-linear automorphism, the real Jacobian determinant is the squared modulus of the complex determinant ([[lem-real-jacobian-determinant-of-a-complex-linear-map]]).

[L3] A $C^1$ map of open subsets of $\mathbb R^{2m}$ with invertible real derivative has a local $C^1$ inverse, and that inverse derivative is the inverse linear map ([[thm-euclidean-inverse-function-theorem]]).

[F1] A biholomorphism is a bijective holomorphic map with holomorphic inverse ([[def-biholomorphic-map-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every component of $F$ is holomorphic and therefore smooth as a real-valued pair of functions on $\mathbb R^{2m}$. Hence the underlying real map $F:U\subseteq\mathbb R^{2m}\to\mathbb R^{2m}$ is $C^1$ on a neighbourhood of $a$. [given, L1]

1.2 The real derivative $DF(a)$ is the same linear map as the complex differential, now read over $\mathbb R$. Since $\det J_{\mathbb C}F(a)\ne0$, [L2] gives $\det_{\mathbb R}DF(a)\ne0$, so $DF(a)$ is invertible as a real linear map. [given, L2]

2.1 Apply [L3] to the real map from step 1.1 and the invertible derivative from step 1.2. This gives open neighbourhoods $U_0$ of $a$ and $V_0$ of $F(a)$ such that $F|_{U_0}:U_0\to V_0$ is bijective and has a $C^1$ inverse $G:V_0\to U_0$. Moreover, $$DG(w)=DF(G(w))^{-1}\qquad(w\in V_0).$$ [step 1.1, step 1.2, L3, construct]

3.1 For each $w\in V_0$, the linear map $DF(G(w))$ is $\mathbb C$-linear because $F$ is holomorphic, so its inverse $DG(w)$ is also $\mathbb C$-linear. Step 2.1 already gives $G$ real differentiable at every point with that differential, hence the defining linear approximation for holomorphy uses a $\mathbb C$-linear derivative. Therefore $G$ is holomorphic on $V_0$. Together with the holomorphy of $F|_{U_0}$, [F1] makes $F|_{U_0}$ biholomorphic. [step 2.1, F1, algebra] ∎
