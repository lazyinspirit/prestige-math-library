---
id: lem-fixed-time-lazy-training-stability
kind: lemma
title: Finite-data fixed-time NTK stability under integrably bounded training directions
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-iid-finite-variance-weak-law
  - cor-mean-value-theorem
  - def-axiom-of-choice
  - def-convergence-in-probability
  - def-neural-tangent-kernel
  - def-width-normalized-fully-connected-network
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-standard-normal-fourth-moment
  - thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity
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
      locator: "Theorem 2 and Appendix A.2–A.3, printed pp. 12–16; training-direction and finite-time parameter/activation drift bounds"
---

## Statement

Assume AC. Fix a finite data set $x_1,\ldots,x_N\in\mathbb R^{n_0}$ with $N,n_0\ge1$, a depth $L\ge2$, a bias scale $\beta>0$, and a horizon $T\ge0$. Let $\sigma:\mathbb R\to\mathbb R$ be globally Lipschitz, twice continuously differentiable, and have bounded second derivative. Use the network parameterization and independent standard-normal initialization in the width-normalized network definition, with scalar output $n_L=1$. For each hidden-width tuple $\mathbf n=(n_1,\ldots,n_{L-1})$, let $\mathbb P_{\mathbf n}$ be a probability law carrying this product standard-normal initialization marginal and any auxiliary randomness used by training. For each $\mathbf n$, take the training direction $d_{\mathbf n}$ and parameter path $\theta_{\mathbf n}$ to be jointly measurable in the probability outcome and time; for $\mathbb P_{\mathbf n}$-almost every outcome, assume $d_{\mathbf n}$ is integrable on $[0,T]$ and $\theta_{\mathbf n}$ is differentiable there and satisfies

$$\dot\theta_p(t)=-\frac1N\sum_{i=1}^N\partial_{\theta_p}f_{\theta(t)}(x_i)\,d_i(t),$$

where, for each fixed tuple, the width and probability-outcome subscripts are suppressed and the displayed path equation holds almost surely. Write $K_t=(K_{\theta(t)}(x_i,x_j))_{i,j=1}^N$ for the finite-data scalar neural tangent kernel. Suppose $\int_0^T\|d_{\mathbf n}(t)\|_N\,dt$ is stochastically bounded in the prescribed sequential hidden-width limit, where $\|v\|_N=(N^{-1}\sum_i|v_i|^2)^{1/2}$ and stochastic boundedness means that for every $\varepsilon>0$ some $M<\infty$ satisfies $\limsup_{n_{L-1}\to\infty}\cdots\limsup_{n_1\to\infty}\mathbb P_{\mathbf n}(\int_0^T\|d_{\mathbf n}(t)\|_Ndt>M)<\varepsilon$. The sample paths of $K_t$ are continuous, so joint measurability makes the supremum events below measurable. Then, as $n_1\to\infty$ first and then $n_2,\ldots,n_{L-1}\to\infty$, for every $\varepsilon>0$,

$$\mathbb P_{\mathbf n}\left(\sup_{0\le t\le T}\|K_t-K_0\|_{\mathrm{op}}>\varepsilon\right)\longrightarrow0.$$

## Statement references

[Jacot, Gabriel, and Hongler, Theorem 2 and Appendix A.2–A.3, fixed-time NTK stability](https://arxiv.org/pdf/1806.07572)

[[def-neural-tangent-kernel|The scalar NTK is the parameter-Jacobian Gram kernel]]

[[def-width-normalized-fully-connected-network|The hidden layers use fan-in normalization and independent Gaussian initialization]]

## Facts & Assumptions

**Given:** AC; the finite data set and fixed depth; the stated activation and positive bias scale; the source-normalized network with iid standard-normal initialization under the width-specific laws; jointly measurable training paths and directions with the stated pathwise properties; and a training direction with stochastically bounded integrated empirical norm.

[A1] AC is inherited from the network and Gaussian probability-law interfaces ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] For a finite $C^1$ parameterized network, reverse accumulation sums every shared-parameter use and gives the total parameter gradient ([[thm-shared-parameter-backpropagation-gradient-formula]]).

[F2] The NTK is the Gram matrix of the parameter derivatives ([[def-neural-tangent-kernel]]).

