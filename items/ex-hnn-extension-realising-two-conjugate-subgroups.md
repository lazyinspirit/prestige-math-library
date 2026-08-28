---
id: ex-hnn-extension-realising-two-conjugate-subgroups
kind: example
title: "An HNN extension realises two chosen isomorphic subgroups as conjugate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hnn-extension-and-stable-letter, prop-universal-property-of-an-hnn-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Example

If $\alpha,\beta:C\to A$ are injective, then in the HNN extension

$$G=\left\langle A,t \,\middle|\, t\,\alpha(c)\,t^{-1}=\beta(c)\text{ for }c\in C\right\rangle,$$

the subgroups $\alpha(C)$ and $\beta(C)$ become conjugate by the stable letter:

$$t\,\alpha(C)\,t^{-1}=\beta(C).$$

## Facts & Assumptions

**Given:** The HNN extension in the statement.

[L1] The defining relations of an HNN extension identify $t\,\alpha(c)\,t^{-1}$ with $\beta(c)$ for every $c\in C$. ([[def-hnn-extension-and-stable-letter]])

[L2] The stable letter is the universal element that enforces the required conjugacy relation. ([[prop-universal-property-of-an-hnn-extension]])

## Verification

**Proof technique:** direct.

1.1 For every $c\in C$, [L1] gives $t\,\alpha(c)\,t^{-1}=\beta(c)$. Hence $t\,\alpha(C)\,t^{-1}\subseteq\beta(C)$. [L1, given]

2.1 Applying the same relation to $t^{-1}$ shows $\alpha(c)=t^{-1}\beta(c)t$ for every $c\in C$, so $\beta(C)\subseteq t\,\alpha(C)\,t^{-1}$. Thus the two subgroups are conjugate exactly as [L2] predicts. [L1, L2, step 1.1, algebra] ∎
