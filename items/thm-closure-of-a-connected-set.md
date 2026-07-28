---
id: thm-closure-of-a-connected-set
kind: theorem
title: "If $A$ is connected and $A \\subseteq B \\subseteq \\overline{A}$ then $B$ is connected; in particular the closure of a connected set is connected"
status: draft
origin: session
deps: [def-connected-space, lem-connected-subsets-and-separated-sets,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §23"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $A \subseteq X$ be a connected subset
([[def-connected-space]]) and let $B$ satisfy

$$A \;\subseteq\; B \;\subseteq\; \overline{A},$$

the closure being taken in $X$ ([[def-interior-closure-boundary-top]]). Then $B$
is a connected subset of $X$, subsets carrying the subspace topology
([[def-subspace-topology-top]]).

Taking $B = \overline{A}$: **the closure of a connected set is connected.** Taking
$B = A$ recovers the hypothesis, so the statement is a genuine interpolation
between a connected set and its closure: every set squeezed between the two is
connected, and one may stop anywhere.

## Facts & Assumptions

**Given:** A space $X$, a connected subset $A \subseteq X$, and a set $B$ with $A \subseteq B \subseteq \overline{A}$.

[A1] A subset $S \subseteq X$ is disconnected exactly when $S = S_1 \cup S_2$ with $S_1, S_2$ nonempty and separated in $X$, that is $\overline{S_1} \cap S_2 = \varnothing = S_1 \cap \overline{S_2}$; equivalently $S$ is connected exactly when no such decomposition exists ([[lem-connected-subsets-and-separated-sets]], [[def-connected-space]], [[def-subspace-topology-top]]).

[A2] Closure is monotone: if $P \subseteq Q$ then $\overline{P} \subseteq \overline{Q}$, since $\overline{Q}$ is a closed set containing $P$ and $\overline{P}$ is the smallest such ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $B = B_1 \cup B_2$ with $B_1$ and $B_2$ nonempty and separated in $X$, so that $\overline{B_1} \cap B_2 = \varnothing$ and $B_1 \cap \overline{B_2} = \varnothing$. [A1]

1.2 Put $A_1 := A \cap B_1$ and $A_2 := A \cap B_2$; then $A = A_1 \cup A_2$, because $A \subseteq B = B_1 \cup B_2$. [given]

2.1 $A_1$ and $A_2$ are separated in $X$: $\overline{A_1} \cap A_2 \subseteq \overline{B_1} \cap B_2 = \varnothing$ by [A2] and step 1.1, and symmetrically $A_1 \cap \overline{A_2} \subseteq B_1 \cap \overline{B_2} = \varnothing$. [step 1.1, step 1.2, A2]

3.1 Since $A$ is connected, [A1] and steps 1.2 and 2.1 forbid both $A_1$ and $A_2$ from being nonempty, so at least one is empty; the hypothesis of step 1.1 is symmetric in $B_1$ and $B_2$, so after relabelling we may assume $A_2 = A \cap B_2 = \varnothing$. [step 1.2, step 2.1, A1, given]

4.1 Then $A \subseteq B_1$, since $A \subseteq B_1 \cup B_2$ and $A$ meets $B_2$ in nothing by step 3.1; hence $\overline{A} \subseteq \overline{B_1}$ by [A2]. [step 3.1, A2, given]

5.1 Therefore $B_2 \subseteq B \subseteq \overline{A} \subseteq \overline{B_1}$, so $B_2 \subseteq \overline{B_1} \cap B_2 = \varnothing$ by step 1.1; that is $B_2 = \varnothing$, contradicting its nonemptiness in step 1.1. [step 1.1, step 4.1, given]

6.1 So no decomposition as in step 1.1 exists, and $B$ is a connected subset of $X$ by [A1]. [step 1.1, step 5.1, A1] ∎

## Remarks

- **What fails without the upper bound $B \subseteq \overline{A}$.** The conclusion is false for an arbitrary superset of a connected set: any set containing a connected set also contains, for instance, a far-away extra point, and a connected set together with a point outside its closure is disconnected by exactly the decomposition the proof rules out. The hypothesis is used only at step 5.1, and that is where it is needed: it forces $B_2$ to lie inside $\overline{A}$, hence inside $\overline{B_1}$, hence to be empty.

- **The interior of a connected set need not be connected.** Nothing here transfers to interiors, and the two operations behave differently: closure adds points that cling to the set and cannot split it, whereas the interior may remove the very points holding two lumps together.

- **Where this is used.** It is the second half of the standard method for building a connected set that is not path-connected: take a path-connected set, which is connected, and close it up. The closure is connected by this theorem regardless of how badly the added points behave, and that is what [[lem-the-oscillating-zigzag-curve]] exploits.
