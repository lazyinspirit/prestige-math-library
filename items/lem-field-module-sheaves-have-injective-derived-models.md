---
id: lem-field-module-sheaves-have-injective-derived-models
kind: lemma
title: "Analytic field sheaves have injective derived models"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-locally-constant-sheaf-of-finite-rank,
       lem-ringed-space-module-sheaves-enough-injectives,
       thm-injective-complexes-model-the-bounded-below-derived-category,
       lem-bounded-below-complexes-admit-injective-replacements,
       prop-bounded-derived-localizations-embed-fully-faithfully,
       thm-the-derived-category-inherits-a-triangulated-structure,
       def-triangulated-subcategory, def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       def-module-on-ringed-space, def-locally-ringed-space,
       def-kernel-cokernel-image-sheaves, thm-abelian-sheaves-form-abelian-category,
       def-derived-category-of-an-abelian-category,
       def-analytic-topology-and-finite-smooth-algebraic-stratifications,
       lem-stalk-inverse-image-sheaf, thm-exactness-of-sheaves-stalkwise,
       def-sheaf-on-topological-space, def-presheaf-of-groups-rings-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category D(X) and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "sections 0.2 and 1.1-1.4: the abelian category of sheaves, the bounded derived category, realization of its objects by bounded complexes of injective sheaves, composition and exact triangles"
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "3.3 (complexes of sheaves and quasi-isomorphism), 9.1-9.2 (constructible sheaves and the bounded constructible derived category)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a topological
space and let $k$ be a field. The category $\operatorname{Sh}_k(X)$ of sheaves
of $k$-vector spaces is the category of modules over the ringed space
$(X,k_X)$ with constant structure sheaf $k_X$
([[def-locally-ringed-space]], [[def-module-on-ringed-space]]); it is a locally
small Grothendieck category and carries a functorial injective embedding, and
iterating that embedding on cokernels yields for every $k$-sheaf one specific
injective resolution
([[lem-ringed-space-module-sheaves-enough-injectives]]). Every bounded-below
complex also has a bounded-below termwise injective replacement
([[lem-bounded-below-complexes-admit-injective-replacements]]). With the dependent choice supplied by
AC ([[thm-choice-implies-dependent-implies-countable-choice]]) the bounded-below
injective complexes model the bounded-below derived category:
$K^+(\operatorname{Inj}\operatorname{Sh}_k(X))\to
D^+(\operatorname{Sh}_k(X))$ is an equivalence
([[thm-injective-complexes-model-the-bounded-below-derived-category]]).
Its full subcategory of bounded-below injective complexes with bounded
cohomology models $D^b(\operatorname{Sh}_k(X))$, and morphisms of the bounded
derived category are computed by these replacements; the replacements need
not have bounded terms.

Now let $X$ be a separated finite-type complex algebraic variety and let
$\mathfrak S$ be a finite smooth algebraic stratification with the frontier
condition of $X$
([[def-analytic-topology-and-finite-smooth-algebraic-stratifications]]). Let
$D^b_{\mathfrak S}(X;k)$ be the full subcategory of
$D^b(\operatorname{Sh}_k(X))$ of complexes whose cohomology sheaves are bounded
and constructible with respect to $\mathfrak S$
([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]). Then
$D^b_{\mathfrak S}(X;k)$ is a triangulated subcategory: it is closed under
shifts, isomorphisms and mapping cones. More generally, if two bounded
algebraically constructible complexes are constructible with respect to one
common finite smooth algebraic frontier stratification, then their cone is
bounded and constructible with respect to that stratification.

## Facts & Assumptions

**Given:** The Axiom of Choice; a topological space $X$ and a field $k$; and, in the second part, a separated finite-type complex algebraic variety $X$ with a finite smooth algebraic frontier stratification $\mathfrak S$.

[F1] Under AC, for a ringed space $(X,\mathcal O_X)$ the abelian category of $\mathcal O_X$-modules has enough injectives, and the functorial injective embedding supplies by iteration of cokernels one specific injective resolution $0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$ to each module, with no further selection ([[lem-ringed-space-module-sheaves-enough-injectives]]).

[F2] With supplied bounded-below injective replacements (and DC or supplied homotopy extensions), $K^+(\operatorname{Inj}\mathcal A)\to D^+(\mathcal A)$ is an equivalence of triangulated categories ([[thm-injective-complexes-model-the-bounded-below-derived-category]]).

