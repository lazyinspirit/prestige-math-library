---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-metropolized-hamiltonian-chain-preserves-target.json
  precheck: pass
id: thm-metropolized-hamiltonian-chain-preserves-target
kind: theorem
title: The Metropolized Hamiltonian chain preserves its target
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-leapfrog-hamiltonian-monte-carlo
  - alg-metropolis-hastings-kernel
  - def-axiom-of-choice
  - def-countable-choice
  - def-dirac-measure
  - def-hamiltonian-monte-carlo
  - def-leapfrog-step-map
  - def-measure-kernel-and-probability-kernel
  - def-measure
  - def-measurable-function-between-measurable-spaces
  - def-probability-measure
  - def-standard-borel-space
  - def-composition-of-probability-kernels
  - def-measure-preserving-transformation-and-system
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - lem-common-submeasure-density-is-pointwise-minimum
  - lem-dirac-integral-evaluation
  - lem-finite-euclidean-space-is-standard-borel
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - lem-prior-and-model-kernel-define-joint-law
  - lem-kernel-composition-is-well-defined-and-associative
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-measurability-of-integration-against-a-kernel
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-exponential-is-strictly-increasing
  - thm-leapfrog-is-reversible-and-volume-preserving
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-nonnegative-weighted-sums-of-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-exponential-reciprocal-and-positivity
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: AC is used through the finite-dimensional multivariate-normal density and the general RN-based Metropolis-Hastings construction/common-submeasure result. Its Countable Choice consequence is used by the Borel Lebesgue product, reflection/shear volume, and change-of-variables suppliers. No stronger choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5
      url: https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf
    - title: Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo
      url: https://arxiv.org/pdf/1701.02434
---

## Statement

Assume AC. Let $d\ge1$, $U\in C^1(\mathbb R^d,\mathbb R)$ with $0<Z_U<\infty$, and let $M$ be real symmetric positive definite. For any $\epsilon>0$ and finite integer $L\ge1$, use the leapfrog map and momentum flip of [[def-leapfrog-step-map]], and let $P$ be the phase-space Metropolis kernel correcting $T=R\circ\Phi_\epsilon^L$ with acceptance $\min\{1,\exp(-H(Tz)+H(z))\}$ as in [[alg-leapfrog-hamiltonian-monte-carlo]]. Its target is
$$\nu(dq,dp)=\pi(dq)N_d(0,M)(dp)$$
where $\pi(dq)=Z_U^{-1}e^{-U(q)}dq$. The HMC position transition first refreshes momentum independently, applies $P$, and projects to position. Both are probability kernels, and the resulting position kernel leaves $\pi$ invariant. The finite leapfrog map need not conserve $H$; no irreducibility, uniqueness, convergence, mixing-rate, or CLT conclusion is asserted.

## Facts & Assumptions

**Given:** AC, $d,U,Z_U,M,\epsilon,L$ as in the Statement and the finite leapfrog HMC procedure.

[A1] AC states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] AC implies Countable Choice, as used by the volume-preservation supplier. [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F1] [[def-hamiltonian-monte-carlo]] defines $\pi$, $K$, $H$, and the refreshed momentum law $N_d(0,M)$.

[F2] [[alg-leapfrog-hamiltonian-monte-carlo]] uses the flipped deterministic proposal and the acceptance probability $\min\{1,\exp(-H(z^*)+H(z))\}$.

[F3] For SPD $M$, $N_d(0,M)$ has Lebesgue density $(2\pi)^{-d/2}\det(M)^{-1/2}\exp(-p^TM^{-1}p/2)$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F4] The Borel space of finite-dimensional Euclidean phase space is standard Borel. [[lem-finite-euclidean-space-is-standard-borel]]

[F5] The kick, drift, and momentum flip maps are continuous; their composition $T=R\circ\Phi_\epsilon^L$ is continuous, involutive, and volume-preserving. [[def-leapfrog-step-map]], [[thm-leapfrog-is-reversible-and-volume-preserving]]

