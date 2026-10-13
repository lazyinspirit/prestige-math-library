---
id: ex-cm-analytic-pendulum-verlet-domain-check
kind: example
title: 'Analytic pendulum: checking the complex bounds and compact-iterate hypothesis'
status: published
origin: pipeline
domain: mathematics
dependency_level: 18
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- thm-cm-analytic-verlet-energy-on-exponential-times
- lem-cm-separate-roundoff-energy-accumulation
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  thm-cm-analytic-verlet-energy-on-exponential-times: mathematical-premise
  lem-cm-separate-roundoff-energy-accumulation: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Example

On the dimensionless real ball $U=B_4(0)\subseteq\mathbb R^2$, take $\Pi=\mathbb R$, mechanical mass matrix $\mathsf M=(1)$, $A(q,p)=1-\cos q$ and $B(q,p)=p^2/2$, with holomorphic extensions $\tilde A(q,p)=1-\cos q$ and $\tilde B(q,p)=p^2/2$ on $D(1)$. Set $\rho=1$ and $K=\overline B_2(0)$. The analytic labels are potential first and kinetic second, so the splitting is velocity Verlet. These data satisfy the analytic hypotheses with the field bound $M=5+\cosh(1)$. Therefore, for sufficiently small constant $h>0$, if the iterates lie in $K$ through $nh\le e^{c/(2h)}$, their original-energy deviation is $O(h^2)$. Compact retention is an additional hypothesis, which this example does not infer from the estimate.

## Verification

**Given:** The stated sets and entire functions, with dimensionless coordinates.

[F1] [[def-cm-analytic-splitting-data-and-exact-splitting-map]] specifies the complex neighbourhood, vector-field bound and compact margin. [[thm-cm-analytic-verlet-energy-on-exponential-times]] supplies the conditional energy estimate; [[lem-cm-separate-roundoff-energy-accumulation]] supplies its perturbed version.

1.1 Analytic-data check. Both functions extend entirely. On $D(1)$ around $\overline U$, $|p|<5$ and $|\operatorname{Im}q|<1$. Since $|\sin(x+iy)|^2=\sin^2x+\sinh^2y\le\cosh^2(1)$, $\|X_A\|\le\cosh(1)$ and $\|X_B\|<5$, both bounded by $M$. The sets are star-shaped about zero, $K$ is compact in $U$, and its real boundary margin is $2$. The analytic labels are potential first, kinetic second, so the composition is kick-drift-kick. [given, F1, algebra]

2.1 Consequence and perturbations. Choose the theorem's sufficiently small $h_0$ also with $h_0\le1/(2M)$, using the computed margin $\delta=2$. Its mechanical-stage argument bounds every full internal segment by $2Mh\le1$ from its retained starting point in $K$, so all stages lie in $B_3(0)\subset U$ and the analytic splitting equals velocity Verlet. All analytic-data hypotheses now hold, so [F1] gives the stated energy conclusion if numerical retention holds. If computed points $x_j\in K$ additionally have per-step state errors at most $\eta$, and every comparison segment from $x_{j+1}$ to $\Psi_h(x_j)$ and from $\Psi_h(x_j)$ to the modified-flow endpoint lies in $D(1/8)$, the estimate instead reads $|H(x_n)-H(x_0)|\le2C_Eh^2+Cnh e^{-c/h}+C_Gn\eta$. Neither conclusion certifies retention or predicts empirical machine error. [step 1.1, F1] ∎
