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

## Target item — `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity
kind: corollary
title: "For $f : A \\to B$: $S \\subseteq f^{-1}[f[S]]$ for every $S \\subseteq A$, with equality for every such $S$ if and only if $f$ is injective; and $f[f^{-1}[T]] = T \\cap f[A]$ for every $T \\subseteq B$, so equality with $T$ holds for every such $T$ if and only if $f$ is surjective"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-image-and-preimage-under-a-relation, def-function, def-unordered-pair-and-singleton, lem-unions-and-intersections-of-small-families, def-subset-and-proper-subset, def-axiom-of-extensionality, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "round trips detect injectivity and surjectivity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$. Then

- (i) $S \subseteq f^{-1}[f[S]]$ for every $S \subseteq A$;
- (ii) equality holds in (i) for every $S \subseteq A$ if and only if $f$ is injective;
- (iii) $f[f^{-1}[T]] = T \cap f[A]$ for every $T \subseteq B$;
- (iv) $f[f^{-1}[T]] = T$ for every $T \subseteq B$ if and only if $f$ is surjective.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L4] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals $B$ ([[def-injection-surjection-bijection]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L9] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Membership criteria used throughout: for $S \subseteq A$, $y \in f[S]$ exactly when $y = f(s)$ for some $s \in S$; and for $T \subseteq B$, $a \in f^{-1}[T]$ exactly when $a \in A$ and $f(a) \in T$. [L1, L2, L6, L9]

2.1 Claim (i): if $s \in S$ then $f(s) \in f[S]$, so $s \in f^{-1}[f[S]]$. [step 1.1]

2.2 Claim (iii): if $y \in f[f^{-1}[T]]$ then $y = f(a)$ with $a \in A$ and $f(a) \in T$, so $y \in T$ and $y \in f[A]$; conversely if $y \in T$ and $y = f(a)$ with $a \in A$, then $f(a) \in T$ puts $a$ in $f^{-1}[T]$ and $y$ in $f[f^{-1}[T]]$. [L5, L7, step 1.1]

3.1 Claim (ii): suppose $f$ is injective and $a \in f^{-1}[f[S]]$ for some $S \subseteq A$. Then $f(a) \in f[S]$, so $f(a) = f(s)$ for some $s \in S$, and injectivity gives $a = s \in S$; with step 2.1 this is equality. Conversely, if $f$ is not injective, take $a \neq a'$ in $A$ with $f(a) = f(a')$ and put $S := \{a\}$; then $a' \in f^{-1}[f[S]]$ while $a' \notin S$, so equality fails for that $S$. [L3, L8, step 1.1, step 2.1]

3.2 Claim (iv): if $f$ is surjective then $f[A] = B$, so for $T \subseteq B$ claim (iii) gives $f[f^{-1}[T]] = T \cap B = T$. Conversely, if the equality holds for every $T \subseteq B$, take $T := B$; claim (iii) gives $B = B \cap f[A] = f[A]$, which is surjectivity. [L4, L5, L6, L7, step 2.2]

4.1 Claims (i) to (iv) are established, which is the statement. [step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Only one of the two criteria needs the injectivity lemma.** Claim (ii) is the round-trip form of the equality criterion in [[prop-images-of-unions-and-intersections-under-a-function]]; the argument is repeated here because the witness used to break equality is a singleton rather than a pair of sets.
````

## Declared dependencies of `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity`

`deps:` ["def-injection-surjection-bijection","def-image-and-preimage-under-a-relation","def-function","def-unordered-pair-and-singleton","lem-unions-and-intersections-of-small-families","def-subset-and-proper-subset","def-axiom-of-extensionality","def-relation-domain-range-and-field"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

### `prop-images-of-unions-and-intersections-under-a-function` — For $f : A \\to B$ and $S, T \\subseteq A$: $f[S \\cup T] = f[S] \\cup f[T]$, $f[S \\cap T] \\subseteq f[S] \\cap f[T]$ and $f[S] \\setminus f[T] \\subseteq f[S \\setminus T]$; both inclusions are equalities for all $S$ and $T$ if and only if $f$ is injective

````markdown
---
id: prop-images-of-unions-and-intersections-under-a-function
kind: proposition
title: "For $f : A \\to B$ and $S, T \\subseteq A$: $f[S \\cup T] = f[S] \\cup f[T]$, $f[S \\cap T] \\subseteq f[S] \\cap f[T]$ and $f[S] \\setminus f[T] \\subseteq f[S \\setminus T]$; both inclusions are equalities for all $S$ and $T$ if and only if $f$ is injective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-image-and-preimage-under-a-relation, def-injection-surjection-bijection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-axiom-of-extensionality, def-unordered-pair-and-singleton, def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique]
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
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$ and let $S, T \subseteq A$. Then

- (i) $f[S \cup T] = f[S] \cup f[T]$;
- (ii) $f[S \cap T] \subseteq f[S] \cap f[T]$;
- (iii) $f[S] \setminus f[T] \subseteq f[S \setminus T]$.

Moreover the inclusions in (ii) and (iii) are equalities for all
$S, T \subseteq A$ if and only if $f$ is injective.

## Facts & Assumptions

**Given:** a function $f : A \to B$ and subsets $S, T$ of $A$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L4] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L9] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L10] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Membership criterion: for $S \subseteq A$, $y \in f[S]$ holds exactly when $y = f(s)$ for some $s \in S$, since $(s,y) \in f$ with $s \in S \subseteq A$ says $y = f(s)$. [L1, L2, L9]

2.1 Claim (i): $y \in f[S \cup T]$ exactly when $y = f(x)$ for some $x$ lying in $S$ or in $T$, which is exactly $y \in f[S]$ or $y \in f[T]$. [L4, L7, step 1.1]

2.2 Claim (ii): if $y \in f[S \cap T]$ then $y = f(x)$ for some $x$ in both $S$ and $T$, so $y \in f[S]$ and $y \in f[T]$. [L5, L9, step 1.1]

2.3 Claim (iii): if $y \in f[S] \setminus f[T]$ then $y = f(s)$ for some $s \in S$, and no element of $T$ is sent to $y$; in particular $s \notin T$, so $s \in S \setminus T$ and $y \in f[S \setminus T]$. [L6, L9, step 1.1]

2.4 If $f$ is injective, both inclusions are equalities. For (ii): $y \in f[S] \cap f[T]$ gives $y = f(s) = f(t)$ with $s \in S$ and $t \in T$, and injectivity gives $s = t \in S \cap T$, so $y \in f[S \cap T]$. For (iii): $y \in f[S \setminus T]$ gives $y = f(s)$ with $s \in S$ and $s \notin T$; if $y$ were $f(t)$ for some $t \in T$ then injectivity would give $s = t \in T$, so $y \notin f[T]$ and $y \in f[S] \setminus f[T]$. [L3, L5, L6, L7, step 1.1]

2.5 Conversely, suppose $f$ is not injective, so $f(a) = f(a')$ for some $a, a' \in A$ with $a \neq a'$. Take $S := \{a\}$ and $T := \{a'\}$. Then $S \cap T = \varnothing$, so $f[S \cap T] = \varnothing$, while $f(a)$ lies in $f[S] \cap f[T]$; the inclusion in (ii) is therefore proper for this pair. [L3, L5, L8, L10, step 1.1]

3.1 Claims (i), (ii) and (iii) hold in general, and steps 2.4 and 2.5 show that the two inclusions are equalities for all $S$ and $T$ exactly when $f$ is injective. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5] ∎
````

