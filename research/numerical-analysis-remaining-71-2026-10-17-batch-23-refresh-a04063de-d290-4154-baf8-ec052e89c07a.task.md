# Owner-requested Step-1 continuation: batch 23
Request: a04063de-d290-4154-baf8-ec052e89c07a; requested at 2026-10-17T12:21:12.335Z.
Owner reason: Initial native batch23 writer drained successfully. Owner requires all necessary prerequisites with all71pairs in one frontier; five new same-A-page prerequisite items are now explicitly inventoried and genuinely lack carriers. Complete PBH reachable decomposition/pole placement and closed-region equivalences, finite Schur/QZ stable-block reordering with correctness/status, and DARE deflating-subspace perturbation bound from all three complete ROOT-riccati-*-supplier-cycle1 packets. Read current owner-authoring-direction.md. Aggregate PBH complexification, extraction Definition and dense-work consumer repair, and DARE sensitivity augmentation in this single continuation. Preserve all sound CARE/DARE statements, real/complex fields, singular-A and infinite roots, endpoint boundaries, statuses, work budgets and true arithmetic/certification distinctions. Complete all actual carriers, placements, metadata, contracts, source evidence and truthful readiness; preserve native history and gates.
Original native result: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-dispatch/beta-batch-23.result.json; original session: 01a14991-9736-7760-aea0-c97430c2c4bb.
Original result SHA-256: 3c7e7a80b967fcf795ef9ce0e9069ee0577a524efdb0650f2586870bbd2fd057; original prompt SHA-256: 02b6581a40756571a616c4c6456ba0c6699ca4f4078b5e8bf8e3af7c94869959.
Continue the original assigned authoring against current sources. Preserve all completed sound work and original native evidence. This is the single operational continuation; report genuine mathematical blockers precisely to the owner. A successful process or hold report is not completed authoring. Complete actual item/page carriers, manifests, contracts and current readiness under the full original assignment.

# Full original assignment (historical input)
# Step 1 — mathematics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Edit only assigned draft items, A/B pages and batch evidence; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- **Cross-pair authoring is parallel.** Continue authoring when a prerequisite owned by another pair is absent or still being written. Use the controlling plan and declared interfaces to draft independent definitions, proof arguments and examples; record exact unresolved supplier IDs, required hypotheses and affected claims. Do not wait, poll, stop the batch at the first missing supplier, or edit another pair's files. Complete all work possible within your pair. Planned interfaces are drafting context: verify actual supplier bodies before claiming readiness, and never invent source excerpts, completed proofs or acceptance. If suppliers remain unavailable at handoff, record the precise unresolved checks honestly for reconciliation; do not omit the dependent claims.
- Read `research/numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, hypotheses and conventions.
- Use TikZ to draw commutative diagrams, string diagrams, Young's tableaux, knots, braids, Temperley–Lieb algebra diagrams, quantum circuit diagrams, quantum logic gates, DFAs, NFAs, Turing machines, and other mathematical objects whenever and wherever appropriate. These diagrams must be fully and rigorously explained and justified. Keep their conventions compatible with the literature; rigorous proofs must not rely on diagrams.
- Fully justify **every proof step**. Write complete proofs, refutations, counterexamples and verification arguments; a strategy or citation alone does not supply a missing argument.
- **Proof format:** Label facts and hypotheses in `## Facts & Assumptions` with `[F1]`, `[A1]`, or `[L1]` entries and exact supplier wikilinks. Supply `proof_strategy` and `**Given:**`; write at least two `phase.step` steps (`1.1`, `1.2`, …), separated by blank lines. End every step with valid justification tags naming its inputs; cite only earlier steps. Put punctuation before tags and `∎` after the final group. Match labels and step numbers exactly in the proof contract.
- State required axioms, declare their dependencies and identify their uses. Preserve choice-free arguments and distinct axiom branches. Never use a result to prove its own replacement; follow schema restrictions on unproved suppliers.
- Read authoritative full-text sources; normally use two independent treatments per A page, including a book or full lecture notes. Record URLs, locators, supported items and each harvested result’s disposition. Verify retrieval by inspection and `source-fetch-check --stamp`; never invent reading or fetch evidence.
- After a retrieval failure, search alternatives and make at most five recovery retries, stopping on success; reuse prior attempts. After five failures, supply complete alternative proofs or escalate. Preserve source history; record attempts, searches and per-item arguments/dependencies in `source_resolution` under `tools/source-resolution.mjs`. Mark `dropped` only with justified certainty; otherwise `owner-escalation`. Dropping a source never waives mathematical coverage.
- Complete assigned items, A/B pages, manifests, proof contracts, coverage, notes, readiness records and cross-batch dependency inputs. Preserve unchanged ready content; respect the 100-item page cap and schema requirements.
- Generate proof contracts from finished arguments, with actual steps, claims, inputs, exact supplier excerpts, boundary cases and applicable finite checks. Keep manifests, pages, coverage and dependency records consistent.
- Run required scoped checks, including dependency levels and `node tools/proof-layout.mjs` on explicitly changed items after final edits. Record actual results and blockers. Use `node tools/step1-decisions.mjs record` to mark each final item `ready` only with complete prerequisites, placement and contract; otherwise `escalated`. Include examined dependencies and evidence; never use `--owner` or overwrite an escalation.
- Keep proofs concise: retain essential reasoning and caveats; remove repetition and filler. Report defects with exact item IDs and evidence. Completion records do not constitute independent approval.

