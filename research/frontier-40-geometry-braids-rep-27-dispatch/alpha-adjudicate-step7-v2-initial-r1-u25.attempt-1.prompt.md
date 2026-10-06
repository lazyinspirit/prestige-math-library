# Step 7 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-40-geometry-braids-rep-27-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step7-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 7.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 7 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: frontier-40-geometry-braids-rep-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u25
covers: 25
output: research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u25.json

# Step 7 adjudicate: initial, round 1, unit 25

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"25",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-normal-surface-modification-and-normalized-point-blowup, 0:lem-cm-local-codimension-and-regular-quotient-ext-concentration, 0:lem-finite-over-projective-noetherian-affine-base-is-projective, 0:lem-regular-surface-reflexive-modules-and-codimension-one-lattices, 0:lem-surface-derivations-and-regular-hypersurfaces, 0:lem-surface-flat-base-change-coherent-cohomology-by-cech, 3:lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate, 3:lem-normal-surface-modification-leray-short-exact-sequence, 4:lem-surface-completed-polynomial-generic-fibre, 6:lem-surface-regular-fibres-preserve-normality, 7:lem-normalized-point-blowups-dominate-local-normal-surface-modifications, 9:lem-projective-normal-surface-grauert-riemenschneider-vanishing, 13:lem-rational-normal-surface-reduced-to-invertible-canonical-module, 14:lem-nonsquare-tangent-conic-rational-surface-blowups-terminate, 15:lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic, 16:lem-double-plus-simple-cubic-rational-surface-branch-terminates, 18:thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups, 20:thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-normal-surface-modification-and-normalized-point-blowup",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The dimension-one remark is false without regularity: for S=Spec k[t²,t³], the closed-point ideal (t²,t³) is not invertible, and its blowup is Spec k[t]→S, which is not an isomorphism.",
      "context_sha256": "01cdcd7198ce4024c85a84ed316aac46fdd798ee16dc34942f899c6b075b79c4",
      "item_sha256": "8ab7bd1c0a28ba9ef36c1a3e847b708381ac9f5cd7800225fbd75d7917dda47c",
      "at": "2026-10-05T20:02:32.667Z"
    },
    {
      "id": "lem-cm-local-codimension-and-regular-quotient-ext-concentration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F9] drops the cited dependency's hypothesis that the abelian category has enough injectives. Its categorical restatement is therefore broader than the supplied interface licenses, even though the module category used in step 1.3 satisfies that hypothesis.",
      "context_sha256": "84f554004bd4777134e11f6f3ecacad8b0d662db9449bfdc0afd48a7dbcffebc",
      "item_sha256": "4d12f6900e17a770f24fed61c4210eff36b6cfad1c57fab53c7a09e7a5674b3d",
      "at": "2026-10-05T20:02:47.400Z"
    },
    {
      "id": "lem-finite-over-projective-noetherian-affine-base-is-projective",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 incorrectly restates coherence as local finite presentation. The supplied interface defines coherence by finitely generated kernels and explicitly denies this equivalence in general; equivalence requires the locally Noetherian hypothesis.",
      "context_sha256": "7a5cd03a5a3d2d31968d43ff140a1cdbeefba45174505516c390d246fa4aafb2",
      "item_sha256": "e1f3e6bb1014d99e8cfc59c5e977c818c30e2dd29e4986026a8dc9e7bb34f54b",
      "at": "2026-10-05T20:02:51.780Z"
    },
    {
      "id": "lem-regular-surface-reflexive-modules-and-codimension-one-lattices",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 asserts that M is locally free in codimension one without assuming torsion-freeness. For A=k[x,y], M=A⊕A/(x) has generic rank 1 but is not free at (x). The argument must explicitly pass to M modulo torsion.",
      "context_sha256": "ccf4fc4c07a8fa0632e2d6e1b16c31a84774f018e973c90bc3321a39ca46b54f",
      "item_sha256": "4a1701c8d63dbe6b00c99e4978f230cc196b8298def1575c17e5bad0dcd9e13a",
      "at": "2026-10-05T20:03:00.034Z"
    },
    {
      "id": "lem-surface-derivations-and-regular-hypersurfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The smoothness remark is false: take T=F_p[t], D=d/dt, f=t and r=p. Then D(f)=1 and T[z]/(z^p-t) is regular, but its map to Spec(T) is nowhere smooth (every geometric fiber is nonreduced).",
      "context_sha256": "faa14dfe862629e99110f67807f8e791c5cdcb23d3c03ca1ebf904c9d35cbf00",
      "item_sha256": "a5262c19b17c4eb885e3d907b841bc86c7899a0c293596f3a147f7f4a8daa99a",
      "at": "2026-10-05T20:02:44.183Z"
    },
    {
      "id": "lem-surface-flat-base-change-coherent-cohomology-by-cech",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 incorrectly identifies higher direct image stalks with cohomology of the local spectrum. The correct target is cohomology of X×_A Spec A_p. For X=P¹_k and F=O(-2), R¹f_*F=k, whereas quasi-coherent H¹ on Spec k vanishes.",
      "context_sha256": "9b0a0acb3d09ba0fd761a85121ba984ea642b872e0c893688ed2921962b0afcd",
      "item_sha256": "fd9fd10af69e9cada6e927bd538d8c0e42189c8b58709fdd87dcd81c306e802e",
      "at": "2026-10-05T20:02:53.964Z"
    },
    {
      "id": "lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "No Noetherian hypothesis is stated for A. Step 1.1 requires finite generation of P and invokes F3, F5 and F7, which require Noetherian rings. Completeness, normality and dimension two do not imply Noetherianity.",
      "context_sha256": "3b162ae93c05fb1dfbb65a942095261609eacaca63b9058f86160a53b6813bfd",
      "item_sha256": "1d46394a9340ca5726adbc9ba4206ecd934246d44ec04d49bb8f3a9dd00ba762",
      "at": "2026-10-05T20:04:25.444Z"
    },
    {
      "id": "lem-normal-surface-modification-leray-short-exact-sequence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 misreads the five-term sequence: the cokernel of H¹(X,O_X)→H¹(X′,O_X′) is the kernel of H⁰(X,R¹g_*O_X′)→H²(X,O_X), not the image of H⁰(X,R¹g_*O_X′). F7 does not license the asserted identification.",
      "context_sha256": "8807c5fc4127872bb40ed0aa4e43f177cc0cc360800d2c23954a581b9afb0946",
      "item_sha256": "0c14ab5835d3c267ad6be56db63f4a85a2bd64004ef1a3b31620c208df0aeeff",
      "at": "2026-10-05T20:03:17.675Z"
    },
    {
      "id": "lem-surface-completed-polynomial-generic-fibre",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 treats κ(r) as a field, but r is never assumed prime. Take A=k, q=(t), and r=(t²): all stated hypotheses hold, yet κ(r) is undefined. The statement must require r∈Spec(A[t]).",
      "context_sha256": "09e23797eb4010aa10bd66b624153f2d627886465716588ed03599497c900765",
      "item_sha256": "9d4f1ba224be45b15fe3ce4bc353be8c8782a73935b1b91c03f38c4afa23b98c",
      "at": "2026-10-05T20:03:55.739Z"
    },
    {
      "id": "lem-surface-regular-fibres-preserve-normality",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies F2 to S without establishing that S is a domain. F2 is explicitly restricted to domains, while a flat map with regular fibres can have target k×k over k. The cited criterion does not license this inference.",
      "context_sha256": "5806d0a7bf1e9f7e8cb509885618b8a67ae66a7cdcefc20746b735a894038ec5",
      "item_sha256": "76ef5a4dc601e1fcda6f57f4d9b9b2f57c94e32ab2d0b45c07f0896f9dd04f08",
      "at": "2026-10-05T20:04:00.810Z"
    },
    {
      "id": "lem-normalized-point-blowups-dominate-local-normal-surface-modifications",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 requires a,b∈m_x⊂O_{S,x}, but 2.1 imposes only positive valuation in the curve DVR. This does not ensure that division by the blowup generator yields regular a',b' with positive valuation, so the termination argument is unproved.",
      "context_sha256": "86e1ffd1dd39e675fd76dadf18583b804b7035feb664680b962aae639eb1225a",
      "item_sha256": "57d9f13d9a7bcf3cb7c96728e1297a9e5ae26fdbf2642c068e6a5e4893338cc0",
      "at": "2026-10-05T20:03:58.919Z"
    },
    {
      "id": "lem-projective-normal-surface-grauert-riemenschneider-vanishing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1 and 3.1 require dim A=2; F6 also requires R↪A. Neither is stated. For example, A=k[[s,t]]/(s) is a finite normal local R-domain, but Hom_R(A,R)=0 is not its dualizing module, so the cited surface duality does not apply.",
      "context_sha256": "db2ebf10cf12a30a9f6c013cf35745a5446b580868fe205ace7256c31d0d18f6",
      "item_sha256": "b1f7460830c97b1240816a372a3d5562ac72c9d9e507e12edbf35918a52393b1",
      "at": "2026-10-05T20:03:50.801Z"
    },
    {
      "id": "lem-rational-normal-surface-reduced-to-invertible-canonical-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 invokes F5 without establishing its hypothesis that A is essentially of finite type over a field or a complete equicharacteristic local ring. Being finite over a regular two-dimensional local base does not imply this.",
      "context_sha256": "1e710a223fd91dc835c626d8ceb7ff81c194a8f15cedbff2076aa16c2d3dbd77",
      "item_sha256": "8c591157b21e83d8b3aa52f32a8cbdc7bb5ce5674b08339bb14a4f07dc1b7eae",
      "at": "2026-10-05T20:04:40.079Z"
    },
    {
      "id": "lem-nonsquare-tangent-conic-rational-surface-blowups-terminate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 5.1–6.1 invoke F5 and F6, which require equicharacteristic rings. The statement supplies no equicharacteristic hypothesis, and the proof gives no reduction establishing it. Normal completion does not imply equicharacteristic.",
      "context_sha256": "d5a0ac8e1b78864ae3c632227b69d6a1bc9cd4b1f18d399820e279becbd37d81",
      "item_sha256": "13af8cc80157881e5282ea83abe8f4971d3436b318c74b26fdf3eb284e3bf3a6",
      "at": "2026-10-05T20:04:21.769Z"
    },
    {
      "id": "lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 invokes F3 without establishing its required normal-completion hypothesis for successors. F4 supplies normality of the blowup, but normal local rings need not have normal completions; no excellence or other sufficient hypothesis is stated.",
      "context_sha256": "b3d6c95d18bac252ce0eca916c22e93350a6e7784fdbacc74a12d909b19755ea",
      "item_sha256": "1c1ec0fa9336c2f15ac6b57d946915d8f37725f12224afa22f9759ec8a612656",
      "at": "2026-10-05T20:04:46.610Z"
    },
    {
      "id": "lem-double-plus-simple-cubic-rational-surface-branch-terminates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 invokes F7 and F8, both requiring equicharacteristic rings, but the statement does not assume equicharacteristic. Rationality, Gorensteinness and normal completion do not supply that hypothesis, so the termination argument is unlicensed.",
      "context_sha256": "cdde1f11a0ed4030436749e1bccd156552cd0b292f5e58d307634a563aa19852",
      "item_sha256": "33ec64d24b5ed875988a0e9e05bf8a126c5ed58bbe6ef92421dfc4498c6d9948",
      "at": "2026-10-05T20:04:20.352Z"
    },
    {
      "id": "thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 invokes F10 to preserve normal completion without establishing its field or complete equicharacteristic base hypothesis. Normal completion of A alone does not meet that hypothesis; thus the successor hypotheses required by F6 and F8 remain unproved.",
      "context_sha256": "a99a3a602f8198e60967ebba13d41832eaf82cb50b540650017f44919829e87e",
      "item_sha256": "aabe4df2419f8ce1cf850153e9c3ea70131fec8e559160b97e0affffb05460e7",
      "at": "2026-10-05T20:04:35.696Z"
    },
    {
      "id": "thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 8 invokes F13 without establishing normal completion of the rational local rings. Step 9 attributes this to F8/F15–F17, whose interfaces provide no such conclusion; finite normalization and an open regular locus do not license it.",
      "context_sha256": "823eb3863e022a8026f732215194a5e0b310cd405013c24e4e790b7e02429441",
      "item_sha256": "f323ba51bab95bc993b73558ad2421c50f5e2d175f55c852a9c3bea036720d71",
      "at": "2026-10-05T20:04:53.156Z"
    }
  ]


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
