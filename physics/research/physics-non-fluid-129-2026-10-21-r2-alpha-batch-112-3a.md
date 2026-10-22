# Batch 112 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-112`.

## Scope and historical evidence

Read the dispatch order, frozen scope, reader report/findings, refuter report, pre/post snapshots and workspace rules. Scope owes exactly reader:112:1–2 and refuter:112:1–2, all on the endpoint example. There are no touched/page decisions. Pre/post snapshot item, contract and manifest fingerprints agree for all seven carriers; the reader was read-only. Reports are evidence, not verdicts. All items are mathematical model calculations, with no empirical claims.

## Completed review, in dependency order

`lem-qsmx-l2-fourier-unitarity`: complete CRITICAL risk review recorded in the owning contract. Read the complete carrier and five direct suppliers: `def-countable-choice`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, and `thm-fourier-basis-and-parseval-on-the-n-torus`. Exact uses: angle rescaling k=2πx, linear-first pairing, inverse coefficient isometry and its finite-subset-net series, scalar completeness transferred through that isometry, then two-coordinate completeness and tail truncation. Countable Choice is retained; null representatives, empty support and the zero sequence are covered. No defect found. No Fourier external text is invoked instead of the published local theorem.

`thm-qsmx-open-ising-quadratic`: complete HIGH risk review recorded. Read the exact six direct suppliers and all five proof steps. The Pauli products, skew coefficient factor i/4, real orthogonal CAR transformation, commuting occupation projections and bit-flip isometries establish the full 2^N occupation basis with multiplicity one. Published `lem-qsm-models-diagonal-occupation-trace` Statement and proof 1.2 apply to the finite fermionic set with mu=0, beta>0, q_r>0 and finite sum, including q_r=1. The energy shift yields the cosh factors. Signed couplings, N=1, all-zero coefficients and zero modes pass. Supplier real-skew proof pairs the real kernel of even dimension and counts each positive singular value twice. No defect found.

Diagram review: `def-qsmx-transverse-ising-majoranas` Remarks has one TikZ path for N=4: three adjacent bonds, four onsite terms, no wraparound edge. Labels and conventions match the exact Definition; the proofs do not depend on the picture. No other diagram has been encountered in the assigned carriers.

`thm-qsmx-ising-bulk-symbol-gap`: complete CRITICAL risk review recorded after the finite-chain review. Read all six steps, all nine direct suppliers and the contract citation records. The three new direct suppliers are `def-bounded-linear-operator`, `def-hilbert-space-adjoint`, and `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`; their full definitions fix the operator domains, linear-first adjoint and lambda I-T resolvent sign. Shift reindexing gives exactly the displayed symbol. Outside-band inverses are uniformly bounded by compactness; inside-band packets use positive-measure arcs and a fixed eigenvector, including a=0. The lower bound from a bounded inverse gives the required contradiction. For hJ<0 the minimum shifts to pi, while hJ=0 gives constant bands. Both directions of gap-zero iff |h|=|J|, including h=J=0, are valid. No ground-state or thermodynamic assertion is added. No defect found.

`ex-qsmx-ising-classical-and-field-limits`: complete CRITICAL risk review recorded. Reviewed the complete description and four verification steps against its four direct suppliers. Explicit X/Z basis labels and finite minimization give precisely the stated endpoint configurations; N=1 and both field signs are covered. The finite trace use has beta>0 and explicit Countable Choice (Given/A1). Polynomial matrix entries and the factorial majorant establish an entire matrix exponential and real-analytic trace for each finite N; the Hermitian spectral exponential makes its real trace strictly positive. At beta=0 and at h=J=0 the trace is 2^N. This calculation does not assert a thermodynamic limit. No mathematical defect found.

## Routed dispositions and repair

- `reader:112:1` and `refuter:112:1`: `confirmed_nonfatal`; one underlying defect, references heading misnamed. Changed `## Statement references` to `## Example references` as required by SCHEMA Item bodies and the explicit example in `../tools/STATEMENT-FIRST.md`.
- `reader:112:2` and `refuter:112:2`: `confirmed_nonfatal`; one underlying defect, argument heading misnamed. Changed `## Proof` to `## Verification` as required for kind example.

