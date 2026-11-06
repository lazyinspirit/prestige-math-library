---
id: lem-gts-exact-numerical-wall-line-transport
kind: lemma
title: "Exact semistable transport along numerical wall lines across slope hearts"
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
reference: items/lem-gts-exact-numerical-wall-line-transport.md
dependency_level: 3
---

## Statement

Assume AC. Let X be a smooth integral projective complex threefold and H an ample Cartier divisor. Use $C₀=H³ch₀, C₁=H²ch₁, C₂=Hch₂$ and the first slope heart $B_{b}$. Assume explicitly ordinary numerical sheaf BG: C₁(F)²−2C₀(F)C₂(F)≥0 for every H-slope-semistable torsion-free coherent sheaf F, where its ordinary slope is μ_H(F)=C₁(F)/C₀(F). Let w=ℓb+c be a line whose intersection with $U={w>b²/2}$ is nonempty. Write $b₋<b₊$ for the two roots of b²/2=ℓb+c, and define the additive functional L(E)=C₂(E)−ℓC₁(E)−cC₀(E). Suppose E has positive denominator C₁−bC₀ and is source-slope-semistable of slope ℓ at one point (b,w) of this line. Then E belongs to $B_{u}$ and is source-slope-semistable of slope ℓ for every real u∈(b₋,b₊), with parameter w(u)=ℓu+c. In particular the exact same object and exact same morphism persist along the full numerical wall whenever they start in a semistable exact sequence on it. The resulting assertion includes irrational u: semistability is the stated inequality for subobjects, so its transport does not require irrational-parameter HN existence.

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

1.1 For an ordinary μ-semistable torsion-free sheaf G of slope μ, ordinary BG gives [given, A1, F1, algebra]

2.1 L(G) ≤ C₀(G) [ μ²/2−ℓμ−c ]. [given, A1, F1, step 1.1, algebra]

3.1 The bracket is strictly negative for μ∈(b₋,b₊). The same strict inequality holds for any nonzero torsion-free sheaf all of whose ordinary HN slopes lie in a closed subinterval of (b₋,b₊), by addition over its finite HN filtration. [given, A1, F1, step 2.1, algebra]

4.1 Write $F=H⁻¹(E), T=H⁰(E)$. If F≠0, its highest ordinary HN subsheaf F₁ has slope μ₁≤b. If $μ₁>b₋$, then L(F₁)<0 and L(F₁[1])>0. But F₁[1]⊂F[1]⊂E in $B_{b}$. Its denominator is nonnegative; if positive, $L>0$ says it has slope greater than ℓ; if zero, its assigned slope is infinity. Both contradict finite-slope semistability. Consequently μ_max(F)≤b₋. [given, A1, F1, step 3.1, algebra]

5.1 If the torsion-free quotient of T is nonzero, its lowest HN quotient $T_{last}$ has slope $μ_{last}>b$. It is a quotient of E in $B_{b}$. If $μ_{last}<b₊$ then $L(T_{last})<0$, so its finite slope is less than ℓ, contradicting semistability of E. Thus μ_min(T/tors T)≥b₊. Torsion has slope infinity and causes no change to this membership conclusion. Therefore $F∈F_{u}$ and $T∈T_{u}$ for all u∈(b₋,b₊). The same E belongs to every $B_{u}$, and L(E)=0 gives its slope ℓ as long as its denominator is positive. [given, A1, F1, step 4.1, algebra]

6.1 The denominator cannot vanish inside this interval. If C₀(E)=0 it is its fixed positive value. If C₀(E)≠0 and it vanished at u, then L(E)=0 would give C₂(E)=ℓC₁(E)+cC₀(E) and hence Δ(E)=C₀(E)²[u²−2ℓu−2c]<0. At the original rational point the discriminant theorem forbids this. Alternatively, without requiring the original point rational, the just-proved heart-membership forces C₁(E)−uC₀(E)≥0 on the entire open interval; a nonconstant affine function cannot have an interior zero while remaining nonnegative on both sides. This second argument proves positivity without any use of tilt discriminant or rationality. [given, A1, F1, step 5.1, algebra]

7.1 Fix $b₋<u₀<u₁<b₊$. In $B_{u₀}$, define G to be the ordinary torsion-free sheaves whose HN slopes all belong to (u₀,u₁]. Define T to be the objects A with ordinary $H⁻¹(A)∈F_{u₀}$ and $H⁰(A)∈T_{u₁}$. Then (T,G) is a torsion pair in $B_{u₀}$, and [given, A1, F1, step 6.1, algebra]

8.1 $B_{u₁}=⟨G[1],T⟩$. [given, A1, F1, step 7.1, algebra]

