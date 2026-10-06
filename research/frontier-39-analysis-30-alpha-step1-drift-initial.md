# Prerequisite drift review — frontier-39-analysis-30

Reviewed the 30 assigned A pages against all 30 batch manifests, the scope ledger,
the rendered drift evidence, the corresponding prose inventories and enrichment
rows, and the current canonical plan. Verdicts concern prerequisite closure, not
certification of future proofs. Nearby candidate names were not treated as findings.
All added suppliers are published, existing, lower-order A pages. No page order,
pair scope, manifest, item, or prose scaffold was changed.

Five backward edges were added in four plan edits: heat adds Bochner integration;
Fredholm adds compact spectral theory and unbounded self-adjoint operators;
Schauder adds Calderón–Zygmund theory; LCA inversion adds Gelfand theory.
Each edit was followed by plan validation. Four decisions remain owner-held below;
the applied edges do not resolve those separate obligations.

Design locators below use `research/plan-pde-track.md` (PDE),
`research/plan-fourier-analysis-track.md` (FR), and
`research/plan-representation-theory-lie-track.md` (RL). The AG amendment at
`research/plan-algebraic-geometry-track.md:3440` controls the primitive-ideal scope.
The live engine status identifies this run at Step 1; historical RESUME files were
not used as authority.

### heat-equation-maximum-principles-duhamel-and-smoothing

VERDICT: drift-applied — banach-valued-integration-and-the-radon-nikodym-property (order 288.069)

Consumer order 458.013. PDE-8, lines 1130–1181 and 3487–3499, explicitly
defines a Bochner Duhamel integral and its norm estimate. The original heat-kernel
closure did not supply Bochner integration. The new edge supplies strong
measurability, integrability, norm inequalities and dominated convergence.
Surface integration, Fourier analysis and the analytic identity theorem are already
in the heat-kernel closure. Complex-time kernels are constructed here; the later
abstract analytic-semigroup page is not a prerequisite. Strong continuity at zero
in the full L-infinity norm must not be inferred from positive-time smoothing.

### wave-equation-representation-formulas

VERDICT: no-drift

Order 458.015. PDE-9, lines 1185–1234 and 3500–3512, builds spherical means,
Euler–Poisson–Darboux, dimension recursion and descent locally. The declared heat
predecessor reaches Euclidean surface measure/Green identities, parameter
integration and distributions. The singularity at radius zero and the distributional
wave kernels are explicit local obligations, not reasons to import the later energy
page. No additional supplier or ordering change is needed.

### wave-energy-finite-propagation-and-huygens

VERDICT: no-drift

Order 458.017. PDE-10, lines 1238–1288 and 3513–3525, obtains Huygens from the
preceding representation formulas and energy from product rules and surface
integration already in closure. The shrinking-ball energy identity supplies the
cone boundary sign locally. For speed c, retain the c-squared gradient energy;
the enrichment's unit-speed formulas require c=1. Zero energy leaves a spatial
constant until the displacement datum fixes it. No abstract semigroup or elliptic
spectrum is used.

### sobolev-poincare-and-morrey-inequalities

VERDICT: no-drift

Order 458.025. PDE-14, lines 1477–1537 and 3582–3599, reaches weak derivatives,
extension, traces, integration, Hilbert geometry and Lp duality through the declared
trace page. Its potential estimate and endpoint p=1 proof are local; no
Hardy–Littlewood–Sobolev page is needed. The stated direct averaging proof of
Poincaré–Wirtinger precedes Rellich. In the enrichment's dual estimate, explicitly
define H-minus-one as the dual of H-one-zero before using it; this notation can be
introduced within that estimate from the available dual-space definitions.

### real-hardy-spaces-maximal-functions-and-atoms

VERDICT: no-drift

Order 458.02607. FR-9, lines 756–803, explicitly includes Whitney cubes,
polynomial moment projections and a local Calderón reproducing formula before
atomic decomposition. Distributional convolution, maximal estimates, singular
integrals and finite-dimensional Gram matrices are in the declared closure. There
is no dependency on the later Littlewood–Paley reproducing formula. For p below
one, retain the moment threshold and convergence in tempered distributions;
Banach-space duality is not available merely from the quasi-norm.

