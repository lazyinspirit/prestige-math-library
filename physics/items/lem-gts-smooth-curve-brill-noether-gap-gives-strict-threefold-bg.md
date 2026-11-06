---
id: lem-gts-smooth-curve-brill-noether-gap-gives-strict-threefold-bg
kind: lemma
title: A smooth curve Brill–Noether gap gives strict threefold small-slope BG
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- def-gts-gamma-bmt-and-brill-noether-data
- lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport
- lem-gts-small-slope-counterexample-and-integral-restriction-hn-certificate
- thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
- lem-gts-homogeneous-representations-preserve-slope-semistability
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- def-axiom-of-choice
dependency_roles:
  def-gts-gamma-bmt-and-brill-noether-data: mathematical-premise
  lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport: mathematical-premise
  lem-gts-small-slope-counterexample-and-integral-restriction-hn-certificate: mathematical-premise
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  lem-gts-homogeneous-representations-preserve-slope-semistability: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
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
    locator: Section 3, particularly the smooth-surface branch of the curve reduction;
      dimension-two restriction reconstruction included here
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 6
---

## Statement

Assume AC. Let $X$ be a smooth integral projective complex threefold with $K_X\cong\mathcal O_X$ and $H^1(X,\mathcal O_X)=0$, and let $H$ be ample Cartier. Suppose that for a positive integer $a$, putting $A=aH$, there are smooth integral $S\in|A|$ and $C\in|A|_S|$ with
$$\operatorname{BN}_C<\chi(\mathcal O_X(A)).$$
Then there is $\epsilon_H>0$ such that every ordinary $H$-slope-stable torsion-free coherent sheaf $E$ with $0<\mu_H(E)\le\epsilon_H$ satisfies
$$H\operatorname{ch}_2(E)<-\frac12H^2\operatorname{ch}_1(E).$$
In particular one may choose $\epsilon_H=ae/(2+3e)$, where $h=A^3$, $\eta=(\chi(\mathcal O_X(A))-\operatorname{BN}_C)/2$, $M=\min(1/2,\eta/[4h(h+1)])$, and $e=\min(1/6,M/(2+M),t/(4h+3t))$ for any $t>0$ on which the stable curve-bundle bound $h^0(F)/\operatorname{rk}F\le\chi(\mathcal O_X(A))-\eta$ holds at slopes within $t$ of $g(C)-1=h$. Such a $t$ exists by the definition of $\operatorname{BN}_C$.

## Facts & Assumptions

**Given:** Exactly the smooth threefold, integer multiple, smooth integral surface and curve, and strict curve gap in the Statement. All curve slope factors in the proof are vector bundles on the smooth curve; ordinary surface sheaves may be torsion-free. Work in ZF + AC.

[F1] [[def-gts-gamma-bmt-and-brill-noether-data]] fixes ordinary slope and the near-middle rank-uniform curve Brill–Noether supremum. [[lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport]] supplies actual two-dimensional tilted hearts, rational noetherianity, HN, discriminant/support, finite local vertical classes, real same-object numerical-line transport and large-volume classification. The converse on the two integer lines is proved below.

[F2] [[lem-gts-small-slope-counterexample-and-integral-restriction-hn-certificate]] supplies the actual threefold counterexample and uniform surface-restriction HN certificate. [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]] supplies ordinary numerical BG on smooth surfaces and threefolds. The proof below does not apply the threefold-only certificate to a surface.

[F3] [[lem-gts-homogeneous-representations-preserve-slope-semistability]] supplies tensor semistability for the smooth curve HN factors and their duals. [[thm-grothendieck-riemann-roch-for-projective-morphisms]] supplies the coherent-complex and divisor-immersion Chern/Euler identities through finite locally free resolutions.

[F4] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] supplies the bundle dualities used below, and [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] supplies the surface intersection inequality. Smooth regular-local reflexive sheaves in dimension two are locally free by the depth/Auslander–Buchsbaum construction in F1.

[F5] [[def-axiom-of-choice]] is inherited from the coherent and finite-choice suppliers.

## Proof

1.1  Surface large-volume converse on both sides. Let T be a smooth integral projective surface, L ample Cartier, $h=L^{2}$, and $C_{0}=h rk, C_{1}=L ch_{1}, C_{2}=ch_{2}$. Use the actual surface heart $B_b$ and source slope $(C_{2}−wC_{0})/(C_{1}−bC_{0})$. The smooth-surface tilt supplier gives rational-heart noetherianity, HN, $Δ≥0$, numerical-line transport, local finite classes on positive vertical compact intervals, and the large-volume classification. We also need its converse, which follows directly as follows. [F1, F2, F3, F4, F5, given, construct]

