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

## Target item — `cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets`

This is the item you must refute. Its full file follows, frontmatter included.

````markdown
---
id: cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets
kind: counterexample
title: "Sets $a$ and $b$ with $\\mathcal{P}(a) \\cup \\mathcal{P}(b) \\subsetneq \\mathcal{P}(a \\cup b)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-power-set, prop-basic-properties-of-the-power-set, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "power set of a union"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathcal{P}(a) \cup \mathcal{P}(b) = \mathcal{P}(a \cup b)$
for all sets $a$ and $b$. The witness is $a := \{\varnothing\}$ and
$b := \{\{\varnothing\}\}$, for which the inclusion from left to right is proper:
$a \cup b$ is a subset of $a \cup b$, so it lies in the right-hand side, but it
is a subset of neither $a$ nor $b$.

## Facts & Assumptions

**Given:** $a := \{\varnothing\}$ and $b := \{\{\varnothing\}\}$.

[L1] $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$ ([[prop-basic-properties-of-the-power-set]]).

[L2] The inclusion $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$ is an equality if and only if $a \subseteq b$ or $b \subseteq a$ ([[prop-basic-properties-of-the-power-set]]).

[L3] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L4] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L5] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L6] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L7] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 Neither of the two sets is included in the other. The only element of $a$ is $\varnothing$ and the only element of $b$ is $\{\varnothing\}$, and these differ because $\{\varnothing\}$ has an element while $\varnothing$ has none; so $\varnothing \in a$ with $\varnothing \notin b$, and $\{\varnothing\} \in b$ with $\{\varnothing\} \notin a$. [L4, L5, L7]

2.1 The general inclusion holds, and it is an equality exactly when one of the two sets is included in the other; by step 1.1 that fails here, so the inclusion is proper. [L1, L2, step 1.1]

3.1 The witnessing element is $a \cup b$ itself: it is a subset of $a \cup b$, hence an element of $\mathcal{P}(a \cup b)$, whereas $a \cup b \subseteq a$ would force $b \subseteq a$ and $a \cup b \subseteq b$ would force $a \subseteq b$, both excluded by step 1.1; so $a \cup b$ is in neither $\mathcal{P}(a)$ nor $\mathcal{P}(b)$. [L3, L4, L6, L8, step 1.1, step 2.1] ∎
````

## Declared dependencies of `cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets`

`deps:` ["def-power-set","prop-basic-properties-of-the-power-set","def-union-of-a-set-and-binary-union","lem-unions-and-intersections-of-small-families","def-unordered-pair-and-singleton","thm-the-empty-set-exists-and-is-unique","def-subset-and-proper-subset"]

## Full text of every item it cites

Each cited item is reproduced in full below. If a fact in the target
misrepresents one of these, that is a finding. If a cited item genuinely
supports the step, say so rather than alleging weakness.

### `def-power-set` — The power set $\\mathcal{P}(x) = \\{\\, z : z \\subseteq x \\,\\}$

````markdown
---
id: def-power-set
kind: definition
title: "The power set $\\mathcal{P}(x) = \\{\\, z : z \\subseteq x \\,\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-power-set-of-a-set-is-a-set, def-subset-and-proper-subset]
justified_by: []
aliases: [def-powerset]
landmark: true
short: "power set"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ be a set. By [[lem-the-power-set-of-a-set-is-a-set]] there is exactly one
set whose elements are precisely the subsets of $x$
([[def-subset-and-proper-subset]]); it is the **power set** of $x$, written
$\mathcal{P}(x)$. Thus $z \in \mathcal{P}(x)$ holds if and only if
$z \subseteq x$, and in the class notation of the page,

$$\mathcal{P}(x) = \{\, z : z \subseteq x \,\}.$$

## Remarks

- **Two axioms, not one.** The elements of $\mathcal{P}(x)$ are pinned down by
  [[def-axiom-of-power-set]] together with
  [[def-axiom-schema-of-separation]], because the axiom is assumed here only in
  its implication form. [[rem-which-axiom-each-construction-uses]] keeps that
  cost visible.

- **The power set is never empty.** $\varnothing \subseteq x$ always holds, so
  $\varnothing \in \mathcal{P}(x)$ for every $x$; in particular
  $\mathcal{P}(\varnothing) = \{\varnothing\}$ rather than $\varnothing$. That
  and the other basic identities are
  [[prop-basic-properties-of-the-power-set]].
````

### `prop-basic-properties-of-the-power-set` — $\\mathcal{P}(\\varnothing) = \\{\\varnothing\\}$; $\\varnothing \\in \\mathcal{P}(a)$ and $a \\in \\mathcal{P}(a)$; $a \\subseteq b$ if and only if $\\mathcal{P}(a) \\subseteq \\mathcal{P}(b)$; $\\bigcup \\mathcal{P}(a) = a$; $\\bigcap \\mathcal{P}(a) = \\varnothing$; and $\\mathcal{P}(a \\cap b) = \\mathcal{P}(a) \\cap \\mathcal{P}(b)$ while only $\\mathcal{P}(a) \\cup \\mathcal{P}(b) \\subseteq \\mathcal{P}(a \\cup b)$ holds

