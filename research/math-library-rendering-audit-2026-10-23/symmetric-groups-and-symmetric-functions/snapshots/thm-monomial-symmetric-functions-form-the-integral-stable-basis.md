---
id: thm-monomial-symmetric-functions-form-the-integral-stable-basis
kind: theorem
title: The monomial symmetric functions form the integral stable basis
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.3
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For $d\ge0$ and each partition $\lambda\vdash d$, let $m_\lambda\in\Lambda^d$
be the compatible sequence whose rank-$N$ projection is the monomial orbit
sum $m_\lambda(x_1,\ldots,x_N)$ when $\ell(\lambda)\le N$, and is zero
otherwise. Then $\{m_\lambda:\lambda\vdash d\}$ is a $\mathbb Z$-basis of
$\Lambda^d$.

## Facts & Assumptions

**Given:** The stable graded ring and the finite-rank monomial orbit-sum convention.

[F1] An element of $\Lambda^d$ is a compatible sequence of homogeneous degree-$d$ symmetric polynomials, one in each rank ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] $\operatorname{Orb}(\lambda)$ is the set of distinct tuples obtained by permuting the coordinates of $\lambda$. Repeated monomials are counted once, not with their stabilizer multiplicity ([[def-monomial-symmetric-polynomials]]).

[F3] As $\lambda$ ranges over partitions of length at most $n$, the polynomials $m_\lambda$ form an $R$-basis of $R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$ ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 In degree $d=0$, the only partition is $\varnothing$, its orbit sum is the constant $1$, and $\Lambda^0=\mathbb Z$; hence it is a basis. [F1, F2]

1.2 Suppose $d>0$ and fix $N\ge d$. Every partition of $d$ has at most $d$ parts, so every $\lambda\vdash d$ has $\ell(\lambda)\le N$. By [F3], the rank-$N$ orbit sums indexed by these partitions form a $\mathbb Z$-basis of $A_N^d$. [F3]

1.3 If $M>N\ge d$, specializing $x_{N+1},\ldots,x_M$ to zero leaves exactly those orbit monomials whose positive exponents all lie among the first $N$ variables; these are precisely the distinct rank-$N$ orbit monomials, each once. Thus every transition $A_M^d\to A_N^d$ is an isomorphism carrying the displayed basis to itself. [F1, F2]

2.1 A compatible sequence in $\Lambda^d$ is uniquely determined by its rank-$N$ component. Expanding that component in the finite basis of [F3], compatibility and the basis-preserving isomorphisms of step 1.3 force the same integer coefficients at every rank $M\ge N$; lower-rank components are their specializations. Conversely, every finite integer combination of the compatible orbit sums gives such a sequence. Hence the stable orbit sums span and are linearly independent in $\Lambda^d$. [F1, step 1.2, step 1.3] ∎
