---
id: def-chern-character-of-a-complex-vector-bundle
kind: definition
title: Chern character of a complex vector bundle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-complex-splitting-principle-with-integral-injective-pullback", "thm-fundamental-theorem-of-symmetric-polynomials", "lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension", "def-chern-classes-from-the-projective-bundle-relation", "def-complex-flag-bundle-and-chern-roots", "def-axiom-of-choice", "thm-naturality-normalization-and-whitney-sum-for-chern-classes", "thm-leray-hirsch-module-isomorphism", "lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator", "def-schubert-cells-in-real-and-complex-grassmannians", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-singular-cup-product-on-cochains"]
axiom_strength: "ZF + AC; inherited from the splitting principle."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The Chern character by Newton polynomials, printed pp.109-111"
    - title: "Milnor and Stasheff, Characteristic Classes, Problem 16-B"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Chern character formulas, printed pp.197-199"
---

## Definition

Assume AC. Let $E\to X$ be a numerable complex vector bundle over a finite CW
complex $X$. Write $X=\bigsqcup_\alpha X_\alpha$ for its finitely many path
components and $n_\alpha$ for the constant rank of $E|_{X_\alpha}$. On a
component of positive rank, let $c_i(E|_{X_\alpha})$ and the Chern roots
$t_1,\dots,t_{n_\alpha}$ have the meanings fixed by
[[def-chern-classes-from-the-projective-bundle-relation]] and
[[def-complex-flag-bundle-and-chern-roots]]. On a rank-zero component all
positive Chern classes and all positive-degree Chern-character components are
defined to be zero.

For each $n\geq1$ and $k\geq0$ let $N_{n,k}$ be the Newton polynomial
expressing the $k$-th power sum in $n$ variables: the unique polynomial with
$$N_{n,k}(e_1(x),\dots,e_n(x))=\sum_{i=1}^nx_i^k$$
for all $x_1,\dots,x_n$, which exists by
[[thm-fundamental-theorem-of-symmetric-polynomials]] applied to the symmetric
polynomial $\sum_ix_i^k$. Here and below integral Chern classes and roots are sent to rational
cohomology by the coefficient map $\mathbb Z\to\mathbb Q$ before evaluating
a rational expression. Give the $i$-th polynomial variable weight $i$.
The uniqueness in the symmetric-polynomial theorem shows that $N_{n,k}$
is weighted homogeneous of weight $k$: decompose it by weight and substitute
the homogeneous elementary symmetric polynomials; injectivity of that
substitution forces every weight other than $k$ to vanish.
On a positive-rank component define
$$\operatorname{ch}_k(E)|_{X_\alpha}:= \tfrac1{k!}\,N_{n_\alpha,k}\bigl(c_1(E|_{X_\alpha}),\dots, c_{n_\alpha}(E|_{X_\alpha})\bigr).$$
On a rank-zero component define every $\operatorname{ch}_k$ to be zero.
These componentwise classes determine an element of $H^{2k}(X;\mathbb Q)$.
The **Chern character** is
$$\operatorname{ch}(E):=\sum_{k\geq0}\operatorname{ch}_k(E)\in H^{\mathrm{even}}(X;\mathbb Q).$$

The polynomial definition is intrinsic to the Chern classes. The following
argument justifies its equivalent description by roots, including uniqueness
in rational cohomology.

On a positive-rank component write $q:Y\to X_\alpha$ for its flag bundle.
It has CW homotopy type and $q^*E=\bigoplus_iL_i$ by
[[def-complex-flag-bundle-and-chern-roots]] and
[[thm-complex-splitting-principle-with-integral-injective-pullback]].
Choose a homotopy equivalence $h:W\to Y$ from a path-connected CW complex.
The pulled-back line bundles and their sum are numerable. Apply Chern
naturality, normalization and Whitney sum on the actual CW base $W$, using
[[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], to obtain
$(qh)^*c_i(E)=e_i(c_1(h^*L_1),\ldots,c_1(h^*L_n))$.
Line normalization and Euler naturality
[[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]
identify $c_1(h^*L_j)=h^*t_j$. Since $h^*$ is an isomorphism by
[[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]], this proves
$q^*c_i(E)=e_i(t_1,\ldots,t_n)$ integrally on $Y$.

Here is a direct proof that $q^*$ is injective with rational coefficients.
Each projective stage $p:T\to B$ in the flag tower has path-connected
paracompact Hausdorff CW-type base and global tautological Euler class $x$.
Choose a homotopy equivalence $w:V\to B$ from a path-connected CW complex
and pull back the bundle. The projective bundle $p_V:T_V\to V$ is numerable,
hence Serre by [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]].
The pulled-back classes $1,x,\ldots,x^{r-1}$ restrict to an integral basis
on each fiber by Euler naturality and
[[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]
applied to the trivial rank-$r$ bundle over a point.
The Schubert CW structure of this fiber $\mathbb{CP}^{r-1}=\operatorname{Gr}_1(\mathbb C^r)$
has one cell in each dimension $0,2,\ldots,2r-2$ and no other cells, by
[[def-schubert-cells-in-real-and-complex-grassmannians]] and
[[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]. Thus its
cellular cochain complex has one copy of the coefficient ring in each indicated
even degree and zero in odd degrees, so every differential vanishes.
The coefficient-natural cellular comparison
[[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] shows that
the images over $\mathbb Q$ of the integral basis
$1,x,\ldots,x^{r-1}$ are a rational basis: in the corresponding cellular
coordinates each integral generator is $\pm1$, which remains nonzero and
generating after $\mathbb Z\to\mathbb Q$.
Coefficient change preserves cup products directly by the face formula in
[[def-singular-cup-product-on-cochains]]. Leray--Hirsch over $\mathbb Q$
[[thm-leray-hirsch-module-isomorphism]] now makes $p_V^*$ injective, since
its module basis includes $1$. If $p^*a=0$, pulling back to $T_V$ gives
$p_V^*w^*a=0$, whence $w^*a=0$ and $a=0$ because $w$ is a homotopy
equivalence. Thus every stage is rationally injective, and so is their
finite composite $q$. Rank-one stages are identities and obey the same
argument with the single basis element $1$.

Consequently, in rational cohomology,
$$q^*\operatorname{ch}_k(E)=\tfrac1{k!}\sum_{i=1}^{n_\alpha}t_i^k,$$
and $\operatorname{ch}_k(E)$ is the unique class with that pullback.
The rank-zero prescription is canonical. The series
is a finite sum: for $X=\varnothing$ every group is zero; otherwise
$H^{2k}(X;\mathbb Q)=0$ for $2k>\dim X$ by
[[lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension]], so
only finitely many terms are nonzero. The coefficient $1/k!$ lies in
$\mathbb Q$, and no division by zero occurs. Concretely
$\operatorname{ch}_0(E)$ is the locally constant rank function,
$\operatorname{ch}_1(E)=c_1(E)$,
$\operatorname{ch}_2(E)=\tfrac12(c_1^2-2c_2)$, and so on; the class depends
only on the isomorphism class of $E$ (as do its Chern classes), and $\operatorname{ch}(0)=0$.
