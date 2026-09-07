---
id: cor-entire-harmonic-functions-with-bounded-gradient-are-affine
kind: corollary
title: "Entire harmonic functions with bounded gradient are affine"
status: draft
origin: pipeline
deps: [lem-derivatives-of-harmonic-functions-are-harmonic, thm-liouville-theorem-for-bounded-harmonic-functions, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.7 and Corollary 2.8 p.23, applied to harmonic derivatives"
---

## Statement

Let $n\ge2$. If $u:\mathbb R^n\to\mathbb R$ is harmonic and $\sup_x|\nabla u(x)|<\infty$, then $u(x)=b+c\cdot x$ for some $b\in\mathbb R$ and $c\in\mathbb R^n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Partial derivatives of smooth harmonic functions are smooth harmonic. ([[lem-derivatives-of-harmonic-functions-are-harmonic]]).

[F2] An entire real harmonic function with a one-sided bound is constant. ([[thm-liouville-theorem-for-bounded-harmonic-functions]]).

[F3] Harmonic functions have the ball mean-value property. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F4] A continuous function with the ball mean-value property is smooth harmonic. ([[thm-continuous-mean-value-functions-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 The ball mean property and the continuous mean-value theorem give smoothness of $u$. Each $\partial_i u$ is therefore an entire harmonic function; boundedness of the gradient bounds its absolute value. Liouville makes it a constant $c_i$. [F1, F2, F3, F4, given]

2.1 For fixed $x$, the fundamental theorem along the segment $t\mapsto tx$ gives $u(x)-u(0)=\int_0^1\nabla u(tx)\cdot x\,dt=c\cdot x$. Set $b=u(0)$. [step 1.1, algebra] ∎
