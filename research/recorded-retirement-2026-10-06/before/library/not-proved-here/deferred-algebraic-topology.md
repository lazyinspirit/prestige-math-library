---
page: deferred-algebraic-topology
title: "Algebraic Topology: Recorded, Not Proved Here"
status: draft
items: [rem-simple-connectedness,
        rem-covering-spaces-and-universal-cover,
        rem-pi1-circle-is-z,
        rem-exponential-sequence-as-covering,
        rem-riemann-surface-of-log,
        rem-semilocal-simple-connectedness,
        rem-hawaiian-earring-fundamental-group,
        rem-shape-theory,
        rem-warsaw-circle-weakly-contractible,
        rem-brouwer-fixed-point,
        rem-jordan-curve-theorem,
        rem-invariance-of-domain,
        rem-dimension-invariance-of-euclidean-space,
        rem-hopf-extension-and-obstruction,
        rem-homology-and-cohomology,
        rem-de-rham-and-stokes-on-manifolds,
        rem-homotopy-invariants-of-classical-continua]
examples: []
---

**Objective.** This page records the results of algebraic topology that the rest
of the library needs to be able to refer to, and states them precisely, with a
citation each. **Nothing on this page is proved here.** The library now has the
elementary endpoint-fixed homotopy and fundamental-group core: it constructs
$\pi_1$, proves its group laws and functoriality, defines simple connectedness,
and proves the convex Euclidean case. The entries retained here need machinery
that core does not yet supply — change of basepoint and circle computations,
covering spaces, general Jordan separation, homology and cohomology — so they
remain remarks marked "not proved here". The house rule is that no such result
may be authored with a borrowed or hand-waved argument.

The page is deliberately blunt about a second thing, because this subject
produces an unusual number of near misses. **Again and again the point-set half of
a statement is in scope and the homotopy half is not**, and the two halves look
alike enough that a reader is likely to credit the library with more than it has
proved. The splits recorded here are:

* Based loop classes, the fundamental-group laws, induced maps and simple
  connectedness are proved on the published fundamental-group page. The
  change-of-basepoint theorem, the equivalent path and loop formulations, and
  the computation $\pi_1(S^1)\cong\mathbb Z$ remain deferred.
* The exact sequence $0 \to \mathbb{Z} \to \mathbb{R} \to \mathbb{T} \to 0$ and
  the computation that the kernel of the complex exponential is
  $2\pi i \mathbb{Z}$ are proved on the library's Euler's-formula page. Only the
  reading of that sequence as "the reals are the universal cover of the circle"
  is deferred.
* That there is no continuous logarithm on $\mathbb{C} \setminus \{0\}$ is
  proved here, by an elementary winding-number obstruction. The Riemann surface of
  the logarithm, and branches as lifts along a covering, are deferred.
* Brouwer's fixed point theorem in dimension one is the intermediate value
  theorem and is proved. Dimension two and above is deferred, and flagged
  borderline, since a route through the general Stokes theorem or through
  Sperner's lemma may recover it without any homotopy theory.
* The polygonal Jordan curve theorem is proved by crossing parity on the plane
  graphs page. The theorem for an arbitrary Jordan curve and the
  Jordan-Schoenflies theorem remain deferred.
* The Hawaiian earring is compact, connected, path connected, locally path
  connected and metrizable, all of it elementary and in scope, and the natural
  continuous bijection onto it from the wedge of circles is in scope as well. That
  it has no universal cover, and that its fundamental group is uncountable and not
  free, are deferred. It is not, and must not be offered as, an example of a path
  connected space that fails to be locally connected.
* The Warsaw circle is a compact connected metric continuum, path connected but
  not locally connected, and the closed topologist's sine curve inside it is the
  standard connected-but-not-path-connected example. That all its homotopy groups
  vanish while it is not contractible is deferred, along with the shape theory
  that explains it.
* Dimension invariance is deferred, but the cheap half of the question is settled
  here in the negative: $\mathbb{R}$ and $\mathbb{R}^2$ are in bijection, so
  cardinality cannot decide it, and the case of $\mathbb{R}$ against
  $\mathbb{R}^n$ for $n \geq 2$ is an elementary connectedness argument.
* The Stokes theorem on chains, with Green's theorem, the divergence theorem and
  the classical Stokes theorem as corollaries, is expected to be reachable from
  the multivariable track. The version on manifolds, and de Rham's theorem, are
  deferred.
* The Knaster-Kuratowski fan, the pseudo-arc and the solenoids are point-set
  objects here and are to be proved about as such. Only their homotopy, homology
  and shape invariants are deferred.

The page sits at the very start of the library's reading order and depends on
nothing. Where an item points at material the library does prove, it does so as a
forward reference, marked as such, and always for orientation rather than as a
premise. When the machinery needed by a remaining entry is eventually built,
that entry becomes a real theorem with a real proof and is removed from the
deferral list.
