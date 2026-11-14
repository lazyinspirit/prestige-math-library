---
title: First-order fast-check channel
status: draft
research_item: pthm-qec-distinguishability-short-time-kraus
dependency_level: 16
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 14, approximate Kraus operators before Eq. (S4.1); PDF p. 15,
        Eqs. (S4.3)–(S4.4)
      statement: The article uses the first-order null and three jump operators and
        gives the diagonal null operator and corresponding short-time map.
      hypotheses: The idealized lifted angular-momentum model and short-checking
        regime of Section S4.
      reading_limits: Attribution to the supplied extracted article text at the cited
        passages; this citation is not used as proof of the conditional
        calculation.
---

PDF p. 14: ` Approximate Kraus operators before Eq. (S4.1) `; PDF p. 15: ` Eqs. (S4.3)–(S4.4) `

## Prerequisites

- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)
- [math:lem-matrix-algebra-is-a-c-star-algebra](https://alphabetamath.cc/item/lem-matrix-algebra-is-a-c-star-algebra)
- [math:def-c-star-algebra](https://alphabetamath.cc/item/def-c-star-algebra)
- [physics:lem-cm-integral-and-ftc-for-continuous-normed-space-curves](https://alphabetamath.cc/physics/item/lem-cm-integral-and-ftc-for-continuous-normed-space-curves)


## Statement

Adopt the finite lifted model with blocks $J=0,\ldots,N$, $N\geq1$, its equal-rate downward jumps, and all physical, spectral and choice assumptions inherited by that model and the uniform-decay result. In particular the Axiom of Choice, Countable Choice and Dependent Choice are assumed. The orthonormal magnetic basis is $|J,m\rangle$, with integer $m=-J,\ldots,J$. The Hamiltonian is $H=\sum_{J=0}^{N}\sum_{m=-J}^{J}[\omega_0J(J+1)+\Delta(J,m)]|J,m\rangle\langle J,m|$, with real diagonal entries, and the three downward jump matrices are $L_\delta$ for $\delta=-1,0,1$ as specified by the model. Set $V=-\frac12\sum_\delta L_\delta^\dagger L_\delta$ and $G=-iH+V$.

For $\tau\geq0$, define $K_\delta=\sqrt\tau L_\delta$ and $K_{\rm null}=I+\tau G$. Then $K_{\rm null}=I-i\tau\sum_{J=0}^{N}\sum_{m=-J}^{J}[\omega_0J(J+1)+\Delta(J,m)]|J,m\rangle\langle J,m|-(\gamma\tau/2)\sum_{J=1}^{N}\sum_{m=-J}^{J}|J,m\rangle\langle J,m|$. The ground block $J=0$ has no downward jump.

Let $\mathcal N_\tau$ be the finite GKSL channel of the model, and put $\widetilde{\mathcal N}_\tau(X)=K_{\rm null}XK_{\rm null}^\dagger+\sum_\delta K_\delta X K_\delta^\dagger$. With matrix spectral norm, induced map norm $\|\Phi\|=\sup_{X\ne0}\|\Phi(X)\|/\|X\|$, $g=\|G\|$, $j=\sum_\delta\|L_\delta\|^2$, and $r_\tau=\frac12e^{\tau g}(\tau g)^2$, the explicit bound is $\|\mathcal N_\tau-\widetilde{\mathcal N}_\tau\|\leq \tau j(e^{2\tau g}-1)+\frac12e^{2\tau g+\tau j}(\tau j)^2+r_\tau(e^{\tau g}+1+\tau g)$. Thus the displayed Kraus sum approximates the channel with $O(\tau^2)$ induced-norm error as $\tau\downarrow0$, at fixed model parameters. It need not be trace preserving at finite $\tau$.

The corresponding diagonal formula with sums over all integer $J\geq0$ is an algebraic identity on finite-support combinations of the labeled basis vectors, using the same formal jump coefficients. It does not assert an infinite-dimensional channel. The bound above depends on the full laboratory-frame $\|G\|$, including the rotor term; the model's short-checking conditions alone do not make it uniform in arbitrarily large $\omega_0\tau$.

## Facts & Assumptions

[F1] The lifted-model postulate specifies the finite diagonal Hamiltonian, the three downward jumps, their finite GKSL evolution and the inherited physical and choice assumptions. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] Under those hypotheses the uniform-decay result gives $\sum_\delta L_\delta^\dagger L_\delta=\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}|J,m\rangle\langle J,m|$ and says the ground block is annihilated by every downward jump. Its infinite-label identity holds on finite-support vectors. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[F3] The angular-basis definition supplies the orthonormal labeled basis and the magnetic-label ranges. [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[F4] The finite GKSL interface defines the generator and its nonnegative-time channel for finite Hermitian $H$ and a finite jump family. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F5] The finite trajectory expansion gives the no-jump term $E(\tau)XE(\tau)^\dagger$, with $E(u)=e^{uG}$, and the one-jump term $\sum_\delta\int_0^\tau E(\tau-s)L_\delta E(s)XE(s)^\dagger L_\delta^\dagger E(\tau-s)^\dagger\,ds$. The sum of the terms with at least two jumps has induced norm at most $e^{2\tau g}\sum_{n=2}^\infty(\tau j)^n/n!$. [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)

[F6] The finite exponential Taylor result defines the matrix exponential by its norm-convergent power series and gives $\|e^{\tau G}-I-\tau G\|\leq r_\tau$. Its scalar case also gives the real exponential series. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[F7] The finite matrix algebra with spectral norm is a complete complex C*-algebra. Its defining norm properties include submultiplicativity and the isometry of conjugate transpose: $\|AB\|\leq\|A\|\|B\|$ and $\|A^\dagger\|=\|A\|$. Here $\|I\|=1$ follows immediately from the unit-ball formula in positive dimension. [math:lem-matrix-algebra-is-a-c-star-algebra](https://alphabetamath.cc/item/lem-matrix-algebra-is-a-c-star-algebra) [math:def-c-star-algebra](https://alphabetamath.cc/item/def-c-star-algebra)

[F8] A continuous curve in a complete normed real space has a Riemann integral, linear in the curve and commuting with bounded real-linear maps, with norm at most interval length times the supremum norm. A complete complex matrix space can be regarded as a real space for this assertion. [physics:lem-cm-integral-and-ftc-for-continuous-normed-space-curves](https://alphabetamath.cc/physics/item/lem-cm-integral-and-ftc-for-continuous-normed-space-curves)

## Proof

**Given:** The finite lifted model, its inherited hypotheses, and $\tau\geq0$.

**Goal:** Calculate the null operator and bound the difference between the exact channel and the displayed first-order Kraus sum.

1.1 By [F2], $V$ is minus $\gamma/2$ times the projection onto the excited blocks. Substitute this and the diagonal Hamiltonian from [F1] into $I+\tau(-iH+V)$. The orthonormal basis and ranges in [F3] give the displayed diagonal formula. The same jump formula annihilates the ground block. [F1, F2, F3, algebra]

1.2 Use the norm properties in [F7] and the matrix and scalar series in [F6]. For $u\geq0$, comparison term by term gives $\|E(u)\|\leq\sum_{n=0}^\infty(ug)^n/n!=e^{ug}$ and $\|E(u)-I\|\leq\sum_{n=1}^\infty(ug)^n/n!=e^{ug}-1$. These comparisons use $\|G^n\|\leq g^n$ by submultiplicativity. For $u,v\in[0,\tau]$, the factorization of $u^n-v^n$ gives $|u^n-v^n|\leq n\tau^{n-1}|u-v|$ for $n\geq1$; the same series comparison yields $\|E(u)-E(v)\|\leq ge^{\tau g}|u-v|$. Thus these matrix curves are norm-continuous. [F6, F7, algebra]

2.1 Put $B=I+\tau G$ and $E=E(\tau)$. By [F6], $\|E-B\|\leq r_\tau$, while [F7] gives $\|B\|\leq1+\tau g$. The identity $EXE^\dagger-BXB^\dagger=(E-B)XE^\dagger+BX(E-B)^\dagger$, the adjoint norm equality in [F7], and step 1.2 bound the induced norm of the difference of these two maps by $r_\tau(e^{\tau g}+1+\tau g)$. [F6, F7, step 1.2, algebra]

2.2 The data satisfy the finite hypotheses of [F4] and [F5]. For $0\leq s\leq\tau$, put $A_\delta(s)=E(\tau-s)L_\delta E(s)$. By [F7] and step 1.2, $\|A_\delta(s)\|\leq e^{\tau g}\|L_\delta\|$. Subtract $L_\delta$ using $A_\delta(s)-L_\delta=(E(\tau-s)-I)L_\delta E(s)+L_\delta(E(s)-I)$ to get $\|A_\delta(s)-L_\delta\|\leq[(e^{(\tau-s)g}-1)e^{sg}+e^{sg}-1]\|L_\delta\|=(e^{\tau g}-1)\|L_\delta\|$. The identity $A_\delta(s)XA_\delta(s)^\dagger-L_\delta XL_\delta^\dagger=(A_\delta(s)-L_\delta)XA_\delta(s)^\dagger+L_\delta X(A_\delta(s)-L_\delta)^\dagger$ therefore bounds its norm by $(e^{2\tau g}-1)\|L_\delta\|^2\|X\|$. [F4, F5, F7, step 1.2, algebra]

3.1 By step 1.2 and [F7], each matrix integrand in step 2.2 is continuous in $s$. The matrix space is complete by [F7], so [F8] applies to it as a real space. Its norm integral agrees with the entrywise integral in [F5]: for the standard coordinate vectors, $|X_{ab}|\leq\|X\|$ follows from $|X_{ab}|\leq\|Xe_b\|_2\leq\|X\|$, making real and imaginary coordinate functionals bounded. Apply [F8] to the difference integrand and sum over the three indices. The one-jump term consequently differs from $\tau\sum_\delta L_\delta XL_\delta^\dagger$ by at most $\tau j(e^{2\tau g}-1)\|X\|$. For $x=\tau j\geq0$, $(k+2)!\geq2k!$ and the scalar series in [F6] give $\sum_{n=2}^\infty x^n/n!\leq\frac12x^2e^x$. Thus the at-least-two-jump tail in [F5] has induced norm at most $\frac12e^{2\tau g+\tau j}(\tau j)^2$. For $\tau=0$, the integrals and both bounds are zero. [F5, F6, F7, F8, step 1.2, step 2.2, algebra]

4.1 Combine the no-jump estimate in step 2.1 and the one-jump and tail estimates in step 3.1 by the triangle inequality, and use $\tau L_\delta XL_\delta^\dagger=K_\delta XK_\delta^\dagger$. Taking the supremum over nonzero $X$ yields the displayed bound. For fixed $g,j$, [F6] gives $e^{2\tau g}-1=O(\tau)$ and bounded exponential factors near zero, so every term is $O(\tau^2)$. Finally, $G+G^\dagger=-\sum_\delta L_\delta^\dagger L_\delta$ gives $K_{\rm null}^\dagger K_{\rm null}+\sum_\delta K_\delta^\dagger K_\delta=I+\tau^2G^\dagger G$, which need not equal $I$ at finite $\tau$. [F4, F6, F7, step 2.1, step 3.1, algebra]

5.1 On a finite-support vector, the diagonal sums act through finitely many basis labels. The finite-support extension in [F2] and the displayed diagonal Hamiltonian therefore give the same formal null-operator identity without an infinite-dimensional evolution claim. The bound in step 4.1 contains $g=\|-iH+V\|$; consequently its constants retain the full rotor contribution unless a separate rotating-frame argument is supplied. [F1, F2, F3, step 1.1, step 4.1, algebra] ∎
