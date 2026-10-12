---
id: lem-connected-subsets-and-separated-sets
kind: lemma
title: "A subspace $A \\subseteq X$ is disconnected exactly when $A = A_1 \\cup A_2$ with $A_1, A_2$ nonempty and separated in $X$, which is the criterion this library already uses on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-connected-space, def-subspace-topology-top, thm-subspace-closure-and-interior,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-connected-r, def-topological-space]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]).
Write $\overline{B}$ for the closure of $B$ in $X$
([[def-interior-closure-boundary-top]]). Then $A$ is a disconnected subset of $X$
([[def-connected-space]]) if and only if there are sets $A_1, A_2$ with

$$A = A_1 \cup A_2, \qquad A_1 \ne \varnothing \ne A_2, \qquad \overline{A_1} \cap A_2 = \varnothing = A_1 \cap \overline{A_2} .$$

Equivalently: $A$ is connected if and only if it admits no such decomposition.
The two sets in such a decomposition are automatically disjoint, since
$A_1 \cap A_2 \subseteq \overline{A_1} \cap A_2 = \varnothing$.

**The displayed condition is the one [[def-connected-r]] states for subsets of
$\mathbb{R}$**, with the closure of $\mathbb{R}$ replaced by the closure of $X$:
there a *disconnection* of $E$ is a pair of nonempty separated sets whose union
is $E$, and $E$ is connected when none exists. That the two closures on
$\mathbb{R}$ are the same operation, and hence that the two definitions agree
there, is proved later on this page; nothing in the present lemma asserts it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and a subset $A \subseteq X$ with the subspace topology $\mathcal{T}_A$.

[A1] $A$ is a disconnected subset of $X$ exactly when the space $(A,\mathcal{T}_A)$ admits a separation, that is a pair $(W_1,W_2)$ of sets open in $A$, nonempty, disjoint, with $W_1 \cup W_2 = A$ ([[def-connected-space]], [[def-subspace-topology-top]]).

[A2] For $B \subseteq A$ the closure of $B$ in the subspace $A$ is $\operatorname{cl}_A(B) = \overline{B} \cap A$ ([[thm-subspace-closure-and-interior]], claim 1).

[A3] In any space a subset equals its own closure exactly when it is closed, and $B \subseteq \overline{B}$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[A4] In any space a subset is closed exactly when its complement is open; two disjoint sets whose union is the whole space are each the complement of the other ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A$ is disconnected and fix a separation $(W_1, W_2)$ of $(A,\mathcal{T}_A)$ as in [A1]; then $W_1$ and $W_2$ are nonempty subsets of $A$ with $W_1 \cup W_2 = A$ and $W_1 \cap W_2 = \varnothing$. [A1]

1.2 Each of $W_1, W_2$ is closed in $A$: being complementary in $A$ and both open in $A$, each is the complement in $A$ of an open set. [A1, A4]

1.3 Conversely suppose $A = A_1 \cup A_2$ with $A_1, A_2$ nonempty and $\overline{A_1} \cap A_2 = \varnothing = A_1 \cap \overline{A_2}$; then $A_1 \cap A_2 = \varnothing$, since $A_1 \cap A_2 \subseteq \overline{A_1} \cap A_2$ by [A3]. [A3]

2.1 In the situation of step 1.1, $\operatorname{cl}_A(W_1) = W_1$ by step 1.2 and [A3], hence $\overline{W_1} \cap A = W_1$ by [A2]; symmetrically $\overline{W_2} \cap A = W_2$. [step 1.1, step 1.2, A2, A3]

2.2 In the situation of step 1.3, $\overline{A_1} \cap A = (\overline{A_1} \cap A_1) \cup (\overline{A_1} \cap A_2) = A_1 \cup \varnothing = A_1$, using $A = A_1 \cup A_2$, the hypothesis $\overline{A_1} \cap A_2 = \varnothing$ and $A_1 \subseteq \overline{A_1}$ from [A3]; symmetrically $\overline{A_2} \cap A = A_2$. [step 1.3, A3]

3.1 So in the situation of step 1.1 one has $\overline{W_1} \cap W_2 \subseteq \overline{W_1} \cap A \cap W_2 = W_1 \cap W_2 = \varnothing$, because $W_2 \subseteq A$; symmetrically $W_1 \cap \overline{W_2} = \varnothing$. Hence $A_1 := W_1$ and $A_2 := W_2$ are nonempty, have union $A$, and are separated in $X$. [step 1.1, step 2.1]

3.2 And in the situation of step 1.3 one has $\operatorname{cl}_A(A_1) = \overline{A_1} \cap A = A_1$ by [A2] and step 2.2, so $A_1$ is closed in $A$ by [A3]; symmetrically $A_2$ is closed in $A$. [step 1.3, step 2.2, A2, A3]

4.1 In the situation of step 1.3 the sets $A_1$ and $A_2$ are therefore disjoint, cover $A$, and are each closed in $A$ by step 3.2, so each is the complement in $A$ of the other and hence open in $A$ by [A4]; being nonempty, $(A_1, A_2)$ is a separation of $(A, \mathcal{T}_A)$ and $A$ is disconnected by [A1]. [step 1.3, step 3.2, A1, A4]

5.1 Step 3.1 gives the forward implication and step 4.1 the backward one, so $A$ is disconnected exactly when the displayed decomposition exists; negating both sides gives the statement for connectedness. [step 3.1, step 4.1] ∎

## Remarks

- **Why the closures are taken in $X$ and the openness in $A$.** The two halves of the criterion live in different spaces on purpose. Relative openness is not visible from $X$ alone — a set open in $A$ need not be open in $X$ — whereas the closure operator of $A$ is computed from that of $X$ by [A2]. Trading the relatively open pieces for ambiently separated ones is exactly what makes the criterion usable when only $X$ is concretely known, which is the situation in every worked example on the companion page.

- **Separated is strictly stronger than disjoint, and that is what is needed.** If the condition asked only for a partition into two nonempty disjoint pieces then every space with at least two points would be "disconnected". The two closure conditions are what forbid one piece from clinging to the other, and each of them is used once in the proof above.

- **The hypothesis $A_i \subseteq A$ is not imposed and is automatic.** Both sets appear inside a union equal to $A$, so each is contained in $A$; the statement is written without the redundant hypothesis so that it can be applied directly to a candidate pair.
