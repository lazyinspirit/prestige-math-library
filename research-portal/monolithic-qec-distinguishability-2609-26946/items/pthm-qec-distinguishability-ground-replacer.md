---
id: pthm-qec-distinguishability-ground-replacer
kind: physics-theorem
domain: physics
title: Long-time atomic channel and source-resolving Kraus operators
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-atomic-jumps
  - pthm-qec-distinguishability-zero-temperature-truncation
  - lem-qec-prereq-canonical-choi-weights
  - lem-qec-prereq-absorbing-ground-limit
  - def-qec-prereq-finite-gksl-channel-interface
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-atomic-jumps: physical-result
  pthm-qec-distinguishability-zero-temperature-truncation: physical-result
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  lem-qec-prereq-absorbing-ground-limit: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
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
      locator: PDF page 4, Fig. 2 caption and first paragraph below the figure
      statement: The article describes early Kraus operators supported on several
        source states and a long-time limit in which nine operators map
        individual source states to the ground.
      hypotheses: The article's nine-dimensional J-at-most-2 atomic channel and the
        model used for Fig. 2.
      reading_limits: The supplied extracted text at the cited passage was read. This
        reference attributes the article's description; the deduction below uses
        the stated suppliers and additional rate hypothesis, not the article as
        proof. No numerical figure replication or experimental observation is
        claimed.
physical_scope: Conditional prediction of the finite idealized emitter and
  vacuum-bath model; neither an observed decay rate nor an infinite-dimensional
  limit is asserted.
dependency_level: 15
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and the finite-emitter, vacuum, regularity, tensor and pointwise spectral hypotheses of [[pthm-qec-distinguishability-atomic-jumps]] and [[pthm-qec-distinguishability-zero-temperature-truncation]]. In particular, the three jumps $L_\delta$ lower spin by one, and the Hermitian effective Hamiltonian $H$ preserves each spin block. Restrict the resulting finite GKSL channel $\mathcal N_t$ to $W=V_0\oplus V_1\oplus V_2$, with magnetic orthonormal basis $|J,m\rangle$ for $J=0,1,2$ and $m=-J,\ldots,J$. Put $g=|0,0\rangle$ and $R=\sum_{\delta=-1}^1 L_\delta^\dagger L_\delta$ on $W$. Assume additionally that there is $r_*>0$ such that $P_JRP_J\geq r_*P_J$ for $J=1,2$, where $P_J$ projects onto $V_J$ and the inequality is in quadratic forms.

Then, as $t\to\infty$, $\mathcal N_t$ converges to $\mathcal R(X)=\operatorname{Tr}(X)|g\rangle\langle g|$. Thus every initial basis state reaches the ground in the limit. One canonical Kraus representation of $\mathcal R$ consists of the nine operators $|0,0\rangle\langle J,m|$; its Choi rank and minimum Kraus number are nine. At every sufficiently small positive time, every Kraus representation, including a canonical one, has an operator that acts nontrivially on at least two distinct magnetic-basis source states. In the limiting channel a source-resolving canonical choice exists, but canonical operators are not unique: their degenerate Choi eigenspace may be rotated into operators supported on several source states.

A Kraus representation of a channel is a finite family of maps $K_a$ with $\mathcal N(X)=\sum_a K_aXK_a^\dagger$. Here canonical means that the vectorized operators are the square-root-weighted orthonormal positive-eigenvalue vectors of the input-first, unnormalized Choi matrix. An operator acts nontrivially on a source $|J,m\rangle$ when its value on that vector is nonzero.

## Statement references

[[pthm-qec-distinguishability-atomic-jumps]]

[[pthm-qec-distinguishability-zero-temperature-truncation]]

[[lem-qec-prereq-absorbing-ground-limit]]

[[lem-qec-prereq-canonical-choi-weights]]

