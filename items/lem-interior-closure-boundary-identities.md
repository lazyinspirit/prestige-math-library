---
id: lem-interior-closure-boundary-identities
kind: lemma
title: "Interior commutes with finite intersections and closure with finite unions, while the two reverse combinations are inclusions only and both fail for infinite families; the space is the disjoint union of interior, boundary and exterior"
status: published
origin: session
deps: [def-interior-closure-boundary-top, def-standard-topologies, def-topological-space, def-countable]
justified_by: []
forward_refs: [cex-interior-of-a-union-is-larger]
aliases: []
landmark: false
short: "interior/closure identities and their limits"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space, with interior, closure, boundary
and exterior as in [[def-interior-closure-boundary-top]]. Then:

1. **Monotonicity.** $A \subseteq B$ implies $\operatorname{int}(A) \subseteq \operatorname{int}(B)$
   and $\overline{A} \subseteq \overline{B}$.
2. **The two identities.** For all $A, B \subseteq X$,
   $$\operatorname{int}(A \cap B) = \operatorname{int}(A) \cap \operatorname{int}(B), \qquad \overline{A \cup B} = \overline{A} \cup \overline{B} .$$
3. **The two reverse combinations are inclusions only.** For all
   $A, B \subseteq X$,
   $$\operatorname{int}(A) \cup \operatorname{int}(B) \subseteq \operatorname{int}(A \cup B), \qquad \overline{A \cap B} \subseteq \overline{A} \cap \overline{B},$$
   and both inclusions are strict for $A = \{p\}$ and $B = X \setminus \{p\}$ in
   the cofinite topology on an infinite set $X$ with $p \in X$
   ([[def-standard-topologies]]).
4. **Both identities of claim 2 fail for infinite families.** In the same space,
   with $I := X \setminus \{p\}$,
   $$\bigcup_{x \in I} \overline{\{x\}} = I \subsetneq X = \overline{\bigcup_{x \in I} \{x\}}, \qquad \operatorname{int}\Big(\bigcap_{x \in I} (X \setminus \{x\})\Big) = \varnothing \subsetneq \{p\} = \bigcap_{x \in I} \operatorname{int}(X \setminus \{x\}) .$$
5. **Trichotomy of position.** For every $A \subseteq X$ the three sets
   $\operatorname{int}(A)$, $\partial A$ and $\operatorname{ext}(A)$ are pairwise
   disjoint and their union is $X$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and subsets $A, B \subseteq X$; and, for claims 3 and 4, an infinite set $X$ carrying the cofinite topology, a point $p \in X$ and the index set $I := X \setminus \{p\}$.

[A1] $\operatorname{int}(A)$ is the largest open subset of $A$ and $\overline{A}$ is the smallest closed superset of $A$; $\operatorname{int}(A) \subseteq A \subseteq \overline{A}$; $\operatorname{ext}(A) = X \setminus \overline{A}$ and $\partial A = \overline{A} \setminus \operatorname{int}(A)$ ([[def-interior-closure-boundary-top]]).

[L1] A topology is closed under binary intersections (T3) and its closed sets under binary unions (C3) ([[def-topological-space]]).

[L2] In the cofinite topology on $X$ the open sets are $\varnothing$ together with the sets of finite complement, and the closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L3] A subset of a finite set is finite, and a union of two finite sets is finite ([[def-standard-topologies]]); "infinite" means "not finite" ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: if $A \subseteq B$ then every open $U \subseteq A$ satisfies $U \subseteq B$, so $\operatorname{int}(A) \subseteq \operatorname{int}(B)$; and $\overline{B}$ is a closed set containing $B \supseteq A$, so $\overline{A} \subseteq \overline{B}$. [A1]

1.2 $\operatorname{int}(A) \cap \operatorname{int}(B)$ is open by (T3) and is contained in $A \cap B$, so it is contained in $\operatorname{int}(A \cap B)$; and $\overline{A} \cup \overline{B}$ is closed by (C3) and contains $A \cup B$, so it contains $\overline{A \cup B}$. [A1, L1]

1.3 Since $X$ is infinite, $X \setminus \{p\}$ is infinite: were it finite, $X = \{p\} \cup (X \setminus \{p\})$ would be a union of two finite sets and hence finite. In particular $I \ne \varnothing$. [given, L3]

1.4 Claim 5: $\operatorname{int}(A) \subseteq \overline{A}$ by [A1], so the three sets $\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$ and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint, the first two inside $\overline{A}$ and the third outside it; and their union is $\operatorname{int}(A) \cup (\overline{A} \setminus \operatorname{int}(A)) \cup (X \setminus \overline{A}) = \overline{A} \cup (X \setminus \overline{A}) = X$. [A1]

