---
id: pthm-csm-ising-ring-correlation
kind: physics-theorem
title: "Finite periodic Ising-ring correlations and exact decay"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - research-thermo-M18-1D-Ising-transfer
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  research-thermo-M18-1D-Ising-transfer: mathematical-premise
physical_scope: "Finite periodic one-dimensional nearest-neighbor Ising ring with N>=2, exactly N indexed bonds, J>=0, zero field, and finite beta>0; no general long-range or higher-dimensional claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §5.3.1, the one-dimensional Ising chain"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, IV.G (Fall 2013), finite spin partition examples"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: pass
---

## Statement

Let $N\ge2$, let $\Omega_N=\{-1,1\}^N$ with cyclic indexing $s_{N+1}=s_1$, and count exactly the $N$ indexed periodic bonds (so $N=2$ has two bonds). For coupling $J\ge0$ in joules, zero field, and $\beta>0$ in J$^{-1}$, adopt the finite canonical law
$$\mathbb P_N(s)=Z_N^{-1}\exp\!\left(\beta J\sum_{i=1}^Ns_is_{i+1}\right).$$
Set $t=\tanh(\beta J)\in[0,1)$. For $1\le r\le N-1$,
$$\mathbb E_N[s_i]=0,\qquad \mathbb E_N[s_i s_{i+r}]=\frac{t^r+t^{N-r}}{1+t^N}.$$
For fixed $r$ and $N\to\infty$, the correlation tends to $t^r$, with absolute error at most $t^{N-r}+t^{N+r}$. If $J>0$, the limiting correlation length in lattice spacings is $\xi=-1/\log t$. The zero-field susceptibility per spin, defined by $\chi_N:=N^{-1}\partial_h\mathbb E_{N,h}[\sum_i s_i]|_{h=0}$ for the field-coupled law with energy $-\!J\sum_i s_is_{i+1}-h\sum_i s_i$, has limit
$$\chi_\infty=\beta\frac{1+t}{1-t}.$$
The limiting free energy per spin is $-\beta^{-1}\log(2\cosh(\beta J))$, analytic at every finite positive temperature. No statement is made for arbitrary one-dimensional interactions.

## Facts & Assumptions

**Given:** The finite spin space $\Omega_N$, the stated bond convention, $N\ge2$, $J\ge0$, and finite $\beta>0$.

[F1] [[post-csm-examples-ensemble-preparations]]: each finite model uses its explicitly adopted canonical probability on the stated reference/counting space; the preparation is a model assumption.

[L1] Planned mathematical supplier research-thermo-M18-1D-Ising-transfer at research/first-principles-2026-10-03/thermodynamics/scaffold/completed-developments.md#M18 states for the periodic nearest-neighbor Ising ring with finite real $J,h$ and $\beta>0$ that $T_{s,t}=\exp(\beta Jst+\beta h(s+t)/2)$, $Z_N=\operatorname{tr}(T^N)$, its eigenvalues are $\lambda_\pm=e^{\beta J}\cosh(\beta h)\pm\sqrt{e^{2\beta J}\sinh^2(\beta h)+e^{-2\beta J}}$, and $|\lambda_-|<\lambda_+$. Its complete local research proof was read; the production item carrier is absent, so this supplier use remains conditional.

[A1] For the response clause, the field-coupled finite law is $\mathbb P_{N,h}(s)\propto\exp(\beta J\sum_i s_is_{i+1}+\beta h\sum_i s_i)$ for real $h$; this is a finite model family, not an empirical magnetic law.

## Proof
1.1 In the zero-field case the transfer matrix in [L1] is $T_{s,t}=e^{Kst}$ with $K=\beta J$, so $T=\begin{pmatrix}e^K&e^{-K}\\e^{-K}&e^K\end{pmatrix}$. Direct multiplication gives orthonormal eigenvectors $u_+=(1,1)/\sqrt2$, $u_-=(1,-1)/\sqrt2$ with eigenvalues $\lambda_+=2\cosh K$ and $\lambda_-=2\sinh K$. Hence $Z_N=\operatorname{tr}(T^N)=\lambda_+^N+\lambda_-^N=\lambda_+^N(1+t^N)$, where $t=\lambda_-/\lambda_+=\tanh K$. [given, L1, algebra]



2.1 By the finite preparation [F1], the partition sum is the normalization for the adopted law. Put $D_0=\operatorname{diag}(1,-1)$; then $D_0u_+=u_-$ and $D_0u_-=u_+$. Expanding the finite canonical sum over the $N$ cyclic indices with $s_i s_{i+r}$ inserted gives numerator $\operatorname{tr}(D_0T^rD_0T^{N-r})$. Evaluating this trace in the eigenbasis yields $\lambda_-^r\lambda_+^{N-r}+\lambda_+^r\lambda_-^{N-r}$. Dividing by $Z_N$ from step 1.1 gives the stated correlation formula. [A1, F1, L1, step 1.1, algebra]



3.1 The map $s\mapsto-s$ preserves every bond product and reverses $\sum_i s_i$, so at zero field $\mathbb E_N[s_i]=0$. For fixed $r$, subtracting $t^r$ from the formula of step 2.1 gives $(t^{N-r}-t^{N+r})/(1+t^N)$; its absolute value is at most $t^{N-r}+t^{N+r}$ because $0\le t<1$. Thus the fixed-distance limit is $t^r$. When $0<t<1$, writing $t^r=e^{-r/\xi}$ gives $\xi=-1/\log t$; for $J=0$, $t=0$ and all nonzero-separation correlations vanish. [step 2.1, algebra]



3.2 For the field-coupled finite law [A1], differentiating its finite numerator and denominator sums gives $\partial_h\mathbb E_{N,h}[M]=\beta(\mathbb E_{N,h}[M^2]-\mathbb E_{N,h}[M]^2)$, where $M=\sum_i s_i$. At $h=0$, spin-flip symmetry gives $\mathbb E M=0$ and translation invariance gives $$\frac1N\mathbb E[M^2]=1+\sum_{r=1}^{N-1}\mathbb E[s_1s_{1+r}]=1+\frac{2\sum_{r=1}^{N-1}t^r}{1+t^N}.$$ The finite geometric sum tends to $2t/(1-t)$ as $N\to\infty$, so $\chi_N\to\beta(1+t)/(1-t)$. This also gives $\chi_N=\beta$ when $J=0$. [A1, step 2.1, algebra]



4.1 From step 1.1, $N^{-1}\log Z_N=\log(2\cosh(\beta J))+N^{-1}\log(1+t^N)$. Since $1\le1+t^N\le2$, the second term tends to zero; the limit is analytic for every finite $\beta>0$ because $\cosh(\beta J)>0$. The correlation length diverges only in the excluded zero-temperature limit $\beta J\to\infty$. [step 1.1, step 3.1, algebra] ∎

## Remarks

The local M18 research proof is a completed mathematical argument but lacks a production item carrier. This theorem therefore keeps the exact transfer-matrix conclusion conditional and escalated until that formal supplier exists. It does not use the separate planned Gaussian-tail result M17.

