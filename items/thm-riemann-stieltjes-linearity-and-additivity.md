---
id: thm-riemann-stieltjes-linearity-and-additivity
kind: theorem
title: "Linearity and interval additivity of the Riemann–Stieltjes integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       lem-riemann-stieltjes-integral-unique,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       def-continuity-real, def-oriented-integral,
       def-bounded-variation-and-total-variation,
       thm-cauchy-criterion-via-lub]
justified_by: []
aliases: []
landmark: true
short: "Stieltjes linearity and additivity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.12"
      url: "https://archive.org/details/principlesofmath00rudi"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Whenever the integrals on the right exist,

$$\int_a^b(uf+vg)\,d\alpha=u\int_a^b f\,d\alpha+v\int_a^b g\,d\alpha,$$
$$\int_a^b f\,d(u\alpha+v\beta)=u\int_a^b f\,d\alpha+v\int_a^b f\,d\beta.$$

Let $a\le c\le b$, suppose $\alpha$ has bounded variation, and suppose $f$ is continuous at $c$. Then integrability on
$[a,b]$ is equivalent to integrability on both $[a,c]$ and $[c,b]$, and

$$\int_a^b f\,d\alpha=\int_a^c f\,d\alpha+\int_c^b f\,d\alpha.$$

## Facts & Assumptions

**Given:** Functions for which the displayed integrals are defined, scalars $u,v$, and for additivity a BV integrator $\alpha$ and a cut $c$ where $f$ is continuous.

[L1] Stieltjes integrability is convergence of all sufficiently fine tagged sums ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] Such a limit is unique ([[lem-riemann-stieltjes-integral-unique]]).

[L3] Partitions can be inserted at $c$ and spliced across $c$ ([[def-partition-and-refinement]]).

[L4] Finite sums distribute and split at an index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Continuity at $c$ makes $f(x)$ close to $f(c)$ when $x$ is close to $c$ ([[def-continuity-real]]).

[L6] Reversal and singleton conventions are those of the oriented integral ([[def-oriented-integral]]).

[L7] The sum of the absolute integrator increments over any partition is at most $\operatorname{Var}_{[a,b]}(\alpha)$ ([[def-bounded-variation-and-total-variation]]).

[L8] Every Cauchy sequence of real sums has a finite real limit ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 Each tagged sum is exactly linear in $f$ and in $\alpha$, by distribution in the finite sum. Passing to mesh limits and using uniqueness proves both linearity formulas. [L1, L2, L4]

1.2 For a partition containing $c$, its Stieltjes sum splits exactly into the sums on the two subintervals. Inserting $c$ into a fine partition changes only the interval containing $c$. Direct subtraction bounds the difference, for any choices of the old and new tags, by the oscillation of $f$ near $c$ times the sum of the relevant absolute increments of $\alpha$, hence by that oscillation times $\operatorname{Var}_{[a,b]}(\alpha)$. Continuity of $f$ at $c$ makes this error tend to zero with the mesh. [L1, L3, L4, L5, L7]

2.1 If the whole-interval integral exists, take any two sufficiently fine sums on $[a,c]$ and splice each with the same sufficiently fine sum on $[c,b]$. The two whole-interval sums are close, so their common right part cancels and the left sums are Cauchy. Choose uniform left-hand sums with mesh tending to zero; they form a Cauchy sequence and have a limit by [L8]. Every arbitrary sufficiently fine left-hand sum is close to a sufficiently late uniform one, so the entire left-hand mesh family has that limit. The symmetric argument gives the right integral. Conversely, if both restricted integrals exist, splice their fine sums and use step 1.2 to compare with arbitrary whole-interval sums. The exact split gives the displayed value by [L2]. Endpoint cuts and reversed limits follow from [L6]. [step 1.2, L1, L2, L3, L6, L8] ∎
