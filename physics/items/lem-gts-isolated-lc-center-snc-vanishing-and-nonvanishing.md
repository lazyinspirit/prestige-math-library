---
id: lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
kind: lemma
title: Isolated lc-centre SNC vanishing and polynomial nonvanishing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- lem-gts-curve-nef-ample-perturbation-by-nakai-construction
- thm-principalization-of-ideals
- thm-proper-pushforward-coherent
- thm-leray-spectral-sequence-for-sheaf-cohomology
- thm-serre-vanishing
- thm-serre-criterion-ampleness
- thm-hilbert-polynomial-coherent-sheaf
- thm-hilbert-polynomial-degree-support-dimension
- thm-normal-functions-codimension-one-intersection
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, Lemma 5.1
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 5.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing.md
dependency_level: 2
dependency_roles:
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  thm-leray-spectral-sequence-for-sheaf-cohomology: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-hilbert-polynomial-coherent-sheaf: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-normal-functions-codimension-one-intersection: mathematical-premise
  def-axiom-of-choice: mathematical-premise
---

## Statement

Assume AC. Let X be a connected complex projective n-fold, where either X is smooth and $n\ge 3$, or $n=3$ and X is normal Gorenstein terminal with isolated singularities; let A be ample Cartier with $-K_X$ numerically equivalent to rA for a rational $r\ge n-2$. Let G be an effective rational divisor numerically equivalent to gamma A. Let $\mu :Y\to X$ be a projective log resolution with $K_Y+B=\mu^*(K_X+G)$, SNC support, and every coefficient of B at most one. Assume the chosen resolution admits an effective exceptional rational divisor T with -T relatively ample and SNC support contained in its boundary; finite compositions of blowups in codimension-at-least-two centres with their effective tautological exceptional divisors have this property by the explicit construction below. In the smooth case one may take the usual smooth-center blowup resolution. Assume the union of the centres of the coefficient-one divisors is exactly a reduced irreducible subvariety Z. Put $D=\operatorname{ceil}(-B)$. Then $\mu_*O_Y(D)=I_Z$ and $R^q$ $\mu_*O_Y(D)=0$ for $q>0$. For every integer t with $t+r-\gamma >0$, $H^q(X,I_Z(tA))=0$ for $q>0$. In particular $H^0(X,A)\to H^0(Z,A|Z)$ is onto when $1+r-\gamma >0$. If $\gamma <codim_X(Z)-1$, then $h0(Z,A|Z)>0$ and some section of A is not identically zero on Z.

Here rational numerical equivalence is tested by intersection against all curves. A coefficient-one divisor means a prime component of B with coefficient exactly one; the stated reduced-centre hypothesis specifies the needed lc interface without silently importing lc-centre normality, unique-place extraction or subadjunction.

## Statement references

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]

[[thm-principalization-of-ideals]]

[[thm-proper-pushforward-coherent]]

[[thm-leray-spectral-sequence-for-sheaf-cohomology]]

[[thm-serre-vanishing]]

[[thm-hilbert-polynomial-coherent-sheaf]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[thm-normal-functions-codimension-one-intersection]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Exactly the Statement data, including the specified log resolution, exceptional relative-ample divisor and reduced-centre hypothesis. AC is retained from the actual mathematical suppliers.

[F1] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] supplies smooth SNC adjoint vanishing. [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] supplies the numerical ampleness criterion. The relative exceptional perturbation needed to use the SNC theorem is constructed explicitly below; no Nadel vanishing theorem is a premise.

[F2] [[thm-proper-pushforward-coherent]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[thm-serre-vanishing]] supply the coherent higher images, Leray spectral sequence, and large-ample-twist vanishing. [[thm-serre-criterion-ampleness]] separately supplies eventual global generation of coherent ample twists. [[thm-normal-functions-codimension-one-intersection]] supplies extension of functions without codimension-one poles on normal X. [[thm-principalization-of-ideals]] supplies the smooth-center blowup convention where used, and [[def-axiom-of-choice]] retains supplier choice assumptions.

[F3] [[thm-hilbert-polynomial-coherent-sheaf]] and [[thm-hilbert-polynomial-degree-support-dimension]] apply to a fixed closed projective embedding and its very ample $\mathcal O(1)$: for every coherent sheaf they give an Euler polynomial valid at all integer twists, of degree equal to its support dimension. They do not directly assert polynomiality for an arbitrary ample line bundle. Steps 2.1–3.1 prove that extension for $L=\mathcal O_X(A)|_Z$ using two consecutive very ample powers and finite differences; step 4.1 also proves the negative-power assertion needed for the roots.

## Proof

