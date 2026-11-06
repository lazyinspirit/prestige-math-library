---
id: lem-gts-canonical-fundamental-cut-and-terminal-fourfold-first-divisor-protocol
kind: lemma
title: "Canonical fundamental cuts and terminal first divisors in index-two fourfolds"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
  - lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place
  - lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity
  - lem-gts-codimension-two-subadjunction-by-marked-rational-curves
  - lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data
  - lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution
  - lem-gts-log-adjoint-vanishing-on-snc-pairs
  - thm-bertini-smooth-hyperplane-section
  - thm-principalization-of-ideals
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - lem-positive-powers-of-a-regular-sequence-remain-regular
  - lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
  - def-axiom-of-choice
dependency_roles:
  lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing: mathematical-premise
  lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place: mathematical-premise
  lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity: mathematical-premise
  lem-gts-codimension-two-subadjunction-by-marked-rational-curves: mathematical-premise
  lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data: mathematical-premise
  lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-parameters-and-regular-sequences-in-cohen-macaulay-modules: mathematical-premise
  lem-positive-powers-of-a-regular-sequence-remain-regular: mathematical-premise
  lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, v1 Lemma 2.1 and Theorems 2.2--2.5
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-canonical-fundamental-cut-and-terminal-fourfold-first-divisor-protocol.md
dependency_level: 6
---

## Statement

Assume AC. The following statements use the actual lc isolation, subadjoint-resolution nonvanishing and section-lifting suppliers, with their exact smooth or normal-terminal model hypotheses retained.

(i) Let X be a smooth integral projective complex variety of dimension $n=3$ or4, A an ample Cartier divisor, $Pic(X)=ZA$, $−K_X=(n−2)A$ and $h⁰(X,A)≥3$. A general member $S∈|A|$ is integral normal Gorenstein canonical. For $n=4$ that general first divisor is moreover terminal with only isolated singularities.

(ii) Let Y be a normal integral projective complex Gorenstein terminal threefold with isolated singularities, A ample Cartier with $−K_Y=A$, $h⁰(Y,A)≥2$, $H⁰(Y,O_Y)=C$ and $H¹(Y,O_Y(−A))=0$. On the actual divisorial log resolutions used below require an effective exceptional divisor with relatively ample negative, and require their restrictions over $Y_{reg}$ to be finite smooth-centre blowup sequences, as in the normal-terminal lc suppliers. Then a general member of |A| is integral normal Gorenstein canonical. No Weil-factoriality or $Pic(Y)=ZA$ assumption is made in (ii).

(iii) Consequently, in case(i) with $n=4$, a general ordered pair of independent A sections has an integral normal canonical codimension-two complete-intersection surface as its common zero scheme. This is a canonical-doublecut statement; its first-jet smoothness consumer is separate.

## Statement references

[[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]]

[[lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place]]

[[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]]

[[lem-gts-codimension-two-subadjunction-by-marked-rational-curves]]

[[lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data]]

[[lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution]]

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[thm-bertini-smooth-hyperplane-section]]

[[thm-principalization-of-ideals]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]]

[[lem-positive-powers-of-a-regular-sequence-remain-regular]]

