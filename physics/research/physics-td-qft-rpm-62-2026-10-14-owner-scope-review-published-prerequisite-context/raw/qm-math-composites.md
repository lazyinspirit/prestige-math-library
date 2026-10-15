---
page: qm-math-composites
title: Qm Math Composites
status: published
items:
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-rank-one-operator-calculus
  - lem-nrqm-composites-bounded-tensor-maps
  - lem-nrqm-composites-density-and-scalar-spectral-probability
  - lem-nrqm-composites-weak-form-robertson-uncertainty
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - lem-nrqm-composites-chsh-and-finite-sampling-law
  - thm-nrqm-composites-finite-partial-trace-and-schmidt
  - lem-nrqm-composites-finite-effects-and-instruments
  - lem-nrqm-composites-permutation-sector-projections
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - lem-nrqm-composites-nuclear-bounded-cyclicity
  - lem-nrqm-composites-complex-gaussian-continuation
  - lem-nrqm-composites-momentum-fourier-jacobian
  - lem-nrqm-composites-separable-partial-trace
  - lem-nrqm-composites-countable-kraus-normalization
  - lem-nrqm-composites-finite-ancilla-complete-positivity
  - lem-nrqm-composites-local-trace-preserving-no-signalling
  - thm-nrqm-composites-infinite-schmidt-decomposition
  - lem-nrqm-composites-general-trace-class-instrument-and-effect-duality
  - lem-nrqm-composites-finite-naimark-compression
  - lem-nrqm-composites-countable-kraus-isometric-dilation
  - lem-nrqm-composites-continuous-measurable-kraus-instrument
  - lem-nrqm-composites-marker-overlap-contraction
  - lem-nrqm-composites-exact-free-gaussian-propagation
  - thm-nrqm-composites-joint-pvm-construction
  - lem-nrqm-composites-compatible-luders-repeatability
requires:
  - compact-operators-and-riesz-schauder-theory
  - compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
  - complex-differentiability-and-cauchy-riemann
  - countability-and-uncountability
  - fourier-multipliers-and-sobolev-characterisations
  - fourier-transform-convolution-and-approximate-identities
  - hilbert-space-geometry-and-riesz-representation
  - measures-and-their-basic-properties
  - orthonormal-bases-parseval-and-fourier-series
  - outer-measure-and-the-caratheodory-extension-theorem
  - probability-spaces-random-variables-and-expectation
  - product-measures-and-the-fubini-tonelli-theorems
  - properties-of-the-integral-and-the-working-ftc
  - relations-functions-and-quotients
  - schwartz-space-and-the-plancherel-theorem
  - sigma-algebras-and-borel-sets
  - spectral-measures-and-borel-functional-calculus
  - the-complex-exponential-and-eulers-formula
  - the-derivative-and-mean-value-theorems
  - the-identity-theorem-and-the-open-mapping-theorem
  - the-lebesgue-integral-and-the-convergence-theorems
  - the-spectral-theorem-and-singular-value-decomposition
  - unbounded-self-adjoint-operators-and-stones-theorem
  - weak-derivatives-and-sobolev-spaces
  - bounded-linear-operators-and-quotient-spaces
  - finite-counting-and-binomial-coefficients
  - improper-integrals
  - inner-product-spaces-and-orthogonality
  - lebesgue-measure-on-euclidean-space
  - matrices-and-the-matrix-of-a-linear-map
  - normed-and-banach-spaces
  - radon-measures-and-the-riesz-markov-kakutani-theorem
  - symmetric-groups-and-the-sign-homomorphism
  - tensor-products-of-modules
  - the-lp-spaces-holder-minkowski-and-riesz-fischer
  - banach-valued-integration-and-the-radon-nikodym-property
  - fredholm-elliptic-problems-and-the-elliptic-spectrum
  - finite-probability-spaces-and-random-variables
  - the-winding-number-and-the-global-cauchy-theorem
  - continuous-functional-calculus-for-self-adjoint-and-normal-operators
examples: []
---

