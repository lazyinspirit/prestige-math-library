# Run `zfc`, batch 1 — Beta notes, source ledger and authoring obligations

Author: Beta-zfc-1 (Claude Opus 5, per `research/zfc-RESUME.md` §2, this day only).
Scope: all four pages of `research/zfc-batch-1.pages.json` — orders 5.1, 5.2, 5.3, 5.4.
There is no prose scaffold for this run and none is to be written; this file carries
everything a prose scaffold would normally carry.

---

## 1. Gap analysis of the published Foundations corpus

Read from disk in full: every page file in `library/foundations/` and every item
those pages list, plus the whole `items/` id pool (2767 files) filtered for
set-theoretic vocabulary.

### 1.1 What Foundations already builds

| page | order | what it establishes |
|---|---|---|
| `order-zorn-and-the-axiom-of-choice` | 10 | `def-partial-order` (reflexive/antisymmetric/transitive, strict order, comparable, total order), `def-chain`, `def-upper-bound`, `def-maximal-element`, `def-chain-complete-poset`, `def-choice-function`, `def-axiom-of-choice`, `lem-finite-choice`, Bourbaki–Witt, Zorn, `cor-ac-iff-zorn` |
| `filters-and-ultrafilters` | 11 | filters, bases, FIP, ultrafilters, ultrafilter lemma, `rem-choice-strengths` |
| `ordinals-and-transfinite-recursion` | 12 | `def-well-order`, `def-order-isomorphism`, `def-initial-segment`, transfinite induction and recursion, ordinals, Burali-Forti, Mostowski, `thm-hartogs`, well-ordering theorem, `def-cardinal`, `rem-choice-ledger` |
| `ordinal-arithmetic` | 13 | ordinal $+$, $\cdot$, exponentiation, Cantor normal form, $\omega_1$ |
| `cardinal-arithmetic-and-cofinality` | 14 | $\oplus$, $\otimes$, exponentiation, alephs and beths, cofinality, König |
| `construction-of-the-natural-numbers` | 6 | `def-peano-system`, `def-inductive-set`, `lem-omega-smallest-inductive`, `def-natural-numbers`, induction, recursion, arithmetic, order, well-ordering, categoricity |

### 1.2 What it uses constantly and has never built

Every item below was searched for in `items/` by id fragment, by aliases and by
body text. **None exists.**

