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

## Target item — `fs-symmetry-and-transitivity-imply-reflexivity`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: fs-symmetry-and-transitivity-imply-reflexivity
kind: false-statement
title: "FALSE: a symmetric and transitive relation on a set $A$ is reflexive on $A$, so reflexivity is redundant in the definition of an equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-properties-of-a-relation-on-a-set, def-equivalence-relation, def-relation-domain-range-and-field, def-cartesian-product, def-ordered-pair, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: []
landmark: false
short: "reflexivity is redundant (false)"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** If a relation $R$ on a set $A$ is symmetric and transitive,
then it is reflexive on $A$; consequently the reflexivity clause in the
definition of an equivalence relation follows from the other two and could be
dropped.

## Facts & Assumptions

**Given:** the claim above.

[L1] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L2] $R$ is **symmetric** when $(a,b) \in R$ implies $(b,a) \in R$, for all $a, b \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L3] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L4] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L5] $R$ is a **relation on $A$** when $R \subseteq A \times A$ ([[def-relation-domain-range-and-field]]).

[L6] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L7] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L8] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L9] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Refutation

**Proof technique:** direct.

1.1 The argument that makes the claim look right: given $a \in A$, take any $b$ with $(a,b) \in R$; symmetry gives $(b,a) \in R$, and transitivity applied to $(a,b)$ and $(b,a)$ gives $(a,a) \in R$. [L1, L2, L3]

1.2 The witness: put $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$ and $R := \{(u,u)\}$. Here $u \neq v$, because $v$ has an element and $u$ has none. [L8, L9]

2.1 The gap in step 1.1 is the phrase "take any $b$ with $(a,b) \in R$": no hypothesis supplies such a $b$. Symmetry and transitivity are conditional on pairs that are already in $R$, so they constrain $R$ only at points that $R$ relates to something, and say nothing whatever about a point of $A$ that $R$ leaves untouched. [L2, L3, step 1.1]

2.2 $R$ is a relation on $A$: its only element is the ordered pair $(u,u)$, whose coordinates both lie in $A$. [L5, L6, L7, step 1.2]

2.3 $R$ is symmetric, since its only pair is its own reversal, and transitive, since the only composable pair of its members is $(u,u)$ with $(u,u)$, whose conclusion $(u,u) \in R$ holds. [L2, L3, step 1.2]

3.1 $R$ is not reflexive on $A$: $v$ is an element of $A$ and $(v,v) \notin R$, since the only element of $R$ is $(u,u)$ and $v \neq u$. [L1, L7, L8, step 1.2, step 2.2]

4.1 The claim is therefore false, and with it the conclusion drawn from it: the reflexivity clause in the definition of an equivalence relation is not redundant, since $R$ satisfies the other two clauses on $A$ and is not an equivalence relation on $A$. [L4, step 2.1, step 2.3, step 3.1] ∎
````

## Declared dependencies of `fs-symmetry-and-transitivity-imply-reflexivity`

