---
id: pthm-qec-distinguishability-augmented-jz-linear-correction
kind: physics-theorem
domain: physics
title: Well-defined augmented syndrome and first-order rotation correction
status: draft
origin: session
deps:
  - alg-qec-distinguishability-augmented-jz-check
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
  - pthm-qec-distinguishability-ae-correction
  - lem-qec-prereq-signed-ae-code-product-test
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:def-qc-density-operator
  - math:def-qc-trace-norm
  - physics:def-nrqmx-finite-hermitian-matrix-exponential
  - math:thm-qc-density-spectral-ensemble
  - math:thm-qc-trace-norm-rank-one-formula
  - math:thm-qc-trace-norm-duality-and-norm-properties
dependency_roles:
  alg-qec-distinguishability-augmented-jz-check: formulation-prerequisite
  def-qec-distinguishability-ae-code: formulation-prerequisite
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  pthm-qec-distinguishability-ae-correction: physical-result
  lem-qec-prereq-signed-ae-code-product-test: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
  math:def-qc-trace-norm: mathematical-premise
  physics:def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  math:thm-qc-density-spectral-ensemble: mathematical-premise
  math:thm-qc-trace-norm-rank-one-formula: mathematical-premise
  math:thm-qc-trace-norm-duality-and-norm-properties: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: "PDF p. 16, Remark: uncalibrated lifts, central sentences"
      statement: The article proposes distinguishing the code from its Jz image and
        applying the normalized inverse isometry, and states that the augmented
        check corrects the term linear in the rotation angle for the two codes.
        It leaves accumulated higher-order repeated-check performance open.
      hypotheses: The displayed spin-five Æ and spin-four Aydin–Barg codes and the
        idealized augmented check in the remark.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution. The calculation below uses the declared completed suppliers
        and does not use the article's claim as its proof.
physical_scope: Conditional single-check statement for the ideal
  finite-dimensional spin model and the specified projective instrument; no
  experimental realization or accumulated repeated-check performance is
  asserted.
dependency_level: 19
---

## Statement

For either the displayed spin-five Æ code or the displayed signed spin-four Aydin–Barg code, let $\mathcal C$ be the two-dimensional code subspace, $P$ its orthogonal projector, and $\mathcal D=J_z\mathcal C$. Use $s=10$ for the Æ code and $s=8$ for the Aydin–Barg code. Then $PJ_zP=0$ and $PJ_z^2P=sP$. In particular $\mathcal C\perp\mathcal D$, and the map $W(J_z|\bar\mu\rangle/\sqrt{s})=|\bar\mu\rangle$, $\mu=0,1$, is a well-defined isometry from $\mathcal D$ onto $\mathcal C$.

The operators $I,J_z,J_+,J_-$ obey the pair-product Knill–Laflamme scalar compression condition on each code. Here the spin generators form a rank-one spherical tensor family, where rank denotes tensor rank rather than matrix rank.

For the ideal augmented check, apply the orthogonal projections onto $\mathcal C$ and $\mathcal D$ and apply $W$ on the latter outcome. If a density operator $\rho$ supported on $\mathcal C$ (that is, $\rho=P\rho P$) first undergoes $U_\theta=e^{-i\theta J_z}$, the sum of these two unnormalized corrected outputs is $\rho+O(\theta^2)$ in trace norm as real $\theta\to0$. Thus the single check removes the term linear in the rotation angle without knowing that angle. This does not establish the accumulated error of repeated checks.

## Statement references

[[alg-qec-distinguishability-augmented-jz-check]]

[[def-qec-distinguishability-ae-code]]

[[def-qec-distinguishability-aydin-barg-code]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[def-qec-prereq-ae-error-span-contract]]

[[math:def-qc-density-operator]]

[[math:def-qc-trace-norm]]

[[physics:def-nrqmx-finite-hermitian-matrix-exponential]]

[[math:thm-qc-density-spectral-ensemble]]

[[math:thm-qc-trace-norm-rank-one-formula]]

[[math:thm-qc-trace-norm-duality-and-norm-properties]]

## Facts & Assumptions

