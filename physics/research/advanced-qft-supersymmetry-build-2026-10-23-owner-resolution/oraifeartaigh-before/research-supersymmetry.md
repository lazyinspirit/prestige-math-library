# Supersymmetry and advanced QFT research scaffold

Research date: 2026-10-23. This note designs the supersymmetry branch of the
draft physics category **Advanced QFT and supersymmetry**. It is a research
scaffold, not production content, proof acceptance, an experiment item, or a
workflow transition. No observation has established supersymmetry in nature.
Every proposed carrier remains a draft until its definitions, conditional
arguments, source review, physical scope, and ordinary independent review are
completed.

The planned treatment is four-dimensional rigid supersymmetry over Minkowski
space, with supergravity treated as a separate extension. It covers the
super-Poincare algebra and unitary representations; Clifford and Weyl spinors;
superspace and component multiplets; representative \(\mathcal N=1,2,4\)
actions; qualified perturbative nonrenormalization; vacuum moduli; BPS bounds;
Seiberg and Seiberg–Witten duality; superconformal theories; global and
spontaneous breaking; phenomenology; and dated research questions. It does not
claim a rigorous construction of a nontrivial interacting four-dimensional
continuum theory, a universal localization formula, or a general physical
state-counting dictionary.

## Proposed dependency order

The following page IDs are planning candidates, not page carriers. The builder
may adjust pair IDs while preserving the supplier order and exact interfaces.
Pure mathematics helper pairs belong under the existing
`quantum-field-theory-mathematics` category; the physical A pages belong under
`advanced-qft-and-supersymmetry`. B pages are worked examples and do not supply
other pages.

| Order | Candidate A/B pair | Scope and earlier suppliers |
|---|---|---|
| 1 | `qftx-susy-math-foundations` | Real and complex graded algebras; two-component spinor conventions; Hilbert *-representations. Reuse the root math Lie-superalgebra interfaces and the existing QFT Lorentz/spinor definitions, then add the real form, *-structure, and operator-domain hypotheses that those interfaces do not provide. |
| 2 | `qftx-susy-algebra-and-multiplets` | Four-dimensional \(\mathcal N\)-extended super-Poincare algebra, unitary representations, massive/massless multiplets, central charges, and the BPS mass bound. Depends on pair 1. |
| 3 | `qftx-susy-n1-superspace-and-actions` | Grassmann coordinates, chiral and vector superfields, auxiliary fields, the Wess–Zumino and gauge-matter actions, and their transformations. Depends on pairs 1–2 and the exact non-Abelian gauge supplier. |
| 4 | `qftx-susy-extended-actions` | \(\mathcal N=2\) vector/hypermultiplets, prepotential action, and the \(\mathcal N=4\) Yang–Mills action. Uses the N=1 decomposition and the gauge interfaces. |
| 5 | `qftx-susy-ward-and-nonrenormalization` | Supersymmetry Ward identities; Wilsonian perturbative superpotential nonrenormalization; wave-function, Kähler, gauge-kinetic, anomaly, instanton, and 1PI qualifications. Depends on pairs 3–4 and the anomaly/gauge branches. |
| 6 | `qftx-susy-moduli-and-dualities` | \(F\)- and \(D\)-flat moduli, N=2 Coulomb branch and Seiberg–Witten solution, N=1 SQCD duality, conformal windows, and explicit `open-problem` records. Depends on pairs 2–5 and the gauge/localization suppliers. |
| 7 | `qftx-susy-breaking-and-phenomenology` | Explicit soft breaking, spontaneous \(F\)- and \(D\)-breaking, goldstino/gravitino boundary, collider search records, and model-specific statistical limits. Depends on pairs 3–6 and the EFT experiment interfaces. |
| 8 | `qftx-susy-scft-and-frontier` | Four-dimensional SCFT data, protected observables and exact duality proposals, with dated conjecture/status records. Depends on the earlier physical pages and the localization/BPS branch. |

Candidate stable item IDs appear below. Their prefixes encode item kind; the
names do not imply that the results have already been authored or accepted.

## Exact existing interfaces and their limits

The main existing physical QFT category and its source-first research index
are [the QFT category](../../library/quantum-field-theory/_category.md),
[the published free-Dirac A page](../../library/quantum-field-theory/qft-f03.md),
and [the 31-pair QFT pathway and inventory](../extended-frameworks-2026-10-03/quantum-field-theory/inventory-and-pathway.md).
That inventory lists exact physics and mathematical A/B page paths. The QFT
work supplies an adopted free scalar/Dirac/photon framework, finite-regulator
and formal QED branches, and local Fock/field-domain arguments. It explicitly
does not already define supersymmetry, a supermultiplet, or a supersymmetric
action. Its unproved continuum limits and source boundaries remain unchanged.

