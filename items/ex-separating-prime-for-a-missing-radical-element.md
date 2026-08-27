---
id: ex-separating-prime-for-a-missing-radical-element
kind: example
title: "A separating prime for an element outside a radical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-prime-containing-an-ideal-avoiding-an-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice.

In the polynomial ring $k[x,y]$, take the ideal $I=(x^2)$ and the element $f=y$. Then no positive power of $y$ lies in $I$, so the corollary produces a prime ideal containing $I$ but avoiding $y$; one such prime is $(x)$.

## Facts & Assumptions

**Given:** A field $k$, the ideal $I=(x^2)\subseteq k[x,y]$, the element $f=y$, and the Axiom of Choice.

[L1] Assuming the Axiom of Choice, if no positive power of an element lies in an ideal, then some prime ideal contains the ideal while avoiding the element ([[cor-prime-containing-an-ideal-avoiding-an-element]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $I=(x^2)$ is divisible by $x^2$, so no power $y^n$ lies in $I$. [given, algebra]

2.1 Applying [L1] to step 1.1 yields a prime ideal containing $I$ but avoiding $y$. Concretely, $(x)$ works: it contains $x^2$ and does not contain $y$. [L1, step 1.1, algebra]

3.1 Thus this example exhibits the separating-prime conclusion directly. [step 2.1] ∎