1.1 Use the given log resolution and $D=\operatorname{ceil}(-B)$. The lc condition says that every coefficient of B is at most one; negative coefficients occur only on exceptional divisors because G is effective. Therefore $D=P-E$, with P effective exceptional and E the reduced sum of the coefficient-one divisors. For a regular function f downstairs, its pullback is regular on Y. Membership in $\mu_*O_Y(D)$ imposes exactly $ord_F(f)\ge 1$ for each component F of E and no further condition: the positive exceptional allowance P does not enlarge the ring of regular functions on the normal X. The valuation inequality $ord_F(f)\ge 1$ is equivalent to f vanishing identically on its centre. Since the union of these centres is precisely the reduced Z, this proves [given, F1, F2, F3, construct, algebra]

1.2 $\mu_*O_Y(D)=I_Z$. [given, F1, F2, F3, construct, algebra]

1.3 This is the ideal of the reduced centre, not an unexplained multiplier-ideal identification. [given, F1, F2, F3, construct, algebra]

1.4 Here is the needed vanishing from the actual smooth SNC adjoint supplier. Put $F=B+\operatorname{ceil}(-B)$, so $0\le \operatorname{coeff}(F)<1$ and F is SNC, and observe [given, F1, F2, F3, construct, algebra]

1.5 $D+\mu^*(tA)=K_Y+F+\mu^*(tA-K_X-G)$, whose last term is numerically equivalent to (t+r-gamma)mu*A. [given, F1, F2, F3, construct, algebra]

1.6 If $t+r-\gamma >0$, the last pullback has the class of a positive multiple of an ample divisor. Use the assumed effective exceptional rational divisor T with -T relatively ample. For the specified blowup models it is constructed inductively: a blowup has relatively ample negative tautological exceptional divisor, and at each later blowup a sufficiently large multiple of the previous choice plus the new exceptional divisor retains relative ampleness. This construction only requires effective exceptional Cartier tautological divisors, not smoothness of intermediate bases. For small rational $\epsilon >0$, $\mu^*(tA-K_X-G)-\epsilon$ T is ample on Y. Increase the SNC boundary from F to F+epsilon T; all its coefficients remain below one. The line bundle on the left has not changed. The SNC adjoint vanishing supplier therefore gives [given, F1, F2, F3, construct, algebra]

1.7 $H^q(Y,O_Y(D+\mu^*(tA)))=0$, $q>0$. [given, F1, F2, F3, construct, algebra]

1.8 The same argument with t replaced by arbitrarily large integers proves relative vanishing $R^q$ $\mu_*O_Y(D)=0$ for $q>0$. Indeed twist the Leray spectral sequence by $O_X(mA)$; for large m Serre vanishing annihilates every positive cohomology of its finitely many coherent higher direct images. The spectral sequence degenerates to $H^q(Y,O(D+\mu^*mA))=H^0(X,R^q \mu_*O(D) \otimes O(mA))$. The left side vanishes and a nonzero coherent sheaf has nonzero H0 after a sufficiently high ample twist, so each higher image is zero. Consequently [given, F1, F2, F3, construct, algebra]

1.9 $H^q(X,I_Z(tA))=0$ whenever $q>0$ and $t+r-\gamma >0$. [given, F1, F2, F3, construct, algebra]

1.10 For the empty boundary put $D0=K_Y-\mu^*K_X$. It is effective exceptional: in the smooth case by the blowup Jacobians, and in the terminal Gorenstein case by the actual positive integral discrepancies. The same normal-function calculation gives $\mu_*O_Y(D0)=O_X$, and the same large-twist relative vanishing gives $R^q$ $\mu_*O_Y(D0)=0$ for $q>0$. Since $D0+\mu^*(tA)=K_Y+\mu^*(tA-K_X)$, whose adjoint difference is numerically equivalent to (t+r)mu*A, smooth SNC vanishing on Y with the exceptional perturbation gives $H^q(X,O_X(tA))=0$ for $q>0$ and $t+r>0$. No vanishing theorem on a singular X is inferred without this calculation. For the remaining nonvanishing assertion assume $\gamma <c-1$, where $z=\dim$ Z and $c=n-z$. Effectivity gives $\gamma \ge 0$, by intersecting G with a general complete-intersection curve from a very ample multiple of A. Thus for every integer $t\ge 1-z$, both vanishings apply: $t+r-\gamma \ge c-1-\gamma >0$ and $t+r\ge t+r-\gamma >0$. The restriction sequence gives $H^{>0}(Z,O_Z(tA))=0$ for that whole range, and $H^0(X,A)\to H^0(Z,A)$ is onto. [given, F1, F2, F3, construct, algebra]

