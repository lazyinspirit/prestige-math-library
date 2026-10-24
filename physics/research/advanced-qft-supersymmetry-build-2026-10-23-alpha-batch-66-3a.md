# Batch 66 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-66`.

Checkpoint: level-0 risk reviews completed for the Fréchet definition, Baire lemma, Laurent decomposition and scalar pseudoconvex acyclicity. Exact checked claims, boundaries and supplier uses are recorded in their proof-contract risk_review entries. No edits to these carriers. Read reader-66, reader-findings-66 (empty), refute-66 and the pre/post fingerprint inventories. The single refuter title finding remains pending until its level-7 review.

Source opened: Demailly, https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf (2012 version; relevant Chapter IX sections are being checked). Next: finish the Fréchet open-mapping and Schwartz proof review, then the higher section-topology and compact-cohomology consumers in routed order.

Levels 1–3 checkpoint: open mapping, Schwartz perturbation, compact-complex finiteness and pseudoconvex intersections independently checked. Schwartz touched obligation: accepted_repair, repair_confidence 1; the added simultaneous seminorm bounds complete the quotient-lift argument without changing its Statement. Risk reviews recorded with residual, degree-zero, disconnected-domain and choice checks. Next: section topology, compact restriction, compact projective theorem and the two examples.

Levels 4–5 checkpoint: accepted the reader F2 repair in the coherent-section topology lemma, repair_confidence 1. The actual finite-jet closedness argument and quotient/family comparisons hold; compact restriction follows under its two explicit section-surjectivity hypotheses. No Statement/Definition change. Exact risk entries recorded. Current carriers matched all 14 post-reader raw hashes before any local carrier edit; the four pre/post differences agree with the reader report. Next: compact-projective cover-independence review.

Level 6 checkpoint: compact-projective theorem touched repair accepted, repair_confidence 1. The singleton branch and positive-dimensional proof are sound. In the cover-independence construction the avoidance condition ensures that each parent kernel used on a refined intersection is resolved near a participating center; both section surjections are therefore available for the same presentation. Refinement signs and repeated-index cancellation preserve the cochain identity. No interface changed. Risk review complete; next are the level-7 examples.

Level 7 first example checkpoint: the O(-2) two-chart quotient is exactly the -1 Laurent coefficient, with transition and Čech signs checked. Its risk review is complete. Next and last: finite-support example, its reader singleton repair and routed refuter title finding.

Final item checkpoint: finite-support proof verified, including empty support and r=0. The reader singleton repair is retained. Refuter finding 66:1 is confirmed_fatal: a one-dimensional complex section space has infinitely many elements. Changed the title to “Finite-support coherent sheaves have finite-dimensional global sections” and synchronized its batch manifest. No Example/Statement/Definition or proof changed. Risk review complete; local focused checks and final decisions follow.

## Final dispositions

Exactly five obligations are owed: four touched carriers and refuter:66:1; there are no reader findings or page obligations. The decisions file contains exactly those five. Each completed repair has repair_confidence: 1. Five distinct closed rows were appended to research/defect-ledger.jsonl at caught_at_stage 3a-adjudicate: quotient lifts, finite-jet hypotheses, theorem singleton, example singleton, and false finite-section title. The amended example decision references its singleton and title rows; its flagged decision references exactly the title row.

- `touched:66:lem-qftx-gaga-schwartz-compact-perturbation`: **accepted_repair**. Reader Proof 1.1 adds simultaneous p_j(u)≤2^-n for j≤n to the shrinking quotient-lift basis. Each fixed seminorm then bounds the lifted tail by a geometric series, giving quotient completeness before applying the Fréchet open-mapping theorem. All six steps, blockwise residual construction, finite-dimensional quotient reduction and zero cases independently reviewed; Statement unchanged.

