---
id: lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence
kind: lemma
title: "Cohen–Macaulay isospectral schemes give all-n surface Hilbert kernel equivalence"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line
  - lem-gts-regular-base-finite-length-perfect-complex-acyclicity
  - thm-hilbert-scheme-represents-projective-flat-families
  - thm-auslander-buchsbaum-formula
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-proper-pushforward-coherent
  - lem-projective-regular-local-base-coherent-duality-by-embedding
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-serre-vanishing
  - def-derived-category-of-an-abelian-category
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line: mathematical-premise
  lem-gts-regular-base-finite-length-perfect-complex-acyclicity: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  lem-projective-regular-local-base-coherent-duality-by-embedding: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, retrieved arXiv math/0010246,
      sections 3.8 and 5.1; explicit local constructions below
    url: https://arxiv.org/pdf/math/0010246
    locator: §3.8 (pp.19–22) and §5.1 (pp.57–58), especially Theorem6 identifying the symmetric-group Hilbert scheme
      and isospectral universal family; the arbitrary-canonical-line equivalence argument is supplied locally.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence.md
dependency_level: 1
---

## Statement

Assume AC and DC. Let S be a smooth connected projective complex surface, n≥1, $Y=S^[n]$, $M=S^n$, $Q=Sym^n$ S, and $X=(Y\times_Q M)_{\mathrm{red}}$ with projections p:X→Y and r:X→M. Assume EXPLICITLY that X is Cohen–Macaulay; this is the all-n Haiman input, not proved by the present criterion. Then p is finite flat of rank n!, $P=p_{*}O_{X}$ is an $S_{n}$-equivariant vector bundle with regular-representation fibers, Y is the reduced free-orbit component of $S_{n}-Hilb(M)$, and X is its actual universal cluster. The Fourier–Mukai functor $Φ(A)=Rπ_{M,*}(O_{X}⊗^Lπ_{Y}*A)$ gives an equivalence $D^b(\operatorname{Coh}Y)\simeq D^b_{S_n}(\operatorname{Coh}M)$, with no symplectic or canonical-triviality assumption. It naturally intertwines surface automorphisms and tensoring by norm lines: for a line A on S, let $A_{(n)}$ be the descent of $A^{⊠n}$ to Q and $A_{n}=τ*A_{(n)}$; then $Φ(F⊗A_{n})=Φ(F)⊗A^{⊠n}$, coherently under powers and specified torsion trivializations. Exterior products of equivariantly linearized Fourier–Mukai kernels give the corresponding $S_{n}$ and wreath-product compatibilities. P is not asserted to be a global tilting bundle on a projective Hilbert scheme. The Cohen–Macaulay premise must remain explicit until its all-n polygraph proof is locally supplied.

## Statement references

[[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]]

[[lem-gts-regular-base-finite-length-perfect-complex-acyclicity]]

[[thm-hilbert-scheme-represents-projective-flat-families]]

[[thm-auslander-buchsbaum-formula]]

