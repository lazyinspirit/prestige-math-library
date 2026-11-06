---
id: thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat
kind: theorem
title: "All-n isospectral Hilbert Cohen–Macaulayness and the n!-flat family"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-polygraph-common-ideal-basis-and-alternating-power-freeness
  - lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds
  - lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line
  - thm-hilbert-scheme-represents-projective-flat-families
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-auslander-buchsbaum-formula
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - cor-cohen-macaulay-modules-have-no-embedded-associated-primes
  - cor-flat-local-cohen-macaulay-fibre-criterion
  - thm-flatness-of-noetherian-completion
  - lem-projective-regular-local-base-coherent-duality-by-embedding
  - lem-finite-closed-immersion-derived-coinduction-adjunction
  - thm-proper-pushforward-coherent
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-serre-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - def-derived-category-of-an-abelian-category
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  lem-gts-polygraph-common-ideal-basis-and-alternating-power-freeness: mathematical-premise
  lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds: mathematical-premise
  lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-parameters-and-regular-sequences-in-cohen-macaulay-modules: mathematical-premise
  cor-cohen-macaulay-modules-have-no-embedded-associated-primes: mathematical-premise
  cor-flat-local-cohen-macaulay-fibre-criterion: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  lem-projective-regular-local-base-coherent-duality-by-embedding: mathematical-premise
  lem-finite-closed-immersion-derived-coinduction-adjunction: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, arXiv math/0010246,
      sections3.2--3.8 and4.1--4.11; local constructions supplied below
    url: https://arxiv.org/pdf/math/0010246
    locator: §3.4 (pp.11–12), §§3.7–3.8 (pp.16–22), and §4.11 (pp.55–56), especially Theorem1,Lemma3.8.5 andProposition3.8.1;
      all-n CM/Gorenstein and alternating-power bridge.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat.md
dependency_level: 2
---

## Statement

Assume AC and DC. For every smooth connected projective complex surface S and every n≥1, the reduced isospectral scheme $X_n(S)=(S^{[n]}×_{Sym^n S}S^n)_{\mathrm{red}}$ is Cohen–Macaulay and its projection p to $S^{[n]}$ is finite flat of rank n!. The $S_n\text{-linearized}$ bundle $p_*O_X$ has regular-representation fibers. The same assertions hold on $A^{2}_C$, where $X_n$ is Gorenstein with canonical line $p*(\det  B_n)^{-1}$, $B_n$ the rank-n tautological algebra. On A² it is the blowup Proj C[x,y][tJ] of the alternating ideal J. The all-n polygraph/alternating-power freeness and nested geometry are the attached locally proved suppliers; neither an imported n! theorem nor an arbitrary-dimensional derived McKay theorem is assumed.

## Statement references

[[lem-gts-polygraph-common-ideal-basis-and-alternating-power-freeness]]

[[lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds]]

[[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]]

[[thm-hilbert-scheme-represents-projective-flat-families]]

[[thm-auslander-buchsbaum-serre-regularity-criterion]]

[[thm-auslander-buchsbaum-formula]]

[[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]]

[[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]]

[[cor-flat-local-cohen-macaulay-fibre-criterion]]

[[thm-flatness-of-noetherian-completion]]

[[lem-projective-regular-local-base-coherent-duality-by-embedding]]

[[lem-finite-closed-immersion-derived-coinduction-adjunction]]

[[thm-proper-pushforward-coherent]]

