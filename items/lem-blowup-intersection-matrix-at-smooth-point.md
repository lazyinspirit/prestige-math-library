---
id: lem-blowup-intersection-matrix-at-smooth-point
kind: lemma
title: "The intersection matrix of a point blowup of a regular surface"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-blowup-birational-integral-scheme
  - cor-degree-additive-proper-curve
  - cor-exceptional-divisor-smooth-center-normal-bundle
  - cor-twist-exact-sequence-effective-divisor
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-blowup-fractional-ideal
  - def-blowup-scheme-along-ideal
  - def-cartier-divisor
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-exceptional-divisor-blowup
  - def-globally-generated-sheaf
  - def-integral-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-pullback-cartier-divisor
  - def-reduction-of-scheme
  - def-smooth-morphism-to-field-classical
  - def-strict-transform-closed-subscheme
  - def-total-transform-divisor
  - def-very-ample-invertible-sheaf-relative
  - lem-blowup-isomorphism-off-center
  - lem-blowup-point-pushforward-vanishing
  - lem-effective-cartier-divisor-exact-sequence
  - lem-eventual-global-generation-coherent-twists
  - lem-exceptional-curve-normal-bundle-minus-one
  - lem-exceptional-fiber-line-bundle-euler-characteristic
  - lem-projection-formula-invertible-twist
  - lem-pullback-cartier-divisor-line-bundle
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - lem-very-ample-implies-ample
  - def-relative-proj-quasi-coherent-graded-algebra
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-blowup-projective
  - thm-blowup-regular-surface-closed-point-regular
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-26.md"
      - "research/frontier-38-owner-30-alpha-batch-26-5a.md"
      - "research/frontier-38-owner-30-step5-hash-26-post-5a.json"
    content_sha256: "dba2a4a9603e0aff12fa6dd6fc26f3d3dbbf9781d74aa3fc24acf4d94842069b"
  precheck: pass
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Divisors, Section 31.33 (tag 01OF)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
    - title: "The Stacks Project, More on Morphisms, Section 37.17 (tag 0H1G)"
      url: "https://stacks.math.columbia.edu/tag/0H1G"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]), let
$p\in X$ be a closed point with residue field $\kappa(p)$ and
$r:=[\kappa(p):k]$, let $\pi:X'=\operatorname{Bl}_pX\to X$ be the blowup of $X$
at $p$ ([[def-blowup-scheme-along-ideal]]) and let
$E:=\pi^{-1}(p)$ be the exceptional curve
([[def-exceptional-divisor-blowup]]). Then:

1. $X'$ is an integral regular projective surface over $k$, $E$ is an effective
   Cartier divisor, $E$ is isomorphic to $\mathbb P^1_{\kappa(p)}$, and
   $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$; consequently
   $E\cdot E=-r$.
2. For all Cartier divisors $D,D'$ on $X$
   ([[def-cartier-divisor]]): $E\cdot\pi^*D=0$ and
   $\pi^*D\cdot\pi^*D'=D\cdot D'$; in particular $(\pi^*D)^2=D^2$.
3. If $C$ is a reduced effective Cartier divisor on $X$ through $p$ with
   multiplicity $m:=\operatorname{mult}_p(C)\ge1$
   ([[def-effective-cartier-divisor]]) and strict transform $C'$
   ([[def-strict-transform-closed-subscheme]]), then $\pi^*C=C'+mE$,
   $C'\cdot E=mr$ and $C'\cdot C'=C\cdot C-m^2r$. If $p\notin C$ then
   $\pi^*C=C'$ and $(C')^2=C^2$.

## Facts & Assumptions

