# Run `zfc` — staged edits to PUBLISHED content

**STAGED, NOT APPLIED.** The repository is the serving path: an edit to a published
item or page is live the moment it is written, and a published page must never link
to a draft item. Nothing in this file may be applied to disk until the single commit
that publishes pages 5.1–5.4. Beta-zfc-1 wrote §§1–4; Alpha extends this file at
step 6; the orchestrator applies it.

**Classification used throughout**, from the Beta brief §1(f) and `SCHEMA.md` §3
("Pure typography, or adding a citation that changes no claim, does not count"):

- **(i) non-material** — a `deps` entry, or a wikilink that changes no claim. The
  item keeps its existing `verification.audited` / `verification.verified`.
- **(ii) material** — any change to a Definition, Statement, proof, or Remark that a
  judge would have read differently. The stale `verification.judge` block goes, the
  obsolete stamp goes, and the item needs an independent current reading recorded as
  `verification.verified`.

Every "old text" block below was copied from disk during step 2 and is byte-exact as
of the working-tree baseline recorded in `research/zfc-RESUME.md`. If any of these
files changes before the publish commit, re-read it before applying.

---

## 1. Forced by the re-homing (owner decision D2)

### E1 — `items/def-equivalence-relation.md` — CLASS (ii) MATERIAL

Re-homing this item from order 24 to order 5.3 makes three of its Remarks false and
turns five of its wikilinks into forward references. Five separate edits.

**E1a — frontmatter `deps`. Class (i) in isolation, bundled here.**

old
```
deps: []
```
new
```
deps: [def-relation-domain-range-and-field, def-cartesian-product,
       def-properties-of-a-relation-on-a-set, def-power-set, def-function,
       def-axiom-schema-of-separation, def-injection-surjection-bijection]
```
*Justification:* the Definition names $R \subseteq A \times A$
(`def-relation-domain-range-and-field`, `def-cartesian-product`), the three relation
properties (`def-properties-of-a-relation-on-a-set`), "a subset of the power set of
$A$" (`def-power-set`, and `def-axiom-schema-of-separation` for the separation that
makes $A/{\sim}$ a set), and the quotient *map* and its surjectivity (`def-function`,
`def-injection-surjection-bijection`). All seven are earlier on page 5.3 or on page
5.1. This is the graph the page-level Prerequisites section reads.

**E1b — declare the five forward references.** `fwdcheck` raises
`forward-undeclared` for each of them once this item sits at order 5.3, because every
target is homed on `construction-of-r-via-cauchy-sequences` (order 7) or
`construction-of-r-via-dedekind-cuts` (order 8). All five occur only in `## Remarks`,
so they are orientation-only and legal on a definition.

old
```
justified_by: []
aliases: [def-equivalence-class, def-quotient-set]
```
new
```
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
```
*Justification:* required by `tools/fwdcheck.mjs`. The sixth wikilink,
`[[lem-equivalence-classes-partition]]`, becomes an ordinary intra-page link, since
that item moves to page 5.3 as well; it must **not** be declared here
(`forward-same-page`).

**E1c — the Definition cites the relation vocabulary it uses.**

old
```
A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$; we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".
```
new
```
A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$
([[def-relation-domain-range-and-field]], [[def-cartesian-product]]); we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".
```
*Justification:* the clause is the special case of the general definition now
introduced earlier on the same page. Recording the agreement rather than restating it
is `briefs/beta-scaffold.md` §7.

**E1d — the three properties cite the generic definition.** This is the rewiring the
owner asked for in `research/zfc-RESUME.md` §4.

old
```
A binary relation $\sim$ on $A$ is an **equivalence relation** when it is
```
new
```
A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive
on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that
is, when it is
```
*Justification:* the bullet list that follows spells out exactly those three
properties; the sentence now names them and points at the item that defines them
generically. No claim changes.

**E1e — the quotient set and quotient map cite their constructions.**

old
```
a subset of the power set of $A$. The map $\pi : A \to A/{\sim}$ with
$\pi(a) = [a]$ is the **quotient map**; it is surjective by construction.
```
new
```
a subset of the power set of $A$ ([[def-power-set]]). The map
$\pi : A \to A/{\sim}$ ([[def-function]]) with $\pi(a) = [a]$ is the **quotient
map**; it is surjective by construction ([[def-injection-surjection-bijection]]).
```

**E1f — Remark 2 no longer claims the obligation was discharged earlier.** At order
5.3 the two constructions of $\mathbb{Z}$ and $\mathbb{Q}$ come *after* this item, so
"has already discharged" is false.

old
```
- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. This is the obligation the
  library has already discharged case by case for the constructions of
  $\mathbb{Z}$ and $\mathbb{Q}$ ([[lem-int-add-well-defined]],
  [[lem-int-mul-well-defined]], [[lem-rat-ops-well-defined]]); it is stated here
  once, in general.
```
new
```
- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. The general statement of that
  obligation, with the uniqueness of the induced function, is
  [[thm-universal-property-of-the-quotient]]. The constructions of $\mathbb{Z}$
  and of $\mathbb{Q}$ discharge it for their own operations
  ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]],
  [[lem-rat-ops-well-defined]]).
```
*Justification:* removes a positional claim that re-homing falsifies, and points at
the new item that actually states the obligation.
`[[thm-universal-property-of-the-quotient]]` is on page 5.3 later in the item list, so
it is an ordinary intra-page link and must not enter `deps` (that would be a cycle).

**E1g — Remark 3 no longer says the item exists "so late".** At order 5.3 it is
essentially the earliest mathematical content in the library.

old
```
- **Why this item exists so late.** The library has used specific equivalence
  relations from the start: [[lem-int-equivalence]] proves that
  $(a,b) \sim (c,d) \iff a + d = b + c$ is one, and [[lem-rat-equivalence]] does
  the same for the relation defining $\mathbb{Q}$. Each of those items proves the
  three properties for one concrete relation and defines no general notion. The
  general notion is introduced here because the algebra track needs it uniformly:
  cosets, quotient groups, congruence classes and quotient rings are all
  instances, and each would otherwise re-prove the same three lines.
```
new
```
- **Where the general notion is used.** The construction of $\mathbb{Z}$ verifies
  the three properties for the concrete relation
  $(a,b) \sim (c,d) \iff a + d = b + c$ ([[lem-int-equivalence]]), and the
  construction of $\mathbb{Q}$ does the same for its own relation
  ([[lem-rat-equivalence]]). Each of those items settles one relation and defines
  no general notion. Cosets, quotient groups, congruence classes and quotient
  rings are further instances of the definition given here.
```
*Justification:* three falsehoods removed — "so late", "from the start", and the
claim that the general notion is introduced *because* the algebra track needs it,
which no longer describes where it sits.

**E1h — verification.** E1c–E1g are material, so the judge verdict is stale and the
owner-audit date no longer describes the text on disk.

old
```
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
```
new
```
verification:
  precheck: n/a
  verified:
    model: <model of the independent reader>
    verdict: certify
    date: <date of that reading>
    scope: published-rehoming-repair
    delegated_by: owner
```
*Justification:* SCHEMA §3 — "MATERIALLY REWRITTEN INCLUDES A CORRECTION IN REMARKS
… the block goes"; and `CLAUDE.md`'s published-repair protocol — remove the obsolete
owner-audit stamp and record the independent current reading as
`verification.verified`. `scope` is free text and `depcheck` reads only the presence
of `verified`; `published-rehoming-repair` is a new value and is finding F7 below.
The agent that writes the repair must not certify it.

### E2 — `items/lem-equivalence-classes-partition.md` — CLASS (i) NON-MATERIAL

**E2a — `deps` only. No body change.**

old
```
deps: [def-equivalence-relation]
```
new
```
deps: [def-equivalence-relation, def-union-of-a-set-and-binary-union,
       def-intersection-of-a-set-and-binary-intersection, def-power-set,
       def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique]
```
*Justification:* the Statement quantifies over subsets of $A$ and over members of
$\mathcal{P}(A)$, and uses $\bigcup$, $\cap$ and $\varnothing$, all of which now have
items on page 5.1. Recording them keeps the manifest and the authored `deps` in
agreement, which `level-coverage.mjs` compares. No claim changes and no wikilink is
added, so the existing `judge` and `audited` stamps stand.

**No other edit is required.** Its only wikilink is `[[def-equivalence-relation]]`,
which lands on the same page, so no forward reference arises; and its Remarks contain
no positional or scope claim.

### E3 — `items/def-injection-surjection-bijection.md` — CLASS (ii) MATERIAL

Re-homing this item does not create a single forward reference: it contains **no
wikilinks at all**. What re-homing, and page 5.3 itself, falsify is one Remark.

