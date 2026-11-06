---
id: lem-gts-full-gamma-bmt-propagation-from-vertical-boundary
kind: lemma
title: "Full Gamma BMT propagation from the closed vertical boundary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
  - lem-gts-rational-tilt-discriminant-and-numerical-support
  - lem-gts-exact-numerical-wall-line-transport
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
  - lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary
dependency_roles:
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart: mathematical-premise
  lem-gts-rational-tilt-discriminant-and-numerical-support: mathematical-premise
  lem-gts-exact-numerical-wall-line-transport: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary: mathematical-premise
proof_strategy: direct
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
    - title: "Bayer, Macrì and Stellari, The space of stability conditions on abelian threefolds, and on some Calabi–Yau threefolds"
      url: https://arxiv.org/pdf/1410.1585v2
      locator: "§§2–3 in full, printed pp.7–13, especially the rational discriminant induction and Lemma 3.9/Corollary 3.10. The closed vertical and Gamma propagation arguments are reconstructed locally."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-full-gamma-bmt-propagation-from-vertical-boundary.md
dependency_level: 5
---

## Statement

Let $X$ be a smooth integral projective complex threefold, $H$ an ample Cartier divisor, $v=H^3$, and suppose $K_X$ is numerically trivial. Assume the Axiom of Choice, as used in the coherent-heart suppliers. Put $C_0=v\operatorname{rk}$, $C_1=H^2\operatorname{ch}_1$, $C_2=H\operatorname{ch}_2$, and $\Delta=C_1^2-2C_0C_2$. Let $\mathcal B_b$ be the first slope heart and use the source slope $\nu_{b,w}=(C_2-wC_0)/(C_1-bC_0)$, with slope $+\infty$ on zero denominators. Ordinary sheaf BG is supplied by [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]]. Assume the additional strict ordinary condition $\mathrm{BG}_3(\epsilon)$ for some $\epsilon>0$: every $\mu_H$-stable torsion-free coherent sheaf $F$ with $0<\mu_H(F)=C_1(F)/C_0(F)\le\epsilon$ satisfies $C_2(F)<-C_1(F)/2$. This strict condition is a hypothesis here and is not asserted for arbitrary threefolds.

Set $t_0=\operatorname{td}_2(X)H/v$, choose rational $\gamma\ge4/(v\epsilon)+|t_0|$, and put $\Gamma=\gamma H^2-\operatorname{td}_2(X)$ and $g=\Gamma H/v=\gamma-t_0\ge0$. For any parameter put $s=C_1-bC_0$, $t=C_2-bC_1+b^2C_0/2$, $u=\operatorname{ch}_3^b-\Gamma\operatorname{ch}_1^b$, and

$$Q^\Gamma_{b,w}=(2w-b^2)(\Delta+3gC_0^2)+2t(2t-3gC_0)-6su.$$

Define $\{b\}=b-\lfloor b\rfloor$ and $\Omega=\{(b,w)\in\mathbb R^2:w>b^2/2+\{b\}(1-\{b\})/2\}$. For every real $(b,w)\in\Omega$ and every $\nu_{b,w}$-semistable object $E$ in its actual heart $\mathcal B_b$, including zero-denominator objects, one has $Q^\Gamma_{b,w}(E)\ge0$. This includes arbitrary Picard rank. Irrational parameters are interpreted by their subobject semistability inequalities and require no unproved irrational HN existence.

## Statement references

[[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]]

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]]

[[lem-gts-rational-tilt-discriminant-and-numerical-support]]

[[lem-gts-exact-numerical-wall-line-transport]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

[[lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary]]

## Facts & Assumptions

[A1] The strict ordinary $\mathrm{BG}_3(\epsilon)$ condition is an explicit mathematical hypothesis. The Axiom of Choice is inherited through the actual coherent-heart, HN and duality suppliers. All new statements remain research candidates; this file supplies no acceptance or native gate coverage.

[F1] The precise dependencies are [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]], [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]], [[lem-gts-rational-tilt-discriminant-and-numerical-support]], [[lem-gts-exact-numerical-wall-line-transport]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]], [[lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary]]. The heart, rational-parameter HN, finite-part duality, tilt-discriminant/support and exact same-object numerical-line transport interfaces are used as stated. At fixed rational $b$, the finite-numerical-class argument is the support-plus-discrete-lattice argument of the discriminant supplier; no two-parameter deformation theorem is presumed.

## Proof

**Given:** Exactly the Statement hypotheses and conventions.