## Proof example

```markdown
---
proof_strategy: direct
---

## Facts & Assumptions

**Given:** A nonempty open interval $I$, $f\in C^1(I,\mathbb R)$ and $f'=0$. Prove $f$ constant.

[F1] [[cor-mean-value-theorem]]: continuity on $[a,b]$ and differentiability on $(a,b)$ imply $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

## Proof

1.1 Choose arbitrary $a<b$ in $I$. The restriction satisfies [F1], so $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. [given, F1, choose]

1.2 Since $f'(c)=0$, $f(b)=f(a)$. Arbitrary endpoints give constancy on $I$. [given, step 1.1, algebra] ∎
```


---

# This dispatch

run: numerical-analysis-remaining-71-2026-10-17
role: beta
label: batch-23
covers: 23
output: research/numerical-analysis-remaining-71-2026-10-17-batch-23.pages.json

Batch 23: dependency_level 0; prerequisite batches: none.
Current scheduling input: a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c.
Determine item inventories, logical deps and item dependency_level labels in the scaffold manifest before writing carriers. Author suppliers before consumers in ascending item level.
Continue authoring this pair even if another pair has not supplied a prerequisite yet. Use the controlling plan and declared interfaces to draft independent definitions, arguments and examples; record exact unresolved supplier IDs and required hypotheses. Do not wait, poll or edit another pair. Verify actual supplier bodies before claiming readiness; never invent supplier excerpts or approval.

<!-- Source: research/numerical-analysis-remaining-71-2026-10-17-beta-23.task.md -->
# Batch 23 of run `numerical-analysis-remaining-71-2026-10-17` — Numerical algebraic riccati equations and stabilizing branches

1 A/B pair in numerical-linear-algebra-and-approximation. Own only these pairs.

Read `research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md` before constructing any item. It is binding and overrides stale task or design text.

## `numerical-algebraic-riccati-equations-and-stabilizing-branches`

| | |
|---|---|
| A page | `numerical-algebraic-riccati-equations-and-stabilizing-branches` · order **2600** · `numerical-linear-algebra-and-approximation` |
| B page | `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples` |
| title | Numerical algebraic riccati equations and stabilizing branches |
| requires | `generalized-eigenvalue-pencils-and-qz-methods`, `matrix-functions-and-scaling-squaring` |
| design | `research/plan-numerical-linear-track.md` L2205 |

