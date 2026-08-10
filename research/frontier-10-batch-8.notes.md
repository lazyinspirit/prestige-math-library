# frontier-10 batch 8 — Beta scaffold notes

Run role: `Beta-frontier-10-8`, step-3 repair. Date: 2026-08-11.

This is an enrichment of two published pages. The batch manifest contains only
newly minted IDs. Every new item is to be authored with `status: draft`; the
published page files and their existing items are not part of this Beta's write
scope.

## 1. Result and size decision

The repaired scaffold adds 29 A-page items and 16 B-page items. After the publishing
amendment, the pair will contain:

| page | published context | new items | enriched total |
|---|---:|---:|---:|
| `group-actions-and-cayleys-theorem` | 6 | 29 | 35 |
| `group-actions-and-cayleys-theorem-examples` | 1 | 16 | 17 |

No split is proposed. The enriched A page has 35 items, well below the hard
limit of 60. The 29 new A items are machinery rather than padding: equivariant
maps and free actions; orbit–stabiliser and its cardinal form; coset actions,
cores, the finite-index core bound and the transitive-action classification;
conjugation, centralisers,
normalisers and the class equation; finite \(p\)-group fixed-point machinery,
index-\(p\) normality, Cauchy's theorem; and Cauchy–Frobenius orbit counting.

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
  - thm-finite-index-core-bound-and-finite-overgroups
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
  - cor-index-p-subgroups-of-finite-p-groups-are-normal
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
> orbit with a coset space; the action on \(G/H\), its core kernel, the
> factorial bound for finite-index cores, and the classification of transitive
> actions make that identification structural rather than merely numerical.
> Cayley's theorem is the regular-action case.
>
> Conjugation then turns orbit–stabiliser into the conjugacy-class formula and
> the class equation. Applied to finite \(p\)-groups, the same orbit
> decomposition yields the fixed-point congruence, normality at index \(p\),
> nontrivial centres, the order-\(p^2\) theorem and Cauchy's theorem. Finally,
> double-counting fixed
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
  - cex-s-three-has-trivial-center
  - ex-class-equation-of-the-dihedral-group-of-order-eight
  - cex-groups-of-order-p-cubed-need-not-be-abelian
  - ex-conjugate-subgroups-and-normalizers-in-s-three
  - ex-fixed-point-congruence-for-an-action-of-z-two
  - cex-fixed-point-congruence-fails-without-p-group-hypothesis
  - cex-cauchys-theorem-does-not-extend-to-composite-divisors
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
> conjugacy-class sizes and nontrivial centres; the same groups show that the
> centre and order-\(p^2\) conclusions cannot lose their hypotheses. A
> five-point involution checks the \(p\)-group fixed-point congruence, while the
> natural \(S_3\)-action shows its failure outside \(p\)-groups, and \(A_4\)
> shows that Cauchy's theorem does not extend to composite divisors. Two
> complete fixed-point tables count binary necklaces and square colourings,
> and the singleton trivial action refutes the naive quotient formula.

## 3. Canonical-coverage harvest

The gated harvest is
`research/frontier-10-batch-8.coverage.json`. It records 66 source or canonical
headings:

| disposition | count |
|---|---:|
| `included` | 39 |
| `inline` | 8 |
| `already-published` | 4 |
| `deferred` | 5 |
| `out-of-scope` | 10 |

The four independent treatments are:

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
   Theorem 3.29–Example 3.30, all of §4, Theorem 5.1–Remark 5.5, and
   Theorem 6.2–Theorem 6.10.
   This independently supplies orbit counting, the fixed-point congruence,
   \(p\)-group centre results, the normal-subgroup intersection theorem and
   Cauchy's theorem, together with index-\(p\) normality and the finite-index
   core theorem.
