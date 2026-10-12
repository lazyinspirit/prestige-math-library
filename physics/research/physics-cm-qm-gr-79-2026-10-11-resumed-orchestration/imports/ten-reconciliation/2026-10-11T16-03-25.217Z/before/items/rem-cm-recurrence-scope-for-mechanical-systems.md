---
id: rem-cm-recurrence-scope-for-mechanical-systems
kind: remark
title: "Scope of Poincaré recurrence for mechanical systems: finite invariant volume and complete return maps"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-poincare-recurrence-for-finite-measure-preserving-systems, cor-topological-poincare-recurrence-on-second-countable-spaces, cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions, def-measure-preserving-transformation-and-system, def-cm-local-flow-of-an-autonomous-system, thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]
dependency_roles:
  thm-poincare-recurrence-for-finite-measure-preserving-systems: mathematical-premise
  cor-topological-poincare-recurrence-on-second-countable-spaces: mathematical-premise
  cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions: mathematical-premise
  def-measure-preserving-transformation-and-system: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "M. Einsiedler and T. Ward, Ergodic Theory with a view towards Number Theory, first four chapters with appendices (LMS-EPSRC Summer School 2010), Chapter 2 (Poincare recurrence, Theorem 2.11 and Exercise 2.2.3, printed pages 21-23)"
      url: "https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf"
    - title: "A. Cannas da Silva, Lectures on Symplectic Geometry, Lecture 18 (Hamiltonian flow invariance of symplectic volume), p. 105"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
verification:
  precheck: pass
---

## Statement

The recurrence content attached to this page is supplied by published items and is subject to their stated hypotheses.

1. In a measure-preserving system $(X,\mathcal A,\mu,T)$ with $\mu(X)<\infty$, for every $E\in\mathcal A$ almost every point of $E$ returns to $E$ under $T^n$ for infinitely many positive integers $n$ ([[thm-poincare-recurrence-for-finite-measure-preserving-systems]], [[def-measure-preserving-transformation-and-system]]). If $X$ is second countable with a countable basis in $\mathcal A$, then outside one null set every neighbourhood of every point is revisited infinitely often, and in the metrizable case there is a strictly increasing sequence $n_j$ with $T^{n_j}x\to x$ ([[cor-topological-poincare-recurrence-on-second-countable-spaces]]). For a Hamiltonian flow, a measurable invariant region of finite symplectic volume on which a nonzero time map and all of its iterates are defined satisfies the same recurrence conclusion for that time map ([[cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions]]).

2. The following qualifications are part of the statement and are not removable.

- **Finiteness of measure is a hypothesis.** The conclusion fails in general for infinite measure: for $T(x)=x+1$ on $\mathbb R$ with Lebesgue measure, a bounded measurable set of positive measure is never revisited by a point of it, so the analogue of clause 1 is false without $\mu(X)<\infty$. A free, unconfined mechanical phase space does not provide a finite invariant volume, so recurrence is not available for it from these items alone.
- **The return map must be defined for all iterates.** The time-$\tau$ map of a Hamiltonian flow is a measure-preserving map only where it is defined: the invariant region must be contained in the domain of $\phi_\tau$ and of every iterate $\phi_{n\tau}$. For a local flow in the sense of [[def-cm-local-flow-of-an-autonomous-system]] this is an additional hypothesis on the region, not a consequence of the flow being locally defined; on a compact energy level of a complete bounded system it must be verified from the model.
- **Recurrence is an almost-everywhere statement about a measure, not about every trajectory.** The null exceptional set depends on the measurable set being revisited; a specified trajectory, or a finite-time observation, is not claimed to return. The topological corollary supplies a single null set only after a countable basis is fixed and one grants its countable-choice hypotheses.
- **No identification with the shift example.** The bilateral shift of [[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]] is a topological example on the symbol space; no claim is made here that it arises as the return map of a smooth mechanical system, and no claim about any physical system is made by this remark.
