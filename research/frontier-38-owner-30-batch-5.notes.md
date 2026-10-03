# Frontier 38 owner 30, batch 5: Step 1 construction notes

Owned pair: `calderon-zygmund-decomposition-and-singular-integrals` (A page,
order 458.02605) and `calderon-zygmund-decomposition-and-singular-integrals-examples`
(B page, order 458.02606), both `fourier-analysis`. The binding
`research/frontier-38-owner-30-owner-authoring-direction.md` was read before
construction; its scope rules (exact 30-pair list, local prerequisite
construction on the consuming A/B page, published-content and engine-state
discipline) were followed. No published item, shared plan, engine state or
verdict was edited. This batch has no in-run cross-batch supplier or consumer
edges, so `research/frontier-38-owner-30-batch-5.cross-batch-dependencies.json`
is empty by design; the unified ledger was refreshed with
`tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`.

## Design, plan, and conflicts

- The controlling design is section FR-8 of
  `research/plan-fourier-analysis-track.md` (heading at line 703, id mention at
  line 38): it fixes the A/B inventory, the adopted kernel conventions (annular
  size plus integral Hörmander, with pointwise δ-Hölder as the stronger
  hypothesis), the transfer of PDE-19's ids, and the "hard proof/boundary
  obligations" (λ>0 only, actual zero integrals for the bad parts, L² boundedness
  stated separately, no silent substitution of pointwise kernel regularity, no
  Mihlin endpoint claim).
- The second listed design location, `research/plan-pde-track.md` L1810, is
  inside PDE-19, which *consumes* FR-8: it requires "the generic Calderón-
  Zygmund kernel, decomposition, weak endpoint, interpolation/duality, strict-Lp
  theorem, and endpoint boundaries" from FR-8, and PDE-19's item 3 proves the
  Newtonian Hessian fits that framework. FR-8 controls this page; PDE-19 imposes
  the consumer interface, which the inventory satisfies item-for-item. No
  conflict between the two locations.
- `research/plan-spec.json` carries the pair at orders 458.02605/.02606 with the
  same `requires` list as the design and empty `items` arrays, so the design
  governs the inventory and no plan conflict exists. The `requires` list is
  unchanged: `fourier-multipliers-and-sobolev-characterisations`,
  `hilbert-and-riesz-transforms`, `the-maximal-function-and-lebesgue-differentiation`.
- Recorded design/plan drift, not escalated: FR-8's "Sources read" names TaoA
  note 3 §4 and note 4 §2 and G §§5.2–5.4/W §§3.3–3.9, while the item-level
  closure also needs Kinnunen ch. 1–2 (dyadic cubes at all generations, the
  global decomposition, Marcinkiewicz) and Laugesen ch. 20–21 (Hilbert/Riesz
  spatial representations). The harvest records those additional treatments;
  no design claim is dropped.

## Inventory

31 items: 25 on the A page and 6 on the B page.

- A page: the twenty designed FR-8 ids (items 1–20 of the design table,
  including `cor-hilbert-transform-is-bounded-on-lp` and
  `cor-riesz-transforms-are-bounded-on-lp` relocated from FR-7) plus five
  necessary local prerequisites:
  1. `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two` —
     MT-17's published Marcinkiewicz item is the weak (1,1) + strong
     (∞,∞) form; the CZ proof needs the sublinear weak (1,1) + strong (2,2)
     form with an explicit constant (Kinnunen Thm 2.4, Grafakos Thm 1.3.2).
  2. `def-dyadic-cube-in-rn-all-generations` and
     3. `lem-dyadic-cubes-all-generations-partition-and-nesting` — see the
     published-convention finding below.
  4. `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function` —
     Grafakos Cor 2.1.12 / Williams Thm 2.9 domination step used by Cotlar's
     inequality and by the mollifier term; no published item supplies it.
  5. `lem-holder-cz-kernels-satisfy-hormander-cancellation` — the bridge from
     the pointwise δ-Hölder hypothesis to the integral Hörmander condition of
     the base definition, with the explicit constant
     |S^{n−1}|2^{−δ}δ^{−1}A₂'.
- B page: exactly the six designed leaves (two examples, three counterexamples,
  one Newtonian-kernel example). All six consume A-page or published items
  instead of duplicating proofs.

## Published-convention finding (recorded for the canonical ledger)

- Item `def-dyadic-cube-in-rn` (published, `library/measure-theory/lebesgue-measure-on-euclidean-space.md`)
  defines dyadic cubes only for generations k∈ℕ, i.e. side lengths at most 1,
  and its remark states that bounding the generations below "is what makes the
  maximal-cube selection" of the Whitney item work. The same restriction is
  carried by the published `lem-dyadic-cubes-of-one-generation-partition-rn`
  and `lem-two-dyadic-cubes-are-nested-or-disjoint`.
