---
id: "def-local-orientation-sign-of-a-regular-preimage"
kind: "definition"
title: "Local orientation sign of a regular preimage"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["def-local-orientation-of-a-regular-c-one-map","def-oriented-smooth-manifold-and-oriented-chart","def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

Let $F:M^n\to N^n$ be a smooth map of oriented smooth manifolds, and let $p$ be a regular preimage of $y$, so $F(p)=y$ and $dF_p:T_pM\to T_yN$ is an isomorphism. The **local orientation sign** $\operatorname{sgn}(dF_p)$ is $+1$ if the induced isomorphism of determinant lines carries the chosen ray of $T_pM$ to the chosen ray of $T_yN$, and $-1$ if it carries it to the other ray. For $n>0$ it is the sign of the derivative determinant in positively oriented bases. For $n=0$ it is $\varepsilon_M(p)\varepsilon_N(y)$, comparing the two specified rays directly; it need not be $+1$, although the empty determinant is one.

## Facts & Assumptions

[F1] [[def-local-orientation-of-a-regular-c-one-map]] defines the positive-dimensional coordinate sign using the nonzero determinant of an invertible derivative.

[F2] [[def-oriented-smooth-manifold-and-oriented-chart]] supplies the ray at each tangent space and the distinct dimension-zero point signs.

[F3] [[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]] defines an orientation as a positive ray in the one-dimensional determinant line and includes the two degree-zero rays.

## Verification

**Given:** The smooth map, supplied orientations, and regular point in the definition.

1.1 By regularity the tangent map is an isomorphism. Its top exterior power is an isomorphism of one-dimensional lines, so by [F3] it carries each ray bijectively to one of the two target rays. Exactly one is the chosen target ray, and the other is its negative. Thus exactly one of the two signs applies, using the actual orientation data from [F2]. [F2, F3, given]

2.1 For $n>0$, let $e$ and $f$ be positively oriented bases of the source and target tangent spaces. If $A$ is the matrix of $dF_p$ in them, then $$\bigwedge^n dF_p(e_1\wedge\cdots\wedge e_n)=\det(A)f_1\wedge\cdots\wedge f_n.$$ The determinant is nonzero by invertibility, so its sign is precisely the ray comparison of step 1.1 and agrees with [F1]. If other positive bases have transition matrices $P,Q$, then the new matrix is $Q^{-1}AP$ and its determinant is $\det(A)\det(P)/\det(Q)$. Both extra factors are positive by [F3]; hence the sign is independent of those bases or oriented charts. [F1, F2, F3, step 1.1]

3.1 For $n=0$, [F3] identifies both determinant lines with $\mathbb R$ and the induced map with the identity. Their chosen rays are represented by $\varepsilon_M(p)$ and $\varepsilon_N(y)$. The image of the first is a positive multiple of the second exactly when the signs coincide; otherwise it is a negative multiple. Thus the sign is their product. In dimension one, step 2.1 is the sign of the single nonzero derivative in positive coordinates. A singular point is excluded, so zero determinants receive no sign here. If a regular fibre is empty there is no point to label, not a choice of labels; at a given point the label is uniquely determined. No compactness, properness, boundary endpoint condition or choice axiom is needed for this local definition. [F1, F2, F3, step 1.1, step 2.1] ∎
