---
id: ex-locally-integrable-density-functional-is-represented-by-g-dlambda
kind: example
title: "A locally integrable density functional is represented by g dlambda"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-second-countable-space, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, def-locally-integrable-function-on-r-n, def-measure-with-density, thm-lebesgue-measure-is-a-radon-measure-on-rn, cor-rn-is-locally-compact-and-sigma-compact, thm-rational-points-and-boxes-in-rn, cor-second-countable-lch-locally-finite-borel-measures-are-regular]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Example

Let $n\ge1$, assume the Axiom of Countable Choice, and let $g\ge0$ be locally
integrable on $\mathbb R^n$. Then
$L_g(f)=\int_{\mathbb R^n}fg\,d\lambda$ is a positive linear functional on $C_c(\mathbb R^n)$ represented by the Radon measure $g\,d\lambda$.

## Facts & Assumptions

**Given:** $n\ge1$, the Axiom of Countable Choice, and $g\ge0$ locally
integrable.

## Verification

**Proof technique:** direct.

1.1 If $f\in C_c$ has support $K$, then $\int|fg|\,d\lambda\le\|f\|_\infty\int_Kg\,d\lambda<\infty$. Hence $L_g$ is well defined and linear; it is positive because $g\ge0$. [given]

1.2 The density construction makes [given]
$\mu_g(E)=\int_Eg\,d\lambda$ a Borel measure. Every compact set is contained
in a ball, so local integrability makes $\mu_g$ finite on compact sets.
Moreover, $\mathbb R^n$ is LCH, and its rational open boxes form a countable
basis. The second-countable regularity theorem therefore makes $\mu_g$
regular, hence Radon. Its defining integral gives
$L_g(f)=\int f\,d\mu_g$, so RMK uniqueness identifies it as the representing
measure. [given] ∎