### bmo-john-nirenberg-and-h1-duality

VERDICT: no-drift

Order 458.02609. FR-10, lines 804–846, consumes the earlier in-run Hardy page
and published CZ page. Hahn–Banach, Hilbert Riesz representation, Lp duality and
Lebesgue differentiation are in closure. The converse duality proof first proves
the local mean-zero L2-to-H1 estimate and then glues Riesz representatives modulo
constants. Both steps are local inventory rows. General pairings are extensions
from finite atomic sums, not automatically globally integrable products.

### littlewood-paley-theory-and-square-functions

VERDICT: no-drift

Order 458.02611. FR-11, lines 847–888, declares all actual external proof inputs:
Khintchine from the lacunary page, Mihlin from the multiplier/CZ closure,
Plancherel, distributions and duality. The smooth partition and reproducing formula
are proved locally. Earlier in-run Hardy/BMO pages support the endpoint
orientation; the unproved area-function characterization is not load-bearing.
The inhomogeneous low-frequency block must be retained in all reconstruction and
Sobolev norm statements.

### muckenhoupt-weights-and-weighted-estimates

VERDICT: no-drift

Order 458.02613. FR-12, lines 889–931, reaches Hilbert/Riesz transforms through
its declared CZ predecessor. Maximal truncations, measure theory, interpolation
and duality are available. Reverse Hölder, exponent openness, A-infinity power
decay and good-lambda are local obligations preceding weighted boundedness.
BMO or Littlewood–Paley is not an external premise of this architecture. Preserve
positivity a.e., the distinct A1 definition and strict 1<p<infinity bounds.

### rellich-kondrachov-and-sobolev-compactness

VERDICT: no-drift

Order 458.027. PDE-15, lines 1582–1627 and 3600–3617, proves the
Fréchet–Kolmogorov criterion locally from translation estimates, approximation and
finite nets. Extension, weak compactness, Ascoli, interpolation and fractional
trace definitions are in the Sobolev closure. For the enriched compact trace
theorem, supply the subcritical boundary compactness argument in charts; do not
treat continuous trace boundedness as compactness. These are local proof
obligations of the assigned compactness page.

### lax-milgram-and-weak-elliptic-solutions

VERDICT: no-drift

Order 458.029. PDE-16, lines 1631–1686 and 3618–3635, uses Hilbert Riesz,
adjoints, completeness, contraction mapping, Poincaré and trace lifting, all in the
Rellich closure. Lax–Milgram and the H-minus-one representation are proved here.
The Neumann result needs a bounded connected extension domain, the functional
on H1 and compatibility F(1)=0; on disconnected domains require compatibility on
each component. No later elliptic spectral theorem is needed for A-page
solvability.

### fredholm-elliptic-problems-and-the-elliptic-spectrum

VERDICT: drift-blocked — interior-and-boundary-sobolev-elliptic-regularity (order 458.033)

Consumer order 458.031. Applied the authorized backward edges to
compact-self-adjoint-hilbert-schmidt-and-trace-class-operators (order 288.077)
and unbounded-self-adjoint-operators-and-stones-theorem (order 288.087).
The former also supplies compact-operators-and-riesz-schauder-theory (order
288.075). PDE-17's main inventory, lines 1694–1747, explicitly cites these
abstract theorems for Fredholm solvability, eigenbasis construction and the
self-adjointness range criterion; they were absent from the original closure.

Unresolved: enrichment line 3646 places
`cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth` here
and explicitly invokes PDE-18 bootstrapping. PDE-18 already requires this page.
Adding that forward edge creates a cycle; reversing page order leaves the cycle.
Proposed owner amendment: place this same corollary on
interior-and-boundary-sobolev-elliptic-regularity (order 458.033), after its
higher-order boundary regularity and embedding results. The claim and supplier
are preserved. No relocation, forward edge or reorder was applied.

