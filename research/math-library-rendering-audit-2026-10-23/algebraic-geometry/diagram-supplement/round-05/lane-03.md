# Round 05, lane 03: rational Gorenstein surface resolution by point blowups

## Finding

**Warranted as an optional editorial aid; classification uncertain.** The proof's termination argument is a finite branching tree of singular successors, followed by blowups in ancestor order. A tree can clarify the square and nonsquare tangent-conic branches and the finite resolution it produces. The proof already establishes the claim; the diagram must not imply a unique resolution or unique center choices.

The snapshot hash matches the assignment source hash: `cf1b7c3f32b10ee21b313b9520cfca293b5647c4283136bcc1c1d17dc0c023bc`. All three listed local PNG tiles were inspected at original resolution.

## Diagram details and checks

- **Statement line 38:** Start with `X₀=Spec A`, with its original singular closed point `p₀`. The theorem assumes AC and DC, a rational Gorenstein normal local surface domain in the permitted canonical-module setting, and normal completion. It concludes that finitely many ordinary blowups at singular closed points yield a regular, projective terminal model, unchanged off `p₀`.
- **Facts lines 48–60; proof lines 68–74:** Represent the process as a rooted tree. A node is a singular closed point on the current model; an edge denotes blowing up that point and then considering singular closed successors over it. Nonsquare tangent-conic branches terminate. For square tangent conic, singular successors lie in the zero scheme of a nonzero cubic on the reduced exceptional line, so there are finitely many (at most three distinct closed zeros). Simple zeros lead to nonsquare successors; the double-plus-simple and triple-cubic cases terminate or reduce to a terminating case. The tree is finitely branching with no infinite path; DC gives finiteness.
- **Proof lines 76–78:** Blow up the finite tree's nodes in ancestor order to get `X_N→⋯→X₁→X₀`. Each center is a singular closed point, each map is projective and an isomorphism away from its center, and all centers lie over `p₀`. The final model is regular and the composite is an isomorphism outside `p₀`.
- **Propagation, proof lines 68 and 76:** Mark each intermediate model as normal, with rational closed local rings and invertible canonical module. The theorem does not assert uniqueness; the picture should show a possible finite tree and ordering, not a uniquely determined resolution. Avoid adding an exceptional-fibre label such as `P¹`, which the stated result does not claim.

No inconsistency was found in the branch termination, finite-tree construction, propagated properties, terminal regularity, or off-center isomorphism claims.

See `lane-03.json` for image hashes and detailed proposed labels.
