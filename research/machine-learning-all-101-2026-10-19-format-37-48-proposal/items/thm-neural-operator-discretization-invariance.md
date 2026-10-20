---
dependency_level: 3
id: thm-neural-operator-discretization-invariance
kind: theorem
title: "Neural-operator quadratures in the uniform norm and compatible Banach norms"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-discretization-invariant-operator-family
  - def-neural-operator
  - alg-neural-operator-mesh-discretization
  - lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kovachki et al., Neural Operator, Theorem 8 and Appendix E"
      url: "https://arxiv.org/pdf/2108.08481"
---

## Statement

Let a finite neural operator have bounded domains, continuous kernels and biases, continuous pointwise activations, and continuous pointwise lifting and projection networks. For every integral use finite measurable partitions whose cells have tags, volume weights, and maximal diameter tending to zero. Its compatible quadratures converge in the output supremum norm uniformly on every compact input set in $C(\bar D)$, and hence on compact subsets of any Banach input space continuously included in $C(\bar D)$. Intermediate values in these realizations are evaluated by their defining functions at all required tags and output queries; changing meshes does not change the continuum parameters.

More generally, the same conclusion holds in the output Banach norm for the following compatible-space architecture. At each stage choose a Banach function space $X_t$ continuously included in $C(\bar D_t;\mathbb R^{q_t})$. For an integral layer from $X_t$ to an auxiliary Banach function space $Y_t$ of $\mathbb R^{q_{t+1}}$-valued functions on $\bar D_{t+1}$, require a continuous inclusion $Y_t\hookrightarrow C(\bar D_{t+1};\mathbb R^{q_{t+1}})$ and require that $y\mapsto\kappa_t(\cdot,y)$ be continuous from $\bar D_t$ into the space of linear maps $\mathbb R^{q_t}\to Y_t$, in operator norm. Every local linear term is a bounded map $X_t\to Y_t$, its bias belongs to $Y_t$, and its following activation is a continuous map $Y_t\to X_{t+1}$. Any separate lifting and projection maps are continuous between their specified Banach spaces. The same maps are used in the discrete and continuum constructions. No arbitrary output Banach norm follows from its continuous inclusion into the supremum norm alone.

## Statement references

