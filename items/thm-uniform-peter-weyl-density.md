---
id: thm-uniform-peter-weyl-density
kind: theorem
title: Uniform density of representative functions (topological Peter-Weyl theorem)
deps:
- def-axiom-of-choice
- cor-normalized-haar-probability-on-a-compact-group
- lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra
- lem-compact-group-matrix-coefficients-separate-points
- thm-complex-stone-weierstrass-self-adjoint
- def-self-adjoint-complex-function-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Exercise 5.4.6 and Corollary 5.4.8(2), printed pp. 234–236
  - title: Terence Tao, 254A Notes 3 (author-hosted lecture notes, 2011)
    url: https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/
    locator: Theorem 7 and Exercise 22(ii)
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff topological group. The representative functions $R(K)$ ([[lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra]]) are uniformly dense in $C(K,\mathbb C)$: for every $f\in C(K,\mathbb C)$ and every $\varepsilon>0$ there is $h\in R(K)$ with $\sup_{k\in K}|f(k)-h(k)|<\varepsilon$.

## Facts & Assumptions

[F1] $R(K)$ is a unital self-adjoint complex function algebra of continuous complex functions on the compact Hausdorff space $K$, closed under pointwise products and complex conjugation and containing the constants. ([[lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra]], [[def-self-adjoint-complex-function-algebra]])

[F2] If $K$ is equipped with normalized Haar probability, then for distinct $x,y\in K$ there are a finite-dimensional continuous unitary representation $\pi$ of $K$ and vectors $v,w$ in its carrier with $\langle\pi(x)v,w\rangle\ne\langle\pi(y)v,w\rangle$, and the function $k\mapsto\langle\pi(k)v,w\rangle$ lies in $R(K)$. ([[lem-compact-group-matrix-coefficients-separate-points]])

[F3] Complex Stone–Weierstrass: if $X$ is a nonempty compact Hausdorff space and $A\subseteq C(X,\mathbb C)$ is a point-separating self-adjoint complex function algebra, then the uniform closure of $A$ is all of $C(X,\mathbb C)$ when $A$ is unital. ([[thm-complex-stone-weierstrass-self-adjoint]], [[def-self-adjoint-complex-function-algebra]])

[F4] Under AC, every compact Hausdorff group has a normalized Haar probability. ([[cor-normalized-haar-probability-on-a-compact-group]])

## Proof

**Given:** AC, A compact Hausdorff topological group $K$ and its algebra $R(K)$ of representative functions.

1.1 Equip $K$ with the normalized Haar probability supplied by [F4]. By [F1] the set $R(K)$ is a self-adjoint complex function algebra on the compact Hausdorff space $K$, and it is unital because it contains the constants; it separates points, since for distinct $x,y\in K$ the representation and vectors supplied by [F2] give the element $k\mapsto\langle\pi(k)v,w\rangle$ of $R(K)$ with different values at $x$ and $y$. [F1, F2, F4]

2.1 The space $K$ is nonempty because it is a topological group, so the unital case of complex Stone–Weierstrass [F3] applies to $A=R(K)$ and shows that its uniform closure is $C(K,\mathbb C)$; for the given $\varepsilon>0$, uniform closure provides $h\in R(K)$ with $|f(k)-h(k)|<\varepsilon/2$ for every $k$, hence $\sup_{k\in K}|f(k)-h(k)|\le\varepsilon/2<\varepsilon$. The Axiom of Choice is inherited through normalized Haar existence and the cited separation and algebra suppliers; this proof adds no further choice. [F3, step 1.1] ∎
