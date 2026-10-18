---
id: lem-it-finite-unitary-averaging-decoupling-bound
kind: lemma
title: Finite unitary averaging and a decoupling second-moment bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
- thm-complex-spectral-theorem-for-normal-endomorphisms
- thm-qc-trace-norm-duality-and-norm-properties
- thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
- def-trace-of-an-endomorphism
- def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $D\ge2$, $1\le K\le D$, and $\omega_{AE}\succeq0$ with $\dim A=D$, $\operatorname{tr}\omega\le1$, and $r=\operatorname{rank}\omega_E$. For every $\delta>0$ there is an explicitly specified finite probability ensemble of isometries $W:\mathbb C^K\to\mathbb C^D$ such that, for
$$\omega^W_{RE}=\frac DK(W^T\otimes I_E)\omega_{AE}(\overline W\otimes I_E),$$
one has
$$\mathbb E\left\|\omega^W_{RE}-\frac{I_R}{K}\otimes\omega_E\right\|_1\le\sqrt{2Kr\operatorname{tr}(\omega_{AE}^2)}+\delta.$$
At the same time the ensemble can be required to satisfy, for every Hermitian $Z_{AE}$,
$$\mathbb E\left\|\frac DK(W^T\otimes I)Z(\overline W\otimes I)\right\|_1\le(1+\delta)\|Z\|_1.$$
No Haar existence or Gaussian-law supplier, and no choice axiom, is used.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely.

[F2] [[thm-qc-trace-norm-duality-and-norm-properties]]: Trace Norm Duality And Norm Properties.

[F3] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: Cauchy–Schwarz: $|\\langle u,v\\rangle|\\leq\\lVert u\\rVert\\lVert v\\rVert$, with equality exactly for linearly dependent vectors.

[F4] [[def-trace-of-an-endomorphism]]: 'The basis-independent trace of an endomorphism of a finite-dimensional vector space'.

[F5] [[def-qc-tensor-register-and-permutation]]: Ordered tensor registers, their inner product, and wire permutations.

## Proof

1.1 Let $G$ be the finite group of monomial unitaries whose nonzero entries are fifth roots of unity. Let $R$ be the real rotation by $\pi/4$ in coordinates 1 and 2, acting identically elsewhere. Use the symmetric finite list $\mathcal S=G\cup\{R,R^*\}$, retaining multiplicities if any. At each walk step choose the identity with probability $1/2$ and an element of this list uniformly with the remaining probability. For $j=1,2$, the moment operator on matrices is $$T_j(X)=\tfrac12X+\frac1{2|\mathcal S|}\sum_{U\in\mathcal S}U^{\otimes j}X(U^*)^{\otimes j}.$$ These are self-adjoint contractions for the Hilbert–Schmidt inner product, because the list is inverse-symmetric; laziness makes every eigenvalue nonnegative. Moreover $$\langle X,(I-T_j)X\rangle=\frac1{4|\mathcal S|}\sum_{U\in\mathcal S}\|X-U^{\otimes j}X(U^*)^{\otimes j}\|_2^2.$$ Thus their fixed spaces are exactly the simultaneous commutants of the displayed finite unitaries. [F1, F2, F3, F4, F5, given, algebra, construct]

2.1 For $j=1$, the independent diagonal fifth-root phases force a commuting matrix to be diagonal; permutations force all its diagonal entries equal. For $j=2$, a matrix coefficient from $|i,j\rangle$ to $|k,l\rangle$ can survive the diagonal phases only when the unordered multisets $\{i,j\}$ and $\{k,l\}$ agree. Indeed each index occurs with multiplicity 0, 1 or 2; equality modulo 5 of every exponent forces equality of these integer multiplicities. Commutation with all permutations then leaves three constants: $c$ on $|i,i\rangle$, $a$ on $|i,j\rangle\langle i,j|$ for $i\ne j$, and $b$ on $|i,j\rangle\langle j,i|$. Commutation with $R\otimes R$ applied to $|1,1\rangle$, whose rotated vector has nonzero coefficients on both $|1,2\rangle$ and $|2,1\rangle$, forces $c=a+b$. Conversely $I$ and the swap $F$ commute with every tensor-square unitary. The fixed space is therefore precisely $\operatorname{span}\{I,F\}$, also when $D=2$. [F1, F2, F3, F4, F5, step 1.1, given, algebra, construct]

