---
id: thm-masked-diffusion-kl-reduces-to-cross-entropy
kind: theorem
title: Masked-diffusion KL reduces to weighted cross-entropy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-finite-kullback-leibler-divergence
  - def-finite-masking-diffusion-chain
  - def-population-and-empirical-risk
  - def-supervised-learning-problem
  - lem-finite-grid-masked-sampler-is-well-defined
  - lem-finite-masking-chain-is-well-defined
  - lem-finite-product-kl-additivity
  - lem-population-and-empirical-risk-are-measurable
  - thm-masking-chain-posterior
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the conditional KL calculations and all state spaces are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "Appendix A.2.1–A.2.3 and §3.2.3"
    - title: "Jacob Austin et al., Structured Denoising Diffusion Models in Discrete State-Spaces"
      url: https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf
      locator: "§3, Eq. (3), and §4, absorbing-state KL/cross-entropy discussion"
---

## Statement

Let $V$ be a finite nonempty vocabulary, let $m\notin V$, let $L,N\ge1$, and let $1=\alpha_0>\cdots>\alpha_N=0$. Draw $X=(X_1,\ldots,X_L)$ from any probability law on $V^L$. Conditional on $X$, each coordinate stays unchanged at step $j$ with probability $r_j=\alpha_j/\alpha_{j-1}$ and otherwise becomes the absorbing mask $m$; the transition draws at distinct coordinates and steps are independent. Thus $Z_j$ is the state after step $j$. For $j=1,\ldots,N$, put
$$c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j),\qquad d_j=(1-\alpha_{j-1})/(1-\alpha_j).$$
Let $h_{i,j}:S\to\Delta(V)$ be any predictors, where $S=(V\cup\{m\})^L$ and $\Delta(V)$ is the set of probability vectors on $V$. Define the learned reverse kernel $P_j$ to have product rows: an unmasked coordinate is copied, while a masked coordinate assigns mass $d_j$ to $m$ and mass $c_jh_{i,j}(z)(v)$ to each $v\in V$. For every positive-probability current state $z_j$, the true conditional law $q(Z_{j-1}\mid Z_j=z_j,X)$ also has product rows: it copies every unmasked coordinate and, at a masked coordinate $i$, assigns mass $c_j$ to $X_i$ and $d_j$ to $m$. For $1\le i\le L$, let $M_{j,i}=\{Z_{j,i}=m\}$, which has probability $1-\alpha_j>0$, and let $P_{j,i}^{\mathrm{mask}}$ be the conditional law of $(Z_j,X_i)$ given $M_{j,i}$. View $h_{i,j}$ as a predictor in the finite supervised problem with feature $Z_j$, label $X_i$, action space $\Delta(V)$, its singleton predictor class, and loss $\ell(p,v)=-\log p(v)$, with $-\log0=+\infty$. Its population risk under $P_{j,i}^{\mathrm{mask}}$ is
$$R_{j,i}=\mathbb E[\ell(h_{i,j}(Z_j),X_i)\mid M_{j,i}].$$
For finite-alphabet probability vectors $P=(p_a)$ and $Q=(q_a)$, write $D_{\mathrm{KL}}(P\|Q)=\sum_{a:p_a>0}p_a\log(p_a/q_a)$, with zero source terms set to zero and positive source mass against zero reference mass set to $+\infty$. Define the extended-nonnegative conditional reverse-KL contribution
$$\mathcal L_j=\mathbb E_{X,Z_j}\left[D_{\mathrm{KL}}\left(q(Z_{j-1}\mid Z_j,X)\middle\|P_j(Z_j,\cdot)\right)\right].$$
Then
$$\sum_{j=1}^N\mathcal L_j=\sum_{j=1}^N\sum_{i=1}^L(\alpha_{j-1}-\alpha_j)R_{j,i}$$
as an equality of extended nonnegative quantities. If a predictor assigns zero mass to the true token on a positive-probability masked event, both sides are $+\infty$; finite cross-entropy is not assumed.

## Statement references

[[def-finite-kullback-leibler-divergence]]: for finite probability vectors, $D(P\|Q)=\sum_{x:p_x>0}p_x\log(p_x/q_x)$, with $+\infty$ when $p_x>0=q_x$.

[[lem-finite-product-kl-additivity]]: the finite KL of product probability vectors is the sum of their coordinate KLs, including the singular-support case.

[[thm-masking-chain-posterior]]: conditional on the clean string, the true reverse posterior is a product of copy rows and two-point mask/unmask rows.

[[alg-finite-grid-masked-diffusion-sampler]]: the learned reverse rows copy unmasked tokens and use the same mask/unmask probability with clean-token vector $h_{i,j}$.

[[def-supervised-learning-problem]]: a supervised problem specifies measurable feature, label, action spaces, a joint law, a predictor class and a nonnegative measurable loss.

[[def-population-and-empirical-risk]]: population risk is the extended nonnegative integral of the loss under the data law.

[[lem-population-and-empirical-risk-are-measurable]]: the finite-state loss and conditional risk are measurable and defined.

## Facts & Assumptions

**Given:** A finite masking chain, its true posterior, the learned product reverse kernel, finite-alphabet KL, and the finite conditional prediction problems in the Statement. Prove the summed reverse-KL/cross-entropy identity.

