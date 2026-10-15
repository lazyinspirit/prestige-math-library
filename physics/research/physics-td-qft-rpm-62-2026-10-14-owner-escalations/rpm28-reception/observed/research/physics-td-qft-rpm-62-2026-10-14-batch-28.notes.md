# Batch 28 authoring notes — Right-wedge accelerated clocks and rays

Run: `physics-td-qft-rpm-62-2026-10-14`  
Owner: beta / batch 28.  
Scope: the four A-page theorems and four B-page examples listed in `batch-28.pages.json` only.

## Inventory and dependency levels

The A inventory is `pthm-rpm-rindler-clock-gradient` (level 0), `pthm-rpm-constant-electric-orbit` (level 5), `pthm-rpm-constant-magnetic-helix` (level 5), and `pthm-rpm-crossed-field-drift` (level 6). The B examples are `ex-rpm-rindler-clock-gradient` (level 1), `ex-rpm-constant-electric-orbit` (level 6), `ex-rpm-constant-magnetic-helix` (level 6), and `ex-rpm-crossed-field-drift` (level 7). Levels use the actual current in-run supplier levels: batch 24 `pthm-rpm-charge-mass-shell` is level 4; the crossed-field theorem is one above the local magnetic theorem; each B example is one above its A theorem. A dependency-level calculation over current manifests returns the declared levels for all four A results. The repository's generic `item-dependency-levels` command does not index `examples` arrays, so B-example levels are recorded from their direct dependency relation and included in the batch inventory.

The run manifest gives batch 28 dependency level 2, requiring batch 24. Page requirements from the assignment and current plan are `cm-math-dynamics`, `rpm-external-charge`, and `sr-accelerated-observers`.

## Plan and interface conflicts

1. The assigned task and current `plan-spec.json` page both require `cm-math-dynamics`, `rpm-external-charge`, and `sr-accelerated-observers`. The design reservation at `research/plan-relativistic-particle-mechanics-track.md` line 222 lists only `rpm-external-charge` among its page dependencies. The task/current plan requirements take precedence; the A manifest preserves all three.
2. Older source inventory text named `def-em-covariant-sign-conventions`, which is not the current carrier. All field statements and proofs instead use the actual published `def-em-electromagnetic-tensor` convention: $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, with the passive boost law in `pthm-em-lorentz-field-transform`. The electric, magnetic, and crossed-field theorems state and verify explicit smooth potentials with this sign convention.
3. The dependency-level file remains owner-managed and was not changed. Levels in this note are calculated from the current batch manifests; refresh is needed if a supplier inventory or interface changes.

## Supplier audit and conditional status

- `def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, and `pthm-rpm-charge-mass-shell` are present as draft items assigned to batch 24. Their actual statements were checked. The action is a fixed-endpoint local-potential action for a $C^2$ timelike test curve; its equivalence proves stationarity iff $m\nabla_UU=qF^\sharp(U)$; the flat mass-shell theorem gives $d\mathbf p/dt=q(\mathbf E+\mathbf v\times\mathbf B)$, $d\mathcal E/dt=q\mathbf E\cdot\mathbf v$, and $\mathbf v=c^2\mathbf p/\mathcal E$. These are exact dependencies but remain unaccepted draft inputs while batch 24 is in flight and `rpm-external-charge` is not a current published page. Each orbit proof therefore explicitly states its action-model conditions and does not call those draft carriers independently proved or approved.
- The transitive flat geometry carrier `def-rpm-spacetime-observer-and-worldline` is a draft item in batch 22. Its exact flat Minkowski definition is the intended input through batch 24. Batch 24's page-level dependency on `rpm-geometry-actions` is the corresponding path back to batch 22. No duplicate geometry supplier was added here.
- The two other assigned page prerequisites, `cm-math-dynamics` and `sr-accelerated-observers`, are published. The Rindler theorem uses the actual published Rindler chart, ideal-clock postulate, and observer-frequency definition, with the received-frequency scope restriction recorded below.
- `step1-decisions.mjs` loads run items from A-page `items` only. It accepts all four A theorem readiness records; it rejects B examples as `Unknown run item` because their canonical manifest slot is B-page `examples`. The B examples are nevertheless in their page, item markdown, source coverage, contracts and item-level calculations. This tool limitation is recorded rather than manufacturing readiness records the engine cannot consume.

## Rindler frequency scope gap

The published `post-sr-ideal-plane-wave-model` defines a constant affine null covector and the functional $\omega_n=-k(U_n)$, but its clause (iv) explicitly excludes accelerated-observer reception. The assigned result's clock and ray calculations are fully derived. Its ratio $\omega_R/\omega_E=\rho_E/\rho_R$ is stated and proved only as a mathematical observer-contraction functional. Additional hypothesis [A2] in the theorem is explicit and is not passed off as adopted physics. Its B example repeats this restriction.

Owner-level resolution proposed: supply and review a physical postulate such as `post-sr-ideal-plane-wave-accelerated-reception` on the `sr-accelerated-observers` page (or an owner-selected SR wave/frequency page), stating when the affine phase-rate functional is interpreted as the received frequency along an accelerated observer worldline. Until then the physical reception reading is unresolved, so both Rindler items are escalated.

## Sources and retrieval history

The A page's four selected independent full-text treatments are inventoried in coverage: Gourgoulhon slides 26–30 and complete Hughes MIT 8.033 notes §14.6 for Rindler clocks/rays; Likharev §9.6 and Fowler Lecture 73 for electric, magnetic, and subcritical crossed-field orbits. The B page records how those results are specialized in each example. Coverage includes each harvested result and a disposition; field-regime topics outside the assigned subcritical result have item-specific out-of-scope reasons.

An earlier Crowell Internet Archive PDF candidate (`https://archive.org/download/sr_20220102/sr.pdf`) returned an internal retrieval error on the attempted open. It is not selected, cited, or relied upon. The independent Gourgoulhon/Hughes and Likharev/Fowler full texts were retrieved and inspected for the assigned arguments, so no item proof depends on that failed candidate and it is not falsely marked as a six-attempt dropped source.

## Checks, readiness and outstanding inputs

After the evidence is finalized, the scoped checks and their actual outputs are recorded here. The full-run level checker already reports unrelated active-run issues (empty inventories in other batches and several stale item labels); batch 28's four A levels match its current computed levels. These shared run issues are not repaired in this batch.

All three field-orbit A items and their B examples are readiness-escalated because their actual charge/action suppliers are draft and batch 24 is not validated/current. Both Rindler items are readiness-escalated because their physical accelerated-reception interpretation needs [A2]; the mathematical contraction result remains complete and conditional. The A page also retains its open `rpm-external-charge` page prerequisite. No readiness record is an independent proof approval.
