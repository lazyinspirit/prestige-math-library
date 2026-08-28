---
id: thm-second-isomorphism-theorem-in-an-abelian-category
kind: theorem
title: "Second isomorphism theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-join-of-subobjects-in-an-abelian-category, thm-the-meet-of-subobjects-is-their-pullback, thm-first-isomorphism-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Statement

Let $B$ and $C$ be subobjects of an object $A$ in an abelian category. Then
there is a canonical isomorphism

$$(B\vee C)/C\;\cong\;B/(B\wedge C).$$

## Facts & Assumptions

**Given:** Subobjects $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$.

[L1] The join $B\vee C$ is the image of the induced map $[b,c]:B\oplus C\to A$
([[def-the-join-of-subobjects-in-an-abelian-category]]).

[L2] The meet $B\wedge C$ is represented by the pullback of $b$ and $c$
([[thm-the-meet-of-subobjects-is-their-pullback]]).

[L3] A morphism modulo its kernel is canonically isomorphic to its image
([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $q:A\to A/C$ be the quotient map. Consider the composite $q b:B\to A/C$. By [L2], a morphism into $B$ is killed by $q b$ exactly when its composite into $A$ factors through $C$, which is exactly the pullback condition defining $B\wedge C$. So $\ker(q b)=B\wedge C$. [L2, construct]

2.1 By [L3], step 1.1 gives a canonical isomorphism $$B/(B\wedge C)\cong \operatorname{im}(q b).$$ The map $q$ kills $C$, so its restriction to the join $B\vee C$ factors through the quotient $(B\vee C)/C$. Conversely, every summand used in the defining map $[b,c]$ lands in $\operatorname{im}(q b)$ after composing with $q$, because the $C$-summand dies. Hence $\operatorname{im}(q b)$ is exactly the image of $B\vee C$ in $A/C$, namely $(B\vee C)/C$. [L1, L3, step 1.1]

3.1 Combining steps 1.1 and 2.1 yields the canonical isomorphism $(B\vee C)/C\cong B/(B\wedge C)$. [step 1.1, step 2.1] ∎
