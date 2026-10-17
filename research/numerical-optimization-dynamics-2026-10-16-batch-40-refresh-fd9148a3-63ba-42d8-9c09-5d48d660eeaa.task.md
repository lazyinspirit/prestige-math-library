# Owner-requested Step-1 continuation: batch 40
Request: fd9148a3-63ba-42d8-9c09-5d48d660eeaa; requested at 2026-10-16T01:56:40.030Z.
Owner reason: Original successful author completed 23 item carriers and readiness but omitted both assigned A/B library page carriers. Complete those actual pages under current owner directions, preserve sound authored items and immutable native evidence.
Original native result: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-dispatch/beta-batch-40.result.json; original session: 01a141fc-4103-7312-8c1a-8d2a8e60c578.
Original result SHA-256: 92fad28e971ca6d33e3d10781296984fe2a52174f7ca162272d9a859a5cb9e24; original prompt SHA-256: f8b640b6c80c20d44e6c8ceb6a321b6356070471ce14b2e0bfcb91a3f8b72c4d.
Continue the original assigned authoring against current sources. Preserve all completed sound work and original native evidence. This is the single operational continuation; report genuine mathematical blockers precisely to the owner. A successful process or hold report is not completed authoring. Complete actual item/page carriers, manifests, contracts and current readiness under the full original assignment.

# Full original assignment (historical input)
# Step 1 — mathematics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Edit only assigned draft items, A/B pages and batch evidence; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- **Cross-pair authoring is parallel.** Continue authoring when a prerequisite owned by another pair is absent or still being written. Use the controlling plan and declared interfaces to draft independent definitions, proof arguments and examples; record exact unresolved supplier IDs, required hypotheses and affected claims. Do not wait, poll, stop the batch at the first missing supplier, or edit another pair's files. Complete all work possible within your pair. Planned interfaces are drafting context: verify actual supplier bodies before claiming readiness, and never invent source excerpts, completed proofs or acceptance. If suppliers remain unavailable at handoff, record the precise unresolved checks honestly for reconciliation; do not omit the dependent claims.
- Read `research/numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, hypotheses and conventions.
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

run: numerical-optimization-dynamics-2026-10-16
role: beta
label: batch-40
covers: 40
output: research/numerical-optimization-dynamics-2026-10-16-batch-40.pages.json

Batch 40: dependency_level 2; prerequisite batches: 6, 27.
Current scheduling input: e8550439fef5be6a02b177bd3d34853719a8096a1856fe08ac9827e78543ee0c.
Determine item inventories, logical deps and item dependency_level labels in the scaffold manifest before writing carriers. Author suppliers before consumers in ascending item level.
Continue authoring this pair even if another pair has not supplied a prerequisite yet. Use the controlling plan and declared interfaces to draft independent definitions, arguments and examples; record exact unresolved supplier IDs and required hypotheses. Do not wait, poll or edit another pair. Verify actual supplier bodies before claiming readiness; never invent supplier excerpts or approval.

<!-- Source: research/numerical-optimization-dynamics-2026-10-16-beta-40.task.md -->
# Batch 40 of run `numerical-optimization-dynamics-2026-10-16` — Subgradient bundle and derivative free optimization

1 A/B pair in numerical-optimization-inverse-problems-and-uncertainty-quantification. Own only these pairs.

Read `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` before constructing any item. It is binding and overrides stale task or design text.

## `subgradient-bundle-and-derivative-free-optimization`

| | |
|---|---|
| A page | `subgradient-bundle-and-derivative-free-optimization` · order **2364** · `numerical-optimization-inverse-problems-and-uncertainty-quantification` |
| B page | `subgradient-bundle-and-derivative-free-optimization-examples` |
| title | Subgradient bundle and derivative free optimization |
| requires | `matrix-norms-condition-numbers-and-numerical-stability`, `inequality-kkt-duality-and-optimality-certificates`, `proximal-gradient-and-accelerated-composite-optimization` |
| design | `research/plan-numerical-optimization-track.md` L532<br>`research/plan-numerical-optimization-track.md` L544 |

Read every listed design location. Record which one controls and why.

- Read the complete design section; preserve its scope, conventions, warnings and proof route.

- Compare the design with `research/plan-spec.json`; record conflicts in batch notes.


<!-- Source: research/numerical-optimization-dynamics-2026-10-16-beta-batch.task.md -->
# Step 1 — batch `40`, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/beta-scaffold.md` and the generated batch assignment.


