---
id: lem-gts-tilt-derived-dual-truncation-and-finite-saturation
kind: lemma
title: "Tilt derived-dual truncation and canonical finite saturation"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
dependency_roles:
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
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
    - title: "Bayer, Macrì and Toda, Bridgeland Stability Conditions on Threefolds I"
      url: https://arxiv.org/pdf/1103.5010v2
      locator: "§3.2, including Lemma 3.2.4; §§5.1–5.2, including Proposition 5.1.3 and Proposition 5.2.2; printed pp.11–13 and21–26. Direct coherent reconstruction is supplied locally."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-tilt-derived-dual-truncation-and-finite-saturation.md
dependency_level: 1
---

## Statement

Assume the Axiom of Choice and let $X,H,v,\mathcal B_\beta,\mathcal C_\beta,\mathbb D$ have the preceding smooth projective threefold conventions. Put $\mathcal B_\beta^{\mathrm{fin}}=\{E\in\mathcal B_\beta:\operatorname{Hom}(C,E)=0\text{ for every }C\in\mathcal C_\beta\}$. For every real $\beta$ and every $E$ in this subcategory, $H^{-1}(E)$ is reflexive with all slopes strictly less than $\beta$, $\mathbb D(E)$ has standard coherent cohomology only in degrees $-1,0,1$, and $T_E=H^1(\mathbb D(E))$ is zero-dimensional. Its standard truncation $E^d=\tau_{\le0}\mathbb D(E)$ lies in $\mathcal B_{-\beta}^{\mathrm{fin}}$. There is a canonical exact sequence $0\to E\to E^{\mathrm{sat}}:=\mathbb D(E^d)\to T_E^D\to0$ in $\mathcal B_\beta$, with $E^{\mathrm{sat}}\in\mathcal B_\beta^{\mathrm{fin}}$. Every exact $0\to E\to U\to Z\to0$ with $Z$ zero-dimensional and $U$ having no nonzero zero-dimensional subobject has a unique injection $U\to E^{\mathrm{sat}}$ over $E$; in particular $\operatorname{length}(U/E)\le\operatorname{length}(T_E)$. For an exact sequence $0\to A\to E\to B\to0$ of finite-part objects, the precise dual sequence is $0\to B^d\to E^d\to A^d\to T_B\to T_E\to T_A\to0$ in $\mathcal B_{-\beta}$. The first three Chern coordinates transform by $(\operatorname{ch}_0,\operatorname{ch}_1,\operatorname{ch}_2)\mapsto(-\operatorname{ch}_0,\operatorname{ch}_1,-\operatorname{ch}_2)$, while $\operatorname{ch}_3(E^d)=\operatorname{ch}_3(E)+\operatorname{length}(T_E)$. No tilt-HN theorem, ordinary BG inequality, or polynomial-stability duality is assumed.

## Statement references

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Full Axiom of Choice is retained from the actual coherent and regular-local suppliers.

[F1] The exact mathematical inputs are [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]]. Their supplied interfaces are used below; no external tilt, polynomial-stability, or derived-dual theorem is assumed.

## Proof

**Given:** Exactly the geometric data and explicit hypotheses of the Statement.

1.1 Let β be real and $E∈B_β^{\mathrm{fin}}$. Write $F=H^{-1}(E)$, $T=H^0(E)$. Then F is reflexive and $μ_{\operatorname{max}}(F)<β$ when F≠0. In fact $Q=F**/F$ is supported in dimension at most one; $F**,F∈F_β$ and the exact coherent sequence gives a monomorphism Q→F[1]→E in $B_β$. Since $Q∈C_β$, it vanishes. Similarly a nonzero HN boundary part of F of slope β gives a monomorphism of its shift into E from $C_β$, impossible. This proves both assertions. [given, A1, F1, algebra]

2.1 We claim that D(E) has standard cohomology only in degrees −1,0,1, with $H^1$ zero-dimensional. Initially it has no cohomology below −1 or above 2: dualize F[1]→E→T, use regular-local dimension three and torsion-freeness of F (depth at least one, projective dimension at most two). Its $H^2$ is supported at closed points by local global dimension. If $H^2$ were nonzero, its quotient to a residue-field sheaf would give a nonzero composite $D(E)→H^2(D(E))[-2]→k(x)[−2]$. Applying the involutive D produces a nonzero map k(x)^D→E, contradicting $Hom(C_β,E)=0$. Hence $H^2=0$. [given, A1, F1, step 1.1, algebra]

3.1 Let $G=H^1(D(E))$. At a point of codimension at most one, F is free and T has projective dimension at most one, so the same triangle gives no $H^1$. Therefore G is supported in dimension at most one. If its one-dimensional part were nonzero, consider the canonical map D(E)→G[−1] and dualize. The source D(G[−1]) has cohomology $K=Ext²(G,O_{X})$ in degree zero and $Ext³(G,O_{X})$ in degree one. Thus the canonical map K→D(G[−1])→E exists. At a generic codimension-two point where G is nonzero, the local ring is regular of dimension two and G has finite length; Koszul duality and finite-length dévissage show that D(G[−1]) there is exactly its nonzero Ext² module. The map is nonzero there, since the original truncation map induces an isomorphism on its highest cohomology and derived duality is faithful. This yields a nonzero map from K, a dimension-at-most-one sheaf, to E, again impossible. Hence G is zero-dimensional. [given, A1, F1, step 2.1, algebra]

