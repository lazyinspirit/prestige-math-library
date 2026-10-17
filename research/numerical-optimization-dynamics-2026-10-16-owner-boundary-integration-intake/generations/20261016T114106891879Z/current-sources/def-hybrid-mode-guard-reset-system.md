---
id: def-hybrid-mode-guard-reset-system
kind: definition
title: "Smooth hybrid ODE modes, guards, resets, and deterministic event priority"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
    - title: "Nathan J. Kong, J. Joe Payne, James Zhu, and Aaron M. Johnson, Saltation Matrices: The Essential Tool for Linearizing Hybrid Dynamical Systems"
      url: "https://arxiv.org/pdf/2306.06862"
---

## Definition

A **smooth hybrid ODE system** on a finite horizon $[0,T]$ consists of a finite mode set $M$, an open state-time domain $D_m\subseteq\mathbb R\times\mathbb R^d$ and a $C^1$ vector field $f_m:D_m\to\mathbb R^d$ for each $m\in M$, a finite set of directed transitions $(m,n)$, and for each transition a $C^1$ scalar guard $g_{mn}$, a declared crossing orientation $\sigma_{mn}\in\{-1,+1\}$, and a $C^1$ reset map $R_{mn}$ defined on a neighborhood of the guard points and taking values in the next mode's state domain. In mode $m$, a trajectory is a solution of the first-order initial-value problem $y'=f_m(t,y)$ in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. It follows that mode only until the selected event time.

An **event time** for transition $(m,n)$ is a time $\tau$ at which $g_{mn}(\tau,y(\tau))=0$ and the guard crosses in its declared direction, meaning $\sigma_{mn}\frac{d}{dt}g_{mn}(t,y(t))|_{t=\tau}>0$. It is **transverse** with margin $\nu>0$ on a bracket when $\sigma_{mn}\frac{d}{dt}g_{mn}(t,y(t))\ge\nu$ throughout that bracket. At an event, the state changes from $y(\tau^-)$ to $R_{mn}(\tau,y(\tau^-))$ and the mode changes from $m$ to $n$. A **deterministic event-priority rule** is a fixed total order on the finite outgoing transition set of each mode; if several enabled guards vanish at exactly the same first time, the least transition in that order is selected.

A hybrid trajectory has a **finite separated event list** on $[0,T]$ when it has finitely many event times $0<\tau_1<\cdots<\tau_N<T$ and some $\delta>0$ with $\tau_{j+1}-\tau_j\ge\delta$ for each adjacent pair. The definition does not assert that a solution exists, that an event is detected, or that the event list is finite. Those are separate hypotheses or conclusions.