- Evidence: `items/def-dyadic-cube-in-rn.md` ("For k∈ℕ …"), its Remarks, and
  the two published lemmas just named; contrast Grafakos §5.3.1 p. 355
  (k,m_i∈ℤ) and Kinnunen §1.2 p. 9 (D_k, k∈ℤ), both fetched in full.
- Impact: the Calderón–Zygmund maximal-cube selection at a small height needs
  cubes larger than the unit cube. With k≥0 only, a maximal bad cube can be the
  unit cube of average 1 while 2^nλ≪1, so the "average at most 2^nλ" bound and
  the exact union identity {M_d f>λ}=⋃Q are false. The design's item 3 and every
  downstream item would be unsound against the published convention.
- Local repair (this batch, no published edit): the two new all-generations
  items above, proved by the published generation-k argument with integer
  powers and the integer-part property; `lem-maximal-dyadic-cubes-at-height-lambda`,
  `lem-calderon-zygmund-decomposition-at-height-lambda`,
  `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` and the B-page
  interval example now depend on them.
- Suggested canonical-ledger repair (owner/operator decision, out of this
  batch's write scope): generalise `def-dyadic-cube-in-rn` to k∈ℤ and extend its
  two companion lemmas, or add an all-generations companion on that page; the
  published Whitney use remains valid as the k≥0 subfamily.

## Other recorded findings

- Duplicate published leaves (overlap, not escalated): `items/cex-hilbert-transform-is-not-strong-type-one-one.md`
  and `items/cex-hilbert-transform-does-not-map-linfinity-to-linfinity.md`
  (published 2026-10-02) prove the same endpoint failures as the designed B
  leaves `cex-calderon-zygmund-strong-lone-bound-fails` and
  `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`. The
  designed ids are preserved as commissioned by FR-8; both now depend on the
  published `ex-hilbert-transform-of-an-interval-indicator` and reuse its
  computation instead of re-deriving it. Flagged so Step 3/5 can decide whether
  the pair's B page should instead cross-reference the published leaves.
- Off-support representation gap (closed locally, not escalated): the published
  Riesz/Hilbert items give the L² multiplier definition and the Schwartz-level
  principal-value formula, but no published item states that, for a compactly
  supported L² input, the operator agrees off the support with the kernel
  integral. The two A-page corollaries prove this (skew-adjointness of the
  Hilbert transform / R_j*=−R_j for the Riesz multiplier, then Fubini against
  test functions supported off the input's support); the needed published deps
  were added to their `deps`.
- The attempt-1 manifest (no decisions recorded; dispatch attempt 2 was
  incomplete) was rebuilt in place. The following mathematical repairs were
  made before any record was written:
  1. the dyadic-generation repair above;
  2. `def-maximal-truncated-singular-integral` now defines the doubly truncated
     operator T^{(ε,N)} and T^{**}, with T^*≤T^{**}≤2T^*, matching Grafakos
     (5.3.15)–(5.3.18); the maximal weak (1,1) proof strategy refers to it;
  3. `lem-cz-bad-part-…` now requires b_Q∈L² supported in a dyadic cube and
     cites Tonelli; the 2√n dilation and the geometry |x−c_Q|≥2|y−c_Q| for
     x∉Q* were re-verified;
  4. the "strictly stronger" clause was removed from
     `def-standard-holder-calderon-zygmund-kernel` (only the implication proved
     by the next item is asserted);
  5. `cor-principal-value-truncations-converge-almost-everywhere` is now a
     per-exponent statement with the dense-class convergence as an explicit
     hypothesis — no a.e. convergence is claimed for a general CZ kernel, and
     no identification with the L² operator value is overclaimed;
  6. `lem-calderon-zygmund-lp-range-…` now states its domain
     (L¹+L²) and the weak (1,1) hypothesis on L¹, so it applies verbatim to the
     CZO after the weak (1,1) theorem extends it to L¹;
  7. sign repairs: the Newtonian normalisation is
     Γ=((n−2)σ_{n−1})^{−1}|x|^{2−n} with −ΔΓ=δ₀, and the interval-transform
     logarithm has q→−∞ near 0 and q→+∞ near 1;
  8. missing published deps added where the intended proofs use them (see the
     item `deps`): dilation/reflection measure, weak-type definition, Tonelli,
     Plancherel, Fubini, skew-adjointness, the L¹+L²/H^{1,∞}-adjoint items, and
     the countability/series machinery for the maximal-cube family;
  9. Countable Choice is declared exactly where the proof consumes a
     choice-assuming published item (polar coordinates, differentiation,
     deformation of the good part through the decomposition, mollifier
     approximate identity, Plancherel/density, maximal function). It was removed
     from `lem-maximal-dyadic-cubes-at-height-lambda` and
     `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`,
     whose proofs are canonical selections and layer cake only.

## Dependency verification

- All 31 item ids are unique across the run; every dependency resolves to a
  published item file, an in-run manifest item, or a plan-spec item
  (`tools/manifest-deps.mjs` whole-run run: 546 items, 0 errors).
- All 47 in-run dependency edges of this batch stay inside batch 5; there are no
  in-run cross-batch suppliers, no forward references, and no cycles. Published
  suppliers used: the FR-6, FR-7 and MT-17 pages named in `requires`, plus
  measure-theory/duality/Plancherel items; all are `status: published`.
- The published supplier statements were read and checked against each use
  (hypotheses, direction, conventions): Riesz kernel size/difference/mean-zero
  and the Schwartz principal-value formula; Hilbert signum multiplier and
  isometry; dyadic-cube conventions (finding above); Mihlin symbol convention
  with ⌊n/2⌋+1 derivatives; polar-coordinates normalisation; Newtonian potential
  items. No silent substitution of a stronger kernel hypothesis was found in
  the design route.
- `dependency_level` labels were recomputed after every dependency change by the
  tool's own algorithm (max in-run level + 1); the maximum in this batch is 8
  (`cor-principal-value-truncations-converge-almost-everywhere`). The batch
  contributes no errors to `tools/item-dependency-levels.mjs check`.

## Sources

- A page (7 sources, all fetch-verified): Grafakos (book), Tao 247A notes 3 and
  4, Williams, Kinnunen, Hunter, Laugesen (ch. 20–21, added by this batch for the
  Hilbert/Riesz spatial representations and the 2√d enlargement). B page (5
  sources): Grafakos, Laugesen, Kinnunen, Hunter, Tao 4. Every harvested result
  has an `included`, `inline`, `deferred` or `out-of-scope` disposition, and
  every `included` row names a scaffolded id.
- Fetch stamps were re-verified at construction time; the recorded sha256_16
  values equal the hashes of the independently downloaded full texts
  (Grafakos 38c219d3c9013a85; Tao 3 265e56a519141feb; Tao 4 0c200b34c1c6c625;
  Williams 05c37240004db213; Kinnunen 3e77f01971ffab23; Hunter 0dbade1806f7a1ea;
  Laugesen b1ef00490b91e492). Locators were checked against the fetched
  editions (e.g. Grafakos Theorem 5.3.4/5.3.5 pp. 364–371 and Theorem 6.2.7
  pp. 445–450; Kinnunen Theorems 1.12/1.16/2.4 pp. 12–16/27–29; Williams
  Theorem 2.7/2.9 pp. 4–5 and Theorems 3.8/3.13 pp. 11–13; Laugesen
  Propositions 20.2/20.3 pp. 114–116).

## Checks actually run (2026-10-03)

| Check | Command | Result |
|---|---|---|
| Coverage | `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-5.coverage.json --require-destination` | 2 page(s), 78 harvested result(s), 0 errors, 0 warnings |
| Manifest deps (batch) | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-5.pages.json` | 31 items, 0 errors |
| Manifest deps (run) | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json` | 546 items, 0 errors |
| Policy (batch) | `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-5.pages.json` | 31 scoped items, 0 errors |
| Policy (run) | `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json` | 546 scoped items, 0 errors |
| Readiness (batch) | `node tools/step1-decisions.mjs check --run frontier-38-owner-30` | 31/31 batch-5 items closed; run-wide exit 1 only for other batches' open items |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | no batch-5 errors; run-wide exit 1 for other batches' empty inventories/mis-labels |
| Scope integrity | `node tools/manifest-integrity.mjs --run frontier-38-owner-30` | 60 pages owed, 60 in manifests, no scope drift |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (plan still has pages without item lists, expected before splice) |
| External refs | `node tools/extcheck.mjs` | OK |
| Forward refs | `node tools/fwdcheck.mjs --quiet` | OK |
| Source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-5.coverage.json` | 12/12 fetch-verified, 12/12 resolved |
| URL liveness | `node tools/url-sweep.mjs --coverage … --out /tmp/b5-url-liveness.json --recover --fail-on-dead` | 7/7 live, 0 failed |
| Source backing | `node tools/source-backing.mjs --coverage … --liveness /tmp/b5-url-liveness.json` | 32 authored results, all backed |
| Dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` | refreshed; batch 5 reviewed, no batch-5 edges |

## Unresolved findings / escalations

None blocking. Open items for the owner or later steps, recorded rather than
escalated because local closure is complete:

1. the all-generations dyadic-cube finding above (published-convention repair
   suggestion for the canonical ledger);
2. the overlap of the two designed B counterexamples with the published FR-7
   counterexamples (kept as commissioned; a Step-3/5 scope call);
3. run-wide readiness and dependency-level gates remain red because other
   batches are still scaffolding; neither failure names a batch-5 item, and
   batch 5's own decisions, labels and coverage are current.
