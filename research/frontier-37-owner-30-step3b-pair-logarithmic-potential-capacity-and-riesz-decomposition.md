# Step 3b dispatch report — `logarithmic-potential-capacity-and-riesz-decomposition`

- Run `frontier-37-owner-30`, role `alpha-high`, label
  `step3b-pair-logarithmic-potential-capacity-and-riesz-decomposition-0ee412cc6b2a60fa`.
- Pair: A `logarithmic-potential-capacity-and-riesz-decomposition` (order 833) /
  B `...-examples` (order 834), batch 24, category `complex-analysis`.
- Inventory: **32 items** — 24 A contracts and 8 B contracts — plus both library
  pages. `def-support-of-a-borel-measure` is the single genuinely new ID
  (absent from the immutable pre-author baseline in both `items` and
  `existing_item_files`); the other 31 IDs are the scaffold's immutable-baseline
  batch-24 IDs. Report written 2026-10-01 UTC; all checks rerun against the
  final bytes.

Artifacts: `research/frontier-37-owner-30-batch-24.pages.json` (deps and
`dependency_level` refreshed), `...batch-24.proof-contracts.json`,
`...batch-24.notes.md` (Step 3b checkpoint), both
`library/complex-analysis/logarithmic-potential-capacity-and-riesz-decomposition{,-examples}.md`,
`items/*.md` for all 32 IDs, and 29 current item receipts
`research/frontier-37-owner-30-step3b-review-<id>.json`.

## Scope inputs read

- `CLAUDE.md`, `SCHEMA.md`, the generated dispatch task, the batch coverage.
- Step 3a review `research/frontier-37-owner-30-step3a-review-logarithmic-potential-capacity-and-riesz-decomposition.json`
  (decision `insufficient`: the design harvest assigns Saff §1's Chebyshev
  constant and Theorem 1.18 to this pair and the scaffold stopped at
  Theorem 1.12) and the pair report
  `research/frontier-37-owner-30-step3a-pair-logarithmic-potential-capacity-and-riesz-decomposition.md`
  (F1 route: Proposition 1.13, monic extremal problem, Lemma 1.14, Examples
  1.15–1.17, Theorem 1.18(a)–(d)).
- Owner scope receipt
  `research/frontier-37-owner-30-step3a-owner-logarithmic-potential-capacity-and-riesz-decomposition.json`:
  decision `proceed`, current scope hash
  `c031690887fab847b00cd337673b9c30c325ea2ec6963de8d9bd4b092ddbac5e`
  (rechecked live; scope is closed for the current manifest).
- Owner authoring direction
  `research/frontier-37-owner-30-owner-authoring-direction.md`
  (sha256 `3e508cea3e30028e8180b1b9d3754f943556accfd235335e438f013e1aec3a3b`,
  recomputed before writing).
- Read-only helper report
  `research/frontier-37-owner-30-step3b-repair-logarithmic-potential.md`:
  domination contact-set defect, Frostman full-mass/`[F1]` defects, strict
  positivity edge cases, `Ω=ℂ` edge, zero-mass/`diam∅` edges, and the two
  missing-item routes.
- `research/frontier-37-owner-30-pre-splice-plan-findings.json`: **no finding
  names this pair** (grep for every owned ID: 0 hits).
- Saff arXiv:1010.3760 §1 pp. 168–178 (including Prop 1.13, Lemma 1.14,
  Examples 1.15–1.17, Theorem 1.18 and its proof), Khoruzhenko §§3,5, Kuehn
  §2.3, Frerick–Müller–Thomaser Thm 1.1/Rem 3.3, Guedj–Zeriahi §1.1, and the
  Bloom–Levenberg §5 context — all read in the earlier authoring sessions; the
  quotations used by the contracts were machine-verified against the current
  supplier sections by the strict contract check.

## Conventions fixed for the pair

`ℂ ≅ ℝ²`; `k(z,w)=log(1/|z−w|)` with diagonal value `+∞` (not removable);
`U^μ(z)=∫k dμ∈(−∞,+∞]`, `p_μ=−U^μ∈[−∞,+∞)` subharmonic with
`Δp_μ=2πμ`; `I(μ)` via the shifted nonnegative kernel `k_R=k+log R`,
`R>diam(supp μ)`, with explicit zero-measure clauses; Riesz measure
`μ_u=(2π)^{-1}Δu`; `V_K=inf_{P(K)}I`, `cap(K)=e^{−V_K}`, `cap(∅)=0`.
AC / DC / AC_ω are declared in the Statement and contract of every item that
uses one.

