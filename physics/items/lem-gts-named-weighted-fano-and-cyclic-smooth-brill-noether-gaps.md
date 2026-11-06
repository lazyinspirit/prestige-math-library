---
id: lem-gts-named-weighted-fano-and-cyclic-smooth-brill-noether-gaps
kind: lemma
title: Smooth Brill–Noether gaps for the named weighted, Fano and cyclic families
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- lem-gts-nonprimitive-fano-anticanonical-k3-bridges
- def-gts-gamma-bmt-and-brill-noether-data
- lem-gts-classical-and-nonhyperelliptic-curve-brill-noether-bounds
- lem-gts-k3-and-del-pezzo-curve-brill-noether-bounds
- lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings
- lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one
- lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder
- lem-gts-ample-divisor-relative-handles-and-integral-restriction
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-purity-for-finite-covers-of-regular-local-rings
- thm-bertini-smooth-hyperplane-section
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- cor-regular-quotient-cohen-macaulay-equivalence
- thm-baire-category-locally-compact-hausdorff
- def-axiom-of-choice
- lem-gts-general-projective-threefold-gaga-by-finite-projection
- thm-dolbeault-lemma-polydisc
- thm-smooth-function-module-sheaves-are-acyclic
- thm-acyclic-resolution-theorem-for-right-derived-functors
- thm-first-chern-class-classifies-complex-line-bundles
- thm-universal-coefficient-theorem-for-cohomology-over-a-pid
dependency_roles:
  lem-gts-nonprimitive-fano-anticanonical-k3-bridges: mathematical-premise
  def-gts-gamma-bmt-and-brill-noether-data: mathematical-premise
  lem-gts-classical-and-nonhyperelliptic-curve-brill-noether-bounds: mathematical-premise
  lem-gts-k3-and-del-pezzo-curve-brill-noether-bounds: mathematical-premise
  lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings: mathematical-premise
  lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one: mathematical-premise
  lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder: mathematical-premise
  lem-gts-ample-divisor-relative-handles-and-integral-restriction: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-purity-for-finite-covers-of-regular-local-rings: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  cor-regular-quotient-cohen-macaulay-equivalence: mathematical-premise
  thm-baire-category-locally-compact-hausdorff: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-general-projective-threefold-gaga-by-finite-projection: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-first-chern-class-classifies-complex-line-bundles: mathematical-premise
  thm-universal-coefficient-theorem-for-cohomology-over-a-pid: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Feyzbakhsh, Koseki, Liu and Rekuski, Stability conditions on Calabi–Yau threefolds via Brill–Noether
      theory of curves
    url: https://arxiv.org/pdf/2509.24990v2
    locator: arXiv:2509.24990v2, §5 printed pp. 29–33, Corollary 5.1, Theorems 5.2, 5.5 and 5.7 and their proofs;
      the X6,6 whole-threefold 4H and cyclic ramification assertions are replaced by the explicit local constructions
      here.
  - title: Chen, Chen and Chen, On quasismooth weighted complete intersections
    url: https://arxiv.org/pdf/0908.1439v1
    locator: arXiv:0908.1439v1, §§2.1–4.5 printed pp. 3–12, including Proposition 3.1, Corollaries 4.3–4.4 and Theorem
      4.5. Its c=3 proof is left to the reader; the complete exact local enumeration is retained separately.
verification:
  precheck: pending
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
dependency_level: 9
---

## Statement

Assume AC. Let $(X,H)$ be one of the following three named source families. The threefold is smooth projective, $K_X\cong\mathcal O_X$, $H^1(\mathcal O_X)=0$, and $H$ is ample Cartier. The weighted case uses the source standard well-formed amplitude-zero quasismooth complete-intersection presentation, without an intersection with a linear cone, and $H$ its ample Picard generator. The Fano-fourfold case has $X$ a general anticanonical divisor of smooth $M$, $-K_M=rA$, $H=A|X$, with $r\ge3$, or $r=2$ and $\rho(M)=1$. The cyclic case has a degree-$d$ cyclic cover of smooth Fano $Y$, $-K_Y=rA_Y$, $H=\pi^*A_Y$, $d\ge2$, $d-1\mid r$, smooth branch $B\in|drA_Y/(d-1)|$, general when $A_Y$ is not generated, and $r\ge2$, or $r=1$ and $\rho(Y)=1$. Then there are a positive integer $a$, a smooth integral $S\in|aH|$, and a smooth integral $C\in|aH|_S|$ such that
$$\operatorname{BN}_C<\chi(\mathcal O_X(aH)).$$
The weighted case consists of exactly the thirteen standard types displayed below; $a=2$ for $X_{10},X_{6,6},X_{4,6}$ and $a=1$ for the other ten. In the Fano and cyclic cases $a=1$. No normalization of arbitrary non-well-formed raw stack presentations is asserted.

## Facts & Assumptions

**Given:** Exactly the smooth CY threefold, source-standard weighted convention or named Fano/cyclic construction, and polarization in the Statement. BN ranges over positive-rank torsion-free stable curve sheaves; on the smooth curves constructed below these are bundles.

