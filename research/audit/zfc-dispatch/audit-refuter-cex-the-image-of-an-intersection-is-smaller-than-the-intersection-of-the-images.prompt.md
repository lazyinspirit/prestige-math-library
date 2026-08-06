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

## Target item — `cex-the-image-of-an-intersection-is-smaller-than-the-intersection-of-the-images`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: cex-the-image-of-an-intersection-is-smaller-than-the-intersection-of-the-images
kind: counterexample
title: "A function $f$ and sets $S, T$ with $f[S \\cap T] \\subsetneq f[S] \\cap f[T]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-images-of-unions-and-intersections-under-a-function, def-function, def-image-and-preimage-under-a-relation, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-injection-surjection-bijection, def-ordered-pair, def-relation-domain-range-and-field, def-union-of-a-set-and-binary-union]
justified_by: []
aliases: []
landmark: false
short: "image of an intersection"
proof_strategy: direct
cx_machine_verified: false
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

## Statement refuted

**Refuted claim:** $f[S \cap T] = f[S] \cap f[T]$ for every function
$f : A \to B$ and all $S, T \subseteq A$. Write $u := \varnothing$ and
$v := \{\varnothing\}$, and take

$$A := \{u,v\}, \qquad B := \{u\}, \qquad f := \{(u,u),(v,u)\}, \qquad S := \{u\}, \qquad T := \{v\}.$$

Then $S \cap T = \varnothing$, so $f[S \cap T] = \varnothing$, while
$f[S] = f[T] = \{u\}$ and therefore $f[S] \cap f[T] = \{u\}$. The inclusion
$f[S \cap T] \subseteq f[S] \cap f[T]$ of
[[prop-images-of-unions-and-intersections-under-a-function]] is proper here, and
it is proper exactly because $f$ is not injective.

## Facts & Assumptions

**Given:** $u := \varnothing$, $v := \{\varnothing\}$, $A := \{u,v\}$, $B := \{u\}$, $f := \{(u,u),(v,u)\}$, $S := \{u\}$ and $T := \{v\}$.

[L1] $f[S \cap T] \subseteq f[S] \cap f[T]$ ([[prop-images-of-unions-and-intersections-under-a-function]]).

[L2] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L3] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L4] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L9] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L10] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L11] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 $u \neq v$, since $v$ has an element and $u$ has none; so $A$ has exactly the two elements $u$ and $v$, and $S$ and $T$ are the two singletons inside it. [L6, L7]

2.1 $f$ is a function $A \to B$: its two pairs have distinct first coordinates, so it is single valued; its domain is $A$ and its range is $\{u\} = B$. It is not injective, since $f(u) = u = f(v)$ while $u \neq v$. [L3, L4, L8, L9, step 1.1]

2.2 $S \cap T$ has no element, since an element would have to equal both $u$ and $v$; so $S \cap T = \varnothing$ and $f[S \cap T] = \varnothing$, no element of $\varnothing$ being related to anything. [L2, L5, L6, L7, step 1.1]

3.1 $f[S] = \{u\}$ and $f[T] = \{u\}$, since $f(u) = u$ and $f(v) = u$; hence $f[S] \cap f[T] = \{u\}$. [L2, L5, L6, step 2.1]

4.1 The general inclusion holds and is proper here: $u$ lies in $f[S] \cap f[T]$ and not in $f[S \cap T]$, which has no element at all. [L1, L7, L10, L11, step 2.2, step 3.1] ∎
````

## Declared dependencies of `cex-the-image-of-an-intersection-is-smaller-than-the-intersection-of-the-images`

`deps:` ["prop-images-of-unions-and-intersections-under-a-function","def-function","def-image-and-preimage-under-a-relation","lem-unions-and-intersections-of-small-families","def-unordered-pair-and-singleton","thm-the-empty-set-exists-and-is-unique","def-injection-surjection-bijection","def-ordered-pair","def-relation-domain-range-and-field","def-union-of-a-set-and-binary-union"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

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

