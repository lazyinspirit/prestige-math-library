---
id: thm-graded-krull-schmidt-for-finite-dimensional-graded-modules
kind: theorem
title: "Graded Krull–Schmidt for finite-dimensional graded modules"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-graded-ring-module-bimodule-and-internal-shift
  - lem-graded-fitting-decomposition-preserves-homogeneous-summands
  - lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
  - thm-dimension-of-a-linear-subspace
justified_by: []
forward_refs: []
aliases: []
landmark: false
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft), §11.1, Theorem 11.1.6 (ungraded Krull–Schmidt theorem for modules over a ring; the graded-category version is proved here)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2 (graded module conventions only)"
      url: "https://arxiv.org/pdf/0909.4844"
pipeline_run: frontier-36-complete
---

## Statement

Let $A$ be any unital associative $\mathbb Z$-graded algebra over a field $k$.
Every finite-dimensional graded left $A$-module is a finite direct sum of
nonzero graded-indecomposable modules (modules not decomposable as a direct sum
of two nonzero graded submodules), with the zero module represented by the
empty sum. If a module has two such decompositions, their summands have the same
finite multiset of isomorphism classes in $\operatorname{GrMod}_0(A)$, that is,
up to degree-zero graded isomorphism
([[def-graded-ring-module-bimodule-and-internal-shift]]). Ungraded isomorphism
classes are not substituted.

## Facts & Assumptions

**Given:** A unital associative $\mathbb Z$-graded algebra $A$ over a field $k$ and a finite-dimensional graded left $A$-module $M$. Decompositions are finite biproducts in $\operatorname{GrMod}_0(A)$, and indecomposable summands are required to be nonzero. No axiom of choice is used.

**Source relation:** Webb's ungraded Krull–Schmidt theorem supplies the module-theoretic model; this item proves existence and uniqueness in the degree-zero graded category, including its graded endomorphism-ring step. Kleshchev supplies only the grading conventions.

[F1] A graded module is the direct sum of its homogeneous pieces, and the action of $A_i$ sends degree $d$ to degree $i+d$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F2] In $\operatorname{GrMod}_0(A)$, kernels and images are computed degreewise, and finite biproducts are computed degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[F3] For a finite-dimensional graded algebra and a nonzero finite-dimensional graded-indecomposable module, the nonunits of its degree-zero endomorphism ring form a proper two-sided ideal ([[lem-graded-fitting-decomposition-preserves-homogeneous-summands]]).

[F4] A subspace of a finite-dimensional vector space has dimension at most the ambient dimension, with equality exactly when it is the whole space ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Let $X$ be a nonzero finite-dimensional graded left $A$-module. Its grading has finite support. Give $\operatorname{End}_k(X)$ the grading by degree shift: a homogeneous endomorphism of degree $r$ sends $X_d$ into $X_{d+r}$. Because the support of $X$ is finite, every $k$-linear endomorphism is a finite sum of such homogeneous maps, and composition adds degrees. The action map $\rho:A\to\operatorname{End}_k(X)$ sends $A_r$ into degree $r$; hence its image $B=\rho(A)=\bigoplus_r\rho(A_r)$ is a graded subalgebra. It is finite-dimensional as a subspace of $\operatorname{End}_k(X)$, and its identity is $1_B=1_X$. By [F1], $X$ is a graded $B$-module. Since $A\twoheadrightarrow B$, the graded $A$-submodules and graded $B$-submodules of $X$ coincide, as do their degree-zero endomorphism rings. [F1, given, algebra, construct]

1.2 Existence follows by strong induction on $d=\dim_k M$. If $d=0$, the empty sum is the required decomposition. If $M$ is nonzero and graded-indecomposable, it is already a one-term decomposition. Otherwise write $M=U\oplus V$ with nonzero graded submodules $U,V$. Each is a proper subspace of $M$, so [F4] gives $\dim_k U<d$ and $\dim_k V<d$. Induction decomposes $U$ and $V$ into finite sums of nonzero graded-indecomposables; combining those sums decomposes $M$. [F4, given, induction, cases, algebra]

2.1 If $X$ is also graded-indecomposable, it remains graded-indecomposable as a $B$-module. Apply [F3] to the finite-dimensional graded algebra $B$ and the module $X$ from step 1.1. It follows that the nonunits of $\operatorname{End}_{A,0}(X)=\operatorname{End}_{B,0}(X)$ form a proper two-sided ideal. [F3, step 1.1, given]

3.1 Prove uniqueness by strong induction on $d=\dim_k M$. When $M=0$, both decompositions are empty. For nonzero $M$, assume uniqueness in every smaller dimension and write $M=X\oplus C=Y_1\oplus\cdots\oplus Y_s$, where all summands are nonzero graded-indecomposables. Let $\iota_X,\pi_X$ and $\iota_j,\pi_j$ be the degree-zero inclusions and projections for these finite biproducts. Define $e_j=\pi_X\iota_j\pi_j\iota_X\in\operatorname{End}_{A,0}(X)$. The identity $\sum_j\iota_j\pi_j=1_M$ gives $\sum_j e_j=1_X$. By step 2.1 the nonunits form a proper ideal, so at least one $e_j$ is invertible. [F2, step 2.1, given, induction, construct]

4.1 Fix such a $j$, and put $a=\pi_j\iota_X:X\to Y_j$ and $b=\pi_X\iota_j:Y_j\to X$. Then $ba=e_j$ is invertible. The degree-zero map $s:=a e_j^{-1}$ satisfies $bs=1_X$, so $Y_j=s(X)\oplus\ker b$: for each $y\in Y_j$, $y=s(b(y))+(y-s(b(y)))$, and the second term is in $\ker b$, while $s(X)\cap\ker b=0$. By [F2], the image and kernel are graded submodules. Since $s(X)\ne0$ and $Y_j$ is graded-indecomposable, $\ker b=0$, so $s$ is bijective. Its inverse is $A$-linear, and it is degree-zero: for homogeneous $y\in Y_{j,d}$, write $s^{-1}(y)=\sum_e x_e$ with $x_e\in X_e$; the direct grading of $Y_j$ and injectivity of $s$ force $x_e=0$ for $e\ne d$. Thus $s$ is a degree-zero isomorphism $X\cong Y_j$. [F2, step 3.1, algebra]

5.1 Write $M=X\oplus C=Y_j\oplus D$, where $D$ is the sum of the other $Y$-summands. The projection $\pi_D|_C:C\to D$ is a degree-zero isomorphism. Its kernel is zero because $C\cap Y_j=0$: if $c\in C\cap Y_j$, then $\pi_X(c)=0$ and the isomorphism $b=\pi_X|_{Y_j}$ from step 4.1 forces $c=0$. For any $z\in D$, choose the unique $y\in Y_j$ with $\pi_X(y)=\pi_X(z)$; then $z-y\in C$ and $\pi_D(z-y)=z$, proving surjectivity. The inverse is degree-zero by the argument in step 4.1. Since $X,Y_j$ are nonzero, $C,D$ are proper subspaces of $M$, so [F4] gives $\dim_k C,\dim_k D<d$. [F2, F4, step 4.1, algebra]

6.1 The decompositions of $C$ and $D$ into the remaining indecomposable summands have the same multiset by the induction hypothesis in step 3.1 and the degree-zero isomorphism in step 5.1. Adding $X\cong Y_j$ from step 4.1 proves uniqueness for $M$. Step 1.2 proves existence, so every finite-dimensional graded module has a finite decomposition unique up to permutation and degree-zero graded isomorphism. [step 1.2, step 3.1, step 4.1, step 5.1, induction] ∎