[F1] [[def-gts-gamma-bmt-and-brill-noether-data]] gives the corrected source BN convention. [[lem-gts-classical-and-nonhyperelliptic-curve-brill-noether-bounds]] and [[lem-gts-k3-and-del-pezzo-curve-brill-noether-bounds]] give the actual rank-uniform curve inequalities used in each row.

[F2] [[lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings]] gives actual smooth primitive ladders, the degree-one base-point avoidance and high-degree embedding. [[lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one]] gives precisely the very-ample or degree-one double-plane K3 alternatives. [[lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder]] gives the exact weighted sextic geometry, not a general del-Pezzo classification. [[lem-gts-nonprimitive-fano-anticanonical-k3-bridges]] supplies the separate nonprimitive decomposition cases and the primitive-polarization anticanonical K3 bridge; maximality is not added to the Statement.

[F3] [[lem-gts-ample-divisor-relative-handles-and-integral-restriction]] supplies the integral primitive restrictions in the explicit weighted joins. [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[thm-bertini-smooth-hyperplane-section]] and [[thm-grothendieck-riemann-roch-for-projective-morphisms]] supply smooth vanishing, actual generic smooth sections and Euler identities. [[thm-purity-for-finite-covers-of-regular-local-rings]] is used in the weighted stabilizer argument. [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] and [[cor-regular-quotient-cohen-macaulay-equivalence]] supply the graded regular-sequence depth argument.

[F4] [[thm-baire-category-locally-compact-hausdorff]] allows choosing a very-general K3 section also transverse to a fixed smooth member. [[def-axiom-of-choice]] is the ambient convention.

[F5] The following finite Hilbert-product calculations and local curve bounds are proved in the numbered argument; they are displayed together for comparison.

| standard type | a | A³ | $χ(O_{X}(A))$ | proved BN bound to use |
|---|---:|---:|---:|---:|
| X5⊂P4 |1|5|5|7/2|
| X2,4⊂P5 |1|8|6|5|
| X3,3⊂P5 |1|9|6|11/2|
| X2,2,3⊂P6 |1|12|7|13/2 (nonhyperelliptic)|
| X2,2,2,2⊂P7 |1|16|8|6, by the exact $K3(s=2,m=8)$ bound|
| $X_{8}\subset P(1^{4},4)$ |1|2|4|2|
| $X_{6}\subset P(1^{4},2)$ |1|3|4|5/2|
| $X_{3,4}\subset P(1^{5},2)$ |1|6|5|4|
| $X_{2,6}\subset P(1^{5},3)$ |1|4|5|3|
| $X_{4,4}\subset P(1^{4},2²)$ |1|4|4|3|
| X10⊂P(1³,2,5) |2|8|7|5|
| X6,6⊂P(1²,2²,3²) |2|8|5|9/2 (canonical-embedding proof below)|
| X4,6⊂P(1³,2²,3) |2|16|8|$\sqrt{48}$, by the exact $K3(s=4,m=2)$ bound|

[F6] [[lem-gts-general-projective-threefold-gaga-by-finite-projection]] gives coherent cohomology comparison and full faithfulness for a smooth irreducible projective complex threefold. [[thm-dolbeault-lemma-polydisc]] gives the locally exact Dolbeault resolution of its analytic structure sheaf, whose smooth-form terms are acyclic by [[thm-smooth-function-module-sheaves-are-acyclic]]; [[thm-acyclic-resolution-theorem-for-right-derived-functors]] identifies its cohomology with that of global smooth forms, using the injective-resolution datum supplied by AC. [[thm-first-chern-class-classifies-complex-line-bundles]] classifies numerable topological complex line bundles on a connected compact smooth manifold by singular integral H². [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] applies to its free integral singular chains with coefficient module Z. These interfaces will be used only for the actual smooth projective threefold Y in step 18.1.

## Proof

1.1 Weighted classification and normalization interface. Use the source standard normalized weighted presentation: sorted positive weights $a_{0}\le …\le a_{c+3}$, sorted degrees $d_{1}\le …\le dc$, regular-sequence homogeneous equations, amplitude $\sum d-\sum a=0$, no degree equal to a weight, and a smooth quasi-smooth coarse threefold. Its generic weighted stabilizer is trivial. For this standard presentation the smooth CY cannot meet a nontrivial stabilizer stratum. Indeed, at a cone point the smooth transverse three-dimensional slice has determinant character $λ^{\sum a-\sum d}=1$, by the equivariant tangent/normal exact sequences; the radial line has trivial character. Formal averaging linearizes its finite cyclic stabilizer. The action on the slice is faithful, since otherwise that element fixes an open slice and gives a nontrivial generic stabilizer. A nontrivial subgroup of SL3 has no nonidentity pseudoreflection, hence its quotient cover is unramified in codimension one. If the coarse quotient were regular, the ACTUAL punctured purity supplier `thm-purity-for-finite-covers-of-regular-local-rings` applied at a minimal-height non-etale point would make the cover etale there. Repeating rules out every branch component. Over the complete local regular ring with residue C, a finite etale cover splits (lift its residue idempotents successively through the nilpotent parameter quotients); a connected faithful local stabilizer cover therefore has degree one. Contradiction. Thus the threefold avoids every nontrivial weighted stabilizer stratum. [F1, F2, F3, F4, F5, given, construct]

