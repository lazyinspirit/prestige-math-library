---
id: thm-qftx-n-extended-central-charge-bounds
kind: theorem
title: Positive central-charge bounds on a massive rest representation fiber
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-unitary-super-poincare-representation
  - def-qftx-super-poincare-algebra-4d
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
dependency_roles:
  def-qftx-unitary-super-poincare-representation: mathematical-premise
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.2, printed pp. 64–65, extended algebra and positive-energy argument; the local matrix-norm proof fixes the present normalization."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§1, printed pp. 5–6, N=1 algebra and multiplet context; no N=2 central-charge bound is imported from this section."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $N\ge2$. A fixed massive rest representation fiber consists here of a nonzero complex Hilbert space $\mathcal K$, a number $M>0$ with $P^0=MI$ and $P^j=0$, and scalar central charges $Z^{IJ}=z^{IJ}I$, where $Z=(z^{IJ})$ is the complex antisymmetric $N\times N$ matrix in the four-dimensional algebra with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\epsilon_{12}=1$. Suppose the charge operators and their actual Hilbert adjoints have a common dense invariant domain $\mathcal D$ on the fiber and every product in the expanded anticommutators is defined there. Use natural units $\hbar=c=1$, so $M$ and each $z^{IJ}$ have mass dimension one. For $v=(v_1,\ldots,v_N)\in\mathbb C^N$ define $\|v\|_2^2=\sum_I|v_I|^2$ and for $u,v\in\mathbb C^N$ put $u^*Zv=\sum_{I,J}\bar u_Iz^{IJ}v_J$. Define

$$\|Z\|_{\mathrm{op}}=\sup_{\|v\|_2=1}\|Zv\|_2.$$

Then $M\ge\|Z\|_{\mathrm{op}}$. For $N=2$, write $z=z^{12}$, so $Z=\begin{pmatrix}0&z\\-z&0\end{pmatrix}$ and $\|Z\|_{\mathrm{op}}=|z|$. If $z=e^{i\phi}|z|$ (with any $\phi$ when $z=0$), define on $\mathcal D$

$$A:=Q^1_1-e^{i\phi}(Q^2_2)^*,\qquad A^\sharp:=(Q^1_1)^*-e^{-i\phi}Q^2_2.$$

The algebraic anticommutator $AA^\sharp+A^\sharp A$ equals $4(M-|z|)I$ on $\mathcal D$. Here $A^\sharp$ is the displayed combination of the individual actual adjoints; it is not asserted to be the adjoint of an unbounded sum on its maximal domain. If $\mathcal K$ is finite-dimensional, all charge domains equal $\mathcal K$ and $A^\sharp=A^*$, so the formula is the ordinary operator anticommutator. At saturation $M=|z|$, for every $\psi\in\mathcal D$ one has $A\psi=A^\sharp\psi=0$. This is a representation-theoretic fiber statement: it does not assert that the fixed-momentum fiber is a normalizable subspace of the full Hilbert space, or that a state with specified charge exists or is stable.

## Statement references

