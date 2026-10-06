---
id: def-nondegenerate-zero-of-a-vector-field
kind: definition
title: "Nondegenerate zero of a vector field"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-differential-of-a-smooth-map, def-induced-tangent-bundle-chart, def-tangent-bundle-as-a-disjoint-union, prop-the-zero-section-is-a-smooth-embedding, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, def-local-frame-and-global-frame-of-a-vector-bundle, thm-smooth-inverse-function-theorem-on-manifolds, def-countable-choice]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, definition preceding Lemma 4, printed p. 37 (a nondegenerate zero has invertible Jacobian)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 132-134 (the index near a zero, with the Jacobian criterion for nondegeneracy)"
dependency_level: 0
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a smooth $n$-manifold, $X$ a smooth vector field on $M$ and $p\in M$
a zero of $X$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]). View
$X$ as a smooth section $X:M\to TM$
([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).
The zero section $0_M$ is a smooth embedding
([[prop-the-zero-section-is-a-smooth-embedding]]), so its differential
$d(0_M)_p:T_pM\to T_{(p,0)}TM$ is injective
([[def-differential-of-a-smooth-map]]), and the **vertical quotient** at $p$ is
$$N_p:=T_{(p,0)}TM\big/ d(0_M)_p(T_pM).$$
Since $X$ is a section, both $dX_p$ and $d(0_M)_p$ are right inverses of the
projection $d\pi_{(p,0)}$; hence the class of $dX_p$ in
$\operatorname{Hom}(T_pM,N_p)$ is the **vertical derivative**
$$DX_p\in\operatorname{End}(T_pM),$$
read through the canonical identification $N_p\cong T_pM$: explicitly, the
difference $dX_p-d(0_M)_p$ takes values in the vertical space
$\ker d\pi_{(p,0)}$, and $DX_p$ is that difference followed by the canonical
isomorphism from the vertical space $V_{(p,0)}=\ker d\pi_{(p,0)}$ to $T_pM$. In
an induced tangent-bundle chart $\widetilde\varphi$ over a chart $\varphi$ with
$\varphi(p)=0$ the section reads $u\mapsto(u,X_\varphi(u))$ and
$DX_p$ corresponds to the ordinary derivative $DX_\varphi(0)$ of the chart
representative $X_\varphi$
([[def-induced-tangent-bundle-chart]],
[[def-local-frame-and-global-frame-of-a-vector-bundle]]); a change of chart
conjugates $DX_p$ by an isomorphism, so invertibility and the determinant
$\det DX_p$ are independent of the chart
([[def-tangent-bundle-as-a-disjoint-union]]).

The zero $p$ is **nondegenerate** when $DX_p$ is invertible. A nondegenerate
zero is isolated: in a chart, $X_\varphi(0)=0$ and $DX_\varphi(0)$ is
invertible, so $X_\varphi$ is a diffeomorphism near $0$ by the inverse function
theorem ([[thm-smooth-inverse-function-theorem-on-manifolds]]) and its only
zero near $0$ is $0$ itself. In particular a nondegenerate zero is an isolated
zero and $X$ has no other zero in some neighbourhood of $p$. The vertical derivative itself requires no further choice once the smooth
tangent-bundle structure is supplied.
