---
id: lem-cmp-smooth-quintic-tangent-chern-classes
kind: lemma
title: "Tangent Chern classes of a smooth quintic threefold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: "Full AC, inherited from the Chern-class suppliers."
deps:
  - def-axiom-of-choice
  - def-real-and-complex-topological-vector-bundle
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - cor-short-exact-sequences-of-vector-bundles-split-over-the-base
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - def-chern-classes-from-the-projective-bundle-relation
  - def-complex-projective-bundle-and-tautological-complex-line
  - thm-integral-complex-projective-bundle-theorem
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-real-and-complex-topological-vector-bundle: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  cor-short-exact-sequences-of-vector-bundles-split-over-the-base: mathematical-premise
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-complex-projective-bundle-and-tautological-complex-line: mathematical-premise
  thm-integral-complex-projective-bundle-theorem: mathematical-premise
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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
physical_scope: null
sources:
  references:
    - title: "J. W. Milnor and J. D. Stasheff, Characteristic Classes, Annals of Mathematics Studies 76, Princeton University Press (1974)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§§14.2, 14.4, and 14.6; Chern-class construction, Whitney product, and tangent bundle of complex projective space."
    - title: "Piotr Achinger, Algebraic Geometry lecture notes, Spring 2026"
      url: "https://achinger.impan.pl/ag2026/notes-apr21.pdf"
      locator: "§17.2, Theorem 17.2.3 Euler sequence and Proposition 17.2.4 conormal sequence, printed pp. 93–94."
---

## Statement

Assume AC. Let $X=V(f)\subset\mathbb P^4_{\mathbb C}$ be a smooth degree-five hypersurface, let $H=c_1(\mathcal O_{\mathbb P^4}(1))|_X$, and use the standard degree normalization $\int_XH^3=5$. Then the Euler and normal exact sequences give $K_X\cong\mathcal O_X$ and
$$c(TX)=\frac{(1+H)^5}{1+5H}=1+10H^2-40H^3,$$
with terms of cohomological degree greater than six omitted. In particular $c_1(TX)=0$, $c_2(TX)=10H^2$, and $c_3(TX)=-40H^3$.

## Facts & Assumptions

**Given:** AC; a smooth complex degree-five hypersurface $X=V(f)$ in $\mathbb P^4$; the restricted hyperplane class $H$; and the degree convention $\int_XH^3=5$.

[F1] [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives naturality of integral Chern classes, line normalization $c_1(L)=e(L_{\mathbb R})$, and the Whitney product formula for numerable complex bundles over path-connected CW bases.

[F2] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]] gives $c_1(L\otimes M)=c_1(L)+c_1(M)$ for numerable complex lines on the stated bases under AC.

[F3] [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]] states that every finite-dimensional Hausdorff second-countable smooth manifold is paracompact Hausdorff and CGWH, has CW homotopy type, and every smooth finite-rank vector bundle on it is numerable.

[F4] A vector bundle is numerable when it has a linear trivializing cover with a locally finite subordinate partition of unity ([[def-real-and-complex-topological-vector-bundle]]). Pulling such a cover and partition back by a continuous map gives a numeration of the pulled-back bundle.

[F5] Every short exact sequence of finite-rank real or complex vector bundles over a paracompact Hausdorff base splits as a vector-bundle sequence ([[cor-short-exact-sequences-of-vector-bundles-split-over-the-base]]).

[F6] A homotopy equivalence induces an isomorphism on singular cohomology with integer coefficients ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F7] On paracompact Hausdorff CGWH bases of CW homotopy type, [[thm-integral-complex-projective-bundle-theorem]] gives the unique projective-bundle relation, and [[def-chern-classes-from-the-projective-bundle-relation]] defines the Chern classes as its coefficients.

[F8] The quotient construction of a projective bundle commutes with pullback: $P(f^*E)\cong N\times_M P(E)$ for $f:N\to M$, and its tautological line is the pullback of the tautological line on $P(E)$ ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F9] The Euler class of an oriented numerable real bundle is natural under orientation-preserving pullback ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[A1] Use $\mathbb P^4$ as the space of complex lines $\ell\subset\mathbb C^5$, with tautological line $\gamma=\mathcal O(-1)$, $\mathcal O(1)=\gamma^*$, $\mathcal O(k):=\mathcal O(1)^{\otimes k}$, and $\mathcal O_X(k):=\mathcal O(k)|_X$; $\mathcal O$ is the trivial holomorphic line. In these sequences $T_M$ abbreviates the holomorphic tangent bundle $T_M^{1,0}$. For a rank-$r$ holomorphic complex bundle $E$, write $\det E:=\Lambda^rE$; for a complex $n$-fold $M$, its canonical line is $K_M:=\Lambda^n(T_M^{1,0})^*=\det(T_M^{1,0})^*$. The hyperplane class is $H=c_1(\mathcal O(1))$ restricted to $X$; the complex orientation fixes intersection signs.

[A2] Adopt the full Axiom of Choice of [[def-axiom-of-choice]], as required by the Chern-class suppliers [F1] and [F2].

## Proof

**Proof technique:** Euler sequence, hypersurface normal sequence, and Whitney division.

**Given:** A smooth degree-five hypersurface, the normalized restricted hyperplane class with $\int_XH^3=5$, and AC.

