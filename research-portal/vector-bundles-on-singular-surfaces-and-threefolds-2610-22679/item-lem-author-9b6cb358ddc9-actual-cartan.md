---
title: Actual perfect Cartan through degree three on all qcqs field-schemes
status: published
research_item: lem-author-9b6cb358ddc9-actual-cartan
dependency_level: 21
---

PDF p. 14: Lemma6.4; scheme conventions p3

## Prerequisites

- [lem-author-9b6cb358ddc9-local-chains](item-lem-author-9b6cb358ddc9-local-chains)
- [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. For every qcqs field-scheme $X$, the actual perfect K-space Chern operations satisfy coefficientwise Cartan through degree three as derived sheaf-map identities. In particular, for $x,y\in K_0^{\rm Perf}(X)$,
$$c_j(x+y)=\sum_{a+b=j}c_a(x)c_b(y)\quad(1\leq j\leq3),\qquad c_0=1.$$
Their constant terms are one and their positive coefficients vanish on zero. Formal inversion is valid through this degree. The same argument proves every fixed finite degree, without asserting a stronger unspecified coherent total-series map.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. Choice and the fixed size bounds are inherited from the projective-bundle, actual-model, Whitney, universal-operation and local-chain premises in [F1]–[F3]. They are used when invoking those constructions in steps 1.1–4.1, in particular for the actual negative coefficients and bounded-weight stabilization in step 2.1.

[F1] [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) supplies the actual non-A¹ EM ring spectrum over every qcqs base $X$. [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input) applies over any qcqs derived base and supplies actual Grass/Vect detection, also on products.

[F2] [prop-chern-whitney-identities](item-prop-chern-whitney-identities) supplies actual bundle Whitney on all qcqs field-schemes. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) constructs the specified perfect K-space operations from those actual universal bundle classes. [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) supplies its projective-bundle contract under [A1], with its stated zero extension of negative motivic weights. [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients) supplies vanishing of the actual represented model coefficients in negative weights in every cohomological degree, as required in step 2.1. Both suppliers retain their Choice and size assumptions.

[F3] [lem-author-9b6cb358ddc9-local-chains](item-lem-author-9b6cb358ddc9-local-chains) supplies detection on the present site without dimension assumptions.

## Proof
**Given:** $X$ qcqs over a field, the specified actual operations, Choice and the stated size bounds [A1].

**Goal:** Prove the map identity in its full qcqs scope, rather than strengthen the earlier finite-dimensional lemma silently.

1.1 Fix $j\leq3$. Form the Cartan-difference map from $\mathcal K\times\mathcal K$ to $A_j$. Its restriction to $\mathrm{Vect}_n\times\mathrm{Vect}_m$ vanishes on every pair of finite Grassmannian approximations by actual bundle Whitney [F2]. These approximations are smooth qcqs over $X$; no finite-type hypothesis on $X/k$ is needed. The actual universal coordinate comparison in [F1] detects this vanishing on the product stacks. [A1, F1, F2]

2.1 Stabilize in both ranks. A monomial of total Chern weight $w>j$ has coefficient in negative weight $j-w$, zero in every cohomological degree by [F2]. Thus the mapping-space $\pi_0$ and $\pi_1$ systems stabilize once both ranks are at least $j$. The inverse-limit sequence has zero $\lim^1\pi_1$, and the vanishing passes to $BGL\times BGL$ without phantom terms. This is the precise bounded-weight consequence of [F1], not an assumed finitarity of motivic cohomology. [A1, F1, F2, step 1.1]

3.1 The actual class maps ignore trivial rank and the free-class comparison matches addition with block sum. Hence the difference pulls back to zero along $j\times j$. Apply [F3] to obtain zero as a derived sheaf-map class. Evaluating on $X$ gives the formula on every perfect class, irrespective of global bundle representability. [A1, F2, F3, step 2.1]

4.1 Pointedness gives $c_j(0)=0$ for $j>0$. All diagonal first degrees are even, so the target coefficient ring is commutative; truncated series with constant term one have unique recursive inverses. Apply Cartan to $x+(-x)=0$ to obtain formal inversion. The same proof works for each fixed finite $j$, but no claim about a separately chosen E∞ total-series enhancement is required. [A1, F2, step 3.1] ∎
