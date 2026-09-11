---
id: fs-christoffel-symbols-are-components-of-a-tensor
kind: false-statement
title: "Christoffel symbols are components of a tensor"
status: draft
origin: pipeline
deps: ["thm-christoffel-symbol-transformation-law","thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law"]
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

## Statement

The Christoffel symbols of any affine connection are the components of a tensor of type $(1,2)$.

## Facts & Assumptions

**Given:** The proposed tensorial interpretation.

[F1] Under coordinate change, Christoffel symbols include a second-derivative term ([[thm-christoffel-symbol-transformation-law]]).

[F2] Smooth matrices in a global frame define connections ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

## Refutation

1.1 On $M=(0,\infty)$ take the connection with $\nabla_{\partial_x}\partial_x=0$, supplied by zero matrix in the global tangent frame using [F2]. The coordinate $y=\log x$ is smooth with smooth inverse $x=e^y$. The one-dimensional formula in [F1] gives $\widetilde\Gamma=(dy/dx)(d^2x/dy^2)=e^{-y}e^y=1$. Equivalently $\partial_y=x\partial_x$ and $\nabla_{x\partial_x}(x\partial_x)=x\partial_x=\partial_y$. [F1, F2, given]

2.1 If these were components of a fibrewise bilinear map $T:TM\times TM\to TM$, the original zero component would force $T(\partial_x,\partial_x)=0$, and bilinearity would give $T(\partial_y,\partial_y)=x^2T(\partial_x,\partial_x)=0$. This contradicts the new component $1$ in step 1.1 at every point. The Jacobian is never zero; the failure is not a singular-coordinate artifact. [step 1.1] ∎
