---
page: qsm-states-ensembles
title: Normal density states and spectral moments
status: published
library: physics
items:
- def-qsm-density-trace-state
- lem-qsm-matrix-state-calculus
- lem-qsm-finite-matrix-cstar-and-state-duality
- def-qsm-finite-gibbs-purification
- lem-qsm-matrix-exponential-response
- lem-qsm-trace-state-calculus
- post-qsm-normal-measurement-state
- alg-qsm-finite-gibbs-state-preparation
- def-qsm-relative-entropy-domain
- lem-qsm-finite-gibbs-kms
- thm-qsm-finite-gibbs-variational
- thm-qsm-finite-gibbs-circuit-marginal-error
- thm-qsm-trace-cross-log-inequality
- thm-qsm-finite-entropy-composition
- thm-qsm-trace-gibbs-variational
- post-qsm-band-and-grand-preparation
- post-qsm-thermal-gibbs-preparation
- pthm-qsm-commuting-grand-response
- pthm-qsm-equilibrium-unitary-entropy
- pthm-qsm-gibbs-energy-entropy
- pthm-qsm-static-quantum-response
examples: []
requires:
- qm-math-fock-and-equilibrium
- spectral-measures-and-borel-functional-calculus
- td-math-ensembles-and-limits
- unbounded-self-adjoint-operators-and-stones-theorem
- pure-and-mixed-states-ensembles-and-schmidt-decomposition
- registers-tensor-products-and-partial-trace
- quantum-optimization-sdp-and-variational-algorithms
- trace-distance-fidelity-and-information-limits
- finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
- compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
- gelfand-theory-and-commutative-c-star-algebras
- group-c-star-algebras-and-the-fell-unitary-dual
- minimax-lower-bounds-and-information-theoretic-methods
- numerical-optimization-for-statistical-computation
- qm-composites-entanglement-and-reduced-states
- countability-and-uncountability
- rn-as-a-normed-space
- hilbert-space-geometry-and-riesz-representation
- inner-product-spaces-and-orthogonality
- construction-of-r-via-cauchy-sequences
- the-topology-of-euclidean-space
- the-spectral-theorem-and-singular-value-decomposition
- finite-dimensional-normed-spaces-and-riesz-lemma
- matrices-and-the-matrix-of-a-linear-map
- relations-functions-and-quotients
- qm-math-composites
---

## Scope

This page develops finite matrix states and trace-class normal density states on a specified nonzero separable complex Hilbert space. A normal density is a positive trace-class operator of trace one; its state expectation is the bounded trace pairing of [[def-qsm-density-trace-state]]. A self-adjoint observable $A$ is treated through its spectral PVM and the scalar probability law $\mu_\rho$ of [[lem-qsm-trace-state-calculus]]. When $\int|\lambda|\,d\mu_\rho<\infty$, its mean is $m_\rho(A)=\int\lambda\,d\mu_\rho$; when $\int\lambda^2\,d\mu_\rho<\infty$, its variance is $\int(\lambda-m_\rho(A))^2\,d\mu_\rho$. The notation does not authorize products of trace-class operators with unbounded observables outside those domains.

The finite matrix lemma [[lem-qsm-matrix-state-calculus]] proves spectral decomposition and the finite functional calculus locally, including degenerate eigenspaces, trace identities, weighted Cauchy–Schwarz, purity, and extremality. The normal-state item proves the trace pairing from compact spectral and trace-class suppliers; scalar PVM moments are then kept separate from unbounded operator products.

## Entropy, equilibrium, and response

For the fixed positive Boltzmann scale $k_B>0$ (SI units J/K), the entropy $S(\rho)=-k_B\sum_jp_j\log p_j$ may be infinite. [[def-qsm-relative-entropy-domain]] defines finite-dimensional relative entropy on support inclusion and the trace-class cross-log moment without assigning a value to $+\infty-(+\infty)$. [[thm-qsm-trace-cross-log-inequality]] proves that finite cross-log moment forces finite entropy and gives the equality case, conditionally on its exact countable relative-entropy supplier.

For finite matrices, [[thm-qsm-finite-gibbs-variational]] gives the Gibbs free-energy minimum for rank-deficient as well as faithful competitors. [[lem-qsm-finite-gibbs-kms]] proves unitary stationarity and the KMS boundary identity only for finite Hamiltonians. [[thm-qsm-finite-entropy-composition]] proves $S(\sum_at_a\rho_a)\geq\sum_at_aS(\rho_a)$ for finite mixtures, $S(\rho\otimes\sigma)=S(\rho)+S(\sigma)$, and bipartite subadditivity with kernels included; it is not strong subadditivity or an infinite-dimensional data-processing theorem.

