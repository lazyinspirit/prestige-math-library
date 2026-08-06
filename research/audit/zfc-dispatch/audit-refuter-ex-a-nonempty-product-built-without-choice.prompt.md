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

## Target item — `ex-a-nonempty-product-built-without-choice`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: ex-a-nonempty-product-built-without-choice
kind: example
title: "For any indexed family the product $\\prod_{i \\in I} \\mathcal{P}(X_i)$ contains the constant function with value $\\varnothing$, and $\\prod_{i \\in I} \\{i\\}$ has exactly one element"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-product-of-an-indexed-family, def-indexed-family, def-power-set, def-function, thm-the-empty-set-exists-and-is-unique, def-the-identity-and-membership-relations-on-a-set, def-unordered-pair-and-singleton, prop-products-over-small-index-sets, def-axiom-schema-of-separation, def-cartesian-product, def-relation-domain-range-and-field, lem-basic-laws-of-inclusion, def-indexed-union-and-intersection, lem-the-composite-of-two-functions-is-a-function]
justified_by: []
aliases: []
landmark: false
short: "products that are nonempty without choice"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21 and Exercise 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Example

Two families whose products can be shown nonempty by writing an element down,
with no choice principle involved.

- Let $(X_i)_{i \in I}$ be any indexed family. Then
  $(\mathcal{P}(X_i))_{i \in I}$ is an indexed family, and the constant function
  $c := \{\,(i,\varnothing) : i \in I\,\}$ is an element of
  $\prod_{i \in I} \mathcal{P}(X_i)$. So that product is nonempty for every $I$
  and every family, even when some $X_i$ is empty.
- Let $I$ be any set and let $(\{i\})_{i \in I}$ be the family carrying the
  singleton of the index at each index. Then
  $\prod_{i \in I} \{i\} = \{\Delta_I\}$: its only element is the identity
  relation on $I$.

Neither construction selects anything: in the first the value is the same set at
every index, and in the second the value at $i$ is forced to be $i$.

## Facts & Assumptions

**Given:** an indexed family $(X_i)_{i \in I}$ and a set $I$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L3] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L4] (i) $\varnothing \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L5] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L6] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L7] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L8] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L9] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L10] if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$ ([[prop-products-over-small-index-sets]]).

[L11] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L12] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L13] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L14] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

## Verification

**Proof technique:** direct.

1.1 $(\mathcal{P}(X_i))_{i \in I}$ is an indexed family: separating inside $I \times \mathcal{P}(\mathcal{P}(\bigcup_{i \in I} X_i))$ with the formula $\exists i\,\exists w\,(z = (i,w) \wedge i \in I \wedge w = \mathcal{P}(X_i))$ gives a set, which is single valued and has domain $I$; the ambient set contains each $\mathcal{P}(X_i)$, since every subset of $X_i$ is a subset of $\bigcup_{i \in I} X_i$. [L2, L3, L5, L11, L12, L13, L14]

1.2 Similarly $(\{i\})_{i \in I}$ is an indexed family, obtained by separating inside $I \times \mathcal{P}(I)$, since $\{i\} \subseteq I$ for $i \in I$. [L2, L3, L5, L9, L11, L12, L13]

2.1 The constant function $c := \{\,(i,\varnothing) : i \in I\,\}$ is a set, by separating inside $I \times \{\varnothing\}$; it is single valued, has domain $I$, and $c(i) = \varnothing$ for every $i \in I$. Since $\varnothing \subseteq X_i$, we have $\varnothing \in \mathcal{P}(X_i)$ for every $i$, so $c$ lies in $\prod_{i \in I} \mathcal{P}(X_i)$ and that product is nonempty. [L1, L3, L4, L5, L6, L9, L11, L12, L13, step 1.1]

2.2 $\Delta_I$ is a function with domain $I$ and $\Delta_I(i) = i$, and $i$ is the only element of $\{i\}$, so $\Delta_I \in \prod_{i \in I} \{i\}$. Conversely any $f$ in that product has domain $I$ and $f(i) \in \{i\}$, hence $f(i) = i$ for every $i \in I$, so $f$ and $\Delta_I$ are functions with the same domain agreeing everywhere and are equal. [L1, L5, L7, L8, L9, step 1.2]

