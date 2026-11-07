---
id: thm-product-cm-determinant-tensors-are-absolute
kind: theorem
title: Product CM determinant tensors are absolute
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- thm-classification-of-connected-covering-spaces
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- thm-rational-riemann-form-makes-complex-torus-projective
- thm-projectively-embedded-complex-torus-has-an-abelian-variety-model
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
- lem-av7-finite-morphism-projective-over-projective-base
- lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set
- cor-segre-veronese-embedding
- cor-quasi-finite-locus-open-finite-type-algebra
- thm-proper-quasi-finite-is-finite
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-finite-birational-to-normal-is-isomorphism
- thm-jacobian-criterion-smooth-morphism
- thm-holomorphic-implicit-function-theorem
- thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
- def-axiom-of-choice
- def-dependent-choice
- thm-abelian-variety-dual-and-polarization
- lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle
- lem-embedded-analytic-torus-operation-graphs-are-algebraic
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- thm-liouville-bounded-entire-function
- lem-invariant-differentials-of-a-group-scheme
- thm-global-functions-proper-integral-variety
- thm-first-hypercohomology-spectral-sequence
- lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- cor-kunneth-over-a-field
- thm-noetherian-topological-space-dimension-vanishing
- lem-de-rham-integration-respects-wedge-and-cup-in-cohomology
- lem-product-point-determinant-classes-are-algebraic
- lem-arith-theta-extension-splitting-and-isotropic-descent
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- lem-arith-finite-cartier-duality-and-exactness
- thm-first-chern-class-classifies-complex-line-bundles
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: P. Deligne, Hodge Cycles on Abelian Varieties, Example 2.1(a) and Lemma 4.5
    url: https://www.jmilne.org/math/Documents/Deligne82.pdf
    locator: 'Printed pp. 15 and 30–31, read: algebraic cycles are absolute and product-point determinant classes are algebraic. Printed pp. 8–10, read: de Rham, Betti and étale comparison and Chern-class compatibility. The specific tensor comparison proof is reconstructed below.'
  - title: B. Edixhoven, G. van der Geer and B. Moonen, Abelian Varieties
    url: https://www.van-der-geer.nl/~gerard/AV.pdf
    locator: 'Proposition 11.16, Proposition 11.20 and Corollary 11.22, printed pp. 165–168, read: Poincaré/Cartier character and theta commutator compatibility.'
verification: {}
---

## Statement

Assume AC and DC. Let $B/\mathbb C$ be an abelian variety of dimension $m$, let $E$ be a number field, and let $M\subset E$ be a full integral lattice. Set $A=B\otimes_{\mathbb Z}M$ and $V=H^1(A,\mathbb Q)$ with its rational $E$-action. For $m>0$, regard $D=\bigwedge_E^{2m}V$ as a rational subspace of $\bigwedge_{\mathbb Q}^{2m}V$ via the separable determinant embedding. For $m=0$, put $D=\mathbb Q\cdot1$; it is the trace image of $\bigwedge_E^0(0)=E$, not an embedding of the full $E$-space. Then every element of $D(m)$ is an absolute Hodge tensor in the first-cohomology de Rham, Betti and finite-adelic étale realizations. No higher-degree étale comparison or general absolute-Hodge theorem is asserted.

## Facts & Assumptions

**Given:** AC, DC and the abelian variety, field, lattice, product and determinant embedding in the Statement.

[F1] A complex abelian variety is a torus with universal covering vector space and full lattice, functorially in homomorphisms; connected covers of a locally simply connected space are classified by subgroups of its fundamental group ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[thm-classification-of-connected-covering-spaces]]).

[F2] An ample line bundle on a smooth projective complex variety gives a positive closed real $(1,1)$ form whose de Rham class is integral; a positive rational Riemann form makes a complex torus projective and a projectively embedded torus has an abelian-variety model ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[thm-rational-riemann-form-makes-complex-torus-projective]], [[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]]).

[F3] Holomorphic group homomorphisms of complex abelian varieties are algebraic; a finite map to a projective base has projective source ([[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]], [[lem-av7-finite-morphism-projective-over-projective-base]]).

[F4] The reduced projective closure of a compact connected holomorphically embedded projective manifold is integral and has exactly its complex point set; Segre embeddings make projective products projective ([[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]], [[cor-segre-veronese-embedding]]).

