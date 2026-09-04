---
id: fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure
kind: false-statement
title: "FALSE: the dimension of an object is independent of the pivotal structure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity, def-the-dimension-of-an-object-relative-to-a-pivotal-structure, fs-the-left-and-right-traces-always-agree]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 4.7.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

The dimension of an object is independent of the pivotal structure.

## Facts & Assumptions

**Given:** The tensor category of finite-dimensional $\mathbb Z$-graded vector
spaces, a field element $q\in k^\times$ with $q\ne\pm1$, and the degree-one line
$X=k[1]$.

[L1] Pivotal structures vary by monoidal automorphisms of the identity
([[rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity]]).

[L2] $\dim_a(X)$ is defined as the trace of the chosen pivotal comparison
([[def-the-dimension-of-an-object-relative-to-a-pivotal-structure]]).

[L3] On graded vector spaces, multiplying the canonical double-dual map by
$q^n$ in degree $n$ gives a pivotal structure whose dimension on $k[1]$ is
$q$ ([[fs-the-left-and-right-traces-always-agree]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the standard pivotal structure on graded vector spaces can be multiplied by the monoidal automorphism acting as $q^n$ in degree $n$. This gives the modified pivotal structure $a'$ used in [L3]. [given, L1, L3]

2.1 The standard pivotal structure gives $\dim(X)=1_k$ for the degree-$1$ line $X=k[1]$, while [L3] gives $\dim_{a'}(X)=q\ne1_k$. These are exactly the quantities defined in [L2]. [step 1.1, L2, L3]

3.1 Therefore the dimension can change when the pivotal structure changes, so the statement is false. [step 2.1] ∎
