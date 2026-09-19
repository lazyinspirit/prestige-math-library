---
id: cor-brunner-models-also-refute-tietze-extension
kind: corollary
title: "Brunner's endpoint obstruction also refutes bounded Tietze extension"
status: draft
origin: pipeline
deps: [lem-brunner-choice-and-urysohn-obstructions, lem-brunner-urysohn-obstruction-is-injectively-boundable, thm-relative-consistency-countable-choice-without-urysohn, thm-relative-consistency-bpi-without-urysohn, def-continuous-map-top, def-subspace-topology-top, def-interval, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
---

## Statement

Let $L$ be the compact normal ordered continuum of
[[lem-brunner-choice-and-urysohn-obstructions]] with its two distinct endpoint
closed sets $A$ and $B$. The continuous map $g : A \cup B \to [0,1]$ that is $0$
on $A$ and $1$ on $B$ has no continuous extension to $L$. Consequently
$\operatorname{Con}(\mathrm{ZF})$ implies both
$\operatorname{Con}(\mathrm{ZF} + \mathrm{AC}_{\omega} + \text{failure of
bounded Tietze extension})$ and $\operatorname{Con}(\mathrm{ZF} + \mathrm{BPI} +
\text{failure of bounded Tietze extension})$.

## Facts & Assumptions

**Given:** The continuum $L$, its two endpoint closed sets $A, B$, and the function $g$ that is $0$ on $A$ and $1$ on $B$.

[F1] In $L$ every continuous real-valued function is constant, and $L$ is a compact Hausdorff, hence normal, space ([[lem-brunner-choice-and-urysohn-obstructions]], [[def-normal-and-t4-spaces]], [[def-continuous-map-top]]).

[F2] The subspace $A \cup B$ carries the subspace topology, in which a subset is open exactly when it is the trace of an open set of $L$ ([[def-subspace-topology-top]]).

[F3] Conditional on $\operatorname{Con}(\mathrm{ZF})$, the relative-consistency
theorems of this page give, respectively, a model of $\mathrm{ZF} +
\mathrm{AC}_\omega$ and a model of $\mathrm{ZF} + \mathrm{BPI}$ in which some
normal space has two disjoint closed sets admitting no continuous separation
([[thm-relative-consistency-countable-choice-without-urysohn]],
[[thm-relative-consistency-bpi-without-urysohn]]).

[L1] The interval $[0,1]$ is a closed bounded interval of $\mathbb{R}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 The sets $A$ and $B$ are complementary closed subsets of the subspace $A \cup B$, so each is clopen in that subspace by [F2] and [L1]. [given, F2, L1]

2.1 By step 1.1, the map $g$ that is $0$ on the clopen set $A$ and $1$ on the clopen set $B$ is continuous on $A \cup B$: the preimage of any subset of $[0,1]$ is a union of some of $A$, $B$, both of which are open in the subspace. [step 1.1, F2]

3.1 Suppose $G : L \to [0,1]$ were a continuous extension of $g$. Then $G$ is a continuous real-valued function on $L$, hence constant by [F1]; but $G$ equals $0$ on $A$ and $1$ on $B$, and $A, B$ are nonempty, so no constant function can agree with $g$. [step 2.1, F1]

4.1 Therefore no continuous extension of $g$ exists, which is the failure of bounded Tietze extension for the closed subspace $A \cup B$ of $L$. For either model supplied by [F3], let $X$ be its normal-space witness and let $C,D$ be the disjoint closed sets admitting no continuous separation. The map on $C\cup D$ with values $0$ on $C$ and $1$ on $D$ is continuous by the same clopen-subspace argument as steps 1.1--2.1; any continuous extension to $X$ would separate $C$ and $D$, contrary to their defining property. Thus each model supplied by [F3] also witnesses failure of bounded Tietze extension, giving the two displayed consistency statements. [step 1.1, step 2.1, step 3.1, F3] ∎
