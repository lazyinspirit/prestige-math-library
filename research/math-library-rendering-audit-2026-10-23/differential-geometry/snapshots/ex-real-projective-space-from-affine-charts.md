---
id: ex-real-projective-space-from-affine-charts
kind: example
title: "Real projective space from affine charts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-atlas, def-smooth-manifold, def-quotient-topology]
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
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Example 1.10"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Example

Real projective space $\mathbb{RP}^n$ is the quotient of
$\mathbb R^{n+1}\setminus\{0\}$ by the relation $x\sim\lambda x$ for
$\lambda\neq0$, with the quotient topology ([[def-quotient-topology]]). For
$0\le i\le n$ let

$$U_i:=\{[x_0:\dots:x_n]\in\mathbb{RP}^n:x_i\neq0\}.$$

The affine coordinate map

$$\phi_i([x_0:\dots:x_n])=\left(\frac{x_0}{x_i},\dots,\widehat{\frac{x_i}{x_i}},\dots,\frac{x_n}{x_i}\right)\in\mathbb R^n$$

defines a chart on $U_i$, and these charts form a smooth atlas.

## Facts & Assumptions

**Given:** The quotient model of $\mathbb{RP}^n$, the open sets $U_i$, and the affine coordinate maps $\phi_i$.

[F1] The quotient topology is the one for which a subset is open exactly when its full preimage is open ([[def-quotient-topology]]).

[F2] A smooth atlas is a covering family of pairwise smoothly compatible charts ([[def-smooth-atlas]]).

[F3] A smooth manifold is a topological manifold equipped with a smooth structure ([[def-smooth-manifold]]).

## Verification

**Proof technique:** direct.

1.1 The sets $U_i$ cover $\mathbb{RP}^n$ because every nonzero vector in [F1] $\mathbb R^{n+1}$ has at least one nonzero coordinate. Each $U_i$ is open by [F1], since its preimage is $\{x_i\neq0\}\subseteq\mathbb R^{n+1}\setminus\{0\}$. The inverse chart sends $(u_1,\dots,u_n)\in\mathbb R^n$ to the projective class with $i$-th coordinate $1$ and the remaining coordinates given by the $u_j$, so each $\phi_i$ is a homeomorphism $U_i\to\mathbb R^n$. [F1]

2.1 On $U_i\cap U_j$ the transition map $\phi_j\circ\phi_i^{-1}$ is obtained by [F2, step 1.1] dividing all affine coordinates by the coordinate corresponding to $x_j/x_i$, which is nonzero on the overlap. Thus every transition function is rational with nonvanishing denominator on its domain, hence smooth. Therefore the family $(U_i,\phi_i)$ is a smooth atlas by [F2]. [F2, step 1.1]

3.1 This atlas equips $\mathbb{RP}^n$ with a smooth structure, so [F3] makes [F3, step 2.1] $\mathbb{RP}^n$ a smooth $n$-manifold. [F3, step 2.1] ∎
