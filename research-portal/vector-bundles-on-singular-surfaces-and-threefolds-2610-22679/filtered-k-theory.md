---
title: Perfect K theory and motivic towers
description: Connect affine bundle classes to nonconnective perfect K theory,
  then develop tower exactness, products, coefficients and rational detection.
  Give the article's bundle-class, motivic-filtration and motivic-cohomology
  definitions their authoring homes after these suppliers.
status: published
dependency_level: 2
---

**Purpose:** Connect affine bundle classes to nonconnective perfect K theory, then develop tower exactness, products, coefficients and rational detection. Give the article's bundle-class, motivic-filtration and motivic-cohomology definitions their authoring homes after these suppliers.

## Derived finite coefficients and the Bockstein sequence

[Open item](item-lem-derived-coefficient-exact-sequence) · level 0

### Statement
Let $C$ be a cochain complex of abelian groups, let $n$ be a positive integer, and write $C/n$ for the mapping cone of multiplication by $n$ on $C$. Then $C/n$ represents the derived tensor product $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$, and for every integer $m$ there is a natural short exact sequence
$$0\longrightarrow H^m(C)/nH^m(C)\longrightarrow H^m(C/n)\longrightarrow H^{m+1}(C)[n]\longrightarrow0,$$
where $H^{m+1}(C)[n]=\{a:n a=0\}$. In particular, if $H^m(C/p)=0$ for a prime $p$, multiplication by $p$ is injective on $H^{m+1}(C)$.

### Statement references

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

### Facts & Assumptions

[F1] In the cochain cone convention of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), $\operatorname{Cone}(n)^m=C^m\oplus C^{m+1}$ with differential $(y,x)\mapsto(dy+nx,-dx)$.

[F2] The notation $M[n]$ denotes the subgroup annihilated by $n$, as in [math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module).

### Proof

**Given:** A cochain complex $C$ of abelian groups, a positive integer $n$, and an integer $m$.

**Goal:** Identify the cone with the derived tensor product and prove the displayed exact sequence and its prime-torsion consequence.

1.1 Let $P$ be the complex $\mathbb Z\xrightarrow{n}\mathbb Z$ in degrees $-1$ and $0$. Its augmentation to $\mathbb Z/n$ is a quasi-isomorphism because multiplication by $n$ on $\mathbb Z$ is injective and has cokernel $\mathbb Z/n$. For any complex $A$, the total complex $A\otimes P$ is isomorphic to $\operatorname{Cone}(n:A\to A)$: in degree $m$ send the cone pair $(y,x)$ to $(y,(-1)^{m+1}x)$. The cone sits in a degreewise split short exact sequence $0\to A\to\operatorname{Cone}(n)\to A[1]\to0$. The resulting cohomology exact sequence, obtained by lifting cocycles and taking their differentials, shows that this cone is acyclic whenever $A$ is acyclic. Thus $P$ is K-flat: tensoring it with an acyclic complex gives an acyclic complex. Consequently this free resolution computes the derived tensor product with $\mathbb Z/n$, and the displayed isomorphism identifies it with $C/n$. [given, F1, construct]

2.1 The inclusion $C\to\operatorname{Cone}(n)$ sends $y$ to $(y,0)$, and projection to the second coordinate sends a cone cocycle $(y,x)$ to the class of $x$ in $H^{m+1}(C)$. These maps are well defined on cohomology: the cone cocycle equations are $dx=0$ and $dy=-nx$, and a cone boundary changes $x$ by a boundary. The kernel of the first map on $H^m(C)$ is $nH^m(C)$: if $(y,0)=d(v,u)$, then $du=0$ and $y=dv+nu$; the converse follows from $d(0,u)=(nu,0)$ for a cocycle $u$. A class in the kernel of the projection has a representative with $x=0$ after subtracting a cone boundary, so comes from $H^m(C)$. Finally, the image of the projection is precisely $H^{m+1}(C)[n]$: the cocycle equation gives $n[x]=0$, and conversely if $nx=-dy$ for a cocycle $x$, then $(y,x)$ is a cone cocycle. This proves the short exact sequence. If $H^m(C/p)=0$, its surjection onto $H^{m+1}(C)[p]$ makes that subgroup zero, which is exactly injectivity of multiplication by $p$. [given, F1, F2, step 1.1, algebra] ∎

## Detecting injectivity by rationalization

[Open item](item-lem-rational-injection-detection) · level 0

### Statement
For an abelian group $G$, the kernel of the natural homomorphism $G\to G\otimes_{\mathbb Z}\mathbb Q$, $g\mapsto g\otimes1$, is its torsion subgroup: the elements killed by some nonzero integer. Rationalization preserves short exact sequences of abelian groups. Consequently, if $G$ is torsion-free and $f\otimes_{\mathbb Z}\mathbb Q:G\otimes_{\mathbb Z}\mathbb Q\to H\otimes_{\mathbb Z}\mathbb Q$ is injective, then a homomorphism $f:G\to H$ is injective. If $f$ is also surjective, it is an isomorphism. No divisibility assumption on $G$ is made.

### Statement references
[math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

[math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

### Facts & Assumptions

**Given:** Abelian groups, regarded as $\mathbb Z$-modules, and the homomorphisms in the statement.

**Goal:** Prove the kernel formula and exactness of rationalization, and deduce the injectivity and isomorphism assertions.

[F1] The tensor product is generated by elementary tensors subject to additivity in each variable and the balancing relation $(ng)\otimes q=g\otimes(nq)$; every tensor is a finite sum of elementary tensors ([math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)).

[F2] Torsion means annihilation by a nonzero integer, and a group is torsion-free when only zero is torsion ([math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)). A short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ has $i$ injective, $p$ surjective and $\operatorname{im}i=\ker p$ ([math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)).

### Proof

1.1 For an abelian group $M$, form fractions $m/n$ with $m\in M$ and positive integer $n$, declaring $m/n=m'/n'$ exactly when some positive integer $k$ kills $n'm-nm'$. This is an equivalence relation: transitivity follows by multiplying the two annihilating equations by the other denominator and combining them. Addition $(m/n)+(m'/n')=(n'm+nm')/(nn')$ is independent of representatives by the same cross-multiplication, and gives an abelian group $L(M)$. For $q=a/b\in\mathbb Q$, with $b>0$, the assignment $(m,q)\mapsto am/b$ is well-defined and balanced: equality of rational representatives gives an equal cross-product, and the fraction addition formula proves additivity. Thus [F1] gives a homomorphism $M\otimes\mathbb Q\to L(M)$. Conversely send $m/n$ to $m\otimes(1/n)$. If $k(n'm-nm')=0$, then balancing gives $m\otimes(1/n)-m'\otimes(1/n')=k(n'm-nm')\otimes(1/(knn'))=0$, so this map is well-defined and additive. The two maps are inverse on fractions and elementary tensors, hence are inverse isomorphisms. Under this identification the natural map sends $m$ to $m/1$. [F1, construct, algebra]

2.1 By the fraction equivalence, $m/1=0/1$ exactly when some positive integer kills $m$. This is equivalent to being killed by a nonzero integer, so the kernel is precisely the torsion subgroup. [F2, step 1.1]

2.2 Let $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ be short exact. The fraction maps induced by $i$ and $p$ are well-defined by the defining equivalence. If $i(a)/n=0$, then $i(ka)=0$ for some positive $k$, so $ka=0$ by injectivity of $i$ and $a/n=0$. Thus $L(i)$ is injective. Every $c/n$ has a preimage $b/n$ because $p$ is surjective. If $p(b)/n=0$, then $p(kb)=0$ for some positive $k$; exactness gives $a\in A$ with $i(a)=kb$, and $b/n=i(a)/(kn)$ lies in the image of $L(i)$. The reverse inclusion follows from $pi=0$. Hence the fraction sequence is short exact. The isomorphisms of step 1.1 commute with the induced homomorphisms, so tensoring the original sequence with $\mathbb Q$ is short exact. [F2, step 1.1, algebra]

3.1 If $(f\otimes\mathbb Q)$ is injective and $f(g)=0$, naturality gives $(f\otimes\mathbb Q)(g\otimes1)=0$, so $g\otimes1=0$. If $G$ is torsion-free, steps 2.1 and [F2] give $g=0$; therefore $f$ is injective. If it is also surjective, its set-theoretic inverse is a homomorphism, since the preimages of sums are sums of preimages, and $f$ is an isomorphism. [F1, F2, step 2.1] ∎

## Cofinal tails and level invariance of stable groups

[Open item](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) · level 0

### Statement
For a sequential prespectrum $E$ and integer $k$, write $G_k(E)$ for the sequential colimit of the groups $\pi_{n+k}(E_n)$, starting at any $N$ with $n+k\geq2$ for $n\geq N$ and using the sphere-first bonding maps of the published definition. Increasing $N$ gives a canonical isomorphism. A compatible level map inducing an isomorphism on every stage group induces an isomorphism on $G_k$. The same assertions hold for pointed simplicial prespectra, with simplicial spheres and suspension in the same order.

### Facts & Assumptions
**Given:** $k$, the specified sequential system and, for the second assertion, compatible stage isomorphisms.

**Goal:** Prove cutoff independence and level invariance.

[F1] [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum) defines the groups, bonding maps and their sequential colimit by representatives and eventual equality.

### Proof
1.1 For $N'\geq N$, send a representative at stage $n$ to its image at any stage at least $\max(n,N')$. Any two choices agree after further advancement; eventual equality is preserved. This defines a homomorphism from the original colimit to the tail colimit. Composing in either order with the map induced by inclusion of the tail fixes every representative after advancement to a common stage. Thus the maps are inverse. [F1, given]

2.1 A compatible family $f_n$ of stage isomorphisms induces a map on representatives. Its inverses are compatible because $f_{n+1}b_n=b'_n f_n$, so they induce its inverse on colimits. This argument uses only sequential systems of groups and applies equally to the simplicial systems. Both assertions follow. [F1, step 1.1, given] ∎

## External singular realization comparison

[Open item](item-thm-author-e0b0bf18ed2b-singular-realization-input) · level 0

### Statement
For a based space X, the evaluation ε:|Sing X|→X is a natural weak homotopy equivalence, and realization is left adjoint to the singular complex in the pointed categories. The basepoint of Sing X is the constant singular simplex at the basepoint in each degree. A weak homotopy equivalence induces a bijection on path components and isomorphisms on all homotopy groups at every basepoint.

### Source contract
**Given:** A based topological space X.

**Goal:** Supply the realization and singular-complex comparison used for sequential prespectra.

[F1] May, Chapter 16, §§2–4, gives the evaluation theorem and realization–singular adjunction at the cited locator.

### External input
Import [F1], including its pointed specialization. This is an external theorem; no local reconstruction of the comparison is claimed.

## External sequential simplicial Omega replacement

[Open item](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input) · level 0

### Statement
Let K=Δ¹/∂Δ¹ and let X be a sequential pointed simplicial prespectrum, meaning pointed simplicial sets $X_n$ and maps K∧$X_n$→$X_{n+1}$, with each $X_n$ a Kan complex. A Kan complex has fillers for all simplicial horns. Write ΩZ=Map_*(K,Z), let s denote the level tail, and put $R=s\Omega$. The adjoints of the structure maps form a natural map ι:X→RX. Define QX=colim_m $R^m X$ using the maps $R^m\iota$. Then QX is level Kan, its adjoint structure maps are weak equivalences, X→QX is a stable equivalence, and (QX)_n=colim_m Ω^mX_{n+m}. A stable equivalence here is a weak equivalence in Hovey's sequential stable model structure.

### Source contract
**Given:** K and a level-Kan sequential pointed simplicial prespectrum X.

**Goal:** Import the functorial Omega replacement and its precise sequential formula.

[F1] Hovey's Definition 4.2, Lemma 4.3, Proposition 4.4 and Corollary 4.8 give the construction and conclusions under the cited hypotheses.

### External input
Import [F1] specialized to pointed simplicial sets and the adjunction K∧(−) ⊣ Map_*(K,−). The finite simplicial circle makes Ω preserve filtered colimits, and filtered colimits of sets commute with finite limits. Hovey's Lemma 4.3 identifies ι_{RX} with Rι_X. The formula is not applied directly to topological spaces, and no symmetric-spectrum or model-category equivalence is asserted.

## External stable enhancement and smash product of spectra

[Open item](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) · level 0

### Statement
Let S be the infinity-category of spaces and S_*^fin the infinity-category of finite pointed spaces. Let Sp=Exc_*(S_*^fin,S), the infinity-category of functors that take the point to a contractible space and pushout squares to pullback squares. Sp is stable and presentable, and is equivalent to the homotopy limit of the tower of pointed spaces under the loop functor Ω. An object of that limit is a coherent tower $Y_n$≃Ω$Y_{n+1}$, and its nth space is Ω∞(Y[n]), where [1] is suspension. Sp has all small limits and colimits; a square is a pushout exactly when it is a pullback. Evaluation Ω∞ has a left adjoint Σ∞, and the sphere spectrum is 𝕊=Σ∞S⁰. Sp has a symmetric monoidal smash product ∧ with unit 𝕊, preserving small colimits separately in each variable.

### Source contract
**Given:** Spaces and diagrams small in a fixed universe, with a larger universe containing their infinity-categories.

**Goal:** Supply the stable enhancement, coherent Omega-tower description and smash product.

[F1] Lurie's results at the cited locators give the stated stabilization, tower equivalence, adjunction and monoidal structure under the stated hypotheses.

### External input
Import [F1]. An infinity-category retains mapping spaces and coherent higher compositions. A coherent diagram is a functor from an indexing infinity-category; its limits and colimits have universal properties expressed by equivalences of mapping spaces. Stability includes a zero object and identifies pullback squares with pushout squares. The associativity, symmetry and unit laws of smash include their higher coherences. These foundations are external inputs, not locally reconstructed proofs.

## External input on derived enhancements

[Open item](item-thm-author-4f716d60801a-derived-enhancement-input) · level 0

### Statement
Assume the Axiom of Choice and fix suitable universes. For a scheme $X$, let $\mathcal D(X)$ be the infinity-localization of cochain complexes of Zariski $\mathcal O_X$-modules at quasi-isomorphisms. For a ring $A$, define $\mathcal D(A)$ similarly using $A$-modules. These are stable presentable infinity-categories, with ordinary unbounded derived categories as their homotopy categories. Degreewise exact additive functors induce exact functors on these localizations. Mapping cones represent cofibers. Both the enhanced categories and their homotopy categories are idempotent complete.

### Source contract
**Given:** A scheme or ring, the Axiom of Choice, and a universe containing the relevant modules.

**Goal:** Record the ambient derived enhancements and their relation to ordinary derived categories.

[F1] The cited Stacks remark supplies the Grothendieck property; the cited Higher Algebra results supply the derived localization and presentability.

[F2] The cited Higher Topos Theory and Higher Algebra results supply enhanced and homotopy-category idempotent completeness.

### External input
Import [F1] and [F2] with the stated reading limits. A quasi-isomorphism induces isomorphisms on all cohomology objects. Stable means having a zero object and finite limits and colimits, with pushout squares also pullback squares. Exact functors preserve these finite operations. No identification of $D(\mathrm{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.

## External affine derived and perfect comparisons

[Open item](item-thm-author-4f716d60801a-affine-derived-input) · level 0

### Statement
Assume the Axiom of Choice. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. Degreewise associated sheaf induces an equivalence $D(A)\to D_{\mathrm{qc}}(X)$, where the target is the full subcategory of $D(\mathcal O_X)$ whose cohomology sheaves are quasi-coherent. The associated object of an $A$-complex is locally perfect if and only if the complex is isomorphic in $D(A)$ to a bounded complex of finitely generated projective modules.

### Source contract
**Given:** $A$ and $X$ as above, and possibly unbounded complexes.

**Goal:** Record the classical affine comparison and its perfection criterion.

[F1] The cited Stacks Lemma 36.3.5 gives the derived equivalence.

[F2] The cited Stacks Lemma 36.10.7 gives the perfection criterion; the ring convention is that of [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring).

### External input
Import [F1] and [F2] with the stated reading limits. This item asserts a classical derived equivalence; the enhanced comparison is established separately for the actual induced functor.

## External local perfection and summand closure

[Open item](item-thm-author-4f716d60801a-local-perfect-input) · level 0

### Statement
Assume the Axiom of Choice. Perfection on a ringed space is invariant under isomorphism in the derived category and is local. When all stalk rings are local, it means local equivalence to a bounded complex of finite locally free modules. Perfect objects satisfy two-out-of-three in distinguished triangles and are closed under direct summands. Scheme stalk rings are local.

### Source contract
**Given:** A ringed space, with local stalk rings for the finite locally free characterization.

**Goal:** Record local invariance and closure under triangles and direct summands.

[F1] The cited Stacks definition and lemmas supply these assertions.

### External input
Import [F1] with its stated reading limits. The local strictification and direct-summand arguments are not claimed as local reconstructions.

## Reindexing cochains as chains

[Open item](item-lem-author-80e2d7bee57f-cochain-to-chain) · level 0

### Statement
Let $C$ be a cochain complex of abelian groups, with differentials $d^q:C^q\to C^{q+1}$. Define a chain complex $D$ by $D_n=C^{-n}$ and $\partial_n=d^{-n}$. Then $H_n(D)=H^{-n}(C)$ naturally in $C$. Here homology and cohomology mean the kernel of the outgoing differential modulo the image of the incoming differential.

### Facts & Assumptions
**Given:** A cochain complex $C$ as stated.

**Goal:** Construct $D$ and identify its homology.

### Proof
1.1 The composite $\partial_{n-1}\partial_n=d^{-n+1}d^{-n}$ is zero, so the displayed groups and maps form a chain complex. A cochain map reindexes to a chain map. [given, construct]

2.1 At degree $n$, both the kernel and the image in the quotient $H_n(D)$ are exactly those defining $H^{-n}(C)$. The identity on representatives gives the natural isomorphism. [given, step 1.1] ∎

## Cohomology of an integer shift

[Open item](item-lem-author-80e2d7bee57f-shift-cohomology) · level 0

### Statement
For a cochain complex $C$ of abelian groups and integers $q,k$, the convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$ gives a natural isomorphism $H^q(C[k])\cong H^{q+k}(C)$.

### Facts & Assumptions
**Given:** $C$, $q$, and $k$ as stated.

**Goal:** Compare the indicated cohomology groups.

[F1] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) specifies the cochain shift and its sign.

### Proof
1.1 Multiplication of a homomorphism by $(-1)^k$ changes neither its kernel nor its image. Hence the cycles and boundaries of $C[k]$ in degree $q$ are respectively the cycles and boundaries of $C$ in degree $q+k$. [F1, given]

2.1 The identity on representatives induces the displayed quotient isomorphism, and it commutes with maps of complexes because those maps commute with the differentials. [step 1.1] ∎

## Eilenberg–Mac Lane spectrum of a chain complex

[Open item](item-thm-author-80e2d7bee57f-eilenberg-maclane-input) · level 0

### Statement
For every unbounded chain complex $D$ of abelian groups, the cited Eilenberg–Mac Lane construction gives a functorial pointed simplicial Omega spectrum $HD$ and natural isomorphisms from its stable homotopy groups to $H_n(D)$ for all integers $n$. An Omega spectrum is a sequential spectrum whose adjoint structure maps are weak equivalences.

### External input
This is the one-object $\mathbb Z$ case of the cited construction and equation (B.1.9). The result and its construction are imported from the cited literature; no local reconstruction is claimed. The source defines the levels using the functor $W$ and explicitly states that the underlying spectra are Omega spectra. The model is a naive module spectrum, not the symmetric Eilenberg–Mac Lane functor distinguished in the source's Remark B.1.10.

## External K-flat sheaf resolution and pullback input

[Open item](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) · level 0

### Statement
Assume AC. On an arbitrary ringed space, call a cochain complex P K-flat when Tot(N⊗P) is acyclic for every acyclic N. Every complex admits a quasi-isomorphism from a K-flat complex with flat terms. K-flatness is stalkwise, is closed under shifts, cones and total tensor, and includes bounded-above flat complexes. Tensor with a K-flat complex preserves quasi-isomorphisms. For every morphism of ringed spaces, degreewise pullback preserves K-flatness and quasi-isomorphisms between K-flat complexes; its derived functor is computed there by degreewise pullback. The classical derived pullback has the usual composition and tensor comparison isomorphisms.

### Source contract
**Given:** Ringed spaces, cochain complexes, morphisms of ringed spaces, and AC.

**Goal:** Import exactly the resolution machinery for an actual enhanced construction.

[F1] Stacks §20.26, the enumerated lemmas in sources.references, gives K-flat existence and tensor stability.

[F2] Stacks §20.27, Lemmas 20.27.1–3, gives the pullback construction and comparison formulas.

### External input
Import [F1] and [F2] with their stated limits. Tensor is direct-sum totalization with d(p⊗q)=d(p)⊗q+(−1)^deg(p)p⊗d(q); its symmetry uses the Koszul sign. The ringed-space hypotheses include all ordinary schemes. The classical comparison formulas alone do not assert an infinity-coherent enhancement; that is constructed in the local helper using the next imported localization input.


## External localization of one marked scheme and tensor family

[Open item](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) · level 0

### Statement
Assume AC and suitable universes. Hinich's localization L:Cat_∞^+→Cat_∞ is a functor with a natural localization map. For a marked cocartesian fibration p:(E,V)→(B,W) satisfying Definition 2.1.1, its localization is a cocartesian fibration L(E,V)→L(B,W), with fibers the localized original fibers (Proposition 2.1.4). The four hypotheses are: p is cocartesian; cocartesian lifts of W are marked; all fiber transports preserve markings; and transports over W induce equivalences of localized fibers. Markings are saturated. For a symmetric monoidal cocartesian fibration over Fin_*, if every active transport preserves its componentwise marking, Proposition 3.2.2 gives a symmetric monoidal localization, with the full universal property for symmetric monoidal functors.

The nerve of an ordinary Grothendieck opfibration is a cocartesian fibration (dual of HTT Remark 2.4.2.2). Cocartesian fibrations classify coherent diagrams, as in Hinich §2.1.5–2.1.6/HTT straightening. These facts apply to a single family over a product base, and thus retain coherence in all base variables simultaneously.

For the fiber comparison, retain these formal inputs: the symmetric monoidal relative localization theorem of BGT Proposition 3.5; HA Proposition 1.3.4.5 identifying chain-homotopy localization with the dg nerve under finite-chain-interval closure; HA Proposition 1.3.2.10 and its following paragraph giving stability for full shift/cone-closed complex subcategories; and Drew Theorem 1.3 identifying stable Verdier quotients with localization at the maps whose cones lie in the subcategory.

### Source contract
**Given:** Marked cocartesian families satisfying all four explicit conditions, tensor-stable markings for the monoidal assertion, and the interval/stability conditions for the separate fiber comparison. Use larger universes for the categories of schemes and sheaf complexes.

**Goal:** Import a genuine coherent family-localization theorem, rather than only pointwise localization statements.

[F1] Hinich Definition 2.1.1 and Proposition 2.1.4, with its entire proof, supply the family theorem and its compatibility with the functorial localization map of §1.1.

[F2] Hinich Definition 3.2.1/Proposition 3.2.2 supply the symmetric monoidal universal property; HTT Remark 2.4.2.2 and family classification supply the ordinary-opfibration and coherent-diagram bridge.

[F3] The precise BGT, HA and Drew results in the frontmatter supply the formal fiber comparisons; no field-dependent dg monoidal nerve theorem is used.

### External input
Import [F1]–[F3] with the stated hypotheses and reading limits. In the application, the base is Sch_qcqs^op×Fin_* marked only by equivalences; fiber markings are componentwise quasi-isomorphisms. The local helper constructs its total Grothendieck category before localization and checks every marked-cocartesian and active-tensor hypothesis. The result is one diagram in the scheme and tensor variables at once. It identifies the supplied fiber enhancements; it neither assumes nor claims a natural comparison with a previously specified pullback/tensor diagram on those fibers, because the supplied definition specifies no such diagram.


## External full-subcategory localization criterion

[Open item](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) · level 0

### Statement
Assume AC and suitable universes. Let D be a pretriangulated category, D′⊆D a full pretriangulated subcategory, and S a saturated multiplicative system compatible with the triangulated structure. If every X∈D receives s:X′→X in S with X′∈D′, then S′=S∩Arrows(D′) is a saturated compatible multiplicative system and (S′)⁻¹D′→S⁻¹D is an exact equivalence. This conclusion includes full faithfulness, not merely essential surjectivity.

For the intended application, if A is any abelian category, S=Qis(A) in K(A) is a saturated compatible multiplicative system and S⁻¹K(A)=D(A). For a right multiplicative system, roofs and their common-refinement equivalence compute the localization; equivalently Hom in the localization is the filtered colimit over denominators into the source.

### Source contract
**Given:** D,D′,S with exactly the hypotheses in the Statement.

**Goal:** Import the precise localization criterion and the actual Hom-set/equality description used in its application.

[F1] Stacks Lemma 13.5.8, tag 0GSL, gives the exact equivalence after verifying those hypotheses.

[F2] Stacks Lemma 13.11.2 and Definition 13.11.3, tags 05RT and 05RU, give the quasi-isomorphism system and the classical derived localization.

[F3] Stacks Categories §4.27 right calculus, Lemmas 4.27.11–14 and Remark 4.27.15, gives roofs, common-refinement equality and the Hom-colimit formula.

[F4] HTT Proposition 1.2.3.1 states that the homotopy-category functor h is left adjoint to ordinary nerve. Its formal application to the localization universal property is made explicitly in the local lemma; it is not attributed verbatim as an additional source theorem.

### External input
Import [F1]–[F4] with the exact reading limits in the frontmatter. The proof of [F1] explicitly uses the denominator-colimit formula to prove full faithfulness. It requires a full pretriangulated subcategory with enough S-replacements, not a subcategory of K-projective objects. No K-flat object is being asserted K-projective.


## External straightening and symmetric monoidal criteria

[Open item](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input) · level 0

### Statement
For any infinity-category $D$, straightening gives an equivalence $\mathrm{Coc}(D)\simeq\mathrm{Fun}(D,\mathrm{Cat}_\infty)$, where $\mathrm{Coc}(D)$ has cocartesian fibrations as objects and functors over $D$ preserving cocartesian arrows as morphisms. Functor categories satisfy exponential currying $\mathrm{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\mathrm{Fun}(B,\mathrm{Fun}(S,\mathrm{Cat}_\infty))$.

For $S=N(\mathrm{Fin}_*)$, a cocartesian fibration $C^\otimes\to S$ is a symmetric monoidal infinity-category exactly when its inert maps $\rho_i:\langle n\rangle\to\langle1\rangle$ give $C_n\simeq C_1^n$ for every $n\geq0$, with $C_0$ terminal. Maps over $S$ preserving all cocartesian arrows are strong symmetric monoidal functors, including equivalence of their tensor and unit comparisons.

Let $f:(C,V)\to(D,W)$ satisfy all four conditions of Hinich Definition 2.1.1, with saturated markings, and let $F^+:D\to\mathrm{Cat}_\infty^+$ classify its marked fibers. The composite $L\circ F^+:D\to\mathrm{Cat}_\infty$ sends $W$ to equivalences and extends to $\overline F:L(D,W)\to\mathrm{Cat}_\infty$. The localized family $L(C,V)\to L(D,W)$ is the unstraightening of $\overline F$. Its pullback to $D$ is classified by $L\circ F^+$ and has the localized fibers. These are constructions of whole cocartesian families and their localization map. If $W$ consists of equivalences, $L(D,W)\simeq D$, giving the original-base special case. The explicit marked-cocartesian hypotheses and, in the monoidal application, preservation of componentwise markings by active tensor transports remain required.

### Source contract
**Given:** Categories in fixed suitable universes, genuinely cocartesian families, and the stated Segal and marking conditions where used.

**Goal:** Import the standard family/functor dictionary and exact strong monoidal criterion.

[F1] Hinich §2.1.5, equation (31), supplies Coc(D)≃Fun(D,Cat∞) with cocartesian-preserving maps. Its §2.2.2–2.2.6 proves the actual family-localization assertion.

[F2] HTT Notation 1.2.7.2 and Proposition 1.2.7.3 supply functor infinity-categories; currying is their defining simplicial exponential identity.

[F3] HA Definition 2.0.0.7 and Definition 2.1.3.7 supply precisely the Segal and strong symmetric monoidal conditions, including the nullary unit.

### External input
Import [F1]–[F3] with the frontmatter reading limits. This standard formal input does not supply a product-base family in an application: that must actually have been constructed, with its hypotheses verified. No identification of separately existing functors is part of this import.


## Cofiber and triangle presentations of K zero

[Open item](item-lem-author-3a003d7b5208-triangle-presentation) · level 0

### Statement
Let C be a small stable infinity-category. Its cofiber Grothendieck group, generated by equivalence classes of objects with [Y]=[X]+[Z] for every cofiber sequence X→Y→Z, is canonically the triangle Grothendieck group of its homotopy category hC, generated by isomorphism classes with the same relation for every distinguished triangle.

A stable infinity-category is a pointed infinity-category with finite limits and colimits in which pushout squares are pullback squares. Its homotopy category hC has the same objects and morphisms given by connected components of mapping spaces; its distinguished triangles are, by the standard induced triangulated structure, the triangles isomorphic to X→Y→Z→X[1] arising from cofiber sequences. Smallness ensures that the presentations use sets.

### Facts & Assumptions
**Given:** A small stable infinity-category C with its induced triangulated homotopy category.

**Goal:** Identify the two presented groups canonically.

[F1] By the stated construction of hC, equivalences in C correspond to isomorphisms in hC, and distinguished triangles are exactly triangles isomorphic to cofiber triangles.

### Proof
**Proof technique:** Compare generators and relations.

1.1 The identity on objects gives a bijection between equivalence classes in C and isomorphism classes in hC by [F1]. It therefore identifies the free abelian groups on those classes. [F1, construct]

2.1 Under this identification each cofiber relation is a distinguished-triangle relation. Conversely, every distinguished triangle is isomorphic to a cofiber triangle, so its relation agrees with one of the cofiber relations. The two relation subgroups are equal. [F1, step 1.1]

3.1 The identity on the common free group therefore induces mutually inverse quotient maps. This is the asserted canonical identification. [step 1.1, step 2.1] ∎

## Exact equivalences preserve triangle K zero

[Open item](item-lem-author-3a003d7b5208-exact-equivalence-k-zero) · level 0

### Statement
An exact equivalence $F:\mathcal T\to\mathcal U$ of essentially small triangulated categories induces an isomorphism $K_0^{\mathrm{tri}}(\mathcal T)\to K_0^{\mathrm{tri}}(\mathcal U)$, sending $[X]$ to $[F(X)]$. Here $K_0^{\mathrm{tri}}$ is generated by isomorphism classes with $[Y]=[X]+[Z]$ for each distinguished triangle $X\to Y\to Z\to X[1]$. Exact means that $F$ commutes with translation up to its specified natural isomorphism and sends distinguished triangles to distinguished triangles.

### Facts & Assumptions
**Given:** An exact equivalence $F$ and an exact quasi-inverse $G$, with unit and counit natural isomorphisms.

**Goal:** Prove that the induced maps on triangle Grothendieck groups are inverse.

### Proof
**Proof technique:** Use the presentations and the quasi-inverse.

1.1 The functor $F$ sends isomorphic objects to isomorphic objects and each defining triangle relation in $\mathcal T$ to a defining relation in $\mathcal U$. It consequently induces a homomorphism $F_0$ on the presented groups. The same argument gives $G_0$. [given, construct]

2.1 The unit and counit identify $GF(X)$ with $X$ and $FG(Y)$ with $Y$. Hence $G_0F_0$ and $F_0G_0$ fix every generator of their respective groups, and so are identity homomorphisms. [given, step 1.1]

3.1 Thus $F_0$ is the claimed isomorphism, with inverse $G_0$. [step 2.1] ∎


## Additive equivalences preserve split K zero

[Open item](item-lem-author-3a003d7b5208-split-group-equivalence) · level 0

### Statement
An additive equivalence $F:\mathcal A\to\mathcal B$ of essentially small additive categories induces an isomorphism of their split Grothendieck groups. The split group is generated by isomorphism classes $[M]$, with relations $[M\oplus N]=[M]+[N]$. An additive equivalence is an equivalence preserving finite direct sums up to isomorphism.

### Facts & Assumptions
**Given:** An additive equivalence $F$ with additive quasi-inverse $G$.

**Goal:** Identify the two split Grothendieck groups by their presentations.

### Proof
**Proof technique:** Transport generators and direct-sum relations.

1.1 Sending $[M]$ to $[F(M)]$ respects isomorphism and the defining relation, since $F(M\oplus N)$ is isomorphic to $F(M)\oplus F(N)$. It therefore defines a homomorphism $F_0$. The same construction gives $G_0$. [given, construct]

2.1 The unit and counit identify $GF(M)$ with $M$ and $FG(N)$ with $N$. Thus the two composite homomorphisms fix all generators, hence are identities. [given, step 1.1]

3.1 Therefore $F_0$ is an isomorphism with inverse $G_0$. [step 2.1] ∎


## Nonconnective K theory in degree zero

[Open item](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) · level 0

### Statement
For a small idempotent-complete stable infinity-category C, the canonical map from the abelian group generated by equivalence classes of objects, subject to [Y]=[X]+[Z] for every cofiber sequence X→Y→Z, to π₀𝕂(C) is an isomorphism. Here 𝕂 is the nonconnective algebraic K-theory functor of Blumberg–Gepner–Tabuada. The isomorphism sends the generator of an object to its K-theory class.

Idempotent complete means that every idempotent endomorphism splits. A cofiber sequence is a sequence X→Y→Z in which Z is the pushout of X→Y along X→0. The group is the cofiber Grothendieck group.

### External input
This is the established degree-zero comparison recalled in Kasprowski–Winges, §2.2, applied to an idempotent-complete category. Their §2.1 identifies the nonconnective functor with the BGT localizing invariant. Only the passages specified in sources.references were read; no local reconstruction of this theorem is claimed.

### Facts & Assumptions
**Given:** A small idempotent-complete stable infinity-category C and the cited nonconnective functor.

**Goal:** Identify π₀𝕂(C) with the cofiber Grothendieck group, with the stated generator map.

[F1] The external input identifies π₀𝕂(C) with the cofiber Grothendieck group of the idempotent completion of C, naturally in C, by the object-class map.

### Proof
**Proof technique:** Apply the imported comparison under its stated hypotheses.

1.1 Since C is idempotent complete, its canonical inclusion into its idempotent completion is an equivalence. Thus the cofiber Grothendieck group appearing in [F1] is the group presented using the objects and cofiber sequences of C. [F1, assume-hyp]

2.1 Apply [F1] to C and use step 1.1. The resulting natural isomorphism sends each object generator to its K-theory class, as asserted. [F1, step 1.1] ∎

## Determinant on the stable general linear group

[Open item](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant) · level 0

### Statement
For a commutative unital ring $A$, let $\operatorname{GL}_n(A)$ be the group of invertible $n$ by $n$ matrices and $\operatorname{GL}(A)$ their union under $M\mapsto\operatorname{diag}(M,1)$. The ordinary determinant defines a homomorphism $\operatorname{GL}(A)\to A^\times$, where $A^\times$ is the group of units of $A$. It factors through the abelianization $\operatorname{GL}(A)^{\mathrm{ab}}$ and sends the class of the one by one matrix $(u)$ to $u$.

The determinant of an $n$ by $n$ matrix is the sum over permutations $\sigma$ of $\operatorname{sign}(\sigma)$ times the product of the entries in positions $(i,\sigma(i))$. The abelianization of a group is its quotient by the subgroup generated by commutators.

### Facts & Assumptions

**Given:** A commutative unital ring $A$.

**Goal:** Construct the indicated determinant homomorphism and calculate it on one by one matrices.

### Proof

**Proof technique:** Use the permutation formula and the universal property of abelianization.

1.1 The permutation formula gives $\det(MN)=\det(M)\det(N)$: on expanding, terms with repeated intermediate indices cancel in pairs, and the remaining terms are indexed by permutations. Also $\det(I)=1$ and $\det(\operatorname{diag}(M,1))=\det(M)$. If $M$ is invertible, multiplicativity gives $\det(M)\det(M^{-1})=1$. Thus determinant defines a homomorphism $\operatorname{GL}(A)\to A^\times$ independent of the chosen matrix size. [given, algebra]

2.1 The unit group $A^\times$ is abelian because $A$ is commutative. Hence every commutator in $\operatorname{GL}(A)$ has determinant $1$, so the homomorphism factors uniquely through $\operatorname{GL}(A)^{\mathrm{ab}}$. The determinant of $(u)$ is $u$ by the permutation formula. [step 1.1, algebra]

3.1 Steps 1.1 and 2.1 prove the statement. [step 1.1, step 2.1] ∎

## Compatible local units glue uniquely

[Open item](item-lem-author-da44cda020c0-units-k1-gluing-units) · level 0

### Statement
Let X be a ringed space with structure sheaf O and let {Uᵢ} cover X. Units uᵢ∈O(Uᵢ)× that agree on every overlap Uᵢ∩Uⱼ glue to a unique u∈O(X)×. The resulting operation is compatible with multiplication.

A ringed space is a topological space equipped with a sheaf of commutative unital rings; a unit is a section having a multiplicative inverse.

### Facts & Assumptions

**Given:** A ringed space, an open cover, and compatible local units as in the statement.

**Goal:** Glue the units and prove uniqueness and multiplicativity.

### Proof

**Proof technique:** Apply the sheaf axiom to the sections and their inverses.

1.1 The sheaf gluing axiom gives a unique section u∈O(X) restricting to uᵢ. On overlaps the inverse sections agree, since each is the inverse of the same section. They therefore glue to v∈O(X). [given, construct]

2.1 Both uv and 1 restrict to 1 on each Uᵢ. The uniqueness part of the sheaf axiom gives uv=1; commutativity also gives vu=1. Thus u is a unit. If another global unit restricts to the same local units, uniqueness for sections makes it equal to u. [step 1.1, algebra]

3.1 The product of two glued sections restricts to the products of the local sections, so uniqueness identifies it with their glued product. This proves multiplicativity. [step 2.1, algebra] ∎

## A right inverse makes a homomorphism surjective

[Open item](item-lem-author-da44cda020c0-units-k1-split-surjective-homomorphism) · level 0

### Statement
Let $d:G\to H$ and $s:H\to G$ be group homomorphisms with $d\circ s=\operatorname{id}_H$. Then $d$ is surjective and $s$ is injective. If $G$ is abelian, $G$ is the internal direct sum of $\ker(d)$ and $s(H)$.

Here $\ker(d)$ is the subgroup of elements mapped to the identity, and an internal direct sum means that each element has a unique expression as a product of one element from each subgroup.

### Facts & Assumptions
**Given:** Group homomorphisms $d,s$ with $d\circ s=\operatorname{id}_H$.

**Goal:** Prove surjectivity, injectivity and, when $G$ is abelian, the direct-sum decomposition.

### Proof
**Proof technique:** Apply the right-inverse identity and decompose an arbitrary element.

1.1 Each $h\in H$ equals $d(s(h))$, so $d$ is surjective. If $s(h)=s(h')$, applying $d$ gives $h=h'$, so $s$ is injective. [given, algebra]

2.1 Suppose $G$ is abelian. For $g\in G$, put $k=g\,s(d(g))^{-1}$. Then $d(k)=1$, so $g=k\,s(d(g))$ lies in $\ker(d)s(H)$. If $s(h)\in\ker(d)$, then $h=d(s(h))=1$, so the two subgroups intersect only in the identity. The expression is therefore unique, and commutativity gives the internal direct sum. [given, step 1.1, algebra] ∎


## External matrix, exact and bounded-projective K-theory comparisons

[Open item](item-thm-author-da44cda020c0-units-k1-classical-comparisons) · level 0


### Statement
Assume AC. For every commutative unital ring A, let P(A) be the exact category of finite projective modules and let C(A)=Chᵇ(P(A)) be bounded cochain complexes, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical matrix-automorphism maps and degree-zero inclusion give natural isomorphisms

$$GL(A)_{ab}\xrightarrow{\sim}\pi_1 K^Q(P(A))\xrightarrow{\sim}\pi_1 K^W(C(A)).$$

The first is the classical matrix/Quillen comparison; the second includes the canonical exact-category S/Q comparison and Gillet–Waldhausen inclusion. The image of M∈$GL_n$(A) is the standard automorphism class of M acting on Aⁿ in degree zero. In particular the one-by-one unit u maps to the class of multiplication by u on A. These comparisons are natural for extension of scalars along unital ring maps.

### Source contract
**Given:** A commutative unital ring, AC, and the exact/Waldhausen structures specified above.

**Goal:** Import the actual classical comparison maps with their matrix-loop normalization.

[F1] Weibel III.1.1 identifies matrix K₁ with GL(A)_ab. IV.1.1, IV.4.9/4.11.1 and IV.7.1–7.2 identify its canonical automorphism maps with exact-category Quillen K-theory.

[F2] Weibel Exercise IV.7.9(c) matches the Quillen automorphism class with its group-completion class. IV.8.3.2/8.5 and Exercises IV.8.5–8.7 supply the canonical S/Q comparison and its automorphism-class normalization. V.2.2 supplies the K-theory equivalence induced by P(A)→C(A).

### External input
Import [F1] and [F2] with the precise reading limits in the frontmatter. These are comparisons induced by actual categorical constructions, not an unqualified existence of abstract π₁ isomorphisms. The elementary checks that P(A) is closed under kernels of its surjections and that base change is weakly exact on C(A) are given in the target’s application. The local helpers independently prove determinant and its unit calculation; no determinant compatibility is inferred from a π₀ comparison.

Source correction: Exercise IV.8.7 cites IV.7.8 for the automorphism class; the intended reference is IV.7.9. This source cross-reference error does not change the imported comparison.


## Cohomology of a cochain complex

[Open item](item-lem-author-b747b28c359f-cochain-cohomology) · level 0

### Statement
For a cochain complex $C$ of abelian groups and an integer $i$, the quotient $H^i(C)=\ker(d^i:C^i\to C^{i+1})/\operatorname{im}(d^{i-1}:C^{i-1}\to C^i)$ is an abelian group.

A cochain complex consists of abelian groups $C^i$ and homomorphisms $d^i$ satisfying $d^{i+1}d^i=0$. Elements of the kernel are cocycles and elements of the image are coboundaries.

### Facts & Assumptions

[F1] A cochain differential squares to zero, as in [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category).

### Proof

**Given:** A cochain complex $C$ and an integer $i$.

**Goal:** Show that the displayed quotient is an abelian group.

1.1 By [F1], every coboundary in degree $i$ is a cocycle. The kernel and image are subgroups of the abelian group $C^i$, so the image is a normal subgroup of the kernel. [F1]

2.1 The quotient by that subgroup therefore inherits a well-defined abelian group operation. This is $H^i(C)$. [step 1.1] ∎

## Derived enhancements of module sheaves on ringed spaces

[Open item](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement) · level 0

### Statement
Assume the Axiom of Choice and fix suitable universes. For any ringed space $(X,\mathcal O_X)$, the category $\mathrm{Mod}(\mathcal O_X)$ of all module sheaves is Grothendieck abelian. Its unbounded derived infinity-category $\mathcal D(X)$ is stable and presentable and is the infinity-localization of complexes at quasi-isomorphisms. Its homotopy category is the ordinary unbounded derived category.

### External input
Import the Grothendieck-category assertion from Stacks 079Q and the derived construction from Higher Algebra at the exact locators above. A ringed space is a ringed site via its category of opens, so the hypothesis applies without quasi-coherence or finiteness. Choice is retained for these resolution/model-category inputs. Their foundational constructions are imported, not reconstructed. The universal property of localization carries degreewise exact additive functors and their natural transformations to the derived localizations; zero objects and mapping cones give exactness. This last application uses the actual functors, rather than only functors on homotopy categories.


## Omega replacement preserves sequential stable groups

[Open item](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison) · level 1

### Statement
Let $X$ be a level-Kan sequential pointed simplicial prespectrum with sphere-first structure maps $K\wedge X_n\to X_{n+1}$, $K=\Delta^1/\partial\Delta^1$. For the replacement $QX$ of the simplicial Omega replacement input, the natural map $G_k(X)\to G_k(QX)$ is an isomorphism for every integer $k$. More precisely, for $i+k\geq2$ there is a natural isomorphism $\pi_{i+k}((QX)_i)\cong G_k(X)$, compatible with advancement in $i$.

### Statement references

[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input)

### Facts & Assumptions
**Given:** $X$, $k$ and $i$ as in the Statement.

**Goal:** Compute the stable groups of the imported Omega replacement.

[F1] [thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input) gives $(QX)_i=\operatorname{colim}_m\Omega^mX_{i+m}$, its structure maps, and $\iota_{RX}=R\iota_X$.

[F2] [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) identifies a sequential colimit with any cofinal finite tail.

### Proof
1.1 A filtered colimit of Kan simplicial sets is Kan: a horn has finitely many simplices, so a map from it factors through a stage and a filler there gives a filler in the colimit. Homotopy groups commute with this colimit because representatives use finite simplicial spheres and homotopies use their finite products with $\Delta^1$. Such maps and homotopies factor through stages, and equalities between finitely many simplices occur at a common later stage. The group operation is preserved by functoriality. [given, construct]

2.1 By step 1.1 and iterated loop–suspension adjunction, $\pi_{i+k}((QX)_i)\cong\operatorname{colim}_m\pi_{i+k+m}(X_{i+m})=G_k(X)$. Under $[A,\Omega B]\cong[K\wedge A,B]$, each new loop coordinate is inserted on the left. Consequently the transition $\Omega^m\iota$ adds the new inner loop coordinate on the left and corresponds exactly to suspension with $K$ first followed by the structure map. The last equality uses the cofinal tail. [F1, F2, step 1.1]

3.1 The map $X_i\to(QX)_i$ inserts the $m=0$ term. By $\iota_{RX}=R\iota_X$, the adjoint structure maps of $QX$ identify advancement in $i$ with the same transition in the colimit of step 2.1. Thus these isomorphisms are compatible in $i$, and the map $G_k(X)\to G_k(QX)$ becomes the identity under them. This proves both assertions. [F1, F2, step 2.1] ∎

## Omega towers and the suspension index

[Open item](item-lem-author-e0b0bf18ed2b-omega-tower-shift) · level 1

### Statement
Let $Y=(Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $\mathcal Y$ be its corresponding object of $\mathrm{Sp}$. Put $\pi_k(\mathcal Y)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)$. For every integer $k$ and $n\geq0$ with $n+k\geq2$ there are compatible natural isomorphisms $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)\cong G_k(Y)$. The tail $(Y_{n+1})_{n\geq0}$ represents $\mathcal Y[1]$, and $\pi_k(\mathcal Y[1])\cong\pi_{k-1}(\mathcal Y)$.

### Facts & Assumptions
**Given:** $Y$, $k$ and $n$ as stated. Here $[1]$ is suspension and $[-1]$ its inverse; $\operatorname{Map}$ denotes the mapping space in $\mathrm{Sp}$.

**Goal:** Compare tower and enhanced groups and determine the suspension index.

[F1] The stable enhancement gives the tower equivalence, $\Omega^\infty(\mathcal Y[n])\simeq Y_n$, stability and the adjunction $\Sigma^\infty\dashv\Omega^\infty$, with $\mathbb S=\Sigma^\infty S^0$. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[F2] Cofinal tails of sequential group systems have canonically isomorphic colimits. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

### Proof
1.1 Stability makes suspension and loops inverse. Hence $\operatorname{Map}(\mathbb S[k],\mathcal Y)\simeq\operatorname{Map}(\mathbb S,\mathcal Y[-k])\simeq\Omega^\infty(\mathcal Y[-k])$. Since $\mathcal Y[-k]\simeq\Omega^{n+k}(\mathcal Y[n])$, taking components gives $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)$. These are group isomorphisms, with the abelian group law detected in degree $n+k\geq2$. Naturality of the adjunction makes them compatible with the tower maps. [F1, given]

2.1 Each bonding map in the tower is an isomorphism on the relevant groups because $Y_n\simeq\Omega Y_{n+1}$. Therefore the colimit is canonically any sufficiently late stage group, compatibly with step 1.1. This proves $\pi_k(\mathcal Y)\cong G_k(Y)$. [F1, F2, step 1.1]

3.1 Evaluation gives $\Omega^\infty((\mathcal Y[1])[n])\simeq\Omega^\infty(\mathcal Y[n+1])\simeq Y_{n+1}$ compatibly with the loop maps, so the tail represents $\mathcal Y[1]$. Applying step 1.1 to the tail identifies its $k$th group with the $(k-1)$st group of $\mathcal Y$. This proves the suspension formula. [F1, step 1.1, step 2.1] ∎


## Stable rotation and exact coherent products

[Open item](item-lem-author-e0b0bf18ed2b-exactness-and-products) · level 1

### Statement
In $\mathrm{Sp}$ every small coherent diagram has a homotopy limit and colimit. For $f:A\to B$ define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\amalg_A0$. Then $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. A fiber sequence $F\to A\to B$, including its nullhomotopy and defining pullback square, extends to the cofiber triangle $F\to A\to B\to F[1]$. Products are coherent homotopy products. Smash with a fixed spectrum preserves finite limits and finite colimits in either variable.

### Facts & Assumptions
**Given:** Spectra, a map $f$ and a small indexing infinity-category. Write $0$ for the zero object and $[1]$ for suspension, $E[1]=0\amalg_E0$.

**Goal:** Establish rotation, products and separate exactness of smash.

[F1] The stable enhancement gives all small limits and colimits, equality of pushouts and pullbacks, and a symmetric monoidal smash preserving colimits separately. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

### Proof
1.1 The limits and colimits exist by [F1] and are homotopy limits and colimits because their universal properties are equivalences of mapping spaces. In particular, the limit over a discrete small indexing category is the homotopy product, with the coherences supplied by the limit construction. [F1]

1.2 The square defining $F$ as the fiber of $A\to B$ is a pullback and hence a pushout. Thus $B\simeq A\amalg_F0$. Pasting pushouts gives $B\amalg_A0\simeq(A\amalg_F0)\amalg_A0\simeq0\amalg_F0=F[1]$. The induced map $B\to F[1]$ completes the stated cofiber triangle. Taking $F=\operatorname{fib}(f)$ gives $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. [F1, given]

2.1 Smash with a fixed spectrum preserves colimits and therefore the zero object and pushout squares. A pullback square is a pushout square, so its image is again both a pushout and a pullback. Preservation of the zero object and pullbacks gives preservation of finite limits; finite colimits are preserved by assumption. The same argument applies in the other variable. This proves the statement. [F1, step 1.1, step 1.2] ∎


## Restriction, stalks and cohomological support

[Open item](item-lem-author-4f716d60801a-restriction-support) · level 1

### Statement
Assume the Axiom of Choice. Let $X$ be a scheme, $U\subseteq X$ open, and $x\in X$. Restriction and taking the stalk at $x$ induce exact functors $\mathcal D(X)\to\mathcal D(U)$ and $\mathcal D(X)\to\mathcal D(\mathcal O_{X,x})$. For $E\in\mathcal D(X)$ put $\operatorname{Supp}(E)=\bigcup_n\{x:H^n(E)_x\ne0\}$. This support is invariant under equivalence. For $T\subseteq X$, it is contained in $T$ exactly when the stalk complex at every point outside $T$ is acyclic. If $T$ is closed, this is equivalent to $E|_{X\setminus T}\simeq0$. Support is unchanged by shifts, is contained in the union of the supports of the first two objects of a cofiber sequence, and cannot increase on passing to a retract.

### Facts & Assumptions
**Given:** $X$, $U$, $x$, $T$ and $E$ as stated.

**Goal:** Establish exactness and the support assertions.

[A1] Choice is used to invoke the derived enhancement in [F1], in suitable fixed universes; no extra choice is needed by the stalkwise argument. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the derived localizations and represents cofibers by cones.

### Proof
1.1 Restriction is exact because sheaf exactness is local. Stalks are exact: a germ relation or a local preimage is witnessed on a sufficiently small neighbourhood. Both operations therefore commute with cohomology and preserve quasi-isomorphisms. They preserve zero and mapping cones degreewise, and hence induce exact functors by [F1]. [F1, given]

2.1 Equivalent objects have isomorphic cohomology sheaves. By step 1.1, the cohomology of a stalk complex is the stalk of the cohomology sheaf, proving the stalkwise criterion. A sheaf vanishes exactly when all its stalks vanish, so, when $X\setminus T$ is open, the same criterion is equivalent to vanishing of all cohomology sheaves of the restriction, hence to its being zero in the derived localization. [F1, step 1.1]

3.1 Shifts merely reindex cohomology. The long exact cohomology sequence of a cone shows that a cofiber stalk is acyclic when the two preceding stalks are. A retract induces retracts on cohomology stalks, so its support is contained in that of the original object. These observations prove the remaining assertions. [F1, step 1.1, step 2.1] ∎

## Bounded finite-projective complexes and affine chain models

[Open item](item-lem-author-4f716d60801a-finite-projective-model) · level 1

### Statement
Assume the Axiom of Choice. For a commutative unital ring $A$, degreewise associated sheaf and global sections give inverse equivalences between bounded complexes of finitely generated projective $A$-modules and bounded complexes of finite locally free sheaves on $\operatorname{Spec}A$, preserving chain maps, homotopies, shifts and cones. A bounded complex $P$ of projective modules is K-projective: every map from $P$ to an acyclic complex is nullhomotopic, including after any shift of the target. Thus its derived morphisms are chain maps modulo homotopy, and the differential graded category of bounded finite-projective complexes models the full enhanced ring-perfect subcategory.

### Facts & Assumptions
**Given:** $A$, $P$ and an acyclic complex $N$ as in the statement.

**Goal:** Establish the affine chain model and its derived mapping property.

[F1] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) gives the additive termwise equivalence under Choice.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the derived localization, and [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) supplies exactness of associated sheaf.

[F3] [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) defines ring-perfect objects by bounded finite-projective representatives.

### Proof
1.1 Apply [F1] termwise. Naturality of the unit and counit makes them commute with differentials, while additivity preserves the equations for chain maps and homotopies and the signed matrices for shifts and cones. Exactness in [F2] also preserves quasi-isomorphisms. [F1, F2]

1.2 For a chain map $f:P\to N$, construct a homotopy downward from the largest degree in which $P$ is nonzero. At each degree, after the next homotopy component is chosen, the remaining map from $P^n$ lands in the cycles of $N^n$; acyclicity makes $N^{n-1}\to Z^n(N)$ surjective, and projectivity lifts it. The finite downward construction gives $f=dh+hd$. The same argument applies to every shift of $N$, so the Hom complex $\operatorname{Hom}_A(P,N)$ is acyclic. [given, construct]

2.1 The cone of a quasi-isomorphism is acyclic. Step 1.2 therefore shows that $\operatorname{Hom}_A(P,-)$ sends quasi-isomorphisms to quasi-isomorphisms. Consequently its Hom complex computes derived maps from $P$; its zeroth cohomology is chain maps modulo homotopy. By [F3], every ring-perfect object has such a representative, so these complexes and their Hom complexes give the stated full enhanced model. [F2, F3, step 1.2] ∎

## Reindexing commutes with shifts

[Open item](item-lem-author-80e2d7bee57f-chain-shift-reindex) · level 1

### Statement
Let $D_n=C^{-n}$ be the chain complex associated to a cochain complex $C$. For an integer $k$, define the chain shift by $D[k]_n=D_{n-k}$ and differential $(-1)^k\partial_{n-k}$. The chain complex associated to $C[k]$ is exactly $D[k]$.

### Facts & Assumptions
**Given:** $C$, $D$, and $k$ as stated.

**Goal:** Compare the shifted chain complexes.

[F1] [lem-author-80e2d7bee57f-cochain-to-chain](item-lem-author-80e2d7bee57f-cochain-to-chain) specifies the cochain-to-chain reindexing.

[F2] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) specifies the cochain shift.

