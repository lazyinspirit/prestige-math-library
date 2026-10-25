---
id: thm-qa-21-taylor-simulation-error-and-cost
kind: theorem
title: Segmented Taylor error and resources
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-21-segmented-taylor-simulation
  - def-qa-21-truncated-taylor-lcu
  - thm-qa-21-lcu-block-correctness
  - thm-qa-21-taylor-tail-bound
  - thm-qa-21-oblivious-amplification-block-identity
  - lem-qa-21-robust-one-step-oaa-isometry
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-non-negative-operator-characterisations
  - lem-qa-21-pure-state-trace-distance-from-vector-error
  - lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
justified_by: []
proof_strategy: direct
axiom_use: None; finite-dimensional spectral decompositions and finite products suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.5)–(28.25), printed pp.141–143; the robust clean-input leakage and segmented proof are supplied locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eqs. (9.4)–(9.5), printed pp.75–76; the finite segmented error and resource proof is supplied locally."
    - title: John Watrous, The Theory of Quantum Information, §1.1.3, Eqs. (1.181)–(1.183)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "PDF pp.33–34: trace norm and monotonicity under partial trace."
---

## Statement

Let $H=\sum_{j<m}a_jV_j$ be the finite Hermitian-unitary decomposition on a nonzero finite-dimensional complex-inner-product space in [[alg-qa-21-segmented-taylor-simulation]], let $\Lambda=\sum_j|a_j|$, let $t\in\mathbb R$, and let $0<\epsilon\le1$. For the segmented branch, let $r$ be the segment count selected by that algorithm. It satisfies $\Lambda|t|/r\le\ln2$ and $r<\Lambda|t|/\ln2+2$; put $\eta=\epsilon^2/(1600r^2)$.
Choose $K$ by the factorial-doubling rule in that algorithm. Let $V_{\rm impl}$ be its complete circuit or access-circuit unitary, including all work registers, and suppose the sum of its per-call operator-norm error bounds is at most $\epsilon/2$. Let $J_{\rm in}$ append all initial work registers in zero, and let $J_{\rm out}$ append the same work registers in zero to an ideal output. Then
$$\|V_{\rm impl}J_{\rm in}-J_{\rm out}e^{-itH}\|\le\epsilon.$$
For every finite reference space and every input density operator on system plus reference, tracing out the work registers gives output states $\rho_{\rm impl},\rho_{\rm ideal}$ satisfying
$$D(\rho_{\rm impl},\rho_{\rm ideal}):=\tfrac12\|\rho_{\rm impl}-\rho_{\rm ideal}\|_1\le\epsilon.$$
The certified small-time branch returns identity with error at most $\epsilon/3$; it is exact when $t=0$ or $\Lambda=0$. No operator-norm bound on arbitrary nonzero initial work registers or exact cleanup of the output registers is claimed.

On the segmented branch the segment count is $r$, and the truncation order obeys $K=O(1+\log(1/\eta)/\log\log(e+1/\eta))$. With the explicitly supplied controlled indexed term multiplexer of the algorithm, the construction uses at most $3rK$ indexed term queries. If each such multiplexed call is instead assembled from the $m$ individually supplied controlled $V_j$, the corresponding bound is $3rmK$ individual term calls; equality tests, routing, coefficient phases and their inverse/control operations remain separately charged. Independently supplied Taylor SELECT access has only its declared internal query/gate cost, with no inferred $K$-call implementation. It uses exactly $3r$ PREPARE calls, $3r$ PREPARE$^\dagger$ calls, $2r$ SELECT calls, $r$ SELECT$^\dagger$ calls, and $2r$ reflection calls. If the expanded Taylor list has $N_K=\sum_{k=0}^K m^k$ ordered terms and each segment keeps a fresh index register, the index width is $\lceil\log_2(N_K+2)\rceil$ qubits and the $r$ retained registers' total index width is $r\lceil\log_2(N_K+2)\rceil$. All PREPARE table, internal work, term gates, coefficient bits, circuit description, control, inverse, and classical generation costs are charged separately under [[def-qa-20-simulation-error-and-cost-model]].

