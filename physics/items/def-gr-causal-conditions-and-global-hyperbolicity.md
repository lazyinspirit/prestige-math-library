---
id: def-gr-causal-conditions-and-global-hyperbolicity
kind: definition
title: "Chronology, causality, strong causality, global hyperbolicity and time functions"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, def-differential-of-a-smooth-map, def-continuous-map-top, def-compact-space, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-compact-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the chronological, causal and strongly causal conditions (Definition 1.34 printed p. 24) and the causal ladder, sections 4.2-4.3 printed pp. 111-137 and section 4.5 printed pp. 142-148; Definition 4.117 (global hyperbolicity via non-total imprisonment, causality or stable causality plus compactness of the causal diamonds, with the traditional strong-causality formulation recorded) printed p. 146"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): global hyperbolicity defined by the existence of a Cauchy surface, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the initial value problem, domains of dependence and the Misner-space warning, printed pp. 119-127 (PDF pp. 126-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with the
causal curves and the relations $\le$, $\ll$, $I^{\pm}$, $J^{\pm}$ of
[[def-gr-causal-curves-and-reachability]]. All curves below are curves in
that sense.

**(a) Chronology and causality.** $(M,g,N)$ is **chronological** when there is
no $p\in M$ with $p\ll p$, equivalently when there is no nonconstant future
timelike curve $\gamma:[a,b]\to M$ with $\gamma(a)=\gamma(b)$. It is **causal**
when there is no nonconstant future causal curve $\gamma:[a,b]\to M$ with
$\gamma(a)=\gamma(b)$; a nonconstant future causal curve with equal endpoints
is called a **closed causal curve**, and a closed future timelike curve is
called a **closed timelike curve**.

**(b) Strong causality.** $(M,g,N)$ is **strongly causal** when for every
$p\in M$ and every open set $U\subseteq M$ with $p\in U$ there is an open set
$V$ with $p\in V\subseteq U$ such that for every future causal curve
$\gamma:[a,b]\to M$ and all $a\le s<t\le b$ with $\gamma(s)\in V$ and
$\gamma(t)\in V$ one has $\gamma([s,t])\subseteq V$. Thus no causal curve can
leave $V$ and later re-enter it; a set $V$ with this property for all causal
curves is called **causally convex for causal curves that meet it twice**.

**(c) Global hyperbolicity.** $(M,g,N)$ is **globally hyperbolic** when it is
strongly causal and for all $p,q\in M$ the **causal diamond**
$J^+(p)\cap J^-(q)$ is compact in the subspace topology
([[def-compact-space]]).

**(d) Time functions.** A **time function** on $(M,g,N)$ is a function
$u:M\to\mathbb R$ which is continuous from the manifold topology to the usual topology of
$\mathbb R$: for every $p\in M$ and every open neighborhood $W$ of $u(p)$
there is an open neighborhood $V$ of $p$ with $u(V)\subseteq W$
([[def-continuous-map-top]]). It also satisfies
$u(\gamma(a))<u(\gamma(b))$ for every future causal curve
$\gamma:[a,b]\to M$ with $a<b$ that is not constant on $[a,b]$.

**(e) Temporal functions.** A **temporal function** on $(M,g,N)$ is a smooth
function $u:M\to\mathbb R$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]])
whose gradient is past-directed timelike: writing $du$ for its differential
([[def-differential-of-a-smooth-map]]) and $\nabla u$ for the vector field
with $g(\nabla u,X)=du(X)$ for every smooth vector field $X$, constructed from
the inverse metric of [[def-gr-inverse-metric-and-musical-isomorphisms]], one
has
$$g(\nabla u,\nabla u)<0\qquad\text{and}\qquad du(N)=g(\nabla u,N)>0 .$$
The first inequality says that the gradient is nowhere zero and timelike; the
second fixes it as past-directed for the chosen time orientation. No level set
of a temporal function is asserted here to be a hypersurface or to be
spacelike, and no relation between temporal functions and compactness is
asserted; those claims are proved separately where they are used.

**(f) Scope and conventions.** These are mathematical conditions on the
Lorentzian model. Different sources define global hyperbolicity by equivalent
but differently phrased conditions; this page fixes the formulation of (c)
and proves the implications it uses. In particular no equivalence between
global hyperbolicity and the existence of a Cauchy hypersurface is asserted
by this definition, and the physical reading of strong causality or global
hyperbolicity as predictability of a classical model is adopted only in the
framework postulates.
