---
id: rem-lefschetz-index-formula-recovers-poincare-hopf
kind: remark
title: "The Lefschetz index formula recovers Poincare-Hopf"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices, thm-lefschetz-hopf-index-formula, cor-lefschetz-number-is-homotopy-invariant, cor-lefschetz-number-of-the-identity-is-the-euler-characteristic, thm-poincare-hopf-for-closed-manifolds, cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic, def-isolated-zero-and-local-index-of-a-vector-field, thm-weak-whitney-proper-embedding-theorem, thm-euclidean-tubular-neighbourhood-theorem, cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction, lem-negation-scales-the-local-index-by-minus-one-to-the-dimension, def-axiom-of-choice, def-countable-choice, lem-a-closed-discrete-subset-of-a-compact-space-is-finite, thm-compactness-under-continuous-maps]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 134-137 (the flow intuition, the Proposition for a family tangent to the field at time zero, and the normal-projection family pi(x+tv(x)) whose fixed points are exactly the zeros of v)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 55 (Examples 157-158: a zero of the vector field produces fixed points of the flow; the closing connection to Poincare-Hopf)"
dependency_level: 13
---

## Remark

**The derivation.** Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed smooth $n$-manifold, $n\ge1$, and let $X$
be a smooth vector field with isolated zeros
([[def-isolated-zero-and-local-index-of-a-vector-field]]). Embed $M$ as a closed
smooth submanifold of a Euclidean space
([[thm-weak-whitney-proper-embedding-theorem]]), let $N$ be an open tubular
neighbourhood with its normal-fibre retraction $r:N\to M$
([[thm-euclidean-tubular-neighbourhood-theorem]],
[[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]]),
and for small $t>0$ define
$$f_t(x):=r\bigl(x-tX(x)\bigr).$$
Compactness gives a uniform tube margin around $M$ (take a finite cover by
balls whose doubled balls lie in $N$), while the Euclidean norm of $X$ is
bounded by [[thm-compactness-under-continuous-maps]], clause 2. Hence $f_t$
and the same formula for every $s\in[0,t]$ are defined for a common small
$t>0$. This is Guillemin and Pollack's normal-projection approximation to the flow of
$-X$, and it has the following properties.

- **The fixed points of $f_t$ are exactly the zeros of $X$.** If
  $r(x-tX(x))=x$, put $z:=x-tX(x)$; then $z-x=-tX(x)$ is perpendicular to
  $T_xM$ because $r$ is the normal-fibre projection, while $X(x)\in T_xM$, so
  $tX(x)=0$ and $X(x)=0$; conversely $X(x)=0$ gives $f_t(x)=r(x)=x$. Hence the
  fixed points of $f_t$ are the isolated zeros of $X$, for every sufficiently small $t>0$ for which the family is defined.

- **$f_t$ is homotopic to the identity.** The formula
  $(s,x)\mapsto r(x-sX(x))$, $s\in[0,t]$, is a homotopy from
  $f_0=\mathrm{id}_M$ to $f_t$, so
  $$L(f_t)=L(\mathrm{id}_M)=\chi(M)$$
  by [[cor-lefschetz-number-is-homotopy-invariant]] and
  [[cor-lefschetz-number-of-the-identity-is-the-euler-characteristic]].

- **The index identification.** Since $r$ restricts to the identity on $M$ with
  identity differential along $T_xM$, the family satisfies
  $f_t(x)=x-tX(x)+O(t^2)$: it is tangent to $-X$ at time zero, and its fixed
  points are isolated. The tangent-family part of
  [[prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices]],
  applied to the field $-X$, gives
  $\operatorname{ind}_p(f_t)=(-1)^n\operatorname{ind}_p(-X)$, and the negation
  law
  $\operatorname{ind}_p(-X)=(-1)^n\operatorname{ind}_pX$
  ([[lem-negation-scales-the-local-index-by-minus-one-to-the-dimension]])
  leaves $\operatorname{ind}_p(f_t)=\operatorname{ind}_pX$ at every zero $p$ of
  $X$, for all sufficiently small $t>0$.

The Lefschetz–Hopf index formula [[thm-lefschetz-hopf-index-formula]] applies to
the smooth map $f_t$, whose fixed points are exactly the isolated zeros of $X$,
and combines the three properties into
$$\sum_{p:X(p)=0}\operatorname{ind}_pX=\sum_{p\in\operatorname{Fix}(f_t)}\operatorname{ind}_p(f_t)=L(f_t)=\chi(M),$$
which is precisely the Poincaré–Hopf theorem
[[thm-poincare-hopf-for-closed-manifolds]] — recovered here as a corollary of
the Lefschetz–Hopf index formula. The normal-projection family gives the fixed-set description directly,
including at degenerate zeros; it does not require a periodic-orbit analysis of
the actual flow. Compactness makes the isolated zero set finite (it is closed
and discrete), by [[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]]:
locally, continuity makes the nonzero locus open. Thus the finitely many
local small-time bounds have a common positive bound. For odd $n$ the conclusion is also consistent with
the vanishing of $\chi$ recorded in
[[cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic]].

**What is used.** The argument uses a proper embedding of $M$, a tubular
neighbourhood with its normal-fibre retraction, the tangent-family index
computation, the Lefschetz–Hopf index formula and the homotopy invariance of
$L$; no countability or orientation hypothesis on $M$ is added beyond the ones
already carried by those suppliers.