**E3a — frontmatter `deps`.**

old
```
deps: []
```
new
```
deps: [def-function, def-image-and-preimage-under-a-relation]
```

**E3b — the Definition cites the notion of function.**

old
```
Let $A$ and $B$ be sets and let $f : A \to B$ be a function.
```
new
```
Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).
```

**E3c — image and preimage cite the relation-level definition.**

old
```
For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$.
```
new
```
For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).
```

**E3d — the composition Remark points at the item that proves it.**

old
```
  composition of bijections is a bijection. These one-line verifications are used
  silently throughout the library.
```
new
```
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].
```
*Justification:* the Remark currently asserts four unproved facts and says they are
"used silently throughout the library" — a claim about the corpus that nothing checks
and that the new page makes unnecessary. The replacement points at a proved statement
on the same page.

**E3e — the inverse Remark points at the theorem, and records the choice boundary.**

old
```
  is determined rather than selected.
```
new
```
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.
```

**E3f — the "ambient ZFC vocabulary" Remark becomes false and is replaced.**

old
```
- **What this item does and does not do.** Functions, ordered pairs, Cartesian
  products, images and preimages are ambient ZFC vocabulary in this library, on
  the same footing as "subset" and "union": a function $A \to B$ is a set of
  ordered pairs, single valued and total on $A$. This item only fixes the three
  adjectives and the notation used for them. Nothing here is proved, and nothing
  here is assumed beyond the set-theoretic background already in use.
```
new
```
- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
```
*Justification:* "ambient ZFC vocabulary in this library, on the same footing as
'subset' and 'union'" was true when written and is exactly what pages 5.1 and 5.3
falsify — all five notions, and "subset" and "union" as well, are now defined items
earlier in the reading order. This is the published-claim-decay class.

**E3g — verification.** E3b–E3f are material.

old
```
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
```
new
```
verification:
  precheck: n/a
  verified:
    model: <model of the independent reader>
    verdict: certify
    date: <date of that reading>
    scope: published-rehoming-repair
    delegated_by: owner
```
*Justification:* the 2026-07-26 reading was of different text and of a different
page. It has no `judge` block, so nothing else is deleted.

---

## 2. Page composition files (forced by the re-homing)

### E4 — `library/abstract-algebra/monoids-groups-and-subgroups.md` — CLASS (ii)

**E4a — remove the two re-homed ids from the item list.**

old
```
items: [def-equivalence-relation, lem-equivalence-classes-partition,
        def-binary-operation, def-identity-element, lem-identity-unique,
```
new
```
items: [def-binary-operation, def-identity-element, lem-identity-unique,
```

