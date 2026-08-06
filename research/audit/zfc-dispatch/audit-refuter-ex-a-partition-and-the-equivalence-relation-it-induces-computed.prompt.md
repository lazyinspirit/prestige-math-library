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

## Target item — `ex-a-partition-and-the-equivalence-relation-it-induces-computed`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: ex-a-partition-and-the-equivalence-relation-it-induces-computed
kind: example
title: "A two-cell partition of a three-element set, the equivalence relation it induces listed pair by pair, and the quotient set recovered from it"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-equivalence-relation, lem-equivalence-classes-partition, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-cartesian-product, def-ordered-pair, def-relation-domain-range-and-field, def-axiom-of-extensionality, lem-unions-and-intersections-of-small-families, def-union-of-a-set-and-binary-union, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
short: "a partition computed"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Partition of a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_a_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Example

Write $u := \varnothing$, $v := \{\varnothing\}$ and
$w := \{\varnothing,\{\varnothing\}\}$, which are pairwise distinct, and put
$A := \{u,v\} \cup \{w\}$. The collection $\{\{u,v\},\{w\}\}$ has nonempty cells,
covers $A$, and its two cells are disjoint. The equivalence relation it induces
on $A$, namely "$a$ and $b$ lie in the same cell", is

$$\sim \;=\; \{(u,u),(u,v)\} \cup \{(v,u),(v,v)\} \cup \{(w,w)\},$$

with classes $[u] = [v] = \{u,v\}$ and $[w] = \{w\}$, so that
$A/{\sim} = \{\{u,v\},\{w\}\}$ is the original collection again.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $w := \{\varnothing,\{\varnothing\}\}$, $A := \{u,v\} \cup \{w\}$, and $\sim$ as displayed.

