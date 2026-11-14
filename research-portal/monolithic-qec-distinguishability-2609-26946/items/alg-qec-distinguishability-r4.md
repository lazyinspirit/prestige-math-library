---
id: alg-qec-distinguishability-r4
kind: algorithm
domain: physics
title: Four-level syndrome recovery
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
  - math:def-qc-instrument-and-conditional-state
  - math:def-qc-projective-measurement
  - math:thm-trace-of-ab-equals-trace-of-ba
  - math:thm-qc-instrument-outcome-law-normalizes
  - math:thm-qc-instrument-conditional-state-is-density
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-qc-projective-measurement: mathematical-premise
  math:thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  math:thm-qc-instrument-outcome-law-normalizes: mathematical-premise
  math:thm-qc-instrument-conditional-state-is-density: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Four-level system, paragraph following Eq. (2)
      statement: The natural recovery measures whether a decay occurred, does nothing
        on the null outcome, and maps the two decay-space basis states to the
        corresponding code basis states.
      hypotheses: The article's idealized four-level model, with code span of the
        first two basis states and decay span of the other two.
      reading_limits: The supplied extracted text of PDF page 2 was read. This
        reference attributes the article's procedure; the channel and
        normalization justification below is local and does not use the article
        as its proof.
physical_scope: Idealized recovery operation for the postulated four-level
  model; no experimental implementation or observed outcome is asserted.
dependency_level: 2
---

## Definition

Use the four-level model with ordered orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$. Its code space is $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$ and its decay space is $\mathcal D=\operatorname{span}\{|2\rangle,|3\rangle\}$. Put $P=|0\rangle\langle0|+|1\rangle\langle1|$, $Q=|2\rangle\langle2|+|3\rangle\langle3|$, and $U=|0\rangle\langle2|+|1\rangle\langle3|$. Here $P$ and $Q$ project onto the code and decay spaces, respectively, and $U$ maps $|2\rangle$ to $|0\rangle$ and $|3\rangle$ to $|1\rangle$.

The input is a density operator $\rho$ on the four-level space, in particular an output of the postulated noise channel. A density operator is positive semidefinite with trace one. Measure the two-outcome syndrome with projectors $P$ and $Q$: the outcome labelled null has unnormalized state $P\rho P$, and the outcome labelled decay has unnormalized state $Q\rho Q$. Leave the null branch unchanged; on the decay branch apply $U$. Thus the recovered, unnormalized branch outputs are $\mathcal I_{\rm null}(\rho)=P\rho P$ and $\mathcal I_{\rm decay}(\rho)=U\rho U^\dagger$. Their traces are the outcome probabilities. When an outcome has positive probability, divide its recovered output by that probability to obtain its conditional recovered state; when its probability is zero, no conditional state is assigned.

If the outcome is discarded, the physical recovery is the channel $\mathcal R_4(X)=PXP+UXU^\dagger$, whose output is supported on $\mathcal C$. For a logical two-dimensional space with isometric encoding $V|0_L\rangle=|0\rangle$ and $V|1_L\rangle=|1\rangle$, the corresponding decoder is $X\mapsto V^\dagger\mathcal R_4(X)V$. This procedure specifies no compensation for an unknown jump time and makes no claim that the decay branch restores an arbitrary input exactly.

## Definition references

[[post-qec-distinguishability-four-level-model]]

[[def-qec-prereq-finite-operator-conventions]]

[[def-qec-prereq-restricted-logical-channel]]

[[math:def-qc-instrument-and-conditional-state]]

[[math:def-qc-projective-measurement]]

[[math:thm-trace-of-ab-equals-trace-of-ba]]

[[math:thm-qc-instrument-outcome-law-normalizes]]

[[math:thm-qc-instrument-conditional-state-is-density]]

## Facts & Assumptions

[F1] The postulated model has the displayed orthonormal basis, code space and orthogonal decay space. [[post-qec-distinguishability-four-level-model]]

[F2] Outer products and adjoints act in the specified finite orthonormal bases by the stated ket and bra conventions. [[def-qec-prereq-finite-operator-conventions]]

