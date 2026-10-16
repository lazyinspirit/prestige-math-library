---
id: thm-qc-fidelity-purification-characterization
kind: theorem
title: "Fidelity Purification Characterization"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-fidelity", "def-qc-dirac-notation-conversion", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "def-qc-tensor-register-and-permutation", "def-dimension", "def-adjoint-of-a-linear-map-between-inner-product-spaces", "thm-adjoint-exists-and-is-unique-in-finite-dimension", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "thm-singular-value-decomposition", "thm-non-negative-square-root-exists-and-is-unique", "thm-polar-decomposition", "thm-qc-trace-norm-duality-and-norm-properties", "thm-trace-of-ab-equals-trace-of-ba"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.2.1–3.2.3, purification characterization of fidelity."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $\rho,\sigma\in\mathcal D(H)$. For every auxiliary space $R$ with $\dim R\ge\dim H$, a **purification** of $\rho$ on $H\otimes R$ means a unit vector $x$ with $\operatorname{Tr}_R(|x\rangle\langle x|)=\rho$. Then
$$F(\rho,\sigma)=\max\{|\langle x,y\rangle|:x,y\in H\otimes R,\ \|x\|=\|y\|=1,\ \operatorname{Tr}_R|x\rangle\langle x|=\rho,\ \operatorname{Tr}_R|y\rangle\langle y|=\sigma\}.$$
In particular, the maximum is attained with $R\cong H$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional $H$, states $\rho,\sigma\in\mathcal D(H)$, and an auxiliary space $R$ of dimension at least $\dim H$.

[L1] The root fidelity is $F(\rho,\sigma)=\|\sqrt\rho\sqrt\sigma\|_1$ ([[def-qc-fidelity]]). The current QC06 source body is present; its fidelity convention is root fidelity.

[L2] In ordered orthonormal product coordinates, a vector with coefficient matrix $X$ has first marginal $XX^*$; under the root linear-first pairing the inner product of coefficient matrices $X,Y$ is $\operatorname{tr}(XY^*)$, whose modulus is $|\operatorname{tr}(X^*Y)|$ ([[def-qc-tensor-register-and-permutation]], [[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]). These identities follow by finite coordinate sums and the partial-trace trace-pairing formula.

[L3] For a rectangular coefficient map $X:R\to H$, the singular-value decomposition gives $X=\sum_{j<r}s_j|u_j\rangle\langle v_j|$ with $s_j>0$ and orthonormal families $(u_j)$ in $H$ and $(v_j)$ in $R$ ([[thm-singular-value-decomposition]], [[def-qc-dirac-notation-conversion]]). Then $XX^*=\sum_{j<r}s_j^2|u_j\rangle\langle u_j|$, and $B_X=\sum_{j<r}s_j|u_j\rangle\langle u_j|$ is non-negative because $\langle B_Xz,z\rangle=\sum_{j<r}s_j|\langle z,u_j\rangle|^2\ge0$; also $B_X^2=XX^*$. Uniqueness of the non-negative square root gives $B_X=(XX^*)^{1/2}$. Consequently $X=(XX^*)^{1/2}W$ for $W=\sum_{j<r}|u_j\rangle\langle v_j|$. The SVD bases show $Wv_j=u_j$ for $j<r$, that $W$ vanishes on the remaining basis vectors, and that $W^*$ has the reverse action; hence both are contractions. This rectangular factorization is derived from the SVD; the cited polar-decomposition theorem is used only for square endomorphisms.

[L4] Trace-norm duality gives $\max_{\|C\|_\infty\le1}|\operatorname{tr}(A^*C)|=\|A\|_1$; in equal finite dimensions polar decomposition supplies an attaining unitary ([[thm-qc-trace-norm-duality-and-norm-properties]], [[thm-polar-decomposition]]).

## Proof

1.1 Fix orthonormal bases of $H$ and $R$. Write $x=\sum_{i,a}X_{ia}e_i\otimes f_a$. Directly taking the partial trace gives $\operatorname{Tr}_R|x\rangle\langle x|=XX^*$, while $\|x\|=1$ gives $\operatorname{tr}(XX^*)=1$. Thus purifications of $\rho$ are exactly coefficient matrices $X$ with $XX^*=\rho$ and $\|X\|_2=1$, and the analogous statement holds for $\sigma$. [given, L2, algebra]

1.2 By [L3], write $X=\sqrt\rho\,W$ and $Y=\sqrt\sigma\,V$, where $W,V:R\to H$ and their adjoints are contractions. Put $A=\sqrt\rho\sqrt\sigma$. The coefficient-matrix inner product [L2] and cyclicity give $|\langle x,y\rangle|=|\operatorname{tr}(XY^*)|=|\operatorname{tr}(\sqrt\sigma\sqrt\rho\,WV^*)|=|\operatorname{tr}(A^*WV^*)|$. Since $WV^*$ is a contraction, [L4] implies $|\langle x,y\rangle|\le\|A\|_1=F(\rho,\sigma)$. [given, L1, L2, L3, L4, algebra]

2.1 Fix the auxiliary space $R$ from the Statement. Since $\dim R\ge\dim H$, choose an isometric embedding $J:H\to R$ using orthonormal bases. Put $A=\sqrt\rho\sqrt\sigma$. By SVD, $\|A^*\|_1=\|A\|_1$, and [L4] supplies a unitary $C$ on $H$ with $|\operatorname{tr}(A^*C)|=\|A\|_1$. Set $X=\sqrt\rho\,J^*$ and $Y=\sqrt\sigma\,C^*J^*$. Then $XX^*=\rho$ and $YY^*=\sigma$, so these coefficient matrices define unit purifications on this fixed $R$. Their overlap satisfies $|\langle x,y\rangle|=|\operatorname{tr}(XY^*)|=|\operatorname{tr}(\sqrt\rho C\sqrt\sigma)|=|\operatorname{tr}(A^*C)|=F(\rho,\sigma)$ by cyclicity. The upper bound in step 1.2 and this attaining pair prove the maximum for every fixed $R$ with $\dim R\ge\dim H$. [given, L1, L2, L4, step 1.1, step 1.2, algebra, choose] ∎