2.1 The stated standard well-formed amplitude-zero presentation is the interface used for the 'weighted CY complete intersection' clause. This note does not assert that coarse $K_{X}=O$ alone proves the displayed amplitude for a NON-well-formed stack presentation. Common Veronese factors can be removed and numerical linear-cone redundancies eliminated; if an arbitrary presentation is allowed rather than the standard source convention, that normalization must be supplied, rather than smuggling it into the numerical classification. The later arithmetic and curves below apply to each of the actual thirteen standard types. [F1, F2, F3, F4, F5, step 1.1, construct]

3.1 Necessary numerical conditions, from coordinate strata and Jacobians. If a subset of μ weights has gcd $h>1$, its coordinate stratum has dimension μ−1, and only the equations whose degrees are divisible by h restrict nontrivially there. Since the smooth threefold avoids that stratum, at least μ degrees are divisible by h. In particular every individual weight divides some degree, and the gcd of any $μ\ge c+1$ weights is one. These are stronger smoothness conditions than an assumed integer degree alone. For every prime power $p^{k}$, counting the weights divisible by $p^{k}$ and applying this subset condition shows that no more such weights than degrees occur. Summing their exponents gives $\prod a_{i}$ divides $\prod d_{j}$. [F1, F2, F3, F4, F5, step 2.1, construct]

4.1 Quasi-smoothness also gives $d_{j}>a_{3+j}$. To prove it, suppose $d_{j}<a_{3+j}$ (equality is excluded). On the coordinate plane of variables $x_{3+j},…,x_{c+3}$, the first j equations and ALL their first derivatives vanish: their degrees are below the smallest surviving weight, and a derivative could be constant only if an excluded degree equaled a weight. The remaining c−j equations in c−j+1 variables have a nonzero common cone point. At that point the Jacobian has rank below c, contradiction. [F1, F2, F3, F4, F5, step 3.1, construct]

5.1 Put $δ_{j}=d_{j}-a_{3+j}>0$ and $S=a_{0}+a_{1}+a_{2}+a_{3}=\sum δ$. If $c\ge 4$ then $δ_{c-j}\ge a_{3-j}$ for $j=0,1,2,3$. Otherwise, on the plane of the last j+1 variables, the first c−j equations have no surviving pure terms and have derivatives supported in only the first 3−j columns; the last j equations add rank at most j. Their common nonzero cone point therefore has Jacobian $rank\le 3<c$. Summing shows $c\le 4$. For $c=4$ equality forces $δ_{j}=a_{j-1}$. The largest weight divides some degree, and no degree equals it, so $d_{4}\ge 2a_{7}$. But $d_{4}=a_{7}+a_{3}$, forcing $a_{3}=…=a_{7}$. The gcd-of-five condition makes this weight one, giving only (2,2,2,2) in eight weight-one variables. [F1, F2, F3, F4, F5, step 4.1, construct]

6.1 For $c\le 3$ put $λ_{j}=d_{j}/a_{3+j}>1$. Since $\sum (λ_{j}-1)a_{3+j}=S\le 4a_{4}$, one has $\sum λ_{j}\le c+4$. Product integrality and arithmetic–geometric mean imply $a_{0}a_{1}a_{2}a_{3}\le ((c+4)/c)^{c}$; its integer bounds are respectively5,9,12. Also the largest weight divides a degree at least twice itself, so $δ_{c}\ge a_{c+3}$. Since the other δ are positive, $a_{c+3}\le S-c+1$. [F1, F2, F3, F4, F5, step 5.1, construct]

7.1 These finite bounds reduce the classification to an explicit integer loop. The complete exact-integer code is retained at `research/conformal-field-theory-string-theory-step3-fresh-2026-11-04-weighted-enumeration.py`: enumerate sorted first-four weights with $\prod \le 5,9,12$, sorted tails between a3 and S−c+1, and positive compositions δ of S; retain sorted degrees $a_{3+j}+δ_{j}$, no degree equal to a weight, product divisibility and every gcd subset condition just proved. There are 5394 degree-composition candidates before rejection (25, 753 and 4616 in codimensions one, two and three); 1925 remain after the sorted-degree test. The program uses only exact integer arithmetic, and every range and rejection is a proved necessary condition; its thirteen output rows are displayed below. The omitted source $c=3$ case is explicitly included by this finite loop. Each type is retained here only as a necessary possibility; constructing examples is unnecessary for the implication applied to a GIVEN existing X. [F1, F2, F3, F4, F5, step 6.1, construct]

