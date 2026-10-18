---
page: algebraic-representation-and-tensor-symmetry-map
title: Algebra, Modules, and Tensor Symmetry Interfaces
status: draft
items:
  - def-unital-associative-algebra-representation
  - thm-associative-algebra-representations-are-unital-modules
examples: []
---

This page connects the standard algebra, module, representation, and tensor
language. A unital representation of an associative algebra $A$ on a
$k$-vector space $V$ is a unital $k$-linear algebra action on $V$; the two
items here define that interface and prove its equivalence with a $k$-bilinear
unital left $A$-module action. General module and tensor-product constructions
remain on [[tensor-products-of-modules]].

For a Lie algebra $\mathfrak g$, the canonical map to
[[def-universal-enveloping-algebra]] turns a Lie representation into a
unital $U(\mathfrak g)$-module by
[[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]].
Its tensor-product action is
$x(v\otimes w)=xv\otimes w+v\otimes xw$ by
[[prop-direct-sum-dual-hom-and-tensor-representations]], consistent with the
primitive coproduct on $U(\mathfrak g)$ in
[[rem-hopf-algebra-structure-on-the-enveloping-algebra]]. A Lie-algebra module
alone does not specify an integrated representation of a chosen global Lie
group.

The category of modules over a bialgebra becomes monoidal because its
coproduct defines the tensor action and its counit defines the unit object
([[def-monoidal-category]], [[def-hh-module-category-and-tensor-action]],
[[thm-hh-bialgebra-module-tensor-coherence]]). A monoidal category has
associators and unitors satisfying the pentagon and triangle; a braiding is
additional structure. A quasitriangular structure $R$ supplies a braiding on
bialgebra modules by
[[thm-hh-r-matrix-constructs-a-module-braiding]], and the braiding is symmetric
only in the triangular case described in
[[def-hh-braiding-and-triangular-structure]]. Here $R$ is an actual finite
algebraic tensor in $H\otimes H$; completed universal $R$-matrices require a
separate convergence and completion argument.

The Lie-representation to enveloping-module passage is summarized below. The
diagram records the map from the Lie algebra, the given representation, and
its unique extension to the enveloping algebra; the local theorem proves the
extension and its uniqueness.

```tikzcd
\mathfrak g \arrow[r,"\iota_{\mathfrak g}"] \arrow[dr,"\rho"'] & U(\mathfrak g) \arrow[d,"\overline{\rho}"] \\
& \operatorname{End}_k(V)
```
