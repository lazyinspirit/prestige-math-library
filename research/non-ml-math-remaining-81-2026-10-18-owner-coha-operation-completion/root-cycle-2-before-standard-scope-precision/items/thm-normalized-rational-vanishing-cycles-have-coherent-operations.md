---
id: thm-normalized-rational-vanishing-cycles-have-coherent-operations
kind: theorem
title: "Normalized rational vanishing cycles have coherent correspondence operations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
- def-axiom-of-choice
- lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport
- lem-analytic-six-operation-support-and-trace-calculus
- lem-analytic-constructible-sheaves-admit-coherent-six-operations
- thm-verdier-duality-on-oriented-stratified-complex-varieties
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- thm-principalization-of-ideals
- prop-canonical-resolution-of-marked-ideals
- def-simple-normal-crossings-divisors
- thm-holomorphic-implicit-function-theorem
- thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses
- lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses
- thm-cover-small-inclusion-is-a-chain-homotopy-equivalence
- lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "David Massey, The Sebastiani-Thom Isomorphism in the Derived Category"
    url: "https://arxiv.org/pdf/math/9908101"
    locator: "Complete eight-page argument: Lemmas 1.1–1.2, Propositions 1.3–1.4 and proof 1.5, including monodromy."
  - title: "David Massey, Natural commuting of vanishing cycles and the Verdier dual"
    url: "https://arxiv.org/pdf/0908.2799"
    locator: "Complete six-page argument: closed-cover Lemmas 2.1–2.2 and Theorem 3.1."
---

## Statement

Assume AC, work with rational analytic sheaves, and let $f:X\to\mathbb C$ be regular on a smooth separated finite-type complex variety. With $i:f^{-1}(0)\hookrightarrow X$, define the **normalized rational vanishing cycles**
$$V_f A=i^*R\Gamma_{\{\operatorname{Re}f\le0\}}A.$$
They are viewed on $X$ by closed extension when necessary. Positive angular continuation specifies their monodromy. The standard constant-input coefficient $V_f\mathbb Q_X$ is bounded algebraically constructible. It has $V_0\mathbb Q_X=\mathbb Q_X$ and
$$H^k(V_f\mathbb Q_X)_x=\widetilde H^{k-1}(F_{f,x};\mathbb Q),$$
where $F_{f,x}$ is the local Milnor fibre. The following are coherent operations for these coefficients, their constant shifts, external products, smooth pullbacks, Verdier duals and the proper direct images used below between smooth varieties:

1. smooth pullback commutes with $V$, with the positive complex orientation for exceptional pullback;
2. for proper $p:E\to X$ with $E$ smooth, $V_fRp_*\mathbb Q_E\simeq Rp_*V_{fp}\mathbb Q_E$; applying this to the unit gives $V_f\mathbb Q_X\to Rp_*V_{fp}\mathbb Q_E$;
3. the natural support-product/inclusion map is a Thom–Sebastiani isomorphism $V_fA\boxtimes V_gB\simeq k^*V_{f+g}(A\boxtimes B)$ on the product zero fibre, associative, unital and compatible with the two tensor-product monodromies;
4. normalized duality gives $D V_f\mathbb Q_X\simeq V_fD\mathbb Q_X$, hence $D V_f\mathbb Q_X\simeq V_f\mathbb Q_X[2\dim X]$;
5. complex affine fibrations give oriented homotopy-invariance isomorphisms.

The proper/smooth and external-product comparisons commute with composition, units and Cartesian pasting for these maps. This is a rational constructible statement; it asserts no mixed Hodge enrichment or arbitrary-stack formalism.

## Facts & Assumptions

**Given:** the smooth varieties and regular functions above, rational coefficients, the indicated standard coefficients and their specified closure under operations.

[F1] [[lem-analytic-six-operation-support-and-trace-calculus]] constructs localization for arbitrary closed supports in locally compact spaces, proper base change, proper-support composition, projection and unit/counit pasting on the stated finite-dimensional domains. Temporary real half-spaces are handled in this ambient analytic category, not asserted to be complex algebraic subsets.

