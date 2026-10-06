---
id: lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem
kind: lemma
title: "Pontryagin-Thom converts bordism detection to a Thom-space homotopy problem"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism, lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum, thm-characteristic-numbers-are-cobordism-invariants, def-thom-class-and-thom-isomorphism-interface, prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual, thm-thom-isomorphism-for-oriented-vector-bundles, thm-naturality-and-uniqueness-of-thom-classes, thm-mod-two-cohomology-of-bo-n, def-stiefel-whitney-classes-from-the-projective-bundle-relation, thm-whitney-sum-formula-for-stiefel-whitney-classes, def-pontryagin-classes-by-complexification, thm-pontryagin-whitney-product-away-from-two, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold, prop-singular-cohomology-is-contravariantly-functorial, def-kronecker-evaluation-pairing, lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, def-axiom-of-choice, prop-cap-product-naturality-and-projection-formula]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 13, printed pp. 24-26: the reduction of the cobordism problem to Thom-space homotopy theory and the role of the Stiefel-Whitney numbers"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 18, printed pp. 205-208 and 214-217: the universal Thom-space reduction and rational characteristic-number detection. The supported Thom-module evaluation is derived locally here."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 10, printed pp. 88-91 and Lecture 7, printed pp. 55-62, for the Thom class and characteristic classes"
dependency_level: 5
---

## Statement

Assume AC as required by the published suppliers. Let $M^n$ be a closed smooth
manifold and let $\alpha(M)\in\pi_n(M\mathrm O)$ be its image under the universal
Pontryagin-Thom correspondence; in the oriented case use
$\alpha(M)\in\pi_n(M\mathrm{SO})$. For a sufficiently large representative rank
$r$, let $u_r$ denote the universal mod-two Thom class. Write $\bar w_0=1$ and
$\bar w_j=-\sum_{i=1}^j w_i\bar w_{j-i}$, with $w_i=w_i(\gamma_r)$ and $w_i=0$
above the rank. Thus $\bar w_j$ is the degree-$j$ coefficient of the formal
inverse of $1+w_1+w_2+\cdots$. If $w^I$ has total degree $n$, let
$\overline{w^I}$ be obtained by substituting $\bar w_j$ for $w_j$. Then
$\langle u_r\smile\overline{w^I}(\gamma_r),\alpha(M)\rangle=w^I[M]$. For an
oriented $M^{4k}$, define integral polynomials $\bar p_0=1$,
$\bar p_j=-\sum_{i=1}^j p_i\bar p_{j-i}$ in the universal normal Pontryagin
classes and substitute them into the degree-$4k$ monomial $p_J$ to obtain
$\overline{p_J}$. If $u_r^+$ is the integral oriented Thom class, then
$\langle u_r^+\smile\overline{p_J}(\gamma_r^+),\alpha(M)\rangle=p_J[M]$ as
integers. This evaluation identity uses Pontryagin multiplicativity over
$\mathbb Q$ and injectivity of $\mathbb Z\to\mathbb Q$; it does not assert an
integral identity between tangent classes and inverse normal Pontryagin classes.
Each coefficient and each fixed-degree substitution is a finite polynomial,
although the full formal inverse generally has infinitely many terms.
Consequently the characteristic-number functionals are evaluations of explicit
universal Thom classes. The Pontryagin-Thom isomorphism gives $M$
null-cobordant exactly when $\alpha(M)=0$, and the mod-two cohomology
computation of $BO(r)$ identifies completeness of the Stiefel-Whitney numbers
with separation of $\pi_n(M\mathrm O)$ by the classes
$u_r\smile\overline{w^I}$. That separation is not proved by this lemma.

## Facts & Assumptions

**Given:** A closed smooth manifold $M^n$, an embedding with normal bundle $\nu$ and a classifying map for $\nu$ into the Grassmannian, the stable class $\alpha(M)$, and the universal Thom classes $u_r$, $u_r^+$ over the Grassmannian bases.

[F1] [[thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism]] identifies $\Omega_n^{O}\cong\pi_n(M\mathrm O)$ and $\Omega_n^{SO}\cong\pi_n(M\mathrm{SO})$ through the collapse construction, so $M$ is null-cobordant exactly when $\alpha(M)=0$, and [[lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum]] identifies the collapse class of a representative embedding with its classifying data.

[F2] [[def-thom-class-and-thom-isomorphism-interface]], [[thm-thom-isomorphism-for-oriented-vector-bundles]] and [[thm-naturality-and-uniqueness-of-thom-classes]] supply the normalized universal Thom classes and their naturality; [[prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual]] identifies the pullback of the Thom class along the collapse with the Poincaré dual of the zero section, so that evaluating $u_r\smile a(\gamma_r)$ on the collapse of an embedded representative equals evaluating the pulled-back base class $a(\nu)$ on $[M]$.

[F3] [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] and [[thm-whitney-sum-formula-for-stiefel-whitney-classes]] give the mod-two Whitney formula for Stiefel-Whitney classes, and [[thm-mod-two-cohomology-of-bo-n]] gives the mod-two cohomology of the classifying space with its polynomial basis; [[def-stiefel-whitney-number-of-a-closed-manifold]] defines the tangential Stiefel-Whitney numbers.

[F4] [[def-pontryagin-classes-by-complexification]] and [[thm-pontryagin-whitney-product-away-from-two]] give the Pontryagin classes and their multiplicativity over $\mathbb Z[1/2]$, with no integral multiplicativity asserted; [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] and [[def-pontryagin-number-of-a-closed-oriented-manifold]] supply the top Chern-Euler comparison and the Pontryagin numbers.

