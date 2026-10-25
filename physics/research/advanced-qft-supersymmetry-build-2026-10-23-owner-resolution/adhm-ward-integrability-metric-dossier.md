# Ward integrability and positive Hermitian reality: proof obligations

Investigation: 2026-10-24. Scope is the two assigned mathematical topics only. The current full Ward item and zero-FI definition were read. No item, imported source, manifest or state was edited. The five GAGA proposal pairs remain unproved proposals, not accepted suppliers. This dossier does not audit raw-block/orientation, family base change or first-neighborhood reconstruction, which have other owners.

## Current scientific boundary

`thm-qftx-framed-penrose-ward-correspondence-on-s4` explicitly assumes the local integrable-Dolbeault theorem in its Statement/A3. It also expressly includes preservation of the positive Hermitian form by the reconstructed connection as input in Statement/A4. Those are honest conditional boundaries, but not a proof of the full approved Ward correspondence. A3 is an established theorem needing actual local authoring. A4 should eventually be derived from a genuine holomorphic positive Hermitian reality datum; simply adding parallelness to the input restricts the target and leaves that derivation unproved.

The current `def-qftx-zero-fi-regular-adhm-and-twistor-data` describes an isomorphism between dual and conjugate pullback, Hermitian symmetry, and positive forms on spaces of line sections. It does not state an explicit equation identifying the positive forms with the pairing induced by that isomorphism. This compatibility must be made precise. Otherwise even the trivial Ward bundle admits separately supplied arbitrary smooth positive metrics on its section bundle, most of which are not parallel for the flat Ward connection. The condition “unitarily trivial on a line” is also not an independent construction of the metric: the metric and evaluation convention must be specified first.

## What the five analytic proposals do and do not supply

Oka coherence addresses already holomorphic sheaves and neighborhood-uniform relation generators. Local analytic flatness addresses algebraic versus convergent local rings. Local coherent polydisc acyclicity, compact coherent finiteness, and projective scalar Dolbeault comparison address sheaf cohomology. None constructs local holomorphic frames for an arbitrary smooth square-zero matrix (0,1)-operator. The Dolbeault-resolution statement for an *already holomorphic* vector bundle presupposes such frames and cannot be used backwards to create them. None concerns the reality involution, evaluation-induced Hermitian pairing, or preservation of that pairing by the Ward connection. The two topics therefore remain genuine new Ward mathematics after the five proposals are proved.

## Exact inspected suppliers and limits

* `lem-cauchy-transform-with-smooth-parameters`, home `the-dbar-complex-and-integral-solutions`: its full proof was read. The cutoff one-variable Cauchy transform solves scalar ∂bar on a smaller disc, is smooth jointly for supplied smooth data, and preserves holomorphy in any untouched complex variables. It does not solve a matrix equation with the unknown on the right, or prove smooth dependence of a fixed point.
* `lem-local-holder-cauchy-transform-estimate`, home `beltrami-equation-and-measurable-riemann-mapping`: its full Statement and analytic supplier boundary were read. For fixed compact support in the plane it gives C^{k,α}→C^{k+1,α} local estimates for T and its derivative, for every k≥0, 0<α<1. These estimates are much closer to the missing local theorem than scalar Dolbeault vanishing. The proof was not re-audited transitively here.
* `thm-banach-fixed-point`, home `completeness-and-uniform-continuity`: Statement and hypotheses read; complete nonempty metric space plus contraction. Completeness/product estimates for the selected matrix Hölder space and operator smallness still have to be proved or exactly supplied.
* `def-complex-manifolds-and-holomorphic-vector-bundles`, home `compact-laplace-type-operators-and-hodge-representatives`: specifies smooth/holomorphic bundles and frames; it does not prove integrability implies frame existence.
* `def-complex-linear-and-compatible-bundle-connections`, home `chern-weil-theory-and-characteristic-forms`: supplies the complex-linear/Hermitian compatibility interface. `def-dual-connection`, home `connections-levi-civita-and-parallel-transport`, explicitly constructs the dual matrix -ω^T, but its declared bundle convention is real; extending this to complex/conjugate bundles requires a short explicit coordinate argument, not a silent domain substitution.
* `thm-chern-connection-of-a-hermitian-holomorphic-line-bundle` was inspected through its full statement and proof: it is rank one on a Riemann surface. It does not establish the rank-N Ward real structure or show that an independently reconstructed connection is the Chern connection. The rank-N uniqueness argument is elementary and can be authored, but does not itself identify Ward's connection.
* `lem-matrix-inversion-preserves-ck-regularity`, home `the-inverse-function-theorem-completed`, is an available smooth inversion supplier. `thm-dolbeault-lemma-polydisc` supplies scalar local primitives and should not be named as the whole nonabelian integrability theorem.

