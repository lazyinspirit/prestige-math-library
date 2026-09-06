---
id: def-convergence-in-lp-for-random-variables
kind: definition
title: "$L^p$ convergence for random variables"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-random-element-and-real-random-variable]
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Definition 3.1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Let $1\le p\le\infty$. For real random variables whose classes lie in
$L^p(\mathbb P)$ as defined by [[def-l-p-space-as-a-quotient-by-null-functions]],
write $X_n\to X$ **in $L^p$** when
$$\|[X_n]-[X]\|_{L^p(\mathbb P)}\longrightarrow0.$$ 
For $p<\infty$, this norm is
$$\|[X_n]-[X]\|_{L^p(\mathbb P)}=\bigl(\mathbb E|X_n-X|^p\bigr)^{1/p};$$
for $p=\infty$, it is the essential-supremum norm. Thus the assertion concerns
almost-everywhere equivalence classes, not chosen representatives.