[F5] The quasi-finite locus is open, proper quasi-finite maps are finite, finite separable extensions are simple, and finite birational maps to normal integral schemes are isomorphisms ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]], [[lem-finite-birational-to-normal-is-isomorphism]]).

[F6] The holomorphic implicit function theorem and algebraic Jacobian criterion identify local analytic and algebraic étale behaviour; finite étale covers of a connected scheme are classified by finite continuous actions of its étale fundamental group ([[thm-holomorphic-implicit-function-theorem]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]).

[F7] The degree-zero rigidified Picard functor is represented by a dual abelian variety of the same dimension, and an ample line bundle induces an isogeny to that dual ([[thm-abelian-variety-dual-and-polarization]]).

[F8] A complex abelian variety analytifies to a complex torus $V/\Lambda$; an ample line bundle gives a positive closed real $(1,1)$ form with integral cohomology class ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[lem-smooth-projective-analytification-has-rational-kahler-polarization]]).

[F9] A positive integral Riemann form gives the explicit Appell–Humbert factors, and a positive tensor power of the resulting bundle embeds the torus; the embedded torus image and holomorphic group isomorphism are algebraic ([[lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle]], [[thm-rational-riemann-form-makes-complex-torus-projective]], [[lem-embedded-analytic-torus-operation-graphs-are-algebraic]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

[F10] On a compact Kähler manifold, $H^1(\mathcal O)$ is the space of harmonic $(0,1)$ classes; bounded entire functions are constant ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]], [[thm-liouville-bounded-entire-function]]).

[F11] Invariant differentials trivialize the cotangent bundle of a group scheme; global functions on a proper geometrically integral variety are the base field ([[lem-invariant-differentials-of-a-group-scheme]], [[thm-global-functions-proper-integral-variety]]).

[F12] The first hypercohomology spectral sequence has $E_1^{p,q}=H^q(\Omega^p)$ and is natural under DC; on locally contractible metric spaces the cohomology of the constant sheaf is singular cohomology ([[thm-first-hypercohomology-spectral-sequence]], [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]).

[F13] Quasi-coherent cohomology on a separated scheme is computed by finite affine Čech covers, complexes over a field satisfy Künneth, and sheaf cohomology on a Noetherian space of dimension $g$ vanishes above degree $g$ ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[cor-kunneth-over-a-field]], [[thm-noetherian-topological-space-dimension-vanishing]]).

[F14] The de Rham integration comparison respects wedge and cup products ([[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]]).

[F15] The product determinant subspace is a rational span of pullbacks of point classes under algebraic homomorphisms. ([[lem-product-point-determinant-classes-are-algebraic]]).

[F16] Theta groups are central extensions whose commutator is the scalar obtained from translation trivializations. ([[lem-arith-theta-extension-splitting-and-isotropic-descent]]).

[F17] The dual abelian variety and normalized Poincaré bundle have the all-test universal property. ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]]).

[F18] Finite commutative group schemes have Cartier duals and the canonical perfect evaluation pairing. ([[lem-arith-finite-cartier-duality-and-exactness]]).

[F19] The first Chern class is natural for complex line bundles and identifies their isomorphism classes with degree-two integral cohomology. ([[thm-first-chern-class-classifies-complex-line-bundles]]).

## Proof

**Proof technique:** reconstruct first-degree finite-cover and de Rham comparisons, calculate the polarization tensor, and reduce product determinants to its powers.

1.1 Fix the abelian variety $B$ from the Statement. The following finite-cover calculation applies to any complex abelian variety, including all conjugates of $B$. Temporary symbols in each construction are local to that construction. [given, construct]

