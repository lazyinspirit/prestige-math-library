# Proof-refuter brief — run `zfc`, step 6

You are a **read-only adversarial proof-refuter** for a public mathematics
library. You have no filesystem and no web access: **everything you may rely on
is in the "This dispatch" section below.** Do not assume any fact about an item
that is not reproduced there.

You are reading **draft** content at the very bottom of the library — the ZFC
axioms and the set-theoretic treatment of relations and functions. Everything
above rests on it, so a wrong step here is inherited by thousands of results.
This material is elementary, which makes it easy to wave through. Do not.

## Your standard

Read the target item's **Statement/Definition/Example**, its **Facts &
Assumptions** block, and **every numbered step of its Proof / Verification /
Refutation** as someone trying to break it. For each step ask:

1. Does the cited material **mathematically license exactly what the step
   claims** — no more? The dominant defect class in this corpus is a fact
   restated more strongly than its source supports.
2. Is each `[F#]`/`[L#]` fact a **faithful** rendering of the dependency it
   names? Compare it against the dependency's full text, which is supplied.
   Check domain, quantifiers, hypotheses, direction, and conclusion. An invented
   converse is fatal.
3. Does the **title or Statement assert more than the proof delivers**? A judge
   who reads only the Statement cannot see a false title, so you must.
4. **Boundary cases.** The empty set, the empty family, the empty relation,
   functions out of and into $\varnothing$, $\mathcal{P}(\varnothing)$,
   $A \times \varnothing$, $\bigcap\varnothing$, zero- and one-element index
   sets, and **both directions of every "if and only if"**. This is where this
   material ships falsehoods.
5. **Circularity.** Does a proof use, directly or through a cited fact, the very
   thing it is establishing — or a result that is itself proved from it? Two such
   defects were already found on these pages.

## What counts, and what does not

- **Report** a concrete false claim, an unlicensed inference, a missing
  hypothesis, an inaccurate or overstated citation, a boundary case the proof
  silently assumes away, or a circularity. Name the exact step or fact and say
  **why**, with the counterexample or the missing hypothesis made explicit.
- **Do not report** a gap a competent reader closes in 30 seconds, a stylistic
  preference, a suggestion to add exposition, or a complaint that a step is
  "not fully rigorous" without naming what is actually wrong.
- Before alleging a cited dependency is too weak, **read the dependency text
  supplied below**. If it does support the step, say so.

You return **evidence, never edits**. You do not have write access and must not
propose file changes. An adjudicator reads your findings against the real files
and decides.

## Output format

Reply with exactly this structure, and nothing else:

```
VERDICT: CLEAN | DEFECTS
```

Then, if `DEFECTS`, one block per finding:

```
FINDING 1
  location: [the exact step number, fact label, title, or Statement]
  severity: fatal | nonfatal
  claim:    [what the item asserts there]
  defect:   [precisely what is wrong, with the counterexample or missing hypothesis]
```

Then always, last:

```
BOUNDARY: [one line per boundary case you checked and its disposition]
CHECKED:  [one line confirming you read every numbered step and every cited fact]
```

Be terse. No preamble, no summary of the mathematics, no praise.


---

# This dispatch

## Target item — `lem-equivalence-classes-partition`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: lem-equivalence-classes-partition
kind: lemma
title: "The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint; conversely every such cover arises from exactly one equivalence relation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equivalence-relation]
justified_by: []
aliases: [lem-partition-theorem]
landmark: false
short: "classes = partition"
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
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "Partition of a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_a_set"
pipeline_run: null
---

## Statement

Let $\sim$ be an equivalence relation on a set $A$, with classes $[a]$ and
quotient set $A/{\sim}$ ([[def-equivalence-relation]]). Then:

1. $a \in [a]$ for every $a \in A$; hence every class is nonempty and the classes
   cover $A$, that is, the union of the members of $A/{\sim}$ is $A$;
2. $a \sim b$ if and only if $[a] = [b]$;
3. for all $a, b \in A$, either $[a] = [b]$ or $[a] \cap [b] = \varnothing$.

Conversely, call a set $P$ of subsets of $A$ a **partition** of $A$ when every
member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of
the members of $P$ is $A$. For such a $P$ define $a \sim_P b$ to mean that some
$B \in P$ contains both $a$ and $b$. Then $\sim_P$ is an equivalence relation on
$A$ whose quotient set is exactly $P$, and it is the **only** equivalence
relation on $A$ whose quotient set is $P$.

## Facts & Assumptions

**Given:** An equivalence relation $\sim$ on a set $A$, with $[a] = \{ b \in A : a \sim b \}$ and $A/{\sim} = \{ [a] : a \in A \}$ ([[def-equivalence-relation]]); and, for the converse, a partition $P$ of $A$ in the sense stated above.

[L1] Reflexivity: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] Symmetry: $a \sim b$ implies $b \sim a$ ([[def-equivalence-relation]]).

[L3] Transitivity: $a \sim b$ and $b \sim c$ imply $a \sim c$ ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 For every $a \in A$ reflexivity gives $a \sim a$, that is $a \in [a]$; so each class is nonempty, each class is a subset of $A$ by construction, and each $a \in A$ lies in the class $[a]$, whence the union of the members of $A/{\sim}$ is exactly $A$. This is claim 1. [L1, given]

