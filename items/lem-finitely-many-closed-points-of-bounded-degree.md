---
id: lem-finitely-many-closed-points-of-bounded-degree
kind: lemma
title: "Only finitely many closed points have bounded degree over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-algebraic-curve-over-field
  - def-degree-divisor-proper-curve
  - def-finite-type-and-module-finite-algebras
  - def-finite-field-and-its-order
  - lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5, Lemma 5.5"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
verification: {}
---

## Statement

Let $k=\mathbb F_q$ be a finite field, let $C$ be a smooth proper
geometrically integral curve over $k$, and let $N\ge0$ be an integer. Then
the set of closed points $x\in C$ with $[\kappa(x):k]\le N$ is finite.

## Statement references

[[def-algebraic-curve-over-field]]

[[def-degree-divisor-proper-curve]]

## Facts & Assumptions

**Given:** A finite field $k=\mathbb F_q$, a smooth proper geometrically
integral curve $C$ over $k$, and an integer $N\ge0$.

[F1] The curve is nonempty and of finite type over $k$; smoothness,
properness and geometric integrality are additional hypotheses. Finite type
gives a finite affine open cover, and each chart's coordinate ring is a
finitely generated $k$-algebra. ([[def-algebraic-curve-over-field]],
[[def-finite-type-and-module-finite-algebras]])

[F2] If $L/k$ has finite degree $e$ and $|k|=q$, then $|L|=q^e.
([[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]])

[F3] A closed point $x$ of a proper curve has finite residue degree
$[\kappa(x):k]$, a positive integer, and that is the degree used in the
divisor degree function. ([[def-degree-divisor-proper-curve]])

[F4] A finite-type $k$-algebra is generated as an algebra by finitely many
elements. Since $k$ itself is finite, adjoining all its finitely many elements
to such a generating set gives a finite set of generators over the prime
subfield. ([[def-finite-type-and-module-finite-algebras]],
[[def-finite-field-and-its-order]])

## Proof



**Given:** The objects and hypotheses above.

1.1 Fix $e$ with $1\le e\le N$, put $M=q^e$, and let $J_M=\{0,1,\ldots,M-1\}$. There are only finitely many commutative unital ring structures on $J_M$, since addition, multiplication, additive inverse and the constants are chosen from finite sets of operation tables. Take a finite affine open cover $C=\bigcup_{j=1}^m\operatorname{Spec}A_j$. For each chart fix a finite set of ring generators of $A_j$ over the prime subfield, equivalently as a ring over $\mathbb Z$, which exists by [F4]. For any ring structure $R$ on $J_M$, a unital ring homomorphism $A_j\to R$ is determined by the images of those generators; if the generating set has size $s_j$, there are at most $M^{s_j}$ possibilities. Thus the set of pairs $(R,\psi)$ consisting of such a ring structure and a homomorphism $\psi:A_j\to R$ is finite. If $x\in U_j$ is a closed point of degree $e$, [F2] gives $|\kappa(x)|=q^e=M$. A bijection from $\kappa(x)$ to $J_M$ transports its field operations to one of the listed ring structures, and composing the residue map $A_j\to\kappa(x)$ with this bijection gives one of the listed homomorphisms. Its kernel is the maximal ideal corresponding to $x$. Hence the degree-$e$ closed points in $U_j$ are contained in the finite set of kernels of the listed homomorphisms. The finite affine cover shows that only finitely many closed points of degree $e$ occur on $C$. This argument uses no simultaneous choices: each point's kernel belongs to the same finite set of kernels. [F1, F2, F4, given, construct]

2.1 If $N=0$, the set is empty because every residue degree is positive by [F3]. If $N>0$, the required set is the union of the finite sets established in step 1.1 for $e=1,\ldots,N$; a finite union of finite sets is finite. [F3, step 1.1, given, algebra] ∎

