---
id: thm-contrastive-divergence-k-gradient-omits-chain-derivative
kind: theorem
title: The finite-state CD-k gradient includes the chain-distribution derivative
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-energy-based-density-and-partition-function, alg-contrastive-divergence-k, def-finite-probability-vector, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral, def-measure, def-probability-measure, def-conditional-expectation-given-a-sigma-algebra, cor-exponential-reciprocal-and-positivity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines, Version 1, Section 2"
      url: "https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24, Section 24.2.2"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Statement

Let $r$ be a positive integer, let $\mathcal X$ be finite and nonempty, and
let $\Theta\subseteq\mathbb R^r$ be open. For each $x,y\in\mathcal X$, assume
the coordinate partial derivatives of $E_\theta(x)$ and $K_\theta(x,y)$ exist
and are continuous on $\Theta$. Let $K_\theta$ be strictly positive and
row-stochastic, so $K_\theta(x,y)>0$ and $\sum_yK_\theta(x,y)=1$. Use counting
measure as the reference measure, set
$$Z_\theta:=\sum_{x\in\mathcal X}e^{-E_\theta(x)},\qquad p_\theta(x):=e^{-E_\theta(x)}/Z_\theta,$$
let $q_0$ be a fixed probability vector on $\mathcal X$, assume $p_\theta$ is
invariant for $K_\theta$, and fix an integer $k\ge1$. Define
$K_\theta^0=I$, $K_\theta^{s+1}=K_\theta^sK_\theta$, and
$q_{k,\theta}=q_0K_\theta^k$, where vectors are row vectors, and
$$\mathcal L(\theta):=-\sum_xq_0(x)\log p_\theta(x),\qquad \operatorname{CD}_k(\theta):=D_{\rm KL}(q_0\|p_\theta)-D_{\rm KL}(q_{k,\theta}\|p_\theta),$$
where for finite probability mass functions $a,b$ with $b(x)>0$,
$$D_{\rm KL}(a\|b):=\sum_{x:a(x)>0}a(x)\log\frac{a(x)}{b(x)}$$
with $\log$ the natural logarithm and zero-mass terms contributing zero. For each parameter coordinate $j$,
$$\partial_j\mathcal L(\theta)=\sum_xq_0(x)\partial_jE_\theta(x)-\sum_xp_\theta(x)\partial_jE_\theta(x),$$
while
$$\partial_j\operatorname{CD}_k(\theta)=\sum_xq_0(x)\partial_jE_\theta(x)-\sum_xq_{k,\theta}(x)\partial_jE_\theta(x)-\sum_x\partial_jq_{k,\theta}(x)\log\frac{q_{k,\theta}(x)}{p_\theta(x)}.$$
The reconstruction-law derivative is
$$\partial_jq_{k,\theta}=\sum_{s=0}^{k-1}q_0K_\theta^s(\partial_jK_\theta)K_\theta^{k-1-s}.$$
Thus the population direction used by stop-gradient CD-$k$ is the first two
terms of the displayed $\partial_j\operatorname{CD}_k$ formula and omits the
explicit derivative through the $k$ transition kernels. It also replaces the
model expectation in the exact negative log-likelihood gradient by the finite
reconstruction law; no equality between these gradients is asserted.

For the finite-state path calculation, let $\Omega:=\mathcal X^{k+1}$ with its
full sigma-algebra, let $X_s$ be the $s$th coordinate map, and define
$$\mathbb P_\theta(A):=\sum_{(x_0,\ldots,x_k)\in A}q_0(x_0)\prod_{s=0}^{k-1}K_\theta(x_s,x_{s+1}),\qquad A\subseteq\Omega.$$
This is a probability measure. For every real $f:\mathcal X\to\mathbb R$, set
$$g_f(x):=\begin{cases}\sum_yK_\theta^k(x,y)f(y),&q_0(x)>0,\\0,&q_0(x)=0.\end{cases}$$
Then $g_f(X_0)$ is a version of
$\mathbb E_{\mathbb P_\theta}[f(X_k)\mid\sigma(X_0)]$.

## Statement references

[Geoffrey Hinton, Section 2 of the full technical report](https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf) derives the likelihood and reconstruction updates and notes the omitted contrastive-divergence derivative.

[Kevin P. Murphy, Chapter 24, Section 24.2.2](https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf) defines the finite-step difference-of-KL contrastive-divergence objective.

[[def-measure|The measure definition]] and [[def-probability-measure|the probability-measure definition]] give the finite path-law convention.

[[def-conditional-expectation-given-a-sigma-algebra|The conditional-expectation definition]] supplies the event-integral criterion used for the path calculation.

[[cor-exponential-reciprocal-and-positivity|Positivity of the exponential]] gives positive finite-state model weights.

## Facts & Assumptions

