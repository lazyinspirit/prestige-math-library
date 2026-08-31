---
id: ex-transverse-and-tangent-intersections-of-plane-curves
kind: example
title: "Transverse and tangent intersections of plane curves"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-transverse-embedded-submanifolds,
       cor-transverse-intersection-theorem,
       fs-two-submanifolds-with-nonempty-intersection-are-transverse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Example

In $\mathbb R^2$, the line $L_1=\{y=x\}$ meets the parabola
$P=\{y=x^2\}$ transversely at $(0,0)$ and $(1,1)$, while the line
$L_0=\{y=0\}$ is tangent to $P$ at $(0,0)$ and is not transverse there.

## Facts & Assumptions

**Given:** The three embedded curves $L_1$, $L_0$, and $P$ in $\mathbb R^2$.

[F1] Two embedded submanifolds are transverse when their tangent spaces span the ambient tangent space ([[def-transverse-embedded-submanifolds]]).

[L1] Transverse intersections have the expected codimension ([[cor-transverse-intersection-theorem]]).

## Verification
**Proof technique:** direct.

1.1 The tangent lines to $L_1$ and $P$ are spanned by $(1,1)$ and $(1,2x)$, respectively. At $x=0$ and $x=1$ these are distinct, so their spans add to $\mathbb R^2$. Thus $L_1\pitchfork P$ at both intersection points by [F1]. [F1, given, algebra]
1.2 The tangent line to $L_0$ is spanned by $(1,0)$, and the tangent line to $P$ at $(0,0)$ is also spanned by $(1,0)$. Their sum is only one-dimensional, so [F1] fails there. This is the tangent situation warned about by [L1]. [F1, L1, given, algebra]
2.1 Therefore the parabola exhibits both transverse and tangent intersections in the plane. [step 1.1, step 1.2] ∎