---
id: prop-compact-lie-group-actions-are-proper
kind: proposition
title: Compact Lie-group actions are proper
status: published
origin: pipeline
deps: [def-free-and-proper-lie-group-actions, def-compact-space, def-locally-compact-space, def-hausdorff-space, thm-finite-products-of-compact-spaces, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, thm-compactness-under-continuous-maps, lem-products-preserve-t0-t1-and-hausdorff]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Corollary 21.6 and proof, printed page 544
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Every continuous action of a compact Lie group $G$ on a Hausdorff locally
compact manifold $M$ is proper: its action-graph map
$\Theta(g,x)=(g\mathbin{\cdot}x,x)$ has compact inverse images of compact
sets. In particular, every smooth action of a compact Lie group is proper in
the sense of [[def-free-and-proper-lie-group-actions]].

## Facts & Assumptions

**Given:** A compact Lie group $G$, a Hausdorff locally compact manifold $M$,
and a continuous action $G\times M\to M$.

[F1] The action is proper exactly when
$\Theta:G\times M\to M\times M$, $\Theta(g,x)=(g\cdot x,x)$, has compact
inverse images of compact subsets. [[def-free-and-proper-lie-group-actions]].

[F2] The continuous image of a compact subset is compact.
[[thm-compactness-under-continuous-maps]].

[F3] Finite products of compact spaces are compact.
[[thm-finite-products-of-compact-spaces]].

[F4] A compact subset of a Hausdorff space is closed, and a closed subset of a
compact space is compact.
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-closed-subspace-of-a-compact-space-is-compact]].

[F5] A finite product of Hausdorff spaces is Hausdorff.
[[lem-products-preserve-t0-t1-and-hausdorff]].

## Proof

**Proof technique:** direct compactness argument.

1.1 Let $K\subseteq M\times M$ be compact and let $D=\operatorname{pr}_2(K)$. The projection is continuous, so $D$ is compact by [F2]. [given, F2]

2.1 Since both coordinates of every $(g,x)\in\Theta^{-1}(K)$ satisfy $(g\cdot x,x)\in K$, its second coordinate $x$ lies in $D$. Hence $\Theta^{-1}(K)\subseteq G\times D$, and $G\times D$ is compact by [F3]. [step 1.1, F3]

3.1 The manifold $M$ is Hausdorff by hypothesis, so $M\times M$ is Hausdorff by [F5]. Thus $K$ is closed by [F4]. The map $\Theta$ is continuous because the action and the second projection are continuous, so $\Theta^{-1}(K)$ is closed in $G\times M$, and therefore also closed in the subspace $G\times D$. [given, F4, F5, step 1.1, step 2.1]

4.1 By [F4], the closed subset $\Theta^{-1}(K)$ of the compact space $G\times D$ is compact. Since $K$ was arbitrary, [F1] proves properness. Local compactness of $M$ is part of the stated manifold context but is not needed in this compact-domain argument; no freeness or choice principle is used. [F1, F4, step 2.1, step 3.1] ∎
