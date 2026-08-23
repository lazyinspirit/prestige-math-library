---
id: thm-flux-under-surface-reparametrization
kind: theorem
title: 'Flux is invariant under orientation-preserving reparametrization and changes sign under reversal'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-unit-normal-and-flux-of-a-surface-patch, lem-oriented-area-vector-under-surface-reparametrization, cor-regular-surface-reparametrization-has-constant-orientation-sign, thm-change-of-variables-for-compact-jordan-sets]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

An orientation-preserving reparametrization preserves flux and an orientation-reversing reparametrization negates it.

## Facts & Assumptions

**Given:** A regular reparametrization $\psi=\varphi\circ h$ between connected parameter regions and a continuous vector field $F$.

[L1] Flux is the integral of $F\circ\varphi$ dotted with the oriented area vector, and that vector transforms by the signed factor $\det Dh$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]], [[lem-oriented-area-vector-under-surface-reparametrization]]).

[L2] The determinant has one constant sign on the parameter region ([[cor-regular-surface-reparametrization-has-constant-orientation-sign]]), and compact-Jordan change of variables uses $|\det Dh|$ ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Proof

**Proof technique:** cases.

1.1 By [L1], flux computed with $\psi$ is $\int_E ((F\circ\varphi)\cdot(\varphi_u\times\varphi_v))\circ h\,\det Dh$. [given, L1]

2.1 In the preserving case [assume-case pos], [L2] gives $\det Dh=|\det Dh|$, so change of variables makes step 1.1 equal to the flux computed with $\varphi$. [step 1.1, L2]

2.2 In the reversing case [assume-case neg], [L2] gives $\det Dh=-|\det Dh|$, so change of variables makes step 1.1 the negative of the flux computed with $\varphi$. [step 1.1, L2]

3.1 The two constant-sign cases are exhaustive, proving both assertions. [step 2.1, step 2.2, cases-exhaustive] ∎