[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[[thm-serre-vanishing]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

[[def-derived-category-of-an-abelian-category]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are retained where required by the actual coherent and projective suppliers. No external-theorem waiver is used.

[F1] The exact mathematical inputs are [[lem-gts-polygraph-common-ideal-basis-and-alternating-power-freeness]], [[lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds]], [[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]], [[thm-hilbert-scheme-represents-projective-flat-families]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-auslander-buchsbaum-formula]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]], [[cor-flat-local-cohen-macaulay-fibre-criterion]], [[thm-flatness-of-noetherian-completion]], [[lem-projective-regular-local-base-coherent-duality-by-embedding]], [[lem-finite-closed-immersion-derived-coinduction-adjunction]], [[thm-proper-pushforward-coherent]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[thm-serre-vanishing]], [[lem-eventual-global-generation-coherent-twists]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[def-derived-category-of-an-abelian-category]], [[def-axiom-of-choice]], [[def-dependent-choice]]. All-n isospectral Cohen–Macaulayness is the conclusion of its attached construction, not an implicit input to the polygraph or nested arguments.

## Proof

**Given:** Exactly the objects and hypotheses in the Statement.

1.1 Work first on $E=A^{2}$. Write $H_n=Hilb^n(E)$, $B_n$ its rank-n tautological algebra, $S=C[x_1,y_1,\ldots ,x_n,y_n]$, $A=S^{sign}$, $A_{0}=S^{S_n}$, $T=\oplus _{d\ge 0}A^d$ with $A^0=A_{0}$, and $J=SA$. The algebra T is a finitely generated graded A₀-domain: S is finite over its invariant ring by the orbit-polynomial/Artin–Tate argument already supplied, the alternating projector makes A a finite A₀-module, and T is generated by that degree-one module. [given, A1, F1, algebra]

2.1 Evaluation of monomials in $B_n$ gives determinant sections $Δ_D$ of det $B_n$, indexed by n distinct monomials D. They generate det $B_n$ because the quotient $C[x,y]\to B_n$ is onto on every fiber. Their polynomial relations over A₀ hold on $H_n$ because they hold on the distinct-point locus and $H_n$ is reduced. Thus they give a morphism $H_n\to Proj$ T. It is an isomorphism, as follows by actual affine coordinates. On the open where D is a basis of the quotient algebra, the entries of multiplication by x,y and the coordinates of the unit 1 are ratios of the determinants obtained by replacing one member of D by x times a member, y times a member, or 1. Those matrices and the unit are affine coordinates for this Hilbert chart: impose their commutation and the identities $m_D(X,Y)i=e_D$; conversely these finite polynomial identities define the free rank-n cyclic quotient algebra with precisely that monomial basis. Hence the chart's coordinate ring is generated by these determinant ratios, proving that the map is a closed immersion on every standard Proj chart. These charts cover, and the image contains the dense distinct-point locus of the integral Proj T. Therefore the closed-immersion ideal is zero. This also identifies $O_{H_n}(1)=\det$ $B_n$ and proves projectivity of Hilbert–Chow in the planar case without assuming it in this argument. [given, A1, F1, step 1.1, algebra]

3.1 The Rees algebra $S[Jt]=\oplus J^dt^d$ is a quotient of $S\otimes _{A_{0}}T$, since $J^d=SA^d$. Thus Proj S[Jt] is a closed subscheme of $H_n×_{Sym^n E}E^n$. It is integral and contains the ordered distinct-point locus. The reduced fiber product is exactly that locus's closure: its finite projection to $H_n$ maps the closure onto a closed subset containing the dense distinct-point locus, hence onto all $H_n$. Each resulting nonempty fiber contains an ordering of the prescribed cycle, and $S_n$ acts transitively on all such orderings; its stable closure therefore contains all closed points of the reduced fiber product. Equality of the reduced schemes follows. Consequently [given, A1, F1, step 2.1, algebra]

4.1 $X_n=Proj$ S[Jt],       $O_{X_n}(1)=p*\det$ $B_n$. [given, A1, F1, step 3.1, algebra]

5.1 By the constructed polygraph consequence, each $J^d$ is free over $C[y_1,\ldots ,y_n]$. Hence this graded Rees algebra is flat over that polynomial ring. The standard affine charts of its Proj are flat too: a degree-zero localization by a homogeneous element is a filtered colimit of its homogeneous components under multiplication by that element. Filtered colimits of flat modules are flat. Thus $X_n\to A^n_y$ is flat. In particular the n−1 differences $z_i=y_i-y_n$ form a regular sequence at their common zero locus in $X_n$; they are part of a regular parameter system in the polynomial base, and flatness preserves their successive injections and nonzero quotients. [given, A1, F1, step 4.1, algebra]

6.1 Consider the bundle map $B_n^{\otimes n}\to (B_n^{\otimes n})*\otimes \det$ $B_n$ given by multiplication followed by alternation. Its kernel is exactly the ideal of $X_n$ inside the relative n-fold universal family. That relative product is finite flat and generically reduced over the integral $H_n$, hence reduced. A function vanishing on $X_n$ has every alternating multiple zero on distinct tuples; alternation also vanishes on repeated tuples, so it is zero on the whole reduced product. Conversely, on a generic distinct tuple, multiplying by an interpolating function isolates it and makes its alternation nonzero. This proves the kernel equality, and its image is $p_*O_{X_n}$. [given, A1, F1, step 5.1, algebra]

7.1 At the monomial ideal of partition μ this fiber map has rank equal to the dimension of all derivatives of the alternating determinant $Δ_μ$. In fact alternating multiplication extracts the coefficient of its standard-monomial determinant; up to the common nonzero product of factorials this is the pairing $(g,p)\mapsto (gp)(\partial )Δ_μ|_0$. Its radical in p is exactly the differential annihilator of $Δ_μ$, because all g are allowed. The polynomial quotient by that annihilator is the derivative span by elementary linear duality, proving the rank equality with no n! theorem premise. [given, A1, F1, step 6.1, algebra]

8.1 For $n=1$ the determinant is 1 and the rank is one. For $n=2$ the two partitions give a difference of x's or y's, whose derivatives span a two-dimensional space. For $n=3$, row and column partitions give a Vandermonde in one coordinate; in difference variables u,v this is uv(u−v), with derivative dimensions 1,2,2,1 in degrees 3,2,1,0, total six. The partition (2,1) gives the determinant of 1,x,y; in four difference variables it is uq−vp, with derivative dimensions 1,4,1, total six. Thus every monomial fiber has rank n! in these three cases. The generic rank is n!; higher minors vanish identically on reduced $H_n$. The rank-n! locus is open and torus invariant. Every ideal has a monomial ideal in its torus-orbit closure by the explicit Gröbner degeneration, so its closed invariant complement must be empty. The map has constant rank and its image $P=p_*O_X$ is locally free of rank n!. [given, A1, F1, step 7.1, algebra]

9.1 The descended multiplication-alternation pairing P⊗P→det $B_n$ is perfect: its induced matrix has constant full fiber rank n!. As a P-module, P* is therefore $P\otimes D_n^{-1}$. Finite-map duality over smooth $H_n$ identifies $ω_{X_n}$ with $p*ω_{H_n}\otimes P*$, in its associated P-module interpretation. Thus $X_n$ is Cohen–Macaulay and Gorenstein with canonical line O(−1) for n≤3. This constructs the small cases needed by the induction, not merely a numerical check at reduced points. [given, A1, F1, step 8.1, algebra]

10.1 Let g:Y→X be projective, let $z_1,\ldots ,z_m$ be functions regular as a sequence on X along V(z) and on Y along its inverse image, suppose every g-fiber has $\text{dimension}<m-1$, and suppose $O_X\to Rg_*O_Y$ is an isomorphism outside V(z). Then it is an isomorphism everywhere. Localize X to an affine. The stable Čech/Koszul construction for a regular sequence gives local cohomology with support V(z) zero below m on both X and Y. Hence their ordinary cohomology agrees with that of the respective complements in $\text{degrees}<m-1$. The assumed isomorphism on complements identifies these cohomologies. Degrees≥m−1 vanish on Y by the following explicit relative dimension bound. Around each closed base point choose d+1 hyperplanes in a relative projective embedding with empty common intersection on its fiber, d the fiber-dimension bound. Their common intersection has proper closed image avoiding that point, so after shrinking they have empty intersection on the whole family. Their d+1 affine complements cover Y, with affine finite intersections. The Čech complex has length d, proving $R^i$ $g_*O_Y=0$ for $i>d$. On affine X this gives the same bound for $H^i(Y,O_Y)$. Combining the two ranges proves all higher cohomology zero and identifies H⁰ canonically with $O_X$; the identification is canonical because it already is so on the complement. This proves the lemma without a formal-functions or relative-cohomological-dimension import. [given, A1, F1, step 9.1, algebra]

11.1 Let $g_n:X_{n-1,n}\to X_n$ be the nested isospectral projection, defined by the reduced base change from $X_{n-1}$ to $N_n$. For $n=1$ it is the identity. For $n=2$ every length-two planar algebra is curvilinear, and the nested choice at a specified support point is unique; the source is reduced and $g_2$ is proper birational and quasi-finite onto the smooth $X_2$, so finite and an isomorphism. For $n=3$, outside the locus Z of fat ideals (x−a,y−b)² with all three ordered points equal, the quotient is curvilinear or a disjoint union of curvilinear pieces. The ordered curvilinear charts of $X_3$ have coordinates the ordered x-roots and the interpolation coefficients, hence are smooth. The same finite-birational argument gives an isomorphism there. Z has dimension two, its $g_3\text{-preimage}$ has dimension three with P¹ fibers, and both $X_3$ and $X_{2,3}$ are six-dimensional Cohen–Macaulay schemes, the latter by the finite-flat base change from $X_2$ and smooth $N_3$. On an affine neighborhood choose three functions in $I_Z$ simultaneously regular on $X_3$ and $X_{2,3}$: at each stage prime avoidance excludes their finitely many associated components, since $I_Z$ has height≥4 on $X_3$ and its pullback height≥3 on $X_{2,3}$. Over C a general linear combination of a finite generator set avoids all these primes. Their common zero locus contains Z, so $g_3$ is an isomorphism off it; its fibers have $dimension\le 1<3-1$. The just-proved depth lemma gives $R(g_3)_*O=O$. These arguments supply the extra nested pushforward base cases used by the product induction, not just the CM base cases. [given, A1, F1, step 10.1, algebra]

12.1 Suppose $X_{n-1}$ is Cohen–Macaulay and Gorenstein with canonical O(−1), and its finite-flat map to $H_{n-1}$ has been obtained. Pull it back to smooth $N_n$. The resulting finite-flat scheme Y is generically reduced and irreducible: generically it is the connected ordered-distinct incidence cover; finite-flatness over integral $N_n$ injects its algebra into the generic field. Hence it equals the reduced nested isospectral scheme $X_{n-1,n}$. Finite-flat duality and its compatibility with base change give its relative canonical line O(−1,0); tensoring with $ω_{N_n}=O(1,-1)$ gives [given, A1, F1, step 11.1, algebra]

13.1 $ω_Y=O(0,-1)=g_n*O_{X_n}(-1)$. [given, A1, F1, step 12.1, algebra]

14.1 It is Cohen–Macaulay and Gorenstein of dimension 2n. The nested x-axis dimension bound of the nested-planar Hilbert supplier, unchanged under this finite cover, says $V(y_1,\ldots ,y_n)$ has dimension at most n. In a Cohen–Macaulay local ring an ideal generated by n elements of height n is a regular sequence; extend it to a system of parameters and use the actual CM-parameter supplier. Thus $y_1,\ldots ,y_n$, and hence the differences $z_i=y_i-y_n$ for $i<n$, are regular wherever they vanish on Y. They are already regular on $X_n$ by the polygraph/blowup flatness in the argument beginning at step 1.1. [given, A1, F1, step 13.1, algebra]

15.1 Outside their common zero locus the ordered y-coordinates are not all equal. Split them into two disjoint groups with unequal y-values. The universal Hilbert family splits into its disjoint support subfamilies; conversely their disjoint union reconstructs it, also on arbitrary test schemes. This gives actual product isomorphisms of both ordinary and nested isospectral schemes. Locally $g_n$ is therefore $1×g_l$ for some $l<n$. The smaller pushforward identity and its flat product base change over C, computed by tensoring the finite Čech complexes, give $R(g_n)_*O_Y=O_{X_n}$ on this open set. [given, A1, F1, step 14.1, algebra]

16.1 The $g_n$ fiber at $(I,P_1,\ldots ,P_n)$ is the projective socle space of the local length-r algebra at the distinguished $P_n$. If its dimension is d, the nested-planar Hilbert supplier gives (d+2)(d+1)/2≤r≤n. For $n>3$ this implies $d<n-2$. The depth lemma applies with $m=n-1$, proving [given, A1, F1, step 15.1, algebra]

17.1 $R(g_n)_*O_Y=O_{X_n}$. [given, A1, F1, step 16.1, algebra]

18.1 It remains to derive Cohen–Macaulayness, rather than assume it in a duality slogan. Both $X_n$ and Y are projective over the regular affine $E^n$ by the actual blowup and nested incidence constructions. Localize that regular base at a closed point and use the actual projective regular-base coherent-duality supplier to form their dualizing complexes $D_X,D_Y$. The proper trace $Rg_*D_Y\to D_X$ can be constructed by a projective embedding of g, closed-immersion coinduction, and the coefficient-of-top-Laurent-monomial trace on projective space. This construction works with the dualizing complex $D_X$ on the possibly singular base X; the Laurent Čech trace is tensored with $D_X$, not an unproved assumption that X is regular. Testing against a perfect K on X, the regular-base duality on X and Y and the projection formula identify its induced pairing with [given, A1, F1, step 17.1, algebra]

19.1 $RHom_R(RΓ(Y,g*K),R[2n])$ $=RHom_R(RΓ(X,K\otimes Rg_*O_Y),R[2n])$ $=RHom_R(RΓ(X,K),R[2n])$. [given, A1, F1, step 18.1, algebra]

20.1 Thus the trace is an isomorphism. More concretely its cone has zero Hom from every twist $O_X(-a)$ in every degree by these canonical pairings; Serre vanishing and eventual generation applied to its highest nonzero coherent cohomology would give such a nonzero Hom, so the cone is zero. No smoothness of X was used. Since $D_Y=ω_Y[2n]=g*O_X(-1)[2n]$, the projection formula and $Rg_*O_Y=O_X$ give [given, A1, F1, step 19.1, algebra]

21.1 $D_X=O_X(-1)[2n]$. [given, A1, F1, step 20.1, algebra]

22.1 This really forces X to be Cohen–Macaulay and Gorenstein. At a local presentation $X=Spec(A/I)$ in a regular local ambient A of dimension N, its dualizing complex is $RHom_A(A/I,invertible)[N]$. The displayed concentration makes $Ext_A^i$ vanish except at $i=N-2n$, where the module is invertible over A/I. The last nonzero term of a minimal finite free resolution has nonzero dual top Ext by Nakayama; hence its length is N−2n. Auslander–Buchsbaum gives $depth(A/I)=2n$, its local dimension at a closed point. The canonical module is invertible, so it is Gorenstein with the stated line. This closes the induction, using the explicit cases and pushforwards of the argument beginning at step 10.1. [given, A1, F1, step 21.1, algebra]

23.1 The finite projection $X_n\to H_n$ is now flat of rank n!: its regular-base parameters form a system of parameters on the Cohen–Macaulay finite algebra, and Auslander–Buchsbaum makes it free locally. To transfer this to an arbitrary smooth complex surface, split the support points and choose étale coordinates at each one. On the support-injective locus these give étale maps of the Hilbert functors by the unique Artin lifting argument in the geometric supplier. The corresponding ordered product coordinates are étale too, with the same stabilizers; their invariant local charts have the same infinitesimal lift uniqueness because finite-group averaging commutes with étale base change. Thus the reduced isospectral closure is étale-locally the planar isospectral scheme or a product of smaller such schemes. Reduction commutes with these étale maps; equivalently use the canonical ordered-distinct closure, whose inverse image is that closure on each support component. A local étale map is flat with zero-dimensional regular fiber, so the actual flat-local Cohen–Macaulay fiber criterion transfers CM. Therefore $X_n(S)$ is Cohen–Macaulay for ALL n. Its finite map to the smooth $S^{[n]}$ is flat of rank n! by the same parameter/AB calculation. The already constructed kernel criterion may now be applied with its premise proved, yielding the full all-n surface equivalence and compatibilities. [given, A1, F1, step 22.1, algebra]

24.1 The natural $S_n$ action on $p_*O_X$ splits it by the constant averaged character projectors. Every isotypic summand is a vector bundle; its rank is constant on connected $S^{[n]}$ and equals its generic multiplicity on the ordered-distinct fiber. That generic fiber is the regular representation, so every fiber is the regular representation. This proves the final representation assertion without an additional bundle-classification premise. [given, A1, F1, step 23.1, algebra] ∎