Each finding maps to exactly one closed defect row; the two refuter decisions explicitly alias their reader counterpart. Repair confidence is 1. No reader edit is accepted/amended/reverted because the reader made none and the frozen scope has no touched carrier. No new decision is invented for a risk-only item.

Only two heading lines changed in the example. Public Example, mathematical argument, references, dependencies, provenance and manifest statement stay identical. Contract derivation IDs stay valid and complete risk reviews are added to the four routed high/critical items. There is no material proof rewrite and no prior judge record in the example. No public-interface change triggers consumer repairs.

## Source evidence and review limits

Read current direct supplier statements/definitions, relevant proofs and owning contract citations. All eight imported direct suppliers match `research/math-imports.json` pins; all six unedited batch item raw hashes match the immutable pre/post snapshot. The example pre-repair raw hash was `cdfce022034c4a0455c69a4b512b0324ada0cbc3e1066c158f65a938d6a6dfa8`, exactly the snapshot item hash; the routed observation fingerprint is a distinct carrier fingerprint, not that raw hash. No historical preimage is missing.

Retrieved the relevant passages from [Mbeng–Russomanno–Santoro, arXiv:2009.09208v2](https://arxiv.org/pdf/2009.09208), §6.2 pp.39–40 Eqs.(154)–(160) and §3.1.1 p.21 Eqs.(79)–(80). They provide contextual Majorana conventions and gap discussion; the latter explicitly qualifies boundary-sector and thermodynamic uses. The complete local algebra supplies the all-real-coupling and finite-N claims independently.

Retrieved [Claeys, Quench dynamics in the Transverse Field Ising Model](https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf), §6 pp.10–12, Eqs.(49), (57)–(68): the notes use a different field sign and parity-dependent periodic momenta. These conventions are not substituted for the explicitly defined local open chain. The displayed dispersion agrees after the local convention is derived. These are selected source passages, not cover-to-cover retrieval or a full external-source audit. No imported supplier's transitive foundations were comprehensively re-audited.

## Dependency and published-content disposition

The only in-run cross-batch edge remains page `qsmx-transverse-ising-spectral` → `qsmx-quasifree-gases`, recorded in the owning batch input. Opened the current supplier page and checked its inventory and requires. This is exposition context only: no batch-112 proof uses its five draft items. No item edge changed. The batch input's existing qualified `verified` status remains unchanged; no input edit or refresh is needed. Added the corresponding scoped continuation note to `briefs/tasks/frontier-dependency-ledger.md`.

No defective published supplier was identified in the reviewed uses, so no published-consumer ledger entry or published edit is needed. No withdrawal, outside consumer repair, missing prerequisite, escalation or blocker remains in this dispatch. Stable IDs and page inventory are preserved.

## Local checks

All commands below ran from the physics workspace, with exit code 0:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-112.proof-contracts.json`: before risk-record authoring, identified one HIGH and three CRITICAL items (7 total routed; 0 errors).
- Same risk command with `--require-reviewed`: after all four substantive records, 0 errors, 7 routed.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/ex-qsmx-ising-classical-and-field-limits.md`: 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/ex-qsmx-ising-classical-and-field-limits.md`: 1 file, no YAML/math errors.
- `node tools/physics-support/proof-layout.mjs items/ex-qsmx-ising-classical-and-field-limits.md`: after the final item edit, 1 item, 4 steps, 0 defects.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-112.proof-contracts.json --strict`: 7/7 checked, 0 errors, 1 advisory `shotgun-bracket` warning in unchanged bulk step 1.1. The cited facts there supply the finite coefficient convention, Fourier Hilbert-space structure, shift norms, boundedness and adjoints; symbol/eigenvalue algebra in later uncited steps uses earlier steps. This warning does not identify an invalid citation or inference and needs no edit.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/physics-b112-defect-rows.json`: appended two fixed nonfatal rows and refreshed the generated view under the tool's append lock.
- Focused Python assertions: all eight direct import hashes match pins; six unchanged carriers match snapshots; pre/post fingerprint maps are identical; exactly four owed decisions exist and each references exactly one fixed ledger row.

No judge, stamp, self-certification, agent dispatch or gate battery was initiated. The engine must stamp current decision hashes and perform its ordinary gate battery. Local work is complete; no further authored repair is proposed.

