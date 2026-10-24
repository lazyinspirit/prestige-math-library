---
id: cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form
kind: corollary
title: Symplectic manifolds have a canonical orientation and volume form
status: published
origin: pipeline
deps: ["thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge", "def-oriented-smooth-manifold-and-oriented-chart"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.1, Definition 3.3 and following paragraph, p. 32
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

If $(M^{2n},\omega)$ is symplectic, then
$\mu_\omega=\omega^n/n!$ is a nowhere-zero volume form. Its positive ray gives
the canonical **symplectic orientation** of $M$.

## Facts & Assumptions

**Given:** A symplectic $2n$-manifold $(M,\omega)$.

[F1] Nondegeneracy makes $\omega^n$ nowhere zero. [[thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge]].

[F2] An orientation is a smooth choice of ray in the determinant line. [[def-oriented-smooth-manifold-and-oriented-chart]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $\omega^n$ is a smooth nowhere-zero top form; division by the positive number $n!$ preserves that property. Thus $\mu_\omega$ is a volume form. [F1, algebra]

2.1 A nonzero top covector $(\mu_\omega)_p\in\det T_p^*M$ selects the ray of tangent determinants $v\in\det T_pM$ on which $(\mu_\omega)_p(v)>0$. This ray varies smoothly and therefore defines an orientation by [F2]. For $n=0$, $\mu_\omega=1$ selects the positive sign at each point, so the boundary case is included. [F2, step 1.1, algebra] ∎
