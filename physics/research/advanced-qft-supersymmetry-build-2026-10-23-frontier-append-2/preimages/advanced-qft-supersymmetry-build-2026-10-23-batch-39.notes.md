# Batch 39 — Step 1 authoring evidence

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Scope: `qftx-noninvertible-symmetries` and `qftx-noninvertible-symmetries-examples`.

## Scope and plan reconciliation

The complete assigned design is `research/plan-advanced-qft-and-supersymmetry-track.md`, § “Non-Invertible Symmetry Operators and Fusion” (lines 541–554). The corresponding rows in `research/plan-spec.json` match the task on page IDs, titles, A/B pairing, category/library, A prerequisites `qftx-defects-and-topological-operators` and `qftx-defect-fusion-mathematics`, and B’s requirement on A. The plan assigns order 995; the design section does not prescribe an order. Both plan rows have empty `items` arrays, which are authoring placeholders under the binding owner direction. The design names `pthm-aqft-noninvertible-defect-realization`; its integrated contract requires one specified physical model, actual defect operators and junctions, isotopy/fusion/associator checks, and no unsupported continuum limit. The owner direction also requires substantial B-page examples. No shared plan change is proposed.

The live batch manifest initially contains the same two pages with empty inventories. The current page-dependency record assigns batch 39 level 4 with required batches 15 (level 0) and 36 (level 3). These are scheduling priorities; authoring proceeds conditionally through an unresolved supplier readiness record.

## Inspected prerequisites and current readiness

- `def-aqft-noninvertible-defect-fusion` (`qftx-defect-fusion-mathematics`) defines the ordinary finite semisimple fusion-category data and a separate semistrict fusion-2-category convention. Its exact text says abstract data do not construct QFT defects or prove topologicality. It is a mathematical definition, not a physical realization. Its declared mathematical dependencies are `def-fusion-and-multifusion-category` and `def-monoidal-category`; both are read-only published mathematics imports. Its current `loadStep1Record`/`step1Decision` result is `ready`, closure hash `7854764e4c4805b471c4e237783fd80a02d9f2119830ef05595eb835088704c9`, with those two exact dependencies.
- `def-aqft-topological-defect` (`qftx-defects-and-topological-operators`) defines a model-bound insertion by its embedded support, model-provided local data and correlator functional; it calls the insertion topological when every model-declared correlator is invariant under the stated allowed isotopies. Its current carrier is present and was read in full. The current `loadStep1Record`/`step1Decision` result is `Readiness record missing`. Draft status alone is not the gap; the fresh missing readiness record is. This batch will use the exact definition conditionally, will not treat it as independently cleared, and will record its consumer readiness as escalated.
- Batch 36’s current notes also report that its page `qftx-defects-and-topological-operators` has the transitive page prerequisite `qftx-susy-algebra-and-multiplets` unresolved because specified mathematical/Yang–Mills suppliers are absent. This is transitive context, not an item-level proof premise added to this theorem. The physical claim below makes no BPS or supersymmetry assertion.
- The actual defect-fusion and topological-defect statements, metadata and dependency roles were inspected. The former’s ready Step 1 record is current; the latter’s missing record remains explicit. No supplier item is authored or repaired here.

## Source reading and retrieval status

Full-text passages inspected for this A page:

