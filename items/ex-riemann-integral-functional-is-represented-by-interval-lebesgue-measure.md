---
id: ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure
kind: example
title: "The Riemann integral functional is represented by Lebesgue measure on an interval"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-lebesgue-measure-is-a-radon-measure-on-rn, lem-compactly-supported-riemann-integral-is-well-defined, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, lem-relative-compact-closed-sets-have-a-positive-distance-gap, lem-distance-to-set-is-lipschitz]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $a<b$ and define
$L:C([a,b])\to\mathbb R$ by the Riemann integral
$L(f)=\int_a^bf(x)\,dx$. Then $L$ is positive and its RMK representing measure is Lebesgue measure restricted to $[a,b]$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; continuous functions on $[a,b]$ are Riemann and Lebesgue integrable with equal integrals.

## Verification

**Proof technique:** direct.

1.1 Linearity of the Riemann integral makes $L$ linear, and $f\ge0$ implies $L(f)\ge0$. Since $[a,b]$ is compact, $C_c([a,b])=C([a,b])$. [given]

1.2 Under the stated choice hypothesis, Lebesgue measure is regular on [given]
$\mathbb R$; its restriction to the closed subspace $[a,b]$ is finite and Radon. For every $f\in C([a,b])$, equality of the Riemann and Lebesgue integrals gives $L(f)=\int_{[a,b]}f\,d(\lambda|_{[a,b]})$. Thus $\lambda|_{[a,b]}$ is a Radon representing measure. [given]

2.1 To prove uniqueness without a general LCH cutoff, let $\rho$ be any other Radon representing measure on $[a,b]$. If $K\subseteq O\subseteq[a,b]$ with $K$ compact and $O$ relatively open, [[lem-relative-compact-closed-sets-have-a-positive-distance-gap]] gives a positive distance between nonempty $K$ and the closed set $[a,b]\setminus O$; when the latter is empty use the constant function $1$, and when $K$ is empty the comparison is trivial. Choose a smaller $\delta>0$. The function $u(x)=\max\{0,1-d(x,K)/\delta\}$ is continuous by [[lem-distance-to-set-is-lipschitz]], equals $1$ on $K$, and vanishes outside $O$. Equality of the two representing integrals therefore gives $\lambda(K)\le\int u\,d\lambda=\int u\,d\rho\le\rho(O)$; symmetry gives $\rho(K)\le\lambda(O)$. Outer regularity yields equality on compact sets, inner regularity then equality on opens, and outer regularity yields equality on every Borel set. Thus $\rho=\lambda|_{[a,b]}$. [step 1.2, given] ∎
