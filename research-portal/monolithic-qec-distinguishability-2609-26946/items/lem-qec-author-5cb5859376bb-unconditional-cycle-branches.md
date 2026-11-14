---
id: lem-qec-author-5cb5859376bb-unconditional-cycle-branches
kind: lemma
domain: mathematics
title: Complete recovered-cycle bound with weighted trajectory branches
status: published
origin: session
deps:
  - lem-qec-author-5cb5859376bb-amplified-trace-sandwich
  - lem-qec-author-5cb5859376bb-code-syndrome-decoder
  - lem-qec-author-5cb5859376bb-calibrated-channel-expansion
  - lem-qec-prereq-trajectory-dyson-expansion
  - lem-qec-prereq-channel-composition-budget
  - physics:thm-qsm-dt-trace-contraction
  - def-qec-prereq-finite-gksl-channel-interface
  - math:thm-qc-kraus-map-completely-positive
  - physics:lem-nrqmx-continuous-simplex-integrals
  - math:lem-exponential-series-of-a-bounded-operator
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - physics:lem-qsm-matrix-state-calculus
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
dependency_roles:
  lem-qec-author-5cb5859376bb-amplified-trace-sandwich: mathematical-premise
  lem-qec-author-5cb5859376bb-code-syndrome-decoder: mathematical-premise
  lem-qec-author-5cb5859376bb-calibrated-channel-expansion: mathematical-premise
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  lem-qec-prereq-channel-composition-budget: mathematical-premise
  physics:thm-qsm-dt-trace-contraction: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  math:thm-qc-kraus-map-completely-positive: mathematical-premise
  physics:lem-nrqmx-continuous-simplex-integrals: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  physics:lem-qsm-matrix-state-calculus: mathematical-premise
  physics:lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement

Use the decoder, finite GKSL data and constants above, with encoding $\mathcal V$. Define the implementable logical cycle $C_\tau=R\mathcal U_\tau\mathcal N_\tau\mathcal V$. Its compensated null trajectory contribution is $C^0_\tau=R\mathcal Z_\tau\mathcal V$, and its at-least-one-jump contribution is $C^+_\tau=C_\tau-C^0_\tau$. Both contributions are completely positive, their sum is CPTP, and, uniformly with arbitrary finite references in induced trace norm, $\|C_\tau-I\|\leq K\tau^2$, $\|C^0_\tau-(1-r\tau)I\|\leq K\tau^2$ and $\|C^+_\tau-r\tau I\|\leq2K\tau^2$. The same decoder is applied to both virtual branches; no jump-count or jump-time measurement is required. If $g=\|G\|$, the total probability of two or more jumps per interval is at most $K_2\tau^2$, where $K_2=j^2e^{(2g+j)\tau_0}/2$ for $0\leq\tau\leq\tau_0$.

## Facts & Assumptions

[F1] Trace-norm sandwich estimates and isometric encoding preserve their stated constants under every finite reference extension. [[lem-qec-author-5cb5859376bb-amplified-trace-sandwich]]

[F2] Use a finite isometry $V:H_L\to H_P$ with nonzero logical space and scalar products $V^\dagger E_a^\dagger E_bV=c_{ab}I$ for $E_0=I,E_a=L_a$. The supplied CPTP decoder $R$ satisfies $R\mathcal V=I$, $R(\sum_aL_a\mathcal V(\cdot)L_a^\dagger)=rI$ and $R(S\mathcal V(\cdot))=R(\mathcal V(\cdot)S)=rI$, where $r=\sum_ac_{aa}\geq0$, and these identities hold with finite references. [[lem-qec-author-5cb5859376bb-code-syndrome-decoder]]

[F3] For the same $H,L_a$, use $S,G,\mathcal D,j,\mathcal N_\tau,\mathcal U_\tau,\mathcal Z_\tau,\tau_0$ and $K$ from the calibrated expansion. In particular $\mathcal U_\tau\mathcal N_\tau=I+\tau\mathcal D+\mathcal E_\tau$ and $\mathcal Z_\tau=I-\tau\{S,\cdot\}/2+\mathcal E^0_\tau$, with both remainder maps bounded by $K\tau^2$ in reference-extended induced trace norm. [[lem-qec-author-5cb5859376bb-calibrated-channel-expansion]]

[F4] The exact noise channel is the no-jump congruence plus the sum of integrated ordered $n$-jump congruences. Its amplitudes have the form $K_{a_1\cdots a_n}(s)=e^{(\tau-s_n)G}L_{a_n}\cdots L_{a_1}e^{s_1G}$, with all intervening propagation factors as in the supplier. The series converges absolutely in spectral-induced map norm and its integrals are entrywise nested integrals over $0\leq s_1\leq\cdots\leq s_n\leq\tau$. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F5] Use $\|T\|_{1\to1}=\sup_{X\ne0}\|T(X)\|_1/\|X\|_1$. A finite channel $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ contracts trace norm on every complex input matrix, allowing $d\ne e$. The contraction theorem applies also to any finite reference extension once that extension is checked to be a channel. [[lem-qec-prereq-channel-composition-budget]] [[physics:thm-qsm-dt-trace-contraction]]