[F2] [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] and [[thm-verdier-duality-on-oriented-stratified-complex-varieties]] give the bounded algebraically constructible operations, proper pushforward preservation and involutive duality, with $\omega_X=\mathbb Q_X[2\dim X]$ and smooth exceptional orientation.

[F3] [[lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport]] supplies cofinal Milnor neighborhoods, their boundary-preserving controlled sector transports and the natural transport of bounded constructible coefficients.

[F4] [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] supplies bounded finite local and compact-support cochains and coefficient reconstruction on products. Its finite relative cochains identify localization cones and their restriction maps.

[F5] [[thm-principalization-of-ideals]] and [[prop-canonical-resolution-of-marked-ideals]] give a proper composite of smooth-centre blowups principalizing a nonzero coherent ideal on a smooth finite-type variety. Every centre lies in the controlled support. For $(f)$, the composite is consequently an isomorphism off $f=0$ and its total zero divisor has the SNC support of [[def-simple-normal-crossings-divisors]].

[F6] [[thm-holomorphic-implicit-function-theorem]] gives local roots of a nonzero holomorphic unit and the corresponding invertible SNC coordinate changes.

[F7] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] supplies the natural signed-shuffle and Alexander–Whitney maps and their natural prism homotopies. [[lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses]] proves the corresponding relative cohomological comparison for finite relative models over the field $\mathbb Q$; finite-dimensional rational homology is free. The supplied finite cell models and relative support cones are those of [F3]–[F4], and bounded coefficient shifts and finite totalizations preserve these comparisons.

[F8] [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] supplies a small-chain retraction and homotopy for an open cover, constructed with simplex-dependent least subdivision counts, preserving every subspace chain complex. [[lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes]] identifies cover-small chains with the sum for a two-open cover.

[A1] [[def-axiom-of-choice]] is inherited through [F1]–[F8], including the arbitrary-rank cycle/boundary sections in the relative field-Kunneth proof of [F7]. The support inclusions and specified angular paths introduce no additional choice principle.

## Proof

**Proof technique:** direct.

1.1 Put $U=X\setminus f^{-1}(0)$, let $j:U\to X$, and let $\nu:\widetilde U\to U$ be the pullback of the universal cover $\exp:\mathbb C\to\mathbb C^*$. Using bounded-below analytic injective replacements in $D^+$, before boundedness is proved, define $\Psi_fA=i^*R(j\nu)_*\nu^*j^*A$, with its unit $i^*A\to\Psi_fA$. Restrict to the lift of the positive half-plane whose logarithm has imaginary part in $(-\pi/2,\pi/2)$. This gives a natural map from $\Psi_fA$ to the restriction of the direct image from $f^{-1}\{\operatorname{Re}z>0\}$. On each cofinal Milnor neighborhood [F3], the universal cover of its punctured function rectangle and the lifted positive sector are contractible bases with the same fibre, and the coefficient reconstruction of [F4] makes this restriction a quasi-isomorphism of cochain complexes. It is therefore an isomorphism on every stalk, hence a natural sheaf isomorphism. Localization [F1] now gives $V_fA\simeq\operatorname{Cone}(i^*A\to\Psi_fA)[-1]$. In particular its stalk is the relative cochain complex of a Milnor neighborhood and its fibre; for constant coefficients this gives the displayed reduced-cohomology degree, and for $f=0$ the empty fibre gives $V_0\mathbb Q=\mathbb Q$. [F1, F3, F4, given, construct]

2.1 Expanding $\Psi$ and applying proper base change to the open and universal-cover pullback squares gives $\Psi_f Rp_*A\simeq Rp_{0*}\Psi_{fp}A$ for proper $p$. Indeed move the proper direct image past $j^*$ and $\nu^*$ by [F1], compose ordinary direct images with $R(j\nu)_*$, and move it past $i^*$ by proper base change again. This argument takes place in locally compact analytic spaces with finite-dimensional proper fibres, so it does not require constructibility to have been proved already. [F1, step 1.1, construct]