1.1 Let $Q=(\mathbb P^4\times\mathbb C^5)/\gamma$ be the holomorphic quotient bundle. In the standard projective charts, the tangent space at a line $\ell$ is identified holomorphically with $\operatorname{Hom}_{\mathbb C}(\ell,\mathbb C^5/\ell)$. Tensoring the tautological sequence $0\to\gamma\to\mathbb P^4\times\mathbb C^5\to Q\to0$ by $\gamma^*=\mathcal O(1)$ gives the holomorphic Euler sequence $0\to\mathcal O\to\mathcal O(1)^{\oplus5}\to T\mathbb P^4\to0$. For a holomorphic short exact sequence $0\to E'\to E\to E''\to0$, local holomorphic frames of $E'$ and $E''$, with local holomorphic lifts of the latter, give the determinant-line isomorphism $\det E'\otimes\det E''\cong\det E$: wedging the subbundle frame with the lifted quotient frame is unchanged when a lift is altered by a subbundle section. Applying this to the Euler sequence gives $\det T\mathbb P^4\cong\mathcal O(1)^{\otimes5}=\mathcal O(5)$ and hence $K_{\mathbb P^4}\cong\mathcal O(-5)$ as holomorphic line bundles. By [F3], the base is also paracompact Hausdorff, so [F5] supplies a continuous complex-bundle splitting for the later Chern-class calculation; that splitting is not used to infer holomorphicity. [A1, F3, F5, algebra]

1.2 Let $M$ be a connected component of either base $\mathbb P^4$ or $X$. By [F3], $M$ is paracompact Hausdorff, has CW homotopy type, and admits a homotopy equivalence $q:K\to M$ from a path-connected CW complex $K$. The Chern classes of the smooth bundles over $M$ are defined by [F7]; each bundle is numerable by [F3], and its pullback to $K$ is numerable by [F4]. For any continuous map $f:N\to M$ between the CW-type bases used here, [F8] identifies the pulled-back projective bundle and tautological line. Euler naturality [F9] pulls back the tautological Euler class. Pulling back the unique defining relation [F7] therefore gives a monic relation for $f^*E$ with coefficients $f^*c_i(E)$; uniqueness in [F7] proves $c_i(f^*E)=f^*c_i(E)$. Thus Chern classes are natural for both $q$ and $X\hookrightarrow\mathbb P^4$ in this proof. By [F6], $q^*:H^*(M;\mathbb Z)\to H^*(K;\mathbb Z)$ is an isomorphism. Applying the Whitney formula [F1] on $K$ to $q^*E,q^*G$ and using this proved pullback naturality shows $q^*c(E\oplus G)=q^*(c(E)c(G))$; injectivity of $q^*$ gives $c(E\oplus G)=c(E)c(G)$ on $M$. This supplies the exact bridge from the CW-base Whitney hypothesis of [F1] to the smooth bases in steps 1.1, 2.1. [F1, F3, F4, F6, F7, F8, F9, given, construct]

2.1 The degree-five homogeneous polynomial $f$ is a holomorphic section of $\mathcal O(5)$. In a local trivialization, changing its representative to $u f$ for a nowhere-zero holomorphic function $u$ changes $df|_X$ to $u\,df|_X$, since $f=0$ on $X$; thus these differentials define a holomorphic bundle map $T\mathbb P^4|_X\to\mathcal O_X(5)$. Smoothness of the hypersurface makes the map surjective, with kernel $TX$, so $0\to TX\to T\mathbb P^4|_X\to\mathcal O_X(5)\to0$ is a holomorphic exact sequence. Its determinant-line isomorphism from step 1.1 gives $\det TX\otimes\mathcal O_X(5)\cong\det T\mathbb P^4|_X$ and therefore $K_X\cong K_{\mathbb P^4}|_X\otimes\mathcal O_X(5)\cong\mathcal O_X$ holomorphically. Each component of $X$ is paracompact Hausdorff by [F3], so [F5] also supplies the continuous splitting needed for the later Chern-class computation. [A1, F3, F5, given, step 1.1, algebra]

3.1 Write $H_{\mathbb P^4}=c_1(\mathcal O(1))$. The rank-one convention in [F7] gives $c(\mathcal O(1))=1+H_{\mathbb P^4}$. The continuous splittings from [F5] and the Whitney identity from [F1] give $c(T\mathbb P^4)=(1+H_{\mathbb P^4})^5$ and $c(TX)c(\mathcal O_X(5))=c(T\mathbb P^4|_X)$; the pullback naturality proved in step 1.2 gives $c(T\mathbb P^4|_X)=(1+H)^5$ on each component. Since $\mathcal O_X(5)=\mathcal O_X(1)^{\otimes5}$, [F2] gives $c_1(\mathcal O_X(5))=5H$, and [F7] gives $c(\mathcal O_X(5))=1+5H$. Hence $c(TX)(1+5H)=(1+H)^5$. The complex rank of $TX$ is three, so [F7] gives $c(TX)=1+c_1(TX)+c_2(TX)+c_3(TX)$ with no higher Chern classes. Comparing cohomological degrees two, four, and six yields successively $c_1(TX)=0$, $c_2(TX)=10H^2$, and $c_3(TX)+50H^3=10H^3$, hence $c_3(TX)=-40H^3$. The asserted total class follows without an unproved cohomological-dimension truncation. The numerical normalization $\int_XH^3=5$ remains the explicit hypothesis and is not inferred from the normal sequence. [F1, F2, F5, F7, step 1.1, step 2.1, step 1.2, given, algebra] ∎

