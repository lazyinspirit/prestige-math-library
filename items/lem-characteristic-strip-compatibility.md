---
id: lem-characteristic-strip-compatibility
kind: lemma
title: "Compatibility of a characteristic strip with Cauchy data"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-semilinear-and-quasilinear-first-order-cauchy-problems, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement

If a $C^1$ solution has $u(\gamma(y))=\phi(y)$ and $p_0(y):=Du(\gamma(y))$,
then

$$p_0(y)D\gamma(y)=D\phi(y),\qquad p_0(y)\cdot a(\gamma(y),\phi(y))=b(\gamma(y),\phi(y)).$$

The first condition is tangential compatibility.  The rank condition for the
projected strip is a separate hypothesis; it is not derived from this identity.

## Facts & Assumptions

**Given:** The $C^1$ Cauchy data and a $C^1$ solution attaining them.

## Proof

**Proof technique:** direct.

1.1 Differentiate $u\circ\gamma=\phi$ with respect to $y$ to obtain $Du(\gamma)D\gamma=D\phi$. [given, algebra]

2.1 Evaluate $a(x,u)\cdot Du=b(x,u)$ at $x=\gamma(y)$ and use $u(\gamma(y))=\phi(y)$ to obtain the second identity. [given, algebra] ∎