3.1 Both products are therefore nonempty, and the second has exactly one element; when $I = \varnothing$ both statements agree with the general computation of the empty product, whose single element is the empty function. [L10, step 2.1, step 2.2] ∎
````

## Declared dependencies of `ex-a-nonempty-product-built-without-choice`

`deps:` ["def-product-of-an-indexed-family","def-indexed-family","def-power-set","def-function","thm-the-empty-set-exists-and-is-unique","def-the-identity-and-membership-relations-on-a-set","def-unordered-pair-and-singleton","prop-products-over-small-index-sets","def-axiom-schema-of-separation","def-cartesian-product","def-relation-domain-range-and-field","lem-basic-laws-of-inclusion","def-indexed-union-and-intersection","lem-the-composite-of-two-functions-is-a-function"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `def-product-of-an-indexed-family` — The product $\\prod_{i \\in I} A_i := \\{\\, f : I \\to \\bigcup_{i \\in I} A_i \\ \\mid\\ f(i) \\in A_i \\text{ for every } i \\in I \\,\\}$

````markdown
---
id: def-product-of-an-indexed-family
kind: definition
title: "The product $\\prod_{i \\in I} A_i := \\{\\, f : I \\to \\bigcup_{i \\in I} A_i \\ \\mid\\ f(i) \\in A_i \\text{ for every } i \\in I \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-product-of-an-indexed-family-is-a-set, def-indexed-family, def-indexed-union-and-intersection, def-function]
justified_by: []
forward_refs: []
aliases: [def-indexed-product]
landmark: true
short: "product of a family"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Definition

Let $(A_i)_{i \in I}$ be an indexed family ([[def-indexed-family]]) and write
$C := \bigcup_{i \in I} A_i$ ([[def-indexed-union-and-intersection]]). By
[[lem-the-product-of-an-indexed-family-is-a-set]] the following collection is a
set; it is the **product** of the family:

$$\prod_{i \in I} A_i \;:=\; \{\, f : I \to C \ \mid\ f(i) \in A_i \text{ for every } i \in I \,\}.$$

So an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes
its value at each index inside the member carried by that index; "function" is as
in [[def-function]].

## Remarks

- **Nonemptiness of the product is exactly the Axiom of Choice.** Nothing in
  this definition decides whether $\prod_{i \in I} A_i$ is nonempty when every
  $A_i$ is nonempty. That assertion, for an arbitrary index set, is one of the
  standard formulations of the Axiom of Choice, stated later on this page at
  [[def-axiom-of-choice]]. The product formulation recorded there, that
  $\prod_{i \in I} X_i$ is nonempty whenever every $X_i$ is nonempty, quantifies
  over exactly the object defined here: it is this definition that fixes what
  the symbol $\prod$ in that formulation denotes, and what its elements are.
  What *is* decided without any choice principle is the degenerate arithmetic:
  the empty index set and a family with an empty member, both in
  [[prop-products-over-small-index-sets]], together with the families whose
  product can be written down explicitly.

- **Why the ambient set is $C^{I}$.** The definition separates inside the set of
  all functions $I \to C$, so the ambient set must contain every function with
  domain $I$ whose value at $i$ lies in $A_i$. Taking $C$ to be the union of the
  members secures that, since such a value lies in $A_i$ and hence in $C$; and
  $C$ is the smallest set that includes every member of the family.
````

### `def-indexed-family` — An indexed family $(A_i)_{i \\in I}$ is a function with domain $I$; $\\{A_i : i \\in I\\}$ is its range

````markdown
---
id: def-indexed-family
kind: definition
title: "An indexed family $(A_i)_{i \\in I}$ is a function with domain $I$; $\\{A_i : i \\in I\\}$ is its range"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-relation-domain-range-and-field]
justified_by: []
aliases: [def-family, def-indexed-set]
landmark: false
short: "indexed family"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.13"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $I$ be a set. An **indexed family** with **index set** $I$ is a function $A$
([[def-function]]) with $\operatorname{dom} A = I$. It is written
$(A_i)_{i \in I}$, and $A_i$ abbreviates the value $A(i)$.

The set of its members is its range
([[def-relation-domain-range-and-field]]):

