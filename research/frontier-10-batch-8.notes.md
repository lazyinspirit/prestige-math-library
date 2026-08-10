# frontier-10 batch 8 — Beta scaffold notes

Run role: `Beta-frontier-10-8`, step-4 B-leaf repair. Date: 2026-08-11.

This is an enrichment of two published pages. The batch manifest contains only
newly minted IDs. Every new item is to be authored with `status: draft`; the
published page files and their existing items are not part of this Beta's write
scope.

## 1. Result and size decision

The repaired scaffold adds 31 A-page items and 16 B-page items. After the publishing
amendment, the pair will contain:

| page | published context | new items | enriched total |
|---|---:|---:|---:|
| `group-actions-and-cayleys-theorem` | 6 | 31 | 37 |
| `group-actions-and-cayleys-theorem-examples` | 1 | 16 | 17 |

No split is proposed. The enriched A page has 37 items, well below the hard
limit of 60. The 31 new A items are machinery rather than padding: equivariant
maps and free actions; orbit–stabiliser and its cardinal form; coset actions,
cores, the finite-index core bound and the transitive-action classification;
conjugation, centralisers, normalisers, non-covering by conjugates and the class
equation; finite \(p\)-group fixed-point machinery, index-\(p\) normality,
Cauchy's theorem; Cauchy–Frobenius orbit counting; and Jordan's derangement
theorem.

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
  - thm-conjugates-of-proper-subgroup-do-not-cover-finite-group
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
  - thm-jordans-derangement-theorem
