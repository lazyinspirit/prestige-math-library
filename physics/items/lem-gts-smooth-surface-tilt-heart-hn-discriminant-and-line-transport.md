---
id: lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport
kind: lemma
title: "Smooth surface tilt hearts, HN, discriminant, numerical-line transport and the line object"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
  - def-derived-category-of-an-abelian-category
  - lem-eventual-global-generation-coherent-twists
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-auslander-buchsbaum-formula
  - thm-depth-lemma
  - thm-hilbert-polynomial-degree-support-dimension
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-depth-lemma: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
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
reference: items/lem-gts-smooth-surface-tilt-heart-hn-discriminant-and-line-transport.md
dependency_level: 3
---

## Statement

Assume AC and DC. Let S be a smooth integral projective complex surface, H ample Cartier, $v=H²$, $C₀=v$ rk, $C₁=Hch₁$, $C₂=ch₂$, and $μ=C₁/C₀$ for positive-rank sheaves. Let $T_{b}$ be torsion sheaves and torsion-free sheaves with all ordinary HN slopes $>b$, and $F_{b}$ torsion-free sheaves with all HN slopes≤b. Then $B_{b}=⟨F_{b}[1],T_{b}⟩$ is a bounded heart for every real b, and is noetherian for rational b. For rational b and $w>b²/2$, $Z_{b,w}=−C₂+wC₀+i(C₁−bC₀)$ is a stability function with finite HN filtrations; zero denominator has slope infinity. Every semistable E has $Δ(E)=C₁²−2C₀C₂≥0$. On any fixed rational b and compact α²-interval in (0,∞), where $w=(α²+b²)/2$, the norm of (C₀,C₁−bC₀,C₂−bC₁+b²C₀/2) is bounded by a constant times |Z| for every semistable E; the harmless real shear between source and conventional Z does not change this assertion. Potential wall classes for a fixed finite-slope E are locally finite on that vertical line. A finite-slope semistable object or equal-phase exact sequence persists, with the same objects and maps, along its entire numerical line $w=ℓb+c$ inside $w>b²/2$, including real b. Finally $O_{S}[1]$ is stable of finite phase for every rational $b>0$ and every $w>b²/2$. These interfaces suffice for the owner's finite HN/evaluation-cone arguments. No singular-surface specialization or general two-parameter stability-manifold deformation theorem is asserted.

## Statement references

[[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]]

[[def-derived-category-of-an-abelian-category]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-auslander-buchsbaum-serre-regularity-criterion]]

[[thm-auslander-buchsbaum-formula]]

[[thm-depth-lemma]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are retained. Ordinary smooth-surface BG is consumed from its actual installed mathematical supplier, with no singular extension.

[F1] The exact inputs are [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]], [[def-derived-category-of-an-abelian-category]], [[lem-eventual-global-generation-coherent-twists]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-auslander-buchsbaum-formula]], [[thm-depth-lemma]], [[thm-hilbert-polynomial-degree-support-dimension]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]], [[def-dependent-choice]]. No threefold-only theorem is used outside its Statement scope. In particular a zero-dimensional surface sheaf contributes its positive length to C₂.

## Proof

**Given:** Exactly the smooth-surface data and conventions of the Statement.

1.1 The coherent category is essentially small: finite affine covers, finite presentations over the fixed coordinate algebras, and their finite gluing maps form a set of representatives. Bounded complexes and their roofs therefore satisfy the standing derived-category convention. For a torsion-free coherent E, the natural E→E** is injective, by embedding its local finite modules in finite free modules after clearing denominators over the fraction field. Eventual global generation of E* twisted by O(mH) gives E⊂O(mH)^N. For any rank-q subsheaf, choosing q coordinate rows independent generically gives an injection into O(mH)^q; the determinant zero divisor is effective, so its slope is bounded above by m. Since degrees are integral and ranks bounded, the possible subsheaf slopes are discrete and bounded above. Choose a maximal slope and then maximal-rank saturated subsheaf. Saturation raises slope only by effective divisor degree; its quotient is torsion-free and has smaller maximal slope by the preimage argument. Induction on rank constructs ordinary slope HN. This proves the torsion pair $(T_{b},F_{b})$, with $Hom(T_{b},F_{b})=0$ and its canonical short exact decomposition for every coherent sheaf. [given, A1, F1, algebra]

