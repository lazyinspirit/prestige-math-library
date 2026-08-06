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

## Target item — `cor-distributive-and-de-morgan-laws-for-indexed-families`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: cor-distributive-and-de-morgan-laws-for-indexed-families
kind: corollary
title: "For a nonempty index set $I$: $B \\cap \\bigcup_{i \\in I} A_i = \\bigcup_{i \\in I} (B \\cap A_i)$, $B \\cup \\bigcap_{i \\in I} A_i = \\bigcap_{i \\in I} (B \\cup A_i)$, $X \\setminus \\bigcup_{i \\in I} A_i = \\bigcap_{i \\in I} (X \\setminus A_i)$, and $X \\setminus \\bigcap_{i \\in I} A_i = \\bigcup_{i \\in I} (X \\setminus A_i)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-indexed-union-and-intersection, thm-de-morgan-laws, thm-distributive-laws-for-union-and-intersection, def-indexed-family, def-set-difference-and-symmetric-difference, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-power-set, def-axiom-schema-of-separation, def-cartesian-product, def-function]
justified_by: []
aliases: []
landmark: false
short: "indexed distributive and De Morgan laws"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "De Morgan's laws (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/De_Morgan%27s_laws"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family with $I \neq \varnothing$ and let $B$
and $X$ be sets. Then $(B \cap A_i)_{i \in I}$, $(B \cup A_i)_{i \in I}$ and
$(X \setminus A_i)_{i \in I}$ are indexed families with index set $I$, and

$$B \cap \bigcup_{i \in I} A_i = \bigcup_{i \in I} (B \cap A_i), \qquad B \cup \bigcap_{i \in I} A_i = \bigcap_{i \in I} (B \cup A_i),$$

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i).$$

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$ with $I \neq \varnothing$, and sets $B$ and $X$.

[L1] $\bigcup_{i \in I} A_i \;:=\; \bigcup \{A_i : i \in I\}$ ([[def-indexed-union-and-intersection]]).

[L2] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L3] $\{A_i : i \in I\} \;:=\; \operatorname{ran} A$ ([[def-indexed-family]]).

[L4] $a \cap \bigcup F = \bigcup \{\, a \cap b : b \in F \,\}, \qquad a \cup \bigcap F = \bigcap \{\, a \cup b : b \in F \,\}$ for a set $F$ with $F \neq \varnothing$ ([[thm-distributive-laws-for-union-and-intersection]]).

[L5] $X \setminus \bigcup F = \bigcap \{\, X \setminus a : a \in F \,\}, \qquad X \setminus \bigcap F = \bigcup \{\, X \setminus a : a \in F \,\}$ for a set $F$ with $F \neq \varnothing$ ([[thm-de-morgan-laws]]).

[L6] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L9] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L12] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

## Proof

**Proof technique:** direct.

1.1 The three derived families exist. Each $B \cap A_i$ is a subset of $B$, so separating inside $I \times \mathcal{P}(B)$ with the formula $\exists i\,\exists w\,(z = (i,w) \wedge i \in I \wedge w = B \cap A_i)$ gives a set; it is a function, since the value at each $i$ is determined, and its domain is $I$. The same construction inside $I \times \mathcal{P}(B \cup \bigcup_{i \in I} A_i)$ and inside $I \times \mathcal{P}(X)$ gives $(B \cup A_i)_{i \in I}$ and $(X \setminus A_i)_{i \in I}$. [L2, L9, L10, L11, L12]

2.1 Write $F := \{A_i : i \in I\}$, which is $\operatorname{ran} A$ and is nonempty because $I$ is. The range of $(B \cap A_i)_{i \in I}$ is exactly $\{\, B \cap b : b \in F \,\}$, since the values of the derived family are the sets $B \cap A_i$ with $i \in I$ and the elements of $F$ are exactly the $A_i$ with $i \in I$; the same holds for the other two derived families. [L2, L3, L8, step 1.1]

