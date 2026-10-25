---
id: ex-radical-intersection-computation
kind: example
title: "Computing sqrt((x^2,xy)) from its containing primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-radical-as-intersection-of-primes, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice.

In the polynomial ring $k[x,y]$, let $I=(x^2,xy)$. Then $\sqrt{I}=(x)$, and the prime ideals containing $I$ are exactly the prime ideals containing $x$.

## Facts & Assumptions

**Given:** A field $k$, the ideal $I=(x^2,xy)\subseteq k[x,y]$, and the Axiom of Choice.

[L1] Assuming the Axiom of Choice, the radical of an ideal is the intersection of the prime ideals containing it ([[thm-radical-as-intersection-of-primes]]).

[L2] A prime ideal contains a factor whenever it contains a product ([[def-prime-and-maximal-ideals]]).

## Verification

**Proof technique:** direct.

1.1 If $\mathfrak p$ is a prime ideal containing $I$, then $x^2\in\mathfrak p$, so [L2] gives $x\in\mathfrak p$. Conversely, any prime ideal containing $x$ also contains $x^2$ and $xy$, hence contains $I$. Thus the primes over $I$ are exactly the primes containing $x$. [L2, given, algebra]

2.1 The ideal $(x)$ is itself prime because $k[x,y]/(x)\cong k[y]$ is an integral domain. Therefore [L1] and step 1.1 give $$\sqrt{I}=\bigcap_{\substack{\mathfrak p\in\operatorname{Spec}(k[x,y])\\ I\subseteq\mathfrak p}}\mathfrak p=\bigcap_{\substack{\mathfrak p\in\operatorname{Spec}(k[x,y])\\ x\in\mathfrak p}}\mathfrak p=(x).$$ [L1, step 1.1, algebra]

3.1 Hence $\sqrt{(x^2,xy)}=(x)$, as claimed. [step 2.1] ∎
