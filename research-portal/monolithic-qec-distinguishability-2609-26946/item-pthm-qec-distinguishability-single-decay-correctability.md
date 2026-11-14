---
title: Fast-interval decay approaches a correctable coherent error
status: draft
research_item: pthm-qec-distinguishability-single-decay-correctability
dependency_level: 19
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF pp. 15–16, Eqs. (S4.7)–(S4.9) and opening paragraph of p. 16
      statement: The article states that its detected-decay state has a perfectly
        recoverable error form for a code correcting the transitions, including
        the Æ or Aydin–Barg code.
      hypotheses: The article's idealized single-manifold decay model and encoded
        initial state.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution. The article is not used as proof of its own claim; the
        conditional calculation below uses the declared suppliers.
---

PDF p. 16: ` Opening continuation of S4 `

## Prerequisites

- [pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)
- [pthm-qec-distinguishability-ae-correction](item-pthm-qec-distinguishability-ae-correction)
- [pthm-qec-distinguishability-aydin-barg-correction](item-pthm-qec-distinguishability-aydin-barg-correction)
- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)
- [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)
- [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)
- [math:thm-qc-trace-distance-channel-contractivity](https://alphabetamath.cc/item/thm-qc-trace-distance-channel-contractivity)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive)
- [math:thm-qc-trace-preserving-kraus-normalization](https://alphabetamath.cc/item/thm-qc-trace-preserving-kraus-normalization)
- [physics:lem-qsm-dt-finite-matrix-trace-ideal](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-matrix-trace-ideal)
- [math:thm-singular-value-decomposition](https://alphabetamath.cc/item/thm-singular-value-decomposition)
- [math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)
- [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)


## Statement

Adopt the finite lifted model and its physical and spectral hypotheses, including the Axiom of Choice, Countable Choice and Dependent Choice. Let the input code be either the specified Æ code in the $J=5$ block or the specified signed Aydin–Barg code in the $J=4$ block, and write $J$ for its host spin. Choose a finite set $S$ of model spin labels containing $J$ and $J-1$, with $|J'-J|\leq1$ for every $J'\in S$. Let $V$ be its logical isometry, and let $\rho_0=V\rho V^*$ for a logical density operator $\rho$. A density operator is positive semidefinite with trace one. Tensor rank one denotes the transformation law of a coherent spherical-tensor component, not matrix rank and not an individually resolved magnetic transition.

For the ideal check at interval $\tau>0$, the first-order normalized detected-decay state of the single-decay map is exactly decoded to $\rho$ by one recovery channel that corrects the complete selected coherent order-one tensor error span. For fixed finite model parameters, the exact checked decay branch has probability $p_\tau=\gamma\tau+O(\tau^2)$, and its normalized state is decoded to $\rho$ with trace-norm error $O(\tau)$ as $\tau\downarrow0$. Known diagonal phase calibration over an interval of length at most $\tau$ preserves this limit. The constants may depend on the fixed model and chosen code, but are uniform over logical density operators.

The corresponding unnormalized decoded branch differs from $p_\tau\rho$ by $O(\tau^2)$ in trace norm. This branch estimate alone does not establish an accumulated repeated-check channel bound, a multiple-decay probability, or a laboratory performance claim.

## Statement references

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)

[pthm-qec-distinguishability-ae-correction](item-pthm-qec-distinguishability-ae-correction)

[pthm-qec-distinguishability-aydin-barg-correction](item-pthm-qec-distinguishability-aydin-barg-correction)

[def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)

## Facts & Assumptions

[F1] In the stipulated finite lifted model, the three downward jumps are the specified coherent Clebsch–Gordan sums, with $\gamma>0$ and a finite real diagonal Hamiltonian. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] For an input supported in one excited block, the first-order checked decay branch is $B_\tau=\tau\sum_\delta L_\delta\rho_0L_\delta^*$, has trace $\gamma\tau$, and differs from the exact checked branch by $O(\tau^2)$ in induced matrix spectral norm at fixed finite model parameters. [pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)

[F3] For the selected set $S$ in the Statement, each specified code satisfies the scalar pair-product condition for the complete selected order-one coherent tensor span. [pthm-qec-distinguishability-ae-correction](item-pthm-qec-distinguishability-ae-correction) [pthm-qec-distinguishability-aydin-barg-correction](item-pthm-qec-distinguishability-aydin-barg-correction) [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F4] A finite Kraus channel between finite input and output spaces satisfying scalar pair products has a decoded recovery channel on the entire output space. The recovery is obtained by diagonalizing its scalar Gram matrix, decoding its nonzero orthogonal error ranges, and sending the remaining output orthogonal complement to a fixed logical state; its off-diagonal error action is the corresponding scalar coefficient times the logical operator. [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)

[F5] A calibrated cycle uses specified diagonal lift values and elapsed time; calibration does not assert observation of an unknown jump time. A normalized conditional-state estimate must be weighted by its branch probability before it contributes to an unconditional channel estimate. [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)

[F6] For a finite-dimensional quantum channel $\Phi$ and density operators $\sigma,\eta$ on its input space, $\|\Phi(\sigma)-\Phi(\eta)\|_1\leq\|\sigma-\eta\|_1$. This is trace-distance contractivity, with $D(\sigma,\eta)=\tfrac12\|\sigma-\eta\|_1$. [math:thm-qc-trace-distance-channel-contractivity](https://alphabetamath.cc/item/thm-qc-trace-distance-channel-contractivity)

[F7] A finite operator sum $\Phi(X)=\sum_a K_aXK_a^*$ between finite-dimensional complex inner-product spaces is completely positive, and it is trace preserving if and only if $\sum_a K_a^*K_a=I$ on its input space. [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive) [math:thm-qc-trace-preserving-kraus-normalization](https://alphabetamath.cc/item/thm-qc-trace-preserving-kraus-normalization)

[F8] On a nonzero finite-dimensional complex Hilbert space, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ is a norm, $|\operatorname{Tr}X|\leq\|X\|_1$, $\|YX\|_1\leq\|Y\|_{\rm op}\|X\|_1$, and $\|XY\|_1\leq\|Y\|_{\rm op}\|X\|_1$. Unitary conjugation preserves this norm. [physics:lem-qsm-dt-finite-matrix-trace-ideal](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-matrix-trace-ideal)

[F9] A linear map between finite-dimensional complex inner-product spaces has a singular-value decomposition with orthonormal input and output bases and positive singular values $s_j$, so $Xe_j=s_jf_j$ for its nonzero terms. [math:thm-singular-value-decomposition](https://alphabetamath.cc/item/thm-singular-value-decomposition)

[F10] For each complex $z$, the scalar exponential is the convergent series $e^z=\sum_{n=0}^{\infty}z^n/n!$. [math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)

[F11] For real $x,y$, $|\exp(x+iy)|=e^x$. In particular $|e^{iy}|=1$, since the series in [F10] gives $e^0=1$. [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice and all physical and spectral hypotheses of the finite lifted model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

## Proof

**Given:** The stipulated model, one of the two code isometries, a logical density operator, and the ideal check in the Statement.

**Goal:** Specify a decoder for the full coherent error span and establish the one-branch recovery and short-interval bounds.

1.1 Let $H_{\rm full}$ be the full finite model space in [F1], let $H_{\rm sel}$ be the direct sum of the blocks labelled by $S$ in [F3], and let $\iota:H_{\rm sel}\to H_{\rm full}$ be its isometric inclusion. Regard $V$ as mapping into $H_{\rm sel}$ and put $P=VV^*$ there. Choose a finite spanning list $E_1,\ldots,E_m$ for the selected coherent tensor span. By [F3], $PE_i^*E_jP=c_{ij}P$. Each $c_{ii}\geq0$, and $c=\sum_i c_{ii}>0$ because the span contains the identity and the logical space is nonzero. Define $A_i=\iota E_iP/\sqrt c$ and $A_0=\iota(I_{H_{\rm sel}}-P)$, all with input $H_{\rm sel}$ and output $H_{\rm full}$. Since $\iota^*\iota=I_{H_{\rm sel}}$, their adjoint-square sum is $P+(I_{H_{\rm sel}}-P)=I_{H_{\rm sel}}$, so [F7] makes their finite operator sum a completely positive, trace-preserving channel. Their scalar pair products on the code are $c_{ij}/c$, and all such compressed products involving $A_0$ vanish. [given, F1, F3, F7, algebra]

1.2 Let $B_\tau^{\rm ex}$ be the exact unnormalized checked decay output, and let $d=\dim H_{\rm full}\geq1$. For any endomorphism $X$ of this space, [F9] gives singular values $s_j$ and unit vectors with $Xe_j=s_jf_j$, so $s_j\leq\|X\|_{\rm op}$. By the trace-norm definition in [F8], $\|X\|_1=\sum_j s_j\leq d\|X\|_{\rm op}$. Thus [F2] gives $\varepsilon_\tau:=\|B_\tau^{\rm ex}-B_\tau\|_1=O(\tau^2)$ uniformly for density inputs; their operator norm is at most one, since their nonnegative eigenvalues sum to one. By [F8], $|\operatorname{Tr}(B_\tau^{\rm ex}-B_\tau)|\leq\varepsilon_\tau$. Taking traces gives $p_\tau=\operatorname{Tr}B_\tau^{\rm ex}=\gamma\tau+O(\tau^2)$. Since $\gamma>0$, for all sufficiently small positive $\tau$ we have $p_\tau\geq\gamma\tau/2>0$. [F1, F2, F8, F9, algebra]

2.1 Apply [F4] to this channel with output space $H_{\rm full}$. It supplies a channel $\mathcal R:\mathcal L(H_{\rm full})\to\mathcal L(H_L)$, where $H_L$ is the logical space and $\mathcal L(K)$ denotes the linear operators on $K$. Its syndrome ranges lie in $\iota H_{\rm sel}$, and its fixed-state completion includes the whole orthogonal complement of $\iota H_{\rm sel}$ in $H_{\rm full}$. Thus the decoder is defined even on outputs in other model blocks. The off-diagonal error formula in [F4], after undoing the factor $1/\sqrt c$, gives $\mathcal R(\iota E_iVX V^*E_j^*\iota^*)=c_{ji}X$ for every logical operator $X$. By sesquilinearity this holds for all pairs in the selected error span. This extends the selected-space decoder without changing its action on selected-space inputs. [F4, step 1.1, algebra]

3.1 On the selected input block, the three jumps in [F1] are coherent rank-one components into its downward neighbor, hence belong to the selected error span after restriction to the code. By [F2], $B_\tau/(\gamma\tau)=\sum_\delta L_\delta V\rho V^*L_\delta^*/\gamma$ has trace one. The full-space decoder of step 2.1 sends this normalized mixture to $\rho$: its cross-term formula applies to each jump, and the trace-one normalization makes the sum of the scalar coefficients one. This proves exact recovery of the first-order detected-decay state for either named code. [F1, F2, F3, F4, step 2.1]

4.1 Positivity and the trace-norm definition in [F8] give $\|B_\tau\|_1=\operatorname{Tr}B_\tau=\gamma\tau$. Splitting the normalized difference as $(B_\tau^{\rm ex}-B_\tau)/p_\tau+B_\tau(1/p_\tau-1/(\gamma\tau))$, the triangle inequality and step 1.2 give $\|B_\tau^{\rm ex}/p_\tau-B_\tau/(\gamma\tau)\|_1\leq(\varepsilon_\tau+|p_\tau-\gamma\tau|)/p_\tau\leq2\varepsilon_\tau/p_\tau=O(\tau)$. Both normalized branches are density operators on $H_{\rm full}$, using $\iota$ to embed the first-order branch. Apply [F6] to the full-space channel $\mathcal R$ from step 2.1 and these two states. Step 3.1 then yields the stated decoded conditional error, uniformly over logical density operators. [F2, F6, F8, step 2.1, step 3.1, step 1.2, algebra]

5.1 Write a known diagonal calibration as $U_h=\operatorname{diag}(e^{ihd_x})$ on $H_{\rm full}$, where the finitely many $d_x$ are real fixed lift values, $0\leq h\leq\tau$, and either sign convention is absorbed into $d_x$. Each $hd_x$ is real, so [F11] gives $|e^{ihd_x}|=1$. Entrywise multiplication of the diagonal matrices therefore gives $U_h^*U_h=U_hU_h^*=I$, proving that $U_h$ is unitary. Put $M=\max_x|d_x|$. If $M=0$, then $U_h=I$. Otherwise choose $M\tau\leq1/2$. For $|z|\leq1/2$, the finite partial sums of [F10] satisfy $|\sum_{n=1}^N z^n/n!|\leq\sum_{n=1}^N|z|^n\leq|z|/(1-|z|)\leq2|z|$; the middle inequality follows by multiplying the finite geometric sum by $1-|z|$. Passing to the convergent limit gives $|e^z-1|\leq2|z|$. Applying this to $z=ihd_x$ and using the diagonal basis gives $\|U_h-I\|_{\rm op}\leq2M\tau$. Since $U_h$ is unitary, $\|U_h^*-I\|_{\rm op}=\|U_h-I\|_{\rm op}$ and $\|U_h^*\|_{\rm op}=1$. For every density operator $\sigma$, [F8] gives $\|\sigma\|_1=1$ and, from $U_h\sigma U_h^*-\sigma=(U_h-I)\sigma U_h^*+\sigma(U_h^*-I)$, the bound $\|U_h\sigma U_h^*-\sigma\|_1\leq2\|U_h-I\|_{\rm op}\leq4M\tau$. Apply [F6] to $U_h\sigma U_h^*$ and $\sigma$ for the decoder $\mathcal R$; together with step 4.1 this preserves its $O(\tau)$ conditional error when calibration precedes decoding. If the calibration is instead on the decoded logical space, the same estimate there applies directly. [F1, F5, F6, F8, F10, F11, step 4.1, algebra]

6.1 Multiplying the decoded conditional difference by $p_\tau=O(\tau)$ gives the $O(\tau^2)$ unnormalized branch bound, uniformly over logical density operators. Under [F5], an unconditional repeated-cycle claim would additionally require the other outcomes and a complete composition budget; neither is supplied by this single-branch estimate. [F5, step 1.2, step 4.1, step 5.1, algebra] ∎
