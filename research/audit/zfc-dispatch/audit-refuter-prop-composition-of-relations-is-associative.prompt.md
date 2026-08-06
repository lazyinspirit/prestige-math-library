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

## Target item — `prop-composition-of-relations-is-associative`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: prop-composition-of-relations-is-associative
kind: proposition
title: "$T \\circ (S \\circ R) = (T \\circ S) \\circ R$, $(S \\circ R)^{-1} = R^{-1} \\circ S^{-1}$, $(R^{-1})^{-1} = R$, $\\operatorname{dom}(R^{-1}) = \\operatorname{ran} R$, and $\\Delta_B \\circ R = R = R \\circ \\Delta_A$ for a relation $R$ from $A$ to $B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-relation-composition-and-restriction, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-axiom-of-extensionality, lem-a-relation-is-included-in-the-product-of-its-domain-and-range]
justified_by: []
aliases: []
landmark: false
short: "composition laws for relations"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercises 7 and 8"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Statement

Let $R$, $S$, $T$ be relations and let $A$, $B$ be sets. Then

- (i) $T \circ (S \circ R) = (T \circ S) \circ R$;
- (ii) $(S \circ R)^{-1} = R^{-1} \circ S^{-1}$;
- (iii) $(R^{-1})^{-1} = R$;
- (iv) $\operatorname{dom}(R^{-1}) = \operatorname{ran} R$ and $\operatorname{ran}(R^{-1}) = \operatorname{dom} R$;
- (v) if $R$ is a relation from $A$ to $B$, then $\Delta_B \circ R = R$ and $R \circ \Delta_A = R$.

## Facts & Assumptions

**Given:** relations $R$, $S$, $T$ and sets $A$, $B$.

[L1] $(b,a) \in R^{-1}$ holds if and only if $(a,b) \in R$; $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L2] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L5] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L6] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L7] $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$ ([[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]]).

[L8] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): every element of either side is an ordered pair, and $(a,d)$ lies in $T \circ (S \circ R)$ exactly when there is $c$ with $(a,c) \in S \circ R$ and $(c,d) \in T$, that is, exactly when there are $b$ and $c$ with $(a,b) \in R$, $(b,c) \in S$ and $(c,d) \in T$. Reading the same condition with the middle pair grouped the other way gives membership in $(T \circ S) \circ R$. [L1, L2, L5, L6, L8]

1.2 Claim (ii): $(c,a) \in (S \circ R)^{-1}$ exactly when $(a,c) \in S \circ R$, that is, exactly when there is $b$ with $(a,b) \in R$ and $(b,c) \in S$; and that says exactly that $(c,b) \in S^{-1}$ and $(b,a) \in R^{-1}$ for some $b$, which is $(c,a) \in R^{-1} \circ S^{-1}$. [L1, L2, L5, L6, L8]

1.3 Claim (iii): every element of $R$ is an ordered pair $(a,b)$, and $(a,b) \in (R^{-1})^{-1}$ exactly when $(b,a) \in R^{-1}$, exactly when $(a,b) \in R$; both sides consist of ordered pairs, so they are equal. [L1, L2, L5, L6, L8]

1.4 Claim (iv): $a \in \operatorname{dom}(R^{-1})$ exactly when $(a,b) \in R^{-1}$ for some $b$, exactly when $(b,a) \in R$ for some $b$, exactly when $a \in \operatorname{ran} R$; the second identity is the same argument with the coordinates exchanged. [L1, L3, L6]

2.1 Claim (v): let $R$ be a relation from $A$ to $B$, so $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$. Then $(a,c) \in \Delta_B \circ R$ exactly when there is $b$ with $(a,b) \in R$ and $b = c \in B$, that is, exactly when $(a,c) \in R$ and $c \in B$; and $(a,c) \in R$ already forces $c \in \operatorname{ran} R \subseteq B$, so the two sets are equal. Symmetrically $(a,c) \in R \circ \Delta_A$ exactly when $a \in A$ and $(a,c) \in R$, and $(a,c) \in R$ forces $a \in \operatorname{dom} R \subseteq A$. [L1, L3, L4, L6, L7, step 1.4]

3.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
````

## Declared dependencies of `prop-composition-of-relations-is-associative`