- `touched:66:lem-qftx-gaga-coherent-section-topology-well-defined`: **accepted_repair**. Reader F2 identifies the germ evaluation ideal as the unique maximal ideal and hence J(R), and proves finite-dimensional jet quotients from Noetherian graded pieces. Thus Krull intersection applies to R^p/L and the convergent-jet images are closed finite-dimensional subspaces. Checked all seven steps, same-presentation matrix lifts, closed compatible-family products and inverse gluing via open mapping. Statement unchanged.

- `touched:66:thm-qftx-gaga-analytic-compact-projective-coherent-finiteness`: **accepted_repair**. Reader F1 treats P^0 directly as the singleton of lines in C rather than citing the r≥1 projective-space definition at r=0. Read all ten proof steps and exact suppliers: point cohomology is exact, and the positive-dimensional nested-cover argument supplies acyclicity, section surjections, compact cochain restrictions and Leray isomorphisms. Checked arbitrary-cover refinement with the actual parent kernels, including repeated-index signs. Statement unchanged.

- `touched:66:ex-qftx-gaga-analytic-projective-point`: **amended_repair**. Retained the reader F5/Proof 1.1 singleton branch; the positive-dimensional manifold supplier has m≥1 and is no longer used for r=0. Independently checked finite-support skyscraper gluing, empty support, flasque acyclicity and H^0 dimension ell. Amended the separate false title identified by refuter:66:1 to finite-dimensional global sections, synchronizing the manifest; Example and proof unchanged by Alpha.

- `refuter:66:1`: **confirmed_fatal**. Confirmed the false title on the frozen post-reader carrier: for r=0 and F=O_(P^0)=C, S is one point and ell=1, while Γ(P^0,F)=C has infinitely many elements. Finite dimension does not imply finite cardinality. Changed only the title to “Finite-support coherent sheaves have finite-dimensional global sections” and the matching manifest title; the Example, proof, dependencies and claim strength are preserved. The current four-step proof is sound by finite skyscraper decomposition and flasque acyclicity. The reader singleton repair is a different defect retained by the touched decision.

## Fingerprint comparison

Before Alpha’s title correction, all 14 current raw item hashes exactly matched their post-reader snapshots. The four changed pre/post hashes below corroborate the reader report; the other ten item hashes agree across pre/post. Original snapshots and observations were preserved.

| Carrier | Pre-reader SHA256 | Post-reader SHA256 |
|---|---|---|
| `lem-qftx-gaga-schwartz-compact-perturbation` | `8e5420afc5771394500467d362b102081b69c336ef24eeb19f9f26afd9c90203` | `5bca25c98a343f9e6839baa6cc04fd929723c11969f93c521240380bbac1a7d4` |
| `lem-qftx-gaga-coherent-section-topology-well-defined` | `2cecb0b7c08ca0606956e49f4e319a5685047ba2115e09fde5da1192ea78d22a` | `2a4902c834890116e42b1d33e51b42d78dba7494febe9dbd3a699c030be808df` |
| `thm-qftx-gaga-analytic-compact-projective-coherent-finiteness` | `fb7e5e9993aa4996f95c1b753f903dd9886a41ff7b5c3f7c55b405fb6c307dad` | `5ce3d90ba8a22266a6867d4af1abd43bb27c7f350211b1b1f55ccd240896ab5b` |
| `ex-qftx-gaga-analytic-projective-point` | `c5d0b6021db756787f00384d7ddc77b576441446c44c083ec8ab1fdd0330a638` | `a6eff8096ab30aa60d17a06f31179156a146fd2f629286c2065f673b8add9433` |

The scope’s refuter observed_sha256 is a canonical hash of the complete post-reader carrier fingerprint object (item, contract and manifest hashes), not the raw item hash. It remains unchanged. Alpha added only the title correction and its matching manifest title, plus risk-review and adjudication evidence.

## Suppliers and source limits

