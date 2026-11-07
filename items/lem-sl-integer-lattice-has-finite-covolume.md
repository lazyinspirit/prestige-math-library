---
dependency_level: 0
id: lem-sl-integer-lattice-has-finite-covolume
kind: lemma
title: "Finite covolume of the integer special linear group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-bezout-identity
  - thm-gram-schmidt-orthonormalisation
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-linear-change-of-variables-for-lebesgue-measure
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
sources:
  references:
    - title: "Dave Witte Morris, Introduction to Arithmetic Groups, §§7.1–7.3; local proof includes the finite-volume integral left as Exercise7.2#14 in that text"
      url: "https://arxiv.org/pdf/math/0106063"
---

## Statement

Assume the Axiom of Countable Choice. For every integer $d\ge2$, the subgroup $\Gamma=\mathrm{SL}_d(\mathbb Z)$ of $G=\mathrm{SL}_d(\mathbb R)$ is discrete, and $G/\Gamma$ admits a finite, nonzero $G$-invariant smooth quotient measure. In particular the left translation action of $G$ on $L^2(G/\Gamma)$ is a strongly continuous unitary representation, and the null sets of the quotient measure lift exactly to Haar-null sets in $G$.

## Statement references

[Dave Witte Morris, Introduction to Arithmetic Groups, §§7.1–7.3](https://arxiv.org/pdf/math/0106063)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge2$, and the real and integer special linear matrix groups.

[A1] Countable Choice supports product Lebesgue integration and countable chart constructions. Change of variables applies to smooth coordinate diffeomorphisms and linear maps. ([[def-countable-choice]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F1] Bézout's identity permits reduction of an integer coordinate vector to its coordinate gcd by determinant-one two-coordinate operations. Gram–Schmidt gives an orthogonal basis from a linearly independent real tuple. ([[thm-bezout-identity]], [[thm-gram-schmidt-orthonormalisation]])

## Proof

1.1 Integer matrices form a discrete closed subset of the Euclidean matrix space, so $\Gamma$ is discrete. If $B$ is an invertible real matrix, bounded subsets meet $B\mathbb Z^d$ in finitely many points: the coordinates of $B^{-1}v$ are bounded integers. Consequently every nonempty set of nonzero vectors of this lattice has a vector of shortest Euclidean length, by restricting to the finite set with norm at most that of any one specified vector. A shortest vector is primitive in integer coordinates, since otherwise division by their gcd shortens it. [given, algebra]

1.2 We compute the smooth invariant volume rather than assuming a covolume formula. On the tangent space of $G$ use the traceless entries of $g^{-1}dg$; their top exterior product defines a left invariant positive density. It is also right invariant: conjugation by $g$ has determinant one on all matrices, since left and right multiplication have determinants $(\det g)^d$ and $(\det g^{-1})^d$; conjugation fixes the scalar matrices and preserves the complementary traceless matrices, so its determinant there is one. In the unique Gram–Schmidt coordinates $g=kau$, this density is a constant multiple of $dk\,du\,\prod_{i=1}^{d-1}d\log d_i\,\prod_{i<j}(d_i/d_j)$. Here is the Jacobian: conjugate the Maurer form by $u$, an operation of determinant one on traceless matrices. It becomes $a^{-1}(k^{-1}dk)a+a^{-1}da+du\,u^{-1}$. For each lower position $i>j$, only the skew form from $k$ contributes, with factor $d_j/d_i$. Their product is $\prod_{i<j}d_i/d_j$. The diagonal slots give the $d-1$ independent logarithmic coordinates. After these are removed, the upper slots of $du\,u^{-1}$ give the entries $du_{ij}$ by a triangular substitution of determinant one. This proves the density formula. The volume $dk$ of the compact orthogonal group is finite, as follows from finitely many smooth coordinate neighborhoods. [given, A1, F1, algebra]

2.1 A primitive integer vector extends to an integer basis of determinant one. To see this explicitly, replace a pair of coordinates $(a,b)$, with $g=\gcd(a,b)>0$, by $(g,0)$ using the determinant-one matrix with rows $(u,v)$ and $(-b/g,a/g)$ where $ua+vb=g$. Zero pairs are skipped; a nonzero coordinate can be moved to the first position by the signed swap $(a,b)\mapsto(b,-a)$. Repeating reduces the vector to $(1,0,\ldots,0)$, after a sign change by a determinant-one signed swap if necessary. Inverting the product of these operations supplies the claimed basis. Thus, after selecting a shortest vector $b_1$ of a lattice, its orthogonal projection along $b_1$ is a full lattice in $b_1^\perp$: extend $b_1$ to an integer basis, and the other projected basis vectors are a real basis of the perpendicular space. Repeat this argument there. Induction gives a lattice basis $b_1,\ldots,b_d$ such that at every stage its next orthogonal projection is a shortest nonzero vector of the projected lattice. [step 1.1, F1, algebra, construct]

3.1 Write its Gram–Schmidt form as $b_j=\sum_{i\le j}d_i u_{ij}k_i$, with orthonormal $k_i$, $d_i>0$ and $u_{jj}=1$. Successively subtract integer multiples of earlier $b_i$ from $b_j$, in decreasing order of $i<j$, to arrange $|u_{ij}|\le1/2$. These operations leave the projected shortest-vector property unchanged. In the projection perpendicular to $b_1,\ldots,b_{i-1}$, the vector obtained from $b_{i+1}$ after this reduction has squared norm $u_{i,i+1}^2d_i^2+d_{i+1}^2$. It is a nonzero projected lattice vector, so this is at least $d_i^2$. Hence $d_{i+1}\ge\sqrt3\,d_i/2$. If the original lattice is $g\mathbb Z^d$ with $g\in G$, orient the basis positively by reversing the last vector when needed. Its change-of-basis matrix is then in $\Gamma$, $\prod_i d_i=1$, and the orthogonal matrix $k=(k_1,\ldots,k_d)$ belongs to $\mathrm{SO}(d)$. Therefore $G=S\Gamma$, where $S$ consists of $kau$ with $k\in\mathrm{SO}(d)$, $a=\operatorname{diag}(d_i)>0$, $\prod_i d_i=1$, $d_i/d_{i+1}\le2/\sqrt3$, and upper unitriangular $u$ with $|u_{ij}|\le1/2$. [step 2.1, F1, algebra]

4.1 Set $r_i=d_i/d_{i+1}$, $1\le i<d$. Their logarithms are invertible linear coordinates on $\sum_i\log d_i=0$, so the diagonal coordinate change has a fixed nonzero Jacobian. Also $\prod_{i<j}d_i/d_j=\prod_{i=1}^{d-1}r_i^{i(d-i)}$. Thus the volume of $S$ is bounded by a constant times $\prod_{i=1}^{d-1}\int_0^{2/\sqrt3}r_i^{i(d-i)}\,dr_i/r_i$, which is finite because every exponent $i(d-i)$ is positive. The bounded unitriangular box has finite volume by [A1]. [step 3.1, step 1.2, A1, algebra]

5.1 Right translation by $\Gamma$ acts freely and properly on $G$: for compact $K,L$, a translate $K\gamma$ meeting $L$ has $\gamma\in K^{-1}L\cap\Gamma$, a finite set. Small coordinate neighborhoods therefore project injectively to $G/\Gamma$; right invariance of the density in step 1.2 makes their transported smooth measures agree on overlaps. A countable collection of these charts covers the quotient, since $G$ has a countable Euclidean base. They define an invariant smooth measure; countably many charts and countably many $\gamma$ show that a quotient set is null exactly when its full lift is null. Its measure is positive on every nonempty chart. It is finite because $S$ surjects onto the quotient: partition $S$ into countably many disjoint measurable pieces on each of which the projection is injective, using the first available chart in a countable covering of $G$. Countable additivity gives $|G/\Gamma|\le|S|<\infty$. [step 1.1, step 3.1, step 1.2, step 4.1, A1, algebra]

6.1 The quotient action preserves this measure, hence its pullback on $L^2$ is unitary. For a compactly supported continuous function, translates converge in $L^2$ as $g\to e$, by uniform continuity on a compact neighborhood of its support. Such functions are dense: exhaust the countably many coordinate neighborhoods by compact subsets; regularity of Euclidean measure with a positive smooth density first approximates indicators by compact-inside-open sets, and elementary continuous cutoffs in those charts approximate the indicators in $L^2$. Finite sums and finite chart subcovers give the claimed density on the quotient. Unitarity then extends translation continuity to every $L^2$ function by the triangle inequality. These constructions use only countable chart exhaustions and [A1]. This proves all assertions. [step 5.1, A1, algebra] ∎
