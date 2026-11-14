---
id: lem-qec-prereq-two-path-gram-spectrum
kind: lemma
domain: mathematics
title: Two-path coherence Gram spectrum and Kraus weights
status: published
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-support-spectral-calculus
  - lem-qec-prereq-canonical-choi-weights
  - lem-qec-prereq-jump-time-phase-gram
  - math:def-qc-choi-matrix
  - math:def-qc-kraus-representation
  - math:def-hilbert-schmidt-operator
  - math:def-trace-of-an-endomorphism
  - math:def-qc-instrument-and-conditional-state
  - math:def-qc-completely-positive-map
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  lem-qec-prereq-jump-time-phase-gram: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:def-qc-kraus-representation: mathematical-premise
  math:def-hilbert-schmidt-operator: mathematical-premise
  math:def-trace-of-an-endomorphism: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $H=\mathbb C^2$ have ordered orthonormal basis $e_0,e_1$, and let $K$ be a finite-dimensional complex inner-product space with orthonormal vectors $f_0,f_1$. Put $F_j=|f_j\rangle\langle e_j|$. Let $0\leq p\leq1$, $\chi\in\mathbb C$, $|\chi|\leq1$, and $G=\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$. Its eigenvalues are $1\pm|\chi|$.

Suppose the linear branch map is $\Phi(X)=p\sum_{j,k=0}^1G_{jk}F_jXF_k^\dagger$. Its input-first unnormalized Choi matrix has two possible nonzero eigenvalues $p(1\pm|\chi|)$, counting zeros when either vanishes. These are the squared Hilbert–Schmidt norms, or canonical weights, of an orthogonal Kraus decomposition of this branch. Each logical basis input has branch probability $p$. When $p>0$, the smaller, phase-adjusted antisymmetric direction carries fraction $(1-|\chi|)/2$ of the sum of the two weights. Rephasing a path rotates the eigenvectors and leaves the weights unchanged. If $\chi=0$, the two directions have equal weights and their eigenbasis is not unique; if $p=0$, both weights vanish and their normalized fraction is undefined.

In particular, a two-phase average satisfying the hypotheses of [[lem-qec-prereq-jump-time-phase-gram]] gives such a matrix with $\chi=G_{01}$; applying the branch conclusion additionally requires the displayed map and common probability $p$.

## Facts & Assumptions

**Given:** The spaces, basis vectors, path maps, parameters and branch map in the Statement.

**Goal:** Establish the spectrum, branch weights and qualified fraction.

[F1] The finite coordinate conventions define adjoints, outer products and ordered tensor factors. [[def-qec-prereq-finite-operator-conventions]]

[F2] A positive semidefinite finite-dimensional operator has an orthonormal eigenbasis with nonnegative eigenvalues. [[def-qec-prereq-support-spectral-calculus]]

[F3] With the input-first unnormalized Choi convention, a map $X\mapsto AXA^\dagger$ has Choi matrix $|A\rangle\!\rangle\langle\!\langle A|$, where $|A\rangle\!\rangle=\sum_j e_j\otimes Ae_j$; for a channel, Choi eigenvalues equal canonical Kraus weights. [[math:def-qc-choi-matrix]] [[lem-qec-prereq-canonical-choi-weights]]

[F4] The two-phase construction in the cited lemma has unit diagonal and off-diagonal modulus at most one, under its stated probability-measure and phase hypotheses. [[lem-qec-prereq-jump-time-phase-gram]]

[F5] A finite Kraus representation of a linear map is a finite family of operators whose conjugation maps sum to that map on every input operator; trace preservation is not part of this definition, and zero operators are allowed. [[math:def-qc-kraus-representation]]

[F6] Relative to the supplied input basis $E=(e_0,e_1)$, the finite Hilbert–Schmidt norm is $\|A\|_{HS,E}^2=\sum_{j=0}^1\|Ae_j\|^2$. In this item an orthogonal family means that $\operatorname{Tr}(A^\dagger B)=0$ for distinct family members. [[math:def-hilbert-schmidt-operator]]

[F7] The trace of a finite-dimensional endomorphism is the sum of its diagonal entries in any ordered basis. [[math:def-trace-of-an-endomorphism]]

[F8] A finite instrument is a nonempty finite family of completely positive maps whose sum preserves trace. Its outcome weight on a nonnegative trace-one input $\rho$ is the output trace of the corresponding map; this is the meaning of branch probability here. [[math:def-qc-instrument-and-conditional-state]]

[F9] A map is completely positive when every finite ancillary block amplification preserves nonnegative operators. [[math:def-qc-completely-positive-map]]

## Proof

