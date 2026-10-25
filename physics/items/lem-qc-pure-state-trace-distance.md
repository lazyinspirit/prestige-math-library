---
id: lem-qc-pure-state-trace-distance
kind: lemma
title: "Pure state trace distance"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-trace-distance", "def-qc-dirac-notation-conversion", "thm-qc-hermitian-trace-norm-positive-negative-parts", "def-real-and-complex-inner-product-space", "thm-cauchy-schwarz-in-an-inner-product-space"]
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
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.1.1–3.1.2, pure-state trace-norm calculation."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.2, PDF pp.39–41; pure-state trace-norm calculation (2.155)–(2.158)"
---

## Statement

For unit vectors $u,v$ in a finite-dimensional complex Hilbert space, let $P_u=|u\rangle\langle u|$ and $P_v=|v\rangle\langle v|$. Then
$$D(P_u,P_v)=\sqrt{1-|\langle u|v\rangle_D|^2},$$
where $\langle\cdot|\cdot\rangle_D$ is the Dirac pairing converted from the root library's first-argument-linear inner product.

## Facts & Assumptions

**Given:** Unit vectors $u,v$ in a finite-dimensional complex Hilbert space.

[F1] The root inner product is linear in its first argument and conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[F2] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$, with equality for nonzero vectors exactly when they are linearly dependent ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[L1] Dirac notation is converted by $\langle u|v\rangle_D=\langle v,u\rangle_{\rm root}$ and $|u\rangle\langle u|x=\langle x,u\rangle_{\rm root}u$ ([[def-qc-dirac-notation-conversion]]). The current QC01 definition body is present and supplies the stated convention.

[F3] $D(P_u,P_v)=\tfrac12\|P_u-P_v\|_1$ ([[def-qc-trace-distance]]).

[L2] For Hermitian trace-zero $H$, $\|H\|_1=2\operatorname{tr}(H_+)$ ([[thm-qc-hermitian-trace-norm-positive-negative-parts]]). The current QC01 theorem body is present as a draft; it proves the positive/negative-parts identity used here.

## Proof


1.1 Put $c=|\langle u|v\rangle_D|\in[0,1]$ by [F2] and the unit norms. If $c=1$, equality in [F2] makes $v$ a unit scalar multiple of $u$, so $P_u=P_v$ and both sides are zero. Suppose $c<1$. Multiplying $v$ by a unit scalar does not change $P_v$ and lets us assume $\langle v,u\rangle_{\rm root}=c$: if $a=\langle v,u\rangle_{\rm root}\ne0$, multiply $v$ by $\overline a/|a|$. Define $w=(v-cu)/\sqrt{1-c^2}$. Direct expansion using [F1] gives $\langle w,u\rangle_{\rm root}=0$ and $\|w\|=1$, so $(u,w)$ is orthonormal and $v=cu+\sqrt{1-c^2}w$. [given, F1, F2, L1, choose, algebra]

2.1 In the orthonormal basis $(u,w)$ of their span, $P_u-P_v$ has matrix $\begin{pmatrix}1-c^2&-c\sqrt{1-c^2}\\-c\sqrt{1-c^2}&-(1-c^2)\end{pmatrix}$. Its trace is zero and determinant is $-(1-c^2)$, so its two eigenvalues are $\sqrt{1-c^2}$ and $-\sqrt{1-c^2}$; it is zero on the orthogonal complement. By [L2], $\|P_u-P_v\|_1=2\sqrt{1-c^2}$. [step 1.1, L2, algebra]

3.1 Applying [F3] to step 2.1 gives $D(P_u,P_v)=\sqrt{1-c^2}$; together with the $c=1$ case in step 1.1 this proves the formula for every pair of unit vectors. [step 1.1, step 2.1, F3] ∎

