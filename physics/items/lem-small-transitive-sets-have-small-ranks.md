---
id: lem-small-transitive-sets-have-small-ranks
kind: lemma
title: "A small transitive set bounds its ranks"
status: published
origin: pipeline
deps: ["def-hereditary-size-and-h-kappa", "def-membership-rank-of-a-set"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 Exercise 34(2), p.101."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

In ZF, if a transitive set $T$ injects into an ordinal $\lambda<\kappa$, where $\kappa$ is an infinite initial ordinal, then $\operatorname{rank}(t)<\kappa$ for every $t\in T$. No regularity or Choice is assumed.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $\kappa$ be an infinite initial ordinal. In ZF set $$H_\kappa=\{x:\exists\lambda<\kappa\ \exists j\ (j:\operatorname{TC}(\{x\})\hookrightarrow\lambda)\}.$$ This initially defines a class. Its root-inclusive transitive closure contains $x$ as an element. When $\operatorname{TC}(\{x\})$ is well-orderable its hereditary cardinality means the least ordinal equinumerous with it; under Choice this exists for every set. The injection formulation above is used without Choice. For infinite $\kappa$, replacing $\operatorname{TC}(\{x\})$ by $\operatorname{TC}(x)$ gives the same class. Indeed $\operatorname{TC}(\{x\})=\{x\}\cup\operatorname{TC}(x)$ by the finite-stage formula. Adding one point to a set injecting into finite $\lambda$ gives an injection into $\lambda+1<\kappa$; for infinite $\lambda$, keep indices at least $\omega$, shift natural indices by one, and use index zero for the added point, obtaining an injection into $\lambda$. Restriction gives the converse. We retain the root-inclusive convention throughout. Conventions and prerequisites: prop-transitive-closure-minimality, def-cardinal. ([[def-hereditary-size-and-h-kappa]])

[F2] Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write $$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$ The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation. Conventions and prerequisites: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion. ([[def-membership-rank-of-a-set]])

## Proof

1.1 By Replacement, $A=\{\operatorname{rank}(t):t\in T\}$ is a set of ordinals. It is downward closed. To see this, suppose $\beta<\alpha\in A$ but $\beta\notin A$, and choose the least attained rank $\gamma>\beta$. Take $t\in T$ of rank $\gamma$. Every $u\in t$ lies in $T$ by transitivity, has rank below $\gamma$, and cannot have rank equal to $\beta$ or strictly between $\beta$ and $\gamma$. Thus all have rank below $\beta$, making $\operatorname{rank}(t)\le\beta$, a contradiction. Consequently $A$ is an ordinal. [F2]

2.1 A supplied injection $j:T\hookrightarrow\lambda$ well-orders $T$ by its image order. For each rank in $A$, take the preimage having least $j$-value. Replacement produces this uniquely specified section, so $A$ injects into $\lambda$. Necessarily $A<\kappa$: otherwise restricting this injection to $\kappa\subseteq A$ would inject $\kappa$ into $\lambda<\kappa$. The image, ordered as a subset of $\lambda$, has order type at most $\lambda$, and its bijection with $\kappa$ would contradict initiality. The order-type bound follows by induction along the enumeration of that subset: its element at position $\xi$ is at least $\xi$. [F1, step 1.1]

3.1 For $t\in T$ its rank belongs to the ordinal $A<\kappa$, so it is below $\kappa$. If $T$ is empty then $A=0$ and the conclusion about its members is vacuous. No supremum of fewer-than-$\kappa$ arbitrary ordinals was assumed to be below $\kappa$; the bound came from the injection. [step 1.1, step 2.1] ∎
