---
id: thm-qa-30-quantum-sdp-solver-guarantee
kind: theorem
title: "Quantum SDP additive-optimality guarantee"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 27
deps:
  - alg-qa-30-quantum-sdp-solver
  - lem-qa-30-normalized-sdp-strong-duality
  - lem-qa-30-spectral-minimum-shift
  - thm-qa-30-smooth-fourier-approximation
  - thm-qa-30-flagged-trace-error-and-cost
  - thm-qa-30-generalized-minimum-guarantee
  - lem-qa-30-two-sparse-estimated-oracle
  - lem-qa-30-mmw-to-sdp-feasibility
  - thm-qa-30-sdp-binary-search-correctness
justified_by: []
proof_strategy: direct
axiom_use: "None; finite-dimensional convex separation, explicit finite circuits and finite conditional probability suffice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

For rational accuracy $\varepsilon>0$ and the normalized sparse finite SDP promises specified by QA30—$\|A_j\|,\|C\|\le1$, $A_1=I$, $b_1=R\ge0$, nonempty primal (whose trace is therefore at most $R$), attained dual optimum with an optimal vector of $\ell_1$ norm at most $r\ge1$, and maximum matrix sparsity $s$—[[alg-qa-30-quantum-sdp-solver]], with its declared finite precision, controlled/inverse access, reference preparation, arithmetic and synthesis implementations, returns with probability at least $2/3$ a feasible dual vector of objective at most $\mathrm{OPT}+\varepsilon$. More generally its declared rational confidence target $0<\delta<1$ gives probability at least $1-\delta$.

It outputs a classical sparse dual list, with at most $2T+1$ nonzero coordinates before merging across the final threshold's rounds. It does not output a dense primal matrix. Finite arithmetic, state preparation, memory and controlled/inverse operations have their actual costs; the resource theorem states the resulting query profile and its separate gate-cost boundary. No unproved numerical or access implementation is a premise supplied by a source title alone.

## Facts & Assumptions

**Given:** The normalized nonempty SDP, bounded attained dual optimum, finite input encoding and the explicit finite implementations and budgets of the algorithm.

[F1] [[lem-qa-30-normalized-sdp-strong-duality]] gives primal/dual equality and the value interval $[-R,R]$ for $R>0$.

[F2] [[lem-qa-30-spectral-minimum-shift]] gives a finite high-confidence energy shift frozen once per round; [[thm-qa-30-smooth-fourier-approximation]] gives the local finite analytic coefficient construction and normalization with all implementation errors allocated.

[F3] [[thm-qa-30-flagged-trace-error-and-cost]] proves the actual flag probability floors, common-normalization trace ratio and uniform indexed trace-label error for the supplied fixed coherent samplers and their whole-circuit inverses.

[F4] [[thm-qa-30-generalized-minimum-guarantee]] and [[lem-qa-30-two-sparse-estimated-oracle]] give bounded-error complete two-sparse oracle responses under their explicit good-label cleaning/hybrid hypotheses.

[F5] [[lem-qa-30-mmw-to-sdp-feasibility]] gives the threshold alternatives and dual reserve from the exact MMW losses.

[F6] [[thm-qa-30-sdp-binary-search-correctness]] gives the stored-certificate invariant, fixed call cap and adaptive first-bad-call argument, including the boundary cases.

## Proof


1.1 For a reached positive-$R$, positive-dimension round, condition on its prior history. By [F2], except on its allocated shift event the single measured shift produces a fixed $G$ with minimum eigenvalue in $[1,2]$. Its scalar identity shift changes no normalized Gibbs density. The finite Fourier coefficient construction and all evolution/decoded-value errors meet the allocated successful-block error. The numerator uses $F_A/B_A^+$ and the baseline uses $I/(2B_A^+)$, so [F3] applies to the same frozen Gibbs block. Its actual probabilities exceed $1/(1024n)$ and the returned trace label is $\theta$-good except on the declared event. Retaining every internal branch as orthogonal history and padding the finite cap supplies the coherent indexed circuit and its true inverse; no normalized-state postselection inverse is assumed. [given, F2, F3, construct]

2.1 The scalar estimate is measured once. For either minimum the declared deterministic call cap is known before choosing $\nu\le(\beta/(16Q_{min}))^2$. Step 1.1 gives a bad probability at most $\nu$ on every preserved index. [F4]'s per-index good-component rotation is used only in analysis; its controlled/inverse operator-norm hybrid proves the required selected-label nondomination for the actual finite circuit. Both angular score orders assign sentinel zero inside the region. Thus the two selected labels either yield the exact rational nonnegative two-sparse weight list, with objective at most $\alpha$, norm at most $r$ and true trace residual at least $-2(r+1)\theta$, or return `EMPTY`, implying $\alpha<\mathrm{OPT}$ by the bounded-optimal-vector contrapositive. No uniform probability lower bound for an individual good label or simultaneous deterministic estimate table is assumed. [given, F1, F3, F4, step 1.1]

3.1 In each threshold call the algorithm allocates $\beta=\delta_{call}/(10T)$ to the shift, scalar estimate and each of the two complete minima, with all implementation hybrids included in the stated budgets. Summing conditional bad probabilities over at most $T$ reached rounds gives at most $4T\beta\le\delta_{call}$. This is a predictable adaptive union bound, not an independence assumption. On the complementary event every returned loss has norm at most one and the true round trace bound of step 2.1. Hence [F5] applies to the ideal densities, whose finite implementations were compared with them in step 1.1: `EMPTY` may return `HIGHER`, whereas $T$ weights give a `LOWER` certificate $\bar y=(e/R)e_1+T^{-1}\sum_ty_t$ with matrix slack at least $(e/(2R))I$ and objective at most $\alpha+e$. Exact rational weights and their average retain that margin without a rounding inference. [given, F5, step 1.1, step 2.1, algebra]

4.1 By [F1], the initial threshold $R+e$ has a `LOWER` response on the good event. By [F6], at most $L+1$ good threshold calls suffice; their stored certificate has objective within $\varepsilon$ of the optimum. Conditional bad probability $\delta/(L+1)$ at each reached call bounds the probability of a first bad call by $\delta$. Operations on a history that already contains a bad event do not require an unbounded additional union bound. Thus with probability at least $1-\delta$ the finite algorithm returns the claimed feasible vector. An unsupported failure has no exclusion implication; the supplied proved complete implementations ensure such a failure does not occur on this good event. Taking $\delta=1/3$ proves the stated probability. [given, F1, F5, F6, step 3.1]

5.1 Each of the $T$ weights is two-sparse and the identity shift adds at most one index, so the final certificate has support at most $2T+1$ before merging. Its rational finite list and objective are computed classically at their actual cost. Dimension zero, $R=0$, and $\varepsilon\ge2R$ use the direct boundary branches proved in [F6], preceding all positive-$R$ formulas. These complete the claimed scope. [given, F6, step 3.1, algebra] ∎

