---
id: pthm-qec-distinguishability-uniform-decay-rate
kind: physics-theorem
domain: physics
title: Normalized jumps give a scalar total decay operator
status: published
origin: session
deps:
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-atomic-jumps
  - def-qec-distinguishability-angular-basis
  - lem-qec-distinguishability-cg-rate-identity
  - def-qec-prereq-finite-gksl-channel-interface
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  post-qec-distinguishability-equal-rate-model: physical-assumption
  pthm-qec-distinguishability-atomic-jumps: physical-result
  def-qec-distinguishability-angular-basis: mathematical-premise
  lem-qec-distinguishability-cg-rate-identity: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 14, Eq. (S4.1), and PDF page 15, first paragraph
      statement: The article gives the diagonal expression for each L-dagger L and
        obtains V as minus gamma over two times the projection onto the excited
        manifolds; the J equals zero manifold has no downward transition.
      hypotheses: The article's normalized downward jumps and Clebsch–Gordan conventions.
      reading_limits: The supplied extracted text at these locations was read for
        attribution. The article is not used as proof of this conditional
        calculation.
physical_scope: Conditional calculation in the idealized finite-block emitter
  and equal-rate benchmark; the infinite expressions are algebraic identities on
  finite-support vectors, not an assertion of an infinite-dimensional physical
  evolution or a measurement.
dependency_level: 15
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and all system, bath, preparation, weak-Markov, regularity, tensor and pointwise spectral hypotheses of the finite downward-jumps result. Adopt the equal-rate benchmark for integer-spin blocks $J=0,1,\ldots,N$, where $N\geq1$ and $\gamma>0$. The magnetic vectors $|J,m\rangle$, $m=-J,\ldots,J$, form an orthonormal basis. For $\delta\in\{-1,0,1\}$, write $C^{J-1,m+\delta}_{1,\delta;J,m}$ for the specified ordered-coupling Clebsch–Gordan coefficient, taken to be zero when $|m+\delta|>J-1$.

For each $\delta$, the modeled jump satisfies $L_\delta^\dagger L_\delta=\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}\frac{2J+1}{2J-1}|C^{J-1,m+\delta}_{1,\delta;J,m}|^2|J,m\rangle\langle J,m|$. Defining $V=-\frac12\sum_{\delta=-1}^{1}L_\delta^\dagger L_\delta$ gives $V=-\frac\gamma2\sum_{J=1}^{N}\sum_{m=-J}^{J}|J,m\rangle\langle J,m|$. Thus every excited basis state has total instantaneous downward jump rate $\gamma$, while the ground block has rate zero.

The article's sums over all integer $J\geq1$ have the same identities on finite-support linear combinations of the labeled basis vectors: each side acts by the displayed finite sum on any such vector. This algebraic statement does not assert an infinite-dimensional physical evolution.

## Facts & Assumptions

[F1] Under the stated finite emitter and bath hypotheses, the downward-jumps result gives $L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$, with out-of-range terms zero. [[pthm-qec-distinguishability-atomic-jumps]]

[F2] The benchmark chooses $f(J)=\sqrt{(2J+1)/(2J-1)}$ and $\eta_J=J(J+1)$ for the finite integer-spin emitter; $\gamma$ is its positive jump-rate scale. [[post-qec-distinguishability-equal-rate-model]]

[F3] The magnetic basis is orthonormal, and the coefficients use the ordered coupling and zero convention in the Statement. [[def-qec-distinguishability-angular-basis]]

[F4] For each integer $J\geq1$ and allowed $m$, $\sum_{\delta=-1}^{1}|C^{J-1,m+\delta}_{1,\delta;J,m}|^2=(2J-1)/(2J+1)$. [[lem-qec-distinguishability-cg-rate-identity]]

[F5] In the finite GKSL convention, the jump contribution associated with $L_\delta$ is $L_\delta\rho L_\delta^\dagger$, and $\dagger$ denotes conjugate transpose. [[def-qec-prereq-finite-gksl-channel-interface]]

[A1] Assume the three stated choice principles and the physical and spectral hypotheses required by the downward-jumps result. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]] [[pthm-qec-distinguishability-atomic-jumps]]

## Proof

**Given:** The finite emitter, benchmark, choice principles and physical hypotheses in the Statement.

**Goal:** Calculate each $L_\delta^\dagger L_\delta$, their sum, and the instantaneous rates, and establish the stated finite-support interpretation.

1.1 For a basis input with $J\geq1$, orthonormality selects one input term in [F1], giving $L_\delta|J,m\rangle=\sqrt\gamma f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle$, with zero for an inadmissible output. The ground block is annihilated. For fixed $\delta$, distinct admissible pairs $(J,m)$ give distinct output basis labels $(J-1,m+\delta)$. Hence their output vectors are orthogonal, so $L_\delta^\dagger L_\delta$ is diagonal with entry $\gamma|f(J)|^2|C^{J-1,m+\delta}_{1,\delta;J,m}|^2$ on $|J,m\rangle$ and zero on the ground block. Substituting [F2] proves the first displayed identity. [F1, F2, F3, A1, algebra]

2.1 Sum the diagonal entries over $\delta$ and apply [F4]. For every excited basis vector the entry is $\gamma\frac{2J+1}{2J-1}\frac{2J-1}{2J+1}=\gamma$, and it is zero on the ground block. Multiplication by $-1/2$ gives the stated formula for $V$. [step 1.1, F4, algebra]

3.1 Define the total instantaneous downward jump rate at a normalized basis state to be the sum of the traces of the jump contributions in [F5]. For $\rho=|J,m\rangle\langle J,m|$ this is $\sum_\delta\|L_\delta|J,m\rangle\|^2$, the corresponding diagonal entry of $\sum_\delta L_\delta^\dagger L_\delta$. Step 2.1 therefore gives $\gamma$ on each excited basis state and zero on the ground block. This is a conditional instantaneous rate, not a claim about later evolution or an observation. [step 2.1, F5, algebra]

4.1 For the unbounded label set, define the displayed jumps and their formal adjoints on finite-support vectors by the same matrix coefficients. For fixed $\delta$, each basis input and each basis output has at most one corresponding nonzero term for a given adjacent pair of blocks, so these maps preserve finite support. The calculation in steps 1.1 and 2.1 applies to every basis vector and hence by linearity to every finite-support vector. This proves the article's infinite-sum identities in that algebraic sense without assuming an infinite-dimensional physical channel. [step 1.1, step 2.1, F2, F3, F4, algebra] ∎
