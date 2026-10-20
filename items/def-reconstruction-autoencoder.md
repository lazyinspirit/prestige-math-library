---
id: def-reconstruction-autoencoder
kind: definition
title: "Reconstruction autoencoder and denoising risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - def-random-element-and-real-random-variable
  - def-measurable-function-between-measurable-spaces
  - def-measurable-space
  - def-sigma-algebra
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-expectation-on-a-finite-probability-space
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
    - title: "Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, and Ross Girshick, Masked Autoencoders Are Scalable Vision Learners, §§3.1–3.3"
      url: "https://arxiv.org/pdf/2111.06377"
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning, §14.5"
      url: "https://www.deeplearningbook.org/contents/autoencoders.html"
    - title: "Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol, Extracting and Composing Robust Features with Denoising Autoencoders, §§2.2–2.3"
      url: "https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf"
---

## Definition

Fix integers $M,q\ge1$, set $[M]=\{1,\ldots,M\}$, and write the image space on a fixed patch grid as $\mathcal X=(\mathbb R^q)^M$. A measurable space is a set with a specified sigma-algebra; equip $\mathcal X$ and a finite-dimensional latent space $\mathcal Z$ with such structures. An image is $x=(x_1,\ldots,x_M)\in\mathcal X$, with $q$ real pixel values in each of its $M$ patches. Let $S=(x^{(1)},\ldots,x^{(n)})$ be a finite training set with $n\ge1$. For $u\in\mathbb R^q$, set $\|u\|_2^2=\sum_{r=1}^q u_r^2$. For $V\subseteq[M]$ let $\mathcal Z^V=\{(z_j)_{j\in V}:z_j\in\mathcal Z\}$. For unmasked reconstruction, the encoder and decoder are deterministic measurable maps $E_\phi:\mathcal X\to\mathcal Z$ and $D_\psi:\mathcal Z\to\mathcal X$. For masked reconstruction, the encoder is a measurable deterministic map $(V,(x_j)_{j\in V})\mapsto(z_j)_{j\in V}\in\mathcal Z^V$, and the decoder maps the ordered length-$M$ sequence of encoded visible tokens and mask tokens to an element of $\mathcal X$. Each mask token is one learned vector $m\in\mathcal Z$ reused at every masked position. All maps take finite real values; when implemented by feedforward neural networks, each is a finite computation graph evaluated in the layered order of its vertices.

Let $X:\Omega\to\mathcal X$ be a measurable random image on a probability space. Assume that the displayed squared-loss random variables are measurable. The **population reconstruction risk** is
$$R_{\rm rec}(\phi,\psi;X):=\mathbb E\left[\frac1{Mq}\sum_{j=1}^M\|D_\psi(E_\phi(X))_j-X_j\|_2^2\right]\in[0,+\infty].$$
A stochastic denoising corruption is any measurable random image $\widetilde X:\Omega\to\mathcal X$ on the same probability space as the clean image $X$; their dependence may be arbitrary, with no restriction on support. The **population denoising risk** reconstructs the clean image:
$$R_{\rm den}(\phi,\psi;X,\widetilde X):=\mathbb E\left[\frac1{Mq}\sum_{j=1}^M\|D_\psi(E_\phi(\widetilde X))_j-X_j\|_2^2\right]\in[0,+\infty].$$
These expectations use the extended integral of a nonnegative measurable random variable, so they may be infinite.

The **empirical reconstruction risk** on uncorrupted images is
$$R_{\rm rec}^{\rm emp}(\phi,\psi;S):=\frac1{nMq}\sum_{i=1}^n\sum_{j=1}^M\|D_\psi(E_\phi(x^{(i)}))_j-x^{(i)}_j\|_2^2.$$

A **finite denoising corruption law** assigns to each training image $x^{(i)}$ a finite set $C_i$ of corrupted images and weights $c_i(\tilde x)\ge0$ with $\sum_{\tilde x\in C_i}c_i(\tilde x)=1$. The empirical denoising risk is the finite-support specialization of the population risk:
$$R_{\rm den}^{\rm emp}(\phi,\psi;S,C):=\frac1n\sum_{i=1}^n\sum_{\tilde x\in C_i}c_i(\tilde x)\frac1{Mq}\sum_{j=1}^M\|D_\psi(E_\phi(\tilde x))_j-x^{(i)}_j\|_2^2.$$

