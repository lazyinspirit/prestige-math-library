# Batch 3 — `sl2-r-principal-and-complementary-series` (RG-28) construction evidence

Run: `frontier-43-complex-representation-15` (attempt 2, re-dispatch after the
2026-10-07T03:54Z controller/worker loss). Owned output:
`research/frontier-43-complex-representation-15-batch-3.pages.json` (16 A-page +
4 B-page items), the coverage record `…-batch-3.coverage.json`, 20 current Step-1
readiness records, this note, and the consumer-batch dependency input
`research/frontier-43-complex-representation-15-batch-3.cross-batch-dependencies.json`.

Status: **20 items `ready`, no escalations.** These records are Step-1 construction
evidence, not mathematical approval; Step 3 owns authoring and independent review.
No published content, shared plan, engine state or verdict was edited.

## Controlling design, plan and owner direction

- The **representation-theory-groups track design controls**:
  `research/plan-representation-theory-groups-track.md` §RG-28 (A page L1938 ff.,
  B page L1976 ff.), including its hard proof plan (compact picture from RG-23,
  differentiate only on the K-finite core, split reducibility by ladder-coefficient
  vanishing, diagonalise the intertwiner, sign analysis for the complementary
  interval, ν=0 and both endpoints treated separately, parity never erased).
- `research/plan-spec.json` agrees on page ids, titles, orders 1236/1237,
  `representation-theory` category, companions, and requires:
  `induced-unitary-representations-of-locally-compact-groups`,
  `mackeys-imprimitivity-theorem`, `group-c-star-algebras-and-the-fell-unitary-dual`,
  `harish-chandra-isomorphism-casimir-and-central-characters`,
  `verma-modules-and-shapovalov-forms` (all published; out-of-run suppliers, so they
  raise no in-run dependency level and create no cross-batch edge).
  Design/plan conflict recorded: the design text names the Lie-track page only as
  "RL-n, the final page" and does not fix its id; the current plan fixes
  `harish-chandra-isomorphism-casimir-and-central-characters` +
  `verma-modules-and-shapovalov-forms`. The plan controls; both are published.
- The binding owner direction
  `research/frontier-43-complex-representation-15-owner-authoring-direction.md`
  addresses batches 13/14, 1/5 and 4 only; it changes nothing here. Its global rule
  (no active `proved_here: false`, `not-supplied` fallback, `external_refs` or
  external-dependency substitute) is satisfied: every item is literature-derived
  with a complete local proof strategy and published in-run-or-external suppliers.
- `validate-plan.mjs` (run pages spliced with this manifest) exits 0 with only two
  pre-existing advisory `redundant-prereq` warnings on the shared planned page
  graph (RG-28 reaches `induced-unitary-representations-of-locally-compact-groups`
  through `mackeys-imprimitivity-theorem`, and
  `harish-chandra-isomorphism-casimir-and-central-characters` through
  `verma-modules-and-shapovalov-forms`). The plan owns those edges; not a defect.

## Inventory, ordering and dependency audit

20 items in proof-prerequisite order within each page, explicit `deps`, stable
pre-existing IDs, no dep on any B-page item, no in-run cross-batch item dep, no
missing/forward/circular/inadequate dependency (checked item by item against the
statement and strategy). `item-dependency-levels check --run` reports **no batch-3
finding**; labels recomputed and consistent, maximum level 9 (the two B-page
level-9 items). The A page holds 16 items, far below the 100-item cap. The A page's
in-run order was corrected so that `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`
precedes its new consumer `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`
(no other order change; intra-order verified locally and by `validate-plan`).

All 52 external dep targets are published item files on plan pages inside the
transitive closure of the page's `requires`; the five page prerequisites and all
Casimir/Harish-Chandra items were read. AC/AC_ω declarations were added this pass:
each item states "Assume the Axiom of Choice ([[def-axiom-of-choice]])" and carries
`def-axiom-of-choice` in `deps`; the strategies name the exact entry point (the
rho-function/induction package for the analytic items, the normalized Haar-measure
supplier, the compact-group decomposition, and the AC_ω-only trigonometric/Fourier
and one-parameter suppliers for the algebraic items). No choice-free branch exists
on this page; no incompatible-axiom supplier is reachable.

## Mathematical repairs made in this pass (attempt-1 manifest carried these defects)

1. `thm-compact-picture-of-the-sl2-principal-series` — the cocycle action omitted the
   parity factor; the correct action is
   `(g·f)(k)=|α(p(k,g))|^{1+ν}σ_ε(m_{p(k,g)})f(κ(k,g))`, without which `g·f` loses
   the ε-parity. Convergence/unitarity computations were verified independently
   (y=1/(1+u²), e^{iθ}=(u-i)/√(1+u²), Jacobian |α(p)|²).
