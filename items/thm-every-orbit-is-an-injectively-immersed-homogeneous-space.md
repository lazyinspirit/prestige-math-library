---
id: thm-every-orbit-is-an-injectively-immersed-homogeneous-space
kind: theorem
title: Every orbit is an injectively immersed homogeneous space
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-stabilizers-are-closed-embedded-lie-subgroups, thm-quotient-manifold-by-a-closed-lie-subgroup, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, thm-constant-rank-theorem-for-manifolds]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Characterization Theorem 21.18 and proof, printed pages 552-553
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.12 and Corollary 4.13, printed page 31
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth action of $G$ on $M$ and $x\in M$,
the map

$$\overline\Phi_x:G/G_x\longrightarrow M,\qquad gG_x\longmapsto g\cdot x,$$

is a $G$-equivariant injective immersion with image $G\cdot x$. Transporting
the quotient structure through this map gives the orbit its canonical
immersed homogeneous-space structure. The immersion need not be an embedding.

## Facts & Assumptions

**Given:** A smooth left action of $G$ on $M$ and a point $x\in M$.

[F1] The stabilizer is a closed embedded Lie subgroup.
[[thm-stabilizers-are-closed-embedded-lie-subgroups]].

[F2] For a closed subgroup, $G/G_x$ is a smooth homogeneous manifold and the
quotient map is a submersion. [[thm-quotient-manifold-by-a-closed-lie-subgroup]].

[F3] The kernel of the orbit-map differential at the identity is $T_eG_x$,
and its tangent image is the infinitesimal orbit.
[[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]].

[F4] Constant-rank normal forms describe immersed images locally.
[[thm-constant-rank-theorem-for-manifolds]].

[F5] The preceding closed-subgroup and quotient results carry countable
choice. [[def-countable-choice]].

## Proof

**Proof technique:** factor the orbit map through its stabilizer cosets.

1.1 If $g_1G_x=g_2G_x$, then $g_2^{-1}g_1\in G_x$ and $g_1\cdot x=g_2\cdot x$, so the formula is well defined. Conversely, equality of the two orbit points puts $g_2^{-1}g_1$ in $G_x$, proving injectivity. Every orbit point is $g\cdot x$, so the image is exactly $G\cdot x$. [F1, algebra]

2.1 For $a,g\in G$, $\overline\Phi_x(a\cdot gG_x)=ag\cdot x=a\cdot\overline\Phi_x(gG_x)$, so the map is $G$-equivariant. [step 1.1, algebra]

3.1 By [F2], the quotient map $q:G\to G/G_x$ is a submersion and has smooth local sections. Since $\Phi_x=\overline\Phi_x\circ q$, on the domain of such a section $s$ one has $\overline\Phi_x=\Phi_x\circ s$, proving smoothness. If $v\in T_{eG_x}(G/G_x)$ and $d\overline\Phi_x(v)=0$, choose $X\in\mathfrak g$ with $dq_eX=v$. Then $d\Phi_x(X)=0$, so [F3] gives $X\in T_eG_x=\ker dq_e$ and hence $v=0$. Equivariance from step 2.1 transports this injectivity to every coset. Thus the factor is an injective immersion. [F2, F3, step 1.1, step 2.1]

4.1 The local form [F4] now makes the image locally an immersed coordinate plane, and transport along the bijection in step 1.1 gives the canonical intrinsic orbit structure. The induced $G$-action is smooth and transitive by step 2.1. If $G_x=G$, the orbit is a zero-dimensional point; if $G_x=\{e\}$, its dimension is $\dim G$. Self-accumulating immersed orbits are allowed, which is why embeddedness is not asserted. $\mathrm{AC}_\omega$ is used through [F1]--[F3], and no further choice is made. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