1.2 Suppose $a \sim b$. If $c \in [b]$ then $b \sim c$, so $a \sim c$ by transitivity, so $c \in [a]$; thus $[b] \subseteq [a]$. Symmetry gives $b \sim a$, and the same argument with $a$ and $b$ interchanged gives $[a] \subseteq [b]$; hence $[a] = [b]$. [L2, L3, given]

1.3 Every member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of $P$ is $A$; consequently each $a \in A$ lies in at least one $B \in P$, and in only one, since two members containing $a$ are not disjoint and therefore are not distinct. Write $B_a$ for that unique member. [given]

2.1 Suppose $[a] = [b]$. By step 1.1, $b \in [b] = [a]$, which says $a \sim b$. Together with step 1.2 this is claim 2. [step 1.1, step 1.2]

2.2 Suppose $[a] \cap [b] \ne \varnothing$ and pick $c$ in the intersection, so $a \sim c$ and $b \sim c$. Symmetry gives $c \sim b$, and transitivity then gives $a \sim b$, so $[a] = [b]$ by step 1.2. Hence for any $a, b$ either the classes are disjoint or they are equal, which is claim 3. [step 1.2, L2, L3, choose]

2.3 $\sim_P$ is reflexive, since $a \in B_a$ gives $a \sim_P a$; it is symmetric, since the defining condition is symmetric in $a$ and $b$; and it is transitive, for if $a, b \in B$ and $b, c \in B'$ with $B, B' \in P$, then $b \in B \cap B'$, so $B$ and $B'$ are not disjoint and hence not distinct, giving $B = B'$ and $a, c \in B$. So $\sim_P$ is an equivalence relation on $A$. [step 1.3, given]

3.1 Fix $a \in A$ and write $[a]_P$ for its class under $\sim_P$. If $b \in [a]_P$ then some $B \in P$ contains $a$ and $b$, and $B = B_a$ by the uniqueness in step 1.3, so $b \in B_a$; conversely if $b \in B_a$ then $B_a$ contains both $a$ and $b$, so $b \in [a]_P$. Hence $[a]_P = B_a$. [step 1.3, step 2.3]

4.1 Every class of $\sim_P$ is a member of $P$ by step 3.1, and every $B \in P$ is nonempty, so choosing $a \in B$ gives $B = B_a = [a]_P$, a class; therefore the quotient set of $\sim_P$ is exactly $P$. [step 1.3, step 3.1, choose]

4.2 Uniqueness. Let $\approx$ be any equivalence relation on $A$ whose quotient set is $P$, and fix $a \in A$. Its class $[a]_\approx$ lies in $P$ and contains $a$ by step 1.1 applied to $\approx$, so $[a]_\approx = B_a$ by the uniqueness in step 1.3. Then $a \approx b$ holds exactly when $b \in [a]_\approx = B_a$, which by step 3.1 holds exactly when $a \sim_P b$; so $\approx$ and $\sim_P$ relate the same pairs and are equal as subsets of $A \times A$. [step 1.1, step 1.3, step 3.1]

5.1 Claims 1, 2 and 3 are steps 1.1, 2.1 and 2.2; the converse is steps 2.3, 4.1 and 4.2. [step 1.1, step 2.1, step 2.2, step 2.3, step 4.1, step 4.2] ∎

## Remarks

- Claim 2 is the fact used constantly in practice: an equation between classes may always be replaced by a relation between representatives, and conversely. Claim 3 is what makes a quotient set behave like a set of disjoint boxes.

- The converse half is what licenses building an equivalence relation by describing its classes rather than its pairs. The uniqueness clause matters: it says that no information is lost either way, so a partition and an equivalence relation are interchangeable descriptions of the same structure.
````

## Declared dependencies of `lem-equivalence-classes-partition`

`deps:` ["def-equivalence-relation"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `def-equivalence-relation` — Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$

````markdown
---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers as a quotient)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$; we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is

- **reflexive**: $a \sim a$ for every $a \in A$;
- **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$;
- **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all
  $a, b, c \in A$.

Let $\sim$ be an equivalence relation on $A$. For $a \in A$, the **equivalence
class** of $a$ is the subset

$$[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A,$$

and any $b$ with $[b] = C$ is called a **representative** of the class $C$. The
**quotient set** is the set of all classes,

$$A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\},$$

a subset of the power set of $A$. The map $\pi : A \to A/{\sim}$ with
$\pi(a) = [a]$ is the **quotient map**; it is surjective by construction.

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. This is the obligation the
  library has already discharged case by case for the constructions of
  $\mathbb{Z}$ and $\mathbb{Q}$ ([[lem-int-add-well-defined]],
  [[lem-int-mul-well-defined]], [[lem-rat-ops-well-defined]]); it is stated here
  once, in general.

- **Why this item exists so late.** The library has used specific equivalence
  relations from the start: [[lem-int-equivalence]] proves that
  $(a,b) \sim (c,d) \iff a + d = b + c$ is one, and [[lem-rat-equivalence]] does
  the same for the relation defining $\mathbb{Q}$. Each of those items proves the
  three properties for one concrete relation and defines no general notion. The
  general notion is introduced here because the algebra track needs it uniformly:
  cosets, quotient groups, congruence classes and quotient rings are all
  instances, and each would otherwise re-prove the same three lines.
````