2. `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture` — the `E_-`
   vanishing point was wrong (`ν=1+n`); from Kerr (2.6) `L_{E_-}f_n=0` exactly when
   `ν=n-1` (and `L_{E_+}f_n=0` when `ν=-(n+1)`). The basis parenthetical was also
   corrected (`W` spans the complexified compact direction; `E_±` are the ±2
   eigenspaces of `ad W`).
3. `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` — "uniserial"
   was false (the two infinite chains are disjoint irreducible submodules); the
   sub/quotient orientation at `ν=±n` was inverted. Independently confirmed against
   Kerr Example 2.6 ("trivial quotient of I_{+,1}") and Etingof's short exact
   sequences (with s=-ν): at `ν=n>0` the finite-dimensional `L_{n-1}` is the unique
   irreducible quotient; at `ν=-n` it is the unique irreducible submodule. The
   Casimir scalar was corrected from Kerr's `¼(1-ν²)` normalisation to the library's
   Killing-form normalisation `(ν²-1)/8`, consistent with
   `prop-casimir-eigenvalue-on-a-highest-weight-module` on `L_{n-1}` at `ν=n`.
4. `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` — the attempt-1
   closed form was correct only for even K-types; recomputed from the defining
   integral (verified numerically at c_0, c_1, c_{-1}, c_{-2}):
   `c_n(ν)=(-i)^n √π Γ(ν/2)Γ((ν+1)/2)/(Γ((ν+n+1)/2)Γ((ν-n+1)/2))`, with recurrence,
   symmetry `c_{-n}=(-1)^n c_n`, and the exact vanishing/nonvanishing pattern at
   `ν=±n` (matches Kerr Exercise 2.8(iii) and the compositions).
5. `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` — replaced the
   wrong pole-lattice claim and the wrong eigenvalue display by the corrected
   Γ-quotient (dependency on the recurrence lemma added; level 5→6); the normalised
   product identity is now stated with the parity-chain base `c_{n_0}` (for ε=1 the
   c_0-normalised product identity fails).
