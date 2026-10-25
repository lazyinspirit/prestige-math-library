# Batch 48 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Group: `batch-48`. Scope assignment group remains `j`.

The scope owes exactly `refuter:48:1` and `refuter:48:2`; there are no touched, page, or reader obligations. Pre/post item, contract, manifest and page fingerprints agree in all four snapshot rows: the reader made no changes. Review follows the generated dependency order, levels 2, 3, 9.

## Level 2: torus example

Reviewed `ex-qftx-finite-regulator-torus-ward-identity`, Verification 1.1–3.1, `def-finite-dimensional-q-exact-localization-data`, and `thm-finite-dimensional-q-exact-deformation-invariance` (including its differentiation and zero-derivative suppliers). The full coordinate exterior algebra is specified; periodic derivatives have integral zero, Q=d squares to zero, and QO=QS=0. The top coefficient is lambda-t cos(x), with derivative -cos(x); |lambda|+max_K|t|+1 is a constant L1 majorant on each compact parameter interval. Its integral is 4pi^2 lambda, including lambda=0. No arbitrary choice, parameter endpoint, continuum limit, or empirical conclusion enters. No diagram is present or needed.

The initial risk-report routes this item CRITICAL (8); its complete item-specific risk review is recorded in the owning contract. No defect, edit or additional decision obligation arises. Next: review the level-3 definition, both direct suppliers and the Pestun locator finding.

## Level 3: fluctuation-data definition

