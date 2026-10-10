# Batch 29 notes — `em-material-response` / `em-material-response-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **337**, B page order **338**, category
`classical-electromagnetism`, library `physics`. Final inventory: **7 A items + 3 B items**,
all ten recorded `ready` with current dependency hashes. No item file, page, plan, published
item, engine state or verdict was edited; the plan-spec was not modified.
Files written: the batch manifest, the batch coverage file, the consumer-batch
cross-dependency input, the ten `step1-*` readiness records, the tool-refreshed unified
ledger, and this note.
Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the Step-1 drift
report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md` (this page: **no-drift**),
the design section `research/plan-classical-electromagnetism-track.md` L1871–L1898, and the
design sources `proposed-inventory.json`, `definition-contracts.md` (post-em-coarse-graining,
def-em-polarization-magnetization, post-em-material-closure), `core-conditional-proofs.md`
(K5), `completed-expansion-arguments.md` (D1–D3), `worked-example-verifications.md` (X4) and
the reader directories `reader-tong` and `reader-fitzpatrick`.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L1871 ff.) and the current
   `research/plan-spec.json` entries 337/338 agree exactly on page ids, kind, orders,
   category, library `physics`, titles, companion links and declared `requires`
   (`em-causal-response-and-radiation-prerequisites`, `em-maxwell-integral-and-constraints`).
   The plan's item arrays are empty by construction; the batch manifest is the scaffold record.
2. **A/B counts preserved.** Design A=7/B=3; scaffolded A=7/B=3; cap 100 each, far below.
3. **`dependency_level` labels.** The design's own labels (computed under its smaller dep
   arrays) are 3, 4, 5, 6, 6, 7, 7 and 7, 7, 7. The whole-run in-run labels recorded in the
   manifest are **13, 14, 15, 16, 16, 17, 17** for the A items and **17, 17, 17** for the B
   items (same order as the inventory below); they include the in-run levels of the batch-1
   (SR), batch-13, batch-16, batch-19, batch-23 and batch-24 suppliers. Recomputation
   recorded, not hidden (same practice as batches 18 and 32).
4. **Dep-array additions and role corrections (recorded, not silent).** The design's dep
   arrays were kept as their core; every item adds only suppliers actually used by its
   statement, well-definedness or proof route, and every role was checked against the
   physics-content role rules. Two design roles are **illegal against the checker** and were
   corrected: `pthm-em-macroscopic-maxwell -> def-em-polarization-magnetization` and
   `pthm-em-material-stationary-jumps -> def-em-weak-sources` were recorded in the
   closure ledger as `physical-result`, but both suppliers are *definitions*, and
   `physical-result` requires an established physical result; they are recorded here as
   `formulation-prerequisite` (they fix the objects the theorems quantify over). Postulate
   `post-em-material-closure`'s dep on the physical theorem `pthm-em-macroscopic-maxwell`
   keeps the design's `formulation-prerequisite`, which is the only legal nonproof role
   there. All further additions are mathematical well-definedness/supplier items (e.g.
   `thm-clairaut-schwarz-mixed-partials` for the bound-source conservation, the cross-product
   divergence identity and the parameter-integral lemma for the restricted energy balance).
5. **Focus correction against the checker — out-of-closure suppliers replaced (no plan
   edit, no escalation needed).** `validate-plan` initially reported two `undeclared-prereq`
   errors naming this pair: the A page's `post-em-coarse-graining` originally depended on
   `def-convolution-of-two-functions-on-rn`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`
   and `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`,
   all homed on `density-separability-and-convolution-in-lp`, and the B page's
   `ex-em-dielectric-sphere-example` depended on `thm-maximum-principle-with-limsup-control-at-infinity`
   and `thm-weak-maximum-principle-for-the-laplacian`, homed on
   `maximum-principles-harnack-and-liouville-in-rn`. Neither page is in this pair's declared
   `requires` closure, and the plan is read-only for this dispatch. Both dependencies were
   replaced by in-closure suppliers carrying the identical content, so **no plan change and
   no cross-batch escalation was required**:
   - `post-em-coarse-graining` now uses `def-complex-lp-and-euclidean-test-function-conventions`
     (home `complex-lp-spaces-and-test-function-conventions`, in closure) for the
     `C_c^\infty`/local-integrability conventions and
     `lem-complex-translation-and-approximate-identity-interfaces` (same page, in closure)
     for the convolution integral, the scaling `eta_l(x)=l^{-3}eta(x/l)`, its absolute
     existence and the smoothing conclusion with differentiation under the integral sign;
     `def-locally-integrable-function-on-r-n` (home
     `the-maximal-function-and-lebesgue-differentiation`, in closure) is retained.
   - `ex-em-dielectric-sphere-example` now proves uniqueness with the epsilon-weighted first
     Green identity (`cor-first-green-identity-on-a-bounded-c-one-domain` on the ball and on
     the exterior annuli), the harmonic-derivative decay
     (`cor-harmonic-cauchy-estimates-in-supremum-norm`) and the vanishing of the far flux,
     then `cor-classical-dirichlet-and-poisson-problems-are-unique`(1) for the interior;
     no maximum principle is used. The removed maximum-principle suppliers are recorded in
     this note and in the replaced statement/strategy, not silently dropped.
   After the replacement, `validate-plan` reports no error naming either page.
