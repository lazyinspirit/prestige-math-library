---
id: thm-it-entanglement-assisted-classical-capacity-additive-formula
kind: theorem
title: Additive entanglement-assisted classical capacity formula
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-finite-quantum-information-measures
  - lem-it-entanglement-assisted-information-is-additive
  - lem-it-maximum-coherent-information-attained
  - thm-it-schumacher-quantum-source-coding
  - thm-it-hsw-classical-quantum-channel-capacity
  - thm-qc-schmidt-decomposition
  - def-it-von-neumann-entropy
  - lem-it-flat-input-entanglement-assisted-achievability
  - lem-it-flat-spectral-type-information-approximation
  - lem-it-finite-extension-from-purification-channel
  - thm-it-finite-quantum-mutual-information-data-processing
  - thm-it-fano-inequality
  - thm-it-holevo-measurement-bound
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 8.41 and Lemmas 8.36–8.40"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Bennett, Shor, Smolin, and Thapliyal, Entanglement-assisted capacity of a quantum channel and the reverse Shannon theorem, §II"
      url: "https://arxiv.org/pdf/quant-ph/0106052"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §§21.3–21.5"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional quantum channel. Under the shared-entanglement coding convention in [[def-it-quantum-channel-operational-capacities]],

$$C_E(\mathcal N)=\max_{\rho\in\mathcal D(A)}\bigl(S(\rho)+I_c(\rho,\mathcal N)\bigr)=\max_{\rho\in\mathcal D(A)}I(R;B)_{(\operatorname{id}_R\otimes\mathcal N)(\psi_\rho)},$$

where $\psi_\rho$ is any finite purification of $\rho$ on $R\otimes A$. The value is additive: $C_E(\mathcal N_1\otimes\mathcal N_2)=C_E(\mathcal N_1)+C_E(\mathcal N_2)$ for finite-dimensional channels.

## Facts & Assumptions

**Given:** The finite-dimensional channels, prior shared entanglement, and purification convention in the Statement.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]], [[def-it-von-neumann-entropy]], and [[thm-qc-schmidt-decomposition]]: for a purification $\psi_{RA}$, $I_c(\rho,\mathcal N)=S(B)-S(RB)$ and $S(R)=S(\rho)$.

[F2] [[def-it-finite-quantum-information-measures]]: $I(R;B)=S(R)+S(B)-S(RB)$.

[F3] [[lem-it-maximum-coherent-information-attained]]: the finite-dimensional maximum of $S(\rho)+I_c(\rho,\mathcal N)$ exists.

[F4] [[lem-it-entanglement-assisted-information-is-additive]]: $F(\mathcal N):=\sup_\rho[S(\rho)+I_c(\rho,\mathcal N)]$ is additive for tensor-product channels.



[F5] [[lem-it-flat-input-entanglement-assisted-achievability]]: Flat-input entanglement-assisted achievability by Weyl coding.

[F6] [[lem-it-flat-spectral-type-information-approximation]]: Exact flat spectral-type reduction of channel information.

[F7] [[lem-it-finite-extension-from-purification-channel]]: Every finite extension is obtained from a purification by a channel.

[F8] [[thm-it-finite-quantum-mutual-information-data-processing]]: Data processing for finite quantum mutual information.

[F9] [[thm-it-fano-inequality]]: Finite-alphabet Fano inequality.

[F10] [[thm-it-holevo-measurement-bound]]: The finite Holevo measurement bound.

## Proof

1.1 For any purification $\psi_{RA}$, its reference marginal is $\rho_R$ with the same positive eigenvalues as $\rho_A$, so $S(R)=S(\rho)$ by [F1]. Substituting [F1] into [F2] gives $I(R;B)=S(\rho)+I_c(\rho,\mathcal N)$. Thus the two maximized information expressions in the Statement agree, and [F3] supplies their maximizers. [F1, F2, F3, given, algebra]

1.2 By [F4], the optimized one-use information is additive across every finite tensor power; hence its regularized information value is the same one-use maximum. This proves additivity for the information expression itself. [F4, algebra]

2.1 For any input state $\rho$ and positive integer $m$, exact spectral type reduction gives a flat state $\tau_t$ on an $m$-use input subspace such that $$f_{\mathcal N^{\otimes m}}(\tau_t)\ge m f_{\mathcal N}(\rho)-2d\ln(m+1),\qquad d=\dim A.$$ Apply the flat-state construction to that fixed block channel. For fixed $m$, both its Weyl alphabet and its receiver output dimension are finite, so the HSW theorem applies before any limit in $m$ is taken. The shared resource is the flat type-subspace maximally entangled state for each outer block. Padding fewer than $m$ unused original-channel inputs with a fixed state gives codes for all sufficiently large lengths and no asymptotic rate loss. Therefore $$C_E(\mathcal N)\ge f_{\mathcal N}(\rho)-\frac{2d\ln(m+1)}m.$$ Let $m\to\infty$ and maximize over $\rho$. This proves the general direct bound with precisely the stated unlimited finite-shared-entanglement model. No unrestricted quantum-input HSW single-letter theorem and no inference from Schumacher compression alone is used. [F5, F6, F7, F8, F9, F10, step 1.2, given, algebra, construct]

3.1 Consider any length-$n$ stated EA code with uniform message register $M$, receiver's prior share $S$, channel input $A^n$, and receiver output $B^nS$. Before transmission its joint state is $$\omega_{MA^nS}=\frac1K\sum_m|m\rangle\langle m|\otimes(\mathcal E_m\otimes\operatorname{id}_S)(\sigma).$$ The marginal $MS$ is the product of the uniform message and the original share: each encoder is trace-preserving and hence cannot change $S$. In particular $I(M:S)=0$. Let $\bar\rho_{A^n}$ be its average input. By the extension lemma, the $MSA^n$ state is obtained by a channel on the reference of a purification of $\bar\rho_{A^n}$. After transmission, quantum-mutual-information data processing gives $$I(MS:B^n)\le I(R:B^n)_{(\operatorname{id}\otimes\mathcal N^{\otimes n})(\psi_{\bar\rho})}.$$ Expanding the entropy definitions gives the exact identity $$I(M:B^nS)=I(MS:B^n)-I(S:B^n)+I(M:S).$$ The last term is zero, and $I(S:B^n)\ge0$ by subadditivity. Therefore $$I(M:B^nS)\le I(R:B^n)\le F(\mathcal N^{\otimes n})=nF(\mathcal N).$$ The equality uses the stated optimized-information additivity lemma, whose proof follows local-channel mutual-information data processing and product-state entropy additivity. Write $h(u)=-u\ln u-(1-u)\ln(1-u)$ with continuous endpoint values. Bob's POVM and the Holevo bound imply $I(M;\widehat M)\le I(M:B^nS)$. Fano then gives $$(1-e_n)\ln K_n\le nF(\mathcal N)+h(e_n).$$ Singleton message sets are trivial. Divide by $n$ and let average error tend to zero to bound every achievable rate by $F(\mathcal N)$, without restricting the shared state, its dimension, or the message-dependent CPTP encoders. Together with the general direct bound, purification identity and attained maximum, this proves the entire retained operational formula. Finally applying the identity $C_E=F$ to both channels and their product, and using the stated proved additivity of $F$, proves the capacity additivity assertion as well. [F5, F6, F7, F8, F9, F10, step 2.1, given, algebra, construct] ∎
