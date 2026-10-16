---
id: thm-qa-30-sdp-binary-search-correctness
kind: theorem
title: Binary search converts certified SDP thresholds to additive optimization
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-normalized-sdp-strong-duality
  - lem-qa-30-mmw-to-sdp-feasibility
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Meta-Algorithm 1 and Theorem 1
      url: https://arxiv.org/pdf/1705.01843v4
---

## Statement

For the normalized nonempty SDP and bounded attained dual optimum of [[lem-qa-30-mmw-to-sdp-feasibility]], let $0<\varepsilon<2R$, supply a rational $\varepsilon_0$ with $\varepsilon/2<\varepsilon_0\le\varepsilon$, set $e=\varepsilon_0/8$, and supply that lemma's finite threshold oracle. On its good event `LOWER` supplies a feasible dual of objective at most $\alpha+e$, and `HIGHER` implies $\alpha<\mathrm{OPT}$. Initialize $lo=-R,hi=R$, obtain a `LOWER` vector at threshold $R+e$, and store it. For at most $L=\lceil\log_2(16R/\varepsilon_0)\rceil+2$ midpoint calls, stop when $hi-lo\le\varepsilon_0/2$; on `LOWER` store its vector and put $hi=\min(hi,\alpha+e)$, and on `HIGHER` put $lo=\max(lo,\alpha-e)$. Then the stored vector is dual feasible and has objective at most $\mathrm{OPT}+\varepsilon$. There are $O(1+\log(R/\varepsilon))$ threshold calls. Per-call conditional bad probability at most $\delta/(L+1)$ gives total failure at most $\delta$, even for adaptive inputs.

An uncertain result with no proved oracle guarantee returns explicit `FAIL`. No tolerance refinement is required on a good execution. For $\varepsilon\ge2R$ return $e_1$ directly. If $R=0$ and the primal is nonempty, the same vector has objective zero and is optimal. In dimension zero return the zero dual vector. These branches precede every division by $R$.

## Facts & Assumptions

**Given:** The normalized SDP promises, finite threshold oracle and the stated conditional budgets.

[F1] [[lem-qa-30-normalized-sdp-strong-duality]] gives primal/dual equality and $\mathrm{OPT}\in[-R,R]$ when $R>0$.

[F2] [[lem-qa-30-mmw-to-sdp-feasibility]] gives the good-event threshold alternatives and feasible sparse dual certificate.

[F3] [[def-qa-30-sdp-primal-dual-pair]] fixes dual feasibility and the identity trace constraint.

## Proof

1.1 By [F1], the first threshold $R+e$ exceeds the optimum, so [F2] cannot return `HIGHER` on its good event. It supplies a stored feasible vector with objective $B\le R+2e$. Thus the invariant $lo\le\mathrm{OPT}\le hi$ and $B\le hi+2e$ holds initially. At a `LOWER` midpoint, $\mathrm{OPT}\le B_{new}\le\alpha+e$; replacing $hi$ by its minimum with $\alpha+e$ keeps the optimum bracketed. If that endpoint changes, $B_{new}\le hi$; if clamping leaves it unchanged, $B_{new}\le\alpha+e\le hi+e$. Thus storing the new vector still gives $B\le hi+2e$. At `HIGHER`, $\alpha<\mathrm{OPT}$, so the lower-endpoint update preserves the bracket and changes no stored certificate. [given, F1, F2, algebra]

2.1 With $W=hi-lo$, either update gives $W_{new}\le W/2+e$. Induction gives $W_j\le2e+2R2^{-j}$. At $j=L$ this is at most $\varepsilon_0/4+\varepsilon_0/32<\varepsilon_0/2$. While the stopping test fails, $W>4e$, so $W_{new}\le W/2+e<3W/4<W$; clamping cannot prevent contraction. Hence every good execution reaches the stopping width within the fixed cap without refinement. At exit the stored vector remains feasible and $B-\mathrm{OPT}\le hi-lo+2e\le3\varepsilon_0/4<\varepsilon_0\le\varepsilon$. Since $\varepsilon_0>\varepsilon/2$, its call cap is $O(1+\log(R/\varepsilon))$. This includes the case of only `HIGHER` midpoint responses, using the initial certificate. [given, F2, step 1.1, algebra]

3.1 Condition on each reached history before the first bad complete threshold call. Until then steps 1.1–2.1 show there are at most $L+1$ calls and no refinements. Summing their conditional probabilities gives first-bad-call probability at most $(L+1)\delta/(L+1)=\delta$. Additional operations on an already bad path do not add a second probability for that same bad event. This is valid without independence. A declared unresolved numerical failure is not interpreted as a threshold exclusion; the final high-probability conclusion requires the supplied complete oracle's good-event contract. [given, step 1.1, step 2.1, algebra]

4.1 Since $\|C\|\le1$, $I-C\succeq0$ and $e_1$ is dual feasible with objective $R$. For $\varepsilon\ge2R$, [F1] gives $R\le\mathrm{OPT}+\varepsilon$. For $R=0$, the identity constraint and nonnegative eigenvalues force every feasible primal $X$ to be zero; weak duality and the feasible zero-objective vector $e_1$ give optimum zero directly. For dimension zero, primal nonemptiness implies $b_j\ge0$, so the zero vector is feasible and optimal. These branches establish the remaining cases without using the positive-$R$ formulas. [given, F1, F3, algebra] ∎