3.1 Substituting into the family laws for $F$ therefore gives all four identities: the indexed operations are by definition the primitive $\bigcup$ and $\bigcap$ applied to the range of the family concerned, and step 2.1 identifies those ranges with the sets appearing in the laws. [L1, L4, L5, L6, L7, step 2.1]

4.1 The derived families exist and the four identities hold, which is the statement. [step 1.1, step 2.1, step 3.1] ∎
````

## Declared dependencies of `cor-distributive-and-de-morgan-laws-for-indexed-families`

`deps:` ["def-indexed-union-and-intersection","thm-de-morgan-laws","thm-distributive-laws-for-union-and-intersection","def-indexed-family","def-set-difference-and-symmetric-difference","def-axiom-of-extensionality","def-relation-domain-range-and-field","def-power-set","def-axiom-schema-of-separation","def-cartesian-product","def-function"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `thm-de-morgan-laws` — $X \\setminus (a \\cup b) = (X \\setminus a) \\cap (X \\setminus b)$ and $X \\setminus (a \\cap b) = (X \\setminus a) \\cup (X \\setminus b)$; and for a nonempty set $F$, $X \\setminus \\bigcup F = \\bigcap \\{\\, X \\setminus a : a \\in F \\,\\}$ and $X \\setminus \\bigcap F = \\bigcup \\{\\, X \\setminus a : a \\in F \\,\\}$

````markdown
---
id: thm-de-morgan-laws
kind: theorem
title: "$X \\setminus (a \\cup b) = (X \\setminus a) \\cap (X \\setminus b)$ and $X \\setminus (a \\cap b) = (X \\setminus a) \\cup (X \\setminus b)$; and for a nonempty set $F$, $X \\setminus \\bigcup F = \\bigcap \\{\\, X \\setminus a : a \\in F \\,\\}$ and $X \\setminus \\bigcap F = \\bigcup \\{\\, X \\setminus a : a \\in F \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-difference-and-symmetric-difference, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-power-set, def-subset-and-proper-subset, def-axiom-schema-of-separation, def-axiom-of-extensionality]
justified_by: []
aliases: [thm-de-morgan]
landmark: false
short: "De Morgan laws"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "De Morgan's laws (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/De_Morgan%27s_laws"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

For all sets $X$, $a$ and $b$,

$$X \setminus (a \cup b) = (X \setminus a) \cap (X \setminus b), \qquad X \setminus (a \cap b) = (X \setminus a) \cup (X \setminus b).$$

Let $F$ be a set with $F \neq \varnothing$. Then
$\{\, X \setminus a : a \in F \,\}$ is a nonempty set and

$$X \setminus \bigcup F = \bigcap \{\, X \setminus a : a \in F \,\}, \qquad X \setminus \bigcap F = \bigcup \{\, X \setminus a : a \in F \,\}.$$

## Facts & Assumptions

**Given:** sets $X$, $a$, $b$, and a set $F$ with $F \neq \varnothing$ where the family forms are concerned.

[L1] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L2] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L3] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L5] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L6] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L7] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L8] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L9] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Every $X \setminus a$ is a subset of $X$, so the class $\{\, X \setminus a : a \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(X) : \exists a\,(a \in F \wedge w = X \setminus a) \,\}$, hence a set; and it has a member because $F$ does. [L1, L6, L7, L8]

1.2 $z \in X \setminus (a \cup b)$ holds exactly when $z \in X$ and neither $z \in a$ nor $z \in b$, that is, exactly when $z \in X$ and $z \notin a$, and $z \in X$ and $z \notin b$; this is $z \in (X \setminus a) \cap (X \setminus b)$. [L1, L2, L3, L9]

1.3 $z \in X \setminus (a \cap b)$ holds exactly when $z \in X$ and not both $z \in a$ and $z \in b$, that is, exactly when $z \in X$ and $z \notin a$, or $z \in X$ and $z \notin b$; this is $z \in (X \setminus a) \cup (X \setminus b)$. [L1, L2, L3, L9]