2.1 Put $L=\mathcal O_X(A)|_Z$ and $z=\dim Z$. If $z=0$, the integral complex projective $Z$ is a point and $h^0(Z,L)=1$. Suppose $z\ge1$. We first construct the Euler polynomial for the ample $L$ without assuming it very ample. Fix a very ample line bundle $H$ on the projective $Z$. By F2, $H^{-1}\otimes L^d$ is globally generated for all sufficiently large integers $d$. Its generating sections define a morphism $j_d:Z\to\mathbb P^{N_d}$; the graph with the embedding $i_H:Z\hookrightarrow\mathbb P^N$ is a closed immersion into $\mathbb P^N\times\mathbb P^{N_d}$. The Segre map, whose coordinates are all products of the two coordinate systems, is a closed immersion: its image is cut out by the two-by-two minors, and the coordinate ratios recover both factors on each standard chart. The composite pulls back $\mathcal O(1)$ to $H\otimes(H^{-1}\otimes L^d)=L^d$. Hence choose $m\ge1$ with both $L^m$ and $L^{m+1}$ very ample. For $d=m,m+1$ and $0\le a<d$, F3 applied with this actual embedding and coherent sheaf $L^a$ gives a polynomial $q_{d,a}(k)=\chi(Z,L^{a+dk})$ for every $k\in\mathbb Z$, of degree $z$. Its leading coefficient is positive: Serre vanishing identifies its large values with nonnegative $h^0$, and its degree is exactly $z$. [F2, F3, step 1.10, construct, algebra]

3.1 Define $f:\mathbb Z\to\mathbb Z$ by $f(t)=\chi(Z,L^t)$ and let $T$ be the shift operator $(Tf)(t)=f(t+1)$. Each residue-class polynomial from step 2.1 has degree $z$, so $(T^m-1)^{z+1}f=0$ and $(T^{m+1}-1)^{z+1}f=0$ on all integers. The polynomials $u^m-1$ and $u^{m+1}-1$ have greatest common divisor $u-1$ (subtract $u(u^m-1)$ from $u^{m+1}-1$), and all their roots are simple in characteristic zero. Their $(z+1)$st powers therefore have greatest common divisor $(u-1)^{z+1}$. The Euclidean algorithm yields $U,V\in\mathbb Q[u]$ with $U(u)(u^m-1)^{z+1}+V(u)(u^{m+1}-1)^{z+1}=(u-1)^{z+1}$. Substitution $u=T$ proves $\Delta^{z+1}f=0$ for $\Delta=T-1$. Thus $f(t)$ equals the polynomial $p(t)=\sum_{j=0}^z(\Delta^j f)(0)\binom tj$ at every integer: this polynomial has the same first $z+1$ values, and the recurrence $\Delta^{z+1}f=0$ propagates equality both forward and backward. Since $p(mk)=q_{m,0}(k)$, its degree is exactly $z$ and its leading coefficient is positive. This proves the ample-twist extension required here, including negative twists, using only the stated fixed-embedding suppliers and algebra. [F3, step 2.1, algebra]

4.1 A nonzero section of $L^{-j}$, $j>0$, would give an injection $L^t\hookrightarrow L^{t-j}$ because $Z$ is integral. For large $t$, Serre vanishing would then give $p(t)=h^0(Z,L^t)\le h^0(Z,L^{t-j})=p(t-j)$, contradicting the positive leading coefficient and $z\ge1$. Hence negative powers have no sections. By step 1.10 their higher cohomology also vanishes for $t=-1,\ldots,-(z-1)$, so these integers are roots of $p$; moreover $p(0)=h^0(Z,\mathcal O_Z)\ge0$. Consequently $p(t)=\prod_{j=1}^{z-1}(t+j)(a t+b)$, with $a>0$ and $b=p(0)/(z-1)!\ge0$; for $z=1$ the product is $1$. Step 1.10 also gives $h^0(Z,L)=p(1)=z!(a+b)>0$. Its restriction surjectivity lifts a nonzero section to $X$, including the zero-dimensional case already handled. [F2, F3, step 1.10, step 2.1, step 3.1, algebra]

5.1 The strict bound $\gamma <c-1$ yields a section of A not identically zero on Z; it does not exclude the existence of Z. In particular, if one additionally assumes Z is contained in the base locus Bs|A| (the common zero set of all global sections of A), the conclusion is a contradiction. Under that additional base-locus assumption, $\gamma \le 1$ excludes $c\ge 3$, and $\gamma <1$ excludes $c=2$. Without it such centres may exist. The equality case $\gamma =1,c=2$ requires the separate curve/surface subadjunction–nonvanishing argument. Normality of Z was not required for this polynomial lemma. [given, F1, F2, F3, construct, algebra] ∎

## Remarks

Research candidate only. The adjacent source-reading record binds the actually retrieved full text. The companion research note gives a finite-resolution tie-breaking mechanism but no unique-lc-place extraction is asserted by this lemma. The bound $r\ge n-2$ retains at least the adjoint positivity used by the original coindex-three polynomial argument; no equality of the index is needed. The terminal threefold extension retains the explicit effective exceptional relative-ample resolution hypothesis; it is not applied to an arbitrary small resolution.
