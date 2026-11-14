---
id: lem-qec-author-252014cb5616-cascade-choi-energy-dependence
kind: lemma
domain: mathematics
title: Cross-block coherences can change Choi weights in a finite cascade
status: draft
origin: session
deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - lem-qec-distinguishability-cg-rate-identity
  - lem-qec-prereq-trajectory-dyson-expansion
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  lem-qec-distinguishability-cg-rate-identity: mathematical-premise
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 3
formulation_deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
argument_deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - lem-qec-distinguishability-cg-rate-identity
  - lem-qec-prereq-trajectory-dyson-expansion
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
---

## Statement

On $V_0\oplus V_1\oplus V_2$, take $H=\omega_0\sum_{J=0}^2J(J+1)P_J$ and $L_\delta=\sqrt\gamma\sum_{J=1}^2\sqrt{(2J+1)/(2J-1)}\sum_{\substack{m=-J,\ldots,J\\|m+\delta|\leq J-1}} C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$, $\delta=-1,0,1$, $\gamma>0$, $\omega_0\in\mathbb R$, and $t\geq0$, with zero lift. Here $P_J$ is the orthogonal projection onto $V_J$; the inner sum includes only the displayed valid magnetic labels, and every excluded source entry of $L_\delta$ is zero. Put $a=1-e^{-\gamma t}$, $b=(5\gamma t/3)e^{-\gamma t}$ and $c=\gamma\sqrt{5/3}e^{-\gamma t/2}\int_0^t e^{-\gamma s/2+i2\omega_0s}ds$. For these matrices, let $\mathcal N_t=e^{t\mathcal L}$ be the finite GKSL channel, with $\mathcal L(X)=-i[H,X]+\sum_{\delta=-1}^1(L_\delta XL_\delta^\dagger-\{L_\delta^\dagger L_\delta,X\}/2)$. The unnormalized Choi eigenvalues of $\mathcal N_t$ are $1+8e^{-\gamma t}$ once, the two eigenvalues $\lambda_\pm=(a+b\pm\sqrt{(a-b)^2+4|c|^2})/2$ each three times, and $p_2=1-(1+\gamma t)e^{-\gamma t}$ five times. All remaining eigenvalues are zero. In particular this full Choi spectrum need not be independent of $\omega_0$, even when the jumps and $\gamma$ are held fixed.

## Facts & Assumptions

[F1] Use the finite spin bases and ordered Clebsch–Gordan convention. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] The total squared coefficient for each source state is (2J−1)/(2J+1). [[lem-qec-distinguishability-cg-rate-identity]]

[F3] The finite channel is the exact sum of no-jump and ordered-jump amplitudes with $E(u)=\exp(u[-iH-\sum_\delta L_\delta^\dagger L_\delta/2])$. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F4] Vectorized Kraus amplitudes sum to the unnormalized Choi matrix, whose eigenvalues are canonical weights. [[lem-qec-prereq-canonical-choi-weights]]

[F5] For finite matrices with Hermitian $H$ and $t\geq0$, the GKSL generator in the Statement defines the channel $\mathcal N_t=e^{t\mathcal L}$, and $\operatorname{Tr}(\mathcal N_t(X))=\operatorname{Tr}(X)$ for every matrix $X$. [[def-qec-prereq-finite-gksl-channel-interface]]

## Proof

**Given:** The finite matrices and $t\geq0$. **Goal:** Compute the full Choi spectrum and identify its energy dependence.

1.1 For each fixed $\delta$, distinct source basis vectors with nonzero jump coefficients have distinct destination basis vectors within each source block; zero coefficients contribute nothing. Different destination blocks are orthogonal. Summing the squared coefficients using [F2] gives $\sum_\delta L_\delta^\dagger L_\delta=\gamma(P_1+P_2)$. Thus $E(u)$ acts as one on $V_0$, as $e^{-\gamma u/2-i2\omega_0u}$ on $V_1$ and as $e^{-\gamma u/2-i6\omega_0u}$ on $V_2$. At most two downward jumps are nonzero. [F1, F2, F3]

