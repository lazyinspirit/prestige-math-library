---
page: the-direct-method-and-euler-lagrange-equations
title: "The Direct Method and Euler--Lagrange Equations"
status: published
items: ["def-proper-coercive-and-weakly-lower-semicontinuous-functional", "def-gateaux-and-frechet-derivatives-of-a-functional", "lem-norm-closed-convex-sets-are-weakly-closed", "lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence", "lem-w-one-p-is-reflexive", "lem-caratheodory-composition-is-measurable", "lem-fundamental-lemma-of-the-calculus-of-variations", "lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation", "def-convex-and-strictly-convex-functionals-on-a-banach-space", "lem-coercivity-makes-every-finite-level-minimising-sequence-bounded", "lem-weak-closedness-keeps-the-direct-method-limit-admissible", "lem-liminf-passage-makes-the-weak-limit-a-minimiser", "lem-differentiation-of-an-integral-functional", "thm-first-variation-vanishes-at-an-interior-minimiser", "lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed", "lem-boundary-fundamental-lemma-of-the-calculus-of-variations", "lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous", "cor-strict-convexity-gives-uniqueness-of-a-minimiser", "thm-weak-euler-lagrange-equation-for-integral-functionals", "thm-direct-method-in-a-reflexive-banach-space", "thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional", "cor-classical-euler-lagrange-equation-under-regularity", "thm-direct-method-for-convex-integral-functionals", "thm-natural-boundary-condition-for-free-boundary-variations", "rem-euler-lagrange-is-necessary-not-sufficient-without-convexity", "thm-dirichlet-principle-for-poisson-equation", "cor-minimisers-are-classical-when-elliptic-regularity-applies"]
examples: []
---

This page develops the direct method of the calculus of variations and the
Euler--Lagrange equation for integral functionals, first on an abstract
normed space and then on the Sobolev spaces attached to a bounded $C^1$
domain. Extended-real functionals are fixed with their effective domain,
properness, coercivity and weak sequential lower semicontinuity, and convex
and strictly convex functionals on a real vector space are defined together with
the Gateaux and Frechet derivatives of a functional. The direct-method spine
then runs: coercivity bounds every finite level set; a norm-bounded sequence
in a reflexive Banach space has a weakly convergent subsequence, under the
ultrafilter lemma, DC and HB; weak closedness keeps the weak limit admissible;
and the liminf passage at a weakly lower semicontinuous functional turns a
minimising sequence into a minimiser. The abstract existence theorem combines
these lemmas for a functional proper on a nonempty weakly sequentially closed admissible set, and
$W^{1,p}(\Omega)$ is shown to be reflexive for $1<p<\infty$, so the convex
integral functional $I(u)=\int_\Omega f(x,u,Du)\,dx$ with a Caratheodory
integrand attains its infimum on every nonempty affine trace class, under the
stated upper growth and coercivity hypotheses and joint convexity in
$(s,\xi)$. Strict convexity gives uniqueness of a minimiser, and for a convex
Gateaux differentiable functional stationarity is sufficient for a global
minimum. The more general convex variational inequality is proved with finite
one-sided derivatives along admissible segments, including boundary points of
the convex set. Convex norm sequential lower semicontinuity passes to weak
sequential lower semicontinuity under HB and Countable Choice by equality of
the ambient norm and weak closures of convex sublevels.

The Euler--Lagrange half of the page proves the first variation formula. The
Caratheodory composition lemma makes the integral well defined; the
fundamental lemma of the calculus of variations and its boundary form convert
the vanishing first variation into the weak Euler--Lagrange equation
$\int_\Omega\big(f_\xi\cdot D\varphi+f_s\varphi\big)\,dx=0$ on the fixed-trace
class, with the boundary fundamental lemma retaining the natural condition on
a free boundary. Under $C^2$ regularity of the integrand and of the
minimiser, integration by parts gives the classical equation
$-\operatorname{div}f_\xi+f_s=0$; the free-boundary theorem gives
$f_\xi(x,u,Du)\cdot\nu=0$ on $\partial\Omega$. A remark records that the
Euler--Lagrange equation is necessary but not sufficient without convexity,
and the page closes with the Dirichlet principle: the Dirichlet energy
$\tfrac12\int_\Omega|Du|^2-\int_\Omega fu$ has a unique minimiser on each
admissible affine trace class, that minimiser is the weak solution of
$-\Delta u=f$, and it is classical whenever the elliptic regularity theory of
the cited suppliers applies. A twice differentiable local minimiser has
nonnegative second variation throughout.

Conventions: $\Omega\subseteq\mathbb R^n$ is a bounded $C^1$ domain,
$1<p<\infty$, weak lower semicontinuity is sequential, and the Euler--Lagrange
equation is written $-\operatorname{div}f_\xi+f_s=0$. Choice principles are
declared per item: the reflexive-subsequence and full direct-method statements
assume the ultrafilter lemma, DC and HB, the weak-closure and trace-class
lemmas and fixed-trace Euler--Lagrange theorem assume the Axiom of Choice.
Composition, differentiation and the interior fundamental lemma explicitly
assume Countable Choice; the boundary lemma explicitly assumes AC and enters through
the Lebesgue-point and mollifier interfaces that use the Axiom of Countable
Choice.
