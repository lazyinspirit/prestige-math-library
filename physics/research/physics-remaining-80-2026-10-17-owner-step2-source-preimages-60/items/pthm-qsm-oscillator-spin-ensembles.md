---
id: pthm-qsm-oscillator-spin-ensembles
kind: physics-theorem
title: "Exact quantum oscillator and spin ensembles"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-qsm-models-statistics-and-preparation
  - lem-qsm-models-diagonal-occupation-trace
  - lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma
  - thm-nrqm-oscillator-hermite-completeness
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
physical_scope: "Exact canonical calculations for the one-dimensional harmonic oscillator with its proved Hermite spectral realization and for a declared independent two-level spin Hamiltonian. The low- and high-temperature limits retain the model's zero-point and ground-degeneracy qualifications. No generic third-law claim, species magnetic moment, material prediction, or measurement is asserted."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.3–3.4, oscillator partition function and heat capacity"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 22, quantum oscillator and spin examples"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7f26f530bdda5d69c399057bd4b1bd28_MIT8_333F13_Lec22.pdf"
---

## Statement

Assume [[post-qsm-models-statistics-and-preparation]]. Let $\omega>0$, $m>0$, $\hbar>0$, $k_B>0$, and $T>0$; set $\epsilon=\hbar\omega$ in joules and $\beta=(k_BT)^{-1}$. Take the self-adjoint one-dimensional realization $H_{\rm osc}$ of $-\hbar^2(2m)^{-1}d^2/dx^2+m\omega^2x^2/2$ on $L^2(\mathbb R,dx)$ with Hermite eigenvectors $\phi_n$, eigenvalues $\epsilon(n+1/2)$, and domain $D(H_{\rm osc})=\{\sum_nc_n\phi_n:\sum_n\epsilon^2(n+1/2)^2|c_n|^2<\infty\}$, as proved in [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]].
$$Z=e^{-\beta\epsilon/2}(1-e^{-\beta\epsilon})^{-1},\quad U=\epsilon(\tfrac12+\bar n),\quad \bar n=(e^{\beta\epsilon}-1)^{-1},\quad C_V=k_B(\beta\epsilon)^2\frac{e^{\beta\epsilon}}{(e^{\beta\epsilon}-1)^2}.$$
Its entropy is $S=k_B[(1+\bar n)\log(1+\bar n)-\bar n\log\bar n]$; as $T\downarrow0$, $U\to\epsilon/2$, $S,C_V\to0$. As $\beta\epsilon\downarrow0$, $U=\beta^{-1}+O(\beta\epsilon^2)$.

For a separate two-level spin model $H_s=-h\sigma_z$ with $h\in\mathbb R$ in joules, $Z_s=2\cosh(\beta h)$, $U_s=-h\tanh(\beta h)$, $C_{V,s}=k_B(\beta h)^2\operatorname{sech}^2(\beta h)$, and $S_s\to0$ as $T\downarrow0$ when $h\ne0$, whereas $S_s=k_B\log2$ when $h=0$. These results make no generic third-law claim.

## Facts & Assumptions

**Given:** $\beta>0$ in J$^{-1}$, $\epsilon=\hbar\omega>0$ in J, and the adopted state assignment.

[A1] [[post-qsm-models-statistics-and-preparation]]: canonical Gibbs weights are adopted for the declared Hamiltonian when their trace is finite.

[F1] [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], Statement: the oscillator has the complete Hermite eigenbasis, eigenvalues $\epsilon(n+1/2)$, and exact squared-weight self-adjoint domain.

[F2] [[lem-qsm-models-diagonal-occupation-trace]], Statement: a positive summable diagonal Boltzmann trace normalizes the occupation weights; its moment identities apply when the relevant sums converge.

## Proof



1.1 The oscillator eigenvalues from [F1] give levels $\epsilon(n+1/2)$ for the declared Hamiltonian. Since $x=e^{-\beta\epsilon}\in(0,1)$, summing the geometric series yields $Z=\sum_{n\ge0}e^{-\beta\epsilon(n+1/2)}=e^{-\beta\epsilon/2}/(1-x)$, finite and positive; the domain and spectral realization are those of [F1], so this sum is the trace of the declared Gibbs multiplier. [given, F1, A1, algebra]

2.1 The normalized probabilities are $(1-x)x^n$. Differentiating the convergent geometric series, or multiplying its absolutely convergent power series by $1-x$, gives $\mathbb E n=x/(1-x)$ and $\operatorname{Var}n=x/(1-x)^2$. Therefore $U=\epsilon(1/2+\bar n)$ and differentiating with respect to $T$ using $d\beta/dT=-1/(k_BT^2)$ gives the displayed $C_V$. [step 1.1, F2, algebra]

3.1 Since $-\log p_n=-\log(1-x)-n\log x$, $S=-k_B\sum_np_n\log p_n=k_B[-\log(1-x)-\bar n\log x]$. Substituting $x=\bar n/(1+\bar n)$ gives the stated entropy. As $\beta\epsilon\to\infty$, $x\to0$, so $U\to\epsilon/2$, $C_V\to0$, and both $-\log(1-x)$ and $\bar n|\log x|$ tend to zero; hence $S\to0$. [step 2.1, algebra]

3.2 Set $y=\beta\epsilon$. Taylor's formula for $e^y$ at zero gives $e^y-1=y+y^2/2+O(y^3)$, so $\bar n=1/y-1/2+O(y)$ as $y\downarrow0$. Multiplying by $\epsilon$ in $U=\epsilon(1/2+\bar n)$ cancels the constant halves and yields $U=\beta^{-1}+O(\beta\epsilon^2)$. [step 2.1, algebra]

4.1 The spin eigenvalues are $-h$ and $h$, so its normalized Gibbs probabilities are $e^{\beta h}/(2\cosh\beta h)$ and $e^{-\beta h}/(2\cosh\beta h)$. Their sum gives $Z_s$; their energy mean is $-h\tanh(\beta h)$ and variance $h^2\operatorname{sech}^2(\beta h)$. Multiplying the variance by $1/(k_BT^2)=k_B\beta^2$ gives the displayed heat capacity. If $h\ne0$, one probability tends one and the other zero, so the two-state entropy tends zero; if $h=0$, both probabilities equal $1/2$ at all temperatures and $S_s=k_B\log2$. [given, A1, algebra] ∎