2.1 By [F1], $A^{\mathrm{an}}=V/\Lambda$ with $V$ contractible. Every connected finite topological cover is the quotient $V/H\to V/\Lambda$ for a finite-index subgroup $H\subseteq\Lambda$, by [F1]. To algebraize it, use [F2] to choose a positive closed $(1,1)$ form $\omega$ on $A^{\mathrm{an}}$ whose cohomology class is integral. Average its translates over the compact real torus $V/\Lambda$, using normalized Lebesgue measure on a fundamental parallelepiped. The average $\bar\omega$ is translation-invariant, positive, closed and of type $(1,1)$. Each translation is smoothly homotopic to the identity, so $[\bar\omega]=[\omega]$. The invariant form is a constant alternating form $\psi$ on $V_\mathbb R$; its values on lattice pairs are the integral periods of $[\omega]$ on the corresponding two-dimensional subtori, so $\psi(\Lambda,\Lambda)\subseteq\mathbb Z$. Positivity gives $\psi(Jv,Jw)=\psi(v,w)$ and $\psi(v,Jv)>0$. Its restriction to $H$ is an integral positive Riemann form. [F1, F2, given, choose, construct, algebra, step 1.1]

2.2 Let $Y\to A$ be a connected finite étale cover. It is smooth and projective by [F3]. Its analytification is a finite topological cover by the local implicit theorem in [F6] and properness. It is connected: otherwise its compact analytic connected components are finitely many disjoint projectively embedded complex manifolds. By [F4], each is the complete complex point set of a closed algebraic subvariety. These disjoint closed subvarieties cover every complex point of reduced $Y$, hence cover $Y$ scheme-theoretically; more than one would contradict connectedness. The same reasoning applies componentwise to an arbitrary finite étale cover. [F3, F4, F6, given, construct, algebra, step 1.1]

3.1 By [F2], the torus $V/H$ has a holomorphic projective embedding and hence an abelian-variety model $B$. The natural quotient $V/H\to V/\Lambda$ is a holomorphic group homomorphism, so [F3] algebraizes it to $q:B\to A$. It is proper and has finite complex fibres, because analytically it is a finite covering. The non-quasi-finite locus is closed by [F5] and has no complex point, hence is empty; [F5] makes $q$ finite. Its analytic differential is invertible at every complex point, so the algebraic differential is invertible there. The algebraic Jacobian criterion in [F6] gives an étale neighbourhood of every complex point; the non-étale locus is closed and has no complex point, so $q$ is finite étale. Thus every connected finite topological cover of $A^{\mathrm{an}}$ is the analytification of a finite étale cover. Finite disjoint unions give essential surjectivity for all finite covers. [F2, F3, F5, F6, given, step 2.1, construct, algebra, step 1.1]

4.1 Let $Y,Z$ be smooth projective complex varieties, with $Y$ connected, and let $h:Y^{\mathrm{an}}\to Z^{\mathrm{an}}$ be holomorphic. Its graph is a compact connected holomorphically embedded manifold in a product of projective spaces. By [F4] its reduced algebraic closure $G$ has precisely that graph as complex points. The projection $G\to Y$ is proper and bijective on complex points. As in step 3.1 it is quasi-finite everywhere and hence finite by [F5]. Its function-field extension is separable in characteristic zero; a primitive element and a nonzero discriminant show that a degree greater than one would give a fibre with more than one complex point. Thus it is finite birational, and the smooth integral target $Y$ is normal; [F5] makes the projection an isomorphism. The second projection therefore algebraizes $h$ uniquely. A continuous map over $A^{\mathrm{an}}$ between analytic finite covers is locally a composite of local inverse charts of the covers, so it is holomorphic. Applying this graph argument componentwise proves that analytification is full; equality of algebraic maps can be checked on complex points, so it is faithful. [F4, F5, F6, given, step 2.2, step 3.1, construct, algebra, step 1.1]

5.1 Steps 3.1 and 4.1 give the equivalence of finite-cover categories. It respects the fibre over the identity and is natural in $A$ because analytification and pullback are functorial. By [F1], the topological fundamental group is $\Lambda$; by [F6], finite étale covers are finite continuous sets for $\pi_1^{\mathrm{et}}$. Comparing automorphisms of the common fibre functor gives $\pi_1^{\mathrm{et}}(A,0)\cong\widehat\Lambda$. Continuous homomorphisms to a finite abelian group are therefore $\operatorname{Hom}(\Lambda,G)$, which is the degree-one singular cohomology of a connected torus with constant coefficients: a $1$-cocycle records its additive holonomy on loops, and every homomorphism is realized on the standard circle-product cell complex. For $g=0$, both categories have only finite disjoint unions of points and both groups are zero. [F1, F6, given, step 3.1, step 4.1, construct, algebra, step 1.1]

