---
id: cex-backward-heat-amplifies-small-high-frequency-errors
kind: counterexample
title: Backward heat amplifies small high-frequency errors
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - thm-backward-heat-solution-map-is-unbounded
  - lem-ltwo-normalisation-of-sine-modes-on-the-interval
  - thm-exponential-beats-every-polynomial
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-sine-and-cosine-derivatives
  - ex-sine-modes-decay-under-dirichlet-heat-flow
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: 'Chapter 5, §5.1.3, printed p. 132, Example 5.6 ($f_n=e^{-n}\sin(nx)$ with solutions $e^{-n}\sin(nx)e^{n^2t}$)'
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2, Remark 3.2.3(c), printed pp. 111–112 (ill-posedness of the IVP in the direction of negative time)"
---

## Statement refuted

Assume Countable Choice. The claim refuted is that the backward heat problem on $(0,\pi)$ depends
continuously on its terminal data in the $L^2(0,\pi)$ norm: arbitrarily small
terminal perturbations do not, in general, produce small perturbations of the
initial state.

## Facts & Assumptions

**Given:** Countable Choice and $T>0$ and, for every integer $k\ge1$, the $k$-th decaying sine mode $\tilde u_k(x,t)=e^{-k^2t}\sin(kx)$ on $(0,\pi)$.

[F1] Each $\tilde u_k$ is a classical solution of $u_t=u_{xx}$ on $(0,\pi)\times(0,T]$ with zero Dirichlet data, smooth up to $t=0$, with amplification factor $e^{k^2T}$ between terminal and initial data ([[ex-sine-modes-decay-under-dirichlet-heat-flow]], [[thm-backward-heat-solution-map-is-unbounded]]).

[F2] The $L^2(0,\pi)$ inner product is $\langle f,g\rangle=\int_0^\pi fg$ on the quotient space of [[def-l-p-space-as-a-quotient-by-null-functions]] ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and $\|\sin(k\cdot)\|_2=\sqrt{\pi/2}$ ([[lem-ltwo-normalisation-of-sine-modes-on-the-interval]]); the derivative identities for sine are those of [[thm-sine-and-cosine-derivatives]].

[F3] $e^{-k^2T}\to0$ faster than every polynomial as $k\to\infty$ ([[thm-exponential-beats-every-polynomial]]).

## Counterexample

**Given:** Countable Choice and $T>0$ and the modes $\tilde u_k(x,t)=e^{-k^2t}\sin(kx)$.

1.1 For every $k$ the function $\tilde u_k$ is a classical solution of $u_t=u_{xx}$ on $(0,\pi)\times(0,T]$ with $\tilde u_k(0,t)=\tilde u_k(\pi,t)=0$, terminal data $g_k(x):=e^{-k^2T}\sin(kx)$ and initial state $\tilde u_k(x,0)=\sin(kx)$. [F1, F2, given]

2.1 By [F2] the terminal data have norm $\|g_k\|_2=e^{-k^2T}\|\sin(k\cdot)\|_2=\sqrt{\pi/2}\,e^{-k^2T}$, while the initial states satisfy $\|\tilde u_k(\cdot,0)\|_2=\|\sin(k\cdot)\|_2=\sqrt{\pi/2}$ for every $k$; moreover $\tilde u_k(\cdot,0)=e^{k^2T}g_k$, so the terminal-to-initial amplification factor of the $k$-th mode is exactly $e^{k^2T}$. [step 1.1, F1, F2, given]

3.1 By [F3] the terminal norms $\|g_k\|_2=\sqrt{\pi/2}e^{-k^2T}$ tend to $0$ while the initial norms remain the fixed constant $\sqrt{\pi/2}$, so terminal perturbations of arbitrarily small $L^2$ norm come from solutions whose initial states have order-one norm; this refutes continuous dependence on the terminal data, and the amplification is a failure of stability rather than of existence (the solution pair is explicit for every $k$). [step 2.1, F3, given] ∎ 