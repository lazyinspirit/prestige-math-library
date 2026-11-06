---
id: lem-gts-rational-gamma-bmt-gives-geometric-stability
kind: lemma
title: Rational Gamma-BMT gives geometric stability with finite-rank support
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- def-gts-gamma-bmt-and-brill-noether-data
- def-gts-bridgeland-stability-condition-with-support-property
- lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
- lem-gts-rational-tilt-discriminant-and-numerical-support
- thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
- def-chern-character-and-todd-class
- def-axiom-of-choice
dependency_roles:
  def-gts-gamma-bmt-and-brill-noether-data: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart: mathematical-premise
  lem-gts-rational-tilt-discriminant-and-numerical-support: mathematical-premise
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Bayer, Macrì and Stellari, The space of stability conditions on abelian
      threefolds, and on some Calabi–Yau threefolds
    url: https://arxiv.org/pdf/1410.1585
    locator: Section 8; Gamma support calculation and finite-rank argument reconstructed
      here
verification:
  precheck: pass
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
dependency_level: 4
---

## Statement

Assume AC. Let $X$ be a smooth integral projective complex threefold with $K_X\cong\mathcal O_X$, $H$ ample Cartier, and $\Gamma\in\operatorname{CH}_1(X)_\mathbb Q$ with $g=\Gamma H/H^3\ge0$. Suppose the source $\Gamma$-BMT inequality holds on its full parameter region. For rational $\beta$ and rational $\alpha^2>\max(3g,1/4)$ set $w=(\alpha^2+\beta^2)/2$. Form the second tilted heart $\mathcal A=\langle\mathcal F'[1],\mathcal T'\rangle$, where the first heart is $\operatorname{Coh}^{\beta}(X)$ and $(\mathcal T',\mathcal F')$ is its conventional tilt-slope torsion pair cut at zero. For every real $a>\alpha^2/6$, the central charge
$$Z_a(E)=-\bigl(\operatorname{ch}_3^\beta(E)-\Gamma\operatorname{ch}_1^\beta(E)\bigr)+aH^2\operatorname{ch}_1^\beta(E)+i\left(H\operatorname{ch}_2^\beta(E)-\frac{\alpha^2H^3}2\operatorname{ch}_0(E)\right)$$
with heart $\mathcal A$ defines a locally finite Bridgeland stability condition with the finite-rank support property. It factors through the lattice image of
$$v_\Gamma(E)=(H^3\operatorname{ch}_0(E),H^2\operatorname{ch}_1(E),H\operatorname{ch}_2(E),\operatorname{ch}_3(E)-\Gamma\operatorname{ch}_1(E)),$$
and every skyscraper sheaf $\mathcal O_x$ is stable of phase one. Thus the stability condition is geometric.

## Facts & Assumptions

**Given:** Exactly the smooth threefold, rational cycle, full Gamma-BMT hypothesis and parameters in the Statement. No deformation-chart theorem or result about every Calabi–Yau threefold is asserted.

[F1] [[def-gts-gamma-bmt-and-brill-noether-data]] gives the actual Gamma quadratic and untwisted source slope. [[def-chern-character-and-todd-class]] supplies the rational Chern-character intersection lattice. [[def-gts-bridgeland-stability-condition-with-support-property]] specifies the stability, local-finiteness and support interfaces proved here.

[F2] [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]] supplies the bounded noetherian second heart at rational parameters, actual weak tilt HN and its exact zero-imaginary classification. [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]] supplies the ordinary sheaf BG hypothesis, including its boundary-slope instance. The distinct [[lem-gts-rational-tilt-discriminant-and-numerical-support]] then supplies Δ≥0 for the weak-tilt-semistable objects at this rational β. This implication uses the actual local discriminant induction of that lemma; ordinary sheaf BG alone is not a statement about arbitrary first-heart complexes.

[F3] [[def-axiom-of-choice]] is inherited from the coherent and HN constructions. The full Gamma-BMT inequality is the explicit mathematical hypothesis of this implication; it is not inferred merely from a rational Chow class.

## Proof

1.1 The hypothesis makes Γ a rational Chow one-cycle. The four-component map $v_Γ(E)=(H³ch0(E),H²ch1(E),Hch2(E),ch3(E)−Γ·ch1(E))$ [F1, F2, F3, given, construct]

