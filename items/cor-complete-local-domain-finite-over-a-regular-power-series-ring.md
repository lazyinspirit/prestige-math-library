---
id: cor-complete-local-domain-finite-over-a-regular-power-series-ring
kind: corollary
title: "A complete local domain is finite over a regular power-series ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-system-of-parameters-and-parameter-ideal, lem-parameter-power-series-subring-makes-ring-finite, lem-parameter-power-series-map-injective-by-dimension]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Example 22.31"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain
of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an
injective local homomorphism
$$k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$$
whose image is a regular complete local subring over which $A$ is module-finite.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local domain $(A,\mathfrak m)$ of dimension $d$ and the Axiom of Choice.

[L1] The parameter power-series map makes $A$ finite over its image
([[lem-parameter-power-series-subring-makes-ring-finite]]).

[L2] The same map is injective
([[lem-parameter-power-series-map-injective-by-dimension]]).

[L3] A system of parameters is the $d$-tuple that determines the relevant map
([[def-system-of-parameters-and-parameter-ideal]]).

## Proof

**Proof technique:** choose parameters, then identify the source with its image.

1.1 Choose a coefficient field $k \subseteq A$ and a system of parameters $x_1,\ldots,x_d$. By [L3], these parameters determine the continuous map $$\phi:k\llbracket X_1,\ldots,X_d\rrbracket \to A, \qquad X_i \mapsto x_i.$$ [L3, given, choose]

2.1 By [L1], $A$ is finite over $\phi(k\llbracket X_1,\ldots,X_d\rrbracket)$, and by [L2] the map $\phi$ is injective. Therefore we may identify the source with a subring $A_0 \subseteq A$ over which $A$ is module-finite. Standard formal-power-series theory makes $A_0 \cong k\llbracket X_1,\ldots,X_d\rrbracket$ a regular complete local ring. [L1, L2, step 1.1]

3.1 Hence $A$ is finite over a regular power-series subring in $d$ variables over a coefficient field. [step 2.1] ∎
