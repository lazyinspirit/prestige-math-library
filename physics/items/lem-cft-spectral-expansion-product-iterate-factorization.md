---
id: lem-cft-spectral-expansion-product-iterate-factorization
kind: lemma
title: Product-iterate factorization from compatible spectral partial evaluations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 5
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-real-exponential-polynomial-uniqueness
  - thm-cft-strongly-graded-pz-dual-representation
  - thm-cft-strongly-graded-contragredient-duality
  - def-cft-pz-compatibility-subspace
  - def-cft-pz-intertwining-map
  - lem-cft-pz-parallel-transport
  - lem-cft-rational-current-actions-and-partial-evaluation
dependency_roles:
  lem-cft-real-exponential-polynomial-uniqueness: mathematical-premise
  thm-cft-strongly-graded-pz-dual-representation: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
  def-cft-pz-compatibility-subspace: mathematical-premise
  def-cft-pz-intertwining-map: mathematical-premise
  lem-cft-pz-parallel-transport: mathematical-premise
  lem-cft-rational-current-actions-and-partial-evaluation: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part VI, Lemma 9.22 and Theorem 9.23; the proof below reconstructs the outer factorization"
      url: https://arxiv.org/pdf/1012.4202v3
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathcal C$ be a full category of strongly graded generalized modules over a strongly graded Möbius or conformal vertex algebra. Suppose objects have real weights and objectwise uniformly nilpotent $L(0)-L(0)_s$, and $\mathcal C$ is closed under restricted contragredients, ambient images and the required $P(z)$-products. Ambient images means images of maps from an object of $\mathcal C$ to any generalized module. Let $z_0=z_1-z_2$ and $|z_1|>|z_2|>|z_0|>0$. Let $I_1,I_2$ be composable $P(z_1)$- and $P(z_2)$-maps with inputs $W_1,W_2,W_3$ and output $W_4$, whose scalar product projection sums converge and are analytic in their radial region for every fixed leaf tuple and restricted-dual exterior vector. Since the intermediate weights have no chosen enumeration or order, convergence of a scalar family $(a_h)_h$ means convergence of the net of finite subsums $\sum_{h\in F}a_h$, where finite subsets $F$ are directed by inclusion. The reverse assertion below uses the same convention for iterate projection sums.

For $f\in W_4'$, $w_3\in W_3$, put $\mu(f,w_3)(w_1,w_2)=\langle f,I_1(w_1,I_2(w_2,w_3))\rangle$. Suppose that it has a unique expansion $\mu=\sum_h\lambda_h(f,w_3)$, where each term has real generalized weight $h$ for $D=L'_{P(z_0)}(0)$, is a finite sum of auxiliary-homogeneous vectors, satisfies full $P(z_0)$-compatibility, and belongs to the sum $S$ of the images of $\mathcal C$-target $P(z_0)$-maps. Suppose also that, for each $f,w_3$, the series $\sum_he^{sD}\lambda_h$ is weakly absolutely convergent on one complex neighborhood of $s=0$ with one finite bound on its logarithmic polynomial degrees, independent of $w_1,w_2$. Then there is a unique $P(z_2)$-map
$$J:(W_1\boxtimes_{z_0}W_2)\otimes W_3\longrightarrow\overline{W_4}$$
such that the original product equals the iterate of $J$ and the universal $P(z_0)$-map, with the same branches. The construction is linear in the product and natural in all input and output modules. With the corresponding hypotheses on the opposite partial evaluation, an iterate similarly factors uniquely as a product.

## Statement references

[[def-cft-pz-compatibility-subspace]]

[[def-cft-pz-intertwining-map]]

[[thm-cft-strongly-graded-pz-dual-representation]]

## Facts & Assumptions

**Given:** Exactly the product and spectral hypotheses of the Statement. The theorem does not assume that compatibility follows merely from being a transported-field module; that separate implication must be supplied before applying it.

[F1] [[thm-cft-strongly-graded-pz-dual-representation]] realizes $T=W_1\boxtimes_{z_0}W_2$ as $S'$ and proves binary component spanning. Indeed if a representing product is initially chosen, $S$ is the image of its restricted transpose; ambient-image closure and contragredient closure put $S,S'$ in $\mathcal C$.

[F2] [[thm-cft-strongly-graded-contragredient-duality]] supplies opposite fields, duality and transposition in full strong Möbius/conformal scope. [[def-cft-pz-compatibility-subspace]] supplies the exact transported field and its three operators.

