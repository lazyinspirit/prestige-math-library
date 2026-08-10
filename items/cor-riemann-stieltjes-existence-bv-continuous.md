---
id: cor-riemann-stieltjes-existence-bv-continuous
kind: corollary
title: "A bounded-variation integrand is Riemann-Stieltjes integrable against every continuous integrator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-stieltjes-existence-continuous-bv,
       thm-riemann-stieltjes-integration-by-parts,
       def-bounded-variation-and-total-variation, def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.9"
      url: "https://archive.org/details/principlesofmath00rudi"
    - title: "William F. Trench, Introduction to Real Analysis, Exercise 3.2.10"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f:[a,b]\to\mathbb R$ has bounded variation and
$\alpha:[a,b]\to\mathbb R$ is continuous, then $\int_a^b f\,d\alpha$ exists.

## Facts & Assumptions

**Given:** A BV function $f$ and a continuous function $\alpha$ on $[a,b]$.

[L1] A continuous integrand is Stieltjes integrable against a BV integrator ([[thm-riemann-stieltjes-existence-continuous-bv]]).

[L2] Existence of $\int\alpha\,df$ is equivalent to existence of $\int f\,d\alpha$ ([[thm-riemann-stieltjes-integration-by-parts]]).

[L3] Bounded variation and continuity are those of [[def-bounded-variation-and-total-variation]] and [[def-continuity-real]].

## Proof

**Proof technique:** direct.

1.1 Since $\alpha$ is continuous and $f$ is BV, [L1] gives the integral $\int_a^b\alpha\,df$. [L1, L3]

2.1 Integration by parts [L2] then gives existence of $\int_a^b f\,d\alpha$ and its value $f(b)\alpha(b)-f(a)\alpha(a)-\int_a^b\alpha\,df$. [step 1.1, L2] ∎