1. **The ZFC axioms themselves.** Only Choice has an item (`def-axiom-of-choice`).
   Extensionality, Foundation, the Separation schema, Pairing, Union, the
   Replacement schema, Infinity and Power Set are invoked *by name*, inside
   `**Given:**` blocks and Remarks, with no citable target anywhere in the library.
   Concrete uses found on disk: `lem-omega-smallest-inductive` ("By the Axiom of
   Infinity fix an inductive set $I_0$", "By Separation the collection … is a set",
   "so $\omega = \omega'$ by Extensionality"); `def-natural-numbers` ("the Axiom of
   Infinity supplies one inductive set to intersect within, and Separation makes the
   intersection a set"); `def-inductive-set` ("a set, by the axioms of Pairing and
   Union"); `thm-transfinite-recursion`, `lem-recursion-on-the-ordinals`,
   `thm-hartogs`, `thm-mostowski-collapse`, `thm-burali-forti`,
   `lem-well-order-comparability`, `lem-cardinality-of-a-well-orderable-set`,
   `thm-schroder-bernstein`, `def-infinite-cardinal-sum-and-product`,
   `cor-the-aleph-and-beth-hierarchies-are-well-defined` (Separation and/or
   Replacement); `def-ordinal` (Foundation).
2. **The empty set.** No item asserts that $\varnothing$ exists or that it is unique.
   `\varnothing` is used in several hundred items.
3. **Subset, and the double-inclusion criterion.** No item.
4. **Unordered pairs and singletons.** No item.
5. **Union $\bigcup x$, binary union, intersection $\bigcap x$, binary
   intersection, difference, symmetric difference, relative complement.** No item.
   The empty-family problem ($\bigcap\varnothing$) is nowhere addressed.
6. **The algebra of those operations** — commutativity, associativity,
   distributivity, De Morgan. No item; used silently everywhere.
7. **Power set.** No item defines $\mathcal{P}$. `thm-cardinal-power-set-and-cantor`
   (order 14) and `thm-cantor-powerset` (order 18) *use* it.
8. **Russell's paradox / no set of all sets / inconsistency of unrestricted
   comprehension.** `fs-ordinals-form-a-set` (order 12) refutes one instance of the
   phenomenon; the general fact has no item.
9. **Kuratowski ordered pairs and their characterising property.** No item.
   `def-order-isomorphism`, `thm-transfinite-recursion`, `def-finite-simple-graph`
   and others write $(a,b)$ freely.
10. **The Cartesian product as a set**, i.e. the Power Set + Separation
    construction. No item. `def-axiom-of-choice` even says "immediate from the
    definition of the Cartesian product" — a definition the library does not contain.
11. **Ordered triples and iterated products.** No item.
12. **Relations as sets**: domain, range, field, inverse, composition,
    restriction, image, preimage. No item. `def-equivalence-relation` (order 24)
    defines only "binary relation on a set $A$", in one clause, as $R \subseteq A\times A$.
13. **The relation properties defined generically** (reflexive, irreflexive,
    symmetric, asymmetric, antisymmetric, transitive, connex). No item.
    `def-partial-order` and `def-equivalence-relation` each restate the two or three
    they need inline; `def-well-order` restates more.
14. **Functions as sets.** No item. `def-injection-surjection-bijection` says in a
    Remark that functions, ordered pairs, Cartesian products, images and preimages
    "are ambient ZFC vocabulary in this library" — which is precisely the gap.
15. **Equality of functions, composition of functions, identity, inverse
    functions.** The inverse-function characterisation is *asserted without proof*
    in a Remark of `def-injection-surjection-bijection`; so is the fact that
    composites of injections are injective.
16. **Image/preimage behaviour under unions, intersections and differences.** No item.
17. **The set $B^A$ of all functions.** `def-function-space` (order 30) builds
    $F^X$ for a field $F$ and a vector-space structure; the bare set of functions
    between two sets has no item.
18. **Indexed families and the general indexed union, intersection and product.**
    No item. `def-axiom-of-choice` states the product formulation of AC with no
    product to point at; `thm-product-universal-property` and `def-product-topology`
    use arbitrary products.
19. **The universal property of a quotient and the canonical decomposition of a
    function.** No item. `def-equivalence-relation`'s Remark states the
    well-definedness obligation in prose and points at four concrete instances.

### 1.3 What is therefore NOT built here, because it already exists

- Cantor's theorem: `thm-cantor-powerset` (order 18) already states "there is no
  surjection $A \to \mathcal{P}(A)$". Not restated.
- Partition of a set: defined inside the Statement of `lem-equivalence-classes-partition`,
  which is being re-homed onto 5.3. No separate `def-partition-of-a-set` is minted.
- Partial order, chain, total order: `def-partial-order` (order 10). Pair 2
  deliberately develops the *properties* generically and states the strict/reflexive
  correspondence **without using the term "partial order"**, exactly per
  `research/zfc-RESUME.md` §4. See finding F3.
- The Axiom of Choice: `def-axiom-of-choice` (order 10). Not restated. See finding F1.
- Von Neumann naturals, inductive sets, $\omega$: `construction-of-the-natural-numbers`
  (order 6). `def-axiom-of-infinity` on 5.1 states the axiom **unabbreviated**, in
  $\in$ and $=$ alone, so that it needs no notion of inductive set; a Remark records
  the agreement with `def-inductive-set` as an orientation-only forward reference.
- Successor injectivity **on $\omega$**: `thm-omega-is-peano-system` clause (P2),
  proved from `lem-nat-transitive-irreflexive`. `cor-the-successor-operation-is-injective`
  on 5.1 is the strictly more general statement for *all* sets, proved from
  Foundation. Its Remark records the relation (forward reference, orientation only).

---

## 2. Source ledger

Every URL below was fetched during this step and returned content.

| source | URL | supports |
|---|---|---|
| B. Kaya, *MATH 320 Set Theory* (METU) | https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf | **Primary source for both pages.** Axioms 1–10 with their formal first-order sentences (§1.1–1.2, §2.4, §3.5, §4.1, §5); Kuratowski pair (Def. 1) and Lemma 1; $\bigcup$, $\bigcap$, difference, symmetric difference, subset laws (§1.2); power set (Axiom 6); no set of all sets (Thm. 3); relations, dom/ran, image, preimage, inverse, composition (Def. 6–14, Ex. 7–8); Cartesian product (Def. 10); functions, restriction, compatibility, composition, ${}^{x}y$ (Def. 15–20, Lem. 3–5); indexed systems and $\prod_{i\in I}F_i$ (Def. 21); partial/linear/strict orders and their correspondence (Lem. 9–10, Def. 29–32); equivalence relations, classes, quotient, partitions, the correspondence theorem (Def. 22–25, Lem. 7–8, Thm. 4–5); Foundation and its consequences (Axiom 8, Thm. 10–11, Ex. 24, Lem. 13). Already a trusted reference in this library (`def-inductive-set`, `def-natural-numbers`, `lem-omega-smallest-inductive`). |
| C. Wilson, *A Brief Introduction to ZFC* (Chicago REU 2016) | https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf | Second independent statement of Extension, Specification, Empty Set, Pairing, Unions, Powers; ordered pair Def. 2.6 and Thm. 2.7; $A\times B = \{z \in \mathcal P(\mathcal P(A\cup B)) : \dots\}$ Def. 2.8; relation/function/injection/surjection/bijection/restriction Def. 2.9–2.13; the explicit warning that $\bigcap$ over an empty collection cannot be defined (footnote 2). |
| M. Bays, *B1.2 Set Theory* (Oxford, HT26) | https://people.maths.ox.ac.uk/bays/teaching/b1set/B1.2.pdf | Third independent axiom list and the ZF/ZFC split; consulted for convention checks only. |
| Zermelo–Fraenkel set theory (Wikipedia) | https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory | Formal sentences for all nine ZF axioms in the form used on page 5.1; the Power Set axiom in the weaker implication form $\forall z (z \subseteq x \to z \in y)$; "the empty set's existence is implied by the nine axioms"; Separation is redundant given Replacement. |
| Axiom of pairing (Wikipedia) | https://en.wikipedia.org/wiki/Axiom_of_pairing | "the axiom of pairing follows from the axiom schema of replacement applied to any given set with two or more elements", such a set coming from Empty Set + Power Set or from Infinity. Supports the redundancy paragraph of `rem-which-axiom-each-construction-uses`. |
| Ordered pair (Wikipedia) | https://en.wikipedia.org/wiki/Ordered_pair | Kuratowski definition, characteristic property, the degenerate case $(x,x)=\{\{x\}\}$, Wiener's and Hausdorff's alternatives; **and the projection formulas** $\pi_1(p) = \bigcup\bigcap p$ and $\pi_2(p) = \bigcup\{a \in \bigcup p \mid \bigcup p \neq \bigcap p \to a \notin \bigcap p\}$ — the source for `ex-recovering-the-coordinates-of-an-ordered-pair`. |
| Cartesian product (Wikipedia) | https://en.wikipedia.org/wiki/Cartesian_product | $A\times\varnothing = \varnothing\times B = \varnothing$; $A\times B \subseteq \mathcal P(\mathcal P(A\cup B))$; the indexed-family product as a set of functions; $A\times(B\cap C) = (A\times B)\cap(A\times C)$ and the other identities of `prop-cartesian-products-and-set-operations`. |
| Russell's paradox (Wikipedia) | https://en.wikipedia.org/wiki/Russell%27s_paradox | The paradox, the unrestricted-comprehension schema $\exists y\forall x(x\in y \leftrightarrow \varphi(x))$, and the ZF corollary that no universal set exists. |
| Equivalence relation (Wikipedia) | https://en.wikipedia.org/wiki/Equivalence_relation | "The empty relation $R$ … on a set $X$ is vacuously symmetric and transitive; however, it is not reflexive (unless $X$ itself is empty)" — the source for `cex-a-symmetric-transitive-relation-that-is-not-reflexive` and `fs-symmetry-and-transitivity-imply-reflexivity`; and the equivalence-relation/partition correspondence. Already cited by `def-equivalence-relation`. |
| Partition of a set (Wikipedia) | https://en.wikipedia.org/wiki/Partition_of_a_set | Already cited by `lem-equivalence-classes-partition`; consulted to confirm the re-homed item's definition of partition is unchanged. |

### 2.1 Convention disagreements found, and the choice made

1. **Empty Set as an axiom, or derived.** METU (Axiom 1) and Wilson take "there is
   a set with no elements" as an axiom; Wikipedia's ZFC does not, deriving it.
   **Choice: derive it** (`thm-the-empty-set-exists-and-is-unique`), from Separation
   plus the logical fact that the domain of discourse is nonempty. The Remark records
   the other convention and names both sources. This keeps the axiom list at the nine
   ZF axioms Wikipedia lists, and it makes the derivation itself a result on the page.
2. **Power Set in $\leftrightarrow$ or $\to$ form.** METU Axiom 6 asserts
   $\forall x\exists y\forall z(z \subseteq x \leftrightarrow z \in y)$; Wikipedia and
   Wilson assert only $z \subseteq x \to z \in y$. **Choice: the $\to$ form**, with
   `lem-the-power-set-of-a-set-is-a-set` trimming it to the exact power set by
   Separation. This is the weaker axiom, so the page assumes less, and it makes the
   Separation dependency of $\mathcal P$ visible in the ledger.
3. **Separation with one parameter or finitely many.** METU states it with a single
   parameter $p$ and notes the two formulations are interderivable. **Choice: a
   parameter list $\bar p$**, as Wikipedia states it, and the Remark records METU's
   remark that the two agree.
4. **$\bigcap \varnothing$.** METU says "$\bigcap \varnothing = V$" as a *class*
   equality, i.e. it is not a set; Wilson says the intersection "was unable to be
   defined" over an empty collection. Both agree it is not a set. **Choice: prove it**
   — `cor-the-empty-family-has-no-intersection` — and refute the common
   $\bigcap\varnothing = \varnothing$ error as `fs-the-intersection-of-the-empty-family-is-the-empty-set`.
5. **Notation for the set of functions.** METU writes ${}^{x}y$ for the functions
   $x \to y$ and explicitly reserves $y^{x}$ for ordinal and cardinal exponentiation;
   Wikipedia and most analysis texts write $B^A$. **Choice: $B^{A}$**, because the
   library already fixed that convention in `def-function-space` ($F^{X}$ = functions
   $X \to F$), and a second convention would collide with it. The Remark of
   `def-the-set-of-functions-from-one-set-to-another` records METU's convention, the
   reason for the collision, and points at the published
   `rem-ordinal-versus-cardinal-exponentiation` warning as an orientation-only
   forward reference.
6. **Strict order: irreflexive+transitive, or asymmetric+transitive.** METU Lemma 10
   uses asymmetric + transitive; Wikipedia's "strict partial order" is irreflexive +
   transitive, with asymmetry a theorem. **Choice: irreflexive + transitive**, and
   `thm-reflexive-and-irreflexive-orders-correspond` proves asymmetry as a clause, so
   both conventions are visibly reconciled inside the item.
7. **"Connex" / "total" / "complete".** "Total relation" means *left-total* (serial)
   in some texts and *connex* in others. **Choice: `connex`** as the primary name in
   `def-properties-of-a-relation-on-a-set`, with "total" recorded as the common
   synonym and the serial reading named as the clash to avoid. `def-partial-order`
   already writes "total order" for the connex case, and the rewiring note in
   `research/zfc-published-rewiring.md` keeps the two consistent.
8. **Composition order.** METU Def. 12 writes $S \circ R$ for "$R$ first, then $S$",
   agreeing with the usual $g \circ f$. **Choice: the same**, so the published
   `def-group-homomorphism` and `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`
   conventions are unaffected.
9. **Function codomain.** METU Def. 16 makes the codomain part of the *declaration*
   $R : A \to B$ rather than of the set $R$, so the same set is a function into
   several codomains, and surjectivity is a property of the declaration. Wilson
   Def. 2.10 does the same. **Choice: the same**, and it is stated explicitly in
   `def-function` because `ex-the-empty-relation-and-the-empty-function` turns on it
   ($\varnothing$ is a bijection $\varnothing \to \varnothing$ and not a surjection
   $\varnothing \to \{\varnothing\}$; METU Exercise 9).

---

## 3. Per-item component provenance, with the reason for each

Rule applied: `provenance.statement` is `literature-derived` when the item states a
source proposition with cosmetic editing only; `ai-altered` when several source
statements are merged, a hypothesis is made explicit, or a concrete witness is chosen
locally; `ai-generated` only when the claim was formulated here with no direct source
for that component. `provenance.proof` is `ai-altered` on every proof-bearing item on
these pages, because every proof is rewritten against this library's dependency set
and into the phase format; none is copied. Definitions and remarks take
`proof: not-applicable`.

### 3.1 Page 5.1

| item | statement | proof | reason |
|---|---|---|---|
| `def-language-of-set-theory` | literature-derived | not-applicable | The language $\{\in\}$ with equality, exactly as METU §1 and Wikipedia ZFC fix it. |
| `def-axiom-of-extensionality` | literature-derived | not-applicable | METU Axiom 2 / Wikipedia. |
| `def-axiom-schema-of-separation` | literature-derived | not-applicable | METU Axiom 5 / Wikipedia (parameter-list form, per §2.1(3)). |
| `def-axiom-of-pairing` | literature-derived | not-applicable | METU Axiom 3 / Wikipedia. |
| `def-axiom-of-union` | literature-derived | not-applicable | METU Axiom 4 / Wikipedia. |
| `def-axiom-of-power-set` | literature-derived | not-applicable | Wikipedia's implication form, per §2.1(2). |
| `def-axiom-schema-of-replacement` | literature-derived | not-applicable | METU Axiom 10 / Wikipedia. |
| `def-axiom-of-infinity` | ai-altered | not-applicable | The axiom is METU Axiom 9 / Wikipedia, but it is stated here **unabbreviated** in $\in$ and $=$, because "inductive set" is not available at order 5.1. That reformulation is a material adaptation. |
| `def-axiom-of-foundation` | literature-derived | not-applicable | METU Axiom 8 / Wikipedia (Regularity). |
| `thm-the-empty-set-exists-and-is-unique` | literature-derived | ai-altered | METU Theorem 2 (uniqueness) plus the standard Separation derivation of existence; proof rewritten. |
| `def-subset-and-proper-subset` | literature-derived | not-applicable | METU §1.2 / Wilson Def. 2.1. |
| `lem-basic-laws-of-inclusion` | ai-altered | ai-altered | METU's bullet list of inclusion facts and Wilson Thm. 2.2–2.3, merged into one statement. |
| `def-unordered-pair-and-singleton` | literature-derived | not-applicable | METU §1.2. |
| `lem-unordered-pair-equality` | ai-altered | ai-altered | The full biconditional including the $a=b$ case; METU leaves the pair lemma as an exercise, so the statement is assembled here from the standard form. |
| `def-union-of-a-set-and-binary-union` | literature-derived | not-applicable | METU Axiom 4 and Def. 2. |
| `lem-the-intersection-of-a-nonempty-set-is-a-set` | literature-derived | ai-altered | METU §1.2, the paragraph deriving $\bigcap A$ from Separation, including the independence of the chosen $B \in A$. |
| `def-intersection-of-a-set-and-binary-intersection` | literature-derived | not-applicable | METU Def. 3. |
| `lem-unions-and-intersections-of-small-families` | ai-altered | ai-altered | The bridge identities between the primitive and the binary operations; individually standard, collected here. |
| `def-set-difference-and-symmetric-difference` | literature-derived | not-applicable | METU Def. 4–5. |
| `lem-the-power-set-of-a-set-is-a-set` | ai-altered | ai-altered | Needed only because the axiom is taken in the weak form; the trimming argument is standard but not stated as a lemma in the sources. |
| `def-power-set` | literature-derived | not-applicable | METU Axiom 6 / Wilson "Axiom of powers". |
| `prop-basic-properties-of-the-power-set` | ai-altered | ai-altered | Standard facts collected; $\bigcup\mathcal P(a) = a$ and $\mathcal P(a\cap b) = \mathcal P(a)\cap\mathcal P(b)$ are textbook, the packaging is local. |
| `prop-algebra-of-union-intersection-and-difference` | ai-altered | ai-altered | The Boolean laws, which METU explicitly declines to list ("we shall not include here the list of basic properties"). Each law is standard; the collection is local. |
| `thm-distributive-laws-for-union-and-intersection` | literature-derived | ai-altered | Standard, including the family form. |
| `thm-de-morgan-laws` | literature-derived | ai-altered | Standard; the nonempty-family hypothesis is stated explicitly. |
| `lem-monotonicity-of-union-and-intersection` | literature-derived | ai-altered | METU's bullet list ($\bigcap w \subseteq \bigcup w$, $y \in x \to \bigcap x \subseteq y \subseteq \bigcup x$). |
| `thm-russells-paradox` | literature-derived | ai-altered | Wikipedia's statement of the paradox, put in the object language. |
| `cor-there-is-no-set-of-all-sets` | literature-derived | ai-altered | METU Theorem 3, with its proof. |
| `cor-the-empty-family-has-no-intersection` | ai-altered | ai-altered | METU Exercise 2 ($\bigcap\varnothing = V$) and Wilson footnote 2, turned into a proved statement. |
| `rem-why-separation-replaces-unrestricted-comprehension` | ai-altered | not-applicable | Bookkeeping over sourced facts. |
| `thm-foundation-excludes-membership-cycles` | ai-altered | ai-altered | METU Theorem 11 ($x \notin x$) and Exercise 24 (no 2-cycle); the 3-cycle clause is the same argument, and the general finite case is explicitly **not** claimed. |
| `cor-the-successor-operation-is-injective` | literature-derived | ai-altered | METU Lemma 13, verbatim in content. |
| `def-ordered-pair` | literature-derived | not-applicable | METU Def. 1 (Kuratowski) / Wilson Def. 2.6. |
| `thm-the-characterising-property-of-ordered-pairs` | literature-derived | ai-altered | METU Lemma 1 / Wilson Thm. 2.7; both leave the proof to the reader, so the proof is written here. |
| `lem-ordered-pairs-lie-in-the-double-power-set` | literature-derived | ai-altered | METU §2.1 ("One can easily check that if $a\in A$ and $b\in B$, then $(a,b)\in\mathcal P(\mathcal P(A\cup B))$") and Wilson's remark before Def. 2.8. |
| `def-cartesian-product` | literature-derived | not-applicable | METU Def. 10 / Wilson Def. 2.8, same formula. |
| `prop-cartesian-products-and-set-operations` | ai-altered | ai-altered | The identities are the Wikipedia list; the emptiness criterion and the monotonicity criterion with its nonemptiness hypothesis are stated explicitly here. |
| `def-iterated-products-and-ordered-triples` | ai-altered | not-applicable | Standard, but stated *without* $n$-tuples, because $\omega$ is not available at order 5.1; that restriction is a local adaptation. |
| `rem-which-axiom-each-construction-uses` | ai-altered | not-applicable | Bookkeeping, in the manner of the published `rem-choice-ledger`; the redundancy facts are sourced (Wikipedia ZFC for Separation-from-Replacement; Wikipedia "Axiom of pairing" for Pairing-from-Replacement). |

### 3.2 Page 5.2

All ten items: `statement: ai-altered`, `proof: ai-altered`, except as noted.
Each claim is in the sources; each concrete witness is a hereditarily finite set
chosen here, which is what makes the component `ai-altered` rather than
`literature-derived`.

- `ex-the-smallest-sets-and-their-power-sets` — $\mathcal P(\varnothing)$ and
  $\mathcal P(\{\varnothing\})$ are computed in METU §1.2 and Wilson §2.3; the
  four-element third case is written out here.
- `ex-kuratowski-ordered-pairs-computed` — the degenerate identity
  $(x,x) = \{\{x\}\}$ is Wikipedia's; the two instances are chosen here.
- `ex-recovering-the-coordinates-of-an-ordered-pair` — **literature-derived
  statement**: Wikipedia's projection formulas $\pi_1(p) = \bigcup\bigcap p$ and
  the $\pi_2$ formula, including its treatment of $a=b$.
- `ex-a-cartesian-product-computed-inside-the-double-power-set` — the bound is
  sourced; the instance is local.
- `cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets` — the
  strictness is standard; the witness is local.
- `cex-the-cartesian-product-is-not-associative` — standard; witness local.
- `cex-the-product-of-two-unions-is-larger-than-the-union-of-the-two-products` —
  standard; witness local.
- `fs-every-property-defines-a-set` — **literature-derived statement**: it is
  Wikipedia's unrestricted-comprehension schema, asserted so that it can be refuted.
- `fs-the-intersection-of-the-empty-family-is-the-empty-set` — the error is the one
  Wilson's footnote 2 warns against; stating it as a false statement is local.
- `fs-set-difference-is-associative` — standard exercise; witness local.

### 3.3 Page 5.3

| item | statement | proof | reason |
|---|---|---|---|
| `lem-the-domain-and-range-of-a-relation-are-sets` | ai-altered | ai-altered | METU §2.1 says dom and ran are formed "using the union and separation axioms"; the explicit $\bigcup\bigcup R$ bound is written out here. |
| `def-relation-domain-range-and-field` | literature-derived | not-applicable | METU Def. 6 and Def. 11. "Field" is the standard third notion. |
| `lem-a-relation-is-included-in-the-product-of-its-domain-and-range` | literature-derived | ai-altered | METU §2.1 ("every relation $R$ is a relation from $\operatorname{dom}(R)$ to $\operatorname{ran}(R)$"). |
| `lem-inverse-relations-composites-and-restrictions-are-sets` | ai-altered | ai-altered | The sethood obligations METU passes over; assembled here. |
| `def-inverse-relation-composition-and-restriction` | literature-derived | not-applicable | METU Def. 9, Def. 12, Def. 19. |
| `def-image-and-preimage-under-a-relation` | literature-derived | not-applicable | METU Def. 7–8 and Lemma 2. |
| `def-the-identity-and-membership-relations-on-a-set` | literature-derived | not-applicable | METU Def. 13–14. |
| `prop-composition-of-relations-is-associative` | literature-derived | ai-altered | METU Exercises 7–8, plus the identity clauses; proofs written here. |
| `prop-images-and-preimages-under-a-relation-and-set-operations` | ai-altered | ai-altered | Standard, collected here at relation level rather than function level. |
| `def-properties-of-a-relation-on-a-set` | literature-derived | not-applicable | METU §3.1, §3.3 and Wikipedia; the seven properties named together. |
| `thm-reflexive-and-irreflexive-orders-correspond` | ai-altered | ai-altered | METU Lemma 9–10 give both directions separately for *orders*; here they are stated as a bijection between the two collections of relations and **without** the term "partial order", per RESUME §4 and finding F3. |
| `def-function` | literature-derived | not-applicable | METU Def. 15–17 / Wilson Def. 2.10. |
| `lem-two-functions-are-equal-exactly-when-they-agree-at-every-point` | literature-derived | ai-altered | Standard consequence of Extensionality. |
| `lem-the-composite-of-two-functions-is-a-function` | literature-derived | ai-altered | METU Lemma 5 and Exercise 11, with the identity clauses. |
| `prop-composition-preserves-injectivity-surjectivity-and-bijectivity` | literature-derived | ai-altered | The first two clauses are asserted, unproved, in the Remarks of the published `def-injection-surjection-bijection`; the two partial converses are standard. This item **proves** what that Remark asserts. See finding F5. |
| `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse` | literature-derived | ai-altered | Also asserted unproved in that Remark; proved here. |
| `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse` | ai-altered | ai-altered | Standard, but the $A = \varnothing$ clause is stated explicitly because the usual textbook statement is false there. |
| `thm-preimages-commute-with-unions-intersections-and-differences` | literature-derived | ai-altered | Standard. |
| `prop-images-of-unions-and-intersections-under-a-function` | literature-derived | ai-altered | Standard, with the injectivity criterion. |
| `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity` | ai-altered | ai-altered | The identity $f[f^{-1}[T]] = T \cap f[A]$ and the two criteria, collected here. |
| `lem-the-set-of-functions-between-two-sets-is-a-set` | literature-derived | ai-altered | METU §2.2, the paragraph forming $\{f \in \mathcal P(x\times y) : \dots\}$. |
| `def-the-set-of-functions-from-one-set-to-another` | ai-altered | not-applicable | METU's object under the library's notation, per §2.1(5). |
| `def-indexed-family` | literature-derived | not-applicable | METU §2.3 / Wilson Def. 2.13. |
| `def-indexed-union-and-intersection` | literature-derived | not-applicable | METU §2.3 final paragraph. |
| `cor-distributive-and-de-morgan-laws-for-indexed-families` | ai-altered | ai-altered | Translation of the 5.1 family laws into indexed notation. |
| `lem-the-product-of-an-indexed-family-is-a-set` | ai-altered | ai-altered | Sethood obligation implicit in METU Def. 21; written out here. |
| `def-product-of-an-indexed-family` | literature-derived | not-applicable | METU Def. 21. |
| `prop-products-over-small-index-sets` | ai-altered | ai-altered | The three boundary computations, collected; the empty-index case $\{\varnothing\}$ is the one most often mis-stated. |
| `lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product` | literature-derived | ai-altered | METU Exercise 12, with the index set written as $\{\varnothing,\{\varnothing\}\}$ rather than as the natural number $2$. |
| `def-equivalence-relation` | ai-altered | not-applicable | **Re-homed, published, unchanged.** Its existing tags. |
| `lem-equivalence-classes-partition` | ai-altered | ai-generated | **Re-homed, published, unchanged.** Its existing tags. |
| `lem-the-kernel-of-a-function-is-an-equivalence-relation` | literature-derived | ai-altered | Standard; METU Ex. 14 is the same construction. |
| `thm-universal-property-of-the-quotient` | literature-derived | ai-altered | Standard; it is the general form of the obligation `def-equivalence-relation`'s Remark describes. |
| `thm-canonical-decomposition-of-a-function` | literature-derived | ai-altered | Standard (the set-theoretic first isomorphism theorem). |
| `rem-where-a-choice-principle-would-be-needed` | ai-altered | not-applicable | Bookkeeping, in the manner of `rem-choice-ledger`. |
| `def-injection-surjection-bijection` | ai-altered | not-applicable | **Re-homed, published, unchanged.** Its existing tags. |

### 3.4 Page 5.4

All ten items: `statement: ai-altered`, `proof: ai-altered`, except:

- `ex-the-empty-relation-and-the-empty-function` — **literature-derived statement**:
  METU Exercise 9 and the equivalence-relation article's empty-relation paragraph.
- `fs-symmetry-and-transitivity-imply-reflexivity` — **literature-derived
  statement**: it is exactly the claim the Wikipedia passage exists to deny.
- `ex-a-nonempty-product-built-without-choice` — **`statement: ai-generated`,
  `generation.role: example`**. See §4.

---

## 4. AI-generated-Statement truth-risk register

**Exactly one planned item carries an `ai-generated` Statement/Construction:**

- **`ex-a-nonempty-product-built-without-choice`** (page 5.4, `generation.role: example`).
  Half of it — $\prod_{i \in I}\{i\}$ has exactly one element — is METU Exercise 13's
  neighbourhood and would be `ai-altered` alone. The other half, that the constant
  function with value $\varnothing$ always lies in $\prod_{i\in I}\mathcal P(X_i)$,
  was formulated here, so the combined construction is labelled `ai-generated`.
  **Counterexample search performed:** the claim reduces to
  $\varnothing \in \mathcal P(X_i)$ for every $i$, which is
  `lem-basic-laws-of-inclusion` clause 1 ($\varnothing \subseteq x$) together with
  `def-power-set`. There is no set $X$ with $\varnothing \notin \mathcal P(X)$, so no
  counterexample exists. The degenerate case $I = \varnothing$ gives
  $\prod = \{\varnothing\}$, still nonempty, by `prop-products-over-small-index-sets`.
  **Containment:** nothing in the batch lists this id in `deps`, and
  `content-policy.mjs` will confirm it is not a dependency target.

No other item in the batch is planned as `ai-generated` in either component, so no
other truth-risk obligation arises under the owner's 2026-08-01 rule. Every
`ai-altered` Statement above was checked against the source named in its row; the
rows that merge several source statements are flagged `ai-altered` precisely so Alpha
re-reads the merge rather than the sources.

---

## 5. Load-bearing dependencies outside the batch

Only two classes exist, and both were opened from disk.

1. **The three re-homed published items** (`def-equivalence-relation`,
   `lem-equivalence-classes-partition`, `def-injection-surjection-bijection`).
   All three are `status: published`, all three carry
   `provenance.statement: ai-altered` — legal as `deps` targets — and all three were
   read in full. Confidence route: **source-checked**, against
   https://en.wikipedia.org/wiki/Equivalence_relation ,
   https://en.wikipedia.org/wiki/Partition_of_a_set and
   https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection , which are the
   URLs those items already carry. Their exact Definitions and Statements agree with
   those sources.
2. **`rem-cohen-forcing-ac-independent`** (page `deferred-set-theory-beyond-choice`,
   order 3), used by `fs-every-surjection-has-a-right-inverse-in-zf`. It is
   `proved_here: false` with `verification.sources_checked`, and has **no**
   `provenance` block, so it is legacy-unclassified rather than `ai-generated`;
   it is therefore a legal `deps` target and the published `fs-zorn-provable-in-zf`
   already uses it in exactly this way. Confidence route:
   **established-from-knowledge** — Cohen 1963 is universally established
   mathematics — corroborated by the two primary-source URLs the item carries
   (https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/ and
   https://pmc.ncbi.nlm.nih.gov/articles/PMC300611/). It goes in `deps`, not
   `external_refs`, because the refutation genuinely rests on it; the resulting
   fuchsia ‡ marker is correct.

**No `proved_here: false` item is created by this batch**, so no
`external_dependency` record is needed.

Everything else every item on these four pages needs is either earlier on the same
page or on page 5.1 or 5.2. `depsource.mjs` on the spliced spec reports
**0 unresolved, 0 planned-later, 0 homeless, 0 draft-page** for the whole library.

---

## 6. Forward references planned (all orientation-only unless stated)

| citing item | target | page and order | why |
|---|---|---|---|
| `def-language-of-set-theory` (Remarks) | `def-axiom-of-choice` | `order-zorn-and-the-axiom-of-choice`, 10 | ZFC is these nine axioms together with Choice; Choice already has an item and must not be minted twice. See finding F1. |
| `def-axiom-of-infinity` (Remarks) | `def-inductive-set` | `construction-of-the-natural-numbers`, 6 | Records that the unabbreviated closure clause is what that item calls inductive. §7 seams rule. |
| `def-axiom-of-infinity` (Remarks) | `def-natural-numbers` | 6 | Same. |
| `cor-the-successor-operation-is-injective` (Remarks) | `thm-omega-is-peano-system` | 6 | Records that clause (P2) there is the special case for $\omega$, proved differently. |
| `def-the-set-of-functions-from-one-set-to-another` (Remarks) | `rem-ordinal-versus-cardinal-exponentiation` | `ordinal-arithmetic`, 13 | The $B^{A}$ notation clash; §2.1(5). |
| `def-the-set-of-functions-from-one-set-to-another` (Remarks) | `def-function-space` | `vector-spaces-and-subspaces`, 30 | Records that $F^{X}$ there is this set with a vector-space structure. §7 seams rule. |
| `def-properties-of-a-relation-on-a-set` (Remarks) | `def-partial-order` | 10 | Records that reflexive + antisymmetric + transitive is what that item calls a partial order, and connex is what it calls total. §7 seams rule. |
| `thm-reflexive-and-irreflexive-orders-correspond` (Remarks) | `def-partial-order` | 10 | Same, for the strict/reflexive correspondence. |
| `def-cartesian-product` (Remarks) | `def-axiom-of-choice` | 10 | Records that the product formulation of Choice quantifies over this object. |
| `rem-which-axiom-each-construction-uses` | `def-axiom-of-choice` | 10 | The tenth axiom. |
| `rem-where-a-choice-principle-would-be-needed` | `def-axiom-of-choice`, `def-choice-function`, `rem-choice-ledger` | 10, 10, 12 | The two places a choice principle would be needed, and where the library's ledger lives. |
| `prop-products-over-small-index-sets` (Remarks) | `def-axiom-of-choice` | 10 | Whether a product of nonempty sets is nonempty is exactly Choice. |
| **`fs-every-surjection-has-a-right-inverse-in-zf`** (Facts & Refutation) | `def-axiom-of-choice` | 10 | **LOAD-BEARING**, and legal: `fwdcheck` confines load-bearing forward references to consequence kinds, and this is a `false-statement` on a B page. Declared in `forward_refs`, never in `deps` (`forward-in-deps` is an error). The page declares `forwardRefs: ["order-zorn-and-the-axiom-of-choice"]`. |

Non-load-bearing external mention planned as `external_refs` (not `deps`):

| citing item | mention | why |
|---|---|---|
| `def-axiom-of-power-set` | `rem-independence-of-ch-and-gch` (`deferred-set-theory-beyond-choice`, order 3) | The axiom asserts $\mathcal P(x)$ exists and says nothing about its size; CH is the standing example. Exactly the pattern `def-axiom-of-choice` already uses for `rem-cohen-forcing-ac-independent`. This is also what makes page 5.1's declared `requires: [deferred-set-theory-beyond-choice]` earn its place. |

---

## 7. Proof-obligation and boundary obligations for step 5

The full map is `research/zfc-batch-1.proof-contracts.json`, one entry per
proof-bearing item, all 62 of them, with a planned fact table, a planned step map and
all eight boundary dispositions. **That file is version 1 and its `quote` fields are
PLANNED text, not yet byte-exact**, because the cited items do not exist on disk yet.
Step 5 must refresh every `quote` against the authored Definition/Statement before
`proof-contract.mjs --strict` is run; the tool checks each quote as a substring of the
cited section and will fail otherwise. The step numbers in `derivations` are likewise
a plan and must be reconciled with the authored proofs.

`finite_smoke` is empty for every item. The four available checks
(`tree-characterisation`, `forest-edge-component-count`,
`induced-complement-commutes`, `cyclic-subgroup-lagrange`) are graph- and
group-theoretic; none has a meaningful bounded model for axiomatic set theory. Adding
a new check type would require an independently written implementation plus updates to
`QUALITY-CONTROLS.md` and `ARCHITECTURE.md`, which is out of scope for this batch.

The boundary cases that carry real risk here, and where each is disposed of:

1. **$\bigcap\varnothing$.** Never written as a set. `def-intersection-of-a-set-and-binary-intersection`
   defines $\bigcap x$ only for $x \neq \varnothing$;
   `lem-the-intersection-of-a-nonempty-set-is-a-set` carries the hypothesis;
   `cor-the-empty-family-has-no-intersection` proves it cannot be a set; and
   `fs-the-intersection-of-the-empty-family-is-the-empty-set` refutes the standard error.
   Every family-form law (`thm-de-morgan-laws`, `thm-distributive-laws-for-union-and-intersection`,
   `lem-monotonicity-of-union-and-intersection`, `def-indexed-union-and-intersection`,
   `cor-distributive-and-de-morgan-laws-for-indexed-families`) states the nonemptiness
   hypothesis in its Statement, not only in its proof.
2. **$\mathcal P(\varnothing) = \{\varnothing\}$, not $\varnothing$.**
   `prop-basic-properties-of-the-power-set` clause 1 and `ex-the-smallest-sets-and-their-power-sets`.
3. **$A \times \varnothing = \varnothing \times B = \varnothing$**, and the converse.
   `prop-cartesian-products-and-set-operations` clause 5.
4. **$\prod_{i\in\varnothing} A_i = \{\varnothing\}$, not $\varnothing$**, while a
   single empty factor collapses the product. Both in
   `prop-products-over-small-index-sets`, deliberately adjacent, because they pull
   in opposite directions.
5. **The empty relation and the empty function.** $\varnothing$ is a relation on every
   set, a function $\varnothing \to B$ for every $B$, a bijection
   $\varnothing \to \varnothing$, not a surjection $\varnothing \to \{\varnothing\}$,
   and the unique equivalence relation on $\varnothing$. All in
   `ex-the-empty-relation-and-the-empty-function`; the codomain convention that makes
   this coherent is fixed in `def-function` (§2.1(9)).
6. **$(a,a) = \{\{a\}\}$.** The degenerate Kuratowski pair is a separate case in
   `lem-unordered-pair-equality` and `thm-the-characterising-property-of-ordered-pairs`,
   and is the case where a proof that only compares two-element sets fails.
7. **Left inverses at an empty domain.** "Injective iff a left inverse exists" is
   **false** for $A = \varnothing$, $B \neq \varnothing$.
   `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`
   carries the hypothesis in its title and states the $A = \varnothing$ case separately.
8. **Right inverses need Choice.** The surjective analogue of (7) is **not** proved,
   because it is equivalent to the Axiom of Choice.
   `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse` is
   choice-free precisely because a two-sided inverse is *determined*, not selected;
   `rem-where-a-choice-principle-would-be-needed` says so, and
   `fs-every-surjection-has-a-right-inverse-in-zf` proves the equivalence with Choice.
9. **No general finite $\in$-cycle claim.** `thm-foundation-excludes-membership-cycles`
   proves lengths one, two and three only. The general statement needs a finite
   sequence, that is a function on a natural number, and $\omega$ is at order 6.
   The Remark must say "not available at this point in the reading order" — **never**
   "this library does not develop" (defect class 5).
10. **No $n$-tuples.** `def-iterated-products-and-ordered-triples` gives triples and
    iterated binary products only, for the same reason. `cex-the-cartesian-product-is-not-associative`
    is why the convention $(a,b,c) := ((a,b),c)$ has to be stated rather than assumed.

---

## 8. Authoring decisions with no other home

1. **The nine ZF axioms are stated in the language alone.** `def-axiom-of-infinity`
   and `def-axiom-of-foundation` are written **unabbreviated** — no $\varnothing$, no
   $x \cup \{x\}$, no $\cap$ — because those abbreviations are introduced later on the
   same page and a definition may not cite forward. Each of those two items then gives
   the abbreviated reading in a second paragraph, flagged as an abbreviation.
2. **`def-axiom-schema-of-replacement` states the schema in words plus a displayed
   formula**, following METU Axiom 10, and its Remark introduces the class-function
   reading. Replacement is used on this page only in the ledger's redundancy
   discussion; every construction here uses Separation instead, and the ledger says so.
3. **Landmarks** (`landmark: true`) planned: `def-language-of-set-theory`,
   `def-axiom-schema-of-separation`, `def-axiom-of-power-set`,
   `thm-the-empty-set-exists-and-is-unique`, `def-power-set`, `thm-russells-paradox`,
   `def-ordered-pair`, `thm-the-characterising-property-of-ordered-pairs`,
   `def-cartesian-product`, `rem-which-axiom-each-construction-uses` on 5.1; and
   `def-relation-domain-range-and-field`, `def-properties-of-a-relation-on-a-set`,
   `def-function`, `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`,
   `def-product-of-an-indexed-family`, `thm-universal-property-of-the-quotient`,
   `thm-canonical-decomposition-of-a-function` on 5.3. The three re-homed items keep
   their existing `landmark` values.
4. **`thm-the-empty-set-exists-and-is-unique` lists `def-language-of-set-theory` in
   `deps` without a matching `[F#]` fact.** The dependency is real and
   statement-level: step 1.1 appeals to the nonempty-domain convention that item
   fixes. Its Statement must therefore link `[[def-language-of-set-theory]]`, or
   `depcheck`'s load-bearing-citation check and `citecheck` will disagree with the
   `deps` list.
5. **Page summaries.** Both A pages get exactly two paragraphs, each under 150 words,
   per the owner's page-summary contract. Neither may count items, rank contents,
   describe another page, or claim a reading position not derived from the spec.
   Paragraph 1 of 5.1's summary has an unusual constraint: its only declared
   prerequisite page is the `not-proved-here` catalogue, so it must describe the
   *axiomatic starting point* rather than borrowed material.
6. **Symbols.** $\varnothing$ (not $\emptyset$), $\subseteq$ and $\subsetneq$ (never
   $\subset$, which METU and Wilson use with different meanings), $\bigcup$/$\bigcap$
   for the primitive operations, $\cup$/$\cap$ for the binary ones, $\triangle$ for
   symmetric difference, $R \restriction A$ for restriction, $\Delta_A$ for the
   identity relation, $B^{A}$ for the function set, $\ker f$ for the kernel
   equivalence. The library already uses $\varnothing$ and $\subseteq$ throughout.
7. **No wikilink inside `$…$`** anywhere (defect class 6): several planned titles and
   statements are heavily mathematical and this is the easiest way to break a page
   while every gate stays green.
8. **`[[lem-equivalence-classes-partition]]`'s Statement links `[[def-equivalence-relation]]`**,
   and both land on 5.3, so that link becomes an ordinary intra-page link rather than
   the forward reference it is today. No edit is needed for it.
9. **The title says ZFC; nine axioms are stated here and the tenth is Choice.**
   The orchestrator declined finding F8 at step 3, so page 5.1 keeps the title
   *The ZFC Axioms and the Basic Set Constructions*. Three places must therefore say
   plainly that Choice is the tenth axiom and that the library states it at
   `def-axiom-of-choice`, so the title can never be read as a claim that all ten
   axioms are stated or proved on this page:
   - `def-language-of-set-theory`'s Remark — the reader's first encounter with the
     axiom list. ZFC is the nine axioms stated on this page together with the Axiom
     of Choice, which the library states at `[[def-axiom-of-choice]]`. Already a
     declared orientation-only forward reference (§6).
   - `rem-which-axiom-each-construction-uses` — an explicit sentence naming Choice
     as the tenth axiom, saying it is stated at `[[def-axiom-of-choice]]`, and
     saying that no construction on this page uses it. Already a declared forward
     reference (§6); the ledger is the natural home for the fact.
   - Page 5.1's summary, paragraph 2 — one short sentence to the same effect.
     Mechanism to know before writing it: a **page** has no `forward_refs` field, so
     a page-prose wikilink can never be marked sky. `fwdcheck.mjs` warns
     `page-link-unresolved` only for a link that resolves to nothing and says
     outright "page prose cannot declare forward references, put it in an item's
     Remarks". A link to `def-axiom-of-choice` therefore resolves, passes, and
     renders as an ordinary citation. Keep the sentence factual and short so it
     stays inside SCHEMA §6: it states the scope of THIS page and names one item,
     and must not survey the other page or claim a reading position.

---

## 9. Gates run at step 2, and what they said

Run from the repo root against a **temporary** spliced copy of `research/plan-spec.json`
in the session scratchpad; `research/plan-spec.json` itself was not modified.

- `node tools/validate-plan.mjs <spliced>` — with the batch spliced and nothing else
  changed: **16 errors**, all three re-homing artefacts (3 `dup-id` in the spec,
  3 `dup-id` against `library/`, 6 `intra-order`, 4 `undeclared-prereq`).
  With the three re-homed ids additionally removed from the `monoids-groups-and-subgroups`
  and `countability-and-uncountability` entries of the spec, and
  `relations-functions-and-quotients` added to `countability-and-uncountability`'s
  `requires`: **3 errors**, all of them the `dup-id` check that reads the two
  published page **files** in `library/` and therefore cannot clear until the
  orchestrator edits those files at publish time. **No error attributable to the
  scaffold itself remains.** Warnings on the batch: none (both A pages are under the
  100-item review ceiling; no `size` warning).
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later, 0 homeless,
  0 draft-page** across the whole library; 207 new `planned-earlier` deps, all
  internal to the batch.
- `node tools/prosecheck.mjs research/zfc-batch-1.notes.md research/zfc-published-rewiring.md --warnings` — see the report.

Not run, because they require the authored items on disk: `precheck`, `depcheck`,
`fwdcheck`, `extcheck`, `citecheck`, `rendercheck`, `proof-contract.mjs`,
`risk-report.mjs`, `finite-smoke.mjs`. `content-policy.mjs --manifest-only` was
wrongly listed here too; it reads the manifest, not the items, and §10 below
records the run and its result.

---

## 10. Step-3 adjudication applied

The orchestrator adjudicated the step-1/2 report on 2026-08-06. F1–F7 approved
unchanged, F9 noted, **F8 declined**, and one required fix. What changed:

### 10.1 F8 declined — page 5.1 keeps its title

`The ZFC Axioms and the Basic Set Constructions` stands. The obligation that
replaces the retitle is §8 item 9 above: `def-language-of-set-theory`'s Remark,
`rem-which-axiom-each-construction-uses`, and paragraph 2 of page 5.1's summary
each say plainly that Choice is the tenth axiom and is stated at
`def-axiom-of-choice`. The two Remark links were already declared forward
references in §6; only the summary sentence is new, and §8 item 9 records why it
cannot be marked sky and what SCHEMA §6 still forbids it from saying.

### 10.2 REQUIRED FIX — the one B-page dependency edge is gone

`node tools/content-policy.mjs research/zfc-batch-1.pages.json --manifest-only`
reported `batch-b-leaf-target` on the batch's only B-page dependency edge:
`fs-symmetry-and-transitivity-imply-reflexivity` listed
`cex-a-symmetric-transitive-relation-that-is-not-reflexive` in `deps`. SCHEMA §7
permits an earlier item on the same B page; `content-policy.mjs` has no same-page
exemption and is a hard gate at steps 4, 5 and 6. The scaffold changed, not the
gate.

- **`fs-symmetry-and-transitivity-imply-reflexivity`** drops that dep and now
  exhibits its own witness inline in the Refutation. `deps` become
  `def-properties-of-a-relation-on-a-set`, `def-equivalence-relation`,
  `def-relation-domain-range-and-field`, `def-cartesian-product`,
  `def-ordered-pair`, `def-unordered-pair-and-singleton`,
  `thm-the-empty-set-exists-and-is-unique` — every one of them on page 5.1 or
  earlier on page 5.3, and every one of them carried by an `[L#]` fact in the
  rewritten contract (7 deps, 7 facts, one-to-one).
- Its contract is rewritten to seven strictly stratified steps: 1.1 the plausible
  argument, 1.2 the witness $A := \{\varnothing,\{\varnothing\}\}$ with
  $R := \{(\varnothing,\varnothing)\}$, 2.1 the located gap (symmetry and
  transitivity constrain $R$ only on $\operatorname{fld} R$), 2.2 $R$ is a
  relation on $A$, 2.3 symmetric and transitive, 3.1 not reflexive on $A$, 4.1 the
  conclusion that the reflexivity clause of an equivalence relation is not
  redundant.
- The two items may still refer to each other in prose. A wikilink is not a `deps`
  edge, and both sit on page 5.4, so such a link is an ordinary intra-page link,
  not a forward reference.

### 10.3 What the fix forced me to reconsider

1. **Which witness the false statement should carry.** My first choice was the
   minimal one, the empty relation on $\{\varnothing\}$ — literally the Wikipedia
   sentence in the source ledger. I withdrew it: `ex-the-empty-relation-and-the-empty-function`,
   on the *same* B page, already concludes "it is reflexive on $\varnothing$,
   symmetric and transitive … it is not reflexive on any nonempty set", so that
   witness would have made the false statement a restatement of a neighbour it is
   forbidden to cite — the same collision the fix was removing, one item over. The
   nonempty witness duplicates the counterexample instead, and that pairing is the
   one the orchestrator sanctioned.
2. **The counterexample had to earn the word "fuller".** With the false statement
   carrying the same witness, the counterexample's three planned steps were a
   strict subset of it. It is extended to seven steps that do the analysis the
   false statement does not: 2.3 computes
   $\operatorname{dom} R = \operatorname{ran} R = \operatorname{fld} R = \{\varnothing\}$,
   3.2 observes that $R$ *is* reflexive on $\operatorname{fld} R$, and 4.1 locates
   the whole failure at the single point of $A$ outside the field. **No new id, no
   new dep, no general theorem** — 4.1 is stated about this instance only. The
   general fact (a symmetric transitive relation is reflexive on its field) is
   true and provable here, but it would be an A-page lemma and a scaffold change
   nobody asked for; if Alpha wants it at step 6 it is one item on 5.3.
3. **A boundary obligation moved.** The counterexample's `empty` boundary used to
   say the empty relation "works equally well and is noted in the item"; that
   sentence now belongs to `ex-the-empty-relation-and-the-empty-function` and the
   evidence says so. The false statement acquires its own `empty` obligation, and
   it is the sharp one: for $A = \varnothing$ the claim is **vacuously true**, so
   the witness must have a nonempty ambient set with a point outside
   $\operatorname{fld} R$. §7 item 5 is unaffected.
4. **Provenance is unchanged.** `fs-symmetry-and-transitivity-imply-reflexivity`
   keeps `statement: literature-derived` (§3.4 — it is exactly the claim the
   Wikipedia passage exists to deny) and `proof: ai-altered`; the witness it now
   exhibits was already the counterexample's, and a locally chosen hereditarily
   finite witness is what makes that component `ai-altered` rather than
   `literature-derived`. No item's labels move.

### 10.4 The re-home receipt

The orchestrator added `research/zfc-rehomed.json` and taught
`content-policy.mjs` and `validate-plan.mjs` a `--rehomed FILE` flag, so the
three re-homed ids are no longer read as illegal id mints. Nothing in this
scaffold changed for it, and both gates need the flag: without it they still
fail.

### 10.5 The gate, re-run

```
$ node tools/content-policy.mjs research/zfc-batch-1.pages.json --manifest-only \
    --rehomed research/zfc-rehomed.json
content-policy: 95 scoped item(s), 0 error(s), 0 warning(s)
```

---

## 11. Step-5 authoring progress

### 11.1 Page 5.1 — `the-zfc-axioms-and-basic-set-constructions` (39 items) — AUTHORED

All 39 items written as `status: draft`, `origin: session`, with both `provenance`
components and `sources.references` URLs (every URL re-verified HTTP 200 during
this step). Gates actually run, on the 39 files:

```
reflow.mts        all 39 processed
precheck.mts      19 checked, 0 failing — all clean
rendercheck.mjs   OK — whole corpus, no KaTeX/YAML/delimiter defect
prosecheck.mjs    39 files, 0 errors, 0 warnings
depcheck.mjs      no error and no warning naming a 5.1 id
fwdcheck.mjs      no error naming a 5.1 id
proof-contract.mjs --items <the 19>   0 error(s), 0 warning(s), 19/19 checked
```

Contract refresh: **complete for 5.1**. Every `citations[].quote` is now a
byte-exact substring of the cited item's real section, every `uses` list is
computed from the authored step tags, and every step has exactly one
`derivations` entry whose `inputs` cover its cited tokens. Boundary evidence was
re-anchored to the authored step numbers (41 evidence lines rewritten), because
the planned numbering did not survive the canonical stratification.

Deviations from the planned scaffold, all deliberate:

- `lem-unions-and-intersections-of-small-families` — clauses (iii) and (v) of the
  planned title are *definitional* under `a \cup b := \bigcup\{a,b\}` and
  `a \cap b := \bigcap\{a,b\}`, so the Statement additionally carries the two
  membership criteria, which is where the proof does real work. Title unchanged.
- `prop-basic-properties-of-the-power-set` — a clause (viii) was added: the
  inclusion $\mathcal{P}(a)\cup\mathcal{P}(b) \subseteq \mathcal{P}(a\cup b)$ is
  an equality exactly when $a \subseteq b$ or $b \subseteq a$. The planned title
  says "only ... holds", which asserts that equality fails in general; clause
  (viii) is what discharges that assertion without citing a B-page item.
- `cor-there-is-no-set-of-all-sets` — dropped `def-axiom-of-extensionality` from
  `deps` (unused by the proof).
- `thm-foundation-excludes-membership-cycles` — dropped
  `def-intersection-of-a-set-and-binary-intersection` and
  `thm-the-empty-set-exists-and-is-unique`; the proof is phrased in Foundation's
  own "shares no member with" wording, so no intersection is needed. Added
  `lem-unions-and-intersections-of-small-families` for the three-element set.
- `cor-the-successor-operation-is-injective` — dropped
  `def-axiom-of-extensionality`, added
  `lem-unions-and-intersections-of-small-families` (the union membership
  criterion is what the proof actually uses).
- Several items gained `lem-unions-and-intersections-of-small-families` in
  `deps`, because the binary membership criteria live there rather than in the
  definitions.
- No A-page item links a B-page item. Two such links were written and removed
  during authoring (`thm-russells-paradox` and
  `def-intersection-of-a-set-and-binary-intersection`): an A-to-B link is an
  undeclared forward reference under `fwdcheck`, and a B-page dep is a
  `content-policy` error.

The Choice sentence (step-3 adjudication F8) is discharged in all three required
places: `def-language-of-set-theory`'s Remark, `rem-which-axiom-each-construction-uses`
(its own bullet, naming Choice as the tenth axiom of ZFC), and paragraph 2 of the
page summary.

### 11.2 Page 5.2 — `…-examples` (10 items) — AUTHORED

All 10 written; page file created with `items: []` and the ten ids under
`examples:`. Gates actually run:

```
precheck.mts      10 checked, 0 failing — all clean
rendercheck.mjs   OK — whole corpus
prosecheck.mjs    11 files (10 items + page), 0 errors, 0 warnings
depcheck/fwdcheck no error or warning naming a 5.2 id
proof-contract.mjs --items <the 10>   0 error(s), 0 warning(s), 10/10 checked
```

Contract refresh: **complete for 5.2**.

Deviations:

- `ex-the-smallest-sets-and-their-power-sets` gained
  `def-union-of-a-set-and-binary-union` and
  `lem-unions-and-intersections-of-small-families` in `deps`, for the
  four-element abbreviation $\{x,y,z,w\} := \{x,y\} \cup \{z,w\}$.
- `ex-recovering-the-coordinates-of-an-ordered-pair` states, in addition to the
  two identities of the title, the recovery of the *second* coordinate as the
  unique element of $\bigcup(a,b) \setminus \bigcap(a,b)$ when that difference is
  nonempty, and $b = a$ when it is empty. Without it the title's "both
  coordinates are recovered" would assert more than the proof gives.
- `cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets` uses
  the new clause (viii) of `prop-basic-properties-of-the-power-set` and then also
  exhibits the missing element explicitly.
- No item on 5.2 lists another 5.2 item in `deps` (the `batch-b-leaf-target`
  rule); where two of them concern the same phenomenon they repeat the witness
  rather than cite one another.

## Continuity checkpoint (step 5, mid page 5.3)

- **Substage.** Step 5 authoring. Pages 5.1 (39 items) and 5.2 (10 items) are
  authored, gated and contract-refreshed; both page files exist as `status: draft`.
  Page 5.3 is in progress.
- **Authored so far on 5.3, in reading order:**
  `lem-the-domain-and-range-of-a-relation-are-sets`,
  `def-relation-domain-range-and-field`,
  `lem-a-relation-is-included-in-the-product-of-its-domain-and-range`,
  `lem-inverse-relations-composites-and-restrictions-are-sets`,
  `def-inverse-relation-composition-and-restriction`,
  `def-image-and-preimage-under-a-relation`,
  `def-the-identity-and-membership-relations-on-a-set`,
  `prop-composition-of-relations-is-associative`,
  `prop-images-and-preimages-under-a-relation-and-set-operations`,
  `def-properties-of-a-relation-on-a-set`,
  `thm-reflexive-and-irreflexive-orders-correspond`,
  `def-function`,
  `lem-two-functions-are-equal-exactly-when-they-agree-at-every-point`,
  `lem-the-composite-of-two-functions-is-a-function`,
  `prop-composition-preserves-injectivity-surjectivity-and-bijectivity`,
  `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`,
  `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`,
  `thm-preimages-commute-with-unions-intersections-and-differences`,
  `prop-images-of-unions-and-intersections-under-a-function`.
  Every one passes `precheck`.
- **Still to author on 5.3:**
  `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity`,
  `lem-the-set-of-functions-between-two-sets-is-a-set`,
  `def-the-set-of-functions-from-one-set-to-another`, `def-indexed-family`,
  `def-indexed-union-and-intersection`,
  `cor-distributive-and-de-morgan-laws-for-indexed-families`,
  `lem-the-product-of-an-indexed-family-is-a-set`,
  `def-product-of-an-indexed-family`, `prop-products-over-small-index-sets`,
  `lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product`,
  `lem-the-kernel-of-a-function-is-an-equivalence-relation`,
  `thm-universal-property-of-the-quotient`,
  `thm-canonical-decomposition-of-a-function`,
  `rem-where-a-choice-principle-would-be-needed`. Then all ten items of 5.4,
  then the two remaining page files, then the 5.3/5.4 contract refresh.
- **Open mathematical constraints carried forward.**
  1. No item on 5.1/5.3 may link an item homed on 5.2/5.4 (undeclared forward
     reference), and no 5.2/5.4 item may list a same-page item in `deps`
     (`content-policy` `batch-b-leaf-target`).
  2. `thm-reflexive-and-irreflexive-orders-correspond` sits before
     `def-injection-surjection-bijection` in the reading order, so its Statement
     spells the correspondence out as sethood plus two mutually inverse
     assignments rather than using the word "bijection" as a cited notion.
  3. The three re-homed published items are NOT written and NOT edited; they are
     cited freely and appear only in page 5.3's `items:` list.
  4. Facts carry exactly one wikilink each, so every `citations` entry has one
     exact quote; this was checked mechanically across all authored items.
- **Method for contracts.** `citations`/`derivations` are regenerated from the
  authored text by a scratchpad script, then `boundaries` evidence is re-anchored
  to the real step numbers and `proof-contract.mjs --items <page>` is run. Pages
  5.1 and 5.2 report `0 error(s), 0 warning(s)`.
- **Exact next action.** Author
  `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity` and
  continue down the 5.3 list above.

### 11.3 Page 5.3 — `relations-functions-and-quotients` (33 new + 3 re-homed) — AUTHORED

All 33 new items written; the three re-homed ids were **not** created and **not**
edited, and appear only in the page file's `items:` list at their scaffold
positions. Gates actually run:

```
precheck.mts      22 checked, 0 failing — all clean  (the 33 new files)
rendercheck.mjs   OK — whole corpus
prosecheck.mjs    33 files, 0 errors, 0 warnings
proof-contract.mjs --items <the 22 proof-bearing>   0 error(s), 0 warning(s)
```

Deviations and decisions:

- `thm-reflexive-and-irreflexive-orders-correspond` sits at position 11, before
  `def-injection-surjection-bijection` at position 14, so the word "bijection"
  in its planned title is not a notion available to its Statement. The Statement
  therefore spells the content out: the two collections are sets inside
  $\mathcal{P}(A \times A)$, each assignment lands in the other collection, and
  the two compositions are the identity. A closing sentence says that this is
  what "mutually inverse bijections" means. The title is unchanged.
- `def-function` and `def-product-of-an-indexed-family` had a citation moved out
  of the middle of a defining sentence, so that the sentence itself is quotable
  verbatim by the items that cite it.
- `cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity`
  dropped `prop-images-of-unions-and-intersections-under-a-function` from `deps`:
  the round-trip criteria are proved directly from injectivity, and the lemma's
  own equality criterion is not used. The Remark still points at it.
- `prop-products-over-small-index-sets` dropped `def-indexed-family` from `deps`
  (no step used it).
- `rem-where-a-choice-principle-would-be-needed` added
  `lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product`
  to `deps`, since the remark rests on that computation.
- Facts throughout carry exactly one wikilink each, so every `citations` entry
  has one exact quote; this was verified mechanically over all authored items.

### 11.4 Page 5.4 — `…-examples` (10 items) — AUTHORED

All 10 written; page file created. Gates actually run:

```
precheck.mts      10 checked, 0 failing — all clean
rendercheck.mjs   OK — whole corpus (3043 files)
prosecheck.mjs    11 files (10 items + page), 0 errors, 0 warnings
proof-contract.mjs --strict (whole file)  0 error(s), 0 warning(s), 62/62 checked
```

`ex-a-nonempty-product-built-without-choice` is the batch's only
`provenance.statement: ai-generated` item; it carries `generation.role: example`
and is not a `deps` target anywhere (`content-policy.mjs` confirms). Its second
half is sharper than planned: $\prod_{i \in I}\{i\}$ is not merely nonempty but
is exactly $\{\Delta_I\}$, the identity relation being the unique element.

`fs-every-surjection-has-a-right-inverse-in-zf` carries
`rem-cohen-forcing-ac-independent` in `deps` (the ‡ tier) exactly as the
published `fs-zorn-provable-in-zf` does, and derives the product formulation of
Choice from the refuted principle before quoting Cohen.

### 11.5 Whole-batch gate results at the end of step 5

```
precheck.mts (bare)                2172 checked, 0 failing — all clean
rendercheck.mjs                    OK — 3043 files
proof-contract.mjs --strict        0 error(s), 0 warning(s), 62/62 checked
content-policy.mjs --rehomed       95 scoped item(s), 0 error(s), 0 warning(s)
validate-plan.mjs --rehomed        OK — declared page order acyclic and consistent
depsource.mjs                      OK — 0 unresolved
extcheck.mjs                       OK
prosecheck.mjs (batch files)       0 error(s), 0 warning(s)
citecheck.mjs                      2 warnings on batch items, both triaged below
finite-smoke.mjs                   0 error(s), 0 check(s)   (no applicable check type)
risk-report.mjs                    62 item(s) routed; needs Alpha `risk_review`
depcheck.mjs                       FAIL — 1 error, see §11.6
fwdcheck.mjs                       FAIL — 22 errors, see §11.6
```

`citecheck` triage: `[order-axioms]` on
`def-properties-of-a-relation-on-a-set` and on
`fs-symmetry-and-transitivity-imply-reflexivity`. Both are the documented false
positive: the items use the words "reflexive", "antisymmetric" and "transitive"
because they are about those properties, and `def-partial-order` is at order 10,
so it is a forward reference and not a dependency. No dep was added.

### 11.6 The two hard gate failures, both caused by the deliberate multi-homing

Neither is fixable at step 5 without editing a published page file, which this
run forbids. Both clear when E4a and E5a of
`research/zfc-published-rewiring.md` are applied in the publish commit.

**`depcheck` — 1 error.**

```
[page-cycle] CIRCULAR PAGES: monoids-groups-and-subgroups ->
  relations-functions-and-quotients -> countability-and-uncountability ->
  monoids-groups-and-subgroups
```

Mechanism, verified from the tools: `depcheck` and `fwdcheck` both attribute an
item to the **first** page file that lists it, in directory-walk order. So
`library/abstract-algebra/…` wins `def-equivalence-relation` and
`lem-equivalence-classes-partition` for `monoids-groups-and-subgroups` (#24),
while `library/foundations/…` wins `def-injection-surjection-bijection` for
`relations-functions-and-quotients` (#5.3), because "foundations" precedes
"real-analysis". That split attribution is what closes the loop: 5.3 depends on
#24 through the equivalence items, #18 depends on 5.3 through
`def-injection-surjection-bijection`, and #24 already depended on #18 before this
run. Removing the three ids from the two published page files homes all three on
5.3 and breaks the cycle. `multi-home` warnings are raised for all three ids, as
the brief predicted.

**`fwdcheck` — 22 errors.** Twenty-one are `forward-undeclared`, and every one
names `def-equivalence-relation` or `lem-equivalence-classes-partition` pointing
"forward" to `monoids-groups-and-subgroups` (#24) — the same first-page
attribution. The twenty-second is `stack-cycle` over the same loop. Once the two
published page files drop the ids, each of those links becomes an ordinary
intra-page link on 5.3 and the errors disappear; declaring them in
`forward_refs` would be wrong, because `fwdcheck` itself rejects a forward
reference to an item on the citing item's own page (`forward-same-page`).

**No published item file and no published page file was modified.** The working
tree shows the 92 new items, the 4 new page files and this batch's research
artifacts as additions; the only modified tracked files are the orchestrator's
own step-3/4 changes (`ARCHITECTURE.md`, `LEVELS.md`, `research/plan-spec.json`,
`tools/content-policy.mjs`, `tools/gates.mjs`, `tools/validate-plan.mjs`).

---

## 12. The second re-home (owner, 2026-08-06) and what it changed

The owner's standing directive for this run is to minimize forward references
involving direct consequences of ZFC, concentrate those consequences in these
two A/B pairs, and leave everything clean. Acting on it, the orchestrator
re-homed three more published items onto page 5.3 and updated
`research/plan-spec.json` and `research/zfc-rehomed.json`:

| id | from | spec position on 5.3 |
|---|---|---|
| `def-partial-order` | `order-zorn-and-the-axiom-of-choice` (10) | 11 |
| `def-choice-function` | `order-zorn-and-the-axiom-of-choice` (10) | 30 |
| `def-axiom-of-choice` | `order-zorn-and-the-axiom-of-choice` (10) | 31 |

Page 5.3 now has 39 items. `library/foundations/relations-functions-and-quotients.md`
lists the three ids at exactly those positions.

### 12.1 The seven `fwdcheck` errors this created, and how each was cleared

`fwdcheck` failed with the exact inverse of the step-5 failure recorded in §11.6:
declarations that were correct while the targets sat on order 10 became wrong the
moment the targets landed on page 5.3.

| error | item | fix |
|---|---|---|
| `forward-same-page` | `def-properties-of-a-relation-on-a-set` -> `def-partial-order` | dropped from `forward_refs`; the Remark link is now an ordinary intra-page link to the next item |
| `forward-same-page` | `thm-reflexive-and-irreflexive-orders-correspond` -> `def-partial-order` | dropped from `forward_refs` and **promoted to `deps`** — the target is now one position earlier on the same page |
| `forward-same-page` | `def-product-of-an-indexed-family` -> `def-axiom-of-choice` | dropped from `forward_refs` |
| `forward-same-page` | `prop-products-over-small-index-sets` -> `def-axiom-of-choice` | dropped from `forward_refs` |
| `forward-same-page` x2 | `rem-where-a-choice-principle-would-be-needed` -> `def-axiom-of-choice`, `def-choice-function` | dropped from `forward_refs`, both **promoted to `deps`**; only `rem-choice-ledger` (order 12) remains forward |
| `forward-not-later` | `fs-every-surjection-has-a-right-inverse-in-zf` -> `def-axiom-of-choice` | **the load-bearing one.** Moved out of `forward_refs` and into `deps`, with a new `[L14]` fact quoting the product formulation and cited by step 4.1 |

The batch now declares **five** forward references, all orientation-only, none
load-bearing: three on page 5.1 to `def-axiom-of-choice` (`def-language-of-set-theory`,
`def-cartesian-product`, `rem-which-axiom-each-construction-uses` — 5.1 precedes 5.3,
so these stay and are correct), one to `rem-choice-ledger`, and the 5.1/5.3 seam
references recorded in §6 that point at pages 6, 13 and 30. **Page 5.4 no longer
forward-references any page**, and its `forwardRefs` list in
`research/zfc-batch-1.pages.json` is now empty.

### 12.2 Where the mathematics changed, not only the wording

1. **`thm-reflexive-and-irreflexive-orders-correspond` gained clause (vi) and a
   real dependency.** §11.3 recorded that this item was written to avoid the term
   "partial order" because it lived five pages up. With `def-partial-order` one
   position earlier on the same page, $\mathcal{R}$ is now named as the partial
   orders on $A$ and the item cites the definition through two new facts, `[L15]`
   (the three clauses) and `[L16]` (the associated strict order). The substantive
   addition is **clause (vi)**: for $R \in \mathcal{R}$, $(x,y) \in R \setminus \Delta_A$
   iff $(x,y) \in R$ and $x \neq y$, so $R \setminus \Delta_A$ *is* the strict
   order `def-partial-order` associates with $R$. Without it the theorem's first
   assignment and that item's strict-order construction were two unrelated maps
   on one page — the silent-redefinition defect of `briefs/beta-scaffold.md` §7.
   Proved as step 1.3 from `[L6] [L7] [L12] [L13] [L15] [L16]`; step 4.1 now
   discharges (i) to (vi). The title was widened to say "the partial orders on
   $A$" and to state the strict-order identification, so it asserts exactly what
   the proof gives.
2. **The connex/total-order reconciliation is now explicit.**
   `def-properties-of-a-relation-on-a-set` carries a dictionary in the style of
   `def-metrizable-space`: partial order = reflexive on $P$ + antisymmetric +
   transitive; strict order = $\le \setminus \Delta_P$; comparable = the connex
   condition read at one pair; total order = partial order + connex on $P$. The
   old text left "connex" here and "total order" there as two unrelated names on
   what is now one page. `def-partial-order` cannot be a `deps` target of this
   item — it sits one position **later** — so the agreement is recorded in the
   Remarks as an intra-page link, and the theorem carries the load-bearing half.
3. **The correspondence does not transport connexity, and the item now says so.**
   An irreflexive relation is connex on $A$ only when $A$ is empty, so the
   bijection of clauses (iii)–(v) is between partial orders and irreflexive
   transitive relations and **not** between total orders and their strict forms.
   That was invisible while "total order" was five pages away.
4. **The product formulation of Choice finally has a product to point at.**
   §1.2 item 10 recorded that `def-axiom-of-choice` says its second formulation is
   "immediate from the definition of the Cartesian product" — a definition the
   library did not contain. It does now, twenty-nine positions earlier in the same
   reading order. `def-product-of-an-indexed-family` records that the formulation
   quantifies over exactly the object it defines;
   `prop-products-over-small-index-sets` records that its clause (ii) is why that
   formulation carries the nonemptiness hypothesis; and `E11b` of
   `research/zfc-published-rewiring.md` repairs the sentence itself.
5. **A choice function is an element of a product, and this is now written out.**
   `rem-where-a-choice-principle-would-be-needed` proves the identification in
   prose: index $\mathcal{F}$ by itself with $\Delta_{\mathcal{F}}$
   (a function by clause (ii) of `lem-the-composite-of-two-functions-is-a-function`),
   whose range is $\mathcal{F}$ and whose indexed union is $\bigcup \mathcal{F}$;
   unfolding `def-product-of-an-indexed-family` for that family gives word for word
   the choice functions of `def-choice-function`. So `def-axiom-of-choice`'s two
   formulations are one statement about one object. This is the reason the owner's
   directive routed `def-choice-function` onto a page about functions.

### 12.3 Prose repaired because the definitions are now present rather than absent

- `rem-where-a-choice-principle-would-be-needed` — retitled. The old title said
  "Every result on this page is proved without a choice principle", which is still
  literally true but reads as a claim that the page is choice-innocent while the
  axiom now sits on it. It says instead that the axiom is stated here and assumed
  by no proof, and the opening paragraph says so first.
- `prop-products-over-small-index-sets`, `def-product-of-an-indexed-family` —
  "which this library states at" became "stated earlier/later on this page".
- `cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`
  — "exactly the choice that cannot be made here" was misleading once the axiom is
  on the page; it now names `def-axiom-of-choice`, says the page assumes it in no
  proof, and calls the obstruction the simultaneous selection no proof here makes.
- Checked and left alone: the three page-5.1 items that mention Choice
  (`def-language-of-set-theory`, `def-cartesian-product`,
  `rem-which-axiom-each-construction-uses`). Each says the library states Choice at
  `def-axiom-of-choice` and that no construction or result on page 5.1 uses it.
  All three sentences are still true, and all three forward references still point
  strictly forward, 5.1 to 5.3.
- Page 5.3's summary, paragraph 2, was rewritten: it now names the order
  vocabulary and says that the Axiom of Choice is stated in terms of choice
  functions and assumed in no proof. Two paragraphs, 71 and 146 words, no counts,
  no ranking, no positional claim outside the spec. Paragraph 1 is unchanged: the
  page's only declared prerequisite is still page 5.1.

### 12.4 Staged published-side edits (nothing applied)

`research/zfc-published-rewiring.md` §4 was re-read against the new home and
extended. E10a–E10c, E11a–E11b and E12a–E12c stay valid, and every `deps` entry
they propose is legal on page 5.3 because each target is strictly earlier there.
New:

- **E10d** — three Remarks of `def-partial-order` say "this page" and "every
  statement below" about `thm-bourbaki-witt`, `thm-zorn`, `thm-zorn-implies-ac`,
  `lem-extremal-cut-closed-under-f`, `lem-successor-of-extremal`,
  `def-chain-complete-poset` and `fs-maximal-is-greatest`, none of which is on
  page 5.3. Same defect class as E1f/E1g. **E10e** removes the stale stamps.
- **E10f** — OPTIONAL and **recommended for decline**: a reciprocal pointer from
  `def-partial-order`'s strict-order sentence to the theorem. The agreement is
  already recorded from the other two sides, so declining loses nothing.
- **E11c** — `def-axiom-of-choice`'s last Remark promises that "Everything on this
  page after `lem-finite-choice`" that invokes AC is flagged; `lem-finite-choice`
  is not on page 5.3 and nothing on page 5.3 invokes AC. **E11d** removes the
  stale stamps. E10 and E11 are therefore reclassified (i) -> (ii) MATERIAL.
- **E12** re-read and unchanged: every Remark of `def-choice-function` is
  scope-free, and its three wikilinks are forward from position 30 exactly as they
  were from order 10. Classification stays (i); its `published-audit` stamp stands.
- Checked and clean: no item still homed on `order-zorn-and-the-axiom-of-choice`
  refers to the departed definitions with a page-relative phrase. The three
  "this page" sites there (`def-admissible-set`, `lem-all-extremal`,
  `lem-finite-choice`) all name items that stayed.

### 12.5 Gates after the change

```
fwdcheck.mjs                       OK
depcheck.mjs                       OK — no cycles, all references resolve
precheck.mts (bare)                2172 checked, 0 failing
gates.mjs --step 5 --run zfc       STEP 5 CLEAR, all 12 gates
                                   content-policy 98 scoped / 0 errors
                                   proof-contract --strict 62/62
validate-plan.mjs                  FAIL — 4 `undeclared-prereq`, ORCHESTRATOR-OWNED
```

The four `validate-plan` errors are not fixable from this Beta's writable set.
`order-zorn-and-the-axiom-of-choice`, `order-zorn-and-the-axiom-of-choice-examples`,
`limsup-and-subsequential-limits` and `ordinals-and-transfinite-recursion` all
contain published items depending on the three newly re-homed ids, and none of
their declared `requires` closures reaches `relations-functions-and-quotients`.
**One spec line clears all four**, because the other three reach page 10 in their
closures: add `relations-functions-and-quotients` to
`order-zorn-and-the-axiom-of-choice`'s `requires`. Verified on a scratch copy of
the spec, not on `research/plan-spec.json`, which this Beta does not write.
A second, cosmetic spec item: `relations-functions-and-quotients-examples` still
declares `forwardRefs: ["order-zorn-and-the-axiom-of-choice"]`, which is now
unused; `validate-plan` passes either way, and the batch manifest already records
it as empty.

`citecheck` still reports the two documented `[order-axioms]` false positives, and
the reason for one of them has changed. On
`def-properties-of-a-relation-on-a-set` the target `def-partial-order` is now on
the same page but one position **later**, so it cannot be a `deps` entry at all.
On `fs-symmetry-and-transitivity-imply-reflexivity` the item is about a general
relation rather than an order, and `def-properties-of-a-relation-on-a-set` already
supplies every property it names; adding `def-partial-order` would be exactly the
unused dep `citecheck`'s own message forbids. No dep was added for either.