4.1 Define [given, A1, F1, step 3.1, algebra]

5.1 $E^d=τ≤0$ D(E),       $T_{E}=H^1$ D(E). [given, A1, F1, step 4.1, algebra]

6.1 This gives a canonical triangle $E^d→D(E)→T_{E}[−1]$. We now prove $E^d∈B_{−β}$, not just that it is a two-term complex. Dualizing the cohomology triangle gives $H^{-1}$ $D(E)=T*$. Its maximal slope is less than −β by ordinary slope duality on T's torsion-free quotient, so it belongs to $F_{−β}$. Also $H^0D(E)$ fits into an exact sequence with a torsion image of $Ext¹(T,O_{X})$ as its subobject and an image K inside F* as its quotient; F*/K is supported in codimension at least two, being a subsheaf of $Ext²(T,O_{X})$. The HN slopes of K equal those of F*, whose minimum exceeds −β. Thus $H^0D(E)∈T_{−β}$. This proves the asserted heart membership. The statement remains valid when F or T is zero. [given, A1, F1, step 5.1, algebra]

7.1 Dualize the last triangle. Since $D(T_{E}[−1])=T_{E}^D[−1]$, it gives a canonical exact sequence in $B_β$ [given, A1, F1, step 6.1, algebra]

8.1 $0→E→E^{\mathrm{sat}}:=D(E^d)→T_{E}^D→0$. [given, A1, F1, step 7.1, algebra]

9.1 In particular $E^{\mathrm{sat}}$ has standard cohomology only in degrees −1,0. For any K of dimension at most one, [given, A1, F1, step 8.1, algebra]

10.1 $Hom(K,E^{\mathrm{sat}})=Hom(E^d,D(K))=0$, [given, A1, F1, step 9.1, algebra]

11.1 because $E^d$ has cohomology in degrees at most zero and D(K) in degrees at least one. For a torsion-free slope-semistable G of slope β, a map $G[1]→E^{\mathrm{sat}}$ factors through E: $Hom(G[1],T_{E}^D)=0$ by negative ordinary Ext. It is therefore zero. Every object of $C_β$ is an extension of such a G[1] by a dimension-at-most-one sheaf. Thus $E^{\mathrm{sat}}∈B_β^{\mathrm{fin}}$. [given, A1, F1, step 10.1, algebra]

12.1 The dual truncation itself lies in $B_{−β}^{\mathrm{fin}}$. For K of dimension at most one, use $Hom(K,E^d)=Hom(E^{\mathrm{sat}},D(K))=0$ by the same standard degree argument. For a slope-semistable G of slope −β, [given, A1, F1, step 11.1, algebra]

13.1 $Hom(G[1],E^d)=Hom(E^{\mathrm{sat}},RHom(G,O_{X}))$. [given, A1, F1, step 12.1, algebra]

14.1 The standard degree-zero term G* has slope β, so $G*[1]∈B_β$ and $Hom(E^{\mathrm{sat}},G*)=0$ by negative-heart orthogonality. The remaining terms of $RHom(G,O_{X})$ have standard cohomology in degrees at least one, giving no maps from $E^{\mathrm{sat}}$. This proves the other necessary Hom vanishing, and hence the finite-part assertion. [given, A1, F1, step 13.1, algebra]

15.1 The saturation is finite and universal. Given 0→E→U→Z→0 in $B_β$ with Z zero-dimensional and with no nonzero zero-dimensional subobject of U, every $C_β-subobject$ of U has intersection zero with E and hence injects into Z; it would be zero-dimensional, so must vanish. Thus $U∈B_β^{\mathrm{fin}}$. Since $D(Z)=Z^D[−2]$, the dual map induces a canonical isomorphism $τ≤0D(U)≅τ≤0D(E)=E^d$. Apply the preceding saturation construction to U to obtain the canonical injection $U→D(E^d)=E^{\mathrm{sat}}$ over E. It is unique: two such maps differ by a map $Z→E^{\mathrm{sat}}$, which is zero. Consequently $length(U/E)≤length(T_{E})$, uniformly for every such extension. No existence of a maximal extension is assumed; $E^{\mathrm{sat}}$ is constructed by two actual derived duals and one standard truncation. [given, A1, F1, step 14.1, algebra]

16.1 Functoriality also gives the exact dual sequence. From an exact 0→A→E→B→0 of finite-part objects, take tilted cohomology of D(B)→D(E)→D(A). Because each D object is its dual truncation plus a zero-dimensional degree-one term, the result is [given, A1, F1, step 15.1, algebra]

17.1 $0→B^d→E^d→A^d→T_{B}→T_{E}→T_{A}→0$ [given, A1, F1, step 16.1, algebra]

18.1 in $B_{−β}$. In particular the injection of the dual of a finite-part quotient is genuine; no dual of an arbitrary heart exact sequence is claimed exact without the defect terms. The first three numerical coordinates transform as (C0,C1,C2)↦(−C0,C1,−C2); $ch3(E^d)=ch3(E)+length(T_{E})$. [given, A1, F1, step 17.1, algebra] ∎

