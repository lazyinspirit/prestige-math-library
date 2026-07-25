---
id: rem-bishop-phelps
kind: remark
title: "Bishop-Phelps theorem: norm-attaining functionals are dense"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "norm-attaining functionals are dense"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Bishop-Phelps theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bishop%E2%80%93Phelps_theorem"
    - title: "V. Lomonosov, A counterexample to the Bishop-Phelps theorem in complex spaces, Israel J. Math. 115 (2000) 25-28"
      url: "https://doi.org/10.1007/bf02810578"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a real Banach space and let $C \subseteq X$ be closed, bounded and convex. Then the set
of $f \in X^{*}$ that attain their supremum on $C$ is norm dense in $X^{*}$. Taking $C$ to be the
closed unit ball: the norm-attaining functionals are dense in $X^{*}$.

For **complex** Banach spaces the statement about general closed bounded convex sets fails: there is
a closed bounded convex set in a complex Banach space with no support functionals at all
(Lomonosov, 2000).

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** A variational argument with cone orderings: perturb a given functional
slightly, use the completeness of $X$ to run a maximality argument inside a suitable cone, and
obtain a nearby functional whose supremum is attained. The modern route is through Ekeland's
variational principle.

**Why it matters here.** It is the exact counterweight to [[rem-james-theorem]]. Norm-attainment is
always generic; it is universal precisely for reflexive spaces. The complex counterexample is worth
recording because it shows that the real and complex theories differ here, which they do not in most
of functional analysis.
