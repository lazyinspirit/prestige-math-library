---
id: lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism
kind: lemma
title: A degree-one holomorphic map of compact Riemann surfaces is an isomorphism
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 0
deps:
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - def-biholomorphic-map
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - thm-compact-subset-of-a-hausdorff-space-is-closed
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: Chapter 15, proof of Theorem 15.7, printed p. 130, where a degree-one map to the sphere is used
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: Chapter 7 §2, proof of Corollary 7.7, printed p. 61, where the degree-one isomorphism criterion is invoked for the Abel map
---

## Statement

Let $f:X\to Y$ be a nonconstant holomorphic map between compact connected Riemann surfaces ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-riemann-surface-and-holomorphic-atlas]]). Then $f$ is proper and has a degree $d$ as in [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]. If $d=1$, then $f$ is bijective and its set-theoretic inverse $g:Y\to X$ is holomorphic. Thus $g\circ f=\mathrm{id}_X$ and $f\circ g=\mathrm{id}_Y$, so $f$ is an isomorphism of Riemann surfaces.

## Facts & Assumptions

**Given:** A nonconstant holomorphic map $f:X\to Y$ between compact connected Riemann surfaces.

[F1] The source $X$ is compact, and the target $Y$ is Hausdorff because it is a Riemann surface ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] A holomorphic map of Riemann surfaces is continuous ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F3] Every compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F4] For a proper nonconstant holomorphic map between connected Riemann surfaces, every fibre is nonempty and finite, and the degree is the constant weighted count $\sum_{x\in f^{-1}(y)}e_x(f)$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F5] Each ramification index $e_x(f)$ is a positive integer, and $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$ ([[def-ramification-index-and-branch-value]]).

[F6] In suitable centred charts, $f$ is locally $z\mapsto z^{e_x(f)}$; in particular, if $e_x(f)=1$, the local inverse is holomorphic ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $K\subseteq Y$ be compact. By [F3], $K$ is closed in $Y$, and by [F2] its preimage $f^{-1}(K)$ is closed in $X$. Since $X$ is compact by [F1], $f^{-1}(K)$ is compact. This holds for every compact $K$, so $f$ is proper and the degree in [F4] is defined. [F1,F2,F3,F4]

1.2 Suppose $d=1$. For every $y\in Y$, [F4] gives a nonempty finite fibre with $\sum_{x\in f^{-1}(y)}e_x(f)=1$. Each summand is a positive integer by [F5], so the fibre has exactly one point, with ramification index $1$. Thus $f$ is bijective and is unramified at every point. [F4,F5]

2.1 For each $x\in X$, [F6] gives charts in which $f$ is $z\mapsto z$ near $x$, so it has a holomorphic local inverse near $f(x)$. The set-theoretic inverse $g$ from step 1.2 agrees with each such local inverse on its domain, hence is holomorphic on all of $Y$. Its defining identities $g\circ f=\mathrm{id}_X$ and $f\circ g=\mathrm{id}_Y$ show that $f$ is an isomorphism. [F6, step 1.2] ∎
