# ADHM prerequisite scaffold

Unapplied structured declarations live in `adhm-prerequisite-plan-fragment.json`. Preserve all original55 pairs/IDs; no native authoring, readiness, review or source approval is claimed. Existing draft proofs must still undergo the native Beta authoring/review process. No new declaration depends on old12.

## ADHM Linear Data, Positive-FI Quotients and Framed Monads

`qftx-adhm-linear-data-and-framed-monads` (A), proposed order 967.2; companion `qftx-adhm-linear-data-and-framed-monads-examples`.

Requires: `relations-functions-and-quotients`, `holomorphic-inverse-and-weierstrass-preparation`, `lie-subgroups-actions-and-homogeneous-spaces`, `compactness-in-metric-spaces`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `flat-smooth-and-etale-morphisms`, `reductive-affine-invariant-theory-and-geometric-quotients`, `the-spectral-theorem-and-singular-value-decomposition`, `the-inverse-function-theorem-completed`, `rank-theorems-and-embedded-submanifolds`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `chow-groups-intersection-products-and-grothendieck-riemann-roch`, `grothendieck-spectral-sequences-and-computations`, `finite-generator-master-equations-and-uniformization`.

### def-qftx-adhm-linear-data-stability-and-regularity

Fix integers $N\ge1$ and $k\ge0$ and standard Hermitian spaces $V=\mathbb C^k$, $W=\mathbb C^N$. A framed ADHM linear datum is $x=(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}_{\mathbb C}(V)$, $I:W\to V$ and $J:V\to W$. Define the complex and real polynomial expressions

$$\mu_{\mathbb C}(x)=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}(x)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

The datum is stable if the vectors $B_{i_1}\cdots B_{i_m}I(w)$, with $m\ge0$, $i_j\in\{1,2\}$ and $w\in W$, span $V$. It is costable if there is no nonzero subspace of $V$ invariant under both $B_i$ and contained in $\ker J$. It is regular if it is stable and costable. The group $GL(V)$ acts by $g\cdot x=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$. Its unitary subgroup is $U(V)$.

Write $X^s=\{x:\mu_{\mathbb C}(x)=0,\ x\text{ stable}\}$, $X^{\mathrm{reg}}=\{x\in X^s:x\text{ costable}\}$ and, for real $\zeta\ge0$, $X_\zeta^U=\{x\in X^s:\mu_{\mathbb R}(x)=\zeta I_V\}$. Denote the corresponding orbit sets by $X^s/GL(V)$, $X^{\mathrm{reg}}/GL(V)$ and $X_\zeta^U/U(V)$, with quotient topologies when discussing their analytic spaces. A word frame consists of $k$ columns obtained by fixed words in $B_1,B_2$ applied to fixed standard basis vectors of $W$.

For $T_{\mathbb C}=(\mathbb C^*)^2\times(\mathbb C^*)^N$, write $t_1,t_2,e_1,\ldots,e_N$ for the coordinate characters and put $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$. Its action is $(t_1,t_2,h)\cdot x=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$. The compact torus is its subgroup on which all characters have modulus one. The framing representation thus has character $\sum_\alpha e_\alpha^{-1}$ and its dual has character $\sum_\alpha e_\alpha$.

These are finite-dimensional matrix definitions. They do not assert a real/complex quotient correspondence, a sheaf or ASD identification, or a noncompact pushforward. In particular, positive-FI stability and zero-FI regularity are distinct conditions; neither an endpoint identification nor an ordinary ASD interpretation follows from this definition.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: .

### lem-adhm-stable-quotient-and-torus-lift

Assume AC. Fix $N\ge1$, $k\ge0$, $V=\mathbb C^k$ and $W=\mathbb C^N$ with their standard bases. Let $X$ be the stable locus in the complex ADHM equation $[B_1,B_2]+IJ=0$, where $B_i\in\operatorname{End}(V)$, $I:W\to V$, $J:V\to W$, and stability means that the vectors $B_{i_1}\cdots B_{i_m}I(w)$ span $V$. The action $g\cdot(B_1,B_2,I,J)=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$ of $GL(V)$ on $X$ is free and proper. Its orbit quotient with quotient topology is a Hausdorff second-countable complex manifold of complex dimension $2kN$, with tangent space $\ker d_1/\operatorname{im}d_0$ for the infinitesimal ADHM deformation maps.

