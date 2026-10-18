# Batch 71 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-71`.

Reviewed in the generated dependency order. No agents dispatched and no judge or engine gate invoked.

## def-hh-affine-hecke-algebra-from-root-datum

Checked the free-algebra quotient, positive square-root normalization, conjugacy condition restricted to simple reflections, and Omega action preserving braid/quadratic relations. Perfect finite-rank duality and finite Weyl action are supplied by def-abstract-root-datum-and-its-weyl-group and lem-root-datum-combinatorics; the canonical affine geometry is discharged by the named justified_by lemma. Empty roots give C[Y], central directions stay in Omega, q=1 is admissible, and no basis or group-category equivalence is asserted. No arbitrary choice is used.

## lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits

Read all five steps and the exact valuation-ring, digit-expansion and Smith-normal-form supplier statements. The digits give residue field F3 and a DVR/PID, normalized elementary divisors (0,n) give one decreasing neighbor for n>0 and four increasing neighbors at n=0, proving connectedness and excluding cycles. Determinant parity survives homothety; unit adjustment gives SL2 edge transitivity and the c in 3O stabilizer. Lower/upper unipotents fix the respective apartment prefixes and act transitively on three forward lines, including both initial directions and the empty word. Thus orbit sizes are 3^n and identify G/I double cosets. Only finite choices occur.

## lem-hh-root-datum-affine-geometry-and-wall-parameters

Checked all three steps against the exact supplied canonical Euclidean affine theorem and root-datum statements. Finite Weyl averaging gives a_alpha=2 alpha-coroot/||alpha-coroot||^2 with metric coroot alpha-coroot; the common root kernel is an inert orthogonal factor. Simple transitivity proves the semidirect product and length-zero characterization, including empty roots. Wall conjugacy defines parameters independently; translation by alpha-coroot changes levels by two, and perfect duality supplies an odd pairing precisely when alpha is not in 2X. Finite averaging and basis tests require no AC.


## def-hh-affine-hecke-bernstein-presentation

Checked the finite Hecke relations and both Bernstein denominators against Ciubotaru Theorem 3.1, PDF p.5 (the item locator p.4 uses the printed numbering 4). The lattice is Y, dual to that source convention; alpha in 2X forces even <alpha,y>. The extra v-prime is formal input unless attached to the odd affine wall; the definition explicitly withholds nonzero/PBW claims. Zero y, empty roots, q=1 and equal attached parameters are consistent; divisibility is discharged by the named lemma without inverting a group-algebra denominator.

## lem-hh-signed-alcove-products-and-oriented-basis

Confirmed refuter:71:1 as nonfatal: in A1 the length-zero map x->1-x reverses the fixed positive direction, so conjugation cannot preserve a fixed-D crossing sign. Repaired only step 2.1: unique affine part and terminal Omega in the stated canonical form reduce independence directly to step 1.1 and the Coxeter word property. Checked all four steps, the exact Matsumoto/gallery supplier statements and IM-basis proof. The dihedral full cycle has one plus and one minus block of m crossings; cyclic rotations of its identity give the braid moves. Triangular expansions have coefficient 1 and strictly shorter finite support, proving spanning and independence even for infinite Omega and empty root systems. Gortz Theorem 3.1.1, PDF pp.6-7, and section 3.4 pp.10-11 corroborate the canonical-form and unequal-parameter arguments. No Statement or dependency changed; no downstream interface repair is needed.

Verdict for `refuter:71:1`: `confirmed_nonfatal`; defect `nm81-b71-fixed-orientation-omega`, repaired with confidence 1. The observed-byte SHA256 is retained in the scope artifact; no unbound historical disposition is needed.

## thm-hh-sl2-q3-iwahori-convolution-corner

Accepted reader repair. Read all five steps and exact Haar/compactness/choice supplier statements. G is closed LCH; SL2(Z3) and congruence kernels K_m are compact open and form an identity neighborhood basis. A finite cover and nested K_m turn each compactly supported locally constant integrand into a finite coset sum, also for vector-valued integrals after choosing a vector stabilizer. Compact-group Haar probability gives right and inversion invariance on I. Verified both displayed simple matrices and three unipotent coset representatives; the four-valent tree gives T_s^2=3e+2T_s and unique alternating galleries give coefficient one. The IM basis proves the algebra isomorphism. Averaging gives the unital action, including zero invariant space. AC is stated and used for Haar and inherited countable compactness only; no categorical equivalence is inferred.

Verdict: `accepted_repair`; repair confidence 1. Statement unchanged.

## ex-hh-affine-b2-unequal-parameters

Accepted reader repair. Checked dual basis pairing equals identity, all eight roots/coroots and positive roots, the Cartan matrix, and signed-permutation preservation of lattices and root sets. The three-wall triangle has every positive-root function between zero and one. Direct composition gives orders 4,4,2. Its cocharacter lattice is precisely the coroot lattice, so Omega=1; the all-even graph has three distinct simple conjugacy classes, permitting the chosen 2,2,3. The normalized relations and IM basis apply, without a Bernstein or classification assertion. No infinite choice or excluded zero parameter is used.