1. David Aasen, Roger S. K. Mong, and Paul Fendley, [*Topological Defects on the Lattice I: The Ising Model*](https://arxiv.org/pdf/1601.07185), complete 45-page arXiv PDF. Read §2, PDF pp. 3–5, for the finite square-lattice Ising model, its row Hilbert space and transfer operators; §3.2, PDF pp. 9–11, including the (2^{-1/2}(-1)^{ab}) duality tensor, the operator kernel, local Pauli intertwiners and the character-sum fusion proof; and §§4.1–4.3, PDF pp. 17–22, including the explicit trivalent junction weights and the Ising (F)-symbols. This is the primary finite-lattice construction. No continuum-limit claim is imported.
2. Jürg Fröhlich, Jürgen Fuchs, Ingo Runkel, and Christoph Schweigert, [*Kramers–Wannier Duality from Conformal Defects*](https://arxiv.org/pdf/cond-mat/0404051), complete 8-page arXiv PDF. Read the complete critical-Ising defect discussion and fusion argument, PDF pp. 2–5, including the three defect labels, defect transparency to the stress tensor, (sigmastarsigma=1+arepsilon), and its limitation to the critical CFT framework. It independently supports the Ising duality-defect interpretation; its continuum statements are not used to infer a lattice or continuum theorem here.
3. Nils Carqueville, [*Lecture Notes on 2-Dimensional Defect TQFT*](https://arxiv.org/pdf/1607.05747), complete 42-page arXiv lecture-note PDF. Read §2.1, PDF pp. 5–8, for decorated defect bordisms, source/target regions, isotopy classes and the functorial correlator assignment. The notes are an oriented 2D treatment and do not supply the selected Ising model.
4. Steven H. Simon, [*Topological Quantum*](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf), complete author-hosted textbook PDF. Read §§9.2–9.3, PDF pp. 119–121 (book pagination approximately 103–105), for the Ising (F)-matrix, mixed (psi,sigma) associators and the pentagon equation. This supplies an independent full-book treatment of the finite associator conventions.

The existing mathematical supplier’s full-text definition sources were also checked through its actual carrier and batch-15 evidence; this batch relies on that carrier only as the precise mathematical definition, not as a physical construction. Browser retrieval and reading are complete for the passages above. The required local `source-fetch-check --stamp` is pending. No retrieval failure has occurred; `source_resolution` will remain empty unless the mechanical full-text fetch actually fails.

## Authoring progress and next action

### Completed: `def-aqft-ising-fusion-data`

Claim: defines the complex-linear skeletal Ising fusion-data candidate with simple labels $\mathbf 1,\psi,\sigma$, exact fusion multiplicities, normalized unit, all specified associator coefficients, and self-dual evaluation/coevaluation maps. It explicitly treats these as candidate data pending the separate coherence proof and makes no physical-realization or braiding claim. Convention: the Ising $F$-matrix basis order is $(\mathbf 1,\psi)$; the two mixed associators are the standard $-1$ entries. This is a mathematical-domain support item on the assigned physics A page, with only a mathematical dependency.

Exact dependency: `def-aqft-noninvertible-defect-fusion` (the inspected finite semisimple fusion-category interface); item level 1 from its current level-0 ready supplier. Source locators: Simon, *Topological Quantum*, §§9.2–9.3, PDF pp. 119–121 (Ising F-matrix and pentagon); Aasen–Mong–Fendley, §§4.1–4.3, PDF pp. 17–22 (lattice junction and F-move data). Both full PDFs and relevant passages were inspected. The item is authored; scoped formatting, source-fetch stamping, render checking and contract closure remain pending. No item-level readiness record has yet been written.

The remaining authoring order is: (2) prove the candidate’s finite fusion-category coherence; (3) add the pure algebraic B example; (4) prove the conditional finite-lattice physical realization; (5) add a concrete finite-chain B example. This keeps mathematical suppliers ahead of consumers. Item levels will be recomputed from the actual item edges; the assigned batch level remains the live level 4 until the owner recomputes shared dependency-level evidence.

### Completed: `lem-aqft-ising-fusion-data-coherence`

Claim: the specified complex-linear package satisfies fusion-product associativity, naturality, the pentagon and triangle, both snake identities, finite semisimplicity, a simple unit, and unitary associator matrices, so it is a finite semisimple fusion category. Conventions: the two-dimensional fusion-channel basis is ordered $(\mathbf 1,\psi)$; strict unitors are used; evaluation and coevaluation for $\sigma$ have coefficient $2^{1/4}$ in the unit channel. Its mathematical dependencies are `def-aqft-noninvertible-defect-fusion`, `def-aqft-ising-fusion-data`, and the exact monoidal-category axiom `def-monoidal-category`. The item level is 2, one more than its maximum in-run supplier level 1.

The complete finite pentagon calculation is durable in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-39-ising-pentagon-check.py`. It uses rational arithmetic in $\mathbb Q(\sqrt2)$, enumerates all 19,683 outer channel-label assignments and all three internal summands, finds 132 assignments with a nonzero side and zero failures, and was run successfully (`PASS: 19683 exact channel assignments; 132 nonzero; 0 failures`). The pentagon is not inferred from a diagram. Full-text support: Simon, §§9.2–9.3, PDF pp. 119–121, for the Ising $F$ data and pentagon; Aasen–Mong–Fendley, §§4.1–4.3, PDF pp. 17–22, for the same lattice junction/F-move conventions. Formatting, render, source-fetch stamping and strict contract checks remain pending. No Step 1 record has yet been written.

Next action: author the pure algebraic B example from the now-verified category data, then the physical lattice realization theorem that conditionally consumes both mathematical suppliers and the exact topological-defect definition.

### Completed: `ex-aqft-ising-fusion-object-noninvertible`

Claim: in the coherent Ising fusion category, the simple object $\sigma$ has no right tensor inverse, hence no two-sided inverse. The proof allows every finite direct-sum candidate $E$ and compares the exact multiplicities in $\sigma\otimes E$; it uses no quantum-dimension or physical argument. Convention: the unit and spin-flip labels are encoded by bits only in the displayed $F^{\sigma\sigma\sigma}_{\sigma}$ coefficient. Exact mathematical dependencies: `def-aqft-noninvertible-defect-fusion`, `def-aqft-ising-fusion-data`, and `lem-aqft-ising-fusion-data-coherence`; item level 3. Full-text source: Simon, *Topological Quantum*, §§9.2–9.3, PDF pp. 119–121, for the Ising fusion and associator data. The carrier is authored; scoped formatting/render, source-fetch, strict contract, and readiness checks remain pending. No readiness record has yet been written.

Next action: author the physical finite-lattice realization theorem. It will state its Hamiltonian, units, duality kernel, defect slide/fusion/junction conventions and finite-model scope explicitly, and will use `def-aqft-topological-defect` conditionally because its current Step 1 record is missing.

### Completed: `pthm-aqft-noninvertible-defect-realization`

Claim: for the explicitly specified finite periodic zero-field Ising spin chain at equal self-dual couplings, the duality kernel intertwines the original and half-shifted dual Hamiltonians, gives exact Euclidean-time defect slides, and obeys $D_L^2=I+P_L$, $P_L^2=I$, and $D_LP_L=P_LD_L=D_L$. Its declared local junction spaces and Ising F-data are the coherent category package proved locally above; this is an exact finite-lattice defect-network result, with no continuum or empirical claim. Conventions: heights and dual heights are $\mathbb Z_2$-valued; $Z_j|h\rangle=(-1)^{h_j}|h\rangle$; $X_j$ toggles $h_j$; $J$ has energy units and Euclidean time has inverse-energy units with $\hbar=1$; dual sites are identified by a half-lattice shift. The physical scope is stated in the item.

Exact item dependencies and roles: `def-aqft-noninvertible-defect-fusion` (`mathematical-premise`, batch 15); `def-aqft-ising-fusion-data` and `lem-aqft-ising-fusion-data-coherence` (`mathematical-premise`, this batch); and `def-aqft-topological-defect` (`formulation-prerequisite`, batch 36). Its item level is 3 from the maximum in-run supplier level 2. The topological-defect definition is used at its exact current stated isotopy criterion; its readiness record is still missing, so this theorem and its downstream physical example remain unresolved for Step 1 readiness and will be escalated after all available authoring is complete.

Sources and locators: Aasen–Mong–Fendley, §§2–3.2, PDF pp. 3–11, for the finite Ising duality kernel, local Pauli intertwiners and exact fusion sum; §§4.1–4.3, PDF pp. 17–22, for the lattice junction and F-move data. Fröhlich–Fuchs–Runkel–Schweigert, PDF pp. 2–5, is an independent critical-CFT treatment; its continuum claims are not inferred here. Simon, §§9.2–9.3, PDF pp. 119–121, supports the F convention; Carqueville, §2.1, PDF pp. 5–8, supports model-defined defect networks and junctions. The actual proof is local and conditional on the finite model. The carrier is authored; source-fetch stamping, formatting/render checks, contract closure and readiness recording remain pending.

Next action: author the concrete $L=3$ finite-chain B example from this theorem, retaining the explicit unresolved supplier record in its readiness disposition.

### Completed: `ex-aqft-ising-chain-three-site-noninvertible-defect`

Claim: for the explicitly stated three-site periodic Ising Hamiltonian, the nonzero spin-flip-odd vector $v=|000\rangle-|111\rangle$ is annihilated by $D_3^2=I+P_3$, proving that the physical defect has no inverse. The example also retains the conditional finite-model topologicality result. Conventions: the three-site ring uses the same periodic interaction sum as the theorem; Euclidean time and energy units are explicit; no continuum or empirical claim is made. Exact dependency: `pthm-aqft-noninvertible-defect-realization` as a `physical-result`; item level 4. Full-text source locators: Aasen–Mong–Fendley, §3.2, PDF pp. 9–11; Fröhlich–Fuchs–Runkel–Schweigert, critical-Ising defect discussion, PDF pp. 2–5. Carrier is authored; all scoped checks, source-fetch stamping, contract closure and readiness remain pending. Since its supplier theorem has an unresolved prerequisite readiness record, this example cannot be marked ready until that record is current.

All five planned A/B items are now authored in supplier order. The mathematical candidate and coherence lemma are complete locally. The physical theorem states its finite Hamiltonian and junction network data explicitly; it adopts the finite lattice defect/junction tensors as part of the selected model and proves the duality intertwining, finite fusion sum, defect sliding, and categorical coherence. The proof does not infer the local junction data from fusion multiplicities alone, and it makes no continuum claim. Next work: mirror all five carriers into the authorized batch manifest, author frontmatter-only A/B pages, generate exact proof contracts/coverage/cross-batch edges, run source fetch stamps and scoped checks, then record each readiness result. The exact current unresolved prerequisite is still the missing Step 1 record for `def-aqft-topological-defect`.

## Retrieval and dependency-level checkpoint

The required `source-fetch-check --stamp` completed successfully for this batch coverage: 7/7 coverage-source entries fetched and full-text verified, each on its first recorded attempt; no source failed or was dropped. Exact fetch stamps are retained in `batch-39.coverage.json`: Aasen–Mong–Fendley (45 pages, 2,190,543 bytes, SHA-256 prefix `b5074a4352c092b8`); Fröhlich–Fuchs–Runkel–Schweigert (8 pages, 123,011 bytes, `a90c31bfad847aa5`); Carqueville (42 pages, 508,724 bytes, `60f2025287549d86`); and Simon (466 pages, 5,453,383 bytes, `faf1ed6241930916`). The repeated A/B page entries retain their own successful fetch stamps and exact timestamps.

The whole-run `item-dependency-levels.mjs check` exits 1 because 21 other planned A/B pairs (42 pages) still have empty scaffold inventories. The whole-run `batch-dependency-levels.mjs check` reports the shared level snapshot stale while those manifests are incomplete. Neither check identified a cycle in batch 39. A scoped recomputation with the exact supplier pages from batches 15 and 36 plus this batch completed with no errors and assigned item levels: `def-aqft-ising-fusion-data` 1; `lem-aqft-ising-fusion-data-coherence` 2; `pthm-aqft-noninvertible-defect-realization` 3; `ex-aqft-ising-fusion-object-noninvertible` 3; `ex-aqft-ising-chain-three-site-noninvertible-defect` 4. The scoped batch DAG recomputation over the closed ancestry `{1,2,15,19,29,36,39}` returns levels 0,0,0,1,2,3,4 respectively, matching the live batch-39 record. Shared dependency-level evidence was not rewritten.

## Current supplier-readiness recheck

At the initial inspection, `def-aqft-topological-defect` had no Step 1 record. Before final readiness, `loadStep1Record` and `step1Decision` were rerun on the current carriers. The owner’s current record is now `decision: ready`, `owner: true`, timestamp `2026-10-23T09:16:15.914Z`, closure hash `b6b3ad46689b6fdbe4036b4a22d79a190baeefdfaf7123cf399ca43a8b0b767d`. Its explicit examined closure is recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-step1-def-aqft-topological-defect.json`. The actual Definition was re-read: its notation now uses $j$ for the embedding, but the model-bound data and exact correlator equality under allowed isotopies are unchanged in meaning and match this theorem’s finite-model slide criterion. `def-aqft-topological-interface` and the two items on its required BPS page also have current `ready` records. The previous batch-36 note about that page’s BPS hold is historical and is not a current blocker for this direct page edge.

The page edge to `qftx-defects-and-topological-operators` and item edge from `pthm-aqft-noninvertible-defect-realization` to `def-aqft-topological-defect` are now recorded `verified` in the cross-batch array. This records the scoped interface/readiness check only; it does not assert independent proof approval. No assigned item has an unresolved prerequisite at this recheck. All five final Step 1 records are `ready`, as detailed below.

## Final Step 1 records and scoped results

After the current supplier recheck and final scoped battery, `node tools/physics-support/step1-decisions.mjs record` was run without `--owner` for each assigned item. All five non-owner records are current and `ready`:

| Item | Exact examined dependencies | Readiness hash |
|---|---|---|
| `def-aqft-ising-fusion-data` | `def-aqft-noninvertible-defect-fusion` | `37d7647be5f60f157acfd895f7cec9244099477b2fb11e8d8849cfc203bab469` |
| `lem-aqft-ising-fusion-data-coherence` | `def-aqft-noninvertible-defect-fusion`, `def-aqft-ising-fusion-data`, `def-monoidal-category` | `4075b9397ec1b6ecc8364d89db352cd0290362fefde087575674d623b4aad04c` |
| `ex-aqft-ising-fusion-object-noninvertible` | `def-aqft-noninvertible-defect-fusion`, `def-aqft-ising-fusion-data`, `lem-aqft-ising-fusion-data-coherence` | `162da3eefc9fce6f8466774cb465c38d9d49372aea1130fcfb3ae67b18cd01fc` |
| `pthm-aqft-noninvertible-defect-realization` | `def-aqft-noninvertible-defect-fusion`, `def-aqft-ising-fusion-data`, `lem-aqft-ising-fusion-data-coherence`, `def-aqft-topological-defect` | `2907b4ff776dbfd7400e1821071b22b73f377db7471fe19e3eaa678b62b67a20` |
| `ex-aqft-ising-chain-three-site-noninvertible-defect` | `pthm-aqft-noninvertible-defect-realization` | `2b0761208ccccd31ead4e76d163aa1916d38b9f8d3c973fabefb8b278fb3e785` |

The current owner record for `def-aqft-topological-defect` remains `ready` (owner record, current hash `b6b3ad46689b6fdbe4036b4a22d79a190baeefdfaf7123cf399ca43a8b0b767d`). Its exact current embedding/correlator/isotopy interface was re-read and checked against the consuming theorem. The earlier missing-record note is historical only; no Step 1 escalation remains for this batch.

Final scoped checks on the current carriers:

- `precheck.mts`: 4 proof-bearing items pass; the definition is not applicable.
- `proof-layout.mjs`: 5 items, 16 steps, 0 defects.
- strict `proof-contract.mjs`: 5/5 checked, 0 errors, 0 warnings.
- `content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings.
- focused `depcheck.mjs`: 5 assigned items and their 214-item/107-page dependency closure, 0 errors, 0 warnings.
- `rendercheck.mjs`: 5 items and 2 pages, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 7/7 coverage-source entries fetch-verified, 0 drops; all source fetches succeeded on their first recorded attempt.
- Scoped statement-first inspection: 5 items, 0 defects. A page/item/manifest mirror check also found 0 mismatches; both page bodies are empty.
- Scoped item dependency-level calculation across the required batch-15 and batch-36 supplier pages plus batch 39: levels 1/2/3/3/4 as recorded above, no cycles or errors. Scoped batch-DAG calculation for the closed ancestor chain gives batch 39 level 4.
- The current cross-batch array has 7 exact rows, all `verified`, with no duplicate edges or schema errors.

The whole-run dependency-level checks remain blocked by other in-flight batches: the item-level checker reports 42 unrelated planned pages with empty inventories, and the batch-level checker reports the shared snapshot stale while those manifests are incomplete. These shared owner artifacts were left unchanged. The compact page-layout flag remains absent at initial authoring for the engine to set mechanically; no page summary was authored. Independent acceptance and later native workflow gates remain pending.

Historical initial-inspection note (superseded by the current supplier-readiness recheck above): `def-aqft-topological-defect` initially had no current Step 1 readiness record. Its complete conditional use and exact dependency were retained while authoring continued. The owner subsequently supplied a current `ready` record, its actual interface was re-read and matched, and both dependent items received current `ready` records. The later source-fetch stamps, contracts, coverage, page mirrors and scoped-check results above supersede the initial checkpoint.
