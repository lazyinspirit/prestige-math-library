---
id: def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n
kind: definition
title: "Finitely additive charges and total variation on the power set of N"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-zero-and-ell-infinity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Definition B.16, printed p.190"
pipeline_run: phase-2-next-18
---

## Definition

A real or complex **charge** on $\mathcal P(\mathbb N)$ is a function
$\nu:\mathcal P(\mathbb N)\to\mathbb K$ such that $\nu(\varnothing)=0$ and

$$\nu(A\sqcup B)=\nu(A)+\nu(B)$$

whenever $A$ and $B$ are disjoint. Only finite additivity is required.

For $A\subseteq\mathbb N$, its **total variation** is

$$|\nu|(A):=\sup\left\{\sum_{j=1}^m|\nu(A_j)|: A=A_1\sqcup\cdots\sqcup A_m,\ m\ge1\right\}.$$

Empty cells may be deleted, and $|\nu|(\varnothing)=0$. The vector space
$ba(\mathcal P(\mathbb N))$ consists of the charges with
$\|\nu\|_{ba}:=|\nu|(\mathbb N)<\infty$.

Countable additivity is a strictly stronger property and is not part of this
definition.
