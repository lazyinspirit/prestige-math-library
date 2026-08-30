---
id: def-one-step-configuration-relation
kind: definition
title: "The one-step configuration relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-turing-machine-configuration
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://studylib.net/doc/28158899/turing-paper-1936"
---

## Definition

Fix a deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$.
Let $C=(q,h,t)$ and $C'=(q',h',t')$ be configurations of $M$.

We say that **$C'$ follows $C$ in one step**, and write
$$ C\vdash_M C', $$
when $q\notin\{q_{\mathrm{acc}},q_{\mathrm{rej}}\}$ and, writing
$$ \delta(q,t(h))=(p,b,D), $$
one has:

- $q'=p$,
- $t'(h)=b$,
- $t'(i)=t(i)$ for every $i\ne h$,
- if $D=R$, then $h'=h+1$,
- if $D=L$ and $h>0$, then $h'=h-1$,
- if $D=L$ and $h=0$, then $h'=0$.

So one step changes only the scanned tape cell, updates the state, and moves
the head one cell right or one cell left, except that the left boundary clamps
the head at cell $0$.

## Remarks

- Because $t'$ differs from $t$ at at most one position, it is again a
  finite-support tape content.

- There is no one-step successor from an accepting or rejecting configuration.
