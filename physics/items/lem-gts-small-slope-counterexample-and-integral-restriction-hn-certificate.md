---
id: lem-gts-small-slope-counterexample-and-integral-restriction-hn-certificate
kind: lemma
title: "Small-slope counterexample with uniform HN bounds on every integral hyperplane restriction"
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
  - lem-gts-effective-integral-divisor-restriction-from-tilt-duality
  - lem-eventual-global-generation-coherent-twists
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
  lem-gts-effective-integral-divisor-restriction-from-tilt-duality: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Feyzbakhsh, Koseki, Liu and Rekuski, Stability conditions on Calabi–Yau threefolds via Brill–Noether theory of curves"
      url: https://arxiv.org/pdf/2509.24990v2
      locator: "§2.3 Lemma 2.9 and §3.2 Lemma 3.8/Proposition 3.9, printed pp.10 and15–17. The local proof supplies the null-safe minimum and integral restriction HN construction."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-small-slope-counterexample-and-integral-restriction-hn-certificate.md
dependency_level: 5
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let X be a smooth integral projective complex threefold and H an ample Cartier divisor, $v=H^{3}$. Put $C_{0}=vch_{0}$, $C_{1}=H^{2}ch_{1}$, $C_{2}=Hch_{2}$, $μ=C_{1}/C_{0}$ and $Δ=C_{1}^{2}-2C_{0}C_{2}$. Assume explicitly ordinary numerical sheaf BG: Δ(F)≥0 for every μ-semistable torsion-free coherent sheaf F. Fix $0<ε<1/3$. If there exists an ordinary μ-stable torsion-free A with $0<μ(A)\le ε$ and C₂(A)≥−C₁(A)/2, then there exists a reflexive ordinary μ-stable sheaf E with $0<μ(E)\le 2ε/(1-ε)$ and C₂(E)≥−C₁(E)/2 such that, for every integral Cartier divisor S∈|H|, E|S is torsion-free and all its H|S-slope HN factors satisfy $0\le μ_{H|S}(F_i)\le 2ε/(1-3ε)$. On possibly singular S, $μ_{H|S}$ is the slope from the first two Hilbert coefficients divided by $H|S^{2}=v$; its HN existence is included in the proof. Moreover E is source-tilt-semistable at $b=0$ for every $w>0$, and E[1] is source-tilt-semistable at $b=1$ for every $w>1/2$, with the untwisted numerator C₂−wC₀. This criterion assumes ordinary sheaf BG and makes no claim to prove singular-surface BG or the named curve BN estimates.

## Statement references

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]]

[[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]]

[[lem-gts-rational-tilt-discriminant-and-numerical-support]]

[[lem-gts-exact-numerical-wall-line-transport]]

[[lem-gts-effective-integral-divisor-restriction-from-tilt-duality]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Axiom of Choice; ordinary numerical sheaf BG is an explicit Statement hypothesis and no citation is treated as its local proof.

[F1] The local mathematical interfaces are [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]], [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]], [[lem-gts-rational-tilt-discriminant-and-numerical-support]], [[lem-gts-exact-numerical-wall-line-transport]], [[lem-gts-effective-integral-divisor-restriction-from-tilt-duality]], [[lem-eventual-global-generation-coherent-twists]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[thm-hilbert-polynomial-degree-support-dimension]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]]. In particular weak tilt HN, discriminant, derived duality and fixed-line transport have local proofs; neither a finite-length weak semistable category nor strict discriminant decrease in the null case is assumed.

## Proof

**Given:** Exactly the Statement hypotheses, including the ordinary BG premise and the failed small-slope inequality.

1.1 Let X be a smooth integral projective complex threefold, H ample Cartier, $v=H^{3}$, and $0<ε<1/3$. Assume ordinary numerical sheaf BG. Suppose BG₃(ε) fails: there is an ordinary H-slope-stable torsion-free sheaf A with $0<μ(A)\le ε$ and C₂(A)≥−C₁(A)/2. Then there is a reflexive ordinary H-stable E with [given, A1, F1, algebra]

2.1 $0<μ(E)\le m:=2ε/(1-ε)$,       C₂(E)≥−C₁(E)/2, [given, A1, F1, step 1.1, algebra]

3.1 such that, for every integral Cartier divisor S∈|H|, E|S is torsion-free and all its ordinary normalized H|S-slope HN factors satisfy [given, A1, F1, step 2.1, algebra]

4.1 $0\le μ_{H|S}(F_i)\le 2ε/(1-3ε)$. [given, A1, F1, step 3.1, algebra]

5.1 Slope on a singular integral S is defined by Hilbert coefficients, normalized by $H|S^{2}=v$. Thus this statement includes integral normal rational Gorenstein S without asserting any singular-surface BG theorem. The latter is a distinct input to the subsequent surface summation. [given, A1, F1, step 4.1, algebra]

