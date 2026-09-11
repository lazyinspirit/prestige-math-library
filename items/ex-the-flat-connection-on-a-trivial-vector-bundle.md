---
id: ex-the-flat-connection-on-a-trivial-vector-bundle
kind: example
title: "The flat connection on a trivial vector bundle"
status: draft
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

On a supplied trivial bundle $E=M\times\mathbb R^r$, the constant frame $e_1,\ldots,e_r$ defines the flat connection $\nabla_X(\sum_a u^ae_a)=\sum_a X(u^a)e_a$. Its connection matrix is zero. Here flatness can be checked directly by the vanishing of the commutator expression below.

## Facts & Assumptions

**Given:** The product bundle with its specified trivialization and finite rank $r\geq0$.

[F1] A smooth matrix of one-forms in a global frame defines a unique connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F2] The bracket acts by the commutator on functions ([[def-lie-bracket-of-smooth-vector-fields]]).

## Verification

1.1 Prescribe $\omega=0$ in the constant frame. By [F1] the resulting derivative is precisely $du$ componentwise. For a scalar $f$, $X(fu^a)=X(f)u^a+fX(u^a)$ proves the section Leibniz identity, and $(fX)(u^a)=fX(u^a)$ proves direction-linearity. Since the components of $e_a$ are constant, every $\nabla_Xe_a$ is zero. [F1, given]

2.1 Applying the formula twice to a section gives the components of $\nabla_X\nabla_Ys-\nabla_Y\nabla_Xs-\nabla_{[X,Y]}s$ as $X(Yu^a)-Y(Xu^a)-[X,Y]u^a=0$, by the defining commutator of vector fields. This is the stated direct meaning of flatness. For rank zero the formula is the unique zero operator; rank one gives $\nabla u=du$. An empty base or a zero-dimensional base causes no exception. The product frame is given, so no choice of trivialization for an arbitrary bundle is involved. [F2, step 1.1] ∎
