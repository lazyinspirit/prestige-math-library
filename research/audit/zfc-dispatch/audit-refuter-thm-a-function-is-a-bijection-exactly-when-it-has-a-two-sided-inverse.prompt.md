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

## Target item — `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse
kind: theorem
title: "$f : A \\to B$ is a bijection if and only if there is a function $g : B \\to A$ with $g \\circ f = \\Delta_A$ and $f \\circ g = \\Delta_B$; such a $g$ is unique, equals the inverse relation $f^{-1}$, and is itself a bijection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-function, def-inverse-relation-composition-and-restriction, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, prop-composition-of-relations-is-associative]
justified_by: []
aliases: [thm-two-sided-inverse]
landmark: true
short: "bijections and two-sided inverses"
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
    - title: "Inverse function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function"
pipeline_run: null
---

## Statement

Let $f : A \to B$. Then $f$ is a bijection if and only if there is a function
$g : B \to A$ with $g \circ f = \Delta_A$ and $f \circ g = \Delta_B$. When such a
$g$ exists it is unique, it is the inverse relation $f^{-1}$, and it is itself a
bijection $B \to A$.

No choice principle is used: the value $g(b)$ is the unique $a$ with $f(a) = b$,
so it is determined rather than selected.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L3] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L4] $(b,a) \in R^{-1}$ holds if and only if $(a,b) \in R$ ([[def-inverse-relation-composition-and-restriction]]).

[L5] $\operatorname{dom}(R^{-1}) = \operatorname{ran} R$ and $\operatorname{ran}(R^{-1}) = \operatorname{dom} R$ ([[prop-composition-of-relations-is-associative]]).

[L6] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L7] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L8] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L9] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L10] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is a bijection. The inverse relation $f^{-1}$ is a function: if $(b,a)$ and $(b,a')$ lie in it then $f(a) = b = f(a')$, so $a = a'$ by injectivity. Its domain is $\operatorname{ran} f$, which is $B$ by surjectivity, and its range is $\operatorname{dom} f = A$; hence $f^{-1} : B \to A$. [L1, L2, L3, L4, L5, L9]

1.2 Conversely, suppose $g : B \to A$ satisfies $g \circ f = \Delta_A$ and $f \circ g = \Delta_B$. If $f(a) = f(a')$ then $a = g(f(a)) = g(f(a')) = a'$, so $f$ is injective; and any $b \in B$ satisfies $b = \Delta_B(b) = f(g(b))$, so $b$ is a value of $f$ and $f$ is surjective. Hence $f$ is a bijection. [L1, L2, L6, L7, L10]

1.3 Any two such functions agree: if $g$ and $g'$ both satisfy the two identities then, for $b \in B$, $f(g'(b)) = b$, so $g(b) = g(f(g'(b))) = \Delta_A(g'(b)) = g'(b)$; both have domain $B$, so $g = g'$. [L6, L7, L8]

2.1 For a bijection $f$, the function $f^{-1}$ of step 1.1 satisfies the two identities: $f^{-1} \circ f$ and $\Delta_A$ are functions with domain $A$, and $f^{-1}(f(a)) = a = \Delta_A(a)$ for $a \in A$; likewise $f \circ f^{-1}$ and $\Delta_B$ are functions with domain $B$ agreeing at every point. [L4, L6, L7, L8, step 1.1]

2.2 Such a $g$ is itself a bijection: $f$ is a function $A \to B$ with $f \circ g = \Delta_B$ and $g \circ f = \Delta_A$, which is the hypothesis of step 1.2 applied to $g$ in place of $f$. [step 1.2]

3.1 Such a $g$ is the inverse relation: $f^{-1}$ satisfies the two identities by step 2.1, and step 1.3 says there is only one function that does. [step 1.3, step 2.1]

4.1 The two directions, the uniqueness, the identification with $f^{-1}$ and the bijectivity of $g$ are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎
````

## Declared dependencies of `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`

`deps:` ["def-injection-surjection-bijection","def-function","def-inverse-relation-composition-and-restriction","lem-the-composite-of-two-functions-is-a-function","def-the-identity-and-membership-relations-on-a-set","lem-two-functions-are-equal-exactly-when-they-agree-at-every-point","def-relation-domain-range-and-field","prop-composition-of-relations-is-associative"]

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

## Proof

**Proof technique:** direct.

1.1 From left to right: if $f = g$ then the two sets have the same elements, so the defining conditions for the domain and for the value at a point are the same for both. [L1, L2, L4]

1.2 From right to left: assume $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x$ in that set. Let $z \in f$. Then $z$ is an ordered pair $(x,y)$ with $x \in \operatorname{dom} f$ and $y = f(x)$; hence $x \in \operatorname{dom} g$ and $y = g(x)$, so $z \in g$. The same argument with $f$ and $g$ exchanged gives the reverse inclusion, so the two sets have the same elements. [L1, L2, L3, L4, L5]

2.1 Both implications hold, which is the statement. [step 1.1, step 1.2] ∎
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

### `prop-composition-of-relations-is-associative` — $T \\circ (S \\circ R) = (T \\circ S) \\circ R$, $(S \\circ R)^{-1} = R^{-1} \\circ S^{-1}$, $(R^{-1})^{-1} = R$, $\\operatorname{dom}(R^{-1}) = \\operatorname{ran} R$, and $\\Delta_B \\circ R = R = R \\circ \\Delta_A$ for a relation $R$ from $A$ to $B$

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

