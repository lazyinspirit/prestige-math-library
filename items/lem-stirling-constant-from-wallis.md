---
id: lem-stirling-constant-from-wallis
kind: lemma
title: 'Wallis''s product determines the Stirling constant as $\sqrt{2\pi}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-stirling-formula-up-to-a-positive-constant, cor-central-binomial-coefficient-asymptotic-from-wallis, thm-binomial-closed-formula, thm-algebra-of-limits, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.3(g)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §6"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

The constant $C$ in the preceding asymptotic is $\sqrt{2\pi}$.

## Facts & Assumptions

**Given:** The positive constant $C$ from the preceding lemma.

[F1] There is a constant $C>0$ such that $n!\sim C\sqrt n(n/e)^n$ ([[lem-stirling-formula-up-to-a-positive-constant]]).

[F2] The Wallis consequence is $\binom{2n}{n}\sim4^n/\sqrt{\pi n}$ ([[cor-central-binomial-coefficient-asymptotic-from-wallis]]).

[F3] For $n\ge1$, $\binom{2n}{n}(n!)^2=(2n)!$, so $\binom{2n}{n}=(2n)!/(n!)^2$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Insert the two asymptotics of [F1] into the quotient [F3]. Cancellation gives $\binom{2n}{n}\sim(\sqrt2/C)4^n/\sqrt n$. [F1, F3, algebra]

2.1 Comparing the positive leading coefficient in step 1.1 with [F2] gives $\sqrt2/C=1/\sqrt\pi$. Since $C>0$, $C=\sqrt{2\pi}$. [step 1.1, F2, algebra] ∎
