---
id: lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation
kind: lemma
title: Every nonzero unitary representation of a compact group has a finite-dimensional subrepresentation
deps:
- lem-l1-action-of-a-unitary-representation
- thm-uniform-peter-weyl-density
- lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra
- def-representative-function-on-a-compact-group
- def-strongly-continuous-unitary-representation
- lem-l1-convolution-norm-inequality
- def-linear-subspace
- def-axiom-of-choice
- cor-finite-dimensional-subspaces-are-closed
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Lemma 5.4.7 and its proof, printed pp. 234–235
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group and let $\pi:K\to U(H)$ be a strongly continuous unitary representation on a complex Hilbert space $H\ne\{0\}$ ([[def-strongly-continuous-unitary-representation]]). Then $H$ contains a nonzero finite-dimensional closed $\pi(K)$-invariant subspace.

## Facts & Assumptions

[F1] The $L^1$ action: for $g\in L^1(K)$ and $u\in H$ one has $\|\pi(g)u\|\le\|g\|_1\|u\|$; for $f\in C(K)$ with $\int_Kf\,d\mu=1$ one has $\|\pi(f)u-u\|\le\int_K|f|\,\|\pi(k)u-u\|\,d\mu(k)$; and for every $u\ne0$ there is $f\in C(K)$ with $f\ge0$, $\int_Kf\,d\mu=1$ and $\pi(f)u\ne0$. ([[lem-l1-action-of-a-unitary-representation]], [[lem-l1-convolution-norm-inequality]])

[F2] The representative functions $R(K)$ are uniformly dense in $C(K,\mathbb C)$: for every $f\in C(K)$ and $\varepsilon>0$ there is $f_1\in R(K)$ with $\sup_K|f-f_1|<\varepsilon$. ([[thm-uniform-peter-weyl-density]])

[F3] Every element of $R(K)$ is a finite linear combination of matrix coefficients of finite-dimensional continuous unitary representations, and it is closed under left translation: if $h$ is a matrix coefficient of a finite-dimensional continuous unitary representation $\sigma$ and $k\in K$, then $x\mapsto h(k^{-1}x)$ is again a matrix coefficient of $\sigma$. ([[def-representative-function-on-a-compact-group]], [[lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra]])

[F4] Covariance of the $L^1$ action: $\pi(k)\pi(h)=\pi(\lambda(k)h)$ for every $k\in K$ and $h\in L^1(K)$, where $\lambda$ is the left regular action. ([[lem-l1-action-of-a-unitary-representation]])

[F5] A finite-dimensional linear subspace of a Hilbert space is closed, and the image of a finite-dimensional vector space under a linear map is finite dimensional; a linear subspace is by definition closed under addition and scalar multiplication. ([[cor-finite-dimensional-subspaces-are-closed]], [[def-linear-subspace]])

## Proof

**Given:** AC, a compact Hausdorff group $K$, and a strongly continuous unitary representation $\pi$ on $H\ne\{0\}$.

1.1 Fix $v\in H$ with $v\ne0$; by [F1] there is $f\in C(K)$ with $\pi(f)v\ne0$. Since $\mu(K)=1$ the uniform norm dominates the $L^1$ norm, so uniform density [F2] provides $f_1\in R(K)$ with $\|f-f_1\|_\infty<\|\pi(f)v\|/(2\|v\|)$ and hence $\|\pi(f-f_1)v\|\le\|f-f_1\|_1\|v\|\le\|f-f_1\|_\infty\|v\|<\|\pi(f)v\|/2$; therefore $\|\pi(f_1)v\|\ge\|\pi(f)v\|-\|\pi(f-f_1)v\|>0$, that is $\pi(f_1)v\ne0$. [F1, F2]

2.1 Write $f_1$ as a finite linear combination of matrix coefficients of finite-dimensional continuous unitary representations $\pi_1,\dots,\pi_r$ of $K$, and let $E\subseteq C(K)$ be the linear span of all matrix coefficients of these representations; then $E$ is finite dimensional because each $\pi_j$ has only $d_j^2$ coefficients in an orthonormal basis, and $E$ is invariant under left translation by [F3]; the set $F:=\{\pi(h)v:h\in E\}$ is the image of the finite-dimensional space $E$ under the linear map $h\mapsto\pi(h)v$, so it is a finite-dimensional linear subspace of $H$ containing $\pi(f_1)v\ne0$. For $k\in K$ and $h\in E$ the covariance [F4] gives $\pi(k)\bigl(\pi(h)v\bigr)=\pi(\lambda(k)h)v\in F$, so $\pi(k)F\subseteq F$; replacing $k$ by $k^{-1}$ gives $F\subseteq\pi(k)F$, hence $\pi(k)F=F$ for every $k$, and $F$ is closed by [F5] because it is finite dimensional. Thus $F$ is a nonzero finite-dimensional closed $\pi(K)$-invariant subspace of $H$, which proves the lemma. The Axiom of Choice is inherited through the $L^1$ action and the uniform-density supplier; the finite-dimensional-span argument is choice-free apart from those inputs. [F3, F4, F5, step 1.1] ∎
