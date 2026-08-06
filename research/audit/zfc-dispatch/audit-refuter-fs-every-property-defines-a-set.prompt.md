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

## Target item — `fs-every-property-defines-a-set`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: fs-every-property-defines-a-set
kind: false-statement
title: "FALSE: for every formula $\\varphi$ of the language of set theory there is a set $\\{\\, x : \\varphi(x) \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-russells-paradox, cor-there-is-no-set-of-all-sets, def-axiom-schema-of-separation, def-language-of-set-theory]
justified_by: []
aliases: [fs-unrestricted-comprehension]
landmark: false
short: "unrestricted comprehension (false)"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** For every formula $\varphi(x)$ of the language of set theory
([[def-language-of-set-theory]]) there is a set whose elements are exactly the
sets satisfying $\varphi$; that is, every instance of

$$\exists y\,\forall x\,\bigl(x \in y \leftrightarrow \varphi(x)\bigr)$$

holds. This is the unrestricted comprehension schema, and it is the principle
[[def-axiom-schema-of-separation]] deliberately weakens.

## Facts & Assumptions

**Given:** the claim above, asserted for every formula of the language ([[def-language-of-set-theory]]).

[L1] There is no set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$ ([[thm-russells-paradox]]).

[L2] There is no set $U$ such that $y \in U$ for every set $y$ ([[cor-there-is-no-set-of-all-sets]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the schema holds for every formula of the language. [assume-contra]

2.1 Instantiate it at the formula $\varphi(x) := x \notin x$: there is a set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$. [step 1.1]

3.1 No such set exists, so the supposition fails and the schema is false. Instantiating instead at $\varphi(x) := x = x$ produces a set with every set as an element, which is impossible for the same underlying reason. [L1, L2, step 2.1, discharge-contradiction] ∎

## Remarks

- **What survives.** Restricting the schema so that the separated elements are drawn from a set already in hand gives [[def-axiom-schema-of-separation]], which is consistent as far as anything on this page can tell and is what every construction here uses. [[rem-why-separation-replaces-unrestricted-comprehension]] runs Russell's argument against the restricted schema and obtains a theorem instead of a contradiction.
````

## Declared dependencies of `fs-every-property-defines-a-set`

`deps:` ["thm-russells-paradox","cor-there-is-no-set-of-all-sets","def-axiom-schema-of-separation","def-language-of-set-theory"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `thm-russells-paradox` — There is no $R$ with $x \\in R \\leftrightarrow x \\notin x$ for every $x$

````markdown
---
id: thm-russells-paradox
kind: theorem
title: "There is no $R$ with $x \\in R \\leftrightarrow x \\notin x$ for every $x$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-language-of-set-theory]
justified_by: []
aliases: [thm-russell-paradox]
landmark: true
short: "Russell's paradox"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Theorem 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

There is no set $R$ such that, for every set $x$,

$$x \in R \leftrightarrow x \notin x .$$

## Facts & Assumptions

**Given:** the language of set theory, in which $x \in R$ and $x \notin x$ are formulas ([[def-language-of-set-theory]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose there is a set $R$ such that $x \in R$ holds if and only if $x \notin x$, for every set $x$. [assume-contra]

2.1 The hypothesis holds for every set $x$, and $R$ is a set, so it holds for $x := R$: $R \in R$ if and only if $R \notin R$. [step 1.1]

3.1 A statement equivalent to its own negation is contradictory: if $R \in R$ then $R \notin R$, and if $R \notin R$ then $R \in R$, so each alternative refutes itself. There is therefore no such $R$. [step 2.1, discharge-contradiction] ∎

## Remarks

- **What fails is unrestricted comprehension, not a particular formula.** The argument uses only that $x \notin x$ is a formula of the language and that the supposed $R$ is itself a set, so it refutes any principle asserting that every formula has a set of all its instances. [[rem-why-separation-replaces-unrestricted-comprehension]] records how [[def-axiom-schema-of-separation]] avoids it.
````

### `cor-there-is-no-set-of-all-sets` — There is no set $U$ with $y \\in U$ for every set $y$

````markdown
---
id: cor-there-is-no-set-of-all-sets
kind: corollary
title: "There is no set $U$ with $y \\in U$ for every set $y$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-russells-paradox, def-axiom-schema-of-separation, def-subset-and-proper-subset]
justified_by: []
aliases: [cor-no-universal-set]
landmark: false
short: "no set of all sets"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Theorem 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

There is no set $U$ such that $y \in U$ for every set $y$.

## Facts & Assumptions

**Given:** nothing beyond the axioms cited below.

[L1] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L2] The separated set is written $\{\, z \in x : \varphi(z,\bar p) \,\}$ ([[def-subset-and-proper-subset]]).

[L3] There is no set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$ ([[thm-russells-paradox]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $U$ is a set with $y \in U$ for every set $y$. [assume-contra]

2.1 Separation applied to $U$ with the formula $\varphi(x) := x \notin x$ gives the set $R := \{\, x \in U : x \notin x \,\}$, whose elements are exactly the $x \in U$ with $x \notin x$. [L1, L2, step 1.1]

3.1 Every set $x$ satisfies $x \in U$, so for every set $x$ the condition "$x \in U$ and $x \notin x$" reduces to $x \notin x$; hence $x \in R$ holds if and only if $x \notin x$, for every set $x$. [step 1.1, step 2.1]

4.1 Step 3.1 produces exactly the set that cannot exist, so the supposition is untenable and no such $U$ exists. [L3, step 3.1, discharge-contradiction] ∎

## Remarks

- **The class of all sets is not a set.** The formula $x = x$ has a class abbreviation, and this corollary says that abbreviation is not a set; that is why a complement is always taken relative to a set $X$ in [[def-set-difference-and-symmetric-difference]] rather than absolutely.
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

### `def-language-of-set-theory` — The first-order language of set theory: $\\in$, $=$, formulas with parameters, and class abbreviations

````markdown
---
id: def-language-of-set-theory
kind: definition
title: "The first-order language of set theory: $\\in$, $=$, formulas with parameters, and class abbreviations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: true
short: "the language of set theory"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016)"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

The **language of set theory** is first-order logic with equality whose only
non-logical symbol is a binary relation symbol $\in$. Its terms are the variables
$x, y, z, \dots$; its atomic formulas are $x \in y$ and $x = y$; and its formulas
are built from atomic formulas by the connectives $\neg$, $\wedge$, $\vee$,
$\to$, $\leftrightarrow$ and the quantifiers $\forall x$ and $\exists x$. Each
axiom stated on this page is a sentence of this language, and no other vocabulary
occurs in any of them.

Two conventions of ordinary first-order logic are in force throughout.

- The domain of discourse is **nonempty**: $\exists x\,(x = x)$ is logically
  valid, so some object exists before any axiom is assumed.
- Every object of the domain is a **set**. There are no urelements, so "$z$" and
  "the set $z$" say the same thing.

We write $x \neq y$ for $\neg(x = y)$ and $x \notin y$ for $\neg(x \in y)$; we
abbreviate $\forall z\,(z \in x \to \varphi)$ by $\forall z \in x\,\varphi$ and
$\exists z\,(z \in x \wedge \varphi)$ by $\exists z \in x\,\varphi$; and we
abbreviate $\exists w\,\bigl(\psi(w) \wedge \forall v\,(\psi(v) \to v = w)\bigr)$
by $\exists! w\,\psi(w)$, read "there is exactly one $w$ with $\psi(w)$".

A formula is written $\varphi(z, \bar p)$ when its free variables are among $z$
and the variables of the list $\bar p = p_1, \dots, p_n$; the $p_i$ are its
**parameters**. Parameters matter because an axiom schema ranges over formulas,
and a formula may mention sets already in hand.

A **class abbreviation** $\{\, z : \varphi(z, \bar p) \,\}$ is *not* a term of
the language. It is notation for the formula $\varphi$ itself, and a sentence
written with it abbreviates a sentence that does not use it:

- $w \in \{\, z : \varphi(z, \bar p) \,\}$ abbreviates $\varphi(w, \bar p)$;
- "$\{\, z : \varphi(z, \bar p) \,\}$ is a set" abbreviates
  $\exists y\,\forall z\,\bigl(z \in y \leftrightarrow \varphi(z, \bar p)\bigr)$.

Every formula has a class abbreviation, and whether that abbreviation is a set is
a separate question; answering it affirmatively always requires an axiom.

## Remarks

- **ZFC.** ZFC is the theory whose axioms are the ZF axioms stated on this page
  together with the **Axiom of Choice**, which this library states at
  [[def-axiom-of-choice]]. Choice is the tenth axiom of ZFC; it is stated there
  and not restated here, and no construction and no result on this page uses it.
  [[rem-which-axiom-each-construction-uses]] records, axiom by axiom, what the
  material on this page does use.

- **Why the class notation needs its own convention.** Reading
  $\{\, z : \varphi(z) \,\}$ as a term would make "$\{\, z : \varphi(z) \,\}$
  exists" a triviality, and that is exactly the reading [[thm-russells-paradox]]
  refutes. Keeping it an abbreviation is what forces every set-forming step below
  to name the axiom that licenses it.
````

### `rem-why-separation-replaces-unrestricted-comprehension` — Separation and Replacement build subsets of sets already in hand, which is exactly what blocks Russell's construction

````markdown
---
id: rem-why-separation-replaces-unrestricted-comprehension
kind: remark
title: "Separation and Replacement build subsets of sets already in hand, which is exactly what blocks Russell's construction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-russells-paradox, cor-there-is-no-set-of-all-sets, def-axiom-schema-of-separation, def-axiom-schema-of-replacement, def-language-of-set-theory]
justified_by: []
aliases: []
landmark: false
short: "why Separation, not comprehension"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.1 and Axiom 5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Remark

An unrestricted comprehension principle would assert, for every formula
$\varphi(x)$ of the language ([[def-language-of-set-theory]]), that
$\exists y\,\forall x\,(x \in y \leftrightarrow \varphi(x))$. Taking
$\varphi(x) := x \notin x$ turns that assertion into precisely the set
[[thm-russells-paradox]] shows cannot exist, so the principle is refutable in
plain first-order logic; no appeal to any axiom below is needed to reject it.

[[def-axiom-schema-of-separation]] asserts something weaker in a specific way: it
does not produce a set from a formula alone, but only from a formula **together
with a set $x$ already in hand**, and the set it produces is a subset of that
$x$. Running Russell's argument against it therefore yields no contradiction but
a theorem. Given any set $x$, the separated set $r := \{\, z \in x : z \notin z \,\}$
exists; asking whether $r \in r$ shows that $r \in x$ is impossible, since
$r \in x$ would give $r \in r \leftrightarrow r \notin r$. So every set $x$ has a
subset that is not one of its elements, and no set contains every set, which is
[[cor-there-is-no-set-of-all-sets]].

The same restriction is what makes [[def-axiom-schema-of-replacement]] safe. It
does not assert that an arbitrary class is a set either: its hypothesis is that a
formula behaves like a function **on a set $A$ already in hand**, and its
conclusion is about the image of that particular set. Both schemas therefore
build only from material already given, and neither can be turned on the
universe at large.

What is given up is small and is worth naming exactly: from these axioms alone
nothing whatever can be constructed, which is why
[[def-axiom-of-infinity]] is assumed outright rather than derived, and why
[[thm-the-empty-set-exists-and-is-unique]] needs the logical fact that the domain
of discourse is nonempty before Separation has anything to act on.
````