1.1 Set $r=|\chi|$ and choose a unit complex number $u$ with $\chi=ru$; when $r=0$ choose any such $u$. Direct multiplication gives $G(u,\pm1)^T=(1\pm r)(u,\pm1)^T$. The normalized vectors $(u,\pm1)^T/\sqrt2$ are orthonormal and span $\mathbb C^2$, so these are all eigenvalues. Since $0\leq r\leq1$, both are nonnegative. [given, F1, algebra]

2.1 Put $A_\pm=\sqrt{p(1\pm r)/2}(uF_0\pm F_1)$. Expanding the two terms gives $\Phi(X)=A_+XA_+^\dagger+A_-XA_-^\dagger$: the diagonal coefficients are $p$, and the coefficient of $F_0XF_1^\dagger$ is $pru=p\chi$. Also $\operatorname{Tr}(F_j^\dagger F_k)=\delta_{jk}$, hence $\operatorname{Tr}(A_\pm^\dagger A_\pm)=p(1\pm r)$ and $\operatorname{Tr}(A_+^\dagger A_-)=0$. For any $A:H\to K$, the diagonal entries of $A^\dagger A$ are $\|Ae_j\|^2$, so $\|A\|_{HS,E}^2=\sum_{j=0}^1\|Ae_j\|^2=\operatorname{Tr}(A^\dagger A)$. Thus the displayed family is a Kraus representation in the sense of [F5], orthogonal in the sense of [F6], with the asserted squared Hilbert–Schmidt norms. Zero operators are allowed when a weight vanishes. [given, F1, F5, F6, F7, step 1.1, algebra]

3.1 The path orthonormality gives $F_j^\dagger F_k=0$ for $j\ne k$ and $F_0^\dagger F_0+F_1^\dagger F_1=I_H$. Consequently $A_+^\dagger A_++A_-^\dagger A_-=pI_H$. Put $V=F_0+F_1$, $B=\sqrt{1-p}\,V$ and $\Psi(X)=BXB^\dagger$; then $V^\dagger V=I_H$ and $B^\dagger B=(1-p)I_H$. For any $C:H\to K$, the finite block amplification of $X\mapsto CXC^\dagger$ sends $Y\geq0$ on $H\otimes\mathbb C^m$ to $(C\otimes I_m)Y(C\otimes I_m)^\dagger\geq0$: its quadratic form at $z$ is the nonnegative quadratic form of $Y$ at $(C\otimes I_m)^\dagger z$. Thus [F9] makes $\Phi$ and $\Psi$ completely positive, including their zero cases. Finite coordinate summation gives $\operatorname{Tr}(CXC^\dagger)=\operatorname{Tr}(C^\dagger CX)$, so $\operatorname{Tr}\Phi(X)=p\operatorname{Tr}X$ and $\operatorname{Tr}\Psi(X)=(1-p)\operatorname{Tr}X$ for every $X$. Hence $(\Phi,\Psi)$ is a two-outcome instrument by [F8], for all $0\leq p\leq1$. [given, F1, F7, F8, F9, step 2.1, algebra]

3.2 Expanding the Choi definition in [F3] on the matrix units gives $J(\Phi)=\sum_{i,j=0}^1|e_i\rangle\langle e_j|\otimes\sum_{s\in\{+,-\}}|A_se_i\rangle\langle A_se_j|=\sum_{s\in\{+,-\}}|A_s\rangle\!\rangle\langle\!\langle A_s|$. These vectors are orthogonal and have squared norms $p(1\pm r)$ by the same coordinate trace calculation, so the nonzero Choi spectrum has exactly the stated values, with any zero values omitted from the nonzero spectrum. This calculation applies directly to the branch map; it does not assume that the branch alone is trace-preserving. [F1, F3, step 2.1, algebra]

4.1 For input $|e_j\rangle\langle e_j|$, the branch output is $p|f_j\rangle\langle f_j|$, whose trace is $p$. This input is nonnegative with trace one, so [F8] and step 3.1 identify $p$ as its probability for the $\Phi$ outcome. If $p>0$, the weight sum is $2p$, and the smaller weight divided by this sum is $(1-r)/2$. At $p=0$ this quotient is $0/0$ and is undefined. The minus direction is the difference of the two paths after the phase adjustment $F_0\mapsto uF_0$; when $r=0$ and $p>0$, the two nonzero Choi eigenvalues coincide and any orthonormal basis of their two-dimensional eigenspace is valid. When $p=0$, step 3.2 gives $J(\Phi)=0$, whose zero eigenspace is all of $H\otimes K$. Rephasing conjugates the coefficient matrix by a diagonal unitary, leaving $r$ and the spectrum unchanged. Finally, [F4] supplies the displayed matrix properties for the stated phase-average specialization; the form of $\Phi$ remains an additional hypothesis. [given, F4, F7, F8, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎
