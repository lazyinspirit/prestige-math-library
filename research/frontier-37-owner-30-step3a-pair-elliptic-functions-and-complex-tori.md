# Step 3a scope review — Elliptic Functions and Complex Tori

- Run: `frontier-37-owner-30` (role: alpha; the pair's only batch, 27; this pair only)
- A page: `elliptic-functions-and-complex-tori` (plan order 845)
- B page: `elliptic-functions-and-complex-tori-examples` (plan order 846)
- Inventory: 14 A items (the 12 designed ids plus two declared local suppliers
  `lem-weierstrass-p-degree-two-and-half-periods`,
  `thm-weierstrass-zeta-sigma-quasi-periodicity`) at levels 0–6, and 7 B items at
  levels 2–7. A `requires` seven published pages; B requires the A page only;
  companion pointers pair the pages.
- Scope decision: **insufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-37-owner-30-step3a-review-elliptic-functions-and-complex-tori.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item contract,
  plan, page, coverage record, engine state or owner record was edited by this review.
  No `frontier-37-owner-30-owner-authoring-direction.md` (or owner decision file for
  this pair) exists on disk, so nothing was assumed from one.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-27.pages.json` | Current scope carrier (all 14 A + 7 B statements, `deps`, levels, `requires`, companions) |
| `research/frontier-37-owner-30-batch-27.coverage.json` | 3 sources, 43 harvested rows (26 included, 7 inline, 7 deferred with destinations, 3 out-of-scope); per-row locators and reasons |
| `research/frontier-37-owner-30-batch-27.notes.md` | Scaffolder record: design/spec reconciliation, conventions, source stamps, check results, published-defect note |
| `research/plan-complex-analysis-track.md` L3832–3875 | The pair's prose design (12-item A table, companion paragraph, source strategy, forward references) |
| `research/plan-complex-analysis-track.md` L4460–4466 (harvest legend), L4563–4568, L4590–4596, L4742–4776, L5798–5804 | The plan's *normative* canonical-coverage harvest rows and reserved B example ids that name this pair |
| `research/plan-spec.json` orders 845/846; `research/frontier-37-owner-30-scope-ledger.json`; `research/frontier-37-owner-30-planning-notes.md` (batch 27 row) | Plan reconciliation; the design reference the run itself records for this pair |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### elliptic-functions-and-complex-tori`, VERDICT: no-drift); `research/frontier-37-owner-30-batch-27.cross-batch-dependencies.json` (`[]`) | Step-1 verdict; no cross-batch supplier or consumer edge |
| `research/published-consumer-supplier-ledger.md` L12274–12289 | The pair has zero direct published consumers and zero transitive published impact |
| Independent re-fetch of the three cited sources | McMullen 213a PDF: 768,782 B, sha256-16 `60f8ccafc4084b83` — matches the coverage stamp exactly. Milne MF PDF: 1,010,364 B, `977f06a4e838c43c` — matches exactly. DLMF §23.2: 161,433 B matches, all of 23.2.1–23.2.17 present; the byte hash is **not** reproducible (two consecutive fetches differ; DLMF serves variable bytes at identical length), so the recorded `c4799cff40944291` stamp cannot be re-confirmed byte-for-byte today |
| Full text read for scope: McMullen 213a Ch. 5 §5.1 pp. 79–92 (Theorems 5.1–5.25, including the addition-law, rectangular-case and conic/singly-periodic passages) and Stein–Shakarchi Ch. 8 §4.5 pp. 245–247 (PDF pp. 263–265) | Content of the harvest rows below, read in full rather than inferred from headings; the plan cites a later McMullen edition (see uncertainty) |

## What is complete

Against the pair's own design section the scaffold is faithful:

- All 12 designed A ids are present with the designed kinds, in design order
  (Lattice/torus; quotient surface; elliptic functions; divisor laws; ℘; normal
  convergence/periodicity; differential equation; addition formula; function field;
  ζ/σ; discriminant; cubic isomorphism — design L3838–3851).
- The seven companion topics named at design L3853–3857 are exactly the seven B items.
- The two added A items are genuine local suppliers: the degree-two/half-period lemma
  feeds the branch-point, field, addition and discriminant arguments, and the ζ/σ
  theorem discharges the quasi-period claims the design attaches to the ζ/σ definition
  ("with their quasi-periods stated explicitly"). Both are consumed in-run.
- `requires` matches the design and plan-spec; all seven prerequisite pages are on
  disk with `status: published` (spot-checked file by file).
- Coverage: `coverage-checklist --require-destination` exits 0 (43 rows, 0 errors,
  0 warnings); every row of the three read sources carries a disposition. The
  deferrals (Milne 3.1(c) Abel sums, Milne Thm 3.8, Milne 3.3–3.5/3.12-converse/3.13,
  McMullen 5.7 and 5.21) name planned destinations and are coherent with the plan's
  `D`/`I(CA-RS-2, CA-MF-1)` harvest rows.
- Mechanical state at review time: `manifest-deps` 0 errors; `item-dependency-levels`
  778 items across 60 pages clean; `step1-decisions check` 778/778 ready, closed;
  `fwdcheck` no open forward references.

So the scaffold realizes the pair's item-level design. The insufficiency below is
against the plan's **normative harvest**, which promises results and companion
examples to this pair that the scaffold does not contain.

## Findings — harvest rows assigned to this pair that are not built

1. **Cubic addition/group law is missing from A.**
   Plan L4765: `§5.2 "Cubic curves and the addition law" → I(CA-EF-1)`. In the
   edition the batch read (2010, pp. 89–90) this is McMullen Theorem 5.16 (any line
   meets E in {a,b,c} with a+b+c=0) and Corollaries 5.17–5.20 (negation (x,y)↦(x,−y);
   chord/tangent construction of a+b and 2a). Milne Ch. 3, which the batch also read,
   states the companion clause "The addition formula shows that the map in the
   proposition is a homomorphism" (p. 47, immediately before Prop 3.13), i.e. the
   uniformization is a group homomorphism. No item of the pair states any of this:
   `thm-complex-torus-weierstrass-cubic-isomorphism` is a biholomorphism only, and
   `thm-field-...-generated-by-p-and-p-prime` says explicitly "no Riemann–Roch or
   group law is imported". The coverage row "Theorems 5.16 and Corollaries 5.17–5.20:
   chord/tangent and duplication law — `inline` in `ex-weierstrass-addition-and-duplication`"
   overstates the evidence: that B item contains only the analytic duplication
   ℘(2z)=−2℘(z)+¼(℘″/℘′)² and ℘″=6℘²−g₂/2, with no line–cubic intersection, no group
   law and no group isomorphism. This is both an omission and an inaccurate coverage row.

2. **Inverse elliptic integral / rectangular real case is missing from B.**
   Plan L4594–4596: Stein–Shakarchi Ch. 8 §4.5 "Return to elliptic integrals" →
   `B(CA-EF-1)`; plan L4765–4766: McMullen `§5.3 "The rectangular case"` →
   `B(CA-EF-1)`. Read in the sources: for a rectangular lattice α∈ℝ₊, β∈iℝ₊,
   ℘ is real exactly on the lines through ½Λ and ℘|_S maps the rectangle
   conformally to a half-plane; any branch of ℘⁻¹ is an elliptic integral
   ∫dζ/√(4ζ³−g₂ζ−g₃), and the periods are the corresponding real integrals
   (McMullen Thms 5.11–5.14, pp. 85–88); Stein–Shakarchi's §4.5 does the same for
   the rectangle map and recovers a doubly periodic inverse (Jacobi's sn, periods
   4K and 2iK′). The batch coverage declines Theorems 5.11–5.14 as `out-of-scope`
   with the reason "not prerequisites for the stated torus/cubic isomorphism or
   function-field theorem" — a reason about A-side necessity, which does not
   discharge the harvest's companion-example directive to B. No B item covers any
   of this (the square/hexagonal and half-period examples are adjacent but do not
   state the reality locus, conformal rectangle map, inverse branch or period
   integrals).

3. **Rank-one singly-periodic/conic comparison is missing from B.**
   Plan L4766–4767: McMullen §5.4 "Aside: Conics and singly-periodic functions" →
   `B(CA-EF-1)` "as the rank-one comparison". Source text (read edition §5.2,
   pp. 91–92): π cot πz uniformizes C/ℤ onto a conic minus two points, with
   −P′=P²+π², and ℤ is the period analogue of Λ. This content lies outside the
   batch's declared read range (McMullen §5.1, pp. 79–90) and has no coverage row
   and no B counterpart.

4. **Canonical basis is missing from B.**
   Plan L4563–4568: Ahlfors Ch. 7 headings "The Period Module," "Unimodular
   Transformations," "The Canonical Basis," … → `I(CA-EF-1)` with the explicit
   parenthetical "canonical basis → companion". The B item
   `ex-oriented-lattice-bases-and-sl2z` covers only oriented bases and the SL₂(ℤ)
   relation; no example states the existence of a canonical/reduced basis with
   τ=ω₂/ω₁ in the standard region. (I did not read Ahlfors; I cite the plan's own
   heading list. This content also has a natural alternative home in CA-MF-1's
   `thm-standard-fundamental-domain-for-the-modular-group`, so re-disposition is a
   live option for the owner — see below.)

