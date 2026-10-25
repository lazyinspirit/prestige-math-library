---
id: lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
kind: lemma
title: "The quiver exact-sequence correspondence is smooth and proper"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - def-algebraic-stack-and-inertia
  - def-descent-data-and-stack-in-groupoids
  - lem-general-linear-quotient-stacks-are-algebraic
  - lem-nonaffine-effective-affine-algebra-descent
  - lem-ga-torsors-over-affine-schemes-are-trivial
  - def-morphism-representable-by-algebraic-spaces
  - def-smooth-morphism-schemes
  - thm-smooth-morphisms-stable-base-change-composition
  - def-grassmannian-subspaces
  - lem-flag-variety-of-a-vector-space
  - thm-plucker-image-closed
  - lem-grassmannian-standard-affine-charts
  - def-projective-bundle-scheme
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - lem-proper-stable-base-change
  - def-proper-morphism
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-nonaffine-characteristic-zero-group-smooth
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §2.2"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced Class Trinity Term 2026, §2.1"
      url: "https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf"
---

## Statement

Assume AC. Let $Q$ be a finite quiver and let $\mathbf a,\mathbf b$ be
dimension vectors. In the notation of
[[def-quiver-representation-stacks-and-exact-sequence-correspondences]], the
map $q:\mathfrak E_{\mathbf a,\mathbf b}\to
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}$ is a smooth morphism of
algebraic stacks of relative complex dimension
$
r_Q(\mathbf a,\mathbf b)
=\sum_{h:i\to j} b_i a_j-\sum_{i\in Q_0}a_i b_i
=-\chi_Q(\mathbf b,\mathbf a),
$
where
$
\chi_Q(\mathbf u,\mathbf v)
=\sum_i u_i v_i-\sum_{h:i\to j}u_i v_j.
$
The forgetful map $p:\mathfrak E_{\mathbf a,\mathbf b}\to
\mathfrak M_{\mathbf a+\mathbf b}$ is representable and proper. These claims
allow loops, multiple arrows, zero coordinates, and the empty quiver.

## Facts & Assumptions

**Given:** AC, a finite quiver, dimension vectors $\mathbf a,\mathbf b$, the representation and extension stacks of [[def-quiver-representation-stacks-and-exact-sequence-correspondences]].

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]]: the extension atlas consists of block upper-triangular arrow maps, and the subrepresentation has dimension $\mathbf a$.

[F2] [[lem-general-linear-quotient-stacks-are-algebraic]]: the representation stacks at the three dimension vectors have smooth surjective group-action atlases and representable diagonals. This product-general-linear-group result does not cover the block-parabolic quotient used for the extension stack; that quotient is established directly in step 1.1.

[F3] [[def-grassmannian-subspaces]] fixes the subspace parameter set. [[thm-plucker-image-closed]] proves its closed Plucker equations, and [[lem-grassmannian-standard-affine-charts]] gives normalized-matrix affine charts with regular minor-ratio transitions. Their polynomial identities are extended to arbitrary base rings in step 1.2 to construct the relative Grassmannian scheme; no relative representability is inferred from the set definition. Endpoint ranks give a point.

[F4] [[lem-closed-immersion-proper]], [[thm-projective-space-proper-over-base]], [[lem-proper-stable-base-change]], and [[lem-proper-stable-composition]]: closed immersions, projective-space projections, base changes, and compositions preserve properness.

[F5] [[lem-general-linear-group-scheme-and-its-coordinate-ring]] and [[lem-nonaffine-characteristic-zero-group-smooth]]: the general linear groups are affine finite-type group schemes over $\mathbb C$, hence smooth. The block parabolic is explicitly $U\rtimes L$, where $U$ is the vector group of upper-right vertex blocks and $L=G_{\mathbf a}\times G_{\mathbf b}$; projection $U\times L\to L$ is smooth of relative dimension $u$.

[F6] [[def-projective-bundle-scheme]]: the projective bundle of a finite locally free sheaf is locally a projective-space projection; its base changes have the same description.

