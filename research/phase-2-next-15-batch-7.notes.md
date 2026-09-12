# Batch 7 — construction evidence and owner escalations

Run `phase-2-next-15`, beta batch 7, assigned pair
`the-weyl-kac-character-formula` /
`the-weyl-kac-character-formula-examples`, orders 510.029 / 510.030.
Twenty items were scaffolded in prerequisite order: sixteen A items (the
fifteen design items plus one necessary local lemma) and four B items. Seven
readiness records are `ready` and thirteen are `escalated`. This is Step-1
construction evidence, not mathematical approval.

## Plan, design, and scope reconciliation

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta
and frontier-dependency briefs, the complete RL13--RL15 design and binding
conventions, the task, live run state, current plan and batch files. Baseline
HEAD was `79c8c7519`.

The current plan and design agree on page IDs, order, category, companions and
the declared page edges RL12 + RL14 -> RL15 -> RL15-B. Both RL15 plan item
lists are empty, so there is no canonical item-inventory conflict. No selected
pair, shared plan, published content, verdict, or engine state was edited.

Three design corrections/conflicts were recorded:

1. The design's source locators drift from the current PDFs. Kleshchev's
   formal characters are Section 9.2, pp.119--122, and Weyl--Kac is Theorem
   10.2.1, pp.129--131. Perrin's relevant sections are 10.7 and 11.1--11.2,
   pp.91--99. Coverage uses the inspected current locators.
2. Both complete source proofs require a Casimir-constrained expansion in
   Verma characters (Kleshchev Proposition 9.2.5; Perrin Lemma 11.2.4), which
   the design omitted. The sources prove the character formula first and
   recover the denominator at highest weight zero. To preserve the design's
   denominator-first correction route,
   `lem-casimir-constrained-verma-character-expansion` was inserted
   immediately after denominator skewness and before every consumer.
3. The design includes a general untwisted-affine factorization and two affine
   computations, while the current plan gives RL15 only RL12 and RL14 and
   leaves RL13's item inventory empty. The current plan controls: no page edge
   was changed. Exact RL13 dependencies remain explicit, the five resulting
   focused policy errors remain visible, and affected items are escalated.

Conventions are positive Borel, `a_ij = alpha_j(h_i)`, `rho(h_i)=1`,
support in finite unions of downward `Q^+`-cones, and coefficientwise formal
products and sums. Symmetrizability precedes the invariant form, Casimir and
Weyl--Kac arguments. Every imaginary factor uses
`mult(alpha)=dim(g_alpha)`.

## Mathematical proof audit

Formal multiplication is finite coefficientwise by simple-root height.
Denominator skewness uses the published simple-reflection permutation of
positive roots other than the simple root and preservation of multiplicity.

The correction quotient uses
`K^+ = {beta in Q^+ : w beta is in Q^+ for every w in W}`; it does not
identify this cone with the imaginary roots. If a nonconstant invariant
correction exists, a least-height support element has `beta(h_i) <= 0` by
reflection invariance and minimality. The trivial module's constrained Verma
expansion makes every surviving denominator term `e^(rho-beta)` obey
`||rho-beta||^2=||rho||^2`. A same-degree alternant term would already obey
that equality and is excluded by `beta^2 <= 0 < 2(rho,beta)`; smaller mixed
terms vanish by minimality. The correction coefficient therefore survives in
the denominator and yields the same contradiction.

For the numerator, `exp(f_i) exp(-e_i) exp(f_i)` is a finite operator on each
vector and gives actual weight-space isomorphisms. This avoids
`prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant`, whose
arbitrary-basis/cardinality clause declares AC. If `Lambda+rho` and
`mu+rho` are strictly dominant and nonzero
`beta=Lambda-mu` lies in `Q^+`, then
`||Lambda+rho||^2-||mu+rho||^2=(beta,Lambda+mu+2rho)>0`, contradicting
the Casimir equality. Thus only the highest shifted orbit occurs.

No owned item declares or uses AC. Finite linear extension for `rho`, finite
height enumeration and rank-one exponentials are choice-free. No Recorded
result proves a replacement, and this lie-theory batch has no dependency path
to `deferred-set-theory-beyond-choice`.

## Readiness outcomes

Ready:

- `def-kac-moody-formal-character-completion`
- `def-kac-moody-weyl-vector`
- `def-kac-moody-denominator-product-with-root-multiplicities`
- `lem-the-kac-moody-denominator-is-weyl-skew`
- `def-generalized-kostant-partition-function`
- `rem-weyl-kac-products-are-formal-not-analytic-identities-here`
- `cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator`

Escalated through draft RL14 interfaces:

- `lem-casimir-constrained-verma-character-expansion`
- `lem-the-denominator-quotient-has-only-imaginary-cone-support`
- `lem-casimir-norm-excludes-nonzero-denominator-corrections`
- `thm-kac-moody-denominator-identity`
- `lem-the-shifted-integrable-character-numerator-is-weyl-skew`
- `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator`
- `thm-weyl-kac-character-formula`
- `cor-kac-moody-kostant-multiplicity-formula`
- `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula`
- `ex-finite-a1-specialization-of-weyl-kac`

