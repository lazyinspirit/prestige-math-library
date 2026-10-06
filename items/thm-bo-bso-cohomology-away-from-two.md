---
id: thm-bo-bso-cohomology-away-from-two
kind: theorem
title: "Cohomology of BO and BSO away from two"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants
  - lem-oriented-grassmannian-has-two-lifted-schubert-cells
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - thm-stable-stiefel-space-is-contractible
  - lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space
  - thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle
  - prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-top-pontryagin-class-is-the-square-of-the-euler-class
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§17, Proposition 17.1 and Corollary 17.2, printed/PDF pp.31–32"
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II notes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lectures 35–36, printed pp.130–137"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let R be a nonzero commutative unital ring with 2 invertible. For m≥1, H*(BSO(2m+1);R)=R[p₁,…,p_m], H*(BSO(2m);R)=R[p₁,…,p_{m−1},e] with p_m=e², and H*(BO(2m);R)=H*(BO(2m+1);R)=R[p₁,…,p_m]. The indicated generators are the actual universal Euler and Pontryagin classes, |e|=2m and |p_i|=4i. Orientation reversal fixes p_i and negates e. BSO(1) has cohomology R in degree zero only, BO(1) likewise, and rank zero is a point. The chosen BSO(r) is the lifted Schubert CW model.

## Facts & Assumptions

**Given:** AC; a nonzero commutative ring $R$ with $2$ invertible; ranks $m\ge1$; the oriented Grassmannian models $BSO(n)$ with the two-lift Schubert CW structure and the unoriented models $BO(n)$; and the actual universal oriented sphere bundle $S_n\to BSO(n)$ with its complement map.

[F1] The two-lifted Schubert cells give $BSO(n)$ a CW structure with the weak topology, finite boundary support and two cells over each Schubert cell ([[lem-oriented-grassmannian-has-two-lifted-schubert-cells]]); the oriented tautological bundles and their universal property are the published models ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[thm-stable-stiefel-space-is-contractible]]).

[F2] On the actual sphere-bundle total space the oriented complement map to $BSO(n-1)$ is a homotopy equivalence and the pullback of $\gamma_n^+$ splits off the trivial line ([[lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space]]); the Gysin sequence, the two-torsion of odd-rank Euler classes, the orientation-sign naturality of Euler classes, the top Pontryagin square and the stability/naturality of Pontryagin classes over $R$ give the restriction maps ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]], [[prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]], [[thm-top-pontryagin-class-is-the-square-of-the-euler-class]], [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).

[F3] Pullback identifies $H^*(BO(n);R)$ with the invariants of the orientation double cover and gives the anti-invariant description of the sign local system ([[lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants]]).

[F4] AC is used to select the CW cell labels and polynomial lifts ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Proof of the ring calculation. Induct on the rank, starting from BSO(1). Use the inspected universal oriented sphere-bundle lemma: on its actual total space S_n, p:S_n→BSO(n), the oriented complement map c:S_n→BSO(n−1) is a homotopy equivalence and p*γ_n⁺=ε¹⊕c*γ_{n−1}⁺. The published Gysin, Euler and Pontryagin interfaces consequently give, under this identification, a restriction j* carrying each p_i to the preceding-rank p_i and e to zero. [given, F1, F2, F4]

2.1 If n=2m, induction computes the preceding rank as R[p₁,…,p_{m-1}]. All those generators lift, so j* is surjective degreewise. In the published rank-2m Gysin sequence the actual maps, after identifying the sphere total space with BSO(2m−1), are H^{k−2m}(BSO(2m);R) --·e--> H^k(BSO(2m);R) --j*--> H^k(BSO(2m−1);R) --p_!--> H^{k−2m+1}(BSO(2m);R) --·e--> H^{k+1}(BSO(2m);R). Surjectivity of j* in degree k makes every class in its target a pullback. Exactness gives p_!j*=0, so p_! vanishes in degree k. At the following term, exactness therefore makes multiplication by e injective on H^{k−2m+1}(BSO(2m);R). Taking k=a+2m−1 for every integer a proves that e is a non-zero-divisor in each degree a. Exactness at H^k(BSO(2m);R) independently gives ker(j*:H^k(BSO(2m);R)→H^k(BSO(2m−1);R)) =eH^{k−2m}(BSO(2m);R). Negative-degree groups are zero, so the same statement includes the initial degrees. For a class of degree d subtract a polynomial lift of its restriction, then divide the remainder by e; the resulting class has degree d−2m. Induction on d proves polynomial generation. For a polynomial relation Σ_{a=0}^N e^a P_a(p)=0, restriction gives P₀=0 by the preceding rank's polynomial independence. Injectivity of multiplication by e then repeats the argument to show every P_a=0. The published top-class identity gives p_m=e². This proves the even-rank presentation over R. [step 1.1, F2, algebra]

2.2 If n=2m+1, the odd-rank Euler class vanishes over R because its integral class is killed by two. Gysin makes j* injective. Its image contains R[p₁,…,p_m]=R[p₁,…,p_{m-1},e²] in the preceding even-rank ring. To prove equality, use the actual sphere-bundle involution τ(V,o,v)=(V,o,−v). It fixes p and reverses the orientation of the complement plane: the ordered first vector v changes sign while the orientation o stays fixed. Thus cτ=σc, with σ orientation reversal on BSO(2m). Since τ*p*=p*, the image of j* is σ-invariant. The Euler sign formula gives σ*e=−e and σ*p_i=p_i. Every element of the already computed even-rank polynomial ring has a unique expansion Σ e^a P_a(p₁,…,p_{m-1}); since 2 is invertible, its invariants are exactly the polynomials with even a. This proves the odd-rank presentation. No rank/dimension/saturation assertion is needed here. [step 1.1, F2, algebra]

3.1 Finally the finite-cover transfer identifies BO(n) cohomology with invariants of the orientation double cover. In odd rank all generators are fixed. In even rank the preceding even-power calculation gives R[p₁,…,p_m]. Naturality identifies these p_i with the unoriented universal classes. [step 2.2, F3] ∎
