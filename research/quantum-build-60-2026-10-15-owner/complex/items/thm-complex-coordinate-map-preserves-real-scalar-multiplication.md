---
id: thm-complex-coordinate-map-preserves-real-scalar-multiplication
kind: theorem
title: The complex coordinate bijection is real linear
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-complex-numbers-and-arithmetic
- thm-complex-numbers-are-the-real-coordinate-plane
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
  - title: J. Lebl, Guide to Cultivating Complex Analysis
    url: https://www.jirka.org/ca/ca.pdf
---

## Statement

For $\Phi(a+bi)=(a,b)$, all $z,w\in\mathbb C$ and $r\in\mathbb R$ satisfy $\Phi(z+w)=\Phi(z)+\Phi(w)$ and $\Phi(rz)=r\Phi(z)$. Here $r$ acts on $\mathbb C$ through its canonical real embedding. Thus $\Phi$ is a real-linear bijection, where the real operations on $\mathbb C$ are restriction of its field operations.

## Facts & Assumptions

**Given:** The coordinate map $\Phi$.

[F1] Coordinate form is unique; $\Phi$ is bijective and respects addition, with the displayed complex multiplication formula ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F2] The embedded real $r$ is $r+0i$ ([[def-complex-numbers-and-arithmetic]]).

## Proof

1.1 Write $z=a+bi$. Multiplying $r+0i$ by $a+bi$ gives $ra+(rb)i$, hence $\Phi(rz)=(ra,rb)=r\Phi(z)$ for every real $r$, including zero. [given, F1, F2, algebra]

2.1 Additivity and bijectivity are [F1]. Together with step 1.1 they prove real linearity and bijectivity, including the zero vector. [F1, step 1.1] ∎
