---
page: proper-cohomological-descent-and-constructible-hypercovers
title: "Proper Cohomological Descent And Constructible Hypercovers"
status: draft
requires: [algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations, analytic-derived-six-operations-and-duality, constructible-incidence-and-cochain-models, double-complexes-exact-couples-and-convergence, equivariant-constructible-perverse-foundations, relations-functions-and-quotients, spectral-sequences]
items: [lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization, lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves, thm-proper-hypercovers-compute-constructible-derived-cohomology]
examples: []
---

**Objective.** This page develops cohomological descent for proper morphisms of
finite-type complex algebraic varieties in the analytic topology, with
bounded algebraically constructible coefficients over an arbitrary field: the
comparison of bicosimplicial totals with their diagonal totalizations, the
proper-surjection Cech descent quasi-isomorphism, and the theorem that proper
hypercovers compute constructible derived cohomology together with their
first-quadrant spectral sequence. Two hypotheses are deliberately absent
throughout: individual fibers are not assumed acyclic, connected or smooth,
and no finite-dimensionality of cohomology groups is used for convergence. The
axiom of choice is stated and inherited exactly through the supplied
injective-resolution six-functor construction; the bicosimplicial comparison
is choice-free, and the stalk-contraction argument needs only the selection of
one point in one nonempty fiber.

## Bicosimplicial totals and their diagonal

[[lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization]]
compares the two ways of totalizing a bicosimplicial complex $K^{p,r,q}$ of
modules over a commutative ring with a fixed internal lower bound $q\geq a$:
the alternating-face total with differential
$\delta_h+(-1)^p\delta_v+(-1)^{p+r}d$ and the diagonal alternating-face total
with differential $\delta_{\mathrm{diag}}+(-1)^nd$ are naturally chain-homotopy
equivalent. The proof reconstructs the comparison by universal recursion on the
representable models $Q_{p,r}$, using the specified contractions of the
diagonal complex of the product of standard simplices and of the tensor product
of the two simplicial chain complexes; it never inverts a duality, assumes no
dimensional finiteness of the coefficients, and imports no Eilenberg-Zilber
theorem beyond the published normalization, prism and finite-totalization
results. Normalization may be applied on either side, and the comparison
descends to coherent derived diagrams presented by a supplied functorial strict
resolution.

## Proper Cech descent for constructible field sheaves

[[lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves]]
is the descent step. For a proper surjective morphism $f:Y\to X$ of finite-type
complex algebraic varieties, a field $k$ and $F\in D^b_c(X;k)$, the augmented
derived Cech map $F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Rf_{p*}F_p$ is a
quasi-isomorphism in the analytic topology, where $Y_p=Y\times_X\cdots\times_XY$;
the claim commutes with arbitrary algebraic base change and coefficient
morphisms and yields $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$.
The proof reduces the cone to its stalks: a fixed lower cochain bound makes
every diagonal finite, and proper base change identifies each augmented
horizontal row in internal degree $q$ with
$H^q(K)\to H^q(S,K)\to H^q(S^2,K)\to\cdots$ for the fiber $S$ over the point
and $K=F_x$. Choosing one point $y\in S$ and inserting it as first coordinate
contracts that row explicitly, with the identities $d_0j=\mathrm{id}$ and
$d_ij=jd_{i-1}$; no positive cohomology of $S$ is asserted to vanish, so the
argument genuinely retains the cohomology of the fiber.

## Proper hypercovers and the E1 spectral sequence

[[thm-proper-hypercovers-compute-constructible-derived-cohomology]] passes from
one covering map to a proper hypercover $X_\bullet\to X$: each level maps
properly and surjectively onto the matching object of the previous skeleton, and
then $F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Ra_{p*}a_p^*F$ with the
analogous global statement, the strongly convergent spectral sequence
$E_1^{p,q}=H^q(X_p,a_p^*F)\Rightarrow H^{p+q}(X,F)$, the finite diagonal
cutoff, and proper common refinements. The proof runs the DHI bounded-height
induction on chain totals: a height-zero hypercover is a Cech nerve, the
levelwise maps $U_j\to V_j$ are finite products and pullbacks of the matching
surjections, the bisimplicial Cech model is totalized and replaced by its
diagonal via the comparison above, and the bounded hypercover is exhibited as a
retract over $X$ of that diagonal. Arbitrary height is reduced by the
coskeleton truncation $\operatorname{cosk}_N\operatorname{sk}_N$, which agrees
with the hypercover through degree $N$ while each total degree $m$ uses only
levels $p\leq m-a+1$. The constant-sheaf case $a=0$ is the first-quadrant
spectral sequence required for smooth-projective hyperresolutions; the
levelwise product of smooth maps over a singular base is not asserted to be
smooth.

The companion [[proper-cohomological-descent-and-constructible-hypercovers-examples]]
works the two boundary phenomena concretely: the projective line over a point,
whose single fiber has nonzero $H^2$ yet still descends, and the sharp degree
cutoff $n+1$ for the constant sheaf in degree $n$.
