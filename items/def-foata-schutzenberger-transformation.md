---
id: def-foata-schutzenberger-transformation
kind: definition
title: "Foata's recursive transformation on permutations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Definition

Write a permutation in one-line form as a word of distinct integers.

Let $w$ be such a word and let $x$ be an integer not appearing in $w$. Define a
word $\gamma_x(w)$ as follows.

If $w$ is empty, put $\gamma_x(w):=w$. Otherwise inspect the last letter of $w$.

- If the last letter of $w$ is $\le x$, cut $w$ immediately after each letter
  $\le x$.
- If the last letter of $w$ is $>x$, cut $w$ immediately after each letter
  $>x$.

This factors $w$ into nonempty blocks $w=w_1\cdots w_r$. For each block
$w_j=u_jy_j$ with last letter $y_j$, move the last letter to the front and write
$\beta(w_j):=y_ju_j$. Then set

$$\gamma_x(w):=\beta(w_1)\cdots\beta(w_r).$$

Now define **Foata's transformation** $\Phi$ recursively by

$$\Phi(\epsilon):=\epsilon,\qquad \Phi(wx):=\gamma_x(\Phi(w))x,$$

where $\epsilon$ is the empty word and $x$ is the last letter of the word $wx$.

This recursively transforms one-line words of permutations, hence permutations.
