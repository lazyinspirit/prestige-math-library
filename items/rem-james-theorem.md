---
id: rem-james-theorem
kind: remark
title: "James's theorem: reflexivity by norm-attaining functionals"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "reflexive iff every functional attains its norm"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/James's_theorem"
    - title: "Reflexive space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Reflexive_space"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

A Banach space $X$ is reflexive if and only if every $f \in X^{*}$ attains its norm on the closed
unit ball, that is, for every $f$ there is $a \in X$ with $\lVert a \rVert \le 1$ and
$f(a) = \lVert f \rVert$.

The completeness hypothesis cannot be dropped: there are incomplete normed spaces, not reflexive in
any sense, on which every continuous linear functional attains its norm.

## Remarks

**Not proved in this library.** Recorded with a citation. James's theorem is famous for having no
short proof.

**What would prove it.** The easy direction is weak compactness of the ball of a reflexive space
plus weak continuity of $f$. The hard direction is James's combinatorial argument, building from a
non-attaining functional a sequence whose convex combinations force a failure of weak compactness,
and it is where completeness is used.

**Why it matters here.** It converts a structural property, reflexivity, into a checkable statement
about individual functionals, and it is the sharp form of the intuition that "the supremum in the
definition of the dual norm should be a maximum". The counterweight is
[[rem-bishop-phelps]]: even without reflexivity the norm-attaining functionals are always dense, so
the content of James's theorem is exactly the gap between dense and all.
