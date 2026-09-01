---
id: ex-fraction-field-flat-not-projective
kind: example
title: "A fraction field is flat over its domain and may fail to be projective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisations-are-flat, thm-projective-module-characterizations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §9"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Example

Assume the Axiom of Choice for the direct-summand characterization below.

Let $R=\mathbb Z$ and $K=\mathbb Q$. Then $K$ is the localization
$S^{-1}\mathbb Z$ with $S=\mathbb Z\setminus\{0\}$, so $K$ is flat over
$\mathbb Z$. It is not projective over $\mathbb Z$, because otherwise it would
be flat and a direct summand of a free abelian group; but no nonzero direct
summand of a free abelian group is divisible, whereas $\mathbb Q$ is divisible.

## Facts & Assumptions

**Given:** The Axiom of Choice and the inclusion $\mathbb Z\subset\mathbb Q$.

[L1] Localizations are flat ([[thm-localisations-are-flat]]).

[L3] Under the Axiom of Choice, a projective module is a direct summand of a free module ([[thm-projective-module-characterizations]]).

## Verification

**Proof technique:** direct.


1.1 Since $\mathbb Q$ is the localization of $\mathbb Z$ at the nonzero integers, [L1] gives that $\mathbb Q$ is flat over $\mathbb Z$. [L1, given]


1.2 Assume the Axiom of Choice. If $\mathbb Q$ were projective, [L3] would make it a direct summand of a free abelian group. Every direct summand of a free abelian group is reduced, while $\mathbb Q$ is nonzero and divisible. Hence $\mathbb Q$ is not projective. [L3, algebra]


2.1 Thus a fraction field can be flat without being projective. [algebra] ∎