[Kovachki et al., Theorem 8 and Appendix E](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** A finite composition and compatible tagged, volume-weighted partitions as in the Statement; all compact input sets use their specified norm topology.

[F1] The neural-operator layer and compatible quadrature conventions are [[def-neural-operator]] and [[alg-neural-operator-mesh-discretization]].

[F2] The scalar kernel quadrature estimate in the supremum norm is proved in [[lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs]]. The direct modulus argument below also handles bounded measurable domains without an extra Jordan-boundary assumption.

## Proof

1.1 Write $I(v)=\int_D\kappa(\cdot,y)v(y)\,dy$ for one compatible Banach layer, and let $C$ be a compact subset of its input space $X$. Its image in $C(\bar D)$ is compact: pulling an open cover back through the continuous inclusion and using compactness proves this directly. Thus $R=\sup_{v\in C}\|v\|_\infty<\infty$. This family has a common modulus of continuity tending to zero. Indeed a finite $\eta$-net in the supremum norm and uniform continuity of its finitely many functions give $|v(y)-v(z)|\le2\eta+\max_j|v_j(y)-v_j(z)|$ for every $v\in C$. Uniform continuity of the finitely many functions follows by the compact-domain subsequence contradiction. Let $B=\sup_y\|\kappa(\cdot,y)\|_{\mathcal L(\mathbb R^q,Y)}$ and let $\omega_\kappa$ be its norm modulus. Compactness similarly proves $B<\infty$ and $\omega_\kappa(h)\to0$. Therefore the $Y$-valued integrands $\Phi_v(y)=\kappa(\cdot,y)v(y)$ have common modulus bounded by $R\omega_\kappa(h)+B\omega_C(h)$. [given, F1, construct, algebra]

2.1 A continuous $Y$-valued function $\Phi$ on $\bar D$ has an integral in $Y$: volume-weighted step sums on partitions of diameter $h$ form a Cauchy family, since comparing two sums on their common refinement bounds their difference by $|D|\omega_\Phi(h+h')$. Completeness of $Y$ gives a limit, independent of tags and partitions. Each coordinate of point evaluation on $Y$ is bounded by its specified continuous inclusion into $C(\bar D';\mathbb R^{q_{t+1}})$; explicitly, $|u_j(x)|\le c_Y\|u\|_Y$. Applying these bounded functionals to the convergent sums therefore identifies the limit with the pointwise integral in every coordinate. Comparing a fixed tagged sum to refinements and taking the limit gives $\|Q_n(v)-I(v)\|_Y\le |D|[R\omega_\kappa(h_n)+B\omega_C(h_n)]$ uniformly for $v\in C$. Also $\|Q_n(v)-Q_n(w)\|_Y\le |D|B\|v-w\|_\infty\le |D|Bc_X\|v-w\|_X$, where $c_X$ is the embedding bound. These estimates use only measurable disjoint cells, their volumes summing to $|D|$, and their diameter bound. [step 1.1, construct, algebra]

3.1 Suppose inductively that the discrete inputs $v_n(a)$ converge in $X$ to the continuum inputs $v(a)$ uniformly for $a$ in the original compact set $K$. The continuum map is continuous by the bound for $I$ from step 2.1 and continuity of all other maps, so $C=v(K)$ is compact. Comparing preactivations at $v_n(a)$ and $v(a)$, the quadrature Lipschitz bound and the bounded local-map norm give an upper bound $(|D|Bc_X+\|W\|)\|v_n(a)-v(a)\|_X+\|Q_n(v(a))-I(v(a))\|_Y$, which tends to zero uniformly in $a$. The continuum preactivations form a compact set $P\subset Y$. A continuous map $T:Y\to X'$ takes perturbations tending uniformly to zero around $P$ to uniformly vanishing output errors: for a prescribed $\varepsilon$, cover $P$ by finitely many balls $B(p_i,r_i)$ on each of which $\|T(z)-T(p_i)\|<\varepsilon/2$ for $\|z-p_i\|<3r_i$, and use a positive perturbation bound smaller than $\min_i r_i$. If $p\in B(p_i,r_i)$ and $\|z-p\|<\min_i r_i$, both images are within $\varepsilon/2$ of $T(p_i)$. Apply this to the activation. The same argument treats continuous lifting or projection maps. Starting with the identical input and proceeding through the finitely many stages proves uniform convergence in the final Banach norm. [step 2.1, given, construct, algebra]

4.1 For the supremum-norm architecture take every relevant $X$ and $Y$ to be the continuous-function space with its supremum norm. Joint continuity of $\kappa(x,y)$ on the compact product implies continuity of $y\mapsto\kappa(\cdot,y)$ in that norm, by its uniform modulus on the product. Finite matrix local terms are bounded in that norm. For any fixed continuous scalar activation, its induced map on continuous functions is continuous in the supremum norm: near a function of norm $R$, all scalar arguments lie in $[-R-1,R+1]$, where the activation is uniformly continuous. Pointwise finite networks are finite compositions of these continuous maps. Thus all conditions in steps 1.1–2.1 hold, proving the first clause and then its continuously embedded input-space version. [step 1.1, step 2.1, step 3.1, F1, F2, algebra] ∎

## Remark

For example, kernels continuous in the output $C^r$ norm and norm-continuous local and nonlinear maps give convergence in $C^r$. The preceding arbitrary Banach formulation is useful beyond such examples. The stronger original assertion is retained verbatim in the proposal's archived preimage and is explicitly refuted by the separate one-neuron $C^1$ counterexample; neither an open-problem label nor an unqualified norm upgrade is warranted.
