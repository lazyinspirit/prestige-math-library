---
id: def-initial-accepting-and-rejecting-configurations
kind: definition
title: "Initial, accepting, and rejecting configurations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-turing-machine-configuration
  - def-computation-alphabet-and-word-convention
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Definition

Fix a deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$ and an
input word $w\in\Sigma^*$.

The **initial configuration** of $M$ on input $w$ is
$$ I_M(w):=(q_0,0,t_w), $$
where $t_w$ is the initial tape from
[[def-tape-finite-support-convention]].

A configuration $C=(q,h,t)$ of $M$ is:

- **accepting** if $q=q_{\mathrm{acc}}$,
- **rejecting** if $q=q_{\mathrm{rej}}$,
- **halting** if it is accepting or rejecting.

Thus the machine starts in state $q_0$, scans the leftmost input cell, and
halts exactly when it enters one of the two designated halting states.

## Remarks

- If $w=\varepsilon$, then the initial tape is blank everywhere and the head is
  still at cell $0$.

- Accepting and rejecting are properties of configurations, not of words. The
  same input may lead different machines to different outcomes.