[F3] [[lem-cft-real-exponential-polynomial-uniqueness]] proves normality, derivative convergence, coefficient uniqueness and bilinearity for the stated real spectral series without a discreteness or finite-coset assumption.

[F4] [[lem-cft-rational-current-actions-and-partial-evaluation]] supplies the coefficientwise rational-current Ward identity and its delta expansions. In opposite coordinates its two-point action is explicitly
$$(Y_{P(z_0)}^{\prime o}(v,x)\nu)_m(w_1,w_2)=\nu(w_1,v_mw_2)+\sum_{k\geq0}\binom mk z_0^{m-k}\nu(v_kw_1,w_2).$$
The $k$-sum is finite by input truncation. Products of the two delta kernels below are interpreted by their actual binomial expansions, with $|z_0|<|z_2|$, rather than as unrestricted products of formal distributions.

[F5] [[lem-cft-pz-parallel-transport]] reconstructs an intertwiner from a $P(z)$-map, gives its derivative and $L(0)$ conjugation formulas, and transports fixed endpoint branches. [[def-cft-pz-intertwining-map]] specifies the axioms to verify for $J$.

## Proof

1.1 The scalar convergence convention implies absolute summability. For a convergent finite-subsum net, the Cauchy condition gives a finite set $F_0$ such that $|\sum_{h\in E}a_h|<1$ for every finite $E$ disjoint from $F_0$. Divide the complex plane into four disjoint sectors of angle $\pi/2$. In each sector, rotation to its bisector gives $\operatorname{Re}(e^{-i\theta}a_h)\geq |a_h|/\sqrt2$, so every finite tail subset in that sector has total absolute value at most $\sqrt2$. Summing sectors and adjoining $F_0$ shows $\sup_F\sum_{h\in F}|a_h|<\infty$. Thus the family is absolutely summable; its nonzero support is countable, since for each positive integer $k$ only finitely many terms have modulus at least $1/k$. This applies at every radial point to every fixed modified leaf tuple and exterior vector, which are again allowed inputs. Hence F4's actual-product and actual-iterate Ward hypotheses hold before any spectral or delta sums are exchanged. [given, F4, algebra]

1.2 By F3, uniqueness of the spectral expansion makes every $\lambda_h(f,w_3)$ bilinear in $f,w_3$: sums and scalar multiples of candidate expansions retain convergence on the intersection of finitely many neighborhoods, and uniqueness identifies their coefficients. By F1 all these vectors belong to the actual generalized-weight component $S_{[h]}$. Thus they define $\widetilde\mu(f,w_3)=\sum_h\lambda_h(f,w_3)\in\overline S$. This is a sum in the completion of an actual module, distinct from the weak sum in the algebraic dual. Define $$\langle f,J(t,w_3)\rangle=\langle t,\widetilde\mu(f,w_3)\rangle,\qquad t\in T=S'.$$ For actual $t$ the right side has only finitely many component pairings. On each finite $(\beta,h)$-component of $W_4'$ it is a functional, hence an element of the corresponding component of $\overline{W_4}$ by F2. This defines $J$. Auxiliary-degree addition follows from that of the original product and spectral uniqueness. For each fixed auxiliary degree and integer weight string, the lower truncation required of $J$ follows from the lower truncation of that same string in $W_4$. [given, F1, F2, F3, algebra]