[F6] The finite GKSL interface supplies Hermitian $H$, finitely many $L_a$, $G=-iH-S/2$, and the CPTP map $\mathcal N_\tau$ for $\tau\geq0$. Here complete positivity means positivity under every finite identity extension, positivity means Hermiticity and nonnegative quadratic forms, and trace preservation holds on every matrix. [[def-qec-prereq-finite-gksl-channel-interface]]

[F7] A finite Kraus sum between finite complex inner-product spaces is completely positive, with no trace-preservation requirement. [[math:thm-qc-kraus-map-completely-positive]]

[F8] Continuous finite-coordinate ordered-simplex integrals exist, are linear, commute with finite-dimensional linear maps, and preserve nonnegative scalar functions. Their norm satisfies $\|I_n(F)\|\leq C\tau^n/n!$ when $\|F\|\leq C$, and $I_n(1)=\tau^n/n!$, including the stated degenerate-time conventions. [[physics:lem-nrqmx-continuous-simplex-integrals]]

[F9] On a real or complex Banach space the bounded-operator exponential is norm-continuous, equals its absolutely convergent series and satisfies $\|e^{uA}\|\leq e^{|u|\|A\|}$. In particular its scalar series gives $\sum_{n\geq2}x^n/n!\leq x^2e^x/2$ for $x\geq0$, by $n!\geq2(n-2)!$. [[math:lem-exponential-series-of-a-bounded-operator]]

[F10] A real or complex normed space with an ordered basis of finite length is Banach. [[math:cor-finite-dimensional-normed-spaces-are-banach]]

[F11] Finite Hermitian matrices have orthonormal spectral decompositions and their positive square roots and spectral functions are well-defined. A density matrix is positive semidefinite with trace one; trace is the diagonal sum in an orthonormal basis. [[physics:lem-qsm-matrix-state-calculus]]

[F12] The finite matrix trace norm is $\|X\|_1=\operatorname{Tr}\sqrt{X^\dagger X}$, is a complete norm, and satisfies $|\operatorname{Tr}X|\leq\|X\|_1$. [[physics:lem-qsm-dt-finite-matrix-trace-ideal]]

## Proof

**Given:** The common finite GKSL data and scalar code products in [F2], [F3] and [F6], and any finite reference. **Goal:** Control the unconditional cycle, its virtual branches and its multi-jump probability.

1.1 Isometric encoding and unitary conjugation are single-Kraus completely positive maps by [F7], and preserve trace by the diagonal-sum formula in [F11]: for an isometry $A$, $\operatorname{Tr}(AXA^\dagger)=\sum_{i,j,k}A_{ij}X_{jk}\overline{A_{ik}}=\sum_jX_{jj}$. The finite physical vector space has an ordered orthonormal basis by [F11], so is Banach by [F10]. The matrix $iH$ is bounded. Adjointing its exponential partial sums and taking limits in [F9] gives $(e^{iH\tau})^\dagger=e^{-iH\tau}$ because $H=H^\dagger$; the group law in [F9] makes these exponentials mutual inverses. Thus the compensating matrix is unitary. Together with [F2] and [F6], this makes $C_\tau$ CPTP. Compositions preserve complete positivity at each finite extension and preserve trace. A finite reference extension of any channel here is itself a channel: a further identity extension is an extension by the product reference dimension, while trace is the sum of the traces of diagonal system blocks, each preserved by the channel. Thus [F5] applies to $R$ with its possibly unequal input and output dimensions and to every finite extension. Insert the two expansions [F3] between encoding and $R$. By [F2], $R\mathcal D\mathcal V=rI-(rI+rI)/2=0$ and $R(-\{S,\mathcal V(\cdot)\}/2)=-rI$. Encoding preserves trace norm by [F1], and $R$ contracts it by [F5], so the two remainders still have norm at most $K\tau^2$. This proves the full-cycle and null-branch estimates. A zero-dimensional reference gives only the zero input and trivial inequalities. [F1, F2, F3, F5, F6, F7, F9, F10, F11, algebra]