[[def-qec-prereq-finite-gksl-channel-interface]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

## Facts & Assumptions

[F1] Under the stated emitter and pointwise spectral hypotheses, the three jumps lower $V_J$ to $V_{J-1}$ and annihilate $V_0$. [[pthm-qec-distinguishability-atomic-jumps]]

[F2] With a block-preserving Hermitian effective Hamiltonian, the $J\leq2$ cutoff is invariant and its channel equals the finite GKSL exponential formed from the restricted operators. [[pthm-qec-distinguishability-zero-temperature-truncation]] [[def-qec-prereq-finite-gksl-channel-interface]]

[F3] The spin block $V_J$ has orthonormal basis $|J,m\rangle$ for $m=-J,\ldots,J$, and dimension $2J+1$. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F4] For finite orthogonal grading with one-dimensional ground block, block-preserving Hermitian Hamiltonian, lowering jumps and a strictly positive uniform excited-block exit-rate bound, the finite GKSL channel converges to ground replacement. For any orthonormal input basis, the associated ground-replacement operators form a Kraus representation and the Choi rank is the input dimension. [[lem-qec-prereq-absorbing-ground-limit]]

[F5] A finite channel's canonical Kraus operators are obtained from its positive Choi eigenvectors; the Choi rank is the minimum Kraus number. An orthonormal basis of a repeated-eigenvalue eigenspace can be rotated. [[lem-qec-prereq-canonical-choi-weights]]

[A1] Assume the three choice principles, all physical and pointwise hypotheses in the Statement, and the stated positive exit-rate bound. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The restricted finite channel and all hypotheses in the Statement, including the positive exit-rate bound.

**Goal:** Establish the ground-replacement limit and the stated early- and long-time Kraus properties.

1.1 By [F1] and [F2], the restricted generator has lowering jumps and a block-preserving Hermitian Hamiltonian. By [F3], $V_0=\mathbb Cg$ and $\dim W=1+3+5=9$. The additional bound in [A1] supplies the excited-block rate hypothesis of [F4], which is not implied merely by the displayed lowering form. Applying [F4] gives $\mathcal N_t(X)\to\operatorname{Tr}(X)|g\rangle\langle g|$ and, in particular, sends each basis-state density operator to $|g\rangle\langle g|$ in the limit. [F1, F2, F3, F4, A1]

2.1 By [F4], the nine maps $K_{Jm}=|g\rangle\langle J,m|$ give the limiting channel and its Choi rank is nine. Indeed, its input-first unnormalized Choi matrix is $I_W\otimes|g\rangle\langle g|$; its nine positive eigenvalues are all one, with eigenvectors $|J,m\rangle\otimes g$. By [F5], these eigenvectors give the displayed canonical choice and nine is the minimum Kraus number. Since the positive eigenvalue is degenerate, rotating that eigenbasis gives other canonical choices; a rotated vector can involve several source basis states. [F3, F4, F5, step 1.1, algebra]

3.1 Choose two distinct magnetic-basis vectors $e$ and $f$. By [F2], $\mathcal N_t=e^{t\mathcal L}$ for a finite linear generator, so the exponential series gives $\mathcal N_t(|e\rangle\langle f|)\to|e\rangle\langle f|\ne0$ as $t\downarrow0$. Hence this image is nonzero for all sufficiently small positive $t$. If every Kraus operator in a representation acted nontrivially on at most one source basis vector, each term $K_a|e\rangle\langle f|K_a^\dagger$ would vanish, contradicting that nonzero image. This applies in particular to any canonical representation supplied by [F5]. Together with step 2.1, this proves the early-time and limiting assertions without selecting a unique physical trajectory. [F2, F3, F5, step 2.1, algebra] ∎

## Source notes

The article's figure caption describes early multi-source operators and a source-resolving long-time picture. The argument above establishes an early interval and a canonical limiting choice under the explicit rate bound; it does not assert that every canonical basis at the degenerate limit is source-resolving or reproduce the figure's numerical thresholds.