Actual homes above were resolved from current library placements. No proof acceptance was inferred from titles or placement.

## Local Koszul–Malgrange theorem: exact needed interface

Let M be a complex manifold (dimension3 suffices for Z, but any finite dimension has the same proof), E a finite-rank smooth complex vector bundle, and D'' a complex-linear operator on smooth sections with Leibniz rule D''(fs)=∂bar f⊗s+fD''s. Extend it to E-valued forms by the graded rule. If (D'')²=0, there are local smooth frames e_1,…,e_N with D''e_a=0. Their transition matrices are holomorphic, so these frames determine a unique holomorphic structure whose Dolbeault operator is D''. Smooth morphisms commuting with the operators are exactly holomorphic bundle morphisms. No metric, unitarity or algebraicity hypothesis belongs in this local theorem.

In a smooth trivialization write D''=∂bar+A, A=Σ A_j dbar z_j. Integrability is

    ∂bar_j A_k - ∂bar_k A_j + [A_j,A_k] = 0.

For a frame change by a smooth invertible matrix G the new coefficient is

    A'_j = G^{-1}(∂bar_j G + A_j G).

Consequently the task is to solve ∂bar_jG=-A_jG simultaneously, not to find scalar primitives of A_j. Naively using a primitive entrywise and exponentiating fails because matrices do not commute; integrability contains the commutator term.

### Genuine local construction still to write

1. Prove a parameterized one-variable matrix lemma on a small disc: for smooth A(z,p), construct G near identity solving ∂bar_zG=-AG, smoothly in all real parameters p, and holomorphically in any complex parameters in which A is holomorphic. Rescale to a fixed unit disc, insert a fixed cutoff, and solve G=I-T(χAG) in a matrix C^{0,α} Banach space. Show the norm of the multiplication/Cauchy operator is <1/2 after scaling, uniformly on a compact parameter neighborhood. The solution is uniformly near I, hence invertible. This is existence for a chosen normalization by the integral equation, not uniqueness of all local differential-equation solutions.
2. Prove parameter regularity: the coefficient map into the fixed Banach space is smooth; difference quotients of (I+TχA)^{-1} or its uniformly convergent Neumann series yield derivatives. Prove holomorphic parameter preservation by differentiating and using invertibility, or uniform convergence of holomorphic iterates. Joint smoothness in the solved variable follows by the actual Cauchy Hölder gain and bootstrap on nested discs. Do not choose a shrinking radius depending on every derivative order and then intersect to a possibly empty neighborhood. One fixed initial contraction neighborhood and interior regularity bootstrap are required.
3. Kill A_1, then A_2,… by finite induction. After the first j-1 coefficients vanish, integrability says ∂bar_iA_j=0 for i<j. Choose the next G holomorphic in those earlier variables, so it preserves the vanished coefficients. A finite sequence of shrinkings leaves a genuine common neighborhood. Gauge covariance preserves integrability. At the end all coefficients vanish.
4. Check transitions and uniqueness of the resulting holomorphic structure by the Cauchy–Riemann characterization. Establish morphism functoriality from D''-commutation in flat local frames.

This is a bounded nonabelian analytic bridge supported by existing estimates; no claim is made that the above outline is already a complete accepted proof. In particular the Banach-parameter differentiation and Hölder bootstrap must be present in the authored proof.

## Genuine positive Hermitian Ward datum

Fix the antipodal real structure σ on Z preserving each real twistor line. A precise datum can be a holomorphic, fibrewise nondegenerate pairing β between E and σ^*bar E, equivalently a holomorphic isomorphism E→(σ^*bar E)^*. At z it is a sesquilinear pairing

    b_z : E_z × E_{σz} → C,

linear in the first variable and conjugate-linear in the second, using that convention throughout. Specify the symmetry

    b_{σz}(w,v) = overline(b_z(v,w)).

