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

## Target item — `thm-canonical-decomposition-of-a-function`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: thm-canonical-decomposition-of-a-function
kind: theorem
title: "Every function $f : A \\to B$ factors as $f = \\iota \\circ \\bar f \\circ \\pi$ with $\\pi : A \\to A/{\\ker f}$ the surjective quotient map, $\\bar f : A/{\\ker f} \\to f[A]$ the bijection $[a] \\mapsto f(a)$, and $\\iota : f[A] \\to B$ the inclusion injection; $\\bar f$ is the only function making the factorisation hold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-kernel-of-a-function-is-an-equivalence-relation, thm-universal-property-of-the-quotient, def-equivalence-relation, lem-equivalence-classes-partition, def-injection-surjection-bijection, def-function, def-image-and-preimage-under-a-relation, lem-the-composite-of-two-functions-is-a-function, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-relation-domain-range-and-field, def-the-identity-and-membership-relations-on-a-set, prop-composition-of-relations-is-associative, def-subset-and-proper-subset]
justified_by: []
aliases: [thm-first-isomorphism-theorem-for-sets]
landmark: true
short: "canonical decomposition"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
pipeline_run: null
---

## Statement

Let $f : A \to B$, write $\sim$ for $\ker f$ and let
$\pi : A \to A/{\sim}$ be the quotient map. Put
$\iota := \Delta_{f[A]}$, the identity relation on $f[A]$. Then

- (i) $\pi$ is surjective;
- (ii) there is a function $\bar f : A/{\sim} \to f[A]$ with $\bar f([a]) = f(a)$ for every $a \in A$, and it is a bijection;
- (iii) $\iota$ is an injective function $f[A] \to B$ with $\iota(y) = y$;
- (iv) $\iota \circ \bar f \circ \pi = f$;
- (v) $\bar f$ is the only function $A/{\sim} \to f[A]$ satisfying (iv).

## Facts & Assumptions

**Given:** a function $f : A \to B$, with $\sim$ denoting $\ker f$.

[L1] $\ker f$ is a set, is a relation on $A$, and is an equivalence relation on $A$ ([[lem-the-kernel-of-a-function-is-an-equivalence-relation]]).

[L2] $\pi$ is a surjective function $A \to A/{\sim}$ with $\pi(a) = [a]$ ([[thm-universal-property-of-the-quotient]]).

[L3] there is a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ if and only if $f(a) = f(a')$ whenever $a \sim a'$ ([[thm-universal-property-of-the-quotient]]).

[L4] when such a $g$ exists it is unique, and it satisfies $g([a]) = f(a)$ for every $a \in A$ ([[thm-universal-property-of-the-quotient]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L7] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L8] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L9] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L10] $\Delta_A$ is a function with $\operatorname{dom} \Delta_A = A$ and $\Delta_A(a) = a$ for every $a \in A$ ([[lem-the-composite-of-two-functions-is-a-function]]).

[L11] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L12] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L13] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L14] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L15] $T \circ (S \circ R) = (T \circ S) \circ R$ ([[prop-composition-of-relations-is-associative]]).

[L16] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L17] $a \sim b$ if and only if $[a] = [b]$ ([[lem-equivalence-classes-partition]]).

## Proof

**Proof technique:** direct.

1.1 $\sim$ is an equivalence relation on $A$ and $a \sim a'$ says exactly $f(a) = f(a')$; so the hypothesis of the universal property is satisfied, and clause (i) is the surjectivity already recorded for the quotient map. [L1, L2, L3]

