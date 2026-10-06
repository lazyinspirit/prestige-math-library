---
id: rem-radon-nikodym-property
kind: remark
title: "The Radon-Nikodym property"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "when vector measures have densities"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Radon-Nikodym property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Radon%E2%80%93Nikodym_property"
    - title: "Radon-Nikodym theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Radon%E2%80%93Nikodym_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

A Banach space $X$ has the **Radon-Nikodym property** if for every finite measure space
$(\Omega, \Sigma, \mu)$ and every $X$-valued vector measure $F$ on $\Sigma$ of bounded variation
which vanishes on the $\mu$-null sets, there is a Bochner integrable $g \colon \Omega \to X$ with
$$F(E) = \int_E g \, d\mu \quad \text{for every } E \in \Sigma.$$

Equivalent formulations: every Lipschitz function $[0,1] \to X$ is differentiable almost everywhere;
every closed bounded convex subset of $X$ is dentable.

Reflexive spaces have the property, and so does every separable dual space. The spaces $c_0$ and
$L^1[0,1]$ do not.

## Remarks

**Not proved in this library, and doubly deferred.** It needs measure theory (vector measures, the
Bochner integral, the scalar Radon-Nikodym theorem) as well as Banach space theory.

**What would prove it.** For the positive results, a martingale convergence or dentability argument;
for the failure in $c_0$, an explicit vector measure with no density, built from the Rademacher or
Haar system.

**Why it matters here.** It converts a measure-theoretic property into a structural invariant of a
Banach space, and it is the tool that upgrades "no extreme points" into the much stronger statement
recorded next, that $c_0$ is not even isomorphic to a dual space.
