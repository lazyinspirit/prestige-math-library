# Independent high-blast-radius proof reading — Wave 6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch independent readers and read-only proof-refuters;
> put this rule in their prompts verbatim.

You are **GPT 5.6 Terra at xhigh effort with a 1,000,000-token context window**,
an independent read-only current-text reader. You did not author or adjudicate
the assigned item. Your sandbox is read-only. Return evidence only; Audit-Alpha
alone may adjudicate or edit.

## Triage — binding

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target from current disk and verify that its normalized
current SHA-256 matches the task. Read its title, public claim, Facts &
Assumptions, every numbered proof step, and Remarks. Inspect every cited
dependency before alleging that it is too weak. Check exact hypotheses,
direction, boundary cases, hidden choice or circularity, and whether the title
or Remarks overclaim the proof. The supplied task also reproduces the target and
all cited/declared dependencies as a byte-exact cross-check.

Reply with exactly:

```text
VERDICT: CERTIFIED | REJECTED
ITEM_SHA256: <the normalized current hash from the task>
```

If rejected, name each fatal defect and give exact evidence. Then always end:

```text
CHECKED: <confirm title, public claim, every numbered step, Remarks, and cited dependencies were read>
```


---

# This dispatch

## High-blast-radius target — `lem-omega-smallest-inductive`

This proof has 3 direct and 2427 transitive consumers.
Normalized current SHA-256: `7e6d0743e2ccd72dbc26821201577803aad77cd3e41bd0da95c858f4ae706f36`

The complete current target follows, including frontmatter:

````markdown
---
id: lem-omega-smallest-inductive
kind: lemma
title: "The natural numbers exist: a smallest inductive set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inductive-set, def-axiom-of-infinity, def-axiom-schema-of-separation,
       def-axiom-of-extensionality]
aliases: []
landmark: false
short: "$\\omega=\\bigcap$ inductive"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

There is a set $\omega$ that is inductive ([[def-inductive-set]]) and is a subset of every inductive set; it is unique. This $\omega$ is the set of natural numbers.

## Facts & Assumptions

**Given:** ZFC; in particular the Axiom of Infinity ([[def-axiom-of-infinity]]): there exists an inductive set; the Axiom Schema of Separation ([[def-axiom-schema-of-separation]]); and Extensionality ([[def-axiom-of-extensionality]]). Write $x^{+} := x \cup \{x\}$. Recall that $I$ inductive means $\varnothing \in I$ and ($x \in I \Rightarrow x^{+} \in I$).

## Proof

**Proof technique:** direct.

1.1 By the Axiom of Infinity fix an inductive set $I_0$. [given]

1.2 By Separation the collection $\omega := \{x \in I_0 : x \in J \text{ for every inductive set } J\}$ is a set. [given, construct]

2.1 $\omega$ is inductive: $\varnothing \in J$ for every inductive $J$ (so $\varnothing \in I_0$ and $\varnothing \in \omega$), and if $x \in \omega$ then $x \in J$ for every inductive $J$, hence $x^{+} \in J$ for every inductive $J$, and $x^{+} \in I_0$ since $x \in I_0$ and $I_0$ is inductive, so $x^{+} \in \omega$. [step 1.2]

2.2 $\omega \subseteq J$ for every inductive $J$: any $x \in \omega$ satisfies $x \in J$ by definition. [step 1.2]

3.1 Uniqueness: if $\omega'$ is also inductive and contained in every inductive set, then $\omega \subseteq \omega'$ (as $\omega'$ is inductive) and $\omega' \subseteq \omega$ (as $\omega$ is inductive), so $\omega = \omega'$ by Extensionality. [step 2.1, step 2.2] ∎
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

### `def-axiom-of-infinity`

````markdown
---
id: def-axiom-of-infinity
kind: definition
title: "The Axiom of Infinity: there is a set containing a set with no elements and closed under $y \\mapsto y \\cup \\{y\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
forward_refs: [def-inductive-set, def-natural-numbers]
aliases: []
landmark: false
short: "Infinity"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 9"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Infinity** is the sentence

$$\exists I\,\Bigl(\exists e\,\bigl(e \in I \wedge \neg\exists t\,(t \in e)\bigr) \wedge \forall y\,\bigl(y \in I \to \exists s\,(s \in I \wedge \forall t\,(t \in s \leftrightarrow (t \in y \vee t = y)))\bigr)\Bigr)$$

of the language of set theory ([[def-language-of-set-theory]]).

It is written here in $\in$ and $=$ alone, with no abbreviations, because the
notation it is usually stated in is introduced later on this page. Once that
notation is available, the sentence reads: there is a set $I$ with
$\varnothing \in I$ such that $y \in I$ implies $y \cup \{y\} \in I$. The first
conjunct is $\varnothing \in I$ written out, and the inner clause
$\forall t\,(t \in s \leftrightarrow (t \in y \vee t = y))$ says exactly that $s$
is $y \cup \{y\}$.

## Remarks

- **The only unconditional existence assertion on this page.** Extensionality
  and Foundation produce no sets at all, and every other axiom produces new sets
  from sets already given; this one asserts outright that a set $I$ with the two
  stated properties exists. Two results below say what its closure clause does:
  $y \cup \{y\}$ is never $y$, since $y$ is one of its elements while
  $y \notin y$ ([[thm-foundation-excludes-membership-cycles]]), and
  $y \mapsto y \cup \{y\}$ is injective
  ([[cor-the-successor-operation-is-injective]]).

- **Inductive sets and $\mathbb{N}$.** A set satisfying the two conjuncts above
  is what [[def-inductive-set]] calls **inductive**, and the natural numbers are
  built at [[def-natural-numbers]] as the smallest inductive set. Those items
  state the axiom in the abbreviated form; the sentence displayed above is the
  same assertion with the abbreviations expanded.
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

### `def-inductive-set`

````markdown
---
id: def-inductive-set
kind: definition
title: "Inductive set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-pairing, def-axiom-of-union, def-unordered-pair-and-singleton]
aliases: []
landmark: false
short: "$\\varnothing \\in I$, closed under $x \\mapsto x \\cup \\{x\\}$"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

Working in ZFC, for a set $x$ write $x^{+} := x \cup \{x\}$ for its **successor**
(a set, by the axioms of Pairing and Union, [[def-axiom-of-pairing]] and
[[def-axiom-of-union]]). A set $I$ is **inductive** when

$$\varnothing \in I \quad\text{and}\quad \bigl(x \in I \implies x^{+} \in I\bigr)\ \text{for every } x.$$

That is, $I$ contains the empty set and is closed under the successor operation.

## Remarks

The **Axiom of Infinity** ([[def-axiom-of-infinity]]) is precisely the assertion
that an inductive set exists. Inductive sets can be large and are far from unique (if $I$ is inductive
so is $I \cup \{\text{anything}\}$ once closed off), so an inductive set is not
yet a good definition of $\mathbb{N}$. The natural numbers are carved out as the
**smallest** inductive set, the intersection of all of them
([[lem-omega-smallest-inductive]], [[def-natural-numbers]]); minimality is what
delivers the induction principle.

Here $0 := \varnothing$ and the successor of $n$ is $\sigma(n) := n^{+} = n \cup \{n\}$,
so $1 = \{0\}$, $2 = \{0,1\}$, $3 = \{0,1,2\}$: each natural number is the set of
all smaller natural numbers.
````

