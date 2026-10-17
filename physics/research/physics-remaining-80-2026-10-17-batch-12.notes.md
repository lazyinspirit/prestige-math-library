# Batch 12 notes — `emg-pcp03`

## Scope, authority, and plan conflicts

This batch owns A page `emg-pcp03` (order 459) and B page
`emg-pcp03-examples` in `einstein-maxwell-models`. The binding owner
direction was read first and followed. The exact A inventory is
`post-emg-trivial-classical-charged-scalar-model` and
`pthm-emg-classical-charged-scalar-model-evolution`; B contains
`ex-emg-adopted-zero-classical-scalar`.

The assigned task and `plan-spec.json` agree that A requires only
`emg-cp04` and `emg-g04`; the current batch manifest preserves those page
edges. The historical pair reservation in
`research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`
also lists `EMG-MG04` and `EMG-G01`. These are redundant page-level edges:
CP04 itself requires MG04, while G04 requires G01 and MG04. The plan's exact
page requirements control, so the two redundant edges were not added. The
current plan row has no item inventory; the assigned research reservation and
current carriers determine the three item IDs above.

The older proposed scalar-postulate inventory lists only the mathematical
system, scalar-variation lemma, and geometry-unit definition as dependencies.
The current postulate also depends on the selected-matter-action contract
because it instantiates that action branch. The older theorem inventory omits
the current action-field-equation result and explicit choice suppliers. The
authoritative current carriers show these are required to identify stationary
action equations and to carry the local-development hypotheses, so the item
manifest records them with their actual roles.

The earlier theorem draft named the full Axiom of Choice. The current actual
mathematical supplier `thm-emg-local-classical-charged-scalar-development`
states only Countable Choice `AC_omega` and Dependent Choice. The consumer
therefore removes full AC and carries exactly the two stated assumptions. This
does not edit imported mathematics.

## Dependency inventory and levels

The run's batch-level evidence assigns batch 12 level 4 with required batches
1, 4, 5, and 11 at levels 0, 2, 3, and 3 respectively. This is dispatch
priority, not a wait barrier. The
item levels recomputed from the authored dependencies are 6 for the scalar
postulate, 8 for the evolution theorem, and 9 for the zero-scalar example.
The postulate's largest in-run suppliers are the batch-4
`lem-emg-charged-scalar-variation` and batch-5
`post-emg-selected-matter-action`, both at level 5. The theorem's largest
in-run suppliers are `pthm-emg-action-field-equations` and
`thm-emg-local-classical-charged-scalar-development`, both at level 7; the
example depends on the theorem. Its transitive CP04 supplier closure includes
the batch-6 periodic Sobolev-state definition at level 1, which fixes the
Fourier-space meaning of $H^s$; this adds no direct batch-12 edge and does not
change the theorem's level 8. The CP04 A/B pages, item carriers, and current
batch-11 manifest rows are present and inspected: the system definition is
level 4 and the Cauchy theorem is level 7. The Cauchy theorem is draft with
pending precheck and draft transitive suppliers. Its explicit scalar
compatibility formula is gauge covariant, but its Statement also reuses $D_i$
for the spatial Levi-Civita derivative. The consumer uses separate
$\mathcal D_i$ and $\nabla^\Sigma_i$ notation and records this supplier-side
notation issue. Proof status and notation remain escalated inputs. The current
transitive CP04 closure also includes the batch-6 periodic Sobolev-state
definition at level 1; its Fourier/weak-derivative $H^s$ and $\mathcal S_s$
interface is used through CP04, so it does not add a direct batch-12 edge or
change the assigned item levels.

No additional local mathematical definition or intermediate result was
required. Every dependency role, item ID, and current carrier is recorded in
the batch manifest and
[the cross-batch dependency record](physics-remaining-80-2026-10-17-batch-12.cross-batch-dependencies.json).

## Authoring and mathematical status

The A postulate adopts the exact classical scalar action with a smooth real
potential on the attained range, an arbitrary real coupling, positive scalar
normalization, explicit SI dimensions, and a globally defined real potential.
It records the scalar equation, current, and Hilbert tensor through the actual
draft variation lemma. It is not a proof that nature follows the model.

The scalar-variation lemma's current dependency closure names seven typed M01
definitions/results. Those carriers are present in `items/` and in the batch-2
manifest; the older batch-4 note saying they were absent is stale. Their draft
status and the variation lemma's own unaccepted proof closure remain unresolved,
so the postulate's variational formulas are used conditionally rather than
being marked ready.

The A theorem identifies the action Euler–Lagrange equations in both directions
and matches the complete periodic Cauchy hypotheses conditionally: temporal
gauge, exact potential and scalar data, sourced Maxwell Gauss constraint,
total-stress Einstein constraints, harmonic metric jet, fixed
dimensionless-state rescaling, and compact admissible Sobolev state. The
current mathematical theorem carrier and manifest row were read in full and
checked against each consuming hypothesis. The carrier is draft with
`verification.precheck: pending`; its proof also depends on draft
symmetric-hyperbolic, reduction, and subsidiary suppliers. Its explicit
periodic scalar compatibility formula is
$\pi_i=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$, but the Statement
reuses $D_i$ for the Levi-Civita derivative in the constraints. The consumer
preserves the displayed formula with separate notation and flags the notation
collision for owner resolution. The actual interface assumes `AC_omega` and
DC, not full AC.

## Owner escalation — CP04 general-smooth scalar compatibility

