---
page: tensor-coherence-and-algebraic-descent-examples
title: "Tensor Coherence and Algebraic Descent — Examples"
status: draft
items: []
examples: [ex-hh-elementary-tensor-presentations-and-invariant-contractions,
           ex-hh-pentagon-on-four-named-vectors,
           ex-hh-tensor-quotient-by-a-one-dimensional-subspace,
           ex-hh-finite-coevaluation-in-two-bases,
           cex-hh-infinite-dimensional-tensor-dual-identification-fails]
---

The companion works out the explicit calculations that test the constructions of [[tensor-coherence-and-algebraic-descent]]. The elementary tensor $u\otimes v$ in $k^2\otimes k^2$ has many finite presentations, while a bilinear form bundled to it contracts to the same value on each of them: the form descends to a linear functional on the tensor product, and its value depends only on the tensor, not on the presentation. The pentagon is then checked on four named vectors of $k^2$ inside $k^2\otimes k^2\otimes k^2\otimes k^2$, where the two composites of the coherence identity are followed by expanding the first factor and agree on the two elementary summands.

The quotient example computes the kernel of $p\otimes q$ for $U=ke_1\subseteq k^2$ and $Z=kf_2\subseteq k^2$ from the product basis: the kernel is spanned by the three basis tensors killed by the quotient maps, and its dimension matches the prediction of the injection lemma, whose complement argument is not needed for the explicit computation. The coevaluation example computes $\sum_iv_i\otimes v_i^*$ in the standard basis of $k^2$ and in the basis $e_1\pm e_2$ over a field of characteristic other than $2$, showing the same element in both presentations and hence the basis-independence of the zigzag element.

The counterexample refutes the tensor-dual identification read without its finite-dimensional hypothesis: for an infinite-dimensional space with basis $(e_i)_{i\in I}$, the coefficient functional $L(e_i\otimes e_j)=\delta_{ij}$ on the product basis is not a finite sum of products of functionals, since the coordinate functionals $e_j^*$ form an infinite linearly independent family and would have to lie in a finite-dimensional span. The companion is a dependency leaf: it records computations and a failure for this page and supplies no theorem to another page.