6. `thm-unitarity-of-the-sl2-complementary-series` — the positive-definite claim was
   over-generalised to ε=1, where no non-spherical complementary series exists
   (Etingof Theorem 9.3, Kerr's unitary list). Scoped to the spherical case
   (0<|ν|<1), with the correct endpoint statements, and the ε=1 obstruction
   (`b_1=-b_{-1}` for any invariant Hermitian form) recorded.
7. `thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu` — the "|\hat c_n(ν)|=1 for
   every K-type" claim holds only for ε=0; for ε=1 the unitary equivalence is
   supplied instead by conjugation of the compact picture
   (conj α^{1+ν}=α^{1-ν}), and the exceptional-parameter non-isomorphism is now
   stated with the exact vanishing pattern.
8. Smaller fixes: a spurious `Peter–Weyl` citation removed from
   `lem-k-type-decomposition`; the N-component in the
   `thm-iwasawa-decomposition` left-translation strategy corrected to
   `x+e^{-t}x_1(k)`; `def-standard-intertwining-operator` now states honestly that
   `c_0` is the base eigenvalue for ε=0 and a normalising scalar for ε=1.

## Source evidence

Four fetch-verified sources back the A page (two independent treatments plus a
monograph): Kerr, *Notes on the Representation Theory of SL2(R)*,
`https://www.math.wustl.edu/~matkerr/sl2notes.pdf` (56 2553 bytes,
sha256_16 153f341424f965e4, 36 pp.), read §1–2 printed pp. 1–12; Kowalski,
*An Introduction to the Representation Theory of Groups*,
`https://people.math.ethz.ch/~kowalski/representation-theory.pdf`
(1838207 bytes, f63d9c26ec965b9c, 338 pp.), §7.4 printed pp. 292–317; Etingof,
*Representations of Lie Groups*,
`https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf`
(3494075 bytes, 421fa52f61680e63, 162 pp.), §9 printed pp. 48–53; Knapp,
*Lie Groups Beyond an Introduction*, 2nd ed.,
`https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf`
(5047479 bytes, 5ba1b91db9174613, 838 pp.), Ch. VI §4 printed pp. 371–375.
All four were re-downloaded in this pass and their full-text hashes reproduce the
attempt-1 stamps exactly, so the stamps are genuine and reused (no retry allowance
restarted). All 34 harvested results have dispositions; each repaired statement was
checked against at least two of these treatments (and the B page's Kerr/Etingof
citations). No published defect was found in any of the 52 examined published
suppliers; the model-variance difference between the manifest's left-covariant
principal-series model and the published right-covariant unitary-induction model
(`def-covariant-function-model-of-unitary-induction`) is a conventions pairing, not
a defect — see caveat (1) below.

## Check results (actual, this pass)

- `coverage-checklist …coverage.json --require-destination` → 1 page, 34 harvested
  results, 0 errors, 0 warnings, exit 0.
- `manifest-deps` (all run manifests) → 0 errors, exit 0; `content-policy
  --manifest-only` (all run manifests) → 0 errors, 0 warnings, exit 0.
- `item-dependency-levels check --run` → no batch-3 finding; the reported
  `empty scaffold inventory` errors are the other batches still awaiting suppliers.
- `validate-plan` on the run pages with this manifest's item lists → exit 0, no
  item-level cycles/forward references/B-page deps/unresolved ids; two advisory
  redundant-prereq warnings owned by the shared plan.
- `manifest-integrity` → 30/30 pages, no scope drift, exit 0; `drift-review-check`
  → 15 pages reviewed, 3 applied edits, no blocked edges, exit 0.
- `source-fetch-check --coverage …batch-3.coverage.json` → 4/4 sources
  fetch-verified, exit 0.
- `step1-decisions check` → all 20 batch-3 items closed as `ready`; the remaining
  open items in that report belong to other batches.

## Caveats for the owner / Step 3 (unresolved but non-blocking)

1. **Model variance.** The manifest's `I_{ε,ν}` is the standard left-covariant
   principal-series model with the right-translation action and half-modular
   character `|α|^{1+ν}σ_ε`, while the published
   `def-covariant-function-model-of-unitary-induction` /
   `thm-unitary-induction-from-a-closed-subgroup` package is the right-covariant
   (left-action, `D_g^{1/2}`-twisted) unitary model. The two are the standard pair of
   realizations of the same induced representation (inversion `g↦g^{-1}` plus the
   `ρ^{1/2}` rescaling, parameter unchanged up to sign). The scaffold's compact-picture
   unitarity is proved directly (cocycle modulus and the `k↦κ(k,g)` Jacobian), so no
   extra item is required; the Step-3 author should either state the dictionary
   explicitly or follow the direct route already in the strategies.
2. **Coverage attribution.** The Kerr harvest row "(2.5)–(2.6) with Exercise 2.5:
   derived action, ladder coefficients and Casimir eigenvalue ¼(1−λ²)" still names
   `lem-sl2-raising-…` as its item. That is right for the derived-action formulas;
   the Casimir eigenvalue is now normalised into
   `thm-generic-irreducibility-…` as `(ν²−1)/8` (library normalisation). The row
   remains accurate about Kerr; no coverage edit was needed.
3. **ε=1 unitary branch.** Nothing on this page constructs a non-spherical
   complementary series (none exists); the ε=1 unitary family is the ν∈iR principal
   series plus the limits of discrete series at ν=0, as recorded in the repaired
   items. RG-30 must consume only the spherical complementary series and the
   equivalence `I_{ε,ν}≅I_{ε,-ν}` off `W_ε`.
4. No cross-batch in-run dependency exists for this batch; the consumer input is the
   empty array. RG-29 (batch 4) and RG-30 (batch 5) are the downstream in-run
   consumers of this pair and are still awaiting their own scaffolding.

## Final pass (same pass, after the decsions were recorded)

- Re-ran the battery on the frozen manifest: `coverage-checklist` 0/0 (exit 0);
  `manifest-deps` 147 items, 0 errors; `content-policy --manifest-only` 147 scoped
  items, 0 errors/0 warnings; `item-dependency-levels` again reports only the other
  batches' empty inventories (18 lines), no batch-3 finding;
  `source-fetch-check` 4/4 resolved by fetch stamps (exit 0);
  `step1-decisions check` closes all 20 batch-3 items (the open items in that report
  are owned by the other batches still in flight); `manifest-integrity` and
  `drift-review-check` still exit 0.
- External-reference check at this boundary: `extcheck` operates on authored item
  files and therefore belongs to the post-authoring gates; the manifest-only pass
  (`content-policy`) confirmed this batch declares no retired `proved_here: false`,
  `external_refs` or `external_dependency` record, and each item's `sources`
  references carry a live, fetch-checked URL (provenance `literature-derived`).
- Consumer-batch input `research/frontier-43-complex-representation-15-batch-3.cross-batch-dependencies.json`
  is the empty array; `frontier-dependency-ledger refresh` picked it up and recorded
  the batch's two downstream page-level consumer edges (batch 4 `kazhdans-property-t-and-spectral-gap`,
  batch 5 `sl2-r-discrete-series-and-unitary-dual`, both `requires` this A page),
  which stay open for those consumer batches' own Step-3 review rows.

