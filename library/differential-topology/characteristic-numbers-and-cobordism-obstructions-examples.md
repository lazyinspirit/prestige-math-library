---
page: characteristic-numbers-and-cobordism-obstructions-examples
title: Characteristic Numbers and Cobordism Obstructions — Examples
status: draft
items: []
examples: [ex-stiefel-whitney-number-of-real-projective-space,
            ex-pontryagin-numbers-of-complex-projective-two-space,
            ex-characteristic-numbers-of-a-product,
            ex-orientation-reversal-negates-pontryagin-numbers]
---

The examples compute the invariants of the companion page on the smallest
families where every number can be written down. Real projective space is the
unoriented test case: the tangent class is $(1+x)^{n+1}$, so its
Stiefel-Whitney numbers are products of binomial coefficients mod two, the top
number is $n+1$ mod two, every even-dimensional projective space is not
null-cobordant, and for $n=2^s-1$ with $s\ge1$ all numbers vanish, consistent with those
manifolds bounding in the small cases.

The complex projective plane supplies the four-dimensional normalization: its
tangent Pontryagin class is $1+3x^2$, its unique Pontryagin number is
$p_1[\mathbb{CP}^2]=3$, and the nonzero value rules out oriented
null-cobordism, so the class is nonzero in rational oriented bordism without
any classification of that group. Reversing the orientation of
$\mathbb{CP}^2$ keeps the tangent Pontryagin class but negates the fundamental
class, so the number changes sign and the two orientations are distinguished,
while the underlying unoriented Stiefel-Whitney numbers are unchanged.

The example in degree eight evaluates the product formula on $\mathbb{CP}^4$ and
$\mathbb{CP}^2\times\mathbb{CP}^2$, giving the two-by-two matrix of $p_1^2$ and
$p_2$ with determinant $45\ne0$; the nonsingularity is the concrete form of the
Newton comparison on the companion page, and it shows that the two classes are
separated by their Pontryagin numbers.
