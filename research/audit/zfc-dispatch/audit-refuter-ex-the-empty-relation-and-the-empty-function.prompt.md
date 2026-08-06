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

## Target item — `ex-the-empty-relation-and-the-empty-function`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: ex-the-empty-relation-and-the-empty-function
kind: example
title: "$\\varnothing$ is a relation on every set, is the unique equivalence relation on $\\varnothing$, is a function $\\varnothing \\to B$ for every $B$, is a bijection $\\varnothing \\to \\varnothing$, and is not a surjection $\\varnothing \\to \\{\\varnothing\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-function, def-injection-surjection-bijection, def-equivalence-relation, def-properties-of-a-relation-on-a-set, thm-the-empty-set-exists-and-is-unique, def-unordered-pair-and-singleton, def-product-of-an-indexed-family, prop-products-over-small-index-sets, def-cartesian-product, prop-cartesian-products-and-set-operations, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "the empty relation and function"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercise 9"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Empty function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_function"
pipeline_run: null
---

## Example

The empty set does the work of five different objects at once.

- $\varnothing$ is a relation, and a relation on $A$ for every set $A$; its
  domain, range and field are all $\varnothing$.
- $\varnothing$ is the only relation on $\varnothing$, and it is an equivalence
  relation on $\varnothing$; so $\varnothing$ carries exactly one equivalence
  relation.
- $\varnothing$ is a function $\varnothing \to B$ for every set $B$, and it is
  the only one.
- $\varnothing$ is a bijection $\varnothing \to \varnothing$.
- $\varnothing$ is **not** a surjection $\varnothing \to \{\varnothing\}$, even
  though it is an injective function $\varnothing \to \{\varnothing\}$.

The last two together are the reason a codomain belongs to the declaration
$f : A \to B$ rather than to the set $f$: one and the same set is a bijection
under one declaration and a non-surjection under another. The empty function is
also the unique element of the empty product.

## Facts & Assumptions

**Given:** the set $\varnothing$ and arbitrary sets $A$ and $B$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L4] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L5] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L6] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L7] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L8] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L9] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L10] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L11] $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$ ([[prop-cartesian-products-and-set-operations]]).

[L12] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L13] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L14] if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$ ([[prop-products-over-small-index-sets]]).

[L15] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

## Verification

**Proof technique:** direct.

1.1 $\varnothing$ has no elements, so "every element is an ordered pair" holds vacuously and $\varnothing$ is a relation; $\varnothing \subseteq A \times A$ for every $A$, so it is a relation on every set; and no set satisfies the defining conditions for its domain or its range, so both are $\varnothing$, hence so is its field. [L1, L2, L9, L12]

1.2 A relation on $\varnothing$ is a subset of $\varnothing \times \varnothing$, which is $\varnothing$, so $\varnothing$ is the only one. It is reflexive on $\varnothing$, symmetric and transitive, since each condition quantifies over elements of $\varnothing$; hence it is the unique equivalence relation on $\varnothing$. [L7, L8, L9, L11, L12, L13]

2.1 $\varnothing$ is single valued vacuously, has domain $\varnothing$ and range $\varnothing \subseteq B$, so $\varnothing : \varnothing \to B$ for every $B$; and any function with domain $\varnothing$ has no elements, so it is $\varnothing$. [L3, L4, L9, L12, step 1.1]

3.1 As a function $\varnothing \to \varnothing$ it is injective, since the injectivity condition quantifies over elements of the domain, and surjective, since the surjectivity condition quantifies over elements of the codomain and $\varnothing$ has none; so it is a bijection. [L5, L6, L9, step 2.1]

3.2 As a function $\varnothing \to \{\varnothing\}$ it is still injective, for the same reason, but not surjective: $\varnothing$ is an element of $\{\varnothing\}$ and no element of the domain is sent to it. [L5, L6, L9, L10, step 2.1]

3.3 The empty function is the unique element of the empty product: $\prod_{i \in \varnothing} A_i = \{\varnothing\}$, and its one element is a function with domain $\varnothing$. [L14, L15, step 2.1]

4.1 All five descriptions hold of the single set $\varnothing$, and the last two differ only in the declared codomain. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3] ∎
````

