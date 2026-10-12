---
id: def-gr-causal-curves-and-reachability
kind: definition
title: "Causal curves, chronological and causal reachability, and inextendibility"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-absolutely-continuous-function, def-interval, def-smooth-manifold, def-c-r-and-smooth-maps-between-smooth-manifolds, def-velocity-derivation-of-a-smooth-curve, def-causal-classification-of-lorentz-vectors, lem-gr-future-causal-classification-by-a-timelike-field, def-derivation-at-a-point-and-tangent-space]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  def-interval: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-velocity-derivation-of-a-smooth-curve: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
justified_by: [lem-gr-causal-curve-calculus, lem-gr-maximal-geodesics-and-extension]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the causal and chronological relations (section 1.11 printed pp. 15-16) over continuous causal curves (section 2.5 printed pp. 32-33); Definition 2.16 (future/past inextendibility) printed p. 33"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the Lorentzian metric framework and time orientation, section 2.2 printed pp. 15-19; Cauchy surface as a spacelike hypersurface met once and only once by each causal curve without endpoint, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): light cones and the timelike/null/spacelike classification, printed p. 7 (PDF p. 14); worldlines and proper time, printed pp. 25-26 (PDF pp. 32-33)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), with the pointwise causal
classification of [[def-causal-classification-of-lorentz-vectors]] and the
equivalence of "future-directed" with "pairing negatively with $N$" supplied by
[[lem-gr-future-causal-classification-by-a-timelike-field]]. All curves below
take values in $M$; the physical reading of the model is not part of this
definition.

**(a) The curve class.** Let $I\subseteq\mathbb R$ be an interval with nonempty
interior ([[def-interval]]) and let $\gamma:I\to M$ be a map. A **chart
representative** of $\gamma$ is the map $x\circ\gamma$ of a smooth chart
$(U,x)$ of $M$ ([[def-smooth-manifold]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]). The map $\gamma$ is
**locally absolutely continuous** when for every compact subinterval
$[a,b]\subseteq I$ and every chart $(U,x)$ with
$\gamma([a,b])\subseteq U$, the component map $x\circ\gamma$ is absolutely
continuous on $[a,b]$ in the sense of [[def-absolutely-continuous-function]].
This class does not depend on the chart or on the smooth atlas; that is proved
in [[lem-gr-causal-curve-calculus]] clause (a).

**(b) Velocity and causal curves.** Let $\gamma$ be locally absolutely
continuous and let $t$ be an interior point of $I$ at which some — equivalently
every — chart representative is differentiable. The **velocity**
$\gamma'(t)\in T_{\gamma(t)}M$ is the derivation whose components in a chart
$(U,x)$ around $\gamma(t)$ are
$\gamma'(t)=\sum_{a=0}^{3}\frac{d}{dt}(x^a\circ\gamma)(t)\,\partial_a|_{\gamma(t)}$
([[def-velocity-derivation-of-a-smooth-curve]],
[[def-derivation-at-a-point-and-tangent-space]]); it is independent of the
chart by the chain rule, as recorded in
[[lem-gr-causal-curve-calculus]] clause (b). A **future causal curve** is a
locally absolutely continuous $\gamma$ such that the set of $t\in I$ for which
$\gamma'(t)$ exists, is nonzero and is future causal is of full measure in
$I$ (its complement meets every compact subinterval of $I$ in a set of
Lebesgue measure zero). A **future timelike curve** (also called future
chronological) is defined in the same way with "future causal" replaced by
"future timelike". Past-directed versions are defined with $g_p(v,N_p)>0$.
Since a future causal nonzero vector is nonzero by definition, the velocity is
required to be nonzero at almost every parameter value; in particular no
nondegenerate subinterval of $I$ can be mapped to a single point
([[lem-gr-causal-curve-calculus]] clause (c)).

**(c) Reachability.** For events $p,q\in M$ define:

- $p\le q$, read "$q$ is in the future of $p$", when $p=q$, or when there are
  $a<b$ and a future causal curve $\gamma:[a,b]\to M$ with $\gamma(a)=p$ and
  $\gamma(b)=q$;
- $p\ll q$, read "$p$ chronologically precedes $q$", when there are $a<b$ and
  a future timelike curve $\gamma:[a,b]\to M$ with $\gamma(a)=p$ and
  $\gamma(b)=q$.

The **causal future** and **chronological future** of a subset $S\subseteq M$
are
$$J^+(S):=\bigcup_{p\in S}J^+(p),\qquad I^+(S):=\bigcup_{p\in S}I^+(p),$$
where $J^+(p):=\{q\in M:p\le q\}$ and $I^+(p):=\{q\in M:p\ll q\}$; past
versions are $J^-(S):=\{p:\exists q\in S,\ p\in J^+(q)\}$ and
$I^-(S):=\{p:\exists q\in S,\ p\ll q\}$. By the displayed definition
$p\in J^+(p)$ for every $p$. Whether $p\in I^+(p)$ is a property of the
model, not a convention: $p\ll p$ holds exactly when there are $a<b$ and a
future timelike curve $\gamma:[a,b]\to M$ with $\gamma(a)=\gamma(b)=p$, that
is, exactly when a closed future timelike curve through $p$ exists. No
irreflexivity of $\ll$ is asserted, and closed timelike curves are not
excluded by the definition.

**(d) Inextendibility.** A locally absolutely continuous causal curve
$\gamma:I\to M$ is **future-inextendible** when $\gamma$ does not converge to
any point of $M$ as its parameter tends to $\sup I$, that is, there is no
$x\in M$ with $\gamma(t)\to x$ as $t\to\sup I$; in particular a curve whose
parameter range is unbounded above is future-inextendible exactly when it does
not converge as $t\to+\infty$. **Past-inextendible** is defined dually with
$\inf I$, and $\gamma$ is **inextendible** when it is both. This is the
convention of Minguzzi's Definition 2.16; for causal curves parametrized by
arclength of a complete auxiliary Riemannian metric it agrees with "the domain
cannot be extended", and a causal curve that converges at an endpoint can be
extended by a short geodesic segment, as proved in
[[lem-gr-maximal-geodesics-and-extension]] clauses (a) and (b). A causal
curve **passes through** $p$ when $p\in\gamma(I)$.

**(e) Scope.** The definitions are mathematical. They record no postulate
about nature, no measurement and no dynamical law; the physical reading of
$(M,g,N)$ and of the causal structure as the model's signalling structure is
adopted in the framework postulates and is not asserted here.