9.1 Here is the construction, rather than an imported assertion about hearts. Hom(T,G)=0 follows from $Hom(T_{u₁},G)=0$ by the sheaf slope HN inequality, and $Hom(F_{u₀}[1],G)=0$ by negative Ext degree. For $A∈B_{u₀}$, take the ordinary HN quotient $H⁰(A)→G_{A}$ consisting of slopes in (u₀,u₁], after its torsion and $\text{slopes}>u_1$ have been removed. Its composition $A→H⁰(A)→G_{A}$ is an epimorphism in $B_{u₀}$; its kernel $T_{A}$ has $H⁰(T_{A})∈T_{u₁}$ and $H⁻¹(T_{A})=H⁻¹(A)$. This gives $0→T_{A}→A→G_{A}→0$. Conversely the elementary torsion-pair truncation used in the first-heart construction says that the tilted heart has old cohomology H⁻¹ in G and H⁰ in T. Combining this description with ordinary cohomology gives exactly $H⁻¹∈F_{u₁}, H⁰∈T_{u₁}$, hence $B_{u₁}$. One may check the last equality directly by splitting the ordinary HN filtration of H⁻¹ at u₀: its part of slopes≤u₀ shifted by one lies in T, and its remaining part lies in G[1]. [given, A1, F1, step 8.1, algebra]

10.1 Every nonzero G∈G satisfies L(G)<0 by the argument beginning at step 1.1. Also E belongs to T by its already proved cohomology bounds. Both facts are essential; no assertion that arbitrary objects survive a heart change is being made. [given, A1, F1, step 9.1, algebra]

11.1 Assume E is semistable in $B_{u₀}$, with L(E)=0, and let A⊂E be a subobject in $B_{u₁}$. Taking $B_{u₀}$-cohomology of 0→A→E→Q→0 gives H⁻¹_old(A)=0, so A∈T, and an exact sequence [given, A1, F1, step 10.1, algebra]

12.1 0→K→A→E→H⁰_old(Q)→0 [given, A1, F1, step 11.1, algebra]

13.1 in $B_{u₀}$, where $K=H⁻¹_{old}(Q)∈G$. Let I be the old-heart image A→E. Then 0→K→A→I→0 is exact in $B_{u₀}$, and old semistability gives L(I)≤0 whenever I≠0; this also rules out a nonzero old null subobject of E. Consequently L(A)=L(K)+L(I)≤0. For positive new denominator this is precisely the required new slope inequality. [given, A1, F1, step 12.1, algebra]

14.1 If A had zero new denominator, weak-charge positivity would imply L(A)≥0. Equality above would force $K=0$ (strict negativity on nonzero G), and then $A=I$ is a subobject of E in both hearts. A new-null object has ordinary H⁻¹ of slope u₁ and H⁰ of dimension≤1. Since A∈T has H⁻¹ of $\text{slopes}\le u_0<u_1$, its H⁻¹ must vanish. Thus A is a coherent sheaf of dimension≤1. It is old-null too and cannot be a nonzero subobject of the old finite-slope semistable E. Therefore no nonzero new null subobject exists. This proves semistability in $B_{u₁}$. [given, A1, F1, step 13.1, algebra]

15.1 Weak-charge positivity used here is elementary at a real parameter: an object of zero denominator consists of a slope-u₁ semistable sheaf shifted by one and a sheaf supported in dimension≤1; ordinary BG and $w(u₁)>u₁²/2$ give nonnegative numerator. It does not require real-parameter HN for the tilt slope. [given, A1, F1, step 14.1, algebra]

16.1 Assume instead that E is semistable in $B_{u₁}$. Let I⊂E be a subobject in $B_{u₀}$, and use its torsion-pair sequence $0→T_{I}→I→G_{I}→0$ from the argument beginning at step 7.1. Since T is a torsion class and E∈T, its old quotient $E/T_{I}$ also belongs to T. Thus $0→T_{I}→E→E/T_{I}→0$ is exact in both hearts. New semistability gives $L(T_{I})≤0$, while $L(G_{I})<0$ if $G_{I}≠0$. Hence $L(I)=L(T_{I})+L(G_{I})≤0$. All positive-old-denominator subobjects obey the required inequality. [given, A1, F1, step 15.1, algebra]

17.1 A nonzero old-null subobject I would have L(I)≥0. Equality forces $G_{I}=0$, so I∈T and is a subobject in both hearts. If its old H⁻¹ is nonzero of slope u₀, then its new denominator is (u₁−u₀)C₀(H⁻¹)>0, and ordinary BG gives L(I)>0 because the shifted sheaf contributes strictly positive L while a one-dimensional H⁰ contributes nonnegative L; this contradicts new semistability. If H⁻¹ vanishes, I is a coherent sheaf of dimension≤1, hence also new-null, again impossible. Thus old-null subobjects are ruled out. E is semistable in $B_{u₀}$. [given, A1, F1, step 16.1, algebra]

18.1 Start with a same-slope semistable short exact sequence 0→E₁→E→E₂→0 at one point on the line, with all three denominators positive. the argument beginning at step 1.1 places each $E_{i}$ in all hearts along the open line segment. The fixed derived triangle therefore remains a short exact sequence in each heart. the arguments beginning at steps 11.1 and 16.1 make all three objects semistable of slope ℓ there. In particular the original map remains the same subobject or quotient throughout the segment. No chamber or local-finiteness theorem is needed for this persistence assertion. [given, A1, F1, step 17.1, algebra]

19.1 This component does not alone assert the existence of a first wall along every arbitrary two-parameter path. The preceding rational fixed-β construction supplies the finite-class argument for vertical paths. Together these are enough to move an existing wall sequence to any other β on that same line in the effective-restriction argument. Large-volume existence of semistability for a given ordinary slope-stable sheaf and the quantitative safe-region inequalities are separate next deductions. [given, A1, F1, step 18.1, algebra] ∎