[F3] In ZF, $\mathrm{AC}\Longrightarrow\mathrm{DC}$, and DC includes a prescribed initial point ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] The derived category with shift $[1]$ and cone triangles is triangulated, and every distinguished triangle gives a long exact cohomology sequence $\cdots\to H^n(X)\to H^n(Y)\to H^n(Z)\to H^{n+1}(X)\to\cdots$ ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[F5] A triangulated subcategory is a full additive subcategory closed under $[1]$ and $[-1]$ satisfying the triangulated axioms with the inherited triangles, equivalently closed under the two-out-of-three operation on distinguished triangles ([[def-triangulated-subcategory]]).

[F6] The stalk of an inverse image sheaf is the stalk over the image point, and a sequence of sheaves is exact if and only if it is exact on every stalk ([[lem-stalk-inverse-image-sheaf]], [[thm-exactness-of-sheaves-stalkwise]]).

[F7] The derived category uses $H^n(X[k])=H^{n+k}(X)$ and the cone convention $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$, $d(y,x)=(d_Yy+fx,-d_Xx)$, with the triangle ending in $X[1]$ ([[def-derived-category-of-an-abelian-category]]).

[F8] Kernels of morphisms of sheaves are formed objectwise, while cokernels and images are the sheafifications of the objectwise constructions ([[def-kernel-cokernel-image-sheaves]]).

[F9] $D^b_{\mathfrak S}(X;k)$ consists of the bounded complexes whose cohomology sheaves restrict on every stratum of $\mathfrak S$ to a sheaf locally constant of finite rank ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]], [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]]).

[F10] A sheaf is locally constant of finite rank when every point has a neighbourhood on which it is isomorphic to a finite free constant sheaf, and a locally constant sheaf of finite rank has finite-dimensional stalks whose dimension is a locally constant function ([[def-locally-constant-sheaf-of-finite-rank]]).

[A1] The Axiom of Choice is used exactly through the functorial injective resolutions of [F1] and through AC $\Rightarrow$ DC for the model equivalence of [F2]; the constructibility closure argument of steps 2.2 to 4.1 is choice-free ([[def-axiom-of-choice]]).

[F11] In a category with enough injectives, a bounded-below complex admits a termwise injective bounded-below quasi-isomorphic replacement under DC or supplied successive injective monomorphisms ([[lem-bounded-below-complexes-admit-injective-replacements]]).

[F12] Under the standing size hypotheses, the canonical functors $D^+(\mathcal A),D^b(\mathcal A)\to D(\mathcal A)$ are fully faithful and exact, with essential images the objects whose cohomology is bounded below and bounded on both sides, respectively ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

## Proof

**Proof technique:** direct.

1.1 (Setup.) A sheaf of $k$-vector spaces on $X$ is an $\mathcal O_X$-module for the ringed space $(X,k_X)$ and conversely, and the stalk $k$ is a local ring, so $(X,k_X)$ is a locally ringed space with $\operatorname{Sh}_k(X)=\mathrm{Mod}(k_X)$; this category is abelian, and $D^b(\operatorname{Sh}_k(X))$ is taken with the cochain conventions of [[def-derived-category-of-an-abelian-category]], every Hom-set assertion being under its standing smallness hypothesis. In the second part, $D^b_{\mathfrak S}(X;k)$ is the full subcategory of complexes whose cohomology sheaves are bounded and $\mathfrak S$-constructible. [given, algebra]