**Given:** a field $k$, an integral regular projective surface $X$ over $k$, a closed point $p\in X$ with residue field $\kappa(p)$ and residue degree $r=[\kappa(p):k]$, the blowup $\pi:X'=\operatorname{Bl}_pX\to X$ and the exceptional curve $E=\pi^{-1}(p)$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Blowup interfaces: $X'=\operatorname{Bl}_I X=\operatorname{Proj}_X R(I)$ for the ideal sheaf $I$ of the closed point $p$, with structural morphism $\pi$ and relative twists ([[def-blowup-scheme-along-ideal]]); $E=\pi^{-1}(p)$ is the scheme-theoretic inverse image of the center, a closed subscheme with ideal $I\mathcal O_{X'}$ ([[def-exceptional-divisor-blowup]]); $\pi$ is an isomorphism over $X\setminus p$ and $E$ is the complement of that open subscheme ([[lem-blowup-isomorphism-off-center]]); and $\pi$ is proper and locally H-projective, and globally H-projective as soon as the ideal is generated by finitely many global sections ([[thm-blowup-projective]]).

[F2] Integrality and regularity of $X'$: since $X$ is integral and $I$ is a nonzero ideal of finite type, $X'$ is integral and $\pi$ is birational ([[cor-blowup-birational-integral-scheme]]); and since $X$ is a regular finite-type $k$-scheme of pure dimension two and $p$ is a closed point, $X'$ is regular of pure dimension two, $E$ is an effective Cartier divisor isomorphic to $\mathbb P^1_{\kappa(p)}$, and $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$ ([[thm-blowup-regular-surface-closed-point-regular]]); alternatively $E\cong\mathbb P(I/I^2)=\mathbb P^1_{\kappa(p)}$ for the regular immersion $p\hookrightarrow X$ ([[cor-exceptional-divisor-smooth-center-normal-bundle]], [[lem-exceptional-curve-normal-bundle-minus-one]]).

[F3] Projective embeddings: an ample twist of the coherent point ideal on $X$ is globally generated ([[lem-eventual-global-generation-coherent-twists]], [[def-globally-generated-sheaf]]). The graded algebra $\bigoplus I^d\otimes L^{\otimes d}$ has the same relative Proj as $R(I)$ for invertible $L$ ([[def-blowup-fractional-ideal]]). A graded quotient of $\mathcal O_X[z_0,\ldots,z_N]$ gives a closed subscheme of $\mathbb P^N_X$ ([[def-relative-proj-quasi-coherent-graded-algebra]], [[thm-closed-subschemes-projective-space-homogeneous-ideals]]). Closed immersions are preserved by base change ([[lem-closed-immersion-affine-quotient-and-base-change]]). The closed point of a finite-type scheme over $k$ has finite residue degree ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]).

[F4] Cohomology of line bundles on the exceptional curve: for $E\cong\mathbb P^1_{\kappa(p)}$ over $\kappa(p)$ and an invertible sheaf $\mathcal M$ on $E$ of degree $d$ over $\kappa(p)$, $\chi_k(E,\mathcal M)=r(1+d)$, where $r=[\kappa(p):k]$; in particular $\chi_k(E,\mathcal O_E)=r$, and for $\mathcal O_E(E)\cong\mathcal O(-1)$ of degree $-1$ one has $\chi_k(E,\mathcal O_E(E))=0$ and $\deg_E(\mathcal O_E(E))=\chi_k(E,\mathcal O_E(E))-\chi_k(E,\mathcal O_E)=-r$ ([[lem-exceptional-fiber-line-bundle-euler-characteristic]], [[def-degree-invertible-sheaf-proper-dimension-one]]).

