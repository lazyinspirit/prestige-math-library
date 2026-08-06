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

## Target item — `fs-every-surjection-has-a-right-inverse-in-zf`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: fs-every-surjection-has-a-right-inverse-in-zf
kind: false-statement
title: "FALSE: assuming ZF is consistent, ZF proves that every surjection $f : A \\to B$ has a right inverse $g : B \\to A$ with $f \\circ g = \\Delta_B$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-cohen-forcing-ac-independent, def-axiom-of-choice, def-injection-surjection-bijection, def-function, def-product-of-an-indexed-family, prop-products-over-small-index-sets, lem-the-composite-of-two-functions-is-a-function, def-the-identity-and-membership-relations-on-a-set, def-cartesian-product, def-indexed-family, def-axiom-schema-of-separation, def-relation-domain-range-and-field, def-indexed-union-and-intersection, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "right inverses in ZF (false)"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "P. J. Cohen, The independence of the continuum hypothesis (PNAS 1963)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** Assume ZF is consistent. Then ZF proves that every
surjection $f : A \to B$ has a right inverse, that is, a function
$g : B \to A$ with $f \circ g = \Delta_B$.

The consistency assumption is not decoration: an inconsistent ZF proves
everything, so without it the claim would be unrefutable.

## Facts & Assumptions

**Given:** ZF is consistent, and the claim above.

[A1] **If** ZF is consistent, **then** ZF does not prove the Axiom of Choice (Cohen 1963, [[rem-cohen-forcing-ac-independent]]). This is an external result, established by forcing and quoted rather than proved here.

[L1] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] an element of $\prod_{i \in I} A_i$ is a function with domain $I$ that takes its value at each index inside the member carried by that index ([[def-product-of-an-indexed-family]]).

[L4] if $A_j = \varnothing$ for some $j \in I$ then $\prod_{i \in I} A_i = \varnothing$ ([[prop-products-over-small-index-sets]]).

[L5] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L6] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L7] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L8] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L9] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L12] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L13] $z \in \bigcup_{i \in I} A_i$ holds if and only if $z \in A_i$ for some $i \in I$ ([[def-indexed-union-and-intersection]]).

