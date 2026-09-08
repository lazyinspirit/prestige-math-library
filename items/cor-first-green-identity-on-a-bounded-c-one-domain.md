---
id: cor-first-green-identity-on-a-bounded-c-one-domain
kind: corollary
title: First Green identity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §2.5, Theorem 2.23, equation (2.11) and its proof, printed p. 32 (PDF p. 38); the weaker C1 assumption on v follows from the displayed product computation.
status: published
origin: pipeline
proof_strategy: direct
deps: ["thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains", "def-classical-normal-derivative", "thm-algebra-of-derivatives"]
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain or have the specified finite piecewise $C^1$ presentation. For real $u\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$, $$\int_\Omega(v\Delta u+Du\cdot Dv)\,dx=\int_{\partial\Omega}v\partial_\nu u\,dS.$$ In the piecewise case the right side is the sum over faces, counted once off E. All integrals are finite.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, a bounded C1 domain or the specified finite piecewise C1 class in dimension $n\ge2$, and real $u\in C^2(\overline\Omega)$, $v\in C^1(\overline\Omega)$.

[F1] The divergence formula holds for a C1 field up to a C1 boundary. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] The divergence formula holds for the specified finite faces. ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[F3] The normal derivative is the gradient dotted with the outward normal. ([[def-classical-normal-derivative]]).

[F4] The product rule applies to scalar derivatives. ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Set $F_i=v\partial_i u$. On each coordinate line inside Omega the product rule F4 gives $\partial_iF_i=(\partial_i v)(\partial_i u)+v\partial_i^2u$; the same rule for every $\partial_jF_i$ shows that F and all its first derivatives extend continuously to the closure. Thus $F\in C^1(\overline\Omega;\mathbb R^n)$ and summing over i gives $\operatorname{div}F=Du\cdot Dv+v\Delta u$. [given, F4, algebra]

2.1 On every regular boundary point F3 gives $F\cdot\nu=v(Du\cdot\nu)=v\partial_\nu u$. Apply F1 in the C1 case and F2 in the specified piecewise case to the field from step 1.1. Substituting its divergence and flux gives exactly the displayed identity. Continuous derivatives and functions on the compact closure are bounded; finite volume and the finite surface measures in F1/F2 prove absolute integrability. The edge set contributes zero to each face integral. [step 1.1, F1, F2, F3, algebra] ∎

## Source notes

Hunter §2.5, Theorem 2.23, equation (2.11) and its proof, printed p. 32 (PDF p. 38); the weaker C1 assumption on v follows from the displayed product computation.