Escalated additionally through missing RL13 interfaces:

- `prop-affine-denominator-separates-real-and-imaginary-root-factors`
- `ex-real-and-imaginary-factors-in-the-affine-sl2-denominator`
- `ex-first-weight-layers-of-the-basic-affine-sl2-character`

All outcomes were written with `tools/step1-decisions.mjs record` and exact
examined dependency IDs. Focused inspection reports 20 records, 7 ready, 13
escalated, 7 current ready hashes, and no missing records. Escalations must not
be overwritten by a worker.

## Published supplier defect for the canonical ledger

`library/lie-theory/integrable-highest-weight-kac-moody-modules.md` is
`published` (SHA-256
`a8c017d21af1abb099d2f7b42b736a423c2f59f610f707a570e178d77f993a4a`),
but all twenty item files it lists are `draft`. Its published companion
lists `ex-the-basic-level-one-weight-of-affine-sl2`, also `draft`. A judge
pass is not publication.

Exact draft suppliers actually used here:
`thm-universal-property-and-pbw-character-of-kac-moody-verma-modules`,
`thm-kac-moody-verma-module-has-a-unique-simple-quotient`,
`def-kac-moody-integral-and-dominant-integral-weights`,
`def-integrable-kac-moody-module`,
`lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras`,
`thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules`,
`def-kac-moody-real-coroot-inversions`,
`lem-kac-moody-reduced-words-and-coroot-signs`, and
`ex-the-basic-level-one-weight-of-affine-sl2`. Their complete relevant
statements/proofs were read and are mathematically adequate; their publication
state is not.

Planned supplier: the existing RL14 pair. Repair: the serial owner/operator
must reconcile the published-page/draft-item state after review, publish
canonical RL14 items if approved, and then re-record downstream readiness. Do
not duplicate IDs or infer publication from page status. This is a
load-bearing actual-prerequisite defect; unrelated consumer debt did not block
the seven new ready suppliers.

## Owner escalation: RL13 placement and exact inventory

Preferred repair uses the existing planned pair: populate and publish
`affine-lie-algebras-and-loop-central-extensions` at order **510.025**,
before RL14 at 510.027 and RL15 at 510.029, then add it to RL15 A's
`requires`. Otherwise split the affine proposition and two affine B examples
to a page after RL13. No selected pair was changed here.

Exact RL13 A inventory:

1. `def-loop-algebra-of-a-simple-lie-algebra`
2. `def-residue-two-cocycle-on-a-loop-algebra`
3. `lem-the-loop-residue-form-is-alternating`
4. `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity`
5. `def-untwisted-affine-central-extension`
6. `def-degree-derivation-and-full-untwisted-affine-algebra`
7. `prop-the-derived-affine-algebra-omits-only-the-degree-derivation`
8. `def-null-root-central-coroot-and-affine-level`
9. `prop-roots-of-an-untwisted-affine-lie-algebra`
10. `lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root`
11. `thm-loop-and-affine-gcm-presentations-are-isomorphic`
12. `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`
13. `def-evaluation-module-at-nonzero-loop-parameter`
14. `prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d`
15. `def-twisted-loop-algebra-from-a-diagram-automorphism`

Exact RL13 B inventory:

1. `ex-affine-sl2-mode-brackets`
2. `ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra`
3. `ex-the-affine-a1-simple-roots-and-gcm`
4. `ex-an-evaluation-module-for-affine-sl2`
5. `cex-omitting-the-central-term-breaks-the-affine-gcm-bracket`
6. `cex-the-residue-cocycle-depends-on-invariant-form-normalization`

Sources: Kleshchev Sections 6--8, pp.77--115; Perrin Sections 12 and 14,
pp.101--110 and 121--126. Exact load-bearing chains:

- loop algebra -> residue cocycle -> alternating/cocycle lemmas -> central
  extension -> degree derivation -> null root -> affine root list and
  multiplicities -> RL15 affine factorization -> affine sl2 factor example;
- affine simple root + loop/GCM comparison -> common root/multiplicity
  conventions -> affine factorization;
- null root + affine root list + affine Weyl semidirect product + draft RL14
  basic level-one weight + local Weyl--Kac -> first two character layers.

Direct missing IDs declared by the consumers are
`def-null-root-central-coroot-and-affine-level`,
`prop-roots-of-an-untwisted-affine-lie-algebra`,
`thm-loop-and-affine-gcm-presentations-are-isomorphic`, and
`prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`. None is in
the current plan inventory or on disk. Planned suppliers are not published
suppliers.

## Sources and examined dependency evidence

Two independent full lecture-note treatments were used:

- Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*:
  https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
- Perrin, *Introduction to Kac-Moody groups and Lie algebras*:
  https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf

Coverage contains exact ranges, named results, support, and dispositions.
Complete relevant arguments were inspected from full local PDF bodies and
extracted text, not snippets. Genuine exact-URL stamps and their historical
attempts were reused without resetting retries. Kleshchev: 725863 bytes,
`e8c16f478c46204f`, 159 pages. Perrin: 1703352 bytes,
`c273a40a1801bbcb`, 279 pages. Perrin was also freshly downloaded and
extracted with `mutool`. No source was dropped or waived.

