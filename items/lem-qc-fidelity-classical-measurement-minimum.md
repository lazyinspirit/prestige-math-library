---
id: lem-qc-fidelity-classical-measurement-minimum
kind: lemma
title: "Fidelity classical measurement minimum"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: ["def-qc-fidelity", "def-qc-trace-norm", "def-qc-povm-and-outcome-law", "thm-qc-fidelity-purification-characterization", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "thm-non-negative-square-root-exists-and-is-unique", "thm-non-negative-operator-characterisations", "thm-singular-value-decomposition", "def-qc-density-operator", "lem-qc-fidelity-root-formula-equivalence", "thm-qc-unitary-group-compact", "thm-heine-borel-rn", "thm-qc-trace-norm-duality-and-norm-properties", "thm-cauchy-schwarz-in-an-inner-product-space", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "def-trace-of-an-endomorphism", "def-adjoint-of-a-linear-map-between-inner-product-spaces", "def-matrix-product-and-identity-matrix", "thm-trace-of-ab-equals-trace-of-ba"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.2.1–3.2.3, measurement characterization of fidelity."
---

## Statement

For states $\rho,\sigma$ on a nonzero finite-dimensional complex Hilbert space $H$, let a finite POVM be a finite family $(E_a)_{a=1}^n$ of nonnegative operators summing to $I_H$. Then
$$F(\rho,\sigma)=\min_{(E_a)}\sum_{a=1}^n\sqrt{\operatorname{tr}(\rho E_a)\operatorname{tr}(\sigma E_a)}.$$
The minimum is attained by a projective measurement with $d=\dim H$ rank-one outcomes.

## Facts & Assumptions

**Given:** $d=\dim H\ge1$ and density operators $\rho,\sigma$ on $H$.

[L1] Taking the fixed auxiliary space $R=H$, root fidelity is the maximum overlap of purifications on that common space ([[thm-qc-fidelity-purification-characterization]]). The QC06 theorem proves this case as part of its every-$R$ statement.

[L2] A finite POVM consists of nonnegative effects summing to identity, and outcome probabilities are $\operatorname{tr}(\rho E_a)$ ([[def-qc-povm-and-outcome-law]]). The QC04 definition body is present as a draft.

[F1] Cauchy–Schwarz for the inner product gives $|\langle x,y\rangle|\le\|x\|\|y\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] Density operators are nonnegative and have trace one ([[def-qc-density-operator]]).

[L3] The positive square root is unique, and the root formula $F(\rho,\sigma)=\operatorname{tr}\sqrt{\sqrt\rho\,\sigma\sqrt\rho}$ follows from the SVD trace-norm formula ([[thm-non-negative-square-root-exists-and-is-unique]], [[lem-qc-fidelity-root-formula-equivalence]]).

[F2] $U(d)$ is compact in its finite matrix coordinates ([[thm-qc-unitary-group-compact]]), and bounded sequences of matrix coordinates have convergent subsequences by finite-dimensional Heine–Borel ([[thm-heine-borel-rn]]). The compactness theorem body is a current QC06 draft; the Heine–Borel supplier is published.

[L4] Partial trace is characterized by $\operatorname{tr}((\operatorname{Tr}_R Z)T)=\operatorname{tr}(Z(T\otimes I_R))$ ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]); the QC02 definition and characterization theorem are present as drafts.

[L5] The finite trace norm is a norm and satisfies the triangle inequality ([[thm-qc-trace-norm-duality-and-norm-properties]]). For a fixed matrix shape $q\times p$, set $m=\min(p,q)$. SVD gives $\|A\|_1\le m(\sum_{i,j}|A_{ij}|^2)^{1/2}$, since each singular value is at most the square root of the sum of their squares and $\sum_j s_j(A)^2=\operatorname{tr}(A^*A)=\sum_{i,j}|A_{ij}|^2$. Hence $|\|A\|_1-\|B\|_1|\le m(\sum_{i,j}|A_{ij}-B_{ij}|^2)^{1/2}$ for same-shape matrices, proving the coordinate continuity needed below ([[thm-singular-value-decomposition]], [[def-qc-trace-norm]]).

[F3] Every finite-dimensional inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F4] A nonnegative endomorphism has an orthonormal eigenbasis with nonnegative eigenvalues ([[thm-non-negative-operator-characterisations]]).

[F5] The finite trace is the sum of diagonal entries; in an orthonormal coordinate basis, $\operatorname{tr}(B^*B)=\sum_{i,j}|B_{ij}|^2$ ([[def-trace-of-an-endomorphism]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-matrix-product-and-identity-matrix]]).

[F6] A limit of nonnegative matrices is nonnegative because self-adjointness and each quadratic-form inequality pass to the coordinate limit ([[thm-non-negative-operator-characterisations]]).

[L6] Trace is cyclic for compatible finite-dimensional maps ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof


1.1 Let $x,y$ be purifications attaining $F(\rho,\sigma)$ as in [L1]. For a finite POVM $(E_a)$, put $x_a=(\sqrt{E_a}\otimes I)x$ and $y_a=(\sqrt{E_a}\otimes I)y$. Since $\sum_a E_a=I$, the adjoint identity gives $\langle x,y\rangle=\sum_a\langle x_a,y_a\rangle$. By [L4], $\|x_a\|^2=\operatorname{tr}(\rho E_a)$ and $\|y_a\|^2=\operatorname{tr}(\sigma E_a)$. The triangle inequality and [F1] termwise give $|\langle x,y\rangle|\le\sum_a\|x_a\|\|y_a\|=\sum_a\sqrt{\operatorname{tr}(\rho E_a)\operatorname{tr}(\sigma E_a)}$. Therefore every finite POVM overlap is at least $F(\rho,\sigma)$. [given, F7, L1, L2, L4, F1, algebra]

