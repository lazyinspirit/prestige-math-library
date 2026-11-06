---
id: thm-gts-r4-06b-behrendfantechi-algebraic-virtual-class-from-a-perfect-obstruction-theory
kind: theorem
title: Behrend–Fantechi algebraic virtual class from a perfect obstruction theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
  - lem-gts-rational-dm-chow-and-refined-gysin-construction
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
  lem-gts-rational-dm-chow-and-refined-gysin-construction: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Behrend and Fantechi, The Intrinsic Normal Cone"
      url: "https://arxiv.org/pdf/alg-geom/9601010v1"
      locator: "§5, Definition 5.1 and construction of the class; Proposition 5.3 and its full resolution-independence proof."
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

Let $X$ be a separated Deligne–Mumford stack of finite type over a field $k$, let $E^\bullet\to L_X$ be a perfect obstruction theory of amplitude $[-1,0]$ and constant virtual rank $n$, and suppose the stated global two-term vector-bundle resolution exists. The Behrend–Fantechi construction defines a class $[X,E^\bullet]^{\mathrm{vir}}\in A_n(X)_{\mathbb Q}$ from the intrinsic normal cone and the zero section. The class is independent of the chosen global resolution. This is an algebraic Chow construction and does not identify an analytic pseudoholomorphic virtual class.

## Statement references

[[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]

## Facts & Assumptions

**Given:** the field $k$, separated finite-type Deligne–Mumford stack $X$, the perfect obstruction theory $E^\bullet\to L_X$, its amplitude and virtual rank, and a global two-term vector-bundle resolution as in the Statement.

[F1] [[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]: the intrinsic cone $C_X$ embeds in the vector-bundle stack of $(E^\bullet)^\vee$; the chosen global resolution presents that stack by a vector bundle, and the class is the zero-section Gysin image.

[F2] [[lem-gts-rational-dm-chow-and-refined-gysin-construction]] supplies rational Chow groups, vector-bundle homotopy invariance and refined zero-section Gysin maps. The unrefined zero-section operation is inverse to bundle pullback. The inherited [[def-axiom-of-choice]] is retained for the sheaf injective-resolution construction; the common vector-bundle resolution is constructed below.

## Proof
1.1 Write the chosen resolution as $F^\bullet=[F^{-1}\to F^0]$ and set $F_1=(F^{-1})^\vee$. The cartesian cone presentation $C(F^\bullet)=C_X\times_{h^1/h^0((E^\bullet)^\vee)}F_1$ is a closed cone in $F_1$. Its map to $C_X$ is smooth of relative dimension $\operatorname{rk}F^0$, so it has pure dimension $\operatorname{rk}F^0$; the zero-section Gysin map lowers dimension by $\operatorname{rk}F^{-1}$. Hence $0^![C(F^\bullet)]$ has dimension $\operatorname{rk}F^0-\operatorname{rk}F^{-1}=n$ and is the class in the Statement. [F1, given, construct]

1.2 Choose another global two-term resolution $H^\bullet$. Both resolution maps can be represented simultaneously as strict quasi-isomorphisms to a single two-term complex $D=[D^{-1}\to D^0]$ of sheaves representing $E^\bullet$. Indeed, represent $E^\bullet$ by an injective complex $J$ bounded below, represent both derived maps by chain maps to $J$, and truncate $J$ to $[\operatorname{coker}(J^{-2}\to J^{-1})\to\ker(J^0\to J^1)]$. The maps from the two-term complexes factor through this truncation, which is quasi-isomorphic to $J$ because $E^\bullet$ has cohomology only in degrees $-1,0$. Set $K^0=F^0\oplus H^0$ and $K^{-1}=D^{-1}\times_{D^0}(F^0\oplus H^0)$, using the sum of the two maps to $D^0$. Its differential is projection to $K^0$, and its map to $D$ is the first projection in degree $-1$ and the sum in degree zero. [F2, given, construct, algebra]

2.1 Projection to $H^0$ gives an exact sequence $0\to F^{-1}\to K^{-1}\to H^0\to0$. For surjectivity, locally lift the cohomology class of the image of a section of $H^0$ to $F^0$ using $h^0(F)\simeq h^0(D)$; the difference is a boundary in $D$ and supplies the required $D^{-1}$ coordinate. Its kernel is $D^{-1}\times_{D^0}F^0\simeq F^{-1}$: for a pair $(d,f)$, injectivity on $h^0$ makes $f$ a boundary in $F$; after lifting that boundary the remaining difference is in $\ker d_D$ and lifts uniquely from $\ker d_F$ by the isomorphism on $h^{-1}$. Thus $K^{-1}$ is a vector bundle, since the displayed extension of vector bundles locally splits. The quotient complex $K/F$ is the identity complex $[H^0\xrightarrow{1}H^0]$, so $F\to K$ is a quasi-isomorphism. Exchanging $F$ and $H$ gives the analogous conclusion. This constructs the common global resolution with degreewise subbundles and acyclic vector-bundle quotients. [step 1.2, algebra]

3.1 Dualizing $F^{-1}\hookrightarrow K^{-1}$ gives a vector-bundle surjection $\alpha:K_1\to F_1$ with kernel $(H^0)^\vee$. The cone presentations satisfy $C(K)=K_1\times_{F_1}C(F)$: the acyclic quotient $K/F$ identifies their quotient-stack presentations with the same vector-bundle stack, and both cones pull back its intrinsic cone. Consequently $\alpha^*[C(F)]=[C(K)]$. Write $p_F:F_1\to X$ and $p_K:K_1\to X$. For any Chow class $\gamma$ on $F_1$, homotopy invariance gives a unique $\delta$ with $\gamma=p_F^*\delta$. Then $\alpha^*\gamma=p_K^*\delta$, so inverse bundle pullback gives $0_K^!\alpha^*\gamma=\delta=0_F^!\gamma$. Apply this to $[C(F)]$, and repeat with $H$. The resulting equality $0_F^![C(F)]=0_K^![C(K)]=0_H^![C(H)]$ proves resolution independence. Every construction is in algebraic rational Chow groups, giving the claimed analytic limitation. [F1, F2, step 1.1, step 2.1, algebra] ∎