$$\{A_i : i \in I\} \;:=\; \operatorname{ran} A .$$

## Remarks

- **An indexed family is not the set of its members.** Two different indices may
  carry the same member, and the family records that while the set
  $\{A_i : i \in I\}$ does not. The family with $I = \{a,b\}$ and
  $A_a = A_b = X$ has $\{A_i : i \in I\} = \{X\}$, and it is a different function
  from the family indexed by $\{a\}$ alone.

- **Every set is the range of some family.** For a set $F$, the identity relation
  $\Delta_F$ is a function with domain $F$ and range $F$, so $F$ is the set of
  members of the family it indexes. This is why the family forms of the
  distributive and De Morgan laws below say no less than the unindexed ones.
````

### `def-power-set` — The power set $\\mathcal{P}(x) = \\{\\, z : z \\subseteq x \\,\\}$

````markdown
---
id: def-power-set
kind: definition
title: "The power set $\\mathcal{P}(x) = \\{\\, z : z \\subseteq x \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-power-set-of-a-set-is-a-set, def-subset-and-proper-subset]
justified_by: []
aliases: [def-powerset]
landmark: true
short: "power set"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ be a set. By [[lem-the-power-set-of-a-set-is-a-set]] there is exactly one
set whose elements are precisely the subsets of $x$
([[def-subset-and-proper-subset]]); it is the **power set** of $x$, written
$\mathcal{P}(x)$. Thus $z \in \mathcal{P}(x)$ holds if and only if
$z \subseteq x$, and in the class notation of the page,

$$\mathcal{P}(x) = \{\, z : z \subseteq x \,\}.$$

## Remarks

- **Two axioms, not one.** The elements of $\mathcal{P}(x)$ are pinned down by
  [[def-axiom-of-power-set]] together with
  [[def-axiom-schema-of-separation]], because the axiom is assumed here only in
  its implication form. [[rem-which-axiom-each-construction-uses]] keeps that
  cost visible.

- **The power set is never empty.** $\varnothing \subseteq x$ always holds, so
  $\varnothing \in \mathcal{P}(x)$ for every $x$; in particular
  $\mathcal{P}(\varnothing) = \{\varnothing\}$ rather than $\varnothing$. That
  and the other basic identities are
  [[prop-basic-properties-of-the-power-set]].
````

### `def-function` — A function is a relation $f$ with $(a,b) \\in f$ and $(a,c) \\in f$ implying $b = c$; $f : A \\to B$, the value $f(a)$, domain and codomain

````markdown
---
id: def-function
kind: definition
title: "A function is a relation $f$ with $(a,b) \\in f$ and $(a,c) \\in f$ implying $b = c$; $f : A \\to B$, the value $f(a)$, domain and codomain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-subset-and-proper-subset]
justified_by: []
aliases: [def-function-as-a-set, def-codomain]
landmark: true
short: "function"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 15 to Def. 17"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.10"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
pipeline_run: null
---

## Definition

A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply
$b = c$; "relation" is as in [[def-relation-domain-range-and-field]].

For $a \in \operatorname{dom} f$ there is such a $b$, and by the condition just
stated there is only one; $f(a)$ denotes that unique $b$, so that
$(a,b) \in f$ holds if and only if $a \in \operatorname{dom} f$ and $b = f(a)$
([[thm-the-characterising-property-of-ordered-pairs]]).

We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$
is a function with $\operatorname{dom} f = A$ and
$\operatorname{ran} f \subseteq B$ ([[def-subset-and-proper-subset]]); $A$ is the
**domain** of $f$ and $B$ is a **codomain** for $f$. Equivalently
$f \subseteq A \times B$ with $\operatorname{dom} f = A$
([[def-cartesian-product]], [[def-ordered-pair]]).

## Remarks

- **The codomain belongs to the declaration, not to the set.** A function is a
  set of ordered pairs, and that set determines its domain and its range but not
  a codomain: the same $f$ satisfies $f : A \to B$ for every $B$ containing
  $\operatorname{ran} f$. So being onto is a property of the declaration
  $f : A \to B$ rather than of $f$, while being one-to-one is a property of $f$
  alone. This convention is what makes $\varnothing$ a function
  $\varnothing \to B$ for every $B$ at once.

