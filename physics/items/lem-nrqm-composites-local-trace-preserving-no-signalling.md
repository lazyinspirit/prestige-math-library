---
id: lem-nrqm-composites-local-trace-preserving-no-signalling
aliases: [nrqm-composites-local-trace-preserving-no-signalling]
kind: lemma
domain: mathematics
title: "Local trace-preserving Kraus maps do not change the opposite reduced state"
status: published
origin: pipeline
dependency_level: 4
deps: [lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-finite-ancilla-complete-positivity, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-self-adjoint-positive-unitary-and-normal-operator, def-countable-choice, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-hilbert-tensor-construction]
dependency_roles:
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-finite-ancilla-complete-positivity: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §3 pp. 9-12"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.3 pp. 121-128 (local operations and reduced states)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be complex Hilbert spaces, let $(M_a)_{a\ge1}$ be bounded operators on $K$ with $\sum_{a\le N}M_a^*M_a\to I_K$ strongly, and let $R$ be a trace-class operator on $H\widehat\otimes K$. In this statement, $R\ge0$ means that $R$ is self-adjoint and $\langle Rx,x\rangle\ge0$ for every $x$, as in [[def-self-adjoint-positive-unitary-and-normal-operator]]. Then the series (when either factor is $\{0\}$, use the zero partial-trace maps $\operatorname{Tr}_K:\mathcal S_1(\{0\})\to\mathcal S_1(H)$ and $\operatorname{Tr}_H:\mathcal S_1(\{0\})\to\mathcal S_1(K)$; when both factors are nonzero, use the partial traces of [[lem-nrqm-composites-separable-partial-trace]])

$$\sum_{a\ge1}(I_H\otimes M_a)R(I_H\otimes M_a^*)$$

converges in trace norm, its sum $\Phi(R)$ is trace class with $\operatorname{tr}\Phi(R)=\operatorname{tr}R$ and $\Phi(R)\ge0$ if $R\ge0$, and the reduced state on $H$ is unchanged:

$$\operatorname{Tr}_K\Phi(R)=\operatorname{Tr}_KR .$$

By symmetry, a local map $R\mapsto\sum_a(N_a\otimes I_K)R(N_a^*\otimes I_K)$ on the first factor also leaves $\operatorname{Tr}_HR$ fixed. Selective conditioning (one summand normalized by its nonzero trace) is not covered.

## Facts & Assumptions

**Given:** $H,K$; the family $(M_a)$; a trace-class $R$ on $H\widehat\otimes K$ with nuclear representation $R=\sum_jT_{w_j,z_j}$; a bounded $A\in\mathcal B(H)$.

[F1] The amplified family $(I_H\otimes M_a)$ consists of bounded operators on $H\widehat\otimes K$ with $(I_H\otimes M_a)^*(I_H\otimes M_a)=I_H\otimes M_a^*M_a$, and $\sum_{a\le N}(I_H\otimes M_a)^*(I_H\otimes M_a)\to I$ strongly: on finite sums of elementary tensors this is the strong convergence of $\sum_{a\le N}M_a^*M_a$, and the general case follows by approximation and $\|I_H\otimes S_N\|\le1$ ([[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] Under the strong completeness hypothesis, $\sum_aV_aRV_a^*$ converges in trace norm for every trace-class $R$, is positive for positive $R$, and preserves the trace, where $V_a:=I_H\otimes M_a$; moreover the identity $\operatorname{tr}\bigl(\sum_aV_aRV_a^*\bigr)=\operatorname{tr}R$ is the trace-preservation clause ([[lem-nrqm-composites-countable-kraus-normalization]], [[lem-nrqm-composites-finite-ancilla-complete-positivity]]).

[F3] When $H,K\ne\{0\}$, $\operatorname{Tr}_K$ is the unique linear map on $\mathcal S_1(H\widehat\otimes K)$ with $\operatorname{tr}((\operatorname{Tr}_KT)A)=\operatorname{tr}(T(A\otimes I_K))$ for all bounded $A$, and it satisfies $\|\operatorname{Tr}_KT\|_1\le\|T\|_1$ ([[lem-nrqm-composites-separable-partial-trace]]); the Statement supplies the zero-map convention when a factor is zero.

[F4] For a bounded operator $B$ and trace-class $T$, $BT$ is trace class with $\|BT\|_1\le\|B\|\,\|T\|_1$, and $\operatorname{tr}(BT)$ is linear in $T$ and continuous in trace norm ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]). In addition, every trace-class $T$ has a nuclear representation $T=\sum_jT_{w_j,z_j}$, and for bounded $B$ the trace formulas $\operatorname{tr}(TB)=\sum_j\langle w_j,B^*z_j\rangle=\operatorname{tr}(BT)$ hold with absolute convergence ([[lem-nrqm-composites-nuclear-bounded-cyclicity]], Facts [F2] and Statement (b)).