For masked autoencoding, fix an integer $k$ with $1\le k<M$ and let $\mathcal V_k=\{V\subseteq[M]:|V|=k\}$, a set with cardinality $\binom{M}{k}$. A mask $V$ is sampled uniformly from $\mathcal V_k$; the patches in $V$ are visible and the patches in $[M]\setminus V$ are masked. The encoder receives only the visible patches, with their positions, and no mask tokens. The decoder receives the encoded visible patches and a shared learned mask token at each missing position, with position information for all $M$ slots, and outputs predictions $\hat x_j(\phi,\psi;x,V)\in\mathbb R^q$ for every patch position.

The original-pixel target map is $T_{\rm raw}(u)=u$. The optional normalized-pixel target is defined for $u=(u_1,\ldots,u_q)$ with positive standard deviation by
$$\bar u:=\frac1q\sum_{r=1}^q u_r,\qquad s(u):=\left(\frac1q\sum_{r=1}^q(u_r-\bar u)^2\right)^{1/2}>0,\qquad T_{\rm norm}(u):=\frac{u-\bar u\mathbf 1}{s(u)},$$
where $\mathbf 1=(1,\ldots,1)\in\mathbb R^q$.
The target choice $T$ is one of these maps. Define
$$\mathcal D_{\rm norm}:=\{x\in\mathcal X:s(x_j)>0\text{ for every }j\in[M]\}.$$
For $T=T_{\rm norm}$, the masked-objective formulas below are defined only on $\mathcal D_{\rm norm}$, so a finite empirical objective requires $x^{(i)}\in\mathcal D_{\rm norm}$ for every $i$. For a population objective, require the event $A:=\{X\in\mathcal D_{\rm norm}\}$ to be measurable with $\mathbb P(A)=1$; interpret each loss integrand by its displayed formula on $A$ and by $0$ on $A^c$. Since $A^c$ is null, any other measurable extension there gives the same expectation. The raw target has no such restriction. The **per-example masked-patch mean squared error**, its population objective, and its finite empirical objective are
$$\ell_{\rm MAE}(\phi,\psi;x,V,T):=\frac1{(M-k)q}\sum_{j\in[M]\setminus V}\|\hat x_j(\phi,\psi;x,V)-T(x_j)\|_2^2,$$
$$R_{\rm MAE}(\phi,\psi;X,k,T):=\frac1{\binom Mk}\sum_{V\in\mathcal V_k}\mathbb E[\ell_{\rm MAE}(\phi,\psi;X,V,T)],$$
$$R_{\rm MAE}^{\rm emp}(\phi,\psi;S,k,T):=\frac1{n\binom Mk}\sum_{i=1}^n\sum_{V\in\mathcal V_k}\ell_{\rm MAE}(\phi,\psi;x^{(i)},V,T).$$
The population objective averages the expectation over the image law for each fixed mask; equivalently, it is the joint expectation for an independent uniform mask. The finite empirical objective averages over every training image and mask.

Because the encoder input and decoder output depend on $V$ and the loss is evaluated only on $[M]\setminus V$, this is an expectation of a mask-dependent loss. It is not defined as an estimator of the separate full-image risk $R_{\rm rec}$, and no equality or unbiasedness between these objectives is asserted. Neither loss alone guarantees that a learned code retains distinctions needed for a downstream label (semantic sufficiency), uniquely determines an underlying data-generating parameter (identifiability), or improves performance on a specified later task (downstream feature quality).

## Definition references

[[def-feedforward-neural-network]]: a feedforward network is a finite acyclic computation graph whose node values are evaluated in a specified order.

[[def-expectation-on-a-finite-probability-space]]: expectation on a finite probability space is the weighted finite sum.

[[def-probability-measure]]: a probability measure has total mass one and defines a probability space.

[[def-random-element-and-real-random-variable]]: a random image is a measurable map from a probability space into the image space.

[[def-measurable-function-between-measurable-spaces]]: a map is measurable when preimages of measurable sets are measurable.

[[def-measurable-space]]: a measurable space consists of a set and a sigma-algebra of its measurable subsets.

[[def-sigma-algebra]]: a sigma-algebra is closed under complements and countable unions.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a nonnegative measurable loss is its extended-valued integral.

[He et al., §§3.1–3.3: uniform random patch masking, visible-only encoder, mask-token decoder, masked-pixel MSE, and normalized-pixel target](https://arxiv.org/pdf/2111.06377)

[Goodfellow et al., §14.5, pp. 507–508: denoising corruption and clean-target reconstruction objective](https://www.deeplearningbook.org/contents/autoencoders.html)

[Vincent et al., §§2.2–2.3, equations (1), (3), and (5): reconstruction risk and stochastic corruption with clean target](https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf)