For $k>0$, a word frame $C(x)$ is a matrix whose columns are $k$ fixed words in $B_1,B_2$ applied to fixed standard framing basis vectors. The opens $U_C=\{x:\det C(x)\ne0\}$ cover $X$; words of length at most $k-1$ suffice. Each slice $S_C=\{x\in U_C:C(x)=I_V\}$ gives quotient coordinates, with $GL(V)\times S_C\to U_C$ a biholomorphism. Slice changes are holomorphic, in fact given by matrix inversion and polynomial operations on their domains. The quotient is also a separated smooth finite-type complex algebraic variety with a finite $T$-invariant affine atlas of these slices, and the map from $X$ is a geometric quotient in the regular-function sense.

Let $T=(S^1)^2\times(S^1)^N$ act by $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, with $h$ acting on the $\alpha$th standard framing vector by $e_\alpha^{-1}$. This descends to a smooth holomorphic action. At any fixed quotient point represented by $x$, there is a unique $g(t)\in GL(V)$ with $t\cdot x=g(t)\cdot x$. If column $\ell$ of $C(x)$ uses framing color $\alpha_\ell$ and contains $a_\ell,b_\ell$ letters $B_1,B_2$, then

$$g(t)=C(x)\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})C(x)^{-1}.$$

Thus the lift is a smooth character representation, without assuming Zariski density or a GIT linearization theorem. For $k=0$ the quotient is a point and these matrices and tangent spaces have their empty-dimensional interpretations. No correspondence with a real moment-map quotient, sheaf moduli or ASD connections is asserted.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `def-axiom-of-choice`, `thm-holomorphic-implicit-function-theorem`, `def-free-and-proper-lie-group-actions`, `thm-free-proper-action-quotient-manifold`, `prop-tangent-space-of-a-free-proper-quotient`, `thm-heine-borel-rn`, `thm-gluing-affine-schemes`, `thm-jacobian-criterion-smooth-morphism`, `def-categorical-and-geometric-quotients-of-classical-varieties`.

### thm-qftx-adhm-real-complex-quotient-correspondence

Assume AC. Fix $N\ge1$, $k\ge0$, standard Hermitian $V=\mathbb C^k$, $W=\mathbb C^N$ and ADHM data $x=(B_1,B_2,I,J)$ with the complex equation $[B_1,B_2]+IJ=0$. Stability means that the $B_1,B_2$ words applied to $I(W)$ span $V$; costability means no nonzero common invariant subspace of $V$ lies in $\ker J$; regular means both. Set

$$\mu_{\mathbb R}(x)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

For every $\zeta>0$, each stable $GL(V)$ orbit meets $\mu_{\mathbb R}=\zeta I_V$ in exactly one $U(V)$ orbit, and the inclusion induces a diffeomorphism of smooth real manifolds

$$\{\mu_{\mathbb C}=0,\ \mu_{\mathbb R}=\zeta I_V,\ \mathrm{stable}\}/U(V)\ \cong\ X^s/GL(V).$$

At $\zeta=0$, every stable datum satisfying the real equation is automatically costable. Each regular complex orbit meets the zero real level in exactly one unitary orbit, giving instead

$$\{\mu_{\mathbb C}=0,\ \mu_{\mathbb R}=0,\ \mathrm{stable}\}/U(V)\ \cong\ X^{\mathrm{reg}}/GL(V).$$

Both identifications are equivariant for the compact rotation/framing torus in the raw-data convention. For $k=0$ all spaces are points. This theorem identifies the stated finite-dimensional quotients; it asserts no correspondence with sheaves or ASD connections, and no identification of the entire positive-FI quotient with the zero-FI regular locus.

