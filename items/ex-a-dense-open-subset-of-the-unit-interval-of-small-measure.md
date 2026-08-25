---
id: ex-a-dense-open-subset-of-the-unit-interval-of-small-measure
kind: example
title: "For every positive $\\varepsilon$ there is a dense open subset of $(0,1)$ of Lebesgue measure below $\\varepsilon$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-finite-and-countable-subadditivity-of-measures,
       thm-rationals-countable,
       thm-geometric-series,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice. For every real $\varepsilon > 0$ there is
an open set $U \subseteq (0,1)$ such that $U$ is dense in $(0,1)$ and
$\lambda_1(U) < \varepsilon$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a real $\varepsilon > 0$.

[L1] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F1] Let $\mu$ be a measure and let $(E_k)_{k \in \mathbb N}$ be measurable. Then $\mu(\bigcup_k E_k) \le \sum_k \mu(E_k)$ ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F2] The rationals are countably infinite ([[thm-rationals-countable]]).

[F3] If $|r| < 1$ then the series $\sum r^k$ converges ([[thm-geometric-series]]).

## Verification

**Proof technique:** direct.

1.1 Since the rationals in $(0,1)$ are countably infinite, fix an enumeration $(q_k)_{k \in \mathbb N}$ of $\mathbb{Q} \cap (0,1)$. [F2, choose]

2.1 Put $U := \bigcup_{k \in \mathbb N} \big((q_k - \varepsilon 2^{-k-3},\, q_k + \varepsilon 2^{-k-3}) \cap (0,1)\big)$. This set is open, and [L1], [F1] and [F3] give $\lambda_1(U) \le \sum_{k=0}^{\infty} \varepsilon 2^{-k-2} = \varepsilon/2 < \varepsilon$. [step 1.1, L1, F1, F3, algebra]

3.1 Every rational point of $(0,1)$ lies in $U$, so $U$ is dense in $(0,1)$. [step 1.1, step 2.1] ∎
