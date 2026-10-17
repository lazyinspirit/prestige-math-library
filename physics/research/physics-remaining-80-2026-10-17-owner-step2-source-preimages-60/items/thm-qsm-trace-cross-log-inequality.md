---
id: thm-qsm-trace-cross-log-inequality
kind: theorem
title: Trace-class cross-log entropy inequality
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
- def-axiom-of-choice
- lem-qsm-trace-state-calculus
- def-qsm-relative-entropy-domain
- def-kullback-leibler-divergence
- thm-kullback-leibler-is-nonnegative
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-qsm-trace-state-calculus: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  def-kullback-leibler-divergence: mathematical-premise
  thm-kullback-leibler-is-nonnegative: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2, author-hosted manuscript
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $\rho,\sigma$ be trace-class normal densities on a separable complex Hilbert space, with $\operatorname{supp}\rho\subseteq\operatorname{supp}\sigma$. Define $C(\rho,\sigma)$ and $D(\rho\|\sigma)$ as in [[def-qsm-relative-entropy-domain]]. If $C(\rho,\sigma)<\infty$, then $S(\rho)<\infty$, $D(\rho\|\sigma)=C(\rho,\sigma)-S(\rho)/k_B\geq0$, and equality holds exactly when $\rho=\sigma$. This restricted cross-log domain makes no assertion about an undefined $\infty-\infty$ difference.

## Facts & Assumptions

**Given:** Countable and full choice as required by the imported spectral calculus and its transitive suppliers; trace-class normal densities $\rho,\sigma$ with support inclusion; and finite $C(\rho,\sigma)$.

[A1] The Axiom of Choice enters through the unbounded self-adjoint spectral theorem in the trace-state supplier closure; all conclusions here are conditional on that exact axiom and the stated supplier hypotheses ([[def-axiom-of-choice]]).

[F1] [[def-qsm-relative-entropy-domain]]: $C(\rho,\sigma)=\sum_{i,j}p_i(-\log s_j)|\langle u_i,v_j\rangle|^2$, with nonnegative terms, and $D=C-S(\rho)/k_B$ only when finite terms make the subtraction defined.

[F2] [[lem-qsm-trace-state-calculus]]: positive trace-class densities have countable spectral expansions with trace-one weights and entropy $S/k_B=\sum_i-p_i\log p_i$.

[L1] [[def-kullback-leibler-divergence]] and [[thm-kullback-leibler-is-nonnegative]]: under the Axiom of Choice, KL divergence between probability measures is nonnegative, with equality exactly for equal measures. On a finite or countable discrete space with positive $q_i$, the density $p_i/q_i$ gives $\sum_i p_i\log(p_i/q_i)$ when the logarithm sums are integrable. We apply this only to normalized distributions.

## Proof

1.1 Write $\rho=\sum_i p_i|u_i\rangle\langle u_i|$ and $\sigma=\sum_j s_j|v_j\rangle\langle v_j|$ on their positive supports. Put $w_{ij}=|\langle u_i,v_j\rangle|^2$, so $\sum_jw_{ij}=1$ because $u_i\in\operatorname{supp}\sigma$, and $\sum_iw_{ij}\leq1$. Define $q_i=\langle\sigma u_i,u_i\rangle=\sum_jw_{ij}s_j>0$; then $Q=\sum_iq_i=\operatorname{Tr}(\sigma P_{\operatorname{supp}\rho})\leq1$. [given, A1, F1, F2, algebra]

2.1 For $q>0$ and $x>0$, $\log x\leq\log q+(x-q)/q$, because $t-1-\log t\geq0$ for $t=x/q$, as its derivative $1-1/t$ has its unique minimum at $t=1$. Applying this tangent inequality to $s_j$ with weights $w_{ij}$ gives $\sum_jw_{ij}(-\log s_j)\geq-\log q_i$. Since $C<\infty$, $T:=\sum_i p_i(-\log q_i)\leq C<\infty$. [step 1.1, F1, algebra]

3.1 For a finite initial set $1\leq i\leq N$, let $a_N=\sum_{i\leq N}p_i$ and $b_N=\sum_{i\leq N}q_i$. Applying the finite-density case of [L1] to $(p_i/a_N)$ and $(q_i/b_N)$ gives $ \sum_{i\leq N}-p_i\log p_i\leq\sum_{i\leq N}p_i(-\log q_i)-a_N\log a_N+a_N\log b_N \leq T-a_N\log a_N, $ because $0<b_N\leq1$. As $N\to\infty$, $a_N\to1$ and $-a_N\log a_N\to0$. The nonnegative partial entropy sums are therefore bounded, so $S(\rho)/k_B=\sum_i-p_i\log p_i<\infty$. This also makes both scalar logarithm series below absolutely defined. [step 1.1, step 2.1, L1, algebra]

4.1 Normalize $q_i$ by $Q$, so $q_i'=q_i/Q$ is a probability distribution with $q_i'>0$. Apply [L1] to $p_i$ and $q_i'$: $\sum_i p_i\log(p_i/q_i')\geq0$, hence $\sum_i p_i\log(p_i/q_i)\geq-\log Q\geq0$. Combining this with the nonnegative Jensen gaps from step 2.1 gives $C-S(\rho)/k_B\geq0$. [step 1.1, step 2.1, step 3.1, L1, algebra]

5.1 Since steps 3.1–4.1 prove that $S(\rho)$ and $T$ are finite, and $q_i'=q_i/Q$, direct logarithm algebra gives $ D(\rho\|\sigma)=C-\frac{S(\rho)}{k_B} =(C-T)+\sum_i p_i\log\frac{p_i}{q_i'}-\log Q. $ The first term is the sum of the nonnegative Jensen gaps from step 2.1, the middle term is the countable relative entropy from [L1], and the last term is nonnegative because $Q\leq1$. If $D(\rho\|\sigma)=0$, all three vanish. Thus $Q=1$; equality in [L1] gives $p_i=q_i'=q_i$ for every $i$. The Jensen gap is $\sum_i p_i\bigl[\sum_jw_{ij}(-\log s_j)+\log q_i\bigr]$; each bracket is nonnegative by step 2.1 and each $p_i>0$, so a zero sum forces equality in every bracket. Strictness of $\log x\leq\log q_i+(x-q_i)/q_i$ then forces $s_j=q_i$ whenever $w_{ij}>0$, and the spectral expansion gives $\sigma u_i=q_i u_i=p_i u_i$. The equality $Q=1$ says $\operatorname{Tr}(\sigma(I-P_{\operatorname{supp}\rho}))=0$. Put $P=P_{\operatorname{supp}\rho}$. The spectral expansion and the bounded trace pairing in [F2] give $0=\operatorname{Tr}(\sigma(I-P))=\sum_j s_j\|(I-P)v_j\|^2$. Every term is nonnegative and every $s_j>0$, so $(I-P)v_j=0$ for all $j$. Therefore the positive spectral range of $\sigma$ lies in $P H$, and its spectral expansion makes $\sigma$ vanish on $(P H)^\perp$. Therefore $\rho=\sigma$. Conversely, if $\rho=\sigma$, then $q_i=p_i$, $C=S(\rho)/k_B$, and $D=0$. [step 1.1, step 2.1, step 3.1, step 4.1, F1, L1, algebra] ∎
