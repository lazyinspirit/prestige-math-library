---
id: def-probabilistic-polynomial-time-machine
kind: definition
title: "Probabilistic polynomial-time Turing machines"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-worst-case-time-and-space-complexity, def-multitape-and-nondeterministic-machines]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Definition

A **probabilistic Turing machine** is a deterministic multitape Turing machine
equipped with an additional read-only tape of random bits. On input $x$ and
random string $r$, it follows the deterministic computation determined by
$(x,r)$.

Such a machine runs in **probabilistic polynomial time** when there is a
polynomial $p$ such that, on every input of length $n$, it halts within
$p(n)$ steps after reading at most $p(n)$ random bits. Fixing one such bound,
the computation on $x$ is viewed as a deterministic computation on
$(x,r)$ for $r\in\{0,1\}^{p(|x|)}$; any unread suffix of $r$ is ignored.

For a fixed input $x$, the machine's **acceptance probability** is
$$ \mathbb P_r(M(x,r)\text{ accepts})=\frac{|\{r\in\{0,1\}^{p(|x|)}:M(x,r)\text{ accepts}\}|}{2^{p(|x|)}}. $$
This value does not depend on the chosen valid bound: replacing $p(|x|)$ by a
larger length merely gives every relevant random prefix the same number of
extensions.

## Remarks

- A probabilistic machine is still an ordinary deterministic machine after the
  random string is fixed.
- The runtime bound is worst-case over the random string as well as over the
  input.
