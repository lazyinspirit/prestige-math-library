---
id: cor-change-of-rings-for-extension-of-scalars
kind: corollary
title: "Change of rings: $N\\otimes_RM\\cong N\\otimes_S(S\\otimes_RM)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-restriction-and-extension-of-scalars, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 4 on tensor products and flatness"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Statement

Let $R\to S$ be a homomorphism of commutative rings, let $N$ be a right $S$-module, and let $M$ be a left $R$-module. There is a natural group isomorphism

$$N\otimes_RM\cong N\otimes_S(S\otimes_RM)$$

given by

$$n\otimes m\longmapsto n\otimes(1_S\otimes m),$$

with inverse $n\otimes(s\otimes m)\mapsto ns\otimes m$.

## Facts & Assumptions

**Given:** A ring map $R\to S$, a right $S$-module $N$, and a left $R$-module $M$.

[L1] Restriction makes $N$ a right $R$-module and makes $S$ an $(S,R)$-bimodule used in $S\otimes_RM$ ([[def-restriction-and-extension-of-scalars]]).

[L2] Compatible bimodules have the associativity isomorphism $(N\otimes_SS)\otimes_RM\cong N\otimes_S(S\otimes_RM)$ ([[thm-associativity-of-balanced-tensor-products]]).

[L3] The tensor-unit isomorphism identifies $N\otimes_SS$ with $N$ by $n\otimes s\mapsto ns$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to $N$, the $(S,R)$-bimodule $S$, and $M$, then use [L3] on the left factor to obtain $(N\otimes_SS)\otimes_RM\cong N\otimes_S(S\otimes_RM)$ and hence $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$. [given, L1, L2, L3]

2.1 Tracing elementary tensors through step 1.1 gives $n\otimes m\mapsto n\otimes(1\otimes m)$; tracing the inverse gives $n\otimes(s\otimes m)\mapsto ns\otimes m$. [step 1.1, L2, L3]

3.1 The two formulas are mutually inverse on elementary tensors. The inverse after the forward map sends $n\otimes m$ to $n1_S\otimes m=n\otimes m$. In the other direction, balance over $S$ gives $ns\otimes(1_S\otimes m)=n\otimes s(1_S\otimes m)=n\otimes(s\otimes m)$. The universal properties therefore make the composites identities. [step 2.1, L1, L2, L3]

3.2 Each construction commutes with homomorphisms in $N$ and $M$ because its elementary-tensor formula does, so the isomorphism is natural. [step 2.1, algebra]

4.1 This proves the change-of-rings isomorphism and its stated inverse. [step 3.1, step 3.2] ∎