[Gates et al., §3.2](https://arxiv.org/pdf/hep-th/0108200).

[Martin, §1](https://arxiv.org/pdf/hep-ph/9709356v7).

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].

Positive unitary super-Poincare representation with spectral-domain covariance: [[def-qftx-unitary-super-poincare-representation]].

Real and imaginary parts, complex conjugation, and modulus: [[def-complex-conjugate-real-imaginary-part-and-modulus]].

The Axiom of Countable Choice ($\mathrm{AC}_\omega$): [[def-countable-choice]].

## Facts & Assumptions

**Given:** $N\ge2$, $M>0$, a nonzero rest-fiber Hilbert space $\mathcal K$, scalar central-charge matrix $Z$, and common invariant product domain $\mathcal D$ as in the Statement.

[A1] Assume Countable Choice, as required by the PVM and unbounded-operator suppliers used by the representation definition ([[def-countable-choice]]).

[F1] [[def-qftx-super-poincare-algebra-4d]]: $\eta=\operatorname{diag}(-1,1,1,1)$, $\epsilon_{12}=1$, $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, $\{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ}$, and the scalar central-charge matrix is antisymmetric in $I,J$.

[F2] [[def-qftx-unitary-super-poincare-representation]]: the Hilbert inner product is positive, $\bar Q=(Q)^*$ is the actual adjoint with its actual domain, and every product in these anticommutators is defined on the common invariant domain.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: for $z=a+bi$, $\bar z=a-bi$ and $|z|=\sqrt{a^2+b^2}$.

## Proof


**Given:** The algebra and adjoint representation in [F1]–[F2], restricted to the fixed rest fiber in the Statement.

1.1 At rest $P_0=-M I$ and $P_j=0$, so [F1] gives $\{Q^I_1,(Q^J_1)^*\}=2M\delta_{IJ}I$ and $\{Q^I_2,(Q^J_2)^*\}=2M\delta_{IJ}I$. Put $q_I=Q^I_1$ and $r_I=(Q^I_2)^*$; then $\{q_I,r_J^*\}=2z^{IJ}I$ and $\{r_J,q_I^*\}=2\bar z_{IJ}I$, with all these products defined on $\mathcal D$. [A1, F1, F2, given]

2.1 For $u,v\in\mathbb C^N$, define on $\mathcal D$ the charge combination $B_{u,v}=\sum_I\bar u_Iq_I+\sum_I\bar v_Ir_I$ and the combination of its summand adjoints $B^\sharp_{u,v}=\sum_Iu_Iq_I^*+\sum_Iv_Ir_I^*$. Expanding the algebraic anticommutator on $\mathcal D$ gives $B_{u,v}B^\sharp_{u,v}+B^\sharp_{u,v}B_{u,v}=\left(2M(\|u\|_2^2+\|v\|_2^2)+4\operatorname{Re}(u^*Zv)\right)I$. The diagonal blocks use the two mixed rest anticommutators in step 1.1, and the off-diagonal terms are $2u^*Zv$ and its complex conjugate. For every $\psi\in\mathcal D$, expanding the quadratic form term by term and using the adjoint identity for each individual charge gives $\langle(B_{u,v}B^\sharp_{u,v}+B^\sharp_{u,v}B_{u,v})\psi,\psi\rangle=\|B_{u,v}\psi\|^2+\|B^\sharp_{u,v}\psi\|^2\ge0$. [F2, step 1.1, algebra]

3.1 Fix a unit vector $v\in\mathbb C^N$. If $Zv\ne0$, choose $u=-Zv/\|Zv\|_2$, so $\|u\|_2=1$ and $u^*Zv=-\|Zv\|_2$. Applying step 2.1 to any nonzero $\psi\in\mathcal D$ yields $0\le4(M-\|Zv\|_2)\|\psi\|^2$, hence $M\ge\|Zv\|_2$. If $Zv=0$, the same inequality follows from $M>0$. Taking the supremum over all unit $v$ proves $M\ge\|Z\|_{\mathrm{op}}$. [given, step 2.1, algebra, choose]

4.1 When $N=2$, $Z=\begin{pmatrix}0&z\\-z&0\end{pmatrix}$, so direct multiplication gives $Z^*Z=|z|^2I_2$ and therefore $\|Zv\|_2=|z|\|v\|_2$ for every $v$; thus $\|Z\|_{\mathrm{op}}=|z|$. With $q=Q^1_1$ and $r=Q^2_2$, expanding $A=q-e^{i\phi}r^*$ and $A^\sharp=q^*-e^{-i\phi}r$ gives $AA^\sharp+A^\sharp A=\{q,q^*\}+\{r^*,r\}-e^{-i\phi}\{q,r\}-e^{i\phi}\{r^*,q^*\}=2M+2M-2e^{-i\phi}z-2e^{i\phi}\bar z=4(M-|z|)I$ on $\mathcal D$. This proves the stated N=2 identity with the declared phase convention. [F1, F3, step 1.1, step 3.1, algebra]

5.1 If $M=|z|$, step 4.1 gives $AA^\sharp+A^\sharp A=0$ on $\mathcal D$. For every $\psi\in\mathcal D$, the actual-adjoint identity for the individual charge summands in [F2] gives $0=\langle(AA^\sharp+A^\sharp A)\psi,\psi\rangle=\|A\psi\|^2+\|A^\sharp\psi\|^2$. Each squared norm is nonnegative, so both vanish. If $\mathcal K$ is finite-dimensional, $A^\sharp=A^*$ and this is the ordinary operator-adjoint conclusion; in general it is the stated dense-domain conclusion. The result is confined to the fixed rest fiber and asserts no state existence or stability. [F2, step 4.1] ∎
## Remarks

For general $N$, the norm inequality does not by itself claim a multiplicity formula or a shortened representation. Those require additional representation-theoretic hypotheses and proofs.
