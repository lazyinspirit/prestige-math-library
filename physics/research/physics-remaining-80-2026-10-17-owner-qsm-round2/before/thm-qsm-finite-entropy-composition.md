---
id: thm-qsm-finite-entropy-composition
kind: theorem
title: Finite mixing, product entropy, and bipartite subadditivity
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - thm-qsm-finite-gibbs-variational
  - supplier-nrqm-M3
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-finite-gibbs-variational: mathematical-premise
  supplier-nrqm-M3: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

For finite-dimensional density matrices, entropy is concave under finite mixing and additive on product states. If $R$ is a density matrix on $H_A\otimes H_B$, with marginals $\rho_A=\operatorname{Tr}_B R$, $\rho_B=\operatorname{Tr}_A R$, then
$
S(R)\leq S(\rho_A)+S(\rho_B),
$
with equality exactly when $R=\rho_A\otimes\rho_B$. These finite statements include rank-deficient densities and assert neither strong subadditivity nor general infinite-dimensional data processing.

## Facts & Assumptions

**Given:** Finite-dimensional complex Hilbert spaces $H_A,H_B$, finite density matrices, and the entropy and relative-entropy definitions of [[def-qsm-relative-entropy-domain]].

[A1] The Axiom of Choice is inherited through the finite Gibbs-variational supplier closure; the displayed finite-dimensional calculations themselves use no infinite-dimensional selection ([[def-axiom-of-choice]]).

[F1] [[thm-qsm-finite-gibbs-variational]]: finite relative entropy is nonnegative, with equality only for equal density matrices.

[L1] [[supplier-nrqm-M3]]: the completed NRQM research proof M3 defines finite partial trace by its trace pairing and proves positivity, trace preservation, and the reduced-state identities; it is not a production item or acceptance receipt.

## Proof

1.1 Let $\rho=\sum_at_a\rho_a$, $t_a\geq0$, $\sum_at_a=1$. If $v\in\ker\rho$, then $0=\langle\rho v,v\rangle=\sum_at_a\langle\rho_av,v\rangle$; positivity forces $\rho_av=0$ whenever $t_a>0$. Hence $\operatorname{supp}\rho_a\subseteq\operatorname{supp}\rho$ for every positive-weight term. [given, algebra]

1.2 If $\rho,\sigma$ have eigenvalues $p_i,q_j$, then $\rho\otimes\sigma$ has eigenbasis $u_i\otimes v_j$ and eigenvalues $p_iq_j$. Summing $-k_Bp_iq_j\log(p_iq_j)$ and using $\sum_ip_i=\sum_jq_j=1$ yields $S(\rho\otimes\sigma)=S(\rho)+S(\sigma)$. [given, algebra]

1.3 Put $P_A=\operatorname{supp}\rho_A$. For $v\in\ker\rho_A$, the partial-trace formula in [L1] gives $0=\langle\rho_Av,v\rangle=\sum_j\langle R(v\otimes f_j),v\otimes f_j\rangle$. Each summand is nonnegative, so each is zero; positivity gives $R^{1/2}(v\otimes f_j)=0$, hence $R(v\otimes f_j)=0$. By linearity, $R$ vanishes on $\ker\rho_A\otimes H_B$, so its range is orthogonal to that subspace and lies in $P_A\otimes H_B$. Applying the same argument to the other marginal gives range $R\subseteq H_A\otimes P_B$. The intersection of these two subspaces is $P_A\otimes P_B$, as follows by using orthonormal bases adapted to the two support/kernel decompositions. Therefore $\operatorname{supp}R\subseteq P_A\otimes P_B$. [given, L1, algebra]

2.1 On those supports, expanding the finite traces gives $ S(\rho)-\sum_at_aS(\rho_a)=k_B\sum_at_aD(\rho_a\|\rho)\geq0 $ by [F1]. Thus entropy is concave under finite mixing. [given, A1, step 1.1, F1, algebra]

3.1 Diagonalize $\rho_A,\rho_B$ on their supports. Their positive eigenvalues show $ \log(\rho_A\otimes\rho_B)=\log\rho_A\otimes I+I\otimes\log\rho_B $ on $P_A\otimes P_B$. The trace-pairing identities in [L1] then give $D(R\|\rho_A\otimes\rho_B)=[S(\rho_A)+S(\rho_B)-S(R)]/k_B\geq0$ by [F1]. Its equality condition in [F1] is exactly $R=\rho_A\otimes\rho_B$. [step 1.3, F1, L1, algebra] ∎