[F6] A measurable map $T$ gives the deterministic probability kernel $Q_T(z,A)=\delta_{Tz}(A)$; continuous preimages of Borel sets are Borel. [[def-measure-kernel-and-probability-kernel]], [[def-dirac-measure]], [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F7] The coordinate swap on a finite product is measurable, so transposing the proposal flow defines a measure. [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]

[F8] For a target probability $\nu$ and proposal kernel $Q$, the general Metropolis-Hastings construction uses the greatest common submeasure of the forward flow and its transpose; its acceptance function is a version of the Radon-Nikodym derivative. [[alg-metropolis-hastings-kernel]]

[F9] If two finite measures have densities $f,g$ with respect to one sigma-finite measure, their greatest common submeasure has density $\min\{f,g\}$. [[lem-common-submeasure-density-is-pointwise-minimum]]

[F10] The general Metropolis-Hastings output kernel is reversible and invariant for its target probability. [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]

[F11] Each $\lambda_d$ is Lebesgue measure from [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], restricted to Borel sets. Under Countable Choice, the Borel product agrees with Euclidean Lebesgue measure on Borel phase sets; finite products of sigma-finite measures exist, are unique on measurable rectangles, and obey Tonelli, while finite sums of measures are measures. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets|Borel Lebesgue product agrees with Euclidean Lebesgue measure]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-nonnegative-weighted-sums-of-measures]]

[F12] Scalar multiples, pointwise-defined sums, products, absolute values, and finite maxima and minima of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F13] A probability measure and a probability kernel define a probability measure on their product space by iterated integration. [[lem-prior-and-model-kernel-define-joint-law]]

[F14] A measurable measure-preserving map $T$ satisfies $\int h\circ T\,d\lambda=\int h\,d\lambda$ for every nonnegative measurable $h$. [[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]

[F15] Probability kernels compose by integration; the composition is a probability kernel and is associative. [[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]]

[F16] For product-measurable $C$, the refresh formula $S(q,C)=\int\mathbf1_C(q,p)N_d(0,M)(dp)$ defines a probability kernel from positions to phase space: for fixed $q$ the section measure is countably additive with mass one, and kernel integration makes its evaluation measurable in $q$. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-probability-measure]], [[thm-sections-of-product-measurable-functions-are-measurable]], [[thm-measurability-of-integration-against-a-kernel]]

[F17] The continuous position projection $\operatorname{pr}_q(q,p)=q$ defines the deterministic probability kernel $J((q,p),A)=\mathbf1_A(q)$. [[def-dirac-measure]], [[def-measure-kernel-and-probability-kernel]], [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F18] The phase density $\rho$ is finite-valued, strictly positive, and Borel on $E=\mathbb R^{2d}$. Write $P_q(q,p)=q$, $P_p(q,p)=p$, and $K(p)=\tfrac12\sum_{i,j=1}^d(M^{-1})_{ij}p_ip_j$. The Euclidean coordinate projections $P_q,P_p$ and scalar coordinate maps $p_i:E\to\mathbb R$ are continuous (each projection does not increase Euclidean distance). Since $U$ is continuous, for each Borel $B\subseteq\mathbb R$ the set $(U\circ P_q)^{-1}(B)=P_q^{-1}(U^{-1}(B))$ is Borel by the continuous-preimage theorem. The finite coordinate formula and [F12] make $K\circ P_p$ Borel. The same inverse-image identity, using continuity of the exponential, shows that $e^{-U\circ P_q}$ and $e^{-K\circ P_p}$ are Borel. Their product with the positive normalizing constant in [F1] and [F3] is $\rho$; it is finite and strictly positive because $U,K$ are real-valued and the exponential is positive. [[def-hamiltonian-monte-carlo]], [[thm-nondegenerate-multivariate-normal-law-has-density]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]

