---
id: prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra
kind: proposition
title: "Lie algebra actions extend to unital actions of the enveloping algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex Lie algebra, let $V$ be a complex vector space, and let $\rho\colon \mathfrak g\to \operatorname{End}(V)$ be a Lie algebra action. Then there is a unique unital algebra homomorphism

$$\widetilde\rho\colon U(\mathfrak g)\to \operatorname{End}(V)$$

whose restriction to $\mathfrak g\subset U(\mathfrak g)$ is $\rho$.

## Facts & Assumptions

**Given:** A complex Lie algebra $\mathfrak g$, a complex vector space $V$, and a Lie algebra homomorphism $\rho\colon \mathfrak g\to \operatorname{End}(V)$.

## Proof

**Proof technique:** direct.

1.1 By the tensor-algebra universal property, $\rho$ extends uniquely to a unital algebra homomorphism $\widehat\rho\colon T(\mathfrak g)\to \operatorname{End}(V)$ with $\widehat\rho(x)=\rho(x)$ for $x\in \mathfrak g$. [given, construct]

1.2 For $x,y\in \mathfrak g$, the Lie-homomorphism identity gives $\widehat\rho(x\otimes y-y\otimes x-[x,y])=\rho(x)\rho(y)-\rho(y)\rho(x)-\rho([x,y])=0$, so the defining ideal of [[def-universal-enveloping-algebra-as-a-tensor-quotient]] lies in $\ker \widehat\rho$. [algebra]

2.1 Therefore $\widehat\rho$ descends uniquely through the quotient $T(\mathfrak g)\twoheadrightarrow U(\mathfrak g)$ from [[def-universal-enveloping-algebra-as-a-tensor-quotient]], producing the required unital algebra homomorphism $\widetilde\rho$. [step 1.1, step 1.2] ∎
