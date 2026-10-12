---
id: def-gr-spacelike-hypersurfaces-and-cauchy-sets
kind: definition
title: "Spacelike hypersurfaces, acausal sets, Cauchy sets, domains of dependence and Cauchy horizons"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: achronal sets (Definition 2.19 printed p. 34), acausal sets (Definition 2.95 printed p. 63) and their local theory, sections 2.14-2.15 printed pp. 59-66; Definition 3.14 (future Cauchy horizon) printed p. 87; Definition 3.35 (partial and full Cauchy hypersurfaces as acausal edgeless sets, D(S) = M in the full case) printed p. 95"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): a Cauchy surface is a spacelike hypersurface intersected once and only once by every causal curve without endpoint, equivalently the domain of dependence of the surface is the whole spacetime, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the domain of dependence of a spacelike surface and the maximal Cauchy development, section 10.5 printed pp. 123-124 (PDF pp. 124-125)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with the
causal curves of [[def-gr-causal-curves-and-reachability]], and let
$S\subseteq M$.

**(a) Spacelike hypersurfaces.** A subset $\Sigma\subseteq M$ is a **spacelike
embedded hypersurface** when it is an embedded three-dimensional submanifold
of $M$ ([[def-embedded-submanifold-and-slice-chart]]) such that the
restriction of $g_p$ to $T_p\Sigma\times T_p\Sigma$ is positive definite for
every $p\in\Sigma$; equivalently, every nonzero vector tangent to $\Sigma$ is
spacelike ([[def-causal-classification-of-lorentz-vectors]]). A spacelike
embedded hypersurface is automatically a nondegenerate hypersurface, so its
$g$-orthogonal complement in $T_pM$ is one-dimensional and nondegenerate, and
it carries a unique future-directed unit timelike normal; that normal is
constructed where it is used, not here.

**(b) Achronality and acausality.** $S$ is **achronal** when no two distinct
points $p,q\in S$ satisfy $p\ll q$ or $q\ll p$; $S$ is **acausal** when no two
distinct points $p,q\in S$ satisfy $p\le q$ or $q\le p$. Every acausal set is
achronal, since $p\ll q$ implies $p\le q$.

**(c) Cauchy sets.** $S$ is a **Cauchy set** when for every inextendible
causal curve $\gamma:I\to M$ the parameter set
$$\gamma^{-1}[S]:=\{t\in I:\gamma(t)\in S\}$$
has exactly one element. Because a strictly increasing continuous surjection
of intervals induces a bijection of parameter sets, this condition is
invariant under reparametrization
([[lem-gr-causal-curve-calculus]] clause (e)); it is stated in terms of
parameters rather than of the point set $\gamma(I)\cap S$, so that a closed
causal curve counts two visits to the same point as two parameter values. A
**Cauchy hypersurface** is a Cauchy set that is also a spacelike embedded
hypersurface in the sense of clause (a).

**(d) Domains of dependence.** For any $S\subseteq M$ define
$$D^+(S):=\{p\in M:\text{every past-inextendible causal curve through }p \text{ meets }S\},$$
and dually $D^-(S):=\{p\in M:\text{every future-inextendible causal curve
through }p\text{ meets }S\}$, where "meets $S$" means that some parameter
value is mapped into $S$, and $D(S):=D^+(S)\cup D^-(S)$ is the **domain of
dependence** of $S$.

**(e) Cauchy horizon.** For a closed set $S\subseteq M$ the **future Cauchy
horizon** is
$$H^+(S):=D^+(S)\setminus I^-(D^+(S)),$$
the set of points of $D^+(S)$ that are not chronologically preceded by any
point of $D^+(S)$; dually $H^-(S):=D^-(S)\setminus I^+(D^-(S))$, and the
**Cauchy horizon** is $H(S):=H^+(S)\cup H^-(S)$.

**(f) Scope.** These are mathematical definitions. Neither existence of
Cauchy sets nor any relation between the objects defined here is asserted.
