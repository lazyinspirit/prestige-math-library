---
id: lem-reparameterized-variational-training-finite-run-terminates
kind: lemma
title: "The fixed-horizon reparameterized variational-training procedure terminates"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-reparameterized-variational-training
  - def-variational-autoencoder
  - thm-reparameterization-gradient-under-dominated-differentiation
  - def-natural-numbers
  - thm-induction-principle
proof_strategy: induction
axiom_use: "The algorithm carries AC only through its ELBO lower-bound interpretation. This finite-loop and finite-value argument uses no additional choice principle; it is pointwise in a supplied finite sequence of draws."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kingma and Welling, Auto-Encoding Variational Bayes, §2.4 Algorithm 1 (procedure background)"
      url: "https://arxiv.org/pdf/1312.6114v1"
---

## Statement

Under the full input and admissible-domain hypotheses of reparameterized variational training, let $T\ge1$ be its finite integer horizon. For every sequence of its prescribed draws satisfying the stated update-domain requirement, all recorded payoffs $h_t$, gradient vectors $G_t$, and parameter vectors $\eta_t$ are finite. The mathematical procedure completes exactly $T$ rounds and returns the full trajectories $(\eta_0,\ldots,\eta_T)$ and $(h_t,G_t)_{0\le t<T}$, including when one or more noise draws lie in its common null set.

Termination here counts the prescribed draws, branch decisions, pointwise evaluations and vector updates as the operations of the stated mathematical procedure. It asserts neither an implementation or cost bound for arbitrary supplied functions and samplers nor convergence or optimality of the returned parameters.

## Statement references

[[alg-reparameterized-variational-training]]

[[thm-reparameterization-gradient-under-dominated-differentiation]]

[Kingma and Welling, Auto-Encoding Variational Bayes, §2.4 Algorithm 1](https://arxiv.org/pdf/1312.6114v1)

## Facts & Assumptions

**Given:** All inputs and admissibility hypotheses of the algorithm, its finite positive integer $T$, and a sequence $(I_t,\epsilon_t)_{0\le t<T}$ of its draws for which every required update remains in the open admissible parameter domain.

[F1] The algorithm has a fixed nonempty finite data set, finite-dimensional initial parameter $\eta_0$, positive finite real learning rates, and exactly the rounds $0,\ldots,T-1$. Each round records one payoff and gradient, makes one update $\eta_{t+1}=\eta_t+\alpha_tG_t$, and has no additional iterative search. [[alg-reparameterized-variational-training]]

[F2] Outside its common null set for finite positive log values, both densities evaluated along each data point's encoder path are strictly positive finite real numbers. The payoff is their finite log difference. Outside the additional common null set for sample-path regularity, that payoff is a $C^1$ real function of the finite-dimensional parameter, hence its Euclidean gradient exists and has finite real coordinates. The algorithm uses the union $\mathcal N$ of these two null sets, common to all data indices and parameters. [[thm-reparameterization-gradient-under-dominated-differentiation]], [[alg-reparameterized-variational-training]]

[F3] If $\epsilon_t\in\mathcal N$, the algorithm sets both $h_t=0$ and $G_t=0$ and does not evaluate either logarithm or gradient there. Every update is required to remain in the open admissible parameter domain. [[alg-reparameterized-variational-training]]

[F4] A VAE's admissibility includes positive finite evidence, encoder support compatibility and absolute log-integrability; these hypotheses are retained in the algorithm and its pathwise theorem. [[def-variational-autoencoder]]

[F5] Induction propagates a base assertion preserved by each successor through every index of a finite natural-number interval. [[def-natural-numbers]], [[thm-induction-principle]]

## Proof

1.1 At $t=0$, the initial parameter is the supplied finite-dimensional real vector in the admissible domain by [F1] and the algorithm's hypotheses. No payoff or gradient has yet been recorded. Thus the procedure has a well-defined finite state before its first round. [given, F1, F4, base]

1.2 Suppose $0\le t<T$ and the state before round $t$ has been obtained with finite parameters and records for all earlier rounds. The next supplied draw has an index in the finite data set. If $\epsilon_t\in\mathcal N$, [F3] defines both records to be zero, so they are finite and no undefined density or derivative is evaluated. If $\epsilon_t\notin\mathcal N$, [F2] makes the two density values strictly positive and finite, so $h_t$ is a finite real number; the sample-path $C^1$ property gives a finite gradient vector $G_t$ at the current admissible parameter. This constructs finite records in both branches. [given, F1, F2, F3, IH, cases]

2.1 The scalar $\alpha_t$ and all coordinates of $\eta_t,G_t$ are finite, so the finite-dimensional vector sum $\eta_t+\alpha_tG_t$ has finite coordinates. The stated update-domain requirement [F3] puts this parameter $\eta_{t+1}$ in the same admissible domain where the next round's hypotheses apply. Each branch in step 1.2 and this update uses only finitely many of the procedure's prescribed operations, with no recursive loop within a round. Thus a completed round produces the next finite admissible state. [F1, F3, step 1.2, IH, algebra]

3.1 By [F5], steps 1.1–2.1 give a completed state after each $t\le T$. After round $T-1$ the prescribed loop ends; there is no further stopping test or unbounded search. The finite records comprise exactly $(\eta_0,\ldots,\eta_T)$ and $(h_t,G_t)_{0\le t<T}$, which [F1] instructs the procedure to return. Hence it terminates after exactly $T$ rounds with every stated finite output, for every admissible draw sequence including the null-set branches. [F1, F3, F5, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
