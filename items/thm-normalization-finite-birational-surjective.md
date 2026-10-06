---
id: thm-normalization-finite-birational-surjective
kind: theorem
title: Normalization is finite, surjective and birational
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normalization-affine-variety, cor-affine-normalization-is-finite, thm-lying-over, thm-birational-equivalence-function-fields, lem-dominant-map-pullback-function-fields, def-dominant-morphism-and-rational-map, def-birational-equivalence-varieties, lem-normality-local-on-affine-opens, def-axiom-of-choice, cor-contraction-of-maximal-ideals-integral-extension, lem-maximal-ideals-are-points-over-algebraically-closed-field]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-1.md
      - research/frontier-38-owner-30-dispatch/reader-reader-1.result.json
      - research/frontier-38-owner-30-step5-hash-1-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-1-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: Definition 8.5, Proposition 8.3 and Example 8.18 (the normalization is finite)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible affine variety over an
algebraically closed field and $\nu\colon X^{\nu}\to X$ its normalization. Then
$\nu$ is finite, surjective, and birational: it induces an isomorphism
$k(X)\xrightarrow{\sim}k(X^{\nu})$ of function fields over $k$.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible affine variety $X$ with coordinate ring $A=k[X]$ and function field $k(X)$, the integral closure $B$ of $A$ in $k(X)$, the normalization $X^{\nu}$ with $k[X^{\nu}]=B$ and the morphism $\nu$ whose pullback is the inclusion $A\hookrightarrow B$.

[F1] The normalization is finite and birational: $\nu$ is a finite morphism, and its pullback $\nu^*\colon k(X)\to k(X^{\nu})$ is an isomorphism of $k$-extensions ([[def-normalization-affine-variety]], [[cor-affine-normalization-is-finite]], [[thm-birational-equivalence-function-fields]], [[def-birational-equivalence-varieties]]).

[F2] Lying over: if $A\to B$ is integral and $\mathfrak p\subseteq A$ is prime with $\ker\subseteq\mathfrak p$, there is a prime $\mathfrak q\subseteq B$ contracting to $\mathfrak p$; moreover a prime of $B$ is maximal exactly when its contraction to $A$ is ([[thm-lying-over]], [[cor-contraction-of-maximal-ideals-integral-extension]]). AC is used here.

[F3] Points of the affine varieties $X$ and $X^{\nu}$ correspond bijectively to maximal ideals of $A$ and $B$, and pullback of functions is the ring map induced by $\nu$, so the maximal ideal of $\nu(y)$ is the contraction of the maximal ideal of $y$ ([[lem-maximal-ideals-are-points-over-algebraically-closed-field]], [[def-normalization-affine-variety]]).

[F4] Dominant morphisms pull back function fields, which is how the function-field isomorphism of [F1] is read as birationality of $\nu$ ([[lem-dominant-map-pullback-function-fields]], [[def-dominant-morphism-and-rational-map]]); normality of $X^{\nu}$ is recorded in [[def-normalization-affine-variety]] and [[lem-normality-local-on-affine-opens]].

## Proof

1.1 By the construction of the normalization, $B$ is a finite $A$-module, so $\nu$ is finite; and $k[X^{\nu}]=B$ has fraction field $k(X^{\nu})=\operatorname{Frac}(B)=\operatorname{Frac}(A)=k(X)$, so the pullback $\nu^*$ is an isomorphism of function fields. Thus $\nu$ is finite and birational [F1, F4]. [F1, F4, given]

1.2 Surjectivity. Let $x\in X$ with maximal ideal $\mathfrak m_x\subseteq A$. Since $B$ is a finite $A$-module the inclusion $A\hookrightarrow B$ is integral, and its kernel is zero because $A$ is a domain; lying over [F2] therefore produces a prime $\mathfrak q\subseteq B$ with $\mathfrak q\cap A=\mathfrak m_x$, and $\mathfrak q$ is maximal by the maximality transfer [F2]. By [F3] there is a point $y\in X^{\nu}$ with $\mathfrak q=\mathfrak m_y$, and the contraction of $\mathfrak m_y$ along $\nu^*$ is the maximal ideal of $\nu(y)$; since that contraction is $\mathfrak m_x$, the points $\nu(y)$ and $x$ have the same maximal ideal, hence $\nu(y)=x$. So $x$ lies in the image of $\nu$. [F1, F2, F3, given]

2.1 Steps 1.1 and 1.2 give all three assertions: $\nu$ is finite and birational, and every point of $X$ lies in the image of $\nu$, so $\nu$ is surjective. The induced map $k(X)\to k(X^{\nu})$ is the isomorphism of [F1], which completes the proof. [F1, step 1.1, step 1.2] ∎
