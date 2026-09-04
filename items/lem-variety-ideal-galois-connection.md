---
id: lem-variety-ideal-galois-connection
kind: lemma
title: "Vanishing ideals and zero loci form a Galois connection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-algebraic-set, def-vanishing-ideal-affine-set]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, paragraph 2.23"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Proposition 1.3.1 and Lemma 1.6.1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field, let $X\subseteq k^n$, and let
$J\subseteq k[x_1,\ldots,x_n]$ be an ideal. Then
$$ X\subseteq V(J)\quad\Longleftrightarrow\quad J\subseteq I(X). $$
Consequently,
$$ X\subseteq V(I(X)) \qquad\text{and}\qquad J\subseteq I(V(J)). $$

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a subset $X\subseteq k^n$, and an ideal $J\subseteq k[x_1,\ldots,x_n]$.

[L1] $V(J)$ is the set of points where every polynomial in $J$ vanishes ([[def-affine-algebraic-set]]).

[L2] $I(X)$ is the set of polynomials vanishing at every point of $X$ ([[def-vanishing-ideal-affine-set]]).

## Proof

**Proof technique:** direct.

1.1 If $X\subseteq V(J)$ and $f\in J$, then every point of $X$ lies in $V(J)$, so [L1] says $f$ vanishes at every point of $X$. Therefore $f\in I(X)$ by [L2], and hence $J\subseteq I(X)$. [L1, L2, given]

1.2 Conversely, if $J\subseteq I(X)$ and $x\in X$, then every polynomial in $J$ lies in $I(X)$, so [L2] says every polynomial in $J$ vanishes at $x$. By [L1], this means $x\in V(J)$. Hence $X\subseteq V(J)$. [L1, L2, given]

2.1 Applying steps 1.1 and 1.2 with $J=I(X)$ yields $X\subseteq V(I(X))$, and applying them with $X=V(J)$ yields $J\subseteq I(V(J))$. [step 1.1, step 1.2] ∎
