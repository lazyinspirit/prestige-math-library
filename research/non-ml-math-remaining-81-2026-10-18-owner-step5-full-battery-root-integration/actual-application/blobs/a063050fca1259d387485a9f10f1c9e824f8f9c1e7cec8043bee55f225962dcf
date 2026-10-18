---
id: thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings
kind: theorem
title: The negligible ideal and semisimple trace quotient of root tiltings
status: draft
dependency_level: 8
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-root-of-unity-weyl-and-dual-weyl-module-families
  - thm-root-of-unity-lusztig-module-category-is-braided-rigid
  - thm-root-of-unity-tilting-modules-are-tensor-stable
  - lem-root-of-unity-weyl-flags-summands-and-orthogonality
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych and Ostrik, Tensor Categories
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
      locator: Exercise 8.18.9(i)–(iii), printed pp. 236; complete local finite-dimensional module proof below supplies the exercise arguments.
---

## Statement

Assume the Axiom of Choice inherited from the Weyl/global-basis suppliers. Work in the full-weight-lattice, simple simply-laced branch with odd $\ell>h$ and $\operatorname{ord}(\zeta^2)=\ell$, and use the actual Weyl families of [[def-root-of-unity-weyl-and-dual-weyl-module-families]]. Let $\mathcal T_\zeta$ be the full category of finite-dimensional modules with both Weyl and dual-Weyl filtrations. Put $g=K_{-2\rho^\vee}$, $t_X(a)=\operatorname{Tr}_X(ga)$, and
$$\mathcal N(X,Y)=\{f:X\to Y:t_X(bf)=0\text{ for all }b:Y\to X\}.$$
Then $\mathcal N$ is a two-sided tensor ideal. The quotient $\mathcal T_\zeta/\mathcal N$, with the same objects and morphisms modulo $\mathcal N$, is an idempotent-complete semisimple braided rigid spherical category. Its simple objects are the isomorphism classes of indecomposable tiltings $T$ with $\operatorname{Tr}_T(g)\ne0$. The tensor unit is simple. If exactly finitely many such classes exist, the quotient is a fusion category. This theorem does not identify those classes with an alcove or assert their finiteness; that is the separate quantum-specific classification obligation.

## Facts & Assumptions

**Given:** The root category, Weyl and dual-Weyl families, and trace pairing above.

[F1] [[thm-root-of-unity-lusztig-module-category-is-braided-rigid]] constructs the actual braided rigid full toral-weight module category, pivot $j_X(v)(\phi)=\phi(gv)$, and the strong spherical trace equality $\operatorname{Tr}(ga)=\operatorname{Tr}(g^{-1}a)$ for every module endomorphism.

[F2] [[thm-root-of-unity-tilting-modules-are-tensor-stable]] proves tiltings are closed under finite sums, tensor products and duals, and contain the unit.

[F3] [[lem-root-of-unity-weyl-flags-summands-and-orthogonality]] proves closure under direct summands and finite indecomposable decompositions of tiltings.

[F4] [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]] defines the left categorical trace; with the pivot in [F1] it is exactly $t_X$.

[F5] Choice is inherited from the actual Weyl/global-basis construction, not from the finite matrix argument below ([[def-axiom-of-choice]]).

## Proof

1.1 For $f:X\to Y$ and $b:Y\to X$, rectangular matrix multiplication gives $\operatorname{Tr}_X(g_Xbf)=\operatorname{Tr}_Y(fg_Xb)=\operatorname{Tr}_Y(g_Yfb)$, because module morphisms commute with $g$. In bases, the rectangular trace identity is simply equality of the two finite sums $\sum_{i,j}A_{ij}B_{ji}=\sum_{j,i}B_{ji}A_{ij}$. Thus $t_X(bf)=t_Y(fb)$. Linearity makes each $\mathcal N(X,Y)$ a vector subspace. If $f$ is negligible, $a:W\to X$, $c:Y\to Z$, and $d:Z\to W$, cyclicity rewrites $t_W(dcfa)$ as $t_X(adcf)=0$, since $adc:Y\to X$ is a valid test morphism. Hence negligible morphisms form a composition ideal. [F1, F4, given, algebra]

