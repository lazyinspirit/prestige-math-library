---
id: def-qec-distinguishability-rank-one-transitions
kind: definition
domain: physics
title: Rank-one transition errors in the benchmark
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-atomic-jumps
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-atomic-jumps: physical-result
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 4, paragraph introducing the four candidate codes; PDF page
        17, Fig. S5.1 caption
      statement: The article calls the single-step errors in its jump operators
        rank-one transitions and states that the Aydin–Barg code corrects
        rank-one transition errors with absolute changes in J and m at most one;
        its zero-temperature model uses the downward J branch.
      hypotheses: The article's angular-momentum benchmark and its stated
        zero-temperature model.
      reading_limits: The supplied article text at the cited passages was read. This
        citation attributes the article's terminology and code claim; it is not
        independent proof of correction or evidence of an experiment.
physical_scope: Terminology and finite-block consequences for the idealized
  angular-momentum emitter model; no experimental realization or recovery
  performance is asserted.
formulation_deps:
  - pthm-qec-distinguishability-atomic-jumps
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - pthm-qec-distinguishability-atomic-jumps
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_level: 14
---

## Definition

A spin-$J$ block has orthonormal magnetic basis $|J,m\rangle$ with $m=-J,-J+1,\ldots,J$. A rank-one spherical tensor family consists of three linear maps $T_\delta$, $\delta=-1,0,1$, obeying the angular-momentum commutation equations in the stated spin-tensor convention. In this terminology, rank one refers to the tensor transformation law, not to the dimension of the image of an individual matrix.

Fix the input spin block $V_J$ and a finite set $S$ of spin labels containing $J$, with $|J'-J|\leq1$ for every $J'\in S$. Let $H=\bigoplus_{J'\in S}V_{J'}$, with one labelled copy of each selected block, let $\iota_{J'}:V_{J'}\to H$ be the block inclusion, and let $\pi_J:H\to V_J$ be the orthogonal projection onto the input block.

For each $J'\in S$ and $k\in\{0,1\}$, take every component $T_q:V_J\to V_{J'}$, $q=-k,-k+1,\ldots,k$, of every rank-$k$ spherical tensor family in the stated convention. The order-one absorption–emission error span is the complex linear span in $\mathcal L(H)$, the space of linear endomorphisms of $H$, of $I_H$ and all $\iota_{J'}T_q\pi_J$.

For the finite-block zero-temperature emitter model, assume the Axiom of Choice, Countable Choice and Dependent Choice and all system, bath, tensor and pointwise spectral hypotheses of the canonical downward-jumps result. Its three jumps have the form $L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_{m=-J}^{J}f(J)C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$, for $\delta=-1,0,1$, with out-of-range terms zero. Here $C$ is the Clebsch–Gordan coefficient in the stated ordered coupling and phase convention, $f(J)$ is the scalar specified by that result, and $\gamma>0$ is its coupling scale. The article calls the single-step errors represented by these jumps rank-one transitions. Each jump is a coherent sum over the allowed magnetic labels and spin blocks; it is not, in general, a single resolved matrix unit.

The article describes the Aydin–Barg code as correcting any rank-one transition error with $|J-J'|\leq1$ and $|m-m'|\leq1$, and says that only the $J\to J-1$ branch occurs in its zero-temperature model. This sentence records the article's claim; correction is not part of the definition of tensor rank. In the error-span convention above, a component is a coherent operator: the displayed label bounds alone do not assert correction of every separately resolved operator $|J',m'\rangle\langle J,m|$.

## Definition references

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[def-qec-prereq-ae-error-span-contract]]

[[pthm-qec-distinguishability-atomic-jumps]]

## Justification

The spin-tensor convention supplies the finite blocks, magnetic bases, coupling coefficients and the three tensor-component equations. The error-span contract supplies the selected direct sum and its block maps. Each composition $\iota_{J'}T_q\pi_J$ is a linear endomorphism of $H$, so it and $I_H$ lie in the common operator space $\mathcal L(H)$ and have a well-defined complex span. The contract also distinguishes a coherent component from an individually resolved matrix unit. Under the explicitly stated hypotheses, the downward-jumps result supplies the displayed finite sums and their zero out-of-range convention. Each term maps the named basis vector in the input block to the named vector in the output block, so the finite sum is a well-defined linear operator. The correction statement is attributed to the article and is not used to justify the definition. [[def-qec-prereq-spin-tensor-cg-conventions]] [[def-qec-prereq-ae-error-span-contract]] [[pthm-qec-distinguishability-atomic-jumps]]
