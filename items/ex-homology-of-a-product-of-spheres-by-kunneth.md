---
id: ex-homology-of-a-product-of-spheres-by-kunneth
kind: example
title: Homology of a product of spheres by Kunneth
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-kunneth-short-exact-sequence-for-homology, cor-homology-of-spheres, def-axiom-of-choice, def-balanced-tor-bifunctor, thm-free-modules-are-projective-with-choice-boundary, def-singular-chain-cross-product-on-generators]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, Theorem25.15 and product calculations, printed pages66–67
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Example

Assume AC. For $m,n\ge1$, integral homology of $S^m\times S^n$ is free on a point class, the two factor sphere classes, and their cross product, in degrees $0,m,n,m+n$ respectively. When $m=n$ the middle group has rank two. All other groups vanish.

## Facts & Assumptions

[F1] [[cor-homology-of-spheres]] gives integral homology $\mathbb Z$ in degrees zero and the positive sphere dimension, and zero otherwise; it separately gives $H_0(S^0)=\mathbb Z^2$.

[F2] [[thm-topological-kunneth-short-exact-sequence-for-homology]] identifies the left map as the singular cross product. Its degree-zero-factor formula is [[def-singular-chain-cross-product-on-generators]].

[F3] [[def-balanced-tor-bifunctor]] computes Tor from a supplied projective resolution. Under [[def-axiom-of-choice]], free modules are projective by [[thm-free-modules-are-projective-with-choice-boundary]]; the AC/DC convention is already established for the Tor terms in [F2].

## Proof

**Given:** $m,n\ge1$, with chosen sphere generators $u\in H_m(S^m)$ and $v\in H_n(S^n)$ and chosen point classes $a\in H_0(S^m)$, $b\in H_0(S^n)$. Assume AC.

1.1 The only nonzero homology modules of either factor are copies of $\mathbb Z$ by [F1]. A copy of $\mathbb Z$ has the projective resolution consisting of itself in degree zero, augmented by identity; tensoring it with any module has no degree-one homology. The zero module likewise has the zero resolution. Therefore every Tor term of [F2] is zero by [F3]. The cross product is consequently an isomorphism from the tensor diagonal in every degree. [F1, F2, F3, given]

2.1 The four nonzero tensor pairs are $(0,0),(m,0),(0,n),(m,n)$, each a copy of $\mathbb Z$ since the multiplication map $\mathbb Z\otimes\mathbb Z\to\mathbb Z$ is inverse to $r\mapsto r\otimes1$. Their generators are $a\otimes b,u\otimes b,a\otimes v,u\otimes v$ and their images are $a\times b,u\times b,a\times v,u\times v$. The first is the product point class. By the shuffle formula with a zero-degree point factor in [F2], the middle two are the images of the sphere generators under the inclusions into the product with the other coordinate fixed. The last is their actual singular cross product in top degree. [F1, F2, step 1.1]

3.1 If $m\ne n$, the degrees $0,m,n,m+n$ are distinct, so each indicated group has rank one. If $m=n=d$, the pairs $(d,0)$ and $(0,d)$ are distinct summands of the same degree diagonal; their images remain independent under the isomorphism of step 1.1. Thus $H_d=\mathbb Z^2$, $H_0=H_{2d}=\mathbb Z$, and all other groups vanish. This includes $S^1\times S^1$, with ranks $1,2,1$ in degrees zero through two. [step 1.1, step 2.1]

4.1 The restriction $m,n\ge1$ prevents using the wrong degree-zero sphere group. If one instead takes $m=0<n$, [F1] gives two copies of $\mathbb Z$ in degree zero for the first factor; the same tensor calculation gives rank two in degrees zero and $n$, and zero elsewhere. If both are zero, the product has four points and $H_0=\mathbb Z^4$. These are separate boundary cases, not substitutions into the four positive-dimensional generator labels. Changing a chosen orientation negates the corresponding generator and cross product but not these groups. AC is inherited from [F2]; the finite tensor and free-resolution calculations add none. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
