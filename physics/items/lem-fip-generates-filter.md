---
id: lem-fip-generates-filter
kind: lemma
title: "A family lies in a filter exactly when it has the finite intersection property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-intersection-property, def-filter, def-filter-base, lem-filter-base-generates, def-natural-numbers, thm-induction-principle, lem-nat-transitive-irreflexive]
justified_by: []
aliases: []
landmark: false
short: "FIP $\\iff$ contained in a filter"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: dd0a4d5043e28bc66a931ad89940c41f6ec9cc86815bf5cb1e61bf01900e597e
    item_sha256: 92b5220a7c8fc28967efcda57afa4c27f6aac352722c8253a6d443fafbeaad13
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Finite intersection property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_intersection_property"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and $\mathcal{A} \subseteq \mathcal{P}(X)$. Write

$$\mathcal{A}^{\cap} := \{\, \textstyle\bigcap_{i \in n} s(i) \;:\; n \in \mathbb{N},\ s : n \to \mathcal{A} \,\}$$

for the family of intersections of finite lists in $\mathcal{A}$
([[def-finite-intersection-property]]), which contains $X$ as the empty
intersection. Then:

1. $\mathcal{A}^{\cap}$ is closed under pairwise intersection and contains
   $\mathcal{A} \cup \{X\}$;
2. if $\mathcal{A}$ has the finite intersection property, then
   $\mathcal{A}^{\cap}$ is a filter base on $X$ ([[def-filter-base]]) and
   $\langle \mathcal{A}^{\cap} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{A}$ ([[def-filter]], [[lem-filter-base-generates]]);
3. conversely, if $\mathcal{A} \subseteq \mathcal{F}$ for some filter $\mathcal{F}$
   on $X$, then $\mathcal{A}$ has the finite intersection property.

Consequently a family of subsets of $X$ is contained in some filter on $X$ if and
only if it has the finite intersection property.

## Facts & Assumptions

**Given:** A set $X$, a family $\mathcal{A} \subseteq \mathcal{P}(X)$, and $\mathcal{A}^{\cap}$ as displayed in the statement. Parts 2 and 3 assume, respectively, that $\mathcal{A}$ has the finite intersection property and that $\mathcal{A}$ is contained in a filter on $X$.

[A1] $\mathcal{A}$ has the finite intersection property when $\bigcap_{i \in n} s(i) \neq \emptyset$ for every $n \in \mathbb{N}$ and every $s : n \to \mathcal{A}$, the case $n = 0$ reading $X \neq \emptyset$ ([[def-finite-intersection-property]]).

[L1] A filter on $X$ contains $X$, omits $\emptyset$, is closed under pairwise intersection, and is closed upward in $X$ ([[def-filter]]).

[L2] A filter base on $X$ is nonempty, omits $\emptyset$, and is downward directed; its upward closure is the smallest filter on $X$ containing it ([[def-filter-base]], [[lem-filter-base-generates]]).

[L3] In the von Neumann encoding $\sigma(n) = n \cup \{n\}$ and $n \notin n$, so, $\mathcal{A}$ being nonempty, a function $u : n \to \mathcal{A}$ extends to a function $u' : \sigma(n) \to \mathcal{A}$ by prescribing $u'(n)$ to be any member of $\mathcal{A}$ ([[def-natural-numbers]], [[lem-nat-transitive-irreflexive]]).

[L4] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $\sigma(n)$ holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Every member of $\mathcal{A}^{\cap}$ is a subset of $X$, and $X \in \mathcal{A}^{\cap}$ as the intersection of the empty list, so $\mathcal{A}^{\cap} \neq \emptyset$. [given, A1]

1.2 $\mathcal{A} \subseteq \mathcal{A}^{\cap}$: for $A \in \mathcal{A}$ the list $s : 1 \to \mathcal{A}$ with $s(0) = A$ has $\bigcap_{i \in 1} s(i) = A$, since $1 = \sigma(0) = \{0\}$. [given, L3]

1.3 Adjoining one member keeps the family: if $B = \bigcap_{k \in p} u(k) \in \mathcal{A}^{\cap}$ and $A \in \mathcal{A}$, then extending $u$ to $u' : \sigma(p) \to \mathcal{A}$ with $u'(p) = A$ gives $\bigcap_{k \in \sigma(p)} u'(k) = B \cap A$, so $B \cap A \in \mathcal{A}^{\cap}$. [given, L3]

