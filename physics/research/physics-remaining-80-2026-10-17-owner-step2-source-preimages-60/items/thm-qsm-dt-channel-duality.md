---
id: thm-qsm-dt-channel-duality
kind: theorem
title: Channel duals and norm closure
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-dt-channel-definition
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.2.1–2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement

Let $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ be a finite channel as defined in [[def-qsm-dt-channel-definition]]. There is a unique linear map $\Phi^\dagger:M_e(\mathbb C)\to M_d(\mathbb C)$ satisfying the trace-pairing identity

$$\operatorname{Tr}(\Phi(X)A)=\operatorname{Tr}(X\Phi^\dagger(A))\qquad(X\in M_d(\mathbb C),\ A\in M_e(\mathbb C)).$$

If $\Phi(X)=\sum_aK_aXK_a^*$, then $\Phi^\dagger(A)=\sum_aK_a^*AK_a$; in particular, $\Phi^\dagger$ is completely positive and unital. Composition and finite convex combinations of channels are channels. A limit in the induced operator norm $\|\Psi\|_{\infty\to\infty}:=\sup_{\|X\|_\infty\leq1}\|\Psi(X)\|_\infty$, where $\|X\|_\infty:=\sup_{\|v\|=1}\|Xv\|$, of channels $M_d(\mathbb C)\to M_e(\mathbb C)$ is also a channel. Moreover, a norm limit of completely positive maps of these fixed finite dimensions is completely positive.

## Facts & Assumptions

**Given:** Integers $d,e\geq1$, a finite channel $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$, and finite matrix traces.

[F1] [[def-qsm-dt-channel-definition]]: a channel is complex-linear, completely positive under every finite ancilla extension, and trace-preserving.

[F2] [[thm-qsm-dt-choi-kraus]]: every finite completely positive map has a finite Kraus form $\Phi(X)=\sum_aK_aXK_a^*$; trace preservation is equivalent to $\sum_aK_a^*K_a=I_d$.

[F3] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: the finite trace cycles rectangular products, and the matrix-unit pairing shows that $\operatorname{Tr}_d(XD)=0$ for every $X$ forces $D=0$.

## Proof

1.1 Using the Kraus form in [F2] and finite trace cyclicity [F3], $\operatorname{Tr}(\Phi(X)A)=\sum_a\operatorname{Tr}(K_aXK_a^*A)=\operatorname{Tr}(X\sum_aK_a^*AK_a)$. Thus $\Phi^\dagger(A)=\sum_aK_a^*AK_a$ satisfies the trace-pairing identity. [given, F2, F3, algebra]

1.2 If $\Psi(Y)=\sum_bL_bYL_b^*$ is another channel, then $(\Psi\circ\Phi)(X)=\sum_{a,b}(L_bK_a)X(L_bK_a)^*$, and $$ \sum_{a,b}(L_bK_a)^*(L_bK_a)=\sum_aK_a^*\left(\sum_bL_b^*L_b\right)K_a=\sum_aK_a^*K_a=I_d. $$ If $\Phi_r(X)=\sum_aK_{r,a}XK_{r,a}^*$ and $p_r\geq0$, $\sum_rp_r=1$, then $\sum_rp_r\Phi_r$ has Kraus matrices $\sqrt{p_r}K_{r,a}$, whose adjoint-square sum is $\sum_rp_r I_d=I_d$. In both cases [F2] gives a channel. [given, F2, algebra]

2.1 If $B,C\in M_d(\mathbb C)$ both satisfy the pairing identity for a fixed $A$, then $\operatorname{Tr}(X(B-C))=0$ for every $X$. By [F3], taking $X=E_{ij}$ gives every entry of $B-C$ equal to zero, so uniqueness follows. The Kraus form in step 1.1 is completely positive by [F2], and $\Phi^\dagger(I_e)=\sum_aK_a^*K_a=I_d$ by [F1] and [F2]. [given, F1, F2, F3, step 1.1, algebra]

3.1 Let $\Phi_n\to\Phi$ in the stated induced norm, with each $\Phi_n$ completely positive. Since $\|E_{ij}\|_\infty=1$, each block $\Phi_n(E_{ij})$ converges to $\Phi(E_{ij})$; the finite Choi sums therefore converge in matrix norm. Every $J(\Phi_n)\geq0$ by [F2], and for every vector $v$, $\langle J(\Phi)v,v\rangle=\lim_n\langle J(\Phi_n)v,v\rangle\geq0$, so $J(\Phi)\geq0$. The equivalence in [F2] gives complete positivity. If each $\Phi_n$ is trace-preserving, then for every $X$, continuity of finite matrix trace gives $\operatorname{Tr}\Phi(X)=\lim_n\operatorname{Tr}\Phi_n(X)=\operatorname{Tr}X$; thus $\Phi$ is trace-preserving as well. [given, F2, algebra] ∎
