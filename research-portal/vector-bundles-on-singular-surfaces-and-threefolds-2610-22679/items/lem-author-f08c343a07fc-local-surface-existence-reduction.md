---
id: lem-author-f08c343a07fc-local-surface-existence-reduction
kind: lemma
title: Surface existence from rank-three existence on the cylinder
status: published
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-cylinder-geometry
  - lem-author-f08c343a07fc-local-stabilized-chern
  - thm-serre-affine-splitting
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-free-sheaf-finite-rank
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-algebraic-cycle-and-cycle-group
  - math:def-pullback-module-ringed-spaces
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
  - math:lem-operational-chern-classes-and-whitney-formula
dependency_roles:
  lem-author-f08c343a07fc-local-cylinder-geometry: mathematical-premise
  lem-author-f08c343a07fc-local-stabilized-chern: mathematical-premise
  thm-serre-affine-splitting: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme: mathematical-premise
  math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-algebraic-cycle-and-cycle-group: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement
Assume AC. Fix a field $k$, let $X$ be a smooth affine finite-type $k$-scheme of pure dimension two, and put $Y=X\times_k\mathbb A^1_k$. Suppose every triple in $\prod_{i=1}^3\mathrm{CH}^i(Y)$ is realized by a rank-three bundle. Then every $(a_1,a_2)\in\mathrm{CH}^1(X)\times\mathrm{CH}^2(X)$ is realized by a rank-two bundle on $X$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement. A prescribed tuple is realized when there exists an individual bundle whose indicated Chern coefficients equal that tuple; no set of bundle isomorphism classes is formed.

**Goal:** Realize each prescribed pair by a rank-two bundle on $X$.

[A1] AC is assumed through the Chow, cylinder, coordinate-algebra and affine-splitting suppliers; choosing one realizing bundle for one fixed tuple does not require a simultaneous choice of bundles for all tuples. [[math:def-axiom-of-choice]]

[F1] An affine scheme has a presentation $X\cong\operatorname{Spec}A$. Smooth over $k$ means that its structural morphism to $\operatorname{Spec}k$ is smooth. Finite type means locally of finite type and quasi-compact. For nonempty $X$, pure dimension two means that $\dim X=2$ and every irreducible component has dimension two; dimension is measured by lengths of strict chains of nonempty irreducible closed subsets. [[math:def-affine-scheme]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-algebraic-cycle-and-cycle-group]]

[F2] A rank-$r$ vector bundle is a finite locally free $\mathcal O_X$-module with local free rank $r$ everywhere; $\mathcal O_X^r$ is the sheaf of $r$-tuples of functions. Direct sums have componentwise operations. For an equidimensional $n$-dimensional scheme, $\mathrm{CH}^i(X)=A_{n-i}(X)$ is the group of cycles modulo rational equivalence. The classes $c_i$ are the ordinary Chow Chern coefficients in the quotient-projective-bundle convention. [[math:def-locally-free-sheaf-finite-rank]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]], [[math:def-chern-classes-of-a-vector-bundle]]

[F3] For nonempty $X$, put $\mathbb A^1_k=\operatorname{Spec}k[t]$. The cylinder $Y$ is smooth affine finite type of pure dimension three, and its projection $p:Y\to X$ and zero section $s:X\to Y$ are $k$-morphisms with $p\circ s=\operatorname{id}_X$. [[lem-author-f08c343a07fc-local-cylinder-geometry]]

[F4] On smooth equidimensional finite-type $k$-schemes, Chow pullback preserves codimension and obeys composition and identity. Chern naturality is $c_i(f^*H)=f^*c_i(H)$. Thus both pullbacks used here are defined, including pullback along the zero section, which need not be flat. [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[math:def-chern-classes-of-a-vector-bundle]]

[F5] Under AC the coordinate algebra $A$ of an affine finite-type $k$-scheme is finitely generated over $k$. A finite-type algebra over a principal ideal domain is noetherian, including the field case: a field is an integral domain whose only ideals are $(0)$ and $(1)$. A scheme with a finite affine open cover by spectra of noetherian rings is noetherian. Consequently the one-chart cover $X=\operatorname{Spec}A$ makes $X$ noetherian. [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]], [[math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]], [[math:def-locally-noetherian-and-noetherian-scheme]]