2.2 Let $P=\{\operatorname{Re}f\le0\}$, $Q=\{\operatorname{Re}g\le0\}$ and $Z=\{\operatorname{Re}(f+g)\le0\}$. On cofinal neighborhoods $U,V$ from [F3], put $A_+=U\setminus P$, $B_+=V\setminus Q$ and $L=(A_+\times V)\cup(U\times B_+)$. These are open complements, not asserted CW subcomplexes. Localization represents their support cochains by the relative complexes of $(U,A_+)$, $(V,B_+)$ and $(U\times V,L)$. The finite ordinary and Milnor-fibre models in [F3], including its compact-tube triangulation, give finite homology of $U,A_+$ and their relative pair, and similarly for $V,B_+$. No triangulation of the real cuts $P,Q$ is needed. [F1, F3, F4, step 1.1, construct]

2.3 Here is the required local duality calculation. If closed $Z_+,Z_-$ cover a locally compact space, with $L=Z_+\cap Z_-$ and inclusions $j_\pm,m$, their localization triangles give $m^*j_{+*}j_+^!A\simeq(L\to Z_-)^!j_-^*A$. To verify it, apply $j_{+*}j_+^!$ to localization for $Z_-$: the open-complement term is unchanged by support in $Z_+$ because $X\setminus Z_-\subset Z_+$, and becomes zero after restriction to $L$. Closed proper base change identifies the remaining term as stated. Dualizing these adjunction maps exchanges the two support descriptions. This calculation uses the analytic exceptional adjunction of [F1]. On the present local sector pairs, [F3] and [F4] give finite cochain and relative-cochain complexes, so dualization and evaluation are the ordinary finite-vector-space operations; no biduality theorem for arbitrary nonconstructible analytic sheaves is being invoked. [F1, F3, F4, step 1.1, construct]

3.1 To prove standard-coefficient constructibility, treat constant-function components directly and otherwise apply [F5] to $(f)$. Obtain $\pi:\widetilde X\to X$ proper, smooth upstairs, isomorphic off $f=0$, with $f\pi$ having SNC zero support. The support-centre clause in [F5] and the ordinary Rees-algebra blowup charts imply the asserted isomorphism off $f=0$ at every step. Thus $\mathbb Q_X\to R\pi_*\mathbb Q_{\widetilde X}$ is an isomorphism there, and $\Psi$, which depends only on $j^*A$, gives $\Psi_f\mathbb Q_X\simeq R\pi_{0*}\Psi_{f\pi}\mathbb Q_{\widetilde X}$ by step 2.1. This uses principalization of the function ideal, not resolution of the ambient variety alone. [F5, step 1.1, step 2.1, construct]

3.2 Here is the open-pair extension of the relative AW comparison. Write $N=C_*(A_+\times V)+C_*(U\times B_+)$ and $E=C_*(U\times V)/N$. By naturality [F7], AW, shuffle and their homotopies descend to a chain homotopy equivalence between $E$ and $C_*(U,A_+)\otimes C_*(V,B_+)$. The two indicated open sets cover $L$, so [F8] gives a small-chain retraction $R$ on $C_*(L)$ landing in $N$, with $1-R=dD+Dd$, and both $R,D$ preserve $N$. Thus $D$ contracts $J=C_*(L)/N$. Extend its contraction to a graded map $e:E\to J$ by zero on the remaining singular-simplex basis vectors. Then $T=1-de-ed$ commutes with the differential and kills $J$. It factors through a chain inverse to $q:E\to C_*(U\times V,L)$, since $qT=q$ and $T|_J=0$; its other composite is homotopic to the identity by $e$. This proves the relative chain comparison for these OPEN pairs. Subdivision depth is chosen separately for each simplex by [F8], never uniformly over all chains. [F7, F8, step 2.2, construct, algebra]

