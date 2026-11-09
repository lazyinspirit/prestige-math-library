---
title: Relative cofibers and quotient complexes
status: published
research_item: lem-author-9415fc97ee80-relative-cone-quotient-model
dependency_level: 0
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

## Statement
For a cochain map $f:A\to B$, use cohomological shifts $A[s]^n=A^{n+s}$, $d_{A[s]}=(-1)^sd_A$, and put
$$Q_f^n=B^n\oplus A^{n+1},\qquad d(b,a)=(d_Bb+f(a),-d_Aa).$$
This is the cone of $f$, giving the relative cofiber triangle $A\xrightarrow f B\to Q_f\to A[1]$ in the derived category. If $f$ is termwise injective, projection $(b,a)\mapsto[b]$ gives a quasi-isomorphism $Q_f\to B/f(A)$. Consequently the quotient-complex model for a relative motive is justified whenever an actual termwise monomorphic complex model of its open-inclusion map has separately been supplied; no such monomorphism is asserted for an arbitrary map of motives.

## Facts & Assumptions

**Given:** Complexes of abelian groups and a cochain map $f$, with termwise injectivity only for the quotient conclusion. The same argument applies to complexes in an abelian category.

**Goal:** Establish the cone differential and the exact condition allowing its replacement by a quotient.

[F1] The cochain cone and shift conventions, and the cone triangle in the derived category, are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). A quasi-isomorphism induces isomorphisms on every cohomology group.

## Proof

1.1 Applying the displayed differential twice gives first coordinate $d_B^2b+d_Bf(a)-fd_Aa=0$ and second coordinate $d_A^2a=0$. Thus it is a cochain complex. Its form is exactly the cone in [F1], so the displayed relative triangle is its cone triangle. [F1, given, algebra]

2.1 Assume $f$ termwise injective. The projection to $B/f(A)$ is a surjective cochain map because $d[b]=[d_Bb]$. Its kernel identifies with $A^n\oplus A^{n+1}$ via $(a_0,a_1)\mapsto(fa_0,a_1)$, and its differential in these coordinates is $(a_0,a_1)\mapsto(d_Aa_0+a_1,-d_Aa_1)$. [step 1.1, given, construct]

3.1 The map $h(a_0,a_1)=(0,a_0)$ has degree $-1$ on this kernel. One computes $dh(a_0,a_1)=(a_0,-d_Aa_0)$ and $hd(a_0,a_1)=(0,d_Aa_0+a_1)$, so $dh+hd=\operatorname{id}$. Thus the kernel is contractible and has zero cohomology. The short exact sequence of this kernel, $Q_f$ and the quotient gives that projection induces isomorphisms on cohomology. It is the asserted quasi-isomorphism, under precisely the stated injectivity hypothesis. [step 2.1, algebra] ∎