- Read the complete design section; preserve its scope, conventions, warnings and proof route.

- Compare the design with `research/plan-spec.json`; record conflicts in batch notes.


<!-- Source: research/numerical-analysis-remaining-71-2026-10-17-beta-batch.task.md -->
# Step 1 — batch `23`, `numerical-analysis-remaining-71-2026-10-17`

- Follow `briefs/beta-scaffold.md` and the generated batch assignment.


# Current owner directions (research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md)
# Owner authoring direction — complete single frontier

## Current authorization

The owner explicitly directs: “Build all necessary prerequisites (either as new pairs or as items) together with these 71 pairs in a single frontier.” Retain all original 71 A/B pairs. The earlier 64-plus-7 proposal is superseded and must not be applied. Build every missing established prerequisite in this same frontier. Prefer substantial typed local intermediate items within their actual owning A page; use a new A/B pair when it has independent substantial scope. Any required new pair must enter through native scope planning/append, retaining all original pairs and evidence. Do not duplicate published canonical statistics/linear-algebra methods.

## Proof readiness and native execution

The engine owns all dispatch and transitions. All available authoring slots continue in dependency-level priority without waiting for a different pair's unfinished prerequisite body. Authors continue independent work against declared interfaces, record missing supplier checks honestly, and never quote absent bodies or claim readiness before actual suppliers are complete. Local supplier-before-consumer ordering concerns logical readiness and acceptance. No native review or gate is waived, and no proof is accepted by this direction. New content remains draft; no publication or push is authorized.

## Current planning repairs and necessary intermediates

Read the current repaired controlling designs and these full proof packets, not just abbreviated scope summaries:

- PC-EWALD: research/numerical-analysis-remaining-71-2026-10-17-ROOT-pme-planning-cycle1/proof.md. Author assignment/DFT and derivative-window force-certificate suppliers on the same A page. Preserve P>=2 and knot conventions. Reuse the published lattice Poisson theorem with its Countable Choice hypothesis and exact 2pi normalization.
- APP-RBF: research/numerical-analysis-remaining-71-2026-10-17-ROOT-rbf-planning-cycle1/PROOF.md and REPORT.md. Author arbitrary-fixed-smoothness Matérn Fourier/native quotient, cone norming/zeros, interpolation and separation suppliers before their logical uses. Carry actual foundational Choice dependencies.
- APP-RATIONAL: research/numerical-analysis-remaining-71-2026-10-17-ROOT-rational-planning-cycle1/proof.md. Author FH weight/denominator, divided-difference and simplex/variation suppliers, sound BV and source C^(d+2) rates, and the explicit counterexample to the false seminorm-only rate. Preserve AAA and Pade scope.
- NA-46: research/numerical-analysis-remaining-71-2026-10-17-ROOT-discrepancy-status-cycle1/report.md and source-notes.md. Genuine open-problem/status carrier only; not a logical supplier.
- NA-08: research/numerical-analysis-remaining-71-2026-10-17-ROOT-gaussian-planning-cycle1/proof.md and assembly-addendum-1.md. Both-field inverse moments/tails and real product/expectation have complete research derivations. Author these as local typed suppliers. Preserve the approved normalized-complex expectation; its sharp complex product supplier or an exact alternative proof is still unresolved, as documented in the Gaussian and complex-Gaussian cycle2 packets. This owner direction does not certify that missing proof or authorize gating over it. Do not restrict the field, inflate constants, relabel an established theorem as an open problem, or defer the seven planned pairs outside this frontier.

Substantial new prerequisites discovered during authoring belong in this same frontier. Escalate exact supplier statements, consuming claims and affected consumers promptly. Supplier reviewers retain affected-consumer ownership; root owns hashes and recertification. Optional tests remain waived, required mechanical checks remain mandatory.

## Planning/construction boundary clarification