6.1 Again write $A=B$ temporarily. The following calculation constructs the filtered algebraic de Rham–Betti comparison and exterior description in all degrees, naturally under algebraic homomorphisms and applicable to every conjugate. [given, step 5.1, construct]

7.1 By [F7], the rigidified degree-zero Picard functor is represented by an abelian variety $\widehat A$ of dimension $g=\dim A$. A first-order deformation of the trivial rigidified line bundle over $\mathbb C[\varepsilon]/(\varepsilon^2)$ has transition functions $1+\varepsilon f_{ij}$ on an affine cover; the cocycle and change-of-trivialization equations are exactly the additive Čech $1$-cocycle and coboundary equations. The rigidification removes pullback of a line bundle from the base, which is trivial on the local dual-number scheme. Thus the tangent space at the identity of the represented Picard functor is $H^1(A,\mathcal O_A)$. Such a first-order deformation has trivial special fibre and hence lies in the degree-zero subfunctor. Therefore $H^1(A,\mathcal O_A)$ has dimension $g$. The same transition calculation in holomorphic charts identifies analytic first-order line-bundle deformations with $H^1(A^{\mathrm{an}},\mathcal O)$, and analytification sends the algebraic cocycle to the identical holomorphic cocycle. [F7, given, construct, algebra, step 6.1]

7.2 By [F8], identify $A^{\mathrm{an}}$ with $V/\Lambda$ and choose an ample bundle with positive closed form $\omega$ representing an integral class. Average $\omega$ over translations of the compact real torus, using normalized Lebesgue measure on a lattice parallelepiped. The average is a translation-invariant positive closed $(1,1)$ form in the same cohomology class because every translation is homotopic to the identity. Its constant alternating form $\psi$ on $V_\mathbb R$ has integral lattice periods, as those periods evaluate the integral class on the corresponding two-dimensional subtori. Thus $\psi$ is a positive integral Riemann form. By [F9], its explicit semicharacter factors define a holomorphic line bundle $L_0$ and some $L_0^{\otimes m}$ has a projective embedding. The embedding identifies its image with an algebraic abelian variety by [F9], and the induced holomorphic group isomorphism from the original $A$ is algebraic by [F9]. Hence the embedding is an algebraic closed immersion of $A$, and $L=L_0^{\otimes m}$ is the analytification of the algebraic ample bundle obtained by pulling back $\mathcal O(1)$. [F8, F9, given, choose, construct, algebra, step 6.1]

8.1 Let $H(v,w)=\psi(v,Jw)-i\psi(v,w)$, complex-linear in the first variable. With the factors of [F9], translation by $x\in V$ changes the factors of $L$ by the constant multiplier $e^{m\pi H(x,\lambda)}$ at $\lambda\in\Lambda$. Thus the analytic first-order deformation $t_{\varepsilon v}^*L\otimes L^{-1}$ is represented on the universal cover by the additive factor cocycle $\lambda\mapsto m\pi H(v,\lambda)$. If its class in $H^1(A^{\mathrm{an}},\mathcal O)$ were zero, the deformation would admit a global holomorphic trivialization; pulling it to $V$ gives an entire function $F$ with $F(z+\lambda)-F(z)=m\pi H(v,\lambda)$. Every derivative of $F$ is $\Lambda$-periodic, hence bounded on $V$ by compactness of a fundamental parallelepiped, and is constant by [F10] applied on complex lines. Thus $F$ is affine complex-linear. Its linear part and $m\pi H(v,-)$ agree on the real-spanning lattice and hence on $V_\mathbb R$, but the former is complex-linear and the latter conjugate-linear. Both can agree only when $H(v,-)=0$, and positivity of $H$ forces $v=0$. Hence the derivative of the analytic Mumford map $x\mapsto t_x^*L\otimes L^{-1}$ into $H^1(A^{\mathrm{an}},\mathcal O)$ is injective. [F9, F10, given, step 7.2, construct, algebra, step 6.1]

