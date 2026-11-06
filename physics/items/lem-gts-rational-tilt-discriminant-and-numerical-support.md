---
id: lem-gts-rational-tilt-discriminant-and-numerical-support
kind: lemma
title: "Rational tilt discriminant and numerical support from ordinary sheaf BG"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
dependency_roles:
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart: mathematical-premise
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
reference: items/lem-gts-rational-tilt-discriminant-and-numerical-support.md
dependency_level: 3
---

## Statement

Let X be a smooth integral projective complex threefold, H an ample Cartier divisor, $v=H³$, and β rational. For a coherent complex write $C_{0}=v$ ch₀, $C₁=H²$ ch₁, $C_{2}=H$ ch₂ and $r=C_{0}$, $s=C₁−βC_{0}$, $t=C_{2}−βC₁+β²C_{0}/2$, $Δ=s²−2rt=C₁²−2C_{0}C_{2}$. Assume **ordinary numerical sheaf BG**: $Δ(F)≥0$ for every $μ_H-semistable$ torsion-free coherent sheaf F. Use the bounded slope heart Bβ, its null Serre subcategory $Cβ=\{s=0\}$, and the weak HN theorem constructed in the preceding packet. For each $a>0$ use $Z_a=−(t−a r/2)+i$ s,  $λ_a=(t−a r/2)/s$, with $λ=∞$ at $s=0$. Here $a=α²$ and the original untwisted slope is $λ_a+β=ν_{β,(a+β²)/2}$. Every $λ_a-semistable$ object E in Bβ satisfies $Δ(E)≥0$. Moreover, on every compact a-interval $J⊂(0,∞)$ there is $K_J$ such that ||(r,s,t)(E)|| $≤ K_J |Z_a(E)|$ for every positive-denominator semistable E and every $a∈J$. Numerically zero objects are precisely the zero-dimensional coherent sheaves. This is a support statement on the three-coordinate numerical image, not an assertion that the weak heart is itself a Bridgeland stability condition.

## Statement references

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Full Axiom of Choice is retained from the coherent-heart suppliers. Ordinary sheaf BG is a stated hypothesis and is not supplied by a source citation.

[F1] The exact inputs are [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]]. Their local heart and weak HN constructions are consumed; no external wall-crossing theorem is assumed.

## Proof

**Given:** Exactly the Statement data, with ordinary sheaf BG explicitly assumed.

1.1 Since ch₀,ch₁,ch₂ have bounded denominators (1,1,2), the three numerical coordinates at fixed rational β lie in a discrete lattice $L⊂R³$. The values of s on Bβ are nonnegative and discrete. Ordinary BG implies the boundary-slope inequality needed by the preceding HN helper: for $μ(F)=β$, $C₁(F)=β$ C₀(F) and $Δ(F)≥0$ give $C_{2}(F)≤β²C_{0}(F)/2$. Thus that helper applies for every $a>0$, and its HN and finite-part assertions are available without any tilt discriminant assumption. [given, A1, F1, algebra]

2.1 If $E∈Cβ$, its ordinary cohomology is F[1] and T, where F is zero or a $μ_H-semistable$ torsion-free sheaf of slope β and T has dimension at most one. Therefore [given, A1, F1, step 1.1, algebra]

3.1 $Δ(E)=Δ(F)+2$ C₀(F) $C_{2}(T)≥0$. [given, A1, F1, step 2.1, algebra]

4.1 Here $C_{2}(T)≥0$ is the effective one-dimensional cycle degree. If $F=0$ this simply gives $Δ(E)=0$. Also $Z_a(E)=0$ iff $F=0$ and T is zero-dimensional, by strict $a>0$ boundary positivity. If E is finite-slope semistable, E has no nonzero Cβ subobject: such a subobject has assigned slope $∞$. Thus E lies in $Bβ^fin$, and this fact is independent of a. [given, A1, F1, step 3.1, algebra]

5.1 On ker $Z_a$, $s=0$ and $t=a$ r/2, so $Δ=−a$ r²; it is negative definite. Consequently [given, A1, F1, step 4.1, algebra]

6.1 { (a,x): $a∈J$, $||x||=1$, $Δ(x)≥0$ } [given, A1, F1, step 5.1, algebra]

7.1 is compact and disjoint from $Z_a(x)=0$. The positive minimum of $|Z_a(x)|$ proves a uniform bound $||x||≤K_J|Z_a(x)|$ for every $Δ(x)≥0$. This is just finite-dimensional compactness, with no stability-theoretic deformation theorem. [given, A1, F1, step 6.1, algebra]

