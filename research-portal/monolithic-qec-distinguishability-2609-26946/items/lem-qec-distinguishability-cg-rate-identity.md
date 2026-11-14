---
id: lem-qec-distinguishability-cg-rate-identity
kind: lemma
domain: mathematics
title: Clebsch–Gordan total-rate identity
status: published
origin: session
deps:
  - def-qec-distinguishability-angular-basis
  - def-qec-prereq-spin-tensor-cg-conventions
  - lem-qec-prereq-dipole-strength-sum-contract
  - physics:thm-nrqm-orbital-and-spin-tensor-spin-composition
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-trace-of-a-square-matrix
  - math:thm-trace-of-ab-equals-trace-of-ba
dependency_roles:
  def-qec-distinguishability-angular-basis: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  lem-qec-prereq-dipole-strength-sum-contract: mathematical-premise
  physics:thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
  math:prop-orthogonal-projection-formula-and-linearity: mathematical-premise
  math:def-trace-of-a-square-matrix: mathematical-premise
  math:thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 14, Eq. (S4.2), and p. 15, paragraph following it
      statement: The sum over delta of the squared coefficients
        C^(J-1,m+delta)_(1,delta;J,m) equals (2J-1)/(2J+1), for J at least 1;
        the J=0 ground manifold is excluded from downward-transition sums.
      hypotheses: The article's angular-momentum and coefficient conventions, with J
        at least 1 and admissible magnetic label m.
      reading_limits: The supplied article text at these locations was read for
        attribution. The article is not used as proof of the identity.
dependency_level: 2
---

## Statement

Let $J\in\{1,\tfrac32,2,\ldots\}$ and $m=-J,-J+1,\ldots,J$. In the ordered coupling $V_1\otimes V_J$, take $C^{J-1,m+\delta}_{1,\delta;J,m}$ to be the coefficient of $|1,\delta\rangle\otimes|J,m\rangle$ in the normalized spin-$(J-1)$ coupled vector of magnetic label $m+\delta$, and take it to be zero when that label is outside the spin-$(J-1)$ range. Then $\sum_{\delta\in\{0,\pm1\}}|C^{J-1,m+\delta}_{1,\delta;J,m}|^2=(2J-1)/(2J+1)$. The $J=0$ ground manifold is excluded from the article's downward-transition sums.

## Facts & Assumptions

**Given:** A spin label $J\geq1$, an admissible magnetic label $m$, and the coefficient convention in the Statement.

**Goal:** Establish the displayed sum for each such $J$ and $m$.

[F1] The angular basis uses the ordered coupling and zero convention stated above. Its coefficients are the product-basis coordinates of normalized coupled vectors, with a common highest-weight phase for the spin-$(J-1)$ summand. [[def-qec-distinguishability-angular-basis]] [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] The product decomposes orthogonally into invariant spin summands. The spin-$(J-1)$ summand has dimension $2J-1$ and an orthonormal basis $v_M$ of total magnetic weights $M=-(J-1),\ldots,J-1$. The total spin components are $J_a^{(1)}\otimes I+I\otimes J_a^{(J)}$. [[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition]]

[F3] In $V_J$, the magnetic basis diagonalizes $J_z^{(J)}$, and $J_+^{(J)}|J,m\rangle=\sqrt{(J-m)(J+m+1)}|J,m+1\rangle$ with nonzero coefficient whenever $m<J$. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F4] For integer $J\geq1$, the stated coefficient sum is the downward dipole coefficient normalization contract. [[lem-qec-prereq-dipole-strength-sum-contract]]

[F5] For a subspace $W$ of a finite-dimensional inner-product space with orthonormal basis $(v_M)_M$, its orthogonal projection is the linear map $P_Wx=\sum_M\langle x,v_M\rangle v_M$, with image $W$, kernel $W^\perp$, and $P_W^2=P_W$. [[math:prop-orthogonal-projection-formula-and-linearity]]

[F6] For a finite square matrix $B=(B_{ij})$ over $\mathbb C$, $\operatorname{tr}B=\sum_i B_{ii}$. Every trace below is taken in the specified magnetic or product basis. [[math:def-trace-of-a-square-matrix]]

[F7] If $B\in M_{r\times s}(\mathbb C)$ and $D\in M_{s\times r}(\mathbb C)$, then $\operatorname{tr}(BD)=\operatorname{tr}(DB)$; in particular this applies to square matrices of size three. [[math:thm-trace-of-ab-equals-trace-of-ba]]

## Proof

1.1 If $J$ is an integer, the result follows from [F4] with $q=\delta$ and the coefficient convention of [F1]. It remains to consider half-integer $J\geq1$. Let $P$ be the orthogonal projection onto the spin-$(J-1)$ summand, and define $A$ on $V_J$ by $A_{mn}=\sum_{\delta=-1}^{1}P_{(\delta,m),(\delta,n)}$ in the ordered product basis. The summand and its orthogonal complement are invariant under the self-adjoint total spin components, so $P$ commutes with them. Summing the diagonal entries in the first tensor factor of each such commutator gives $[A,J_a^{(J)}]=0$: the terms acting on the first factor cancel by finite matrix trace cyclicity. Indeed, for fixed $m,n$, put $Q_{\delta\eta}=P_{(\delta,m),(\eta,n)}$ and $B=J_a^{(1)}$. This contribution is $\operatorname{tr}(QB-BQ)=0$ by [F6] and [F7], since both matrices have size three. [F1, F2, F4, F5, F6, F7, algebra]

2.1 By commutation with $J_z^{(J)}$, $A$ is diagonal in the magnetic basis. Commutation with $J_+^{(J)}$ and the nonzero ladder coefficients show that all its diagonal entries are equal, so $A=aI_{V_J}$. Taking traces gives $(2J+1)a=\operatorname{tr}A=\operatorname{tr}P=2J-1$, hence $a=(2J-1)/(2J+1)$. Here [F6] and the definition of $A$ give $\operatorname{tr}A=\sum_{m,\delta}P_{(\delta,m),(\delta,m)}=\operatorname{tr}P$. Writing $(v_M)_{\delta,m}$ for the product-basis coordinates, [F5] gives $\operatorname{tr}P=\sum_M\sum_{\delta,m}|(v_M)_{\delta,m}|^2=\sum_M1=2J-1$ by the normalization in [F2]. [step 1.1, F2, F3, F5, F6, algebra]

3.1 By [F5], expand $P$ in the orthonormal basis $v_M$. A product basis vector with labels $(\delta,m)$ has total magnetic weight $m+\delta$, so its diagonal entry of $P$ is the squared modulus of the coefficient in the Statement when that weight is admissible, and is zero otherwise. Consequently the sum of these three squared moduli is $A_{mm}=a$, as required. A common phase change of the coupled vectors leaves the squared moduli unchanged. [step 2.1, F1, F2, F5, algebra] ∎
