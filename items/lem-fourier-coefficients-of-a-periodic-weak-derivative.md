---
id: lem-fourier-coefficients-of-a-periodic-weak-derivative
kind: lemma
title: "Fourier coefficients of a periodic weak derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-periodic-ltwo-weak-derivative]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-fourier-coefficients-of-a-periodic-weak-derivative). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Section 1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

Assume the Axiom of Countable Choice. If $f,g\in L^2(\mathbb T)$ and $g=f'$ in the periodic weak sense, then
$$\widehat g(k)=2\pi ik\widehat f(k)\qquad(k\in\mathbb Z).$$

## Facts & Assumptions

**Given:** Countable Choice and $f,g\in L^2(\mathbb T)$ with $g=f'$ in the sense of [[def-periodic-ltwo-weak-derivative]].

## Proof

**Proof technique:** direct.

1.1 Take the smooth periodic test function $\varphi=e_{-k}$ in the defining identity. Since $\varphi'=-2\pi ik e_{-k}$, it gives $-2\pi ik\widehat f(k)=-\widehat g(k)$. [given, algebra]

2.1 Rearranging proves the formula; for $k=0$ it says $\widehat g(0)=0$, which is also the same test-function identity with $\varphi=1$. [step 1.1, algebra] ∎