[F3] In the model definition, weights and biases are independent standard normals, the forward map uses $W^{(\ell)}/\sqrt{n_\ell}$ and $\beta b^{(\ell)}$, and hidden activations are coordinatewise $\sigma$ ([[def-width-normalized-fully-connected-network]]).

[F4] Averages of iid square-integrable variables converge in probability to their means ([[cor-iid-finite-variance-weak-law]]); a centered normal has finite fourth moment ([[lem-standard-normal-fourth-moment]]).

[F5] The probability and norm conventions used in the conclusion are convergence in probability and the finite-dimensional operator norm ([[def-convergence-in-probability]]).

[F6] Cauchy–Schwarz and expectation linearity apply to the finite data averages ([[cor-cauchy-schwarz-for-random-variables]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F7] A differentiable real function with uniformly bounded derivative is Lipschitz by the mean value theorem ([[cor-mean-value-theorem]]).

[F8] A continuous real function differentiable except on a countable set, with Lebesgue-integrable derivative, is absolutely continuous and recovers its increments by integrating that derivative; apply coordinatewise to finite-dimensional parameter paths ([[thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity]]).

## Proof
**Proof technique:** express the finite network derivatives by backpropagation, control normalized parameter and feature changes by an aggregate differential inequality, then apply the finite-data Jacobian recursion.

1.1 Regard the network as a finite composition of $C^1$ maps on its Euclidean parameter space; [F1] gives the shared-parameter gradients. Let $J_f(\theta(t))$ be the Jacobian of $(f_\theta(x_i))_{i=1}^N$. It is continuous in $\theta$ because $\sigma$ is $C^2$, and it is bounded on the compact image of the continuous path $\theta([0,T])$. The flow equation and $d\in L^1([0,T];\mathbb R^N)$ therefore imply $\dot\theta\in L^1([0,T])$. By [F8], applied to each of the finitely many parameter coordinates, $\theta$ is absolutely continuous and its increments equal the integrals of its derivative. Define the terminal array by $D^L_{1i}(t)=d_i(t)$, and obtain each hidden backpropagated array $D^{\ell+1}(t)\in\mathbb R^{n_{\ell+1}\times N}$ by weighting the derivative of each data-point output with $d_i(t)$. If $Z^\ell(t)\in\mathbb R^{n_\ell\times N}$ is the activation array, the weight and bias equations are $\dot W^{(\ell)}=-D^{\ell+1}(Z^\ell)^T/(N\sqrt{n_\ell})$ and $\dot b^{(\ell)}=-\beta D^{\ell+1}\mathbf1/N$, while hidden backpropagation is $D^\ell=\operatorname{diag}(\sigma\prime(U^\ell))(W^{(\ell)})^TD^{\ell+1}/\sqrt{n_\ell}$. Here division by $N$ acts on the data sum. [A1, F1, F3, F8, given, algebra]

2.1 For an array $R\in\mathbb R^{m\times N}$ write $\|R\|_{F,N}=\|R\|_F/\sqrt N$. Let $c=\sup|\sigma'|$ and $M_2=\sup|\sigma''|$, both finite by the hypotheses (taking a difference-quotient limit in the global Lipschitz inequality gives $c\le\operatorname{Lip}(\sigma)$), and set $w_\ell(t)=\|W^{(\ell)}(t)\|_{op}/\sqrt{n_\ell}$ and $a_\ell(t)=\|Z^\ell(t)\|_{F,N}/\sqrt{n_\ell}$ for $1\le\ell<L$. Let $K^\ell$ be the tangent-kernel block for the preactivation array $U^\ell$, acting on direction arrays by $(\mathcal K^\ell D)_{ai}=N^{-1}\sum_{b,j}K^\ell_{(i,a),(j,b)}D_{bj}$, and put $B_\ell=\|\mathcal K^\ell\|_{op}$ using $\|\cdot\|_{F,N}$. The initial block and layerwise chain rule give $B_1\le\|X\|_F^2/(n_0N)+\beta^2$ and $B_{\ell+1}\le c^2w_\ell^2B_\ell+a_\ell^2+\beta^2$ for $1\le\ell<L$: the current-layer weight-and-bias Gram has operator norm at most $a_\ell^2+\beta^2$, while the preceding Jacobian is composed with $W^{(\ell)}/\sqrt{n_\ell}$ and diagonal activation derivatives of norm at most $c$. The backpropagation identity in step 1.1 also gives $\|D^\ell(t)\|_{F,N}\le c^{L-\ell}(\prod_{k=\ell}^{L-1}w_k(t))\|d(t)\|_N$. Recursively, each $B_\ell$ is bounded by a polynomial in the finitely many $a_k,w_k,c,\beta$, and each backpropagation norm is bounded by such a polynomial times $\|d(t)\|_N$. [F1, F2, F3, step 1.1, algebra]

3.1 Cauchy–Schwarz in the data index and step 1.1 give, for $1\le\ell<L$, $\|\dot W^{(\ell)}\|_{op}/\sqrt{n_\ell}\le a_\ell\|D^{\ell+1}\|_{F,N}/\sqrt{n_\ell}$. For hidden layers the chain rule gives $\dot U^\ell=-\mathcal K^\ell D^\ell$, so $\|\dot U^\ell\|_{F,N}/\sqrt{n_\ell}\le B_\ell\|D^\ell\|_{F,N}/\sqrt{n_\ell}$; for $\ell=1$ this is the first-layer parameter Gram. The hidden-bias equation gives $\beta\|\dot b^{(\ell-1)}\|_2/\sqrt{n_\ell}\le\beta^2\|D^\ell\|_{F,N}/\sqrt{n_\ell}$, and the first-layer matrix gives $\|\dot W^{(0)}\|_F/\sqrt{n_1}\le C\|D^1\|_{F,N}/\sqrt{n_1}$ with $C=\|X\|_F/\sqrt{n_0N}$. The output bias is excluded because its derivative contributes only the constant feature $\beta$ and changes no later feature or parameter derivative. By [F7], $|\sigma'(u)-\sigma\prime(v)|\le M_2|u-v|$; global Lipschitz continuity gives $\|\dot Z^\ell\|_{F,N}\le c\|\dot U^\ell\|_{F,N}$. Whenever $a_\ell(t),w_\ell(t)\le R$ for every hidden layer, the recurrence in step 2.1 gives $B_\ell\le P_\ell(R)$, where $P_1(R)=\|X\|_F^2/(n_0N)+\beta^2$ and $P_{\ell+1}(R)=c^2R^2P_\ell(R)+R^2+\beta^2$; backpropagation gives $\|D^\ell\|_{F,N}\le(cR)^{L-\ell}\|d\|_N$. Substituting these bounds in the displayed rates shows that each normalized activation, preactivation, hidden-bias, and weight change rate is at most a polynomial in $R$ times $\|d(t)\|_N/\sqrt{n_{\min}}$, with $n_{\min}=\min_{1\le k<L}n_k$. [F1, F3, F6, F7, step 1.1, step 2.1]

4.1 For $1\le\ell<L$ define $\widetilde a_\ell=\|Z^\ell(t)-Z^\ell(0)\|_{F,N}/\sqrt{n_\ell}$, $\widetilde u_\ell=\|U^\ell(t)-U^\ell(0)\|_{F,N}/\sqrt{n_\ell}$, and $\widetilde w_\ell=\|W^{(\ell)}(t)-W^{(\ell)}(0)\|_{op}/\sqrt{n_\ell}$; for $0\le\ell<L-1$ put $\widetilde b_\ell=\beta\|b^{(\ell)}(t)-b^{(\ell)}(0)\|_2/\sqrt{n_{\ell+1}}$, and put $\widetilde w_0=\|W^{(0)}(t)-W^{(0)}(0)\|_F/\sqrt{n_1}$. Define $A(t)=\sum_{\ell=1}^{L-1}(a_\ell(0)+w_\ell(0)+\widetilde a_\ell+\widetilde u_\ell+\widetilde w_\ell+\widetilde b_{\ell-1})+\widetilde w_0$. Since $a_\ell(t)\le a_\ell(0)+\widetilde a_\ell(t)$ and $w_\ell(t)\le w_\ell(0)+\widetilde w_\ell(t)$, all $a_\ell,w_\ell$ are bounded by $A(t)$. Each term of $A$ is absolutely continuous by [F8] and the norm/Lipschitz inequalities; the preceding estimates and the polynomial bounds in step 3.1 give, with $n_{\min}=\min_{1\le\ell<L}n_\ell$, $|\dot A(t)|\le Q(A(t))\|d(t)\|_N/\sqrt{n_{\min}}$ for a polynomial $Q$ with nonnegative coefficients depending only on $L,N,c,M_2,\beta$ and the fixed inputs. Initially $A(0)$ is stochastically bounded in the sequential limit: each $a_\ell(0)^2$ is an empirical second moment of a Lipschitz function of a finite Gaussian vector, and at each width limit [F4] applies after conditioning on earlier layers; for each fixed next-layer width, $W^{(\ell)}W^{(\ell)T}/n_\ell\to I$ entrywise by [F4], so $w_\ell(0)$ is bounded in that iterated limit. [F3, F4, F6, step 2.1, step 3.1]

5.1 Fix probability tolerance $\varepsilon>0$. Stochastic boundedness of $A(0)$ and of $\int_0^T\|d(t)\|_Ndt$ lets us restrict, except on a set of probability at most $2\varepsilon$, to $A(0)\le R$ and this integral at most $M$ for finite $R,M$. On this event, the differential inequality in step 4.1 implies $A(t)\le R+1$ for all $t\le T$ once $n_{\min}$ is large: on $[0,R+1]$, $Q$ is bounded by some $Q_*$, so $|A(t)-A(0)|\le Q_*M/\sqrt{n_{\min}}<1$; a first-exit argument justifies the bound on the whole interval. Since the normalized changes are nonnegative summands of $A(t)-A(0)$, each tends uniformly to zero. [given, step 4.1, algebra]

6.1 For each layer, the exact tangent-kernel block recursion is $K^{\ell+1}_{(i,c),(j,d)}=\delta_{cd}(n_\ell^{-1}\sum_a Z^\ell_{ai}Z^\ell_{aj}+\beta^2)+n_\ell^{-1}\sum_{a,b}W^{(\ell)}_{ca}W^{(\ell)}_{db}\sigma'(U^\ell_{ai})\sigma'(U^\ell_{bj})K^\ell_{(i,a),(j,b)}$. It follows by applying the chain rule to each coordinate and splitting parameter derivatives into the current layer and earlier shared parameters, as in [F1]. The first term varies uniformly by the activation and hidden-bias estimates in step 5.1. For the second term, for each output index $c$ and data index $i$ use the vector $v_{c,i}(t)\in\mathbb R^{n_\ell}$ with entries $W^{(\ell)}_{ca}(t)\sigma'(U^\ell_{ai}(t))$. Their normalized Euclidean norms stay bounded. Their changes tend to zero in normalized Euclidean norm: the weight-change part is bounded by $c\|\Delta W_c\|_2/\sqrt{n_\ell}$, while Cauchy–Schwarz for the initial-weight part gives $n_\ell^{-1}\sum_a|W^{(\ell)}_{ca}(0)|^2|\Delta\sigma'_{ai}|^2\le(n_\ell^{-1}\sum_a|W^{(\ell)}_{ca}(0)|^4)^{1/2}(n_\ell^{-1}\sum_a|\Delta\sigma'_{ai}|^4)^{1/2}$. The first factor is stochastically bounded by [F3]–[F4]; the second tends uniformly to zero because [F7] gives $|\Delta\sigma'|\le M_2|\Delta U|$ and $|\Delta\sigma'|\le2c$, hence $|\Delta\sigma'|^4\le(2c)^2M_2^2|\Delta U|^2$; normalized preactivation changes tend to zero by step 5.1. For each fixed next-layer width, the finitely many output-index blocks have uniformly bounded subnetwork Gram operators by step 2.1, and induction from the constant first-layer Gram makes their changes tend uniformly to zero; applying $|\langle v,Kv'\rangle-\langle w,K_0w'\rangle|\le\|v-w\|\|K\|\|v'\|+\|w\|\|K-K_0\|\|v'\|+\|w\|\|K_0\|\|v'-w'\|$ at each of the finitely many layers proves uniform convergence of the finite-data kernel blocks. The output layer has fixed scalar dimension, so this is exactly $\sup_{t\le T}\|K_t-K_0\|_{op}\to0$ in probability. [F1, F3, F4, F5, F6, F7, step 2.1, step 5.1, algebra] ∎
