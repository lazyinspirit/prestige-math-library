---
id: lem-nonempty-countable-set-has-a-padded-enumeration
kind: lemma
title: "A nonempty countable set has a padded enumeration in ZF"
status: draft
origin: pipeline
deps: [def-countable, lem-countable-iff-surjection-from-n, def-natural-numbers, def-injection-surjection-bijection]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "§2.3, pp. 7-8"
---

## Statement

In $\mathrm{ZF}$, every nonempty at most countable set $D$
([[def-countable]]) is the range of a sequence $s : \mathbb{N} \to D$
([[def-natural-numbers]]). The empty set is treated separately and is not
asserted to be the range of an $\mathbb{N}$-indexed sequence.

**Conventions.** $\mathbb{N}$ contains $0$, and a natural number $m$ is the set
$\{0,\dots,m-1\}$ of its predecessors. A **sequence in $D$** is a function with
domain $\mathbb{N}$ and values in $D$.

## Facts & Assumptions

**Given:** A nonempty at most countable set $D$.

[L1] A nonempty set $A$ is at most countable if and only if there is a surjection $s : \mathbb{N} \to A$; the forward direction is the one used here and its proof is explicit in the cited item ([[lem-countable-iff-surjection-from-n]], [[def-injection-surjection-bijection]]).

[L2] $D$ is at most countable exactly when $D$ is finite, that is $D \approx m$ for some $m \in \mathbb{N}$, or countably infinite, that is $D \approx \mathbb{N}$ ([[def-countable]]).

[L3] $0 = \varnothing$ and $m \ne 0$ exactly when $0 \in m$, for $m \in \mathbb{N}$ ([[def-natural-numbers]]).

## Proof

**Proof technique:** cases, on the two alternatives of at most countability supplied by [L2].

1.1 Assume $D$ is nonempty and at most countable; by [L1] it suffices to produce a surjection $\mathbb{N} \to D$ explicitly from the two alternatives of [L2]. [given, L1, L2]

1.2 Case 1: assume $D$ is countably infinite, so that there is a bijection $e : \mathbb{N} \to D$; case 2: assume $D$ is finite, so that there is $m \in \mathbb{N}$ with a bijection $e : m \to D$. [assume-case, assume-case]

2.1 In case 1, take $s := e$; it is a function $\mathbb{N} \to D$ and it is surjective, so its range is $D$; no choice was used, since $e$ was already given. [step 1.2, L2]

2.2 In case 2, since $D$ is nonempty and $e : m \to D$ is bijective, $m \ne 0$: otherwise $D \approx m = 0 = \varnothing$ by [L3], contradicting that $D$ has an element. [step 1.2, L3]

3.1 In case 2, continuing, define $s : \mathbb{N} \to D$ by the two clauses $s(n) := e(n)$ for $n \in m$ and $s(n) := e(0)$ for $n \in \mathbb{N} \setminus m$; this is well defined because $m = \{0,\dots,m-1\}$ and $0 \in m$ by step 2.2 and [L3], so $e(0) \in D$ is available as the constant value. [step 2.2, L2, L3]

4.1 In case 2, continuing, $s$ has range $D$: if $d \in D$ then $d = e(k)$ for some $k \in m$ because $e$ is surjective, and then $s(k) = e(k) = d$ by step 3.1; conversely every value of $s$ is a value of $e$, hence lies in $D$. [step 3.1, L2]

5.1 Every nonempty at most countable $D$ therefore falls under case 1 or case 2 and is the range of the explicitly defined sequence $s$ of step 2.1 or of step 4.1; no choice principle was used in either case. [step 1.2, step 2.1, step 4.1, cases-exhaustive] ∎

## Remarks

- **Why the statement separates the empty set.** The cited equivalence of [L1] requires $A \ne \varnothing$: there is no function from $\mathbb{N}$ onto $\varnothing$. The downstream Baire theorem therefore disposes of the empty ambient space before invoking this lemma, rather than manufacturing a sequence into the empty set.

- **The padding is what makes the finite case a sequence.** A finite bijection $e : m \to D$ is not defined on the whole of $\mathbb{N}$; repeating its value at $0$ is the canonical way to extend it, and it needs the one fact that $m$ is nonempty.