1.2 Claim (iii): $\iota = \Delta_{f[A]}$ is a function with domain $f[A]$ and $\iota(y) = y$; its range is $f[A]$, which is contained in $B$ because every element of $f[A]$ is a value of $f$ and $\operatorname{ran} f \subseteq B$. It is injective, since $\iota(y) = \iota(y')$ reads $y = y'$. [L6, L8, L9, L10, L13, L14, L16]

2.1 Claim (ii): the universal property gives a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ and $g([a]) = f(a)$ for every $a \in A$. Every value of $g$ is therefore a value of $f$, so $\operatorname{ran} g \subseteq f[A]$, and the same set $g$ is a function $A/{\sim} \to f[A]$; call it $\bar f$. It is onto $f[A]$, because each element of $f[A]$ is $f(a) = \bar f([a])$ for some $a \in A$; and it is injective, because $\bar f([a]) = \bar f([a'])$ gives $f(a) = f(a')$, that is $a \sim a'$, and therefore $[a] = [a']$. Hence $\bar f$ is a bijection. [L3, L4, L5, L6, L7, L8, L9, L13, L17, step 1.1]

3.1 Claim (iv): $\iota \circ \bar f \circ \pi$ is unambiguous by associativity, it is a function with domain $A$, and for $a \in A$ its value is $\iota(\bar f(\pi(a))) = \iota(f(a)) = f(a)$; so it equals $f$. [L11, L12, L15, step 1.2, step 2.1]

3.2 Claim (v): if $h : A/{\sim} \to f[A]$ also satisfies $\iota \circ h \circ \pi = f$, then for $C \in A/{\sim}$ choose $a$ with $C = [a]$ and compute $h(C) = \iota(h(\pi(a))) = f(a) = \bar f(C)$; both have domain $A/{\sim}$, so $h = \bar f$. [L5, L10, L11, L12, step 1.2, step 2.1]

4.1 Claims (i) to (v) are established, which is the statement. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2] ∎
````

## Declared dependencies of `thm-canonical-decomposition-of-a-function`

`deps:` ["lem-the-kernel-of-a-function-is-an-equivalence-relation","thm-universal-property-of-the-quotient","def-equivalence-relation","lem-equivalence-classes-partition","def-injection-surjection-bijection","def-function","def-image-and-preimage-under-a-relation","lem-the-composite-of-two-functions-is-a-function","lem-two-functions-are-equal-exactly-when-they-agree-at-every-point","def-relation-domain-range-and-field","def-the-identity-and-membership-relations-on-a-set","prop-composition-of-relations-is-associative","def-subset-and-proper-subset"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `lem-the-kernel-of-a-function-is-an-equivalence-relation` — For a function $f : A \\to B$ the relation $\\ker f := \\{\\,(a,a') \\in A \\times A : f(a) = f(a')\\,\\}$ is an equivalence relation on $A$

````markdown
---
id: lem-the-kernel-of-a-function-is-an-equivalence-relation
kind: lemma
title: "For a function $f : A \\to B$ the relation $\\ker f := \\{\\,(a,a') \\in A \\times A : f(a) = f(a')\\,\\}$ is an equivalence relation on $A$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-equivalence-relation, def-cartesian-product, def-axiom-schema-of-separation, def-properties-of-a-relation-on-a-set, def-relation-domain-range-and-field]
justified_by: []
aliases: [def-kernel-of-a-function]
landmark: false
short: "the kernel of a function"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Kernel (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kernel_(set_theory)"
pipeline_run: null
---

## Statement

Let $f : A \to B$ be a function. Then

$$\ker f \;:=\; \{\,(a,a') \in A \times A : f(a) = f(a')\,\}$$

is a set, is a relation on $A$, and is an equivalence relation on $A$.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L2] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] $R$ is a **relation on $A$** when $R \subseteq A \times A$ ([[def-relation-domain-range-and-field]]).

[L5] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L6] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L7] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L8] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

## Proof

**Proof technique:** direct.

