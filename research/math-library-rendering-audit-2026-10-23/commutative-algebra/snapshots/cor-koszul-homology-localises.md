---
id: cor-koszul-homology-localises
kind: corollary
title: "Koszul Homology Localises"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-complex-localises-termwise, thm-localisation-of-modules-is-exact]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

Let $R$ be a commutative unital ring, let $M$ be an $R$-module, let
$\mathbf x$ be a finite sequence in $R$, and let $S\subseteq R$ be a
multiplicative subset. For every $q$,
$S^{-1}H_q(K(\mathbf x;M))\cong H_q(K(\mathbf x/1;S^{-1}M))$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-complex-localises-termwise]], [[thm-localisation-of-modules-is-exact]].

## Proof

**Proof technique:** direct.

1.1 Exact localization commutes with the kernel/image quotient defining homology. [given, algebra]

2.1 The termwise localization chain isomorphism identifies the result with the claimed localized Koszul homology. [step 1.1, algebra] ∎