1.1 For E put $r=C₀=vch₀$, $C₁=H²ch₁$, $C₂=Hch₂$, $C₃=ch₃$, and $Δ=C₁²−2rC₂$. At real b,w set $s=C₁−br$, $t=C₂−bC₁+b²r/2$,
    u=ch₃^b−Γch₁^b,
    Q^Γ_{b,w}=(2w−b²)(Δ+3gr²)+2t(2t−3gr)−6su. [given, A1, F1, algebra]

2.1 The source slope is $ν=(C₂−wr)/s$, with its UNTWiSTED numerator. Use the upper-grid region $\Omega=\{w>b^2/2+\{b\}(1-\{b\})/2\}$,  $\{b\}=b-\lfloor b\rfloor$. [given, A1, F1, step 1.1, algebra]

3.1 For fixed numerical E, Q is affine in (b,w). If r≠0 it vanishes at $Π(E)=(C₁/r,C₂/r)$; hence along a line through that point Q/s is constant as the parameter moves. If $r=0$, on its numerical slope line $w=(C₂/C₁)b+c$ the direct expression $Q=2C₁²c+4C₂²−6C₁(C₃−Γch₁)$ is constant, and so is Q/s. These assertions follow simply by inserting the twisted expansions into the displayed polynomial; they include arbitrary Picard rank. [given, A1, F1, step 2.1, algebra]

4.1 At a FIXED parameter and FIXED finite source slope ν, put $U=C₃−Γch₁$. Substituting $C₂=νs+wr$ and $C₁=s+br$ gives $Q/(2s)=(w−bν+2ν²)s$
           +(bw+ν(2w−b²−3g))r−3U. [given, A1, F1, step 3.1, algebra]

5.1 The right side is linear in the numerical object. Thus for a same-finite-phase exact pair with positive denominators, Q(E)/s(E)=Q(E₁)/s(E₁)+Q(E₂)/s(E₂). A negative total forces a negative factor. We will only divide by positive denominators; zero-dimensional weak-charge quotients are not declared finite-phase factors. [given, A1, F1, step 4.1, algebra]

6.1 For $d_b(E)=0$ in $B_b$, ordinary cohomology has F[1] with F zero or ordinary slope-b semistable torsion-free, and T supported in dimension $\le1$. Hence $r≤0$ and $t=Hch₂^b(E)≥0$ by ordinary BG and effective-cycle positivity. With $s=0$ the full polynomial factors as $Q=(2t−3gr)(2t−(2w−b²)r)≥0$. [given, A1, F1, step 5.1, algebra]

7.1 So null denominators cannot be counterexamples. For positive denominators, exact numerical-line transport is valid at real b using only ordinary BG and the changing-heart comparison, not irrational HN. It also yields $Δ≥0$ at every real parameter. If $r=0$ this is immediate. If r≠0 and $Δ<0$, Π(E) lies strictly above the parabola and hence inside the open numerical-line segment of E. Transport would put the same E in every heart on that segment with strictly positive denominator, including at $b=C₁/r$ where that denominator is zero, contradiction. Thus all later discriminant minima are nonnegative integers, even for a counterexample initially at irrational b. [given, A1, F1, step 6.1, algebra]

8.1 For r≠0 put $μ=C₁/r$, $y=C₂/r$, $d=Δ/r²≥0$. A numerical line through (μ,y) intersects the upper parabola on one open interval. Positive denominator forces it to lie to the left of μ for $r>0$ and to the right for $r<0$. If it meets Ω, it contains an integer: Ω is above the linear interpolation of k²/2 at consecutive integers; the line's positive difference from that interpolation at one point is positive at some endpoint. At that integer it lies strictly above the parabola. [given, A1, F1, step 7.1, algebra]

9.1 For $d>0$ set $L=\sqrt{d+1/4}−1/2$, $U=\sqrt{d+1/4}+1/2$, so $U−L=1$ and $LU=d$. On the left choose an integer k in [μ−U,μ−L], on the right in [μ+L,μ+U], which is also in the open parabolic interval. To verify the simultaneous choice, use positive distances x from μ. The interval endpoints $a≤b$ satisfy $ab=d$. If a grid point $x∈[L,U]$ were excluded by $b≤x$, then $a=d/b≥d/x≥L$ and $b≤U$; if excluded by $a≥x$, then $a≥L$ and $b=d/a≤d/x≤U$. The whole interval would then be trapped in one unit grid cell and contain no integer, contradicting the preceding paragraph. Endpoint ties are resolved by selecting the integer actually in the open interval. [given, A1, F1, step 8.1, algebra]

