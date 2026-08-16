---
id: def-the-ultrafilter-endofunctor-unit-and-multiplication
kind: definition
title: "The ultrafilter endofunctor with principal unit and flattening multiplication"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial, lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(v) and Exercise 5.1.ii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

The **ultrafilter endofunctor** $\beta:\mathbf{Set}\to\mathbf{Set}$ sends $X$ to the set $\beta X$ of ultrafilters on $X$ and sends $f:X\to Y$ to ultrafilter pushforward $f_*$. Its **principal unit** and **flattening multiplication** are

$$\eta_X(x)=\{A\subseteq X:x\in A\},$$

$$\mu_X(\mathbb W)=\{A\subseteq X:\{\mathcal U\in\beta X:A\in\mathcal U\}\in\mathbb W\}.$$

The preceding pushforward and flattening lemmas establish that these assignments are well-defined and natural.