[F19] For a probability measure $m$ and probability kernel $K$, $(mK)(A)=\int K(x,A)m(dx)$; invariance means $mK=m$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[F20] If $\tau$ is measurable, then $C\mapsto\mu(\tau^{-1}C)$ is a measure, since inverse images preserve disjoint unions and countable unions. [[def-measure]], [[def-measurable-function-between-measurable-spaces]]

[F21] Integrating a nonnegative measurable function against a Dirac probability measure evaluates it at the point. [[lem-dirac-integral-evaluation]]

[F22] For every product-measurable $C\subseteq E\times E$, the graph map $G_T(z)=(z,Tz)$ is measurable: $z\mapsto z$ and the continuous map $T$ are measurable, so the finite-product coordinate-map lemma applies. Hence $z\mapsto\mathbf1_C(z,Tz)\rho(Tz)$ is nonnegative Borel by [F12] and [F18]. Also, on $E\times E$, the first-coordinate projection is measurable because the preimage of each Borel $A\subseteq E$ is $A\times E$. It follows that $u(x,y)=\rho(x)$ and $v(x,y)=\rho(Tx)$ are positive Borel functions. Their sum $u+v$ is positive Borel; viewed as a map into the subspace $(0,\infty)$, it is measurable. The one-dimensional continuity-algebra result applied to $1$ and the identity on $(0,\infty)$ makes $t\mapsto1/t$ continuous there, so its composition with $u+v$ is Borel. Therefore $u/(u+v)$ and $v/(u+v)$ are Borel by multiplication, without using a quotient-closure claim. [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-algebra-of-continuous-functions]], [[thm-continuous-preimages-of-borel-sets-are-borel]]

## Proof
**Proof technique:** identify the accepted-flow density on the graph of the involution, then compose invariant kernels.

1.1 Let $\lambda=\lambda_d\otimes\lambda_d$ on the product Borel phase space, where $\lambda_d$ denotes the Borel restriction of Lebesgue measure. Put $\phi(q)=Z_U^{-1}e^{-U(q)}$ and $\psi(p)=(2\pi)^{-d/2}\det(M)^{-1/2}e^{-K(p)}$. By [F1] and [F3], these are probability densities for $\pi$ and $N_d(0,M)$. For every product-measurable $C\subseteq E$, Tonelli in [F11] and these density identities give $$\int_E\mathbf1_C(q,p)\phi(q)\psi(p)\,d\lambda=\int_{\mathbb R^d}\phi(q)\left(\int_{\mathbb R^d}\mathbf1_C(q,p)\psi(p)\,d\lambda_d(p)\right)d\lambda_d(q)=\int_{\mathbb R^d}N_d(0,M)(C_q)\,\pi(dq)=\nu(C),$$ where the final equality is the product-law formula (equivalently [F13] for the constant momentum-refresh kernel). Taking $C=E$ also gives $\int\phi(q)\psi(p)\,d\lambda=1$. Thus $\rho(q,p)=\phi(q)\psi(p)$ is a density of $\nu$ with respect to $\lambda$. The Borel product agrees with Euclidean phase-space Lebesgue measure by [F11], and [F18] gives strict positivity of $\rho$. The Countable Choice hypothesis of [F11] follows from [A2]. [A1, A2, F1, F3, F11, F13, F18, given]

1.2 Write $T=R\circ\Phi_\epsilon^L$. By [F5], $T$ is continuous, involutive, and volume-preserving. For each $z$, $Q_T(z,\cdot)=\delta_{Tz}$ is a probability measure by [F6]; for each Borel $A$, $z\mapsto Q_T(z,A)=\mathbf1_A(Tz)$ is measurable by [F6]. Thus $Q_T$ is a probability kernel on the standard-Borel phase space [F4]. Countable Choice needed for [F5] follows from [A2]. [A2, F4, F5, F6, construct]

