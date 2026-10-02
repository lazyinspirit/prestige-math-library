---
page: logarithmic-potential-capacity-and-riesz-decomposition
title: "Logarithmic Potential, Capacity, and Riesz Decomposition"
status: draft
requires: [subharmonic-functions-and-the-dirichlet-problem, product-measures-and-the-fubini-tonelli-theorems, radon-measures-and-the-riesz-markov-kakutani-theorem, banach-alaoglu-goldstine-and-krein-milman, distributions-test-functions-and-differentiation, fundamental-solutions-newtonian-potentials-and-green-functions, green-functions-harmonic-measure-and-conformal-invariance, weak-derivatives-and-sobolev-spaces, weak-convergence-tightness-and-representation]
items:
  - def-support-of-a-borel-measure
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - thm-logarithmic-energy-well-defined-and-lower-semicontinuous
  - lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
  - thm-equilibrium-measure-existence-and-uniqueness
  - def-polar-set-and-quasi-everywhere
  - lem-logarithmic-potential-maximum-principle
  - thm-frostman-equilibrium-theorem
  - prop-reciprocity-inequality-for-logarithmic-potential
  - def-chebyshev-constant-compact-set
  - lem-chebyshev-constant-is-submultiplicative-root-limit
  - lem-monic-polynomial-capacity-lower-bound
  - def-riesz-measure-subharmonic-function
  - thm-riesz-measure-is-positive-radon
  - lem-logarithmic-potential-distributional-laplacian
  - thm-riesz-decomposition-subharmonic-plane
  - lem-compact-polar-sets-and-subharmonic-minus-infinity-loci
  - thm-principle-of-descent-and-domination
  - def-green-function-with-pole-at-infinity
  - thm-green-function-from-equilibrium-potential
  - def-fekete-points-and-transfinite-diameter
  - lem-fekete-diameters-decrease
  - thm-logarithmic-capacity-equals-transfinite-diameter
examples: []
---

This page develops the classical logarithmic potential theory of compact
subsets of the plane. The kernel $k(z,w)=\log(1/|z-w|)$ carries the value
$+\infty$ on the diagonal, and the potential $U^\mu$ and energy $I(\mu)$ of a
finite positive measure of compact support are defined through a shift
$k_R=k+\log R$ with $R$ larger than the diameter of the carrier. On each
nonempty compact set $K$ the Robin constant $V_K$ is the infimum of the energy
over Borel probability measures on $K$, the capacity is
$\operatorname{cap}(K)=e^{-V_K}$ (with $\operatorname{cap}(\varnothing)=0$), and
the energy is lower semicontinuous with respect to weak convergence. Strict
positivity of the energy of a nonzero zero-mass charge, the maximum principle
for logarithmic potentials, and the Frostman variational inequality for the
equilibrium measure follow, and the equilibrium measure exists and is unique
whenever the capacity is positive.

The second half of the page passes to the finer structure of subharmonic
functions. The Riesz measure $\mu_u=(2\pi)^{-1}\Delta u$ of a subharmonic $u$ is
a positive Radon measure, the distributional Laplacian of a logarithmic
potential is identified, and every subharmonic function on a plane domain is
locally the sum of a potential of its Riesz measure and a harmonic function.
Compact sets of capacity zero are exactly the compact sets contained in the
$-\infty$ locus of a subharmonic function, which yields the compact- and
$\sigma$-compact-polar calculus used by quasi-everywhere statements. The page
also proves descent and domination principles for logarithmic potentials.
Fekete points, the
transfinite diameter $\tau$, and the monic Chebyshev constant $\operatorname{cheb}$
are then related to capacity by $\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K)$.
For nonpolar $K$, empirical Fekete measures converge weakly to the equilibrium
measure, and the normalized moduli $|F_n|^{1/n}$ converge uniformly on compact
subsets of $\mathbb C\setminus K$ to $\exp(-U^{\mu_K})$.

The final items construct the Green function with pole at infinity from the
equilibrium potential, $g=V_K-U^{\mu_K}$, with its quasi-everywhere boundary
condition, and record the reciprocity inequality and the monic lower bound
$\|p\|_K\ge\operatorname{cheb}(K)^n$ that carry the Chebyshev comparison. The
axiom accounting is explicit: the Axiom of Choice is stated on the equilibrium,
Frostman, and capacity-equals-transfinite-diameter results and supplies Countable
Choice where a minimizing sequence, an enumeration, or a regularity theorem
needs it; Dependent Choice is stated on the Riesz measure, Riesz decomposition,
domination, and compact-polar results. The potential maximum principle and
Chebyshev root-limit lemma are choice-free; descent, reciprocity, and the
monic comparison carry the choice hypotheses of their cited suppliers.
