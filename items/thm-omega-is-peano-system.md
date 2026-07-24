---
id: thm-omega-is-peano-system
kind: theorem
title: "The von Neumann naturals form a Peano system"
status: published
origin: session
deps: [def-natural-numbers, def-peano-system, thm-induction-principle, lem-nat-transitive-irreflexive]
aliases: []
landmark: true
short: "$(\\omega,\\varnothing,\\sigma)$ ⊨ P1–P3"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
pipeline_run: null
---

## Statement

The triple $(\mathbb{N}, 0, \sigma) = (\omega, \varnothing, {\cdot}^{+})$ satisfies the three Peano axioms ([[def-peano-system]]): (P1) $\sigma(n) \neq 0$ for all $n$; (P2) $\sigma$ is injective; (P3) induction. Hence a Peano system exists.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$, $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]).

[L1] Induction principle ([[thm-induction-principle]]).

[L2] Every natural number is transitive and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** direct.

1.1 (P3) The induction axiom holds: it is exactly the induction principle. [L1]

1.2 (P1) For every $n$, $\sigma(n) = n \cup \{n\}$ contains $n$, so $\sigma(n)$ is nonempty and $\sigma(n) \neq \varnothing = 0$. [given]

1.3 (P2) Suppose $\sigma(m) = \sigma(n)$, i.e. $m \cup \{m\} = n \cup \{n\}$; then $m \in n \cup \{n\}$ so $m \in n$ or $m = n$, and symmetrically $n \in m$ or $n = m$; if $m \neq n$ then $m \in n$ and $n \in m$, whence by transitivity [L2] $m \in n$ gives $m \subseteq n$, and $n \in m \subseteq n$ gives $n \in n$, contradicting $n \notin n$ [L2]; therefore $m = n$ and $\sigma$ is injective. [L2, given]

2.1 P1, P2, P3 all hold, so $(\mathbb{N}, 0, \sigma)$ is a Peano system; in particular a Peano system exists. [step 1.1, step 1.2, step 1.3] ∎