3.1 Finite-dimensional spectral decomposition now gives orthogonal projections $\mathcal P_1,\mathcal P_2$ onto these fixed spaces and a number $0\le\lambda<1$ such that $$\|T_j^L-\mathcal P_j\|_{2\to2}\le\lambda^L,\qquad j=1,2.$$ If the orthogonal complement is zero, take its spectral radius as zero. Every $T_j^L$ is the moment of an finite distribution of length-$L$ unitary words; the limit is only a finite-matrix spectral calculation, not an assumed Haar integral. The first projection is $\mathcal P_1(X)=\operatorname{tr}(X)I/D$. For any rank-$K$ projection $P_0$, invariance of trace and swap trace gives $$\mathcal P_2(P_0\otimes P_0)=a_0I+b_0F,\qquad a_0=\frac{K(KD-1)}{D(D^2-1)},\quad b_0=\frac{K(D-K)}{D(D^2-1)}.$$ The coefficients solve $a_0D^2+b_0D=K^2$ and $a_0D+b_0D^2=K$. [F1, F2, F3, F4, F5, step 2.1, given, algebra, construct]

4.1 Choose a coordinate isometry $W_0$ and let $W=UW_0$, where $U$ is a finite walk word. Complex conjugation preserves the same limiting first and second moment projections and their norm bounds, so they apply to $P=\overline W W^T$ as well. The swap identity on matrix units gives the following limiting second moment, with $\Omega=I_R/K\otimes\omega_E$: $$\lim_{L\to\infty}\mathbb E\|\omega^W-\Omega\|_2^2 =\frac{D(KD-1)}{K(D^2-1)}\operatorname{tr}(\omega^2)+\frac{1-DK}{K(D^2-1)}\operatorname{tr}(\omega_E^2) \le2\operatorname{tr}(\omega^2).$$ In detail, the squared-state term is $(D^2/K^2)\{a_0\operatorname{tr}(\omega^2)+b_0\operatorname{tr}(\omega_E^2)\}$, and the limiting mean is $\Omega$, so subtract $\operatorname{tr}(\omega_E^2)/K$. [F1, F2, F3, F4, F5, step 3.1, given, algebra, construct]

5.1 The finite moment error has a quantitative bound. Put $d_E=\dim E$ and $\varepsilon=\lambda^L$. The first-moment error in each matrix unit of the compressed reference is at most $\varepsilon$ in Hilbert–Schmidt norm; contracting it with $\omega$ shows $\|\mathbb E\omega^W-\Omega\|_2\le D\varepsilon\|\omega\|_2\le D\varepsilon$. For the squared-state term, the second-moment error on $P_0\otimes P_0$ has Hilbert–Schmidt norm at most $K\varepsilon$. In its trace pairing with $F_E(\omega\otimes\omega)$, the partial trace over the two environment copies has Hilbert–Schmidt norm at most $d_E\|\omega\|_2^2\le d_E$ (Cauchy–Schwarz for each diagonal block). Consequently that squared-state error is at most $D^2d_E\varepsilon/K$. The cross term with $\Omega$, whose Hilbert–Schmidt norm is at most $1/\sqrt K$, has error at most $2D\varepsilon/\sqrt K$. Hence, with $C_D=D^2d_E+2D$, $$\mathbb E\|\omega^W-\Omega\|_2^2\le2\operatorname{tr}(\omega^2)+C_D\varepsilon.$$ Positivity implies $\operatorname{supp}\omega\subseteq A\otimes\operatorname{supp}\omega_E$: a kernel vector of the marginal has a sum of nonnegative diagonal quadratic forms equal to zero, forcing the corresponding rows and columns to vanish. Thus each difference has rank at most $Kr$. Cauchy–Schwarz on singular values and Jensen give the trace-norm bound at most $\sqrt{2Kr\operatorname{tr}(\omega^2)}+\sqrt{KrC_D\varepsilon}$. [F1, F2, F3, F4, F5, step 4.1, given, algebra, construct]

6.1 Finally write a Hermitian $Z$ as $Z_+-Z_-$. Positivity of compression bounds its trace norm by the two positive compressed traces. The first-moment bound $\|\mathbb EP-(K/D)I\|_\infty\le\sqrt K\varepsilon$ gives $$\mathbb E\|\mathcal C_W(Z)\|_1\le(1+D\varepsilon/\sqrt K)\|Z\|_1.$$ Choose a finite $L$ with both $KrC_D\lambda^L\le\delta^2$ and $D\lambda^L/\sqrt K\le\delta$. Such an integer exists by $\lambda<1$; the least such integer is a specified choice. If $r=0$, the positive operator is zero and its decoupling bound is automatic. This proves both assertions with an finite ensemble and exact dimension-dependent moment control. [F1, F2, F3, F4, F5, step 5.1, given, algebra, construct] ∎
