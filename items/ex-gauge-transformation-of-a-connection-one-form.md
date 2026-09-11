---
id: ex-gauge-transformation-of-a-connection-one-form
kind: example
title: "Gauge transformation of a connection one form"
status: draft
origin: pipeline
deps: ["thm-connection-one-form-transformation-law"]
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

On an open set with a real line-bundle frame $e$ and connection form $\omega$, change frame to $e'=e\exp(f)$ for a smooth real function $f$. Then $\omega'=\omega+df$. Thus zero coefficients can become nonzero without changing the connection.

## Facts & Assumptions

**Given:** The supplied frame, connection and smooth $f$ on its domain.

[F1] For $e'=eA$, $\omega'=A^{-1}\omega A+A^{-1}dA$ ([[thm-connection-one-form-transformation-law]]).

## Verification

1.1 Since $e^f>0$, $e'$ is a frame everywhere. Scalar coefficients commute, and $d(e^f)=e^fdf$, so [F1] gives $\omega'=\omega+df$. This changes coordinates of the same derivative, not the intrinsic connection. [F1, given]

2.1 On the trivial line over $\mathbb R$ with $\omega=0$ and $f=x$, the new form is $dx$. In particular $\nabla_{\partial_x}e'=e'$ whereas $\nabla_{\partial_x}e=0$. The old constant section has new coefficient $e^{-x}$, and its new covariant derivative is $d(e^{-x})+dx\,e^{-x}=0$, confirming agreement on an actual section. Constant $f$ gives $df=0$; the frame never vanishes even when $f=0$. [step 1.1] ∎
