---
page: muckenhoupt-weights-and-weighted-estimates
title: "Muckenhoupt Weights and Weighted Estimates"
status: published
requires: [calderon-zygmund-decomposition-and-singular-integrals, the-lp-spaces-holder-minkowski-and-riesz-fischer, the-maximal-function-and-lebesgue-differentiation, radon-measures-and-the-riesz-markov-kakutani-theorem]
items:
  - def-weight-and-weighted-lp-space
  - def-axis-parallel-cube-averages-and-cube-maximal-functions
  - lem-ball-and-cube-maximal-functions-are-comparable
  - def-muckenhoupt-a-p-and-a-one-weights
  - lem-a-one-cube-average-and-maximal-function-forms-agree
  - lem-a-p-dual-weight-and-nesting-properties
  - lem-a-p-weighted-average-comparison-and-density-to-mass
  - lem-a-p-weights-are-doubling
  - lem-maximal-dyadic-subcubes-of-a-cube-at-a-height
  - lem-a-p-distribution-decay-from-maximal-cubes
  - thm-reverse-holder-self-improvement-for-a-p-weights
  - cor-a-p-classes-are-open-in-the-exponent
  - def-muckenhoupt-a-infinity-class
  - lem-weighted-maximal-weak-bound-for-a-one
  - def-weighted-maximal-function-relative-to-a-doubling-weight
  - lem-weighted-maximal-function-is-weak-type-one-one
  - thm-hardy-littlewood-maximal-operator-characterises-a-p
  - lem-a-infinity-weights-satisfy-power-decay
  - lem-power-decay-weights-are-doubling
  - lem-differentiation-of-l-one-functions-for-a-doubling-weight
  - lem-reverse-holder-from-a-distribution-estimate
  - lem-power-decay-implies-a-p-membership
  - thm-a-infinity-power-decay-characterisation
  - lem-maximal-dyadic-cubes-covering-a-proper-open-set
  - lem-annulus-far-field-estimates-for-the-maximal-function
  - lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite
  - lem-unweighted-good-lambda-local-estimate-for-maximal-truncations
  - lem-weighted-good-lambda-inequality-for-maximal-truncations
  - thm-calderon-zygmund-operators-are-bounded-on-weighted-lp
  - cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp
  - rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one
examples: []
---

This page develops the Muckenhoupt weighted theory that upgrades the
unweighted maximal and singular-integral estimates of the Fourier analysis
track to measures $w\,d\lambda$. It begins with the conventions: a weight is a
locally integrable almost-everywhere positive function, its associated measure
is a locally finite regular Borel measure, $L^p(w)$ is the corresponding
weighted space, and cube averages and the centred and uncentred maximal
functions are compared across cubes and balls up to dimensional constants.

The core of the page is the $A_p$ hierarchy. The characteristic
$[w]_{A_p}=\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ is shown
to be equivalent in its cube and ball forms; the endpoint class $A_1$ is
controlled by $M^*w\le Cw$ and by the cube-average/essential-infimum form.
The classes are nested and closed under the dual weight
$w^{-1/(p-1)}\in A_{p'}$ with the exact characteristic identity; they are
doubling; and their weighted averages dominate unweighted averages in the
density-to-mass form. Maximal dyadic subcubes at a height give the distribution
decay of the weight averages that drives the reverse Hölder self-improvement
and the openness of the $A_p$ range in the exponent.

The second half defines $A_\infty=\bigcup_{1\le p<\infty}A_p$ and proves the
equivalence of $A_\infty$ membership, power decay
$w(E)/w(Q)\le C(|E|/|Q|)^\delta$ and a reverse Hölder inequality. It also
proves the weighted maximal theory for doubling weights: the weak $(1,1)$ bound
under $A_1$, Marcinkiewicz interpolation, and the characterisation of $A_p$ by
the boundedness of the Hardy–Littlewood maximal operator on $L^p(w)$.

The final block assembles the good-$\lambda$ machinery — a Whitney-type dyadic
covering of proper open sets, annulus far-field estimates, finiteness of the
kernel tails of weighted $L^p$ functions, and the unweighted and weighted
local good-$\lambda$ inequalities — and proves the weighted
Calderón–Zygmund theorem for maximal truncations: strong $L^p(w)$ bounds for
$w\in A_p$, the weak $(1,1)$ endpoint for $w\in A_1$, and the conditional
clause upgrading almost-everywhere convergence on a dense subspace to all of
$L^p(w)$. The Hilbert and Riesz transforms are the concrete corollary, and a
closing remark explains why the endpoints are not obtained by setting $p=1$.

Every statement that needs a choice principle names it: the differentiation
lemma for doubling weights, the reverse Hölder lemma, the power-decay converse
chain, the $A_\infty$ characterisation and the weighted
Calderón–Zygmund/Hilbert–Riesz results assume Dependent Choice, which supplies
the density of $C_c^\infty$ in $L^p(w)$ and the almost-everywhere
differentiation inputs; the remaining items use at most Countable Choice.
