---
id: ex-na-nodal-curlcurl-spurious-gradient-mode
kind: example
title: A nodal curl-free mode outside the compatible gradient image
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-lowest-order-whitney-de-rham-spaces, def-na-curl-curl-kernel-quotient-gauge, thm-na-stable-mixed-curl-curl-kernel-quotient, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
---

## Example

On one tetrahedron, compare the naive vector nodal space $[P_1(K)]^3$ with the compatible scalar-to-edge gradient map $\nabla W_h^0$ of [[def-na-lowest-order-whitney-de-rham-spaces]]. The vector field $v(x)=x_1e_1$ lies in the nodal vector space, has zero curl, and is not the gradient of a continuous piecewise-affine scalar. Thus the naive nodal curl-curl matrix has a zero-energy mode outside that compatible gradient image. This identifies a discrete kernel mismatch; it does not claim that gradients are absent from the continuum curl kernel.

## Facts & Assumptions

**Given:** Countable Choice for the real $L^2$ gauge convention; a reference tetrahedron, the scalar nodal space and compatible edge space of [[def-na-lowest-order-whitney-de-rham-spaces]], and the gauge formulation of [[def-na-curl-curl-kernel-quotient-gauge]].

[A1] Countable Choice is assumed by the real $L^2$ product and the stable gauge supplier; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The scalar nodal space consists of affine functions on the tetrahedron, so every member has constant gradient. ([[def-na-lowest-order-whitney-de-rham-spaces]])

[F2] The pure curl-curl energy vanishes on its curl kernel, and the mixed gauge formulation fixes a representative by orthogonality to that kernel. ([[def-na-curl-curl-kernel-quotient-gauge]], [[thm-na-stable-mixed-curl-curl-kernel-quotient]])

## Verification

1.1 The field $v(x)=(x_1,0,0)$ is vector-valued affine, so it belongs to $[P_1(K)]^3$. Its componentwise curl is zero because its only nonzero component depends only on $x_1$. Hence $(\operatorname{curl}v,\operatorname{curl}v)_{L^2(K)}=0$. [A1, given, F2, algebra]

1.2 By [F1], every $q_h\in W_h^0=P_1(K)$ has constant gradient, while $v$ is nonconstant on the interior of $K$. Thus $v\notin\nabla W_h^0$. The kernel of the naive nodal curl-curl energy is therefore strictly larger than the compatible discrete gradient image, and its representative is not unique without a gauge as in [F2]. [A1, F1, F2, step 1.1, algebra] ∎