[L14] An equivalent formulation of the **Axiom of Choice** is that a product of nonempty sets is nonempty: if $X_i \ne \varnothing$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \varnothing$ ([[def-axiom-of-choice]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose ZF proves that every surjection has a right inverse. [assume-contra]

1.2 Let $(X_i)_{i \in I}$ be any indexed family with $X_i \neq \varnothing$ for every $i \in I$. Separating inside $I \times \bigcup_{i \in I} X_i$ gives the set $E := \{\,(i,x) : i \in I \wedge x \in X_i\,\}$, and separating inside $E \times I$ gives $f := \{\,(z,i) \in E \times I : \exists x\,(z = (i,x))\,\}$, which is a function $E \to I$ sending $(i,x)$ to $i$. [L2, L8, L9, L10, L11, L12, L13]

2.1 $f$ is surjective: for $i \in I$ the set $X_i$ has an element $x$, so $(i,x) \in E$ and $f((i,x)) = i$. [L1, step 1.2]

3.1 By the supposition $f$ has a right inverse $g : I \to E$ with $f \circ g = \Delta_I$. For $i \in I$ we get $f(g(i)) = i$, so $g(i) = (i,x)$ for some $x \in X_i$; hence $\operatorname{ran} g$ is a set of pairs, one for each $i \in I$, which is a function with domain $I$ whose value at $i$ lies in $X_i$. That function is an element of $\prod_{i \in I} X_i$, so that product is nonempty. [L3, L5, L6, L7, L11, L12, step 1.1, step 1.2, step 2.1]

4.1 So ZF would prove that a product of nonempty sets is nonempty, over an arbitrary index set, which is the product formulation of the Axiom of Choice ([[def-axiom-of-choice]]); note that the hypothesis $X_i \neq \varnothing$ is exactly what rules out the collapse of the product recorded in the cited computation of small products. Under the assumption that ZF is consistent, ZF does not prove the Axiom of Choice, so the supposition is untenable and the claim is false. [A1, L4, L14, step 3.1, discharge-contradiction] ∎

## Remarks

- **What is true, and where the line falls.** A *two-sided* inverse is available without any choice principle, because it is determined rather than selected: that is [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]. So is a left inverse for an injection with nonempty domain, [[cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse]]. Only the right inverse of a surjection requires choosing one preimage at each point at once.

- **The external ingredient.** The refutation quotes one result it does not prove, the unprovability of Choice in ZF, and everything else in it is proved on this page's own material.
````

## Declared dependencies of `fs-every-surjection-has-a-right-inverse-in-zf`

`deps:` ["rem-cohen-forcing-ac-independent","def-axiom-of-choice","def-injection-surjection-bijection","def-function","def-product-of-an-indexed-family","prop-products-over-small-index-sets","lem-the-composite-of-two-functions-is-a-function","def-the-identity-and-membership-relations-on-a-set","def-cartesian-product","def-indexed-family","def-axiom-schema-of-separation","def-relation-domain-range-and-field","def-indexed-union-and-intersection","thm-the-characterising-property-of-ordered-pairs"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `rem-cohen-forcing-ac-independent` — Cohen 1963: ZF does not prove the Axiom of Choice

````markdown
---
id: rem-cohen-forcing-ac-independent
kind: remark
title: "Cohen 1963: ZF does not prove the Axiom of Choice"
status: published
origin: session
proved_here: false
deps: [rem-godel-constructible-universe]
justified_by: []
forward_refs: [def-axiom-of-choice, cor-ac-iff-zorn, fs-zorn-provable-in-zf, fs-every-set-well-orderable-in-zf, rem-choice-ledger]
aliases: []
landmark: true
short: "Con(ZF) implies Con(ZF + not AC), by forcing"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "P. J. Cohen, The independence of the continuum hypothesis, Proc. Nat. Acad. Sci. USA 50 (1963), 1143-1148"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "P. J. Cohen, The independence of the continuum hypothesis II, Proc. Nat. Acad. Sci. USA 51 (1964), 105-110"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC300611/"
    - title: "Forcing (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Forcing_(mathematics)"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF + (not AC) is consistent.** Equivalently: **if ZF
is consistent, then ZF does not prove the Axiom of Choice.**

Cohen (1963, 1964) proves this by inventing **forcing**. Starting from a
countable transitive model $M$ of ZF, one adjoins a generic object, here a set of
"Cohen reals" indexed by $\mathbb{N}$, and then passes to the **symmetric
submodel** of the resulting extension: the sets kept are those whose names are
invariant under a large group of permutations of the indices, in the sense of a
fixed normal filter of subgroups. The symmetric model satisfies every axiom of
ZF, and it contains the set $A$ of adjoined reals as a set with no well-ordering.
In particular no choice function exists for the family of nonempty subsets of
$A$, so AC fails there.

Together with [[rem-godel-constructible-universe]] this makes the Axiom of Choice
**independent of ZF**, again relative to the consistency of ZF: neither AC nor
its negation is a theorem of ZF, unless ZF is inconsistent, in which case it
proves everything.

## Remarks

- **Not proved in this library.** Neither forcing nor the symmetric-model
  construction is developed here. The description above fixes what the statement
  says; it is not a proof and is not a sketch that could be completed with the
  material in this library.

- **What would prove it.** A forcing track: partial orders and dense sets,
  Boolean-valued models or names and the forcing relation, genericity and the
  truth lemma, then symmetric extensions and normal filters of subgroups. A
  second, older route reaches the same conclusion for ZF with atoms
  (Fraenkel-Mostowski permutation models) and transfers it to ZF by the
  Jech-Sochor embedding theorem. Neither route is in this library.

- **Why it matters here.** This is the result that
  [[fs-zorn-provable-in-zf]] and [[fs-every-set-well-orderable-in-zf]] quote when
  they refuse to accept Zorn's lemma or the well-ordering theorem as theorems of
  ZF: both are equivalent to the Axiom of Choice over ZF ([[cor-ac-iff-zorn]]),
  so a ZF proof of either would be a ZF proof of [[def-axiom-of-choice]]. It is
  also one of the two external facts recorded in [[rem-choice-ledger]].

- **Conditional discipline.** "ZF does not prove AC" always abbreviates the
  implication above. Nothing in this library asserts the unconditional form,
  which is not available: by Gödel's second incompleteness theorem the
  consistency of ZF cannot be proved in ZF.
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

### `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse` — $f : A \\to B$ is a bijection if and only if there is a function $g : B \\to A$ with $g \\circ f = \\Delta_A$ and $f \\circ g = \\Delta_B$; such a $g$ is unique, equals the inverse relation $f^{-1}$, and is itself a bijection

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

### `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse` — For $f : A \\to B$ with $A \\neq \\varnothing$: $f$ is injective if and only if there is $g : B \\to A$ with $g \\circ f = \\Delta_A$; for $A = \\varnothing$ the empty function is injective and has a left inverse if and only if $B = \\varnothing$

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

