# Adversarial proof reading — `lem-uncountable-delta-system-for-finite-sets`

## The item under review, in full

`items/lem-uncountable-delta-system-for-finite-sets.md`

```markdown
---
id: lem-uncountable-delta-system-for-finite-sets
kind: lemma
title: "Under choice, the uncountable $\\Delta$-system lemma for finite sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable, def-axiom-of-choice, def-countable-choice, thm-countable-union-of-countable, thm-zorn]
aliases: []
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Delta-system lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Delta-system_lemma"
    - title: "Sunflower lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sunflower_lemma"
pipeline_run: null
---
## Statement
Assuming choice, every uncountable family of finite sets has an uncountable subfamily forming a $\Delta$-system.
## Facts & Assumptions
**Given:** An uncountable family of finite sets.

[A1] The Axiom of Choice implies countable choice and Zorn's lemma ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-zorn]]).

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).
## Proof

**Proof technique:** induction.

1.1 Partition the family $\mathcal F$ by finite cardinality. Some layer $\mathcal F_n=\{A\in\mathcal F:|A|=n\}$ is uncountable; otherwise [L1] would make their countable union $\mathcal F$ countable. It therefore suffices to prove the assertion by induction on the common size $n$. [A1, L1]

1.2 The case $n=0$ is vacuous, since there is only one empty set. [base]

1.3 Suppose the result holds for $(n-1)$-element sets and $\mathcal F_n$ is uncountable. If some point $x$ belongs to uncountably many members, apply the induction hypothesis to $$\{A\setminus\{x\}:A\in\mathcal F_n,\ x\in A\}.$$ An uncountable $\Delta$-subfamily with root $R$ then restores to one with root $R\cup\{x\}$. [ih]

1.4 It remains to suppose that $\mathcal F_n(x)=\{A\in\mathcal F_n:x\in A\}$ is at most countable for every $x$. Order the pairwise-disjoint subfamilies of $\mathcal F_n$ by inclusion. The union of a chain is again pairwise disjoint, so Zorn's lemma in [A1] gives a maximal such family $\mathcal G$. [A1, construct]

2.1 If $\mathcal G$ were at most countable, then $M=\bigcup\mathcal G$ would be at most countable by [L1], because its members are finite. Maximality says every $A\in\mathcal F_n$ meets $M$, so $$\mathcal F_n=\bigcup_{x\in M}\mathcal F_n(x).$$ The right side is a countable union of at most countable families and is at most countable by [L1], a contradiction. Hence $\mathcal G$ is uncountable. [L1, step 1.4]

3.1 The family $\mathcal G$ is pairwise disjoint, hence is an uncountable $\Delta$-system with empty root. Together with step 1.3 this completes the induction and proves the lemma. [step 1.2, step 1.3, step 2.1, discharge-induction] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-countable` — definition — Finite, countably infinite, countable, uncountable

(statement provenance: ai-altered)

### Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

### `def-axiom-of-choice` — definition — The Axiom of Choice

(statement provenance: literature-derived)

### Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

### `def-countable-choice` — definition — The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)

(statement provenance: ai-altered)

### Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

### `thm-countable-union-of-countable` — theorem — Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$

(statement provenance: ai-altered)

### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

### `thm-zorn` — theorem — Zorn's lemma

(statement provenance: literature-derived)

### Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## What to return

Read `lem-uncountable-delta-system-for-finite-sets` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
