---
id: def-arithmetical-level-completeness
kind: definition
title: "Completeness at an arithmetical level"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-computable-many-one-reduction]
verification:
  precheck: n/a
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 5.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

Fix the canonical binary-numeral encoding $\nu:\mathbb N\to\{0,1\}^*$, and
write $\nu(A)=\{\nu(a):a\in A\}$. For $A,B\subseteq\mathbb N$, write
$A\le_m B$ when $\nu(A)\le_m\nu(B)$ by a total computable string function in
the sense of [[def-computable-many-one-reduction]].

For $n\ge1$, $B\subseteq\mathbb N$ is **$\Sigma_n^0$-complete** when
$B\in\Sigma_n^0$ and every $A\subseteq\mathbb N$ with $A\in\Sigma_n^0$ satisfies $A\le_m B$. Define
$\Pi_n^0$-completeness identically with $\Pi_n^0$ in place of $\Sigma_n^0$.
