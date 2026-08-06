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

## Target item — `prop-images-and-preimages-under-a-relation-and-set-operations`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: prop-images-and-preimages-under-a-relation-and-set-operations
kind: proposition
title: "$R[A \\cup B] = R[A] \\cup R[B]$, $R[A \\cap B] \\subseteq R[A] \\cap R[B]$, $R[A] \\setminus R[B] \\subseteq R[A \\setminus B]$, $A \\subseteq B$ implies $R[A] \\subseteq R[B]$, and $(S \\circ R)[A] = S[R[A]]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-image-and-preimage-under-a-relation, def-inverse-relation-composition-and-restriction, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-subset-and-proper-subset, def-axiom-of-extensionality, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "images and set operations"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 7 and Lemma 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
pipeline_run: null
---

## Statement

Let $R$ and $S$ be relations and $A$, $B$ sets. Then

- (i) $R[A \cup B] = R[A] \cup R[B]$;
- (ii) $R[A \cap B] \subseteq R[A] \cap R[B]$;
- (iii) $R[A] \setminus R[B] \subseteq R[A \setminus B]$;
- (iv) if $A \subseteq B$ then $R[A] \subseteq R[B]$;
- (v) $(S \circ R)[A] = S[R[A]]$.

## Facts & Assumptions

**Given:** relations $R$ and $S$ and sets $A$, $B$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $c \in R[A \cup B]$ exactly when $(a,c) \in R$ for some $a$ with $a \in A$ or $a \in B$; that is exactly when $(a,c) \in R$ for some $a \in A$, or $(a,c) \in R$ for some $a \in B$, which is $c \in R[A] \cup R[B]$. [L1, L3, L7]

1.2 Claim (ii): if $c \in R[A \cap B]$ then $(a,c) \in R$ for some $a$ lying in both $A$ and $B$; that same $a$ witnesses $c \in R[A]$ and $c \in R[B]$. [L1, L4, L6]

1.3 Claim (iii): if $c \in R[A] \setminus R[B]$ then $(a,c) \in R$ for some $a \in A$, and no element of $B$ is related to $c$; in particular that $a$ is not in $B$, so $a \in A \setminus B$ and $c \in R[A \setminus B]$. [L1, L5, L6]

1.4 Claim (iv): if $A \subseteq B$ and $c \in R[A]$ then $(a,c) \in R$ for some $a \in A$, and that $a$ lies in $B$. [L1, L6]

1.5 Claim (v): $c \in (S \circ R)[A]$ exactly when $(a,c) \in S \circ R$ for some $a \in A$, that is, exactly when there are $a \in A$ and $b$ with $(a,b) \in R$ and $(b,c) \in S$; and that says exactly that $(b,c) \in S$ for some $b \in R[A]$, which is $c \in S[R[A]]$. [L1, L2, L7, L8]

2.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
````

## Declared dependencies of `prop-images-and-preimages-under-a-relation-and-set-operations`