[F1] The Æ codewords are $\sqrt{5/7}|5,-2\rangle+\sqrt{2/7}|5,5\rangle$ and $\sqrt{2/7}|5,-5\rangle+\sqrt{5/7}|5,2\rangle$. [[def-qec-distinguishability-ae-code]]

[F2] The signed Aydin–Barg codewords are $\sqrt{1/3}|4,-4\rangle+\sqrt{2/3}|4,2\rangle$ and $\sqrt{2/3}|4,-2\rangle-\sqrt{1/3}|4,4\rangle$. [[def-qec-distinguishability-aydin-barg-code]]

[F3] The magnetic basis is orthonormal, $J_z|J,m\rangle=m|J,m\rangle$, and the ladder operators act with the coefficients specified by the spin convention. That convention defines a rank-one tensor family by its commutators with $J_z,J_+,J_-$. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F4] For the Æ code, all pair products of the identity and coherent order-one tensor components have scalar code compressions on any selected finite family of allowed target blocks containing the input block. [[pthm-qec-distinguishability-ae-correction]]

[F5] The same pair-product condition holds for the displayed signed spin-four code and the selected order-one tensor span. [[lem-qec-prereq-signed-ae-code-product-test]]

[F6] The selected error span includes the ambient identity and all components of rank-one tensor families extended from the input block. [[def-qec-prereq-ae-error-span-contract]]

[F7] The ideal augmented check resolves $\mathcal C$ and $\mathcal D$ and applies the stated isometry on the latter branch. Its output for each projection is the unnormalized projected density operator, followed by the branch operation. [[alg-qec-distinguishability-augmented-jz-check]]

[F8] A density operator on a nonzero finite-dimensional complex inner-product space is non-negative with trace one. Here code support is expressed by $\rho=P\rho P$. The trace norm $\|X\|_1$ is the sum of the singular values of $X$. [[math:def-qc-density-operator]] [[math:def-qc-trace-norm]]

[F9] On $\mathbb C^d$, the matrix exponential is the operator-norm convergent series $e^{zA}=\sum_{k\geq0}z^kA^k/k!$; the scalar majorant $\sum_{k\geq0}(|z|\|A\|)^k/k!$ converges. The operator norm bounds $\|Av\|$ by $\|A\|\|v\|$ and is submultiplicative. [[physics:def-nrqmx-finite-hermitian-matrix-exponential]]

[F10] Every finite-dimensional density operator has a finite orthogonal spectral ensemble $\rho=\sum_j\lambda_j|e_j\rangle\langle e_j|$, with unit $e_j$, $\lambda_j>0$, and $\sum_j\lambda_j=1$. [[math:thm-qc-density-spectral-ensemble]]

[F11] For finite complex inner-product spaces, $\||x\rangle\langle y|\|_1=\|x\|\|y\|$, and the trace norm is absolutely homogeneous and satisfies the triangle inequality. [[math:thm-qc-trace-norm-rank-one-formula]] [[math:thm-qc-trace-norm-duality-and-norm-properties]]

[A1] Adopt the Axiom of Choice, Countable Choice and Dependent Choice as carried by the augmented-check interface. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** Either displayed code, its spin block and the ideal augmented check, with the assumptions in [A1].

**Goal:** Establish the two compressions, the isometry and pair-product conditions, and the stated single-check expansion.

1.1 The two codewords have disjoint magnetic supports, so their cross matrix elements of $J_z$ and $J_z^2$ vanish. For the Æ code the two first moments are $(5(-2)+2(5))/7=0$ and $(2(-5)+5(2))/7=0$, and both second moments are $10$. For the signed spin-four code the first moments are $(-4+2(2))/3=0$ and $(2(-2)+4)/3=0$, and both second moments are $8$. The sign in the latter codeword does not change its diagonal moments. Hence $PJ_zP=0$ and $PJ_z^2P=sP$ with the stated positive $s$. [F1, F2, F3, algebra]

