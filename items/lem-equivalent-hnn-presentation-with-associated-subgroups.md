---
id: lem-equivalent-hnn-presentation-with-associated-subgroups
kind: lemma
title: "The edge-group presentation is equivalent to the associated-subgroup presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, def-hnn-extension-and-stable-letter, def-subgroup, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let

$$G=\left\langle A,t \,\middle|\, t\,\alpha(c)\,t^{-1}=\beta(c)\text{ for }c\in C\right\rangle$$

be an HNN extension as in [[def-hnn-extension-and-stable-letter]]. Put

$$C_-:=\alpha(C),\qquad C_+:=\beta(C)\le A,$$

and define

$$\phi:=\beta\circ\alpha^{-1}:C_-\to C_+.$$

Then $\phi$ is an isomorphism, and the same group is presented by

$$G=\left\langle A,t \,\middle|\, tct^{-1}=\phi(c)\text{ for every }c\in C_-\right\rangle.$$

## Facts & Assumptions

**Given:** The HNN extension in the statement.

[L1] An HNN extension is defined by relations $t\,\alpha(c)\,t^{-1}=\beta(c)$ with $\alpha,\beta$ injective group homomorphisms into the base group. ([[def-hnn-extension-and-stable-letter]])

[L2] A subgroup is a subset closed under the group operations and inverses. ([[def-subgroup]])

[L3] A group isomorphism is a bijective group homomorphism. ([[def-group-isomorphism-and-automorphism]])

[L4] A group homomorphism is injective if and only if its kernel is trivial. ([[thm-group-homomorphism-injective-iff-trivial-kernel]])

## Proof

**Proof technique:** direct.

1.1 Because $\alpha$ and $\beta$ are injective by [L1], [L4] shows that both maps identify $C$ with their images $C_-,C_+\le A$ from [L2]. Hence $\alpha^{-1}:C_-\to C$ exists, and $\phi=\beta\circ\alpha^{-1}$ is a bijective group homomorphism $C_-\to C_+$. So $\phi$ is an isomorphism by [L3]. [L1, L2, L3, L4, given]

2.1 For each $c\in C$, put $x=\alpha(c)\in C_-$. Then the defining relator $t\alpha(c)t^{-1}=\beta(c)$ from [L1] becomes $txt^{-1}=\phi(x)$. Conversely every $x\in C_-$ has the form $x=\alpha(c)$ for a unique $c\in C$, so every relator $txt^{-1}=\phi(x)$ comes from exactly one original relator. [L1, step 1.1, algebra]

3.1 The two presentations therefore have the same generators and the same set of defining relations after the change of notation $x=\alpha(c)$. Hence they present the same group. [step 2.1] ∎