4. Keith Conrad, [*No Subgroup of A4 Has Index 2*](https://kconrad.math.uconn.edu/blurbs/grouptheory/A4noindex2.pdf),
   opening discussion and Theorem 1. This exact-result note supplies the
   \(A_4\) boundary witness that a divisor of a group order need not occur as a
   subgroup order.

The fifteen declines most likely to be challenged by Alpha are all result-specific:

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
- Conrad Theorem 6.2 and Example 6.3 are deferred together to
  `sylow-theorems-and-nilpotent-groups`: the theorem is the normalizer-growth
  induction engine for Sylow theory, and the example diagnoses precisely its
  \(p\)-group hypothesis.
- Conrad Corollary 6.5 is deferred to that same page because the successive
  index-\(p\) subgroup chain is an application of normalizer growth and part of
  the Sylow/nilpotent subgroup structure developed there.
- Conrad Theorem 6.6 is out of scope because Jordan's derangement theorem is a
  structural theorem about finite permutation groups, not an input to this
  page's coset-action, class-equation or orbit-counting spine.
- Conrad Remark 6.7 is out of scope because the cited prime-power-order
  strengthening uses the classification of finite simple groups, an entire
  subject area not reached by the library at this order.
- Conrad Theorem 6.9 is out of scope because finite-index intersection
  calculus serves residual-finiteness and profinite arguments and is not
  consumed anywhere in this pair.
- Conrad Theorem 6.10 is out of scope because the non-covering-by-conjugates
  result belongs to subgroup-covering theory and is not used by any retained
  action or finite-\(p\)-group result.

No required result was declined for lack of a local lemma. In particular, the
scaffold builds the core, the core-kernel theorem, the subgroup-order lemma for
finite \(p\)-groups, the factorial core bound, index-\(p\) normality, and the
cyclic-quotient-by-centre lemma rather than using a missing prerequisite as a
reason to drop a consequence.

## 4. Source and licensing ledger

All retained literature-derived or AI-altered items must carry one or more of
the URLs above in `sources.references` at step 5. Judson is an open textbook
distributed under the GNU Free Documentation License; the
[AIM Open Textbook Initiative record](https://textbooks.aimath.org/textbooks/approved-textbooks/judson/)
confirms the title and licence. The UMD and UConn pages are used as factual
references only: no explicit reuse licence was located on the retrieved pages,
so no prose, proof text, table or diagram is to be copied. All item statements
and proofs will be written afresh in house style.

Source codes below are `J` (Judson), `B` (Brosnan), `C` (Conrad's *Group
Actions*), `A4C` (Conrad's exact \(A_4\) note), and `P` (published in-library
statement opened on disk).

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
| `thm-finite-index-core-bound-and-finite-overgroups` | ai-altered | ai-altered | C Theorem 6.8 plus P first isomorphism and finite symmetric-group cardinality; the explicit divisibility by \(n!\) strengthens Conrad's finite-index conclusion |
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
| `cor-index-p-subgroups-of-finite-p-groups-are-normal` | literature-derived | ai-altered | C Corollary 6.4; proof is rebuilt from the new core factorial bound rather than depending on deferred Theorem 6.2 |
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
| `cex-s-three-has-trivial-center` | ai-altered | ai-generated | J Example 14.12 repurposed as the exact boundary witness for the finite-p-group centre theorem |
| `ex-class-equation-of-the-dihedral-group-of-order-eight` | literature-derived | ai-altered | J Example 14.13 and P square-symmetry group |
| `cex-groups-of-order-p-cubed-need-not-be-abelian` | ai-altered | ai-generated | P square-symmetry group repurposed as the exact order-\(2^3\) boundary witness for the order-\(p^2\) theorem |
| `ex-conjugate-subgroups-and-normalizers-in-s-three` | literature-derived | ai-altered | B Example 3.111/Corollary 3.110 |
| `ex-fixed-point-congruence-for-an-action-of-z-two` | ai-generated | ai-generated | five-point finite witness; it is a leaf |
| `cex-fixed-point-congruence-fails-without-p-group-hypothesis` | ai-altered | ai-generated | natural \(S_3\)-action cross-checked against the retained class-equation computation; \(3\not\equiv0\pmod2\) gives the exact failed conclusion |
| `cex-cauchys-theorem-does-not-extend-to-composite-divisors` | literature-derived | ai-altered | A4C opening and Theorem 1; direct index-two normality/conjugation proof is restated in house style |
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
- `cex-s-three-has-trivial-center`: the retained class equation partitions
  \(S_3\) as \(1+2+3\), so the singleton conjugacy class is the identity and
  the centre is trivial.
- `cex-groups-of-order-p-cubed-need-not-be-abelian`: the published
  square-symmetry group has eight elements and noncommuting rotation and
  reflection generators, hence gives the case \(p=2\).
- `cex-fixed-point-congruence-fails-without-p-group-hypothesis`: the natural
  transitive action of \(S_3\) on three points has no global fixed point, while
  \(3\not\equiv0\pmod2\).

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
| `L` | `def-center-of-a-group`, `def-congruence-modulo-an-integer`, `def-coset`, `def-function`, `def-group-action`, `def-kernel-and-image-of-group-homomorphism`, `def-normal-subgroup`, `def-orbit-and-stabilizer`, `def-quotient-group`, `lem-stabilizer-is-a-subgroup`, `thm-cardinality-of-a-set-of-functions`, `thm-cayleys-theorem`, `thm-conjugation-homomorphism`, `thm-conjugation-is-an-automorphism`, `thm-first-isomorphism-theorem-groups`, `thm-group-actions-correspond-to-homomorphisms`, `thm-orbits-partition-the-set` |
| `A` | `cor-cardinality-of-the-power-set`, `cor-euclids-lemma-for-finite-products`, `cor-index-tower-finite`, `cor-order-of-a-quotient-group`, `cor-prime-order-group-is-cyclic`, `def-divides-in-z`, `def-factorial-and-falling-factorial`, `def-finite-cardinality`, `def-generated-subgroup`, `def-group`, `def-index`, `def-injection-surjection-bijection`, `def-integers-modulo-n`, `def-nat-power`, `def-order-in-a-group`, `def-prime`, `def-subgroup`, `def-sum-over-a-finite-index-set`, `def-symmetric-group`, `ex-conjugation-in-symmetric-group-three`, `ex-symmetries-of-a-square`, `ex-trivial-action-of-z-two-is-not-faithful`, `lem-center-is-normal`, `lem-coset-membership-and-equality`, `lem-cyclic-subgroup-is-the-set-of-powers`, `lem-group-power-laws`, `lem-order-characterisation`, `lem-subgroup-criterion`, `lem-symmetric-group-is-a-group`, `prop-canonical-quotient-map`, `thm-canonical-prime-factorisation`, `thm-double-counting`, `thm-index-two-subgroup-is-normal`, `thm-integers-modulo-n-basic-algebra`, `thm-lagrange`, `thm-normal-subgroup-characterisations`, `thm-number-of-bijections-of-a-finite-set`, `thm-standard-representatives-modulo-n`, `thm-subset-of-a-finite-set`, `thm-sum-rule` |

There are 57 unique published dependencies/context items in this ledger. The
six existing A-page items were all opened. Five are directly reused by new
items; `thm-cayleys-theorem` is retained as page context but not cited in a new
proof because none of the new conclusions logically depends on Cayley. The
existing B-page example was also opened and is reused by the naive-orbit-count
counterexample.

For the step-3 repair, the nine newly introduced published dependencies were
opened on disk: `thm-first-isomorphism-theorem-groups` uses route `L`; the other
eight use route `A`. The exact Conrad statements were independently checked in
Theorem 6.8, Corollary 6.4 and the dedicated \(A_4\) note. The two order-203
finite-sum items were removed from both the manifest and this ledger;
`thm-cauchy-frobenius-orbit-counting` now cites only the already-opened order-20
`def-sum-over-a-finite-index-set`, which is sufficient for its natural-number
valued sum.

No published dependency was found false. The old applied-embedding spelling in
some legacy number-theory/group statements is not copied into any new title,
planned statement, proof outline or note; those legacy files remain untouched.

## 6. Proof design and authoring obligations

`research/frontier-10-batch-8.proof-contracts.json` has version-1 contracts for
all 38 proof-bearing items. Each contract contains the direct planned
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
- The finite-index core theorem applies the first isomorphism theorem to the
  coset-action homomorphism, embeds its image in a symmetric group of order
  \(n!\), and proves finiteness of overgroups by injecting them into the finite
  power set of \(G/\operatorname{Core}_G(H)\).
- Index-\(p\) normality is proved from the core factorial bound, not from the
  deferred normalizer-growth theorem: the core index is a power of \(p\), is
  divisible by \(p\), and divides \(p!\), so it is exactly \(p\).
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
  needed. Its only sum dependency is the order-20 natural-valued
  `def-sum-over-a-finite-index-set`; the two former order-203 citations have
  been removed from both the manifest and contract.
- The four Alpha-requested B witnesses calculate, rather than merely assert,
  the failed boundary: \(Z(S_3)=\{e\}\), the natural \(S_3\)-action has
  \(|X|=3\) and no global fixed point, the square-symmetry group is nonabelian
  of order \(2^3\), and \(A_4\) has no index-two subgroup.
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
9. The factorial core bound is a divisibility statement in natural-number
   cardinalities. It writes \(n\) and \(n!\) directly and never applies the
   canonical integer embedding to a natural number.
10. Alpha asked the \(A_4\) boundary witness to cite batch 1's
    `ex-a-four-has-no-subgroup-of-order-six`. That item is planned on the B page
    at order 45, while this B page is order 43. A dependency or `forward_refs`
    edge would therefore be both forward and an illegal B-page target: the
    repository contract requires B pages to remain leaves. The repaired
    scaffold instead gives the distinct boundary statement its own exact
    Conrad source and a direct proof contract. No logical cross-B edge is
    recorded; at publishing time prose may mention the later example only if
    the orchestrator first changes the ordering/leaf policy.

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

## 9. Step-3 Alpha repair disposition

- **F1 — forward finite-sum dependencies:** both order-203 IDs were removed
  from `thm-cauchy-frobenius-orbit-counting`. The manifest and proof contract
  now cite the published order-20 `def-sum-over-a-finite-index-set`; the sum is
  natural-number valued, so no stronger commutative-monoid reindexing result is
  needed.
- **B8 — Conrad Theorem 6.8:** added
  `thm-finite-index-core-bound-and-finite-overgroups` to the A page. The harvest
  records it as `included` under Conrad Theorem 6.8, whose range now extends
  through all named results in §6.
- **B8 — Conrad Corollary 6.4:** added
  `cor-index-p-subgroups-of-finite-p-groups-are-normal` to the A page. The
  harvest records it as `included` under Corollary 6.4, and its proof contract
  uses the new core/factorial result so it does not depend on deferred Theorem
  6.2.
- **B8 — four boundary witnesses:** added
  `cex-s-three-has-trivial-center`,
  `cex-fixed-point-congruence-fails-without-p-group-hypothesis`,
  `cex-groups-of-order-p-cubed-need-not-be-abelian`, and
  `cex-cauchys-theorem-does-not-extend-to-composite-divisors`. The first three
  are explicit `canonical` harvest rows; the fourth is an `included` row under
  Conrad's exact \(A_4\) note. The requested cross-batch cite is not encoded as
  a dependency because the target is a later B-page leaf; §7 records the
  conflict and the source-backed resolution.
- **B8 — remaining Conrad §6 results:** Theorem 6.2, Example 6.3 and
  Corollary 6.5 are deferred with result-specific Sylow-page reasons; Theorem
  6.6, Remark 6.7, Theorem 6.9 and Theorem 6.10 are out of scope with distinct
  permutation-group, classification, finite-index-calculus and
  subgroup-covering reasons. No §6 heading in the read range is undisposed.

## 10. Continuity checkpoint

Checkpoint written after the source/dependency pass and before final gates,
2026-08-11:

- The four allowed batch artifacts are the only batch-8 files touched.
- `pages.json` parses and contains 29 new A items and 16 new B items.
- `coverage.json` parses and currently reports 66 harvested headings with
  39 included, 8 inline, 4 already published and 15 declined.
- `proof-contracts.json` parses and has 38 scoped contracts, one for every
  proof-bearing new item.
- All 57 unique published dependencies/context items have been opened on disk;
  none has an AI-generated statement component.
- No split is needed and no published item/page edit has been made.
- Gate results and the aggregate-wrapper sandbox blocker are recorded in §11.

## 11. Gate receipt and blocker

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
