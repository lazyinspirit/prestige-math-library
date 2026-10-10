# Batch 33 notes — `em-vacuum-waves-and-polarization` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **345**, B page order **346**, category
`classical-electromagnetism`, library `physics`. Final inventory: **7 A items + 4 B items**,
all eleven recorded `ready` with current dependency hashes. Only the batch manifest, the
batch coverage file, the consumer-batch cross-dependency input, the eleven `step1-*`
readiness records, the tool-refreshed unified ledger and this note were written. No item
file, page, shared plan, published item, engine state or verdict was edited.

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
(this page: **no-drift**), the design section `research/plan-classical-electromagnetism-track.md`
L2001–L2034, and the design sources `proposed-inventory.json` (items
`def-em-plane-wave-definition`, `pthm-em-vacuum-wave-equation`, `pthm-em-plane-wave-maxwell`,
`def-em-polarization-definition`, `pthm-em-general-wave-ivp`, `pthm-em-wave-energy-average`,
`pthm-em-classical-interference`, `ex-em-polarization-examples`, `ex-em-plane-wave-infinite-energy`,
`texp-em-radiation-pressure-example`, `ex-em-two-beam-fringes`), `definition-contracts.md`
(`#def-em-plane-wave-definition`, `#def-em-polarization-definition`), `core-conditional-proofs.md`
(K7), `completed-expansion-arguments.md` (W4), `worked-example-verifications.md` (X6), the
drift mapping `sr-to-em-mapping.json` (S6), and the current native manifests and
`research/plan-spec.json`.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L2001 ff.) and the current
   `research/plan-spec.json` entries 345/346 agree exactly on page ids, kind, orders,
   category, library `physics`, titles, companion links and declared `requires`
   (`em-energy-momentum-and-angular-balance`, `em-maxwell-integral-and-constraints`,
   `em-wave-equation-prerequisites`, `sr-causality-and-signals`). Verified mechanically
   against `plan-spec.json`; the plan's item arrays are empty by construction and the
   batch manifest is the scaffold record. `validate-plan` reports no error and no
   `redundant-prereq` warning naming this page.
2. **A/B counts preserved.** Design A=7 / B=4; scaffolded A=7 / B=4; cap 100 each.
3. **Recorded title/claim-label conflict (not a scope reduction).** The design's title for
   `pthm-em-general-wave-ivp` is "Constrained **finite-energy** Maxwell initial-value
   theory", but the completed research argument W4 (and the drift mapping) proves the
   constrained *smooth* whole-space Cauchy theory for data of arbitrary growth — no
   finite-energy hypothesis, and the closure contains explicit non-decaying solutions of
   infinite total energy (batch 17's example (iii); this batch's
   `ex-em-plane-wave-infinite-energy`). Demanding a finite-energy hypothesis would
   *weaken* the claim, and no finite-energy conclusion is provable from the available
   suppliers, so the scaffolded title is "Constrained smooth vacuum Maxwell initial-value
   theory with finite propagation" and clause (e) records that no finite-total-energy
   conclusion is drawn. Every promised claim (Cauchy existence, uniqueness, finite
   propagation, compact support and the cone reading) is preserved in full. Recorded, not
   silent.
4. **Design dep arrays kept as the core; only actually-used suppliers added.** Each item
   adds definitions/operators/identities that its stated claim, well-definedness or proof
   genuinely uses (per-item lists below). One design edge was checked and **retained with
   a genuine use**: `pthm-em-plane-wave-maxwell` consumers the wave-equation theorem both
   for the wave-equation property of its solutions and, in the necessity direction, for
   the dispersion relation; `pthm-em-general-wave-ivp` consumes
   `lem-em-spherical-mean-wave-identity` through the explicit spherical-mean
   representation displayed in its clause (a).
5. **`pthm-em-general-wave-ivp` dep additions.** The design's five deps are kept; the
   scaffold adds the curl-curl corollary (used in the residual initial-derivative
   computations), the operator definitions, `thm-algebra-of-derivatives`,
   `thm-heine-borel-rn` (radius of the compact support ball), `def-countable-choice`
   (AC_omega declaration) and the two SR cone items (clause (c)'s model-language
   reading), matching the reviewed `sr-to-em-mapping.json` S6 consumer entry whose exact
   use is "only causal reachability/closed cone; W1–W4 independently prove PDE finite
   propagation".
6. **No covariant or material content.** The `pthm-em-vacuum-wave-equation` converse
   warning is preserved as an explicit scope clause with a witness; no Fourier-packet
   theory (Tong's "general wave" Fourier decomposition is disposed as deferred/out of
   scope on this page — the general-packet Cauchy theory is the constrained IVP item,
   and no all-solutions Fourier completeness claim is made); no material response, no
   interfaces and no conductor reflection (Tong §4.3.3 deferred to
   `em-wave-interfaces-and-conductors`), and no empirical claims anywhere.

