---
id: def-complex-sector-and-bounded-analytic-semigroup
kind: definition
title: Complex sector and bounded analytic semigroup
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-banach-space, def-bounded-linear-operator, def-space-of-bounded-linear-operators, def-strongly-continuous-semigroup, def-infinitesimal-generator-of-a-c-zero-semigroup, def-complex-domain, def-complex-differentiability-holomorphic-and-entire, lem-canonical-banach-complexification-of-a-real-banach-space, rem-real-and-complex-normed-space-convention]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Definition 4.5, printed p. 100'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Definition 2.24, printed p. 63'
verification:
  precheck: n/a
---

## Definition

For $\delta\in(0,\pi]$ put
$$\Sigma_\delta:=\{z\in\mathbb C\setminus\{0\}:|\arg z|<\delta\},$$
the open sector of half-angle $\delta$ around the positive real axis
([[def-complex-domain]]; we use the principal argument in $(-\pi,\pi]$). Let $X$ be a Banach
space over $\mathbb C$ ([[def-banach-space]]). A family
$(T(z))_{z\in\Sigma_\delta\cup\{0\}}\subseteq\mathcal B(X)$
([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]) is
an **analytic semigroup of angle $\delta\in(0,\pi/2]$** if:

(i) $T(0)=I$ and $T(z_1+z_2)=T(z_1)T(z_2)$ for all
$z_1,z_2\in\Sigma_\delta$;

(ii) $z\mapsto T(z)$ is holomorphic on $\Sigma_\delta$ in the operator norm:
the difference quotients $h^{-1}(T(z+h)-T(z))$ converge in $\mathcal B(X)$ for
every $z\in\Sigma_\delta$;

(iii) $\lim_{\Sigma_{\delta'}\ni z\to0}T(z)x=x$ for every $x\in X$ and every
$0<\delta'<\delta$.

It is a **bounded analytic semigroup** of angle $\delta$ if in addition

(iv) $\sup_{z\in\Sigma_{\delta'}}\|T(z)\|<\infty$ for every $0<\delta'<\delta$.

Its **generator** is the infinitesimal generator of the strongly continuous
semigroup $(T(t))_{t\ge0}$
([[def-strongly-continuous-semigroup]],
[[def-infinitesimal-generator-of-a-c-zero-semigroup]]), and its **angle** is
the supremum of the $\delta$ for which such a family exists and extends the
given one.

Strong continuity is required only at the vertex and only in the strong
operator topology; holomorphy is asserted on the open sector, not at $0$. For a
real Banach space $X$ the definition is applied through a complexification
([[lem-canonical-banach-complexification-of-a-real-banach-space]],
[[rem-real-and-complex-normed-space-convention]]).

### Remarks

- The sector $\Sigma_\delta\cup\{0\}$ is a convex cone for $\delta\le\pi/2$, so
  $z_1+z_2$ stays in the index set in (i); the vertex is the only boundary
  point at which values are prescribed. Condition (iii) is an assumption on the
  approach to the vertex along every strictly smaller sector, and it implies
  that $(T(t))_{t\ge0}$ is a strongly continuous semigroup, since
  $[0,\infty)\subseteq\Sigma_\delta\cup\{0\}$.
- No norm continuity at $0$ is asserted: when the generator is unbounded the
  family is only strongly continuous there, as the companion counterexample
  records. Likewise $T$ is not required to be holomorphic at $0$; only the
  values $T(z)$ for $z$ in the open sector carry the holomorphy of (ii).
- Condition (iv) is a boundedness requirement on every strictly smaller sector
  and not on all of $\Sigma_\delta$; this is the distinction between a bounded
  analytic semigroup and an analytic semigroup whose norm may blow up near the
  boundary of the sector.