Published prerequisite hashes:

- `def-kac-moody-category-o`: `1f2975e894903e3a40956aaed97af8298f0c79e6509ebc7ed8a7f44662f6b95f`
- `def-kac-moody-root-lattice-height-and-positive-cone`: `9a5b7f6aee3ca348a052cb6d92292a3121bcc0afb9ab61bcd81e7d7358bb3483`
- `def-realization-of-a-generalized-cartan-matrix`: `97d76cb0d6b3d8453f5df92eeccf4a885d9b7f9a325a5214dbd787b70bd88cb4`
- `prop-kac-moody-root-spaces-are-finite-dimensional`: `e7f163dee458656c8a226ad2c5e49cfb9fba1254e6ae739da24886884401f1f1`
- `prop-the-weyl-group-preserves-roots-and-root-multiplicities`: `7f591e7f0ead89b884b28ec328ec5d1042fe23e425fac198254500f1937a5110`
- `def-real-and-imaginary-kac-moody-roots`: `5851cfb2dcf331ab468792c024db69d14542cadae70836f557196be2aed5da2a`
- `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`: `e93b3d8df26ebda0663dc00a945f6c9f851f42dabd79c75e61fffc21e65683ce`
- `thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules`: `21ee46a499c47557ff55ded69fb7dd333b26ee5bc923f0133dea50cf4681126a`
- `lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors`: `c6c3945d36398f319cd79b17013bface7c8b9d931bdbec21124bdce8bb421b3e`
- `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`: `16ce1f39db29eb067da3f9c60c8ce4e66eda7fd8d78c027b43983d2012fd3251`
- `cex-imaginary-root-spaces-need-not-have-multiplicity-one`: `ea58012d9816add18f8c33aab28010adc82da14278b16574aeac3e22bccfb294`

Draft supplier hashes:

- `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules`: `cb52c3337bba4fb32539afec75e8b2dd95963fd901909615af2cfe0a3585dbdd`
- `thm-kac-moody-verma-module-has-a-unique-simple-quotient`: `91f4fdbf0e801beea1c2dce04788bce00c04e547ce0fe407942bb6fcd322fd6a`
- `def-kac-moody-integral-and-dominant-integral-weights`: `83f60521702cffb44237ea0a86f10bdea6b3ef53a9333761c8fd06be7dd5e770`
- `def-integrable-kac-moody-module`: `78d4459db3f7d3659e7da38cac8beecdc160a75151e193d745097bf29b226407`
- `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras`: `745ced53bb0eb303d4d454a45fd81a8675ea723c98ce2d98e4856bc1b83431cf`
- `thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules`: `8cdb84e84c4226594a006ec26ec57f67b2476d2b337fb7b30f87234fa474930e`
- `def-kac-moody-real-coroot-inversions`: `80b3328212ee46e681f3ee714107dcc5659b780e0f77192642ddf65c874269ab`
- `lem-kac-moody-reduced-words-and-coroot-signs`: `7cae7cb3b4477172fffb88e361a32798a05dd88e9dd849441529d6e473f3e676`
- `ex-the-basic-level-one-weight-of-affine-sl2`: `103d6e204a443e042262e8a77b343b69969cf818bfd4e1ada30518f5f770171c`

## Cross-batch input and checks

The owned consumer-batch input is `[]`: RL12, RL13 and RL14 are not selected
in another batch of this run. The RL13 issue is an outside-run owner
escalation, not a fictitious verified same-frontier edge.

| Check | Actual result |
|---|---|
| `frontier-dependency-ledger refresh` | exit 0, refreshed and deduplicated |
| same with `--require-reviewed` | exit 1: other batches still lack complete reviews |
| focused `coverage-checklist --require-destination` | exit 0: 1 A page, 34 results, 0 errors, 0 warnings |
| focused `source-fetch-check --stamp` | exit 0: 2/2 verified, 0 newly stamped, 0 drops |
| whole-run `manifest-deps` | exit 0 at final snapshot: 453 items, 0 normalized, 0 errors |
| focused `content-policy --manifest-only` | exit 1: 20 items, 5 exact missing RL13 declarations |
| whole-run `content-policy --manifest-only` | exit 1: 453 items, 11 errors; 5 owned RL13 escalations and 6 concurrent topology errors |
| `validate-plan` | exit 0: 1624 pages; 1022/1619 planned pages have item lists, 597 remain page-only |
| `extcheck --quiet` | exit 0 |
| `fwdcheck --quiet` | exit 0 |
| `depcheck --quiet` | exit 1 on existing repository-wide published-without-audit findings |

The five focused policy diagnostics are the three missing IDs on
`prop-affine-denominator-separates-real-and-imaginary-root-factors` and the
two root/Weyl IDs on
`ex-first-weight-layers-of-the-basic-affine-sl2-character`. They are
mathematical dependency findings, not ignored gate noise.

Owner/operator reconciliation is required for the RL14 status defect and the
RL13 edge or split. Step 3 must independently review alternant local
finiteness, minimal-support coefficient survival, dominance/norm exclusion,
and choice-free rank-one invariance.
