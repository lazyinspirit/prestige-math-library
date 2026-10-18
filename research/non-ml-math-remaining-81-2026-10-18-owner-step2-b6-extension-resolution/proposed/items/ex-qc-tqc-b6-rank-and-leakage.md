---
id: ex-qc-tqc-b6-rank-and-leakage
kind: example
title: B6 exact rank certificates and encoded leakage budget
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-qc-tqc-b6-su5-density
  - thm-qc-tqc-b6-su8-density
  - lem-qc-tqc-b6-joint-su5-su8-density
  - lem-qc-tqc-determinant-character-phase
  - thm-qc-tqc-approximate-encoded-two-qubit-gate
  - lem-qc-tqc-leakage-logical-error-accumulation
  - lem-qc-tqc-zero-logical-error-forces-zero-leakage
  - thm-qc-tqc-fibonacci-single-qubit-density
  - def-qc-tqc-six-anyon-encoded-subspace
  - def-qc-tqc-fusion-tree-basis
  - lem-qc-tqc-fusion-tree-dimension
  - def-qc-tqc-unitary-fusion-category
  - thm-qc-tqc-gauge-covariance
  - thm-qc-tqc-block-approximation-error
  - lem-qc-tqc-fibonacci-coefficient-ring-specialization
  - def-countable-choice
dependency_level: 11
axiom_use: Assumes ACω through the B6 and Fibonacci density theorems; the finite arithmetic certificates and path counts use no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 2 §2.2, PDF pp. 26–29
---

## Example

The exact B6 certificates have determinants $17$ and $22$ modulo $31$ for
the selected $24\times24$ and $63\times63$ Lie-word minors. In the
total-charge-$1$ six-anyon space there are two natural four-dimensional code
choices: a pair-charge code and the triple code of
[[def-qc-tqc-six-anyon-encoded-subspace]]. The density argument applies to
either chosen subspace; the two definitions use different fusion trees, and
no equality of their projectors is asserted. For a circuit with $G>0$ ideal
one-qubit or adjacent two-qubit gates, assigning $\delta_j=\epsilon/G$
gives total logical block error and leakage at most $\epsilon$.

## Facts & Assumptions

**Given:** The fixed Fibonacci fusion rule, the pair and triple fusion trees,
the exact finite-field certificates, and $\mathrm{AC}_\omega$.

[F1] The normalized B6 image in $U(5)$ has closure containing $SU(5)$, and
the image in $U(8)$ has closure containing $SU(8)$.
[[thm-qc-tqc-b6-su5-density]] [[thm-qc-tqc-b6-su8-density]]

[F2] The simultaneous B6 closure contains $SU(5)\times SU(8)$.
[[lem-qc-tqc-b6-joint-su5-su8-density]]

[F3] Per-gate full-space errors add; exact logical-block equality for an
ambient unitary forces zero leakage.
[[lem-qc-tqc-leakage-logical-error-accumulation]]
[[lem-qc-tqc-zero-logical-error-forces-zero-leakage]]

[F4] Reduction of coefficients through the stated $\mathbb F_{31}$
specialization sends a zero algebraic determinant to zero.
[[lem-qc-tqc-fibonacci-coefficient-ring-specialization]]

[F5] Three-Fibonacci-anyon braid generators are dense in $PU(2)$ under
$\mathrm{AC}_\omega$.
[[thm-qc-tqc-fibonacci-single-qubit-density]]

[F6] The six-anyon triple code has dimension $4$ in both total-charge blocks;
in total charge $1$, the ambient dimension is $5$.
[[def-qc-tqc-six-anyon-encoded-subspace]]

[F7] Every admissible fusion tree has its orthonormal path basis, and a
unitary associator composite changes between the pair, triple, and
left-associated trees.
[[def-qc-tqc-fusion-tree-basis]]
[[lem-qc-tqc-fusion-tree-dimension]]
[[def-qc-tqc-unitary-fusion-category]]
[[thm-qc-tqc-gauge-covariance]]

[F8] A full-space approximation by $\delta$ to a code-preserving unitary
target bounds both logical block error and leakage by $\delta$.
[[thm-qc-tqc-block-approximation-error]]

[F9] The categorical braid is the normalized braid multiplied by the same scalar $R_1^{e(b)}$ in both total-charge blocks. This phase must be tracked under coherent control.
[[lem-qc-tqc-determinant-character-phase]]

[A1] Assume $\mathrm{AC}_\omega$. [[def-countable-choice]]

[A2] Use the Fibonacci fusion rules and the triple-code path convention
stated in [[def-qc-tqc-six-anyon-encoded-subspace]]. The pair-charge code
below is a distinct subspace in the same total-charge block; no equality of
the two code projectors is assumed.

## Verification

1.1 In the pairwise tree $T_p=(((\tau_1\otimes\tau_2)\otimes(\tau_3\otimes\tau_4)) \otimes(\tau_5\otimes\tau_6))$, let $q_i\in\{0,1\}$ label the charge $1$ or $\tau$ of pair $(2i-1,2i)$, respectively. Fusion to total charge $1$ allows exactly the strings $$000,\quad011,\quad101,\quad110,\quad111.$$ For $000$, the intermediate charge after the first two pair outputs is $0$. For $011,101,110,111$, it is uniquely $1,1,0,1$, respectively; each then fuses with the last pair output to total charge $1$. A string with exactly one $1$ has total charge $\tau$ and is inadmissible. Thus the four even strings span a four-dimensional pair-charge code $\mathcal D_1$, and the all-$\tau$ string $111$ spans its one-dimensional complement. Fix a unitary associator composite from $T_p$ to the left-associated B6 tree. The triple code $\mathcal C_1$ in [F6] is transported to that same tree by its own fixed associator composite. Both are four-dimensional subspaces of the five-dimensional total-charge-$1$ fusion space. The argument below treats them as independent code choices and makes no projector-equality claim. [A2, F6, F7, construct, algebra]