[F5] [[prop-singular-cohomology-is-contravariantly-functorial]] makes coefficient extension commute with pullback, and [[def-kronecker-evaluation-pairing]] with [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]] make the evaluation of a class after the coefficient map $\mathbb Z\to\mathbb Q$ the image of its integral evaluation; the map $\mathbb Z\to\mathbb Q$ is injective. [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

[F6] [[prop-cap-product-naturality-and-projection-formula]] gives $(a\smile b)\cap x=b\cap(a\cap x)$ and cap naturality for the front-evaluation convention. The supported Thom-class construction and local normal-first cap calculation are given in proof steps 1.1–3.1 of [[prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual]].

## Proof

1.1 Let $f$ classify the normal bundle of an embedded representative and put $b=f^*a\in H^n(M;R)$, for $R=\mathbb F_2$ or $\mathbb Z$ in the oriented case. Use the normal-first tube $U$ and its projection $p:U\to M$. The supported Thom class $v\in H_c^r(U;R)$ of [F2, F6] has supported Poincare dual $D_U(v)=z_*[M]$, where $z$ is the zero section. The same support-pair lift identifies the pullback of the universal Thom-module class $u_r\smile\pi^*a$ with the open extension of $v\smile p^*b$: this follows directly by pulling its disk-pair representative back along the collapse and the classifying bundle map. By cap associativity and naturality [F6], $D_U(v\smile p^*b)=p^*b\cap z_*[M]=z_*(b\cap[M])$. Open-extension naturality of the supported cap calculation in [F2] sends this to the ambient zero-dimensional class; its augmentation is $\langle b,[M]\rangle$. Consequently $\langle u_r\smile\pi^*a,\alpha(M)\rangle=\langle a(\nu),[M]\rangle$. Here evaluation on a homotopy class means pullback along its sphere representative followed by evaluation on the sphere fundamental class. The notation $u_r\smile a(\gamma_r)$ in the statement is shorthand for the relative Thom-module product $u_r\smile\pi^*a$, transferred to reduced cohomology; it is not a product with a nonexistent base class on the Thom quotient. [F1, F2, F6, construct]


2.1 Stiefel-Whitney inversion. Since $TM\oplus\nu\cong TS^{n+r}|_M$ is stably trivial and $TS^{n+r}\oplus\varepsilon\cong\varepsilon^{n+r+1}$, the Whitney formula [F3] gives $w(TM)w(\nu)=1$ in $H^*(M;\mathbb F_2)$. Comparing degrees gives the recursive inverse $\bar w_0=1$, $\bar w_j=-\sum_{i=1}^j w_i(\nu)\bar w_{j-i}$, so $w(TM)=1+\sum_{j\ge1}\bar w_j$ and, for a monomial $w^I$ of total degree $n$, the class $\overline{w^I}(\nu)$ has degree $n$ and $\langle\overline{w^I}(\nu),[M]\rangle=w^I[M]$. Combining with step 1.1 for $a=\overline{w^I}$ proves $\langle u_r\smile\overline{w^I}(\gamma_r),\alpha(M)\rangle=w^I[M]$. The recursive inverse is a finite polynomial in each degree, truncated at the target degree. [F2, F3, step 1.1]

2.2 Pontryagin inversion. For oriented $M^{4k}$, complexifying the stable triviality of $TM\oplus\nu$ and applying the away-from-two multiplicativity [F4] over $\mathbb Q$ gives $p(TM)p(\nu)=1$ in $H^*(M;\mathbb Q)$ (componentwise over the connected components), so the recursive inverse $\bar p_j$ of the total normal Pontryagin class satisfies $p_J(TM)=\overline{p_J}(\nu)$ in $H^{4k}(M;\mathbb Q)$ for every partition $J$ of $k$. By naturality of coefficient extension [F5], the integral evaluation $\langle u_r^+\smile\overline{p_J}(\gamma_r^+),\alpha(M)\rangle$ has the same image in $\mathbb Q$ as $\langle p_J(TM),[M]\rangle=p_J[M]$, namely via step 1.1 and the pairing conventions. Since $\mathbb Z\to\mathbb Q$ is injective, the two integers are equal: $\langle u_r^+\smile\overline{p_J}(\gamma_r^+),\alpha(M)\rangle=p_J[M]$. No integral identity between tangent and inverse normal Pontryagin classes is asserted; only the rational images agree. [F4, F5, step 1.1]

3.1 Consequence for detection. By [F1] the manifold $M$ is null-cobordant exactly when $\alpha(M)=0$, so a family of functionals on $\pi_n(M\mathrm O)$ separates all nonzero classes precisely when it detects null-cobordism. By [F3] the mod-two cohomology of $BO(r)$ is a polynomial algebra on the universal classes, and the Thom isomorphism identifies the relevant Thom cohomology with a monomial basis; the substitution of the recursive inverse is an involution in each degree (the inverse of the inverse of a total class with constant term one is the class itself), so the tangential monomial functionals span the same evaluation space as the normal monomials $u_r\smile\overline{w^I}$. Hence completeness of the Stiefel-Whitney numbers is equivalent to separation of $\pi_n(M\mathrm O)$ by those classes. This lemma proves only the equivalence of the two formulations; the separation statement itself is not proved here. [F1, F3, step 2.1]

4.1 Edge cases. For $n=0$ the unique monomial is the empty product, both inverse series have degree-zero coefficient $1$, and the displayed identities reduce to the degree-compatible case without any substitution; for the empty manifold $\alpha(M)=0$ and every evaluation vanishes, consistent with the componentwise conventions of [F3]. The formal inverses have infinitely many terms in general but every statement here fixes a degree, so only finitely many coefficients are used. The oriented identities use the ordered normal orientations throughout; no further choice beyond the cited AC declarations is made. [F3, F4, F5, step 2.2, step 3.1] ∎
