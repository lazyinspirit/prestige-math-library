---
id: lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects
kind: lemma
title: "Universal hyperplanes give relative weak Lefschetz and maximal pullback subobjects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications, def-axiom-of-choice, lem-affine-morphisms-have-one-sided-perverse-exactness,
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

[F2] The noncharacteristic and smooth pullback supplier [[lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact]] says that $p'^*[d]$ is perverse-exact and that on complexes constructible for the transverse product Whitney stratification of the universal hyperplane $i^*[-1]$ is perverse-exact with $i^!K'=i^*K'[-2]$. Choose a finite algebraic Whitney stratification supporting $K$ by [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]]. Transversality holds because on every stratum $S$ of $X$ the incidence over $S$ is a smooth projective-space bundle of codimension one inside $S\times(\mathbb P^d)^\vee$; the relevant vocabulary is that of [[def-algebraically-constructible-complex-of-analytic-field-sheaves]].

[F3] The constructed perverse heart has finite length, negative derived Hom between heart objects vanishes, simple objects are intersection complexes of simple local systems, and the six operations have proper base change, projection and duality adjunctions ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[def-canonical-t-structure-on-a-derived-category]]). The projective-space cohomology basis is supplied by [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]] with [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], and the Axiom of Choice is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** the data and formal suppliers of the Statement.

1.1 By [F2], $p'{}^*K[d]$ is perverse and $i^*[-1]$ is perverse-exact on these product strata, so $M=i^*p'{}^*K[d-1]$ is perverse. Let $j:X'\setminus\mathcal X\hookrightarrow X'$ and $u=(f\times1)j$. Over an affine chart of the hyperplane parameter space the complement of the incidence in $\mathbb P^d$ is an affine $d$-space bundle, and $X'\setminus\mathcal X$ is closed in the corresponding bundle over $Y'$; thus $u$ is affine. Apply $R(f\times1)_!$ to the localization triangle $j_!j^*p'^*K[d]\to p'^*K[d]\to i_*i^*p'^*K[d]\to$. By [F1] the first term lies in the perverse lower aisle, so it has no negative perverse cohomology; by proper base change and [F2] the second is $p^*Rf_*K[d]$ and the third is $Rg_*M[1]$. The long exact perverse sequence gives the restriction isomorphisms and the monomorphism. Dualizing the whole construction and using $Di_*=i_!D$, $i^!K'=i^*K'[-2]$ from [F2] gives the Gysin isomorphisms and the epimorphism for $l=1$. [F1, F2, F3, construct]

1.2 The projective-space cohomology formula gives $Rp_*p^*T=\bigoplus_{a=0}^dT[-2a]$ for every constructible complex $T$, and the identical formula with $d-1$ holds for $p'i:\mathcal X\to X$. To justify the formula as a morphism and not only stalk ranks, cup powers of the tautological Euler class pulled back from $(\mathbb P^d)^\vee$ define the map from the direct sum, and on every fibre its map is the usual projective-space cohomology basis, hence an isomorphism by proper base change; the integral power basis is [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]], and tensoring the finite cellular cochain complex with $k$ preserves the basis by [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]. For heart objects $A,B$, adjunction therefore identifies $\operatorname{Hom}(p^*A[d],p^*B[d])$ with $\operatorname{Hom}(A,B)$: all terms $\operatorname{Hom}(A,B[-2a])$ for $a>0$ vanish by [F3]. [F2, F3, algebra, construct]

2.1 Write $F=p^*[d]$. For the product projection $p$, the normal slices to $S\times\mathbb P^d$ are precisely the normal slices to $S$. Thus the stalk and costalk boundary conditions characterizing intermediate extension in [F3] are preserved: on a boundary stratum of dimension $s$ their strict bounds $q<-s$ and $q>-s$ become $q<-(s+d)$ and $q>-(s+d)$ after the shift $[d]$. On the dense open, pullback is the shifted pulled-back local system. The no-boundary characterization in [F3] therefore shows that $F$ takes $\operatorname{IC}_S(L)$ to $\operatorname{IC}_{S\times\mathbb P^d}(p^*L)$, with both intersection complexes normalized by their respective support dimensions. The local system $p^*L$ remains irreducible: a sub-local-system restricts along the section $y\mapsto(y,H_0)$ to a sub-local-system of $L$, hence to zero or all of $L$. Its rank is constant on each connected projective-space fibre (any two points lie on a projective line), so those two alternatives give zero or all of $p^*L$ on the whole product. Hence $F$ is exact, fully faithful by step 1.2, and preserves simples. Every composition factor of $F(A)$ is therefore a pulled-back simple; for a subobject $B\subseteq F(A)$ choose a simple $F(S)\subseteq B$, lift its inclusion to $S\subseteq A$ by full faithfulness, and induct on $B/F(S)\subseteq F(A/S)$. The lifted inclusion of the resulting base object into $A/S$ has a preimage in $A$, whose exact image under $F$ is $B$. This proves the image of $F$ is closed under subobjects and quotients. The derived right adjoint $Rp_*[-d]$ preserves the lower aisle: for $E\in{}^pD^{\ge0}$ and $B\in{}^pD^{\le-1}$, adjunction gives $\operatorname{Hom}(B,Rp_*E[-d])=\operatorname{Hom}(F(B),E)=0$. Thus $Rp_*$ sends ${}^pD^{\ge q}$ into ${}^pD^{\ge q-d}$. Its heart right adjoint is $r={}^pH^{-d}Rp_*$, since the positive-degree truncation of $Rp_*C[-d]$ has no Hom from a heart object. The analogous left adjoint is $\ell={}^pH^dRp_!$, using $p^!=p^*[2d]$. Full faithfulness gives $rF=1$. The kernel of the counit $Fr(C)\to C$ lies in the image of $F$ by subobject closure, and applying the left-exact $r$ shows that kernel is zero, by the adjunction identity $r(\varepsilon_C)=1$. Every subobject $F(B)\hookrightarrow C$ factors through this counit by adjunction. Consequently $Fr(C)$ is exactly the largest subobject coming from $Y$; duality gives the largest quotient $F\ell(C)$. [F2, F3, step 1.2, construct, algebra]

