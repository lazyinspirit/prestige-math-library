---
id: thm-relu-backward-variance-recurrence
kind: theorem
title: "ReLU backward gradient-variance recurrence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - lem-centered-independent-weighted-sum-variance
  - lem-symmetric-rectifier-moments
  - thm-chain-rule-for-total-derivatives
  - thm-factorization-of-expectations-for-independent-variables
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.2"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Statement

Consider a finite rectified stack in a fully connected layered perceptron,
with widths $d_0,\ldots,d_L$, zero biases,
$Z_\ell=W_\ell X_{\ell-1}$, and $X_\ell=\rho(Z_\ell)$,
where $\rho(t)=\max(t,0)$. Given a terminal signal $g_L$, define backward
signals by the zero-at-kink convention
$\gamma_{\ell,j}=\mathbf 1_{Z_{\ell,j}>0}$,
$h_\ell=\gamma_\ell\odot g_\ell$, and
$g_{\ell-1}=W_\ell^{\mathsf T}h_\ell$.
For an objective differentiable as a function of the last activation, these
are ordinary chain-rule gradients at realizations where all relevant
preactivations are nonzero. At zeros they are specified backpropagation
signals; no ordinary derivative of ReLU at zero is asserted.

Without any independence assumptions, fix a layer $\ell$ and suppose every
$T_{ji}=W_{\ell,ji}\gamma_{\ell,j}g_{\ell,j}$ is square-integrable. Then
$$\mathbb E[g_{\ell-1,i}]=\sum_j\mathbb E[T_{ji}],\qquad \operatorname{Var}(g_{\ell-1,i})=\sum_j\operatorname{Var}(T_{ji})+2\sum_{j<k}\operatorname{Cov}(T_{ji},T_{ki}).$$
This is an exact atom-aware identity for the realized network signals. The
same mean and covariance formulas hold for any specified bounded gate vector
in place of $\gamma_\ell$, with $T_{ji}$ redefined accordingly.

For the conditional recurrence, additionally assume at the layers in question
that the entries of $W_\ell$ are independent with a common symmetric centered
law of finite variance $\sigma_\ell^2$, that $Z_{\ell,j}$ is symmetric with
common zero probability $p_\ell$, and that the coordinates of $g_\ell$ have
common finite second moment $G_\ell$. Assume the gate vector $\gamma_\ell$
is independent of $g_\ell$ and $W_\ell$ is independent of $h_\ell$.
Write the fan-out as $\hat n_\ell=d_\ell$. Then
$$\mathbb E[g_{\ell-1,i}]=0,\qquad G_{\ell-1}=\operatorname{Var}(g_{\ell-1,i})=\frac{1-p_\ell}{2}\hat n_\ell\sigma_\ell^2G_\ell.$$
If these hypotheses hold for every $r\le\ell\le L$, then
$$G_{r-1}=G_L\prod_{\ell=r}^L\frac{1-p_\ell}{2}\hat n_\ell\sigma_\ell^2.$$
In particular, the source's atomless conditional case $p_\ell=0$ gives
$\operatorname{Var}(g_{\ell-1,i})=\frac12\hat n_\ell\sigma_\ell^2\mathbb E[g_{\ell,1}^2]$
and the corresponding product of half factors. If the downstream coordinate
is centered, $G_\ell$ is its variance. The conditional fan-out choice
$\sigma_\ell^2=2/\hat n_\ell$ makes each atomless product factor one.

These conditional identities do not establish that a nonzero actual-network
gradient satisfies their hypotheses. Indeed, if $\ell\ge2$,
$X_{\ell-1}$ is a ReLU output and $\sigma_\ell^2>0$, the assumption
$W_\ell\perp h_\ell$ already forces $h_\ell=0$ almost surely. If also
$p_\ell<1$ and gate independence holds, it forces $G_\ell=0$.
Thus the nonzero atomless backward preservation model with these full
independence assumptions is infeasible for such an actual ReLU layer; the
conditional implication and product remain valid, and the general covariance
identity above supplies the unconditional finite-network formula.

## Facts & Assumptions

**Given:** The finite stack and backward-signal convention; square-integrable summands for the general identity; and, only for the conditional formulas, the stated symmetry, moments, and independence assumptions.

[F1] A fully connected layered perceptron evaluates each layer as a finite weighted sum followed by its specified activation. ([[def-feedforward-neural-network]])

[F2] At totally differentiable points, derivatives of a composition multiply in layer order. ([[thm-chain-rule-for-total-derivatives]])

