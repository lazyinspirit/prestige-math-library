---
id: def-graded-chern-character-by-suspension-and-bott-periodicity
kind: definition
title: Graded Chern character by suspension and Bott periodicity
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero", "thm-complex-bott-periodicity", "thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory", "def-chern-character-of-a-complex-vector-bundle", "def-reduced-complex-k-theory", "def-negative-degree-complex-k-groups", "def-external-product-in-complex-k-theory", "thm-hopf-line-calculation-of-k-zero-of-the-two-sphere", "lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "def-reduced-cone-suspension-and-cofiber-sequence", "def-axiom-of-choice"]
axiom_strength: "ZF + AC; inherited from complex K-theory and Bott periodicity."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The Chern character in all degrees, printed pp.109-114"
verification:
  audited: 2026-09-22
---

## Definition

Assume AC. All based finite CW complexes have a vertex as basepoint. Write
$\widetilde H^m(X;\mathbb Q)=H^m(X,*;\mathbb Q)$; the natural map to
$H^m(X;\mathbb Q)$ identifies this with the kernel of restriction to the
basepoint. Indeed restriction is split by the map to a point, so the ordinary
pair sequence gives exactly that kernel, also in degree zero. Negative
ordinary cohomology groups are zero.

By [[def-reduced-complex-k-theory]], $\widetilde K^0(X)$ is likewise the
kernel of restriction to the chosen basepoint. Define
$$\widetilde{\operatorname{ch}}^0:\widetilde K^0(X)\longrightarrow\bigoplus_{k\ge0}\widetilde H^{2k}(X;\mathbb Q)$$
as the restriction of [[thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero]].
Naturality makes its image lie in the indicated kernel. Explicitly, for
$a=[E]-[F]$ with $\dim E_* =\dim F_*$, its value is
$\operatorname{ch}(E)-\operatorname{ch}(F)$, interpreted in that kernel.
Only the rank at the chosen basepoint is required to vanish: the degree-zero
component on another component of $X$ is the virtual rank there. For example,
the generator supported at the nonbasepoint of $S^0$ maps to its degree-zero
indicator function. No subtraction of a componentwise rank function is made.

Use the cohomological suspension isomorphism in the direction
$$s:\widetilde H^m(X;\mathbb Q)\xrightarrow{\cong}\widetilde H^{m+1}(\Sigma X;\mathbb Q).$$
It is the ordinary cone boundary, with the sphere coordinate first, and is
natural for based maps. This construction only uses singular cohomology,
not a correspondence theorem for arbitrary generalized theories: the
reduced cone is contractible, its base inclusion is a CW cofibration, and
excision identifies the relative cone group $H^{m+1}(CX,X;\mathbb Q)$ with
$\widetilde H^{m+1}(CX/X;\mathbb Q)$. The reduced cone pair sequence makes
its boundary an isomorphism, because the reduced groups of the cone vanish.
These are the pair exactness, homotopy and excision clauses of
[[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]],
with cone and quotient as in [[def-reduced-cone-suspension-and-cofiber-sequence]].
The same construction at the one-point complex has zero source and target.

The odd character is
$$\widetilde{\operatorname{ch}}^{-1}:\widetilde K^{-1}(X)=\widetilde K^0(\Sigma X)\xrightarrow{\widetilde{\operatorname{ch}}^0}\bigoplus_k\widetilde H^{2k}(\Sigma X;\mathbb Q)\xrightarrow{s^{-1}}\bigoplus_k\widetilde H^{2k-1}(X;\mathbb Q),$$
where the K-group identification is
[[def-negative-degree-complex-k-groups]]. Thus this is degree $-1$; degree
$1$ is its Bott translate. In all cohomology sums the integer index ranges
over exactly the degrees displayed, with negative ordinary groups zero.

Here is the periodicity normalization and the reason an even shift is harmless.
The fixed Bott class is $\beta=[\gamma]-1$ on
$S^2=\mathbb{CP}^1$, with the tautological Hopf line of
[[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]. Put
$u=c_1(\gamma)\in\widetilde H^2(S^2;\mathbb Z)$.
It is the tautological Euler generator by
[[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]
and the line convention of [[def-chern-character-of-a-complex-vector-bundle]].
Since $S^2$ has no cohomology above degree two,
$$\widetilde{\operatorname{ch}}^0(\beta)=u_{\mathbb Q}.$$
In particular $\widetilde K^0(S^2)=K^{-2}(*)$, not
$\widetilde K^{-2}(*)$ (the latter is zero).

On a smash product, the reduced external-product formula is
$$\widetilde{\operatorname{ch}}^0(a\boxtimes\beta)=\widetilde{\operatorname{ch}}^0(a)\boxtimes u_{\mathbb Q}.$$
To justify descent from the degree-zero product formula, pull back along
$X\times S^2\to X\wedge S^2$ and use
[[def-external-product-in-complex-k-theory]]. Quotient pullback in reduced
ordinary cohomology is injective: restriction from the product to its wedge
of axes is surjective, with a splitting given by the two projections, in
every degree; its pair sequence therefore identifies relative cohomology
with the kernel of restriction. Excision identifies that relative group
with the reduced cohomology of the smash quotient. Thus equality after
pullback proves the displayed formula. Relative Künneth
[[lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses]]
shows that external product with $u_{\mathbb Q}$ is an isomorphism shifting
ordinary cohomological degree by two: the reduced homology of the sphere is
one copy of $\mathbb Q$ in degree two. Use precisely this generator and
this two-suspension identification when matching Bott periodicity; replacing
$u$ by the oppositely oriented generator requires the corresponding sign
change in that identification.

For any integer $j$, choose an even shift $2r$ making $j-2r$ equal to $0$
or $-1$ and use the fixed Bott isomorphism
$B^r:K^j(X)\to K^{j-2r}(X)$, allowing negative powers of $B$.
Apply the corresponding character above and reindex the ordinary groups as
$H^{j+2k}$. The preceding product identity, also applied to $\Sigma X$,
shows that inserting another Bott step and its cohomological two-suspension
identification gives the same map. Iteration proves independence of any
larger nonpositive suspension representative; the inverses obey the same
identity. The Bott isomorphisms and their inverses are those of
[[thm-complex-bott-periodicity]]. This defines natural additive maps
$$\operatorname{ch}^j:K^j(X)\longrightarrow\bigoplus_{k\in\mathbb Z}H^{j+2k}(X;\mathbb Q).$$
For unbased $X$ use $X_+$ in the reduced construction, as prescribed in
[[def-negative-degree-complex-k-groups]]; thus
$\widetilde H^m(X_+;\mathbb Q)=H^m(X;\mathbb Q)$.
This includes the empty unbased space, for which both sides are zero.
Every sum is finite because $X$ is finite dimensional.

The maps use the external products and suspension conventions of the
multiplicative theory
[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]].
Compatibility with external products is checked by suspending each factor
into degree zero, using the degree-zero external formula, and desuspending.
The permutation bringing the sphere coordinates together is the same on
both sides; its Koszul sign is the one in the graded external product
[[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]].
Finally the displayed Bott-product identity permits the same transport in
positive degrees. Thus product compatibility uses the prescribed coherent
suspension products as well as the Bott normalization; periodicity of the
source groups alone would not establish it.

## Source notes

Hatcher, *Vector Bundles & K-Theory*, §4.1, printed pp.110–111, defines the
reduced character by the kernels of basepoint restriction, proves the
Bott/external-product square in Proposition 4.3, and defines the odd
character by the suspension square immediately before Proposition 4.5.
The generator here is explicitly $c_1(\gamma)$, preserving this page's
existing tautological-line convention.