- **Total on its domain by construction.** There is no partial function here: if
  $a \notin \operatorname{dom} f$ then $f(a)$ is not defined, and a function
  $f : A \to B$ has $\operatorname{dom} f$ equal to $A$ exactly, not merely
  included in it.
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

### `def-the-identity-and-membership-relations-on-a-set` — The identity relation $\\Delta_A = \\{\\,(a,b) \\in A \\times A : a = b\\,\\}$ and the membership relation $\\in_A\\, = \\{\\,(a,b) \\in A \\times A : a \\in b\\,\\}$

````markdown
---
id: def-the-identity-and-membership-relations-on-a-set
kind: definition
title: "The identity relation $\\Delta_A = \\{\\,(a,b) \\in A \\times A : a = b\\,\\}$ and the membership relation $\\in_A\\, = \\{\\,(a,b) \\in A \\times A : a \\in b\\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cartesian-product, def-axiom-schema-of-separation, def-relation-domain-range-and-field, def-ordered-pair]
justified_by: []
aliases: [def-identity-relation, def-membership-relation]
landmark: false
short: "identity and membership relations"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 13 and Def. 14"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Axiom of regularity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_regularity"
pipeline_run: null
---

## Definition

Let $A$ be a set. The **identity relation** and the **membership relation** on
$A$ are

$$\Delta_A := \{\,(a,b) \in A \times A : a = b\,\}, \qquad \in_A \;:=\; \{\,(a,b) \in A \times A : a \in b\,\},$$

sets by [[def-axiom-schema-of-separation]] applied inside $A \times A$
([[def-cartesian-product]]), and relations on $A$ in the sense of
[[def-relation-domain-range-and-field]]. Thus $(a,b) \in \Delta_A$ holds if and
only if $a = b$ and $a \in A$, and $(a,b) \in \in_A$ holds if and only if
$a \in b$ and both lie in $A$ ([[def-ordered-pair]]).

## Remarks

- **$\Delta_A$ carries the set $A$ with it.** $\Delta_A$ and $\Delta_B$ are
  different relations when $A \neq B$, because
  $\operatorname{dom} \Delta_A = \operatorname{ran} \Delta_A = A$. That is what
  makes $\Delta_A$ usable as a neutral element for composition on the left and on
  the right, with the correct set in each position.

- **The membership relation is the one Foundation constrains.** $\in_A$ is set
  membership restricted to $A$, so
  [[thm-foundation-excludes-membership-cycles]] says that it has no cycle of
  length one, two or three.
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

### `prop-products-over-small-index-sets` — $\\prod_{i \\in \\varnothing} A_i = \\{\\varnothing\\}$; if $A_j = \\varnothing$ for some $j \\in I$ then $\\prod_{i \\in I} A_i = \\varnothing$; and for $I = \\{j\\}$ the evaluation $f \\mapsto f(j)$ is a bijection $\\prod_{i \\in I} A_i \\to A_j$

````markdown
---
id: prop-products-over-small-index-sets
kind: proposition
title: "$\\prod_{i \\in \\varnothing} A_i = \\{\\varnothing\\}$; if $A_j = \\varnothing$ for some $j \\in I$ then $\\prod_{i \\in I} A_i = \\varnothing$; and for $I = \\{j\\}$ the evaluation $f \\mapsto f(j)$ is a bijection $\\prod_{i \\in I} A_i \\to A_j$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-of-an-indexed-family, def-function, def-injection-surjection-bijection, thm-the-empty-set-exists-and-is-unique, def-relation-domain-range-and-field, def-unordered-pair-and-singleton, def-axiom-schema-of-separation, def-cartesian-product, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-indexed-union-and-intersection, def-axiom-of-extensionality]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "products over small index sets"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21 and Exercise 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family. Then

- (i) if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$;
- (ii) if $A_j = \varnothing$ for some $j \in I$ then $\prod_{i \in I} A_i = \varnothing$;
- (iii) if $I = \{j\}$ then the evaluation $e := \{\,(f,a) \in (\prod_{i \in I} A_i) \times A_j : a = f(j)\,\}$ is a bijection $\prod_{i \in I} A_i \to A_j$.

