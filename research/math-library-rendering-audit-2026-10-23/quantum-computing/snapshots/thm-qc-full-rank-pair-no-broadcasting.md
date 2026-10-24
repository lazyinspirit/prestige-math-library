---
id: thm-qc-full-rank-pair-no-broadcasting
kind: theorem
title: "Full Rank Pair No Broadcasting"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: ["def-qc-broadcasting-family", "def-qc-fidelity", "thm-qc-fidelity-data-processing-and-equality", "lem-qc-fidelity-classical-measurement-minimum", "thm-qc-trace-norm-duality-and-norm-properties", "thm-qc-trace-norm-spectral-formula", "def-qc-density-operator", "def-qc-dirac-notation-conversion", "def-adjoint-of-a-linear-map-between-inner-product-spaces", "thm-adjoint-exists-and-is-unique-in-finite-dimension", "thm-qc-isometry-partial-trace-is-channel", "thm-cauchy-schwarz-in-an-inner-product-space", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "thm-complex-spectral-theorem-for-normal-endomorphisms", "thm-non-negative-square-root-exists-and-is-unique", "thm-polar-decomposition", "thm-qc-kraus-map-completely-positive", "thm-qc-trace-preserving-kraus-normalization"]
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
    - title: "Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa, and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast"
      url: "https://arxiv.org/pdf/quant-ph/9511010"
      locator: "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex Hilbert space and let $\rho_0,\rho_1$ be positive-definite density operators on $H$. One channel $B:\mathcal L(H)\to\mathcal L(H\otimes H)$ broadcasts both states if and only if $\rho_0\rho_1=\rho_1\rho_0$.

## Facts & Assumptions

**Given:** Positive-definite density operators $\rho_0,\rho_1$ and a single channel $B$ whose two output marginals are each the corresponding input.

[F1] A density operator is nonnegative and has trace one ([[def-qc-density-operator]]).

[L1] Broadcasting means both partial traces of each output equal that input ([[def-qc-broadcasting-family]], [[def-qc-partial-trace]]). The partial-trace trace-pairing identity gives the marginal calculations below, and partial trace is a channel ([[thm-qc-partial-trace-characterization-and-basis-independence]], [[thm-qc-isometry-partial-trace-is-channel]]). The coordinate definition also gives $\operatorname{Tr}_1(X(I\otimes G))=(\operatorname{Tr}_1X)G$, $\operatorname{Tr}_2(X(G\otimes I))=(\operatorname{Tr}_2X)G$, and $\operatorname{Tr}_i(X^*)=(\operatorname{Tr}_iX)^*$: each identity follows by expanding the repeated traced index in the defining finite sum.

[L2] Fidelity is the minimum classical measurement overlap, attained by a PVM for faithful input states ([[lem-qc-fidelity-classical-measurement-minimum]]). Its full proof is drafted in this batch.

[L3] Fidelity is monotone under channels ([[thm-qc-fidelity-data-processing-and-equality]]). The QC06 proof remains draft.

[L4] Square endomorphism polar decomposition gives a unitary $U$ with $UA=(A^*A)^{1/2}$; the trace-norm spectral formula then gives $|\operatorname{tr}(UA)|=\|A\|_1$. Positive square roots are unique ([[thm-polar-decomposition]], [[thm-qc-trace-norm-spectral-formula]], [[thm-qc-trace-norm-duality-and-norm-properties]], [[thm-non-negative-square-root-exists-and-is-unique]]).

[L5] The Hilbert–Schmidt pairing on matrices is an inner product and satisfies Cauchy–Schwarz with equality exactly for linearly dependent pairs ([[thm-cauchy-schwarz-in-an-inner-product-space]]); in coordinates this is the ordinary finite inner-product theorem.

[L6] Self-adjoint finite-dimensional operators have orthonormal eigenbases ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]). A finite Kraus family defines a completely positive map, and its normalization $\sum_jK_j^*K_j=I$ makes it trace-preserving ([[thm-qc-kraus-map-completely-positive]], [[thm-qc-trace-preserving-kraus-normalization]]).