The native alpha escalation requires Gaussian local suppliers to be placed and proved before accepting their consuming theorem. Their same-A-page placement and exact construction duties are now explicit in both NA-08 controlling designs. The root previously held preauthor planning for completion of a complex proof; the owner now directs construction of all necessary suppliers in this frontier. That preauthor hold is superseded by the explicit supplier assignment. The complex proof is still outstanding construction work, with no item-level acceptance, and must escalate if construction cannot complete it. Planning-only metadata/hash gates confer no mathematical acceptance. All post-construction holds, complete proof-readiness requirements and native review gates remain unchanged.

## Initial-authoring scheduling policy

The run-local stage wrapper enables the engine's existing `deferConstructionArtifactsUntilDrain` option for priority `1-scaffold` only. All owed authors continue with all native slots. Completion credit is withheld until every initial author has successful coverage and all writers drain; then the full unchanged artifact/readiness/stalemate and native gate checks apply. This prevents a completed early pair from triggering an incomplete-frontier repair loop while other pairs are still being authored. No authored inventory, readiness, proof or gate requirement is waived. Other runs retain their current stage tables.

## Additional construction suppliers from actual author escalations

Preserve all71 pairs. The following same-frontier local items resolve actual newly reported prerequisite gaps. Live original authors keep their own files; a native continuation after their writer drains will materialize any remaining additions/repairs. All actual proofs, consumers, coverage/contracts and readiness must be completed; a research packet is not acceptance.

- APP-SPLINE, batch3: read `research/numerical-analysis-remaining-71-2026-10-17-ROOT-spline-tridiagonal-supplier-cycle1/PROOF.md` and `REPORT.md`. Add the three substantial local items for the sparse specialization of published rounded Cholesky/substitution, actual rounded residual certificate, intended-matrix/right-side assembly discrepancies, and computational natural-interpolation forward bound. Preserve exact-input data conventions, arithmetic statuses, conditional success, r=2, linear arithmetic/storage work, and separate rounded piece-evaluation error. The returned arbitrary-second-derivative object is a piecewise cubic reconstruction and need not be C1 at knots; do not falsely call it an exact natural spline. Correct the residual-transfer proof's off-diagonal row equality to the proper inequality (boundary columns omitted; n=1 sum=0), preserving its sound Statement. Repair a literal carriage return in the rho display if still present after authoring. The same supplier reviewer owns all consumer follow-through, including APP-SHAPE; no separate proof reviewer is substituted.

- PE12, batch39: read `research/numerical-analysis-remaining-71-2026-10-17-ROOT-fem-projector-supplier-cycle1/proposal.md` in full. Add same-A-page typed mass-matrix inverse-decay, zero-boundary quasi-interpolation, and uniform W1p-stable L2-projector suppliers; separate the Bochner closed-subspace weak-closure argument if substantial. Preserve the full approved strict p range and abstract stable-family theorem, and instantiate a concrete fixed-degree globally quasi-uniform shape-regular simplicial family on a bounded Lipschitz polyhedral domain. Repair incompatible C1/affine-mesh hypotheses using the actual existing W01p arbitrary-bounded-open compactness supplier and zero-extension/closed-space arguments. Current actual d>=2 remains; do not use r<d reasoning in d=1. The same reviewer owns all affected domain, flux, finite-step, limit, example and page/contract consumers after writer drain. Do not leave the commissioned standard-mesh instance conditional on an unauthored projector assumption. Give a nonempty concrete instance, for example uniform Kuhn/Freudenthal simplex meshes of a unit cube: verify matching, the finite shape classes, global quasi-uniformity and h→0. Check that Poincare remains available on the broadened domain; the elementary zero-extension bounding-cube proof for W01p is sufficient and must not assume a C1 trace theorem.

