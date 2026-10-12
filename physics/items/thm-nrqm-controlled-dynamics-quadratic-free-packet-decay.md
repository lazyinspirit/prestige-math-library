---
id: thm-nrqm-controlled-dynamics-quadratic-free-packet-decay
aliases:
- nrqm-controlled-dynamics-quadratic-free-packet-decay
kind: theorem
domain: mathematics
title: Quadratic free-packet decay
status: draft
origin: pipeline
dependency_level: 2
deps:
- thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel
- thm-plancherel
- def-fourier-transform-on-l-one-of-rn
- def-schwartz-space-and-its-seminorms
- def-hilbert-space
- def-countable-choice
dependency_roles:
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Evolution of Wave Packets pp. 29-32 (spreading and decay of free
      packets)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: 'E. M. Stein, Harmonic Analysis: Real-Variable Methods, Orthogonality and
      Oscillatory Integrals, Chapter VIII (stationary phase and decay of oscillatory
      integrals; standard monograph treatment)'
    url: https://dlmf.nist.gov/2
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$a\in C_c^\infty(\mathbb R^3;\mathbb C)$ and put, for $t\in\mathbb R$ and
$x\in\mathbb R^3$,
$$\psi_t(x):=\int_{\mathbb R^3}e^{i(k\cdot x-t|k|^2)}a(k)\,dk$$
(the free evolution of the momentum-space amplitude $a$). Let
$K\subseteq\mathbb R^3$ be compact with $v/2\in\operatorname{int}\operatorname{supp}a$
for every $v\in K$. Then there is a constant $C_K<\infty$ such that
$$\sup_{v\in K}|\psi_t(tv)|\le C_K|t|^{-3/2}\qquad(|t|\ge1).$$
Moreover on every compact set $K'$ with
$K'\cap\{2k:k\in\operatorname{supp}a\}=\varnothing$ and for every integer $N$
there is $C_{K',N}$ with
$\sup_{v\in K'}|\psi_t(tv)|\le C_{K',N}|t|^{-N}$ for $|t|\ge1$.

These are conditional estimates for the specified free model; no statement about
beams, detectors or measured intensities is made.

## Facts & Assumptions

**Given:** the amplitude $a\in C_c^\infty(\mathbb R^3)$, the compact sets $K,K'$ as in the Statement, and $|t|\ge1$.

[F1] The free Fourier multiplier is $e^{-4\pi^2it|\xi|^2}$ in the $\mathcal F_2$ convention, and its kernel on Schwartz inputs $g$ is $(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)dy$, bounded in modulus by $(4\pi|t|)^{-3/2}\|g\|_1$, for either sign of $t$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]], [[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F2] Compactly supported smooth amplitudes permit arbitrary integrations by parts with no boundary term. The arguments below prove the needed Schwartz decay and the uniform nonstationary estimates directly; no generic stationary-phase supplier is invoked ([[def-schwartz-space-and-its-seminorms]]).

## Proof

1.1 [Exact Fourier normalization and initial packet] Put $g(x)=\int e^{ik\cdot x}a(k)dk$. Differentiation in $x$ multiplies the compact smooth integrand by powers of $ik$, and integration by parts in $k$ turns multiplication by powers of $x$ into derivatives of that compact smooth integrand. Hence every $x^\alpha\partial_x^\beta g$ is bounded, so $g$ is Schwartz and in $L^1\cap L^2$. More explicitly $(1+|x|^2)^2g(x)=\int e^{ik\cdot x}(1-\Delta_k)^2a(k)dk$, so $\|g\|_1\le\|(1-\Delta_k)^2a\|_1\int(1+|x|^2)^{-2}dx<\infty$. Substituting $k=2\pi\xi$ into the defining integral and Fourier inversion gives $\mathcal F_2g(\xi)=(2\pi)^3a(2\pi\xi)$. Thus the inverse Fourier transform of $e^{-4\pi^2it|\xi|^2}\mathcal F_2g$ is exactly $\psi_t$, with no additional $2\pi$ in its phase. [F1, F2, algebra]

1.2 [Uniform reciprocal-gradient coefficients] Suppose $a\ne0$ and $K'\ne\varnothing$; the zero amplitude or empty velocity set gives the assertion immediately. Since the two compact sets $K'$ and $2\operatorname{supp}a$ are disjoint, $d:=\inf\{|v-2k|:v\in K',k\in\operatorname{supp}a\}>0$. Choose a fixed bounded open neighborhood $O$ of $\operatorname{supp}a$ small enough that $|v-2k|\ge d/2$ for $v\in K'$ and $k\in O$. Let $\phi_v(k)=k\cdot v-|k|^2$, $c_v(k)=(v-2k)/|v-2k|^2$, and $B_vf=-\operatorname{div}_k(c_vf)$ on $O$. All $k$ derivatives of $c_v$ are uniformly bounded on $K'\times O$: its numerator is affine in $k$, its denominator is bounded away from zero, and $v,k$ range over bounded sets. Iterated product differentiation therefore gives, for every nonnegative integer $N$, $\|B_v^Na\|_1\le C_{K',N}<\infty$, uniformly in $v\in K'$. More explicitly $B_v^Na$ is a finite sum of derivatives $\partial^\alpha a$, $|\alpha|\le N$, multiplied by finite products of derivatives of $c_v$ of order at most $N$, with uniform coefficient bounds. Its support remains inside $\operatorname{supp}a$, so it has no boundary contribution on $O$. [F2, algebra]

2.1 [Global Gaussian estimate for both time signs] By [F1] and step 1.1, $\psi_t(x)=(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)dy$ almost everywhere. Both this representative and the compact-momentum defining integral are continuous in $x$ by dominated convergence, so equality holds everywhere. Taking absolute values gives $\sup_x|\psi_t(x)|\le(4\pi)^{-3/2}\|g\|_1|t|^{-3/2}$, for $t>0$ and $t<0$. In particular the first assertion holds with $C_K=(4\pi)^{-3/2}\|g\|_1$. This argument proves exactly the promised estimate on the stated $K$; it needs no parameter-dependent stationary-phase constants. [step 1.1, F1, algebra]

3.1 [All-order nonstationary integration by parts] The operator $L_v=c_v\cdot\nabla_k$ satisfies $L_ve^{it\phi_v}=it e^{it\phi_v}$ for every real nonzero $t$. Repeated integration by parts on the compact amplitude, using the formal adjoint $B_v$, gives $\psi_t(tv)=(it)^{-N}\int_Oe^{it\phi_v(k)}B_v^Na(k)dk$ for every $N\ge0$. Step 1.2 yields $\sup_{v\in K'}|\psi_t(tv)|\le C_{K',N}|t|^{-N}$, independently of the sign of $t$. If the Statement's “every integer $N$” includes $N<0$, the elementary bound $|\psi_t(tv)|\le\|a\|_1\le\|a\|_1|t|^{-N}$ for $|t|\ge1$ supplies those cases as well. Combining this with step 2.1 proves both unchanged public estimates. [step 2.1, step 1.2, F2, algebra] ∎
