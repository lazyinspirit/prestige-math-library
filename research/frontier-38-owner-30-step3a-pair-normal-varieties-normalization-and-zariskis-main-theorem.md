# Step 3a scope review — `normal-varieties-normalization-and-zariskis-main-theorem`

- Run: `frontier-38-owner-30`; role alpha; label
  `step3a-pair-normal-varieties-normalization-and-zariskis-main-theorem-379ead68fff918ef`.
- Pair: A `normal-varieties-normalization-and-zariskis-main-theorem` / B
  `normal-varieties-normalization-and-zariskis-main-theorem-examples` (batch 1,
  orders 366.061/.062, algebraic-geometry). Owned pair only; no scaffold, item,
  owner record or sibling batch file edited.
- Decision: **sufficient** for the intended subject as designed. No omitted
  topic, result or example found; no enrichment or pair merger proposed; no
  unmet prerequisite found. Owner action: none required before Step 3b
  authoring of this pair.

## Evidence read

- Controlling design: `research/plan-algebraic-geometry-track.md` §AV-7
  (L567–675): A inventory 24 rows (L579–604), B leaf 8 rows (L606–618), pair
  sources Milne Ch. 8, Artin Ch. 4, Vakil Ch. 10/13 (locator drift below).
  Owner amendment: `research/frontier-38-owner-30-owner-authoring-direction.md`
  preserves order 366.061 and the seven same-page AV-7 bridges and forbids
  using later AV-15/17/19 as forward prerequisites. Drift verdict `no-drift`:
  `research/frontier-38-owner-30-alpha-step1-drift.md` L108–119.
- Manifests and plan: `research/frontier-38-owner-30-batch-1.pages.json`
  (A 31 items, B 8 items; A `requires` = `zariski-tangent-spaces-regular-points-smoothness-and-bertini`,
  `normalization-finiteness-for-affine-domains`, `algebraic-zariski-main-for-quasi-finite-morphisms`;
  B requires A only), `research/frontier-38-owner-30-scope-ledger.json`,
  `research/plan-spec.json` (A page registers the seven bridges with
  `local_addition: true`; both pages present). Cross-batch input `[]`; no other
  in-run page requires this pair.
- Scaffold record: `research/frontier-38-owner-30-batch-1.notes.md` (full),
  `research/frontier-38-owner-30-batch-1.coverage.json` (all rows inspected),
  `research/frontier-38-owner-30-local-prereq-av7-zmt-projectivity.md` (full
  substantive sections: item order, published imports, Stacks 37.43 import
  matrix, provenance limits, checks).
- Load-bearing supplier statements read in full:
  `thm-algebraic-zariski-main-localization`,
  `cor-affine-normalization-is-finite`,
  `thm-integral-closure-finite-finite-type-domain-over-field`,
  `lem-finite-normalization-compatible-with-principal-opens`,
  `thm-normality-is-local-for-domains`,
  `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`,
  `lem-r-one-s-two-intersection-of-height-one-localisations`,
  `thm-one-dimensional-regular-local-rings-are-dvrs`,
  `thm-serre-normality-criterion`, `thm-regular-local-rings-are-normal`.
- Sources checked directly in the fetched Milne text (`milne-ag.pdf`, 2025
  version; Ch. 8 ≈ PDF pp. 175–196): 8.1/8.2 area, 8.5, 8.6(a)(b) (cusp
  $t\mapsto(t^2,t^3)$; node $t\mapsto(t^2-1,t^3-t)$), 8.8, 8.9, 8.12, 8.14,
  8.15, 8.16 (declined), 8.34, 8.45 Zariski's Main Theorem, 8.46 local form,
  8.49, 8.54, 8.57, Summary 8.13 (cone $z^2=xy$ normal but not factorial,
  pointer to 9.39) and Aside 9.39. Milne §f Stein factorization and §g
  blow-ups are outside this pair (blow-ups is batch 2). Proof correctness was
  not assessed; Step 3b/5 own it.

## Inventory against the design

- A: 31 items = the 24 contracted AV-7 rows plus the seven owner-authorized
  same-page bridges (`lem-av7-*`). Contracted groups: normality (definition,
  affine-cover locality, regular $\Rightarrow$ normal, codimension-one DVR),
  normalization (affine definition, finite/birational/surjective, isomorphism
  over the normal locus, gluing, universal property, uniqueness, open
  restriction), branches (unibranch, normal curve $\Leftrightarrow$ regular,
  resolution of curve singularities), finite morphisms and ZMT (definition,
  closedness and finite fibres, finite birational to normal target,
  separated quasi-finite factorization, finite-birational corollary), function
  theory (codimension-one intersection), conductor (definition, common-ideal
  lemma), and the non-resolution remark. The seven bridges supply the nonaffine
  ZMT route: elementary étale local tools, finite relative integral-closure
  charts, closure under elementary étale change, coprime factorization into
  finite component neighbourhoods, classical ZMT from those neighbourhoods,
  proper quasi-finite $\Rightarrow$ finite, and finite over projective
  $\Rightarrow$ projective. Their statements keep separated finite type,
  finite fibres, AC, reduced reducible/empty varieties and claim no
  scheme-level generality; the AV-15/17/19 seams are replaced exactly as the
  owner direction requires. 31 < 100.
