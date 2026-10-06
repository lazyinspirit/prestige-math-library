---
page: littlewood-paley-theory-and-square-functions
title: "Littlewood Paley Theory and Square Functions"
status: draft
requires:
  - lacunary-fourier-series-and-sidon-sets
  - fourier-multipliers-and-sobolev-characterisations
  - calderon-zygmund-decomposition-and-singular-integrals
  - real-hardy-spaces-maximal-functions-and-atoms
  - bmo-john-nirenberg-and-h1-duality
  - schwartz-space-and-the-plancherel-theorem
  - the-maximal-function-and-lebesgue-differentiation
items:
  - def-rademacher-functions-on-the-unit-interval
  - lem-finite-rademacher-blocks-are-equidistributed
  - thm-khintchine-inequality-for-finite-rademacher-sums
  - lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition
  - def-inhomogeneous-dyadic-frequency-partition
  - lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds
  - lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded
  - lem-ltwo-almost-orthogonality-of-dyadic-pieces
  - def-littlewood-paley-square-function
  - lem-rademacher-randomisation-converts-square-functions-to-multipliers
  - lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds
  - lem-littlewood-paley-reproducing-formula-in-tempered-distributions
  - thm-littlewood-paley-square-function-equivalence-on-lp
  - cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space
  - thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces
  - def-lusin-area-function-for-a-fixed-admissible-kernel
  - rem-square-function-characterisation-of-real-hone
  - rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements
examples: []
---

This page develops the inhomogeneous Littlewood–Paley theory on Euclidean
space: a fixed smooth dyadic frequency partition with a retained
low-frequency block, the resulting operators, the square function, and the
strict-range equivalence between the square-function norm and the $L^p$ norm
for $1<p<\infty$. The analytic estimates assume Countable Choice through
the cited measure and Fourier interfaces. The endpoint duality remark also
inherits the full Axiom of Choice from its supplier.

The partition is built from a radial smooth cutoff $\psi$ equal to $1$ on the
unit ball and supported inside the ball of radius $2$; the explicit construction
vanishes at radius $3/2$. The low piece is $\varphi_0=\psi$; for $j\ge1$ set
$\varphi_j=\psi(2^{-j}\cdot)-\psi(2^{-(j-1)}\cdot)$. All pieces are nonnegative, at most
two of them are nonzero at any frequency, they sum to $1$, their squares sum
to a number in $[1/3,1]$, and their derivatives carry the scales
$2^{-j|\alpha|}$. The companion symbols
$\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$ reproduce the
partition, $\sum_j\tilde\varphi_j\varphi_j=1$, and neither the low-frequency
block $\Delta_0$ nor its companion is assigned mean zero. The high-frequency
kernels are rescalings of $K_1$, the low-frequency kernel is $K_0$, and the
companion kernels are finite sums of neighbouring kernels. All have uniformly
bounded $L^1$ mass, so every $\Delta_j$ is uniformly bounded on $L^p$ for
$1\le p\le\infty$.

The strict-range theorem is proved by Rademacher randomisation rather than by
vector-valued Calderón–Zygmund theory. Khintchine's inequality for finite
Rademacher sums—proved here from the equidistribution of finite Rademacher
blocks, with sharp constants at $p=2$—converts the pointwise square function
into an average of random signed sums, each of which is a Fourier multiplier
with symbol $\sum_j\pm\varphi_j$; those symbols obey Mihlin's condition with
constants independent of the signs, so the Mihlin multiplier theorem
applies uniformly. The reproducing formula
$f=\sum_j\tilde\Delta_j\Delta_jf$ in $\mathcal S'$, its duality bound
$\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|\le\int Sf\,\tilde Sg$, and the
$L^p$ norm-recovery corollary give the reverse inequality on Schwartz
functions. Continuity of the finite truncations, monotone convergence and a
Lipschitz estimate identify the extension to $L^p$ with the increasing pointwise
square function. The same
machinery gives the Littlewood–Paley characterisation of the Bessel-potential
Hilbert–Sobolev spaces, $\|f\|_{H^s}^2\asymp\sum_j2^{2js}\|\Delta_jf\|_2^2$,
and shows that the choice of admissible partition does not change the
square-function space.

Only the strict range is claimed for the inhomogeneous square function. The
recorded classical lower-endpoint scale is real Hardy space $H^1$,
characterised among $L^1$ functions by an integrable homogeneous square
function; its elements have mean zero. The classical upper dual scale is
$\mathrm{BMO}$ modulo constants. These records do not extend the
inhomogeneous theorem to either endpoint. The Lusin area function is defined
as a conical functional, with no asserted equivalence to the square function. The cutoff must be smooth:
sharp interval indicators have kernels of infinite $L^1$ norm, as recorded on
the companion examples page.