[L1] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L3] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L4] $[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A$ ([[def-equivalence-relation]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint ([[lem-equivalence-classes-partition]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L12] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L13] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L14] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L15] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Verification

**Proof technique:** direct.

1.1 $u$, $v$ and $w$ are pairwise distinct: $u$ has no element, $v$ has exactly $u$, and $w$ has $v$ as an element while $v$ does not. So $A$ has exactly those three elements, and $\sim$ is a relation on $A$, each of its five listed pairs having both coordinates in $A$. [L7, L8, L9, L10, L12, L14, L15]

2.1 $\sim$ is an equivalence relation on $A$: it contains $(u,u)$, $(v,v)$ and $(w,w)$, so it is reflexive on $A$; the only pair it contains with distinct coordinates is $(u,v)$, and $(v,u)$ is present, so it is symmetric; and every composable pair of its members has its composite present, since chains through $u$ and $v$ stay inside $\{u,v\}$ and $w$ relates only to itself. [L1, L2, L3, L11, L13, step 1.1]

3.1 The classes are as stated: $[u] = \{b \in A : u \sim b\} = \{u,v\}$, $[v] = \{u,v\}$ by the pairs $(v,u)$ and $(v,v)$, and $[w] = \{w\}$. Hence $A/{\sim}$ has exactly the two elements $\{u,v\}$ and $\{w\}$, which is the collection we started from. [L4, L5, L7, L11, L13, step 1.1, step 2.1]

4.1 The collection is therefore a partition of $A$ in the sense of the classes being nonempty, covering $A$ and pairwise equal or disjoint, and it is recovered as the quotient set of the equivalence relation it induces. [L6, step 2.1, step 3.1] ∎
````

## Declared dependencies of `ex-a-partition-and-the-equivalence-relation-it-induces-computed`

`deps:` ["def-equivalence-relation","lem-equivalence-classes-partition","def-unordered-pair-and-singleton","thm-the-empty-set-exists-and-is-unique","def-cartesian-product","def-ordered-pair","def-relation-domain-range-and-field","def-axiom-of-extensionality","lem-unions-and-intersections-of-small-families","def-union-of-a-set-and-binary-union","thm-the-characterising-property-of-ordered-pairs"]

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

### `lem-equivalence-classes-partition` — The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint; conversely every such cover arises from exactly one equivalence relation

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

### `def-unordered-pair-and-singleton` — The unordered pair $\\{x,y\\}$ and the singleton $\\{x\\} = \\{x,x\\}$

````markdown
---
id: def-unordered-pair-and-singleton
kind: definition
title: "The unordered pair $\\{x,y\\}$ and the singleton $\\{x\\} = \\{x,x\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-pairing, def-axiom-of-extensionality]
justified_by: []
aliases: [def-singleton, def-unordered-pair]
landmark: false
short: "unordered pair, singleton"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of pairing (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_pairing"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.2"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ and $y$ be sets. [[def-axiom-of-pairing]] gives a set whose elements are
exactly $x$ and $y$, and [[def-axiom-of-extensionality]] shows there is only one
such set; it is written $\{x,y\}$. Thus $\{x,y\}$ is the set whose elements are
exactly $x$ and $y$, and $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set
whose only element is $x$:

$$t \in \{x,y\} \leftrightarrow (t = x \vee t = y), \qquad t \in \{x\} \leftrightarrow t = x .$$

## Remarks

- **The pair is unordered.** $t = x \vee t = y$ and $t = y \vee t = x$ are the
  same condition, so $\{x,y\} = \{y,x\}$, and the notation records no order.
  [[lem-unordered-pair-equality]] says exactly how much information a pair does
  carry, and [[def-ordered-pair]] is the construction that recovers an order from
  unordered pairs alone.

- **A singleton is not its element.** $\{x\}$ has exactly one element, namely
  $x$, and $x$ and $\{x\}$ are different sets whenever they have different
  elements; $\{\varnothing\}$ has one element while $\varnothing$ has none, so
  the two are already distinct at the bottom of the hierarchy.
````

### `thm-the-empty-set-exists-and-is-unique` — There is exactly one set with no elements, written $\\varnothing$

````markdown
---
id: thm-the-empty-set-exists-and-is-unique
kind: theorem
title: "There is exactly one set with no elements, written $\\varnothing$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-language-of-set-theory, def-axiom-schema-of-separation, def-axiom-of-extensionality]
justified_by: []
aliases: [thm-empty-set-exists, def-empty-set]
landmark: true
short: "the empty set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2 and Theorem 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Empty set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_set"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

There is exactly one set with no elements: there is a set $e$ such that
$\neg\exists z\,(z \in e)$, and any two such sets are equal. That set is written
$\varnothing$.

## Facts & Assumptions

**Given:** the language of set theory, in which the domain of discourse is nonempty ([[def-language-of-set-theory]]).

[L1] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 The domain of discourse is nonempty, so fix a set $a$. [given, choose]

2.1 Apply Separation to $a$ with the formula $\varphi(z) := \neg(z = z)$: there is a set $e$ such that, for every $z$, $z \in e$ holds if and only if $z \in a$ and $\neg(z = z)$. [L1, step 1.1]

3.1 No $z$ satisfies $\neg(z = z)$, so no $z$ satisfies $z \in e$; hence $e$ is a set with no elements, which proves existence. [step 2.1]

4.1 If $e'$ is also a set with no elements, then $z \in e$ and $z \in e'$ both fail for every $z$, so $z \in e$ holds if and only if $z \in e'$, and therefore $e = e'$; existence and uniqueness together give the statement, and $\varnothing$ denotes this set. [L2, step 3.1] ∎

## Remarks

- **Existence is derived, not assumed.** Several presentations take "there is a set with no elements" as an axiom of its own. Here it is a theorem, because the nonemptiness of the domain of discourse is already a validity of first-order logic and Separation converts any set whatever into this one.
````

### `def-cartesian-product` — The Cartesian product $A \\times B := \\{\\, z \\in \\mathcal{P}(\\mathcal{P}(A \\cup B)) : \\exists a \\in A\\ \\exists b \\in B\\ z = (a,b) \\,\\}$

````markdown
---
id: def-cartesian-product
kind: definition
title: "The Cartesian product $A \\times B := \\{\\, z \\in \\mathcal{P}(\\mathcal{P}(A \\cup B)) : \\exists a \\in A\\ \\exists b \\in B\\ z = (a,b) \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-ordered-pairs-lie-in-the-double-power-set, def-axiom-schema-of-separation, def-ordered-pair, def-power-set, def-union-of-a-set-and-binary-union]
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: [def-product-of-two-sets]
landmark: true
short: "Cartesian product"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 10"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.8"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets. By
[[lem-ordered-pairs-lie-in-the-double-power-set]] every ordered pair $(a,b)$ with
$a \in A$ and $b \in B$ is an element of $\mathcal{P}(\mathcal{P}(A \cup B))$, so
[[def-axiom-schema-of-separation]] applied inside that set produces the
**Cartesian product**

$$A \times B := \{\, z \in \mathcal{P}(\mathcal{P}(A \cup B)) : \exists a \in A\ \exists b \in B\ z = (a,b) \,\}.$$

Its elements are exactly the ordered pairs $(a,b)$ ([[def-ordered-pair]]) with
$a \in A$ and $b \in B$: no such pair is lost, because each such pair lies in
the ambient set being separated. Thus $z \in A \times B$ holds if and only if
$z = (a,b)$ for some $a \in A$ and some $b \in B$.

## Remarks

- **Why the ambient set is needed.** "The set of all ordered pairs with first
  coordinate in $A$ and second in $B$" is a class abbreviation, and no axiom
  turns a class abbreviation into a set on its own. The double power set is what
  supplies a set to separate inside, so the product costs
  [[def-axiom-of-power-set]] and [[def-axiom-of-union]] as well as Separation;
  [[rem-which-axiom-each-construction-uses]] keeps the account.

- **Products of nonempty sets.** Whether a product of *two* nonempty sets is
  nonempty is settled here, by exhibiting the pair
  ([[prop-cartesian-products-and-set-operations]]). The corresponding question
  for a product of an arbitrary indexed family of nonempty sets is not settled by
  the axioms on this page: it is one formulation of the Axiom of Choice, stated
  at [[def-axiom-of-choice]].
````

### `def-ordered-pair` — The Kuratowski ordered pair $(a,b) := \\{\\{a\\},\\{a,b\\}\\}$

````markdown
---
id: def-ordered-pair
kind: definition
title: "The Kuratowski ordered pair $(a,b) := \\{\\{a\\},\\{a,b\\}\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unordered-pair-and-singleton, def-axiom-of-pairing]
justified_by: []
aliases: [def-kuratowski-pair]
landmark: true
short: "ordered pair"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.6"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

For sets $a$ and $b$, the **ordered pair** $(a,b)$ is the set

$$(a,b) := \{\{a\},\{a,b\}\},$$

formed from the unordered pairs and singletons of
[[def-unordered-pair-and-singleton]]; three applications of
[[def-axiom-of-pairing]] produce it. The first coordinate is $a$ and the second
is $b$.

When $a = b$ the two members coincide, since $\{a,b\} = \{a,a\} = \{a\}$, and the
pair degenerates to $(a,a) = \{\{a\}\}$.

## Remarks

- **Why this set and not another.** An ordered pair is required to satisfy one
  property, that $(a,b) = (c,d)$ exactly when $a = c$ and $b = d$; that is
  [[thm-the-characterising-property-of-ordered-pairs]], and it is the only thing
  any later construction uses. Other definitions with the same property exist,
  and nothing below distinguishes them from this one.

- **The degenerate case is where a careless proof fails.** An argument that
  treats $\{\{a\},\{a,b\}\}$ as a set with two distinct members breaks at
  $a = b$, and that case has to be handled separately in the proof of the
  characterising property.
````

### `def-relation-domain-range-and-field` — Relation, $\\operatorname{dom} R$, $\\operatorname{ran} R$, $\\operatorname{fld} R$, and the specialisations \"relation from $A$ to $B$\" and \"relation on $A$\"

````markdown
---
id: def-relation-domain-range-and-field
kind: definition
title: "Relation, $\\operatorname{dom} R$, $\\operatorname{ran} R$, $\\operatorname{fld} R$, and the specialisations \"relation from $A$ to $B$\" and \"relation on $A$\""
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-domain-and-range-of-a-relation-are-sets, def-ordered-pair, def-cartesian-product, def-union-of-a-set-and-binary-union, def-subset-and-proper-subset]
justified_by: []
aliases: [def-relation, def-domain, def-range]
landmark: true
short: "relation, domain, range, field"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 6 and Def. 11"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.9"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

A **relation** is a set $R$ every element of which is an ordered pair
([[def-ordered-pair]]). We write $a\,R\,b$ for $(a,b) \in R$.

By [[lem-the-domain-and-range-of-a-relation-are-sets]] the following two classes
are sets, so the notation is legitimate:

$$\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\},$$