Proof/construction: Minimize Fζ(g)=sum||gBi g−1||F²+||gI||F²+||Jg−1||F²−ζlogdet(g†g). Stable word columns bound ||g||<=C(1+M)^k; F sublevels bound M by log(1+M)<=M, then determinant away0 for ζ>0. At ζ0 use costable row words to bound g−1. Show derivative2trH(μR−ζI), strictly positive Hermitian-geodesic Hessian by stability, polar uniqueness and smooth dependence by finite real IFT. Give full constants/sublevel closedness, zero-level trace-block costability and quotient smoothness; this is a genuine proof obligation, not invoking Kempf–Ness by name.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `lem-adhm-stable-quotient-and-torus-lift`, `def-axiom-of-choice`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `lem-xd-finite-matrix-exponential-series`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-free-proper-action-quotient-manifold`, `thm-constant-rank-theorem-for-manifolds`.

### thm-qftx-projective-gaga-for-monad-data

For P^n_C, n=2,3, prove analytification gives an exact tensor-compatible equivalence between algebraic coherent sheaves and holomorphic coherent sheaves, preserves all finite cohomology/Ext needed below and restriction to the fixed line at infinity, and respects framed morphisms. For algebraic flat families over finite-type parameter schemes, prove cohomology/base-change and analytification compatibility only under the exact projective/base-change hypotheses used. Do not claim every holomorphic family over a nonproper algebraic base algebraizes. Prove the exact version used; do not simply conflate the current holomorphic Gieseker definition with algebraic coherent suppliers.

Proof/construction: Recover authoritative complete GAGA proof; bridge local analytic and algebraic cohomology using projective twists/resolutions and the exact finite/family hypotheses. Existing algebraic Serre duality alone does not prove analytification comparison.

Direct suppliers: `def-axiom-of-choice`, `thm-cohomology-projective-space-twisting-sheaves`, `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`, `thm-serre-vanishing`.

### lem-qftx-p2-beilinson-diagonal-and-framed-vanishing

Build the P2 diagonal Koszul resolution and the corresponding finite hypercohomology reconstruction. For a rankN torsion-free sheaf framed trivially on l∞ with Hilbert polynomial N binom(m+2,2)−k, prove the exact H0/H2 vanishing and H1 dimensions needed for the normalized three-term ADHM monad. Use coherent Ext-duality for torsion-free sheaves, not a locally-free-only Serre theorem. Prove the family/base-change form actually needed.

Proof/construction: Reuse the actual diagonal regular-sequence argument in the projective-bundle lemma but upgrade its K0 identity to an actual resolution/bicomplex. Supply Cartan–Eilenberg data/comparisons under AC; establish framed vanishings by line exact sequences and Serre duality.

Direct suppliers: `thm-qftx-projective-gaga-for-monad-data`, `lem-koszul-resolution-and-flat-fibre-restriction`, `lem-relative-projective-bundle-k-theory-generators`, `thm-first-hypercohomology-spectral-sequence`, `thm-second-hypercohomology-spectral-sequence`, `thm-serre-duality-projective-space-coherent-sheaves`, `thm-cohomology-projective-space-twisting-sheaves`, `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`.

### thm-qftx-framed-p2-monad-adhm-correspondence

For every stable raw quadruple with μC=0 define α=(z0B1−z1,z0B2−z2,z0J)^T and β=(−z0B2+z2,z0B1−z1,z0I). Prove βα=z0²μC, α sheaf-injective, β everywhere onto, torsion-free middle cohomology with canonical framing and Hilbert polynomial N binom(m+2,2)−k. Conversely reconstruct the quadruple from every framed sheaf by the prior diagonal/vanishing theorem and prove inverse equivalence modulo GL, including families and tangent maps. Local freeness is equivalent to costability, so the regular locus is exactly the locally-free sheaf locus. Prove exact torus-equivariance in the dual-framing convention. No positive-FI identification with ordinary ASD is asserted.

Proof/construction: Forward maps and β-surjectivity follow by stability and the point-at-infinity blocks. Prove α degeneracy/costability using the complex equation on invariant kerJ subspaces; give a real torsion-free/depth argument at codimension2. Inverse monad normalization and its uniqueness must be proved, not cited as a dictionary. Prove local freeness near the framing line from torsion-freeness and trivial restriction by the local Nakayama/Tor argument; do not silently strengthen the current holomorphic-sheaf definition. Family equivalence concerns algebraic finite-type families; analytic point/tangent comparison uses the exact GAGA theorem.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `lem-adhm-stable-quotient-and-torus-lift`, `lem-qftx-p2-beilinson-diagonal-and-framed-vanishing`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `thm-cohomology-projective-space-twisting-sheaves`, `thm-serre-duality-projective-space-coherent-sheaves`.

## ADHM Linear Data, Positive-FI Quotients and Framed Monads — Examples

`qftx-adhm-linear-data-and-framed-monads-examples` (B), proposed order 967.2; companion `qftx-adhm-linear-data-and-framed-monads`.

Requires: `qftx-adhm-linear-data-and-framed-monads`.

### ex-qftx-adhm-one-dimensional-fi-chambers

For N=k=1, show the positive level orbit has J=0,I=sqrtζ and quotient C², while stable zero-level data do not exist. Thus the positive-FI space contains a nonregular rank-one sheaf sector and cannot equal an ordinary charge-one U(1) ASD space.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `thm-qftx-framed-p2-monad-adhm-correspondence`.

### ex-qftx-adhm-zero-charge-framing-monad

For k=0 identify the middle term with O^N, the framing with its prescribed basis and the quotient with a point, checking every empty complex/Euler convention.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `thm-qftx-framed-p2-monad-adhm-correspondence`.

## Zero-FI Regular ADHM Data and Framed ASD Connections

`qftx-adhm-zero-fi-asd-correspondence` (A), proposed order 967.3; companion `qftx-adhm-zero-fi-asd-correspondence-examples`.

Requires: `qftx-adhm-linear-data-and-framed-monads`, `qftx-instanton-topology-mathematics`, `relations-functions-and-quotients`, `chow-groups-intersection-products-and-grothendieck-riemann-roch`, `grothendieck-spectral-sequences-and-computations`, `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `chern-weil-theory-and-characteristic-forms`.