- Nitsche, batch52: read `research/numerical-analysis-remaining-71-2026-10-17-ROOT-nitsche-fractional-suppliers-cycle1/supplier-proposals.md`, `consumer-dispositions.md`, and the superseding details in `cycle1-completion-addendum.md`. Add four substantial same-A-page suppliers: scaled fractional simplex trace/intrinsic norm equivalence, fractional weak Green/conormal identity with interior cancellation, all-d zero-boundary fractional comparison interpolation (including normal-derivative error), and fixed-domain global weighted boundary flux trace. Preserve arbitrary fixed d>=2 and 1/2<s<=1, the restriction Bessel convention and the general higher-order primal interpolation branch. Replace the specific formerly missing Green/dual-interpolation/weighted-trace assumptions by these actual proved suppliers; the PDE dual regularity assumption remains genuine. Fix the symmetric all-comparison-slot continuity proof while preserving original M1: select the positive local trace bound, use v(x)=n_F dot x and hF=|K|/|F| to prove Ctr>=1, establish Nboundary>=1 on the actual nonempty domain, hence Cpartial>=1. Weighted Cauchy-Schwarz gives B1=3+gamma0<=M1=2+Cpartial+gamma0. Do not reuse a discrete inverse estimate on a nondiscrete dual error. Use the existing proved reference-simplex smooth density/trace at s=1. Follow the same reviewer's actual affected-consumer closure after author drain, preserving every example and the nonsymmetric half-order boundary-defect distinction. No scope split or new pair is needed.

## Batch 3 combined continuation

The original batch3 writer drained successfully at 2026-10-17T11:59:36.731Z. Its three explicitly assigned computational prerequisite items are now declared in its manifest, with genuinely absent carriers; complete them through the single native continuation. Read the same-cycle `ROOT-spline-tridiagonal-supplier-cycle1/KNOT-REFINEMENT.md` in full as well as PROOF.md and REPORT.md. Expand the basis-refinement induction with all three coefficient identities, separate lower/interior/upper index cases, repeated-knot zero-denominator cases, degree zero and endpoint conventions. Preserve its sound Statement/algorithm. Complete the finite-sum boundary bookkeeping in the preservation consumer, and inspect its linear example. The original author already corrected the residual row-sum inequality; preserve that correction rather than applying it twice. Preserve all completed sound items and examples; finish actual new carriers, page placement, dependencies, contracts, coverage and truthful readiness. Batch5 has a page-level readiness hold on this supplier, without using knot-insertion as a PCHIP premise; root and the same supplier reviewer retain that follow-through. Research packets and historical ready records confer no proof acceptance.

## Batch 52 combined continuation

The genuine initial writer drained successfully at 2026-10-17T12:03:42.541Z. Four new local prerequisite items are now explicitly inventoried with genuinely absent carriers. Read all three Nitsche cycle1 packets listed above and author their full proofs before repairing consumers. The completion addendum supersedes the original packet on the integer endpoint and constant: retain the original M1 via the positive Ctr>=1 and nonempty-domain Nboundary>=1 argument; use the actual published simplex smooth density/trace at s=1. Make the intended nonempty-domain convention explicit where necessary, check all Definition/Statement consumers with the same original reviewer, preserve arbitrary fixed d>=2, 1/2<s<=1, graded shape-regular meshes, the exact interior-of-mesh-union topology, both methods and all examples. The four earlier escalation records remain historical truth until actual suppliers and consumers justify fresh readiness. Preserve the general higher-order primal approximation branch and genuine dual PDE regularity hypothesis. Reconcile the source-disposition low-yield warning honestly from the actual harvested results, without inventing source reading or Alpha concurrence. Finish placements/contracts/dependencies/coverage and current readiness.

## Focused construction reconciliation: Levin and Strang

QUAD-OSC audit endpoint normalization is now corrected to the undivided endpoint difference for pprime+iωgprime*p=f, matching the existing authored algorithm/theorem/example. Exact original audit and root focused actual checks are preserved under owner-planning-integration/levin-*. No new supplier or changed canonical Levin statement was needed. Root resolved the three readiness records after original batch13 writer drainage; independent reviews/gates remain due.