The static noncommuting response in [[lem-qsm-matrix-exponential-response]] uses the Kubo–Mori covariance. Ordinary variance is recovered in the commuting case; a noncommuting susceptibility is not silently replaced by a classical variance.

## Preparation and computation

[[post-qsm-normal-measurement-state]] adopts the Born probability interpretation for normal states and sharp spectral measurements. [[post-qsm-thermal-gibbs-preparation]] separately adopts canonical preparation. Neither postulate is derived from unitary dynamics or from the variational theorem.

[[post-qsm-band-and-grand-preparation]] permits a uniform band state only for a nonzero finite-rank spectral projection. Its grand-canonical clause gives the diagonal domains for $H$, $N$, and the self-adjoint sum $H-\mu N$, and requires a nonempty common eigenbasis, nonnegative integer particle counts, and a finite positive partition sum. Response claims additionally require a compact-parameter joint-moment envelope. Here energy and chemical potential are in joules, particle number is dimensionless, $\beta=1/(k_BT)$ is in J$^{-1}$, entropy is in J/K, and free energy is in J. The page makes no claim about noncommuting grand constraints or actual equilibration.

The Gibbs purification and circuit error items are finite-dimensional. The algorithm calls the exact published sparse-oracle procedure with its reference preparation, block access, energy shift, precision, success, and cost contracts; no matrix exponential, trace, or gate is free input. The diagram summarizes only its state-register interface.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[thick,->] (0,3.0) -- (8.2,3.0) node[right] {$S$};
  \draw[thick,->] (0,2.0) -- (8.2,2.0) node[right] {$R$};
  \draw[thick,->] (0,0.7) -- (8.2,0.7) node[right] {$F$};
  \node[left] at (0,0.7) {$|0\rangle$};
  \node[draw,fill=white,minimum width=1.45cm,minimum height=1.35cm] at (1.25,2.5)
    {$\Phi_d$};
  \node[draw,fill=white,minimum width=2.35cm,minimum height=2.8cm] at (3.65,1.95)
    {$\mathcal A_\beta$};
  \node[draw,fill=white,minimum width=1.55cm,minimum height=0.9cm] at (6.1,0.7)
    {$\{\Pi_g,\Pi_b\}$};
  \node[above] at (3.65,3.43) {finite access, shift, and error certificates};
  \node[above] at (7.05,3.0) {$\widetilde\Psi_\beta$ if good};
  \node[below] at (7.05,0.7) {good / bad};
\end{tikzpicture}
```

The upper two wires are the system and reference registers; $\Phi_d$ prepares the stated maximally entangled reference vector. The box $\mathcal A_\beta$ denotes the complete procedure of [[alg-qsm-finite-gibbs-state-preparation]], including its ancillas and all costed access. Measuring the specified flag has a normalized output only on the good branch; the other branch returns FAIL. Conditional on the good branch and shift event, [[thm-qsm-finite-gibbs-circuit-marginal-error]] bounds the system marginal's trace distance from the exact Gibbs density. This is an interface diagram, not a gate-by-gate circuit or a proof.

## Current supplier dependencies

The assigned A-page consumers use the current mathematical suppliers [[lem-nrqm-composites-density-and-scalar-spectral-probability]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-nrqm-composites-finite-partial-trace-and-schmidt]], [[def-kullback-leibler-divergence]], [[thm-kullback-leibler-is-nonnegative]], [[thm-tdmath-general-trace-gibbs-model]], [[thm-tdmath-summable-canonical-differentiation]], and [[thm-tdmath-grand-response-covariance]], together with the local suppliers listed above. Their actual statements and relevant proof clauses were inspected against the current uses. Historical module labels M2/M9/M25/M3/M27/M33/M16/M36 are not current logical dependency IDs and do not make these consumers conditional on absent carriers.

## Design and plan record

The original reservation in research/plan-quantum-statistical-mechanics-track.md L24 lists 17 A-page items. The current page frontmatter contains 21 A-page items, including the finite-matrix duality and finite Gibbs circuit additions, and the B companion contains three examples, for 24 items in this pair. The current page and item dependencies, rather than historical supplier-module labels or stale inventory notes, define the reviewed scope. The pair remains below the 100-item cap.

Primary readings for this page include Watrous, The Theory of Quantum Information, Chapters 2 and 5; Kardar's complete MIT OpenCourseWare Lectures 21 and 23; and Jiang's full arXiv paper on finite exponential-form quantum response. Locators, supported claims, retrieval stamps, and source-result dispositions appear in the batch coverage record.
