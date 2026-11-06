---
id: lem-gts-nef-big-cy-threefold-semiampleness
kind: lemma
title: Semiampleness of nef big line bundles on projective K trivial threefolds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-principalization-of-ideals
- thm-resolution-of-singularities-in-characteristic-zero
- thm-serre-vanishing
- thm-hilbert-polynomial-degree-support-dimension
- thm-serre-criterion-ampleness
- thm-riemann-roch-for-smooth-projective-surfaces
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- lem-gts-curve-nef-ample-perturbation-by-nakai-construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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
  - title: Fujino, Fundamental theorems for the log minimal model program
    url: https://arxiv.org/abs/0909.4445
    locator: 'arXiv:0909.4445v3, §§12–13 printed pp. 34–40: Theorems 12.1 and 13.1, Lemmas 12.2–12.3 and 13.2, and
      their proofs. This is nonvanishing/base-point-free context, not an imported local proof.'
dependency_level: 2
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-resolution-of-singularities-in-characteristic-zero: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
---

## Statement

Assume AC. Let X be a smooth complex projective threefold whose canonical line bundle is trivial. Let L be a Cartier divisor with nonnegative degree on every integral curve, and suppose L is big. Then some positive integral multiple of L is globally generated.

No vanishing of $H^{1}(X,O_X)$ or $H^{2}(X,O_X)$, finite generation of a section ring, existence of a contraction, or nontriviality of L on every curve is assumed.

## Facts & Assumptions

**Given:** X and L as in the Statement.

[F1] The attached [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] proves: on a smooth projective variety, if Gamma is effective SNC with coefficients $<1$ and M−K−Gamma is ample rational, then $H^{q}(M)=0$ for $q>0$. It also exposes the nef+big adjoint vanishing needed by contraction consumers. This proof uses the first, ample-SNC clause.

[F2] Smooth-center principalization and log resolution of a finite divisor/base-ideal configuration are available. [[thm-principalization-of-ideals]], [[thm-resolution-of-singularities-in-characteristic-zero]].

[F3] [[thm-serre-criterion-ampleness]] supplies eventual global generation of coherent ample twists, [[thm-serre-vanishing]] supplies higher-cohomology vanishing, and [[thm-hilbert-polynomial-degree-support-dimension]] bounds section growth for ample twists. The big decomposition is constructed in step 1.1.

[F4] Attached numerical bridge [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] proves curve-nef plus ample is ample by its Nakai/Serre construction; it also supplies invariance of ampleness under numerical equivalence. Its actual source Statement includes the numerical criterion, so this use is within the attached construction. Nef has its curve meaning throughout, and the bridge is not silently assumed to be its definition.

[F5] On a smooth projective surface S the coherent Euler polynomial is

    $\chi (S,O_S(A+mD))$ = $(D^{2}/2)m^{2}$
       + $D·(A−K_S/2)m$ + $\chi (S,O_S(A))$.

The actual supplier is [[thm-riemann-roch-for-smooth-projective-surfaces]]. Only this numerical Euler formula, Serre vanishing and the surface Hodge index are used; no basepoint-free theorem, nonvanishing theorem on lc centers, or subadjunction theorem is assumed. The actual [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] supplies exactly the consequence that D squared $\ge 0$ and $D·Q=0$ for ample Q force D numerically zero; its public Statement was read and imposes no vanishing premise.

[F6] Full AC is retained from the geometric and Hilbert suppliers. [[def-axiom-of-choice]].

## Proof

