---
id: thm-wgan-ideal-critic-generator-gradient
kind: theorem
title: "Continuity and ideal-critic gradients for compact-space Wasserstein GAN objectives"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-integral-probability-metric
  - def-compact-metric-wasserstein-one
  - thm-kantorovich-rubinstein-duality-on-compact-metric-spaces
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-dominated-convergence
  - lem-rat-embeds-dense
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
justified_by: []
axiom_use: "No choice principle is used for the dual identification, continuity, local-Lipschitz branch, or conditional ideal-critic gradient formula."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §§2–3, Theorems 1 and 3, Assumption 1, Appendix C, physical PDF pp. 3–7, 20–21 and 24–25"
      url: "https://arxiv.org/pdf/1701.07875"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 3–7"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Let $(X,d)$ be a nonempty compact metric space, fix $x_0\in X$, and let $D<\infty$ satisfy $d(x,y)\le D$ for all $x,y\in X$. Let $\mu$ be a Borel probability measure on $X$, let $(Z,\Sigma,\rho)$ be a probability space, and let $\Theta\subseteq\mathbb R^p$ be open with $p\ge1$. For every $\theta\in\Theta$, let $G_\theta:Z\to X$ be measurable and define its law by $P_\theta(B)=\rho(G_\theta^{-1}(B))$ for Borel $B\subseteq X$. Assume $z\mapsto d(G_\theta(z),G_{\theta'}(z))$ is $\rho$-measurable for every $\theta,\theta'\in\Theta$, and that there is a measurable set $Z_0\subseteq Z$ with $\rho(Z_0)=1$ on which $\theta\mapsto G_\theta(z)$ is continuous. Let $\mathcal F_1(X,x_0)$ be the class of bounded Borel functions $f:X\to\mathbb R$ satisfying $f(x_0)=0$ and $|f(x)-f(y)|\le d(x,y)$ for all $x,y\in X$, and set $V(\theta)=d_{\mathcal F_1(X,x_0)}(\mu,P_\theta)$. Then $V(\theta)=W_1^X(\mu,P_\theta)$ and $V$ is continuous on $\Theta$.

