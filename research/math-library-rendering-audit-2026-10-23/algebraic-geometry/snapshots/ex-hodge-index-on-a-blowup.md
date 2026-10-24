---
id: ex-hodge-index-on-a-blowup
kind: example
title: "The Hodge index theorem on a blowup of the projective plane"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - cor-negative-definiteness-of-primitive-numerical-divisors
  - def-axiom-of-choice
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-numerical-equivalence-and-neron-severi-space
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - lem-blowup-intersection-matrix-at-smooth-point
  - lem-picard-group-of-a-point-blowup-of-the-projective-plane
  - lem-total-transform-strict-plus-exceptional-multiplicity
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

Assume the Axiom of Choice. Let $k$ be a field, let $X=\mathbb P^2_k$, let
$p\in X(k)$ be a $k$-rational point, let $X'=\operatorname{Bl}_pX$ be the
blowup with exceptional curve $E$ and put
$\ell=\pi^*\mathcal O_X(1)$ as in
[[lem-picard-group-of-a-point-blowup-of-the-projective-plane]], so that
$\operatorname{Pic}(X')=\mathbb Z\ell\oplus\mathbb ZE$ with $\ell^2=1$,
$\ell\cdot E=0$, $E^2=-1$ and the strict transform $m=\ell-E$ of a line
through $p$ satisfies $m\cdot E=1$, $m^2=0$. Then:

1. The class $H:=\ell$ has $H\cdot H=1>0$, so the Hodge index theorem
   [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] applies to $H$
   even though $H$ is not ample ($H\cdot E=0$).
2. $H^{\perp}=\mathbb R E$ and $E\cdot E=-1<0$; thus the primitive part is
   negative definite of rank one, in agreement with
   [[cor-negative-definiteness-of-primitive-numerical-divisors]].
3. The intersection form on $\operatorname{N}^1_{\mathbb R}(X')$ has matrix
   $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ in the basis $(\ell,E)$, of
   signature $0$ and index $(1,1)$; the class $E$ is not numerically trivial
   because $E\cdot m=1$, so the negative direction in the Hodge index theorem
   is strict.

## Facts & Assumptions

**Given:** a field $k$, the plane $X=\mathbb P^2_k$, a $k$-rational point $p$, the blowup $X'=\operatorname{Bl}_pX$ with exceptional curve $E$, the class $\ell=\pi^*\mathcal O_X(1)$, and the strict transform $m$ of a line through $p$.

[F1] Blowup data: $X'$ is an integral smooth projective surface over $k$; $\operatorname{Pic}(X')=\mathbb Z\ell\oplus\mathbb ZE$; $\ell^2=1$, $\ell\cdot E=0$, $E^2=-1$; and the strict transform $m$ of a line through $p$ satisfies $\pi^*L=m+E$ for such a line $L$, so $m=\ell-E$ in the Picard group, $m\cdot E=1$ and $m^2=0$ by bilinearity ([[lem-picard-group-of-a-point-blowup-of-the-projective-plane]], [[lem-blowup-intersection-matrix-at-smooth-point]], [[lem-total-transform-strict-plus-exceptional-multiplicity]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-effective-cartier-divisor]]).

[F2] Numerical space and definiteness data: $\operatorname{N}^1_{\mathbb R}(X')$ is the real extension of $\operatorname{Pic}(X')$ modulo numerical equivalence; the parametrization $(a,b)\mapsto a\ell+bE$ is an isomorphism at the level of Picard groups, and the intersection form on the real space is the bilinear extension, with inertia, rank and signature as in [[def-definiteness-inertia-and-signature-data-over-the-reals]] ([[def-numerical-equivalence-and-neron-severi-space]], [[def-divisor-intersection-number-on-smooth-projective-surface]]).

[F3] Hodge index theorem and its corollary: if $H\cdot H>0$ and $L\cdot H=0$ for invertible sheaves, then $L\cdot L\le0$ with equality exactly for numerically trivial $L$; and for $H\cdot H>0$ the form is negative definite on the primitive part $h^{\perp}$ of the real Neron-Severi space ([[thm-hodge-index-theorem-for-smooth-projective-surfaces]], [[cor-negative-definiteness-of-primitive-numerical-divisors]]).



## Verification
**Given:** the data of the statement, with $\ell$, $E$, $m$ as in [F1].

1.1 Positive self-intersection of $H=\ell$. By [F1], $\ell^2=1>0$; in particular $\ell$ is not numerically trivial, since a numerically trivial class would have square $0$ by definition ([[def-numerical-equivalence-and-neron-severi-space]]). The Hodge index theorem [F3] therefore applies with $H=\ell$. The class $\ell$ is not ample: $\ell\cdot E=0$ with $E$ a nonzero effective Cartier divisor, while an ample class meets every nonzero effective divisor positively ([[lem-blowup-intersection-matrix-at-smooth-point]] for effectivity of $E$; compare [[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]]). [F1, F3]

2.1 The primitive part. Let $x=a\ell+bE$ be a real class. By bilinearity and [F1], $x\cdot H=x\cdot\ell=a(\ell\cdot\ell)+b(E\cdot\ell)=a$, so $x\cdot H=0$ if and only if $a=0$; hence $H^{\perp}=\mathbb R E$. On this line $E\cdot E=-1<0$, so the form is negative definite of rank one, in agreement with [F3]; in particular $E\cdot E=0$ does not occur and the equality case of the Hodge index theorem is not met by a nonzero class of $H^{\perp}$. [F1, F3, step 1.1]

3.1 The intersection matrix and its signature. In the basis $(\ell,E)$ of the real vector space $\operatorname{N}^1_{\mathbb R}(X')$, which spans by [F1] and is independent because pairing a relation $a\ell+bE=0$ with $\ell$ and $E$ gives $a=0$ and $-b=0$, the Gram matrix is $\begin{pmatrix}\ell\cdot\ell&\ell\cdot E\\E\cdot\ell&E\cdot E\end{pmatrix}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ by [F1]; it is nondegenerate with eigenvalues $\pm1$, hence of inertia $(1,1,0)$, index $(1,1)$ and signature $0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). The class $E$ is not numerically trivial: $m$ is an invertible sheaf class with $E\cdot m=1\ne0$ [F1], so $E$ does not pair to zero against every class. [F1, F2, step 2.1]

4.1 Conclusion. Step 1.1 gives $H\cdot H>0$ for the non-ample class $H=\ell$; step 2.1 identifies $H^{\perp}=\mathbb R E$ with negative definite form $E^2=-1$; and step 3.1 computes the matrix, signature $0$ and index $(1,1)$ and shows $E$ is numerically nontrivial, so the negative direction is strict. This verifies all three claims. [step 1.1, step 2.1, step 3.1] ∎ 