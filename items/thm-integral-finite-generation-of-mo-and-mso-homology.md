---
id: thm-integral-finite-generation-of-mo-and-mso-homology
kind: theorem
title: "Integral finite generation of universal real and oriented Thom homology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-oriented-grassmannian-has-two-lifted-schubert-cells
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - def-schubert-cells-in-real-and-complex-grassmannians
  - thm-homotopy-invariance-of-vector-bundle-pullback
  - thm-gram-schmidt-orthonormalisation
  - thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence
  - thm-cover-small-singular-chains-compute-singular-homology
  - thm-long-exact-sequence-in-homology
  - cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient
  - cor-homology-of-spheres
  - thm-relative-homology-of-consecutive-cw-skeleta
  - thm-cellular-chains-compute-homology-with-local-coefficients
  - lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients
  - thm-a-filtered-complex-produces-an-exact-couple
  - thm-an-exact-couple-generates-a-spectral-sequence
  - thm-homological-serre-spectral-sequence
  - lem-compact-cw-images-have-finite-cell-support-without-choice
  - cor-principal-ideal-domains-are-noetherian
  - thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
  - thm-quotient-universal-property
  - thm-compact-subset-of-a-hausdorff-space-is-closed
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 23 §5, printed pp.194–196; homological local-system filtration and finite-generation proof supplied locally"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "§2.1, Proposition 2.22 (good-pair quotient); §2.2, cellular homology"
verification:
  precheck: pass
---

## Statement

Assume AC. For every r≥0 and every i≥0, H_i(MO(r);Z) and H_i(MSO(r);Z) are finitely generated. For positive rank the locally constructed homological Thom comparison is H_i(D(γ_r),S(γ_r);Z)=H_{i−r}(BO(r);O_Z(γ_r)), and likewise for γ_r⁺ with the constant orientation system. The disk/sphere quotient identifies these groups with reduced Thom homology. At rank zero the based quotient is B₊; BO(0)=BSO(0)=* gives S⁰ and is handled separately.

## Facts & Assumptions

**Given:** AC; ranks $r\ge0$; the universal metric bundles $\gamma_r\to BO(r)$ and $\gamma_r^+\to BSO(r)$ with their disk and sphere bundles; the Shubert CW structures on the base with finitely many cells in each dimension and two lifted cells in the oriented case; and the actual relative singular complexes $C_*(D,S;\mathbb Z)$.

[F1] The Schubert CW structures have finitely many cells in each dimension; homotopy invariance of pullback, Gram–Schmidt orthonormalization, the two-open-set Mayer–Vietoris sequence for small chains, the homology long exact sequence and the good-pair quotient theorem provide the local product trivializations and the comparison of the algebraic sum with the actual pair complex ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[def-schubert-cells-in-real-and-complex-grassmannians]], [[thm-homotopy-invariance-of-vector-bundle-pullback]], [[thm-gram-schmidt-orthonormalisation]], [[thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]], [[thm-cover-small-singular-chains-compute-singular-homology]], [[thm-long-exact-sequence-in-homology]], [[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]]).

[F2] Consecutive CW skeleta have relative homology free on the cells, the first Serre differential is the cellular boundary with local coefficients, and cellular chains compute homology with local coefficients ([[thm-relative-homology-of-consecutive-cw-skeleta]], [[lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients]], [[thm-cellular-chains-compute-homology-with-local-coefficients]]); compact images have finite cell support without choice ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

[F3] A filtered complex produces an exact couple, which generates a spectral sequence; these algebraic constructions alone assert no abutment ([[thm-a-filtered-complex-produces-an-exact-couple]], [[thm-an-exact-couple-generates-a-spectral-sequence]]). The Serre theorem supplies convergence for its fibration hypotheses only ([[thm-homological-serre-spectral-sequence]]); convergence for the present relative filtration is proved in step 7.1. The sphere and disk computations give the layer homology ([[cor-homology-of-spheres]]).

