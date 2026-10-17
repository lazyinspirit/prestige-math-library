---
id: pthm-csm-dk-finite-bath-response
kind: physics-theorem
title: "Conditional finite-state equilibration and fluctuation response"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-finite-reversible-rate-model
  - post-csm-dk-selected-reversible-bath-rates
  - thm-csm-dk-markov-entropy-and-strong-averages
  - thm-csm-dk-finite-rate-fluctuation-response
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: formulation-prerequisite
  post-csm-dk-selected-reversible-bath-rates: physical-assumption
  thm-csm-dk-markov-entropy-and-strong-averages: mathematical-premise
  thm-csm-dk-finite-rate-fluctuation-response: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional predictions of the specified connected finite-state thermal rate model, including relative-information relaxation from any initial law, equilibrium linear response for its chosen field-dependent rates, and long-time averages of bounded state observables. Rate values and material applicability require separate physical calibration; no observations or empirical rate estimates are included."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§§6.1–6.2, §8.1.1, §8.2.4 and §9.4.5: finite-state master equation, equilibrium response and rate-ratio qualifications."
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.4: finite continuous-time reversible chains and spectral convergence."
---

## Statement

Assume the adopted finite thermal rate model [[post-csm-dk-selected-reversible-bath-rates]], including its finite energy states, detailed-balance rates, temperature parameter and stationary Gibbs preparation for the response branch. For any initial microscopic probability law, the model's dimensionless relative information $\mathcal D(p_t\Vert\pi)$ is nonincreasing and tends to zero, and every bounded state observable has an almost-sure time average equal to its Gibbs mean. For real state observables $A,B:E\to\mathbb R$, any finite horizon $t_f>0$, and a continuous field $h:[0,t_f]\to\mathbb R$, the equilibrium-response branch with the postulated symmetric field-dependent rates has, for $0\le t\le t_f$, first-order response
$$\delta\langle A(t)\rangle=\int_0^t h(s)\left[-\beta\,\frac{d}{du}C_{BA}(u)\bigg|_{u=t-s}\right]ds,$$
where $\delta\langle A(t)\rangle:=\left.\partial_\epsilon\sum_a p_a^\epsilon(t)A_a\right|_{\epsilon=0}$, $p^\epsilon(0)=\pi$, and $p^\epsilon$ solves the finite forward equation for the postulated controlled rates. The correlation is $C_{BA}(u)=\langle(B-\pi(B)),P_u(A-\pi(A))\rangle_\pi$. For a constant field amplitude $g$ (in joules per unit of $B$), define the normalized perturbed equilibrium vector by $\pi^g_a:=\frac{\pi_a e^{\beta gB_a}}{\sum_{c\in E}\pi_c e^{\beta gB_c}}$ and define its susceptibility per unit field by $\chi_{AB}:=\left.\partial_g\pi^g(A)\right|_{g=0}$. Then $\chi_{AB}=\beta\,\operatorname{Cov}_\pi(A,B)$ and, when $g=\epsilon h$ for constant $h$, the derivative with respect to dimensionless $\epsilon$ is $h\chi_{AB}$. Here $\pi^g(A):=\sum_a\pi^g_aA_a$ and $\operatorname{Cov}_\pi(A,B):=\pi(AB)-\pi(A)\pi(B)$. If physical units are assigned to $A$ and $B$, write them as $[A]$ and $[B]$: $C_{BA}$ has units $[A][B]$, while $\beta h\,dC_{BA}/du$ has units $[A]$ per second, so the time integral and the derivative with respect to dimensionless $\epsilon$ have units $[A]$. These are conditional predictions of this finite stochastic model. They concern its dimensionless relative-information functional and state observables; no experimental observation, calibrated rate, material-specific claim or universal thermodynamic law is asserted.

## Facts & Assumptions
**Given:** The adopted finite rate model, the full and countable choice assumptions, and the local finite-chain theorems.

[A1] [[post-csm-dk-selected-reversible-bath-rates]]: the model adopts $p_0=\pi$, $\beta=(k_BT_b)^{-1}$, baseline reversible rates, and the specified symmetric exponential control law.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A3] [[def-countable-choice]]: every countable sequence of nonempty sets has a choice function.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: the finite energies, positive Gibbs vector, connected bidirectional rate graph and row generator are explicitly defined.

[F2] [[thm-csm-dk-markov-entropy-and-strong-averages]]: the relative-information derivative, convergence to $\pi$, almost-sure time averages from every initial law, and stationary variance bound hold for this generator.

[F3] [[thm-csm-dk-finite-rate-fluctuation-response]]: under the stated symmetric exponential rate perturbation, the finite forward equation has the derived equilibrium response kernel and static susceptibility.

## Proof

**Given:** [A1]–[A3] and [F1]–[F3].

1.1 By [A1] and [F1], the adopted physical model supplies the exact finite state set, energy vector, inverse-temperature factor $\beta$, connected rate graph and detailed-balance law used in [F2] and [F3]. The Choice assumptions [A2]–[A3] are the mathematical hypotheses inherited by those two suppliers. [A1, A2, A3, F1, F2, F3, algebra]

2.1 Apply [F2] to the unforced generator. It gives nonincrease and convergence of $\mathcal D(p_t\Vert\pi)$ for every initial law and almost-sure convergence of every bounded-observable time average. These are consequences of the stipulated finite chain and its conditional probability law. [A1, F2, step 1.1]

3.1 In the equilibrium-response branch, [A1] fixes $p_0=\pi$ and the controlled rates exactly in the form assumed by [F3]. Therefore [F3] gives the stated correlation response and static susceptibility. The source's rate-ratio condition alone does not fix the adopted prefactors; the derivation uses the additional symmetric splitting in [A1]. The conclusions are conditional on that adopted model; no empirical observation or material-specific inference is involved. [A1, F3, step 1.1] ∎
