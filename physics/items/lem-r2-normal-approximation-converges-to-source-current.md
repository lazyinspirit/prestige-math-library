---
id: lem-r2-normal-approximation-converges-to-source-current
kind: lemma
title: "Normalized normal-coordinate forms converge to the source current"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - lem-r2-smooth-form-current-is-compatible-with-differential
  - def-smooth-manifold
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-embedded-smooth-submanifold-with-boundary
  - thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
  - lem-chart-bump-at-a-point-with-prescribed-support
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-smooth-form-current-is-compatible-with-differential: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts: mathematical-premise
  lem-chart-bump-at-a-point-with-prescribed-support: mathematical-premise
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
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology, §7.2"
      url: "https://umutvg.github.io/difftop.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §§3.1–3.2 and §4.4"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
---

## Statement

Let $C^p$ be a compact oriented embedded smooth submanifold without boundary in a compact oriented smooth $n$-manifold $X$, and put $q=n-p$. There are smooth $q$-forms $\alpha_\epsilon$, for all sufficiently small $\epsilon>0$, supported in neighborhoods that shrink to $C$, such that
$$\lim_{\epsilon\downarrow0}\int_X\alpha_\epsilon\wedge\eta=\int_C\eta$$
for every smooth $p$-form $\eta$ on $X$. Thus the associated currents $T_{\alpha_\epsilon}$ converge to the integration current $\delta_C$. The regularizing forms are normalized normal-coordinate bumps; they are not asserted to be closed Thom representatives.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]

## Facts & Assumptions

**Given:** The compact oriented smooth manifolds $C$ and $X$, the embedding, and the current convention of the definition.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $\langle\delta_C,\eta\rangle=\int_C\eta$ and the current associated to a smooth $q$-form $\alpha$ by $T_\alpha(\eta)=\int_X\alpha\wedge\eta$.

[F2] [[lem-r2-smooth-form-current-is-compatible-with-differential]] proves that every such smooth-form functional is a continuous current.

[F3] [[lem-chart-bump-at-a-point-with-prescribed-support]] supplies smooth functions supported in any prescribed chart neighborhood and equal to one at a specified point.

[F4] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] defines the chart-independent integral of compactly supported top forms.

[F5] [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]] supplies ordinary slice coordinates at every point of $C$, since $C$ has no boundary.

[F6] [[def-oriented-smooth-manifold-and-oriented-chart]] defines positive orientation rays in determinant lines and, in dimension zero, records the orientation by its point sign rather than by the empty frame.

## Proof

**Given:** Write $q=n-p$. Use a finite family of connected product-adapted charts $(u^1,\ldots,u^p,v^1,\ldots,v^q)$ around $C$, with $C$ given by $v=0$. In each chart let $\epsilon_{X,j}\in\{+1,-1\}$ record whether the ambient coordinate determinant generator agrees with the orientation of $X$, and let $\epsilon_{C,j}\in\{+1,-1\}$ record whether the tangential coordinate determinant generator agrees with the orientation of $C$; when $p=0$ or $n=0$, use the point sign specified by [F6]. Put $\kappa_j=\epsilon_{X,j}\epsilon_{C,j}$.

1.1 If $C=\varnothing$, take $\alpha_\epsilon=0$; the empty chart sum in [F4] gives $\int_C\eta=0$, and the stated limit follows. Assume for the rest of the construction that $C\ne\varnothing$. At each point of $C$, choose a nonnegative smooth bump on $C$ supported compactly in an adapted chart's base and positive at that point, using [F3]. Compactness gives finitely many such bumps $\beta_j$ whose positive sets cover $C$. Their sum $B=\sum_j\beta_j$ is positive, so $\chi_j=\beta_j/B$ is a finite smooth partition of unity on $C$ subordinate to the base charts. Each $\chi_j$ has compact support in its base chart. Extend it constantly in the normal coordinate near $v=0$. [F3, F4, given, construct]