[[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Terminal and canonical are used in their discrepancy sense with Cartier canonical class: exceptional discrepancies are respectively positive or nonnegative integers on smooth resolutions. The actual log resolutions and exceptional ample-divisor models required by the named normal-terminal suppliers are retained. General means a nonempty Zariski-open set of section parameters.

[F1] The exact suppliers are [[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]], [[lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place]], [[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]], [[lem-gts-codimension-two-subadjunction-by-marked-rational-curves]], [[lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data]], [[lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution]], [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[thm-bertini-smooth-hyperplane-section]], [[thm-principalization-of-ideals]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[lem-positive-powers-of-a-regular-sequence-remain-regular]], [[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]], [[def-axiom-of-choice]]. The codimension-two supplier is used only for codimension-two centres. For an isolated divisorial centre, the unique-place residue supplier applies directly to its smooth strict transform E, as detailed in step 10.1: ordinary adjunction gives the resolution relation with moduli zero, and the residue pole test gives effective pushforward. The normal-terminal scope, isolated-centre ideal vanishing and SNC rounding hypotheses are retained. Surface nonvanishing needs $a>0$, curve nonvanishing needs $a·\operatorname{deg}(A|W)>−2$, and lifting needs $1+r−γ>0$ when $−K=rA$. These are maintained by arbitrarily small perturbation; γ is never falsely kept $≤1$.

[F2] No lc-centre intersection theorem is silently imported for the fixed-divisor endpoint. The needed smaller centre is constructed in steps 8--9 from a regular-sequence punctured-neighbourhood calculation and a smooth codimension-two blowup. No primitive Picard argument is applied to Weil divisors on singular Y.

## Proof

**Given:** Exactly the Statement hypotheses and the actual supplied lc/resolution interfaces.

1.1 On a fixed SNC log resolution of an effective pair, its lc threshold is the minimum of finitely many ratios $(k_i+1)/r_i$ (and the strict-transform component bounds), where $k_i$ is the ambient discrepancy and $r_i$ the multiplicity. The local top-differential inequality in the unique-place supplier shows that all SNC $coefficients≤1$ are equivalent to lc, and that minimal lc centres come from images of intersections of coefficient-one strata. These are a finite collection, so a minimal centre W can be chosen. Here is the needed centre-isolation construction before using suppliers that assume an isolated centre. If W is only the image of an intersection of coefficient-one components, blow up that smooth SNC stratum; a stratum of c coefficient-one components creates a prime of boundary coefficient $c-(c-1)=1$ mapping onto W. Principalize $I_W$ on a refinement of this projective model, retaining the full SNC boundary together with the principalized ideal divisor. A sufficiently high twist $I_W(mA)$ is generated. A general section D of this twist, resolved on that principalization, has a smooth free transform transverse to the SNC support. For every coefficient-one prime $E_i$ write $k_i$ for its ambient discrepancy and $d_i=\operatorname{ord}_{E_i}(D)$. Then $d_i>0$ exactly when its centre is contained in W; by minimality such a centre equals W. All other coefficient-one primes have $d_i=0$. There is at least one positive $d_i$ by the stratum blowup. Set $q=\operatorname{min}_{d_i>0}(k_i+1)/d_i$, and replace G by $G_{\epsilon}=(1-\epsilon)G+\epsilon$ qD for sufficiently small positive rational epsilon. Its coefficient at an old coefficient-one prime is $1-\epsilon(k_i+1)+\epsilon$ q $d_i$. Thus it is at most one, and equality occurs only on primes mapping onto W, with at least one equality. This final model is a common SNC resolution of G+D: the pullback of $I_W$ has an SNC fixed divisor and its chosen free transform is transverse to all boundary strata. The minimum includes every coefficient-one prime introduced by the refinement, not just primes on the original threshold model. At any remaining prime write $b_i<1$ for its old boundary coefficient and $g_i=\operatorname{ord}_{E_i}(G)$. Its new coefficient is $b_i+\epsilon(qd_i-g_i)$. Choose epsilon below each of the finitely many positive bounds $(1-b_i)/(qd_i-g_i)$ when $qd_i>g_i$, and below 1/q and 1. All subunit coefficients then remain below one, including every newly introduced exceptional prime and the free-transform coefficient epsilon q. The SNC discrepancy calculation therefore gives lc and makes the union of coefficient-one centres precisely the reduced irreducible W. The new numerical coefficient (1-epsilon)gamma+epsilon qm tends to gamma. The existing fixed-resolution place tie-break now applies when codim $W\ge 2$, with any prescribed further numerical tolerance. For a divisorial minimal W its strict transform is already the only coefficient-one prime: no exceptional prime maps onto a divisor, and a smaller lc centre would contradict minimality. All strict numerical inequalities used below can consequently be retained. Subsequent smooth-centre blowups preserve the required exceptional relative-ample model by adding the new exceptional divisor to a sufficiently large pullback of the preceding choice. Resolve the fixed base ideal once; general moving transforms and two general such transforms are smooth and transverse to its full exceptional SNC divisor by Bertini. [given, A1, F1, F2, algebra]

2.1 In (i), every member of |A| is integral and reduced. Each prime divisor on smooth X has class kA with $k>0$ by intersection with $A^{n−1}$; a decomposition would express1 as a sum of at least two positive integers. Since $h⁰(A)≥3$, there is also no fixed divisorial component. Outside the base locus, general members are smooth. Put $r=n−2$. [given, A1, F1, F2, step 1.1, algebra]

3.1 For a general member S of (i), if the lc threshold c is below1, a minimal lc centre of (X,cS) lies in the base locus and has $codimension≥2$. If the pair is lc at $c=1$ but an exceptional lc place remains, choose a minimal centre inside its proper centre; it again lies in the base locus and has $codimension≥2$. In either situation the numerical coefficient is $γ≤1$ before isolation. In dimension4, codimension-two surface centres have $a=2−γ' >0$ after a sufficiently small isolating perturbation. In dimension3, codimension-two curve centres have $(1−γ')\operatorname{deg}(A|W)>−2$ after choosing the perturbation small relative to this fixed positive degree. $Codimension≥3$ retains $γ'<\operatorname{codim}−1$. The actual nonvanishing suppliers and restriction-surjectivity $(1+r−γ'>0)$ then produce an A section not vanishing on the centre, contradicting its base-locus containment. Thus the pair is lc and has no exceptional lc place. [given, A1, F1, F2, step 2.1, algebra]