## Declared dependencies of `ex-the-empty-relation-and-the-empty-function`

`deps:` ["def-relation-domain-range-and-field","def-function","def-injection-surjection-bijection","def-equivalence-relation","def-properties-of-a-relation-on-a-set","thm-the-empty-set-exists-and-is-unique","def-unordered-pair-and-singleton","def-product-of-an-indexed-family","prop-products-over-small-index-sets","def-cartesian-product","prop-cartesian-products-and-set-operations","def-subset-and-proper-subset"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `def-injection-surjection-bijection` — Injection, surjection, bijection

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function.

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$.

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These one-line verifications are used
  silently throughout the library.

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected.

- **What this item does and does not do.** Functions, ordered pairs, Cartesian
  products, images and preimages are ambient ZFC vocabulary in this library, on
  the same footing as "subset" and "union": a function $A \to B$ is a set of
  ordered pairs, single valued and total on $A$. This item only fixes the three
  adjectives and the notation used for them. Nothing here is proved, and nothing
  here is assumed beyond the set-theoretic background already in use.
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

### `def-product-of-an-indexed-family` — The product $\\prod_{i \\in I} A_i := \\{\\, f : I \\to \\bigcup_{i \\in I} A_i \\ \\mid\\ f(i) \\in A_i \\text{ for every } i \\in I \\,\\}$

````markdown
---
id: def-product-of-an-indexed-family
kind: definition
title: "The product $\\prod_{i \\in I} A_i := \\{\\, f : I \\to \\bigcup_{i \\in I} A_i \\ \\mid\\ f(i) \\in A_i \\text{ for every } i \\in I \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-product-of-an-indexed-family-is-a-set, def-indexed-family, def-indexed-union-and-intersection, def-function]
justified_by: []
forward_refs: []
aliases: [def-indexed-product]
landmark: true
short: "product of a family"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Definition

Let $(A_i)_{i \in I}$ be an indexed family ([[def-indexed-family]]) and write
$C := \bigcup_{i \in I} A_i$ ([[def-indexed-union-and-intersection]]). By
[[lem-the-product-of-an-indexed-family-is-a-set]] the following collection is a
set; it is the **product** of the family:

$$\prod_{i \in I} A_i \;:=\; \{\, f : I \to C \ \mid\ f(i) \in A_i \text{ for every } i \in I \,\}.$$

So an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes
its value at each index inside the member carried by that index; "function" is as
in [[def-function]].

## Remarks

- **Nonemptiness of the product is exactly the Axiom of Choice.** Nothing in
  this definition decides whether $\prod_{i \in I} A_i$ is nonempty when every
  $A_i$ is nonempty. That assertion, for an arbitrary index set, is one of the
  standard formulations of the Axiom of Choice, stated later on this page at
  [[def-axiom-of-choice]]. The product formulation recorded there, that
  $\prod_{i \in I} X_i$ is nonempty whenever every $X_i$ is nonempty, quantifies
  over exactly the object defined here: it is this definition that fixes what
  the symbol $\prod$ in that formulation denotes, and what its elements are.
  What *is* decided without any choice principle is the degenerate arithmetic:
  the empty index set and a family with an empty member, both in
  [[prop-products-over-small-index-sets]], together with the families whose
  product can be written down explicitly.

- **Why the ambient set is $C^{I}$.** The definition separates inside the set of
  all functions $I \to C$, so the ambient set must contain every function with
  domain $I$ whose value at $i$ lies in $A_i$. Taking $C$ to be the union of the
  members secures that, since such a value lies in $A_i$ and hence in $C$; and
  $C$ is the smallest set that includes every member of the family.
````

### `prop-products-over-small-index-sets` — $\\prod_{i \\in \\varnothing} A_i = \\{\\varnothing\\}$; if $A_j = \\varnothing$ for some $j \\in I$ then $\\prod_{i \\in I} A_i = \\varnothing$; and for $I = \\{j\\}$ the evaluation $f \\mapsto f(j)$ is a bijection $\\prod_{i \\in I} A_i \\to A_j$

````markdown
---
id: prop-products-over-small-index-sets
kind: proposition
title: "$\\prod_{i \\in \\varnothing} A_i = \\{\\varnothing\\}$; if $A_j = \\varnothing$ for some $j \\in I$ then $\\prod_{i \\in I} A_i = \\varnothing$; and for $I = \\{j\\}$ the evaluation $f \\mapsto f(j)$ is a bijection $\\prod_{i \\in I} A_i \\to A_j$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-of-an-indexed-family, def-function, def-injection-surjection-bijection, thm-the-empty-set-exists-and-is-unique, def-relation-domain-range-and-field, def-unordered-pair-and-singleton, def-axiom-schema-of-separation, def-cartesian-product, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-indexed-union-and-intersection, def-axiom-of-extensionality]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "products over small index sets"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 21 and Exercise 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family. Then

- (i) if $I = \varnothing$ then $\prod_{i \in I} A_i = \{\varnothing\}$;
- (ii) if $A_j = \varnothing$ for some $j \in I$ then $\prod_{i \in I} A_i = \varnothing$;
- (iii) if $I = \{j\}$ then the evaluation $e := \{\,(f,a) \in (\prod_{i \in I} A_i) \times A_j : a = f(j)\,\}$ is a bijection $\prod_{i \in I} A_i \to A_j$.

Clauses (i) and (ii) pull in opposite directions and are the two cases most often
mis-stated: an empty index set gives a product with one element, while a single
empty member collapses the product entirely.

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L6] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L9] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L10] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L11] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L12] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $I = \varnothing$. A function with domain $\varnothing$ has no elements, since each of its elements would be a pair whose first coordinate lies in its domain, so the only such function is $\varnothing$; and it satisfies the condition "$f(i) \in A_i$ for every $i \in I$" vacuously. Hence $\varnothing$ is the only element of the product, and the product is $\{\varnothing\}$. [L1, L2, L3, L7, L8, L12]

