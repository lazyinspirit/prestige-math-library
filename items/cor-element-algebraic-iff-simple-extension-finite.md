---
id: cor-element-algebraic-iff-simple-extension-finite
kind: corollary
title: "An element is algebraic over $F$ if and only if its simple extension $F(a)/F$ is finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-field-extensions-are-algebraic, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

For an element $a$ of an extension $K/F$,

$$a\text{ is algebraic over }F\quad\Longleftrightarrow\quad F(a)/F\text{ is finite}.$$

If $a$ is algebraic with minimal polynomial of degree $n$, then $[F(a):F]=n$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and an element $a\in K$.

[L1] If $a$ is algebraic with minimal polynomial of degree $n$, then $1,a,\ldots,a^{n-1}$ is a basis of $F(a)/F$ and its degree is $n$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L2] Every element of a finite extension is algebraic over the base ([[thm-finite-field-extensions-are-algebraic]]).

## Proof

**Proof technique:** direct.

1.1 If $a$ is algebraic, [L1] gives a finite power basis of $F(a)$ and the stated degree. [given, L1]

1.2 Conversely, if $F(a)/F$ is finite, [L2] says every element of $F(a)$, in particular $a$, is algebraic over $F$. [given, L2]

2.1 These are the two implications of the equivalence. [step 1.1, step 1.2] ∎