The plan contradicts itself on this pair, which is why the owner's decision is
required rather than mechanical: the design's companion paragraph (L3853–3857) and
the reserved B id list (L5798–5804) each enumerate exactly the seven scaffolded
companion topics and contain none of items 2–4, and the design's A table has no
group-law row. Both artifacts are from the same subjects-01 enrichment (git:
`b7475ddef`, 2026-08-14). The harvest rows above are nevertheless marked
"normative" in the plan (L4460).

## Role in the library

CA-EF-1 is the analytic elliptic-function pair of the complex-analysis track. Its
only planned consumers are its own B page and `level-one-modular-forms-and-the-j-invariant`
(CA-MF-1, plan-spec `requires`); batch 27 declares no cross-batch dependencies and
the published ledger records zero direct published consumers. Nothing in the run
consumes the missing results, so the gap is one of promised subject coverage, not
of a broken in-run edge — but CA-EF-1 is also the only page in the library planned
to carry the elliptic-curve/elliptic-integral side of this subject (no plan-spec page
owns a cubic group law; the AG track carries only the genus-one embedding).

## Checks run

- `coverage-checklist --require-destination` on batch 27: 43 rows, 0 errors, exit 0.
- `manifest-deps` on batch 27: 21 items, 0 errors.
- `fwdcheck` on batch 27: no open forward references.
- `item-dependency-levels check --run`: 778 items / 60 pages, exit 0.
- `step1-decisions check --run`: 778/778 ready, closed, exit 0.
- Source stamps: McMullen and Milne re-fetches byte-identical to the coverage
  stamps; DLMF length-identical but byte-hash not reproducible (see evidence table).
- Prerequisite publication status: all seven A-page `requires` pages verified
  `status: published` on disk.

## Judgment

**Insufficient for the plan's harvest scope.** The pair's own design table and
companion list are fully and faithfully scaffolded, and the sources read for it are
stamped and completely dispositioned; but the plan's normative harvest assigns this
pair (a) the cubic addition/group law on A, and (b) the inverse-elliptic-integral /
rectangular real-case example, the rank-one comparison, and the canonical-basis
example on B, and none of these is present. One coverage row ("inline" for
Theorems 5.16–5.20) records coverage the claiming item does not contain.

Recommended owner action (scope only; the owner chooses):

- **Enrich**, minimally: one A theorem (line meets the cubic in three points summing
  to zero; the uniformization is a group isomorphism; chord/tangent construction —
  provable in-run from `thm-elliptic-function-divisor-laws` and
  `thm-complex-torus-weierstrass-cubic-isomorphism` in the McMullen 5.16 style), and
  one or two B examples (rectangular real case with the inverse elliptic integral and
  period integrals; optionally the rank-one π cot πz comparison and the canonical
  basis). All suppliers already exist in the manifest or are published.
- **Or re-disposition and `proceed`**: move the canonical-basis row to CA-MF-1's
  standard-fundamental-domain item, home the elliptic-integral/rectangular material
  explicitly (e.g. the conformal-mapping pages or CA-RS-3 for periods) or declare it
  out of the pair's subject, and record the amended dispositions so plan and
  scaffold agree.
- No pair merger applies: no sibling pair in this run or in plan-spec carries this
  content, and merging CA-MF-1 into this pair would move a future page and expand
  the frontier.

## Unresolved uncertainty (stated honestly)

- The plan's harvest rows cite the December 2025 McMullen 213a numbering (§5.2
  "Cubic curves and the addition law", §5.3 "The rectangular case", §5.4 "conics
  aside", §5.5 "Moduli spaces"). I did not read that edition. I verified the content
  mapping by reading the 2010 edition the batch actually used and whose stamp I
  reproduced; the correspondences (addition law §5.1 subsection, pp. 89–90;
  rectangular case Thms 5.11–5.14, pp. 85–88; conics §5.2, pp. 91–92) are exact on
  the material quoted above.
- I did not read Ahlfors; finding 4 rests on the plan's own heading list and the
  scaffold's B statements.
- The DLMF stamp cannot be re-confirmed byte-for-byte (variable server bytes), though
  the section content is present and complete; this affects evidence reproduction,
  not the scope judgment.
- Items 1–4 are scope findings only. Whether the existing strategies for the
  scaffolded items are correct is Step 3b's and the later review stages' question,
  not mine.
