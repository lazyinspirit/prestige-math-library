# Frontier-31a Step 6b — group a adjudication

**Run:** `frontier-31a`  
**Group:** `a`  
**Owned batches:** `1`, `18`, `19`  
**Status:** complete; all 63 routed obligations and one supplemental gate
obligation have one closed decision and one uniquely owned ledger reference.

## Evidence and scope

For each owned batch I read its current Step-6 scope, reader report and
findings JSON, refuter report, touched or flagged carrier, proof contract,
manifest rows, cited dependencies, and the relevant exact source records. A
report was treated as evidence rather than a verdict. In particular, batch 1's
empty reader-findings JSON is a routing correction, not evidence that the
reader's 32 explicitly listed template-proof defects disappeared: all 32
current carriers were reread before repair.

The principal external evidence was checked through the current fetched
coverage records and exact locators:

- Stephen D. Smith, *CFSG—A User's Manual*, opening component and
  generalized-Fitting discussion and the finite-simple-family tables,
  `https://homepages.math.uic.edu/~smiths/talkv.pdf`;
- Michael Aschbacher, the CFSG status survey, pp. 1–5, for the
  first-generation history and quasithin repair;
- the official AMS Number 10 record, fetched and dated in
  `research/frontier-31a-batch-1.coverage.json`, for the second-generation
  programme status;
- Charles A. Weibel, *An Introduction to Homological Algebra*, Chapter 6,
  Theorem 6.5.8 and §§6.8–6.9, including Hopf's theorem and universal central
  extensions,
  `https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf`;
- Lassueur, Chapter 9, §§34–37, for Hopf's formula, finite multipliers, and
  Schur covering groups;
- Pavel Etingof, *Representations of Lie Groups*, Exercise 8.15(iv)–(x),
  `https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf`;
- János Kramár, *Artin's and Brauer's Theorems on Induced Characters*,
  Lemmas 3–5 and Theorem 2,
  `https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf`; and
- Wen-Wei Li, *Yanqi Lake Lectures on Algebra I*, Corollaries 14.4.1–14.4.2,
  `https://www.wwli.asia/downloads/YAlg1.pdf`.

No reader or refuter was rerun, no new work was dispatched, and no carrier
outside batches 1, 18, and 19 was edited.

## Batch 1

The reader report identified 32 fatal two-step templates. All were still
present when adjudication began. Their current proofs, refutations, or
verifications were replaced and their proof-contract rows synchronized:

- theorem/corollary/lemma proofs:
  `lem-distinct-components-commute`,
  `thm-generalized-fitting-subgroup-contains-its-centralizer`,
  `lem-five-term-homology-sequence-for-a-free-presentation`,
  `cor-hopf-formula-is-independent-of-the-free-presentation`,
  `cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated`,
  `thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square`,
  `thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect`,
  `prop-universal-central-extension-group-is-superperfect`,
  `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two`,
  `cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier`,
  `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion`,
  and `thm-existence-of-schur-covering-groups-for-finite-groups`;
- false-statement refutations:
  `fs-cfsg-says-every-finite-group-is-simple`,
  `fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism`,
  `fs-all-finite-simple-groups-are-alternating-or-cyclic`,
  `fs-the-library-proves-the-classification-of-finite-simple-groups`,
  `fs-the-second-generation-cfsg-proof-is-complete-as-of-2026`,
  `fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure`,
  `fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units`,
  `fs-hopfs-formula-is-obviously-independent-of-the-presentation`,
  `fs-every-group-has-a-universal-central-extension`,
  `fs-every-central-extension-is-a-stem-extension`,
  `fs-schur-covering-groups-are-unique-for-all-finite-groups`, and
  `fs-the-universal-coefficient-short-exact-sequence-splits-naturally`; and
- example verifications:
  `ex-cyclic-simple-groups-of-prime-order`,
  `ex-a-five-as-the-smallest-nonabelian-simple-group`,
  `ex-psl-two-seven-and-a-low-rank-coincidence`,
  `ex-a-suzuki-group-family-entry`,
  `ex-the-mathieu-groups-among-the-sporadics`,
  `ex-schur-multiplier-of-a-cyclic-group`,
  `ex-schur-multiplier-of-a-finite-abelian-group`, and
  `ex-the-binary-icosahedral-cover-of-a-five`.

The claim-level reread also corrected the twelve false-statement carriers so
their Statement sections now state the proposition being refuted rather than
a true correction prefixed by “False”. Mathematical notation in their claims
and in the theorem/example statements was made well formed. The binary
icosahedral example and the positive-degree finite-group homology lemma now
name the exact Weibel source actually used.

The remaining touched work was adjudicated as follows:

- the reader's three malformed-token repairs in
  `lem-every-finite-group-is-finitely-presented`,
  `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`, and
  `prop-schur-multiplier-of-a-free-group-is-trivial` were retained;
- the Aschbacher/AMS citation retargets in
  `rem-history-of-the-first-generation-classification`,
  `rem-the-quasithin-gap-and-its-repair`, and
  `rem-status-of-the-second-generation-proof` were accepted unchanged;
- twelve mathematically adequate proof carriers received proof-specific
  contract claims and inputs in place of generic worksheet text:
  `cex-composition-factors-do-not-determine-the-extension`,
  `cex-nonuniqueness-of-schur-covering-groups`,
  `cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier`,
  `ex-a-stem-extension-that-is-not-universal`,
  `ex-hopf-formula-from-a-one-relator-presentation`,
  `lem-exterior-square-has-the-alternating-universal-property`,
  `lem-free-presentation-construction-is-a-central-extension`,
  `lem-schur-multiplier-of-a-finite-group-is-finite`,
  `lem-universal-central-extension-is-unique-up-to-unique-isomorphism`,
  `prop-schur-multiplier-of-a-cyclic-group-is-trivial`,
  `thm-free-presentation-construction-has-the-universal-property`, and
  `thm-hopf-formula-for-the-schur-multiplier`; and