2.1 Set $u=e^s$, and let $G_{a,b}$ denote the original scalar product with its continued radial branches. Define $$H_s(f,w_3)(w_1,w_2)=G_{z_0+uz_2,uz_2}(u^{-L(0)'}f;w_1,w_2,u^{L(0)}w_3).$$ For small $s$ the positions stay radial, so $H_s$ is analytic. Termwise position derivatives are legitimate: on generalized-weight blocks each product is a real-exponential polynomial in the logarithms of its ratio coordinates, with a uniform finite logarithmic degree bound from the three objectwise nilpotence exponents; interpolation in finitely many imaginary translates separates its log coefficients, and domination at the four real corners of a slightly larger logarithm rectangle bounds the double series and every differentiated series. This is the two-variable version of F3's interpolation and normality proof, using a rectangular interpolation grid and $|m|^r|n|^q e^{-\epsilon(|m|+|n|)}\leq C$. The $L(0)$ bracket and the derivative identity then give $$\partial_sH_s=-D H_s,\qquad (D\nu)(w_1,w_2)=\nu((L(0)+z_0L(-1))w_1,w_2)+\nu(w_1,L(0)w_2).$$ Indeed the terms $uz_2(\partial_{z_1}+\partial_{z_2})$ cancel against the scaled part of $z_1\partial_{z_1}+z_2\partial_{z_2}$ in the full $L(0)$ bracket, leaving $-z_0\partial_{z_1}$ and the two inner $L(0)$ terms. Consequently all Taylor derivatives at zero equal $(-D)^k\mu$. F3 makes $\sum_he^{-sD}\lambda_h$ analytic with those same derivatives: $D^k$ on a test is a finite combination of tests, so the identity at $s=0$ can be differentiated termwise. Taylor uniqueness proves $$H_s=\sum_he^{-sD}\lambda_h=e^{-sD}\widetilde\mu$$ as weak functionals, on a common small neighborhood independent of the inner tests. [F2, F3, F5, step 1.2, algebra]

2.2 For clarity the reverse construction uses the following different partial evaluation and scaling. Start with an iterate $G_{a,b}(f;w_1,w_2,w_3)$, $a=z_0$, $b=z_2$, $c=a+b=z_1$. Put $S_{23}=W_2\,P(b)\,W_3$, $T_{23}=S_{23}'$, $D_1=L'_{P(b)}(0)$. For fixed $f,w_1$, let $\eta_h(f,w_1)$ be the hypothesized compatible $D_1$-spectral expansion of the functional on $W_2\otimes W_3$. Define $\widetilde\nu=\sum_h\eta_h\in\overline{S_{23}}$ and $$\langle f,K(w_1,t)\rangle=\langle t,\widetilde\nu(f,w_1)\rangle,\qquad t\in T_{23}.$$ The same finite-component reasoning as step 1.2 makes this a bilinear map to $\overline{W_4}$ with auxiliary grading and lower truncation. Its source order is $W_1\otimes T_{23}$, so the outer insertion will be $c$, not $b$. [given, F1, F2, F3, step 1.2, algebra]

3.1 Put $$\Delta_{12}=x_0^{-1}\delta((x_1-z_2)/x_0),\quad\Delta_{21}=x_0^{-1}\delta((z_2-x_1)/(-x_0)),\quad\Delta_{20}=z_2^{-1}\delta((x_1-x_0)/z_2).$$ By step 1.1, all scalar projection sums needed for F4 are absolutely convergent for the fixed modified inputs. Apply F4's full product Ward identity at positions $z_0+uz_2,uz_2$ to the current $u^{L(0)}v$ at coordinate $ux_1$ and relative coordinate $ux_0$. Conjugation of the exterior fields moves $u^{\pm L(0)}$ to the arguments of $H_s$ and cancels the common delta factor $u^{-1}$. It gives $$\Delta_{12}H_s(Y_{W_4'}^o(v,x_1)f,w_3)-\Delta_{21}H_s(f,Y_{W_3}(v,x_1)w_3)=\Delta_{20}Y_{P(z_0)}^{\prime o}(u^{L(0)}v,ux_0)H_s(f,w_3).$$ For homogeneous $v$ of weight $d$, the coefficient with opposite-mode index $m$ on the right has factor $u^{d-m-1}$. The opposite mode shifts the $S$-weight by $m+1-d$, so after reindexing its input spectral weight $a$ to its output weight $h=a+m+1-d$ this factor times $e^{-sa}$ is exactly $e^{-sh}$. The nilpotent factors are those of $e^{-sD}$ on the output. Hence this is precisely the weak exponential expansion of $\Delta_{20}e^{-sD}Y_S^o(v,x_0)\widetilde\mu$, provided the ensuing coefficient sums can be interchanged. [F2, F4, F5, step 2.1, algebra]

