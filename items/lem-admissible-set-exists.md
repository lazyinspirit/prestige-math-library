---
id: lem-admissible-set-exists
kind: lemma
title: "A smallest admissible set exists"
status: draft
origin: session
deps: [def-admissible-set, def-chain-complete-poset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset and $f : P \to P$ progressive
([[def-chain-complete-poset]]). Then there is a **smallest** $f$-admissible
subset $M \subseteq P$ ([[def-admissible-set]]): $M$ is admissible, and
$M \subseteq A$ for every admissible $A \subseteq P$.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$ and a progressive map $f : P \to P$.

[A1] A subset $A \subseteq P$ is admissible when (C1) $f(x) \in A$ for every $x \in A$, and (C2) $\sup C \in A$ for every chain $C \subseteq A$ ([[def-admissible-set]]).

[L1] Every chain of $P$ has a least upper bound in $P$ ([[def-chain-complete-poset]]).

## Proof

**Proof technique:** direct.

1.1 $P$ satisfies (C1), because $f$ is a map from $P$ to $P$, so $f(x) \in P$ for every $x \in P$. [A1]

1.2 $P$ satisfies (C2), because every chain $C \subseteq P$ has a least upper bound in $P$. [A1, L1]

2.1 So $P$ is admissible, and the collection $\mathcal{A}$ of all admissible subsets of $P$ is nonempty. [step 1.1, step 1.2, A1]

3.1 Define $M = \bigcap \mathcal{A}$, the intersection of all admissible subsets of $P$. [step 2.1, construct]

4.1 Let $x \in M$. For every $A \in \mathcal{A}$ we have $x \in A$, hence $f(x) \in A$ by (C1); since this holds for every $A \in \mathcal{A}$, $f(x) \in M$, so $M$ satisfies (C1). [step 3.1, A1]

4.2 Let $C \subseteq M$ be a chain. For every $A \in \mathcal{A}$ we have $C \subseteq A$, hence $\sup C \in A$ by (C2); since this holds for every $A \in \mathcal{A}$, $\sup C \in M$, so $M$ satisfies (C2). [step 3.1, A1, L1]

4.3 If $A \subseteq P$ is admissible then $A \in \mathcal{A}$, so $M \subseteq A$ because $M$ is the intersection of a collection containing $A$. [step 3.1]

5.1 $M$ is admissible. [step 4.1, step 4.2, A1]

6.1 $M$ is admissible and contained in every admissible subset, so it is the smallest one. [step 5.1, step 4.3] ∎

## Remarks

- Uniqueness is automatic: two smallest admissible sets each contain the other,
  so they are equal. This licenses writing $M$ for "the" smallest admissible set
  throughout [[def-bw-extremal]] and the lemmas that follow.
- $M$ is never empty. Condition (C2) applied to the empty chain puts
  $\bot = \sup\emptyset$ into every admissible set, so $\bot \in M$.
- **Minimality is the only tool used from here on.** Each later step proves that
  all of $M$ has some property by showing that the elements of $M$ with that
  property again form an admissible set, which minimality then forces to be all
  of $M$. That pattern appears in [[lem-extremal-comparability]] and
  [[lem-all-extremal]], and it is what replaces transfinite recursion in this
  proof of [[thm-bourbaki-witt]].
