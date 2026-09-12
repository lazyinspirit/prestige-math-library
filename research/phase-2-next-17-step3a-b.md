# Step 3a scope review — group b

Run: `phase-2-next-17`  
Batch: 2  
Reviewed A/B pairs: `weak-and-weak-star-topologies` and
`distributions-test-functions-and-differentiation`, with their examples pages.

## Decisions

### `weak-and-weak-star-topologies`: sufficient

The 19 A items and 9 B items implement the controlling FA-8 design and its
§14.4 amendment. They cover the weak and weak-star initial topologies, finite
coordinate neighbourhoods, net and sequence convergence, Hausdorffness,
continuous-dual identifications, convex and annihilator closure, weak lower
semicontinuity, boundedness of weakly convergent sequences, the
finite-dimensional and first-countability boundaries, transpose/preadjoint
continuity, and the SOT/WOT hierarchy. The B page supplies the required
sequence-space distinctions, a genuine weak-closure/nonsequential-closure
example, both strict operator-topology implications, the incomplete-domain
uniform-boundedness failure, and a point-carrying unbounded weakly null net.

The two items removed from the older 21-item list are not omissions:
`def-weak-star-topology` and
`thm-bipolar-closure-for-linear-subspaces` are already published on the
duality predecessor and are used rather than duplicated. Banach--Alaoglu,
Goldstine, weak-star separation and bounded-ball metrizability are explicitly
deferred to `banach-alaoglu-goldstine-and-krein-milman`; Schur, reflexivity and
sequential weak compactness are deferred to `reflexivity-and-eberlein-smulian`.
Those dispositions respect this pair's role as the elementary topology and
convergence supplier for those later compactness pages and for the listed
complex-analysis consumers.

The coverage record disposes all 31 harvested results from the selected
Bühler--Salamon and Teschl sections. Included and inline rows support the
neighbourhood, dual, convex-closure, convergence and examples spine; every
declined result has a specific later destination or an explained boundary.
The declared requirements are the current plan's
`locally-convex-spaces-and-continuous-separation` and `nets-and-filters`, and
the reviewed Batch-2 cross-batch record is empty. No merger or enrichment is
needed.

### `distributions-test-functions-and-differentiation`: sufficient

The 48 A items and 8 B items implement the complete FA-24/§14.4 inventory.
They begin with the fixed-support Fréchet spaces and the genuine LF topology
on `D(Omega)`, including its universal property, bounded sets and sequential
convergence. They then cover distributions and regular distributions,
compactwise order, weak and strong dual topologies, restriction/sheaf
locality, support, compact-support extension and finite order,
differentiation, smooth multiplication and Leibniz, pullback by
diffeomorphisms, parameter pairings, tensor products, convolution under the
stated support conditions, mollification and smooth density, point-supported
distributions, uniform compactwise order bounds, and local/global continuous
primitive structure. The conventions that matter for later consumers are
explicit: complex-bilinear pairings, no sequence definition of the LF
topology, absolute Jacobians for pullback, and at least two compact factors in
the three-factor associativity theorem.

The B page gives the standard Heaviside and jump formulas, the normalized
three-dimensional Newtonian kernel, principal value `1/x`, delta as a
nonregular distribution, failure of pointwise convergence without local
control, a sharp finite-order example, and an explicit boundary sending
Sobolev weak derivatives to the PDE track. Homogeneous distributions and
general fundamental solutions are correctly deferred to
`fundamental-solutions-newtonian-potentials-and-green-functions`; Fourier
transposition is deferred to the immediate successor
`tempered-distributions-and-the-fourier-transform`; Schwartz-kernel,
singular-support and Weyl-regularity material is outside this foundational
pair's commissioned role.

The coverage record contains complete-reading declarations and dispositions
for the relevant Dyatlov chapters, Gelca Chapter 7 sections, and Knapp IV §7
and V §§1--3: 63 harvested results for this pair, with every omission routed or
explained. These sources collectively cover the LF topology, local estimates,
locality/support, operations, convergence, structure, tensor products and
compact-support convolution. The current plan requirements are
`order-zorn-and-the-axiom-of-choice`,
`schwartz-space-and-the-plancherel-theorem`, and
`the-divergence-theorem-and-classical-stokes`; the first reflects the owner's
recorded direct-Zorn reconciliation for the local structure result. The B page
requires only its A companion, and the reviewed Batch-2 cross-batch record is
empty. No merger or enrichment is needed.

## Evidence and boundary

Reviewed current artifacts:

- `research/phase-2-next-17-batch-2.pages.json`
- `research/phase-2-next-17-batch-2.coverage.json`
- `research/phase-2-next-17-batch-2.notes.md`
- `research/phase-2-next-17-batch-2.cross-batch-dependencies.json`
- `research/phase-2-next-17-cross-batch-dependencies.json`
- `research/phase-2-next-17-scope-ledger.json`
- `research/phase-2-next-17-alpha-step1-drift.md`
- `research/plan-functional-analysis-track.md` (FA-8, FA-24, §§6 and 14.1/14.4)
- `research/plan-spec.json`

The empty item arrays for these four pages in `plan-spec.json` are the
documented pre-materialization state, not a contrary scope decision; §14.4 and
the Batch-2 manifest control the inventories. There is no current Step-3a
owner decision for either A page. The earlier distribution prerequisite
blocker was resolved by the owner reconciliation recorded in the current
drift report and Batch-2 notes. The three published-interface defects noted in
the Batch-2 construction report are avoided by the planned routes and do not
remove or add any topic in these pairs.

Current mechanical checks: manifest dependencies, 84 items and 0 errors;
manifest-only content policy, 0 errors and 0 warnings; coverage checklist, 2
pages and 94 harvested results with 0 errors and 0 warnings.

These are scope decisions only. They do not approve proofs, item contracts, or
publication.