### Proof
1.1 In degree $n$, the chain group associated to $C[k]$ is $C[k]^{-n}=C^{-n+k}=D_{n-k}$. [F1, F2, given]

2.1 Its differential is $(-1)^k d_C^{-n+k}$, which is precisely $(-1)^k\partial_{n-k}$. Thus the identification is an equality of chain complexes, natural in $C$. [F1, F2, step 1.1] ∎

## K-flat roofs give the full derived localization

[Open item](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) · level 1

### Statement
Assume AC. For any scheme X let A=Mod($O_X$), the abelian category of all Zariski module sheaves, $K=K$(A) its cochain homotopy category, and H⊆K the full subcategory on K-flat complexes. Let S be the quasi-isomorphisms in K and $S_H$=S∩Arrows(H). Then the functor induced by actual inclusion

$$(S_H)^{-1}H\longrightarrow S^{-1}K=D(\mathcal O_X)$$

is an exact equivalence, including full faithfulness. Consequently the actual inclusion induces an exact equivalence F(X)[$W_X$⁻¹]→𝒟(X) of stable infinity-localizations, with F(X) the ordinary category of K-flat complexes and $W_X$ its quasi-isomorphisms, and 𝒟(X) the supplied derived enhancement. The ordinary-localization assertion holds for any ringed space. No K-flat complex is assumed K-projective, and morphisms in these localizations are not replaced by chain maps without denominators.

### Facts & Assumptions
**Given:** X, all unbounded sheaf complexes, AC and fixed universes. Use a larger universe to form their homotopy categories and localizations.

**Goal:** Prove essential surjectivity, fullness and faithfulness of this actual localization functor, then its stable enhanced upgrade.

[F1] [thm-author-c5bc2838d897-kflat-addendum-verdier-criterion](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) gives Stacks Lemma 13.5.8 and the quasi-isomorphism multiplicative system, with the precise right-roof/common-refinement calculus.

[F2] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) includes Stacks Lemma 20.26.12 (06YF), providing R→M K-flat and quasi-isomorphic for every complex M, and Lemma 20.26.6 (079S), providing shift/cone closure.

[F3] [thm-author-c5bc2838d897-kcoherent-enhanced-localization-input](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) supplies HA Proposition 1.3.4.5 (chain-interval localization and dg nerve) and Drew Theorem 1.3 (stable Verdier localization). [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) identifies 𝒟(X) as localization of all complexes, with h𝒟(X)=D($O_X$).

[F4] [thm-author-c5bc2838d897-kflat-addendum-verdier-criterion](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) records the exact h/ordinary-nerve adjunction of HTT Proposition 1.2.3.1. Applying that adjunction to the localization universal property identifies h(C[W⁻¹]) with the ordinary localization (hC)[(hW)⁻¹].

### Proof
1.1 The subcategory H is full because between K-flat complexes it keeps all chain maps modulo all chain homotopies. K-flatness is invariant under chain homotopy equivalence: tensoring preserves homotopies, hence preserves contractibility and the acyclicity test defining K-flatness. Zero and shifts are K-flat, and the cone of a map between K-flat complexes is K-flat by [F2]. Distinguished triangles inherited from K therefore make H a full pretriangulated subcategory. By [F1], S is saturated and compatible with the triangulated structure, and S⁻¹$K=D$($O_X$). [F1, F2, given]

2.1 Every M∈K receives a quasi-isomorphism R→M with R K-flat by [F2]. This verifies the replacement hypothesis of Stacks Lemma 13.5.8 for every ambient object, without boundedness or global scheme hypotheses. Together with step 1.1 all its hypotheses hold. Thus $S_H$ is a saturated compatible multiplicative system and ($S_H$)⁻¹H→S⁻¹K is an exact equivalence by [F1]. The following two steps make the full-faithfulness content explicit. [F1, F2, step 1.1]

2.2 For fullness, let P,Q∈H and represent a derived morphism by the right roof $P\xleftarrow{s}M\xrightarrow{a}Q$ in K, with s∈S, using [F1]. Choose r:R→M as in [F2]. Then $P\xleftarrow{sr}R\xrightarrow{ar}Q$ is a roof in H with denominator sr∈$S_H$ and represents the same ambient derived morphism. Thus the map on each localized Hom set is surjective. Essential surjectivity on objects follows from the same replacement R→M. [F1, F2, step 1.1]

2.3 For faithfulness, let roofs $P\xleftarrow{s_i}R_i\xrightarrow{a_i}Q$ in H, for $i=1,2$, have equal images in S⁻¹K. The right-calculus equivalence relation in [F1] provides a common refining roof $P\xleftarrow{t}M\xrightarrow{b}Q$ in K and maps $u_i$:M→$R_i$ in K with $s_i$ $u_i$=t∈S and $a_i$ $u_i$=b. Choose a K-flat quasi-isomorphism r:R→M. Then $u_i$ r:R→$R_i$ are morphisms of the full subcategory H, the common denominator tr belongs to $S_H$, and $s_i$ $u_i$ r=tr and $a_i$ $u_i$ r=br as equalities in H. They are equalities of homotopy classes; any witnessing chain homotopies are the same homotopies in the full complex subcategory, so no lifting of homotopies is needed. Hence $P\xleftarrow{tr}R\xrightarrow{br}Q$ is a common refining roof in H. The two original roofs are equal in ($S_H$)⁻¹H by the same [F1] equivalence relation. Thus the map on Hom sets is injective. [F1, F2, step 1.1]

