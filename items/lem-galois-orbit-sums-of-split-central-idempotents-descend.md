---
id: lem-galois-orbit-sums-of-split-central-idempotents-descend
kind: lemma
title: Orbit sums of primitive split central idempotents descend
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: §3.2 Theorem 3.2.1 and §3.8 Theorem 3.8.1; central-idempotent argument reconstructed locally
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Definition 2.2.7 and Lemma 2.2.9, pp.28–29
status: draft
origin: pipeline
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["def-semilinear-galois-action-on-a-scalar-extended-algebra", "lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension", "lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices", "thm-simple-modules-over-semisimple-rings"]
---

## Statement

Let $E/F$ be finite Galois with group $\Gamma$, let $A$ be a finite-dimensional
unital $F$-algebra, and assume $B=E\otimes_F A$ is split semisimple. Its primitive
central idempotents are the coordinate identities in a split matrix
decomposition. They correspond bijectively to simple left $B$-module classes
by support. The action $\sigma_B$ permutes these idempotents, and $c$ supports
$W$ if and only if $\sigma_B(c)$ supports ${}^\sigma W$.

For every orbit $O$ of primitive central idempotents there is a unique nonzero
central idempotent $e_O\in A$ with
$$1\otimes e_O=c_O:=\sum_{c\in O}c.$$
Distinct $e_O$ are orthogonal and their sum is $1_A$. For $A=0$, both families
are empty and this last equality means $0=1_A$.

## Facts & Assumptions

[F1] Tensor algebra actions, twists, support and split semisimplicity are defined in [[def-semilinear-galois-action-on-a-scalar-extended-algebra]].

[F2] Canonical fixed tensors are exactly $1\otimes A$, and $A\to E\otimes_F A$ is injective: [[lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension]].

[F3] $Z(M_n(E))=EI_n$ for $n\ge1$: [[lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices]].

[F4] A finite nonempty product of full matrix rings over division rings has exactly one simple left-module class per factor, its column module: [[thm-simple-modules-over-semisimple-rings]].

## Proof

**Given:** $B\cong\prod_{j=1}^rM_{d_j}(E)$ with every $d_j\ge1$, allowing $r=0$.

1.1 For $r>0$, a central element has a scalar matrix in each coordinate, since commuting can be tested one coordinate at a time. The equation $\lambda^2=\lambda$ in the field $E$ forces $\lambda=0$ or $1$. Hence all central idempotents are unique subset sums of the coordinate identities $c_1,\ldots,c_r$. Such a nonzero sum is primitive exactly when its subset is a singleton: a larger subset splits into two nonempty subsets, whereas a singleton cannot. [F3, algebra]

2.1 The simple module for factor $j$ is $E^{d_j}$, on which $c_j$ acts as identity and every other $c_k$ as zero. F4 says these give every class exactly once. An automorphism $\sigma_B$ preserves centrality, idempotence, nonzeroness and orthogonal splittings in both directions (use its inverse), so it permutes primitive central idempotents. The twist equation gives $\sigma_B(c)\star w=cw$. Thus identity action of $c$ on $W$ is equivalent to identity action of $\sigma_B(c)$ on ${}^\sigma W$, proving both directions of the claimed compatibility. [F1, F4, step 1.1, algebra]

3.1 Each orbit $O$ is a nonempty subset of this finite family. The sum $c_O$ is nonzero, central and idempotent, since its terms are nonzero orthogonal coordinate identities. Every $\sigma_B$ permutes its terms, so it is fixed. F2 gives a unique $e_O\in A$ such that $1\otimes e_O=c_O$. [F2, step 1.1, step 2.1, algebra]

4.1 The identities $1\otimes(e_O^2-e_O)=c_O^2-c_O=0$ and $1\otimes(e_Oa-ae_O)=c_O(1\otimes a)-(1\otimes a)c_O=0$ for every $a\in A$ imply idempotence and centrality by injectivity. Nonzeroness follows from $c_O\ne0$. Disjoint orbits have disjoint coordinate supports, so $c_Oc_{O'}=0$ for $O\ne O'$, and all orbit sums add to $1_B$. Injectivity reflects these two equalities to $A$. [F1, F2, step 3.1, algebra]

5.1 If $r=0$, $B=0$ and injectivity gives $A=0$. A unital module over the zero ring is zero because $w=1w=0w=0$, so there are no simple modules and no nonzero primitive central idempotents. The families are empty, with sum $0=1_A$. If an orbit has one element, step 3.1 descends that element itself, with the same nonzeroness and uniqueness proof. [F2, step 3.1, step 4.1, algebra] QED

## Remarks

The subset-of-factors argument combines the local matrix-center and
simple-module results with Zheng, Theorem 3.8.1, pp.132–133. It does not assert
that an individual simple module descends with multiplicity one.
