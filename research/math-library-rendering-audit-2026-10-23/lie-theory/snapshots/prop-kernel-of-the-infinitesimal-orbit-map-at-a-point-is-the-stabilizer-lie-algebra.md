---
id: prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra
kind: proposition
title: Kernel of the infinitesimal orbit map
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-fundamental-vector-field-of-a-left-action, def-orbit-stabilizer-and-orbit-map-of-a-smooth-action, thm-stabilizers-are-closed-embedded-lie-subgroups, thm-constant-rank-theorem-for-manifolds, thm-quotient-manifold-by-a-closed-lie-subgroup, prop-tangent-space-of-a-homogeneous-quotient, thm-quotient-universal-property]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.12 and Corollary 4.13, printed page 31
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.18 and proof, printed pages 552-553
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$ and
$x\in M$, the linear infinitesimal orbit map

$$\mathfrak g\longrightarrow T_xM,\qquad X\longmapsto X_M(x)$$

has kernel $\mathfrak g_x=T_eG_x$. Its image is the tangent space at $x$ of
the orbit with its canonical injectively immersed structure.

## Facts & Assumptions

**Given:** A smooth left action, a point $x\in M$, its orbit map $\Phi_x(g)=g\cdot x$, and quotient map $q:G\to G/G_x$.

[F1] With the standing minus convention, $X_M(x)=d(\Phi_x)_e(-X)$. [[def-fundamental-vector-field-of-a-left-action]]. [[def-orbit-stabilizer-and-orbit-map-of-a-smooth-action]].

[F2] The stabilizer is a closed embedded Lie subgroup. [[thm-stabilizers-are-closed-embedded-lie-subgroups]].

[F3] A constant-rank map has local normal form $(u,v)\mapsto(u,0)$. [[thm-constant-rank-theorem-for-manifolds]].

[F4] The quotient $G/G_x$ is smooth, $q$ is a submersion, and $T_{eG_x}(G/G_x)\simeq\mathfrak g/\mathfrak g_x$. [[thm-quotient-manifold-by-a-closed-lie-subgroup]]. [[prop-tangent-space-of-a-homogeneous-quotient]].

[F5] Maps constant on quotient fibres factor uniquely through the quotient. [[thm-quotient-universal-property]].

[F6] The preceding suppliers carry countable choice. [[def-countable-choice]].

## Proof

**Proof technique:** constant rank followed by quotienting the kernel.

1.1 For every $g,h\in G$, $\Phi_x(gh)=g\cdot\Phi_x(h)$. Left translation by $g$ on $G$ and action by $g$ on $M$ are diffeomorphisms, so differentiating shows that $d(\Phi_x)_g$ has the same rank as $d(\Phi_x)_e$. Thus $\Phi_x$ has constant rank. [given, algebra]

2.1 The fibre $\Phi_x^{-1}(x)$ is $G_x$ by definition. Apply the local normal form [F3] at $e$: the tangent space of this fibre is the kernel of $d(\Phi_x)_e$. Because [F2] gives the fibre its embedded structure, $\ker d(\Phi_x)_e=T_eG_x=\mathfrak g_x$. [F2, F3, step 1.1]

3.1 By [F1], the infinitesimal map is $-d(\Phi_x)_e$. Multiplication by $-1$ does not change kernel or image, so step 2.1 proves $\ker(X\mapsto X_M(x))=\mathfrak g_x$ and identifies its image with $\operatorname{im}d(\Phi_x)_e$. [F1, step 2.1, algebra]

4.1 The orbit map is constant precisely on left cosets of $G_x$, so [F5] gives a bijection $\overline\Phi_x:G/G_x\to G\cdot x$. It is smooth because the submersion charts in [F4] provide local smooth sections $s$ of $q$ and $\overline\Phi_x=\Phi_x\circ s$ locally. At $eG_x$, its differential is the map induced by $d(\Phi_x)_e$ on $\mathfrak g/\mathfrak g_x$; steps 2.1 and 3.1 make it injective with image $\operatorname{im}d(\Phi_x)_e$. Equivariance translates this calculation to every coset, so $\overline\Phi_x$ is an injective immersion and its image carries the canonical immersed-orbit structure. [F4, F5, step 2.1, step 3.1]

5.1 Under that structure, step 4.1 gives $T_x(G\cdot x)=\operatorname{im}d(\Phi_x)_e=\{X_M(x):X\in\mathfrak g\}$. The stabilizer is nonempty and may be all of $G$; then the orbit tangent and quotient are zero. A trivial stabilizer gives kernel zero. Disconnected groups and noneffective actions are allowed. There is no metric, boundary, endpoint, or biconditional. $\mathrm{AC}_\omega$ is used through [F2] and [F4], and the pointwise linear algebra adds no choice. [F2, F4, F6, step 3.1, step 4.1] ∎
