---
id: ex-source-sink-and-saddle-indices-on-a-surface
kind: example
title: "Source, sink and saddle indices on a surface"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, Figure 3-18 and the surrounding discussion of indices, printed p. 133"
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Lemma 5, printed pp. 37-38 (sign of the Jacobian determinant)"
dependency_level: 4
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

On a chart of a surface identified with $\mathbb R^2$ consider the smooth
vector fields ([[def-smooth-vector-field-as-a-tangent-bundle-section]])
$$X_1(x,y)=(x,y),\qquad X_2(x,y)=(-x,-y),\qquad X_3(x,y)=(x,-y).$$
Each has its only zero at the origin, with linearizations $I$, $-I$ and
$\operatorname{diag}(1,-1)$; by
[[thm-index-of-a-nondegenerate-vector-field-zero]] the indices are
$$\operatorname{ind}_0X_1=\operatorname{sign}\det I=+1,\qquad \operatorname{ind}_0X_2=\operatorname{sign}\det(-I)=+1,\qquad \operatorname{ind}_0X_3=\operatorname{sign}\det\operatorname{diag}(1,-1)=-1.$$
Thus the source and the sink of a surface field both have index $+1$, while the
saddle has index $-1$, matching the circulation, source, sink and saddle
pictures of the classical treatment.

## Facts & Assumptions

**Given:** The plane $\mathbb R^2$ as a chart of a surface and the three displayed linear fields $X_1,X_2,X_3$ on it.

[F1] A zero of a smooth field is nondegenerate when its linearization $DX_p$ is invertible, and then it is isolated ([[def-nondegenerate-zero-of-a-vector-field]], [[def-isolated-zero-and-local-index-of-a-vector-field]]).

[F2] A nondegenerate zero has index $\operatorname{sign}\det(DX_p)\in\{+1,-1\}$ ([[thm-index-of-a-nondegenerate-vector-field-zero]]).

## Verification

1.1 The fields $X_1,X_2,X_3$ are linear, so their derivatives at every point are the matrices $I$, $-I$ and $\operatorname{diag}(1,-1)$; each matrix is invertible, and $X_i(u)=A_iu=0$ has the unique solution $u=0$ since $A_i$ is invertible, so the origin is the only zero of each field and it is nondegenerate. [F1, algebra]

2.1 The determinants are $\det I=1$, $\det(-I)=(-1)^2=1$ and $\det\operatorname{diag}(1,-1)=-1$, so [F2] gives the displayed indices $+1,+1,-1$; in particular a source and a sink on a surface both contribute $+1$, and a saddle contributes $-1$. [F2, step 1.1, algebra] ∎