2.1 For completeness the heart is constructed by truncation. In DᵇCoh S put $D^{\le0}_b=\{K:H^iK=0\text{ for }i>0,H^0K\in T_b\}$ and $D^{\ge0}_b=\{K:H^iK=0\text{ for }i<-1,H^{-1}K\in F_b\}$. Orthogonality follows from ordinary cohomological orthogonality and $Hom(T_{b},F_{b})=0$. Apply the torsion-pair decomposition to H⁰ of the ordinary truncation to obtain the required truncation triangle; shifting gives the other half. Their intersection is exactly the two-term category $B_{b}$, which is abelian as a heart, and the ordinary cohomology bounds make this t-structure bounded. [given, A1, F1, step 1.1, algebra]

3.1 The additive denominator $d_{b}=C₁−bC₀$ is nonnegative on $B_{b}$. Its zero subcategory consists exactly of objects with $H^{-1}$ a slope-b semistable torsion-free sheaf (or zero) and H⁰ zero-dimensional (or zero); it is Serre because $d_{b}$ is additive and nonnegative. On a surface, unlike the threefold coordinates, $C₂(T)=length(T)>0$ for a nonzero zero-dimensional sheaf. For rational b the values of $d_{b}$ are discrete. [given, A1, F1, step 2.1, algebra]

4.1 Here is first-heart noetherianity. In a chain $A_{i}⊂A_{i+1}⊂E$, $d_{b}(A_{i})$ eventually stabilizes, so $Q_{i}=A_{i+1}/A_{i}$ has denominator zero. The coherent $H^{-1}(A_{i})$ stabilize inside $H^{-1}(E)$. Thereafter $H^{-1}(Q_{i})$ injects into $H⁰(A_{i})$; its positive rank subtracts from rank $H⁰(A_{i})$ in the cohomology sequence, since $H⁰(Q_{i})$ is zero-dimensional. Thus $H^{-1}(Q_{i})=0$ eventually. All later $Q_{i}$ are zero-dimensional. Put $E_{i}=E/A_{i}$. The sheaves $H^{-1}(E_{i})$ then increase with zero-dimensional cokernels; they have one common double dual. A reflexive sheaf on a regular surface is locally free: it has depth two by its dual-kernel presentation and the depth lemma, hence projective dimension zero by Auslander–Buchsbaum. The increasing chain is therefore inside a fixed coherent bundle and stops. The $H⁰(E_{i})$ quotient chain stops by coherent noetherianity. The remaining $Q_{i}$ vanish. This proves noetherianity rather than presuming it from a named tilt theorem. [given, A1, F1, step 3.1, algebra]

5.1 The actual ordinary BG supplier gives Δ(F)≥0 for every slope-semistable torsion-free surface sheaf. In particular, if $μ(F)=b$, C₂(F)≤b² C₀(F)/2. For a zero-denominator object F[1]+T as above, [given, A1, F1, step 4.1, algebra]

6.1 $C₂(E)−wC₀(E)≥(w−b²/2)C₀(F)+length(T)>0$ [given, A1, F1, step 5.1, algebra]

7.1 unless $E=0$. Hence Z takes the strict upper half-plane or negative real axis on every nonzero object. It has NO nonzero zero-charge object. This is the dimension-sensitive correction essential to the surface formulation. [given, A1, F1, step 6.1, algebra]

8.1 Noetherianity and discrete nonnegative imaginary parts give finite HN directly. Take the largest zero-denominator subobject by stabilization of finite sums; it is the slope-infinity first factor, and its quotient has none. A descending chain of subobjects of strictly increasing phase stops: the denominators eventually agree and their zero-imaginary quotients have strictly negative real part, forcing the phases to decrease instead. Thus replacing an unstable object by a higher-phase subobject reaches a semistable one. For a fixed E let a be the supremum of phases of its semistable subobjects. For $θ<a$ form the largest finite sum $T_θ$ of all semistable subobjects of phase $>θ$. Every quotient of that sum has phase $>θ$. Its phase cannot exceed a, since the preceding replacement procedure would give a still higher semistable subobject. Along $θ_{j}↑a$ the $T_θ$ decrease, their denominators stabilize, and their phases are then nonincreasing while lying in ($θ_{j},a]$; hence they equal a and the supremum is attained. The largest phase-a semistable subobject has quotient with strictly lower maximum phase, by taking preimages. Iteration stops because its kernels form an ascending chain in the noetherian heart. This constructs the finite ordered HN filtration. [given, A1, F1, step 7.1, algebra]

