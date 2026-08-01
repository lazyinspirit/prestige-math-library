---
id: ex-x-sine-of-one-over-x-tends-to-zero
kind: example
title: "x sin(1/x) tends to zero despite its oscillation"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-trigonometric-parity-and-pythagorean-identity, thm-squeeze-for-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Example

$$\lim_{x\to0}x\sin(1/x)=0,$$
where the function is defined at $0$ by the displayed limit.

## Facts & Assumptions

**Given:** A nonzero real $x$ approaching $0$.

[L1] $|\sin u|\le1$ for every real $u$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The squeeze theorem for function limits holds ([[thm-squeeze-for-function-limits]]).



## Verification

**Proof technique:** direct.

1.1 From [L1], $|x\sin(1/x)|\le|x|$ for every $x\ne0$. [L1, algebra]

2.1 Since both $-|x|$ and $|x|$ tend to $0$, squeeze gives $x\sin(1/x)\to0$. [step 1.1, L2] ∎
