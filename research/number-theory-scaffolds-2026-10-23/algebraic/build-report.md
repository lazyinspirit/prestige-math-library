# Algebraic number theory scaffold build report

**Snapshot:** 2026-10-23. **Scope:** prose planning, pair/inventory design and
source reconciliation only. This report does not claim any proof was authored,
any planned page exists, or any native workflow/check has passed.

## Owned planning artifacts

- Canonical prose track: `research/plan-algebraic-number-theory-track.md`.
- Proposed canonical-page fragment: `research/number-theory-scaffolds-2026-10-23/algebraic/plan-spec-fragment.json`.
- Proposed item-DAG projection: `research/number-theory-scaffolds-2026-10-23/algebraic/proposed-inventories.json`.
- Researcher source dossiers and extracted full texts: `research/number-theory-scaffolds-2026-10-23/algebraic/r1-*` through `r5-*`.
- Read-only independent audit: `research/number-theory-scaffolds-2026-10-23/algebraic/audit-report.md`.

The canonical `research/plan-spec.json` remains root-owned. No library page,
item, category overview or pathway carrier is part of this work. The prose
track includes a proposed category overview and dependency-ordered pathway
parts, but those are not active library pages until the future build authors
them.

## Current design checkpoint

The owner authorized a new canonical category with slug
`algebraic-number-theory`; the existing published `number-theory` pages remain
suppliers in their present homes. This expansion is coordinated with the
separate `analytic-number-theory` track. Each new A/B plan row will use the
exact category, reciprocal companion links, a B-to-own-A `requires` edge and
empty canonical `items: []`. The separate proposed-inventory file supplies
ordered `{id, kind, title, deps}` rows for the root's temporary combined item
DAG check. That projection is planning metadata only.

Confirmed existing number-field suppliers include the published pages for
number fields/discriminants, prime decomposition/different, decomposition and
Frobenius, Minkowski/class groups, units/S-units, rational p-adic fields,
rational Hilbert symbols and cyclotomic arithmetic. Existing abstract
commutative algebra, group cohomology, algebraic geometry, scheme theory and
complex-analysis items are likewise mapped in the prose track by exact page
and item IDs.

The merged algebraic projection now has 70 A/B pairs (140 pages) and 678
proposed item rows: R1 3 pairs/48 items, R2 14/130, R3 21/167, R4 18/161,
R5 12/141, plus the two builder-owned shared pairs with 31 items. The analytic
projection has 71 pairs (142 pages) and 677 item rows. The combined proposed
projection therefore contains 141 pairs (282 pages) and 1,355 unique item IDs.

A read-only structural scan of both current fragments and their item
inventories found no duplicate IDs, unresolved item dependencies against
published item files/current plan, missing page requirements, companion errors,
page cycles, item-to-page closure gaps, B-page suppliers, open-problem
suppliers, or same-page forward item dependencies. The algebraic Chebotarev
Dirichlet-density result consumes analytic track item
`thm-ray-class-primes-dirichlet-density`. This is a static projection scan,
not the repository's native plan validator.

## Research and integration findings

- Existing ANT suppliers are reused rather than duplicated or rehomed. Choice
  assumptions and exact conventions (for example, the unscaled Minkowski
  embedding) remain binding on future consumers.
- The R2 number-field global-CFT route uses Milne CFT Ch. VII §§4 and 6 and is
  independent of the analytic Chapter VI density route. Algebraic Chebotarev
  Dirichlet density follows CFT and the AN ray-class density item; AN owns
  natural-density and effective prime-counting estimates. The category graph
  is acyclic at this seam.