Verdict: `accepted_repair`; repair confidence 1. Statement unchanged.


## lem-hh-affine-hecke-bernstein-quotients-are-well-defined

Checked both steps directly: n=<alpha,y> is integral, the numerator is theta_y(1-u^n), and positive, zero and negative n have the displayed finite geometric sums with the correct negative-power sign. If alpha=2 beta in X, n=2m, so substitution u^2 proves the doubled denominator for positive, zero and negative m. The root-coroot pairing 2 guarantees a nonzero coroot, so the nonzero Laurent denominator denotes divisibility, not an inverse adjoined to the algebra. Empty Delta is vacuous. No choice, limiting argument or nonzero quotient assumption is used.

## thm-hh-affine-hecke-general-root-data-bernstein-pbw

Read all eleven steps and the exact signed-product, wall-parameter, root-datum and Laurent-divisibility suppliers. Translation preserves the fixed direction even though its Omega component need not: the proof tracks the affine prefix and conjugated types together, so it does not repeat the repaired inference. The positive-coroot sum has simple pairings 2, giving dominant decompositions including central and empty-root cases. The oriented t_y w basis and finite triangular change give PBW in H first. Checked telescoping: deleting wall k and reflecting the tail with final s has endpoint t_{sy+k a}; the suffix orientation becomes D. Parity k=n-j yields c for even j and c-prime for odd j, giving exactly the two attached relations. n=0 is empty; the cocycle identity extends negative n with the correct sign in the embedded Laurent fraction field. Lexicographic word reduction proves spanning in the formal quotient, and images in the established basis prove injectivity and surjectivity without circular PBW. Word reversal preserves the relation because R_sy=-R_y. All support and choice operations are finite; arbitrary positive parameters, reducible systems and central directions remain covered. Compared with Gortz Proposition 3.3.1 and section 3.4, PDF pp.8-11.

## lem-hh-affine-hecke-parabolic-weight-filtration

Accepted reader repair. Checked all six steps, the actual PBW cross-relations, finite inversion-length supplier, parabolic definition and weight-cone conventions. Minimal right-coset representatives give length-additive W^P W_P factorization; the PBW subset is a basis of H_P, proving right freeness and injection. Commuting operators split by a finite lattice basis, and polynomial spectral projections give exact generalized-weight multiplicities through the length filtration. Finite Laurent interpolation and Weyl averaging separate finite orbits; centrality propagates (f-f(t))^d from the initial generalized weight space to its generated module, with the reader-added triangularization justifying the common bound d. The longest minimal representative gives the converse tempered implication by forcing coefficients outside P to vanish; forward direction uses w(P) positive. The real twist fixes all root monomials in both denominator cases. Checked P empty, P=B, central directions, n=0 weights and multiplicities; no AC is used.

Weight-filtration touched verdict: `accepted_repair`, confidence 1; its Statement and consumer interfaces are unchanged.

## lem-hh-langlands-dominant-projection

Checked all five steps and exact nearest-point (n>=1) and Cauchy-Schwarz/equality statements; E=0 is treated separately. Finite inequalities make C closed convex nonempty. The variational inequality yields an orthogonal polar decomposition, and testing fundamental vectors plus both central directions identifies the polar as K_B, with active coefficients precisely in P. Local subsystem chambers prove stabilizer W_P. The reduced-word telescoping gives nu-w nu in the positive coroot cone; equality in the norm bound forces w nu dominant and equal to nu, excluded for a nonidentity W^P representative. At nu=0 or purely central nu, P=B and W^P={1}, so strictness has no illicit zero-norm exception. The unique maximizer of 2(x,v)-||v||^2 proves both directions of the final equality criterion for arbitrary eta-prime in E_P. No infinite choice is invoked.

## thm-hh-affine-hecke-standard-module-unique-irreducible-quotient

Checked each of three steps against the completed filtration and projection lemmas. Identity-coset weights have the same projection nu and norm R; every other coset has strictly smaller r, so exact generalized-weight spaces identify the whole top part with the injected irreducible sigma. Any submodule meeting a top weight generates sigma and hence the induced module. Every proper submodule is contained in the fixed lower-weight vector space; their sum is therefore proper even without presuming that sums of proper submodules are generally proper. Its quotient is simple, and top spaces survive with their H_P action. Covers P=B, exponent zero, purely central exponents and empty roots (identity induction); finite dimensionality guarantees all sums and choices needed. Compared to Solleveld 1008.0177 Theorem 2.2.4(a), PDF pp.31-32.

## thm-hh-affine-hecke-tempered-langlands-classification

Checked all four steps against the completed projection, orbit-block filtration and intrinsic-top-space suppliers. A finite nonempty weight set has maximal r; weights in the generated H_P orbit block have logarithms nu+w eta in nu+E_P. Projection gives the lower bound and maximality gives the upper bound, so the equality criterion forces them into nu+K_P. A least-dimensional nonzero parabolic submodule is irreducible; its inclusion yields a well-defined nonzero induction map, surjective by irreducibility. Intrinsic top projections force nu=mu, hence P=Q, and intrinsic top H_P spaces recover sigma itself. Finally K_B is exactly projection-zero, proving both directions of tempered iff P=B and nu=0, including nonzero central exponents and empty roots. Positive unequal parameters and arbitrary isogeny are inherited without additional assumptions or choice. Compared to Solleveld Theorem 2.2.4(b), PDF pp.31-32; the local intrinsic-space argument supplies the source uniqueness step.

