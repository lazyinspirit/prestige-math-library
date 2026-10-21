---
id: prop-ip-finite-unrolling-does-not-imply-regularization-convergence
kind: proposition
title: Finite unrolling alone gives no regularization convergence or risk guarantee
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-differentiate-finite-fixed-point-iteration
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-learned-reconstruction-estimator
  - def-ip-unrolled-regularization-architecture
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-forward-mode-computes-directional-derivative
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all recurrences, finite laws, and scalar witnesses are explicit."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vishal Monga, Yuelong Li, and Yonina C. Eldar, Algorithm Unrolling: Interpretable, Efficient Deep Learning for Signal and Image Processing"
      url: "https://arxiv.org/pdf/1912.10557"
      locator: "Full 27-page paper, §II-C 'Algorithm Unrolling in General' and §IV-E's 'Convergence and Optimality Analysis of LISTA' subsection: finite cascades and convergence only under additional structural hypotheses."
    - title: "Karol Gregor and Yann LeCun, Learning Fast Approximations of Sparse Coding"
      url: "https://icml.cc/2010/papers/449.pdf"
      locator: "Full 8-page paper, §2.1, the opening of §3, §3.3, and Algorithms 3–4: fixed-depth learned map, squared training loss, and the caveat about extending it beyond its trained depth."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, §§7.1–7.2, printed pp. 65–67 / PDF pp. 69–71: exact-data Landweber convergence and early stopping under separate hypotheses."
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences"
      url: "https://arxiv.org/pdf/2503.11043v2"
      locator: "Full versioned 29-page ICLR 2025 paper, §§4.1 and 4.3–5: dataset-scoped out-of-distribution prior-mismatch experiments; empirical context only."
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems"
      url: "https://arxiv.org/pdf/2410.00083v1"
      locator: "Full versioned 38-page survey, §3.3 opening and Conclusion: finite-computation limitations and method-specific asymptotic exactness; context only."
---

## Statement

Let $N\ge1$ and let $\Phi_{\theta,N}$ be the point-valued map obtained by an initialization followed by $N$ defined, fixed-parameter update maps on an admissible input $(A,y)$. This finite definition does not imply that the iterates of an underlying infinite recurrence converge: even the repeated scalar update $T(x)=2x$ is defined at every finite depth from $x_0=1$, while $T^k(x_0)=2^k$ diverges.

For the risk comparison, fix a nonempty Borel input space $E\subseteq\mathcal D_{\theta,N}$ for every parameter $\theta$ under consideration, and restrict each deployed map to $E$. For squared reconstruction loss $\ell(t,a)=\|a-t\|_2^2$ on the signal space, let $\mathcal S=\{(A_i,y_i,x_i^\dagger)\}_{i=1}^s$ be a nonempty finite training set with $(A_i,y_i)\in E$ and $x_i^\dagger\in X$, $s\ge1$, and let $P_{\mathcal S}=s^{-1}\sum_{i=1}^s\delta_{((A_i,y_i),x_i^\dagger)}$ be its empirical joint law. The training-law risk is $L_{\mathcal S}(\theta)=R_{P_{\mathcal S}}(\Phi_{\theta,N})$, where $R_P(g)$ is the expected loss of the Borel point rule $g$ under the joint input-target law $P$. At a shifted input $(A,y)\in E$, the forward residual is $\|A\Phi_{\theta,N}(A,y)-y\|_2$, and for a test probability law $Q$ on $E\times X$ the test risk is $R_Q(\theta)=R_Q(\Phi_{\theta,N})$ when this expectation is defined. No bound on either quantity follows from a bound on $L_{\mathcal S}$ alone: for every $M>0$ there is a one-sample scalar training law with zero training-law risk and a shifted scalar operator with forward residual and squared test risk both greater than $M$.

For a recurrence $z_{k+1}=G(z_k,\theta)$, a fixed point at parameter $\theta$ is a state $z_*(\theta)$ satisfying $G(z_*(\theta),\theta)=z_*(\theta)$. If the initialization and update maps are continuously differentiable in their state and trainable-parameter variables on open neighborhoods of their visited inputs, automatic differentiation through the deployed graph computes the derivative of that finite map. For a piecewise-$C^1$ primitive, assume each visited input lies strictly inside one declared branch, with its branch label fixed on an open neighborhood; at a branch boundary or ambiguous branch selection no derivative is asserted by the automatic-differentiation procedure. The derivative is that of the finite map and is not replaced by the derivative of a limiting fixed point. In particular, for $G(z,\theta)=qz+(1-q)\theta$ with $0<q<1$, $z_0(\theta)=0$, and $\theta_0=0$, each finite iterate has zero fixed-point residual while its parameter derivative differs from the exact fixed-point derivative.

## Statement references