3.1 Let $C_X$=F(X)[$W_X$⁻¹] denote the common model's fiber. K-flat complexes are closed under the finite chain interval because it is built from finite sums, shifts and cones. By [F3], first localizing F(X) at chain homotopy equivalences gives its stable dg nerve; localizing further at quasi-isomorphisms is the stable Verdier localization by acyclic objects. Thus $C_X$ is stable. Actual inclusion into all complexes induces $I_X$:$C_X$→𝒟(X), and $I_X$ is exact: zero and the cofiber cone diagrams are preserved by inclusion and the exact localizations. By [F4], the homotopy category of this localization is precisely ($S_H$)⁻¹H, so hI_X is the functor proved fully faithful and essentially surjective in steps 2.1 through 2.3. [F3, F4, step 1.1, step 2.1, step 2.2, step 2.3]

4.1 For P,Q∈$C_X$ and m≥0, the homotopy group at zero of its stable mapping space is Hom_{hC_X}(P[m],Q), and similarly in 𝒟(X). Exactness of $I_X$ identifies the shift comparison, so hI_X being fully faithful identifies these homotopy groups and the sets of components. Stable mapping spaces are grouplike; translation by any component reduces its basepoint to zero. Hence every Map(P,Q)→Map($I_X P$,$I_X Q$) is an equivalence of spaces. Essential surjectivity follows from hI_X, so $I_X$ is an exact equivalence of the actual stable enhancements. This proves exactly the missing fiber comparison for the unchanged coherent-family construction. [F3, step 3.1] ∎

## Strong monoidal transport from a product-base cocartesian family

[Open item](item-lem-author-c5bc2838d897-monoidal-transport-product-family) · level 1

### Statement
Let $S=N(\mathrm{Fin}_*)$ and let $q:E\to B\times S$ be a cocartesian fibration of infinity-categories. Assume that for each $b\in B$, the inert transports in the pullback $E_b^{\otimes}\to S$ induce equivalences $E_{(b,n)}\simeq E_{(b,1)}^n$ for all $n\geq0$; the $n=0$ condition means $E_{(b,0)}$ is terminal. Then $q$ determines one coherent functor from $B$ to symmetric monoidal infinity-categories and strong symmetric monoidal functors. Its value at $b$ is $E_b^{\otimes}\to S$, and its transport for $u:b\to b'$ is induced by $q$-cocartesian transport over $(u,\mathrm{id})$. It preserves every $S$-cocartesian transport, including active tensor operations and the nullary unit, with all composition/higher coherences.

### Facts & Assumptions
**Given:** One actual cocartesian fibration over the PRODUCT $B\times S$, and the specified Segal/unit equivalences. Separate fibrations over $B$ and $S$ do not constitute the hypothesis.

**Goal:** Derive strong symmetric monoidal $B$-transports from that one family.

[F1] [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input) supplies straightening with its morphisms, exponential currying, and the HA symmetric monoidal/strong monoidal criteria.

### Proof
1.1 Straighten $q$ to $F:B\times S\to\mathrm{Cat}_\infty$. Currying is the exponential equivalence $\operatorname{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\operatorname{Fun}(B,\operatorname{Fun}(S,\mathrm{Cat}_\infty))$, so it gives one functor $G:B\to\operatorname{Fun}(S,\mathrm{Cat}_\infty)$, with $G(b)=F(b,-)$. The pullback $E_b^{\otimes}\to S$ is its unstraightening. By the assumed inert Segal equivalences and terminal zeroth value, this is a symmetric monoidal infinity-category. [F1, given]

2.1 An edge $u:b\to b'$ gives the actual natural transformation $G(u):F(b,-)\to F(b',-)$ in $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Under the straightening equivalence whose morphisms preserve cocartesian arrows, it gives a map $E_b^{\otimes}\to E_{b'}^{\otimes}$ OVER $S$ preserving ALL $S$-cocartesian arrows. Its component at $s\in S$ is the $q$-transport along $(u,\mathrm{id}_s)$. Thus it is strong symmetric monoidal by the criterion in [F1], not just a map preserving inert arrows. [F1, step 1.1]

3.1 Explicitly, for every $\alpha:s\to t$ in $S$, naturality in the curried functor gives an equivalence $F(b',\alpha)\circ F(u,\mathrm{id}_s)\simeq F(u,\mathrm{id}_t)\circ F(b,\alpha)$. Both sides are transports along the same composite arrow $(u,\alpha)$ in the product base. For $\alpha:\langle2\rangle\to\langle1\rangle$ this is the tensor equivalence, and for $\alpha:\langle0\rangle\to\langle1\rangle$, together with terminal $E_{(b,0)}$, it is the unit equivalence. Hence the active and nullary operations are preserved, not merely the coordinate projections. [F1, step 1.1, step 2.1]

4.1 Every simplex of $B$ is already sent by $G$ to a simplex of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Unstraightening its transformations retains their full compositions and all higher coherences. The full subcategory of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$ on objects satisfying the Segal/unit conditions contains every $G(b)$, and, by step 2.1, its transformations correspond to strong symmetric monoidal functors. Therefore $G$ factors through that model of symmetric monoidal infinity-categories, proving the asserted coherent diagram. No higher coherence has been inferred from pointwise equivalences. [F1, step 1.1, step 2.1, step 3.1] ∎


## Affine bundle K zero is the projective split group

[Open item](item-lem-author-3a003d7b5208-affine-bundle-split-group) · level 1


### Statement
Assume the Axiom of Choice. For a commutative unital ring $A$ and $X=\operatorname{Spec}A$, associated sheaf induces an isomorphism from the split Grothendieck group of finitely generated projective $A$-modules to the vector-bundle Grothendieck group of $X$.

A finitely generated projective module is a finitely generated module with the lifting property through surjective module maps. A vector bundle is a locally finite free $\mathcal O_X$-module. Its Grothendieck group is generated by isomorphism classes $[E]$, with $[E]=[E']+[E'']$ for every short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles. The split group has only the corresponding direct-sum relations.

### Facts & Assumptions
**Given:** AC, a commutative unital ring $A$, and $X=\operatorname{Spec}A$.

**Goal:** Compare the two stated group presentations.

[A1] The Axiom of Choice is assumed, as required by the affine bundle–module equivalence in [F1]. No additional choice is used in the group-presentation argument. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Associated sheaf is an additive equivalence from finite projective modules to vector bundles on $X$, and every short exact sequence of these bundles splits. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] An additive equivalence induces an isomorphism on split Grothendieck groups. [lem-author-3a003d7b5208-split-group-equivalence](item-lem-author-3a003d7b5208-split-group-equivalence)

### Proof
**Proof technique:** Split the exact-sequence relations and transport the presentation.

1.1 Every direct sum $E'\oplus E''$ gives a split short exact sequence, so each split relation is an exact-sequence relation. Conversely, by [F1] under [A1], any short exact sequence of vector bundles identifies its middle term with $E'\oplus E''$, so its relation is a split relation. The two relation subgroups coincide. [A1, F1, construct]

2.1 The associated-sheaf equivalence in [F1] induces an isomorphism of split groups by [F2]. Composing with the identification in step 1.1 gives the stated isomorphism, carrying $[P]$ to $[\widetilde{P}]$. [A1, F1, F2, step 1.1] ∎


## External exact extension by zero for module sheaves

[Open item](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input) · level 1

### Statement
For an open subspace $v:V\hookrightarrow X$ of a ringed space, module extension by zero $v_!$ is an exact additive functor left adjoint to exact restriction $v^*$. Its stalk is the given module stalk at points of $V$ and zero outside $V$, and $v^*v_!=\mathrm{id}$. Assuming the Axiom of Choice and fixed suitable universes for the derived constructions, applying both functors degreewise to complexes preserves quasi-isomorphisms and mapping cones, so they induce actual exact functors on the sheaf-derived infinity-localizations for these arbitrary ringed spaces. Their ordinary natural unit/counit maps induce natural transformations there.

### Source contract
**Given:** A ringed space and an open subspace with restricted structure sheaf; for enhancements, Choice and suitable fixed universes.

**Goal:** Supply an actual chain-level functor for the supported-category excision argument.

[F1] Stacks Definition 6.31.5 and Lemma 6.31.8 supply module extension by zero, its adjunction, stalks and restriction identity.

[A1] Choice is retained for the Grothendieck-module derived enhancement, not for an additional stalkwise step. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Stacks §20.32 opening paragraphs and Lemma 20.32.8 supply exactness and the degreewise derived construction. [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement) specifies the infinity-localization and exactness of induced functors.

### External input
Import the sheaf results [F1]–[F2]. The enhanced conclusion follows by the universal property of the supplied localization: the actual degreewise functors send quasi-isomorphisms to quasi-isomorphisms and commute with zero and cones. No claim is made that extension by zero preserves every quasi-coherent or perfect object; the following local support lemma proves preservation on precisely the subcategories where it is used.


## Stable determinant commutes with ring maps

[Open item](item-lem-author-da44cda020c0-units-k1-determinant-base-change) · level 1

### Statement
For a unital homomorphism $f:A\to B$ of commutative unital rings, entrywise application of $f$ induces $\mathrm{GL}(A)^{\mathrm{ab}}\to\mathrm{GL}(B)^{\mathrm{ab}}$. The stable determinant homomorphisms commute with this map and with $f:A^\times\to B^\times$.

### Statement references
[lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

### Facts & Assumptions
**Given:** A unital homomorphism $f:A\to B$ of commutative unital rings.

**Goal:** Prove the stated naturality square.

[F1] Stable determinant is induced by the permutation formula and factors through abelianization. [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

### Proof
**Proof technique:** Apply the ring homomorphism to the determinant formula.

1.1 If $MN=NM=I$, then $f(M)f(N)=f(N)f(M)=I$, so entrywise application gives compatible homomorphisms $\mathrm{GL}_n(A)\to\mathrm{GL}_n(B)$, hence a homomorphism of stable groups and of their abelianizations. A unit and its inverse likewise map to a unit and its inverse. [given, algebra]

2.1 Applying $f$ to the finite permutation formula gives $f(\det M)=\det(f(M))$. The equality is compatible with stabilization and passes to the abelianized groups by [F1]. This is the desired square. [F1, step 1.1, algebra] ∎


## Gluing compatible local determinant homomorphisms

[Open item](item-lem-author-da44cda020c0-units-k1-local-determinant-gluing) · level 1

### Statement
Let $X$ be a ringed space covered by open sets $U_i$. Let $G$ and $G_i$ be groups with homomorphisms $r_i:G\to G_i$, and let $d_i:G_i\to\mathcal O_X(U_i)^\times$ be homomorphisms. Assume that, for every $g\in G$, the sections $d_i(r_i(g))$ agree on every overlap. Then there is a unique homomorphism $d:G\to\mathcal O_X(X)^\times$ whose restriction to each $U_i$ is $d_ir_i$.

### Facts & Assumptions
**Given:** The cover, groups, maps and overlap compatibility in the statement.

**Goal:** Construct the unique global homomorphism $d$.

[F1] Compatible local units glue uniquely, and gluing respects multiplication. [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units)

### Proof
**Proof technique:** Glue pointwise and use uniqueness.

1.1 For each $g\in G$, the assumed overlap compatibility and [F1] give a unique global unit $d(g)$ restricting to $d_i(r_i(g))$ on every $U_i$. [F1, given]

2.1 For $g,h\in G$, the restrictions of $d(gh)$ and $d(g)d(h)$ agree on every $U_i$ because $d_i$ and $r_i$ are homomorphisms. Uniqueness in [F1] gives $d(gh)=d(g)d(h)$. The same uniqueness proves that any map with the specified restrictions equals $d$. [F1, step 1.1] ∎


## Cohomology maps induced by cochain maps

[Open item](item-lem-author-b747b28c359f-cochain-maps) · level 1

### Statement
A cochain map $f:C\to D$ induces a homomorphism $H^i(f):H^i(C)\to H^i(D)$ for every integer $i$. These homomorphisms preserve identities and composition. A cochain map is a family of homomorphisms $f^i:C^i\to D^i$ satisfying $d_D^if^i=f^{i+1}d_C^i$.

### Facts & Assumptions

[F1] Cohomology is the group of cocycles modulo coboundaries, as in [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology).

### Proof

**Given:** Cochain complexes and cochain maps between them.

**Goal:** Construct the induced maps and establish their functoriality.

1.1 The defining commutation relation sends cocycles to cocycles and coboundaries to coboundaries. Thus $[x]\mapsto[f^i(x)]$ is a well-defined homomorphism on the quotient in [F1]. [F1, construct]

2.1 Applying the identity or a composite to a cocycle gives respectively the same cocycle or the successive images. Hence the induced maps preserve identities and composition. [step 1.1] ∎

## Singular sphere classes and ordered suspension

[Open item](item-lem-adjudicate-1ef158934564-singular-sphere-comparison) · level 1

### Statement
Let $Z$ be a based space and put $K=\Delta^1/\partial\Delta^1$, with $|K|=S^1$ in a fixed orientation. For every $d\geq1$, adjunction identifies the simplicial group $\pi_d(\operatorname{Sing}Z)$ with $\pi_d(Z)$. On a finite pointed simplicial sphere $A$ a representative $a:A\to\operatorname{Sing}Z$ is sent to $\epsilon_Z|a|:|A|\to Z$. The comparison respects suspension with $K$ as the first smash factor and $S^1$ as the first topological factor.

### Facts & Assumptions
**Given:** $Z,K,d$ as stated and the ordinary simplicial homotopy groups of the Kan complex $\operatorname{Sing}Z$.

**Goal:** Compare actual sphere classes and their suspension representatives.

[F1] The pointed realization–singular adjunction identifies maps with their evaluated realizations. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] Kerodon Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7 and Theorem 3.2.2.10 give the sphere-class convention and group law. Corollary 3.6.2.2 identifies realization of a product with a finite simplicial factor with the product. These precise standard facts are imported at the recorded locators.

### Proof
1.1 Apply [F1] to $A=\Delta^d/\partial\Delta^d$. A pointed simplicial map corresponds exactly to a continuous pointed map from $|A|=S^d$. Relative homotopies correspond as well: a simplicial homotopy uses $\Delta^1\times A$, whose realization is $[0,1]\times|A|$ by [F2], with the basepoint cylinder collapsed in the pointed version. Thus adjunction induces a bijection of pointed sphere classes. The group identification is the one of [F2]; its multiplication is the usual concatenation of sphere representatives under this correspondence. [F1, F2, construct]

2.1 The same adjunction argument applies to finite pointed sphere models, including iterated smash powers of $K$. Realization preserves quotients and, by [F2], products with $K$, hence $|K\wedge A|\cong S^1\wedge|A|$. For a simplicial structure map adjoint to $S^1\wedge|\operatorname{Sing}Z|\xrightarrow{1\wedge\epsilon_Z}S^1\wedge Z\xrightarrow{\sigma}Z'$, evaluation of the suspension of $a$ is exactly $\sigma(1\wedge\epsilon_Z|a|)$. The first factor remains the first factor. This proves the claimed compatibility on actual representatives and on their homotopy classes. [F1, F2, step 1.1] ∎


## Singular complexes preserve the sequential group convention

[Open item](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison) · level 2

### Statement
Let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces with structure maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$, sphere first. Let $K=\Delta^1/\partial\Delta^1$, with $|K|$ identified with $S^1$ in the chosen orientation, and put $X_n=\operatorname{Sing}E_n$ with its constant basepoint simplex. Give $X$ the structure map $K\wedge X_n\to X_{n+1}$ adjoint to $|K\wedge X_n|\cong S^1\wedge|X_n|\to S^1\wedge E_n\to E_{n+1}$, where the middle map uses evaluation. Then every $X_n$ is Kan and $G_k(X)\cong\pi_k(E)$ naturally for every integer $k$, with the published sphere-first bonding convention.

### Facts & Assumptions
**Given:** $E$, $K$ and the chosen oriented realization as in the Statement. The group $G_k$ is the sequential colimit of the tail-invariance supplier.

**Goal:** Construct the simplicial prespectrum and compare its stable groups to the published groups.

[F1] The singular-realization input gives the natural evaluation weak equivalence and pointed realization–singular adjunction. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] The sequential definitions fix sphere-first structure maps and bonding maps. [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps), [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[F3] Tail invariance gives cutoff independence and passage of compatible level isomorphisms to colimits. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[F4] The direct sphere-comparison lemma identifies the simplicial groups with topological groups by evaluated sphere representatives and verifies the ordered suspension formula. [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)

### Proof
1.1 The adjunction defines the displayed structure map. A horn in $\operatorname{Sing}E_n$ is a continuous map from a realized topological horn to $E_n$; the simplex retracts continuously onto that horn, so the map extends and $X_n$ is Kan. Naturality of evaluation and the defining adjunction make the square relating the realized structure map to $\sigma_n$ commute. [F1, F2, given]

2.1 For $d\geq1$, use [F4] to identify $\pi_d^{\mathrm{simp}}(X_n)\cong\pi_d(E_n)$, not just the homotopy groups of $|X_n|$. For a sphere representative $a$, the evaluated simplicial bonding map is $\sigma_n\circ(1_{S^1}\wedge(\epsilon_n|a|))$ by [F4]. This is exactly the bonding representative of [F2] with the same sphere-coordinate identification. Thus the group isomorphisms commute with the actual bonding maps, without permuting coordinates. [F1, F2, F4, step 1.1]

3.1 For each integer $k$, choose a tail with $n+k\geq2$. Step 2.1 gives compatible isomorphisms of its stage groups. Passing to colimits by [F3] gives the asserted natural isomorphism $G_k(X)\cong\pi_k(E)$ for every integer $k$. [F2, F3, step 2.1] ∎


## Local perfection implies quasi-coherent cohomology

[Open item](item-lem-author-4f716d60801a-local-perfect-qc) · level 2

### Statement
Assume the Axiom of Choice. On any scheme, local equivalence to a bounded complex of finite locally free sheaves is independent of the chosen derived representative and local on the scheme. Every object satisfying it has quasi-coherent cohomology. The finite bounds may depend on the open set.

### Facts & Assumptions
**Given:** A scheme $X$ and a locally perfect object $E$ of $\mathcal D(X)$.

**Goal:** Prove well-definedness and quasi-coherence of its cohomology.

[F1] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) gives invariance and locality of perfection.

[F2] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) identifies finite locally free complexes on affine opens with finite-projective complexes, and [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) gives exactness of associated sheaf.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives commutation of restriction with cohomology.

### Proof
1.1 The local condition is invariant under derived equivalence and can be checked on an open cover by [F1]. Restricting a local representative to a smaller open set preserves its bounded finite locally free form. [F1, given]

2.1 Refine the local presentations to affine opens. By [F2], on each such open the representative is the associated sheaf of a bounded finite-projective complex. Exactness of associated sheaf identifies its cohomology with associated sheaves of module cohomology, which are quasi-coherent. By [F3] these are the restrictions of $H^n(E)$. Quasi-coherence is local on affine covers, so every $H^n(E)$ is quasi-coherent. The construction imposes no common global bound. [F2, F3, step 1.1] ∎

## Reading spectrum homotopy from an Omega tower

[Open item](item-lem-author-80e2d7bee57f-tower-group-index) · level 2

### Statement
Let $Y=(Y_n)$ be a coherent Omega tower of pointed spaces, meaning that its specified maps $Y_n\to\Omega Y_{n+1}$ are equivalences, and let $E$ be its associated spectrum. For every integer $i$ and every sufficiently large $n$, the natural comparison identifies $\pi_i(E)$ with $\pi_{n+i}(Y_n)$ and with the stable group of the tower.

### Facts & Assumptions
**Given:** $Y$, $E$, and $i$ as stated.

**Goal:** Identify the stable group with the enhanced homotopy group.

[F1] [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift) gives the comparison when $n+i\geq2$, compatible with advancement in the tower.

### Proof
1.1 Choose $n$ with $n+i\geq2$. The first isomorphism and its compatibility with advancement are exactly those of [F1]. [F1, given, choose]

2.1 Each tower transition induces an isomorphism on the relevant homotopy group, so its stable colimit is identified with any such sufficiently late group. Combining this with step 1.1 proves the claim. [F1, step 1.1] ∎

## Homotopic maps act equally on cohomology

[Open item](item-lem-author-b747b28c359f-homotopy-cohomology) · level 2

### Statement
If cochain maps $f,g:C\to D$ are cochain-homotopic, then $H^i(f)=H^i(g)$ for every integer $i$. Here a cochain homotopy is a family $h^i:C^i\to D^{i-1}$ with $f^i-g^i=d_D^{i-1}h^i+h^{i+1}d_C^i$.

### Facts & Assumptions

[F1] Cochain maps induce maps on cohomology by applying the map to cocycle representatives ([lem-author-b747b28c359f-cochain-maps](item-lem-author-b747b28c359f-cochain-maps)).

### Proof

**Given:** Cochain maps $f,g$ and a cochain homotopy $h$ between them.

**Goal:** Prove equality of their induced cohomology maps.

1.1 For a cocycle $x\in C^i$, the homotopy identity gives $f^i(x)-g^i(x)=d_D^{i-1}h^i(x)$ because $d_C^i(x)=0$. This difference is a coboundary. [given]

2.1 Every cohomology class has a cocycle representative, and by [F1] the induced maps take it to the classes of $f^i(x)$ and $g^i(x)$. These classes agree by step 1.1. [F1, step 1.1] ∎

## Stable spectra and exact triangles

[Open item](item-def-stable-spectra-interface) · level 3

### Definition
Use the symmetric monoidal stable infinity-category $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$ supplied by the stable enhancement input. Here $S$ is the infinity-category of spaces, $S_*^{\mathrm{fin}}$ is the infinity-category of finite pointed spaces, and $\operatorname{Exc}_*$ consists of functors taking the point to a contractible space and pushouts to pullbacks. An infinity-category retains mapping spaces and coherent higher compositions. Diagrams are coherent functors, and limits and colimits are their homotopy limits and colimits; these exist for small diagrams.

Write $0$ for the zero spectrum. For $f:A\to B$, define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\sqcup_A0$. A fiber or cofiber sequence includes its nullhomotopy and defining pullback or pushout square. Define suspension $E[1]=0\sqcup_E0$ and desuspension $E[-1]=0\times_E0$. A fiber sequence $F\to A\to B$ extends to the cofiber triangle $F\to A\to B\to F[1]$, and $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. Let $\mathbb S=\Sigma^\infty S^0$ be the sphere spectrum and define $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$. These are abelian groups for every $i\in\mathbb Z$, and $\pi_i(E[1])\cong\pi_{i-1}(E)$.

Products are coherent homotopy products. The smash product $E\wedge F$ is the separately colimit-preserving symmetric monoidal product with unit $\mathbb S$; its associativity, symmetry and unit include higher coherences. A ring spectrum means an associative or commutative algebra object for smash, with the intended type specified. Smash is separately exact: it preserves finite limits and finite colimits in each variable.

To connect this interface with the published sequential-prespectrum definition, let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces, with $\sigma_n:S^1\wedge E_n\to E_{n+1}$ and the sphere coordinate first. Form $X=\operatorname{Sing} E$ with the structure maps of the singular sequential comparison, then form $QX$ as in the Omega replacement comparison. Regard its coherent Omega tower as an object $\mathcal RE$ of $\mathrm{Sp}$ using the imported tower equivalence. For every $i\in\mathbb Z$ there is a natural isomorphism

$$\pi_i^{\mathrm{seq}}(E)=\operatorname*{colim}_{n\gg0}\pi_{n+i}(E_n)\xrightarrow{\sim}\pi_i(\mathcal RE).$$

The left bonding map is suspension with $S^1$ first followed by $\sigma_n$, with the published sphere-coordinate identification. If $E$ is already an Omega-prespectrum, its adjoint structure maps are weak equivalences and the comparison agrees with evaluation at each sufficiently late level. The tower $(QX)_{n+1}$ represents $(\mathcal RE)[1]$, so $\pi_i((\mathcal RE)[1])\cong\pi_{i-1}^{\mathrm{seq}}(E)$. In particular, a map inducing isomorphisms on all published stable groups is sent to an equivalence in $\mathrm{Sp}$.

### Definition references

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison)

[lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison)

### Facts & Assumptions
**Given:** The smallness conventions of the external stable enhancement and, for the comparison, a sequential prespectrum $E$ as specified above.

**Goal:** Justify the operations, comparison and index convention in the definition.

[F1] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies the stable enhancement, coherent tower equivalence, limits, colimits and smash product.

[F2] [lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison) identifies the published sequential groups with those of $\operatorname{Sing} E$, preserving sphere order.

[F3] [lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison) identifies the groups of $\operatorname{Sing} E$ and its Omega replacement.

[F4] [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift) identifies the latter groups with enhanced groups and proves the suspension index.

[F5] [lem-author-e0b0bf18ed2b-exactness-and-products](item-lem-author-e0b0bf18ed2b-exactness-and-products) proves rotation, homotopy products and separate exactness.

### Justification
1.1 The operations and coherences exist by [F1], and the rotation, product and exactness assertions follow from [F5]. The group $\pi_i(E)$ is abelian because [F4] identifies it with a homotopy group in degree at least two. [F1, F4, F5]

1.2 Compose the natural isomorphisms of [F2], [F3] and [F4]. They use the specified sphere-first bonding maps and give the displayed comparison. The tail formula in [F4] gives the suspension sign. If $E$ is already an Omega-prespectrum, its adjoint weak equivalences make each sufficiently late bonding map an isomorphism, so the colimit agrees with evaluation there. [F2, F3, F4, given]

2.1 For a map inducing isomorphisms on all published stable groups, step 1.2 gives isomorphisms on all enhanced groups. At every level of an Omega tower, these detect all homotopy groups, including components by shifting to a double loop space. The Whitehead criterion for spaces then gives a level equivalence, and the tower equivalence detects an equivalence in $\mathrm{Sp}$. This completes the justification. The construction uses functorial $\operatorname{Sing}$ and $Q$ and does not assert a model-category or monoidal equivalence. [F1, F4, step 1.2] ∎

## Enhanced affine perfect equivalence

[Open item](item-lem-author-4f716d60801a-lifted-affine-equivalence) · level 3

### Statement
Assume the Axiom of Choice. For $X=\operatorname{Spec}A$ with $A$ commutative and unital, degreewise associated sheaf induces an exact equivalence $\mathcal D(A)\simeq\mathcal D_{\mathrm{qc}}(X)$ of stable infinity-categories, where the target is the full subcategory with quasi-coherent cohomology. It restricts to an equivalence between the full subcategory represented by bounded finite-projective complexes and the full locally perfect subcategory on $X$.

### Facts & Assumptions
**Given:** $A$, $X$ and Choice as stated.

**Goal:** Prove enhanced equivalence for the actual associated-sheaf functor.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) gives the localizations and their stable structures.

[F2] [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) gives the classical equivalence induced by associated sheaf and the perfection criterion.

[F3] [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) places locally perfect objects in the quasi-coherent-cohomology subcategory. [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) and [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) specify the ring-perfect representatives.

### Proof
1.1 Exact degreewise associated sheaf preserves quasi-isomorphisms and cones, so [F1] gives an exact induced functor $L:\mathcal D(A)\to\mathcal D(X)$. Its cohomology sheaves are associated sheaves of module cohomology, so it lands in $\mathcal D_{\mathrm{qc}}(X)$. This full subcategory is stable: on affine opens, quasi-coherent sheaves are closed under kernels, cokernels and extensions, and the cohomology sequence of a cone therefore remains quasi-coherent. [F1, F2, construct]

2.1 By [F2], the functor induced by this same $L$ on homotopy categories is an equivalence. In a stable infinity-category, the homotopy groups of a mapping space at zero are $\pi_m\operatorname{Map}(M,N)\cong\operatorname{Hom}_{h\mathcal D}(M[m],N)$ for $m\ge0$. Exactness and the homotopy-category equivalence identify these groups for $L$; translation in the grouplike mapping spaces treats all basepoints. Thus every mapping-space map is an equivalence, and essential surjectivity follows from the homotopy-category equivalence. Hence $L$ is an equivalence. [F1, F2, step 1.1]

3.1 By [F2], a module complex is ring-perfect exactly when its image is locally perfect. By [F3], every locally perfect object belongs to the target of step 2.1. The equivalence therefore restricts to the stated full subcategories. [F2, F3, step 2.1] ∎

## Stable supported perfect subcategories and retracts

[Open item](item-lem-author-4f716d60801a-supported-stability) · level 3

### Statement
Assume the Axiom of Choice. For any scheme $X$, let $\operatorname{Perf}(X)$ be the full subcategory of $\mathcal D(X)$ on locally perfect objects. For any subset $T\subseteq X$, let $\operatorname{Perf}_T(X)$ be the full subcategory on objects whose cohomological support is contained in $T$. Both are stable and idempotent complete, with finite limits and colimits inherited from $\mathcal D(X)$. If $T$ is closed, $\operatorname{Perf}_T(X)$ is the full kernel of restriction to $X\setminus T$; for arbitrary $T$ it is the intersection of the full kernels of the stalk functors at points outside $T$.

### Facts & Assumptions
**Given:** A scheme $X$, a subset $T$, and the Axiom of Choice.

**Goal:** Establish stability, the kernel descriptions and idempotent completeness.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the stable idempotent-complete ambient category and its homotopy category.

[F2] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) gives closure of perfect objects under triangles and direct summands.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives exact restriction and stalk functors and their support criteria. [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) establishes the local condition on derived objects.

### Proof
1.1 Zero and shifts are locally represented by bounded finite locally free complexes. The ambient cofiber of a map between perfect objects is perfect by the triangle closure in [F2]; fibers are shifts of cofibers. Thus the full perfect subcategory is stable and inherits finite exact operations. [F1, F2, F3]

2.1 By [F3], the supported subcategory is the intersection of the indicated stalk kernels and, for closed $T$, the kernel of open restriction. Exact functors preserve zero, shifts and cofibers, so these kernels and their intersection are stable. Their finite limits and colimits are computed in the ambient category. [F3, step 1.1]

3.1 A retract $E$ of a perfect object $P$ in the stable homotopy category is a direct summand: the fiber of the retraction supplies a complement. By [F2], $E$ is perfect. If $P$ is supported in $T$, the cohomology stalks of $E$ are retracts of those of $P$, so $E$ is supported in $T$ by [F3]. [F1, F2, F3, step 2.1]

4.1 Every coherent idempotent in either full subcategory splits in the ambient category by [F1], and its retract remains in that subcategory by step 3.1. Fullness retains the splitting maps and coherences. Thus both subcategories are idempotent complete; their ordinary homotopy-category idempotents split by the same retract argument. [F1, step 1.1, step 2.1, step 3.1] ∎



## Cohomology descends to the derived category