the **domain** and the **range** of $R$. The **field** of $R$ is
$\operatorname{fld} R := \operatorname{dom} R \cup \operatorname{ran} R$
([[def-union-of-a-set-and-binary-union]]).

$R$ is a **relation from $A$ to $B$** when $R \subseteq A \times B$
([[def-cartesian-product]], [[def-subset-and-proper-subset]]), and a **relation
on $A$** when $R \subseteq A \times A$.

## Remarks

- **Domain and range are intrinsic; the sets $A$ and $B$ are not.** A relation
  determines its own domain and range, but it is a relation from $A$ to $B$ for
  many different $A$ and $B$: any $A$ containing $\operatorname{dom} R$ and any
  $B$ containing $\operatorname{ran} R$ will do. That is the content of
  [[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]], and it
  is the same distinction that makes a codomain part of the declaration
  $f : A \to B$ rather than of the set $f$ in [[def-function]].

- **The empty set is a relation.** It has no elements, so the requirement that
  every element be an ordered pair holds vacuously, and
  $\operatorname{dom} \varnothing = \operatorname{ran} \varnothing = \varnothing$.
  It is a relation on every set.
````

### `def-axiom-of-extensionality` — The Axiom of Extensionality: $\\forall x\\,\\forall y\\,(\\forall z\\,(z \\in x \\leftrightarrow z \\in y) \\to x = y)$