## Authoring order and current decisions

Order = recomputed `dependency_level`, ties by page then item ID. Levels were
recomputed from the final dep graph after every change and are verified by
`item-dependency-levels` (zero batch-24 errors). Decisions are recorded
receipts, not verdicts of the later independent audits.

| # | lvl | item | page | status | decision |
|---|---|---|---|---|---|
| 1 | 0 | def-support-of-a-borel-measure | A | authored/registered | engine certification (addition class) |
| 2 | 0 | def-logarithmic-potential-and-energy | A | authored, zero-mass edge repaired | repaired |
| 3 | 0 | def-chebyshev-constant-compact-set | A | authored | accept (existing current receipt) |
| 4 | 0 | def-riesz-measure-subharmonic-function | A | authored | accept |
| 5 | 1 | def-logarithmic-capacity-compact-set | A | authored | accept |
| 6 | 1 | thm-logarithmic-energy-well-defined-and-lower-semicontinuous | A | authored | accept |
| 7 | 1 | lem-logarithmic-energy-strict-positivity-for-zero-mass-charges | A | repaired (M=0, density, carrier) | repaired |
| 8 | 1 | lem-logarithmic-potential-maximum-principle | A | repaired (μ≠0 kept) | repaired |
| 9 | 1 | thm-riesz-measure-is-positive-radon | A | repaired (Ω=ℂ edge) | repaired |
| 10 | 1 | lem-logarithmic-potential-distributional-laplacian | A | repaired (zero measure) | repaired |
| 11 | 1 | lem-chebyshev-constant-is-submultiplicative-root-limit | A | authored | accept (existing current receipt) |
| 12 | 2 | thm-equilibrium-measure-existence-and-uniqueness | A | repaired (averaging uniqueness) | repaired |
| 13 | 2 | def-polar-set-and-quasi-everywhere | A | authored | accept |
| 14 | 2 | thm-riesz-decomposition-subharmonic-plane | A | repaired (step 9.1→3.2, Radon competitor) | repaired |
| 15 | 2 | thm-principle-of-descent-and-domination | A | repaired + external input flagged | **escalate** |
| 16 | 2 | def-fekete-points-and-transfinite-diameter | A | authored | accept |
| 17 | 2 | ex-cantor-sets-with-positive-and-zero-logarithmic-capacity | B | repaired (remark ref) | repaired |
| 18 | 2 | ex-riesz-measure-of-log-modulus-is-zero-divisor | B | authored | accept |
| 19 | 3 | lem-compact-polar-sets-and-subharmonic-minus-infinity-loci | A | repaired (remark ref) | repaired |
| 20 | 3 | def-green-function-with-pole-at-infinity | A | authored | accept |
| 21 | 3 | lem-fekete-diameters-decrease | A | authored | accept |
| 22 | 3 | ex-logarithmic-capacity-of-disc-and-equilibrium-circle | B | authored | accept |
| 23 | 3 | ex-finite-and-countable-sets-are-logarithmically-polar | B | authored | accept |
| 24 | 4 | thm-frostman-equilibrium-theorem | A | repaired (m=1, shifted kernel, union) | repaired |
| 25 | 4 | ex-logarithmic-capacity-of-a-real-interval | B | authored | accept |
| 26 | 5 | prop-reciprocity-inequality-for-logarithmic-potential | A | authored | accept |
| 27 | 5 | thm-green-function-from-equilibrium-potential | A | authored (Evans-barrier uniqueness) | accept |
| 28 | 5 | ex-chebyshev-extremal-nodes-and-arcsine-measure | B | authored | accept |
| 29 | 6 | lem-monic-polynomial-capacity-lower-bound | A | authored | accept |
| 30 | 6 | ex-green-function-of-a-circular-conductor | B | authored | accept |
| 31 | 7 | thm-logarithmic-capacity-equals-transfinite-diameter | A | authored | accept |
| 32 | 8 | ex-chebyshev-extremal-polynomials-and-capacity | B | authored | accept |