[F1] [[def-finite-masking-diffusion-chain]]: forward corruption is independent across positions conditional on $X$; a clean token survives to step $j$ with probability $\alpha_j$, and the mask is absorbing.

[F2] [[thm-masking-chain-posterior]]: for $s=j-1<t=j$, a masked coordinate has true clean probability $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$ and mask probability $d_j=(1-\alpha_{j-1})/(1-\alpha_j)$; an unmasked coordinate is copied; the posterior factors across positions given $X,Z_j$.

[F3] [[alg-finite-grid-masked-diffusion-sampler]]: from a masked coordinate the learned row assigns mass $d_j=1-c_j$ to $m$ and mass $c_jh_{i,j}(z)(v)$ to each clean token $v$; learned position rows are conditionally independent.

[F4] [[def-finite-kullback-leibler-divergence]]: finite relative entropy is directional, zero source masses contribute zero, and positive source mass against zero target mass gives $+\infty$.

[F5] [[def-supervised-learning-problem]]: the finite feature/label/action spaces, singleton predictor, conditional joint law, and cross-entropy loss form a supervised prediction problem.

[F6] [[def-population-and-empirical-risk]]: its population risk is the extended conditional expectation $R_{j,i}$.

[F7] [[lem-population-and-empirical-risk-are-measurable]]: finite-state measurable predictors and losses have a defined measurable risk.

[F8] [[lem-finite-product-kl-additivity]]: finite product KL is the sum of its coordinate KL terms, with $+\infty$ preserved when a factor has singular support.

## Proof

1.1 Equip the finite feature space $S$ and label space $V$ with their power-set sigma-algebras, and equip $\Delta(V)$ with the Borel sigma-algebra inherited from $\mathbb R^V$. Every predictor $h_{i,j}:S\to\Delta(V)$ is measurable because its domain is finite and discrete. For each $v\in V$, the coordinate map $p\mapsto p(v)$ is continuous, and $g(t)=-\log t$ for $t>0$, with $g(0)=+\infty$, is Borel measurable on $[0,1]$. Therefore $p\mapsto-\log p(v)$ is Borel measurable and nonnegative. Since $V$ is finite and discrete, the loss $(p,v)\mapsto-\log p(v)$ is measurable on $\Delta(V)\times V$. This verifies the loss-measurability requirement in [F5] and the finite-state measurability used in [F7]. Now fix a step $j$, clean string $x$, and observed positive-probability state $z_j$. The true and learned conditional laws both factor over positions by [F2] and [F3]. Applying [F8] to these finite product rows makes their joint conditional KL the sum of the coordinate KLs, preserving the singular $+\infty$ case described by [F4]. [F2, F3, F4, F5, F7, F8, given]

2.1 If $z_{j,i}\ne m$, the true and learned coordinate rows are the same point mass, so their KL is zero. If $z_{j,i}=m$, put $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)>0$ and $d_j=(1-\alpha_{j-1})/(1-\alpha_j)$. The true row has mass $c_j$ at $x_i$ and $d_j$ at $m$; the learned row has mass $c_jh_{i,j}(z_j)(v)$ at $v\in V$ and $d_j$ at $m$. If $h_{i,j}(z_j)(x_i)>0$, the only nonzero KL terms are $c_j\log(c_j/(c_jh_{i,j}(z_j)(x_i)))=-c_j\log h_{i,j}(z_j)(x_i)$ and, when $d_j>0$, $d_j\log(d_j/d_j)=0$. If $h_{i,j}(z_j)(x_i)=0$, [F4] gives $+\infty$, which is the same extended value as $c_j[-\log h_{i,j}(z_j)(x_i)]$. Thus the full conditional KL is $\sum_i\mathbf1_{M_{j,i}}c_j[-\log h_{i,j}(z_j)(x_i)]$. [F2, F3, F4, step 1.1, algebra]

3.1 For each $i$, [F1] gives $\Pr(M_{j,i}\mid X=x)=1-\alpha_j$, independent of $x$. Averaging the $i$th term of step 2.1 over the forward corruption therefore gives $c_j(1-\alpha_j)\mathbb E[-\log h_{i,j}(Z_j)(X_i)\mid M_{j,i}]=(\alpha_{j-1}-\alpha_j)R_{j,i}$ by [F5]–[F7]. This argument conditions on a positive event and does not assume the clean coordinates of $X$ are independent. [F1, F5, F6, F7, step 2.1, algebra]

4.1 Sum the step 3.1 identity over the finite positions and all $j=1,\ldots,N$. The coefficient identity $c_j(1-\alpha_j)=\alpha_{j-1}-\alpha_j$ holds because $\alpha_j<1$. At $j=1$, $\alpha_0=1$ gives $d_1=0$, which is the zero mask-retention term already omitted in step 2.1; at $j=N$, $\alpha_N=0$ gives $\Pr(M_{N,i})=1$, so the conditional risk in step 3.1 is defined on the whole terminal event. Extended nonnegative sums preserve the $+\infty$ cases from step 2.1, giving the stated equality. [F1, F2, step 2.1, step 3.1, algebra] ∎
