---
id: lem-gts-effective-integral-divisor-restriction-from-tilt-duality
kind: lemma
title: "Effective restriction to integral divisors from constructed tilt and duality theory"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - lem-gts-tilt-derived-dual-truncation-and-finite-saturation
  - lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
  - lem-gts-rational-tilt-discriminant-and-numerical-support
  - lem-gts-exact-numerical-wall-line-transport
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - thm-hilbert-polynomial-degree-support-dimension
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
dependency_roles:
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  lem-gts-tilt-derived-dual-truncation-and-finite-saturation: mathematical-premise
  lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart: mathematical-premise
  lem-gts-rational-tilt-discriminant-and-numerical-support: mathematical-premise
  lem-gts-exact-numerical-wall-line-transport: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
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
      locator: "§§2–3 in full, printed pp.7–13, especially Lemma 2.7, Theorem 3.5, Lemma 3.9 and Corollary 3.10. These are source context for the direct local constructions."
    - title: "Soheyla Feyzbakhsh, An effective restriction theorem via wall-crossing and Mercat’s conjecture"
      url: https://arxiv.org/pdf/1608.07825v2
      locator: "§§1–3 and §4 through Remark 4.5, printed pp.1–18; especially Proposition 2.3, Propositions 3.2/3.4 and Theorem 1.1 proof. The local dual-gap and boundary arguments are reconstructed explicitly."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-effective-integral-divisor-restriction-from-tilt-duality.md
dependency_level: 4
---

## Statement

Let X be a smooth integral projective complex threefold, H an ample Cartier divisor, $v=H³$, and $μ(F)=H²ch₁(F)/(v \operatorname{rk} F)$ for positive-rank sheaves. Assume explicitly ordinary numerical sheaf BG: $(H^2\operatorname{ch}_1(F))^2-2(v\operatorname{rk}F)(H\operatorname{ch}_2(F))\ge0$ for every μ-semistable torsion-free F. Let E be μ-stable reflexive of rank $R>0$. For a stable sheaf A define $\delta_L(A)=\mu(A)-\sup\{\mu(G)<\mu(A):0\ne G\subset A\text{ is a positive-rank coherent subsheaf}\}$, including full-rank subsheaves. Set $δ=min(δ_L(E),δ_L(E*))$, which is positive, and $D=[(H²ch₁(E))²−2(vR)(Hch₂(E))]/(vR)²≥0$. For any positive integer k and any integral Cartier divisor $Y∈|kH|$, if $k\ge(R+2)\sqrt D/\sqrt{R+1}$ and $k/2+\sqrt{k^2/4-D}\ge D/\delta$, then E|Y is torsion-free and slope-semistable for H|Y, where the slope on possibly singular Y is defined by the first two Hilbert-polynomial coefficients. For $R≥2$ one has $δ≥1/[vR(R−1)]$, so this explicit lower bound may replace δ. At each rational $b<μ(A)$, any ordinary stable torsion-free A is weak-tilt-stable for sufficiently large α², for the source slope $ν_{b,(α²+b²)/2}$; weak strict stability means $ν(F)<ν(A/F)$. The theorem is conditional on ordinary sheaf BG, not a proof of that numerical hypothesis.

## Statement references

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]]

[[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]]

[[lem-gts-rational-tilt-discriminant-and-numerical-support]]

[[lem-gts-exact-numerical-wall-line-transport]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Axiom of Choice; ordinary sheaf BG is an explicit Statement hypothesis. No citation is treated as its local proof.

[F1] The actual mathematical interfaces are [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]], [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]], [[lem-gts-rational-tilt-discriminant-and-numerical-support]], [[lem-gts-exact-numerical-wall-line-transport]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[thm-hilbert-polynomial-degree-support-dimension]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]]. The numerical-line and duality arguments are consumed as proved mathematical constructions.

## Proof

**Given:** Exactly the Statement hypotheses and conventions, including the explicit ordinary sheaf BG premise.

1.1 Let E be an ordinary slope-stable torsion-free sheaf of rank $R>0$, let $b<μ(E)$ be rational, and put $d=C₁(E)−bC₀(E)>0$. E belongs to $B_b$. We prove it is weak-tilt-stable for all sufficiently large $a=α²$. Here weak stability uses $ν(F)<ν(E/F)$ for nonzero proper subobjects, not the stronger and inappropriate condition $ν(F)<ν(E)$ when the quotient is numerically zero. [given, A1, F1, algebra]

2.1 There is no null subobject of E in $B_b$. In fact a $B_b$ subobject A⊂E is a coherent sheaf: taking ordinary cohomology shows $H⁻¹(A)=0$. If $s(A)=0$ it is supported in dimension at most one, so cannot inject as a sheaf into the torsion-free E. For any subobject A, write $Q=E/A$ and $K=H⁻¹(Q)$. The ordinary sequence is [given, A1, F1, step 1.1, algebra]