2.1 Let E be an ordinary slope-stable vector bundle and b rational, different from μ(E). Put $a=2w−b^{2}>0$. If $b<μ(E)$, a destabilizing first HN subobject $A⊂E$ is a coherent torsion-free sheaf. The ordinary exact sequence $0→K→A→G→0$ has $K∈F_b$ and $G⊂E$; consequently $μ(A)≤μ(E)$. Equality is possible only if $K=0$ and G has full rank and the same first Chern class, giving $d_b(A)=d_b(E)$. A proper destabilizer has $0<d_b(A)<d_b(E)$: equality of denominators would leave a null quotient, whose surface charge is strictly negative real, making the subobject's phase smaller than the total's. Thus $μ(A)<μ(E)$. Write $x=C_{0}(A)/d_b(A)>C_{0}(E)/d_b(E)=x_E>0$. Since $d_b(A)$ ranges over a fixed discrete set in $(0,d_b(E))$ and $C_{0}(A)$ is a positive multiple of h, the possible x have a uniform positive gap above $x_E$. BG gives the conventional slope bound $λ_a(A)≤1/(2x)−a$ x/2. This decreasing function is, for all sufficiently large a, strictly below $λ_a(E)=ch_{2}^b(E)/d_b(E)−a x_E/2$. This contradicts destabilization. Therefore E is tilt-semistable at b for large w. [F1, F2, F3, F4, F5, step 1.1, construct]

3.1 If $b>μ(E)$, a last HN quotient of E[1] is $Q=G[1]$. Ordinary cohomology gives $0→K→E→G→T→0$ with G torsion-free in $F_b$ and $T∈T_b$. The image I of $E→G$ is nonzero, since otherwise $G=T$ belongs to both torsion-pair parts. Since I is a torsion-free quotient of the stable bundle $E, μ(I)≥μ(E)$; adding T gives $μ(G)≥μ(E)$. Equality forces $K=0, I=E$ and T zero-dimensional. Then G/E is zero-dimensional; reflexivity gives $E⊂G⊂G**=E$, so $G=E$ and the quotient is improper. Hence every proper finite-slope last quotient has $μ(G)>μ(E)$. Null last quotients have phase one and cannot have smaller phase. With $y=C_{0}(G)/d_b(Q)>1/(b−μ(E))=y_E$, the same discrete-denominator argument gives a uniform positive gap. BG gives $λ_a(Q)≥−1/(2y)+a$ y/2, which is eventually strictly above $λ_a(E[1])$; it cannot be a destabilizing last quotient. Thus E[1] is semistable for large w. No surface derived-dual statement is needed. [F1, F2, F3, F4, F5, step 2.1, construct]

4.1 For an ordinary stable torsion-free E rather than a bundle, the b<μ argument is identical. The b>μ assertion is only used after replacing E by its reflexive hull, which is locally free on a smooth surface by the actual surface regular-local/Auslander–Buchsbaum argument. [F1, F2, F3, F4, F5, step 3.1, construct]

5.1 Actual dimension-two minimal counterexample. Fix $0<e<1/3$ and put $m=2e/(1−e)$. Define the continuous function f by $f(x)=−x/2$ for $0≤x≤e, f(x)=(1+e)x/[2(1−e)]−e/(1−e)$ for $e≤x≤m$, and $f(x)=x^{2}/2$ for $x≥m$. Suppose an ordinary stable torsion-free sheaf A has $0<μ(A)≤e$ and $C_{2}(A)≥−C_{1}(A)/2$. Form the set of positive-rank derived classes E with $0<μ≤m, C_{2}/C_{0}≥f(μ)$, represented either by a semistable $E∈B_{0}$ at $w>0$ or by semistable $E[1]∈B_{1}$ at $w>1/2$. Section 1 makes this set nonempty. Choose its lexicographic minimum $(Δ,C_{1})$, where Δ is a nonnegative integer and $C_{1}$ a positive integer. [F1, F2, F3, F4, F5, step 4.1, construct]

6.1 Here are the complete descent inequalities. The ratio f(x)/x is nondecreasing on (0,m]. Thus a numerical line from $(μ,y≥f(μ))$ to (0,w), $w>0$, remains on or above f at every $0<x≤μ$. The ratio (f(x)−1/2)/(1−x) is nonincreasing on [0,1): its three pieces are −(1+x)/[2(1−x)], the constant −(1+e)/[2(1−e)], and −(1+x)/2. Thus a line toward (1,w), $w>1/2$, remains above f for $μ≤x<1$; for $x≥m$ and $x>μ$ it is strictly above the parabola and cannot carry a semistable class. [F1, F2, F3, F4, F5, step 5.1, construct]