Read each owned carrier in full and the exact direct supplier statements needed for its uses, including the positive-dimensional chart/manifold convention, Artin–Rees, Krull intersection, Cauchy estimates, Ascoli–Arzelà, Laurent expansion, Dolbeault inputs, smooth-module and acyclic-resolution comparison, psh operations, ordinary Euclidean cohomological dimension, Čech differential/refinement and Leray naturality. The actual local-polydisc acyclicity carrier is now present; its six-step proof and the Euclidean-dimension supplier proof were inspected. The Oka supplier is used at its precise finite local resolution/kernel-closure interface, with AC, rather than a global analytic free resolution. No acceptance or readiness stamp was inferred from its file presence. The contract’s older conditional_inputs/observed_alternates remain historical author-stage readiness observations; they are not current absence claims or new gate receipts.

Read the relevant source arguments in [Demailly, Complex Analytic and Differential Geometry](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), 2012 version, Chapter IX §1.A–B, 1.5, 1.7(b), 1.8(b), 1.9–1.10, printed pp.404–408, and §4.B–D, 4.4, 4.6, 4.7(d), 4.8, printed pp.421–424. These provide the finite-jet, compact-perturbation, section-topology and nested-cover arguments checked above; local proofs retain their explicit hypotheses. No claim of reading the complete book or all Cartan/Ahlfors/MIT references is made.

Read [Stacks §6.27](https://stacks.math.columbia.edu/tag/0099), Definition 6.27.1 and Lemmas 6.27.2–3, and [Stacks §20.12](https://stacks.math.columbia.edu/tag/09SV), Definition 20.12.1 and Lemma 20.12.3 with its proof. The skyscraper stalk assertion uses the closed-point/Hausdorff case here; flasque acyclicity is applied under full AC. Published supplier transitive proofs and historical native readiness were not independently re-audited or certified.

## Scope, interfaces, diagrams and published content

All 14 assigned items are mathematics, with mathematical-premise dependencies and no model, observation or statistical inference. No Statement, Definition, Example, dependency edge or physical public interface was changed by Alpha; reader changes were confined to facts/proof support. The false title correction preserves the exact finite-dimension claim. Searching items for the example ID found only its own carrier, so no dependency/reference consumer requires a title repair. No propagation to another batch is necessary. Stable IDs and draft statuses remain. No published/imported item was edited or confirmed defective; therefore no published-ledger row is owed. No withdrawal or outside repair arose.

There are no TikZ/tikzcd diagrams in the assigned items. The proofs are textual; none requires an additional diagram for correctness. A/B pages were not routed for edits and remain frontmatter-only. Statements/descriptions in the assigned carriers have no inline hyperlinks; their links follow in the corresponding references sections.

## Focused checks and handoff

- Initial risk-report: 0 errors, 14 items routed; 13 HIGH/CRITICAL reviews required. Final risk-report with --require-reviewed: 0 errors, 14 items routed, all 13 required reviews complete.
- Reflow of Alpha’s edited example: unchanged. Its precheck via `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/ex-qftx-gaga-analytic-projective-point.md`: PASS, 1 checked, 0 failing. Rendering the explicit example: OK, 1 file.
- After final item editing/reflow, batched proof-layout on the four touched carriers: 4 items, 27 steps, 0 defects.
- Local JSON/reference consistency: exactly the five owed obligations, valid nonempty evidence, complete repair confidence, closed referenced ledger rows, 13 complete risk reviews, authenticated refuter post-reader carrier fingerprint, and Alpha’s carrier change exactly title-only.

Precheck CLI discovery initially tried direct Node on the .mts file, which Node v22 rejected; the tsx-run invocation above succeeded. `--help` is not supported by that precheck, and `reflow.mjs` does not exist; the actual .mts reflow was run via tsx-run. These were command-discovery failures, not mathematical defects; no defect rows were created for them.

No unresolved mathematical blocker, outside-consumer repair or escalation remains in this dispatch. No judgment, acceptance stamp, dispatch, judge cycle or native gate battery was initiated. The engine owns decision stamping, current-hash checks and stage transitions.
