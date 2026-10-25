---
id: lem-compactness-is-intrinsic
kind: lemma
title: "A subset of a metric space is open in the subspace metric exactly when it is the trace of an open set of the ambient space, and it is compact as a metric space in its own right exactly when every family of open subsets of the ambient space covering it, indexed or not, has finitely many members covering it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-isometry-and-metric-embedding, def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space, lem-finite-choice]
justified_by: []
aliases: [lem-relative-openness-and-compactness]
landmark: true
short: "compactness is intrinsic"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$(A,d_A)$ be the metric subspace ([[def-isometry-and-metric-embedding]]). Then:

1. **Relative openness is a trace.** A set $V \subseteq A$ is open in $(A,d_A)$
   ([[def-metric-topology]]) if and only if $V = U \cap A$ for some $U$ open in
   $(X,d)$.
2. **Compactness read in the ambient space.** $A$ is a compact subset of $X$
   ([[def-metric-compactness]]), that is $(A,d_A)$ is a compact metric space, if
   and only if for every family $\mathcal{U}$ of open subsets of $X$ with
   $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and
   $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$,
   or else $A = \emptyset$.
3. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if
   for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$
   with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and
   indices $i_0, \dots, i_n \in I$ with
   $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$.

Claim 3 is the form used by almost every later proof on this page, because a
cover is usually produced by a rule that attaches an open set to each point or to
each index, and a set of open sets forgets that rule. No choice principle is used
anywhere below; the one place a selection is made is over a finite index set, and
[[lem-finite-choice]] is a theorem of ZF.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ to $A \times A$.

[L1] Balls of a subspace are traces of ambient balls: $B_A(a,r) = B_X(a,r) \cap A$ for $a \in A$ and $r > 0$ ([[def-isometry-and-metric-embedding]], [[def-metric-ball]]).

[L2] A subset $W$ of a metric space is open exactly when every point of $W$ has a ball around it contained in $W$ ([[def-metric-topology]]).

[L3] Open balls are open, and an arbitrary union of open sets is open ([[thm-metric-open-set-algebra]]).

[L4] $(A,d_A)$ is compact exactly when every family of sets open in $(A,d_A)$ whose union is $A$ has a finite subfamily whose union is $A$; a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ ([[def-metric-compactness]]).

[L5] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $U$ is open in $(X,d)$ and put $V := U \cap A$; for $a \in V$ we have $a \in U$, so there is $r > 0$ with $B_X(a,r) \subseteq U$, whence $B_A(a,r) = B_X(a,r) \cap A \subseteq U \cap A = V$, and $V$ is open in $(A,d_A)$. [L1, L2]

1.2 Conversely let $V \subseteq A$ be open in $(A,d_A)$, and let $\mathcal{W} := \{\, B_X(a,r) : a \in V,\ r > 0,\ B_X(a,r) \cap A \subseteq V \,\}$, a family cut out by a property of the pair $(a,r)$ and not by any selection; put $U := \bigcup \mathcal{W}$. [L1, construct]

2.1 $U$ is open in $(X,d)$, being a union of open balls. [L3, step 1.2]

2.2 $U \cap A \subseteq V$, since every member $B_X(a,r)$ of $\mathcal{W}$ satisfies $B_X(a,r) \cap A \subseteq V$ by the defining condition of $\mathcal{W}$. [step 1.2]

2.3 $V \subseteq U \cap A$: given $a \in V$, openness of $V$ in $(A,d_A)$ gives $r > 0$ with $B_A(a,r) \subseteq V$, that is $B_X(a,r) \cap A \subseteq V$, so $B_X(a,r) \in \mathcal{W}$ and $a \in B_X(a,r) \subseteq U$, while $a \in A$ as well. [L1, L2, step 1.2]

3.1 Claim 1 is proved: by steps 2.2 and 2.3 an open $V \subseteq A$ equals $U \cap A$ with $U$ open in $X$ by step 2.1, and conversely every such trace is open in $(A,d_A)$ by step 1.1. [step 1.1, step 2.1, step 2.2, step 2.3]

