---
id: thm-qc-subsystem-knill-laflamme
kind: theorem
title: The Knill–Laflamme criterion for a protected subsystem
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-correctable-subsystem-and-gauge-factor, def-qc-exact-recovery-of-a-quantum-code, def-qc-kraus-representation, def-qc-partial-trace, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-map, def-qc-tensor-register-and-permutation, lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement, lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form, lem-qc-tensor-product-basis-and-dimension, lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-finite-dimensional-orthogonal-decomposition, thm-qc-isometric-encoding-projector, thm-qc-kraus-choi-equivalence, thm-qc-kraus-map-completely-positive, thm-qc-knill-laflamme-explicit-recovery, thm-qc-knill-laflamme-necessity, thm-qc-trace-preserving-kraus-normalization, thm-qc-tensor-map-composition-and-adjoint, thm-tensor-product-basis-from-bases]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $J:H_G\otimes H_L\to H_P$ be an isometric encoding between nonzero finite-dimensional complex inner-product spaces, let $P=JJ^*$, and let
$\mathcal N(X)=\sum_{a=1}^mE_aXE_a^*$ be a finite Kraus representation of a channel from $\mathcal B(H_P)$ to $\mathcal B(H_O)$. The protected subsystem $H_L$ is exactly correctable under $J$, in the sense of [[def-qc-correctable-subsystem-and-gauge-factor]], if and only if there are operators $M_{ab}:H_G\to H_G$ such that
$$J^*E_a^*E_bJ=M_{ab}\otimes I_{H_L}\qquad\text{for every }a,b.$$

Equivalently,
$$PE_a^*E_bP=J(M_{ab}\otimes I_{H_L})J^*.$$
For any chosen orthonormal basis $(g_k)$ of $H_G$, put
$Q_{k\ell}=|g_k\rangle\langle g_\ell|\otimes I_{H_L}$ and
$P_{k\ell}=JQ_{k\ell}J^*$, where
$|u\rangle\langle v|$ means $x\mapsto\langle x,v\rangle u$ under the library's linear-first convention. The same criterion is equivalent to the existence of scalars $\lambda_{abk\ell}$ such that
$$P_{kk}E_a^*E_bP_{\ell\ell}=\lambda_{abk\ell}P_{k\ell}\qquad\text{for every }a,b,k,\ell.$$
These are equalities of physical-space operators using the embedded gauge matrix units $P_{k\ell}$.

## Facts & Assumptions

**Given:** The finite-dimensional encoding $J$, the finite Kraus channel $\mathcal N$, and the exact-correctability definition in [[def-qc-correctable-subsystem-and-gauge-factor]].

[F1] [[def-qc-correctable-subsystem-and-gauge-factor]]: a decoded channel $\mathcal R$ witnesses exact correction when the recovered logical marginal equals the input logical marginal for every density operator, including every finite reference.

[F2] [[def-qc-quantum-code-isometry-and-code-projector]] and [[thm-qc-isometric-encoding-projector]]: $J$ is isometric, $P=JJ^*$, and $J^*J=I_{H_G\otimes H_L}$.

[F3] [[def-qc-quantum-channel]], [[def-qc-kraus-representation]], [[thm-qc-trace-preserving-kraus-normalization]], [[thm-qc-kraus-map-completely-positive]], and [[thm-qc-kraus-choi-equivalence]]: channels are completely positive and trace-preserving, finite Kraus sums are completely positive, trace preservation is Kraus normalization, and finite-dimensional completely positive maps have finite Kraus representations.

[F4] [[lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form]]: a channel preserving the logical marginal has Kraus operators $A_j\otimes I_{H_L}$, and the marginal identity holds with every finite reference; it also verifies the gauge-reset channel.

[F5] [[thm-qc-knill-laflamme-explicit-recovery]]: for its constructed ordinary recovery, if $C_{ab}$ is defined by $V^*E_a^*E_bV=C_{ab}I$, then $\mathcal R(E_aVX V^*E_b^*)=C_{ba}X$ for every operator $X$.

[F6] [[thm-qc-knill-laflamme-necessity]]: exact recovery of an ordinary code implies the scalar-compression condition; [[thm-qc-knill-laflamme-explicit-recovery]] proves its sufficiency.

[F11] [[def-qc-correctable-subsystem-and-gauge-factor]] and
[[def-qc-exact-recovery-of-a-quantum-code]]: when the gauge factor is
one-dimensional, the marginal recovery definition is ordinary encoded
recovery.

