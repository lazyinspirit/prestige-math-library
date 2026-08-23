---
id: cor-regular-surface-reparametrization-has-constant-orientation-sign
kind: corollary
title: 'A regular reparametrization of a connected parameter region has a constant orientation sign'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-surface-reparametrization-and-orientation, thm-jacobian-sign-is-constant-on-a-connected-regular-domain]
justified_by: []
aliases: []
landmark: false
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

Every regular reparametrization of a connected parameter region is either orientation-preserving everywhere or orientation-reversing everywhere.

## Facts & Assumptions

**Given:** A regular reparametrization induced by a $C^1$ diffeomorphism $h$ between neighbourhoods of compact Jordan parameter regions whose interiors are nonempty and connected.

[L1] If a $C^1$ map has invertible derivative throughout a connected open set, then its Jacobian determinant is everywhere positive or everywhere negative ([[thm-jacobian-sign-is-constant-on-a-connected-regular-domain]]).

[F1] A reparametrization is orientation-preserving where $\det Dh>0$ and orientation-reversing where $\det Dh<0$ ([[def-surface-reparametrization-and-orientation]]).

## Proof

**Proof technique:** cases.

1.1 Restrict $h$ to the nonempty connected interior of the source region. Its derivative is invertible there, so [L1] gives a constant positive or negative determinant sign. [given, L1]

2.1 Because the compact region is the closure of its interior and $\det Dh$ is continuous and nonzero on a neighbourhood of it, the same strict sign holds on its boundary. [step 1.1, given]

3.1 In the positive case [assume-case pos], [F1] makes the reparametrization orientation-preserving everywhere; in the negative case [assume-case neg], [F1] makes it orientation-reversing everywhere. These cases exhaust [L1]. [step 2.1, F1, cases-exhaustive] ∎
