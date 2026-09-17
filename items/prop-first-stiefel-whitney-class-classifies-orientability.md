---
id: prop-first-stiefel-whitney-class-classifies-orientability
kind: proposition
title: The first Stiefel–Whitney class classifies orientability
status: draft
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-naturality-of-stiefel-whitney-classes", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-real-splitting-principle-with-mod-two-injective-pullback", "def-real-flag-bundle-and-stiefel-whitney-roots", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "prop-orientation-is-equivalent-to-an-so-n-reduction", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-stable-stiefel-space-is-contractible", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-eilenberg-maclane-spaces-represent-singular-cohomology", "def-eilenberg-maclane-space", "thm-numerable-vector-bundles-admit-bundle-metrics", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "thm-homotopy-invariance-of-vector-bundle-pullback", "prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "prop-singular-cohomology-is-contravariantly-functorial", "def-homotopy-equivalence", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Propositions 3.10–3.11 and surrounding discussion, printed pp.86–88"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lectures 33–34 line bundles and orientability, printed pp.119–127"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 orientability and w_1, printed pp.115–124"
---

## Statement

Assume AC. Let $B$ be a CW complex or, more generally, an admissible base,
that is, a paracompact Hausdorff space of CW homotopy type. Then the first
Stiefel–Whitney class gives a natural bijection
$$\operatorname{Vect}^{\mathbb R}_1(B)\xrightarrow{\ \cong\ }H^1(B;\mathbb F_2),\qquad L\longmapsto w_1(L),$$
so real line bundles are classified by their first Stiefel–Whitney class, and
$w_1(L\otimes M)=w_1(L)+w_1(M)$ for numerable real line bundles $L,M$ over
$B$. Over a CW complex the bijection is the composite of the classifying
bijection $[B,\operatorname{Gr}_1(\mathbb R^\infty)]\cong\operatorname{Vect}^{\mathbb R}_1(B)$
for the universal line with the representability bijection of [F1]; over an
admissible base it is transported from a CW model along a homotopy
equivalence. Moreover, for every numerable real bundle $E\to B$ of rank
$n\geq0$,
$$w_1(E)=0\iff E\ \text{is orientable}\iff\text{the structure group of }E\ \text{reduces to }\operatorname{SO}(n),$$
the last equivalence after supplying a bundle metric.

## Facts & Assumptions

**Given:** AC, an admissible base $B$ (in particular a CW complex), a numerable real line bundle $L\to B$ and a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$.

[F1] For an abelian group $A$ and a based CW complex $X$ whose basepoint is a vertex, pullback of the fundamental class gives $[X,K(A,1)]_*\cong H^1(X;A)$, identified with absolute $H^1$ since $1>0$ ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[def-eilenberg-maclane-space]]); the chosen model $\mathbb{RP}^\infty=B(\mathbb Z/2)=K(\mathbb Z/2,1)$ is the one recorded on the prerequisite page and used as $B\operatorname O(1)$ below.

[F2] Pullback of the tautological line gives a natural bijection $[C,\operatorname{Gr}_1(\mathbb R^\infty)]\cong\operatorname{Vect}^{\mathbb R}_1(C)$ on classification-scope bases, in particular on CW complexes, and $w_1$ of a line bundle over an admissible base is computed from any classifying map by $w_1(L)=x_L=c^*a$, independently of the chosen map ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]).

[F3] Fiberwise orthogonal complement with respect to a bundle metric splits a short exact sequence $0\to G'\to G\to G''\to0$ of numerable bundles as $G\cong G'\oplus G''$; in particular $\Lambda^2(L\oplus M)\cong L\otimes M$, tensor products of line bundles commute with pullback up to canonical isomorphism, and a pullback along a constant map is trivial ([[thm-numerable-vector-bundles-admit-bundle-metrics]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F4] The Whitney product formula, naturality of $w_1$, and the injectivity of the flag-bundle pullback hold over admissible bases ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]], [[thm-real-splitting-principle-with-mod-two-injective-pullback]], [[def-real-flag-bundle-and-stiefel-whitney-roots]]).