1.4 Splitting off the last entry: for $t : \sigma(n) \to \mathcal{A}$ one has $\bigcap_{j \in \sigma(n)} t(j) = \left(\bigcap_{j \in n} t(j)\right) \cap t(n)$, since $\sigma(n) = n \cup \{n\}$. [given, L3]

1.5 If $\mathcal{A}$ has the finite intersection property then no member of $\mathcal{A}^{\cap}$ is empty, that is $\emptyset \notin \mathcal{A}^{\cap}$. [A1, given]

2.1 $\mathcal{A}^{\cap}$ is closed under pairwise intersection, by induction on the length $n$ of the second list: for $n = 0$ the second intersection is $X$ and $B \cap X = B \in \mathcal{A}^{\cap}$; and if the claim holds for all lists of length $n$, then for $t : \sigma(n) \to \mathcal{A}$ the set $B \cap \bigcap_{j \in \sigma(n)} t(j) = \left(B \cap \bigcap_{j \in n} t(j)\right) \cap t(n)$ lies in $\mathcal{A}^{\cap}$ by the case $n$ followed by step 1.3. [step 1.3, step 1.4, L4]

2.2 Every filter $\mathcal{F}$ on $X$ with $\mathcal{A} \subseteq \mathcal{F}$ satisfies $\mathcal{A}^{\cap} \subseteq \mathcal{F}$, by induction on the length $n$ of the list: the empty intersection is $X \in \mathcal{F}$, and $\bigcap_{j \in \sigma(n)} t(j) = \left(\bigcap_{j \in n} t(j)\right) \cap t(n)$ is an intersection of two members of $\mathcal{F}$. [step 1.4, L1, L4]

3.1 Under the finite intersection property, $\mathcal{A}^{\cap}$ is a filter base on $X$: it is nonempty by step 1.1, omits $\emptyset$ by step 1.5, and is downward directed because $B_1 \cap B_2$ itself lies in $\mathcal{A}^{\cap}$. [step 1.1, step 1.5, step 2.1, L2]

3.2 Conversely, if $\mathcal{A} \subseteq \mathcal{F}$ with $\mathcal{F}$ a filter on $X$, then $\mathcal{A}^{\cap} \subseteq \mathcal{F}$ and $\emptyset \notin \mathcal{F}$, so no intersection of a finite list in $\mathcal{A}$ is empty: $\mathcal{A}$ has the finite intersection property. [step 2.2, L1, A1]

4.1 Under the finite intersection property, $\langle \mathcal{A}^{\cap} \rangle$ is the smallest filter on $X$ containing $\mathcal{A}$: it is a filter containing $\mathcal{A}^{\cap} \supseteq \mathcal{A}$, and any filter containing $\mathcal{A}$ contains $\mathcal{A}^{\cap}$ and hence its upward closure. [step 3.1, step 2.2, step 1.2, L2]

5.1 So $\mathcal{A}^{\cap}$ contains $\mathcal{A} \cup \{X\}$ and is closed under pairwise intersection, and $\mathcal{A}$ is contained in some filter on $X$ if and only if it has the finite intersection property, in which case the smallest such filter is $\langle \mathcal{A}^{\cap} \rangle$. [step 1.1, step 1.2, step 2.1, step 4.1, step 3.2] ∎

## Remarks

- **Where the hypothesis bites.** Part 1 is unconditional: finite lists can always be extended one entry at a time. Only properness, $\emptyset \notin \mathcal{A}^{\cap}$, needs the finite intersection property, and it is exactly that property restated. So the content of the lemma is bookkeeping in one direction and a definition unfolded in the other, which is why the finite intersection property is the right hypothesis rather than a convenient one.
- The proof uses induction only to move along the length of a list. No theory of finite sets is needed, because a finite list is a function out of a natural number and a natural number is its own set of predecessors ([[def-natural-numbers]]).
- The empty list matters twice: it puts $X$ into $\mathcal{A}^{\cap}$, which is what makes $\mathcal{A}^{\cap}$ nonempty even when $\mathcal{A}$ is empty, and it is the base case of both inductions. With the $n \geq 1$ reading of the finite intersection property one would have to add $\mathcal{A} \neq \emptyset$ as a hypothesis to part 2.
- The generated filter $\langle \mathcal{A}^{\cap} \rangle$ is the filter usually written $\langle \mathcal{A} \rangle$ and called the filter generated by $\mathcal{A}$. It is only defined when $\mathcal{A}$ has the finite intersection property, which is why this library names the base explicitly.
