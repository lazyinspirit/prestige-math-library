---
id: def-riemann-xi-function
kind: definition
title: "The Riemann xi function $\\xi(s)=\\tfrac12 s(s-1)\\Lambda(s)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-completed-riemann-zeta-function, thm-completed-riemann-zeta-functional-equation]
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Assume countable choice.

The completed function extends meromorphically with simple poles at $0$ and
$1$ by [[thm-completed-riemann-zeta-functional-equation]]. The **Riemann xi
function** is defined on $\mathbb C$ by

$$\xi(s):=\frac12 s(s-1)\Lambda(s)=\frac12 s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s).$$

The role of the factor $\tfrac12 s(s-1)$ is to cancel the two simple poles of
the completed function $\Lambda$. Thus $\xi$ is the entire completion, while
$\Lambda$ remains meromorphic.
