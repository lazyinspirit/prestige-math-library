---
id: lem-qft-qed-dirac-first-order-constraints
kind: lemma
title: Finite-mode Dirac first-order constraint reduction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-qft-qed-gauge-data
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-qed-gauge-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; first-order Dirac kinetic term and charged action.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§36 and 57
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Dirac kinetic term and QED coupling. This item states its distinct finite commuting-coordinate reduction explicitly.
---

## Statement

Assume Countable Choice, the constants in [[def-qft-qed-gauge-data]], $\hbar>0$, and a finite integer $N\ge1$. Let $z_j,\bar z_j$ be complex coordinate notation for the real and imaginary coordinates of $N$ commuting spinor-mode amplitudes. On the complexified canonical coordinate space impose
$$\{z_j,p_k\}=\delta_{jk},\qquad \{\bar z_j,\bar p_k\}=\delta_{jk},$$
with all other elementary brackets zero, extended by bilinearity and the Leibniz rule. The first-order kinetic term $\frac{i\hbar}{2}\sum_j(\bar z_j\dot z_j-\dot{\bar z}_jz_j)$ gives primary constraints
$$C_j=p_j-\frac{i\hbar}{2}\bar z_j,\qquad
\bar C_j=\bar p_j+\frac{i\hbar}{2}z_j.$$
In the order $(C_1,\ldots,C_N,\bar C_1,\ldots,\bar C_N)$ their constraint matrix and inverse are
$$M=\begin{pmatrix}0&-i\hbar I_N\\i\hbar I_N&0\end{pmatrix},\qquad
M^{-1}=\begin{pmatrix}0&-iI_N/\hbar\\iI_N/\hbar&0\end{pmatrix}.$$
Thus the constraints are second class. The Dirac bracket
$$\{F,G\}_D=\{F,G\}-\{F,\chi_A\}(M^{-1})_{AB}\{\chi_B,G\},
\quad \chi=(C_1,\ldots,C_N,\bar C_1,\ldots,\bar C_N),$$
satisfies $\{z_j,\bar z_k\}_D=-i\delta_{jk}/\hbar$ and $\{z_j,z_k\}_D=\{\bar z_j,\bar z_k\}_D=0$. For a real smooth finite-mode Hamiltonian $H(z,\bar z)$ the reduced equation is $i\hbar\dot z_j=\partial H/\partial\bar z_j$. These are ordinary commuting coordinates; they do not derive CAR by canonical quantization.

## Facts & Assumptions

**Given:** Countable Choice, the charged normalization conventions, $\hbar>0$, a finite mode number $N\ge1$, and the canonical brackets defined in the statement.

[A1] The natural convention uses positive $\hbar$ and a first-order covariant Dirac kinetic term. [[def-qft-qed-gauge-data]]

[A2] Assume Countable Choice. [[def-countable-choice]]

[F1] The natural covariant derivative is $D_a=\partial_a-iga_a$ and $\hbar>0$. [[def-qft-qed-gauge-data]]

## Proof

**Given:** [A1], [A2], $\hbar>0$, and the canonical brackets in the statement.

1.1 Under the explicit Countable Choice assumption [A2], the canonical momenta from the displayed kinetic term are $p_j=\partial L/\partial\dot z_j=i\hbar\bar z_j/2$ and $\bar p_j=\partial L/\partial\dot{\bar z}_j=-i\hbar z_j/2$. Moving each velocity-independent momentum expression to the left gives exactly $C_j=0$ and $\bar C_j=0$. The finite canonical calculation uses the positive $\hbar$ fixed in [F1]. [A1, A2, F1, given, algebra]

1.2 For each $j,k$, bilinearity and the elementary brackets give
$$\{C_j,C_k\}=0,\qquad\{\bar C_j,\bar C_k\}=0,\qquad
\{C_j,\bar C_k\}=\{p_j,(i\hbar/2)z_k\}+\{-(i\hbar/2)\bar z_j,\bar p_k\}
=-\frac{i\hbar}{2}\delta_{jk}-\frac{i\hbar}{2}\delta_{jk}=-i\hbar\delta_{jk}.$$
Antisymmetry gives $\{\bar C_j,C_k\}=i\hbar\delta_{jk}$, which is exactly the displayed block matrix $M$. [A1, F1, step 1.1, given, algebra]

2.1 Multiplication of the two displayed block matrices gives $MM^{-1}=M^{-1}M=I_{2N}$; each off-diagonal product is $(-i\hbar)(i/\hbar)=1$ or $(i\hbar)(-i/\hbar)=1$, and the diagonal blocks are zero. Because $\hbar>0$, $M$ is invertible, so these primary constraints are second class by definition. [F1, step 1.2, given, algebra]

2.2 The canonical coordinate bracket $\{z_j,\bar z_k\}$ is zero. In the Dirac correction, the only nonzero factors are $\{z_j,C_\ell\}=\delta_{j\ell}$ and $\{\bar C_m,\bar z_k\}=-\delta_{mk}$. Hence
$$\{z_j,\bar z_k\}_D
=0-\delta_{j\ell}(M^{-1})_{C_\ell,\bar C_m}(-\delta_{mk})
=(M^{-1})_{C_j,\bar C_k}=-\frac{i}{\hbar}\delta_{jk}.$$
The same formula has no nonzero block for $\{z_j,z_k\}_D$ or $\{\bar z_j,\bar z_k\}_D$, so both vanish. [step 2.1, given, algebra]

3.1 For a smooth $H(z,\bar z)$, the only nonzero reduced coordinate bracket in $\{z_j,H\}_D$ is with $\bar z_j$, so step 2.2 gives $\dot z_j=\{z_j,H\}_D=-i\hbar^{-1}\partial H/\partial\bar z_j$. Multiplying by $i\hbar$ proves the stated equation. The calculation remains finite-dimensional for every $N$ and introduces no infinite-dimensional Poisson bracket or fermionic anticommutator. [F1, step 2.2, given, algebra] ∎