Clauses (i) and (ii) pull in opposite directions and are the two cases most often
mis-stated: an empty index set gives a product with one element, while a single
empty member collapses the product entirely.

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L6] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L9] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L12] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $I = \varnothing$. A function with domain $\varnothing$ has no elements, since each of its elements would be a pair whose first coordinate lies in its domain, so the only such function is $\varnothing$; and it satisfies the condition "$f(i) \in A_i$ for every $i \in I$" vacuously. Hence $\varnothing$ is the only element of the product, and the product is $\{\varnothing\}$. [L1, L2, L3, L7, L8, L12]

1.2 Claim (ii): let $j \in I$ with $A_j = \varnothing$. An element $f$ of the product would satisfy $f(j) \in A_j$, and $\varnothing$ has no elements; so the product has no elements. [L1, L7, L12]

1.3 Claim (iii), the map: let $I = \{j\}$ and write $P := \prod_{i \in I} A_i$. Each $f \in P$ has $f(j) \in A_j$, so $e$ as displayed is a set by separation inside $P \times A_j$, is single valued because $f(j)$ is, has domain $P$, and has range inside $A_j$; thus $e : P \to A_j$ with $e(f) = f(j)$. [L1, L2, L3, L9, L10]

2.1 Claim (iii), injectivity: if $e(f) = e(g)$ for $f, g \in P$, then $f$ and $g$ have the same domain $\{j\}$ and agree at $j$, hence are equal. [L4, L6, L8, step 1.3]

2.2 Claim (iii), surjectivity: let $a \in A_j$ and put $f := \{(j,a)\}$. This is a function with domain $\{j\}$ and $f(j) = a \in A_j$, and $a$ lies in $\bigcup_{i \in I} A_i$, so $f \in P$ and $e(f) = a$. [L1, L2, L3, L5, L8, L11, step 1.3]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **Where the general question is settled, and where it is not.** These three computations use no choice principle: in (i) and (ii) nothing is selected, and in (iii) the single value $f(j)$ is determined. None of them is an instance of the general question, because each names its elements outright. Whether a product of nonempty members over an arbitrary index set is nonempty is that general question, and it is exactly the product formulation of the Axiom of Choice, stated earlier on this page at [[def-axiom-of-choice]]; clause (ii) is the reason that formulation carries the hypothesis that every member is nonempty.
````

### `def-axiom-schema-of-separation` — The Axiom Schema of Separation: for each formula $\\varphi$, $\\forall \\bar p\\,\\forall x\\,\\exists y\\,\\forall z\\,(z \\in y \\leftrightarrow (z \\in x \\wedge \\varphi(z,\\bar p)))$

