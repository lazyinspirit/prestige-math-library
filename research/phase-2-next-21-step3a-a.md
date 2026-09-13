# Step 3a scope review — group a

Run: `phase-2-next-21`

Role: `alpha`

Batches: 7, 8, 10

Review type: scope only; no item or proof approvals

## Review basis

I compared the current six A/B manifests and coverage files with the complete
binding DG-21, DG-25–DG-27, and DG-35–DG-36 prose sections, the current
`plan-spec.json` metadata, the scope ledger, batch notes, cross-batch dependency
records, and `phase-2-next-21-step1-owner-reconciliation.md`. The Step 1 owner
reconciliation added the published spectral-theorem prerequisite needed by the
principal-curvature branch and the several-complex-variables prerequisite
needed by the complex Lie-group definition. Both edges are present in the
current prose, plan, and manifests. There is no current Step 3a owner decision
for any of these pages.

The current plan's item arrays are empty staging arrays for these new pages,
while its page IDs, order, companions, and prerequisites agree with the binding
prose and manifests. The manifests contain all 367 prose-selected items, plus
three useful local bridge items on the PBW page: an arbitrary-dimensional
homomorphism definition, characteristic-free symmetric/exterior powers, and an
ordered monomial basis for the symmetric algebra. The symplectic manifest does
not duplicate the prose-mentioned alternating-form normal form because that
result is already published and declared as a prerequisite.

Coverage is adequate for a scope judgment: the three current coverage files
contain 293 disposed harvested/canonical rows and pass with no errors or
warnings. Their 19 source occurrences are fetch-verified and resolved. They
use complete textbook or lecture-note sections from Datar, Lee, Merry, Terng,
Calegari, Knapp, Kirillov, Bryant, Müger, Gallier, Etingof, Cannas da Silva,
and Meinrenken, plus the focused Martynchuk–Broer–Efstathiou monodromy paper.
The batch-10 construction note's older total of 187 rows is not the current
coverage count; the current file and checker report 173 for that batch. This
bookkeeping difference does not conceal an undisposed result or inventory gap.

## Decisions

