---
id: thm-nrqm-controlled-dynamics-quadratic-free-packet-decay
aliases: [nrqm-controlled-dynamics-quadratic-free-packet-decay]
kind: theorem
domain: mathematics
title: "Quadratic free-packet decay"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-plancherel, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase: mathematical-premise
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
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Evolution of Wave Packets pp. 29-32 (spreading and decay of free packets)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "E. M. Stein, Harmonic Analysis: Real-Variable Methods, Orthogonality and Oscillatory Integrals, Chapter VIII (stationary phase and decay of oscillatory integrals; standard monograph treatment)"
      url: "https://dlmf.nist.gov/2"
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

**Given:** the amplitude $a\in C_c^\infty(\mathbb R^3)$, the compact set $K$ with $v/2\in\operatorname{int}\operatorname{supp}a$ for $v\in K$, and $|t|\ge1$.

[F1] Stationary phase with a compactly supported amplitude: for $a\in C_c^\infty(\mathbb R^d)$ and $\varphi\in C^\infty(\mathbb R^d;\mathbb R)$, the oscillatory integral $I(\lambda)=\int e^{2\pi i\lambda\varphi(x)}a(x)dx$ satisfies: (i) $|I(\lambda)|\le C_N\lambda^{-N}$ for all $N$ if $\nabla\varphi\ne0$ near $\operatorname{supp}a$; (ii) $|I(\lambda)|\le C\lambda^{-d/2}$ if $\varphi$ has exactly one stationary point $x_0\in\operatorname{int}\operatorname{supp}a$ with invertible Hessian, with constants controlled by the data listed there ([[lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase]]).

[F2] Free kernel representation and $L^1\to L^\infty$ bound ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]], [[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

## Proof

1.1 [Stationary points on the ray] For $v\in K$ and $|t|\ge1$ write $\psi_t(tv)=\int e^{i(k\cdot tv-t|k|^2)}a(k)dk=\int e^{2\pi i\lambda\varphi_v(k)}a(k)dk$ with $\lambda:=|t|/(2\pi)$ and $\varphi_v(k):=\pm(k\cdot v-|k|^2)/(2\pi)$ (sign $+$ for $t>0$, sign $-$ for $t<0$). Then $\nabla\varphi_v(k)=\pm(v-2k)/(2\pi)$ vanishes exactly at $k=v/2$, which lies in the interior of $\operatorname{supp}a$ by hypothesis, and $D^2\varphi_v=-I/\pi$ is invertible with $|\det D^2\varphi_v|=\pi^{-3}$; on $\operatorname{supp}a$ away from a fixed small ball about $v/2$ the gradient has a positive lower bound, uniformly for $v\in K$ by compactness. By [F1] (ii), $|\psi_t(tv)|\le C_K|t|^{-3/2}$ with constants uniform on $K$. [F1, algebra]

2.1 [The nonstationary region] If $v\in K'$ with $K'\cap\{2k:k\in\operatorname{supp}a\}=\varnothing$, then $v-2k\ne0$ on $\operatorname{supp}a$, and by compactness $|\nabla\varphi_v|\ge c>0$ there; [F1] (i) with every $N$ gives $|\psi_t(tv)|\le C_{K',N}|t|^{-N}$ for $|t|\ge1$, uniformly on $K'$. This proves the second assertion, and the first is step 1.1. [step 1.1, F1, F2, algebra] ∎
