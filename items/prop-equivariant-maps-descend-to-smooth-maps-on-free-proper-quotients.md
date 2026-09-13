---
id: prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients
kind: proposition
title: Equivariant maps descend on free proper quotients
status: published
origin: pipeline
deps: [def-equivariant-map-and-equivariant-vector-bundle, thm-free-proper-action-quotient-manifold, thm-quotient-universal-property, thm-constant-rank-theorem-for-manifolds]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Quotient-map smoothness criterion used in Theorem 21.10, printed pages 544–547
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

Let $M$ and $N$ be smooth free proper $G$-manifolds. Every smooth
$G$-equivariant map $f:M\to N$ induces a unique smooth map
$\overline f:M/G\to N/G$ such that

$$\overline f\circ q_M=q_N\circ f.$$

## Facts & Assumptions

**Given:** The two free proper $G$-manifolds, their quotient maps, and a smooth
equivariant map $f:M\to N$.

[F1] Equivariance means $f(g\cdot x)=g\cdot f(x)$.
[[def-equivariant-map-and-equivariant-vector-bundle]].

[F2] The quotient maps are smooth surjective submersions.
[[thm-free-proper-action-quotient-manifold]].

[F3] A continuous map constant on quotient fibres factors uniquely and
continuously through the quotient. [[thm-quotient-universal-property]].

[F4] A smooth submersion has local projection form and smooth local sections.
[[thm-constant-rank-theorem-for-manifolds]].

## Proof

**Proof technique:** quotient universality followed by local submersion
sections.

1.1 If $q_M(x)=q_M(y)$, then $y=g\cdot x$ for some $g\in G$. By [F1], $f(y)=g\cdot f(x)$, so $q_N(f(y))=q_N(f(x))$. Thus the smooth map $q_N\circ f$ is constant on the fibres of $q_M$. [F1, given]

2.1 Apply [F3] to obtain a unique continuous map $\overline f:M/G\to N/G$ with $\overline f\circ q_M=q_N\circ f$. [F2, F3, step 1.1]

3.1 Let $u\in M/G$. Since $q_M$ is a submersion by [F2], [F4] supplies a smooth local section $s:U\to M$ near $u$. On $U$, the factorization identity gives $\overline f|_U=q_N\circ f\circ s$, which is smooth. Such neighborhoods cover $M/G$, so $\overline f$ is smooth. Uniqueness as a smooth map follows from the uniqueness in [F3]. No choice principle is used. [F2, F3, F4, step 2.1] ∎