[F7] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F8] [[def-inner-product-space]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-adjoint-exists-and-is-unique-in-finite-dimension]], and [[prop-adjoint-algebra]]: the pairing is linear in its first argument, finite-dimensional adjoints exist, and $(ST)^*=T^*S^*$.

[F9] [[lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement]]: equality of complex-linear maps on all operators gives equality after tensoring with the identity on any finite reference.

[F10] [[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]], and [[lem-qc-tensor-product-basis-and-dimension]]: the gauge/logical factor order is fixed, the maps $\iota_kx=g_k\otimes x$ are isometries, and simple tensors span.

[F12] [[lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis]]: tensor products of operator matrix units form a basis of the endomorphisms of a finite-dimensional ordered product space.

## Proof


1.1 For necessity, let $\mathcal R:\mathcal B(H_O)\to\mathcal B(H_G\otimes H_L)$ be an exact decoded recovery. By [F3], choose a finite Kraus family $(S_r)$ for $\mathcal R$. The corrected map $\Phi=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_J$ has Kraus operators $K_{ra}=S_rE_aJ$. It is completely positive by [F3], and $$\sum_{r,a}K_{ra}^*K_{ra} =J^*\sum_aE_a^*\left(\sum_rS_r^*S_r\right)E_aJ =J^*\left(\sum_aE_a^*E_a\right)J =J^*J=I_{H_G\otimes H_L}$$ by [F2] and [F3]. Thus $\Phi$ is a channel. By exactness [F1], it preserves the $H_L$ marginal; [F4] gives $S_rE_aJ=A_{ra}\otimes I_{H_L}$ for some $A_{ra}:H_G\to H_G$. [given, F1, F2, F3, F4, algebra, choose]

1.2 For sufficiency, assume $J^*E_a^*E_bJ=M_{ab}\otimes I_{H_L}$. Let $d_G=\dim H_G>0$ and choose an orthonormal basis $(g_k)_{k<d_G}$ by [F7]. Define $\iota_k:H_L\to H_G\otimes H_L$ by $\iota_kx=g_k\otimes x$, and put $F_{ak}=E_aJ\iota_k$ and $\widetilde F_{ak}=F_{ak}/\sqrt{d_G}$. By trace preservation [F3] and $J^*J=I$ from [F2], $$\sum_{a,k}F_{ak}^*F_{ak} =\sum_k\iota_k^*J^*\left(\sum_aE_a^*E_a\right)J\iota_k =d_G I_{H_L}.$$ Thus $(\widetilde F_{ak})$ is a finite Kraus representation of a channel $\widetilde{\mathcal N}:\mathcal B(H_L)\to\mathcal B(H_O)$. [given, F2, F3, F7, F10, construct, choose]

2.1 Trace preservation of $\mathcal R$ and $\mathcal N$ gives $\sum_rS_r^*S_r=I_{H_O}$ and $\sum_aE_a^*E_a=I_{H_P}$ by [F3]. Hence $$J^*E_a^*E_bJ =J^*E_a^*\left(\sum_rS_r^*S_r\right)E_bJ =\sum_r(S_rE_aJ)^*(S_rE_bJ) =\left(\sum_rA_{ra}^*A_{rb}\right)\otimes I_{H_L}.$$ Set $M_{ab}=\sum_rA_{ra}^*A_{rb}$. This proves the operator-valued condition. [F2, F3, F4, step 1.1, algebra, construct]

2.2 For all $a,b,k,\ell$, the assumed condition gives $$\widetilde F_{ak}^*\widetilde F_{b\ell} =\frac{\langle M_{ab}g_\ell,g_k\rangle}{d_G}I_{H_L}.$$ Apply [F5] to $\widetilde{\mathcal N}$ with the identity encoding of $H_L$. It supplies a channel $\mathcal S:\mathcal B(H_O)\to\mathcal B(H_L)$ and a finite Kraus family $(S_r)$ for which $$\mathcal S(\widetilde F_{ak}X\widetilde F_{b\ell}^*) =\frac{\langle M_{ba}g_k,g_\ell\rangle}{d_G}X$$ for every $X\in\mathcal B(H_L)$. [F3, F5, F8, step 1.2, algebra]