# Current owner directions (research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md)
# Current owner directions: combined numerical optimization and dynamics

All four category prose audits completed and drained before native authoring; their original completion bytes are bound in `research/numerical-analysis-four-category-scaffolds-2026-10-16/audit-completion.json`. Those historical hashes remain unchanged. Subsequent focused native-owner repairs are recorded in this run’s exact repair receipts and current controlling plans/audits; original prose completion confers no acceptance of later item proofs. The owner now releases this fresh combined run for native planning and all six build steps. Historical prose-only operational holds in the design reports are superseded; every mathematical/proof/source obligation remains mandatory. The latest user authorizes a fresh combined build of ALL pairs in Numerical Optimization, Inverse Problems and Uncertainty Quantification and Numerical Differential Equations and Stochastic Dynamics, with every unmet prerequisite pair in this SAME frontier. The previous single numerical-analysis run is aborted and contributes no execution/review/gate coverage. This new run is `numerical-optimization-dynamics-2026-10-16`.

## Scope and controlling designs

The current dependency-closed proposal is `research/numerical-optimization-dynamics-2026-10-16-owner/frontier-proposal.json`. It selects all35 optimization and all37 dynamics pairs plus24 linear/approximation and11 spatial prerequisite pairs:107pairs/214pages, subject to any necessary prerequisite repair. Native manifests and the frozen scope ledger will control actual assignments once planned. Mathematics capacity is128pairs; active engine workers remain30. Keep all ordinary readiness, exclusive-writer, review, adjudication and gate requirements, including the zero-defective-item Step5 threshold.

Read the assigned pair in its controlling category plan and incorporated mathematical-contract appendix:

- `research/plan-numerical-linear-track.md` and `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`.
- `research/plan-numerical-dynamics-track.md` and `research/numerical-analysis-four-category-scaffolds-2026-10-16/dynamics-audit.md`.
- `research/plan-numerical-spatial-track.md` and `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- `research/plan-numerical-optimization-track.md` and the exact `contract-<key>` appendix in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`.

The complete rich scope/amendment/example provenance is retained in each category inventory and `research/numerical-analysis-comprehensive-2026-10-16-intake/inventory.json`. Do not discard promises because an abbreviated summary omits them. `research/numerical-analysis-four-category-scaffolds-2026-10-16/dependency-overrides.json` corrects the original proposal's actual consumed interfaces; the original mixed `requires` fields use both pair keys and existing A-page IDs. Only actual proved items and matched hypotheses supply logic. The original 46-pair plan and comprehensive single-frontier design are historical provenance where superseded.

## Authoring obligations

Author every assigned A/B item, full proofs, pages and proof contracts under the native Step1 workflow. Prose audits provide design and exact interface limits; they confer no item proof acceptance or source-reading credit. An established theorem awaiting local proof is an authoring obligation, not an open problem. Complete every missing established intermediate inside this frontier, in its existing owning pair where appropriate, before claiming consumer readiness. Escalate a significant missing pair or invalid proof interface promptly with its smallest exact supplier, consuming step and affected consumers. Never use unproved local/external fallbacks or silently narrow a richer approved claim.

Define each algorithm mathematically: input domain, exact procedure, branches/loops, output/status and failure conditions. Give well-definedness justifications and separate proved correctness, convergence, termination, complexity and numerical-error claims. Preserve all range, conditioning, regularity, choice, geometry, stability and branch assumptions. A finite budget returning inconclusive does not prove unconditional successful certification. Remarks/examples cannot silently replace typed logical suppliers. Genuine open problems remain `op-`, with source/status review and no logical consumers.