1.2 Claim (ii): let $j \in I$ with $A_j = \varnothing$. An element $f$ of the product would satisfy $f(j) \in A_j$, and $\varnothing$ has no elements; so the product has no elements. [L1, L7, L12]

1.3 Claim (iii), the map: let $I = \{j\}$ and write $P := \prod_{i \in I} A_i$. Each $f \in P$ has $f(j) \in A_j$, so $e$ as displayed is a set by separation inside $P \times A_j$, is single valued because $f(j)$ is, has domain $P$, and has range inside $A_j$; thus $e : P \to A_j$ with $e(f) = f(j)$. [L1, L2, L3, L9, L10]

2.1 Claim (iii), injectivity: if $e(f) = e(g)$ for $f, g \in P$, then $f$ and $g$ have the same domain $\{j\}$ and agree at $j$, hence are equal. [L4, L6, L8, step 1.3]

2.2 Claim (iii), surjectivity: let $a \in A_j$ and put $f := \{(j,a)\}$. This is a function with domain $\{j\}$ and $f(j) = a \in A_j$, and $a$ lies in $\bigcup_{i \in I} A_i$, so $f \in P$ and $e(f) = a$. [L1, L2, L3, L5, L8, L11, step 1.3]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **Where the general question is settled, and where it is not.** These three computations use no choice principle: in (i) and (ii) nothing is selected, and in (iii) the single value $f(j)$ is determined. None of them is an instance of the general question, because each names its elements outright. Whether a product of nonempty members over an arbitrary index set is nonempty is that general question, and it is exactly the product formulation of the Axiom of Choice, stated earlier on this page at [[def-axiom-of-choice]]; clause (ii) is the reason that formulation carries the hypothesis that every member is nonempty.
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

### `prop-cartesian-products-and-set-operations` — $A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)$, $A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)$, $A \\times (B \\setminus C) = (A \\times B) \\setminus (A \\times C)$, $(A \\cap B) \\times (C \\cap D) = (A \\times C) \\cap (B \\times D)$; $A \\times B = \\varnothing$ if and only if $A = \\varnothing$ or $B = \\varnothing$; and for nonempty $A$ and $B$, $A \\times B \\subseteq C \\times D$ if and only if $A \\subseteq C$ and $B \\subseteq D$