9.1 The isogeny $\varphi_L:A\to\widehat A$ from [F7] has invertible differential in characteristic zero. Its derivative followed by the algebraic-to-analytic map of step 7.1 is the analytic derivative computed in step 8.1. Therefore the comparison map is injective on the $g$-dimensional algebraic source. The target also has dimension $g$: on the flat translation-invariant Kähler torus, [F10] identifies $H^1(\mathcal O)$ with harmonic $(0,1)$ forms, and Fourier expansion on the real torus shows that only the zero-frequency constant $(0,1)$ forms are harmonic. Thus the injective map is an isomorphism. Naturality follows from functoriality of analytification and pullback on Čech cocycles. The point abelian variety has both groups zero. [F7, F10, given, step 7.1, step 7.2, step 8.1, algebra, step 6.1]

10.1 By [F11], invariant algebraic differentials trivialize $\Omega^1_A$ as $\mathcal O_A\otimes V^*$, where $V$ is the tangent space at the identity, and exterior powers trivialize $\Omega^p_A$. Since $H^0(A,\mathcal O_A)=\mathbb C$ by [F11], all global algebraic $p$-forms are invariant. Analytically, the coefficients of any holomorphic $p$-form in the constant coordinates on $V$ are $\Lambda$-periodic entire functions and are constant by [F10]. Hence analytification identifies $H^0(A,\Omega_A^p)$ with the holomorphic global $p$-forms for every $p$, and all these forms are closed. The same invariant basis identifies $H^1(A,\Omega_A^1)$ with $H^1(A,\mathcal O_A)\otimes V^*$ and its analytic counterpart similarly. Step 9.1 therefore makes their comparison an isomorphism. [F10, F11, given, step 9.1, construct, algebra, step 6.1]

11.1 Apply [F12] to the algebraic and holomorphic de Rham complexes. On the compact analytic Kähler torus, [F10] says the holomorphic Hodge-to-de Rham spectral sequence degenerates at $E_1$. Therefore the analytic $d_1:H^1(\mathcal O)\to H^1(\Omega^1)$ is zero. The comparison square commutes, and step 10.1 identifies the target, so the algebraic $d_1$ is zero as well. The only later differential leaving $E_2^{0,1}$ is $d_2$ to $E_2^{2,0}$. By step 10.1, global $1$-forms are closed and algebraic global $2$-forms compare injectively, so $E_2^{2,0}$ compares injectively to its analytic counterpart. Analytic degeneration makes the analytic $d_2$ zero, hence the algebraic $d_2$ is zero. There are no further outgoing differentials in nonnegative bidegrees. [F10, F12, given, step 10.1, algebra, step 6.1]

12.1 Since global functions are constant and global $1$-forms are closed, [F12] now gives a short exact sequence $$0\longrightarrow H^0(A,\Omega_A^1)\longrightarrow H^1_{\mathrm{dR}}(A/\mathbb C)\longrightarrow H^1(A,\mathcal O_A)\longrightarrow0,$$ and the analogous analytic sequence. The comparison maps on both end terms are isomorphisms by steps 9.1 and 10.1, so the middle map is an isomorphism by a direct diagram chase. Locally on a complex ball, radial integration contracts the positive-degree holomorphic de Rham complex: for a holomorphic $p$-form use $K\omega(z)=\int_0^1t^{p-1}\iota_{\mathrm{rad}}\omega(tz)\,dt$ and verify $dK+Kd=1$ in positive degree. Thus the holomorphic de Rham complex resolves the constant sheaf $\mathbb C$; by [F12] its hypercohomology is singular cohomology. This identifies the middle analytic term with $H^1(A^{\mathrm{an}},\mathbb C)$ and proves the degree-one comparison. It respects the $F^1$ subspace of global $1$-forms and is natural under algebraic homomorphisms because analytification and all constructions commute with pullback. The dimension-zero case is immediate. [F11, F12, given, step 9.1, step 10.1, step 11.1, construct, algebra, step 6.1]

