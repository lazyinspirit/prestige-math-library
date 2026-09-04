---
id: cor-zariski-topology-cofinite-on-affine-line
kind: corollary
title: "On the affine line, the classical Zariski topology is cofinite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-algebraic-set, thm-zariski-closed-sets-affine-space, thm-root-bound-for-polynomials-over-a-domain]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, cofinite-topology discussion in §1.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field. A subset of $\mathbf A_k^1$ is
Zariski-closed if and only if it is either all of $\mathbf A_k^1$ or a finite
subset. Equivalently, the Zariski topology on $\mathbf A_k^1$ is the cofinite
topology.

## Facts & Assumptions

**Given:** An algebraically closed field $k$.

[L1] Closed subsets of $\mathbf A_k^1$ are exactly zero loci of subsets of $k[t]$ ([[thm-zariski-closed-sets-affine-space]]).

[L2] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 Let $C\subseteq \mathbf A_k^1$ be Zariski-closed and proper. By [L1], $C=V(S)$ for some $S\subseteq k[t]$. Because $C\ne \mathbf A_k^1$, some polynomial $f\in S$ is nonzero. Then $C\subseteq V(f)$, and [L2] says $V(f)$ is finite. Hence every proper closed subset is finite. [L1, L2, given, choose]

1.2 Conversely, if $F=\{a_1,\ldots,a_r\}\subseteq k$ is finite, then $$ F=V\!\left((t-a_1)\cdots(t-a_r)\right). $$ Also $\varnothing=V(1)$ and $\mathbf A_k^1=V(\varnothing)$ by the definition of zero locus. So every finite subset and the whole line are Zariski-closed. [L1, algebra]

2.1 Steps 1.1 and 1.2 are exactly the statement that the closed sets are the finite subsets together with the whole space, that is, the Zariski topology on $\mathbf A_k^1$ is cofinite. [step 1.1, step 1.2] ∎