[F7] [[def-morphism-representable-by-algebraic-spaces]] and [[def-proper-morphism]]: representability is tested after base change to schemes; properness for schemes means separated, finite type, and universally closed. For a morphism of stacks, “representable proper” means representable and proper after every scheme base change.

[F8] [[def-descent-data-and-stack-in-groupoids]], [[def-algebraic-stack-and-inertia]], and [[lem-nonaffine-effective-affine-algebra-descent]]: quotient stacks are fppf stacks in groupoids; an algebraic stack has a representable diagonal and a smooth surjective representable scheme atlas; faithfully flat descent makes affine torsors and their compatible closed subschemes effective.

[F9] [[thm-smooth-morphisms-stable-base-change-composition]]: base change of a smooth morphism is smooth; smoothness is checked locally on source and target opens.

[F10] [[def-smooth-morphism-schemes]]: smoothness is a local property of the source-to-target morphism and is preserved by restriction to open neighbourhoods.

[F11] [[lem-ga-torsors-over-affine-schemes-are-trivial]]: a torsor under the additive group over an affine base is trivial; its proof reduces trivialization to solving an additive Amitsur $1$-cocycle, so step 2.1 applies that proof in each coordinate of $U\cong\mathbb G_a^u$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the general-linear finite-type/quotient, affine-descent, smooth-base-change, and additive-torsor suppliers [F2], [F5], [F8], [F9], and [F11], and through the projective construction and properness suppliers [F3]–[F4] and [F6]. The block-matrix calculations and local adapted frames make no additional choices.

For the quotient-stack smoothness used here, pullback along a smooth atlas of the target reduces the check to a stack over a scheme. A quotient $[Y/U]\to Z$ over a scheme is smooth when its smooth atlas $Y\to[Y/U]$ composes to a smooth map $Y\to Z$; its relative stack dimension is $\dim(Y/Z)-\dim U$. This is the atlas convention used in the proof.



## Proof

**Proof technique:** direct.

1.1 Put $Y=\operatorname{Rep}_Q(\mathbf a,\mathbf b)$. The block description makes $Y$ an affine finite-type scheme. The block parabolic is $P_{\mathbf a,\mathbf b}=U\rtimes L$ with underlying scheme $\mathbb A^u\times L$, where $L=G_{\mathbf a}\times G_{\mathbf b}$; hence $P_{\mathbf a,\mathbf b}$ is affine and finite type, and it is smooth because $U$ is a vector group and each general linear factor of $L$ is smooth by [F5]. The quotient definition in [F1] makes $Y\to[Y/P_{\mathbf a,\mathbf b}]$ representable: after base change by a scheme $T\to[Y/P_{\mathbf a,\mathbf b}]$ corresponding to a $P_{\mathbf a,\mathbf b}$-torsor $R\to T$, the pullback is $R$. Fppf-local triviality and [F8] make this torsor an affine scheme over $T$. To see that $R\to T$ is smooth, extend its structure group to $G_{\mathbf a+\mathbf b}$; the resulting $G$-torsor is a tuple of frame bundles of vector bundles $E_i$, while the reduction to $P_{\mathbf a,\mathbf b}$ specifies subbundles $F_i\subset E_i$ of ranks $a_i$ with locally free quotients. Zariski-locally these sequences split and the bundles admit adapted frames, so $R\to T$ is locally $P_{\mathbf a,\mathbf b}\times T\to T$, which is smooth by [F9] and [F10]; it is surjective as a torsor. For two underlying $P_{\mathbf a,\mathbf b}$-torsors $R,R'$ over $T$, their equivariant isomorphism functor is fppf-locally represented by $P_{\mathbf a,\mathbf b}\times T$, and these affine local representatives descend by [F8]. Fppf-locally trivialize both torsors, with their equivariant maps given by $y,y':T'\to Y$. The compatible isomorphisms are cut out in $P_{\mathbf a,\mathbf b}\times T'$ by $g\cdot y=y'$, the inverse image of $\Delta_Y$ under $(g,t)\mapsto(g\cdot y(t),y'(t))$. This is closed because $Y$ is separated, and the closed subscheme descends effectively by [F8]. Thus the diagonal is affine representable. Effective descent of torsors with maps is obtained by descending their affine schemes, actions and compatible maps by the affine-descent argument in the proof of [F2]; that argument uses only affineness of the group and target, so also applies to this parabolic and to its vector subgroup $U$. By [F8], $[Y/P_{\mathbf a,\mathbf b}]$ is an algebraic stack. Now, for each arrow $h:i\to j$, the free off-diagonal block is $\operatorname{Hom}(V_i^{\mathbf b},V_j^{\mathbf a})$; hence $Y\to \operatorname{Rep}_Q(\mathbf a)\times\operatorname{Rep}_Q(\mathbf b)$ is a vector bundle of rank $e=\sum_{h:i\to j}b_i a_j$. The kernel $U$ of $P_{\mathbf a,\mathbf b}\to L$ consists of upper-right vertex blocks and has dimension $u=\sum_i a_i b_i$. [F1, F2, F5, F8, F9, F10, given, construct]

