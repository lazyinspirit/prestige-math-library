# Quantum Field Theory including QED — complete successor research scaffold

Date: 2026-10-19. All content is draft planning. Detailed routes and the displayed derivations are authoring inputs, not accepted item proofs. The 31 existing pairs and all 177 audit-revised interfaces are retained under the exact authority mapping in baseline.json. The new pairs extend that scope; they never rewrite an existing carrier.

## Common contracts

Flat spacetime uses the retained affine Minkowski geometry, η=diag(−1,1,1,1), x⁰=ct, inverse-length masses μ=mc/ℏ and physical energy ℏcω. Effective Clifford signs in amplitude formulas use −η and are translated explicitly. Mathematical Hilbert conventions follow the retained carrier; complex conjugations must be translated when crossing its first-linear GNS and second-linear Fock notation. Smooth means C∞; compact tests are C_c∞, Schwartz tests use all polynomial-derivative seminorms. Every unbounded operator is defined on a specified dense invariant core or spectral domain; a symmetric core operator is not automatically an observable. All formal series are in declared completed coefficient rings, and only coefficientwise equality is asserted. No open problem supplies a premise. Every purely mathematical result has only mathematical suppliers; physical measurement and model adoption occur only in physical items. No empirical experiment is fabricated by this successor.

## Retained baseline, without narrowing

All 31 original A/B identities are preserved. Their exact claims and repaired dependencies are itemwise in baseline.json; the old complete prose and local-argument modules remain required full sources. In particular retain GNS/moment domains, scalar/Dirac/photon free fields and gauge quotient, lattice Gauss/finite Ward identities, finite regulated interactions/Gibbs/Euclidean asymptotics, singular distribution extension and power counting, QED tree/soft/magnetic examples, Fan reported measurement and its original uncertainty. Retain the deterministic ratio lemma in place of the excluded historical statistical estimator; no excluded covariance theorem is smuggled back into a consumer. The current 177-entry authority is used rather than the original provisional inventory wherever repaired.

## qftx-microlocal-products — Wavefront sets, Hadamard kernels and admissible local products

A page `qftx-microlocal-products`; B companion `qftx-microlocal-products-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-ir03`, `qft-mf02`.

Work first on R^d and then on oriented, time-oriented smooth globally hyperbolic Lorentzian manifolds without boundary. Compact test supports and distribution seminorms are essential. In particular WF permits products at separated points but prohibits treating an arbitrary time-ordered kernel as an ordinary function on every diagonal. For the Hadamard difference, symmetry is decisive: both kernels have the same commutator, hence K(x,y)=K(y,x), while the transpose of the future-directed null relation is past-directed. Thus WF(K) is contained in two disjoint conic sets and is empty. This closes the previously missing local Wick-power interface. Full chart-invariant Fourier estimates remain an explicit local authoring obligation before this branch can supply a production consumer.

### A interfaces

#### def-qftx-wavefront-hadamard — Wavefront and positive-frequency Hadamard data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a distribution u on a smooth manifold, WF(u) consists of nonzero covectors at which no localized Fourier transform decays rapidly in a conic neighborhood. A scalar Hadamard bisolution W on a globally hyperbolic spacetime has WF(W)={(x,k;y,-l):(x,k)~(y,l), k future null}; ~ denotes null-geodesic cotangent transport. The field operator, sign convention and antisymmetric part iΔ must be fixed separately.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

**Proof or well-definedness route.** Define chart localization and all conic seminorms, verify chart invariance by nonstationary phase; define geodesic relation without claiming existence of W.

#### thm-qftx-wavefront-product — Product and pullback under wavefront transversality

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** If u,v are distributions and no (x,k) in WF(u) has (x,-k) in WF(v), their product is a distribution, agrees with multiplication of smooth functions, and has wavefront contained in the nonzero covector sums of WF(u) union the zero section and WF(v) union the zero section. A pullback f*u exists when WF(u) misses the conormal obstruction N_f.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-wavefront-hadamard` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Partition into compact chart patches; split Fourier convolution into cones on which at least one factor has arbitrary decay, estimate against finite-order growth of the other; prove continuity in the corresponding wavefront topology. Apply to diagonal pullback of u⊗v. This is a new substantive proof obligation, not an unnamed theorem citation.

#### prop-qftx-hadamard-wick-change — Smooth Hadamard change gives equivalent Wick algebras

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For two scalar Hadamard two-point distributions W,W′ with the same antisymmetric part and positive-frequency relation, their difference is smooth. On compactly supported polynomial microcausal functionals, contraction products are defined coefficientwise and exp(ℏ〈W′−W,δ²〉/2) intertwines the two products.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-wavefront-product` — exact carrier/interface in suppliers.json.

`thm-qft-regular-wick-star-associativity` — exact carrier/interface in suppliers.json.

`lem-qft-regular-normal-order-isomorphism` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** First show the difference is symmetric; symmetry reverses the future relation into the past relation, whose intersection is empty, so its wavefront is empty. For each finite polynomial degree expand contractions and verify the intertwiner by the binomial identity. Specify microcausal derivative wavefront exclusions and compact support; no product on the diagonal is inferred without the wavefront check.

### B interfaces

#### cex-qftx-square-delta — Delta-square is outside the product contract

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** The diagonal product δ_0² is not furnished by the wavefront product theorem: WF(δ_0) contains opposite nonzero covectors. A mollifier square has mass proportional to ε^{-n}, and no distribution limit exists without subtraction.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-wavefront-product` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute ∫ε^{-2n}ρ(x/ε)²f(x)dx=ε^{-n}∫ρ(y)²f(εy)dy for nonnegative ρ and f=1 near zero.

## qftx-causal-renormalization — All-order scalar causal extension and finite renormalization

A page `qftx-causal-renormalization`; B companion `qftx-causal-renormalization-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-microlocal-products`, `qft-ir04`, `qft-ir05`, `qftx-analytic-prerequisites`.

The inductive construction addresses overlapping diagonals by increasing vertex number. It does not take a product of already singular total-diagonal extensions. For n inputs, every configuration not all coincident admits a nonempty causal split after the usual causal cover; lower-order causal products define the same distribution on intersections. Translation invariance reduces the new extension to R^{4(n−1)} at its origin. The permitted counterterm order is floor(sd)−4(n−1); negative order means uniqueness. The forest of proper subconfigurations records precisely what has already been extended. A global Lorentz-covariant scalar normalization requires the finite-dimensional Lorentz cocycle splitting argument and unitarity symmetrization; these are owed inside the planned theorem, with no claim that single-point extension alone proves them. The physical QED Ward system is outside this scalar theorem and is treated cohomologically below.

### A interfaces

#### def-qftx-local-time-ordered-system — Local scalar time-ordered product contract

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** On flat four-dimensional Minkowski space take compactly supported local polynomial scalar functionals, formal parameters g and ℏ, and the off-shell free field algebra. A renormalization prescription is a family T_n, T_0=1,T_1 fixed, satisfying symmetry, causal factorization, translation covariance, field independence, the stated scaling bound, and formal unitarity. Gauge identities are additional conditions.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-wavefront-hadamard` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Specify variational derivative wavefronts, relative coordinates at each total diagonal, anti-time-ordering and involution. No positivity of formal coefficients is assumed.

#### thm-qftx-scalar-eg-induction — Scalar Epstein–Glaser induction at finite perturbative order

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For the stated free scalar polynomial algebra, time-ordered products satisfying the scalar contract can be constructed at every finite order; at each graph order the extension ambiguity is a finite linear combination of derivatives of delta distributions on relevant diagonals, bounded by the specified scaling degree. This yields a formal series, with no convergence or adiabatic limit assertion.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-local-time-ordered-system` — exact carrier/interface in suppliers.json.

`thm-qftx-wavefront-product` — exact carrier/interface in suppliers.json.

`thm-qft-finite-scaling-degree-extension` — exact carrier/interface in suppliers.json.

`prop-qft-local-counterterm-jet-classification` — exact carrier/interface in suppliers.json.

`lem-qftx-finite-lorentz-cocycle-splitting` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Induct in n: causal-order open sets cover the complement of the total diagonal; lower-order factorizations agree on overlaps by associativity/locality. Glue using a locally finite partition of unity, reduce to relative coordinates, extend each numerical distribution by the scaling-degree theorem, symmetrize and impose scalar normalization conditions. Prove the needed finite graph scaling bounds using derivative kernel estimates. Partial diagonals are already resolved by the induction, not independently multiplied. Lorentz covariance needs the finite-dimensional cocycle correction proved locally; include it as part of this theorem proof rather than assume it.

#### prop-qftx-finite-renormalization-composition — Renormalization maps form a formal composition group

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** Given two admissible scalar time-ordered systems S and S′ with the same first-order normalization, there is a unique local formal map Z(V)=V+O(V²), Z(0)=0, Z′(0)=id, such that S′=S∘Z. Composition and recursively defined formal inverse preserve the local support and normalization conditions.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-scalar-eg-induction` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** At homogeneous order n subtract all known lower partitions; the difference is supported on the total diagonal. Define Z_n to be that local difference with exact factorial conventions. Composition uses finite partitions of n, hence is coefficientwise finite. Invert recursively, showing the leading unknown occurs linearly.

### B interfaces

#### ex-qftx-two-vertex-log — Two-vertex scalar logarithm and its local ambiguity

Kind: `example`; domain: `mathematics`.

**Statement / definition.** In four dimensions the two-vertex four-point scalar graph has scaling degree four in its relative variable; its renormalized extension may differ by cδ. The scale difference is local, not a numerical scattering probability.

**Statement references.**

