---
id: thm-jacobian-sign-is-constant-on-a-connected-regular-domain
kind: theorem
title: "The Jacobian sign of a regular $C^1$ map is constant on a connected domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-orientation-of-a-regular-c-one-map, def-c-one-map-and-local-inverse, cor-determinant-is-a-polynomial-in-the-matrix-entries, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be nonempty, open, and connected, and let $f:U\to\mathbb R^n$ be $C^1$ with invertible derivative everywhere. Then either $\det Df(x)>0$ for every $x\in U$ or $\det Df(x)<0$ for every $x\in U$. Thus $f$ has one local orientation throughout $U$ ([[def-local-orientation-of-a-regular-c-one-map]]).

## Facts & Assumptions

**Given:** The hypotheses in the Statement. A $C^1$ map has continuous derivative-matrix entries ([[def-c-one-map-and-local-inverse]]), and connected subsets of the real line are order-convex ([[cor-connected-subsets-of-the-line]]).

[L1] The function $\det:M_n(\mathbb R)\to\mathbb R$ is evaluation of a polynomial in the matrix entries ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]]).

[L2] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 The entries of $Df$ are continuous, and [L1] expresses $x\mapsto\det Df(x)$ as a polynomial in them. Hence the Jacobian determinant is continuous on $U$. [L1, given]

2.1 By [L2], its image is a connected subset of $\mathbb R$. Regularity excludes zero. If the image contained both a negative and a positive value, order-convexity would force it to contain zero, a contradiction. Nonemptiness therefore leaves exactly one sign throughout $U$. [step 1.1, L2, given] ∎
