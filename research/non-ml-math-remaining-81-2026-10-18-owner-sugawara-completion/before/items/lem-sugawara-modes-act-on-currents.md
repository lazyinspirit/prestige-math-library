---
id: lem-sugawara-modes-act-on-currents
kind: lemma
title: Sugawara modes act on affine currents with weight one
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-sugawara-modes
  - def-dual-coxeter-number-for-normalized-form
  - def-untwisted-affine-central-extension
  - def-positive-energy-unitary-affine-module
  - def-positive-energy-affine-module
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - lem-sugawara-mode-one-commutator
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
---

## Statement

Let $\mathfrak g$ be finite-dimensional and simple, let $B$ have long-root-square-$2$ normalization, and let $H$ be a compact positive-energy unitary affine-current module as in [[def-positive-energy-unitary-affine-module]]. For the modes of [[def-sugawara-modes]], all $k\in\mathbb Z_{\ge0}$ are noncritical, and for every $x\in\mathfrak g$ and $m,n\in\mathbb Z$,
$$[L_m,J_x(n)]=-nJ_x(m+n).$$

## Facts & Assumptions

**Given:** The current-mode relations, the positive-energy grading, the compact mode adjoints, and the normalized Sugawara formula.

[F1] [[lem-sugawara-mode-one-commutator]]: for compact $X$, $[L_m,X(0)]=0$ and $[L_m,X(1)]=-X(m+1)$.

[F2] [[def-sugawara-modes]]: $L_m$ is the locally finite normally ordered quadratic sum, with denominator $2(k+h^\vee)$.

[F3] [[def-positive-energy-unitary-affine-module]]: $X(n)^*=-X(-n)$ for compact $X$, and $H$ has nonnegative finite-dimensional energy spaces.

[F4] [[def-positive-energy-affine-module]]: each vector is annihilated by all sufficiently large positive current modes.

[F5] [[def-untwisted-affine-central-extension]]: $[X(a),Z(b)]=[X,Z](a+b)+aB(X,Z)K\delta_{a+b,0}$.

[F6] [[def-loop-algebra-of-a-simple-lie-algebra]]: $\mathfrak g$ is nonabelian simple and is the complexification of its compact real form.

[F7] [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]: $\mathfrak k$ is a real form of $\mathfrak g$.

[F8] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee$ is a positive real number.

## Proof

1.1 Since $k\ge0$ and [F8] gives $h^\vee>0$, the coefficient in [F2] is real and nonzero. The restriction condition [F4] and local finiteness in [F2] justify taking adjoints termwise; reindexing $r$ by $m-r$ gives $L_m^*=L_{-m}$. When the two mode indices have opposite signs, adjoint reverses the order into the prescribed normal order; when both are strictly negative, swapping the two indices pairs the reversed adjoint terms, and when both are strictly positive the same reindexing gives the target order. The zero-index boundary terms pair as well; their possible difference is $\sum_i[X_i(0),X_i(-m)]=0$, since $[X_i,X_i]=0$ and the central coefficient has mode zero. Thus the adjoint identity holds. From [F1], [F3], and $[A,B]^*=[B^*,A^*]$, we obtain $[L_m,X(-1)]=X(m-1)$; together with [F1], the required formula now holds for compact $X$ at $n=-1,0,1$. [F1, F2, F3, F4, F8, algebra]

2.1 Let $n\ge1$ and suppose the formula holds at index $n$. For compact $X,Z$, the noncentral part of [F5] gives $[X(n),Z(1)]=[X,Z](n+1)$; its central term is zero since $n+1\ne0$. Jacobi and the two induction formulas give $[L_m,[X,Z](n+1)]=[-nX(m+n),Z(1)]+[X(n),-Z(m+1)]=-(n+1)[X,Z](m+n+1).$ The total central contribution is $-n(m+n+1)B(X,Z)K\delta_{m+n+1,0}=0$. Since $\mathfrak g$ is nonabelian simple, $[\mathfrak g,\mathfrak g]$ is a nonzero ideal and therefore equals $\mathfrak g$; by [F7], the complex span of brackets of compact elements is all of $\mathfrak g$. Induction proves the formula for all $n>0$. [F5, F6, F7, step 1.1, algebra]

3.1 Let $n\le-1$ and suppose the formula holds at index $n$. The central term in $[X(n),Z(-1)]$ vanishes because $n-1\ne0$, so [F5] gives $[X(n),Z(-1)]=[X,Z](n-1)$. Jacobi gives $[L_m,[X,Z](n-1)]=[-nX(m+n),Z(-1)]+[X(n),Z(m-1)]=(1-n)[X,Z](m+n-1).$ The total central contribution is $-n(m+n-1)B(X,Z)K\delta_{m+n-1,0}=0$. Since $(1-n)=-(n-1)$ and the brackets $[X,Z]$ span $\mathfrak g$ as established in step 2.1, this proves the formula at index $n-1$; induction proves it for every negative $n$. Complex linearity extends all mode identities from $\mathfrak k$ to $\mathfrak g$. [F5, F6, F7, step 1.1, step 2.1, algebra] ∎
