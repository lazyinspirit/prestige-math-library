---
id: thm-pinn-linear-elliptic-consistency
kind: theorem
title: "Elliptic PINN minimizers converge to the Dirichlet solution"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-shin-elliptic-divergence-form-operator
  - lem-shin-elliptic-residual-stability
  - lem-shin-elliptic-energy-estimate
  - thm-shin-elliptic-dirichlet-existence-and-residual-stability
  - thm-pinn-regularized-loss-consistency
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
  - cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Theorem 3.3, Appendix D, Theorem D.1 and Lemma D.2; Appendix E"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Use the corrected small-scale sampling, trial-class, exact-zero-witness, and exact regularization hypotheses of the regularized PINN theorem, with residual and boundary operators $L$ and boundary restriction. Let $d\ge2$ and let $U\subset\mathbb R^d$ be bounded Lipschitz with an exterior sphere at every boundary point. For $0<\alpha<1$, let $a_{ij}=a_{ji}\in C^{1,\alpha}(U)$ have minimum eigenvalue at least $\lambda_0>0$, let $b_i\in C^{1,\alpha}(U)$ and $c_i,d\in C^{0,\alpha}(U)$, and put
$$L[u]=\sum_{i,j}D_i(a_{ij}D_j u)+\sum_iD_i(b_i u)+\sum_i c_iD_i u+du,$$
$$\widetilde b_j=\sum_iD_i a_{ij}+b_j+c_j,\qquad \widetilde c=\sum_iD_i b_i+d\le0.$$
All indicated Hölder norms are finite global norms. Retain the source coefficient bounds $\sum_{i,j}|a_{ij}|^2\le\Lambda$ and $\lambda_0^{-2}(|b|^2+|c|^2)+\lambda_0^{-1}|d|\le v^2$. Let $f\in C^{0,\alpha}(U)$ and $g\in C^{0,\alpha}(\partial U)$. There is exactly one $u^*\in C^{2,\alpha}_{\mathrm{loc}}(U)\cap C^0(\bar U)$ with $L[u^*]=f$ and $u^*=g$ on $\partial U$.

Every sequence of global regularized empirical minimizers $h_m$ converges to $u^*$ in $C^0(U)$ almost surely as both sample counts tend to infinity. If $m_r=O(m_b^{d/(d-1)})$, the occupancy-event squared uniform error is $O(m_r^{-\alpha/d})$, with the probability and constants of the regularized-loss theorem. If each minimizer satisfies the boundary data exactly, the errors belong to $H^1_0(U)$ and converge to zero in $H^1(U)$ almost surely. If in addition $U$ is $C^{2,\alpha}$ and $g$ has a $C^{2,\alpha}$ lifting, the usual global $C^{2,\alpha}(\bar U)$ branch applies with its stated coefficient/data hypotheses. No global Hölder regularity is claimed from the exterior-sphere condition alone, and no optimizer convergence is asserted.

## Statement references

[[thm-pinn-regularized-loss-consistency]]

[[thm-shin-elliptic-dirichlet-existence-and-residual-stability]]

[[lem-shin-elliptic-energy-estimate]]

[Shin et al., Theorems 3.3–3.4 and Appendices D–E](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The stated coefficient, sampling, witness, global-minimizer, and choice hypotheses.

[F1] The elliptic theorem gives unique local-Hölder classical existence with continuous boundary attainment, the smooth-boundary global branch under its extra hypotheses, and $H^1_0$ membership of every zero-boundary classical solution whose forcing is globally Hölder ([[thm-shin-elliptic-dirichlet-existence-and-residual-stability]]).

[F2] The populated-cell proof gives both residual errors tending uniformly to zero almost surely, without weight comparability, and its quantitative occupancy-event bounds ([[thm-pinn-regularized-loss-consistency]]).

[F3] The actual expanded coefficients satisfy the residual-stability estimate for any $C^2(U)\cap C(\bar U)$ error ([[def-shin-elliptic-divergence-form-operator]], [[lem-shin-elliptic-residual-stability]]).

[F4] The source coefficient bound and $H^1_0$ membership give the elliptic energy estimate ([[lem-shin-elliptic-energy-estimate]]).

[A1] The Axiom of Choice and Countable Choice are inherited from the existence supplier; the zero-boundary closure/energy convention retains Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

1.1 The finite global $C^{1,\alpha}$ norms of $a,b$ make $\widetilde b,\widetilde c$ globally bounded and Hölder, with $\widetilde c\le0$. Thus [F1] yields the unique solution in the stated local class. Apply [F3] to $e_m=h_m-u^*$, whose boundary values are $h_m-g$ and whose forcing is $L[h_m]-f$. It gives $\|e_m\|_\infty\le C_L(\|L[h_m]-f\|_\infty+\|h_m-g\|_{\infty;\partial U})$. Both terms tend to zero almost surely by [F2]. Squaring this estimate transfers the occupancy-event rate and its event probability to the solution error. The constant may depend on the bounded expanded coefficients and thus their derivative bounds, not only $\Lambda,v$. [given, A1, F1, F2, F3, algebra]

2.1 If the boundary data are exact, $e_m\in C^2(U)\cap C(\bar U)$ has zero boundary value and $L[e_m]=L[h_m]-f\in C^{0,\alpha}(U)$. The zero-boundary assertion in [F1] gives $e_m\in H^1_0(U)$; this is proved by zero extensions of the smooth approximants and weak convergence, not inferred from continuity alone. Since $|U|<\infty$, step 1.1 and [F2] imply $\|e_m\|_{L^2(U)}+\|L[e_m]\|_{L^2(U)}\to0$. Apply [F4] to obtain $\|e_m\|_{H^1(U)}\to0$. This statement is about the errors, and remains meaningful even if the individual nonzero-data solution is not in $H^1(U)$. [given, F1, F2, F4, step 1.1, algebra]

3.1 Under the extra smooth-boundary/data hypotheses, [F1] supplies the stated global regularity branch for this same unique solution. The native sector counterexample refutes extending that conclusion to every exterior-sphere Lipschitz domain. This completes all the stated convergence and regularity assertions. [F1, step 1.1, step 2.1, algebra] ∎

## Remarks

The source's stronger global $C^{2,\alpha}(U)$ existence assertion for exterior-sphere domains is false for its own globally bounded Hölder convention; the native $2\pi/3$ cutoff-sector counterexample is retained. The exact original carrier is archived in the proposal. The active divergence formula counts $\operatorname{div}(bu)$ once, consistently with the expanded coefficients and energy calculation; the original repeated-index printed expression is recorded in the operator definition's source discrepancy. The minimizer conclusion uses the repaired populated-cell proof and the corrected small-scale sampling convention, with no hidden balance premise.