6.1 Define f on [0,∞) by [given, A1, F1, step 5.1, algebra]

7.1 $f(x)=-x/2$                         (0≤x≤ε), $f(x)=[(1+ε)/(2(1-ε))]x-ε/(1-ε)$   (ε≤x≤m), $f(x)=x^{2}/2$                        (x≥m). [given, A1, F1, step 6.1, algebra]

8.1 It is continuous and f(x)≥−x/2 on [0,m]. Let Sε be the following set of *positive-rank numerical objects*: E∈DᵇCoh(X), with $C_{0}(E)>0$, $0<μ(E)=C_{1}(E)/C_{0}(E)\le m$ and $y(E)=C_{2}(E)/C_{0}(E)\ge f(μ(E))$, such that either E∈B₀ is tilt-semistable at some $w>0$, or E[1]∈B₁ is tilt-semistable at some $w>1/2$. No sheaf assertion is built into this set. It is nonempty: the failed BG₃ sheaf A has y≥f(μ) and is tilt-stable at $b=0$ for large w by the constructed large-volume converse. [given, A1, F1, step 7.1, algebra]

9.1 The rational tilt discriminant gives Δ(E)≥0 for every E in this set. The number $Δ=C_{1}^{2}-2C_{0}C_{2}$ is an integer: C₁ is integral, $C_{0}=v$ rk is integral and 2C₂ is integral. C₁(E) is a positive integer. Choose an element minimizing the ordered pair (Δ(E),C₁(E)) lexicographically in $N×N_{>0}$. This is a genuine well-founded minimum; no boundedness of ranks or moduli is required. [given, A1, F1, step 8.1, algebra]

10.1 The function f(x)/x is nondecreasing on (0,m]: it equals −1/2 on (0,ε] and equals (1+ε)/(2(1−ε))−[ε/(1−ε)]/x on [ε,m]. Consequently, if y≥f(μ) and $0<x\le μ\le m$, every point on the line segment from (μ,y) toward (0,w₀), $w_{0}>0$, with coordinate x satisfies $y_x\ge f(x)$. The inequality is strict compared with (x/μ)y when $x<μ$, because the intercept w₀ is positive. [given, A1, F1, step 9.1, algebra]

11.1 The function $g(x)=[f(x)-1/2]/(1-x)$ is nonincreasing on [0,1): it equals −(1+x)/(2(1−x)) on [0,ε], the constant −(1+ε)/(2(1−ε)) on [ε,m], and −(1+x)/2 on [m,1). Thus if $μ\le x<1$, the line from (μ,y≥f(μ)) toward (1,w₁), $w_{1}>1/2$, has $y_x\ge f(x)$, strictly for $x>μ$ whenever comparison with the line to (1,1/2) is used. In particular, for x≥m with $x>μ$ this line lies strictly above x²/2, and cannot contain the numerical point of a tilt-semistable nonzero-rank object, by Δ≥0. At $x=μ=m$ the only possible point $y=f(m)=m^{2}/2$ has $Δ=0$. [given, A1, F1, step 10.1, algebra]

12.1 Suppose a minimal-set object at $b=0$ has a proper equal-finite-phase splitting 0→U→E→V→0 with both denominators positive. Such factors are themselves semistable. Their C₁ coordinates are positive and add to C₁(E); among the positive-rank factors choose F with $0<μ(F)\le μ(E)$. To prove existence, add the positive-rank factors: their ranks sum to at least rank E, while their positive C₁ sum to at most C₁(E). Their rank-weighted average slope is therefore at most μ(E). This argument needs only the two factors U,V, not a Jordan–Hölder filtration. Equal phase says Π(F) lies on the line through Π(E) and (0,w). Its slope coordinate lies between 0 and μ(E), so the argument beginning at step 10.1 gives y(F)≥f(μ(F)). Thus F∈Sε. [given, A1, F1, step 11.1, algebra]

13.1 At $b=1$ use the actual heart object E[1], whose rank is negative. If it has a proper equal-finite-phase split with both denominators positive, sum the negative-rank factors and write $R_i=-C_{0}(F_i)>0$. Their denominators are $R_i(1-μ(F_i))$; their total $R_i$ is at least C₀(E), while their total denominator is at most C₀(E)(1−μ(E)). Hence at least one such factor has μ(F)≥μ(E), and every negative-rank factor has $μ(F)<1$. Replace this chosen factor by F[−1] to obtain positive rank. Equal phase places its point on the line toward (1,w), and the argument beginning at step 10.1 plus Δ≥0 forces $μ(E)\le μ(F)<m$, except the harmless possible equality $μ(F)=μ(E)=m$. It therefore belongs to Sε too. [given, A1, F1, step 12.1, algebra]