6. **Source-legend deviation recorded.** The historical design legend names T (Tong),
   F (Fitzpatrick), E (Beisert/ETH) and O (Binney/Oxford) for this category. This dispatch
   re-used the retained Tong course (section 7 'Matter'), the Fitzpatrick course (the
   complete 364-page book version together with the already-stamped hyperlinked nodes 69,
   71, 73 and 78) and Griffiths 3rd ed. (sections 4.3–4.4, 6.2–6.4, 7.1.1, 7.3.5–7.3.6) as a
   third independent textbook treatment, plus the BIPM SI brochure for the derived-unit
   relations. E and O were **not** re-read for this batch: Tong, Fitzpatrick and Griffiths
   cover every claimed item directly, and the E/O averaging and constitutive caveats are
   already reflected in the design contracts and in the scope clauses written here. No claim
   rests on a source that was not fetched or on an unread range.
7. **Four documented source drops with an alternative-carrier search.** Fitzpatrick nodes
   70, 72, 76 and 98 are live but are short HTML pages (1700, 1788, 1127 and 1673 characters
   of extracted text) below the fetch checker's 2048-character substantive-content floor;
   after the initial check and five retries each they could not be recorded as fetch-verified
   full texts. Their dispositions are preserved with complete `source_resolution` drop
   records (`status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`, the
   six attempts, the two autonomous searches and per-item alternatives). The searches located
   a complete single-document version of the same course book
   (`http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf`,
   364 pages, author R. Fitzpatrick), which was fetched and stamped and now carries the same
   chapter contents (sections 6.2–6.11, 9.6). Every result the four nodes carried is
   independently backed by Tong, Griffiths and/or the book version; the drop also preserves
   the harvested titles and dispositions for inspection.
8. **Manifest publication practice.** The initial full inventory was prepared in a sibling
   scratch file and published by atomic rename, as the owner direction requires. Two small
   follow-up edits (citation swap after the drops; the two supplier substitutions plus the
   two well-definedness additions) were applied by rewriting the canonical file in place
   with the JSON writer; the file parsed clean after each write, but this is an operational
   deviation from strict atomic-rename publication for follow-up edits and is recorded here
   for the owner.

## Inventory decisions (recorded, not silent)

- `post-em-coarse-graining` (postulate): the design contract's kernel, averaging length,
  scale separation and boundary handling, with the smoothed-field regularity proved from the
  in-closure convolution/mollification interface lemma (AC_omega declared and used only
  there) and the explicit clause that coarse graining supplies neither a constitutive law nor
  a field equation. No fabricated proof (`provenance.proof: not-applicable`).
- `def-em-polarization-magnetization` (definition): `P,M` as model-specified jointly `C^2`
  dipole-moment densities, `rho_b=-div P`, `J_b=d_t P+curl M`, the free/bound split and
  `D=eps0 E+P`, `H=B/mu0-M`, with units and the explicit absence of any constitutive,
  conservation or microscopic claim.
