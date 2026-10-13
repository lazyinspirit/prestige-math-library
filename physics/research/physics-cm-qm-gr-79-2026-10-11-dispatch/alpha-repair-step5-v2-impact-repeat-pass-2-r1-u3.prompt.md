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

# Step 5 frontier owner repair agent

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are one of three Sol 6.1 high owner agents in 7.2, 7.6 or 7.9.
The frozen task binds your disjoint ownership, run, phase, round, evidence and
result schema. Empty lanes report honest no-ops.

Repair only assigned draft IDs in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/frontier.json`.
Published repairs inside that frontier have no item gate, rejudge or adjudication
obligation. Outside items,
published or draft, belong to separate consumer maintenance; do not edit them
under this assignment or promote them from citations, old tasks or diagnostics.
Before 7.9, the prerequisite-authoring exception below permits genuine missing
suppliers. 7.9 and its continuations permit no new items.

All three frontier owner lanes run concurrently. Keep item writes disjoint.
Before editing any shared page, contract, manifest, index, registry or ledger,
acquire `node tools/physics-support/step5-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`.
Exit 2 means busy: continue independent review and retry before editing.
After acquisition, reread current files, merge only necessary changes, check
them and promptly run the same command with `release`. Never hold the lock
during research, retrieval or waiting. Never remove another owner's lock;
report an abandoned lock. Reserve IDs and register additions under this lock.
Finish shared edits before reporting completion.

The authoritative proof contracts are
`research/physics-cm-qm-gr-79-2026-10-11-batch-N.proof-contracts.json`. The level file
`research/physics-cm-qm-gr-79-2026-10-11-proof-contracts.json` is generated by the `merge-contracts`
gate and replaced before every gate battery. Write each contract repair to
its owning batch file under the shared lock. You may refresh the level file
for a local check, but a level-file-only edit is lost at the next gate.

Logical validity governs every decision. Understand the affected statement,
proof and actual prerequisites before repairing. Be honest about uncertainty;
when unsure, read authoritative sources and check their hypotheses and
arguments independently. Sources, judges and prior reviews can be mistaken.
Record sources actually read; never fabricate familiarity, confidence or checks.

Assignment requires examination, not an automatic edit. Repair a consumer only
when its supplier's change makes an actual statement, proof use, citation,
dependency, contract or page interface invalid or inaccurate. Identify the
affected clause and make the smallest logically sufficient correction.
Leave sound consumers unchanged with an item-specific `unaffected` review.
Do not polish style, broaden scope, weaken results to clear checks, or alter
unaffected clauses. Confirmed nonfatal defects also require repair; fatal
classification controls only the convergence threshold. Preserve the
Foundations boundary and exact AC assumptions/uses.

Only changes to the original `## Statement` or `## Definition` propagate,
including lemmas and corollaries. Compare the sections directly, without a
semantic classifier. Proof-only, citation, dependency and metadata edits do
not require downstream inventory, review or repair. New prerequisites are new
interfaces. Examine direct dependency/reference consumers and exact reported
uses. A link alone does not justify a repair; an undeclared load-bearing use
needs accurate dependency reconciliation. Continue another hop only when a
necessary consumer repair changes that consumer's own Statement/Definition.
Never expand a transitive closure through unchanged statements.

Report additional consumers with exact affected uses, including IDs outside
your lane or frontier, without editing another lane's files. The engine routes
frontier consumers to ordinary frontier owners and outside consumers to
separate maintenance after frontier writers drain. Outside maintenance uses
three disjoint lanes, its own evidence and exact snippet edit accounting; it
does not enter Step-5 repair, adjudication, rejudgment or item gates.
Each supplier-interface event and outside consumer is handled once. Gates and
unrelated context changes do not reopen that obligation. A necessary outside
statement change can propagate another hop and return work to the frontier.
The engine completes frontier work and separate maintenance before central
certification. A candidate record is not a completed review or repair.

Before 7.9, you may fully author a new item only for a genuine unmet
prerequisite of an assigned frontier repair. Record the missing claim, consuming
proof step and why existing items do not suffice. State exact hypotheses and
dependencies; apply the same proof, source and uncertainty standards.
Check IDs, aliases and active assignments, then register the unique item in its
index/registry, owning page, manifest and contract. No orphan files or unrelated
results. Include creation evidence in the task schema. Additions preserve
author-origin/certification integrity but do not enlarge the frozen frontier or
enter its Step-5 rejudgment/gate loops. Do not issue verdicts or stamps.

For 7.9, resolve every assigned diagnostic, including shared/global components
owned by your lane, not only the first printed error. Read frozen diagnostic
files in bounded chunks. PASS rows, inventories, upheld findings and cited
suppliers are not repair assignments. Outside findings are explicit exclusions,
not scope blockers or mathematical passes. Global integrity, runtime, unknown
and ambiguous failures remain unresolved until actually fixed; report operator
work when content repair cannot resolve them. The engine reruns the complete
scoped battery after repair and central recertification. Local checks do not
replace that battery.

