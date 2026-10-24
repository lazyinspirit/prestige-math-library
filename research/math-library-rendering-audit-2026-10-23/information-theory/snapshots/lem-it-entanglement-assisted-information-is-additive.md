---
id: lem-it-entanglement-assisted-information-is-additive
kind: lemma
title: Additivity of optimized entanglement-assisted information
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-coherent-information-complement-identity
  - def-it-finite-quantum-information-measures
  - thm-it-finite-quantum-mutual-information-data-processing
  - thm-it-finite-strong-subadditivity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-qc-channels-compose-and-tensor
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - thm-natural-logarithm-laws
  - def-it-von-neumann-entropy
  - def-qc-density-operator
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all tensor products and state spaces are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Lemma 8.38"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Charles H. Bennett, Peter W. Shor, John A. Smolin, and Ashish V. Thapliyal, Entanglement-assisted capacity of a quantum channel and the reverse Shannon theorem, §IV"
      url: "https://arxiv.org/pdf/quant-ph/0106052"
---

## Statement

For a finite-dimensional channel $\mathcal N:A\to B$, define

$$f_{\mathcal N}(\rho):=S(\rho)+I_c(\rho,\mathcal N),\qquad F(\mathcal N):=\sup_{\rho\in\mathcal D(A)}f_{\mathcal N}(\rho).$$

For any two finite-dimensional channels $\mathcal N_i:A_i\to B_i$,

$$F(\mathcal N_1\otimes\mathcal N_2)=F(\mathcal N_1)+F(\mathcal N_2).$$

## Facts & Assumptions

**Given:** The channels, finite input spaces, and coherent-information convention in the Statement.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]] and [[lem-it-quantum-coherent-information-complement-identity]]: for a fixed dilation $A_i\to B_i\otimes E_i$, $I_c(\rho,\mathcal N_i)=S(B_i)-S(E_i)$.

[F2] [[def-it-finite-quantum-information-measures]]: $I(X:Y)=S(X)+S(Y)-S(XY)$ for finite bipartite states.

[F3] [[thm-it-finite-quantum-mutual-information-data-processing]]: applying local channels to two registers cannot increase their quantum mutual information.

[F4] [[thm-it-finite-strong-subadditivity]]: for every finite tripartite state, $S(XY)+S(YZ)\ge S(Y)+S(XYZ)$.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite-dimensional density operators have finite orthonormal eigenbases.

[F6] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]]: a density operator on a register of dimension $d$ has entropy at most $\ln d$.

[F7] [[thm-natural-logarithm-laws]]: $\ln$ is increasing, $\ln1=0$, and $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

[F8] [[def-qc-density-operator]] and [[def-it-von-neumann-entropy]]: a density operator is non-negative with trace one, and its entropy is $-\sum_{j:\lambda_j>0}\lambda_j\ln\lambda_j$ in an orthonormal eigenbasis.

## Proof

1.1 Strong subadditivity [F4] with the middle register one-dimensional gives subadditivity $S(XY)\le S(X)+S(Y)$ for every bipartite state: tensoring with the unique one-dimensional state leaves all nontrivial spectra unchanged. The proof of this consequence uses the natural-log entropy convention and its product-spectrum calculation, with [F7] supplying the logarithm product law. Thus $I(X:Y)\ge0$ by [F2]. [F2, F4, F7, given, algebra]

2.1 Fix an arbitrary state $\rho_{A_1A_2}$, and set $\rho_i$ to its marginals, $\omega_{B_1B_2}=(\mathcal N_1\otimes\mathcal N_2)(\rho)$, and $\eta_{E_1E_2}=(\mathcal N_1^c\otimes\mathcal N_2^c)(\rho)$ using product Stinespring dilations. Expanding each entropy by [F1] and each mutual information by [F2] yields $f_{\mathcal N_1\otimes\mathcal N_2}(\rho)-f_{\mathcal N_1}(\rho_1)-f_{\mathcal N_2}(\rho_2)=-I(A_1:A_2)_\rho-I(B_1:B_2)_\omega+I(E_1:E_2)_\eta$. By [F3] applied to the local complementary channels, $I(E_1:E_2)_\eta\le I(A_1:A_2)_\rho$. Step 1.1 gives $I(B_1:B_2)_\omega\ge0$, so the displayed difference is nonpositive. Therefore $F(\mathcal N_1\otimes\mathcal N_2)\le F(\mathcal N_1)+F(\mathcal N_2)$. [F1, F2, F3, step 1.1, algebra]

3.1 For product inputs $\rho_1\otimes\rho_2$, diagonalize each density operator using [F5]. The positive eigenvalues of the product are $\lambda_i\mu_j$, so expanding $-\sum_{i,j}\lambda_i\mu_j\ln(\lambda_i\mu_j)$ and applying [F7] proves entropy additivity and hence $f_{\mathcal N_1\otimes\mathcal N_2}(\rho_1\otimes\rho_2)=f_{\mathcal N_1}(\rho_1)+f_{\mathcal N_2}(\rho_2)$. For any density operator, [F5] and [F8] give nonnegative eigenvalues summing to one, so every positive eigenvalue lies in $(0,1]$. Monotonicity and $\ln1=0$ in [F7] therefore make each term $-\lambda_j\ln\lambda_j$ nonnegative. Together with [F6], this bounds each of $S(\rho_i)$, $S(\mathcal N_i(\rho_i))$, and $S(\mathcal N_i^c(\rho_i))$ between zero and the logarithm of its fixed register dimension, so $f_{\mathcal N_i}$ is bounded above and below and its supremum is finite. For any $\delta>0$, choose $\rho_i$ with $f_{\mathcal N_i}(\rho_i)>F(\mathcal N_i)-\delta$. The product input gives $F(\mathcal N_1\otimes\mathcal N_2)\ge F(\mathcal N_1)+F(\mathcal N_2)-2\delta$. Letting $\delta\downarrow0$ proves the reverse inequality. [F1, F5, F6, F7, F8, step 2.1, algebra, choose] ∎