4.1 In SNC coordinates $f\pi=u(z)\prod_{i=1}^r z_i^{m_i}$ with $u\ne0$ and $m_i\ge1$. By [F6] choose a local $m_1$-st root $v$ of $u$; replacing $z_1$ by $v(z)z_1$ is an invertible coordinate change along the SNC stratum and makes the function the monomial. For small $t\ne0$ in a coordinate polydisc, put $s_i=-\log|z_i|$. The radial equation is the open convex simplex $s_i>L_i$, $\sum_i m_i s_i=-\log|t|$. The angular fibre of $\prod_i e^{im_i\theta_i}=t/|t|$ has $\gcd(m_i)$ components, each a torus $(S^1)^{r-1}$: the Euclidean algorithm extends the primitive integer row $(m_i/\gcd(m_i))$ to an invertible integer matrix, reducing its torus character to the $\gcd(m_i)$-power map in one coordinate. The tangential coordinate disc is contractible. These are finite cellular cochain models, constant in each tangential chart, and their coordinate-change transport gives locally constant finite-rank cohomology on the finitely many algebraic SNC strata. Thus $\Psi_{f\pi}\mathbb Q$ is bounded algebraically constructible. [F4, F5, F6, step 3.1, construct, algebra]

4.2 Over $\mathbb Q$, the finite-dimensional relative homology in step 2.2 is free. The algebraic part of [F7]'s relative cohomological proof applies to the free relative singular complexes with the chain comparison now proved in step 3.2: choose cycle/boundary sections, split one factor up to chain homotopy onto its homology with zero differential, and use the finite-basis evaluation inverse $w\mapsto\sum_i w(-\otimes e_i)\otimes e_i^*$. There are finitely many terms in each degree and bounded finite homology; these maps identify the actual cochain cross product with a quasi-isomorphism. Constant shifts and finite coefficient totalizations preserve it. Passing through the cofinal stalk system gives $R\Gamma_PA\boxtimes R\Gamma_QB\simeq R\Gamma_{P\times Q}(A\boxtimes B)$ for the standard inputs used here. Compose it with inclusion of supports $P\times Q\subset Z$ and restrict to the product zero fibre to define TS. This proof neither applies the CW-pair theorem to an open complement nor invokes algebraic biduality on real half-spaces. [A1, F1, F3, F4, F7, step 2.2, step 3.2, construct, algebra]

5.1 Proper constructible preservation [F2] applied to $\pi_0$ and step 3.1 proves bounded algebraic constructibility of $\Psi_f\mathbb Q_X$, and its natural cone in step 1.1 proves the same for $V_f\mathbb Q_X$. The local relative models of [F3] and [F4] give a uniform finite bound depending on $\dim X$ for its ordinary amplitude. Standard coefficients on smooth frame charts are pullbacks by the argument below, so their unshifted amplitude equals that downstairs, independently of the auxiliary frame dimension. Constant shifts, external products and ordinary Verdier duals stay within the proved domain of [F2]; proper images do by [F2] and the comparison of step 2.1. [F2, F3, F4, step 1.1, step 3.1, step 4.1]

5.2 To prove this TS map is an isomorphism, work on a product of cofinal neighborhoods [F3], and set $\Theta=(\operatorname{Re}f,\operatorname{Re}g)$, $C=\{u\le0,v\le0\}$, $D=\{u+v\le0\}$. Localization identifies the required support comparison with restriction of complement cochains from $\Theta^{-1}(C^c)$ to $\Theta^{-1}(D^c)$. On $u>0,v<0$ deform by $H_t(u,v)=(u,(1-t)v+t\max(v,-u/2))$; on $u<0,v>0$ use the exchanged formula, and on the northeast quadrant and its positive axes use the identity. The formulas agree continuously in $C^c$, never move a coordinate through zero, do not increase absolute coordinates, send $C^c$ into $D^c$ at $t=1$, and preserve $D^c$ throughout. Thus they supply a homotopy inverse to the complement inclusion. Leave imaginary coordinates fixed and lift these paths by [F3]'s product sector transports, preserving the marked sphere boundaries and coefficients. The finite relative cochain comparisons [F4] identify restriction with a quasi-isomorphism, not merely an equality of dimensions. Cofinality and stalk detection prove that the TS map of step 4.2 is an isomorphism. [F1, F3, F4, step 4.2, construct]

