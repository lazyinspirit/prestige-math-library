---
id: lem-gts-k3-and-del-pezzo-curve-brill-noether-bounds
kind: lemma
title: K3 and del-Pezzo curve Brill–Noether bounds from actual boundary evaluation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- def-derived-category-of-an-abelian-category
- lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport
- thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport: mathematical-premise
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Feyzbakhsh, Koseki, Liu and Rekuski, Stability conditions on Calabi–Yau
      threefolds via Brill–Noether theory of curves
    url: https://arxiv.org/pdf/2509.24990v2
    locator: Propositions4.6,4.10,4.11; the curve bounds are reconstructed locally
  - title: Soheyla Feyzbakhsh, Mukai’s program via wall-crossing
    url: https://arxiv.org/pdf/1710.06692v2
    locator: Lemmas3.1–3.2 and Proposition3.4(a); background geometric-stability inputs
      replaced by the local short HRS construction
  - title: Chunyi Li, On stability conditions for the quintic threefold
    url: https://arxiv.org/pdf/1810.03434v2
    locator: Lemma4.8, read completely and reconstructed with the actual surface theory
verification:
  precheck: pending
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
dependency_level: 4
---

## Statement

Assume AC and work over $\mathbb C$ throughout. For a smooth connected projective curve $C$, let $\operatorname{BN}_C$ be the limsup of $h^0(E)/\operatorname{rk}E$ over stable bundles whose slope tends to $g(C)-1$. Let $S$ be a smooth connected projective K3 surface, meaning $\omega_S\cong\mathcal O_S$ and $H^1(S,\mathcal O_S)=0$, and let $H$ be ample Cartier with $m=H^2$ and $m\mid H\cdot D$ for every divisor $D$. If $C\in|sH|$ is smooth integral, $s\ge1$, then
$$\operatorname{BN}_C\le\frac{s}{8}\sqrt{(2m+8)^2+(s^2-4)m^2}.$$
In particular $s=2$ gives $m/2+2$, and $(s,m)=(4,2)$ gives $\sqrt{48}$. If instead $S$ is a smooth connected del-Pezzo surface, $H=-K_S$, and $C\in|3H|$ is smooth integral, then
$$\operatorname{BN}_C\le\max\{m+1,3\}.$$
No existence of such a surface or curve in an unspecified family is asserted; these geometric inputs are checked in the consuming named-family theorem.

## Facts & Assumptions

**Given:** The smooth surfaces, polarizations and smooth integral curves of the Statement. BN means the same limsup over stable bundles at slope g(C)−1. C0=m rk, C1=Hch1, C2=ch2; for $C1>0$ the reduced BN slope is C2/C1. Work in ZF+AC.

[F1] [[def-derived-category-of-an-abelian-category]] fixes derived complexes. [[lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport]] supplies the ACTUAL smooth-surface tilted hearts, rational noetherianity, finite HN/Δ≥0 for $w>b²/2$, real same-object/same-map transport on numerical lines, and O[1] stability for rational $b>0$. Its scope is genuinely two-dimensional. The short below-parabola K3 extension needed here is constructed in this proof.

[F2] [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]] supplies ordinary smooth-surface BG. [[thm-grothendieck-riemann-roch-for-projective-morphisms]] for S→point gives the actual coherent-complex Euler identities, beyond the line-bundle-only RR theorem. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] and finite locally free resolutions supply surface Serre duality.

