---
id: alg-synchronous-waveform-relaxation-finite-window
title: "Synchronous Picard waveform relaxation on a finite window"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-vector-valued-functions-limits-and-continuity
  - def-vector-valued-derivative-and-integral
justified_by:
  - thm-waveform-relaxation-contraction-and-error-bound
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ekachai Lelarasmee, The Waveform Relaxation Method for Time-Domain Analysis of Large Scale Integrated Circuits: Theory and Applications, UCB/ERL M82/40 (1982)"
      url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/1982/Archive/ERL-82-40.pdf"
---

## Definition

Let $r,s\ge1$, $d=r+s$, $D\subseteq\mathbb R^d$ be open, $F=(f,g):D\to\mathbb R^d$ be continuous, and $u_0=(x_0,z_0)\in D$. Choose a window length $\Delta>0$, radius $R\ge0$, bounds $M,K\ge0$, tolerance $\varepsilon\ge0$, and integer sweep budget $B\ge0$. The admissibility conditions are that the closed Euclidean ball $\overline B_R(u_0)$ lies in $D$, $\|F(u)\|_2\le M$ on that ball, $\|F(u)-F(v)\|_2\le K\|u-v\|_2$ there, $M\Delta\le R$, and $q:=K\Delta<1$. If an input condition fails, return `not-admissible`.

Let $C_\Delta=C([0,\Delta],\mathbb R^d)$ with $d_\infty(U,V):=\sup_{0\le t\le\Delta}\|U(t)-V(t)\|_2$, and let $X_R:=\{U\in C_\Delta: U(0)=u_0,\ \sup_t\|U(t)-u_0\|_2\le R\}$. The synchronous Picard waveform map is
$$\Phi(U)(t):=u_0+\int_0^t F(U(s))\,ds,$$
where the vector integral is componentwise. This updates both state waveforms from the same preceding pair.

**Procedure.** If $B=0$, return the constant waveform $U^0(t):=u_0$ with status `budget-exhausted` and no error certificate. Otherwise set $U^0(t):=u_0$ and, for $k=1,\ldots,B$, compute $U^k:=\Phi(U^{k-1})$. After the first sweep set $\delta_0:=d_\infty(U^1,U^0)$. After sweep $k$, compute $E_k:=q^k\delta_0/(1-q)$. If $E_k\le\varepsilon$, return $(U^k,\texttt{tolerance-certified},E_k,k)$; if the budget is exhausted first, return $(U^B,\texttt{budget-exhausted},E_B,B)$. Integrals and waveform updates are exact mathematical operations here; quadrature and inexact subsolves require separate error terms.