Reuse canonical published statistics and linear-algebra algorithms/definitions/results. New pages contain genuinely missing numerical variants, error guarantees and owned intermediate results; do not duplicate an already introduced method, or append new draft items to a published page. Existing Euler–Maruyama, Monte Carlo/QMC/MLMC, filtering, sampling, matrix factorizations, Krylov, and statistical-optimization homes remain canonical context. Published prerequisite source maintenance already committed in `4c74bfeca3` is context, not new-run review coverage. Initial authors route necessary outside repairs to the owner rather than editing foreign sources.

All available engine slots may author in dependency-level priority order without waiting for different-pair prerequisite bodies. Continue independent work against declared contracts when a supplier is not yet available; record the pending supplier check honestly. Never quote absent bodies or claim readiness until actual complete suppliers and authored carriers satisfy native checks.

## Operational boundaries

All new content remains draft. No publication or push is authorized. Do not control or edit the unrelated quantum session. Physics keeps its independent workflow and limits. Optional tests are omitted at the user's direction; required native planning checks and all six-step gate batteries remain mandatory. The owner resolves escalations supplier-first and performs the required current formatting/metadata recertification before every Steps1–5 gate attempt; native Step6 performs its required exact preparation transaction and complete final battery/report/scoped commit. No ordinary hold, proof requirement, verification or mechanical condition is waived.

## Explicit retained local proof work

RARE1 must complete its stopped-level kernel/event-normalizer identity; DIF2 must complete the promised binomial/Revolve schedule and cost proof (a fallback schedule does not fulfill that promise); STO2 must supply the explicit Adam divergence example. Dynamics authors must complete the monodromy/count, normal-form, invariant-law, fractional, jump, contact and population proofs assigned in their controlling contracts. These are same-frontier authoring obligations, not accepted theorem suppliers. Do not omit them or claim a weaker representative fulfills the richer promised scope. Escalate concrete uncertainty promptly while continuing independent work.

## Accepted native drift repairs

The owner accepts the focused planning repairs in `research/numerical-optimization-dynamics-2026-10-16-owner-drift-repair/{linear/repair.json,dynamics/resolution.json,optimization/repair.json}`. These preserve the richest approved scope and confer no proof/source-reading acceptance. The original native drift report and verdicts remain unchanged. Controlling plans/audits now take precedence over their earlier copied inventory prose wherever these exact repairs apply.

E1 imports the existing matrix-free definition via its Krylov page, without deriving CSR costs or convergence from that definition. E2 imports canonical objective optimization via its published statistics page at NA-09/OPT0; arbitrary vector roots and indefinite gradient-root Hessians retain their independent Newton proof. Published decrement stops and conditional attempted-update convergence remain literal. E3 imports exact Chebyshev definitions/identities; normal/self-adjoint interval stability gives no general nonnormal/nonlinear theorem. E4 imports the existing HMC leapfrog/flow items with their exact choice, regularity, completeness and local/global hypotheses. E5 carries AC, adaptedness and integrability; Doob applies to -Z and the compensated -W, proving the finite decrement sum. STO2 expectation bounds and STO3 almost-sure applications keep their distinct hypotheses. E6 states the actual GP/independent Gaussian observation model and AC, allows every observed-SPD case including zero noise, proves positive noise suffices, and requires the sequential conditioning proof for adaptive sites. Singular/unavailable observed solves return the explicit status.

E7 fixes the one-way geometry interface: NA-22 supplies T07; NA-22 does not consume later T04/T07. Direct shears, midpoint contraction and local finite-order modified-energy obligations supply NA-22; T07 locally proves the scaled regular RATTLE branch, constrained symplecticity/reversibility and error. Later splitting/constrained methods remain comparisons where no logical input is used. All promised backward-error and constrained scope remains required. OPT13's objective identity is theta*cbar_j<=0, strict only for positive theta; degenerate pivots remain supported.