For Crouzeix–Raviart batch51, the existing published thm-second-strang-lemma-for-nonconforming-galerkin had a stale verification.precheck: pending marker. Root ran the actual single-item precheck (pass), renderer (pass) and proof-layout (5steps0defects), then changed ONLY that verification marker to pass and reran final layout. Its mathematical body and Statement are unchanged. Evidence and exact preimage: owner-planning-integration/strang-format-marker-checks.json and strang-before-precheck-marker.md. This format marker is not an audit/proof acceptance stamp. The native author may reread this actual current supplier and reconcile its exact stale-marker hold honestly; do not duplicate the Strang theorem.

## Riccati batch 23 additional construction prerequisites

Keep the entire pair and all original CARE/DARE scope. After its original writer drains, one combined native continuation will build the newly necessary local suppliers from the full ROOT-riccati-pbh-supplier-cycle1, ROOT-riccati-reordering-supplier-cycle1 and ROOT-riccati-dare-subspace-supplier-cycle1 research packets, then repair their actual consumers. Root will explicitly declare the missing inventory before requesting that continuation. These packets are construction directions, not acceptance.

PBH: add the complete reachable decomposition/same-field feedback pole-placement lemma and all four closed-region PBH equivalences. Preserve the existing existential stabilizability/detectability definitions and original necessary-only lemma Statement. Fix its real-field proof witness by complexifying rank tests/eigenvectors; arbitrary complex lambda need not have a real witness. Retain Re(lambda)=0 and |lambda|=1 boundary tests, real-field gains, singular-A DARE scope and original CARE/DARE proofs.

DARE subspace sensitivity: add the full prop-dare-stable-deflating-subspace-perturbation-bound from proposed-item.md, including its actual generalized two-variable Sylvester orientation, paired graph contraction, separate Neumann/Stein margins for the stable split, infinity, normalized aligned-basis beta(r) and physical inverse graph-block factor. Augment the existing sensitivity result with this supplier, preserving every original CARE/residual/chart clause. Do not replace these hypotheses by QZ backward error alone. Its ordered representation is an input to the perturbation theorem; avoid cycles through extraction/reordering. Actual mathematical consumer closure and full source-reading limits are in that same agent report.

Stable block reordering must be an actual finite algorithm with proved adjacent swaps, complete status/certificate/budget rules and honest arithmetic counts. Read its final complete proof/report when available. The actual published Bartels–Stewart solver imposes linear Schur sweep caps on its cubic branch; an early research concern about its core work bound was withdrawn after reading that exact hypothesis. Do not change that sound branch. Each supplier agent retains its actual consumer repair ownership; no parallel overlapping canonical writers or replacement read-only reviewers.

Riccati reordering integration precision: read final PROOF.md and CONSUMERS-AND-DEPS.md in full. Successful ordering requires sufficient scalar/evaluator work budget W as well as K>=the initial inversion count; budget exhaustion remains an honest failure. Preserve the exact postprocessing/controller representation and distinguish its scalar-operation count from algebraic bit cost, enclosure work and dense output-factor evaluation. Do not silently round exact swap arrays or fabricate a new floating-point stability theorem.

Batch23 original native writer drained successfully at 2026-10-17T12:19:36.203Z. The five necessary prerequisite items are now explicitly inventoried with genuinely absent carriers (A25/B6). Complete all five and all existing focused repairs in the one native continuation. Read all final packets named above, preserve every original sound carrier, and aggregate PBH complexification, actual finite reordering/extraction/work diagnostics, and DARE sensitivity together. The original four escalation records are history; finish current actual suppliers/consumers/contracts/coverage/placements before truthful new readiness. Root and original supplier reviewers own final follow-through; this direction supplies no independent proof acceptance.


Re-read the current owner direction file before acting. Current explicit owner releases supersede historical operational holds only; all mathematical, source, authored-carrier and readiness obligations remain mandatory.