2.1 Let $\mu(dz,dw)=\nu(dz)Q_T(z,dw)$ and $\tau(z,w)=(w,z)$. By [F13], $\mu$ is a probability measure; [F7] makes $\tau$ measurable, so [F20] makes its pushforward $\mu^{\mathsf T}(C):=\mu(\tau^{-1}C)$ a measure. For product-measurable $C$, [F6] and [F21] give $$\mu(C)=\int\mathbf1_C(z,Tz)\rho(z)\,d\lambda(z),\qquad\mu^{\mathsf T}(C)=\int\mathbf1_C(Tz,z)\rho(z)\,d\lambda(z).$$ The second formula is the definition of transpose. Put $h(x)=\mathbf1_C(x,Tx)\rho(Tx)$, which is nonnegative Borel by [F22]. Since $T^2=I$, $h(Tz)=\mathbf1_C(Tz,z)\rho(z)$, so [F14] gives $\mu^{\mathsf T}(C)=\int\mathbf1_C(z,Tz)\rho(Tz)\,d\lambda(z)$. Therefore [F11] makes $\lambda_0:=\mu+\mu^{\mathsf T}$ a finite measure $$\lambda_0(C)=\int\mathbf1_C(z,Tz)\big(\rho(z)+\rho(Tz)\big)\,d\lambda(z).$$ [A2, F5, F6, F7, F11, F13, F14, F18, F20, F21, F22, step 1.1, algebra]

3.1 For all $(x,y)$ set $$f(x,y)=\frac{\rho(x)}{\rho(x)+\rho(Tx)},\qquad g(x,y)=\frac{\rho(Tx)}{\rho(x)+\rho(Tx)}.$$ They are Borel by [F22], using the product closure in [F12]. By the graph integral formula in step 2.1, $\int_C f\,d\lambda_0=\int\mathbf1_C(z,Tz)\rho(z)\,d\lambda(z)=\mu(C)$; similarly $\int_C g\,d\lambda_0=\mu^{\mathsf T}(C)$. Thus they are densities. By [F9], the common accepted flow has density $\min\{f,g\}$. Since $\rho(z)>0$ by [F18], its derivative relative to the forward flow on that graph is $$\frac{\min\{f,g\}}{f}=\min\{1,\rho(Tz)/\rho(z)\}=\min\{1,e^{-H(Tz)+H(z)}\},$$ where the Gaussian and target normalizing constants cancel. [F1, F3, F9, F11, F12, F18, F22, step 1.1, step 2.1, algebra]

4.1 Thus the acceptance formula in [F2] is a version of the accepted-flow derivative in [F8]. Applying [F10] to target $\nu$ and proposal kernel $Q_T$ shows that the Metropolized phase-space kernel preserves $\nu$. [F2, F8, F10, step 3.1]

5.1 Let $S$ be the refresh kernel of [F16] and $J$ the position kernel of [F17]. With $P$ the phase-space Metropolis kernel from step 4.1, [F15] makes $K:=SPJ$ a probability kernel on positions. By [F13], refreshing a $\pi$-distributed position defines a probability law $m$ on phase space. On Borel rectangles $A\times B$, this law is $m(A\times B)=\int_A N_d(0,M)(B)\,\pi(dq)=\pi(A)N_d(0,M)(B)$; [A2, F11] and uniqueness on rectangles give $m=\nu$. Thus $mP=\nu P=\nu$ by step 4.1, and $(\nu J)(A)=\nu(A\times\mathbb R^d)=\pi(A)$ since $N_d(0,M)$ is a probability. By the kernel-composition definition [F15] and the measure action [F19], the output law under $K=SPJ$ is $\pi K=mPJ=\nu PJ=\nu J=\pi$. This proves invariance of the HMC position kernel. [A2, F1, F11, F13, F15, F16, F17, F19, step 4.1, algebra] ∎
## Remarks

The plan inventory names the BCS-30 result as thm-metropolis-hastings-kernel-preserves-target. The current authored BCS-30 manifest/body instead supplies thm-metropolis-hastings-kernel-is-reversible-and-invariant; the proof above uses that actual body, whose statement includes general-state target invariance under AC.
