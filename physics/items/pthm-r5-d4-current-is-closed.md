---
id: pthm-r5-d4-current-is-closed
kind: physics-theorem
title: Boundaryless D4 Source Current Is Closed
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - def-r5-d4-source-current
  - def-embedded-smooth-submanifold-with-boundary
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - thm-general-stokes-theorem
  - thm-the-exterior-derivative-commutes-with-pullback
dependency_roles:
  def-r5-d4-source-current: formulation-prerequisite
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Distributional closure of the oriented degree-five current for a smooth boundaryless D4 worldvolume, using compactly supported test forms; a worldvolume boundary adds its boundary current."
sources:
  references:
    - title: "Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "§2, equation (2.2), PDF pp. 3–4; distributional brane-source current."
    - title: "John M. Lee, Introduction to Smooth Manifolds, Second Edition"
      url: "https://link.springer.com/content/pdf/10.1007/978-1-4419-9982-5.pdf"
      locator: "Chapter 16, Stokes' theorem for oriented manifolds with boundary; local application to compactly supported test forms."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X^{10}$ be oriented and $\iota:W_5\hookrightarrow X$ a smooth proper oriented embedding. Define the degree-five current by $\langle\delta_5(W),\eta_5\rangle:=\int_W\iota^*\eta_5$ for every compactly supported smooth five-form $\eta_5$; in the boundaryless Nil case this is the current of [[def-r5-d4-source-current]]. For a degree-$k$ current $T$, define its exterior derivative by $\langle dT,\beta_{9-k}\rangle:=(-1)^{k+1}\langle T,d\beta_{9-k}\rangle$. If $\partial W=\varnothing$, then $d\delta_5(W)=0$. If $\partial W\ne\varnothing$, assume $\mathrm{AC}_\omega$, the countable-choice principle that every sequence of nonempty sets has a choice function, and orient $\partial W$ by the outward-normal-first convention; define $\delta_6(\partial W)$ by $\langle\delta_6(\partial W),\beta_4\rangle:=\int_{\partial W}(\iota|_{\partial W})^*\beta_4$ for compactly supported smooth four-forms $\beta_4$. Then $d\delta_5(W)=\delta_6(\partial W)$. The boundary statement is conditional on this displayed countable-choice premise.

## Facts & Assumptions

**Given:** The smooth proper oriented embedding, the current pairings and derivative convention in the Statement, and compactly supported test forms.

[F1] [[def-r5-d4-source-current]]: in the boundaryless Nil case, $\langle\delta_5(W),\eta_5\rangle=\int_W\iota^*\eta_5$; the boundary-current extension used here is defined explicitly in the Statement.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: on an oriented boundaryless manifold, the integral of a compactly supported exact top form is zero.

[F3] [[thm-general-stokes-theorem]]: under $\mathrm{AC}_\omega$, for a smooth manifold with boundary and a compactly supported form of degree one below its dimension, $\int_Wd\eta=\int_{\partial W}j^*\eta$ with outward-normal-first orientation.

[F4] [[thm-the-exterior-derivative-commutes-with-pullback]]: for every smooth map $\iota$ and smooth form $\beta$, $d(\iota^*\beta)=\iota^*(d\beta)$.

## Proof

1.1 Let $\beta_4$ be an arbitrary compactly supported smooth test four-form on $X$. Since $\iota$ is proper, $\iota^*\beta_4$ is compactly supported on $W$. By the current pairing and derivative convention in the Statement and [F4], $\langle d\delta_5(W),\beta_4\rangle=(-1)^6\int_W\iota^*(d\beta_4)=\int_Wd(\iota^*\beta_4)$. [given, F4, algebra]

2.1 If $\partial W=\varnothing$, [F2] makes the last integral zero, so every test pairing of $d\delta_5(W)$ vanishes. Thus $d\delta_5(W)=0$ distributionally in the boundaryless case. [given, F2, step 1.1]

3.1 If $\partial W\ne\varnothing$, [F3] gives $\langle d\delta_5(W),\beta_4\rangle=\int_{\partial W}(\iota|_{\partial W})^*\beta_4=\langle\delta_6(\partial W),\beta_4\rangle$. The equality for every test form is exactly $d\delta_5(W)=\delta_6(\partial W)$, under [F3]'s stated $\mathrm{AC}_\omega$ premise. [given, F3, step 1.1] ∎
