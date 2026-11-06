---
id: lem-r2-compact-source-cycle-defines-closed-current
kind: lemma
title: "A compact oriented source cycle defines a closed current"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
  - lem-r2-current-differential-is-continuous-and-squares-to-zero
  - def-pullback-of-a-differential-form
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts: mathematical-premise
  lem-r2-current-differential-is-continuous-and-squares-to-zero: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §4.4"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

Let $i:\Sigma\hookrightarrow X$ be a compact oriented embedded smooth $p$-submanifold without boundary. Then $\eta\mapsto\int_\Sigma i^*\eta$ is a continuous degree-$(n-p)$ current on $X$, and $d\delta_\Sigma=0$ in the current convention of [[def-r2-compact-de-rham-current-of-a-source-cycle]].

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]

## Facts & Assumptions

**Given:** The compact oriented smooth $n$-manifold $X$, the compact oriented smooth $p$-manifold $\Sigma$, and its smooth embedding $i$.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $\delta_\Sigma(\eta)=\int_\Sigma i^*\eta$ as a degree-$(n-p)$ current candidate, using the $C^\infty$ topology on forms.

[F2] [[def-pullback-of-a-differential-form]] defines pullback pointwise by applying the differential of the map to each vector argument.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]] makes pullback smooth and preserves wedges.

[F4] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d(\sum_I a_I\,dx^I)=\sum_{I,j}(\partial_j a_I)\,dx^j\wedge dx^I$. In the slice coordinates supplied by [F6], this proves $i^*(d\eta)=d(i^*\eta)$ as shown in step 1.2.

[F5] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] defines the finite chart integral on compact oriented manifolds and proves $\int_\Sigma d\beta=0$ for every smooth $(p-1)$-form $\beta$ when $\partial\Sigma=\varnothing$.

[F6] [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]] gives ordinary slice coordinates at every interior point of an embedded manifold with boundary; here every point of $\Sigma$ is interior because $\partial\Sigma=\varnothing$.

## Proof

**Given:** The chart supports in the following estimates are compact subsets of their chart domains.

1.1 By [F6], cover $\Sigma$ by finitely many ordinary slice charts and localize the integral with finitely many smooth cutoffs. In such a chart, $i$ is the coordinate inclusion $u\mapsto(u,0)$, so the pointwise pullback formula [F2] makes each coefficient of $i^*\eta$ a restriction of a coefficient of $\eta$ (with the fixed coordinate inclusion differential). These coefficients are bounded on the compact localized supports. Each chart integral is therefore bounded by a constant times an order-zero $C^\infty$ seminorm of $\eta$ on a compact subset of $X$. Summing the finitely many bounds gives $|\delta_\Sigma(\eta)|\le C p_0(\eta)$ for a continuous seminorm $p_0$ on $\Omega^p(X)$. Thus $\delta_\Sigma$ is continuous and is a current. [F1, F2, F3, F5, F6, given, algebra]

1.2 Use a slice chart from [F6], writing $x=(u^1,\ldots,u^p,v^1,\ldots,v^{n-p})$ and $i(u)=(u,0)$. Write an ambient $r$-form as $\eta=\sum_I a_I(u,v)\,dx^I$ with increasing multi-indices $I$. By [F2] and [F3], any wedge containing a $dv^j$ pulls back to zero, while a purely tangential wedge $du^I$ pulls back to itself. Therefore [F4] gives $d(i^*\eta)=\sum_{I\subseteq\{1,\ldots,p\},\,j\le p}(\partial_{u^j}a_I)(u,0)\,du^j\wedge du^I=i^*(d\eta)$: differentiating $a_I(u,0)$ in a tangential coordinate is precisely the corresponding partial derivative of $a_I$ at $(u,0)$, and every term of $d\eta$ containing a normal differential vanishes on pullback. This calculation includes $r=0$, empty sums for $r>p$, and $p=0$, where all positive-degree forms on $\Sigma$ vanish. Equality in a slice chart at every point proves the global identity. [F2, F3, F4, F6, given, algebra]

2.1 If $p=0$, then $\delta_\Sigma$ has degree $n$ and its differential is zero by the top-degree convention in [F1]. If $p>0$, take any ambient test form $\eta\in\Omega^{p-1}(X)$. By the differential definition and step 1.2, $$\langle d\delta_\Sigma,\eta\rangle=(-1)^{n-p+1}\int_\Sigma i^*(d\eta)=(-1)^{n-p+1}\int_\Sigma d(i^*\eta)=0$$ by [F5]. The test form is ambient, as required by the current domain. Hence $d\delta_\Sigma=0$ in all dimensions. [F1, F5, step 1.1, step 1.2, given, algebra] ∎

## Statement references

[[def-pullback-of-a-differential-form]]

[[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]

[[thm-local-coordinate-formula-for-the-exterior-derivative]]

[[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]