1.2 First construct the relative Grassmannian used here. For a rank-$n$ bundle $E$ on any scheme $T$ and $0\le a\le n$, impose the homogeneous Plucker relations of [F3] in $\mathbb P_T((\bigwedge^a E)^\vee)$. On a frame chart with $p_I\ne0$, normalize $p_I=1$. The one-replacement coordinates give the entries of a matrix with identity pivot rows; the Plucker relation expressing a coordinate with $s$ nonpivot indices in terms of coordinates with fewer such indices proves inductively that every coordinate is its corresponding maximal minor. This is the calculation in [F3], using polynomial identities and only inversion of $p_I$, hence valid over every $\mathbb C$-algebra, including nonreduced ones. Conversely those minors satisfy all relations by alternating multilinearity. Thus each chart has polynomial coordinate ring in $a(n-a)$ entries and represents graph subbundles whose projection onto the pivot summand is invertible. Any locally direct-summand rank-$a$ subbundle is covered by such charts, since its maximal minors generate the unit ideal. The minor-ratio transitions identify the same subbundle, so the charts represent the subbundle functor, glue under change of frame, and give a closed relative Plucker embedding. Ranks $0,n$ give $T$. Now let an arbitrary scheme $T$ map to $\mathfrak M_{\mathbf a+\mathbf b}$. By the quotient-stack definition this is a family of vector bundles $E_i$ of ranks $a_i+b_i$, with arrow maps. The base change of $p$ parametrizes subbundles $F_i\subset E_i$ of ranks $a_i$ preserved by every arrow. It is the closed subscheme of the relative Grassmannian $\prod_i\operatorname{Gr}_T(a_i,E_i)$ cut out by the vanishing of the bundle maps $F_i\to E_j\to E_j/F_j$ for each arrow $h:i\to j$. The relative Plucker map sends $F_i$ to the line subbundle $\det(F_i)\subseteq\bigwedge^{a_i}E_i$. Under the quotient convention of [[def-projective-bundle-scheme]], this is represented by the quotient line of $(\bigwedge^{a_i}E_i)^\vee$ obtained by dualizing the inclusion. Thus each relative Grassmannian is a closed subscheme of $\mathbb P_T((\bigwedge^{a_i}E_i)^\vee)$; on local frames this is the closed embedding just constructed from [F3], and the equations glue under changes of frame. Each such projective bundle is proper: after any base change $T'\to T$, trivialize $E_i$ over an open cover of $T'$; on each open the projection is a projective-space projection, hence proper by [F4]. The image of a closed set is closed on each member of the cover and therefore closed globally; separatedness and finite type are also local on the base. Thus every base change is proper by [F7]. The product of these proper maps is proper by base change and composition [F4]. The arrow conditions are closed because they are zero loci of regular bundle maps, so the incidence scheme is proper over $T$ as a closed subscheme of that product [F4]. In the standard frame atlas this scheme is exactly $ I_{\mathbf a,\mathbf b}= \{(X,(F_i)):\dim F_i=a_i,\ X_h(F_i)\subseteq F_j \text{ for every }h:i\to j\}. $, and its defining equations are the same zero-locus equations just described; in an ordinary Grassmannian chart they are the vanishing of the complementary matrix block. Hence every scheme base change of $p$ is a proper scheme. [F1, F3, F4, F6, F7, construct]