- R2 read Milne ADT 2e App. A, Yoon's complete article, Stein ANT Ch. 18 §§18.1,
  18.3, MIT 18.785 Fall 2021 Lectures 11 and 25, and Fesenko–Vostokov 2e
  Ch. IV §§1–6. Function-field global reciprocity has an ADT proof, and the
  equal-characteristic local existence theorem now has a full read proof
  source. The planned local item must still reproduce that result. Global
  function-field existence and the nonsplitting-place/first-and-second
  norm-index proof chain remain separate authoring obligations.
  Yoon explicitly imports local CFT from Neukirch, and ADT's local existence
  discussion cites Serre XIV.6. Yoon §3.3.1 Corollary 1 also imports the
  existence of nonsplitting places from Neukirch without proof; this is a
  missing proof input for the Second inequality. R2's source ledger records
  Fesenko–Vostokov as the equal-characteristic local existence proof source;
  that source is no longer an acquisition gate. The final R2 Choice ledger
  distinguishes its direct Tychonoff+AC use in compact-kernel finiteness from
  assumptions inherited through actual suppliers; the Chebotarev counting
  function itself is choice-free.
- R3 supplies an algebraic Jacobian pair because the existing Jacobian items
  are complex analytic. Its 21-pair projection includes the source-backed
  Manin–Peyre, anabelian and dynamics interfaces. It reports full reads of
  Faltings 1983 §§1–7 and the erratum, the Wüstholz–Faltings Siegel proof,
  Kahn 2006 Appendix B/Theorem 3, and Waldschmidt's homogeneous Baker bound.
  The inhomogeneous additive-constant Baker bound remains explicitly
  source/proof-gated; all sources and local proof duties remain item-specific.
- R4's initial Lafforgue-named source was actually Mumford's “Pattern Theory”
  and was excluded. The correct full Lafforgue 2002 paper and 1997 source are
  present. R4 now supplies the site/derived/compact-support/trace/GOS/Deligne
  chain and perfectoid tilting pair; its unharvested proof inputs are listed in
  its source ledger.
- R1 replaced a duplicated Dedekind–Kummer example, added local HNF/SNF
  helpers, corrected the finite-algebra prime decomposition procedure and
  repaired the Lenstra S-unit bound using the required finite prime set. Its
  added pairs cover quadratic orders/Gauss composition (with the ordinary vs
  narrow class distinction) and finite bounded-discriminant field enumeration.
  The latest auditor pass still requires R1 to sharpen the A5 $B^2$ height-bound
  derivation and A8's localization/CRT proof route for relative discriminants;
  those mathematical contracts are not yet closed. The output contract
  distinguishes certified results from unsupported complexity or
  principality claims.
- R5's blocked Rubin download was excluded. The final 12-pair R5 projection
  includes Hilbert–Blumenthal/Deligne–Ribet, classical totally-real Iwasawa,
  relative K-theory, Brumer–Stark, Borel regulators and Beilinson–Bloch–Kato–
  Tamagawa interfaces, including higher Bloch groups and the exact weight-four
  zeta value. The Wiles full-text/proof and publication-version/status limits
  remain explicit.

The independent auditor's current confirmed and pending findings are recorded
in `audit-report.md`; they must be closed or retained as explicit unresolved
obligations in the final report.

## Projection hashes and handoff

SHA-256 hashes for the current merged algebraic planning artifacts:

- `plan-spec-fragment.json`: `9028ed2b75541336a7748820b15fa0c7e049775514bf5e799616c8dc68c6cb9c`
- `proposed-inventories.json`: `cd56130e314ed4a7e0bf7bbbef792deeaf9a452e78a11d61d106d869891f29b3`
- `plan-algebraic-number-theory-track.md`: `5bf1ae75519b038707bfbfb904850853bf5bb2e6a0edd991c4512fde8db7227b`

The latest algebraic projection contains all 70 A/B pairs; the analytic
projection contains 71 pairs. R1's A5/A8 proof-contract corrections are merged
and the auditor's follow-up scan is clean; R1 and R3 source ledgers are frozen.
The independent auditor's final source/contract handoff remains pending. Root
owns the canonical splice:
merge both categories into `research/plan-spec.json`, assign orders after the
current maximum in a global topological order, keep new `items: []` rows empty,
and run native validation on the combined projection.

Root ran one early native proposed-item check on a temporary combined
projection (238 pages/944 items); it failed with 16 errors before the current
repairs and frontier expansions. The canonical plan was unchanged. That failed
receipt remains historical. No current passing native validation, autopilot
build, page/item carrier authoring, commit, publication or push is claimed.

