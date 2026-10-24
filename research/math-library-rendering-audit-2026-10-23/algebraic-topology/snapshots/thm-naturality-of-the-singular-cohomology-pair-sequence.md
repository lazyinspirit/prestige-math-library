---
id: thm-naturality-of-the-singular-cohomology-pair-sequence
kind: theorem
title: Naturality of the singular cohomology pair sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-long-exact-sequence-of-a-pair-in-singular-cohomology, prop-singular-cohomology-is-contravariantly-functorial, def-relative-singular-cochain-complex]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, Induced Homomorphisms, printed page 201
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

A continuous map of pairs $f:(X,A)\to(Y,B)$, meaning $f(A)\subseteq B$, induces a contravariant map from the cohomology pair sequence for $(Y,B)$ to that for $(X,A)$, with every square commuting. In particular
$$f^*\partial_{Y,B}=\partial_{X,A}(f|_A)^*:H^n(B;G)\to H^{n+1}(X,A;G).$$
These maps satisfy identity and composition laws on pairs. Coefficient homomorphisms induce covariant maps of these sequences, commuting with pair pullbacks.

## Facts & Assumptions

[F1] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] gives inclusion, restriction and connector $[a]\mapsto[\delta\widetilde a]$, independent of extension.

[F2] [[prop-singular-cohomology-is-contravariantly-functorial]] gives precomposition cochain maps, identity/composition laws and commuting coefficient postcomposition maps.

[F3] [[def-relative-singular-cochain-complex]] identifies relative cochains with those vanishing on chains in the subspace and forms their cohomology quotient.

## Proof

**Given:** The map of pairs $f$, abelian coefficients $G$, and a coefficient homomorphism $u:G\to G'$ when considering coefficient naturality.

1.1 If a cochain $\varphi$ on $Y$ vanishes on simplices in $B$, then $\varphi f_\#$ vanishes on simplices in $A$, since their composites have image in $B$. Thus the cochain pullback of [F2] restricts to $C^*(Y,B;G)\to C^*(X,A;G)$. It commutes with the differential and so preserves relative cocycles and coboundaries, inducing $f^*$ by [F3]. The literal composition and identity formulas from [F2] restrict to these subcomplexes, hence hold on their quotient cohomology. [F2, F3]

1.2 The square with relative inclusion commutes because both composites send $\varphi$ to $\varphi f_\#$ viewed as an absolute cochain. The restriction square commutes since restricting $\varphi f_\#$ to a simplex $\sigma$ in $A$ gives $\varphi(f\sigma)$, also the value of $(f|_A)^*(\varphi|_B)$ on $\sigma$. Equality on simplices is equality of cochains by linear extension. These squares descend to cohomology. [F1, F2, F3]

1.3 Coefficient postcomposition preserves zero values on subspace chains and commutes with coboundaries by [F2]. Thus it gives maps on all three kinds of cohomology. It commutes with inclusions and restrictions by the pointwise definitions. If $\widetilde a$ extends $a$, then $u\widetilde a$ extends $ua$ and $\delta(u\widetilde a)=u\delta\widetilde a$; therefore it also commutes with the connector of [F1]. Finally $u(\varphi f_\#)=(u\varphi)f_\#$ proves commutation with pair pullback, and coefficient identity/composition laws restrict from [F2]. [F1, F2, F3]

2.1 For a cocycle $a$ on $B$, let $\widetilde a$ be any extension to $Y$, available by [F1]. The cochain $\widetilde a f_\#$ extends $(f|_A)^\sharp a$ on $A$. Its differential is $(\delta\widetilde a)f_\#$ by [F2]. Hence both sides of the asserted connector square are represented by this same relative cocycle. Independence from the extension is precisely [F1], so the square commutes on cohomology. It is not necessary that pullback preserve the particular extension-by-zero section. [F1, F2, step 1.1, step 1.2]

3.1 Steps 1.1, 1.2, 2.1 and 1.3 prove every square and both functorialities. In degree zero the connector still uses an extended zero-cocycle and the same calculation; negative groups and their maps are zero. For $A=\varnothing$ or $A=X$, and likewise for $B$, the inclusion/restriction identities agree with the endpoint sequences of [F1] whenever $f$ is a map of pairs. Empty $X$, point spaces and zero coefficients are covered by these literal formulas. No global family of extensions is chosen: one may use the specified zero extension for the one cocycle under consideration, so no AC is used. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 1.3] ∎
