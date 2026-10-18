---
id: def-finite-mode-car-algebra
kind: definition
title: Finite-Mode Complex CAR Algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 0
deps: []
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1–6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §4"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Fix an integer $n\ge0$. Let $F_n$ be the complex vector space with basis all finite words in the symbols $a_1,\ldots,a_n,a_1^\dagger,\ldots,a_n^\dagger$, including the empty word $1$. Give $F_n$ concatenation as multiplication and the conjugate-linear involution that reverses each word and exchanges $a_j$ with $a_j^\dagger$. Thus $F_n$ is the free unital complex $*$-algebra on $a_1,\ldots,a_n$.

For $x,y$ in an algebra write $\{x,y\}=xy+yx$. Let $J_n$ be the smallest two-sided $*$-ideal in $F_n$ containing

$$ \{a_i,a_j\},\qquad \{a_i^\dagger,a_j^\dagger\},\qquad \{a_i,a_j^\dagger\}-\delta_{ij}1\qquad(1\le i,j\le n). $$

Here a two-sided $*$-ideal is a complex linear subspace closed under left and right multiplication and under $*$. It exists as the intersection of all such ideals containing these relations; the collection is nonempty because it contains $F_n$. The relations are $*$-stable, since taking adjoints exchanges the first two families and changes the third relation with indices $i,j$ to the same relation with indices $j,i$. Define the **algebraic finite-mode CAR $*$-algebra** by $\mathsf{CAR}^{\mathrm{alg}}_n=F_n/J_n$, with generators denoted by the same symbols. Its quotient map gives the universal property: every tuple in a unital complex $*$-algebra satisfying these relations induces a unique unital $*$-homomorphism from $\mathsf{CAR}^{\mathrm{alg}}_n$. For $n=0$ there are no generators or relations and $\mathsf{CAR}^{\mathrm{alg}}_0=\mathbb C$.

This definition is algebraic; the finite-mode universal C*-completion is identified in [[thm-finite-mode-car-algebra-is-full-matrix-algebra]].