````markdown
---
id: prop-cartesian-products-and-set-operations
kind: proposition
title: "$A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)$, $A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)$, $A \\times (B \\setminus C) = (A \\times B) \\setminus (A \\times C)$, $(A \\cap B) \\times (C \\cap D) = (A \\times C) \\cap (B \\times D)$; $A \\times B = \\varnothing$ if and only if $A = \\varnothing$ or $B = \\varnothing$; and for nonempty $A$ and $B$, $A \\times B \\subseteq C \\times D$ if and only if $A \\subseteq C$ and $B \\subseteq D$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cartesian-product, thm-the-characterising-property-of-ordered-pairs, def-ordered-pair, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "products and set operations"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
pipeline_run: null
---

## Statement

For all sets $A$, $B$, $C$, $D$:

- (i) $A \times (B \cup C) = (A \times B) \cup (A \times C)$;
- (ii) $A \times (B \cap C) = (A \times B) \cap (A \times C)$;
- (iii) $A \times (B \setminus C) = (A \times B) \setminus (A \times C)$;
- (iv) $(A \cap B) \times (C \cap D) = (A \times C) \cap (B \times D)$;
- (v) $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$;
- (vi) if $A \neq \varnothing$ and $B \neq \varnothing$, then $A \times B \subseteq C \times D$ if and only if $A \subseteq C$ and $B \subseteq D$.

## Facts & Assumptions

**Given:** sets $A$, $B$, $C$, $D$.

[L1] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L2] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L9] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L10] $a \cup b := \bigcup\{a,b\}$, and $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L11] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

## Proof

**Proof technique:** direct.

1.1 Membership criterion: for all sets $a$ and $b$, $(a,b) \in A \times B$ holds if and only if $a \in A$ and $b \in B$. Indeed, an element of $A \times B$ is a pair $(a',b')$ with $a' \in A$ and $b' \in B$, and $(a,b) = (a',b')$ forces $a = a'$ and $b = b'$; the converse is immediate from the description of $A \times B$. Every element of a product is a pair, so it suffices in each identity below to compare pairs. [L1, L2, L9]

2.1 Claim (i): $(a,t) \in A \times (B \cup C)$ holds exactly when $a \in A$ and $t \in B$ or $t \in C$, that is, exactly when $(a,t) \in A \times B$ or $(a,t) \in A \times C$. [L3, L8, L10, step 1.1]

2.2 Claim (ii): $(a,t) \in A \times (B \cap C)$ holds exactly when $a \in A$, $t \in B$ and $t \in C$, that is, exactly when $(a,t) \in A \times B$ and $(a,t) \in A \times C$. [L4, L8, L11, step 1.1]

2.3 Claim (iii): $(a,t) \in A \times (B \setminus C)$ holds exactly when $a \in A$, $t \in B$ and $t \notin C$. On the other side, $(a,t) \in (A \times B) \setminus (A \times C)$ holds exactly when $a \in A$, $t \in B$, and it is not the case that $a \in A$ and $t \in C$; given $a \in A$, that last condition is $t \notin C$. [L5, L8, step 1.1]

2.4 Claim (iv): $(u,v) \in (A \cap B) \times (C \cap D)$ holds exactly when $u \in A$, $u \in B$, $v \in C$ and $v \in D$, that is, exactly when $(u,v) \in A \times C$ and $(u,v) \in B \times D$. [L4, L8, L11, step 1.1]

2.5 Claim (v): if $A = \varnothing$ or $B = \varnothing$ then no pair satisfies the membership criterion, so $A \times B$ has no elements and equals $\varnothing$; conversely if both are nonempty, fix $a \in A$ and $b \in B$, and then $(a,b) \in A \times B$. [L7, step 1.1]

2.6 Claim (vi): assume $A \neq \varnothing$ and $B \neq \varnothing$. If $A \times B \subseteq C \times D$, fix $b_{0} \in B$; for any $a \in A$ the pair $(a,b_{0})$ lies in $A \times B$, hence in $C \times D$, so $a \in C$, and $A \subseteq C$ follows; fixing $a_{0} \in A$ and running the same argument on the second coordinate gives $B \subseteq D$. Conversely, if $A \subseteq C$ and $B \subseteq D$, then any $(a,b) \in A \times B$ has $a \in C$ and $b \in D$, so it lies in $C \times D$. [L6, L7, step 1.1]

3.1 Claims (i) to (vi) are established, which is the statement. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6] ∎
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