14.1 The discriminant comparison is rigorous in both cases. On a fixed finite-phase ray, with $s>0$, Δ has Lorentz form as in the discriminant supplier. If x,y are vectors in its nonnegative forward cone, their associated bilinear pairing is nonnegative; it vanishes only for proportional null vectors. Thus Δ(x+y)≥Δ(x)+Δ(y), and for either nonzero positive-denominator summand [given, A1, F1, step 13.1, algebra]

15.1 $Δ(summand)<Δ(total)$, [given, A1, F1, step 14.1, algebra]

16.1 unless total and both summands are proportional and null. The strict case contradicts minimal Δ of Sε. In the exceptional null case, the selected factor has numerical vector t times the heart object's vector with $0<t<1$, because its positive denominator is smaller than the total. After undoing the possible shift, $0<C_{1}(F)=t$ $C_{1}(E)<C_{1}(E)$, contradicting the secondary minimum. No exception remains. [given, A1, F1, step 15.1, algebra]

17.1 Consequently a minimal object has no proper equal-finite-phase splitting at either vertical line whenever it is semistable there. Numerically zero quotients are not such a splitting and do not enter the rank-average argument; weak strict stability correctly allows them. Also no variation of w can make a minimal object lose semistability: the constructed rational fixed-heart finite-class argument would produce a first equal-finite-phase splitting at the boundary of its semistable interval, and the preceding descent excludes it. Starting from any supplied semistable w, minimality thus gives semistability for every allowed w on that vertical line. [given, A1, F1, step 16.1, algebra]

18.1 If the chosen object is represented at $b=0$, it is semistable there for arbitrarily large w. The proved large-parameter classification says that its positive-rank class is a torsion-free μ-semistable coherent sheaf: the alternative with nonzero ordinary H⁻¹ and ordinary H⁰ supported in dimension≤1 has negative rank and is impossible. Rank-zero torsion in a positive-rank coherent sheaf is likewise excluded by finite-part membership and large-parameter semistability. [given, A1, F1, step 17.1, algebra]

19.1 If the chosen object is represented only at $b=1$, its heart representative E[1] is semistable there for arbitrarily large w and has negative rank. The same classification yields ordinary $H^{-1}(E[1])=F$ a μ-semistable torsion-free sheaf and $H^{0}(E[1])=T$ supported in dimension≤1. The positive class of F has $μ(F)=μ(E)$, y(F)≥y(E), and Δ(F)≤Δ(E). Refine F by ordinary μ-stable factors (a finite filtration exists by induction on rank, after saturation). They all have the same slope. Choose a factor F₀ with y(F₀)≥y(F). Then [given, A1, F1, step 18.1, algebra]

20.1 Δ(F₀)≤[C₀(F₀)/C₀(F)]² Δ(F)≤Δ(F), [given, A1, F1, step 19.1, algebra]

21.1 using Δ(F)≥0. If F has more than one such factor, this strictly lowers Δ unless $Δ(F)=0$, when its smaller positive C₁ lowers the secondary coordinate. If F is itself stable, take $F_{0}=F$. In every case F₀ is ordinary stable, has y≥f at the same slope, and belongs to Sε through its large-volume $b=0$ stability. Minimality forces equality of the minimizing pair and permits replacement by this ordinary stable sheaf. The same stable-factor argument applied to a $b=0$ μ-semistable sheaf proves it is already stable or can be replaced in this way. [given, A1, F1, step 20.1, algebra]

22.1 Replace this stable sheaf by its reflexive hull E**. It is μ-stable: a destabilizing smaller-rank subsheaf of E** intersects E in the same rank and first Chern class, contradicting stability of E. The quotient E**/E has dimension≤1 and nonnegative C₂; hence its hull has the same μ, larger y and no larger Δ. It belongs to Sε by $b=0$ large-volume stability, so minimality again allows this replacement without increasing the minimum. Rename the resulting reflexive stable sheaf E. It is a minimum of the SAME original set, not a newly enlarged set. [given, A1, F1, step 21.1, algebra]

23.1 At $b=0$, E is semistable for all $w>0$ by the descent argument. Since $μ(E)\le m<1$, E[1] is a finite-part object of B₁. Its truncated dual is E*, which is ordinary stable and lies in $B_{-1}$. The constructed large-volume converse and semistability duality therefore make E[1] semistable at $b=1$ for large w. Its minimality and the argument beginning at step 12.1 make it semistable there for EVERY $w>1/2$. Tensoring by O(−H) gives that E(−H)[1] is semistable at $b=0$ for every $w>0$: the exact untwisted parameter change is $b'=b-1$, $w'=w-b+1/2$, so $b=1$ maps to $b'=0$ and $w'=w-1/2>0$. The source slopes change by subtracting one; no twisted-numerator convention is substituted. [given, A1, F1, step 22.1, algebra]