### interior-and-boundary-sobolev-elliptic-regularity

VERDICT: no-drift

Order 458.033. PDE-18, lines 1751–1800 and 3654–3671, has difference-quotient
integration by parts, commutator estimates, chart pullback and normal-derivative
recovery as local lemmas. Weak compactness, traces, extension, Rellich, Fourier
interpolation and Sobolev embeddings are already in closure. The corrected
Fredholm prerequisites also flow into this page. It is the proposed destination
for the smooth-eigenfunction corollary above, subject to owner authorization;
that proposal is not an applied scope change.

### schauder-and-lp-elliptic-estimates

VERDICT: drift-applied — calderon-zygmund-decomposition-and-singular-integrals (order 458.02605)

Consumer order 458.035. PDE-19, lines 1808–1861 and 3672–3685, explicitly
applies the generic CZ Lp theorem to Newtonian Hessians. The original Sobolev
regularity closure lacked it. Added the published backward supplier. It also
reaches Fourier multipliers and the transform conventions used by the Riesz
example. The cancelled kernel, local multiple of f, freezing/absorption, boundary
estimates and continuity method remain local. Use the coefficient regime actually
proved; a VMO claim requires its full local argument.

### weak-elliptic-maximum-principles-and-holder-regularity

VERDICT: no-drift

