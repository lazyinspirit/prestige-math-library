---
id: def-finite-words-factor-avoidance-and-prefix-states
kind: definition
title: "Finite words, contiguous factors, avoidance and proper-prefix states"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.7 and Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

Let $\Sigma$ be a finite set, called an **alphabet**. A **word of length $n$ over $\Sigma$** is a function from the natural number $n=\{0,\ldots,n-1\}$ ([[def-natural-numbers]]) to $\Sigma$, written $a_0a_1\cdots a_{n-1}$. The unique word of length zero is the **empty word** $\varepsilon$. Concatenation of words $u$ and $v$ is denoted by $uv$.

A word $u$ is a **contiguous factor** of $w=a_0\cdots a_{n-1}$ if $u=a_i\cdots a_{i+r-1}$ for some $0\le i\le i+r\le n$. It is a **prefix** if $i=0$, a **suffix** if $i+r=n$, and a **proper prefix** if it is a prefix other than the whole word.

For a set $B$ of words, a word **avoids $B$** if none of its contiguous factors belongs to $B$. Its set of **proper-prefix states** is

$$S_B:=\{u:u\text{ avoids }B\text{ and }u\text{ is a proper prefix of some }b\in B\}.$$

If $B$ is nonempty and every word in $B$ is nonempty, then $\varepsilon\in S_B$. If $B$ is finite, then $S_B$ is finite.