For s,t∈H^0(L_x,E|L_x), define

    h_x(s,t) = b_z(s(z),t(σz)).

This value is independent of z∈L_x: as a function of z the conjugate of t(σz) is holomorphic, β is holomorphic, and holomorphic functions on CP1 are constant. Positivity means h_x(s,s)>0 for every nonzero s, at every real line. It is this *induced* h, not an independently chosen positive family, that is required. Line triviality makes evaluation an isomorphism; the smooth direct-image/evaluation theorem then makes h smooth locally. No metric parallelness appears in the datum.

The datum can instead be written with the isomorphism in the reverse direction, provided dualization/conjugation and the displayed pairing equation are checked exactly. A reality involution of E squaring to ±I without the dual pairing is a different structure and should not replace this U(N) datum.

### Deriving preservation, rather than assuming it

This argument needs the Ward reconstruction and its evaluation property supplied by the separately owned first-neighborhood/family work. State that dependency explicitly: the reconstructed smooth connection satisfies that evaluation π^*Ehat→E intertwines its horizontal (0,1)-derivative with the holomorphic operator at each z. Also prove naturality for duals and conjugation; alternatively carry out the following pairing calculation directly.

For local sections s,t and a complex tangent vector X at x, the complex-linear extension of ∇h has value

    K_X(s,t)=X(h(s,t))-h(∇_X s,t)-h(s,∇_{bar X} t).

The bar X in the last term is essential because h is conjugate-linear in its second entry. For X in the alpha-plane at z, bar X lies in the antipodal alpha-plane at σz. Holomorphy of β, evaluation intertwining at z and σz, and the induced-metric equation give K_X=0. In the Euclidean real form the alpha-planes at z and σz are complementary complex two-planes and span T_C S4. Thus K=0 on the full complexified tangent space, so the reconstructed connection preserves h. This is the local calculation that must replace input A4. The alpha-plane conjugation/complementarity is a precise geometric supplier requirement; this dossier does not re-audit the parent's spinor/orientation conventions.

Equivalently, prove the complex Ward transform preserves the holomorphic dual pairing and commutes with σ-conjugation. It then sends β to a parallel map Ehat→bar Ehat^*, and positivity selects U(N). This “naturality” is not automatic from fibrewise evaluation alone: it must be proved for the connection/first-jet construction.

Conversely a unitary connection supplies b_z from the pulled-back metric, since πz=πσz. To show β is holomorphic, use metric compatibility, the conjugate alpha-plane relation and the actual pulled-back Dolbeault operator. Pairing and adjoint symmetry are then inherited, and positivity on the line-section fibre is the original positivity. This proves the real-structure portions of both inverse maps, subject to the other Ward construction inputs; no irreducibility assumption is needed.

A counterexample marking the boundary is the trivial holomorphic rank-N bundle on Z with standard β. Its induced section metric is constant. The flat Ward connection does not preserve an independently assigned h'=exp(f(x))I for a nonconstant smooth real f on S4, because ∇h'=exp(f)df·I. The bundle and standard β did not change, so merely listing positive forms alongside β cannot establish compatibility. Such h' is not the metric induced by β. This example should appear in the new companion page.

## Authoritative source evidence and actual limits

Donaldson, *The ADHM construction of Yang-Mills instantons*, https://arxiv.org/pdf/2205.08639 : successfully retrieved in memory; printed/PDF pp.3–6 read in this investigation, specifically §3 pp.4–6. It describes the first-neighborhood Ward construction and states a dual real-structure isomorphism on p.5; p.6 invokes Newlander–Nirenberg for the smooth approach. It does not give the local smooth matrix-frame proof or a complete positivity/metric-parallel derivation there. These pages cannot be cited as a complete local proof of either gap.

Demailly, *Complex Analytic and Differential Geometry*, https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf : actual printed/PDF pp.266–270 read in full. V10.3 p.267 proves the rank-N unique Hermitian connection with given (0,1)-part by A'=-(A'')^* in a unitary frame. V11 defines holomorphic bundles and their canonical Dolbeault operators, V12 pp.268–269 computes the Chern connection, and p.270 warns that holomorphic and orthonormal frames need not coincide. These paragraphs assume an existing holomorphic structure; they do not prove Koszul–Malgrange or identify the reconstructed Ward connection. This is a useful full source proof of the elementary Hermitian uniqueness fact only.

