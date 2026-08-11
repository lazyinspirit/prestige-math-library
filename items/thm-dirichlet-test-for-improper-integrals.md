---
id: thm-dirichlet-test-for-improper-integrals
kind: theorem
title: "Dirichlet's test for improper integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cauchy-criterion-for-improper-integrals,
       thm-second-mean-value-theorem-for-integrals,
       thm-additivity-over-subintervals, thm-integration-by-parts,
       thm-ftc-first-part,
       thm-comparison-test-for-improper-integrals,
       thm-absolute-improper-convergence-implies-convergence,
       def-absolute-and-conditional-improper-convergence,
       def-monotone-function, def-limits-at-infinity,
       def-darboux-integral, def-continuity-real,
       lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 3.4.10"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f$ be locally Riemann integrable on $[a,\infty)$ and suppose its truncation primitive $F(x)=\int_a^x f$ is bounded. Each of the following conditions implies convergence of $\int_a^\infty f(x)g(x)\,dx$:

1. $g$ is nonnegative, nonincreasing, and $g(x)\to0$.
2. $f$ is continuous, $g$ is differentiable with $g'$ Riemann integrable on every compact subinterval, $g(x)\to0$, and $\int_a^\infty|g'(x)|\,dx$ converges. Local integrability of $g'$ is a hypothesis and not a consequence of the last one: convergence of $\int_a^\infty|g'|$ presupposes only that $|g'|$ is integrable on each compact subinterval, and a bounded derivative need not be Riemann integrable.

The reflected statements hold at $-\infty$ and at finite singular endpoints, with monotonicity directed toward the singular end.

## Facts & Assumptions

**Given:** A bounded truncation primitive $F$ and one of the two multiplier hypotheses.

[L1] Bonnet's second mean value theorem represents $\int_u^vfg$ using endpoint values of a monotone $g$ and partial integrals of $f$ ([[thm-second-mean-value-theorem-for-integrals]]).

[L2] The improper Cauchy criterion reduces convergence to small remote tail integrals ([[thm-cauchy-criterion-for-improper-integrals]]).

[L3] Proper integration by parts gives $\int_u^vfg=[Fg]_u^v-\int_u^vFg'$ when $F'=f$ ([[thm-integration-by-parts]]).

[L4] A bounded factor times an absolutely integrable function is absolutely integrable by comparison ([[thm-comparison-test-for-improper-integrals]], [[thm-absolute-improper-convergence-implies-convergence]]).

[L5] If $f$ is integrable on $[a,b]$ and continuous at $c$, then its integral function $F$ satisfies $F'(c)=f(c)$; in particular an $f$ continuous on the whole of $[a,b]$ has $F$ as a primitive there ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** cases.

1.1 Choose $M$ with $|F|\le M$. In clause 1, apply [L1] on $[u,v]$. Every partial integral $\int_u^xf=F(x)-F(u)$ has absolute value at most $2M$, so [L1, L2, assume-case first]
$$\left|\int_u^vfg\right|\le2M(g(u)+g(v))\le4Mg(u).$$
This tends to zero as $u\to\infty$, and [L2] proves convergence.

1.2 In clause 2 $f$ is continuous, hence integrable on every $[u,v]\subseteq[a,\infty)$, so [L5] gives $F'=f$ there — the hypothesis [L3] requires and which boundedness of $F$ does not supply. With $g$ differentiable and $g'$ integrable on $[u,v]$, [L3] gives the integration-by-parts identity. The boundary term $F(R)g(R)$ tends to zero because $F$ is bounded and $g(R)\to0$. Also $|Fg'|\le M|g'|$, so [L4] makes $\int Fg'$ converge. Passing $R\to\infty$ proves convergence of $\int fg$. [L3, L4, L5, assume-case second]

2.1 The two clauses are exhausted by steps 1.1–1.2. Reversing orientation proves the $-\infty$ case. At a finite endpoint, use a primitive based at a fixed nonsingular point and take the corresponding one-sided limits; the same estimates are unchanged. [step 1.1, step 1.2, cases-exhaustive] ∎