4.1 The resulting discrepancy differences $k_i−r_i$ in $K_Z+S_tilde=μ*(K_X+S)+\sum (k_i−r_i)E_i$ are integers. Log canonicity $gives≥−1$ and the exclusion of exceptional lc places excludes−1, hence they are nonnegative. The integral Cartier S is Cohen--Macaulay. At the generic point of a putative codimension-one singular locus of S in smooth X, its defining equation has $multiplicity≥2$; the smooth codimension-two ambient blowup has discrepancy1, giving a forbidden $discrepancy≤−1$. Thus S is regular in codimension one, and S2 plus R1 gives normality. Adjunction on its smooth moving strict transform gives nonnegative surface or threefold discrepancies. This proves the canonical conclusion in(i) without inversion of adjunction. [given, A1, F1, F2, step 3.1, algebra]

5.1 For $n=4$, suppose the general canonical Y were not terminal. On the resolved adjunction model a zero discrepancy exceptional over Y must come from an ambient $E_i$ with $k_i=r_i$ and centre of $codimension≥3$ in X. If all exceptional coefficients over Y on this smooth model were positive, any further exceptional valuation has positive discrepancy by the smooth local differential bound, so such an $E_i$ must exist. A codimension-two ambient centre is a divisor of the normal Y and its generic point is regular; it cannot witness an exceptional valuation over Y. The smooth ambient differential bound gives $k_i≥2$ for the relevant centre. [given, A1, F1, F2, step 4.1, algebra]