## Bounded derived-action normalization repair

The real compact convention is k_theta=[[cos theta,sin theta],[-sin theta,cos theta]], f_n=e^(in theta). The ladder supplier now pins J=[[0,1],[-1,0]], H=diag(1,-1), S=[[0,1],[1,0]], W=-iJ and E_±=(H±iS)/2. Derivatives are defined only for real X, then extended complex-linearly; no exponential of complex X is inserted into the real group action. Differentiating the actual PK cocycle gives L_J=∂theta, L_H=(1+nu)cos2theta+sin2theta∂theta, L_S=(1+nu)sin2theta-cos2theta∂theta. Hence L_E±=e^(±2i theta)((1+nu)∓i∂theta)/2, with all original ladder coefficients, zeros, brackets and recurrence unchanged.

One focused source/definition audit read Kerr's full relevant printed6–11, especially9–10's exact matrices, real derivative and complex-linear extension. The complete36-page source was freshly retrieved with sha256153f341424f965e45f4f396a3738e9202275fc13cf439067c6e3340b2e807b0d,562553bytes,matching the genuine existing source stamp. Bottom-row differentiation fills in source reader-left details. Review independently verified matrix brackets, all-smooth differential-operator commutators and the real-generator skew-adjoint/complex-generator adjoint convention. No new source, parameter, pair, dependency, page edge or citation exception is introduced.

Actual transitive impact:12batch3subjects,2batch4rank-one-failure consumers,20currently visible batch5subjects. Batch5 remains untouched while its native writer is active; exact future impacts are handed to root. That required consumer-interface review exposed two inherited clauses, subsequently adjudicated and corrected by the same repair owner as recorded below.

## Adjudicated complementary-series interface correction

Binding `sl2-complementary-owner-disposition.md` authorizes correction of the false fixed-parameter weak-containment clause and undefined normalized endpoint form. Sound family convergence, reducibility, endpoint subquotients and full positive-definite interval are retained. The ambient smooth globalization is now explicitly distinguished from its K-finite (g,K)-module. The actual dual pairing and intertwiner act on smooth vectors; polynomial eigenvalue bounds from recurrence, integration-by-parts Fourier decay and uniform derivative limits supply the continuous smooth multiplier. Real derived intertwining integrates along J,H,e0 to all ANK factors, so whole-G invariance never assumes the K-finite core is G-stable.

Spherical weights are a0=1 and a_(±2j)=product_(l=1..j)(2l-1-nu)/(2l-1+nu), at regular real parameters. The full module is positive definite exactly for|nu|<1; the weighted norm is dominated by a C^r norm, which proves strong continuity on the Hilbert completion via smooth density and unitarity. Atnu=1 the finite normalized limit has only a0=1; atnu=-1 the separate rescaled(1+nu)limit has b0=0,b_(±2j)=2j. Uniform polynomial bounds pass smooth pairing invariance to those endpoint limits. No normalized pole is treated as a finite form, and no blanket indefiniteness of exceptional rescaled forms is retained. Odd recurrence forbids full positive definiteness for real nonzero nu; positive even parameters have zero tails, negative even parameters zero central weights, andnu0 retains the two-limit unitary splitting.

The spherical coefficient uses the actual intertwining identity R_nu Pi_nu=Pi_-nu R_nu and R_nu f0=f0; this proves its1-nu exponent, distinct from the compact action's1+nu. Compactness gives family/Fell convergence asnu→1. Weak containment belongs to the single direct sum over a cofinal sequence, not each fixed representation. The two batch4 failure consumers use that sum with almost invariant f0 vectors and no invariant coordinates; their original quantitative/no-Kazhdan-pair claims remain.

One focused review of these exact revised interfaces is completed before current readiness refresh. No additional broad source/classification audit, citation exception or pair is introduced. Exact source/full passages, correction decisions, actual dependency maps, focused checks and current hashes are recorded in `sl2-complementary-interface-resolution.md/json`. Native batch5 remains untouched while writing; its23currently visible affected subjects are handed to root for reconciliation on stable inputs. This record is scaffold authoring readiness, not item acceptance.

The one focused review also corrected the precise smooth-domain prerequisites: P=MAN contains−I and is all upper triangular, while AN is its positive-diagonal identity component; ANK is unique and smooth, whereas MAN×K has the M ambiguity removed by parity. The compact inverse/action now uses canonical ANK (with an explicit lower-row formula), and its homogeneous space is P\G. The definition's stale algebraic-only strategy sentence is reconciled with its ambient smooth globalization. These are the single local interface correction, without another source/proof audit. They expand final affected readiness to all20batch3subjects plus2batch4consumers, and the future beta5map to23subjects.
