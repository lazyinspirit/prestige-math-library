---
id: thm-a-locally-compact-hausdorff-space-is-completely-regular
kind: theorem
title: "Under dependent choice a locally compact Hausdorff space is completely regular, hence Tychonoff"
status: published
origin: session
deps: [thm-urysohn-lemma, def-one-point-compactification, thm-one-point-compactification-properties,
       thm-a-compact-hausdorff-space-is-regular-and-normal, def-locally-compact-space,
       def-completely-regular-and-tychonoff-spaces,
       def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top,
       thm-t1-iff-singletons-are-closed, def-dependent-choice, def-interval]
justified_by: []
aliases: []
landmark: true
short: "locally compact Hausdorff is completely regular (DC)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §33, 38"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is locally compact ([[def-locally-compact-space]]) and
Hausdorff ([[def-hausdorff-space]]), then $X$ is completely regular
([[def-completely-regular-and-tychonoff-spaces]]), and hence, being Hausdorff,
$X$ is Tychonoff.

The proof passes through the one-point compactification
([[def-one-point-compactification]]) rather than through a hereditary
property of regularity or complete regularity: none is used or needed.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is locally compact ([[def-locally-compact-space]]) and Hausdorff ([[def-hausdorff-space]]).

[L1] The one-point compactification $X^{*} = X \cup \{\infty\}$ of a locally compact Hausdorff space $X$: its open sets are the open sets of $X$ together with the sets $X^{*} \setminus K$ for $K$ a closed compact subset of $X$ ([[def-one-point-compactification]]); consequently its closed sets are $\{\, F \cup \{\infty\} : F \text{ closed in } X \,\}$ together with $\{\, K : K \text{ closed compact in } X \,\}$, the complements of the two families of open sets.

[L2] $X^{*}$ is compact and contains $X$ as an open subspace (so the subspace topology $X$ inherits from $X^{*}$ is its own topology $\mathcal{T}$); and $X^{*}$ is Hausdorff, since $X$ is locally compact and Hausdorff ([[thm-one-point-compactification-properties]]).

[L3] A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L4] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]]).

[L5] Urysohn's lemma, clause 1: assuming DC, a normal space's disjoint closed sets admit a continuous $[0,1]$-valued separating function ([[thm-urysohn-lemma]]).

[L6] If $g : X^{*} \to Y$ is continuous and $X \subseteq X^{*}$ carries the subspace topology, then $g|_X$ is continuous ([[def-subspace-topology-top]]).

[L7] Completely regular: for closed $C$ and $x_0 \notin C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $X^{*}$ is compact and Hausdorff; by [L3], $X^{*}$ is regular and normal, hence $T_3$ and $T_4$, that is normal and $T_1$. [A1, L2, L3]

1.2 $C \cup \{\infty\}$ is closed in $X^{*}$: $C$ is closed in $X$ (given), so $C \cup \{\infty\}$ is one of the sets $F \cup \{\infty\}$ of [L1] with $F=C$. [given, L1]

1.3 $\{x_0\}$ and $C \cup \{\infty\}$ are disjoint: $x_0 \in X$, so $x_0 \ne \infty$, and $x_0 \notin C$ (given). [given]

1.4 For $x \ne y$ in $X$, Hausdorffness (given, [A1]) supplies disjoint open $U \ni x$, $V \ni y$; then $y \notin U$ (else $y \in U \cap V = \varnothing$) and $x \notin V$ similarly, so $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). [A1]

2.1 By step 1.1 ($T_1$) and [L4], $\{x_0\} \subseteq X \subseteq X^{*}$ is closed in $X^{*}$. [step 1.1, L4]

3.1 By step 1.1 ($X^{*}$ normal), steps 2.1, 1.2 and 1.3, and [L5], fix a continuous $g : X^{*} \to [0,1]$ with $C \cup \{\infty\} \subseteq g^{-1}(\{0\})$ and $\{x_0\} \subseteq g^{-1}(\{1\})$. [step 1.1, step 2.1, step 1.2, step 1.3, L5, choose]

4.1 By [L6] and [L2] ($X$ a subspace of $X^{*}$ with its own topology), $f := g|_X : X \to [0,1]$ is continuous. For $x \in C$: $x \in C \cup \{\infty\}$, so $f(x)=g(x)=0$; and $f(x_0) = g(x_0) = 1$, since $x_0 \in \{x_0\} \subseteq g^{-1}(\{1\})$. [step 3.1, L2, L6]

5.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 4.1 exhibits, for every closed $C \subseteq X$ and $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$, $f \equiv 0$ on $C$; by [L7], $X$ is completely regular. [step 4.1, L7]

6.1 By steps 5.1 and 1.4, $X$ is completely regular and $T_1$, that is Tychonoff. [step 5.1, step 1.4] ∎

## Remarks

- **Only two facts about $X^{*}$ are used**: that it is compact Hausdorff (so normal, via [[thm-a-compact-hausdorff-space-is-regular-and-normal]]), and that $X$ sits inside it as an open subspace with its own topology, so that a Urysohn function on $X^{*}$ restricts to one on $X$ with no further argument. No property of $X^{*}$ beyond these two, and no hereditary behaviour of regularity, complete regularity or normality, is used anywhere in the proof.

- **The choice principle is the one already inside Urysohn's lemma**, applied once, inside the compact Hausdorff space $X^{*}$; nothing above performs a further selection.
