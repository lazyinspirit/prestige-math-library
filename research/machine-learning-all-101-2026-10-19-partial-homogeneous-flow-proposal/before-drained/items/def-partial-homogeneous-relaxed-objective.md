---
id: def-partial-homogeneous-relaxed-objective
kind: definition
title: Relaxed objective for a partially one-homogeneous projection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feature-measure-energy, def-partial-one-homogeneous-measure-projection, thm-bounded-linear-maps-commute-with-bochner-integration, def-axiom-of-choice, thm-jordan-decomposition-for-signed-measures, def-the-space-of-finite-total-variation-signed-measures, def-total-variation-of-a-signed-or-complex-measure, def-integration-against-a-signed-or-complex-measure, def-bochner-integrable-function, thm-bochner-integrability-criterion, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, prop-order-and-scalar-rules-for-the-nonnegative-integral]
justified_by: []
axiom_use: "AC is required for the canonical Jordan decompositions; the domination and minimizing-lift calculations use the supplied parts choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Assume AC. Let $(\Theta,\mathcal T)$ be a measurable space, let $\mathcal H$ be a real Hilbert space, let $R:\mathcal H\to[0,\infty)$ be convex and differentiable, let $\varphi:\Theta\to\mathcal H$ be bounded and strongly measurable, and let $\widetilde V:\Theta\to[0,\infty)$ be bounded and measurable. For each finite signed measure $\nu$ on $\Theta$ with $|\nu|(\Theta)<\infty$, write $\nu=\nu^+-\nu^-$ for its Jordan decomposition into mutually singular finite nonnegative measures, so $|\nu|=\nu^++\nu^-$. Define $m_\nu:=\int\varphi d\nu:=\int\varphi d\nu^+-\int\varphi d\nu^-$. Both Bochner integrals exist because $\varphi$ is bounded and strongly measurable and $\nu^+,\nu^-$ are finite. Scalar integrals against $\nu$ use the corresponding signed-measure integral. Assume $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$. Define

$J(\nu)=R\!\left(\int_\Theta\varphi\,d\nu\right)+\int_\Theta\widetilde V\,d|\nu|.$

For every finite nonnegative measure $\mu$ on $(\mathbb R\times\Theta,\mathcal B(\mathbb R)\otimes\mathcal T)$ with $\int|w|d\mu<\infty$ and $h^1(\mu)=\nu$, its feature moment and penalty are $m_\nu$ and $\int|w|\widetilde V(\theta)d\mu$, respectively, and its feature energy is

$F(\mu)=R\left(\int w\varphi(\theta)d\mu\right)+\int|w|\widetilde V(\theta)d\mu.$

Then $F(\mu)\ge J(\nu)$. Equality is attained by the finite nonnegative measure $\mu_\nu$ defined on measurable $A\subseteq\mathbb R\times\Theta$ by

$\mu_\nu(A)=\nu^+(\{\theta:(1,\theta)\in A\})+\nu^-(\{\theta:(-1,\theta)\in A\}).$

Thus $J(\nu)=\inf\{F(\mu):\mu\ge0,\ \int|w|d\mu<\infty,\ h^1(\mu)=\nu\}$.

## Definition references