**Given:** A finite nonempty state space, open parameter domain, finite energy model, fixed data probability vector, positive differentiable stochastic matrix with invariant model law, and integer $k\ge1$.

[A1] For each state or state pair, the energy and transition entries have continuous coordinate partial derivatives on the open set $\Theta$; every entry of $K_\theta$ is positive and each row sums to one.

[F1] [[def-energy-based-density-and-partition-function]]: $p_\theta(x)=e^{-E_\theta(x)}/Z_\theta$ for an admissibly normalized energy model.

[F2] [[alg-contrastive-divergence-k]]: the reconstruction law obeys $Q_{j+1,\theta}(A)=\int K_\theta(x,A)\,Q_{j,\theta}(dx)$; on a finite state space this is row-vector multiplication by $K_\theta$.

[F3] [[alg-contrastive-divergence-k]]: the population stop-gradient direction is $\mathbb E_{q_0}\nabla_\theta E_\theta-\mathbb E_{q_{k,\theta}}\nabla_\theta E_\theta$.

[F4] [[def-finite-probability-vector]]: a finite probability vector has nonnegative coordinates summing to one.

[F5] [[def-derivative]]: the derivative at a real coordinate point is defined by the limit of its difference quotient.

[F6] [[thm-algebra-of-derivatives]]: finite sums, scalar multiples, products, and quotients (where the denominator is nonzero) obey the stated derivative rules.

[F7] [[thm-chain-rule]]: the derivative of a composition of differentiable real functions is the product of the outer derivative at the image and the inner derivative.

[F8] [[thm-derivative-of-exponential]]: $\exp'(u)=\exp(u)$ for every real $u$.

[F9] [[thm-logarithm-derivative-and-integral]]: for $u>0$, $\log'(u)=1/u$ for the natural logarithm.

[F10] [[def-measure]]: a measure vanishes on the empty set and is countably additive on pairwise disjoint sequences.

[F11] [[def-probability-measure]]: a measure with total mass one is a probability measure.

[F12] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is integrable, measurable with respect to the conditioning sigma-algebra, and has the same integral as the conditioned variable on every event in that sigma-algebra.

[F13] [[cor-exponential-reciprocal-and-positivity]]: $\exp(u)>0$ for every real $u$.

## Proof

1.1 Fix a coordinate $j$ and vary only $\theta_j$ in a small interval inside the open set $\Theta$. Since $\mathcal X$ is finite and each energy is real, [F13] makes every $e^{-E_\theta(x)}$ positive; hence [F1] gives $0<Z_\theta<\infty$. The formula for $p_\theta$ then gives positive coordinates summing to one, so it is a probability vector by [F4]. By [F6], [F7] and [F8], differentiating the finite sum gives $\partial_jZ_\theta=-\sum_xe^{-E_\theta(x)}\partial_jE_\theta(x)$. The same chain and quotient rules give $\partial_jp_\theta(x)/p_\theta(x)=-\partial_jE_\theta(x)-\partial_jZ_\theta/Z_\theta=-\partial_jE_\theta(x)+\sum_yp_\theta(y)\partial_jE_\theta(y)$; [F9] identifies the left side with $\partial_j\log p_\theta(x)$. Because $q_0$ is fixed and sums to one by [F4], differentiating $\mathcal L=-\sum_xq_0(x)\log p_\theta(x)$ and summing this identity yields the displayed likelihood-gradient formula. [given, A1, F1, F4, F5, F6, F7, F8, F9, F13, algebra]

1.2 The recurrence in [F2] gives $q_{j+1,\theta}=q_{j,\theta}K_\theta$, hence $q_{k,\theta}=q_0K_\theta^k$ and $\sum_xq_{k,\theta}(x)=1$. For $k=1$ the product rule [F6] gives $\partial_j(q_0K_\theta)=q_0\partial_jK_\theta$. If $\partial_j(q_0K_\theta^k)=\sum_{s=0}^{k-1}q_0K_\theta^s(\partial_jK_\theta)K_\theta^{k-1-s}$, then entrywise application of [F6] to $q_0K_\theta^kK_\theta$ yields $\sum_{s=0}^{k-1}q_0K_\theta^s(\partial_jK_\theta)K_\theta^{k-s}+q_0K_\theta^k(\partial_jK_\theta)$, which is the same formula with $k+1$ by appending the $s=k$ term. Thus the stated product derivative holds for every $k$. Differentiating $\sum_xq_{k,\theta}(x)=1$ by [F6] gives $\sum_x\partial_jq_{k,\theta}(x)=0$. Strict positivity of $K_\theta$ and nonzero mass of $q_0$ imply $q_{k,\theta}(x)>0$ for every $x$, so the following logarithms are finite. [given, A1, F2, F4, F5, F6, algebra]