## Facts & Assumptions

**Given:** The exact finite term list and access model, the specified $r,K,\eta$, and a compiled unitary whose summed operator-norm error is at most $\epsilon/2$.

[L1] [[alg-qa-21-segmented-taylor-simulation]]: its interval procedure obtains a rational lower bound $\epsilon_-$ with $\epsilon/2\le\epsilon_-\le\epsilon$; the identity branch certifies $\Lambda|t|\le\epsilon/4$, and the other branch chooses $r$ and factorial doubling chooses $K$ using $\eta_-:=\epsilon_-^2/(1600r^2)$, where $\eta/4\le\eta_-\le\eta$. In the segmented branch, each segment uses fresh clean coefficient/work registers, pads the Taylor LCU to norm $2$, applies $-WR_0W^\dagger R_0W$, retains all work registers, and has certified sum of per-call errors $\sum_i\delta_i\le\delta_{\rm impl}\le\epsilon/2$.

[F1] [[def-qa-21-truncated-taylor-lcu]]: the Taylor expansion has listed coefficient norm $s_K=\sum_{k=0}^K(\Lambda|h|)^k/k!$ and the two padding coefficients cancel in the represented operator.

[F2] [[thm-qa-21-taylor-tail-bound]]: $\|M_K(h)-e^{-ihH}\|\le e^{\Lambda|h|}(\Lambda|h|)^{K+1}/(K+1)!$, $\|H\|\le\Lambda$, and $\ln2<1$. Its proof supplies the scalar exponential series, the factorial estimate $n!\ge(n/e)^n$, and the factorial-order choice argument.

[F3] [[thm-qa-21-lcu-block-correctness]]: PREPARE/SELECT/PREPARE$^\dagger$ has clean-ancilla block $M/\alpha$ for its listed LCU.

[F4] [[thm-qa-21-oblivious-amplification-block-identity]]: the projected block of $WR_0W^\dagger R_0W$ is $-3M/2+MM^\dagger M/2$ when the input block is $M/2$.

[F5] [[lem-qa-21-robust-one-step-oaa-isometry]]: if $\|M-V\|\le\eta\le1/100$ for a unitary $V$, the phase-corrected circuit on clean input has isometry error at most $10\sqrt\eta$, including leakage.

[F6] [[def-qa-19-finite-matrix-dynamics]] and [[thm-qa-19-matrix-exponential-unitary-properties]]: $U_H(t)=e^{-itH}$ is unitary and $U_H(t+s)=U_H(t)U_H(s)$.

[F7] [[def-qa-20-simulation-error-and-cost-model]]: operator-norm simulation error and query, gate, controlled/inverse, width, coefficient-bit, description, and classical-generation costs are distinct coordinates.

[F8] [[def-qc-density-operator]]: a density operator is a nonnegative trace-one endomorphism of a nonzero finite-dimensional complex-inner-product space.

[F9] [[thm-non-negative-operator-characterisations]]: a nonnegative endomorphism has an orthonormal eigenbasis with nonnegative eigenvalues.

[F10] [[def-qc-partial-trace]]: the partial trace is the finite coordinate contraction over the discarded factor.

[F11] [[def-qc-tensor-register-and-permutation]]: tensor factors have the declared product inner product and ordered product basis.

[F12] [[lem-qa-21-pure-state-trace-distance-from-vector-error]]: for unit vectors $u,v$, $\tfrac12\||u\rangle\langle u|-|v\rangle\langle v|\|_1\le\|u-v\|$.

[F13] [[lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians]]: partial trace does not increase the trace norm of a Hermitian difference.

[F14] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any ordered basis.

[F15] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: a finite-dimensional inner-product reference space has an orthonormal basis.