````markdown
---
id: def-axiom-schema-of-separation
kind: definition
title: "The Axiom Schema of Separation: for each formula $\\varphi$, $\\forall \\bar p\\,\\forall x\\,\\exists y\\,\\forall z\\,(z \\in y \\leftrightarrow (z \\in x \\wedge \\varphi(z,\\bar p)))$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: [def-axiom-schema-of-specification, def-separation-schema]
landmark: true
short: "Separation schema"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom schema of specification (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_schema_of_specification"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

Let $\varphi(z, \bar p)$ be a formula of the language of set theory
([[def-language-of-set-theory]]) in which the variable $y$ does not occur free.
The **Separation instance** for $\varphi$ is the sentence

$$\forall \bar p\,\forall x\,\exists y\,\forall z\,\bigl(z \in y \leftrightarrow (z \in x \wedge \varphi(z,\bar p))\bigr).$$

The **Axiom Schema of Separation** is the collection of all these sentences, one
for each such $\varphi$. In words: for any parameters $\bar p$ and any set $x$,
there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which
$\varphi(z,\bar p)$ holds.

It is a schema and not a single axiom because $\varphi$ ranges over the formulas
of the language, of which there are infinitely many, and the language provides no
way to quantify over them.

## Remarks

- **The side condition is not decoration.** If $y$ were allowed to occur free in
  $\varphi$, the instance $\varphi(z,\bar p) := z \notin y$ would assert that
  some $y$ satisfies $z \in y \leftrightarrow (z \in x \wedge z \notin y)$ for
  every $z$, which is contradictory as soon as $x$ has a member. Requiring $y$ to
  be fresh is what keeps the schema consistent.

- **One parameter or a list.** Some presentations state the schema with a single
  parameter $p$ rather than a list $\bar p$; the two forms prove the same
  theorems, since a finite list can be coded once ordered pairs are available.
  The list form is used here because the instances below quantify over several
  sets at once.

- **A separated set is unique.** The instance is stated with $\leftrightarrow$,
  so any two sets it produces have the same elements and are equal by
  [[def-axiom-of-extensionality]]. That is what licenses the notation
  $\{\, z \in x : \varphi(z,\bar p) \,\}$ introduced at
  [[def-subset-and-proper-subset]].
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

### `lem-basic-laws-of-inclusion` — $\\varnothing \\subseteq x$, $x \\subseteq x$, inclusion is transitive, and $x = y$ if and only if $x \\subseteq y$ and $y \\subseteq x$

````markdown
---
id: lem-basic-laws-of-inclusion
kind: lemma
title: "$\\varnothing \\subseteq x$, $x \\subseteq x$, inclusion is transitive, and $x = y$ if and only if $x \\subseteq y$ and $y \\subseteq x$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subset-and-proper-subset, def-axiom-of-extensionality, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [lem-double-inclusion]
landmark: false
short: "basic laws of inclusion"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Subset (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subset"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.1"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

For all sets $x$, $y$ and $z$:

- (i) $\varnothing \subseteq x$;
- (ii) $x \subseteq x$;
- (iii) if $x \subseteq y$ and $y \subseteq z$ then $x \subseteq z$;
- (iv) $x = y$ if and only if $x \subseteq y$ and $y \subseteq x$.

## Facts & Assumptions

**Given:** sets $x$, $y$ and $z$.

[L1] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L3] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): no $t$ satisfies $t \in \varnothing$, so the implication "$t \in \varnothing$ implies $t \in x$" holds vacuously for every $t$, which is $\varnothing \subseteq x$. [L1, L3]

1.2 Claim (ii): every $t$ with $t \in x$ satisfies $t \in x$, which is $x \subseteq x$. [L1]

1.3 Claim (iii): assume $x \subseteq y$ and $y \subseteq z$, and let $t \in x$; then $t \in y$ by the first inclusion and $t \in z$ by the second, so every element of $x$ is an element of $z$. [L1]

1.4 Claim (iv), from right to left: assume $x \subseteq y$ and $y \subseteq x$; for any $t$, the first inclusion gives that $t \in x$ implies $t \in y$ and the second gives that $t \in y$ implies $t \in x$, so $t \in x$ holds if and only if $t \in y$, and therefore $x = y$. [L1, L2]

1.5 Claim (iv), from left to right: assume $x = y$; then $t \in x$ and $t \in y$ are the same statement for every $t$, so each of $x \subseteq y$ and $y \subseteq x$ holds. [L1]

2.1 Claims (i) to (iv) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
````

### `def-indexed-union-and-intersection` — $\\bigcup_{i \\in I} A_i := \\bigcup \\{A_i : i \\in I\\}$, and $\\bigcap_{i \\in I} A_i := \\bigcap \\{A_i : i \\in I\\}$ for $I \\neq \\varnothing$

````markdown
---
id: def-indexed-union-and-intersection
kind: definition
title: "$\\bigcup_{i \\in I} A_i := \\bigcup \\{A_i : i \\in I\\}$, and $\\bigcap_{i \\in I} A_i := \\bigcap \\{A_i : i \\in I\\}$ for $I \\neq \\varnothing$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-indexed-family, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-the-intersection-of-a-nonempty-set-is-a-set, def-relation-domain-range-and-field, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [def-indexed-union, def-indexed-intersection]
landmark: false
short: "indexed union and intersection"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Definition

Let $(A_i)_{i \in I}$ be an indexed family ([[def-indexed-family]]). Its
**indexed union** is

$$\bigcup_{i \in I} A_i \;:=\; \bigcup \{A_i : i \in I\},$$

the union of its range ([[def-union-of-a-set-and-binary-union]]); so
$z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some
$i \in I$.

When $I \neq \varnothing$ its **indexed intersection** is

$$\bigcap_{i \in I} A_i \;:=\; \bigcap \{A_i : i \in I\},$$

