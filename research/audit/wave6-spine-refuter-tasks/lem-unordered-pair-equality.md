## High-blast-radius target — `lem-unordered-pair-equality`

This proof has 1 direct and 2589 transitive consumers.
Normalized current SHA-256: `0fb473110c473761a7476918520f5ce2a7d7562c48c50015678bc84aa4376faf`

The complete current target follows, including frontmatter:

````markdown
---
id: lem-unordered-pair-equality
kind: lemma
title: "$\\{a,b\\} = \\{c,d\\}$ if and only if ($a = c$ and $b = d$) or ($a = d$ and $b = c$); in particular $\\{a\\} = \\{c,d\\}$ if and only if $a = c = d$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-unordered-pair-and-singleton, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "equality of unordered pairs"
proof_strategy: cases
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2 and Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of pairing (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_pairing"
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
pipeline_run: null
---

## Statement

For all sets $a$, $b$, $c$, $d$:

$$\{a,b\} = \{c,d\} \ \leftrightarrow\ \bigl((a = c \wedge b = d) \vee (a = d \wedge b = c)\bigr).$$

In particular, taking $b := a$, $\{a\} = \{c,d\}$ if and only if $a = c$ and
$a = d$.

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$, $d$.

[L1] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** cases.

1.1 Right to left: if $a = c$ and $b = d$, or $a = d$ and $b = c$, then for every $t$ the conditions "$t = a$ or $t = b$" and "$t = c$ or $t = d$" are the same, so the two pairs have the same elements and are equal. [L1, L2]

1.2 Left to right, setting up: assume $\{a,b\} = \{c,d\}$. Since $a$ and $b$ are elements of the left-hand set they are elements of the right-hand one, so $a$ is $c$ or $d$ and $b$ is $c$ or $d$; likewise $c$ is $a$ or $b$ and $d$ is $a$ or $b$. [L1]

2.1 Suppose $a = b$. Then $c$ is $a$ or $b$, so $c = a$; and $d$ is $a$ or $b$, so $d = a$. Hence $a = c$ and $b = a = d$, the first disjunct. [assume-case same, step 1.2]

2.2 Suppose instead $a \neq b$. If $a = c$, then $b$ is $c$ or $d$, and $b = c = a$ is excluded, so $b = d$ and the first disjunct holds. Otherwise $a = d$; then $c$ is $a$ or $b$, and $c = a$ would give $c = a = d$, whence $b$, being $c$ or $d$, equals $a$, contradicting $a \neq b$; so $c = b$ and the second disjunct holds. [assume-case diff, step 1.2]

3.1 The alternatives $a = b$ and $a \neq b$ exhaust the possibilities, so the left-to-right implication holds. [step 2.1, step 2.2, cases-exhaustive]

4.1 Both implications hold, which is the biconditional; putting $b := a$ makes the two disjuncts read "$a = c$ and $a = d$" and "$a = d$ and $a = c$", so $\{a\} = \{c,d\}$ if and only if $a = c$ and $a = d$. [step 1.1, step 3.1, L1] ∎
````

## Full text of every cited or declared item (2)

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

### `def-unordered-pair-and-singleton`

````markdown
---
id: def-unordered-pair-and-singleton
kind: definition
title: "The unordered pair $\\{x,y\\}$ and the singleton $\\{x\\} = \\{x,x\\}$"
status: published
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

