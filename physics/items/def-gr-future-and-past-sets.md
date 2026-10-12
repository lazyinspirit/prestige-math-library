---
id: def-gr-future-and-past-sets
kind: definition
title: "Future sets, past sets, achronal boundaries and their elementary properties"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
justified_by: [lem-gr-convex-normal-causality]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: future and past sets (Definition 2.83 printed p. 59), achronal boundaries (Definition 2.86 printed p. 60) and their elementary properties (Proposition 2.84 printed pp. 59-60)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): future and past sets and achronal boundaries, section 6.3"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with the
chronological and causal relations $\ll$, $\le$ and the sets $I^\pm$,
$J^\pm$ of [[def-gr-causal-curves-and-reachability]].

**(a) Future and past sets.** A subset $F\subseteq M$ is a **future set**
when $I^+(F)\subseteq F$, where $I^+(F)=\bigcup_{p\in F}I^+(p)$; it is a
**past set** when $I^-(F)\subseteq F$. A future set is **open** when it is
open in the manifold topology; for an open future set one has
$F=I^+(F)$.

**(b) Achronal boundary.** A set $A\subseteq M$ is an **achronal boundary**
when $A=\partial F$ for a future set $F$; by (c) below this is equivalent to
$A=\partial F$ for an open future set.

**(c) Elementary properties.** The following are immediate from the
openness of $I^\pm$ and the transitivity of $\ll$
([[lem-gr-causal-curve-calculus]] clause (f)):

- if $F$ is a future set then its complement is a past set, and conversely;
- $I^\pm(S)$, $J^\pm(S)$ and $\overline{J^\pm(S)}$ are future (respectively
  past) sets for every $S\subseteq M$;
- if $F$ is a future set then $F$ is open if and only if $I^+(F)=F$, and
  then $\partial F$ is achronal: if $p,q\in\partial F$ with $p\ll q$, then
  $q\in I^+(p)\subseteq I^+(F)\subseteq F$, so $q$ is interior to $F$
  (because $I^+(p)$ is open in $F$ through $q$), contradicting
  $q\in\partial F$;
- a set $S$ is achronal in the sense of
  [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (b) if and only
  if $\overline S$ is achronal, because $I^\pm$ is open in its arguments.

**(d) Scope.** These are set-theoretic definitions inside the smooth
Lorentzian model; they assert nothing about existence of achronal
boundaries with additional regularity, and they carry no physical
interpretation here.

## Remarks

- **Well-definedness.** No choice principle is used; the properties in (c)
  are proved directly from the openness of $I^\pm$ and transitivity of
  $\ll$ ([[lem-gr-causal-curve-calculus]]). The statement that achronal
  boundaries are locally Lipschitz graphs is not part of this definition;
  no regularity of achronal boundaries beyond closedness and achronality
  is asserted here.
