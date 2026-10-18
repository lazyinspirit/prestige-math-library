---
id: lem-it-flat-input-coherent-information-achievability
kind: lemma
title: Flat-input coherent information is achievable by subspace codes
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - lem-it-finite-unitary-averaging-decoupling-bound
  - lem-it-exponential-cq-spectral-projectors
  - lem-it-finite-gentle-measurement
  - thm-qc-finite-stinespring-dilation
  - thm-qc-schmidt-decomposition
  - thm-qc-fidelity-purification-characterization
  - thm-qc-purification-existence-and-unitary-equivalence
  - thm-qc-fuchs-van-de-graaf
  - lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
  - thm-it-finite-strong-subadditivity
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-coherent-information-complement-identity
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - thm-natural-logarithm-laws
  - thm-qc-isometry-partial-trace-is-channel
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
    - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
      url: https://arxiv.org/pdf/quant-ph/0304127
      locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $\mathcal N:\mathcal L(A)\to\mathcal L(B)$ be a finite-dimensional channel with $d=\dim A\ge1$. Fix a Stinespring isometry $V:A\to B\otimes E$ satisfying $\mathcal N(X)=\operatorname{Tr}_E(VXV^*)$ for every $X$, and set $\mathcal N^c(X)=\operatorname{Tr}_B(VXV^*)$ and $\tau=I_A/d$. Every $0<R<I_c(\tau,\mathcal N)$ is achievable by isometric subspace entanglement transmission; if $I_c(\tau,\mathcal N)\le0$, rate zero is achieved by a one-dimensional code. An $n$-use code has an isometry $W_n:\mathbb C^{K_n}\to A^{\otimes n}$ and a CPTP decoder to $\mathbb C^{K_n}$; its squared overlap with the maximally entangled target tends to one and $n^{-1}\ln K_n\to R$. More generally, for any isometric inclusion $J:\mathbb C^D\to A$ with $D\ge1$, the same conclusion holds for the flat state $JJ^*/D$ by applying the result to $X\mapsto\mathcal N(JXJ^*)$ and composing encoders with $J^{\otimes n}$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[lem-it-finite-unitary-averaging-decoupling-bound]]: Finite unitary averaging and a decoupling second-moment bound.

[F2] [[lem-it-exponential-cq-spectral-projectors]]: Exponential averaged spectral projectors for a finite cq ensemble.

[F3] [[lem-it-finite-gentle-measurement]]: Gentle measurement bound in finite dimensions.

[F4] [[thm-qc-finite-stinespring-dilation]]: Every finite-dimensional channel has a finite isometric dilation.

[F5] [[thm-qc-schmidt-decomposition]]: Schmidt decomposition.

[F6] [[thm-qc-fidelity-purification-characterization]]: Fidelity Purification Characterization.

[F7] [[thm-qc-purification-existence-and-unitary-equivalence]]: Purifications exist and are unitarily equivalent after padding.

[F8] [[thm-qc-fuchs-van-de-graaf]]: Fuchs Van De Graaf.

[F9] [[lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians]]: Partial trace contracts the trace norm on Hermitian operators.

[F10] [[thm-it-finite-strong-subadditivity]]: Strong subadditivity of finite-dimensional quantum entropy.

[F11] [[def-it-quantum-channel-complement-and-coherent-information]] and [[lem-it-quantum-coherent-information-complement-identity]]: for the fixed dilation, $I_c(\rho,\mathcal N)=S(\mathcal N(\rho))-S(\mathcal N^c(\rho))$.

[F12] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]] and [[thm-natural-logarithm-laws]]: $S(I_A/d)=\ln d$ and $\exp(\ln d)=d$.

[F13] [[thm-qc-isometry-partial-trace-is-channel]]: an isometry followed by a finite partial trace is a CPTP map.

## Proof

1.1 Put $s_B=S(\mathcal N(\tau))$ and $s_E=S(\mathcal N^c(\tau))$. By [F11], $s_B-s_E=I_c(\tau,\mathcal N)$; choose $\eta>0$ with $R<s_B-s_E-2\eta$. On $n$ uses, let $|v_n\rangle=(I\otimes V^{\otimes n})|\Phi_{d^n}\rangle$ in factor order $A'B^nE^n$. Let $P_n,Q_n$ be the spectral projectors for the IID receiver and environment states from [[lem-it-exponential-cq-spectral-projectors]], and let $\epsilon_n\le Ce^{-cn}$ bound the sum of their failure probabilities. The commuting joint projection has acceptance at least $1-\epsilon_n$. For $$|\widehat v_n\rangle=(I_{A'}\otimes P_n\otimes Q_n)|v_n\rangle,$$ the rank-two pure-vector calculation used in gentle measurement gives $$\bigl\||v_n\rangle\langle v_n|-|\widehat v_n\rangle\langle\widehat v_n|\bigr\|_1\le2\sqrt{\epsilon_n}.$$ This follows also by applying the gentle-measurement lemma to the pure state and the joint projection. Let $\omega=\operatorname{Tr}_{B^n}|\widehat v_n\rangle\langle\widehat v_n|$. Its environment rank is at most $e^{n(s_E+\eta)}$. Since the projected vector is pure, $$\operatorname{tr}(\omega^2)=\operatorname{tr}(\omega_{B^n}^2).$$ Moreover $$0\preceq\omega_{B^n}\preceq P_n\mathcal N(\tau)^{\otimes n}P_n\preceq e^{-n(s_B-\eta)}P_n.$$ To verify the first inequality, take the partial trace after $Q_n$; the complementary environment projection produces another positive summand of the original receiver marginal. Hence $\operatorname{tr}(\omega^2)\le e^{-n(s_B-\eta)}$, because its trace is at most one. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, algebra, construct]