[F6] Under AC, a rank-three bundle on a nonempty noetherian affine scheme of dimension two splits as a trivial line plus a rank-two bundle, since $3>2$. [[thm-serre-affine-splitting]]

[F7] On the smooth schemes here, write $c_t(H)=1+\sum_{i=1}^{r}c_i(H)t^i$ for a rank-$r$ bundle, with coefficientwise equality. Stabilization gives $c_t(E\oplus\mathcal O_X)=c_t(E)$; in particular, applied to the zero bundle, it gives $c_t(\mathcal O_X)=c_t(0)=1$. For a short exact sequence of bundles, the operational Whitney formula becomes the same product formula for ordinary Chow classes, by evaluation on the fundamental class and the smooth Chow-ring identification. [[lem-author-f08c343a07fc-local-stabilized-chern]], [[math:def-chern-classes-of-a-vector-bundle]], [[math:lem-operational-chern-classes-and-whitney-formula]], [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]

[F8] Module pullback is $f^*H=\mathcal O_{X'}\otimes_{f^{-1}\mathcal O_X}f^{-1}H$. The sheaf tensor product is the sheafification of the tensor-product presheaf, and balanced coordinate formulas induce maps of tensor products. These supply the local rank check below. [[math:def-pullback-module-ringed-spaces]], [[math:def-sheaf-tensor-product]], [[math:thm-universal-property-of-module-tensor-products]]

[F9] If $X$ is empty, its cycle groups are zero because there are no integral closed subschemes, hence its Chow groups are zero. The local rank condition is vacuous on the empty scheme, so $\mathcal O_X^2$ is a rank-two bundle and its positive Chern classes lie in zero groups. [[math:def-algebraic-cycle-and-cycle-group]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]], [[math:def-locally-free-sheaf-finite-rank]], [[math:def-chern-classes-of-a-vector-bundle]]

## Proof

1.1 Fix $(a_1,a_2)\in\mathrm{CH}^1(X)\times\mathrm{CH}^2(X)$. If $X$ is empty, [F9] supplies the realizing bundle $\mathcal O_X^2$, completing that case. Suppose henceforth $X$ is nonempty, so [F1] and [F3] give the geometric hypotheses for [F4]. Realize $(p^*a_1,p^*a_2,0)\in\prod_{i=1}^3\mathrm{CH}^i(Y)$ by a rank-three bundle $G$ using the assumed existence. Put $H=s^*G$. On the inverse image of any trivializing open for $G$, the pullback formula in [F8] identifies $H$ with $\mathcal O_X^3$: the coordinate maps are $b\otimes(a_j)\mapsto(ba_j)$ and $(b_j)\mapsto\sum_j b_j\otimes e_j$, with coefficients mapped by the structural ring map and $e_j$ the coordinate vectors. They are balanced, inverse by the tensor relations, and compatible with restriction, hence induce inverse sheaf maps. These opens cover $X$, so $H$ is a rank-three bundle by [F2]. Naturality and Chow functoriality now give $c_i(H)=s^*c_i(G)=s^*p^*a_i=(p\circ s)^*a_i=a_i$ for $i=1,2$. [A1, F1, F2, F3, F4, F8, F9, given, construct, algebra]

2.1 In the nonempty case, [F5] establishes that $X$ is noetherian, and [F1] gives dimension two. Thus [F6] applies to the rank-three bundle $H$ from step 1.1 and gives $H\cong\mathcal O_X\oplus E$ with $E$ of rank two. Transporting the summand inclusion and projection through this isomorphism gives a split short exact sequence $0\to\mathcal O_X\to H\to E\to0$: on each open its maps have the same kernel and surjectivity as the inclusion and projection of pairs. Whitney and the trivial-line normalization in [F7] therefore give $c_t(H)=c_t(\mathcal O_X)c_t(E)=c_t(E)$. Comparing the first two coefficients with step 1.1 yields $c_i(E)=a_i$ for $i=1,2$. Together with the empty case already proved, this realizes every prescribed pair. [A1, F1, F2, F5, F6, F7, step 1.1, algebra] ∎
