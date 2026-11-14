---
title: Resolved rank-one transition obstructs exact correction
status: published
research_item: prop-qec-distinguishability-resolved-transition-obstruction
dependency_level: 2
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, paragraph following Eq. (1)
      statement: The article states that a resolved transition from a source state to
        an orthogonal state rules out exact correction on any codespace with
        support on the source state, and cites its Ref. 9.
      hypotheses: The passage discusses an error channel and a resolved transition
        represented by the stated rank-one operator.
      reading_limits: The supplied article text on PDF page 1 was read for
        attribution. It is not used as proof of the proposition; the
        dimension-qualified deduction uses the declared local lemma.
---

PDF p. 1: ` Paragraph following Eq. (1) `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:def-qc-dirac-notation-conversion](https://alphabetamath.cc/item/def-qc-dirac-notation-conversion)
- [lem-qec-prereq-rank-one-kl-dimension](item-lem-qec-prereq-rank-one-kl-dimension)
- [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)


## Statement

Let $H_L$, $H_P$, and $H_O$ be finite-dimensional complex inner-product spaces, let $V:H_L\to H_P$ be an isometry, and let $P=VV^\dagger$ project onto the codespace $\mathcal C=V(H_L)$. Suppose $\dim H_L\geq 2$. Let a quantum channel $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ have a finite Kraus representation containing the nonzero operator $E=|f\rangle\langle s|$, where $s\in H_P$ and $f\in H_O$. If $Ps\ne 0$, the code is not exactly correctable for $\mathcal N$. In particular, this applies when source and final states are orthogonal unit vectors in the same physical space.

Here a Kraus representation is an operator sum $\mathcal N(X)=\sum_a E_aXE_a^\dagger$, and exact correction means that a quantum channel $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$ satisfies $\mathcal R(\mathcal N(VXV^\dagger))=X$ for every $X\in\mathcal L(H_L)$. The condition $Ps\ne0$ expresses nonzero support of the codespace on the source state.

The dimension restriction matters: an orthogonal rank-one transition can occur in a channel that is exactly correctable on a one-dimensional code with $Ps\ne0$.

## Facts & Assumptions

[F1] On arbitrary finite-dimensional complex inner-product spaces, the bra-ket conventions give $|f\rangle\langle s|x=\langle x,s\rangle f$, with the root inner product linear in its first argument. [math:def-qc-dirac-notation-conversion](https://alphabetamath.cc/item/def-qc-dirac-notation-conversion) For the coordinate spaces used in the boundary example, these agree with [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions).

[F2] The code projector, channel and exact decoded recovery have the meanings stated in [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel); finite Kraus representations are operator sums as in [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation).

[F3] If a finite-dimensional code of dimension at least two is exactly correctable for a channel whose finite Kraus family contains a nonzero operator $x\mapsto\langle x,s\rangle f$, then its code projector satisfies $Ps=0$. [lem-qec-prereq-rank-one-kl-dimension](item-lem-qec-prereq-rank-one-kl-dimension)

[F4] For finite-dimensional complex inner-product spaces $H,K$, a complex-linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$ with a finite Kraus family $(K_a)$ satisfying $\sum_a K_a^\dagger K_a=I_H$ is a quantum channel. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

## Proof

**Given:** The spaces, isometry, channel, Kraus operator and dimension hypothesis in the statement, with $Ps\ne0$.

**Goal:** Prove that exact correction is impossible and exhibit the one-dimensional boundary.

1.1 By [F1], the designated Kraus operator has the form required by [F3]. If exact correction existed, [F3] would give $Ps=0$, contrary to the given support condition. Therefore no exact decoder exists. Orthogonality of $s$ and $f$ is not needed for this implication. [given, F1, F2, F3]

1.2 For the boundary, take $H_P=H_O=\mathbb C^2$ with orthonormal basis $s,f$, take $H_L=\mathbb C$ and $V(1)=s$. Set $E=|f\rangle\langle s|$, $F=|f\rangle\langle f|$ and $\mathcal N(X)=EXE^\dagger+FXF^\dagger$. This operator sum is complex-linear and $E^\dagger E+F^\dagger F=|s\rangle\langle s|+|f\rangle\langle f|=I_{\mathbb C^2}$. Hence [F4], with $H=K=\mathbb C^2$, shows that $\mathcal N$ is a quantum channel. Direct evaluation gives $\mathcal N(X)=\operatorname{Tr}(X)|f\rangle\langle f|$ for every $X\in\mathcal L(\mathbb C^2)$. [F1, F2, F4, construct, algebra]

2.1 Define $R_s=\langle s|$ and $R_f=\langle f|$ as maps from $\mathbb C^2$ to $\mathbb C$, and set $\mathcal R(Y)=R_sYR_s^\dagger+R_fYR_f^\dagger=\operatorname{Tr}(Y)$. This map is complex-linear and $R_s^\dagger R_s+R_f^\dagger R_f=|s\rangle\langle s|+|f\rangle\langle f|=I_{\mathbb C^2}$. By [F4], now with $H=\mathbb C^2$ and $K=\mathbb C$, $\mathcal R$ is a quantum channel. For every $X\in\mathcal L(\mathbb C)$, the formula in step 1.2 gives $\mathcal N(VXV^\dagger)=X|f\rangle\langle f|$, identifying endomorphisms of $\mathbb C$ with scalars, and therefore $\mathcal R(\mathcal N(VXV^\dagger))=X$. Yet $Ps=s\ne0$ and $s\perp f$. Thus the asserted one-dimensional example exists. [F1, F2, F4, step 1.2, construct, algebra] ∎

## Remarks

The article states the obstruction for any codespace with support on the source state and cites its Ref. 9. The proposition makes the dimension condition explicit; the example shows why the unqualified wording cannot be extended to arbitrary one-dimensional codes under the stated channel interpretation. The article discusses encoded qubits, for which the code dimension is two.
