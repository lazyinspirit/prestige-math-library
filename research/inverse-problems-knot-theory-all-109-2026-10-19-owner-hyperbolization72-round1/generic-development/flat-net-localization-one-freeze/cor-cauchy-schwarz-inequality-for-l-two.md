---
id: cor-cauchy-schwarz-inequality-for-l-two
kind: corollary
title: "Cauchy-Schwarz inequality for $L^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-holder-inequality-for-integrals, thm-equality-case-in-holder-inequality]
proof_strategy: "Specialize Holder to p = q = 2, and inherit the equality clause from the strict-exponent equality theorem."
verification:
  repair: research/mathematical-statistics-foundations-37-owner-s3-polish-cor-cauchy-schwarz-inequality-for-l-two-repair.json
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7A"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

## Statement

If $f,g\in\mathcal L^2(\mu)$, then

$$\int |fg|\,d\mu\le\|f\|_2\|g\|_2.$$

Equality holds if and only if at least one of $f,g$ is zero almost everywhere,
or there is a constant $c>0$ with

$$|f|^2=c\,|g|^2\qquad\mu\text{-almost everywhere}.$$

## Facts & Assumptions

**Given:** Functions $f,g\in\mathcal L^2(\mu)$.

[L1] Holder's inequality holds for conjugate exponents ([[thm-holder-inequality-for-integrals]]).

[L2] The strict-exponent equality criterion for Holder has already been proved ([[thm-equality-case-in-holder-inequality]]).

## Proof

**Proof technique:** Specialize Holder to $p=q=2$, and inherit the equality clause from the strict-exponent equality theorem.

1.1 The exponent $2$ is conjugate to itself, so Holder’s inequality with $p=q=2$ gives $$\int |fg|\,d\mu\le\|f\|_2\|g\|_2.$$ [L1]

2.1 Because $2>1$, the strict-exponent equality criterion at $p=q=2$ says that equality in step 1.1 holds exactly when at least one of $f,g$ is zero almost everywhere, or $|f|^2=c|g|^2$ almost everywhere for some constant $c>0$. These are precisely the alternatives in the Statement. [L2, step 1.1] ∎