9.1 Use $r=C₀,s=d_{b},t=C₂−bC₁+b²C₀/2$, $a=α²=2w−b²>0$, and conventional slope $λ=(t−ar/2)/s=ν_{b,w}−b$. The quadratic form is $Δ=s²−2rt$. On a zero-denominator semistable object F[1]+T, Δ=Δ(F)+2C₀(F)length(T)≥0. For positive s, induct on its positive discrete value. On ker[−(t−ar/2)+is] the quadratic form is −ar², negative definite. Compactness of unit vectors with Δ≥0 over a compact positive a-interval therefore gives a uniform numerical support bound. On a fixed finite-slope ray λ, [given, A1, F1, step 8.1, algebra]

10.1 Δ=(1+λ²/a)s²−a(r+λs/a)², [given, A1, F1, step 9.1, algebra]

11.1 so Δ≥0 with $s>0$ is a convex cone. [given, A1, F1, step 10.1, algebra]

12.1 Here is the wall step without a deformation-theorem input. If E is semistable at a₀ and a nearby parameter destabilizes it, the first HN factor F has $0<s(F)<s(E)$: null subobjects are excluded and equal-denominator subobjects have a null quotient with strictly positive numerator, so cannot destabilize. Induction gives Δ(F)≥0 and the uniform support bound. Old semistability gives Re $Z_{a₀}(F)≥[s(F)/s(E)]Re$ $Z_{a₀}(E)$; new destabilization bounds Re $Z_{a}(F)$ above. Since $Z_{a}−Z_{a₀}=(a−a₀)r/2$, choosing the parameter difference times the support constant less than one half also bounds that real part below. Thus ||(r,s,t)(F)|| is bounded. The numerical triples form a lattice at rational b, so only finitely many classes occur locally. This proves the asserted vertical local finiteness. [given, A1, F1, step 11.1, algebra]

13.1 If $Δ(E)<0$, no equal-phase split can occur at a semistable parameter: both positive-denominator factors have smaller s and Δ≥0 by induction, and the fixed-ray convexity would give Δ(E)≥0. The finite-class argument therefore makes its semistable parameter set open. It is also closed, as the intersection of its fixed subobject slope inequalities. If nonempty it is all $a>0$. [given, A1, F1, step 12.1, algebra]

14.1 That is impossible by the following direct large-parameter classification. Write $F=H^{-1}E$, $T=H⁰E$. If F≠0 its maximal slope is strictly below b, since a boundary-slope shifted factor would be a null subobject. If $d_{b}(T)>0$, the a-coefficient of the subobject F[1] is strictly larger than that of E, so it destabilizes for large a. Hence T is zero-dimensional. The highest ordinary HN factor of a non-semistable F likewise has larger positive a-coefficient $1/[2(b−μ_{\operatorname{max}})]$ than F[1], and destabilizes; so F is ordinary semistable and Δ(E)=Δ(F)+2C₀(F)length(T)≥0. If $F=0$, E is a coherent sheaf. Rank zero gives $Δ=C₁²≥0$. In positive rank, torsion supported in dimension zero is a forbidden null subobject, and one-dimensional torsion has slope independent of a whereas E's slope tends to −∞; so E is torsion-free. A highest ordinary HN factor of larger μ has less negative a-coefficient −1/[2(μ−b)] and destabilizes. Thus E is ordinary semistable and BG gives Δ≥0. This contradiction proves the induction and all claimed support estimates. The source charge differs from this conventional charge only by a fixed real shear at fixed b, so equivalent norm bounds apply to it. [given, A1, F1, step 13.1, algebra]