Receipt totals for the 31 ordinary IDs: 10 `repaired`, 18 newly recorded
`accept` receipts plus the two already-current Chebyshev `accept` receipts
(20 accept in all), 1 `escalate`, plus the one addition outside the receipt
loop. The escalate receipt was recorded last; no later receipt for that item
was attempted.

## Owner-direction obligations — disposition

- *Domination 2.1/3.1/5.1 falsely assert strict comparison sets of usc
  functions are open.* Removed. `A_ε={u+ε>v}` is now correctly Borel (rational
  union), step 3.1 uses the Borel contact-set identity, and step 6.1 recovers
  pointwise representative equality by the circle-mean/upper-semicontinuity
  argument of the new step 1.3.
- *Finite energy must give `p_μ` finite μ-a.e.* Done inline (Tonelli on the
  nonnegative shifted kernel) in step 1.2 of the domination item and in the
  definition's finiteness remarks; no pointwise subtraction at common `−∞`.
- *Keep the nonzero-mass hypothesis.* Kept in
  `lem-logarithmic-potential-maximum-principle` (Statement) and in domination
  (b) `μ(ℂ)>0`; the counterexample `μ=ν=0, c<0` is stated.
- *Repair the malformed 4.1 mass display.* Done: the mass-at-infinity
  computation is step 2.2, correctly parenthesised, using a radial cutoff and
  integration by parts.
- *Frostman 4.1 `μ(B)=1` does not concentrate μ at `x₀`.* Replaced by the
  contradiction `V_K=∫_{K∩B}U^μ dμ ≥ m(V_K+η)`; the `+∞` potential case is
  covered by the choice of η.
- *Frostman [F1]/2.1 signed-kernel monotonicity is false.* Replaced by
  shifted-kernel energy bounds on a common compact carrier plus mixed-energy
  finiteness; no pointwise monotonicity of `U^σ` is asserted.
- *Equilibrium uniqueness must use
  `I((μ+ν)/2)=I(μ)/2+I(ν)/2−I(μ−ν)/4`.* Done, with finite mixed energy from
  the strict-positivity lemma; the remark step references were corrected.
- *All ten missing items and both pages.* All 32 items and both pages are
  authored; all promised claims preserved (Fekete weak convergence, exterior
  compact-uniform limit, Chebyshev constant, `cap=τ=cheb`, Chebyshev examples).
- *The three owner-recertified A items.* `lem-compact-polar-…` is fully
  authored on the Evans route (compact iff plus specified `F_σ` union);
  `thm-green-function-from-equilibrium-potential` proves existence,
  positivity, harmonicity, far-field constant, local boundedness and
  quasi-everywhere boundary limit, and uniqueness via the Evans barrier
  `Q=U^σ+m_σ g+c` and the maximum principle on `w−AQ`;
  `thm-principle-of-descent-and-domination` is repaired but **escalated** (below).

## Open escalation (owner-held)

- Consumer: `thm-principle-of-descent-and-domination` (A, level 2). Consuming
  step: step 3.1 `1_{A_ε}Δ(u+ε)=1_{A_ε}Δ max(u+ε,v)`, used again in step 6.1.
- Supplier: the Borel contact-set identity of Guedj–Zeriahi, §1.1 identity (1)
  (PDF p. 3; attributed there to Bedford–Taylor; equivalent one-dimensional
  forms in Bedford–Taylor 1988 Lemma 6.5, Bloom–Levenberg Prop. 5.9, Saff
  Thm 2.8 context). The source states the identity for **bounded**
  plurisubharmonic functions; the passage to the unbounded pair `(u+ε, v)`
  (locally bounded above, `−∞` off a polar set), and the source papers' unstated
  choice axioms, are not covered by the material read.
- Exact gap: a proof (or a cited theorem with the needed hypotheses) of the
  contact-set identity for the unbounded case at the pair's DC axiom cost, or a
  substitute proof of the strict-contact Riesz-measure comparison.
- The theorem has **no in-run consumer** (grep over the batch manifests,
  contracts and the other 31 item files: 0 citations), so the escalation
  blocks no dependent item. Any future consumer must be wired explicitly.
- Recorded decision: `escalate` (confidence 1, 17 examined dependency IDs).
  The owner alone resolves it.

## Local supplier added

