# Step 3a reader report — batch 9

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: read-only reader  
Scope: `fd-f02`, `fd-f02-examples`, and the 11 items in the batch-9 manifest.

## Review coverage

I read both assigned pages and all 11 assigned items in dependency order. The
assigned item inventory is:

- `lem-fd-moving-control-volume-transport`
- `post-fd-boundary-data`
- `pthm-fd-material-mass-continuity`
- `post-fd-weak-balances`
- `pthm-fd-continuous-source-local-balances`
- `pthm-fd-conservation-jump-laws`
- `pthm-fd-cauchy-momentum-angular`
- `pthm-fd-control-volume-balances`
- `pthm-fd-energy-decomposition`
- `cex-fd-vacuum-velocity-determination`
- `ex-fd-conduction-energy-entropy`

For prerequisite context, I read pages `fd-f01`, `fd-mf01`, `fd-mf02`, the
pinned mathematical pages `countability-and-uncountability` and
`relations-functions-and-quotients`, and the relevant current dependency items:
`def-fd-smooth-motion`, `lem-fd-transport-and-density`,
`lem-fd-c1-domain-jordan-integrals`, `def-fd-quantity-and-frame-conventions`,
`def-fd-conservative-weak-form`, `post-fd-continuum-balances`,
`lem-fd-weak-jump-consistency`, `def-countable-choice`, `def-axiom-of-choice`,
and `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`. I also opened
the mathematical results used directly by the transport/Jordan arguments:
`thm-euclidean-inverse-function-theorem`, `thm-chain-rule-for-total-derivatives`,
`cor-determinant-is-a-polynomial-in-the-matrix-entries`,
`thm-change-of-variables-for-compact-jordan-sets`,
`thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`,
`thm-continuous-functions-on-compact-jordan-sets-are-integrable`,
`def-riemann-integral-over-a-jordan-set`, `lem-jordan-set-integral-well-defined`,
`thm-multidimensional-integral-properties`,
`thm-mean-value-inequality-for-total-derivatives`,
`cor-zero-total-derivative-on-a-convex-open-set-is-constant`,
`thm-graphs-of-continuous-functions-have-content-zero`,
`def-null-and-content-zero-in-rn`, `thm-jordan-boundary-criterion`,
`thm-heine-borel-rn`, `thm-compactness-under-continuous-maps`,
`thm-lebesgue-criterion-in-rn`, and
`thm-jordan-content-and-indicator-integrability`. For the divergence theorem,
I opened `lem-surface-integral-is-independent-of-c-one-boundary-charts`,
`lem-finite-ambient-partitions-for-euclidean-boundary-integration`,
`lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-algebra-of-derivatives`, and
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`.
I also opened `def-integrable-real-and-complex-functions-and-their-integrals`,
`def-nonnegative-lebesgue-integral`, and
`prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` while
checking the batch-8 weak-form supplier.

I reviewed the current batch manifest, proof contracts, cross-batch dependency
record, coverage record, and author notes as evidence only. I independently
checked the current mathematics and the manifest dependencies. The current
`batch-dependency-levels.json` now records batch 9 at level 2 with requirements
`[2,3,8]`, matching the present item graph; the older coverage/notes entry that
called this schedule stale is no longer a current blocker. The declared page
requirement closure also reaches `fd-mf01` through `fd-f01`.

The source passages relevant to assigned claims were checked at their cited
locators: Tong, *Fluid Mechanics*, §§2.3.1, 3.1.2 and 3.2.1; Powers,
*Lecture Notes on Intermediate Fluid Mechanics*, §§4.2–4.8, §5.4.1 and
§9.4.1; and Mei's MIT OCW PDFs for §§1.3, 1.4, 1.5 and 4.1. The current Powers
PDF and the short MIT PDFs were retrieved and the relevant pages inspected.
Tong's passages separate impermeability from optional no-slip; Powers uses a
transposed stress convention relative to the items, which the items state
locally; and the shock source does not establish a smooth-to-weak extension.
These sources support context and adopted formulations; they do not prove
empirical validity of the physical model.

## Mathematical review

The smooth positive-density chain is sound under its stated regularity and
material-region hypotheses. The mass localization, local momentum equation,
stress symmetry in the no-couple model, total/kinetic/internal energy split,
and control-volume signs all follow with the stated conventions. The weak jump
conditions have the correct sign for the entropy inequality and the correct
`[F]·n − V_n[U]` interface coefficient. The vacuum counterexample gives two
distinct bounded velocities with identical zero conservative data. The Fourier
mode calculation has the stated temperature positivity, energy average and
strict entropy-production sign, subject to the formulation issues below.

No assigned page or item contains a TikZ/tikzcd diagram, and no diagram was
needed for the reviewed arguments. The assigned page bodies are empty, their
`page_layout: compact-v1` metadata is present, and their page inventories match
the manifest. The complete statements/descriptions are uninterrupted by links.

## Findings not repaired

This is a read-only assignment, so I made no item or page edits.

### `def-fd-conservative-weak-form` — in-run dependency, fatal

In the Definition's first paragraph, “locally integrable” is defined using
measurability and a “Lebesgue integral,” and the test identities use `dx dt`.
The item has `deps: []` and supplies no definition of the measure space,
Lebesgue measure on the space-time domain, measurable functions, or the
Lebesgue integral. These are necessary mathematical prerequisites to the weak
formulation. The available published measure/integral definitions are not
declared by this supplier. The assigned consumer
`pthm-fd-conservation-jump-laws` depends on this definition directly, so its
weak-branch formulation remains under-specified until the exact suppliers are
declared or the needed notions are defined locally. This batch-8 carrier was
still current at split; its raw SHA-256 was
`8f13d8617a705d7c0a170b2f63865c810faab86c4f92524945cbe39ce2bdf129`.

### `post-fd-boundary-data` — boundary object and data types, fatal

In the Postulate's opening wall paragraph, `X_b` is called a chart of a moving
solid boundary, but the item never states that `X_b(t, Xi)` lies in
`∂Omega_t`, which side is occupied by fluid, or that `n` points outward from
`Omega_t`. Thus the set and orientation on which the no-penetration/no-slip
conditions are imposed are not fixed by the formulation. The following thermal
paragraph calls `T_b` and `q_b` “fields” without specifying their map domains or
regularity. Define the wall patch as part of the fluid boundary, orient its
normal from the fluid, and state the data field spaces/regularity required by
the selected boundary model.

### `pthm-fd-energy-decomposition` — periodic-domain hypothesis, fatal

The Statement restricts the local energy equation to
`O_B = {(t,x): x∈Omega_t}`, but its final periodic-cell alternative integrates
over `Q` with only the condition that the fields and `Phi` are periodic. It
does not require `Q` to be the fluid domain or to lie in `Omega_t` for every
time. Periodicity alone does not make the locally derived equation valid on
points outside `O_B`; add the domain-coverage hypothesis before integrating
over the periodic cell.

### `ex-fd-conduction-energy-entropy` — wave-vector notation, nonfatal

The Example defines components `k_j` and then uses `k` in `|k|^2`, `k·x`, and
the temperature formula without defining the vector `k` as
`(k_1,k_2,k_3)`. The intended meaning is clear but is not stated; define the
vector explicitly in the uninterrupted example description.

### `ex-fd-conduction-energy-entropy` — time domain, nonfatal

The Example defines the fields only “for `t≥0`,” while the physical balance
postulate and the cited energy theorem use fields on an open time interval
containing zero. This can be repaired by explicitly extending the same formula
to `I=(-delta,infinity)` with
`0<delta<log(T_*/|a|)/lambda`, which preserves `T>0`; the current statement
does not give that open domain.

### `ex-fd-conduction-energy-entropy` — material entropy balance, nonfatal

Proof step 2.2 establishes the local differential entropy inequality and step
3.1 integrates it over the periodic cell. The cited physical supplier
`post-fd-continuum-balances` adopts an integral inequality on each material
subregion. The proof does not explicitly connect the local inequality to that
adopted material balance. In this stationary, smooth example the gap is
immediate: take the identity material motion and integrate the local inequality
over each admissible subregion, using the divergence theorem. This is a
nonfatal proof omission.

### `lem-fd-moving-control-volume-transport` — empty-region case, nonfatal

The Statement does not explicitly require `C_0` to be nonempty. Proof step
2.1 applies the divergence theorem supplier to `C(t)` without separating the
empty case, whereas the cited theorem is stated for a bounded `C^1` domain.
If “region” is not intended to exclude the empty set, add the one-line trivial
empty case or require nonemptiness. The transport identity itself is immediate
for the empty set, so this is nonfatal.

## Page verdicts

| Page | Verdict |
|---|---|
| `fd-f02` | Page carrier, compact layout, inventory and prerequisite closure pass. Content is held by the findings on `post-fd-boundary-data`, `pthm-fd-energy-decomposition`, and the shared weak-form dependency. |
| `fd-f02-examples` | Page carrier, compact layout and inventory pass. Content is held by the findings on `ex-fd-conduction-energy-entropy`. The vacuum counterexample is sound. |

## Edits and validation

Content edits: none; the assigned role is read-only. The task-named reader
report is the only authored artifact. No formatter, precheck, or other
write-oriented validation was run. No stale verification records or contracts
were changed.

Blocker: none at the current split. The shared batch dependency schedule now
contains the current batch-2 edge. Scientific findings above remain open for
owner disposition; the report does not certify, stamp, or accept the items.
