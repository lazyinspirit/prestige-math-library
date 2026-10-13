# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/physics-support/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/physics-support/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: alpha-adjudicate
label: step5-v2-initial-r1-u8
covers: 8
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u8.json

# Step 5 adjudicate: initial, round 1, unit 8

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-8-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"8",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-cyclic-spring-chain, 0:def-cm-euclidean-spatial-calculus, 0:lem-cm-determinant-derivative-along-a-matrix-curve, 0:lem-cm-fejer-completeness-for-continuous-periodic-functions, 0:lem-cm-localization-of-vanishing-integrals, 0:lem-cm-uniform-convergence-with-derivatives-on-a-rectangle, 0:thm-cm-burgers-characteristics-and-gradient-blowup, 1:def-cm-fluid-constitutive-models, 1:thm-cm-spring-chain-dispersion-relation, 2:thm-cm-plane-elastic-waves, 2:thm-cm-smooth-string-fourier-series-solution, 2:ex-cm-spring-chain-mode-and-limit-check, 3:thm-cm-local-momentum-balance, 3:ex-cm-string-modes-and-tail-constants, 3:ex-cm-transport-of-a-translating-uniform-flow, 5:thm-cm-kelvin-circulation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-cyclic-spring-chain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the supplied interface defines “smooth” as C∞, but (c) requires only C² in t and C⁴ in x. For example, f(x)=|sin(πx/L)|^{9/2} and u(t,x)=f(x−ct) satisfy (c) but are not C∞.",
      "context_sha256": "1eb58a201104bf68f90cdcc95382ddbdf18b02d12d256f3e6c6c584a32382a0b",
      "item_sha256": "3ceb61803b51317197f581899139c80eea36dafa7cc65949d456851ef07a7d3b",
      "at": "2026-10-12T19:26:42.242Z"
    },
    {
      "id": "def-cm-euclidean-spatial-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal index mismatch: the supplied Euclidean and Jacobian interfaces index R^3 coordinates from 0 to 2, but the definition uses 1 to 3. Thus its Jacobian includes out-of-range partials and its divergence sum is invalid.",
      "context_sha256": "3455482ce9ba8690e1cfb0c4dce143780eee853a533d3f36755b9853e0761cc6",
      "item_sha256": "cbdaad4dd9c78f4748bfe67bde0fb7926e6e913dd2e622a4facf51b4800a681d",
      "at": "2026-10-12T19:25:12.142Z"
    },
    {
      "id": "lem-cm-determinant-derivative-along-a-matrix-curve",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.2–1.3 index columns by i∈{1,…,n}, but [[def-matrices-over-a-commutative-ring]] defines M_n using column indices j<n (0,…,n−1). For n=1, the proof refers to nonexistent column 1, making the determinant expansion and F3 application ill-typed.",
      "context_sha256": "eb6bcc9a137b87373310c2e42c8a84661322ee86b183f96c3fa35876b40a34cb",
      "item_sha256": "af173fb95e63fe57567c127f5cd0f8a4617ed738262a017dc41e7296a5b9d43c",
      "at": "2026-10-12T19:25:24.526Z"
    },
    {
      "id": "lem-cm-fejer-completeness-for-continuous-periodic-functions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 needs e_k to be 1-periodic to apply [F3] to h(u)e_k(x-u). The supplied exponential interfaces give only the power-series definition and addition/real extension, not exp(2πik)=1; this essential character-periodicity fact is unestablished.",
      "context_sha256": "14c0f666c49e27fafda69333ca3847c1b6407b57074f182380a164736459feb9",
      "item_sha256": "2741d1e092da061eb84ec216f278170f62fa86c9a790629964e9993002f10211",
      "at": "2026-10-12T19:28:28.027Z"
    },
    {
      "id": "lem-cm-localization-of-vanishing-integrals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal typing error: the supplied R^3/box interface indexes coordinates 0≤j<3, but Q_r uses j=1,2,3; y_{0,3} is undefined and coordinate 0 is omitted, so Q_r and its cited volume and containment claims do not typecheck.",
      "context_sha256": "85f0500a1f06a2712e865f1d1829495c966e5112d46951e3b2e40d10dc08b79c",
      "item_sha256": "4ca4cda922c10a93009dc46ff85743c88ae42576ec6a666051bc2736340d1bd8",
      "at": "2026-10-12T19:25:47.689Z"
    },
    {
      "id": "lem-cm-uniform-convergence-with-derivatives-on-a-rectangle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: F4 and 2.1 use Newton–Leibniz to turn derivatives into integral increments. Cited thm-ftc-first-part only says the integral function has derivative h; it does not license ∫h'=h(b)-h(a). No evaluation theorem or MVT is supplied, so mixed-partial equality is unsupported.",
      "context_sha256": "ea55c466025fe025b9fce4bce12aea5b919c3ad2c47b6b3635079940e60d7ad4",
      "item_sha256": "ec1e9052c6e5062470617461ff537ac07af82a0bec7bbc00ea76413574b90d31",
      "at": "2026-10-12T19:27:42.530Z"
    },
    {
      "id": "thm-cm-burgers-characteristics-and-gradient-blowup",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item calls the solution “smooth,” but the library defines smooth as C∞ while only f∈C² is assumed. Since u(0,x)=f(x), admissible non-C∞ data need not yield a smooth solution.",
      "context_sha256": "c50098faeba346525d820dd6f4d84cfa877d41b3eac751b0e3490240b275152a",
      "item_sha256": "00e8e7a0e719bda9d1e75804cc021f221d9dcfec70e35d382b1ac51bb3e4548a",
      "at": "2026-10-12T19:27:27.033Z"
    },
    {
      "id": "def-cm-fluid-constitutive-models",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "(b) calls V a “potential” but specifies only its type, not what it is a potential for or how it relates to a force or energy. V is also unused in the constitutive law, leaving this claimed model datum undefined.",
      "context_sha256": "659c4c5c4865e372cf580e26cd4fd0d1a5c8d188b60a252b805534c4f91f26d8",
      "item_sha256": "f2e25f876441c91a27c1c5d9cb0a5b827c28df594e1cc6cd89f67e5d8fbe78c3",
      "at": "2026-10-12T19:26:22.531Z"
    },
    {
      "id": "thm-cm-spring-chain-dispersion-relation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates its cited interfaces: they do not supply |sin r|≤|r|. Steps 1.2 and 3.1 rely on that bound; it needs a local derivation, for example from sin'=cos, the FTC, and |cos r|≤1.",
      "context_sha256": "1d8f16867f65d5f31660fcaf8728e80bef88ed4adf82276f3290fe0d1a5b8707",
      "item_sha256": "796cac2d08f95e8da6dd9a0c1d0d5457e899430004fed3db347fcd77c15fff31",
      "at": "2026-10-12T19:27:07.434Z"
    },
    {
      "id": "thm-cm-plane-elastic-waves",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof computation is sound, but this mathematics-domain theorem depends on def-cm-linear-elastic-constitutive-law, an adopted physical model item. The mandatory rule forbids mathematics items from depending on physics.",
      "context_sha256": "95c140f6684ed8f1321907ee5f6693a3ec9f8f8d2a31696c3bd8d00b3ba2802c",
      "item_sha256": "314b644bfa48e2a38c4f5a3a5ae418b06dfa1974fcc2364015228a9a2a308acd",
      "at": "2026-10-12T19:26:45.624Z"
    },
    {
      "id": "thm-cm-smooth-string-fourier-series-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the cited C^k definition reserves “smooth” for C∞, while the hypotheses give only F∈C⁵ and G∈C⁴ and the conclusion gives u∈C². With G=0 and a C⁵ non-C∞ F, u(0,·)=F, so u need not be smooth.",
      "context_sha256": "0723e30ec29e62a60228fbe244cae2ef24b6600e572e7fc4751574b952b27822",
      "item_sha256": "1628b3a6a02ac10fcb1df03bc47454aa9420ae187fd038815aa22a3840d14800",
      "at": "2026-10-12T19:27:25.272Z"
    },
    {
      "id": "ex-cm-spring-chain-mode-and-limit-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 relies on unprovided proof steps of the dispersion theorem for global sine-remainder bounds; the supplied interface licenses the continuum bound only when |κa|≤1. It does not justify using that dependency at κa=π/2.",
      "context_sha256": "9deb0933009c593cd271002d1bae6af5813f98b1bb5bbed42e1317ab8758368b",
      "item_sha256": "abbc1a7c874c48308939a715d5e800b63b5c72a71052d010b86edbe78ace486e",
      "at": "2026-10-12T19:30:48.397Z"
    },
    {
      "id": "thm-cm-local-momentum-balance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims balance on every material subregion, but (L) assumes it only when the current image is a bounded C¹ domain; the title overstates the premise.",
      "context_sha256": "70d7a928704fe095a3356e177103649c80589d8347fac9d329de9c2c04f54f31",
      "item_sha256": "46692d341da27c4ddf0db5fff3be9bb9abbc719ba42faa34b99c10929c56ff25",
      "at": "2026-10-12T19:26:09.538Z"
    },
    {
      "id": "ex-cm-string-modes-and-tail-constants",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The displayed bound uses undefined $u_1$, while the cited theorem bounds the tail after the $N$-mode partial sum. The left side does not depend on $N$; state the matching tail inequality with that partial sum.",
      "context_sha256": "f1b7612f26ec4476c91cf3928d9bad9bb3418764aa8449836e433accd9f64c2f",
      "item_sha256": "e8d9ddf6e9bf973e6b3e8fb4a8e29faac2a6a4b6a26bd061f9dab1a7e330e635",
      "at": "2026-10-12T19:28:00.679Z"
    },
    {
      "id": "ex-cm-transport-of-a-translating-uniform-flow",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 asserts the chain-rule derivatives of h(x−tv), but its cited interfaces do not establish the derivative of a composition; the total-derivative result only identifies directional and partial derivatives once differentiability is known. Thus steps 1.2 and 2.1 rely on an unsuppor",
      "context_sha256": "7744b4f25dfef15ddc071acf2fe844a809eac092f6b1f81f12c15e10b5596f30",
      "item_sha256": "6c90ef619c0740d180568501eb2db9384aee1559d2e990a5351e2c23ddee0c79",
      "at": "2026-10-12T19:27:33.668Z"
    },
    {
      "id": "thm-cm-kelvin-circulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The pressure hypothesis refers to “the rectangle,” which is never defined; moreover, p is a function of density, not the stated time-space domain. Thus p’s required C¹ regularity for invoking the momentum theorem is not well-typed or established.",
      "context_sha256": "98fd48a8eb736196a749b5070637166f33d52e6b8ac7ff0128ccd47fff0c6793",
      "item_sha256": "cd713938fca92cad28659850d19c6c474d8b3c04e3078f920a43309d205f4c97",
      "at": "2026-10-12T19:28:21.262Z"
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