`refuter:48:1`: **confirmed_nonfatal**, repaired with confidence 1. The old locator wrongly associated the regulator qualification with §4.2. Independently retrieved [Pestun v3](https://arxiv.org/pdf/0712.2824), printed/PDF p.4: the relevant unnumbered paragraph lies between (1.5) and (1.6). Sections 4.2–4.3, pp.23–25, instead give the supersymmetry and combined gauge-fixed complexes. The corrected locator separates those uses explicitly and preserves the transformation and deformation citations. The matching source metadata in the owning pages manifest is synchronized. The refuter's fatal classification is not adopted: this is a real source-location error, but the definition already makes the regulator extra data and asserts no existence theorem.

Read the complete current Definition and its two direct suppliers: `def-qftx-susy-background-data` and `def-finite-dimensional-q-exact-localization-data`. The linearized-square claim holds at a Q-fixed configuration: differentiating Q applied twice leaves (dQ)^2 because the remaining second-derivative term contains Q(Phi*)=0. Its square commutes with dQ, so ker(dH) is preserved. Smooth sections, chosen Sobolev/operator domains, principal symbols, zero modes and determinant conventions are specified; no ellipticity or spectral determinant theorem is asserted. Zero graded summands and a zero operator introduce no exception. The only choice here is supplied model data; the background supplier retains its declared AC_omega dependence, and no new arbitrary choice is introduced.

Read the relevant source passages: Schwarz–Zaboronsky §§2–3, pp.2–7 (form identification, canonical volume and compact theorem); Pestun–Zabzine §1 (finite deformation and separate formal extension); Pestun pp.4,16–17,23–25; Peelaers §§1.1–1.2 background and localization assumptions. These do not certify a continuum measure. No TikZ diagram occurs in this definition. The complete CRITICAL (8) risk review is recorded in its contract. Definition, dependencies, provenance classification and physical scope remain unchanged, so this citation-only repair creates no direct/indirect interface propagation. Next: complete the level-9 Ward identity review and its separate locator finding.

## Level 9: fixed-regulator Ward identity

`refuter:48:2`: **confirmed_nonfatal**, repaired with confidence 1. The qualification is the unnumbered §1 p.4 paragraph between (1.5) and (1.6), not either equation. The corrected source locator identifies that paragraph and the pole-matching assumption. Source metadata in the owning manifest and the relevant coverage locators are synchronized. This is a citation repair: the full Statement, physical scope, Facts and Proof are unchanged. It is not a fatal deduction defect, because the theorem already assumes a separately supplied finite regulator satisfying every analytic and symmetry hypothesis.

Read the complete theorem and direct suppliers `def-qftx-susy-background-data`, `def-qftx-supersymmetry-fluctuation-complex`, `post-qftx-rigid-supersymmetric-background`, and `thm-finite-dimensional-q-exact-deformation-invariance`. The physical postulate supplies its lift/R split, source-ordered R bilinear, affine ghost rule and gauge-fixing conventions as adopted model data. The theorem preserves them without adding a second gauge-covariant Lie derivative. No empirical premise enters.

For the mathematical deduction, smooth even QV gives partial_t E=-(QV)E. QS=0 and (Q²V)E=0 give QE=0; the odd parity of V and QO=0 give Q(OVE)=O(QV)E. The top-degree identity has the volume form on the coefficient side. A compact parameter neighborhood of any interior point admits one L1 majorant; the common null set and measurable zero-extended derivative permit differentiation under the integral. Exact integrated Q-invariance gives Zprime=0, and the real and imaginary parts are constant on the interval. The proof does not infer nilpotence of Q. The zero-dimensional and zero-integrand cases remain valid; there is no endpoint, infinite-parameter, arbitrary-sector selection or continuum-limit claim.

Reviewed Folland's [Theorem 2.27(b), printed p.56](https://djvu.online/file/NPF4BEtSuqdFA), its proof and the compact-subinterval note, against the published local differentiation supplier and the finite-dimensional theorem's proof. Read the zero-derivative supplier's statement/proof as used on real and imaginary parts. Read Pestun §3 (3.1)–(3.3) and the combined complex passages; the other source passages distinguish the finite argument from formal field-space/saddle calculations. Source retrieval succeeded; local `pdftotext` was unavailable, so PDF reading used PyMuPDF extraction and web PDF text. These are this session's bounded readings, not a claim to repeat earlier whole-book/source audits.

The exact supplier quotation mirrors refreshed after current-content review are: post-qftx-rigid-supersymmetric-background, def-qftx-susy-background-data. They retain the original facts, uses and dependency roles; this is not supplier authorship or acceptance. The CRITICAL (10) risk review is complete. No diagram is present or mathematically required.

## Historical bindings, consumer record, and checks

Reversing only each exact locator edit reproduces its pre-reader raw item SHA256: definition `34eef261d83386030679f58ffbc674fcb0a662e03d01537925bf17f6bff07d21`; Ward theorem `1ebb5c94b5d98db7a57e1f85d12501ef29a63eecf4336e5b73cf732accc38eb9`. These equal the unchanged post-reader raw hashes. Both examples remain byte-identical to the snapshots. No missing historical byte binding or historical owner disposition is needed.

Both source corrections are frontmatter locator changes only. Public Definition/Statement, physical_scope, dependencies, empirical qualifications and proofs are byte-identical to their reviewed originals. No interface-change consumer repair is required. The Ward consumer was still checked against the current definition and the current batch-47 physical postulate; its exact contract supplier quotes are refreshed. The frontier-dependency ledger receives a scoped batch-48 current-use note, with supplier proof status retained as draft/conditional where applicable. No supplier or published original was edited; no published mathematical defect was identified.

Focused checks, all exit 0:

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-48.proof-contracts.json` initially: 0 errors, three CRITICAL items and one MODERATE item; repeated after the reviews with `--require-reviewed`: 0 errors, 4 items routed.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-48.proof-contracts.json --strict`: 0 errors, 0 warnings, 4/4 checked.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/def-qftx-supersymmetry-fluctuation-complex.md items/pthm-qftx-qexact-localization-ward-identity.md`: 1 proof checked, 0 failing; the definition has no proof body.
- `node tools/physics-support/rendercheck.mjs` on those same two explicit paths: 2 files, all YAML and KaTeX checks passed.
- Final `node tools/physics-support/proof-layout.mjs` on those same two paths, after all item edits: 2 items, 3 steps, 0 defects.
- Native defect-ledger append validated and appended one fixed nonfatal row per routed finding, with `caught_at_stage: 3a-adjudicate`, matching decision references and repair confidence 1.
- Exact decision inventory and preimage/raw-hash comparison: passed.

## Additional source metadata referral (outside routed findings)

The downloaded Peelaers PDF title page credits lectures by **Wolfger Peelaers**, notes by **Bruno Le Floch**, whereas the current source titles say “Vasilis Peelaers.” Equations (24)–(26) span PDF pp.4–5, beyond the stated pp.3–4. This appears in both assigned A items, the batch-48 source coverage, and the outside batch-47 `def-qftx-susy-background-data` and `post-qftx-rigid-supersymmetric-background`. The formal infinite-dimensional qualification in Pestun–Zabzine §1 is on PDF p.4, beyond the assigned metadata's pp.1–3. Source: [Peelaers/Le Floch title page and §§1.1–1.2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf); [Pestun–Zabzine §1](https://arxiv.org/pdf/1608.02953).

These additional bibliographic/pagination corrections are referred to the owner under the instruction to work only on routed obligations; they are not silently cleared by the two Pestun decisions. Suggested owner action: authorize a consistent source-metadata correction across batches 47/48 and the source-coverage entries, preserving all claims and proof status. No missing mathematical prerequisite or unresolved empirical inference blocks the two routed repairs. No judgment, hash stamp, publication, agent dispatch, or engine gate cycle was performed.
