---
id: prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite
kind: proposition
title: "The Radon-Nikodym derivative is integrable exactly when the absolutely continuous part is finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure, def-radon-nikodym-derivative, def-integrable-real-and-complex-functions-and-their-integrals, def-total-variation-of-a-signed-or-complex-measure, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $\mu$ be a sigma-finite positive measure and let $\nu_a$ be the absolutely
continuous part of a signed measure under the common finite-exhaustion
hypothesis relative to $\mu$. Then
$$\frac{d\nu_a}{d\mu}\in L^1(\mu)\qquad\Longleftrightarrow\qquad \nu_a\text{ is finite.}$$

## Facts & Assumptions

**Given:** The absolutely continuous part $\nu_a$ of a measure relative to $\mu$.

[L1] Integrability means finiteness of the integral of the absolute value. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L2] A representative of $d\nu_a/d\mu$ recovers the measurable-set values of $\nu_a$. ([[def-radon-nikodym-derivative]])

[L3] For an absolutely continuous finite signed or finite complex measure, the total variation has density $|d\nu_a/d\mu|$. ([[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]])

[L4] For a finite signed measure,
$|\nu_a|(X)=\nu_a^+(X)+\nu_a^-(X)$
([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]).

[L5] Total variation is the supremum of absolute-value sums over measurable
partitions ([[def-total-variation-of-a-signed-or-complex-measure]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be a representative of $d\nu_a/d\mu$. If $f\in L^1(\mu)$, then for every countable measurable partition $(E_j)$ of $X$, [L2] gives $$\sum_j|\nu_a(E_j)|\le\sum_j\int_{E_j}|f|\,d\mu=\int_X|f|\,d\mu<+\infty.$$ Taking the supremum over partitions in [L5] yields $|\nu_a|(X)<+\infty$, so $\nu_a$ is finite. [L1, L2, L5, given, algebra]

1.2 Conversely, assume $\nu_a$ is finite. By [L4], this is equivalent to $|\nu_a|(X)<+\infty$. [L4, given]

2.1 Since $\nu_a$ is finite and absolutely continuous, [L3] gives $$ |\nu_a|(X)=\int_X\left|\frac{d\nu_a}{d\mu}\right|\,d\mu<+\infty. $$ Hence [L1] shows that $d\nu_a/d\mu\in L^1(\mu)$. [L1, L3, step 1.2]

3.1 Step 1.1 proves $d\nu_a/d\mu\in L^1(\mu)\Rightarrow \nu_a$ finite, and steps 1.2-2.1 prove the converse. [step 1.1, step 1.2, step 2.1] ∎
