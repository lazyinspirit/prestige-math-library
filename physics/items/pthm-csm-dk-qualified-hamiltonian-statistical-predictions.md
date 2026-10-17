---
id: pthm-csm-dk-qualified-hamiltonian-statistical-predictions
kind: physics-theorem
title: Conditional Hamiltonian ensemble and response predictions
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
physical_scope: Smooth finite-dimensional nonrelativistic Hamiltonian models on an actually complete invariant domain; canonical normalizability, regular compact-shell hypotheses, sampled-map ergodicity, and compact response conditions are explicit and separate. No measured equilibration or generic ergodicity is claimed.
deps:
  - post-csm-dk-selected-hamiltonian-dynamics
  - thm-csm-dk-invariant-hamiltonian-and-shell-measures
  - thm-csm-dk-liouville-and-fine-entropy
  - thm-csm-dk-qualified-time-averages
  - thm-csm-dk-compact-hamiltonian-linear-response
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  post-csm-dk-selected-hamiltonian-dynamics: physical-assumption
  thm-csm-dk-invariant-hamiltonian-and-shell-measures: mathematical-premise
  thm-csm-dk-liouville-and-fine-entropy: mathematical-premise
  thm-csm-dk-qualified-time-averages: mathematical-premise
  thm-csm-dk-compact-hamiltonian-linear-response: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: David Tong, Statistical Physics, complete author-hosted lecture text, §§1.2–1.3
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
    - title: MIT OpenCourseWare, 22.103 Microscopic Theory of Transport, Lecture 3, pp. 1–4
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
---

## Statement

Adopt the selected smooth nonrelativistic Hamiltonian model and preparation
of [[post-csm-dk-selected-hamiltonian-dynamics]]. The following are
conditional model deductions, with no experimental premise.

1. If $\beta=(k_BT)^{-1}>0$ and
$Z_\beta=\int_R e^{-\beta H}\,dm_0$ is finite and positive, the canonical
probability $d\mu_\beta=Z_\beta^{-1}e^{-\beta H}dm_0$ is invariant under the
unforced Hamiltonian flow. For any absolutely continuous initial law covered
by [[thm-csm-dk-liouville-and-fine-entropy]], its Liouville-transported density
preserves the reference-measure fine entropy whenever that entropy is finite.

2. Under full AC, let $n\ge1$, let the canonical phase be open
$O\subseteq\mathbb R^{2n}$, let $H\in C^2(O,\mathbb R)$, and let
$J\subseteq\mathbb R$ be open. Suppose $\nabla H\ne0$ on $H^{-1}(J)$
and $H^{-1}(K)$ is compact in $O$ for every compact $K\subset J$. For
each $E\in J$ with nonempty shell $\Sigma_E=H^{-1}(\{E\})$, if the
flow preserves a full compact regular band containing $\Sigma_E$, that
shell has a finite positive
weighted area law invariant under that flow. Critical levels and noncompact
bands are outside this prediction.

3. If $\mu$ is a Borel probability on $R$ invariant under every flow map
$\Phi_s$ and the selected time map $T=\Phi_\Delta$ is ergodic for $\mu$
(every Borel $E$ with $T^{-1}E=E$ has $\mu(E)\in\{0,1\}$), then for each
bounded Borel observable $A$, the model's
continuous-time average of $A$ converges $\mu$-almost surely and in $L^1$
to its ensemble mean. This is a typical-initial-state prediction, not a
claim for every trajectory or every finite observation window.

4. In the compact response regime and with the unperturbed canonical
preparation, perturbing $H$ to $H-\epsilon h(t)B$ gives the exact
first-order response of [[thm-csm-dk-compact-hamiltonian-linear-response]].
It does not assert that the required correlation decays or that a
noncompact physical system satisfies the compact hypotheses.

In SI mechanical units, $H$ is in J, absolute temperature $T$ is in K,
$k_B$ is the adopted primitive energy-temperature conversion constant in
J/K, $\beta$ is in J$^{-1}$, and the action scale $a_0$ is in J s.
Observables and control fields retain the units declared in the response theorem. These
deductions establish what follows inside the adopted model, not that nature
obeys the model.

## Facts & Assumptions