The following native-held pages have their declared supplier routing and controlling hypotheses repaired or checked through these changes; their companions inherit only the stated, actually proved A-page interface:

- `adaptive-ode-solvers-and-error-estimation`: E3.
- `barrier-and-primal-dual-interior-point-methods`: E2.
- `bfgs-and-limited-memory-quasi-newton-methods`: E2.
- `coagulation-fragmentation-and-sectional-population-balance-numerics`: E4.
- `constrained-dynamics-shake-and-rattle`: E7.
- `deferred-correction-and-collocation-iterations`: E2.
- `differential-algebraic-equations-and-consistent-initialization`: E2.
- `finite-basis-projector-energies-and-variational-electronic-structure`: E2.
- `finite-generator-master-equations-and-uniformization`: E1.
- `gauss-newton-and-levenberg-marquardt-methods`: E2.
- `geometric-numerical-integration`: E4, E7.
- `global-optimization-and-certified-branch-and-bound`: E2, E6.
- `imex-and-operator-splitting-methods`: E2.
- `implicit-stiff-time-stepping-and-algebraic-error`: E2.
- `interacting-particle-mean-field-and-vortex-blob-error`: E4.
- `interval-newton-krawczyk-and-polynomial-root-isolation`: E1, E2.
- `iterative-regularization-and-early-stopping`: E2.
- `local-bifurcation-normal-forms-and-numerical-certificates`: E2.
- `matrix-functions-and-scaling-squaring`: E1.
- `minimum-energy-paths-string-neb-and-saddle-certificates`: E2.
- `multirate-and-partitioned-time-integration`: E2.
- `nonconvex-line-search-and-inexact-newton-methods`: E2.
- `nonlinear-boundary-value-solvers`: E2.
- `nonlinear-conjugate-gradient-methods`: E2.
- `nonlinear-equations-and-newton-methods`: E2.
- `numerical-differentiation-and-derivative-error-control`: E2.
- `numerical-optimization-globalization-and-inexact-certificates`: E2.
- `parallel-in-time-parareal-and-mgrit`: E2.
- `periodic-orbit-shooting-collocation-and-floquet-error`: E1, E2.
- `pseudo-arclength-continuation-and-fold-certificates`: E2.
- `revised-simplex-linear-programming-and-certificates`: E1.
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds`: E2.
- `rosenbrock-and-linearly-implicit-methods`: E2.
- `runge-kutta-methods-and-order`: E3.
- `self-consistent-projector-iterations-and-certified-mixing`: E2.
- `sparse-direct-elimination-and-ordering`: E1.
- `sparse-matrix-models-and-kernel-costs`: E1.
- `sqp-active-set-and-augmented-lagrangian-methods`: E2.
- `stable-sde-schemes-for-superlinear-drift`: E2.
- `stochastic-approximation-and-stochastic-gradient-methods`: E2.
- `trust-region-and-cubic-regularization-methods`: E2.
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization`: E2.
- `verified-linear-systems-and-spectral-enclosures`: E1.

## Native batch40 carrier continuation

The original successful native batch40 author produced its23 item carriers, contracts and readiness but omitted BOTH assigned library page carriers. Continue the same assignment through the native Step1 refresh, preserving all current sound items and exact historical reports/results. Complete `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/subgradient-bundle-and-derivative-free-optimization.md` and its `-examples.md` companion from the actual current manifest/inventory and approved rich prose contract, with accurate summaries/placement. Reconcile current metadata/readiness as required by the original assignment. This does not request redundant mathematical rewriting or a new review; report any actual newly found blocker honestly.


Re-read the current owner direction file before acting. Current explicit owner releases supersede historical operational holds only; all mathematical, source, authored-carrier and readiness obligations remain mandatory.