---
id: rem-morse-homology-over-the-integers-does-not-require-orientability-of-m
kind: remark
title: "Integral Morse homology does not require orientability of the manifold"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-integral-morse-differential-squares-to-zero, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-orientation-line-of-a-morse-critical-point, rem-ambient-orientability-is-not-required-for-morse-smale-transversality, def-morse-smale-pair, def-orientable-manifold]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(a), printed pp. 65-66 (the ambient orientability assumption is not necessary)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3, printed pp. 70-71 (orientations of stable manifolds, i.e. co-orientations of unstable manifolds, suffice)"
dependency_level: 8
---

## Remark

Under the Axiom of Choice, the integral Morse complex of [[thm-integral-morse-differential-squares-to-zero]] is built from orientations of the unstable manifolds $W^u(p)$ only: it requires neither an orientation of $M$ nor orientability of $M$. Indeed, the co-orientation of $W^s(p)$ used to orient the moduli spaces is induced by the orientation of $T_pW^u(p)$ and transported along the flow ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-orientation-line-of-a-morse-critical-point]]), and the Morse--Smale condition itself never uses an ambient orientation ([[rem-ambient-orientability-is-not-required-for-morse-smale-transversality]]).

Consequently a Morse--Smale pair on a nonorientable closed manifold has a well-defined integral Morse complex, even though its moduli spaces receive no orientation induced by an orientation of $M$. The point is that the orientation data live on the unstable manifolds, which are always orientable because they are diffeomorphic to Euclidean spaces, while $M$ itself need not be orientable ([[def-orientable-manifold]]); the definition of a Morse--Smale pair [[def-morse-smale-pair]] imposes only transversality of the stable and unstable manifolds. In particular orientability of $M$ is not among the hypotheses of [[thm-integral-morse-differential-squares-to-zero]]. Different choices of unstable orientations multiply each coefficient $n(x,y)$ by the product of the basis signs at $x$ and $y$, by the orientation lemma. The diagonal automorphism $T(p)=s_p p$, where $s_p$ records the orientation reversal at $p$, therefore satisfies $\partial\!\prime=T\partial T^{-1}$ and induces an isomorphism on kernels modulo images; the mod-two theory of this page needs no orientation choices at all.
