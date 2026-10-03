---
id: cor-oriented-intersection-reduces-to-mod-two-intersection
kind: corollary
title: "The oriented intersection number reduces to the mod 2 number"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-oriented-intersection-number, thm-oriented-intersection-number-is-homotopy-invariant, def-integers-modulo-n, def-countable-choice, thm-transversality-homotopy-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed p. 79 and Ch. 3 §3, printed p. 107 (the oriented count specializes to the parity count)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed p. 25 and §5, printed p. 27 ($\\deg_2$ versus $\\deg$)"
---

## Statement

Assume $\mathrm{AC}_\omega$. In the common setting — $X$ compact oriented, $M$ closed oriented, $Z\subseteq M$ closed oriented embedded, $\dim X+\dim Z=\dim M$ — the oriented and mod 2 intersection numbers are related by reduction modulo two: $$I(f,Z)\equiv I_2(f,Z)\pmod 2$$ for every smooth $f:X\to M$ for which either side is defined. In particular for compact oriented complementary submanifolds $A,B$, $I(A,B)\equiv I_2(A,B)\pmod 2$, and $I_2$ is defined even where no orientations exist.

## Facts & Assumptions

**Given:** Oriented $X,M,Z$ as in the statement, a smooth map $f:X\to M$ for which either side is defined, and $\mathrm{AC}_\omega$ for the transverse-representative selection in 1.1.

[F1] $I_2(f,Z)$ is the parity of the transverse intersection of a transverse representative in the homotopy class of $f$, and it is independent of that representative ([[def-mod-two-intersection-number]], [[thm-mod-two-intersection-number-is-homotopy-invariant]]).

[F2] $I(f,Z)$ is the sum of the local signs $\varepsilon(p)\in\{+1,-1\}$ over the finite transverse fibre of a transverse representative, and it is independent of that representative ([[def-oriented-intersection-number]], [[thm-oriented-intersection-number-is-homotopy-invariant]]).

[F3] In $\mathbb Z/2\mathbb Z$ the classes of $+1$ and $-1$ coincide, and reduction of an integer sum is additive ([[def-integers-modulo-n]]).

[A1] $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function ([[def-countable-choice]]). Under it the transversality homotopy theorem supplies, for the given smooth $f$, a smooth map homotopic to $f$ and transverse to $Z$ ([[thm-transversality-homotopy-theorem]]).

## Proof

**Proof technique:** direct; reduce both sides to a common transverse representative.

1.1 Choose a smooth map $\tilde f$ homotopic to $f$ and transverse to $Z$; this is possible by the transversality homotopy theorem under [A1], and by [F1] and [F2] neither $I_2(f,Z)$ nor $I(f,Z)$ changes when $f$ is replaced by $\tilde f$. Hence it suffices to prove the congruence for a transverse map, and Countable Choice is used exactly in this selection; the reduction for a transverse map below is choice-free. [A1, F1, F2, given]

2.1 For a transverse $\tilde f$ the fibre $\tilde f^{-1}(Z)$ is finite, $I(\tilde f,Z)=\sum_p\varepsilon(p)$ with $\varepsilon(p)=+1$ or $-1$, and $I_2(\tilde f,Z)=\#\tilde f^{-1}(Z)\bmod 2$. Each local sign is congruent to $1$ modulo two by [F3], so $I(\tilde f,Z)\equiv\#\tilde f^{-1}(Z)\equiv I_2(\tilde f,Z)\pmod 2$. [F1, F2, F3, step 1.1, algebra]

3.1 For compact oriented complementary submanifolds $A,B$ the inclusion case gives $I(A,B)\equiv I_2(A,B)$; the mod 2 number of the pair is defined without any orientability hypothesis, so parity remains available without orientations, although comparison with an integer count requires the oriented setting. [F1, F2, step 2.1] ∎