3.1 0→K→A→E→H⁰(Q)→0. [given, A1, F1, step 2.1, algebra]

4.1 Thus A is torsion-free, $K∈F_b$, and its image G⊂E is nonzero (otherwise $A=K$ would lie in both $T_b$ and $F_b$). Ordinary slope stability gives $μ(G)≤μ(E)$, with equality possible only for a full-rank image whose quotient has codimension at least two. Since $μ(K)≤b<μ(E)$ when K≠0, one obtains $μ(A)≤μ(E)$. If $0<s(A)<d$, equality is impossible: it would force $K=0$, rank $G=R$ and $c₁(G)=c₁(E)$, hence $s(A)=d$. Therefore for relevant proper positive-denominator subobjects [given, A1, F1, step 3.1, algebra]

5.1 $C_0(A)/s(A)>C_0(E)/d=x_E>0$. [given, A1, F1, step 4.1, algebra]

6.1 The difference is uniformly separated from zero. Indeed $C₀(A)d−C₀(E)s(A)=C₀(A)C₁(E)−C₀(E)C₁(A)$ is a positive integral multiple of $v=H³$, while $0<s(A)<d$. Hence [given, A1, F1, step 5.1, algebra]

7.1 $x_A≥x_E+v/d²$. [given, A1, F1, step 6.1, algebra]

8.1 If E is unstable at any sufficiently large a, its first HN factor A is semistable, has $0<s(A)<d$, and $Δ(A)≥0$ by the already constructed tilt discriminant theorem. The same conclusion holds for a proper finite-slope equal-phase factor of a semistable E. From $Δ(A)≥0$ and $C₀(A)>0$, [given, A1, F1, step 7.1, algebra]

9.1 $λ_a(A)≤1/(2x_A)−a x_A/2 ≤1/(2x_E)−a(x_E+v/d²)/2$. [given, A1, F1, step 8.1, algebra]

10.1 But $λ_a(E)=t(E)/d−a x_E/2$. For large a this makes $λ_a(A)<λ_a(E)$, a contradiction. Null quotients have slope infinity and do not violate weak strict stability. Thus E is weak-tilt-stable for all sufficiently large a. This proof uses the tilt discriminant after it was derived by the one-way large-parameter classification, so it is not circular. [given, A1, F1, step 9.1, algebra]

11.1 For a slope-stable sheaf E define its strict subsheaf gap [given, A1, F1, step 10.1, algebra]

12.1 δ_L(E)=μ(E)−sup{ μ(G)<μ(E) : 0≠G⊂E is a coherent subsheaf of positive rank }. [given, A1, F1, step 11.1, algebra]

13.1 The supremum is attained and δ_L(E)>0: ranks are at most R, integral degrees are discrete, and degrees of subsheaves are bounded above. The set is nonempty, for example E(−mH)⊂E for a nonzero section of O(mH). Full-rank subsheaves are INCLUDED; this matters in the dual application. [given, A1, F1, step 12.1, algebra]

14.1 Let $P=(μ(E), C₂(E)/C₀(E))$ and $Δ(E)≥0$. Let L be a line through P with parabola roots $x<y≤μ(E)$, and suppose [given, A1, F1, step 13.1, algebra]

15.1 μ(E)−y < δ_L(E),       R(μ(E)−y) < y−x. [given, A1, F1, step 14.1, algebra]

16.1 Then E is tilt-semistable at every point of L∩U. It suffices first to take a rational b∈(x,y). At large a it is stable by the argument beginning at step 1.1. The rational fixed-b local finite-class argument gives a first finite wall if stability is lost before L. To spell out the wall existence being consumed: the tilt-discriminant support bound holds for every semistable class; at any finite positive a the inequalities in the local finite-class proof bound all potential semistable destabilizer classes in a compact parameter neighborhood. This proves local wall finiteness for this fixed object and fixed heart. Starting at a large stable parameter, the first parameter of loss is consequently an equal-phase semistable exact sequence with both denominators strictly between 0 and d. A numerically proportional equality class has a parameter-independent slope equality and cannot be a first loss of stability. [given, A1, F1, step 15.1, algebra]

17.1 Suppose such a wall lies above L. If $Δ(E)>0$, its line through P has parabola roots $x'<x<y<y'<μ(E)$. Exact numerical-line transport supplies the same semistable sequence $0→A→E→Q→0$ in every heart for $b∈(x',y')$. A is a coherent sheaf. Write $K=H⁻¹(Q)$ and $T=H⁰(Q)$. From the cohomological endpoint bounds in the transport theorem, [given, A1, F1, step 16.1, algebra]