13.1 Put $k=\mathbb C$, $d=2g$, and $H=H^*_{\mathrm{dR}}(A/\mathbb C)$. A finite affine Čech cover computes the hypercohomology of $\Omega_A^\bullet$ columnwise by [F13]. Since $A$ has dimension $g$, [F13] gives $H^q(A,\Omega_A^p)=0$ for $q>g$, while $\Omega_A^p=0$ for $p>g$; the spectral sequence of [F12] therefore makes $H^i=0$ for $i>2g$. Global functions are constant by [F11], so $H^0=\mathbb C$. To compare products, use product affine covers on $A\times A$: the differential-form complex is the tensor product of the pulled-back complexes, and the Čech shuffle and Alexander–Whitney maps identify its total complex with the tensor product of the two Čech–de Rham complexes. Their finite degree diagonals satisfy [F13], giving $H^*_{\mathrm{dR}}(A\times A)\cong H\otimes H$. Pullback by the diagonal and by the commutative group law supplies a connected graded-commutative, graded-cocommutative Hopf algebra structure with the Koszul signs. Step 12.1 and the real-torus calculation give $\dim_\mathbb C H^1=2g$. [F11, F12, F13, given, step 12.1, construct, algebra, step 6.1]

14.1 Connectedness gives $H^0=k1$, and the degree-one component of the coproduct has only bidegrees $(1,0)$ and $(0,1)$. The counit identities therefore make every $p\in H^1$ primitive: $\Delta p=p\otimes1+1\otimes p$. Graded commutativity and characteristic zero give $pq=-qp$ and $p^2=0$, so multiplication defines a graded Hopf map $\bigwedge H^1\to H$. For $d=0$ the top-degree bound makes $H=k$, so assume $d>0$. [given, step 13.1, construct, algebra, step 6.1]

15.1 Choose a basis $p_1,\ldots,p_d$ of $H^1$. For each $i$ let $\phi_i:H\to k$ be the dual coordinate on $H^1$ and zero on all other degrees, and define $\delta_i=(\phi_i\otimes\operatorname{id})\Delta$. It lowers degree by one and satisfies $\delta_i(p_j)=\delta_{ij}$. Because $\phi_i$ vanishes on products of two positive-degree elements, it is an infinitesimal character: $\phi_i(xy)=\phi_i(x)\epsilon(y)+\epsilon(x)\phi_i(y)$. Applying this identity to the bialgebra coproduct proves the graded Leibniz rule $\delta_i(xy)=\delta_i(x)y+(-1)^{\deg x}x\delta_i(y)$. Coassociativity and graded cocommutativity give $\delta_i\delta_j=-\delta_j\delta_i$; in particular $2\delta_i^2=0$, so $\delta_i^2=0$. [given, step 14.1, choose, construct, algebra, step 6.1]

16.1 Put $K=\bigcap_i\ker\delta_i$. For each homogeneous $x$, the identity $$x=p_i\delta_i x+(x-p_i\delta_i x)$$ decomposes it into a term divisible by $p_i$ and a term killed by $\delta_i$, since $\delta_i(p_i)=1$ and $\delta_i^2=0$. If $x$ is already killed by $\delta_j$ for $j\ne i$, the anticommutation relations show that both terms remain killed by $\delta_j$. Iterating over $i$ expresses every element of $H$ as a finite sum of products $p_{i_1}\cdots p_{i_r}y$ with $y\in K$. [given, step 15.1, construct, algebra, step 6.1]

17.1 If $0\ne y\in K$ has positive degree, then $p_1\cdots p_dy\ne0$: applying $\delta_d\cdots\delta_1$ to that product gives $\pm y$, because all $\delta_i y$ vanish. But its degree exceeds $d$, contradicting the top-degree bound. Hence $K=H^0=k1$. Step 16.1 now makes the exterior multiplication map surjective. Its basis monomials are linearly independent: applying an ordered product of the appropriate $\delta_i$ and then the counit extracts the corresponding coefficient. Thus the map is an isomorphism. It is natural because it is the multiplication map on the canonical primitive subspace $H^1$, and it respects coproduct, counit and antipode on generators. [given, step 14.1, step 15.1, step 16.1, algebra, step 6.1]

18.1 The degree-one algebraic de Rham–Betti comparison of step 12.1 is an isomorphism, and by [F14] the natural comparison respects products. The analytic cohomology ring of the real torus $A^{\mathrm{an}}$ is the exterior algebra on $H^1$, by the circle calculation and the ordinary product Künneth formula. Step 17.1 makes the algebraic de Rham ring the exterior algebra on its degree-one part, so the comparison is an isomorphism in every degree. It preserves the Hodge filtrations because analytification respects the filtration by holomorphic degree. Conversely the analytic Hodge filtration on a flat torus is spanned by products containing the requisite number of global holomorphic $1$-forms; step 12.1 identifies those with the algebraic $F^1$ subspace, so every analytic filtered class is the image of an algebraic filtered class. Thus the isomorphism is filtered. All constructions are natural in algebraic homomorphisms. [F8, F10, F14, given, step 12.1, step 17.1, construct, algebra, step 6.1]

