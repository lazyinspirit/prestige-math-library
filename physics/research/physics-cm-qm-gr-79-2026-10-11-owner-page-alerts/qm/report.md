# QM page-summary escalation resolution

Run: `physics-cm-qm-gr-79-2026-10-11`; outside resolution cycle 1 of maximum 2.
Scope: the two assigned QM pages and this evidence directory. Native writers for
batches 37 and 64 were recorded as drained in `../escalations.json`.

I read the required root/workspace instructions and relevant mathematical-rigor
and statistical-evidence guidance, then checked the actual cited item carriers
before reading or editing either page. The three primary suppliers are local,
not imported entries in `research/math-imports.json`. No source item, contract,
manifest, import, original mathematics, certification, stamp, hash or ledger was
changed. No native worker was launched and no mechanical validator or gate was
run; the root agent owns those duties.

## Original finding dispositions

| Original report | Finding | Current disposition |
|---|---|---|
| `research/physics-cm-qm-gr-79-2026-10-11-batch-42-step5-context.json` | Spin ladders described as self-adjoint | Confirmed on the current page and repaired. |
| `research/physics-cm-qm-gr-79-2026-10-11-batch-46-step5-context.json` | Same spin self-adjointness error | Same confirmed defect; covered by the same repair. |
| `research/physics-cm-qm-gr-79-2026-10-11-batch-9-step5-context.json` | Same spin self-adjointness error | Same confirmed defect; covered by the same repair. |
| `research/physics-cm-qm-gr-79-2026-10-11-batch-37-step5-context.json` | All listed hydrogen angular entries given as positive `1/sqrt(3)` | Confirmed on the current page and repaired with signed forward and reverse entries. |
| `research/physics-cm-qm-gr-79-2026-10-11-batch-60-step5-context.json` | Real drive modulus called the amplitude | Confirmed on the current page and repaired with both the complex amplitude and its modulus. |

None of these findings had already been corrected in the page text by the native
writers when I inspected it. The two CM alerts are outside this assignment.

## Source reasoning and exact repairs

**Spin.** `items/prop-nrqm-orbital-and-spin-finite-spin-matrices.md`, Statement
(a), correctly gives self-adjointness of `J_z,J_x,J_y` and `J_+^*=J_-`. Proof
1.1 checks the orthonormal-basis entries and the adjoints of the two linear
combinations. Independently, for `s=1/2` in the supplier's ordered basis,
`J_+=[[0,1],[0,0]]` and `J_-=[[0,0],[1,0]]`; the raising operator is not
self-adjoint. The page now states the mutual-adjoint relation, explicitly gives
`J_x=(J_++J_-)/2` and `J_y=(J_+-J_-)/(2i)`, and assigns self-adjointness to the
Cartesian triple. The existing commutators, Casimir and Pauli multiplication law
are retained; the Pauli identification is now explicitly `J_i=sigma_i/2` for
`i=x,y,z`, as supplied by clause (e).

**Hydrogen factors.**
`items/ex-nrqm-light-matter-hydrogen-dipole-angular-factors.md`, Example
(a),(b) and Verification 1.1,2.1, explicitly adopt
`Y_1,+1=-sqrt(3/(8pi))*sin(theta)*exp(i phi)`,
`Y_1,-1=+sqrt(3/(8pi))*sin(theta)*exp(-i phi)` and
`Q_pm=sin(theta)*exp(+-i phi)/sqrt(2)`, with the pairing linear in its first
argument. The positive normalization and negative-index phase agree with
`items/thm-nrqm-orbital-and-spin-associated-polynomial-normalization.md`.
Multiplying the representatives and integrating gives the zero-component entry
`sqrt(3)/(4pi)*(4pi/3)=1/sqrt(3)` and the signed forward entries
`mp sqrt(3)/(8pi)*(8pi/3)=mp 1/sqrt(3)`. In the reverse entries the opposite
harmonic has the opposite sign, yielding `pm 1/sqrt(3)`. Thus only the moduli
are all `1/sqrt(3)`. The page now records each signed family, the adopted
`Q_pm` convention, and their common modulus. It retains both directions of the
allowed model transitions, the forbidden entries and the oscillator contrast.
No radial factor, transition rate, intensity or observed spectrum was added.

**Drive amplitude.**
`items/ex-nrqm-light-matter-two-level-dipole-drive-check.md`, Example (b) and
Verification 1.2, correctly labels `d E0 tau/(2 hbar)` as `|a_+|` and retains
the full first-order interaction-picture amplitude with its counter-rotating
term. `items/pthm-nrqm-light-matter-stimulated-dipole-drive-transitions.md`,
Statement (b), supplies
`a_+=-i <W v_i,v_k> exp(-i theta_0) tau/(2 hbar)` at resonance. Here the
declared initial time and field phase are zero, and
`<W e_down,e_up>=-d E0`, so independently `a_+=i d E0 tau/(2 hbar)`.
The page now records that complex amplitude, its modulus, and its squared
modulus as the leading small-time term of the exact averaged Rabi probability.
Replacing the prior wording "its probability" also preserves the example's
distinction between an unnormalized first-order coefficient and a normalized
Born law. The paragraph remains about the declared linear two-level model;
the later model-data and empirical-qualification prose is unchanged.

## Preservation and evidence

Exact pre-edit page copies are retained at:

- `before/qm-math-orbital-and-spin.md`
- `before/qm-light-matter-and-spectral-transitions-examples.md`

`page-summary.diff` compares those exact copies with the final pages and shows
only the repaired paragraphs. Both frontmatters, exact item/example inventories,
requires lists, and all other page paragraphs were left unchanged. The separate
harmonic summary correction below is also included. In particular,
the light-matter page already contained `lebesgue-measure-on-euclidean-space` in
its requires list before this repair; its difference from repository HEAD is
not part of this agent's change.

There is no deficient supplier or missing prerequisite for the five original
QM findings, and no remaining substantive blocker for those findings. Root
mechanical checking, rehashing and recertification remain pending.

## Additional confirmed harmonic-summary defect

While reading the spin page, I noticed its separate angular-layer summary gives
`Y_lm=b_lm w_l|m| exp(i m phi)/sqrt(2pi)` without a negative-index phase.
The actual normalization supplier instead defines
`Y_l,-m=(-1)^m conjugate(Y_lm)` for positive `m`; for `l=1,m=-1`, the displayed
page formula therefore has the opposite sign from the supplier. This is a page
summary defect, not a deficiency in the source item. Root explicitly authorized
its surgical repair in this same cycle after I reported it. The page now gives
the exact normalization formula for `0<=m<=l` and the explicit convention
`Y_l,-m=(-1)^m conjugate(Y_lm)` for `1<=m<=l`; together they retain the full
all-index family and its adopted signs. The positive-index normalization
coefficient is now consistently `b_lm`, applied only on its supplier's declared
nonnegative-index domain.

I checked every other use of the spherical functions on this page: the complete
orthonormal-family statement, diagonal Laplacian and `L_z` action, polynomial
restriction statement, harmonic blocks and orbital-generator summary, and
dipole-selection-rule matrix element. These continue to refer to the same
supplier-defined all-index family and need no changes; none asserts an
incompatible signed coefficient. The explicit hydrogen angular factors on the
other assigned page already retain this same convention after their repair.
No source item or other page was changed. No missing prerequisite or substantive
blocker remains for this additional finding. No broad consumer audit was
performed or claimed.