[Open item](item-lem-author-b747b28c359f-derived-cohomology) · level 3

### Statement
For each integer $i$, cohomology defines a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$. Here $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms; a quasi-isomorphism is a cochain map inducing an isomorphism on every cohomology group.

### Facts & Assumptions

[F1] The derived category is the localization of the homotopy category of complexes at quasi-isomorphisms and has the corresponding universal property ([math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)).

[F2] Cochain maps induce functorial cohomology maps, and homotopic maps induce equal maps ([lem-author-b747b28c359f-cochain-maps](item-lem-author-b747b28c359f-cochain-maps), [lem-author-b747b28c359f-homotopy-cohomology](item-lem-author-b747b28c359f-homotopy-cohomology)).

### Proof

**Given:** An integer $i$ and the derived category described in the statement.

**Goal:** Construct the stated functor.

1.1 By [F2], taking $i$th cohomology is a functor on the homotopy category. Every quasi-isomorphism becomes an isomorphism under this functor by the definition of quasi-isomorphism. [F2, given]

2.1 The localization universal property in [F1] therefore gives a functor on $D(\mathbb Z)$ whose composite with localization is the functor of step 1.1. Thus cohomology and its maps depend only on the derived-category object and morphism. [F1, step 1.1] ∎

## Homotopy exactness of a spectral fiber sequence

[Open item](item-lem-fiber-sequence-homotopy-exactness) · level 4

### Statement
For a fiber sequence $A\to B\to C$ of spectra there is a natural exact sequence of abelian groups

$$\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots.$$

If $\pi_iC=0$, then $\pi_iA\to\pi_iB$ is surjective; if also $\pi_{i+1}C=0$, it is an isomorphism. Exactness is asserted for these homotopy groups themselves, before taking images in another spectrum.

A fiber sequence here consists of maps $A\to B\to C$, a specified nullhomotopy of their composite, and an identification of $A$ with the homotopy pullback $B\times_C0$. For a spectrum $E$ and an integer $i$, $\pi_iE$ is the group of components of the mapping space from the $i$-fold suspension of the sphere spectrum to $E$. Exactness means that the image of each displayed homomorphism equals the kernel of the next.

### Facts & Assumptions

**Given:** A fiber sequence $A\to B\to C$ of spectra and an integer $i$.

**Goal:** Construct the natural long exact sequence and prove the stated consequences.

[F1] In the stable spectra interface, mapping spaces represent coherent maps and carry limits in the target to homotopy limits of spaces. Fiber sequences extend to cofiber triangles; pushout and pullback squares agree, and suspension is an equivalence with inverse desuspension. The groups are $\pi_iE=\pi_0\operatorname{Map}(\mathbb S[i],E)$, are abelian, and satisfy $\pi_i(E[1])\cong\pi_{i-1}E$ naturally. [def-stable-spectra-interface](item-def-stable-spectra-interface)

### Proof

**Proof technique:** Apply mapping spaces to rotated fiber squares and examine components of their homotopy fibers.

1.1 For any spectrum $T$, apply $\operatorname{Map}(T,-)$ to the defining pullback square for $A$. By its universal property, $\operatorname{Map}(T,A)$ is the homotopy fiber of $\operatorname{Map}(T,B)\to\operatorname{Map}(T,C)$ over the zero map. A point in this fiber is a map $T\to B$ together with a path from its composite with $B\to C$ to zero. Thus a component of $\operatorname{Map}(T,B)$ has zero image in $\pi_0\operatorname{Map}(T,C)$ exactly when it has a representative admitting such a path, equivalently when it lies in the image of $\pi_0\operatorname{Map}(T,A)$. This proves exactness at $\pi_0\operatorname{Map}(T,B)$. [F1, given]

2.1 The defining pullback square is also a pushout, so its cofiber triangle is $A\to B\to C\to A[1]$. The square exhibiting $C$ as the cofiber of $A\to B$ is also a pullback; hence $B\to C\to A[1]$ is a fiber sequence with the induced nullhomotopy. Repeating this rotation and applying inverse suspension produces a bi-infinite sequence of fiber sequences. Applying step 1.1 to each one gives exactness at every term of the resulting sequence of mapping-space component groups. [F1, step 1.1]

3.1 Take $T=\mathbb S[i]$. The first rotated terms are $\pi_iA\to\pi_iB\to\pi_iC\to\pi_i(A[1])$, and the natural suspension identification identifies the last group with $\pi_{i-1}A$. Applying the same identification to the other rotations gives the displayed long sequence. The connecting maps are induced by the cofiber-triangle maps, with these suspension identifications. The construction is natural for maps of fiber sequences, including their specified coherences, because it uses the universal properties of the fiber and cofiber squares. The displayed maps are homomorphisms under the abelian group structures of [F1]. [F1, step 2.1]

4.1 Exactness at $\pi_iB$ makes $\pi_iA\to\pi_iB$ surjective when $\pi_iC=0$. Exactness at $\pi_iA$ makes its kernel the image of $\pi_{i+1}C$, so it is also injective when that group vanishes. Hence it is an isomorphism in the latter case. These deductions concern the groups in the fiber sequence; no preservation of exactness after taking images in a further group is asserted. [step 3.1] ∎

## Perfect complexes on schemes and their support

[Open item](item-def-scheme-perfect-complexes) · level 4

### Definition
Assume the Axiom of Choice and fix suitable universes. Let $X$ be any scheme. Let $\mathcal D(X)$ be the stable derived infinity-category obtained from cochain complexes of Zariski $\mathcal O_X$-modules by inverting quasi-isomorphisms. A quasi-isomorphism induces an isomorphism on every cohomology sheaf. Its homotopy category is the ordinary unbounded derived category $D(\mathcal O_X)$.

An object $E$ is **perfect** if every point has an open neighbourhood on which $E$ is equivalent to a bounded complex of finite locally free modules. Bounded means nonzero in only finitely many degrees; finite locally free means locally a finite direct sum of copies of the structure sheaf. Bounds may vary between neighbourhoods. Write $\operatorname{Perf}(X)$ for the full enhanced subcategory on these objects, retaining all ambient mapping spaces and their composition coherences.

The **support** of $E$ is $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{x\in X:H^n(E)_x\ne0\}$. For any subset $T\subseteq X$, define $\operatorname{Perf}_T(X)$ as the full subcategory of perfect objects with support contained in $T$. If $T$ is closed and $j:X\setminus T\hookrightarrow X$ is the open immersion, this is equivalently the full subcategory on objects with $j^*E\simeq0$; thus these complexes are acyclic on the open complement. For arbitrary $T$, the condition is interpreted stalkwise.

These full subcategories are stable and idempotent complete. Their finite limits and colimits are inherited from $\mathcal D(X)$; their exact triangles are the images in the homotopy category of ambient cofiber sequences $E\to F\to G\to E[1]$. For cochains, $E[1]^n=E^{n+1}$ with differential $-d$.

For a commutative unital ring $A$, degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(\operatorname{Spec}A)$, where $\operatorname{Perf}(A)$ is the full subcategory of $\mathcal D(A)$ on objects represented by bounded complexes of finitely generated projective $A$-modules.

### Justification
[lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) proves that the local condition is independent of representatives and gives quasi-coherent cohomology. [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) proves invariance of support and the open-complement equivalence. [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) proves the stable and idempotent-complete subcategory assertions. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) proves the enhanced affine comparison for the actual associated-sheaf functor, and [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) supplies the ring convention. No global bound or global vector-bundle resolution is imposed.

## Decreasing spectral filtrations and associated graded

[Open item](item-def-decreasing-filtered-spectrum) · level 4

### Definition
Let $E$ be a spectrum. A **decreasing filtration on $E$** consists of spectra $F^jE$, indexed by $j\in\mathbb Z$, and a coherent diagram whose transition maps $F^jE\to F^kE$ are defined whenever $j\geq k$, together with a coherent compatible family of maps $F^jE\to E$. Thus the composite $F^{j+1}E\to F^jE\to E$ is identified with the given map $F^{j+1}E\to E$. Coherent means that the maps, their composition identifications, and all higher compatibility data form a diagram and a cone in the infinity-category of spectra.

The **associated graded spectrum in degree $j$** is $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. For $i\in\mathbb Z$, its **image filtration** on the homotopy group $\pi_iE$ is the family of subgroups

$$F^j\pi_iE=\operatorname{im}(\pi_iF^jE\longrightarrow\pi_iE).$$

The filtration is **exhaustive** if the canonical map $\operatorname*{colim}_{j\to-\infty}F^jE\to E$ is an equivalence. Here the colimit is over the maps from larger indices to smaller indices. It is **complete**, in the tower-vanishing convention used here, if $\operatorname*{lim}_{j\to+\infty}F^jE$ is equivalent to the zero spectrum; the limit is taken over the same transition maps. It is **nonnegative** if every structure map $F^jE\to E$ is an equivalence for $j\leq0$. Completeness imposes no injectivity condition on the maps $\pi_iF^jE\to\pi_iE$.

### Facts & Assumptions
**Given:** A spectrum $E$ and a coherent augmented tower as in the definition.

**Goal:** Justify the graded spectra, image filtration, and the stated conditions.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable infinity-category of spectra, its small limits and colimits, cofibers, zero spectrum, and functorial abelian homotopy groups.

### Justification
1.1 The index category has one object for each integer and one arrow $j\to k$ when $j\geq k$. It is small, so the tower has a limit and a colimit. The compatible maps to $E$ form a cone and induce the displayed canonical colimit map. Each transition map has a cofiber, so every $\operatorname{gr}^jE$ is defined. These constructions are invariant under equivalence of the coherent input diagrams. [F1, given]

2.1 Applying $\pi_i$ gives group homomorphisms. The image of each structure map is therefore a subgroup of $\pi_iE$, and compatibility with $F^{j+1}E\to F^jE$ gives $F^{j+1}\pi_iE\subseteq F^j\pi_iE$. Equivalence to $E$ or to the zero spectrum is a well-defined condition on the specified maps or limit. None of the three conditions includes injectivity of the homomorphisms defining the image filtration; in particular, completeness is the stated condition on the tower limit. [F1, given, step 1.1] ∎

## Homotopy groups of integer spectral shifts

[Open item](item-lem-author-80e2d7bee57f-spectral-integer-shift) · level 4

### Statement
For a spectrum $E$ in the stable spectra interface and integers $i,k$, there is a natural isomorphism $\pi_i(E[k])\cong\pi_{i-k}(E)$, where $[1]$ is suspension and $[-1]$ its inverse.

### Facts & Assumptions
**Given:** $E$ and integers $i,k$.

**Goal:** Compute the homotopy index after shifting.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines suspension and desuspension as inverse shifts and supplies $\pi_i(E[1])\cong\pi_{i-1}(E)$.

### Proof
1.1 For $k\geq0$, iterate the isomorphism in [F1] $k$ times, including the identity when $k=0$. This gives $\pi_i(E[k])\cong\pi_{i-k}(E)$. [F1, given]

2.1 For $k<0$, apply the nonnegative case to $E[k]$ and $-k$: $\pi_{i-k}(E)\cong\pi_i(E[k])$. Inverting this isomorphism gives the stated formula. Every step is natural in $E$. [F1, step 1.1] ∎

## External nonconnective lax symmetric monoidal K-theory

[Open item](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) · level 4

### Statement
Assume AC and fixed universes. Let Cat_perf be the infinity-category of small idempotent-complete stable infinity-categories and exact functors. It is symmetric monoidal with tensor characterized by exact functors in each variable. The nonconnective algebraic K-theory functor 𝕂:Cat_perf→Sp exists and is lax symmetric monoidal. It is the functor denoted IK, not connective K, in BGT: 𝕂(A)≃Map($U_{\mathrm{loc}}$(Sp^ω),$U_{\mathrm{loc}}$(A)). In particular it carries coherent commutative algebra categories to E∞ ring spectra, with the corresponding functorial algebra and module operations induced by its lax structure.

### Source contract
**Given:** Small stable idempotent-complete infinity-categories, exact functors, their exact tensor and AC.

**Goal:** Import the precise nonconnective multiplicative functor used for schemes and supported categories.

[F1] BGT, A universal characterization, §2.2, §3.1, Definition 9.6 and Theorem 9.8, supplies the domain, nonconnective invariant and tensor universal property.

[F2] BGT, Uniqueness of the multiplicative cyclotomic trace, Proposition 5.9 and Corollary 5.10 explicitly include nonconnective IK in the lax symmetric monoidal assertion.

### External input
Import [F1] and [F2], with the recorded limits. The target Sp and smash-product notation are those of [def-stable-spectra-interface](item-def-stable-spectra-interface). This input does not assert that every restriction sequence of schemes is a localization sequence; it does not identify π₀ with a separately defined degree-zero group. Those application/comparison theorems remain separate suppliers.


## Cofiber of a direct-summand inclusion

[Open item](item-lem-author-9f61e4df2141-split-spectral-cofiber) · level 4

### Statement
For spectra $A$ and $B$, the cofiber of the canonical inclusion $A\to A\oplus B$ is naturally equivalent to $B$. Under this equivalence the cofiber map is the projection $A\oplus B\to B$, and the connecting map $B\to A[1]$ is zero. Here $\oplus$ denotes the finite coproduct, which is also a product in the stable category.

### Facts & Assumptions
**Given:** Spectra $A$ and $B$ and their canonical inclusion and projection.

**Goal:** Identify the cofiber sequence and its connecting map.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable category of spectra, zero object, cofibers, and suspension.

### Proof
1.1 The pushout defining $\operatorname{cofib}(A\to A\oplus B)$ is $(A\oplus B)\amalg_A0$. By the universal property of coproducts and the zero object, maps from this pushout to any spectrum are naturally maps from $B$; hence the pushout is naturally $B$, with cofiber map the projection. [F1, given, construct]

2.1 The projection has the canonical section $B\to A\oplus B$. In the cofiber triangle, the composite of consecutive maps is zero, so the connecting map composed with this projection is zero. Composing with the section shows that the connecting map itself is zero. [F1, step 1.1] ∎

## Functorial finite coefficients for derived complexes

[Open item](item-lem-author-b747b28c359f-derived-finite-coefficients) · level 4

### Statement
For $C\in D(\mathbb Z)$ and a positive integer $n$, put $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. This construction and its cohomology groups are functorial in $C$. For every integer $i$ there is a natural short exact sequence
$$0\to H^i(C)/nH^i(C)\to H^i(C/n)\to H^{i+1}(C)[n]\to0,$$
where $H^{i+1}(C)[n]$ is the subgroup annihilated by $n$.

### Facts & Assumptions

[F1] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) identifies derived tensoring with $\mathbb Z/n$ with the cone of multiplication by $n$ and supplies the displayed natural exact sequence for complexes.

[F2] Cohomology is a functor on $D(\mathbb Z)$ ([lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)).

### Proof

**Given:** $C\in D(\mathbb Z)$ and a positive integer $n$.

**Goal:** Establish functoriality and the exact sequence.

1.1 Choose a complex representing $C$. By [F1], its multiplication-by-$n$ cone represents $C\otimes^{\mathbf L}\mathbb Z/n$. Derived tensor product is a functor on the derived category; applying [F2] gives functorial cohomology groups, independent of the representative. [F1, F2]

2.1 Apply the natural exact sequence of [F1] to the representative. Step 1.1 identifies its terms with the displayed derived-category terms and transports naturality to maps in $D(\mathbb Z)$. This proves the assertion. [F1, step 1.1] ∎

## Stage projections, kernels and image groups

[Open item](item-lem-filtered-stage-exact-sequence) · level 5

### Statement
Let $E$ be a spectrum with a decreasing filtration and let $i,j\in\mathbb Z$. There is a natural exact sequence of abelian groups

$$\pi_{i+1}\operatorname{gr}^jE\longrightarrow\pi_iF^{j+1}E\longrightarrow\pi_iF^jE\xrightarrow{p}\pi_i\operatorname{gr}^jE\longrightarrow\pi_{i-1}F^{j+1}E.$$

Write $q:\pi_iF^jE\to\pi_iE$ for the structure homomorphism and $F^j\pi_iE=\operatorname{im}q$. The stage projection $p$ induces a homomorphism $\bar p:F^j\pi_iE\to\pi_i\operatorname{gr}^jE$ satisfying $\bar p(q(x))=p(x)$ precisely when $\ker q\subseteq\ker p$. When it exists, its kernel is $F^{j+1}\pi_iE$. In particular, injectivity of $q$ is sufficient, and then $q$ identifies $\ker p$ with $F^{j+1}\pi_iE$.

A decreasing filtration consists of spectra $F^jE$ with compatible maps $F^{j+1}E\to F^jE\to E$. Its graded spectrum is the cofiber $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. The image filtration is $F^j\pi_iE=\operatorname{im}(\pi_iF^jE\to\pi_iE)$. Exactness means that the image of each map equals the kernel of the next; $\pi_i$ denotes the $i$th homotopy group of a spectrum.

### Facts & Assumptions

**Given:** A spectrum $E$ with a decreasing filtration and integers $i,j$.

**Goal:** Prove the stage exact sequence and determine when its graded projection descends to the image filtration, together with its kernel.

[F1] The filtration supplies the compatible maps $F^{j+1}E\to F^jE\to E$, and $\operatorname{gr}^jE$ is the cofiber of the first map. Its image filtration is defined by the images of the structure maps. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[F2] In spectra, a cofiber sequence is also a fiber sequence, with its coherent nullhomotopy. Homotopy groups are functorial abelian groups. [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F3] A fiber sequence $A\to B\to C$ gives a natural long exact sequence $\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots$. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

### Proof

**Proof technique:** Apply homotopy exactness to the cofiber sequence, then use the elementary criterion for a homomorphism to factor through an image.

1.1 By [F1] and [F2], $F^{j+1}E\to F^jE\to\operatorname{gr}^jE$ is a fiber sequence. Applying [F3] gives the displayed exact sequence, including the indicated connecting maps. Its naturality follows from the naturality in [F3] for maps of these sequences. [F1, F2, F3, given]

2.1 Let $r:\pi_iF^{j+1}E\to\pi_iF^jE$ be the transition homomorphism. Exactness at $\pi_iF^jE$ gives $\ker p=\operatorname{im}r$. Compatibility of the filtration maps gives $q\circ r:\pi_iF^{j+1}E\to\pi_iE$ as the structure homomorphism, and hence $q(\ker p)=F^{j+1}\pi_iE$. [F1, step 1.1]

3.1 If a homomorphism $\bar p$ with $\bar p q=p$ exists on $\operatorname{im}q$, then $q(x)=0$ implies $p(x)=\bar p(0)=0$, so $\ker q\subseteq\ker p$. Conversely, under this inclusion define $\bar p(q(x))=p(x)$. If $q(x)=q(y)$, then $x-y\in\ker q\subseteq\ker p$, so $p(x)=p(y)$; thus the formula is independent of the lift. It defines a homomorphism because $p$ and $q$ are homomorphisms, and it is the unique such homomorphism because $q$ is onto its image. [F2, construct, step 2.1]

4.1 When $\bar p$ exists, an element $q(x)$ is in its kernel exactly when $p(x)=0$. Consequently $\ker\bar p=q(\ker p)=F^{j+1}\pi_iE$ by step 2.1. If $q$ is injective, $\ker q=0\subseteq\ker p$, so the projection exists; moreover $q$ restricts to an isomorphism from $\ker p$ onto $F^{j+1}\pi_iE$. This proves all assertions. [step 2.1, step 3.1] ∎



## Complex shifts and spectral homotopy indices

[Open item](item-lem-eilenberg-maclane-shift-index) · level 5

### Statement
Let $C$ be an unbounded cochain complex of abelian groups. Write $HC$ for the spectrum associated, through the stable spectra interface, to the Eilenberg–Mac Lane Omega spectrum of the chain complex $D_n=C^{-n}$. Then, naturally in $C$ and for all integers $i,j$,

$$\pi_i(HC)\cong H^{-i}(C),\qquad \pi_i(H(C[2j]))\cong H^{2j-i}(C),\qquad \pi_i((HC)[2j])\cong H^{2j-i}(C).$$

Here $C[2j]$ is the cochain shift, whereas $(HC)[2j]$ is spectral suspension by $2j$; the formulas do not identify these two objects by a specified equivalence. Consequently, a given equivalence $\operatorname{gr}^jE\simeq (HC_j)[2j]$ induces $\pi_i\operatorname{gr}^jE\cong H^{2j-i}(C_j)$. The unshifted realization of a support complex $C_{j,T}$ has $\pi_i=H^{-i}(C_{j,T})$; its $2j$-shift has the latter shifted index.

### Facts & Assumptions
**Given:** $C$, $i$, and $j$ as stated; for the graded conclusion, a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$.

**Goal:** Establish the displayed natural group identifications and their graded and support consequences.

[F1] [lem-author-80e2d7bee57f-cochain-to-chain](item-lem-author-80e2d7bee57f-cochain-to-chain) identifies $H_i(D)$ with $H^{-i}(C)$.

[F2] [thm-author-80e2d7bee57f-eilenberg-maclane-input](item-thm-author-80e2d7bee57f-eilenberg-maclane-input) supplies the simplicial Omega spectrum of $D$ and its stable homotopy groups.

[F3] [lem-author-80e2d7bee57f-tower-group-index](item-lem-author-80e2d7bee57f-tower-group-index) compares a coherent Omega tower with its associated spectrum.

[F4] [lem-author-80e2d7bee57f-shift-cohomology](item-lem-author-80e2d7bee57f-shift-cohomology) computes cohomology after cochain shift, and [lem-author-80e2d7bee57f-chain-shift-reindex](item-lem-author-80e2d7bee57f-chain-shift-reindex) identifies the corresponding shifted chain complex.

[F5] [lem-author-80e2d7bee57f-spectral-integer-shift](item-lem-author-80e2d7bee57f-spectral-integer-shift) computes homotopy groups after spectral shift; [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the associated stable category and homotopy-group functors.

### Proof
1.1 Apply [F2] to $D_n=C^{-n}$. Its simplicial Omega spectrum defines a coherent Omega tower of pointed spaces and hence, by the stable spectra interface, an associated spectrum $HC$. By [F3], its enhanced homotopy groups agree with the stable groups in [F2]; by [F1] these are $H^{-i}(C)$. These identifications are natural in maps of complexes. [F1, F2, F3, F5, given]

2.1 Apply step 1.1 to $C[2j]$. By [F4], its associated chain complex is the corresponding chain shift and $H^{-i}(C[2j])\cong H^{2j-i}(C)$. Independently, [F5] gives $\pi_i((HC)[2j])\cong\pi_{i-2j}(HC)\cong H^{2j-i}(C)$. A specified equivalence of the graded object induces an isomorphism on homotopy groups, proving the graded formula. Applying the same two formulas to the support complex proves the final assertion, with its unshifted and shifted spectra kept distinct. [F4, F5, given, step 1.1] ∎

## Multiplicative filtrations and graded products

[Open item](item-def-multiplicative-filtered-spectrum) · level 5

### Definition
A **decreasing filtered spectrum** is a coherent diagram $F$ in spectra indexed by the integers, with a transition map $F^i\to F^k$ whenever $i\geq k$, as in [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum). Write $\operatorname{FilSp}$ for the infinity-category of such diagrams and coherent natural transformations. A **multiplicative filtered spectrum**, written $F\in\operatorname{CAlg}(\operatorname{FilSp})$, is such a diagram equipped with coherently compatible symmetric, associative and unital multiplication data: for every finite ordered list $(i_1,\ldots,i_n)$, including the empty list, there is a map

$$\mu_{i_1,\ldots,i_n}:F^{i_1}\wedge\cdots\wedge F^{i_n}\longrightarrow F^{i_1+\cdots+i_n}.$$

The empty smash product is the sphere spectrum $\mathbb S$, and the empty sum is $0$. The maps are compatible with all transition maps and permutations, with substitution of lists into lists, and with the unit, together with all higher homotopies required for a commutative algebra object. In particular, the one-input operation is the identity up to the specified coherent identification. Thus the notation specifies coherent data; unrelated binary pairings do not suffice.

A multiplicative filtration **on a commutative ring spectrum $E$** additionally has a coherent multiplicative augmentation $F\to\operatorname{const}(E)$: its component maps $F^i\to E$ form an augmentation of the underlying tower, and the $n$-input products commute with these maps and the $n$-fold product of $E$, coherently. A commutative ring spectrum means a commutative algebra object in spectra under smash product; $\operatorname{const}(E)$ is its constant filtered diagram.

Put $\operatorname{gr}^iF=\operatorname{cofib}(F^{i+1}\to F^i)$ and write $q_i:F^i\to\operatorname{gr}^iF$ for the canonical cofiber map. The **associated graded multiplication** is the coherent family

$$\overline\mu_{i,j}:\operatorname{gr}^iF\wedge\operatorname{gr}^jF\longrightarrow\operatorname{gr}^{i+j}F$$

induced by $\mu_{i,j}$. It satisfies $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. These are maps from filtration stages to graded pieces; the definition does not assert that there is a map from $E$ or from an image subgroup of $\pi_*E$ to a graded piece.

### Facts & Assumptions

**Given:** A coherent decreasing filtered spectrum $F$ with the specified commutative multiplication data, and, when a filtration on $E$ is discussed, a commutative ring spectrum $E$ and multiplicative augmentation as above.

**Goal:** Justify the indexing, the associated graded products and their compatibility with the cofiber maps.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the tower, its transition maps and the cofiber definition of the associated graded.

[F2] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the symmetric monoidal stable infinity-category of spectra, the sphere unit, coherent diagrams and cofibers. Smash product preserves colimits separately in each variable.

### Justification

1.1 If $i_r\geq k_r$ for every $r$, then $\sum i_r\geq\sum k_r$, so the indicated target transition map exists. Addition is associative and commutative with identity $0$; consequently the stated compatibility, symmetry and substitution requirements have matching source and target indices. The augmentation is a coherent natural transformation to the constant tower, with additional compatibility with all products. These clauses specify structure and do not assert that every tower admits it. [F1, F2, given]

2.1 For fixed $i,j$, compatibility with transitions identifies the restriction of $\mu_{i,j}$ along $F^{i+1}\wedge F^j\to F^i\wedge F^j$ with a map factoring through $F^{i+j+1}\to F^{i+j}$; the same holds for $F^i\wedge F^{j+1}$. Hence their composites with $q_{i+j}$ have the canonical coherent nullhomotopies coming from the cofiber. Compatibility on their common corner follows from the coherent multiplication and transition data. [F1, F2, given, step 1.1]

3.1 Since smash preserves colimits separately, $\operatorname{gr}^iF\wedge\operatorname{gr}^jF$ is the iterated cofiber of the square with corners $F^{i+1}\wedge F^{j+1}$, $F^{i+1}\wedge F^j$, $F^i\wedge F^{j+1}$ and $F^i\wedge F^j$. The compatible nullhomotopies in step 2.1 therefore induce $\overline\mu_{i,j}$ by the universal property of that iterated cofiber, and its composite with $q_i\wedge q_j$ is $q_{i+j}\mu_{i,j}$. [F2, step 2.1, construct]

4.1 The same construction for any finite list uses the cube formed by replacing each $F^{i_r}$ by $F^{i_r+1}$ in every possible subset of inputs. Its iterated cofiber is the smash of the corresponding graded pieces, and every face with a raised index maps through $F^{\sum i_r+1}$. The coherent permutation, substitution and unit data of $F$ descend through these universal cofiber constructions. Thus the graded products are coherently commutative, associative and unital, with unit $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. Together with step 3.1 this justifies the definition. [F1, F2, given, step 3.1] ∎

## Valuative dimension and degreewise bounded towers

[Open item](item-def-valuative-dimension-and-boundedness) · level 5

### Definition
All rings are commutative with identity. The **Krull dimension** of a nonzero ring is the supremum, in the nonnegative integers together with infinity, of the lengths $n$ of strict chains of prime ideals $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$. The zero ring has dimension $-1$. A **domain** is a nonzero ring without zero divisors. Its fraction field is denoted $\operatorname{Frac}(D)$. A **valuation overring** of a domain $D$ is a subring $V$ of $\operatorname{Frac}(D)$ containing $D$ such that, for every nonzero element $x$ of that field, at least one of $x$ and $x^{-1}$ lies in $V$.

The **valuative dimension** $\dim_v D$ of a domain $D$ is the supremum of the Krull dimensions of its valuation overrings. For a ring $A$, put $\dim_v A=\sup_{\mathfrak p\in\operatorname{Spec}A}\dim_v(A/\mathfrak p)$, with the supremum of the empty set equal to $-1$. For a scheme $X$, put $\dim_v X=\sup_{\operatorname{Spec}A\subseteq X}\dim_v A$, over all affine open subschemes, again taking the empty supremum to be $-1$. The scheme has **finite valuative dimension** if this value is finite.

Let $F^jE$ be a decreasing filtration of a spectrum $E$, and let $S$ be a specified set of integers. It is **degreewise bounded above in filtration on $S$** if, for every $i\in S$, there is an integer $N(i)$ such that $\pi_iF^jE=0$ for all $j\geq N(i)$. If $S=\mathbb Z$, it is simply **degreewise bounded above in filtration**. The bound may depend on $i$. This is a condition on the homotopy groups of the stages; completeness is the separately defined condition that the inverse limit of the tower is the zero spectrum.

### Facts & Assumptions
**Given:** A scheme $X$, or a decreasing filtration $F^\bullet E$ and a set $S\subseteq\mathbb Z$.

**Goal:** Justify the quantities and conditions in the definition.

[F1] A scheme has a set of affine open subschemes and their coordinate rings; a decreasing filtration has stages $F^jE$, transition maps and functorial homotopy groups. The tower-vanishing definition of completeness is the one stated above. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

### Justification
1.1 The fraction field of a domain is itself a valuation overring, so the supremum defining $\dim_v D$ is taken over a nonempty set. Prime quotients are domains. Prime ideals, subrings of a fixed field, affine opens and finite chains of ideals form sets; their suprema exist in $\{-1,0,1,\ldots,\infty\}$ with the stated empty convention. Isomorphisms of rings preserve prime chains, fraction fields and valuation overrings, so the scheme expression does not depend on the chosen presentation of any particular affine open. [F1, given, construct]

2.1 Each $\pi_iF^jE$ is a well-defined group, and the displayed quantifiers give a definite property of the tower and the specified set of degrees. The bound is chosen separately for each degree. Completeness is a condition on the inverse limit, so the two formulations are recorded separately; no uniform bound or injectivity of transition maps is included in either definition. [F1, given, step 1.1] ∎

## Support fibers commute with graded triangles

[Open item](item-lem-filtered-support-exactness) · level 5

### Statement
Let $U\subset X$ be an open immersion, write $T=X\setminus U$, and let $E$ be a presheaf of decreasing filtered spectra. Thus restriction gives a coherently compatible map of augmented towers $F^jE(X)\to F^jE(U)$ and a map $E(X)\to E(U)$. Here a presheaf means a contravariant coherent functor on a category containing this open immersion; no descent property is assumed. Put

$$F^j_T E(X)=\operatorname{fib}(F^jE(X)\to F^jE(U)),\qquad E_T(X)=\operatorname{fib}(E(X)\to E(U)).$$

The compatible maps make $F^\bullet_T E(X)$ a decreasing filtration on $E_T(X)$. For every integer $j$ there is a natural fiber sequence

$$\operatorname{gr}^j_T E(X)\longrightarrow \operatorname{gr}^jE(X)\longrightarrow \operatorname{gr}^jE(U),$$

where $\operatorname{gr}^j_T E(X)=\operatorname{cofib}(F^{j+1}_T E(X)\to F^j_T E(X))$. Consequently there is an exact sequence

$$\cdots\to\pi_{i+1}F^jE(U)\to\pi_iF^j_T E(X)\to\pi_iF^jE(X)\to\pi_iF^jE(U)\to\cdots.$$

In particular, every element in the kernel of the last displayed map lifts to $\pi_iF^j_T E(X)$. More specifically, if $\pi_iF^jE(U)\to\pi_iE(U)$ is injective, then every element of $\operatorname{im}(\pi_iF^jE(X)\to\pi_iE(X))$ whose restriction to $\pi_iE(U)$ is zero is the image of an element of $\pi_iF^j_T E(X)$ under the composite to $\pi_iE(X)$. Without such a condition, an ambient kernel condition alone does not identify a stage-level kernel.

### Facts & Assumptions

**Given:** A coherent presheaf of decreasing filtered spectra, an open immersion $U\subset X$, and integers $i,j$.

**Goal:** Construct the supported filtration and graded fiber sequence, and prove the exactness and lifting assertions with their stated hypotheses.

[F1] In [def-stable-spectra-interface](item-def-stable-spectra-interface), spectra form a stable infinity-category with zero object and coherent finite limits and colimits. A fiber is the pullback over zero, a cofiber is the pushout along zero, and a square is a pullback exactly when it is a pushout.

[F2] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines an augmented decreasing filtration and its associated graded as the cofiber of the transition from stage $j+1$ to stage $j$.

[F3] [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) gives the natural long exact homotopy sequence of any fiber sequence of spectra.

### Proof

**Proof technique:** Apply the fiber construction to the diagram of filtration stages and use stability to compare its cofibers.

1.1 Restriction and the transition maps form a coherent diagram of arrows $F^jE(X)\to F^jE(U)$. Taking the pullback over zero at every stage is functorial, producing transition maps $F^{j+1}_T E(X)\to F^j_T E(X)$ with all composition coherences. The compatible augmentation maps to $E(X)\to E(U)$ likewise induce compatible maps $F^j_T E(X)\to E_T(X)$. This is the asserted augmented decreasing tower. [F1, F2, given]

2.1 For a coherent square of arrows of spectra, taking fibers preserves its finite limits: each fiber is itself a pullback, and the universal property of limits identifies an iterated finite limit with the limit over the corresponding product diagram. Limits of arrow diagrams are computed at their source and target. The zero arrow has zero fiber. In particular, if a square of arrows is pointwise a pushout, stability makes it pointwise a pullback; after taking fibers it is again a pullback and hence a pushout. Thus taking fibers carries pointwise cofiber squares of arrows to cofiber squares of spectra. [F1, step 1.1]

3.1 Apply step 2.1 to the map of arrows from $F^{j+1}E(X)\to F^{j+1}E(U)$ to $F^jE(X)\to F^jE(U)$. Its pointwise cofiber is the arrow $\operatorname{gr}^jE(X)\to\operatorname{gr}^jE(U)$. The cofiber of its map of fibers is therefore naturally equivalent to the fiber of that graded arrow. By the definition of the supported graded spectrum, this is precisely the displayed graded fiber sequence. The construction uses the coherent diagram and universal properties, so it is natural in maps of such filtered presheaves and open pairs. [F1, F2, step 1.1, step 2.1]

4.1 The definition of $F^j_T E(X)$ gives a fiber sequence $F^j_T E(X)\to F^jE(X)\to F^jE(U)$. Applying [F3] yields the displayed long exact sequence. Exactness at $\pi_iF^jE(X)$ says that its restriction kernel is exactly the image of $\pi_iF^j_T E(X)$, proving the first lifting claim. [F1, F3, step 3.1]

5.1 Suppose the stated map on $U$ is injective. Choose a stage representative $a\in\pi_iF^jE(X)$ of an ambient element $x$ whose restriction to $\pi_iE(U)$ is zero. Compatibility of restriction with augmentation says that the image of $a|_U$ in $\pi_iE(U)$ is zero; injectivity therefore gives $a|_U=0$ in $\pi_iF^jE(U)$. Step 4.1 lifts $a$ to $\pi_iF^j_T E(X)$, whose image in $\pi_iE(X)$ is $x$. The argument explicitly uses injectivity to pass from the ambient kernel to the stage kernel. This proves all claims. [F2, step 1.1, step 4.1, given] ∎



## One coherent K-flat family and its supplied perfect fibers

[Open item](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) · level 5

### Statement
Assume AC and use schemes and sheaves in a fixed universe, with larger universes for their categories. There is one coherent diagram

$$\widehat{\operatorname{Perf}}^{\otimes}:\operatorname{Sch}_{qcqs}^{op}\longrightarrow\operatorname{CAlg}(\operatorname{Cat}_{\infty})$$

whose fibers are stable, whose tensor is exact separately in each variable, whose transition functors are exact symmetric monoidal, and whose underlying categories are the perfect full subcategories of K-flat sheaf-complex localizations. Pullbacks are induced by actual degreewise sheaf pullback and products are total tensor. For each X its fiber has an actual exact equivalence to the supplied full sheaf-derived Perf(X), induced by inclusion into all $O_X$-complexes. This identifies the specified fiber enhancement. It does not claim a natural equivalence to a previously chosen diagram of pullbacks on the supplied fibers: that supplier specifies no such diagram. The single common family constructed here supplies the missing coherent diagram.

### Facts & Assumptions
**Given:** AC; all qcqs schemes in a fixed universe; F(X), the ordinary category of K-flat $O_X$-cochain complexes; $W_X$, its quasi-isomorphisms.

**Goal:** Construct the family before identifying its fibers, and verify every family-localization hypothesis.

[F1] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat resolutions, closure under shifts/cones/tensor, and preservation of K-flat objects and their quasi-isomorphisms by degreewise pullback.

[F2] [thm-author-c5bc2838d897-kcoherent-enhanced-localization-input](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) imports Hinich's functorial/family localization, its marked-cocartesian hypotheses and symmetric monoidal universal property; it also imports the nerve/opfibration, chain-interval and stable-Verdier comparisons.

[F3] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) identifies the supplied 𝒟(X) with localization of all sheaf complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines its full perfect fibers but chooses no scheme-indexed pullback or tensor diagram.