**E4b — remove the page-summary paragraph that describes them.** It survives only as
a description of items no longer on the page, and its first clause ("has used
specific equivalence relations from its first pages … but it has never defined the
general notion") is falsified by page 5.3.

old
```
**Equivalence relations, minted here.** The library has used specific equivalence
relations from its first pages, in the construction of $\mathbb{Z}$ and of
$\mathbb{Q}$, but it has never defined the general notion, so
[[def-equivalence-relation]] does that and
[[lem-equivalence-classes-partition]] proves the partition theorem: the classes
are nonempty, they cover the set, any two are equal or disjoint, and conversely
every partition arises from exactly one equivalence relation. Cosets, quotient
groups, congruence classes and quotient rings on later pages are all instances,
and each would otherwise re-prove the same three lines.

```
new
```
```
(the paragraph and its trailing blank line are deleted; the preceding and following
paragraphs are left untouched and remain separated by exactly one blank line)

*Justification:* a page summary must not describe items that are not on the page, and
`prosecheck` reads page prose. The page's own Prerequisites section will now link
`relations-functions-and-quotients` mechanically, because `lem-coset-partition` and
its neighbours still depend on `def-equivalence-relation`.

### E5 — `library/real-analysis/countability-and-uncountability.md` — CLASS (i)

**E5a — remove the re-homed id from the item list. No prose change.**

old
```
items: [def-injection-surjection-bijection, def-equinumerous,
```
new
```
items: [def-equinumerous,
```
*Justification:* the page summary does not name `def-injection-surjection-bijection`
anywhere, so nothing in the prose becomes false. Checked by grep over the whole file.

### E6 — `library/combinatorics/graphs-walks-and-connectivity.md` — CLASS (ii)

**E6a — the summary attributes `def-equivalence-relation` to the wrong page.**

old
```
The general definition [[def-equivalence-relation]], from the required Binary Operations, Monoids, Groups and Subgroups development, is applied to reachability.
```
new
```
The general definition [[def-equivalence-relation]], from the required Relations, Functions, and Quotients development, is applied to reachability.
```
*Justification:* after re-homing, the named page no longer carries that item. This is
the only page in `library/` outside the two above whose prose names a re-homed id;
verified by `grep -n "equivalence-relation\|equivalence-classes-partition\|def-injection-surjection-bijection" library/*/*.md`.

---

## 3. Foundations items that invoke a ZFC axiom with nothing to cite

These are the edits the owner named in the brief. All are class (i): each adds a
wikilink to an axiom the item **already names in prose**, and changes no claim.

### E7 — `items/def-inductive-set.md` — CLASS (i)

**E7a**
old
```
deps: []
```
new
```
deps: [def-axiom-of-pairing, def-axiom-of-union, def-unordered-pair-and-singleton]
```

**E7b**
old
```
Working in ZFC, for a set $x$ write $x^{+} := x \cup \{x\}$ for its **successor**
(a set, by the axioms of Pairing and Union). A set $I$ is **inductive** when
```
new
```
Working in ZFC, for a set $x$ write $x^{+} := x \cup \{x\}$ for its **successor**
(a set, by the axioms of Pairing and Union, [[def-axiom-of-pairing]] and
[[def-axiom-of-union]]). A set $I$ is **inductive** when
```

**E7c**
old
```
The **Axiom of Infinity** is precisely the assertion that an inductive set
exists.
```
new
```
The **Axiom of Infinity** ([[def-axiom-of-infinity]]) is precisely the assertion
that an inductive set exists.
```
*Justification for E7:* the item already asserts both facts; the edit supplies the
citations that did not exist. E7c is in `## Remarks`, so `def-axiom-of-infinity` is
**not** added to `deps`; E7b is in `## Definition`, so its two targets are.
`def-unordered-pair-and-singleton` is included because $\{x\}$ is used in the
displayed successor.

### E8 — `items/def-natural-numbers.md` — CLASS (i)

**E8a**
old
```
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system]
```
new
```
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
```

**E8b**
old
```
which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity supplies one inductive set to intersect within, and Separation
makes the intersection a set). On $\mathbb{N}$ we take
```
new
```
which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take
```
*Justification:* both axioms are already named in this sentence, inside
`## Definition`, so the citations are load bearing and belong in `deps`.

### E9 — `items/lem-omega-smallest-inductive.md` — CLASS (i), BORDERLINE

**E9a**
old
```
deps: [def-inductive-set]
```
new
```
deps: [def-inductive-set, def-axiom-of-infinity, def-axiom-schema-of-separation,
       def-axiom-of-extensionality]
```

**E9b**
old
```
**Given:** ZFC; in particular the Axiom of Infinity: there exists an inductive set. Write $x^{+} := x \cup \{x\}$. Recall that $I$ inductive means $\varnothing \in I$ and ($x \in I \Rightarrow x^{+} \in I$).
```
new
```
**Given:** ZFC; in particular the Axiom of Infinity ([[def-axiom-of-infinity]]): there exists an inductive set; the Axiom Schema of Separation ([[def-axiom-schema-of-separation]]); and Extensionality ([[def-axiom-of-extensionality]]). Write $x^{+} := x \cup \{x\}$. Recall that $I$ inductive means $\varnothing \in I$ and ($x \in I \Rightarrow x^{+} \in I$).
```
*Justification:* steps 1.1, 1.2 and 3.1 of the existing proof already invoke exactly
these three axioms by name; the `**Given:**` paragraph currently names only one of
them. No proof step, fact label or justification tag changes, so `precheck` is
unaffected and no claim is altered.
**Flagged as borderline:** the Given paragraph is part of `## Facts & Assumptions`,
which a judge reads. Alpha should confirm the class (i) reading at step 6; if Alpha
judges it material, the item's `judge` block (`openai/gpt-5.4`, 2026-07-25) and its
`audited: 2026-07-25` stamp go, and it needs an independent current reading. A
conservative alternative that is unambiguously class (i) is to add only the
`def-axiom-of-infinity` link, leaving the sentence otherwise untouched.

---

## 4. Rewirings the owner's instruction calls for, drafted here

**Amended 2026-08-06, after the second re-home.** The owner extended
`research/zfc-rehomed.json` so that `def-partial-order`, `def-choice-function` and
`def-axiom-of-choice` are also homed on page 5.3, at spec positions 11, 30 and 31.
E10–E12 were drafted while those three still sat on
`order-zorn-and-the-axiom-of-choice` (order 10), so each was re-read against its new
home. Three consequences:

1. **Every `deps` entry proposed below stays legal.** On page 5.3,
   `def-relation-domain-range-and-field` is at 2, `def-properties-of-a-relation-on-a-set`
   at 10, `def-function` at 13, `def-product-of-an-indexed-family` at 29 and
   `def-choice-function` at 30 — each strictly earlier than the item that would cite
   it, so none of these creates an `intra-order` violation or a forward reference.
2. **E11b is now more than a tidy-up.** The sentence it repairs appealed to "the
   definition of the Cartesian product" for an *indexed* product; on page 5.3 the
   product it means is defined twenty-nine positions earlier in the same reading
   order, so the appeal is not merely nameable but local.
3. **Three Remarks became false, because they say "this page".** Re-homing changed
   which page that is. They are staged as E10d and E11c below, and they reclassify
   E10 and E11 from (i) to (ii).

### E10 — `items/def-partial-order.md` — CLASS (ii) MATERIAL (was (i); E10d is the material part)

`research/zfc-RESUME.md` §4 asks that `def-partial-order` and its neighbours cite the
generic relation properties.

**E10a**
old
```
deps: []
```
new
```
deps: [def-properties-of-a-relation-on-a-set, def-relation-domain-range-and-field]
```

**E10b**
old
```
Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:
```
new
```
Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
([[def-relation-domain-range-and-field]]) that is reflexive on $P$, antisymmetric
and transitive ([[def-properties-of-a-relation-on-a-set]]); written out, for all
$x, y, z \in P$:
```

**E10c**
old
```
Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.
```
new
```
Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**; "every two elements are comparable" is the
connex property of [[def-properties-of-a-relation-on-a-set]].
```
*Justification:* the three axioms and the comparability condition are exactly the
generic properties now defined at order 5.3, and naming them is what
`briefs/beta-scaffold.md` §7 requires of a special case of an existing general
notion. The strict order defined lower in the same section is the correspondence of
`thm-reflexive-and-irreflexive-orders-correspond`; a pointer to it is **not** added
here, because that would be a second load-bearing citation in a Definition and the
correspondence is not used by this item. `def-partial-order` carries
`verified` (claude-opus-5, page scope) and `judge` (glm-5.2) blocks; E10a–E10c alone
would leave both standing, and E10d is what makes them stale.

**E10d — three Remarks say "this page", and the re-home changed which page that is.**
On `order-zorn-and-the-axiom-of-choice` every claim below was true. On page 5.3 none
of `lem-extremal-cut-closed-under-f`, `lem-successor-of-extremal`,
`thm-bourbaki-witt`, `thm-zorn`, `thm-zorn-implies-ac`, `def-chain-complete-poset` or
`fs-maximal-is-greatest` is present; they are the forward references the item already
declares. So "the proofs on this page", "the two applications on this page", "not
used on this page" and "every statement below" now name a page that contains none of
them. This is the same defect class as E1f/E1g.

old
```
- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable. Every statement below that concerns maximal elements, chains, or
  upper bounds is interesting precisely because incomparable pairs may exist; in
  a total order most of them collapse to something obvious.
- All three axioms are used essentially in the proofs on this page: reflexivity
```
new
```
- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable. Every statement about maximal elements, chains, or upper bounds
  is interesting precisely because incomparable pairs may exist; in a total
  order most of them collapse to something obvious.
- All three axioms are used essentially in the proofs that rest on this
  definition: reflexivity
```

old
```
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered), but they are not used on this page.
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the concrete order the two applications on this page run in:
```
new
```
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered).
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the concrete order in which the two applications of Zorn's lemma run:
```
*Justification:* each replacement keeps the mathematical content and drops only the
positional claim the re-home falsified. The half-sentence "but they are not used on
this page" is deleted rather than relocated, because restating it for the
order-and-Zorn page would be a survey claim about a page this item no longer sits on,
and the surviving sentence already says everything the reader needs.

> **The last clause of this justification was FALSE, and §12 replaces the text it
> licensed.** It read: *"the two applications of Zorn's lemma" is exact: the two
> named items are precisely those applications.* They are not. `consumers.mjs
> thm-zorn` returns 38 consumers, at least nine of them genuine applications in
> an inclusion order, and `thm-zorn` is not an application of Zorn's lemma at all
> but Zorn's lemma itself, proved from Bourbaki–Witt. Deleting the page bound
> while keeping the definite count is what made a true sentence false. See §12.

**E10e — verification.** E10d is a Remark correction, so under SCHEMA §3 the judge
verdict is stale and the page-scope reading no longer describes the text on disk.

old
```
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
```
new
```
verification:
  precheck: n/a
  verified:
    model: <model of the independent reader>
    verdict: certify
    date: <date of that reading>
    scope: published-rehoming-repair
    delegated_by: owner
```

**E10f — OPTIONAL, for the orchestrator or Alpha to decide; not recommended
unilaterally by this Beta.** `thm-reflexive-and-irreflexive-orders-correspond` now
sits at position 12, immediately after this item, and its clause (vi) proves that the
strict order defined here is exactly the relation $\le \setminus \Delta_P$ that the
theorem's first assignment produces. A pointer from this Definition to that theorem
would be the reciprocal half of the dictionary, and on page 5.3 it would be an
ordinary same-page link rather than the cross-page citation E10's justification
declined.

old
```
The associated **strict order** is defined by
```
new
```
The associated **strict order** is defined by
([[thm-reflexive-and-irreflexive-orders-correspond]] identifies it with
$\le \setminus \Delta_P$)
```
*Argument against, which is why this is staged as optional:* E10's own justification
declined exactly this pointer, on the ground that a Definition should not carry a
second load-bearing citation for a correspondence it does not use. That reasoning is
unchanged by the re-home; what changed is only the distance. The agreement is already
recorded from both other sides — in the theorem's Statement and Remarks, and in the
`def-properties-of-a-relation-on-a-set` dictionary — so **declining E10f loses
nothing**, and applying it would enlarge a material edit to a published Definition.
Recommendation: decline unless Alpha wants the reciprocal pointer for symmetry.

### E11 — `items/def-axiom-of-choice.md` — CLASS (ii) MATERIAL (was (i); E11c is the material part)

**E11a**
old
```
deps: [def-choice-function]
```
new
```
deps: [def-choice-function, def-product-of-an-indexed-family, def-cartesian-product]
```

**E11b**
old
```
An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
```
new
```
An equivalent formulation, immediate from the definition of the product of an
indexed family ([[def-product-of-an-indexed-family]]), is that a product of
nonempty sets is nonempty: if $X_i \ne \emptyset$ for every $i \in I$, then
$\prod_{i \in I} X_i \ne \emptyset$.
```
*Justification:* the sentence appeals to "the definition of the Cartesian product",
which the library did not contain; it now does, and the object the sentence actually
means is the indexed product. Naming the right one changes no claim.

**E11c — the last Remark says "this page" and names an item that is not on it.**
`lem-finite-choice` is homed on `order-zorn-and-the-axiom-of-choice`; this item is
now homed on page 5.3, which contains no result that invokes AC at all. So "Everything
on this page after [[lem-finite-choice]]" names a page the cited item is not on, and
scopes the flagging promise to a page where there is nothing to flag.

old
```
- "ZFC" abbreviates ZF together with AC. Everything on this page after
  [[lem-finite-choice]] that invokes AC is flagged as doing so, because later
  pages need to state honestly which of their theorems are choice-free; that
  bookkeeping is the purpose of [[rem-choice-strengths]].
```
new
```
- "ZFC" abbreviates ZF together with AC. A result that invokes AC is flagged as
  doing so where it is stated, because a page needs to say honestly which of its
  theorems are choice-free; that bookkeeping is the purpose of
  [[rem-choice-strengths]]. No proof on the page that states this axiom uses it,
  and [[rem-where-a-choice-principle-would-be-needed]] is that page's ledger.
```
*Justification:* the promise is kept, and its scope is corrected from a page that no
longer holds the material to the practice the library actually follows. The added
link is to a page-5.3 item at position 39, so it is an ordinary same-page link and
not a forward reference; it is a **draft** item until the publish commit, which is
why §6 rule 1 governs this edit as it governs all the others. `lem-finite-choice`
remains a declared forward reference of this item and is still cited by the Remark
above it, so no `forward_refs` entry is dropped.

**E11d — verification.** E11c is a Remark correction, so the same SCHEMA §3 treatment
as E1h and E10e applies.

old
```
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
```
new
```
verification:
  precheck: n/a
  verified:
    model: <model of the independent reader>
    verdict: certify
    date: <date of that reading>
    scope: published-rehoming-repair
    delegated_by: owner
```

### E12 — `items/def-choice-function.md` — CLASS (i)

**E12a**
old
```
deps: []
```
new
```
deps: [def-function, def-indexed-union-and-intersection, def-power-set,
       def-set-difference-and-symmetric-difference]
```

**E12b**
old
```
Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function
```
new
```
Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function ([[def-function]])
```

**E12c**
old
```
Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ of nonempty subsets of $X$.
```
new
```
Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ ([[def-power-set]],
[[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.
```
*Justification:* the displayed formula uses $g : \mathcal{F} \to \bigcup\mathcal{F}$
and the second paragraph uses $\mathcal{P}(X) \setminus \{\emptyset\}$; all three
notions now have items. `def-indexed-union-and-intersection` is listed in `deps` for
$\bigcup\mathcal{F}$ in the displayed formula; if the orchestrator prefers the
unindexed operation there, use `def-union-of-a-set-and-binary-union` instead — the
displayed $\bigcup \mathcal{F}$ is the union of a set, not of an indexed family, so
**that is the better choice** and is the form recommended here.

Corrected E12a
```
deps: [def-function, def-union-of-a-set-and-binary-union, def-power-set,
       def-set-difference-and-symmetric-difference]
```

**Re-read after the second re-home (2026-08-06): no further edit is needed here, and
the classification stays (i).** Every Remark of this item is scope-free — its three
bullets talk about choice functions, not about a page — and its three wikilinks
(`lem-finite-choice`, `ex-canonical-choice-on-naturals`, `ex-russells-socks`) are
forward references from position 30 on page 5.3 exactly as they were from order 10,
so the declared `forward_refs` list is unchanged and `fwdcheck` is clean. `def-function`,
the one new dependency that is not on page 5.1, sits at position 13 on the same page,
seventeen positions earlier, so E12b introduces no forward reference either. The
`verified` block (gpt-5.6-sol-codex-subscription, `published-audit`, 2026-08-03)
therefore stands.

**The agreement this item now has with page 5.3, recorded where the library reads
it.** A choice function for $\mathcal{F}$ is exactly an element of the product of the
members of $\mathcal{F}$ — index $\mathcal{F}$ by itself with $\Delta_{\mathcal{F}}$
and unfold `def-product-of-an-indexed-family` — which is why the two formulations in
`def-axiom-of-choice` are one statement. That agreement is recorded in the **draft**
item `rem-where-a-choice-principle-would-be-needed`, not staged as an edit here, so
that no published Definition acquires a Remark it does not need.

---

## 5. Queue for Alpha at step 6 — identified, deliberately not drafted

Each of these genuinely invokes something pages 5.1/5.3 now supply, and each is a
one-wikilink class (i) edit. They are **not** drafted as exact edits here, because
the target items do not exist on disk yet and an exact-old-text block written before
step 5 would be a guess about text this Beta has not authored. Alpha should draft them
at step 6, after the items are authored and their ids are fixed.

| file | what it invokes with nothing to cite | suggested target |
|---|---|---|
| `items/thm-transfinite-recursion.md` | Separation, Replacement | `def-axiom-schema-of-separation`, `def-axiom-schema-of-replacement` |
| `items/lem-recursion-on-the-ordinals.md` | Replacement ("the cost is unchanged — Replacement") | `def-axiom-schema-of-replacement` |
| `items/thm-burali-forti.md` | Separation | `def-axiom-schema-of-separation` |
| `items/thm-hartogs.md` | Replacement, Power Set | `def-axiom-schema-of-replacement`, `def-axiom-of-power-set` |
| `items/thm-mostowski-collapse.md` | Replacement | `def-axiom-schema-of-replacement` |
| `items/lem-well-order-comparability.md` | Separation | `def-axiom-schema-of-separation` |
| `items/lem-cardinality-of-a-well-orderable-set.md` | Separation, Replacement | both |
| `items/thm-schroder-bernstein.md` | Replacement | `def-axiom-schema-of-replacement` |
| `items/cor-the-aleph-and-beth-hierarchies-are-well-defined.md` | Replacement | `def-axiom-schema-of-replacement` |
| `items/def-infinite-cardinal-sum-and-product.md` | Replacement, indexed families | `def-axiom-schema-of-replacement`, `def-indexed-family` |
| `items/def-ordinal.md` | Foundation | `def-axiom-of-foundation` |
| `items/fs-transfinite-induction-needs-choice.md` | Replacement | `def-axiom-schema-of-replacement` |
| `items/def-chain.md` | "any two of its elements are comparable" | `def-properties-of-a-relation-on-a-set` (connex) |
| `items/def-well-order.md` | total order, strict form | `def-properties-of-a-relation-on-a-set`, `thm-reflexive-and-irreflexive-orders-correspond` |
| `items/def-order-isomorphism.md` | bijection, ordered pairs | `def-injection-surjection-bijection` (already re-homed), `def-ordered-pair` |
| `items/def-function-space.md` | $F^{X}$ as the set of functions $X \to F$ | `def-the-set-of-functions-from-one-set-to-another`, and a Remark recording the notation agreement (`briefs/beta-scaffold.md` §7) |
| `items/def-product-topology.md`, `items/thm-product-universal-property.md` | arbitrary products of sets | `def-product-of-an-indexed-family` |
| `items/def-cardinal.md`, `items/def-equinumerous.md` | bijections, functions | `def-function` |
| `items/rem-choice-ledger.md` | the product formulation of AC | `def-product-of-an-indexed-family` |

**Not on the queue, deliberately.** The ~200 items that merely *use* $\cup$, $\cap$,
$\varnothing$, $\subseteq$, $\mathcal{P}$, $(a,b)$ or "function" without naming an
axiom. Wiring every one of them to page 5.1 would add several thousand `deps` edges,
would put the whole library's Prerequisites section behind two new pages, and would
change no claim anywhere. The rule applied here is: **stage an edit only where the
published text names something it cannot cite, or states something the new pages
falsify.**

---

## 6. Ordering constraint on applying this file

1. Nothing here is applied until pages 5.1–5.4 are `status: published` in the same
   commit, because every new target is a draft item until then and a published item
   linking a draft one is a broken page for the public.
2. Within that commit, E4a and E5a (removing the ids from the two published page
   files) must land **together with** the new page files that list them, or three
   published items are momentarily homed nowhere (`depcheck` `orphan`).
3. `research/plan-spec.json` needs two further orchestrator edits at splice time,
   which are **not** file edits to published content and so are not staged here:
   remove the three re-homed ids from the `monoids-groups-and-subgroups` and
   `countability-and-uncountability` page entries, and add
   `relations-functions-and-quotients` to `countability-and-uncountability`'s
   `requires`. With exactly those two changes and this batch spliced,
   `validate-plan.mjs` reports only the three `dup-id` errors that read the two
   published page files, and those clear when E4a and E5a are applied.
4. After applying, re-run `depcheck`, `fwdcheck`, `extcheck`, `citecheck`,
   `rendercheck` and `prosecheck` over the whole corpus, not only over the changed
   files: E1b changes a forward-reference ledger entry, and E4b and E6a change page
   prose that `prosecheck` reads.

---

## 7. Alpha's extension — the spine roots (owner rule 2), step 6c

**Added by Alpha-zfc, 2026-08-06.** Everything in this section is **STAGED, NOT
APPLIED**, on the same terms as §§1–4. Every "old text" block below was copied
from disk during step 6 and verified byte-exact and unique within its file by
`staged-edit-check` (see §8).

### What was measured, and why these four items and not two hundred

The owner's rule (2) is that direct consequences of ZFC are the foundation of
almost everything else and that a reader should be able to see it. The
reader-facing mechanism is the page-level **Prerequisites** section, computed
from item `deps`. So the question is mechanical: how many of the 2,859 items
transitively reach an item on pages 5.1–5.4 through `deps`?

Measured from disk at step 6, against the current working tree:

| state | grounded | not reaching |
|---|---|---|
| current disk | 2,169 | 690 |
| + `def-binary-operation`, `def-field` (E13, E14) | 2,624 | 235 |
| + Beta's E7a/E8a/E9a (already staged in §3) | 2,737 | 122 |
| + `def-peano-system`, `def-filter` (E15, E16) | **2,742** | **117** |

Of the 117 that still do not reach, **116 are the `not-proved-here` catalogue**
(`rem-*`, orders 1–5), which is correct: those items carry no proof at all and
rest on nothing in the library by construction. The single substantive remainder
is `lem-pasted-squares-commute`, and it is **deliberately left ungrounded** — it
is a diagram-chase over arbitrary objects and morphisms with associative
composition, invokes no set-theoretic construction anywhere in its text, and
wiring it to page 5.1 would assert an edge its mathematics does not have.

**Roots only.** Four edits carry 2,742 items. The ~200 items that merely *use*
$\cup$, $\varnothing$ or "function" without naming something they cannot cite
are not staged, for the reason §5 already gives: they would add thousands of
redundant `deps` edges, which is exactly what `redundant-prereq` exists to
discourage, and they would make Prerequisites and the flowchart unreadable.

### E13 — `items/def-binary-operation.md` — CLASS (i)

804 items rest on this one, and it carries `deps: []` while its first sentence
defines the notion as a function on a Cartesian product. Both are now in the
library.

**E13a**
old
```
deps: []
```
new
```
deps: [def-function, def-cartesian-product]
```

**E13b**
old
```
A **binary operation** on a set $S$ is a function

$$* \;:\; S \times S \longrightarrow S,$$
```
new
```
A **binary operation** on a set $S$ is a function ([[def-function]]) whose domain
is the Cartesian product $S \times S$ ([[def-cartesian-product]]),

$$* \;:\; S \times S \longrightarrow S,$$
```
*Justification:* no claim changes. `def-function` fixes $f : A \to B$ to mean a
function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$,
so "whose domain is the Cartesian product $S \times S$" is exactly what the
displayed arrow already asserts, and `def-cartesian-product` is what $S \times S$
denotes. Class (i): the `judge` and `audited` stamps stand.

### E14 — `items/def-field.md` — CLASS (i) — **OWNER DECISION AT STEP 10**

1,921 items rest on `def-field`, and `def-ordered-field` (1,845) and
`def-complete-ordered-field` (1,782) descend from it, so this single edit grounds
the entire real-number spine.

**It is flagged for the owner, not staged as settled.** `def-field` lives on
`foundations-of-the-real-numbers` (order 9), which the run record records as
**deliberately axiomatic** about $\mathbb{R}$: the page's whole method is to
assume a complete ordered field and derive, rather than to construct. Naming
`def-function` and `def-cartesian-product` inside its Definition is a small step
toward set-theoretic grounding on a page that chose not to have any. Alpha judges
the edit correct and worth making — "binary operation" is otherwise a term the
page uses with nothing at all to point at — but the page's editorial character is
the owner's call, not Alpha's.

**E14a**
old
```
deps: []
```
new
```
deps: [def-function, def-cartesian-product]
```

**E14b**
old
```
A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:
```
new
```
A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) — each a function $F \times F \to F$ ([[def-function]],
[[def-cartesian-product]]) — and two distinguished elements $0 \ne 1$ of $F$,
satisfying:
```
*Justification:* "binary operation on $F$" means precisely a function
$F \times F \to F$; the edit spells out the standard meaning the page already
intends and adds no hypothesis. It cannot cite `def-binary-operation`, which is
at order 24 and would be a forward reference.

### E15 — `items/def-peano-system.md` — CLASS (i)

**E15a**
old
```
deps: []
```
new
```
deps: [def-function, def-subset-and-proper-subset]
```

**E15b**
old
```
A **Peano system** is a triple $(N, 0, \sigma)$ consisting of a set $N$, a
distinguished element $0 \in N$, and a **successor function**
$\sigma : N \to N$, satisfying the three **Peano axioms**:
```
new
```
A **Peano system** is a triple $(N, 0, \sigma)$ consisting of a set $N$, a
distinguished element $0 \in N$, and a **successor function**
$\sigma : N \to N$ ([[def-function]]), satisfying the three **Peano axioms**:
```

**E15c**
old
```
- **(P3) Induction.** For every subset $S \subseteq N$, if $0 \in S$ and
  $\sigma(n) \in S$ whenever $n \in S$, then $S = N$.
```
new
```
- **(P3) Induction.** For every subset $S \subseteq N$
  ([[def-subset-and-proper-subset]]), if $0 \in S$ and
  $\sigma(n) \in S$ whenever $n \in S$, then $S = N$.
```
*Justification:* both notions are named in the Definition and neither had a
target. No claim changes. This also grounds `cex-successor-injective-necessary`,
which deps `def-peano-system` and nothing else.

### E16 — `items/def-filter.md` — CLASS (i)

**E16a**
old
```
deps: []
```
new
```
deps: [def-power-set, def-subset-and-proper-subset,
       def-intersection-of-a-set-and-binary-intersection]
```

**E16b**
old
```
Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ is a **filter on $X$** when it satisfies:
```
new
```
Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ ([[def-power-set]], [[def-subset-and-proper-subset]]) is a **filter on $X$**
when it satisfies:
```

**E16c**
old
```
- **(F3)** *closure under pairwise intersection*: if $A, B \in \mathcal{F}$ then
  $A \cap B \in \mathcal{F}$;
```
new
```
- **(F3)** *closure under pairwise intersection*
  ([[def-intersection-of-a-set-and-binary-intersection]]): if
  $A, B \in \mathcal{F}$ then $A \cap B \in \mathcal{F}$;
```
*Justification:* the Definition already uses $\mathcal{P}(X)$, $\subseteq$ and
$\cap$ with nothing to cite. This also grounds `def-filter-base` and
`lem-filter-base-generates`, which reach ZFC through `def-filter`.

---

## 8. Alpha's extension — two published claims the new pages FALSIFY

These are not wikilink additions. They are claims that were **true when written**
and that pages 5.1–5.4 make **false**, which no gate can see: `prosecheck` reads
positional claims against the spec, not mathematical scope claims about the
corpus. Both are CLASS (ii) MATERIAL.

### E17 — `items/def-ordinal.md` — CLASS (ii) MATERIAL

`def-ordinal` asserts **"This library does not assume Foundation anywhere."**
Page 5.1 states the Axiom of Foundation as one of the ten axioms of the system
(`def-axiom-of-foundation`), proves `thm-foundation-excludes-membership-cycles`
from it, and uses that in `cor-the-successor-operation-is-injective`. The
sentence is false the moment pages 5.1–5.4 publish.

The *design* point the Remark makes is still right and worth keeping: writing the
least-element property into the definition is what makes `def-ordinal` itself
independent of Foundation. Only the corpus-wide claim is wrong.

**E17a**
old
```
deps: [def-well-order, def-natural-numbers, lem-nat-transitive-irreflexive]
```
new
```
deps: [def-well-order, def-natural-numbers, lem-nat-transitive-irreflexive,
       def-axiom-of-foundation]
```

**E17b**
old
```
- **The Axiom of Foundation is not used.** Some treatments define an ordinal as a
  transitive set *linearly* ordered by $\in$, which is equivalent to the
  definition above only in the presence of Foundation, since Foundation is what
  supplies the least element. This library does not assume Foundation anywhere,
  so the least element property is written into the definition instead.
```
new
```
- **The Axiom of Foundation is not used here.** Some treatments define an ordinal
  as a transitive set *linearly* ordered by $\in$, which is equivalent to the
  definition above only in the presence of Foundation
  ([[def-axiom-of-foundation]]), since Foundation is what supplies the least
  element. The least element property is written into the definition instead, so
  nothing on this page depends on Foundation even though the library does state
  it as an axiom of ZFC.
```
*Justification:* the replacement keeps the entire mathematical content — the
inequivalence of the two definitions without Foundation, and the reason the least
element clause is present — and corrects only the corpus-wide scope claim. The
title of the bullet is narrowed from "is not used" to "is not used here", which is
what the item can actually support. `def-ordinal` carries a `judge` block and an
`audited` stamp; both go, and the item needs an independent current reading
recorded as `verification.verified` with `scope: published-rehoming-repair`.

### E18 — `items/def-order-isomorphism.md` — CLASS (ii) MATERIAL

`def-order-isomorphism` asserts that **"Functions, bijections, ordered pairs and
Cartesian products are ambient ZFC vocabulary in this library, exactly as
'subset' and 'union' are."** After pages 5.1 and 5.3 every one of those five
notions is a defined item with a proof-bearing development, so "ambient" — meaning
assumed rather than built — is exactly what they are no longer. This is the same
defect class the run record already records as knowingly carried on
`def-injection-surjection-bijection` (E3), and it is the second instance.

**E18a**
old
```
deps: [def-partial-order, def-well-order]
```
new
```
deps: [def-partial-order, def-well-order, def-injection-surjection-bijection,
       def-ordered-pair]
```

**E18b**
old
```
- Functions, bijections, ordered pairs and Cartesian products are ambient ZFC
  vocabulary in this library, exactly as "subset" and "union" are. This item
  fixes only the order-theoretic terminology built on top of them.
```
new
```
- Functions, bijections, ordered pairs and Cartesian products are built in this
  library, at [[def-function]], [[def-injection-surjection-bijection]],
  [[def-ordered-pair]] and [[def-cartesian-product]]; "subset" and "union" are
  built alongside them. This item fixes only the order-theoretic terminology on
  top of that vocabulary.
```
*Justification:* the sentence's purpose — telling the reader that this item adds
only order-theoretic language — survives verbatim; only the false claim that the
underlying vocabulary is assumed rather than developed is replaced, and it is
replaced with the exact items that now develop it. Stamps go as for E17.

---

## 9. Verified queue, drafted targets NOT drafted as edits — for the publish commit

Alpha confirmed from disk that each item below names a ZFC axiom in prose with
nothing to cite, and recorded **which section** the mention sits in, because that
decides whether the citation is load-bearing (`## Definition` or a `[A#]`/`[L#]`
fact ⇒ `deps`) or orientation-only (`## Remarks` ⇒ wikilink only). These are all
already transitively grounded through §7, so they are citation-accuracy edits, not
grounding edits, and none is required for owner rule (2).

| file | section of the mention | target | deps? |
|---|---|---|---|
| `thm-transfinite-recursion` | `[A2]` fact + Statement + Remarks | `def-axiom-schema-of-separation`, `def-axiom-schema-of-replacement`, `def-axiom-of-union` | yes |
| `lem-recursion-on-the-ordinals` | Statement + Remarks | `def-axiom-schema-of-replacement` | Remarks only |
| `thm-burali-forti` | `**Given:**` + `[A1]` fact | `def-axiom-schema-of-separation` | yes |
| `thm-hartogs` | `**Given:**` + `[A1]` fact | `def-axiom-of-power-set`, `def-axiom-schema-of-separation`, `def-axiom-of-union`, `def-axiom-schema-of-replacement` | yes |
| `thm-mostowski-collapse` | Statement + `**Given:**` + `[A1]` | `def-axiom-schema-of-replacement`, `def-axiom-of-union` | yes |
| `lem-well-order-comparability` | `[A1]` fact | `def-axiom-schema-of-separation` | yes |
| `lem-cardinality-of-a-well-orderable-set` | `**Given:**` | `def-axiom-schema-of-separation`, `def-axiom-schema-of-replacement` | yes |
| `thm-schroder-bernstein` | proof steps 1.1, 2.1 | `def-axiom-of-power-set`, `def-axiom-schema-of-replacement`, `def-axiom-of-union` | yes |
| `cor-the-aleph-and-beth-hierarchies-are-well-defined` | Statement | `def-axiom-schema-of-replacement` | yes |
| `def-infinite-cardinal-sum-and-product` | `## Definition` | `def-axiom-schema-of-replacement`, `def-axiom-of-union`, `def-axiom-of-power-set`, `def-indexed-family` | yes |
| `fs-transfinite-induction-needs-choice` | `[L2]` fact + refutation step 1.2 | `def-axiom-schema-of-replacement`, `def-axiom-schema-of-separation` | yes |
| `def-chain` | `## Definition` ("any two of its elements are comparable") | `def-properties-of-a-relation-on-a-set` (connex) | yes |
| `def-well-order` | `## Definition` (total order, strict form) | `def-properties-of-a-relation-on-a-set`, `thm-reflexive-and-irreflexive-orders-correspond` | yes |
| `def-function-space` | `## Definition` ($F^{X}$) | `def-the-set-of-functions-from-one-set-to-another` + a §7 notation-agreement Remark | yes |
| `def-product-topology`, `thm-product-universal-property` | `## Definition` / Statement | `def-product-of-an-indexed-family` | yes |
| `def-cardinal`, `def-equinumerous` | `## Definition` | `def-function`, `def-injection-surjection-bijection` | yes |
| `rem-choice-ledger` | `## Remark` | `def-product-of-an-indexed-family` | Remarks only |

**Not staged as exact edits, deliberately.** Each is a published item and an
exact-old-text block is only trustworthy if it is copied at the moment it is
applied; §1's own preamble says so. Twelve of these seventeen touch a
`**Given:**` paragraph or an `[A#]` fact, which is inside `## Facts &
Assumptions` — the public surface a judge reads — so each is at least borderline
material and needs the same stamp treatment as E9, not a blind append. The
publish commit should apply them one at a time with a fresh read.

### A finding for step 10, not an edit

`thm-open-set-algebra-r` carries **`[A1] De Morgan's laws in the ambient set
theory`** as an assumption. Page 5.1 now *proves* De Morgan's laws
(`thm-de-morgan-laws`) for arbitrary sets. Converting that `[A#]` into a real
citation would remove a standing assumption from a published theorem, which is a
strictly better state — but it changes a load-bearing Facts entry on a published
proof and the two statements are not literally identical (page 5.1's is stated
for set difference; `[A1]` is stated for complements relative to $\mathbb{R}$ and
also asserts $\mathbb{R} \setminus (\mathbb{R} \setminus G) = G$). Alpha did not
stage it: it needs a specialisation check and a re-verification of the consuming
proof, which is step-10 work under the owner's eye, not a step-6 wikilink.

---

## 10. H2 — the contract-quote hazard, swept exhaustively

`research/zfc-RESUME.md` records one known hazard: **E10b rewrites the exact
`def-partial-order` sentence that `thm-reflexive-and-irreflexive-orders-correspond`'s
`[L15]` contract quote reproduces byte-for-byte, so `proof-contract --strict`
fails the moment E10b lands** unless that quote is refreshed. Alpha's brief asks
for every *other* staged edit to be checked for the same hazard.

**Swept mechanically, not by eye.** Every `old`/`new` block in this file was
parsed, applied in memory to its target file, and every one of the 491 citation
quotes in `research/zfc-proof-contracts.json` whose `source` is that file was
re-tested against the post-edit section text.

**Result: exactly one hazard, corpus-wide — the known E10b/`[L15]` one.**
55 edit blocks parsed, 50 still applyable and byte-exact on disk, 5 already
applied (E1b, E4a, E4b, E5a, E6a), 0 ambiguous, **1** quote broken. Alpha's own
§7/§8 additions introduce none.

Two things this sweep also establishes, both worth having in writing:

- **E11b does not break `[L14]`.** The RESUME records that the pair-2 reader
  pre-empted the identical hazard there. Verified: `fs-every-surjection-has-a-right-inverse-in-zf`'s
  `[L14]` quote deliberately begins mid-sentence, at *"is that a product of
  nonempty sets is nonempty: …"*, so it sits entirely inside the clause E11b
  leaves alone. The pre-emption works.
- **Every not-yet-applied `old` block is still byte-exact and unique in its
  file.** No staged edit has gone stale since step 2, so §1's "re-read before
  applying" warning has not been triggered by anything so far.

### The exact repair the publish commit must make

After applying **E10b**, refresh `[L15]` in
`research/zfc-batch-1.proof-contracts.json` (never the merged file — H1) and
re-merge. The fact text in
`items/thm-reflexive-and-irreflexive-orders-correspond.md` does **not** change:
it is already a faithful shortening that reproduces the three clauses, and E10b
preserves all three verbatim. Only the recorded `quote` moves.

old quote
```
A **partial order** on $P$ is a binary relation $\le$ on $P$ such that, for all $x, y, z \in P$:
```
new quote
```
A **partial order** on $P$ is a binary relation $\le$ on $P$ ([[def-relation-domain-range-and-field]]) that is reflexive on $P$, antisymmetric and transitive ([[def-properties-of-a-relation-on-a-set]]); written out, for all $x, y, z \in P$:
```

Then re-run, in this order:

```
node tools/merge-proof-contracts.mjs --level zfc research/zfc-proof-contracts.json research/zfc-batch-1.proof-contracts.json
node tools/proof-contract.mjs research/zfc-proof-contracts.json --strict
```

---

## 11. Step 8 — what LANDED on disk, and what is still staged

**Added by Alpha-zfc, 2026-08-06, at build step 8.** Two judge rejections were
adjudicated `confirmed_fatal` against **published** items whose false text was
live on the serving path right now. Under the owner-delegated published-repair
protocol a false claim in live text stops being false today, so a **minimal,
draft-free** repair was applied to disk. Draft-free means: it removes or corrects
the false clause and adds **no wikilink and no `deps` edge to any unpublished
item**, so no published page links to a draft one. The fuller wiring, which does
need the draft targets, stays staged here for the publish commit.

**Do not re-apply an APPLIED block. Do apply every STILL STAGED one.** Every
"old text" block marked APPLIED below is no longer on disk and will not match.

### E10 — `items/def-partial-order.md`

| block | state | note |
|---|---|---|
| E10a | **STILL STAGED** | adds `def-properties-of-a-relation-on-a-set` and `def-relation-domain-range-and-field` to `deps`; both are draft items |
| E10b | **STILL STAGED** | adds two wikilinks to those draft items. **H2 still live:** applying it invalidates `[L15]` of `thm-reflexive-and-irreflexive-orders-correspond`; refresh the quote per §10 |
| E10c | **STILL STAGED** | adds a wikilink to a draft item |
| E10d | **APPLIED 2026-08-06** | exactly as drafted, byte for byte. It adds no wikilink, so it was already draft-free. This was DeepSeek's rejection: four positional claims the re-home falsified |
| E10e | **PARTLY APPLIED** | the stale `verification.judge` (glm-5.2) and the obsolete `verification.verified` (claude-opus-5, `scope: page`, 2026-07-26) are **already removed**; the block now reads `verification:\n  precheck: n/a`. The publish commit must still **add** the replacement `verified` block naming the independent current reader |
| E10f | **STILL STAGED, recommend decline** | unchanged |

### E11 — `items/def-axiom-of-choice.md`

Both judge lanes rejected this item, on two different clauses. Both are repaired.

| block | state | note |
|---|---|---|
| E11a | **STILL STAGED** | adds `def-product-of-an-indexed-family` and `def-cartesian-product` to `deps`; both are draft items |
| E11b | **SUPERSEDED — a draft-free equivalent is APPLIED** | see below |
| E11c | **SUPERSEDED — a draft-free equivalent is APPLIED** | see below |
| E11d | **PARTLY APPLIED** | same as E10e: both stale blocks removed; the publish commit must still add the replacement `verified` block |

**E11b-now (applied).** The false clause was deleted and the symbol glossed
inline, with no link to a draft item. The sentence that `[L14]` of
`fs-every-surjection-has-a-right-inverse-in-zf` quotes byte-for-byte was
preserved intact, and `proof-contract --strict` confirms 62/62 after the edit.

Now on disk:

```
An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.
```

**At the publish commit**, replace the inline gloss with the linked form E11b
intended, since the target is published by then:

old
```
An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.
```
new
```
An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$,
where the product is the one defined at [[def-product-of-an-indexed-family]] and
not the binary [[def-cartesian-product]]. The passage between the two
formulations is written out at [[rem-where-a-choice-principle-would-be-needed]]:
it runs through the family indexed by itself, so it is short but not immediate.
```
*Note the change of claim from the original E11b draft:* E11b still said
"immediate from the definition of the product of an indexed family". That word is
what Sonnet's rejection and this library's own
`rem-where-a-choice-principle-would-be-needed` both contradict, so it is dropped
rather than re-homed. **Keep the quoted sentence's tail byte-identical** — it is
`[L14]`'s contract quote — and re-run `proof-contract --strict` after applying.

**E11c-now (applied, then CORRECTED at step 9 — see §12).** Two false clauses in
the last Remark: the page claim, and the mischaracterisation of
`rem-choice-strengths`. Both gone, with no link to a draft item. The replacement
below introduced a **third** false clause of its own ("the one principle this
library places strictly between ZF and AC") and left the same
mischaracterisation standing at a second site in Remark 1; §12 repairs both.

**The right target existed all along and is PUBLISHED.** DeepSeek's rejection
said the bookkeeping is not what `rem-choice-strengths` is for. It is what
`rem-choice-ledger` is for, whose own first sentence reads *"This item is
bookkeeping, not mathematics: it records what each statement in the
neighbourhood of the Axiom of Choice actually costs, so that later pages can
state honestly which of their theorems are choice-free"* — word for word the
promise this Remark was making. So the repair names the right item rather than
merely deleting the claim, and because `rem-choice-ledger` is published
(`library/foundations/ordinals-and-transfinite-recursion.md`) the link is
draft-free. It is homed far above order 5.3, so it is declared in
`forward_refs`; it sits in a Remark, so it is orientation-only and `fwdcheck`
passes.

Now on disk (`forward_refs` also gained `rem-choice-ledger`):

```
- "ZFC" abbreviates ZF together with AC. A result that invokes AC is flagged as
  doing so where it is stated, because a page needs to say honestly which of its
  theorems are choice-free; that bookkeeping is the purpose of
  [[rem-choice-ledger]]. [[rem-choice-strengths]] carries the narrower question
  of what the ultrafilter lemma costs, the one principle this library places
  strictly between ZF and AC.
```

**At the publish commit**, add the pointer to page 5.3's own choice ledger,
which is a draft item until then:

old
```
  theorems are choice-free; that bookkeeping is the purpose of
  [[rem-choice-ledger]]. [[rem-choice-strengths]] carries the narrower question
```
new
```
  theorems are choice-free; that bookkeeping is the purpose of
  [[rem-choice-ledger]], and no proof on the page that states this axiom uses
  AC at all — [[rem-where-a-choice-principle-would-be-needed]] is that page's
  own ledger. [[rem-choice-strengths]] carries the narrower question
```
*Do NOT restore E11c's original wording* — it kept "that bookkeeping is the
purpose of [[rem-choice-strengths]]", which is the exact clause DeepSeek refuted.
`rem-where-a-choice-principle-would-be-needed` is on page 5.3, so at publish it
is an ordinary same-page link and needs no `forward_refs` entry.

### E19 — the axiom count, a THIRD site R1 blocks at step 8. **REQUIRED.**

DeepSeek rejected `rem-which-axiom-each-construction-uses` for "The Axiom of
Choice is the tenth axiom of ZFC". Counted from the page's own item list,
`the-zfc-axioms-and-basic-set-constructions` states **eight** ZF axioms —
Extensionality, Separation, Pairing, Union, Power Set, Replacement, Infinity,
Foundation — and that item's own closing paragraph says the empty set "is often
taken as an axiom, and here it is derived instead". The "tenth" numbering is
Kaya's, whose Axiom 1 is the existence/empty-set axiom this page does not assume.
So the claim is false as this library presents the system.

The same false count sits at **three** sites. Only the rejected item is licensed
for repair at step 8 (R1: fatal-only, and `step8-guard` refuses an edit to an
item with no `confirmed_fatal` row). The rejected item was therefore repaired by
**deleting the ordinal rather than replacing it**, so that no site now
contradicts another; the remaining two are recorded here.

**E19a — APPLIED at step 8**, `items/rem-which-axiom-each-construction-uses.md`:

old
```
- The **Axiom of Choice** is the tenth axiom of ZFC. This library states it at
  [[def-axiom-of-choice]], and it is not stated on this page. No construction and
  no result on this page uses it.
```
new (on disk now)
```
- The **Axiom of Choice** is the one axiom of ZFC that is not stated on this
  page. This library states it at [[def-axiom-of-choice]]. No construction and
  no result on this page uses it.
```

**E19b — NOT APPLIED**, `library/foundations/the-zfc-axioms-and-basic-set-constructions.md`
(page prose; both clauses false):

old
```
The nine ZF axioms are stated in that language, written without abbreviations
```
new
```
The eight ZF axioms are stated in that language, written without abbreviations
```

old
```
Axiom of Choice is the tenth axiom of ZFC; it is not stated here, and this
```
new
```
Axiom of Choice is the ninth axiom of ZFC; it is not stated here, and this
```

**E19c — NOT APPLIED**, `items/def-language-of-set-theory.md`:

old
```
  [[def-axiom-of-choice]]. Choice is the tenth axiom of ZFC; it is stated there
```
new
```
  [[def-axiom-of-choice]]. Choice is the ninth axiom of ZFC; it is stated there
```

**E19b and E19c are not optional and must not wait for step 10.** They are draft
content, so nothing false is public, but the judge's context for
`rem-which-axiom-each-construction-uses` includes its whole page **and every
other item on it in full**. If the targeted rejudge of that item runs while the
page prose and `def-language-of-set-theory` still say "nine"/"tenth", a judge
reading the page's own axiom ledger against a page that miscounts its own axioms
has a live reason to reject again. Apply E19b and E19c at step 9, take a fresh
`touchlog` snapshot, and rejudge after that — not before.

## 12. Step 9 — the certifier's refusal, and the four clauses it cost

**Added by Alpha-zfc, 2026-08-06, at build step 9.** An independent certifier
refused to certify both items repaired at step 8 and named three false claims,
**two of them introduced by the step-8 repair itself**. The orchestrator verified
the two load-bearing ones from disk and confirmed them. These edits are OUTSIDE
the step-8 window: it closed at snapshot `after-step8-alpha`, and
`step8-guard --against after-step8-alpha` passes with them on disk, so R1's
`confirmed_fatal` licence does not apply and none was recorded.

**The rule this run learned three times.** "nine ZF axioms" (E19), "the one
principle" (D2 below), "the two applications" (D1 below) are one defect wearing
three hats: a **quantified prose claim that was true under a bound and false
without it**. Every repair below therefore **removes** the quantifier rather than
correcting it. A corrected count preserves the failure mode; a removed one cannot
decay.

New snapshot: `after-step9-certifier-repair`.

### D1 — `items/def-partial-order.md`, Remark 4 — the count. INTRODUCED BY E10d.

`node tools/consumers.mjs thm-zorn` reports **38 distinct consumers** (verified by
running it, not quoted). Applications running in an inclusion order are easy to
find among them and were checked on disk: `thm-ultrafilter-lemma` step 1.1
orders `Filt(X)` "partially ordered by inclusion", and
`thm-every-independent-set-extends-to-a-basis` step 2.1 applies Zorn to
independent subsets ordered by inclusion. That is already more than two.
And `thm-zorn` is not an application of Zorn's lemma; it **is** Zorn's lemma,
proved from Bourbaki–Witt, as the sentence's own next clause concedes.

*No count of the applications is asserted here either* — only the tool's 38
consumers, and two verified witnesses. Writing "at least nine" into this record
would have repeated the defect it documents.

old (on disk after step 8)
```
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the concrete order in which the two applications of Zorn's lemma run:
  [[thm-zorn]] applies [[thm-bourbaki-witt]] to the set of chains of $P$ ordered
  by inclusion, and [[thm-zorn-implies-ac]] applies Zorn's lemma to partial
  choice functions ordered by extension.
```
new (on disk now)
```
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the order that appears concretely in [[thm-zorn]], which applies
  [[thm-bourbaki-witt]] to the set of chains of $P$ ordered by inclusion, and in
  [[thm-zorn-implies-ac]], which applies Zorn's lemma to partial choice
  functions ordered by extension, an inclusion order on their graphs.
```
*Justification:* the claim is now existential over exactly the two items named
after it, so no later application can falsify it, and each item is credited with
the result it actually applies. The appositive is checkable and elementary: in
`thm-zorn-implies-ac` step 1.2 the order is `𝒢 ⊆ 𝒢'` together with
`h' | 𝒢 = h`, which for functions is exactly `h ⊆ h'` as sets of pairs.

### D2 — `items/def-axiom-of-choice.md`, Remark 4 — the uniqueness claim. INTRODUCED BY E11c-now.

`rem-choice-ledger` — cited two clauses earlier in the same sentence — has a
section "Strictly weaker than the Axiom of Choice" listing the ultrafilter
lemma, **dependent choice** and **countable choice**, and states: "These three
are not ranked on a line, and none of them is 'the weakest'." The target's own
title uses the indefinite article: "**a** choice principle strictly weaker than
AC". E11c-now upgraded "a" to "the one" and asserted a uniqueness the library
explicitly denies.

old
```
  [[rem-choice-ledger]]. [[rem-choice-strengths]] carries the narrower question
  of what the ultrafilter lemma costs, the one principle this library places
  strictly between ZF and AC.
```
new
```
  [[rem-choice-ledger]]. [[rem-choice-strengths]] carries the narrower question
  of what the ultrafilter lemma costs, and on cited authority places that
  principle strictly between ZF and AC.
```
*Justification:* "the one principle" is gone with nothing counted in its place.
"on cited authority" is the target's own framing — its "What is cited and not
proved" section, and its own words "this places UL strictly between the two,
again under the consistency of ZF".

### D3 — `items/def-axiom-of-choice.md`, Remark 1 — the SAME defect at a second site, left standing by E11c-now.

E11c-now removed "that bookkeeping is the purpose of `rem-choice-strengths`" from
Remark 4 but not the identical mischaracterisation in Remark 1, so the item
**contradicted itself**: Remark 1 called `rem-choice-strengths` a general survey
of the weaker principles, Remark 4 called it the narrow ultrafilter question.
`rem-choice-strengths` is about the ultrafilter lemma and nothing else.

old
```
  consistency assumption explicitly in its Given; [[rem-choice-strengths]]
  locates the weaker choice principles.
```
new
```
  consistency assumption explicitly in its Given; [[rem-choice-ledger]] records
  the weaker choice principles and, for each, what is proved here and what is
  only cited.
```
*Justification:* the claim moves to the item that actually makes it. "locates" is
dropped too: `rem-choice-ledger` explicitly refuses to place its three principles
on a scale, so "locates" would have imported the ranking the ledger denies. The
replacement description is verified against the ledger, which for each of UL, DC
and AC_ω separates what this library proves from what it quotes.
`rem-choice-strengths` stays cited in Remark 4 and stays in `forward_refs`;
`rem-choice-ledger` was already declared there. The two Remarks are now
consistent: the ledger is the survey, `rem-choice-strengths` is the narrow
question.

### D4 and D5 — found on Alpha's own re-read, not by the certifier or either judge.

Both are the same shape again, and both were introduced by the step-8 edits:
a claim that was **true under a page bound** and became a false universal when
E10d/E11c-now deleted the bound.

**D4 — `items/def-partial-order.md`, Remark 1.** "Every statement about maximal
elements, chains, or upper bounds is interesting precisely because incomparable
pairs may exist; in a total order most of them collapse to something obvious."
Unbounded, this is refuted by the library's own material: the least upper bound
property of ℝ is a statement about upper bounds, ℝ is totally ordered, and it
collapses to nothing obvious. `upper bounds` is dropped from the list and the
quantifier "most" with it; the replacement states the two collapses that are
actually true and checkable.

old
```
- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable. Every statement about maximal elements, chains, or upper bounds
  is interesting precisely because incomparable pairs may exist; in a total
  order most of them collapse to something obvious.
```
new
```
- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable, which is what makes maximal elements and chains worth
  distinguishing at all. In a total order every subset is a chain, and a maximal
  element is automatically the greatest element.
```
Both new clauses are proved in two lines from the Definition above them: a subset
of a totally ordered set is totally ordered, hence a chain; and if `m` is maximal
in a total order then for any `x`, comparability gives `x ≤ m` or `m ≤ x`, and
`m ≤ x` with `x ≠ m` contradicts maximality, so `x ≤ m` for all `x`.

**D5 — `items/def-axiom-of-choice.md`, Remark 4, first clause.** E11c-now turned
"Everything on this page after `lem-finite-choice` that invokes AC is flagged as
doing so" — a checkable claim about one page — into "A result that invokes AC is
flagged as doing so where it is stated", an unverifiable universal over 2,800+
items that a single unflagged result anywhere would refute. Restated as the
convention it is.

old
```
- "ZFC" abbreviates ZF together with AC. A result that invokes AC is flagged as
  doing so where it is stated, because a page needs to say honestly which of its
```
new
```
- "ZFC" abbreviates ZF together with AC. The convention here is that a result
  invoking AC says so where it is stated, because a page needs to say honestly
```

### Considered and DECLINED

`def-partial-order` Remark 2, "All three axioms are used essentially in the
proofs that rest on this definition: ... transitivity almost everywhere ...".
E10d unbounded this one too. It is left alone: the colon-list names a witness for
each of the three axioms, so the sentence reads existentially ("each axiom is
essential somewhere among these, namely here") rather than as a claim about every
consumer, and "almost everywhere" is a hedge, not a count. Recorded here so the
decision is visible rather than silent.

### Gate results with all five repairs on disk

- `precheck.mts` — 2172 checked, 0 failing.
- `fwdcheck`, `extcheck`, `rendercheck` — OK.
- `prosecheck` — 0 errors; **neither repaired item appears in any of the 578
  heuristic warnings**, including the `count-in-prose` class.
- `gates.mjs --step 8 --run zfc --against after-step8-alpha` — `step8-guard`
  **OK**, `impact-audit` **OK**. The window is genuinely closed and these edits
  sit outside it. (Run bare, without `--against`, `step8-guard` fails by design:
  it then bounds at the live working tree and sees five unlicensed step-9 edits.)
- `depcheck` — 2 errors, both `published-unaudited`, on exactly the two repaired
  items. **Correct and expected**: it stays until a FRESH certifier reads the
  repaired text. The certifier that found these defects cannot certify text
  written in answer to its own finding, and neither can Alpha.
- `level-coverage --verify-current-context` — 2 errors, both
  `judge-coverage-missing`, on exactly `def-axiom-of-choice` and
  `def-partial-order`. Their text changed, so their own `item_sha256` moved and
  their verdicts staled. **Both need a targeted rejudge.**

`verification` was not touched on either item.