1.2 Put $A_\delta=L_\delta P_1$ and $B_\delta=L_\delta P_2$. These six matrices are mutually orthogonal in the Hilbert–Schmidt inner product except for the intended pairing in each channel, which is also orthogonal because its source and target blocks differ. Their squared norms are $\gamma$ and $5\gamma/3$, respectively. Explicitly, for $J=1$ each fixed $\delta$ has one squared CG coefficient $1/3$. For $J=2$, the $\delta=0$ nonzero squares are $3/10,4/10,3/10$, and for $\delta=+1$ they are $6/10,3/10,1/10$; $\delta=-1$ is their reflection. To check the finite coefficient calculation, a highest-weight vector of the spin-one summand in $V_1\otimes V_2$ is $10^{-1/2}(|1,1\rangle|2,0\rangle-\sqrt3|1,0\rangle|2,1\rangle+\sqrt6|1,-1\rangle|2,2\rangle)$. Applying the total raising operator gives zero, and its squared norm is one; applying the total lowering operator and dividing by $\sqrt2$ gives its magnetic-zero vector, with coefficients $\sqrt{3/10},-\sqrt{4/10},\sqrt{3/10}$. A second lowering and division by $\sqrt2$ gives the reflected magnetic-minus-one vector. These exhaust the spin-one summand and give the listed squares. For $V_1\otimes V_1$, the normalized spin-zero vector has coefficients $(1,-1,1)/\sqrt3$ in the three weight-zero product states. Thus the sums and norms are as stated. Multiplication by the stated prefactors gives the norms. [F1, F2]

2.1 By [F3], the one-jump amplitude for channel $\delta$ at $s$ equals $e^{-\gamma s/2-i2\omega_0s}A_\delta+e^{-\gamma t/2-i2\omega_0t-i4\omega_0s}B_\delta$. In the normalized vectorized basis $A_\delta/\sqrt\gamma,B_\delta/\sqrt{5\gamma/3}$ its Choi integral is a two-by-two Hermitian block with diagonal $a,b$ and off-diagonal of modulus $|c|$; the harmless constant phase $e^{i2\omega_0t}$ cancels from that modulus. Different $\delta$ blocks have disjoint matrix-unit supports. Diagonalizing this two-by-two matrix gives $\lambda_\pm$ with the stated multiplicities. [F3, F4, step 1.1, step 1.2]

3.1 The no-jump Choi term is one vector outer product on the block-preserving matrix units and has nonzero eigenvalue $\|E(t)\|_{\mathrm{HS}}^2=1+8e^{-\gamma t}$. Every two-jump amplitude maps $V_2$ to the one-dimensional $V_0$. Its output is therefore a scalar times the ground projector. Trace preservation from [F5] and step 1.1 show that, on any input matrix supported in $V_2$, the no-jump trace is $e^{-\gamma t}\operatorname{Tr}X$ and the exactly-one-jump trace is $\gamma t e^{-\gamma t}\operatorname{Tr}X$: in a one-jump trajectory the entire duration is in excited blocks and the summed jump rate is $\gamma$. The remaining trace is $p_2\operatorname{Tr}X$. Hence the two-jump map is $X\mapsto p_2\operatorname{Tr}(P_2X)P_0$, with five Choi eigenvalues $p_2$. Its matrix-unit support is disjoint from the zero- and one-jump supports. There are no further terms. [F2, F3, F4, F5, step 1.1, step 2.1]

4.1 The formula $|c|^2=(5\gamma^2/3)e^{-\gamma t}[1+e^{-\gamma t}-2e^{-\gamma t/2}\cos(2\omega_0t)]/[(\gamma/2)^2+4\omega_0^2]$ follows by integrating the exponential in its definition. At fixed $t>0$, its numerator is bounded while the denominator diverges as $\omega_0\to\infty$, whereas it is nonzero at generic finite $\omega_0$. Consequently the displayed one-jump eigenvalues can vary with $\omega_0$, despite fixed dissipative coefficients. Unitary changes of input or output frame conjugate the Choi matrix by a tensor-product unitary and preserve its eigenvalues, so this variation cannot be removed by a frame convention. [F4, step 2.1, step 3.1] ∎
