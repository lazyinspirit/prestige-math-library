# Batch 46 authoring notes — Finite Pauli dimer spectrum and exact separability threshold

Run: `physics-remaining-80-2026-10-17`. Owner: beta. Scope: the assigned pair `qsm-interacting-exact-models` and `qsm-interacting-exact-models-examples` only. All new items and pages remain drafts.

## Plan and inventory reconciliation

- The complete design section at `research/plan-quantum-statistical-mechanics-track.md` L323 reserves four A claims: `thm-qsm-models-dimer-entanglement`, `pthm-qsm-commuting-lattice-countermodels`, `pthm-qsm-interacting-dimer-gibbs`, and `pthm-qsm-onsite-interacting-atoms`. The B companion contains the three corresponding examples.
- The design's A-page requirement lists only `qsm-bose-fermi-gases`. The active `research/plan-spec.json` row and this dispatch require both `csm-fluctuations-countermodels` and `qsm-bose-fermi-gases`; the authored A page and batch manifest follow the active plan. The B page requires the assigned A page. The plan-spec item arrays are empty scaffolding placeholders; the paired inventory remains the item-level source of truth.
- Six necessary mathematical supports were added on the assigned A page before their consumers: `def-qsm-pauli-two-qubit-conventions`, `def-qsm-finite-two-qubit-state-and-separability`, `lem-qsm-pauli-dimer-spectrum`, `lem-qsm-qubit-bloch-ball`, `lem-qsm-pauli-separable-correlation-bound`, and `lem-qsm-pauli-boundary-mixture`. They use mathematical prerequisites only. The manifest marks these six rows `inventory_expansion_required: true`; the four reserved A claims and three examples remain intact. The A page has 10 items and the B page has 3, both below the 100-item cap.
- The A page keeps the explicit energy-level TikZ sketch with its scale and scope explained in prose. The proof derives the spectrum and does not rely on the diagram.

## Dependency inventory and current interfaces

The assigned dispatch and stored schedule put batch 46 at level 3 with batches 35 and 45. Recomputing the current graph from all batch manifests finds level 3 with direct in-run suppliers 34, 35, and 45. The added direct batch-34 edge is `pthm-qsm-commuting-lattice-countermodels` → published mathematical `thm-tdmath-ising-chain-limit`. Its actual current Statement and complete proof were inspected; it supplies the periodic two-state chain for $N\ge2$, $\beta>0$, and real $J,h$, including $\lambda_+>|\lambda_-|$, the normalized log-partition limit, and locally uniform convergence of every fixed finite derivative order. The local Ising Hamiltonian uses the same indexed bonds and sign convention.

The shared `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json` still records `[35,45]` for batch 46. Current recomputation gives `[34,35,45]`, while the level remains 3. Its stored input hash is `2f4f39f4278dc89c3f6aab6d0ba61a1790e3bce6a0483da898fe467f7249c977`; the current hash is `8157ffcfbe9fc84b9f73839c68591250e38da98c688b2449e794c7d4e357d738`. I left this shared scheduling file unchanged for owner reconciliation. The affected claim is the transfer-matrix limit clause in the commuting Ising item; its actual supplier is current and published, so this scheduling discrepancy is not a missing logical carrier or an item-readiness blocker. The exact edge is recorded in `batch-46.dependency-inputs.json` and `batch-46.cross-batch-dependencies.json`.

Current direct item interfaces inspected for batches 35 and 45:

- Batch 35 `pthm-csm-ising-ring-correlation` has a current ready record and supplies the finite periodic ring means/correlations under $N\ge2$, $J\ge0$, $\beta>0$, $h=0$. The quantum model counts the same two indexed bonds at $N=2$ and invokes the result only under those hypotheses.
- Batch 35 `pthm-csm-nonadditive-phase-countermodel` has a current ready record and supplies its exact three-sector partition, exponential-tilt bound, uniform-shell law, log-partition error, and one-sided energy-density limits. The assigned quantum proof independently realizes those finite values in the stated direct-sum Hilbert space.
- Batch 45 `post-qsm-models-statistics-and-preparation`, `lem-qsm-models-diagonal-occupation-trace`, and `lem-qsm-fock-occupation-basis-and-car-relations` have current ready records. Their inspected interfaces are respectively the adopted positive-finite-trace preparation rule, the exact diagonal multiplier domains and trace sums, and the one-mode $\mathbb N_0$ and finite two-mode occupation bases. The onsite Bose proof derives the interacting quadratic-tail trace and does not invoke the free-mode product trace formula.
- Batch 45's separate lattice Riemann-bound context has an absent M17 production carrier. No batch-46 item depends on that theorem or M17; it is explicitly recorded as outside this batch's logical closure. It does not make the three actual batch-45 supplier carriers above unavailable.