1.2 The ladder formulas give $[J_z,J_\pm]=\pm J_\pm$ and $[J_+,J_-]=2J_z$ on each magnetic basis vector. Consequently $T_0=J_z$ and $T_{\pm1}=\mp J_\pm/\sqrt2$ satisfy the rank-one tensor commutator equations. With the input block among the selected blocks, their extensions and the ambient identity belong to the order-one span. Applying [F4] for the Æ code and [F5] for the spin-four code, and restricting the resulting scalar pair products to the input block, gives the condition for $I,J_z,J_+,J_-$. [F3, F4, F5, F6, algebra]

2.1 For $u,v\in\mathcal C$, $\langle u,J_zv\rangle=0$, so $\mathcal C\perp\mathcal D$. Also $\langle J_zu,J_zv\rangle=s\langle u,v\rangle$. Thus the two vectors $J_z|\bar\mu\rangle/\sqrt{s}$ form an orthonormal basis of $\mathcal D$, and the prescribed map $W$ sends this basis to the orthonormal code basis. It is consequently a well-defined onto isometry and satisfies $WJ_zv=\sqrt{s}v$ for every $v\in\mathcal C$. [F3, step 1.1, algebra]

3.1 Write $J_0=5$ or $4$ for the input spin. In its orthonormal magnetic basis, $\|J_zv\|^2=\sum_m m^2|v_m|^2\leq J_0^2\|v\|^2$, so $\|J_z\|\leq J_0$. By [F9], $U_\theta=I-i\theta J_z+R_\theta$, and the finite constant $C_0:=\sum_{k\geq2}J_0^k/k!$ bounds the tail by $\|R_\theta\|\leq C_0\theta^2$ for $|\theta|\leq1$: bound each $k$th term by $|\theta|^kJ_0^k/k!\leq\theta^2J_0^k/k!$ and sum the convergent series. For every unit $\psi\in\mathcal C$, step 2.1 gives $a:=PU_\theta\psi=\psi+r$ and $b:=WP_{\mathcal D}U_\theta\psi=-i\theta\sqrt{s}\psi+t$, where $r=PR_\theta\psi$ and $t=WP_{\mathcal D}R_\theta\psi$. An orthogonal projection is contractive by the orthogonal decomposition $v=P_av+(I-P_a)v$ and the identity $\|v\|^2=\|P_av\|^2+\|(I-P_a)v\|^2$; $W$ preserves the norm on $\mathcal D$. Hence $\|r\|,\|t\|\leq C_0\theta^2$, uniformly in unit code vectors. [F3, F9, step 2.1, algebra]

4.1 For the pure input $|\psi\rangle\langle\psi|$, [F7] identifies the sum of corrected outputs as $|a\rangle\langle a|+|b\rangle\langle b|$. Expanding $|a\rangle\langle a|-|\psi\rangle\langle\psi|$ gives $|\psi\rangle\langle r|+|r\rangle\langle\psi|+|r\rangle\langle r|$. Thus [F11] bounds its trace norm by $2\|r\|+\|r\|^2$, and bounds $\||b\rangle\langle b|\|_1$ by $(\sqrt{s}|\theta|+C_0\theta^2)^2$. For $|\theta|\leq1$, the sum of corrected outputs differs from the pure input in trace norm by at most $K\theta^2$, where $K=2C_0+C_0^2+(\sqrt{s}+C_0)^2$ is independent of $\psi$. [F7, F11, step 3.1, algebra]

5.1 For a code density operator, [F8] and [F10] give $\rho=\sum_j\lambda_j|e_j\rangle\langle e_j|$. Every retained eigenvector lies in $\mathcal C$, since $\lambda_je_j=\rho e_j=P\rho Pe_j$ and $\lambda_j>0$. Denote the sum of the two corrected branch maps by $\Phi_\theta(X)=PU_\theta XU_\theta^*P+WP_{\mathcal D}U_\theta XU_\theta^*P_{\mathcal D}W^*$. This map is linear, so [F11] and step 4.1 yield $\|\Phi_\theta(\rho)-\rho\|_1\leq\sum_j\lambda_jK\theta^2=K\theta^2$. The check needs no value of $\theta$; the bound is for one check as real $\theta\to0$ and says nothing about accumulated repeated-check error. Assumption [A1] is retained from the algorithm's original complementary-manifold procedure; the present finite calculation uses no additional choice. [F7, F8, F10, F11, A1, step 4.1, algebra] ∎
