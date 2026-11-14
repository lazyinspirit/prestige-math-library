---
id: alg-qec-distinguishability-augmented-jz-check
kind: algorithm
domain: physics
title: Proposed augmented Jz syndrome check for an uncalibrated lift
status: draft
origin: session
deps:
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - alg-qec-distinguishability-syndrome-measurement
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-qc-instrument-and-conditional-state
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:thm-qc-kraus-map-completely-positive
dependency_roles:
  def-qec-distinguishability-ae-code: formulation-prerequisite
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  alg-qec-distinguishability-syndrome-measurement: formulation-prerequisite
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:thm-qc-kraus-map-completely-positive: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: "PDF page 16, Remark: uncalibrated lifts"
      statement: The article proposes resolving the code and its Jz image within the
        original spin manifold and reversing Jz on that image. It states that
        this corrects the term linear in the rotation angle and leaves
        accumulated higher-order repeated-check performance open.
      hypotheses: The displayed spin-five Æ and spin-four Aydin–Barg codes and the
        idealized check described in the remark.
      reading_limits: The supplied extracted article text at the cited passage was
        read. This reference attributes the proposal; the justification below
        directly checks the displayed finite-dimensional construction. No
        experimental realization or repeated-check performance is established.
physical_scope: An ideal projective check and conditional operation in the
  finite lifted model; no experimental realization or repeated-cycle performance
  guarantee is asserted.
dependency_level: 18
---

## Definition

Choose either of the displayed encodings: the spin-five Æ code or the spin-four Aydin–Barg code. Let $J_0$ be respectively $5$ or $4$, let $H_0$ be its spin block, and let $|\bar0\rangle,|\bar1\rangle$ be its displayed orthonormal codewords. Put $\mathcal C=\operatorname{span}\{|\bar0\rangle,|\bar1\rangle\}$, let $P_{\mathcal C}$ project orthogonally onto it, and let $J_z|J_0,m\rangle=m|J_0,m\rangle$. Set $s=10$ for the Æ code and $s=8$ for the Aydin–Barg code. Define $\mathcal D=J_z\mathcal C$ and $W:\mathcal D\to\mathcal C$ by $W(J_z|\bar\mu\rangle/\sqrt{s})=|\bar\mu\rangle$ for $\mu=0,1$.

Let $H$ be the finite physical space of the original manifold check, containing $H_0$. In operator products, regard $W$ as an operator on $H$ with range in $\mathcal C$, extended by zero on $\mathcal D^\perp$. In the ideal manifold check, replace the original outcome for $H_0$ by the three orthogonal outcomes with projectors $P_{\mathcal C}$, $P_{\mathcal D}$, and $P_R=P_{H_0}-P_{\mathcal C}-P_{\mathcal D}$, where $P_{\mathcal D}$ projects onto $\mathcal D$. Retain the original complementary-manifold outcome $Q=I-P_{H_0}$. For input density operator $\rho$ after the modeled evolution, the unnormalized output for a projector $P_a$ is $P_a\rho P_a$; its probability is its trace, and its conditional state is the output divided by that probability when positive. On the $\mathcal D$ outcome apply $W$, giving the unnormalized output $WP_{\mathcal D}\rho P_{\mathcal D}W^*$. Leave the $\mathcal C$ and $R$ outcomes as projected; on $Q$, retain the original check's conditional procedure. A zero-probability outcome has no conditional state.

## Definition references

[[def-qec-distinguishability-ae-code]]

[[def-qec-distinguishability-aydin-barg-code]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[alg-qec-distinguishability-syndrome-measurement]]

[[math:def-qc-instrument-and-conditional-state]]

## Facts & Assumptions

[F1] The Æ codewords are $\sqrt{5/7}|5,-2\rangle+\sqrt{2/7}|5,5\rangle$ and $\sqrt{2/7}|5,-5\rangle+\sqrt{5/7}|5,2\rangle$. [[def-qec-distinguishability-ae-code]]

