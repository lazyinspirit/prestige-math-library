---
id: thm-riemann-stieltjes-integration-by-parts
kind: theorem
title: "Riemann-Stieltjes integration by parts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       lem-riemann-stieltjes-integral-unique,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       lem-abel-summation-by-parts]
justified_by: []
aliases: []
landmark: true
short: "Stieltjes integration by parts"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.22"
      url: "https://archive.org/details/principlesofmath00rudi"
    - title: "William F. Trench, Introduction to Real Analysis, Exercise 3.2.8"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

The integral $\int_a^b f\,d\alpha$ exists if and only if
$\int_a^b\alpha\,df$ exists. When either exists,

$$\int_a^b f\,d\alpha+\int_a^b\alpha\,df=f(b)\alpha(b)-f(a)\alpha(a).$$

## Facts & Assumptions

**Given:** Functions $f,\alpha:[a,b]\to\mathbb R$.

[L1] Riemann-Stieltjes integrability is the common mesh limit of tagged sums ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] A Stieltjes integral is unique ([[lem-riemann-stieltjes-integral-unique]]).

[L3] Partitions and endpoint tags are permitted tagged partitions ([[def-partition-and-refinement]]).

[L4] Finite summation by parts exchanges a sequence and its successive increments ([[lem-abel-summation-by-parts]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 For a partition $P=(n,t)$, finite summation by parts gives the exact identity $\sum_{i<n}f(t_i)(\alpha(t_{i+1})-\alpha(t_i))+\sum_{i<n}\alpha(t_{i+1})(f(t_{i+1})-f(t_i))=f(b)\alpha(b)-f(a)\alpha(a)$. [L3, L4]

2.1 If $\int f\,d\alpha$ exists, its left-endpoint sums converge. Step 1.1 therefore makes the complementary right-endpoint sums converge to the endpoint product minus that integral. Replacing right-endpoint tags by arbitrary tags changes the complementary sum by a quantity that tends to $0$ under the same mesh criterion, so $\int\alpha\,df$ exists with the stated value. [step 1.1, L1, L2]

3.1 Exchanging $f$ and $\alpha$ proves the converse. Adding the two values yields the displayed formula, including the singleton and reversed-orientation cases. [step 1.1, step 2.1, L1, L2] ∎