The composite mathematical layer of the non-relativistic quantum mechanics
collection, all of it mathematics: completed Hilbert tensor products and their
bounded maps, density operators with their scalar spectral probabilities,
partial traces and Schmidt decompositions, trace-class cyclicity and the
sigma-spectral layer, effects, instruments, Kraus families and their dilations,
the compatible-observable joint projection-valued measure, the uncertainty and
finite-sampling inequalities, permutation sectors, the Euclidean L² product
unitary, and the exact free-Gaussian propagation with its complex-Gaussian
input. Every item on this page carries `domain: mathematics` and depends only
on mathematical suppliers; nothing here asserts a physical interpretation, an
instrument realization or an empirical claim, and those remain with the
consuming quantum-mechanics pages.

The tensor layer begins with [[lem-nrqm-composites-hilbert-tensor-construction]],
which builds the algebraic tensor product of two complex Hilbert spaces, proves
that the induced sesquilinear form is an inner product with orthonormal
coordinate expansions, and completes it to a Hilbert space in which product
bases of orthonormal families have dense span. The rank-one operators $T_{u,v}x=\langle x,v\rangle u$ are the basic trace-class model: [[lem-nrqm-composites-rank-one-operator-calculus]] computes $\|T_{u,v}\|=\|T_{u,v}\|_1=\|u\|\,\|v\|$, $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, the adjoint $T_{u,v}^*=T_{v,u}$, positivity of $T_{x,x}$, the product identities with bounded and trace-class factors and trace-norm continuity of $(u,v)\mapsto T_{u,v}$.

On it,
[[lem-nrqm-composites-bounded-tensor-maps]] establishes the amplifications
$A\otimes I$ and $I\otimes B$, their adjoints, norms and extensions, and
[[lem-nrqm-composites-permutation-sector-projections]] turns the finite symmetric
group action on an iterated product into orthogonal projections onto the
symmetric and antisymmetric sectors with the transposition character
identities. [[lem-nrqm-composites-euclidean-l2-product-unitary]] identifies the
natural isometry $L^2(X)\widehat\otimes L^2(Y)\to L^2(X\times Y)$ for the
Euclidean product, with Fubini and Tonelli as its analytic inputs, and
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] defines density
operators, proves that $\mu_\rho(B)=\operatorname{tr}(\rho E(B))$ is a
probability measure in every expansion $\rho=\sum_nw_nT_{u_n,u_n}$, and records
the scalar spectral moment identities for a self-adjoint operator with its
projection-valued measure.

The finite-dimensional and trace-class layer comprises
[[thm-nrqm-composites-finite-partial-trace-and-schmidt]], which constructs the
partial trace through its defining trace identity, proves positivity and trace
preservation and the Schmidt decomposition with the purity criterion
$\operatorname{tr}\rho^2=\sum_rs_r^4$; [[lem-nrqm-composites-nuclear-bounded-cyclicity]],
which computes $BT_{u,v}=T_{Bu,v}$, $T_{u,v}B=T_{u,B^*v}$ and cyclicity of the
trace against bounded operators through nuclear representations;
[[lem-nrqm-composites-separable-partial-trace]], which extends the partial trace to
the completed tensor product of arbitrary Hilbert spaces and proves its
uniqueness, positivity, trace preservation and contractivity; and
[[thm-nrqm-composites-infinite-schmidt-decomposition]], which proves the Schmidt
expansion for arbitrary vectors of $H\widehat\otimes K$ by constructing
countable factor supports, and the reduction and purity formulae for unit vectors. On this basis
[[lem-nrqm-composites-finite-effects-and-instruments]] introduces finite effects
and instruments with their Lüders examples and probability normalization,
[[lem-nrqm-composites-general-trace-class-instrument-and-effect-duality]] proves
the duality between abstract trace-class instruments and their effects
together with the adjoint instrument $J_B^*$,
[[lem-nrqm-composites-finite-naimark-compression]] constructs a finite PVM on a larger tensor space whose compression
by an isometry gives the specified finite POVM, and
[[lem-nrqm-composites-countable-kraus-normalization]] proves trace-norm convergence, positivity and trace preservation
for countable Kraus families with strong completeness.