[L7] Under the Dirac convention, $|x\rangle\langle y|$ maps $z$ to $\langle z,y\rangle x$; its adjoint is $|y\rangle\langle x|$ by the defining adjoint identity ([[def-qc-dirac-notation-conversion]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

## Proof


1.1 Since $\rho_0,\rho_1$ are faithful, the measurement-minimum theorem [L2] supplies a rank-one PVM $(E_b)$ whose classical overlap is $F(\rho_0,\rho_1)$. Every $p_{s,b}=\operatorname{tr}(\rho_sE_b)$ is positive: if $E_b=|b\rangle\langle b|$ and $\rho_s$ is positive definite, then $p_{s,b}=\langle\rho_sb,b\rangle>0$. [given, F1, L2, algebra]

2.1 Put $\widetilde\rho_s=B(\rho_s)$. Data processing under $B$ gives $F(\rho_0,\rho_1)\le F(\widetilde\rho_0,\widetilde\rho_1)$. Data processing under either partial trace, whose outputs are $\rho_s$ by [L1], gives the reverse inequality. Hence equality holds. Measuring $E_b\otimes I$ on the first output factor, or $I\otimes E_b$ on the second, produces the same probabilities as measuring $E_b$ on the input; each classical overlap is $F(\widetilde\rho_0,\widetilde\rho_1)$ and so is optimal by [L2]. [given, L1, L2, L3, step 1.1, algebra]

3.1 For any two states $R,S$ and a finite POVM $(Q_b)$ attaining the minimum overlap, choose a polar unitary $U$ with $U\sqrt R\sqrt S=\sqrt{\sqrt S R\sqrt S}$. For each outcome let $A_b=U\sqrt R Q_b^{1/2}$ and $C_b=\sqrt S Q_b^{1/2}$. The Hilbert–Schmidt norms satisfy $\|A_b\|_2^2=\operatorname{tr}(RQ_b)$ and $\|C_b\|_2^2=\operatorname{tr}(SQ_b)$, while their inner product is $\operatorname{tr}(U\sqrt R Q_b\sqrt S)$. Thus Cauchy–Schwarz and the triangle inequality give $$\sum_b\sqrt{\operatorname{tr}(RQ_b)\operatorname{tr}(SQ_b)}\ge\sum_b|\operatorname{tr}(U\sqrt R\,Q_b\sqrt S)|\ge|\operatorname{tr}(U\sqrt R\sqrt S)|=F(R,S).$$ Equality of the endpoints forces equality term by term in Cauchy–Schwarz and common nonnegative phase in the triangle inequality. For each outcome with $\operatorname{tr}(SQ_b)>0$, this gives a scalar $\gamma_b\ge0$ with $U\sqrt R\,Q_b^{1/2}=\gamma_b\sqrt S\,Q_b^{1/2}$. Applying this to the two optimal PVMs of step 2.1, there are unitaries $U,V$ and nonnegative $\alpha_b,\beta_b$ such that $$U\sqrt{\widetilde\rho_0}(I\otimes E_b)=\alpha_b\sqrt{\widetilde\rho_1}(I\otimes E_b),\quad V\sqrt{\widetilde\rho_0}(E_b\otimes I)=\beta_b\sqrt{\widetilde\rho_1}(E_b\otimes I),$$ and both $U,V$ satisfy $U\sqrt{\widetilde\rho_0}\sqrt{\widetilde\rho_1}=V\sqrt{\widetilde\rho_0}\sqrt{\widetilde\rho_1}=\sqrt{\sqrt{\widetilde\rho_1}\widetilde\rho_0\sqrt{\widetilde\rho_1}}$. For these two PVMs every outcome probability is positive by step 1.1 and the broadcaster marginals, so neither Cauchy–Schwarz vector is zero; dependence therefore gives the displayed scalar equations. [given, L2, L4, L5, step 1.1, step 2.1, algebra]

4.1 Set $G=\sum_b\alpha_bE_b$ and $J=\sum_b\beta_bE_b$. Summing the equations in step 3.1 gives $U\sqrt{\widetilde\rho_0}=\sqrt{\widetilde\rho_1}(I\otimes G)$ and $V\sqrt{\widetilde\rho_0}=\sqrt{\widetilde\rho_1}(J\otimes I)$. Multiply the first by $\sqrt{\widetilde\rho_0}U^*$ on the left and trace out the first factor; multiply the second by $\sqrt{\widetilde\rho_0}V^*$ and trace out the second. The marginal identities yield $\rho_0=A G=CJ$, where $A=\operatorname{Tr}_1(\sqrt{\widetilde\rho_0}U^*\sqrt{\widetilde\rho_1})$ and $C=\operatorname{Tr}_2(\sqrt{\widetilde\rho_0}V^*\sqrt{\widetilde\rho_1})$. Since $\rho_0$ is invertible, both $G$ and $J$ are invertible. [given, L1, step 3.1, algebra]

5.1 Left-multiply the two summed equations of step 4.1 by $\sqrt{\widetilde\rho_1}$ and trace out the first factor in the first equation and the second in the second. The partial-trace adjoint identity and the local-factor multiplication rule in [L1] give $A^*=\rho_1G$ and $C^*=\rho_1J$. Taking adjoints in $\rho_0=AG=CJ$ gives $\rho_0=G\rho_1G=J\rho_1J$. For either positive operator $G$ or $J$, conjugating this equation by $\rho_1^{1/2}$ shows $(\rho_1^{1/2}G\rho_1^{1/2})^2=\rho_1^{1/2}\rho_0\rho_1^{1/2}$, and likewise for $J$. Uniqueness of the positive square root [L4] therefore yields $G=J$. [given, L1, L4, step 4.1, algebra]

5.2 The operators $G=J=\sum_b\alpha_bE_b$ are positive and invertible by step 4.1, so write $G|b\rangle=g_b|b\rangle$ with each $g_b>0$. Substituting $G=J$ into step 4.1 and eliminating $\sqrt{\widetilde\rho_1}$ gives $$V^*U\sqrt{\widetilde\rho_0}=\sqrt{\widetilde\rho_0}(G^{-1}\otimes G).$$ For $w=\sqrt{\widetilde\rho_0}(|b\rangle\otimes|c\rangle)\ne0$, this equation says the unitary $V^*U$ has eigenvalue $g_c/g_b>0$ on $w$, whose modulus must be one. Hence $g_b=g_c$; when they differ, $w=0$. [given, L4, step 4.1, algebra]

6.1 For any $b,b'$ with $g_b\ne g_{b'}$ and any $c$, either $g_c\ne g_b$, in which case step 5.2 gives $\sqrt{\widetilde\rho_0}|b,c\rangle=0$, or $g_c=g_b$, in which case it gives $\sqrt{\widetilde\rho_0}|b',c\rangle=0$. In the first case the column of $\widetilde\rho_0$ vanishes; in the second its corresponding row vanishes because $\sqrt{\widetilde\rho_0}$ is self-adjoint. Therefore every summand in $\langle b'|\rho_0|b\rangle=\sum_c\langle b',c|\widetilde\rho_0|b,c\rangle$ is zero. Thus $[G,\rho_0]=0$. Since $\rho_0=G\rho_1G$ from step 5.1, $\rho_1=G^{-1}\rho_0G^{-1}$ also commutes with $\rho_0$. [given, step 5.1, step 5.2, algebra]

7.1 Conversely, diagonalize $\rho_0$ in an orthonormal basis by [L6]. Commutation makes each eigenspace invariant under $\rho_1$; the restriction of the self-adjoint $\rho_1$ to each eigenspace has an orthonormal eigenbasis by [L6]. Combining them gives a common orthonormal eigenbasis $(|j\rangle)$. Define $K_j=|j,j\rangle\langle j|$ and $B(X)=\sum_jK_jXK_j^*$. By [L7], $K_j^*K_j=|j\rangle\langle j|$, so the basis identity gives $\sum_jK_j^*K_j=I$; [L6] therefore makes $B$ completely positive and trace-preserving, hence a channel. For either diagonal state $\rho_s=\sum_j\lambda_{s,j}|j\rangle\langle j|$, $B(\rho_s)=\sum_j\lambda_{s,j}|j,j\rangle\langle j,j|$, whose two marginals are both $\rho_s$. This proves the reverse direction. [given, L1, L6, L7, algebra] ∎

