# `freegroups-1` — Step 9 scope-denial and published-claim-decay sweep

**Date:** 2026-08-10

**Authority:** delegated orchestrator judgment for Step 9 only

**Write boundary:** this report only; no item, page, amendment, ledger, receipt,
status, or verification field was changed.

## 1. Disk scope and method

The mint-only manifest
`research/freegroups-1-batch-1.pages.json` resolves to exactly **37 existing
draft items**: 26 intended for the A page and 11 intended for the companion
examples page. All 37 have `status: draft`. I grepped those exact files and both
currently published page files, then read every returned line in context. I also
checked the future page prose in
`research/freegroups-1-published-amendments.md`, the seven currently published
items on the pair, corpus mentions of free groups and presentations, both
`library/topology/the-fundamental-group*` pages, all four `deferred-*` catalogue
pages, and `DEFERRED.md`.

The term screens covered the named exclusions and their likely paraphrases:
Novikov, Boone, Dehn, decision/word problem, solvability, residual finiteness,
Knuth--Bendix, Todd--Coxeter, decidability, computability, Turing/recursive
machinery, algorithms, effective computation, Nielsen, Schreier, free
subgroups, unrestricted bases/cardinalities, and infinite rank. A second screen
looked for procedure/rewriting/termination language so that the three permitted
delete-only witnesses were reviewed rather than hidden by the exclusions.

## 2. Scope-denial re-grep

### 2.1 Computability and decidability — no real reliance

There are **zero hits** in the 37 items or either current page for Novikov,
Boone, Dehn's decision problems, “word problem”, “solvable word problem”,
residual finiteness, Knuth--Bendix, Todd--Coxeter, `decidable`, `computable`,
`effectively computable`, Turing machines, recursive functions, or an assertion
that an algorithm exists. Neither current page body has any computability or
decidability hit.

One literal `algorithm` hit is a false positive:

- `ex-presentation-of-a-finite-cyclic-group`,
  `items/ex-presentation-of-a-finite-cyclic-group.md:10` — the dependency id is
  `thm-division-algorithm-in-z`. The cited fact at line 40 is the ordinary
  Euclidean-division existence statement. It supplies standard representatives
  modulo $n$ and asserts no computability, decision procedure, or termination
  property.

The broader procedure/rewriting screen returned exactly the three D2a witnesses
(id/title hits included below). All are legitimate pure algebra, and none has
drifted into decidability language:

- `cex-delete-only-relator-rewriting-misses-ba`,
  `items/cex-delete-only-relator-rewriting-misses-ba.md:2,4,27,32,39,53` — the
  text defines one narrow syntactic procedure and exhibits the identity word
  $ba$ on which no allowed move applies. It does not claim that group equality
  is undecidable or that some other procedure cannot decide it.
- `cex-delete-only-relator-rewriting-can-require-lengthening`,
  `items/cex-delete-only-relator-rewriting-can-require-lengthening.md:2,4,27,31,34,39,57`
  — the text proves that a path using the stated elementary insertions,
  deletions, and free cancellations must first lengthen this particular word.
  It makes no general algorithmic or decision-problem claim.
- `cex-delete-only-relator-rewriting-is-order-dependent`,
  `items/cex-delete-only-relator-rewriting-is-order-dependent.md:2,4,27,31,38,54`
  — the two explicit deletion orders end at different terminal strings. This is
  a finite syntactic witness, not a confluence algorithm or decidability claim.

**Verdict:** D2 and D2a are both respected. There is no fatal out-of-scope
computability reliance.

### 2.2 Nielsen--Schreier — absent

There are zero `Nielsen` or `Schreier` hits. Direct semantic screens for a
subgroup of a free group being free also returned zero. The ordinary `subgroup`
hits concern generated subgroups, kernels, normal closures, commutator
subgroups, and concrete permutation subgroups; none asserts or assumes that
every subgroup of a free group is free.

**Verdict:** no item, proof step, Fact, Remark, or page prose asserts or uses
Nielsen--Schreier.

### 2.3 Infinite-rank invariance — explicitly denied

The relevant hits are all in the deliberately finite definition:

- `def-rank-of-a-finite-rank-free-group`,
  `items/def-rank-of-a-finite-rank-free-group.md:2,4,10,26-29,35-36` — the id,
  title, dependency, and formula all say finite rank or finite basis. Lines
  35--36 expressly say that the definition “neither defines rank for a free
  group whose bases are infinite nor asserts that arbitrary infinite free bases
  have the same cardinality.” This is a scope boundary, not a reliance.
- `thm-finite-free-bases-have-the-same-cardinality` was read in full. Its title,
  Statement, counting argument, and conclusion quantify only over **finite**
  free bases, including the empty basis. Nothing transports the result to an
  infinite basis.
