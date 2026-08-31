---
id: def-nondeterministic-accepting-computation
kind: definition
title: "Accepting computations of a nondeterministic machine"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-multitape-and-nondeterministic-machines
  - def-turing-machine-configuration
  - def-initial-accepting-and-rejecting-configurations
  - def-one-step-configuration-relation
  - def-sequence
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 10: The Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf"
---

## Definition

Fix a nondeterministic one-tape Turing machine
$N=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\Delta)$ and an
input word $w\in\Sigma^*$.

A **configuration of $N$** is a triple $(q,h,t)$ with $q\in Q$, head position
$h\in\mathbb N$, and finite-support tape content $t:\mathbb N\to\Gamma$, just
as in [[def-turing-machine-configuration]]. It is **accepting** when
$q=q_{\mathrm{acc}}$ and **rejecting** when $q=q_{\mathrm{rej}}$, as in
[[def-initial-accepting-and-rejecting-configurations]].

For configurations $C=(q,h,t)$ and $C'=(q',h',t')$ of $N$, write
$$ C\vdash_N C' $$
when $q\notin\{q_{\mathrm{acc}},q_{\mathrm{rej}}\}$ and there exists an allowed
instruction
$$ (p,b,D)\in\Delta(q,t(h)) $$
such that $C'$ is obtained from $C$ by the same local rewrite and head-move
recipe used in [[def-one-step-configuration-relation]], with $q'=p$.

An **accepting computation** of $N$ on input $w$ is a finite list of
configurations
$$ C_0,C_1,\dots,C_n $$
such that $C_0=(q_0,0,t_w)$, where $t_w$ is the input tape defined in the same
way as for deterministic machines, each $C_i\vdash_N C_{i+1}$ for $0\le i<n$,
and $C_n$ is accepting.

We say that **$N$ accepts $w$** if such an accepting computation exists.

## Remarks

- Nondeterministic acceptance is existential: one accepting branch is enough.

- Other branches may reject, may halt differently, or may continue forever; no
  global halting requirement is part of acceptance itself.
