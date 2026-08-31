---
id: ex-the-function-set-as-an-exponential-computed
kind: example
title: "A function set computed as an exponential object"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-set-is-cartesian-closed]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Example 4.4.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
generation:
  role: example
---

## Example

Take $B=\{0,1\}$ and $C=\{x,y\}$. Then $C^B$ is the four-element set of functions $B\to C$:

$$xx,\;xy,\;yx,\;yy,$$

where, for instance, $xy$ means $0\mapsto x$ and $1\mapsto y$.

## Facts & Assumptions

**Given:** The sets $B=\{0,1\}$, $C=\{x,y\}$, and $A=\{*\}$.

[L1] In $\mathbf{Set}$, function sets are exponential objects ([[thm-set-is-cartesian-closed]]).

## Verification

**Proof technique:** direct.

1.1 The evaluation map is $\operatorname{ev}:C^B\times B\to C$, $(\phi,b)\mapsto\phi(b)$. For example, $\operatorname{ev}(xy,0)=x$ and $\operatorname{ev}(xy,1)=y$. [given, algebra]

2.1 Let $A=\{*\}$. A map $A\times B\to C$ is just a function $B\to C$, so it is exactly one of the four displayed elements of $C^B$. Hence maps $A\times B\to C$ biject with maps $A\to C^B$ by sending the unique point of $A$ to the corresponding function. [step 1.1, given, algebra]

3.1 This is the exponential universal property in the concrete case, matching [[thm-set-is-cartesian-closed]]. [step 2.1, L1] ∎