2.1 Claim 1 applied to $A \cap B \subseteq A$ and $A \cap B \subseteq B$ gives $\operatorname{int}(A \cap B) \subseteq \operatorname{int}(A) \cap \operatorname{int}(B)$ and $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$; applied to $A \subseteq A \cup B$ and $B \subseteq A \cup B$ it gives $\operatorname{int}(A) \cup \operatorname{int}(B) \subseteq \operatorname{int}(A \cup B)$ and $\overline{A} \cup \overline{B} \subseteq \overline{A \cup B}$. [step 1.1]

2.2 In the cofinite topology on the infinite $X$: the set $\{p\}$ is closed, being finite, so $\overline{\{p\}} = \{p\}$; and $\{p\}$ is not open, since $X \setminus \{p\}$ is infinite by step 1.3, so the only open subset of $\{p\}$ is $\varnothing$ and $\operatorname{int}(\{p\}) = \varnothing$. [step 1.3, A1, L2]

2.3 In the same space $B := X \setminus \{p\}$ is open, its complement $\{p\}$ being finite, so $\operatorname{int}(B) = B$; and $B$ is infinite by step 1.3, so the only closed set containing $B$ is $X$ and $\overline{B} = X$. [step 1.3, A1, L2]

2.4 For $x \in I$ the singleton $\{x\}$ is finite, hence closed, so $\overline{\{x\}} = \{x\}$ and $\bigcup_{x \in I} \overline{\{x\}} = I$; meanwhile $\bigcup_{x \in I} \{x\} = I$ is infinite by step 1.3, so its closure is $X$, and $p \in X \setminus I$ makes the inclusion strict. [step 1.3, A1, L2]

3.1 Combining step 1.2 with step 2.1 proves claim 2, and the two inclusions of claim 3 are among those obtained in step 2.1. [step 1.2, step 2.1]

3.2 With $A := \{p\}$ and $B := X \setminus \{p\}$: $\operatorname{int}(A) \cup \operatorname{int}(B) = \varnothing \cup B = X \setminus \{p\}$, while $A \cup B = X$ is open and so $\operatorname{int}(A \cup B) = X$; the inclusion is therefore strict. [step 2.2, step 2.3, A1]

3.3 With the same $A$ and $B$: $A \cap B = \varnothing$, which is closed, so $\overline{A \cap B} = \varnothing$, while $\overline{A} \cap \overline{B} = \{p\} \cap X = \{p\}$; the inclusion is therefore strict, and claim 3 is proved. [step 2.2, step 2.3, A1, L2]

3.4 For $x \in I$ the set $X \setminus \{x\}$ is open, so $\operatorname{int}(X \setminus \{x\}) = X \setminus \{x\}$ and $\bigcap_{x \in I} \operatorname{int}(X \setminus \{x\}) = X \setminus I = \{p\}$; meanwhile $\bigcap_{x \in I} (X \setminus \{x\}) = \{p\}$ has empty interior by step 2.2, so the inclusion is strict and claim 4 is proved. [step 1.3, step 2.2, A1, L2]

4.1 Claims 1, 2, 3, 4 and 5 are established by step 1.1, step 3.1, steps 3.2 and 3.3, steps 2.4 and 3.4, and step 1.4 respectively. [step 1.1, step 3.1, step 3.2, step 3.3, step 2.4, step 3.4, step 1.4] ∎

## Remarks

- **Why the witnesses are all in one space.** The cofinite topology on an infinite set makes every finite set closed and every infinite set dense, so it separates the four combinations of $\operatorname{int}$, $\overline{\ \cdot\ }$, $\cup$ and $\cap$ with a single pair of sets and a single index set, the two families of claim 4 being the singletons and their complements. The same four failures occur in $\mathbb{R}$ with its usual topology, and the sharpest form of the first is on the companion page: the interiors of $\mathbb{Q}$ and of its complement are both empty while the interior of their union is everything ([[cex-interior-of-a-union-is-larger]]).

- **Claim 2 does extend to any finite number of sets**, by iterating it, but not to a family indexed by a set that merely happens to be finite in some other sense: the induction is on the number of sets and claim 4 shows where it stops.

- **The four inclusions of claims 2 and 3 are the only ones that hold in general.** For an arbitrary family the surviving statements are $\bigcup_i \operatorname{int}(A_i) \subseteq \operatorname{int}(\bigcup_i A_i)$, $\operatorname{int}(\bigcap_i A_i) \subseteq \bigcap_i \operatorname{int}(A_i)$, $\bigcup_i \overline{A_i} \subseteq \overline{\bigcup_i A_i}$ and $\overline{\bigcap_i A_i} \subseteq \bigcap_i \overline{A_i}$, each by monotonicity alone, and claim 4 shows that two of the four are already strict: the third for the family of singletons and the second for the family of their complements.
