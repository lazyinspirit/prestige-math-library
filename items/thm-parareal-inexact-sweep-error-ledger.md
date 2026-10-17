---
id: thm-parareal-inexact-sweep-error-ledger
kind: theorem
title: "An additive error ledger for inexact Parareal sweeps"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-parareal-binomial-error-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16: Parareal error recurrence and coarse/fine map discrepancy."
    - title: "Ben S. Southworth, Necessary Conditions and Tight Two-Level Convergence Bounds for Parareal and Multigrid Reduction in Time"
      url: "https://arxiv.org/pdf/1810.07292"
      locator: "§1–2: the error analysis concerns the discrete linear system and explicitly requires its stated operator assumptions."
---

## Statement

Use the notation and Lipschitz hypotheses of [[thm-parareal-binomial-error-bound]], with $A=\max\{1,a\}$. Let computed iterates $V_n^k\in D$ satisfy $V_0^k=x_0$, $\|V_n^0-x_n\|\le M$, and, for each requested correction,
$$\left\|V_{n+1}^{k+1}-\left[G_n(V_n^{k+1})+(F_n-G_n)(V_n^k)\right]\right\|\le\eta$$
for a constant $\eta\ge0$. Define $P_n^k=M\binom nk A^n b^k$ and a nonnegative forcing array by $R_0^k=0$, $R_n^0=0$, and
$$R_{n+1}^{k+1}=A R_n^{k+1}+bR_n^k+\eta.$$
Then $\|V_n^k-x_n\|\le P_n^k+R_n^k$ for every completed node and sweep.

The base envelope $M$ includes coarse-initialization error relative to the fine trajectory. The per-update defect $\eta$ must bound the actual combined effect of fine/coarse evaluation errors and correction-solve error; a residual tolerance alone supplies no forward-error bound.

## Facts & Assumptions

**Given:** The Parareal Lipschitz hypotheses, the stated computed recurrence defect, and the definitions of $P_n^k$ and $R_n^k$.

[F1] [[thm-parareal-binomial-error-bound]]: with $A=\max\{1,a\}$, the exact-arithmetic error is bounded by $P_n^k=M\binom nk A^n b^k$.

[A1] Every computed comparison point lies in the common set on which the two Lipschitz bounds hold, and the combined update defect has norm at most $\eta$.

## Proof

1.1 Set $e_n^k=\|V_n^k-x_n\|$. Subtracting $x_{n+1}=F_n(x_n)$ from the computed recurrence, splitting off the update defect, and applying the two Lipschitz inequalities gives $e_{n+1}^{k+1}\le a e_n^{k+1}+b e_n^k+\eta\le A e_n^{k+1}+b e_n^k+\eta$. [given, A1, algebra]

1.2 At node $0$, $e_0^k=0$, $P_0^k=0$ for $k>0$, and $R_0^k=0$; at $k=0$, the base coarse-error assumption gives $e_n^0\le M\le P_n^0+R_n^0$. [given, F1, A1, algebra]

2.1 Assume $e_n^k\le P_n^k+R_n^k$ at node $n$ for every completed sweep. For $k\ge0$, step 1.1 gives $e_{n+1}^{k+1}\le A(P_n^{k+1}+R_n^{k+1})+b(P_n^k+R_n^k)+\eta$. The $P$ terms satisfy $A P_n^{k+1}+bP_n^k=MA^n b^{k+1}\left(A\binom n{k+1}+\binom nk\right)\le MA^{n+1}b^{k+1}\left(\binom n{k+1}+\binom nk\right)=P_{n+1}^{k+1}$ because $A\ge1$ and Pascal's identity holds. The remaining terms equal $R_{n+1}^{k+1}$ by definition. Therefore the bound holds at node $n+1$; induction proves it for all nodes and sweeps. [F1, A1, step 1.1, step 1.2, induction, algebra] ∎

