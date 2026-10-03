---
id: cor-negative-expected-dimension-generic-intersections-are-empty
kind: corollary
title: "Negative expected dimension forces empty generic intersections"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-transverse-smooth-maps, def-transverse-embedded-submanifolds, thm-transversality-homotopy-theorem, thm-strong-whitney-approximation-by-transverse-maps, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed p. 77 (complementary dimension and the discussion of intersections)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "Problem 16, printed p. 54 (transversal intersection and $n+n'<m$ means the intersection is empty)"
---

## Statement

Let $f:X^x\to M^n$ and $g:Z^z\to M^n$ be smooth maps with $x+z<n$. If $f$ and $g$ are transverse, then $X\times_MZ=\varnothing$. In particular, if $A^a,B^b\subseteq M^n$ are transverse embedded submanifolds with $a+b<n$, then $A\cap B=\varnothing$. For the perturbation conclusion assume $\mathrm{AC}_\omega$ and fix a **closed embedded** submanifold $Z\subseteq M$ with $\dim X+\dim Z<n$. Every strong smooth neighbourhood of $f$ contains a map transverse to $Z$ ([[thm-strong-whitney-approximation-by-transverse-maps]]), hence disjoint from $Z$; a disjoint homotopic map is supplied by [[thm-transversality-homotopy-theorem]]. The cited approximation theorem concerns a fixed closed embedded submanifold, not an arbitrary map $g$.

## Facts & Assumptions

**Given:** Smooth maps $f:X^x\to M^n$ and $g:Z^z\to M^n$ with $x+z<n$, and the transverse case of the statement.

[F1] $f$ and $g$ are transverse when $df_a(T_aX)+dg_b(T_bZ)=T_yM$ at every pair $(a,b)$ with $f(a)=g(b)=y$ ([[def-transverse-smooth-maps]]).

[F2] Embedded submanifolds $A,B\subseteq M$ are transverse when their inclusions are, that is, when $T_pA+T_pB=T_pM$ for every $p\in A\cap B$ ([[def-transverse-embedded-submanifolds]]).

[F3] Assume $\mathrm{AC}_\omega$: every strong smooth neighbourhood of a smooth map $f$ contains a smooth map transverse to a fixed closed embedded submanifold ([[thm-strong-whitney-approximation-by-transverse-maps]]).

[F4] Assume $\mathrm{AC}_\omega$: every smooth map is smoothly homotopic to a smooth map transverse to a fixed closed embedded submanifold ([[thm-transversality-homotopy-theorem]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct, by rank counting.

1.1 Suppose there were $(a,b)$ with $f(a)=g(b)=y$. Then [F1] gives $T_yM=df_a(T_aX)+dg_b(T_bZ)$; the right side is the span of the images of vector spaces of dimensions $x$ and $z$, so its dimension is at most $x+z<n=\dim T_yM$, a contradiction. Hence there are no pairs with $f(a)=g(b)$ and $X\times_MZ=\varnothing$. [F1, given, algebra]

2.1 If $A^a,B^b\subseteq M$ are transverse embedded submanifolds with $a+b<n$ and $p\in A\cap B$, then applying 1.1 to the two inclusion maps gives $T_pA+T_pB=T_pM$ with left side of dimension at most $a+b<n$, a contradiction; hence $A\cap B=\varnothing$. [F2, step 1.1, given, algebra]

3.1 For the perturbation clause, let a strong neighbourhood of $f$ and a closed embedded $Z$ be given with $\dim X+\dim Z<n$; under the stated $\mathrm{AC}_\omega$, by [F3] the neighbourhood contains a smooth map transverse to $Z$, and by 1.1 that map misses $Z$, so after an arbitrarily small perturbation the intersection is empty; in the homotopy formulation the transverse representative is supplied by [F4]. The rank count itself uses no choice; $\mathrm{AC}_\omega$ is consumed exactly by the approximation and homotopy theorems. [F3, F4, step 1.1, step 2.1] ∎
