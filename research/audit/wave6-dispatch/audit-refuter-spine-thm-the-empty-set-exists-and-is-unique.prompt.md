# Audit proof-refuter brief — Wave 6, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```



---

# This dispatch

## High-blast-radius target — `thm-the-empty-set-exists-and-is-unique`

This proof has 34 direct and 2624 transitive consumers.
Normalized current SHA-256: `1b27d1c149a7568b6b3c99f4768ea0938ef7a8010a58cc35dc49cc172db76318`

The complete current target follows, including frontmatter:

````markdown
---
id: thm-the-empty-set-exists-and-is-unique
kind: theorem
title: "There is exactly one set with no elements, written $\\varnothing$"
status: published
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
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
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

## Full text of every cited or declared item (3)

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

### `def-language-of-set-theory`

````markdown
---
id: def-language-of-set-theory
kind: definition
title: "The first-order language of set theory: $\\in$, $=$, formulas with parameters, and class abbreviations"
status: published
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
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
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
  [[def-axiom-of-choice]]. Choice is stated there
  and not restated here, and no construction and no result on this page uses it.
  [[rem-which-axiom-each-construction-uses]] records, axiom by axiom, what the
  material on this page does use.

- **Why the class notation needs its own convention.** Reading
  $\{\, z : \varphi(z) \,\}$ as a term would make "$\{\, z : \varphi(z) \,\}$
  exists" a triviality, and that is exactly the reading [[thm-russells-paradox]]
  refutes. Keeping it an abbreviation is what forces every set-forming step below
  to name the axiom that licenses it.
````

