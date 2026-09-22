---
page: banach-space-differential-calculus-and-banach-manifolds-examples
title: "Banach-Space Differential Calculus and Banach Manifolds: Examples"
status: published
items: []
examples: [ex-the-derivative-of-a-bounded-bilinear-map, ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity, ex-a-regular-level-set-in-a-banach-space, ex-a-projection-with-finite-dimensional-kernel-is-fredholm, cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold]
---

The examples on this page work the definitions of the companion page out in the
cases that the local theorems actually use. A bounded bilinear map is
differentiated by expanding the increment and showing that the only surviving
remainder is the cross term $B(h,k)$, bounded by $C\|h\|\|k\|$ and hence of
order $o(\|(h,k)\|)$; the product rule for an associative multiplication and the
derivative of the diagonal map, when the two input spaces agree ($X=Y$), follow
as specialisations. A small Lipschitz
perturbation of the identity is inverted globally by the contraction principle,
with the Lipschitz constant $(1-q)^{-1}$ for the inverse, and the inverse
function theorem makes the inverse of class $C^k$ when the perturbation is.
The bounded projection onto a complemented summand of a Banach space is
differentiated directly, with domain and target carrying their standard maximal
smooth atlases: it is its own derivative everywhere, every value is regular
with complemented kernel, and its level sets are the affine translates of the
other summand, with tangent space that summand at every point. The same
projection, when its kernel is finite dimensional, is a smooth Fredholm map
whose index is the dimension of the kernel and whose local reduction has a
trivial obstruction space.

The page closes with the boundary case that explains the split-kernel hypothesis
of the regular value theorem. The null-sequence space $c_0$ is closed in
$\ell^\infty$, and assuming the Axiom of Countable Choice it is not
complemented there by the quotient-dual argument. Since $\ell^\infty$ is not
second countable, it is not a Banach manifold under this library's convention;
the example is therefore a Banach-space obstruction to a split coordinate
decomposition, not a manifold counterexample. It witnesses why surjectivity of
a derivative alone cannot be substituted for a complemented kernel.