`deps:` ["def-properties-of-a-relation-on-a-set","def-equivalence-relation","def-relation-domain-range-and-field","def-cartesian-product","def-ordered-pair","def-unordered-pair-and-singleton","thm-the-empty-set-exists-and-is-unique"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `def-properties-of-a-relation-on-a-set` — Reflexive, irreflexive, symmetric, asymmetric, antisymmetric, transitive, and connex relations on a set

````markdown
---
id: def-properties-of-a-relation-on-a-set
kind: definition
title: "Reflexive, irreflexive, symmetric, asymmetric, antisymmetric, transitive, and connex relations on a set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-the-identity-and-membership-relations-on-a-set, def-subset-and-proper-subset]
justified_by: []
forward_refs: []
aliases: [def-reflexive, def-symmetric, def-transitive, def-antisymmetric, def-connex]
landmark: true
short: "properties of a relation"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.1 and §3.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
pipeline_run: null
---

## Definition

Let $A$ be a set and let $R$ be a relation on $A$, that is
$R \subseteq A \times A$ ([[def-relation-domain-range-and-field]],
[[def-cartesian-product]]). Then $R$ is:

- **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$;
- **irreflexive** when $(a,a) \notin R$ for every $a \in A$;
- **symmetric** when $(a,b) \in R$ implies $(b,a) \in R$, for all $a, b \in A$;
- **asymmetric** when $(a,b) \in R$ implies $(b,a) \notin R$, for all $a, b \in A$;
- **antisymmetric** when $(a,b) \in R$ and $(b,a) \in R$ imply $a = b$, for all $a, b \in A$;
- **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$;
- **connex on $A$** when, for all $a, b \in A$, $(a,b) \in R$ or $(b,a) \in R$.

Reflexivity and irreflexivity have short forms in terms of the identity relation
$\Delta_A$ of [[def-the-identity-and-membership-relations-on-a-set]], because the
elements of $\Delta_A$ are exactly the pairs $(a,a)$ with $a \in A$: $R$ is
reflexive on $A$ if and only if $\Delta_A \subseteq R$
([[def-subset-and-proper-subset]]), and irreflexive if and only if $R$ and
$\Delta_A$ have no common element.

## Remarks

- **Reflexivity and connexity mention $A$; the others do not.** Whether $R$ is
  symmetric, asymmetric, antisymmetric or transitive depends on $R$ alone,
  whereas "reflexive on $A$" and "connex on $A$" depend on the ambient set: the
  empty relation is reflexive on $\varnothing$ and on no other set. The qualifier
  is therefore kept in the name of those two.

- **"Total" is ambiguous, "connex" is not.** The connex property above is also
  called *total* in much of the literature, but "total relation" is used
  elsewhere for the unrelated condition that every element of $A$ is related to
  something. Only "connex" is used here for the property defined above.

- **The named combinations, and the exact agreement with
  [[def-partial-order]].** That item names its structures in terms of a relation
  $\le$ on a set $P$, and each of its clauses is one of the properties above
  applied to $\le$, so the two vocabularies describe one set of conditions and
  not two:

  - a **partial order** on $P$ is a relation on $P$ satisfying its clauses (R),
    (A) and (T), which are reflexivity on $P$, antisymmetry and transitivity as
    defined above, quantified over the same set $P$;
  - the **strict order** $x < y :\Longleftrightarrow x \le y$ and $x \ne y$
    associated there with a partial order $\le$ is the relation
    $\le \setminus \Delta_P$ of the properties above, and it is irreflexive and
    transitive; that identification and the fact that nothing is lost in passing
    between the two presentations are proved in
    [[thm-reflexive-and-irreflexive-orders-correspond]], whose clause on
    asymmetry also reconciles the two usual definitions of a strict order;
  - two elements $x, y \in P$ are **comparable** there when $x \le y$ or
    $y \le x$, so a relation on $A$ is connex on $A$ exactly when every two
    elements of $A$ are comparable;
  - consequently what that item calls a **total order** — a partial order in
    which every two elements are comparable — is a relation on $P$ that is
    reflexive on $P$, antisymmetric, transitive and connex on $P$. "Connex"
    here and "total order" there are therefore the same condition read twice:
    connexity is the single extra clause that turns a partial order into a
    total one, and it is the connex reading of the word *total*, never the
    left-total one warned against above.

  Reflexive on $A$, symmetric and transitive is what
  [[def-equivalence-relation]] calls an equivalence relation.
````

### `def-equivalence-relation` — Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$

````markdown
---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers as a quotient)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$; we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is

- **reflexive**: $a \sim a$ for every $a \in A$;
- **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$;
- **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all
  $a, b, c \in A$.

Let $\sim$ be an equivalence relation on $A$. For $a \in A$, the **equivalence
class** of $a$ is the subset

$$[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A,$$

and any $b$ with $[b] = C$ is called a **representative** of the class $C$. The
**quotient set** is the set of all classes,

$$A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\},$$

a subset of the power set of $A$. The map $\pi : A \to A/{\sim}$ with
$\pi(a) = [a]$ is the **quotient map**; it is surjective by construction.

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. This is the obligation the
  library has already discharged case by case for the constructions of
  $\mathbb{Z}$ and $\mathbb{Q}$ ([[lem-int-add-well-defined]],
  [[lem-int-mul-well-defined]], [[lem-rat-ops-well-defined]]); it is stated here
  once, in general.

- **Why this item exists so late.** The library has used specific equivalence
  relations from the start: [[lem-int-equivalence]] proves that
  $(a,b) \sim (c,d) \iff a + d = b + c$ is one, and [[lem-rat-equivalence]] does
  the same for the relation defining $\mathbb{Q}$. Each of those items proves the
  three properties for one concrete relation and defines no general notion. The
  general notion is introduced here because the algebra track needs it uniformly:
  cosets, quotient groups, congruence classes and quotient rings are all
  instances, and each would otherwise re-prove the same three lines.
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

### `def-unordered-pair-and-singleton` — The unordered pair $\\{x,y\\}$ and the singleton $\\{x\\} = \\{x,x\\}$

````markdown
---
id: def-unordered-pair-and-singleton
kind: definition
title: "The unordered pair $\\{x,y\\}$ and the singleton $\\{x\\} = \\{x,x\\}$"
status: draft
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

### `thm-the-empty-set-exists-and-is-unique` — There is exactly one set with no elements, written $\\varnothing$

````markdown
---
id: thm-the-empty-set-exists-and-is-unique
kind: theorem
title: "There is exactly one set with no elements, written $\\varnothing$"
status: draft
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

