# frontier-10 batch 8 — Beta scaffold notes

Run role: `Beta-frontier-10-8`, steps 1–2. Date: 2026-08-11.

This is an enrichment of two published pages. The batch manifest contains only
newly minted IDs. Every new item is to be authored with `status: draft`; the
published page files and their existing items are not part of this Beta's write
scope.

## 1. Result and size decision

The scaffold adds 27 A-page items and 12 B-page items. After the publishing
amendment, the pair will contain:

| page | published context | new items | enriched total |
|---|---:|---:|---:|
| `group-actions-and-cayleys-theorem` | 6 | 27 | 33 |
| `group-actions-and-cayleys-theorem-examples` | 1 | 12 | 13 |

No split is proposed. The enriched A page has 33 items, well below the hard
limit of 60. The 27 new A items are machinery rather than padding: equivariant
maps and free actions; orbit–stabiliser and its cardinal form; coset actions,
cores and the transitive-action classification; conjugation, centralisers,
normalisers and the class equation; finite \(p\)-group fixed-point machinery,
Cauchy's theorem; and Cauchy–Frobenius orbit counting.

The dispatch says that the B page is empty. Disk is authoritative and disagrees:
`library/abstract-algebra/group-actions-and-cayleys-theorem-examples.md` has
`examples: [ex-trivial-action-of-z-two-is-not-faithful]`. That published item is
therefore retained in `enrichment_of_published` and is not duplicated.

## 2. Applicable published-page amendment

Do not apply this during steps 1–2. At the single publishing commit, the
orchestrator should stage this in
`research/frontier-10-published-amendments.md` and then amend the two published
page files.

### A-page item list

In `library/abstract-algebra/group-actions-and-cayleys-theorem.md`, keep the six
current IDs in their current order and append the following IDs to `items:` in
exact manifest order:

```yaml
  - def-equivariant-map-of-group-actions
  - def-free-group-action
  - def-fixed-point-sets-of-a-group-action
  - thm-orbit-stabilizer
  - cor-orbit-stabilizer-cardinality
  - lem-stabilizers-in-one-orbit-are-conjugate
  - def-core-of-a-subgroup
  - lem-core-is-largest-normal-subgroup-contained
  - thm-left-coset-action-and-its-kernel
  - thm-transitive-actions-are-coset-actions
  - cor-faithful-transitive-actions-are-core-free-coset-actions
  - def-conjugacy-class-and-centralizer
  - def-normalizer-of-a-subgroup
  - lem-centralizers-and-normalizers-are-subgroups
  - thm-conjugacy-class-cardinality
  - thm-conjugate-subgroups-are-counted-by-the-normalizer
  - thm-class-equation
  - def-finite-p-group
  - lem-subgroups-of-finite-p-groups-are-p-groups
  - thm-p-group-fixed-point-congruence
  - cor-p-group-action-has-a-fixed-point
  - thm-nontrivial-center-of-a-finite-p-group
  - lem-cyclic-quotient-by-center-implies-abelian
  - cor-groups-of-order-p-squared-are-abelian
  - thm-normal-subgroups-of-finite-p-groups-meet-the-center
  - thm-cauchys-theorem-for-finite-groups
  - thm-cauchy-frobenius-orbit-counting
```

Replace the present two summary paragraphs with these two paragraphs:

> A group action turns the elements of a group into symmetries of a set.
> Actions may be described by homomorphisms into a symmetric group, and their
> orbits and stabilisers record how points move. Orbit–stabiliser identifies an
> orbit with a coset space; the action on \(G/H\), its core kernel, and the
> classification of transitive actions make that identification structural
> rather than merely numerical. Cayley's theorem is the regular-action case.
>
> Conjugation then turns orbit–stabiliser into the conjugacy-class formula and
> the class equation. Applied to finite \(p\)-groups, the same orbit
> decomposition yields the fixed-point congruence, nontrivial centres, the
> order-\(p^2\) theorem and Cauchy's theorem. Finally, double-counting fixed
> pairs gives Cauchy–Frobenius orbit counting, the bridge from abstract actions
> to concrete enumeration up to symmetry.

### B-page example list

In
`library/abstract-algebra/group-actions-and-cayleys-theorem-examples.md`, leave
`items: []`, retain the existing published example, and append these IDs to
`examples:` in exact manifest order:

```yaml
  - ex-left-regular-action-is-free-and-transitive
  - cex-faithful-transitive-action-need-not-be-free
  - cex-free-action-need-not-be-transitive
  - ex-rotations-of-a-square-on-its-vertices
  - ex-nonfaithful-coset-action-of-z-six
  - ex-class-equation-of-s-three
  - ex-class-equation-of-the-dihedral-group-of-order-eight
  - ex-conjugate-subgroups-and-normalizers-in-s-three
  - ex-fixed-point-congruence-for-an-action-of-z-two
  - ex-two-colourings-of-a-square-up-to-dihedral-symmetry
  - ex-binary-necklaces-of-length-four
  - cex-orbit-count-is-not-set-size-divided-by-group-order
```

Replace the present two summary paragraphs with these two paragraphs:

> The examples separate properties that are easy to conflate. The left regular
> action is free and transitive; the natural \(S_3\)-action is faithful and
> transitive but not free; a disjoint union of two regular
> \(\mathbb Z/2\)-orbits is free but not transitive. Rotation and coset actions
> then make stabilisers, cores and faithfulness explicit.
>
> The class equations of \(S_3\) and the square-symmetry group exhibit
> conjugacy-class sizes and nontrivial centres, while a five-point involution
> checks the \(p\)-group fixed-point congruence. Two complete fixed-point tables
> count binary necklaces and square colourings, and the singleton trivial
> action shows exactly why dividing \(|X|\) by \(|G|\) is not a general orbit
> count.

## 3. Canonical-coverage harvest

The gated harvest is
`research/frontier-10-batch-8.coverage.json`. It records 52 source or canonical
headings:

| disposition | count |
|---|---:|
| `included` | 33 |
| `inline` | 7 |
| `already-published` | 4 |
| `deferred` | 2 |
| `out-of-scope` | 6 |

The three independent treatments are:

1. Thomas W. Judson, *Abstract Algebra: Theory and Applications*, Chapter 14:
   [groups acting on sets](https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html),
   [the class equation](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html),
   and [Burnside's counting theorem](https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html).
   Read range: §14.1 from the left regular action through orbit–stabiliser, all
   of §14.2, and the opening of §14.3 through its first worked fixed-point
   table. This is the textbook treatment.
2. Patrick Brosnan, UMD undergraduate algebra notes,
   [`3.14, G-Sets](https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html),
   Definition 3.95 through Example 3.111. This independently supplies
   equivariant maps, coset actions, the transitive classification,
   orbit–stabiliser, conjugacy-class and normaliser indices.
3. Keith Conrad, [*Group Actions*](https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf),
   Theorem 3.29–Example 3.30, all of §4, and Theorem 5.1–Remark 5.5.
   This independently supplies orbit counting, the fixed-point congruence,
   \(p\)-group centre results, the normal-subgroup intersection theorem and
   Cauchy's theorem.

The eight declines most likely to be challenged by Alpha are all result-specific:

- Judson's isolated two-orbit permutation table is declined because the B page
  already has two more diagnostic multi-orbit constructions.
- Judson's particular six-point fixed-set table is declined because the B page
  instead uses a five-point involution chosen to expose the odd fixed-point
  congruence directly.
- Judson's first post-Burnside fixed-point table is declined because the B page
  gives two complete Burnside computations—square colourings and binary
  necklaces—with every group element's fixed-set contribution displayed.
- Brosnan's separate sub-\(G\)-set definition is declined because invariant
  subsets are used only through orbits and no retained result consumes a new
  sub-\(G\)-set object.
- Judson's cycle-type classification in \(S_n\) is deferred to the dedicated
  later page `conjugacy-and-simplicity-in-the-symmetric-groups`; building it
  here would duplicate that page's central theorem.
- Conrad's Fermat-style congruence application belongs to the number-theory
  application track, not to the action spine.
- Conrad's fixed-vector example is deferred because finite-field vector spaces
  and general linear groups are later machinery; this is a whole subject-area
  dependency, not a missing lemma.
- Conrad's stronger Frobenius solution-count congruence is out of scope because
  its proof needs substantially deeper finite-group enumeration than the
  action arguments developed here.

No required result was declined for lack of a local lemma. In particular, the
scaffold builds the core, the core-kernel theorem, the subgroup-order lemma for
finite \(p\)-groups, and the cyclic-quotient-by-centre lemma rather than using a
missing prerequisite as a reason to drop a consequence.

## 4. Source and licensing ledger

All retained literature-derived or AI-altered items must carry one or more of
the URLs above in `sources.references` at step 5. Judson is an open textbook
distributed under the GNU Free Documentation License; the
[AIM Open Textbook Initiative record](https://textbooks.aimath.org/textbooks/approved-textbooks/judson/)
confirms the title and licence. The UMD and UConn pages are used as factual
references only: no explicit reuse licence was located on the retrieved pages,
so no prose, proof text, table or diagram is to be copied. All item statements
and proofs will be written afresh in house style.

Source codes below are `J` (Judson), `B` (Brosnan), `C` (Conrad), and `P`
(published in-library statement opened on disk).

| planned item | statement provenance | proof provenance | source/edit-history rationale |
|---|---|---|---|
| `def-equivariant-map-of-group-actions` | literature-derived | not-applicable | B Definition 3.99, narrowed to left actions and bijective equivariant isomorphisms |
| `def-free-group-action` | literature-derived | not-applicable | standard action terminology cross-checked against C; separated from the already-published faithful/transitive clauses |
| `def-fixed-point-sets-of-a-group-action` | literature-derived | not-applicable | J fixed-point notation and C fixed-point congruence; records both \(X^g\) and \(X^G\) |
| `thm-orbit-stabilizer` | literature-derived | ai-altered | J Theorem 14.1.11 and B Theorem 3.107; statement deliberately uses the general coset bijection |
| `cor-orbit-stabilizer-cardinality` | literature-derived | ai-altered | B Corollary 3.108 plus P Lagrange; finite count split from the general bijection |
| `lem-stabilizers-in-one-orbit-are-conjugate` | literature-derived | ai-altered | J Lemma 14.18 and B Proposition 3.103 |
| `def-core-of-a-subgroup` | ai-altered | not-applicable | standard intersection-of-conjugates convention added to expose the coset-action kernel |
| `lem-core-is-largest-normal-subgroup-contained` | ai-altered | ai-generated | proof-decomposition lemma for the kernel theorem; exact statement checked by the direct conjugate-intersection argument |
| `thm-left-coset-action-and-its-kernel` | ai-altered | ai-altered | J Example 14.1.5 and B Propositions 3.102/3.104, strengthened by the standard core-kernel clause |
| `thm-transitive-actions-are-coset-actions` | literature-derived | ai-altered | B Lemma 3.105–Theorem 3.107 |
| `cor-faithful-transitive-actions-are-core-free-coset-actions` | ai-altered | ai-generated | direct corollary of the preceding classification and kernel theorem |
| `def-conjugacy-class-and-centralizer` | literature-derived | not-applicable | J `14.2 and B Corollary 3.109 |
| `def-normalizer-of-a-subgroup` | literature-derived | not-applicable | B Corollary 3.110 |
| `lem-centralizers-and-normalizers-are-subgroups` | literature-derived | ai-altered | standard subgroup facts needed before their indices are used |
| `thm-conjugacy-class-cardinality` | literature-derived | ai-altered | B Corollary 3.109, obtained from P conjugation and orbit–stabiliser |
| `thm-conjugate-subgroups-are-counted-by-the-normalizer` | literature-derived | ai-altered | B Corollary 3.110 |
| `thm-class-equation` | literature-derived | ai-altered | J `14.2 opening result |
| `def-finite-p-group` | literature-derived | not-applicable | C ``4–5; includes the trivial group by allowing exponent zero |
| `lem-subgroups-of-finite-p-groups-are-p-groups` | ai-altered | ai-generated | proof-decomposition lemma from P Lagrange and unique prime factorisation |
| `thm-p-group-fixed-point-congruence` | literature-derived | ai-altered | C Theorem 4.1 |
| `cor-p-group-action-has-a-fixed-point` | literature-derived | ai-altered | C Corollary 4.2 |
| `thm-nontrivial-center-of-a-finite-p-group` | literature-derived | ai-altered | J Theorem 14.15 and C Theorem 5.1 |
| `lem-cyclic-quotient-by-center-implies-abelian` | literature-derived | ai-altered | standard lemma used in J/C's order-\(p^2\) argument, made explicit rather than hidden inline |
| `cor-groups-of-order-p-squared-are-abelian` | literature-derived | ai-altered | J Corollary 14.16 and C Corollary 5.2 |
| `thm-normal-subgroups-of-finite-p-groups-meet-the-center` | literature-derived | ai-altered | C Theorem 5.3 |
| `thm-cauchys-theorem-for-finite-groups` | literature-derived | ai-altered | C Theorem 5.4; uses the cyclic-shift proof required by the track plan |
| `thm-cauchy-frobenius-orbit-counting` | literature-derived | ai-altered | J Theorem 14.19 and C Theorem 3.29; stated in integral double-counting form |
| `ex-left-regular-action-is-free-and-transitive` | literature-derived | ai-altered | J Example 14.1.3 |
| `cex-faithful-transitive-action-need-not-be-free` | ai-altered | ai-generated | B's natural symmetric-group action sharpened into the exact implication counterexample |
| `cex-free-action-need-not-be-transitive` | ai-generated | ai-generated | checkable disjoint-union construction; it is a leaf and no item depends on it |
| `ex-rotations-of-a-square-on-its-vertices` | ai-altered | ai-generated | source-backed square rotation action written as translation on \(\mathbb Z/4\) |
| `ex-nonfaithful-coset-action-of-z-six` | ai-generated | ai-generated | finite check of the core-kernel theorem; it is a leaf |
| `ex-class-equation-of-s-three` | literature-derived | ai-altered | J Example 14.12 and P conjugation computation |
| `ex-class-equation-of-the-dihedral-group-of-order-eight` | literature-derived | ai-altered | J Example 14.13 and P square-symmetry group |
| `ex-conjugate-subgroups-and-normalizers-in-s-three` | literature-derived | ai-altered | B Example 3.111/Corollary 3.110 |
| `ex-fixed-point-congruence-for-an-action-of-z-two` | ai-generated | ai-generated | five-point finite witness; it is a leaf |
| `ex-two-colourings-of-a-square-up-to-dihedral-symmetry` | literature-derived | ai-altered | J `14.3 opening problem, with a complete fixed-count table |
| `ex-binary-necklaces-of-length-four` | literature-derived | ai-altered | standard Cauchy–Frobenius rotation count, cross-checked by its four fixed counts |
| `cex-orbit-count-is-not-set-size-divided-by-group-order` | ai-generated | ai-generated | direct leaf counterexample derived from P's singleton trivial action |

### Generated-statement truth-risk checks completed at scaffold time

- `cex-free-action-need-not-be-transitive`: on
  \((\mathbb Z/2)\times\{0,1\}\), translation changes the first coordinate for
  the nonidentity element and preserves the second; hence there are exactly two
  free orbits.
- `ex-nonfaithful-coset-action-of-z-six`: \(\{0,3\}\) is a two-element subgroup
  of the abelian group \(\mathbb Z/6\), has three cosets, and equals its core, so
  the kernel is nontrivial.
- `ex-fixed-point-congruence-for-an-action-of-z-two`: the permutation
  \((1\,2)\) on five points has one two-point orbit and three singleton orbits;
  the difference \(5-3\) is divisible by \(2\).
- `cex-orbit-count-is-not-set-size-divided-by-group-order`: the published
  singleton trivial action has one orbit, while a two-element group cannot
  divide a one-element set into free two-element orbits.

These witnesses must still receive complete Verifications and contracts at step
5. None is a dependency of another new item.

## 5. Published dependencies opened and confidence routes

Every ID below was opened from `items/<id>.md`; its `status: published`, exact
Statement/Definition/Example, component provenance, references and audit stamp
were inspected. Proof provenance is not used to classify a dependency: the
consumer depends on the published statement component.

- Route `L`: the statement is `literature-derived`; the exact component and its
  reader-visible source were checked, and the item has a current audit record.
- Route `A`: the statement is `ai-altered`, never AI-generated; the exact
  component was checked on disk, convention-sensitive uses were cross-checked
  against J/B/C or the source named in the item, and the item has a current
  audit or independent-verification record.

| route | every published ID using that route |
|---|---|
| `L` | `def-center-of-a-group`, `def-congruence-modulo-an-integer`, `def-coset`, `def-function`, `def-group-action`, `def-kernel-and-image-of-group-homomorphism`, `def-normal-subgroup`, `def-orbit-and-stabilizer`, `def-quotient-group`, `lem-stabilizer-is-a-subgroup`, `thm-cardinality-of-a-set-of-functions`, `thm-cayleys-theorem`, `thm-conjugation-homomorphism`, `thm-conjugation-is-an-automorphism`, `thm-group-actions-correspond-to-homomorphisms`, `thm-orbits-partition-the-set` |
| `A` | `cor-order-of-a-quotient-group`, `cor-prime-order-group-is-cyclic`, `def-divides-in-z`, `def-finite-cardinality`, `def-finite-sum-in-a-commutative-monoid`, `def-generated-subgroup`, `def-group`, `def-index`, `def-injection-surjection-bijection`, `def-integers-modulo-n`, `def-nat-power`, `def-order-in-a-group`, `def-prime`, `def-subgroup`, `def-sum-over-a-finite-index-set`, `def-symmetric-group`, `ex-conjugation-in-symmetric-group-three`, `ex-symmetries-of-a-square`, `ex-trivial-action-of-z-two-is-not-faithful`, `lem-center-is-normal`, `lem-coset-membership-and-equality`, `lem-cyclic-subgroup-is-the-set-of-powers`, `lem-finite-sum-reindexing-and-fubini`, `lem-group-power-laws`, `lem-order-characterisation`, `lem-subgroup-criterion`, `lem-symmetric-group-is-a-group`, `thm-canonical-prime-factorisation`, `thm-double-counting`, `thm-integers-modulo-n-basic-algebra`, `thm-lagrange`, `thm-normal-subgroup-characterisations`, `thm-standard-representatives-modulo-n`, `thm-sum-rule` |

There are 50 unique published dependencies/context items in this ledger. The
six existing A-page items were all opened. Five are directly reused by new
items; `thm-cayleys-theorem` is retained as page context but not cited in a new
proof because none of the new conclusions logically depends on Cayley. The
existing B-page example was also opened and is reused by the naive-orbit-count
counterexample.

No published dependency was found false. The old applied-embedding spelling in
some legacy number-theory/group statements is not copied into any new title,
planned statement, proof outline or note; those legacy files remain untouched.

## 6. Proof design and authoring obligations

`research/frontier-10-batch-8.proof-contracts.json` has version-1 contracts for
all 32 proof-bearing items. Each contract contains the direct planned
dependency clauses, a numbered proof map, all eight boundary dispositions and
an empty finite-smoke list (none of the currently implemented smoke-test kinds
matches these action claims). Clauses whose source is another new item are
marked as planned clauses and are synchronization obligations: at step 5 the
author must make the authored Statement contain that clause exactly, then
refresh the contract if wording or proof steps change.

The high-risk proofs have these non-negotiable shapes:

- Orbit–stabiliser proves well-definedness, surjectivity and injectivity
  separately. The map is \(gG_x\mapsto g\cdot x\); the cardinality statement is
  the following corollary.
- The left-coset action proves well-definedness before action laws, identifies
  the stabiliser of \(H\), and rewrites "fixes every coset" into membership in
  every conjugate of \(H\).
- The class equation explicitly separates singleton conjugacy classes, proves
  that they are exactly central elements, and permits the noncentral
  representative list to be empty.
- The fixed-point congruence partitions into orbits and spends the subgroup
  prime-power lemma to show each nonsingleton orbit size is divisible by \(p\).
- Cauchy's theorem uses the cyclic rotation action on product-one \(p\)-tuples.
  It must verify that rotation preserves the product-one condition without
  commuting factors, that the tuple set has \(|G|^{p-1}\) elements, that
  \(\mathbb Z/p\) has order \(p\), and that a nonidentity fixed tuple yields an
  element of order exactly \(p\).
- Cauchy–Frobenius is stated as the integral identity
  \(|G||X/G|=\sum_g|X^g|\). It double-counts fixed pairs, then groups the
  stabiliser sum by orbits. No unlicensed division or averaging operation is
  needed.
- The square-colouring fixed counts are \(16,2,2,4,8,8,4,4\), summing to
  \(48=8\cdot6\). The necklace counts are \(16,2,4,2\), summing to
  \(24=4\cdot6\).

Boundary emphasis: empty \(X\) is allowed in the fixed-point congruence and
orbit-counting theorem; the trivial group is allowed as a finite \(p\)-group
with exponent zero; nontrivial-centre results explicitly assume a nontrivial
group; the smallest prime case is \(p=2\); and the core-free corollary proves
both directions of its equivalence.

## 7. Convention disagreements

1. The library uses left actions and the left-coset map
   \(gH\mapsto g\cdot x\). Sources that write right actions or \(G_x\backslash
   G\) require inversion; no mixed convention is permitted.
2. Judson distinguishes the fixed set of an element with notation \(X_g\).
   This scaffold uses \(X^g\), and \(X^G\) for global fixed points, so it cannot
   be confused with the stabiliser \(G_x\).
3. Some sources state orbit–stabiliser first as a finite counting formula. The
   library follows the prose scaffold: the theorem is the general bijection and
   the count is a separate finite corollary.
4. "Core" may be written as the intersection of \(gHg^{-1}\) or of
   \(g^{-1}Hg\). The two indexed families are equal; the library fixes
   \(\bigcap_g gHg^{-1}\).
5. \(D_4\) is ambiguous between order \(4\) and the symmetries of a square.
   New titles say "the dihedral group of order eight" or "square-symmetry
   group" and reuse the published \(D\) construction.
6. The theorem is titled "Cauchy–Frobenius orbit counting"; prose records the
   widespread name "Burnside's lemma" without asserting the historically
   disputed attribution in the Statement.
7. A finite \(p\)-group includes the trivial group through exponent zero.
   Results asserting a nonidentity central element say "nontrivial" explicitly.
8. The repository uses British "stabiliser" in page prose but immutable
   published IDs use `stabilizer`; new IDs follow the existing ID spelling where
   they refer to that object.

## 8. Downstream prose-scaffold corrections for step 4

These are applicable plan amendments, not edits for this Beta.

### `research/plan-algebra-track-expansion.md`, AG-4

The present AG-4 text says that the later Sylow page mints the definition of a
\(p\)-group, the fixed-point congruence, Cauchy's theorem, nontrivial centre and
the order-\(p^2\) theorem. Replace those claims with:

> **CITE order 42; do not re-mint:** `def-finite-p-group`,
> `lem-subgroups-of-finite-p-groups-are-p-groups`,
> `thm-p-group-fixed-point-congruence`,
> `thm-nontrivial-center-of-a-finite-p-group`,
> `cor-groups-of-order-p-squared-are-abelian`, and
> `thm-cauchys-theorem-for-finite-groups`. AG-4 begins with Sylow
> \(p\)-subgroups and uses these action results as its engine.

The existing note saying "cite order 38, do not re-prove" for the centre theorem
is already directionally correct; its ID should be made explicit.

### `research/plan-combinatorics-and-categories.md`, CB-10

The present text says AA-6 does not have orbit counting and that CB-10 mints
Burnside's lemma and the fixed-point-set definition. Replace that seam with:

> **CITE order 42; do not re-mint:**
> `def-fixed-point-sets-of-a-group-action` and
> `thm-cauchy-frobenius-orbit-counting`. CB-10 begins with the cycle index and
> Pólya's enumeration theorem; its worked colourings consume the published
> orbit-counting theorem.

This is a genuine ownership move created by the owner's enrichment brief. If
left stale, the later pages will mint duplicate IDs or duplicate statements.

## 9. Continuity checkpoint

Checkpoint written after the source/dependency pass and before final gates,
2026-08-11:

- The four allowed batch artifacts are the only batch-8 files touched.
- `pages.json` parses and contains 27 new A items and 12 new B items.
- `coverage.json` parses and currently reports 52 harvested headings with
  33 included, 7 inline, 4 already published and 8 declined.
- `proof-contracts.json` parses and has 32 scoped contracts, one for every
  proof-bearing new item.
- All 50 unique published dependencies/context items have been opened on disk;
  none has an AI-generated statement component.
- No split is needed and no published item/page edit has been made.
- Gate results and the aggregate-wrapper sandbox blocker are recorded in §10.

## 10. Gate receipt and blocker

The escalation-free direct gates are green:

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the declared
  page order is acyclic and consistent.
- `node tools/depsource.mjs research/plan-spec.json`: exit 0; 16,688 published
  dependencies and zero unresolved, homeless, planned-later or B-page edges in
  the currently spliced spec.
- `node tools/coverage-checklist.mjs
  research/frontier-10-batch-8.coverage.json`: exit 0; 1 page, 52 headings, no
  error or warning.
- The same coverage tool over every currently present frontier-10 checklist
  (batches 4, 5, 6, 7 and 8): exit 0; 7 pages, 422 headings, no error or warning.
- `node tools/content-policy.mjs
  research/frontier-10-batch-8.pages.json --manifest-only`: exit 0; 39 scoped
  items, no error or warning.
- All three JSON artifacts parse, the proof scope and contract map both contain
  exactly 32 IDs, and `git diff --check` is clean for the four allowed files.

The literal aggregate command `node tools/gates.mjs --step 2 --run
frontier-10` could not be left green in this runtime. Its wrapper uses Node
`spawnSync` to launch each child gate; the workspace sandbox rejects every such
nested Node process with `spawnSync /usr/bin/node EPERM`. The wrapper therefore
reported three child-launch failures before any gate body ran. Running those
same three children directly gives the green results above. Per the owner's
no-permission-prompts rule, no escalation was requested. This nested-process
restriction is the sole blocker; there is no mathematical, source-access,
dependency or size blocker in batch 8.
