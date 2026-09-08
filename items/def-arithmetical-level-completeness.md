---
id: def-arithmetical-level-completeness
kind: definition
title: "Completeness at an arithmetical level"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-computable-and-partial-computable-function]
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local natural-number reduction definition and prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

For $A,B\subseteq\mathbb N$, write $A\le_m B$ when there is a total computable function $f:\mathbb N\to\mathbb N$ such that
$$\forall a\in\mathbb N,\qquad a\in A\iff f(a)\in B.$$
Here total computability means [[def-computable-and-partial-computable-function]], using canonical binary numerals to represent natural numbers. In particular, the machine must halt with a valid numeral output on every numeral input. This condition concerns functions on natural numbers; an invalid numeral is not an extra possible output value.

For $n\ge1$, $B\subseteq\mathbb N$ is **$\Sigma_n^0$-complete** when
$B\in\Sigma_n^0$ and every $A\subseteq\mathbb N$ with $A\in\Sigma_n^0$ satisfies $A\le_m B$. Define
$\Pi_n^0$-completeness identically with $\Pi_n^0$ in place of $\Sigma_n^0$.