7.1 At $b=0$, an equal-finite-phase binary split has two positive denominators whose $C_{1}$ add to $C_{1}(E)$. Positive-rank factors have total rank at least the total rank; their positive $C_{1}$ have sum at most the total $C_{1}$. Hence some positive-rank factor has slope in (0,μ(E)]. The preceding graph inequality places it in the same minimizing set. At $b=1$, apply the same average to the negative-rank factors of E[1], using their denominators $R_i(1−μ_i)$: one factor has $μ_i≥μ(E)$, and the second graph inequality and $Δ≥0$ force $μ_i≤m$. Undoing its shift again gives an element of the same set. [F1, F2, F3, F4, F5, step 6.1, construct]

8.1 For a fixed finite-phase ray the discriminant has the forward Lorentz-cone form supplied by surface tilt BG. Thus each positive-denominator factor has strictly smaller Δ than its sum, except when both factors are proportional null vectors. In that exceptional case its positive C₁ is strictly smaller than C₁(E). Both cases contradict the lexicographic minimum. There is therefore no equal-finite-phase split at either vertical line. The rational vertical finite-class argument makes the semistable set locally open; it is closed as an intersection of subobject inequalities. A minimum represented at one point of either line is therefore semistable on that entire positive vertical line. [F1, F2, F3, F4, F5, step 7.1, construct]

9.1 The actual large-volume classification gives an ordinary semistable torsion-free sheaf F, with a possible zero-dimensional cohomology defect when the initial representative was E[1]. Removing that defect increases $C_{2}/C_{0}$. In an ordinary stable-factor filtration choose a factor with $C_{2}/C_{0}$ at least the average. Its Δ is at most its squared rank fraction times the original Δ; a proper fraction strictly lowers Δ, or lowers $C_{1}$ when $Δ=0$. Minimality therefore permits an ordinary stable representative. Its reflexive hull remains stable and increases $C_{2}$ by the length of its zero-dimensional quotient. Minimality permits this replacement too. It is now a vector bundle E, with $0<μ≤m$ and $y=C_{2}/C_{0}≥−μ/2$. Section 1 puts E[1] on the $b=1$ line for large w, and the same descent makes it semistable there for all $w>1/2$. Thus E and E(−L)[1] are both semistable in $B_{0}$ for every $w>0$. This establishes the required certificate within surface tilt theory. [F1, F2, F3, F4, F5, step 8.1, construct]

10.1 Restriction to the smooth curve, with the actual degree normalization. Let C∈|L| be smooth integral. Since E is a bundle, restriction gives the B₀ exact sequence 0→E→i_*(E|C)→E(−L)[1]→0. Its endpoint slopes are l(w)=(y−w)/μ and u(w)=(w−y+μ−1/2)/(1−μ). For a vector bundle G on C, GRR for the actual closed immersion gives C₁(i_*G)=h rk G and C₂(i_*G)=deg G−h rk G/2. Thus its tilt slope is deg G/(h rk G)−1/2; ordinary curve slope is degree/rank, and the normalized curve slope is the latter divided by h. [F1, F2, F3, F4, F5, step 9.1, construct]

11.1 The endpoints coincide at $w_{0}=y−μ^{2}+μ/2$. If $w_{0}>0$, their extension is semistable there, and every ordinary curve subbundle and quotient pushes to a $B_{0}$ subobject or quotient. Hence E|C is slope-semistable. If $w_{0}≤0$, then $l(w)≤u(w)$ for all $w>0$; finite HN and phase orthogonality put all HN slopes of the extension between these endpoints. Apply this to the maximal ordinary curve HN subbundle and minimal ordinary curve HN quotient, and let w decrease to zero. One obtains [F1, F2, F3, F4, F5, step 10.1, construct]

12.1 0≤μ_min(E|C)/h,     μ_max(E|C)/h≤μ/(1−μ)≤2e/(1−3e). [F1, F2, F3, F4, F5, step 11.1, construct]

13.1 Together with the w₀>0 case this proves, on the surface itself, the uniform small-interval restriction certificate needed by the smooth numerical contradiction. [F1, F2, F3, F4, F5, step 12.1, construct]

14.1 Curve gap gives strict surface BG. Now assume $K_T=L$ and $B=BN_C<χ=χ(O_T)$. Put $η=(χ−B)/2>0$ and choose $t>0$ such that every semistable curve bundle whose slope differs from $h=g(C)−1$ by less than t has $h^{0}/rk≤χ−η$. This follows directly from the definition of BN and finite stable-factor filtrations. [F1, F2, F3, F4, F5, step 13.1, construct]

