# CM page-summary escalation resolution

Run: `physics-cm-qm-gr-79-2026-10-11`. Resolution cycle: 1 of maximum 2.
Scope: the recorded Step-4 findings for cm13 and cm15 in
`../escalations.json`. Both false summary assertions were still present after
the native writers had drained, and both are now corrected. No remaining
substantive blocker was found for these findings.

The relevant source carriers were read before the page summaries. The import
registry identifies all source items listed below as local authoring; no item,
import, original mathematics, contract, manifest, stamp, certification, hash,
ledger or native report was edited. Page frontmatter and inventories are
unchanged. No workers, gates or mechanical validators were launched, and no
commit was made; root retains hashing, validation and recertification.

## cm13: model-motion equivalence in every chart

Original finding: batch-30's Step-5 context reported that the page identified
the integral curves of the Hamiltonian field with momentum-phase curves of
model motions “in every chart,” although arbitrary lower-dimensional
generalized-coordinate immersions do not imply the ambient motion equation.

Source reasoning: `pthm-cm13-hamiltonian-field-integrates-the-model-equations`,
Statement clauses 1–4 and Proof steps 1.1–1.5 and 2.1–2.2, separately gives
Cartesian potential-branch motion equivalence, equivalence of substituted
Lagrange equations with the generalized-coordinate Hamilton system, the
Cartesian forced momentum system, and the velocity-independent-potential
criterion for that forced field to be Hamiltonian. The proof matches these
claims: the Cartesian components are `(H_p,-H_x)`; hyperregularity converts
the substituted Lagrange operator to the Hamilton momentum equation with its
residual generalized-force term.

`def-cm07-generalized-coordinates-and-forces`, Definition clauses (a), (d),
(e), permits a C3 immersion, makes full-dimensional maps local
diffeomorphisms, and distinguishes regular scleronomic constraint
parametrizations from arbitrary immersions. Its declared equations do not
themselves assert ambient model-motion equivalence.
`pthm-cm07-coordinate-covariance-of-the-equations`, Statement clause 1 and
Proof steps 2.1–3.1, supplies full-dimensional potential-branch
reconstruction: the invertible transpose Jacobian makes the substituted
Euler–Lagrange expression vanish exactly when the Cartesian expression does.
`pthm-cm12-hamilton-equivalence`, Statement clauses 3–4 and Proof steps
2.3 and 3.2, retains every generalized-coordinate Hamilton/Lagrange
equivalence and adds constrained reconstruction under the regular
scleronomic constraint datum and ideal-reaction law.
`pthm-cm07-lagrangian-reduction-of-ideal-constraints`, Statement clauses
1–5 and Proof steps 2.1–4.1, supplies the latter equivalence (also with
residual generalized forces): the image of DX is the virtual-displacement
space, so the residual reaction annihilates that space precisely when the
declared Lagrange equations hold. Multiple coordinate representatives remain
allowed.

The distinction is substantive. For one unit-mass particle with U(x,y,z) =
−y and X(q) = (q,0,0), the substituted potential vanishes and the Lagrange
equation is q'' = 0. The resulting Cartesian curve has zero acceleration
and is not an unconstrained motion under force (0,1,0). An ideal constraint
on the line can provide the normal reaction; the immersion alone cannot.

Current disposition and exact change: replaced only the offending summary
block. It now states Cartesian potential-branch equivalence, the full
generalized-coordinate Hamilton/Lagrange equivalence including residual
generalized force, potential-branch integral-curve equivalence,
full-dimensional reconstruction with its exact covariance supplier, and
constrained reconstruction with its regular scleronomic datum and
ideal-reaction hypotheses. It retains the Cartesian forced-field equivalence
and the C2 velocity-independent-potential criterion. All other prose,
including the native writer's existing half-dimension correction, remains
unchanged. No missing supplier is needed: the smallest conditions missing
from the old summary were the constraint datum and ideal-reaction law when
it promoted lower-dimensional solutions to constrained model motions.

Exact pre-edit carrier:
[cm13-symplectic-geometry-and-canonical-methods.before.md](cm13-symplectic-geometry-and-canonical-methods.before.md).

## cm15: unequal-mass elastic outcome

Original finding: batch-21's Step-5 context reported “the elastic case
exchanges the velocities” for masses 2 and 6 kg and incoming velocities 3
and −1 m/s. This would give outgoing velocities −1 and +3 m/s and violate
the declared zero total momentum.

Source reasoning: `ex-cm15-impact-check`, Example and Verification step 2.1,
correctly states outgoing velocities −3n and +1n m/s. Independently,
`pthm-cm15-impact-balance`, Statement clauses 1, 3–4 and Proof steps 1.1,
2.1 and 3.1, gives V = 0, d− = −4n m/s and, for e = 1,
v1+ = (6/8)(−4)n = −3n m/s and v2+ = −(2/8)(−4)n = +1n m/s.
These preserve momentum 2(−3)+6(1) = 0 and kinetic energy
(1/2)2(9)+(1/2)6(1) = 12 J. The exchanged pair instead has momentum
2(−1)+6(3) = 16 kg m/s. The mathematical supplier
`thm-cm-impulse-restitution-and-energy-loss`, Statement clauses (b)–(c)
and Proof steps 4.1–5.1, gives the same endpoint algebra under its stated
impulse hypotheses. No supplier defect is present in this calculation.

Current disposition and exact change: replaced “exchanges the velocities”
with “reverses each velocity,” explicitly giving the outgoing −3 and +1
m/s along the contact direction. Retained ΔK = 0, the semi-elastic and
sticking outcomes, momentum continuity and the page's declared-model-data
qualification. The example reports no measurement, and the summary retains
that status. No missing prerequisite or remaining blocker.

Exact pre-edit carrier:
[cm15-scattering-and-impulse-model-boundaries-examples.before.md](cm15-scattering-and-impulse-model-boundaries-examples.before.md).

## Focused final review

Compared each current page with its exact saved pre-edit carrier. The only
changes in this resolution are the two summary replacements described
above; their frontmatter is byte-identical. The revised assertions were
rechecked against the cited source clauses and the calculations above.
Mechanical checks and current-hash evidence remain root's next action.