**Given:** The adopted Hamiltonian model and prepared law; where invoked, finite positive canonical normalization; ergodicity of the selected sampled map; and the compact smooth-control response hypotheses.

[A1] Full AC is carried for the regular-shell branch of the mathematical supplier used below; $\mathrm{AC}_\omega$ is carried for its completed measure-theory suppliers. These are mathematical assumptions, not physical postulates ([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] For the canonical clause, $\beta>0$ and $0<Z_\beta=\int_R e^{-\beta H}dm_0<\infty$.

[A3] For the time-average clause, $\Delta>0$, $\mu$ is invariant under every flow map, and $T=\Phi_\Delta$ is ergodic for $\mu$ in the strict-invariance convention: $T^{-1}E=E$ implies $\mu(E)\in\{0,1\}$ for Borel $E$.

[A4] For the response clause, $M$ is compact without boundary, $H,A,B$ are smooth, $h$ is smooth on the finite time slab, $\mu_\beta$ is the unperturbed initial law, and $H-\epsilon h(t)B$ has the units specified in the cited response theorem.

[A5] For the shell clause, $n\ge1$, $O\subseteq\mathbb R^{2n}$ is open, $H\in C^2(O,\mathbb R)$, $J\subseteq\mathbb R$ is open, $\nabla H\ne0$ on $H^{-1}(J)$, and $H^{-1}(K)$ is compact in $O$ for every compact $K\subset J$. The chosen energy is $E\in J$, its shell $\Sigma_E$ is nonempty, and the Hamiltonian flow is a diffeomorphism on and preserves a full compact band containing that shell.

[F1] [[post-csm-dk-selected-hamiltonian-dynamics]]: the flow and preparation are adopted model assumptions. This does not assert empirical validity.

[F2] [[thm-csm-dk-invariant-hamiltonian-and-shell-measures]]: the energy-weighted canonical law is invariant under the stated normalizability condition; regular shells at energies $E\in J$ require full AC, $n\ge1$, compact inverse images of compact subsets of $J$, and nonzero gradient on $H^{-1}(J)$.

[F3] [[thm-csm-dk-liouville-and-fine-entropy]]: an absolutely continuous probability density is transported by $\rho_t=\rho_0\circ\Phi_{-t}$, and finite reference-measure fine entropy is constant.

[F4] [[thm-csm-dk-qualified-time-averages]]: for the chosen ergodic time map, bounded-observable time averages converge almost surely and in $L^1$ to the invariant ensemble mean.

[F5] [[thm-csm-dk-compact-hamiltonian-linear-response]]: in the specified compact unperturbed canonical model, the derivative with respect to the dimensionless perturbation is $\int_0^t h(s)\beta\langle(X_HB)(0)A(t-s)\rangle_{\mu_\beta}\,ds$.

## Proof

**Given:** [A1]–[A5], the adopted postulate [F1], and the exact mathematical interfaces [F2]–[F5].

1.1 Under [A2], the first clause of [F2] makes $\mu_\beta$ a normalized invariant probability on the actual complete domain. Under [A1] and [A5], the selected $E\in J$ and its nonempty shell meet the second clause of [F2], which gives the regular-shell prediction, with its finite positive normalization and invariance only on the specified band. For any initial density satisfying [F3], the transported law and its finite fine entropy have the conclusions stated in clause 1. Each conclusion is conditional on the normalization, shell, or integrability condition in its supplier. [A1, A2, A5, F1, F2, F3]

1.2 Under [A3], the flow, probability, observable, and chosen time map meet the hypotheses of [F4]. Its limit is the ensemble mean for $\mu$ and holds almost surely and in $L^1$; it does not turn the limit into a statement about every initial state or a finite sample. [A1, A3, F1, F4]

2.1 Under [A4], all variables and the perturbation match the compact response theorem [F5]. Applying its exact conditional formula gives clause 4, with no further long-time limit unless a separate correlation-decay hypothesis is added. The result is a deduction within the adopted model, not a measurement or proof of physical applicability. [A1, A4, F1, F5] ∎

## Remarks

The postulate fixes the model's physical formulation and preparation. Normalizability, ergodicity, and correlation decay are separate mathematical conditions; none is inferred from Hamiltonian form alone. Experiments may test predictions from a specified model, but this theorem contains no reported observations.