[F4] The orientation local system of $\gamma_r$ has stalk $\mathbb Z$ and the oriented case has two lifted cells ([[def-r-oriented-vector-bundle-and-orientation-local-system]], [[lem-oriented-grassmannian-has-two-lifted-schubert-cells]], [[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F5] Over the Noetherian ring $\mathbb Z$, submodules of finitely generated modules are finitely generated, so finite free cellular chains have finitely generated homology ([[cor-principal-ideal-domains-are-noetherian]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[F6] The quotient universal property and the compact-subset-closed theorem justify the finite-attachment quotient identifications and the weak topology ([[thm-quotient-universal-property]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]); AC underlies the cell and model choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 H_i(D(γ_r),S(γ_r);Z) ≅ H_{i-r}(BO(r);O_Z(γ_r)). Here is the required local homological argument; this is not an assertion that the published **cohomological** Thom theorem already states it. Write B=BO(r), B_p=B^(p), D_p=D(γ_r)|B_p and S_p=S(γ_r)|B_p. Set D₋₁=S₋₁=∅ and S=S(γ_r). On the actual relative singular complex C=C_*(D,S;Z), define the increasing subcomplexes F_p C=(C_*(D_p;Z)+C_*(S;Z))/C_*(S;Z). A simplex common to D_p and S lands in S_p, so F_p C identifies with C_*(D_p,S_p). The graded complex is consequently gr_p C=C_*(D_p)/(C_*(D_{p-1})+C_*(S_p)). The sum in this denominator is not silently identified with the singular chains of its union. The following relative collar argument justifies the needed homology comparison. [given, F1, F4]

2.1 Each B_p is finite compact CW, by the Schubert count below. Over a characteristic disk D^p, contract the disk and apply the published homotopy-invariance-of-pullback theorem to trivialize the pulled-back bundle. Orthonormalize the resulting frame with its pulled-back metric. The Gram–Schmidt formulas subtract the earlier orthogonal projections and divide by strictly positive lengths, so all frame coordinates vary continuously; this uses the inspected Gram–Schmidt supplier and needs no unproved continuity of matrix square roots. The pullback fiber pair is therefore the actual product (D^r,S^{r-1}), with transitions preserving the sphere. The finitely many products D^p×D^r, attached over ∂D^p×D^r to D_{p-1}, give D_p with its actual topology. Indeed the attachment quotient maps bijectively to D_p and is compact, whereas D_p is Hausdorff; thus the map is a homeomorphism. This also supplies all subsequent cellwise continuity checks. [step 1.1, F1, F6]

3.1 Put A_p=D_{p-1}∪S_p. In A_p take the two open neighborhoods U and V as follows. U contains D_{p-1} and, in each attached product, the sphere points with base radial coordinate ||x||>1/2. V is the set of fiber points with ||z||>1/2. Their openness follows from the finite product attachment test, they cover A_p, and V deformation retracts to S_p by fiber radial normalization. U deformation retracts to D_{p-1} by radially moving x to x/||x|| in each base-cell collar while retaining the norm-one coordinate z in its isometric trivialization. On the boundary these formulas are the identity, so differing boundary representations give the same actual point. The same homotopy preserves the sphere subbundle and the fiber norm. It retracts U∩V to the norm->1/2 neighborhood of S_{p-1} in D_{p-1}; fiber normalization then retracts that neighborhood to S_{p-1}. For p=0, U is empty and the same statements hold with D₋₁=S₋₁=∅. [step 2.1, F1]

4.1 The exact chain sequence for the algebraic sum C_*(D_{p-1})+C_*(S_p) has intersection C_*(S_{p-1}). Compare it with the published two-open-set small-chain sequence for U,V. The three inclusions from D_{p-1}, S_p and S_{p-1} to U,V and U∩V are homology isomorphisms by these retractions. The long exact sequences and their injectivity/surjectivity chase show that the sum inclusion into C_*(U)+C_*(V) is a homology isomorphism. The inspected `thm-cover-small-singular-chains-compute-singular-homology` identifies the latter with C_*(A_p) on homology. Hence the natural map from gr_p C to C_*(D_p,A_p) is a homology isomorphism, by the short exact quotient sequences. This establishes the relative use of excision without invoking an absolute fiber lemma as if it already treated pairs. [step 3.1, F1, F2]

5.1 The pair (D_p,A_p) is good. In each product D^p×D^r, A_p contains its full boundary, namely ∂D^p×D^r ∪ D^p×S^{r-1}. The annulus max(||x||,||z||)>1/2, together with A_p itself, is an open neighborhood of A_p and retracts onto A_p by radial normalization in this maximum norm. Boundary points are fixed, so the formula descends through all attachments and is continuous by the same compact quotient test. The good-pair theorem identifies its relative homology with the reduced homology of D_p/A_p. That quotient is a finite wedge, one sphere S^{p+r} for each p-cell of B: each product ball has its entire boundary collapsed and distinct interiors remain distinct. The published sphere and cellular relative calculations give H_{p+q}(gr_p C)=⊕_{p-cells} Z if q=r, and 0 otherwise. [step 4.1, F1, F3, F6]

6.1 Orient each base disk and each local fiber. The generator is the base-first product relative orientation class. Under a change of local isometric fiber frame, its sign changes exactly by that frame change's determinant sign. To check d₁ precisely, use the positive chain-connector formula: represent a layer generator by its product disk relative cycle, take its singular boundary, and project that boundary to the preceding layer. The fiber-boundary term is in S and vanishes. The surviving base-boundary term is transported by the disk trivialization. Projecting to each lower-cell summand commutes with this connector by naturality of the quotient and excision maps. Thus a positively oriented attaching incidence acts on the fiber generator by its path transport; reversing that incidence changes its sign by the base disk orientation. In the lifted cellular coordinates of the published local-coefficient cellular theorem, write an attaching boundary as ∂ẽ=Σ_f f̃ r_fe, r_fe=Σ_g n_feg g ∈ Z[π₁(B)]. Each signed term n_feg in this group-ring incidence acts on the local fiber generator by the orientation character ε(g)∈{1,−1}. Consequently our d₁ coefficient is Σ_g n_feg ε(g), exactly the cellular boundary with coefficients O_Z(γ_r). This follows by the preceding connector calculation term by term and its finite additivity, precisely as in the inspected first-Serre-differential supplier; quotienting by fiber sphere chains changes its generator to the relative orientation generator and kills only the fiber-boundary term. All attaching maps have finite support. This formula does not multiply the ordinary summed integer incidence by a single sign: different incidence paths can have different orientation signs. The published lift-basis invariance makes the identity independent of the temporarily supplied cell lifts. There is only the row q=r, so E² is H_p(B;O_Z(γ_r)) on that row and every later differential vanishes. [step 5.1, F2, F4, algebra]

7.1 Apply the filtered-complex exact-couple construction to $F_pC$, with $F_pC=0$ for $p<0$. The filtration is exhaustive on chains and on boundary primitives: their projected compact supports lie in finite base subcomplexes. Fix total degree $n$ and column $p$. In the exact-couple formula of [F3], $N^s_{p,n-p}=\ker k$ once $s>p$, because its incoming $D^1$ term has negative filtration index. Moreover $B^s=j\ker(H_n(F_pC)\to H_n(F_{p+s-1}C))$. Exhaustivity on primitives implies that the union of these kernels is $\ker(H_n(F_pC)\to H_n(C))$. Step 6.1 shows that all differentials after $E^2$ vanish. Once $N^s$ is fixed, the canonical maps $N^s/B^s\to N^s/B^{s+1}$ are therefore isomorphisms, so $B^s$ equals its union. Exactness of the initial couple gives $\ker k=\operatorname{im}j$ and $\ker j=\operatorname{im}(H_n(F_{p-1}C)\to H_n(F_pC))$. Quotienting consequently identifies the stable term with $F_pH_n(C)/F_{p-1}H_n(C)$, where $F_pH_n(C)$ is the image in $H_n(C)$. The only possible nonzero quotient is at $p=n-r$. Starting from $F_{-1}H_n=0$ and using exhaustivity, this single quotient is the entire homology; when $n<r$, every quotient is zero. Thus $H_n(D,S;\mathbb Z)\cong H_{n-r}(B;\mathcal O_{\mathbb Z}(\gamma_r))$. This proves the required convergence for this filtration without invoking a general abutment theorem. [step 6.1, F2, F3, algebra]

8.1 There are only finitely many Schubert cells in each dimension of BO(r): if d=Σ(a_i−i), every a_i≤i+d. The orientation system has stalk Z, so its cellular chains are finite free in each degree. Published cellular homology and Noetherianity give finite generation of their homology. Finally S(γ_r) is a closed subspace of D(γ_r), with open neighborhood ||v||>1/2 retracting onto S by radial normalization. The published good-pair homology theorem identifies relative disk/sphere homology with reduced Thom homology. The basepoint adds only the finitely generated H₀ summand. This proves the assertion. The same argument works for MSO(r), whose base cells are the two lifted copies of the ordinary Schubert cells. At rank zero, handle the assertion separately: D=B, S=∅ and the based Thom quotient is B₊, whose reduced homology is H_*(B;Z). Here B=BO(0)=BSO(0) is a point, so finite generation is immediate. The positive-rank good-pair theorem is not applied to its empty sphere bundle. [step 7.1, F1, F3, F5] ∎
