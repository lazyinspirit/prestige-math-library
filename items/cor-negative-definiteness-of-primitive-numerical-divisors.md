---
id: cor-negative-definiteness-of-primitive-numerical-divisors
kind: corollary
title: "Negative definiteness of the primitive part of the Neron-Severi space"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-invertible-sheaf
  - def-numerical-equivalence-and-neron-severi-space
  - def-restriction-and-extension-of-scalars
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$ and let $H$ be an
invertible $\mathcal O_X$-module with $H\cdot H>0$
([[def-invertible-sheaf]]). Write $h:=[H]\in\operatorname{N}^1_{\mathbb R}(X)$
for its class and let
$$h^{\perp}=\{\,x\in\operatorname{N}^1_{\mathbb R}(X):x\cdot h=0\,\}$$
be the primitive part ([[def-numerical-equivalence-and-neron-severi-space]]).

1. Every class of $\operatorname{N}^1_{\mathbb R}(X)$ has a unique orthogonal
   decomposition $x=a\,h+x_0$ with $a\in\mathbb R$ and $x_0\in h^{\perp}$;
   equivalently $\operatorname{N}^1_{\mathbb R}(X)=\mathbb R h\oplus h^{\perp}$
   is an orthogonal direct sum.
2. The intersection form is **negative definite** on $h^{\perp}$
   ([[def-definiteness-inertia-and-signature-data-over-the-reals]]): for
   $x\in h^{\perp}$ one has $x\cdot x\le0$, with equality if and only if $x=0$.
3. If the Picard number $\rho(X)=\dim_{\mathbb R}\operatorname{N}^1_{\mathbb R}(X)$
   is finite, then the intersection form on $\operatorname{N}^1_{\mathbb R}(X)$
   is nondegenerate of dimension $\rho(X)$ and has inertia
   $(1,\rho(X)-1,0)$, equivalently index $(1,\rho(X)-1)$ and signature
   $2-\rho(X)$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).
   Finiteness of $\rho(X)$ is not proved here; the negative definiteness in (2)
   is unconditional.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, an invertible sheaf $H$ with $H\cdot H>0$, and its class $h\in\operatorname{N}^1_{\mathbb R}(X)$.

[F1] $\operatorname{N}^1_{\mathbb R}(X)=\operatorname{N}^1(X)\otimes_{\mathbb Z}\mathbb R$ carries the $\mathbb R$-bilinear extension of the intersection pairing, which is symmetric; the rational evaluation-matrix argument in the numerical-space definition proves that the extended form is nondegenerate: $x\cdot y=0$ for all $y$ forces $x=0$ ([[def-numerical-equivalence-and-neron-severi-space]], [[def-restriction-and-extension-of-scalars]], [[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]]).

[F2] The Hodge index theorem: for invertible sheaves $H',L'$ with $H'\cdot H'>0$ and $L'\cdot H'=0$ one has $L'\cdot L'\le0$, and equality holds if and only if $L'$ is numerically trivial ([[thm-hodge-index-theorem-for-smooth-projective-surfaces]]).

[F3] Structure of $\operatorname{N}^1_{\mathbb R}(X)$: it is the extension of scalars of the quotient of $\operatorname{Pic}(X)$ by the subgroup of numerically trivial classes ([[def-numerical-equivalence-and-neron-severi-space]], [[def-restriction-and-extension-of-scalars]]). Hence every element is a finite real linear combination of classes $[L_i]$ of invertible sheaves, the $\mathbb Q$-span of finitely many such classes consists of rational combinations $\sum q_i[L_i]$, and clearing denominators turns a rational combination into an integral combination $\sum a_i[L_i]$, $a_i\in\mathbb Z$, which is the class of the invertible sheaf $\bigotimes_iL_i^{\otimes a_i}$ (negative exponents meaning duals, [[def-invertible-sheaf]], [[lem-invertible-sheaf-dual-tensor-inverse]]). On each finite-dimensional real span the bilinear form is continuous in its usual Euclidean topology and the rational span of finitely many classes is dense in their real span.

[F4] Inertia, rank, index and signature of a symmetric bilinear form on a finite-dimensional real vector space: a diagonalizing basis with $p$ positive, $q$ negative and $r$ zero diagonal entries gives inertia $(p,q,r)$, rank $p+q$ and signature $p-q$, independent of the basis ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F5] The Axiom of Choice is inherited from the Hodge index and extension-of-scalars suppliers of [F2] and [F3]; the finite families of classes used below are chosen finitely many at a time.