Koszul–Malgrange, *Sur certaines structures fibrées complexes*, Archiv der Mathematik9 (1958), pp.102–109, DOI https://doi.org/10.1007/BF02287068 : identity and publisher link confirmed against Crossref. The correct DOI is BF02287068; an initial unconfirmed different DOI was discarded. The Springer PDF/article endpoints returned HTTP200 with 3,038 bytes of HTML browser-challenge text, not a PDF. The paper's full proof was NOT retrieved or read. No original-paper theorem number or proof-reading stamp is asserted. A search for “Koszul/Malgrange” in Demailly's retrieved whole text found no relevant theorem; this search is not whole-book reading. Schnell's 136-page complex-manifolds notes were retrieved and searched for integrability/Malgrange; no relevant local proof was found, and no whole-document reading is claimed. Other failed URL guesses/search pages were not evidence. No source PDF was saved or altered.

Thus the exact local proof outline above is a proposed reconstruction from inspected Cauchy/Hölder suppliers, not a claim of recovering a complete authoritative Koszul–Malgrange proof. The reality argument is an explicit proposed local calculation beyond Donaldson's sketch and still needs independent review with the actual evaluation/naturality supplier. Missing local proof of these established results is an authoring obligation, not an open mathematical problem.

## Detailed local matrix-frame proof for integration as a modest helper

This is a written proof relative to the exact inspected Cauchy Hölder estimate, not an external-proof reading claim or independent acceptance. An additional actual supplier was found and read: `thm-holder-spaces-on-bounded-domains-are-banach-spaces`; its Statement and complete proof give completeness of finite-norm C^{k,α}(D) for arbitrary open D, and of the closure class on a bounded domain, under countable choice. Finite matrix products inherit completeness. Thus no new general PDE theorem is needed for this helper.

Fix α=1/2. On X=C^{0,α}(closure D_2;Mat_N(C)), use the supremum of a submultiplicative matrix norm plus its Hölder seminorm; finite-dimensional norm equivalence transfers the scalar supplied estimates entrywise. This is a Banach space by the completeness supplier. The elementary inequality [UV]_α≤||U||_∞[V]_α+[U]_α||V||_∞ gives ||UV||_X≤||U||_X||V||_X. Normalize the matrix norm by ||I||=1. Fix χ∈C_c^∞(D_{3/2}) equal1 on D_1. Multiplication by χ followed by extension by zero is a bounded map X→C^{0,α}(C): near the boundary of D_2 the product is identically zero; across the support boundary the same Hölder inequality controls the increment. For every k it similarly maps C^{k,α}(closure D_2) boundedly into the fixed-support C^{k,α} class of the supplied lemma.

Let A(z,p) be smooth for |z|<R and p in an open finite-dimensional real parameter set, with all variables defined on a neighborhood of a product closure {|z|≤R_0}×P_0. Restrict p to the interior of a compact smaller parameter box P_0. Put z=ρw, 0<2ρ<R_0, and a_ρ(w,p)=ρA(ρw,p). The C^{0,α}(D_2) norm of a_ρ is bounded by Cρ(M_0+ρM_1), where M_0 and M_1 are uniform bounds for A and its first z-derivatives on the fixed product closure; a Lipschitz function on D_2 has Hölder seminorm at most 4^{1-α} times its Lipschitz constant. The cutoff and the T estimate therefore give

    ||B_p||_{X→X} ≤ C_T C_χ Cρ(M_0+ρM_1),  B_p U = (T(χ a_ρ U))|_{D_2}.

All constants are independent of p and sufficiently small ρ. Choose one positive ρ with this bound q≤1/4. The affine contraction U↦I-B_pU has a unique fixed point G_p∈X. The fixed point satisfies ||G_p-I||_X≤q/(1-q)≤1/3, so every G_p(w) is invertible by the finite-matrix geometric series. The equation and ∂bar_w T f=f imply, on D_1 where χ=1,

    ∂bar_w G_p = -a_ρ G_p.

After returning to z this is ∂bar_zG=-AG. For now this identity holds in the regularity sense of T; in fact the gain gives G_p∈C^{1,α}(closure D_2), so it is pointwise on D_1.

