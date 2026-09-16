---
id: thm-relative-moser-theorem
kind: theorem
title: Relative Moser theorem
status: published
origin: pipeline
deps: ["def-countable-choice", "lem-moser-pullback-differentiation-equation", "lem-relative-poincare-primitive-near-a-submanifold", "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, Theorem 7.4 and proof, pp. 45--46
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

Assume $\mathrm{AC}_\omega$. Let $S$ be a closed embedded submanifold of $M$,
and let $\omega_0,\omega_1$ be symplectic forms defined near $S$ that agree as
bilinear forms on $T_pM$ for every $p\in S$. Suppose their interpolation
$\omega_t=(1-t)\omega_0+t\omega_1$ is symplectic on some neighbourhood of
$S$ for every $t\in[0,1]$. Then there are neighbourhoods $U_0,U_1$ of $S$
and a diffeomorphism $\phi:U_0\to U_1$ such that
$\phi|_S=\operatorname{id}_S$ and $\phi^*\omega_1=\omega_0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and all data and hypotheses in the statement.

[F1] A closed family vanishing as tensors on $S$ has a relative primitive vanishing as a tensor on $S$. [[lem-relative-poincare-primitive-near-a-submanifold]].

[F2] The Moser equation makes the evolving pullback constant. [[lem-moser-pullback-differentiation-equation]].

[F3] Smooth time-dependent fields have unique local evolutions. [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]].

## Proof

**Proof technique:** direct.

1.1 The closed form $\alpha=\omega_1-\omega_0$ vanishes as a tensor along $S$. By [F1], after shrinking there is a one-form $\sigma$ with $d\sigma=\alpha$ and vanishing first jet along $S$. Solve $\iota_{X_t}\omega_t=-\sigma$; [F2] gives a smooth $X_t$, and nondegeneracy gives both $X_t|_S=0$ and vanishing first jet there. [F1, F2, given]

2.1 By [F3], around each point of $S$ there is a neighbourhood whose trajectories exist through the compact time interval after finitely many local continuations. Their union contains $S$; uniqueness glues the evolutions and makes the time-one map a diffeomorphism onto its open image. Since $X_t|_S=0$, every point of $S$ is fixed. [F3, step 1.1, given]

3.1 For the evolution $\phi_t$, [F2] yields $\frac d{dt}(\phi_t^*\omega_t)=0$. Thus $\phi_1^*\omega_1=\omega_0$ on a possibly smaller source neighbourhood. Set $U_0$ equal to that domain and $U_1=\phi_1(U_0)$. [F2, step 1.1, step 2.1] ∎
