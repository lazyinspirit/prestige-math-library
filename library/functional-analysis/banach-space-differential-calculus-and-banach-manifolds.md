---
page: banach-space-differential-calculus-and-banach-manifolds
title: Banach-Space Differential Calculus and Banach Manifolds
status: draft
items: [def-frechet-derivative-between-banach-spaces, lem-the-frechet-derivative-is-unique, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-c-k-map-between-banach-spaces, lem-banach-mean-value-estimate-on-a-convex-set, thm-inverse-function-theorem-for-banach-spaces, thm-implicit-function-theorem-for-banach-spaces, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, lem-banach-manifold-differentials-are-chart-independent, def-split-banach-submanifold, thm-regular-value-theorem-for-banach-manifolds, def-smooth-banach-vector-bundle-and-section, thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold, def-fredholm-map-between-banach-manifolds, lem-local-finite-dimensional-reduction-for-a-fredholm-map, rem-fredholm-maps-have-countable-proper-local-restrictions, rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense, prop-the-index-of-a-fredholm-map-is-locally-constant, rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel]
examples: []
---

This page supplies the nonlinear differential calculus that the linear operator
theory of the preceding pages does not contain, and it does so in the Fréchet,
not the Gâteaux, sense: over the real field throughout, a derivative is a
bounded linear operator satisfying a uniform $o(\|h\|)$ remainder estimate.
The opening definition fixes that convention, the uniqueness lemma makes the
notation $Df(x)$ legitimate, and the sum, bounded-bilinear product and chain
rules are proved at a single point at a time, with no continuity of any
derivative assumed. The class $C^k$ is then defined recursively with derivatives
valued in spaces of bounded operators under the operator norm, and the mean
value estimate on a convex set is proved through the Hahn--Banach norming
functional and the scalar mean value theorem — the one step on this page that
spends the Axiom of Choice.

The first half closes with the two local existence theorems for maps between
Banach spaces. The inverse function theorem normalises the derivative to the
identity and runs the contraction argument on a closed ball: the inverse is
constructed, shown Lipschitz, differentiated, and then shown to be of class
$C^k$ by differentiating the identity $Dg = \mathrm{inv}\circ Df\circ g$ and
using the Neumann series for operator inversion. The implicit function theorem
is the standard reduction of the equation $F(x,y)=0$ to the inverse theorem
applied to $(x,y)\mapsto(x,F(x,y))$, followed by the derivative formula
$Dg = -D_yF^{-1}D_xF$ along the graph.

The second half turns to manifolds: a $C^k$ Banach manifold is a Hausdorff,
second-countable space with a $C^k$ atlas modelled on a real Banach space, and a
map between such manifolds is $C^k$ when all its coordinate representatives
are. Tangent vectors are defined as chart-coordinate velocities modulo the
transition-derivative relation, the differential is defined through coordinate
representatives, and the chart independence of both, together with
functoriality, is proved from the chain rule. Split submanifolds are defined by
the existence of charts that flatten them onto a slice $E_0\times\{0\}$ with
$E_0$ complemented, and the regular value theorem is proved by applying the
implicit function theorem in a complement of the kernel: its domain carries a
maximal specified atlas, the kernel is printed as a complemented subspace in the
hypothesis, and the closing remark explains why surjectivity alone cannot
replace it.

The final block treats the infinite-dimensional transversality package: smooth
Banach vector bundles and their sections, the vertical derivative at a zero of
a section and its independence of the local trivialisation, the theorem that a
section transverse to the zero section — vertical derivative onto with
complemented kernel, on a domain with maximal specified atlas — has a split zero
submanifold with tangent equal to that kernel, the definition of a Fredholm map
between Banach manifolds with its
pointwise index, the local finite-dimensional reduction of a Fredholm map to the
normal form $(u,v)\mapsto(u,g(u,v))$ with finite-dimensional obstruction map
$g$. Two following draft remarks explicitly record Smale's external countable
proper-localization and nowhere-dense critical-image results; they are the
bounded backward prerequisites for the existing DT-4 Sard--Smale theorem and
are not local proofs. The block ends with local constancy of the index, which
makes the index constant on connected components.
