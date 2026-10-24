---
id: ex-wide-tanh-network-lazy-on-a-fixed-time-horizon
kind: example
title: A wide tanh network stays lazy on a fixed time horizon
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - def-neural-tangent-kernel
  - def-real-exponential-function-and-e
  - def-width-normalized-fully-connected-network
  - lem-fixed-time-lazy-training-stability
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-exponential-addition-formula
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-sequential-infinite-width-ntk-limit
  - thm-shared-parameter-backpropagation-gradient-formula
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Theorem 2 and Appendix A.2–A.3, printed pp. 5 and 12–16; fixed-time lazy dynamics under bounded integrated direction"
---

## Example

Assume AC. Fix $N,n_0\ge1$, a data set $x_1,\ldots,x_N\in\mathbb R^{n_0}$, a depth $L\ge2$, a bias scale $\beta>0$, and the scalar-output source-normalized network with independent standard-normal initialization under its product law. Let $\sigma(u)=\tanh u=(e^{2u}-1)/(e^{2u}+1)$. For each finite hidden-width tuple, take the unique gradient-flow path as a measurable function of the initialized parameters on $[0,1]$, satisfying

$$\dot\theta_p(t)=-\frac1N\sum_{i=1}^N\partial_{\theta_p}f_{\theta(t)}(x_i),\qquad 0\le t\le1,$$

so the empirical training direction is $d_i(t)=1$ for every datum and time. The finite-width path exists on every finite interval, and its integrated empirical direction norm on $[0,1]$ equals $1$. Consequently, as the hidden widths tend to infinity sequentially, the finite-data neural tangent kernel remains uniformly close in probability on $[0,1]$ to the deterministic recursive limiting kernel $K_\infty$ for this network and data set.

## Example references

[Jacot, Gabriel, and Hongler, Theorem 2 and Appendix A.2–A.3, fixed-time lazy training](https://arxiv.org/pdf/1806.07572)

[[thm-sequential-infinite-width-ntk-limit|Sequential initialization limit and finite-time stability under bounded integrated direction]]

[[def-width-normalized-fully-connected-network|The source-normalized finite network and Gaussian initialization]]

## Facts & Assumptions

**Given:** $\sigma(u)=\tanh u$, a fixed finite data set and finite depth, the positive bias scale, the source-normalized scalar-output network, and the constant training direction.

[F1] The exponential is positive, satisfies the addition formula, and has derivative equal to itself; sums, products, quotients with nonzero denominator, and compositions obey the derivative rules ([[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-addition-formula]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F2] The mean value theorem bounds increments of a differentiable function by a uniform derivative bound ([[cor-mean-value-theorem]]).

[F3] A locally Lipschitz finite-dimensional vector field has a unique local solution ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F4] The parameter-gradient formulas follow from reverse accumulation over shared parameters ([[thm-shared-parameter-backpropagation-gradient-formula]]); the finite-data NTK stays uniformly close in probability to its deterministic limit on any fixed interval under the hypotheses in the stability lemma and sequential-width theorem ([[lem-fixed-time-lazy-training-stability]], [[thm-sequential-infinite-width-ntk-limit]], [[def-neural-tangent-kernel]], [[def-width-normalized-fully-connected-network]]).

## Verification
**Proof technique:** verify the activation and direction hypotheses, then apply the sequential-width theorem.

1.1 Put $a=e^{2u}>0$. Then $|a-1|<a+1$, so $|\sigma(u)|<1$. The derivative rules in [F1] give $\sigma'(u)=4e^{2u}/(e^{2u}+1)^2=1-\sigma(u)^2$ and $\sigma''(u)=-2\sigma(u)\sigma'(u)$. Thus $|\sigma'|\le1$ and $|\sigma''|\le2$. By [F2], $|\sigma(u)-\sigma(v)|\le|u-v|$, so $\sigma$ is globally Lipschitz. Since $\sigma'(u)>0$, it is nonconstant; a polynomial of degree $m\ge1$ with leading coefficient $a_m\ne0$ satisfies $p(u)/u^m\to a_m$ as $u\to+\infty$, so its absolute value is unbounded. The bounded nonconstant $\sigma$ is therefore nonpolynomial. [F1, F2, given, algebra]

2.1 For each finite network, the parameter vector field for the constant direction is smooth and locally Lipschitz, so a local solution exists by [F3]. The output-layer weights and bias have bounded speed because all hidden activations are bounded by $1$, so they remain bounded on every compact time interval. Suppose the parameters in layers $k+1,\ldots,L-1$ are bounded on such an interval. Backpropagating through those layers multiplies the direction by their finite weight matrices and factors $\sigma'$ of modulus at most $1$, so each coordinate of the backpropagated direction at layer $k+1$ is bounded. The gradient formulas in [F4], together with $|\sigma|\le1$, then bound every derivative in layer $k$; integration bounds its weights and biases. Descending induction bounds all parameters on every compact interval. If the maximal local solution had a finite endpoint, the smooth vector field would be bounded on a compact ball containing the trajectory, so the trajectory would be Lipschitz in time and have a limit as the endpoint is approached. Applying [F3] at that limit extends the solution, a contradiction. Hence the path exists on $[0,1]$. On any compact tube around a finite solution segment the vector field is Lipschitz; subtracting the integral equations for two solutions gives $u(t)\le u(0)+M\int_0^tu(s)\,ds$ on the tube for a Lipschitz constant $M$; iterating this inequality gives $u(t)\le e^{Mt}u(0)$, proving local continuous dependence on the initial parameters. A finite cover of $[0,1]$ patches these local flow maps. Thus the global path is measurable as a function of initialization and time. For this direction, $\|d(t)\|_N=1$ at every time, so its integral is $1$. [F3, F4, given, step 1.1, algebra]

3.1 Step 1.1 supplies the globally Lipschitz $C^2$ activation and bounded second derivative, and step 2.1 supplies a finite-width solution and the required direction bound. Applying [F4] with $T=1$ gives $\sup_{t\in[0,1]}\|K_t-K_\infty\|_{op}\to0$ in probability under the stated sequential hidden-width limit. [F4, step 1.1, step 2.1] ∎