## Proof

**Given:** As in Facts & Assumptions.

1.1 On the identity branch let $S=\Lambda|t|\le\epsilon/4\le1/4<1$. In an orthonormal eigenbasis as in [F2], each Hamiltonian eigenvalue satisfies $|\lambda|\le\Lambda$. Its scalar-series error obeys $|e^{-it\lambda}-1|\le\sum_{k\ge1}S^k/k!\le\sum_{k\ge1}S^k=S/(1-S)\le\epsilon/(4-\epsilon)\le\epsilon/3$. The diagonal norm calculation in [F2] proves $\|I-U_H(t)\|\le\epsilon/3$, and the error is zero if $t=0$ or $\Lambda=0$. Otherwise step 2 chooses a finite $r$ with $x:=\Lambda|t|/r\le\ln2$; no lower bound on $S$ is needed. Hence $s_K\le e^x\le2$, and cancelling padding makes the norm exactly $2$ without changing $M_K$. [given, L1, F1, F2, F6, algebra, cases]

1.2 By [F3], the padded circuit has block $M_K(h)/2$. The uncorrected amplified block is $-3M_K(h)/2+M_K(h)M_K(h)^\dagger M_K(h)/2$ by [F4], so the explicit phase correction in [L1] gives the corresponding opposite-sign block; [F5] supplies the needed full isometry estimate including leakage. The Taylor-tail rule gives $\|M_K(h)-U_H(h)\|\le\eta$, and $\eta\le1/1600<1/100$. Apply [F5] with $V=U_H(h)$ to obtain a clean-input isometry error at most $10\sqrt\eta=\epsilon/(4r)$ for each segment, including any finite reference and all earlier retained registers. [given, L1, F2, F3, F4, F5]

1.3 By [L1], the scheduler uses the positive rational $\eta_-:=\epsilon_-^2/(1600r^2)$, where $\eta/4\le\eta_-\le\eta$. The loop terminates because $n!$ tends to infinity. Since $\epsilon_-\le\epsilon\le1$ and $r\ge1$, $\eta_-\le1/1600$; hence $L_-:=\ln(4/\eta_-)>1$. For $N=\lceil16eL_-/\ln(e+L_-)\rceil$, the inequalities $\ln(e+L_-)\le\sqrt{e+L_-}$ and $e+L_-<4L_-$ give $N/e>4\sqrt{e+L_-}$, hence $\ln(N/e)>\tfrac12\ln(e+L_-)$. Therefore $N\ln(N/e)\ge8eL_-\ge L_-+\ln4$. Monotonicity of $\ln s$ gives $\ln(N!)=\sum_{k=1}^N\ln k\ge\int_1^N\ln s\,ds=N\ln N-N+1$, so $N!\ge(N/e)^N\ge4/\eta_-$. The least power of two at least $N$ is less than $2N$ and already meets the factorial comparison, so the scheduler stops at some $n<2N$. Thus $K=n-1=O(1+L_-/\ln(e+L_-))$. Since $\eta/4\le\eta_-\le\eta$ and $\eta\le1/1600$, this is $O(1+\log(1/\eta)/\log\log(e+1/\eta))$. The rule uses only a finite integer loop, and its cost is a separate classical coordinate. For the error estimates, $e^xx^n/n!\le2/n!\le\eta_-/2\le\eta/2$ because $x\le\ln2<1$. [given, L1, F2, algebra]

2.1 The ideal segment maps each input to the same system evolution $U_H(h)$ and a fresh zero register. Telescoping the $r$ compositions, every intervening exact segment is an isometry and has norm $1$, so the total access-circuit isometry error is at most $r\epsilon/(4r)=\epsilon/4$. The ideal system factor is $U_H(h)^r=U_H(t)$ by [F6]. [step 1.2, F6, algebra]