8.1 Hilbert arithmetic, without a hidden threefold RR theorem. For a weighted regular-sequence coordinate ring R, the Koszul resolution gives $Hilb_{R}(t)=\prod (1-t^{d_{j}})/\prod (1-t^{a_{i}})$. The polynomial ring is Cohen–Macaulay and quotienting by the homogeneous regular sequence leaves depth4. Its irrelevant-ideal Cech complex therefore has H0 and H1 zero, giving $H^{0}(X,O_{X}(nH))=R_{n}$. For $n>0$ the actual now-constructed nef-big adjoint vanishing with $K_{X}=0$ gives $χ(O_{X}(nH))=dim$ $R_{n}$. The pole at $t=1$ gives $H³=\prod d/\prod a$; equivalently the third finite difference of the Hilbert polynomial is the length of three Cartier hyperplane cuts, proving this intersection normalization directly. [F1, F2, F3, F4, F5, step 7.1, construct]

9.1 Take $A=aH$ as in the table. The chosen multiples are basepoint-free. For the standard weighted rows with $a=1$, setting all weight-one variables to zero would leave a point/line of weights2,3,4. If it met X the surviving equations have dependent gradients by weighted Euler, or a row of the Jacobian is identically zero, contradicting quasi-smoothness. For X10, X66, X46 the degree-two sections contain all $x_{i}$ $x_{j}$ and all weight-two variables; their common zero is the pure weight3 or5 stratum, again excluded by the same Jacobian calculation. Thus $a=2$ is generated in those rows. [F1, F2, F3, F4, F5, step 8.1, construct]

10.1 General S∈|A| and $C\\in  |A|_{S}|$ are smooth by the basepoint-free characteristic-zero Bertini argument. They are connected: the Koszul sequence for two A sections and positive-twist adjoint vanishing, dualized using $K_{X}=0$, gives $H^{0}(O_{C})=C$. Smooth connected means integral. Adjunction gives $ω_{C}=O_{C}(2A)$, $g(C)-1=A³$. The χ column is obtained by multiplying the displayed finite Hilbert products through degree a, so no family-specific Chern number is assumed. [F1, F2, F3, F4, F5, step 9.1, construct]

11.1 The exact table is displayed in F5. [F1, F2, F3, F4, F5, step 10.1, construct]

12.1 All thirteen rows have a proved strict numerical gap $BN_{C}<χ(O_{X}(A))$, using the two exact exceptional surface joins in the companion note. For X2,2,3 ordinary very ample H makes $ω_{C}=2H|C$ very ample, so the locally proved nonhyperelliptic bound applies. The reduction/scaling supplier then transfers Γ-BMT from $A=aH$ back to H; the actual K3 existence and Picard-divisibility inputs for the two exceptional rows are established in weighted-exceptional-surface-joins.md. [F1, F2, F3, F4, F5, step 11.1, construct]

13.1 The exact X6,6 canonical-embedding repair. Write the variables of weights1,1,2,2,3,3 as x1,x2,y1,y2,z1,z2. X cannot meet the pure z stratum: at a common root of the two degree-six quadratics in z, their gradients in z are dependent by Euler, while every x/y derivative vanishes by degree. This contradicts quasi-smoothness. Hence |2H|, generated by $x_{i}$ $x_{j}$ and y1,y2, is basepoint-free. [F1, F2, F3, F4, F5, step 12.1, construct]

14.1 Choose two general degree-two sections with independent y-coefficient matrix. On $x_{1}=x_{2}=0$ their common zero would imply $y_{1}=y_{2}=0$, which has just been excluded. Their smooth curve C therefore lies entirely in $U=\{x_{1}\ne 0 \text{or} x_{2}\ne 0\}$. On $x_{1}\ne 0$, degree-four section ratios recover the full weighted affine coordinates: x2 $x_{1}³/x_{1}⁴=x_{2}/x_{1}$, x1² $y_{i}/x_{1}⁴=y_{i}/x_{1}²$, x1 $z_{j}/x_{1}⁴=z_{j}/x_{1}³$. [F1, F2, F3, F4, F5, step 13.1, construct]

15.1 Thus the degree-four linear system is an immersion and separates every point on that chart; the identical argument applies to x2. The weight-one fourth-Veronese coordinates determine [x1:x2], so these inverse-chart formulas agree and separate points across the charts as well. Its restriction to the proper smooth curve C is a closed immersion. Adjunction identifies that restricted line with $ω_{C}=4H|C$, proving that C is nonhyperelliptic. The local bound gives $BN_{C}\le g/2=9/2<5=χ(O_{X}(2H))$. [F1, F2, F3, F4, F5, step 14.1, construct]

16.1 One MUST NOT replace this by the stronger source assertion that 4H is very ample on the WHOLE X. On $x_{1}=x_{2}=0$ all degree-four monomials are products $y_{i}$ $y_{j}$ and forget the z coordinates. The corrected argument proves precisely the canonical very-ampleness on the chosen C, which is all the source reduction requires. [F1, F2, F3, F4, F5, step 15.1, construct]

