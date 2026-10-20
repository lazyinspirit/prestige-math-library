---
id: ex-add-remove-noisy-count
kind: example
title: Add/remove noisy count
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-differential-privacy-and-adjacency
  - def-global-l1-sensitivity
  - alg-laplace-mechanism
  - thm-laplace-mechanism-privacy
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is inherited from the real Laplace probability law; the sensitivity calculation is choice-free.
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

Assume Countable Choice. Let $U$ be a nonempty record universe and let databases be finite-support count functions $D:U\to\mathbb N_0$, with neighbors formed by adding or removing one occurrence. Let $P:U\to\{0,1\}$ be a predicate satisfied by at least one possible record, and let $f(D)$ count the occurrences satisfying $P$. Then the global add/remove $L^1$ sensitivity of $f$ is $1$. For $\varepsilon>0$, releasing $f(D)+Z$ with $Z\sim\operatorname{Lap}(1/\varepsilon)$ is $(\varepsilon,0)$-differentially private.

## Example references

[[def-differential-privacy-and-adjacency|Finite-support record-count databases and add/remove adjacency]]

[[def-global-l1-sensitivity|Global L1 sensitivity]]

[[thm-laplace-mechanism-privacy|The Laplace mechanism privacy guarantee]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §3.3, printed pp. 33–37.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 7–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A predicate $P:U\to\{0,1\}$, a satisfying record $u_0\in U$, and $\varepsilon>0$.

[A1] [[def-countable-choice|Countable Choice]] is inherited from the real Laplace law; the count sensitivity proof uses no choice.

[F1] [[def-differential-privacy-and-adjacency|Neighboring databases]] differ by adding or removing one record occurrence.

[F2] [[def-global-l1-sensitivity|Global sensitivity]] is the attained maximum of adjacent query differences.

[F3] [[alg-laplace-mechanism|The scalar Laplace mechanism]] adds noise with scale $\Delta_1f/\varepsilon$ for $\Delta_1f>0$.

[F4] [[thm-laplace-mechanism-privacy|Laplace privacy theorem]] gives $(\varepsilon,0)$-DP for every finite-dimensional query of finite global $L^1$ sensitivity when $\varepsilon>0$.

## Verification

1.1 If $D'$ is obtained from $D$ by adding one occurrence of $u$, then $f(D')-f(D)=P(u)\in\{0,1\}$; removing one occurrence gives the negative of this change. Thus every adjacent difference has absolute value at most $1$. The empty database and the database containing only $u_0$ are neighbors and their counts differ by $1$, so the maximum is attained and $\Delta_1f=1$. [F1, F2, given, algebra]

2.1 By [F3], the scalar release uses scale $\Delta_1f/\varepsilon=1/\varepsilon$ and is exactly the stated noisy count. This query has finite dimension one and sensitivity one, so [F4] proves its $(\varepsilon,0)$ guarantee. [A1, F3, F4, step 1.1] ∎
