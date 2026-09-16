---
id: prop-first-stiefel-whitney-class-classifies-orientability
kind: proposition
title: The first Stiefel–Whitney class classifies orientability
status: draft
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-naturality-of-stiefel-whitney-classes", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-real-splitting-principle-with-mod-two-injective-pullback", "def-real-flag-bundle-and-stiefel-whitney-roots", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "prop-orientation-is-equivalent-to-an-so-n-reduction", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-stable-stiefel-space-is-contractible", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-eilenberg-maclane-spaces-represent-singular-cohomology", "def-eilenberg-maclane-space", "thm-numerable-vector-bundles-admit-bundle-metrics", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-axiom-of-choice"]
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

Assume AC. Let $B$ be a classification-scope base, in particular a CW complex.
Pullback of the universal line gives a natural bijection
$$\operatorname{Vect}^{\mathbb R}_1(B)\xrightarrow{\ \cong\ }H^1(B;\mathbb F_2),\qquad L\longmapsto w_1(L),$$
so real line bundles are classified by their first Stiefel–Whitney class, and
$w_1(L\otimes M)=w_1(L)+w_1(M)$. Moreover, for every numerable real bundle
$E\to B$ of rank $n\geq0$,
$$w_1(E)=0\iff E\ \text{is orientable}\iff\text{the structure group of }E\ \text{reduces to }\operatorname{SO}(n),$$
the last equivalence after supplying a bundle metric.

## Facts & Assumptions

**Given:** AC, a classification-scope base $B$ (for instance a CW complex), a numerable real line bundle $L\to B$ and a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$.

[F1] For an abelian group $A$ and a based CW complex $X$ whose basepoint is a vertex, pullback of the fundamental class gives $[X,K(A,1)]_*\cong H^1(X;A)$, identified with absolute $H^1$ since $1>0$ ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[def-eilenberg-maclane-space]]); the chosen model $\mathbb{RP}^\infty=B(\mathbb Z/2)=K(\mathbb Z/2,1)$ is the one recorded on the prerequisite page and used as $B\operatorname O(1)$ below.

[F2] Pullback of the tautological line gives a natural bijection $[B,\operatorname{Gr}_1(\mathbb R^\infty)]\cong\operatorname{Vect}^{\mathbb R}_1(B)$ on classification-scope bases, and $w_1$ of a line bundle is computed from any classifying map by $w_1(L)=x_L=c^*a$ ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F3] Fiberwise orthogonal complement with respect to a bundle metric splits a short exact sequence $0\to G'\to G\to G''\to0$ of numerable bundles as $G\cong G'\oplus G''$; in particular the tautological line of $P(L\oplus M)$ has a complement $Q$ with $\pi^*(L\oplus M)\cong\gamma\oplus Q$ and $\Lambda^2(L\oplus M)\cong L\otimes M$ ([[thm-numerable-vector-bundles-admit-bundle-metrics]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F4] The Whitney product formula, naturality of $w_1$, and the injectivity of the flag-bundle pullback hold over admissible bases ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]], [[thm-real-splitting-principle-with-mod-two-injective-pullback]], [[def-real-flag-bundle-and-stiefel-whitney-roots]]).

[F5] Orientations of a metric bundle are naturally in bijection with $\operatorname{SO}(n)$-reductions of its orthonormal frame bundle, and a rank-zero bundle has its canonical orientation ([[prop-orientation-is-equivalent-to-an-so-n-reduction]], [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F6] The quotient $S^\infty\to\mathbb{RP}^\infty$ is the principal $\operatorname O(1)$-bundle $V_1(\mathbb R^\infty)\to \operatorname{Gr}_1(\mathbb R^\infty)$, hence a two-sheeted covering with fiber $S^0$, and its total space $S^\infty$ is contractible ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-stable-stiefel-space-is-contractible]]); for a Serre fibration the homotopy sequence is exact, including its $\pi_0$ terms ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The model $\mathbb{RP}^\infty$ is a $K(\mathbb Z/2,1)$. By [F6] the antipodal quotient $q:S^\infty\to\mathbb{RP}^\infty$ is a Serre fibration with fiber $S^0$ and contractible total space, so the exact sequence of [F6] gives $\pi_i(\mathbb{RP}^\infty)\cong\pi_{i-1}(S^0)=0$ for $i\geq2$; at $i=1$ it gives an injective map $\pi_1(\mathbb{RP}^\infty)\to\pi_0(S^0)$ whose image is the whole two-point set $\pi_0(S^0)$, because $\pi_0(S^\infty)$ is a point and the sequence is exact at $\pi_0(S^0)$. Hence $\pi_1(\mathbb{RP}^\infty)$ has exactly two elements and is therefore $\mathbb Z/2$. Since $\mathbb{RP}^\infty$ is a based CW complex whose only nonzero homotopy group is this one, it is a model of $K(\mathbb Z/2,1)$ in the sense of [F1], and the representability theorem [F1] applies to it. [F1, F6]

