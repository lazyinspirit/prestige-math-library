---
id: alg-masked-autoencoder-pretraining
kind: algorithm
title: "Masked autoencoder pretraining"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-reconstruction-autoencoder
  - def-feedforward-neural-network
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, and Ross Girshick, Masked Autoencoders Are Scalable Vision Learners, §§3.1–3.3 and Appendix A.1"
      url: "https://arxiv.org/pdf/2111.06377"
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning, §14.5"
      url: "https://www.deeplearningbook.org/contents/autoencoders.html"
    - title: "Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol, Extracting and Composing Robust Features with Denoising Autoencoders, §§2.2–2.3"
      url: "https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf"
---

## Definition

Let $S=(x^{(1)},\ldots,x^{(n)})$ be a finite image training set with $n\ge1$ on a fixed grid with $M,q\ge1$ (that is, $M$ patches of $q$ pixel values each). Choose a visible count $k$ with $1\le k<M$, a finite update count $J\ge0$, differentiable encoder and decoder families parameterized by $\theta=(\phi,\psi,m)\in\Theta\subseteq\mathbb R^p$, an initial parameter vector $\theta_0\in\Theta$, an optimizer state set $\mathcal S$, and an initial optimizer state $s_0\in\mathcal S$. Choose either the original-pixel target $T(u)=u$ or, provided every patch of every training image has positive standard deviation, the normalized target $T(u)=(u-\bar u\mathbf 1)/s(u)$, where $\bar u=q^{-1}\sum_{r=1}^q u_r$ and $s(u)=(q^{-1}\sum_{r=1}^q(u_r-\bar u)^2)^{1/2}$. For each $V\subseteq[M]$ with $|V|=k$, the encoder is a map from $V$ and the visible patch values to one encoded token at each position in $V$; it receives no mask tokens. The decoder is a map from the ordered length-$M$ sequence of encoded visible tokens and one shared learned vector $m$ at every position in $[M]\setminus V$ to predictions $\hat x_j\in\mathbb R^q$ at every patch position. Position $j$ is supplied to the maps as its index. Require that the masked mean squared error
$$\frac1{(M-k)q}\sum_{j\in[M]\setminus V}\|\hat x_j-T(x_j)\|_2^2$$
has a finite parameter gradient at every iterate reached by the procedure.

An **optimizer update schedule** is a supplied finite family of maps $U_t:(\Theta\times\mathcal S)\times\mathbb R^p\to\Theta\times\mathcal S$ for $0\le t<J$, each defined on its entire displayed domain. When $\Theta=\mathbb R^p$, plain stochastic gradient descent with step sizes $\eta_t>0$ is the special case $U_t((\theta,s),g)=(\theta-\eta_tg,s)$.

For each $t=0,\ldots,J-1$, perform the following steps.

1. Sample $I_t$ uniformly from $\{1,\ldots,n\}$ and, independently, sample $V_t$ uniformly from $\mathcal V_k=\{V\subseteq[M]:|V|=k\}$. Sampling is with replacement across different update steps.
2. Apply the encoder to the visible patch values at positions in $V_t$. Restore their original order, insert the shared learned vector $m$ at every position in $[M]\setminus V_t$, and supply each position index to the decoder. Apply the decoder to this full ordered sequence to obtain $\hat x_{t,j}\in\mathbb R^q$ for every $j\in[M]$.
3. Compute $L_t=((M-k)q)^{-1}\sum_{j\in[M]\setminus V_t}\|\hat x_{t,j}-T(x^{(I_t)}_j)\|_2^2$, compute $g_t=\nabla_\theta L_t$, and update $(\theta_{t+1},s_{t+1})=U_t((\theta_t,s_t),g_t)$.

Return the trained encoder $E_{\phi_J}$ and parameter vector $\theta_J$. The decoder is used during pretraining and may be discarded afterward. The mask ratio is $\rho=(M-k)/M$. The procedure defines finite stochastic updates only; it does not assert that the updates converge to a minimizer or that the returned representation is semantically sufficient.

The diagram records the data flow. Solid arrows pass data or predictions; the bottom comparison uses only positions in $[M]\setminus V$. The definitions and numbered instructions specify the algorithm completely, and no proof or property relies on the diagram.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.78,transform shape]
  \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (input) at (0,0) {Input patch\\sequence};
  \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (mask) at (2.7,0) {Uniformly sample\\visible positions};
  \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (enc) at (5.4,0) {Encoder sees\\visible patches only};
  \node[draw,rounded corners,align=center,minimum width=2.4cm,minimum height=0.8cm] (restore) at (8.3,0) {Insert learned tokens\\at missing positions};
  \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (dec) at (11.2,0) {Decoder};
  \node[draw,rounded corners,align=center,minimum width=2.3cm,minimum height=0.8cm] (pred) at (14,0) {Predictions at\\all positions};
  \node[draw,rounded corners,align=center,minimum width=3.0cm,minimum height=0.8cm] (loss) at (8.3,-1.7) {Masked-patch MSE\\only};
  \node[draw,rounded corners,align=center,minimum width=2.8cm,minimum height=0.8cm] (target) at (3.4,-1.7) {Clean targets at\\missing positions};
  \draw[->] (input) -- (mask);
  \draw[->] (mask) -- node[above] {visible subset} (enc);
  \draw[->] (enc) -- (restore);
  \draw[->] (restore) -- (dec);
  \draw[->] (dec) -- (pred);
  \draw[->] (pred) |- (loss);
  \draw[->] (target) -- (loss);
\end{tikzpicture}
```

## Definition references

[[def-reconstruction-autoencoder]]: fixes the image-patch domain, visible/masked convention, raw and normalized target maps, and finite masked-MSE objective.

[[def-feedforward-neural-network]]: defines the finite feedforward computation graph used for encoder/decoder network notation.

[He et al., §§3.1–3.3: mask sampling, visible-only encoder, mask-token decoder, and masked-pixel objective](https://arxiv.org/pdf/2111.06377)

[He et al., Appendix A.1, pretraining setting: AdamW and reported hyperparameters](https://arxiv.org/pdf/2111.06377)

[Goodfellow et al., §14.5: corrupt-input/clean-target denoising procedure](https://www.deeplearningbook.org/contents/autoencoders.html)

[Vincent et al., §2.3, equation (5): sampling a corruption and updating toward reconstruction of the clean example](https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf)
