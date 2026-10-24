---
id: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions
title: "The Tor balance isomorphism is natural and coherent under a change of resolutions"
kind: proposition
status: published
origin: pipeline
deps: ["thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "def-tensor-double-complex-of-two-projective-resolutions", "lem-the-rows-of-the-augmented-tensor-double-complex-are-exact", "lem-the-columns-of-the-augmented-tensor-double-complex-are-exact", "thm-long-exact-sequence-in-homology", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy", "thm-projective-comparison-map-exists", "prop-each-tor-construction-is-covariant-in-both-variables", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
---

## Statement

Assume Dependent Choice (DC), and supply projective resolutions of the modules
under consideration. The balance isomorphisms for Tor commute with maps of
modules and with replacement of either supplied projective resolution. The
change-of-resolution identifications are independent of the comparison lifts,
are the identity for an unchanged resolution, and compose coherently.

## Proof

**Given:** module maps $u:N\to N'$ and $v:M\to M'$, projective
resolutions $Q,Q'$ of the right modules and $P,P'$ of the left modules,
and DC as in [[def-dependent-choice]].

1.1 Form $K_{p,q}=Q_p\otimes_RP_q$ as in [[def-tensor-double-complex-of-two-projective-resolutions]]. The augmentations define degreewise surjective chain maps $a:\operatorname{Tot}K\to N\otimes_RP$ and $b:\operatorname{Tot}K\to Q\otimes_RM$. [given, construct]

1.2 Choose comparison maps $g:Q\to Q'$ and $f:P\to P'$ lifting $u,v$ by [[thm-projective-comparison-map-exists]]. The map $T=\operatorname{Tot}(g\otimes f)$ commutes with both augmented edge maps: $a'T=(u\otimes f)a$ and $b'T=(g\otimes v)b$. These identities hold on pure tensors because comparison maps preserve augmentations. [given, construct]

2.1 By [[lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]], each fixed-$q$ augmented horizontal complex is exact. If $z\in\ker a$ is a total cycle, choose its largest nonzero $q$-component. The cycle equation there is a horizontal cycle equation, so horizontal exactness gives a preimage one horizontal degree higher. Subtracting its total boundary removes that component and introduces terms only at lower $q$. Finite diagonal support makes the iteration terminate, so $\ker a$ is acyclic. The long exact homology sequence [[thm-long-exact-sequence-in-homology]] therefore makes $H(a)$ an isomorphism. [step 1.1, algebra]

2.2 By [[lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]], the same elimination with the largest nonzero $p$-component proves that $\ker b$ is acyclic; the sign $(-1)^p$ on the vertical differential does not affect exactness. Hence $H(b)$ is also an isomorphism. Thus the balance map is the specified ratio $H(b)H(a)^{-1}$, agreeing with the natural isomorphism asserted in [[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]]. [step 1.1, algebra]

3.1 Taking homology in step 1.2 and using steps 2.1--2.2 gives $H(g\otimes v)H(b)H(a)^{-1}=H(b')H(a')^{-1}H(u\otimes f)$. This is the naturality square. [step 1.2, step 2.1, step 2.2, algebra]

4.1 Under DC, [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]] makes any two lifts homotopic, and [[prop-each-tor-construction-is-covariant-in-both-variables]] makes their edge homology maps equal. Apply step 3.1 to identity module maps for replacement resolutions. Opposite comparison maps compose to a lift of the identity, so they induce inverse identifications; a direct and a composite comparison among three resolutions lift the same identity and therefore induce the same map. Identity comparisons induce identities. This proves independence and the cocycle laws. [step 3.1, algebra] ∎

## Remarks

The commuting-square calculation for explicitly supplied comparison maps and
edge quasi-isomorphisms is choice-free. DC here supplies comparisons and the
homotopies needed for independence of arbitrary choices; no global choice
of projective resolutions or comparison maps is asserted.
