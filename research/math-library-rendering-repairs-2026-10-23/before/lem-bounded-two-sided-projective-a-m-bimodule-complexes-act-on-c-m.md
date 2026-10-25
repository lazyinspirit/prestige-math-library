---
id: lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m
kind: lemma
title: "Bounded two-sided projective bimodule complexes act on C_m"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-signed-totalization-of-graded-a-m-bimodule-actions, lem-bounded-finite-projective-model-for-khovanov-seidel-modules, def-bounded-projective-homotopy-category-for-a-m, def-two-sided-projective-khovanov-seidel-bimodule-functors, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, thm-bimodule-tensor-exactness-and-projective-preservation, lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms, lem-projective-modules-are-flat-over-an-arbitrary-ring, def-mapping-cone-of-a-chain-map, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, def-triangulated-category-axiom-tr-one, def-exact-functor-between-triangulated-categories, def-derived-tensor-product-in-the-bounded-above-setting, def-shift-of-a-chain-complex, thm-a-direct-summand-of-a-projective-is-projective, def-finitely-generated-graded-projective-module]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c, printed pp. 10-11"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles Weibel, An Introduction to Homological Algebra, ch. 10 §10.4, pp. 387-390"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Fix $m\ge1$ and let $C_m=K^b(\operatorname{proj}^{gr}A_m)$ be the bounded
homotopy category of finite graded projective left $A_m$-modules of
[[def-bounded-projective-homotopy-category-for-a-m]], with its homological shift
$[1]$, its cone triangles and its equivalence $\Theta:C_m\to D^b(A_m\text{-mod})$
to the bounded derived category.

Let $R^\bullet=(R^p,d_R^p)$ be a bounded complex of graded $(A_m,A_m)$-bimodules
whose every term $R^p$ is finitely generated graded projective as a left
$A_m$-module **and** as a right $A_m$-module. Then:

1. **Stays in $C_m$.** For every $X\in C_m$ the signed totalization
   $R^\bullet\otimes_{A_m}X$ of
   [[def-signed-totalization-of-graded-a-m-bimodule-actions]] is again an object
   of $C_m$, and the assignment is a functor
   $R^\bullet\otimes_{A_m}-:C_m\to C_m$ which is additive and well defined on
   homotopy classes.
2. **Exactness.** With the canonical natural isomorphism
   $\xi_X:R^\bullet\otimes_{A_m}(X[1])\to(R^\bullet\otimes_{A_m}X)[1]$ of
   step 3.1, the pair $(R^\bullet\otimes_{A_m}-,\xi)$ is an exact functor between
   triangulated categories in the sense of
   [[def-exact-functor-between-triangulated-categories]]: it sends every
   distinguished triangle of $C_m$ to a distinguished triangle of $C_m$.
3. **Agreement with derived tensor.** Every term $R^p$ is flat as a right
   $A_m$-module, so $R^\bullet\otimes_{A_m}-$ carries quasi-isomorphisms between
   bounded complexes to quasi-isomorphisms, and for every $X\in C_m$ the object
   $\Theta(R^\bullet\otimes_{A_m}X)$ represents the derived tensor product
   $R^\bullet\otimes^{\mathbf L}_{A_m}X$ of
   [[def-derived-tensor-product-in-the-bounded-above-setting]]; the identity
   replacement $R^\bullet\to R^\bullet$ and the identity replacement
   $X\to X$ exhibit it, so no enough-projectives hypothesis and no choice
   principle is invoked.

Left projectivity and right projectivity are used for two different clauses
here: left projectivity keeps each tensor term finite graded projective, and
right projectivity makes the complex flat for the derived-tensor comparison.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$ with internal grading, the category $C_m=K^b(\operatorname{proj}^{gr}A_m)$ with its shift, cones and distinguished triangles, a bounded complex $R^\bullet=(R^p,d_R^p)$ of graded $(A_m,A_m)$-bimodules with every $R^p$ finitely generated graded projective as a left and as a right $A_m$-module, and an object $X=(X^q,d_X^q)$ of $C_m$.

[L1] A graded left $A_m$-module is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of internal shifts of $A_m$; a direct summand of a projective object is projective; and a finite direct sum of modules of this form is again a degree-zero direct summand of a finite direct sum of shifts of $A_m$, by adding the ambient sums and the inclusions and projections componentwise ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]], [[thm-a-direct-summand-of-a-projective-is-projective]], [[def-finitely-generated-graded-projective-module]]).