[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

[[thm-proper-pushforward-coherent]]

[[lem-projective-regular-local-base-coherent-duality-by-embedding]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[thm-serre-vanishing]]

[[def-derived-category-of-an-abelian-category]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are retained from the actual coherent/projective suppliers. The Cohen–Macaulayness of the all-n isospectral scheme is an explicit hypothesis; no citation is accepted as its local proof.

[F1] The exact mathematical interfaces used are [[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]], [[lem-gts-regular-base-finite-length-perfect-complex-acyclicity]], [[thm-hilbert-scheme-represents-projective-flat-families]], [[thm-auslander-buchsbaum-formula]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[thm-proper-pushforward-coherent]], [[lem-projective-regular-local-base-coherent-duality-by-embedding]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-serre-vanishing]], [[def-derived-category-of-an-abelian-category]], [[def-axiom-of-choice]], [[def-dependent-choice]].

## Proof

**Given:** Exactly the objects and hypotheses of the Statement.

1.1 Define $X_n(S)=(Y\times_Q M)_{\mathrm{red}}$, the reduced isospectral fiber product, and write $p:X_{n}→Y$, $r:X_{n}→M$. The remaining input is: [given, A1, F1, algebra]

2.1 $(H_{n})$ $X_{n}(S)$ is Cohen–Macaulay, for every n. [given, A1, F1, step 1.1, algebra]

3.1 The projection p is finite, since M→Q is finite, and generically has degree n!. Its reduced fiber product equals the reduced closure of the ordered distinct-point locus: that closure is $S_{n}$-stable and its image under the finite p is closed and contains the dense distinct-point locus, hence all of Y. Over any closed y its nonempty fiber therefore contains an ordering of the support cycle. $S_{n}$ acts transitively on all such orderings, so this fiber contains every closed point of the reduced fiber product. The two reduced closed schemes consequently coincide. The ordered distinct-point locus is irreducible, so $X_{n}$ is integral of dimension 2n. In the local finite extension over the regular local ring of Y, the parameters of Y are a system of parameters on $X_{n}$ and are regular by $(H_{n})$. Auslander–Buchsbaum makes $p_{*}O_{X}$ locally free, of rank n!. This is actual flatness, not a generic-degree argument. The remaining Haiman hypothesis is precisely Cohen–Macaulayness, not an additional assumed component equality. [given, A1, F1, step 2.1, algebra]

4.1 The $S_{n}$-action splits this bundle by the constant character projectors. Its isotypic ranks are constant on connected Y and equal the regular-representation multiplicities on the distinct-point locus. Thus every fiber is a regular $S_{n}$-module. The closed embedding $X_{n}⊂Y×M$ is an actual family of $S_{n}$-clusters and defines a morphism $ψ:Y→S_{n}-Hilb(M)$, into the reduced free-orbit component. [given, A1, F1, step 3.1, algebra]

5.1 The reverse morphism is constructed on families. For any $S_{n}$-cluster algebra P over T, $P^{S_{n−1}}$ is a direct summand of rank n. It is generated, as an $O_{T}$-algebra, by functions on the remaining single S factor, because symmetric functions in the other n−1 factors are expressible using functions in that factor and fully symmetric functions, and the latter act as scalars on $P^{S_{n}}=O_{T}$. Here is the invariant generation used in this assertion: orbit sums of tensors $f_1⊗⋯⊗f_{k}$ with different positions are obtained by inclusion–exclusion over set partitions from products of the power sums $Σ_{j}$ $f(P_{j})$; divide by the finite factorial multiplicities in characteristic zero. For $S_{n−1}$, use $Σ_{j<n}$ $f(P_{j})=Σ_{j≤n}$ $f(P_{j})−f(P_{n})$. Exact finite-group averaging lifts invariants through a quotient. This proves the assertion for every affine coordinate algebra, not only for polynomial functions on A². [given, A1, F1, step 4.1, algebra]

6.1 Choose an affine open in S containing the finitely many support points (an ample hyperplane avoiding them has affine complement). The preceding generation gives a closed length-n flat family in S, hence a morphism $φ:S_{n}-Hilb(M)→Y$. These morphisms glue canonically. Both φψ and ψφ are identity on the distinct free-orbit locus; since the relevant components are reduced integral and their targets are separated, they are identities everywhere. Therefore Y is exactly the free-orbit $S_{n}$-Hilbert component and $X_{n}$ its universal cluster. In particular its Kodaira–Spencer map into equivariant module deformations is injective: an equivariantly trivial deformation of a cyclic cluster quotient is an ideal-trivial deformation, since its invariant unit generator is unique up to a scalar unit. [given, A1, F1, step 5.1, algebra]

7.1 This paragraph supplies the full scheme-level moduli interface from $(H_{n})$. It does not manufacture $(H_{n})$. Haiman's proof of that input uses the all-n polygraph theorem, not the small cases or the formal-local transfer alone. [given, A1, F1, step 6.1, algebra]

8.1 Put $d=2n$ and $K=O_{X_{n}}$ on Y×M with its natural $S_{n}$-linearization; let $S_{n}$ act trivially on Y. Define [given, A1, F1, step 7.1, algebra]

9.1 $Φ(A)=Rπ_{M,*}(K⊗^Lπ_{Y}*A)$, $Ψ(B)=[Rπ_{Y,*}(K^∨⊗π_{M}*ω_{M}[d]⊗^Lπ_{M}*B)]^{S_{n}}$. [given, A1, F1, step 8.1, algebra]

10.1 Both ambient varieties are smooth projective, so their kernels are perfect and these are bounded coherent functors. Finite-group invariants are exact by averaging. Smooth projective trace and tensor evaluation give Ψ⊣Φ. These operations can be computed by finite locally free resolutions and finite Čech models, so convolution commutes with derived closed-point restriction. If Q is the perfect kernel for ΨΦ on Y×Y, then [given, A1, F1, step 9.1, algebra]

11.1 $Hom^i(Q,k_{(y,z)})=Ext^i_{S_{n},M}(O_{X_{y}},O_{X_{z}})$. [given, A1, F1, step 10.1, algebra]

12.1 For different clusters, equivariant Hom is zero. A map takes the invariant unit 1 to a scalar multiple of the invariant unit of the other cyclic cluster; a nonzero scalar makes a surjection, and equal lengths force equality of the defining ideals. Top Ext in degree d also vanishes, by Serre duality and the canonical comparison in the geometric Hilbert supplier: on each support orbit $ω_{M}$ is a constant equivariant line pulled from Q, so twisting does not change that Hom argument. All remaining Ext degrees lie between 1 and d−1. If the quotient supports differ, all Ext vanish by disjoint support. [given, A1, F1, step 11.1, algebra]

13.1 Consequently Q off the diagonal is supported on (Y×_QY)\Δ, of codimension at least d in the smooth ambient Y×Y, by the geometric Hilbert supplier. Its minimal free models have terms in degrees [−d+1,−1], of length d−2. the regular-base acyclicity supplier makes it zero there. Thus $E_{y}=ΨΦ(k_{y})$ is a perfect complex supported only at y, with a model in [−d,0]. The adjunction counit $E_{y}→k_{y}$ is an isomorphism on scalar Hom in degree zero. The induced degree-one map [given, A1, F1, step 12.1, algebra]

14.1 $Ext¹_{Y}(k_{y},k_{y})→Ext¹_{S_{n},M}(O_{X_{y}},O_{X_{y}})$ [given, A1, F1, step 13.1, algebra]

15.1 is the injective universal-cluster Kodaira–Spencer map from the argument beginning at step 1.1. For the triangle $C→E_{y}→k_{y}$, the long exact Hom sequence then gives $Hom^i(C,k_{y})=0$ for i≤0. A minimal free model of C has no terms in degrees≥0, so $H^j(C)=0$ for j≥0. Thus $H⁰(E_{y})=k_{y}$. The regular d-dimensional diagonal criterion of the regular-base acyclicity supplier gives $E_{y}=k_{y}$ and identifies the counit as an isomorphism. The cone of the kernel counit $Q→O_Δ$ has zero derived restriction at every closed point, so minimal-model Nakayama makes it zero. This proves $ΨΦ=id$ and full faithfulness of Φ for EVERY n. [given, A1, F1, step 14.1, algebra]

16.1 Essential surjectivity does not require a CY hypothesis. Since q $r=τ$ p on $X_{n}$, the geometric Hilbert supplier identifies $π_{Y}*ω_{Y}$ and $π_{M}*ω_{M}$ on the kernel. Therefore Φ commutes with the respective Serre functors, including their common shift [d]. Its fully faithful image is admissible (both adjoints exist for a perfect kernel between smooth projective varieties), and this Serre compatibility makes its left and right orthogonal complements equal. Thus it gives an orthogonal decomposition of $Dᵇ_{S_{n}}(M)$. [given, A1, F1, step 15.1, algebra]

17.1 That equivariant category is indecomposable. Choose an $S_{n}$-linearized ample line bundle A on M (tensor the translates of any ample line). Each $A^{-m}⊗ρ$, for an irreducible representation ρ, is indecomposable, with endomorphisms C. Every such object has a nonzero map to a fixed free-orbit sheaf $O_{S_n x}$, which is equivariantly simple; all these objects therefore lie in the same member of any orthogonal decomposition. They form a spanning family: for a nonzero bounded equivariant complex B, choose m large enough that positive cohomology of all its cohomology sheaves twisted by $A^m$ vanishes; some global cohomology module is then nonzero and has an irreducible ρ constituent, yielding a nonzero Hom from $A^{-m}⊗ρ$ to a shift of B. The complementary component must be zero. The image of Φ is nonzero, hence Φ is an equivalence [given, A1, F1, step 16.1, algebra]

18.1 $D^b(\operatorname{Coh}S^{[n]})\simeq D^b_{S_n}(\operatorname{Coh}S^n)$. [given, A1, F1, step 17.1, algebra]

19.1 This is a genuine all-n kernel proof from $(H_{n})$, not an application of the three-dimensional McKay lemma to $S^n$. [given, A1, F1, step 18.1, algebra]

20.1 Every automorphism of S acts on $X_{n}$ through its canonical reduced-closure construction and commutes with $S_{n}$. The kernel linearization is the actual action on its structure sheaf, so the transform intertwines these automorphisms with their canonical cocycles, without projective scalar choices. [given, A1, F1, step 19.1, algebra]

21.1 For a line bundle A on S, the permutation-linearized $A^{⊠n}$ has trivial stabilizer actions and descends to the norm line $A_{(n)}$ on Q by the same descent proof as the geometric Hilbert supplier. Put $A_{n}=τ*A_{(n)}$. This is a LINE BUNDLE, not the rank-n tautological bundle usually denoted $A^[n]$. On $X_{n}$ the two pullbacks of this line agree canonically. Projection formula gives [given, A1, F1, step 20.1, algebra]

22.1 $Φ(F⊗A_{n})=Φ(F)⊗A^{⊠n}$. [given, A1, F1, step 21.1, algebra]

23.1 The isomorphisms are coherent under tensor products and powers. Thus if $A^r=O$ with a specified trivialization, the same specified r-fold action is intertwined; torsion-cover lifting uses this actual equivariant identity. In rational cohomology $ch(A)=1$ for torsion A, so the corresponding tensor actions are the identity on Chern characters. No integral-cohomology triviality is inferred. [given, A1, F1, step 22.1, algebra]

24.1 If a Fourier–Mukai equivalence between two surfaces has a perfect kernel P and inverse kernel R, its n-fold exterior product has a canonical $S_{n}$-linearization, with the usual Koszul signs for permutation of complex factors. Convolution and the canonical permutation maps commute, giving $(P^{⊠n})*(R^{⊠n})=(P*R)^{⊠n}=O_{Δ^n}$ equivariantly. This proves the induced equivalence on $S_{n}$-equivariant product categories. If the kernels also intertwine finite group actions, combine their n coordinate linearizations and the permutation linearization; the semidirect-product identity is precisely the permutation of these n linearizations. Thus the same construction is compatible with the wreath group $G^n⋊S_{n}$. Composing with Φ or its inverse gives the required Hilbert-scheme lift whenever those kernel linearizations are part of the actual product equivalence data; their existence is not assumed for an arbitrary unlinearized functor. [given, A1, F1, step 23.1, algebra] ∎