6.1 Take two general members $Y_1,Y_2$ with the same fixed exceptional orders $r_i$ and let $D=Y_1+Y_2$. Then $c=\operatorname{lct}(X,D)≤(k_i+1)/(2r_i)=(k_i+1)/(2k_i)<1$. Its total numerical coefficient $γ=2c<2$. Put $U=X\setminus\operatorname{Bs}|A|$. General Bertini makes $Y_1$ and $Y_2$ smooth and transverse on U, so each local boundary component there has coefficient $c<1$. The strict SNC criterion here means klt, not merely lc: for any prime divisor E over such a coordinate chart, write $m_j=\operatorname{ord}_E(x_j)\ge 0$ for regular coordinates with the boundary among $x_1=0,x_2=0$, omitting an absent component. The same local top-differential estimate used in step 1.1 gives $a(E;X,cD)+1\ge \sum_j m_j-c(m_1+m_2)>0$, because some $m_j$ is positive and every displayed weight is positive. Thus no lc place has centre in U. In particular the blowup of a transverse codimension-two intersection has discrepancy 1−2c and boundary coefficient 2c−1; at $c=1/2$ these equal 0 and 0, respectively, not discrepancy −1 or boundary coefficient 1. Hence that intersection is not an lc centre. All lc centres are therefore in Bs|A|, which has no divisorial component by step 2.1; there is no divisorial centre. At a minimal surface centre retain $a=2−γ'>0$; at $codimension≥3$ retain $γ'<2≤\operatorname{codim}−1$. The exact nonvanishing and lifting suppliers contradict the base locus. Hence Y is terminal. [given, A1, F1, F2, step 1.1, step 2.1, step 5.1, algebra]

7.1 This terminal Gorenstein Y has only isolated singularities at the used scope. Otherwise a general projective hyperplane crosses a generic singular curve. Its Cartier surface section is CM, smooth away from finitely many points by Bertini, hence normal by R1 and S2, and is Gorenstein by adjunction. Restriction of a log resolution gives strictly positive discrepancies: no hyperplane contains a centre and the same hyperplane terms cancel in adjunction. The actual crepant canonical-surface resolution supplier would produce a crepant resolution; if a singular point remained, an exceptional curve on it would have discrepancy0, contradicting the strictly positive discrepancies. Thus the surface is smooth. But a quotient of a nonregular local3fold ring by a nonzerodivisor cannot be a regular local2fold ring: lifting its two maximal-ideal generators plus that equation would make embedding $dimension≤3$ and the original ring regular. This contradiction excludes the singular curve. [given, A1, F1, F2, step 6.1, algebra]

8.1 For (ii), connectedness of a general Cartier S follows from $0→O_Y(−A)→O_Y→O_S→0$, the inverse ample H⁰ vanishing and the stated H¹ vanishing: $H⁰(O_S)=C$. We record the precise fixed-component endpoint. In a reduced connected Cartier surface $S=F+B$ in a CM threefold, with F a prime component of multiplicity1 and $B≠0$, the intersection F∩B cannot consist only of isolated points. At any such point the local ring R of S is CM of dimension2. Choose a regular system of parameters x,y. Its punctured spectrum is D(x)∪D(y), and its regular functions are $R_x∩R_y=R$ inside $R_{xy}$: from $y^m a=x^n$ b, regularity of y modulo $x^n$ forces $a∈(x^n)$. A function taking0 on F and1 on B would therefore extend to a nontrivial idempotent of the local ring R, impossible. Hence an intersection curve exists. [given, A1, F1, F2, step 7.1, algebra]

9.1 If (Y,S) is lc, every component of S has multiplicity1. A minimal divisorial lc centre F CONTAINED IN THE BASE LOCUS at $coefficientγ=1$ would be a fixed component: moving components are smooth away from the base locus, and there are no bad centres there. The moving remainder B is nonzero because $h⁰(A)≥2$. Connectedness gives $F∩B≠\varnothing$, and step8 gives a curve in that intersection. Its generic point lies in $Y_{reg}$ because SingY is finite. The local equation of S there has $multiplicity≥2$; lc forces that multiplicity to be exactly2 by the smooth codimension-two blowup test. This blowup has ambient discrepancy1 and order2, so it is an lc place with centre a curve properly contained in F. That contradicts minimality. This establishes the $γ=1$ divisorial exclusion without Cartierness of F or an imported lc-centre intersection theorem. [given, A1, F1, F2, step 8.1, algebra]

