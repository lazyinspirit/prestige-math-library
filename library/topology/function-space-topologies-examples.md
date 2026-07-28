---
page: function-space-topologies-examples
title: "Function Space Topologies and the Exponential Law: Examples and Counterexamples"
status: published
items: []
examples: [ex-continuous-functions-on-the-unit-interval-with-the-sup-metric,
           ex-the-moving-spike-family-in-the-three-topologies,
           cex-compact-convergence-without-uniform-convergence,
           ex-the-compact-open-topology-on-the-continuous-functions-of-the-line,
           ex-a-uniformly-equicontinuous-family-of-lipschitz-functions,
           cex-pointwise-bounded-but-not-equicontinuous,
           cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous,
           ex-the-exponential-law-worked-on-the-line,
           ex-dini-on-the-unit-interval]
---

**What this page is for.** The main page introduces four topologies on a set of
continuous functions and proves how they compare, but proves no strictness: it
asserts the inclusions and nothing more. This page supplies the witnesses that
separate them, checks that the new uniform metric creates no second notion of
convergence, and works the exponential law and Dini's theorem on the real line by
hand.

**The anti-two-notions check comes first.**
[[ex-continuous-functions-on-the-unit-interval-with-the-sup-metric]] takes
$C([0,1],\mathbb{R})$, the one place where both the published supremum metric
([[lem-sup-metric-is-a-metric]]) and the uniform metric minted on the main page
([[lem-uniform-metric-on-a-function-space]]) are defined, and shows they are
uniformly equivalent there, hence induce the same topology. They are different
functions — the constants $0$ and $2$ are at distance $2$ in one and $1$ in the
other — and the difference is invisible to the topology. The same item records
completeness of $C([0,1],\mathbb{R})$, inherited from completeness of $\mathbb{R}$
through closedness of the continuous functions.

**Separating the three topologies takes two witnesses, on two different domains.**
[[ex-the-moving-spike-family-in-the-three-topologies]] traces one family of
continuous functions on $[0,1]$ through all three: it converges pointwise to $0$,
sits at uniform distance exactly $1$ from $0$ for every index, and therefore
converges in neither of the two finer topologies. That separates pointwise
convergence from the rest. It cannot separate the other two, because $[0,1]$ is
compact and there compact convergence *is* uniform convergence; so
[[cex-compact-convergence-without-uniform-convergence]] moves to $\mathbb{R}$ and
uses the maps $x \mapsto x/(k+1)$, which converge uniformly on every compact set
and stay at uniform distance $1$ from $0$ throughout.

**The compact-open topology made concrete.**
[[ex-the-compact-open-topology-on-the-continuous-functions-of-the-line]] shows
that on $C(\mathbb{R},\mathbb{R})$ every compact set sits inside some $[-m,m]$, so
the sets controlling a function uniformly on $[-m,m]$ to within $\varepsilon$ form
a neighbourhood base; and that $\mathbb{R}$ is locally compact, which is what makes
the evaluation map continuous there. The contrast is on the main page, where
$\mathbb{Q}$ is shown to have no compact neighbourhoods and the evaluation map on
$C(\mathbb{Q},\mathbb{R})$ is shown to be discontinuous.

**Equicontinuity: two families, two failures.**
[[ex-a-uniformly-equicontinuous-family-of-lipschitz-functions]] shows that the
$1$-Lipschitz maps into $\mathbb{R}$ are uniformly equicontinuous, that every
distance function $x \mapsto d(x,A)$ belongs to that family, and that the family is
not pointwise bounded. [[cex-pointwise-bounded-but-not-equicontinuous]] runs the
other way: the moving spikes take all their values in $[0,1]$, so the family is
pointwise bounded, and it fails equicontinuity at $0$. So the two hypotheses of an
Ascoli-type theorem are independent, and neither implies the other. That theorem
itself is not on this page or the main one.

**The failure the uniform topology repairs.**
[[cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous]] exhibits
the ramps on $[0,1]$: continuous, pointwise nonincreasing, converging pointwise to
the indicator of $\{1\}$, which is discontinuous. So $C(X,Y)$ is **not** closed in
the topology of pointwise convergence, while it is closed in the uniform one
([[thm-uniform-limit-theorem]]). The same family reappears at the end of the page.

**The exponential law traced through one map.**
[[ex-the-exponential-law-worked-on-the-line]] takes $f(x,z) = xz$ on
$\mathbb{R} \times \mathbb{R}$, verifies its continuity from the metric $d_\infty$,
verifies continuity of its transpose $z \mapsto (x \mapsto xz)$ directly rather
than through the tube lemma, checks local compactness of $\mathbb{R}$, and reads
off the bijection of [[thm-the-exponential-law]] with its inverse. It also records
that the transposed family is *not* continuous for the uniform metric, which is the
same phenomenon as the counterexample earlier on this page. **No homeomorphism is
claimed anywhere**, here or on the main page.

**Dini, and its one missing hypothesis.**
[[ex-dini-on-the-unit-interval]] applies [[thm-dini]] to the clipped identities
$t \mapsto \min\{t, 1-a_k\}$ on $[0,1]$, which increase pointwise to the identity,
and confirms the resulting uniform convergence by the direct bound
$|s_k(t) - t| \le a_k$. It then takes the ramps of the previous counterexample:
continuous, pointwise monotone, on the same compact domain, and with a
discontinuous pointwise limit — every hypothesis of Dini's theorem except
continuity of the limit, and the conclusion fails. That isolates which
hypothesis of Dini's theorem is load bearing.

**Two conventions visible throughout.** $\mathbb{N}$ contains $0$, so every
reciprocal on this page is written $1/\iota(k+1)$ or $1/\iota(k+2)$, never
$1/\iota(k)$; and every family here is piecewise linear, assembled by the pasting
lemma for a finite closed cover ([[lem-continuity-is-local-and-pastes]]), so that
no item on the page depends on power or exponential machinery it does not need.