3.1 Put $T=Rf_*K$, $V=R(f\times1)_*p'^*K$ and $U=Rg_*i^*p'^*K$. The graph of $(f,X\hookrightarrow\mathbb P^d)$ is a closed embedding $a:X\hookrightarrow Y\times\mathbb P^d$ and $f=q a$, where $q$ is the projection. Closed pushforward is perverse-exact directly from the two stratum inequalities in [F3]: on strata inside the image its stalks and costalks are those of $K$, and on the complement they vanish. Applying the lower-aisle calculation of step 2.1 to $q$ therefore gives $T=Rq_*a_*K\in{}^pD^{\ge-d}$. Under the cup-power bases of step 1.2, the map $Rp_*V\to Rp_*U$ is a matrix $(1,\beta):\bigoplus_{a=0}^{d-1}T[-2a]\oplus T[-2d]\to\bigoplus_{a=0}^{d-1}T[-2a]$: restriction carries each of the first $d$ parameter-class powers to the identical power on the incidence bundle, while the last power may be a linear combination involving base classes. Changing coordinates by $(x,z)\mapsto(x+\beta z,z)$ identifies this map with projection. Its discarded summand $T[-2d]$ lies in ${}^pD^{\ge d}$, so the map induces isomorphisms in every perverse degree below $d$, including degrees $-1$ and $0$ for all $d\ge1$. This uses no decomposition of $T$ into its perverse cohomology. [F2, F3, step 1.2, step 2.1, construct, algebra]

4.1 Set $n=d-1$. Step 1.1 gives an isomorphism $L={}^p\tau_{<n}V\simeq{}^p\tau_{<n}U$ and a monomorphism $\iota:{}^pH^nV\hookrightarrow{}^pH^nU$. Apply $Rp_*$ to the two triangles $L\to V\to{}^p\tau_{\ge n}V\to$ and $L\to U\to{}^p\tau_{\ge n}U\to$. Their five-term exact sequences are ${}^pH^{-1}Rp_*L\to{}^pH^{-1}Rp_*V\to{}^pH^{-1}Rp_*{}^p\tau_{\ge n}V\to{}^pH^0Rp_*L\to{}^pH^0Rp_*V$ and the same sequence for $U$. The first and fourth vertical maps are identities, and the second and fifth are isomorphisms by step 3.1; the five lemma proves that the middle map is an isomorphism. For either $W=V$ or $W=U$, the triangle $({}^pH^nW)[-n]\to{}^p\tau_{\ge n}W\to{}^p\tau_{\ge n+1}W\to$ has last term whose $Rp_*$ lies in ${}^pD^{\ge n+1-d}={}^pD^{\ge0}$, by step 2.1. Its perverse cohomology in degrees $-2$ and $-1$ vanishes. The resulting exact sequence gives, naturally in $W$, ${}^pH^{-1}(Rp_*{}^p\tau_{\ge n}W)\simeq{}^pH^{-1-n}(Rp_*{}^pH^nW)=r({}^pH^nW)$, since $-1-n=-d$. Thus $r(\iota)$ is an isomorphism. Proper base change and exact $F$ give ${}^pH^nV=F({}^pH^{-1}T)$, so its right adjoint is ${}^pH^{-1}T$. Adjunction factors $\iota$ as the counit $Fr({}^pH^nU)\to{}^pH^nU$ preceded by the isomorphism $F(r(\iota))$. By step 2.1 its image is exactly the largest pullback subobject of ${}^pH^nU={}^pH^0(Rg_*M)$. Apply this result to $DK$ and dualize using [F2] and [F3]; the middle object is dualized, perverse degrees change sign, and largest subobject becomes largest quotient $F({}^pH^1T)$. This proves every assertion. [F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Remarks

The localization, affineness, transversality and duality argument is Lemma 4.7.6 and Proposition 4.7.8 of de Cataldo–Migliorini. The maximal-subobject assertion is their Proposition 4.7.9 and BBD §5.4.11–5.4.13. The proof above derives the lower perverse amplitude from smooth adjunction, derives the required full pushforward comparison from the projective-bundle cup-power matrix, and spells out both truncation exact sequences and the equality $-1-(d-1)=-d$. No pure-sheaf, arithmetic-comparison or decomposition-theorem input is used.
