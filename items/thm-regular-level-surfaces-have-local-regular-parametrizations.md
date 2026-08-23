---
id: thm-regular-level-surfaces-have-local-regular-parametrizations
kind: theorem
title: 'Regular level surfaces have local regular parametrizations with the same tangent plane'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-tangent-plane-of-a-regular-surface-patch, cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension, thm-total-derivative-computes-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Regular Level Set Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement

Let $F:U\subseteq\mathbb R^3\to\mathbb R$ be $C^k$, $k\ge1$, and let $c$ be a regular value. Every point of a regular level surface in $\mathbb R^3$ lies in the relative interior of a regular surface patch, and the patch tangent plane is the level-set tangent space.

If $F^{-1}(c)$ is empty, the assertion is vacuous.

## Facts & Assumptions

**Given:** The map $F$, regular value $c$, and a point $p\in F^{-1}(c)$.

[L1] Near $p$, the level is $\{p+u+g(u):u\in P\}$ for a $C^k$ map $g$ on a neighbourhood $P$ of $0$ in $K=\ker DF(p)$ with $g(0)=0$ and $Dg(0)=0$, and $\dim K=2$; a regular patch has nonzero parameter cross product in the interior and no interior parameter point shares its image with another point of the parameter region; its tangent plane is the span of the parameter derivatives ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]], [[def-admissible-regular-parametrized-surface-patch]], [[def-tangent-plane-of-a-regular-surface-patch]]).

[L2] Equal-dimensional finite-dimensional vector spaces are linearly isomorphic, and partial derivatives are total derivatives applied to the standard coordinate vectors ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] write the level near $p$ as $p+u+g(u)$ for $u$ near $0$ in $K$, with $Dg(0)=0$. By [L2], choose a linear isomorphism $L:\mathbb R^2\to K$. [given, L1, L2, choose]

2.1 Define $\varphi(s,t)=p+L(s,t)+g(L(s,t))$ and restrict it to a sufficiently small closed rectangle $D$ about $0$. The graph representation makes $\varphi$ injective, and $D\varphi(0)=L$ has independent columns. By continuity, after shrinking the rectangle the parameter cross product stays nonzero in its interior, so [L1] makes $(D,\varphi)$ a regular patch. [step 1.1, L1, L2, construct]

3.1 The image of $D\varphi(0)$ is $K$, so [L1] makes the patch tangent plane $K$ and also identifies $K$ with the level-set tangent space. Also $p=\varphi(0)$ lies in the relative interior of the patch image. [step 2.1, L1]

4.1 The construction works at every point of a nonempty regular level, and there is nothing to choose or prove for an empty level. [step 3.1] ∎
