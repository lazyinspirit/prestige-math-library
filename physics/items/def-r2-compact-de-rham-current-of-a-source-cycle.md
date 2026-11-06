---
id: def-r2-compact-de-rham-current-of-a-source-cycle
kind: definition
title: "De Rham currents of compact oriented source cycles"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-embedded-smooth-submanifold-with-boundary
  - def-smooth-differential-k-form
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-pullback-of-a-differential-form
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
justified_by:
  - lem-r2-smooth-form-current-is-compatible-with-differential
  - lem-r2-current-differential-is-continuous-and-squares-to-zero
  - lem-r2-compact-source-cycle-defines-closed-current
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
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

## Definition

Let $X$ be a compact oriented smooth manifold of dimension $n$ without boundary. For $0\le r\le n$, write $\Omega^r(X)$ for the real smooth differential $r$-forms. Give $\Omega^r(X)$ its $C^\infty$ topology: for every chart $\varphi:U\to V\subseteq\mathbb R^n$, every compact $K\subset V$, and every integer $m\ge0$, use the seminorm that is the maximum of the absolute values on $K$ of all coordinate coefficients and their partial derivatives of order at most $m$. On a compact manifold these are the usual smooth-form seminorms and no condition at infinity is involved.

A degree-$k$ de Rham current on $X$ is a continuous real-linear functional $T:\Omega^{n-k}(X)\to\mathbb R$, for $0\le k\le n$. Its pairing is written $\langle T,\eta\rangle$. Put current spaces outside degrees $0,\ldots,n$ equal to zero. For $k<n$, define the current differential by
$$\langle dT,\eta\rangle=(-1)^{k+1}\langle T,d\eta\rangle,\qquad \eta\in\Omega^{n-k-1}(X),$$
where $d$ is the ordinary exterior derivative on smooth forms; set $dT=0$ for $k=n$.

For a smooth $k$-form $\alpha$, its associated smooth-form current is $T_\alpha(\eta)=\int_X\alpha\wedge\eta$. If $i:\Sigma\hookrightarrow X$ is a compact oriented embedded smooth submanifold of dimension $p$ without boundary, its integration current is the degree-$(n-p)$ functional
$$\langle\delta_\Sigma,\eta\rangle:=\int_\Sigma i^*\eta,\qquad \eta\in\Omega^p(X).$$
For a point $y\in X$, put $\langle\delta_y,f\rangle=f(y)$ for $f\in\Omega^0(X)$. For finitely many points $y_a$ and real coefficients $q_a$, the finite point-source current is $\rho=\sum_a q_a\delta_{y_a}$ and its total coefficient is $\langle\rho,1\rangle=\sum_a q_a$.

## Definition references

The symbol $d$ on smooth forms is the exterior derivative specified by the invariant vector-field formula: for an $m$-form $\omega$ and smooth vector fields $Y_0,\ldots,Y_m$,
$$d\omega(Y_0,\ldots,Y_m)=\sum_{j=0}^{m}(-1)^jY_j\bigl(\omega(Y_0,\ldots,\widehat Y_j,\ldots,Y_m)\bigr)+\sum_{0\le i<j\le m}(-1)^{i+j}\omega([Y_i,Y_j],Y_0,\ldots,\widehat Y_i,\ldots,\widehat Y_j,\ldots,Y_m).$$

For a smooth map $F:M\to N$, the pullback of $\omega\in\Omega^r(N)$ is defined pointwise by $(F^*\omega)_x(v_1,\ldots,v_r)=\omega_{F(x)}(dF_xv_1,\ldots,dF_xv_r)$; in the integration-current formula $F=i:\Sigma\hookrightarrow X$ is the inclusion.

Every integral here uses the finite chart-localized oriented integral. For a compactly supported top form $\zeta$ on an oriented smooth manifold $M$, take finitely many compactly supported smooth cutoffs $\chi_j$ in oriented chart domains whose sum is $1$ near $\operatorname{supp}\zeta$, and sum the signed Euclidean chart integrals of $\chi_j\zeta$. The resulting integral is independent of this finite localization and chart choices; for $\dim M\ge1$, it satisfies $\int_M d\lambda=0$ for compactly supported $(\dim M-1)$-forms $\lambda$. Since $X$ and $\Sigma$ are compact, the top forms integrated here have compact support.

[[def-smooth-manifold]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-embedded-smooth-submanifold-with-boundary]]

[[def-smooth-differential-k-form]]

[[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[[def-pullback-of-a-differential-form]]

[[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]

[[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]

## Remarks

The integration-current continuity and closedness, the continuity of the current differential, and the compatibility of $d$ with smooth-form currents are proved by the items in the justified_by field. A closed oriented submanifold is thus represented by a closed current. The term “Poincaré-dual current” is conventional shorthand for this integration current; the definition alone does not identify current cohomology with singular cohomology.

These are mathematical currents with real coefficients. The numbers $q_a$ are only mathematical coefficients; this definition assigns no physical units, brane charge, Wess–Zumino normalization, or source sign.

