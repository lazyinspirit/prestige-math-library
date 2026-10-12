---
id: lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects
kind: lemma
title: "Universal hyperplanes give relative weak Lefschetz and maximal pullback subobjects"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - lem-affine-morphisms-have-one-sided-perverse-exactness
  - lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact
  - thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
  - lem-analytic-constructible-sheaves-admit-coherent-six-operations
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beilinson, Bernstein and Deligne, Faisceaux pervers, sections 4.2.5–4.2.6 and 5.4.11–5.4.13"
      url: https://www.numdam.org/item/AST_1982__100__1_0.pdf
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, Propositions 4.7.8–4.7.9"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective map of complex varieties, with a fixed closed embedding $X\hookrightarrow\mathbb P^d$ and $d\ge1$. Set $Y'=Y\times(\mathbb P^d)^\vee$, $p:Y'\to Y$, $X'=X\times(\mathbb P^d)^\vee$, $p':X'\to X$, and let $i:\mathcal X\hookrightarrow X'$ be the universal hyperplane incidence. Write $g=(f\times1)i$, and for $K\in\operatorname{Perv}(X;k)$ put $M=i^*p'^*K[d-1]$. Then $M$ is perverse and the restriction/Gysin maps give isomorphisms $p^*{}^pH^l(Rf_*K)[d]\to{}^pH^{l+1}(Rg_*M)$ for $l\le-2$ and monomorphisms for $l=-1$, with dual isomorphisms for $l\ge2$ and epimorphisms for $l=1$. In particular $p^*{}^pH^{-1}(Rf_*K)[d]$ identifies with the largest perverse subobject of ${}^pH^0(Rg_*M)$ belonging to the essential image of $p^*[d]$, and $p^*{}^pH^1(Rf_*K)[d]$ with the largest such quotient.

## Facts & Assumptions

**Given:** the map, embedding, perverse sheaf and choice assumption in the Statement.

[F1] The separately supplied affine exactness theorem [[lem-affine-morphisms-have-one-sided-perverse-exactness]] says that $Ru_!$ sends the perverse lower aisle to itself and $Ru_*$ sends the perverse upper aisle to itself for an affine map $u$. These are the exact directions used below.

[F2] The noncharacteristic/smooth pullback supplier [[lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact]] says that $p^*[d]$ is perverse-exact and $i^*[-1]=i^![1]$ is perverse-exact for this universal hyperplane. Transversality holds because, on every smooth stratum $S$ of $X$, the incidence over $S$ is a smooth projective-space bundle of codimension one inside $S\times(\mathbb P^d)^\vee$.

[F3] The constructed perverse heart has finite length, negative derived Hom between heart objects is zero, simple objects are intersection complexes of simple local systems, and the six operations have the proper base change/projection and duality adjunctions ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]).

## Proof

**Given:** the data and exact formal suppliers above.

1.1 Let $j:X'\setminus\mathcal X\hookrightarrow X'$ and $u=(f\times1)j$. Over an affine chart of the hyperplane parameter space, its complement in $\mathbb P^d$ is an affine $d$-space bundle; $X'\setminus\mathcal X$ is closed in the corresponding bundle over $Y'$. Thus $u$ is affine. Apply $R(f\times1)_!$ to $j_!j^*p'^*K[d]\to p'^*K[d]\to i_*i^*p'^*K[d]$. By [F1], its first term has no negative perverse cohomology. By proper base change and [F2], the second is $p^*Rf_*K[d]$ and the third is $Rg_*M[1]$. The long exact perverse sequence gives precisely the restriction isomorphisms and monomorphism. Duality gives the Gysin statements, with $i^!=i^*[-2]$ in the compatible normalization. [F1, F2, F3, construct]

1.2 The projective-space cohomology formula gives $Rp_*p^*T=\bigoplus_{a=0}^d T[-2a]$ for every constructible complex $T$, and the identical formula with $d-1$ holds for $p'i:\mathcal X\to X$. To justify the formula as a morphism rather than just stalk ranks, cup powers of the tautological Euler class pulled back from $(\mathbb P^d)^\vee$ define the map from that direct sum; on every fiber its map is the usual projective-space cohomology basis and hence an isomorphism by proper base change. That integral power basis is [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]], whose complete proof uses the sphere-bundle Gysin sequence, rather than just cell ranks. Tensoring its finite free cellular cochain complex with $k$ preserves the basis by [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]. For heart objects $A,B$, adjunction therefore identifies $\operatorname{Hom}(p^*A[d],p^*B[d])$ with $\operatorname{Hom}(A,B)$: all terms $\operatorname{Hom}(A,B[-2a])$ for $a>0$ vanish by [F3]. [F2, F3, algebra, construct]

