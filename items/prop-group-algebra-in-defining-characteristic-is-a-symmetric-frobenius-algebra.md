---
id: prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra
kind: proposition
title: "For a finite group and a field of characteristic p, the group algebra is a symmetric Frobenius algebra via the coefficient of the identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-ring, cor-dimension-of-a-finite-group-algebra]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and $k$ a field. The bilinear form

$$ \langle x,y\rangle:=\text{the coefficient of }[e]\text{ in }xy $$

on the group algebra $k[G]$ is associative, symmetric, and nondegenerate.
Hence $k[G]$ is a symmetric Frobenius algebra.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$.

[F1] The group algebra has basis $\{[g]:g\in G\}$
([[def-group-ring]]).

[L1] Its dimension is $|G|$, so this basis is finite
([[cor-dimension-of-a-finite-group-algebra]]).

## Proof

**Proof technique:** direct.

1.1 On basis elements one has $\langle [g],[h]\rangle=\begin{cases}1,&h=g^{-1},\\ 0,&h\ne g^{-1}.\end{cases}$ Thus the matrix of the form in the basis from [F1] is a permutation matrix, so the form is nondegenerate. [F1, L1, given, algebra]

2.1 Associativity is immediate from the definition, because $\langle xy,z\rangle$ and $\langle x,yz\rangle$ are both the coefficient of $[e]$ in $xyz$. Symmetry holds because the coefficient of $[e]$ in $[g][h]$ is $1$ exactly when $h=g^{-1}$, which is equivalent to $g=h^{-1}$ and hence to the coefficient of $[e]$ in $[h][g]$ being $1$. Bilinearity is clear from the coefficient functional. Therefore the form is associative, symmetric, and nondegenerate. [F1, step 1.1, algebra]

3.1 A finite-dimensional algebra equipped with such a bilinear form is symmetric Frobenius. Hence $k[G]$ has the stated structure. [L1, step 2.1] ∎
