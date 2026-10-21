---
id: lem-pointed-heegaard-admissibility-finite-domain-slices
kind: lemma
title: "Admissibility makes fixed-multiplicity positive domain slices finite"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-admissible-pointed-heegaard-floer-data]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, Lemma 4.13"
      url: "https://arxiv.org/pdf/math/0101206"
---

## Statement

Fix an admissible multipointed Heegaard diagram with finitely many complementary regions. Fix generators $\mathbf x,\mathbf y$ and a vector $a\in\mathbb Z^k$. There are only finitely many nonnegative integral domains of Whitney disks from $\mathbf x$ to $\mathbf y$ whose $w$-multiplicity vector is $a$.

More generally, the same conclusion holds for any collection of nonnegative integral region chains whose pairwise differences are periodic domains and whose $w$-multiplicity vector is fixed. If an integer $s$ is prescribed instead of the vector, there are only finitely many such chains with $\sum_i n_{w_i}=s$. In particular this applies to a fixed-index collection whenever an independently established relative grading identity determines that sum from the endpoints and the index. This is finiteness of domains; it makes no assertion about the number of disk classes with a given domain or the compactness of a moduli space.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** The diagram, its admissibility, and a collection of region chains as in the statement.

[F1] A periodic domain has boundary an integral linear combination of full attaching curves. Admissibility says that every nonzero integral periodic domain with zero $w$-multiplicities has both positive and negative region coefficients, with the conventions of [[def-admissible-pointed-heegaard-floer-data]].

## Proof

1.1 Number the regions $R_1,\ldots,R_r$ and identify a region chain with its coefficient vector in $\mathbb R^r$. The condition that its boundary be a real linear combination of full attaching curves is a rational homogeneous linear condition: subdivide the curves at their finitely many intersections, write the cellular boundary of each region on the resulting oriented edges, and quotient the edge space by the span of the full curves, all of whose vectors are integral. Gaussian elimination over $\mathbb Q$ supplies a matrix with rational entries whose kernel is precisely this condition. Append the equations that the coefficients at the regions containing each $w_i$ vanish. Denote the resulting real kernel by $L$. Its integral vectors are exactly the integral periodic domains with zero $w$-multiplicities. Redundant edge subdivisions and equations do not affect this conclusion. [F1, construct, algebra]

2.1 We claim $L\cap\mathbb R_{\ge0}^r=\{0\}$. Otherwise take nonzero $v$ in this intersection and let $I=\{j:v_j>0\}$. In the rational linear subspace $L_I=L\cap\{v_j=0:j\notin I\}$, Gaussian elimination gives a basis of rational vectors. Express $v$ in that basis and approximate its finitely many real coefficients by rational numbers closely enough that all coordinates in $I$ remain positive. The resulting rational vector lies in $L_I$, is nonnegative and nonzero. Multiplying by a common positive denominator gives a nonzero nonnegative integral vector in $L$, contrary to admissibility. [step 1.1, F1, algebra]

3.1 If the fixed-vector slice is empty there is nothing to prove. Otherwise fix a member $D_0$. Every other member $D$ lies in $(D_0+L)\cap\mathbb R_{\ge0}^r$: its difference from $D_0$ is periodic and has zero marked multiplicities. The integral members of this intersection are bounded. Otherwise enumerate $\mathbb Z^r$ once and for each positive integer $n$ take its first member $D_n$ in the intersection with $\|D_n\|>n$. This specifies the sequence without any choice principle. The nonnegative unit vectors $D_n/\|D_n\|$ have a convergent subsequence in the finite-dimensional unit sphere. Its limit $v$ is nonnegative with norm one; since $(D_n-D_0)/\|D_n\|\in L$ and a kernel of a matrix is closed, $v\in L$, contradicting step 2.1. [step 1.1, step 2.1, given]

4.1 A bounded subset of $\mathbb R^r$ has only finitely many integral vectors: a common bound on the coordinates places them in a finite product of finite integer intervals. This proves the fixed-vector assertion. Domains of two disks with the same endpoints have periodic difference: the endpoint corners cancel in their boundary difference, leaving on each attaching circle a cycle, whose integer edge coefficient is constant around that circle and hence an integer multiple of the full circle. Thus the assertion applies to the disk domains in the first paragraph. [step 3.1, algebra]

5.1 For nonnegative chains each $n_{w_i}$ is a nonnegative integer. If their sum is $s<0$ there are none; if $s\ge0$ each coordinate is one of $0,\ldots,s$, leaving finitely many vectors. Apply the fixed-vector result to each vector and take the finite union. If a relative grading identity fixes $\sum_i n_{w_i}$, this argument applies with that integer; it does not establish the identity itself or identify domains with homotopy classes. [step 4.1, algebra] ∎
