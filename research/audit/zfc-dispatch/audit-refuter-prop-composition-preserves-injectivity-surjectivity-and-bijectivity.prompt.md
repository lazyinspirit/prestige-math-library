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

## Target item — `prop-composition-preserves-injectivity-surjectivity-and-bijectivity`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: prop-composition-preserves-injectivity-surjectivity-and-bijectivity
kind: proposition
title: "For $f : A \\to B$ and $g : B \\to C$: if both are injective so is $g \\circ f$; if both are surjective so is $g \\circ f$; if $g \\circ f$ is injective so is $f$; and if $g \\circ f$ is surjective so is $g$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injection-surjection-bijection, lem-the-composite-of-two-functions-is-a-function, def-function, def-relation-domain-range-and-field, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
landmark: false
short: "composition and the three adjectives"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
pipeline_run: null
---

## Statement

Let $f : A \to B$ and $g : B \to C$. Then $g \circ f : A \to C$, and

- (i) if $f$ and $g$ are injective then so is $g \circ f$;
- (ii) if $f$ and $g$ are surjective then so is $g \circ f$;
- (iii) if $g \circ f$ is injective then so is $f$;
- (iv) if $g \circ f$ is surjective then so is $g$.

In particular a composite of bijections is a bijection.

## Facts & Assumptions

**Given:** functions $f : A \to B$ and $g : B \to C$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L3] $f$ is **bijective** if it is both injective and surjective ([[def-injection-surjection-bijection]]).

[L4] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L5] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L6] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L7] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

## Proof

**Proof technique:** direct.

1.1 $g \circ f : A \to C$: its domain is $f^{-1}[\operatorname{dom} g] = f^{-1}[B]$, which is $A$ because $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$; and its values $g(f(a))$ lie in $\operatorname{ran} g \subseteq C$. [L4, L5, L6, L7]

2.1 Claim (i): assume $f$ and $g$ injective and let $a, a' \in A$ with $g(f(a)) = g(f(a'))$. Injectivity of $g$ gives $f(a) = f(a')$, and injectivity of $f$ gives $a = a'$. [L1, L4, step 1.1]

2.2 Claim (ii): assume $f$ and $g$ surjective and let $c \in C$. Surjectivity of $g$ gives $b \in B$ with $g(b) = c$, and surjectivity of $f$ gives $a \in A$ with $f(a) = b$; then $g(f(a)) = c$. [L2, L4, step 1.1]

2.3 Claim (iii): assume $g \circ f$ injective and let $a, a' \in A$ with $f(a) = f(a')$. Then $g(f(a)) = g(f(a'))$, so $a = a'$. [L1, L4, step 1.1]

2.4 Claim (iv): assume $g \circ f$ surjective and let $c \in C$. There is $a \in A$ with $g(f(a)) = c$, and $f(a)$ is an element of $B$, so $c$ is a value of $g$. [L2, L4, L5, step 1.1]

3.1 Claims (i) to (iv) are established; combining (i) and (ii) gives that a composite of bijections is injective and surjective, hence a bijection. [L3, step 2.1, step 2.2, step 2.3, step 2.4] ∎
````

## Declared dependencies of `prop-composition-preserves-injectivity-surjectivity-and-bijectivity`

`deps:` ["def-injection-surjection-bijection","lem-the-composite-of-two-functions-is-a-function","def-function","def-relation-domain-range-and-field","def-image-and-preimage-under-a-relation"]

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

### `lem-the-composite-of-two-functions-is-a-function` — If $f$ and $g$ are functions then $g \\circ f$ is a function with domain $f^{-1}[\\operatorname{dom} g]$ and $(g \\circ f)(x) = g(f(x))$ there; $\\Delta_A$ is a function with $\\Delta_A(a) = a$; and $f \\circ \\Delta_A = f = \\Delta_B \\circ f$ for $f : A \\to B$

````markdown
---
id: lem-the-composite-of-two-functions-is-a-function
kind: lemma
title: "If $f$ and $g$ are functions then $g \\circ f$ is a function with domain $f^{-1}[\\operatorname{dom} g]$ and $(g \\circ f)(x) = g(f(x))$ there; $\\Delta_A$ is a function with $\\Delta_A(a) = a$; and $f \\circ \\Delta_A = f = \\Delta_B \\circ f$ for $f : A \\to B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-inverse-relation-composition-and-restriction, def-image-and-preimage-under-a-relation, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, prop-composition-of-relations-is-associative]
justified_by: []
aliases: []
landmark: false
short: "composites of functions"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 5 and Exercise 11"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function composition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_composition"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be functions and let $A$, $B$ be sets. Then

- (i) $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain;
- (ii) $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$;
- (iii) if $f : A \to B$ then $f \circ \Delta_A = f$ and $\Delta_B \circ f = f$.

## Facts & Assumptions

**Given:** functions $f$ and $g$, and sets $A$, $B$.

[L1] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L2] $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and $(b,c) \in S$ for some $b$ ([[def-inverse-relation-composition-and-restriction]]).

[L3] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L4] $a \in R^{-1}[B]$ holds if and only if $(a,b) \in R$ for some $b \in B$ ([[def-image-and-preimage-under-a-relation]]).

[L5] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L6] if $R$ is a relation from $A$ to $B$, then $\Delta_B \circ R = R$ and $R \circ \Delta_A = R$ ([[prop-composition-of-relations-is-associative]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i), single-valuedness: $g \circ f$ is a relation, and if $(a,c)$ and $(a,c')$ both lie in it, there are $b$ and $b'$ with $(a,b),(a,b') \in f$ and $(b,c),(b',c') \in g$; single-valuedness of $f$ gives $b = b'$, and then single-valuedness of $g$ gives $c = c'$. [L1, L2]

1.2 Claim (ii): if $(a,b)$ and $(a,c)$ lie in $\Delta_A$ then $b = a = c$, so $\Delta_A$ is a function; its domain is $A$, because $(a,a) \in \Delta_A$ exactly for $a \in A$, and its value at $a$ is $a$. [L1, L3, L5]

1.3 Claim (iii): a function $f : A \to B$ has $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$, so it is a relation from $A$ to $B$, and the identity laws for relations apply verbatim. [L6]

2.1 Claim (i), domain and values: $a \in \operatorname{dom}(g \circ f)$ holds exactly when there are $b$ and $c$ with $(a,b) \in f$ and $(b,c) \in g$, that is, exactly when $a \in \operatorname{dom} f$ and $f(a) \in \operatorname{dom} g$; and that is exactly the condition $a \in f^{-1}[\operatorname{dom} g]$. For such an $a$ the pair $(a, g(f(a)))$ lies in $g \circ f$, so $(g \circ f)(a) = g(f(a))$ by step 1.1. [L1, L2, L3, L4, step 1.1]

3.1 Claims (i), (ii) and (iii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
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