17.1 The two exceptional weighted joins. Let the GIVEN smooth X be the intersection of four quadrics in P7. Replace their ordered basis by a general invertible linear combination. The common zero locus M of the first three quadrics is smooth: outside the base locus X, successive Bertini applied to their generating linear system gives smoothness; at every point of X the four original differentials are independent, so any three independent linear combinations remain independent. The same argument chooses a smooth flag of partial intersections. Adjunction gives dim $M=4$ and $-K_{M}=2O_{M}(1)$. [F1, F2, F3, F4, F5, step 16.1, construct]

18.1 Choose a general hyperplane Y in M. It is smooth, and $S=X\cap Y$ is smooth by Bertini. On Y, $A=O_{Y}(1)$ is very ample; adjunction from $-K_{M}=2O_{M}(1)$ gives $-K_{Y}=A$, and $A³=8$. Apply the integral relative-handle supplier down the smooth complete-intersection flag from P7 to Y: every ambient dimension is at least four, so restriction on singular integral H² is an isomorphism, taking the primitive generator $c1(O_{P7}(1))$ to c1(A). Thus $H²(Y;Z)=Zc1(A)$. The same relative homology vanishing and long exact sequences give $H_{1}(Y;Z)=0$, starting from the usual cell decomposition of P7. The algebraic Koszul resolution gives $H⁰(O_{Y})=C$ and $H¹(O_{Y})=H²(O_{Y})=0$. In particular Y is connected; smoothness then makes it irreducible. Threefold GAGA applies to this Y and gives $H¹(Yan,O_{Yan})=0$. By the Dolbeault lemma the smooth (0,q)-form sheaves resolve $O_{Yan}$; they are modules over smooth real functions and hence acyclic, so the acyclic-resolution theorem identifies this vanishing with global dbar cohomology. A topologically trivial holomorphic line bundle therefore has a nonzero holomorphic frame: choose a nonzero smooth frame s (smooth approximation and a partition of unity preserve nonvanishing on compact Y), write $s=f_{i}$ $e_{i}$ in local holomorphic frames, and glue the closed forms $\alpha =f_{i}⁻¹$ dbar $f_{i}$. Their common class vanishes, so $\alpha =dbar$ f for a global smooth function f; $\operatorname{exp}(-f)s$ is a nonzero holomorphic frame. Consequently analytic Pic injects into topological Pic. GAGA full faithfulness algebraizes that trivialization and its inverse for an algebraic line bundle, so algebraic Pic(Y) also injects. The topological classification identifies the target with singular H²(Y;Z); its hypotheses hold because Y is a connected compact smooth manifold, hence paracompact Hausdorff and of CW homotopy type. Integrality can also be checked by UCT with $R=G=Z$ and free singular chains: $H1=0$ kills the Ext term and $H²=\operatorname{Hom}(H2,Z)$ is torsion-free. Since c1(A) already generates H²(Y;Z), the injective algebraic Picard map has image all of it, proving $Pic(Y)=ZA$. This uses GAGA only on Y, and requires neither exponential-sequence surjectivity nor a field-coefficient comparison with integral cohomology. [F1, F2, F3, F4, F5, F6, step 17.1, construct]

19.1 Apply the VERY AMPLE alternative of the exact K3 NL supplier to Y and $L=A$. A very general hyperplane T in Y is a smooth K3 with $Pic(T)=ZA_{T}$. It can also be chosen transverse to the fixed smooth S: Bertini transversality is a nonempty Zariski-open condition, whereas the exceptional NL loci form a countable union of proper analytic subvarieties; Baire supplies a point in their complement inside this open set. The curve $C=X\cap T$ is smooth and integral, belongs to $|2A_{T}|$, and simultaneously is a member of $|H|_{S}|$. Connectedness follows from the usual Koszul sequence and adjoint vanishing; smooth connected curves are integral. [F1, F2, F3, F4, F5, step 18.1, construct]

20.1 The actual K3 bound with $(s,m)=(2,8)$ yields $BN_{C}\le 6<8=χ(O_{X}(H))$. Thus the numerical curve reduction applies to the original polarization H. [F1, F2, F3, F4, F5, step 19.1, construct]

21.1 The weighted (4,6) intersection. Write the ambient coordinates as x0,x1,x2 of weight1, y0,y1 of weight2, and z of weight3, and the GIVEN smooth X as $f_{4}=f_{6}=0$. Smoothness and the amplitude-zero stabilizer argument show that X avoids the ambient nontrivial stabilizer locus. In particular f6 has a nonzero z² coefficient. The linear system |2H| on X is basepoint-free: its sections include all $x_{i}$ $x_{j},y_{0},y_{1}$, whose common zero would be the excluded z-only point. [F1, F2, F3, F4, F5, step 20.1, construct]

22.1 Choose a general degree-two equation ℓ with nonzero coefficient of y1. Eliminating y1 identifies the ambient hyperplane $ℓ=0$ with P(1³,2,3). Its intersection S with X is smooth. We may choose ℓ such that the remaining y-direction is not a zero of the binary cubic f6(0,y0,y1,0). This cubic is not identically zero: otherwise f4, which is a binary quadratic on this stratum, has a common point with f6, contradicting avoidance of the stabilizer locus. Hence this extra requirement is nonempty open. [F1, F2, F3, F4, F5, step 21.1, construct]

