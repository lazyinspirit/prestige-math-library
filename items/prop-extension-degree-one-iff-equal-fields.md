---
id: prop-extension-degree-one-iff-equal-fields
kind: proposition
title: "A finite extension has degree one if and only if the two fields are equal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extension-degree-and-finite-extension, thm-unique-coordinates-with-respect-to-an-ordered-basis]
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

For a finite field extension $K/F$,

$$[K:F]=1\quad\Longleftrightarrow\quad K=F.$$

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] The degree $[K:F]$ is the dimension of $K$ as an $F$-vector space ([[def-extension-degree-and-finite-extension]]).

[L2] With respect to a one-element basis, every vector has a unique one-coordinate expression ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $[K:F]=1$ and choose a one-element basis $(b)$. By [L2], write $1_K=cb$ with $c\in F$. Since $1_K\ne0$, one has $c\ne0$, so $b=c^{-1}1_K$. Every $x\in K$ is therefore of the form $db=(dc^{-1})1_K$ with $d\in F$, and hence lies in the embedded copy of $F$. [given, L1, L2, choose]

1.2 Conversely, if $K=F$, then $(1_F)$ is a basis of $F$ over itself, so [L1] gives $[F:F]=1$. [L1]

2.1 Step 1.1 gives $K\subseteq F$, while the extension already has $F\subseteq K$, so $K=F$. [step 1.1, given]

3.1 Steps 1.1, 1.2, and 2.1 prove both directions. [step 2.1, step 1.2] ∎
