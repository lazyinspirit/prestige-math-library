---
id: def-parameter-specialization-function
kind: definition
title: "Parameter-specialization functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-universal-and-acceptable-numbering, def-natural-number-coding-of-finite-sequences]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The s-m-n Theorem"
      url: "https://lmoss.github.io/onesharp/more_programs/smn.html"
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Definition

Fix an acceptable numbering $(\varphi_e)_{e\in\mathbb N}$.

For $n\in\mathbb N$, define the recursively coded input tuple by
$$ \operatorname{Inp}_0:=\ulcorner()\urcorner_{\mathrm{seq}},\qquad \operatorname{Inp}_{n+1}(b_1,\dots,b_{n+1}):=\ulcorner b_1,\operatorname{Inp}_n(b_2,\dots,b_{n+1})\urcorner_{\mathrm{seq}}. $$

For $m,n\in\mathbb N$, a total computable function
$$ s_m^n:\mathbb N^{m+1}\to\mathbb N $$
is a **parameter-specialization function** when for all indices $e$, all
parameters $a_1,\dots,a_m$, all inputs $b_1,\dots,b_n$, and the sequence coding
of [[def-natural-number-coding-of-finite-sequences]], one has
$$ \varphi_{s_m^n(e,a_1,\dots,a_m)}(\operatorname{Inp}_n(b_1,\dots,b_n)) \simeq \varphi_e(\operatorname{Inp}_{m+n}(a_1,\dots,a_m,b_1,\dots,b_n)). $$

## Remarks

- The function $s_m^n$ hard-wires the first $m$ inputs and leaves the last $n$
  inputs free.

- The case $n=1$ gives a residual unary program on the stipulated coded-input
  convention: it is evaluated at
  $\operatorname{Inp}_1(b)=\ulcorner b,\operatorname{Inp}_0\urcorner_{\mathrm{seq}}$,
  not at the bare number $b$.
