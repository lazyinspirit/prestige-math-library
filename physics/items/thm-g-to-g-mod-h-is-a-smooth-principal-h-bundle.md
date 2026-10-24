---
id: thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle
kind: theorem
title: G to G/H is a smooth principal H-bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-principal-h-bundle-g-to-g-mod-h, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-constant-rank-theorem-for-manifolds, thm-cartans-closed-subgroup-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Construction Theorem 21.17 and local-product proof, printed pages 551–552
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Theorem 4.1, printed page 28
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

Assume $\mathrm{AC}_\omega$. For every closed subgroup $H\le G$, the
canonical map $q:G\to G/H$ is a smooth principal $H$-bundle: it is locally
$H$-equivariantly diffeomorphic to $U\times H$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and a closed subgroup $H$.

[A1] The principal-bundle candidate, including the right-action convention, is fixed. [[def-countable-choice]], [[def-principal-h-bundle-g-to-g-mod-h]].

[F1] The quotient map is a surjective submersion, and the closed subgroup $H$ has its embedded Lie-subgroup structure. [[thm-quotient-manifold-by-a-closed-lie-subgroup]]. [[thm-cartans-closed-subgroup-theorem]].

[F2] A submersion admits a smooth local section near each point in its image. [[thm-constant-rank-theorem-for-manifolds]].

## Proof

**Proof technique:** trivialize using a local quotient section.

1.1 By [F1], $q$ is a surjective submersion. For any $x_0\in G/H$, [F2] therefore supplies an open neighborhood $U$ of $x_0$ and a smooth section $s:U\to G$ with $q\circ s=\operatorname{id}_U$. [A1, F1, F2]

2.1 Define $$\Phi:U\times H\longrightarrow q^{-1}(U),\qquad \Phi(x,h)=s(x)h.$$ It is smooth. It is bijective: every $g$ over $x$ has $s(x)^{-1}g\in H$, and that element is unique. Its inverse is $$g\longmapsto\bigl(q(g),s(q(g))^{-1}g\bigr),$$ which is smooth because the second component is a smooth $G$-valued expression whose values lie in the embedded subgroup $H$ and, in local product coordinates, is exactly the smooth $H$-coordinate. Thus $\Phi$ is a diffeomorphism over $U$. [A1, step 1.1, algebra]

3.1 For $k\in H$, $\Phi(x,hk)=s(x)hk=\Phi(x,h)k$, so $\Phi$ is equivariant for the required right action. Translating the identity chart by each $g\in G$ supplies such a chart around every coset $gH$. [A1, step 2.1, algebra]

4.1 These charts prove the principal-bundle assertion. If $H=G$, this is the principal $G$-bundle $G\to\{*\}$; if $H=\{e\}$ it is the identity bundle. No connectedness, normality, or effectiveness condition is needed. Countable choice is inherited through [A1] and [F1]. [A1, F1, F2, step 3.1] ∎
