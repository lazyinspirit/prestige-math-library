# Batch 1 authoring notes — aqft-susy-math-foundations

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: 1  
Pair: `aqft-susy-math-foundations` / `aqft-susy-math-foundations-examples`  
Category/library: `quantum-field-theory-mathematics` / `mathematics`

## Controlling design and plan comparison

- The complete controlling design is `research/plan-advanced-qft-and-supersymmetry-track.md`, § “Super-Poincare Algebra and Positive Hilbert Representations” (lines 9–21). It calls for the real graded algebra, central extension, graded Jacobi verification, unitary *-representation and common operator domains.
- `research/plan-spec.json` agrees on page IDs, titles, A/B relation, category/library, order 957 and the four required pages. Its item arrays are empty pre-authoring placeholders. The assigned design lists nine future A-item IDs; the binding owner direction additionally requires substantial B-page examples and treats all listed contracts as authoring obligations.
- The older `research-supersymmetry.md` and proposed inventory describe root superalgebra/supermodule items as possible suppliers, but the current `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/superalgebra-review.md` explicitly resolves that dependency: author the real algebra and complete local Jacobi proof here, then define the Hilbert representation directly. No unpinned root superalgebra, enveloping-superalgebra or supermodule-equivalence item is a logical dependency. This supersedes the older supplier suggestions without changing the approved page scope.
- The local chiral-derivative identity/coordinate calculation is a necessary mathematical intermediate for the planned N=1 chiral-superfield definition, so it is added as a proved A-page lemma. The B page receives four finite examples: an N=1 oscillator fiber, an N=2 shortened rest fiber, Berezin coefficient extraction, and a finite Witten-index cancellation model.

## Mathematical interfaces and conventions

- The required imported pages are `hilbert-space-geometry-and-riesz-representation`, `spectral-measures-and-borel-functional-calculus`, `unbounded-self-adjoint-operators-and-stones-theorem`, and `field-extensions-and-the-complex-numbers`. The actual inspected carriers include `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-projection-valued-measure`, `def-unbounded-linear-operator-domain-and-graph`, `def-densely-defined-closed-and-closable-operator`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-unbounded-integral-against-a-pvm`, `lem-unbounded-pvm-integral-is-well-defined-and-closed`, `thm-bounded-borel-pvm-integral`, `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, and `def-complex-conjugate-real-imaginary-part-and-modulus`.
- The inspected PVM, scalar-measure, bounded-calculus and unbounded-integral interfaces assume Countable Choice; the PVM-integral lemma gives self-adjointness for real-valued integrands under that assumption. The `thm-stone-one-parameter-unitary-groups` carrier separately assumes full Choice. The representation will supply a joint momentum PVM as data and define the self-adjoint translations by its coordinate integrals, rather than infer a joint PVM from formal commutators or invoke Stone’s theorem with an unstated stronger axiom. Carry Countable Choice through each consuming item. No use of full Choice is currently required.
- Preserve the QFT mostly-plus convention `eta=diag(-,+,+,+)`, `sigma^mu=(I,sigma_i)`, `bar-sigma^mu=(I,-sigma_i)`, `epsilon_12=1`, `{Q^I_alpha,bar Q_dotbeta_J}=-2 sigma^mu P_mu delta^I_J`, and `P_0=-M` in a massive rest fiber. The Hermitian momentum matrix is the complexified translation basis; the tau-fixed real translation generators are skew-Hermitian. The unitary representation uses actual closed charges/adjoints, a common product domain, a joint momentum PVM and its charge-domain reduction condition. A formal commutator on a dense domain does not substitute for that condition.
- The central-charge theorem uses only a fixed massive rest representation fiber with scalar central-charge matrix. It proves `M >= ||Z||` by positivity of the anticommutator matrix and explicitly evaluates the N=2 combination. It asserts neither normalizable sharp momentum in the full Hilbert space nor existence or stability of a physical state.
- The Witten-index theorem uses an explicitly specified graded pure-point heat decomposition with finite multiplicities and summable heat weights. It proves positive-energy pairing and retains the zero-energy superdimension. This item makes no continuum regularization or physical index dictionary claim; continuous-spectrum cases without these heat-trace data remain outside its formulation.