- `pthm-em-macroscopic-maxwell` (physics-theorem): bound-source conservation by
  Clairaut–Schwarz (`div curl = 0` and `d_t div = div d_t`) and the four macroscopic
  equations by substitution; scope excludes weak/singular sources and claims no
  constitutive content.
- `post-em-material-closure` (postulate): material rest frame defined via the SR inertial
  frame; constant symmetric positive-definite `eps, mu` and positive-semidefinite `sigma`;
  the isotropic broadband condition `eps*mu >= c^-2` stated separately from the finite-band
  effective reading; `L^1` causal memory branch with its elementary absolute convergence;
  the finitely-subtracted analytic branch with exact holomorphy/growth/boundary hypotheses;
  ferroelectric/ferromagnetic/hysteretic/nonlinear/nonlocal responses explicitly excluded.
- `pthm-em-material-stationary-jumps` (physics-theorem): the distributional macroscopic
  solution hypothesis with the stationary sheet pair `(sigma_f,K_f)` from
  `def-em-weak-sources`, the joint one-sided `C^1` (and stated weak-trace) hypotheses, and
  the four pointwise jumps `n.[D]=sigma_f`, `n.[B]=0`, `n x [E]=0`, `n x [H]=K_f`; the thin-
  interface predicate is declared as a modelling hypothesis, not derived from the smooth
  equations; AC_omega carried from the interface-derivative lemma.
- `pthm-em-causal-dispersive-response` (physics-theorem): the memory-branch response
  identified with the exact hypotheses of `thm-em-causal-dispersive-response` (bounded
  causal linear response, entire/holomorphic transfer functions, decay bounds, dispersion
  relations) and of `lem-em-finitely-subtracted-analytic-dispersion` (Taylor-subtracted
  relations for `n>=1`, the `n=0` case, the constitutive-polynomial branch), with the
  monochromatic work formula and the iff passivity criterion, and passivity explicitly *not*
  inferred from causality.
- `pthm-em-restricted-material-energy` (physics-theorem): the local balance
  `d_t u+div S=-J_f.E` with `u=(E.D+B.H)/2`, positivity from positive definiteness, the
  Ohmic reading with `E.sigma E>=0`, the fixed-volume form under AC_omega, and the explicit
  exclusion of dispersive/nonlocal/nonlinear/hysteretic storage.
- `ex-em-constitutive-unit-counterexample` (example): the dimensional exclusion of
  `E=eps0 D`, the observation that dimensionally admissible laws do not determine the
  permittivity, and the frequency-domain-symbol vs instantaneous-coefficient distinction.
- `ex-em-dielectric-interface-example` (example): the two electric jump relations solved
  against `D=eps_j E`, `E_2n=(eps_1/eps_2)E_1n+sigma_f/eps_2`, the free charge retained
  explicitly, and the magnetic companions.
- `ex-em-dielectric-sphere-example` (example): the explicit candidate with
  `C=3 eps_out/(eps_in+2 eps_out)` and `d=E_0 a^3(eps_in-eps_out)/(eps_in+2 eps_out)`, its
  verified matching conditions and decay, the Green-identity uniqueness in the declared
  class, the uniform interior field, the exterior dipole moment `p=4 pi eps_out d e_3` and
  the bound surface charge, with the dynamic-polarisability restriction in the scope.

## AC_omega declarations and exact uses

Four items state the Axiom of Countable Choice and list `def-countable-choice` with role
`mathematical-premise`, in every case inherited from the exact supplier hypothesis:

- `post-em-coarse-graining`: the countable-choice hypothesis of
  `lem-complex-translation-and-approximate-identity-interfaces`, used only in the regularity
  clause (b).
- `pthm-em-material-stationary-jumps`: the hypothesis under which
  `lem-em-interface-derivatives` and the surface conventions of `def-em-weak-sources` are
  stated; used in the delta-coefficient matching.
