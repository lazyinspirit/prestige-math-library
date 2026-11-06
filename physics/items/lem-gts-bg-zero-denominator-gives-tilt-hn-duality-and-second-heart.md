---
id: lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
kind: lemma
title: "Ordinary zero-denominator BG positivity gives tilt HN, duality and the second heart"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - lem-gts-tilt-derived-dual-truncation-and-finite-saturation
  - def-chern-character-and-todd-class
  - thm-hilbert-polynomial-degree-support-dimension
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - def-axiom-of-choice
dependency_roles:
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  lem-gts-tilt-derived-dual-truncation-and-finite-saturation: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
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
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bayer, Macrì and Toda, Bridgeland Stability Conditions on Threefolds I"
      url: https://arxiv.org/pdf/1103.5010v2
      locator: "§3.2, including Lemma 3.2.4; §§5.1–5.2, including Proposition 5.1.3 and Proposition 5.2.2; printed pp.11–13 and21–26. Direct coherent reconstruction is supplied locally."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart.md
dependency_level: 2
---

## Statement

Assume the Axiom of Choice and the preceding smooth projective threefold and slope-heart conventions. Fix rational $\beta$. Assume explicitly the ordinary numerical sheaf inequality at $\beta$ and $-\beta$: a slope-semistable torsion-free sheaf $F$ of slope $\eta\in\{\beta,-\beta\}$ satisfies $H\operatorname{ch}_2(F)\le\eta^2v\operatorname{rk}(F)/2$. For any $w>\beta^2/2$, the source slope $\nu_{\beta,w}=(H\operatorname{ch}_2-wv\operatorname{ch}_0)/d_\beta$, with zero denominator assigned $+\infty$, has finite Harder--Narasimhan filtrations on $\mathcal B_\beta$. For nonzero $E\in\mathcal B_\beta^{\mathrm{fin}}$, $E$ is $\nu_{\beta,w}$-semistable if and only if $E^d$ is $\nu_{-\beta,w}$-semistable, and their slopes are opposite. If $\alpha^2>0$ is rational, set $w=(\alpha^2+\beta^2)/2$ and cut this HN theory at conventional slope $\lambda=\nu_{\beta,w}-\beta=0$. The resulting second tilt $\mathcal A_{\alpha,\beta}=\langle\mathcal F'[1],\mathcal T'\rangle$ is a bounded noetherian heart. Its additive nonnegative quantity $f=H\operatorname{ch}_2^\beta-\alpha^2v\operatorname{ch}_0/2$ vanishes exactly on objects with a triangle $F[1]\to E\to T$, where $F$ is zero or $\lambda$-semistable of slope zero and $T$ is zero-dimensional. This is a conditional general criterion: its ordinary numerical sheaf inequality is a stated hypothesis, not a conclusion of duality.

## Statement references

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]]

[[def-chern-character-and-todd-class]]

[[thm-hilbert-polynomial-degree-support-dimension]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Full Axiom of Choice is retained from the actual coherent and regular-local suppliers.

[F1] The exact mathematical inputs are [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]], [[def-chern-character-and-todd-class]], [[thm-hilbert-polynomial-degree-support-dimension]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[def-axiom-of-choice]]. Their supplied interfaces are used below; no external tilt, polynomial-stability, or derived-dual theorem is assumed.

## Proof

**Given:** Exactly the geometric data and explicit hypotheses of the Statement.

1.1 Use precisely the ordinary sheaf inequality (BG0) assumed in the Statement: every slope-semistable torsion-free sheaf F with μ(F)=β obeys [given, A1, F1, algebra]

2.1 Hch2(F)≤(β²/2)v rk(F). [given, A1, F1, step 1.1, algebra]

3.1 The same condition is used at −β. The classical discriminant Bogomolov–Gieseker theorem implies (BG0); its full proof is an independent general geometry prerequisite, not supplied by duality or noetherianity. No source citation is being used as its local proof. At β=0 this is exactly the zero-slope bound already needed by the delivered surface-to-threefold reduction. [given, A1, F1, step 2.1, algebra]

4.1 For $w>β^{2}/2$ set $A_{β,w}(E)=Hch2(E)−wv$ rk(E). On $C_β$, (BG0) and the first-heart construction give $A≥0$, with equality only for ordinary zero-dimensional sheaves: the shifted boundary-slope sheaf contributes at least $(w−β^{2}/2)v rk>0$, and a nonzero one-dimensional coherent sheaf contributes its positive effective-cycle degree. Thus $Z_{\mathrm{tilt}}=−A+i d_β$ takes the closed upper half-plane, with precisely the zero-dimensional sheaves as its zero objects. Source tilt slope is $ν=A/d_β$ with zero denominator assigned infinity. [given, A1, F1, step 3.1, algebra]