[F2] The Aydin–Barg codewords are $\sqrt{1/3}|4,-4\rangle+\sqrt{2/3}|4,2\rangle$ and $\sqrt{2/3}|4,-2\rangle-\sqrt{1/3}|4,4\rangle$. [[def-qec-distinguishability-aydin-barg-code]]

[F3] Magnetic basis vectors in a spin block are orthonormal and $J_z$ acts on the vector labeled $m$ by multiplication by $m$. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F4] The original ideal check projects onto the initial spin block and its orthogonal complement. An instrument assigns outcome weights by traces and conditional states by normalization for positive weights. [[alg-qec-distinguishability-syndrome-measurement]] [[math:def-qc-instrument-and-conditional-state]]

[F5] A finite Kraus sum between finite-dimensional complex inner-product spaces is completely positive. [[math:thm-qc-kraus-map-completely-positive]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice as carried by the original finite lifted-model check. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Establish the well-definedness of the projectors, branch maps and conditional-state prescription.

1.1 By [F1]–[F3], the codewords have disjoint magnetic supports, so their off-diagonal matrix elements of $J_z$ and $J_z^2$ vanish. For the Æ code the diagonal first moments are $(5(-2)+2(5))/7=0$ and $(2(-5)+5(2))/7=0$; both second moments equal $10$. For the Aydin–Barg code the diagonal first moments are $(-4+2(2))/3=0$ and $(2(-2)+4)/3=0$; both second moments equal $8$. Therefore $P_{\mathcal C}J_zP_{\mathcal C}=0$ and $P_{\mathcal C}J_z^2P_{\mathcal C}=sP_{\mathcal C}$ with $s>0$. The first identity makes $\mathcal C$ orthogonal to $\mathcal D$; the second makes $J_z|\bar0\rangle/\sqrt{s}$ and $J_z|\bar1\rangle/\sqrt{s}$ orthonormal. Hence they form a basis of $\mathcal D$ and the stated $W$ is a well-defined isometry onto $\mathcal C$. [given, F1, F2, F3, F4]

2.1 Consequently $P_R$ is the orthogonal projector onto the remainder of $H_0$, and the four listed projectors are mutually orthogonal and sum to $I_H$. Each projection outcome map $X\mapsto P_aXP_a$ has the single Kraus operator $P_a$, so [F5] establishes its complete positivity. In the finite magnetic basis, direct summation gives $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{tr}(BA)$ for operators on $H$. Applying this to each projection and using $P_a^2=P_a$ gives $\operatorname{tr}(P_aXP_a)=\operatorname{tr}(XP_a)$ for every $X$. Since $\sum_aP_a=I_H$, the sum of the four traces is $\operatorname{tr}X$. Thus these maps form a finite instrument in the sense of [F4]. [F3, F4, F5, step 1.1, algebra]

3.1 The corrected $\mathcal D$ map has the single Kraus operator $K_{\mathcal D}=WP_{\mathcal D}$ on $H$, so it too is completely positive by [F5]. Step 1.1 gives $K_{\mathcal D}^*K_{\mathcal D}=P_{\mathcal D}$. The finite trace identity of step 2.1 therefore gives $\operatorname{tr}(K_{\mathcal D}XK_{\mathcal D}^*)=\operatorname{tr}(XP_{\mathcal D})=\operatorname{tr}(P_{\mathcal D}XP_{\mathcal D})$ for every $X$. Replacing the uncorrected $\mathcal D$ branch by this map preserves total trace and gives another instrument. The probabilities and positive-weight conditional states are consequently those specified in [F4]. Assumption [A1] is inherited only when invoking the original check's conditional procedure on $Q$; this finite matrix verification makes no additional use of choice. That $Q$ procedure remains separate, and no decoder for it is constructed here. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, algebra] ∎

## Remarks

The separate physics-theorem [[pthm-qec-distinguishability-augmented-jz-linear-correction]] analyzes the single-check isolated-rotation property of this procedure. The article leaves the accumulated effect of higher-order terms under the complete repeated-check channel open.