| Exact current file | Status and reusable content | Boundary that must travel to consumers |
|---|---|---|
| `items/def-lie-superalgebra-over-complex-numbers.md` | Root mathematics, `definition`, `status: published`; defines a complex \(\mathbb Z_2\)-graded vector space, parity, graded-skew bracket, signed Jacobi identity, and the odd self-Jacobi convention. Its references are Barbier §§2.1–2.2 and Caston–Fioresi §§1.1–1.2. | It is complex-linear. It supplies neither a real form with Hermitian conjugation nor positivity/unitarity, a spacetime representation, a central-charge interpretation, or a SUSY model. Its current `math-imports.json` snapshot is absent; the physics import snapshot must be added before production use. |
| `items/def-associative-superalgebra-over-complex-numbers.md`; `items/def-lie-supermodule.md`; `items/def-universal-enveloping-superalgebra.md` | Root mathematics definitions currently marked published. They define graded associative algebras, parity-preserving supermodule actions, and the tensor-quotient enveloping superalgebra. | The supermodule definition expressly includes no finite-dimensionality, topology, or unitarity. Do not use it alone as a physical Hilbert-space representation. These root items are not currently pinned in the physics import manifest. |
| `items/thm-universal-property-of-the-enveloping-superalgebra.md`; `items/thm-supermodules-equivalent-to-graded-u-modules.md` | Root mathematical theorem files marked published, with local proofs. The current carriers show `verification.judge` dated 2026-10-18; this note has not independently certified or re-audited those proofs. Under the root schema, a judge stamp alone is not the audit/verified evidence required for proof acceptance. | The equivalence is algebraic and parity-preserving. It does not establish a unitary representation, operator domains, a spectrum, a particle multiplet, or a physical theorem. Import and inspect the exact theorem before use. |
| `physics/items/def-qft-poincare-test-action.md` | Published mathematical item defining \(SO^+(1,3)\ltimes\mathbb R^4\), its affine action and Schwartz-test pullback. | Its displayed metric is \(\operatorname{diag}(1,-1,-1,-1)\). The physics QFT convention in `def-qft-free-dirac-model.md` is \((-+++\)); any reuse must state the sign map rather than silently identify the two pairings. |
| `physics/items/def-qftx-spinor-helicity.md`; `physics/items/lem-qftx-spinor-factorization.md`; page `physics/library/quantum-field-theory-mathematics/qftx-on-shell-amplitudes.md` | Published, verified 2026-10-22, mathematical definitions and proof for the Pauli-matrix map \(\mathbb C^4\to M_2(\mathbb C)\), nonzero complex null momentum factorization, and its \(\mathbb C^\times\) rescaling class. | This is a massless on-shell momentum factorization, not a definition of a Weyl spinor field, a spinor bundle, a Grassmann field, or the super-Poincare algebra. Its convention is \(h=-\eta\) for the existing \((-+++)\) QFT convention. |
| `physics/items/def-gr-fx-lorentz-spin-lift.md` | Published mathematical Lorentzian interface, verified 2026-10-22: an \(SL(2,\mathbb C)\) spin structure, associated rank-two spinor bundle, and connection lift are defined from supplied frame-bundle data. | It assumes \(\mathrm{AC}_\omega\), treats a general Lorentzian manifold, and explicitly asserts neither existence nor uniqueness of a spin lift. Flat Minkowski spacetime admits the simple trivial-spin-bundle model, but the local construction and convention bridge still need to be stated. |
| `physics/items/def-qft-free-dirac-model.md`; page `physics/library/quantum-field-theory/qft-f03.md` | Published physical definition under \((-+++), x^0=ct\), with a selected free Dirac CAR representation and smeared-field model. The page says the statistics/species choice is adopted and is not a general spin-statistics theorem. | It supplies a free Dirac model only. It does not assert a supersymmetric partner or relation between the Dirac species and another field. |
| `physics/items/def-qft-qed-finite-grassmann-algebra.md`; `physics/items/def-qftx-abelian-local-brst.md`; page `physics/library/quantum-field-theory-mathematics/qftx-bv-brst.md` | The first is a finite Grassmann algebra for formal QED; the page defines an Abelian local BRST/BV interface. | Neither is the infinite-dimensional superspace of a SUSY field theory. The BRST construction is Abelian and cannot supply non-Abelian SUSY gauge transformations. |
| `physics/items/def-qftx-cy3-bps-integration-contract.md`; `physics/items/def-qftx-hall-spectrum-generator.md`; `physics/items/prop-qftx-hall-spectrum-invariance.md`; page `physics/library/quantum-field-theory-mathematics/qftx-hall-bps-wall-crossing.md` | Published mathematics for finite-field Hall integration on a finite acyclic quiver and its Harder–Narasimhan wall-crossing product. The CY3/CoHA item is a contract requiring specified CY3 or quiver-with-potential, stability/support, orientation, a completed integration theorem, and (for physical interpretation) a proved protected-index dictionary. | This is not a four-dimensional supersymmetry algebra, BPS particle spectrum, path-integral localization theorem, or physical state-counting identity. Its own definition explicitly denies those identifications without additional data and proof. |
| `physics/items/def-qftx-chiral-anomaly-interface.md`; page `physics/library/quantum-field-theory-mathematics/qftx-anomaly-cocycles.md` | A published, narrow chiral-anomaly interface and mathematical cocycle work. | The new symmetries/anomalies researcher owns anomaly descent and related extensions. This SUSY note consumes only an exact reviewed interface and will not treat an anomaly cancellation label as a proof. |
| Gauge research supplier map in `physics/research/advanced-qft-supersymmetry-2026-10-23/research-gauge.md` (planned sibling interface) | The sibling gauge note proposes `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`, `def-qftx-yang-mills-action`, `thm-qftx-yang-mills-gauge-invariance-euler-lagrange`, `def-qftx-local-brst-cohomology`, `def-qftx-bv-antibracket-master-action`, `lem-qftx-bv-master-equation-brst-nilpotence`, `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, and `ex-qftx-su2-bpst-one-instanton`. Root math page `library/lie-theory/gauge-groups-and-representation-theory-interfaces.md` and its exact `def-smooth-principal-g-bundle`, `def-principal-connection-and-vertical-curvature`, `def-gauge-group-of-a-smooth-principal-bundle`, gauge-action propositions, and associated-bundle items are existing mathematical interfaces. | The sibling notes own the missing Lie-algebra-valued connection form, Cartan curvature/Bianchi, non-Abelian BRST/BV, and physical gauge premises. Existing Abelian BRST is not a substitute. These sibling IDs are proposed suppliers, not current imported items; their proof and hypothesis scope is in `research-gauge.md`. |
| `physics/research/advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md` (planned sibling interface) | The localization/BPS researcher owns equivariant localization, physical instanton/monopole sectors, and any physical BPS index. | Consume only exact supplier IDs and hypotheses confirmed by that note. A finite-quiver identity is never a replacement for the physical dictionary. |

The root mathematical definitions of complex superalgebras/modules are useful
inputs, but this file also checked `physics/research/math-imports.json`: the
superalgebra IDs above are not currently pinned there. The production author
must request exact read-only snapshots and recheck their current bytes/status;
this research note does not claim imported-pin availability. The existing
published math status of the root theorem files is reported as metadata, not as
a fresh proof audit by this research agent.

## Definitions and conventions required before authoring

### Spacetime, units, spinors, and parity

Use the QFT workspace's four-dimensional affine Minkowski model, with
coordinates \(x=(x^0,\mathbf x)\), \(x^0=ct\), and
\(\eta=\operatorname{diag}(-1,1,1,1)\). State when \(\hbar=c=1\), restore
dimensions in phenomenology, and declare every gauge coupling, mass, auxiliary
field, and cutoff's units. This convention is the `def-qft-free-dirac-model`
convention. If the algebra is displayed in the mostly-minus source convention,
state \(\eta_{\rm src}=-\eta_{\rm QFT}\), the corresponding lowered momentum
map, and the changed sign in the \(\sigma^\mu P_\mu\) relation.

A left Weyl spinor is a vector in a copy of \(\mathbb C^2\) transforming by the
fundamental representation of \(SL(2,\mathbb C)\), the double cover of
\(SO^+(1,3)\); a right Weyl spinor transforms in the conjugate-dual dotted
representation. Fix \(\epsilon_{12}=1\), state how spinor indices are raised,
and define \(\sigma^\mu=(I,\vec\sigma)\),
\(\bar\sigma^\mu=(I,-\vec\sigma)\) with
\(\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I\).
This converts four-vectors to bispinors and fixes all sign-sensitive
anticommutators. The Pauli/bispinor map of
`def-qftx-spinor-helicity.md` supplies a related complex-null convention, not
the whole spinor-field definition.

A complex super-vector space is a direct sum \(V=V_{\bar0}\oplus V_{\bar1}\);
homogeneous vectors have parity \(|v|\in\{0,1\}\). Products and brackets
acquire the Koszul sign \((-1)^{|x||y|}\). In a classical field model,
component fermions and the odd coordinates \(\theta,\bar\theta\) are
Grassmann-odd symbols in a specified supercommutative algebra; quantum
fermions are operator-valued distributions on a specified common invariant
dense domain satisfying CAR. Do not identify classical Grassmann coordinates
with the quantum Hilbert-space operators. Define Berezin integration by its
coefficient-extraction rule before any \(d^2\theta\) or \(d^4\theta\)
integral is used.

### Real four-dimensional super-Poincare algebra

Use the complex Lie-superalgebra definition as a sign supplier only. The
physical algebra needs a locally defined real form, conjugate-linear *-operation,
unitary Hilbert-space representation, common invariant domain for unbounded
charges, and positive translation generator. A suitable candidate definition is
`def-qftx-super-poincare-algebra-4d` (mathematics domain) plus a separate
`def-qftx-unitary-super-poincare-representation` (mathematics domain). Write the
ordinary Poincare brackets explicitly. With the \((-+++)\) convention and
\(P^0=H\), one consistent two-component convention is
\[
\{Q^I_\alpha,\bar Q_{\dot\beta J}\}
 =-2\sigma^\mu_{\alpha\dot\beta}P_\mu\,\delta^I{}_J,
\qquad
\{Q^I_\alpha,Q^J_\beta\}
 =2\epsilon_{\alpha\beta}Z^{IJ},
\qquad Z^{IJ}=-Z^{JI},
\]
with \([Q,P_\mu]=0\), the Lorentz-spinor transformation law for \(Q\),
and \(Z^{IJ}\) commuting with the super-Poincare generators. State the
normalization of \(Z\) and its adjoint. For \(\mathcal N=1\), the scalar
central-charge matrix is necessarily zero; for \(\mathcal N\ge2\), it may
contain central charges. Extended theories can also admit tensorial/topological
charges; each requires its own Lorentz type, surface-integral definition, and
boundary conditions. The \(\mathcal N\)-extended Poincare algebra is a physical
symmetry assumption of a selected model, not a consequence of the Lie
superalgebra axioms.

Here \(\mathcal N\) counts independent left-Weyl supercharges \(Q^I_\alpha\).
Thus four-dimensional \(\mathcal N=1,2,4\) have respectively 4, 8, and 16
real supercharge components. “Rigid” or “global” means the parameter
\(\epsilon^I_\alpha\) is constant on Minkowski spacetime. “Local
supersymmetry” makes this parameter spacetime-dependent and requires the
gravitational multiplet; it is supergravity and is not covered by the rigid
actions below.

A **unitary super-Poincare representation** must specify a Hilbert space, a
strongly continuous representation of the even spacetime symmetry, self-adjoint
translation generators, densely defined supercharges with adjoints on a common
invariant domain, and the anticommutation relations on that domain. The purely
algebraic `def-lie-supermodule.md` omits these conditions. A **particle
supermultiplet** is an irreducible positive-energy representation with fixed
Poincare mass/spin labels; a **field multiplet** is a representation on fields,
which may close only modulo equations of motion unless auxiliary fields are
included. These two notions must not be conflated.

### Superspace and actions

Four-dimensional \(\mathcal N=1\) superspace is \(\mathbb R^{1,3}\) with four
odd coordinates \(\theta^\alpha,\bar\theta^{\dot\alpha}\), modulo the explicitly
defined Grassmann relations. The covariant derivatives \(D_\alpha,\bar D_{\dot
\alpha}\) are odd differential operators satisfying
\(\{D_\alpha,\bar D_{\dot\beta}\}=2i\sigma^\mu_{\alpha\dot\beta}\partial_\mu\)
in the chosen convention. A chiral superfield obeys
\(\bar D_{\dot\alpha}\Phi=0\); its component expansion is a complex scalar
\((A,F)\) and a Weyl fermion \(\psi_\alpha\), where \(F\) is an auxiliary
field with no kinetic term. A real vector superfield contains a gauge field,
gaugino and auxiliary \(D^a\), after fixing the gauge used for components.
The A/B item must define component dimensions, gauge transformation law,
Berezin measures, and boundary conditions for integrations by parts.

With \(K=\bar\Phi_i\Phi^i\) and a holomorphic superpotential \(W(\Phi)\),
the free/interaction part of a canonical N=1 action is
\[
\mathcal L=\int d^4\theta\,\bar\Phi_i\Phi^i
 +\left(\int d^2\theta\,W(\Phi)+\mathrm{h.c.}\right).
\]
Its component auxiliary terms are \(\bar F_iF^i+F^iW_i+
\bar F_i\overline{W_i}\) and the Yukawa term is
\(-\tfrac12W_{ij}\psi^i\psi^j+\mathrm{h.c.}\), in the Martin convention.
The N=1 gauge-matter extension replaces ordinary derivatives by the covariant
derivatives of the selected gauge group and adds the \(W^\alpha W_\alpha\),
gaugino, \(D^a\), and gauge-Yukawa terms. Those changes depend on the exact
gauge supplier and cannot be summarized as a universal “minimal coupling”
without writing the representation, generators, trace normalization, and
coupling units.

An N=2 vector multiplet in four dimensions consists on shell of
\((A_\mu,\phi,\lambda^1,\lambda^2)\) in the adjoint; a hypermultiplet has two
complex scalars and a Dirac fermion in a representation \(R\) paired with its
complex conjugate. In N=1 language the vector multiplet is one vector and one
adjoint chiral multiplet; a hypermultiplet is two N=1 chiral multiplets in
\(R\) and \(\bar R\). A renormalizable N=2 gauge theory fixes the N=1
superpotential coupling to \(\sqrt2\,\widetilde Q\Phi Q\), with a mass term
\(m\widetilde Q Q\) when allowed, and fixes the vector/hyper couplings by the
second supersymmetry. The pure N=2 two-derivative vector action is specified
by a holomorphic prepotential \(\mathcal F(\Phi)\); the UV renormalizable
case has quadratic \(\mathcal F\), while the exact low-energy prepotential may
be non-polynomial and patch between electric/magnetic descriptions.

The four-dimensional N=4 Yang–Mills vector multiplet has a gauge connection,
six real adjoint scalars, and four adjoint Weyl fermions. In N=1 language it is
one vector plus three adjoint chirals \(\Phi_i\), with equal gauge/Yukawa
couplings and cubic superpotential proportional to
\(\operatorname{Tr}\Phi_1[\Phi_2,\Phi_3]\). Fix
\(\operatorname{Tr}(T^aT^b)\), Hermitian/anti-Hermitian generator and
\(D_\mu\) conventions in the carrier; normalizations differ across sources.
The equivalent N=2 decomposition is an N=2 vector plus an adjoint
hypermultiplet. The local theorem that the component action realizes all 16
charges must either prove the variation and on-shell closure from the stated
transformations or explicitly treat the supersymmetric action as an adopted
model premise. Do not infer a rigorous continuum quantum theory from its
classical Lagrangian.

## Conditional arguments to author locally

The following are the core arguments and their limits. They are complete as
mathematical/conditional derivations from the displayed premises; the named
candidate items still need authored, independently reviewed carriers.

### Super-Poincare consistency, mass degeneracy, and the BPS bound

1. `lem-qftx-super-poincare-graded-jacobi` must check the super-Jacobi identities
   for the explicitly presented brackets. The even-even-even and even-even-odd
   cases reduce to the ordinary Poincare representation on Lorentz spinors; the
   even-odd-odd case says the invariant tensor \(\sigma^\mu_{\alpha\dot\beta}\)
   intertwines the Lorentz vector representation; the odd-odd-odd case is zero
   because all odd-odd brackets are translations or central and translations
   commute with odd generators. For the central extension, the Lorentz scalar
   \(Z^{IJ}\) is antisymmetric in flavour labels and symmetric in spinor
   indices only through \(\epsilon_{\alpha\beta}\), as required by graded
   symmetry. Check every coefficient/sign against the chosen metric and *-map;
   the complex superalgebra definition alone does not fix this real form.

2. `thm-qftx-supermultiplet-mass-degeneracy` is conditional on a unitary
   representation with invariant domain. From \([P_\mu,Q^I_\alpha]=0\), the
   graded Jacobi identity gives \([P^2,Q^I_\alpha]=0\). Thus each charge
   maps a joint translation-mass eigenspace into itself. If it maps a state
   nontrivially, that state and its superpartner have the same eigenvalue of
   \(M^2=-\eta^{\mu\nu}P_\mu P_\nu\). Gauge representation equality follows
   only after separately assuming that the supercharges commute with the
   chosen gauge action. This theorem does not say the observed particles have
   degenerate partners; explicit or spontaneous breaking invalidates its
   unbroken-vacuum application.

3. `thm-qftx-n-extended-central-charge-bounds` specializes to a massive
   one-particle representation fiber with fixed central charge, mass
   \(M>0\), and rest momentum \(P^\mu=(M,0,0,0)\), so the chosen
   \((-+++)\) metric gives \(P_\mu=(-M,0,0,0)\). A sharp momentum
   eigenvector is generally not normalizable in the full one-particle Hilbert
   space: first obtain the finite-dimensional supercharge matrix inequality on
   the induced-representation fiber, then integrate it against wave packets
   (or use the joint spectral decomposition). No rest-frame step is asserted
   for massless representations. For N=2, rotate the antisymmetric
   central-charge matrix to \(Z^{12}=Z\). For each phase \(\varphi\), form
   the linear combination
   \(A=Q^1_1-e^{i\varphi}(Q^2_2)^\dagger\), with the phase chosen so
   \(e^{-i\varphi}Z=|Z|\). The algebra gives
   \(\{A,A^\dagger\}=4(M-|Z|)I\) in the displayed normalization.
   For every vector \(\Psi\) in the common domain,
   \(\langle\Psi|\{A,A^\dagger\}|\Psi\rangle
     =\|A\Psi\|^2+\|A^\dagger\Psi\|^2\ge0\), hence
   \(M\ge|Z|\). Equality forces the corresponding supercharges to annihilate
   the state and yields a shortened representation. For N extended, skew
   diagonalization of \(Z^{IJ}\) gives one inequality per singular value.
   Seiberg–Witten use \(M\ge\sqrt2|Z_{\rm SW}|\); record the normalization
   map \(Z=\sqrt2 Z_{\rm SW}\) when comparing their charge formula. The bound
   does not establish that a state with a given charge exists or is stable.

This local positivity proof reuses the definition of the complex
Lie-superalgebra bracket, but it additionally requires the real *-representation,
positive inner product, self-adjoint energy, and common domain. The classic
Witten–Olive result is the physical origin of soliton surface central charges;
its accessed publisher record was abstract/metadata only, so no part of its
proof is imported. The N=2 superalgebra positivity calculation is instead
written above as a local derivation. Stable-spectrum/wall-crossing claims
remain assigned to the localization/BPS supplier and to their stated model.

### N=1 Wess–Zumino action: explicit local invariance argument

Use one chiral multiplet \((\phi,\psi_\alpha,F)\), with \(\phi\) complex,
\(\psi\) Grassmann-odd, \(F\) complex and auxiliary. Let \(\epsilon_\alpha\)
be a constant odd Weyl parameter and use the two-component identities in the
source convention. Adopt
\[
\begin{aligned}
\delta\phi&=\epsilon\psi,&
\delta\phi^*&=\epsilon^\dagger\psi^\dagger,\\
\delta\psi_\alpha&=-i(\sigma^\mu\epsilon^\dagger)_\alpha\partial_\mu\phi
                     +\epsilon_\alpha F,&
\delta\psi^\dagger_{\dot\alpha}&=i(\epsilon\sigma^\mu)_{\dot\alpha}
                    \partial_\mu\phi^*+\epsilon^\dagger_{\dot\alpha}F^*,\\
\delta F&=-i\epsilon^\dagger\bar\sigma^\mu\partial_\mu\psi,&
\delta F^*&=i\partial_\mu\psi^\dagger\bar\sigma^\mu\epsilon.
\end{aligned}
\]
For \(W(\phi)=\frac12m\phi^2+\frac16y\phi^3\), use
\[
\begin{aligned}
\mathcal L={}&-\partial_\mu\phi^*\partial^\mu\phi
 +i\psi^\dagger\bar\sigma^\mu\partial_\mu\psi+F^*F\\
&+FW'(\phi)-\tfrac12W''(\phi)\psi\psi+\mathrm{h.c.}
\end{aligned}
\]

For the free massless part, the scalar variation is
\(\delta\mathcal L_s=-\epsilon\partial_\mu\psi\,\partial^\mu\phi^*
-\epsilon^\dagger\partial_\mu\psi^\dagger\,\partial^\mu\phi\).
Substitute \(\delta\psi=-i\sigma^\nu\epsilon^*\partial_\nu\phi+\epsilon F\)
and its conjugate into the fermion kinetic variation. The sigma identity
\(\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I\)
and commuting spacetime derivatives split that variation into
\(-\delta\mathcal L_s+\partial_\mu K^\mu_0\). The auxiliary term's variation
from \(F^*F\) cancels the \(F\)-dependent contribution from the fermion term;
the remaining terms are \(\partial_\mu K^\mu_F\). For the interaction, the
terms cubic in fermions vanish by the two-component Fierz identity
\((\epsilon\psi_i)(\psi_j\psi_k)+(\epsilon\psi_j)(\psi_k\psi_i)
+(\epsilon\psi_k)(\psi_i\psi_j)=0\), since \(W_{ijk}\) is symmetric.
The terms with spacetime derivatives combine using
\(W_{ij}\partial_\mu\phi^j=\partial_\mu W_i\) into a total derivative;
the terms linear in \(F_i,F_i^*\) cancel by the displayed transformations.
Thus \(\delta\mathcal L=\partial_\mu K^\mu\) and
\(\delta S=0\) for compactly supported variations or boundary conditions
that make the surface integral vanish.

The closure check is separate: applying two transformations to each of
\(\phi,\psi,F\) gives
\([\delta_{\epsilon_2},\delta_{\epsilon_1}]X
=i(-\epsilon_1\sigma^\mu\epsilon_2^\dagger
+\epsilon_2\sigma^\mu\epsilon_1^\dagger)\partial_\mu X\)
for every component, with no use of equations of motion because \(F\) is
included. Eliminating \(F\) through its algebraic field equation
\(F^*=-W'(\phi)\) gives
\(V(\phi,\phi^*)=|W'(\phi)|^2\) and the equivalent on-shell action.
For many chiral fields, symmetry of \(W_{ij}\) and holomorphicity of \(W\)
are required. A cited transformation table alone is not a substitute for these
variations.

### Classical vacuum moduli and breaking

For the canonical N=1 action with chiral fields \(\phi^i\), gauge generators
\(T^a\), and no FI term, define
\(F_i=-\overline{\partial W/\partial\phi^i}\) and
\(D^a=-g\,\bar\phi_i(T^a)^i{}_j\phi^j\), using Hermitian generators and
the stated gauge convention. Then
\(V=\sum_i|F_i|^2+\tfrac12\sum_a(D^a)^2\ge0\). The classical supersymmetric
vacuum locus is the zero set \(F_i=D^a=0\) modulo the gauge group, subject
to the boundary and regularity assumptions on the fields. The proof is direct:
the auxiliary equations are algebraic; substituting them into the action gives
the displayed sum of nonnegative terms; its zero set is exactly the simultaneous
zero locus; gauge-equivalent field configurations define the same physical
configuration. This is a classical moduli construction, not an exact quantum
vacuum-space theorem. Quantum corrections can deform or lift it.

For spontaneous global SUSY breaking in a unitary Poincare-invariant vacuum,
\(Q^I_\alpha|0\rangle\ne0\) for at least one supercharge. With vanishing
central charge in the vacuum, the algebra writes
\(\langle0|H|0\rangle\) as a positive multiple of the sum of squared norms
\(\|Q|0\rangle\|^2+\|Q^\dagger|0\rangle\|^2\), so the vacuum energy is
positive. In a canonical renormalizable model with translation-invariant
vacuum, this equals \(\langle V\rangle\); a nonzero F or D order parameter
then signals breaking. The goldstino result additionally needs the supercurrent
Ward identity and a well-defined conserved current. For local SUSY, gravity
gauges the symmetry and the goldstino/gravitino argument changes through the
super-Higgs mechanism; it is outside the rigid proof.

An exact local example is the tree-level O'Raifeartaigh choice
\(W=-k\Phi_1+m\Phi_2\Phi_3+\tfrac12y\Phi_1\Phi_3^2\), with \(k\ne0\),
\(m\ne0\), canonical Kähler term, and all fields gauge singlets. The auxiliary
equations give
\(F_1=\bar k-\tfrac12\bar y\bar\phi_3^2\),
\(F_2=-\bar m\bar\phi_3\),
\(F_3=-\bar m\bar\phi_2-\bar y\bar\phi_1\bar\phi_3\).
If \(F_2=0\), then \(\phi_3=0\), whence \(F_1=\bar k\ne0\). Therefore all F's
cannot vanish simultaneously and \(V\ge |k|^2>0\) at every field value. The
existence, location, stability, and quantum correction of a global or
metastable minimum require additional analysis; the nonzero-F argument alone
does not prove which vacuum the Universe occupies.

### Perturbative nonrenormalization and its qualifications

Candidate theorem `pthm-qftx-n1-wilsonian-f-term-nonrenormalization` should use
the precise Wilsonian statement of Weinberg (1998), not the loose slogan
“supersymmetry prevents renormalization.” Fix a rigid 4D N=1 gauge theory with
chiral fields \(\Phi\), field-strength superfield \(W_\alpha\), a finite Wilson
cutoff \(\lambda\), and a regulator/counterterm prescription preserving both
gauge invariance and supersymmetry. Write
\[
\mathcal L_\lambda=
\int d^4\theta\,G_\lambda(\Phi,\Phi^\dagger,V,D,\ldots)
+2\operatorname{Re}\int d^2\theta\,
\left[\frac{\tau_\lambda}{8\pi i}\operatorname{Tr}W^\alpha W_\alpha
+F(\Phi,W)\right].
\]
The local perturbative conclusion is that the holomorphic Wilsonian F-term
integrand \(F(\Phi,W)\) is unrenormalized, while the holomorphic gauge
coupling can receive the stated one-loop renormalization; the D-term function
\(G_\lambda\) can and generally does change. A local proof should explicitly
promote holomorphic couplings to nondynamical chiral spurions, use R and
shift/selection symmetries, analyticity in those spurions, and the graph-counting
argument that bounds the \(\tau\)-independent F-term contributions. The
Fayet–Iliopoulos term has its separate one-loop charge-sum caveat.

This theorem does not say that physical Yukawa couplings do not run: wave-function
renormalization produces anomalous dimensions and the corresponding beta
functions. It is a Wilsonian statement with an IR cutoff, not a universal
claim about the 1PI action; massless 1PI kernels can contain infrared
nonlocal/holomorphic-anomaly terms. It is perturbative: instantons and other
nonperturbative dynamics can generate superpotentials, as Seiberg's SQCD
examples demonstrate. It does not protect the Kähler potential, arbitrary
non-holomorphic D-terms, or all gauge-kinetic and anomaly data. If the regulator
breaks SUSY or gauge invariance, the theorem's hypotheses fail until the
required counterterms/identities are established. Every consumer must retain
this scope.

## Moduli, dualities, and superconformal theories

### N=2 Coulomb branch and Seiberg–Witten theory

For pure N=2 \(SU(2)\) SYM, the classical scalar \(\phi\) is adjoint-valued.
At a generic commuting vacuum its gauge-invariant coordinate
\(u=\langle\operatorname{Tr}\phi^2\rangle\) parametrizes the Coulomb branch,
where the non-Abelian gauge group is broken to a U(1) subgroup. The low-energy
two-derivative action is encoded by a holomorphic prepotential
\(\mathcal F(a)\); its derivatives define the dual period
\(a_D=\partial\mathcal F/\partial a\) and effective coupling
\(\tau=\partial^2\mathcal F/\partial a^2\). A state of electric/magnetic
charges \((n_e,n_m)\) has central charge proportional to
\(Z_{\rm SW}=n_ea+n_ma_D\), with normalization fixed by the chosen
supercharge convention. The Seiberg–Witten curve and differential encode
monodromies/periods; the exact low-energy solution uses N=2 holomorphy,
semiclassical asymptotics, monodromies, and assumed singularities at which
monopoles/dyons become massless. The original paper explicitly presents this
singularity input as a proposal and tests it by the resulting monodromy and
monopole-condensation picture. This is exact within that physical solution
framework, not a local derivation of the continuum path integral from axioms.

Candidate physical items:

| Candidate ID | Kind/domain | Statement and local duty |
|---|---|---|
| `def-qftx-n2-coulomb-branch-data` | `definition` / physics | Define the selected N=2 model, gauge group, scalar invariant, vacuum quotient, low-energy abelian fields and prepotential, including what “exact” means. |
| `pthm-qftx-n2-bps-central-charge-mass` | `physics-theorem` / physics | Derive the BPS mass inequality from the local positive representation theorem plus the model's electric/magnetic charge map. State when the result is saturated, and do not assume all candidate BPS charges are represented by stable particles. |
| `post-qftx-n2-seiberg-witten-effective-solution` | `postulate` / physics | Adopt the SW curve/prepotential and source-backed singularity ansatz as the chosen low-energy solution framework; give gauge group, rank, matter content, UV coupling, charge lattice and regime. It is not a theorem of rigorous QFT construction. |
| `pthm-qftx-n2-monopole-condensation-after-n1-perturbation` | `physics-theorem` / physics | Conditional on the sourced low-energy action, light-monopole hypermultiplet and a small specified N=1 perturbation, solve the F/D equations and show the monopole condensate/Higgsing; prove electric-flux confinement only in the stated effective model. |

The original SU(2) pure-gauge result must not be extrapolated automatically to
all groups, matter representations, singularities, or arbitrary N=2 SCFTs.
Massless monopoles/dyons at mutually nonlocal singularities require distinct
dual patches; one local electric Lagrangian cannot contain every mutually
nonlocal light state at once.

### N=1 Seiberg duality and the conformal window

For \(\mathcal N=1\) SQCD, define the electric model as an SU(\(N_c\)) gauge
theory with \(N_f\) pairs \((Q_i,\widetilde Q^i)\) and the chosen tree
superpotential. In the proposed conformal window
\(\tfrac32N_c<N_f<3N_c\), the magnetic description has gauge group
SU(\(N_f-N_c\)), \(N_f\) magnetic quark pairs, a gauge-singlet meson \(M\),
and \(W_{\rm mag}=M q\widetilde q/\mu\) in the source normalization. State
the operator map, global symmetries, anomaly matching, scale relation, mass
deformations, and the infrared limit.

The original Seiberg paper does not prove this equivalence: it explicitly
states that the proposed fixed point cannot be proved by its argument, then
introduces the magnetic variables as a suggested dual and checks anomaly
matching, dimensions, and deformations. Those checks are conditional
consistency tests and are not a complete construction/equivalence proof.
This is a **nonlogical status-review lead**, not an adopted `open-problem`
item. A possible precise question for a later review is whether both specified
nontrivial four-dimensional continuum theories can be constructed and their
infrared local-operator, vacuum, correlation, and line-operator data proved
equivalent under an explicit dictionary. The 1994 primary proposal and 1995
review are not a current source/status survey for that formulation. Until
current primary sources, exact definitions of both theories, and the scope of
the equivalence are reviewed, do not label it a current open problem or use it
as a logical premise. Physical literature continues to use “Seiberg duality”
as a strongly supported infrared-equivalence conjecture; that usage is
distinct from a local proof of continuum existence/equivalence.

### SCFT and N=4 duality frontier

A four-dimensional SCFT is a QFT whose symmetry includes the conformal group
\(SO(4,2)\); a superconformal theory also has special supercharges and an
R-symmetry completing a specified superconformal algebra. Define an operator
as primary/descendant by its transformation under that algebra, state the
unitarity bounds and the radial-quantization Hilbert-space interpretation, and
specify whether the assertion concerns a formal Lagrangian, a perturbative fixed
point, an index, a bootstrap bound, or a constructed continuum theory. Do not
call a zero of a perturbative beta function a rigorous SCFT construction.

The N=4 \(SL(2,\mathbb Z)\) S-duality action on
\(\tau=\theta/(2\pi)+4\pi i/g^2\) is a central conjectural structure.
For a precise problem, fix the global form of the gauge group, discrete theta
angle, allowed Wilson–'t Hooft line operators, spacetime manifold/spin data,
and the partition-function or protected-observable family. This is a
**nonlogical status-review lead**, not an adopted `open-problem` item. A
possible question would ask for exact quantum equivalence and the
line-operator/partition-function transformation for that fixed global form,
discrete theta angle, line-operator spectrum, and spacetime structure. Many
protected quantities and finite calculations are exact in their adopted
models; the broader equivalence and its current status require a dedicated
source review before any precise unresolved claim could be recorded.

The AdS/CFT statement between large-N N=4 \(SU(N)\) SYM and type-IIB string
theory on \(AdS_5\times S^5\) is a separate duality conjecture with a precise
parameter dictionary and limits. The original Maldacena proposal and current
N=4 work provide evidence and many checks; they do not constitute a mathematical
proof of a complete nonperturbative equivalence. Do not use AdS/CFT as a proof
supplier for an unrelated flat-space theorem.

The late-October-2026 discovery ledger records three recent supersymmetry
leads: the N=4 \(\mathbb{RP}^4\) orientifold/integrability paper
arXiv:2610.28725 (20 Oct); a scale-anomaly SQED paper arXiv:2610.28900
(20 Oct); and N=1 supersymmetric W-algebra free-field realizations
arXiv:2610.27853 (20 Oct). The first two full texts were retrieved; the
SQED paper's model and one-loop sections were read, while the \(\mathbb{RP}^4\)
paper's abstract/introduction, localization setup and conclusion were checked.
Those are newly posted papers, not suppliers accepted by this scaffold.
For arXiv:2610.28900, preserve the authors' exact scope: one-flavor N=1 SQED,
one-loop implicit regularization, massless and heavy-selectron limits. It is
not an all-orders superconformal anomaly theorem; regularization-dependent
surface terms are fixed by Ward identities, and their stated absence of
experimental SUSY evidence is not evidence against every SUSY model. The
W-algebra paper's full PDF was downloaded but only title/abstract/metadata
were inspected; it is an adjacent mathematical-physics lead, not a proof
supplier. The discovery file
[`recent-source-leads.json`](./recent-source-leads.json) records those
metadata/abstract query boundaries and additional localization/defect leads.
No claim of an exhaustive 2026 literature search is made.

## SUSY breaking, EFT boundary, and phenomenology

Distinguish **explicit breaking** (the selected Lagrangian is not invariant),
**soft breaking** (a stated positive-mass-dimension set of SUSY-breaking
operators in a renormalizable EFT), and **spontaneous breaking** (the exact
Lagrangian is invariant but the selected vacuum is not). In global N=1,
canonical tree-level models use \(\langle F_i\rangle\ne0\) or
\(\langle D^a\rangle\ne0\) as order parameters; the signs, dimensions,
gauge transformation and normalization of F/D must be declared. The global
goldstino theorem follows from the supercurrent Ward identity and positive
energy assumptions. In local supersymmetry the gravitino can absorb the
goldstino; the super-Higgs mechanism requires supergravity and is out of the
rigid proof scope. The EFT researcher owns detailed soft-term bases, matching,
decoupling and operator truncation; use its exact `aqft-susy-effective-theories`
page and IDs once finalized.

Experimental items must cite the actual collaboration analysis and separate
data, prediction, likelihood result, and model interpretation. The reviewed
ATLAS 2026 result uses 140 fb\(^{-1}\) of 13 TeV Run-2 data, a displaced-track
search at chargino–neutralino mass splittings 0.3–1 GeV and a low-momentum
one-lepton-one-track search at 1–3 GeV. It reports data consistent with the
Standard Model and 95% confidence-level exclusions up to 199 GeV for the
targeted \(\Delta m=0.6\) GeV displaced-track benchmark; the combined
briefing reports limits across the targeted simplified-model region. The
published paper is ATLAS arXiv:2511.20042v2, JHEP 06 (2026) 094. It excludes
only the specified higgsino simplified models, mass splittings, selections,
decays, and nuisance/likelihood assumptions.

The CMS PAS SUS-23-014 page reports a search over 138 fb\(^{-1}\) of 13 TeV
Run-2 data in boosted hadronic/leptonic channels. It states data are consistent
with the Standard Model and gives model-specific 95% confidence-level limits
for several RPC and RPV simplified models. The CERN PDF link was blocked by an
Anubis anti-bot page during this pass; the official CMS public result page and
its full HTML figures/tables/summary were accessible. Exact apparatus and
statistical-review scope must be carried as that limitation.

Neither null analysis rules out supersymmetry as a framework, all masses,
compressed spectra, R-parity-violating cases, long-lived signatures, or
non-minimal extensions. A reported 95% CL exclusion is conditional on the
published model, detector response, event selection, background model,
systematic/statistical correlations, and limit method; it is not the
probability that SUSY is false. The current reviewed collider papers report
no significant excess in their named channels; no experimental observation
has established a superpartner or supersymmetry as a symmetry of nature as
of 2026-10-23.

Candidate experiment items include `exp-aqft-atlas-compressed-higgsino-search-2026`
and `exp-aqft-cms-boosted-susy-search-2025`, both source reports, not proofs.
Each future experiment item must give the search question, dataset/luminosity,
apparatus, object reconstruction/calibration, control and validation regions,
background estimates, likelihood/test statistic, nuisance treatment,
uncertainties, observed/expected results, and exact simplified-model
parameterization. Do not turn the category's experimental-status sentence
into a logical prerequisite for or against the SUSY algebra.

## Candidate item interfaces and precise remaining gaps

| Candidate ID | Kind / domain | Exact role and proof/source obligation |
|---|---|---|
| `def-qftx-super-poincare-algebra-4d` | `definition` / mathematics | Give the real graded vector space, complete brackets, Lorentz action, central extension, involution and metric/sign conventions. Locally verify the super-Jacobi identities in `lem-qftx-super-poincare-graded-jacobi`. Consume root superalgebra definitions only after actual import pinning. |
| `def-qftx-unitary-super-poincare-representation` | `definition` / mathematics | Specify Hilbert space, strongly continuous even group action, self-adjoint translations, common invariant dense domain, densely defined Q/Q† and positivity. This fills the algebraic-supermodule gap. |
| `thm-qftx-supermultiplet-mass-degeneracy` | `theorem` / mathematics | From exact commutation with \(P^2\), derive same mass within a unitary irreducible multiplet; state how gauge charges are preserved only if the model's gauge generators commute with Q. |
| `thm-qftx-n-extended-central-charge-bounds` | `theorem` / mathematics | Prove the rest-frame BPS inequalities by the displayed positive anticommutator. It establishes a bound, not existence/stability of states. |
| `def-qftx-superspace-grassmann-algebra` | `definition` / mathematics | Define the supercommutative coefficient algebra, odd coordinates, left/right derivatives, Berezin integration and dimensions; finite QED Grassmann data is not this supplier. |
| `def-qftx-n1-chiral-superfield` | `definition` / mathematics | Define \(D,\bar D\), chiral constraint, component expansion, parity and transformations. State the common domain or classical field regularity. |
| `post-qftx-n1-wess-zumino-model` | `postulate` / physics | Adopt a specific flat-space action, field content, normalization, units and classical transformation law. The postulate states the model, not that nature realizes it. |
| `pthm-qftx-n1-wess-zumino-off-shell-invariance` | `physics-theorem` / physics | Supply the local variation and closure argument above, including compact-support/boundary hypothesis and auxiliary field. |
| `post-qftx-n1-gauge-matter-model` | `postulate` / physics | Combine chiral/vector multiplets with exact gauge representations and coupling normalization after the non-Abelian gauge supplier is accepted. |
| `pthm-qftx-n1-f-term-potential` | `physics-theorem` / physics | Eliminate algebraic F fields and derive \(V_F=\sum_i|W_i|^2\) with the stated Kähler metric and boundary/regime; it is not universal for noncanonical Kähler terms. |
| `post-qftx-n2-vector-hypermultiplet-model` | `postulate` / physics | State the compact gauge group, vector/hyper representations, N=1 decomposition, \(\sqrt2\) coupling, masses, units and prepotential convention. |
| `post-qftx-n4-super-yang-mills-model` | `postulate` / physics | Give the one-vector/three-adjoint-chiral action and equivalent component content with trace/coupling convention. Either treat its 16-charge invariance as part of the adopted model premise or author and prove the explicit variation/closure; never present source citation alone as a local proof. |
| `pthm-qftx-n1-wilsonian-f-term-nonrenormalization` | `physics-theorem` / physics | State Weinberg's perturbative Wilsonian cutoff/regulator/gauge-invariance hypotheses and exact one-loop gauge-coupling/FI qualification; prove locally or import only an exact fully reviewed proof, not a slogan. |
| `def-qftx-susy-vacuum-moduli-data` | `definition` / mathematics or physics | Define the F/D zero locus, quotient/stability convention, classical versus quantum moduli, and which path-integral/continuum model is assumed. |
| `post-qftx-n2-seiberg-witten-effective-solution` | `postulate` / physics | Adopt the N=2 SU(2) low-energy curve/prepotential, branch domain and monodromy/singularity assumptions exactly; expose its source-based solution status. |
| `pthm-qftx-global-susy-vacuum-energy` | `physics-theorem` / physics | Derive nonnegative vacuum energy from the supersymmetry algebra in a unitary global theory and show that a non-invariant vacuum has positive energy under stated central-charge/boundary conditions. |
| `pthm-qftx-oraifeartaigh-f-term-breaking` | `physics-theorem` / physics | Use the explicit three-field Wess–Zumino model to show F-equations have no common zero and \(V\ge|k|^2\); separately establish the existence and stability of the minimizing vacuum before claiming a vacuum phase. |
| `exp-aqft-atlas-compressed-higgsino-search-2026` | `experiment` / physics | Faithfully report the exact Run-2 search, limit and likelihood scope; does not establish or rule out SUSY globally. |
| `exp-aqft-cms-boosted-susy-search-2025` | `experiment` / physics | Candidate only until the restricted PDF/full source is retrieved and inspected; retain that retrieval blocker and use the official page only for its accessible claims. |

The following proof obligations are not discharged by this note or by source
links: a real-form/unitary Hilbert representation of the super-Poincare algebra;
the full N=2/N=4 component-variation proof if not included as a model premise;
non-Abelian supersymmetric gauge fixing/BRST/BV; a general interacting
four-dimensional continuum construction; a general N=4 localization identity;
all-regime nonrenormalization beyond the stated Wilsonian perturbative theorem;
nonperturbative Seiberg duality as equality of continuum theories; global
S-duality with all line/operator sectors; and a physical BPS-index dictionary.
The gauge, EFT, localization/BPS, and symmetry/anomaly sibling notes own their
respective exact suppliers and should be cross-checked before integration.

## Source ledger and dated reading limits

The source date is the date checked in this pass, not a claim of exhaustive
literature coverage. Full PDFs were downloaded outside the repository to
temporary storage and read with MuPDF text extraction; only the exact sections
listed below support the stated use.

| Source | Full text and actual reading | Use and limit |
|---|---|---|
| Stephen P. Martin, *A Supersymmetry Primer*, arXiv:hep-ph/9709356v7 (27 Jan 2016), <https://arxiv.org/pdf/hep-ph/9709356v7> | Full 160-page PDF retrieved; read intro algebra/multiplet discussion, §2 conventions, §§3.1–3.4 component actions, §§4.1–4.9 superspace/chiral/vector superfields, §5 soft terms, §6.5 RG/nonrenormalization, §§7.1–7.3 F/D and O'Raifeartaigh breaking. | Pedagogical source for exact N=1 transformations/actions, the nonrenormalization RG statement, soft terms, and a broken-SUSY example. It is not a rigorous construction of a 4D interacting theory and its result sections are not a source for current LHC limits. |
| Rudolf Haag, Jan T. Łopuszański, Martin Sohnius, “All Possible Generators of Supersymmetries of the S-Matrix,” *Nucl. Phys. B* 88 (1975) 257–274, DOI <https://doi.org/10.1016/0550-3213(75)90279-5>; full-text university mirror <https://www.physics.mcgill.ca/~keshav/675/haag.pdf> | Full 18-page mirror retrieved; read abstract, §1, assumptions in §2, and the massive-algebra classification in §3. | The theorem concerns visible S-matrix symmetries, a nontrivial S-matrix, particle finiteness, and a massive theory without massless particles/long-range forces; authors explicitly limit massless classification because of infrared/vacuum-degeneracy issues. This is not a blanket theorem for arbitrary local QFT or a proof that nature is supersymmetric. |
| E. Witten and D. Olive, “Supersymmetry algebras that include topological charges,” *Phys. Lett. B* 78 (1978) 97–101, DOI <https://doi.org/10.1016/0370-2693(78)90357-X> | Publisher page/abstract and bibliographic metadata inspected; full text not retrieved. | The note uses a local positive-representation proof for the algebraic mass bound and records Witten–Olive only as origin/context for soliton topological central charges. No derivation from that paper is imported. |
| Eric D'Hoker and D.H. Phong, *Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems*, arXiv:hep-th/9912271v1 (29 Dec 1999), <https://arxiv.org/pdf/hep-th/9912271v1> | Full 125-page PDF retrieved; read §1.3, §§2.1–2.5, the N=1/N=2/N=4 multiplet decomposition and action construction in §§2.8–2.10, and §3.2 on holomorphicity/Wilsonian effective actions. | Source for N=2/N=4 field content, N=1 decomposition, prepotential/coupling conventions, and exact-SW context. The authors explicitly call AdS/CFT an equivalence conjecture; later exact/protected calculations do not prove a full continuum equivalence. |
| N. Seiberg and E. Witten, “Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory,” arXiv:hep-th/9407087v1 (15 Jul 1994), <https://arxiv.org/pdf/hep-th/9407087v1> | Full 45-page PDF retrieved; read §§1–2.3, §§3–4, §§5.1–5.7 and §6. | Pure \(SU(2)\), N=2, low-energy curve/prepotential, periods, BPS mass formula, monodromy, and proposed massless monopole/dyon singularities. The source calls its singularity input a proposal and works inside a physical low-energy effective-action framework; it does not construct the ultraviolet continuum path integral. |
| N. Seiberg, “Electric-Magnetic Duality in Supersymmetric Non-Abelian Gauge Theories,” arXiv:hep-th/9411149v1 (20 Nov 1994), <https://arxiv.org/pdf/hep-th/9411149v1> | Full 22-page PDF retrieved; read §1, the SQCD conformal-window discussion in §§2–3, and deformation/anomaly checks in §§4–5. | Primary source for the electric/magnetic SQCD proposal. It explicitly says “we cannot prove” the proposed fixed point for every value in the window and presents the dual variables as a suggested description checked against anomalies and deformations. This is not a local proof of equivalence. |
| K. Intriligator and N. Seiberg, “Lectures on Supersymmetric Gauge Theories and Electric-Magnetic Duality,” arXiv:hep-th/9509066v1 (12 Sep 1995), <https://arxiv.org/pdf/hep-th/9509066v1> | Full 44-page PDF retrieved; read §§1.1–1.3, §§2.1–2.4, and §§5.1–5.3. | Review source for moduli, holomorphy, the conformal window, and dual SQCD description. Its phrasing identifies an equivalent infrared description in theoretical physics; it does not supply a constructive mathematical equivalence proof. |
| N. Seiberg, “Naturalness Versus Supersymmetric Non-renormalization Theorems,” arXiv:hep-ph/9309335v1 (30 Sep 1993), <https://arxiv.org/pdf/hep-ph/9309335v1>; “The Power of Holomorphy,” arXiv:hep-th/9408013v1, <https://arxiv.org/pdf/hep-th/9408013v1> | Full 14-page and 13-page PDFs retrieved; read Seiberg 1993 §§1–4 and 1994 §§1–2.2. | Supports the perturbative/nonperturbative and Wilsonian/1PI distinction. The 1993 argument explicitly assumes the theories exist as quantum field theories and that regularization preserves SUSY/global symmetries; it identifies nonperturbative superpotential corrections and IR holomorphic anomalies in 1PI. |
| Steven Weinberg, “Non-Renormalization Theorems in Non-Renormalizable Theories,” arXiv:hep-th/9803099v1 (12 Mar 1998), <https://arxiv.org/pdf/hep-th/9803099v1> | Full 13-page PDF retrieved; read the action definition and complete spurion/symmetry/Feynman-graph proof through the gauge/FI qualifications. | Exact source for the candidate local perturbative Wilsonian F-term theorem: cutoff preserving SUSY and gauge invariance; holomorphic \(F(\Phi,W)\) unrenormalized except one-loop gauge-coupling renormalization; FI terms are separate. It does not cover nonperturbative corrections or arbitrary 1PI functionals. |
| A. Yu. Petrova and A. R. Vieira, “Scale Anomaly in Supersymmetric Quantum Electrodynamics: Ward Identities, Supersymmetry Breaking, and Decoupling,” arXiv:2610.28900v1 (20 Oct 2026), <https://arxiv.org/pdf/2610.28900> | Full 9-page preprint retrieved; read model/scale definitions, implicit-regularization prescription, one-loop Ward-identity computation, soft-mass comparison, and conclusions. | Recent preprint only: one-flavour N=1 SQED, one-loop, IReg, specified surface terms/renormalization conditions. It does not establish a general scale/superconformal anomaly or a nonperturbative result. |
| Caetano, Komatsu, Soresina, Wallberg, “Orientifold and Integrability: N=4 Super-Yang-Mills on RP4,” arXiv:2610.28725v1 (20 Oct 2026), <https://arxiv.org/pdf/2610.28725> | Full preprint retrieved; read abstract/introduction, the localization section setup, and conclusion; the lengthy spin-chain and localization calculations were not independently reproduced. | Recent research lead concerning planar N=4 SYM on \(\mathbb{RP}^4\), with a conjectured general formula and evidence for a holographic orientifold interpretation. It is not a proof of S-duality or a general localization theorem. |
| “Free-field realizations of N=1 supersymmetric W-algebras …,” arXiv:2610.27853v1 (20 Oct 2026), <https://arxiv.org/abs/2610.27853> | arXiv metadata/abstract inspected; the downloaded PDF was not read section-by-section. | Adjacent algebraic-physics research lead only; no supplier or theorem is taken from it. |
| ATLAS Collaboration, “Search for higgsinos in compressed mass spectra using low-momentum tracks,” arXiv:2511.20042v2 (26 Jun 2026), JHEP 06 (2026) 094, <https://arxiv.org/pdf/2511.20042v2> | Full 67-page paper retrieved; inspected abstract, model, data/reconstruction, analysis/statistical-systematic sections, results and conclusion. | 140 fb\(^{-1}\) 13 TeV Run 2, targeted compressed higgsino simplified models; no significant excess; 95% CL mass constraints. No raw events/auxiliary likelihood reanalysis or all cited calibration papers reviewed. |
| CMS Collaboration, CMS-PAS-SUS-23-014, official page <https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html> | Official full HTML public result, tables/figures and summary inspected; linked CDS PDF served an Anubis anti-bot interstitial. | 138 fb\(^{-1}\), 13 TeV Run 2 boosted-object searches and several RPC/RPV simplified models; no significant deviation. The PDF retrieval limit blocks a full apparatus/statistical re-review in this pass. |

The current source cutoff is the sources above plus the explicitly limited
`recent-source-leads.json`. This is a bounded, non-exhaustive review as of
2026-10-23. Future authors must refresh the duality/conjecture and collider
status checks before publishing any `open-problem`, experiment, or frontier
status statement.