4.1 For claim 3, suppose first that $(A,d_A)$ is compact, let $I$ be a set and let $(U_i)_{i \in I}$ be open subsets of $X$ with $A \subseteq \bigcup_{i \in I} U_i$; then each $U_i \cap A$ is open in $(A,d_A)$ and $\mathcal{V} := \{\, U_i \cap A : i \in I \,\}$ is a family of open subsets of $A$ whose union is $A$. [step 3.1, L4]

5.1 If $A = \emptyset$ the conclusion of claim 3 holds by its second alternative, so assume $A \ne \emptyset$; then $\mathcal{V}$ is an open cover of $(A,d_A)$, and compactness yields $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $A = V_0 \cup \dots \cup V_n$. [L4, step 4.1]

6.1 For each $j \le n$ the set $S_j := \{\, i \in I : U_i \cap A = V_j \,\}$ is nonempty by the definition of $\mathcal{V}$, and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $i_0, \dots, i_n \in I$ with $U_{i_j} \cap A = V_j$ for every $j \le n$. [L5, step 5.1]

7.1 Hence $A = V_0 \cup \dots \cup V_n = (U_{i_0} \cap A) \cup \dots \cup (U_{i_n} \cap A) \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, which is the conclusion of claim 3 for the family $(U_i)_{i \in I}$, so the forward implication of claim 3 holds. [step 5.1, step 6.1]

8.1 The converse of claim 3 remains, the forward implication having been settled at step 7.1; so assume the displayed condition, let $\mathcal{G}$ be a family of sets open in $(A,d_A)$ with union $A$, and put $\mathcal{U} := \{\, U \subseteq X : U \text{ is open in } (X,d) \text{ and } U \cap A \in \mathcal{G} \,\}$, again a family cut out by a property, indexed by itself. [step 7.1, step 3.1, construct]

9.1 $A \subseteq \bigcup \mathcal{U}$: given $a \in A$ there is $G \in \mathcal{G}$ with $a \in G$, and by claim 1 there is $U$ open in $X$ with $U \cap A = G$; that $U$ lies in $\mathcal{U}$ and contains $a$. [step 3.1, step 8.1]

10.1 If $A = \emptyset$ the empty subfamily of $\mathcal{G}$ covers $A$; otherwise the assumed condition applied to the family $\mathcal{U}$ indexed by itself gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{U}$ with $A \subseteq W_0 \cup \dots \cup W_m$. [step 8.1, step 9.1]

11.1 Putting $G_j := W_j \cap A$ for $j \le m$ gives members of $\mathcal{G}$ with $A = (W_0 \cap A) \cup \dots \cup (W_m \cap A) = G_0 \cup \dots \cup G_m$, so $\mathcal{G}$ has a finite subcover and $(A,d_A)$ is compact. [L4, step 10.1]

12.1 Claim 3 is proved by steps 7.1 and 11.1, and claim 2 is the special case of claim 3 in which $I = \mathcal{U}$ is a family of open subsets of $X$ and $U_i := i$, the conclusion of claim 3 then naming members of $\mathcal{U}$ itself. [step 7.1, step 11.1] ∎

## Remarks

**Why the ambient reading needed a proof at all.** A subset $A$ of $X$ carries two candidate notions of open cover: families of sets open in $(A,d_A)$, and families of sets open in $X$ whose union contains $A$. Claim 1 is what turns one into the other, and it is the reason compactness of $A$ does not depend on which space $A$ is regarded as sitting inside. Every later item on this page that covers a subset by ambient balls is using claim 2 or claim 3, and says so.

**The traces do not remember their sources.** A single relatively open $V$ is usually the trace of many different ambient open sets, and that is exactly why step 6.1 has to recover indices at all. Recovering infinitely many at once would be a choice principle; recovering finitely many is not, and the proof is arranged so that only finitely many are ever needed.