All current batch-46 dependency levels match their item frontmatter and manifest rows:

| Item | Level |
|---|---:|
| `def-qsm-pauli-two-qubit-conventions` | 0 |
| `def-qsm-finite-two-qubit-state-and-separability`, `lem-qsm-pauli-dimer-spectrum` | 1 |
| `lem-qsm-qubit-bloch-ball` | 2 |
| `lem-qsm-pauli-separable-correlation-bound`, `lem-qsm-pauli-boundary-mixture` | 3 |
| `thm-qsm-models-dimer-entanglement` | 4 |
| `pthm-qsm-interacting-dimer-gibbs`, `pthm-qsm-commuting-lattice-countermodels` | 5 |
| `pthm-qsm-onsite-interacting-atoms` | 4 |
| `ex-qsm-commuting-lattice-countermodels`, `ex-qsm-interacting-dimer-gibbs` | 6 |
| `ex-qsm-onsite-interacting-atoms` | 5 |

There is no local item cycle. Each physical item distinguishes the adopted preparation assumption from its conditional deduction, states its physical scope and units, and asserts no measurement or material-specific result.

## Mathematical route and proof contracts

- The Pauli convention definition fixes the basis order, inner-product convention, tensor action, trace, Euclidean dot product and norm, unit vectors, and exchange operator. The finite-state definition fixes positivity, trace one, product states, finite convex separability, and entanglement. No undeclared Bloch-sphere or separability theorem is imported.
- The local spectrum calculation gives the singlet eigenvalue $-3$ and the triplet eigenvalue $1$ with multiplicity three. The Bloch-ball item derives the unique coordinates and positivity interval from a general Hermitian trace-one $2\times2$ matrix.
- For product qubits, the exchange expectation is the Bloch-vector dot product; Cauchy–Schwarz gives the separable lower bound $-1$, and convexity extends it to the adopted separable-state definition. The explicit six-state axis mixture is checked to equal $\rho_*=\tfrac14(I_4-C/3)$, so the witness boundary is attained by a separable state.
- For the isotropic zero-field Gibbs family, the singlet probability is $e^{4x}/(e^{4x}+3)$ and the exchange expectation is $c=3(1-e^{4x})/(e^{4x}+3)$. The witness proves entanglement for $c<-1$; the local convex decomposition $\rho_x=(-c)\rho_*+(1+c)I_4/4$ proves separability for $-1\le c\le0$. Thus the exact threshold is $x=(\log3)/4$, including a separable equality state.
- The physical dimer Hamiltonian is $H=JC-h(\sigma_z\otimes I+I\otimes\sigma_z)$ with $J,h$ in joules and $\beta$ in J$^{-1}$. Its levels and field coefficient are derived in that convention. The four-term trace is finite and positive before the adopted Gibbs preparation is invoked. The proof separately establishes finite-temperature analyticity, zero-temperature degeneracies, and the $|h|=2J$ ground-space crossing for $J>0$.
- The commuting Ising model is diagonal in the product $\sigma_z$ basis and agrees exactly with the specified periodic classical ring. The separate global three-sector model is defined by its explicit direct sum and shell subset; its bounds do not assert a local or short-range phase. Finite analyticity is distinguished from the limiting corner.
- For the isolated repulsive Bose site, the proof gives the exact self-adjoint diagonal domains, proves trace finiteness from a geometric majorant, and establishes joint real analyticity by an explicit absolutely convergent two-parameter series. A compact envelope justifies the covariance response. Consecutive energy increments give the strict occupation plateaus and adjacent boundary minima; the excited-tail estimate proves the stated entropy limits. The Fermi atom is a four-state finite trace and its covariance sign follows by direct subtraction.
- The normative precheck identified canonical phase/dependency ordering in seven proofs. Those seven phase repairs were adopted by dependency-ordering the same fully justified step arguments; a normalized step-content crosswalk found every prior step represented with no argument removed. Step references, boundary worksheets, contracts, and manifest proof snapshots were refreshed. All 11 proof-bearing items now pass precheck and strict proof-contract validation. The two definitions have no proof section and their contracts record all standard proof boundaries as not applicable.
- `physics-remaining-80-2026-10-17-batch-46.proof-contracts.json` records each exact supplier statement excerpt, every numbered step and its actual inputs, all eight standard boundary dispositions, and the applicable finite checks. Strict validation passes 13/13 items with no errors or warnings.

