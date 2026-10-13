# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"26",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:def-cm10-angular-velocity, 8:def-cm10-inertia-tensor, 9:ex-cm10-euler-angle-pole-and-orientation, 10:cex-cm10-degenerate-line-mass-singular-inertia, 10:ex-cm10-equilateral-triangle-rotational-inertia, 11:ex-cm10-parallel-axis-shift-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm10-angular-velocity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: the configuration interface sets physical labels to S=supp ν, so the material velocity field is only on x(t,S). For ν=mδ₀, S={0} and its sole velocity is c′, independent of ωₛ; clause (d)'s claimed uniqueness fails.",
      "context_sha256": "67e78788803f87b6f53af478881f4c83be24294fd5914dddc351cc8f4f5bf7a5",
      "item_sha256": "0241d360eb8c610843c02bcb04a72cf80c862e066180b3f53bf5b9a78418d5fc",
      "at": "2026-10-12T19:48:30.908Z"
    },
    {
      "id": "def-cm10-inertia-tensor",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal prerequisite cycle: this definition lists pthm-cm10-principal-axes in deps, while that theorem assumes this definition's inertia data. The dependency graph is therefore not acyclic.",
      "context_sha256": "356065b35c5ffa6257da8b78c2117deb8ba9df0b0a903bdb440515ca691a51ab",
      "item_sha256": "0fab1b66d4cc31818e04dc85d995778b0e955079c0c4e68df403195dd18da052",
      "at": "2026-10-12T19:46:45.769Z"
    },
    {
      "id": "ex-cm10-euler-angle-pole-and-orientation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The path R(t)=R_y(t) uses physical time (read in seconds) as an angle, then gives ω=e₂ without the required inverse-time scale. Specify a rate ν with [ν]=τ⁻¹, e.g. R_y(νt); as written, the physical example is dimensionally incomplete.",
      "context_sha256": "3b525708128a8e73ff78a5224d5f3d536d829868f83c475ed30d175918bfbd63",
      "item_sha256": "bc32f303e23c539b54e8b791cf97fc0adf471bcf60200742d499dc6723ba4ccb",
      "at": "2026-10-12T19:48:01.824Z"
    },
    {
      "id": "cex-cm10-degenerate-line-mass-singular-inertia",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the physical example assigns no units to the atomic mass m0 or separation a, so the displayed inertia 2m0a² is dimensionally untyped. The library requires these units to be stated; the rotation rate varpi also needs units of inverse time.",
      "context_sha256": "9f1ccaf18258476a51c456bc0d6dc9ade6549d719394c792296d1691464e8bc8",
      "item_sha256": "f8b7aa81d63d0e8bf3e84c14b225a49e45ee094247ebaac220a92d06dded3f1e",
      "at": "2026-10-12T19:47:45.095Z"
    },
    {
      "id": "ex-cm10-equilateral-triangle-rotational-inertia",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: m₀ and a are declared only as positive reals, with no mass or length units, and the inertia and rotational-energy outputs have no units stated. This leaves the example’s physical formulas dimensionally untyped despite listing the units definition as a dependency.",
      "context_sha256": "77908b9c899f004bf5cc846e7925fd2da97d16599d8e539aea2f53fad6f0f334",
      "item_sha256": "605a6d4c8518cbfce10f93f3c6750447e64fddd62b3f399855355fc03adfe288",
      "at": "2026-10-12T19:48:05.513Z"
    },
    {
      "id": "ex-cm10-parallel-axis-shift-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example evaluates I(0,ae1), but an allowed motion is defined only on an arbitrary open interval I0, which may exclude 0 and need not attain (c,R)=(0,I3). Those tensors are undefined for such models; assume a reference-placement time or define the calculation independently of ",
      "context_sha256": "3a856a0f3556b28d73a5c206d65a36b50edda802c1189096f02b7f0ee74c54d5",
      "item_sha256": "cac64bd37b1b0a0a45696fa7b8e0d13e6fbfb8b433f250d2390d9fa359e6886d",
      "at": "2026-10-12T19:47:42.429Z"
    }
  ]