3.1 Replacing the exact access calls by their compiled unitaries changes the full circuit in operator norm by at most the sum of their per-call errors: expand the product difference as a telescoping sum and use norm $1$ for each unitary factor. The declared sum is at most $\epsilon/2$ by [L1]. The triangle inequality therefore gives $\|V_{\rm impl}J_{\rm in}-J_{\rm out}U_H(t)\|\le\epsilon/4+\epsilon/2=3\epsilon/4\le\epsilon$. [given, L1, step 2.1, algebra]

4.1 First take a pure unit input, including any finite reference. The segmented isometry bound in step 3.1, or the identity-branch bound in step 1.1 tensored with that reference, gives vector error at most $\epsilon$. For the identity branch, write a system-reference vector as $\sum_jx_j\otimes f_j$ in an orthonormal reference basis [F15]; [F11] makes its squared error the sum $\sum_j\|(I-U_H(t))x_j\|^2\le(\epsilon/3)^2\sum_j\|x_j\|^2$, justifying that extension explicitly. Then [F12] bounds the joint pure-state trace distance by $\epsilon$. The difference of the two joint density operators is Hermitian, so applying partial-trace contractivity [F13] over all work registers preserves this bound. [step 1.1, step 3.1, F10, F11, F12, F13, F15]

5.1 For a general input density operator, [F8]–[F9] give an orthonormal eigenbasis $(e_j)$ with nonnegative eigenvalues $\lambda_j$; [F14] and trace one imply $\sum_j\lambda_j=1$. Take an auxiliary reference space with orthonormal basis $(f_j)$, which exists by [F15], and set $\Psi=\sum_j\sqrt{\lambda_j}\,e_j\otimes f_j$. By the product inner product [F11], $\|\Psi\|^2=\sum_j\lambda_j=1$. In the product basis, its projector has entries $X_{(i,j),(i',j')}=\sqrt{\lambda_i\lambda_{i'}}\,\mathbf1_{i=j}\mathbf1_{i'=j'}$. The coordinate rule [F10] gives $(\operatorname{Tr}_{\rm ref}X)_{ii'}=\sum_jX_{(i,j),(i',j)}$, which is $\lambda_i$ if $i=i'$ and $0$ otherwise, exactly the matrix of $\rho$. Thus $\Psi$ purifies $\rho$. Apply step 4.1 with the original reference and this purifying reference, then trace out the work registers and the purifying register; [F13] again preserves the bound. Therefore the reduced outputs for $\rho$ differ in trace distance by at most $\epsilon$. [given, F8, F9, F10, F11, F13, F14, F15, step 4.1, algebra]

6.1 In each segment the chronological OAA circuit has two forward $W$ factors, one $W^\dagger$ factor, and two reflections [L1]. Expanding each $W=P^\dagger S_{\rm sel}P$ gives three PREPARE and three PREPARE$^\dagger$ calls, two SELECT and one SELECT$^\dagger$ call per segment. In the indexed term-query implementation [L1], a length-$k$ tuple acts by processing its labels in reverse order, so its $K$ conditionally active positions implement exactly $V_{j_1}\cdots V_{j_k}$. The phase and invalid-label rules are separately specified. Thus each SELECT or its adjoint uses at most $K$ controlled indexed term calls and the total is at most $3rK$. If only individual controlled $V_j$ are used to assemble a multiplexer, apply the $j$th unitary conditioned on label equality, for every $j<m$: exactly one block is active on each valid label, so this implements the same direct sum with at most $m$ individual calls per indexed call. This gives $3rmK$ individual calls with the declared label/routing/phase costs; no such decomposition bound is inferred for an arbitrary supplied SELECT. The expanded coefficient list has $N_K=\sum_{k=0}^Km^k$ ordered terms and two retained padding labels, giving the stated widths. Internal work and all other resource coordinates are charged as in [F7]. The identity branch has no queries or retained segment registers. [L1, F1, F7, given, algebra] ∎