2.1 has image in $(1/M)Z^{4}$ for one fixed denominator M: denominators of Chern characters through degree three and those of the fixed rational Γ are bounded independently of E. Its image is thus a finite-rank lattice, not a potentially dense subgroup obtained by choosing arbitrary irrational Γ. The rank may be smaller than four; all arguments restrict to its real span. [F1, F2, F3, step 1.1, construct]

3.1 Fix rational β and rational α²>max{3g,1/4}, where $g=ΓH/H³≥0$. Put $w=(α²+β²)/2$, so the source parameter inequality holds. Use twisted coordinates $r=H³ch0$, $s=H²ch1^β$, $t=Hch2^β$, $u=ch3^β−Γ·ch1^β$. The second-tilt central charge is $Z_a(E)=−u+a$ s+i(t−α²r/2),       a>α²/6. [F1, F2, F3, step 2.1, construct]

4.1 The actual supplier F2 gives the first tilted heart and its slope HN theory, and gives the bounded noetherian second tilted heart $A=<F'[1],T'>$, with F' the nonpositive and T' the positive conventional tilt-slope parts. The exact zero-imaginary classification needed is: every E∈A with Im $Z_a(E)=0$ fits into F[1]→E→T with F tilt-semistable of slope zero and T zero-dimensional. These are the supplied categorical statements of F2. [F1, F2, F3, step 3.1, construct]

5.1 Full Gamma-BMT gives u(F)≤α²s(F)/6 for such F. Thus Re $Z_a(F[1])≤−(a−α²/6)s(F)<0$ and $Z_a(T)=−\operatorname{length}(T)$. This proves the strict stability-function half-plane property. Since α²,β are rational, Im $Z_a$ takes discrete nonnegative values independent of a. Here is the full HN deduction from those hypotheses. A decreasing chain of subobjects whose phases strictly increase cannot be infinite: their discrete imaginary parts eventually agree, but then each nonzero quotient has zero imaginary part and strictly negative real part, forcing the subobject phases to decrease. Therefore repeatedly replacing an unstable object by a subobject of larger phase terminates at a semistable subobject of phase at least its starting phase. Let $a_*$ be the supremum of phases of semistable subobjects of a fixed E. For $θ<a_*$, form $T_θ$ as the sum of all semistable subobjects of phases greater than θ. Noetherianity makes this a finite sum and a well-defined largest such sum. Every nonzero quotient of $T_θ$ has phase greater than θ: it is generated by the images of those finitely many semistables, whose nonzero quotients have at least their phases, and the sum lies in the same angular cone. Also $\operatorname{phase}(T_θ)≤a_*$, or the preceding descending-subobject procedure would produce a semistable subobject of larger phase than the supremum. Take θ_n increasing to $a_*$. The $T_{θ_n}$ decrease; their imaginary parts eventually have one fixed value. If that value is zero then their phase is one, attaining $a_*=1$. Otherwise their phases are nonincreasing, because successive zero-imaginary quotients have negative real part. Since $\operatorname{phase}(T_{θ_n})>θ_n$ and $≤a_*$, this nonincreasing sequence must have phase exactly $a_*$ from that point onward. Such a $T_{θ_n}$ is semistable, since an unstable one would contain a semistable subobject of larger phase. Thus the supremum is attained. The sum of all phase-$a_*$ semistable subobjects stabilizes by noetherianity and is itself semistable of phase $a_*$; if its phase were larger or if it were unstable, the same argument would contradict the supremum. Its quotient in E has strictly smaller maximal phase: a quotient subobject of larger phase would have a preimage of larger phase and yield a higher semistable subobject of E, while a subobject of equal phase would enlarge the maximal phase-$a_*$ subobject. Repeat on the quotient. An infinite process would give an infinite strict chain of kernels inside E, excluded by noetherianity. This constructs the finite ordered HN filtration. It does not construct the assumed noetherianity of A. [F1, F2, F3, step 4.1, construct]

6.1 For the support property define Δ_g=s²−2rt+3g r² and $P_κ=Q^Γ_{β,w}+κΔ_g$, with 0<κ<6a0−α² for a fixed a0>α²/6. Ordinary tilt BG and ΓH≥0 give Δ_g≥0 on tilt-semistables, so $P_κ≥0$ there. On ker $Z_a$, $t=α²r/2,u=a$ s, direct cancellation gives $P_κ|_{\ker Z_a}=(α²−6a+κ)s²+κ(3g−α²)r²$, [F1, F2, F3, step 5.1, construct]