- `pthm-em-restricted-material-energy`: the hypothesis of
  `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, used only in the fixed-volume
  clause (c); `lem-em-parameter-integrals`' own surface/AC convention is not inherited
  because only its volume clause is consumed.
- `pthm-em-causal-dispersive-response`: Countable Choice (and Dependent Choice in the
  integrable branches, `def-dependent-choice`) exactly as in the two mathematical suppliers.
`ex-em-dielectric-sphere-example` also declares `def-countable-choice` for the Green and
Dirichlet uniqueness suppliers. No item uses a stronger choice principle; no item consumes
Choice in a choice-free clause.

## Sources (treatments, stamps, drops)

1. **D. Tong, Electromagnetism (Cambridge lecture notes, 2026 printing)**, section 7 'Matter',
   printed pp. 172–228; `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`;
   stamp: 1 882 418 bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages (2026-10-08T21:26:46Z).
2. **R. Fitzpatrick, Classical Electromagnetism (complete course book, 364 pp.)**,
   sections 6.2–6.11 and 9.6;
   `http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf`;
   stamp: 2 077 854 bytes, sha256_16 `dfc0d3b41ba2fa99`, 364 pages (21:28:32Z).
3. **R. Fitzpatrick hyperlinked course nodes** 69 (21 154 B, `9289bfa7a99a0011`, 5258 text
   chars), 71 (34 920 B, `bbd341ed207d70b1`), 73 (14 403 B, `4a83f387086cb598`) and 78
   (14 433 B, `d9daf1ddbd7befc1`), all fetch-stamped; nodes **70, 72, 76, 98 are documented
   drops** with the full six-attempt and two-search records described above.
4. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999)**,
   `https://www.hlevkin.com/.../David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf`;
   stamp: 13 484 424 bytes, sha256_16 `ab7b67a3f6d60049`, 596 pages (21:26:56Z).
5. **BIPM, The International System of Units (SI), 9th edition (2019)**,
   `https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf`; stamp: 3 503 078 bytes,
   sha256_16 `1122cf38e25b23d7`, 214 pages (21:27:00Z).

`source-fetch-check` (stamp and check modes): **8/12 fetch-verified, 12/12 resolved (4
documented drops)**. `url-sweep` on the coverage: **8/8 live, 0 suspect** (the four dropped
URLs are live but substantive-content-limited and are reported as citation decisions, not
failures). `source-backing --require-verified`: every authored result still backed by an
openable source or documented alternative argument. Coverage harvest: **59 dispositions**,
0 errors, 0 warnings.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded (batches 1,
13, 16, 19, 23, 24 and this page); every out-of-run supplier is a published item homed on a
page inside the transitive closure of this page's declared `requires`, verified against
`research/plan-spec.json` and the library pages, and the two out-of-closure candidates found
by `validate-plan` were replaced as recorded above.

| item | level | principal in-run deps |
|---|---|---|
| `post-em-coarse-graining` | 13 | `def-em-sources` (12), `def-em-fields` (8) |
| `def-em-polarization-magnetization` | 14 | `post-em-coarse-graining` (13), `def-em-sources` (12) |
| `pthm-em-macroscopic-maxwell` | 15 | `def-em-polarization-magnetization` (14), `post-em-vacuum-maxwell` (13) |
| `post-em-material-closure` | 16 | `pthm-em-macroscopic-maxwell` (15), `def-em-polarization-magnetization` (14) |
| `pthm-em-material-stationary-jumps` | 16 | `pthm-em-macroscopic-maxwell` (15), `def-em-weak-sources` (14) |
| `pthm-em-causal-dispersive-response` | 17 | `post-em-material-closure` (16) |
| `pthm-em-restricted-material-energy` | 17 | `post-em-material-closure` (16), `pthm-em-macroscopic-maxwell` (15) |
| `ex-em-constitutive-unit-counterexample` | 17 | `post-em-material-closure` (16) |
| `ex-em-dielectric-interface-example` | 17 | `pthm-em-material-stationary-jumps` (16) |
| `ex-em-dielectric-sphere-example` | 17 | `pthm-em-material-stationary-jumps` (16) |