````markdown
---
id: def-axiom-of-extensionality
kind: definition
title: "The Axiom of Extensionality: $\\forall x\\,\\forall y\\,(\\forall z\\,(z \\in x \\leftrightarrow z \\in y) \\to x = y)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: []
landmark: false
short: "Extensionality"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of extensionality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_extensionality"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Extensionality** is the sentence

$$\forall x\,\forall y\,\bigl(\forall z\,(z \in x \leftrightarrow z \in y) \to x = y\bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): if every $z$
satisfies $z \in x$ if and only if $z \in y$, then $x = y$.

A set is therefore determined by its members and by nothing else. Order,
repetition and any description used to present a set are invisible to identity.

## Remarks

- **The converse is logic, not an axiom.** If $x = y$ then $z \in x$ and
  $z \in y$ are the same statement for every $z$, by the substitution rule for
  equality. So Extensionality upgrades to the biconditional
  $x = y \leftrightarrow \forall z\,(z \in x \leftrightarrow z \in y)$, and only
  the left-to-right direction of that biconditional is assumed.

- **What it is used for below.** Every construction on this page produces a set
  by an axiom that specifies its members, and every such axiom is stated with
  $\leftrightarrow$. Extensionality is what turns "a set with these members" into
  "*the* set with these members", so it is the licence for each definite article
  and each piece of notation introduced here.
