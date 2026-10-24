---
id: thm-compact-iff-finite-intersection-property
kind: theorem
title: "A metric space is compact if and only if every family of closed subsets with the finite intersection property has nonempty intersection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-finite-intersection-property, def-metric-topology, def-metric-space]
justified_by: []
aliases: [thm-fip-compactness]
landmark: true
short: "compactness via the FIP"
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
    - title: "Finite intersection property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_intersection_property"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with closed sets as in
[[def-metric-topology]] and the finite intersection property as in
[[def-finite-intersection-property]]. For a family $\mathcal{A}$ of subsets of
$X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in F \text{ for every } F \in \mathcal{A} \,\},$$

so that $\bigcap \emptyset = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]].

Then $(X,d)$ is compact ([[def-metric-compactness]]) **if and only if** every
family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
property satisfies $\bigcap \mathcal{A} \ne \emptyset$.

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, families of subsets of $X$, and the two notions above.

[A1] Elementary set algebra inside $X$: $X \setminus (X \setminus S) = S$ for $S \subseteq X$, and for any family $\mathcal{S}$ of subsets of $X$ one has $X \setminus \bigcup \mathcal{S} = \bigcap \{\, X \setminus S : S \in \mathcal{S} \,\}$ and $X \setminus \bigcap \mathcal{S} = \bigcup \{\, X \setminus S : S \in \mathcal{S} \,\}$.

[L1] $(X,d)$ is compact exactly when every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$, the empty subfamily serving when $X = \emptyset$ ([[def-metric-compactness]]).

[L2] $F \subseteq X$ is closed exactly when $X \setminus F$ is open ([[def-metric-topology]]).

[L3] $\mathcal{A}$ has the finite intersection property exactly when $\bigcap_{i \in n} s(i) \ne \emptyset$ for every $n \in \mathbb{N}$ and every finite list $s : n \to \mathcal{A}$, the empty list having intersection $X$ ([[def-finite-intersection-property]]).

## Proof

**Proof technique:** direct.

1.1 Complementation inside $X$ is its own inverse, and it exchanges the open subsets of $X$ with the closed ones: $X \setminus (X\setminus S) = S$, and $S$ is open exactly when $X \setminus S$ is closed. [A1, L2]

1.2 For any family $\mathcal{S}$ of subsets of $X$, the union of $\mathcal{S}$ is $X$ exactly when the intersection of the complements is empty, and the intersection of $\mathcal{S}$ is empty exactly when the union of the complements is $X$. [A1]

2.1 In particular, for $F_0, \dots, F_n \subseteq X$ one has $F_0 \cap \dots \cap F_n = \emptyset$ exactly when $(X \setminus F_0) \cup \dots \cup (X\setminus F_n) = X$. [A1, step 1.2]

3.1 Assume $(X,d)$ compact, let $\mathcal{A}$ be a family of closed subsets of $X$ with the finite intersection property, and suppose for contradiction that $\bigcap \mathcal{A} = \emptyset$. [L1, L3, step 2.1, assume-contra]

4.1 Applying the finite intersection property to the empty list gives $X \ne \emptyset$; and $\mathcal{U} := \{\, X \setminus F : F \in \mathcal{A} \,\}$ is a family of open subsets of $X$ whose union is $X \setminus \bigcap\mathcal{A} = X$, hence an open cover of $X$. [L2, L3, step 1.1, step 1.2, step 3.1]

5.1 Compactness applied to $\mathcal{U}$, together with $X \ne \emptyset$, gives $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_n$. [L1, step 4.1]

6.1 Each $U_i$ is $X \setminus F_i$ for the set $F_i := X \setminus U_i$, which lies in $\mathcal{A}$ and is determined by $U_i$ alone; so $F_0 \cap \dots \cap F_n = \emptyset$ by step 2.1, and the list $i \mapsto F_i$ contradicts the finite intersection property of $\mathcal{A}$. [L3, step 1.1, step 2.1, step 5.1, discharge-contradiction]

7.1 Therefore $\bigcap \mathcal{A} \ne \emptyset$, which is the forward implication. [step 6.1]

8.1 Conversely assume that every family of closed subsets of $X$ with the finite intersection property has nonempty intersection, let $\mathcal{U}$ be a family of open subsets of $X$ with union $X$, and suppose for contradiction that no finite subfamily of $\mathcal{U}$ has union $X$. [L1, step 7.1, assume-contra]

9.1 Then $X \ne \emptyset$, since otherwise the empty subfamily would have union $X$; and $\mathcal{A} := \{\, X \setminus U : U \in \mathcal{U} \,\}$ is a family of closed subsets of $X$. [L2, step 1.1, step 8.1]

10.1 $\mathcal{A}$ has the finite intersection property: the empty list has intersection $X \ne \emptyset$, and a list $F_0, \dots, F_n$ of members of $\mathcal{A}$ has $F_i = X \setminus U_i$ with $U_i := X \setminus F_i \in \mathcal{U}$, so $F_0 \cap \dots \cap F_n = \emptyset$ would give $U_0 \cup \dots \cup U_n = X$ by step 2.1, a finite subfamily with union $X$. [L3, step 2.1, step 9.1]

11.1 By the assumed condition $\bigcap \mathcal{A} \ne \emptyset$; but $\bigcap \mathcal{A} = X \setminus \bigcup \mathcal{U} = \emptyset$ because $\mathcal{U}$ has union $X$, and this contradiction is the required one. [step 1.2, step 10.1, discharge-contradiction]

12.1 Hence some finite subfamily of $\mathcal{U}$ has union $X$, so $(X,d)$ is compact, and with step 7.1 both implications are proved. [L1, step 7.1, step 11.1] ∎

## Remarks

**The empty family and the empty space.** The conventions are not decoration. $\bigcap \emptyset = X$ makes the finite intersection property fail outright for every family of subsets of the empty space, so the right-hand condition is vacuously true there; and the empty space is compact, the empty subfamily covering it. The equivalence therefore holds at $X = \emptyset$ as well, with both sides true.

**Why no choice is spent.** The natural-looking step "the finite subcover consists of sets $X \setminus F_i$, so pick $F_i \in \mathcal{A}$" would be a selection if a member of the family could be the complement of several different members. It cannot: complementation inside $X$ is injective, so $F_i$ is recovered from $U_i$ by a formula. That is the whole reason this characterisation, and the completeness half of [[thm-compact-implies-complete-and-totally-bounded]] that runs through it, cost nothing.
