---
id: lem-gts-curvette-extraction-and-effective-cyclic-different
kind: lemma
title: "Curvette extraction and the effective cyclic different on a sole surface lc place"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place
  - lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity
  - lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data
  - lem-gts-log-adjoint-vanishing-on-snc-pairs
  - thm-bertini-smooth-hyperplane-section
  - thm-ample-powers-very-ample-proper-base
  - thm-normalization-finite-birational-surjective
  - thm-regular-local-ring-is-normal
  - thm-completion-preserves-regular-local-rings
  - thm-serre-vanishing
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - lem-projection-formula-invertible-twist
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - def-embedding-dimension-and-regular-local-ring
  - thm-cohomology-and-base-change
  - thm-generic-smoothness-characteristic-zero
  - thm-generic-flatness-morphisms
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - lem-gts-curve-nef-ample-perturbation-by-nakai-construction
  - thm-serre-criterion-ampleness
  - thm-proper-pushforward-coherent
  - def-axiom-of-choice
dependency_roles:
  lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place: mathematical-premise
  lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity: mathematical-premise
  lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  thm-normalization-finite-birational-surjective: mathematical-premise
  thm-regular-local-ring-is-normal: mathematical-premise
  thm-completion-preserves-regular-local-rings: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-leray-spectral-sequence-for-sheaf-cohomology: mathematical-premise
  lem-projection-formula-invertible-twist: mathematical-premise
  lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  def-embedding-dimension-and-regular-local-ring: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  thm-generic-smoothness-characteristic-zero: mathematical-premise
  thm-generic-flatness-morphisms: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Kawamata, Subadjunction of Log Canonical Divisors for a Subvariety of Codimension 2, v1 proof of Theorem
      1; transverse positivity constructed below
    url: https://arxiv.org/pdf/alg-geom/9511015v1
    locator: 'arXiv:alg-geom/9511015v1, complete printed pp. 1–7 read: Theorem 1; §1 Lemmas 2–3, Theorems 4 and
      6; proof of Theorem 1 p. 6. The affine klt replacement is not imported projectively.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-curvette-extraction-and-effective-cyclic-different.md
dependency_level: 4
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. Let U be a smooth integral projective complex surface, p a closed point, and $π:Y→U$ a finite sequence of point blowups above p. Let G be an effective rational divisor with $K_U+G$ rational Cartier. Assume (U,G) is log canonical and E is its SOLE lc place, a smooth exceptional curve on Y. Require the log pullback boundary on Y and the full exceptional divisor to be SNC. Sole lc place means every other divisorial valuation has strictly positive log discrepancy.

Then, on a projective normal surface Z over U, one can contract precisely the exceptional curves other than E, with E mapping isomorphically onto a smooth curve $E_Z≅P^{1}$. The divisor $E_Z$ is rational Cartier, and the induced effective crepant pair $(Z,E_Z+B_Z)$ has strictly positive exceptional log discrepancies (the plt condition). There is an effective rational different $D_E$ on $E_Z$ with all coefficients strictly below one such that $(K_Z+E_Z+B_Z)|E_Z∼_Q K_{E_Z}+D_E$. Its coefficient at a point with cyclic stabilizer order r is $(r−1+\sum b_l n_l)/r$, where $b_l≥0$ are the effective remaining boundary coefficients on the constructed smooth cyclic local cover and $n_l$ are their intersection multiplicities with the lifted curve.

The same conclusion holds simultaneously at finitely many disjoint points with one lc place over each, retaining all those curves. The restriction of the original log boundary to E has the same different under compatible crepant residue choices. Moreover, for a fixed finite smooth-centre blowup log resolution of a smooth complex projective n-fold with sole lc place E over a codimension-two centre W and the actual residue-pushforward hypotheses, every horizontal coefficient of F|E is nonnegative and strictly below one. The same holds for the normal projective Gorenstein terminal threefold with isolated singularities and supplied exceptional ample-divisor model when its resolution over $X_{\mathrm{reg}}$ is a finite smooth-centre blowup sequence. Here horizontal means its divisor dominates W. The projective transverse surfaces giving this conclusion are constructed in the proof.

## Statement references

[[lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place]]

[[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]]

[[lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data]]

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[thm-bertini-smooth-hyperplane-section]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-normalization-finite-birational-surjective]]

[[thm-regular-local-ring-is-normal]]

