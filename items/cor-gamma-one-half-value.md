---
id: cor-gamma-one-half-value
kind: corollary
title: "The value of Gamma at one half"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-real-gamma-one-half-is-root-pi,
       thm-complex-gamma-restricts-to-the-real-gamma-function,
       thm-euler-reflection-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

$$\Gamma(1/2)=\sqrt{\pi}.$$

## Facts & Assumptions

**Given:** The reflection formula and the real Gamma value.

[L1] On the positive real axis, complex Gamma agrees with the real Gamma
([[thm-complex-gamma-restricts-to-the-real-gamma-function]]).

[L2] The real Gamma function satisfies $\Gamma(1/2)=\sqrt{\pi}$
([[cor-real-gamma-one-half-is-root-pi]]).

[L3] The reflection formula gives
$\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$
([[thm-euler-reflection-formula]]).

## Proof

**Proof technique:** direct.

1.1 Substituting $z=1/2$ into [L3] gives $\Gamma(1/2)^2=\pi$, because $\sin(\pi/2)=1$. [L3, given]
2.1 By [L1] and [L2], $\Gamma(1/2)$ is the positive real number $\sqrt{\pi}$. Step 1.1 leaves only the two square roots of $\pi$, so the positive one is the required value. [step 1.1, L1, L2] ∎