---
id: def-qsm-dt-monitored-chain
kind: definition
title: Specified energy-jump instrument realizes a finite chain
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 7
deps:
  - thm-qsm-dt-gibbs-jump
  - def-qsm-dt-gksl-definition
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - def-axiom-of-choice
dependency_roles:
  thm-qsm-dt-gibbs-jump: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  thm-csm-dk-nonexplosive-ctmc-and-gap: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §IV.1 “Quantum jumps” and §IV.3 “Simulation of single trajectories”, equations 120–133
      url: https://arxiv.org/pdf/quant-ph/9702007
    - title: David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs, Chapter 2 §2.1.2
      url: https://www.stat.berkeley.edu/~aldous/RWG/book.pdf
---

## Definition

Use the finite energy basis, energies $E_a$, rates $w_{ab}$, Hamiltonian $H_{\rm s}$, and jump matrices $L_{ab}=\sqrt{w_{ab}}|b\rangle\langle a|$ of [[thm-qsm-dt-gibbs-jump]]. Define $R:=\sum_{a\ne b}L_{ab}^*L_{ab}=\sum_a r_a|a\rangle\langle a|$ and the no-click matrix $K:=-iH_{\rm s}/\hbar-R/2$. The **specified energy-resolved instrument** has the following outcomes:

1. If the current state is the energy eigenstate $|a\rangle$, then during a no-click interval of length $t$ the unnormalized state is $e^{tK}|a\rangle$.
2. In an infinitesimal interval $dt$, the outcome labelled $a\to b$ has jump operation $\sqrt{dt}\,L_{ab}$ and probability $dt\,\langle a|L_{ab}^*L_{ab}|a\rangle+o(dt)$. For $w_{ab}>0$, its normalized post-click state is $L_{ab}|a\rangle/\|L_{ab}|a\rangle\|=|b\rangle$. If $w_{ab}=0$, this branch is the zero operation and has exactly zero probability; no conditional state is assigned.
3. The no-click operation over $dt$ is $M_0(dt)=I+Kdt+o(dt)$. Since $K^*+K=-R$ and $\sum_{a\ne b}L_{ab}^*L_{ab}=R$, the no-click and jump effects sum to $I+o(dt)$.
4. After each recorded jump, repeat the same rule from the new energy label.

The output path records the current label $a(t)\in E$. This is one selected instrument model; the one-time GKSL semigroup alone does not specify a unique record process.

## Facts & Assumptions

**Given:** The Axiom of Choice, the connected finite Gibbs jump data, the jump operators $L_{ab}$, and the finite-state chain supplier.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. The full axiom is retained because the supplied chain construction uses Ionescu–Tulcea.

[F1] [[thm-qsm-dt-gibbs-jump]]: $E$ is finite, the positive-rate graph is connected, $r_a=\sum_{b\ne a}w_{ab}>0$, and the energy-resolved jump matrix is $\sqrt{w_{ab}}|b\rangle\langle a|$.

[F2] [[def-qsm-dt-gksl-definition]]: the Schrödinger generator for Hamiltonian $H_{\rm s}$ and jumps $L_{ab}$ is $\mathcal L(X)=-i[H_{\rm s},X]/\hbar+\sum_{a\ne b}(L_{ab}XL_{ab}^*-\frac12\{L_{ab}^*L_{ab},X\})$.

[F3] [[thm-csm-dk-nonexplosive-ctmc-and-gap]]: under full AC, the finite connected reversible rates construct a nonexplosive continuous-time Markov chain with waiting rate $r_a$, destination probabilities $w_{ab}/r_a$, and transition matrix $e^{tW}$.

## Proof

1.1 The jump matrices give $L_{ab}^*L_{ab}=w_{ab}|a\rangle\langle a|$, so $R=\sum_a r_a|a\rangle\langle a|$ and $K^*+K=-R$. Hence $M_0(dt)^*M_0(dt)=I-Rdt+o(dt)$, while the sum of jump effects is $Rdt$; the total effect is $I+o(dt)$ as required for a normalized infinitesimal instrument. Also $K|a\rangle=(-iE_a/\hbar-r_a/2)|a\rangle$, so $\|e^{tK}|a\rangle\|^2=e^{-r_at}$. The no-click survival probability is exactly the exponential holding-time law of rate $r_a$. [given, F1, construct, algebra]

1.2 For a short interval $dt$, the instrument outcome $a\to b$ has probability $dt\,\langle a|L_{ab}^*L_{ab}|a\rangle+o(dt)=w_{ab}dt+o(dt)$. Summing over $b\ne a$ gives total jump rate $r_a$, and conditioning on a jump gives destination probability $w_{ab}/r_a$. For $w_{ab}>0$ the post-jump normalized state is $|b\rangle$; for $w_{ab}=0$ the jump operation is zero, so that outcome never occurs and is not normalized. [given, F1, algebra]

2.1 For an arbitrary matrix $X$, the no-click branch contributes $M_0(dt)XM_0(dt)^*=X+dt(KX+XK^*)+o(dt)$, and the jump branches contribute $dt\sum_{a\ne b}L_{ab}XL_{ab}^*+o(dt)$. Since $K=-iH_{\rm s}/\hbar-R/2$ and $R=\sum_{a\ne b}L_{ab}^*L_{ab}$, their sum is $X+dt\mathcal L(X)+o(dt)$ with exactly the generator in [F2]. Thus the selected infinitesimal outcomes have the specified GKSL generator. [F1, F2, step 1.1, algebra]

3.1 The holding-time and destination laws in steps 1.1–1.2 are exactly those of the chain in [F3]. Full AC [A1] and [F3] supply its joint path law and nonexplosion; hence the specified instrument's recorded path is the finite continuous-time chain with generator $W$, not a law inferred from noncommuting one-time correlations. [A1, F3, step 1.1, step 1.2] ∎

## Remarks

The record path is a mathematical model of a chosen energy-resolved monitoring scheme. Other unravelings of the same GKSL evolution can produce different records; no unique trajectory follows from the one-time channel family.
