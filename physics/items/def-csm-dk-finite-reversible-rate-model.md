---
id: def-csm-dk-finite-reversible-rate-model
kind: definition
title: "Finite reversible stochastic rate model"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-axiom-of-choice
dependency_roles:
  thm-ionescu-tulcea-construction-of-a-markov-chain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.4: finite continuous-time rate matrices, jump-and-hold processes and reversibility."
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§§6.1–6.2 and §9.4.5: master-equation states, finite-state transition rates and local detailed balance."
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. A **finite reversible stochastic rate model** consists of an integer $r\ge2$, the finite state set $E=\{1,\ldots,r\}$, real energy parameters $e_a\in\mathbb R$, an inverse-energy parameter $\beta>0$, and finite transition rates $w_{ab}\ge0$ for distinct $a,b\in E$. When physical units are assigned, $e_a$ is measured in joules, $\beta$ in joules$^{-1}$, and $w_{ab}$ in seconds$^{-1}$; this mathematical definition does not assert a physical realization. Define

$$Z:=\sum_{a\in E}e^{-\beta e_a},\qquad \pi_a:=Z^{-1}e^{-\beta e_a}.$$

Then $Z$ is finite and positive, and $\pi$ is a strictly positive probability vector. Require $w_{ab}>0$ exactly when $w_{ba}>0$, require the undirected graph with edge $\{a,b\}$ whenever $w_{ab}>0$ to be connected, and impose detailed balance $\pi_aw_{ab}=\pi_bw_{ba}$. Define the row generator $Q$ by $Q_{ab}=w_{ab}$ for $a\ne b$ and $Q_{aa}=-q_a$, where $q_a:=\sum_{b\ne a}w_{ab}$. Since $r\ge2$ and the graph is connected, every $q_a>0$. Thus $(Qf)_a=\sum_{b\ne a}w_{ab}(f_b-f_a)$ for a column observable $f$, and a row probability vector evolves by $p'=pQ$.

For any observable $f:E\to\mathbb R$, write $\pi(f):=\sum_{a\in E}\pi_af_a$. For $f,g:E\to\mathbb R$, define $\langle f,g\rangle_\pi:=\sum_{a\in E}\pi_af_ag_a$. Since $E$ is finite and every $\pi_a>0$, all real functions on $E$ belong to this finite-dimensional real inner-product space, denoted $L^2(E,\pi)$; equality in it is pointwise equality.

The associated jump-chain construction waits an exponential time of rate $q_a$ in state $a$ and then selects state $b\ne a$ with probability $w_{ab}/q_a$, using fresh independent random choices at successive jumps. Here an exponential time of rate $q>0$ has survival probability $\Pr(\tau>t)=e^{-qt}$ for $t\ge0$. The Ionescu–Tulcea construction [[thm-ionescu-tulcea-construction-of-a-markov-chain]] supplies the countable random sequence under the stated Choice assumption. The theorem on this page proves nonexplosion, identifies the transition semigroup, and establishes the positive reversible spectral gap. This is a finite mathematical rate model, not a derivation of rates from Hamiltonian mechanics.
