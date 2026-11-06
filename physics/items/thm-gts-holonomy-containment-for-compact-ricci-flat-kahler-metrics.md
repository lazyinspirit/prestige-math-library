---
id: thm-gts-holonomy-containment-for-compact-ricci-flat-kahler-metrics
kind: theorem
title: "Holonomy containment for compact Ricci-flat Kähler metrics"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + AC; the compact Calabi–Yau and parallel-transport conventions inherit this strength."
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - thm-general-stokes-theorem
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VIII §6, printed pp. 378–379, determinant metric and Ricci-form convention."
    - title: "Xianzhe Dai, Lectures on Dirac Operators and Index Theory"
      url: "https://web.math.ucsb.edu/~dai/book.pdf"
      locator: "§2.3–2.5, pp. 14–20, Kähler and canonical-bundle connection context."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X$ be a compact connected Kähler $n$-fold, $n\ge1$, with a Ricci-flat Kähler metric $g$ and a specified nowhere-zero holomorphic $n$-form $\Omega$. For every base point $p\in X$, the full Levi-Civita holonomy group satisfies $\operatorname{Hol}_p(g)\subseteq SU(n)$ in a unitary frame.

## Statement references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

## Facts & Assumptions

**Given:** A compact connected Kähler $n$-fold $X$, a Ricci-flat Kähler metric $g$, a base point $p$, and a nowhere-zero holomorphic section $\Omega$ of $K_X=\Lambda^n(T_X^{1,0})^*$.

[F1] The broad Calabi–Yau conventions define full holonomy by Levi-Civita parallel transport around based loops and identify $U(n)$ and $SU(n)$ in a unitary frame ([[def-gts-compact-calabiyau-manifold-conventions]]).

[F2] In holomorphic coordinates the Kähler form is $\omega=i g_{a\bar b}dz^a\wedge d\bar z^b$ and the Ricci form is $-i\partial\bar\partial\log\det(g_{a\bar b})$ ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F4] On compact boundaryless $X$, Stokes' theorem gives integration by parts for smooth forms ([[thm-general-stokes-theorem]]).

## Proof

**Proof technique:** preserve the holomorphic volume form and its determinant character.

1.1 In holomorphic coordinates, closedness of $\omega$ gives $\partial_a g_{b\bar c}=\partial_b g_{a\bar c}$. Substituting this symmetry into the Koszul formula yields $\nabla_{\partial_a}\partial_b=\Gamma^c_{ab}\partial_c$, with $\Gamma^c_{ab}=g^{c\bar d}\partial_a g_{b\bar d}$, and $\nabla_{\partial_{\bar a}}\partial_b=0$, together with the conjugate identities. Thus the Levi-Civita connection preserves $T^{1,0}X$ and $T^{0,1}X$, hence preserves $J$; metric compatibility then makes every loop transport unitary. By [F1], $\operatorname{Hol}_p(g)\subseteq U(n)$. [F1, F2, given, algebra]

2.1 Write $\Omega=f(z)dz^1\wedge\cdots\wedge dz^n$ in a holomorphic chart. Its induced determinant norm is $\|\Omega\|_g^2=|f|^2/\det(g_{a\bar b})$. The global real function $u=\log\|\Omega\|_g^2$ satisfies $\partial\bar\partial\log|f|^2=0$, so [F2] gives $\rho(g)=i\partial\bar\partial u$. Since $g$ is Ricci-flat, $\partial\bar\partial u=0$. Wedging with $\omega^{n-1}$ and integrating by parts [F4] gives $0=\int_Xu i\partial\bar\partial u\wedge\omega^{n-1}=-\int_Xi\partial u\wedge\bar\partial u\wedge\omega^{n-1}$. The last integrand is pointwise nonnegative and vanishes only when $du=0$; therefore $u$ is constant on connected $X$. [F2, F4, given, step 1.1, algebra]

3.1 The connection induced by $\nabla$ on $K_X$ has local connection form $-\partial\log\det(g_{a\bar b})$ in the frame $dz^1\wedge\cdots\wedge dz^n$. Hence $\nabla\Omega=(\partial\log f-\partial\log\det g)\Omega=(\partial u)\Omega=0$ by step 2.1. Thus every based loop transport fixes $\Omega_p$. [F2, step 2.1, algebra]

4.1 The action of a unitary transformation on the complex determinant line $K_{X,p}$ is multiplication by the inverse determinant of its action on $T_p^{1,0}X$. Since every holonomy element fixes the nonzero $\Omega_p$, its determinant is $1$. Combining this with step 1.1 proves $\operatorname{Hol}_p(g)\subseteq SU(n)$. No equality is asserted; the holonomy can be a proper subgroup. [F1, step 1.1, step 3.1, algebra] ∎
