---
id: cex-improper-filter
kind: counterexample
title: "If the exclusion of $\\varnothing$ is dropped, $\\mathcal P(X)$ becomes the unique maximal improper filter"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-filter, def-ultrafilter]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement refuted

Dropping the properness axiom $\emptyset\notin\mathcal F$ leaves the maximal
filters, and therefore the notion of ultrafilter, unchanged.

Call a family a **weak filter** here if it satisfies the other filter axioms but
may contain $\emptyset$. Then $\mathcal P(X)$ is the unique improper weak filter
on $X$ and the greatest weak filter under inclusion. Consequently it is the
unique maximal weak filter, so maximality becomes degenerate if properness is
not retained.

## Facts & Assumptions

**Given:** A set $X$ and the enlarged convention in which a weak filter is a family $\mathcal G\subseteq\mathcal P(X)$ that contains $X$, is closed under pairwise intersection, and is closed upward in $X$, without requiring $\emptyset\notin\mathcal G$.

[F1] Under this library's convention a filter must also omit $\emptyset$. The competing convention admits exactly the improper object $\mathcal P(X)$ ([[def-filter]]).

[F2] An ultrafilter is maximal for inclusion among the proper filters on $X$ ([[def-ultrafilter]]).

## Counterexample

**Proof technique:** direct.

1.1 The family $\mathcal P(X)$ is a weak filter: it contains $X$ and $\emptyset$, and it is closed under intersections and under taking supersets inside $X$. [given]

1.2 If a weak filter $\mathcal G$ contains $\emptyset$, then for every $A\subseteq X$ the inclusions $\emptyset\subseteq A\subseteq X$ and upward closure give $A\in\mathcal G$. Hence $\mathcal G=\mathcal P(X)$. [given]

2.1 Thus $\mathcal P(X)$ is the unique improper weak filter. Since every weak filter is a subfamily of $\mathcal P(X)$, it is also the greatest and therefore the unique maximal weak filter. [step 1.1, step 1.2]

3.1 If maximality were taken in the enlarged class, no proper filter could be maximal because it would be strictly contained in $\mathcal P(X)$. This differs from [F2] and refutes the claim that dropping properness leaves ultrafilters unchanged. [step 2.1, F1, F2] ∎
