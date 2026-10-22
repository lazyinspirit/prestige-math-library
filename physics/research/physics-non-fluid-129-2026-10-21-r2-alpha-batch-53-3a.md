# Batch 53 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-53`; owned batch: 53.

## Dispositions

Exactly four obligations are decided in the adjacent decisions JSON. The touched periodic-flux theorem and A-page reader corrections are accepted with repair confidence 1. Both refuter findings on the continuum example are confirmed nonfatal and repaired with confidence 1. No reader findings were routed. The untouched risk-only items create no extra decisions.

- `touched:53:thm-nrqmx-periodic-flux-spectrum`: The reader corrected both vertical Hamiltonian codomains in the integer-flux square to L2(S1). The upper row remains H2_per, U_j preserves that domain, and step 4.1 proves T_(alpha+j) U_j=U_j T_alpha. Current raw carrier equals the native post-reader hash; statement, proof and prerequisites are unchanged.

- `page:53:nrqmx-magnetic-geometry`: The page now locates the increasing-phi orientation convention in the ring theorem Remarks, where it is explicitly stated. The Statement gives the circulation and the Remarks specify its orientation. Current page equals the native post-reader hash; inventory and physical claims are unchanged.

- `refuter:53:1`: Verification 1.1 omitted the form-domain premise in the converse application of the closed-form representation theorem. For a=E0/Eref>0, Mhat<=Mhat^2/a, so square-integrability of Mhat F implies finite form energy. Added this estimate before the variational identity; no claim or domain is narrowed.

- `refuter:53:2`: Verification 3.1 cited Tonelli as though it identified the spectral measure. Added P(S)F_n=1_{M_n in S}F_n, projection properties, strong countable additivity, regular finite scalar Borel measures, and its exact spectral-integral action and domain. Spectral uniqueness now identifies P, after which Tonelli gives the asserted pushforward and half-line changes of variables give the density.

- Risk-only `lem-nrqmx-landau-form-diagonalization`: The Remarks wrote F(k,dot) in the oscillator coefficient pairing although F is declared with coordinates (xi,k). Corrected it to F(dot,k), pairing in xi at fixed k. Proof, statement, dependencies, unitary diagram and form domain are unchanged. This risk-review-only correction creates no extra routed obligation.

## Independent mathematical review

Read the dispatch order, scope, reader report/findings, refuter report, native pre/post snapshots, all twelve current carriers, both pages, and all distinct direct prerequisite Statements/Definitions. Completed reviews in the generated dependency order: level-0 magnetic data and periodic domain; level-1 planar form and closability; level-2 three-dimensional form; level-3 Landau, Pauli, periodic spectrum; level-4 ring and continuum; level-5 half-flux. Each HIGH/CRITICAL item's specific complete risk_review is in the owning proof contract. The ordinary-risk postulate was read as an adopted physical assumption with explicit units, mathematical conditions, and a separately qualified optional Pauli model.

The exact draft suppliers `thm-nrqmx-closed-form-representation` and `thm-nrqmx-interval-unitary-boundaries` were read through their current complete proofs. The former constructs the inverse positive Riesz operator and its spectral square roots to identify the variational operator domain; its nonnegative-form case applies after normalization by the fixed positive reference energy. The latter uses the surjective four-coordinate trace map and finite-dimensional isotropic boundary spaces; its swap matrix gives precisely equal endpoint values and derivatives. AC and Countable Choice are retained for representation, and AC/CC/DC for the periodic boundary realization. No outside supplier repair is required.

Checked the exact Fourier rescaling, first-variable-linear pairings, oscillator coefficient domain, Lebesgue product identifications, Fubini/Tonelli, DCT, compact smooth density and cutoffs, endpoint traces, integration by parts, relative bounds and Kato–Rellich, spectral uniqueness, curl and componentwise product rule. Weighted coefficient closures use positive lowest energy, dense finite smooth coefficient families and Schwartz cutoff estimates; they do not assume bounded Landau coefficients. The three-dimensional cutoff identity follows by the same Schwartz Fourier/oscillator calculation as in the planar proof. The planar Hamiltonian's converse square-weight condition implies form membership immediately since E_n>=E0>0. The ring resolvent maps into the full operator domain and the gauge-removal ODE is checked in both directions. Pauli commutator signs give the negative spin term on the compact smooth core only.

Continuum endpoint checks: normalized bounded-support coefficient indicators give approximate eigenvectors even at E0; the two open longitudinal half-lines have the displayed inverse Jacobians, and their omitted singleton preimage has zero mass. Scalar spectral measures have total mass ||F|| squared; summing the nonnegative band measures preserves absolute continuity. Vanishing field is excluded. Half flux has exactly two minimizing integers (0,1), while zero flux has exactly one (0). These arguments do not use measured inputs, apparatus assumptions, sampling models, or invented precision. All physical consequences remain deductions under the adopted ideal models.