24.1 Fix any integral Cartier divisor S∈|H|, with i:S→X. Reflexivity makes E|S torsion-free by the depth argument in the effective-restriction supplier. For every $w>0$ there is the short exact sequence in B₀ [given, A1, F1, step 23.1, algebra]

25.1 0→E→i*(E|S)→E(−H)[1]→0. [given, A1, F1, step 24.1, algebra]

26.1 Put $μ=μ(E)\in (0,m]$, $y=C_{2}(E)/C_{0}(E)\ge -μ/2$. Its endpoint slopes are [given, A1, F1, step 25.1, algebra]

27.1 $l(w)=(y-w)/μ$, $h(w)=(w-y+μ-1/2)/(1-μ)$. [given, A1, F1, step 26.1, algebra]

28.1 The value where they agree is $w_{0}=y-μ^{2}+μ/2$. If $w_{0}>0$, both endpoints are semistable of the same slope there; their extension i*(E|S) is semistable. Ambient GRR identifies the slope of any positive-rank sheaf on S as $ν(i*F)=μ_{H|S}(F)-1/2$, exactly as derived in the effective-restriction supplier. Every coherent quotient on S is also a quotient in B₀. Thus E|S is ordinary slope-semistable, and its only HN slope μ belongs to (0,m]⊂[0,2ε/(1−3ε)]. [given, A1, F1, step 27.1, algebra]

29.1 If w₀≤0, then l(w)≤h(w) for all $w>0$. The weak HN slopes of the extension i*(E|S) all lie in [l(w),h(w)]. Indeed a highest-slope semistable HN subobject with $\text{slope}>h(w)$ has zero maps to both semistable endpoints, contradicting the exact sequence; a lowest-slope quotient with $\text{slope}<l(w)$ is excluded dually. This also excludes null HN factors at either extreme. Hence every subobject has average slope≤h(w) and every positive-denominator quotient has average slope≥l(w). [given, A1, F1, step 28.1, algebra]

30.1 The ordinary slope HN filtration on S exists even when S is singular. Here is the needed construction. A torsion-free coherent G on the integral S injects into its double dual: locally, a finite torsion-free module over a domain embeds in a finite free module after clearing denominators in its fraction-field embedding, so the dual linear forms separate its elements. Eventual global generation of G* twisted by $O_S(mH)$ then gives $G\subset O_S(mH)^N$. For any rank-q subsheaf F⊂G, choose q coordinate rows that are independent at the generic point; their projection gives an injection $F\subset O_S(mH)^q$. The cokernel has dimension at most one and nonnegative ambient C₂. Therefore C₂(i*F)≤q $C_{2}(i*O_S(mH))$, bounding the normalized slope of every subsheaf by m. These slopes form a discrete bounded-above set, since 2C₂ is integral and 1≤q≤rk G. Choose a maximal-slope subsheaf of largest rank and saturate it: saturation is coherent and changes the slope only upward (by a nonnegative effective-cycle degree), so maximality preserves the same slope and gives a torsion-free quotient. Every quotient slope-HN maximal factor has smaller slope, since otherwise its preimage contradicts maximal slope or largest rank. Induction on rank gives a finite HN filtration. This also proves the required HN existence rather than silently importing a smooth-surface theorem. [given, A1, F1, step 29.1, algebra]

31.1 Take the highest ordinary HN subsheaf $G_{\max}\subset E|S$ and lowest ordinary HN quotient $G_{\min}$. They are also a subobject and a quotient in B₀ after i*, with positive denominators. They need not be tilt-semistable; only their average numerical slopes are used. Therefore [given, A1, F1, step 30.1, algebra]

32.1 $l(w)\le μ_{H|S}(G_{\min})-1/2$ $\le μ_{H|S}(F_i)-1/2$ $\le μ_{H|S}(G_{\max})-1/2\le h(w)$. [given, A1, F1, step 31.1, algebra]

33.1 Letting w decrease to zero gives [given, A1, F1, step 32.1, algebra]

34.1 $μ_{\min}(E|S)\ge$ y/μ+1/2≥0, $μ_{\max}(E|S)\le [-y+μ/2]/(1-μ)$ ≤μ/(1−μ)≤2ε/(1−3ε). [given, A1, F1, step 33.1, algebra]

35.1 These are precisely the required uniform HN bounds, with no rank-dependent restriction constant. The endpoint $μ=m$ is included since $m<1$. This proves the stated certificate. [given, A1, F1, step 34.1, algebra] ∎