The current CP04 theorem's periodic paragraph explicitly requires
$\pi_i=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$, but its later
general-smooth paragraph says $\pi_i=D_i\varphi_0$ after defining $D$ to be
the Levi-Civita derivative of $h$. The physical charged scalar data require
$\mathcal D_i\varphi_0=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$;
the two conditions need not agree unless $\lambda A_{\Sigma,i}\varphi_0=0$,
which is not assumed. This blocks the general-smooth existence and uniqueness
branch of `pthm-emg-classical-charged-scalar-model-evolution`. The B example's
zero-scalar data do satisfy both conditions, but its use of the theorem remains
conditional on that theorem's broader unresolved status.

Proposed supplier repair: on the owned CP04 A page, distinguish the charged
derivative (for example $\mathcal D_i$) from $\nabla^\Sigma_i$, state the
general-smooth compatibility as $\pi_i=\mathcal D_i\varphi_0$, and recheck the
local-development proof's data reconstruction against that interface. Preserve
the statement's smooth global-potential scope; do not impose the extra zero
product condition to make the current mismatched hypotheses fit. This is an
outside-batch change and remains escalated to the owner.

The B example now states the source-free Einstein–Maxwell equations it assumes,
then substitutes $\varphi=0$ and $V(0)=0$ into the exact current, stress, and
scalar equation. It identifies the Cauchy zero branch only for compatible zero
scalar data and does not claim an observed result or prove the conditional
Cauchy theorem.
The postulate, theorem, and example remain draft. Their final Step-1 readiness
records are escalated: the postulate depends on the unaccepted draft scalar
variation lemma; the theorem depends on the draft action-equation theorem and
CP04 Cauchy theorem, including the exact general-smooth compatibility defect;
the example depends on the theorem's unresolved local-development status. The
current carriers, inspected interfaces and statuses are recorded in the
cross-batch evidence and these notes.

## Source reading and dispositions

The A page has three independent full-text treatments: Tong's complete Gauge
Theory notes, Friedrich–Rendall's complete Cauchy-problem preprint, and
Carroll's complete GR lecture notes. The B page uses Tong and
Friedrich–Rendall as contextual sources. The current source coverage records
exact locators, inspected results, supported items, limitations, and
dispositions. The runscope `source-fetch-check --stamp` result was 5/5 full
texts fetched and stamped, with no retrieval failures and no dropped sources.

Tong §2.5.2 supports the classical complex scalar/gauge-covariant functional
form; its Higgs potential, natural units, superconducting model, and quantum
discussion are not adopted. Friedrich–Rendall §§3.1 and 5.4 support local
Cauchy and Einstein–matter context, but do not prove this exact system. Its
printed approximation sketch has known issues recorded in the earlier
supplier research; no argument from that sketch is used. Carroll's action,
Hilbert-stress, and diffeomorphism passages give generic GR context; its
conventions and neutral-scalar content are not substituted for this model.
The full Colin–Watanabe paper was also inspected as a candidate but not
selected because it treats a flat-background Klein–Gordon–Maxwell problem,
not the curved coupled Einstein system. This disposition is recorded in
coverage; it is not a failed or dropped source.

`source_resolution` is empty because all selected full texts fetched
successfully. The final `source-fetch-check --stamp` returned 5/5 fetch-verified
and 5/5 resolved, with zero newly stamped sources, failures, or documented
drops. No source is treated as a deductive proof of a physical law.

## Scoped checks

Final scoped results:

- `precheck.mts` through `tools/tsx-run.mjs`: all three assigned items passed
  (the postulate received its nonproof-structure check); both proof-bearing
  carriers now record `verification.precheck: pass`.
- `proof-layout.mjs`: 3 items, 6 numbered steps, 0 defects.
- Strict `proof-contract.mjs`: 3/3 items, 0 errors and 0 warnings.
- `rendercheck.mjs`: all 3 items and both A/B pages passed; math and YAML
  parsed.
- `content-policy.mjs`: 3 manifest items, 0 errors and 0 warnings.
- `author-check.mts physics-remaining-80-2026-10-17 12`: pass; its recorded
  precheck, rendercheck, content-policy, and strict proof-contract subchecks all
  exit zero (fingerprint in `physics-remaining-80-2026-10-17-author-check-12.json`).
- Focused `depcheck`, `fwdcheck`, and `extcheck`: passed for the 3 selected
  items and their dependency/page context; extcheck reports 3 checked items,
  0 recorded-not-proved, 0 errors and 0 warnings.
- Recomputed item levels match the current batch manifest: postulate 6, theorem
  8, example 9; no assigned-level errors. The full-run item-level command still
  reports 49 unrelated empty-inventory/stale-level errors, including
  `pthm-emg-matter-symmetry-charges` (stored 5, computed 7).
- The full batch-level check is blocked by the stale shared dependency-level
  digest. The current recorded batch-12 row remains level 4 with requirements
  `[1,4,5,11]`; shared-level recomputation is owner work and was left unchanged.
- `source-fetch-check --stamp`: 5/5 source entries fetch-verified and resolved,
  0 newly stamped, 0 failures or drops. `coverage-checklist`: 2 pages, 8
  harvested results, 0 errors and 0 warnings.
- All three readiness records were created as `escalated` with `owner: false`
  and their exact direct dependencies. The postulate cites the unresolved
  scalar-variation closure, the theorem records the CP04 proof-status and
  general-smooth interface defect, and the example records its conditional
  dependence on that theorem.
- The cross-batch JSON is an array of 12 unique direct edges (two page edges
  and ten item edges); an explicit manifest comparison found no missing
  cross-batch edge. The CP04 general-smooth item edge remains `open`; verified
  rows record interface checks only, not supplier proof approval.

