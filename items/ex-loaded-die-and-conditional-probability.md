---
id: ex-loaded-die-and-conditional-probability
kind: example
title: "A loaded die as a nonuniform finite probability space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-probability-space-and-event, lem-finite-probability-basic-laws, def-conditional-probability, thm-conditional-probability-multiplication-and-chain-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 1.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Example

On $\Omega=\{1,2,3,4,5,6\}$ assign weights
$$w(1)=0,\quad w(2)=\frac1{10},\quad w(3)=w(4)=\frac15,\quad w(5)=w(6)=\frac14.$$
This is a loaded die with a possible zero-weight outcome. Let $A=\{4,5,6\}$ and $B=\{2,4,6\}$.

## Facts & Assumptions

**Given:** The weights and events in the Example.

[L1] Finite probability spaces allow nonnegative outcome weights summing to $1$ ([[def-finite-probability-space-and-event]]).

[L2] Complements and differences obey the finite probability laws ([[lem-finite-probability-basic-laws]]).

[L3] $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$ when $\mathbb P(B)>0$ ([[def-conditional-probability]]).

[L4] The multiplication rule is $\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B)$ ([[thm-conditional-probability-multiplication-and-chain-rules]]).

## Verification

**Proof technique:** direct.

1.1 The six weights sum to $1$, so [L1] gives a finite probability space; $\{1\}$ is nonempty but has probability zero. [L1, algebra]

1.2 Direct summation gives $\mathbb P(A)=7/10$, $\mathbb P(B)=11/20$, and $\mathbb P(A\cap B)=9/20$. [L1, L2, algebra]

2.1 Since $\mathbb P(B)>0$, [L3] gives $\mathbb P(A\mid B)=(9/20)/(11/20)=9/11$. [step 1.2, L3, algebra]

3.1 Finally $(9/11)(11/20)=9/20=\mathbb P(A\cap B)$, verifying [L4] in this nonuniform space. [step 1.2, step 2.1, L4, algebra] ∎
