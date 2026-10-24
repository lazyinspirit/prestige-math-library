---
id: thm-qa-30-flagged-trace-error-and-cost
kind: theorem
title: "Flagged Gibbs trace estimation: errors, probability floors and charged access"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - lem-qa-30-sdp-trace-mean-ratio-identity
  - thm-qa-30-smooth-fourier-approximation
  - alg-qa-relative-probability-estimation
  - thm-qa-relative-probability-guarantee
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument uses finite-dimensional operators, finite circuits and explicit finite error budgets."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds, Sections 2.2–2.3"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

Let $d\ge1$, $0<\theta\le1/4$, and let a frozen finite Hermitian matrix $G$ satisfy $1\le\lambda_{\min}(G)\le2$ and a supplied finite norm bound. Let $A=A^*$ with $\|A\|\le1$, $Z=\operatorname{tr}(e^{-G})$, $\rho_G=e^{-G}/Z$, and $F_A=\frac12\sqrt{I+A/2}$. Choose $0<e\le\min(1/2,\theta/(100000d))$ and the common normalizations $B_G^+=B_A^+=1+e/8$. Supply finite successful blocks approximating $e^{-G/2}/B_G^+$ and $F_A/B_A^+$ in operator norm within $e$. The baseline observable block approximates $I/(2B_A^+)$ within $e$, using the same normalizations. Supply their unitary circuits, inverses, controlled versions, and the reference preparation $|\Phi_d\rangle=d^{-1/2}\sum_{k=1}^d|k,k\rangle$ at declared cost $C_\Phi$.

Let $V_A$ prepare the reference and apply the Gibbs block followed by the observable block on its first factor, with distinct work registers; success means both work registers zero. Define $V_0$ with the baseline observable block. Supply a rational $c_{\rm rel}$ satisfying $\theta/72<c_{\rm rel}\le\theta/36$ and rational failure budgets in $(0,1)$. Apply [[alg-qa-relative-probability-estimation]] separately to their actual probabilities $q_A,q_0$, with floor $1/(1024d)$ and relative tolerance $c_{\rm rel}$. Form $2(\widehat q_A/\widehat q_0-1)$, allowing additive rounding error at most $\theta/4$, and clip to $[-1,1]$. On the joint relative-estimation good event, the result estimates $\operatorname{tr}(A\rho_G)$ within $\theta$.

The ideal probabilities satisfy $p_0\ge1/(64d)$ and $p_A\ge1/(128d)$; the actual probabilities both exceed $1/(1024d)$. ShiftMin's measured parameters must be frozen once per MMW round before making an indexed trace sampler. A finite coherent implementation retains every internal history and provides an inverse of its entire circuit, without an inverse of a normalized postselected Gibbs state.

With primitive cost $Q_{\rm flag}$ for each complete preparation, inverse or controlled preparation, including reference preparation inside each call, the number of primitive accesses is $\widetilde O(\sqrt d/\theta)$ with confidence logarithms. Thus their charged cost is $\widetilde O((\sqrt d/\theta)Q_{\rm flag})$. Controlled reflections, all AE/QFT operations and coherent arithmetic, comparisons, divisions, rounding and history work are additional charged quantum operations unless included in the declared primitive cost. This query bound alone implies no matching total quantum-gate bound; that stronger profile requires efficient implementations of every such operation and its precision budget.

## Facts & Assumptions

**Given:** The matrices, spectral promises, precision, common normalization, finite block-error bounds, reference circuit, controlled access, inverse access and declared costs in the Statement. The supplied reference is exact; if its state has error $e_\Phi$, add $e_\Phi$ to each successful-vector error below and tighten the numerical budgets accordingly.

[F1] [[lem-qa-30-sdp-trace-mean-ratio-identity]] gives the maximally entangled trace identity and the ideal Gibbs observable ratio by finite trace cyclicity.

[F2] [[thm-qa-30-smooth-fourier-approximation]] supplies finite Fourier/LCU blocks with certified normalization $1+e/8$ for the exponential and observable square root after their declared synthesis errors are allocated. Its remarks give their analytic coefficient budgets; the operator error required here includes every implementation contribution.

