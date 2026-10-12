---
id: lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects
kind: lemma
title: "Universal hyperplanes give relative weak Lefschetz and maximal pullback subobjects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [def-axiom-of-choice, lem-affine-morphisms-have-one-sided-perverse-exactness,
       lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator,
       def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-canonical-t-structure-on-a-derived-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§4.2.5-4.2.6.2 (full faithfulness, largest subobject and quotient from the base) and §5.4.11-5.4.13 (universal hyperplane family, truncation comparison, projective-bundle formula)"
    - title: "M. A. A. de Cataldo and L. Migliorini, The Hodge theory of algebraic maps, arXiv:math/0306030v2 (complete final-version PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§4.7, Lemma 4.7.6 and Propositions 4.7.8-4.7.9 (independently printed version)"
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective map of complex varieties, with a fixed closed embedding $X\hookrightarrow\mathbb P^d$ and $d\ge1$. Set $Y'=Y\times(\mathbb P^d)^\vee$, $p:Y'\to Y$, $X'=X\times(\mathbb P^d)^\vee$, $p':X'\to X$, and let $i:\mathcal X\hookrightarrow X'$ be the universal hyperplane incidence. Write $g=(f\times1)i$, and for $K\in\operatorname{Perv}(X;k)$ put $M=i^*p'^*K[d-1]$. Then $M$ is perverse and the restriction/Gysin maps give isomorphisms $p^*{}^pH^l(Rf_*K)[d]\to{}^pH^{l+1}(Rg_*M)$ for $l\le-2$ and monomorphisms for $l=-1$, with dual isomorphisms for $l\ge2$ and epimorphisms for $l=1$. In particular $p^*{}^pH^{-1}(Rf_*K)[d]$ identifies with the largest perverse subobject of ${}^pH^0(Rg_*M)$ belonging to the essential image of $p^*[d]$, and $p^*{}^pH^1(Rf_*K)[d]$ with the largest such quotient.

## Facts & Assumptions

**Given:** the projective map, the fixed embedding, the perverse sheaf $K$, and the inherited choice assumption.

[F1] The affine one-sided exactness supplier [[lem-affine-morphisms-have-one-sided-perverse-exactness]] says that for an affine morphism $u$, $Ru_*$ sends the perverse upper aisle ${}^pD^{\le0}$ into itself and $Ru_!$ sends the perverse lower aisle ${}^pD^{\ge0}$ into itself; these are the exact directions used below.

[F2] The noncharacteristic and smooth pullback supplier [[lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact]] says that $p'^*[d]$ is perverse-exact and that on the universal hyperplane $i^*[-1]$ is perverse-exact with $i^!K'=i^*K'[-2]$. Transversality holds because on every smooth stratum $S$ of $X$ the incidence over $S$ is a smooth projective-space bundle of codimension one inside $S\times(\mathbb P^d)^\vee$; the relevant vocabulary is that of [[def-algebraically-constructible-complex-of-analytic-field-sheaves]].

[F3] The constructed perverse heart has finite length, negative derived Hom between heart objects vanishes, simple objects are intersection complexes of simple local systems, and the six operations have proper base change, projection and duality adjunctions ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[def-canonical-t-structure-on-a-derived-category]]). The projective-space cohomology basis is supplied by [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]] with [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], and the Axiom of Choice is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** the data and formal suppliers of the Statement.

1.1 Let $j:X'\setminus\mathcal X\hookrightarrow X'$ and $u=(f\times1)j$. Over an affine chart of the hyperplane parameter space the complement of the incidence in $\mathbb P^d$ is an affine $d$-space bundle, and $X'\setminus\mathcal X$ is closed in the corresponding bundle over $Y'$; thus $u$ is affine. Apply $R(f\times1)_!$ to the localization triangle $j_!j^*p'^*K[d]\to p'^*K[d]\to i_*i^*p'^*K[d]\to$. By [F1] the first term lies in the perverse lower aisle, so it has no negative perverse cohomology; by proper base change and [F2] the second is $p^*Rf_*K[d]$ and the third is $Rg_*M[1]$. The long exact perverse sequence gives the restriction isomorphisms and the monomorphism. Dualizing the whole construction and using $Di_*=i_!D$, $i^!K'=i^*K'[-2]$ from [F2] gives the Gysin isomorphisms and the epimorphism for $l=1$. [F1, F2, F3, construct]

1.2 The projective-space cohomology formula gives $Rp_*p^*T=\bigoplus_{a=0}^dT[-2a]$ for every constructible complex $T$, and the identical formula with $d-1$ holds for $p'i:\mathcal X\to X$. To justify the formula as a morphism and not only stalk ranks, cup powers of the tautological Euler class pulled back from $(\mathbb P^d)^\vee$ define the map from the direct sum, and on every fibre its map is the usual projective-space cohomology basis, hence an isomorphism by proper base change; the integral power basis is [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]], and tensoring the finite cellular cochain complex with $k$ preserves the basis by [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]. For heart objects $A,B$, adjunction therefore identifies $\operatorname{Hom}(p^*A[d],p^*B[d])$ with $\operatorname{Hom}(A,B)$: all terms $\operatorname{Hom}(A,B[-2a])$ for $a>0$ vanish by [F3]. [F2, F3, algebra, construct]

