# Batch 64 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`. Role: alpha. Group: `batch-64`. Covers: batch 64 only.

## Disposition

Six decisions are supplied: five touched carriers and `refuter:64:1`. Four reader repairs are accepted; the hydrogen example repair is amended to fix its negative-index harmonic convention; the zero-dimensional finding is confirmed nonfatal and repaired. No substantial prerequisite blocks these decisions. No published content, imported supplier, root mathematics carrier, judge stamp or engine state was changed.

All eight CRITICAL items have specific completed risk reviews in the owning proof contract. Decisions contain `repair_confidence: 1`; eight confirmed defects have closed rows in `research/defect-ledger.jsonl`. Risk-only review creates no extra decision.

## Historical comparison

Exact pre-reader carriers are available at Git commit `66670c5b156d475413b101f6a7fda928a4702859`, paths `physics/items/<id>.md`. For each of the five touched carriers, I computed the raw SHA-256 of that Git blob and verified equality with `step3-hash-64-pre.json`. Every review-start touched carrier matched its `step3-hash-64-post.json` raw SHA-256. The delta is therefore known, rather than inferred solely from the reader report. The scope/refuter observed fingerprint is an engine structured-carrier hash, not the raw-file digest. No unbound historical disposition or owner exception was used.

Reader edits changed the Tong captions in the spectral definition, vacuum postulate and scope remark; the MIT captions in the selection theorem and hydrogen example; and selection fact F2 describing the ambient self-adjoint angular operator. These are accepted on current proof and source evidence. Alpha additionally changed the model Definition and hydrogen F1; no proof argument or numerical output was rewritten.

## Decisions and mathematical evidence

### `refuter:64:1` — `confirmed_nonfatal`

Definition(b) permits W={0}; cutoff-relative-bound Statement requires d>=1. The actual current supplier proof and declared domains were independently inspected. The zero-space branch closes locally: tensor space/domain={0}, unique operator equals its adjoint, quadratic lower bound is zero; no trace-one preparation or eigenvector exists. Positive-dimensional physical readings are explicit. All direct item/reference consumers are in batch64 and retain valid uses; level-pair consumers imply d>=2, the drive uses an arbitrary-H bounded-Dyson supplier, and compression statements are vacuous at zero dimension. A-page summary was corrected to qualify the positive-dimensional supplier citation.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-zero-dimension`.

### `touched:64:def-nrqm-light-matter-framework-spectral-transition-and-detection` — `accepted_repair`

Definition(c)-(e) uses linear-first coefficients, finite push-forward density and a positive denominator for M nonzero. Physical normalization additionally requires eta_0 nonzero. Ideal window probability follows from the one-photon energy push-forward, not from a laboratory detector. Tong section4.4.2, printed121-122, supports the narrowed source caption. Exact historical carrier: Git HEAD:physics/items/def-nrqm-light-matter-framework-spectral-transition-and-detection.md matches step3-hash-64-pre.json; review-start carrier matched step3-hash-64-post.json.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-spectral-tong-caption`.

### `touched:64:pthm-nrqm-light-matter-dipole-selection-rules` — `accepted_repair`

Proof2.1 decomposes Q_q*h_lm into harmonic degrees l+1 and l-1, treating l=0 separately; its azimuthal weight is m+q. Ambient self-adjoint L_z on the exact diagonal domain permits the orthogonality argument, and the product lies in its finite-span core. Reflection preserves maximal Q_q domains; compression preserves the selected entries. Only necessary conditions are claimed. Exact supplier sphere-laplacian(a)-(c) and MIT Chapter9 section3 pp18-20 support the reader corrections. Exact historical carrier: Git HEAD:physics/items/pthm-nrqm-light-matter-dipole-selection-rules.md matches step3-hash-64-pre.json; review-start carrier matched step3-hash-64-post.json.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-selection-lz-domain`, `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-selection-mit-caption`.

### `touched:64:post-nrqm-light-matter-vacuum-preparation-and-emission-assumption` — `accepted_repair`

Postulate(i)-(vi) separately adopts vacuum preparation, evolution and ideal projection reading, with no rate or measurement record inferred. Upward orthonormal level pair ensures positive matter dimension. Current Tong caption matches section4.4.2 energy relation and field-theory discussion; Binney Box9.2 treats spontaneous emission as additional quantum-field content. Exact historical carrier: Git HEAD:physics/items/post-nrqm-light-matter-vacuum-preparation-and-emission-assumption.md matches step3-hash-64-pre.json; review-start carrier matched step3-hash-64-post.json.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-vacuum-tong-caption`.

### `touched:64:ex-nrqm-light-matter-hydrogen-dipole-angular-factors` — `amended_repair`

