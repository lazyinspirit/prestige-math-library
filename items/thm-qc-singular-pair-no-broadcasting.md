---
id: thm-qc-singular-pair-no-broadcasting
kind: theorem
title: "Singular Pair No Broadcasting"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps: ["def-qc-broadcasting-family", "def-qc-quantum-channel", "def-qc-completely-positive-map", "thm-qc-full-rank-pair-no-broadcasting", "lem-qc-faithful-state-dominates-positive-operator", "lem-qc-positive-marginals-imply-joint-support", "thm-complex-spectral-theorem-for-normal-endomorphisms", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "def-qc-density-operator", "def-qc-partial-trace", "def-qc-dirac-notation-conversion", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "thm-qc-kraus-map-completely-positive", "thm-qc-trace-preserving-kraus-normalization"]
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

For any two density operators $\rho_0,\rho_1$ on a nonzero finite-dimensional $H$, one channel broadcasts both if and only if $[\rho_0,\rho_1]=0$.

## Facts & Assumptions

**Given:** States $\rho_0,\rho_1$ on $H$ and, for necessity, a common channel $B$ broadcasting both.

[L1] A broadcaster is one channel whose two partial-trace marginals equal each input; density operators are nonnegative and trace one ([[def-qc-broadcasting-family]], [[def-qc-quantum-channel]], [[def-qc-density-operator]], [[def-qc-partial-trace]]).

[L2] A faithful state $\sigma$ on a finite-dimensional support dominates each positive $X$ on that support up to a finite scalar ([[lem-qc-faithful-state-dominates-positive-operator]]).

[L3] If both marginals of a positive joint operator are supported on $S$, then the joint operator is supported on $S\otimes S$ ([[lem-qc-positive-marginals-imply-joint-support]]).

[L4] Complete positivity means every finite amplification preserves nonnegativity; composing those amplifications with isometric inclusions and orthogonal compressions preserves nonnegativity. Positive square roots exist ([[def-qc-completely-positive-map]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

[L5] The full-rank pair theorem gives commutation for broadcastable faithful states on any nonzero finite-dimensional support ([[thm-qc-full-rank-pair-no-broadcasting]]).

[F1] A self-adjoint endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F2] A finite Kraus sum is completely positive and trace-preserving exactly when $\sum_jK_j^*K_j=I$; the rank-one operator $|x\rangle\langle y|$ acts as $z\mapsto\langle z,y\rangle x$ ([[thm-qc-kraus-map-completely-positive]], [[thm-qc-trace-preserving-kraus-normalization]], [[def-qc-dirac-notation-conversion]]).

[F3] Every self-adjoint finite-dimensional operator is a difference of its nonnegative positive and negative spectral parts; every operator is the sum of a self-adjoint operator and $i$ times a self-adjoint operator ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof


1.1 Let $S=\operatorname{supp}(\rho_0)+\operatorname{supp}(\rho_1)$, the linear span of the two supports. It is nonzero. Set $\sigma=(\rho_0+\rho_1)/2$. For $x\in S$, $\langle(\rho_0+\rho_1)x,x\rangle=0$ implies both nonnegative terms vanish, hence $x$ lies in both kernels and is orthogonal to $S$, so $x=0$. Therefore $\sigma$ is positive definite on $S$; it has trace one and support $S$. By linearity, $B(\sigma)$ has both marginals equal to $\sigma$. [given, L1, L4, algebra]

2.1 For any nonnegative $X$ on $S$, faithfulness in step 1.1 and [L2] give $0\le X\le c\sigma$ for some finite $c$. Positivity of $B$ yields $0\le B(X)\le cB(\sigma)$. By [L3], $B(\sigma)$ is supported on $S\otimes S$. If $0\le A\le C$ and $x\in\ker C$, then $0\le\langle Ax,x\rangle\le\langle Cx,x\rangle=0$. Thus $\|A^{1/2}x\|^2=0$, so $Ax=0$ and $\ker C\subseteq\ker A$; taking orthogonal complements gives $\operatorname{supp}A\subseteq\operatorname{supp}C$. Applying this to $A=B(X)$ shows $B(X)$ is supported on $S\otimes S$. [given, L2, L3, L4, step 1.1, algebra]

3.1 Nonnegative operators span $\mathcal L(S)$ over $\mathbb C$ by [F3]. Therefore step 2.1 shows $B(X)$ is supported on $S\otimes S$ for every $X\in\mathcal L(S)$. Define $\widetilde B:\mathcal L(S)\to\mathcal L(S\otimes S)$ by restricting the input and identifying each supported output with its compression to $S\otimes S$. For each finite amplification, the input inclusion and output compression preserve nonnegativity, so $\widetilde B$ is completely positive by [L4]. In an orthonormal basis of $H$ extending one of $S$, the embedded input has $X$ as its $S$-block and zero elsewhere, so its trace is $\operatorname{tr}X$; output compression leaves the supported $B(X)$ unchanged. Thus $\widetilde B$ is trace-preserving and a channel by [L1]. It broadcasts the restrictions of $\rho_0,\rho_1$ on $S$. For fixed $0<\varepsilon<1$, the states $\tau_i=(1-\varepsilon)\rho_i+\varepsilon\sigma$ are faithful on $S$ and are broadcast by $\widetilde B$. By [L5], $[\tau_0,\tau_1]=0$. Direct expansion using $\sigma=(\rho_0+\rho_1)/2$ gives $[\tau_0,\tau_1]=(1-\varepsilon)[\rho_0,\rho_1]$; since $1-\varepsilon\ne0$, the original states commute. [given, L1, L4, L5, F3, step 1.1, step 2.1, algebra]

4.1 Suppose $[\rho_0,\rho_1]=0$. Choose an orthonormal eigenbasis of $\rho_0$ by [F1] and group it into its finitely many eigenspaces $S_\lambda$. For $x\in S_\lambda$, $\rho_0(\rho_1x)=\rho_1(\rho_0x)=\lambda\rho_1x$, so $S_\lambda$ is invariant under $\rho_1$. The restriction of $\rho_1$ to $S_\lambda$ is self-adjoint, since $\langle\rho_1x,y\rangle=\langle x,\rho_1y\rangle$ for $x,y\in S_\lambda$. Apply [F1] on each $S_\lambda$ and combine these orthonormal eigenbases to obtain a common orthonormal basis $(e_j)$. Write $\rho_i=\sum_j\lambda_{i,j}|e_j\rangle\langle e_j|$. The Kraus operators $K_j=|e_j\otimes e_j\rangle\langle e_j|$ obey $\sum_jK_j^*K_j=I$. Their map $B(X)=\sum_jK_jXK_j^*$ is a channel by [F2]. It sends $\rho_i$ to $\sum_j\lambda_{i,j}|e_j\otimes e_j\rangle\langle e_j\otimes e_j|$, whose two marginals are $\rho_i$. Thus the pair is broadcastable. [given, L1, F1, F2, step 3.1, algebra, choose] ∎