### def-qftx-zero-fi-regular-adhm-and-twistor-data

Specify the round oriented S4=R4∪∞, compact-torus/spinor/quaternionic conventions, CP3→S4 twistor lines and antiholomorphic real structure, framed Hermitian U(N) bundles, based gauge group and ASD F+=0. Define the regular zero-FI raw locus stable+costable with both moments zero and the metric/real structure on its monad. Fix the exact curvature and k=−qN normalization. This is not the positive-FI stable quotient.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-adhm-linear-data-stability-and-regularity`, `def-qftx-instanton-number-and-asd-sector`, `def-axiom-of-choice`.

### thm-qftx-framed-penrose-ward-correspondence-on-s4

Prove the bijection/equivalence between smooth framed unitary ASD bundles on S4 and holomorphic bundles on CP3 trivial on every real twistor line with the appropriate positive Hermitian reality condition and framing. Construct both directions, holomorphic structures/local frames, connection, reality/unitarity, gauge equivalence and inverse maps. Include reducible bundles and flat summands; do not assume irreducibility to force H0=0.

Proof/construction: Donaldson2022 §§3–4 is a roadmap, not a complete supplier: author the integrable ∂bar/holomorphic-frame theorem and relative line-section/base-change arguments, the induced connection and ASD curvature test, the inverse transform and all framing/reality compatibility. Reuse actual local Dolbeault/complex-bundle suppliers only after checking their exact hypotheses.

Direct suppliers: `def-qftx-zero-fi-regular-adhm-and-twistor-data`, `thm-qftx-projective-gaga-for-monad-data`, `def-axiom-of-choice`.

### lem-qftx-asd-twistor-vanishing-and-monad-reconstruction

Prove the coupled Penrose/Weitzenböck vanishing H1(E(−2))=H1(E∨(−2))=0 on CP3 for twistor bundles of framed ASD connections, with flat summands split explicitly before any H0(E)=0 assumption. Reconstruct the normalized three-term monad and its uniqueness using the actual diagonal/hypercohomology/Serre suppliers. State and prove any coupled Dirac kernel dimension/index input with the S4 orientation, chirality and trace charge, rather than confusing an ordinary index formula with an ADHM completeness theorem.

Proof/construction: Recover a complete Atiyah/Penrose or Corrigan–Goddard argument for the analytic transform; source2022 invokes these facts. Identify the exact ordinary Dirac/Weitzenböck suppliers or author their missing specializations. No equivariant index inference is needed here.

Direct suppliers: `thm-qftx-framed-penrose-ward-correspondence-on-s4`, `thm-qftx-projective-gaga-for-monad-data`, `lem-koszul-resolution-and-flat-fibre-restriction`, `thm-first-hypercohomology-spectral-sequence`, `thm-serre-duality-projective-space-coherent-sheaves`, `thm-cohomology-projective-space-twisting-sheaves`.

### lem-qftx-adhm-real-monad-normalization-and-charge

Translate the real-structured CP3 monad to exactly the raw matrices B1,B2,I,J, prove both moment equations, prove regularity equivalent to pointwise invertibility of the construction, and show gauge changes are precisely U(k). Construct the smooth ASD bundle/connection via orthogonal projection, compute its extension/framing at∞ and k=−qN=c2, and prove the inverse matrix extraction. Keep all signs, dual framings and the possible determinant U(1) flat factor explicit.

Proof/construction: Derive the matrix normalization directly. Donaldson2022 §6 uses P/Q block and real-equation conventions that need a checked translation; do not copy signs or dimensions blindly. For U(N) on S4 prove the determinant ASD line is flat and becomes trivial after framing before using a source stated for SU(N).

Direct suppliers: `lem-qftx-asd-twistor-vanishing-and-monad-reconstruction`, `def-qftx-zero-fi-regular-adhm-and-twistor-data`, `def-qftx-adhm-linear-data-stability-and-regularity`, `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`.

### thm-qftx-zero-fi-regular-adhm-asd-correspondence

For N>=2,k>=0 prove the T-equivariant correspondence between the regular zero-FI real moment-map quotient by U(k) (equivalently the regular complex quotient by GL(k) by the real/complex theorem) and the framed smooth finite-action ASD moduli on oriented S4 with k=−qN, with the stated framing/gauge action and smooth/tangent interface wherever used. The map is not an identification of the entire positive-FI resolution with ordinary ASD. The locally-free sheaf locus agrees through the monad/Ward dictionary; non-locally-free Gieseker boundary remains distinct.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `lem-qftx-adhm-real-monad-normalization-and-charge`, `thm-qftx-framed-penrose-ward-correspondence-on-s4`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `thm-qftx-framed-p2-monad-adhm-correspondence`.

## Zero-FI Regular ADHM Data and Framed ASD Connections — Examples

`qftx-adhm-zero-fi-asd-correspondence-examples` (B), proposed order 967.3; companion `qftx-adhm-zero-fi-asd-correspondence`.

Requires: `qftx-adhm-zero-fi-asd-correspondence`, `qftx-adhm-linear-data-and-framed-monads`.

### ex-qftx-zero-fi-flat-framed-sector

Check k=0 gives the framed trivial connection and unique empty datum; the based gauge quotient has no residual framing stabilizer.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `thm-qftx-zero-fi-regular-adhm-asd-correspondence`, `def-qftx-adhm-linear-data-stability-and-regularity`.

### ex-qftx-positive-fi-boundary-is-not-asd

Use the N=k=1 stable datum and its ideal-sheaf monad to show explicitly how positive-FI stability survives while costability/ordinary zero-FI ASD fails.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `thm-qftx-framed-p2-monad-adhm-correspondence`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `def-qftx-adhm-linear-data-stability-and-regularity`.

## Noncompact Torus Localization in Equivariant Borel–Moore Homology

`qftx-noncompact-equivariant-borel-moore-localization` (A), proposed order 967.4; companion `qftx-noncompact-equivariant-borel-moore-localization-examples`.

Requires: `qftx-borel-localization`, `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`, `equivariant-constructible-perverse-foundations`, `relations-functions-and-quotients`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `split-reductive-root-systems-bruhat-cells-and-parabolics`, `unipotent-solvable-groups-and-borel-fixed-points`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`.

