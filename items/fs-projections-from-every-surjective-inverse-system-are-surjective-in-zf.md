---
id: fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf
kind: false-statement
title: "FALSE: every inverse limit of surjective finite-group systems has surjective coordinate projections in ZF"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coordinate-projections-from-an-inverse-limit, thm-concrete-inverse-limit-universal-property-in-groups]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

In ZF, every inverse system of finite groups with surjective transition maps has
surjective coordinate projections from its inverse limit.

## Facts & Assumptions

**Given:** The classical set-theoretic fact that this surjectivity principle is
not provable in ZF for arbitrary infinite inverse systems of finite groups.

[L1] The coordinate projections from an inverse limit are the canonical maps,
and the universal property alone does not assert their surjectivity
([[def-coordinate-projections-from-an-inverse-limit]],
[[thm-concrete-inverse-limit-universal-property-in-groups]]).

## Refutation

**Proof technique:** direct.

1.1 The statement is a global set-theoretic assertion about all surjective inverse systems, not a theorem of ZF proved by [L1]. In models of ZF without sufficient choice, there are inverse systems of finite groups with surjective bonding maps for which a prescribed coordinate value has no compatible lift. [given, L1]

2.1 In such a model, the corresponding coordinate projection from the inverse limit fails to be surjective. Therefore the universal claim in the Statement is false in ZF. [step 1.1]

3.1 So surjectivity of all coordinate projections requires extra choice beyond bare ZF. This refutes the statement. [step 1.1, step 2.1] ∎
