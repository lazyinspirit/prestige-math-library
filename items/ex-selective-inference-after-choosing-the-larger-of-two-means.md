---
id: ex-selective-inference-after-choosing-the-larger-of-two-means
kind: example
title: Selective inference after choosing the larger of two means
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-polyhedral-selection-event-and-contrast-interval
  - def-polyhedral-selective-normal-pivot
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - def-standard-normal-and-normal-laws
  - thm-independent-random-elements-have-product-joint-law
  - thm-truncated-normal-selective-pivot-is-conditionally-uniform
  - cor-exact-polyhedral-selective-tests-and-confidence-sets
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
    - title: "William Fithian, Dennis L. Sun, and Jonathan E. Taylor, Optimal Inference After Model Selection"
      url: "https://arxiv.org/pdf/1410.2597"
proof_strategy: direct
---

## Example

Assume AC, as in the standard-normal, multivariate-normal, and selective-pivot conventions. Let $W=(W_1,W_2)^T$ have independent standard normal coordinates, fix $\mu=(\mu_1,\mu_2)^T\in\mathbb R^2$ and known $\sigma>0$, and set $Y=\mu+\sigma W$. Then $Y$ is the concrete realization of $N_2(\mu,\sigma^2I_2)$ in the multivariate normal definition, with coordinates $Y_i=\mu_i+\sigma W_i$. Select index 1 on $S=\{Y_1\ge Y_2\}$ and then infer about the fixed contrast $\mu_1$. Take $n=2$, $\eta=(1,0)^T$, $A=(-1,1)$ and $b=0$. The selected contrast is $T=Y_1$, the orthogonal residual is $Z=(0,Y_2)$, and the truncation interval is $[Y_2,+\infty)$.

At the observed data $(Y_1,Y_2)=(1,0)$, with $\sigma=1$, the pivot for the null value $\vartheta=0$ and the two-sided selective p-value are
$$q_0=\frac{\Phi(1)-\Phi(0)}{1-\Phi(0)},\qquad p_0=2\min\{q_0,1-q_0\}.$$
The expression conditions out the fact that the first observation was selected because it was larger. For a fixed $\alpha\in[0,1]$, the corresponding central confidence set is $C_\eta(Y)=\{\vartheta\in\Theta_\eta:\alpha/2\le q_\vartheta(Y)\le1-\alpha/2\}$, where $\Theta_\eta=\{\eta^T\mu:P_\mu(S)>0\}$ as in [[cor-exact-polyhedral-selective-tests-and-confidence-sets]].

## Facts & Assumptions

**Given:** AC, independent standard-normal variables $W_1,W_2$, means $\mu_1,\mu_2\in\mathbb R$, known $\sigma>0$, the fixed selection event $Y_1\ge Y_2$, and the observed pair $(1,0)$ for the numerical illustration.

[A1] AC is assumed by the standard-normal and multivariate-normal laws, the polyhedral pivot definition, and the conditional-uniform theorem. [[def-axiom-of-choice]]

[F1] For $\eta=(1,0)^T$ and $A=(-1,1)$, the polyhedral interval is computed by the row-coefficient formulas in the definition. [[def-polyhedral-selection-event-and-contrast-interval]]

[F2] The candidate-contrast pivot is the standard-normal CDF difference divided by the truncation normalizer, with $s=\sigma\|\eta\|$ and $\Phi(+\infty)=1$. [[def-polyhedral-selective-normal-pivot]]

[F3] The pivot is Uniform$(0,1)$ conditionally on the fixed selection event and residual, whenever the selection probability is positive. [[thm-truncated-normal-selective-pivot-is-conditionally-uniform]]

[F4] The two-sided pivot p-value is valid under the point null, and $C_\eta(Y)=\{\vartheta\in\Theta_\eta:\alpha/2\le q_\vartheta(Y)\le1-\alpha/2\}$ has exact conditional coverage, where $\Theta_\eta=\{\eta^T\mu:P_\mu(S)>0\}$. [[cor-exact-polyhedral-selective-tests-and-confidence-sets]]

[F5] A scalar normal law with positive variance is the affine image of the standard normal law. [[def-standard-normal-and-normal-laws]]

[F6] The standard normal CDF is strictly increasing. [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

[F7] Independent random elements have their product joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F8] The isotropic multivariate normal law has the realization $Y=\mu+\sigma W$ with independent standard-normal coordinates. [[def-multivariate-normal-law]]

## Verification

1.1 The model is the isotropic Gaussian construction in [F8]; [F5] gives each scalar marginal as an affine image of a standard normal. For $\sigma>0$, [F6] gives $P_\mu(1<Y_1\le2)=\Phi((2-\mu_1)/\sigma)-\Phi((1-\mu_1)/\sigma)>0$ and $P_\mu(0<Y_2\le1)=\Phi((1-\mu_2)/\sigma)-\Phi((0-\mu_2)/\sigma)>0$. By [F7], the rectangle $(1,2]\times(0,1]$ has probability equal to the product of these positive probabilities; it lies in $S$, so $P_\mu(S)>0$. Here $c_\eta=(1,0)^T$. The single row has $r_1=(-1,1)c_\eta=-1$ and, at $z=(0,Y_2)$, $d_1(z)=-Y_2$. Thus $L(z)=d_1(z)/r_1=Y_2$, there are no upper constraints so $U(z)=+\infty$, and $G(z)$ is true. The event is exactly $Y_1\ge Y_2$, giving interval $[Y_2,+\infty)$. [A1, F1, F5, F6, F7, F8, algebra]

2.1 Since $T=Y_1$, $\theta=\mu_1$, and $s=\sigma$, the definition [F2] gives $q_{\vartheta}(Y_1,Y_2)=[\Phi((Y_1-\vartheta)/\sigma)-\Phi((Y_2-\vartheta)/\sigma)]/[1-\Phi((Y_2-\vartheta)/\sigma)]$. At $(Y_1,Y_2)=(1,0)$, $\sigma=1$, and $\vartheta=0$, this becomes the displayed $q_0$. [A1, F2, step 1.1, algebra]

3.1 Under the point null $\mu_1=0$, [F3] makes $q_0$ Uniform$(0,1)$ conditionally on selection, so [F4] gives the stated two-sided p-value and exact selective test. For general $\vartheta$, the set retaining $\alpha/2\le q_\vartheta\le1-\alpha/2$ has conditional coverage $1-\alpha$ by [F4]. No claim about a selected-family simultaneous guarantee is used. [A1, F3, F4, step 2.1] ∎