Reviewed all three scoped diagrams: the planar sequence of Fourier/shear/coefficient unitaries, the corrected integer-flux commuting square, and the ring schematic with its excluded core and positive angular orientation. The proofs are independent of these drawings. No missing diagram is needed for a deduction.

## Historical comparison and synchronization

Native pre/post snapshots differ only at the periodic-flux item and magnetic A page. Current periodic-flux raw hash is `4c5aa8d1228c62080ebd3c8952ef7d506142ff6387434dcf1795ae1e493a723f`, matching post (pre: `5b2e9387e0b3278514f5a12c434536461cb70875a8295c95088076eddd1d52a2`). Current page raw hash is `f475b76203a90b11ef4f2e140c385adc69c74259bb98ad56c9c66054e30ea9e0`, matching post (pre: `d1b76307a892b71f94a597b11fd5971faf3bc8498c7bf4238a8d226a2a6aa84b`). The specific deltas are described by the original reader report and independently checked against current types/text; no claim of recovering all original pre-reader bytes is made. The continuum's pre/post raw hash is unchanged at `19f563ea2a2eb61e3e232d83f35f1a3d49cbe42197467cd9a4379991220ce96a`; the routed refuter fingerprint is retained in the immutable scope, and both original omissions were present in the source reviewed before repair.

Updated continuum contract derivations 1.1 and 3.1 to the actual repaired steps. Statement/Example, Definition, physical scope, dependency roles and empirical qualifications are unchanged throughout this adjudication. The page manifests mirror statements/dependencies/provenance, not proofs or Remarks; no manifest mutation is needed. Generated proof provenance remains accurate; the changed items have no judge record to invalidate. No consumer interface event is introduced. Stable IDs and all inventories are retained; no withdrawal. The frontier dependency ledger records the checked owned supplier uses. Imported and published content remains read-only; no defective published supplier was found, so no published-ledger row or lock is needed.

## Sources and reading limits

Primary mathematical evidence is the exact local prerequisite statements above; in-run supplier proofs were independently read, without treating earlier reviews or readiness records as verdicts. The model formulas were checked in [Tong, Applications of Quantum Mechanics](https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf), §1.1.1 printed pp.4–5 (minimal coupling), §1.2 pp.7–9 (oscillator shift and longitudinal term), §1.3.1 pp.14–15 (periodic ring and integer gauge phase), and §1.5 pp.23–24 (spin coupling). These are model conventions, not empirical premises; the local proofs supply the domain and spectral-type arguments. The signed-field extension uses |qB| explicitly and the local angular measure is dphi rather than arclength.

The web fetch of Tong timed out; curl retrieved the PDF and PyMuPDF supplied those passages. Nair's web index/nearby Aharonov–Bohm passage was available, but full-PDF curl retrieval timed out and the partial PDF was unusable. No complete Nair passage review or Harrow retrieval is claimed here; their earlier reader/refuter source accounts remain independent evidence. An unavailable `pdftotext` utility was replaced by PyMuPDF. No physical source quotation is used as a proof supplier.

## Local checks

All commands below completed successfully on the final relevant carriers:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-nrqmx-landau-3d-continuum.md` and the same command for `items/lem-nrqmx-landau-form-diagonalization.md`: reflowed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-nrqmx-landau-3d-continuum.md items/thm-nrqmx-periodic-flux-spectrum.md`: 2 checked, 0 failing. Separate precheck of the planar lemma: 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/lem-nrqmx-landau-form-diagonalization.md items/ex-nrqmx-landau-3d-continuum.md items/thm-nrqmx-periodic-flux-spectrum.md`: 3 items, 11 steps, 0 defects. This was run once after the final item edits and reflow, in one batch.
- `node tools/physics-support/rendercheck.mjs items/ex-nrqmx-landau-3d-continuum.md items/thm-nrqmx-periodic-flux-spectrum.md library/non-relativistic-quantum-mechanics/nrqmx-magnetic-geometry.md`: 3 files clean. Separate rendercheck of the planar lemma: 1 file clean.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-53.proof-contracts.json`: initial routing inspected; final `--require-reviewed` pass reports 0 errors, with all eleven HIGH/CRITICAL reviews complete.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-53.proof-contracts.json --strict`: final 12/12 items checked, 0 errors, 0 warnings.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/batch53-defect-rows.json`: appended five closed fixed rows and refreshed the generated view. Each routed obligation references its own row; the fifth row records the risk-only coefficient typo. An initial append rejected the unsupported `citation-mismatch` taxonomy label and wrote nothing; changing it to the valid `citation-inaccurate` allowed the successful append. No mechanical failure was logged as a content defect.

A mistaken help invocation of nonexistent `proof-contracts.mjs` returned MODULE_NOT_FOUND; the actual singular `proof-contract.mjs` command above passed. No engine gates, judgment, stamps, self-certification, dispatch, or stage transition was initiated.

## Blockers

No unresolved mathematical or physical prerequisite or outside consumer repair identified. Final local validation results are recorded below.