2.1 Pull back $q$ along the atlas $Z=\operatorname{Rep}_Q(\mathbf a)\times\operatorname{Rep}_Q(\mathbf b) \to\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}$. This fixes the endpoint representations. Every middle representation is a block matrix from step 1.1, and every isomorphism inducing the identity on the fixed endpoints is a unique upper-right vertex block. Hence the pullback stack is $[Y/U]\to Z$, where $Y\to Z$ is the rank-$e$ vector bundle of off-diagonal blocks and $U$ is the rank-$u$ vector group of changes of splitting. For any scheme $T\to[Y/U]$, its base change is a $U\cong\mathbb G_a^u$-torsor, represented by an affine scheme using [F8]. Cover $T$ by affine opens. On each affine base, choose an affine fppf cover of the torsor as in [F11]; the unique group element between the two pulled-back torsor points is a vector $\delta\in(B\otimes_A B)^u$ satisfying the additive Amitsur $1$-cocycle equation coordinatewise. Exactness in [F11] gives $b\in B^u$ with $\delta=b\otimes1-1\otimes b$, and translation by $b$ descends a section, trivializing the torsor there. Thus $Y\to[Y/U]$ is Zariski-locally $U\times T\to T$, which is smooth by [F9] and [F10], and it is surjective as a torsor. The same inverse-image-of-$\Delta_Y$ argument as in step 1.1, with $U$ in place of $P_{\mathbf a,\mathbf b}$, gives $[Y/U]$ an affine representable diagonal, so it is an algebraic stack. Its composite $Y\to Z$ is a vector bundle projection of relative dimension $e$. By the atlas convention just stated, $[Y/U]\to Z$ is smooth of relative stack dimension $e-u$. Smoothness and relative dimension are checked after the displayed smooth target atlas, so the same holds for $q$. Substitution of the definition of $\chi_Q$ gives $e-u=-\chi_Q(\mathbf b,\mathbf a)$, including arrows that are loops or occur with multiplicity. [F1, F2, F5, F8, F9, F10, F11, step 1.1, algebra]

3.1 The construction in step 1.2 identifies every scheme base change of $p$ with the incidence scheme, so [F7] proves that $p$ is representable by schemes, hence by algebraic spaces; the same step proves every such base-changed map is proper. If some $a_i=0$ or $a_i=a_i+b_i$, the corresponding Grassmannian is a point and the same closed-incidence argument applies. Step 2.1 proves the smoothness of $q$, so both claims of the Statement follow. AC is used only through [A1]. [A1, F4, F7, step 1.2, step 2.1] ∎

## Remarks

The two maps have the following correspondence shape:

```tikzcd
\begin{tikzcd}[font=\Large, column sep=large]
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}
& \mathfrak E_{\mathbf a,\mathbf b}
  \arrow[l,"q"',"{\text{smooth}}"]
  \arrow[r,"p","{\text{representable proper}}"']
& \mathfrak M_{\mathbf a+\mathbf b}
\end{tikzcd}
```

For an exact sequence $0\to A\to E\to B\to0$ with dimension vectors
$\mathbf a,\mathbf a+\mathbf b,\mathbf b$, respectively, $q$ records
$(A,B)$ in that order, whereas $p$ records $E$. The smooth leg has relative
stack dimension $-\chi_Q(\mathbf b,\mathbf a)$, as calculated in step 2.1;
the representable proper leg has the subrepresentation incidence schemes
constructed in step 1.2 as its scheme base changes. The span asserts no
commutativity relation, and the proof above is independent of the figure.
