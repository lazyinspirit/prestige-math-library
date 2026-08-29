---
id: ex-lying-over-by-quotient-and-localisation
kind: example
title: "Lying over in k[t^2, t^3] subset k[t]"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lying-over]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Example (10.34)(4)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "Melvin Hochster, Introduction to Commutative Algebra, Ch. 3"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Example

Let $A:=k[t^2,t^3]\subseteq B:=k[t]$, where $k$ is a field. Then the zero prime of $A$ is the contraction of $(0)\subseteq B$, and the cusp maximal ideal $(t^2,t^3)\subseteq A$ is the contraction of $(t)\subseteq B$.

## Facts & Assumptions

**Given:** A field $k$, the inclusion $A:=k[t^2,t^3]\subseteq B:=k[t]$, and the theorem of lying over ([[thm-lying-over]]).

[L1] Assuming the Axiom of Choice, every prime of the base lying over the kernel of an integral map has a prime above it ([[thm-lying-over]]).

## Verification

**Proof technique:** direct.

1.1 The element $t\in B$ satisfies the monic equation $T^2-t^2=0$ with coefficient $t^2\in A$, so $B$ is integral over $A$. Since both $A$ and $B$ are subrings of the domain $k[t]$, the zero prime of $B$ contracts to the zero prime of $A$. [L1, given, algebra]

2.1 The quotient $B/(t)$ is $k$, and the image of $A$ in it is also $k$ because both $t^2$ and $t^3$ vanish. Hence $(t)\cap A=(t^2,t^3)$. In particular, the cusp maximal ideal of $A$ has a prime above it in $B$, namely $(t)$. [step 1.1, given, algebra]

3.1 This is the concrete cusp-ring instance of lying over: the two natural base primes $(0)$ and $(t^2,t^3)$ are realised upstairs by $(0)$ and $(t)$. [L1, step 1.1, step 2.1] ∎