- The staged-amendment hits at
  `research/freegroups-1-published-amendments.md:58,107,135` are respectively
  the finite-rank id, a topic inventory, and “rank for a finite basis.” None
  asserts general rank invariance.

Neither current page file contains a rank claim.

**Verdict:** the finite-only rank boundary is intact; no unreachable cardinal
arithmetic is used.

## 3. Published-claim decay on the A/B pair

### 3.1 Current A-page summary

The current summary at
`library/abstract-algebra/free-groups-and-presentations.md:14-22` accurately
describes the six items currently listed on that published page. In particular,
lines 19--22 say that the page constructs the reduced-word free group, proves
its universal property and uniqueness, and proves that every group has a
presentation; all remain true.

Once the staged 26 A-page ids are published, however, the old summary would be
materially incomplete: it would omit the entire $W(X)/{\sim}$ construction,
finite-rank result, expanded presentation theory, abelianisation, Tietze
transformations, and cyclic-reduction results. The already-staged replacement
is therefore necessary and is correctly coupled to the list/status publication
action.

The staged replacement is broad enough and otherwise complete, but it contains
one inaccurate causal sentence:

- `research/freegroups-1-published-amendments.md:133-135`:
  “That normal form earns the universal property, so this quotient is a free
  group, its generator map is injective, and it is uniquely isomorphic to the
  reduced-word model.”

  This does not match the dependency/proof chain on disk.
  `thm-word-quotient-model-is-free` does **not** depend on the normal-form
  theorem: it proves the universal property independently by showing that word
  evaluation in a target group is invariant under elementary moves. Normal form
  licenses injectivity of the generator map; the two universal properties plus
  `thm-free-groups-unique-up-to-unique-isomorphism` license the unique model
  comparison.

  **Smallest correction:** replace that sentence with:
  “Evaluation of word classes in a target group proves the universal property,
  so this quotient is a free group; the normal form makes its generator map
  injective, and uniqueness identifies it with the reduced-word model.”

This is a defect in staged, not-yet-published prose, not decay in the live page.
It should be corrected before the owner applies the staged amendment.

### 3.2 The seven currently published items on the pair

No published item claim has decayed.

- `def-alphabet-words-and-reduction:34-36` says that the reduction and
  uniqueness facts needed for the reduced-word free-group construction are
  proved in `thm-reduced-words-form-the-free-group`. This remains literally and
  contextually true: that theorem's steps 1.1--2.1 construct reduction, prove
  invariance under elementary moves, and prove equality of freely equivalent
  reduced words. The new model-specific normal-form theorem supplies a citable
  second formulation/proof; it does not make the existing attribution false or
  exclusive. No correction is needed.
- `def-free-group:27-34` still defines a free group abstractly by its universal
  property and correctly points to the reduced-word construction as one model.
  The new word-quotient theorem proves that a second construction satisfies the
  same definition; it does not reconvention the published definition.
- `thm-reduced-words-form-the-free-group` remains correct and is explicitly
  reconciled with the quotient model by
  `cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic`.
- `def-group-presentation` remains correct under its stated looser convention
  of calling elements of $R$ relations. The new
  `def-relators-relations-and-finite-presentations:28-34` explicitly reconciles
  that convention with the sharper relator/relation terminology.
- `thm-free-groups-unique-up-to-unique-isomorphism` remains true and now
  licenses the comparison of the two concrete models.
- `thm-every-group-has-a-presentation` remains true and continues to use the
  reduced-word model; the new von Dyck and finite-presentation results do not
  narrow or contradict it.
- `ex-reducing-a-word-with-formal-inverses` is unchanged and remains a correct
  cancellation example.

## 4. Claims elsewhere and deferred catalogues

### 4.1 Named external checks — no `freegroups-1` decay

- `items/rem-banach-tarski.md:63-73` is published and remains accurate. This run
  does not construct a rank-two free subgroup of $SO(3)$, a paradoxical
  decomposition, the fixed-point cleanup, or equidecomposability machinery.
  Defining finite rank and proving elementary free-group structure does not
  discharge the recorded Banach--Tarski result.
- `items/rem-hawaiian-earring-fundamental-group.md:80-92` is itself draft and
  remains accurate about what is not proved. The new torsion-freeness theorem
  does not prove that no nontrivial free-group element is infinitely divisible,
  and this run supplies neither the inverse-limit argument nor the non-freeness
  of the Hawaiian-earring group.
- `library/topology/the-fundamental-group.md` and its examples companion are
  accurate. The A page correctly says that it constructs $\pi_1$, proves the
  group laws and functoriality, defines simple connectedness without a
  change-of-basepoint theorem, and proves the convex example. It makes no stale
  promise about free groups or presentations.