`deps:` ["def-image-and-preimage-under-a-relation","def-inverse-relation-composition-and-restriction","lem-unions-and-intersections-of-small-families","def-set-difference-and-symmetric-difference","def-subset-and-proper-subset","def-axiom-of-extensionality","def-relation-domain-range-and-field"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `def-image-and-preimage-under-a-relation` — The image $R[A]$ and the preimage $R^{-1}[B]$ of a set under a relation

````markdown
---
id: def-image-and-preimage-under-a-relation
kind: definition
title: "The image $R[A]$ and the preimage $R^{-1}[B]$ of a set under a relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-axiom-schema-of-separation, def-inverse-relation-composition-and-restriction, def-ordered-pair]
justified_by: []
aliases: [def-image, def-preimage]
landmark: false
short: "image and preimage"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 7, Def. 8 and Lemma 2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Definition

Let $R$ be a relation ([[def-relation-domain-range-and-field]]) and let $A$ and
$B$ be sets. The **image of $A$ under $R$** and the **preimage of $B$ under $R$**
are

$$R[A] := \{\, b \in \operatorname{ran} R : \exists a\ (a \in A \wedge (a,b) \in R) \,\}, \qquad R^{-1}[B] := \{\, a \in \operatorname{dom} R : \exists b\ (b \in B \wedge (a,b) \in R) \,\},$$

sets by [[def-axiom-schema-of-separation]] applied inside $\operatorname{ran} R$
and $\operatorname{dom} R$ respectively. Thus $b \in R[A]$ holds if and only if
$(a,b) \in R$ for some $a \in A$, and $a \in R^{-1}[B]$ holds if and only if
$(a,b) \in R$ for some $b \in B$ ([[def-ordered-pair]]).

The notation is consistent: applying the first clause to the inverse relation
$R^{-1}$ of [[def-inverse-relation-composition-and-restriction]] gives
$R^{-1}[B] = \{\, a \in \operatorname{ran}(R^{-1}) : \exists b\ (b \in B \wedge (b,a) \in R^{-1}) \,\}$,
which has exactly the elements just described, since $(b,a) \in R^{-1}$ says
$(a,b) \in R$ and $\operatorname{ran}(R^{-1}) = \operatorname{dom} R$.

## Remarks

- **The bracket is not an application.** $R[A]$ is the set of things related to
  something in $A$; it is written with square brackets precisely so that it is
  never confused with a value $R(a)$, which for a general relation does not
  exist. Even for a function, $f[S]$ and $f(S)$ mean different things, and only
  the bracket form is used here.

- **Image and range.** Taking $A := \operatorname{dom} R$ gives
  $R[\operatorname{dom} R] = \operatorname{ran} R$, and taking $A := \varnothing$
  gives $R[\varnothing] = \varnothing$, since no $a$ lies in $\varnothing$.
````

### `def-inverse-relation-composition-and-restriction` — The inverse relation $R^{-1}$, the composite $S \\circ R$, and the restriction $R \\restriction A$

````markdown
---
id: def-inverse-relation-composition-and-restriction
kind: definition
title: "The inverse relation $R^{-1}$, the composite $S \\circ R$, and the restriction $R \\restriction A$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-inverse-relations-composites-and-restrictions-are-sets, def-relation-domain-range-and-field, def-ordered-pair]
justified_by: []
aliases: [def-inverse-relation, def-composition-of-relations, def-restriction]
landmark: false
short: "inverse, composite, restriction"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 9, Def. 12 and Def. 19"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Definition

Let $R$ and $S$ be relations ([[def-relation-domain-range-and-field]]) and let
$A$ be a set. By
[[lem-inverse-relations-composites-and-restrictions-are-sets]] the three
collections below are sets, and each is again a relation, since each of its
elements is an ordered pair ([[def-ordered-pair]]):

- the **inverse** $R^{-1} := \{\,(b,a) : (a,b) \in R\,\}$;
- the **composite** $S \circ R := \{\,(a,c) : \exists b\ ((a,b) \in R \wedge (b,c) \in S)\,\}$;
- the **restriction** $R \restriction A := \{\,(a,b) \in R : a \in A\,\}$.

Membership in each is exactly as written: $(b,a) \in R^{-1}$ holds if and only if
$(a,b) \in R$; $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and
$(b,c) \in S$ for some $b$; and $(a,b) \in R \restriction A$ holds if and only if
$(a,b) \in R$ and $a \in A$.

## Remarks

- **The order in $S \circ R$.** $S \circ R$ applies $R$ first and $S$ second.
  This is the convention that makes the composite of functions read
  $(g \circ f)(x) = g(f(x))$, and it is the one the rest of the library uses.
  The opposite convention exists in the literature and would reverse every
  composite written here.

- **Restriction cuts the domain, not the range.** $R \restriction A$ keeps the
  pairs of $R$ whose first coordinate lies in $A$ and discards the rest;
  $A$ need not be included in $\operatorname{dom} R$, and
  $\operatorname{dom}(R \restriction A) = \operatorname{dom} R \cap A$.
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

