---
id: thm-compact-support-moser-stability-on-a-noncompact-manifold
kind: theorem
title: Compact-support Moser stability on a noncompact manifold
status: published
origin: pipeline
deps: ["def-countable-choice", "lem-moser-pullback-differentiation-equation", "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, discussion after Theorem 7.3, p. 45
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

Assume $\mathrm{AC}_\omega$. Let $(\omega_t)_{0\le t\le1}$ be a smooth path
of symplectic forms on a possibly noncompact manifold $M$. Suppose
$\dot\omega_t=d\sigma_t$ for a smooth family of one-forms whose supports all
lie in one compact set $K$. Then a compactly supported isotopy $\phi_t$ exists
for all $t\in[0,1]$ and satisfies $\phi_t^*\omega_t=\omega_0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the path, primitives, and common compact support in the statement.

[F1] The Moser equation has a unique smooth solution and forces pullback constancy. [[lem-moser-pullback-differentiation-equation]].

[F2] A smooth time-dependent vector field with common compact support has a global evolution over a compact time interval. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]].

## Proof

**Proof technique:** direct.

1.1 Solve $\iota_{X_t}\omega_t=-\sigma_t$ by [F1]. At every point outside $K$ the right side vanishes, and nondegeneracy gives $X_t=0$; hence all $X_t$ have support in $K$. [F1, given]

2.1 By [F2], $X_t$ has a global evolution $\phi_t$ on $[0,1]$. It is the identity off $K$, so the isotopy is compactly supported. By [F1], $\frac d{dt}(\phi_t^*\omega_t)=0$, and evaluation at zero gives $\phi_t^*\omega_t=\omega_0$. [F1, F2, step 1.1] ∎