[F3] [[alg-qa-relative-probability-estimation]] and [[thm-qa-relative-probability-guarantee]] apply to a finite unitary with supplied controlled sampler, inverse and reflection access and a promised positive probability floor. They return rational relative estimates with the stated confidence, a finite padded cap and the declared sampler query cost. Their retained exact-cyclotomic mode has its charged finite comparison cost; the supplied efficient-grid mode uses polynomial-in-logarithmic-scale reversible rounding. Every other arithmetic cost remains charged.

## Proof

**Given:** The data and finite-circuit access above.

1.1 On disjoint initially zero work registers, projection of both flags after the sequential blocks gives the product of their successful compressions: the second block does not act on the first work register, so a nonzero first-work component cannot contribute to joint success. For any matrix $M$, direct expansion of the orthonormal reference labels gives $\|(M\otimes I)\Phi_d\|^2=\operatorname{tr}(M^*M)/d$. Using $F_A^2=(I+A/2)/4$, trace cyclicity and the common normalizations therefore yields $p_0=Z/[4d(B_G^+)^2(B_A^+)^2]$ and $p_A=p_0[1+\frac12\operatorname{tr}(A\rho_G)]$. No commutation of $A$ with $G$ is needed. Thus $x=p_A/p_0\in[1/2,3/2]$. The cancellation depends on the baseline being $I/(2B_A^+)$, with the same $B_A^+$ as the numerator. [given, F1, algebra]

1.2 Condition on one good ShiftMin measurement for the MMW round. Freeze its energy shift, the resulting matrix $G$, its norm bound, all Fourier cutoffs and coefficient encodings, normalizations and synthesis parameters before constructing indexed TraceMean. Shifting the energy by a scalar multiple of the identity changes no normalized Gibbs density matrix. Every indexed $A_i$ and the separate scalar $C$ estimate use this same frozen Gibbs block. The scalar estimate may be measured once before defining the geometric oracle's region. Repeating or measuring ShiftMin inside an indexed sampler is not justified by the present construction. The Fourier theorem [F2] supplies the finite analytic blocks conditional on these frozen parameters and declared implementation errors. [given, F2, construct, algebra]

1.3 To implement finite adaptive RelProb coherently, copy each would-be measured computational-basis outcome to a fresh retained history register, perform all subsequent arithmetic reversibly and condition further operations on that history. Pad stopped branches by identities to the supplied finite worst-case cap. Fresh repetition workspaces and retained coin registers reproduce independent repetitions. Orthogonal history labels prevent distinct classical branches from interfering, so measuring the final estimate gives the classical procedure's distribution. Retain every AE/QPE target, stop flag, rounded value, comparison bit, arithmetic scratch and coin; reversing the entire padded circuit gives its inverse. Controlled versions require the supplied controlled access or controlled explicit gates and their charged costs. No normalized postselected-state inverse occurs. In this implementation every arithmetic, exact algebraic comparison, division and rounding operation is coherent quantum work, not free classical preprocessing. [given, F3, construct, algebra]

2.1 At least one eigenvalue of $G$ is at most two, so $Z\ge\exp(-2)>1/8$. For an elementary numerical bound, the exponential series through degree three sums to $8/3$ and its remaining tail is at most $(1/24)\sum_{j\ge0}5^{-j}=5/96$, giving $\exp(1)\le87/32<11/4$, hence $\exp(2)<121/16<8$. Since $e\le1/2$, $(B_G^+)^2(B_A^+)^2\le(17/16)^4<2$. Step 1.1 gives $p_0\ge1/(64d)$ and $p_A\ge p_0/2\ge1/(128d)$. The ideal block operators are contractions because $G\succeq I$, $\|A\|\le1$ and their normalizations exceed one. [given, step 1.1, algebra]

3.1 Write ideal blocks as $D,C$ and their actual successful compressions as $D+E_D,C+E_C$, with both error norms at most $e$. Then $\|(C+E_C)(D+E_D)-CD\|\le\|E_CD+CE_D+E_CE_D\|\le2e+e^2$. The same holds for the baseline. Consequently each actual successful vector differs from its ideal vector by at most $2e+e^2\le(5/2)e$. Since the ideal vector has norm at most one, its probability differs by at most $2(5e/2)+(5e/2)^2\le15e$. Thus, putting $\Delta=15e$, $|q_s-p_s|\le\Delta$ for $s=A,0$. The errors compare ideal blocks against the actual finite circuits whose probabilities are estimated, rather than being ignored at each estimator invocation. [given, step 2.1, algebra]