- the page repair in
  `schur-multipliers-and-universal-central-extensions` was accepted: the
  coefficient now renders as `$H_2(G;\mathbb Z)$`.

`refuter:1:1` is `confirmed_fatal`. The status remark asserted an internal
generalized-Fitting proof while that dependency still contained the vacuous
template. The dependency now states the exact Smith self-centralizing result,
and the remark accurately calls the proof source-backed.

The risk report now promotes
`thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect` to HIGH.
Its completed review checks both quantifiers and directions: uniqueness
against split extensions forces `G_ab=0`; conversely the free-presentation
construction is central and surjective, independent of generator lifts, and
perfect by writing `F'=[F,F]` and deriving `F'=[F',F'][F,R]`, which supplies uniqueness of every map
over `G`.

## Batch 18

The six touched decisions retain their prior dispositions: one
`accepted_repair` for `thm-universal-property-of-verma-modules` and five
`amended_repair` decisions for the other reader repairs and their verification
metadata.

`refuter:18:1` remains `confirmed_fatal`. A fresh reread found that the first
adjudication repair still made the exact-multiplicity conclusion conditional
on a positive unknown multiplicity. The current determinant proof now:

1. separates the PBW leading term and Casimir factor-locus arguments;
2. derives the allowed normal `n alpha` and its affine hyperplane correctly;
3. invokes Etingof Exercise 8.15(vii)–(ix) unconditionally at a generic point
   of `H_{alpha,n}` to obtain the embedded Verma radical; and
4. uses the nondegenerate transverse derivative and an adapted-basis
   determinant calculation to get exact order `K(beta-n alpha)`, including
   the zero and finiteness cases.

Specific completed risk reviews remain present for the three HIGH/CRITICAL
items: `prop-the-shapovalov-radical-is-the-maximal-submodule`,
`thm-shapovalov-determinant-formula`, and
`cor-verma-irreducibility-criterion-from-shapovalov-determinants`.

## Batch 19

The two touched reader repairs remain `amended_repair`:
`thm-brauer-induction` uses the complete elementary-detection, gcd/Bezout,
ideal, monomiality, and transitivity route; and
`cor-cyclotomic-field-splits-a-finite-group` is typed over a subfield of the
complex numbers and proves the virtual-to-actual model step by disjoint
constituent supports.

Both refuter findings remain `confirmed_fatal`. For `refuter:19:2`, the current
detection proof now supplies the final missing hypothesis bridge explicitly:
Frobenius makes the constructed induced sum rational-valued, its cyclotomic
character expansion makes its values algebraic integers, hence it is
integer-valued before the p-primary congruence is applied. The n=0 case,
Euler divisibility, and integral coefficient descent are explicit.
`refuter:19:1` is closed by the field-embedding and scalar-extension repair.

The supplemental HIGH-risk gate decision
`gate:frontier-31a-S6-a-gate-19-local-field-typing` remains
`confirmed_fatal`; the local integrality criterion now has a well-typed
coefficient field. All nine HIGH/CRITICAL batch-19 contracts contain specific
completed review records.

## Decisions, ledger, and stamps

`research/frontier-31a-alpha-a-6b-decisions.json` contains 64 decisions:

- 54 `amended_repair`;
- 5 `accepted_repair`;
- 5 `confirmed_fatal`;
- 58 touched routes, 1 page route, 4 flagged routes, and 1 supplemental gate
  route.

Every decision has nonempty evidence, one unique closed defect reference, and
a current `subject_sha256` written by `tools/step6-scope.mjs stamp`. There are
64 group-a ledger rows in total. This adjudication appended 52 batch-1 rows
through `tools/defect-ledger.mjs append`; the generated ledger view was
refreshed in the same transaction. The 12 earlier batch-18/19 rows were not
duplicated: the determinant and detection edits complete the same refuter
defects those rows already record.

## Validation

- `risk-report` was run without `--require-reviewed` for every owned contract.
  It reports one HIGH item in batch 1, three HIGH/CRITICAL items in batch 18,
  and nine in batch 19. All thirteen were mathematically reread and all three
  contracts pass the repeated `--require-reviewed` gate.
- Strict proof-contract checks pass 47/47, 19/19, and 21/21 with zero errors or
  warnings.
- `manifest-deps` checks 121 items with zero errors; `content-policy` checks
  the same 121 items with zero errors and zero warnings.
- Citation fidelity checks 27 contract citations over 87 authored items: no
  missing quote and no widening candidate.
- Boundary audit checks 696 rows: no contradicted disposition and no template
  cluster at the configured threshold.
- Every materially edited proof was reflowed and passed focused precheck; the
  edited items and owned page passed focused renderer validation.
- Repository dependency checking ends `OK`: no cycles, every reference
  resolves, and no draft item occurs on a published page. Its 478 existing
  repository-wide warnings are outside this dispatch.
- The frontier-31a defect ledger validates with zero errors.
- Batch-scoped Step-6 adjudication checks for 1, 18, and 19 report no owned
  decision, hash, ledger, or disposition error. Each invocation still reports
  two global publication-receipt errors concerning
  `lem-sheaf-condition-check-on-basis` / `reader:14:1`, which belong to batch
  14 and were not altered here. The full run check likewise contains stale or
  missing work owned by other groups.

There is no unresolved group-a obligation and no proposed withdrawal.
