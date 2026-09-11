---
id: cex-a-torsion-free-connection-that-is-not-metric-compatible
kind: counterexample
title: "A torsion free connection that is not metric compatible"
status: draft
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames","def-metric-compatible-connection-on-a-riemannian-vector-bundle"]
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

## Statement refuted

A torsion-free affine connection on a Riemannian manifold must be compatible with the supplied Riemannian metric.

## Facts & Assumptions

**Given:** The proposed implication with a fixed metric.

[F1] A smooth matrix in a global tangent frame defines an affine connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F2] Symmetric coordinate Christoffel symbols imply torsion zero ([[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]]).

[F3] Compatibility requires $Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ ([[def-metric-compatible-connection-on-a-riemannian-vector-bundle]]).

## Counterexample

1.1 On $\mathbb R$ with $g=dx^2$, prescribe $\Gamma^1{}_{11}=1$, equivalently the matrix $dx$ in tangent frame $\partial_x$. This gives a smooth affine connection by [F1], with $\nabla_{f\partial_x}(u\partial_x)=f(u'+u)\partial_x$. Its sole lower-index pair is symmetric, so [F2] gives torsion zero. [F1, F2, given]

2.1 Set $X=Y=Z=\partial_x$. The left side in [F3] is $\partial_x1=0$, while its right side is $1+1=2$, so compatibility with $dx^2$ fails. This does not assert failure for every metric: with $\widetilde g=e^{2x}dx^2$, the one-dimensional compatibility equation is $\partial_xe^{2x}=2\Gamma^1{}_{11}e^{2x}$, which holds. For arbitrary local multiples the additional derivatives of their coefficients match by the scalar product rule, so this last test indeed gives compatibility with $\widetilde g$. [F3, step 1.1] ∎