8.1 For a fixed finite slope ℓ, put $t=ℓs+a$ r/2. Then [given, A1, F1, step 7.1, algebra]

9.1 $Δ=(1+ℓ²/a)s²−a(r+ℓs/a)²$. [given, A1, F1, step 8.1, algebra]

10.1 In the half-plane $s>0$, $Δ≥0$ is the convex cone defined by [given, A1, F1, step 9.1, algebra]

11.1 |sqrt(a)(r+ℓs/a)| $≤$ sqrt(1+ℓ²/a) s. [given, A1, F1, step 10.1, algebra]

12.1 It is closed under sums. In particular, equal-slope positive-denominator objects with nonnegative discriminant have a sum of nonnegative discriminant. [given, A1, F1, step 11.1, algebra]

13.1 Induct on the positive discrete value s(E). The zero case was proved above. Fix E with $s(E)=d>0$ and suppose the result holds for all smaller positive s. If E is semistable at $a_{0}>0$, then for every subobject $F⊂E$ with $0<s(F)<d$, [given, A1, F1, step 12.1, algebra]

14.1 Re $Z_{a_{0}}(F) ≥$ [s(F)/d] Re $Z_{a_{0}}(E)$. [given, A1, F1, step 13.1, algebra]

15.1 There is no null subobject. A subobject with $s(F)=d$ cannot destabilize E at any a: its quotient lies in Cβ and has t−a $r/2≥0$, whence $λ_a(F)≤λ_a(E)$. Thus every possible destabilizing HN first factor at a nearby a has $0<s(F)<d$. It is a semistable object, so induction gives $Δ(F)≥0$ and the uniform support estimate on a compact interval J about a₀. [given, A1, F1, step 14.1, algebra]

16.1 Write $R=\operatorname{Re} Z_a(F)$, $R_{0}=\operatorname{Re} Z_{a_{0}}(F)$, and $δ=|a−a_{0}|$. There is a fixed $B≥0$ with $R_{0}≥−B$, because $0<s(F)<d$ and the preceding semistability inequality holds at a₀. Since $Z_a−Z_{a_{0}}=(a−a_{0})r/2$, [given, A1, F1, step 15.1, algebra]

17.1 R $≥$ −B − (δ/2)|r(F)| $≥$ −B − (δ $K_J/2)|Z_a(F)|$. [given, A1, F1, step 16.1, algebra]

18.1 As $|Z_a(F)|≤|R|+d$, choosing δ $K_J/2<1/2$ gives a uniform lower bound on negative R. The destabilizing inequality gives the upper bound [given, A1, F1, step 17.1, algebra]

19.1 R $<$ [s(F)/d] Re $Z_a(E)$, [given, A1, F1, step 18.1, algebra]

20.1 which is also uniform near a₀. Thus R, s(F), $|Z_a(F)|$, and then ||(r,s,t)(F)|| are all bounded. The lattice L contains only finitely many possible triples in this bounded set. The same proof includes a semistable equal-slope first factor at a₀, replacing the strict upper inequality by equality. Only the numerical classes of subobjects that actually occur are considered; no assertion about boundedness of their isomorphism classes is needed. [given, A1, F1, step 19.1, algebra]

21.1 For later use, assume additionally $Δ(E)<0$. None of those finitely many subobject classes can satisfy equality at a₀. Indeed, if F is an equal-slope subobject of the semistable E with $0<s(F)<d$, F is semistable of the same finite slope, but $Q=E/F$ may have null subobjects. Take its maximal Cβ subobject T, which exists by noetherianity. Its preimage P in E has $s(P)=s(F)$ and $(t−a_{0}r/2)(P)=(t−a_{0}r/2)(F)+(t−a_{0}r/2)(T)$. The boundary positivity from step 4.1 makes the last term nonnegative; semistability of E and equality for F force it to be zero. Hence T is zero-dimensional and has all three coordinates zero. The quotient $Qbar=Q/T$ has no null subobject and is finite-slope semistable of the same slope: any positive-denominator destabilizing subobject lifts first through T and then through F to a destabilizing subobject of E, by additivity and the equal slope of F. Induction therefore gives $Δ(F),Δ(Qbar)≥0$. Since Q and Qbar have identical numerical triples, this is $Δ(F),Δ(E/F)≥0$; the fixed-ray convexity above gives $Δ(E)≥0$, a contradiction. There are therefore finitely many strict inequalities at a₀. Shrinking the a-neighborhood preserves all of them. The preceding finite-class bound shows that no new destabilizer outside this finite set appears there. Hence a negative-discriminant E semistable at a₀ remains semistable in a neighborhood of a₀. [given, A1, F1, step 20.1, algebra]