## Source research and retrieval

The coverage file gives exact URLs, locators, supported batch-46 items, limitations, and a disposition for every one of 14 harvested results. The six active full texts are:

- Doron Cohen, author-hosted full lecture notes, §§2.2–2.3 (Pauli convention, two-spin spectrum, and partition sum; 158 pages).
- Markham et al., complete six-page paper, Example 1, printed pp. 3–4 (dimer spectrum, partition sum, and zero-field threshold comparison).
- Bloch, Dalibard, and Zwerger, complete 83-page review, §§IV.A and IV.E (Bose- and Fermi-Hubbard on-site conventions).
- Tong, complete 191-page lecture notes, §§3.5–3.6, 5.3.1, and 5.4.2 (occupation/preparation context, Ising transfer matrix, and phase-transition context).
- Teschl, complete 370-page textbook, §2.2 (Hilbert-space domain and adjoint context).
- Watrous, complete 66-page Chapter 2, §§2.1.2–2.1.3 (density operators, mixtures, tensor products, product states, and qubits).

The browser text preview for the already fetched Cohen BGU PDF timed out. Search located the author-hosted arXiv v3 PDF and its complete relevant §§2.2–2.3 reasoning was inspected; the existing successful BGU full-text attempt and stamp were preserved. This was a preview limitation after a successful fetch, not a failed source retrieval. `source_resolution` is empty; no active source was dropped. The fetched Aldoshin review remains in historical coverage as excluded from support because its stated exchange sign conflicts with the singlet Gibbs assignment in its subsequent equations; it is not used as a premise and no coverage is waived.

`source-fetch-check --stamp` verified 6/6 active URLs, newly stamping Watrous only; final check mode remains 6/6 verified and resolved with zero documented drops. `coverage-checklist` reports 1 A page, 14 harvested results, 0 errors, and 0 warnings.

## Scoped checks and readiness

- Strict proof contracts: 13/13, 0 errors, 0 warnings.
- `proof-layout.mjs` on all explicitly changed batch items: 13 items, 37 proof steps, 0 defects.
- Normative `precheck.mts`: 11 proof-bearing items checked, 0 failing; the two definitions are not applicable.
- Renderer: 15 files (13 items and both pages), all YAML, KaTeX, and math-delimiter checks passed.
- Focused `depcheck` and `fwdcheck`: 0 errors and 0 warnings across the assigned items and their 1,902-item/411-page prerequisite closure.
- Authored manifest content policy: 13 scoped items, 0 errors, 0 warnings. Coverage checklist and final source-fetch check also pass as recorded above.
- Recomputed item levels match all 13 assigned item labels exactly; the focused crosswalk has no batch-46 diagnostics. The full-run item-level CLI exits 1 on 51 unrelated diagnostics (50 empty scaffold inventories and one stale label on `pthm-emg-matter-symmetry-charges`); no batch-46 item is among them.
- Full-run batch dependency check reports stale shared scheduling input. The current batch-46 row is level 3 with direct requirements `[34,35,45]`; the protected stored row is level 3 with `[35,45]`. No shared plan or scheduling file was edited; owner reconciliation remains open.
- `step1-decisions.mjs record` wrote current `ready` records with `owner: false` for all 13 assigned items and each item's direct dependency IDs. A full-run readiness check reports 510 items, 400 ready, and 160 other open records/pages; none of the 13 batch-46 items is in its open work list. No `--owner` override was used and no escalation was overwritten.

`ready` records current local arguments, placement, supplier interfaces, contracts, and scoped checks. They do not constitute independent approval or proof acceptance.
