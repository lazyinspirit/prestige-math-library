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

## Target item — `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse
kind: corollary
title: "For $f : A \\to B$ with $A \\neq \\varnothing$: $f$ is injective if and only if there is $g : B \\to A$ with $g \\circ f = \\Delta_A$; for $A = \\varnothing$ the empty function is injective and has a left inverse if and only if $B = \\varnothing$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-function, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, def-axiom-schema-of-separation, def-image-and-preimage-under-a-relation, thm-the-empty-set-exists-and-is-unique, def-cartesian-product, prop-cartesian-products-and-set-operations, def-relation-domain-range-and-field]
justified_by: []
aliases: [cor-left-inverse-criterion]
landmark: false
short: "injective iff a left inverse exists"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "Inverse function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$.

- (i) If $A \neq \varnothing$, then $f$ is injective if and only if there is a function $g : B \to A$ with $g \circ f = \Delta_A$.
- (ii) If $A = \varnothing$, then $f = \varnothing$ and $f$ is injective; and there is a function $g : B \to A$ with $g \circ f = \Delta_A$ if and only if $B = \varnothing$.

The hypothesis $A \neq \varnothing$ in (i) is not removable: for
$A = \varnothing$ and $B \neq \varnothing$ the empty function is injective and
has no left inverse at all.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L4] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L5] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L6] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L7] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L8] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L9] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L10] $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$ ([[prop-cartesian-products-and-set-operations]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i), from right to left: if $g \circ f = \Delta_A$ and $f(a) = f(a')$ for $a, a' \in A$, then $a = \Delta_A(a) = g(f(a)) = g(f(a')) = \Delta_A(a') = a'$. [L1, L3, L4]

1.2 Claim (i), from left to right: assume $f$ injective and $A \neq \varnothing$, and fix $a_{0} \in A$. Separating inside $B \times A$ gives the set $g := \{\, (b,a) \in B \times A : (a,b) \in f \ \text{or}\ (b \notin f[A] \ \text{and}\ a = a_{0}) \,\}$. For $b \in f[A]$ the first alternative supplies exactly one $a$, by injectivity, and the second supplies none; for $b \in B$ with $b \notin f[A]$ the first supplies none, since $\operatorname{ran} f = f[A]$, and the second supplies $a_{0}$ alone. Hence $g$ is a function with domain $B$ and range inside $A$, so $g : B \to A$. [L1, L2, L6, L7, L8, L9, L11]

1.3 Claim (ii): if $A = \varnothing$ then $\operatorname{dom} f = \varnothing$, so $f$ has no element and $f = \varnothing$; the injectivity condition quantifies over elements of $A$ and holds vacuously. [L1, L2, L8, L11]

2.1 Claim (i) concluded: with $g$ as in step 1.2, $g \circ f$ and $\Delta_A$ are functions with domain $A$, and $g(f(a)) = a$ for every $a \in A$, since $f(a) \in f[A]$ selects the first alternative; so the two functions are equal. [L3, L4, L5, L7, step 1.2]

2.2 Claim (ii) concluded: a function $g : B \to \varnothing$ has $\operatorname{ran} g \subseteq \varnothing$, so $g \subseteq B \times \varnothing = \varnothing$, giving $g = \varnothing$ and $B = \operatorname{dom} g = \varnothing$. Conversely, if $B = \varnothing$ then $g := \varnothing$ is a function $\varnothing \to \varnothing$, and $g \circ f$ and $\Delta_{\varnothing}$ are both $\varnothing$, so the identity holds. [L2, L3, L5, L8, L9, L10, L11, step 1.3]

3.1 Claims (i) and (ii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **Why the surjective analogue is missing.** The corresponding statement, that every surjection has a right inverse, is not proved on this page: it is equivalent to the Axiom of Choice, which this page states at [[def-axiom-of-choice]] and assumes in no proof, and choosing one preimage for each point of the codomain is exactly the simultaneous selection no proof here makes. [[rem-where-a-choice-principle-would-be-needed]] records where that boundary falls.
````

## Declared dependencies of `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`

`deps:` ["def-injection-surjection-bijection","def-function","lem-the-composite-of-two-functions-is-a-function","def-the-identity-and-membership-relations-on-a-set","def-axiom-schema-of-separation","def-image-and-preimage-under-a-relation","thm-the-empty-set-exists-and-is-unique","def-cartesian-product","prop-cartesian-products-and-set-operations","def-relation-domain-range-and-field"]

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

### `def-axiom-of-choice` — The Axiom of Choice

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the remaining axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] is the corresponding warning and carries the same
  consistency assumption explicitly in its Given; [[rem-choice-strengths]]
  locates the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. Everything on this page after
  [[lem-finite-choice]] that invokes AC is flagged as doing so, because later
  pages need to state honestly which of their theorems are choice-free; that
  bookkeeping is the purpose of [[rem-choice-strengths]].
````

### `rem-where-a-choice-principle-would-be-needed` — The Axiom of Choice is stated on this page and assumed by no proof on it; the two statements that would need it are identified and left unsettled

````markdown
---
id: rem-where-a-choice-principle-would-be-needed
kind: remark
title: "The Axiom of Choice is stated on this page and assumed by no proof on it; the two statements that would need it are identified and left unsettled"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse, prop-products-over-small-index-sets, lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product, def-product-of-an-indexed-family, def-choice-function, def-axiom-of-choice, def-indexed-family, def-indexed-union-and-intersection, def-the-identity-and-membership-relations-on-a-set, lem-the-composite-of-two-functions-is-a-function, thm-universal-property-of-the-quotient, lem-equivalence-classes-partition, def-injection-surjection-bijection]
justified_by: []
forward_refs: [rem-choice-ledger]
aliases: []
landmark: false
short: "the choice ledger for this page"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
pipeline_run: null
---

## Remark

The Axiom of Choice is stated on this page, at [[def-axiom-of-choice]], together
with the notion of a choice function it is stated in terms of,
[[def-choice-function]]. Nothing on the page assumes it: every proof here is
carried out without any choice principle, and two natural-looking statements are
missing from the page for exactly that reason. This is the account of where the
line falls.

**What is proved without choice, and why.** A construction is choice-free when
the object it produces is *determined* by the data rather than *selected* from
several candidates. The two-sided inverse of
[[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]] is
determined: for a bijection $f$ and a point $b$ of the codomain there is exactly
one $a$ with $f(a) = b$, so no selection is made. The left inverse of
[[cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse]]
needs one arbitrary point $a_{0}$ of a nonempty set, which is a single
existential instantiation and not a choice principle: one point is chosen once,
not one point for each index. The function produced by
[[thm-universal-property-of-the-quotient]] is likewise determined, because its
value on a class is forced to be the common value of $f$ on that class, and
[[lem-equivalence-classes-partition]] is proved from the three defining
properties alone.

**A choice function is an element of a product, and the two formulations of the
axiom are one statement.** [[def-axiom-of-choice]] gives the axiom twice, once
as "every family of nonempty sets has a choice function" and once as "a product
of nonempty sets is nonempty", and both objects are now defined on this page, so
the passage between the two readings can be written out. Let $\mathcal{F}$ be a
set all of whose members are nonempty, and index it by itself: the identity
relation $\Delta_{\mathcal{F}}$ of
[[def-the-identity-and-membership-relations-on-a-set]] is a function with domain
$\mathcal{F}$ sending each $S$ to itself, by clause (ii) of
[[lem-the-composite-of-two-functions-is-a-function]], hence an indexed family
([[def-indexed-family]]) whose range is $\mathcal{F}$, so its indexed union is
$\bigcup \mathcal{F}$ ([[def-indexed-union-and-intersection]]). Unfolding
[[def-product-of-an-indexed-family]] for that family gives the set of functions
$g : \mathcal{F} \to \bigcup \mathcal{F}$ with $g(S) \in S$ for every
$S \in \mathcal{F}$, which is word for word the set of choice functions for
$\mathcal{F}$ in [[def-choice-function]]. So a choice function for $\mathcal{F}$
is exactly an element of the product of the members of $\mathcal{F}$, and the
two formulations assert the same thing about the same object.

**The first statement that would need choice: a right inverse for a
surjection.** For a surjection $f : A \to B$
([[def-injection-surjection-bijection]]) each $b \in B$ has at least one
preimage, and a right inverse is a rule picking one preimage for every $b$ at
once. That is a simultaneous selection over the whole of $B$, and no proof on
this page makes one: the assertion that every surjection has a right inverse is
equivalent to the Axiom of Choice.

**The second: a nonempty product.**
[[prop-products-over-small-index-sets]] settles
$\prod_{i \in I} A_i$ when $I$ has no element, when some member is empty, and
when $I$ has exactly one element, and
[[lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product]]
settles the two-index case, in each case by writing an element down. For an
arbitrary index set the assertion that $\prod_{i \in I} A_i$ is nonempty whenever
every $A_i$ is nonempty is the product formulation of the axiom, which by the
identification above is the choice-function formulation read at the family
indexed by itself; [[def-product-of-an-indexed-family]] says so where the
product is introduced.

**Where the rest of the library's account of choice lives.** The strength of the
weaker choice principles relative to one another, and what survives without any
of them, is recorded at [[rem-choice-ledger]].
````