## Inventory decisions (recorded, not silent)

- `def-em-plane-wave-definition` (definition, physics): $k\ne0$, $\omega>0$, $e,b\in\mathbb C^3$,
  $E=\operatorname{Re}(e\,e^{i(k\cdot x-\omega t)})$, $B=\operatorname{Re}(b\,e^{i(k\cdot x-\omega t)})$
  on the whole-space region $\Omega=\mathbb R^3$, $I=\mathbb R$; C^∞ encoding, units for
  $k,\omega,e,b$, phase sign ($e^{-i\omega t}$), periodicity, the zero/nonzero criterion and
  a status clause asserting no field equation, dispersion or polarisation. Deps:
  `def-em-complex-plane-wave` (batch 13), `def-em-fields`, `def-em-si-conventions`,
  `def-em-lab-geometry` (batch 23, formulation prerequisites), `def-euclidean-inner-product`.
- `pthm-em-vacuum-wave-equation` (physics-theorem): source-free region $W$, jointly C²
  fields, smooth branch with $\rho=J=0$ ⇒ $\Delta E=c^{-2}\partial_t^2E$,
  $\Delta B=c^{-2}\partial_t^2B$ componentwise; hypotheses actually used
  (Clairaut, curl-curl identity, Gauss constraints) stated; no converse, with witness
  $E(x)=(x_1,0,0)$, $B=0$; weak branch and singular sources excluded. Deps: the postulate,
  the curl-curl corollary, the divergence/curl, Laplacian and partial-derivative
  definitions, Clairaut, and the field/source/region/units definitions.
- `pthm-em-plane-wave-maxwell` (physics-theorem): (a) the four amplitude equations
  $k\cdot e=0$, $k\cdot b=0$, $k\times e=\omega b$, $k\times b=-(\omega/c^2)e$ hold iff the pair
  is in the source-free smooth Maxwell branch on $\mathbb R^3\times\mathbb R$; (b) nonzero
  solutions iff $|k|=\omega/c$, then $b=k\times e/\omega$ with $e$ transverse (complex
  two-dimensional family); (c) transversality, $E\cdot B=0$ and $B=\hat k\times E/c$
  pointwise, each component solving the wave equation of the previous item; (d) scope
  exclusions. Deps add the cross-product/inner-product items and the real-linearity/chain-rule
  calculus for the oscillatory derivatives.
- `def-em-polarization-definition` (definition, physics): trace $a\cos\theta-d\sin\theta$ in
  $k^\perp$, linear/circular/elliptical classification, the orthogonal-axes semiaxis
  statement and the general principal-axis caveat, and the helicity sign
  $H=\langle a\times d,\hat k\rangle$ with the right-handed convention $H<0$ (matching the
  cited source's $\beta=\hat k\times\alpha$ under $a=\alpha$, $d=-\beta$) and an explicit
  naming caveat. Consumes `pthm-em-plane-wave-maxwell` only for the transverse amplitude
  conditions.
- `pthm-em-general-wave-ivp` (physics-theorem, AC_omega declared): smooth divergence-free
  data of arbitrary growth; existence with the explicit componentwise spherical-mean
  formula; uniqueness among jointly C² solutions; domain of dependence from agreement of
  $E_0,B_0$ **and their curls** on the closed $c(t_*-t_0)$-ball (the exact scalar hypothesis
  transported); closed-backward-cone and model-causal reading via the SR items;
  compact-support propagation. No finite-energy or decay conclusion.
- `pthm-em-wave-energy-average` (physics-theorem): $\langle u\rangle=\varepsilon_0|e|^2/2$,
  $\langle S\rangle=(\varepsilon_0c/2)|e|^2\hat k$, $I=|\langle S\rangle|$,
  $\langle g\rangle=\langle S\rangle/c^2$ and the tensor identity
  $\langle\sigma_{ij}\rangle=-\langle u\rangle\hat k_i\hat k_j$ (equivalently
  $\langle\Pi_{ij}\rangle=\langle u\rangle\hat k_i\hat k_j$) for every complex transverse
  amplitude, with the balance reading and scope. Only the *local* clauses/interpretation of
  the two balance theorems are consumed, so their AC_omega fixed-volume conventions are not
  inherited (recorded in the cross-batch rows).
- `pthm-em-classical-interference` (physics-theorem): superposition (via
  `pthm-em-linear-superposition`), the single-phase rewriting with $\alpha(x),\beta(x)$ and
  $\delta(x)=(k_2-k_1)\cdot x$, the averaged energy density with the cross-term weight
  $W(x)=e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2)$ times
  $e^{i\delta(x)}$, the averaged Poynting vector, the equal-wavevector specialisation, and a
  scope clause excluding ensemble/statistical or theory-discriminating readings.
