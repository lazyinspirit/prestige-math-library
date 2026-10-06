---
id: lem-separating-critical-values-far-from-the-boundary
kind: lemma
title: "Separating critical values far from the boundary"
status: published
origin: pipeline
dependency_level: 0
deps: [lem-finitely-many-critical-values-can-be-separated-locally, lem-manifold-bump-for-a-compact-set-inside-an-open-set, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-morse-function-and-excellent-morse-function]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
proof_strategy: "bump perturbations supported off a boundary collar"
---

## Statement

Let $W$ be a compact smooth manifold with boundary and let $f:W\to\mathbb R$ be
a Morse function with finitely many critical points, all interior and none in a
closed neighbourhood $C$ of $\partial W$. Then every $C^\infty$ neighbourhood of
$f$ contains a Morse function $g$ with $g=f$ on $C$, the same critical points and
the same Hessian at each of them, and distinct critical values.

## Facts & Assumptions

[F1] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

[F3] [[def-morse-function-and-excellent-morse-function]]: Let $M$ be a smooth manifold and let $f:M\to\mathbb R$ be smooth. The function $f$ is a **Morse function** when every critical point of $f$ is nondegenerate. The function $f$ is an **excellent Morse function** when it is Morse and any two distinct critical points have distinct critical values.

[A1] In finitely many relatively compact charts covering a compact regular set, a chosen nonzero coordinate component of $df$ stays bounded away from zero after shrinking the chart. The finitely many coordinate derivatives of any fixed smooth bumps are bounded on the corresponding compact chart cores.

[A2] For fixed smooth bumps the finite coefficient map into $C^\infty(W)$ is continuous: each coordinate derivative seminorm is bounded by the sum of absolute coefficients times the finitely many fixed derivative bounds.

## Proof

**Given:** $W,f,C$ and a prescribed $C^\infty$ neighbourhood $\mathcal U$ as in the statement.

1.1 Choose disjoint relatively compact interior neighbourhoods $U_i$ of the finitely many critical points $p_i$, contained in $W\setminus C$, and smaller neighbourhoods $V_i$ with closures in $U_i$. By [F1], on the boundaryless interior choose bumps $\rho_i$ equal to one near $\overline V_i$ with support in $U_i$, and extend them by zero to $W$. Set $K=W\setminus\bigcup_iV_i$, a compact set with no critical point. [F1, given, choose]

2.1 At each point of $K$, including boundary points, some component of $df$ in a chart is nonzero. Consider all smaller chart neighbourhoods with compact cores on which such a component has absolute value at least a positive number. Their interiors cover $K$, and compactness selects finitely many. Let $m>0$ be the least of these finitely many positive bounds, and bound all derivatives of the $\rho_i$ in these coordinate directions on the compact cores. If $K$ is empty, all bounds are vacuous. [A1, step 1.1, choose]

3.1 Choose arbitrarily small $\lambda_i$ such that $f(p_i)+\lambda_i$ are pairwise distinct, $g=f+\sum_i\lambda_i\rho_i\in\mathcal U$, and each coordinate derivative change on the finite chart cores is less than $m/2$. Such coefficients exist because the distinct-value conditions exclude finitely many hyperplanes and [A2] makes all smallness conditions open near zero. On $V_i$, $g=f+\lambda_i$, preserving the critical points and Hessians; on $K$ one chosen component at every point remains nonzero. [A1, A2, step 1.1, step 2.1, choose, construct]

4.1 Thus $g$ has exactly the original nondegenerate critical points and has distinct critical values. All bump supports miss $C$, so $g=f$ on $C$. With no critical points, use $g=f$. This proves the assertion without selecting a global metric or silently assuming its choice principle. [F3, step 1.1, step 3.1, algebra] ∎