Suppose in addition that for every $\theta_0\in\Theta$ there are an open neighborhood $U\subseteq\Theta$ of $\theta_0$, a measurable $K_{\theta_0}:Z\to[0,+\infty)$ with $\int K_{\theta_0}\,d\rho<\infty$, and a measurable full-measure set $Z_{\theta_0}\subseteq Z$ such that, for every $z\in Z_{\theta_0}$ and every $\theta,\theta'\in U$,
$$
d(G_\theta(z),G_{\theta'}(z))\le K_{\theta_0}(z)\|\theta-\theta'\|.
$$
Then $V$ is locally Lipschitz, with $|V(\theta)-V(\theta')|\le\|\theta-\theta'\|\int K_{\theta_0}\,d\rho$ for $\theta,\theta'\in U$. At any such $\theta_0$ where $V$ is Fréchet differentiable, if the signed dual supremum at $\theta_0$ is attained by $f_{\theta_0}\in\mathcal F_1(X,x_0)$ and $H_{\theta_0}(\theta,z)=f_{\theta_0}(G_\theta(z))$ is Fréchet differentiable in $\theta$ at $\theta_0$ for $\rho$-almost every $z$ with measurable derivative, then
$$
\nabla V(\theta_0)=-\int_Z\nabla_\theta H_{\theta_0}(\theta_0,z)\,d\rho(z).
$$
Here Fréchet differentiability of a scalar function $F$ at $\theta_0$ means there is a linear map $A$ such that $F(\theta_0+h)=F(\theta_0)+A[h]+o(\|h\|)$ as $h\to0$. The attainment and composite-differentiability assumptions are pointwise hypotheses for the gradient formula; compact dual attainment is not asserted.

## Statement references

[[def-integral-probability-metric|Integral probability metric]]

[[def-compact-metric-wasserstein-one]]: Compact-space coupling definition of $W_1$

[[thm-kantorovich-rubinstein-duality-on-compact-metric-spaces|Compact-metric Kantorovich–Rubinstein duality]]

[[def-probability-measure|Probability measure]]

[[def-random-element-and-real-random-variable|Measurable random element]]

[[def-law-or-distribution-of-a-random-element|Law of a random element]]

[[def-integrable-real-and-complex-functions-and-their-integrals|Integrable real-valued function]]

[[thm-dominated-convergence|Dominated convergence]]

## Facts & Assumptions

**Given:** The compact metric data space and finite bound $D$, base point $x_0$, Borel probability $\mu$, probability space $(Z,\Sigma,\rho)$, open finite-dimensional parameter set $\Theta$, measurable random elements $G_\theta$, their laws $P_\theta$, the pointwise continuity and distance-measurability hypotheses, and the additional common-neighborhood integrable envelope wherever the local-Lipschitz and gradient conclusions are used.

[F1] For a nonempty class of real-valued functions integrable under both laws, the IPM is the supremum of the absolute differences of their integrals. [[def-integral-probability-metric]]

[F2] For Borel probabilities on a nonempty compact metric space, the coupling cost $W_1^X$ equals the signed supremum over normalized $1$-Lipschitz functions; the supplier proof establishes that these tests are bounded Borel and that no compact primal or dual attainment is asserted. [[thm-kantorovich-rubinstein-duality-on-compact-metric-spaces]]

[F3] The compact-space $W_1^X$ convention is the infimum of Borel coupling costs over couplings with the stated marginals. [[def-compact-metric-wasserstein-one]]

[F4] A random element is a measurable map from a probability space into a measurable target space. [[def-random-element-and-real-random-variable]]

[F5] The law of a random element $G$ is $P_G(B)=\rho(G^{-1}(B))$ for each measurable target set $B$. [[def-law-or-distribution-of-a-random-element]]

[F6] The law of a random element is a probability measure. [[lem-law-of-a-random-element-is-a-probability-measure]]

[F7] A nonnegative simple measurable function has a finite representation by nonnegative coefficients on pairwise disjoint measurable sets, and its simple integral is the corresponding finite weighted sum. [[def-nonnegative-simple-measurable-function]] [[def-integral-of-a-nonnegative-simple-function]]

[F8] The nonnegative Lebesgue integral agrees with that simple integral on nonnegative simple functions. [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F9] A nonnegative measurable function is the pointwise increasing limit of nonnegative simple functions. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]

[F10] If measurable functions converge almost everywhere and are dominated by one integrable nonnegative function, their integrals converge. [[thm-dominated-convergence]]

[F11] For a bounded real measurable function, its signed Lebesgue integral is the difference of the integrals of its positive and negative parts. [[def-integrable-real-and-complex-functions-and-their-integrals]]

[F12] The rationals are dense in the reals. Enumerate rational $p$-tuples explicitly by integer numerators and positive denominators of increasing bounded height; coordinatewise rational approximation makes these tuples dense in $\mathbb R^p$. No selection of a sequence from arbitrary nonempty sets is involved. [[lem-rat-embeds-dense]]

[F13] The supremum of a sequence of measurable real or extended-real functions is measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

## Proof

**Given:** The hypotheses in the Statement and the additional envelope and pointwise attainment/composite-differentiability hypotheses for the gradient branch.

1.1 By [F4] and [F6], every $P_\theta$ is a probability measure. By [F5], $P_\theta(A)=\rho(G_\theta^{-1}(A))$ for every Borel $A\subseteq X$. If $s=\sum_{j=1}^m c_j\mathbf 1_{A_j}$ is nonnegative simple with disjoint Borel sets, [F7]–[F8] give $\int s\,dP_\theta=\sum_j c_jP_\theta(A_j)=\sum_jc_j\rho(G_\theta^{-1}(A_j))=\int s\circ G_\theta\,d\rho$. For any bounded Borel real $f$, apply [F9] to $f^+$ and $f^-$; their increasing simple approximants are bounded by $\|f\|_\infty$, whose integral is finite under both probability measures. Applying [F10] to the approximants and their compositions gives equality of the positive-part integrals and of the negative-part integrals; [F11] then yields $\int f\,dP_\theta=\int f(G_\theta(z))\,d\rho(z)$. [given, F4, F5, F6, F7, F8, F9, F10, F11]

1.2 The zero function belongs to $\mathcal F_1(X,x_0)$, so this class is nonempty; it is also symmetric under $f\mapsto-f$, so its supremum of absolute integral differences equals its signed supremum. It is exactly the bounded Borel version of the compact KR test class in [F2]. Hence $V(\theta)=W_1^X(\mu,P_\theta)$ for every $\theta$, with the coupling-cost convention in [F3]. [given, F1, F2, F3, algebra]

1.3 Fix $\theta_0$ and its attaining critic, and choose $r>0$ such that the ball $B(\theta_0,r)$ lies in the envelope neighborhood. Let $E$ be the intersection of its measurable full-measure set with a measurable full-measure set where the composite is Fréchet differentiable. Extend the measurable derivative by zero off $E$. On $E$ its norm is at most $K_{\theta_0}$, by the envelope and the critic's $1$-Lipschitz inequality, so all coordinates are integrable. Write $R(h,z)=H_{\theta_0}(\theta_0+h,z)-H_{\theta_0}(\theta_0,z)-D_\theta H_{\theta_0}(\theta_0,z)[h]$. For $j\ge1$ put $s_j=\min\{r/2,1/j\}$ and let $Q_j(z)$ be zero off $E$ and otherwise the supremum of $|R(q,z)|/\|q\|$ over rational $p$-tuples with $0<\|q\|<s_j$, including zero among the values. The explicit enumeration and [F13] give measurability; the envelope gives $0\le Q_j\le2K_{\theta_0}$, and pointwise Fréchet differentiability gives $Q_j\to0$ on $E$. By [F10], $\int Q_j\,d\rho\to0$. On $E$ the remainder ratio is continuous in nonzero $h$ by the envelope, so rational density [F12] bounds it by $Q_j$ for every real $0<\|h\|<s_j$. Therefore $|\int R(h,z)\,d\rho|/\|h\|\le\int Q_j\,d\rho$ for all such $h$, proving the full Fréchet limit without a sequential-criterion choice step. Thus $\Phi(\theta)=\int f_{\theta_0}\,d\mu-\int H_{\theta_0}(\theta,z)\,d\rho(z)$ has derivative $-\int D_\theta H_{\theta_0}(\theta_0,z)\,d\rho(z)$. [given, F10, F12, F13, algebra]

2.1 Fix $\theta_0$ and a ball $B(\theta_0,r)\subseteq\Theta$. Put $s_j=\min\{r/2,1/j\}$. On $Z_0$, let $S_j(z)$ be the supremum of $d(G_{\theta_0+q}(z),G_{\theta_0}(z))$ over rational $p$-tuples with $\|q\|<s_j$, and set it to zero off $Z_0$. It is measurable by the assumed distance measurability, [F12] and [F13], is bounded by $D$, and tends pointwise to zero by parameter continuity. Thus [F10] gives $\int S_j\,d\rho\to0$. Parameter continuity and rational density make $S_j$ dominate the same distance for all real increments $\|h\|<s_j$ on $Z_0$. For every critic $f$, step 1.1 and its $1$-Lipschitz property give $|\Delta_{\theta_0+h}(f)-\Delta_{\theta_0}(f)|\le\int S_j\,d\rho$, where $\Delta_\theta(f)=\int f\,d\mu-\int f\,dP_\theta$. The same bound holds for the difference of their absolute values and hence of the two suprema. It follows that $|V(\theta_0+h)-V(\theta_0)|\le\int S_j\,d\rho$ for all $\|h\|<s_j$, proving continuity. [given, step 1.1, step 1.2, F10, F12, F13, algebra]

2.2 Under the common-neighborhood envelope, the same estimate gives $|\Delta_\theta(f)-\Delta_{\theta'}(f)|\le\|\theta-\theta'\|\int K_{\theta_0}\,d\rho$ for every $f\in\mathcal F_1(X,x_0)$ and $\theta,\theta'\in U$. Taking absolute values and then suprema proves the stated local-Lipschitz bound for $V$. [given, step 1.1, step 1.2, algebra]

3.1 By optimality, $\Phi(\theta_0)=V(\theta_0)$ and $\Phi(\theta)\le V(\theta)$ for every $\theta$. Thus $V-\Phi$ has a local minimum of $0$ at $\theta_0$. Along every direction $v$, differentiability and the two one-sided difference quotients at this minimum give $D(V-\Phi)(\theta_0)[v]=0$; since this holds for every $v$, the derivative of the difference is zero, giving the claimed gradient formula. [given, step 1.3, algebra] ∎
## Remarks

The local-Lipschitz conclusion uses a single integrable envelope valid on one parameter neighborhood for almost every latent input. Arjovsky et al.'s Assumption 1 gives only pointwise local constants; Appendix C does not justify replacing the latent-dependent neighborhoods by a common parameter neighborhood. The two explicit false statements and witnesses on the examples companion separately refute that local-Lipschitz inference and the asserted gradient exchange under the original condition, including a density-latent witness where both derivatives exist. They do not refute the corrected common-envelope theorem or by themselves settle the source's bare almost-everywhere assertion. The present Statement's continuity, full local-Lipschitz bound and conditional optimal-critic Fréchet formula are preserved. No claim is made for approximate critics, arbitrary $P_1$ spaces, compact dual attainment, or convergence of saddle-point optimization. The additional source diagnosis and rational-supremum proof refinement are owner-delegated local work; original native proof and external source-reading history remain separately attributed.