[F5] Pushforward and projection formula: $\pi_*\mathcal O_{X'}=\mathcal O_X$ and $R^q\pi_*\mathcal O_{X'}=0$ for every $q>0$ ([[lem-blowup-point-pushforward-vanishing]]); consequently $\chi(X',\pi^*\mathcal N)=\chi(X,\mathcal N)$ for every invertible $\mathcal O_X$-module $\mathcal N$ ([[lem-projection-formula-invertible-twist]], [[def-euler-characteristic-coherent-sheaf]]).

[F6] Effective divisors, twists and transforms: for an effective Cartier divisor $H$ on a surface, the sequence $0\to\mathcal N(-H)\to\mathcal N\to i_*(\mathcal N|_H)\to0$ is exact for invertible $\mathcal N$ ([[lem-effective-cartier-divisor-exact-sequence]], [[cor-twist-exact-sequence-effective-divisor]]); the total transform $\pi^*D$ of a Cartier divisor is the pullback Cartier divisor with $\mathcal O_{X'}(\pi^*D)\cong\pi^*\mathcal O_X(D)$ ([[def-total-transform-divisor]], [[def-pullback-cartier-divisor]], [[lem-pullback-cartier-divisor-line-bundle]]); and for a reduced effective Cartier divisor $C$ on the regular surface $X$ through $p$ with multiplicity $m\ge1$, the total transform decomposes as $\pi^*C=C'+mE$ with $C'$ the strict transform, which is reduced ([[lem-total-transform-strict-plus-exceptional-multiplicity]], [[def-strict-transform-closed-subscheme]], [[def-reduction-of-scheme]]).

[F7] The intersection product of [[def-divisor-intersection-number-on-smooth-projective-surface]] is symmetric and $\mathbb Z$-bilinear on the Picard group of an integral regular projective surface, and the restriction theorem identifies $H\cdot F=\deg_H(\mathcal O(F)|_H)$ for effective $H$ ([[thm-surface-intersection-product-bilinear-and-symmetric]], [[thm-intersection-with-curve-as-degree-of-restriction]]); degrees, and with them intersection numbers, are additive on the proper curve $H$ ([[cor-degree-additive-proper-curve]]).

[F8] The Axiom of Choice enters through the blowup, sheaf-cohomology, global-generation and Euler-characteristic suppliers above; the points and divisors appearing below are given data.

## Proof

1.1 The ideal $I$ of $p$ is a nonzero coherent ideal on the integral regular projective surface $X$. Thus the blowup is integral, regular and pure of dimension two; $E$ is effective Cartier, isomorphic to $\mathbb P^1_{\kappa(p)}$, with normal line bundle $\mathcal O(-1)$. The residue degree $r$ is finite. To apply the intersection theory, we also verify absolute projectivity. Choose $X\hookrightarrow\mathbb P^n_k$ and its ample hyperplane bundle $H$. For some $s$, $I\otimes L$, $L=H^{\otimes s}$, is globally generated. A finite set of its global sections generates it: choose finitely many sections spanning each of finitely many affine neighborhoods, possible since $X$ is quasi-compact and the sheaf is of finite type. [F1, F2, F3]

2.1 Put $S=\bigoplus_{d\ge0}I^d\otimes L^{\otimes d}$. The preceding sections yield a graded surjection $\mathcal O_X[z_0,\ldots,z_N]\to S$, since $S$ is generated in degree one. Its relative Proj is canonically $X'$ by invertible rescaling; the twist need not be an ordinary ideal. Hence $X'$ is a closed subscheme of $\mathbb P^N_X$. Base change of $X\hookrightarrow\mathbb P^n_k$ embeds the latter as a closed subscheme of $\mathbb P^N_k\times_k\mathbb P^n_k$. [F3, step 1.1]

3.1 The product has a closed Segre embedding into $\mathbb P^{(N+1)(n+1)-1}_k$: its coordinates are $z_{ab}=u_av_b$, and the defining equations are all rank-one minors $z_{ab}z_{ij}-z_{aj}z_{ib}$. On $D_+(z_{ij})$, these equations identify its coordinate ring with the polynomial ring on $z_{aj}/z_{ij}$ ($a\ne i$) and $z_{ib}/z_{ij}$ ($b\ne j$); all other coordinates are their products. This is exactly the product of the affine charts $D_+(u_i)$ and $D_+(v_j)$, and the identifications respect their ratio transitions. They glue to the closed embedding. Thus $X'$ is projective over $k$, and all intersection and proper-cohomology hypotheses are satisfied. [F3, F7, step 2.1]

4.1 By the exceptional-curve Euler formula, $\chi_k(E,\mathcal O_E)=r$ and $\chi_k(E,\mathcal O_E(E))=0$, so its degree over $k$ is $-r$. Restriction of the intersection product to the effective curve $E$ gives $E^2=-r$. For any Cartier divisor $D$ on $X$, $\pi|_E$ factors through $\operatorname{Spec}\kappa(p)$, since the pulled-back point ideal vanishes on $E$. The restriction of $\pi^*\mathcal O_X(D)$ is therefore trivial. Its degree is zero, and the restriction formula gives $E\cdot\pi^*D=0$. This formula allows arbitrary $D$; only $E$ must be effective. [F1, F4, F6, F7, step 3.1]

4.2 Pushforward vanishing and the projection formula give $\chi(X',\pi^*\mathcal N)=\chi(X,\mathcal N)$ for every invertible $\mathcal N$. Pullback respects tensor products and duals. Apply this equality to the four sheaves $\mathcal O_X$, $\mathcal O_X(D)^\vee$, $\mathcal O_X(D')^\vee$, and their tensor product in the defining Euler-characteristic expression for intersection. The result is $\pi^*D\cdot\pi^*D'=D\cdot D'$, including the self-intersection case. [F5, F6, F7, step 3.1]

5.1 For the reduced curve through $p$, the proved point formula gives $\pi^*C=C'+mE$. Orthogonality and symmetry imply $0=E\cdot C'+mE^2$, hence $C'\cdot E=mr$. Bilinearity and step 4.2 give $C^2=(C'+mE)^2=(C')^2+2m^2r-m^2r$, so $(C')^2=C^2-m^2r$. If $p\notin C$, a local equation is a unit near $p$; its pullback misses $E$, and the off-center isomorphism gives $\pi^*C=C'$. The same pullback identity yields $(C')^2=C^2$. Choice enters only through the recorded suppliers. [F1, F6, F7, F8, step 4.1, step 4.2] ∎