4.1 The actual floor follows from $q_s\ge1/(128d)-15\theta/(100000d)>1/(1024d)$, so [F3] applies to both calls. Put $\kappa=\Delta/p_0\le960de\le\theta/100\le1/400$. Cross multiplication and $x\le3/2$ give $|q_A/q_0-x|\le(\Delta+x\Delta)/(p_0-\Delta)\le(5\kappa/2)/(1-\kappa)\le3\kappa\le3\theta/100$. In particular $q_A/q_0<2$. [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 On both relative-estimation good events, $c_{\rm rel}\le\theta/36\le1/144$, so $|\widehat q_s-q_s|\le c_{\rm rel}q_s$ and $\widehat q_0>0$. Therefore $|\widehat q_A/\widehat q_0-q_A/q_0|\le(q_A/q_0)2c_{\rm rel}/(1-c_{\rm rel})\le5c_{\rm rel}\le5\theta/36$. Combining this with step 4.1, the unrounded trace estimate has error at most $2(3\theta/100+5\theta/36)<\theta/2$. Rational division and final rounding with error at most $\theta/4$ leave error below $\theta$. Clipping cannot increase distance from the true trace in $[-1,1]$. The denominator cannot vanish on this good event. [F3, step 4.1, algebra]

6.1 The floors and caps are uniform in the basis index. Thus step 4.1 and step 5.1 apply conditionally to each index with the allocated good-output probability. They do not assert that every supported label is good. A robust-minimum consumer needs its separate operator-norm cleaning and whole-circuit hybrid theorem; uniform marginal trace accuracy alone does not imply those hypotheses. [given, step 4.1, step 5.1, step 1.3, algebra]

7.1 If finite implementations further approximate the declared access unitaries, let the padded circuit have at most $L$ such slots. Allocate operator error $\zeta\le\delta_{\rm hyb}/(4L)$ per slot, or nonuniform errors summing to at most $\delta_{\rm hyb}/4$. Telescoping the product of unitaries bounds final vector error by the error sum, and measurement total variation by at most twice that sum, hence at most $\delta_{\rm hyb}/2$. Inverse errors have the same norm, and controlled errors obey the same bound when their operator estimates hold uniformly over the controlled index blocks. Apply any coherent robust-minimum consumer's stronger operator-cleaning and global hybrid budget separately. A union bound combines the two relative-estimation failure budgets, scalar/shift failures and these implementation budgets; independence is unnecessary. [given, F3, step 1.2, step 1.3, step 6.1, algebra]

8.1 The floor $1/(1024d)$ and rational tolerance $\theta/72<c_{\rm rel}\le\theta/36$ in [F3] give $\widetilde O(\sqrt d/\theta)$ sampler-plus-inverse accesses for each probability, including its finite cap and confidence logarithms. Two calls preserve this order. Each complete flag preparation, inverse or controlled preparation costs its supplied $Q_{\rm flag}$, including reference preparation of cost $C_\Phi$ inside each invocation, both finite blocks, flag handling and scratch. Add controlled input/success reflections and control phases where not included. All AE/QFT gates and the reversible arithmetic, algebraic comparisons, divisions, rounding, history storage and precision synthesis in step 1.3 and step 7.1 are charged quantum gates and work. [F3] retains a finite but potentially expensive exact-cyclotomic mode, and also supplies efficient-grid rounding with polynomial-in-logarithmic-scale reversible resources. Use the actual selected mode and charge every other arithmetic operation; mere finiteness does not establish polylogarithmic gate complexity. A source-like total gate profile therefore remains conditional on efficient implementations of every charged primitive, including sparse access and memory if used. The access bound and step 5.1 establish the theorem without any such unproved efficiency inference. [F2, F3, step 5.1, step 1.3, step 7.1, algebra] ∎