10.1 For $d=0$ the interval has μ as one endpoint. On the left choose floor(μ) if μ is not integral; if μ is integral the existence of an interior integer forces μ−1 to be inside. On the right use ceil(μ) or μ+1. Thus the selected distance from μ is in (0,1]. For all $d≥0$ this gives, after tensoring by O(−kH), $C₁'>0$,       $|C₂'/C₁'|≤1/2$. [given, A1, F1, step 9.1, algebra]

11.1 For $d>0$ this is the identity $C₂'/C₁'=[(μ−k)²−d]/[2(μ−k)]$; for $d=0$ it is (μ−k)/2. For $r=0$ choose an integer nearest to C₂/C₁; the parabolic interval is symmetric about that slope, so it contains the nearest integer whenever it contains any integer, and twisting gives $C₂'/C₁'=C₂/C₁−k∈[−1/2,1/2]$. The exact parameter change is $b'=b−k,w'=w−kb+k²/2$, which preserves 2w−b², twisted Chern coordinates, the corrected slope ordering, and Q. In particular the selected integer-axis point becomes $b'=0,w'>0$, a point of Ω. [given, A1, F1, step 10.1, algebra]

12.1 Suppose E is semistable with positive denominator on $b=0$ and $Δ=0$. It remains semistable for every $w>0$. Indeed the fixed-heart finite-class argument bounds nearby possible destabilizer classes, using the proved uniform Δ support for semistables on compact positive w intervals. At any semistable parameter an equal-finite-phase pair must have proportional null discriminant vectors, by the forward Lorentz cone. Their slopes are identical functions of w for ALL w, so none can start a strict destabilization across that parameter. Other finitely many local classes keep their strict inequalities. The semistable set is therefore open, and it is closed as an intersection of fixed-heart subobject inequalities; connectedness of (0,∞) proves the assertion. This also handles weakly stable objects with zero-dimensional quotients, which never are equal-finite-phase splits. [given, A1, F1, step 11.1, algebra]

13.1 If a zero-Δ counterexample existed in Ω, Section 3 and exact line transport would make it a counterexample at $b=0$ with BN slope in [−1/2,1/2]. It is then vertically BN-semistable by the preceding paragraph, so the constructed boundary gives $Q_{0,0}≥0$. But $Q_{0,w}=Q_{0,0}+2w(Δ+3gr²)≥Q_{0,0}$, [given, A1, F1, step 12.1, algebra]

14.1 contradicting negativity. Thus zero discriminant cannot be a counterexample. No assertion about ch₃ of arbitrary slope-zero reflexive sheaves has been used. [given, A1, F1, step 13.1, algebra]

15.1 If the full assertion fails, choose a counterexample with the least positive integer Δ among ALL points of Ω. Integer selection and line transport preserve its negative Q/s and make it a counterexample on $b=0$, $w=w₁>0$, with positive $D=C₁$ and $|ν_{\mathrm{BN}}|≤1/2$. At any $0<w≤w₁$, $Q_{0,w}≤Q_{0,w₁}<0$. A same-finite-phase split there has two positive denominators. Each discriminant is STRICTLY smaller than Δ: Lorentz comparison only permits equality when the total discriminant is zero. The linear Q/s identity supplies a negative factor, which is a counterexample in Ω at that integer axis, contradicting the minimum. Thus E has no equal-finite-phase split at any semistable parameter in that interval. [given, A1, F1, step 14.1, algebra]

16.1 The semistable set in (0,w₁] is closed. At each of its points the fixed-heart finite-class argument and absence of equal finite-phase splits make it open relative to the interval; if a new destabilizer occurred, a first equality class from that finite list would occur. Therefore the same E is semistable for EVERY $0<w≤w₁$. It is exactly a vertically BN-semistable object of the scope proved in the endpoint helper. That helper gives $Q_{0,0}(E)≥0$, while $Q_{0,w₁}=Q_{0,0}+2w₁(Δ+3gr²)≥0$, the final contradiction. [given, A1, F1, step 15.1, algebra]

17.1 Hence Q^Γ_{b,w}(E)≥0 for EVERY real (b,w)∈Ω and every source-tilt-semistable E in its actual heart. This proves the full richest source parameter range with the untwisted slope convention. The proof never moves onto the origin O-wall to claim its factors are full-neighborhood BN-stable; its stronger VERTICAL boundary is precisely what makes that previously missing step unnecessary.
 [given, A1, F1, step 16.1, algebra] ∎