```

Replace the present two summary paragraphs with these two paragraphs:

> A group action turns the elements of a group into symmetries of a set. Groups,
> homomorphisms, kernels, quotient groups and isomorphisms supply the declared
> algebraic prerequisites, while symmetric groups turn actions into permutation
> representations. Subgroups and cosets provide stabilisers and orbit models;
> normal subgroups and the isomorphism theorems control action kernels. Finite
> cardinality, index, Lagrange's theorem and elementary counting support the
> finite results.
>
> Equivariant maps, free actions and fixed-point sets lead to orbit–stabiliser,
> coset actions, cores and the classification of transitive actions. Conjugation
> then yields centralisers, normalisers, conjugacy-class counts, the non-covering
> theorem and the class equation. For finite \(p\)-groups, orbit decomposition
> gives the fixed-point congruence, index-\(p\) normality, nontrivial centres, the
> order-\(p^2\) theorem, central intersection for normal subgroups and Cauchy's
> theorem. Double-counting fixed pairs closes the page with Cauchy–Frobenius orbit
> counting and Jordan's derangement theorem, while Cayley's theorem remains the
> regular-action case.

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

The B page has no authored summary body. The publishing amendment must retain
that empty body; the examples list is the only staged B-page mutation.

## 3. Canonical-coverage harvest

The gated harvest is
`research/frontier-10-batch-8.coverage.json`. It records 66 source or canonical
headings:

| disposition | count |
|---|---:|
| `included` | 41 |
| `inline` | 8 |
| `already-published` | 4 |
| `deferred` | 5 |
| `out-of-scope` | 8 |

The four source treatments (three independent authors, with Conrad's second
note used only for the exact \(A_4\) witness) are:

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
   Cauchy's theorem, together with Jordan's derangement theorem, index-\(p\)
   normality, the finite-index core theorem and non-covering by conjugates of a
   proper subgroup.
4. Keith Conrad, [*No Subgroup of A4 Has Index 2*](https://kconrad.math.uconn.edu/blurbs/grouptheory/A4noindex2.pdf),
   opening discussion and Theorem 1. This exact-result note supplies the
   \(A_4\) boundary witness that a divisor of a group order need not occur as a
   subgroup order.

The thirteen remaining declines are all result-specific:

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
- Conrad Remark 6.7 is out of scope because the cited prime-power-order
  strengthening uses the classification of finite simple groups, an entire
  subject area not reached by the library at this order.
- Conrad Theorem 6.9 is out of scope because it is a general closure theorem
  for finite-index subgroups whose natural home is a future enrichment of
  `cosets-and-lagranges-theorem`, which already develops index multiplicativity;
  neither its statement nor its coset-pair proof is specific to the action
  structure developed here.

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
| `def-core-of-a-subgroup` | literature-derived | not-applicable | standard intersection-of-conjugates convention recorded in C's finite-index subgroup treatment and adapted to expose the coset-action kernel |
| `lem-core-is-largest-normal-subgroup-contained` | literature-derived | ai-altered | standard core characterization accompanying the coset-action kernel; proof was rewritten as a direct conjugate-intersection argument |
| `thm-left-coset-action-and-its-kernel` | literature-derived | ai-altered | J Example 14.1.5, B Propositions 3.102/3.104 and C's core treatment; statement combines their standard clauses and the proof is rewritten |
| `thm-finite-index-core-bound-and-finite-overgroups` | literature-derived | ai-altered | C Theorem 6.8 plus P first isomorphism and finite symmetric-group cardinality; the proof is rewritten and makes divisibility by \(n!\) explicit |
| `thm-transitive-actions-are-coset-actions` | literature-derived | ai-altered | B Lemma 3.105–Theorem 3.107 |
| `cor-faithful-transitive-actions-are-core-free-coset-actions` | literature-derived | ai-altered | standard faithful-coset-action corollary of B's transitive classification and C's core-kernel treatment, rewritten from the preceding batch results |
| `def-conjugacy-class-and-centralizer` | literature-derived | not-applicable | J §14.2 and B Corollary 3.109 |
| `def-normalizer-of-a-subgroup` | literature-derived | not-applicable | B Corollary 3.110 |
| `lem-centralizers-and-normalizers-are-subgroups` | literature-derived | ai-altered | standard subgroup facts needed before their indices are used |
| `thm-conjugacy-class-cardinality` | literature-derived | ai-altered | B Corollary 3.109, obtained from P conjugation and orbit–stabiliser |
| `thm-conjugate-subgroups-are-counted-by-the-normalizer` | literature-derived | ai-altered | B Corollary 3.110 |
| `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group` | literature-derived | ai-altered | C Theorem 6.10; the first proof is repaired at the one-conjugate boundary by the uniform bound \(1+[G:N_G(H)](|H|-1)<|G|\) |
| `thm-class-equation` | literature-derived | ai-altered | J §14.2 opening result |
| `def-finite-p-group` | literature-derived | not-applicable | C §§4–5; includes the trivial group by allowing exponent zero |
| `lem-subgroups-of-finite-p-groups-are-p-groups` | literature-derived | ai-altered | standard subgroup clause used throughout C's finite \(p\)-group treatment; proof is decomposed through P Lagrange and unique prime factorisation |
| `cor-index-p-subgroups-of-finite-p-groups-are-normal` | literature-derived | ai-altered | C Corollary 6.4; proof is rebuilt from the new core factorial bound rather than depending on deferred Theorem 6.2 |
| `thm-p-group-fixed-point-congruence` | literature-derived | ai-altered | C Theorem 4.1 |
| `cor-p-group-action-has-a-fixed-point` | literature-derived | ai-altered | C Corollary 4.2 |
| `thm-nontrivial-center-of-a-finite-p-group` | literature-derived | ai-altered | J Theorem 14.15 and C Theorem 5.1 |
| `lem-cyclic-quotient-by-center-implies-abelian` | literature-derived | ai-altered | standard lemma used in J/C's order-\(p^2\) argument, made explicit rather than hidden inline |
| `cor-groups-of-order-p-squared-are-abelian` | literature-derived | ai-altered | J Corollary 14.16 and C Corollary 5.2 |
| `thm-normal-subgroups-of-finite-p-groups-meet-the-center` | literature-derived | ai-altered | C Theorem 5.3 |
| `thm-cauchys-theorem-for-finite-groups` | literature-derived | ai-altered | C Theorem 5.4; uses the cyclic-shift proof required by the track plan |
| `thm-cauchy-frobenius-orbit-counting` | literature-derived | ai-altered | J Theorem 14.19 and C Theorem 3.29; stated in integral double-counting form |
| `thm-jordans-derangement-theorem` | literature-derived | ai-altered | C Theorem 6.6; proof rewritten without division from the integral Cauchy–Frobenius identity |
| `ex-left-regular-action-is-free-and-transitive` | literature-derived | ai-altered | J Example 14.1.3 |
| `cex-faithful-transitive-action-need-not-be-free` | ai-altered | ai-generated | B's natural symmetric-group action sharpened into the exact implication counterexample |
| `cex-free-action-need-not-be-transitive` | ai-altered | ai-generated | standard disjoint-union-of-regular-orbits construction adapted to the exact implication boundary; the verification is a local finite calculation |
| `ex-rotations-of-a-square-on-its-vertices` | ai-altered | ai-generated | source-backed square rotation action written as translation on \(\mathbb Z/4\) |
| `ex-nonfaithful-coset-action-of-z-six` | ai-altered | ai-generated | the standard non-core-free coset-action pattern is specialized to \(\mathbb Z/6\); the verification is a local finite calculation |
| `ex-class-equation-of-s-three` | literature-derived | ai-altered | J Example 14.12; the six permutations and all needed conjugations are recomputed from P symmetric-group definitions and the finite-bijection count |
| `cex-s-three-has-trivial-center` | ai-altered | ai-generated | J Example 14.12 repurposed as the exact boundary witness for the finite-p-group centre theorem |
| `ex-class-equation-of-the-dihedral-group-of-order-eight` | literature-derived | ai-altered | J Example 14.13; the batch item reconstructs the order-eight subgroup from P symmetric-group, subgroup and power machinery |
| `cex-groups-of-order-p-cubed-need-not-be-abelian` | ai-altered | ai-generated | the preceding batch-owned square-group construction is repurposed as the exact order-\(2^3\) boundary witness for the order-\(p^2\) theorem |
| `ex-conjugate-subgroups-and-normalizers-in-s-three` | literature-derived | ai-altered | B Example 3.111/Corollary 3.110 |
| `ex-fixed-point-congruence-for-an-action-of-z-two` | ai-altered | ai-generated | the source fixed-point-congruence pattern is specialized to a five-point involution; the verification is a local finite calculation |
| `cex-fixed-point-congruence-fails-without-p-group-hypothesis` | ai-altered | ai-generated | natural \(S_3\)-action cross-checked against the retained class-equation computation; \(3\not\equiv0\pmod2\) gives the exact failed conclusion |
| `cex-cauchys-theorem-does-not-extend-to-composite-divisors` | literature-derived | ai-altered | A4C opening and Theorem 1; direct index-two normality/conjugation proof is restated in house style |
| `ex-two-colourings-of-a-square-up-to-dihedral-symmetry` | literature-derived | ai-altered | J §14.3 opening problem, using the preceding batch-owned square-group construction and a complete fixed-count table |
| `ex-binary-necklaces-of-length-four` | literature-derived | ai-altered | standard Cauchy–Frobenius rotation count, cross-checked by its four fixed counts |
| `cex-orbit-count-is-not-set-size-divided-by-group-order` | ai-altered | ai-generated | the naive quotient claim is specialized to P's singleton trivial action; the verification is a local one-orbit calculation |

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
- `cex-groups-of-order-p-cubed-need-not-be-abelian`: the preceding batch-owned
  class-equation example constructs a square-symmetry subgroup with eight
  elements and noncommuting rotation and reflection generators, hence gives the
  case \(p=2\).
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
| `A` | `cor-cardinality-of-the-power-set`, `cor-euclids-lemma-for-finite-products`, `cor-index-tower-finite`, `cor-order-of-a-quotient-group`, `cor-prime-order-group-is-cyclic`, `def-divides-in-z`, `def-factorial-and-falling-factorial`, `def-finite-cardinality`, `def-generated-subgroup`, `def-group`, `def-index`, `def-injection-surjection-bijection`, `def-integers-modulo-n`, `def-nat-power`, `def-order-in-a-group`, `def-prime`, `def-subgroup`, `def-sum-over-a-finite-index-set`, `def-symmetric-group`, `ex-trivial-action-of-z-two-is-not-faithful`, `lem-center-is-normal`, `lem-coset-membership-and-equality`, `lem-cyclic-subgroup-is-the-set-of-powers`, `lem-group-power-laws`, `lem-order-characterisation`, `lem-subgroup-criterion`, `lem-symmetric-group-is-a-group`, `prop-canonical-quotient-map`, `thm-canonical-prime-factorisation`, `thm-double-counting`, `thm-index-two-subgroup-is-normal`, `thm-integers-modulo-n-basic-algebra`, `thm-lagrange`, `thm-normal-subgroup-characterisations`, `thm-number-of-bijections-of-a-finite-set`, `thm-standard-representatives-modulo-n`, `thm-subset-of-a-finite-set`, `thm-sum-rule` |

There are 55 unique published dependencies/context items in this ledger. The
six existing A-page items were all opened. Five are directly reused by new
items; `thm-cayleys-theorem` is retained as page context but not cited in a new
proof because none of the new conclusions logically depends on Cayley. The
existing B-page example was also opened and is reused by the naive-orbit-count
counterexample.

The two rejected targets, `ex-conjugation-in-symmetric-group-three` and
`ex-symmetries-of-a-square`, were opened in full to identify exactly what the
four forbidden edges had imported. They are no longer dependency or context
entries: both live only on published B pages. Their A-page foundations used by
the repair were also opened in full and retain route `A` in the table above.

For the step-3 repair, the nine newly introduced published dependencies were
opened on disk: `thm-first-isomorphism-theorem-groups` uses route `L`; the other
eight use route `A`. The exact Conrad statements were independently checked in
Theorem 6.8, Corollary 6.4 and the dedicated \(A_4\) note. The two order-203
finite-sum items were removed from both the manifest and this ledger;
`thm-cauchy-frobenius-orbit-counting` now cites only the already-opened order-20
`def-sum-over-a-finite-index-set`, which is sufficient for its natural-number
valued sum.

For the R2 repair, both new theorems reuse eight published dependencies already
in this ledger, and all eight were reopened on disk. Route `L` applies to
`def-group-action` and `thm-conjugation-is-an-automorphism`; route `A` applies
to `def-finite-cardinality`, `def-index`,
`def-sum-over-a-finite-index-set`, `thm-lagrange`,
`thm-subset-of-a-finite-set` and `thm-sum-rule`. The remaining dependencies of
the two new items are planned batch-8 items whose clauses are synchronized in
their proof contracts.

No published dependency was found false. The old applied-embedding spelling in
some legacy number-theory/group statements is not copied into any new title,
planned statement, proof outline or note; those legacy files remain untouched.

## 6. Proof design and authoring obligations

`research/frontier-10-batch-8.proof-contracts.json` has version-1 contracts for
all 40 proof-bearing items. Each contract contains the direct planned
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
- The conjugates of a proper subgroup are counted by
  \([G:N_G(H)]\). Since all contain the identity, their union has size at most
  \(1+[G:N_G(H)](|H|-1)\); the inclusions \(H\le N_G(H)\le G\) and
  \([G:H]\ge2\) make this strictly less than \(|G|\). This uniform bound handles
  the normal-subgroup case, where there is only one distinct conjugate.
- Index-\(p\) normality is proved from the core factorial bound, not from the
  deferred normalizer-growth theorem: the core index is a power of \(p\), is
  divisible by \(p\), and divides \(p!\), so it is exactly \(p\).
- The class equation explicitly separates singleton conjugacy classes, proves
  that they are exactly central elements, and permits the noncentral
  representative list to be empty.
- The order-eight class-equation example no longer imports a published B-page
  witness. It defines \(r=(1\,2\,3\,4)\) and \(s=(1\,3)\), checks
  \(r^4=e\), \(s^2=e\) and \(sr=r^{-1}s\), proves the eight displayed
  permutations form a nonabelian subgroup, and only then computes its conjugacy
  classes. The later square-colouring and order-\(p^3\) items cite this earlier
  same-B-page construction.
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
- Jordan's derangement theorem specializes that integral identity to a
  transitive action. The identity contributes \(|X|\ge2\); if every
  nonidentity element fixed a point, the remaining \(|G|-1\) summands would
  each be at least one, contradicting that the whole sum equals \(|G|\).
- The four Alpha-requested B witnesses calculate, rather than merely assert,
  the failed boundary: \(Z(S_3)=\{e\}\), the natural \(S_3\)-action has
  \(|X|=3\) and no global fixed point, the square-symmetry group is nonabelian
  of order \(2^3\), and \(A_4\) has no index-two subgroup.
- The square-colouring fixed counts are \(16,2,2,4,8,8,4,4\), summing to
  \(48=8\cdot6\). The necklace counts are \(16,2,4,2\), summing to
  \(24=4\cdot6\).

Boundary emphasis: empty \(X\) is allowed in the fixed-point congruence and
orbit-counting theorem but excluded by \(|X|>1\) in Jordan's theorem; the
trivial group is allowed as a finite \(p\)-group with exponent zero;
nontrivial-centre results explicitly assume a nontrivial group; the subgroup-
covering theorem handles both a normal proper subgroup (one conjugate) and the
trivial subgroup; the smallest prime case is \(p=2\); and the core-free
corollary proves both directions of its equivalence.

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
- **R2 — Conrad Theorem 6.6:** added `thm-jordans-derangement-theorem` to the
  A page immediately after Cauchy–Frobenius orbit counting. The harvest now
  records Theorem 6.6 as `included`, and the proof contract derives the
  fixed-point-free element from the integral orbit-count identity.
- **R2 — Conrad Theorem 6.10:** added
  `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group` immediately
  after the normalizer-count theorem. The harvest now records Theorem 6.10 as
  `included`, and the proof contract uses the exact normalizer count plus the
  shared-identity union bound.
- **R2 — Conrad Theorem 6.9:** retained as `out-of-scope`, but replaced the
  invalid “not consumed here” reason. It is a general finite-index-subgroup
  closure theorem belonging in a future enrichment of
  `cosets-and-lagranges-theorem`, where index multiplicativity is already
  developed; its statement and coset-pair proof are independent of
  action-specific structure.
- **Remaining Conrad §6 results:** Theorem 6.2, Example 6.3 and Corollary 6.5
  remain deferred with result-specific Sylow-page reasons, and Remark 6.7
  remains out of scope because its prime-power-order strengthening rests on the
  classification of finite simple groups. No §6 heading in the read range is
  undisposed.

## 10. Step-4 B-leaf repair

No item was added or dropped, so the canonical harvest remains exact and no new
coverage row is required. The four repairs are:

- `ex-class-equation-of-s-three` →
  `ex-conjugation-in-symmetric-group-three`: **route 1, cite the underlying
  results instead.** The item now cites `def-symmetric-group`,
  `lem-symmetric-group-is-a-group` and
  `thm-number-of-bijections-of-a-finite-set`; it lists all six permutations and
  performs every conjugation pointwise in its own verification. The published
  example supplied only one of those elementary computations.
- `ex-class-equation-of-the-dihedral-group-of-order-eight` →
  `ex-symmetries-of-a-square`: **route 2, reconstruct the specific object in
  the batch-owned item.** From the symmetric-group, subgroup, power and order
  definitions it constructs
  \(D=\{e,r,r^2,r^3,s,rs,r^2s,r^3s\}\), proves this is a nonabelian subgroup
  of order eight, and then computes its conjugacy classes. No duplicate item was
  minted: this construction belongs inside the already harvested class-equation
  example.
- `ex-two-colourings-of-a-square-up-to-dihedral-symmetry` →
  `ex-symmetries-of-a-square`: **route 2, cite the preceding local
  reconstruction.** Its dependency is now the earlier batch-owned class-equation
  example on this same B page, plus `def-group-action` for the induced action on
  colourings. Same-B backward dependencies are expressly legal.
- `cex-groups-of-order-p-cubed-need-not-be-abelian` →
  `ex-symmetries-of-a-square`: **route 2, cite the preceding local
  reconstruction.** The counterexample now consumes the earlier batch-owned
  statement that \(D\) has order eight and is nonabelian, rather than reaching
  into a published examples page.

All replacement published clauses were opened from disk. The two removed
published examples were also opened from disk before their edges were removed.
No convention disagreement was introduced: composition remains right-to-left,
\(D\) denotes the order-eight square group locally, and \(r,s\) satisfy
\(sr=r^{-1}s\).

## 11. Continuity checkpoint

Checkpoint written after the source/dependency pass and before final gates,
2026-08-11:

- The four allowed batch artifacts are the only batch-8 files touched.
- `pages.json` parses and contains 31 new A items and 16 new B items.
- `coverage.json` parses and currently reports 66 harvested headings with
  41 included, 8 inline, 4 already published and 13 declined.
- `proof-contracts.json` parses and has 40 scoped contracts, one for every
  proof-bearing new item.
- All 55 unique published dependencies/context items have been opened on disk;
  none has an AI-generated statement component.
- No split is needed and no published item/page edit has been made.
- Gate results and the orchestrator-owned spec-sync handoff are recorded in §12.

## 12. Gate receipt and blocker

The escalation-free batch-scoped direct gates are green:

- `node tools/coverage-checklist.mjs
  research/frontier-10-batch-8.coverage.json`: exit 0; 1 page, 66 headings, no
  error or warning.
- `node tools/content-policy.mjs
  research/frontier-10-batch-8.pages.json --manifest-only --rehomed
  research/frontier-10-rehomed.json`: exit 0; 47 scoped items, no error or
  warning.
- All three JSON artifacts parse. The proof-bearing item set, proof scope and
  contract map each contain the same 40 IDs; every contract citation is present
  in its item's manifest dependencies; and each same-B dependency points to an
  earlier item.
- `git diff --check` is clean for the four allowed files.
- `node tools/prosecheck.mjs` over the four allowed files: exit 0; no errors and
  four advisory `count-in-prose` warnings for deliberate ledger/checkpoint
  counts.

The exact prescribed `validate-plan` command currently exits 1 because
`research/plan-spec.json` still contains the step-4 copies of the four old
batch-8 dependency arrays. Editing or re-splicing that file is expressly outside
this Beta's scope. To separate that stale copy from the repaired artifact, I
copied the spec to `/tmp`, overlaid exactly the four dependency arrays from the
repaired manifest, and ran the same validator with the same re-home file. It
reported 16 errors belonging to other batches or already known undeclared
prerequisites; none named `group-actions-and-cayleys-theorem` or its examples
page. The current on-disk spec without that temporary overlay reports 22 errors,
the difference being exactly batch 8's four B-leaf errors and two consequent
undeclared-prerequisite errors. The orchestrator must synchronize the repaired
arrays into `plan-spec.json` before the authoritative run can become green.

Per the dispatch, `tools/gates.mjs` was not run. There is no mathematical,
source-access, dependency, size or deliverable blocker in the four batch-8
artifacts; the only remaining handoff is the orchestrator-owned spec sync.

## 13. Step-5 authoring record

This section supersedes the step-4 continuity checkpoint and its then-current
spec-sync handoff. Step 4 subsequently synchronized the repaired manifests and
cleared the run-wide plan gate, as recorded in `research/frontier-10-RESUME.md`.

### Authored corpus and publication staging

All 47 manifest IDs were authored: 31 A-page items and 16 B-page items. There
was no drop, rename or merge, so every `included` and `inline` coverage row still
names an item that exists. The eventual enriched A page has 37 items, below the
hard limit of 60; no split or pruning decision is needed. Every new item is
`status: draft`, `origin: session`, and has both component provenance fields.
The corrected 47-row rationale table in §4 is the per-item provenance ledger:
7 definitions are `literature-derived/not-applicable`, 31 proof-bearing items
are `literature-derived/ai-altered`, and 9 diagnostic constructions are
`ai-altered/ai-generated`.

The two published page files were left unchanged. Their publish-time list edits
and the replacement A-page summary are staged in
`research/frontier-10-published-amendments.md`; the B page retains no authored
summary body. That amendment also records, but does not duplicate, the two-item
re-home already applied at step 4.

### Authored dependency and strategy ledger

Four proofs exposed prerequisites that were implicit in the adjudicated baseline
and therefore had to be named rather than hand-waved:

- `cor-index-p-subgroups-of-finite-p-groups-are-normal` adds `thm-lagrange` to
  license the order quotient used to prove the core index is a power of (p).
- `cor-groups-of-order-p-squared-are-abelian` and
  `thm-normal-subgroups-of-finite-p-groups-meet-the-center` each add
  `lem-subgroups-of-finite-p-groups-are-p-groups` to license the subgroup-order
  exponents used in their case splits and congruences.
- `thm-cauchys-theorem-for-finite-groups` adds `def-finite-p-group` to license
  the assertion that the additive group of (mathbb Z/p), once shown to have
  (p) elements, is the acting finite (p)-group.

No baseline dependency was removed. The manifest strategy label
`double-counting` is not in the frontmatter/precheck strategy vocabulary, so it
was normalized to `direct` on
`thm-cauchy-frobenius-orbit-counting`,
`ex-two-colourings-of-a-square-up-to-dihedral-symmetry`, and
`ex-binary-necklaces-of-length-four`; each proof still performs the specified
fixed-pair count. Titles, IDs, kinds and reading order are unchanged.

The proof-contract file was regenerated from the authored Facts & Assumptions
and numbered steps. It scopes exactly the 40 proof-bearing items, gives exact
item/section citations, exact step inputs, and anchored dispositions for all
eight boundary categories. Definitions are outside proof scope by design.

### Boundary dispositions

- Empty acted-on sets are admitted by the fixed-point congruence and
  Cauchy–Frobenius identity; Jordan's theorem separately assumes (|X|>1).
- The trivial group is a finite (p)-group through exponent (0), whereas the
  centre and normal-subgroup-intersection theorems state their nontriviality
  hypotheses explicitly.
- Singleton orbits, trivial stabilisers, the regular action, and trivial actions
  are included in orbit–stabiliser; the faithful/core-free corollary proves both
  directions rather than relying on a one-way implication.
- The class equation permits an empty list of noncentral representatives. The
  subgroup non-covering proof covers both (H=\{e\}) and the one-conjugate case
  of a proper normal subgroup.
- The (p)-group arguments include the endpoint (p=2). Cauchy's cyclic-shift
  proof treats two-tuples without commuting their factors and proves that a
  nonidentity fixed tuple has order exactly (p).
- The diagnostic leaves compute every claimed failure: (Z(S_3)=\{e\}), a
  free two-orbit action, the nonfaithful (mathbb Z/6) coset action, the
  nonabelian order-(2^3) square group, the non-(p)-group fixed-point failure,
  and the absence of an index-two subgroup of (A_4).
- The Burnside tables are complete: square-colouring fixed counts
  (16,2,2,4,8,8,4,4) sum to (48=8\cdot6), and necklace fixed counts
  (16,2,4,2) sum to (24=4\cdot6). The singleton trivial action separately
  refutes the naive quotient (|X|/|G|).
- No ordered interval, analytic endpoint or nonempty-choice issue occurs; every
  chosen point, representative or generator is supplied by the Given or chosen
  only after nonemptiness is established.

### Harvest yield and confidence boundary

The checklist remains exact at 66 harvested results: 41 `included` rows (33
source results plus 8 canonical requirements), 8 `inline`, 4
`already-published`, 5 `deferred`, and 8 `out-of-scope`. All thirteen declines
have result-specific homes or depth reasons in §3; none uses a missing local
lemma as an excuse. Alpha's L2 correction is now reflected in both coverage and
these notes: Conrad Theorem 6.9 routes to a future enrichment of
`cosets-and-lagranges-theorem`.

The four source treatments and exact locators come from this Beta's settled
step-2/3 harvest, preserved in the coverage artifact. During this return pass,
all cited published dependency statements were re-opened on disk; the attempted
fresh web refetch returned no usable payload, so no claim of a new source fetch
is made. This is not a deliverable blocker because the durable harvest includes
the source URLs, result locators and dispositions. No judge or independent-reader
verdict is claimed at step 5; those remain step-6 work.

There is no mathematical, size, source, dependency, or artifact blocker. The
individual prescribed gate receipts are recorded in §14 after the final run;
the aggregate `tools/gates.mjs` wrapper was deliberately not invoked.
