---
id: def-ip
kind: definition
title: "The class IP"
status: published
origin: session
deps: [def-completeness-and-soundness, def-interactive-proof-transcript-round-and-strategy, lem-sequential-repetition-amplifies-error]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local IP definition, constant-gap argument and direct-prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Definition 8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

The class $\mathrm{IP}$ consists of languages having an interactive protocol with a probabilistic polynomial-time verifier and polynomially bounded interaction as in [[def-interactive-proof-transcript-round-and-strategy]], completeness at least $2/3$, and soundness at most $1/3$ in the sense of [[def-completeness-and-soundness]].

## Remarks

Replacing these two constants by any fixed $c,s$ with $0<s<c<1$ defines the same class. To see this from a $(c,s)$ protocol, choose a dyadic rational $a$ strictly between $1/2-c/4$ and $1/2-s/4$. After the original protocol, use fresh private bits to accept with probability $a+1/4$ if its decision was acceptance, and with probability $a$ otherwise. Both probabilities are dyadic numbers in $[0,1]$, so a fixed finite number of fair bits realizes this rule exactly. The new completeness is at least $a+c/4>1/2$ and soundness at most $a+s/4<1/2$. Apply [[lem-sequential-repetition-amplifies-error]] with $\varepsilon=1/3$ to obtain the defining IP constants. Conversely, starting from the defining constants, apply the same lemma with $0<\varepsilon\leq\min\{1-c,s\}$ to obtain completeness at least $c$ and soundness at most $s$. All added randomness and repetitions have bounds constant in the input length. No endpoint assertion about zero soundness or perfect completeness is included in this constant-gap argument.