1.1 Use the growth definition of bigness: limsup h⁰(X,rL)/r³>0. Choose a fixed very ample Cartier H. On H choose an ample Cartier B such that B−L|H has a section nonvanishing on every associated component, by the ample global-generation criterion F3. Its r-th power embeds $O_H(rL)$ into $O_H(rB)$, so the Hilbert-polynomial supplier and Serre vanishing give h⁰(H,rL|H)=O(r²). For arbitrarily large r the cubic growth of h⁰(X,rL) exceeds that bound. The divisor restriction sequence then gives a nonzero section of rL−H, hence an effective G with rL linearly equivalent to H+G. This is the needed decomposition, proved without semiampleness or an unstated stronger vanishing interface. Choose a sufficiently small positive rational eta so (X,B0), B0=eta G, is klt. To specify that terminology here, on a log resolution write $K_Y+B_{0,Y}=\pi *(K_X+B0)$; every coefficient of $B_{0,Y}$ is $<1$. The finitely many inequalities hold for small eta because $K_X$ is smooth and the relative canonical multiplicities of smooth-center blowups are nonnegative. We have B0 equivalent_Q eta rL−eta H, $aL−(K_X+B0)$ equivalent_Q (a−eta r)L+eta H, which is ample for $a\ge \eta $ r by [F4]. All choices are rational. [F1, F2, F3, F4, given, construct]

2.1 The closed base sets of |k! L| decrease and therefore stabilize, by noetherianity. Bigness ensures nonempty linear series for sufficiently divisible degrees. Choose m0 so the stable base locus B equals Bs|m0L|. For every positive multiple of m0 its base locus is then exactly B: it is contained in Bs|m0L| by products of sections, and contains the stable base locus by definition. If B is empty the conclusion already holds. Assume B nonempty. [F3, step 1.1, construct]

3.1 Resolve the base ideal of |m0L| together with G. Denote the fixed divisor on this resolution by F, so pi*|m0L|=|M|+F with |M| free and F effective. Choose a very large integer N and general members D1,...,DN of |m0L|, and put $D=(D1+...+DN)/N$. Their strict moving transforms are smooth and meet each other and the fixed SNC support transversely, after a further smooth-center log resolution if needed. For a divisor E in the fixed/exceptional support with pi(E) in B, put $b_E=\operatorname{coeff}_E(B_{0,Y})<1$ and $f_E=\operatorname{ord}_E(F)>0$. The finite minimum $c0=\min _{f_E>0}(1−b_E)/f_E$ is positive. Choose N so large that $c0/N<1$ and all intersections outside B remain klt: there the only new components are general transverse moving divisors of coefficients c/N, and the fixed boundary is already klt. Hence the first coefficient reaching one in $B_Y(c)=\pi *(B0+cD)−(K_Y−\pi *K_X)$ occurs at $c=c0$ on a divisor whose center lies in B. This is a finite coefficient calculation on the chosen SNC resolution, not an assumption of lc-center nonvanishing. [F2, step 1.1, step 2.1, construct]

4.1 We break ties while making the adjoint difference ample even on exceptional fibres. For a smooth-center blowup its negative exceptional divisor is relatively ample. Inducting through the composition, with sufficiently large integer weights on the pulled-back earlier divisors, gives an effective exceptional Q-divisor P0 with −P0 pi-ample. Add arbitrarily small positive rational independent coefficients on the finitely many other SNC components and perturb the exceptional coefficients slightly. Relative ampleness is open, so a resulting effective Q-divisor P can be chosen with −P pi-ample and generic coefficient ratios on the finitely many candidate components. If pi is an isomorphism, the relative ampleness condition is vacuous and one simply uses generic positive coefficients on those components. For small rational $\delta >0$ the adjusted threshold $c_\delta =\min _{f_E>0} [1−b_E−\delta  \operatorname{coeff}_E(P)]/f_E$ is positive, close to c0, and is attained on a UNIQUE component E. Coefficients with $f_E=0$ stay $<1$ after taking delta small. The moving components outside B also stay $<1$ by the choice of N and smallness of delta. Thus $\Delta _Y=B_Y(c_\delta )+\delta $ P has exactly one coefficient equal to one, that of a smooth divisor E with pi(E) contained in B; all other coefficients are $<1$. Strict nonexceptional coefficients are nonnegative. Negative coefficients, if any, occur only on exceptional divisors. Set $A=\operatorname{ceil}(−\Delta _Y^{<1})$, Gamma={Delta_Y}. Then A is an effective integral exceptional divisor not containing E, Gamma is effective SNC with coefficients $<1$ not containing E, and Delta_Y=E+Gamma−A. After possibly decreasing delta, eta pi*H−delta P is ample on Y. Indeed −P is relatively ample; tensor a relatively very ample power with a sufficiently high pullback of H, use its relative projective embedding and Serre's criterion, and divide by the power. This is an ordinary ample-bundle construction, not the sought nef contraction. [F2, F3, step 1.1, step 3.1, construct]

