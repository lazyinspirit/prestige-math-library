---
title: Purity twists and cohomological shifts with explicit premises
status: published
research_item: lem-author-9415fc97ee80-purity-shift-index
dependency_level: 0
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

## Statement
Let $\mathcal T$ be a triangulated category, let $A(c)$ be a specified twist of an object $A$, and let $E_j$ be coefficient objects for specified weights. Fix $c\geq0$. Suppose, in the weights being used, there is a supplied natural identification
$$\operatorname{Hom}_{\mathcal T}(A(c),E_j[n])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[n])$$
for every integer $n$. Then
$$\operatorname{Hom}_{\mathcal T}(A(c)[2c],E_j[a])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[a-2c]).$$
If the analogous identification is supplied for derived mapping complexes in a stable enhancement, then
$$R\operatorname{Hom}(A(c)[2c],E_j)\simeq R\operatorname{Hom}(A,E_{j-c})[-2c],$$
and its degree-$a$ cohomology is $H^{a-2c}R\operatorname{Hom}(A,E_{j-c})$. No cancellation, invertibility of twists, or definition of negative-weight coefficients is inferred without that supplied identification. In particular the indexing rule applies only within its stated weight range.

## Facts & Assumptions

**Given:** The objects, integer indices, and the displayed Hom identification; the enhanced version is additionally assumed only for the mapping-complex assertion.

**Goal:** Compute the shift without concealing the required twist comparison.

[F1] The cochain convention is $C[s]^n=C^{n+s}$ and $H^a(C[s])=H^{a+s}(C)$. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F2] Shift is an autoequivalence, so $\operatorname{Hom}(V[s],W[a])\cong\operatorname{Hom}(V,W[a-s])$ by shifting both source and target by $-s$. The same rule in mapping complexes gives a shift $[-s]$ when the source is shifted by $s$.

## Proof

1.1 Set $s=2c$ in [F2]. It gives $\operatorname{Hom}(A(c)[2c],E_j[a])\cong\operatorname{Hom}(A(c),E_j[a-2c])$. Now apply the assumed twist identification with $n=a-2c$, obtaining exactly the displayed group on $A$ and weight $j-c$. [F2, given]

2.1 If the enhanced twist comparison is supplied, first use the mapping-complex version of [F2], then that comparison, to identify the mapping complex with $R\operatorname{Hom}(A,E_{j-c})[-2c]$. By [F1], its degree-$a$ cohomology is the degree-$a-2c$ group of the unshifted complex. [F1, F2, given, step 1.1]

3.1 Both computations explicitly used a premise containing $E_{j-c}$. They establish neither the existence of that object in a weight outside the given coefficient system nor a twist-adjunction theorem. Thus the conclusions retain precisely the supplied weight bounds and no additional purity assertion has entered their proof. [given, step 1.1, step 2.1] ∎