### def-qftx-localized-equivariant-borel-moore-data

Let TC=(C*)^r=GL1^r act algebraically on a separated finite-type complex variety X admitting a finite invariant affine atlas. Work with Q coefficients, normalized dualizing object ωXTC|X=ωX and BMj,TC(X)=Hom(kX,ωXTC[−j]). Specify coefficient action H*(BTC;Q)=Q[u1,...,ur], the multiplicative set S generated by nonzero integral characters, proper pushforwards, open restrictions, cap products, and smooth fundamental classes; compare compact TC form with the right product Milnor convention and fix all grading shifts.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-equivariant-borel-moore-homology-and-correspondence-convolution`, `thm-constructible-six-functors-proper-base-change-and-verdier-duality`, `lem-qftx-rational-torus-classifying-space-cohomology`, `def-axiom-of-choice`.

### lem-qftx-eigenfunction-open-bm-annihilation

For a nonzero-weight regular eigenfunction f on an invariant affine chart, its nowhere-zero restriction on D(f) trivializes the associated character line. Prove its equivariant c1=uχ acts by zero on all equivariant BM groups, also on every further invariant open restriction. The sign of χ versus χ−1 must be recorded, but either gives the same localization conclusion. Derive this in the actual normalized six-functor/Borel model, not by formal analogy with ordinary cohomology.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-localized-equivariant-borel-moore-data`, `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`.

