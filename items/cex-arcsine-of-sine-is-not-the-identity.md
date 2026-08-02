---
id: cex-arcsine-of-sine-is-not-the-identity
kind: counterexample
title: "$\\arcsin(\\sin x)$ is not the identity outside the principal interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-sine-and-cosine, thm-cofunction-supplementary-and-reflection-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23 Principal Values"
      url: "https://dlmf.nist.gov/4.23.ii"
pipeline_run: null
---

## Example

The identity $\arcsin(\sin x)=x$ is not valid for every $x\in\mathbb R$. For example,

$$\arcsin(\sin(3\pi/4))=\pi/4\ne3\pi/4.$$

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] Principal arcsine is the inverse of sine with values restricted to $[-\pi/2,\pi/2]$ ([[def-principal-inverse-sine-and-cosine]]).

[L2] The supplementary identity is $\sin(\pi-x)=\sin x$ ([[thm-cofunction-supplementary-and-reflection-identities]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\sin(3\pi/4)=\sin(\pi/4)$.  Since $\pi/4$ lies in the principal range of arcsine, [L1] gives $\arcsin(\sin(3\pi/4))=\pi/4$.  [L1, L2, algebra]

2.1 Since $\pi/4\ne3\pi/4$, step 1.1 is the claimed counterexample. [step 1.1, algebra] ∎
