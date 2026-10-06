---
id: ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight
kind: example
title: Freudenthal recursion for the sl3 adjoint zero weight
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
deps: [def-axiom-of-choice, thm-freudenthal-weight-multiplicity-recursion, cor-freudenthal-recursion-terminates-from-the-highest-weight, ex-kostant-multiplicity-in-the-sl3-adjoint-module, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, prop-root-systems-of-the-classical-complex-lie-algebras, def-classical-complex-matrix-lie-algebras, prop-the-adjoint-representation-has-highest-weight-the-highest-root, def-weyl-vector-rho-for-a-chosen-positive-system, def-kostant-partition-function]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§11.3, printed pp. 80--82 (Theorem 11.7 and the worked A2 tables of weight multiplicities)"
    - title: "R. Borcherds, Berkeley Math 261 course notes, page on the Freudenthal multiplicity formula"
      url: "https://math.berkeley.edu/~reb/courses/261/47.pdf"
      locator: "printed p. 146 (the Freudenthal formula and the remark that it gives no information on the extremal Weyl orbit)"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Keep the setting of
[[ex-kostant-multiplicity-in-the-sl3-adjoint-module]]:
$\mathfrak g=\mathfrak{sl}_3$,
$\lambda=\theta=\alpha_1+\alpha_2=\rho$, $\mu=0$. Then
$(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)=(2\theta,2\theta)-(\theta,\theta)=3(\theta,\theta)$,
and in the right side of [[thm-freudenthal-weight-multiplicity-recursion]]
only $j=1$ contributes, since $2\alpha,3\alpha,\dots$ are not weights of the
adjoint module $L(\theta)$; hence the recursion reads
$3(\theta,\theta)m_\lambda(0)=2\sum_{\alpha\in\Phi^+}(\alpha,\alpha)m_\lambda(\alpha)$.
In the realization $\alpha_1=e_1-e_2$, $\alpha_2=e_2-e_3$,
$\theta=e_1-e_3$ of [[prop-root-systems-of-the-classical-complex-lie-algebras]]
the three positive roots have the same length, and
$m_\lambda(\alpha_1)=m_\lambda(\alpha_2)=m_\lambda(\theta)=1$, so
$3(\theta,\theta)m_\lambda(0)=2\cdot3(\theta,\theta)$ and $m_\lambda(0)=2$,
recovering [[ex-kostant-multiplicity-in-the-sl3-adjoint-module]]. The
extremal weights $\pm\alpha_1,\pm\alpha_2,\pm\theta=W\lambda$ are the Weyl
orbit of the top weight and each has multiplicity one
([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]]);
among them only the top weight $\theta=\lambda$ has the vanishing recursion
coefficient of the indeterminate case $0=0$ in
[[cor-freudenthal-recursion-terminates-from-the-highest-weight]], whose base
value $m_\lambda(\lambda)=1$ is stated there.

## Facts & Assumptions

**Given:** The Axiom of Choice, the realization of $\mathfrak{sl}_3$ with positive roots $\alpha_1,\alpha_2,\theta=\alpha_1+\alpha_2$ of equal length, the Weyl vector $\rho=\theta$, the top weight $\lambda=\theta$, the weight $\mu=0$, the adjoint module $L(\theta)$, and the multiplicities $m_\theta(\nu)$.

[A1] The Axiom of Choice is assumed; it enters through the Freudenthal recursion and the highest-weight suppliers below ([[def-axiom-of-choice]]).

[F1] In the realization $\alpha_1=e_1-e_2$, $\alpha_2=e_2-e_3$ the positive roots are $\alpha_1,\alpha_2,\theta$ with $(\alpha_1,\alpha_1)=(\alpha_2,\alpha_2)=(\theta,\theta)$, and $\rho=\alpha_1+\alpha_2=\theta$ ([[prop-root-systems-of-the-classical-complex-lie-algebras]], [[def-classical-complex-matrix-lie-algebras]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] The adjoint module is $L(\theta)$ and its weights are $0$ with multiplicity $2$, and $\pm\alpha_1,\pm\alpha_2,\pm\theta$ each with multiplicity $1$ ([[prop-the-adjoint-representation-has-highest-weight-the-highest-root]], [[ex-kostant-multiplicity-in-the-sl3-adjoint-module]]).

[F3] Freudenthal's recursion reads $\bigl((\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)\bigr)m_\lambda(\mu)=2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}(\mu+j\alpha,\alpha)m_\lambda(\mu+j\alpha)$ ([[thm-freudenthal-weight-multiplicity-recursion]]).

[F4] The extremal weights $W\lambda$ each have multiplicity one, and the recursion has the base value $m_\lambda(\lambda)=1$ with the indeterminate case $0=0$ occurring, among actual weights of $L(\lambda)$, only at $\mu=\lambda$ ([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]], [[cor-freudenthal-recursion-terminates-from-the-highest-weight]]).

## Verification

1.1 With $\lambda=\theta=\rho$ and $\mu=0$ the recursion coefficient of [F3] is $(2\theta,2\theta)-(\theta,\theta)=3(\theta,\theta)$, and the weights $0+j\alpha=j\alpha$ of $L(\theta)$ are nonzero only for $j=1$ by the weight list [F2], so each inner sum of $2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}(\alpha j,\alpha)m(j\alpha)$ reduces to its $j=1$ term $(\alpha,\alpha)m(\alpha)$. [F2, F3, A1]

1.2 By [F1] all three positive roots have the same squared length, and by [F2] $m(\alpha_1)=m(\alpha_2)=m(\theta)=1$, so the right side of the recursion is $2\bigl((\alpha_1,\alpha_1)+(\alpha_2,\alpha_2)+(\theta,\theta)\bigr)=6(\theta,\theta)$. [F1, F2]

2.1 Combining steps 1.1 and 1.2, the recursion reads $3(\theta,\theta)m_\theta(0)=6(\theta,\theta)$, and since $(\theta,\theta)\ne0$ this gives $m_\theta(0)=2$, recovering the value computed by Kostant's formula in [F2]. [F2, step 1.1, step 1.2]

3.1 The extremal weights are the six Weyl translates of $\lambda=\theta$, each of multiplicity one by [F4]; the recursion coefficient $4(\theta,\theta)-(\mu+\rho,\mu+\rho)$ vanishes, among actual weights of $L(\theta)$, only at $\mu=\lambda$ by [F4], so among the extremal weights only the top weight is the indeterminate case of the recursion, whose value $m_\theta(\theta)=1$ is the stated base case; this is consistent with the recursion fixing every other multiplicity from that base. [F4, step 1.1] ∎ 