### thm-qftx-finite-affine-atlas-bm-concentration

For X in the preceding scope and i:F=XTC→X, prove i_*:S−1 BM*,TC(F)→S−1 BM*,TC(X) (proper pushforward, notation i_*) is an isomorphism. In each affine chart choose finitely many eigen-coordinate algebra generators; the complement of the fixed locus is covered by D(f) for the nonzero weights. Use the previous lemma, finite open-cover Mayer–Vietoris and the actual closed/open localization triangle to prove localized BM of X\F vanishes. No compactness of X, Sumihiro, compact orbit-type nilpotence or undeclared constructibility theorem is assumed.

Proof/construction: Every intersection in the finite D(f) cover still has a nonzero character-line section. Localize the long exact BM sequences, using exactness of localization; then closed/open excision gives concentration. Prove the coefficient/module and finite-cover exactness on actual equivariant frame resolutions.

Direct suppliers: `lem-qftx-eigenfunction-open-bm-annihilation`, `def-qftx-localized-equivariant-borel-moore-data`, `thm-constructible-six-functors-proper-base-change-and-verdier-duality`, `lem-qftx-module-localization-preserves-exactness`.

### lem-qftx-fixed-embedding-bm-euler-self-intersection

For smooth X in the finite-atlas scope, prove F is smooth, has no zero normal characters, and the proper fixed embedding has refined Gysin map with i^! i_*β=eT(νF) cap β in the normalized BM grading. If F is proper, identify ordinary cohomology/BM by complex orientation and prove eT(νF) invertible after character localization by weight-product leading term and finite positive-degree nilpotence. Rank-zero/empty components are explicit.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-localized-equivariant-borel-moore-data`, `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`, `lem-multiplicative-type-groups-are-linearly-reductive`, `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`.

### def-qftx-proper-fixed-locus-localized-pushforward

For a smooth finite-atlas X with proper fixed locus F, define the localized BM pushforward p_*loc=pF*∘(i_*loc)−1, using the proved concentration isomorphism and genuine proper trace pF. State the domain/degree, coefficient field, fundamental-class versus unit convention and permitted insertions. This is a construction on actual BM classes, not a definition of the desired ADHM coefficient or an ordinary nonproper pushforward.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `thm-qftx-finite-affine-atlas-bm-concentration`, `def-qftx-localized-equivariant-borel-moore-data`.

### thm-qftx-proper-fixed-locus-noncompact-localization

Prove the construction independent of the affine cover and compatible with proper equivariant maps with proper fixed loci; when p itself is proper it agrees with genuine proper pushforward. Use actual self-intersection and Thom purity to compute p_*loc(α cap[X])=sumF pF*((i*α/eTνF) cap[F]). For finite F this is the finite reciprocal Euler sum, with degree shifts and empty fixed set correct. The result applies to the separately proved smooth separated stable ADHM quotient and its finite invariant word-slice atlas/partition fixed locus, but those ADHM-specific facts are consumed later in old12 to avoid a page cycle.

Proof/construction: Concentration supplies the canonical inverse before any denominator formula. Proper trace/functoriality proves agreement on proper maps; purity/self-intersection computes the inverse on a smooth fundamental class. Thus the reciprocal formula is derived, not stipulated.

Direct suppliers: `def-qftx-proper-fixed-locus-localized-pushforward`, `lem-qftx-fixed-embedding-bm-euler-self-intersection`, `thm-qftx-finite-affine-atlas-bm-concentration`.

## Noncompact Torus Localization in Equivariant Borel–Moore Homology — Examples

`qftx-noncompact-equivariant-borel-moore-localization-examples` (B), proposed order 967.4; companion `qftx-noncompact-equivariant-borel-moore-localization`.

Requires: `qftx-noncompact-equivariant-borel-moore-localization`.

### ex-qftx-localized-bm-affine-plane

For the diagonal (C*)² action on C², compute the intrinsic localized pushforward of the fundamental class as 1/(u1u2), proving finite invariant atlas, fixed point properness and tangent weights explicitly.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `thm-qftx-proper-fixed-locus-noncompact-localization`, `def-qftx-localized-equivariant-borel-moore-data`.

### ex-qftx-localized-bm-proper-fixed-component

For P1×C with a nontrivial character on C and trivial action on P1, verify F=P1 is proper and derive the localized pushforward of a specified degree-two generator times the fundamental class as 1/u.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `thm-qftx-proper-fixed-locus-noncompact-localization`, `def-qftx-localized-equivariant-borel-moore-data`.

### ex-qftx-nonproper-fixed-locus-excluded

For trivial torus action on C*, fixed locus equals C* and is not proper. Explain precisely why the proper-trace construction here has no value on its fundamental class; do not assign an integral by the fixed-point sum.

Proof/construction: Use the exact specified domains and conventions; a source citation alone is not proof. Existing local drafts are review inputs, not accepted production suppliers.

Direct suppliers: `def-qftx-proper-fixed-locus-localized-pushforward`, `def-qftx-localized-equivariant-borel-moore-data`.

## Source and theory boundary

Donaldson2022 was retrieved/read in full (15pages); Nakajima–Yoshioka was retrieved in full but owner reading was PDFpp17–19 plus adjacentp16. Both invoke substantial dictionaries. No full GAGA or Penrose–Ward source proof is represented as locally complete. Current algebraic Serre duality, O(d) cohomology, Koszul/projective diagonal ingredients, finite resolutions, hypercohomology and normalized equivariant BM/six-functor/self-intersection carriers are exact reused prerequisites. Their applicability and reading limits are recorded in the repair evidence.

The current complete local draft real/complex proof minimizes the explicit norm-logdet functional: stable columns bound g, the positive log determinant bounds g inverse, costable rows handle zero FI; the strictly positive Hermitian-geodesic Hessian proves uniqueness, and finite IFT proves smooth dependence. It does not prove the sheaf or ASD dictionary.

The noncompact pair works with actual BM classes and proper fixed-locus trace. Eigenfunctions on finite invariant affine charts kill character actions; finite MV/excision proves concentration, and self-intersection derives the Euler denominator. No desired ADHM coefficient is used as a definition of its own integral. The original approved correspondence/pushforward obligations remain real until these new native proofs complete.