7.1 strictly negative definite for all a≥a0. This is an explicit Gamma support form; the ordinary BMT kernel computation is not reused without its Γ terms. [F1, F2, F3, step 6.1, construct]

8.1 For clarity, the rest of the support argument is an abstract finite induction, using the supplied heart/HN inputs above. If Im Z(E)=0, the zero-imaginary classification and tilt inequalities give $P_κ(E)≥0$: adding the zero-dimensional term increases Q by −6s(E)length(T)≥0, and leaves Δ_g unchanged. Such phase-one objects have finite length, since negative definiteness on ker Z implies ||v||≤C|Z(v)| on $P_κ≥0$, and nonzero lattice vectors have a uniform positive norm; the negative real masses of successive factors therefore have a positive minimum and sum to the fixed mass of E. [F1, F2, F3, step 7.1, construct]

9.1 For positive imaginary part, induct on its discrete value. At a finite-phase JH wall all proper factors have strictly smaller positive imaginary part; zero-imaginary factors have phase one and cannot lie on that ray. Their $P_κ$ positivity is known by induction. The cone $P_κ≥0$ over any fixed central-charge ray is convex: split off the $P_κ$-orthogonal lift of that ray, and apply the triangle inequality for the negative definite norm on ker Z. Thus $P_κ$ positivity passes from all factors to their sum. [F1, F2, F3, step 8.1, construct]

10.1 If a $Z_a$-stable E stays semistable as a→∞, its cohomology triangle F[1]→E→T forces either $F=0$ with T tilt-semistable, or F tilt-semistable with T zero-dimensional: their leading real parts are respectively −a s(F) and a s(T), and opposite leading slopes otherwise destabilize; tilt HN factors give the same conclusion inside each cohomology object. The tilt inequalities and the preceding zero-dimensional correction then give $P_κ(E)≥0$. Otherwise a first finite wall exists. Here is the boundedness justification: on a compact a interval, negative definiteness on every ker $Z_a$ gives a uniform support constant for all smaller-imaginary semistables. A destabilizing subobject F at a nearby a has $0<Im$ Z(F)<Im Z(E). Stability at the previous parameter bounds its old phase by that of E; for small |a−a'|, the difference $Z_a(F)−Z_a'(F)=(a−a')s(F)$, together with the support constant, bounds |Re $Z_a(F)|$, and hence its lattice norm, uniformly. Indeed if the real part tended to −infinity, the old phase bound would require a change at least its absolute size, while the latter is at most |a−a'|C times that size plus a bounded imaginary term; choose $|a−a'|C<1/2$. Its upper real part is bounded by the destabilizing phase inequality. Only finitely many lattice classes can occur. Thus walls are locally finite and a first wall before instability exists. The induction and ray-convexity argument at that wall give $P_κ(E)≥0$. [F1, F2, F3, step 9.1, construct]

11.1 Consequently every $Z_a$-semistable satisfies $P_κ≥0$, and the compact-unit-sphere argument gives the finite-rank support property. Local finiteness follows directly: for a sufficiently short phase interval, rotate its central-charge cone into a strict positive-real half-plane; support and lattice discreteness give a positive minimum for the rotated real mass of each nonzero semistable factor. Lengths of strict filtrations of a fixed object are bounded by its finite real mass divided by that minimum. Finally $O_x$ is stable: any subobject/quotient in A has zero imaginary part, so the zero-imaginary classification applies. The twisted first Chern coordinate of each is −s(F)≤0, whereas their sum for $O_x$ is zero; hence both F vanish. The subobject and quotient are ordinary zero-dimensional sheaves, and $O_x$ is simple there. Thus this construction is geometric. [F1, F2, F3, step 10.1, construct]

12.1 This proves the stability/support implication using the supplied noetherian bounded double heart and zero-imaginary classification. An open deformation chart for all central charges would require the general stability-condition deformation theorem; no such chart is asserted by this calculation. The categorical heart construction is exactly the stated F2 supplier. [F1, F2, F3, step 11.1, construct] ∎

## Remarks

Research-only source candidate assembled from explicit-reduction-core.md §7a. Its original recorded reading limits remain unchanged. Full Gamma-BMT is its stated hypothesis; the separate propagation lemma and actual family curve gaps must establish that hypothesis for the named target. No production admission or gate result is asserted.
