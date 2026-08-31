---
id: def-generalized-nfa
kind: definition
title: "Generalized NFA's and their accepted languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-expression-denotation, def-deterministic-finite-automaton, def-language-over-an-alphabet]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Definition

A **generalized NFA** over an alphabet $\Sigma$ is a finite state set $Q$ with
two distinguished states $s,t\in Q$, $s\neq t$, together with a label
assignment
$$ \lambda:Q\times Q\to\operatorname{Reg}(\Sigma). $$

We require
$$ \lambda(p,s)=\varnothing\quad(p\in Q),\qquad \lambda(t,q)=\varnothing\quad(q\in Q), $$
so $s$ has no incoming transitions and $t$ has no outgoing transitions.

For states $p,q\in Q$ and a set
$K\subseteq Q\setminus\{s,t\}$, let $P_K(p,q)$ be the set of words $w\in\Sigma^*$
for which there exist an integer $n\ge0$ and states
$$ p=r_0,r_1,\ldots,r_n=q $$
with every intermediate state $r_1,\ldots,r_{n-1}$ in $K$, and a factorization
$$ w=w_1\cdots w_n $$
such that each factor belongs to the denoted language of the corresponding edge
label:
$$ w_i\in\mathcal L(\lambda(r_{i-1},r_i))\qquad(1\le i\le n). $$

When $n=0$, the state list has only $p=q$ and the factorization is empty, so
the represented word is $w=\varepsilon$.

The **language accepted by the GNFA** is
$$ L(G):=P_{Q\setminus\{s,t\}}(s,t). $$

## Remarks

- A GNFA edge label is a regular expression, not a single letter.

- The set $P_K(p,q)$ records words spelled by paths whose intermediate states
  are restricted to $K$.