22.1 The set of parameters $a>0$ where a fixed finite-part E is semistable is closed: it is the intersection over its fixed set of subobjects of the closed inequalities $λ_a(F)≤λ_a(E)$; null subobjects never occur and same-denominator inequalities hold automatically. Thus, for $Δ(E)<0$, this set is both open and closed in the connected interval $(0,∞)$. If it is nonempty, it equals $(0,∞)$. This replaces the usual first-wall assertion by a proved open-and-closed argument. [given, A1, F1, step 21.1, algebra]

23.1 Suppose E is finite-slope semistable for all arbitrarily large a; put $F=H⁻¹(E)∈Fβ$ and $T=H⁰(E)∈Tβ$. All sheaf HN filtrations here are already constructed in the first-heart helper. [given, A1, F1, step 22.1, algebra]

24.1 If $F≠0$, F has $μ_{\operatorname{max}}(F)<β$: otherwise its top $μ=β$ HN subsheaf shifted by one would be a Cβ subobject of E. Thus $s(F[1])>0$. The first-heart exact sequence is $0→F[1]→E→T→0$. If $s(T)>0$, compare the coefficients of a in the slopes of F[1] and E. Write $R_F=C_{0}(F)>0$, $R_T=C_{0}(T)≥0$, $d_F=s(F[1])>0$, $d_T=s(T)>0$. Their coefficients are respectively $R_F/(2d_F)$ and $(R_F−R_T)/(2(d_F+d_T))$; the first is strictly larger. The subobject F[1] therefore destabilizes for large a, impossible. Hence $s(T)=0$. Since $T∈Tβ$, it follows that T has dimension at most one. [given, A1, F1, step 23.1, algebra]

25.1 If F is not μ-semistable, its highest-slope HN subsheaf F₁ has $μ(F₁)>μ(F)$, both strictly below β. In the heart $F₁[1]⊂F[1]⊂E$. Its positive a-coefficient 1/[2(β−μ(F₁))] is strictly larger than that of E, 1/[2(β−μ(F))]. This too destabilizes for large a. Thus F is μ-semistable. By ordinary BG and $C_{2}(T)≥0$, [given, A1, F1, step 24.1, algebra]

26.1 $Δ(E)=Δ(F)+2C_{0}(F)C_{2}(T)≥0$. [given, A1, F1, step 25.1, algebra]

27.1 If $F=0$, $E=T$ is a coherent sheaf in Tβ. If it has rank zero, $Δ(E)=C₁(E)²≥0$, with no purity assertion needed. If it has positive rank, a nonzero torsion subsheaf of dimension at most one would be a null subobject, forbidden. A two-dimensional torsion subsheaf has rank zero and positive denominator, so its slope is independent of a whereas E's slope tends to $−∞$; it therefore destabilizes for large a. E is torsion-free. All of its HN slopes exceed β. If it is not μ-semistable, its highest HN subsheaf E₁ has $μ(E₁)>μ(E)>β$, and its coefficient −1/[2(μ(E₁)−β)] is strictly larger than E's coefficient −1/[2(μ(E)−β)]. Again this is a large-a destabilizer. Thus E is μ-semistable and ordinary BG gives $Δ(E)≥0$. [given, A1, F1, step 26.1, algebra]

28.1 If the induction object E were semistable at some a₀ and had $Δ(E)<0$, the argument beginning at step 13.1 would make it semistable for every $a>0$. the argument beginning at step 23.1 contradicts its negative discriminant. This proves the induction, hence $Δ≥0$ for every tilt-semistable object and every $a>0$ at this fixed rational β. the argument beginning at step 1.1 then proves the claimed uniform numerical support estimate. [given, A1, F1, step 27.1, algebra]

29.1 The proof uses the first-heart/HN packet and ordinary sheaf BG, but it does not use a preexisting tilt discriminant inequality, a wall-existence theorem, a deformation theorem, effective restriction, a BN inequality, or the threefold BMT inequality. It does not yet prove β-varying heart deformation, ordinary sheaf BG, effective restriction, or the zero-discriminant locally-free/projectively-flat classification. In particular the latter classification must not be replaced by an unjustified assertion that $Δ=0$ already implies the required ch₃ bound. [given, A1, F1, step 28.1, algebra] ∎