2.1 $z \in X \setminus \bigcup F$ holds exactly when $z \in X$ and no member $s$ of $F$ has $z \in s$, that is, exactly when $z \in X \setminus a$ for every $a \in F$; the sets $X \setminus a$ with $a \in F$ are precisely the elements of $\{\, X \setminus a : a \in F \,\}$, which is nonempty, so this is $z \in \bigcap \{\, X \setminus a : a \in F \,\}$. [L1, L4, L5, L9, step 1.1]

2.2 $z \in X \setminus \bigcap F$ holds exactly when $z \in X$ and $z$ fails to lie in some member $a$ of $F$, that is, exactly when $z \in X \setminus a$ for some $a \in F$; this is $z \in \bigcup \{\, X \setminus a : a \in F \,\}$. [L1, L4, L5, L9, step 1.1]

3.1 The two finite laws and the two family laws are established, which is the statement. [step 1.2, step 1.3, step 2.1, step 2.2] ∎
````

### `thm-distributive-laws-for-union-and-intersection` — $a \\cap (b \\cup c) = (a \\cap b) \\cup (a \\cap c)$ and $a \\cup (b \\cap c) = (a \\cup b) \\cap (a \\cup c)$; and for a nonempty set $F$, $a \\cap \\bigcup F = \\bigcup \\{\\, a \\cap b : b \\in F \\,\\}$ and $a \\cup \\bigcap F = \\bigcap \\{\\, a \\cup b : b \\in F \\,\\}$

````markdown
---
id: thm-distributive-laws-for-union-and-intersection
kind: theorem
title: "$a \\cap (b \\cup c) = (a \\cap b) \\cup (a \\cap c)$ and $a \\cup (b \\cap c) = (a \\cup b) \\cap (a \\cup c)$; and for a nonempty set $F$, $a \\cap \\bigcup F = \\bigcup \\{\\, a \\cap b : b \\in F \\,\\}$ and $a \\cup \\bigcap F = \\bigcap \\{\\, a \\cup b : b \\in F \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-power-set, def-subset-and-proper-subset, def-axiom-schema-of-separation, def-axiom-of-extensionality]
justified_by: []
aliases: [thm-distributive-laws-for-sets]
landmark: false
short: "distributive laws"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
pipeline_run: null
---

## Statement

For all sets $a$, $b$ and $c$,

$$a \cap (b \cup c) = (a \cap b) \cup (a \cap c), \qquad a \cup (b \cap c) = (a \cup b) \cap (a \cup c).$$

Let $F$ be a set with $F \neq \varnothing$. Then
$\{\, a \cap b : b \in F \,\}$ and $\{\, a \cup b : b \in F \,\}$ are nonempty
sets, and

$$a \cap \bigcup F = \bigcup \{\, a \cap b : b \in F \,\}, \qquad a \cup \bigcap F = \bigcap \{\, a \cup b : b \in F \,\}.$$

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$ and a set $F$ with $F \neq \varnothing$ where the family forms are concerned.

[L1] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L2] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L3] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L4] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L5] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L6] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L7] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L8] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Every $a \cap b$ is a subset of $a$, so the class $\{\, a \cap b : b \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(a) : \exists b\,(b \in F \wedge w = a \cap b) \,\}$, hence a set; and it has a member because $F$ does. [L2, L5, L6, L7]

1.2 Every $a \cup b$ with $b \in F$ is a subset of $a \cup \bigcup F$, since an element of $b$ lies in $\bigcup F$; so $\{\, a \cup b : b \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(a \cup \bigcup F) : \exists b\,(b \in F \wedge w = a \cup b) \,\}$, hence a set, and it has a member because $F$ does. [L1, L3, L5, L6, L7]