- B items: `ex-em-polarization-examples` (linear/circular/elliptical/zero/dependent-amplitude
  choices with $H$ values and $b=k\times e/\omega$ verified); `ex-em-plane-wave-infinite-energy`
  (explicit $\cos^2$ density, uniform positive period average, the box lower bound
  $\pi\varepsilon_0E_0^2R^2/K\to\infty$, and the compact-support finite-energy contrast);
  `texp-em-radiation-pressure-example` (adopted idealisations and pillbox force law, giving
  $I/c$ and $2I/c$ with the standing-wave stress $-2I/c$ computed explicitly);
  `ex-em-two-beam-fringes` (the coplanar common-polarisation configuration, fringe period
  $\lambda/(2\sin\alpha)$, visibility $\cos^2\alpha$, the promised
  $\propto|1+e^{i\Delta}|^2$ copropagating law, and the mandatory measurement-model/statistics
  qualifications in the spirit of the double-slit guidance).

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded (batches 5,
13, 16, 17, 23, 24, 32 and this page); all out-of-run suppliers are published items homed on
pages inside the transitive closure of this page's declared `requires`. Computed whole-run
labels (tool, not design):

| item | level | in-run deps (max supplier) |
|---|---|---|
| `def-em-plane-wave-definition` | 9 | `def-em-fields` (8) |
| `pthm-em-vacuum-wave-equation` | 14 | `post-em-vacuum-maxwell` (13) |
| `pthm-em-plane-wave-maxwell` | 15 | `pthm-em-vacuum-wave-equation` (14) |
| `def-em-polarization-definition` | 16 | `pthm-em-plane-wave-maxwell` (15) |
| `pthm-em-general-wave-ivp` | 18 | `pthm-em-gauss-constraint-propagation` (17) |
| `pthm-em-wave-energy-average` | 19 | `pthm-em-poynting-balance`/`pthm-em-momentum-balance` (18) |
| `pthm-em-classical-interference` | 20 | `pthm-em-wave-energy-average` (19) |
| `ex-em-polarization-examples` | 17 | `def-em-polarization-definition` (16) |
| `ex-em-plane-wave-infinite-energy` | 20 | `pthm-em-wave-energy-average` (19) |
| `texp-em-radiation-pressure-example` | 20 | `pthm-em-wave-energy-average` (19) |
| `ex-em-two-beam-fringes` | 21 | `pthm-em-classical-interference` (20) |

`research/physics-em-sr-40-2026-10-08-batch-33.cross-batch-dependencies.json` contains 43
rows: four page rows (one per declared `requires` page) and 39 item rows, one per declared
cross-batch edge. After the refresh the unified ledger shows **no batch-33 consumer edge
without a review row and no orphaned review**; all rows are `open` (suppliers scaffolded,
not authored). The four edges into this page from batches 34, 35, 37 and 38 are those
batches' own review duty (their manifests have no inventories yet).

## AC declarations and exact uses

- `pthm-em-general-wave-ivp` declares `AC_ω` ([[def-countable-choice]]) inherited from
  `thm-em-wave-cauchy-kirchhoff`; used only through that scalar theorem (existence,
  uniqueness, domain of dependence, compact support).
- `texp-em-radiation-pressure-example` declares `AC_ω` ([[def-countable-choice]]) for the
  fixed-volume clause of `pthm-em-momentum-balance` applied to the vacuum boxes.
- No other batch-33 item declares or inherits a choice principle: the period averages, the
  polarisation and plane-wave algebra, the interference identities, the Riemann/Jordan box
  integrals of the infinite-energy example and the scalar computations are choice-free;
  the balance-reading clauses of `pthm-em-wave-energy-average` consume only the local
  (choice-free) clauses of the two balance theorems.

## Sources (two-treatment rule, dispositions, fetch evidence)

Two complete independent primary treatments were fetched, stamped and read:

1. **D. Tong, Electromagnetism (Cambridge Part II lecture notes, 2026 author-hosted
   revision, 236 pp.)**, §4.3 pp. 82–84, §4.3.1 pp. 84–87, §4.3.2 pp. 87–88 (PDF pp.
   90–96) and §4.4 pp. 92–94 (PDF pp. 100–102). URL
   `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`; stamp: 1 882 418
   bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages (2026-10-08T21:32:03Z).
2. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999, 596-page retained
   scan)**, §9.2.1 pp. 375–376, §9.2.2 pp. 376–379, §9.2.3 pp. 381–382 and Problems
   9.10–9.12 p. 382. URL (stamped) as in the coverage file; stamp: 13 484 424 bytes,
   sha256_16 `ab7b67a3f6d60049`, 596 pages (21:32:07Z). Printed p. 380 of this scan has no
   extractable text layer; it was **not** read and no scaffolded claim rests on it (the
   polarisation classification is carried entirely by Tong §4.3.2 and the cited
   mathematical items).

