---
id: thm-it-schumacher-quantum-source-coding
kind: theorem
title: Finite-dimensional Schumacher quantum source coding theorem
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-quantum-source-and-compression-code
  - lem-it-cq-typical-projector-dimension
  - lem-it-schmidt-rank-compression-fidelity-bound
  - def-qc-quantum-channel
  - thm-qc-kraus-choi-equivalence
  - thm-qc-trace-preserving-kraus-normalization
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 18"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, Theorem 5.44, §5.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $\rho$ be a density operator on a nonzero finite-dimensional source space, and use the squared entanglement-fidelity code model of [[def-it-quantum-source-and-compression-code]]. Write $S(\rho)$ in nats.

1. For every $R>S(\rho)$ there is a sequence of compression codes with $F_e^{(n)}\to1$ and $\limsup_n n^{-1}\ln M_n\le R$.
2. If a sequence of codes satisfies $\limsup_n n^{-1}\ln M_n<S(\rho)$, then $F_e^{(n)}\to0$.

Thus the asymptotic reliable compression rate is exactly $S(\rho)$ nats per source letter, or $S(\rho)/\ln2$ qubits per source letter.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional source space, a density operator $\rho$, and the compression-code convention of the Statement.

[F1] [[def-it-quantum-source-and-compression-code]]: an $(n,M)$ code factors through an $M$-dimensional code space, and its squared entanglement fidelity is the overlap of a purification with the recovered state.

[F2] [[lem-it-cq-typical-projector-dimension]]: the spectral typical projector for $\rho^{\otimes n}$ has mass tending to one, rank at most $e^{n(S(\rho)+\delta)}$, and every included eigenvalue is at most $e^{-n(S(\rho)-\delta)}$.

[F3] [[lem-it-schmidt-rank-compression-fidelity-bound]]: any code factoring through dimension $M$ has entanglement fidelity at most the sum of the $M$ largest eigenvalues of $\rho^{\otimes n}$.

[F4] [[def-qc-quantum-channel]]: a quantum channel is completely positive and trace preserving.

[F5] [[thm-qc-kraus-choi-equivalence]] and [[thm-qc-trace-preserving-kraus-normalization]]: finite channels have finite Kraus families, and a trace-preserving family satisfies $\sum_jK_j^*K_j=I$.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite-dimensional states have finite spectral decompositions in orthonormal eigenbases.

## Proof




1.1 Fix $\delta>0$, choose an ordered eigenbasis of $\rho$ once, and take the spectral typical projector $\Pi_n$ from [F2]. Order its finitely many product eigenvectors lexicographically; the resulting map to the first $r_n$ standard code basis vectors defines a partial isometry $W_n$ with $W_n^*W_n=\Pi_n$, where $r_n=\operatorname{rank}\Pi_n$. Let the code space have dimension $M_n=r_n+1$ and let $|\perp\rangle$ be its extra flag, orthogonal to $P_n:=W_nW_n^*$. Define $$\mathcal E_n(X)=W_nXW_n^*+\operatorname{tr}((I-\Pi_n)X)|\perp\rangle\langle\perp|,\qquad \mathcal D_n(Y)=W_n^*YW_n+\langle\perp|Y|\perp\rangle\,\rho^{\otimes n}.$$ The encoder Kraus family consists of $W_n$ and $|\perp\rangle\langle e_j|$ over an orthonormal basis of $\ker\Pi_n$; its Kraus squares sum to $\Pi_n+(I-\Pi_n)=I$. The decoder Kraus family consists of $W_n^*$ and $\sqrt{\lambda_j}|f_j\rangle\langle\perp|$ from a spectral decomposition $\rho^{\otimes n}=\sum_j\lambda_j|f_j\rangle\langle f_j|$; its Kraus squares sum to $P_n+|\perp\rangle\langle\perp|=I$. Thus both maps are channels by [F4]–[F6]. If $(K_\ell)_\ell$ is the finite composite Kraus family, substituting its action into [F1] gives $F_e^{(n)}=\sum_\ell|\langle\phi|(\operatorname{id}_R\otimes K_\ell)|\phi\rangle|^2$. The branch $K_0=W_n^*W_n=\Pi_n$ contributes $|\langle\phi|(\operatorname{id}_R\otimes\Pi_n)|\phi\rangle|^2=(\operatorname{tr}(\rho^{\otimes n}\Pi_n))^2$, and every other branch contributes a nonnegative squared modulus. Therefore $F_e^{(n)}\ge(\operatorname{tr}(\rho^{\otimes n}\Pi_n))^2\to1$. The basis order makes the sequence of codes explicit and uses no choice axiom. [F1, F2, F4, F5, F6, given, construct]

1.2 Suppose $\limsup_n n^{-1}\ln M_n<S(\rho)$. Choose $\delta>0$ and $N$ so that $M_n\le e^{n(S(\rho)-2\delta)}$ for $n\ge N$. Let $\Pi_n$ be the typical projector from [F2], and let $\epsilon_n=1-\operatorname{tr}(\rho^{\otimes n}\Pi_n)\to0$. Each eigenvalue in its range is at most $e^{-n(S(\rho)-\delta)}$. Therefore the sum of any $M_n$ eigenvalues of $\rho^{\otimes n}$ is at most $\epsilon_n+M_ne^{-n(S(\rho)-\delta)}\le\epsilon_n+e^{-n\delta}\to0$: the part outside the typical range contributes at most its total mass, and each selected eigenvalue inside contributes at most the displayed maximum. [F2, given, algebra, choose]

2.1 Since $r_n\le e^{n(S(\rho)+\delta)}$ and $e^{n(S+\delta)}\ge1$, $M_n=r_n+1\le2e^{n(S(\rho)+\delta)}$. Hence $\limsup_n n^{-1}\ln M_n\le S(\rho)+\delta$. Given $R>S(\rho)$, choose $\delta<R-S(\rho)$ to obtain the direct assertion. [F2, step 1.1, algebra, choose]

3.1 Apply [F3] to each $n$-block code with intermediate dimension $M_n$. Step 1.2 shows that its fidelity is at most a quantity tending to zero, hence $F_e^{(n)}\to0$. The argument includes zero eigenvalues and requires no full-rank source assumption. [F1, F3, step 1.2] ∎