[F5] Orientations of a metric bundle are naturally in bijection with $\operatorname{SO}(n)$-reductions of its orthonormal frame bundle, and a rank-zero bundle has its canonical orientation ([[prop-orientation-is-equivalent-to-an-so-n-reduction]], [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F6] The quotient $S^\infty\to\mathbb{RP}^\infty$ is the principal $\operatorname O(1)$-bundle $V_1(\mathbb R^\infty)\to \operatorname{Gr}_1(\mathbb R^\infty)$, hence a two-sheeted covering with fiber $S^0$, and its total space $S^\infty$ is contractible ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-stable-stiefel-space-is-contractible]]); for a Serre fibration the homotopy sequence is exact, including its $\pi_0$ terms ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F7] $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$, and the cross product is a ring isomorphism $H^*(\mathbb{RP}^\infty;\mathbb F_2)\otimes H^*(\mathbb{RP}^\infty;\mathbb F_2)\to H^*(\mathbb{RP}^\infty\times\mathbb{RP}^\infty;\mathbb F_2)$, the factor homology being one copy of $\mathbb F_2$ in each degree and hence finite free. Consequently $H^1(\mathbb{RP}^\infty\times\mathbb{RP}^\infty;\mathbb F_2)$ has the basis $a_1=q_1^*a$, $a_2=q_2^*a$, and the axis inclusions $i_1(x)=(x,*)$, $i_2(y)=(*,y)$ satisfy $i_1^*a_1=a$, $i_1^*a_2=0$, $i_2^*a_1=0$, $i_2^*a_2=a$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F8] Let $g:K\to B$ be a homotopy equivalence with homotopy inverse $h$. Then $g^*:H^1(B;\mathbb F_2)\to H^1(K;\mathbb F_2)$ is an isomorphism, by functoriality and homotopy invariance of singular cohomology; and pullback along $g$ is a bijection on isomorphism classes of numerable finite-rank bundles, since $(hg)^*$ and $(gh)^*$ are the respective identities up to canonical pullback comparison and homotopy invariance of bundle pullback ([[def-homotopy-equivalence]], [[prop-singular-cohomology-is-contravariantly-functorial]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]], [[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]], [[thm-homotopy-invariance-of-vector-bundle-pullback]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The model $\mathbb{RP}^\infty$ is a $K(\mathbb Z/2,1)$. By [F6] the antipodal quotient $q:S^\infty\to\mathbb{RP}^\infty$ is a Serre fibration with fiber $S^0$ and contractible total space, so the exact sequence of [F6] gives $\pi_i(\mathbb{RP}^\infty)\cong\pi_{i-1}(S^0)=0$ for $i\geq2$; at $i=1$ it gives an injective map $\pi_1(\mathbb{RP}^\infty)\to\pi_0(S^0)$ whose image is the whole two-point set $\pi_0(S^0)$, because $\pi_0(S^\infty)$ is a point and the sequence is exact at $\pi_0(S^0)$. Hence $\pi_1(\mathbb{RP}^\infty)$ has exactly two elements and is therefore $\mathbb Z/2$. Since $\mathbb{RP}^\infty$ is a based CW complex whose only nonzero homotopy group is this one, it is a model of $K(\mathbb Z/2,1)$ in the sense of [F1], and the representability theorem [F1] applies to it. [F1, F6]

1.2 Tensor products add over a CW complex. Let $q_1,q_2:\mathbb{RP}^\infty\times\mathbb{RP}^\infty\to\mathbb{RP}^\infty$ be the projections and put $N=q_1^*\gamma_1\otimes q_2^*\gamma_1$, a numerable real line bundle. By [F7] every class of $H^1(\mathbb{RP}^\infty\times\mathbb{RP}^\infty;\mathbb F_2)$ is uniquely $\alpha a_1+\beta a_2$ with $\alpha,\beta\in\mathbb F_2$, the two axis inclusions returning $\alpha a$ and $\beta a$. Let $c_N$ classify $N$, so that $w_1(N)=c_N^*a$ by [F2]. The composite $q_1i_1$ is the identity and $q_2i_1$ is constant, and a pullback along a constant map is a trivial line bundle by [F3], so $i_1^*N\cong\gamma_1\otimes\varepsilon^1\cong\gamma_1$; naturality [F4] therefore gives $i_1^*w_1(N)=w_1(i_1^*N)=w_1(\gamma_1)=a$, so the coefficient of $a_1$ is one, and symmetrically that of $a_2$ is one: $w_1(N)=a_1+a_2$. Now let $L,M$ be numerable real line bundles over a CW complex $B$, classified by maps $c_L,c_M:B\to\mathbb{RP}^\infty$, so that $L\cong c_L^*\gamma_1$ and $M\cong c_M^*\gamma_1$ by [F2]. Tensor products commute with pullback [F3], so $L\otimes M\cong(c_L\times c_M)^*N$, and naturality [F4] together with the class of $N$ gives $$w_1(L\otimes M)=(c_L\times c_M)^*(a_1+a_2)=c_L^*a+c_M^*a=w_1(L)+w_1(M).$$ Since $\Lambda^2(L\oplus M)\cong L\otimes M$ by [F3] while $w_1(L\oplus M)=w_1(L)+w_1(M)$ by the Whitney formula [F4], this also gives $w_1(\det(L\oplus M))=w_1(L\oplus M)$ for the rank-two sum. [F2, F3, F4, F7]

2.1 Line bundles over a CW complex are classified by $w_1$. By step 1.1 the chosen model $\mathbb{RP}^\infty=B\operatorname O(1)$ is a $K(\mathbb Z/2,1)$, so the classifying bijection of [F2] composes with the representability bijection of [F1] to give, on a CW complex $B$, a bijection between isomorphism classes of numerable real line bundles over $B$ and $H^1(B;\mathbb F_2)$; on a class with classifying map $c$ the resulting element is $c^*a$, which is exactly $w_1(L)$ by [F2]. Both bijections are natural in the base, as is $w_1$ by [F4], and over a disconnected CW complex both sides split as products over the components, since a line bundle, a classifying map and a cohomology class are each determined componentwise. In particular the trivial bundle corresponds to $0$, so $w_1(L)=0$ forces $L$ to be trivial. [F1, F2, F4, step 1.1]

3.1 Admissible bases by transfer along a CW model. Let $B$ be admissible and choose a homotopy equivalence $g:K\to B$ from a CW complex $K$ with homotopy inverse $h$, which exists by the definition of CW homotopy type and [F8]. Pullback along $g$ is a bijection $\operatorname{Vect}^{\mathbb R}_1(B)\to\operatorname{Vect}^{\mathbb R}_1(K)$, and $g^*:H^1(B;\mathbb F_2)\to H^1(K;\mathbb F_2)$ is an isomorphism, both by [F8]; naturality of $w_1$ [F4] gives $w_1(g^*L)=g^*w_1(L)$ for every numerable real line bundle $L$ over $B$, so the square comparing the two bases commutes. Over the CW complex $K$ the corresponding map is a bijection by step 2.1, and in a commuting square whose other three maps are bijections the fourth map is a bijection as well; hence $L\mapsto w_1(L)$ is a bijection over $B$. The tensor identity transfers the same way: tensor products commute with pullback [F3] and step 1.2 applies over the CW complex $K$, so $$g^*w_1(L\otimes M)=w_1(g^*(L\otimes M))=w_1(g^*L\otimes g^*M)=w_1(g^*L)+w_1(g^*M)=g^*\bigl(w_1(L)+w_1(M)\bigr),$$ and injectivity of $g^*$ [F8] gives $w_1(L\otimes M)=w_1(L)+w_1(M)$ over $B$. [F3, F4, F8, step 1.2, step 2.1]

4.1 The first class is the class of the determinant line. Let $E\to B$ have rank $n\geq1$ over the admissible base $B$ and let $q:\operatorname{Fl}(E)\to B$ be its flag bundle, so $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ is injective. By [F4] and the tensor identity of step 3.1, applied over the admissible base $\operatorname{Fl}(E)$, $$w_1(q^*E)=\sum_{j=1}^{n}w_1(L_j)=w_1(L_1\otimes\cdots\otimes L_n)=w_1(q^*\det E)=q^*w_1(\det E),$$ because $\det(q^*E)\cong q^*\det E$ and $w_1$ is natural [F4]. Injectivity of $q^*$ gives $w_1(E)=w_1(\det E)$. [F4, step 3.1]

5.1 Orientability and the determinant line. Supply $E$ with the metric of [F3]. An orientation of $E_b$ is a choice of generator of $\Lambda^nE_b$ up to positive scaling, so the orientation cover of $E$ is identified fiberwise with the unit sphere bundle $S(\det E)$ of the determinant line, the map sending an orientation to its unit volume element being a homeomorphism over $B$. Hence $E$ is orientable exactly when $S(\det E)$ admits a section, which happens exactly when the line bundle $\det E$ is trivial, since a nowhere-zero section of a line bundle trivializes it and conversely. By the bijection of step 3.1 over the admissible base $B$, the determinant line is trivial exactly when $w_1(\det E)=0$, which by step 4.1 is exactly $w_1(E)=0$. The equivalence with an $\operatorname{SO}(n)$-reduction of the orthonormal frame bundle is [F5]. [F3, F5, step 3.1, step 4.1]

6.1 Boundary cases. For $n=0$ the bundle has its canonical orientation by [F5], the determinant line is the trivial line, and $w_1(E)=0$ by the rank convention, so both sides of the equivalence hold. For $n=1$ the determinant line is $E$ itself and step 4.1 is the identity, while step 3.1 is the asserted classification of line bundles. For the trivial bundle of any rank the nowhere-zero section of the trivial line summand trivializes the determinant line; equivalently $w_1$ vanishes by step 3.1. If $B=\varnothing$ all groups are zero and the unique empty bundle is orientable, matching $w_1=0$. AC is used through [F1], [F2], [F3] and the homotopy-equivalence transfers of [F8], as recorded. [F1, F2, F3, F5, F8, A1, step 3.1, step 4.1, step 5.1] ∎
