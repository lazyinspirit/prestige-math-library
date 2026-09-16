---
id: thm-ma-not-ch-normal-nonmetrizable-moore-space
kind: theorem
title: "MA plus not-CH yields a normal nonmetrizable Moore space"
status: draft
origin: pipeline
deps: [def-q-sets-and-heath-moore-space-interface, def-martins-axiom, lem-ma-produces-an-uncountable-q-set, thm-bing-q-set-moore-space-is-normal-and-nonmetrizable, def-moore-spaces-and-developments]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Example 4.1, Lemma 4.3 and Theorem 4.4, printed pp. 5-9"
---

## Statement

$\mathrm{ZFC} + \mathrm{MA} + \lnot \mathrm{CH}$ proves that there is a separable
normal nonmetrizable Moore space.

## Facts & Assumptions

**Given:** $\mathrm{MA} + \lnot \mathrm{CH}$ and a subset $E_0 \subseteq \mathbb R$ with $|E_0| = \omega_1$.

[F1] Every set of reals of cardinality $\omega_1$ is a Q-set and an uncountable Q-set exists ([[lem-ma-produces-an-uncountable-q-set]], [[def-q-sets-and-heath-moore-space-interface]]).

[F2] For every uncountable Q-set $E$ the tangent-disk space $Z(E)$ is a separable normal nonmetrizable Moore space ([[thm-bing-q-set-moore-space-is-normal-and-nonmetrizable]], [[def-q-sets-and-heath-moore-space-interface]], [[def-moore-spaces-and-developments]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the set $E_0$, of cardinality $\omega_1$, is an uncountable Q-set. [given, F1]

2.1 Applying [F2] to $E_0$ produces a separable normal nonmetrizable Moore space, namely the tangent-disk space $Z(E_0)$. [step 1.1, F2] ∎

## Remarks

- **This is the second of the two standard refutations of the normal Moore space conjecture, and the only one available at $\omega_1$.** It uses no large cardinal, only $\mathrm{MA}$ and the failure of $\mathrm{CH}$; the construction is separable, in contrast with the $\mathrm{CH}$ construction recorded elsewhere on this page.

- **The two ingredients are independent.** The Q-set comes from Martin's axiom through almost-disjoint forcing ([[lem-solovay-almost-disjoint-extension-under-ma]]), and the space comes from Bing's tangent-disk construction; the theorem spends both.