3.2 The actual reverse scaling germ is $$H_s^{(1)}(f,w_1)(w_2,w_3)=G_{uc-b,b}(u^{-L(0)'}f;u^{L(0)}w_1,w_2,w_3),\qquad u=e^s.$$ Differentiate its positions and exterior vectors. The iterate derivative identities are $\partial_aG=G(L(-1)w_1,w_2,w_3)$ and $\partial_bG-\partial_aG=G(w_1,L(-1)w_2,w_3)$, the second following from the translation bracket at the inner vertex. Inserting the full $L(0)$ bracket cancels the exterior $w_1$ weight and all position derivatives except $-b(\partial_b-\partial_a)$, leaving $-L(0)$ on $w_2,w_3$. Thus $$\partial_sH_s^{(1)}=-D_1H_s^{(1)},\quad(D_1\nu)(w_2,w_3)=\nu((L(0)+bL(-1))w_2,w_3)+\nu(w_2,L(0)w_3).$$ Normality and Taylor uniqueness from F3, exactly with these displayed coordinates, prove $H_s^{(1)}=\sum_he^{-sD_1}\eta_h=e^{-sD_1}\widetilde\nu$. No interchange of the fixed first input with a completed tensor argument has been assumed. [F2, F3, F5, step 2.1, step 2.2, algebra]

4.1 Here is the required absolute justification. In F4's opposite-mode formula only the fixed finite input family $w_1,v_0w_1,\ldots,v_Kw_1$ occurs; its remaining first term has a single $v_mw_2$ for each fixed mode coefficient. The nonalgebraic convolution comes from $$z_2^{-1}\delta((x_1-x_0)/z_2)\,z_0^{-1}\delta((x_0-x_2)/z_0).$$ Its coefficients are the Taylor coefficients for composing the translations $x_1=x_0+z_2$, $x_0=x_2+z_0$. For an integer power $a$, expansion of $(z_2+z_0+x_2)^a$ at $x_2=0$ is obtained by expanding first in $z_0/z_2$; every fixed coefficient is a finite combination of series $\sum_{r\geq0}\binom{b+r}{r}r^q(z_0/z_2)^r$, with integers $b$ and $q\geq0$. Negative fixed $b$ either gives a terminating sequence or the same polynomial bound. Thus each such coefficient is absolutely bounded by $C\sum_{r\geq0}(1+r)^M|z_0/z_2|^r$. This also proves the delta fusion identity by the ordinary binomial formula. At scale $u$ the ratio is $|z_0/(uz_2)|$, uniformly smaller than one after shrinking $s$. The alternative fused-delta expansion also uses $|uz_2/(z_0+uz_2)|<1$, which holds after shrinking by the given $|z_1|>|z_2|$; both overlap inequalities are retained. F3 bounds the spectral absolute sums and all their derivatives on that same smaller neighborhood for the finitely many exterior/input states involved in a fixed coefficient. Their product with the displayed geometric-polynomial majorant is summable. Tonelli's elementary finite-subsum criterion therefore permits every reindexing, delta convolution and interchange in step 3.1. The $v_mw_2$ part involves only the single spectral sum at each monomial and is already normally convergent by F3. [F3, F4, step 2.1, step 3.1, algebra]

5.1 Apply F3 uniqueness to the coefficientwise normally convergent exponential-polynomial expansions in step 3.1. For each $h$ the result is $$\Delta_{12}\lambda_h(Y_{W_4'}^o(v,x_1)f,w_3)-\Delta_{21}\lambda_h(f,Y_{W_3}(v,x_1)w_3)=\Delta_{20}\pi_h(Y_S^o(v,x_0)\widetilde\mu(f,w_3)).$$ The logarithmic coefficients agree as well. Pair this with $t\in T$ and use F1's component spanning, or simply sum its finitely many nonzero weight pairings. By strong duality, $Y_S^o$ transposes to $Y_T$. The displayed equation becomes exactly $P(z_2)$-Jacobi for $J$. All products on its left are the prescribed formal delta expansions; its right now has the target-module truncation required by F5. Thus this is the full Jacobi identity, not just a residue or a commutator. [F1, F2, F3, F5, step 1.2, step 3.1, step 4.1, algebra]

5.2 Define $\Gamma_{12}=x_0^{-1}\delta((x_1-c)/x_0)$, $\Gamma_{21}=x_0^{-1}\delta((c-x_1)/(-x_0))$, and $\Gamma_{20}=c^{-1}\delta((x_1-x_0)/c)$. Apply the full iterate Ward identity to its outer insertion $uc$, with the same scaled current $u^{L(0)}v$ at $ux_1,ux_0$. Group the remaining current action at the pair $W_2,W_3$, whose separation is the fixed $b$. After exterior conjugation and cancellation of $u^{-1}$ this gives $$\Gamma_{12}H_s^{(1)}(Y_{W_4'}^o(v,x_1)f,w_1)-\Gamma_{21}Y_{P(b)}^{\prime o}(u^{L(0)}v,ux_1)H_s^{(1)}(f,w_1)=\Gamma_{20}H_s^{(1)}(f,Y_{W_1}(v,x_0)w_1).$$ Here the middle field is explicitly the two-point formula in F4 for the pair $W_2,W_3$ at $b$. Its finite-family term involves $v_kw_2$, $k\geq0$, and its delta convolution is controlled by $|b/(uc)|<1$. The other fused expansion uses $|(uc-b)/(uc)|<1$; both hold on the stated overlap and persist for small $s$. The binomial Taylor proof in step 4.1, now with $(z_0,z_2,z_1)$ replaced by $(b,uc,uc-b)$ in its two translation steps, bounds the nonalgebraic coefficients by $C\sum_{r\geq0}(1+r)^M|b/(uc)|^r$ times normally convergent spectral sums over the finite state family. For the direct field on $w_3$, each fixed delta monomial involves only modes bounded below, hence finitely many modes by input truncation. This proves all required absolute exchanges. The weight shift of its opposite mode $m$ is again $m+1-d$, and its $u$-factor $u^{d-m-1}$ again converts input weight $a$ to output weight $h=a+m+1-d$. Thus the middle term is the expansion of $\Gamma_{21}e^{-sD_1}Y_{S_{23}}^o(v,x_1)\widetilde\nu$. [F2, F3, F4, F5, step 4.1, step 3.2, algebra]

6.1 The three additional Möbius brackets also hold. Apply the full product's $L(j)$ bracket before the extraction above, $j=-1,0,1$. Its finite coefficients are the polynomials $1,z,z^2$ in the insertion positions. Group the leaf-one and leaf-two terms around the root at $z_2$ by the elementary identities $z_1=z_2+z_0$ and $z_1^2=z_2^2+2z_2z_0+z_0^2$. The inner grouped terms are exactly the transpose of the binary $P(z_0)$ bracket on $T$, since its three transported operators in F2 use those same binomial coefficients. After spectral extraction their remaining exterior identity is $$L_{W_4}(j)J(t,w_3)=J(t,L_{W_3}(j)w_3)+\sum_{i=0}^{j+1}\binom{j+1}{i}z_2^iJ(L_T(j-i)t,w_3).$$ All sums here are finite, so uniqueness applies without a delta estimate. This proof applies in the Möbius case as well as the conformal case; no nonexistent Möbius conformal vector is used. Together with steps 1.1 and4.1 this verifies every $P(z_2)$-map axiom in F5. [F2, F3, F5, step 1.2, step 5.1, algebra]

7.1 Pairing the iterate with $f$ gives $\sum_h\lambda_h(f,w_3)(w_1,w_2)$ by construction, which converges absolutely to the original product. This proves the factorization with the prescribed branches. If another $P(z_2)$-map gives that factorization, apply $e^{sD}$ to its inner coefficient expansion; the $L(0)$ and derivative identities give the same germ $H_s$ as in step 2.1. F3 uniqueness identifies all its components with $\lambda_h$. Since the universal inner map's homogeneous components span $T$ by F1, equality holds on every $t,w_3$. Naturality follows from the same pairing construction, uniqueness and the fact that strong-module morphisms commute with all weight projections and the reconstructed intertwiners. [F1, F2, F3, F4, F5, step 2.1, step 5.1, step 6.1, algebra]

7.2 Uniqueness from F3 now gives, for every $h$, $$\Gamma_{12}\eta_h(Y_{W_4'}^o(v,x_1)f,w_1)-\Gamma_{21}\pi_h(Y_{S_{23}}^o(v,x_1)\widetilde\nu(f,w_1))=\Gamma_{20}\eta_h(f,Y_{W_1}(v,x_0)w_1).$$ Pair with actual $t\in T_{23}$ and transpose by F2. This is precisely $P(c)$-Jacobi for $K$ in its correct input order. The Möbius identities follow by the finite polynomial grouping $c=a+b$ at the outer insertion, with the pair at positions $b,0$: the powers $1,b,b^2$ combine into the transported pair's three operators, and the exterior coefficients are $1,c,c^2$. The result is $L_4(j)K(w_1,t)=K(w_1,L_{T_{23}}(j)t)+\sum_i\binom{j+1}{i}c^iK(L_1(j-i)w_1,t)$. Together with step 2.2 this proves that $K$ is a $P(c)$-map in both Möbius and conformal cases. [F1, F2, F3, F5, step 6.1, step 2.2, step 5.2, algebra]

8.1 The product of $K$ and the universal $P(b)$-map has scalar pairing $\sum_h\eta_h$, hence equals the original iterate absolutely and with its chosen branches. The same reverse scaling in step 3.2 and uniqueness in F3 identify every component of any competing factorization with $\eta_h$; F1's binary spanning proves equality of the maps on all $w_1,t$. This proves the reverse factorization and its naturality, completing both directions. [F1, F3, step 7.1, step 3.2, step 7.2, algebra] ∎
