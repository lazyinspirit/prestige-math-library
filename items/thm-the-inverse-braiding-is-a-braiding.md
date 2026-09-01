---
id: thm-the-inverse-braiding-is-a-braiding
kind: theorem
title: "The inverse braiding is again a braiding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braiding]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $c$ be a braiding on a monoidal category $\mathcal C$. Then the family

$$c'_{X,Y}:=c_{Y,X}^{-1}:X\otimes Y\longrightarrow Y\otimes X$$

is again a braiding on $\mathcal C$.

## Facts & Assumptions

**Given:** A braiding $c$ on a monoidal category $\mathcal C$.

[L1] A braiding is a natural isomorphism $c_{X,Y}:X\otimes Y\to Y\otimes X$ satisfying the two hexagon identities ([[def-braiding]]).

## Proof

**Proof technique:** direct.

1.1 Because [L1] says each $c_{X,Y}$ is an isomorphism, the family $c'_{X,Y}=c_{Y,X}^{-1}$ is well defined. Inverting the naturality square for $c$ and swapping the variable names shows that $c'$ is natural in both variables. [given, L1, algebra]

2.1 Substitute $c'_{X,Y}=c_{Y,X}^{-1}$ into the first hexagon for $c'$. After reversing the arrows, this equation is exactly the second hexagon for $c$ from [L1] with the object names permuted. Hence the first hexagon holds for $c'$. [L1, step 1.1, algebra]

3.1 The same calculation with the roles of the two hexagons reversed shows that the second hexagon for $c'$ is the first hexagon for $c$ written backwards. Therefore $c'$ satisfies both hexagon identities and is a braiding. [L1, step 2.1, algebra] ∎
