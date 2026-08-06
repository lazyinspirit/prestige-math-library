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

## Target item — `lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product
kind: lemma
title: "For $I = \\{\\varnothing,\\{\\varnothing\\}\\}$ with $A_{\\varnothing} = A$ and $A_{\\{\\varnothing\\}} = B$, the map $f \\mapsto (f(\\varnothing), f(\\{\\varnothing\\}))$ is a bijection $\\prod_{i \\in I} A_i \\to A \\times B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-of-an-indexed-family, def-cartesian-product, def-injection-surjection-bijection, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-function, thm-the-characterising-property-of-ordered-pairs, def-indexed-family, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, def-axiom-schema-of-separation, def-indexed-union-and-intersection, lem-unions-and-intersections-of-small-families]
justified_by: []
aliases: []
landmark: false
short: "a two-factor product"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Exercise 12"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets, put $I := \{\varnothing,\{\varnothing\}\}$ and let
$(A_i)_{i \in I}$ be the family with $A_{\varnothing} = A$ and
$A_{\{\varnothing\}} = B$, that is, the function
$\{(\varnothing, A), (\{\varnothing\}, B)\}$. Write
$P := \prod_{i \in I} A_i$. Then

$$\Phi := \{\,(f,z) \in P \times (A \times B) : z = (f(\varnothing), f(\{\varnothing\}))\,\}$$

is a bijection $P \to A \times B$.

## Facts & Assumptions

**Given:** sets $A$ and $B$, the index set $I := \{\varnothing,\{\varnothing\}\}$, the family $(A_i)_{i \in I}$ above, and $P := \prod_{i \in I} A_i$.

[L1] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L2] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L6] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L7] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L10] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L12] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L13] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L14] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

## Proof

**Proof technique:** direct.

1.1 The index set has exactly the two elements $\varnothing$ and $\{\varnothing\}$, and they are distinct because the second has an element and the first has none; so $\{(\varnothing, A), (\{\varnothing\}, B)\}$ is single valued, has domain $I$, and is an indexed family with $A_{\varnothing} = A$ and $A_{\{\varnothing\}} = B$. [L7, L8, L9, L10, L11]

2.1 $\Phi$ is a function $P \to A \times B$: for $f \in P$ we have $f(\varnothing) \in A$ and $f(\{\varnothing\}) \in B$, so the pair $(f(\varnothing), f(\{\varnothing\}))$ lies in $A \times B$; separating inside $P \times (A \times B)$ gives $\Phi$, it is single valued because that pair is determined by $f$, its domain is $P$, and its range lies in $A \times B$. [L1, L2, L9, L11, L12, step 1.1]

3.1 $\Phi$ is injective: if $\Phi(f) = \Phi(g)$ then the characterising property gives $f(\varnothing) = g(\varnothing)$ and $f(\{\varnothing\}) = g(\{\varnothing\})$; $f$ and $g$ have the same domain $I$, whose elements are exactly those two, so $f = g$. [L3, L4, L6, L7, step 1.1, step 2.1]

3.2 $\Phi$ is surjective: given $(a,b) \in A \times B$, put $f := \{(\varnothing,a),(\{\varnothing\},b)\}$. It is single valued because $\varnothing \neq \{\varnothing\}$, its domain is $I$, and $f(\varnothing) = a \in A$ with $f(\{\varnothing\}) = b \in B$, so $f \in P$ by the union bound and $\Phi(f) = (a,b)$. [L1, L2, L5, L7, L9, L11, L13, L14, step 1.1, step 2.1]

4.1 $\Phi$ is a function $P \to A \times B$ that is injective and surjective, hence a bijection. [step 2.1, step 3.1, step 3.2] ∎
````

## Declared dependencies of `lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product`

`deps:` ["def-product-of-an-indexed-family","def-cartesian-product","def-injection-surjection-bijection","def-unordered-pair-and-singleton","thm-the-empty-set-exists-and-is-unique","def-function","thm-the-characterising-property-of-ordered-pairs","def-indexed-family","lem-two-functions-are-equal-exactly-when-they-agree-at-every-point","def-relation-domain-range-and-field","def-axiom-schema-of-separation","def-indexed-union-and-intersection","lem-unions-and-intersections-of-small-families"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

## Remarks

- **Existence is derived, not assumed.** Several presentations take "there is a set with no elements" as an axiom of its own. Here it is a theorem, because the nonemptiness of the domain of discourse is already a validity of first-order logic and Separation converts any set whatever into this one.
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

### `lem-two-functions-are-equal-exactly-when-they-agree-at-every-point` — Functions $f$ and $g$ are equal if and only if $\\operatorname{dom} f = \\operatorname{dom} g$ and $f(x) = g(x)$ for every $x$ in that common domain

````markdown
---
id: lem-two-functions-are-equal-exactly-when-they-agree-at-every-point
kind: lemma
title: "Functions $f$ and $g$ are equal if and only if $\\operatorname{dom} f = \\operatorname{dom} g$ and $f(x) = g(x)$ for every $x$ in that common domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: [lem-function-extensionality]
landmark: false
short: "equality of functions"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.10"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be functions. Then $f = g$ if and only if
$\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every
$x \in \operatorname{dom} f$.

## Facts & Assumptions

**Given:** functions $f$ and $g$.

[L1] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L5] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).
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
````

