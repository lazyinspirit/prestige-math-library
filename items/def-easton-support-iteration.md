---
id: def-easton-support-iteration
kind: definition
title: Set-length Easton-support forcing iterations
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-support-product, def-finite-support-forcing-iteration, thm-transfinite-recursion, def-cofinality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Easton-support presentation (15.9)-(15.10), printed pp.233-234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Definitions 51-53, PDF p.11"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

A **set-length Easton-support iteration** of length $\delta$ follows the
successor rule of an ordinary forcing iteration and replaces the finite support
of [[def-finite-support-forcing-iteration]] at limit stages by Easton support.
Precisely, it is the transfinite recursion
([[thm-transfinite-recursion]]) over an ordinal $\delta$ of set-indexed data
$\langle P_{\alpha},\dot Q_{\alpha},\dot 1_{\alpha}:\alpha<\delta\rangle$.
For each $\alpha$, let $R_\alpha$ be the set-sized second-name carrier
specified in [[def-finite-support-forcing-iteration]], and require a supplied
$\dot 1_\alpha\in R_\alpha$ with
$1_{P_\alpha}\Vdash\dot 1_\alpha$ a largest condition of the nonempty
preorder $\dot Q_\alpha$. The recursion satisfies:

- $P_0$ is the trivial order, and $P_{\alpha+1}=P_{\alpha}*\dot Q_{\alpha}$ is
  the two-step iteration of [[def-finite-support-forcing-iteration]], with the
  same carrier and the same coordinatewise order;
- at a limit $\gamma\le\delta$, a condition is a coherent function $p$ on
  $\gamma$ with $p\restriction\alpha\in P_\alpha$, $p(\alpha)\in R_\alpha$,
  and $p\restriction\alpha\Vdash p(\alpha)\in\dot Q_{\alpha}$ for every
  $\alpha<\gamma$, whose **non-top support**
  $\{\alpha<\gamma:p\restriction\alpha\not\Vdash p(\alpha)=\dot 1_{\alpha}\}$
  meets $[0,\gamma')$ in fewer than $\gamma'$ elements for every infinite regular
  $\gamma'\le\gamma$ ([[def-cofinality]]).

The order is coordinatewise in the forcing sense, as in the finite-support
iteration. At $\gamma=\delta$ the resulting order has a largest condition, the
all-top function supplied by the distinguished top names. Each initial segment
$P_{\alpha}$, including the final $P_\delta$, is a set: at a limit it is a
definable subset of the set of functions with values in the supplied carriers
$R_\alpha$. The top names are part of the data, so no uniform selection of
names is inferred from mere existence of forced largest conditions.

This is a **different presentation** from the ground-model Easton product
[[def-easton-support-product]]: the iteration's $P_{\gamma}$-levels are built by
recursion inside the ground model and need not be isomorphic to any $P(F)$, and
no such equivalence is asserted here. The product presentation carries the
cardinal-preservation and continuum computations of this page; the iteration is
recorded because the Easton support condition (15.9) of the source is stated for
products of fibres and because a set-length iteration is the natural setting in
which the same support bound is imposed at limit stages.
