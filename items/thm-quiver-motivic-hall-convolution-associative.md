---
id: thm-quiver-motivic-hall-convolution-associative
kind: theorem
title: "Quiver motivic Hall convolution is associative and unital"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-algebraic-stack-and-inertia
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §5.1, Theorem 5.2"
      url: "https://arxiv.org/pdf/math/0503029v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §4.2, Theorem 4.3"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: pass
---

## Statement

For a finite quiver $Q$ over $k$, the convolution in
[[def-motivic-hall-algebra-of-a-finite-quiver]] is an associative unital
$R$-bilinear product on $H_Q$. Its unit is the class of the zero-representation
stack in degree $\mathbf 0$.

## Facts & Assumptions

**Given:** A finite quiver $Q$ and the stack-function Hall product whose first
factor is the quotient and whose second factor is the subrepresentation.

[F1] The product is pullback to the stack of short exact sequences followed
by pushforward to the middle-object stack, with the endpoint order
$0\to B\to E\to A\to0$
([[def-motivic-hall-algebra-of-a-finite-quiver]]).

[F2] Pullback in the relative stack-function groups is fiber product,
pushforward is composition, and both respect isomorphism and scissor
relations ([[def-motivic-stack-function-groups-for-quiver-representations]]).

[A1] The Artin-stack convention carries the represented-sheaf descent use of
AC specified in [[def-algebraic-stack-and-inertia]] and
[[def-axiom-of-choice]]. The finite flag identifications below use only
vertexwise kernels, quotients and preimages.

## Proof

**Proof technique:** direct.

1.1 Let $\alpha,\beta,\gamma$ be homogeneous classes of degrees $\mathbf d,\mathbf e,\mathbf f$. The iterated fiber products defining $(\alpha*\beta)*\gamma$ classify a representation $E$ with a flag $0\subset F_1\subset F_2\subset E$ whose successive factors $F_1$, $F_2/F_1$, and $E/F_2$ have dimensions $\mathbf f,\mathbf e,\mathbf d$. The maps to the three inputs are the same classes on these three factors. [F1, F2, A1]

2.1 The iterated fiber products defining $\alpha*(\beta*\gamma)$ classify the same flags: first $F_2$ is the subrepresentation of $E$ with quotient of dimension $\mathbf d$, then $F_1$ is its subrepresentation with quotient of dimension $\mathbf e$. For representations of a quiver, kernels, quotients and inverse images are computed vertexwise and inherit the arrow maps, so the two descriptions are inverse equivalences of the flag stacks. [F1, F2, step 1.1]

3.1 Both parenthesizations therefore pull back the same exterior product of $\alpha,\beta,\gamma$ to the same three-step flag stack and push it forward along the same map sending a flag to its middle representation. Functoriality of pullback, pushforward and exterior product in [F2] gives $(\alpha*\beta)*\gamma=\alpha*(\beta*\gamma)$. Bilinearity extends this identity from homogeneous classes to all of $H_Q$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 If one factor is the zero representation, the exact sequence with zero subobject or zero quotient is uniquely isomorphic to the identity sequence on the other factor, including its endpoint automorphisms. Thus the degree-zero class acts as a two-sided unit. [F1, F2] ∎