1.2 By [F5], each point of $C$ has an ordinary slice chart because it is an interior point of the boundaryless submanifold; take a finite such cover. For each chart use [F3] in its normal coordinate neighborhood to choose $\theta_j\in C_c^\infty(\mathbb R^q)$ supported inside that neighborhood with $\theta_j(0)=1$. If $q>0$, put $b(z)=\exp(-1/(1-|z|^2))$ for $|z|<1$ and $b(z)=0$ for $|z|\ge1$. Every derivative at the unit sphere vanishes because $s^{-N}e^{-1/s}\to0$ as $s\downarrow0$ for each $N$, so $b$ is smooth; it is positive on the unit ball and compactly supported. Thus $c_q=\int b(z)\,dz$ is finite and positive, and $\rho=b/c_q$ is smooth, compactly supported, and has integral one. For $q=0$, take the unit function on $\mathbb R^0$ with integral one. In the $j$th chart set
$$\alpha_{\epsilon,j}=(-1)^{pq}\kappa_j\chi_j(u)\theta_j(v)\epsilon^{-q}\rho(v/\epsilon)\,dv^1\wedge\cdots\wedge dv^q,$$
and extend by zero. Compact support of $\chi_j$, $\theta_j$, and $\rho$ makes this extension smooth for sufficiently small $\epsilon$. Set $\alpha_\epsilon=\sum_j\alpha_{\epsilon,j}$. Given any open neighborhood $W$ of $C$, each compact set $\operatorname{supp}(\chi_j)\times\{0\}$ lies inside the chart preimage of $W$. Compactness and openness give $\delta_j>0$ such that $\operatorname{supp}(\chi_j)\times\{|v|\le\delta_j\}$ stays inside that preimage. Since $\rho(v/\epsilon)$ is supported where $|v|\le\epsilon$, all terms are supported in $W$ for $0<\epsilon<\min_j\delta_j$. Thus this single fixed family has supports shrinking to $C$. [F1, F3, F5, F6, given, construct]

2.1 In the $j$th adapted chart, only the tangential coefficient of $\eta$ contributes to $\alpha_{\epsilon,j}\wedge\eta$. Moving the normal wedge past the $p$ tangential differentials contributes $(-1)^{pq}$, which cancels the prefactor. With $v=\epsilon z$, the signed finite chart integral [F4] is
$$\int_X\alpha_{\epsilon,j}\wedge\eta=\epsilon_{X,j}\kappa_j\int \chi_j(u)\theta_j(\epsilon z)\rho(z)\eta_{\parallel}(u,\epsilon z)\,du\,dz,$$
where $\eta_{\parallel}$ is the coefficient of $du^1\wedge\cdots\wedge du^p$. On the compact support of $\chi_j(u)\rho(z)$, smoothness of $\eta$ and continuity of $\theta_j$ give uniform convergence $\theta_j(\epsilon z)\eta_{\parallel}(u,\epsilon z)\to\eta_{\parallel}(u,0)$. Since $\epsilon_{X,j}\kappa_j=\epsilon_{C,j}$ and $\int\rho=1$, this term converges to $\int_C\chi_j\,\eta$, including the orientation sign when a tangential factor has dimension zero. The same formula uses the empty wedge and zero-dimensional integral when $p=0$ or $q=0$. [F4, F6, step 1.2, algebra]

3.1 There are finitely many charts, so summing step 2.1's limits and using $\sum_j\chi_j=1$ on $C$ gives $\lim_{\epsilon\downarrow0}\int_X\alpha_\epsilon\wedge\eta=\int_C\eta$. By [F1] this is convergence to $\delta_C$ on every test form; by [F2] each $T_{\alpha_\epsilon}$ is a current. This proof asserts neither that $\alpha_\epsilon$ is closed nor that it represents a Thom cohomology class. [F1, F2, step 2.1, algebra] ∎

## Statement references

[[lem-chart-bump-at-a-point-with-prescribed-support]]

[[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]