1.1 $\ker f$ is a set and a relation on $A$: it is obtained by separating inside $A \times A$ with the formula $\exists a\,\exists a'\,(z = (a,a') \wedge f(a) = f(a'))$ and the parameters $A$ and $f$, so it is a subset of $A \times A$ and each of its elements is an ordered pair. [L1, L2, L3, L4]

2.1 It is reflexive on $A$: for $a \in A$ the value $f(a)$ is a single set, so $f(a) = f(a)$ and $(a,a) \in \ker f$. [L1, L5, step 1.1]

2.2 It is symmetric: if $(a,a') \in \ker f$ then $f(a) = f(a')$, hence $f(a') = f(a)$ and $(a',a) \in \ker f$. [L6, step 1.1]

2.3 It is transitive: if $(a,a') \in \ker f$ and $(a',a'') \in \ker f$ then $f(a) = f(a')$ and $f(a') = f(a'')$, hence $f(a) = f(a'')$ and $(a,a'') \in \ker f$. [L7, L8, step 1.1]

3.1 $\ker f$ is a relation on $A$ that is reflexive on $A$, symmetric and transitive, which is what it means to be an equivalence relation on $A$. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
````

### `thm-universal-property-of-the-quotient` — Let $\\sim$ be an equivalence relation on $A$ with quotient map $\\pi : A \\to A/{\\sim}$, and let $f : A \\to B$. There is a function $g : A/{\\sim} \\to B$ with $g \\circ \\pi = f$ if and only if $a \\sim a'$ implies $f(a) = f(a')$; and such a $g$ is then unique

````markdown
---
id: thm-universal-property-of-the-quotient
kind: theorem
title: "Let $\\sim$ be an equivalence relation on $A$ with quotient map $\\pi : A \\to A/{\\sim}$, and let $f : A \\to B$. There is a function $g : A/{\\sim} \\to B$ with $g \\circ \\pi = f$ if and only if $a \\sim a'$ implies $f(a) = f(a')$; and such a $g$ is then unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-relation, def-function, lem-two-functions-are-equal-exactly-when-they-agree-at-every-point, def-injection-surjection-bijection, def-cartesian-product, def-axiom-schema-of-separation, lem-the-composite-of-two-functions-is-a-function, def-relation-domain-range-and-field, def-power-set, def-subset-and-proper-subset]
justified_by: []
aliases: [thm-quotient-universal-property]
landmark: true
short: "universal property of the quotient"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Quotient set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $\sim$ be an equivalence relation on a set $A$, let $A/{\sim}$ be its
quotient set and let $\pi := \{\,(a,C) \in A \times (A/{\sim}) : C = [a]\,\}$,
the quotient map. Let $f : A \to B$. Then $\pi$ is a surjective function
$A \to A/{\sim}$ with $\pi(a) = [a]$, and:

- (i) there is a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ if and only if $f(a) = f(a')$ whenever $a \sim a'$;
- (ii) when such a $g$ exists it is unique, and it satisfies $g([a]) = f(a)$ for every $a \in A$.

## Facts & Assumptions

**Given:** an equivalence relation $\sim$ on a set $A$ and a function $f : A \to B$.

[L1] **reflexive**: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$ ([[def-equivalence-relation]]).

[L3] **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all $a, b, c \in A$ ([[def-equivalence-relation]]).

[L4] $[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A$ ([[def-equivalence-relation]]).

[L5] $A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\}$ ([[def-equivalence-relation]]).

[L6] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L7] $f = g$ if and only if $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x \in \operatorname{dom} f$ ([[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

[L8] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$ ([[def-injection-surjection-bijection]]).

[L9] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $g \circ f$ is a function, $\operatorname{dom}(g \circ f) = f^{-1}[\operatorname{dom} g]$, and $(g \circ f)(x) = g(f(x))$ for every $x$ in that domain ([[lem-the-composite-of-two-functions-is-a-function]]).

[L12] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L13] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L14] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 $[a] = [a']$ holds if and only if $a \sim a'$. If $a \sim a'$, then for $b \in A$ we get $b \in [a]$ exactly when $a \sim b$, and symmetry with transitivity turns that into $a' \sim b$, so $[a] \subseteq [a']$; the same argument with $a$ and $a'$ exchanged gives the reverse inclusion. Conversely $a \in [a]$ by reflexivity, so $[a] = [a']$ gives $a \in [a']$, that is $a' \sim a$, and symmetry gives $a \sim a'$. [L1, L2, L3, L4, L14]

1.2 $\pi$ is a surjective function $A \to A/{\sim}$ with $\pi(a) = [a]$: it is a set by separation inside $A \times (A/{\sim})$, it is single valued because $[a]$ is determined by $a$, its domain is $A$ since $[a] \in A/{\sim}$ for every $a \in A$, and every element of $A/{\sim}$ is $[a]$ for some $a \in A$, so it is onto. [L4, L5, L6, L8, L9, L10, L12]

1.3 Uniqueness in (ii): if $g$ and $g'$ are functions $A/{\sim} \to B$ with $g \circ \pi = f = g' \circ \pi$, then for $C \in A/{\sim}$ choose $a \in A$ with $C = [a]$; then $g(C) = g(\pi(a)) = f(a) = g'(\pi(a)) = g'(C)$. Both have domain $A/{\sim}$, so $g = g'$. [L5, L6, L7, L11]

2.1 Claim (i), from left to right: suppose $g : A/{\sim} \to B$ satisfies $g \circ \pi = f$, and let $a \sim a'$. Then $[a] = [a']$, so $f(a) = g(\pi(a)) = g([a]) = g([a']) = g(\pi(a')) = f(a')$. [L11, step 1.1, step 1.2]

2.2 Claim (i), from right to left: suppose $f(a) = f(a')$ whenever $a \sim a'$, and separate inside $(A/{\sim}) \times B$ to obtain $g := \{\,(C,y) \in (A/{\sim}) \times B : \exists a\,(a \in A \wedge C = [a] \wedge y = f(a))\,\}$. It is single valued: if $C = [a] = [a']$ with values $f(a)$ and $f(a')$, then $a \sim a'$ and the hypothesis gives $f(a) = f(a')$. Its domain is $A/{\sim}$, since every class is some $[a]$ and then $(C,f(a)) \in g$, and its range lies in $B$; so $g : A/{\sim} \to B$ with $g([a]) = f(a)$. Finally $g \circ \pi$ and $f$ are functions with domain $A$ and $(g \circ \pi)(a) = g([a]) = f(a)$, so $g \circ \pi = f$. [L5, L6, L7, L9, L10, L11, L12, L13, step 1.1, step 1.2]

3.1 Both directions of (i) hold, and step 1.3 supplies the uniqueness in (ii) while step 2.2 supplies the formula $g([a]) = f(a)$, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
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

### `lem-equivalence-classes-partition` — The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint; conversely every such cover arises from exactly one equivalence relation

````markdown
---
id: lem-equivalence-classes-partition
kind: lemma
title: "The equivalence classes of an equivalence relation are nonempty, cover $A$, and are pairwise equal or disjoint; conversely every such cover arises from exactly one equivalence relation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equivalence-relation]
justified_by: []
aliases: [lem-partition-theorem]
landmark: false
short: "classes = partition"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "Partition of a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_a_set"
pipeline_run: null
---

## Statement

Let $\sim$ be an equivalence relation on a set $A$, with classes $[a]$ and
quotient set $A/{\sim}$ ([[def-equivalence-relation]]). Then:

1. $a \in [a]$ for every $a \in A$; hence every class is nonempty and the classes
   cover $A$, that is, the union of the members of $A/{\sim}$ is $A$;
2. $a \sim b$ if and only if $[a] = [b]$;
3. for all $a, b \in A$, either $[a] = [b]$ or $[a] \cap [b] = \varnothing$.

Conversely, call a set $P$ of subsets of $A$ a **partition** of $A$ when every
member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of
the members of $P$ is $A$. For such a $P$ define $a \sim_P b$ to mean that some
$B \in P$ contains both $a$ and $b$. Then $\sim_P$ is an equivalence relation on
$A$ whose quotient set is exactly $P$, and it is the **only** equivalence
relation on $A$ whose quotient set is $P$.

## Facts & Assumptions

**Given:** An equivalence relation $\sim$ on a set $A$, with $[a] = \{ b \in A : a \sim b \}$ and $A/{\sim} = \{ [a] : a \in A \}$ ([[def-equivalence-relation]]); and, for the converse, a partition $P$ of $A$ in the sense stated above.

[L1] Reflexivity: $a \sim a$ for every $a \in A$ ([[def-equivalence-relation]]).

[L2] Symmetry: $a \sim b$ implies $b \sim a$ ([[def-equivalence-relation]]).

[L3] Transitivity: $a \sim b$ and $b \sim c$ imply $a \sim c$ ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 For every $a \in A$ reflexivity gives $a \sim a$, that is $a \in [a]$; so each class is nonempty, each class is a subset of $A$ by construction, and each $a \in A$ lies in the class $[a]$, whence the union of the members of $A/{\sim}$ is exactly $A$. This is claim 1. [L1, given]

1.2 Suppose $a \sim b$. If $c \in [b]$ then $b \sim c$, so $a \sim c$ by transitivity, so $c \in [a]$; thus $[b] \subseteq [a]$. Symmetry gives $b \sim a$, and the same argument with $a$ and $b$ interchanged gives $[a] \subseteq [b]$; hence $[a] = [b]$. [L2, L3, given]

1.3 Every member of $P$ is nonempty, distinct members of $P$ are disjoint, and the union of $P$ is $A$; consequently each $a \in A$ lies in at least one $B \in P$, and in only one, since two members containing $a$ are not disjoint and therefore are not distinct. Write $B_a$ for that unique member. [given]

2.1 Suppose $[a] = [b]$. By step 1.1, $b \in [b] = [a]$, which says $a \sim b$. Together with step 1.2 this is claim 2. [step 1.1, step 1.2]

2.2 Suppose $[a] \cap [b] \ne \varnothing$ and pick $c$ in the intersection, so $a \sim c$ and $b \sim c$. Symmetry gives $c \sim b$, and transitivity then gives $a \sim b$, so $[a] = [b]$ by step 1.2. Hence for any $a, b$ either the classes are disjoint or they are equal, which is claim 3. [step 1.2, L2, L3, choose]

2.3 $\sim_P$ is reflexive, since $a \in B_a$ gives $a \sim_P a$; it is symmetric, since the defining condition is symmetric in $a$ and $b$; and it is transitive, for if $a, b \in B$ and $b, c \in B'$ with $B, B' \in P$, then $b \in B \cap B'$, so $B$ and $B'$ are not disjoint and hence not distinct, giving $B = B'$ and $a, c \in B$. So $\sim_P$ is an equivalence relation on $A$. [step 1.3, given]

3.1 Fix $a \in A$ and write $[a]_P$ for its class under $\sim_P$. If $b \in [a]_P$ then some $B \in P$ contains $a$ and $b$, and $B = B_a$ by the uniqueness in step 1.3, so $b \in B_a$; conversely if $b \in B_a$ then $B_a$ contains both $a$ and $b$, so $b \in [a]_P$. Hence $[a]_P = B_a$. [step 1.3, step 2.3]

4.1 Every class of $\sim_P$ is a member of $P$ by step 3.1, and every $B \in P$ is nonempty, so choosing $a \in B$ gives $B = B_a = [a]_P$, a class; therefore the quotient set of $\sim_P$ is exactly $P$. [step 1.3, step 3.1, choose]

4.2 Uniqueness. Let $\approx$ be any equivalence relation on $A$ whose quotient set is $P$, and fix $a \in A$. Its class $[a]_\approx$ lies in $P$ and contains $a$ by step 1.1 applied to $\approx$, so $[a]_\approx = B_a$ by the uniqueness in step 1.3. Then $a \approx b$ holds exactly when $b \in [a]_\approx = B_a$, which by step 3.1 holds exactly when $a \sim_P b$; so $\approx$ and $\sim_P$ relate the same pairs and are equal as subsets of $A \times A$. [step 1.1, step 1.3, step 3.1]

5.1 Claims 1, 2 and 3 are steps 1.1, 2.1 and 2.2; the converse is steps 2.3, 4.1 and 4.2. [step 1.1, step 2.1, step 2.2, step 2.3, step 4.1, step 4.2] ∎

## Remarks

- Claim 2 is the fact used constantly in practice: an equation between classes may always be replaced by a relation between representatives, and conversely. Claim 3 is what makes a quotient set behave like a set of disjoint boxes.

- The converse half is what licenses building an equivalence relation by describing its classes rather than its pairs. The uniqueness clause matters: it says that no information is lost either way, so a partition and an equivalence relation are interchangeable descriptions of the same structure.
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