[[def-feature-measure-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[def-axiom-of-choice]]

[[thm-jordan-decomposition-for-signed-measures]]

[[def-the-space-of-finite-total-variation-signed-measures]]

[[def-total-variation-of-a-signed-or-complex-measure]]

[[def-integration-against-a-signed-or-complex-measure]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

[[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

[Chizat and Bach, Proposition A.3 and Appendix A.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the model, a finite signed measure $\nu$, and the signed projection in the Definition.

[A1] AC supplies the Jordan decomposition of each finite signed measure. [[def-axiom-of-choice]] [[thm-jordan-decomposition-for-signed-measures]]

[F1] $h^1(\mu)=\alpha_\mu-\beta_\mu$, with $\alpha_\mu(\Theta)+\beta_\mu(\Theta)=\int|w|d\mu$; for every bounded measurable scalar $\psi$, its pairing is $\int\psi dh^1(\mu)=\int w\psi(\theta)d\mu$, and $h^1(\mu)$ has finite total variation. [[def-partial-one-homogeneous-measure-projection]]

[F2] A bounded linear map commutes with Bochner integration, so feature moments are determined by all scalar evaluations. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F5] Signed integrals are defined by approximation with simple functions; bounded strongly measurable functions are integrable against finite signed measures. [[def-integration-against-a-signed-or-complex-measure]]

[F3] Total variation is the supremum of the sums over countable measurable partitions. [[def-total-variation-of-a-signed-or-complex-measure]]

[F4] The nonnegative integral is monotone. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F7] For the Jordan decomposition, total variation satisfies $|\nu|=\nu^++\nu^-$. [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]

[F6] Strongly measurable Banach-valued functions with integrable norm have Bochner integrals defined by simple-function approximation. [[thm-bochner-integrability-criterion]]

## Proof

**Given:** AC, $\mu$, and $\nu=h^1(\mu)$ as in the Definition.

1.1 Let $\alpha,\beta$ be the raw measures in [F1]. For every countable measurable partition $(B_j)$ of a measurable set $B$, $\sum_j|\nu(B_j)|=\sum_j|\alpha(B_j)-\beta(B_j)|\le\alpha(B)+\beta(B)$. Taking the supremum in [F3] gives $|\nu|(B)\le(\alpha+\beta)(B)$. For a nonnegative simple $\widetilde V$, the definitions of $\alpha,\beta$ give $\int\widetilde Vd(\alpha+\beta)=\int|w|\widetilde V(\theta)d\mu$. If $M$ bounds $\widetilde V$, partition $[0,M]$ into finitely many intervals of length at most $1/n$ and assign an endpoint on each measurable inverse image. This gives nonnegative simple $V_n$ with $\|V_n-\widetilde V\|_\infty\le1/n$. The error on the left is at most $(\alpha(\Theta)+\beta(\Theta))/n$, and the error on the right is at most $\int|w|d\mu/n$; these bounds agree because $\alpha(\Theta)+\beta(\Theta)=\int|w|d\mu$. Taking $n\to\infty$ proves the identity for $\widetilde V$. Monotonicity [F4] and the measure domination, with $|\nu|$ a measure by [F7], give $\int\widetilde Vd|\nu|\le\int\widetilde Vd(\alpha+\beta)=\int|w|\widetilde V(\theta)d\mu$. [A1, F1, F3, F4, F7, given, algebra]

2.1 For every $z\in\mathcal H$, set $\psi_z(\theta)=\langle z,\varphi(\theta)\rangle$. For a finite-valued simple $\psi_z$, equality $h^1(\mu)=\nu$ and the signed simple-integral definition give $\int\psi_zdh^1(\mu)=\int\psi_zd\nu$. The measure $\lambda=\alpha_\mu+\beta_\mu+\nu^++\nu^-$ is finite by [F1] and [F7]. The bounded strongly measurable feature is Bochner integrable with respect to $\lambda$ by [F6], so simple approximants in $L^1(\lambda)$ extend the scalar integral equality to $\psi_z$; the signed-integral definition [F5] gives the same approximation for $\int\psi_zd\nu$. The raw pairing [F1] now gives $\int w\psi_z(\theta)d\mu=\int\psi_zd\nu$. By [F2], these are respectively $\langle z,\int w\varphi d\mu\rangle$ and $\langle z,\int\varphi d\nu\rangle$, so equality for every $z$ proves equality of feature moments. Adding the risk term to step 1.1 proves $F(\mu)\ge J(\nu)$. The section maps $\theta\mapsto(1,\theta)$ and $\theta\mapsto(-1,\theta)$ are measurable: preimages of measurable rectangles are either empty or measurable subsets of $\Theta$. Their preimages preserve disjoint unions, so the displayed formula defines a finite nonnegative measure, of mass $\nu^+(\Theta)+\nu^-(\Theta)=|\nu|(\Theta)$. The definition of $h^1$ gives $h^1(\mu_\nu)=\nu^+-\nu^- =\nu$ by [A1]. Direct integration on the two sections gives $\int|w|\widetilde Vd\mu_\nu=\int\widetilde Vd\nu^++\int\widetilde Vd\nu^-=\int\widetilde Vd|\nu|$ and $\int w\varphi d\mu_\nu=\int\varphi d\nu^+-\int\varphi d\nu^-=m_\nu$. Hence $F(\mu_\nu)=J(\nu)$. This proves the infimum identity and its attainment. [A1, F1, F2, F5, F6, F7, step 1.1] ∎
