---
id: lem-hedden-ording-twenty-five-generator-threshold
kind: lemma
title: "The displayed Hedden-Ording 25-generator complex has threshold zero"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finite-dimensional linear algebra is used; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
---

## Statement

Let $R=\mathbb F_2[U,U^{-1}]$. Form the free $R$-module on $x_1,\ldots,x_{25}$ and put $x_r$ at first filtration coordinate zero. Give $x_2,x_6,x_{10},x_{14},x_{18},x_{22}$ Alexander coordinate $1$, give $x_4,x_8,x_{12},x_{16},x_{20},x_{24}$ coordinate $-1$, and give every remaining generator coordinate $0$. Multiplication by $U$ lowers both coordinates by one. Specify the $R$-linear differential by
$$\partial x_2=x_1+Ux_5,\quad\partial x_3=Ux_2+x_4,\quad\partial x_4=Ux_1+U^2x_5,$$
$$\partial x_r=x_{r-1}+x_{r+3},\quad\partial x_{r+1}=Ux_r+x_{r+2},\quad\partial x_{r+2}=U(x_{r-1}+x_{r+3})\quad(r\in\{6,10,14,18\}),$$
$$\partial x_{22}=x_{25}+Ux_{21},\quad\partial x_{23}=Ux_{22}+x_{24},\quad\partial x_{24}=Ux_{25}+U^2x_{21},$$
and set every other differential to zero. This is a bifiltered chain complex. Its hat specialization $\widehat C$, the polynomial basis lattice modulo $U$, has one-dimensional total homology, and $\tau(\widehat C)=0$. Its Alexander-associated-graded homology has dimensions $6,13,6$ at levels $1,0,-1$, respectively, and is zero at all other levels.

## Statement references

[[def-knot-floer-filtration-and-tau]]

[Hedden and Ording, Section 2.2, displayed differential and Proposition 2.1](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** The free based Laurent module, filtration and all differential coefficients in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]] defines the threshold of a finite filtered complex with one-dimensional total homology.

## Proof

1.1 In the first block, $\partial^2x_3=U(x_1+Ux_5)+(Ux_1+U^2x_5)=0$, while the squares on $x_2,x_4$ vanish since $x_1,x_5$ are cycles. In each block indexed by $r\in\{6,10,14,18\}$, the square on $x_{r+1}$ is $U(x_{r-1}+x_{r+3})+U(x_{r-1}+x_{r+3})=0$, and the other squares vanish since $x_{r-1},x_{r+3}$ are cycles. The last block has the same cancellation: $\partial^2x_{23}=U(x_{25}+Ux_{21})+(Ux_{25}+U^2x_{21})=0$. These exhaust all nonzero differential columns. Each displayed coefficient has nonnegative $U$ exponent, so the first coordinate never increases; inspecting the three Alexander levels in each displayed term also shows the second coordinate never increases. [given, algebra]

2.1 Reduce the displayed differential modulo $U$. Its nonzero columns are $\partial x_2=x_1$, $\partial x_3=x_4$, $\partial x_{22}=x_{25}$, $\partial x_{23}=x_{24}$, and, for $r\in\{6,10,14,18\}$, $\partial x_r=x_{r-1}+x_{r+3}$ and $\partial x_{r+1}=x_{r+2}$. The six pairs $(x_2,x_1),(x_3,x_4),(x_7,x_8),(x_{11},x_{12}),(x_{15},x_{16}),(x_{19},x_{20})$ and the two pairs $(x_{22},x_{25}),(x_{23},x_{24})$ are independent acyclic summands as unfiltered complexes. The remaining summand has four generators $x_6,x_{10},x_{14},x_{18}$ mapping to successive sums in the five-dimensional span of $x_5,x_9,x_{13},x_{17},x_{21}$. These four images are independent: successively inspect the coefficients of $x_5,x_9,x_{13},x_{17}$. Their span has codimension one and consists of vectors whose five coordinates sum to zero; thus $[x_5]$ is nonzero and generates total homology. [step 1.1, given, algebra]

3.1 Below Alexander level $-1$ the hat filtration is zero. At level $-1$ it is spanned by $x_4,x_8,x_{12},x_{16},x_{20},x_{24}$; each is a boundary in the total complex, respectively of $x_3,x_7,x_{11},x_{15},x_{19},x_{23}$. Therefore its homology has zero image in total homology. At level $0$ the cycle $x_5$ is present and has nonzero total class by step 2.1, proving $\tau(\widehat C)=0$. In the associated graded every nonzero constant differential in step 2.1 lowers Alexander level by one, so the associated-graded differential is zero. Counting the specified basis levels gives dimensions $6,13,6$. [F1, step 2.1, given, algebra] ∎

## Remarks

The displayed differential is the one printed for the six-twisted positive Whitehead double in Hedden and Ording, not their two-twisted example. This lemma proves the algebra of the explicit complex. It does not establish the diagram's knot type, enumerate its holomorphic disks, or identify its absolute normalization with a knot invariant. In particular it makes no numerical assertion about the two-twisted double.
