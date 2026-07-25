---
id: rem-semilocal-simple-connectedness
kind: remark
title: "Semi-local simple connectedness"
status: draft
origin: session
proved_here: false
deps: [rem-simple-connectedness, rem-covering-spaces-and-universal-cover]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "The exact condition under which a universal cover exists"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Semi-locally simply connected (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-locally_simply_connected"
    - title: "A. Hatcher, Algebraic Topology, Section 1.3 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
    - title: "covering space (nLab)"
      url: "https://ncatlab.org/nlab/show/covering+space"
pipeline_run: null
---

## Statement

A space $X$ is **semi-locally simply connected at** $x \in X$ if there is an open
neighbourhood $U$ of $x$ such that the homomorphism
$\pi_1(U, x) \to \pi_1(X, x)$ induced by the inclusion $U \hookrightarrow X$ is
trivial; concretely, every loop in $U$ based at $x$ is null homotopic **in $X$**,
though not necessarily in $U$. The space is **semi-locally simply connected** if
this holds at every point.

**Theorem (deferred).** Let $X$ be path connected and locally path connected.
Then $X$ has a simply connected covering space if and only if $X$ is
semi-locally simply connected.

The name records the two weakenings: the condition is local because it only asks
for one neighbourhood at each point, and it is semi because the loops are
required to die in the ambient space rather than in the neighbourhood. It is
strictly weaker than local simple connectedness, and it is implied by, for
instance, having a locally contractible space.

## Remarks

**Not proved in this library.** Neither the definition's consequences nor the
existence theorem is established here.

**What would prove it.** Sufficiency: the construction of the candidate universal
cover as the set of path-homotopy classes of paths from a basepoint, whose
natural topology is locally trivial exactly because of this condition. Necessity:
if $p \colon \tilde{X} \to X$ is a simply connected covering, take $U$ evenly
covered; a loop in $U$ lifts to a loop in a sheet, that loop is null homotopic in
$\tilde{X}$, and pushing the null homotopy down kills it in $X$. Both halves live
in the homotopy track, on top of
[[rem-covering-spaces-and-universal-cover]].

**Why it matters here.** It is the fine print that makes "the universal cover" a
legitimate phrase. Every space the library actually handles, an open subset of
$\mathbb{R}^n$, a manifold, a CW complex, satisfies the condition and so has a
universal cover, which is why the condition is easy to overlook. The point of
recording it is the failure case: it is exactly what breaks for the Hawaiian
earring, see [[rem-hawaiian-earring-fundamental-group]], where a compact,
connected, path connected, locally path connected metric space has no universal
cover at all. Without this condition stated, that example looks like a paradox
rather than a boundary case.