5.1 Write $L_Y=\pi *L$. It is curve-nef. For every sufficiently large integer m, and $M_m=mL_Y+A$, calculation gives $M_m−E−K_Y−\Gamma  =mL_Y−(K_Y+\Delta _Y)$ equivalent_Q $(m-c_\delta m0-\eta r)L_Y+\eta\pi^*H-\delta P$. The right side is ample by [F4] and step4.1. Apply the ample-SNC vanishing [F1] to the integral line bundle $M_m−E$ on Y. It gives $H^{1}(Y,M_m−E)=0$, hence a SURJECTIVE restriction $H0(Y,M_m)$ -> $H0(E,M_m|E)$. Adjunction on the smooth divisor E, and the same equality restricted to E, show $M_m|E−K_E−\Gamma |E$ is ample. The SNC property makes Gamma|E an effective SNC fractional boundary with coefficients $<1$. Therefore [F1] also gives $H^{q}(E,M_m|E)=0$ for all $q>0$ and all such m. [F1, F4, step 4.1, algebra]

6.1 We prove $H0(E,M_m|E)$ is nonzero for all sufficiently large m by an explicit surface calculation. Put $D_E=L_Y|E$ and $A_E=A|E$. The latter is effective (the divisor A does not contain E). Choose one large integer a such that $Q=A_E+aD_E−K_E−\Gamma |E$ is ample. Since $D_E$ is nef, its square is nonnegative, either by the attached numerical bridge and taking ample limits or by surface Hodge index. Use the Euler polynomial [F5]. If $D_E^{2}>0$ its leading term is positive. If $D_E^{2}=0$ but $D_E$ is not numerically zero, its linear coefficient satisfies $D_E·(A_E−K_E/2)$ = $(1/2)D_E·[A_E+(A_E−K_E−\Gamma |E)+\Gamma |E]$ = $(1/2)D_E·[A_E+Q+\Gamma |E]$ >0. Here subtracting aD_E does not change the product because $D_E^{2}=0$. The effective divisors contribute nonnegative intersections. The ample Q contributes strictly positively: if $D_E·Q=0$, Hodge index and $D_E^{2}\ge 0$ force $D_E$ numerically zero. Thus $\chi (M_m|E)>0$ for m large in these two cases, and the higher-cohomology vanishing in step5.1 makes h0 equal to it. If $D_E$ is numerically zero, $A_E−K_E−\Gamma |E$ is itself ample because it is numerically equivalent to Q. The vanishing [F1] applies already to $A_E$, so $\chi (A_E)=h0(A_E)>0$: the canonical section of the effective divisor $A_E$ is nonzero, including $A_E=0$. The Euler polynomial is constant in m, hence again $h0(M_m|E)=\chi (A_E)>0$ for every sufficiently large m. This covers numerical dimensions two, one and zero without a general lc-center or abundance theorem. [F1, F4, F5, step 5.1, algebra]

7.1 Since A is effective exceptional over the smooth, hence normal, X, $\pi *O_Y(A)=O_X$. A rational function regular off the exceptional image has no pole on any codimension-one point of X and is regular by normality. The projection formula therefore identifies H0(Y,mL_Y+A)=H0(X,mL). Choose m sufficiently large AND divisible by m0. Every section of mL vanishes on B, and hence its pullback vanishes along E, since pi(E) is contained in B. Multiplication by the canonical section of A does not remove that vanishing, because E is not a component of A. Thus every section on the left restricts to zero on E. This contradicts the surjectivity in step5.1 and the nonzero target in step6.1. Therefore B was empty. Some multiple of L is globally generated. [F2, step 2.1, step 4.1, step 5.1, step 6.1, algebra] ∎
