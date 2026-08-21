---
id: thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets
kind: theorem
title: "A proper Euclidean local diffeomorphism has finite diffeomorphic sheets near every target point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-proper-map-between-euclidean-open-sets, def-regular-locus-of-a-c-one-map, cor-c-one-local-diffeomorphisms-are-open-maps, thm-euclidean-inverse-function-theorem, def-metric-compactness, thm-continuous-image-of-a-compact-space-is-compact, lem-closed-subset-of-a-compact-space-is-compact, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, cor-euclidean-closed-balls-and-spheres-are-compact, def-homeomorphism-and-open-maps, def-connected-space]
justified_by: []
forward_refs: [def-covering-map-and-evenly-covered-neighbourhoods, cor-connected-cover-of-a-simply-connected-space-is-trivial]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, Proposition 2.19"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U,V\subseteq\mathbb R^n$ be nonempty open sets, let $V$ be connected, and let $f:U\to V$ be a proper $C^1$ map such that $Df(x)$ is invertible for every $x\in U$. Then $f$ is surjective, every fibre is finite, and every $y\in V$ has an open neighbourhood whose preimage is a finite disjoint union of open sets, each carried $C^1$-diffeomorphically onto that neighbourhood by $f$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement. We use intrinsic compactness of subspaces ([[lem-compactness-is-intrinsic]]), compact Euclidean closed balls ([[cor-euclidean-closed-balls-and-spheres-are-compact]]), closedness of Euclidean compact sets ([[thm-compact-subset-is-closed-and-bounded]]), local inverses ([[thm-euclidean-inverse-function-theorem]]), and connectedness as the absence of a nontrivial clopen decomposition ([[def-connected-space]], [[def-homeomorphism-and-open-maps]]).

[L1] A continuous map $f:U\to V$ is proper when $f^{-1}[K]$ is compact in $U$ for every compact subset $K$ of $V$ ([[def-proper-map-between-euclidean-open-sets]]).

[L2] A $C^1$ map with everywhere-invertible derivative maps every open subset of its domain to an open subset of $\mathbb R^n$ ([[cor-c-one-local-diffeomorphisms-are-open-maps]]).

[L3] If $K$ is a compact subset of a metric space $X$ and $f:X\to Y$ is continuous into a metric space $Y$, then $f[K]$ is compact in $Y$ ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L4] A closed subset $F$ of a compact metric space $X$ is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 The map $f$ is closed. Indeed, let $A\subseteq U$ be closed and let $y$ lie in the closure of $f[A]$. Choose a compact closed target ball $K$ about $y$ contained in $V$. By [L1], $f^{-1}[K]$ is compact; $A\cap f^{-1}[K]$ is compact by [L4], and its image is compact by [L3], hence closed in $V$. Every sufficiently small neighbourhood of $y$ meets that image, so $y\in f[A]$. [L1, L3, L4, given]

2.1 By [L2], $f[U]$ is open, and by step 1.1 it is closed. It is nonempty, so connectedness of $V$ gives $f[U]=V$. For $y\in V$, [L1] makes $f^{-1}(y)$ compact. Local injectivity makes this fibre discrete, and its cover by neighbourhoods meeting the fibre in one point has a finite subcover; hence the fibre is nonempty and finite. [step 1.1, L1, L2, given]

3.1 Write $f^{-1}(y)=\{x_1,\ldots,x_s\}$. Choose pairwise disjoint open local-inverse neighbourhoods $O_i$ of the $x_i$, with open images $W_i$. The closed set $U\setminus\bigcup_iO_i$ has closed image by step 1.1 and that image omits $y$. Therefore $$W:=\left(\bigcap_iW_i\right)\setminus f\left[U\setminus\bigcup_iO_i\right]$$ is an open neighbourhood of $y$. Its preimage is the disjoint union of $O_i\cap f^{-1}[W]$, and each restriction is a $C^1$ diffeomorphism onto $W$. [step 1.1, step 2.1, given, choose] ∎

## Remarks

The neighbourhood property just proved is the one named by [[def-covering-map-and-evenly-covered-neighbourhoods]]. The simply-connected one-sheet consequence is [[cor-connected-cover-of-a-simply-connected-space-is-trivial]]. Neither later result is used above.