[F4] [lem-author-c5bc2838d897-kflat-addendum-localization-equivalence](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) proves the actual inclusion-induced K-flat fiber equivalence, using the precise Verdier localization criterion and explicit fullness/faithfulness.

[F5] [lem-author-c5bc2838d897-monoidal-transport-product-family](item-lem-author-c5bc2838d897-monoidal-transport-product-family) converts an actual product-base cocartesian family with pointwise Segal/unit equivalences into coherent strong symmetric monoidal transports by straightening and currying.

### Proof
1.1 Construct an ordinary Grothendieck opfibration E→B₀, where B₀=Sch_qcqs^op×Fin_*. Its objects over (X,⟨n⟩) are n-tuples of objects of F(X). For a base map (Y,⟨n⟩)→(X,⟨m⟩) given by f:X→Y and α:⟨n⟩→⟨m⟩, transport sends ($P_i$) to (⊗_{α(i)=j}f*$P_i$)_{1≤j≤m}, with the empty tensor $O_X$. A morphism over this base map is a tuple of chain maps from that transported tuple to the target tuple. Compose using composition of chain maps, canonical pullback-composition isomorphisms and the signed tensor associativity/symmetry. These comparison isomorphisms form an ordinary pseudofunctor: inverse-image composition and relative tensor associativity follow from their universal properties, and all paths give the same maps on elementary local tensors; the Koszul sign rule supplies the same permutation sign. Hence their unit, pentagon, symmetry and interchange equations hold before localization. The Grothendieck construction therefore is an ordinary category with associative composition, and the displayed identity maps from each transported tuple are its opcartesian arrows. By [F2], N(E)→N(B₀) is a cocartesian fibration. This encodes the entire scheme/tensor diagram, rather than isolated functors. [F1, F2, construct]

2.1 Mark only equivalences in the base. In each fiber mark componentwise quasi-isomorphisms, and in E mark a map over a base equivalence exactly when its vertical component after an opcartesian lift is componentwise a quasi-isomorphism. To justify the saturation requirement, first view the same actual transport formulas as a pseudofunctor of pairs (F(X)^n,$W_X^n$). The fiber markings are saturated, since quasi-isomorphisms are the inverse images of isomorphisms under cohomology; every transport preserves them. The Grothendieck construction for the wide subcategories $W_X^n$ and its inclusion into E give a natural diagram of these saturated pairs, hence a functor B→Cat_∞^+. Every base equivalence is carried to an equivalence of pairs. Hinich Lemma 2.1.6, with Remark 2.1.2, therefore equips E→B with the saturated total marking just described. This invokes the marked-family classification, rather than trying to infer saturation from two-out-of-three alone. The four hypotheses of Hinich Definition 2.1.1 now hold. The underlying map is cocartesian by step 1.1; lifts of marked base edges have identity vertical components; every transport preserves markings because f* preserves K-flat quasi-isomorphisms and tensoring K-flat complexes preserves quasi-isomorphisms; and transports over base equivalences are relative equivalences, hence equivalences after localization. For active Fin_* maps the same tensor argument verifies the additional hypothesis of Hinich Proposition 3.2.2; inert transports merely select coordinates. No morphism over a noninvertible scheme or Fin_* map is marked. [F1, F2, step 1.1]

3.1 Apply Hinich Proposition 2.1.4 to the ONE marked total fibration over Sch_qcqs^op×Fin_*. Only base equivalences are inverted, so, after the equivalent cocartesian presentation of Hinich Definition 2.1.3 if needed, its localization q remains cocartesian over B×N(Fin_*), $B=N(\mathrm{Sch}_{\mathrm{qcqs}}^{\mathrm{op}})$. The theorem's proof §2.2.2–2.2.6 identifies it with the unstraightening of L∘F⁺; the localization map is a natural map of diagrams, hence preserves transports. On restriction to each X, Hinich Proposition 3.2.2 applies because active tensor transports preserve the markings as checked in step 2.1. Thus its canonical inert Segal maps are equivalences and the zeroth fiber is terminal. Apply [lem-author-c5bc2838d897-monoidal-transport-product-family](item-lem-author-c5bc2838d897-monoidal-transport-product-family): straightening over the PRODUCT and currying yield B→Fun(N(Fin_*),Cat∞), and its natural transformations unstraighten to maps preserving every Fin_*-cocartesian arrow. Therefore all scheme transports are strong symmetric monoidal, including their unit/tensor comparison equivalences and all higher compositions. This conclusion is derived from the single total family, not from separately given pointwise functors. [F2, F5, step 1.1, step 2.1]

4.1 Put $C_X$=L(F(X),$W_X$). Actual inclusion of K-flat into all sheaf complexes induces $I_X$:$C_X$→𝒟(X). The focused lemma [lem-author-c5bc2838d897-kflat-addendum-localization-equivalence](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) proves that this is an exact equivalence. Its proof verifies all hypotheses of Stacks Lemma 13.5.8 (0GSL), explicitly proves fullness and faithfulness by K-flat replacements of roofs and their common refinements, and upgrades the same exact inclusion-induced functor by stable mapping spaces. It assumes no K-projectivity. This supplies exactly the fiber comparison with the supplier's specified localization; the coherent scheme/tensor diagram remains the one constructed in steps 1.1 through 3.1. [F4, step 3.1]

5.1 Inside each $C_X$ take the full subcategory on objects whose $I_X$-image is locally a bounded finite locally free complex. Tensor and every transport preserve this condition: locally the tensor of two such representatives is bounded finite locally free, and pullback of such a representative is again so, computed without resolving further because bounded flat complexes are K-flat. These conditions are invariant under equivalence and preserved by shifts and cones. Hence they define a full cocartesian subfamily of the already constructed family, with exact transports and tensor exact in each variable. Its straightening is the asserted diagram widehat Perf^⊗. Each $I_X$ restricts to the actual exact equivalence widehat Perf(X)≃Perf(X). This common model is an enhancement realization of precisely the supplied fibers, and supplies their previously unspecified functorial tensor/pullback interface. No independent scheme-indexed diagram on those fibers has been invented or compared. [F1, F2, F3, step 3.1, step 4.1] ∎

## External qcqs classical perfect generator

[Open item](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input) · level 5

### Statement
Assume AC and let X be a quasi-compact quasi-separated scheme. In the ordinary perfect subcategory of D($O_X$) there is a perfect object P such that every perfect object is obtained from P by finitely iterating integer shifts, finite sums, cones and direct summands. This is the classical generator statement of Stacks Remark 36.17.2; its proof combines the perfect generator of $D_{\mathrm{QCoh}}$ with compact=perfect and the compact-generation proposition.

### Source contract
**Given:** qcqs X and AC; perfection is the supplied sheaf-derived local condition [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes).

**Goal:** Import one substantial scheme theorem needed only to enumerate perfect objects.

[F1] Stacks Remark 36.17.2, Proposition 36.17.1, Theorem 36.15.3 and Proposition 13.37.6 give the stated classical generator.

### External input
Import [F1]. The proof is not reconstructed. Its use below establishes essential smallness through finite constructions and small Hom sets; it supplies no coherent product, enhanced equivalence, or scheme localization theorem.


## Affine perfect triangle classes and bundle Euler classes

[Open item](item-lem-author-3a003d7b5208-affine-triangle-euler) · level 5


### Statement
Assume AC and suitable universes. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. The triangle Grothendieck group of the homotopy category of $\operatorname{Perf}(X)$ is isomorphic to the vector-bundle Grothendieck group of $X$. Under this isomorphism, the class of the associated sheaf complex of a bounded finite-projective complex $P$ maps to $\sum_n(-1)^n[\widetilde{P^n}]$, and the class of a degree-zero bundle complex $E[0]$ maps to $[E]$.

Here $\operatorname{Perf}(X)$ is the full stable derived subcategory of locally perfect complexes. The triangle group uses one additive relation for each distinguished triangle; the vector-bundle group uses short exact sequence relations. A bounded complex has only finitely many nonzero terms. No Noetherian or regularity hypothesis is imposed.

### Statement references

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[lem-author-3a003d7b5208-affine-bundle-split-group](item-lem-author-3a003d7b5208-affine-bundle-split-group)

### Facts & Assumptions
**Given:** AC, suitable universes, $A$ and $X$ as stated. AC carries the supplied enhanced affine and bundle comparisons in [F1] and [F3]; the group-presentation argument makes no additional choice.

**Goal:** Compose the affine derived equivalence with the Euler and bundle comparisons.

[F1] Degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(X)$; the former consists of objects represented by bounded finite-projective $A$-complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[F2] Degree-zero inclusion induces an isomorphism from the split group of finite projective $A$-modules to the triangle group of $\operatorname{Perf}(A)$. Its inverse sends $P$ to $\sum_n(-1)^n[P^n]$. This holds for every unital associative ring. [math:thm-perfect-complex-k-zero-agrees-with-projective-k-zero](https://alphabetamath.cc/item/thm-perfect-complex-k-zero-agrees-with-projective-k-zero)

[F3] Associated sheaf identifies the finite-projective split group with the vector-bundle group. [lem-author-3a003d7b5208-affine-bundle-split-group](item-lem-author-3a003d7b5208-affine-bundle-split-group)

[F4] An exact equivalence induces an isomorphism on triangle groups. [lem-author-3a003d7b5208-exact-equivalence-k-zero](item-lem-author-3a003d7b5208-exact-equivalence-k-zero)

### Proof
1.1 By [F1] and [F4], associated sheaf induces an isomorphism of the triangle groups of $\operatorname{Perf}(A)$ and $\operatorname{Perf}(X)$. Invert it, compose with the inverse of the degree-zero isomorphism in [F2], and then with [F3]. This constructs the asserted isomorphism. [F1, F2, F3, F4, construct]

2.1 The inverse affine equivalence takes the associated sheaf complex of $P$ to $P$. Its Euler class under [F2] is $\sum_n(-1)^n[P^n]$, and [F3] sends each term to $[\widetilde{P^n}]$, proving the formula. [F1, F2, F3, step 1.1]

3.1 Every bundle $E$ is isomorphic to $\widetilde P$ for a finite projective $P$ by [F3]. Apply step 2.1 with $P$ concentrated in degree zero: $[E[0]]$ maps to $[E]$. This is independent of the representative because step 1.1 is a well-defined group isomorphism. [F3, step 1.1, step 2.1] ∎

### Source notes
The current online Stacks tag 0AFY, Lemma 15.121.1, has a missing exponent in the first sum of its acyclic-complex display: the intended term is $(-1)^n[M^n]$. For the identity complex $\mathbb Z\to\mathbb Z$ in degrees zero and one, the literal unweighted negative sum is $-2[\mathbb Z]$ rather than zero. This localized source typo does not refute Lemma 15.121.2 or [F2], whose supplied local proof uses the alternating Euler class. This affine result does not assert global vector-bundle representation of perfect classes on arbitrary qcqs schemes.


## Graded pieces of a direct-sum tail tower

[Open item](item-lem-author-9f61e4df2141-tail-splitting) · level 5

### Statement
Let $(G_j)_{j\geq0}$ be spectra and put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, with $T^q=T^0$ for $q\leq0$. Give these spectra the canonical tail inclusions and augmentation to $T^0$. Then $\operatorname{gr}^qT\simeq G_q$ for $q\geq0$, the connecting map $G_q\to T^{q+1}[1]$ is zero, and $\operatorname{gr}^qT\simeq0$ for $q<0$. The identifications are natural in maps of families $(G_j)$.

### Facts & Assumptions
**Given:** The family of spectra and its augmented tail tower.

**Goal:** Compute its graded pieces and connecting maps.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines the associated graded as a cofiber.

[F2] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) computes the cofiber and connecting map of a summand inclusion.

### Proof
1.1 For $q\geq0$, the universal property of coproducts gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$ carrying the transition map to the first-summand inclusion. Applying [F2] gives the stated graded piece and zero connecting map. [F1, F2, given, construct]

2.1 For $q<0$ the transition map is the identity of $T^0$, whose cofiber is zero. The coproduct decompositions, inclusions and projections commute with maps of families, so the identifications are natural. [F1, given, step 1.1] ∎

## Images of filtration stages

[Open item](item-lem-author-98a750efd0cc-filtration-image) · level 5


### Statement
Let $F$ be a coherently augmented decreasing filtration on a spectrum $E$. For integers $i,j$, the image of $\pi_iF^j\to\pi_iE$ is a subgroup of $\pi_iE$, and the same homomorphism, regarded as a map to this image, is surjective.

### Statement references

[def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

### Facts & Assumptions
**Given:** A spectrum $E$, its augmented decreasing filtration $F$, and integers $i,j$.

**Goal:** Establish the subgroup and surjectivity assertions.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the structure map $F^j\to E$ and the induced homomorphism of abelian homotopy groups.

### Proof
1.1 Write $u$ for the homomorphism in [F1]. Its image consists precisely of the elements $u(x)$ with $x\in\pi_iF^j$. It contains zero and is closed under sums and negatives because $u$ is a homomorphism. [F1, given]

2.1 Every element of this image has a preimage by its definition. Thus $u$, with codomain restricted to its image, is surjective. This proves both assertions. [step 1.1] ∎


## External extension and morphism input for perfect complexes

[Open item](item-thm-author-50b5133c29cc-klocal-tt-extension-input) · level 5

### Statement
Let $X$ be qcqs and $j:U\hookrightarrow X$ a quasi-compact open. In the ordinary sheaf-derived perfect categories:

(a) For $E,F\in D_{\mathrm{perf}}(\mathcal O_X)$ and $b:j^*E\to j^*F$, there exist a perfect $Q$ and maps $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b\,j^*c=j^*a$.

(b) If $a,b:E\to F$ have the same restriction, there are a perfect $Q$ and $c:Q\to E$ with $j^*c$ invertible and $ac=bc$.

(c) A perfect object on $U$ extends to $X$ whenever its Euler class lies in the image of restriction on the classical perfect Euler groups. In particular $F\oplus F[1]$ extends for every perfect $F$ on $U$.

The Euler group here is the classical perfect-complex Grothendieck group, with $[B]=[A]+[C]$ for triangles and $[F[1]]=-[F]$. This is a source-side extension criterion, not an identification with $\pi_0$ of the K spectrum defined in this run. Verdier quotient by a full thick triangulated subcategory is localization at maps with cone in it.

### Source contract
**Given:** qcqs $X$, quasi-compact open $U$, and ordinary derived categories of sheaf complexes with locally bounded finite locally free representatives.

**Goal:** Import exactly the established extension/roof inputs needed before applying enhanced localization.

[F1] TT Propositions 5.2.2(a), 5.2.3(a), 5.2.4(a) supply (a)–(c), under the hypotheses of 5.1 with its auxiliary $Z=X$; 5.6.3 removes the temporary ample-family/noetherian hypotheses in their proof.

[F2] TT 1.5.6–1.5.7 give the Euler relations, so $[F\oplus F[1]]=0$ is in the image of any restriction map. Stacks Lemma 13.6.6 and Definition 13.6.7 give the quotient convention.

### External input
Import [F1] and [F2] with the exact references and reading limits in the metadata. Only their perfect-complex and ordinary morphism assertions are used. No TT nonconnective spectrum, model comparison, or claim of a reconstructed extension theorem is included.


## Spectral sequence of a tower

[Open item](item-prop-tower-exact-couple-interface) · level 6

### Statement
Let $E$ be a spectrum equipped with spectra $F^jE$ and compatible maps $F^{j+1}E\to F^jE\to E$, for all integers $j$. Put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$ and $F^j\pi_nE=\operatorname{im}(\pi_nF^jE\to\pi_nE)$. The stage sequences form an exact couple and yield a cohomological spectral sequence, indexed from page 2, with

$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}E,\qquad d_s:E_s^{a,b}\longrightarrow E_s^{a+s,b-s+1}\quad(s\ge2).$$

If specified equivalences $\operatorname{gr}^jE\simeq(HC_j)[2j]$ are given for cochain complexes $C_j$, then naturally

$$E_2^{a,b}\cong H^{a-b}(C_{-b}).$$

Suppose additionally that, for each integer $n$, there are integers $L_n\le U_n$ such that $\pi_nF^jE\to\pi_nE$ is an isomorphism for $j\le L_n$ and $\pi_nF^jE=0$ for $j\ge U_n$. Then every bidegree stabilizes after finitely many pages and there are natural isomorphisms

$$E_\infty^{a,b}\cong F^{-b}\pi_{-a-b}E/F^{-b+1}\pi_{-a-b}E.$$

Thus the spectral sequence converges to $\pi_{-a-b}E$ with its finite image filtration. Here $E_\infty$ denotes the eventual stable page in each bidegree; convergence includes the displayed associated-graded identification, not a canonical splitting of the filtration. The stated boundedness is a sufficient hypothesis; no convergence is asserted from the graded identifications alone.

### Facts & Assumptions

**Given:** The tower and compatible maps in the statement; for the indexed cohomology formula, the specified graded equivalences; for convergence, the stated degreewise bounds.

**Goal:** Construct the spectral sequence, calculate its indices, and prove its bounded convergence assertion.

[F1] For every $j,n$, [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the natural long exact sequence containing $\pi_nF^{j+1}E\to\pi_nF^jE\to\pi_n\operatorname{gr}^jE\to\pi_{n-1}F^{j+1}E$.

[F2] [math:def-exact-couple](https://alphabetamath.cc/item/def-exact-couple) specifies the initial homological exact-couple degrees. [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) supplies the derived couple, its exactness, and its differential and homology construction. [math:def-cohomological-spectral-sequence](https://alphabetamath.cc/item/def-cohomological-spectral-sequence) specifies the cohomological differential degrees and page-to-page homology requirement.

[F3] Under a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$, [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)$.

### Proof

1.1 Set $D^1_{p,q}=\pi_{p+q}F^{-p}E$ and $E^1_{p,q}=\pi_{p+q}\operatorname{gr}^{-p}E$. Let $i$ be induced by $F^{-p}E\to F^{-p-1}E$, let $j$ be the stage projection, and let $k$ be the connecting homomorphism. Their respective degrees are $(1,-1)$, $(0,0)$ and $(-1,0)$. Exactness at all three vertices follows from the long exact sequences in [F1], so these maps form an initial exact couple. [F1, F2, construct]

2.1 Derive the couple repeatedly. At homological page $r\ge1$, its differential $d_r=jk$ has degree $(-r,r-1)$, squares to zero, and its homology is the next page. Define $E_s^{a,b}=E^{s-1}_{b,-a-2b}$ for $s\ge2$. A homological differential with $r=s-1$ changes $(b,-a-2b)$ to $(b-r,-a-2b+r-1)$, corresponding to $(a+s,b-s+1)$. Hence these reindexed pages satisfy the cohomological spectral-sequence convention. At $s=2$, their total homotopy degree is $b+(-a-2b)=-a-b$ and their filtration index is $-b$, proving the first displayed formula. [F2, step 1.1, algebra]

3.1 With $j=-b$ and $n=-a-b$, [F3] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)=H^{a-b}(C_{-b})$. This proves the second displayed formula and its naturality for maps preserving the given graded equivalences. [F3, step 2.1, algebra]

4.1 Fix $j,n$. Iterating the derived-couple formulas shows the following two elementary lifting facts. A class on the initial graded term that survives through arbitrarily many differentials has connecting image in $\pi_{n-1}F^{j+1}E$ admitting lifts from arbitrarily high stages; the indeterminacies in choosing lifts are precisely the boundaries already factored out. Conversely, if its connecting image is zero, exactness writes it as the stage projection of an element of $\pi_nF^jE$, and that projected class survives every page. The first assertion follows inductively because passing to the next derived couple replaces the $D$-term by the image of the next transition map; the converse follows because a stage projection has zero connecting image and the same is true after each derivation. [F1, F2, step 1.1, step 3.1]

5.1 The high-stage bound in degree $n-1$ makes the liftable subgroup in step 4.1 zero after finitely many stages. Thus every eventual class is represented by the stage projection of some $x\in\pi_nF^jE$. The derived-couple formulas also give the boundary test: such a projection is eventually zero exactly when the image of $x$ in a sufficiently low stage lies in the image there of $\pi_nF^{j+1}E$. Indeed, a boundary coming from a lower graded stage has connecting image in $\pi_nF^jE$ whose image in that lower stage vanishes; conversely, if $x$ differs by an element from $F^{j+1}$ by an element killed at a lower stage, repeated exactness lifts that difference through the intervening connecting maps and expresses its projection as an iterated boundary. These implications use only finitely many stages. [F1, F2, step 4.1]

6.1 Choose the low stage at or below $L_n$. Its map to $\pi_nE$ is an isomorphism, so the boundary test says precisely that the image of $x$ in $\pi_nE$ belongs to $F^{j+1}\pi_nE$. Consequently the projection induces an isomorphism from $F^j\pi_nE/F^{j+1}\pi_nE$ to the eventual graded term. The high- and low-stage bounds also bound the possible sources and targets of differentials at the fixed bidegree, so this eventual term is reached after finitely many pages. Finally $F^j\pi_nE=\pi_nE$ for $j\le L_n$ and $F^j\pi_nE=0$ for $j\ge U_n$; hence the image filtration is finite and the stated convergence follows. Substitution of $j=-b$ and $n=-a-b$ gives the displayed indexing. [given, step 2.1, step 5.1] ∎



## Products and projections on image filtrations

[Open item](item-lem-image-filtration-products) · level 6

### Statement
Let $F$ be a multiplicative decreasing filtration on a commutative ring spectrum $E$. For integers $i,j,a,b$, write
$$q_{i,a}:\pi_aF^i\longrightarrow\pi_aE,\qquad p_{i,a}:\pi_aF^i\longrightarrow\pi_a\operatorname{gr}^iF$$
for the maps induced by the augmentation and the cofiber projection, respectively, and set $F^i\pi_aE=\operatorname{im}q_{i,a}$. Then
$$F^i\pi_aE\cdot F^j\pi_bE\subseteq F^{i+j}\pi_{a+b}E.$$
For any stage lifts $x\in\pi_aF^i$ and $y\in\pi_bF^j$, their stage product $xy\in\pi_{a+b}F^{i+j}$ satisfies
$$p_{i+j,a+b}(xy)=p_{i,a}(x)\,p_{j,b}(y).$$
If, for the three pairs $(i,a)$, $(j,b)$ and $(i+j,a+b)$, one has $\ker q_{r,n}\subseteq\ker p_{r,n}$, the corresponding maps $p_{r,n}$ descend uniquely to homomorphisms $\bar p_{r,n}:F^r\pi_nE\to\pi_n\operatorname{gr}^rF$, and
$$\bar p_{i+j,a+b}(uv)=\bar p_{i,a}(u)\,\bar p_{j,b}(v)$$
for $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. Injectivity of each relevant $q_{r,n}$ is sufficient for these descent conditions; it is not needed for the containment or the formula for chosen stage lifts.

A decreasing filtration here is a coherent tower of spectra $F^r$ with maps $F^{r+1}\to F^r$ and compatible maps $F^r\to E$. Its graded piece is the cofiber $\operatorname{gr}^rF=\operatorname{cofib}(F^{r+1}\to F^r)$. Multiplicativity supplies compatible maps $F^i\wedge F^j\to F^{i+j}$ and $\operatorname{gr}^iF\wedge\operatorname{gr}^jF\to\operatorname{gr}^{i+j}$, and makes the augmentation compatible with multiplication on $E$. Products in homotopy groups are those induced by these maps and the canonical smash pairing of sphere spectra. An image filtration consists of the subgroups $F^r\pi_nE$ just defined; a stage lift of an element of one of these subgroups is a preimage under $q_{r,n}$.

### Facts & Assumptions

**Given:** A multiplicative decreasing filtration $F$ on a commutative ring spectrum $E$ and integers $i,j,a,b$.

**Goal:** Prove the product containment and the projection identity for stage lifts, and prove the stated conditional identity on image groups.

[F1] The stage multiplication is compatible with the augmentation to $E$, and the graded multiplication satisfies $\overline\mu_{i,j}(p_i\wedge p_j)\simeq p_{i+j}\mu_{i,j}$ for the cofiber maps $p_r:F^r\to\operatorname{gr}^rF$. These maps induce the corresponding pairings on homotopy groups. [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[F2] For each $(r,n)$, the stage projection $p_{r,n}$ factors uniquely through the image of $q_{r,n}$ exactly when $\ker q_{r,n}\subseteq\ker p_{r,n}$. In particular, injectivity of $q_{r,n}$ implies this condition. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)

### Proof

**Proof technique:** Apply the augmentation and cofiber compatibilities to representatives, then use the image-factorization criterion.

1.1 Let $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. By the definition of image, choose $x\in\pi_aF^i$ and $y\in\pi_bF^j$ with $q_{i,a}(x)=u$ and $q_{j,b}(y)=v$. The stage multiplication gives $xy\in\pi_{a+b}F^{i+j}$. Compatibility of multiplication with the augmentation gives $q_{i+j,a+b}(xy)=uv$. Hence $uv$ is in $F^{i+j}\pi_{a+b}E$, proving the containment. [F1, given, construct]

1.2 For any such stage classes $x,y$, the cofiber compatibility in [F1], applied to their representing sphere maps, gives $p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)$. This equality concerns the chosen stage classes and does not require their images in $\pi_*E$ to determine them uniquely. [F1, given]

