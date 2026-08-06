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

## Target item — `lem-the-product-of-an-indexed-family-is-a-set`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: lem-the-product-of-an-indexed-family-is-a-set
kind: lemma
title: "For an indexed family $(A_i)_{i \\in I}$ the collection of functions $f$ with domain $I$ and $f(i) \\in A_i$ for every $i \\in I$ is a set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-indexed-family, def-indexed-union-and-intersection, def-the-set-of-functions-from-one-set-to-another, def-axiom-schema-of-separation, def-function, def-subset-and-proper-subset, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "the product is a set"
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

Let $(A_i)_{i \in I}$ be an indexed family. Then there is a set whose elements
are exactly the functions $f$ with $\operatorname{dom} f = I$ and
$f(i) \in A_i$ for every $i \in I$, and it is a subset of
$C^{I}$ where $C := \bigcup_{i \in I} A_i$.

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$, and $C := \bigcup_{i \in I} A_i$.

[L1] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L2] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L3] $f \in B^{A}$ holds if and only if $f : A \to B$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[L4] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L5] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be a function with $\operatorname{dom} f = I$ and $f(i) \in A_i$ for every $i \in I$. Every element of $\operatorname{ran} f$ is $f(i)$ for some $i \in I$, hence lies in $A_i$ and therefore in $C$; so $\operatorname{ran} f \subseteq C$ and $f : I \to C$, that is, $f \in C^{I}$. [L1, L2, L3, L4, L6, L7]

2.1 Separating inside $C^{I}$ with the formula saying that $z(i) \in A_i$ for every $i \in I$, with parameters $I$ and the family, gives a set whose elements are exactly the members of $C^{I}$ with that property; by step 1.1 every function of the kind described already lies in $C^{I}$, so this set has exactly the intended elements and is included in $C^{I}$. [L3, L5, L6, step 1.1] ∎
````

## Declared dependencies of `lem-the-product-of-an-indexed-family-is-a-set`

`deps:` ["def-indexed-family","def-indexed-union-and-intersection","def-the-set-of-functions-from-one-set-to-another","def-axiom-schema-of-separation","def-function","def-subset-and-proper-subset","def-relation-domain-range-and-field"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `def-the-set-of-functions-from-one-set-to-another` — The set $B^{A}$ of all functions $A \\to B$

````markdown
---
id: def-the-set-of-functions-from-one-set-to-another
kind: definition
title: "The set $B^{A}$ of all functions $A \\to B$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-the-set-of-functions-between-two-sets-is-a-set, def-function]
justified_by: []
forward_refs: [rem-ordinal-versus-cardinal-exponentiation, def-function-space]
aliases: [def-function-set]
landmark: false
short: "the set of functions"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets. By
[[lem-the-set-of-functions-between-two-sets-is-a-set]] the functions
$A \to B$ ([[def-function]]) form a set; it is written

$$B^{A} := \{\, f : f \text{ is a function with } \operatorname{dom} f = A \text{ and } \operatorname{ran} f \subseteq B \,\}.$$

Thus $f \in B^{A}$ holds if and only if $f : A \to B$.

## Remarks

- **The notation collides with exponentiation, and the collision is deliberate.**
  $B^{A}$ is the same symbol the library already uses for a space of functions in
  [[def-function-space]], where $F^{X}$ is the set of functions $X \to F$ carrying
  a vector-space structure; the underlying set there is the one defined here.
  Some set-theory texts write ${}^{A}B$ instead, reserving $B^{A}$ for ordinal and
  cardinal exponentiation. This library keeps $B^{A}$ for the function set, and
  [[rem-ordinal-versus-cardinal-exponentiation]] is where the arithmetic
  exponentiations are distinguished from one another.

- **Degenerate cases.** $B^{\varnothing}$ has exactly one element, the empty
  function, for every $B$, since a function with empty domain has no elements at
  all. $\varnothing^{A}$ is empty whenever $A$ is nonempty, since a function with
  domain $A$ must take a value at each point of $A$, and $\varnothing^{\varnothing}$
  again has the empty function as its only element.
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

### `def-subset-and-proper-subset` — Subset $x \\subseteq y$, proper subset $x \\subsetneq y$, and the separation notation $\\{\\, z \\in x : \\varphi(z) \\,\\}$

````markdown
---
id: def-subset-and-proper-subset
kind: definition
title: "Subset $x \\subseteq y$, proper subset $x \\subsetneq y$, and the separation notation $\\{\\, z \\in x : \\varphi(z) \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-extensionality, def-axiom-schema-of-separation, def-language-of-set-theory]
justified_by: []
aliases: [def-subset, def-inclusion]
landmark: false
short: "subset, proper subset"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Subset (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subset"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.1"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

For sets $x$ and $y$ we write $x \subseteq y$, and say that $x$ is a **subset**
of $y$ or that $x$ is **included** in $y$, for the formula
$\forall t\,(t \in x \to t \in y)$ of the language of set theory
([[def-language-of-set-theory]]); thus $x \subseteq y$ means that every element
of $x$ is an element of $y$. We also write $y \supseteq x$ for $x \subseteq y$.

$x$ is a **proper subset** of $y$, written $x \subsetneq y$, when $x \subseteq y$
and $x \neq y$.

**Separation notation.** Let $x$ be a set, $\varphi(z,\bar p)$ a formula and
$\bar p$ parameters. [[def-axiom-schema-of-separation]] supplies a set whose
elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds,
and [[def-axiom-of-extensionality]] shows there is only one such set. It is
written

$$\{\, z \in x : \varphi(z,\bar p) \,\}$$

and every set introduced on this page by separating a condition inside a set
already in hand is written this way. Directly from the definition,
$\{\, z \in x : \varphi(z,\bar p) \,\} \subseteq x$.

## Remarks

- **$\subset$ is not used in this library.** Sources disagree about it: some write
  $\subset$ for inclusion and some for proper inclusion, so a formula containing
  it cannot be read without knowing which convention its author used.
  $\subseteq$ and $\subsetneq$ are unambiguous and are the only two symbols used
  here.

- **Membership and inclusion are different relations.** $t \in x$ says $t$ is one
  of the elements of $x$; $t \subseteq x$ says every element of $t$ is an element
  of $x$. Neither implies the other in general, and
  [[prop-basic-properties-of-the-power-set]] is where the two are systematically
  related.
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