3.1 Fix an orthonormal gauge basis $(g_k)$ using [F7]. The matrix entry of $M_{ab}$ in row $k$, column $\ell$ is $\langle M_{ab}g_\ell,g_k\rangle$ by [F8]. Therefore $$P_{kk}E_a^*E_bP_{\ell\ell} =J\bigl(Q_{kk}(M_{ab}\otimes I_{H_L})Q_{\ell\ell}\bigr)J^* =\langle M_{ab}g_\ell,g_k\rangle P_{k\ell}.$$ This proves the matrix-unit statement in the necessary direction. [step 2.1, F2, F7, F8, algebra, choose]

3.2 Trace preservation and $J^*J=I$ imply $$\sum_aM_{aa}\otimes I_{H_L} =J^*\left(\sum_aE_a^*E_a\right)J =I_{H_G\otimes H_L},$$ so $\sum_aM_{aa}=I_{H_G}$: applying the equality to each $g\otimes\ell_0$ for fixed unit $\ell_0$ gives $(\sum_aM_{aa}g-g)\otimes\ell_0=0$, and tensoring with nonzero $\ell_0$ is injective. Define the decoded recovery $\mathcal T(X)=P_{g_0}\otimes\mathcal S(X)$ for a fixed unit $g_0\in H_G$. For a gauge matrix unit $|g_k\rangle\langle g_\ell|\otimes X$, the encoded channel output is $\sum_aF_{ak}XF_{a\ell}^*$; applying $\mathcal S$ and scaling the cross-term formula in step 2.2 from $\widetilde F_{ak}$ to $F_{ak}=\sqrt{d_G}\,\widetilde F_{ak}$ gives logical output $$\sum_a\mathcal S(F_{ak}XF_{a\ell}^*) =\sum_a\langle M_{aa}g_k,g_\ell\rangle X =\langle g_k,g_\ell\rangle X =\delta_{k\ell}X.$$ Here the scaling is $\mathcal S(F_{ak}XF_{b\ell}^*)=d_G\mathcal S(\widetilde F_{ak}X\widetilde F_{b\ell}^*)$, so the factor $d_G$ cancels the denominator in step 2.2. The input logical marginal of that matrix unit is also $\delta_{k\ell}X$. By linearity and the product matrix-unit basis in [F12], the decoded map $\mathcal T$ with output gauge reset preserves the logical marginal on every operator; [F9] extends the equality to every finite reference. [step 1.2, step 2.2, F2, F3, F7, F9, F10, F12, algebra, choose]

3.3 Since $P=JJ^*$, the operator-valued condition gives $PE_a^*E_bP=J(M_{ab}\otimes I_{H_L})J^*$. Conversely, multiplying this compressed equality by $J^*$ and $J$ and using $J^*J=I$ recovers the operator-valued condition. [F2, step 2.1, algebra]

4.1 The Kraus operators of $\mathcal T$ are $T_r y=g_0\otimes S_r y$. Since $g_0$ is unit, $\sum_rT_r^*T_r=\sum_rS_r^*S_r=I_{H_O}$; hence $\mathcal T$ is a channel by [F3]. Step 3.2 proves it preserves the logical marginal on every operator, and [F9] extends that identity to every finite reference. The physical reset-and-encode map is a channel by [F4], so the protected subsystem is exactly correctable. [step 3.2, F1, F3, F4, F9, algebra, construct]

4.2 For a fixed orthonormal gauge basis, if the operator-valued condition holds, then $Q_{kk}(J^*E_a^*E_bJ)Q_{\ell\ell} =\langle M_{ab}g_\ell,g_k\rangle Q_{k\ell}$, which gives the embedded matrix-unit condition after multiplying by $J$ and $J^*$. Conversely, sum the embedded matrix-unit identities over $k,\ell$. Since $\sum_kP_{kk}=P$ and $J^*P_{k\ell}J=Q_{k\ell}$, the resulting operator is $J^*E_a^*E_bJ=(\sum_{k,\ell}\lambda_{abk\ell}|g_k\rangle\langle g_\ell|)\otimes I_{H_L}$. This establishes equivalence for the fixed basis; because the operator-valued condition is basis-independent, it holds for every orthonormal gauge basis. [F2, F7, step 3.3, algebra]

5.1 If $\dim H_G=1$, every $M_{ab}$ is a scalar, so the criterion becomes $PE_a^*E_bP=C_{ab}P$. Under the unitary identification $H_G\otimes H_L\cong H_L$, the first-factor trace leaves the logical operator unchanged, so the subsystem recovery definition [F11] is ordinary exact recovery. The necessity and sufficiency directions are [F6]. [F2, F6, F7, F11, algebra] ∎