18.1 μ_min(A)≥y',       μ_min(T/tors T)≥y',       μ_max(K)≤x'. [given, A1, F1, step 17.1, algebra]

19.1 If K has positive rank k, then the ordinary cohomology sequence gives [given, A1, F1, step 18.1, algebra]

20.1 C₁(E)≥v[ y'(R+k)−x'k ], [given, A1, F1, step 19.1, algebra]

21.1 because rank A+rank $T=R+k$ and torsion contributes nonnegative divisor degree. Consequently $R(μ(E)−y')≥k(y'−x')≥y'−x'$, contradicting $R(μ(E)−y)<y−x$. Hence $K=0$ and A is a genuine subsheaf of E. It has $μ(A)≥y'>y$. Also $μ(A)<μ(E)$: ordinary slope stability proves this for smaller rank, and in equal rank equality would make Q supported in codimension at least two, contrary to its positive denominator. Thus [given, A1, F1, step 20.1, algebra]

22.1 0<μ(E)−μ(A)<μ(E)−y<δ_L(E), [given, A1, F1, step 21.1, algebra]

23.1 a contradiction. If Δ(E)=0, any equal-phase semistable factors have Δ≥0 and lie in the same forward Lorentz cone. A sum on its null boundary forces both numerical vectors proportional to E, so they cannot produce a first loss of stability; this covers the y=μ(E) case too. Therefore E stays semistable down to L at this rational b. The numerical-line transport theorem then gives all real b∈(x,y). [given, A1, F1, step 22.1, algebra]

24.1 The weak inequalities μ(E)−y≤δ_L(E) and R(μ(E)−y)≤y−x also suffice for semistability. At a fixed b on L, raise w slightly while keeping b fixed; the line from this raised point to P has smaller μ(E)−y and larger y−x, so the strict case applies. Semistability is closed in w in the fixed heart, being an intersection of closed subobject inequalities. Let w decrease to its desired value. No two-parameter deformation theorem is used. [given, A1, F1, step 23.1, algebra]

25.1 Assume E is reflexive. Its dual E* is ordinary slope-stable of slope −μ(E). To verify this, for any positive-rank subsheaf G⊂E* of $\operatorname{rank}<R$, dualization gives a generic quotient $E→G*$ whose image I is a genuine lower-rank torsion-free quotient of E. Stability gives $μ(I)>μ(E)$, while the inclusion I⊂G* gives $μ(G*)≥μ(I)$. Hence $μ(G)<−μ(E)$. After saturation this rules out every destabilizing subsheaf. For a full-rank subsheaf its degree is at most that of E*, so it cannot destabilize either. [given, A1, F1, step 24.1, algebra]

26.1 For $b>μ(E)$, E[1] lies in the finite part of $B_b$. There are no maps $G[1]→E[1]$ from a boundary-slope semistable sheaf G because $μ(G)=b>μ(E)$. There are no maps from coherent K supported in codimension at least two: these are $Ext¹(K,E)=0$. The latter follows from the reflexive kernel presentation $0→E→V→W→0$ with V locally free and W torsion-free: $\operatorname{Hom}(K,W)=0$ and $Ext¹(K,V)=0$ by depth at least two along the support of K; the regular-sequence/coherent-duality proof of the preceding structural helper supplies exactly this Ext vanishing. A general null object is an extension of these two types. [given, A1, F1, step 25.1, algebra]

27.1 The constructed truncated derived dual of E[1] is E*: reflexive sheaves on a smooth threefold have only their ordinary dual in cohomological degree zero and a possible zero-dimensional Ext¹ in degree one, which τ≤0 discards. The derived-dual semistability theorem therefore identifies semistability of E[1] at (b,w) with semistability of E* at (−b,w), with opposite source slope. Thus the left safe-region theorem for E* proves the right branch, using the strictly defined dual subsheaf gap δ_L(E*). This handles full-rank modifications as well as lower-rank quotients; no improper use of a proper-quotient gap is made. [given, A1, F1, step 26.1, algebra]

28.1 Let E be an ordinary $μ_H$-stable reflexive sheaf of rank $R>0$ on the smooth projective threefold X. Put [given, A1, F1, step 27.1, algebra]

29.1 D=Δ(E)/C₀(E)²≥0,       δ=min(δ_L(E),δ_L(E*))>0. [given, A1, F1, step 28.1, algebra]

30.1 Let k be a positive integer and let Y∈|kH| be any integral Cartier divisor. Suppose [given, A1, F1, step 29.1, algebra]

31.1 k ≥ (R+2)/sqrt(R+1) · sqrt(D), k/2+sqrt(k²/4−D) ≥ D/δ. [given, A1, F1, step 30.1, algebra]

32.1 The square root is real under these conditions, and the actual required open intersection is automatic: if $D>0$, the first coefficient is strictly greater than 2, while if $D=0$, $k>0$. Then E|Y is slope-semistable on the integral polarized divisor (Y,H|Y). No smoothness of Y is assumed. Equivalently, with $z=\sqrt{k²/4−D}$ and $e=k/2−z$, [given, A1, F1, step 31.1, algebra]

33.1 R e≤2z,       e≤δ. [given, A1, F1, step 32.1, algebra]

34.1 The equivalence uses e(k/2+z)=D and the elementary rearrangement R(k/2−z)≤2z iff k²≥(R+2)²D/(R+1). [given, A1, F1, step 33.1, algebra]

35.1 The line through Π(E) and Π(E(−kH)) has slope ℓ=μ(E)−k/2 and parabola roots [given, A1, F1, step 34.1, algebra]

36.1 x=μ(E)−k/2−z,       y=μ(E)−k/2+z. [given, A1, F1, step 35.1, algebra]

37.1 Their width is 2z; $μ(E)−y=e$ and $x−μ(E(−kH))=e$. the argument beginning at step 11.1 makes E semistable everywhere on this line. Applying the reflected left safe region to the ordinary stable dual E*(kH), with its unchanged gap $δ_L(E*)$, makes E(−kH)[1] semistable there too, by the argument beginning at step 25.1. Their source slopes both equal ℓ. The non-strict boundary case follows by raising w at a fixed interior b and using the two strict safe regions separately, then letting w decrease; the two slopes need coincide only at the limiting point. [given, A1, F1, step 36.1, algebra]

38.1 Since E is torsion-free and Y is Cartier, multiplication by its defining section is injective and gives the exact derived triangle $E→i*(E|Y)→E(−kH)[1]$. At an interior point on the line the three objects lie in $B_b$, so it is a short exact sequence there. The extension of the two equal-slope semistable objects is semistable: otherwise a higher-slope subobject has zero maps to both factors, by the elementary subobject/quotient inequalities. Thus i*(E|Y) is tilt-semistable of slope ℓ. [given, A1, F1, step 37.1, algebra]

39.1 The restriction E|Y is torsion-free on the integral divisor. Indeed E has depth at least min(2,dim $O_{X,p}$) at every point because it is reflexive, and the defining nonzerodivisor reduces depth by one. At every nongeneric point of Y this gives depth at least one, so there is no associated point away from the generic point; a torsion submodule would have such an associated point. This also excludes zero-dimensional torsion at the singular points of E or Y. [given, A1, F1, step 38.1, algebra]

40.1 For a coherent quotient $E|Y→Q$, sheaves i*Q and its kernel are torsion in X, so the quotient is an epimorphism in $B_b$. A positive-rank quotient on Y has $C_1(i_*Q)=kv\operatorname{rk}_Y(Q)>0$. Tilt semistability yields [given, A1, F1, step 39.1, algebra]

41.1 C₂(i*Q)/C₁(i*Q) ≥ C₂(i*(E|Y))/C₁(i*(E|Y)). [given, A1, F1, step 40.1, algebra]

42.1 This is precisely the Hilbert-polynomial slope inequality on Y, including singular integral Y. Explicitly, ambient GRR gives $α₂(i*Q)=C₁(i*Q)$ and $\alpha_1(i_*Q)=C_2(i_*Q)-K_XH\operatorname{ch}_1(i_*Q)/2$. Subtract $\operatorname{rk}_Y(Q)$ times the same coefficient for $O_Y$, whose Chern character is $1−e^{(−kH)}$, to get [given, A1, F1, step 41.1, algebra]

43.1 deg_{H|Y}(Q)=C₂(i*Q)+rk_Y(Q) k²v/2, μ_{H|Y}(Q)=kv [ C₂(i*Q)/C₁(i*Q)+k/2 ]. [given, A1, F1, step 42.1, algebra]

44.1 The positive factor and constant are independent of Q. Rank-zero quotients have assigned infinite slope and impose no restriction. Hence E|Y is slope-semistable, proving the full stated effective restriction theorem. [given, A1, F1, step 43.1, algebra]

45.1 For $R≥2$, both $δ_L(E)$ and $δ_L(E*)$ are at least 1/[v R(R−1)]. For a subsheaf of rank $q<R$, a strict slope difference has numerator a nonzero integer in denominator $vRq≤vR(R−1)$. For $q=R$, its degree difference is a positive integer, giving the stronger 1/(vR); rank-one sheaves have only this full-rank case. Thus one may eliminate the unknown gaps by the universal explicit lower bound. This recovers a genuine uniform effective restriction consequence without assuming that the dual subsheaf gap equals a proper-quotient gap. [given, A1, F1, step 44.1, algebra] ∎