2.1 First prove $s_B\le\ln d+s_E$. The one-use Stinespring output of $|\Phi_d\rangle$ is pure on $A'BE$, so [F5] gives $s_B=S(A'E)$. For its marginal state $\omega_{A'E}$, append a one-dimensional register $C$ in a pure state and order the resulting state as $A'CE$. Strong subadditivity [F10] gives $S(A'C)+S(CE)\ge S(C)+S(A'CE)$, that is $S(A')+S(E)\ge S(A'E)$; [F12] gives $S(A')=\ln d$. Hence $s_B\le\ln d+s_E$, so $I_c=s_B-s_E\le\ln d$ and $0<R<I_c$ implies $K_n=\lfloor e^{nR}\rfloor\le d^n$ by [F12]. For an isometry $W:\mathbb C^{K_n}\to A^{\otimes n}$, let $\rho^W_{RE^n}$ be the environment/reference state produced by encoding half of $|\Phi_{K_n}\rangle$. Coefficient matrices give exactly the normalized-compression expression for the unprojected marginal. Use the finite ensemble above with tolerance $e^{-n}$. Apply its compression estimate to $\omega$, and its averaged trace-contraction estimate to the difference between projected and unprojected marginals. Their environment marginals differ by at most $2\sqrt{\epsilon_n}$. The triangle inequality therefore yields $$\mathbb E\left\|\rho^W_{RE^n}-\frac{I_R}{K_n}\otimes\mathcal N^c(\tau)^{\otimes n}\right\|_1 \le6\sqrt{\epsilon_n}+2e^{-n}+\sqrt{2e^{-n(s_B-s_E-R-2\eta)}}\longrightarrow0.$$ Order the finite generator list and its length-$L$ words. For each $n$, take the first word whose displayed norm is at most twice its expectation; if that expectation is zero, take the first zero-norm word. A qualifying word exists by finite averaging. This specifies the entire encoder sequence without countable choices. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F12, step 1.1, given, algebra, construct]

3.1 The product target is purified by $|\Phi_{K_n}\rangle_{RM}\otimes|e_n\rangle_{E^nF}$, with a sufficiently large finite $F$. The encoded Stinespring output is another purification on reference/environment versus receiver. Root-fidelity purification characterization, after adding a pure finite ancilla to the receiver if needed, supplies an isometry on the receiver's purifying space whose overlap with that target is the root fidelity of the two marginals. The fixed-purification form follows from the purification/unitary-equivalence theorem. Fuchs–van de Graaf makes this root fidelity at least one minus half the displayed norm. Trace out the extra decoder factor $F$: the resulting CPTP decoder has squared entanglement fidelity at least the square of that overlap and hence tending to one. The encoder is exactly the isometry $W$; no generating-code/transmitting-code equivalence is assumed. Fix ordered bases throughout. In the purification characterization use the polar/SVD attaining map, extending every kernel partial isometry by the ordered basis completion; in repeated eigenspaces, project the ordered coordinate vectors and Gram–Schmidt in that order. This specifies a decoder at each block length by one formula, rather than choosing a sequence of unrelated attaining maps. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 2.1, given, algebra, construct]

4.1 If $I_c(\tau,\mathcal N)\le0$, choose a unit vector of $A^{\otimes n}$ as the encoder for $K_n=1$. The decoder to $\mathbb C$ is $X\mapsto\operatorname{tr}(X)$, a channel by [F13] using the isometry $x\mapsto1\otimes x$ and tracing $A^{\otimes n}$. Its entanglement fidelity is one and its rate is zero. For a subspace inclusion $J:\mathbb C^D\to A$, the restricted channel $\mathcal N_J(X)=\mathcal N(JXJ^*)$ has dilation $VJ$, and its flat input $I_D/D$ has coherent information $I_c(JJ^*/D,\mathcal N)$ by the fixed-dilation definition. Applying steps 1.1–3.1 to $\mathcal N_J$ and composing each encoder with $J^{\otimes n}$ proves the stated subspace case. [F11, F13, given, construct, algebra] ∎
