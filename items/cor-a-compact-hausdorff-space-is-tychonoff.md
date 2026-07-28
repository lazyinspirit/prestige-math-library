---
id: cor-a-compact-hausdorff-space-is-tychonoff
kind: corollary
title: "Under dependent choice a compact Hausdorff space is Tychonoff, and its disjoint closed sets are separated by continuous functions"
status: draft
origin: session
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, thm-urysohn-lemma,
       cor-urysohns-lemma-closes-the-separation-chain, def-compact-space,
       def-completely-regular-and-tychonoff-spaces, def-hausdorff-space,
       def-t0-and-t1-spaces, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
short: "compact Hausdorff is Tychonoff (DC)"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X,\mathcal{T})$ be compact ([[def-compact-space]]) and Hausdorff
([[def-hausdorff-space]]). Then $X$ is Tychonoff
([[def-completely-regular-and-tychonoff-spaces]]), and any two disjoint closed
subsets of $X$ are separated by a continuous function into $[0,1]$ in the sense
of [[thm-urysohn-lemma]].

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $(X,\mathcal{T})$, and dependent choice.

[L1] A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Under dependent choice, a normal $T_1$ space is completely regular ([[cor-urysohns-lemma-closes-the-separation-chain]]).

[L3] Under dependent choice, if $X$ is normal and $P,Q \subseteq X$ are disjoint closed sets, there is a continuous $f : X \to [0,1]$ with $P \subseteq f^{-1}(\{0\})$, $Q \subseteq f^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L4] Tychonoff means completely regular and $T_1$ ([[def-completely-regular-and-tychonoff-spaces]], [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 $X$ is compact and Hausdorff (given); by [L1], $X$ is regular and normal, hence $T_3$ and $T_4$, that is, in particular, normal and $T_1$. [given, L1]

2.1 By [L2] applied to step 1.1 (normal and $T_1$), $X$ is completely regular. [step 1.1, L2]

2.2 Let $A, B \subseteq X$ be disjoint closed sets; by [L3] applied to step 1.1 (normal), fix a continuous $f : X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$. [step 1.1, L3, choose]

3.1 By step 1.1 ($T_1$) and step 2.1 (completely regular), $X$ is Tychonoff by [L4]. [step 1.1, step 2.1, L4]

4.1 Steps 3.1 and 2.2 establish the two clauses of the statement. [step 3.1, step 2.2] ∎

## Remarks

- **Nothing here is new mathematics.** This item exists so that "compact Hausdorff" has a one-step citation to both Tychonoff-ness and to Urysohn separation, rather than requiring every citing page to chain [[thm-a-compact-hausdorff-space-is-regular-and-normal]] through [[cor-urysohns-lemma-closes-the-separation-chain]] or [[thm-urysohn-lemma]] by hand.
