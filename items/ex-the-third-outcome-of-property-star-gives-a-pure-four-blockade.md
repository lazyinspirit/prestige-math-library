---
id: ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade
kind: example
title: "The third outcome of property (*) gives a pure four-blockade"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-property-star-for-a-finite-family, lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 1.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Assume the trigger hypothesis of property $(*)$ holds for a comb of length
$\ell=4$ and width $w$. If the third outcome of property $(*)$ occurs, the
resulting blockade is pure with width $w/\ell^2$.

## Facts & Assumptions

**Given:** A special-vertex comb with $\ell=4$ and width $w$.

[L1] The third branch in [[def-property-star-for-a-finite-family]] gives a pure
$(\ell,w/\ell^2)$-blockade.

## Verification

**Proof technique:** direct.


1.1 Applying [L1] with $\ell=4$ yields a pure blockade whose width is $$ \frac{w}{\ell^2}=\frac{w}{16}. $$ [L1, algebra]


2.1 Since [L1] names the blockade pure rather than complete or anticomplete, this branch keeps exactly the distinction used later on the A page: every pair of blocks is pure, but no stronger global uniformity is asserted. [step 1.1, L1] ∎
