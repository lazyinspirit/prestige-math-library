---
id: lem-nrqm-composites-general-trace-class-instrument-and-effect-duality
aliases: [nrqm-composites-general-trace-class-instrument-and-effect-duality]
kind: lemma
domain: mathematics
title: "Abstract trace-class instruments: effects and Heisenberg duality"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-riesz-representation-for-hilbert-space, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace-class pairing and duality)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's Bra and Ket Notation' (effects and measurement formulation)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $(X,\Sigma)$ be a measurable space.

By an **abstract instrument** on $(X,\Sigma)$ we mean a map $J:\Sigma\to\mathcal B(\mathcal S_1(H))$ into bounded linear maps of the trace-class operators such that (i) each $J_B$ is completely positive (every finite amplification $I_{\mathbb C^n}\otimes J_B$ preserves positivity on positive trace-class operators); (ii) for pairwise disjoint $B_n$ with union $B$, $J_B(\rho)=\sum_nJ_{B_n}(\rho)$ in trace norm for every trace-class $\rho$; (iii) $J_X$ is trace preserving.

Then:

(a) for every $B\in\Sigma$ there is a unique effect $F_B\in\mathcal B(H)$, $0\le F_B\le I$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]), with $\operatorname{tr}\bigl(J_B(T)\bigr)=\operatorname{tr}(TF_B)$ for every trace-class $T$;

(b) $F_X=I$, and $B\mapsto F_B$ is weakly countably additive: for pairwise disjoint $B_n$ with union $B$ and all $x,y\in H$, $\langle F_Bx,y\rangle=\sum_n\langle F_{B_n}x,y\rangle$;

(c) for every $B$ and every bounded $A\in\mathcal B(H)$ there is a unique bounded operator $J_B^*(A)$ with $\operatorname{tr}\bigl(J_B(T)A\bigr)=\operatorname{tr}\bigl(TJ_B^*(A)\bigr)$ for every trace-class $T$; the map $A\mapsto J_B^*(A)$ is linear and bounded with $J_B^*(A)\ge0$ for $A\ge0$ and $J_X^*(I)=I$;

(d) for a density operator $\rho$ and $B\in\Sigma$ the number $p(B)=\operatorname{tr}(J_B(\rho))=\operatorname{tr}(\rho F_B)$ lies in $[0,1]$, and $p$ is countably additive. Whether an experimental procedure realizes such an instrument is a separate model assumption; the conditional update $J_B(\rho)/p(B)$ is defined only when $p(B)>0$.

No universal representation theorem for arbitrary instruments is asserted.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; an abstract instrument $J$ as defined; bounded $A$; vectors $x,y,u,v$.

[F1] $T_{x,y}$ is trace class with $\operatorname{tr}(T_{x,y})=\langle x,y\rangle$, $\|T_{x,y}\|_1=\|x\|\,\|y\|$; $T_{x,y}^*=T_{y,x}$; $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$ for trace-class $S$; and $|\operatorname{tr}T|\le\|T\|_1$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F2] Trace-class operators form a Banach space in trace norm, and the trace is linear and trace-norm continuous; for bounded $B$, $\|BT\|_1\le\|B\|\,\|T\|_1$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] A bounded sesquilinear form on a Hilbert space, or equivalently a bounded linear functional, is represented by a unique bounded operator or vector with the same norm; the representing vector of $v\mapsto\overline{b(v,u)}$ gives $\langle Fv,u\rangle=b(v,u)$ ([[thm-riesz-representation-for-hilbert-space]]).

[F4] Complete positivity implies positivity of $J_B$; a density operator is positive with trace one, and $0\le T\le S$ for trace-class positive $T,S$ implies $\operatorname{tr}T\le\operatorname{tr}S$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], [[lem-nrqm-composites-finite-effects-and-instruments]]).

## Proof

1.1 [The functional and its sesquilinear form] Fix $B\in\Sigma$. The map $f_B(T):=\operatorname{tr}(J_B(T))$ is a bounded linear functional on $\mathcal S_1(H)$ with $|f_B(T)|\le\|J_B\|\,\|T\|_1$ by [F2]. Define $b_B(u,v):=f_B(T_{u,v})$ on rank-one operators. Because $T_{u,v}$ is linear in $u$ and conjugate-linear in $v$ and $f_B$ is linear, $b_B$ is sesquilinear; by [F1], $|b_B(u,v)|\le\|J_B\|\,\|u\|\,\|v\|$. [given, F1, F2, algebra]

