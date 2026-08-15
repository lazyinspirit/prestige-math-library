---
id: prop-erdos-hajnal-property-is-complement-invariant
kind: proposition
title: "A hereditary class has the Erdős–Hajnal property exactly when its complementary class does, with the same constants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-hajnal-property-and-constant, def-complement-of-a-graph-class, thm-complementation-preserves-hereditary-classes-and-bases, lem-complement-swaps-cliques-and-stable-sets, cor-h-free-complement-dictionary]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a hereditary graph class and let $\overline{\mathcal C}$ be its complement class. Then $\mathcal C$ has the Erdős–Hajnal property if and only if $\overline{\mathcal C}$ does. More precisely, the two classes have exactly the same Erdős–Hajnal constants. Consequently a graph $H$ and its complement $\overline H$ have the same Erdős–Hajnal constants.

## Facts & Assumptions

**Given:** A hereditary graph class $\mathcal C$.

[L1] An exponent $\epsilon>0$ is an Erdős–Hajnal constant for a hereditary class when every nonempty member $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$ ([[def-erdos-hajnal-property-and-constant]]).

[L2] The complement class is $\overline{\mathcal C}=\{G:\overline G\in\mathcal C\}$ ([[def-complement-of-a-graph-class]]).

[L3] If $\mathcal C$ is hereditary, then $\overline{\mathcal C}$ is hereditary ([[thm-complementation-preserves-hereditary-classes-and-bases]]).

[L4] Complementation exchanges cliques and stable sets, so $\omega(\overline G)=\alpha(G)$ and $\alpha(\overline G)=\omega(G)$ ([[lem-complement-swaps-cliques-and-stable-sets]]).

[L5] A graph $G$ is $H$-free if and only if $\overline G$ is $\overline H$-free ([[cor-h-free-complement-dictionary]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], both classes in the statement are hereditary, and [L4] gives $\operatorname{hom}(\overline G)=\operatorname{hom}(G)$ for every $G$. [L3, L4]

2.1 Let $\epsilon$ be a constant for $\mathcal C$ and let $F\in\overline{\mathcal C}$ be nonempty. Then $\overline F\in\mathcal C$ by [L2], while $|V(\overline F)|=|V(F)|$ and $\operatorname{hom}(\overline F)=\operatorname{hom}(F)$ by step 1.1, so [L1] gives $\operatorname{hom}(F)\ge|V(F)|^\epsilon$. [step 1.1, L1, L2]

3.1 Thus every constant of $\mathcal C$ is a constant of $\overline{\mathcal C}$; applying the same argument to $\overline{\mathcal C}$ and using $\overline{\overline G}=G$ gives the reverse inclusion of constant sets. [step 2.1, L2]

4.1 By [L5], complementation bijects the $H$-free class with the $\overline H$-free class, so step 3.1 gives the fixed-pattern consequence. [step 3.1, L5] ∎