The consumer-batch input `research/physics-em-sr-40-2026-10-08-batch-29.cross-batch-dependencies.json`
contains **45 rows**: two page rows (to `em-causal-response-and-radiation-prerequisites` and
`em-maxwell-integral-and-constraints`) and one item row for each declared cross-batch edge
(43 item rows: 36 to batch 23, three to batch 13, and one each to batches 1, 16, 19 and 24).
The refreshed unified ledger shows batch 29 reviewed, **no batch-29 consumer edge without a
review row and no orphaned reviews**. All rows are `open`: suppliers are scaffolded, not
authored, and this review is not a production audit. Three orientation-only wikilinks
(`post-em-coarse-graining`(e) and `def-em-polarization-magnetization`(e) to
`post-em-material-closure`/`pthm-em-macroscopic-maxwell`; `post-em-material-closure`(c) to
`pthm-em-causal-dispersive-response`) are deliberate status cross-references to later
same-page items and are not deps — adding them would create cycles; they are recorded here so
the `cited-not-in-deps` warnings have a human decision on file.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names a batch-29 item**; the ten
  stored labels equal the computed ones. The 22 errors are `empty scaffold inventory` rows
  for batches whose manifests are still empty (25–27, 30 and 34–40 at the final observation, 11 pairs) —
  a run-wide condition, not a batch-29 finding.
- `step1-decisions.mjs check --run …`: **ready 361 of 361** at the final observation; the only
  open work rows are the still-empty pages above, and all ten batch-29 items are closed with
  current hashes.
- `content-policy.mjs --manifest-only` over **all** run manifests: **0 errors, 0 warnings**
  (361 scoped items at the last observation). `manifest-deps.mjs` on this batch: 10 items,
  0 errors.
- `coverage-checklist.mjs …batch-29.coverage.json --require-destination`: 1 page,
  **59 harvested results, 0 errors, 0 warnings** (including the four drop records'
  alternative arguments and dependencies).
- `source-fetch-check.mjs --coverage … --stamp` then check mode: **8/12 fetch-verified,
  12/12 resolved (4 documented drops)**, stamps recorded above.
- `url-sweep.mjs` on the coverage (scratch output under `/tmp/b29`, run artifacts
  untouched): **8/8 live, 0 failed, 0 suspect**, 12 citation decisions (4 documented drops).
- `source-backing.mjs --require-verified` with that liveness file: every authored result
  still backed.
- `manifest-integrity.mjs --run …`: 80 pages owed, 80 in the manifests, **no scope drift**.
- `drift-review-check.mjs --run …`: 40 pages reviewed, no blocked edges, every owed A and B
  page strictly above 95 % published-or-earlier-in-run.
- `validate-plan.mjs research/plan-spec.json --run …`: after the in-closure supplier
  substitutions recorded above, **OK** — acyclic, no item cycles/forward refs/B-page
  dependencies/unresolved ids; the two initial `undeclared-prereq` errors naming this pair
  are resolved. Remaining lines are pre-existing `redundant-prereq` warnings on other pages'
  owner metadata (including one naming this page as an already-reachable route for
  `em-induction-and-circuit-limits`), which are not edited here.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: **cannot run to
  completion** while any run manifest still has an empty inventory —
  `readRunManifestPages` fails on `physics-em-sr-40-2026-10-08-batch-25.pages.json`, a
  run-wide condition that clears as sibling workers land. Batch-29 items themselves declare
  no `proved_here: false`, `external_references` or `forward_refs` content.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; batch 29 has
  no orphaned reviews; `--require-reviewed` still fails with "Cross-batch review incomplete"
  because the still-empty batches have no inputs yet (run-wide, not a batch-29 finding).

## Published defects and unresolved findings

No published defect was found in any supplier examined: the imported mathematics used
(`thm-clairaut-schwarz-mixed-partials`, `lem-the-divergence-and-curl-of-a-cross-product`,
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
`cor-first-green-identity-on-a-c-one-domain`,
`cor-harmonic-cauchy-estimates-in-supremum-norm`,
`cor-classical-dirichlet-and-poisson-problems-are-unique`,
`def-countable-choice`, `def-dependent-choice`, the complex-Lp test-function and
translation/approximate-identity interfaces) are published with statements matching their
uses, and every declared Choice hypothesis is carried into the consuming statement.
Unresolved findings, all outside batch 29's authority: (i) the run-wide gates held by the
still-empty inventories (batches 25–27, 30 and 34–40 at the final observation); (ii) the
pre-existing `redundant-prereq` plan warnings on other pages' `requires` metadata; (iii) the
operational note in item 8 above about in-place follow-up edits to the canonical manifest.

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gates follow construction; the readiness records are not
independent mathematical approval.
