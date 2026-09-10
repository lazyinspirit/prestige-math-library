# Final adjudication: current-context review

Run: phase-2-nine-step-25. Group d. Queue: research/phase-2-nine-step-25-step7-fa-d-7-adjudicate-round-3.json, position 1 of 1.
Item: lem-finite-affine-bubbles-represent-signed-cubical-sums.
Disposition: accepted-after-review. Source status: familiar.

## Scope and evidence inspected

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the exact queue before review. Read the current consumer and all six direct dependencies completely, including proofs, at items/ID.md:

- lem-based-sphere-maps-have-finite-affine-bubble-normal-forms;
- thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one;
- lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes;
- prop-cubical-and-spherical-models-of-higher-homotopy-agree;
- thm-gram-schmidt-orthonormalisation;
- lem-continuity-is-local-and-pastes.

Also read def-higher-homotopy-group-by-based-cubes and def-compactly-generated-conventions-for-based-homotopy, both library/algebraic-topology/higher-homotopy-groups-and-cofiber-sequences A/B pages, the consumer's complete batch-8 proof-contract entry (citations, derivations, boundaries and risk_review), its batch-8 manifest and coverage entries, and the relevant conventions in phase-2-nine-step-25-alpha-d-step7-context.json. Read both exact Terra rejection rows, Alpha's adjudication and repair report, the previous finite-bubble FA evidence, and Alpha's current-context blocker report. Historical FA acceptance was treated as evidence of history, not a substitute for this mathematical review.

The initial rejection objected to an unsupported reparametrization attribution. Alpha correctly restricted F3 to the inverse formula and supplied the jointly continuous interpolation in step 3.1. The sole rejudge objects instead to F5's identity-generator identification. The subsequent licensed repair of prop-cubical-and-spherical-models-of-higher-homotopy-agree explicitly requires a BASED oriented quotient homeomorphism. Its adjudication explains why an unbased homeomorphism would not transport boundary-fixed maps correctly. This changed the dependency context while leaving this consumer's bytes unchanged. The current supplier meets the consumer's basedness requirement.

## Independent mathematical decision

The rejudge objection is not a fatal gap in the current proof. The cited quotient supplier's proof 1.1 explicitly constructs the coordinate compactification c(v)_i=v_i/(1-|v_i|), its inverse, its extension sending the collapsed boundary to infinity, and inverse stereographic projection sending infinity to the north-pole basepoint. The orientation is chosen to agree with the cube interior. Proof 2.1 transports maps by descent and pullback. Thus, using this fixed construction, pulling back the identity of the target sphere gives precisely the coordinate quotient map used by F5. This is not an appeal to an arbitrary orientation-preserving homeomorphism being isotopic to identity; the explicit map is present in the cited proof. Proof 3.1 also fixes the positive slab rescalings and transported pinch. The supplier's newly explicit based hypothesis agrees with all these formulas and changes neither their signs nor their homotopies.

For the consumer's step 4.1, put b(v)=v/(1-rho), rho=||v||_infinity<1. For any maximizing coordinate i, the i-th components of b(v) and c(v) both equal v_i/(1-rho). Therefore the straight interpolation B_t=(1-t)b+t c has norm at least rho/(1-rho), uniformly for t in [0,1]. This estimate proves joint continuity at the collapsed boundary even if the maximizing coordinate varies. On the interior continuity is immediate. Hence the positive radial map has the class of the fixed quotient generator. Reflection in coordinate 1 commutes with the formulas and is reversal in the normalized cube, so the inverse formula in F3 applies.

I independently checked the other steps as well. Gram-Schmidt gives A=QR with positive diagonal in R. Interpolating R to I stays invertible. Finite plane rotations reduce a determinant-positive Q to I; in the negative case reduce QJ and then multiply the path by J. The one-dimensional case uses the appropriate nonzero scalar interval. Along each compact matrix path the cofactor formula gives a finite inverse operator-norm bound M. A support point has ||x-c||_2 <= M sqrt(r) epsilon. Thus the prescribed shrinkage keeps every changing support in a private interior ball; initial shrinkage stays inside its original parallelepiped. At a moving boundary the radial input norm tends to its positive radius, so the finite output norm tends to infinity. The radii have positive lower bounds in each homotopy. Extension by infinity and finite pasting are valid jointly in space and time.

