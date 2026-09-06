---
id: cor-dirichlet-l-trivial-zeros
kind: corollary
title: "Parity-forced trivial zeros"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-dirichlet-l-analytic-continuation, thm-gamma-meromorphic-continuation]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, sections 16.3.1-16.3.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For primitive nonprincipal $\chi$ of parity $a$, $L(-a-2m,\chi)=0$ for every
$m\ge0$. Thus $0$ occurs only in the even nonprincipal case; no zero at $0$ is
asserted for the principal character modulo $1$.

## Facts & Assumptions

**Given:** A primitive nonprincipal $\chi$ of parity $a$.

[F1] The completed function is entire for a primitive nonprincipal character ([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F2] Gamma has simple poles at the nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

## Proof

**Proof technique:** direct.

1.1 At $s=-a-2m$, $\Gamma((s+a)/2)$ has a pole by [F2]. [F2, given]

2.1 The regularity in [F1] forces $L(s,\chi)$ to cancel that pole. The principal exception is outside the hypothesis. [F1, step 1.1] ∎
