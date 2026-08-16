---
id: thm-equivalent-characterisations-of-an-idempotent-monad
kind: theorem
title: "For a monad, invertibility of multiplication, monicity of every multiplication component, and equality of the two whiskered units are equivalent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-idempotent-monad, def-monomorphism-and-epimorphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.iii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a monad $(T,\eta,\mu)$, the following are equivalent:

1. $\mu$ is a natural isomorphism, so the monad is idempotent ([[def-idempotent-monad]]);
2. every component $\mu_A:T^2A\to TA$ is monic;
3. $\eta T=T\eta:T\Rightarrow T^2$.

## Facts & Assumptions

**Given:** A monad $(T,\eta,\mu)$.

[L1] A monomorphism is left-cancellable: $m\circ g=m\circ h$ implies $g=h$ ([[def-monomorphism-and-epimorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $\mu$ is a natural isomorphism, each $\mu_A$ is an isomorphism and therefore monic, proving $1\Rightarrow2$. [given]

1.2 If every $\mu_A$ is monic, the monad unit laws give $\mu_A\circ\eta_{TA}=1_{TA}=\mu_A\circ T(\eta_A)$; cancellation by [L1] yields $\eta_{TA}=T(\eta_A)$ for every $A$, proving $2\Rightarrow3$. [L1, given]

2.1 Assume $\eta T=T\eta$. The unit law makes $\eta_{TA}$ a right inverse to $\mu_A$. Naturality of $\eta$ at $\mu_A$, followed by $\eta_{T^2A}=T(\eta_{TA})$, gives $\eta_{TA}\circ\mu_A=T(\mu_A)\circ T(\eta_{TA})=1_{T^2A}$; thus $\eta_{TA}$ is also a left inverse, every $\mu_A$ is invertible, and $3\Rightarrow1$. [given] ∎