2.1 Assume the three kernel inclusions in the statement. By [F2], the three stage projections factor uniquely through their respective image groups. For the lifts chosen in step 1.1, the product $xy$ is a stage lift of $uv$. Therefore
$$\bar p_{i+j,a+b}(uv)=p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)=\bar p_{i,a}(u)\bar p_{j,b}(v).$$
The factorization ensures that the displayed values are independent of the chosen lifts. [F2, step 1.1, step 1.2, assume-hyp]

3.1 An injective $q_{r,n}$ has zero kernel and thus satisfies the corresponding inclusion. Steps 1.1 through 2.1 prove all assertions, with no injectivity hypothesis used in the first two steps. [F2, step 1.1, step 1.2, step 2.1] ∎

## Dimension decreases under quotients

[Open item](item-lem-author-14463ef2f4e5-quotient-dimension) · level 6

### Statement
For a commutative ring $A$ and ideal $I$, $\dim(A/I)\leq\dim A$, using $-1$ for the zero ring.

### Facts & Assumptions
**Given:** A commutative ring $A$ and an ideal $I$.

**Goal:** Compare the Krull dimensions of $A/I$ and $A$.

[F1] Krull dimension is the supremum of the lengths of strict chains of prime ideals. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

### Proof
1.1 The inverse image of a prime ideal under the quotient map $A\to A/I$ is prime. Distinct ideals of $A/I$ have distinct inverse images, since the map is surjective. Thus every strict prime chain in $A/I$ pulls back to a strict prime chain of the same length in $A$. [given, algebra]

2.1 Taking suprema gives the inequality. If $A/I$ is zero, its dimension is $-1$, and the same inequality holds by the convention in [F1]. [F1, step 1.1] ∎

## A valuation overring has a center

[Open item](item-lem-author-14463ef2f4e5-valuation-center) · level 6

### Statement
Let $D$ be a domain and $V$ a valuation overring in $K=\operatorname{Frac}(D)$. Then $V$ is local, meaning it has a unique maximal ideal $\mathfrak m$, and if $\mathfrak q=\mathfrak m\cap D$, the inclusion $D\subseteq V$ extends to a local inclusion $D_{\mathfrak q}\subseteq V$. Here local means that the inverse image of the maximal ideal of $V$ is the maximal ideal of $D_{\mathfrak q}$.

### Facts & Assumptions
**Given:** A domain $D$ and a valuation overring $V$ in its fraction field.

**Goal:** Construct its center $\mathfrak q$ and the stated local inclusion.

[F1] For each nonzero $x\in K$, either $x$ or $x^{-1}$ lies in $V$. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

### Proof
1.1 Let $\mathfrak m$ be the set of nonunits of $V$. If $a$ is a nonunit and $v\in V$, then $va$ cannot be a unit, since an inverse of $va$ would give an inverse of $a$. If nonunits $a,b$ have nonzero sum, [F1] gives either $a/b\in V$ or $b/a\in V$ when both are nonzero; in the first case $a+b=b(1+a/b)$ is a nonunit, and similarly in the second. The zero cases are immediate. Thus $\mathfrak m$ is a proper ideal, and every element outside it is a unit. It is consequently the unique maximal ideal; it is prime because a product that is a unit has unit factors. [F1, given, algebra]

2.1 Its inverse image $\mathfrak q$ in $D$ is prime. Every element of $D\setminus\mathfrak q$ maps to a unit of $V$, so the inclusion extends by fractions to $D_{\mathfrak q}\to V$. It is injective because both rings embed in $K$. A fraction $a/s$ with $s\notin\mathfrak q$ maps into $\mathfrak m$ exactly when $a\in\mathfrak q$, proving locality. [given, step 1.1, algebra] ∎

## Noetherian domains have equal Krull and valuative dimensions

[Open item](item-thm-author-14463ef2f4e5-noetherian-valuative-input) · level 6

### Statement
For a noetherian integral domain $D$, $\dim_v D=\dim D$, allowing infinity. Noetherian means that every ideal is finitely generated; the dimensions and valuation overrings are as defined in this development.

### External input
This is the classical noetherian-domain comparison recorded in the cited introduction. It is used as an external mathematical input; no local reconstruction of its proof is claimed.

## Essential smallness of perfect and supported categories

[Open item](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) · level 6

### Statement
Assume AC. For every quasi-compact quasi-separated scheme X, the supplied Perf(X) is essentially small as a stable infinity-category. Every full supported subcategory Perf_T(X), for any subset T⊆X, is essentially small as well. Their already supplied idempotent completeness and stability therefore place chosen small equivalent models in Cat_perf, the infinity-category of small idempotent-complete stable infinity-categories and exact functors.

### Facts & Assumptions
**Given:** qcqs X, subset T, AC and fixed universes.

**Goal:** Justify the small domain needed for nonconnective K-theory.

[F1] [thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input) gives one perfect classical generator P of the ordinary perfect derived category.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) supplies the exact full stable idempotent-complete enhancements. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) makes ambient mapping spaces small relative to the chosen universe.

### Proof
1.1 Begin with P and all its integer shifts. Given a set of object representatives, form representatives of their finite sums and of cones of all maps between them; there is a set of these maps because ambient Hom sets are small. Also add images of their idempotent endomorphisms. There is a set of such idempotents and a splitting image is unique up to isomorphism. Iterating these finite constructions countably many times still gives a set of isomorphism classes. [F1, F2, construct]

2.1 By the classical-generator assertion [F1], every ordinary perfect object is isomorphic to one constructed in step 1.1. An isomorphism in the homotopy category is an equivalence of objects in the enhanced category, so the same set represents all objects of Perf(X) up to enhanced equivalence. Its full enhanced subcategory has small mapping spaces by [F2], hence is a small equivalent model. This argument uses the classical generator only for object enumeration and makes no inference of enhanced coherence from a triangulated equivalence. [F1, F2, step 1.1]

3.1 Support is invariant under equivalence by [F2], so the subset of these representatives satisfying the support condition represents Perf_T(X). This full subcategory is also essentially small. Stability and idempotent completeness are already supplied by [F2], and are preserved by equivalence to a small model. This proves the Statement. [F2, step 2.1] ∎


## Coherent derived tensor and pullback on perfect complexes

[Open item](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) · level 6


### Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. On the common-family realization $\widehat{\operatorname{Perf}}(X)$ of the supplied perfect fiber, derived tensor is a coherent symmetric monoidal product with unit $\mathcal O_X$, exact separately in each variable. Every morphism $f:X\to Y$ between qcqs schemes induces an exact symmetric monoidal pullback $Lf^*:\operatorname{Perf}(Y)\to\operatorname{Perf}(X)$, coherently compatible with composition. For every homomorphism $A\to B$ of commutative unital rings, its affine specialization on bounded finite-projective representatives is derived extension of scalars. No flatness or finite Tor-dimension assumption on $f$ is needed.

### Facts & Assumptions
**Given:** Qcqs schemes $X,Y$ in the fixed universe, any morphism $f:X\to Y$, and AC.

**Goal:** Restrict actual enhanced operations to the supplied perfect subcategories.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs one coherent scheme/tensor family of K-flat localizations over qcqs schemes and all their morphisms, with its full perfect subfamily and actual exact equivalences to the supplied perfect fibers. All operations in this lemma are those of that common family, without comparison to any independently chosen pullback diagram.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) specifies local bounded finite locally free representatives and the full stable subcategory.

[F3] [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the given enhanced affine perfect category through the actual associated-sheaf functor.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the common-family construction in [F1] and the enhanced affine comparison in [F3]. The finite local computations below use those supplied constructions.

### Proof
1.1 Locally represent $E$ and $F$ by bounded finite locally free complexes. Their derived tensor is computed by their ordinary total tensor there, because these bounded flat complexes are K-flat. It is again bounded finite locally free: each degree is a finite direct sum of tensor products of finite locally free sheaves. The unit $\mathcal O_X$ has this form. The full perfect subfamily in [F1] already retains these tensor coherences; the local computation identifies its fibers with precisely the perfect condition of [F2]. [F1, F2, A1]

2.1 Tensoring K-flat representatives commutes with the signed mapping-cone matrices and takes zero to zero. Consequently its derived operation preserves cofiber sequences in each variable and is exact in the stable categories. The finite stable operations of $\operatorname{Perf}$ are ambient ones, so this exactness restricts to $\operatorname{Perf}$. [F1, F2, step 1.1]

3.1 Given $E\in\operatorname{Perf}(Y)$, choose around $f(x)$ a bounded finite locally free presentation and restrict to its inverse-image neighbourhood of $x$. The derived pullback there is computed by ordinary pullback of that bounded flat presentation and is again bounded finite locally free, since pullback sends finite free local charts to finite free charts. Thus $Lf^*$ preserves $\operatorname{Perf}$. Exactness and the strong monoidal and compositional coherences come from the single localized cocartesian family in [F1], not from transport between independently chosen pointwise functors. [F1, F2, step 2.1]

4.1 For any ring map $A\to B$ and a bounded finite-projective $A$-complex $P$, $B\otimes_A P$ computes $B\otimes_A^L P$ because $P$ is bounded projective. Its terms are finite projective over $B$: a finite free-summand presentation remains a summand after tensor. Sheaf pullback of its associated sheaf is the associated sheaf of $B\otimes_A P$, naturally with the signed differentials. Under the actual affine fiber comparison [F3], this is the scalar-extension calculation: both operations on the bounded projective representative are literally sheaf pullback of that associated-sheaf complex. Both affine schemes are qcqs, so this verifies the affine specialization of the common-family functor for every such ring map, without asserting a natural equivalence of independently specified diagrams. Hence the enhanced pullback specializes to derived scalar extension and all assertions follow. [F1, F3, A1, step 3.1] ∎


## Boundary maps vanish for a split tower

[Open item](item-lem-author-9f61e4df2141-split-tower-boundaries) · level 6

### Statement
Suppose a decreasing augmented tower $F^\bullet E$ is equipped with an equivalence of augmented towers to the direct-sum tail tower of [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting). Then every connecting map $\operatorname{gr}^qE\to F^{q+1}E[1]$ is zero. In particular, every connecting homomorphism on homotopy groups in the stage long exact sequences is zero.

### Facts & Assumptions
**Given:** The augmented tower and the specified equivalence of towers.

**Goal:** Prove the vanishing of its stage boundaries.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines the graded pieces as cofibers of transitions.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) gives zero connecting maps for the tail tower.

### Proof
1.1 The equivalence of tower diagrams identifies each transition map with the corresponding tail inclusion. Functoriality of cofiber sequences identifies the connecting map of the given transition with that of the tail inclusion. [F1, given]

2.1 The latter map is zero by [F2], including in negative filtration degrees. Applying the homotopy-group functor sends a zero map to the zero homomorphism, which proves both assertions. [F2, step 1.1] ∎

## Image filtration for a split tower

[Open item](item-lem-author-9f61e4df2141-split-image-filtration) · level 6

### Statement
Let $F^\bullet E$ be equivalent as an augmented tower to the tail tower of a family $(G_j)_{j\geq0}$, including an equivalence $E\simeq\bigoplus_{j\geq0}G_j$. For every integer $n$ and $q\geq0$, the image of $\pi_nF^qE\to\pi_nE$ is the image of the canonical tail inclusion $\pi_n(\bigoplus_{j\geq q}G_j)\to\pi_n(\bigoplus_{j\geq0}G_j)$. Moreover the quotient of this image by the corresponding image at $q+1$ is naturally $\pi_nG_q$. This statement does not require identifying homotopy groups of an infinite coproduct with a direct sum.

### Facts & Assumptions
**Given:** The augmented tower equivalence, an integer $n$, and $q\geq0$.

**Goal:** Identify the image filtration and its successive quotient.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines image filtration groups.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) identifies the finite decomposition of each tail.

### Proof
1.1 The commutative augmentation square in the specified equivalence identifies the two displayed images. The tail inclusion has a retraction induced by identity maps on summands indexed at least $q$ and zero maps on the others; thus its map on homotopy groups is injective. [F1, given, construct]

2.1 By [F2], $T^q\simeq T^{q+1}\oplus G_q$. Applying $\pi_n$ to this finite biproduct gives $\pi_nT^q\cong\pi_nT^{q+1}\oplus\pi_nG_q$. Under the injection from step 1.1, the quotient of the two successive images is consequently $\pi_nG_q$, naturally in the specified splitting. [F2, step 1.1] ∎

## Nesting of image filtration groups

[Open item](item-lem-author-98a750efd0cc-filtration-nesting) · level 6

### Statement
For a decreasing filtration $F$ on a spectrum $E$ and integers $i$ and $a\geq b$, the image of $\pi_iF^a\to\pi_iE$ is contained in the image of $\pi_iF^b\to\pi_iE$.

### Facts & Assumptions
**Given:** $F$, $E$, $i$, and $a\geq b$ as stated.

**Goal:** Prove the containment.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) gives a transition $F^a\to F^b$ compatible with the maps to $E$.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) identifies these images as subgroups.

### Proof
1.1 Applying $\pi_i$ to the compatible maps in [F1] shows that $\pi_iF^a\to\pi_iE$ factors through $\pi_iF^b\to\pi_iE$. [F1, F2, given]

2.1 Thus the image of the former lies in the image of the latter, as subgroups by [F2]. This is the desired containment. [F1, F2, given, step 1.1] ∎

## Naturality of image filtrations

[Open item](item-lem-author-98a750efd0cc-filtration-naturality) · level 6

### Statement
Let $F$ and $G$ be decreasing filtrations on spectra $E$ and $D$. Suppose maps $F^j\to G^j$ and $E\to D$ form a coherent map of augmented towers: in particular each square with the maps to $E$ and $D$ commutes up to the specified homotopy. Then $\pi_iE\to\pi_iD$ carries the $j$th image subgroup of $E$ into that of $D$, for every $i,j\in\mathbb Z$. These restricted maps respect identity and composition whenever the original maps do.

### Facts & Assumptions
**Given:** The two augmented towers and compatible maps just specified.

**Goal:** Establish induced functorial maps on their image subgroups.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the induced homomorphisms on homotopy groups; homotopic maps induce the same homomorphism.

[F2] The image subgroups are defined and are subgroups by [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image).

### Proof
1.1 Take an element in the image subgroup for $F^j$. Choose a preimage in $\pi_iF^j$. The homotopy-commutative square sends its image in $\pi_iE$ to the image in $\pi_iD$ of the chosen preimage under $\pi_iF^j\to\pi_iG^j$. Hence the element lands in the stated subgroup. [F1, F2, given]

2.1 The restricted map is the restriction of the given homomorphism on ambient homotopy groups. Therefore identity and composition hold on the image subgroups whenever they hold on the ambient groups. This proves the claim. [step 1.1] ∎

## Products of filtration images

[Open item](item-lem-author-98a750efd0cc-filtration-products) · level 6

### Statement
Let $F$ be a multiplicative filtration on a commutative ring spectrum $E$, including its multiplicative augmentation as in [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). For integers $a,b,i,j$, multiplication on $\pi_*E$ sends the product of the image of $\pi_iF^a\to\pi_iE$ and the image of $\pi_jF^b\to\pi_jE$ into the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$.

### Facts & Assumptions
**Given:** The multiplicatively augmented filtered spectrum $F\to E$ and the four integers.

**Goal:** Prove the containment of products.

[F1] [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies $F^a\wedge F^b\to F^{a+b}$ and its compatibility with multiplication on $E$.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) supplies the image subgroups. Homotopy groups of spectra admit the pairing induced by smash product, in the convention used in [F1].

### Proof
1.1 Choose elements $x\in\pi_iF^a$ and $y\in\pi_jF^b$ lifting the two given image elements. Smashing representatives and applying the stage multiplication gives an element of $\pi_{i+j}F^{a+b}$. [F1, F2, given]

2.1 Multiplicative compatibility of the augmentation identifies its image in $\pi_{i+j}E$ with the product of the two original image elements. Thus that product belongs to the required image subgroup. This proves the statement. [F1, step 1.1] ∎

## Extending a nonnegative filtration to integer indices

[Open item](item-lem-author-98a750efd0cc-filtration-extension) · level 6

### Statement
Let $F$ be a coherent multiplicative decreasing filtration indexed by $\mathbb N=\{0,1,2,\ldots\}$, with $F^0=E$ as commutative ring spectrum and with its maps to $F^0$ as multiplicative augmentation. It extends canonically to a multiplicative decreasing filtration indexed by $\mathbb Z$, by setting $\widetilde F^j=F^{\max(j,0)}$. Its stages and products in nonnegative degrees are the original ones, and every stage in nonpositive degree is $E$ with identity transition maps between such stages.

### Facts & Assumptions
**Given:** The specified coherent nonnegative multiplicative tower $F$.

**Goal:** Construct and justify the integer-indexed extension.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies transition directions and augmentation; [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies the coherent finite-input product data and their compatibility.

### Proof
1.1 Put $r(j)=\max(j,0)$. If $j\geq k$, then $r(j)\geq r(k)$, so the original transition $F^{r(j)}\to F^{r(k)}$ defines the extended transition. Monotonicity also gives all composition and identity compatibilities by restriction of the original coherent diagram. For $j\leq0$, $r(j)=0$, giving the asserted constant stages and identity transitions. [F1, given, construct]

2.1 For any finite list $(j_1,\ldots,j_n)$, the inequality $\sum r(j_t)\geq r(\sum j_t)$ holds, including the empty list. Compose the original $n$-input product into $F^{\sum r(j_t)}$ with the transition to $F^{r(\sum j_t)}$. Associativity of addition, monotonicity and functoriality of the original transitions ensure that all alternative composites use the same original product followed by the same transition. The original coherent permutation, substitution and unit data therefore give the corresponding coherent data for the extension. [F1, given, step 1.1, construct]

3.1 The maps to $F^0=E$ provide the compatible multiplicative augmentation. When all indices are nonnegative, $r$ preserves their sum, so the construction recovers the original products and transitions. This proves the extension and its stated properties. [F1, step 1.1, step 2.1] ∎

## Prime quotients of noetherian rings

[Open item](item-lem-author-14463ef2f4e5-noetherian-quotient) · level 7

### Statement
If $A$ is a noetherian ring and $\mathfrak p$ is prime, then $A/\mathfrak p$ is a noetherian domain and $\dim(A/\mathfrak p)\leq\dim A$. Here noetherian means that every ideal is finitely generated.

### Facts & Assumptions
**Given:** A noetherian commutative ring $A$ and a prime ideal $\mathfrak p$.

**Goal:** Establish the domain, noetherian and dimension assertions for the quotient.

[F1] A quotient has Krull dimension at most that of its ring. [lem-author-14463ef2f4e5-quotient-dimension](item-lem-author-14463ef2f4e5-quotient-dimension)

### Proof
1.1 The quotient by a prime ideal is a nonzero domain. If $J$ is an ideal of $A/\mathfrak p$, its inverse image in $A$ is generated by finitely many elements because $A$ is noetherian; their images generate $J$. Thus the quotient is noetherian. [given, algebra]

2.1 Applying [F1] to $I=\mathfrak p$ gives the dimension inequality. [F1, given, step 1.1] ∎

## Finite type algebras over fields have bounded dimension

[Open item](item-lem-author-14463ef2f4e5-finite-type-dimension) · level 7

### Statement
Assume the Axiom of Choice. If a commutative $k$-algebra $A$ is generated by $n$ elements over a field $k$, then $A$ is noetherian and $\dim A\leq n$. An algebra is generated by those elements when the evaluation map from the polynomial ring in $n$ variables is surjective.

### Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, and a surjection $k[t_1,\ldots,t_n]\to A$.

**Goal:** Prove noetherianity and the dimension bound.

[F1] A finite type algebra over a noetherian ring is noetherian. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[F2] Under Choice, adjoining one polynomial variable to a finite-dimensional noetherian ring increases its Krull dimension by one. [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Dimension does not increase under quotients. [lem-author-14463ef2f4e5-quotient-dimension](item-lem-author-14463ef2f4e5-quotient-dimension)

### Proof
1.1 A field is noetherian and has dimension zero: its only ideals are zero and the whole field, and its only prime is zero. Apply [F1] successively to its finite-variable polynomial rings. Induction using [F2] gives $\dim k[t_1,\ldots,t_n]=n$; at each step the ring is noetherian and finite-dimensional, as required by [F2]. [F1, F2, given, algebra]

2.1 The surjection identifies $A$ with a quotient of that polynomial ring. By [F3] its dimension is at most $n$, and [F1] gives its noetherianity because it is a finite type $k$-algebra. [F1, F3, given, step 1.1] ∎

## Valuative dimension can be computed on an affine cover

[Open item](item-lem-author-14463ef2f4e5-affine-cover) · level 7

### Statement
If $X=\bigcup_{i\in I}U_i$ is an affine open cover with $U_i=\operatorname{Spec}A_i$, then $\dim_v X=\sup_i\dim_v A_i$, with empty supremum $-1$.

### Facts & Assumptions
**Given:** A scheme $X$ and an affine open cover as in the statement.

**Goal:** Compare the supremum over all affine opens with that over the given cover.

[F1] The scheme valuative dimension is the supremum over all affine opens, and the ring valuative dimension is the supremum over prime quotients and their valuation overrings. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F2] A valuation overring is local and the prime quotient maps locally at its center into it. [lem-author-14463ef2f4e5-valuation-center](item-lem-author-14463ef2f4e5-valuation-center)

### Proof
1.1 The supremum over the cover is at most $\dim_v X$ by [F1]. Conversely, take an arbitrary affine open $U=\operatorname{Spec}A$, a prime $\mathfrak p\subset A$ and a valuation overring $V$ of $A/\mathfrak p$. The induced map $\operatorname{Spec}V\to U$ has closed point $x$ equal to the contraction of the maximal ideal of $V$. Choose a cover member $U_i=\operatorname{Spec}B$ containing $x$. Every point of $\operatorname{Spec}V$ specializes to its closed point, and an open containing a specialization contains its generization. Hence the map has image in $U_i$ and factors through it as a scheme morphism. [F1, F2, given, choose]

2.1 The corresponding homomorphism $B\to V$ has prime kernel $\mathfrak r$, since $V$ is a domain. The generic point of $\operatorname{Spec}V$ maps to the point represented by $\mathfrak p$ in $U$ and by $\mathfrak r$ in $U_i$; therefore the fraction fields of $A/\mathfrak p$ and $B/\mathfrak r$ identify with the residue field of that common point. Under this identification $V$ contains $B/\mathfrak r$, so it is a valuation overring of that quotient. Thus $\dim V\leq\dim_v B\leq\sup_i\dim_v A_i$. Taking both suprema in [F1] proves the reverse inequality. The empty-cover case is immediate. [F1, step 1.1, algebra] ∎

## Support ideals, mixed products and pullback

[Open item](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) · level 7


### Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme, and use the common-family realizations of the supplied perfect fibers and their full supported subcategories. For any subsets $T,S\subseteq X$, derived tensor induces an exact-in-each-variable coherent pairing $\operatorname{Perf}_T(X)\times\operatorname{Perf}_S(X)\to\operatorname{Perf}_{T\cap S}(X)$ and a coherent unital action $\operatorname{Perf}(X)\times\operatorname{Perf}_T(X)\to\operatorname{Perf}_T(X)$. Thus $\operatorname{Perf}_T(X)$ is a stable tensor ideal and a module category over $\operatorname{Perf}(X)$; no distinguished tensor unit in $\operatorname{Perf}_T(X)$ is asserted for proper $T$. For every morphism $f:X\to Y$ between qcqs schemes and every subset $T\subseteq Y$, $Lf^*$ takes $\operatorname{Perf}_T(Y)$ to $\operatorname{Perf}_{f^{-1}T}(X)$, compatibly with the actions and pairings.

### Statement references

[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)

### Facts & Assumptions
**Given:** Qcqs schemes in the fixed universe, arbitrary support subsets, any morphism between these schemes, and AC.

**Goal:** Supply supported multiplicative and contravariant functors without adding a false unit.

[F1] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) gives exact coherent tensor and pullback on the perfect fibers over qcqs schemes, using the same common family.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) and [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) supply full stable support subcategories and stalk criteria.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed through the common-family and enhanced-category constructions used in [F1] and [F2].

### Proof
1.1 For $E\in\operatorname{Perf}_T(X)$ and $F\in\operatorname{Perf}_S(X)$, at $x\notin T\cap S$ at least one factor has acyclic stalk. A derived tensor with a zero object is zero: compute with K-flat stalk representatives and use preservation of quasi-isomorphisms. Hence $(E\otimes^L F)_x$ is acyclic there. This proves the mixed pairing, including the special case of a $\operatorname{Perf}(X)$ factor by taking its support bound to be $X$. It is exact in each variable by [F1], since the support subcategories inherit finite stable operations. [F1, F2, A1]

2.1 The module associativity and the unit $\mathcal O_X$ action are restrictions of the ambient coherent tensor. These operations land in the supported full subcategories by step 1.1, so their higher coherences also restrict. The unit for the action lies in $\operatorname{Perf}(X)$; it is not asserted to lie in $\operatorname{Perf}_T(X)$. This proves the precise tensor-ideal and module statements. [F1, F2, step 1.1]

3.1 For $T\subseteq Y$ and $E\in\operatorname{Perf}_T(Y)$, if $x\notin f^{-1}T$ and $y=f(x)$, then $E_y\simeq0$. The stalk formula $(Lf^*E)_x\simeq\mathcal O_{X,x}\otimes^L_{\mathcal O_{Y,y}}E_y$, obtained from the K-flat pullback construction, makes $(Lf^*E)_x$ zero. Thus pullback has the stated support. Its symmetric monoidal comparison from [F1] commutes with the ambient actions and mixed products; fullness retains these coherences on supported objects. This proves the Statement for arbitrary subsets, using open restriction only when the complement is open. [F1, F2, step 1.1, step 2.1] ∎


## Degeneration of the spectral sequence of a split tower

[Open item](item-lem-author-9f61e4df2141-split-couple-degeneration) · level 7

### Statement
Under the hypotheses of [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries), the tower spectral sequence of [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) has zero differentials on every page $E_s$ for $s\geq2$. This assertion alone does not assert convergence or resolve extensions.

### Facts & Assumptions
**Given:** A tower with the specified equivalence to a direct-sum tail tower.

**Goal:** Show that all differentials in its tower spectral sequence vanish.

[F1] [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries) makes every stage connecting homomorphism zero.

[F2] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the exact couple from stage long exact sequences and derives its pages; its initial map from a graded term to a stage term is the connecting homomorphism.

### Proof
1.1 In the initial exact couple the map $k$ from a graded term to a stage term is zero by [F1]. Its initial differential $jk$ is therefore zero. [F1, F2, given]

2.1 On derivation, the new connecting map sends a surviving graded class to the image in the derived stage group of its former connecting image; because that image is zero, the new connecting map is zero. Induction gives zero connecting map and hence zero differential at every derived page. The reindexing in [F2] gives the asserted pages $s\geq2$. No convergence claim is used. [F2, step 1.1] ∎

## Elmanto–Morrow motivic complex input

[Open item](item-lem-author-b747b28c359f-elmanto-morrow-complexes) · level 7

### Statement
Let $F$ be a prime field, namely $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. For each integer $j\geq0$, Elmanto and Morrow construct a finitary Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ on the category of quasi-compact quasi-separated $F$-schemes, valued in the derived category $D(\mathbb Z)$ of complexes of abelian groups. Finitary means compatibility with the filtered inverse limits to which the cited theorem applies. The sheaf is understood in the derived, homotopy-coherent sense of the cited source.

For a field $k$ with prime subfield $F$, restriction along the forgetful functor from qcqs $k$-schemes to qcqs $F$-schemes supplies the corresponding contravariant complex-valued functor on $\mathrm{Sch}_k$ of [def-article-conventions](item-def-article-conventions), with Nisnevich descent for covers in that category. Nisnevich covers are as in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface).

### External input
The existence and Nisnevich descent of the prime-field sheaves are imported from the opening assertion of Elmanto–Morrow, Theorem 1.1, under its stated hypotheses. This item does not reconstruct their construction or import the filtration, spectral sequence, or comparison theorems.

### Facts & Assumptions

[F1] The cited external input gives the prime-field functor and its Nisnevich descent.

[F2] A qcqs $k$-scheme is a qcqs $F$-scheme by composition with $\operatorname{Spec}k\to\operatorname{Spec}F$; Nisnevich covering families are defined by their underlying étale morphisms and residue-field maps ([def-article-conventions](item-def-article-conventions), [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)).

### Proof

**Given:** A field $k$, its prime subfield $F$, and $j\geq0$.

**Goal:** Obtain the stated restricted functor and descent from the external input.

1.1 Apply [F1] to $F$ and $j$. Composition with the forgetful functor in [F2] gives a contravariant $D(\mathbb Z)$-valued functor on qcqs $k$-schemes. [F1, F2]

2.1 Every Nisnevich covering family and its fibre-product descent diagram in the chosen qcqs $k$-site is also such a diagram after forgetting to $F$. The descent equivalence supplied by [F1] therefore applies to the restricted diagram. This proves the stated restriction and descent; existence itself remains the external input. [F1, F2, step 1.1] ∎

## Motivic complexes and cohomology

[Open item](item-def-motivic-cohomology) · level 8

