---
id: cex-same-finite-quotients-do-not-trivially-identify-abstract-groups
kind: counterexample
title: "Nonisomorphic groups can share the same profinite completion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic, def-profinite-completion-of-an-abstract-group, thm-profinite-completion-is-functorial]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement refuted

If two groups have the same profinite completion, then they are already
isomorphic as abstract groups.

## Facts & Assumptions

**Given:** The groups $G=\mathbb Z$ and $H=\mathbb Z\oplus\mathbb Q$.

[L1] The profinite completion depends only on the system of finite quotients
([[def-profinite-completion-of-an-abstract-group]],
[[thm-profinite-completion-is-functorial]]).

## Counterexample

**Proof technique:** direct.

1.1 As in [[fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic]], every finite quotient of $H$ factors through the projection onto $\mathbb Z$. Hence $G$ and $H$ have the same finite quotients, namely the finite cyclic groups. [given, algebra]

2.1 Therefore [L1] gives isomorphic profinite completions, both equal to $\widehat{\mathbb Z}$. But $G$ and $H$ are not isomorphic because $H$ contains the divisible subgroup $\mathbb Q$ and $G$ does not. [L1, step 1.1]

3.1 This is a concrete counterexample to the statement. [step 1.1, step 2.1] ∎