Order 458.037. PDE-20, lines 1864–1911 and 3686–3703, reaches truncation,
trace, Sobolev, Caccioppoli and weak compactness through its declared Schauder
predecessor. Read Simon's complete Lecture 17 proof, Theorems 1–2 and Lemmas
3–4, printed pp. 199–209: the logarithmic energy and moment estimates supply
the positive/negative-power bridge locally. Consequently this route needs no
additional BMO page edge. State the scalar, coefficient, forcing and exponent
hypotheses at each Harnack/regularity conclusion.
Source: [Simon, author notes](https://math.stanford.edu/~lms/lecs-on-pde.pdf).

### the-direct-method-and-euler-lagrange-equations

VERDICT: no-drift

Order 458.039. PDE-21, lines 1916–1969 and 3706–3720, reaches reflexive
sequential weak compactness, separation, Sobolev compactness, lifting and elliptic
regularity through its declared predecessor. Weak closure and integral lower
semicontinuity are local lemmas/theorems. Properness needs a finite competitor;
the scalar convex-gradient theorem must state the hypotheses that allow passage
in the u-variable. Gateaux variations require a common integrable dominator.
No new variational or optimal-control supplier is needed.

### constrained-variational-problems-and-variational-inequalities

VERDICT: no-drift

Order 458.041. PDE-22, lines 1972–2027 and 3721–3735, explicitly proves the
split-surjective Banach implicit theorem and realizes tangent directions by
level-set curves. It does not rely on the finite-dimensional implicit theorem.
Hilbert projection, separation, direct method, Rellich, elliptic spectrum and
comparison are in closure after the upstream corrections. Complementarity and
Lewy–Stampacchia bounds need the stated measure/order regularity; arbitrary
distribution products do not follow from the energy solution.

### strongly-continuous-semigroups-and-hille-yosida

VERDICT: no-drift

Order 458.043. PDE-23, lines 2031–2089 and 3736–3750, reaches Bochner
integration, uniform boundedness, separation, Stone–Weierstrass and, after the
Fredholm correction, unbounded-operator vocabulary. Laplace uniqueness is a local
theorem, not an assumed transform theorem. The Yosida sufficiency construction
retains all resolvent-power bounds for general M. The weak-derivative translation
example belongs to finite p, with its generator domain and boundary condition
stated. No further page edge is needed.

### analytic-semigroups-and-linear-evolution-equations

VERDICT: no-drift

Order 458.045. PDE-24, lines 2092–2142 and 3751–3765, originally inherited the
PDE chain's missing spectral/calculus suppliers. The Fredholm corrections now
put unbounded spectral calculus and Banach-algebra holomorphic calculus in its
closure; the Schauder correction also reaches that calculus. No redundant direct
edge was added. The sectorial contour construction and associated-form
resolvent theorem are local obligations. Positive-time operator-domain smoothing
must be separated from spatial regularity and from the forcing compatibility at
time zero.

### hamilton-jacobi-equations-and-viscosity-solutions

VERDICT: drift-blocked — convex-and-semicontinuous-functions-on-rn (order 288.00005); local biconjugacy placement required at hamilton-jacobi-equations-and-viscosity-solutions (order 458.047)

PDE-25 lines 2150 and 2176 explicitly assume published Legendre–Fenchel
items and direct item 15 to a sibling biconjugacy result. The current plan and
published inventories have no such theorem. The earlier convex page supplies
subgradients, but its inventory contains no conjugate definition or biconjugacy.
The available mechanical Lagrangian fibre transform does not supply this claim.

Proposed owner correction: authorize a local finite-valued convex biconjugacy
lemma immediately after `def-legendre-transform-of-a-hamiltonian` and before
Hopf–Lax. For convex finite H, write L(v)=sup_q(q·v−H(q)). Always
sup_v(p·v−L(v))≤H(p). Choose v in the available subdifferential of H at p;
its supporting inequality gives L(v)=p·v−H(p), proving the reverse inequality.
Superlinearity ensures L is finite in the subsequent Hopf–Lax regime. This closes
the needed claim without a new pair. It changes the explicit sibling-only proof
instruction, so no scaffold amendment was applied. Tran's Appendix §3, printed
pp. 246–247, also treats biconjugacy as a prerequisite to its characterization,
not its proof: [author text](https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf).

### scalar-conservation-laws-and-entropy-solutions

VERDICT: no-drift

Order 458.049. PDE-26, lines 2220–2300 and 3781–3795, declares the in-run
Hamilton–Jacobi supplier and inherits heat, distributions, Fréchet–Kolmogorov
and measure theory. Its parabolic translation estimates and local space-time
compactness are explicit local lemmas; the dissipation energy alone does not
provide strong compactness. The correspondence uses an a.e. derivative of a
Lipschitz primitive with its normalization stated. The preceding HJ decision holds
this route operationally, but no additional page edge is missing here.

### weyl-character-and-multiplicity-formulas

VERDICT: no-drift

Order 510.013. RL-7, lines 1034–1074, declares HC/Casimir, Verma and BGG
suppliers. Their closure includes finite highest-weight theory, root strings,
Weyl actions and formal Verma characters. BGG Euler gives the denominator at
lambda=0 and then the character formula. Casimir trace comparison and the
regularized dimension limit are local inventory lemmas. Neither geometric
Borel–Weil–Bott nor later nilradical cohomology is a prerequisite.

### tensor-product-multiplicities-and-littlewood-richardson

VERDICT: no-drift

Order 510.015. RL-8, lines 1076–1116, reaches complete reducibility, symmetric
polynomials, tensor algebra and finite highest-weight theory through the declared
Weyl and semisimple-Lie predecessors. Schur modules, alternation, the tableaux
expansion and sign-reversing LR argument are constructed/proved here. State the polynomial/rational
GL-r convention, determinant twists and fixed-rank row bound. No later
symmetric-group representation pair is required for the character proof.

### borel-weil-and-borel-weil-bott

VERDICT: no-drift

Order 510.017. The actual published supplier
smooth-projective-serre-duality-and-flag-variety-line-bundles (order 510.0161)
now contains flag construction, big cell, minimal-parabolic P1 bundles, line-bundle
degree, relative canonical bundle, Leray, relative P1 shift and Serre duality.
Its inventory resolves RL-9's historical build hold. Read Lurie's complete
three-page argument, especially Theorem 3, Lemma 4 and Theorem 5; the declared
supplier covers those geometry premises. Use L_lambda=G×B C_{−lambda} and
K=L_{−2rho} consistently. No Kostant/Peter–Weyl edge is needed for this route.
Source: [Lurie, complete proof](https://people.math.harvard.edu/~lurie/papers/bwb.pdf).

### primitive-ideals-and-duflo-theorem

VERDICT: no-drift

Order 510.019. RL-10 and the binding AG amendment retain the annihilator,
central-character and associated-variety prefix; Duflo surjectivity/localization
is explicitly held prose, not an item owed in this run. PBW, HC, highest weights
and the classical affine zero-set interface are declared. Before the central
character proposition, include the short Dixmier argument for countable-dimensional
complex algebras; finite-dimensional Schur alone is insufficient. Read Etingof's
full Lemma 7.2 proof, printed p. 38. Its countability, rational-function independence
and algebraic-closure inputs are already in closure, so it can be proved locally
without a new pair. [Etingof, author notes](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf).

### lie-algebra-cohomology-and-kostants-nilradical-theorem

VERDICT: drift-blocked — local Laplacian/Casimir prerequisites at lie-algebra-cohomology-and-kostants-nilradical-theorem (order 510.021)

RL-11 lines 1205–1219 declares CE/Whitehead, HC, BGG, Ext and spectral
sequences. These cover the algebraic proof. The BGG closure already has the
formal-character homomorphism and Verma Euler identity; no Weyl-character edge
is needed merely to name the numerator.

Unresolved mathematics: `lem-kostant-laplacian-is-scalar-on-weight-components`
and the extremal harmonic-space lemma promise a full Laplacian calculation.
Read the thesis's complete §§3.2.5–3.4, printed pp. 71–77: it proves Kostant via
injective dimension shifting, HC central actions and weight inequalities, not a
cochain Laplacian identity. Woit pp. 4–5 outlines possible approaches without
supplying that calculation. I have not verified the complete promised harmonic
identity. Proposed placement, preserving both claims: local Hermitian-cochain
metric, adjoint differential and finite-dimensional Hodge lemmas, followed by the
explicit Casimir/Laplacian identity, before the scalar-on-weight-components row.
Owner must resolve that substantial proof package/source obligation; replacing it
by the algebraic proof alone would leave a promised claim unproved.

Source correction: thesis Lemma 3.4.4, printed p. 74, states equality with
S=Phi-plus; its complete proof ends on p. 75 with S=Phi-plus(w), which is correct
(w=1, S empty already refutes the printed version). Do not propagate that typo.
[Full thesis](https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf),
[Woit's notes](https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf).

### bochner-inversion-and-plancherel-on-lca-groups

VERDICT: drift-blocked — gelfand-theory-and-commutative-c-star-algebras (order 288.081); local LCA convolution/character package at bochner-inversion-and-plancherel-on-lca-groups (order 510.06503)

Added the authorized Gelfand backward edge. FR-16, lines 1054–1066, expressly
requires reuse of `rem-lca-group-algebra-and-character-space-external` and
`ex-gelfand-transform-of-l-one-of-an-lca-group`, absent from the original closure.
The new edge supplies their identities and general Gelfand vocabulary, but the
remark is external with proof not supplied. This is not an internal proof of the
substantial local replacement demanded by the same design.

Owner-held package: L1(G) convolution algebra, translation continuity and
approximate identity; classification of all nonzero multiplicative functionals;
compact-open/Gelfand topology identification; nonunital scalar-unitization handling;
and the positive transform-core sup-norm bound needed for the Bochner extension.
Proposed placement is within this A page, after the Fourier definition and before
the current algebraic identities/Riemann–Lebesgue and measure-uniqueness lemmas.
No new pair or later RG group-algebra edge was added. For general LCA G, give
the sigma-compact support reduction before sigma-finite Fubini applications.

Read Loomis's complete §§34A–C, printed pp. 135–137: the translation-ratio
argument proves the character classification and topology without biduality.
Williams Example 3.10, printed p. 9, states the harder identification without its
proof, and explicitly distinguishes the L1 algebra from a C-star algebra. Those
facts locate the gap; I have not completed the positive-core extension argument.
[Loomis full text](https://people.math.harvard.edu/~shlomo/212a/loomis.pdf),
[Williams author notes](https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf).

### pontryagin-duality-for-locally-compact-abelian-groups

VERDICT: no-drift

Order 510.06505. FR-17, lines 1104–1146, correctly uses earlier inversion and
isometric Plancherel for biduality, then proves full Plancherel. The compact-open,
quotient, Haar and topological-group ingredients are in closure. Read Loomis's
complete §37D biduality argument, printed pp. 151–152, and Körner §§13–14,
pp. 26–29. Körner lists structural lemmas; it does not print their proofs. The
principal structure and character-extension proofs remain local authoring
obligations. The preceding LCA proof-package blocker propagates operationally;
no extra page edge or reordered full-Plancherel premise was added.
[Körner author notes](https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf).

### finite-fourier-analysis-and-the-fast-fourier-transform

VERDICT: no-drift

Order 510.06507. FR-18, lines 1147–1186, gives all finite proof inputs locally:
character orthogonality by geometric sums, finite reindexing, radix-two
factorization and induction. Its LCA interface pages are declared; finite linear
algebra, roots of unity and elementary recurrences are in closure. Arithmetic
complexity is only for positive power-of-two length, with N=1 as base case. The
upstream LCA hold does not create a missing finite FFT prerequisite.

### poisson-summation-sampling-and-lattice-duality

VERDICT: no-drift

Order 510.06509. FR-19, lines 1187–1227, reaches the exact published
Schwartz Poisson theorem and Fourier-series Parseval through its declared
tempered-distribution/Fourier-series predecessors. Lattice change of variables,
periodization, comb products in the smooth core, and the sample-to-Fourier-
coefficient lemma are local. Compact band support gives an L1 transform and a
continuous representative before samples are evaluated. No pointwise L1 Poisson
claim or stronger convergence mode follows without its hypotheses.

### uncertainty-principles-for-fourier-analysis

VERDICT: no-drift

Order 510.06511. FR-20, lines 1228–1271, declares the exact Heisenberg theorem,
DFT, Plancherel and identity/maximum-modulus supplier. The necessary
Phragmén–Lindelöf sector estimate is explicitly a local lemma. Read Sheagren's
complete Theorem 4.11 and Theorem 5.2 proof, pp. 10–12. Correct the sign in
its equation (5.5): undoing the exponential multiplier in (5.4) gives a positive
pi-R-sine quotient in the exponent; its limit is minus pi-R-cos(theta), as the
subsequent sentence requires. The sector growth exponent must be strictly below
pi divided by the sector angle. Higher-dimensional rigidity requires a justified
one-dimensional reduction. No separate Phragmén–Lindelöf pair is needed.
[Sheagren full argument](https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf).

## Validation and owner handoff

Plan validation before edits and after each of the four edits returned exit 1 with
the same single unrelated error: `etale-covers-and-the-etale-fundamental-group`
has an item depending on `decomposition-inertia-and-frobenius` outside its declared
closure. It was not repaired within this assignment. No new validation error was
introduced by the five backward edges.

Final `node tools/drift-review-check.mjs --run frontier-39-analysis-30
--before-apply` returned exit 1 with exactly the four `drift-check-blocked`
decisions above; it reported no missing section, malformed verdict or unapplied
`drift-applied` edge. Final `node tools/validate-plan.mjs
research/plan-spec.json` returned exit 1 with the same single unrelated
undeclared-prerequisite error. The report covers all 30 A pages, with exactly one
verdict per section: 24 no-drift, two drift-applied, four drift-blocked.

Owner decisions are the Fredholm smooth-eigenfunction placement, HJ's missing
biconjugacy supplier instruction, the retained Kostant harmonic proof package, and
the LCA internal replacement package. Proposed placements above preserve all
promised claims. No scope amendment or ordering correction is represented as
authorized or applied. The engine owns materialization after owner resolution;
there is no automatic re-review of these decisions.