Here are the parameter and regularity details avoiding derivative-dependent shrinkings. Smoothness of A on the fixed product closure implies p↦a_ρ(.,p) is C^∞ as a map into X. For a parameter difference quotient, Taylor's formula with integral remainder controls both the supremum and Hölder seminorm of the remainder: bound its first w-derivative as well as its supremum. All needed mixed derivatives of A are bounded on a slightly larger compact parameter box. Consequently p↦B_p is C^∞ in the operator norm on X. Write R_p=(I+B_p)^{-1}, whose Neumann series is uniformly bounded by1/(1-q). The exact identity

    R_{p+h}-R_p = -R_{p+h}(B_{p+h}-B_p)R_p

first proves norm continuity and then, after division by a coordinate increment, proves ∂_νR=-R(∂_νB)R. Repeated product differentiation proves all higher parameter derivatives. Thus G_p=R_pI is C^∞ into X on one fixed neighborhood. If selected complex parameters enter A holomorphically, ∂bar_p B=0, hence ∂bar_pG=0 by the same identity. T acts only in w and χ is independent of these parameters; no antiholomorphic parameter dependence is introduced. The Cauchy–Riemann characterization then gives holomorphic dependence in those parameters.

The supplied C^{k,α}→C^{k+1,α} estimate now bootstraps in w on this very same D_2: from G=I-T(χ aG), C^{0,α} gives C^{1,α}; if G is C^{k,α}, its product with χa extends by zero in C^{k,α} and the estimate gives C^{k+1,α}. No higher-order smallness is used. Parameter derivatives satisfy the differentiated identity

    ∂_p^β G = -T(χ Σ_{γ≤β} binomial(β,γ)(∂_p^γ a)(∂_p^{β-γ}G))

for |β|>0, and the original identity for β=0. All derivatives are already continuous into X. Inductively applying the same gain to these identities shows they are continuous into C^{k,α} for every k: at each stage all terms on the right are continuous in C^{k,α} by the prior stage, so T makes the identities continuous in C^{k+1,α}. Difference quotients obey the same bounded-map identities, proving compatibility of these derivatives in each stronger norm. Thus the solution is jointly C^∞ in w and p, and holomorphy in selected parameters remains true. Smooth matrix inversion follows from the actual inversion supplier. This completes the parameterized one-variable lemma.

For the finite-dimensional complex manifold theorem, work in one smooth bundle trivialization on a polydisc about the chosen point, and choose compactly contained parameter polydiscs for all coordinates not currently being solved. Write D''=∂bar+ΣA_jdbar z_j. Suppose A_1,…,A_{j-1}=0 in the current frame. The integrability component with i<j is ∂bar_iA_j=0. Apply the proved lemma in z_j with all other coordinates as parameters; the gauge G_j is holomorphic in z_1,…,z_{j-1}. Its transformed coefficients satisfy A'_i=G_j^{-1}∂bar_iG_j=0 for i<j and A'_j=0 on the smaller z_j disc. The connection-square transforms by conjugation G_j^{-1}(D'')²G_j, so integrability is retained. Shrink parameter polydiscs finitely as needed to retain compact closure within the current domain; there are only n steps and every chosen radius is positive. This produces a genuine common neighborhood and a smooth invertible total gauge G_1…G_n with every coefficient zero. At each step all real parameters are smooth, and the already solved complex parameters remain holomorphic exactly as required.

In these frames D'' is scalar ∂bar entrywise. If two resulting frames differ by H, their D''-flatness gives ∂barH=0; smoothness and Cauchy–Riemann make H holomorphic and invertible. These transitions define a holomorphic bundle with precisely D''. Conversely any holomorphic structure with that operator has holomorphic local frames among these flat frames, so the holomorphic sheaf is exactly kerD'' and the structure is unique. For a smooth bundle map f, the relation D''_F f=fD''_E becomes ∂bar(f_matrix)=0 in flat frames, equivalent to holomorphy. This establishes the desired local integrability and morphism interface without invoking the five GAGA proposals or the full Ward theorem.

The parent can integrate this modest helper within batch60 if the actual proof contract permits it; no new-pair fragment was written at the parent's latest direction. The metric derivation above still requires the separately owned Ward evaluation-intertwining/naturality interface; it does not assume metric parallelness. It can also be proved inside batch60 once that exact interface is established. Neither helper depends on the full Ward correspondence or downstream ADHM completeness. Full source-backed independent review remains required; this dossier asserts no native approval.