- B: exactly the design's eight leaves, in order: cusp, node, affine space
  normal, node non-injectivity, normal-but-singular quadric cone, bijective
  non-isomorphism cusp reprise, conductor semigroup, quasi-finite open
  immersion that is not finite. Together they illustrate the definition,
  normalization computations, branch separation, normal $\not\Rightarrow$
  smooth, the failure of bijectivity without normality, the conductor, and the
  properness boundary of ZMT.

## Source coverage

- Coverage matrix (`...-batch-1.coverage.json`): 15 sources, 79 harvested rows
  — 31 `included`, 13 `inline`, 8 `already-published`, 2 `deferred`, 25
  `out-of-scope` with individual reasons; `coverage-checklist` reports 0 errors
  and the single advisory low-yield warning (31/79) that the notes explain.
  `source-fetch-check` resolved 15/15 (14 fetch stamps; tag 035H recovered from
  the Stacks Chapter 29 PDF after a documented drop).
- The two deferrals are non-load-bearing here: Milne Prop. 8.26
  (finite $\Rightarrow$ proper) and the Vakil/Artin Chevalley statements go to
  the later `finite-proper-and-projective-morphisms` page (order 366.069),
  which no item or consumer of this pair uses; finite-extension normalization
  (Vakil §9.7.I) goes to the published CA-19 page. Properness is never assumed
  on this page.
- My direct Milne checks confirm each headline result the design relies on,
  including ZMT 8.45/8.46, the local ZMT ingredient used by the bridges, the
  codimension-two singular-locus and rational-function theorems, the punctured
  plane example, and both examples 8.6. The B counterexamples
  `ex-normal-affine-space`, `cex-normal-not-smooth-quadric-cone`,
  `cex-normalization-not-injective-node` and `ex-conductor-cusp-semigroup`
  have no dedicated content row (the cone is stated in Milne Summary 8.13 and
  the others are derived from covered items); all are literature-backed except
  the one design-declared `ai-generated` conductor example, whose manifest
  provenance now matches the design.
- Documented locator updates are honest and testable: Vakil's ZMT lives at
  §29.6 in the fetched 2017 draft (not §13.5), and the Artin copy's page
  numbering is PDF pp. 89–108 (not printed 82–98); both are recorded in the
  batch notes rather than silently kept.

## Prerequisite assessment

- Direct dependencies: for all 39 items, every declared dep is either a local
  item of this batch or a published item whose home page order is strictly
  below 366.061/366.062 (checked against `plan-spec.json` homes and `library/`
  homes) — 0 missing, 0 forward. My own traversal of the full dependency
  closure of the 39 items reached 1,503 nodes with 0 missing item files (the
  packet's separate 1,403-node traversal covers the seven bridges only).
- The three declared `requires` pages are published and their consumed
  statements were read: `thm-algebraic-zariski-main-localization` (AC, finite
  type, quasi-finite at the prime, concludes $S'_g\cong S_g$);
  `thm-integral-closure-finite-finite-type-domain-over-field`,
  `lem-finite-normalization-compatible-with-principal-opens`,
  `cor-affine-normalization-is-finite` (CA-19); and the AV-6 items
  `thm-regular-equals-smooth-over-perfect-field` and
  `def-regular-local-ring-geometric-point`.
- No unmet prerequisite found — no confirmed gap, no uncertain candidate.
  Residual uncertainty, stated honestly: (i) I verified bridge and planned-item
  statements and their declared interfaces, not their proofs; (ii) the seven
  bridge proofs and the 24+8 new items remain ordinary Step 3b/5 obligations;
  (iii) I re-read the Milne headline results directly, but the Vakil/Artin
  locator freshness rests on the scaffolder's recorded reading, not on a
  re-fetch by me.

## Minor record notes (not scope-affecting; no owner action)

1. The cone counterexample's source statement is Milne Summary 8.13 (Ch. 8),
   whose coverage row is dispositioned `out-of-scope` as duplicative even
   though it is the row containing the cone example; the manifest's Ch. 8
   citation is accurate (proof pointer 9.39). A Step-3b source note could
   anchor the row explicitly.
2. Several derived items (uniqueness/open-restriction corollaries, unibranch
   definition, normal-curve theorem, conductor definition and lemma, and the
   non-resolution remark) carry no dedicated coverage row; their deps include
   the published DVR/integral-closure interfaces, so this is a coverage-table
   nuance, not an omission.

## Scope judgement

The intended subject — normality for classical varieties, the normalization
morphism with its universal property and curve consequences, finite morphisms,
Zariski's Main Theorem in the exact classical quasi-finite form with its
proper-quasi-finite and finite-birational corollaries, codimension-one
function theory, and the conductor — is fully planned, with the nonaffine ZMT
route registered as same-page items and no dependence on unbuilt pages. The B
leaf covers the design's examples and counterexamples exactly. The pair is new
(not published; frontier-37 removed it before publication), so there is no
published-consumer conflict, and its planned consumer (`plane-curves-local-intersection-multiplicity-and-bezout`,
order 366.063) lies outside this run.

Next action: scope receipt recorded at
`research/frontier-38-owner-30-step3a-review-normal-varieties-normalization-and-zariskis-main-theorem.json`
(decision `sufficient`); Step 3b may author the 24 contracted A rows and the
8 B rows against this scaffold.
