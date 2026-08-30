---
id: ex-residue-of-gamma-at-minus-two
kind: example
title: "The residue of Gamma at z=-2"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-meromorphic-continuation]
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
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Example

$$\operatorname{Res}(\Gamma,-2)=\frac12.$$

## Facts & Assumptions

**Given:** The pole-residue formula for Gamma.

[L1] $\operatorname{Res}(\Gamma,-n)=(-1)^n/n!$ for every integer $n\ge0$
([[thm-gamma-meromorphic-continuation]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $n=2$ into [L1]. Then $\operatorname{Res}(\Gamma,-2)=(-1)^2/2!$. [L1, given]
2.1 Since $(-1)^2=1$ and $2!=2$, step 1.1 simplifies to $\operatorname{Res}(\Gamma,-2)=1/2$. [step 1.1, algebra] ∎