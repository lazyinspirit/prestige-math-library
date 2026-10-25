---
id: rem-covering-maps-among-complete-analytic-functions
kind: remark
title: "The germ projection of a complete analytic function is a covering map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-analytic-function, cor-single-valued-continuation-on-simply-connected-domains, thm-germ-projection-is-a-local-biholomorphism, def-covering-map-and-evenly-covered-neighbourhoods]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

Let $p:\mathcal R(\xi_0,\Omega)\to\Omega$ be the germ projection of a complete
analytic function and fix $z\in\Omega$. Choose a disc $D$ centred at $z$ with
$\overline D\subseteq\Omega$. Every germ $\xi\in p^{-1}(z)$ continues along
every path in $D$: concatenate such a path with one from the original base
point to $z$ that produces $\xi$. Since $D$ is simply connected,
[[cor-single-valued-continuation-on-simply-connected-domains]] gives a
holomorphic representative $f_\xi$ on all of $D$.

The sets $N(f_\xi,D)$ are pairwise disjoint. If two met, their representatives
would agree as germs at one point of $D$; continuation back to $z$ inside $D$
would make their centre germs equal. They also cover $p^{-1}(D)$, because any
germ over a point of $D$ can be continued inside $D$ back to $z$ and hence lies
on the sheet determined by that centre germ. On each sheet, $p$ is the chart
homeomorphism of [[thm-germ-projection-is-a-local-biholomorphism]]. Thus $D$ is
evenly covered in the sense of
[[def-covering-map-and-evenly-covered-neighbourhoods]], and the germ projection
is a covering map.
