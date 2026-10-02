# Batch 19 Step 1 — Hochschild hyperhomology and cyclic tensor invariance

## Scope and plan reconciliation

Constructed only `hochschild-hyperhomology-and-cyclic-tensor-invariance` (order 727) and its B companion (order 728). The binding owner-authoring-direction file was absent when construction began. `research/plan-spec.json` and the HA-23 design agree on the page IDs, category, order, three page prerequisites, and A/B scope. The current plan had empty item inventories; the design supplied eight A items and three B examples. No plan-versus-design claim conflict was found. The design's footer calls finite-filtration convergence “HA-16” while row 23.5 calls it “HA-15”; the actual published proof supplier is `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, supplemented by `thm-the-cohomological-filtered-complex-construction`. This is a locator inconsistency in the design, not a change to the current plan.

The page does not claim Markov stabilization, writhe normalization, or link invariance. It distinguishes total hyperhomology from the termwise iterated construction and does not force the termwise spectral sequence to collapse. The B examples illustrate, rather than replace, the general bar comparison and convergence arguments.

## Mathematical prerequisite audit

All direct external dependencies declared by the eleven items exist as **published** items. The main published chains inspected were:

A mechanical traversal of the 670 nodes reachable through actual `deps` edges from this batch found no missing ID, cycle, or `proved_here: false` item. The 29 `justified_by` links on that reachable carrier were checked separately: each target depends back on the justified item as the schema requires, and none is a Recorded item. These reverse justification links are not forward proof-dependency edges.