5.1 For rational β, the first heart is noetherian by the first-heart construction and d_β is discrete. These facts prove weak tilt HN existence directly. First take the largest C_β-subobject by noetherian finite sums; all its quotients lie in the Serre C_β, so it is slope-infinity semistable. Its quotient belongs to the finite part. On a finite-part object, a descending chain of subobjects with strictly increasing phases cannot be infinite: the discrete d_β eventually agrees, while its zero-denominator quotients have negative real part or zero charge, making the subobject phase decrease or stay equal. Replacing an unstable object by a larger-phase subobject therefore reaches a semistable subobject. Let a be the supremum of phases of semistable subobjects of E. For θ<a take their largest finite sum T_θ over phases>θ; every quotient of this sum has phase>θ, by semistability of the summands, and phase(T_θ)≤a by the preceding replacement argument. Along θ_n↑a, these sums decrease and their d_β eventually agrees, so their phases are nonincreasing and at most a but greater than θ_n. They must attain a, and then are semistable. The largest sum of phase-a semistable subobjects has a quotient with strictly smaller maximal phase: otherwise a higher-phase preimage gives a higher semistable subobject, or an equal-phase preimage enlarges this largest sum. Iterating terminates by noetherianity, giving the finite ordered HN filtration. Zero-charge quotients do not invalidate this argument: they change neither numerical phase of a positive-denominator object nor the conclusion that an equal-phase preimage enlarges the maximal semistable subobject. This proves HN rather than assuming it from BMT. [given, A1, F1, step 4.1, algebra]

6.1 Under (BG0), β rational and $w>β^{2}/2$, a nonzero finite-part E is $ν_{β,w}$-semistable if and only if $E^d$ is $ν_{−β,w}$-semistable. Here $ν_{−β,w}(E^d)=−ν_{β,w}(E)$, from the first three coordinate identities; no parameter has been switched to a twisted numerator. [given, A1, F1, step 5.1, algebra]

7.1 If E is unstable, take a finite-slope last HN quotient B with $ν(B)<ν(E)$. It lies in the finite part, and its kernel A does too. the saturation construction gives an injection $B^d→E^d$ with slope $−ν(B)>−ν(E)$, so $E^d$ is unstable. Conversely the same argument applied to $E^d$ makes $(E^d)^d=E^{\mathrm{sat}}$ unstable whenever $E^d$ is unstable. E and $E^{\mathrm{sat}}$ have the same finite-part semistability: a destabilizing subobject of E also embeds into $E^{\mathrm{sat}}$; a destabilizing subobject $U⊂E^{\mathrm{sat}}$ intersects E in a subobject with the same first three numerical coordinates, since U/(U∩E) is zero-dimensional. This intersection is nonzero, because $E^{\mathrm{sat}}$ has no zero-dimensional subobject. It therefore destabilizes E. This proves the equivalence. The result is semistability reversal; an assertion of strict stability without accounting for numerically zero quotients is deliberately not substituted. [given, A1, F1, step 6.1, algebra]

8.1 Keep β rational, and choose α² positive rational. Put w=(α²+β²)/2 and use the conventional slope λ=ν_(β,w)−β. Let (T',F') be the torsion pair from its finite HN filtration, cut at zero, and form the bounded second heart A=<F'[1],T'> by the direct torsion-pair truncation argument of the first-heart construction. Define the discrete additive nonnegative quantity [given, A1, F1, step 7.1, algebra]

9.1 f(E)=Hch2^β(E)−(α²/2)v rk(E) [given, A1, F1, step 8.1, algebra]

10.1 on A. In the first heart $f=d_β λ$ for positive denominator; on the zero-denominator part it equals $A_{β,w}$, strictly positive unless zero-dimensional. It follows that every $Q∈A$ with $f(Q)=0$ has $H^{-1}_B(Q)$ either zero or λ-semistable of slope zero, and $H^0_B(Q)$ zero-dimensional. Conversely these conditions give $f=0$. This proves the needed zero-imaginary classification. [given, A1, F1, step 9.1, algebra]

11.1 Consider $A_1⊂A_2⊂…⊂E$ in A. Discreteness makes $f(A_i)$ eventually constant, so $Q_i=A_{i+1}/A_i$ have $f=0$. Write $F_i=H^{-1}_B(A_i), T_i=H^0_B(A_i)$. The $F_i$ form an increasing chain in the fixed $F_E$ in the noetherian first heart, so stabilize. For large i the B-cohomology sequence gives an injection $G_i=H^{-1}_B(Q_i)→T_i$ and an exact sequence from $T_i$ to $T_{i+1}$ with zero-dimensional cokernel. $G_i$ has $λ=0$, hence $d_β(G_i)>0$ unless zero. Consequently $d_β(T_{i+1})=d_β(T_i)−d_β(G_i)$. These nonnegative discrete values cannot decrease forever, so $G_i=0$ eventually and $Q_i$ themselves are zero-dimensional. [given, A1, F1, step 10.1, algebra]

12.1 Put $E_i=E/A_i$ in $A, U_i=H^{-1}_B(E_i), V_i=H^0_B(E_i)$. The same sequence gives increasing $U_i→U_{i+1}$ with zero-dimensional cokernel. Each $U_i∈F'$ lies in $B_β^{\mathrm{fin}}$: it has no slope-infinity subobject. Fix one index i0. By the saturation construction all later $U_i$ embed over $U_{i0}$ into its finite saturation $U_{i0}^{\mathrm{sat}}$. Their increasing chain terminates in the noetherian first heart. The $V_i$ are successive quotients of a fixed first-heart object, so stabilize too. The cohomology sequence then forces $Q_i=0$, proving that A is noetherian. This constructs the second-heart theorem from the actual finite hull, avoiding the external polynomial-heart finite-length theorem. The only numerical premise was the explicitly stated ordinary (BG0) needed for the weak slope and HN construction. [given, A1, F1, step 11.1, algebra] ∎