[Monga, Li, and Eldar, full unrolling survey and conditional LISTA convergence results](https://arxiv.org/abs/1912.10557)

[Gregor and LeCun, fixed-depth LISTA and its training loss](https://icml.cc/2010/papers/449.pdf)

[Clason, exact Landweber convergence and early stopping hypotheses](https://arxiv.org/abs/2001.00617)

[Zheng et al., dataset-scoped out-of-distribution experiments](https://arxiv.org/abs/2503.11043v2)

[Daras et al., finite-computation and method-specific asymptotic limits](https://arxiv.org/abs/2410.00083v1)

[[def-ip-unrolled-regularization-architecture|The finite unrolled map and layer convention.]]

[[def-ip-learned-reconstruction-estimator|Borel point-estimator and finite learned-update interface.]]

[[def-ip-inverse-risk-under-train-and-test-laws|Expected loss under joint train and test laws.]]

[[alg-differentiate-finite-fixed-point-iteration|The finite-iteration automatic-differentiation procedure.]]

## Facts & Assumptions

**Given:** A depth-$N$ architecture with all $N$ updates defined at the selected input; for the derivative clause, a continuously differentiable initialization and recurrence in state and parameter variables on open neighborhoods and a finite number $K$ of defined iterates, with each piecewise-$C^1$ primitive evaluated strictly inside one declared branch whose label is fixed on an open neighborhood of every visited input; for the risk clause, a common nonempty Borel input space $E\subseteq\mathcal D_{\theta,N}$ for every compared parameter, training inputs in $E$ with signal targets in $X$, shifted inputs in $E$, and test laws on $E\times X$.

[F1] [[def-ip-unrolled-regularization-architecture]]: the deployed map is the finite composition of its initialization and the listed update maps.

[F2] [[alg-differentiate-finite-fixed-point-iteration]]: the procedure differentiates the specified finite $K$-step map and does not substitute the derivative of an exact fixed point.

[F3] [[def-ip-learned-reconstruction-estimator]]: a finite unrolled learned update has a Borel initialization, Borel layer maps, and point-valued output; a point reconstruction rule is Borel.

[F4] [[def-ip-inverse-risk-under-train-and-test-laws]]: a point rule's risk under a joint input-target law is the extended nonnegative loss integral, and distinct train and test laws impose no inequality between risks.

[F5] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map between topological spaces has Borel preimages of Borel sets.

[F6] [[thm-forward-mode-computes-directional-derivative]]: forward mode returns the directional derivative of the finite scalar-output graph on a fixed strict branch.

## Proof

1.1 Fix an admissible $(A,y)$. By the definition of the update maps, $x_1=U_{\theta_0}^{A,y}(I_\theta(A,y))$. If $x_k=U_{\theta_{k-1}}^{A,y}\circ\cdots\circ U_{\theta_0}^{A,y}(I_\theta(A,y))$, then applying the next defined update gives $x_{k+1}=U_{\theta_k}^{A,y}\circ U_{\theta_{k-1}}^{A,y}\circ\cdots\circ U_{\theta_0}^{A,y}(I_\theta(A,y))$. Induction through $k=N-1$ yields the stated finite composition. Its Borel point-rule convention is the interface in [F3]. [F1, F3, given, algebra]

1.2 For the repeated scalar update $T(x)=2x$, induction gives $T^0(1)=1$ and $T^{k+1}(1)=2T^k(1)=2^{k+1}$ whenever $T^k(1)=2^k$. Thus every finite prefix is defined, but $T^k(1)=2^k\to+\infty$ as $k\to\infty$. Finite evaluability alone therefore does not imply convergence of an infinite continuation. [given, construct, algebra]

1.3 Under the differentiability and strict-branch assumptions in the Given clause, [F2] forms, for each output coordinate, the finite graph of the $K$-step recurrence and calls forward mode in each parameter-coordinate direction. By [F6], every returned tangent is the corresponding directional derivative of that finite scalar-output graph. Assembling these entries gives the Jacobian of the finite recurrence, not the derivative of a limiting fixed point. [F2, F6, given]

1.4 To check the zero-residual boundary, fix $q\in(0,1)$ and set $G(z,\theta)=qz+(1-q)\theta$, $\theta_0=0$, and $z_0(\theta)=0$. At $\theta_0$, the recurrence gives $z_k=0$ for every finite $k$, so the fixed-point residual $z_k-G(z_k,\theta_0)$ is zero. The exact fixed point satisfies $z_*(\theta)=\theta$, and therefore $\frac{d z_*}{d\theta}(0)=1$. [given, algebra]

1.5 Use the scalar architecture with declared domain containing $(A,y)=(1,1)$ and every $(t,t)$ for $t>1$, zero initialization, identity update block, and one layer parameter $\tau_0=\theta$. Choose the deployed parameter $\theta=1$. Its one-layer formula is $\Phi_{1,1}(a,y)=ay$, so $\Phi_{1,1}(1,1)=1$. [F1, given, construct, algebra]

2.1 The map $(a,y)\mapsto ay$ is continuous and hence Borel by [F5], so it is a point reconstruction rule by [F3]. On the singleton training law $P_{\mathcal S}=\delta_{((1,1),1)}$, [F4] gives $L_{\mathcal S}(1)=R_{P_{\mathcal S}}(\Phi_{1,1})=|1-1|^2=0$. [F3, F4, F5, given, step 1.5, algebra]

2.2 Differentiating the finite recurrence gives $e_0=0$ and $e_{k+1}=q e_k+(1-q)$. Induction yields $e_K=1-q^K$ for each $K\ge1$. Since $0<q^K<1$, $e_K\ne1$ although the finite residual in step 1.4 is zero. Thus even contraction and zero finite residual do not identify the finite-map derivative with the fixed-point derivative. [step 1.4, algebra]

3.1 For any shifted scalar operator $A=t>1$ with $y=t$ and $x^\dagger=1$, the same learned parameter gives $\Phi_{1,1}(t,t)=t^2$. Its forward residual is $|t\Phi_{1,1}(t,t)-t|=t(t^2-1)$, and [F4] gives squared risk $(t^2-1)^2$ under the test law $Q_t=\delta_{((t,t),1)}$. Both tend to $+\infty$ as $t\to+\infty$, while the training-law risk from step 2.1 remains zero. Given any $M>0$, choosing $t$ sufficiently large makes both quantities exceed $M$, proving the claimed absence of a uniform residual or test-risk bound from training risk alone. [F4, step 1.5, step 2.1, algebra] ∎