- `def-hochschild-chain-complex-of-a-bimodule` → `lem-hochschild-chains-are-bar-tensor-chains` → `thm-two-sided-bar-complex-is-an-enveloping-projective-resolution` and `thm-hochschild-homology-is-tor-over-the-enveloping-algebra`. The right-$A^e$ action and the first/last Hochschild face conventions agree. The bar projectivity theorem explicitly assumes AC; the chain-level bar identification does not.
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` → `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms` supplies the quasi-isomorphism assertion for a bounded complex tensored with the reindexed bounded-above right bar resolution. `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` assumes DC; each item invoking it also assumes AC and declares `thm-choice-implies-dependent-implies-countable-choice` or reaches it through the double-bar lemma. Right modules are handled via the opposite-ring convention.
- `thm-the-cohomological-filtered-complex-construction` and `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology` support the decreasing $i$-filtration. Since the bimodule-complex degree $i$ is bounded, each total degree has a finite filtration even though Hochschild degree $j$ is unbounded across the total complex. The resulting $E_1^{i,-j}$ and $E_2^{i,-j}$ identification is a finite-filtration argument, not a first-quadrant assertion.
- For the double-bar comparison, finite projective right-$B$ $M$ is a retract of a finite right free module, so $M\otimes_B N$ is a right-$A$ projective retract of a finite sum of $N$. The analogous statement holds after swapping $A,B$. A double-bar term is $A\otimes_k A^{\otimes p}\otimes_k M\otimes_k B^{\otimes q}\otimes_k N$; AC supplies bases for the middle vector spaces, while right-$A$ projectivity of $N$ makes this term right-$A^e$ projective. Right-$B$ flatness of $M$ licenses the $B$-bar augmentation, and the published first-quadrant assembly lemma licenses totalization. No left-projectivity is inferred from a right-projectivity hypothesis. The exchanged argument supplies the other comparison.
- The bounded bimodule tensor definition, its sign/homotopy lemma, its associator, and the supplied-data bounded-above derived tensor definition were read. Right-flat terms compute both derived products by ordinary tensor; the stronger left-side hypothesis in `thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor` is **not** used. The double-bar rotation swaps blocks of total cochain degrees $i-p$ and $l-q$, giving the Koszul sign $(-1)^{(i-p)(l-q)}$; checking the four differential directions is part of the Step-3 proof contract. On termwise $HH_j$, the cochain swap sign is $(-1)^{il}$, checked before taking cohomology.
- The one-variable polynomial Hochschild calculation `cor-polynomial-diagonal-bimodule-hochschild-homology` assumes AC and has the internal shift $R\{2j\}$, so the two-term $k[x]$ example states AC and keeps $i,j,$ and internal degrees separate. The matrix example uses the actual right-projective row module, not an unjustified left-projectivity claim.

No defective published item was identified among the actual proof prerequisites, and none is used as a Recorded result to prove a replacement. The global `extcheck` warnings below concern other published consumers and do not supply or block this pair. No new prerequisite pair, cross-batch change, or page split was needed. The batch-19 cross-batch dependency input is `[]` because every out-of-batch supplier used here was already published; the input was refreshed into the unified ledger using `tools/frontier-dependency-ledger.mjs`.

## Item outcomes

Each manifest entry has an explicit `deps` array and the recomputed in-run `dependency_level`. Each was added in prerequisite order and immediately recorded with `step1-decisions.mjs record` as ready for Step-3 authoring, with its examined dependency IDs and proof strategy. No escalation was overwritten.

| item | level | decision |
|---|---:|---|
| `def-hochschild-hyperhomology-of-a-bimodule-complex` | 0 | ready |
| `thm-hochschild-hyperhomology-is-resolution-independent` | 1 | ready |
| `def-termwise-hochschild-homology-complex-and-iterated-homology` | 0 | ready |
| `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies` | 1 | ready |
| `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex` | 1 | ready |
| `lem-double-bar-comparison-for-cyclic-bimodule-tensor-products` | 0 | ready |
| `thm-derived-cyclicity-of-hochschild-hyperhomology` | 2 | ready |
| `thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes` | 1 | ready |
| `ex-hochschild-bicomplex-total-and-separate-degrees` | 2 | ready |
| `ex-cyclic-tensor-coinvariants-of-matrix-bimodules` | 3 | ready |
| `ex-double-bar-rotation-sign-in-two-complex-degrees` | 3 | ready |

The batch-local recheck found all eleven readiness records current, all levels correct, and no unpublished direct supplier. A readiness record is a scaffold decision, not independent mathematical approval.

## Sources and harvest

The coverage file records exact locators and a disposition for each of 46 harvested results: 14 included, 11 inline, 8 already published, and 13 specifically out of scope. The full arbitrary-coefficient Morita theorem in Weibel §9.5.6 is out of scope: the cyclic-pair lemma's right-projective hypotheses do not prove that stronger coefficient statement, though its double-complex method was inspected. The low-yield checklist warning counts already-published and deliberately out-of-scope named results in its denominator; the full harvest is retained for Alpha's review. The independent treatments include a primary article and a textbook chapter:

| source | complete text checked | load-bearing range |
|---|---|---|
| [Beliakova–Putyra–Wehrli, *Quantum Link Homology via Trace Functor I*](https://arxiv.org/pdf/1605.03523) | 85-page PDF, SHA-256 `3781e14d2bde557cf95aae6aae89238d816a81f5264407b19b7e81c1e5483ece` | §§3.8.4–3.8.6, equations (3.36)–(3.44), printed pp.37–39; §3.8.2 right-projective Rep convention |
| [Weibel, *An Introduction to Homological Algebra*, Chapter 9](https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf) | 69-page PDF, SHA-256 `5bf5c0971806b0bad3d13c7046807cadd88e1147a76117e0dc3fbb441046ec51` | §§9.1.1–9.1.5 and 9.5.1–9.5.8, printed pp.300–304, 326–330, including the bisimplicial Morita proof |
| [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf) | 40-page PDF, SHA-256 `3f79f0cabee081240013738a3da6bc76337b30a1421774bb27eb59ad9742a945` | Theorem 5.5.1 and proof, printed pp.135–136; Definition 5.6.1, pp.141–142 |
| [Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules*](https://arxiv.org/pdf/math/0510265) | 19-page PDF, SHA-256 `548a0eece08bd967c0f4f44754210f765a970010d14e5ad97917668c7d9476a5` | printed pp.5–7, including the termwise HHH definition and three gradings |

All four cited bodies were downloaded, extracted with `mutool`, and the relevant arguments inspected. `source-fetch-check --stamp` independently fetched and stamped 4/4 full texts. No source resolution or drop was needed.

## Checks and remaining findings

| check | observed result |
|---|---|
| Batch `coverage-checklist --require-destination` | exit 0; 1 page, 46 results, 0 errors, 1 low-yield warning explained above |
| Whole-run `manifest-deps` | exit 0; 202 items, 0 missing arrays or errors at check time |
| Whole-run `content-policy --manifest-only` | exit 0; 203 scoped items, 0 errors or warnings at check time; concurrent batches were being written |
| `validate-plan research/plan-spec.json` | exit 0; page order acyclic and consistent, no item-level cycle/forward/unresolved-ID error in the then-populated planned pages; 319 planned pages still had no item lists |
| `extcheck` | exit 0; 40 warnings about unrelated published results resting on recorded-unproved material; none is a declared or implicit supplier here |
| Batch `source-fetch-check` | exit 0; 4/4 full-text fetch stamps verified |
| `item-dependency-levels check --run frontier-37-owner-30` | nonzero at check time because other batches still had empty A/B inventories; no batch-19 level error was reported. The batch-local recomputation and readiness recheck passed 11/11. |
| Whole-run `step1-decisions check` | nonzero at check time because other batches had empty inventories and some other-batch records had changed inputs; all batch-19 records were current in the local recheck. |
| `frontier-dependency-ledger refresh --run frontier-37-owner-30` | exit 0 after writing the empty batch-19 consumer input |

Step 3 must supply complete written proofs, especially the natural double-bar comparison and its four signed differential checks. Owner/operator reconciliation and the later engine gate remain the workflow's review points.


## Additive proof-repair audit

The mathematical audit of all eleven selected batch-19 claims is complete; no claim was dropped. The resolution-comparison sign is now $(-1)^{ip}$, the homological double-bar differential is $d_A+(-1)^p d_B$, and the derived middle rotation uses block degrees $i-p$ and $l-q$ with sign $(-1)^{(i-p)(l-q)}$. The double-bar proof now exhibits right $A^e/B^e$ projectivity with its middle vector-space factor retained, proves exactness by one-sided flatness and first-quadrant assembly, states finite diagonals rather than boundedness of the full bar complex, and rotates only after enveloping coinvariants with both balance checks. The derived proof includes bounded-above cone contractions for the outer triple-model comparisons, with degree-zero homogeneous splittings. The matrix example now has a typed row projection splitting, explicit balanced-tensor identities, and the trace-zero commutator calculation. Full item-by-item detail and source ranges are recorded in research/frontier-37-owner-30-hochschild-proof-repair.md.

The earlier Step-3b accept receipts for all eleven items are stale against current item-input hashes. Earlier batch-wide render/precheck/content/manifest/level results predate final proof and metadata edits, and the first strict proof-contract pass failed on citation-use and boundary-step metadata that was repaired afterward. After the final proof edits, batch-local rendercheck passes 11/11 and precheck passes all 9 proof-bearing items; proof-contract entries were regenerated for all 9 proof-bearing items (the two definitions have no fact/step contracts). Shared final validation is pending until active writers drain; do not read the scaffold “ready” rows above as proof approval. The selected A-page scope hash is 999bde0bee0b75fc0545a17ff406fe716b7596e81f05fbd844deec02e156989a.

## Additive final proof-audit update

The internal grading of a homogeneous chain tensor in the hyperhomology
definition is now the sum of the coefficient degree and all algebra-factor
degrees; it reduces to the coefficient degree for degree-zero $A$. The
definition's proof-contract boundary cases do not depend on that sentence.
After the edit, targeted rendercheck passed, content-policy found 0 errors and
warnings across the 11 items, manifest-deps found 0 errors, and coverage found
0 errors with its existing one low-yield warning. Root's strict proof-contract
check was 11/11 with 0 errors/warnings before this wording correction; the
correction did not affect contract evidence and no shared gate was retried.
All eleven current items and their cited supplier statements have since been
re-audited. Ordinary confidence-1 receipts are current and close the original
eleven items (11/11); no IDs, titles or interfaces changed. The scope hash
remains 999bde0bee0b75fc0545a17ff406fe716b7596e81f05fbd844deec02e156989a.
