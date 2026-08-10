---
id: thm-monotone-change-of-variable-for-riemann-integrals
kind: theorem
title: "Monotone change of variable for Riemann-integrable functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums,
       def-partition-and-refinement, def-finite-sum,
       lem-finite-sum-laws, def-bounded-set, def-monotone-function,
       def-derivative, cor-mean-value-theorem,
       thm-darboux-equals-riemann,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 7.5.1"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $\phi:[c,d]\to[a,b]$ be a monotone surjection, differentiable on $[c,d]$ in the one-sided endpoint sense, with Riemann-integrable derivative. For every bounded $f:[a,b]\to\mathbb R$,
$$f\text{ is Riemann integrable}
\quad\Longleftrightarrow\quad
(f\circ\phi)|\phi'|\text{ is Riemann integrable},$$
and, when these conditions hold,
$$\int_a^b f(x)\,dx=\int_c^d f(\phi(t))|\phi'(t)|\,dt.$$
Flat subintervals of $\phi$ are allowed.

## Facts & Assumptions

**Given:** The monotone differentiable surjection $\phi$ with integrable derivative and a bounded $f$.

[L1] On every subinterval, the mean value theorem writes $\Delta\phi=\phi'(\eta)\Delta t$ ([[cor-mean-value-theorem]]).

[L2] Darboux integrability is equivalent to arbitrarily small upper-minus-lower sums ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] Products and absolute values of Riemann-integrable functions are integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L4] Darboux integrals agree with tagged Riemann-sum limits ([[thm-darboux-equals-riemann]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $\phi$ is nondecreasing. Transport a partition of $[c,d]$ through $\phi$ and delete repeated image points coming from flat subintervals. On each nonflat interval, [L1] turns the image length into $\phi'(\eta_i)\Delta t_i$; on a flat interval both the image length and $\phi'$ vanish. [L1]

1.2 Refine simultaneously by a partition making the Darboux oscillation sum of $f$ small on $[a,b]$ and one making that of the integrable $\phi'$ small on $[c,d]$. Boundedness of $f$, step 1.1, and finite-sum estimates show that the difference between corresponding upper and lower sums is bounded by the sum of those two arbitrarily small oscillation errors. This proves both directions of the integrability equivalence; the same estimate for tagged sums shows that their limits agree. [step 1.1, L2, L3, L4]

2.1 If $\phi$ is nonincreasing, reverse the source orientation and apply steps 1.1–1.2 to the resulting nondecreasing map. The sign reversal is exactly removed by $|\phi'|$ and the oriented-integral convention. [given] ∎