## Proof

1.1 [Convergence of the local map] If $H=\{0\}$ or $K=\{0\}$, then $R=0$ and every summand $(I_H\otimes M_a)R(I_H\otimes M_a)^*$ is zero; hence $\Phi(R)=0$ and both sides of $\operatorname{Tr}_K\Phi(R)=\operatorname{Tr}_KR$ are zero by the convention in the Statement. Assume henceforth $H,K\ne\{0\}$. By [F1] the amplified family satisfies the strong completeness hypothesis of [F2] on the Hilbert space $H\widehat\otimes K$, so the series $\sum_aV_aRV_a^*$ with $V_a=I_H\otimes M_a$ converges in trace norm, its sum $\Phi(R)$ is trace class with $\operatorname{tr}\Phi(R)=\operatorname{tr}R$, and $\Phi(R)\ge0$ for $R\ge0$. [given, F1, F2]

2.1 [Pairing computation] For bounded $A$ and $V_a=I_H\otimes M_a$, apply the bounded cyclicity of [F4] to the trace-class operator $T=RV_a^*(A\otimes I_K)$ and bounded $V_a$. It gives $\operatorname{tr}\bigl(V_aRV_a^*(A\otimes I_K)\bigr)=\operatorname{tr}\bigl(R\,V_a^*(A\otimes I_K)V_a\bigr)$ with $V_a^*(A\otimes I_K)V_a=(I_H\otimes M_a^*)(A\otimes I_K)(I_H\otimes M_a)=A\otimes M_a^*M_a$. For each $N$, sum this identity over $a\le N$; trace-norm convergence of the series in step 1.1 and trace-norm continuity of the bounded trace pairing [F4] give $\operatorname{tr}(\Phi(R)(A\otimes I_K))=\lim_{N\to\infty}\operatorname{tr}(R(A\otimes S_N))$, where $S_N=\sum_{a\le N}M_a^*M_a$. [step 1.1, F4, algebra]

3.1 [Passing to the limit in the completeness sum] Let $R=\sum_jT_{w_j,z_j}$ be nuclear. For each $N$, $\operatorname{tr}\bigl(R(A\otimes\sum_{a\le N}M_a^*M_a)\bigr)=\sum_j\langle w_j,(A\otimes S_N)^*z_j\rangle$ with $S_N:=\sum_{a\le N}M_a^*M_a$, an absolutely convergent series with $|\langle w_j,(A\otimes S_N)^*z_j\rangle|\le\|A\|\,\|w_j\|\,\|z_j\|$; since $(A\otimes S_N)^*\to A^*\otimes I$ strongly, each term converges to $\langle w_j,(A^*\otimes I)z_j\rangle$, and the summable majorant gives $\sum_j\langle w_j,(A\otimes S_N)^*z_j\rangle\to\sum_j\langle w_j,(A^*\otimes I)z_j\rangle=\operatorname{tr}(R(A\otimes I_K))$. Hence $\operatorname{tr}(\Phi(R)(A\otimes I_K))=\operatorname{tr}(R(A\otimes I_K))$. [step 2.1, F1, F4, algebra]

4.1 [Conclusion] By [F3], $\operatorname{tr}\bigl((\operatorname{Tr}_K\Phi(R))A\bigr)=\operatorname{tr}(\Phi(R)(A\otimes I_K))=\operatorname{tr}(R(A\otimes I_K))=\operatorname{tr}((\operatorname{Tr}_KR)A)$ for every bounded $A$; since the pairings with all $A$ determine a trace-class operator by the uniqueness in [F3], $\operatorname{Tr}_K\Phi(R)=\operatorname{Tr}_KR$. The statement for the first factor is obtained by exchanging the roles of $H$ and $K$. [step 3.1, F3] ∎