23.1 Replace f6 by f6+q2 f4, where q2 is a degree-two form. This does not change X. Choose q2 and ℓ generally so that the threefold $Y=\{ℓ=0, f_{6}+q_{2} f_{4}=0\}$ is smooth. Here are the actual Bertini hypotheses. On the open set $f_{4}\ne 0$, varying q2 gives the degree-two linear system, which is basepoint-free outside the z-only point; the z-only point is excluded by the nonzero z² coefficient. The common base locus on the ambient smooth locus is X. Along X, df4 and df6 are independent; moreover dℓ restricted to TX is nonzero along S, because S is a smooth |2H| member. Thus dℓ and d(f6+q2 f4) are independent along S for every q2. The ordinary Bertini argument on the smooth weighted charts therefore applies both off and on the base locus. The remaining coordinate orbifold points are excluded by the nonzero z² and residual y³ coefficients, and the $x=0$ weighted line has coprime active weights2,3 away from those two points, so no further stabilizer remains. Thus Y is an actual smooth threefold and $O_{Y}(1)$ is Cartier. [F1, F2, F3, F4, F5, step 22.1, construct]

24.1 The completed degree-one del-Pezzo geometry supplier applies to this arbitrary smooth weighted sextic, not merely a generic example: nonzero z²,y³ coefficients permit completing the square and translating y to give $z²+y³+f_{4}'(x)y+f_{6}'(x)=0$. It yields $A=O_{Y}(1)$, $Pic(Y)=ZA$, $-K_{Y}=2A$, $A³=1$, and the full |2A| system. The separate weighted alternative of the exact NL supplier gives a very general smooth T∈|2A| with $Pic(T)=ZA_{T}$ and $A_{T}²=2$. Choose T also transverse to the fixed smooth S, as in the preceding open/Baire argument. [F1, F2, F3, F4, F5, step 23.1, construct]

25.1 On Y the fixed surface S is the divisor $f_{4}=0$ of class4A; hence $C=S\cap T$ is a smooth integral member of $|4A_{T}|$. On the original X it is the intersection of ℓ and a second degree-two equation, so S∈|2H| and $C\\in  |2H|_{S}|$, exactly the required curve pair for the polarization 2H. Connectedness follows by the Koszul/vanishing argument on X. The actual K3 bound with $(s,m)=(4,2)$ gives $BN_{C}\le \sqrt{48}<8=χ(O_{X}(2H))$. [F1, F2, F3, F4, F5, step 24.1, construct]

26.1 Euler polynomials of the relevant Fanos [F1, F2, F3, F4, F5, step 25.1, construct]

27.1 For a smooth Fano n-fold with $-K=rA$ and A ample Cartier, Kodaira/adjoint vanishing gives $χ(O)=1$ and $χ(O(tA))=0$ for integer $-r<t<0$. Serre duality gives $P(t)=(-1)^{nP}(-r-t)$. The Euler polynomial has degree n with leading coefficient $A^{n}/n!$, by successive Cartier cuts (or actual GRR). These facts determine the required values without a classification table. [F1, F2, F3, F4, F5, step 26.1, construct]

28.1 In dimension four, $r\le 5$ because P has the r−1 distinct negative roots and $P(0)=1$. Put $d=A^{4}$. If $r=5$, $P(t)=d(t+1)(t+2)(t+3)(t+4)/24$ and $P(0)=1$ makes $d=1$; $P(1)=5$. If $r=4$, symmetry makes the middle root double, $P(t)=d(t+1)(t+2)²(t+3)/24$, so $d=2$ and $P(1)=6$. If $r=3$, [F1, F2, F3, F4, F5, step 27.1, construct]

29.1 $P(t)=(d/24)(t+1)(t+2)(t²+3t+12/d)$, so $P(1)=d+3$. [F1, F2, F3, F4, F5, step 28.1, construct]

30.1 If $r=2$, write $u=t+1$; symmetry and $P(-1)=0$ give $P(t)=(d/24)u^{4}+(1-d/24)u²$, so $P(1)=d/2+4$. For a general smooth X∈|rA|, the exact divisor sequence gives $χ(O_{X}(H))=P(1)-P(1-r)=P(1)$, and $H³=r$ d. [F1, F2, F3, F4, F5, step 29.1, construct]

31.1 In dimension three, $r\le 4$ for the same root count. Write $v=A³$. For $r=4$, $P(t)=v(t+1)(t+2)(t+3)/6$, hence $v=1$ and $P(1)=4$. For $r=3$, $P(t)=v(t+1)(t+2)(t+3/2)/6$, hence $v=2$ and $P(1)=5$. For $r=2$, $P(t)=(v/6)(t+1)³+(1-v/6)(t+1)$, so $P(1)=v+2$. For $r=1$, write $u=t+1/2$; oddness and $P(0)=1$ give $P(1)=v/2+3$. No basepoint-free assertion is inferred merely from these Hilbert polynomials. [F1, F2, F3, F4, F5, step 30.1, construct]