`def-support-of-a-borel-measure` (A, level 0, choice-free, authored before its
six consumers): support as the complement of the union of open μ-null sets,
with the equivalent ball characterisation, "carried by", and the closedness /
smallest-closed-carrier facts. Registered in the batch manifest, coverage and
the batch contract file. It is the only ID absent from the immutable baseline
(`research/frontier-37-owner-30-step3-auditor-baseline.json`: not in `items`,
not in `existing_item_files`), so it is certified by the engine's
`auditor-created-certifications` gate rather than by an ordinary receipt;
running `tools/step3-auditor-items.mjs certify --run frontier-37-owner-30` at
handoff fails on an unrelated run addition (`prop-flat-torus-model-geometry`)
and writes nothing, which is not a batch-24 defect.

## Published-item concerns

No published item is reported as defective by this dispatch. At the authoring
level: `extcheck` exits 0 and mentions no owned ID; every contract citation
quote is verified by `proof-contract --strict` against the current text of the
cited supplier's named section; no owned proof rests on a Recorded result, an
unpublished supplier or an unresolved dependency. Earlier recorded supplier
risks (signed-kernel monotonicity, strict-contact openness, `diam∅`) were
in-run draft defects and are repaired above. Steps 5–8 own further independent
audit; nothing here is asserted beyond author-level readiness.

## Reconciliation left for Step 4

- `research/plan-spec.json` still lists pages 833/834 with no item lists
  (pre-splice, marked `*` by `validate-plan`); the batch manifests are
  authoritative until the splice.
- The Step 1 notes' "Exact shared-plan edits for owner integration" section
  records the required plan-table additions (the four Chebyshev/supplier rows
  and the two B rows) and the extended Fekete/capacity item statement; those
  are plan-side edits for Step 4, not batch-side.
- `validate-plan` reports only pre-existing `redundant-prereq` warnings in
  other pages; none names pages 833/834.
- Manifest `deps` and `dependency_level` were refreshed for this pair only;
  statements in `pages.json` match the authored statements for every repaired
  item (including `μ≠0` in the maximum principle and `μ(ℂ)>0` in domination).
- Shared ledger `research/published-consumer-supplier-ledger.md` and
  `briefs/tasks/frontier-dependency-ledger.md` were not touched; batch 24's
  cross-batch input is `[]`, with no in-run cross-batch edge in either
  direction (verified by comparing every declared dep against all run
  manifests).

## Checks actually run (final bytes)

| check | actual result |
|---|---|
| `precheck.mts` on the 32 explicit item paths | `24 checked, 0 failing — all clean` (8 definition/example files are n/a-by-kind) |
| `rendercheck.mjs` on the 32 items + 2 pages | `OK — 34 file(s)` |
| `proof-contract.mjs ...batch-24.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 32/32 item(s) checked` |
| `content-policy.mjs ...batch-24.pages.json` | `32 scoped item(s), 0 error(s), 0 warning(s)` |
| `manifest-deps.mjs ...batch-24.pages.json` | `32 item(s), 0 normalized, 0 error(s)` |
| `coverage-checklist.mjs ...batch-24.coverage.json --require-destination` | `1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)` |
| `validate-plan.mjs research/plan-spec.json` | exit 0; acyclic and consistent; 367 pages still carry no item list (other batches); redundant-prereq notes only in other pages |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 1; 79 errors, **none** mentioning a batch-24 ID; current levels 0–8 as tabled |
| `extcheck.mjs` | exit 0; no owned ID mentioned |
| `step3-decisions.mjs check --run ... --phase final` | 817 items, 622 accepted, run open; batch-24 open rows are exactly the engine-class addition and the owner escalation |
| `frontier-37-owner-30-batch-24.cross-batch-dependencies.json` | `[]`; independently recomputed: no cross-batch edge in or out |

The previously noted `citation-spread` ("shotgun bracket") warning on the
domination contract no longer exists — the rewritten contract passes `--strict`
with 0 warnings, and the Step 3a review JSON contains no such text (checked).

## Open obligations at handoff

1. Owner resolution of the `thm-principle-of-descent-and-domination`
   escalation (unbounded-PSH contact-set identity, or a substitute).
2. Engine certification of `def-support-of-a-borel-measure` via the
   `auditor-created-certifications` gate after this dispatch's successful
   result; no author-side receipt is appropriate for that class.
3. Run-level items outside this pair: 79 `item-dependency-levels` errors and
   the `certify` blockers in other pairs belong to their owners.
