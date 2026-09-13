---
id: cor-symplectic-manifolds-have-no-local-invariants-beyond-dimension
kind: corollary
title: Symplectic manifolds have no local invariants beyond dimension
status: draft
origin: pipeline
deps: ["thm-darboux-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Consequence following Theorem 8.1, p. 47
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $(M_0,\omega_0)$ and $(M_1,\omega_1)$ have
the same dimension and $p_i\in M_i$, then some neighbourhood of $p_0$ is
symplectomorphic to some neighbourhood of $p_1$, with $p_0$ sent to $p_1$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, equal-dimensional symplectic manifolds and
chosen points as in the statement.

[F1] Darboux coordinates identify a neighbourhood of every point with an open
neighbourhood of zero carrying the standard form. [[thm-darboux-theorem]].

## Proof

**Proof technique:** direct.

1.1 Choose Darboux charts $x_i:U_i\to V_i\subseteq\mathbb R^{2n}$ at the two points by [F1]. Their images both contain zero, so restrict them to the inverse images of one common open neighbourhood $V\subseteq V_0\cap V_1$ of zero. [F1, construct]

2.1 The map $x_1^{-1}\circ x_0$ sends $p_0$ to $p_1$ and preserves the standard form in the middle, hence pulls $\omega_1$ back to $\omega_0$. [F1, step 1.1] ∎
