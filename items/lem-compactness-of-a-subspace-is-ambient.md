---
id: lem-compactness-of-a-subspace-is-ambient
kind: lemma
title: "A subspace is compact exactly when every family of open subsets of the ambient space covering it, indexed or not, has finitely many members covering it"
status: published
origin: session
deps: [def-compact-space, def-subspace-topology-top, def-topological-space, lem-finite-choice]
justified_by: []
aliases: [lem-ambient-compactness-criterion]
landmark: true
short: "compactness read in the ambient space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $(A, \mathcal{T}_A)$ be the subspace
([[def-subspace-topology-top]]). Then:

1. **Compactness read in the ambient space.** $A$ is a compact subset of $X$
   ([[def-compact-space]]), that is $(A, \mathcal{T}_A)$ is a compact space, if
   and only if for every family $\mathcal{U} \subseteq \mathcal{T}$ with
   $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and
   $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$,
   or else $A = \varnothing$.
2. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if
   for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$
   with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and
   indices $i_0, \dots, i_n \in I$ with
   $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \varnothing$.

Claim 2 is the form used by almost every later proof on this page, because a
cover is usually produced by a rule that attaches an open set to each point or to
each index, and a set of open sets forgets that rule. No choice principle is used
anywhere below; the one place a selection is made is over a finite index set, and
[[lem-finite-choice]] is a theorem of ZF.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$, a subset $A \subseteq X$, and the subspace $(A, \mathcal{T}_A)$ with $\mathcal{T}_A = \{\, U \cap A : U \in \mathcal{T} \,\}$.

[L1] A subset of $A$ is open in $(A, \mathcal{T}_A)$ exactly when it is the trace $U \cap A$ of a set $U$ open in $X$, this being the definition of the subspace topology ([[def-subspace-topology-top]]).

[L2] $(A, \mathcal{T}_A)$ is compact exactly when every family of sets open in $(A, \mathcal{T}_A)$ whose union is $A$ has a finite subfamily whose union is $A$; a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ ([[def-compact-space]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(A, \mathcal{T}_A)$ is compact, let $I$ be a set and let $(U_i)_{i \in I}$ be open subsets of $X$ with $A \subseteq \bigcup_{i \in I} U_i$; then each $U_i \cap A$ is open in $(A, \mathcal{T}_A)$ and $\mathcal{V} := \{\, U_i \cap A : i \in I \,\}$ is a family of open subsets of $A$ whose union is $A$. [L1, L2]

2.1 If $A = \varnothing$ the conclusion of claim 2 holds by its second alternative, so assume $A \ne \varnothing$; then $\mathcal{V}$ is an open cover of $(A, \mathcal{T}_A)$, and compactness yields $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $A = V_0 \cup \dots \cup V_n$. [L2, step 1.1]

3.1 For each $j \le n$ the set $S_j := \{\, i \in I : U_i \cap A = V_j \,\}$ is nonempty by the definition of $\mathcal{V}$, and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $i_0, \dots, i_n \in I$ with $U_{i_j} \cap A = V_j$ for every $j \le n$. [L3, step 2.1]

4.1 Hence $A = V_0 \cup \dots \cup V_n = (U_{i_0} \cap A) \cup \dots \cup (U_{i_n} \cap A) \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, which is the conclusion of claim 2 for the family $(U_i)_{i \in I}$, so the forward implication of claim 2 holds. [step 2.1, step 3.1]

5.1 The converse of claim 2 remains, the forward implication having been settled at step 4.1; so assume the displayed condition, let $\mathcal{G}$ be a family of sets open in $(A, \mathcal{T}_A)$ with union $A$, and put $\mathcal{W} := \{\, U \in \mathcal{T} : U \cap A \in \mathcal{G} \,\}$, a family cut out by a property and indexed by itself. [L1, step 4.1, construct]

6.1 $A \subseteq \bigcup \mathcal{W}$: given $a \in A$ there is $G \in \mathcal{G}$ with $a \in G$, and by [L1] there is $U$ open in $X$ with $U \cap A = G$; that $U$ lies in $\mathcal{W}$ and contains $a$. [L1, step 5.1]

7.1 If $A = \varnothing$ the empty subfamily of $\mathcal{G}$ covers $A$; otherwise the assumed condition applied to the family $\mathcal{W}$ indexed by itself gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $A \subseteq W_0 \cup \dots \cup W_m$. [step 5.1, step 6.1]

8.1 Putting $G_j := W_j \cap A$ for $j \le m$ gives members of $\mathcal{G}$ with $A = (W_0 \cap A) \cup \dots \cup (W_m \cap A) = G_0 \cup \dots \cup G_m$, so $\mathcal{G}$ has a finite subcover and $(A, \mathcal{T}_A)$ is compact. [L2, step 7.1]

9.1 Claim 2 is proved by steps 4.1 and 8.1, and claim 1 is the special case of claim 2 in which $I = \mathcal{U}$ is a family of open subsets of $X$ and $U_i := i$, the conclusion of claim 2 then naming members of $\mathcal{U}$ itself. [step 4.1, step 8.1] ∎

## Remarks

**Why the ambient reading needed a proof at all.** A subset $A$ of $X$ carries two candidate notions of open cover: families of sets open in $(A, \mathcal{T}_A)$, and families of sets open in $X$ whose union contains $A$. The trace description of the subspace topology is what turns one into the other, and it is the reason compactness of $A$ does not depend on which space $A$ is regarded as sitting inside. Every later item on this page that covers a subset by ambient open sets is using claim 1 or claim 2, and says so.

**The traces do not remember their sources.** A single relatively open $V$ is usually the trace of many different ambient open sets, and that is exactly why step 3.1 has to recover indices at all. Recovering infinitely many at once would be a choice principle; recovering finitely many is not, and the proof is arranged so that only finitely many are ever needed.

**The metric statement of the same fact is [[lem-compactness-is-intrinsic]]**, whose claims 2 and 3 are claims 1 and 2 above with balls in place of an abstract topology. Its proof carries an extra first claim, that relative openness in a metric subspace is a trace, which here is the definition of the subspace topology and so needs no argument. Neither statement is used in the proof of the other; that the two agree is [[thm-compactness-agrees-with-metric-compactness]].