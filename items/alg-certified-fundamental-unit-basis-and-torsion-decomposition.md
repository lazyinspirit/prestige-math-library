---
dependency_level: 8
id: alg-certified-fundamental-unit-basis-and-torsion-decomposition
kind: algorithm
title: "Compute a certified fundamental-unit basis and complete torsion data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - alg-compute-units-and-class-group-from-bounded-s-units
  - thm-bounded-s-unit-matrix-computation-correct
  - lem-decidable-abelian-group-known-rank-relation-completion
  - thm-integer-smith-normal-form-computes-kernel-and-cokernel
  - thm-s-unit-theorem
  - def-fundamental-units
  - def-roots-of-unity-in-a-field
  - def-axiom-of-choice
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter2 integer matrix methods and Chapter8 unit groups"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Definition

Assume the Axiom of Choice. Input the exact data of the bounded S-unit matrix algorithm: a monic irreducible $f\in\mathbb Z[T]$, $K=\mathbb Q[T]/(f)$, an integral basis with multiplication table and discriminant, and the signature $(r_1,r_2)$. Return a full integer relation matrix for a finite unit generating list, fundamental units $\epsilon_1,\ldots,\epsilon_r$ with $r=r_1+r_2-1$, the complete finite list $\mu(K)$, and transformation data certifying the unique representation $u=\zeta\prod_i\epsilon_i^{a_i}$ for every ordinary unit.

1. Run the bounded S-unit matrix algorithm and retain its ordinary-unit generating list $g_1,\ldots,g_m$; its class-group output may be returned alongside the following data. Set $k=m-r$.

2. Enumerate $a\in\mathbb Z^m$ by increasing sup norm and lexicographic order. Compute $\prod_i g_i^{a_i}$ exactly in $K$, using rational residue arithmetic and the extended Euclidean algorithm for inverses of nonzero field elements. Retain equality-to-one vectors increasing the rational column rank, until $k$ independent relations have been retained.

3. Smith-reduce their matrix to identify $F_0=\mathbb Z^m/L_0$ with a free group of rank $r$ and a finite product $T_0$ of cyclic groups. Enumerate every element of $T_0$ by its bounded standard coordinates, lift it through the Smith row transformation to $\mathbb Z^m$, and test its exact product in $K$. Adjoin every lift giving product $1$ to the relation matrix.

4. Smith-reduce this completed matrix. If its codomain transformation is $U$ and its $k$ positive diagonal entries are $d_1,\ldots,d_k$, return $\epsilon_j=\prod_i g_i^{(U^{-1}e_{k+j})_i}$ for $1\le j\le r$. Return all products $\prod_{j\le k}(\prod_i g_i^{(U^{-1}e_j)_i})^{b_j}$ with $0\le b_j<d_j$ as the torsion list, and return $U$, its inverse, the full relation matrix, and its Smith transformations. Diagonal entries equal to $1$ contribute only exponent zero.

For $r=0$ the free-basis list is empty; for an empty relation matrix its Smith operations and torsion enumeration use the empty-tuple conventions. The algorithm computes neither a regulator nor a complexity bound. Its certification uses the known rank and the exhaustive finite torsion-kernel test, not an unproved test for multiplicative independence of approximate logarithms.

## Definition references

[[alg-compute-units-and-class-group-from-bounded-s-units]]

[[thm-bounded-s-unit-matrix-computation-correct]]

[[lem-decidable-abelian-group-known-rank-relation-completion]]

[[thm-integer-smith-normal-form-computes-kernel-and-cokernel]]

[[thm-s-unit-theorem]]

[[def-fundamental-units]]

[[def-roots-of-unity-in-a-field]]

[[def-axiom-of-choice]]

[Stein, Algebraic Number Theory: A Computational Approach, Chapters2 and8](https://wstein.org/books/ant/ant.pdf)
