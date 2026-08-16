---
id: thm-kleisli-composition-is-associative-and-unital
kind: theorem
title: "Kleisli composition is associative and unital"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-monad]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.2.iv"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Example 6.3.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $(T,\eta,\mu)$ be a monad on $\mathcal C$. For morphisms $f:A\to TB$ and $g:B\to TC$, define

$$g\star f:=\mu_C\circ T(g)\circ f:A\to TC.$$

Then $\star$ is associative, and $\eta_A:A\to TA$ is a two-sided identity at $A$.

## Facts & Assumptions

**Given:** A monad $(T,\eta,\mu)$ as in [[def-monad]] and composable arrows $f:A\to TB$, $g:B\to TC$, and $h:C\to TD$.

## Proof

**Proof technique:** direct.

1.1 Expanding the definitions gives $(h\star g)\star f=\mu_D\circ T(\mu_D)\circ T^2(h)\circ T(g)\circ f$, while $h\star(g\star f)=\mu_D\circ T(h)\circ\mu_C\circ T(g)\circ f$. [given]

2.1 Naturality of $\mu$ at $h$ rewrites $T(h)\circ\mu_C$ as $\mu_{TD}\circ T^2(h)$, and the monad associativity equation $\mu_D\circ T(\mu_D)=\mu_D\circ\mu_{TD}$ identifies the two expansions in step 1.1. [step 1.1, given]

3.1 Naturality of $\eta$ and the two distinct unit laws give $f\star\eta_A=\mu_B\circ T(f)\circ\eta_A=\mu_B\circ\eta_{TB}\circ f=f$ and $\eta_B\star f=\mu_B\circ T(\eta_B)\circ f=f$, so the asserted identities hold. [given] ∎