1.2 (Extensions of local systems.) Let $0\to K\to E\xrightarrow{\pi}Q\to0$ be exact on any space $Y$, with $K,Q$ locally constant of finite rank. Near $y\in Y$ trivialize both, and let $e_1,\dots,e_q$ be the constant basis sections of $Q$. By [F6], their germs lift to $E_y$; represent these finitely many lifts by sections $t_i$ and shrink to one neighbourhood $N'$ where $\pi(t_i)=e_i$. For any open $W\subseteq N'$ and locally constant coefficients $a_i:W\to k$, define $s(\sum_i a_ie_i)=\sum_i a_it_i$ by gluing the ordinary scalar multiples on opens where all $a_i$ are constant. Locality makes this well defined and compatible with restriction, and $\pi s=\operatorname{id}$. Identifying $K$ with the kernel of $\pi$, the maps $(u,v)\mapsto u+s(v)$ and $e\mapsto(e-s\pi(e),\pi(e))$ are inverse sheaf morphisms between $K|_{N'}\oplus Q|_{N'}$ and $E|_{N'}$. Therefore $E$ is locally constant of finite rank. This uses finitely many lifts and no connected-neighbourhood hypothesis. [F6, F8, F10, algebra]

2.1 (Injective models.) By [F1] applied to $(X,k_X)$ every $k$-sheaf receives a specific injective resolution, and the category has enough injectives. AC supplies DC by [F3]. For each bounded-below complex, [F11] now supplies a bounded-below termwise injective replacement; the successive embeddings may be taken from the fixed embedding functor of [F1]. Thus the replacement hypothesis of [F2] is met for complexes as well as sheaves, and $K^+(\operatorname{Inj}\operatorname{Sh}_k(X))\to D^+(\operatorname{Sh}_k(X))$ is an equivalence. By [F12], the canonical functors from $D^b$ and $D^+$ to $D$ are fully faithful, with essential images the bounded-cohomology and bounded-below-cohomology objects, respectively. Their commutation with $D^b\to D^+$ therefore makes that functor fully faithful, with essential image precisely the bounded-cohomology objects of $D^+$. Since replacement preserves cohomology, restricting the injective-model equivalence to complexes with bounded cohomology models $D^b(\operatorname{Sh}_k(X))$. Hom groups between bounded complexes are computed by homotopy classes of maps between their bounded-below injective replacements, even when the replacements have unbounded terms. [F1, F2, F3, F11, F12, A1, step 1.1]

2.2 (Shifts and isomorphisms.) Fix $\mathfrak S$ and let $A\in D^b_{\mathfrak S}(X;k)$. By [F7], $H^j(A[m])|_S=H^{j+m}(A)|_S$, so the cohomological support is reindexed and every restricted cohomology sheaf remains locally constant of finite rank. Isomorphic derived objects have isomorphic cohomology sheaves: the cohomology functors on complexes send quasi-isomorphisms to isomorphisms and therefore descend through localization. Hence the subcategory is closed under all shifts and isomorphisms. [F7, F9, F10, step 1.1]

2.3 (Cones on one stratum.) Let $f:A\to B$ be a morphism in $D^b_{\mathfrak S}(X;k)$ and fix a stratum $S$. By [F6], inverse image to $S$ is exact, since its stalk maps are the original stalk maps. It preserves finite sums, differentials and shifts, hence cone complexes by [F7], and it preserves quasi-isomorphisms. Applying it to a bounded roof representing $f$ consequently gives a derived morphism and its cone triangle on $S$; no chain-map representative $A\to B$ is assumed. The long exact sequence [F4] yields $0\to\operatorname{coker}(f^j)\to H^j(C(f))|_S\to\ker(f^{j+1})\to0$, where $f^j:H^j(A)|_S\to H^j(B)|_S$. To check its end terms near $s\in S$, trivialize the finitely ranked source and target. The images of the finitely many constant basis sections have locally constant coordinate functions. Shrinking around $s$ makes these finitely many functions constant, without requiring a connected neighbourhood. The morphism is then a fixed matrix, whose kernel and cokernel are the constant sheaves on the corresponding finite-dimensional vector spaces, as follows either from locally constant functions or from [F8] stalkwise. Thus both end terms are locally constant of finite rank. [F4, F6, F7, F8, F9, F10, step 1.1]

3.1 (Cone constructibility.) Steps 2.3 and 1.2 show that each $H^j(C(f))|_S$ is locally constant of finite rank. If $A$ and $B$ have cohomology only in finite intervals, their cone has cohomology only in the union of the interval for $B$ and the interval for $A$ shifted down one degree, by [F4]. A bounded roof also gives a bounded cone representative. Thus $C(f)\in D^b_{\mathfrak S}(X;k)$. [F4, F9, F10, step 2.3, step 1.2]

4.1 (Triangulated subcategory.) The zero complex belongs to the subcategory, and finite sums do too because their cohomology sheaves are the finite sums of the restricted local systems. By steps 2.2, 3.1 the full additive subcategory $D^b_{\mathfrak S}(X;k)$ contains all isomorphs of its objects, is closed under shifts in both directions, and whenever $f$ is a morphism of the subcategory, a cone of $f$ lies in the subcategory. In a triangulated category the third object of any distinguished triangle with two objects in such a subcategory is isomorphic to a cone of a morphism between objects of the subcategory, so the subcategory is closed under the two-out-of-three operation; by the equivalent characterisation of [F5] it is a triangulated subcategory. If $A$ and $B$ with their cone are only asserted to be constructible with respect to one common finite smooth algebraic frontier stratification, the same argument applies with that stratification in place of $\mathfrak S$, giving the final sentence: their cone is bounded and constructible with respect to that common stratification. Only step 2.1 uses AC, exactly as declared in [A1]. [F5, A1, step 2.2, step 3.1] ∎

## Remarks

- Bounded-below injective complexes model $D^+$; those with bounded cohomology model $D^b$. Arbitrary injective $k$-sheaves are not asserted injective as abelian sheaves, and the flasque or abelian inputs of later arguments are applied to underlying abelian sheaves only.

- The local splitting argument of step 1.2 uses only that the quotient locally has a finite basis of sections ; it is the sheaf-theoretic form of the splitting of an extension of vector spaces, made local by shrinking.