All explicit angular integrals checked in the linear-first convention: cos^2 gives 4*pi/3 and sin^2 gives 8*pi/3; the spherical entries have the stated opposite signs, and the forbidden Fourier characters integrate to zero. Reader MIT caption repair accepted. Alpha additionally corrected F1 positive/negative-index ranges to match associated-polynomial-normalization(c). Statement, Verification and numerical outputs are unchanged. Exact historical carrier: Git HEAD:physics/items/ex-nrqm-light-matter-hydrogen-dipole-angular-factors.md matches step3-hash-64-pre.json; review-start carrier matched step3-hash-64-post.json.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-hydrogen-mit-caption`, `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-hydrogen-negative-m`.

### `touched:64:rem-nrqm-light-matter-scope-and-empirical-status` — `accepted_repair`

The remark accurately separates adopted cutoff/radiation/vacuum/drive models, locally proved conditional consequences and absent empirical data. Its Tong caption now agrees with section4.4.2; no model interface or empirical qualification changed. Exact historical carrier: Git HEAD:physics/items/rem-nrqm-light-matter-scope-and-empirical-status.md matches step3-hash-64-pre.json; review-start carrier matched step3-hash-64-post.json.

Closed defect IDs: `physics-cm-qm-gr-79-2026-10-11-3a-batch-64-scope-tong-caption`.

## Dependency-ordered risk reviews

The lemma was reviewed first, followed by the finite-level model, level-15 carriers, level-16 carriers, level-17 carriers and level-18 carriers. Each authored argument was checked against its actual mathematical suppliers, separately from reader/refuter verdicts. The review notes below state the current claim, boundary cases and source uses; they are not proof stamps.

- `lem-nrqm-light-matter-first-order-photon-energy-law`: Reviewed all eight steps and scalar approximate-identity supplier clauses (a),(b). Push-forward is proved for arbitrary finite coefficients rather than importing restricted emission clause (c). The countable kernel zeros pull back to null energy spheres by the polar formula; positivity and normalization require M nonzero, not eta_0 nonzero. For complex tests use real/imaginary parts of fJ; denominator tends to positive mass. Tail test is correctly shifted by Delta. AC includes supplier choice assumptions; no empirical premises or dynamics asserted. Reader/refuter report no finding for this carrier.

- `pthm-nrqm-light-matter-dipole-selection-rules`: Checked every step, multiplier domains, charge units and linear-first reversed pairing. The harmonic product decomposes into degrees l+1 and l-1 using G=(a dot grad h)/(2l+1), with G=0 at l=0; its chart weight is m+q. Corrected F2 uses ambient self-adjoint L_z and its finite-span core, matching sphere-laplacian supplier (a)-(c). Reflection preserves maximal domains and parity; projection leaves each selected bound-state entry unchanged. Necessary conditions do not imply nonzero radial factor. MIT Chapter 9 section 3 supports orthogonality and chart dependence, not a dipole theorem; Binney section 9.3.3 supports the physical context. Reader changes accepted, refuter no finding on this item.

- `pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients`: Checked all five steps and current vacuum-Dyson proof. An upward orthonormal eigenpair implies dimension at least two, satisfying d>=1 in the relative-bound and Dyson suppliers. Real eta and linear-first pairing give c_j without conjugation in emission and conjugate c_j in absorption; finite-sector bounds justify the absorption integral even for g outside D(epsilon). Q_b commutes with free evolution and annihilates vacuum, so contraction of the Dyson remainder gives epsilon_2(2||A_b||+epsilon_2). Although supplier Statement(d) uses T, its proof8.1 proves the sharper time-t tail actually used here. Zero coupling/time or M=0 entails no normalization. Exact probability, unnormalized coefficient and rate are distinct; no measured inputs. Reader/refuter no finding.

- `pthm-nrqm-light-matter-stimulated-dipole-drive-transitions`: Checked all five steps against current driven amplitude, circular Rabi and linear rotating-wave suppliers. Finite norm-continuous control also satisfies bounded-control hypotheses; K bounds V/hbar, not full H/hbar. Cosine components retain phase omega*s+theta; resonant quotients use tau and nonzero counter denominator is required for its bound. Hermitian real-field reverse amplitude is minus conjugate. Direct Pauli substitution gives Omega_1=-2*d*E0/hbar; RWA requires omega nonzero. At omega=0, A^2=q^2I gives the explicit constant propagator and q=0 identity. Dipole scalar d in (d) is the local dipole parameter, distinct in units from the preceding dimension d=2. No vacuum or empirical observations inferred. Reader/refuter no finding.

- `ex-nrqm-light-matter-hydrogen-dipole-angular-factors`: Checked all six steps and normalization, Rodrigues, sphere-integral and coordinate-domain supplier statements. Fixed F1: positive m formula must be restricted to 0<=m<=l; negative m uses (-1)^m conjugation, so Y_1,-1 has positive sign. Integrals cos^2 and sin^2 are 4*pi/3 and 8*pi/3; forward spherical entries are minus/plus 1/sqrt3, reverse opposite-component entries plus/minus 1/sqrt3. Nonzero Fourier characters and parity give each listed zero; polar chart excluded cuts are null, so endpoints do not change integrals. Oscillator recurrence yields ell/sqrt2 and zero. No radial factor or rate claimed. Reader MIT caption repair accepted with this additional nonfatal F1 repair; public Example and proof unchanged.

- `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading`: Checked all three steps and exact scalar-kernel supplier. The coefficient identity divided by t gives eta^2 times a density-kernel integral; continuity at interior Delta gives 2*pi*eta^2*J(Delta)/hbar, and above cutoff the distance Delta-Lambda gives O(1/t). Cutoff endpoint is excluded; zero coupling gives zero coefficient and rate. Density nonnegative a.e. follows from being the density of nu_b; continuous representative at Delta makes its point value meaningful. Units yield inverse seconds. No inference from a finite-time exact-probability bound to an all-time decay law; no sampling, counts or empirical premises. Reader/refuter no finding.

- `ex-nrqm-light-matter-two-level-dipole-drive-check`: Checked all four steps and exact driven model, RWA and Pauli supplier statements/proofs. Matrix identification gives Omega_1=-2*d*E0/hbar. At positive-frequency resonance, full amplitude contains tau plus (exp(2*i*omega*tau)-1)/(2*i*omega); its small-time coefficient is four times the co-component coefficient. Only the co-component matches leading sin^2(d*E0*tau/(2*hbar)) of averaged dynamics. Error bound is 2*epsilon with frequency detuning delta=omega0-omega distinct from energy Delta. Initial up/down reversal does not change this two-level transition modulus. Positive declared parameters exclude denominator-zero branch; zero elapsed-time limit is valid. No measured parameters or spontaneous emission asserted. Reader/refuter no finding.

- `texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison`: Checked all four steps. Same positive continuous densities at interior Delta give equal rates (including eta=0). For each fixed t>0, equality of Borel laws implies equality of weighted densities: the integrable difference has zero integral on every Borel set, so its positive/negative level sets are null; cancel K_t>0 a.e. to obtain positive proportionality, contradicting the stated hypothesis. Therefore a Borel discriminator exists, with no promise for a finite sample. Positive-measure off-Delta windows have positive finite-time probability, whereas Dirac law gives zero; only windows bounded away from Delta have the stated tail limit. Formal laws include zero coupling; normalized one-photon preparations require nonzero coupling. L is a separate stipulated Dirac model, not an L1 density or Fock state. No data, apparatus or statistical confidence invented. Reader/refuter no finding.

## Consumer maintenance

The only public Definition change is the zero-dimensional clarification in `def-nrqm-light-matter-framework-finite-level-coupled-model`. A search for its canonical ID and alias across items and pages found all direct/reference consumers inside batch 64. Their actual uses were read:

- The spectral definition, vacuum postulate, emission theorem, golden-rule theorem and spectral thought experiment specify an orthonormal level pair, so their hypotheses imply dimension at least two. The positive-dimensional suppliers apply exactly as before.
- The dipole-drive definition uses the bounded-Dyson theorem on an arbitrary complex Hilbert space; zero space admits its unique trivial propagator and no normalized state. Stimulated transitions specify an orthonormal eigenpair, and the two-level example explicitly uses dimension two.
- The selection theorem transfers to any selected bound-state subfamily; at the empty subfamily the compression/every-entry claims are vacuous. The hydrogen example uses explicit nonzero bound states.
- Both scope remarks remain accurate. The A-page summary previously attributed the coupled self-adjointness to the positive-dimensional supplier without a dimension qualification; I made the necessary surgical correction, pointing to the definition for the zero case. No consumer Statement/Definition needed changing, so no further propagation hop was required.

The model manifest Definition was synchronized with the carrier; its ID, dependencies, classification, physical scope and page inventory remain intact. Five proof-contract citation records now quote its current Definition. Hydrogen F1 correction changes only a fact, leaving its public Example and Verification unchanged. No judge record was present in either Alpha-edited item. Consumer dispositions are recorded in `briefs/tasks/frontier-dependency-ledger.md`.

## Sources independently checked

- [Tong, Quantum Mechanics](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf), section 4.4.2, printed pp. 121–122 / PDF pp. 124–125: photon-energy relation, relation to hydrogen energy differences, limitations of a photon Schrödinger description and field-theory discussion. This supports the corrected captions; it does not establish the particular cutoff Hamiltonian or its empirical truth. The browser supplied the relevant full passage; a separate local HTTP fetch returned 403.
- [MIT 8.05 Chapter 9](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf), section 3, pp. 18–20: chart operators, orthogonality and azimuthal dependence. The current captions are appropriately narrower than a dipole-integral or selection-rule attribution. The exact PDF was retrieved and its pp. 18–19 read with PyMuPDF.
- [Binney and Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf), sections 9.3.1–9.3.3 and Box 9.2, printed pp. 214–220 / PDF pp. 222–228: continuum-density input, prescribed-field approximation, dipole expansion, stimulated coefficients, separate vacuum mechanism and necessary angular restrictions. These sections were read from the author-hosted PDF. They supply context; local suppliers prove the displayed domain, Dyson and kernel assertions.

Local exact supplier statements checked include the scalar approximate-identity theorem (a),(b),(c); cutoff relative bound (a)–(c); the vacuum-Dyson theorem and its graph-domain proof, especially proof 8.1 for the time-dependent tail; closed creation/contraction domains; transverse/free Fock domains; direct-sum and sector projections; driven amplitude, circular Rabi and linear rotating-wave theorems; harmonic-polynomial, normalized-harmonic and diagonal angular-domain statements; Coulomb coordinate domains and factorization; angle/polar integrals; reflection/change-of-variables, measure and inner-product definitions; and the stated physical postulate/state/observable/detection readings. Choice assumptions are carried; AC entails the supplier DC prerequisite.

No archived Pratt PDF was independently retrieved here, and I do not claim that source was audited. Its unretrieved captions do not supply the mathematical deductions, which were checked locally. I did not independently retrieve every contextual Fitzpatrick/MIT Chapter 6/7 source or audit every transitive foundational proof. This limitation is retained explicitly rather than converted into source-fidelity acceptance.

## Owner alerts outside routed obligations

These alerts are not additional decisions and have not been repaired or closed under this dispatch:

1. `qm-light-matter-and-spectral-transitions-examples` (draft B-page prose, no page obligation routed): its summary assigns `1/sqrt(3)` to both listed spherical entries. The current example correctly has minus/plus signs; in particular `<Y_11,Q_+Y_00>=-1/sqrt(3)`. Route a page-only correction to distinguish signed values from their common modulus. The numerical example and the routed amended decision are sound.
2. `post-nrqm-approximations-static-finite-level-dipole-coupling` clause (iii), outside batch 64: it permits dimension zero yet states a bound using the supremum over unit vectors of W. That set is empty for W={0}; the real supremum convention does not define that bound. The owned definition does not use this bound and proves the zero coupled-operator case directly. Route a supplier correction using the unit-ball norm convention or a separate zero-space clause; do not alter imports or unrelated consumers here.
3. `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading` source caption: the claimed explicit warning that linear probabilities cannot hold for arbitrarily large times was not found in the inspected Binney section 9.3.1, printed pp. 214–215. The local theorem already correctly distinguishes its coefficient limit from exact probabilities. Route source-caption enrichment/correction separately; no untouched/unflagged decision is added. The risk review concerns the mathematically valid current deduction and retains this source limitation.

No defective published carrier was identified; the published-consumer ledger was left unchanged. These source/page alerts do not constitute missing prerequisites for the six routed decisions. Owner disposition remains pending on them.

## Local checks and handoff

- Initial risk report: 0 errors, 8 CRITICAL items routed. Final `risk-report.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json --require-reviewed`: 0 errors, 8 items.
- Reflow of the two Alpha-edited items: both unchanged. Precheck on all six Step-3 changed item paths: 3 checked, 0 failing (the theorem, example and postulate; definition/remark carriers have no proof-like section).
- Rendercheck on those six items and the affected A-page: 7 files, no YAML or KaTeX defects.
- Final proof-layout command batched all six changed item paths once after final item edits/reflow: 6 items, 12 steps, 0 defects.
- Required report and decisions JSON written; one decision per owed obligation. Local JSON/ledger consistency checked separately. No gate, hash stamping, judge cycle, publication or commit was initiated.

Coverage honesty: initial combined reads and some oversized outputs were truncated; bounded continuation reads were used. The strict once-per-file reading instruction was therefore not fully met. The report records actual checked source passages and local deductions, not an audit of uninspected source material.

Handoff: engine may stamp the six decisions and run its own gate battery. The three explicit owner alerts remain available for routing.