## Proof

**Proof technique:** direct: split off the positive line $\mathbb R h$, reduce the negativity on the primitive part to the integral Hodge index theorem by rational approximation, and handle the equality case with a two-dimensional indefinite plane.

1.1 The orthogonal decomposition. For $x\in\operatorname{N}^1_{\mathbb R}(X)$ put $a:=(x\cdot h)/(h\cdot h)$, a real number because $h\cdot h>0$ by hypothesis ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). Then $(x-ah)\cdot h=x\cdot h-a(h\cdot h)=0$, so $x_0:=x-ah\in h^{\perp}$ and $x=ah+x_0$. If $x=a'h+x_0'$ is another such decomposition, then $(a-a')h=x_0'-x_0\in h^{\perp}$ and both summands are orthogonal to $h$, so $(a-a')(h\cdot h)=((a-a')h)\cdot h=0$ and $a=a'$, whence $x_0=x_0'$; orthogonality of $\mathbb R h$ and $h^{\perp}$ is the definition of the latter and $h\cdot h\ne0$. This proves (1). [F1, F3]

1.2 Negative semidefiniteness on the primitive part. Suppose $x\in h^{\perp}$ has $x\cdot x>0$. Write $x$ as a finite real combination of classes $[L_1],\dots,[L_r]$ of invertible sheaves, consider the real span $V$ of $h,[L_1],\dots,[L_r]$ and the rational span $W$ of the $[L_i]$ inside $V$; the map $p(y):=y-\frac{y\cdot h}{h\cdot h}h$ is $\mathbb R$-linear with rational coefficients on $W$, so $p(W)$ is a dense $\mathbb Q$-subspace of $p(V)=V\cap h^{\perp}$. The set $\{y\in V\cap h^{\perp}:y\cdot y>0\}$ is open in $V\cap h^{\perp}$ and nonempty because it contains $x$, hence contains some $y=p(w)\in p(W)$. Clearing denominators of the rational coefficients of $y$ produces an integer $N\ge1$ and an element $z=Ny\in\operatorname{N}^1(X)$ of the form $\sum a_i[L_i]+a_0h$ with $a_i,a_0\in\mathbb Z$, which is the class of the invertible sheaf $\bigotimes_iL_i^{\otimes a_i}\otimes H^{\otimes a_0}$; moreover $z\cdot h=N(y\cdot h)=0$ and $z\cdot z=N^2(y\cdot y)>0$. The Hodge index theorem [F2] applied to $H$ and this invertible sheaf gives $z\cdot z\le0$, a contradiction. Hence $x\cdot x\le0$ for every $x\in h^{\perp}$. [F2, F3]

2.1 The equality case. Let $x\in h^{\perp}$ satisfy $x\cdot x=0$. If $x\ne0$, nondegeneracy [F1] supplies $z$ with $z\cdot x\ne0$. Put $z':=z-\frac{z\cdot h}{h\cdot h}h\in h^{\perp}$, so $z'\cdot x=z\cdot x\ne0$. For $t\in\mathbb R$, the class $z'+tx$ lies in $h^{\perp}$ and has square $z'\cdot z'+2t(z'\cdot x)$, which is positive for $t$ of a suitable sign and sufficiently large magnitude. This contradicts step 1.2. Hence $x\cdot x=0$ forces $x=0$; the converse is immediate by bilinearity. Together with step 1.2, this proves negative definiteness. [F1, step 1.2]

3.1 The signature statement. Assume $\rho(X)=\dim_{\mathbb R}\operatorname{N}^1_{\mathbb R}(X)$ is finite. By (1) the form decomposes as the orthogonal direct sum of $\mathbb R h$, on which it is positive definite because $h\cdot h>0$, and of $h^{\perp}$, on which it is negative definite by step 2.1; the decomposition is nondegenerate with $\dim h^{\perp}=\rho(X)-1$ (if $\rho(X)=0$ the space is zero and the statement is vacuous, while $\rho(X)\ge1$ here because $h\ne0$). Hence the inertia is $(1,\rho(X)-1,0)$, the rank is $\rho(X)$ and the signature is $1-(\rho(X)-1)=2-\rho(X)$ by [F4]. The Axiom of Choice is inherited from [F5]. [F4, F5, step 1.1, step 2.1] ∎ 