### Definition
Let $k$ and $\mathrm{Sch}_k$ have the conventions of [def-article-conventions](item-def-article-conventions): objects of $\mathrm{Sch}_k$ are quasi-compact quasi-separated schemes over $k$. For an integer $j\geq0$, the **motivic complex of weight $j$** is the restriction to $\mathrm{Sch}_k$ of the Elmanto–Morrow Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). It is a contravariant functor with values in $D(\mathbb Z)$, the derived category of complexes of abelian groups.

For $X\in\mathrm{Sch}_k$ and $i\in\mathbb Z$, its **motivic cohomology group of degree $i$ and weight $j$** is
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\bigr).$$
For a positive integer $n$, define finite coefficients objectwise by
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z/n):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\bigr).$$
The derived tensor product here is equivalently the mapping cone of multiplication by $n$. A morphism $X\to Y$ of $k$-schemes induces pullback from the group of $Y$ to that of $X$.

### Justification
The external input [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the specified complex-valued functor and its Nisnevich descent on the stated category. By [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology), $H^i$ is a functor on $D(\mathbb Z)$, so the integral group and pullback are independent of representatives and respect identities and composition. [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients) supplies the derived quotient, its equivalence with the cone, and its functoriality; applying cohomology gives the finite-coefficient group and its pullback. Evaluation in this definition is evaluation of the supplied complex-valued sheaf; no identification with derived sections on a separately chosen site is assumed.

### Reading limits
The article's Definition 2.2 and the introduction and opening statement of Elmanto–Morrow Theorem 1.1 were read. The construction is used through the explicitly marked external input; its proof is not reconstructed here.

## Finite valuative dimension for noetherian and finite type schemes

[Open item](item-thm-author-14463ef2f4e5-finite-valuative-dimension) · level 8

### Statement
Assume the Axiom of Choice. A noetherian scheme of finite Krull dimension has finite valuative dimension, bounded above by its Krull dimension. Every scheme of finite type over a field has finite valuative dimension. A noetherian scheme here is one covered by finitely many affine spectra of noetherian rings. Its Krull dimension is the supremum of the lengths of strict chains of irreducible closed subsets; the empty scheme has dimension $-1$. A scheme of finite type over a field has a finite affine cover by spectra of finitely generated algebras over that field.

### Facts & Assumptions
**Given:** Choice, and either a noetherian scheme $X$ of finite Krull dimension $d$, or a scheme $X$ of finite type over a field $k$.

**Goal:** Prove finite valuative dimension in both cases and the bound in the first case.

[F1] For a noetherian domain, valuative dimension equals Krull dimension. [thm-author-14463ef2f4e5-noetherian-valuative-input](item-thm-author-14463ef2f4e5-noetherian-valuative-input)

[F2] A prime quotient of a noetherian ring is a noetherian domain and has dimension at most that of the ring. [lem-author-14463ef2f4e5-noetherian-quotient](item-lem-author-14463ef2f4e5-noetherian-quotient)

[F3] Under Choice a finitely generated algebra over a field is noetherian and has finite Krull dimension. [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The valuative dimension of a scheme is the supremum of the valuative dimensions of the rings in any affine open cover. [lem-author-14463ef2f4e5-affine-cover](item-lem-author-14463ef2f4e5-affine-cover)

### Proof
1.1 Let $A$ be a noetherian ring. For each prime $\mathfrak p$, [F2] makes $A/\mathfrak p$ a noetherian domain of dimension at most $\dim A$. By [F1], its valuative dimension equals its Krull dimension. Taking the supremum over prime quotients gives $\dim_v A\leq\dim A$, including the zero-ring convention. [F1, F2, given]

2.1 For an affine open $U=\operatorname{Spec}A$ of a scheme $X$ of dimension $d$, a strict chain of primes in $A$ gives a strict chain of irreducible closed subsets of $U$ in reverse order. Taking their closures in $X$ gives a strict chain of irreducible closed subsets: intersecting each closure with the open set $U$ recovers the original closed subset. Therefore $\dim A\leq d$. If $X$ is noetherian, choose its finite noetherian affine cover. Step 1.1 bounds each cover member's valuative dimension by $d$, and [F4] gives $\dim_v X\leq d$. The empty scheme satisfies the same assertion by convention. [F4, given, step 1.1]

3.1 If $X$ is finite type over $k$, choose a finite affine cover by spectra of finitely generated $k$-algebras. By [F3] each coordinate ring is noetherian of finite dimension, so step 1.1 gives a finite bound for its valuative dimension. The maximum of these finitely many bounds is finite, and [F4] gives the result. The empty cover gives dimension $-1$. [F3, F4, given, step 1.1, choose] ∎

## Applying nonconnective K-theory to the enhanced interface

[Open item](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products) · level 8

### Statement
Assume AC and let X be qcqs. Applying the imported nonconnective functor 𝕂 to small equivalent models gives well-defined spectra 𝕂(Perf(X)) and 𝕂(Perf_T(X)) for every subset T. Exact derived pullbacks give coherent contravariance for qcqs schemes and their pairs. Tensor makes 𝕂(Perf(X)) an E∞ ring spectrum, makes 𝕂(Perf_T(X)) a unital module over it, and gives coherent mixed pairings 𝕂(Perf_T(X))∧𝕂(Perf_S(X))→𝕂(Perf_{T∩S}(X)). The supported spectra are not asserted to have a distinguished ring unit for proper T. These conclusions need neither a degree-zero identification nor a scheme localization theorem.

### Facts & Assumptions
**Given:** qcqs X, subsets T,S, morphisms between qcqs schemes and AC.

**Goal:** Justify exactly the K-theoretic operations needed by the definition.

[F1] [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small stable idempotent-complete models.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply coherent tensor, pullbacks, modules and mixed products, exact in each variable.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) gives the nonconnective functor on Cat_perf, the tensor universal property, and its lax symmetric monoidal structure. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the smash and all-integer group convention.

### Proof
1.1 By [F1], the whole common-family diagram takes values in essentially small stable idempotent-complete infinity-categories. The inclusion of small models into this essentially small domain is fully faithful and essentially surjective, hence an equivalence of infinity-categories. Extend 𝕂 along this domain equivalence once, or equivalently compose the whole diagram with one inverse equivalence of domains. This gives a diagram of spectra and retains every coherence. Its different inverse choices are naturally equivalent. Thus no independent choice of a skeleton for each object or morphism is used, and the invariant is independent of enhanced presentation. [F1, F3]

2.1 Apply 𝕂 to the exact pullbacks in [F2]. A functor preserves their identity and composition coherences, so these give contravariance on schemes and pairs. In particular the inclusion Perf_T(X)→Perf(X) induces the supported-to-ambient map of spectra. [F2, F3, step 1.1]

2.2 By the tensor universal property in [F3], each separately exact pairing of [F2] is an exact functor out of the corresponding Cat_perf tensor product. Compose its image under 𝕂 with the lax monoidal comparison 𝕂(C)∧𝕂(D)→𝕂(C⊗D). The coherent ambient product and unit make the ambient spectrum an E∞ ring, while the coherent module action makes the supported spectrum a module; the same construction gives the mixed pairings. Coherence follows from the supplied algebra/module operations and the lax symmetric monoidal functor, not merely binary maps in homotopy categories. No unit is inserted into the supported category. [F2, F3, step 1.1]

3.1 These steps only apply the invariant and its coherent products to exact functors. They do not identify π₀ with a separately defined Grothendieck group, identify negative groups by another construction, or prove that a particular scheme-support sequence is a localization sequence. Thus they establish precisely the stated interface. [step 1.1, step 2.1, step 2.2] ∎


## Nonconnective K theory of perfect complexes

[Open item](item-def-nonconnective-k-spectrum-interface) · level 9

### Definition
Assume the Axiom of Choice. A **qcqs scheme** is a quasi-compact quasi-separated scheme. For such X, realize the full sheaf-derived stable idempotent-complete category Perf(X) of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) by the full perfect fiber widehat Perf(X) in the single localized K-flat family of [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison). Each fiber is identified with the supplied Perf(X) by the actual exact inclusion-induced equivalence. The supplier has specified no prior scheme-indexed tensor/pullback diagram; here its coherent interface is, by definition, the one produced by that common family. Its tensor and pullbacks are those of [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback). By [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) these fibers are essentially small. Extend 𝕂 once to the equivalent domain of essentially small stable idempotent-complete infinity-categories, rather than selecting independent skeletons for separate maps. Let 𝕂 be the nonconnective functor of [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input), and define

$$K(X)=\mathbb K(\operatorname{Perf}(X)),\qquad K_i(X)=\pi_iK(X)\quad(i\in\mathbb Z).$$

All groups use the indexing of [def-stable-spectra-interface](item-def-stable-spectra-interface); negative i are allowed and are not set to zero by a connective truncation. In the displayed formulas Perf and its supported categories mean these common-family realizations of the supplied enhanced categories. Equivalent coherent small presentations give naturally equivalent spectra and diagrams.

For every subset T⊆X define

$$K_T(X)=\mathbb K(\operatorname{Perf}_T(X)),\qquad K_{i,T}(X)=\pi_iK_T(X)\quad(i\in\mathbb Z).$$

The supported category consists of perfect complexes whose cohomology stalks vanish off T. For closed T this is equivalently acyclicity on the open complement. Its exact inclusion in Perf(X) supplies $K_T$(X)→K(X). Here $K_T$(X) is defined by that category, without presupposing a fiber identification with K(X)→K(X∖T).

For every morphism f:X→Y of qcqs schemes, exact derived pullback gives f*:K(Y)→K(X). On pairs it gives f*:$K_T$(Y)→$K_{f^{-1}T}$(X). These are coherent contravariant operations; on affine finite-projective representatives they are derived extension of scalars. No flatness, regularity or finite Tor-dimension assumption on f is imposed.

Derived tensor and the lax symmetric monoidal 𝕂 give the coherent E∞ multiplication K(X)∧K(X)→K(X), with unit induced by $O_X$. Thus K(X) is a commutative ring spectrum. Each $K_T$(X) is a module over K(X), and there are coherent support pairings $K_T$(X)∧$K_S$(X)→$K_{T\cap S}$(X). They induce $K_{i,T}$(X)⊗$K_{j,S}$(X)→$K_{i+j,T\cap S}$(X) for all integers i,j. Pullback respects the products and module actions. For proper T no distinguished ring unit on $K_T$(X) is asserted; its specified structure is the ambient module and supported pairings.

### Facts & Assumptions
**Given:** qcqs schemes, arbitrary support subsets, morphisms as above, AC and the chosen universes.

**Goal:** Define the nonconnective spectrum and justify its domain, all-integer groups, contravariance and products.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs the single coherently localized scheme/tensor family and identifies its fibers with the supplied enhancement; [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies its essentially small stable idempotent-complete domain.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply the actual enhanced operations and support control.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) supplies nonconnective 𝕂 and its lax symmetric monoidal structure; [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies π_i for all integers.

[F4] [lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products) applies these inputs and establishes presentation independence and multiplicative contravariance.

### Justification
1.1 Use the common-family model of [F1] and apply [F3] to its whole coherent diagram and to each full support subfamily. This defines the displayed spectra, inclusion maps and all-integer groups independently of equivalent small presentations, as proved in [F4]. [F1, F3, F4]

2.1 Apply [F3] to the exact pullbacks and coherent separately exact pairings in [F2]. The functorial, ring, module and support-product assertions are precisely those of [F4]; smash of shifted sphere maps gives the degree i+j formula. The unit belongs to the ambient Perf(X), so it does not create a unit in a proper support category. This proves the interface. [F2, F3, F4, step 1.1] ∎

### Scope of separate inputs
A degree-zero comparison with a Grothendieck group, comparison with a particular classical nonconnective model, and a scheme localization theorem identifying a support category as the fiber are separate results with their own hypotheses. No such theorem is inferred from this definition. No identification with coherent-sheaf G-theory on a singular scheme is made.


## Affine perfect K zero and bundle K zero

[Open item](item-lem-affine-perfect-k-zero-bridge) · level 10


### Statement
Assume the Axiom of Choice and suitable universes. For a commutative unital ring A and X=Spec A, there is a canonical isomorphism π₀K(X)≅K⁰(X), where K(X) is the nonconnective spectrum of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) and K⁰(X) is the vector-bundle Grothendieck group. Under this isomorphism the class of the associated sheaf complex of a bounded complex P of finite projective A-modules maps to Σₙ(−1)ⁿ[P̃ⁿ], and the spectral class of a vector bundle E placed in degree zero maps to [E]. Equivalently, the inverse sends [E] to the class of E[0]. No noetherian or regularity hypothesis is imposed.

A vector bundle is a locally finite free $\mathcal O_X$-module. Its Grothendieck group is generated by isomorphism classes of vector bundles with [E]=[E′]+[E″] for every short exact sequence 0→E′→E→E″→0 of vector bundles. A finite projective A-module is a finitely generated module having the lifting property through surjective module maps; a bounded complex has finitely many nonzero terms. This is a comparison with vector-bundle K zero, not an identification with coherent-sheaf G-theory.

### Facts & Assumptions
**Given:** AC, suitable universes, a commutative unital ring A, and X=Spec A.

**Goal:** Identify the degree-zero group of the specified nonconnective spectrum with the vector-bundle group and establish the stated formulas.

[A1] Choice is assumed for the essentially small perfect-category and K-theory constructions invoked in [F1]; it is not inferred from affineness. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] An affine scheme is qcqs. The supplied interface defines K(X)=𝕂(Perf(X)), with an essentially small stable idempotent-complete perfect category and invariance under an equivalent small presentation. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[F2] The cofiber Grothendieck group of a small stable infinity-category is canonically the triangle Grothendieck group of its homotopy category. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation)

[F3] For a small idempotent-complete stable infinity-category, the object-class map identifies its cofiber Grothendieck group with π₀ of the specified nonconnective K-theory. This is an external input with the source and reading limits recorded there. [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)

[F4] The triangle group of Perf(X) identifies with the vector-bundle group; it takes a bounded finite-projective representative to the alternating sum of its associated bundle terms and E[0] to [E]. The exact affine equivalence used there is degreewise associated sheaf. [lem-author-3a003d7b5208-affine-triangle-euler](item-lem-author-3a003d7b5208-affine-triangle-euler), [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

### Proof
**Proof technique:** Compose the spectral, triangulated and affine Euler comparisons.

1.1 Choose a small stable idempotent-complete presentation C equivalent to Perf(X), available by [F1]. The equivalence identifies the corresponding K-theory spectra and hence their π₀ groups. Apply [F3] to C and invert its object-class isomorphism; then apply [F2] to obtain an isomorphism from π₀K(X) to the triangle Grothendieck group of hPerf(X). The construction is independent of the presentation by the naturality and equivalence invariance in [F1] and [F3]. [A1, F1, F2, F3, construct]

2.1 Compose the isomorphism of step 1.1 with the affine Euler isomorphism of [F4]. This gives π₀K(X)≅K⁰(X). By [F3], the spectral class of an object is sent in step 1.1 to its triangle class. Therefore [F4] sends the class represented by P to Σₙ(−1)ⁿ[P̃ⁿ], and sends the class of E[0] to [E]. [F3, F4, step 1.1]

3.1 The classes [E] generate K⁰(X), so the final formula also describes the inverse on its generators. The hypotheses of all invoked suppliers are satisfied by the given commutative unital ring, AC and affine qcqs scheme; none requires noetherianity or regularity. This proves the bridge and both formulas. [F1, F3, F4, step 2.1] ∎


## Rational splitting of the motivic tower

[Open item](item-prop-rational-weight-splitting-input) · level 10


### Statement
Assume the Axiom of Choice and use the universes of the supplied perfect-complex $K$-theory interface. Let $X$ be a quasi-compact quasi-separated scheme over $\mathbb Q$ or over $\mathbb F_p$ for a prime $p$, of finite valuative dimension in the supplied convention. Let $F^\bullet_{\mathrm{mot}}K(X)$ be the Elmanto–Morrow motivic filtration on that nonconnective $K$-theory spectrum. Rationalization means smashing each stage with the rational sphere spectrum. There is a natural equivalence of augmented filtered spectra from this rationalized tower to the tail tower

$$q\longmapsto\bigoplus_{j\geq q}\mathbb Q(j)^{\mathrm{mot}}(X)[2j] \quad(q\geq0),$$

extended constantly for $q\leq0$. Here $\mathbb Q(j)^{\mathrm{mot}}(X)$ denotes the rationalization of Elmanto–Morrow's weight-$j$ motivic cohomology spectrum, and $[2j]$ is its $2j$-fold suspension. In particular, the associated motivic spectral sequence has zero differentials after rationalization. The induced image filtration has successive quotients given by the homotopy groups of the corresponding rational weight pieces.

### Statement references

[def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

### External input
The existence, boundedness and natural rational filtered splitting of the Elmanto–Morrow tower are imported from the cited theorems. Their construction and proof are not reconstructed here. In characteristic zero the cited theorem additionally asserts multiplicativity of its equivalence; no multiplicativity of the splitting is asserted here in positive characteristic. The splitting by itself is not a terminal-edge isomorphism: a particular edge comparison also requires the appropriate graded identification and high-filtration vanishing.

### Facts & Assumptions
**Given:** Choice, the fixed universes, $X$ as in the statement and the cited Elmanto–Morrow motivic filtration.

**Goal:** Obtain the stated splitting and its formal spectral-sequence and image-filtration consequences.

[A1] Choice is inherited from the specified perfect-category and nonconnective $K$-theory interface and is used when invoking that model of $K(X)$. The formal consequences of a supplied split tower introduce no additional selection step. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The external input in Elmanto–Morrow, Theorems 4.12 and 4.27, supplies the natural rational filtered splitting under the stated respective hypotheses. The decreasing-filtration convention is Section 2.2; the proof of Lemma 7.1 explicitly writes the split stage $q$ as the sum over weights $j\geq q$ (there for affine schemes). This is the stagewise meaning of the filtered splitting in the two theorems, not an affine restriction on those theorems.

[F2] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) and [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) identify the graded pieces and zero connecting maps of the tail tower.

[F3] [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries) transports those zero boundaries across a tower equivalence, and [lem-author-9f61e4df2141-split-couple-degeneration](item-lem-author-9f61e4df2141-split-couple-degeneration) gives zero differentials in its tower spectral sequence.

[F4] [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration) identifies the successive image-filtration quotients for such a splitting.

### Proof
1.1 If $X$ is a $\mathbb Q$-scheme, apply Theorem 4.12; if it is an $\mathbb F_p$-scheme, apply Theorem 4.27. In either case the qcqs and finite-valuative-dimension hypotheses are exactly those in [F1]. The imported equivalence gives the displayed natural augmented tail splitting, with graded pieces as in [F2]. [A1, F1, F2, given]

2.1 Apply [F3] to the rationalized tower and the equivalence from step 1.1: all differentials in the associated tower spectral sequence vanish. Apply [F4] to the same equivalence to obtain the stated successive image-filtration quotients. These are formal consequences of the imported splitting and do not reconstruct it or supply a separate edge comparison. [F3, F4, step 1.1] ∎


## Elmanto–Morrow filtration input

[Open item](item-thm-author-98a750efd0cc-motivic-filtration-input) · level 10


### Statement
Assume the Axiom of Choice for the selected local perfect-complex $K$-theory realization. Let $\mathbb F$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. On the opposite of the category of quasi-compact quasi-separated $\mathbb F$-schemes, nonconnective algebraic $K$-theory has a functorial, multiplicative, $\mathbb N$-indexed decreasing motivic filtration whose zeroth stage is naturally equivalent to $K$. In the terminology of coherently multiplicative filtered spectra, the imported multiplicative filtration includes coherent products, unit and transition compatibility; its maps to $K$ are induced through its zeroth stage.

### Statement references

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

### External input
This is the existence and zeroth-stage part of the cited Elmanto–Morrow results. It is imported as literature, not proved by the local formal lemmas. The source's later boundedness and convergence assertions require additional hypotheses and are not imported here. The nonconnective $K$-theory is used through the perfect-complex interface of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), under its stated Choice assumption. This assumption belongs to the selected local realization; it is not an additional geometric hypothesis attributed to Elmanto–Morrow.

### Facts & Assumptions
**Given:** The Axiom of Choice, a prime field $\mathbb F$ and a qcqs $\mathbb F$-scheme.

**Goal:** Supply the functorial multiplicative filtration and its zeroth-stage equivalence under exactly these hypotheses.

[F1] The cited Theorem 1.1(1) states the functorial multiplicative filtration on nonconnective $K$-theory. The initial assertions of Theorems 4.12 and 4.27 state the nonnegative indexing and zeroth-stage identification, respectively in characteristics zero and $p$.

[F2] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the explicit Choice premise of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family enhanced perfect categories and essentially small nonconnective-functor domain are invoked. Definitions 4.9 and 4.23 construct the imported filtration as a pullback of filtered $E_\infty$-algebras, providing the coherent multiplication specified by [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). No independent choice of a filtration is made here.

### Proof
1.1 Under the inherited Choice premise in [F2], use the selected $K$-theory realization and apply the characteristic-zero assertion of [F1] when $\mathbb F=\mathbb Q$, and the characteristic-$p$ assertion when $\mathbb F=\mathbb F_p$. [F1, F2, given]

2.1 The qcqs hypothesis is exactly the common hypothesis of those initial assertions. The stated functoriality and coherent multiplicativity are the imported theorem's data, with the filtered-algebra structure in [F2]; no finite-valuative-dimension conclusion is used. [F1, F2, given, step 1.1] ∎


## The exact restriction kernel and its denominators

[Open item](item-lem-author-50b5133c29cc-klocal-kernel) · level 10


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, $U\subseteq X$ quasi-compact open, $T=X\setminus U$, and $j:U\hookrightarrow X$. In the supplied enhanced categories, $j^*:\mathrm{Perf}(X)\to\mathrm{Perf}(U)$ is exact and its full kernel is $\mathrm{Perf}_T(X)$. For a morphism $c$ of perfect objects, $j^*c$ is an equivalence if and only if $\operatorname{cofib}(c)$ belongs to this support category. The inclusion is fully faithful and stable, and the restriction of that inclusion is canonically zero.

### Facts & Assumptions
**Given:** $X,U,T,j$ as stated, with fixed universes. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Identify the actual sequence and the denominators in its triangulated quotient.

[A1] Choice is assumed when invoking the enhanced perfect-category, coherent restriction and derived-enhancement interfaces in [F1] and [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) gives the full stable perfect and supported sheaf-derived categories and the open-complement criterion.

[F2] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies the essentially small exact enhanced categories and coherent derived pullback; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) identifies its homotopy category with ordinary sheaf-derived complexes.

### Proof
1.1 Open restriction is degreewise exact on sheaves and preserves bounded finite locally free local presentations. It therefore induces the actual exact restriction functor in the supplied enhancement. An object lies in its kernel exactly when its cohomology vanishes on $U$, equivalently when its support is contained in $T$, by [F1]. The common-family realization in [F2] represents this same restriction: inclusion of its complexes into all sheaf complexes commutes with open restriction before localization. [A1, F1, F2]

2.1 Exact restriction takes the cofiber of $c$ to the cofiber of $j^*c$. In a stable category a map is an equivalence precisely when its cofiber is zero. This proves the denominator criterion. Fullness and stability of the kernel follow from [F1]. Its restriction lands in the full subcategory of zero objects, which is contractible, supplying the zero composite and its natural nullhomotopy. [F1, F2, step 1.1] ∎


## Supported perfect complexes are invariant under an open neighbourhood

[Open item](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence) · level 10

### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, let $T\subseteq X$ be closed, and let $v:V\hookrightarrow X$ be a quasi-compact open containing $T$. Actual restriction induces an exact equivalence
$$v^*:\mathrm{Perf}_T(X)\xrightarrow{\sim}\mathrm{Perf}_T(V),$$
with inverse given in the supplied sheaf-derived model by degreewise module extension by zero $v_!$. It induces the natural equivalence $K_T(X)\simeq K_T(V)$, compatible with the support-to-global inclusions and restriction on global K spectra. No quasi-compactness of $X\setminus T$ is needed for this categorical excision lemma.

### Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** $X,T,V,v$ as stated and the supplied sheaf-derived enhancement.

**Goal:** Construct an actual exact inverse on supported perfect categories, not merely a triangulated equivalence.

[F1] [thm-author-50b5133c29cc-klocal-extension-by-zero-input](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input) gives actual degreewise exact functors $v_!,v^*$, their natural unit/counit, the stalk formula, and $v^*v_!=\mathrm{id}$.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfection locally and support by cohomology stalks; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the actual infinity-localizations. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies K on these full categories and actual restriction maps.

### Proof
1.1 Let $F\in\mathrm{Perf}_T(V)$. Exactness and the stalk formula in [F1] show that the cohomology of $v_!F$ equals that of $F$ on $V$ and is zero off $V$, so its support is contained in $T$. On the open $V$ it is perfect because $v^*v_!F=F$; on the open $X\setminus T$ it is acyclic, hence equivalent to the zero perfect object. These opens cover $X$ because $T\subseteq V$. Thus local perfection in [F2] makes $v_!F$ perfect on $X$. This is why closed ambient support, rather than preservation of arbitrary quasi-coherent sheaves by $v_!$, suffices. [F1, F2]

2.1 The degreewise unit identifies $v^*v_!$ with the identity. For $E\in\mathrm{Perf}_T(X)$ the actual counit $v_!v^*E\to E$ is a quasi-isomorphism: at points of $V$ it is an isomorphism on complex stalks, and outside $V$ the source is zero while the target is acyclic since those points lie outside $T$. Hence this natural transformation becomes an equivalence in the supplied infinity-localization. Both functors are exact by [F1], and step 1.1 verifies their restrictions have precisely the claimed perfect/support domain. They therefore give mutually inverse exact functors of the actual enhanced full subcategories. [F1, F2, step 1.1]

3.1 Apply the functor in [F2] to this exact equivalence. The square formed by the two support inclusions and the global/support restriction functors commutes already on complexes, and the common-family realization of the supplied interface represents the same restriction. Thus the K equivalence is compatible with the claimed maps. Extension by zero is used solely as an inverse on these support categories, without requiring it to preserve the common K-flat presentation or to be a global scheme pullback. [F1, F2, step 2.1] ∎


## External enhanced quotient criterion and localizing nonconnective K

[Open item](item-thm-author-50b5133c29cc-klocal-categorical-localizing-input) · level 10

### Statement
Consider an actual sequence of exact functors $\mathcal A\to\mathcal B\to\mathcal C$ between small stable infinity-categories, with zero composite and fully faithful first arrow. It is exact precisely when the induced functor $h\mathcal B/h\mathcal A\to h\mathcal C$ is an equivalence after idempotent completion. Equivalently the actual enhanced quotient $\mathcal B/\mathcal A\to\mathcal C$ becomes an equivalence after idempotent completion. Here idempotent completion adjoins all retracts, and $h$ retains objects and homotopy classes of maps.

The BGT nonconnective functor $\mathbb K$ used in the supplied K interface carries any such exact sequence to a cofiber, hence fiber, sequence of spectra. These sequences are functorial for diagrams of the given exact functors and their nullhomotopies.

### Source contract
**Given:** Small stable categories and actual exact functors, with fixed universes; take $\kappa=\omega$ in BGT.

**Goal:** Specify the model-independent enhanced localization criterion and nonconnective localizing property.

[F1] BGT Propositions 5.13–5.15 compare actual enhanced quotients and triangulated quotients. Finite-colimit preservation is exactly the $\kappa=\omega$ hypothesis.

[F2] BGT Theorem 8.7 makes $U_{\mathrm{loc}}$ localizing, while Theorem 9.8 identifies $\mathbb K(-)$ naturally with $\operatorname{Map}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(-))$.

### External input
Import [F1] and [F2] with the recorded limits. Mapping spectra in a stable category preserve finite limits, and cofiber sequences are fiber sequences; therefore the displayed description in [F2] implies the localizing property. This is the nonconnective $IK$ of BGT already chosen by [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface). This input applies to an actual exact functor and never upgrades an unimplemented equivalence of triangulated categories to an infinity-functor.


## External connective, nonconnective and automorphism comparisons

[Open item](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) · level 10


### Statement
Assume the Axiom of Choice. For a small stable infinity-category $D$, its $S_\infty$ construction gives a natural map $D^\simeq\to\Omega^\infty K^{\mathrm{cn}}(D)$ from the maximal subgroupoid. The induced loop at an object $E$ defines a homomorphism $\pi_0\operatorname{Aut}_D(E)\to\pi_1K^{\mathrm{cn}}(D)$; on $\pi_1$ one translates the component of $E$ to the zero component of the grouplike K-space. Composition of automorphisms maps to addition, and exact functors preserve these classes. The canonical natural map $j_D:K^{\mathrm{cn}}(D)\to\mathbb K(D)$ is an isomorphism on $\pi_i$ for $i>0$, in particular on $\pi_1$. The nonconnective functor here is the $U_{\mathrm{loc}}$ functor of the specified perfect-complex interface, identified with BGT's suspension-colimit $IK$ by Theorem 9.8.

For a small DHKS-saturated Waldhausen category $C$ admitting factorization, BGT's comparison gives $K^W(C)\simeq K^{\mathrm{cn}}(C_\infty)$, naturally in weakly exact functors; its S-construction map carries each object automorphism class to the class of the same automorphism in $C_\infty$. For any commutative unital ring $A$, let $C(A)$ be the essentially small Waldhausen category of bounded cochain complexes of finitely generated projective $A$-modules, with chain maps, degreewise split monomorphisms as cofibrations, and quasi-isomorphisms as weak equivalences. Apply the small-category comparison to a small presentation. Its localization $C(A)_\infty$ is the full enhanced perfect module category via the actual finite-projective model. Degreewise associated sheaf then identifies it, by the enhanced affine equivalence, with the specified perfect category on $\operatorname{Spec}A$. No noetherian or regularity hypothesis on $A$ is imposed. These comparisons, followed by $j$, compare the class of an automorphism in $\pi_1$, not merely degree-zero object classes.

### Statement references

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)

[lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)

### Facts & Assumptions
**Given:** AC, the fixed universe bounds, stable infinity-categories and exact functors; for the Waldhausen comparison also the stated smallness, factorization and DHKS-saturation hypotheses. In the local application $A$ is any commutative unital ring.

**Goal:** Import the positive-degree comparison to the specified nonconnective model, record its maps on object automorphisms, and verify the bounded finite-projective application.

[F1] BGT arXiv:1001.2282v4, §7.1, pp. 44–45, gives the S-construction and its natural one-skeleton/core map. Lemma 7.11 and Corollary 7.12, pp. 48–49, give the actual natural Waldhausen comparison under factorization and DHKS-saturation.

