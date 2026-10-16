---
id: alg-qa-20-suzuki-recursive-product-formula
kind: algorithm
title: Finite higher-order Suzuki product formula
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-20-symmetric-second-order-formula
  - def-qa-20-term-list-access-model
  - def-qc-circuit-denotational-semantics
  - thm-nth-roots-exist
  - lem-power-monotone
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed p. 135: higher-order product-formula asymptotics; no recursive cancellation proof is supplied."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order error scaling and higher-order context; Chapter 9, Exercise 4, printed p. 79: the second-order local-error fact. No higher-order recursive proof is supplied."
---

## Definition

**Input:** Integers $k,r\ge1$, a finite time code $t$ in the expression language of [[def-qa-20-term-list-access-model]], and a finite term-list access input.

**Admissible conditions:** If $t\ne0$, for every term occurrence $e^{-i c_\nu tH_{j_\nu}/r}$ in the fully expanded segment, the access input supports that exact signed time code for term $H_{j_\nu}$ and declares its implementation, per-call costs, and any approximation-error record. The call may be supplied directly at the signed code or through separately declared inverse or time-reversed access with its own cost and error record. This condition includes the half-time calls in the base formula and every signed central call in the recursion.

**Output:** The finite product circuit and its declared query, gate, ancilla, coefficient-bit, description-bit, and classical-generation costs.

**Instructions:**

1. Compare the exact value of the supplied time code with $0$. If it is $0$, return the identity. Otherwise begin with $S_2(h)$ from [[def-qa-20-symmetric-second-order-formula]], where $h=t/r$.
2. For each $j=2,\ldots,k$, let $\rho_{2j-1}$ be the unique nonnegative root of $x^{2j-1}=4$ from [[thm-nth-roots-exist]]; it is positive since $0^{2j-1}\ne4$. Put $p_j=(4-\rho_{2j-1})^{-1}$, and recursively replace the current even-order formula $S_{2j-2}(h)$ by
$$S_{2j}(h):=S_{2j-2}(p_jh)^2S_{2j-2}((1-4p_j)h)S_{2j-2}(p_jh)^2.$$
3. Recursively expand one segment until only the term exponentials remain, retaining their displayed operator order. For exactly $r$ repetitions, execute the factors of each expanded segment chronologically in the reverse of their displayed operator order. Since later executed gates multiply on the left by [[def-qc-circuit-denotational-semantics]], the exact-call operator is $S_{2k}(t/r)^r$. If calls are approximate, execute their supplied unitary implementations in that same chronological order and retain the per-call error records; the displayed $S_{2k}$ remains the ideal exact-call word.
4. For each central coefficient $1-4p_j$, use the implementation declared for that actual signed call time. For $q=2j-1\ge3$, let $\rho_q$ be the positive root of $\rho_q^q=4$. It is positive, and $\rho_q<4$: otherwise monotonicity of positive integer powers ([[lem-power-monotone]]) would give $\rho_q^q\ge4^q>4$, a contradiction. Hence $4-\rho_q>0$, $p_j=(4-\rho_q)^{-1}>1/4$, and $1-4p_j<0$. Thus the central coefficient is negative; the actual call time is this coefficient times the current recursive time argument. Use the resulting signed code, which may be positive or negative, with its directly supported implementation or separately declared inverse or time-reversed access. Charge exact coefficient descriptions and classical generation separately.

The recursion is finite because $j$ increases only from $2$ through $k$, and each expansion makes five calls to the preceding formula. No asymptotic error or cost guarantee is part of this procedure definition.
