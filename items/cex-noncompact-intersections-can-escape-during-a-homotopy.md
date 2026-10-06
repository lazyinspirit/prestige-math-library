---
id: cex-noncompact-intersections-can-escape-during-a-homotopy
kind: counterexample
title: "Noncompact intersections can escape during a homotopy"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-oriented-intersection-number, thm-oriented-intersection-number-is-homotopy-invariant, rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds, def-smooth-family-of-maps-and-evaluation-map, def-local-oriented-intersection-sign]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item cex-noncompact-intersections-can-escape-during-a-homotopy; evidence research/frontier-38-owner-30-reader-12.md, research/frontier-38-owner-30-reader-findings-12.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, Exercise 13, printed p. 84 (invariance fails without compactness of the source, closure of $Z$, or compactness of $W$)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 28–29 (the compact oriented trace argument; the polynomial witness here is explicit)"
---

## Statement refuted

The transverse intersection count of a smooth homotopy is preserved whenever the endpoint maps are proper, even when the source is noncompact and the combined homotopy is not proper.

## Facts & Assumptions

**Given:** The standard oriented $\mathbb R$ as source and target, $Z=\{0\}$ with positive point orientation, and $F(x,t)=x-(1-t)x^2$ on $\mathbb R\times[0,1]$.

[F1] Euclidean spaces have their standard smooth structure and polynomial evaluation formulas give smooth families ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-smooth-family-of-maps-and-evaluation-map]]).

[F2] At a zero, a real-valued slice is transverse to $\{0\}$ if its derivative there is nonzero; its finite signed count is the sum of those derivative signs and its finite parity count is the number of zeros modulo two ([[def-local-oriented-intersection-sign]]). These are finite transverse counts, without asserting the compact-source invariants of [[def-oriented-intersection-number]] and [[def-mod-two-intersection-number]] are defined for this noncompact source.

[F3] A compact trace is what permits the boundary-count arguments for invariance; proper endpoints alone do not supply it ([[rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact]], [[thm-mod-two-intersection-number-is-homotopy-invariant]], [[thm-oriented-intersection-number-is-homotopy-invariant]]).

## Counterexample

1.1 For $t<1$, $F_t^{-1}(0)=\{0,1/(1-t)\}$ and $\partial_xF_t$ is $+1$ at $0$ and $-1$ at $1/(1-t)$. At $t=1$, $F_1(x)=x$ has the single zero $0$ with derivative $+1$. Every slice is transverse at its zeros. The cardinalities change from $2$ to $1$, the signed counts from $0$ to $1$, and the parity counts from $0$ to $1$ as $t$ reaches $1$. [F1, F2, given, algebra]

2.1 Every slice is proper. For $t<1$, $|x-(1-t)x^2|\to\infty$ as $|x|\to\infty$; for $t=1$, the map is the identity. Thus each preimage of a compact real set is closed and bounded, hence compact. The trace contains $\{(1/(1-t),t):0\le t<1\}$, an unbounded branch whose intersection point escapes to $+\infty$ as $t\uparrow1$. Consequently $F^{-1}(\{0\})$ is noncompact and the combined map is not proper, although both endpoint maps, indeed all slices, are proper. This satisfies the refuted claim's hypotheses and disproves its conclusion. [F1, F3, step 1.1, algebra] ∎

The arctangent family $G(x,t)=\arctan x-t$ on $\mathbb R\times[0,2]$ gives another escape: its zero is $\tan t$ for $t<\pi/2$ and absent for $t\ge\pi/2$. It has compact individual regular fibres but improper endpoint maps, so it does not by itself refute the proper-endpoint assertion.