`source-fetch-check --stamp` reports 2/2 fetch-verified and 2/2 resolved; `url-sweep`
reports 2/2 live; `source-backing` reports every harvested result still backed by an
openable source (6 distinct authored results across the `included` rows). The coverage
checklist gives 18 harvested rows (9 per source) with explicit dispositions: 10 `included`
rows covering 6 distinct scaffolded items, 3 `inline` absorptions (the superposition
sentence, Problem 9.11's averaging device and Problem 9.12's plane-wave stress tensor),
3 `deferred` rows with named destinations (`em-wave-interfaces-and-conductors` for Tong
§4.3.3 and Griffiths §9.3 onward; `em-energy-momentum-and-angular-balance` for Tong §5.6),
and 2 `out-of-scope` rows with specific reasons (historical narrative; the
sunlight-intensity exercise).

**Recorded source deviation.** The historical design's source legend for this page names
T (Tong), F (Fitzpatrick node 48), E (Beisert, ETH) and O (Binney, Oxford). This dispatch
retained Tong (the design's primary source) and used the run's already-verified complete
Griffiths textbook treatment in place of retrieving F/E/O, exactly as batch 32 recorded for
the sibling pair. The two-treatment rule (at least two independent complete treatments,
including a book or full lecture-note set) is satisfied by Tong + Griffiths, both read in
full over the cited ranges; no claim rests on a source that was not fetched. Fitzpatrick
node 48 in particular was deliberately not used: the retained reader report documents a
sign error (eq. 451), misuse of complex phasors for real geometry (eqs. 448–449) and a
plane-pulse subclass presented as the general 3-D wave (eqs. 464–466).

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-33 item** (stored
  labels equal the computed ones; no cycle). The 22 remaining errors are
  `empty scaffold inventory` rows for batches 25–30 and 34–40 — a run-wide condition as
  sibling workers land, not a batch-33 finding.
- `step1-decisions.mjs check --run …`: 361 run items, 361 ready; **no batch-33 item open**;
  the only open entries are the empty pages of other batches.
- `content-policy.mjs --manifest-only` over **all run manifests**: **0 errors, 0 warnings**
  (361 scoped items).
- `manifest-deps.mjs` over all run manifests: 361 items, 0 errors.
- `validate-plan.mjs research/plan-spec.json --run …`: **OK** — no item-level cycles,
  forward references, B-page dependencies or unresolved ids; page 345/346 appears with 7/4
  items and its declared requires; the earlier transient errors on `em-material-response`
  (another batch) cleared before the final run. Only pre-existing `redundant-prereq`
  warnings remain, none naming this page.
- `coverage-checklist.mjs …batch-33.coverage.json --require-destination`: 1 page,
  **18 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp`: **2/2 fetch-verified** (stamps above);
  check mode resolves 2/2.
- `url-sweep.mjs` on batch 33 (scratch output under `/tmp`, run artifact untouched):
  **2/2 live**, no suspect or recoverable URLs.
- `source-backing.mjs` with the batch liveness file: **all harvested results backed**.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated;
  43/43 batch-33 consumer edges carry review rows, 0 orphaned reviews.
- `extcheck.mjs` (whole corpus): 26 654 items, 0 recorded-not-proved, 0 resting on them —
  batch-33 items declare no `proved_here: false`, `external_refs` or `forward_refs`, so the
  external-reference scope is vacuous for this batch.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: cannot run to
  completion while any run manifest is still empty (`readRunManifestPages` fails on
  batch 25); a run-wide condition that clears as sibling workers land. The manifest-only
  external-reference check will be meaningful once every inventory exists.

## Published defects and unresolved findings

No published defect was found in any supplier examined: the imported mathematical suppliers
(`cor-the-curl-of-a-curl-of-a-c2-field`, the divergence/curl/Laplacian/partial-derivative
definitions, Clairaut–Schwarz, the cross-product lemma, the complex-exponential and
chain-rule items, the FTC item, the Riemann/Jordan box items, `thm-heine-borel-rn`,
`def-countable-choice`) are published with statements matching the uses recorded here, and
the AC_ω hypothesis of the two balance theorems and of the scalar Cauchy theorem is carried
into the consuming statements where clause (b)/(the theorem) is actually used. Unresolved
findings, all outside batch 33's authority: (i) the run-wide `empty scaffold inventory`
condition of batches 25–30 and 34–40 at the time of writing, which holds the run-level
gates; (ii) the four unreviewed edges into this page owned by batches 34, 35, 37, 38;
(iii) the design's `finite-energy` title label for `pthm-em-general-wave-ivp`, recorded
above with the repair chosen (statement follows the proved content).

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gates follow construction; these readiness records are
not independent mathematical approval.