19.1 Choose the ample algebraic line bundle $L$ constructed in step 7.2 from explicit Appell–Humbert factors, and let $\rho:B\to B^\vee$ be its polarization. Its analytification has those factors for a Hermitian form $H$ whose imaginary part $\psi_L$ is its integral Riemann form. The de Rham first Chern class is represented by the Čech–de Rham cocycle $d\log g_{ij}$ of algebraic transition functions. Analytification sends it to the identical holomorphic cocycle; by the exponential sequence and the argument principle its Betti class is the alternating lattice form $\psi_L$. The exterior and comparison calculation above identifies this with a rational tensor in $\bigwedge^2H^1(B,\mathbb Q)(1)$. The construction commutes with pullback and all field automorphisms because the transition functions and $d\log$ are algebraic. [F9, F19, given, step 7.2, step 18.1, construct, algebra]

20.1 For $x,y\in B[n]$, choose algebraic theta lifts $\varphi:L^{\otimes n}\to t_x^*L^{\otimes n}$ and $\psi:L^{\otimes n}\to t_y^*L^{\otimes n}$. They exist because $\varphi_{L^{\otimes n}}(x)=n\rho(x)=0$. The normalized Poincaré bundle pulled back by $(1,n\rho)$ is the Mumford bundle $Q=m^*L^{\otimes n}\otimes p_1^*(L^{\otimes n})^{-1}\otimes p_2^*(L^{\otimes n})^{-1}$. The isomorphism $\psi$ trivializes its slice at $y$. The canonical kernel action on this trivialization is evaluation of the Cartier character at $x$; in the Mumford presentation it sends $\psi$ to $(t_y^*\varphi)\psi\varphi^{-1}$. Comparing it with $t_x^*\psi$ proves that the theta commutator equals $e_{n\rho}(x,y)$. Functoriality of Cartier characters for the composition $n\rho=\rho\circ[n]$ identifies this restriction with $e_n(x,\rho y)$. This is a direct comparison of the two translation trivializations; the scalar convention is fixed by their displayed order. [F16, F17, F18, given, step 19.1, construct, algebra]

21.1 In the Appell–Humbert model $B^{an}=V/\Lambda$, write $x=a/n$ and $y=b/n$ with $a,b\in\Lambda$. Multiplying the holomorphic theta lifts of the two translations in opposite orders gives commutator $$\exp\!\big(\pi n(H(x,y)-H(y,x))\big)=\exp(2\pi i\psi_L(a,b)/n).$$ The semicharacter terms cancel. Any two holomorphic lifts of one translation differ by a nowhere-zero holomorphic function on compact $B^{an}$ and hence by a constant, so the algebraic and analytic commutators coincide. The finite-cover comparison above identifies $B[n]$ with $\Lambda/n\Lambda$; passing through the roots of unity and all $n$ therefore identifies the Cartier/Tate pairing $e_n(x,\rho y)$ with the finite-adelic scalar extension of $\psi_L$. Naturality of the Poincaré and Cartier constructions under field automorphisms makes the same statement hold for every conjugate polarization. [F9, given, step 20.1, construct, algebra]

22.1 The de Rham and finite-adelic realization tensors of $\psi_L$ therefore become the same rational Betti Riemann form after every field automorphism. Since $L$ remains algebraic and ample after conjugation, this tensor is always of Hodge type $(0,0)$. Thus $\psi_L$ is absolute, and algebraic homomorphisms, finite tensor operations and rational linear combinations preserve this property. If $\dim B=m$, the point class of $B$ is a rational multiple of $\psi_L^m$: both are nonzero rational classes in its one-dimensional top Betti cohomology, and the exterior comparison above identifies their tensor realizations. By [F15], every product-point determinant class is a rational combination of pullbacks of that point class under algebraic homomorphisms. It is therefore absolute. The case $m=0$ is the unit tensor. [given, step 21.1, F15, construct, algebra] ∎