15.1 Set M=min(1/2,η/[4h(h+1)]) and. e=min(1/6, M/(2+M), t/(4h+3t)). [F1, F2, F3, F4, F5, step 14.1, construct]

16.1 Suppose strict $BG_{2}(e)$ fails. Sections 2–3 give a stable vector bundle E with $0<μ≤2e/(1−e)≤M, ch_{2}(E)≥−L c_{1}(E)/2$ and curve HN slopes in $[0,2he/(1−3e)]⊂[0,t/2]$. The installed homogeneous-representation lemma gives semistability of each tensor HN factor $F_i⊗F_j*$ on the smooth curve. Their L twists have slopes within t of h. Hence $h^{0}(\operatorname{End}(E|C)(L))≤(χ−η)r^{2}$. [F1, F2, F3, F4, F5, step 15.1, construct]

17.1 Stability gives $\operatorname{Hom}(E,E)=C$. Surface Serre duality, the restriction sequence for End E(L), actual GRR for End E, and Hodge index give, with $D=L c_{1}(E)>0$ and $q=ch_{2}(E)$, [F1, F2, F3, F4, F5, step 16.1, construct]

18.1 χr²−(c₁(E)²−2rq)=χ(E,E) ≤2+h⁰(End(E|C)(L))≤2+(χ−η)r², c₁(E)²≤D²/h. [F1, F2, F3, F4, F5, step 17.1, construct]

19.1 Consequently q/(hr)≤μ²/2−η/(2h)+1/(hr²). The positive integer D forces r≥1/(hμ), so 1/(hr²)≤hμ². Therefore [F1, F2, F3, F4, F5, step 18.1, construct]

20.1 q/(hr)+μ/2≤(h+1/2)μ²+μ/2−η/(2h) ≤(h+1)M−η/(2h)≤−η/(4h)<0,. contradicting q≥−D/2. Thus BG₂(e) holds for all stable torsion-free sheaves, since passage to the stable reflexive hull only increases ch₂. [F1, F2, F3, F4, F5, step 19.1, construct]

21.1 Smooth surface gap gives the actual threefold BG input. Let X be a smooth projective CY threefold, H ample Cartier, $A=aH$ with positive integer a. Suppose $S∈|A|$ and $C∈|A|_S|$ are smooth integral and $BN_C<χ(O_X(A))$. Adjunction gives $K_S=A|S$ and $g(C)−1=A^{3}$; the divisor sequence and CY Serre duality give $χ(O_S)=χ(O_X(A))$. Section 4 supplies $BG_{2}(e)$ on S. Ordinary smooth-surface BG and Hodge index give $ch_{2}≤0$ for slope-zero stable factors. [F1, F2, F3, F4, F5, step 20.1, construct]

22.1 Choose $ε=e/(2+3e)$, so $2ε/(1−3ε)=e$. The actual threefold small-slope restriction certificate, applied to a failed $BG_{3}^A(ε)$, gives a reflexive stable E whose torsion-free restriction to S has all normalized HN slopes in [0,e]. Add the strict $BG_{2}$ inequalities of its positive-slope stable factors and the nonpositive inequalities of its zero-slope factors. At least one slope is positive. Their sum is $ch_{2}(E|S)<−c_{1}(E|S)A|S/2$, contradicting the certificate's $ch_{2}(E)A≥−c_{1}(E)A^{2}/2$. The restriction identities follow because E is torsion-free and S Cartier, so $Tor_{1}(E,O_S)=0$; the restricted locally free resolution computes the same Chern character. [F1, F2, F3, F4, F5, step 21.1, construct]

23.1 Hence BG₃^A(ε) holds. Returning to H gives μ_A=μ_H/a and ch₂(E)H<−a c₁(E)H²/2 whenever 0<μ_H≤aε. Since a≥1, this implies the desired strict BG₃^H(aε). This completes the smooth curve-gap reduction used by all thirteen weighted rows and by every smooth Fano/cyclic ladder row. It assumes no singular-surface RR or singular curve tensor theorem. [F1, F2, F3, F4, F5, step 22.1, construct] ∎

## Remarks

This is a research-only source candidate. The full named-family claim additionally requires its actual smooth family ladders; none is inferred from the strict numerical curve gap. The dimension-two restriction certificate is reconstructed here. The actual source-reading limits are recorded in the companion research note; no additional full-text reading is claimed.
