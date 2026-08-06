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

## Target item — `thm-de-morgan-laws`

This is the item you must refute. Its full file follows, frontmatter included.

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

## Declared dependencies of `thm-de-morgan-laws`

`deps:` ["def-set-difference-and-symmetric-difference","def-union-of-a-set-and-binary-union","def-intersection-of-a-set-and-binary-intersection","lem-unions-and-intersections-of-small-families","def-power-set","def-subset-and-proper-subset","def-axiom-schema-of-separation","def-axiom-of-extensionality"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `def-intersection-of-a-set-and-binary-intersection` — The intersection $\\bigcap x$ of a nonempty set, the binary intersection $a \\cap b := \\bigcap\\{a,b\\}$, and disjointness

````markdown
---
id: def-intersection-of-a-set-and-binary-intersection
kind: definition
title: "The intersection $\\bigcap x$ of a nonempty set, the binary intersection $a \\cap b := \\bigcap\\{a,b\\}$, and disjointness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-intersection-of-a-nonempty-set-is-a-set, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [def-intersection, def-disjoint]
landmark: false
short: "intersection, disjointness"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ be a set with $x \neq \varnothing$.
[[lem-the-intersection-of-a-nonempty-set-is-a-set]] shows that the sets belonging
to every member of $x$ form a set, and that it does not depend on the member of
$x$ used to build it; it is written $\bigcap x$. Thus for $x \neq \varnothing$,
$\bigcap x$ is the set whose elements are exactly the sets belonging to every
element of $x$, and $a \cap b := \bigcap\{a,b\}$ is the **binary intersection**
of $a$ and $b$:

$$z \in \bigcap x \leftrightarrow \forall s\,(s \in x \to z \in s) \quad (x \neq \varnothing).$$

The binary case is legitimate because $a \in \{a,b\}$, so the unordered pair of
[[def-unordered-pair-and-singleton]] is never empty. Two sets $a$ and $b$ are
**disjoint** when $a \cap b = \varnothing$
([[thm-the-empty-set-exists-and-is-unique]]).

## Remarks

- **The hypothesis $x \neq \varnothing$ is not a convenience.** For
  $x = \varnothing$ the condition "$z$ belongs to every member of $x$" is
  satisfied by every set whatever, and no set has every set as an element:
  [[cor-the-empty-family-has-no-intersection]] proves this. So
  $\bigcap \varnothing$ is left undefined, and every statement below
  about $\bigcap$ of a family carries the nonemptiness hypothesis in its own
  statement.

- **Membership criterion for the binary case.** That $z \in a \cap b$ holds
  exactly when $z \in a$ and $z \in b$ is proved at
  [[lem-unions-and-intersections-of-small-families]], not assumed here.
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

