## High-blast-radius target — `lem-the-power-set-of-a-set-is-a-set`

This proof has 1 direct and 2612 transitive consumers.
Normalized current SHA-256: `9094167e71604026ba5b268926e751cb4aa30f4c24cc906e54e41d1452968e61`

The complete current target follows, including frontmatter:

````markdown
---
id: lem-the-power-set-of-a-set-is-a-set
kind: lemma
title: "For every set $x$ there is exactly one set whose elements are precisely the subsets of $x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-power-set, def-axiom-schema-of-separation, def-axiom-of-extensionality, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "the power set is a set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
pipeline_run: null
---

## Statement

For every set $x$ there is exactly one set $p$ such that, for every $z$,
$z \in p$ holds if and only if $z \subseteq x$.

## Facts & Assumptions

**Given:** a set $x$.

[L1] For every set $x$ there is a set $y$ that contains every $z$ all of whose elements belong to $x$ ([[def-axiom-of-power-set]]).

[L2] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L3] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L4] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Power Set supplies a set $y$ that contains every $z$ all of whose elements belong to $x$; by the meaning of inclusion, $y$ contains every $z$ with $z \subseteq x$. [L1, L3]

2.1 Apply Separation to $y$ with the formula $\varphi(z,x) := \forall t\,(t \in z \to t \in x)$ and the parameter $x$: the set $p := \{\, z \in y : z \subseteq x \,\}$ exists, and for every $z$, $z \in p$ holds if and only if $z \in y$ and $z \subseteq x$. [L2, L3, step 1.1]

3.1 If $z \subseteq x$ then $z \in y$ by step 1.1, so the condition "$z \in y$ and $z \subseteq x$" reduces to $z \subseteq x$; hence $z \in p$ holds if and only if $z \subseteq x$, which proves existence. [step 1.1, step 2.1]

4.1 If $p'$ also satisfies "$z \in p'$ if and only if $z \subseteq x$" for every $z$, then $z \in p$ holds if and only if $z \in p'$ for every $z$, so $p = p'$; existence and uniqueness together give the statement. [L4, step 3.1] ∎
````

## Full text of every cited or declared item (4)

### `def-axiom-of-extensionality`

````markdown
---
id: def-axiom-of-extensionality
kind: definition
title: "The Axiom of Extensionality: $\\forall x\\,\\forall y\\,(\\forall z\\,(z \\in x \\leftrightarrow z \\in y) \\to x = y)$"
status: published
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
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
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
  the right-to-left direction of that biconditional — the implication from
  sameness of members to equality — is assumed.

- **What it is used for below.** Every construction on this page produces a set
  by an axiom that specifies its members, and every such axiom is stated with
  $\leftrightarrow$. Extensionality is what turns "a set with these members" into
  "*the* set with these members", so it is the licence for each definite article
  and each piece of notation introduced here.
````

### `def-axiom-of-power-set`

````markdown
---
id: def-axiom-of-power-set
kind: definition
title: "The Axiom of Power Set: $\\forall x\\,\\exists y\\,\\forall z\\,(\\forall t\\,(t \\in z \\to t \\in x) \\to z \\in y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
external_refs: [rem-independence-of-ch-and-gch]
aliases: []
landmark: true
short: "Power Set"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_power_set"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The **Axiom of Power Set** is the sentence

$$\forall x\,\exists y\,\forall z\,\bigl(\forall t\,(t \in z \to t \in x) \to z \in y\bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): for every set $x$
there is a set $y$ that contains every $z$ all of whose elements belong to $x$.

The axiom is assumed here in this implication form. It says that some set
collects all such $z$; it does not say that $y$ contains nothing else, and
trimming $y$ down to exactly those $z$ is a separate step, carried out at
[[lem-the-power-set-of-a-set-is-a-set]] using
[[def-axiom-schema-of-separation]].

## Remarks

- **Why the weak form.** Some presentations assume the biconditional
  $\forall t\,(t \in z \to t \in x) \leftrightarrow z \in y$ outright. The
  implication form assumed here is the weaker assumption, and it keeps the
  Separation step visible: the ledger at
  [[rem-which-axiom-each-construction-uses]] then records honestly that the power
  set costs Power Set *and* Separation.

- **The axiom says nothing about size.** It asserts that a set collecting the
  subsets of $x$ exists, and nothing about how many members that set has. How
  large the power set of an infinite set is, is exactly the question the
  continuum hypothesis asks, and that question is settled by neither ZF nor ZFC
  ([[rem-independence-of-ch-and-gch]]).
````

### `def-axiom-schema-of-separation`

````markdown
---
id: def-axiom-schema-of-separation
kind: definition
title: "The Axiom Schema of Separation: for each formula $\\varphi$, $\\forall \\bar p\\,\\forall x\\,\\exists y\\,\\forall z\\,(z \\in y \\leftrightarrow (z \\in x \\wedge \\varphi(z,\\bar p)))$"
status: published
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
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
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

### `def-subset-and-proper-subset`

````markdown
---
id: def-subset-and-proper-subset
kind: definition
title: "Subset $x \\subseteq y$, proper subset $x \\subsetneq y$, and the separation notation $\\{\\, z \\in x : \\varphi(z) \\,\\}$"
status: published
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
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
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