1.2 Let $\mathcal K$ be any four-dimensional subspace of the five-dimensional total-charge-$1$ fusion space, including either $\mathcal D_1$ or $\mathcal C_1$, and let $U\in U(\mathcal K)$. Its orthogonal complement is one-dimensional. Define $T=U\oplus(\det U)^{-1}$ on $\mathcal K\oplus\mathcal K^\perp$; this is unitary with determinant one, so $T\in SU(5)$. By [F1], every operator-norm neighborhood of $T$ contains a normalized B6 word. Applying [F8] to a word within $\delta$ of $T$ gives logical block error and leakage at most $\delta$ for the selected code. Therefore the pair-charge and triple codes each admit the same density guarantee without identifying their subspaces. [F1, F6, F8, choose]

1.3 The five-dimensional certificate runs research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-lie-rank-certificate.py and returns the exact minor determinant $17$ in $\mathbb F_{31}$. The eight-dimensional deterministic selection runs research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-su8-lie-rank-certificate.py and returns determinant $22$. Both scripts use integer arithmetic only; [F4] proves that these nonzero reductions imply nonzero exact complex determinants. [F1, F2, F4, algebra]

1.4 Fix either selected charge-$1$ code $\mathcal K_1=\mathcal D_1$ or $\mathcal K_1=\mathcal C_1$. For $\mathcal D_1$ use the ordered transported even paths $(000,011,101,110)$ of step 1.1 as the computational basis; for $\mathcal C_1$ use the ordered triple paths in [F6]. In the charge-$\tau$ block use the triple code $\mathcal K_\tau=\mathcal C_\tau$ with its ordered basis from [F6]. Each code is thereby identified with $\mathbb C^2\otimes\mathbb C^2$. Write each ideal circuit gate as $U_j\in U(4)$: a one-qubit gate A is $A\otimes I_2$ or $I_2\otimes A$, and an adjacent two-qubit gate is its full $U(4)$ matrix. In each sector take the orthonormal complementary paths in the corresponding grouped fusion tree and transport them by the same unitary associator. These complements have dimensions $1$ and $4$. With $\lambda_j=(\det U_j)^{-1}$, define ambient code-preserving targets, in these code/complement coordinates, by
$$T_{j,1}=U_j\oplus\lambda_j,\qquad T_{j,\tau}=U_j\oplus\operatorname{diag}(\lambda_j,1,1,1).$$
Each complement action is unitary because $|\lambda_j|=1$, and $\det T_{j,1}=\det T_{j,\tau}=\det(U_j)\lambda_j=1$. Transporting these targets to the fixed left-associated ambient bases preserves determinant and norm. Thus they are actual elements of $SU(5)$ and $SU(8)$ and preserve the selected code in each sector. For the pair-charge choice, the charge-$\tau$ target just uses the separately specified triple code; no equality of pair and triple projectors is used. [F2, F6, F7, step 1.1, step 1.2, construct, algebra]

1.5 Let $G>0$, take target accuracy $\epsilon>0$, and set $\delta_j=\epsilon/G$ for $1\le j\le G$. The product of the open operator-norm $\delta_j$-balls around $(T_{j,1},T_{j,\tau})$ meets the normalized simultaneous B6 image by [F2]. Choose one word $b_j$ in this product, giving
$$\|\widetilde\rho_1(b_j)-T_{j,1}\|_{\rm op}\le\delta_j,\qquad\|\widetilde\rho_\tau(b_j)-T_{j,\tau}\|_{\rm op}\le\delta_j.$$
These are ambient bounds on the entire five- and eight-dimensional sectors for every gate, including the one-qubit factors. The choices for the two sectors are the same braid word. [A1, F2, step 1.4, choose]

2.1 For either $a=1,\tau$, the normalized ambient matrices $\widetilde\rho_a(b_j)$ and the code-preserving ideal matrices $T_{j,a}$ satisfy every hypothesis of [F3] by steps 1.4–1.5. Its finite telescoping estimate therefore gives
$$\|\widetilde\rho_a(b_G)\cdots\widetilde\rho_a(b_1)-T_{G,a}\cdots T_{1,a}\|_{\rm op}\le\sum_{j=1}^G\delta_j=\epsilon.$$
The ideal product restricts to $U_G\cdots U_1$ on the selected code. Apply [F8] to this ambient bound: total logical block error and leakage are both at most $\epsilon$. For a concrete distinction between these measurements, take $V=\mathbb C^2$, code $\mathbb C e_0$, target $U=1$, and $$W_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix},\qquad0<\theta<\pi/2.$$ The compressed block is $\cos\theta$, so its logical error is $1-\cos\theta$, while the leakage amplitude is $\sin\theta$. It has the correct one-dimensional logical direction with reduced amplitude, not an exactly correct block. Conversely, exact block equality forces zero leakage by [F3]. [F3, F8, A1, step 1.4, step 1.5, algebra]

3.1 The bounds in step 2.1 concern normalized braid matrices, or equivalently categorical matrices compared to targets with the common phase matched. By [F9], the concatenated categorical braid has the common factor $R_1^{\sum_j e(b_j)}$ in both sectors. Multiplication by that unit scalar leaves leakage unchanged and yields the corresponding single projective logical phase; it cannot be independently discarded in different sectors or under coherent control. This existence proof assigns no braid-length, search-time or physical-preparation bound. [F9, step 1.5, step 2.1, algebra] ∎