````

### `lem-unions-and-intersections-of-small-families` — $\\bigcup \\varnothing = \\varnothing$, $\\bigcup \\{a\\} = a$, $\\bigcup \\{a,b\\} = a \\cup b$, $\\bigcap \\{a\\} = a$, and $\\bigcap \\{a,b\\} = a \\cap b$

````markdown
---
id: lem-unions-and-intersections-of-small-families
kind: lemma
title: "$\\bigcup \\varnothing = \\varnothing$, $\\bigcup \\{a\\} = a$, $\\bigcup \\{a,b\\} = a \\cup b$, $\\bigcap \\{a\\} = a$, and $\\bigcap \\{a,b\\} = a \\cap b$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "unions and intersections of small families"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
pipeline_run: null
---

## Statement

For all sets $a$ and $b$:

- (i) $\bigcup \varnothing = \varnothing$;
- (ii) $\bigcup \{a\} = a$;
- (iii) $\bigcup \{a,b\} = a \cup b$, and $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$;
- (iv) $\bigcap \{a\} = a$;
- (v) $\bigcap \{a,b\} = a \cap b$, and $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$.

The equalities in (iii) and (v) are the definitions of $a \cup b$ and $a \cap b$
written out; what is proved about them here is the membership criterion beside
each.

## Facts & Assumptions

**Given:** sets $a$ and $b$.

[L1] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$, and $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

[L2] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$, and $a \cap b := \bigcap\{a,b\}$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L3] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L4] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L5] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $z \in \bigcup \varnothing$ requires a member $s$ of $\varnothing$ with $z \in s$, and $\varnothing$ has no members, so $\bigcup \varnothing$ has no elements and is therefore $\varnothing$. [L1, L4]

1.2 Claim (ii): $z \in \bigcup \{a\}$ requires a member $s$ of $\{a\}$ with $z \in s$, and the only member of $\{a\}$ is $a$, so $z \in \bigcup\{a\}$ holds exactly when $z \in a$. [L1, L3]

1.3 Claim (iii): $a \cup b$ is $\bigcup\{a,b\}$ by definition, and $z \in \bigcup\{a,b\}$ requires a member $s$ of $\{a,b\}$ with $z \in s$; the members of $\{a,b\}$ are $a$ and $b$, so $z \in a \cup b$ holds exactly when $z \in a$ or $z \in b$. [L1, L3]

1.4 Claim (iv): $\{a\}$ is nonempty since $a$ is a member, and $z \in \bigcap\{a\}$ holds exactly when $z$ belongs to every member of $\{a\}$, that is, exactly when $z \in a$. [L2, L3]

1.5 Claim (v): $a \cap b$ is $\bigcap\{a,b\}$ by definition, $\{a,b\}$ is nonempty, and $z \in \bigcap\{a,b\}$ holds exactly when $z$ belongs to every member of $\{a,b\}$; the members are $a$ and $b$, so $z \in a \cap b$ holds exactly when $z \in a$ and $z \in b$. [L2, L3]