[L2] Let $A,B$ be graded $k$-algebras and $M$ a graded $(B,A)$-bimodule with $\Phi_M=M\otimes_A-$. If $M$ is flat as an underlying right $A$-module then $\Phi_M$ is exact on graded left $A$-modules; if $M$ is finite graded projective as a left $B$-module then $\Phi_M$ carries every finite graded projective left $A$-module to a finite graded projective left $B$-module; neither hypothesis implies the other ([[thm-bimodule-tensor-exactness-and-projective-preservation]]).

[L3] For a bounded complex $R^\bullet$ of graded $(A_m,A_m)$-bimodules and a bounded complex $X^\bullet$ of graded left $A_m$-modules the signed totalization $(R\otimes_{A_m}X)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}X^q$ with $d(r\otimes x)=d_Rr\otimes x+(-1)^pr\otimes d_Xx$ is a bounded complex of graded left $A_m$-modules; the construction is functorial in both variables; its internal shifts are canonical; and a homotopy $h$ of $X^\bullet$ lifts to the homotopy $(-1)^p\mathrm{id}\otimes h$ of the total complex while a homotopy $k$ of $R^\bullet$ lifts to $k\otimes\mathrm{id}$ ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L4] $C_m$ is the full subcategory of $K(A_m\text{-mod})$ on bounded complexes with finite graded projective terms; its morphisms are homotopy classes of chain maps; for a chain map $f:X\to Y$ the cone $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$ is an object of $C_m$, and the homological shift is $(X[1])^n=X^{n+1}$ with $d_{X[1]}=-d_X$; the canonical functor $\Theta:C_m\to D^b(A_m\text{-mod})$ is fully faithful and every bounded complex of $A_m$-modules is isomorphic in $D^b(A_m\text{-mod})$ to the image of an object of $C_m$ ([[def-bounded-projective-homotopy-category-for-a-m]], [[def-mapping-cone-of-a-chain-map]], [[lem-bounded-finite-projective-model-for-khovanov-seidel-modules]]).

[L5] $K(\mathcal A)$, with its shift and distinguished cone triangles, is a triangulated category, so its distinguished triangles are the cone triangles and their isomorphic images, a triangle isomorphic to a distinguished triangle being distinguished by the first axiom ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]], [[def-triangulated-category-axiom-tr-one]]).