1.2 For arbitrary $\rho,\sigma$, set $\rho_\varepsilon=(1-\varepsilon)\rho+\varepsilon I/d$ and $\sigma_\varepsilon=(1-\varepsilon)\sigma+\varepsilon I/d$ for $0<\varepsilon\le1$. Both are positive definite. The root fidelity is continuous on density operators: if $A_n\to A$ are density operators and $B_n=\sqrt{A_n}$, then [F5] and [F7] give $\sum_{i,j}|(B_n)_{ij}|^2=\operatorname{tr}(B_n^*B_n)=1$. Thus the coordinate matrices $B_n$ are bounded. Every convergent subsequence has a nonnegative limit $B$ by [F6] and $B^2=A$, so uniqueness in [L3] gives $B=\sqrt A$. If $(B_n)$ did not converge to $\sqrt A$, a subsequence staying a fixed positive distance away would have a convergent subsubsequence by [F2], contradicting that every such limit is $\sqrt A$. Applying this to both state sequences shows their square roots converge; their product converges by the finite matrix-product formula, and its trace norm converges by [L5]. Hence $F(\rho_\varepsilon,\sigma_\varepsilon)\to F(\rho,\sigma)$. [given, F7, L3, L5, F2, F5, F6, algebra]

2.1 Suppose first that $\rho$ is positive definite. By [F4], choose an orthonormal eigenbasis of $\rho$; its eigenvalues are strictly positive by positive definiteness, so $\rho^{-1/2}$ is defined by the reciprocal square roots in this basis. Define $M=\rho^{-1/2}(\sqrt\rho\,\sigma\sqrt\rho)^{1/2}\rho^{-1/2}$. Its quadratic form is nonnegative because it is the quadratic form of $(\sqrt\rho\,\sigma\sqrt\rho)^{1/2}$ at $\rho^{-1/2}x$, and direct multiplication gives $M\rho M=\sigma$. By [F4], choose an orthonormal eigenbasis of $M$, with rank-one projections $E_j$ and eigenvalues $\mu_j\ge0$. If $p_j=\operatorname{tr}(\rho E_j)$, then $\operatorname{tr}(\sigma E_j)=\mu_j^2p_j$, so the measurement overlap is $\sum_j\mu_jp_j=\operatorname{tr}(M\rho)=\operatorname{tr}(\sqrt{\sqrt\rho\,\sigma\sqrt\rho})=F(\rho,\sigma)$ by [L3] and [L6]. Thus a rank-one PVM attains the lower bound when $\rho$ is faithful. [given, F7, L3, F4, L6, step 1.1, algebra, choose]

3.1 Fix an orthonormal basis of $H$ by [F3], and identify $H$ with $\mathbb C^d$. Let $Q_j$ be the rank-one projector onto its $j$th basis vector. Define $\mathcal P_d$ as ordered families $(UQ_jU^*)_{j=1}^d$ for $U\in U(d)$. Every ordered rank-one PVM has this form, since unit vectors spanning its mutually orthogonal one-dimensional ranges form an orthonormal basis. The map $U\mapsto(UQ_jU^*)_{j=1}^d$ is continuous in matrix coordinates, so $\mathcal P_d$ is compact by [F2]. For every $\varepsilon>0$, step 2.1 supplies a minimizing PVM in $\mathcal P_d$. For $n\ge1$, let $C_n$ be the closure in $\mathcal P_d$ of all such minimizing PVMs for $0<\varepsilon<1/n$. The $C_n$ are nonempty nested compact sets, so their intersection is nonempty; fix $P_0$ in it. The overlap function $g(\varepsilon,P)=\sum_j\sqrt{\operatorname{tr}(\rho_\varepsilon P_j)\operatorname{tr}(\sigma_\varepsilon P_j)}$ is continuous at every $(0,P_0)$, since trace is a finite coordinate sum and scalar square root is continuous on $[0,\infty)$. Given $\delta>0$, choose a neighborhood of $(0,P_0)$ where $g$ differs from $g(0,P_0)$ by less than $\delta$, and choose $n$ so large that $1/n$ is inside its $\varepsilon$-neighborhood and, by step 1.2, $|F(\rho_\varepsilon,\sigma_\varepsilon)-F(\rho,\sigma)|<\delta$ for $0<\varepsilon<1/n$. Since $P_0\in C_n$, the definition of closure supplies a minimizing PVM $P'$ in that neighborhood for some $0<\varepsilon<1/n$. For this pair, $g(\varepsilon,P')=F(\rho_\varepsilon,\sigma_\varepsilon)$, so $|g(0,P_0)-F(\rho,\sigma)|<2\delta$. As $\delta>0$ is arbitrary, $g(0,P_0)=F(\rho,\sigma)$. This gives an attaining rank-one PVM also in the singular case. [given, step 2.1, step 1.2, F2, F3, algebra, choose]

4.1 Step 1.1 bounds every finite POVM overlap below by $F$, and step 3.1 exhibits a finite rank-one PVM whose overlap equals $F$. This proves the stated minimum and attainment. [step 1.1, step 3.1] ∎