10.1 Run the threshold argument on the normal-terminal Y using its actual extended lc suppliers. Chosen centres are in the base locus: either the threshold is below1, or the centre is chosen inside an exceptional lc place at1; the moving divisor itself is not one of these bad centres. A chosen minimal divisorial surface centre can only occur at $γ<1$, by step9; choose isolation retaining $a=1−γ'>0$. Here no codimension-two subadjunction theorem is applied: on the common SNC resolution its strict transform E is the sole coefficient-one prime, so write $K_Z+E+F=μ*(K_Y+G')$ and $P=ceil(−F)$. The isolated-centre supplier gives $μ_*O_Z(P−E)=I_W$ and $R¹μ_*O_Z(P−E)=0$. The unique-place residue supplier, which explicitly permits codimension one, gives $(μ|E)_*O_E(P)=O_W$ and normality of W. Set $ν=μ|E$ and $Δ=F|E$. SNC makes its prime restrictions distinct and gives $P|E=ceil(−Δ)$; ordinary adjunction gives $K_E+Δ=ν*((K_Y+G')|W)∼_Q−aν*(A|W)$, with all coefficients of Δ below one and $M=0$. The proper birational map ν onto normal W is an isomorphism at generic points of its divisors. At such a point the residue supplier has a single branch of multiplicity one, so its pole test gives the coefficient of Δ nonnegative. Hence $ν_*Δ$ is effective. The smooth surface E, its SNC exceptional and boundary curves, the ample Cartier A|W and this relation meet the surface nonvanishing hypotheses exactly; lifting uses the isolated-centre supplier. Minimal curve centres retain $(1−γ')\operatorname{deg}(A|W)>−2$, and point centres retain $γ'<2$. Lifting is allowed because $2−γ'>0$. These exclude thresholds below1 and every exceptional coefficient-one place at1. The integral discrepancy argument of step4 now applies on the normal-terminal resolution. At codimension-one points of S the ambient is regular (its singular set is finite), so the same multiplicity test gives R1; S is CM as a Cartier divisor in Gorenstein Y. Thus any integral component is normal and canonical by resolved adjunction. [given, A1, F1, F2, step 9.1, algebra]

11.1 There is no hidden reducible/nonreduced case in(ii). A multiple component would force $threshold<1$ and has already been excluded. If reduced S had several components, connectedness and step8 would give an intersection curve in $Y_{reg}$; its blowup is an exceptional lc place at coefficient1, already excluded. Therefore S is integral, and the preceding normality and canonical argument proves(ii). [given, A1, F1, F2, step 10.1, algebra]

12.1 Finally in(i) with $n=4$, smooth adjoint vanishing gives $H^i(X,O_X)=H^i(X,O_X(−A))=0$ for $i>0$ because $−K_X=2A$. Smooth Serre duality gives $H²(K_X)=H³(K_X)=0$. For a general terminal $Y∈|A|$, restriction $H⁰(X,A)→H⁰(Y,A|Y)$ is onto with one-dimensional kernel, so $h⁰(Y,A|Y)≥2$. The sequences $0→K_X→O_X(−A)→O_Y(−A)→0$ and $0→O_X(−A)→O_X→O_Y→0$ give $H¹(Y,O_Y(−A))=0$ and $H⁰(Y,O_Y)=C$. Its actual normal-terminal log-resolution models are those required by the extended suppliers. Thus(ii) applies to the complete restricted system and a general ordered pair cuts the claimed integral normal canonical complete-intersection surface. This proves(iii); smoothness of a general first divisor is left to its separately authored first-jet consumer. [given, A1, F1, F2, step 11.1, algebra] ∎

## Remarks

All assertions remain research proposals pending guarded admission. The proof uses the actual canonical and terminal log-resolution interfaces and the named normal-terminal lc supplier extension; it neither calls a terminal first divisor smooth nor identifies Cartier Picard classes with arbitrary Weil divisor classes. The final smooth-first-divisor and geometric ladder consumer is separately owned.
