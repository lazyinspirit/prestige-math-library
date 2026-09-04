---
id: rem-general-inequalities-restrict-to-the-published-finite-ones
kind: remark
title: "The general inequalities compare cleanly with the published finite ones"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-markov-inequality-for-random-variables, cor-chebyshev-inequality-for-random-variables, cor-cauchy-schwarz-for-random-variables, cor-second-moment-positive-probability-bound, thm-markov-inequality, thm-chebyshev-inequality, lem-cauchy-schwarz-for-finite-random-variables, thm-finite-second-moment-lower-bound]
verification:
  precheck: n/a
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

The probability-space inequalities above recover the published finite statements
exactly in the Markov, Chebyshev, and Cauchy-Schwarz cases, and they isolate
the precise extra nonnegativity needed for the positive-probability bound.

- [[cor-markov-inequality-for-random-variables]] restricts to
  [[thm-markov-inequality]].
- [[cor-chebyshev-inequality-for-random-variables]] restricts to
  [[thm-chebyshev-inequality]].
- [[cor-cauchy-schwarz-for-random-variables]] restricts to
  [[lem-cauchy-schwarz-for-finite-random-variables]].
- [[cor-second-moment-positive-probability-bound]] gives the nonnegative
  specialization of [[thm-finite-second-moment-lower-bound]], with
  $\mathbb P(X>0)$ in place of $\mathbb P(X\ne0)$.

The earlier finite proofs remain the canonical finite arguments. The present
page packages them as consequences of the general integral theory on a
probability space.