5.3 For a smooth map $s:E\to X$, local product coordinates make $fs$ the pullback function and make the relative half-space pair a complex ball times the base pair. Its ordinary cochain complex is $\mathbb Q$, so [F4] gives the natural comparison $s^*V_fA\simeq V_{fs}s^*A$. It is the inverse-image map of the localization triangles and is therefore compatible with changes of product chart, composition and all support-product maps. On an affine fibration the same ordinary comparison is a homotopy-invariance isomorphism; compact-support fibre cochains are $\mathbb Q[-2e]$ for relative complex dimension $e$, with the generator integrating to $+1$. Hence the corresponding exceptional operation has the positive complex orientation and its compositional shift. [F1, F2, F4, step 1.1, step 4.2, construct]

6.1 For three functions both iterated TS maps are induced by the same inclusion $\prod_i\{\operatorname{Re}f_i\le0\}\subset\{\operatorname{Re}\sum_i f_i\le0\}$. Composition of supports and external adjunctions is associative in the actual dg localization model [F1]. Hence the maps agree under the tensor associator and obey its pentagon for every number of factors. For the zero function on a point the support inclusion and coefficient $\mathbb Q$ are identities, giving both unit laws. [F1, step 1.1, step 4.2, step 5.2]

6.2 Proper commutation of $V$ can also be seen directly: localization for $\{\operatorname{Re}f\le0\}$, proper base change for its open complement and the identity on the middle object identify its support triangle after $Rp_*$ with the support triangle downstairs. Proper restriction to $f=0$ then gives $V_fRp_*\simeq Rp_*V_{fp}$. Applying it to the ordinary unit gives $V_f\mathbb Q_X\to Rp_*V_{fp}\mathbb Q_E$. For composable proper maps the unit of the composite is the composite of units, so these coefficient maps compose. Smooth base change sends the same unit to the pulled-back unit, and the comparisons of step 5.3 identify the resulting coefficient maps. Pasting reduces to the triangle identities of [F1]. Naturality of the external-support map of step 4.2 on that unit proves compatibility with TS and external products. [F1, F2, step 4.2, step 5.3, construct]

7.1 Apply the same construction to $e^{-i\theta}f$ and $e^{-i\theta}g$. Use circular function discs inside the rectangles of [F3]; these are independent of $\theta$. The angular families of support inclusions and cochain restriction maps commute with continuation. Transport from $\theta=0$ to $2\pi$ is the positive-loop monodromy of $f+g$, and on the external product it is the simultaneous transport $T_f\otimes T_g$. TS therefore intertwines these automorphisms, without semisimplicity. This also constructs the angular comparisons used in step 1.1. [F3, F4, step 5.2, step 6.1, construct]

8.1 Apply step 2.3 to $Z_\pm=\{\pm\operatorname{Re}f\le0\}$. On $L=\{\operatorname{Re}f=0\}$ the restricted support complex is locally supported on $f=0$ near that fibre: at any other sufficiently nearby value $it\ne0$, the submersion product [F3] has zero half-space relative complex. On a closed inclusion whose intersection with a complex's support is open and closed relative to that support, ordinary and exceptional restriction agree; factor through the support and use its open restriction adjunction to verify the natural map. Thus restricting the dual calculation from $L$ to $f=0$ gives $D V_fA\simeq V_f^\pi DA$, the opposite-half-space normalization. The specified angular half-turn of step 7.1 identifies it with $V_fDA$. For the standard coefficient and its proved constructible closure [F2] applies; since $D\mathbb Q_X=\mathbb Q_X[2\dim X]$, this proves the claimed normalized duality formula. On the dual coefficient the monodromy is contragredient transport $D(T^{-1})$, making evaluation invariant; all preceding maps respect this transport by naturality. [F1, F2, F3, step 5.1, step 7.1, step 2.3]

9.1 The maps in steps 2.2–8.1 are the maps of the same support triangles, external adjunctions, orientations and specified angular transports. Their composition and proper/smooth pasting identities therefore hold simultaneously by [F1]; duality takes these identities to the corresponding identities for dual coefficients. Steps 3.1–5.1 put every standard coefficient and the stated closure in the actual constructible domain, and step 5.2 proves the load-bearing TS isomorphism. This proves all assertions, with AC exactly as in [A1]. [A1, F1, F2, step 5.1, step 5.2, step 6.1, step 7.1, step 5.3, step 6.2, step 8.1] ∎