2.1 Smooth pullback takes a simple $\operatorname{IC}_S(L)$ to the simple $\operatorname{IC}_{S\times\mathbb P^d}(p^*L)[d]$: projective space is simply connected because its even-cell CW structure has no one-cells, so the projection induces an isomorphism of fundamental groups and the pulled-back local system stays irreducible. Thus $p^*[d]$ is exact and fully faithful and preserves simples, and its image is closed under subobjects and quotients: induct on the finite length of $A$; a simple subobject of a subobject of $p^*A[d]$ is the image of some source simple, and its inclusion comes by full faithfulness from an inclusion into $A$; quotient by it and repeat. The perverse adjoints $\ell={}^pH^dRp_!$ and $r={}^pH^{-d}Rp_*$ consequently identify $p^*[d]r(C)\to C$ as the largest subobject of $C\in\operatorname{Perv}(Y')$ coming from $Y$ and $C\to p^*[d]\ell(C)$ as the largest quotient coming from $Y$. Applied to $A_0={}^pH^{d-1}V$ with $V=R(f\times1)_*p'^*K$, the projective-space formula computes $r(A_0)={}^pH^{-d}Rp_*A_0$ directly: $A_0=p^*[d]B$ with $B={}^pH^{-1}(Rf_*K)$, and $Rp_*p^*B[d]=\bigoplus_{a=0}^dB[d-2a]$, whose perverse degree $-d$ is exactly $B$; hence $r({}^pH^{d-1}V)\cong{}^pH^{-1}(Rf_*K)$. [F2, F3, step 1.2, construct]

2.2 Put $V=R(f\times1)_*p'^*K$ and $U=Rg_*i^*p'^*K$. Step 1.1 gives ${}^p\tau_{<d-1}V\cong{}^p\tau_{<d-1}U$ and a monomorphism $\iota:{}^pH^{d-1}V\to{}^pH^{d-1}U$. Writing $C$ for the cone of the map $V\to U$, the same long exact sequences show that ${}^pH^l(C)=0$ for $l\le d-2$, so $C$ lies in ${}^pD^{\ge d-1}$; the exact sequences of the two truncation triangles and the five lemma then give ${}^pH^{-1}(Rp_*{}^p\tau_{\ge d-1}V)\cong{}^pH^{-1}(Rp_*{}^p\tau_{\ge d-1}U)$. Moreover $Rp_*V=\bigoplus_{a=0}^dRf_*K[-2a]$ and $Rp_*U=\bigoplus_{a=0}^{d-1}Rf_*K[-2a]$ by step 1.2. [F1, F2, step 1.1, step 1.2, algebra]

3.1 The BBD truncation comparison (source locator in the Remarks) identifies the two groups of step 2.2 with $r({}^pH^{d-1}V)$ and $r({}^pH^{d-1}U)$ respectively: because $Rp_*$ has lower perverse amplitude $-d$ and $p^*[d]$ is exact, the lowest surviving degree of the pushforward of the upper truncation is obtained by composing its degree-$(d-1)$ cohomology with ${}^pH^{-d}Rp_*$. Together with step 2.1 this gives $r({}^pH^{d-1}U)\cong r({}^pH^{d-1}V)\cong{}^pH^{-1}(Rf_*K)$, so the monomorphism $\iota$ has source $p^*[d]({}^pH^{-1}Rf_*K)$ and becomes an isomorphism after applying $r$. By the largest-subobject identification of step 2.1, $p^*{}^pH^{-1}(Rf_*K)[d]$ is therefore exactly the largest perverse subobject of ${}^pH^0(Rg_*M)={}^pH^{d-1}U$ coming from $Y$. Applying the proved statement to $DK$ and dualizing as in step 1.1 turns the largest subobject into the largest quotient $p^*{}^pH^1(Rf_*K)[d]$, completing the proof. [F2, F3, step 1.1, step 2.1, step 2.2, construct] ∎

## Remarks

The relative Weak Lefschetz assertions and their duals are the argument of Lemma 4.7.6 and Proposition 4.7.8 of de Cataldo-Migliorini, which were read in full and whose triangle, affineness, transversality and duality steps are used verbatim above. The maximal-subobject and maximal-quotient identifications are Proposition 4.7.9 there, proved in BBD 5.4.11-5.4.13; the truncation comparison used in step 3.1 is reproduced from BBD 5.4.13 and its index bookkeeping was not independently re-derived here. No pure-sheaf, arithmetic-comparison or decomposition-theorem input is used.