Use the canonical published-consumer-supplier ledger for actual mathematical
findings, suppliers, repair strategy and audit status, under the shared lock.
Keep operational history in run evidence. Preserve historical assignments and
reports. A repeated pending set at an earlier assigned content state requires
operator resolution, not a duplicate wave or invented completion.

Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy all identity fields exactly from the task; `impact-repeat` is not `repeat`.
Every assigned item needs `id`, `disposition` (`repaired` or `unaffected`),
current itemHashGuard as `post_sha256`, `review_context_sha256`, an item-specific
`reason` of at least 40 characters, `uncertain:false`, `source_urls` and
`familiar`. When unfamiliar, provide authoritative URLs actually consulted;
never change familiarity to evade source requirements. Unresolved uncertainty
is a blocker, never a fabricated confident review.

Disposition describes the guarded item, not ancillary files. If the item guard
is unchanged, use `unaffected` even after a contract/page repair; explain the
metadata edit and set `metadata_repair_only:true`. Immediately after each review,
before another supplier edit, run
`node tools/physics-support/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Stable batches may use comma-separated IDs. Never refresh an old hash
without examining changed effects. Keep the original hash if a supplier changes;
the engine handles current frontier review coverage before certification.

`downstream` contains additional affected IDs. Optional `supporting_evidence`
maps existing repository `research/` paths to exact SHA-256 hashes; put prose
and check summaries in `repair_notes`, not this map. Never invent hashes.
Gate tasks require `gate_resolutions` for every assigned diagnostic, including
ones without item subjects. Empty assignments return empty arrays. Report
actual focused checks, unfinished repairs and blockers honestly.

Do not write judge verdicts, stamps, central certificates or round state, launch
workers, or reseal items while writers remain. The engine alone dispatches
Sol 6.1 high judgment and controls repeats. Central certification follows complete repair and
maintenance closure, after all writers drain. A successful dispatch does not
establish completion, and the strict less-than-2% threshold never waives
unresolved mathematics. Do not claim independent review for your own repair.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: alpha-repair
label: step5-v2-impact-repeat-pass-2-r1-u3
covers: impact-repeat-pass-2:3
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-repeat-pass-2-r1-u3.json

# Step 5 repair: impact-repeat-pass-2, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/impact-repeat-pass-2-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-repeat-pass-2-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"impact-repeat-pass-2",round:1,unit:"3",input_sha256:"794a12547319424439df833593d8301e8e87062d0365b3e5c07302d8afe386e1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "ex-cm08-pair-potential-charges-check",
    "disposition": "fixed",
    "reason": "The pair-force and boost uses remain sound under the repaired suppliers. Corrected the reported undefined e_3 in Example 5, F6 and Verification 2.3/3.1 to (0,0,1); direct cross-product calculation gives e cross e-prime=Omega(0,0,1), preserving every charge and numerical result.",
    "post_sha256": "3511757f7384d652bd2da039629440fb639a9d1c72fdd426b385d2a577490aed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives",
    "disposition": "fixed",
    "reason": "The coefficient fields remain on the common E=D(rho/4) domain with finite truncation order. Corrected Proof 1.1's any N>=j to N>=max{2,j}, because the defining supplier allocates truncations only for N>=2, including j=1. The statement's common-domain convention and all symplectic/primitive conclusions are unchanged.",
    "post_sha256": "9da6d5fb28dfdb480bc2043b0badf24d8dfa83eb1bf4fd528fe9dbca94fa1444",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "ex-cm09-triatomic-translation-zero-mode",
    "disposition": "fixed",
    "reason": "The modal-unit extension matches the normalized calculations. Repaired the scalar/matrix collision by naming the middle mass m_c and retaining M for diag(m,m_c,m), preserving the source's original M notation in its bibliographic title. Verified all generalized eigenpairs, mass inner products, affine zero mode and frequency ordering; only notation changes.",
    "post_sha256": "b7509835dd9a6c0baa02cb286176c614571a77d601105ca2f1aa1d91eb5c941b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "pthm-cm15-control-volume-balance",
    "disposition": "fixed",
    "reason": "Confirmed the reported units defect in Statement 3, also present in the opening density/stress dimensions and L4. Replaced the operator symbol mathsf M by the mass dimension mu throughout those dimensional expressions. The localization, relative boundary fluxes, positive-mass quotient and inlet/outlet product-rule deductions retain their original hypotheses and conclusions.",
    "post_sha256": "b8dce6d303ded82d42267bbf6549ad124f2fb3e57659b5793f7bb97b7257f4a0",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "ex-cm15-control-volume-check",
    "disposition": "fixed",
    "reason": "The corrected supplier dimensions expose the same mass-operator symbol in this Example's rho0 and p0 units. Replaced both by mu; its local mass/momentum residuals, control motions, effective-port definitions and 0.4 kg/s, 8 m/s, (-1.6,3.2) N calculations remain unchanged and agree with the repaired control-volume theorem.",
    "post_sha256": "7596b968d97fe8e8eb737406d298e130d20c322b657ae04eb5bb8705941463dd",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "ex-cm16-pendulum-equilibrium-checks",
    "disposition": "fixed",
    "reason": "Corrected L1 to the repaired supplier's associated vector equation. Resolved the reported trigonometric prerequisite gap by declaring the exact quarter-turn, real zero-set/period and strict-monotonicity suppliers in L2 and deps. They give sin(pi)=0, cos(pi)=-1, cos(q)<1 for 0<|q|<2pi, and the complete equilibrium classification. The unchanged matrices still have eigenvalues +/-i sqrt(g/l) and +/-sqrt(g/l), and energy excludes attraction.",
    "post_sha256": "e830067aff647dd36e5e59479cde902e6c68fc2631a5dd37a2e82af9f743fd3c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "lem-cauchy-fourier-and-lattice-shell-bounds",
    "disposition": "fixed",
    "reason": "Both Statement data classes already require full-domain angular periodicity, which supplies the Fourier rectangle cancellation after the supplier repair. Corrected the confirmed proof-layout defect by removing repeated premature justification groups; all seven steps retain their full arguments and final tags, with no Statement change.",
    "post_sha256": "ae4fbd9bfd71f102f41b37c9073a9c8d1c2d5d7103672775c28f02a3904b37e8",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "thm-positive-measure-analytic-kam-family",
    "disposition": "fixed",
    "reason": "Statement datum 4 already requires full-domain angular periodicity, so frequency translation preserves the amended Hamiltonian condition. Removed premature duplicate tags and joined each complete numbered proof step, including the unnumbered continuation of 2.1, into one paragraph; all estimates, premises and conclusions are preserved.",
    "post_sha256": "d134e47c7ee7e30a70ffca74f47eeabd87d9017e9751d9306b7c7efa5a09879c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "pthm-nrqm-potentials-barrier-flux-and-transmission",
    "disposition": "fixed",
    "reason": "F3 and Proof 5.1 improperly inferred non-L2 membership from generalized-solution vocabulary. Restated the repaired weak-equation reading and verified matching in 1.1. Proved exclusion for this actual barrier solution: its finite positive denominator gives T>0, so |psi|^2=|A_in|^2T>0 on x>a and the half-line integral diverges. The Statement, physical_scope, flux identities and transmission/error formulas are unchanged.",
    "post_sha256": "4d10fa99a3c5515fe749ad5299fb1f04cf1585494ecbd0a664dacb2a10fc9145",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-confirmed-repair",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "2",
    "id": "ex-gr-weak-field-poisson-quadratic-potential",
    "disposition": "fixed",
    "reason": "The Einstein-family source construction uses the repaired local tensor definition, with this diagonal metric admitting the explicit timelike partial_0 orientation. The coordinate-density estimate remains the general component estimate, not a dust claim. Removed the reported premature tag group in Verification 3.1, preserving its exact inequalities and final tags.",
    "post_sha256": "0af51e390043379504f7e2bc8296390b958e059881b25a9630680397c48f6938",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "All changed carriers and direct item consumers are draft frozen-frontier items; no published defect or supplier repair was found in this scoped examination. Imported mathematical suppliers remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_owner_resolution",
    "subject": "pthm-nrqm-scattering-stationary-wave-amplitude-and-flux",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "3",
    "disposition": "fixed",
    "reason": "Confirmed arbitrary-representative error in F5/Proof 5.1: a potential nonzero only at one point has zero essential support but invalidates the declared-V equation pointwise there. Repaired those two passages to retain the global distributional equation and free exterior equation pointwise, with declared V only almost everywhere or its zero exterior representative. Bounded V gives V Psi in L2_loc. The existing integral inverse, current scaling, remainder and cross-section conclusions remain intact; owning batch-61 F4/F5 quotes and derivation 5.1 synchronized. Statement and physical_scope unchanged.",
    "post_sha256": "ac0b613b98128aaa33214c4de0c2d419ccc5260564030bd7ca9b29e9503c3de2",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_owner_resolution",
    "subject": "thm-gr-conjugacy-and-local-timelike-maximum",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "3",
    "disposition": "fixed",
    "reason": "Repaired L6 to carry the supplier positive-derivative hypothesis, including one-sided endpoints and actual image intervals. Proof 8.1 now checks alpha-prime=rho-prime T composed with rho: both tangents future timelike force rho-prime>0 on pieces/endpoints, and surjectivity gives image [0,b]. Thus the same equality characterization remains proved without restricting the Statement. Owning batch-68 L6 quote and derivation 8.1 synchronized.",
    "post_sha256": "d6a4d1c2788576337e6d4e154226b65092f174b050200d51b7a4c64863c9b5a0",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "impact-repeat",
    "round": 1,
    "unit": "3",
    "reason": "No published carrier was edited or newly found defective in these scoped supplier-use examinations. Both local repairs change Facts/proof only; all public interfaces remain identical to the frozen before sections. Imported mathematics is read-only; no published maintenance finding or certification is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "pthm-cm16-variational-equation-and-linearization",
  "pthm-nrqm-central-coulomb-energy-observable-and-flow",
  "pthm-nrqm-central-spherical-reduction-of-smooth-states",
  "pthm-nrqm-potentials-delta-point-interaction-bound-state",
  "rem-nrqm-central-scope-and-empirical-status",
  "rem-nrqm-potentials-scope-and-idealizations"
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
