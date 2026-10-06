---
id: ex-sine-modes-decay-under-dirichlet-heat-flow
kind: example
title: Sine modes decay under Dirichlet heat flow
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-chain-rule
  - thm-derivative-of-exponential
  - def-countable-choice
  - lem-ltwo-normalisation-of-sine-modes-on-the-interval
  - def-heat-equation-heat-operator-and-cauchy-problem
  - def-laplacian-of-a-c2-function
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§3.1, printed pp. 50–54 (the sine modes $e^{-(\pi n)^2t}\sin(\pi nx)$ for the thin rod and their decay)'
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 6, §6.1, printed pp. 177–178 (Dirichlet heat flow on a bounded interval)"
---

## Example

Assume Countable Choice. For every integer $k\ge1$ and every $T>0$, the function
$$u_k(x,t):=e^{-k^2t}\sin(kx)$$
is a classical solution of the heat equation $u_t=\Delta u$ on
$(0,\pi)\times(0,T]$ with Dirichlet data $u_k(0,t)=u_k(\pi,t)=0$ and initial
data $u_k(x,0)=\sin(kx)$; it is smooth up to $t=0$ in this one-dimensional
setting. Its $L^2(0,\pi)$ norm decays at the rate of the $k$-th Dirichlet
eigenvalue,
$$\|u_k(\cdot,t)\|_2=e^{-k^2t}\sqrt{\pi/2}\qquad(t\ge0),$$
so higher modes decay faster, and the nodal set of $u_k(\cdot,t)$ does not
depend on $t$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $k\ge1$, $T>0$, and the function $u_k(x,t)=e^{-k^2t}\sin(kx)$ on $[0,\pi]\times[0,T]$.

[A1] Countable Choice is the ambient hypothesis, inherited through the $L^2$ dictionary in step 3.1 ([[def-countable-choice]]).

[F1] The heat operator is $\partial_t-\Delta$, with $\Delta=\partial_x^2$ in one space dimension ([[def-heat-equation-heat-operator-and-cauchy-problem]], [[def-laplacian-of-a-c2-function]]).

[F2] $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]), hence $\partial_x^2\sin(kx)=-k^2\sin(kx)$, and $\sin0=\sin(k\pi)=0$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]); the exponential factor has time derivative $-k^2e^{-k^2t}$ by [[thm-derivative-of-exponential]] and [[thm-chain-rule]].

[F3] The $L^2(0,\pi)$ inner product is $\langle f,g\rangle=\int_0^\pi fg$ on the quotient space of [[def-l-p-space-as-a-quotient-by-null-functions]] ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and $\int_0^\pi\sin(kx)^2dx=\pi/2$ ([[lem-ltwo-normalisation-of-sine-modes-on-the-interval]]).

## Verification

**Given:** Countable Choice, $k\ge1$, $T>0$, and $u_k(x,t)=e^{-k^2t}\sin(kx)$.

1.1 The function $u_k$ is smooth on the closed rectangle (a product of a smooth exponential and a smooth sine), and [F2] gives $\partial_tu_k=-k^2e^{-k^2t}\sin(kx)=-k^2u_k$ together with $\partial_x^2u_k=-k^2e^{-k^2t}\sin(kx)=-k^2u_k$; hence $u_{k,t}=\partial_x^2u_k=\Delta u_k$ on the open rectangle by [F1]. [F1, F2, given]

1.2 The boundary values are $u_k(0,t)=e^{-k^2t}\sin0=0$ and $u_k(\pi,t)=e^{-k^2t}\sin(k\pi)=0$ for every $t$, while $u_k(x,0)=e^0\sin(kx)=\sin(kx)$; the nodal set at time $t$ is $\{x\in(0,\pi):\sin(kx)=0\}=\{m\pi/k:1\le m\le k-1\}$, independent of $t$ because the positive factor $e^{-k^2t}$ never vanishes. [F2, given]

2.1 By [F3] the squared norm of step 1.1's function is $\|u_k(\cdot,t)\|_2^2=e^{-2k^2t}\int_0^\pi\sin(kx)^2dx=e^{-2k^2t}\pi/2$, so $\|u_k(\cdot,t)\|_2=e^{-k^2t}\sqrt{\pi/2}$ for every $t\ge0$. [A1, F3, given]

3.1 Since $k\mapsto e^{-k^2t}$ is strictly decreasing in $k\ge1$ for every fixed $t>0$, higher modes decay faster at each positive time, with the ratio $e^{-(k^2-l^2)t}$ between the $k$-th and $l$-th modes for $k>l$. [step 2.1, given]

4.1 Steps 1.1, 1.2, 2.1 and 3.1 verify that $u_k$ is a classical solution smooth up to $t=0$ with Dirichlet data, decay rate $e^{-k^2t}\sqrt{\pi/2}$, faster decay for higher modes, and a time-independent nodal set. [step 1.1, step 1.2, step 2.1, step 3.1, given] ∎ 