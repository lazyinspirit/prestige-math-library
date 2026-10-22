# Batch 43 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-43`.

## Completed review checkpoints

- `lem-nrqmx-minimal-maximal-interval-laplacian-domains`: reviewed steps 1.1–4.1, all 15 exact direct supplier statements, and the reader/refuter evidence. The finite interval L2-to-L1 bound, Tonelli-before-Fubini argument, constant-distribution argument, four Hermite traces, and both directions of the two adjoint-domain identities are sound, including zero data. Choice assumptions and first-variable-linear convention match. Recorded complete risk review in the owning proof contract. No edit or decision obligation for this untouched item.

- `thm-nrqmx-von-neumann-extension`: reviewed steps 1.1–5.1 and all 12 exact suppliers. Scaling preserves the adjoint domain; the graph decomposition, W=C_A⊕(-V), no-fixed-vector argument, direct sum and inverse parameter recovery are sound. Equal-zero indices and the zero Hilbert space are included. Full AC supplies the Hilbert bases. Source context checked: Teschl §2.6 Theorems 2.25–2.26, pp.81–83; Costin §11.3 Theorems 11.3.6–11.3.7, pp.82–83. Complete risk review recorded; untouched item owes no decision.

- `thm-nrqmx-half-line-momentum-obstruction`: reviewed steps 1.1–5.1 and all 23 direct suppliers. The exact adjoint is -iD on H1; locally AC integrating factors give exp(-x) and exp(x), respectively. Only the decaying mode is square integrable, giving (1,0). The closure has the same adjoint, and meets the closed symmetric criterion. No boundary condition was silently imposed on its adjoint. Choice hypotheses are carried. Complete risk review recorded; untouched item owes no decision.

- `thm-nrqmx-interval-unitary-boundaries`: reviewed steps 1.1–4.1 and all 12 direct suppliers. Trace surjectivity gives full inverse-image domains; adjoint reversal and Green identity give M=M^omega. Scaled x=a+ib, y=a-ib coordinates have the written Green-form sign. The explicit orthogonal vector and determinant computations establish full projection and unitarity without an unstated finite-dimensional supplier. The reverse graph/annihilator calculation and uniqueness are valid. U=±I and zero traces are covered. Complete risk review recorded; untouched item owes no decision.

