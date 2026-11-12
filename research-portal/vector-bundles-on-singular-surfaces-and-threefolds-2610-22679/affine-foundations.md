---
title: Affine bundles and normal geometry
description: Establish the scheme conventions, module–bundle correspondence,
  stable classes, determinants and normal-extension tools used by the article.
  Connect affine curves and residue fields to the later support arguments.
status: published
dependency_level: 0
---

**Purpose:** Establish the scheme conventions, module–bundle correspondence, stable classes, determinants and normal-extension tools used by the article. Connect affine curves and residue fields to the later support arguments.

## Article scheme conventions

[Open item](item-def-article-conventions) · level 0


### Definition
Fix a base field $k$, assumed algebraically closed unless a statement specifies otherwise: every nonconstant polynomial in $k[t]$ has a root in $k$. A $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; a morphism of $k$-schemes commutes with these structure morphisms.

Write $\mathrm{Sch}_k$ for the category whose objects are quasi-compact, quasi-separated $k$-schemes and whose morphisms are $k$-morphisms, with the usual identities and composition of scheme morphisms. Categories may have a proper class of objects. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that the intersection of any two affine open subschemes is quasi-compact. The opposite category $\mathrm{Sch}_k^{\mathrm{op}}$ has the same objects and reverses all arrows, with identities unchanged and composition reversed. A functor $F:\mathrm{Sch}_k^{\mathrm{op}}\to\mathcal C$, for a category $\mathcal C$, is contravariant on $\mathrm{Sch}_k$: a $k$-morphism $f:X\to Y$ induces $F(f):F(Y)\to F(X)$, with $F(\mathrm{id}_X)=\mathrm{id}_{F(X)}$ and $F(g\circ f)=F(f)\circ F(g)$ for composable $f:X\to Y$ and $g:Y\to Z$.

In the article, an affine $k$-scheme $\operatorname{Spec}A$ is assumed to be of finite type over $k$, meaning that its coordinate $k$-algebra $A$ is generated as a $k$-algebra by finitely many elements. An irreducible closed subset is a nonempty closed subset that is not the union of two proper closed subsets. The dimension $\dim X$ of a scheme is the supremum of the lengths $n$ of chains $Z_0\subsetneq\cdots\subsetneq Z_n$ of irreducible closed subsets of its underlying topological space; a one-member chain has length zero, unbounded lengths give $+\infty$, and $\dim\varnothing=-\infty$.

A vector bundle $E$ on $X$ is a finite locally free $\mathcal O_X$-module: each point has an open neighbourhood $U$ with $E|_U\cong\mathcal O_U^r$ for some nonnegative integer $r$. For $x\in X$, write $R_x=\mathcal O_{X,x}$ for the local ring of germs of regular functions, $\mathfrak m_x$ for its maximal ideal, $\kappa(x)=R_x/\mathfrak m_x$ for its residue field, and $E_x$ for the $R_x$-module of germs of sections of $E$. Regard $\kappa(x)$ as an $R_x$-module through the quotient map. The fibre is the $\kappa(x)$-vector space $E(x)=E_x\otimes_{R_x}\kappa(x)$, with scalar action $\lambda(e\otimes a)=e\otimes\lambda a$. Its rank is the well-defined locally constant function $x\mapsto\dim_{\kappa(x)}E(x)$, where finite vector-space dimension counts the elements of a finite basis; the rank may vary between connected components. Having rank $r$ means that this function is constantly $r$, equivalently that the bundle is locally isomorphic everywhere to $\mathcal O_X^r$. When $\dim X=d$ is a nonnegative integer, critical rank means constant rank $d$.