1.2 Tensor products add. Let $L,M$ be numerable real line bundles over $B$, put $\pi:P(L\oplus M)\to B$ and let $\gamma\subseteq\pi^*(L\oplus M)$ be the tautological line. By [F3] there is a complement line bundle $Q$ with $\pi^*(L\oplus M)\cong\gamma\oplus Q$, and $\Lambda^2(L\oplus M)\cong L\otimes M$ while also $\Lambda^2(\gamma\oplus Q)\cong\gamma\otimes Q$, so $Q\cong\gamma^*\otimes\pi^*(L\otimes M)$. The Whitney formula [F4] applied to $\pi^*(L\oplus M)$ gives $$\pi^*w_1(L)+\pi^*w_1(M)=w_1(\gamma)+w_1(Q)=x+w_1(Q),$$ and applied to $Q\cong\gamma^*\otimes\pi^*(L\otimes M)$ together with $w_1(\gamma^*)=w_1(\gamma)=x$ (the two classes are negatives in $\mathbb F_2$) gives $w_1(Q)=x+\pi^*w_1(L\otimes M)$. Comparing the two displays, the class $x$ cancels and $\pi^*w_1(L\otimes M)=\pi^*(w_1(L)+w_1(M))$. The bundle $L\oplus M$ has rank two, so its projective bundle theorem makes $\pi^*$ injective by [F4]; hence $w_1(L\otimes M)=w_1(L)+w_1(M)$. [F3, F4, algebra]

2.1 Line bundles are classified by $w_1$. Since $\mathbb{RP}^\infty$ is a $K(\mathbb Z/2,1)$ by step 1.1 and is the chosen $B\operatorname O(1)$, the classifying bijection [F2] composes with the representability bijection of [F1] to give a bijection between isomorphism classes of numerable real line bundles over $B$ and $H^1(B;\mathbb F_2)$; on a class with classifying map $c$ the resulting element is $c^*a$, which is exactly $w_1(L)$ by [F2]. Both bijections are natural in $B$. In particular the trivial bundle corresponds to $0$, so $w_1(L)=0$ forces $L$ to be trivial. [F1, F2]

2.2 The first class is the class of the determinant line. Let $E\to B$ have rank $n\geq1$ and let $q:\operatorname{Fl}(E)\to B$ be its flag bundle, so $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ is injective. By [F4] and step 1.2, $$w_1(q^*E)=\sum_{j=1}^{n}w_1(L_j)=w_1(L_1\otimes\cdots\otimes L_n)=w_1(q^*\det E)=q^*w_1(\det E),$$ because $\det(q^*E)\cong q^*\det E$ and $w_1$ is natural. Injectivity of $q^*$ gives $w_1(E)=w_1(\det E)$. [F4, step 1.2]

3.1 Orientability and the determinant line. Supply $E$ with a metric. An orientation of $E_b$ is a choice of generator of $\Lambda^nE_b$ up to positive scaling, so the orientation cover of $E$ is identified fiberwise with the unit sphere bundle $S(\det E)$ of the determinant line, the map sending an orientation to its unit volume element being a homeomorphism over $B$. Hence $E$ is orientable exactly when $S(\det E)$ admits a section, which happens exactly when the line bundle $\det E$ is trivial, since a nowhere-zero section of a line bundle trivializes it and conversely. By step 2.1, $\det E$ is trivial exactly when $w_1(\det E)=0$, which by step 2.2 is exactly $w_1(E)=0$. The equivalence with an $\operatorname{SO}(n)$-reduction of the orthonormal frame bundle is [F5]. [F5, step 2.1, step 2.2]

4.1 Boundary cases. For $n=0$ the bundle has its canonical orientation by [F5], the determinant line is the trivial line, and $w_1(E)=0$ by the rank convention, so both sides of the equivalence hold. For $n=1$ the determinant line is $E$ itself and step 2.2 is the identity. For the trivial bundle of any rank the nowhere-zero section of the trivial line summand trivializes the determinant line; equivalently $w_1$ vanishes by step 2.1. If $B=\varnothing$ all groups are zero and the unique empty bundle is orientable, matching $w_1=0$. AC is used through [F2], the metric of [F3] and the splitting principle, as recorded. [F2, F3, F4, F5, A1, step 2.1, step 2.2] ∎