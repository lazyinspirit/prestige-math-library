---
id: cor-cauchy-schwarz-inequality-for-l-two
kind: corollary
title: "Cauchy-Schwarz inequality for $L^2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-holder-inequality-for-integrals, thm-equality-case-in-holder-inequality]
proof_strategy: "Specialize Holder to p = q = 2, and inherit the equality clause from the strict-exponent equality theorem."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7A"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

If $f,g\in\mathcal L^2(\mu)$, then

$$\int |fg|\,d\mu\le\|f\|_2\|g\|_2.$$

Equality holds if and only if at least one of $f,g$ is zero almost everywhere,
or there is a constant $c>0$ with

$$|f|^2=c\,|g|^2\qquad\mu\text{-almost everywhere}.$$

## Facts & Assumptions

**Given:** Functions $f,g\in\mathcal L^2(\mu)$.

[L1] Holder's inequality holds for conjugate exponents
([[thm-holder-inequality-for-integrals]]).

[L2] The strict-exponent equality criterion for Holder has already been proved
([[thm-equality-case-in-holder-inequality]]).

## Proof

**Proof technique:** Specialize Holder to $p=q=2$, and inherit the equality
clause from the strict-exponent equality theorem.

1.1 The exponent $2$ is conjugate to itself, so [L1] with $p=q=2$ gives [L1]
$$\int |fg|\,d\mu\le\|f\|_2\|g\|_2.$$

2.1 Because $2>1$, the equality clause is exactly the specialization of [L2] to [L2, step 1.1]
$p=q=2$. ∎
