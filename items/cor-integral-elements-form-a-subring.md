---
id: cor-integral-elements-form-a-subring
kind: corollary
title: "Integral elements over a nonzero base ring form a subring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integrality-and-finite-module-equivalences, def-integral-element-and-algebraic-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq B$ be commutative rings with $A\ne0$. The elements of $B$ integral over $A$ form a subring of $B$. See [[thm-integrality-and-finite-module-equivalences]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $A\subseteq B$ be commutative rings with $A\ne0$, and let $b\in B$. Then $b$ is integral over $A$ if and only if $A[b]$ is finitely generated as an $A$-module, if and only if there exists a faithful $A[b]$-module that is finitely generated over $A$. ([[thm-integrality-and-finite-module-equivalences]]).

[L2] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is integral over $A$ when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An algebraic integer is a complex number integral over $\mathbb Z$. ([[def-integral-element-and-algebraic-integer]]).

## Proof

**Proof technique:** direct.

1.1 If $x,y$ are integral, $A[x]$ is finite over $A$, and the monic equation for $y$ over $A$ is also one over $A[x]$; multiplying finite generating sets shows that $A[x,y]$ is finite over $A$. [L1, L2, given, algebra]

2.1 For each $z\in\{x+y,x-y,xy\}$, the $A[z]$-module $A[x,y]$ is faithful and finite over $A$, so the finite-module criterion makes $z$ integral. [step 1.1, given, algebra]

3.1 The elements $0$ and $1$ are roots of the monic polynomials $X$ and $X-1$, respectively; step 2.1 supplies closure under addition, multiplication, and additive inverses, including coincident elements. Thus the integral elements form a unital subring of $B$. [L2, step 2.1, given, algebra] ∎