[L6] Tensoring a bounded-above acyclic left $R$-complex with a bounded-above complex of flat right $R$-modules gives an acyclic total complex, and symmetrically; hence a bounded-above flat complex preserves quasi-isomorphisms between bounded-above complexes in the other variable ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F7] Every projective left or right module over an arbitrary unital ring is flat on its side, with no Axiom of Choice ([[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[L8] An exact functor $(F,\xi):\mathcal T\to\mathcal T'$ is an additive functor with a natural isomorphism $\xi_X:F(X[1])\to F(X)[1]$ such that every distinguished $X\to Y\to Z\to X[1]$ has distinguished image $F(X)\to F(Y)\to F(Z)\xrightarrow{\xi_XF(h)}F(X)[1]$ ([[def-exact-functor-between-triangulated-categories]]).

[L9] For bounded-above right and left $R$-complexes, the derived tensor product is represented by $\operatorname{Tot}(P\otimes_RM)$ for supplied bounded-above projective replacements $P\to N$, $M\to M$, and it is independent of the supplied representatives up to the canonical comparisons; homotopy comparison maps induce tensor maps with the same Koszul rule ([[def-derived-tensor-product-in-the-bounded-above-setting]]).




## Proof

**Proof technique:** direct.

1.1 *Every tensor term is finite graded projective.* Since $X\in C_m$ every term $X^q$ is a finite graded projective left $A_m$-module, and by hypothesis every $R^p$ is finite graded projective as a left $A_m$-module, so the projective-preservation clause of [L2] applied to the bimodule $R^p$ gives that $R^p\otimes_{A_m}X^q$ is a finite graded projective left $A_m$-module. [L2, L4]

2.1 *$R\otimes_{A_m}X$ lies in $C_m$.* By [L3] the totalization is a bounded complex of graded left $A_m$-modules with terms the finite direct sums $\bigoplus_{p+q=n}R^p\otimes_{A_m}X^q$; each summand is finite graded projective by step 1.1, and by [L1] a finite direct sum of modules that are degree-zero direct summands of finite direct sums of shifts of $A_m$ is again such a direct summand, hence finite graded projective, so every term of the totalization is a finite graded projective left $A_m$-module and the totalization is an object of $C_m$. [step 1.1, L1, L3]

3.1 *Functoriality and additivity.* By [L3] a pair of chain maps acts on the totalization by $f\otimes g$ on the tensor factors, preserving the differentials and the identities and compositions; for fixed $R^\bullet$ this makes $X\mapsto R^\bullet\otimes_{A_m}X$ a functor on complexes. It is additive because on elementary tensors $(\mathrm{id}\otimes(f+g))(r\otimes x)=r\otimes(f+g)(x)=r\otimes fx+r\otimes gx=(\mathrm{id}\otimes f+\mathrm{id}\otimes g)(r\otimes x)$ and sums of elementary tensors span the total object, so the induced maps on morphism groups are group homomorphisms. [step 2.1, L2, L3]

3.2 *Commutation with the homological shift.* For $X\in C_m$ define $\xi_X$ on the summand $R^p\otimes_{A_m}(X[1])^{q}=R^p\otimes_{A_m}X^{q+1}$ of $(R\otimes_{A_m}X[1])^n$ by $\xi_X(r\otimes x):=(-1)^pr\otimes x$, regarded as an element of $((R\otimes_{A_m}X)[1])^n=(R\otimes_{A_m}X)^{n+1}$. Then $\xi_X$ is an isomorphism of graded left $A_m$-modules with inverse given by the same formula, and it is a chain map: on one hand $\xi_Xd(r\otimes x)=\xi_X\bigl(d_Rr\otimes x+(-1)^pr\otimes(-d_Xx)\bigr)=(-1)^{p+1}d_Rr\otimes x-r\otimes d_Xx$, and on the other $d\xi_X(r\otimes x)=(-1)^p\,d(r\otimes x)=(-1)^p\bigl(d_Rr\otimes x+(-1)^pr\otimes d_Xx\bigr)=(-1)^pd_Rr\otimes x+r\otimes d_Xx$, the two expressions differing by the overall sign $-1$ that the shift of a complex carries by [L4]; hence $\xi_Xd_{X[1]}=d_{(R\otimes_{A_m}X)[1]}\xi_X$ and $\xi_X$ is a degree-zero isomorphism of complexes, natural in $X$ because it acts on the tensor factors by the identity up to the fixed sign $(-1)^p$ and is therefore compatible with postcomposition by any chain map. [step 2.1, L4]

3.3 *Commutation with cones.* Let $f:X\to Y$ be a chain map in $C_m$. Identify the underlying graded groups of $R^\bullet\otimes_{A_m}\operatorname{Cone}(f)$ and $\operatorname{Cone}(R^\bullet\otimes_{A_m}f)$: in degree $n$ both are the direct sum of the groups $R^p\otimes_{A_m}Y^q$ with $p+q=n$ and the groups $R^p\otimes_{A_m}X^{q+1}$ with $p+q=n$, the former lying in the $Y$-part and the latter in the shifted $X$-part. Define $\theta$ to be the identity on the $Y$-parts and $(-1)^p$ times the identity on the $X$-parts. Then for $r\otimes y$ in a $Y$-part, $\theta d(r\otimes y)=d_Rr\otimes y+(-1)^pr\otimes d_Yy=d\theta(r\otimes y)$ since a $Y$-part receives no contribution from the cone differential; and for $r\otimes x$ in an $X$-part, $d(r\otimes x)=d_Rr\otimes x+(-1)^pr\otimes f(x)+(-1)^{p+1}r\otimes d_Xx$, so $\theta d(r\otimes x)=(-1)^{p+1}d_Rr\otimes x+(-1)^pr\otimes f(x)+(-1)^{2p+1}r\otimes d_Xx$ and $d\theta(r\otimes x)=d\bigl((-1)^pr\otimes x\bigr)=(-1)^p\bigl(r\otimes f(x)-\partial_{R\otimes X}(r\otimes x)\bigr)$ by the cone formula of [L4], whose terms are $(-1)^pr\otimes f(x)$ and $-(-1)^p\bigl(d_Rr\otimes x+(-1)^pr\otimes d_Xx\bigr)$, and these agree with the previous display. Hence $\theta$ is an isomorphism of complexes $R^\bullet\otimes_{A_m}\operatorname{Cone}(f)\to\operatorname{Cone}(R^\bullet\otimes_{A_m}f)$ over the identities of the tensor factors. [step 2.1, L3, L4]

4.1 *Descent to homotopy classes.* If $f,g:X\to Y$ are homotopic chain maps with $f-g=d_Yh+hd_X$, then by the homotopy clause of [L3] the induced maps satisfy $\mathrm{id}\otimes f-\mathrm{id}\otimes g=dH+Hd$ with $H=(-1)^p\mathrm{id}\otimes h$, so they are homotopic and define the same morphism of $C_m$; hence $R^\bullet\otimes_{A_m}-$ is a well-defined functor $C_m\to C_m$. [step 3.1, L3, L4]

4.2 *Cone triangles are sent to distinguished triangles.* In $C_m$ the distinguished triangles are the cone triangles $X\xrightarrow{f}Y\to\operatorname{Cone}(f)\to X[1]$ and their isomorphic images by [L5]. By step 3.3 the functor carries the middle and third terms of the cone triangle on $f$ to the corresponding terms of the cone triangle on $R^\bullet\otimes_{A_m}f$, and by step 3.2 it carries the connecting morphism, which is induced by the projection of the cone onto the shift of $X$, to the connecting morphism induced by the projection of $\operatorname{Cone}(R^\bullet\otimes_{A_m}f)$ onto $(R^\bullet\otimes_{A_m}X)[1]$ composed with $\xi_X$; hence the image triangle is isomorphic, as a triangle, to the distinguished cone triangle on $R^\bullet\otimes_{A_m}f$ and is therefore distinguished by the first axiom of [L5]. [step 3.2, step 3.3, L5]

5.1 *The functor is additive.* Additivity on homotopy classes follows from additivity on chain maps by step 3.1, because the homotopy class of a sum is the sum of the homotopy classes; the construction fixes the zero object and finite direct sums termwise, so $R^\bullet\otimes_{A_m}-$ is an additive functor in the sense required by [L8]. [step 3.1, step 4.1, L8]

5.2 *Flatness and quasi-isomorphism preservation.* Every $R^p$ is a finitely generated graded projective right $A_m$-module by hypothesis, hence flat as a right $A_m$-module by [F7], so $R^\bullet$ is a bounded, in particular bounded-above, complex of flat right $A_m$-modules; by [L6] tensoring it with a bounded-above acyclic complex of left $A_m$-modules gives an acyclic total complex, and applying this to the cone of a quasi-isomorphism between bounded complexes of left $A_m$-modules shows that $R^\bullet\otimes_{A_m}-$ sends quasi-isomorphisms between such complexes to quasi-isomorphisms. [step 4.1, L6, F7]

6.1 *Exactness.* The functor $R^\bullet\otimes_{A_m}-$ is additive by step 5.1, carries the shift by the natural isomorphism $\xi$ of step 3.2 and carries distinguished triangles to distinguished triangles by step 4.2, so $(R^\bullet\otimes_{A_m}-,\xi)$ satisfies the definition of an exact functor between triangulated categories of [L8]. [step 5.1, step 3.2, step 4.2, L8]

6.2 *Agreement with the derived tensor product.* For $X\in C_m$ the complex $X$ is a bounded complex of graded projective left $A_m$-modules, hence already a projective replacement of itself via the identity, and $R^\bullet$ is by the previous step a bounded complex of flat right $A_m$-modules and, being termwise projective on the right by hypothesis, already a projective replacement of itself via the identity; so the representatives supplied in the definition of the derived tensor product [L9] may be taken to be $R^\bullet$ and $X$ themselves, and $\operatorname{Tot}(R^\bullet\otimes_{A_m}X)=R^\bullet\otimes_{A_m}X$ by [L3]. Consequently the class of $R^\bullet\otimes_{A_m}X$ in $D^b(A_m\text{-mod})$ is the derived tensor product $R^\bullet\otimes^{\mathbf L}_{A_m}X$, and by step 5.2 it depends on $X$ only through its quasi-isomorphism class, so $\Theta(R^\bullet\otimes_{A_m}X)$ represents that derived tensor product. [step 2.1, step 5.2, L3, L9]

7.1 *Conclusion.* For every $X\in C_m$ the signed totalization $R^\bullet\otimes_{A_m}X$ is an object of $C_m$ by step 2.1, the assignment is an additive functor on homotopy classes by steps 3.1 and 4.1 with the shift isomorphism $\xi$ of step 3.2, it sends distinguished triangles to distinguished triangles by step 4.2 and hence is an exact functor of triangulated categories by step 6.1, and it is identified with the derived tensor product by step 6.2, the identity replacements being available because $X$ is projective and $R^\bullet$ is termwise projective on each side. Left projectivity of the terms of $R^\bullet$ enters only through step 1.1 and right projectivity only through steps 5.2 and 6.2, the two shifts and the cone formula are those of $C_m$ fixed in [L4], all replacements and signs are finite and explicit, and no Axiom of Choice, no dependent choice and no enough-projectives hypothesis is used. [step 2.1, step 3.2, step 6.1, step 6.2] ∎
