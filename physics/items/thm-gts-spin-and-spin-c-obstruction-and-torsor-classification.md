---
id: thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
kind: theorem
title: Spin and Spin-c obstruction and torsor classification
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
proof_strategy: direct
axiom_strength: ZF + full AC inherited from the pinned Spin, line classification and partition-of-unity suppliers.
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models
  - lem-gts-spin-c-lifts-with-fixed-determinant-are-stabilized-spin-lifts
  - lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
  - lem-spin-c-structures-form-an-h2-torsor
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-first-chern-class-classifies-complex-line-bundles
  - thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - thm-mod-two-reduction-of-chern-classes
  - thm-naturality-of-stiefel-whitney-classes
  - prop-first-stiefel-whitney-class-classifies-orientability
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-axiom-of-choice
justified_by: []
dependency_roles:
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models: mathematical-premise
  lem-gts-spin-c-lifts-with-fixed-determinant-are-stabilized-spin-lifts: mathematical-premise
  lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor: mathematical-premise
  lem-spin-c-structures-form-an-h2-torsor: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  thm-first-chern-class-classifies-complex-line-bundles: mathematical-premise
  thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians: mathematical-premise
  def-stiefel-space-grassmannian-and-tautological-bundle: mathematical-premise
  thm-whitney-sum-formula-for-stiefel-whitney-classes: mathematical-premise
  thm-mod-two-reduction-of-chern-classes: mathematical-premise
  thm-naturality-of-stiefel-whitney-classes: mathematical-premise
  prop-first-stiefel-whitney-class-classifies-orientability: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013
      url: https://academicweb.nd.edu/~lnicolae/ind-thm.pdf
      locator: §2.2.2 printed p.83 and §3.2.5 printed pp.130–133; determinant homomorphism and Spin-c criterion/torsor. The arbitrary-bundle scope is proved using the local block-reduction lemma.
    - title: Konstantin Wernli, Lecture Notes on Spin Geometry
      url: https://arxiv.org/pdf/1911.09766v1
      locator: §2.3, good-cover Spin cocycles and the Spin existence/torsor criterion.
---

## Statement

Assume full AC. Let $V\to M$ be an oriented Euclidean real vector bundle of rank $n\ge1$ over a Hausdorff second-countable smooth manifold. A Spin lift exists if and only if $w_2(V)=0\in H^2(M;\mathbb F_2)$. When nonempty, isomorphism classes of Spin lifts form a torsor for $H^1(M;\mathbb F_2)$, acting by tensoring with principal $\mathbb Z/2$-bundles. A Spin-c lift exists if and only if the integral Bockstein $\beta_2(w_2(V))\in H^3(M;\mathbb Z)$ vanishes, equivalently $w_2(V)$ is the mod-two reduction of a class in $H^2(M;\mathbb Z)$. When nonempty, Spin-c lifts form a torsor for $H^2(M;\mathbb Z)$, acting by tensoring with complex line bundles. The determinant line $L$ of any Spin-c lift satisfies $c_1(L)\bmod2=w_2(V)$. These are existence and torsor statements; they choose no preferred lift.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[lem-gts-spin-c-lifts-with-fixed-determinant-are-stabilized-spin-lifts]]