which is legitimate because a family with $I \neq \varnothing$ has a value at
some index, so its range is nonempty
([[def-relation-domain-range-and-field]]) and
[[lem-the-intersection-of-a-nonempty-set-is-a-set]] applies
([[def-intersection-of-a-set-and-binary-intersection]]); so
$z \in \bigcap_{i \in I} A_i$ holds if and only if $z \in A_i$ for every
$i \in I$.

## Remarks

- **The empty index set.** $\bigcup_{i \in \varnothing} A_i = \varnothing$,
  because the empty family has empty range and $\bigcup \varnothing = \varnothing$
  ([[thm-the-empty-set-exists-and-is-unique]]). The indexed intersection is left
  undefined there, for the reason recorded at
  [[cor-the-empty-family-has-no-intersection]]: no set has every set as an
  element.

- **Indexing changes nothing about the operations.** Both notations are the
  primitive $\bigcup$ and $\bigcap$ applied to the range of the family, so every
  law proved for $\bigcup F$ and $\bigcap F$ transfers verbatim; that transfer is
  [[cor-distributive-and-de-morgan-laws-for-indexed-families]].
````

### `lem-the-composite-of-two-functions-is-a-function` — If $f$ and $g$ are functions then $g \\circ f$ is a function with domain $f^{-1}[\\operatorname{dom} g]$ and $(g \\circ f)(x) = g(f(x))$ there; $\\Delta_A$ is a function with $\\Delta_A(a) = a$; and $f \\circ \\Delta_A = f = \\Delta_B \\circ f$ for $f : A \\to B$

````markdown
---
id: lem-the-composite-of-two-functions-is-a-function
kind: lemma
title: "If $f$ and $g$ are functions then $g \\circ f$ is a function with domain $f^{-1}[\\operatorname{dom} g]$ and $(g \\circ f)(x) = g(f(x))$ there; $\\Delta_A$ is a function with $\\Delta_A(a) = a$; and $f \\circ \\Delta_A = f = \\Delta_B \\circ f$ for $f : A \\to B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-inverse-relation-composition-and-restriction, def-image-and-preimage-under-a-relation, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, prop-composition-of-relations-is-associative]
justified_by: []
aliases: []
landmark: false
short: "composites of functions"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 5 and Exercise 11"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be functions and let $A$, $B$ be sets. Then

- (i) $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain;
- (ii) $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$;
- (iii) if $f : A \to B$ then $f \circ \Delta_A = f$ and $\Delta_B \circ f = f$.

## Facts & Assumptions

**Given:** functions $f$ and $g$, and sets $A$, $B$.

[L1] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L2] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

[L5] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L6] if $R$ is a relation from $A$ to $B$, then $\Delta_B \circ R = R$ and $R \circ \Delta_A = R$ ([[prop-composition-of-relations-is-associative]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i), single-valuedness: $g \circ f$ is a relation, and if $(a,c)$ and $(a,c')$ both lie in it, there are $b$ and $b'$ with $(a,b),(a,b') \in f$ and $(b,c),(b',c') \in g$; single-valuedness of $f$ gives $b = b'$, and then single-valuedness of $g$ gives $c = c'$. [L1, L2]

1.2 Claim (ii): if $(a,b)$ and $(a,c)$ lie in $\Delta_A$ then $b = a = c$, so $\Delta_A$ is a function; its domain is $A$, because $(a,a) \in \Delta_A$ exactly for $a \in A$, and its value at $a$ is $a$. [L1, L3, L5]

1.3 Claim (iii): a function $f : A \to B$ has $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$, so it is a relation from $A$ to $B$, and the identity laws for relations apply verbatim. [L6]

2.1 Claim (i), domain and values: $a \in \operatorname{dom}(g \circ f)$ holds exactly when there are $b$ and $c$ with $(a,b) \in f$ and $(b,c) \in g$, that is, exactly when $a \in \operatorname{dom} f$ and $f(a) \in \operatorname{dom} g$; and that is exactly the condition $a \in f^{-1}[\operatorname{dom} g]$. For such an $a$ the pair $(a, g(f(a)))$ lies in $g \circ f$, so $(g \circ f)(a) = g(f(a))$ by step 1.1. [L1, L2, L3, L4, step 1.1]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
````