32.1 Separate primitive and nonprimitive cases before applying the fundamental-ladder supplier. Let I be the maximal index and B its primitive divisor. The new F2 bridge proves r divides I, $A=(I/r)B$, and $I\le dim+1$. Thus a nonprimitive fourfold case in this Statement necessarily has $r=2$, $I=4$, $A=2B$ and $B⁴=2$; $r\ge 3$ has no nonprimitive case. The bridge gives a smooth Y∈|2B| with $Pic(Y)=ZB$, and a very general smooth anticanonical K3 T∈|2B|Y| with $Pic(T)=ZB_{T}$ and $B_{T}²=8$. Choose Y transverse to the fixed general X∈|4B|, and T also transverse to X∩Y. Then $S=X\cap Y$ belongs to |H| and $C=X\cap T$ belongs to $|H|_{S}|$, while $C\\in  |4B_{T}|$. Smoothness follows from those transverse choices and integrality from the Koszul/adjoint-vanishing connectedness calculation. Apply the K3 bound to the primitive $B_{T}$ with $(s,m)=(4,8)$, giving $BN_{C}\le \sqrt{336}<20=χ(O_{X}(H))$; the last Euler value is step 30.1 with $A⁴=32$. This proves the entire nonprimitive fourfold case. The remaining fourfold calculations concern only maximal-index cases. [F1, F2, F3, F4, F5, step 30.1, step 31.1, construct, algebra]

32.2 Fano-fourfold anticanonical targets. For $r=5,4$ the actual smooth H-ladder gives curves with $g-1=H³=5,8$ respectively. The classical BN bounds are $7/2<5$ and $5<6$. For $r=3$ the required common curve can be realized as C∈|3H| on a smooth del-Pezzo surface with $m=H²=d$. Its bound is $max(d+1,3)<d+3=χ(O_{X}(H))$, for EVERY positive integer d. [F1, F2, F3, F4, F5, step 31.1, construct]

33.1 In the remaining primitive case $r=2$, $H³=2d$ and $χ=d/2+4$; integrality of this Euler value forces d even. When $d\le 4$ the classical bound d+1 is strictly smaller $(d<6)$; no Picard-one K3 claim is needed, including the degree-four double-quadric exception. When $d\ge 6$, the exact geometry supplier is a smooth K3 surface with polarization $H²=d$ and H² dividing every divisor intersection H·D, containing C∈|2H|. The locally proved K3 bound d/2+2 gives the strict gap2. Picard rank one is one sufficient geometric way to supply that divisibility, not a claim that every anticanonical K3 of every Picard-one Fano has it. [F1, F2, F3, F4, F5, step 32.2, construct]

34.1 The exact cyclic cover algebra and ramification class. Let Y be a smooth Fano threefold with $-K_{Y}=rA$. Let $d\ge 2$, d−1 dividing r, and put $k=r/(d-1)$. The cyclic cover is $Spec_{Y}$ of the algebra $\oplus _{j=0}^{d-1}O_{Y}(-jkA)$, with multiplication given by the branch section of $O_{Y}(dkA)$. Its ramification divisor R has $O_{X}(R)=π*O_{Y}(kA)$, so R∈|kH|, $H=π*A$, not |H| unless $k=1$. This follows directly from the tautological covering coordinate, whose dth power is the branch section. The branch B∈|dkA| is isomorphic to R as a smooth variety. $H³=d$ v. Finite-flat pushforward gives $χ(O_{X}(H))=\sum _{j=0}^{d-1}P(1-jk)$. [F1, F2, F3, F4, F5, step 33.1, construct]

35.1 If $k>1$ all $j\ge 1$ terms lie among the negative roots of P, so $χ=P(1)$. If $k=1$ the $j=1$ term is1 and all later terms are negative roots, so $χ=P(1)+1$. Thus: - $r=4,v=1$: $(d,χ,H³)=(2,4,2),(3,4,3),(5,5,5)$. - $r=3,v=2$: $(d,χ,H³)=(2,5,4),(4,6,8)$. - $r=2$: $d=2$ gives $(χ,H³)=(v+2,2v)$; $d=3$ gives(v+3,3v). - $r=1$: $d=2$ gives $(χ,H³)=(v/2+4,2v)$. [F1, F2, F3, F4, F5, step 34.1, construct]

36.1 Every value follows from the actual covering algebra and §1. No source Chern-number table is a premise. [F1, F2, F3, F4, F5, step 35.1, construct]

