---
id: lem-nrqm-composites-finite-ancilla-complete-positivity
aliases: [nrqm-composites-finite-ancilla-complete-positivity]
kind: lemma
domain: mathematics
title: "Finite-ancilla complete positivity of countable Kraus maps"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-trace-class-operator, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace-class amplification)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products' (composite systems and amplification)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]), let $(M_a)_{a\ge1}$ be bounded operators on $H$ with $\sum_{a\le N}M_a^*M_a\to I$ strongly, and let $\Phi(\rho)=\sum_aM_a\rho M_a^*$ be the map of [[lem-nrqm-composites-countable-kraus-normalization]]. Here a map on trace-class operators is **completely positive on finite-dimensional ancillas** when, for every finite-dimensional complex inner product space $C$, its matrixwise amplification $I_C\otimes\Phi$ preserves self-adjoint positive trace-class operators on $C\widehat\otimes H$. Then for every finite-dimensional complex inner product space $C$ the amplification

$$I_C\otimes\Phi:S_1(C\widehat\otimes H)\to S_1(C\widehat\otimes H)$$

is well defined by the trace-norm convergent series $\sum_a(I_C\otimes M_a)R(I_C\otimes M_a^*)$ and preserves positivity: every self-adjoint positive trace-class $R$ (positivity in the sense of [[def-self-adjoint-positive-unitary-and-normal-operator]]) has $I_C\otimes\Phi(R)$ self-adjoint positive. Hence $\Phi$ is completely positive on every finite-dimensional ancilla in the stated sense.

## Facts & Assumptions

**Given:** $H$, $(M_a)$ and $\Phi$ as in the Statement; a finite-dimensional complex inner product space $C$; a positive trace-class $R$ on $C\widehat\otimes H$.

[F1] The completed tensor product $C\widehat\otimes H$ with the inner product $\langle c\otimes h,c'\otimes h'\rangle=\langle c,c'\rangle\langle h,h'\rangle$ is a complex Hilbert space with dense span of elementary tensors; for bounded $S$ the amplification $I_C\otimes S$ is bounded with $\|I_C\otimes S\|\le\|S\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]]).

[F2] For every $R\ge0$ in $S_1$ and every bounded $V$, $VRV^*\ge0$ and $\operatorname{tr}(VRV^*)=\operatorname{tr}(V^*VR)$; the trace-class operators are complete in trace norm ([[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[def-trace-class-operator]]).

[F3] A positive trace-class operator $R$ on a Hilbert space has a spectral expansion $R=\sum_nw_nT_{\xi_n,\xi_n}$ with orthonormal $\xi_n$, $w_n\ge0$ and $\sum_nw_n=\operatorname{tr}R$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[F4] The partial sums $S_N=\sum_{a\le N}M_a^*M_a$ satisfy $0\le S_N\le I$ and converge strongly to $I$. For finite-dimensional $C$ with orthonormal basis $(e_k)_{k=1}^d$, every vector in $C\widehat\otimes H$ has the form $\xi=\sum_ke_k\otimes h_k$, so $I_C\otimes S_N$ acts coordinatewise, is a positive contraction, and converges strongly to $I$ ([[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

## Proof

1.1 [The amplified family is strongly complete] For each $a$, $(I_C\otimes M_a)^*(I_C\otimes M_a)=I_C\otimes M_a^*M_a$ by [F1]. If $(e_k)_{k=1}^d$ is an orthonormal basis of $C$ and $\xi=\sum_ke_k\otimes h_k$, then $\left\|\left(I_C\otimes\sum_{a\le N}M_a^*M_a-I\right)\xi\right\|^2=\sum_{k=1}^d\left\|(S_N-I)h_k\right\|^2\longrightarrow0$ by the assumed strong convergence on $H$. Thus the amplified family satisfies the hypothesis of [[lem-nrqm-composites-countable-kraus-normalization]] on $C\widehat\otimes H$, and that lemma applies to it. [given, F1, F4, algebra]

2.1 [Positivity] If $C=\{0\}$ or $H=\{0\}$, then $C\widehat\otimes H=\{0\}$, the only trace-class input is $R=0$, and the asserted series and its limit are zero, so the conclusion holds. Suppose henceforth that $C,H\ne\{0\}$. For $R\ge0$ and each $a$, $(I_C\otimes M_a)R(I_C\otimes M_a)^*\ge0$ by [F2]; the partial sums are positive, and the trace-norm limit is positive because $\langle Sx,x\rangle=\lim\langle S_Nx,x\rangle\ge0$ for trace-norm convergent $S_N\to S$. Alternatively, applying the spectral argument of [[lem-nrqm-composites-countable-kraus-normalization]] to the amplified family: by [F3], $R=\sum_nw_nT_{\xi_n,\xi_n}$ with $\xi_n\in C\widehat\otimes H$, the partial sums $\sum_{a\le N}(I_C\otimes M_a)R(I_C\otimes M_a)^*=\sum_nw_n\sum_{a\le N}T_{(I_C\otimes M_a)\xi_n,(I_C\otimes M_a)\xi_n}$ are positive with traces $\sum_nw_n\sum_{a\le N}\|(I_C\otimes M_a)\xi_n\|^2\uparrow\sum_nw_n\|\xi_n\|^2=\operatorname{tr}R$ by step 1.1, so they converge in trace norm to a positive limit with trace $\operatorname{tr}R$, and the series converges to $I_C\otimes\Phi(R)$. [step 1.1, F1, F2, F3, algebra] ∎
