---
id: lem-metric-morse-smale-end-counts-form-chain-complexes
kind: lemma
title: Arbitrary metric Morse--Smale end counts form finite Morse chain complexes
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-morse-smale-pair, def-axiom-of-choice, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, thm-continuation-trajectories-are-compact-up-to-breaking, lem-metric-end-flow-matching-gives-local-broken-charts, lem-orientation-lines-orient-continuation-moduli-spaces, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-product-orientation, def-induced-boundary-orientation, def-chain-complex-in-an-abelian-category, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers]
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Sections 3.2–3.3 (Morse compactification, orientations and boundary count)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(f,g)$ be a Morse--Smale metric pair on a closed manifold; no normalized Morse-coordinate form for $-\operatorname{grad}_g f$ is required. The mod-two differential on the finite free critical-point modules, counting index-drop-one orbit classes modulo two, is well defined and squares to zero. Over the integers, orient each unstable critical line and co-orient the stable disk by its unstable normal ray. Orient a transverse trajectory intersection by the ordered kernel-then-normal sequence, then quotient by the positive flow ray first. Its rigid signs give a well-defined integer differential that squares to zero. Reversing a critical ray conjugates the differential by the corresponding diagonal sign change. These constructions agree with the count and sign conventions of [[def-mod-two-morse-differential]] and [[def-signed-morse-differential-over-the-integers]] whenever their normalized-field hypotheses apply, and supply their metric-end extension in continuation formulas.

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold and the actual metric Morse--Smale pair, with critical rays in the integer case.

[F1] The actual metric disks have the Morse dimensions and smooth transported tangent spaces; normal rays and transverse kernel orientations extend by flow without orienting the ambient manifold ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]], [[lem-orientation-lines-orient-continuation-moduli-spaces]], [[def-morse-smale-pair]]).

[F2] The actual metric height-path proof gives a square-root equicontinuity modulus, splitting at every actual critical hit, and finite rigid end counts ([[thm-continuation-trajectories-are-compact-up-to-breaking]]).

[F3] Pure autonomous broken orbit classes have exact local matching charts after section representatives fix the common phase. Their finite passage normal derivatives have positive determinant ([[lem-metric-end-flow-matching-gives-local-broken-charts]], [[lem-orientation-lines-orient-continuation-moduli-spaces]]).

[F4] The ordered product and outward-normal-first conventions define quotient and boundary orientations; a compact oriented one-manifold has zero signed boundary count, and modulo two the boundary cardinality is even ([[def-product-orientation]], [[def-induced-boundary-orientation]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]], [[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

## Proof

**Proof technique:** direct, by autonomous compactification and its ordered boundary.

1.1 The critical set is finite as in [F2]. The actual metric co-orientation construction of [F1] transports the unstable critical ray along the stable disk, and the ordered exact sequence $0\to T(W^u(p)\cap W^s(q))\to TW^u(p)\to TM/TW^s(q)\to0$ defines its smooth kernel ray. Its flow-first quotient is the stated orbit orientation. The index-drop-one orbit space is finite by [F2], so its signed or mod-two count defines every matrix entry on the finite critical basis. Reversing either endpoint ray reverses that entry, which gives exactly diagonal conjugation of the differential. [F1, F2, given, construct]

2.1 For an index-drop-two pair, repeat the autonomous height-path argument of [F2] with fixed critical endpoints. Its image is compact in the uniform metric and a limit splits into actual trajectories. Positive index drops allow at most one internal break. The unbroken orbit space has dimension one; the one-neck charts of [F3] make every broken point a boundary point with a half-interval neighbourhood and give inverse coverage. Thus the compactification is a compact one-manifold whose boundary is the finite union of products of two rigid orbit sets. No normalized-flow theorem is used beyond its local orientation convention. [F1, F2, F3, step 1.1]

3.1 Compute its boundary sign explicitly. At a broken pair $(\gamma_1,\gamma_2)$ the two ordered intersection sequences give $or_p=\epsilon(\gamma_1)[X_1,or_r]$ and $or_r=\epsilon(\gamma_2)[X_2,or_q]$. Cancelling the intermediate ray gives the ordered two-dimensional trajectory ray $\epsilon(\gamma_1)\epsilon(\gamma_2)[X_1,X_2]$. The finite matching normal blocks of [F3] preserve this ray, because their determinants are positive. Choose a representative crossing on the first piece and let $t$ be the common positive translation coordinate. Increasing the neck time $T$ holds that first crossing representative fixed and moves the second representative to $\gamma_2(s-T+t)$, up to the finite smooth exterior crossing-time adjustments. On the two flow directions the columns are therefore $(1,1)$ for $\partial_t$ and $(0,-1)$ for $\partial_T$, of determinant $-1$. Exterior corrections and flat endpoint substitutions do not change its sign for sufficiently long necks. Removing the positive common flow direction first consequently orients $\partial_T$ by $-\epsilon(\gamma_1)\epsilon(\gamma_2)$. The outward boundary ray for $\rho=1/T$ is $-\partial_\rho$, a positive multiple of $\partial_T$. The boundary sign is thus $-\epsilon(\gamma_1)\epsilon(\gamma_2)$, independently of the intermediate index and hyperbolic rates. [F1, F3, F4, step 2.1, algebra]

4.1 By [F4] the sum of these signed boundary products is zero. Its negative is the coefficient of $q$ in $\partial^2p$, so that coefficient vanishes over the integers. Modulo two, even boundary cardinality gives the same vanishing without rays. This holds for every index-drop-two pair; all other coefficients of the degree-minus-two composite are absent. Finite linear extension proves $\partial^2=0$, giving the claimed chain complexes in the sense of [[def-chain-complex-in-an-abelian-category]]. When the end field is normalized, all definitions use the same finite basis, orbit counts and ordered rays, so they agree with the two normalized differential suppliers in the statement. [F4, step 1.1, step 3.1, algebra] ∎