[Reading ledger: eg](sources.md#eg)

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-scalar-eg-induction` — exact carrier/interface in suppliers.json.

`prop-qft-four-dimensional-log-scale-anomaly` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the old exact Euclidean log residue as a worked normalization example; keep the Euclidean kernel distinct from its Lorentzian boundary-value counterpart.

## qftx-renormalization-hopf — Rooted forests, Hopf antipodes and subtraction recursion

A page `qftx-renormalization-hopf`; B companion `qftx-renormalization-hopf-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-causal-renormalization`.

For a primitive tree τ, Δτ=τ⊗1+1⊗τ and φ_-(τ)=−Rφ(τ). For a ladder of length two the reduced coproduct is τ⊗τ; the preparation is φ(t)−Rφ(τ)φ(τ). If φ(τ)=a/ε+b, the added term is −a²/ε²−ab/ε. Its coefficients demonstrate why primitive subtraction is inadequate for nested subdivergences. Coassociativity equates all legal orders of recursive preparation. The theorem uses a commutative character target and Laurent projection with its explicitly checked Rota–Baxter identity. To apply it to actual scalar graphs one must construct the graph-to-forest insertion map with symmetry factors and verify compatibility with the chosen regularization; that identification is a declared future model interface, not silently claimed here. The rooted-tree theorem itself is fully specified and independently useful.

### A interfaces

#### def-qftx-rooted-forest-hopf — Admissible-cut Hopf algebra for subdivergence forests

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** H is the polynomial algebra over Q on finite nonempty rooted trees, graded by vertices. Δ(t)=t⊗1+1⊗t+Σ_c P_c(t)⊗R_c(t), summing cuts with at most one cut edge on each root-to-leaf path; extend Δ multiplicatively. ε kills positive degree. This is a rooted-tree subtraction model, not an automatic Hopf algebra of every gauge graph.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

**Proof or well-definedness route.** Define the empty forest unit, trunk and pruned forest, and distinguish full cut from empty cut to avoid double counting.

#### thm-qftx-cut-hopf-antipode — Admissible cuts give coassociativity and recursive antipode

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** The rooted-forest coproduct is coassociative and H is a connected graded bialgebra. Its antipode is S(t)=−t−Σ_c S(P_c(t))R_c(t), extended by the convolution inverse, and this recursion terminates in every fixed degree.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-rooted-forest-hopf` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Identify iterated coproduct terms with two-level nested prunings of a tree; both orders encode the same three layers. All proper factors have fewer vertices, so degree induction yields both convolution inverse identities. Prove multiplicativity of the antipode in the commutative case.

#### thm-qftx-subtraction-character-factorization — Subtraction characters and forest cancellation

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Let A=A_-⊕A_+ be a commutative Laurent-series algebra split into negative powers and nonnegative powers, with projection R onto A_-. For a character φ:H→A, set φ_-(t)=−R[φ(t)+Σ_c φ_-(P_c(t))φ(R_c(t))] and φ_+=φ_-*φ. Then φ_- and φ_+ are characters, φ_+ takes positive-degree values in A_+, and the recursion is degreewise finite.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-cut-hopf-antipode` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Verify R(a)R(b)=R(R(a)b+aR(b)−ab) directly by the Laurent splitting. Use this identity and the multiplicative coproduct to prove by degree induction that the recursion preserves products. Expand φ_+ and cancel the negative part; this is the exact Hopf utilization in subtraction, without importing an unproved full Feynman-graph identification.

### B interfaces

#### ex-qftx-nested-two-loop-subtraction — Nested subdivergence has a nontrivial convolution counterterm

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For the two-vertex ladder t with one proper cut and one-vertex tree τ, φ_-(t)=−R(φ(t)+φ_-(τ)φ(τ)); subtracting only Rφ(t) generally differs.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-subtraction-character-factorization` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Choose φ(τ)=a/ε+b and φ(t)=c/ε²+d/ε+e and calculate the a²/ε² and ab/ε corrections explicitly.

## qftx-bv-brst — Off-shell gauge complexes, BRST doublets and anomaly obstructions

A page `qftx-bv-brst`; B companion `qftx-bv-brst-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-causal-renormalization`, `qft-mg01`.

This branch gives an actual finite-jet calculation, not a slogan equating BRST cohomology to gauge invariance. Nilpotence is checked on each generator and then extends as a derivation. h lowers ghost number by one, N counts the selected nonminimal jets, and [N,s]=0. A finite polynomial decomposes into finitely many N-eigenspaces, so division by k>0 is legitimate. Local-form cohomology requires the extra anticommutation with the horizontal exterior derivative; integrated counterterms are classes modulo total derivatives with compact support. The obstruction theorem assumes the anomalous breaking is local. Constructing a positive physical Hilbert quotient, solving the quantum master equation to all orders and establishing a non-Abelian quantum action principle are separate obligations, not consequences of this homotopy.

### A interfaces

#### def-qftx-abelian-local-brst — Abelian local jet BRST differential

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** On the graded-commutative algebra of finite jets of a U(1) connection A, odd ghost c, antighost cbar and even auxiliary B, define sA=dc, sc=0, scbar=B,sB=0, and commute s with spacetime derivatives. On a charged matter field ψ of charge q set sψ=iqcψ and use the graded Leibniz rule. Work off shell with explicit ghost numbers.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`def-qft-qed-gauge-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Specify coefficients as smooth functions of spacetime and finite polynomial jet dependence. A state-space charge is not part of this algebra.

#### lem-qftx-brst-nilpotence-doublets — Nilpotence and contraction of nonminimal doublets

Kind: `lemma`; domain: `mathematics`.

**Statement / definition.** The stated Abelian s squares to zero. Adjoining finitely many jet doublets su=v,sv=0 independent of the other transformations does not change polynomial BRST cohomology: every closed expression of strictly positive doublet degree is exact.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`def-qftx-abelian-local-brst` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** On generators s²A=dsc=0, s²ψ=iq(sc)ψ−iqc(iqcψ)=0 because c²=0. Define h=u∂_v with graded derivatives and N counting doublet jets; sh+hs=N. Decompose finite polynomials by N-degree; closed a_k with k>0 equals s(h a_k/k). Carry ghost parity in every derivative.

#### prop-qftx-anomaly-obstruction — Wess–Zumino consistency is an obstruction class

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** If a nilpotent BRST Ward identity first fails at formal order ℏ^n by a local ghost-number-one integrated functional A, the nilpotence identity forces sA=0 modulo total derivatives. A local counterterm cancels this failure exactly when [A]=0 in H^1(s|d), with the sign fixed by the chosen Ward convention.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`lem-qftx-brst-nilpotence-doublets` — exact carrier/interface in suppliers.json.

`thm-qftx-scalar-eg-induction` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Expand the squared Ward differential at the first failing order; lower-order failures vanish. A counterterm changes A by sB+dC. Conversely a cohomologically trivial representative supplies that counterterm. This proves the obstruction principle conditional on locality of the breaking; the quantum action principle is an additional theorem obligation in a gauge model, not a consequence of scalar extension.

### B interfaces

#### ex-qftx-doublet-removal — Gauge-fixing doublets cannot create a new polynomial class

Kind: `example`; domain: `mathematics`.

**Statement / definition.** If sa=0 and a has doublet degree two, then a=s(ha/2). This is not a proof that all physical ghost-number-zero classes have positive Hilbert norm.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`lem-qftx-brst-nilpotence-doublets` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply the homotopy identity, checking the doublet degree and no dependence of minimal transformations on the doublets.

## qftx-anomaly-cocycles — Current-algebra cocycles and conditional chiral anomaly cancellation

A page `qftx-anomaly-cocycles`; B companion `qftx-anomaly-cocycles-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-bv-brst`.

Cocycles furnish a concrete Lie-algebra use: the extra current commutator is consistent because the invariant bilinear form and circle derivative give an exact 2-cocycle. This is compatible with a projective representation, but no existence or unitarity of a positive-energy representation is inferred from the cocycle alone. In four dimensions the triangle/descent identification and one-loop-exactness require a separate full proof. The planned interface records its precise tensor and model prerequisites, so later authors cannot use an unnamed anomaly theorem. The present pair proves the loop-algebra extension and finite charge cancellations only. It records chiral/global anomaly classification as source-backed context until its theorem is locally authored.

### A interfaces

#### def-qftx-loop-current-cocycle — Loop current Lie algebra and central term

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a finite-dimensional Lie algebra g with invariant symmetric form κ, let Lg=C∞(S¹,g) with pointwise bracket and define ω(X,Y)=(1/2π)∫_0^{2π}κ(X,∂θY)dθ. The central extension has bracket [(X,a),(Y,b)]=([X,Y],ω(X,Y)).

**Statement references.**

[Reading ledger: brst](sources.md#brst)

**Proof or well-definedness route.** Define invariant form by κ([X,Y],Z)=κ(X,[Y,Z]); periodicity fixes the boundary term. No quantized level or physical representation is inferred.

#### prop-qftx-loop-cocycle-jacobi — The Schwinger term obeys the Lie cocycle condition

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** ω is antisymmetric and ω([X,Y],Z)+ω([Y,Z],X)+ω([Z,X],Y)=0. Hence the central bracket obeys Jacobi.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`def-qftx-loop-current-cocycle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Integrate ∂θκ(X,Y) to zero for antisymmetry. Use invariance and the Leibniz rule to express the cyclic sum as ∂θκ(X,[Y,Z]); its integral vanishes. Check the original g Jacobi and central coordinate independently.

#### def-qftx-chiral-anomaly-interface — Four-dimensional chiral anomaly coefficient interface

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a specified four-dimensional left-handed Weyl matter content in representations R_i, define d^{abc}=Σ_i tr_{R_i}(T^a{T^b,T^c}). An anomaly-cancellation statement requires a regulator/renormalization construction that identifies the local consistent anomaly with the descent class of this tensor, specifies mixed gravitational and global anomalies separately, and carries all loop hypotheses. Vanishing d alone is not defined to prove a nonperturbative gauge theory.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`prop-qftx-anomaly-obstruction` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** This is an explicit interface, with a future descent-and-triangle theorem obligation rather than an unproved theorem premise. Vectorlike U(1) pairing q,−q cancels Σq³ algebraically; it says nothing by itself about global anomalies.

### B interfaces

#### ex-qftx-vectorlike-charge-cancellation — Vectorlike charges cancel cubic and linear sums

Kind: `example`; domain: `mathematics`.

**Statement / definition.** A pair of left-handed charges q and −q has q³+(−q)³=0 and q+(−q)=0, so it cancels the Abelian cubic and mixed linear charge tensors in the specified anomaly interface.

**Statement references.**

[Reading ledger: brst](sources.md#brst)

`def-qftx-chiral-anomaly-interface` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Calculate the polynomial sums. Do not promote this necessary algebraic test to all-order construction or a global anomaly theorem.

## qftx-heavy-field-eft — Gaussian matching and a rigorous derivative-expansion remainder

A page `qftx-heavy-field-eft`; B companion `qftx-heavy-field-eft-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-ir02`, `qftx-analytic-prerequisites`.

Complete the finite Gaussian square: χ=K^{-1}J+η gives 〈χ,Kχ〉/2−〈J,χ〉=〈η,Kη〉/2−〈J,K^{-1}J〉/2. Thus integration yields the nonlocal quadratic matching kernel exactly. The geometric identity then makes its local derivative expansion quantitative. With A=−Δ and J spectrally supported in |p|≤E, Plancherel turns the scalar bound into the displayed norm and action estimates. This proves one genuine EFT truncation contract. It does not promise the same estimate for arbitrary interacting matching, thresholds, nonlocal massless loops or unrestricted sources. The shell semigroup identifies an exact Wilsonian operation at finite regulator; differentiating it into a Polchinski equation needs differentiability and a specified covariance path, which must be checked before use.

### A interfaces

#### def-qftx-heavy-gaussian-data — Positive heavy-mode Gaussian matching data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let K be a positive self-adjoint operator on a Hilbert space with spectrum in [M²,∞), M>0, and let J be a vector. In a finite regulator, integrate a real Gaussian heavy coordinate χ with quadratic action 〈χ,Kχ〉/2−〈J,χ〉. Its normalized elimination contributes −〈J,K^{-1}J〉/2 to the effective action. Determinants are finite-regulator quantities. AC is retained through the spectral-calculus supplier.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-positive-unbounded-spectral-calculus` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Define finite-dimensional Gaussian integration first, then the spectral quadratic form expression; do not invent an infinite-dimensional Lebesgue measure.

#### thm-qftx-heavy-derivative-bound — Low-momentum matching has a controlled remainder

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Let K=M²+A with A≥0 self-adjoint and J in its spectral subspace 0≤A≤E². For N≥0, K^{-1}J=M^{-2}Σ_{r=0}^N(−A/M²)^rJ+R_NJ, with ||R_NJ||≤M^{-2}(E²/M²)^{N+1}||J||. Consequently the induced quadratic-action remainder is at most ||J||²( E²/M²)^{N+1}/(2M²). AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-heavy-gaussian-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the scalar identity (1+x)^{-1}=Σ_{r=0}^N(−x)^r+(−x)^{N+1}/(1+x), then spectral calculus on the finite low-energy band. Bound 1/(1+x)≤1 for x≥0; no asymptotic assumption is required for the identity, but usefulness requires E/M<1.

#### prop-qftx-finite-gaussian-shell-semigroup — Successive Gaussian shell integration composes

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For independent finite Gaussian variables with covariances C_1,C_2≥0, define exp(−V_C(φ))=E_C exp(−V(φ+ζ)) whenever the integral is positive finite. Then exp(−(V_{C_1})_{C_2})=exp(−V_{C_1+C_2}); additive vacuum constants follow the chosen normalization. AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`def-qftx-heavy-gaussian-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use Fubini for nonnegative integrands and the characteristic-function proof that independent Gaussian sums have covariance sum. State stability/integrability hypotheses; formal logarithm is an alternative algebraic interpretation, not analytic existence.

### B interfaces

#### cex-qftx-eft-outside-band — A derivative truncation needs its energy band

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** For A acting by p² with no low-energy spectral restriction, the Nth polynomial approximation to (M²+p²)^{-1} has no uniform remainder bound of the stated low-energy size on all momenta. AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

`thm-qftx-heavy-derivative-bound` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** For fixed N let p²/M²→∞ and inspect the exact scalar remainder.

## qftx-scale-cocycles — Scale cocycles, finite scheme changes and controlled RG equations

A page `qftx-scale-cocycles`; B companion `qftx-scale-cocycles-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-causal-renormalization`, `qftx-heavy-field-eft`.

The cocycle derives from two actions on one formal local algebra; it is not postulated as an exact flow of measured constants. Associativity and uniqueness of Z fix the order. A one-loop coefficient requires an actual renormalized graph calculation, a subtraction convention and the relation between the formal coupling and its chosen observable definition. No numerical QED beta coefficient is promised by the ODE alone. Conversely the ODE result is exact for its stated differential equation and its leading scheme-invariance claim is a coefficient calculation. This closes the vocabulary gap between engineering power counting, finite renormalization and a genuine error-controlled EFT estimate supplied by the heavy-field pair.

### A interfaces

#### def-qftx-scaling-cocycle — Formal scaling and renormalization cocycle

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let σ_ρ be the engineering-scaling automorphism of the specified formal scalar S-matrix algebra, ρ>0. Define Z_ρ by σ_ρ S σ_ρ^{-1}=S∘Z_ρ when both systems obey the causal normalization contract. Z_ρ is a formal local map, not a physical measurement of running charge.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

[Reading ledger: renorm](sources.md#renorm)

`prop-qftx-finite-renormalization-composition` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Specify scaling of spacetime, mass and field and distinguish a cocycle from a one-parameter subgroup when masses scale.

#### prop-qftx-scale-cocycle-law — Scaling yields the twisted composition law

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For the stated convention, Z_{ρτ}=Z_ρ∘(σ_ρ Z_τ σ_ρ^{-1}). If σ acts trivially on this renormalization subgroup the law reduces to Z_{ρτ}=Z_ρ∘Z_τ; otherwise it need not be a group homomorphism.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

[Reading ledger: renorm](sources.md#renorm)

`def-qftx-scaling-cocycle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply σ_ρ to the equation for τ, substitute the equation for ρ, and use uniqueness of the finite renormalization map. Check composition order rather than commuting nonlinear maps.

#### thm-qftx-truncated-rg-ode — One-coupling truncated RG flow and scheme invariance

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For the model beta equation dg/dt=bg², real initial g_0, its solution is g(t)=g_0/(1−bg_0t) on the maximal interval avoiding its pole. Under an invertible formal scheme change g′=g+ag²+O(g³), the leading beta coefficient b is unchanged. The pole is a property of this truncated equation, not a theorem about an ultraviolet completion.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

[Reading ledger: renorm](sources.md#renorm)

`def-qftx-scaling-cocycle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Differentiate the rational expression and use uniqueness by separation or a direct reciprocal calculation on intervals where g≠0; include the zero solution. Compute β′=(dg′/dg)β and re-expand in g′ through quadratic order.

### B interfaces

#### ex-qftx-truncation-landau-pole — A truncated Landau pole is not continuum nonexistence

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For b>0,g_0>0, the truncated solution diverges at t=(bg_0)^{-1}; omitted higher terms are not bounded near that point by the truncation theorem.

**Statement references.**

[Reading ledger: paQFT](sources.md#paqft)

[Reading ledger: renorm](sources.md#renorm)

`thm-qftx-truncated-rg-ode` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Evaluate the denominator and make the absence of a remainder estimate explicit.

## qftx-on-shell-amplitudes — Spinor helicity, rational factorization and tree recursion

A page `qftx-on-shell-amplitudes`; B companion `qftx-on-shell-amplitudes-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-mx02`, `qft-mg03`, `qft-mf03`.

For a two-line shift choose λ_i(z)=λ_i+zλ_j and λtilde_j(z)=λtilde_j−zλtilde_i, leaving λtilde_i and λ_j fixed. Each shifted momentum remains rank one and the added outer products cancel in total momentum. At fixed multiplicity a tree amplitude is rational away from collinear/reference singularities. Write A(z)/z as a partial-fraction expansion: its coefficient of 1/z at infinity is zero if A decays; summing finite residues then gives A(0) with the displayed minus sign. This separates the mathematical recursion from model-specific large-z estimates and factorization. Tree rational identities do not establish loop integration, nonperturbative S-matrices, or convergence of gravity perturbation theory. Color-kinematics and double-copy remain conditional framework context unless their complete numerator/Jacobi interfaces are authored.

### A interfaces

#### def-qftx-spinor-helicity — Complex null momenta and helicity weights

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a complex null four-momentum in the explicitly translated effective Clifford metric −η, the 2×2 momentum matrix has rank one and factorizes as λ_a λtilde_adot. The rescaling (λ,λtilde)↦(tλ,t^{-1}λtilde), t≠0, leaves momentum invariant. An outgoing helicity-h amplitude has weight t^{-2h}. Angle and square brackets use fixed alternating tensors.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

`def-qft-dirac-projections` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Choose momentum matrix and epsilon signs once; factor rank-one matrices by choosing a nonzero column, and verify transition rescalings. Complex momenta do not impose conjugation of the two spinors.

#### thm-qftx-rational-bcfw-residue — Tree recursion under an explicit vanishing-boundary hypothesis

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Let A(z) be a rational shifted tree amplitude, regular at z=0, with only simple finite factorization poles z_i and A(z)→0 as z→∞. Then A(0)=−Σ_i Res_{z=z_i} A(z)/z. If each residue is the stated product of lower-point on-shell amplitudes divided by the propagator derivative and summed over internal helicities, this gives BCFW recursion. A boundary term is required when decay fails.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

`def-qftx-spinor-helicity` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Prove the rational identity by partial fractions, so no unexplained complex-analysis theorem is needed. Construct the two-line spinor shift preserving nullness and total momentum. Insert the assumed factorization residues; proving factorization and large-z behavior for a chosen Lagrangian is a separate model obligation.

#### prop-qftx-helicity-polarization-ward — Reference-spinor changes are pure gauge

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For a massless vector polarization defined with a reference spinor having nonzero denominator, changing the reference changes the polarization by a scalar multiple of its momentum. Therefore contraction with a conserved on-shell tree current is reference independent.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

`def-qftx-spinor-helicity` — exact carrier/interface in suppliers.json.

`lem-qft-qed-tree-ward` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the two-dimensional Schouten identity to compute the difference. Translate the old QED on-shell Ward identity into the spinor convention. Singular reference choices are excluded.

### B interfaces

#### cex-qftx-bcfw-contact-boundary — A constant contact amplitude needs the boundary term

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** A nonzero constant scalar four-point contact amplitude has no finite shifted poles but A(0)≠0. A recursion that drops the residue at infinity would give zero.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

`thm-qftx-rational-bcfw-residue` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Take A(z)=λ≠0. The omitted boundary contribution equals λ.

## qftx-inclusive-soft-model — Soft coherent radiation, resolution and inclusive cancellation

A page `qftx-inclusive-soft-model`; B companion `qftx-inclusive-soft-model-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-mx03`, `qft-mg03`.

Fock factorization Γ(H_<⊕H_>)≅Γ(H_<)⊗Γ(H_>) takes a coherent state to the product of the two coherent states. The number generating function on a band is exp(λ(z−1)), so summing unresolved counts is an exact finite-cutoff calculation. The infrared-divergent exclusive vacuum overlap is canceled only for the defined inclusive event; the family of coherent vectors can still fail to be Cauchy. Full Bloch–Nordsieck/KLN cancellation in interacting QED additionally requires virtual amplitudes, charged asymptotic-state qualifications and a specified infrared-safe observable. Those missing proofs are not hidden in this model identity.

### A interfaces

#### def-qftx-resolved-soft-poisson — Independent soft-radiation resolution model

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For an explicitly prescribed conserved eikonal current and cutoffs 0<ε<Δ<Λ, take a free-photon coherent state whose mode intensity is dν=C dω/ω on the selected angular region, C≥0. Counts in disjoint frequency intervals are independent Poisson variables. Δ is a detector resolution in this model.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`thm-qft-example-soft-current-angular-coherent` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Derive the independent Poisson law by factorizing bosonic Fock space over orthogonal frequency bands and using the coherent exponential vector. Do not assume an interacting QED state.

#### prop-qftx-soft-unresolved-cancellation — Summing unresolved emissions removes the lower cutoff

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** In the specified independent coherent model, the exclusive no-emission weight in (ε,Λ) is exp(−C log(Λ/ε)). Summing all counts in (ε,Δ) multiplies it by exp(C log(Δ/ε)), leaving the no-resolved-emission probability exp(−C log(Λ/Δ)), independent of ε.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`def-qftx-resolved-soft-poisson` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Expand the Poisson generating function Σ_n λ^n/n!=e^λ and cancel the ε logarithms. Require finite cutoffs before summation; the result concerns a finite-resolution event, not a Fock norm limit.

#### prop-qftx-soft-energy-finite — Photon number divergence and finite soft energy coexist

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For the same intensity, E[N_(ε,Δ)]=C log(Δ/ε) diverges as ε↓0 when C>0, while expected radiated energy in that band is ℏC(Δ−ε) if ω denotes angular frequency. A finite energy expectation does not imply convergence of the coherent displacement in one-particle norm.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`def-qftx-resolved-soft-poisson` — exact carrier/interface in suppliers.json.

`lem-qft-qed-coherent-ir-obstruction` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Integrate 1 and ℏω against C dω/ω, then use the old coherent norm obstruction. Keep ω as s^{-1}; if using inverse length k, restore ℏc instead.

### B interfaces

#### ex-qftx-resolution-probability — Detector resolution changes a finite inclusive event

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For C>0 the no-resolved-emission probability is (Δ/Λ)^C, increasing with Δ in (0,Λ). This is a model law and no empirical count dataset is asserted.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`prop-qftx-soft-unresolved-cancellation` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Differentiate or compare positive powers for two resolutions.

## qftx-local-algebras — Causal propagators, time slice and algebraic locality

A page `qftx-local-algebras`; B companion `qftx-local-algebras-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-mf02`, `qftx-microlocal-products`, `qft-mc03`.

The time-slice proof is an exact propagation statement for a specified free hyperbolic operator. It needs Green maps and Cauchy uniqueness, which are explicitly listed as new authoring obligations rather than inferred from the flat Fourier example. The net functor acts only on causal, orientation/time-orientation preserving embeddings with compatible operators. Reeh–Schlieder requires spectrum, vacuum cyclicity, weak additivity and a tube-boundary uniqueness theorem; the accessible source proof invokes edge-of-the-wedge. That complex-analytic result is not supplied by the present pair, so Reeh–Schlieder and local factor type remain nonlogical context. The no-signalling identity is independent: Σω(M_r*BM_r)=ω(BΣM_r*M_r)=ω(B). It prevents misreading cyclicity or vacuum entanglement as a deterministic remote preparation protocol.

### A interfaces

#### def-qftx-green-hyperbolic-interface — Green-hyperbolic free scalar interface

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** On a smooth oriented time-oriented globally hyperbolic Lorentzian spacetime without boundary, let P be a real normally hyperbolic formally self-adjoint scalar operator. Retarded and advanced Green maps E± act on compact smooth tests, satisfy PE±=E±P=id there and have future/past causal support; E=E−−E+ fixes the symplectic sign convention.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

**Proof or well-definedness route.** Specify the volume pairing, real solution space with spacelike-compact support and quotient D(M)/PD(M). Construct Green maps by local hyperbolic energy estimates and Cauchy evolution as an explicit new proof obligation.

#### thm-qftx-free-time-slice — The free Weyl algebra obeys time slice

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Assume the stated Green maps exist with uniqueness of the smooth Cauchy problem. If an open neighborhood N contains a Cauchy surface, every compact test class modulo PD(M) has a representative supported in N. Consequently the induced Weyl algebra map from N onto M is surjective, and is an isomorphism when the inherited symplectic quotient is injective.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`def-qftx-green-hyperbolic-interface` — exact carrier/interface in suppliers.json.

`lem-qft-scalar-local-weyl-algebra` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Choose two nearby Cauchy surfaces within N around the causal support of the particular compact test, introduce a smooth time cutoff χ, and use commutator [P,χ]E f to replace f modulo P with a compact test in N. Prove compactness by global hyperbolicity and check signs against E−−E+. Prove injectivity by extending the local Cauchy solution uniquely, rather than assume it for arbitrary noncausal embeddings.

#### prop-qftx-local-projection-no-signal — Local trace-preserving instruments preserve spacelike expectations

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For commuting local algebras A and B represented on a Hilbert space, a finite family M_r in A with ΣM_r*M_r=I leaves the expectation of every bounded B in B unchanged under the nonselective operation ω′(B)=Σω(M_r*BM_r). Selective postselection need not preserve it.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`lem-qft-finite-instrument-normalization` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Move B past M_r and M_r* and use normalization. This is algebraic and does not need a tensor-product decomposition of the Hilbert space.

### B interfaces

#### ex-qftx-postselection-conditioning — Conditional changes do not give a nonselective signal

Kind: `example`; domain: `mathematics`.

**Statement / definition.** In a two-qubit Bell state, selecting a local projection changes the other qubit conditional state, while averaging both normalized outcomes restores its initial marginal.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`prop-qftx-local-projection-no-signal` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute the two rank-one projections and their probability one half; retain conditioning and average separately.

## qftx-reflection-positive-limits — Euclidean positivity, controlled limits and reconstruction boundaries

A page `qftx-reflection-positive-limits`; B companion `qftx-reflection-positive-limits-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-ir02`, `qft-mc02`.

This repairs the frequent finite-measure-to-QFT gap. Positivity of ∫|F|²dμ is different from positivity of ∫overline{F(θφ)}F(φ)dμ. The two-site counterexample proves the distinction with a genuinely positive probability measure. For the free scalar the half-space Laplace representation supplies the extra positivity. Distributional convergence passes each fixed reflection quadratic form, but it does not automatically yield the corrected OS uniform-in-order regularity or clustering. A complete OS reconstruction must build the null quotient, prove positive-time translations define a strongly continuous contraction semigroup, obtain its positive self-adjoint generator, analytically continue distributions with the corrected growth estimates and prove locality and the spectrum condition. These named steps are explicit future proof obligations; no OS reconstruction theorem is currently used as a load-bearing supplier.

### A interfaces

#### def-qftx-euclidean-limit-data — Schwinger limit and uniform growth data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** A regulated hierarchy S_n^a on Euclidean test spaces is reflection positive when Σ_{m,n}S_{m+n}^a(Θf_m⊗f_n)≥0 for every finite positive-time test sequence. A continuum-limit contract specifies distributional convergence for every n, uniform continuity bounds, Euclidean invariance, symmetry, clustering and the exact corrected OS growth condition to be proved. It includes the topology and directed cutoff family.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

**Proof or well-definedness route.** Define reflection, positive-time tensor algebra and distribution pairing. The corrected OS-II regularity estimate is an unresolved local theorem-authoring input, not replaced by the original 1973 axioms.

#### prop-qftx-reflection-positivity-limit — Reflection positivity passes to a distributional limit

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** If S_n^a converge distributionally to continuous S_n for every n and all regulated hierarchies are reflection positive, then the limiting hierarchy is reflection positive. Euclidean invariance and permutation symmetry also pass when their test transformations are fixed and continuous. Clustering and uniform-in-order growth need separate uniform estimates.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-euclidean-limit-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** For a fixed finite sequence, its quadratic form has finitely many distribution pairings, each convergent, so take the limit of nonnegative real numbers. Test each covariance equality before taking the limit. No interchange of an infinite sum or large-distance limit is made.

#### prop-qftx-free-euclidean-reflection-positive — Massive Gaussian covariance has a positive reflection form

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For m>0 and f compactly supported at positive Euclidean time, C=(−Δ+m²)^{-1} has reflected quadratic form ∫d^{d−1}k/(2π)^{d−1}(2ω_k)^{-1}|∫_0∞e^{−ω_kt} fhat(t,k)dt|²≥0. Its Gaussian moment hierarchy is reflection positive.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-euclidean-limit-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Fourier transform the time variable and evaluate the elementary resolvent kernel e^{−ω|t−s|}/(2ω). Reflection changes t−s to t+s, producing a squared Laplace transform. For Gaussian polynomial tests expand Wick pairings or use exponential vectors and positivity of the one-particle kernel; prove passage from exponentials to polynomials by finite derivatives.

### B interfaces

#### cex-qftx-positive-not-reflection-positive — An ordinary positive covariance may fail reflection positivity

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** On two reflected sites a covariance matrix C with diagonal entries 1 and off-diagonal entries −r with 0<r<1 is positive definite, but the reflection form for a field on the positive site equals −r and is negative.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-euclidean-limit-data` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Its eigenvalues are 1±r>0; reflection exchanges the two sites and yields the off-diagonal entry.

## qftx-constructive-wick-two-dimensions — Two-dimensional Wick limits and a constructive interaction interface

A page `qftx-constructive-wick-two-dimensions`; B companion `qftx-constructive-wick-two-dimensions-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-reflection-positive-limits`, `qft-ir02`, `qftx-analytic-prerequisites`.

In two Euclidean dimensions C(z) behaves logarithmically at zero. For any finite n, ∫_0^1 r|log r|^n dr is finite, by r=e^{−u}, giving ∫_0∞u^n e^{−2u}du=n!/2^{n+1}. This integrability is the specific mechanism making smeared Wick powers L² objects, unlike naive pointwise products. Mollifier covariances converge to C in every local finite L^p; Jensen and translation continuity yield uniform local L^p control, including C^n. The Gaussian generating function gives E[:φ_ε^n:(f):φ_δ^n:(g)]=n!∫fg C_{ε,δ}^n, hence the Cauchy claim. A nontrivial interaction needs much stronger lower-tail estimates than L². The stable P(φ)₂ contract names them explicitly; the counterexample forbids silently exponentiating a merely L² limit. Established low-dimensional constructive theories are visible, while their full proof remains a new authoring obligation, distinct from the genuinely unresolved 4D Yang–Mills problem.

### A interfaces

#### def-qftx-two-dimensional-wick-cutoff — Massive two-dimensional Gaussian Wick powers

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let μ_C be the centered Gaussian generalized field on R² with covariance (−Δ+m²)^{-1}, m>0. For a fixed smooth approximate identity ρ_ε define φ_ε=ρ_ε*φ and Wick powers by exp(tφ_ε−t²Eφ_ε²/2)=Σ_n t^n:φ_ε^n:/n!. Tests are compact smooth functions. AC is inherited from the Gaussian-field construction.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`thm-qftx-tempered-massive-gaussian-field` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Construct μ_C by a positive characteristic functional and prove its continuity with an explicit Gaussian measure construction; this infinite-dimensional measure-existence proof is a new obligation, not finite-dimensional integration.

#### thm-qftx-two-dimensional-wick-l2 — Smeared Wick powers have a two-dimensional L² limit

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For every fixed integer n≥1 and compact smooth f, :φ_ε^n:(f) is Cauchy in L²(μ_C) as ε↓0 for the fixed mollifier family. Its limiting covariance is n!∫f(x)g(y)C(x−y)^n dxdy. The claim uses the logarithmic local singularity and exponential large-distance decay of the massive two-dimensional Green kernel. AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-two-dimensional-wick-cutoff` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Derive cross-covariance n!C_{ε,δ}(x−y)^n from the generating function. Prove |C_{ε,δ}(z)|≤K(1+|log|z||) on compact sets up to harmless mollifier averaging; use uniform integrability of powers of the logarithm, or bound the convolutions in local L^p via Jensen and translation continuity. Then dominated/uniform-integrability convergence yields the mixed L² limit.

#### def-qftx-p-phi-two-construction-contract — Stable P(φ)₂ construction contract

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a real even-degree polynomial P with positive leading coefficient, define the compact-region interaction U_Λ=∫_Λ:P(φ): and the candidate tilted measure proportional to e^{−λU_Λ}μ_C, λ≥0. A constructive supplier must prove cutoff-uniform integrability of the exponential tilt, strictly positive finite normalization, convergence of moments, and the needed infinite-volume OS/growth/clustering estimates in its stated coupling regime. L² convergence of U alone is insufficient. AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`thm-qftx-two-dimensional-wick-l2` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Reserve a local Nelson-stability/hypercontractivity theorem and cluster-expansion or correlation-inequality proof for future authoring. The accessed Summers review §3.1 identifies established P(φ)₂ results and small-coupling qualifications, but is not substituted for their full proof.

### B interfaces

#### cex-qftx-l2-not-exponential-control — Small L² error need not control an exponential tilt

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** On [0,1], U_n=−n on a set of measure e^{−n/2} and zero otherwise tends to zero in L², but ∫e^{−U_n} grows without bound. AC is inherited from the analytic construction suppliers.

**Statement references.**

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-p-phi-two-construction-contract` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute ||U_n||²=n²e^{−n/2}→0 and the exponential integral 1−e^{−n/2}+e^{n/2}.

## qftx-photon-helicity — Photon helicity bundles and exact transverse rotations

A page `qftx-photon-helicity`; B companion `qftx-photon-helicity-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-mg01`, `qft-mf01`.

The massless photon has helicity ±1; the vector carrier is an efficient constrained representation, not a three-state physical spin system. h=i n× is Hermitian because n× is real antisymmetric. The vector identity n×(n×v)=n(n·v)−v gives h²=P. Consequently P_±²=P_±, P_+P_−=0 and P_++P_−=P. For rotations, k·Rf(R^{-1}k)=(R^{-1}k)·f(R^{-1}k)=0. The generator formula includes the spin-one matrix precisely so that the derivative of transversality cancels. The Berry calculation uses local frames and patch transition functions; it never asserts a global helicity gauge. It explains the momentum/polarization coupling that invalidates a naive independent photon position/spin decomposition.

### A interfaces

#### def-qftx-photon-helicity-bundle — Transverse one-photon space and helicity projectors

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let H_T={f∈L²(R³,d³k/(2|k|);C³):k·f(k)=0 a.e.}, ignoring k=0. Put n=k/|k|, P=I−nnᵀ and h=i n× on transverse vectors. Define P_±=(P±h)/2; these are complex helicity-line subbundles over the sphere of momentum directions. Overall (2π)^{-3} factors may be retained consistently.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`def-qft-photon-transverse-space` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Check h*=h,h²=P and hP=Ph=h. Define smooth compactly supported transverse sections away from the apex as the common differential core.

#### thm-qftx-photon-rotations-helicity — Transverse rotations preserve helicity and give total angular momentum

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** U(R)f(k)=Rf(R^{-1}k), R∈SO(3), is a strongly continuous unitary representation on H_T and preserves the helicity projectors covariantly. Its differential generators on smooth compactly supported transverse sections are J=−iℏk×∇_k+ℏS, where (S_a)_{ij}=−iε_{aij}. The total J preserves transversality; bare L and S separately generally do not.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`def-qftx-photon-helicity-bundle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use radial measure invariance and covariance P(Rk)=RP(k)R^{-1}; prove strong continuity first on smooth compact sections and then by density. Differentiate the representation and k·f=0. Obtain self-adjoint generator closures from the strongly continuous one-parameter groups, rather than assert the differential core is automatically essentially self-adjoint.

#### prop-qftx-helicity-chern-obstruction — Helicity frames have nonzero Chern number

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** On the direction sphere use e_σ=(e_θ+iσe_φ)/√2, σ=±1. With connection A_σ=−i e_σ*de_σ=−σcosθ dφ, curvature F_σ=σsinθ dθ∧dφ and (2π)^{-1}∫S²F_σ=2σ. Thus no global smooth unit helicity eigenvector exists. The rank-two transverse complex bundle need not be conflated with either helicity line.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`def-qftx-photon-helicity-bundle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Differentiate spherical basis vectors, calculate the local connection and curvature. Use north/south phase gauges to obtain transition winding 2σ and prove that a global unit frame would make F exact with zero integral. State the sphere orientation and the sign convention for A.

### B interfaces

#### cex-qftx-fixed-polarization-tensor-factor — A fixed polarization frame is not covariant globally

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** A choice of constant Cartesian circular polarization at all k fails k·f(k)=0 for generic noncollinear momenta. There is no global smooth helicity basis compatible with the stated line bundles, and no canonical momentum-independent position×spin tensor factor follows.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`prop-qftx-helicity-chern-obstruction` — exact carrier/interface in suppliers.json.

`thm-qftx-photon-rotations-helicity` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Take e=(1,i,0)/√2 and momentum parallel to x; its longitudinal component is nonzero. Invoke the nonzero line Chern number only for the stronger smooth helicity-frame claim.

## qftx-photon-angular-momentum — Projected spin, orbital angular momentum and gauge-aware generators

A page `qftx-photon-angular-momentum`; B companion `qftx-photon-angular-momentum-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-photon-helicity`, `qft-mf01`.

Projected spin is physically tied to helicity, and its Cartesian components commute. This is an exact operator statement on the transverse model, not a claim that a photon has zero angular momentum. The total rotation generator still satisfies so(3). Expand [J_i−S′_i,J_j−S′_j]: the J commutator contributes iℏεJ, two cross terms subtract 2iℏεS′, giving iℏε(L′−S′). The canonical field Noether split and kinetic/Poynting angular momentum also involve gauge and boundary terms; their exact classical integral comparison belongs to EM's planned angular-momentum pair. QFT consumes only its conditions when transferring an integrated classical expectation. Quantized pointwise products of A and E require normal ordering/renormalization and are not defined by this one-particle construction. No universal gauge-independent local spin/orbital density is asserted.

### A interfaces

#### def-qftx-photon-projected-angular — Projected photon spin and orbital operators

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** On the transverse smooth core define S′_i=ℏP S_iP=ℏn_i h and L′_i=J_i−S′_i. These preserve the transverse space. The multiplication S′ is bounded; L′ is initially a core operator and its closure/domain must be established for any observable claim.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`thm-qftx-photon-rotations-helicity` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Prove PS_iP=n_i h by splitting a spin rotation into components parallel and perpendicular to n. Fix the Cartesian and projected conventions.

#### thm-qftx-photon-projected-commutators — Projected angular parts are not two independent rotation algebras

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** On the common smooth transverse core, [S′_i,S′_j]=0, [L′_i,S′_j]=iℏε_ijk S′_k, and [L′_i,L′_j]=iℏε_ijk(L′_k−S′_k). Their sum J obeys so(3). Therefore the projected spin and orbital parts do not supply commuting independent spin and orbital so(3) representations.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`def-qftx-photon-projected-angular` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** The spin multipliers commute because all are n_i times the same h. Rotational covariance gives [J_i,S′_j]=iℏε_ijkS′_k. Expand L′=J−S′ and collect both cross terms; retain all ℏ factors.

#### prop-qftx-photon-fock-angular-lift — Second-quantized total rotations and helicity counts

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** The bosonic Fock lift Γ(U(R)) has total generators dΓ(J_i), while helicity number difference N_+−N_−=dΓ(h) is conserved by free isotropic propagation. For a normalized one-photon helicity-σ wavepacket, 〈S′_z〉=ℏσ∫cosθ |f(k)|²dν(k).

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`thm-qftx-photon-projected-commutators` — exact carrier/interface in suppliers.json.

`lem-qft-second-quantized-spectrum` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Construct generators sectorwise on finite tensor powers from the rotation group; dΓ(h) uses the bounded one-particle multiplier with its particle-number domain. Evaluate the one-photon expectation directly.

### B interfaces

#### ex-qftx-nonparaxial-spin-projection — A conical helicity packet has reduced axial spin projection

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For a normalized helicity-σ packet supported near polar angle θ_0, 〈S′_z〉 approaches ℏσcosθ_0 as its angular width tends to zero. A delta-supported ideal Bessel beam is not a normalizable one-photon state in H_T.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`prop-qftx-photon-fock-angular-lift` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Bound the expectation error by ℏ sup_support|cosθ−cosθ_0|; use finite-width packets rather than a delta cone.

## qftx-photon-paraxial — Controlled paraxial spin–orbital labels and nonparaxial corrections

A page `qftx-photon-paraxial`; B companion `qftx-photon-paraxial-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-photon-angular-momentum`, `qftx-photon-helicity`.

Choose e_σ^N=e^{iσφ}e_σ. Differentiating the north frame under z rotations gives the extra σ in J_z; the e^{iℓφ} coefficient therefore has total m=ℓ+σ. The projected spin expectation is σℏ〈cosθ〉, and L′_z consequently has ℏ[ℓ+σ(1−〈cosθ〉)]. The correction is of order θ_max² with the explicit bound above. These formulas make the familiar paraxial ℓ and σ labels useful while displaying the nonparaxial spin–orbit transfer. An exactly monochromatic or exact cone Bessel mode has infinite normalization volume; use finite bandwidth and angular width. A detector's inferred OAM spectrum needs a defined mode analyzer/POVM and calibration; the mathematical decomposition alone is not an observation.

### A interfaces

#### def-qftx-paraxial-cone — Paraxial cone and regular north-patch helicity gauge

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Fix a propagation axis z and a normalized helicity-σ packet supported where 0≤θ≤θ_max<π/2 and |k| lies in a compact positive interval. A north-regular helicity frame differs from e_σ by a phase removing its north-pole singularity. In that gauge a vortex coefficient e^{iℓφ} has integer ℓ; exact J_z labels include the frame contribution.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`def-qftx-photon-helicity-bundle` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Specify patch transition and axis; distinguish azimuthal coefficient winding from an invariant global orbital label.

#### prop-qftx-paraxial-spin-error — Axial spin approaches helicity with a quantitative cone bound

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For the stated helicity packet, |〈S′_z〉−ℏσ|≤ℏ(1−cosθ_max)≤ℏθ_max²/2. If it is an exact J_z eigenpacket with eigenvalue mℏ, then 〈L′_z〉=mℏ−〈S′_z〉. These are exact expectation identities; identifying ℓ=m−σ is tied to the selected regular gauge and paraxial convention.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`prop-qftx-photon-fock-angular-lift` — exact carrier/interface in suppliers.json.

`def-qftx-paraxial-cone` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Integrate |1−cosθ| against the probability density and use 1−cosθ≤θ²/2. Derive the L′ expectation by linearity. Verify J_z on the actual frame to fix m=ℓ+σ in the north gauge.

#### prop-qftx-spin-to-orbit-constraint — Axial symmetry constrains spin-to-orbital conversion

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** If an ideal mode transformation is unitary on the declared packet space and commutes with J_z, its input and output satisfy Δ〈L′_z〉=−Δ〈S′_z〉 whenever the first moments exist. Conservation of helicity additionally requires commutation with h and is not implied by axial symmetry.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`prop-qftx-paraxial-spin-error` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use U*J_zU=J_z on its invariant domain and J_z=L′_z+S′_z. State explicitly when a focusing or scattering map is being modeled as such a unitary; no apparatus claim is inferred.

### B interfaces

#### ex-qftx-vortex-paraxial-label — A finite-energy vortex packet and its paraxial labels

Kind: `example`; domain: `mathematics`.

**Statement / definition.** A smooth radial-frequency envelope and a north-patch angular envelope vanishing suitably on the axis, multiplied by e^{iℓφ}e_σ^N, gives a normalizable transverse packet with J_z=(ℓ+σ)ℏ in the stated gauge. Its axial projected spin is generally not exactly σℏ at nonzero angular spread.

**Statement references.**

[Reading ledger: photon](sources.md#photon)

`prop-qftx-paraxial-spin-error` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Normalize the compact-support envelope, differentiate both the coefficient and polarization frame, and apply the cone bound. State the axis regularity required for ℓ≠0.

## qftx-photon-counting — Wavepacket photodetection and normally ordered correlations

A page `qftx-photon-counting`; B companion `qftx-photon-counting-examples`. Category `quantum-field-theory`; library `physics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-photon-helicity`, `qft-c01`, `qft-mf01`, `qft-g01`.

This pair retains finite wavepacket smearing and avoids undefined E^(−)(x)E^(+)(x) products. The CCR supplies the factorial moment identity; the detector postulate supplies the physical reading. A geometric law P(N=n)=(1−r)r^n has mean r/(1−r) and second factorial moment 2r²/(1−r)², so g²=2. A Poisson law has second factorial moment equal to its squared mean; a number state has n(n−1). Independent thinning scales the first two factorial moments by η and η². Finite sampling error and background subtraction require a separate statistical observation model and actual data; none is fabricated here.

### A interfaces

#### post-qftx-ideal-wavepacket-counting — Ideal mode-selective photon-counting model

Kind: `postulate`; domain: `physics`.

**Statement / definition.** For a normalized transverse wavepacket u define a_u,a_u† on bosonic Fock space and N_u=a_u†a_u. The ideal number-resolving detector postulate assigns its spectral counting law to N_u in the prepared state; normal-ordered factorial moments require that state to lie in the corresponding number-moment domains. The detector is an adopted ideal model.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`lem-qft-fock-ccr-car` — exact carrier/interface in suppliers.json.

`post-qft-free-photon-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Define one-mode Fock factorization, spectral projectors and unit efficiency/no-dark-count assumption. The measurement interpretation is a physical postulate, not a theorem of the CCR.

#### pthm-qftx-mode-g-two — Ideal one-mode intensity correlations separate model states

Kind: `physics-theorem`; domain: `physics`.

**Statement / definition.** Under the ideal counting postulate, g²(0)=〈N_u(N_u−1)〉/〈N_u〉² for positive finite mean. A coherent state has g²=1, a number state n≥1 has g²=1−1/n, and a geometric thermal occupation with positive mean has g²=2. These are model predictions, not a universal classification of radiation.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`post-qftx-ideal-wavepacket-counting` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use a_u†²a_u²=N_u(N_u−1) on the finite-particle core and extend to the stated moments. Evaluate Poisson, delta and geometric generating functions; no point electric-field operator is used.

#### pthm-qftx-binomial-detector-thinning — Ideal independent loss preserves normalized factorial correlation

Kind: `physics-theorem`; domain: `physics`.

**Statement / definition.** If each photon in the selected mode is recorded independently with fixed efficiency 0<η≤1, conditional on N the recorded count K is Binomial(N,η). Then E K=η E N and E K(K−1)=η²E N(N−1); hence g² is unchanged when its denominator is nonzero. Background/dark counts are excluded.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`pthm-qftx-mode-g-two` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Count ordered distinct detection pairs conditional on N, then use total expectation. The independence and constant efficiency are explicit apparatus assumptions.

### B interfaces

#### ex-qftx-single-photon-antibunching — A one-photon packet gives zero ideal same-mode factorial correlation

Kind: `example`; domain: `physics`.

**Statement / definition.** For the prepared one-photon state a_u†Ω, ideal g²(0)=0, and ideal independent loss produces a Bernoulli count with mean η. This does not assert zero coincidence probability for arbitrary multimode detectors with background.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`pthm-qftx-binomial-detector-thinning` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use N_u=1 and K∈{0,1}.

## qftx-ribbon-braid-representations — Quantum doubles, Hecke quotients and physical braid operators

A page `qftx-ribbon-braid-representations`; B companion `qftx-ribbon-braid-representations-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-renormalization-hopf`, `drinfeld-doubles-and-yetter-drinfeld-module-constructions`, `coxeter-artin-and-hecke-interfaces`, `noninvertible-symmetries-and-anyonic-chains`, `hecke-markov-traces-and-polynomial-link-invariants`.

Hopf multiplication and coproduct serve different roles: Δ acts on multiparticle tensor products, while the canonical R intertwines Δ with Δ^op, and τR gives exchange. The finite-double supplier fixes the actual factor order and leg conventions. On anyonic channel spaces the TL relation supplies a concrete two-eigenvalue quotient. Expand (aI+bU_i)(aI+bU_j)(aI+bU_i) minus its swapped word: it is b(a²+abδ+b²)(U_i−U_j). With a=q,b=−1 the coefficient vanishes. The inverse product is I−(q+q^{-1})U_i+U_i²=I. This derivation is independent of a braid diagram. Planned TikZ uses time upward, positive crossings as the chosen B_i, and explicitly labels associators. No arbitrary Hopf algebra is assumed to produce a unitary modular TQFT or an experimentally realized anyon.

### A interfaces

#### def-qftx-braided-line-model — Braided line representation data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let C be a braided rigid linear tensor category with specified associator and let X be an object. Choose a parenthesization of X^{⊗n}; transport adjacent braidings by the associator to define B_i. A physical adiabatic exchange interpretation additionally requires a specified gapped family, isolated state space, transport connection and error control; the categorical data alone define only exact algebraic operators.

**Statement references.**

[Reading ledger: local-hopf](sources.md#local-hopf)

[Reading ledger: local-hecke](sources.md#local-hecke)

[Reading ledger: local-tl](sources.md#local-tl)

`thm-hh-finite-double-hopf-structure-and-canonical-r` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the actual left-module braiding τR of the finite double as one supplier example. Do not assume semisimplicity, unitarity or modularity from quasitriangularity alone.

#### thm-qftx-tl-hecke-braid — Temperley–Lieb projectors give a Hecke braid representation

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Let U_i satisfy U_i²=δU_i, U_iU_{i±1}U_i=U_i and distant commutation on a vector space, and let q≠0 with δ=q+q^{-1}. Then B_i=qI−U_i are invertible, B_i^{-1}=q^{-1}I−U_i, obey braid relations and (B_i−qI)(B_i+q^{-1}I)=0. If U_i are self-adjoint, δ real and |q|=1, the B_i are unitary.

**Statement references.**

[Reading ledger: local-hopf](sources.md#local-hopf)

[Reading ledger: local-hecke](sources.md#local-hecke)

[Reading ledger: local-tl](sources.md#local-tl)

`prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb` — exact carrier/interface in suppliers.json.

`lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Multiply inverses and expand the adjacent braid difference; its coefficient is q²−qδ+1=0. Derive the quadratic relation from U²=δU. For unitarity use B_i*=q^{-1}I−U_i. The anyonic supplier has signed δ=κ_ad_a; retain that sign and choose q solving the actual δ, not an unsigned substitute.

#### prop-qftx-coxeter-specialization — Coxeter statistics is a specialization of the Hecke model

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** At q=1,δ=2, B_i=I−U_i satisfy B_i²=I, so their braid representation factors through the symmetric group. For general q the quadratic eigenvalues are q and −q^{-1}, and involutivity is not imposed.

**Statement references.**

[Reading ledger: local-hopf](sources.md#local-hopf)

[Reading ledger: local-hecke](sources.md#local-hecke)

[Reading ledger: local-tl](sources.md#local-tl)

`thm-qftx-tl-hecke-braid` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the presentation with braid and involution relations. Explain that eigenvalues can coincide at special q and no diagonalizability is claimed without additional hypotheses.

### B interfaces

#### ex-qftx-vacuum-channel-exchange — Vacuum fusion channel acquires a different exchange eigenvalue

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For U_i=δP_i with P_i an orthogonal vacuum-channel projector and δ=q+q^{-1}, B_i has eigenvalue −q^{-1} on the vacuum channel and q on its orthogonal complement.

**Statement references.**

[Reading ledger: local-hopf](sources.md#local-hopf)

[Reading ledger: local-hecke](sources.md#local-hecke)

[Reading ledger: local-tl](sources.md#local-tl)

`thm-qftx-tl-hecke-braid` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply B_i=qI−δP_i to the two ranges; this is a representation calculation, with physical exchange identification an additional model assumption.

## qftx-two-dimensional-sewing — Frobenius sewing and exact two-dimensional topological amplitudes

A page `qftx-two-dimensional-sewing`; B companion `qftx-two-dimensional-sewing-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `frobenius-algebras-and-two-dimensional-sewing`.

This is an exact utilization of the root Frobenius classification, with amplitudes obtained by a finite matrix computation rather than a path integral. The comultiplication is the inverse Frobenius pairing tensor, not an independently guessed copying map. Δ(e_i)=e_i⊗e_i/w_i yields mΔ(e_i)=e_i/w_i. A genus-g closed connected bordism is cap after g handles after cup, giving the stated sum. Algebraic nondegeneracy suffices for the oriented theory; positivity requires the separate weights condition. The root source also supplies open/closed sewing with Cardy data, but no unqualified claim that the closed algebra must equal an open algebra's center is made. The example keeps nonsemisimple models visible without extending the classification beyond its actual bordism category.

### A interfaces

#### def-qftx-frobenius-semisimple-model — Semisimple closed two-dimensional TQFT data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let A=C^r have orthogonal idempotents e_i, unit Σe_i and Frobenius trace ε(e_i)=w_i≠0. Multiplication is e_ie_j=δ_ije_i. The pairing ε(ab) is nondegenerate; Δ(e_i)=w_i^{-1}e_i⊗e_i and η(1)=Σe_i determine oriented closed surface sewing. Countable choice is inherited only through the root surface normal-form supplier.

**Statement references.**

[Reading ledger: local-frobenius](sources.md#local-frobenius)

`thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Read the root theorem with finite-dimensional commutative Frobenius hypotheses. No fully extended point-level or open sector follows without additional duality/Cardy data.

#### prop-qftx-frobenius-genus-amplitude — Handle operators give explicit genus amplitudes

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For the stated algebra the handle operator H=m∘Δ has H(e_i)=w_i^{-1}e_i; therefore a connected closed genus-g surface has Z(Σ_g)=ε(H^gη(1))=Σ_i w_i^{1−g}. The cylinder is id_A and the torus amplitude is r. Countable choice is inherited only through the root surface normal-form supplier.

**Statement references.**

[Reading ledger: local-frobenius](sources.md#local-frobenius)

`def-qftx-frobenius-semisimple-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the supplied sewing theorem to identify cap, handle and cup. Compute each diagonal factor; at g=0 recover Σε(e_i), and g=1 recover r.

#### prop-qftx-frobenius-positive-reflection — Positive weights give a compatible finite reflection form

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** With involution e_i*=e_i, the Hermitian form 〈a,b〉=ε(a*b) is positive definite exactly when all w_i are positive real. Without that condition the algebraic oriented TQFT still exists but this specified physical Hilbert interpretation fails. Countable choice is inherited only through the root surface normal-form supplier.

**Statement references.**

[Reading ledger: local-frobenius](sources.md#local-frobenius)

`def-qftx-frobenius-semisimple-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Evaluate the diagonal Hermitian form Σw_i conjugate(a_i)b_i. Necessity follows by testing e_i and sufficiency from the finite sum.

### B interfaces

#### ex-qftx-dual-number-topological-model — Nonsemisimple Frobenius sewing is also possible

Kind: `example`; domain: `mathematics`.

**Statement / definition.** A=C[x]/(x²), ε(1)=0,ε(x)=1 has nondegenerate pairing with zero diagonal and both off-diagonal entries 1, and defines a closed oriented two-dimensional TQFT, although it is not semisimple and that pairing is not positive definite. Countable choice is inherited only through the root surface normal-form supplier.

**Statement references.**

[Reading ledger: local-frobenius](sources.md#local-frobenius)

`thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute determinant −1 and associativity/commutativity; evaluate the pairing on 1±x to exhibit opposite signs.

## qftx-modular-tqft-sewing — Weighted Reshetikhin–Turaev sewing, framing anomaly and state dimensions

A page `qftx-modular-tqft-sewing`; B companion `qftx-modular-tqft-sewing-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `modular-categories-verlinde-and-tqft`, `qftx-ribbon-braid-representations`.

All topology and quantum-group representation content is used through exact draft carriers. The RT theorem supplies a symmetric monoidal functor on weighted collared ribbon bordisms and normalized sewing inverses; it does not assert that every modular category is unitary. The torus generators require care: in the actual positive Hopf/core-twist convention S²=C and (ST)³=κI, whereas the inverse Hopf convention gives (S^{-1}T)³=κC. The successor inherits those conventions rather than replacing them with a memorized projective relation. The anomaly is not erased when deriving dimensions or mapping-class actions. SU(2) level k is ℓ=k+2; the root signed TL/pivotal conversion is needed to obtain positive-trace sine data from the actual tilting category. This provides explicit quantum-group, TL and modular-functor utilization, with no claim that a formal Chern–Simons integral proves the RT theorem.

### A interfaces

#### def-qftx-weighted-topological-model — Weighted modular TQFT model and physical interpretation boundary

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Fix a complex modular ribbon fusion category C, a square root D of Σ_i d_i², anomaly κ=p_+/D, and the weighted Lagrangian ribbon bordism category with the exact Walker Maslov convention. Use the root RT state spaces and maps, including arbitrary real object Lagrangians and coupon data. A Hilbert or unitary physical model additionally requires an appropriate unitary structure; modularity alone does not provide it. Full AC and inherited countable choice are retained from the RT topology/tangle suppliers.

**Statement references.**

[Reading ledger: local-rt](sources.md#local-rt)

`thm-weighted-rt-tqft-and-factorization` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Keep AC and countable choice inherited from the root topology/tangle suppliers. The specified functor has no positivity assumption and no automatic ordinary anomaly cancellation.

#### prop-qftx-modular-dimension-sewing — Modular dimensions follow from exact sewing

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For the supplied RT theory, a closed genus-g surface has dim V(Σ_g)=Σ_i S_{0i}^{2−2g}. In particular the torus dimension is the number of simple labels. Cutting a circle yields the actual finite direct sum of dual-label channels with full multiplicities. Full AC and inherited countable choice are retained from the RT topology/tangle suppliers.

**Statement references.**

[Reading ledger: local-rt](sources.md#local-rt)

`def-qftx-weighted-topological-model` — exact carrier/interface in suppliers.json.

`cor-rt-torus-and-state-dimension-formula` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply the exact root state-dimension and Hom sewing suppliers, retaining the chosen normalization S=s/D. Demonstrate g=0 and g=1 using S²=C. No numerical modular matrix is used as category existence.

#### prop-qftx-weight-anomaly-obstruction — A nontrivial weight anomaly obstructs forgetting the weights

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** Increasing a bordism weight by one multiplies its RT map by κ. Thus if a nonzero map exists and κ≠1, this weighted theory cannot descend by simply forgetting weights while retaining identical maps. An anomaly-canceling enlargement must be specified separately. Full AC and inherited countable choice are retained from the RT topology/tangle suppliers.

**Statement references.**

[Reading ledger: local-rt](sources.md#local-rt)

`def-qftx-weighted-topological-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the weighted root functor and the cylinder or empty scalar map. Equal unweighted carriers with weights n and n+1 would have to agree, forcing κ=1.

### B interfaces

#### ex-qftx-su2-level-dimensions — SU(2) level k has k+1 torus states

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For the actual root tilting quotient with ℓ=k+2≥3, the normalized modular matrix is S_ab=√(2/(k+2))sin((a+1)(b+1)π/(k+2)), a,b=0,…,k. Its torus dimension is k+1; at k=1 the genus-g dimension is 2^g. Full AC and inherited countable choice are retained from the RT topology/tangle suppliers.

**Statement references.**

[Reading ledger: local-rt](sources.md#local-rt)

`thm-su2-root-unity-ribbon-category-is-modular` — exact carrier/interface in suppliers.json.

`prop-qftx-modular-dimension-sewing` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the actual category-existence supplier before substituting its sine data. At k=1 both S_0i=1/√2, so the genus sum is 2·(1/√2)^{2−2g}=2^g.

## qftx-finite-group-bf — Finite-group BF state sums, gauge groupoids and gluing

A page `qftx-finite-group-bf`; B companion `qftx-finite-group-bf-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-two-dimensional-sewing`.

This finite model supplies a rigorous alternative to manipulating divergent continuous BF integrals. Flatness is imposed by Kronecker deltas, the sum is finite and gauge stabilizers are retained. Tree gauge fixing removes |K_0|−1 vertex degrees, leaving one global conjugation action; therefore normalization by |G|^{|K_0|} yields |Hom|/|G|. Gluing must count an isomorphism between the two restricted boundary bundles. Merely multiplying counts for equal representatives loses automorphism factors; homotopy-fiber integration restores them. A planned diagram shows a bordism restriction span and its homotopy pullback, with arrows labeled restriction and no inference relying on the drawing. This model is topological finite gauge theory, not continuous gravitational dynamics or a proof of the Ponzano–Regge sum's convergence.

### A interfaces

#### def-qftx-finite-flat-connection-groupoid — Finite flat connection groupoid on a cell complex

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a finite connected cell complex K and finite group G, assign g_e∈G to oriented edges with g_reverse=g_e^{-1}; impose ordered product 1 around each two-cell. Vertex gauge transformations act by g_e↦h_target g_e h_source^{-1}. The finite action groupoid has cardinality Σ_[g]1/|Aut(g)|=|Flat(K,G)|/|G|^{|K_0|}.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

**Proof or well-definedness route.** Fix orientation and cell attaching words; define finite groupoid cardinality and prove orbit-stabilizer equality.

#### thm-qftx-finite-bf-topological-invariance — Finite BF partition function is a topological invariant

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For connected K the groupoid cardinality equals |Hom(π_1(K),G)|/|G|. It depends only on the fundamental-group representation groupoid and is independent of the chosen finite cell decomposition. For disconnected complexes multiply component values.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

`def-qftx-finite-flat-connection-groupoid` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Fix a spanning tree, gauge every tree edge to 1 uniquely after choosing a root gauge, and identify remaining flat edge variables with presentation homomorphisms. Residual gauge is simultaneous conjugation at the root; orbit-stabilizer gives the cardinality formula, including nonfree actions.

#### thm-qftx-finite-groupoid-gluing — Finite gauge theory gluing is weighted push–pull

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For a compact triangulated bordism M with boundary, take the finite groupoid of flat G-bundles and the restriction functors to boundary groupoids. Define state vectors as invariant functions on boundary isomorphism classes and linear maps by pullback followed by finite homotopy-fiber integration weighted by 1/|Aut|. Gluing bordisms composes these maps because bundles on a glued manifold are the homotopy fiber product, including the boundary identification isomorphism.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

`thm-qftx-finite-bf-topological-invariance` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Prove descent for edge transition functions and boundary gauge identifications explicitly. Establish finite groupoid Fubini by decomposing into orbits and stabilizers; the isomorphism variable in the homotopy fiber product is necessary. Calibrate the cylinder as identity with the same weights; state orientation reversal and complex-conjugation convention.

### B interfaces

#### ex-qftx-finite-bf-three-torus — Abelian finite BF counts on S³ and T³

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For finite abelian G, Z(S³)=1/|G| and Z(T³)=|G|² in the stated groupoid normalization. These scalar amplitudes need not equal one.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

`thm-qftx-finite-bf-topological-invariance` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** π_1(S³)=1 gives one homomorphism; π_1(T³)=Z³ gives |G|³, then divide by |G|.

## qftx-chern-simons-bf-gravity — Chern–Simons boundary geometry and the three-dimensional gravity interface

A page `qftx-chern-simons-bf-gravity`; B companion `qftx-chern-simons-bf-gravity-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-modular-tqft-sewing`, `qftx-bv-brst`.

The pair establishes the actual local variational bridge to gravity, with dimensional and nondegeneracy restrictions. CS is metric independent in the bulk but may have a nontrivial boundary phase space: the boundary variation gives the presymplectic form proportional to ∫_Σ〈δA∧δA〉 once the level and orientation convention are fixed. Gauge transformations trivial at the boundary are quotiented; nontrivial boundary transformations can carry charges. The mathematical RT construction provides exact 3D amplitudes from modular categories. Identifying them with a quantized compact Chern–Simons path integral is an additional construction theorem, not the consequence of stationary variation. Likewise the zero-Λ noncompact Lorentzian gravity gauge group is not automatically the finite SU(2) root-of-unity model. Four-dimensional constrained BF/spin-foam theories require simplicity constraints, measure/projector choices and convergence/continuum control; no four-dimensional quantum-gravity existence claim is made.

### A interfaces

#### def-qftx-cs-bf-actions — Smooth Chern–Simons and BF action data

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** On an oriented compact smooth three-manifold M let A be a connection for a Lie algebra g with invariant nondegenerate symmetric pairing. In a chosen trivialization define CS(A)=∫〈A∧dA+(1/3)A∧[A,A]〉 and BF(B,A)=∫〈B∧F_A〉, F_A=dA+[A,A]/2. B is a g-valued one-form. Boundary conditions and action/ℏ normalization are part of any physical model.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

[Reading ledger: local-rt](sources.md#local-rt)

**Proof or well-definedness route.** Define graded Lie-form brackets and invariance before variation. Global CS exponentiation on nontrivial bundles needs an integral characteristic-class normalization and level condition, not provided by the local density.

#### prop-qftx-cs-bf-variation — Bulk equations and the Chern–Simons boundary term

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** With the stated conventions, δCS=2∫_M〈δA∧F_A〉−∫_∂M〈A∧δA〉. Compactly supported variations yield F_A=0. BF variations yield F_A=0 and D_AB=0 in the bulk, with the boundary term determined by the chosen integration-by-parts convention.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

[Reading ledger: local-rt](sources.md#local-rt)

`def-qftx-cs-bf-actions` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Expand δ〈A∧dA〉, use d〈A∧δA〉=〈dA∧δA〉−〈A∧dδA〉, and vary the cubic by invariance to obtain 〈δA∧[A,A]〉. For BF retain every boundary term and derive D_AB after integration by parts.

#### prop-qftx-three-dimensional-gravity-bf — Invertible triads identify the classical zero-Λ gravity equations

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For g=so(2,1) with the vector/adjoint identification, a smooth invertible Lorentzian triad e and spin connection ω, the three-dimensional first-order zero-cosmological-constant action ∫〈e∧F_ω〉 has equations F_ω=0 and D_ωe=0. In the invertible sector these imply the torsion-free metric g=η_ab e^a⊗e^b is locally flat and solves the vacuum Einstein equations in three dimensions. Degenerate triads are additional BF configurations.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

[Reading ledger: local-rt](sources.md#local-rt)

`prop-qftx-cs-bf-variation` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use invertibility to solve torsion-free connection uniquely; express its Riemann tensor through F_ω. In 3D vacuum Ricci=0 implies full Riemann=0 by the algebraic curvature decomposition. Prove that 3D identity locally rather than import 4D dynamics. This is classical equivalence, not quantization.

### B interfaces

#### cex-qftx-degenerate-bf-triad — BF configurations include nonmetric sectors

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** e=0 and a flat ω solve the zero-Λ BF equations but e defines no nondegenerate Lorentz metric. Therefore the BF solution space cannot be identified with metric gravity without the invertibility restriction.

**Statement references.**

[Reading ledger: gravity](sources.md#gravity)

[Reading ledger: local-rt](sources.md#local-rt)

`prop-qftx-three-dimensional-gravity-bf` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Substitute e=0 into both equations and inspect det e=0.

## qftx-kz-chiral-interface — Casimir connections, braid monodromy and chiral WZW interfaces

A page `qftx-kz-chiral-interface`; B companion `qftx-kz-chiral-interface-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-anomaly-cocycles`, `qftx-ribbon-braid-representations`, `harish-chandra-isomorphism-casimir-and-central-characters`, `modular-categories-verlinde-and-tqft`.

The substantive Lie/representation use is the Casimir tensor, not the name WZW. If {x_a},{x^a} are dual, Ω=Σx_a⊗x^a is invariant under simultaneous adjoint action. That identity is exactly what kills the triple curvature terms. Distinct factors commute, and for a triple the remaining coefficient is proportional to the Arnold three-form relation, so the connection is flat. Full braid monodromy requires permutation compatibility when the modules are identical; otherwise ordered labels give pure braid transport. The affine/VOA interface explicitly retains the central level and dual-Coxeter shift. No generic monodromy is declared unitary or equal to SU(2)_k exchanges. The deep equivalence/factorization obligations are specified before a future chiral physical consumer can use them.

### A interfaces

#### def-qftx-kz-connection — Casimir KZ connection on ordered configurations

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let g be a complex semisimple Lie algebra with its nondegenerate Killing form, V_i finite-dimensional modules, and Ω_ij the pairwise Casimir tensor action on ⊗V_i. For κ≠0 define ∇=d−κ^{-1}Σ_{i<j}Ω_ij dlog(z_i−z_j) on ordered distinct points in C. Ω uses dual bases of the fixed form.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

[Reading ledger: local-lie](sources.md#local-lie)

`lem-the-casimir-element-is-independent-of-dual-bases` — exact carrier/interface in suppliers.json.

`prop-the-quadratic-casimir-element-is-central` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Prove basis independence of the Casimir, specify tensor factor order and the ordered configuration space; monodromy initially represents the pure braid group.

#### thm-qftx-kz-flatness — Infinitesimal braid identities imply KZ flatness

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** The pairwise Casimirs satisfy [Ω_ij,Ω_kl]=0 for disjoint pairs and [Ω_ij,Ω_ik+Ω_jk]=0 for distinct i,j,k. Together with the Arnold identity for dlog forms these imply ∇²=0. Parallel transport therefore depends only on endpoint-fixed homotopy and gives a pure-braid representation; equal-module permutation-equivariance gives the corresponding full braid local system.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

[Reading ledger: local-lie](sources.md#local-lie)

`def-qftx-kz-connection` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Derive [Δx,Ω]=0 from invariance of the form; tensor it into three factors for the infinitesimal braid relation. Prove the dlog Arnold identity by a common-denominator calculation. Expand curvature and group each triple. Prove homotopy invariance by differentiating transport over a two-parameter homotopy and using zero curvature.

#### def-qftx-wzw-conformal-block-interface — Integrable affine modules and conformal-block completion contract

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a compact simple simply connected group at positive integer level k, a chiral WZW/VOA interface must specify the integrable affine highest-weight modules, coinvariant conformal blocks, sewing/analytic continuation and the level shift κ=k+h∨. A claimed equivalence of KZ monodromy with a quantum-group ribbon category requires its exact associator, root parameter, semisimplification and framing convention, plus an equivalence proof.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

[Reading ledger: local-lie](sources.md#local-lie)

`thm-qftx-kz-flatness` — exact carrier/interface in suppliers.json.

`thm-su2-root-unity-ribbon-category-is-modular` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Record affine algebra central extension from the cocycle pair, then reserve Sugawara, finite-dimensionality, factorization and Drinfeld–Kohno/rational VOA tensor-category equivalence as explicit new theorem obligations. No such deep equivalence is used by the flatness theorem or RT dimensions.

### B interfaces

#### ex-qftx-two-insertion-monodromy — Two-insertion KZ monodromy is a Casimir exponential

Kind: `example`; domain: `mathematics`.

**Statement / definition.** With two insertions and w=z_1−z_2, a horizontal section is w^{Ω_12/κ}v on a chosen logarithm branch. Positive winding gives monodromy exp(2πi Ω_12/κ). This need not be unitary for arbitrary complex modules and κ.

**Statement references.**

[Reading ledger: amplitudes](sources.md#amplitudes)

[Reading ledger: local-lie](sources.md#local-lie)

`thm-qftx-kz-flatness` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Solve ds/dw=(Ω_12/κw)s by the matrix exponential and track log w↦log w+2πi.

## qftx-hall-bps-wall-crossing — Hall factorization, stability chambers and conditional BPS spectrum generators

A page `qftx-hall-bps-wall-crossing`; B companion `qftx-hall-bps-wall-crossing-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `hall-stability-dt-bps-and-wall-crossing`, `qftx-ribbon-braid-representations`.

The equality is proved by unique Harder–Narasimhan filtrations: expanding the ordered product counts each representation exactly once. It is not a symbolic resemblance between algebras and particles. The integrated generator acts by conjugation in a completed quantum torus, furnishing an exact wall-crossing automorphism. The A₂ extension calculation explains why reversing phase order changes the factorization while preserving the total product. The root theorem intentionally covers wild acyclic quivers but is hereditary finite-field mathematics; it does not prove full motivic CY3 wall crossing. Physical BPS indices require the additional protected-sector dictionary and the exact integration/orientation premises in the contract. This separation permits a research-proximate Hall application without asserting arbitrary nonperturbative QFT spectra or quantum-gravity state counts.

### A interfaces

#### def-qftx-hall-spectrum-generator — Finite-quiver Hall spectrum generator and physical dictionary

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** For a finite acyclic quiver Q over F_q with upper-half-plane vertex charges, use the subobject-first dimension-completed Hall algebra and its exact Euler/skew integration. Define the spectrum generator P_Z as the decreasing-phase product of integrated semistable factors. Calling those factors protected BPS data is an additional physical dictionary, not part of the finite-field theorem.

**Statement references.**

[Reading ledger: hall](sources.md#hall)

[Reading ledger: local-hall](sources.md#local-hall)

`thm-finite-quiver-hall-wall-crossing` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Retain finitary hereditary hypotheses, completion and all semistable objects, including strictly semistable ones; the root theorem does not require Dynkin type.

#### prop-qftx-hall-spectrum-invariance — Hall wall crossing preserves the completed generator automorphism

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** For two upper-half-plane charge assignments Z_± on the same finite acyclic quiver, P_{Z_-}=P_{Z_+}; each has constant term one and conjugation a↦P_ZaP_Z^{-1} is the same continuous completed-torus automorphism. The identity is degreewise formal, not analytically convergent.

**Statement references.**

[Reading ledger: hall](sources.md#hall)

[Reading ledger: local-hall](sources.md#local-hall)

`def-qftx-hall-spectrum-generator` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply the exact root Hall factorization; show the inverse of 1+x is Σ(−x)^n in positive-degree completion. Every fixed degree uses finitely many dimensions/phases. No CY3 or orientation-data theorem is imported.

#### def-qftx-cy3-bps-integration-contract — CY3/CoHA protected-state extension contract

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** An extension from finite-field hereditary Hall counts to four-dimensional supersymmetric BPS wall crossing must supply a specified 3-Calabi–Yau category or quiver with potential, stability and support property, orientation data where required, a completed motivic/cohomological Hall integration theorem, and a physical identification of protected indices. Finitary hereditary Hall and CoHA are different constructions.

**Statement references.**

[Reading ledger: hall](sources.md#hall)

[Reading ledger: local-hall](sources.md#local-hall)

`prop-qftx-hall-spectrum-invariance` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Expose the extra premises as future interfaces. They are not inferred by replacing a finite-field count with an Euler characteristic, nor by calling an arbitrary root Hall module a BPS Hilbert space.

### B interfaces

#### ex-qftx-a-two-hall-flags — A₂ Hall factorization counts extension flags

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For Q:1→2 over F_q, a dimension-(1,1) representation is a scalar arrow. It has a subrepresentation of dimension (0,1) always, while one of dimension (1,0) exists only for zero arrow. This asymmetry accounts for the noncommuting ordered Hall factors and the new extension contribution when phase order changes.

**Statement references.**

[Reading ledger: hall](sources.md#hall)

[Reading ledger: local-hall](sources.md#local-hall)

`def-qftx-hall-spectrum-generator` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Enumerate the q arrows before taking isomorphism/groupoid weights. For nonzero arrow the only nontrivial proper subrepresentation is (0,1); retain automorphism factors in integration.

## qftx-categorified-line-operators — Categorified braid lines, grading and decategorification

A page `qftx-categorified-line-operators`; B companion `qftx-categorified-line-operators-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-ribbon-braid-representations`, `rouquier-complexes-and-categorical-braid-relations`.

Categorification is used through an actual braid group action by Rouquier complexes. Tensor composition is the categorical stacking law, the differential and homotopy equivalences carry information beyond a polynomial, and the Euler map is multiplicative. The exact shift v^{e(β)} is physically relevant whenever grading is interpreted as a charge or protected index; it cannot be suppressed by calling the construction a Hecke representation. A realization as topological/supersymmetric QFT defects needs an explicit monoidal functor preserving junctions and all coherence. The KLR contract names the requisite categories, functors and natural transformations and is not counted as an already realized physical symmetry. This keeps substantial categorified algebra available while blocking unsupported equivalence or positivity claims.

### A interfaces

#### def-qftx-categorified-line-model — Categorified line model with explicit realization functor

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Take the actual type-A Soergel category over Q, its grading convention v[X]=[X(1)], homotopy category of bounded complexes, and positive/negative Rouquier generator complexes. A categorical line-defect realization additionally specifies a monoidal functor into a physical defect category and its junction/coherence maps; no such physical realization is implied by the algebra alone.

**Statement references.**

[Reading ledger: local-categorification](sources.md#local-categorification)

`prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the root homotopy-invariant braid assignment and its actual split-Grothendieck ring rather than invent a category with the desired Euler polynomial.

#### prop-qftx-categorified-braid-euler — The exact grading shift survives decategorification

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** In the root normalization Φ(χ(F(β)))=v^{e(β)}T_β. Hence the normalized class v^{-e(β)}χ(F(β)) gives the Hecke braid image, and forgetting the factor v^{e(β)} changes the invariant. Homotopy-equivalent complexes have the same Euler class but need not be isomorphic as graded complexes.

**Statement references.**

[Reading ledger: local-categorification](sources.md#local-categorification)

`def-qftx-categorified-line-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Apply the supplied Rouquier decategorification theorem. Multiply generator classes with the exact shifts and use braid exponent-sum invariance. Do not treat the Euler class as the full homology or as a positive state count.

#### def-qftx-klr-defect-action-contract — KLR categorical symmetry action contract

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** A KLR realization of line-changing defects requires categories C_λ, exact functors E_i,F_i, graded natural transformations satisfying the chosen quiver-Hecke relations and integrability/highest-weight conditions where used. Its Grothendieck action is a quantum-group representation only after those relations and the relevant decategorification theorem are established.

**Statement references.**

[Reading ledger: local-categorification](sources.md#local-categorification)

**Proof or well-definedness route.** Select the actual local KLR induction/restriction suppliers during future authoring and provide the physical realization functor separately. No direct dependency on an unproved physics categorification assertion is permitted.

### B interfaces

#### cex-qftx-euler-class-loses-extension-data — Euler class is not a complete defect invariant

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** A nonzero two-term graded complex with zero differential C:V→V has zero Euler class but nonzero cohomology in two degrees. Thus a vanishing decategorified class does not imply the categorical line object is zero.

**Statement references.**

[Reading ledger: local-categorification](sources.md#local-categorification)

`def-qftx-categorified-line-model` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute χ(C)=[V]−[V]=0 while H^0(C)=V and H^1(C)=V for V≠0.

## qftx-spectral-tube-analyticity — Positive-energy tube analyticity and discrete-symmetry proof interfaces

A page `qftx-spectral-tube-analyticity`; B companion `qftx-spectral-tube-analyticity-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qft-mc02`.

For a future null or timelike momentum and a future timelike imaginary displacement, p·b is nonnegative with a uniform positive coefficient on every compact timelike subcone. This makes polynomial momentum factors integrable against the exponentially damped spectral measure and supplies holomorphy with all derivatives. Bounded insertions have no field-domain problem; unbounded Wightman fields need distribution estimates on a common invariant domain. Edge-of-the-wedge and complex Lorentz group extension are new analytic obligations before general CPT/spin–statistics or Reeh–Schlieder can become theorem suppliers. The existing free scalar/Dirac assignments remain exact constructed models; the scaffold does not reclassify them as a proof of a general theorem.

### A interfaces

#### def-qftx-joint-spectrum-input — Positive-energy joint spectral input

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Let U(a)=∫exp(i p·a)dE(p) be a strongly continuous unitary translation representation with a joint projection-valued spectral measure supported in the closed future cone, using p·a=p⁰a⁰−p⃗·a⃗. Assume a fixed cyclic vacuum vector and specify bounded local operators separately. The joint spectral measure is input; separate Stone generators alone do not state strong commutation.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

**Proof or well-definedness route.** Define joint spectral calculus and the future tube a+ib with b future timelike.

#### thm-qftx-spectral-tube-holomorphy — Positive spectrum produces bounded tube continuation

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** For b in the open future cone, U(a+ib)=∫exp(i p·a−p·b)dE(p) is bounded with norm at most one, strongly continuous to real translations and weakly holomorphic in the future tube. Products with bounded insertions produce jointly holomorphic matrix coefficients when every successive imaginary displacement lies in the future cone.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`def-qftx-joint-spectrum-input` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Since p·b≥0, the bound is immediate. On a compact subcone p·b≥c|p|, giving uniform derivative bounds |p|^N e^{−c|p|}; differentiate under spectral integrals. Approximate arbitrary vectors by bounded-energy projections for strong boundary continuity.

#### def-qftx-cpt-spin-statistics-interface — CPT and spin–statistics analytic completion obligations

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** A full scalar/spinor Wightman CPT or spin–statistics theorem requires the precise finite-component spin-cover covariance, temperedness, positive joint spectrum, unique cyclic vacuum, common invariant field domain and locality/weak-locality conditions of the chosen theorem. Its proof must supply multivariable tube continuation, complex Lorentz extension, edge-of-the-wedge uniqueness and the antiunitary/domain or statistics conclusion. The bounded tube lemma alone is insufficient.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`thm-qftx-spectral-tube-holomorphy` — exact carrier/interface in suppliers.json.

`thm-qft-tempered-field-reconstruction` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Retain the old framework obligations rather than manufacture a general theorem from free examples. This definition creates a future proof home without a load-bearing CPT assertion.

### B interfaces

#### ex-qftx-positive-frequency-tube — One spectral frequency decays in the future imaginary direction

Kind: `example`; domain: `mathematics`.

**Statement / definition.** For a future momentum p and scalar coefficient exp(i p·a), complex translation a+ib multiplies it by exp(−p·b)≤1. Reversing the Fourier sign would reverse the tube.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

`thm-qftx-spectral-tube-holomorphy` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Calculate the exponential explicitly and compare with the old free-field matrix coefficient convention.

## qftx-massive-scattering-estimates — Cook limits, massive wavepackets and scattering obligations

A page `qftx-massive-scattering-estimates`; B companion `qftx-massive-scattering-estimates-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `qftx-spectral-tube-analyticity`, `qft-mf02`.

The mathematical limit theorem gives a quantitative target for an actual scattering proof. In massive local theories the velocity-separation mechanism is used to control commutators of widely separated wavepackets; proving the required bounds is explicit new work. The Cook estimate produces vectors and an isometric Fock embedding once the inner-product limits are established, but it does not exhaust the Hilbert space. Charged QED is not covered: massless photons and infraparticle issues invalidate the isolated massive charged-particle assumptions. LSZ needs asymptotic fields and residues proved in a compatible distributional framework; it is not substituted for this construction. Haag's no-go for an exact interaction-picture unitary remains a separate theorem obligation with its full hypotheses, not an obstruction to finite-regulator Dyson evolution.

### A interfaces

#### def-qftx-scattering-approximant-contract — Massive scattering approximants and Cook estimates

Kind: `definition`; domain: `mathematics`.

**Statement / definition.** Fix a positive-energy vacuum representation with isolated stable mass shell m>0, local or almost-local interpolating operators and smooth compact momentum packets with disjoint velocity supports. A Haag–Ruelle construction must supply approximants Ψ_t with the stated one-particle limits, uniform norms and an integrable derivative bound ||dΨ_t/dt||≤C(1+|t|)^{-1−ε}. These estimates are explicit construction inputs, not inferred merely from a formal propagator pole.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-joint-spectrum-input` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Define packet solutions, velocity support p/√(p²+m²), differentiability domain and the time parameter. Derivation of the integrable bound from locality and spectral isolation is the main future Haag–Ruelle proof obligation.

#### thm-qftx-cook-scattering-limit — Integrable derivatives yield scattering vectors

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** If a Hilbert-space-valued C¹ family Ψ_t for t≥1 has ||Ψ′_t||≤C(1+t)^{-1−ε}, ε>0, it has a norm limit Ψ_∞ and ||Ψ_t−Ψ_∞||≤C(1+t)^{-ε}/ε. The analogous estimate holds toward t→−∞. If approximant inner products converge to bosonic/fermionic Fock inner products, the limiting map is isometric on the corresponding packet domain.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

[Reading ledger: constructive](sources.md#constructive)

`def-qftx-scattering-approximant-contract` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use the Hilbert-valued fundamental theorem, prove it by Riemann-sum approximation on compact intervals, and integrate the tail. Completeness gives the limit. Polarize limiting inner products for isometry, then extend by density.

#### prop-qftx-scattering-isometry-not-completeness — An S operator requires range information beyond Cook limits

Kind: `proposition`; domain: `mathematics`.

**Statement / definition.** Given isometries Ω_±:H_as→H, Ω_+*Ω_- is always a contraction. It is unitary when their ranges coincide; norm-limit existence alone does not establish that equality or asymptotic completeness.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

[Reading ledger: constructive](sources.md#constructive)

`thm-qftx-cook-scattering-limit` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Adjoints of isometries have norm at most one. If ranges coincide, Ω_+Ω_+*=Ω_-Ω_-* on that range, and direct multiplication gives S*S=SS*=I. Exhibit unequal subspace ranges to show why the hypothesis matters.

### B interfaces

#### cex-qftx-isometries-different-ranges — Two isometric wave maps can give a nonunitary comparison

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** On H_as=C and H=C², Ω_-(z)=(z,0) and Ω_+(z)=(0,z) are isometries but Ω_+*Ω_-=0.

**Statement references.**

[Reading ledger: aqft](sources.md#aqft)

[Reading ledger: constructive](sources.md#constructive)

`prop-qftx-scattering-isometry-not-completeness` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Compute both adjoints and the zero product.

## qftx-analytic-prerequisites — Spectral calculus, Gaussian fields and covariance normalization prerequisites

A page `qftx-analytic-prerequisites`; B companion `qftx-analytic-prerequisites-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`. These are future page identities, not page-summary bodies.

Prerequisite A/P pages: `spectral-measures-and-borel-functional-calculus`, `infinite-product-measures-and-kolmogorov-extension`, `qft-ir01`.

This pair closes new analytic prerequisites rather than letting EFT and constructive prose assume them. The bounded resolvent method reduces the unbounded spectral statement to an actual published PVM supplier and a domain calculation. For the Gaussian field, almost-sure weighted Hermite summability makes every random sample a continuous Schwartz functional on one common full-measure set; merely prescribing uncountably many test coordinates would not prove tempered sample paths. The multiplier produces the massive covariance without an infinite-dimensional Lebesgue measure. The Lorentz cocycle splitting is the precise finite-module normalization tool for scalar causal renormalization; its compact-form integration and Haar averaging are explicit components of the new proof obligation. No full interacting-field or gauge cohomology theorem is inferred.

### A interfaces

#### thm-qftx-positive-unbounded-spectral-calculus — Positive unbounded spectral calculus from a bounded resolvent

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Assume AC. If A is densely defined nonnegative self-adjoint on H, B=(I+A)^{-1} is a bounded positive self-adjoint injection with dense range. Its bounded spectral PVM pushes forward under b↦b^{-1}−1 on b>0 to a PVM E on [0,∞); A=∫λdE with domain {u:∫λ²d〈E(λ)u,u〉<∞}. B has zero spectral projection at 0. Bounded Borel functions obey their sup-norm bounds.

**Statement references.**

[Reading ledger: local-analysis](sources.md#local-analysis)

`thm-spectral-theorem-for-bounded-normal-operators-pvm-form` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Prove ||(I+A)u||≥||u||, closed range and orthogonal complement ker(I+A)*=0, hence surjectivity. Apply bounded spectral calculus to B. Its kernel is zero so E_B({0})=0, though 0 can remain in its continuous spectrum. Truncate b away from0 to define the inverse integral, and identify its closed graph with A using range B. Carry the actual AC premise.

#### thm-qftx-tempered-massive-gaussian-field — A massive Euclidean Gaussian generalized field exists

Kind: `theorem`; domain: `mathematics`.

**Statement / definition.** Assume AC. For m>0 there is a centered Gaussian random tempered distribution on R² with covariance C(f,g)=∫d²p/(2π)² conjugate(fhat(p)) ghat(p)/(p²+m²), initially for real Schwartz tests. Its law on the cylinder sigma-algebra of S′ realizes this covariance. No pointwise sample field or interaction measure follows.

**Statement references.**

[Reading ledger: local-analysis](sources.md#local-analysis)

`thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` — exact carrier/interface in suppliers.json.

`lem-qft-hermite-oscillator-research-supplier` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Construct countably many independent N(0,1) coordinates from their finite product laws using the exact Kolmogorov theorem. Let h_α be tensor Hermite functions. For s>1, E Σ_α(1+|α|)^{-2s}ξ_α²<∞, so the sum is finite almost surely and W(f)=Σξ_α〈h_α,f〉 is a continuous tempered functional by Cauchy–Schwarz and rapid Hermite coefficient decay. Prove that decay by repeated oscillator integration by parts. Apply the Fourier multiplier (p²+m²)^{-1/2}, whose derivatives have polynomial bounds and preserve Schwartz space. Parseval gives the covariance. Specify real structure and cylinder measurability.

#### lem-qftx-finite-lorentz-cocycle-splitting — Finite-dimensional Lorentz normalization cocycles split

Kind: `lemma`; domain: `mathematics`.

**Statement / definition.** For a finite-dimensional complex module V of the semisimple real Lie algebra so(1,3), a Lie-algebra 1-cocycle c satisfying c([X,Y])=X·c(Y)−Y·c(X) is of the form c(X)=X·v for some v∈V. Consequently an infinitesimal covariance defect valued in such a finite counterterm module can be removed by a finite local correction once it is proved to be this cocycle.

**Statement references.**

[Reading ledger: local-analysis](sources.md#local-analysis)

**Proof or well-definedness route.** Complexify and restrict to the compact real form su(2)⊕su(2). Integrate the module and affine cocycle action to the simply connected compact group SU(2)×SU(2), by solving the matrix ODE and proving homotopy invariance from the cocycle Maurer–Cartan equation. Average the affine orbit of0 against product round S³ probability volume, invariant under quaternion multiplication to obtain a fixed point; differentiate and complexify back. These integration/Haar steps must be supplied locally, not waived by the word Whitehead. The finite counterterm action and cocycle property must be checked in each EG order.

### B interfaces

#### cex-qftx-resolvent-zero-continuous-spectrum — Injective resolvents need not be bounded below

Kind: `counterexample`; domain: `mathematics`.

**Statement / definition.** On ℓ²(N), A e_n=n e_n is positive self-adjoint and B e_n=(1+n)^{-1}e_n has zero kernel, while0 lies in its spectrum. Thus inverse spectral pushforward must remove a zero projection rather than assert0 is outside the spectrum.

**Statement references.**

[Reading ledger: local-analysis](sources.md#local-analysis)

`thm-qftx-positive-unbounded-spectral-calculus` — exact carrier/interface in suppliers.json.

**Proof or well-definedness route.** Use basis vectors to show ||Be_n||→0 and no bounded inverse, while every eigenvalue is positive.

## Authoring order and nonlogical frontier

Author retained suppliers in their repaired audit order before new consumers. New order is the acyclic dependency graph of inventory.json, not the editorial order of this document. Root mathematical P imports must retain exact bytes and status. New microlocal, Green-hyperbolic, Lorentz-normalization, infinite-dimensional Gaussian measure, full OS-II, Nelson/cluster estimates, edge-of-the-wedge/CPT, Haag–Ruelle estimates, chiral WZW/VOA equivalence and physical defect realization are explicit authoring obligations at their stated homes; a glossary interface alone proves none of them. Only the specific proved/conditionally proved statements in each item may become suppliers after ordinary review.

The dated Yang–Mills existence/mass-gap problem remains op-qft-yang-mills-existence-and-mass-gap with no logical consumers. Interacting continuum 4D QED, all-observable infrared-complete scattering, regulator-independent quantum gravity, universal AdS/CFT and generic spin-foam continuum limits are not established by these constructions. The model calculations supply finite/formal/low-dimensional or exact categorical results with their displayed hypotheses.