[F3] [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives c1²≤(Hc1)²/m. [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] with $N=−K$ supplies $H>0$ cohomology vanishing on a del-Pezzo surface, hence χ(O)=1 and H1(O)=0.

[F4] [[def-axiom-of-choice]] is the inherited ambient premise. No singular-surface extension is assumed.

## Proof

1.1 Surface Euler and Mukai estimates actually used. On a K3 surface χ(O)=2 and $K=0$. For v(E)=(r,c,r+x), GRR gives χ(E,F)=−v(E)·v(F), where v·v'=c c'−r(r'+x')−r'(r+x). A stable object in a finite-phase semistable category has $\operatorname{End}=C$; Serre duality gives Ext²=C and negative/above-two Ext vanish. Hence v²≥−2. For semistable E whose $C1>0$ stable factors have integral C1≥m (assume H² divides H·D for every divisor D), the finite Jordan–Hölder length is at most y/m. Any two such stable factors have Mukai pairing at least−2, by Hom/Serre and Ext¹≥0. Therefore v(E)²≥−2(y/m)². Hodge index gives c²≤y²/m. [F1, F2, F3, F4, given, algebra]

2.1 On a del-Pezzo surface take $H=−K, m=H²$. Adjoint vanishing gives χ(O)=1. GRR gives χ(F)=r+y/2+x and χ(F,F)=r²+2rx−c². If F is an ORDINARY slope-stable torsion-free sheaf, Hom(F,F(−H))=0 by the strictly smaller slope. Thus Ext²(F,F)=0 and χ(F,F)≤1, whence x≤(y²/m+1−r²)/(2r). This estimate uses ordinary stability only; it does not presume that every BN object is a slope-stable sheaf. [F1, F2, F3, F4, step 1.1, algebra]

3.1 An explicit HRS comparison on a short line through the origin. Fix a finite reduced slope ν and put $L=x−ν y$. For $b<0, B_0$ is the HRS tilt of $B_b$ replacing the ordinary-slope interval (b,0] by its shift[1]. This follows directly by splitting each ordinary HN filtration at b and0. Call that interval category G. Suppose every object of G has L≤0, with equality possible only for sums of O. For $E∈B_0$ which is BN-semistable for all small $w>0$, one has L(A)≤0 for every subobject A⊂E in $B_0$, and E has no nonzero zero-denominator subobject. Its shifted G-part in the HRS truncation would have L≥0, strictly positive unless a sum of O[1]; the latter is zero-denominator. Both possibilities are excluded. Therefore E belongs to the common part of $B_0$ and $B_b$. [F1, F2, F3, F4, step 2.1, algebra]

4.1 For a subobject A⊂E in $B_b$, its $B_0$ truncation gives t(A)⊂E with quotient $G_A∈G$ and $L(A)=L(t(A))+L(G_A)≤0$. Thus E is semistable at any actual stability function on the line $w=bν$. Conversely for an object in the common part, a $B_0$ subobject is an old-heart subobject modulo a G-kernel; its L is at most that of the old image. This proves the other semistability direction. These are the exact HRS kernel/image sequences, not an appeal to a deformation theorem. [F1, F2, F3, F4, step 3.1, algebra]

5.1 The same argument transports any $L=0$ stable factor on that line towards $b=0$ provided it is not O: its G-quotient has $L=0$, hence is a sum of O; Hom to O vanishes between distinct stable objects of the same phase. It therefore stays in all the intervening hearts and its limiting C1 is nonnegative. [F1, F2, F3, F4, step 4.1, algebra]

6.1 O itself is stable on the line whenever Z is a stability function there. In $B_0$ it is O[1] shifted down; the $B_0$ cohomology sequence for a subobject A⊂O in $B_b$ forces A∈G. Equality L(A)=0 makes A a sum of O, and its injection into O is a constant matrix of rank at most one. Thus no proper nonzero subobject has equal phase, and every other subobject has smaller phase. [F1, F2, F3, F4, step 5.1, algebra]

7.1 For ν<0, ordinary BG makes L(F)/(m r)≤μ²/2−νμ<0 for b<μ<0 and b sufficiently close to0. At slope0, equality in $L=ch2$ occurs only for sums of O in our two surface cases: the ordinary stable-factor Euler bound in §1 forces rank1 and numerically trivial c1, then absence of a 0D defect makes it a numerically trivial line bundle. Such a line bundle is O: otherwise it and its inverse have no section, contradicting χ=2 on K3; on del Pezzo χ=1 and its K-twisted inverse has negative H-degree, giving the same contradiction. Extensions split because H¹(O)=0. Consequently the preceding comparison is available with $w=bν> b²/2$, using the actual supplied surface stability functions. [F1, F2, F3, F4, step 6.1, algebra]

8.1 The K3 extension through the structure-sheaf boundary. For K3 we also need ν≥0, when $w=bν$ may be negative. This is constructed directly. Choose $b=−1/k, k$ arbitrarily large. Every ordinary stable factor of slope b has rank at least k, since Hc1/m is integral. Its Mukai inequality gives ch2/(m r) ≤ b²/2−1/m+1/(m r²) ≤ b²/2−1/m+1/(m k²). [F1, F2, F3, F4, step 7.1, algebra]

9.1 Choose k so large that $w=bν$ is strictly greater than the rightmost expression. The same bound adds over ordinary slope-stable factors. Thus every nonzero zero-imaginary-part object of $B_b$ has negative real Z: its ordinary-slope-b part contributes ch2(F)−w m r(F)<0, and its 0D part contributes minus its positive length. Hence Z is an actual stability function on the same Noetherian heart $B_b$. It has HN: the imaginary part is a discrete nonnegative group; in a descending chain with strictly increasing phase it eventually stays constant, making each nonzero quotient have phase1 and contradicting the phase increase. Ascending kernels of quotient chains stop by noetherianity. The seesaw construction of a maximal destabilizing term and its successive quotient therefore terminates under these two chain conditions. Finite-phase semistable objects have finite length since their positive discrete imaginary parts add. No support/deformation theorem outside the supplied domain has been presumed. [F1, F2, F3, F4, step 8.1, algebra]

10.1 For the HRS comparison, choose δ>0 so small that (m/2+1)δ²+|ν|mδ<1. If −δ<μ<0, integrality Hc1/m implies r≥1/δ, and the ordinary Mukai bound gives $L(F)/r ≤(m/2+1)δ²+|ν|mδ−1<0$. [F1, F2, F3, F4, step 9.1, algebra]

11.1 At μ=0 the equality case is again only O, by the same Mukai calculation and the numerically-trivial-line-bundle Euler argument in §2. Thus §2 transports the given BN E to this actual rational stability function and makes O stable of the same phase. This proves the required boundary extension algebraically; neither the K3 stability manifold nor an externally imported root-avoidance theorem is a premise. [F1, F2, F3, F4, step 10.1, algebra]

12.1 The K3 evaluation estimate. At the stability function constructed above put $N=hom(O,E)$. In the finite-length phase category, the evaluation $O^N→E$ is injective: its kernel is a subobject of a direct sum of the simple O, and a nonzero O-summand would be a linear relation between the chosen independent sections. Its cokernel is semistable in the same phase. Remove its i0 factors isomorphic to O. Every remaining stable factor has $C1>0$. Indeed it transports to $b=0$ by §2. If C1=0, the same-phase equation gives $x=0$; positive imaginary part at $b<0$ forces $r>0$. Mukai ≥−2 and Hodge c1²≤0 force $r=1,c1²=0$, so c1 is numerically trivial and χ(O,A)=2. A distinct same-phase stable object with these numerical data would have χ(O,A)=2 but Hom both ways and Ext² zero, contradiction. Thus it was O after all. [F1, F2, F3, F4, step 11.1, algebra]

13.1 There are therefore at most y/m remaining factors, and [F1, F2, F3, F4, step 12.1, algebra]

14.1 (v(E)−(N+i0)v(O))² ≥−2(y/m)². [F1, F2, F3, F4, step 13.1, algebra]

15.1 Solving the resulting quadratic for N+i0 and using c1(E)²≤y²/m gives h0(E)≤r+x/2+1/2 sqrt(x²+(2m+4)y²/m²) = r+Ω(x,y). [F1, F2, F3, F4, step 14.1, algebra]

16.1 This holds for every finite-slope BN-semistable E, for both signs of ν. All coefficient and rank terms have been retained; Ω alone does NOT bound h0 of an individual positive-rank object. The rank terms cancel only when summed over the factors of a rank-zero curve pushforward. [F1, F2, F3, F4, step 15.1, algebra]

17.1 The del-Pezzo evaluation estimates. For ν>−1/2, the stable object O(−H)[1] has limiting slope−1/2. It is stable for the required parameters because twisting O[1] from $b+1>0$ preserves the sign of every slope difference, with w shifted by b+1/2. Hence Hom(E,O(−H)[1])=0 for BN E of slope greater than−1/2. Serre duality and the heart also kill every other nonzero cohomological degree except zero. Thus h0(E)=χ(E)=r+x+y/2. [F1, F2, F3, F4, step 16.1, algebra]

18.1 For ν≤−1/2 use §2 to put E and O in the same actual phase on $w=bν>b²/2$. Again the evaluation is injective and its cone F is semistable in that heart, with (r(F),y(F),x(F))=(r−N,y,x). It is also an object of $B_0$, since $0→E→F→O[1]^N→0$ is an exact heart sequence there. If ν=−n/2, the actual supplied tilt discriminant of F gives 0≤y²−2m(r−N)x, [F1, F2, F3, F4, step 17.1, algebra]

19.1 hence N≤r+y/(m n). [F1, F2, F3, F4, step 18.1, algebra]

20.1 If −(n+1)/2<ν<−n/2, the line bundles O(−nH)[1] and O(−(n+1)H)[1] are stable at the chosen small negative b: twisting from the supplied O[1] statement gives the same positive distance w−b²/2. Their phases lie respectively above and below F. Serre duality $K=−H$ consequently puts RHom(O(−nH),F) in degree zero alone. Therefore [F1, F2, F3, F4, step 19.1, algebra]

21.1 0≤χ(F(nH)) =x+(n+1/2)y+[1+m n(n+1)/2](r−N), [F1, F2, F3, F4, step 20.1, algebra]

22.1 which gives N≤r+[2x+(2n+1)y]/[m n(n+1)+2]. Together these prove the entire piecewise homogeneous bound r+Ψ(x,y) used below. At each exceptional slope−n/2 the one-sided limits of Ψ/y are at most1/(m n): the adjacent values are (n−1)/[(n²−n)m+2] and (n+1)/[(n²+n)m+2]. This explicitly proves the upper semicontinuity needed in a BN limsup. [F1, F2, F3, F4, step 21.1, algebra]

23.1 Curve pushforward: an independent uniform large-volume estimate. Let C∈|sH| be smooth integral and $E_C$ slope-stable of rank R and slope μ. GRR for the embedding gives $ch(i_*E_C)=(0,RsH,d−R s²m/2)$. Put ν=d/(R s m)−s/2. For a subobject $A⊂i_*E_C$ in $B_0, A$ is coherent. Its kernel sheaf F in Coh(S) belongs to $F_0$, its torsion T injects into $i_*E_C$, and $A_{tf}(−C)$ injects into F: multiplication by the defining section of C kills the curve image and kills precisely the torsion of A. Thus every ordinary HN slope of $A_{tf}$ is in (0,s]. Ordinary BG gives $x(A_{tf})≤m$ s² $rk(A_{tf})/2$. Curve stability gives x(T)≤ν y(T). Since $y(A_{tf})≤m s rk(A_{tf})$, for [F1, F2, F3, F4, step 22.1, algebra]

24.1 $w > s²/2+s \operatorname{max}(−ν,0)$ [F1, F2, F3, F4, step 23.1, algebra]

25.1 every positive-rank subobject has $ν_w(A)<ν_w(i_*E_C)$. A rank-zero subobject is a proper curve subsheaf and has strictly smaller reduced slope by stability, including a full-rank subsheaf of positive colength. Therefore the pushforward is actually stable at all such large w. No asymptotic wall theorem is used here. [F1, F2, F3, F4, step 24.1, algebra]

26.1 Boundary HN finiteness, with the Fano rank issue kept explicit. The pushforward has no zero-denominator subobject in $B_0$: a coherent subobject with C1=0 would be zero-dimensional and violates purity. For K3, a possible finite-phase HN first factor has $0<y1≤y$ and Mukai square≥−2(y1/m)², so r1(r1+x1) is bounded. If r1 and r1+x1 have the same nonzero sign, their integral product bounds both. If r1≥0,r1+x1≤0, its phase being at least the total phase gives a lower bound on x1−w m r1 and hence bounds r1 and−(r1+x1). If r1≤0,r1+x1≥0, its phase as a subobject is bounded above by the HN maximum at one fixed w0, giving x1−w0m r1=(r1+x1)+|r1|(1+w0m) bounded above. Thus the possible triples are finite uniformly down to $w=0$. [F1, F2, F3, F4, step 25.1, algebra]

27.1 For del Pezzo, do NOT replace this by the bare inequality r x≤const, which alone does not bound the positive-rank/negative-ch2 region. Instead any coherent heart subobject $A⊂i_*E_C$ has torsion $T⊂i_*E_C$ and $A_{tf}$ with all positive ordinary slopes. Its ordinary stable factors have $y_j≥1$. Section1 gives $x(A_{tf})≤[y(A_{tf})²/m+y(A_{tf})−rk(A_{tf})]/2$. [F1, F2, F3, F4, step 26.1, algebra]

28.1 Here $\sum y_j²≤(\sum y_j)²$ and the number of factors is at most $\sum y_j$. Together with x(T)≤ν y(T), this bounds rk(A) above once x(A) is bounded below. For a possible HN first factor the lower bound comes from its phase being at least the total phase. For a later factor, lift it to a coherent subobject of the original curve pushforward; the preceding already-fixed factor classes give a fixed lower rank bound, and the same phase bound gives a uniform lower x bound. Thus the triples for every successive factor are finite here too. [F1, F2, F3, F4, step 27.1, algebra]

29.1 For either surface, finite possible affine phase functions have only finitely many crossings near zero. The maximum-phase subobjects are unique (take the sum of equal maximum-phase subobjects); with their ordering fixed they are the same actual objects. Quotients have no zero-denominator subobject, otherwise its preimage would have higher phase than the chosen first term. Induction on the positive integral C1, which strictly decreases, constructs one fixed finite HN filtration for all sufficiently small $w>0$. The identical rank/phase argument on compact positive-w intervals, using Δ≥0, a positive lower w bound, and a fixed-w0 upper phase bound, gives only finitely many HN refinements between that interval and the explicit large-volume region. This proves the needed boundary finiteness rather than citing it for arbitrary surfaces. [F1, F2, F3, F4, step 28.1, algebra]

30.1 First-wall width and the exact BN-slope envelope. At an actual first wall for $i_*E_C$, the sequence $A→i_*E_C→B$ has coherent cohomology $0→F→A→i_*E_C→G→0$. If $l=rk(A)=rk(F)=0$ it cannot be a wall, by curve stability. Write y(T)=a s m and y(G)=c s m; the generic curve ranks give R−c≤l+a, because $A_{tf}$ has generic restriction rank l and T rank a. Hence [F1, F2, F3, F4, step 29.1, algebra]

31.1 $μ(A_{tf})−μ(F)=(R−c−a)s/l≤s$. [F1, F2, F3, F4, step 30.1, algebra]

32.1 The numerical wall line $w=ν b+w0$ has parabola intersections $b1<0<b2$. Actual same-object/same-map transport along this line puts $A_{tf}$ in $T_b$ and F in $F_b$ for every b∈(b1,b2). Taking limits gives $μ(A_{tf})≥b2$ and μ(F)≤b1. Thus b2−b1≤s. [F1, F2, F3, F4, step 31.1, algebra]

33.1 Every later refinement of the leading coherent factor has its right parabola endpoint at most b2. Indeed its new line passes through the old factor's numerical point, whose b-coordinate is at least the old right endpoint; lowering its intercept makes its value at that endpoint at most the parabola. If the parent has rank zero the new lines are parallel and lowered, giving the same inclusion. A rank-positive leading factor with numerical point μ≥the endpoint has reduced BN slope $ν_{line}+w_{line}/μ≤endpoint/2$; a rank-zero leading factor has $ν_{line}=(left+right)/2≤right/2$. The trailing quotients have H0 supported on C and nonpositive rank; the reflected argument bounds their left endpoints below by b1. The finite refinement construction in §7 makes this an actual finite induction, not a limiting-wall assumption. [F1, F2, F3, F4, step 32.1, algebra]

34.1 Since b1+b2=2ν and b2−b1≤s, the boundary HN factors therefore have reduced slopes in [F1, F2, F3, F4, step 33.1, algebra]

35.1 [ν/2−s/4, ν/2+s/4]. [F1, F2, F3, F4, step 34.1, algebra]

36.1 If there is no wall, the single slopeν lies in this interval whenever |ν|≤s/2, the only case used near the middle degree. In terms of the curve slope μ this is exactly [(2ν−s)/4,(2ν+s)/4]. [F1, F2, F3, F4, step 35.1, algebra]

37.1 The K3 curve bound by a one-variable secant estimate. On K3, g(C)−1=s²m/2. At μ=g−1 the total pushforward has $x=0,y=R s m$, and §8 bounds every factor slope $t=x_j/y_j\text{ in }[−s/4,s/4]$. Summing §4 cancels the ranks and gives $h0(E_C)≤\sum [x_j/2+1/2 sqrt(x_j²+a y_j²)], a=(2m+4)/m²$. [F1, F2, F3, F4, step 36.1, algebra]

38.1 Since sqrt(t²+a)≤sqrt(s²/16+a) throughout that interval, this is at most R s/8 sqrt(s²m²+32m+64). For μ near g−1, the endpoint slopes and their convex secant bound vary continuously; the same inequality holds with an error R O(|μ−(g−1)|). Its constant depends only on(s,m), not on R. Taking the defining limsup proves [F1, F2, F3, F4, step 37.1, algebra]

39.1 $BN_C≤s/8$ sqrt((2m+8)²+(s²−4)m²). [F1, F2, F3, F4, step 38.1, algebra]

40.1 Thus $s=2$ gives m/2+2 and (s,m)=(4,2) gives sqrt(48), exactly the two kinds needed by the named cases. No polygon-maximization theorem is imported. [F1, F2, F3, F4, step 39.1, algebra]

41.1 The del-Pezzo $s=3$ bound by an explicit affine majorant. For C∈|3H|, g−1=3m. At the middle degree the total reduced slope is−1/2, total $y=3Rm$, and the factor slopes lie in[−1,1/2]. Put φ(t)=Ψ(t,1). On this interval it is t+1/2 for t>−1/2, equals1/m at−1/2, equals(2t+3)/(2m+2) for $−1<t<−1/2$, and equals1/(2m) at−1. [F1, F2, F3, F4, step 40.1, algebra]

42.1 If m≥2, the affine line through (−1,1/(2m)) and (1/2,1) majorizes φ on every linear piece and at its jump: at−1/2 it has value(m+1)/(3m)≥1/m. Its weighted value at the mean slope−1/2 therefore gives ΣΨ≤R(m+1). If 1≤m≤2, the line (t+1/2)/2+1/m majorizes all the same pieces (check just their endpoints and the exceptional slopes); it gives ΣΨ≤3R. These are exact elementary linear inequalities. The rank terms again cancel in the curve pushforward. [F1, F2, F3, F4, step 41.1, algebra]

43.1 For neighboring μ the slope interval only expands by O(|μ−(g−1)|). The explicit one-sided limits in §5 are BELOW the exceptional values, so the same affine majorants fail by at most O(|μ−(g−1)|), uniformly in rank. Taking the defining limsup proves [F1, F2, F3, F4, step 42.1, algebra]

44.1 $BN_C≤\max\{m+1,3\}$. [F1, F2, F3, F4, step 43.1, algebra]

45.1 This supplies the del-Pezzo curve estimate needed by index3 Fano-fourfold anticanonical sections and the degree3 cyclic cover of an index2 Fano threefold. [F1, F2, F3, F4, step 44.1, algebra] ∎

## Remarks

The proof constructs the O-wall evaluation, the below-parabola K3 positivity extension, uniform large-volume curve stability, finite boundary HN, first-wall-width envelope, and elementary one-variable majorants. It does not import a K3 stability-manifold or polygon-maximization theorem. Actual reading: Feyzbakhsh Lemmas3.1–3.2 and Proposition3.4(a), statement/beginning of3.4(b), complete Li Lemma4.8, and the complete FKLLR propositions cited. The existence of suitable Picard-divisibility K3 surfaces remains the exact separate family-geometry obligation.