[[thm-completion-preserves-regular-local-rings]]

[[thm-serre-vanishing]]

[[thm-leray-spectral-sequence-for-sheaf-cohomology]]

[[lem-projection-formula-invertible-twist]]

[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[[def-embedding-dimension-and-regular-local-ring]]

[[thm-cohomology-and-base-change]]

[[thm-generic-smoothness-characteristic-zero]]

[[thm-generic-flatness-morphisms]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] The projective transverse surface, point-blowup model, effective pair and actual unique lc place are hypotheses. The ambient horizontal conclusion requires the actual fixed finite blowup log resolution and the unique-place residue interface; its closed projective transverse surfaces are constructed below. Choice is inherited through the cited projective and cohomological interfaces.

[F1] The exact suppliers are [[lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place]], [[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]], [[lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data]], [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[thm-bertini-smooth-hyperplane-section]], [[thm-ample-powers-very-ample-proper-base]], [[thm-normalization-finite-birational-surjective]], [[thm-regular-local-ring-is-normal]], [[thm-completion-preserves-regular-local-rings]], [[thm-serre-vanishing]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[lem-projection-formula-invertible-twist]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[def-embedding-dimension-and-regular-local-ring]], [[thm-cohomology-and-base-change]], [[thm-generic-smoothness-characteristic-zero]], [[thm-generic-flatness-morphisms]], [[def-axiom-of-choice]]. [[thm-hodge-index-theorem-for-smooth-projective-surfaces]], [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] and [[thm-serre-criterion-ampleness]] are used in the explicit exceptional perturbation constructed in step 14.1. [[thm-proper-pushforward-coherent]] gives coherent higher direct images for its Leray argument. The residue normality argument is extended here to normal projective plt surfaces using that perturbation and the actual projective SNC vanishing theorem. No affine vanishing extension, surface contraction/classification theorem or approximation theorem is imported.

## Proof

**Given:** Exactly the Statement data. Local shrinkings in the curvette construction are globalized by its finite-support ideal before projective vanishing is used.

1.1 List all exceptional curves $E_i$. Their intersection matrix Q is integrally congruent to −I: in the basis of total transforms of the successively created exceptional curves, each new blowup adds an orthogonal class of square −1, and the change from total transforms to strict transforms is triangular integral with diagonal one. In particular Q is negative definite and unimodular. Its off-diagonal entries are nonnegative. The inverse of −Q has nonnegative entries by the positive-definite M-matrix minimization argument used in the nonvanishing packet. In the connected exceptional tree these entries in a fixed column are positive: if a zero entry occurred in the nonnegative solution of $(−Q)x=e_E$, its row would force all its neighbours zero, propagating to the E row, a contradiction. [given, A1, F1, algebra]

2.1 Consequently $D=\sum d_i E_i$ with coefficient vector $d=−Q^{-1}e_E$ is an effective integral exceptional cycle, and $D E=−1,     D E_i=0$ for $E_i≠E$. [given, A1, F1, step 1.1, algebra]

3.1 This integrality uses the ACTUAL complete point-blowup matrix over a smooth point; it is not asserted for a resolution of an arbitrary singular point. [given, A1, F1, step 2.1, algebra]

4.1 Choose two distinct smooth points $q_1,q_2$ of E away from all other exceptional components. At each q choose a formal smooth curve transverse to E. Blow it down through the finite sequence. Its image is an irreducible formal plane branch in the completed regular local ring k[[x,y]] of U at p. One can produce its equation directly. Choose a base coordinate x nonconstant on the branch and reparameterize its formal parameter u so $x=u^a$: the required a-th root of a unit exists recursively in characteristic zero. Write the other coordinate as $y=y(u)$. The product $h_{hat}(x,y)=\prod _{ζ^a=1}(y−y(ζu))$ lies in k[[x]][y]. The parametrization is primitive, since the blowdown is an isomorphism off the exceptional divisor, so this product is its minimal polynomial. Its coefficients below the leading y term have positive x order. Repeated substitution of its leading y power, with x-adic convergence, divides every element of k[[x,y]] by $h_{hat}$ with remainder of y degree below a; the minimal-polynomial property makes a vanishing remainder zero. Thus its kernel ideal is exactly $(h_{hat})$, without invoking a factoriality or approximation theorem. Its actual formal total transform is $D+C_{hat}$: the strict transform meets E once transversely at q and no other exceptional curve, so intersection with $E_i$ gives $Qd=−e_E$ and identifies its exceptional cycle with D. [given, A1, F1, step 3.1, algebra]

5.1 Let $Z_0$ be the total transform of the FIRST exceptional divisor. The pullback of the maximal ideal $m_p$ is $O_Y(−Z_0)$, and $Z_0$ has positive coefficient on every $E_i$. Choose N so large that $NZ_0−D$ has coefficient at least one on every exceptional component. Choose h in the ordinary local ring $O_{U,p}$ with $h−h_{hat}∈m_p^N$; this is just surjectivity onto the finite jet quotient, not Artin approximation. After dividing the pullback by the canonical section of D, the difference vanishes on the whole reduced exceptional fibre. Thus h and $h_{hat}$ have the same residual restriction there: it is nonzero everywhere except at q, where it has a simple zero on E. The algebraic residual curve is therefore smooth and transverse at q, meets no other point of the exceptional fibre, and the exceptional multiplicities remain exactly D. Shrink U to make h regular and retain these assertions. Applying this at $q_1,q_2$ gives ordinary functions f,g with $div_Y(f)=D+C_f,     div_Y(g)=D+C_g$, [given, A1, F1, step 4.1, algebra]

6.1 where $C_f$ and $C_g$ meet the exceptional fibre only at $q_1$ and $q_2$ respectively. [given, A1, F1, step 5.1, algebra]

7.1 The closed intersection $C_f∩C_g$ is disjoint from the exceptional fibre. Properness of π makes its image closed, so after a further shrinking of U the residual curves are disjoint everywhere. Hence f,g generate the invertible sheaf $O_Y(−D)$ on this neighbourhood. [given, A1, F1, step 6.1, algebra]

8.1 The two sections define $(π,[f:g]):Y→U×P^{1}$. Take its projective image $Z_0$ and its normalization Z. Normalization is finite for finite-type characteristic-zero schemes, so $Z→U$ is projective. Since Y is normal and the map is birational onto its image, it factors through Z. Outside p it is the graph of the ordinary ratio [f:g], hence an isomorphism over U minus p. [given, A1, F1, step 7.1, algebra]

9.1 The pullback of $O_{P^{1}}(1)$ is $O_Y(−D)$. Its degree is zero on each $E_i≠E$, so those curves map to points; its degree on E is one, so E maps isomorphically to its image $P^{1}$. No other curve can be exceptional over U. This constructs the contraction extracting exactly E, without a basepoint-free or contraction theorem. [given, A1, F1, step 8.1, algebra]

10.1 Write $d_E$ for the coefficient of E in D and $E_Z$ for its image. The pullback of the tautological line bundle has rational section 1 with divisor −D, so its descended line bundle on Z has Weil divisor $−d_E E_Z$. Therefore $d_E E_Z$ is Cartier. Thus $E_Z$ is Q-Cartier by the construction itself. Equivalently, the section f defines on Z a Cartier residual divisor $C_f$, and $div_Z(f)=d_E E_Z+C_f$. The image $E_Z$ is the same smooth $P^{1}$, not merely its normalization: its morphism to the $P^{1}$ factor is inverse to the degree-one map from E. [given, A1, F1, step 9.1, algebra]

11.1 For a projective smooth U the local construction globalizes: the ideal (f,g) is $m_p$-primary after the preceding shrinking, hence defines a coherent ideal supported at p and equal to O away from p. The normalized blowup of that ideal is projective over U and is the above graph normalization near p. Finitely many disjoint points can be handled simultaneously. The induced pair $(Z,E_Z+B_Z)$ is crepant to (U,G), where $B_Z$ is the strict transform of G. It is effective; $E_Z$ and $B_Z$ are Q-Cartier because the pullback of G differs from $B_Z$ by a rational multiple of the now Q-Cartier $E_Z$. Hence $K_Z$ is Q-Cartier as well. Its exceptional log discrepancies are strictly positive because E was the original pair's sole lc place. This is exactly the plt condition needed below, not an appeal to a surface classification. [given, A1, F1, step 10.1, algebra]

12.1 Let T be normal projective surface, B effective rational, and assume $K_T+B$ is Q-Cartier. Suppose all exceptional log discrepancies are positive and the coefficient-one reduced part $C=\lfloor B\rfloor$ has coefficient one with every other coefficient below one. Take a smooth log resolution $ρ:V→T$. Its coefficient-one divisors are precisely the strict transforms $C_i$ of the components of C. They are disjoint: an intersection on the smooth SNC model would, after one point blowup, create an exceptional coefficient-one divisor, contradicting the strict discrepancy hypothesis. [given, A1, F1, step 11.1, algebra]

13.1 Write $K_V+C_V+F=ρ^*(K_T+B)$, with $C_V=\sum C_i$ and $P=\lceil−F\rceil$. The negative coefficients are exceptional, so P is effective exceptional and contains no $C_i$. The same valuation/codimension-one calculation as in the isolated-centre packet gives $ρ_*O_V(P−C_V)=I_C$ and $ρ_*O_V(P)=O_T$. [given, A1, F1, step 12.1, algebra]

14.1 Here relative vanishing is supplied on the actual projective surface, not assumed locally. Choose an ample H on T. Write the exceptional curves as $E_i$ and $Q=(E_i E_j)$. They are perpendicular to $ρ^*H$, whose square is $H^{2}>0$. Hodge index makes Q negative definite: if a nonzero vector had square zero, its absolute-value vector would also have square zero since Q has nonnegative off-diagonal entries; the corresponding nonzero effective divisor would be numerically trivial, contrary to its positive intersection with an ample divisor. Put $B=−Q$. Minimizing $x^T Bx/2−\sum x_i$ and replacing x by |x| shows $B^{-1}1$ has all coordinates positive; a zero coordinate would give a nonpositive row sum, contradicting $Bx=1$. Clear denominators to obtain an effective exceptional Z with $ZE_i<0$. To bound the other curves, let I be the ideal of the finite exceptional image, choose N larger than all coefficients of Z, and use the ample criterion to choose a nonzero section of $I^N(kH)$. Its divisor D has $ρ^*D−Z$ effective, since each exceptional valuation of I is a positive integer. Every nonexceptional curve not among the finitely many components of that divisor satisfies $ZC\le kρ^*HC$; enlarge this bound to include those finitely many components, whose denominators $ρ^*HC$ are positive. Thus $ρ^*H−δZ$ is positive on every curve for sufficiently small $δ>0$, and its square $H^{2}+δ^{2}Z^{2}$ is positive. The supplied surface numerical criterion makes it ample. If there are no exceptional curves, ρ is an isomorphism and $Z=0$ suffices. For sufficiently large $n, nH−(K_T+B)$ is ample. Increase the fractional SNC boundary by a sufficiently small δZ. The adjoint difference for $P−C_V+nρ^*H$ is $ρ^*(nH−K_T−B)−δZ$, which is ample. Smooth SNC vanishing gives $H^{>0}(V,O(P−C_V+nρ^*H))=0$ for all sufficiently large n. The coherent higher images supplied by proper pushforward have their higher ample-twist cohomology killed by Serre vanishing. Leray then identifies their large-twist sections with these zero groups; eventual global generation forces every positive higher image to vanish, in particular $R^{1}ρ_*O_V(P−C_V)=0$. [given, A1, F1, step 13.1, algebra]

15.1 Push $0→O(P−C_V)→O(P)→O_{C_V}(P)→0$. It gives $ρ_*O_{C_V}(P)=O_C$. Since $C_V$ is a disjoint union of smooth curves, the sandwich of pullback functions and multiplication by the canonical section of P gives $ρ_*O_{C_V}=O_C$. Integral rational functions on the reduced C pull back regularly to this disjoint normal source, so this equality makes C normal. In particular its components are disjoint and each is a smooth curve. This proves the needed plt-boundary normality for projective surfaces directly from SNC vanishing, rather than importing inversion of adjunction. [given, A1, F1, step 14.1, algebra]

16.1 Let $(Z,E+B_Z)$ be the projective plt surface from Section 3 and fix $x∈E$. Choose $m>0$ with mE Cartier, and choose an ample Cartier H. For sufficiently large n, |mE+mnH| is very ample. Choose a general smooth divisor J in it avoiding x and all the finitely many singular points of Z and meeting the resolved boundary normally. Form the normalized cyclic reflexive cover associated to the graded algebra $⊕_{i=0}^{m−1}O_Z(−i(E+nH))$ and the section cutting out J; these divisorial sheaves are multiplied using that section in degree m. Equivalently this is the normalization in the extension obtained by taking an mth root of a rational function with divisor J−mE−mnH. This is a finite projective cyclic cover, The coefficient one along the nonempty J ensures the Kummer extension has degree m, so the cover is connected. [given, A1, F1, step 15.1, algebra]

17.1 Near x, J and H can be removed from the local presentation. The cover is the normalized root of a local equation f for mE. Its valuation along E is m, so adjoining the mth root has ramification index one there; at every other codimension-one point near x the equation is a unit. Thus it is quasi-etale near x, and the pullback of E is reduced Cartier there, defined by the root coordinate (or its inverse, according to the divisor convention). [given, A1, F1, step 16.1, algebra]

18.1 Globally the only codimension-one ramification is along the general J, with index m. The finite-map canonical-divisor calculation gives $K_{\mathrm{cover}}+E_{\mathrm{cover}}+B_{\mathrm{cover}}=\operatorname{cover}^*(K_Z+E+B_Z+(1−1/m)J)$. [given, A1, F1, step 17.1, algebra]

19.1 The added general divisor has coefficient below one and is transverse on a log resolution, so the pair downstairs on the right is plt. For a divisorial valuation of ramification index e, the upstairs log discrepancy is e times the downstairs log discrepancy: the DVR canonical contribution is e−1 and cancels in K plus boundary. Hence the cover pair is plt. Section 4 applied to this PROJECTIVE normal cover proves that its reduced coefficient-one divisor is normal. Near a point over x, it is a single smooth Cartier curve. [given, A1, F1, step 18.1, algebra]

20.1 Let R be the corresponding normal local surface ring and t its Cartier curve equation. Since R/(t) is a regular one-dimensional local ring, its maximal ideal lifts to one generator plus t. Thus edim R≤2=dim R, and R is regular. This constructs a smooth local cyclic cover of the plt surface pair without using a quotient-singularity classification. The projective cyclic globalization is included specifically to justify the use of the existing projective SNC vanishing supplier; no unproved affine relative-vanishing extension is substituted. [given, A1, F1, step 19.1, algebra]

21.1 Let a stabilizer of order r act on the smooth local cover at a point over x. In completed regular parameters u,v, with $E_{\mathrm{cover}}=\{u=0\}$, average eigenparameters for the cyclic group. Its action is diagonal and preserves $u=0$. Quasi-etaleness excludes a nontrivial stabilizer element fixing a divisor, so the action on the curve coordinate v is faithful. The quotient map on E has parameter $v↦v^r$ and ramification divisor (r−1)[0]. [given, A1, F1, step 20.1, algebra]

22.1 Write the effective pulled-back remaining boundary as $\sum b_l B_l$. Put $n_l=intersection_0(B_l,E_{\mathrm{cover}})≥0$, omitting components not through the point. Smooth residue adjunction gives on the cover $K_{E_{\mathrm{cover}}}+\sum b_l n_l[0]$. Comparing it with the curve ramification formula shows that the coefficient of the different downstairs is $d_x=(r−1+\sum _l b_l n_l)/r≥0$. [given, A1, F1, step 21.1, algebra]

23.1 Its strict bound $d_x<1$ follows directly from the plt discrepancy inequality. For large integer N take the divisorial valuation $v_N(u)=N, v_N(v)=1$, obtained by successive point blowups along E. Its smooth log discrepancy is N+1; subtracting the coefficient-one E leaves one. For N greater than all the finite intersection orders, $v_N(B_l)=n_l$, so its pair log discrepancy is $1−\sum b_l n_l$. It is exceptional and the pair is plt, hence this is positive. Consequently $\sum b_l n_l<1$ and $d_x<1$. This is the full coefficient inequality, including tangencies, without an adjunction classification theorem. [given, A1, F1, step 22.1, algebra]

24.1 The resulting boundary on $E≅P^{1}$ is therefore effective with every coefficient below one. Its rational adjunction class is the restriction of the crepant $K_Z+E+B_Z$, hence of the original $K_U+G$. On the original resolution the map $E→E_Z$ is an isomorphism, so the same residue class and horizontal coefficients are obtained on that E. Subsequent blowups whose centres are vertical over the lc centre change only the vertical coefficients. Thus this construction supplies exactly the nonnegative horizontal weights required by the separately constructed compatible rational marked model. [given, A1, F1, step 23.1, algebra]

25.1 The construction also applies simultaneously at finitely many disjoint points of a smooth projective surface, with one lc place at each point. Use the finite-support curvette ideals independently at those points and normalize their global blowup. Retain every chosen coefficient-one curve and contract the other exceptional curves. The resulting projective pair is plt, with disjoint coefficient-one curves. Sections 4--6 apply to each curve; the global cover may have several disjoint coefficient-one components, which is why Section 4 proved normality of the full reduced floor rather than assuming one global component. [given, A1, F1, step 24.1, algebra]

26.1 Now let $μ:Y→X$ be the fixed smooth-centre blowup log resolution of a smooth projective n-fold pair, $n≥3$, with sole lc place E over a codimension-two centre W. Also allow X to be a normal projective Gorenstein terminal threefold with isolated singularities, with the actual supplied exceptional ample-divisor model and with μ restricted over $X_{\mathrm{reg}}$ obtained by a finite smooth-centre blowup sequence. This latter factorization is retained explicitly; an arbitrary small resolution is not claimed. Use the residue supplier to know W normal and the geometric generic fibre $E→W$ integral. After shrinking W to a dense open, this is a smooth family of geometrically integral curves. Generic smoothness in characteristic zero and generic flatness give a smooth flat family on such an open. The $H^{0}$ base-change map at the generic point is the localization isomorphism already proved in the residue supplier. Apply the actual proper cohomology-and-base-change theorem with $q=0$ there: on a further open, the direct image is locally free of rank one and commutes with residue-field base change. Thus every geometric fibre there has $H^{0}$ equal to its ground field, hence is connected; smooth connected curves are integral. All the finitely many horizontal boundary components can likewise be made transverse over this open by generic smoothness. These are generic-open operations, not a full-special-fibre assertion. [given, A1, F1, step 25.1, algebra]

27.1 Choose n−2 sufficiently general members of a very ample system on X and let S be their complete intersection. In the normal-terminal threefold branch $n−2=1$ and this general hyperplane avoids the finitely many singular points, so S and its entire resolution lie over $X_{\mathrm{reg}}$. On each stage of the FINITE blowup resolution, their pullback systems are basepointfree. Bertini applied simultaneously to all boundary strata and smooth centres makes S and its proper transform $S_Y$ smooth projective surfaces and all relevant intersections transverse. A nontrivial blowup centre has dimension at most n−2. Centres whose image has dimension below n−2 are avoided by a general such complete intersection; surviving centres meet it in finitely many reduced smooth points. Blowup commutes with this transverse restriction (its regular-centre coordinate Rees algebra restricts to the point blowup Rees algebra). Therefore $S_Y→S$ is actually a finite sequence of point blowups, not an invocation of a surface factorization theorem. [given, A1, F1, step 26.1, algebra]

28.1 No chosen hyperplane contains a resolution centre, so its total transform has no exceptional divisorial component. Adjunction consequently cancels the same hyperplane terms on both sides of $K_Y+E+F=μ^*(K_X+G)$, giving on $S_Y$ the identical boundary coefficients and the actual log pullback of the restricted pair on S. The coefficient-one curves are exactly the fibres $E_w$ over the finite general set S∩W. They are smooth integral curves on the open chosen above, and, since they occur in the point-blowup exceptional tree, are $P^{1}$. There is one lc place over each such point; the same local differential discrepancy argument excludes additional places on the smooth SNC transverse model. Hence the finite-disjoint-point variant applies projectively. [given, A1, F1, step 27.1, algebra]

29.1 If F|E had a horizontal component of negative coefficient, that component would dominate W and would meet $E_w$ for general w with the SAME coefficient, since all intersections are transverse on this open. But Sections 1--6 give an effective different on each $E_w$, and crepant residue adjunction identifies its coefficients with the actual $F|E_w$. This is a contradiction. Therefore every horizontal coefficient of F|E is nonnegative; all are below one already by SNC and the strict F coefficients. The argument uses only actual closed complex projective surfaces, so requires no extension of the analytic SNC theorem to a generic function field and no unproved projective completion of a local pair. [given, A1, F1, step 28.1, algebra] ∎

## Remarks

The separate unique-place supplier constructs the needed place-level perturbation. This proof constructs the curvette contraction, Q-Cartier index and effective different. The geometry owner retains matching to a single compatible marked rational model and the final subadjoint resolution relation. The projective transverse realization and ambient horizontal positivity are constructed in this proof. No arbitrary ambient-resolution horizontal positivity is inferred without these crepant identifications.
