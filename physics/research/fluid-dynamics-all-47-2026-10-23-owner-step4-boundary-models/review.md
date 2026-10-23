# Boundary/model Step 4 support

These are unapplied proposals from `/root/fluid_step4_boundary_models` for
`fluid-dynamics-all-47-2026-10-23`. No live carrier, manifest, contract, state,
receipt, judge result, or gate authority was edited. Native Step 5 must review
the actual current sources and decide/apply any repair. This is one focused
review/proposal cycle, with a final local check of the proposed bytes.

All five assigned Luna objections are confirmed precision defects. The original
judge rows are preserved in `actual-judge-observations.json`; this review neither
replaces them nor supplies a native adjudication.

| Carrier | Diagnosis and smallest proposed repair |
|---|---|
| `def-fd-smooth-wall-exterior-solution-domains` | The velocity is already typed on the spacetime closure, but `g` has no declaration. Define continuous `g:[0,T] x boundary -> R3`, define the trace by restriction, and state compatibility with the existing classical class. Every compatible classical trace already lies in this continuous class. Keep the complete exterior paragraph, all regularity, cutoff decay and no-existence qualifications byte-identical. |
| `def-fd-flat-channel-domains` | The channel geometry is precise, but the final boundary equalities do not declare `u` or `g`. Define continuous steady fields/data on the closure/two faces and their time-first analogues for a specified evolution interval. The existing definition of smoothness remains and is not imposed on all steady competitors. Keep periodic and infinite channels, periods, Euclidean metric, differential conventions and lack of far-field decay intact. |
| `def-fd-forced-incompressible-newtonian-model` | Interior C2 regularity gives no wall restriction. When classical stationary no-slip is selected, require a continuous extension to `I x closure`, define its restriction on `I x boundary`, and impose zero there. The extension is unique by density. This explicitly supplies the regularity already required by the boundary-data postulate, without asserting that an interior PDE produces it or adding pressure boundary regularity. |
| `pthm-fd-no-slip-cfd-observations` | The physical suppliers use `(t,x)` and this theorem uses `(x,t)` without a declared conversion. Explicitly define the latter as the reindexings `u_phys(x,t)=u(t,x)`, and likewise pressure and acceleration; declare their physical domains. All existing scaling, weak extension, bounds and consumer space-first formulas then remain valid. Also disambiguate the physical nodal time: the partition already defines dimensionless `t_m`, while the old conversion used undefined `t_m^*`. Write `t_phys,m=(ell0/U0)t_m`. |
| `ex-fd-couette-vorticity` | F1 incorrectly calls both periodic directions streamwise. State periodic `x,z`, with `x` streamwise and `z` transverse for this x-directed shear. Only this Fact changes; the complete Example and numbered verification remain byte-identical. |

For a concrete regularity witness in the forced-model concern, on the unit ball
take `u(x)=(-x_2,x_1,0)/(1-|x|^2)`, independent of time. This is smooth and
divergence-free in the interior and has no finite continuous wall extension
(for example near `(1,0,0)`). With any positive density/viscosity, `p=0`, and
`b=(u dot grad)u - (mu/rho)Delta u`, its forced interior equation holds with a
smooth interior body acceleration. Thus even the forced interior system does
not supply the missing boundary regularity. The proposed repair adds it exactly
when the classical wall branch is selected.

The CFD repair is an explicit bijective coordinate reindexing, not a change to
the physical model or its numerical estimates. The time derivative and spatial
derivatives still act on the same variables. The theorem continues to adopt its
distributional weak extension separately at strong Sobolev regularity; it does
not infer the classical C2/C1 branch, and the proposed classical trace-extension
requirement is not silently imposed on that extension. Its H1_0 trace and the
MINI interface remain explicit. The viscosity powers, exponential, Countable
Choice, arbitrary positive time partition subject to the stated restriction,
projected initialization, any actual root, mean-zero pressure, integrated rather
than instantaneous pressure estimate, and all conditional applicability limits
are preserved.

The actual upstream public suppliers were inspected before the downstream-use
decisions. `consumer-use-matrix.json` records eight downstream items and the two
root subjects that also consume changed definitions. All eight downstream items
are unaffected under these proposals. Repository-wide searches of `items/` and
`library/` for the five original IDs found no additional item reference outside
that logical closure. The seven owning pages (`fd-s02`, `fd-s02-examples`,
`fd-s03`, `fd-ps02`, `fd-ps02-examples`, `fd-pn01`, `fd-pn01-examples`) have
frontmatter-only compact bodies and need no scientific prose correction.

The constitutive owner's proposed unforced-model inertial-chart clarification
was read as coordination context. Its time-first convention agrees with this
explicit CFD reindexing. No overlapping unforced-model or Euler proposal is
supplied here.

Exact preimages are under `before/`, full candidates and unified diffs are under
`proposals/`, and current observed source guards are in `input-raw-guards.json`.
Every candidate retains identical parsed frontmatter. Root/native owners retain
manifest statement mirrors, contracts, graph/level reconciliation, adoption,
rehashing and recertification duties; these draft files authorize none of them.

After the final candidate edit, the explicit five-candidate renderer check
reported 5 checked, no errors or warnings. Proof layout reported 5 items,
7 steps, 0 defects. `git apply --check` accepted all five diffs against the
observed live bytes. These are focused checks of unapplied candidates, not gates
or mathematical acceptance. Exact commands/results are in `focused-checks.json`.

Actual source reading and its limits are recorded in
`source-reading-limits.json`. Tong pages read here support no-slip and the
simple shear examples; they are not claimed to prescribe the exact local
function spaces. No new Guermond/Boffi reading, empirical data, independent audit
of the entire supplier closure, native acceptance, or gate result is claimed.