The private balls allow small center displacements with positive clearance. Choosing first coordinates successively outside a finite forbidden set and shrinking again separates the projected support intervals. Slab restrictions are boundary-constant, so the whole map is a concatenation of those restrictions and constant pieces. For an endpoint-fixing coordinate map phi, a((1-t)s+t phi(s),u) fixes all cube faces and is jointly continuous. Positive piecewise-affine reparametrizations adjust widths; constant factors can be removed by the group unit law (or by reparametrizing a representative with no constant factors to insert the constant intervals). This does not require an inverse to a map collapsing an interval.

Within each convex slab, sufficiently small supports can be moved to its midpoint, then expanded with positive coordinate half-widths. In normalized coordinates the same radial divergence verifies continuity when the support reaches the exterior faces. The initial Q_epsilon formula can retain a positive scalar amplitude epsilon after normalization; interpolating that amplitude to 1 stays bounded away from zero and preserves the divergence estimate. This supplies the elementary positive normalization implicit in evaluating the same radial map on normalized coordinates. No new topological theorem is needed. The resulting factors are the generator and its inverse as checked above.

An ordered word in a single group element and its inverse is its signed integer power, even in a nonabelian group. Consequently r=1 is covered without imposing commutativity of general fundamental groups. Empty support gives the constant class; zero signed count gives the group unit. Singular matrices are excluded by hypothesis. The proof computes the class of a given finite normal form and does not assume degree classification or assert uniqueness of a normal form. All selections are finite. The source and target models are compact metrizable spaces, compatible with the page's conventions, and all homotopies fix the full cube boundary.

These finite-dimensional matrix arguments, explicit compactification estimates, finite pasting and cubical group homotopies are familiar mathematics that I verified directly from the complete local arguments. No uncertain or unfamiliar step remained requiring external verification. No external URL is offered as an FA source read; inherited bibliography and previous agents' source reading are not claimed as my verification.

## Contracts, dependency bookkeeping and checks

The contract's boundary and risk records agree with the argument above. The manifest/coverage strategy's older phrase about a reparametrization lemma is resolved concretely by the current inline formula and group-unit supplier; it introduces no missing dependency. The A page places the normal-form and signed-sum lemmas before the degree-classification consumer; the B page retains its corresponding sphere applications. No claim, convention, item inventory or dependency edge changes.

Read briefs/tasks/frontier-dependency-ledger.md and the owning input research/phase-2-nine-step-25-batch-8.cross-batch-dependencies.json. Its empty array remains appropriate for this consumer: all four run-local direct suppliers are on the same batch-8 A page, and the other two are published prerequisites. In particular the repaired quotient supplier is in the same batch. There is no cross-batch consumer row to update or invent. This adjudication makes no dependency repair or input edit, so no new prerequisite licence or ledger refresh is required. This reconciliation does not expand review to other consumers or certify an unrelated dependency closure.

Focused checks run on the current consumer:

- node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-affine-bubbles-represent-signed-cubical-sums.md: exit 0; 1 checked, 0 failing.
- node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-8.proof-contracts.json --strict --items lem-finite-affine-bubbles-represent-signed-cubical-sums: exit 0; 1/1 checked, 0 errors, 0 warnings.
- node tools/rendercheck.mjs items/lem-finite-affine-bubbles-represent-signed-cubical-sums.md: exit 0; renderer YAML and real KaTeX checks pass.

Current itemHashGuard: ba1eb4e61cc2a7ca283268c48b0faba1d4f28c1e156f329fb1f42ee6caf17dd7.
Current item_sha256: f10721b18d11991a63cde2ae6105db0aa9045a1e23cac4abec0814baa46c55f9.
Current context_sha256: ba03539dca99696ea6eb442944df1e3f3449a09b8c96af3e860bd9948b08eb88.

No mathematical blocker remains for this sole queued item. No item, dependency, page, contract, manifest or independent review was modified. Next action is the prescribed terminal recorder with accepted-after-review and familiar, binding the current dependency context. This is a terminal decision, not a judge verdict or pass stamp; no third consumer judgment is requested.