[F3] A quantum channel is a completely positive trace-preserving linear map, and a code-supported physical recovery gives a decoder by conjugation with the encoding isometry. [[def-qec-prereq-restricted-logical-channel]]

[F4] A finite instrument has completely positive outcome maps whose sum preserves trace; its conditional state is the outcome output divided by its positive trace, with no conditional state assigned at zero weight. [[math:def-qc-instrument-and-conditional-state]]

[F5] A finite projective measurement consists of self-adjoint idempotents that are pairwise orthogonal and sum to the identity, on a nonzero finite-dimensional complex inner-product space with a finite nonempty outcome set. Its outcome weights on a density operator are $\operatorname{tr}(\rho P_a)$. [[math:def-qc-projective-measurement]]

[F6] For compatible rectangular matrices over a field, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. [[math:thm-trace-of-ab-equals-trace-of-ba]]

[F7] For a finite instrument and an input density operator, the branch traces are nonnegative and sum to one, hence form a probability distribution. [[math:thm-qc-instrument-outcome-law-normalizes]]

[F8] For a finite instrument and an input density operator, dividing a branch output by its strictly positive trace gives a density operator on the output space. [[math:thm-qc-instrument-conditional-state-is-density]]

## Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 By orthonormality and the outer-product action in [F1] and [F2], $P^\dagger=P$, $P^2=P$, $Q^\dagger=Q$, $Q^2=Q$, $PQ=QP=0$, and $P+Q=I$. Also $U^\dagger U=Q$, $UP=0$, and $UQ=U$. The four-level space is nonzero and finite-dimensional, and $\{\mathrm{null},\mathrm{decay}\}$ is finite and nonempty. Thus $(P,Q)$ meets every projector hypothesis in [F5] and defines the stated projective syndrome measurement. [given, F1, F2, F5]

2.1 The specified syndrome branch operations are $X\mapsto PXP$ and $X\mapsto QXQ$. Applying $U$ after the latter gives $U(QXQ)U^\dagger=UXU^\dagger$ by $UQ=U$. By [F6], for any input density operator $\rho$, $\operatorname{tr}(P\rho P)=\operatorname{tr}(\rho P)$ and $\operatorname{tr}(U\rho U^\dagger)=\operatorname{tr}(\rho U^\dagger U)=\operatorname{tr}(\rho Q)$. These are exactly the syndrome weights defined in [F5], so the decay correction preserves its outcome weight. [F2, F5, F6, step 1.1]

3.1 Each recovered branch map is complex-linear and completely positive: for $A=P$ or $A=U$, its amplification is conjugation by $A\otimes I$; this preserves self-adjointness and, for positive semidefinite $Z$, its quadratic form at $z$ is $((A^\dagger\otimes I)z)^\dagger Z((A^\dagger\otimes I)z)\geq0$. For every $X$, [F6] and step 1.1 give $\operatorname{tr}(PXP)+\operatorname{tr}(UXU^\dagger)=\operatorname{tr}(XP)+\operatorname{tr}(XQ)=\operatorname{tr}(X)$, where the last equality follows by adding the finite diagonal sums and using $P+Q=I$. Hence the two recovered branch maps form a finite instrument from the four-level space to itself by [F4]. Their sum is linear, completely positive and trace-preserving, hence a channel by [F3]. The ranges of $P$ and $U$ lie in $\mathcal C$, so its outputs are code-supported. The displayed $V$ sends an orthonormal logical basis to an orthonormal basis of $\mathcal C$ and is therefore an isometric encoding; the decoder rule now follows from [F3]. [F1, F2, F3, F4, F6, step 1.1, step 2.1]

4.1 Apply [F7] to the finite instrument established in step 3.1 and the density input $\rho$ specified in the Definition: its two recovered branch traces are probabilities summing to one. For either branch whose trace is positive, [F8] applies to the same instrument and input and shows that the stated normalized output is a density operator. At zero trace, [F4] assigns no conditional state. Thus the output and conditional-state rules have their asserted meanings without asserting exact correction of an arbitrary decay-branch input. [given, F4, F7, F8, step 3.1] ∎