1.2 By [F3] every tilting is a finite direct sum of indecomposable tiltings. For an indecomposable $T$, generalized eigenspaces of a module endomorphism $a$ are stable graded submodules, and their polynomial spectral projections are module maps. Indecomposability therefore forces one eigenvalue $\lambda$, so $a=\lambda1_T+n$ with $n$ nilpotent. The operator $n$ commutes with $g$, whence $(gn)^r=g^rn^r=0$ for large $r$ and $\operatorname{Tr}(gn)=0$. Consequently $t_T(a)=\lambda d_T$, where $d_T=\operatorname{Tr}_T(g)$. The nonunits of $\operatorname{End}(T)$ are exactly its nilpotents. Each nonunit $n$ lies in the Jacobson radical: for any $a$, the product $an$ cannot be invertible as a finite-dimensional linear map, so it is nilpotent too, making $1-an$ invertible by a finite geometric sum. Conversely a unit cannot lie in the radical. The radical quotient is $\mathbb C$, because $a-\lambda1_T$ is a nonunit and every scalar class is represented. If $d_T=0$, every endomorphism has zero trace and $1_T$ is negligible. If $d_T\ne0$, testing against the identity and using the radical ideal property shows $a$ is negligible exactly when $a$ is in that radical. Thus every retained indecomposable has scalar endomorphism ring in the quotient. [F1, F3, F4, algebra]

2.1 For a module map $b:Y\otimes Z\to X\otimes Z$, define its pivotal partial trace $k:Y\to X$ by $$k=(1_X\otimes\operatorname{ev}_{Z^*})(1_X\otimes j_Z\otimes1_{Z^*})(b\otimes1_{Z^*})(1_Y\otimes\operatorname{coev}_Z).$$ Every displayed factor is a module map by [F1], so $k$ is a test morphism. In a basis $z_i$ and its dual $z_i^*$ it is $k(y)=\sum_i(1_X\otimes z_i^*)(1_X\otimes g_Z)b(y\otimes z_i)$. Finite matrix summation gives $$\operatorname{Tr}_{X\otimes Z}\bigl((g_X\otimes g_Z)b(f\otimes1_Z)\bigr)=\operatorname{Tr}_X(g_Xkf)=0.$$ Thus $f\otimes1_Z$ is negligible. Naturality of the braiding gives $1_Z\otimes f=c_{Y,Z}(f\otimes1_Z)c_{X,Z}^{-1}$, which is negligible by step 1.1. Tensoring $f$ with an arbitrary morphism is a further composition with an identity tensor that morphism, hence is negligible too. This proves the two-sided tensor-ideal assertion without assuming that endomorphisms of a tensor product factor into tensor products. [F1, F2, F4, step 1.1, algebra]

2.2 If indecomposables $T,U$ are not isomorphic and $f:T\to U$, then $bf$ is not invertible for every $b:U\to T$. Otherwise $f$ and $(bf)^{-1}b$ split $T$ as a nonzero direct summand of $U$, and indecomposability would force an isomorphism. Therefore $bf$ is nilpotent by step 1.2, and $t_T(bf)=0$. All morphisms between nonisomorphic indecomposables are negligible. For isomorphic summands, transport by an isomorphism and use the radical description of step 1.2. On finite direct sums the trace is the sum of the diagonal block traces. Testing a single opposite block makes negligibility entrywise in any indecomposable decomposition. Hence quotient morphisms are precisely finite block matrices over $\mathbb C$ on the multiplicity spaces of the retained isomorphism classes, with no morphisms between different classes. This proves semisimplicity, and every matrix idempotent splits by ordinary finite-dimensional linear algebra within sums of the retained objects, proving idempotent completeness. [F3, step 1.2, algebra]

3.1 The ideal proved in steps 1.1–2.1 permits composition and tensor product to descend to the quotient. The evaluations, coevaluations, associators, unit maps, braiding and pivotal maps descend; their identities remain true because a quotient preserves equations and identities. Their traces are the images of the original scalar traces, so the strong spherical equality of [F1] descends as well. The unit is retained since $d_{\mathbf1}=1$; its one-dimensional underlying space has scalar endomorphisms and is indecomposable, so it is simple in the quotient. The Hom spaces are finite dimensional by [F1]. If there are finitely many retained classes, these facts give exactly a fusion category. All finiteness and label identifications beyond this condition are excluded from the conclusion and must be supplied by their actual subsequent proofs. The zero tilting becomes zero, and all constructions above use finite decompositions and sums; inherited Choice is confined to [F5]. [F1, F2, F3, F5, step 1.1, step 2.1, step 2.2, algebra] ∎