2.1 In each of the five claims the elements of the two sides have been shown to satisfy the same condition, so the sets are equal, which is the statement. [L5, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
````

### `def-union-of-a-set-and-binary-union` — The union $\\bigcup x$ of a set, and the binary union $a \\cup b := \\bigcup \\{a,b\\}$

````markdown
---
id: def-union-of-a-set-and-binary-union
kind: definition
title: "The union $\\bigcup x$ of a set, and the binary union $a \\cup b := \\bigcup \\{a,b\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-union, def-axiom-of-extensionality, def-unordered-pair-and-singleton]
justified_by: []
aliases: [def-union]
landmark: false
short: "union, binary union"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 4 and Def. 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
    - title: "Axiom of union (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_union"
pipeline_run: null
---

## Definition

Let $x$ be a set. [[def-axiom-of-union]] gives a set whose elements are exactly
the sets $z$ belonging to some member of $x$, and [[def-axiom-of-extensionality]]
shows there is only one such set; it is written $\bigcup x$. Thus $\bigcup x$ is
the set whose elements are exactly the elements of the elements of $x$, and
$a \cup b := \bigcup\{a,b\}$ is the **binary union** of $a$ and $b$, formed from
the unordered pair of [[def-unordered-pair-and-singleton]]:

$$z \in \bigcup x \leftrightarrow \exists s\,(s \in x \wedge z \in s).$$

The membership criterion for the binary union, that $z \in a \cup b$ holds
exactly when $z \in a$ or $z \in b$, is proved at
[[lem-unions-and-intersections-of-small-families]] rather than assumed here.

## Remarks

- **One layer only.** $\bigcup x$ collects the elements of the elements of $x$,
  not the elements of $x$. For a set of sets of sets the operation therefore has
  to be applied twice, and that iteration is what makes
  $\bigcup\bigcup R$ the right ambient set for the domain and range of a
  relation.

- **Notation.** $\bigcup$ with a single set argument is the primitive operation
  supplied by the axiom; $\cup$ between two sets is the derived binary one. The
  indexed form $\bigcup_{i \in I} A_i$ is a further abbreviation, defined once
  indexed families are available.
````

### `thm-the-characterising-property-of-ordered-pairs` — $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$

````markdown
---
id: thm-the-characterising-property-of-ordered-pairs
kind: theorem
title: "$(a,b) = (c,d)$ if and only if $a = c$ and $b = d$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-pair, lem-unordered-pair-equality, def-unordered-pair-and-singleton]
justified_by: []
aliases: [thm-ordered-pair-property]
landmark: true
short: "characterising property of ordered pairs"
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Thm. 2.7"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

For all sets $a$, $b$, $c$, $d$: $(a,b) = (c,d)$ if and only if $a = c$ and
$b = d$.

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$, $d$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $\{a,b\} = \{c,d\} \ \leftrightarrow\ \bigl((a = c \wedge b = d) \vee (a = d \wedge b = c)\bigr)$ ([[lem-unordered-pair-equality]]).

## Proof

**Proof technique:** cases.

1.1 Right to left: if $a = c$ and $b = d$ then $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, so $\{\{a\},\{a,b\}\}$ and $\{\{c\},\{c,d\}\}$ are the same set, that is $(a,b) = (c,d)$. [L1, L2]

1.2 Left to right, setting up: assume $\{\{a\},\{a,b\}\} = \{\{c\},\{c,d\}\}$. Applying the equality criterion for unordered pairs to these two sets, either $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, or $\{a\} = \{c,d\}$ and $\{a,b\} = \{c\}$. [L1, L3]

2.1 In the first alternative, $\{a\} = \{c\}$ reads $\{a,a\} = \{c,c\}$ and gives $a = c$. Then $\{a,b\} = \{c,d\}$ gives $a = c$ and $b = d$, or $a = d$ and $b = c$; in the second of these $b = c = a = d$, so $b = d$ holds as well. Either way $a = c$ and $b = d$. [assume-case first, step 1.2, L2, L3]

2.2 In the second alternative, $\{a,b\} = \{c\}$ reads $\{a,b\} = \{c,c\}$ and gives $a = c$ and $b = c$, while $\{a\} = \{c,d\}$ reads $\{a,a\} = \{c,d\}$ and gives $a = c$ and $a = d$. Hence $a = c$ and $b = c = a = d$. [assume-case second, step 1.2, L2, L3]

3.1 The two alternatives supplied by step 1.2 are exhaustive, so the left-to-right implication holds. [step 2.1, step 2.2, cases-exhaustive]

4.1 Both implications hold, which is the statement. [step 1.1, step 3.1] ∎
````