````markdown
---
id: prop-basic-properties-of-the-power-set
kind: proposition
title: "$\\mathcal{P}(\\varnothing) = \\{\\varnothing\\}$; $\\varnothing \\in \\mathcal{P}(a)$ and $a \\in \\mathcal{P}(a)$; $a \\subseteq b$ if and only if $\\mathcal{P}(a) \\subseteq \\mathcal{P}(b)$; $\\bigcup \\mathcal{P}(a) = a$; $\\bigcap \\mathcal{P}(a) = \\varnothing$; and $\\mathcal{P}(a \\cap b) = \\mathcal{P}(a) \\cap \\mathcal{P}(b)$ while only $\\mathcal{P}(a) \\cup \\mathcal{P}(b) \\subseteq \\mathcal{P}(a \\cup b)$ holds"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-power-set, def-subset-and-proper-subset, lem-basic-laws-of-inclusion, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, thm-the-empty-set-exists-and-is-unique, def-unordered-pair-and-singleton, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "basic properties of the power set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
pipeline_run: null
---

## Statement

For all sets $a$ and $b$:

- (i) $\mathcal{P}(\varnothing) = \{\varnothing\}$;
- (ii) $\varnothing \in \mathcal{P}(a)$ and $a \in \mathcal{P}(a)$;
- (iii) $a \subseteq b$ if and only if $\mathcal{P}(a) \subseteq \mathcal{P}(b)$;
- (iv) $\bigcup \mathcal{P}(a) = a$;
- (v) $\bigcap \mathcal{P}(a) = \varnothing$;
- (vi) $\mathcal{P}(a \cap b) = \mathcal{P}(a) \cap \mathcal{P}(b)$;
- (vii) $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$;
- (viii) the inclusion in (vii) is an equality if and only if $a \subseteq b$ or $b \subseteq a$.

## Facts & Assumptions

**Given:** sets $a$ and $b$.

[L1] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L2] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L3] $\varnothing \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L4] $x \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L5] If $x \subseteq y$ and $y \subseteq z$ then $x \subseteq z$ ([[lem-basic-laws-of-inclusion]]).

[L6] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L7] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L8] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L9] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L10] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L11] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L12] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $z \in \mathcal{P}(\varnothing)$ holds exactly when $z \subseteq \varnothing$, that is, when every element of $z$ lies in $\varnothing$; since $\varnothing$ has no elements this says $z$ has no elements, hence $z = \varnothing$. So the elements of $\mathcal{P}(\varnothing)$ are exactly $\varnothing$, and $\mathcal{P}(\varnothing) = \{\varnothing\}$. [L1, L2, L10, L11, L12]

1.2 Claim (ii): $\varnothing \subseteq a$ and $a \subseteq a$, so both $\varnothing$ and $a$ are elements of $\mathcal{P}(a)$. [L1, L3, L4]

1.3 Claim (iii): if $a \subseteq b$ and $z \in \mathcal{P}(a)$, then $z \subseteq a$ and $a \subseteq b$ give $z \subseteq b$, so $z \in \mathcal{P}(b)$; conversely if $\mathcal{P}(a) \subseteq \mathcal{P}(b)$ then $a \in \mathcal{P}(a)$, since $a \subseteq a$, so $a \in \mathcal{P}(b)$, which says $a \subseteq b$. [L1, L2, L4, L5]

1.4 Claim (iv): $z \in \bigcup\mathcal{P}(a)$ holds exactly when $z$ belongs to some element of $\mathcal{P}(a)$, that is, to some $s$ with $s \subseteq a$, and any such $z$ lies in $a$; conversely if $z \in a$ then $z$ lies in the element $a$ of $\mathcal{P}(a)$. So the two sets have the same elements. [L1, L2, L4, L6, L12]

1.5 Claim (v): $\varnothing \in \mathcal{P}(a)$, so $\mathcal{P}(a) \neq \varnothing$ and $\bigcap\mathcal{P}(a)$ is defined; an element of it would have to belong to every element of $\mathcal{P}(a)$, in particular to $\varnothing$, which has no elements. So $\bigcap\mathcal{P}(a)$ has no elements and equals $\varnothing$. [L1, L3, L7, L10]

1.6 Claim (vi): $z \in \mathcal{P}(a \cap b)$ holds exactly when every element of $z$ lies in $a \cap b$, that is, lies in $a$ and in $b$; this is exactly $z \subseteq a$ together with $z \subseteq b$, that is, $z \in \mathcal{P}(a)$ and $z \in \mathcal{P}(b)$, which is $z \in \mathcal{P}(a) \cap \mathcal{P}(b)$. [L1, L2, L9, L12]

1.7 Claim (vii): if $z \in \mathcal{P}(a) \cup \mathcal{P}(b)$ then $z \subseteq a$ or $z \subseteq b$; in either case every element of $z$ lies in $a$ or in $b$, hence in $a \cup b$, so $z \in \mathcal{P}(a \cup b)$. [L1, L2, L8]

2.1 Claim (viii): if $a \subseteq b$ then the elements of $a \cup b$ are exactly those of $b$, so $z \subseteq a \cup b$ is equivalent to $z \subseteq b$ and $\mathcal{P}(a \cup b) = \mathcal{P}(b) \subseteq \mathcal{P}(a) \cup \mathcal{P}(b)$, which with the reverse inclusion gives equality; the case $b \subseteq a$ is symmetric. Conversely, if equality holds then $a \cup b \subseteq a \cup b$ puts $a \cup b$ in $\mathcal{P}(a) \cup \mathcal{P}(b)$, so $a \cup b \subseteq a$ or $a \cup b \subseteq b$, and since $b \subseteq a \cup b$ and $a \subseteq a \cup b$ these give $b \subseteq a$ and $a \subseteq b$ respectively. [L1, L2, L4, L5, L8, step 1.7]

3.1 Claims (i) to (viii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 2.1] ∎
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