1.2 The physical vector space has a finite ordered orthonormal basis by [F11], so its Euclidean norm makes it Banach by [F10]; the finite matrix $G$ is bounded in spectral operator norm. Applying [F9] gives $\|e^{uG}\|\leq e^{ug}$ for $u\geq0$, where $g=\|G\|$. Applying the operator norm inequality successively to vectors gives submultiplicativity. The nonnegative propagation intervals in an $n$-jump amplitude in [F4] sum to $\tau$, so $\|K_{a_1\cdots a_n}(s)\|^2\leq e^{2g\tau}\prod_{k=1}^n\|L_{a_k}\|^2$. By [F1], the same constant bounds the trace norm of its congruence on an arbitrary reference-extended input of trace norm one. Apply [F8] in that finite output matrix space with its trace norm; the integrated congruence is bounded by $e^{2g\tau}\prod_k\|L_{a_k}\|^2\tau^n/n!$. Summing the finite index family gives $e^{2g\tau}(j\tau)^n/n!$, since $j=\sum_a\|L_a\|^2$. This majorant has a convergent sum by the scalar series in [F9]; completeness in [F12] gives convergence in trace norm on each such input. Its sum agrees entrywise with [F4], so these are also the reference-extended trajectory branches of that channel. [F1, F4, F8, F9, F10, F11, F12, algebra]

2.1 Fix any positive integer reference dimension and a positive semidefinite extended input $Y$. Each trajectory congruence is completely positive by [F7]. Its entries are continuous functions of the ordered times by [F9] and finite matrix multiplication. By [F8], integrating its amplified value preserves Hermiticity and nonnegative quadratic forms: for each vector $v$, the quadratic form of the integral is the integral of the nonnegative scalar quadratic form. Thus every integrated $n$-jump map is completely positive. Finite sums have the same property. The convergent map series in [F4] converges on every system matrix unit, hence entrywise; after any fixed finite reference extension, each output block is still the image of one system block, so the series converges entrywise there too. Limits of Hermitian matrices are Hermitian and limits of their nonnegative quadratic forms remain nonnegative. It follows that every infinite jump tail, in particular the sum over $n\geq1$, is completely positive. The null congruence is also completely positive by [F7]. Applying the same compensation, encoding and decoder to these maps preserves that property. By [F4], their sum is $C_\tau$ and the first tail is exactly $C^+_\tau=C_\tau-C^0_\tau$; this proves branch positivity by its trajectory representation, rather than by subtraction of arbitrary positive maps. [F4, F6, F7, F8, F9, step 1.1, algebra]

3.1 Subtract the two estimates of step 1.1 and use the triangle inequality in [F12] to obtain $\|C^+_\tau-r\tau I\|\leq2K\tau^2$, uniformly with references. For any reference-extended density input $\rho$, [F11] and [F12] give $\|\rho\|_1=\operatorname{Tr}\rho=1$: its eigenvalues are nonnegative, so $\sqrt{\rho^\dagger\rho}=\rho$. By step 2.1 and trace preservation of their sum, the two branch traces are nonnegative and sum to one. The inequality $|\operatorname{Tr}X|\leq\|X\|_1$ in [F12] bounds their deviations from $1-r\tau$ and $r\tau$ by $K\tau^2$ and $2K\tau^2$. Put $p_\tau=\operatorname{Tr}((C^+_\tau\otimes\operatorname{id})(\rho))$. If $r>0$, for sufficiently small positive $\tau$ one has $p_\tau\geq r\tau/2>0$, and the normalized jump-branch output obeys $\|(C^+_\tau\otimes\operatorname{id})(\rho)/p_\tau-\rho\|_1\leq(2K\tau^2+|p_\tau-r\tau|)/p_\tau\leq4K\tau^2/p_\tau=O(\tau)$. This is a virtual trajectory branch; the decoder itself does not use a jump-count or jump-time record. Its unconditional error is already quadratic and requires no division by a vanishing probability. If $r=0$, the unconditional bounds apply without conditioning. [F2, F5, F11, F12, step 1.1, step 2.1, algebra]

4.1 For a density input, the $n\geq2$ tail is positive by step 2.1 and its trace is bounded by its trace norm by [F12]. Step 1.2 therefore bounds its probability by $e^{2g\tau}\sum_{n\geq2}(j\tau)^n/n!\leq j^2\tau^2e^{(2g+j)\tau}/2\leq K_2\tau^2$ for $0\leq\tau\leq\tau_0$. The first inequality uses the scalar tail in [F9]; the last uses the nonnegative scalar exponential series and $K_2=j^2e^{(2g+j)\tau_0}/2$. Compensation and the decoder preserve every branch trace, including under reference extension, by step 1.1. Hence the same bound holds for the recovered cycle. The cases $j=0$ and $\tau=0$ give a zero tail by the same formulas and the degenerate integrals in [F8]. Together with steps 1.1 and 3.1, this establishes all the stated bounds and their interpretation using one decoder on both virtual branches. [F8, F9, F12, step 1.1, step 2.1, step 3.1, step 1.2, algebra] ∎