36.2 For cyclic $r\ge 2$, a nonprimitive decomposition can only be $r=2$, $I=4$, $A=2B$. The primitive $I=4$ ladder makes B and A generated. General A cuts are smooth and transverse to the fixed smooth branch by Bertini on Y and on the branch. Write $v=A³$. If $d=2$, pull back a smooth A-surface and its smooth transverse A-curve. The local equation $z²=f$ makes these pullbacks smooth at the branch; elsewhere the cover is étale. They are ample divisors successively, hence connected and integral. Their curve has $g-1=2v$ by CY adjunction, so the classical F1 bound is $BN\le v+1<v+2=χ$. If $d=3$, choose a smooth S′∈|A| transverse to the branch D∈|3A|. The ramification R≅D lies in |H|, and $C=D\cap S'$ lies in $|H|_{R}|$ and in $|3A|_{S}'|$. Both are smooth and connected ample divisors. Adjunction gives $-K_{S'}=A|S'$, so the del-Pezzo F1 bound gives $BN\le max(v+1,3)<v+3=χ$ for $v\ge 1$. No primitivity is required by that bound. [F1, F2, F3, F4, F5, step 34.1, step 35.1, construct, algebra]

37.1 The corrected smooth curve choice and the full list of BN gaps. In the remaining maximal-index cases, for $k>1$ choose S,C as pullbacks of a smooth fundamental surface A and a smooth A-curve on it, with branch transverse. These have classes H,H|S, so $g(C)-1=dv$ by CY adjunction. The assumption that the branch is general when A has base points is exactly the needed extra transversality/avoidance in those exceptional fundamental systems. F2 supplies that actual smooth ladder; the erroneous ramification divisor is NOT used as a member of |H|. [F1, F2, F3, F4, F5, step 36.1, construct]

38.1 The classical BN bound dv/2+1 gives a strict gap in every $k>1$ case: - $r=4,d=2:2<4$; $r=4,d=3:5/2<4$. - $r=3,d=2:3<5$. - r2,d2: $v+1<v+2$, all v. [F1, F2, F3, F4, F5, step 37.1, construct]

39.1 For $k=1$ the ramification R is genuinely in |H|. Take $S=R\cong B$ and a smooth fundamental S'∈|A| on Y transverse to B; then $C=B\cap S'$ gives $C\\in  |H|_{S}$. If r4 or3, the classical bounds give $7/2<5$ and $5<6$. For r2,d3, S' is a smooth del-Pezzo surface with $-K_{S'}=A|S'$, $m=v$, and $C\\in  |3H_{S'}|$. Hence $BN_{C}\le max(v+1,3)<v+3=χ$. [F1, F2, F3, F4, F5, step 38.1, construct]

40.1 For the remaining primitive r1,d2 case, integrality of v/2+3 forces v even. S' is K3 and C∈|2A|S'|. If $v\le 4$, the classical bound $v+1<v/2+4$ proves the strict gap, including the double-quadric v4 example whose K3 cuts have Picard rank at least two. If $v\ge 6$ and $ρ(Y)=1$, F2 and its exact very-ample/NL supplier supply the actual Picard-divisibility K3 condition. Its bound v/2+2 gives the strict gap2. This is the whole named r1 scope; the source's additional $ρ>1,v6$ gonality case is not needed or asserted here. [F1, F2, F3, F4, F5, step 39.1, construct]

41.1 Finally let $r=1,d=2$ and $A=IB$ with $I\ge 2$ maximal. Since $ρ(Y)=1$, the bridge gives $Pic(Y)=ZB$, I∈{2,3,4}, and a very general smooth anticanonical K3 T∈|IB| with $Pic(T)=ZB_{T}$. Put $w=B³\ge 1$ and $m=B_{T}²=Iw$. The system |A| is generated, including $I=2,w=1$ by its weighted-sextic construction. Choose T also transverse to the fixed branch D∈|2IB|. The ramification R≅D is a smooth member of |H|, and $C=D\cap T$ is a smooth integral member of $|H|_{R}|$ and of |2I $B_{T}|$. Integrality again follows from connectedness by the actual Koszul/vanishing argument. The primitive K3 bound with $s=2I$ gives $BN_{C}²\le I⁶w²/4+2I³w+4I²$. Step 35.1 gives $χ(O_{X}(H))=I³w/2+4$. The square of this positive Euler value minus that BN upper-bound square is 2I³w+16−4I², positive for $I=2,3,4$ and $w\ge 1$ (its respective minima are16,34,80). Hence $BN_{C}<χ(O_{X}(H))$. Together with the preceding cases, this proves the unchanged full Statement for every allowed decomposition, with $a=1$ in all Fano and cyclic cases. [F1, F2, F3, F4, F5, step 35.1, step 36.2, step 40.1, construct, algebra] ∎

## Remarks

The finite necessary-condition loop was replayed locally and returned exactly the thirteen displayed types. Its exact-integer implementation and computed results are retained in research/conformal-field-theory-string-theory-step3-fresh-2026-11-04-weighted-enumeration.py and research/conformal-field-theory-string-theory-step3-fresh-2026-11-04-weighted-enumeration.result.json; this is local computation, not an imported external finite-computation result. Actual source reading and limits are preserved in those notes. The source-standard weighted presentation is explicit; no arbitrary raw-presentation normalization is claimed. This is a research source candidate, not native admission.
