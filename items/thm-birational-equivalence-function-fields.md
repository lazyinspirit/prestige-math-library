---
id: thm-birational-equivalence-function-fields
kind: theorem
title: "Irreducible affine varieties are birational exactly when their function fields are isomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-birational-equivalence-varieties, thm-rational-maps-to-affine-variety-function-field]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 5.39"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §3.1-§3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $X$ and $Y$ be classical affine varieties. Then $X$ and $Y$ are birationally
equivalent if and only if their function fields are isomorphic as extensions of
$k$.

## Facts & Assumptions

**Given:** Classical affine varieties $X$ and $Y$.

[L1] A birational map is a rational map admitting a rational inverse ([[def-birational-equivalence-varieties]]).

[L2] Dominant rational maps $X \dashrightarrow Y$ correspond exactly to injective $k$-homomorphisms $k(Y)\hookrightarrow k(X)$ ([[thm-rational-maps-to-affine-variety-function-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\eta:X \dashrightarrow Y$ is birational, with inverse $\theta:Y \dashrightarrow X$. By [L2], both maps induce injective pullbacks $\eta^*:k(Y)\hookrightarrow k(X)$ and $\theta^*:k(X)\hookrightarrow k(Y)$. Because pullback is functorial, $(\theta\circ\eta)^*=\eta^*\circ\theta^*$ and $(\eta\circ\theta)^*=\theta^*\circ\eta^*$. Since the two compositions are identity rational maps by [L1], the two field homomorphisms are inverse isomorphisms. [L1, L2, given]

1.2 Conversely, let $\sigma:k(Y)\xrightarrow{\sim}k(X)$ be a field isomorphism. By [L2], the map $\sigma$ comes from a dominant rational map $\eta:X \dashrightarrow Y$, and $\sigma^{-1}$ comes from a dominant rational map $\theta:Y \dashrightarrow X$. Applying [L2] again to the compositions shows that $\theta\circ\eta$ and $\eta\circ\theta$ induce the identity on function fields, so they are the identity rational maps. Hence $\eta$ is birational. [L1, L2]

2.1 Steps 1.1 and 1.2 prove that $X$ and $Y$ are birationally equivalent exactly when $k(X)\cong k(Y)$ as $k$-extensions. [step 1.1, step 1.2] ∎