1.3 $z \in a \cap (b \cup c)$ holds exactly when $z \in a$, and $z \in b$ or $z \in c$; that is exactly when $z \in a$ and $z \in b$, or $z \in a$ and $z \in c$, which is $z \in (a \cap b) \cup (a \cap c)$. [L1, L2, L8]

1.4 $z \in a \cup (b \cap c)$ holds exactly when $z \in a$, or $z \in b$ and $z \in c$; that is exactly when $z \in a$ or $z \in b$, and $z \in a$ or $z \in c$, which is $z \in (a \cup b) \cap (a \cup c)$. [L1, L2, L8]

2.1 $z \in a \cap \bigcup F$ holds exactly when $z \in a$ and $z \in s$ for some $s \in F$, that is, exactly when $z \in a \cap s$ for some $s \in F$; the sets $a \cap s$ with $s \in F$ are precisely the elements of $\{\, a \cap b : b \in F \,\}$, so this holds exactly when $z$ lies in some element of that set, which is $z \in \bigcup \{\, a \cap b : b \in F \,\}$. [L2, L3, L8, step 1.1]

2.2 $z \in \bigcap \{\, a \cup b : b \in F \,\}$ holds exactly when, for every $b \in F$, $z \in a$ or $z \in b$. If $z \in a \cup \bigcap F$ then either $z \in a$, and the condition holds outright, or $z$ lies in every element of $F$, and it holds again. Conversely, if the condition holds and $z \notin a$, then $z \in b$ for every $b \in F$, so $z \in \bigcap F$; hence $z \in a \cup \bigcap F$ in both cases. [L1, L4, L8, step 1.2]

3.1 The two finite laws and the two family laws are established, which is the statement. [step 1.3, step 1.4, step 2.1, step 2.2] ∎
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

### `def-set-difference-and-symmetric-difference` — The difference $a \\setminus b$, the symmetric difference $a \\triangle b$, and the complement $X \\setminus a$ relative to a set $X$

````markdown
---
id: def-set-difference-and-symmetric-difference
kind: definition
title: "The difference $a \\setminus b$, the symmetric difference $a \\triangle b$, and the complement $X \\setminus a$ relative to a set $X$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-schema-of-separation, def-union-of-a-set-and-binary-union, def-axiom-of-extensionality, def-subset-and-proper-subset]
justified_by: []
aliases: [def-set-difference, def-symmetric-difference, def-relative-complement]
landmark: false
short: "difference, symmetric difference"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 4 and Def. 5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Complement (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complement_(set_theory)"
    - title: "Symmetric difference (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Symmetric_difference"
pipeline_run: null
---

## Definition

Let $a$ and $b$ be sets. The **difference** of $a$ and $b$ is

$$a \setminus b := \{\, z \in a : z \notin b \,\},$$

a set by [[def-axiom-schema-of-separation]] and the only one with those elements
by [[def-axiom-of-extensionality]]; so $z \in a \setminus b$ holds exactly when
$z \in a$ and $z \notin b$. The **symmetric difference** is

$$a \triangle b := (a \setminus b) \cup (b \setminus a),$$

formed with the binary union of [[def-union-of-a-set-and-binary-union]].

When $a \subseteq X$ ([[def-subset-and-proper-subset]]), the difference
$X \setminus a$ is called the **complement of $a$ relative to $X$**. The
qualification is not optional: there is no set of all sets
([[cor-there-is-no-set-of-all-sets]]), so an absolute complement, the class of
all sets not in $a$, is never a set.

## Remarks

- **Difference needs no hypothesis.** $a \setminus b$ is defined for all sets
  $a$ and $b$, with no assumption that $b \subseteq a$ or that the two meet.
  When they are disjoint, $a \setminus b = a$.

- **Symmetric difference collects what lies in exactly one of the two sets.**
  Unfolding the definition, $z \in a \triangle b$ holds exactly when $z$ belongs
  to $a$ or to $b$ but not to both.
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

