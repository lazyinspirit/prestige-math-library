---
id: lem-second-moment-controls-tail-mass-and-number
kind: lemma
title: A second moment controls the discarded mass and number tails
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - thm-continuous-coagulation-fragmentation-moment-bounds
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the pointwise inequalities are integrated against a positive measure.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

For a positive measure $\mu$ with finite second moment and every $R>0$,
$$\int_{(R,\infty)}x\,\mu(dx)\le\frac{M_2(\mu)}R,\qquad \mu((R,\infty))\le\frac{M_1(\mu)}R.$$
In particular, for the bounded-kernel solution of [[thm-continuous-coagulation-fragmentation-moment-bounds]], these tails are uniform on every finite time interval after substituting the theorem's mass and second-moment bounds.

## Facts & Assumptions

**Given:** A positive measure and the moment definitions on $E=[a,\infty)$.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the state measure is positive.

[F2] [[thm-continuous-coagulation-fragmentation-moment-bounds]]: on each finite interval, $M_1$ is constant and $M_2(t)\le M_{2,0}+K_*M_1^2t$.

## Proof

1.1 On $(R,\infty)$, $x\le x^2/R$. Integrating this pointwise inequality against the positive measure gives $\int_{(R,\infty)}x\,d\mu\le M_2(\mu)/R$. [given, F1]

2.1 On the same set, $1\le x/R$. Integration gives $\mu((R,\infty))\le M_1(\mu)/R$. Applying [F2] makes both right-hand sides uniform for $t$ in a fixed finite interval. [given, F1, F2, algebra] ∎