## Source reading and disposition

- Stephen P. Martin, *A Supersymmetry Primer*, arXiv:hep-ph/9709356v7, full 160-page PDF and arXiv HTML inspected. Read the complete relevant passages in §1 (algebra/supermultiplet discussion), §2 (metric and two-component conventions), §3.1 (off-shell free chiral model and canonical N=1 algebra derivation), §§4.1–4.4 (odd coordinates, Berezin integration, superspace transformations, covariant derivatives and chiral expansion), and §7.1 (Witten-index context). The N=1 field derivation and its on-shell/field-theory scope are context; they do not prove the local abstract N-extended algebra or operator-domain claims.
- S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, *Superspace, or One Thousand and One Lessons in Supersymmetry*, arXiv:hep-th/0108200, full 568-page PDF inspected. Read the complete relevant passages in §§3.2–3.3 (signed grading, super-Jacobi, N-extended algebra, positivity and particle representations), §§3.4 and 3.6–3.7 (covariant derivatives, components and Berezin integration), and §8.4 (supertrace context). Its spinor/C conventions and some normalization choices differ from the authored interface; only the source statements actually matching the item uses are recorded, and all algebra/domain claims are proved locally.
- URLs and item-specific locators/dispositions will be recorded in `advanced-qft-supersymmetry-build-2026-10-23-batch-1.coverage.json`. The arXiv HTML endpoint for the Gates book returned 404; the same work’s complete `/pdf/hep-th/0108200` source was retrieved and read successfully. Both active PDF sources were fetched and read in full. The coverage records now contain current fetch stamps for every page/source row; no active source is dropped.

## Item checkpoints

Author suppliers before their consumers. Record each finished item below with its exact claim, dependencies, source uses, proof status, placement, and current checks.

### Drafted supplier: `def-qftx-super-poincare-algebra-4d`