1.3 Put $w(x_0,\ldots,x_k):=q_0(x_0)\prod_{s=0}^{k-1}K_\theta(x_s,x_{s+1})$. These weights are nonnegative. Summing successively over $x_k,\ldots,x_1$ and using the row sums of $K_\theta$ reduces $\sum_{\omega\in\Omega}w(\omega)$ to $\sum_{x_0}q_0(x_0)=1$. The set function $\mathbb P_\theta(A)=\sum_{\omega\in A}w(\omega)$ vanishes on the empty set and is countably additive: a disjoint sequence of subsets of finite $\Omega$ has only finitely many nonempty terms. Thus [F10] makes it a measure, and [F11] makes it a probability measure. [A1, F4, F10, F11, algebra, construct]

2.1 By the quotient rule [F6], $\partial_j(q_{k,\theta}(x)/p_\theta(x))=\partial_jq_{k,\theta}(x)/p_\theta(x)-q_{k,\theta}(x)\partial_jp_\theta(x)/p_\theta(x)^2$; the chain and logarithm derivative rules [F7, F9] then give $\partial_j\log(q_{k,\theta}(x)/p_\theta(x))=\partial_jq_{k,\theta}(x)/q_{k,\theta}(x)-\partial_j\log p_\theta(x)$. Applying the product rule [F6] to each summand of $D_{\rm KL}(q_{k,\theta}\|p_\theta)$ therefore gives $\partial_jq_{k,\theta}(x)(\log(q_{k,\theta}(x)/p_\theta(x))+1)-q_{k,\theta}(x)\partial_j\log p_\theta(x)$. Summing the finite terms, the $+1$ contribution vanishes by step 1.2. Substitution from step 1.1 yields $\partial_jD_{\rm KL}(q_{k,\theta}\|p_\theta)=\sum_x\partial_jq_{k,\theta}(x)\log(q_{k,\theta}(x)/p_\theta(x))+\sum_xq_{k,\theta}(x)\partial_jE_\theta(x)-\sum_xp_\theta(x)\partial_jE_\theta(x)$. [given, A1, F5, F6, F7, F9, step 1.1, step 1.2, algebra]

2.2 For $s=0$, $K_\theta^0=I$ is row-stochastic and its entries are the length-zero path weights. If the entries of $K_\theta^s$ sum the products along all length-$s$ paths, then $K_\theta^{s+1}(x,y)=\sum_zK_\theta^s(x,z)K_\theta(z,y)$ appends the final transition, so its entries sum the length-$(s+1)$ path weights; also $\sum_yK_\theta^{s+1}(x,y)=\sum_zK_\theta^s(x,z)\sum_yK_\theta(z,y)=1$. Thus $\mathbb P_\theta(X_0=x,X_k=y)=q_0(x)K_\theta^k(x,y)$. The function $g_f$ is finite-valued; for each Borel $C\subseteq\mathbb R$, $\{g_f(X_0)\in C\}=X_0^{-1}(\{x:g_f(x)\in C\})$, so $g_f(X_0)$ is $\sigma(X_0)$-measurable. Both $f(X_k)$ and $g_f(X_0)$ are integrable since $\Omega$ is finite. [A1, F4, step 1.3, algebra]

3.1 Since $q_0$ is fixed, the terms $q_0(x)\log q_0(x)$ in $D_{\rm KL}(q_0\|p_\theta)$ have zero derivative; applying the same product and logarithm rules [F6, F9] and using the log-density formula from step 1.1 and $\sum_xq_0(x)=1$ gives $\partial_jD_{\rm KL}(q_0\|p_\theta)=\sum_xq_0(x)\partial_jE_\theta(x)-\sum_xp_\theta(x)\partial_jE_\theta(x)$. Subtracting step 2.1 cancels the model expectations and yields the stated $\partial_j\operatorname{CD}_k$ formula. By [F3], the algorithm uses only its first two terms; the remaining sum is the derivative through $K_\theta^k$. Comparing with step 1.1 also shows that the algorithm replaces the exact likelihood negative phase $p_\theta$ by $q_{k,\theta}$. [given, F3, F4, F5, F6, F9, step 1.1, step 2.1, algebra]

4.1 Every event in $\sigma(X_0)$ has the form $\{X_0\in B\}$ for some $B\subseteq\mathcal X$, since these preimages form a sigma-algebra and generate $\sigma(X_0)$. For every such event, step 2.2 gives $$\int \mathbf1_{\{X_0\in B\}}f(X_k)\,d\mathbb P_\theta=\sum_{x\in B}q_0(x)\sum_yK_\theta^k(x,y)f(y)=\int \mathbf1_{\{X_0\in B\}}g_f(X_0)\,d\mathbb P_\theta,$$ where terms with $q_0(x)=0$ vanish. The integrability and measurability from step 2.2 and this event-integral identity satisfy [F12], so $g_f(X_0)$ is the asserted conditional-expectation version. [F12, step 2.2, algebra] ∎
