---
dependency_level: 0
id: lem-gln-last-row-congruence-subgroup-index
kind: lemma
title: "Index of a last-row congruence subgroup of GL(m)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: []
justified_by: []
sources:
  references:
    - title: "Yang, sections 2.6 and 9.1, local congruence groups and volume factors"
      url: https://arxiv.org/pdf/2303.02225v1
---

## Statement

Let $\mathcal O$ be a discrete valuation ring with maximal ideal $(\varpi)$ and residue field of order $q$. Let $m\geq2$, $K=\mathrm{GL}_m(\mathcal O)$, $K_0(\varpi^0)=K$, and, for $e\geq1$, let $K_0(\varpi^e)$ consist of matrices whose last-row entries in columns $1,\ldots,m-1$ are divisible by $\varpi^e$. Then

$$[K:K_0(\varpi^e)]=q^{(m-1)(e-1)}\frac{q^m-1}{q-1}=q^{(m-1)e}\sum_{j=0}^{m-1}q^{-j}\quad(e\geq1),$$

while the index for $e=0$ is one. Any left Haar measure on $K$ with volume one gives $\operatorname{Vol}(K_0(\varpi^e))=[K:K_0(\varpi^e)]^{-1}$. In particular at $m=3$, $e=1$, $q=2$ the index is seven, and the factor multiplying $q^{2e}$ is $7/4$.

For $e\geq1$, let $\chi:\mathcal O^\times\to\mathbb C^\times$ be unitary and trivial on $1+\varpi^e\mathcal O$. Then $\kappa(k)=\chi(k_{m,m})$ is a character of $K_0(\varpi^e)$. For the projection assertion assume $\mathcal O$ is the ring of integers of a nonarchimedean local field, so $K_0$ is compact. In any smooth representation with invariant Hermitian inner product, the normalized finite-on-each-vector average

$$P_\kappa v=\operatorname{Vol}(K_0)^{-1}\int_{K_0}\overline{\kappa(k)}\,\pi(k)v\,dk$$

is the orthogonal projection onto the $\kappa$-isotypic vectors. For $e=0$ use $\kappa=1$. If scalar units act by a nontrivial character, ordinary $K_0$-fixed vectors are zero. These assertions distinguish the isotypic projector from untwisted invariance.

## Statement references

[Yang, sections 2.6 and 9.1](https://arxiv.org/pdf/2303.02225v1)

## Facts & Assumptions

**Given:** The valuation ring and finite residue field in the Statement. A primitive row over $\mathcal O/(\varpi^e)$ means one with at least one unit coordinate. Rows differing by a unit scalar define the same rank-one direct-summand line.

## Proof

1.1 Multiplication by $\varpi^i$ identifies each additive quotient $(\varpi^i)/(\varpi^{i+1})$ with the residue field. Induction on $e$ gives $|\mathcal O/(\varpi^e)|=q^e$. The nonunits in this quotient form an ideal of size $q^{e-1}$, so the units number $q^e-q^{e-1}$. There are $q^{me}-q^{m(e-1)}$ primitive rows: subtract the rows all of whose coordinates are nonunits. [given, algebra]

1.2 For $k,l\in K_0(\varpi^e)$, the bottom-right entry of $kl$ differs from $k_{m,m}l_{m,m}$ by an element of $\varpi^e\mathcal O$. Both displayed factors are units. Thus their ratio lies in $1+\varpi^e\mathcal O$, on which $\chi$ is trivial, proving multiplicativity of $\kappa$. In particular scalar units $uI_m$ have $\kappa(uI_m)=\chi(u)$. [given, algebra]

2.1 The group $K$ acts transitively on these primitive rows. To see this without assuming surjectivity of a general reduction map, lift one unit coordinate to a unit in $\mathcal O$, move it to the last position by a permutation, clear the other coordinates by elementary column operations and scale the last one by a unit. All these operations are invertible over $\mathcal O$. Thus every primitive row is the last row modulo $\varpi^e$ of some element of $K$. The stabilizer of the line of $(0,\ldots,0,1)$ is exactly $K_0(\varpi^e)$, since its last entry must then be a unit. A unit acts freely on primitive rows by scalar multiplication, as any unit coordinate forces a fixing scalar to be one. [step 1.1, construct, algebra]

3.1 Divide the number of primitive rows by the number of units in step 1.1 and use transitivity in step 2.1. This gives $(q^{me}-q^{m(e-1)})/(q^e-q^{e-1})=q^{(m-1)(e-1)}(q^m-1)/(q-1)$ lines, hence that index. Summing the finite geometric series gives the other expression. The $e=0$ group was separately defined to be $K$. Finite cosets partition $K$ into equal-volume translates, proving the volume assertion. Substitution $m=3$, $e=1$, $q=2$ gives seven and $7/4$. [step 1.1, step 2.1, algebra]

4.1 A smooth vector has an open stabilizer in the compact group $K_0$; its orbit is finite because the cosets of that stabilizer form an open cover and compactness gives a finite subcover. Its orbit span and the finite-order character $\kappa$ therefore factor through a common finite quotient: take the intersection of the finitely many conjugates of the stabilizer and the character kernel. The displayed average is consequently a finite group average on each vector. Left translation shows $\pi(h)P_\kappa v=\kappa(h)P_\kappa v$, and averaging a vector already of this type returns it. Inversion in the finite quotient and unitarity show $P_\kappa$ is self-adjoint. Hence it is the asserted orthogonal projection. If a vector is literally $K_0$-fixed while a scalar unit acts by a scalar different from one, that vector equals this different scalar times itself and is zero. [step 1.2, algebra, construct] ∎

## Remarks

This is an exact local ratio. It does not replace a global trace-formula estimate or determine its normalization. At composite levels, the product of the factors $\sum_{j=0}^{m-1}q^{-j}$ must be retained until a separate argument cancels or estimates it.