### Justification
The definitions of a scheme over a base and of its morphisms are those of [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The two compactness conditions are those of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme); they select objects of the category and do not require schemes to be separated. Identity maps and composites of $k$-morphisms again commute with the structure maps. Their associative composition and identity laws are inherited from scheme morphisms, giving a category in the sense of [math:def-category](https://alphabetamath.cc/item/def-category). Reversing identities and composition defines its opposite as in [math:def-opposite-category](https://alphabetamath.cc/item/def-opposite-category), and the stated identity and reversed-composition laws are exactly the contravariant functor axioms of [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor).

The base-field and affine finite-type conventions are taken from the article, p. 3, Notation and conventions; its p. 1 introduction motivates the comparison of rank with dimension. The displayed scheme-category notation here distinguishes the ordinary category from its opposite explicitly. Finite generation, irreducibility and chain dimension are defined inline. These conventions impose finite type on the article's affine schemes, rather than on all objects of $\mathrm{Sch}_k$. The critical-rank convention compares two nonnegative integers and makes no splitting or classification assertion.

The local free charts, passage from a chart to $E_x\cong R_x^r$, and well-defined locally constant chart rank are supplied by [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The residue field and quotient map are those of [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point); the module tensor product is that of [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations). To check the fibre formula, fix one chart of rank $r$ at $x$. Apply [math:cor-tensor-product-with-a-quotient-ring](https://alphabetamath.cc/item/cor-tensor-product-with-a-quotient-ring) to the commutative local ring $R_x$, its ideal $\mathfrak m_x$, and the module $E_x$: it identifies $E_x\otimes_{R_x}\kappa(x)$ with $E_x/\mathfrak m_xE_x$ as a $\kappa(x)$-module, and supplies the displayed scalar action. The chart identifies this quotient with $R_x^r/\mathfrak m_xR_x^r$. Coordinatewise reduction $q:R_x^r\to\kappa(x)^r$ is an $R_x$-module homomorphism, since addition and the quotient scalar action are componentwise; it is onto by taking finitely many representatives. Its kernel is exactly $\mathfrak m_xR_x^r$: every finite sum of ideal multiples has all coordinates in $\mathfrak m_x$, and any such vector $(a_1,\ldots,a_r)$ equals the finite sum $\sum_{i=1}^r a_i e_i$ of ideal multiples of the coordinate vectors. Apply [math:thm-first-isomorphism-theorem-modules](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-modules) to $q$: its image is all of $\kappa(x)^r$, so it gives the $R_x$-module isomorphism $\bar q:R_x^r/\mathfrak m_xR_x^r\to\kappa(x)^r$, with $\bar q(v+\mathfrak m_xR_x^r)=q(v)$. For $\lambda=a+\mathfrak m_x\in\kappa(x)$, the quotient action is $\lambda(v+\mathfrak m_xR_x^r)=av+\mathfrak m_xR_x^r$; applying $\bar q$ gives $q(av)=\lambda q(v)$ coordinatewise. Thus this isomorphism is also $\kappa(x)$-linear. The standard coordinate vectors form a basis, so the finite dimension defined by [math:def-dimension](https://alphabetamath.cc/item/def-dimension) is $r$, also for $r=0$ with the empty basis. This proves that fibre dimension equals chart rank at every point. The supplied chart-rank well-definedness and local constancy therefore apply to the fibre formula and give the constant-rank equivalence. No choice of charts or bases over all points at once is required.


## Affine bundles and finite projective modules

[Open item](item-lem-affine-bundle-module-interface) · level 0


### Statement
Assume the Axiom of Choice. For a commutative ring $A$, associated sheaf and global sections restrict to quasi-inverse equivalences between finite projective $A$-modules and finite locally free $\mathcal O_{\operatorname{Spec}A}$-modules. These equivalences preserve rank, finite direct sums, tensor products and duals. Every short exact sequence of vector bundles on an affine scheme splits.

Here a **finite projective module** is a finitely generated module $P$ with the lifting property for maps from $P$ through surjective module homomorphisms. A **vector bundle** means a finite locally free sheaf: each point has a neighbourhood on which it is isomorphic to a finite direct sum of copies of the structure sheaf. Its rank at a point is the number of copies there; the published definition establishes that this number is well-defined. The rank of a finite projective module at a prime $\mathfrak p$ is the rank of its free localization $P_{\mathfrak p}$. The duals are $P^\vee=\operatorname{Hom}_A(P,A)$ and $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$.

### Facts & Assumptions

**Given:** A commutative ring $A$, $X=\operatorname{Spec}A$, and the Axiom of Choice.

**Goal:** Establish the stated restricted equivalence, compatibility with the indicated operations, and splitting.

[F1] Associated sheaf and global sections are quasi-inverse equivalences between $A$-modules and quasi-coherent sheaves on $X$; finite locally free sheaves are quasi-coherent ([math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence), [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)).

[F2] The sets $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ form a basis; $X$ is compact. A finite family $D(f_i)$ covers $X$ exactly when the $f_i$ generate the unit ideal. The same holds for any fixed positive powers of the $f_i$ ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact), [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)).

[F3] For an $A$-module $M$, the sections of $\widetilde M$ on $D(f)$ are $M_f$, naturally in $M$, and its stalk at $\mathfrak p$ is $M_{\mathfrak p}$ ([math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open), [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization)).

[F4] A projective module is a direct summand of a free module, and a short exact sequence with projective quotient splits. Under AC, a direct summand of a free module is projective ([math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F5] Internal Hom has sections $\mathcal Hom(E,F)(U)=\operatorname{Hom}_{\mathcal O_U}(E|_U,F|_U)$ with restriction of morphisms. The sheaf tensor product is the sheafification of $U\mapsto E(U)\otimes_{\mathcal O_X(U)}F(U)$. Module tensors use the additive and balanced generator relations and the scalar action $a(p\otimes q)=(ap)\otimes q=p\otimes(aq)$ over the commutative ring. For finite free modules the elementary basis tensors give $R^r\otimes_R R^s\cong R^{rs}$. A compatible morphism from the tensor presheaf to a sheaf extends uniquely to its sheafification ([math:def-sheaf-hom](https://alphabetamath.cc/item/def-sheaf-hom), [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product), [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations), [math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product), [math:cor-tensor-products-of-finite-free-modules-and-dimension](https://alphabetamath.cc/item/cor-tensor-products-of-finite-free-modules-and-dimension), [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)).

[F6] The localization construction supplies the structure sheaf $\mathcal O_X$, with $\mathcal O_X(D(f))=A_f$ and the canonical localization restrictions ([math:thm-structure-sheaf-affine-scheme](https://alphabetamath.cc/item/thm-structure-sheaf-affine-scheme), [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)).

[F7] Exactness of module sheaves means image sheaf equals kernel sheaf, and is equivalent to exactness on all stalks of the underlying abelian sheaves. A short exact sequence has zero terms at both ends ([math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves), [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)).

[F8] Under AC, a proper ideal of a nonzero commutative ring is contained in a maximal ideal; every maximal ideal is prime ([math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal), [math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)).

[F9] A multiplicative subset $S$ contains $1$ and is closed under products. The ring $S^{-1}A$ has fractions $a/s$, their usual sum and product, and every $s\in S$ becomes a unit with inverse $1/s$ ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). For this $S$, the module $S^{-1}M$ consists of fractions with $m/s=n/t$ exactly when $u(tm-sn)=0$ for some $u\in S$. Write $M_f$ for $S=\{1,f,f^2,\ldots\}$ and $M_{\mathfrak p}$ for $S=A\setminus\mathfrak p$. For modules, exactness means image equals kernel; short exactness also requires an injective first map and a surjective last map ([math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)).

[F11] A finite spanning list over a field contains a basis, obtained by retaining a vector precisely when it is outside the span of the previously retained vectors. Over a nonzero commutative ring, $R^a\cong R^b$ for finite $a,b$ implies $a=b$ ([math:lem-hh-finite-spanning-list-contains-a-basis](https://alphabetamath.cc/item/lem-hh-finite-spanning-list-contains-a-basis), [math:thm-nonzero-commutative-rings-have-invariant-basis-number](https://alphabetamath.cc/item/thm-nonzero-commutative-rings-have-invariant-basis-number)).

[F10] At a prime $\mathfrak p$, $A_{\mathfrak p}/\mathfrak p A_{\mathfrak p}$ is a field. An $m\times n$ matrix over a commutative ring $R$ is an array $B=(b_{ij})$ indexed by $0\le i<m$, $0\le j<n$; its columns are the corresponding coordinate vectors. It acts on $R^n$ by $(Bv)_i=\sum_{j<n}b_{ij}v_j$. A linear map between coordinate modules is represented uniquely by the matrix whose columns are the images of the standard basis vectors, since $v=\sum_{j<n}v_j\epsilon_j$. Matrix multiplication is $(BC)_{ij}=\sum_k b_{ik}c_{kj}$; expanding the finite sums shows that it represents composition. The identity matrix $I_n$ has diagonal entries $1$ and other entries $0$, and $\operatorname{diag}(I_r,0)$ has its first $r$ diagonal entries $1$ and all other entries $0$. A square matrix is invertible when it has a two-sided inverse. For $n\ge1$, its determinant is the finite Leibniz sum $\det(B)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}b_{\sigma(i),i}$, with $S_n$ the permutations of the $n$ indices and sign $(-1)$ to the number of inversions. A positive-sized square matrix over a commutative ring is invertible exactly when its determinant is a unit ([math:cor-residue-field-of-a-localisation-at-a-prime](https://alphabetamath.cc/item/cor-residue-field-of-a-localisation-at-a-prime), [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring), [math:def-determinant-of-a-square-matrix](https://alphabetamath.cc/item/def-determinant-of-a-square-matrix), [math:cor-square-matrix-invertible-iff-determinant-is-a-unit](https://alphabetamath.cc/item/cor-square-matrix-invertible-iff-determinant-is-a-unit)).

[F12] Rings and modules have the unital conventions of the published definitions. Module homomorphisms preserve addition and scalar multiplication; their kernels and images are the corresponding subsets. A generated submodule consists of finite linear combinations; finite generation means that a finite set generates, and a basis gives unique finite linear combinations. Thus $A^n$ is the coordinate module with its standard basis, including $A^0=0$. Finite direct sums are coordinate products with componentwise operations. For a submodule $N\le M$, $M/N$ consists of additive cosets with $a(m+N)=am+N$ ([math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules), [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel), [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules), [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)).

[F13] An $\mathcal O_X$-module is a sheaf of abelian groups whose sections are modules over the structure-sheaf sections and whose restriction maps respect these scalar actions; morphisms are sectionwise linear sheaf morphisms. Restriction to an open $U$ has the same sections on opens contained in $U$. The sheaf axiom includes the empty cover of the empty open and says that compatible local sections glue uniquely. A stalk consists of germs of sections near a point, two sections representing the same germ when they agree on a smaller neighbourhood ([math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space), [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace), [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space), [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)).

[F14] An affine scheme is a locally ringed space isomorphic to the spectrum with its structure sheaf. Associated sheaf denotes the sheaf extending the distinguished-open localization data, and quasi-coherence means being locally an associated module sheaf on affine opens. An equivalence consists of functors with a quasi-inverse and natural isomorphisms from the two composites to the identity functors; [F1] supplies these data for the associated-sheaf and global-sections functors ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme), [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme), [math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories)).

### Proof

**Proof technique:** direct; use finite principal covers and clear denominators.

1.1 First suppose $X$ is empty. If $A\ne0$, its proper ideal $(0)$ is contained in a maximal, hence prime, ideal by [F8], contradicting $X=\varnothing$. Thus $A=0$. A unital $A$-module has $m=1m=0m=0$, and the sheaf axiom on the empty open forces the only sheaf of modules on $X$ to be zero. All assertions, including the empty rank function, follow. Hence assume $X$ is nonempty below. [F8, given, F12, F13]

1.2 Conversely, let $P$ be finite projective. A finite generating surjection $q:A^n\to P$ has a section $s$ by its lifting property. The coordinate construction in [F10] represents $sq$ by a matrix $e$ with $e^2=e$, and $s$ identifies $P$ with its image. If $n=0$ the claim is immediate. Otherwise fix a prime $\mathfrak p$ and put $k=A_{\mathfrak p}/\mathfrak p A_{\mathfrak p}$, a field by [F10]. The idempotent $\bar e$ gives $k^n=\operatorname{im}\bar e\oplus\ker\bar e$: each $v=\bar e v+(v-\bar e v)$, and the intersection is zero. Select bases from the finite spanning lists $\bar e\epsilon_j$ and $(I-\bar e)\epsilon_j$ by successively retaining a vector precisely when it is outside the span of its predecessors. By [F11] these are bases of the two summands; their union is independent and spans by the displayed direct decomposition, hence is a basis of $k^n$. Invariant basis number [F11] gives exactly $n$ vectors in this union, with $r$ in the image. Lift the image basis to vectors $u_1,\ldots,u_r\in A_{\mathfrak p}^n$ and the kernel basis to $v_1,\ldots,v_{n-r}\in A_{\mathfrak p}^n$. Choose fraction representatives for every coordinate of these finitely many lifted vectors, and let $f_0\notin\mathfrak p$ be the product of their denominators. Each chosen denominator is invertible in $A_{f_0}$ by [F9], so these representatives define vectors over $A_{f_0}$ mapping to the chosen lifts over $A_{\mathfrak p}$. Form $T$ over $A_{f_0}$ with columns $eu_i$ followed by $(I-e)v_j$, using those representatives. The residue matrix $\overline T$ is invertible: its columns are the selected basis of $k^n$, and assigning to a vector its coordinates in that basis gives the inverse linear map and hence inverse matrix by [F10]. Its determinant is therefore a unit, and so nonzero, in the field $k$ by [F10]. The finite Leibniz formula in [F10] commutes with ring homomorphisms because they preserve finite sums, products, $1$ and $-1$. Thus $\det(\overline T)$ is the residue of $\det T$ under $A_{f_0}\to A_{\mathfrak p}\to k$, and the same compatibility holds on further localizing at $f$. Write $\det T=a/f_0^b$ in $A_{f_0}$. The residue-field formula in [F10] gives $a\notin\mathfrak p$. Put $f=f_0a$. Both $f_0$ and $a$ are units in $A_f$, so [F10] makes $T$ invertible over $A_f$. The identity $eT=T\operatorname{diag}(I_r,0)$ already holds over $A_{f_0}$ by the column formulas and $e^2=e$, hence also over $A_f$. Consequently $P_f=\operatorname{im}(e_f)\cong A_f^r$, including $r=0,n$. On every smaller distinguished open in $D(f)$ this basis localizes compatibly; [F3] and [F6] therefore identify $\widetilde P|_{D(f)}$ with $\mathcal O_X^r|_{D(f)}$. Hence $\widetilde P$ is finite locally free. [F2, F3, F6, F9, F10, F11, construct, F12, F13]

2.1 We record a finite-generation patching argument. If an $A$-module $M$ has $M_{f_i}$ finitely generated for a finite principal cover, choose finitely many elements of $M$ whose images generate each $M_{f_i}$: clear the denominators of local generators using [F9]. Let $N$ be the submodule they generate. For any $m\in M$, each $m/1$ lies in $N_{f_i}$, so the fraction relation gives some positive power $f_i^{n_i}m\in N$. By [F2] suitable coefficients give $1=\sum_i a_i f_i^{n_i}$, whence $m=\sum_i a_i f_i^{n_i}m\in N$. Thus $M$ is finitely generated. [F2, F9, construct, step 1.1, F12]

3.1 If, in addition, each $M_{f_i}$ is finite free, choose a surjection $q:A^n\to M$ using step 2.1 and put $K=\ker q$. Localization is exact, directly from [F9]: for an exact sequence $U\xrightarrow a V\xrightarrow b W$, if $b(v)/s=0$ then some $t\in S$ has $b(tv)=0$, so $tv=a(u)$ for some $u$ and $v/s=a(u)/(ts)$. This proves exactness at the middle term. Injectivity is preserved because $a(u)/s=0$ implies $a(tu)=0$ for some $t\in S$, whence $u/s=0$ when $a$ is injective; surjectivity is preserved by lifting a numerator. This argument applies to every multiplicative set $S$ and every module sequence. In particular $K_{f_i}=\ker(q_{f_i})$ and $q_{f_i}$ is surjective. Lifting the finitely many basis vectors of $M_{f_i}$ through $q_{f_i}$ gives a section; consequently $K_{f_i}$ is a direct summand of $A_{f_i}^n$ and is generated by the projections of the standard basis. Step 2.1 applied to $K$ shows that $K$ is finitely generated. Thus $M$ is finitely presented: there is an exact sequence $A^m\to A^n\xrightarrow q M\to0$ with $m,n$ finite. [F9, step 2.1, construct, F12]

4.1 A finite presentation also permits clearing denominators of maps: for any $A$-module $N$ and $f\in A$, every $A_f$-linear map $M_f\to N_f$ is $f^{-k}s_f$ for some $k\ge0$ and $A$-linear map $s:M\to N$. Indeed choose images in $N$ for the finitely many generators after clearing a common denominator; the finitely many generating relations vanish after localization, so the fraction relation [F9] allows multiplication of all chosen images by one further power of $f$ to make every relation vanish in $N$. This defines $s$. Moreover, if a map from the finitely generated module $M$ becomes zero after localization at $f$, a single power of $f$ annihilates that map: take a common power killing the images of its finite generating set. [F9, step 3.1, construct, F12]

5.1 For $M$ as in step 3.1, the localized surjection $q_{f_i}:A_{f_i}^n\to M_{f_i}$ has a section $t_i$. By step 4.1, after multiplying $t_i$ by a power of $f_i$ it is the localization of an $A$-linear map $s_i:M\to A^n$. Multiplying by a further power if necessary gives $q s_i=f_i^{N_i}\operatorname{id}_M$ as maps over $A$. Since the powers $f_i^{N_i}$ generate the unit ideal, choose $a_i$ with $\sum_i a_i f_i^{N_i}=1$. Then $s=\sum_i a_i s_i$ satisfies $q s=\operatorname{id}_M$. Thus $M$ is a direct summand of $A^n$, and is finite projective by [F4]. [F2, F4, step 3.1, step 4.1, F12]

6.1 Let $E$ be finite locally free. By [F1], $E\cong\widetilde M$ for $M=\Gamma(X,E)$. Refine its local free charts by distinguished opens and use compactness to obtain a finite cover $D(f_i)$ on which $E\cong\mathcal O_X^{r_i}$. Taking sections and using [F3] and [F6] gives $M_{f_i}\cong A_{f_i}^{r_i}$. Steps 3.1 and 5.1 show that $M$ is finite projective, including the finite-presentation assertion needed for the restriction of the equivalence. [F1, F2, F3, F6, step 3.1, step 5.1, F13, F14]

7.1 Steps 6.1 and 1.2 show that the quasi-inverse functors of [F1] take precisely the stated subcategories into one another, so their unit and counit restrict to a quasi-inverse equivalence. The localization $P_{\mathfrak p}$ is free by step 1.2, and [F3] identifies it with the stalk of $\widetilde P$; therefore its rank agrees with the bundle rank in the published definition. This also makes the module rank well-defined. [F1, F3, step 6.1, step 1.2, F14]

7.2 Let $0\to E'\to E\to E''\to0$ be a short exact sequence of vector bundles on $X$. By [F1] write it as associated sheaves of module maps $P'\to P\xrightarrow q P''$; faithfulness makes their composite zero. By [F7] the sequence is exact on stalks, identified naturally with prime localizations by [F3]. A module $H$ whose localization at every prime vanishes is zero: otherwise choose $0\ne h\in H$; its annihilator $I=\{a\in A:ah=0\}$ is a proper ideal, so [F8] gives a prime $\mathfrak p$ containing $I$. If $h/1=0$ in $H_{\mathfrak p}$, [F9] gives $s\notin\mathfrak p$ with $sh=0$, contradicting $s\in I$. The fraction proof of exactness of localization in step 3.1, applied to the short exact sequences defining kernels, images and quotients, shows that the kernel of the first map, the middle homology $\ker q/\operatorname{im}(P'\to P)$ and the cokernel of $q$ all have zero prime localizations. They therefore vanish, making $0\to P'\to P\to P''\to0$ short exact. By step 6.1, $P''$ is projective; [F4] gives a section of $q$. Its associated sheaf is a section of $E\to E''$, and the original sequence splits. [F1, F3, F4, F7, F8, F9, step 3.1, step 6.1, F12, F13]

8.1 For finite projective $P,Q$, construct the canonical sheaf maps $\widetilde P\oplus\widetilde Q\to\widetilde{P\oplus Q}$, $\widetilde P\otimes\widetilde Q\to\widetilde{P\otimes_A Q}$, and $\widetilde{P^\vee}\to\mathcal Hom(\widetilde P,\mathcal O_X)$. The finite direct sum is the sheaf of pairs, with componentwise restrictions. On distinguished opens, the tensor map sends $(p/f^a)\otimes(q/f^b)$ to $(p\otimes q)/f^{a+b}$; the defining relations and scalar action in [F5] make this well-defined. These pairings commute with localization restrictions. To extend them to an arbitrary open $U$, restrict two sections to a cover of $U$ by distinguished opens and apply the pairings there. The resulting sections agree on intersections, as can be checked after a further distinguished-open cover; locality and gluing in [F13] give a unique section on $U$. The same uniqueness proves bilinearity, balancing, compatibility with restrictions and independence of the cover. This defines the required morphism from the tensor presheaf, and the sheafification property in [F5] induces a map from the tensor sheaf. The dual map is evaluation: a localized functional acts on localized sections, compatibly with restriction. Use a common principal cover on which $P$ and $Q$ are finite free. The elementary-basis formula in [F5] identifies the tensor sheaf on a free chart with $\mathcal O_X^{rs}$ and identifies the module tensor there with $A_f^{rs}$: localization commutes with tensor by the inverse fraction formulas $(p\otimes q)/f^c\mapsto(p/f^c)\otimes(q/1)$ and the displayed tensor map. These are inverse on elementary tensors and respect the balanced relations. Finite sums are identified componentwise. For the dual, clearing denominators as in step 4.1 makes $(P^\vee)_f\to\operatorname{Hom}_{A_f}(P_f,A_f)$ surjective, and the final assertion of step 4.1 makes it injective. On a free chart, a morphism from $\mathcal O_X^r$ is specified by the images of its finitely many standard sections, so the internal Hom of [F5] is $\mathcal O_X^r$ and evaluation is the standard dual-basis identification, using [F6]. Thus all three maps are isomorphisms on an open cover. Their local inverses agree on overlaps because each is inverse to the same restricted map. For a section on any open, apply these inverses on its intersections with the cover and glue the images by [F13]. Uniqueness makes the resulting maps linear and compatible with restrictions and shows that their composites with the original maps are identities. They are therefore global inverses. Their targets are finite locally free, so step 6.1 and [F1] also show that the module sums, tensors and duals are finite projective. The inverse equivalence consequently preserves the same operations up to these canonical isomorphisms. [F1, F3, F5, F6, F9, step 3.1, step 4.1, step 6.1, step 1.2, step 7.1, F12, F13]

9.1 Steps 7.1, 8.1 and 7.2 prove all assertions. AC is assumed for the cited affine equivalence and associated-sheaf interfaces, the compactness and finite-cover results, prime containment in [F8], the structure-sheaf construction in [F6], and the cited projective-module characterization. All remaining selections in the local argument are finite. [F1, F2, F3, F4, F6, F8, step 7.1, step 8.1, step 7.2] ∎


## Finite global generation on an affine scheme

[Open item](item-lem-affine-coherent-global-generation) · level 0


### Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec}A$ be a noetherian affine scheme and let $\mathcal F$ be a coherent $\mathcal O_X$-module. There are finitely many global sections $s_1,\ldots,s_m$ such that the morphism $\mathcal O_X^m\to\mathcal F$ sending the standard basis to these sections is surjective. For every open subscheme $U\subseteq X$, its restriction $\mathcal O_U^m\to\mathcal F|_U$ is surjective; equivalently, the restricted sections generate $\mathcal F|_U$, whether or not $U$ is affine.

### Statement references
[math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)

[math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence)

### Facts & Assumptions
**Given:** The Axiom of Choice, a commutative ring $A$ with $1$, the noetherian affine scheme $X=\operatorname{Spec}A$, and a coherent $\mathcal O_X$-module $\mathcal F$. A morphism of sheaves is called surjective when every target germ has a preimage germ. A family of sections generates a module sheaf when its induced morphism from the corresponding finite free sheaf is surjective. Explicitly, $\mathcal O_X^m(V)=\mathcal O_X(V)^m$ for an open $V$, with componentwise restriction; the morphism specified by $s_1,\ldots,s_m$ sends $(a_1,\ldots,a_m)$ on $V$ to $\sum_j a_j(s_j|_V)$. Linearity and compatibility with restriction follow from the module-sheaf axioms.

**Goal:** Construct finitely many global generating sections and prove that their restrictions generate on every open subscheme.

[F1] A coherent module is quasi-coherent and of finite type. Quasi-coherence means that locally on affine opens the module sheaf is associated to a module. Under the Axiom of Choice, finite type provides an affine open cover on each member of which finitely many sections generate the restricted sheaf. [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme) [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme) [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

[F2] Under the Axiom of Choice, the canonical map $\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an isomorphism for quasi-coherent $\mathcal F$. The notation $\widetilde M$ denotes the associated module sheaf; for any $A$-module $M$ it has sections $M_f$ on $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, naturally in $M$ and restriction. [math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence) [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme) [math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open)

[F3] Distinguished opens form a basis of $X$, and $X$ is compact under the Axiom of Choice. If finitely many distinguished opens $D(h_i)$ cover $X$, with at least one member, then the $h_i$ generate the unit ideal: $1=\sum_i a_i h_i$ for some $a_i\in A$. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact) [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)

[F4] On an affine scheme, under the Axiom of Choice, a finite family of global sections of an associated module sheaf generates that sheaf exactly when the corresponding elements generate its module. This includes the empty family and the zero module. [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

[F5] An affine scheme carries its spectrum structure sheaf. A scheme is noetherian when it is locally noetherian and quasi-compact. An open subscheme $U\subseteq X$ is equipped with $\mathcal O_U=\mathcal O_X|_U$; modules and their morphisms have sectionwise module structures and linear maps compatible with restriction. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[F6] A germ at $x$ is the equivalence class of a section on a neighbourhood of $x$, with equality meaning agreement on a smaller neighbourhood. For an open $U\subseteq X$ and open $V\subseteq U$, $(\mathcal F|_U)(V)=\mathcal F(V)$; restriction of morphisms uses these same component maps. [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[F7] The localization map $A\to A_f$ identifies $\operatorname{Spec}(A_f)$ with the open subscheme $D(f)$, including its structure sheaf. On an affine open $W=\operatorname{Spec}C$ of $X$, $(\widetilde M)|_W\cong\widetilde{(C\otimes_A M)}$. For $C=A_f$, the canonical isomorphism $A_f\otimes_A M\cong M_f$ sends $(a/f^n)\otimes m$ to $am/f^n$. Thus $(\widetilde M)|_{D(f)}\cong\widetilde{M_f}$ as an associated module sheaf over $A_f$, compatibly with its global sections. The associated-sheaf comparison inherits AC. [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) [math:lem-associated-sheaf-restriction-affine-open](https://alphabetamath.cc/item/lem-associated-sheaf-restriction-affine-open) [math:thm-localisation-of-modules-is-tensor-product](https://alphabetamath.cc/item/thm-localisation-of-modules-is-tensor-product)

[F8] For an $A$-module $M$, $M_f$ is localization at $\{1,f,f^2,\ldots\}$: every element is $m/f^a$, sums and scalar multiples use fraction arithmetic, and $m/f^a=n/f^b$ exactly when $f^c(f^b m-f^a n)=0$ for some $c\geq0$. For a submodule $N\subseteq M$ the same criterion shows that the localization map $N_f\to M_f$ is injective, so we regard $N_f$ as its image, consisting of fractions with numerator in $N$. [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)

[F9] The sheaf axiom includes the empty cover of the empty open set; in particular a module sheaf has zero module of sections over the empty set. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

### Proof
**Proof technique:** Reduce local generation to generation of localised modules, clear denominators, and use a finite distinguished-open cover.

1.1 Put $M=\Gamma(X,\mathcal F)$. By [F1] and [F2], $\mathcal F\cong\widetilde M$. If $X$ is empty, then $M=0$ by [F9], so the empty family gives the required surjection; its restriction to every open is also surjective. Henceforth suppose $X$ is nonempty. Restriction to any open $U$ preserves stalks: at $x\in U$, a representative $(V,s)$ for a germ on $X$ restricts to $(V\cap U,s|_{V\cap U})$, and all open neighbourhoods inside $U$ are open in $X$. These operations are inverse on germ classes by [F6] and identify the restricted morphism's stalk map with the original one. They therefore preserve surjectivity, and the sectionwise definition of the free sheaf identifies $\mathcal O_X^m|_U$ with $\mathcal O_U^m$ by [F5]. [F1, F2, F5, F6, F9, given]

2.1 By [F1], $X$ is covered by open sets on each of which finitely many sections generate $\mathcal F$. Refine this cover by all distinguished opens contained in its members; these still cover $X$ by [F3]. Compactness gives a finite subcover $D(f_1),\ldots,D(f_r)$, where $r\geq1$. Restricting a generating morphism from a member of the original cover to a distinguished open contained in it preserves surjectivity by step 1.1. Thus each $\mathcal F|_{D(f_i)}$ has a finite generating family of sections. [F1, F3, step 1.1]

3.1 By [F2] and [F8], each section in the generating family on $D(f_i)$ is represented by a fraction $m_{ij}/f_i^{n_{ij}}$ with $m_{ij}\in M$ and $n_{ij}\geq0$. Here $D(f_i)$ is the affine scheme $\operatorname{Spec}(A_{f_i})$, and the restriction of $\mathcal F\cong\widetilde M$ to it is the associated sheaf of the $A_{f_i}$-module $M_{f_i}$ by [F7]. These identifications respect the sections in [F2], so [F4], applied over the ring $A_{f_i}$, says that these fractions generate $M_{f_i}$. Since $f_i$ is invertible in $A_{f_i}$, their numerators $m_{ij}/1$ also generate $M_{f_i}$. Let $N\subseteq M$ consist of all $A$-linear combinations of the finitely many $m_{ij}$; it is a submodule by the module axioms. Fraction arithmetic in [F8] then gives $N_{f_i}=M_{f_i}$ for every $i$, with $N_{f_i}$ viewed inside $M_{f_i}$. [F2, F4, F7, F8, step 2.1, construct, algebra]

4.1 Let $t\in M$. For each $i$, the equality $N_{f_i}=M_{f_i}$ gives $t/1=n_i/f_i^{a_i}$ for some $n_i\in N$ and $a_i\geq0$. By [F8], $f_i^{b_i}(f_i^{a_i}t-n_i)=0$ for some $b_i\geq0$, whence $f_i^{a_i+b_i}t=f_i^{b_i}n_i\in N$. Increasing the exponent if necessary gives $k_i\geq1$ with $f_i^{k_i}t\in N$. By primality, $D(f_i^{k_i})=D(f_i)$, so these opens cover $X$. Apply [F3] with $h_i=f_i^{k_i}$ (and $r\geq1$) to obtain $1=\sum_i c_i f_i^{k_i}$ for suitable $c_i\in A$. Consequently $t=\sum_i c_i f_i^{k_i}t\in N$. As $t$ was arbitrary, $M=N$. [F3, F8, step 2.1, step 3.1, algebra]

5.1 The numerators in step 3.1 are global sections of $\mathcal F$ under [F2]. Since they generate $M$ by step 4.1, [F4] gives a surjective morphism $\mathcal O_X^m\to\mathcal F$, with the sectionwise formula in the Given paragraph. For any open subscheme $U$, step 1.1 identifies the stalks of its restriction with the original stalk maps, so the restricted morphism $\mathcal O_U^m\to\mathcal F|_U$ is surjective and is induced by the restricted global sections. This proves both assertions, including for non-affine $U$. The noetherian hypothesis is retained but is not needed in the argument. AC is inherited from the affine associated-sheaf results, the finite-type and affine generation criteria, and spectrum compactness in [F1]–[F4] and [F7]; the explicit stalk comparison and fraction calculation need no additional choice. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 3.1, step 4.1] ∎


## Kernels of surjections of vector bundles

[Open item](item-lem-surjection-kernel-bundle) · level 0


### Statement
Let $X$ be a scheme and $f:E\to F$ a surjective morphism of finite locally free $\mathcal O_X$-modules. Then $f$ splits locally and $\ker f$ is finite locally free, with rank function $\operatorname{rank}E-\operatorname{rank}F$.

In particular, if $E$ has constant rank $r$ and $s:E\to\mathcal O_X$ is a morphism, let $I=\operatorname{im}s\subseteq\mathcal O_X$ and let $U=X\setminus V(I)$, where $V(I)$ is the closed subset defined locally by the coefficients of $s$. Then $\ker(s|_U)=(\ker s)|_U$ is a vector bundle of rank $r-1$ on $U$; if $r=0$, this assertion is understood on the empty set $U$.

### Facts & Assumptions
[F1] By [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank), a finite locally free module has, near each point, a finite free basis; its rank is independent of the chosen chart. A vector bundle here means a finite locally free $\mathcal O_X$-module.

[F2] By [math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves), kernels of module sheaves are computed sectionwise, while the image sheaf is the sheafification of the sectionwise image. These constructions carry their induced $\mathcal O_X$-module structures.

[F3] By [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise), exactness of sheaves of abelian groups can be checked on stalks. Applied to the underlying abelian sheaves, a morphism of module sheaves is surjective exactly when it is surjective on every stalk.

[F4] By [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$; on an affine chart $\operatorname{Spec}A$ with $x=\mathfrak p$, this is canonically $\operatorname{Frac}(A/\mathfrak p)$.

[F5] By [math:lem-hh-finite-spanning-list-contains-a-basis](https://alphabetamath.cc/item/lem-hh-finite-spanning-list-contains-a-basis), a finite spanning list over any field contains a basis, without a choice principle.

[F6] By [math:cor-square-matrix-invertible-iff-determinant-is-a-unit](https://alphabetamath.cc/item/cor-square-matrix-invertible-iff-determinant-is-a-unit), a positive-sized square matrix over a commutative ring is invertible exactly when its determinant is a unit.

[F7] On $\operatorname{Spec}A$, $V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$ by [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), and these sets are Zariski closed by [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms).

[F8] By [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme), $\Gamma(D(a),\mathcal O_X)=A_a$ on an affine chart $\operatorname{Spec}A$. In particular, the restriction of $a$ to $D(a)=\operatorname{Spec}A\setminus V((a))$ is a unit, with inverse $1/a$.

[F9] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme), a scheme is a locally ringed space in which each point has an open affine neighbourhood with its restricted structure sheaf.

[F10] By [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point), every point of a Zariski-open subset of an affine spectrum has a distinguished-open neighbourhood contained in that subset.

[F11] By [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion), $D(b)$ in $\operatorname{Spec}B$, with its restricted structure sheaf, is isomorphic to $\operatorname{Spec}(B_b)$ as a locally ringed space.

[F12] By [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space), module-sheaf morphisms are sectionwise linear and commute with restriction. Restriction to an open subset retains the same sections and maps on its open subsets. A local splitting of $f$ means a module-sheaf morphism $t$ on an open neighbourhood with $ft=\mathrm{id}$ there.

[F13] By [math:thm-any-two-finite-bases-have-the-same-size](https://alphabetamath.cc/item/thm-any-two-finite-bases-have-the-same-size), any two finite bases of a vector space over a field have the same number of elements. In particular, a basis extracted from a finite spanning list of $k^m$ has $m$ elements, by comparison with the standard coordinate basis.

### Proof
**Given:** A scheme $X$ and a surjection $f:E\to F$ as in the statement.

**Goal:** Construct local splittings and bases for the kernels, and apply the result to $s$ on $U$.

1.1 Fix $x\in X$. By [F1], choose trivialization opens for $E$ and $F$ containing $x$, and by [F9] choose an affine open $W=\operatorname{Spec}B$ containing $x$. Their intersection is open in $W$. By [F10], it contains a distinguished open $D(b)$ containing $x$; by [F11], this open, with its restricted structure sheaf, is the affine scheme $\operatorname{Spec}A$ for $A=B_b$. Restrict both frames to this common affine neighbourhood, with ranks $n$ and $m$. By [F12], the images of the frame vectors under $f$ have coefficients in $\Gamma(\operatorname{Spec}A,\mathcal O_X)=A$ by [F8] with the element $1$, and the same matrix describes $f$ on smaller opens by restriction. By [F3], the stalk map is surjective. Reducing its coefficients modulo $\mathfrak m_x$ preserves surjectivity: lift any vector over $\kappa(x)$ to $\mathcal O_{X,x}^m$ and then lift it through the stalk map. Thus the columns of its matrix over the field $\kappa(x)$ span $\kappa(x)^m$. For $m>0$, [F5] selects a sublist forming a basis, and [F13] shows that this sublist has $m$ columns; their square matrix is invertible, so [F6] gives a determinant nonzero in $\kappa(x)$. This is an $m\times m$ minor of the original matrix whose determinant $a\in A$ does not belong to the prime corresponding to $x$, by [F4]. On $D(a)$ that determinant is a unit by [F8], and the selected square submatrix has an inverse by [F6]. Permuting the basis of $E$ and applying this inverse in the selected coordinates gives a right inverse $t:F\to E$. For $m=0$, use the empty minor with determinant $1$ and the unique map $t:0\to E$; it is already a right inverse. In particular $m\le n$. [given, F1, F3, F4, F5, F6, F8, F9, F10, F11, F12, F13, construct]

2.1 On that neighbourhood, $E=\ker f\oplus t(F)$: every local section $e$ equals $(e-tf(e))+tf(e)$, and the intersection is zero since $ft$ is the identity. More explicitly, for each of the unselected basis vectors $e_j$, put $k_j=e_j-tf(e_j)$. These are kernel sections by [F2]. Their unselected coordinates are the corresponding standard coordinate vectors, because $t$ takes values in the selected coordinates. They are therefore independent. Every kernel section is a combination of the $k_j$: after subtracting the combination with its unselected coordinates, it is supported in the selected coordinates, where $f$ is invertible, and hence vanishes. These sectionwise formulas commute with restriction, so they give a sheaf basis of $\ker f$. Thus the kernel is finite locally free of rank $n-m$, and $t$ is the required local splitting. Since $x$ was arbitrary, the conclusion holds on $X$. [step 1.1, F1, F2, F12, algebra]

3.1 For $s:E\to\mathcal O_X$, the refinement using [F1], [F9], [F10] and [F11] in step 1.1 gives an affine trivializing neighbourhood $\operatorname{Spec}A$ at each point. By [F12] and [F8], write its coefficients as $a_1,\ldots,a_r\in A$. By [F2], its image sheaf is locally the ideal sheaf generated by these coefficients. A change of frame gives invertible linear combinations of the coefficients and therefore the same ideal sheaf; on overlaps the two sets of generators generate the same ideals of germs. Consequently the locally defined zero sets agree: at a point they say that every coefficient has zero image in $\kappa(x)$ by [F4]. Each local zero set is $V((a_1,\ldots,a_r))$, closed by [F7], so together they define the closed subset $V(I)$. Its complement on this chart is the union of the opens $D(a_i)$. On $D(a_i)$ the coefficient $a_i$ is a unit by [F8], and sending $1$ to $a_i^{-1}e_i$ is a local right inverse of $s$. Hence $s|_U$ is surjective by [F3]. Restriction to an open set preserves kernels, because kernels are computed sectionwise by [F2]. Applying steps 1.1 and 2.1 with target rank $1$ proves the stated rank and local freeness. If $r=0$, $I=0$ and $U$ is empty. [given, F1, F2, F3, F4, F7, F8, F9, F10, F11, F12, step 1.1, step 2.1, algebra] ∎


## Exterior powers and determinant of an algebraic bundle

[Open item](item-def-exterior-determinant-bundles) · level 0


### Definition

Let $X$ be a scheme, $E$ a locally free $\mathcal O_X$-module of constant finite rank $r\geq 0$, and $i\geq 0$ an integer. Here locally free of rank $r$ means that $X$ has an open cover on which $E$ is isomorphic to $\mathcal O_X^r$; such a sheaf is also called a rank-$r$ algebraic vector bundle.

For a commutative unital ring $R$ and any $R$-module $M$, define the tensor algebra $T_R(M)=\bigoplus_{n\geq0}M^{\otimes_R n}$, where $M^{\otimes_R0}=R$, $M^{\otimes_R1}=M$, and higher tensor powers are iterated module tensor products. The direct sum consists of sequences with finite support, with componentwise addition and scalar multiplication. Multiplication concatenates elementary tensors and extends bilinearly, using the canonical tensor associativity maps; multiplication by a degree-zero element is scalar multiplication, and $1_R$ in degree zero is the unit. Define $\Lambda_R(M)$ to be the graded quotient of $T_R(M)$ by the homogeneous two-sided ideal generated by $v\otimes v$ for $v\in M$; this ideal consists of finite sums of terms $a(v\otimes v)b$ with $a,b\in T_R(M)$. Write $\Lambda_R^i(M)$ for its degree-$i$ part and $v_1\wedge\cdots\wedge v_i$ for the class of an elementary tensor. This definition applies even when $M$ is not free.

For an open $U\subseteq X$, put $P_i(U)=\Lambda^i_{\mathcal O_X(U)}(E(U))$. For $V\subseteq U$, restrict coefficients and each tensor factor to $V$; these maps make $P_i$ a presheaf of modules over $\mathcal O_X$. Define $\Lambda^iE$ to be its sheafification, with addition and the $\mathcal O_X$-action induced locally from $P_i$. In particular, $\Lambda^0 E=\mathcal O_X$ canonically, and $\Lambda^1E=E$ canonically. Define the **determinant line bundle** by $\det E=\Lambda^r E$; a line bundle, or invertible sheaf, is a locally free module of rank one. Its isomorphism class is an element of $\operatorname{Pic}(X)$, the group of isomorphism classes of line bundles under tensor product.

The sheaf $\Lambda^iE$ is locally free of rank $\binom ri$, with the convention $\binom ri=0$ for $i>r$; hence it is zero for $i>r$. For every scheme morphism $f:Y\to X$, there is a canonical isomorphism $f^*(\Lambda^i E)\cong\Lambda^i(f^*E)$, natural in $E$ and compatible with composition of morphisms. In particular $f^*(\det E)\cong\det(f^*E)$. Here $f^*E=\mathcal O_Y\otimes_{f^{-1}\mathcal O_X}f^{-1}E$ is module pullback along the underlying morphism of ringed spaces, with scalar map $f^{-1}\mathcal O_X\to\mathcal O_Y$ induced by the scheme morphism.

### Definition references

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:thm-universal-property-of-module-tensor-products](https://alphabetamath.cc/item/thm-universal-property-of-module-tensor-products)

[math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product)

[math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)

[math:def-exterior-algebra-of-a-finite-free-module](https://alphabetamath.cc/item/def-exterior-algebra-of-a-finite-free-module)

[math:lem-exterior-algebra-basis-monomials](https://alphabetamath.cc/item/lem-exterior-algebra-basis-monomials)

[math:def-sheafification](https://alphabetamath.cc/item/def-sheafification)

[math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)

[math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:ex-pullback-free-module](https://alphabetamath.cc/item/ex-pullback-free-module)

### Facts & Assumptions

**Given:** A scheme $X$, a locally free $\mathcal O_X$-module $E$ of constant rank $r\geq0$, an integer $i\geq0$, and, when base change is considered, a scheme morphism $f:Y\to X$.

**Goal:** Justify the construction, its ranks, determinant, and base-change isomorphisms.

[F1] A rank-$r$ locally free module has open trivializations $E|_U\cong\mathcal O_U^r$. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F2] For a free module with ordered basis $e_1,\ldots,e_r$ over a commutative ring, the degree-$i$ exterior power has basis $e_{j_1}\wedge\cdots\wedge e_{j_i}$ for $1\leq j_1<\cdots<j_i\leq r$; the empty wedge is the degree-zero basis element. [math:def-exterior-algebra-of-a-finite-free-module](https://alphabetamath.cc/item/def-exterior-algebra-of-a-finite-free-module) [math:lem-exterior-algebra-basis-monomials](https://alphabetamath.cc/item/lem-exterior-algebra-basis-monomials)

[F3] Sheafification is the double plus construction and has its universal property for maps from a presheaf to a sheaf. Its sections are locally represented by sections of the original presheaf, by applying the local representation in each plus construction. [math:def-sheafification](https://alphabetamath.cc/item/def-sheafification) [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property) [math:def-presheaf-plus-construction](https://alphabetamath.cc/item/def-presheaf-plus-construction)

[F4] The Picard group consists of isomorphism classes of invertible sheaves under tensor product. [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[F5] A scheme is a locally ringed space locally isomorphic to affine schemes; a scheme morphism is a morphism of locally ringed spaces, hence in particular of ringed spaces. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[F6] For a morphism of ringed spaces, module pullback is $f^*G=\mathcal O_Y\otimes_{f^{-1}\mathcal O_X}f^{-1}G$, and $f^*(\mathcal O_X^n)\cong\mathcal O_Y^n$ canonically for every $n\geq0$. Apply this also to the restricted morphism $f^{-1}U\to U$ on a trivializing open $U$. [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) [math:ex-pullback-free-module](https://alphabetamath.cc/item/ex-pullback-free-module)

[F7] Module tensor products are generated by elementary tensors modulo additivity and balance relations, and balanced pairings induce unique homomorphisms. Over a commutative ring they have the module structure $a(m\otimes n)=(am)\otimes n=m\otimes(an)$ and the canonical associativity maps given by reparenthesizing elementary tensors. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) [math:thm-universal-property-of-module-tensor-products](https://alphabetamath.cc/item/thm-universal-property-of-module-tensor-products) [math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product) [math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)

[F8] An $\mathcal O_X$-module has section modules and scalar-compatible restriction maps. Compatible sections of a sheaf glue uniquely; in particular, restriction-compatible local module maps agreeing on overlaps glue by applying this axiom to the image of each section. [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[F9] For ringed-space morphisms $f:Y\to X$ and $g:Z\to Y$, the module pushforwards satisfy $(f\circ g)_*=f_*g_*$ and the module pullbacks admit a natural comparison isomorphism $c_G:g^*f^*G\xrightarrow{\sim}(f\circ g)^*G$. This imported premise and its precise scope are recorded in External input. [Stacks, Lemma 6.26.3](https://stacks.math.columbia.edu/tag/0097).

[F10] Module pullback is left adjoint to module pushforward: maps $h^*G\to H$ correspond naturally to maps $G\to h_*H$. Here $(h_*H)(U)=H(h^{-1}U)$ with scalars restricted through the structure map of $h$. Under this adjunction the identity of $h^*G$ corresponds to the unit $\eta_{h,G}:G\to h_*h^*G$, whose local tensor formula is $v\mapsto1\otimes v$. [math:thm-pullback-pushforward-module-adjunction](https://alphabetamath.cc/item/thm-pullback-pushforward-module-adjunction) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

### External input

Only [F9] is imported: [Stacks Lemma 6.26.3, Tag 0097](https://stacks.math.columbia.edu/tag/0097), applied to the underlying ringed spaces, gives the natural module-pullback composition isomorphism for every module sheaf $G$. Its short proof reduces to equality of module pushforwards and the adjoint-uniqueness argument in Lemma 6.21.6; this is the adjunction comparison, not a statement merely about tensor products over one ring. The stated hypotheses are only composability of ringed-space morphisms and a module sheaf on their target. No exactness or flatness is asserted. The precise statement, hypotheses and reading limits are in sources.references. The exterior-power construction, the normalization on frames using [F10], and the compatibility check below are locally authored arguments; no local proof of the general imported theorem is claimed.

### Justification

1.1 By [F7], concatenation on elementary tensors respects all tensor relations; reparenthesizing a triple concatenation gives the same elementary tensor, so the multiplication of $T_R(M)$ is associative with the stated unit. If $\varphi:R\to S$ is a ring map and $u:M\to N$ is additive with $u(am)=\varphi(a)u(m)$, applying $u$ to every tensor factor and $\varphi$ in degree zero respects additivity and balance: both ways of moving a scalar across a tensor sign map to moving its image in $S$. It therefore induces a graded algebra map carrying $v\otimes v$ to $u(v)\otimes u(v)$ and hence a map of the exterior quotients. These formulas preserve identities and composition. Applying them to restrictions gives the presheaf $P_i$ by [F8], and applying them to bundle maps gives functoriality. By [F3], its sheafification exists. Local representatives define addition and scalar multiplication on that sheaf: refine representatives to a common open cover, perform the operations there, and use [F8] to glue; refinements preserve the operations, so they are independent of representatives and satisfy the module axioms locally and hence globally. On a trivializing open $U$, every $E(V)$ with $V\subseteq U$ is free of rank $r$, and [F2] identifies $P_i|_U$ with the free sheaf having the increasing wedges as basis, compatibly with restrictions. Sheafification retains that sheaf by the universal property [F3]. There are $\binom ri$ increasing $i$-tuples, none for $i>r$, and one for $i=0$ or $i=r$. This proves the ranks and zero assertion; the empty wedge identifies $\Lambda^0E$ with $\mathcal O_X$. The degree-one quotient is unchanged, since the defining ideal is generated in degree two; thus $\Lambda^1E=E$ canonically. The top exterior power is a line, including for $r=0$, and gives the stated Picard class by [F4]. [given, F1, F2, F3, F4, F7, F8, algebra, construct]

2.1 By [F5], $f$ has the ringed-space structure needed in [F6]. On a trivializing open $U$, [F6] identifies the pullbacks of the basis of $E$ and of its increasing-wedge basis with bases on $f^{-1}U$. Send each pulled-back increasing wedge to the wedge of the pulled-back basis vectors. This is an isomorphism by [F2], including the zero free modules when $i>r$ and the empty wedge when $i=0$. Expanding wedges multilinearly shows that the matrix of an exterior-power map consists of the corresponding signed minors of the original matrix: repeated basis vectors vanish, and collecting the permutations of each increasing tuple gives its determinant coefficient. This applies to arbitrary bundle maps, using rectangular matrices when ranks differ, and in every characteristic. Pulling back coefficients gives exactly the minors of the pulled-back matrix. Hence the local isomorphisms agree under changes of frame and glue by [F8]; the same computation for arbitrary bundle maps proves naturality. For a further scheme morphism $g:Z\to Y$, use the full sheaf-pullback comparison $c_G:g^*f^*G\to(f\circ g)^*G$ from [F9]. Its normalization on frames follows from [F10]: the adjunction comparison is characterized by carrying the composite unit $G\xrightarrow{\eta_{f,G}}f_*f^*G\xrightarrow{f_*\eta_{g,f^*G}}f_*g_*g^*f^*G$ to $\eta_{f\circ g,G}$ after the pushforward equality in [F9]. Hence, on a trivializing open, $c_G$ sends the twice-pulled-back frame vector $1\otimes(1\otimes v)$ to the directly pulled-back frame vector $1\otimes v$. These vectors form bases by [F6], so this specifies the comparison there without assuming a formula for inverse-image composition. Write $b_f(G):f^*\Lambda^iG\to\Lambda^i f^*G$ for the already constructed wedge comparison. On $g^{-1}f^{-1}U$, the maps $\Lambda^i(c_E)\circ b_g(f^*E)\circ g^*b_f(E)$ and $b_{f\circ g}(E)\circ c_{\Lambda^iE}$, both from $g^*f^*\Lambda^iE$ to $\Lambda^i((f\circ g)^*E)$, send every twice-pulled-back increasing wedge to the same directly pulled-back wedge. This includes the empty wedge and the zero modules. They agree on a basis, hence on this open cover and globally by [F8]. For the identity morphism the canonical identification $\mathrm{id}^*G\cong G$ sends $a\otimes v$ to $av$, with inverse $v\mapsto1\otimes v$; the tensor relations in [F7] verify that these maps are inverse and the same basis check gives the identity wedge comparison. Taking $i=r$ gives the determinant assertion, with no flatness, characteristic, or positive-rank assumption. [given, F1, F2, F5, F6, F7, F8, F9, F10, step 1.1, algebra, construct] ∎


## Stable triviality and stable bundle equivalence

[Open item](item-def-stably-free-bundles) · level 0


### Definition
Let $X$ be a scheme, with structure sheaf $\mathcal O_X$. A vector bundle on $X$ means a locally free $\mathcal O_X$-module of finite rank. For a finite family $E_1,\ldots,E_m$ of $\mathcal O_X$-modules, define its direct sum by $(\bigoplus_{i=1}^m E_i)(U)=\prod_{i=1}^m E_i(U)$ for each open $U\subseteq X$, with componentwise restriction maps and module operations; for $m=0$ this is the zero sheaf. A morphism of $\mathcal O_X$-modules is a sheaf morphism linear on sections over every open set, and an isomorphism is such a morphism with a two-sided inverse. Direct sums of morphisms act componentwise. Write $\mathcal O_X^N$ for the direct sum of $N$ copies of the structure sheaf, with $\mathcal O_X^0=0$; these are the trivial bundles. Direct sums and isomorphisms below are taken as $\mathcal O_X$-modules.

Bundles $E$ and $F$ are **stably isomorphic** if, for some integer $N\geq 0$, there is an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. A bundle $E$ of constant rank $r\geq 0$ is **stably trivial** if, for some integer $N\geq 0$, $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. It is **trivial** if $E\cong\mathcal O_X^r$. Stable triviality is stable isomorphism to $\mathcal O_X^r$; the definition itself does not assert cancellation of the trivial summand.

### Definition references
[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

### Facts & Assumptions
[F1] A finite-rank locally free sheaf is locally isomorphic to a finite free sheaf, and its rank is independent of the chosen local chart. See [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank).

[F2] A scheme carries its structure sheaf, and an $\mathcal O_X$-module is a sheaf of modules whose scalar action respects restriction. Its morphisms are linear on sections and commute with restriction. See [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space).

### Justification
**Given:** A scheme $X$ and finite-rank vector bundles on $X$.

**Goal:** The displayed conditions are well-defined and stable isomorphism is an equivalence relation.

1.1 For the finite direct sum defined above, compatible local sections glue uniquely component by component because each $E_i$ is a sheaf. The module operations and restrictions satisfy the module-sheaf axioms componentwise. Componentwise maps, coordinate permutations and reassociations are linear and commute with restriction; their inverse maps are given componentwise or by inverse coordinate permutations and reassociations. Restricting a finite direct sum to an open set gives the direct sum of the restrictions. On the intersection of local trivializing neighbourhoods at any point, the direct sum of bundles with local ranks $r$ and $s$ is therefore isomorphic to $\mathcal O_X^{r+s}$ by concatenating coordinates. Thus the direct sums in the definition are bundles; their ranks and the stated constant rank $r$ are independent of the chosen charts by [F1]. [F1, F2, construct]

2.1 The identity isomorphism with $N=0$ gives reflexivity, and an isomorphism can be inverted, giving symmetry. If $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ and $F\oplus\mathcal O_X^M\cong G\oplus\mathcal O_X^M$, take the direct sum of the first isomorphism with the identity on $\mathcal O_X^M$ and of the second with the identity on $\mathcal O_X^N$, then compose them using the coordinate reassociation and permutation maps from step 1.1. This gives $E\oplus\mathcal O_X^{N+M}\cong G\oplus\mathcal O_X^{N+M}$, proving transitivity. Finally, concatenation gives $\mathcal O_X^r\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, so the stated form of stable triviality is exactly stable isomorphism to $\mathcal O_X^r$. [step 1.1, algebra] ∎

### Remarks
The article reports a nontrivial stably trivial rank $2$ bundle on a smooth complex affine fourfold, attributed to Mohan Kumar. This definition does not establish that example or a cancellation theorem.


## Normalization of an affine integral curve

[Open item](item-lem-affine-curve-normalization-interface) · level 0


### Statement
Assume the Axiom of Choice. Let $k$ be a perfect field and $T=\operatorname{Spec}A$ an integral affine curve of finite type over $k$: thus $A$ is a finitely generated $k$-algebra which is a domain of Krull dimension one. Let $K=\operatorname{Frac}(A)$ and let $B$ be the set of elements of $K$ integral over $A$, meaning roots of monic polynomials with coefficients in $A$. The normalization of $T$ is $\widetilde T=\operatorname{Spec}B$, with its morphism $\nu:\widetilde T\to T$ induced by inclusion. Then $\widetilde T$ is affine and smooth over $k$, and $\nu$ is finite. If $k$ is algebraically closed, every closed point of $T$ and $\widetilde T$ has residue field $k$, and the set of points in the fiber over each closed point of $T$ is nonempty and finite; each induced residue-field map in such a fiber is an isomorphism.

### Facts & Assumptions

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

**Goal:** Establish finiteness and smoothness of the normalization, then the asserted properties of its closed fibers when $k$ is algebraically closed.

[F1] The integral closure of a finite-type domain over a field in its fraction field is a finite module over that domain ([math:thm-integral-closure-finite-finite-type-domain-over-field](https://alphabetamath.cc/item/thm-integral-closure-finite-finite-type-domain-over-field)). Integral elements form a subring, and integrality is transitive ([math:cor-integral-elements-form-a-subring](https://alphabetamath.cc/item/cor-integral-elements-form-a-subring), [math:thm-transitivity-of-integrality](https://alphabetamath.cc/item/thm-transitivity-of-integrality)).

[F2] Assuming AC, an injective integral extension of nonzero rings preserves Krull dimension ([math:cor-dimension-preserved-by-integral-extensions](https://alphabetamath.cc/item/cor-dimension-preserved-by-integral-extensions)). A morphism with an affine cover of its target whose inverse images are affine with module-finite coordinate rings is finite ([math:lem-finite-morphism-affine](https://alphabetamath.cc/item/lem-finite-morphism-affine)).

[F3] Assuming AC, an integral separated finite-type one-dimensional normal scheme over a perfect field is smooth over that field. Normal means that each local ring is an integrally closed domain ([math:thm-normal-curve-is-nonsingular](https://alphabetamath.cc/item/thm-normal-curve-is-nonsingular)).

[F4] Assuming AC, a prime of a ring lifts to a prime of any integral extension containing it; for an integral extension, an upstairs prime is maximal exactly when its contraction is maximal ([math:thm-lying-over](https://alphabetamath.cc/item/thm-lying-over), [math:cor-contraction-of-maximal-ideals-integral-extension](https://alphabetamath.cc/item/cor-contraction-of-maximal-ideals-integral-extension)).

[F5] Over an algebraically closed field, every maximal ideal of a polynomial ring in finitely many variables is an evaluation ideal, with quotient canonically $k$ by evaluation ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). For finitely many pairwise comaximal ideals, the map to the product of their quotients is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

[F6] Perfect fields have every nonconstant irreducible polynomial separable; algebraically closed fields have a root for every nonconstant polynomial ([math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)). For a domain $R$, its fraction field consists of fractions $a/b$ with $b\ne0$ ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). All rings here are commutative with identity, and a domain is nonzero and has no zero divisors.

[F7] The affine scheme $\operatorname{Spec}R$ has points the prime ideals of $R$, and its local ring at $\mathfrak p$ is $R_{\mathfrak p}$; localization at $\mathfrak p$ means $(R\setminus\mathfrak p)^{-1}R$, whose elements are fractions $a/s$ with $s\notin\mathfrak p$ ([math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)). Its fraction relation is $a/s=a'/s'$ exactly when $u(as'-a' s)=0$ for some $u\notin\mathfrak p$, with the usual fraction addition and multiplication ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). A ring map $R\to S$ induces the map of affine schemes sending $\mathfrak q$ to its contraction; its local ring maps induce the residue-field maps. Under AC, closed points are exactly maximal ideals; $\kappa(\mathfrak p)=\operatorname{Frac}(R/\mathfrak p)$, and therefore $\kappa(\mathfrak m)=R/\mathfrak m$ at a maximal ideal. An affine scheme is integral exactly when its coordinate ring is a domain ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map), [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme), [math:thm-quotient-is-field-iff-ideal-maximal](https://alphabetamath.cc/item/thm-quotient-is-field-iff-ideal-maximal)). The set of points in a fiber means the inverse image of the point under this spectrum map.

[F8] A finite-type $k$-algebra is generated by finitely many elements as an algebra, equivalently is a quotient of a polynomial algebra in finitely many variables; a module-finite algebra is generated by finitely many elements as a module ([math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)). A morphism is finite type when it is locally finite type and quasi-compact, and affine schemes are quasi-compact under AC ([math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)). Over $\operatorname{Spec}k$, a single finite-type affine chart thus gives a finite-type scheme.

[F9] Every morphism between affine schemes is separated; in particular $\operatorname{Spec}R\to\operatorname{Spec}k$ is separated for every $k$-algebra $R$ ([math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)).

[F10] For an ideal $I$ of $R$, contraction gives an inclusion-preserving bijection from the primes of $R/I$ to the primes of $R$ containing $I$ ([math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)). The analogous inclusion-preserving correspondence holds for all ideals, so it preserves maximal ideals ([math:thm-correspondence-theorem-ideals](https://alphabetamath.cc/item/thm-correspondence-theorem-ideals)). A quotient by a maximal ideal is a field ([math:thm-quotient-is-field-iff-ideal-maximal](https://alphabetamath.cc/item/thm-quotient-is-field-iff-ideal-maximal)).

[F11] Krull dimension of a nonzero ring is the supremum of lengths of strict prime chains ([math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)). Scheme dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets of its underlying topological space. Under AC, those subsets of $\operatorname{Spec}R$ are exactly the $V(\mathfrak p)$ for prime ideals $\mathfrak p$, each with unique radical defining ideal $\mathfrak p$ ([math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)).

[F12] For a linear map with finite-dimensional domain, rank-nullity gives the dimension of the domain as the sum of kernel and image dimensions; in particular a surjection cannot increase dimension ([math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)).

[F13] For a finite-type scheme over a field, smoothness has its usual local standard smooth meaning, equivalently geometric regularity after every field extension, with AC assumed in this library interface ([math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)).

[A1] AC is the assertion that every family of nonempty sets has a choice function; here it is carried by the dimension, finite-morphism, normal-curve, lying-over, affine quasi-compactness, closed-point and irreducible-closed-subset interfaces ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

1.1 By [F1], $B$ is a subring of $K$ containing $A$ and a finite $A$-module. It is therefore a nonzero domain. Its fraction field is $K$: every fraction of elements of $B$ lies in $K$, and every fraction $a/b$ with $a,b\in A$ and $b\ne0$ is a fraction of elements of $B$, by [F6]. It is also a finite-type $k$-algebra, since a finite set of $A$-module generators generates it as an $A$-algebra and these generators together with finitely many $k$-algebra generators of $A$ generate $B$ over $k$. The inclusion $A\subseteq B$ is integral by the definition of $B$. By [F7] its spectrum and the morphism $\nu$ are the asserted affine constructions, and the one-affine-cover criterion in [F2] makes $\nu$ finite. By [F8], $\operatorname{Spec}B$ is finite type over $k$: its single affine chart is locally finite type and its source is quasi-compact. [F1, F2, F6, F7, F8, A1, given]

2.1 The ring $B$ is integrally closed in $K$: if $x\in K$ is integral over $B$, apply transitivity in [F1] to $A\subseteq B\subseteq B[x]$ to make $x$ integral over $A$, so $x\in B$. These are nonzero domain inclusions. First justify the fraction-field realization of the local rings. For a domain $R$ and a prime $\mathfrak p$, every element outside $\mathfrak p$ is nonzero. The fraction relation in [F7] therefore reduces to $as'=a' s$, which is also the equality criterion in $\operatorname{Frac}(R)$ by [F6] and that same localization relation. Consequently the map sending a fraction of $R_{\mathfrak p}$ to the same fraction in $\operatorname{Frac}(R)$ is well defined and injective. The fraction formulas in [F7] show that it respects addition, multiplication and identity. Its image is precisely the fractions with denominator outside $\mathfrak p$. Since it contains $R$ and is contained in $\operatorname{Frac}(R)$, its fraction field is $\operatorname{Frac}(R)$: each fraction of $R$ is a fraction of elements of this image, and each fraction of the image lies in $\operatorname{Frac}(R)$. Apply this to $R=B$, whose fraction field is $K$ by step 1.1. For any prime $\mathfrak q$ of $B$, the local ring $B_{\mathfrak q}$ of [F7] is thus a domain with fraction field $K$, and it is integrally closed in $K$. Indeed, if $x\in K$ satisfies $x^n+c_1x^{n-1}+\cdots+c_n=0$ with $c_i\in B_{\mathfrak q}$, choose a product $s\in B\setminus\mathfrak q$ of denominators of the finitely many $c_i$, so $sc_i\in B$. Multiplying the equation by $s^n$ gives a monic equation for $sx$ with coefficients $s^ic_i\in B$. Hence $sx\in B$ and $x\in B_{\mathfrak q}$. Every such local ring is a domain, being a subring of $K$, so $\operatorname{Spec}B$ is normal by [F3]. [F1, F3, F6, F7, step 1.1, algebra]

2.2 Suppose $k$ is algebraically closed. For either $R=A$ or $R=B$, [F8] supplies a presentation $R=P/I$ with $P=k[t_1,\ldots,t_N]$. If $\mathfrak m$ is maximal in $R$, its inverse image $M$ in $P$ is maximal by [F10]. By [F5], $P/M$ is canonically $k$ by evaluation. The map $(P/I)/\mathfrak m\to P/M$ sending the class of $p+I$ to $p+M$ is a well-defined bijective $k$-algebra map, so $R/\mathfrak m\cong k$. By [F7], closed points of $\operatorname{Spec}R$ are exactly these maximal ideals, and their residue fields are these quotients. All identifications respect the structure map from $k$. [F5, F7, F8, F10, A1, given, step 1.1]

3.1 By [F2], $\dim B=\dim A=1$. The correspondence in [F11] reverses strict inclusions: $\mathfrak p\subsetneq\mathfrak q$ gives $V(\mathfrak q)\subsetneq V(\mathfrak p)$, with strictness from uniqueness of the radical defining ideals, and every chain of irreducible closed subsets arises this way. Thus $\dim\operatorname{Spec}B=\dim B=1$. By [F7] and step 1.1 the scheme is integral and finite type over $k$. Applying [F9] to its structure morphism $\operatorname{Spec}B\to\operatorname{Spec}k$ supplies separatedness over the required base. It is normal by step 2.1. All hypotheses of [F3] now hold, so it is smooth over the perfect field $k$, in the sense of [F13]. [F2, F3, F7, F9, F11, F13, A1, given, step 1.1, step 2.1]

4.1 Let $\mathfrak m$ be a maximal ideal of $A$. By [F7], the points over it are precisely primes $\mathfrak q$ of $B$ with $\mathfrak q\cap A=\mathfrak m$. By [F4], at least one exists and all are maximal. Put $C=B/\mathfrak m B$. The images in $C$ of a finite $A$-module generating list for $B$ span it over $A/\mathfrak m=k$, since changing a coefficient by an element of $\mathfrak m$ changes the result by an element of $\mathfrak m B$; hence $C$ is a finite-dimensional $k$-vector space. By [F10], its primes correspond to primes $\mathfrak q$ of $B$ containing $\mathfrak m B$. For such a prime, its contraction to $A$ is a proper ideal containing the maximal ideal $\mathfrak m$, hence equals $\mathfrak m$; the converse follows directly by absorption. Thus these are exactly the fiber points, and all these quotient primes are maximal by the ideal correspondence in [F10]. Distinct maximal ideals $\mathfrak n_i$ of $C$ are pairwise comaximal: their sum properly contains either ideal and must be $C$. For any finite nonempty list of distinct such ideals, [F5] gives a $k$-linear surjection $C\to\prod_i C/\mathfrak n_i$. Each quotient is $k$ by step 2.2 applied to the corresponding maximal ideal of $B$, using the same explicit quotient-of-quotient map as there. Rank-nullity [F12] therefore gives $r\leq\dim_k C$. There cannot be $\dim_k C+1$ distinct fiber points, so the nonempty fiber is finite. By [F7] the induced map of residue fields is the $k$-algebra map $A/\mathfrak m\to B/\mathfrak q$; both are $k$ by step 2.2, so this map is the identity under their canonical $k$-algebra identifications. This proves all assertions. [F4, F5, F7, F10, F12, A1, step 1.1, step 2.2, algebra] ∎


## Residue fields and normalization point degrees

[Open item](item-lem-algebraically-closed-residue-fields) · level 0


### Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field. Every closed point of a finite-type $k$-scheme has residue field canonically equal to $k$ via its structure map. If $f:Y\to X$ is a finite surjective morphism between finite-type $k$-schemes, then the fiber over each closed point $x\in X$ is a nonempty finite set of closed points of $Y$. Each such point $y$ has residue field $k$, and its zero-cycle pushforward is $f_*[y]=[x]$.

Here a zero-cycle is a finite integral linear combination of closed points. For a finite morphism, the pushforward of a closed point is defined by $f_*[y]=[\kappa(y):\kappa(f(y))][f(y)]$; the field degree is finite. A finite morphism is one whose inverse image of every affine open $\operatorname{Spec}A$ is affine, say $\operatorname{Spec}B$, with $B$ a finite $A$-module. The degree is the dimension of $\kappa(y)$ as a vector space over $\kappa(f(y))$ through the induced residue-field map. The morphism $f$ is not required to commute with the two structure maps to $\operatorname{Spec}k$.

### Statement references
[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)

[math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

[F1] For algebraically closed $k$, every maximal ideal of $k[t_1,\ldots,t_n]$ is an evaluation ideal and has quotient $k$ via the coefficient map. [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)

[F2] For a finite family of pairwise comaximal ideals, the quotient map to the product of the quotient rings is surjective. [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)

[F3] A $k$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}k$; a $k$-morphism commutes with structure morphisms. For a finite-type $k$-scheme, every point has an affine open neighborhood $\operatorname{Spec}A$ with $A$ a finitely generated $k$-algebra, hence $A\cong k[t_1,\ldots,t_n]/I$. We use precisely these neighborhoods, rather than asserting finite generation for an arbitrary affine open. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F4] A point is closed if its singleton is closed. Under the assumed Axiom of Choice, closed points in an affine spectrum are exactly maximal ideals. At a prime $\mathfrak p$ of $A$, the residue field is $\kappa(\mathfrak p)=\operatorname{Frac}(A/\mathfrak p)$, in particular $A/\mathfrak p$ when $\mathfrak p$ is maximal. Choice is retained as the hypothesis of the supplied closed-point criterion. [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] For a finite morphism and an affine open $U=\operatorname{Spec}A$, the inverse image is $\operatorname{Spec}B$ with $B$ a finite $A$-module. The scheme-theoretic fiber is $Y_x=Y\times_X\operatorname{Spec}\kappa(x)$. Since the residue-field point factors through any open neighborhood $U$ of $x$, restriction of fiber products to opens identifies this fiber with $f^{-1}(U)\times_U\operatorname{Spec}\kappa(x)$; its ring is therefore $B\otimes_A\kappa(x)$. [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes), [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre), [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction), [math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring) Elementary tensors generate the underlying additive group, are additive in each variable, and satisfy $(ab)\otimes c=b\otimes(ac)$ for $a\in A$. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[F6] The projection $Y_x\to Y$ is a homeomorphism onto $f^{-1}(x)$ with its subspace topology and preserves residue fields. Thus surjectivity of $f$ makes $Y_x$ nonempty. [math:lem-points-of-fibre-primes-over-point](https://alphabetamath.cc/item/lem-points-of-fibre-primes-over-point)

[F7] A scheme morphism induces local homomorphisms on stalks and hence homomorphisms of residue fields; a unital homomorphism of fields is injective, since a nonzero kernel element would give $1=0$ after multiplication by its inverse. A field extension is finite when its underlying vector space is finite-dimensional, and its degree is that dimension. [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[F8] Rank-nullity holds for a linear map with finite-dimensional domain. In particular an injective endomorphism of a finite-dimensional space is surjective. An independent set in a space spanned by $n$ vectors has at most $n$ elements. [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity), [math:cor-independent-set-is-no-larger-than-a-finite-spanning-set](https://alphabetamath.cc/item/cor-independent-set-is-no-larger-than-a-finite-spanning-set)

[F9] A field is algebraically closed when every nonconstant polynomial over it has a root in that field. [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field) An algebraically closed field has no nontrivial finite field extension; equivalently every nonconstant polynomial over it splits into linear factors. [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)

[F10] Under Choice a finite morphism of schemes is closed. In particular it sends a closed point to a closed point, so the zero-cycle pushforward has closed-point support. [math:thm-finite-morphism-integral-closed](https://alphabetamath.cc/item/thm-finite-morphism-integral-closed)

[F11] Under the assumed Axiom of Choice, every spanning subset of a vector space contains a basis. In particular a finite spanning subset contains a finite basis. A vector space is finite-dimensional when it has a finite basis, and its dimension is the number of elements of any finite basis. [math:cor-every-spanning-set-contains-a-basis](https://alphabetamath.cc/item/cor-every-spanning-set-contains-a-basis), [math:def-dimension](https://alphabetamath.cc/item/def-dimension), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and the finite-type schemes and finite surjective morphism in the statement.

**Goal:** Prove the residue-field assertion, the nonempty finite closed fibers, and the degree-one pushforward without assuming that $f$ is a $k$-morphism.

1.1 Let $z$ be a closed point of a finite-type $k$-scheme. Choose the affine open neighborhood $\operatorname{Spec}A$ supplied by [F3], so $A\cong k[t_1,\ldots,t_n]/I$. Its point $z$ is closed in that open and corresponds by [F4] to a maximal ideal $\mathfrak m$ of $A$. The inverse image of $\mathfrak m$ in the polynomial ring is maximal, since its quotient is the field $A/\mathfrak m$. By [F1] this quotient is $k$ via the coefficient map. Thus [F4] identifies the structure map $k\to\kappa(z)=A/\mathfrak m$ as an isomorphism, independently of the chosen chart because it is the structure map itself. [given, F1, F3, F4, choose, algebra]

2.1 Fix a closed $x\in X$ and choose an affine neighborhood $U=\operatorname{Spec}A$ with maximal ideal $\mathfrak m$ for $x$. By [F5], $f^{-1}(U)=\operatorname{Spec}B$ with a finite $A$-module generating list $b_1,\ldots,b_N$, and $Y_x=\operatorname{Spec}C$ for $C=B\otimes_A\kappa(x)$. Step 1.1 and [F4] give $\kappa(x)=A/\mathfrak m\cong k$. The maps $b\otimes\overline a\mapsto ab\bmod\mathfrak mB$ and $b\bmod\mathfrak mB\mapsto b\otimes1$ are well defined: the first is independent of the lift $a$ modulo $\mathfrak m$, is additive in each variable, and respects the balancing relation in [F5]. The second kills $\mathfrak mB$, since $(tb)\otimes1=b\otimes\overline t=0$ for $t\in\mathfrak m$. Their composites are the identity on residue classes of $b$ and on elementary tensors, using $(ab)\otimes1=b\otimes\overline a$; [F5] says these tensors generate. The formulas also preserve the units and products on elementary tensors in the tensor-product ring of [F5], and intertwine its $A/\mathfrak m$-scalar action with that on the quotient. Thus they identify $C$ with $B/\mathfrak mB$ as $\kappa(x)$-algebras. The images of the $b_i$ form a finite spanning subset of $C$ over $\kappa(x)$. By [F11], this subset contains a finite basis; fix one, and let $n=\dim_{\kappa(x)}C$ be its number of elements. By [F6] the fiber is nonempty, hence $C\ne0$. The scalar action here comes from $X$ and $f$, whether or not it agrees with the given $k$-structure on $Y$. [given, F4, F5, F6, F11, step 1.1, choose, algebra]

3.1 For a prime ideal $\mathfrak p$ of $C$, the quotient $D=C/\mathfrak p$ is a nonzero domain. Its unital scalar map from the field $\kappa(x)$ is injective: a nonzero element of its kernel would, after multiplication by its inverse, force $1=0$ in $D$. The images of the finite spanning subset in step 2.1 span $D$. By [F11] they contain a finite basis of $D$, making $D$ finite-dimensional over $\kappa(x)$. Multiplication by a nonzero element is an injective linear endomorphism, hence surjective by [F8]; its image therefore contains $1$, giving a multiplicative inverse. Thus $C/\mathfrak p$ is a field and $\mathfrak p$ is maximal. By [F4] and [F6], if $y\in f^{-1}(x)$ corresponds to $\mathfrak p$, then $\kappa(y)\cong C/\mathfrak p$ with the induced $\kappa(x)$-action. Consequently the residue-field extension induced by $f$ is finite, as defined in [F7]. [F4, F6, F7, F8, F11, step 2.1, algebra]

4.1 Distinct maximal ideals of $C$ are pairwise comaximal: if their sum were proper, maximality of either would force containment and then equality. For any finite collection $\mathfrak p_1,\ldots,\mathfrak p_r$, [F2] gives a surjection $C\to\prod_{i=1}^r C/\mathfrak p_i$. The $r$ coordinate unit vectors in that product are linearly independent over $\kappa(x)$, and any chosen lifts in $C$ are therefore independent. Using the $n$-element basis of $C$ fixed in step 2.1 as a spanning set, [F8] gives $r\le n$. Hence $\operatorname{Spec}C$ has at most $n$ points, since otherwise one could choose $n+1$ distinct points. All its points are closed by step 3.1 and [F4]. [F2, F4, F8, step 2.1, step 3.1, choose, algebra]

5.1 The subset $f^{-1}(x)$ is closed in $Y$ by continuity and closedness of $x$. Through the homeomorphism of [F6], step 4.1 makes every singleton in it closed in the subspace topology, hence closed in $Y$. Step 1.1 therefore identifies each $\kappa(y)$ with $k$ through the structure map of $Y$. For the induced embedding $\phi:\kappa(x)\to\kappa(y)$, its image $E=\phi(\kappa(x))$ is algebraically closed: pull back the coefficients of a nonconstant polynomial over $E$ along the isomorphism $\kappa(x)\cong E$, find a root in $\kappa(x)$ using the root property in [F9] and step 1.1, and apply $\phi$. Step 3.1 makes $\kappa(y)/E$ finite, so [F9] gives $\kappa(y)=E$. Thus $\phi$ is surjective and its field degree is one; this does not assert that its two structure-map identifications with $k$ make it the identity. [F6, F7, F9, step 1.1, step 3.1, step 4.1, algebra]

6.1 The fiber is nonempty by step 2.1 and finite by step 4.1, and all its points are closed by step 5.1. The pushforward formula in the Statement and the degree-one assertion in step 5.1 give $f_*[y]=[x]$. For completeness, [F10] sends every closed point $y\in Y$ to a closed point $x=f(y)$, and step 3.1 applied at this $x$ gives finite residue degree. Thus the stated formula extends linearly to a well-defined pushforward on zero-cycles, with finite support, and all the conclusions follow. [F7, F10, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎


## A normal noetherian ring is a finite product of normal domains

[Open item](item-lem-author-a9a51f3554f8-normal-ring-product) · level 0


### Statement
Assume the Axiom of Choice. Let $A$ be a commutative noetherian ring such that every localization $A_{\mathfrak p}$ at a prime ideal is an integrally closed domain. Then $A$ is canonically isomorphic to the finite product of its quotients by its minimal prime ideals, and those quotients are noetherian integrally closed domains. The zero ring is the empty product.

A prime is minimal if it contains no strictly smaller prime. A domain is integrally closed if every element of its fraction field satisfying a monic polynomial over the domain belongs to the domain. A ring is noetherian if every ideal is finitely generated.

### Statement references

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)

[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

[math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[math:def-product-ring](https://alphabetamath.cc/item/def-product-ring)

[math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

[math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)

[math:def-polynomial-degree-leading-coefficient-and-monic](https://alphabetamath.cc/item/def-polynomial-degree-leading-coefficient-and-monic)

[math:def-polynomial-evaluation-and-root](https://alphabetamath.cc/item/def-polynomial-evaluation-and-root)

### Facts & Assumptions

[F1] A normal noetherian ring has the prime-localization property in the statement; the zero ring satisfies it vacuously ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[F2] A radical ideal in a noetherian ring is the intersection of finitely many primes minimal over it; the supplier uses dependent choice, available here from the assumed Axiom of Choice ([math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian](https://alphabetamath.cc/item/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian)).

[A1] The Axiom of Choice is assumed ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). In particular it supplies the choice assumption of [F2] and [F3].

[F3] Under the Axiom of Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal)). Every maximal ideal of a commutative ring is prime ([math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)).

[F4] The ring and domain conventions are those of [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) and [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain); in particular a domain has $1\ne0$ and no zero divisors. Prime and maximal ideals are proper ideals with the properties in [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals). The quotient $A/I$ has cosets as elements and the induced ring operations ([math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)). A finite product is the ring of tuples with coordinatewise operations, obtained by iterating the binary construction of [math:def-product-ring](https://alphabetamath.cc/item/def-product-ring); the set consisting of the empty tuple is the one-element ring, and all ring laws hold coordinatewise. A ring homomorphism preserves addition, multiplication and identity; a ring isomorphism is a bijective ring homomorphism ([math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)).

[F5] At a prime $\mathfrak p$, the localization consists of fractions with denominators outside $\mathfrak p$ ([math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)). The fraction construction gives $a/s=a'/s'$ exactly when $u(as'-a's)=0$ for some allowed denominator $u$; in particular $a/1=0$ exactly when some allowed denominator annihilates $a$ ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). For a domain $B$, its fraction field is the localization at its nonzero elements ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). Thus $B$ and each $B_{\mathfrak q}$ embed in that field: equality of fractions there is cross multiplication, and a nonzero extra factor in the localization equivalence relation cancels by the domain property.

[F6] For a multiplicative subset $S$ of a commutative ring, extension and contraction are inverse inclusion-preserving bijections between primes of $S^{-1}A$ and primes of $A$ disjoint from $S$ ([math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection)).

[F7] A quotient of a commutative ring by a prime ideal is a domain ([math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)). A quotient of a noetherian commutative ring is noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)).

[F8] An ideal of a commutative ring $D$ is an additive subgroup closed under multiplication by elements of $D$ ([math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)); explicitly it contains $0$, is closed under subtraction, and contains $du$ whenever it contains $u$ and $d\in D$. It is proper when it is not all of $D$, equivalently when it does not contain $1$. The sum of ideals $I,J$ means $I+J=\{u+v:u\in I,\ v\in J\}$; this is an ideal because $0\in I+J$, differences and scalar multiples are computed componentwise. An ideal $I$ is finitely generated when there are $u_1,\ldots,u_n\in I$ with $I=\{\sum_{k=1}^n d_ku_k:d_k\in D\}$; for $n=0$ this is the zero ideal. A radical ideal means an ideal $I$ for which $a^m\in I$, $m\ge1$, implies $a\in I$.

[F9] A polynomial over a commutative ring $D$ is a finitely supported coefficient sequence, written $\sum_i c_iT^i$ ([math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)). A nonzero polynomial is monic when its highest nonzero coefficient is $1_D$ ([math:def-polynomial-degree-leading-coefficient-and-monic](https://alphabetamath.cc/item/def-polynomial-degree-leading-coefficient-and-monic)). Evaluation at an element $x$ of a commutative target ring along a unital map $\iota:D\to E$ is the finite sum $\sum_i\iota(c_i)x^i$; satisfying the polynomial means that this value is zero ([math:def-polynomial-evaluation-and-root](https://alphabetamath.cc/item/def-polynomial-evaluation-and-root)). In particular, for a domain $D$ and $x\in\operatorname{Frac}(D)$, being integral over $D$ means that $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ for some $n\ge1$ and $c_k\in D$, using the inclusion into the fraction field. A monic polynomial of degree zero is $1$, which cannot vanish in this field, so the positive-degree formulation loses no equations.

### Proof

**Given:** A ring $A$ and the Axiom of Choice as in the statement.

**Goal:** Obtain the stated canonical product and prove that each factor is a normal noetherian domain.

1.1 If $a\ne0$ in $A$, then $A$ is nonzero and its annihilator $\{b\in A:ba=0\}$ is an ideal by [F8]: it contains $0$, and $ba=ca=0$ implies $(b-c)a=0$, while $ba=0$ implies $(db)a=d(ba)=0$ for $d\in A$. It is proper since it does not contain $1$. By [F3] and [A1], it is contained in a maximal, hence prime, ideal $\mathfrak m$. Then $a/1\ne0$ in $A_{\mathfrak m}$ by [F5]: otherwise some $s\notin\mathfrak m$ annihilates $a$, contrary to containment of the annihilator. A nilpotent element maps to zero in every prime localization because these localizations are domains by [F1]. Thus no nonzero element can be nilpotent. Equivalently, the zero ideal is radical: $a^n=0$ with $n\ge1$ implies $a=0$. This also holds for the zero ring. [F1, F3, F4, F5, F8, A1, given]

2.1 By [F2], $0=\bigcap_{i=1}^r\mathfrak p_i$ for the distinct minimal primes. They are pairwise comaximal, meaning $\mathfrak p_i+\mathfrak p_j=A$ for $i\ne j$. Otherwise their sum is an ideal by [F8], is proper and, by [F3] and [A1], lies in a maximal, hence prime, ideal $\mathfrak m$. Apply [F6] with $S=A\setminus\mathfrak m$. Each $\mathfrak p_i\subseteq\mathfrak m$ extends to a prime of $A_{\mathfrak m}$ with contraction $\mathfrak p_i$. A prime below this extension contracts to a prime below $\mathfrak p_i$, so minimality and the inverse correspondence make the extension minimal. The extensions of $\mathfrak p_i$ and $\mathfrak p_j$ are distinct because their contractions differ. This contradicts [F1]: in a domain the zero ideal is prime and is contained in every prime, so it is the only minimal prime. [F1, F2, F3, F4, F6, F8, A1, step 1.1]

3.1 For each $i$ and each $j\ne i$, comaximality supplies an element $b_{ij}\in\mathfrak p_j$ congruent to $1$ modulo $\mathfrak p_i$. Set $e_i=\prod_{j\ne i}b_{ij}$, taking an empty product to be $1$. Then $e_i$ is $1$ modulo $\mathfrak p_i$ and $0$ modulo every other $\mathfrak p_j$. The canonical map $\phi:A\to R=\prod_{i=1}^r A/\mathfrak p_i$, given by $a\mapsto(a+\mathfrak p_i)_i$, is a unital ring homomorphism by the coordinatewise and quotient operations in [F4]. Any tuple of residue classes, with chosen representatives $a_i$, is the image of $\sum_i e_i a_i$, so $\phi$ is surjective. Its kernel, the set of elements mapping to zero, is $\bigcap_i\mathfrak p_i=0$; if $\phi(a)=\phi(b)$, then $a-b$ belongs to this kernel, so $a=b$. Thus $\phi$ is an isomorphism. Each factor is a noetherian domain by [F7]. When $r=0$, step 2.1 says $0=A$ and $\phi$ identifies the zero ring with the empty product. [F4, F7, F8, step 2.1, algebra]

4.1 Fix a factor $B=A/\mathfrak p_i$ and a prime $\mathfrak q$ of $B$. In the product $R$ of step 3.1, let $Q=\{r\in R:r_i\in\mathfrak q\}$. This is a proper prime ideal: the ideal laws of [F8] and prime property are checked in coordinate $i$. Its inverse image $P=\phi^{-1}(Q)$ is likewise prime, and $\phi$ induces $A_P\cong R_Q$ by sending a fraction $a/s$ to $\phi(a)/\phi(s)$, with the inverse induced by $\phi^{-1}$; [F5] checks both maps on fraction equivalence classes. Projection onto coordinate $i$ similarly defines a ring map $R_Q\to B_{\mathfrak q}$. It is surjective: for $b/t\in B_{\mathfrak q}$ use a numerator tuple with coordinate $i$ equal to $b$ and all others zero, and a denominator tuple with coordinate $i$ equal to $t$ and all others one. It is injective: if $r/s$ maps to zero, [F5] and the domain property of $B$ give $r_i=0$; the tuple $\varepsilon_i$ with coordinate $i$ equal to $1$ and all others zero lies outside $Q$ and satisfies $\varepsilon_i r=0$, so $r/s=0$ in $R_Q$. Hence $B_{\mathfrak q}\cong A_P$ is an integrally closed domain by [F1]. Indeed, an isomorphism $g:C\to D$ of domains extends to their fraction fields by $a/b\mapsto g(a)/g(b)$, well-defined by cross multiplication in [F5], with inverse induced by $g^{-1}$. It transports $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ to the equation with $x$ and all coefficients mapped by this extension, by the homomorphism laws in [F4] and the finite evaluation formula in [F9]. The leading coefficient remains $1$. Applying $g^{-1}$ to any such equation over $D$, integral closedness of $C$ puts its root in $C$, and then the original root lies in $D$. Thus isomorphisms preserve integral closedness. [F1, F4, F5, F8, F9, step 3.1, algebra]

5.1 Regard all $B_{\mathfrak q}$ inside $\operatorname{Frac}(B)$ using [F5]. If $x\in\operatorname{Frac}(B)$ is integral over $B$, [F9] gives $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ with $c_k\in B$. The inclusions $B\subseteq B_{\mathfrak q}\subseteq\operatorname{Frac}(B)$ preserve this same finite equation, so it shows that $x$ is integral over every $B_{\mathfrak q}$. Moreover $\operatorname{Frac}(B_{\mathfrak q})=\operatorname{Frac}(B)$ under these embeddings: ratios of elements of $B_{\mathfrak q}$ lie in $\operatorname{Frac}(B)$, and every $b/c\in\operatorname{Frac}(B)$ is the ratio of $b/1$ and the nonzero $c/1$ in $B_{\mathfrak q}$. Step 4.1 therefore gives $x\in B_{\mathfrak q}$ for every prime $\mathfrak q$. If $x\notin B$, then $I=\{b\in B:bx\in B\}$ is an ideal by [F8] (it contains $0$ and is closed under subtraction and multiplication by elements of $B$), and is proper since $1\notin I$. Because $B$ is nonzero, [F3] and [A1] give a maximal, hence prime, ideal $\mathfrak m\supseteq I$. But $x\in B_{\mathfrak m}$ means $x=c/s$ in the fraction field with $c\in B$ and $s\notin\mathfrak m$. Then $sx=c\in B$, so $s\in I\subseteq\mathfrak m$, a contradiction. Thus $B$ is integrally closed. Together with step 3.1 this proves every stated assertion. [F3, F5, F8, F9, A1, step 3.1, step 4.1, algebra] ∎


## Generic local rings of reduced schemes

[Open item](item-lem-author-2389e5bafea8-generic-reduced-local-ring) · level 0

### Statement
Assume the Axiom of Choice. Let $X$ be a reduced scheme and let $\eta$ be the generic point of an irreducible component. Then $\mathcal O_{X,\eta}$ is a field.

A scheme is reduced when its local rings have no nonzero nilpotents. A generic point of a closed irreducible subset is a point whose closure is that subset.

### Facts & Assumptions

**Given:** AC, a reduced scheme $X$ and a generic point $\eta$ of an irreducible component.

**Goal:** Show that $\mathcal O_{X,\eta}$ is a field.

[F1] A stalk consists of germs of sections, where two representatives agree if they agree on some smaller open neighborhood ([math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)). Restricting to an open neighborhood $U$ of a point $x$ does not change the stalk: replace each representative $(W,s)$ by its restriction to $W\cap U$; any neighborhood witnessing equality of germs can likewise be intersected with $U$. On an affine neighborhood $U=\operatorname{Spec} A$, the stalk at the point corresponding to a prime $\mathfrak p$ is therefore $\mathcal O_{X,x}\cong\mathcal O_{U,x}\cong A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F2] The nilradical consists of elements $r$ with $r^n=0$ for some integer $n\geq 1$. Under AC it is the intersection of all prime ideals ([math:cor-nilradical-as-intersection-of-primes](https://alphabetamath.cc/item/cor-nilradical-as-intersection-of-primes)). The assumed Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)) is used through this formula and the point-closure formula in [F4].

[F3] A scheme is a locally ringed space with an affine open neighborhood at each point ([math:def-scheme](https://alphabetamath.cc/item/def-scheme)), and an affine scheme is isomorphic to the spectrum of a commutative ring with its structure sheaf ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)). An irreducible subset is nonempty and cannot be written as a union of two proper relatively closed subsets; an irreducible component is maximal among irreducible subsets under inclusion ([math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)). Closure means the smallest closed superset. The closed subsets of a subspace $S$ are the intersections $S\cap Z$ with ambient closed subsets $Z$.

[F4] Under AC, the closure of a point $\mathfrak p$ of $\operatorname{Spec} A$ is $V(\mathfrak p)$ ([math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)), where $V(\mathfrak p)$ is the set of prime ideals containing $\mathfrak p$ ([math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)). If $T\subseteq S\subseteq X$, then $\operatorname{cl}_S(T)=\operatorname{cl}_X(T)\cap S$ ([math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)).

[F5] The prime ideals of $A_{\mathfrak p}$ correspond bijectively to the prime ideals of $A$ contained in $\mathfrak p$ ([math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)).

[F6] The ring $A_{\mathfrak p}$ is nonzero and local, with maximal ideal $\mathfrak pA_{\mathfrak p}$; its units are exactly the fractions whose numerator is outside $\mathfrak p$, so its nonunits are exactly its maximal ideal ([math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local)). Here a local ring is a nonzero commutative ring with a unique maximal ideal, and a field is a nonzero commutative ring in which every nonzero element is a unit.

### Proof

1.1 By [F3], choose an affine neighborhood $U=\operatorname{Spec} A$ of $\eta$, corresponding to a prime $\mathfrak p$, and put $C=\operatorname{cl}_X(\{\eta\})$. Suppose a prime $\mathfrak q\subsetneq\mathfrak p$ existed, and let $z\in U$ correspond to $\mathfrak q$. Put $D=\operatorname{cl}_X(\{z\})$. This set is nonempty, since it contains $z$, and irreducible: in a decomposition of $D$ into two relatively closed subsets, both subsets are closed in $X$ since $D$ is closed, and the member containing $z$ must contain all of its closure $D$. By [F4], $D\cap U=V(\mathfrak q)$ contains $\eta$, so $C\subseteq D$. But $C\cap U=V(\mathfrak p)$ does not contain $z$, since $\mathfrak p\not\subseteq\mathfrak q$. Thus $C\subsetneq D$, contradicting maximality of the irreducible component $C$ in [F3]. Therefore $\mathfrak p$ is minimal among prime ideals of $A$. [F3, F4, given, choose]

2.1 Put $R=A_{\mathfrak p}\cong\mathcal O_{X,\eta}$ by [F1]. By [F6], $R$ is nonzero and local, and its maximal ideal $\mathfrak m$ consists exactly of the nonunits. This ideal is prime: if $ab\in\mathfrak m$ and $a\notin\mathfrak m$, then $a$ is a unit and $b=a^{-1}(ab)\in\mathfrak m$. By [F5] and step 1.1, $R$ has exactly one prime ideal, hence that ideal is $\mathfrak m$. The formula [F2] gives $\operatorname{Nil}(R)=\mathfrak m$. Reducedness of $X$ makes $R$ reduced, so $\mathfrak m=(0)$. Every nonzero element of $R$ is therefore a unit by [F6], and the nonzero commutative ring $R$ is a field. [F1, F2, F5, F6, step 1.1, given] ∎


## Fields are regular local rings

[Open item](item-lem-author-2389e5bafea8-field-regular-local) · level 0


### Statement
Every field is a regular local ring.

A regular local ring is a noetherian local ring whose Krull dimension equals the dimension of $\mathfrak m/\mathfrak m^2$ over its residue field, where $\mathfrak m$ is its maximal ideal. Krull dimension is the supremum of lengths of strict chains of prime ideals.

### Facts & Assumptions

**Given:** A field $K$.

**Goal:** Prove that $K$ is regular local.

[F1] The displayed equality of Krull dimension and embedding dimension characterizes regular noetherian local rings ([math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)).

[F2] A field has $0\ne1$, and every nonzero element $a$ has an inverse $a^{-1}$ with $a^{-1}a=1$ ([math:def-field](https://alphabetamath.cc/item/def-field)).

[F3] With its field operations, a field is a nonzero commutative ring without zero divisors ([math:lem-field-is-a-commutative-ring](https://alphabetamath.cc/item/lem-field-is-a-commutative-ring)).

[F4] In a commutative ring an ideal is an additive subgroup closed under multiplication by ring elements ([math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)). A proper ideal $P$ is prime if $ab\in P$ implies $a\in P$ or $b\in P$; a proper ideal is maximal if no proper ideal strictly contains it ([math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)). An ideal generated by $a_1,\ldots,a_n$ consists of the sums $r_1a_1+\cdots+r_na_n$ with coefficients in the ring; this specifies finite generation here.

[F5] A local ring is a nonzero commutative ring with a unique maximal ideal $\mathfrak m$, and its residue field is $R/\mathfrak m$ ([math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)). A commutative ring is noetherian if every ideal is finitely generated ([math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)); only this definition is used, without any choice-dependent equivalence with ascending-chain conditions.

[F6] The ideal product $IJ$ consists of finite sums of products $ij$ with $i\in I$ and $j\in J$; in particular $\mathfrak m^2=\mathfrak m\mathfrak m$ ([math:def-sum-and-product-of-ideals](https://alphabetamath.cc/item/def-sum-and-product-of-ideals)). The quotient ring $R/I$ consists of additive cosets, with $(a+I)+(b+I)=(a+b)+I$ and $(a+I)(b+I)=ab+I$ ([math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)).

[F7] For a finite-dimensional vector space, dimension is the number of elements of a finite basis; in particular the zero vector space over any field has dimension zero ([math:def-dimension](https://alphabetamath.cc/item/def-dimension)).

### Proof

1.1 By [F2] and [F3], $K$ is a nonzero commutative ring without zero divisors. If an ideal $I$ contains $a\ne0$, then $1=a^{-1}a\in I$ by [F2] and [F4], and every $r\in K$ belongs to $I$ because $r=r\cdot1$; hence $I=K$. Thus the only ideals are $(0)$ and $K$, generated respectively by $0$ and $1$. The ideal $(0)$ is proper since $0\ne1$, is prime since $K$ has no zero divisors, and is maximal since there is no other proper ideal. By [F5], $K$ is noetherian and local, with maximal ideal $\mathfrak m=(0)$. The length-zero prime chain consisting of $(0)$ exists, and there is no strict inclusion between prime ideals, so the inline definition of Krull dimension gives $\dim K=0$. [F2, F3, F4, F5, given]

2.1 By [F6] and step 1.1, $\mathfrak m^2=(0)$, and the map $K/(0)\to K$ given by $a+(0)\mapsto a$ is a bijection preserving addition and multiplication: each coset is the singleton $\{a\}$. This identifies the residue field with $K$. The quotient $\mathfrak m/\mathfrak m^2=(0)/(0)$ has one element, so its addition and residue-field scalar multiplication are the unique operations on the zero vector space. By [F7] its dimension over $K$ is zero. Consequently $\dim K=\dim_K(\mathfrak m/\mathfrak m^2)=0$, and [F1] makes $K$ regular local. [F1, F6, F7, step 1.1] ∎


## Discrete valuation rings are regular local

[Open item](item-lem-author-2389e5bafea8-dvr-regular-local) · level 0

### Statement
A discrete valuation ring is a regular local ring.

Here a discrete valuation ring is a nonfield noetherian local domain of dimension one with principal maximal ideal. Regular local means that the dimension of $\mathfrak m/\mathfrak m^2$ over the residue field equals the Krull dimension.

### Facts & Assumptions

**Given:** A discrete valuation ring $R$ with maximal ideal $\mathfrak m$.

**Goal:** Prove that $R$ is regular local.

[F1] A discrete valuation ring is a one-dimensional noetherian local domain whose maximal ideal is principal ([math:thm-equivalent-characterisations-of-a-dvr](https://alphabetamath.cc/item/thm-equivalent-characterisations-of-a-dvr)).

[F2] A noetherian local ring is regular exactly when its embedding dimension equals its Krull dimension ([math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)).

### Proof

1.1 By [F1], $\mathfrak m=(\pi)$ for some nonzero $\pi$, and $\dim R=1$. The residue class of $\pi$ spans $\mathfrak m/\mathfrak m^2$. It is nonzero: if $\pi=a\pi^2$, cancellation in the domain gives $1=a\pi$, contrary to $\pi\in\mathfrak m$. [F1, given, algebra]

2.1 Therefore the embedding dimension is one, equal to $\dim R$. The criterion [F2] shows that $R$ is regular local. [F2, step 1.1] ∎

## Open subsets containing generic points are componentwise dense

[Open item](item-lem-author-2389e5bafea8-open-generic-density) · level 0


### Statement
Let $U$ be an open subset of a topological space $X$. If an irreducible component $C$ has generic point $\eta\in U$, then $U\cap C$ is a dense open subset of $C$.

The generic point condition means $\overline{\{\eta\}}=C$; density means that the closure in $C$ is all of $C$.

### Facts & Assumptions

**Given:** An open $U\subseteq X$ and a component $C$ with generic point $\eta\in U$.

**Goal:** Prove that $U\cap C$ is open and dense in $C$.

[F1] Topological spaces and open sets are as in [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space), and irreducible components are maximal irreducible subsets as in [math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space). We use the subspace topology on $C$: its open sets are traces $V\cap C$ of open subsets $V\subseteq X$ ([math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)).

[F2] In any named space, closure is the smallest closed superset ([math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)). Thus, if $A\subseteq B$, the closure of $B$ is a closed set containing $A$, so it contains the closure of $A$; this is the monotonicity of closure used below.

[F3] For $A\subseteq C\subseteq X$, the subspace-closure identity is $\operatorname{cl}_C(A)=\overline{A}^{X}\cap C$ ([math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior), Statement, clause 1). Only this unconditional clause is used; $C$ need not be open in $X$.

### Proof

1.1 The intersection $U\cap C$ is open in the subspace topology on $C$, since $U$ is open in $X$, and it contains $\eta$. [F1, given]

2.1 By [F3] and the generic-point hypothesis, $\operatorname{cl}_C(\{\eta\})=\overline{\{\eta\}}^{X}\cap C=C\cap C=C$. Since $\{\eta\}\subseteq U\cap C$, monotonicity from [F2] gives $C\subseteq\operatorname{cl}_C(U\cap C)\subseteq C$. Thus $U\cap C$ is dense in $C$, and step 1.1 supplies its openness. [F2, F3, step 1.1, given] ∎


## Excluding points of codimension zero and one

[Open item](item-lem-author-2389e5bafea8-codimension-exclusion) · level 0


### Statement
Let $C$ be an integral scheme and $Z\subseteq C$ a subset containing no point of codimension zero or one. Then $Z$ has codimension at least two in $C$.

The codimension of a point $x$ in $C$ is the supremum of lengths of strict chains of irreducible closed subsets of $C$ from $C$ to $\overline{\{x\}}$; the codimension of $Z$ is the infimum of the codimensions of its points, with infimum of the empty set defined as $+\infty$.

### Statement references

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

### Facts & Assumptions

**Given:** An integral scheme $C$ and a subset $Z$ with no point of codimension zero or one.

**Goal:** Show that $\operatorname{codim}_C Z\geq 2$.

[F1] The underlying topological space of an integral scheme is nonempty and irreducible ([math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)).

[F2] A space is irreducible if it is nonempty and every expression as a union of two closed subsets has one member equal to the whole space; a subset is irreducible when its subspace is irreducible ([math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)). A finite strict chain has length equal to its number of strict inclusions, so a chain consisting of one subset has length zero.

[F3] The closure of a subset is its smallest closed superset; in particular, it is closed and contains that subset ([math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)).

[F4] A subset $E$ of a subspace $H\subseteq C$ is closed in $H$ exactly when $E=H\cap D$ for some closed subset $D$ of $C$ ([math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top), Definition, closed sets of a subspace).

### Proof

1.1 Fix $x\in C$ and put $H=\overline{\{x\}}$. By [F1], $C$ is irreducible, and by [F3], $H$ is a nonempty closed subset of $C$. If $H=E_1\cup E_2$ with each $E_i$ closed in $H$, write $E_i=H\cap D_i$ with $D_i$ closed in $C$ by [F4]. The point $x$ belongs to some $E_i$, hence to $D_i$; minimality of the closure in [F3] gives $H\subseteq D_i$, so $E_i=H$. Thus $H$ is irreducible by [F2]. If $H=C$, the chain consisting only of $C$ has length zero; otherwise $C\supsetneq H$ is a strict chain of irreducible closed subsets of length one. Therefore the family of finite chains defining the codimension of $x$ is nonempty. [F1, F2, F3, F4, given]

2.1 For every $x\in Z$, the lengths in its defining chain family form a nonempty subset of the nonnegative integers by step 1.1 and [F2]. If bounded, this subset is finite and has a largest integer; if unbounded, its supremum is $+\infty$. Thus the codimension of $x$ is a nonnegative integer or $+\infty$. It is neither zero nor one by hypothesis, so it is at least two. Taking the infimum over $x\in Z$ proves the inequality; if $Z$ is empty, the stated convention gives $+\infty$. [F2, step 1.1, given] ∎


## Pointwise regularity and smoothness over a perfect field

[Open item](item-lem-author-2389e5bafea8-perfect-pointwise-smoothness) · level 0

### Statement
Let $k$ be a perfect field and $X$ a reduced scheme locally of finite type over $k$. A point $x\in X$ is smooth over $k$ if and only if $\mathcal O_{X,x}$ is a regular local ring.

A perfect field is a field whose algebraic extensions are separable.

A $k$-scheme means a scheme $X$ equipped with a structure morphism $f:X\to\operatorname{Spec}k$; $\mathcal O_{X,x}$ denotes the stalk of its structure sheaf at $x$, which is a local ring.

Reduced means that for every $x\in X$, an element $a\in\mathcal O_{X,x}$ with $a^n=0$ for some integer $n\geq1$ must satisfy $a=0$.

Locally of finite type and smooth at a point are the corresponding properties of this structure morphism.

A regular local ring is a nonzero noetherian local ring $(R,\mathfrak m)$ satisfying $\dim R=\dim_{R/\mathfrak m}(\mathfrak m/\mathfrak m^2)$, where $\dim R$ is its Krull dimension and $R/\mathfrak m$ is its residue field.

### Statement references

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)

[math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)

### External input

The pointwise equivalence is imported from The Stacks Project, Lemma 33.25.8 (tag 0B8X), under exactly the displayed hypotheses.

The source calls the scheme locally algebraic; Definition 33.20.1 (tag 06LG) defines this to mean locally of finite type over the field.

The cited lemma also asserts density and openness, but only its pointwise equivalence is used here. Its underlying proof is not reconstructed locally.

### Facts & Assumptions

**Given:** A perfect field $k$, a reduced locally finite-type $k$-scheme $X$, and $x\in X$.

**Goal:** Establish the stated pointwise equivalence as an imported result.

[F1] The external input in Stacks Project Lemma 33.25.8 states precisely this equivalence for every point of such an $X$; its cited proof uses Algebra Lemma 10.140.5.

### Proof

1.1 The hypotheses in **Given** match those of the external input [F1], and $x$ is a point of the specified scheme. [F1, given]

2.1 Applying [F1] at $x$ gives both directions of the equivalence. This is an application of the imported theorem, not a local reconstruction of its proof. [F1, step 1.1] ∎


## Finite projective complements

[Open item](item-lem-finite-projective-complements) · level 1


### Statement
Let $A$ be a commutative ring with unit. Every finite projective $A$-module $P$ admits a finite projective $A$-module $Q$ and an integer $N\geq 0$ such that $P\oplus Q\cong A^N$.

Assume additionally the Axiom of Choice and that $X=\operatorname{Spec}A$ is locally noetherian. Every class in the vector-bundle Grothendieck group $K^0(X)$ is of the form $[E]-[\mathcal O_X^N]$ for a vector bundle $E$ and an integer $N\geq0$. Its rank at each point $x\in X$ is $\operatorname{rank}_x E-N$; this is a locally constant integer-valued function, hence is constant on each connected component.

A finite projective module is a finitely generated module $P$ such that every homomorphism from $P$ to the target of a surjective module homomorphism lifts through that surjection. A vector bundle is a finite locally free $\mathcal O_X$-module: locally it is isomorphic to a finite direct sum of copies of $\mathcal O_X$. Its rank at a point is the number of copies in a local trivialization containing that point. A locally noetherian scheme is one covered by spectra of noetherian rings. The group $K^0(X)$ is generated by isomorphism classes $[E]$ of vector bundles, with $[E]=[E']+[E'']$ for each short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles.

### Facts & Assumptions

**Given:** A commutative ring $A$ with unit and a finite projective $A$-module $P$. For the assertions about $K^0$, also assume the Axiom of Choice and that $X=\operatorname{Spec}A$ is locally noetherian.

**Goal:** Construct a finite projective complement to $P$ in a finite free module, then prove the representative and rank assertions.

[A1] The Axiom of Choice is used only to invoke the scheme, bundle and Grothendieck-group suppliers [F1], [F2] and [F4]; steps 1.1–3.1 use finite choices only. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, associated sheaf and global sections give an equivalence between finite projective $A$-modules and vector bundles on $X$, preserving finite direct sums and ranks. In particular $\widetilde{A^N}\cong\mathcal O_X^N$. Every short exact sequence of vector bundles on this affine scheme splits. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] For a locally noetherian scheme under the Axiom of Choice, $K^0(X)$ has the generators and exact-sequence relations stated above. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

[F3] Rings and modules have their usual unital meanings. Module homomorphisms preserve addition and scalar multiplication; a module isomorphism is a bijective module homomorphism, and $\ker q=\{a:q(a)=0\}$. We use these definitions from [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) and [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel). Here $A^N$ is the module of $N$-tuples with coordinatewise operations and standard coordinate vectors $e_i$; $A^0=0$. A finite generating family means that every element is a linear combination of that family. The direct sum $M\oplus L$ of two modules is the module of pairs with coordinatewise operations. A direct summand is a factor in such a decomposition.

[F4] $\operatorname{Spec}A$ has prime ideals as points and the Zariski topology. Under the additional Choice hypothesis its structure sheaf $\mathcal O_X$ is the sheaf from the basic-open localization construction; the resulting locally ringed space is the affine scheme used here. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:thm-structure-sheaf-affine-scheme](https://alphabetamath.cc/item/thm-structure-sheaf-affine-scheme) [math:cor-spectrum-with-structure-sheaf-locally-ringed](https://alphabetamath.cc/item/cor-spectrum-with-structure-sheaf-locally-ringed)

[F5] Finite locally free sheaves and their well-defined, locally constant ranks are as in [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). For two module sheaves, their finite direct sum is the sheaf of pairs of sections, with componentwise restriction. On a common trivializing open, the coordinate concatenation gives $\mathcal O_U^r\oplus\mathcal O_U^s\cong\mathcal O_U^{r+s}$. Exactness of module sheaves means that the image sheaf equals the kernel sheaf, and short exact sequences have zero terms at both ends. [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves) A splitting of $0\to E'\to E\xrightarrow q E''\to0$ means a module-sheaf map $s:E''\to E$ with $qs=\operatorname{id}_{E''}$; it yields $E\cong E'\oplus E''$ by the maps $(a,b)\mapsto i(a)+s(b)$ and $v\mapsto(v-sq(v),q(v))$, where the first component of the latter is identified with $E'$ through the kernel map $i$.

[F6] In the locally noetherian hypothesis, a noetherian commutative ring means one whose every ideal is finitely generated; only this definition, not an equivalence with a chain condition, is used. [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

### Proof

**Proof technique:** Split a finite free presentation and use complements to replace negative bundle classes by negative free classes.

1.1 Choose finitely many generators $p_1,\ldots,p_N$ of $P$ and let $q:A^N\to P$ send the standard basis vectors to them. This map is surjective. By the lifting property of $P$, the identity map of $P$ lifts to a homomorphism $s:P\to A^N$ with $q s=\operatorname{id}_P$. This construction uses only the given finite generating family, including the empty family when $P=0$. [given, F3, construct]

2.1 Put $Q=\ker q$. The map $P\oplus Q\to A^N$, $(p,z)\mapsto s(p)+z$, is an isomorphism: its inverse sends $a$ to $(q(a),a-sq(a))$. The projection $e=\operatorname{id}_{A^N}-sq$ has image $Q$, so $Q$ is generated by the finitely many elements $e(e_i)$, where $e_i$ are the standard basis vectors. [F3, step 1.1, construct]

3.1 The module $A^N$ has the lifting property: lift the images of its finitely many basis vectors separately through any given surjection. A direct summand of a module with this property also has it: compose a map from the summand with the projection from the ambient module, lift, and restrict the lift to the summand. By step 2.1, $Q$ is such a summand of $A^N$ and is finitely generated. Thus $Q$ is finite projective, proving the first assertion. [F3, step 2.1, construct]

4.1 Now impose the additional hypotheses. Every element of $K^0(X)$ is a finite integer linear combination of bundle classes by [F2]. Collecting positive and negative terms using the relation for the split exact sequence $0\to E'\to E'\oplus E''\to E''\to0$, write it as $[B]-[C]$ for vector bundles $B,C$; the zero bundle handles an empty sum. [F2, F5, assume-hyp, step 3.1]

5.1 By [F1], $C\cong\widetilde P$ for a finite projective module $P$. Apply steps 1.1–3.1 to obtain $P\oplus Q\cong A^N$. With $D=\widetilde Q$, [F1] gives $C\oplus D\cong\mathcal O_X^N$. Therefore the split exact-sequence relation gives $[B]-[C]=[B\oplus D]-[C\oplus D]=[B\oplus D]-[\mathcal O_X^N].$ Taking $E=B\oplus D$ proves the representative assertion. [F1, F2, F5, step 3.1, step 4.1]

6.1 Every short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles on $X$ splits by [F1]. Thus $E\cong E'\oplus E''$ by [F5]. At any point $x$, intersect trivializing neighbourhoods for $E'$ and $E''$; on the intersection, their ranks $r,s$ give a trivialization of $E$ of rank $r+s$ by coordinate concatenation. The well-definedness of rank in [F5] therefore proves rank additivity in every defining relation of [F2]. Assigning a bundle its pointwise rank consequently induces a homomorphism from $K^0(X)$ to the additive group of locally constant integer-valued functions on $X$, where addition is pointwise. Such a function is one constant on some neighbourhood of each point; finite sums and differences have this property by intersecting those neighbourhoods. The representative in step 5.1 has rank $\operatorname{rank}_x E-N$ at $x$. For completeness, a connected component is a maximal connected subset, and connected means admitting no partition into two nonempty relatively open subsets. Each fiber of a locally constant function is open, as is its complement, so two different values on a component would give such a partition. The rank function is therefore constant on every connected component. If $X$ is empty, these pointwise assertions are vacuous. [F1, F2, F5, step 5.1, construct]

7.1 Steps 3.1, 5.1 and 6.1 establish all the assertions under their stated hypotheses. [step 3.1, step 5.1, step 6.1] ∎


## Unimodular elements and trivial summands

[Open item](item-def-unimodular-sections) · level 1


### Definition
Let $A$ be a commutative ring with identity and $P$ a finite projective $A$-module: $P$ is finitely generated, and maps from $P$ lift through surjective module homomorphisms. An element $p\in P$ is **unimodular** if there is an $A$-linear functional $\phi:P\to A$ with $\phi(p)=1$. A functional $\phi:P\to A$ is **unimodular** if it is surjective. A pair $(p,\phi)$ with $\phi(p)=1$ is a **unimodular pair**.

A vector bundle $E$ on a scheme $X$ is a finite locally free $\mathcal O_X$-module: every point has an open neighbourhood on which $E$ is a finite direct sum of copies of $\mathcal O_X$. Its dual is $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$. A global section $s\in\Gamma(X,E)=E(X)$ is **nowhere zero** if, at every point $x$, its image in the fiber $E_x\otimes_{\mathcal O_{X,x}}k(x)$ is nonzero, where $E_x$ is the stalk and $k(x)=\mathcal O_{X,x}/\mathfrak m_x$ is the residue field of the local ring $\mathcal O_{X,x}$. Equivalently, locally on $X$ the map $\mathcal O_X\to E$, $1\mapsto s$, identifies $\mathcal O_X$ with a direct summand of $E$. A morphism $E\to\mathcal O_X$ is instead a global section of the dual $E^\vee$.

Assume the Axiom of Choice for the following affine correspondence. On $X=\operatorname{Spec}A$, the bundle associated to a finite projective module $P$ has global sections $P$; under this identification a section is nowhere zero exactly when its element is unimodular. A unimodular pair gives an isomorphism $A\oplus\ker\phi\to P$, $(a,q)\mapsto ap+q$. In particular, a surjective functional on $P$ belongs to such a pair.

### Justification
The fiber is the functorial vector space obtained from the stalk by reduction modulo its maximal ideal, so the fiber condition is independent of a local frame. The equivalences and the displayed direct-sum decomposition are established below. The affine assertion uses Choice through the affine module–bundle and associated-stalk interfaces, and through proper-ideal containment in a maximal ideal.

### Facts & Assumptions

**Given:** A commutative ring $A$, a finite projective $A$-module $P$, a scheme $X$ with a vector bundle $E$, and the Axiom of Choice for the affine assertions.

**Goal:** Justify the local description of nowhere-zero sections and the stated affine equivalences and splitting.

[F1] Under the Axiom of Choice, finite projective $A$-modules and vector bundles on $\operatorname{Spec}A$ correspond by associated sheaf and global sections, preserving finite direct sums and duals. Finite projective means finitely generated with the lifting property in the Definition. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] A scheme is locally an affine scheme and has local stalk rings. A module sheaf has linear restriction maps and linear morphisms. Its fiber at $x$ is $E_x\otimes_{\mathcal O_{X,x}}k(x)\cong E_x/\mathfrak m_x E_x$; this construction is functorial in morphisms and commutes with restriction to an open neighbourhood. Internal Hom has sections $\mathcal Hom(E,F)(V)=\operatorname{Hom}_{\mathcal O_V}(E|_V,F|_V)$, so its global sections are sheaf morphisms. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-fibre-of-module-at-point](https://alphabetamath.cc/item/def-fibre-of-module-at-point) [math:def-sheaf-hom](https://alphabetamath.cc/item/def-sheaf-hom)

[F3] Points of $\operatorname{Spec}A$ are prime ideals. Under AC the associated-sheaf stalk is naturally $(\widetilde P)_{\mathfrak p}\cong P_{\mathfrak p}$. The scheme residue field identifies with $A_{\mathfrak p}/\mathfrak p A_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p)$; in this field the image of $a\in A$ is zero exactly when $a\in\mathfrak p$. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization) [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point) [math:cor-residue-field-of-a-localisation-at-a-prime](https://alphabetamath.cc/item/cor-residue-field-of-a-localisation-at-a-prime)

[F4] AC asserts that every family of nonempty sets has a choice function. Under AC a proper ideal in a nonzero commutative ring is contained in a maximal ideal; every maximal ideal is prime. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal) [math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)

[F5] A stalk consists of germs of sections on open neighbourhoods; equality of germs means equality on some smaller neighbourhood. In particular an inverse germ can be represented by a section, and its inverse identity holds after shrinking. [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[F6] The localization $S^{-1}M$ consists of fractions $m/s$, with $m/s=n/t$ exactly when $u(tm-sn)=0$ for some $u\in S$. Localizing a linear map sends $m/s$ to the image of $m$ divided by $s$; this is well-defined by that relation. At a prime $\mathfrak p$ take $S=A\setminus\mathfrak p$. [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)

### Proof

**Proof technique:** direct; use local coordinates and the affine module–bundle correspondence.

1.1 On a neighbourhood of $x$, choose a frame of $E$ and write $s=(a_1,\ldots,a_r)$. By [F2] its fiber is the coordinate vector over $k(x)$, so it is nonzero exactly when some $a_i$ has nonzero residue. Such a coordinate has an invertible germ: choose any affine neighbourhood $W\cong\operatorname{Spec}B$ of $x$ using [F2]. It need not lie in the frame chart. By [F3], the canonical identification $\mathcal O_{X,x}\cong B_{\mathfrak q}$ at the corresponding prime $\mathfrak q$ represents the germ of $a_i$ as $b/t$ with $t\notin\mathfrak q$. Its nonzero residue implies $b\notin\mathfrak q$, so $t/b$ is its inverse germ. By [F5], represent this inverse germ by a section, intersect its domain with the original frame chart, and shrink further until its product with $a_i$ is $1$. Projection to that coordinate followed by multiplication by its inverse gives a functional $\rho$ taking $s$ to $1$. The maps $(a,q)\mapsto as+q$ and $v\mapsto(\rho(v),v-\rho(v)s)$ then identify $E$ locally with $\mathcal O_X\oplus\ker\rho$. Conversely, a local splitting sends the fiber value of $s$ to $1$ by functoriality in [F2], so that value is nonzero. For rank zero neither condition holds at a point; on the empty scheme both are vacuous. This proves the local equivalence, and the internal Hom description in [F2] identifies functionals with global sections of the dual. [F2, F3, F5, F6, given, construct]

1.2 If $\phi(p)=1$, the map $(a,q)\mapsto ap+q$ from $A\oplus\ker\phi$ to $P$ has inverse $v\mapsto(\phi(v),v-\phi(v)p)$. The kernel is finite projective: it is the image of the projection $v\mapsto v-\phi(v)p$, so projecting a finite generating list of $P$ generates it; a map from the kernel through a surjection lifts by first extending it using this projection to $P$, applying projectivity, and restricting the lift back to the kernel. If $\phi$ is surjective, choose a preimage $p$ of $1$. These statements also hold for the zero ring, where every unital module is zero and $1=0$. [given, algebra, construct]

1.3 For the affine converse, take a finite generating surjection $q:A^n\to P$. The lifting property of $P$ gives $j:P\to A^n$ with $qj=\operatorname{id}_P$. With $e_i=q(\epsilon_i)$ for the standard basis and $\lambda_i$ the coordinates of $j$, one has $v=\sum_i\lambda_i(v)e_i$ for all $v\in P$. The maps $j,q$ therefore realize $P$ as a direct summand of $A^n$. Put $I=(\lambda_1(p),\ldots,\lambda_n(p))$. At a prime $\mathfrak p$, [F2], [F3] and [F6] identify the fiber of the associated section and the fiber maps of the $\lambda_i$. Its value is zero exactly when all $\lambda_i(p)$ lie in $\mathfrak p$: one direction follows by applying these maps, and the other by reducing the displayed expansion. If the section is nowhere zero, $I$ is therefore contained in no prime. If $I$ were proper then $A\ne0$, so [F4] would give a maximal, hence prime, ideal containing $I$, a contradiction. Hence $I=A$. Choose coefficients $c_i$ with $\sum_i c_i\lambda_i(p)=1$ and set $\phi=\sum_i c_i\lambda_i$; this is a functional with $\phi(p)=1$. For $A=0$ the same conclusion follows from $I=A$ and the unique zero functional. [F1, F2, F3, F4, F6, given, construct]

2.1 Conversely, if $\phi(p)=1$, localization and passage to every residue field send the fiber value of $p$ to $1$ by [F2], [F3] and [F6]; hence that value is nonzero. For the zero ring there are no points by [F3], so this condition is vacuous. On an affine scheme [F1] sheafifies the decomposition in step 1.2 into a trivial line summand and a vector bundle complement. Conversely, such a bundle decomposition gives a module decomposition by [F1], and the image of $1$ and projection to $A$ form a unimodular pair. Together with steps 1.1 through 1.3 this proves all the stated equivalences and splitting. Choice is used in the affine interfaces [F1], [F3] and the ideal-containment theorem [F4]; the local coordinate argument makes only finitely many selections and uses explicit fractions and germs. [F1, F2, F3, F4, F6, step 1.1, step 1.2, step 1.3] ∎


## Determinants and exact sequences

[Open item](item-lem-determinants-of-short-exact-sequences) · level 1


### Statement
Let $X$ be a scheme and let $0\to E'\xrightarrow{i}E\xrightarrow{p}E''\to0$ be a short exact sequence of vector bundles, meaning finite locally free $\mathcal O_X$-modules. There is a canonical isomorphism of line bundles

$$\det E'\otimes\det E''\xrightarrow{\sim}\det E.$$

It is natural for isomorphisms of short exact sequences and compatible with pullback along scheme morphisms. Ranks may be locally constant rather than constant: the determinant is defined on each open rank locus by the corresponding top exterior power.

Assume the Axiom of Choice and suppose $X$ is locally Noetherian. Then determinant induces a group homomorphism $K^0(X)\to\operatorname{Pic}(X)$ from the vector-bundle Grothendieck group to the Picard group, given by $[E]-[F]\mapsto[\det E\otimes(\det F)^{-1}]$. Here $(\det F)^{-1}$ is the tensor-inverse line bundle, and Picard group addition is tensor product. This assertion concerns $K^0$, not the coherent-sheaf group $K_0$.

### Statement references

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

### Facts & Assumptions

**Given:** A scheme $X$ and a short exact sequence of vector bundles as in the statement; for the Grothendieck-group assertion, also assume the Axiom of Choice and that $X$ is locally Noetherian.

**Goal:** Construct the canonical determinant isomorphism, prove its functorial properties, and show that determinant respects the defining relations of $K^0(X)$.

[F1] The surjection $E\to E''$ splits locally. On a splitting neighbourhood, $E\cong E'\oplus E''$; ranks add there. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

[F2] Exterior powers and determinant of a constant-rank bundle are defined by sheafified exterior algebra. For a commutative unital ring $R$ and a finite free $R$-module $M$ with ordered basis $e_1,\ldots,e_r$, the increasing wedges $e_{j_1}\wedge\cdots\wedge e_{j_q}$, with $1\leq j_1<\cdots<j_q\leq r$, form an $R$-basis of $\Lambda_R^q M$ for every integer $q\geq0$. The empty wedge is the degree-zero basis element; in particular the top wedge generates a free rank-one module, and wedges above the rank vanish. Exterior powers commute naturally with pullback. The Picard group consists of line-bundle isomorphism classes under tensor product. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) [math:lem-exterior-algebra-basis-monomials](https://alphabetamath.cc/item/lem-exterior-algebra-basis-monomials) [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[F3] Under the stated choice and locally Noetherian hypotheses, $K^0(X)$ is generated by isomorphism classes of vector bundles with the relations $[E]=[E']+[E'']$ for short exact sequences. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme) Here Choice means that every family of nonempty sets has a choice function, and locally Noetherian means admitting an affine open cover by spectra of Noetherian rings. Choice is retained solely as the stated hypothesis of this group supplier when invoking its presentation of $K^0(X)$; the local determinant construction below makes no arbitrary family of choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F4] The sheaf tensor product is the sheafification of the presheaf $U\mapsto M(U)\otimes_{\mathcal O_X(U)}N(U)$. A balanced pairing of section modules factors uniquely through their module tensor product; if the pairing is linear in each argument, the induced map is $\mathcal O_X(U)$-linear, as checked on elementary tensors. Restriction-compatible presheaf maps to a sheaf extend uniquely to its sheafification. [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product) [math:thm-universal-property-of-module-tensor-products](https://alphabetamath.cc/item/thm-universal-property-of-module-tensor-products) [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)

[F5] A scheme is a locally ringed space locally isomorphic to affine schemes. A scheme morphism is a morphism of locally ringed spaces. Module pullback and its local free-basis description, together with exterior-power base change, are those in the determinant construction. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F6] Compatible sections of a sheaf on an open cover glue uniquely, including the empty cover of the empty set. Thus local module maps agreeing on overlaps glue: apply this axiom to the images of each section; linearity and restriction compatibility can be checked on that cover. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[F7] Exactness for module sheaves means image sheaf equals kernel sheaf at each term. Kernels are computed on section modules. In our short exact sequence, $i$ identifies $E'$ with $\ker p$, and $p$ is a surjection of sheaves. [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves) [math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves)

[F8] A finite locally free sheaf has a well-defined rank function $r:X\to\mathbb N$, independent of the local trivialization, and this function is locally constant. Restriction to an open subscheme preserves that rank function. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

### Proof

**Proof technique:** direct; construct the map locally by wedging lifts and use the exact-sequence presentation.

1.1 By [F8], the rank of a vector bundle is well-defined and locally constant. Its rank loci are disjoint open subsets covering $X$. Define its determinant separately on these loci by [F2]; the sheaf on an open $W$ has the product of the section modules of these pieces on the intersections of $W$ with the rank loci, with componentwise restrictions and scalar action. The sheaf axiom [F6] verifies this construction and its unique identifications with the pieces. The empty wedge defines the determinant of a rank-zero bundle as $\mathcal O$. [given, F2, F6, F8, construct]

1.2 Work on an open set where the sequence splits and $E',E''$ are free of ranks $a,b$. For local sections $e'_1,\ldots,e'_a$ and $e''_1,\ldots,e''_b$, use a splitting to choose lifts $\widetilde e''_j$ linearly in the latter and send $(e'_1\wedge\cdots\wedge e'_a)\otimes(e''_1\wedge\cdots\wedge e''_b)$ to $i(e'_1)\wedge\cdots\wedge i(e'_a)\wedge\widetilde e''_1\wedge\cdots\wedge\widetilde e''_b$. This formula is multilinear and alternating in each block, so the exterior-algebra quotient in [F2] gives a bilinear pairing of the two top exterior powers. By [F4] it induces a linear map from their sectionwise module tensor product. These formulas commute with restriction, and the sheafification universal property in [F4] gives a morphism from the sheaf tensor product. If a lift changes, its difference lies in $\ker p=i(E')$ by [F7]; every new term has $a+1$ factors from $E'$ and vanishes by [F2]. Thus the map is independent of the chosen lifts, including when either rank is zero. [F1, F2, F4, F7, construct]

2.1 With bases of $E'$ and $E''$ and lifts supplied by a splitting, the concatenated vectors form a basis of $E$. On such a free chart, the wedge bases in [F2] commute with restrictions, so the exterior-power presheaves are already free sheaves there and their sheafifications preserve these bases by [F4]. The map of step 1.2 sends the generator formed from the two top wedges to the top wedge of that basis, so it is an isomorphism. Its lift-independent formula agrees on overlaps; hence [F6] glues the local maps and their inverses to the asserted global isomorphism. The formula is preserved by isomorphisms of short exact sequences. Pulling it back gives the same wedge formula for the pulled-back sequence, which remains locally split; the exterior-power pullback isomorphisms therefore identify the two determinant maps. Here the tensor-pullback comparison for the two line bundles is constructed locally by sending the pulled-back tensor of their frame generators to the tensor of their pulled-back generators. This is an isomorphism of free rank-one modules; scalar extension carries a product of frame-change units to the product of their images, so these comparisons agree on overlaps and glue by [F6]. No exactness of arbitrary pullback is assumed: the pulled-back splitting itself proves exactness of this sequence. [F1, F2, F4, F5, F6, F7, step 1.2, construct]

3.1 Isomorphic bundles have isomorphic determinants by functoriality. Step 2.1 shows that every exact-sequence relation in [F3] maps to the identity relation in $\operatorname{Pic}(X)$. Consequently the assignment $[E]\mapsto[\det E]$ descends from the free abelian group on bundle classes to a homomorphism on $K^0(X)$. [F2, F3, step 2.1, construct]

4.1 Every element of $K^0(X)$ is a difference $[E]-[F]$: collect positive and negative terms into finite direct sums, using the split exact-sequence relations, and use the zero bundle for an empty sum. The homomorphism of step 3.1 therefore has the displayed formula, with inverse in the Picard group represented by the tensor-inverse line bundle. This completes the proof. [F2, F3, step 3.1, algebra] ∎


## Normal noetherian schemes reduce to integral components

[Open item](item-lem-normal-scheme-component-reduction) · level 1


### Statement
Assume the Axiom of Choice. A noetherian normal scheme $X$ is a finite disjoint union of open-and-closed integral normal subschemes, namely its irreducible components with their restricted structure sheaves. Every affine open $\operatorname{Spec} A\subseteq X$ has $A$ a finite product of noetherian integrally closed domains. Consequently functions, units, line bundles and finite-rank vector bundles are specified componentwise; the rank of a vector bundle is constant on each component.

Here a scheme is noetherian if it has a finite affine open cover by spectra of noetherian rings; it is normal if every local ring is an integrally closed domain. An irreducible space is a nonempty space that is not the union of two proper closed subsets; an irreducible component is a maximal irreducible subset. A scheme is integral if it is irreducible and reduced, where reduced means that its structure sheaf has no nonzero nilpotent local sections. A line bundle is a locally free sheaf of rank one; a finite-rank vector bundle is a locally free sheaf of finite rank, whose rank at a point is the rank on a trivializing neighborhood.

### Statement references

[lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

### Facts & Assumptions

[F1] Under the Axiom of Choice, a normal noetherian ring is a finite product of noetherian integrally closed domains; the zero ring is the empty product. Here noetherian means that every ideal is finitely generated, and a domain has nonzero identity and no zero divisors ([lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)).

[F2] On an affine scheme $\operatorname{Spec} A$, the stalk at a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)). A noetherian ring is normal when all these localizations are integrally closed domains ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[F3] Schemes are locally ringed spaces covered by affine open neighborhoods ([math:def-scheme](https://alphabetamath.cc/item/def-scheme)). An open subscheme has the restricted structure sheaf ([math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)). The points of $\operatorname{Spec} A$ are proper prime ideals, its basic opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, and the zero ring has empty spectrum ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)).

[F4] Under AC, every affine scheme is quasi-compact ([math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)). Given affine opens $U,V$ and $x\in U\cap V$, the common-principal construction in the proof of [math:lem-intersection-affine-opens-covered-principal-opens](https://alphabetamath.cc/item/lem-intersection-affine-opens-covered-principal-opens) supplies a neighborhood of $x$ which is principal in both $U$ and $V$.

[F5] The sections on $D(f)\subseteq\operatorname{Spec} A$ are $A_f$, with the canonical localization restriction maps, including the zero ring of sections on an empty basic open ([math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)). Fractions satisfy $a/s=b/t$ exactly when some allowed denominator $u$ satisfies $u(at-bs)=0$ ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)).

[F6] Localizations of noetherian rings are noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)). Under AC, if a nonempty finite family of $D(f_j)$ covers $\operatorname{Spec} A$, then $(f_1,\ldots,f_s)=A$: apply the radical criterion to $D(1)$ and use $1^n=1$. The same applies to arbitrary positive powers of the $f_j$, since their distinguished opens are unchanged ([math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)).

[F7] The spectrum of a binary product of rings is the disjoint union of the factor spectra as locally ringed spaces ([math:ex-spectrum-product-ring-disjoint-union](https://alphabetamath.cc/item/ex-spectrum-product-ring-disjoint-union)). Ring isomorphisms induce isomorphisms of affine schemes ([math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)).

[F8] Under AC, the spectrum of a noetherian ring is a noetherian topological space, meaning that descending chains of closed sets stabilize ([math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)). A noetherian topological space has finitely many irreducible closed components, which cover it ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)).

[F9] Sheaves satisfy locality and unique gluing for every open cover, including the empty cover of the empty set ([math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)). A sheaf of modules has sectionwise module operations compatible with restrictions, and its morphisms are sectionwise linear sheaf maps ([math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)). For an open subspace $C$, restriction of a sheaf $\mathcal G$ means $(\mathcal G|_C)(W)=\mathcal G(W)$ for $W\subseteq C$ open. Functions on $W$ mean sections of $\mathcal O_X(W)$, and units mean those sections admitting multiplicative inverses.

[F10] A finite-rank vector bundle is a finite locally free sheaf of modules, and a line bundle has rank one. Its rank is independent of the trivializing chart and locally constant, and restriction to an open subscheme preserves local freeness ([math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)).

[A1] The Axiom of Choice is assumed ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). It supplies the choice assumptions in [F1], [F4], [F6] and [F8].

### Proof

**Given:** A noetherian normal scheme $X$ and the Axiom of Choice.

**Goal:** Prove the finite open-and-closed integral normal decomposition and its stated componentwise consequences.

1.1 Fix an affine open $U=\operatorname{Spec} A$. If $U$ is empty, [F5] applied to $D(1)$ gives $A=0$, which is noetherian and the empty product in [F1]. Otherwise take a finite noetherian affine cover $V_i=\operatorname{Spec} B_i$ of $X$. By [F4], the intersections $U\cap V_i$ have common principal neighborhoods; quasi-compactness of $U$ gives finitely many of them covering $U$, say $D_U(f_j)=D_{V_{i(j)}}(g_j)$. Their section rings satisfy $A_{f_j}\cong(B_{i(j)})_{g_j}$ by [F5], so are noetherian by [F6]. To prove $A$ noetherian, fix an ideal $I\subseteq A$. Choose finitely many generators of each $IA_{f_j}$ and represent them by fractions whose numerators belong to $I$. Let $J\subseteq I$ be the ideal generated by all these finitely many numerators. Then $JA_{f_j}=IA_{f_j}$. For any $a\in I$, clearing denominators using [F5] gives integers $m_j\ge1$ with $f_j^{m_j}a\in J$. The opens $D(f_j^{m_j})$ still cover $U$, so [F6] gives $1=\sum_j c_j f_j^{m_j}$ for some $c_j\in A$. Multiplying by $a$ gives $a\in J$. Thus $I=J$ is finitely generated, and $A$ is noetherian. Normality of $X$ and [F2] now give the hypotheses of [F1], hence $A$ is a finite product of noetherian integrally closed domains. By [F7], transporting this ring isomorphism to spectra and iterating the binary-product isomorphism yields disjoint open-and-closed factor subschemes of $U$. For a domain $B$, the zero prime belongs to every nonempty basic open of $\operatorname{Spec} B$, so every nonempty open contains that point, proving irreducibility. Its sections on every nonempty basic open are localizations at nonzero elements, which are domains by the fraction relation in [F5]; hence nilpotent sections vanish on a basic open cover and vanish by [F9]. Thus each factor is integral. Every point of $X$ therefore has an integral affine open neighborhood. [F1, F2, F3, F4, F5, F6, F7, F9, A1, given]

2.1 The finite noetherian affine cover of $X$ has noetherian underlying spaces by [F8]. A descending chain of closed subsets of $X$ stabilizes when its restrictions to these finitely many opens stabilize, so $X$ is topologically noetherian. By [F8], it is covered by finitely many irreducible closed components. If a component $C$ contains $x$, choose an integral open neighborhood $U$ of $x$ from step 1.1. The nonempty open subset $C\cap U$ is dense in $C$: otherwise it and $C\setminus\overline{C\cap U}$ would be disjoint nonempty open subsets of the irreducible space $C$. Also $\overline U$ is irreducible, since a cover of it by two closed sets restricts to such a cover of $U$, forcing $U$ and then its closure into one of them. Thus $C\subseteq\overline U$, and maximality gives $C=\overline U$. Two components containing $x$ must therefore coincide. The finitely many components are pairwise disjoint, and each is open because its complement is the finite union of the others. Give each $C_i$ its restricted structure sheaf, as in [F3]. It is irreducible, reduced by the integral neighborhoods and locality in [F9], and normal because its local rings equal those of $X$. This proves the stated decomposition. For a tuple of sheaves $\mathcal G_i$ on the components, define $\mathcal G(W)=\prod_i\mathcal G_i(W\cap C_i)$ for every open $W\subseteq X$, with coordinatewise restrictions. By [F9] this is a sheaf; restriction recovers $\mathcal G_i$, while locality and gluing identify any sheaf on $X$ with this product of its restrictions. The same formulas apply to morphisms and, using sectionwise scalar restriction, to sheaves of modules. In particular $\mathcal O_X(W)\cong\prod_i\mathcal O_{C_i}(W\cap C_i)$, with inverses of units computed componentwise. Local freeness is checked on neighborhoods within the open $C_i$, so [F10] and this construction specify line bundles and finite-rank vector bundles componentwise, including their morphisms. By [F10] the rank function is well-defined and locally constant. On an irreducible component any two nonempty trivializing open neighborhoods intersect, so their ranks agree; hence the rank is constant on that component. For $X=\varnothing$ the decomposition is the empty union and these constructions use empty products, giving the unique sheaves and the zero ring of functions. [F3, F8, F9, F10, A1, step 1.1] ∎


## Equality in affine K zero and stable isomorphism

[Open item](item-lem-k-zero-stable-equivalence) · level 2


### Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec} A$ be a noetherian affine scheme, where $A$ is a commutative ring with unit, and let $E$ and $F$ be vector bundles on $X$. Their classes in the vector-bundle Grothendieck group $K^0(X)$ are equal if and only if there is an integer $N\geq 0$ and an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$.

A **vector bundle** is a finite locally free $\mathcal O_X$-module: each point has a neighbourhood on which the module is isomorphic to a finite direct sum of copies of $\mathcal O_X$. The displayed isomorphism is called a **stable isomorphism**. The group $K^0(X)$ is the abelian group generated by isomorphism classes $[V]$ of vector bundles, with the relation $[V]=[V']+[V'']$ for every short exact sequence $0\to V'\to V\to V''\to0$ of vector bundles. In particular, it is the vector-bundle group, not the Grothendieck group of coherent sheaves.

### Facts & Assumptions

**Given:** The Axiom of Choice, a noetherian affine scheme $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Prove that $[E]=[F]$ in $K^0(X)$ exactly when $E$ and $F$ are stably isomorphic as stated.

[A1] The assumed Axiom of Choice is used through the affine bundle–module equivalence and splitting in [F1] and the Grothendieck-group convention in [F3]. The complement construction in [F2] itself uses only finite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, every short exact sequence of vector bundles on an affine scheme splits. Associated sheaf and global sections give an equivalence between vector bundles on $X$ and finite projective $A$-modules, preserving finite direct sums; the sheaf associated to $A^N$ is $\mathcal O_X^N$. A finite projective module is a finitely generated module with the lifting property for maps through surjective module homomorphisms. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] Every finite projective $A$-module $P$ has a finite projective complement $Q$ with $P\oplus Q\cong A^N$ for some $N\geq0$. [lem-finite-projective-complements](item-lem-finite-projective-complements)

[F3] A noetherian scheme is locally noetherian and quasi-compact; locally noetherian means admitting an affine open cover by spectra of noetherian rings. Thus $X$ is locally noetherian, so the vector-bundle group has the generators and exact-sequence relations in the statement. Its bundle isomorphism classes form a set. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

[F4] An affine scheme is a locally ringed space isomorphic to $(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$ for a commutative ring $A$ with unit; the structure sheaf in this presentation is the $\mathcal O_X$ used here. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

### Proof

**Proof technique:** Construct the group completion of the direct-sum monoid and then replace a common bundle summand by a free one.

1.1 Let $M$ be the set of isomorphism classes of vector bundles, with addition induced by direct sum and zero the class of the zero bundle. Direct sum is associative and commutative up to isomorphism, so $M$ is a commutative monoid. On $M\times M$ define $(a,b)\sim(c,d)$ when there is $t\in M$ such that $a+d+t=b+c+t$. This is an equivalence relation: reflexivity and symmetry are immediate; for transitivity, if $a+d+t=b+c+t$ and $c+f+u=d+e+u$, adding $f+u$ to the first equality and $b+t$ to the second yields $a+f+(d+t+u)=b+e+(d+t+u)$. Componentwise addition respects the relation. Thus the quotient is an abelian group, with zero represented by $(0,0)$ and inverse of $(a,b)$ represented by $(b,a)$; indeed $(a+b,a+b)\sim(0,0)$. [F3, construct]

2.1 The assignment sending a bundle class $a$ to the class of $(a,0)$ is additive. By [F1], each short exact sequence in the presentation of $K^0(X)$ splits, so its middle bundle is isomorphic to the direct sum of its ends. Consequently this assignment respects every relation in [F3] and induces a homomorphism from $K^0(X)$ to the group constructed in step 1.1. If $[E]=[F]$ in $K^0(X)$, their images are equal, so by the definition of $\sim$ there is a vector bundle $H$ with $E\oplus H\cong F\oplus H$. [A1, F1, F3, step 1.1]

3.1 By [F1], $H$ corresponds to a finite projective $A$-module $P$. Choose $Q$ and $N$ as in [F2], and let $H'$ be the vector bundle associated to $Q$. The direct-sum compatibility in [F1] gives $H\oplus H'\cong\mathcal O_X^N$. Adding $H'$ to both sides of the isomorphism in step 2.1 and using associativity therefore gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. [F1, F2, step 2.1, construct]

4.1 Conversely, if such an isomorphism holds, the split exact-sequence relations in [F3] give $[E]+[\mathcal O_X^N]=[F]+[\mathcal O_X^N]$ in the abelian group $K^0(X)$. Adding the inverse of $[\mathcal O_X^N]$ proves $[E]=[F]$. Together with step 3.1 this establishes the equivalence. [F3, step 3.1, algebra] ∎


## Functions extend across codimension two

[Open item](item-lem-codimension-two-extension) · level 2


### Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction is an isomorphism of sheaves of rings $\mathcal O_X\cong j_*\mathcal O_U$. Consequently restriction gives isomorphisms on global functions and on groups of global units.

Here a noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from that component's generic point to the given point. A global unit is a global function admitting a multiplicative inverse.

### Statement references

[lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-direct-image-sheaf](https://alphabetamath.cc/item/def-direct-image-sheaf)

[math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-specialisation-and-generic-point](https://alphabetamath.cc/item/def-specialisation-and-generic-point)

[math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[math:def-presheaf-of-groups-rings-modules](https://alphabetamath.cc/item/def-presheaf-of-groups-rings-modules)

[math:def-morphism-of-presheaves](https://alphabetamath.cc/item/def-morphism-of-presheaves)

### Facts & Assumptions

[F1] Under the Axiom of Choice, every affine open of a noetherian normal scheme is the spectrum of a finite product of noetherian integrally closed domains; the corresponding factor spectra are open and closed integral subschemes ([lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)).

[F2] Under the Axiom of Choice, a noetherian integrally closed domain $A$ with fraction field $K$ equals the intersection of its height-one localizations inside $K$ ([math:lem-normal-noetherian-domain-intersection-of-height-one-localizations](https://alphabetamath.cc/item/lem-normal-noetherian-domain-intersection-of-height-one-localizations)). If there are no height-one primes, the intersection is understood to be $K$.

[F3] An open immersion identifies its source with an open subscheme ([math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)), with the restricted structure sheaf ([math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)). Direct image is computed on inverse-image opens, with the inherited restriction maps ([math:def-direct-image-sheaf](https://alphabetamath.cc/item/def-direct-image-sheaf)); hence for the open inclusion $j$ one has $(j_*\mathcal O_U)(V)=\mathcal O_U(U\cap V)$ ([math:ex-direct-image-open-immersion](https://alphabetamath.cc/item/ex-direct-image-open-immersion)). Direct image preserves sheaves of rings ([math:lem-direct-image-is-sheaf](https://alphabetamath.cc/item/lem-direct-image-is-sheaf)).

[F4] Sheaves have locality and unique gluing ([math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)). For sheaves of rings, section rings and restriction homomorphisms carry the algebraic structure ([math:def-presheaf-of-groups-rings-modules](https://alphabetamath.cc/item/def-presheaf-of-groups-rings-modules)). A sheaf morphism is a family of section maps commuting with restrictions ([math:def-morphism-of-presheaves](https://alphabetamath.cc/item/def-morphism-of-presheaves)).

[F5] In an affine spectrum, points are primes and the distinguished opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)). Every point of an open set has such a neighborhood inside it ([math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point)). On $\operatorname{Spec} A$, sections on $D(f)$ are $A_f$, with the canonical localization restriction maps ([math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)), and the stalk at $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F6] A point $y$ is a specialization of $x$ if $y\in\overline{\{x\}}$, and a generic point has the whole space as its closure ([math:def-specialisation-and-generic-point](https://alphabetamath.cc/item/def-specialisation-and-generic-point)). Under the Axiom of Choice, specialization of primes is exactly inclusion of ideals ([math:cor-specialisation-order-is-prime-inclusion](https://alphabetamath.cc/item/cor-specialisation-order-is-prime-inclusion)). The height of a prime is the supremum of lengths of strict prime chains ending at it ([math:lem-height-equals-local-dimension](https://alphabetamath.cc/item/lem-height-equals-local-dimension)).

[F7] A stalk consists of germs represented by sections on neighborhoods; two representatives agree as germs precisely when they agree on a smaller neighborhood ([math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)). A morphism of sheaves of sets is an isomorphism exactly when all its stalk maps are bijective ([math:thm-sheaf-morphism-isomorphism-stalkwise](https://alphabetamath.cc/item/thm-sheaf-morphism-isomorphism-stalkwise)).

[F8] The fraction field $K=\operatorname{Frac}(A)$ of a domain is the localization by all nonzero elements ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)); it is a field and $A\to K$ is injective ([math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)).

[F9] For a commutative ring $A$, a multiplicative subset $S$ contains $1$ and is closed under products. The localization $S^{-1}A$ consists of fractions $a/t$, with $t\in S$, with the usual fraction addition and multiplication ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). Two fractions satisfy $a/t=b/u$ exactly when $v(au-bt)=0$ for some $v\in S$ ([math:prop-localisation-zero-equality-and-kernel-criteria](https://alphabetamath.cc/item/prop-localisation-zero-equality-and-kernel-criteria)). Here $A_f$ means localization at $S=\{1,f,f^2,\ldots\}$, and $A_{\mathfrak p}$ means localization at $S=A\setminus\mathfrak p$.

[A1] The Axiom of Choice is assumed for the component reduction [F1], the intersection result [F2], the affine structure-sheaf construction underlying [F5], and the specialization result in [F6] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** A noetherian normal scheme $X$, an open immersion $j:U\hookrightarrow X$ containing all points of component codimension at most one, and the Axiom of Choice.

**Goal:** Show that $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism and obtain the asserted global isomorphisms.

1.1 Identify $U$ with its image. By [F3], $\mathcal O_U=\mathcal O_X|_U$ and $j_*\mathcal O_U$ is a sheaf of rings whose sections on $V$ are $\mathcal O_U(U\cap V)$. The restriction maps $r_V:\mathcal O_X(V)\to\mathcal O_U(U\cap V)$ commute with further restrictions, so [F4] makes them a morphism of sheaves of rings $r:\mathcal O_X\to j_*\mathcal O_U$. It suffices to prove that $r_V$ is bijective on a basis: by the germ description in [F7], every target germ then has a preimage on a basis neighborhood, and two source germs with equal images agree after shrinking to a basis neighborhood; [F7] consequently makes $r$ an isomorphism of sheaves of sets. Its inverse also preserves ring operations, since each $r_V$ is a ring homomorphism. By [F1], affine neighborhoods split into finite disjoint unions of integral affine factor spectra; these factors form a basis, with their restricted structure sheaves. Thus we may take $V=\operatorname{Spec} A$ for a noetherian integrally closed domain $A$. By [F6], its generic point is $(0)$, and prime chains from $(0)$ compute the component codimension: every prime chain can be extended down to $(0)$, while specialization is prime inclusion. Passing to an open neighborhood of a point preserves those chains, because every open containing a specialization also contains its generalizations. The generic point of $V$ is the generic point of its irreducible component of $X$, since $V$ is a nonempty open in that integral component. Thus the generic point and all height-one points of $V$ belong to $U$. It remains to prove bijectivity on these integral affine neighborhoods. [F1, F3, F4, F6, F7, A1, given]

2.1 Put $W=U\cap V$ and $K=\operatorname{Frac}(A)$. For any multiplicative subset $S\subseteq A\setminus\{0\}$, send a fraction $a/t\in S^{-1}A$ to the same fraction in $K$. By [F9] and the absence of zero divisors, equality $a/t=b/u$ in either localization is equivalent to $au=bt$, since the permitted multiplier is nonzero; conversely one may use the multiplier $1$. Hence this assignment is well-defined and injective, and the fraction arithmetic in [F9] makes it a ring homomorphism. This applies to $S=A\setminus\mathfrak p$ and to the powers of any nonzero $f$. By step 1.1, $W$ contains the generic point and is dense in $V$. By [F5] and [F8], a section $s$ on $W$ determines $z\in K$ by its generic germ. For each height-one prime $\mathfrak p$, its point lies in $W$; the germ of $s$ there lies in $A_{\mathfrak p}$ and has generic image $z$, since the restriction maps in [F5] are the canonical localization maps. Thus $z\in A_{\mathfrak p}$ inside $K$ for every such prime, and [F2] gives $z\in A$. The section defined by $z$ agrees with $s$ on every nonempty distinguished open $D(f)\subseteq W$: both sections lie in $A_f$ by [F5] and have the same image in $K$. Here $f\ne0$, since a nonempty $D(f)$ contains a prime not containing $f$; thus $A_f\to K$ is one of the injective localization maps just constructed using [F9]. The distinguished opens cover $W$ by [F5], so locality in [F4] gives equality on $W$. Hence $r_V:A\to\mathcal O_U(W)$ is surjective. It is injective because $W$ contains the generic point and $A\to K$ is injective by [F8]. The empty height-one intersection is $K$ as in [F2], so the field case is included. Together with step 1.1 this proves that $r$ is an isomorphism of sheaves of rings. Taking sections over $X$ and using [F3] gives $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$. A ring isomorphism carries precisely the invertible elements to invertible elements, with inverses preserved, so it also gives the claimed isomorphism of global unit groups. [F2, F3, F4, F5, F8, F9, A1, step 1.1] ∎


## Smooth density and normal codimension over a perfect field

[Open item](item-lem-perfect-base-smooth-density) · level 2



### Statement
Assume the Axiom of Choice. Let $X$ be a reduced finite-type scheme over a perfect field $k$. Its smooth locus is open and meets every irreducible component in a dense open subset. If $X$ is normal, its nonsmooth locus has codimension at least two in every irreducible component.

A field is perfect if all its algebraic extensions are separable. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that every local ring has no nonzero nilpotents; normal means that every local ring is an integrally closed domain. The smooth locus is the set of points where $X\to\operatorname{Spec} k$ is smooth. For an integral component $C$, the codimension of a point is the supremum of lengths of strict chains of irreducible closed subsets from $C$ to the closure of the point; the codimension of a subset is the infimum over its points, with the empty subset having codimension $+\infty$.

### Statement references

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)

[math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

### Facts & Assumptions

**Given:** AC, a perfect field $k$, and a reduced finite-type $k$-scheme $X$.

**Goal:** Prove openness and componentwise density of the smooth locus and, when $X$ is normal, the codimension bound on its complement.

[F1] A finite-variable polynomial algebra over a field is noetherian ([math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)). Here noetherian means that every ideal is finitely generated. Its quotients are noetherian: the images of generators of an ideal preimage generate that ideal in the quotient. A scheme with a finite affine cover by spectra of noetherian rings is noetherian ([math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)).

[F2] Under AC, the smooth locus of a locally finitely presented morphism is open ([math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)). Locally of finite presentation means admitting affine charts with finitely presented coordinate algebras ([math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)). AC means that every family of nonempty sets has a choice function ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F3] For a reduced scheme locally of finite type over a perfect field, smoothness at a point is equivalent to regularity of its local ring; this is an external input ([lem-author-2389e5bafea8-perfect-pointwise-smoothness](item-lem-author-2389e5bafea8-perfect-pointwise-smoothness)).

[F4] Under the assumed AC, a generic local ring of a reduced scheme is a field, and every field is regular local ([lem-author-2389e5bafea8-generic-reduced-local-ring](item-lem-author-2389e5bafea8-generic-reduced-local-ring), [lem-author-2389e5bafea8-field-regular-local](item-lem-author-2389e5bafea8-field-regular-local)). An open subset containing the generic point of a component meets it densely ([lem-author-2389e5bafea8-open-generic-density](item-lem-author-2389e5bafea8-open-generic-density)).

[F5] Under AC, a noetherian normal scheme is a finite disjoint union of open-and-closed integral normal components, and each affine coordinate ring is a finite product of noetherian integrally closed domains ([lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)). For a noetherian integrally closed domain, localization at a height-one prime is a discrete valuation ring ([math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr](https://alphabetamath.cc/item/thm-height-one-localisation-of-normal-noetherian-domain-is-dvr)), and such a ring is regular local ([lem-author-2389e5bafea8-dvr-regular-local](item-lem-author-2389e5bafea8-dvr-regular-local)). The spectrum of a finite product of rings is the disjoint union of the factor spectra ([math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union](https://alphabetamath.cc/item/lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union), Statement, clause 3). Affine stalks are prime localizations ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F6] A subset of an integral scheme with no points of codimension zero or one has codimension at least two ([lem-author-2389e5bafea8-codimension-exclusion](item-lem-author-2389e5bafea8-codimension-exclusion)).

[F7] A scheme has an affine open neighborhood at every point ([math:def-scheme](https://alphabetamath.cc/item/def-scheme)). An irreducible component is a maximal nonempty irreducible subset ([math:def-irreducible-component-of-a-topological-space](https://alphabetamath.cc/item/def-irreducible-component-of-a-topological-space)); irreducibility means that a union of two relatively closed proper subsets cannot be the whole subset ([math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)). Closure is the smallest closed superset. For $T\subseteq W\subseteq X$, closure in $W$ is $W\cap\operatorname{cl}_X(T)$ ([math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior), clause 1). Under AC, every nonempty irreducible closed subset of an affine spectrum has a unique generic point ([math:thm-spectrum-sober](https://alphabetamath.cc/item/thm-spectrum-sober)), meaning a point whose closure is that subset.

[F8] Under AC, nonempty irreducible closed subsets of $\operatorname{Spec} A$ are exactly the sets $V(\mathfrak q)$ for prime ideals $\mathfrak q$, with unique generic point $\mathfrak q$ ([math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)). Here $V(\mathfrak q)$ is the set of primes containing $\mathfrak q$. The height of $\mathfrak p$ is $\dim A_{\mathfrak p}$ ([math:def-height-of-a-prime-ideal](https://alphabetamath.cc/item/def-height-of-a-prime-ideal)); primes of $A_{\mathfrak p}$ correspond, preserving inclusion, to primes of $A$ contained in $\mathfrak p$ ([math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)). Krull dimension is the supremum of lengths of strict chains of prime ideals.

### Proof

1.1 On each finite-type affine chart $\operatorname{Spec} A$, write $A=k[t_1,\ldots,t_n]/I$. By [F1], the polynomial ring is noetherian, so $I$ is finitely generated and $A$ is both noetherian and finitely presented over $k$: a finitely presented $k$-algebra is a polynomial algebra in finitely many variables modulo a finitely generated ideal. Thus $X$ is noetherian and its structure morphism is locally finitely presented. By [F2] its smooth locus $U$ is open. [F1, F2, given]

2.1 Fix an irreducible component $C$. Its closure is irreducible: if the closure lies in a union of two closed sets, irreducibility puts $C$ in one of them, and closedness then puts its closure there. Maximality of $C$ therefore makes $C$ closed. Choose an affine open $W$ meeting $C$. The nonempty open $C\cap W$ is irreducible and dense in $C$: two disjoint nonempty relatively open sets would decompose $C$ into two proper closed sets by taking their complements, and this intersection property implies both assertions. Thus $C\cap W$ is nonempty irreducible and closed in $W$. By [F7] it has a unique generic point $\eta$ in $W$. The subspace-closure identity gives $C\cap W\subseteq\operatorname{cl}_X(\{\eta\})\subseteq C$; taking closure in $X$ and using density yields $\operatorname{cl}_X(\{\eta\})=C$. Any second generic point of $C$ belongs to $W$, since every open meeting its closure contains the point, and would be generic for $C\cap W$; uniqueness in [F7] excludes this. By reducedness and [F4], $\mathcal O_{X,\eta}$ is a field and hence regular local. The pointwise input [F3] gives $\eta\in U$, and [F4] makes $U\cap C$ dense open. The empty scheme has no components and is covered vacuously. [F3, F4, F7, step 1.1, given, choose]

3.1 Now suppose $X$ normal. By step 1.1 and [F5], its components are open-and-closed integral normal schemes. Fix one component $C$ and a point $x$ of codimension one in it. Choose an affine neighborhood $\operatorname{Spec} A\subset C$ of $x$. The component reduction [F5] makes $A$ a finite product of noetherian integrally closed domains; since its spectrum is a nonempty open subset of the irreducible space $C$, it is irreducible, so the finite-product spectrum decomposition in [F5] permits only one domain factor: every domain has the prime ideal $(0)$, hence has nonempty spectrum. Thus $A$ is a noetherian integrally closed domain. The prime $\mathfrak p$ corresponding to $x$ has height one. Indeed, every irreducible closed subset of $C$ containing $x$ meets $W=\operatorname{Spec} A$ in a nonempty irreducible open subset, dense in that closed subset by the same intersection argument as in step 2.1. Intersection with $W$ and closure in $C$ therefore give inverse operations between irreducible closed subsets of $C$ containing $x$ and irreducible closed subsets of $W$ containing $x$; these operations preserve inclusions and strictness. By [F8], the latter subsets are $V(\mathfrak q)$ with $\mathfrak q\subseteq\mathfrak p$, and their inclusion order is reversed. Since $A$ is a domain, $W=V((0))$ corresponds to $(0)$, and the closure of $x$ in $W$ is $V(\mathfrak p)$. Thus strict chains from $C$ to the closure of $x$ correspond to prime chains from $(0)$ to $\mathfrak p$. Every finite chain of primes below $\mathfrak p$ can be extended by these endpoints when absent. Their supremum of lengths is $\dim A_{\mathfrak p}=\operatorname{ht}(\mathfrak p)$ by [F8], hence equals the given codimension one. By [F5], $\mathcal O_{X,x}\cong A_{\mathfrak p}$ is a discrete valuation ring and hence regular local. [F5, F7, F8, step 1.1, step 2.1, given, choose]

4.1 A point of codimension zero in $C$ has closure $C$, since a proper closure would already give a chain of length one. It is therefore the unique generic point constructed in step 2.1 and is smooth by that step, and every codimension-one point is smooth by step 3.1 and [F3]. Hence $C\setminus U$ contains no point of codimension zero or one. Applying [F6] proves its codimension is at least two. AC is used through the explicitly AC-dependent suppliers [F2], [F4], [F5], [F7] and [F8]. [F2, F3, F5, F6, F7, F8, step 2.1, step 3.1] ∎


## Line bundles are detected off codimension two

[Open item](item-lem-codimension-two-picard-restriction) · level 3


### Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective. More precisely, a trivialization $\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ of a line bundle $\mathcal L$ determines a section of $\mathcal L|_U$ and an inverse section of its dual; both extend uniquely to $X$, and their evaluation product is $1$.

A noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from the component's generic point to that point. A line bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X$; its dual is $\mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X)$. The Picard group consists of isomorphism classes of line bundles, with tensor product as its operation and $[\mathcal O_X]$ as identity. Restriction sends a class to the class of its restriction.

### Statement references

[lem-codimension-two-extension](item-lem-codimension-two-extension)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

### Facts & Assumptions

[F1] Under the stated hypotheses and the Axiom of Choice, restriction is an isomorphism of sheaves of rings $\mathcal O_X\xrightarrow{\sim}j_*\mathcal O_U$ ([lem-codimension-two-extension](item-lem-codimension-two-extension)).

[F2] The Picard group has the stated tensor-product law, identity and dual inverses ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

[F3] Schemes, open immersions and irreducible components have their usual meanings ([math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)). A generic point of a component has that component as its closure ([math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)). Here a strict specialization from $x$ to $y$ means $y\in\overline{\{x\}}$ and $y\ne x$; codimension and normality are as defined in the Statement. Noetherian commutative rings and integrally closed domains are used in precisely the senses of [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module) and [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain).

[F4] An $\mathcal O_X$-module is a sheaf of modules with restriction-compatible scalar multiplication; its morphisms are sectionwise linear sheaf morphisms ([math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)). For an open inclusion, $(\mathcal M|_U)(W)=\mathcal M(W)$ on opens $W\subseteq U$, and $(j_*\mathcal N)(V)=\mathcal N(V\cap U)$ on opens $V\subseteq X$ ([math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace), [math:def-direct-image-sheaf](https://alphabetamath.cc/item/def-direct-image-sheaf)). The internal Hom sheaf has sections on $V$ equal to module-sheaf morphisms between the restrictions to $V$; its restriction maps restrict morphisms ([math:def-sheaf-hom](https://alphabetamath.cc/item/def-sheaf-hom)). Thus $(\mathcal L^\vee)|_U$ identifies with the dual of $\mathcal L|_U$, and evaluation is evaluation of these local morphisms.

[F5] Compatible local sections of a sheaf glue uniquely, and equality of sections can be checked on an open cover ([math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)). In particular, inverse sheaf morphisms defined on an open cover glue when they agree on overlaps: apply these axioms to their values on each local section.

[F6] The tensor-product sheaf of module sheaves is the sheafification of their sectionwise tensor-product presheaf ([math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)). Its local construction restricts to the same construction on an open subspace, so the restriction of a tensor product is canonically the tensor product of the restrictions. The Picard-group operation in [F2] uses this tensor product.

[F7] A group homomorphism preserves products ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)). Its kernel consists of the elements mapping to the identity ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)). A group homomorphism is injective if and only if its kernel consists only of the identity of its domain ([math:thm-group-homomorphism-injective-iff-trivial-kernel](https://alphabetamath.cc/item/thm-group-homomorphism-injective-iff-trivial-kernel)).

[A1] The Axiom of Choice is assumed as required by [F1] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** $X$, $U$ and $j$ as in the statement, the Axiom of Choice, and a line bundle $\mathcal L$ on $X$.

**Goal:** Extend a trivialization on $U$ as stated and prove injectivity of restriction on Picard groups.

1.1 For any line bundle $\mathcal M$ on $X$, the natural restriction morphism $\mathcal M\to j_*(\mathcal M|_U)$ is an isomorphism. Indeed, on every open set $V$ where $\mathcal M\cong\mathcal O_V$, it identifies with the restriction of the isomorphism in [F1] to $V$. Such opens cover $X$, and a morphism of sheaves that is an isomorphism locally is an isomorphism: its local inverses agree on overlaps and glue. In particular, sections of $\mathcal M|_U$ extend uniquely to sections of $\mathcal M$ on $X$. The dual $\mathcal L^\vee$ is also a line bundle, since the dual of a local copy of $\mathcal O_X$ is a local copy of $\mathcal O_X$. [F1, F4, F5, A1, given]

2.1 Suppose $\phi:\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ is a trivialization. Set $s_U=\phi(1)$ and let $t_U$ be the section of $\mathcal L^\vee|_U$ corresponding to $\phi^{-1}$; thus $t_U(s_U)=1$. By step 1.1, these sections extend uniquely to $s\in\Gamma(X,\mathcal L)$ and $t\in\Gamma(X,\mathcal L^\vee)$. The evaluation $t(s)$ restricts to $1$ on $U$, so [F1] implies $t(s)=1$ on $X$. Locally write $s=a e$ and $t=b e^\vee$ in a basis $e$ and its dual. Then $ba=1$, so the maps $\mathcal O_X\to\mathcal L$, $1\mapsto s$, and $\mathcal L\to\mathcal O_X$ defined by $t$ are inverse isomorphisms locally, hence globally. [F1, F4, F5, step 1.1, construct]

3.1 Restriction respects tensor products and the identity by their local constructions, so it is a homomorphism of the Picard groups in [F2]. If a class restricts to the identity, its representative admits a trivialization on $U$; step 2.1 makes that representative trivial on $X$. Thus the kernel is trivial, and [F7] makes the restriction homomorphism injective. [F2, F5, F6, F7, step 2.1] ∎