- Claim/conventions: defines the complete complex $N$-extended graded bracket, central-charge sector, conjugate-linear adjoint, fixed real form, and the $(-+++)$ Pauli/bispinor bridge. The local convention is $\epsilon_{12}=1$, $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, and $P_0=-M$ at rest. Only scalar antisymmetric flavor central charges are included; tensorial/topological extensions are outside this interface.
- Dependencies: `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, and `def-complex-conjugate-real-imaginary-part-and-modulus`, each `mathematical-premise`; `dependency_level: 0`. Its `justified_by` discharge is the planned local `lem-qftx-super-poincare-graded-jacobi`, which depends on this definition and is authored next.
- Source use: Martin, §§1–3.1 (algebra and supermultiplet context; free-field/canonical derivation is not imported as the local abstract proof); Gates et al., §3.2 (graded algebra, N-extended brackets and positivity context; their conventions are not silently substituted). Both full texts are recorded in the batch coverage file after final item inventory.
- Placement/readiness: A-page supplier. Its local Jacobi result exists; its current Step 1 record is ready and its scoped formatting, rendering, source and contract checks pass.

### Completed supplier: `lem-qftx-super-poincare-graded-jacobi`

- Claim: verifies degree and graded-skew symmetry, the even and mixed-parity Jacobi cases, central epsilon invariance, the odd-odd-odd zero case, compatibility of the conjugate-linear adjoint with every bracket type, the involutive real form, and the mostly-plus Pauli/bispinor metric and rest-sign bridge.
- Dependencies: `def-qftx-super-poincare-algebra-4d` (mathematical-premise) plus the exact complex-field and conjugation suppliers `thm-complex-numbers-form-a-field` and `def-complex-conjugate-real-imaginary-part-and-modulus`; `dependency_level: 1`. The proof does not depend on the unpinned root complex-superalgebra, supermodule, enveloping-algebra or PBW items.
- Proof route: four parity patterns exhaust the super-Jacobi identity. The even action on $V$ is a tensor-product representation; the odd bracket is equivariant by tensor covariance and $A^{\mathsf T}\epsilon+\epsilon A=0$ for traceless $2\times2$ matrices. Three odd inputs vanish because their inner brackets lie in $V\oplus C_N$, which acts trivially on odd elements. The adjoint and real form are checked on even-even, even-odd and odd-odd brackets.
- Source use: Gates et al., §3.2 supplies an independent graded-algebra/extended-bracket treatment; Martin §3.1 supplies the N=1 convention comparison. Neither source proof is claimed to establish this N-extended local Jacobi result.
- Placement/readiness: A-page lemma immediately after its definition supplier. The current manifest mirror and Step 1 readiness hash are bound; scoped proof-layout, precheck, rendering and strict-contract checks pass.

### Drafted consumer interface: `def-qftx-unitary-super-poincare-representation`

- Claim/conventions: defines the integrated $SL(2,\mathbb C)\ltimes\mathbb R^{1,3}$ action, positive-energy joint momentum PVM, self-adjoint coordinate generators, actual closed supercharges/adjoints, common invariant product domain, spinor covariance with equality of closed domains, and the explicit PVM reducing-projection/domain conditions for charges and adjoints. The inner product is linear in its first argument, matching the imported Hilbert convention.
- Dependencies: the local real super-Poincare algebra, complex-field/conjugation definitions, Hilbert/PVM definitions, Countable Choice, unbounded-operator/adjoint/self-adjoint definitions, bounded Borel PVM calculus, and the unbounded PVM-integral lemma; all `mathematical-premise`. `dependency_level: 1` because its only in-run supplier is `def-qftx-super-poincare-algebra-4d` at level 0.
- Axiom/source status: the current PVM, scalar-measure, bounded-calculus and unbounded-integral statements and complete proofs were inspected. The PVM and operator-integral route assumes Countable Choice. The separate imported Stone theorem assumes full Choice, so this definition supplies the joint PVM and its reduction data rather than using that theorem or inferring spectral compatibility from a formal commutator. No full Choice use is claimed.
- Scope/limits: fixed-signature scalar central-charge algebra only; tensorial/topological extensions remain outside this item. Strong spectral and operator-domain conditions are explicit. There is no claim that the abstract representation exists in a particular interacting QFT.
- Source use: Martin §§1–4.4 distinguishes the N=1 canonical Hilbert-space charges from superspace differential operators; Gates §§3.2–3.3 provides the particle-representation context. Their sources are conventions/context only; neither supplies the local unbounded-domain definition.
- Placement/readiness: A-page definition, level 1. Its inventory mirror and Step 1 record are current; scoped dependency, editorial, rendering and source checks pass.

The mass and central-charge consumers are complete below; the chiral and trace-index branches are also complete.

### Drafted theorem: `thm-qftx-supermultiplet-mass-degeneracy`

- Claim: the pushforward of the joint momentum PVM under $s(p)=-\eta^{\mu\nu}p_\mu p_\nu$ is a mass-squared PVM; the explicit reduction/domain hypothesis makes every charge and adjoint preserve its spectral subspaces. In an irreducible representation each mass projection is $0$ or $I$, and the resulting $0$–$1$ scalar probability measure is shown directly to be a point mass. The result includes the massless endpoint and makes no sharp-momentum eigenvector assumption. Gauge intertwining is conditional on an additionally specified commuting unitary gauge action.
- Dependencies: `def-qftx-unitary-super-poincare-representation`, `def-projection-valued-measure`, `lem-scalar-and-complex-measures-from-a-pvm`, `def-countable-choice`, and `thm-of-square-roots`, all `mathematical-premise`; `dependency_level: 2` from the representation definition at level 1. The actual scalar-PVM proof and its Countable Choice hypothesis were inspected.
- Source use: Martin §1 and Gates §3.3 state the familiar mass/Casimir conclusion in particle-representation context. Their argument does not provide the charge-domain/spectral-projection compatibility needed here; the item proves that interface locally and does not import their assertion as a premise.
- Placement/readiness: A-page theorem. The exact cone-restricted PVM pushforward and zero-mass endpoint are explicit; its current manifest, contract and Step 1 record are ready.

The fixed-rest-fiber central-charge theorem is complete below and retains the no-normalizable-sharp-momentum qualification.

### Drafted theorem: `thm-qftx-n-extended-central-charge-bounds`

- Claim: on a positive Hilbert rest fiber with $M>0$, scalar antisymmetric central-charge matrix $Z$, actual charge adjoints and common product domain, positivity of the full $2N\times2N$ anticommutator matrix gives $M\ge\|Z\|_{\rm op}$. For $N=2$, the exact convention $z=e^{i\phi}|z|$ yields $AA^\sharp+A^\sharp A=4(M-|z|)I$ on the dense domain and both combinations vanish at saturation. On a finite-dimensional fiber $A^\sharp=A^*$; for a general unbounded fiber the statement keeps the precise quadratic-form conclusion without asserting an unjustified adjoint-of-sum identity.
- Dependencies: the local algebra, unitary-representation/domain interface, complex conjugation/modulus, and Countable Choice (all `mathematical-premise`); `dependency_level: 2`. The proof uses the exact mostly-plus relation and $P_0=-M$, not a source convention substitution.
- Source use: Gates §3.2 is an independent extended-algebra/positivity treatment. Martin §1 supplies only N=1 multiplet context; no N=2 bound is attributed to that section. The finite-dimensional matrix-norm proof and domain qualification are local.
- Placement/readiness: A-page theorem. The rest fiber is representation-theoretic and finite- or dense-domain qualified; it establishes no state existence, stability or model applicability. Its current Step 1 record and strict contract are ready.

The Grassmann, chiral, trace-index, and B-page example branches are complete in the checkpoints below.

## Final reconciliation

All assigned items, pages and batch evidence are authored. The detailed final checks and the remaining run-wide owner blockers are recorded at the end of this file.

### Completed Grassmann and chiral branch

- `def-qftx-superspace-grassmann-algebra`: defines the 16-element ordered exterior basis, graded tensor product with the finite supercommutative coefficient algebra, explicit left/right derivatives, ordered Berezin maps and natural-unit dimensions. It includes the induced tensor-star sign $(-1)^{|a||S|}$ in coefficient-left notation. Dependencies are the exact imported complex-field/arithmetic and conjugation definitions; `dependency_level: 0`. Source use: Martin §4.1 and Gates §§3.1, 3.7, both inspected in full relevant sections.
- `lem-qftx-grassmann-coefficient-calculus`: proves associativity/supercommutativity, the graded tensor product rules, both derivative Leibniz formulas including the single-overlap cancellation, ordered top-coefficient extraction, and involutive anti-star compatibility. Dependency: the Grassmann definition; `dependency_level: 1`. The star step explicitly checks the sign on odd coefficient tensors. Source use: Martin §4.1 and Gates §3.7; local signs are proved here.
- `def-qftx-n1-chiral-superfield`: fixes $(-+++)$ sigma conventions through the local algebra, $C^\infty(\mathbb R^{1,3},\mathcal A\otimes\Lambda_4)$ regularity, left covariant derivatives, the finite nilpotent Taylor shift, even component parities, and the full supercharge transformation action with component coefficients defined by ordered extraction. Dependencies: Grassmann definition/calculus, local algebra and complex arithmetic/conjugation; `dependency_level: 2`. Source use: Martin §§4.2–4.4 and Gates §§3.4, 3.6; source conventions contextualize the result, while all local formulas are explicit.
- `lem-qftx-n1-chiral-superspace-identities`: derives the covariant-derivative algebra, rewrites $\bar D$ as $-\partial_{\bar\theta}|_y$, proves the unique four-component solution and proves supercharge transformations preserve the chiral constraint. Dependencies: chiral definition, Grassmann definition/calculus and local algebra; `dependency_level: 3`. This is the local well-definedness result cited by the definition; no quantum field domain or field equations are asserted.

### Completed pure-point index branch

- `lem-qftx-supercharge-positive-energy-pairing`: for a self-adjoint odd $Q$ and $H=Q^2$, proves the actual-domain invariance of each positive eigenspace and derives the unitary $Q/\sqrt{\lambda}:\mathcal H_\lambda^+\to\mathcal H_\lambda^-$ with inverse the reverse restriction. Dependencies: imported Countable Choice, Hilbert/inner-product, unbounded-domain, adjoint/self-adjoint and square-root definitions; `dependency_level: 0`. The proof checks $Q\psi\in D(H)$ rather than assuming an eigenspace reduction identity.
- `def-qftx-graded-trace-class-index-data`: defines the supplied discrete spectral decomposition of a graded Hilbert space with self-adjoint odd $Q$, finite zero and positive eigenspaces, compatible Hilbert basis, bounded diagonal heat operators supplied as data, trace-class hypothesis for every $\beta>0$, and absolutely convergent signed basis trace. It does not assume positive-energy intertwiners; the local pairing lemma derives them from $Q$. Dependencies: the pairing lemma plus imported Hilbert, basis, trace-class/trace, real exponential and Countable Choice inputs; `dependency_level: 1`. Scope excludes continuum and regularized traces. Source use: Martin §7.1 and Gates §8.4; the direct trace-class and domain qualifications are local.
- `thm-qftx-witten-index-beta-independence`: for the discrete data, the local pairing lemma identifies each positive-energy map with $Q/\sqrt{\lambda}$, proving equal finite even/odd multiplicities. These cancel termwise in the absolutely summable diagonal family, leaving $m_0^+-m_0^-$. Dependencies: the index-data definition and the pairing lemma; `dependency_level: 2`. It uses no formal trace cyclicity and asserts no continuum pairing or physical model dictionary. Source use: Martin §7.1 and Gates §8.4; proof is local.
- B-page examples completed: `ex-qftx-n1-supercharge-oscillator` (two-mode CAR rest fiber, level 1); `ex-qftx-n2-shortened-rest-fiber` (explicit four-state saturated N=2 construction using the central-charge theorem, level 3); `ex-qftx-berezin-coefficient-extraction` (one-swap sign check using the Grassmann lemma, level 2); and `ex-qftx-finite-witten-index-cancellation` (three zero modes plus one positive pair, level 3). Each has a complete local calculation and scoped non-claims. Source material is Martin/Gates sections already inspected; no Witten 1982 source is claimed as read.

### Current cross-branch checks and obligations

- Source retrieval: full Martin and Gates PDFs and relevant sections remain the active sources; the Gates HTML retrieval failure is superseded by its successful full PDF retrieval. No source has been dropped from the A-page coverage. Both active PDFs have current `fetch_verified` stamps. The Gates HTML 404 and successful PDF fallback remain in `retrieval_history`; `source_resolution` is empty because no active source remains unresolved or dropped.
- Current dependency levels derive from real in-run `deps`: algebra/Grassmann/positive-energy-pairing suppliers 0; Jacobi and Grassmann calculus 1; representation, Grassmann consumers and index data 1–2 as recorded in item frontmatter; mass/central theorems 2; chiral identities 3; Witten theorem 2; B examples follow their maximum in-run supplier level. The scoped dependency recomputation passes for all 16 current items.
- Historical mid-draft checkpoint. It is superseded by the final closure record below; all items remain draft and no independent acceptance is claimed.


## Final Step 1 closure — batch 1

Run: `advanced-qft-supersymmetry-build-2026-10-23`; batch: `1`; page pair: `aqft-susy-math-foundations` / `aqft-susy-math-foundations-examples`.

### Authored scope

- The A page contains 12 mathematical items; the B page contains four worked examples. Both page files contain YAML frontmatter only and have empty Markdown bodies. No summary text was authored.
- The additional local A-page suppliers are `lem-qftx-grassmann-coefficient-calculus`, `lem-qftx-n1-chiral-superspace-identities`, and `lem-qftx-supercharge-positive-energy-pairing`; the manifest marks these inventory expansions. The last lemma derives the positive-energy unitary as $Q/\sqrt{\lambda}$ from the actual self-adjoint odd supercharge and its composition domain. The trace-index data no longer assumes a positive-energy pairing map.
- The four required prerequisite pages remain exact in the A-page manifest. The 68 cross-batch rows comprise 64 verified item edges and four verified page edges. Each row records only its scoped interface check; this is not independent proof approval.
- The complete source coverage records all 12 A items and four B examples with two independent full-text treatments per page. The Martin PDF and Gates PDF have current fetch stamps on both page coverage records (4/4 fetch rows). The failed Gates HTML endpoint and successful full-PDF fallback remain in `retrieval_history`; no active source is dropped and `source_resolution` is empty.

### Scoped validation results

- `content-policy.mjs`: 16 items, 0 errors, 0 warnings.
- `statement-first`: 16 assigned items, 0 statement/reference defects.
- `proof-layout.mjs`: 16 items, 46 numbered steps, 0 defects.
- Normative proof precheck: 11 proof-bearing items checked, 0 failures. Phase-step numbers were canonicalized before the final contracts were generated.
- Strict proof contracts: 16/16 items, 46 step derivations, 41 exact supplier excerpts, and all eight boundary worksheet entries per item; 0 errors and 0 warnings.
- `rendercheck.mjs`: 18 item/page files, all formulas and YAML frontmatter parse; 0 errors.
- Focused `depcheck.mjs`: selected items and their item/page prerequisite cycle closures pass.
- Focused dependency-level recomputation: all 16 items pass. The computed levels are recorded in the item carriers and page manifest.
- `source-fetch-check.mjs` check mode: 4/4 source rows fetch-verified, 0 drops.
- `loadStep1Record` and `step1Decision` confirm 16/16 current `ready` authoring-readiness records. Each record lists its direct item dependencies and any `justified_by` supplier; readiness is not independent proof acceptance.
- The full-run item-dependency CLI was also run. It remains red outside this assignment with 88 findings: 76 other empty page inventories and 12 dependency-level mismatches. It reported no batch-1 item mismatch. These other pages and items were not edited.

The 76 other pages with empty scaffold inventories are:

`qftx-nonabelian-lattice-mathematics`, `qftx-nonabelian-lattice-mathematics-examples`, `qftx-borel-localization`, `qftx-borel-localization-examples`, `qftx-equivariant-index`, `qftx-equivariant-index-examples`, `qftx-adhm-moduli`, `qftx-adhm-moduli-examples`, `qftx-eft-operator-quotients`, `qftx-eft-operator-quotients-examples`, `qftx-eft-dispersion-and-bootstrap`, `qftx-eft-dispersion-and-bootstrap-examples`, `qftx-gauge-fixed-perturbation`, `qftx-gauge-fixed-perturbation-examples`, `aqft-eft-foundations`, `aqft-eft-foundations-examples`, `aqft-eft-operators`, `aqft-eft-operators-examples`, `aqft-eft-matching-running`, `aqft-eft-matching-running-examples`, `aqft-smeft-heft`, `aqft-smeft-heft-examples`, `aqft-eft-amplitudes`, `aqft-eft-amplitudes-examples`, `qftx-susy-n1-superspace-and-actions`, `qftx-susy-n1-superspace-and-actions-examples`, `qftx-susy-extended-actions`, `qftx-susy-extended-actions-examples`, `qftx-susy-ward-and-nonrenormalization`, `qftx-susy-ward-and-nonrenormalization-examples`, `qftx-susy-moduli-and-dualities`, `qftx-susy-moduli-and-dualities-examples`, `qftx-susy-breaking-and-phenomenology`, `qftx-susy-breaking-and-phenomenology-examples`, `qftx-susy-scft-and-frontier`, `qftx-susy-scft-and-frontier-examples`, `qftx-defects-and-topological-operators`, `qftx-defects-and-topological-operators-examples`, `qftx-p-form-symmetries`, `qftx-p-form-symmetries-examples`, `qftx-two-group-symmetry-backgrounds`, `qftx-two-group-symmetry-backgrounds-examples`, `qftx-noninvertible-symmetries`, `qftx-noninvertible-symmetries-examples`, `qftx-finite-symmetry-gauging-physics`, `qftx-finite-symmetry-gauging-physics-examples`, `qftx-thooft-anomalies`, `qftx-thooft-anomalies-examples`, `qftx-global-anomalies-inflow`, `qftx-global-anomalies-inflow-examples`, `qftx-anomaly-matching-and-frontier`, `qftx-anomaly-matching-and-frontier-examples`, `aqft-eft-anomalies`, `aqft-eft-anomalies-examples`, `aqft-susy-effective-theories`, `aqft-susy-effective-theories-examples`, `aqft-eft-experimental-inference`, `aqft-eft-experimental-inference-examples`, `qftx-susy-backgrounds`, `qftx-susy-backgrounds-examples`, `qftx-qexact-field-theory-localization`, `qftx-qexact-field-theory-localization-examples`, `qftx-s3-partition-functions`, `qftx-s3-partition-functions-examples`, `qftx-s4-partition-functions`, `qftx-s4-partition-functions-examples`, `qftx-instanton-localization-physics`, `qftx-instanton-localization-physics-examples`, `qftx-bps-solitons-monopoles`, `qftx-bps-solitons-monopoles-examples`, `qftx-bps-indices`, `qftx-bps-indices-examples`, `qftx-physical-hall-bps-wall-crossing`, `qftx-physical-hall-bps-wall-crossing-examples`, `qftx-spectral-networks`, `qftx-spectral-networks-examples`.

The 12 dependency-level mismatches outside batch 1 are:

- `def-abbv-equivariant-integration-conventions: dependency_level 1 differs from computed 3`
- `lem-abbv-equivariant-thom-gysin-identities: dependency_level 2 differs from computed 4`
- `lem-abbv-fixed-component-euler-invertibility: dependency_level 3 differs from computed 5`
- `thm-atiyah-bott-berline-vergne-integration-formula: dependency_level 4 differs from computed 6`
- `ex-abbv-projective-line-standard-circle-action: dependency_level 5 differs from computed 7`
- `ex-abbv-positive-dimensional-fixed-components: dependency_level 5 differs from computed 7`
- `def-aqft-scheme-and-wilson-coefficients: dependency_level 2 differs from computed 0`
- `thm-aqft-truncated-coupled-rge-wellposedness: dependency_level 3 differs from computed 1`
- `ex-aqft-coupled-rge-linear-mixing: dependency_level 4 differs from computed 2`
- `def-qftx-euclidean-yang-mills-sector: dependency_level 2 differs from computed 3`
- `ex-qftx-euclidean-trivial-vacuum-sector: dependency_level 3 differs from computed 4`
- `ex-qftx-bpst-instanton-formal-sector-weight: dependency_level 3 differs from computed 5`

The native page-layout engine has not yet set `page_layout: compact-v1`; the page bodies are already empty. That mechanical presentation step remains with the owner/engine. All 16 authored items remain drafts, and no publication or independent acceptance is claimed.