[[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]

[[lem-spin-c-structures-form-an-h2-torsor]]

## Facts & Assumptions

**Given:** Exactly the bundle, base and full AC premise in the Statement; no smoothness of the originally supplied Euclidean bundle beyond its continuous bundle and metric data is added.

[F1] Spin and Spin-c lifts mean principal lifts of the fixed oriented frame bundle, using the stated negative-square Clifford groups. [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[F2] Every continuous Euclidean or Hermitian finite-rank bundle on this base has a smooth isometric model; transport identifies its frame lifts and central twisting actions. [[lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models]]

[F3] A smooth oriented Euclidean rank-$n\ge1$ bundle over this same Hausdorff second-countable smooth-manifold category has a Spin lift exactly when its projectively normalized $w_2$ vanishes, and its lifts then form the stated $H^1$ torsor. That supplier uses the positive full-even cover, which [F4] identifies with the negative-square cover over the same $SO(n)$. [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]

[F4] The positive- and negative-square Euclidean even Spin covers are isomorphic over $SO(n)$, fixing the central signs. Spin-c lifts with a specified determinant identification to $L$ correspond to Spin lifts of $V\oplus L_{\mathbb R}$; the determinant character is $[s,z]\mapsto z^2$. [[lem-gts-spin-c-lifts-with-fixed-determinant-are-stabilized-spin-lifts]]

[F5] Smooth manifold bases are paracompact Hausdorff CGWH of CW homotopy type, and smooth finite-rank bundles are numerable. Smooth partitions of unity subordinate to any continuous bundle's trivializing cover also numerate that bundle. [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]

[F6] On each path-connected component, complex line bundles under tensor product are naturally classified by $H^2(-;\mathbb Z)$ through $c_1$. The universal line is the tautological line on $\mathbb{CP}^{\infty}$. [[thm-first-chern-class-classifies-complex-line-bundles]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F7] Stiefel–Whitney classes are invariant under isomorphism and natural, satisfy the Whitney sum formula, and $w_1$ is zero on an oriented bundle. On the universal complex line the mod-two reduction theorem gives $w_2(L_{\mathbb R})=\rho_2c_1(L)$; by classifying pullback and naturality this holds for every line on the stated base. [[thm-naturality-of-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[prop-first-stiefel-whitney-class-classifies-orientability]], [[thm-mod-two-reduction-of-chern-classes]]

[F8] Once a numerable Spin-c lift of a fixed oriented bundle exists, its numerable lifts form an $H^2(-;\mathbb Z)$ torsor by line-bundle twisting on each path-connected paracompact Hausdorff CGWH CW-type component. [[lem-spin-c-structures-form-an-h2-torsor]]

[F9] Singular cochains with integer coefficients are homomorphisms from free abelian singular chain groups, and cohomology is cocycles modulo coboundaries. [[def-singular-cochain-complex-with-coefficients]], [[def-singular-cohomology-with-coefficients]]

[A1] Full AC supplies the simultaneous local choices in the cited suppliers and integer lifts of mod-two cochains. [[def-axiom-of-choice]]

## Proof

1.1 By [F2], replace the supplied bundle by a smooth oriented isometric model; this preserves its characteristic classes, frame lifts, and twisting actions. Use the cover isomorphism in [F4] to transport the positive-square convention in [F3] to the negative-square convention in [F1], and apply [F3] to that smooth model. A Spin lift exists exactly when $w_2(V)=0$, and its classes then form the stated $H^1(M;\mathbb F_2)$ torsor, with action by principal sign bundles. Transporting through the fixed frame isometry proves precisely the same assertions for the original bundle. No new smoothness hypothesis on that original bundle is used. [F1, F2, F3, F4, A1, given]

1.2 For completeness identify this integral-lift condition with the integral Bockstein, using [F9]. Represent $w_2(V)$ by a mod-two cocycle $z$ and choose an integer lift $\widetilde z$ of its values on singular simplices under [A1]. Since $\delta z=0$, write $\delta\widetilde z=2b$ uniquely with $b$ an integer degree-three cochain. Integer cochain groups have no two-torsion, so $\delta b=0$; by definition $[b]=\beta_2[z]$. If $[b]=0$, write $b=\delta a$; then $\widetilde z-2a$ is an integer degree-two cocycle reducing to $z$. Conversely suppose an integer cocycle $u$ has reduction cohomologous to $z$, say $\rho_2u-z=\delta v$. Lift the mod-two degree-one cochain $v$ to an integer cochain $\widetilde v$ under [A1]. The cocycle $u-\delta\widetilde v$ reduces exactly to $z$ and is an integer cochain lift with zero coboundary, so the Bockstein vanishes. Different choices of integer cochain lift change $b$ by an integer coboundary; changing the mod-two representative is handled by the same correction. Hence $\beta_2w_2(V)=0$ exactly when $w_2(V)$ has an integral cohomology lift. [F9, A1, construct, algebra]

2.1 Given a Spin-c lift $P_c$ let $L=\det(P_c)$, the associated line for $[s,z]\mapsto z^2$. By [F4], it determines a Spin lift of $V\oplus L_{\mathbb R}$. Smooth both summands by [F2] if necessary, and use step 1.1 and [F7] to obtain $$0=w_2(V\oplus L_{\mathbb R})=w_2(V)+w_2(L_{\mathbb R})=w_2(V)+\rho_2c_1(L).$$ Both first Stiefel–Whitney classes vanish because the two summands are oriented, so the Whitney formula has no cross term. Thus every determinant satisfies $\rho_2c_1(L)=w_2(V)$. [F2, F4, F7, step 1.1, algebra]

2.2 Conversely, suppose $c\in H^2(M;\mathbb Z)$ reduces to $w_2(V)$. By [F5]–[F6], choose a complex line $L$ with $c_1(L)=c$ componentwise, give it a Hermitian metric using a subordinate partition, and use its smooth model from [F2]. Then [F7] gives $w_2(V\oplus L_{\mathbb R})=w_2(V)+\rho_2c=0$. By step 1.1 this direct sum has a Spin lift. Its restriction to the block-adapted frames, as proved in [F4], gives a Spin-c lift of $V$ with determinant $L$. Thus existence of an integral lift of $w_2(V)$ is sufficient, including arbitrary integral torsion classes. [F2, F4, F5, F6, F7, A1, step 1.1, construct, algebra]

3.1 By [F5] every principal lift under consideration is numerable: its trivializing cover admits a subordinate smooth partition of unity on the smooth base. Once a Spin-c lift exists, [F8] therefore applies on every path-connected component. It gives a free transitive action by complex line bundles, identified through [F6] with $H^2(-;\mathbb Z)$. This concerns isomorphisms over the fixed frame bundle, as in [F1]; it does not assert that the determinant class distinguishes all Spin-c lifts. In fact central twisting by a line $K$ multiplies determinant transitions by the squares of the transitions of $K$, directly from the character $z\mapsto z^2$, so the determinant changes by $K^{\otimes2}$. [F1, F4, F5, F6, F8, step 2.2, algebra]

4.1 Components of a manifold are open and path connected. Singular chains on their disjoint union form the direct sum of their chain complexes, so singular cochains, cocycles and cohomology in each fixed degree are their products. Bundle lifts and line twists also glue uniquely across the open disjoint components, and full AC chooses one initial lift in each nonempty lift set when necessary. Thus the componentwise existence and torsor conclusions give exactly the claimed groups and actions on all of $M$. For the empty base both lift sets consist of their empty object and each cohomology group is zero. Combining steps 1.1, 1.2, 2.1, 2.2 and 3.1 proves the complete Statement with no chosen preferred lift. [F1, F5, A1, step 1.1, step 2.1, step 2.2, step 1.2, step 3.1, algebra] ∎

## Proof scope

The former assumed classifying-space identification is replaced by proved bundle constructions: the published full-rank Spin criterion, the local smooth-model comparison, and the local Spin-c determinant/block reduction. The general Spin-c criterion then follows from the actual Whitney and mod-two Chern identities and the explicit Bockstein calculation. No unproved classifying $k$-invariant or external theorem is used as a fallback. The Bockstein and determinant conclusions retain the complete original Statement. Physical anomaly and equivariant-orbifold constructions in downstream items remain separate obligations.
