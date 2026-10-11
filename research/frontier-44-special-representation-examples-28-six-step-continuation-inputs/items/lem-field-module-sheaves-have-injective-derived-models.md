---
id: lem-field-module-sheaves-have-injective-derived-models
kind: lemma
title: "Analytic field sheaves have injective derived models"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-locally-constant-sheaf-of-finite-rank,
       lem-ringed-space-module-sheaves-enough-injectives,
       thm-injective-complexes-model-the-bounded-below-derived-category,
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
([[lem-ringed-space-module-sheaves-enough-injectives]]). These resolutions are
bounded-below injective replacements, so with the dependent choice supplied by
AC ([[thm-choice-implies-dependent-implies-countable-choice]]) the bounded-below
injective complexes model the bounded derived category:
$K^+(\operatorname{Inj}\operatorname{Sh}_k(X))\to
D^+(\operatorname{Sh}_k(X))$ is an equivalence, and morphisms of the bounded
derived category are computed by these replacements
([[thm-injective-complexes-model-the-bounded-below-derived-category]]).

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

[A1] The Axiom of Choice is used exactly through the functorial injective resolutions of [F1] and through AC $\Rightarrow$ DC for the model equivalence of [F2]; the constructibility closure argument of steps 2.2 to 5.1 is choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (Setup.) A sheaf of $k$-vector spaces on $X$ is an $\mathcal O_X$-module for the ringed space $(X,k_X)$ and conversely, and the stalk $k$ is a local ring, so $(X,k_X)$ is a locally ringed space with $\operatorname{Sh}_k(X)=\mathrm{Mod}(k_X)$; this category is abelian, and $D^b(\operatorname{Sh}_k(X))$ is taken with the cochain conventions of [[def-derived-category-of-an-abelian-category]], every Hom-set assertion being under its standing smallness hypothesis. In the second part, $D^b_{\mathfrak S}(X;k)$ is the full subcategory of complexes whose cohomology sheaves are bounded and $\mathfrak S$-constructible. [given, algebra]

2.1 (Injective models.) By [F1] applied to $(X,k_X)$ every $k$-sheaf $\mathcal F$ receives one specific injective resolution $0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$, i.e. a supplied bounded-below injective replacement; these exist under AC, which is assumed. By [F3] AC supplies the dependent choice required by [F2], so $K^+(\operatorname{Inj}\operatorname{Sh}_k(X))\to D^+(\operatorname{Sh}_k(X))$ is an equivalence of triangulated categories. Consequently Hom groups in $D^+$, and therefore Hom groups between bounded complexes, are computed by homotopy classes of maps between these specific injective replacements. This is exactly the model statement for $\operatorname{Sh}_k(X)$. [F1, F2, F3, A1, step 1.1]

2.2 (Shifts and isomorphisms.) Fix the stratification $\mathfrak S$ and let $A\in D^b_{\mathfrak S}(X;k)$. For the shift, $H^n(A[m])=H^{n+m}(A)$ by [F7], so on each stratum the restriction of $H^n(A[m])$ is the shift of the restriction of $H^{n+m}(A)$, which is locally constant of finite rank by [F9] and [F10]; the cohomological support is merely reindexed, so $A[m]\in D^b_{\mathfrak S}(X;k)$ for every $m$. If $A\cong A'$ in $D^b(\operatorname{Sh}_k(X))$ then the cohomology sheaves are isomorphic, because $H^j$ is additive on the homotopy category and quasi-isomorphisms induce isomorphisms on cohomology and are inverted in the localization; hence $A'\in D^b_{\mathfrak S}(X;k)$ as well. Thus the subcategory is closed under shifts and contains every complex isomorphic to one of its objects. [F7, F9, F10, step 1.1]

2.3 (Cones on one stratum.) Let $f:A\to B$ be a morphism of $D^b_{\mathfrak S}(X;k)$ with cone $C(f)$. Fix a stratum $S$ of $\mathfrak S$, a point $s\in S$ and an open neighbourhood $V$ of $s$ in $X$ such that $S\cap V$ is closed in $V$; sheaves on the locally closed subspace $S$ near $s$ are computed on such pieces. Restriction to a subspace has, at a point, the stalk over the image point by [F6], and exactness of sequences of sheaves can be tested on stalks by [F6]; since finite direct sums and shifts are computed stalkwise from the same data, restriction commutes with the finite direct sums, the shifts and the differentials appearing in the cone formula $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ of [F7]. Hence $C(f)|_S$ is the cone of the induced chain map $f|_S:A|_S\to B|_S$, and the long exact cohomology sequence of the cone triangle [F4] gives, in every degree, a short exact sequence of sheaves on $S$ $0\to\operatorname{coker}(f^j)\to H^j(C(f))|_S\to\ker(f^{j+1})\to0$ where $f^j:H^j(A)|_S\to H^j(B)|_S$ is the map induced on cohomology sheaves. Here $H^j(A)|_S$ and $H^j(B)|_S$ are locally constant of finite rank by [F9] and [F10]. On a neighbourhood where both trivialize, $f^j$ becomes a matrix whose entries are locally constant functions; shrinking to a connected neighbourhood makes every entry constant, and then the kernel, image and cokernel of a linear map are the constant sheaves with the corresponding kernel, image and cokernel as values, these being computed objectwise and sheafified in agreement with [F8]. Hence $\ker(f^{j+1})$ and $\operatorname{coker}(f^j)$ are locally constant of finite rank on $S$. [F4, F6, F7, F8, F9, F10, step 1.1]