2.1 Smooth pullback takes a simple $\operatorname{IC}_S(L)$ to the simple $\operatorname{IC}_{S\times\mathbb P^d}(p^*L)[d]$. Simplicity of the pulled-back local system follows since projective space is simply connected (its even-cell CW structure has no one-cells), so projection induces an isomorphism of fundamental groups. Thus $p^*[d]$ is exact and fully faithful and preserves simples. Its image is closed under subobjects and quotients: induct on the finite length of $A$; a simple subobject of a subobject of $p^*A[d]$ is the image of some source simple, and its inclusion comes by full faithfulness from an inclusion into $A$. Quotient by it and repeat. The perverse adjoints $\ell={}^pH^dRp_!$ and $r={}^pH^{-d}Rp_*$ consequently identify $p^*[d]r(C)\to C$ as the largest subobject from $Y$, and $C\to p^*[d]\ell(C)$ as the largest quotient from $Y$. [F2, F3, step 1.2, induction]

2.2 Put $V=R(f\times1)_*p'^*K$ and $U=Rg_*i^*p'^*K$. Step 1.1 gives ${}^p\tau_{<d-1}V\cong{}^p\tau_{<d-1}U$ and a monomorphism ${}^pH^{d-1}V\to{}^pH^{d-1}U$. After applying $Rp_*$, the restriction map $V\to U$ is the projection $\bigoplus_{a=0}^d Rf_*K[-2a]\to\bigoplus_{a=0}^{d-1}Rf_*K[-2a]$, by step 1.2. The discarded summand $Rf_*K[-2d]$ has perverse degrees at least $d$. Indeed every fiber of $f$ has dimension at most $d$; the ordinary pullback support bound gives $f^*$ perverse upper amplitude at most $d$, duality gives $f^!$ lower amplitude at least $-d$, and their adjunctions with the proper $Rf_*$ give its amplitude $[-d,d]$. Thus $Rp_*V\to Rp_*U$ induces isomorphisms in perverse degrees at most $d-1$. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Apply $Rp_*$ to the two triangles with common lower truncation from step 2.2. Their long exact sequences in degrees $-1,0$ give ${}^pH^{-1}(Rp_*{}^p\tau_{\ge d-1}V)\cong{}^pH^{-1}(Rp_*{}^p\tau_{\ge d-1}U)$. Since $Rp_*$ has lower perverse amplitude $-d$, the truncation starting in degree $d$ has pushforward starting in degree zero; hence each displayed group is ${}^pH^{-d}Rp_*{}^pH^{d-1}$ of its argument. We have therefore proved $r({}^pH^{d-1}V)\cong r({}^pH^{d-1}U)$. But ${}^pH^{d-1}V=p^*{}^pH^{-1}(Rf_*K)[d]$ and ${}^pH^{d-1}U={}^pH^0(Rg_*M)$. The former is in the pullback image, where $r$ is inverse by step 2.1. Naturality identifies its injection into the latter with the maximal-subobject counit. This proves the maximal-subobject claim. [F3, step 2.1, step 2.2, algebra]

4.1 Apply the proved maximal-subobject statement to $DK$ and use [F2]–[F3] to dualize. The middle perverse objects for $K$ and $DK$ are dual, and perverse cohomological degrees change sign under duality. The maximal subobject consequently becomes the maximal quotient $p^*{}^pH^1(Rf_*K)[d]$. Together with step 1.1 this proves every assertion. [F2, F3, step 1.1, step 3.1] ∎

## Proof contract boundary

The projective-space/cohomological-amplitude/truncation argument is the full mechanism of BBD 5.4.11–5.4.13. No pure sheaf, arithmetic comparison or decomposition theorem is an input. Affine one-sided exactness and noncharacteristic perverse pullback are explicitly separate necessary construction suppliers and remain pending until their own complete local proofs are built. An affine absolute cohomology bound alone is not asserted to close relative exactness.