`deps:` ["def-inverse-relation-composition-and-restriction","def-relation-domain-range-and-field","def-the-identity-and-membership-relations-on-a-set","def-ordered-pair","thm-the-characterising-property-of-ordered-pairs","def-axiom-of-extensionality","lem-a-relation-is-included-in-the-product-of-its-domain-and-range"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `def-ordered-pair` — The Kuratowski ordered pair $(a,b) := \\{\\{a\\},\\{a,b\\}\\}$

````markdown
---
id: def-ordered-pair
kind: definition
title: "The Kuratowski ordered pair $(a,b) := \\{\\{a\\},\\{a,b\\}\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unordered-pair-and-singleton, def-axiom-of-pairing]
justified_by: []
aliases: [def-kuratowski-pair]
landmark: true
short: "ordered pair"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.6"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

For sets $a$ and $b$, the **ordered pair** $(a,b)$ is the set

$$(a,b) := \{\{a\},\{a,b\}\},$$

formed from the unordered pairs and singletons of
[[def-unordered-pair-and-singleton]]; three applications of
[[def-axiom-of-pairing]] produce it. The first coordinate is $a$ and the second
is $b$.

When $a = b$ the two members coincide, since $\{a,b\} = \{a,a\} = \{a\}$, and the
pair degenerates to $(a,a) = \{\{a\}\}$.

## Remarks

- **Why this set and not another.** An ordered pair is required to satisfy one
  property, that $(a,b) = (c,d)$ exactly when $a = c$ and $b = d$; that is
  [[thm-the-characterising-property-of-ordered-pairs]], and it is the only thing
  any later construction uses. Other definitions with the same property exist,
  and nothing below distinguishes them from this one.

- **The degenerate case is where a careless proof fails.** An argument that
  treats $\{\{a\},\{a,b\}\}$ as a set with two distinct members breaks at
  $a = b$, and that case has to be handled separately in the proof of the
  characterising property.
````

### `thm-the-characterising-property-of-ordered-pairs` — $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$

````markdown
---
id: thm-the-characterising-property-of-ordered-pairs
kind: theorem
title: "$(a,b) = (c,d)$ if and only if $a = c$ and $b = d$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-pair, lem-unordered-pair-equality, def-unordered-pair-and-singleton]
justified_by: []
aliases: [thm-ordered-pair-property]
landmark: true
short: "characterising property of ordered pairs"
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Thm. 2.7"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

For all sets $a$, $b$, $c$, $d$: $(a,b) = (c,d)$ if and only if $a = c$ and
$b = d$.

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$, $d$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $\{a,b\} = \{c,d\} \ \leftrightarrow\ \bigl((a = c \wedge b = d) \vee (a = d \wedge b = c)\bigr)$ ([[lem-unordered-pair-equality]]).

## Proof

**Proof technique:** cases.

1.1 Right to left: if $a = c$ and $b = d$ then $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, so $\{\{a\},\{a,b\}\}$ and $\{\{c\},\{c,d\}\}$ are the same set, that is $(a,b) = (c,d)$. [L1, L2]

1.2 Left to right, setting up: assume $\{\{a\},\{a,b\}\} = \{\{c\},\{c,d\}\}$. Applying the equality criterion for unordered pairs to these two sets, either $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, or $\{a\} = \{c,d\}$ and $\{a,b\} = \{c\}$. [L1, L3]

2.1 In the first alternative, $\{a\} = \{c\}$ reads $\{a,a\} = \{c,c\}$ and gives $a = c$. Then $\{a,b\} = \{c,d\}$ gives $a = c$ and $b = d$, or $a = d$ and $b = c$; in the second of these $b = c = a = d$, so $b = d$ holds as well. Either way $a = c$ and $b = d$. [assume-case first, step 1.2, L2, L3]

2.2 In the second alternative, $\{a,b\} = \{c\}$ reads $\{a,b\} = \{c,c\}$ and gives $a = c$ and $b = c$, while $\{a\} = \{c,d\}$ reads $\{a,a\} = \{c,d\}$ and gives $a = c$ and $a = d$. Hence $a = c$ and $b = c = a = d$. [assume-case second, step 1.2, L2, L3]

3.1 The two alternatives supplied by step 1.2 are exhaustive, so the left-to-right implication holds. [step 2.1, step 2.2, cases-exhaustive]

4.1 Both implications hold, which is the statement. [step 1.1, step 3.1] ∎
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

### `lem-a-relation-is-included-in-the-product-of-its-domain-and-range` — Every relation $R$ satisfies $R \\subseteq \\operatorname{dom} R \\times \\operatorname{ran} R$, and $R$ is a relation from $A$ to $B$ if and only if $\\operatorname{dom} R \\subseteq A$ and $\\operatorname{ran} R \\subseteq B$

````markdown
---
id: lem-a-relation-is-included-in-the-product-of-its-domain-and-range
kind: lemma
title: "Every relation $R$ satisfies $R \\subseteq \\operatorname{dom} R \\times \\operatorname{ran} R$, and $R$ is a relation from $A$ to $B$ if and only if $\\operatorname{dom} R \\subseteq A$ and $\\operatorname{ran} R \\subseteq B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-subset-and-proper-subset, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
short: "a relation sits in dom times ran"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
pipeline_run: null
---

## Statement

Let $R$ be a relation and let $A$ and $B$ be sets. Then

- (i) $R \subseteq \operatorname{dom} R \times \operatorname{ran} R$;
- (ii) $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$.

## Facts & Assumptions

**Given:** a relation $R$ and sets $A$, $B$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $z \in R$. Since $R$ is a relation, $z = (a,b)$ for some sets $a$ and $b$; then $a \in \operatorname{dom} R$ and $b \in \operatorname{ran} R$ by the defining conditions, so $z \in \operatorname{dom} R \times \operatorname{ran} R$. [L1, L2, L3, L5]

1.2 Claim (ii), from left to right: assume $R \subseteq A \times B$. If $a \in \operatorname{dom} R$ then $(a,b) \in R$ for some $b$, so $(a,b) \in A \times B$, so $(a,b) = (a',b')$ with $a' \in A$ and $b' \in B$, and the characterising property gives $a = a' \in A$. The argument for $\operatorname{ran} R \subseteq B$ is the same on the second coordinate. [L2, L3, L4, L5]

1.3 Claim (ii), from right to left: assume $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$, and let $z \in R$. Then $z = (a,b)$ with $a \in \operatorname{dom} R \subseteq A$ and $b \in \operatorname{ran} R \subseteq B$, so $z \in A \times B$. [L1, L2, L3, L5]

2.1 Claims (i) and (ii) are established, which is the statement. [step 1.1, step 1.2, step 1.3] ∎
````

