---
id: ex-finite-range-private-selection
kind: example
title: Finite-range private selection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-differential-privacy-and-adjacency
  - def-exponential-mechanism-utility-sensitivity
  - alg-exponential-mechanism
  - thm-exponential-mechanism-privacy-and-utility
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Example

Let $U$ be a nonempty record universe, let $\mathcal D$ be its finite-support count databases with add/remove-one-occurrence adjacency, let $R=\{a,b\}$, and let $\varepsilon>0$. The constant utility $u(D,a)=1$, $u(D,b)=0$ has $\Delta_u=0$, so it is inadmissible for the positive-sensitivity exponential mechanism. Fix a possible record $u_*\in U$ and define $s(D)=1$ exactly when $D(u_*)>0$. Instead set $u(D,a)=1$ and $u(D,b)=1-s(D)$. Then $\Delta_u=1$, the mechanism is $(\varepsilon,0)$-differentially private, and it selects $a$ with probability
$$
\frac{e^{\varepsilon/2}}{e^{\varepsilon/2}+e^{\varepsilon(1-s(D))/2}}.
$$

## Example references

[[def-exponential-mechanism-utility-sensitivity|Positive global utility sensitivity]]

[[alg-exponential-mechanism|The finite-range mechanism and its normalized weights]]

[[thm-exponential-mechanism-privacy-and-utility|Privacy guarantee for the exponential mechanism]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §3.4, Definition 3.4 and Theorem 3.10, printed pp. 38–39.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §4.1, Proposition 4.2.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A nonempty record universe $U$, a possible record $u_*\in U$, two candidate outputs $a,b$, and $\varepsilon>0$.

[F1] [[def-differential-privacy-and-adjacency|Database adjacency]] adds or removes one record occurrence from a finite-support count function.

[F2] [[def-exponential-mechanism-utility-sensitivity|Global utility sensitivity]] is the attained maximum adjacent score difference over the finite output range.

[F3] [[alg-exponential-mechanism|Exponential-mechanism weights]] are $\exp(\varepsilon u(D,r)/(2\Delta_u))$, normalized by their finite positive sum, and require $\Delta_u>0$.

[F4] [[thm-exponential-mechanism-privacy-and-utility|Privacy theorem]] gives $(\varepsilon,0)$-DP under the stated positive-sensitivity hypotheses.

## Verification

1.1 For the first utility, every score is independent of $D$, so every adjacent-pair difference is zero and $\Delta_u=0$ by [F2]. This fails the positive-sensitivity hypothesis in [F3], so the algorithm is not defined for that utility. [F2, F3, given, algebra]

1.2 For the second utility, adding or removing a record other than $u_*$ leaves $s(D)$ unchanged; adding or removing $u_*$ changes it by at most one. The empty database and the database with one occurrence of $u_*$ are neighbors and change $s$ from zero to one. The score at $a$ is constant, and the score at $b$ changes by exactly the change in $s$, so the maximum adjacent score difference is attained and equals $\Delta_u=1$. [F1, F2, given, algebra]

2.1 With $\Delta_u=1$, the weights are $w_D(a)=e^{\varepsilon/2}$ and $w_D(b)=e^{\varepsilon(1-s(D))/2}$. Normalizing their sum gives the displayed selection probability. Since the range is finite nonempty and the sensitivity is positive, [F4] proves the privacy claim. [F3, F4, step 1.2, algebra] ∎