3.1 (Extensions of local systems are local systems.) Let $0\to K\to E\xrightarrow{\ \pi\ }Q\to0$ be a short exact sequence of $k$-sheaves on a space $Y$ in which $K$ and $Q$ are locally constant of finite rank. Fix $y\in Y$ and a neighbourhood on which $K$ and $Q$ trivialize; shrink it to a connected neighbourhood $N$ over which $Q$ has a finite basis of constant sections $e_1,\dots,e_q$. The stalk map $\pi_y:E_y\to Q_y$ is surjective, so the finitely many basis germs lift to elements of $E_y$; each lift is represented by a section over some neighbourhood of $y$, and on a common smaller neighbourhood $N'\subseteq N$ the images of these sections are the constant sections $e_1,\dots,e_q$, by the stalkwise description of sheaf maps. Define $s:Q|_{N'}\to E|_{N'}$ on sections over an open $W\subseteq N'$ by sending the section $\sum_ia_ie_i|_W$, with locally constant functions $a_i:W\to k$, to the section $\sum_ia_it_i|_W$, where $t_i$ are the lifted sections; this is well defined, compatible with restrictions, $k$-linear on sections, and satisfies $\pi\circ s=\operatorname{id}$. Then $(u,v)\mapsto u+s(v)$ is a morphism $K|_{N'}\oplus Q|_{N'}\to E|_{N'}$ which is injective on every stalk, since $\pi(u+s(v))=v$ vanishes only for $v=0$ and then $u=0$; the stalk exact sequence $0\to K_y\to E_y\to Q_y\to0$ of vector spaces has $\dim E_y=\dim K_y+\dim Q_y$ and the vector-space sequence splits, so the injective stalk maps are isomorphisms. A morphism of sheaves that is an isomorphism on every stalk is an isomorphism, so $E|_{N'}\cong K|_{N'}\oplus Q|_{N'}$ is a direct sum of sheaves locally constant of finite rank, hence itself locally constant of finite rank. No choice beyond finitely many lifts and the local trivializations is used. [F10, step 2.3]

4.1 (Cone constructibility.) Combining steps 2.3 and 3.1, for every stratum $S$ and every $j$ the sheaf $H^j(C(f))|_S$ is an extension of the locally constant finite-rank sheaves $\ker(f^{j+1})$ and $\operatorname{coker}(f^j)$, hence is locally constant of finite rank. The cone $C(f)$ is a bounded complex, because $A$ and $B$ are bounded, so $C(f)\in D^b_{\mathfrak S}(X;k)$. Thus $D^b_{\mathfrak S}(X;k)$ is closed under mapping cones of its morphisms. [F9, F10, step 2.3, step 3.1]

5.1 (Triangulated subcategory.) By steps 2.2, 4.1 the full subcategory $D^b_{\mathfrak S}(X;k)$ contains all isomorphs of its objects, is closed under shifts in both directions, and whenever $f$ is a morphism of the subcategory, a cone of $f$ lies in the subcategory. In a triangulated category the third object of any distinguished triangle with two objects in such a subcategory is isomorphic to a cone of a morphism between objects of the subcategory, so the subcategory is closed under the two-out-of-three operation; by the equivalent characterisation of [F5] it is a triangulated subcategory. If $A$ and $B$ with their cone are only asserted to be constructible with respect to one common finite smooth algebraic frontier stratification, the same argument applies with that stratification in place of $\mathfrak S$, giving the final sentence: their cone is bounded and constructible with respect to that common stratification. Only steps 2.1 uses AC, exactly as declared in [A1]. [F5, A1, step 2.2, step 4.1] ∎

## Remarks

- The lemma identifies the objects that model the bounded derived category; it
  does not assert that arbitrary injective $k$-sheaves are injective as abelian
  sheaves, and the flasque or abelian inputs of later arguments are applied to
  underlying abelian sheaves only.

- The local splitting argument of step 3.1 uses only that the quotient locally
  has a finite basis of sections and that the middle stalk is finite-dimensional
  over the field; it is the sheaf-theoretic form of the splitting of an
  extension of vector spaces, made local by shrinking.