2.1 [The effect] By [F3] there is a unique bounded $F_B$ with $b_B(u,v)=\langle F_Bu,v\rangle$, hence $\operatorname{tr}(J_B(T_{u,v}))=\langle F_Bu,v\rangle=\operatorname{tr}(T_{u,v}F_B)$ for all $u,v$; linearity and trace-norm continuity [F1, F2] extend this to every trace-class $T$: $\operatorname{tr}(J_B(T))=\operatorname{tr}(TF_B)$. Since $J_B$ is completely positive, it is positive [F4], so $b_B(u,u)=\operatorname{tr}(J_B(T_{u,u}))\ge0$, giving $F_B\ge0$; and $F_B\le I$ follows from positivity of $f_{X\setminus B}$ (the complement instrument is positive by complete positivity): $0\le b_B(u,u)\le b_X(u,u)=\operatorname{tr}(T_{u,u})=\|u\|^2$. Uniqueness of $F_B$: its pairings with all $u,v$ are fixed. This is (a). [step 1.1, F1, F2, F3, F4, algebra]

3.1 [Normalization and countable additivity] For $T=T_{u,v}$ and $B=X$ the trace-preservation clause of the instrument gives $\langle F_Xu,v\rangle=\operatorname{tr}(J_X(T_{u,v}))=\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, so $F_X=I$. For pairwise disjoint $B_n$ with union $B$, the instrument's countable additivity says $\sum_{n\le N}J_{B_n}(T)\to J_B(T)$ in trace norm; by linearity and trace-norm continuity of the functional $\operatorname{tr}(\cdot\,F_B)$-pairing [F1, F2], $\operatorname{tr}(T_{u,v}F_B)=\operatorname{tr}(J_B(T_{u,v}))=\lim_N\sum_{n\le N}\operatorname{tr}(J_{B_n}(T_{u,v}))=\sum_n\langle F_{B_n}u,v\rangle$ by step 2.1. As $u,v$ are arbitrary, this is $\langle F_Bu,v\rangle=\sum_n\langle F_{B_n}u,v\rangle$, which is (b). [step 2.1, F1, F2, algebra]

4.1 [Heisenberg dual] Fix $B$ and bounded $A$. Define $c_A(u,v):=\operatorname{tr}(J_B(T_{u,v})A)$. This is sesquilinear in $(u,v)$ with $|c_A(u,v)|\le\|J_B\|\,\|A\|\,\|u\|\,\|v\|$ by [F1, F2]; by [F3] there is a unique bounded $J_B^*(A)$ with $c_A(u,v)=\langle J_B^*(A)u,v\rangle$ and $\|J_B^*(A)\|\le\|J_B\|\,\|A\|$. Then for rank-one $T_{u,v}$, $\operatorname{tr}(J_B(T_{u,v})A)=\langle J_B^*(A)u,v\rangle=\operatorname{tr}(T_{u,v}J_B^*(A))$ by [F1]; both sides are linear and trace-norm continuous in $T$ [F2], so the identity holds for all trace-class $T$. Linearity of $A\mapsto J_B^*(A)$ and positivity for $A\ge0$ follow from the defining pairings and complete positivity of $J_B$: for $A\ge0$ and $x$, $\langle J_B^*(A)x,x\rangle=\operatorname{tr}(J_B(T_{x,x})A)\ge0$ because the positive spectral rank-one expansion of $J_B(T_{x,x})$ expresses this trace as a sum of nonnegative numbers $w_n\langle Au_n,u_n\rangle$. Finally $J_X^*(I)=I$ by $\operatorname{tr}(J_X(T)I)=\operatorname{tr}T=\operatorname{tr}(TI)$ and uniqueness. This is (c). [step 2.1, step 3.1, F1, F2, F3, algebra]

5.1 [Probabilities] For a density operator $\rho=\sum_nw_nT_{u_n,u_n}$, step 2.1 gives $p(B)=\operatorname{tr}(J_B(\rho))=\operatorname{tr}(\rho F_B)=\sum_nw_n\langle F_Bu_n,u_n\rangle$. Since $0\le F_B\le I$, each diagonal term lies in $[0,1]$ and $\sum_nw_n=1$, so $p(B)\in[0,1]$. Trace-norm additivity of $J$ and trace continuity imply countable additivity of $p$, and $p(X)=1$ by trace preservation. Positivity and normalization of $J_B(\rho)/p(B)$ hold precisely when $p(B)>0$. Whether the prescribed instrument is experimentally realized remains a separate model assumption. [step 2.1, step 3.1, F1, F2, F4, algebra] ∎
