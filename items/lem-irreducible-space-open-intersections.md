---
id: lem-irreducible-space-open-intersections
kind: lemma
title: "Irreducibility is equivalent to every pair of nonempty open sets meeting"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-variety-classical, thm-zariski-closed-sets-affine-space]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2g"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field, let $n\ge 0$, and let
$X\subseteq \mathbf A_k^n$ be a nonempty subset with the subspace Zariski
topology. Then the following are equivalent:

1. $X$ is irreducible.
2. Every pair of nonempty open subsets of $X$ has nonempty intersection.
3. Every nonempty open subset of $X$ is dense in $X$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, an integer $n\ge 0$, and a nonempty subset $X\subseteq \mathbf A_k^n$ with the subspace Zariski topology.

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is irreducible. If $U,V\subseteq X$ are nonempty open subsets with $U\cap V=\varnothing$, then $X=(X\setminus U)\cup(X\setminus V)$ is a union of two proper closed subsets, contrary to irreducibility. Therefore every two nonempty open subsets of $X$ meet. [given]

1.2 Conversely, assume every two nonempty open subsets of $X$ meet. If $X=A\cup B$ with $A$ and $B$ proper closed subsets, then $X\setminus A$ and $X\setminus B$ are nonempty disjoint open subsets, a contradiction. Hence $X$ is irreducible. [given, algebra]

1.3 If every nonempty open subset of $X$ is dense and $U,V$ are nonempty open subsets, then $\overline U=X$, so $U$ meets the nonempty open set $V$. Thus every pair of nonempty open subsets meets. [given, algebra]

2.1 Assume every two nonempty open subsets of $X$ meet, and let $U\subseteq X$ be nonempty open. If $\overline U\ne X$, then $X\setminus\overline U$ is a nonempty open set disjoint from $U$, contradiction. So $U$ is dense. [step 1.2, given]

3.1 Steps 1.1 and 1.2 show that irreducibility is equivalent to pairwise intersection of nonempty opens, and steps 2.1 and 1.3 show that this is also equivalent to density of every nonempty open subset. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