| A page | Inventory | Decision | Scope rationale |
| --- | ---: | --- | --- |
| `riemann-curvature-and-riemannian-submanifolds` | A53 / B12 | `sufficient` | The pair supplies the curvature interface required by Jacobi-field, comparison, Gauss–Bonnet, compact-Lie-group, and Chern–Weil pages: affine and bundle curvature, tensoriality, structure and Bianchi identities, Riemann symmetries, sectional/Ricci/scalar/Weyl curvature, flatness and Schur, followed by induced and normal connections, second fundamental form, shape operators, Gauss–Codazzi–Ricci, total geodesy, hypersurface curvatures, Theorema Egregium, mean curvature, and first variation. Its examples test the sign convention and distinguish intrinsic, extrinsic, scalar, and mean curvature. Jacobi fields, comparison theory, global space-form classification, Gauss–Bonnet, holonomy/Chern–Weil, the fundamental theorem of submanifolds, and minimal-surface existence/stability are coherent later or specialist boundaries, not omissions from this foundational local interface. |
| `lie-groups-invariant-fields-and-the-exponential-map` | A46 / B12 | `sufficient` | The pair covers the finite-dimensional Lie-group foundation needed by every later Lie page: translations and invariant fields, the tangent Lie algebra and sign conventions, Maurer–Cartan form/equation, complete invariant flows and one-parameter subgroups, exponential/local logarithm, homomorphism differentials and naturality, Ad/ad, convergent local BCH, and the real/complex distinction. Matrix, torus, Heisenberg, affine, classical-group, logarithm, and BCH examples make the local/global boundaries concrete. Subgroups, quotients and actions are assigned to DG-26; representation and structure theory to DG-27 onward; Lie II and Lie III to DG-29. Their absence here preserves the intended foundational role. |
| `lie-subgroups-actions-and-homogeneous-spaces` | A52 / B12 | `sufficient` | The pair distinguishes immersed, embedded, and closed subgroups; integrates subalgebras; proves the closed-subgroup and homomorphism structure results; constructs closed-subgroup quotients, principal and associated bundles; develops actions, stabilizers, immersed orbits and homogeneous spaces; and proves the free-proper quotient/principal-bundle theorem. It also supplies covering Lie groups and the abelian fundamental-group consequence. The examples range from dense irrational subgroups through classical homogeneous spaces and associated bundles to failures of embeddedness, properness, and freeness. This is the exact quotient/action interface consumed by later semisimple, compact/real Lie, flag-variety, and symplectic-reduction pages. General nonfree slice theory, orbifolds, and stratified quotients are later specialist topics, not required enrichments here. |
| `lie-algebra-representations-enveloping-algebras-and-pbw` | A49 / B12 | `sufficient` | The pair provides the algebraic base used by the entire later Lie-structure sequence: arbitrary-dimensional Lie algebras and homomorphisms, ideals/quotients, derivations and semidirect products, basic representation operations and irreducibility language, tensor/symmetric algebras and their universal properties, the enveloping algebra and module equivalence, filtration/associated graded, a noncircular ordered-monomial PBW interface, characteristic-zero symmetrization, Schur's lemma, and the non-load-bearing Hopf formulas. Its examples include classical modules, nonsplit solvable behavior, Heisenberg and `sl_2` PBW computations, and symmetrization failure. Complete reducibility criteria, Lie/Engel theory, semisimple structure, roots, highest weights, invariant-theoretic refinements, and Duflo theory have explicit downstream homes. |
| `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | A47 / B12 | `sufficient` | The pair spans the intended local symplectic foundation: linear symplectic complements and reduction, Lagrangian criteria, symplectic manifolds and cotangent bundles, compatible almost-complex structures, compact and compact-support Moser stability, relative primitives/Moser, Darboux, symplectic-neighborhood and Weinstein Lagrangian-neighborhood theorems, and the regular coisotropic local model. Examples cover linear, cotangent, Lagrangian, compatible-structure, surface-Moser, Darboux, and local/global counterexample behavior. Hamiltonian vector fields are deliberately moved to DG-36, moment maps/reduction to DG-37, and fixed-point, Maslov, Kähler, and broader symplectic-topology theory beyond this local-normal-form pair. |
| `hamiltonian-mechanics-and-completely-integrable-systems` | A51 / B12 | `sufficient` | The pair covers the Hamiltonian mechanics and regular-integrability spine: symplectic versus Hamiltonian fields and the de Rham obstruction, the Poisson algebra with the library's sign, canonical and time-dependent Hamiltonian evolution, Liouville volume and recurrence, the action principle, Euler–Lagrange/Legendre equivalence for hyperregular systems, regular commuting integrals, compact regular tori, Liouville–Arnold action–angle coordinates, and the monodromy obstruction. Standard particle, oscillator, pendulum, geodesic, angular-momentum, torus, Legendre, action–angle, and spherical-pendulum examples expose both hypotheses and failures. Noether/moment-map and reduction theory belongs to DG-37; singular integrable systems and global integral-affine theory are deliberate later boundaries, while Hamilton–Jacobi theory has its own library track. |

## Checks and conclusion

- `coverage-checklist --require-destination`: 6 A pages, 293 rows, 0 errors,
  0 warnings.
- `source-fetch-check`: 19/19 source occurrences fetch-verified and resolved.
- `manifest-deps`: 370 assigned items, 0 errors.
- `content-policy --manifest-only`: 370 assigned items, 0 errors, 0 warnings.
- Batch 8's two same-run page edges and 22 exact item interfaces into batch 7
  are recorded as verified; batches 7 and 10 have no same-run cross-batch edge.

All six assigned A/B pairs are scope-sufficient for their stated roles. I
recommend neither a pair merger nor scaffold enrichment. This report does not
approve any proof, dependency proof, individual item, or owner transition.