15.1 Let $w=ℓu+c$ meet the upper-parabola region, with roots $u₋<u₊$, and put $L=C₂−ℓC₁−cC₀$. Ordinary BG gives $L(G)≤C₀(G)(μ²/2−ℓμ−c)<0$ for every ordinary semistable torsion-free G with μ∈(u₋,u₊), and for HN extensions of such sheaves. If E is finite-slope semistable of slope ℓ at one point, its highest ordinary HN subsheaf in $H^{-1}E$, shifted, rules out $μ_{\operatorname{max}}(H^{-1}E)>u₋$; its lowest torsion-free HN quotient in H⁰E rules out $μ_{\operatorname{min}}(H⁰E/tors)<u₊$. Thus E belongs to EVERY heart on that line segment. Its denominator is a nonnegative affine function on the whole segment, positive at one point; it has no interior zero unless identically zero, so it is positive everywhere. [given, A1, F1, step 14.1, algebra]

16.1 For $u₀<u₁$ in the segment, let G be coherent torsion-free sheaves with ordinary HN slopes in (u₀,u₁], and T the $B_{u₀}$ objects with H⁰ in $T_{u₁}$. Ordinary HN gives the torsion pair (T,G) in $B_{u₀}$; its tilt is exactly $B_{u₁}$, by splitting ordinary $H^{-1}$ at u₀. E lies in T, and L is strictly negative on nonzero G. For a new-heart subobject A⊂E, old cohomology gives 0→K→A→I→0 in the old heart, K∈G and I⊂E. Old semistability gives L(I)≤0, so L(A)≤0. A nonzero new-null A has $L(A)>0$ by charge positivity, and is thereby excluded. This proves forward semistability. Conversely decompose an old subobject I as $0→T_{I}→I→G_{I}→0$. Because T is a torsion class and E∈T, $T_{I}→E$ and its quotient remain a short exact sequence in both hearts. New semistability gives $L(T_{I})≤0$ and $L(G_{I})<0$ unless zero, so L(I)≤0; any nonzero old-null I has $L(I)>0$ and is excluded. This proves reverse semistability. If three positive-denominator equal-phase objects form a short exact sequence initially, all three remain in every heart, so the SAME derived triangle remains the SAME short exact sequence. No irrational-parameter HN theorem is used for this transport. [given, A1, F1, step 15.1, algebra]

17.1 Fix rational $b>0$, $a=2w−b²>0$ and $S=O_{S}[1]$. Its denominator is $bv>0$. Suppose it is unstable and take a last HN quotient Q of smaller slope. Ordinary cohomology gives $Q=G[1]$, with G torsion-free in $F_{b}$, and an exact coherent sequence $0→F→O_{S}→G→T→0$, $T∈T_{b}$. The map $O_{S}→G$ cannot be zero: otherwise $G=T$ would belong to both $F_{b}$ and $T_{b}$. It is therefore injective. If T has positive rank or a one-dimensional torsion part, its degree makes $μ(G)>0$. If $μ(G)=0$, T is zero-dimensional, and the inclusion $O_{S}⊂G$ has the same reflexive hull in rank one, so reflexivity of $O_{S}$ gives $G=O_{S}$ and $T=0$. Thus a proper finite-slope quotient has $0<μ(G)<b$. [given, A1, F1, step 16.1, algebra]

18.1 Write $y=C_0(G)/(bv\operatorname{rk}G-C_1(G))=C_0(G)/d_b(Q)>1/b$. The proved Δ(Q)≥0 gives [given, A1, F1, step 17.1, algebra]

19.1 $λ_{a}(Q)≥−1/(2y)+ay/2>−b/2+a/(2b)=λ_{a}(S)$, [given, A1, F1, step 18.1, algebra]

20.1 since the middle function is strictly increasing for $y>0$. This contradicts the choice of Q. The same argument excludes any proper equal-finite-phase quotient if S is semistable. In the relevant stability definition, every proper subobject has strictly smaller slope than its quotient; finite equal-phase factors were just excluded and null quotients have infinite slope, so they do not obstruct strict stability. Therefore S is stable. This proves the required O[1] interface without applying the threefold derived-dual helper to a surface. [given, A1, F1, step 19.1, algebra] ∎