[F2] BGT Definition 9.6 and Theorem 9.8, p. 58, define the canonical map into $IK$ and identify its $U_{\mathrm{loc}}$ model. For a DHKS-saturated Waldhausen category with factorization, Definition 9.30, p. 63, defines its $IK$ using the stabilized localization; Proposition 9.32, p. 64, identifies connective K-theory with that of this stabilization, and Remark 9.33 gives positive-degree agreement with $IK$. These passages do not by themselves state the comparison for an arbitrary small stable infinity-category. The degree-zero clause requires idempotent completeness and is not used here. The specified nonconnective functor is that of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

[F3] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) supplies the actual bounded-projective enhanced model and its K-projective mapping property. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the associated-sheaf functor with the enhanced affine perfect equivalence. Their Choice-qualified hypotheses hold for the present commutative unital ring application.

[F4] Import the Waldhausen-presentation construction stated immediately after Corollary 7.12 in BGT v4, p. 49, using the homotopically pointed simplicial realization of a small stable infinity-category supplied by §4.2, pp. 26–27 (see also Theorem 4.22, p. 30). The same homotopy-exact presheaf construction as Lemma 7.11 gives a DK-equivalent full category of cofibrant objects weakly equivalent to representables. It inherits model cofibrations and weak equivalences and is closed under finite homotopy colimits and factorization. Use the full presheaf presentation in a fixed larger universe, where it is small; the size choices use [A1]. This is a presentation of $D$ itself, without passing to its idempotent completion. The construction and DK-equivalence are imported at the second six-field reference above; their foundations are not a new local proof.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the supplied enhanced realizations in [F3] and the selected small presentations, including [F4]. No claim to a choice-free reconstruction of those suppliers is made.


Import [F1] and [F2] with their stated hypotheses. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

### External input
Import [F1], [F2] and the presentation construction [F4] with their stated hypotheses. The numbered proof below checks the presentation hypotheses and composes these inputs; the whole item is a local application, not a claimed reconstruction of the imported foundations. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

### Proof
1.1 For an arbitrary small stable infinity-category $D$, choose the homotopically pointed simplicial realization and presheaf Waldhausen presentation $C_D$ of [F4], with $N(C_D)[W^{-1}]\simeq D$. Its factorization stays in $C_D$: a model factorization of a map between its cofibrant objects has a cofibrant middle object weakly equivalent to the target, hence still in the homotopy-closed representable class. Pushouts along inherited cofibrations compute homotopy pushouts of cofibrant objects and remain in that class by finite homotopy-colimit closure. A map is a model weak equivalence precisely when it is invertible in the ambient homotopy category; the presentation identifies its localization fully with $D$, so the same criterion holds there. Thus $C_D$ is DHKS-saturated and has factorization. Use this full homotopy-closed category in the fixed larger presentation universe, where it is small, rather than an ordinary skeleton that could lose the preceding constructions. The compatible size choices use [A1]; no canonical strict choice of presentations is asserted. [F4, A1, construct]

1.2 The indicated split cofibrations and quasi-isomorphisms give the usual Waldhausen structure on $C(A)$: pushouts along degreewise split monomorphisms remain bounded finite-projective complexes, and the quasi-isomorphism gluing property follows from the corresponding short exact sequences of complexes. For a map $f:P\to Q$, use $Q\oplus\operatorname{Cone}(\operatorname{id}_P)$ as a mapping cylinder. The graph of $f$ and the canonical inclusion $P\to\operatorname{Cone}(\operatorname{id}_P)$ is a degreewise split monomorphism, and projection to $Q$ is a quasi-isomorphism since the identity cone is contractible. Their composite is $f$, so factorization holds within $C(A)$. The finite sums, shifts and cones used here remain in the model of [F3]. [F3, given, construct]

2.1 Apply [F1] and [F2] to $C_D$. Since $D$ is stable, suspension is already an equivalence, so $N(C_D)[W^{-1}][\Sigma^{-1}]\simeq D$. Corollary 7.12 identifies $K^W(C_D)$ with $K^{\mathrm{cn}}(D)$, and Definition 9.30 identifies its nonconnective target with $IK(D)$. Remark 9.33 therefore gives isomorphisms on $\pi_i$ for $i>0$. These are induced by $j_D$: under those identifications the comparison is the map into the suspension-colimit of Definition 9.6, followed by its natural Theorem 9.8 identification, rather than an independently chosen isomorphism of groups. Consequently this proves the claimed property of the canonical natural $j_D$ for every $D$. Naturality of $j$ and of the core construction comes from [F1] and [F2]; it does not require functorial choices of $C_D$. [F1, F2, step 1.1]

2.2 A bounded acyclic projective complex is contractible: its identity map is nullhomotopic by the K-projective property in [F3]. Thus a quasi-isomorphism between bounded projective complexes is a homotopy equivalence. Conversely, a map invertible in the localization induces an isomorphism in the derived category, hence on cohomology, so it is a quasi-isomorphism. This verifies DHKS-saturation. The actual localization is the full perfect module category by [F3], and the associated-sheaf functor gives its enhanced affine identification. The enhanced realizations and a small presentation use [A1]. [F3, A1, step 1.2]

3.1 Apply [F1] with the hypotheses verified in steps 1.2 and 2.2. Use the actual module and affine equivalences of [F3] and then the nonconnective comparison of [F2]. Its positive-degree agreement applies to $\pi_1$. The core maps in [F1] carry the loop of an automorphism to the loop of the same automorphism, and associated sheaf carries it to the corresponding sheaf automorphism. This proves the local application with its automorphism normalization. The general positive-degree comparison was derived in step 2.1 using the additional presentation input [F4]; it was not inferred from the Waldhausen-scoped citation alone. Corepresentability, rigidification and delooping foundations remain imported. [F1, F2, F3, step 2.1, step 1.2, step 2.2] ∎


## Isomorphism classes of vector bundles

[Open item](item-def-vector-bundle-classes) · level 11

### Definition
Assume the Axiom of Choice and the suitable universes used for the supplied perfect K-theory construction. Let $X$ be a quasi-compact, quasi-separated scheme and $n$ a nonnegative integer. A **vector bundle** on $X$ is a finite locally free $\mathcal O_X$-module: each point has an open neighbourhood on which it is isomorphic to a finite direct sum of copies of $\mathcal O_X$. It has **rank $n$** if every point has such a neighbourhood with exactly $n$ copies. An isomorphism of vector bundles is an invertible $\mathcal O_X$-linear morphism. Write $\mathrm{Vect}_n(X)$ for the set of their isomorphism classes and $[E]_{\mathrm{iso}}$ for the class of a rank-$n$ bundle $E$ in that set.

The supplied nonconnective perfect K-theory spectrum is $K(X)=\mathbb K(\operatorname{Perf}(X))$, and $K_0(X)=\pi_0K(X)$. A bundle $E$, regarded as a complex concentrated in degree zero, is perfect. Write $[E]\in K_0(X)$ for its object class in this spectral K-zero group. The unit of the ring $K_0(X)$ is denoted $1=[\mathcal O_X]$. Here $[E]$ denotes a K-zero class, not an isomorphism class in $\mathrm{Vect}_n(X)$.

If $X=\operatorname{Spec}A$ for a commutative unital ring $A$, the supplied affine comparison identifies this $K_0(X)$ with the vector-bundle Grothendieck group: the abelian group generated by bundle isomorphism classes subject to $[E]=[E']+[E'']$ for every short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles. Under the comparison the two meanings of $[E]$ agree. This affine assertion makes no identification of perfect K-theory with coherent-sheaf G-theory.

### Facts & Assumptions
**Given:** A quasi-compact, quasi-separated scheme $X$, a nonnegative integer $n$, the Axiom of Choice and suitable universes.

**Goal:** Define the set of bundle isomorphism classes and justify the spectral class, unit and stated affine comparison.

[F1] A finite locally free sheaf has well-defined local rank, and a bundle is locally a finite free sheaf. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F2] A complex locally quasi-isomorphic to a bounded complex of finite locally free sheaves is perfect. The perfect category contains such complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[F3] For qcqs $X$, the supplied spectrum is defined on the essentially small perfect category; its multiplication has unit induced by $\mathcal O_X$. For a small idempotent-complete stable category, the object-class map identifies the cofiber Grothendieck group with $\pi_0$ of its supplied nonconnective K-theory. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)

[F4] Assuming AC and suitable universes, for $X=\operatorname{Spec}A$ with $A$ commutative and unital, the spectral degree-zero group is canonically isomorphic to the vector-bundle Grothendieck group and sends the spectral class of $E[0]$ to the bundle class of $E$. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F5] The article conventions define qcqs schemes and use finite locally free sheaves as vector bundles. [def-article-conventions](item-def-article-conventions), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Justification
1.1 The open subsets of $X$ form a set. For each indexed open cover drawn from that set, rank-$n$ bundles trivialized on the cover are described up to isomorphism by transition matrices in $\operatorname{GL}_n(\mathcal O_X(U\cap V))$ satisfying the identity, inverse and cocycle conditions. These matrices form a set; changing trivializations acts by a set of invertible matrices, and its equivalence classes form a set. Taking the union over covers and identifying data defining isomorphic sheaves gives a set of isomorphism classes. Every rank-$n$ bundle occurs by its local triviality, and an isomorphism preserves local rank. Thus $\mathrm{Vect}_n(X)$ is well-defined, including when $X$ is empty. [F1, F5, construct]

2.1 By local freeness, $E[0]$ is locally a bounded complex of finite locally free sheaves, so it is an object of $\operatorname{Perf}(X)$. The object-class map in [F3] assigns it a well-defined element of $\pi_0K(X)$, invariant under isomorphism. The unit statement in [F3] identifies the multiplicative unit with the class of $\mathcal O_X[0]$. [F2, F3, step 1.1]

3.1 If $X=\operatorname{Spec}A$ as stated, the hypotheses of [F4] hold; its comparison identifies the spectral and vector-bundle classes on every generator. This establishes the stated notation and affine comparison. No corresponding identification with coherent G-theory is used. [F4, step 2.1] ∎

## Units split the K one determinant

[Open item](item-lem-unit-section-of-k-one-determinant) · level 11

### Statement
Assume AC and let X be a quasi-compact quasi-separated scheme, with K(X)=𝕂(Perf(X)) as specified in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface). There is a natural group homomorphism

$$s_X:\Gamma(X,\mathcal O_X)^\times\longrightarrow K_1(X),\qquad u\longmapsto[\mathcal O_X\xrightarrow{u}\mathcal O_X].$$

There is a natural determinant homomorphism det_X:K₁(X)→Γ(X,$O_X$)×, characterized by the usual stable matrix determinant on each affine restriction under the explicit affine comparison. It satisfies det_X∘$s_X$=id; hence determinant is surjective and $s_X$ injective. For a vector-bundle automorphism α, det_X([α]) is the unit inducing the top-exterior-power automorphism det(α) of its determinant line (defined locally on rank loci). Neither a global resolution property nor regularity/noetherian hypotheses are required. This statement makes no identification of a motivic projection with determinant.

### Facts & Assumptions
**Given:** qcqs X, AC, the supplied perfect enhancement and nonconnective K functor; rings below are commutative and unital. The notation [α] is the automorphism loop under the natural core→connective K→nonconnective K construction, not an object class in K₀.

**Goal:** Establish the precise affine π₁ comparison and unit normalization, construct det_X and $s_X$, and prove the splitting.

[F1] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies the actual sheaf-derived perfect model and exact pullbacks. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) and [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) identify its affine fiber with the enhanced bounded finite-projective model. [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) identifies actual affine pullback with derived extension of scalars on those representatives.

[F2] [thm-author-da44cda020c0-units-k1-classical-comparisons](item-thm-author-da44cda020c0-units-k1-classical-comparisons) supplies the matrix/Quillen/S/Gillet–Waldhausen comparisons, with their automorphism-class normalization.

[F3] [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) supplies the actual Waldhausen-to-infinity K comparison, the natural automorphism classes and j inducing an isomorphism on π₁ to the supplied nonconnective functor.

[F4] [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant) constructs determinant on GL(A)_ab; [lem-author-da44cda020c0-units-k1-determinant-base-change](item-lem-author-da44cda020c0-units-k1-determinant-base-change) proves its ring-map naturality.

[F5] [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units) and [lem-author-da44cda020c0-units-k1-local-determinant-gluing](item-lem-author-da44cda020c0-units-k1-local-determinant-gluing) supply unit sheaf gluing and the induced homomorphism. [lem-author-da44cda020c0-units-k1-split-surjective-homomorphism](item-lem-author-da44cda020c0-units-k1-split-surjective-homomorphism) gives surjectivity and injectivity from a right inverse.

[F6] [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) supplies the exterior-power determinant line and its local wedge bases and pullback compatibility.

### Proof
1.1 For a ring A, P(A) is split exact: a surjection onto a projective module has a section, so its kernel is a direct summand of the finite projective source and is finite projective. This verifies the kernel-of-surjections hypothesis of Gillet–Waldhausen in [F2]. The Waldhausen category C(A) of bounded finite-projective cochain complexes has mapping cylinders, so every map factors as a degreewise split monomorphism followed by a quasi-isomorphism. Its homotopy category after quasi-isomorphisms is the enhanced perfect category’s homotopy category by [F1]; hence a map is a weak equivalence exactly when it becomes an isomorphism (DHKS-saturation). Indeed the cone of a quasi-isomorphism between bounded projectives is bounded acyclic projective and contractible: apply the K-projective mapping property in [F1] to its identity. Thus the comparison hypotheses in [F3] hold. [F1, F2, F3]

2.1 Compose the actual maps of [F2], the actual Waldhausen/infinity comparison of [F3], j on π₁ from [F3], and the exact affine enhancement equivalence of [F1]. They give an isomorphism $c_A:GL(A)_{ab}\xrightarrow{\sim}\pi_1\mathbb K(\operatorname{Perf}(\operatorname{Spec}A))$. Every step carries an automorphism M of Aⁿ to the class of that same degree-zero automorphism: degree-zero inclusion is literal, the S-construction comparisons use its core loop, and associated sheaf sends it to its matrix acting on $O^n$. Thus $c_A([u])=[\mathcal O\xrightarrow{u}\mathcal O]$. This uses π₁ agreement in the positive-degree range of j; no π₀-only comparison is substituted. [F1, F2, F3, step 1.1]

3.1 This $c_A$ is natural for unital A→B. Extension of scalars takes finite projectives to finite projectives and preserves split monomorphisms. A bounded projective quasi-isomorphism is a homotopy equivalence by step 1.1, so tensor with B preserves it without a flatness hypothesis. Hence it is weakly exact on C(A). All comparisons are induced by the corresponding actual functors in [F1]–[F3], and on matrix generators they send M to its entrywise image. The resulting π₁ naturality square commutes. Define $d_A=\det_A\circ c_A^{-1}$; [F4] makes these homomorphisms commute with all such ring maps, and $d_A$([u])=u by step 2.1. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Given k∈K₁(X), on each affine open V=Spec(A) take $d_A(k|_V)\in\mathcal O_X(V)^\times$. On an intersection of two affine opens, restrict further to any affine neighbourhood W inside that intersection. Naturality from step 3.1 identifies both restrictions with $d_{\mathcal O(W)}(k|_W)$. They therefore agree as sections on the intersection by the sheaf uniqueness axiom. Apply [F5] to glue a unique global unit det_X(k). The same gluing lemma shows det_X is a homomorphism and independent of the affine cover. [F1, F4, F5, step 3.1]

5.1 A global unit is the automorphism $m_u$ of $O_X$. The natural automorphism map in [F3] defines $s_X$(u)=[$m_u$]. Composition $m_u m_v=m_{uv}$ makes $s_X$ a group homomorphism. It is compatible with scheme pullback by [F1] and [F3]. Restriction to an affine V sends its class to the class [u|_V] of step 2.1. [F1, F3, step 2.1, step 4.1]

6.1 The restriction of det_X($s_X$(u)) to each affine V is u|_V by steps 3.1 and 5.1. Unit sheaf uniqueness in [F5] gives det_X($s_X$(u))=u globally. The right-inverse lemma in [F5] proves surjectivity of determinant and injectivity of $s_X$. For f:Y→X between qcqs schemes, choose an affine V around f(y) and an affine W around y inside f⁻¹(V). Step 3.1 proves determinant naturality on W; sheaf uniqueness then proves it globally. Thus both maps are natural on the stated category. [F1, F5, step 3.1, step 4.1, step 5.1]

7.1 For an automorphism α of a vector bundle E, choose affine opens where E is free of constant rank. Naturality of the automorphism construction restricts [α] to the matrix class of α there. The top-wedge expansion in [F6] says that its action on det(E) is multiplication by that matrix determinant, exactly the local unit used in step 4.1. These local units glue uniquely; a line-bundle automorphism is canonically multiplication by a unit, because that is true on trivializations and scalar multiplication commutes with transition units. Thus det_X([α]) has the asserted exterior determinant interpretation. The empty scheme has only the unique unit and zero K-group, so the same assertion also includes it. This completes the proof. [F1, F3, F4, F5, F6, step 4.1, step 6.1] ∎



## Motivic filtration and image groups

[Open item](item-def-motivic-filtration) · level 11


### Definition
Assume the Axiom of Choice and fix a field $k$, algebraically closed under the article convention unless otherwise specified. Write $\mathrm{Sch}_k$ for the category of quasi-compact quasi-separated $k$-schemes and $k$-morphisms, as in [def-article-conventions](item-def-article-conventions). For $X$ in this category, let $K(X)$ be the nonconnective $K$-theory spectrum of perfect complexes, and let $K_i(X)=\pi_iK(X)$ for every integer $i$, as in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

The **motivic filtration** $F^\bullet_{\mathrm{mot}}K$ is the Elmanto–Morrow functorial multiplicative nonnegative filtration supplied by [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input), restricted from the prime field of $k$ to $k$-schemes. Extend it to integer indices by the construction of [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension). Thus it is a functor

$$F^\bullet_{\mathrm{mot}}K:\mathrm{Sch}_k^{\mathrm{op}}\longrightarrow\operatorname{CAlg}(\operatorname{FilSp}),$$

where $\operatorname{FilSp}$ is the category of integer-indexed decreasing spectra with coherent transitions and $\operatorname{CAlg}$ denotes its coherently commutative, associative and unital algebra objects, as specified in [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). Its zeroth stage is naturally equivalent to $K(X)$; we use that equivalence to write $F^0_{\mathrm{mot}}K(X)=K(X)$. Its multiplication includes maps

$$F^a_{\mathrm{mot}}K(X)\wedge F^b_{\mathrm{mot}}K(X)\longrightarrow F^{a+b}_{\mathrm{mot}}K(X)$$

for all integers $a,b$, coherently compatible with transitions, pullback and the multiplication on $K(X)$.

For $i\in\mathbb Z$ and $j\geq0$, define the **image filtration group**

$$F^j_{\mathrm{mot}}K_i(X)=\operatorname{im}\bigl(\pi_iF^j_{\mathrm{mot}}K(X)\longrightarrow K_i(X)\bigr).$$

The arrow is induced by the transition to stage zero and its identification with $K(X)$. Its image is a subgroup, and the induced map onto that subgroup is surjective. The same formula also makes sense for negative $j$ under the stated extension, in which case it gives all of $K_i(X)$.

### Facts & Assumptions
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice, and the integer indices specified above.

**Goal:** Justify the functor, its augmentation and multiplication, and the image-group definition without reconstructing the external filtration.

[F1] [def-article-conventions](item-def-article-conventions) defines the scheme category; every field contains its prime field, either $\mathbb Q$ or $\mathbb F_p$.

[F2] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the explicit AC hypothesis of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family perfect-complex realization and essentially small nonconnective-functor domain are invoked. That interface supplies contravariant nonconnective $K$, all integer homotopy groups and the ambient ring structure. [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) imports the nonnegative filtration, functoriality, multiplication and zeroth-stage equivalence on qcqs schemes over the prime field.

[F3] [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension) supplies the integer-indexed extension; [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specify its augmentation and coherent algebra-object notation.

[F4] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image), [lem-author-98a750efd0cc-filtration-nesting](item-lem-author-98a750efd0cc-filtration-nesting), [lem-author-98a750efd0cc-filtration-naturality](item-lem-author-98a750efd0cc-filtration-naturality) and [lem-author-98a750efd0cc-filtration-products](item-lem-author-98a750efd0cc-filtration-products) establish, respectively, subgroup and surjectivity, nesting, naturality and compatibility of products for such images.

### Justification
1.1 Invoke the perfect-complex $K$-theory interface in [F2] under the assumed Choice premise. The structure morphism of each $k$-scheme composes with $\operatorname{Spec}k\to\operatorname{Spec}\mathbb F$ for its prime field $\mathbb F$. Its underlying scheme remains qcqs, and every $k$-morphism is an $\mathbb F$-morphism. Restrict the functor in [F2] along this forgetful functor; no finite-type, regularity or finite-dimensional assumption is needed. [F1, F2, given]

2.1 Apply the extension in [F3] to the restricted nonnegative tower. Its stage zero is naturally equivalent to $K$, and its coherent products give the displayed maps. The extension and all maps are functorial because they are built from the original transitions and products. The equality at stage zero is notation for the supplied natural equivalence. [F2, F3, step 1.1]

3.1 Apply the image lemma in [F4] to each stage-to-$K$ map. The subgroup and surjectivity statements follow. Nesting, pullback compatibility and product containment follow from the remaining lemmas in [F4]. If $j<0$, the extended stage and its map to $K$ are identified with $K$ and its identity, so the image is the whole group. This justifies the definition and its stated properties. [F3, F4, step 2.1] ∎

### Scope
The external construction is not reconstructed here. No completeness, boundedness, associated-graded identification or injectivity of a stage-to-$K$ map is asserted by this definition.


## Full faithfulness of the perfect triangulated quotient

[Open item](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) · level 11


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and $T=X\setminus U$, the actual restriction induces a fully faithful triangulated functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U).$$
The quotient inverts precisely maps whose restriction to $U$ is invertible.

### Facts & Assumptions
**Given:** The actual enhanced restriction and its ordinary homotopy functor. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Verify fullness and faithfulness, without assuming essential surjectivity.

[A1] Choice is inherited when invoking the actual restriction and kernel interface in [F1] and the supplied enhanced perfect categories. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) identifies the kernel and the denominator class $S$ consisting of maps whose cone is supported on $T$.

[F2] [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) supplies the ordinary Verdier quotient as $S^{-1}h\mathrm{Perf}(X)$, roofs for restricted maps, and the equalizer property for maps with identical restriction.

### Proof
1.1 Since restriction kills the kernel, it factors through the Verdier quotient. Given a morphism $b:j^*E\to j^*F$, [F2] gives perfect $Q$ and $c:Q\to E$, $a:Q\to F$ with $c\in S$ and $b=(j^*a)(j^*c)^{-1}$. Thus the quotient roof $E\xleftarrow{c}Q\xrightarrow{a}F$ maps to $b$, proving fullness on all object pairs. [A1, F1, F2]

2.1 Every quotient morphism is a roof $(c,a)$ as in step 1.1. If its restriction is zero, then $j^*a=0$ because $j^*c$ is invertible. The equalizer property in [F2], applied to $a$ and the zero map, gives $d:Q'\to Q$ with $d\in S$ and $ad=0$. Refining the roof by $d$ identifies it with the zero roof in the quotient. Hence the induced map on each abelian Hom group has zero kernel and is injective. Along with fullness this proves the Statement for the functor induced by actual restriction. [F1, F2, step 1.1] ∎


## Every open perfect complex is a retract of a restriction

[Open item](item-lem-author-50b5133c29cc-klocal-retract-density) · level 12


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs and $U\subseteq X$ quasi-compact open with complement $T$. Every perfect object on $U$ is a direct summand of the restriction of a perfect object on $X$. Consequently the functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U)$$
is an equivalence after idempotent completion.

### Facts & Assumptions
**Given:** A perfect object $F$ on $U$. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Prove density up to retracts with no assertion that $F$ itself extends.

[A1] Choice is inherited when invoking the full-faithfulness and idempotent-completeness interfaces in [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) gives the classical Euler extension criterion and $[F[1]]=-[F]$.

[F2] [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) gives full faithfulness of the actual quotient functor. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) gives idempotent completeness of the target and its homotopy category.

### Proof
1.1 In the source-side Euler group of [F1], $[F\oplus F[1]]=0$. The zero class belongs to the image of restriction from $X$, so [F1] gives perfect $E$ on $X$ with $j^*E\simeq F\oplus F[1]$ in the ordinary derived category. The canonical inclusion and projection exhibit $F$ as a summand of $j^*E$. No equality with the currently defined $K_0$ is used. [F1, given]

2.1 A fully faithful functor extends fully faithfully to idempotent completions: on a retract of $A$ determined by an idempotent $e$, and a retract of $B$ determined by $f$, its Hom group is the subgroup of maps $u:A\to B$ satisfying $u=fue$, which full faithfulness identifies. By step 1.1 every target object is a retract of an image object, so the extension is essentially surjective. The target is already idempotent complete by [F2]. This proves the stated equivalence after idempotent completion. [A1, F2, step 1.1] ∎


## The actual enhanced restriction sequence and its K fiber

[Open item](item-lem-author-50b5133c29cc-klocal-enhanced-localization) · level 13


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and closed complement $T$, the actual sequence of essentially small stable categories
$$\mathrm{Perf}_T(X)\longrightarrow\mathrm{Perf}(X)\xrightarrow{j^*}\mathrm{Perf}(U)$$
is exact: the induced enhanced Verdier quotient becomes equivalent to $\mathrm{Perf}(U)$ after idempotent completion. Applying the supplied nonconnective functor gives a natural fiber sequence $K_T(X)\to K(X)\to K(U)$, in all integer homotopy degrees.

### Facts & Assumptions
**Given:** The stated schemes and actual enhanced inclusion and restriction, with their zero composite. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Apply the precise categorical localization criterion, then the chosen nonconnective functor.

[A1] Choice is inherited when invoking the actual enhanced sequence in [F1], the quotient comparison in [F2], and the specified nonconnective K-theory interface in [F3]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) supplies the actual exact functors, full inclusion and nullhomotopy. [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small equivalent models and idempotent completeness.

[F2] [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) and [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density) establish the induced triangulated quotient equivalence after completion.

[F3] [thm-author-50b5133c29cc-klocal-categorical-localizing-input](item-thm-author-50b5133c29cc-klocal-categorical-localizing-input) imports BGT's enhanced criterion and the localizing property of the same $\mathbb K$ used in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

### Proof
1.1 Use equivalent small models, or the equivalent essentially small domain fixed by the supplied K interface. Apply BGT Proposition 5.15 with $\kappa=\omega$ to the actual sequence in [F1]. All categories are stable and therefore admit finite colimits; all functors are exact and preserve them. The composite is zero, the first arrow is fully faithful, and the triangulated quotient is an equivalence after idempotent completion by [F2]. Thus BGT yields the enhanced exact sequence and the claimed completion equivalence for its actual quotient functor. The use of homotopy categories is legitimate because an actual exact restriction functor was specified before applying the criterion. [A1, F1, F2, F3]

2.1 By [F3], applying $\mathbb K$ yields a cofiber sequence, hence a fiber sequence in spectra. Its terms and maps are exactly $K_T(X)$, $K(X)$ and $K(U)$ by their supplied definitions. The construction is natural for restriction diagrams preserving the indicated supports, because quotient, $U_{\mathrm{loc}}$, and its mapping-spectrum description are functorial on the actual diagrams. No connective truncation is performed, so the fiber sequence and its long exact sequence retain all integer groups. [F1, F3, step 1.1] ∎


## Perfect K theory localization and open excision

[Open item](item-prop-perfect-k-localization-input) · level 14

### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be a quasi-compact quasi-separated scheme and $U\subseteq X$ a quasi-compact open with closed complement $T$. For the specified nonconnective perfect-complex K-theory there is a natural fiber sequence
$$K_T(X)\longrightarrow K(X)\longrightarrow K(U).$$
For every cover $X=U\cup V$ by quasi-compact opens, the restriction square is homotopy cartesian, equivalently
$$K(X)\xrightarrow{\sim}K(U)\times_{K(U\cap V)}K(V).$$
Thus K-theory has open-cover Mayer–Vietoris (and the corresponding finite quasi-compact-open covering form by iteration). If $T$ is closed with quasi-compact complement and $T\subseteq W\subseteq X$ with $W$ quasi-compact open, restriction gives the natural support excision equivalence $K_T(X)\simeq K_T(W)$, compatible with the support-to-global and restriction maps. All these assertions use the nonconnective spectra and their groups in every integer degree, without a regularity, field or resolution-property assumption.

### Statement references
[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization)

[lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence)

### Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The schemes, opens and closed supports in the Statement, with the supplied essentially small sheaf-derived perfect categories and nonconnective functor.

**Goal:** Deduce localization, Mayer–Vietoris and open excision in exactly that model.

[F1] [lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization) proves the actual enhanced quotient exactness and resulting K fiber sequence, using [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel), [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) and [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density).

[F2] [lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence) gives the actual support restriction equivalence and compatibility with global restriction.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent pullbacks and stable fiber/cofiber sequences. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) identifies the K functor and all integer groups.

### Proof
1.1 The localization sequence is [F1] applied to $j:U\hookrightarrow X$ and its full kernel $\mathrm{Perf}_T(X)$. This identifies the category-defined $K_T(X)$ with the actual fiber, without assuming that identification in its definition or comparing with a different K-theory model. [F1, F3]

2.1 For a two-open cover $X=U\cup V$, quasi-separatedness makes $U\cap V$ quasi-compact, so [F1] applies both to $U\subseteq X$ and $U\cap V\subseteq V$. Put $T=X\setminus U$, a closed subset of $X$ contained in $V$. Their fiber terms are $K_T(X)$ and $K_T(V)$, and [F2] identifies the induced map between these fibers with an equivalence. The coherent restriction square therefore has equivalent horizontal fibers. To check it is cartesian, put $P=K(U)\times_{K(U\cap V)}K(V)$. The induced map $K(X)\to P$ lies over $K(U)$; its fiber map over that base is exactly $K_T(X)\to K_T(V)$ because pullbacks commute. Thus its map on fibers is an equivalence and its map on bases is the identity. The long exact sequences of spectrum homotopy groups give isomorphisms $\pi_iK(X)\to\pi_iP$ for all integers $i$, hence an equivalence of spectra. This proves Mayer–Vietoris. Repeated binary covering decompositions give the finite covering form. [F1, F2, F3, step 1.1]

3.1 For the stated support excision take $W$ in [F2]. Its support equivalence is induced by actual restriction and is compatible with inclusions. Because $X\setminus T$ is quasi-compact, so is $W\setminus T=W\cap(X\setminus T)$ by quasi-separatedness; hence both support terms are also the fibers in step 1.1 with their natural maps. This proves the entire interface, with every original qcqs, closed-support and quasi-compact-open condition retained. [F1, F2, F3, step 1.1, step 2.1] ∎
