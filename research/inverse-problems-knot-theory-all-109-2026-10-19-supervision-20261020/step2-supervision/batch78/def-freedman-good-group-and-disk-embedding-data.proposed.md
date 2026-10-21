---
id: def-freedman-good-group-and-disk-embedding-data
kind: definition
title: "Freedman disk-embedding data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§1.7, intersection and self-intersection numbers, printed pp.20–23; §5.1, Theorems 5.1A–5.1B, printed pp.85–87"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapter 11, intersection numbers and the relative disc-embedding statement"
    - title: "Mark Powell, Arunima Ray and Peter Teichner, The 4-dimensional disc embedding theorem and dual spheres"
      url: "https://www.maths.gla.ac.uk/~mpowell/s00029-025-01069-y.pdf"
      locator: "Selecta Mathematica 31:80 (2025), Theorem A, PDF p.3; Section 3, PDF p.13 (extending Whitney framing); Remark 6.3, PDF pp.22–23 (prescribed boundary framing and its relative extension obstruction)"
---

## Definition

Let $X$ be a compact connected oriented topological $4$-manifold with nonempty boundary, let $x_0\in X$, and put $G=\pi_1(X,x_0)$. A **finite relative disk-embedding datum** consists of proper generic immersions $f_i:(D^2,S^1)\looparrowright(X,\partial X)$, $1\le i\le n$, whose boundary circles are embedded and pairwise disjoint, together with framed generic immersions $g_i:S^2\looparrowright\operatorname{int}X$ that are algebraically dual to the disks. A topological generic immersion has the local models of a smooth generic immersion: at a point with one inverse image its image sheet is locally flat, with a proper half-space chart at boundary points in which the disk is a half-plane and its boundary lies on the ambient boundary, and each of its finitely many self-double points has exactly two preimages and the coordinate-plane model $\mathbb R^2\times\{0\}$ and $\{0\}\times\mathbb R^2$ in a chart of $X$. All mutual intersections among the disk and sphere maps are also required to be finite and transverse, so the equivariant intersection sums below are finite. Proper means that the inverse image of $\partial X$ is exactly the domain boundary. Each disk $f_i$ is supplied with a specified normal framing along $S^1$, equivalently the framing of its boundary attaching solid torus; this boundary framing is part of the datum and need not extend over $D^2$. Each sphere $g_i$ is supplied with a trivialization of its normal microbundle over $S^2$. Choose paths from $x_0$ to the immersed surfaces and orient the surfaces. Each transverse intersection $p$ of two surfaces contributes $\epsilon(p)g_p$ to $\lambda$, where $\epsilon(p)\in\{1,-1\}$ compares their induced local orientation with the chosen orientation of $X$, and $g_p\in G$ is the loop that travels along the chosen path to the first surface, then to $p$, and returns along the second surface and its chosen path. Thus $\lambda$ is a signed equivariant intersection sum in $\mathbb Z[G]$. Wall's self-intersection sum $\mu$ is the signed sum over self-double points in $\mathbb Z[G]/\langle g-g^{-1}:g\in G\rangle$, because interchanging the two sheets replaces a label by its inverse. The relative normal Euler (boundary-framing) obstruction of $f_i$ is zero precisely when its specified boundary framing extends over $D^2$; the datum does not assume that it vanishes. The spheres are **algebraically dual** when $\lambda(f_i,g_j)=\delta_{ij}$, $\lambda(g_i,g_j)=0$ for every $i,j$, and $\mu(g_i)=0$ for every $i$. The disk data are **algebraically unobstructed** when also $\lambda(f_i,f_j)=0$ for $i\ne j$ and $\mu(f_i)=0$ for every $i$.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Proper embeddings, local flatness, and boundary collars]]

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §5.1, Theorems 5.1A–5.1B, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

Stefan Behrens et al., *The Disc Embedding Theorem*, Chapter 11, https://doi.org/10.1093/oso/9780198841319.001.0001

Mark Powell, Arunima Ray and Peter Teichner, “The 4-dimensional disc embedding theorem and dual spheres,” Section 6 and Remark 6.3, https://www.maths.gla.ac.uk/~mpowell/DET-and-dual-spheres_final.pdf
