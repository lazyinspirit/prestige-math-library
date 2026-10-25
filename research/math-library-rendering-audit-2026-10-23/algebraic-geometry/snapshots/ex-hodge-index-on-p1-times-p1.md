---
id: ex-hodge-index-on-p1-times-p1
kind: example
title: "The Hodge index theorem on a product of projective lines"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - cor-negative-definiteness-of-primitive-numerical-divisors
  - def-axiom-of-choice
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-invertible-sheaf
  - def-numerical-equivalence-and-neron-severi-space
  - lem-picard-group-and-intersection-form-of-p1-times-p1
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
---

## Example

Assume the Axiom of Choice. Let $k$ be a field and let
$X=\mathbb P^1_k\times_{\operatorname{Spec}k}\mathbb P^1_k$ with ruling
classes $\ell,m$ as in
[[lem-picard-group-and-intersection-form-of-p1-times-p1]], so that
$\operatorname{Pic}(X)=\mathbb Z\ell\oplus\mathbb Zm$, $\ell^2=m^2=0$ and
$\ell\cdot m=1$. Then:

1. The class $H:=\ell+m$ satisfies $H\cdot H=2>0$, so the Hodge index theorem
   [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] applies to $H$.
2. $H^{\perp}=\mathbb R(\ell-m)$ inside $\operatorname{N}^1_{\mathbb R}(X)$
   and $(\ell-m)^2=-2<0$; the primitive part is negative definite of rank one,
   in agreement with
   [[cor-negative-definiteness-of-primitive-numerical-divisors]].
3. The intersection form on $\operatorname{N}^1_{\mathbb R}(X)$ has matrix
   $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the basis $(\ell,m)$; it is
   nondegenerate of signature $0$ and index $(1,1)$, so it is not negative
   definite on the whole space. In particular the equality case in the Hodge
   index theorem is visible here: $(\ell-m)\cdot H=0$ and
   $(\ell-m)^2=-2<0$, while no nonzero class orthogonal to $H$ has square
   zero.

## Facts & Assumptions

**Given:** a field $k$, the surface $X=\mathbb P^1_k\times_k\mathbb P^1_k$, its ruling classes $\ell,m$, and the class $H=\ell+m$.

[F1] By the structure and Picard computation for the product of two projective lines, $X$ is an integral smooth projective surface over $k$, $\operatorname{Pic}(X)=\mathbb Z\ell\oplus\mathbb Zm$, and the intersection form is given by $\ell\cdot\ell=m\cdot m=0$, $\ell\cdot m=1$; the intersection product is symmetric and $\mathbb Z$-bilinear ([[lem-picard-group-and-intersection-form-of-p1-times-p1]], [[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-invertible-sheaf]]).

[F2] Numerical space and definiteness data: the real Neron-Severi space is the extension of scalars of $\operatorname{Pic}(X)$ modulo numerical equivalence, with the bilinear extension of the intersection form and the inertia, rank and signature conventions of [[def-definiteness-inertia-and-signature-data-over-the-reals]] ([[def-numerical-equivalence-and-neron-severi-space]]).

[F3] Hodge index theorem and its corollary: for invertible sheaves with $H\cdot H>0$ and $L\cdot H=0$ one has $L\cdot L\le0$, with equality exactly for numerically trivial $L$; the form is negative definite on the primitive part $h^{\perp}$ for $h=[H]$ with $h\cdot h>0$ ([[thm-hodge-index-theorem-for-smooth-projective-surfaces]], [[cor-negative-definiteness-of-primitive-numerical-divisors]]).



## Verification
**Given:** the surface $X$, its ruling classes $\ell,m$, and $H=\ell+m$.

1.1 Positive self-intersection. By bilinearity and [F1], $H\cdot H=(\ell+m)\cdot(\ell+m)=\ell\cdot\ell+2(\ell\cdot m)+m\cdot m=0+2+0=2>0$; hence $H$ is not numerically trivial and the Hodge index theorem [F3] applies to $H$. [F1, F3]

2.1 The primitive part. Let $x=a\ell+bm$ be a real class. By [F1], $x\cdot H=x\cdot(\ell+m)=a(m\cdot\ell)+b(\ell\cdot m)=a+b$, so $x\cdot H=0$ if and only if $b=-a$, that is $x\in\mathbb R(\ell-m)$. Hence $H^{\perp}=\mathbb R(\ell-m)$, and $(\ell-m)^2=\ell\cdot\ell-2(\ell\cdot m)+m\cdot m=-2<0$ by [F1]; the primitive part is therefore negative definite of rank one, in agreement with [F3]. For $t\ne0$ the class $t(\ell-m)$ has square $-2t^2\ne0$, so no nonzero class orthogonal to $H$ has square zero. [F1, F3, step 1.1]

3.1 The intersection matrix and its signature. The classes $\ell,m$ form a basis of the real Neron-Severi space, since they span by the Picard computation [F1], and pairing a relation $a\ell+bm=0$ with $\ell$ and $m$ gives $b=0$ and $a=0$ by the intersection matrix [F1]; in this basis the Gram matrix of the intersection form is $\begin{pmatrix}\ell\cdot\ell&\ell\cdot m\\m\cdot\ell&m\cdot m\end{pmatrix}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which is nondegenerate with eigenvalues $\pm1$, hence of inertia $(1,1,0)$, index $(1,1)$ and signature $0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). In particular the form is not negative definite on the whole space. [F1, F2, step 2.1]

4.1 Conclusion. Step 1.1 gives $H\cdot H=2>0$; step 2.1 computes $H^{\perp}=\mathbb R(\ell-m)$ with $(\ell-m)^2=-2<0$ and shows no nonzero orthogonal class has square zero; step 3.1 computes the matrix and its signature and index. This verifies all three claims. [step 1.1, step 2.1, step 3.1] ∎ 