The infinite and continuous instrument layer is
[[lem-nrqm-composites-finite-ancilla-complete-positivity]], which defines finite-ancilla complete positivity and proves that
finite-dimensional ancilla amplifications of normalized countable Kraus maps
preserve self-adjoint positive trace-class inputs; [[lem-nrqm-composites-countable-kraus-isometric-dilation]],
which builds the isometric dilation $W\xi=\sum_aM_a\xi\otimes e_a$ with the
repair of the normalization needed for it;
[[lem-nrqm-composites-local-trace-preserving-no-signalling]], which proves that a
local instrument with $\sum_aM_a^*M_a=I$ preserves the reduced state of the
other factor; [[lem-nrqm-composites-marker-overlap-contraction]], which bounds the
overlap of marker states by the received trace-class data; and
[[lem-nrqm-composites-continuous-measurable-kraus-instrument]], which integrates a
strongly measurable Kraus family over a sigma-finite measure space to obtain an
instrument with the conditional update on events of positive probability.

The analytic layer begins with
[[lem-nrqm-composites-complex-gaussian-continuation]], which evaluates
$\int e^{-z|x|^2}dx=(\pi/z)^{n/2}$ on $\operatorname{Re}z>0$ by holomorphic
continuation, and [[lem-nrqm-composites-momentum-fourier-jacobian]], which fixes
the pointwise momentum formula $\psi_p(p)=(2\pi\hbar)^{-d/2}\int e^{-ip\cdot
x/\hbar}\psi(x)dx$ for Schwartz inputs and its unitary extension
$U=D_\hbar\mathcal F_2:L^2(dx)\to L^2(dp)$ with $\|U\psi\|_2=\|\psi\|_2$.
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
proves self-adjointness of real multiplication operators, of the free operator
$H_0=\mathcal F_2^*M_{c|\xi|^2+b}\mathcal F_2$ on its $W^{2,2}$ domain, and of
$H_0+V$ for bounded measurable real $V$ via Kato–Rellich, with the strongly
continuous unitary group generated by the self-adjoint operator; on those
results [[lem-nrqm-composites-exact-free-gaussian-propagation]] computes the exact
free evolution of the Gaussian packet
$\psi_t=(2\pi\sigma^2)^{-1/4}(1+i\tau)^{-1/2}\exp(-(x-x_0-p_0t/m)^2/(4\sigma^2(1+i\tau))+ip_0(x-x_0)/\hbar-ip_0^2t/(2m\hbar))$
with mean $x_0+p_0t/m$, variances $\sigma^2(1+\tau^2)$ and $\hbar^2/(4\sigma^2)$
and $\Delta Q\Delta P=\frac{\hbar}{2}\sqrt{1+\tau^2}$.
[[lem-nrqm-composites-weak-form-robertson-uncertainty]] supplies the weak-form
Robertson bound on a common domain, with the Schwartz position-momentum case
$|\operatorname{Im}\langle x_Q,y_P\rangle|=c/2$, and
[[lem-nrqm-composites-chsh-and-finite-sampling-law]] records the CHSH inequality
for the four-binary-outcome family together with the finite-sampling deviation
bound behind its statistical reading.

The compatible-measurement layer is
[[thm-nrqm-composites-joint-pvm-construction]], which constructs the unique regular
joint projection-valued measure $G$ of strongly commuting regular projection-valued
measures $E,F$ with $G(B\times C)=E(B)F(C)$, and
[[lem-nrqm-composites-compatible-luders-repeatability]], which computes the
sequential Lüders probabilities $\operatorname{tr}(\rho P_iQ_j)$, proves that
the conditional state $P_iQ_j\rho P_iQ_j/\operatorname{tr}(\rho P_iQ_j)$ does
not depend on the order of the two compatible sharp measurements, and derives
repeatability for the stipulated ideal instrument. All items are draft
mathematics under construction; their physical consumers add the measurement,
evolution and apparatus assumptions, and no laboratory realization of any of
these instruments is claimed here.
