---
id: ex-fan-in-versus-fan-out-initialization
kind: example
title: "Fan-in and fan-out target different signal directions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-rectifier-variance-preserving-initialization
  - thm-relu-backward-variance-recurrence
  - thm-relu-forward-variance-recurrence
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, Delving Deep into Rectifiers, §2.2"
      url: "https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf"
    - title: "Simon J. D. Prince, Understanding Deep Learning, §7.5.1–7.5.3"
      url: "https://github.com/udlbook/udlbook/releases/download/v2.0.2/UnderstandingDeepLearning_03_06_24_C.pdf"
    - title: "Johns Hopkins University, Handout #8: Neural Network Training and Tokenization, §3"
      url: "https://self-supervised.cs.jhu.edu/fa2026/files/readings/08.stable-training.html"
---

## Example

Consider one zero-bias ReLU layer with 64 inputs and 128 outputs, iid centered
symmetric weights of finite variance $\sigma^2$, and iid layer-input
coordinates with a common finite second moment, independent of the weights. Assume its
preactivations are symmetric with no atom at zero, the ReLU gate vector is
independent of the downstream gradient vector, and the weight matrix is
independent of the gated incoming gradient vector. Suppose the preceding
preactivation has variance $V>0$ and the downstream gradient is centered with
variance $G>0$. Compare the forward-preserving weight variance $2/64$ with the
backward-preserving variance $2/128$, and compute the multiplicative factors
applied to $V$ and $G$ by each choice.

## Diagram

The top row represents the forward linear map and ReLU; the lower row shows the
reverse-mode maps with $D_\ell=\operatorname{diag}(\mathbf 1_{Z_{\ell,j}>0})$.
Each box denotes the full vector of the stated dimension, and the arrow labelled
$W_\ell$ denotes the $128\times64$ matrix, not a single scalar edge. Thus the
forward fan-in is 64 and the backward fan-out is 128. The diagram illustrates
these dimensions; the verification below uses the recurrence formulas directly.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners] (x) at (-4,1) {$X_{\ell-1}\in\mathbb R^{64}$};
  \node[draw,rounded corners] (z) at (0,1) {$Z_\ell\in\mathbb R^{128}$};
  \node[draw,rounded corners] (y) at (4,1) {$X_\ell\in\mathbb R^{128}$};
  \draw[->] (x) -- node[above] {$W_\ell$} (z);
  \draw[->] (z) -- node[above] {$\rho$} (y);
  \node[draw,rounded corners] (g0) at (-4,-1) {$g_{\ell-1}\in\mathbb R^{64}$};
  \node[draw,rounded corners] (h) at (0,-1) {$h_\ell\in\mathbb R^{128}$};
  \node[draw,rounded corners] (g1) at (4,-1) {$g_\ell\in\mathbb R^{128}$};
  \draw[<-] (g0) -- node[below] {$W_\ell^{\mathsf T}$} (h);
  \draw[<-] (h) -- node[below] {$D_\ell$} (g1);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The layer model and widths in the Example, with forward preactivation variance $V$ and centered downstream gradient variance $G$.

[F1] Forward mode uses weight variance $2/n_\ell$, and backward mode uses $2/\hat n_\ell$. ([[alg-rectifier-variance-preserving-initialization]])

[F2] The forward preactivation variance factor is $n_\ell\sigma_\ell^2/2$. ([[thm-relu-forward-variance-recurrence]])

[F3] For centered downstream gradients, the backward gradient-variance factor is $\hat n_\ell\sigma_\ell^2/2$. ([[thm-relu-backward-variance-recurrence]])

## Verification

1.1 With fan-in variance $\sigma^2=2/64=1/32$, the forward factor is $\frac12(64)(1/32)=1$, so $V$ is preserved. The backward factor is $\frac12(128)(1/32)=2$, so the gradient variance becomes $2G$. [given, F1, F2, F3, algebra]

1.2 With fan-out variance $\sigma^2=2/128=1/64$, the backward factor is $\frac12(128)(1/64)=1$, so $G$ is preserved. The forward factor is $\frac12(64)(1/64)=1/2$, so the next preactivation variance is $V/2$. [given, F1, F2, F3, algebra]

2.1 Since the two widths differ, the required variances $1/32$ and $1/64$ differ, and the example's two scales cannot preserve both recurrences with one weight variance. [step 1.1, step 1.2, algebra] ∎
