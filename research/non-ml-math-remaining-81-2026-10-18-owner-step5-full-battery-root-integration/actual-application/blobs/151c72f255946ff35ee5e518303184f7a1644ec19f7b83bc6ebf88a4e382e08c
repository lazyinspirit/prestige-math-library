---
id: lem-locality-determines-formal-ope-coefficients
kind: lemma
title: Locality determines the formal OPE coefficients
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-formal-distribution-on-a-vector-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§1.4 and 3.2
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.2–2.3
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Statement

Let $A(z),B(w)$ be mutually local fields on a complex vector space $V$, with locality order $N\ge0$. Put $C(z,w)=[A(z),B(w)]$ and, for $0\le j<N$, define
$$C_j(w)=\operatorname{Res}_z\bigl((z-w)^jC(z,w)\bigr).$$
Then
$$[A(z),B(w)]=\sum_{j=0}^{N-1}C_j(w)\frac{\partial_w^j\delta(z,w)}{j!},$$
and the coefficients are unique. We use the formal OPE shorthand
$$A(z)B(w)\sim\sum_{j=0}^{N-1}\frac{C_j(w)}{(z-w)^{j+1}},$$
to record these coefficients: its precise meaning is the commutator expansion above, equivalently the difference of the prescribed expansions $\iota_{z,w}(z-w)^{-j-1}$ and $\iota_{w,z}(z-w)^{-j-1}$. No analytic convergence is implied. For all integers $m,n$ the modes satisfy
$$[A_{(m)},B_{(n)}]=\sum_{j=0}^{N-1}\binom mj(C_j)_{(m+n-j)}.$$
Here the binomial coefficient is the generalized integer binomial from [[def-formal-distribution-on-a-vector-space]]. If $N=0$, the sums are empty and the commutator is zero.

## Facts & Assumptions

**Given:** The complex vector space, fields $A,B$, and locality order $N$.

[F1] [[def-formal-distribution-on-a-vector-space]]: formal distributions are coefficient families; $\operatorname{Res}_z$ extracts the $z^{-1}$ coefficient; $\delta(z,w)=\sum_{r\in\mathbb Z}z^{-r-1}w^r$; and $\iota_{z,w},\iota_{w,z}$ are the two specified binomial expansions.

## Proof

1.1 Set $\delta(z,w)=\sum_{r\in\mathbb Z}z^{-r-1}w^r$. Comparing coefficients gives $(z-w)\delta=0$. Differentiating this identity $j$ times in $w$ gives $(z-w)\partial_w^j\delta=j\partial_w^{j-1}\delta$ for $j\ge1$. Also, direct residue extraction gives $\operatorname{Res}_z((z-w)^r\partial_w^j\delta(z,w)/j!)=1$ if $r=j$ and $0$ otherwise for $r,j\ge0$: repeated use of the differentiated identity reduces $r<j$ to a positive derivative of $\operatorname{Res}_z\delta=1$, and $r>j$ to a positive power of $(z-w)$ times $\delta$. [F1, algebra]

2.1 If $N=0$, locality says $C=0$. If $N=1$, writing $C=\sum_{p,q}c_{p,q}z^{-p-1}w^{-q-1}$, the equation $(z-w)C=0$ gives $c_{p+1,q}=c_{p,q+1}$. Hence $c_{p,q}$ depends only on $p+q$, so $C=(\operatorname{Res}_z C)\delta$. This is the required expansion for order one. [given, F1, step 1.1]

2.2 Assume $N\ge2$ and that the expansion is proved for order $N-1$. Since $(z-w)^{N-1}((z-w)C)=0$, write $(z-w)C=\sum_{j=0}^{N-2}d_j(w)\partial_w^j\delta/j!$ by induction. The identity in step 1.1 shows that
$$C-\sum_{j=0}^{N-2}d_j(w)\frac{\partial_w^{j+1}\delta}{(j+1)!}$$
is killed by $z-w$, hence is a multiple $d_0'(w)\delta$ by step 2.1. This gives a finite delta-derivative expansion for $C$. Taking residues after multiplying by $(z-w)^r$ and using the residue calculation in step 1.1 identifies its $r$th coefficient as $\operatorname{Res}_z((z-w)^rC)$ and proves uniqueness. [given, step 1.1, step 2.1, algebra]

3.1 The geometric-series identity $\delta=i_{z,w}(z-w)^{-1}-i_{w,z}(z-w)^{-1}$ follows by writing the first expansion in nonnegative powers of $w/z$ and the second in nonnegative powers of $z/w$. Differentiating $j$ times gives $\partial_w^j\delta/j!=i_{z,w}(z-w)^{-j-1}-i_{w,z}(z-w)^{-j-1}$. Substitution in step 2.2 yields the stated singular OPE coefficients and fixes both expansion conventions. [F1, step 2.2, algebra]

4.1 Since $\operatorname{Res}_z(z^m\delta(z,w))=w^m$, differentiation gives $\operatorname{Res}_z(z^m\partial_w^j\delta/j!)=\binom mj w^{m-j}$ for every integer $m$. Apply $\operatorname{Res}_z z^m\operatorname{Res}_w w^n$ to step 2.2. The result is $[A_{(m)},B_{(n)}]=\sum_{j=0}^{N-1}\binom mj(C_j)_{(m+n-j)}$. The sum is finite; the $N=0$ case was handled in step 2.1. [F1, step 2.1, step 2.2, algebra] ∎