- `cex-nrqmx-formal-symmetry-insufficient`: **amended_repair**, confidence 1 (reader text retained; stale owning manifest corrected). Recovered the exact pre-reader carrier at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/cex-nrqmx-formal-symmetry-insufficient.md`; its raw SHA256 is `9a3c33e8fc5cdb98dacbdcb28e2c36ba1083e3215ca19c40d3584e8cd9b5b082`, exactly the pre snapshot. Current bytes have raw hash `b4c6507a896175b9d671c579098cad7f6b27ef183096a6311db7893138748c3a`, exactly the post snapshot. The delta defines the universal extension assertion and removes unexplained formal-Hermiticity wording; the existing half-line witness refutes both formulations. All three proof steps and eight suppliers checked. A self-adjoint extension is closed and contains the test operator closure, contradicting its (1,0) obstruction; Stone uses U(t)=exp(itA). No item consumer exists (searched items and library); sole B-page placement is unchanged. Synchronized owning manifest title/statement; proof contract remains exact modulo harmless whitespace. Complete risk review recorded. Closed fixed ledger row `physics-non-fluid-129-2026-10-21-r2-3a-batch-43-explicit-extension-assertion` and the touched decision record the completed repair.

- `ex-nrqmx-twisted-ring-spectrum`: reviewed all three steps, nine direct suppliers, the published twisted-momentum proof and cited matrix source. Nonzero real scaling preserves self-adjointness; composition gives precisely H2 and both twists. The matrix sends p=(1,exp(iθ)) to p and q=(1,-exp(iθ)) to -q. Conversely its equation separates into a in span(p), b in span(q), giving equality of boundary domains (an immediate implicit reverse inclusion). θ=0 includes the constant zero eigenmode. Complete risk review recorded; untouched item owes no decision.

## Published-page finding

`reader:43:1`, `qm-math-intervals-and-contacts`: **confirmed_nonfatal**. The final paragraph calls every item draft, while the canonical page and its listed supplier `thm-nrqm-intervals-twisted-periodic-momentum-domain` both say `status: published`. Assigned consumer `ex-nrqmx-twisted-ring-spectrum` depends directly on that theorem. The supplier's actual statement and proof supply precisely the self-adjoint operator and Fourier eigenfamily used by the example; the inaccurate publication-status sentence has no role in that deduction.

Disposition: **nonfatal-recorded**, closed scoped finding `physics-non-fluid-129-2026-10-21-r2-3a-batch-43-published-page-draft-status`. The published carrier is unchanged. Its mathematics-owner maintenance remains OPEN in `research/published-consumer-supplier-ledger.md`, including the deduplicated classification index. The owner should replace the final stale draft-status sentence with status-neutral wording that retains the distinction between mathematical premises and added physical assumptions. No mathematical supplier interface needs changing. The scope's `split-current` fingerprint binds current routing, not original reader-observed bytes; no historical source reconstruction is claimed for that page.

## Sources and coverage limits

Read all seven current assigned items, both frontmatter-only assigned pages, the routed published page, all six contracts, the reader report/findings, refuter report, pre/post snapshots, and all 36 distinct off-batch direct supplier statements/definitions. The definition of extension data fixes closed dense symmetric operators, first-variable-linear products, scaled kernels, Hilbert dimension under Choice, graph cores and trace realizations. The six proofs remain purely mathematical, without empirical premises or claims about nature. No TikZ/tikzcd diagram occurs in scope and no missing diagram is needed for these explicit operator/domain arguments.

The published twisted-periodic supplier proof was also read for the exact owned use; this is not a new publication audit or a re-audit of the full transitive mathematical library. Verified the 31 imported direct suppliers against their raw pins in `research/math-imports.json`; no imported supplier was edited.

Authoritative source passages consulted independently:

- [Teschl, Mathematical Methods in Quantum Mechanics (2009)](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), §2.6, Theorems 2.25–2.26 and their arguments (printed pp.81–83), and Problem 2.27 (p.84), which uses +iD; the local proof explicitly handles the opposite sign. §9.1 Lemma 9.4, its proof and regular-endpoint example (pp.184–185) give context for minimal/maximal realizations; the batch independently proves its exact -D² domains.
- [Costin, Functional Analysis 7212 notes](https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf), §11.3, Theorems 11.3.6–11.3.7, pp.82–83: extension criterion/Cayley parameters and graph decomposition. The local proof covers the general Hilbert space directly; it does not rely on the notes' separable-space deficiency definition or an omitted decomposition argument.
- [Asorey–Ibort–Marmo](https://arxiv.org/pdf/hep-th/0403048), §2, equations (2.6)–(2.12), pp.4–6, and Appendix A, (A.1)–(A.6), p.20. The local Green identity and scaled boundary graph are checked directly. Appendix A reverses the ±i placement relative to §2; its anti-diagonal phase matrix is an involution and gives the same twisted conditions in either equation. No general higher-dimensional boundary claim is imported.

## Completed bookkeeping and checks

Exactly two decisions are in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-43-3a-decisions.json`; no untouched item receives an invented decision. Every confirmed issue has one corresponding closed disposition at `caught_at_stage: 3a-adjudicate`. The touched carrier's reader text is retained and its owning manifest title/statement synchronized, giving the final **amended_repair** verdict. All six contracts now have specific complete Alpha risk reviews. Their derivation text matches the current proofs after normalizing whitespace. Stable IDs, dependencies and published bytes are preserved. The owned consumer record is appended in `briefs/tasks/frontier-dependency-ledger.md`; batch 43's cross-batch edge list is empty.

Actual local checks (all exit 0):

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-43.proof-contracts.json` before review: six CRITICAL items routed, zero errors.
- Same command with `--require-reviewed` after all reviews: six items, zero errors.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-43.proof-contracts.json --strict`: 6/6 checked, zero errors and warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/cex-nrqmx-formal-symmetry-insufficient.md`: PASS (direct), 1 checked, zero failing.
- `node tools/physics-support/rendercheck.mjs items/cex-nrqmx-formal-symmetry-insufficient.md`: one file, valid YAML and math, no defects.
- Final required layout command, after all item/formatter changes: `node tools/physics-support/proof-layout.mjs items/cex-nrqmx-formal-symmetry-insufficient.md`: one item, three steps, zero defects.
- All seven current item raw hashes equal the post-reader snapshot; the recovered counterexample preimage equals its pre-reader snapshot. Exact decision coverage and one closed row per decision checked by a local JSON assertion.

Two preliminary command probes failed harmlessly: this environment has `python3`, not `python`; the helper is `proof-contract.mjs`, not `proof-contracts.mjs`. The successful commands above used the correct executables. Neither failure is a content defect or ledger finding.

No local mathematical blocker remains. Published status-prose maintenance stays OPEN for its owner under the nonfatal-recorded disposition. No judging, stamping, self-certification, engine transition, or gate battery was performed; the engine owns the next stage.
