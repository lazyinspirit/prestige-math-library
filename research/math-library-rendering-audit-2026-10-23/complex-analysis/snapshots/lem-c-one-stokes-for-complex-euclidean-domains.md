---
id: lem-c-one-stokes-for-complex-euclidean-domains
kind: lemma
title: Stokes for complex forms on a bounded C1 Euclidean domain
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-local-coordinate-formula-for-the-exterior-derivative
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapters 4–5"
      url: https://www.jirka.org/scv/scv.pdf
    - title: "Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.2"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume AC. Let $m\ge2$, let $D\subset\mathbb R^m$ be a bounded $C^1$
domain, and let $\alpha$ be a complex-valued $C^1$ $(m-1)$-form up to
$\overline D$. With the boundary orientation defined by outward-normal-first
and the $C^1$ surface trace,

$$\int_{\partial D}\alpha=\int_D d\alpha.$$

## Facts & Assumptions

**Given:** Assume AC; $D$ is a bounded $C^1$ domain in real dimension $m\ge2$; and $\alpha$ is a complex-valued $C^1$ $(m-1)$-form up to its closure.

[F1] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] The published divergence theorem assumes $\mathrm{AC}_\omega$, $m\ge2$, a bounded $C^1$ domain, and a real $C^1$ vector field up to the closure ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F3] Under those hypotheses the divergence integral equals the outward flux integral, and both are finite ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F4] Surface integration on compact embedded $C^1$ hypersurfaces uses the $\mathrm{AC}_\omega$ convention ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F5] For absolutely integrable signed surface data, the surface integral is the difference of its positive and negative integrals ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F6] In coordinates, $d(\sum_I a_I dx^I)=\sum_I da_I\wedge dx^I$ for smooth forms ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Proof

**Proof technique:** direct.

1.1 In standard oriented coordinates set $dV=dx_1\wedge\cdots\wedge dx_m$. Every complex $(m-1)$-form has a unique expression $\alpha=\sum_{j=1}^m(-1)^{j-1}A_j\,dx_1\wedge\cdots\wedge\widehat{dx_j}\wedge\cdots\wedge dx_m$ with $C^1$ complex coefficients $A_j$ up to the boundary. Directly differentiating these coefficients (the same coordinate formula as [F6], valid here because they are $C^1$) gives $d\alpha=(\sum_j\partial_jA_j)dV=(\operatorname{div}A)dV$. All terms with a repeated $dx_i$ vanish, and the sign $(-1)^{j-1}$ is canceled by moving $dx_j$ into its ordered volume position. [F6, given, algebra]

1.2 At a boundary point choose a positively oriented orthonormal tangent frame $t_1,\ldots,t_{m-1}$ so that $(\nu,t_1,\ldots,t_{m-1})$ is positive, where $\nu$ is the outward unit normal. The displayed form is $\iota_A dV$. Its boundary trace evaluated on that frame is $dV(A,t_1,\ldots,t_{m-1})=(A\cdot\nu)dS(t_1,\ldots,t_{m-1})$, because the tangential component of $A$ repeats a tangent direction in the top-degree volume form. Thus the outward-normal-first boundary trace is exactly $(A\cdot\nu)dS$; this identity is complex-linear in $A$. [F4, given, algebra]

2.1 By [F1], full AC supplies the weaker $\mathrm{AC}_\omega$ hypotheses in [F2] and the surface convention in [F4]. Apply [F3] separately to the real and imaginary vector fields $\operatorname{Re}A$ and $\operatorname{Im}A$. Adding the two equalities and using steps 1.1 and 1.2 gives $\int_D d\alpha=\int_{\partial D}\alpha$. This is the only use of AC. [F1, F2, F3, F5, step 1.1, step 1.2] ∎