Citation corrections: Ciubotaru Theorem 3.1 is on PDF and printed p.5. Corrected p.4 locators in the Bernstein definition and quotient lemma; defects `nm81-b71-bernstein-source-page` and `nm81-b71-quotients-source-page` are closed with confidence 1. No defining clause changed. The three accepted reader omissions are recorded as closed nonfatal defects in the ledger and linked by their touched decisions.

## Snapshot comparison
The pre/post snapshots differ on exactly the three routed touched carriers. Each current raw SHA256 equals its immutable post-reader raw SHA256, so these are accepted repairs. The subsequent signed-gallery proof repair and two citation-only corrections are separately documented above. No Statement, Definition, dependency array, or page order changed; the manifest mathematical mirrors therefore remain current.
| Item | Pre-reader raw SHA256 | Post-reader/current raw SHA256 |
|---|---|---|
| `ex-hh-affine-b2-unequal-parameters` | `667037fd00bdff7758d8c9eaa117355c1d2990903697d8f4dbf290e350dc6fc3` | `753ce00b662e7185b88124482069fb73f61ea78e7cb8f1c400dedd731037a2d0` |
| `lem-hh-affine-hecke-parabolic-weight-filtration` | `6cefa8499503d9aebfeb67627030885d715e01bc54be2c591e9615790e5b4ce6` | `112edb2b863d72465e218921b109833cb071188eed4f6df9e6503881c8bdfd60` |
| `thm-hh-sl2-q3-iwahori-convolution-corner` | `d96ec6a3f74da546c85600aa34f33d128274f7a3d3589693576426ceb2a80689` | `3c1baf3270f4246378414c11cca091cdd03be7a9b12dea78121ca2bd83070d3c` |

## Sources and scope

- [Görtz, Alcove walks](https://arxiv.org/pdf/math/0610839), Theorem 3.1.1 and its Coxeter-word/dihedral proof, PDF pp.6–7; Proposition 3.2.1 and Proposition 3.3.1, PDF pp.7–9; unequal parameters and wall parity in §3.4, PDF pp.10–11. The source uses a terminal Omega frame and fixes an orientation. The local proof handles reducible and central factors explicitly.
- [Ciubotaru, Tutorial](https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf), Theorem 3.1, PDF p.5, supplies both exact cross-relations in the cocharacter lattice convention. The exceptional denominator and odd-wall parameter agree with the current text.
- [Solleveld, survey](https://arxiv.org/pdf/2009.03007), §§1.2–1.4 and Theorems 1.8/1.10, PDF pp.8–12, for normalization, extension and comparison conventions. The local construction does not import a category equivalence.
- [Solleveld, classification](https://arxiv.org/pdf/1008.0177), §2.2, Lemmas 2.2.1 and 2.2.3, equations (2.12)–(2.13), Theorem 2.2.4 and proof, PDF pp.29–32. The source separates a tempered module and a torus twist modulo equivalence; the local full-lattice convention records their composite module and retains the full central real exponent.

Every direct cited item supplier required for the 13 routed risk reviews was opened through its actual relevant Statement/Definition; local supplier proofs were read where used. Published upstream proof closures were not re-audited. No published defect was found, so no published-ledger edit or lock was needed.

The existing batch-71 cross-batch record remains valid: `affine-hecke-algebras-beyond-type-a` → `hopf-hecke-and-quantum-symmetry-interfaces` is reading context only. Both current page bodies were checked: the finite spectral R-matrix is not a premise of any owned proof. No item-level in-run supplier or affected outside consumer was discovered; existing stable IDs and page obligations remain unchanged. No cross-batch input edit was needed.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-71.proof-contracts.json`: 20 items routed, 13 HIGH/CRITICAL; 0 errors. All 13 now have specific complete risk reviews.
- `node tools/tsx-run.mjs tools/reflow.mts` on the three Alpha-changed items: all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those same paths: 2 phase proofs checked, 0 failing; the definition has no phase proof.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-71.proof-contracts.json --strict`: 20/20 checked, 0 errors, 0 warnings.
- Final risk report with `--require-reviewed`: 20 items routed, 0 errors.
- Final single batched `node tools/proof-layout.mjs items/lem-hh-signed-alcove-products-and-oriented-basis.md items/def-hh-affine-hecke-bernstein-presentation.md items/lem-hh-affine-hecke-bernstein-quotients-are-well-defined.md`: 3 items, 6 steps, 0 defects. No item edits followed.
- Decision coverage check: exactly the 3 touched obligations and `refuter:71:1`; no reader/page obligation is owed. Six confirmed nonfatal defects have closed ledger rows (three reader omissions, the refuter inference, two source locators), with confidence 1.

No blocker or escalation remains in this dispatch. No judge stamps, self-certification, engine gate battery, scheduling operation, publication, or push was performed. The engine owns decision hash stamping and the subsequent battery.