[F3] A symmetric preactivation with zero probability $p$ has positive sign probability $(1-p)/2$. ([[lem-symmetric-rectifier-moments]])

[F4] Independent centered weights, independent of the input vector, give weighted-sum mean zero and variance equal to the sum of weight variances times input second moments. ([[lem-centered-independent-weighted-sum-variance]])

[F5] Products of independent integrable variables have factored expectations. ([[thm-factorization-of-expectations-for-independent-variables]])

[F6] Variance and covariance are centered second moments. ([[def-moments-variance-and-covariance]])

[F7] Products of square-integrable variables are integrable by Cauchy–Schwarz. ([[cor-cauchy-schwarz-for-random-variables]])

[F8] A finite independent family has product joint law. ([[thm-independent-random-elements-have-product-joint-law]])

[F9] Expectation is linear on integrable random variables, and respects their almost-sure order. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof

1.1 At a realization with nonzero preactivations, the derivative of ReLU is the diagonal matrix with entries $\gamma_{\ell,j}$, and the affine derivative is $W_\ell$. The chain rule [F2] therefore gives the two backward identities in the Statement. The specified convention defines the same identities at zeros without using [F2] there. [given, F1, F2]

1.2 For fixed $i$, $g_{\ell-1,i}=\sum_jT_{ji}$. A finite sum of square-integrable variables is square-integrable: $(\sum_jT_{ji})^2\le d_\ell\sum_jT_{ji}^2$. By [F7] each pairwise product is integrable. Expanding the mean and centered square, then applying [F6] and expectation linearity [F9], gives exactly the asserted mean and covariance sums, without factoring any dependent variables. [given, F6, F7, F9, algebra]

1.3 Under the conditional assumptions, [F3] and gate independence give $\mathbb E[h_{\ell,j}^2]=\mathbb E[\gamma_{\ell,j}]\mathbb E[g_{\ell,j}^2]=(1-p_\ell)G_\ell/2$ by [F5]. For fixed $i$, the column of weights is centered, independent, and independent of $h_\ell$. Applying [F4] yields mean zero and variance $\sigma_\ell^2\sum_j\mathbb E[h_{\ell,j}^2]=((1-p_\ell)/2)d_\ell\sigma_\ell^2G_\ell$. This also equals the upstream second moment, proving the one-step formula. [given, F3, F4, F5]

2.1 Repeat step 1.3 for the finitely many layers $L,L-1,\ldots,r$. All generated upstream coordinates are centered and have the common second moment in step 1.3, so substitution gives the stated product, including a possibly uncentered terminal signal. Setting $p_\ell=0$ gives the original half-factor formulas and setting $\sigma_\ell^2=2/d_\ell$ makes those factors one. [step 1.3, algebra]

3.1 To prove the feasibility obstruction, let $q=\mathbb P(W_{\ell,11}<0)$. Symmetry and positive variance imply $q>0$: if $q=0$, symmetry gives $\mathbb P(W_{\ell,11}>0)=0$, forcing variance zero. By [F8], the event $E$ that all $d_\ell d_{\ell-1}$ matrix entries are strictly negative has probability $q^{d_\ell d_{\ell-1}}>0$. Since $X_{\ell-1}$ is coordinatewise nonnegative, all coordinates of $Z_\ell$ are nonpositive on $E$, so $\gamma_\ell=0$ and $h_\ell=0$ there, including when the input vector is zero. Independence of $W_\ell$ and $h_\ell$ now gives $0=\mathbb P(E\cap\{h_\ell\ne0\})=\mathbb P(E)\mathbb P(h_\ell\ne0)$, hence $h_\ell=0$ almost surely. If $p_\ell<1$, step 1.3's gate calculation gives $0=\mathbb E[h_{\ell,j}^2]=(1-p_\ell)G_\ell/2$, hence $G_\ell=0$. This proves the obstruction without declaring the valid conditional identities false. [given, F3, F5, F8, step 1.3, algebra] ∎

## Remarks

He et al. §2.2, Eqs. (14)–(16), multiply the atomless half factors under the
stated weight/incoming-gradient and gate/downstream-gradient independence
assumptions. Those are a conditional moment calculation, not a proof of their
realization by a nonzero finite ReLU gradient. Zero atoms also invalidate the
ordinary derivative at those realizations; choosing the zero-at-kink convention
addresses the algorithmic signal but does not establish the independence assumptions.
