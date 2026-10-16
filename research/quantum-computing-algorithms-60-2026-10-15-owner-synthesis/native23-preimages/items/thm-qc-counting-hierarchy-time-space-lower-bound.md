---
id: thm-qc-counting-hierarchy-time-space-lower-bound
kind: theorem
title: "Counting Hierarchy Time Space Lower Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - thm-qc-bqtisp-to-ptisp-simulation
  - thm-qc-unbounded-error-counting-time-space-alternative
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computation"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

In the VMW random-access quantum Turing model, for every real $d$ and $\varepsilon>0$ there exists $c>1$ such that either $\mathrm{MajMajSAT}$ has no bounded-error algorithm of time $O(n^c)$, or $\mathrm{MajSAT}$ has no bounded-error algorithm using both time $O(n^d)$ and space $O(n^{1-\varepsilon})$. Consequently, for every $\varepsilon>0$, $\mathrm{MajMajSAT}$ has no bounded-error algorithm with time $n^{1+o(1)}$ and space $O(n^{1-\varepsilon})$.

## Facts & Assumptions

**Given:** the exact VMW quantum and classical random-access profiles, the at-least-half definitions of $\mathrm{MajSAT}$ and $\mathrm{MajMajSAT}$, and the stated time/space resource bounds.

[F1] [[thm-qc-bqtisp-to-ptisp-simulation]] is the intended bounded-error to unbounded-error simulation in the VMW random-access profile. Its path-count construction is drafted, but its finite-bit Solovay–Kitaev cost proof remains unresolved.

[F2] [[thm-qc-unbounded-error-counting-time-space-alternative]] proves the sequential-profile Allender alternative, conditional on its local arithmetic and majority-formula suppliers.

[F3] [[def-qc-unbounded-error-time-space-counting-model]] declares sequential and VMW random-access classical profiles as distinct classes.

[A1] No supplier currently converts the VMW random-access unbounded-error time/space bounds in [F1] to the sequential profile required by [F2], or proves [F2] directly for the VMW profile. The proposed interface is `lem-qc-vmw-random-access-to-sequential-prtisp` (or a direct VMW-profile Allender alternative); it must preserve a polynomial time exponent and a strictly sublinear space exponent.

## Proof

1.1 If a bounded-error VMW quantum algorithm has time $t$ and space $s$, [F1] would give a VMW-profile unbounded-error algorithm with time $O(t\,\mathrm{polylog}\,t)$ and space $O(s+\mathrm{polylog}\,t)$, preserving the strict side of the $1/2$ threshold. For polynomial $t=n^r$ this overhead is absorbed into $n^{r+\gamma}$ for every fixed $\gamma>0$; if $s=O(n^{1-\varepsilon})$, choose $0<\varepsilon'<\min(\varepsilon,1)$ so $s+\mathrm{polylog}\,n=O(n^{1-\varepsilon'})$. This is the exact resource translation supplied by [F1], conditional on its proof obligations. [F1, given, algebra]

1.2 The alternative [F2] applies only to sequential-profile algorithms, whereas step 1.1 yields a VMW random-access algorithm. A naive sequential scan may spend $\Theta(n)$ transitions on each input query, and the VMW machine also permits work-head jumps; the present dependencies prove no bound that absorbs these costs in both time and space. Therefore [A1] is needed before the quantum algorithms can be inserted into [F2]. The stated disjunction remains a theorem target, not an enabled inference or an open-problem reformulation. [F2, F3, A1, step 1.1]

2.1 If the disjunction were established, its corollary would follow as follows. Fix $\varepsilon>0$ and choose any $d>1$. An algorithm for $\mathrm{MajMajSAT}$ with time $n^{1+o(1)}$ and space $O(n^{1-\varepsilon})$ would, for every fixed $c>1$, eventually run in time $O(n^c)$, so the first alternative would fail. From a $\mathrm{MajSAT}$ formula make a $\mathrm{MajMajSAT}$ formula by adding one unused outer variable; every outer assignment then has the same inner majority value. Running the assumed algorithm on this padded instance gives a $\mathrm{MajSAT}$ algorithm with the same time and space up to constant input-length factors, hence within $O(n^d)$ time and $O(n^{1-\varepsilon'})$ space for some $0<\varepsilon'<\min(\varepsilon,1)$. Applying the disjunction with parameters $d,\varepsilon'$ makes the second alternative fail as well, a contradiction. This corollary transfer is conditional on the missing access-profile bridge in [A1]. [F2, F3, A1, step 1.2, construct, contradiction]