- None of the four `library/not-proved-here/deferred-*` pages and no entry in
  `DEFERRED.md` lists a result supplied by **this free-groups run**. In
  particular, `DEFERRED.md:334-340` still legitimately defers the Hawaiian
  earring's non-free fundamental group; the present run does not prove it.

### 4.2 Pre-existing deferred-catalogue decay found by the required sweep

The explicit deferred-catalogue check did expose stale claims caused by the
already-published fundamental-group page. These are not results of
`freegroups-1`, and the affected catalogue page/items are draft, but they are
current decay and should be left in the Step-10 owner queue rather than silently
ignored.

1. `library/not-proved-here/deferred-algebraic-topology.md:27-30` says:
   “There is no proof section anywhere on it, and there cannot be: the homotopy
   track, the fundamental group, covering spaces, homology and cohomology, has
   not been built in this library.” The first page-local clause remains true,
   but “the fundamental group ... has not been built” is false: published
   `def-based-loops-and-fundamental-group` and `thm-fundamental-group-laws`
   define it and prove its group laws, and the same published page proves
   induced-map functoriality and defines simple connectedness.

   **Smallest correction:** say that the remaining *covering-space,
   fundamental-group computation/change-of-basepoint, homology, and cohomology*
   machinery has not been built, while acknowledging the published elementary
   $\pi_1$ core. The blanket future promise at lines 80--81 should likewise be
   narrowed from “each item” to each item whose remaining prerequisite is later
   built.

2. `items/rem-simple-connectedness.md` is now a deferred entry for material
   partly built elsewhere:

   - line 13 says, “this library uses convex and star-shaped instead”;
   - lines 48--52 say, “Nothing above is established here. The library does not
     construct the fundamental group [and] does not prove that concatenation is
     well defined ...”;
   - lines 54--59 say that the homotopy/fundamental-group track “has not built”;
   - line 65 says, “The library does not use it.”

   Those claims are false or misleading after the published fundamental-group
   page. What remains genuinely deferred is change of basepoint and the
   equivalence between the three formulations in this remark.

   **Smallest correction:** replace the blanket absence claims with a pointer to
   `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`, and
   `def-simply-connected`; state only that change of basepoint and the equivalent
   formulations remain unproved. The short label should be narrowed to
   “Trivial fundamental group; change of basepoint and equivalent formulations
   remain deferred.”

3. `items/rem-pi1-circle-is-z.md` correctly remains deferred for the
   computation $\pi_1(S^1)\cong\mathbb Z$, but its boundary prose has decayed:

   - lines 44--45 say, “Neither the group structure on $\pi_1(S^1,1)$ nor the
     isomorphism with $\mathbb Z$ is established here.” The group structure is
     now established; only the circle computation is not.
   - lines 62--69 say, “The library keeps the consequences it needs and drops
     the group” and that “the fundamental group is not defined here.” Both are
     false.

   **Smallest correction:** cite `thm-fundamental-group-laws` for the now-built
   group structure and say only that the winding-number classification and the
   isomorphism with $\mathbb Z$ remain unproved; analysis pages still must not
   claim that computation without the lifting argument.

4. `DEFERRED.md` contains two matching stale entries:

   - line 308: “Track to build: homotopy, the fundamental group, covering
     spaces; later homology.”
   - lines 320--322: “**Simply connected** as a homotopy-theoretic notion. The
     library uses only the elementary substitutes ...”

   Published items now define endpoint-fixed path homotopy, construct the
   fundamental group and its functorial maps, define simple connectedness, and
   prove convex Euclidean subsets simply connected.

   **Smallest correction:** change the track header to the remaining
   change-of-basepoint, circle-computation, and covering-space machinery, and
   replace the simple-connectedness entry with the narrower unproved
   change-of-basepoint/equivalent-formulations result (or remove that discharged
   entry once the owner decides its catalogue disposition).

## 5. Disposition

- **Scope denial:** clean in all three categories; no real reliance on excluded
  computability, Nielsen--Schreier, or infinite-rank invariance.
- **Current published free-groups pair:** no decayed item claim. The current
  page summary is accurate for its current six-item list.
- **Staged publication amendment:** topic coverage is complete, but its causal
  account of normal form versus universal property needs the one-sentence
  correction recorded in §3.1 before publication.
- **Elsewhere:** Banach--Tarski, the Hawaiian earring's non-freeness, and the
  current fundamental-group page do not decay because of this run. No
  `freegroups-1` result remains improperly listed in `DEFERRED.md`.
- **Pre-existing catalogue decay:** the four exact fundamental-group/simple-
  connectedness records in §4.2 need owner disposition at Step 10. They were
  recorded only; nothing was repaired in this sweep.

Step 9 creates no publication authority and does not reopen Step 8.
