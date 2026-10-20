---
id: cor-masked-diffusion-finite-elbo-cross-entropy
kind: corollary
title: Negative expected finite masked-diffusion ELBO is weighted cross-entropy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-finite-grid-masked-diffusion-sampler
  - def-axiom-of-choice
  - def-finite-masked-diffusion-generative-model
  - def-finite-kullback-leibler-divergence
  - def-finite-masking-diffusion-chain
  - def-variational-family-and-elbo
  - lem-finite-grid-masked-sampler-is-well-defined
  - lem-finite-masked-generative-joint-law-is-normalized
  - lem-forward-path-is-admissible-for-finite-masked-model
  - lem-finite-masking-chain-is-well-defined
  - lem-finite-masking-path-reversal-factorization
  - thm-elbo-kl-decomposition
  - thm-masked-diffusion-kl-reduces-to-cross-entropy
justified_by: []
proof_strategy: direct
axiom_use: "AC is used only in the application of thm-elbo-kl-decomposition to identify and bound the library KL. The finite path, support, and cross-entropy calculations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "Appendix A.2.4 and B.1, finite latent-chain ELBO and endpoint terms"
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians"
      url: https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf
      locator: "§2.2, Eqs. (11)–(14), ELBO/reverse-KL identity"
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, CMU 10-708 Lecture 13: Variational Inference II"
      url: https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf
      locator: "Complete §2.3.2, Jensen lower bound and negative-ELBO-plus-log-evidence identity"
---

## Statement

Assume the Axiom of Choice. Let $V$ be finite and nonempty, $m\notin V$, $L,N\ge1$, $1=\alpha_0>\cdots>\alpha_N=0$, and let $X\sim\mu$ for a probability vector $\mu$ on $V^L$. Put $S=(V\cup\{m\})^L$. Conditional on $X=x$, let $q_x$ be the finite forward masking path law started at $Z_0=x$: at step $j$, each clean coordinate survives with probability $\alpha_j/\alpha_{j-1}$ and otherwise becomes the absorbing mask $m$, independently across coordinates. For every position $i$, reverse step $j$, state $z\in S$ with $z_i=m$, and token $v\in V$, assume $h_{i,j}(z)(v)>0$, where each $h_{i,j}(z)$ is a probability vector on $V$. Put $c_j=(\alpha_{j-1}-\alpha_j)/(1-\alpha_j)$ and $d_j=(1-\alpha_{j-1})/(1-\alpha_j)$. Define the reverse kernel $P_j$ by copying every unmasked coordinate and, independently across masked positions conditional on $z_j$, assigning mass $d_j$ to $m$ and mass $c_jh_{i,j}(z_j)(v)$ to each $v\in V$. Use the point mass at $m^L$ as terminal prior and the decoder $\operatorname{Dec}(x\mid z_0)=\mathbf1_{\{x=z_0\}}$ when $z_0\in V^L$, while $\operatorname{Dec}(x\mid z_0)=|V|^{-L}$ otherwise. Define
$$p(x,z_0,\ldots,z_N)=\mathbf1_{\{z_N=m^L\}}\left(\prod_{j=1}^N P_j(z_j,z_{j-1})\right)\operatorname{Dec}(x\mid z_0),\qquad p(x)=\sum_{z_0,\ldots,z_N}p(x,z_0,\ldots,z_N).$$
For each $x\in V^L$, let $\pi_x(z)=p(x,z)/p(x)$ whenever $p(x)>0$ and define the finite ELBO $\mathcal E(x)=\sum_{z:q_x(z)>0}q_x(z)\log\bigl(p(x,z)/q_x(z)\bigr)$. Here admissibility means $q_x$ is supported where $p(x,\cdot)>0$ and the finite weighted logarithm sums required for the ELBO are finite. Let $P_{j,i}^{\mathrm{mask}}$ be the conditional law of $(Z_j,X_i)$ given $Z_{j,i}=m$, and let $R_{j,i}=\mathbb E[-\log h_{i,j}(Z_j)(X_i)\mid Z_{j,i}=m]$, with $-\log0=+\infty$. For probability vectors $u,v$ on a finite set, write $D_{\mathrm{KL}}(u\|v)=\sum_{a:u(a)>0}u(a)\log(u(a)/v(a))$, with zero source terms set to zero and positive source mass against zero reference mass set to $+\infty$. Then $p(x)>0$, $q_x$ is admissible, and for every $x$,
$$\log p(x)=\mathcal E(x)+D_{\mathrm{KL}}(q_x\|\pi_x),\qquad \mathcal E(x)\le\log p(x).$$
Moreover, averaging over $X\sim\mu$ gives
$$\mathbb E[-\mathcal E(X)]=\sum_{j=1}^N\sum_{i=1}^L(\alpha_{j-1}-\alpha_j)R_{j,i}.$$
The reconstruction term and terminal-prior KL vanish here because the endpoints are exactly clean and all-masked; with approximate endpoints, the ordinary ELBO retains those terms and this corollary does not discard them.

## Statement references

[[def-finite-masked-diffusion-generative-model]]: defines $P_j$, the terminal point mass, decoder $D$, and finite joint path mass.

[[lem-forward-path-is-admissible-for-finite-masked-model]]: full support of $h$ makes $p(x)>0$ and the forward path law admissible.

[[thm-masked-diffusion-kl-reduces-to-cross-entropy]]: each averaged finite reverse-KL contribution equals the weighted conditional masked-token population risk.

[[lem-finite-masking-path-reversal-factorization]]: the positive forward path law factors in reverse order by its one-step posterior rows.

[[thm-elbo-kl-decomposition]]: under AC and admissibility, log evidence is ELBO plus the reverse KL and therefore bounds the ELBO above.

## Facts & Assumptions

**Given:** Choice, the exact finite masked chain and learned reverse model, the full-support hypothesis, the stated decoder/prior, and the finite ELBO definition. Prove admissibility, the ELBO identity and bound, and the averaged cross-entropy formula.

[A1] [[def-axiom-of-choice]]: AC is the axiom that every family of nonempty sets has a choice function; it is used only through the library ELBO/KL theorem.

[F1] [[def-finite-masked-diffusion-generative-model]]: the reverse kernels, terminal prior, decoder, and joint mass define the model.

[F2] [[lem-finite-masked-generative-joint-law-is-normalized]]: the finite joint model is a probability vector.

[F3] [[lem-forward-path-is-admissible-for-finite-masked-model]]: for each clean $x$, the forward path law is supported where $p(x,z)>0$ and satisfies the variational absolute-log-integrability condition.

[F4] [[def-variational-family-and-elbo]]: admissible $q$ has finite evidence and log integrability, and its ELBO is $\int q(\log\gamma-\log q)$.

[F5] [[thm-elbo-kl-decomposition]]: under AC and admissibility, $\log Z=\operatorname{ELBO}(q)+\int q\log(q/\pi)\,d\mu$, the log-ratio integral is the library divergence $D(Q\|\Pi)$, and $D(Q\|\Pi)\ge0$.

[F6] [[lem-finite-masking-path-reversal-factorization]]: on positive paths, $q_x(z_{0:N})=q_x(z_N)\prod_{j=N}^1q_x(z_{j-1}\mid z_j,x)$.

[F7] [[thm-masked-diffusion-kl-reduces-to-cross-entropy]]: the data-averaged sum of conditional reverse KL terms is the stated weighted cross-entropy risk.

[F8] [[def-finite-kullback-leibler-divergence]]: for finite probability vectors, the directional KL is the finite expectation of the log likelihood ratio, with singular positive-mass terms equal to $+\infty$.

## Proof

1.1 Fix $x\in V^L$ and take counting measure on the finite path space $S^{N+1}$. By [F2], $\gamma_x(z)=p(x,z)$ has finite normalizer $Z_x=p(x)\le1$; by [F3], $0<Z_x$ and $q_x$ is admissible for $\gamma_x$. Under this counting measure, the induced probability laws assign singleton masses $q_x(z)$ and $\pi_x(z)$. Admissibility gives $q_x(z)>0\Rightarrow\pi_x(z)>0$, so the ratio integral in [F5] is the finite sum $\sum_{z:q_x(z)>0}q_x(z)\log(q_x(z)/\pi_x(z))$, which is exactly $D_{\mathrm{KL}}(q_x\|\pi_x)$ by [F8]. Applying [F5] with [A1] therefore gives $\log p(x)=\mathcal E(x)+D_{\mathrm{KL}}(q_x\|\pi_x)$ and $\mathcal E(x)\le\log p(x)$. [A1, F2, F3, F4, F5, F8, given]

1.2 The forward path formula forces $Z_0=x$. For each coordinate, the product of forward survival ratios is $\alpha_N=0$, so the finite forward law assigns probability one to $Z_N=m^L$; thus on every $q_x$-positive path the decoder and prior factors in [F1] are both one. By [F6], $q_x(z_{0:N})=q_x(z_N)\prod_{j=N}^1q_x(z_{j-1}\mid z_j,x)$ on this path, and $q_x(z_N)=1$. Therefore $\log(p(x,z)/q_x(z))$ is the sum of the reverse-step log ratios. By [F8], the conditional expectation of each log ratio is the negative finite KL term, so $\mathcal E(x)=-\sum_{j=1}^N\mathcal L_j(x)$, where $\mathcal L_j(x)=\mathbb E_{Z_j\mid X=x}D_{\mathrm{KL}}(q(Z_{j-1}\mid Z_j,x)\|P_j(Z_j,\cdot))$. [F1, F3, F6, F8, given, algebra]

2.1 Average the identity from step 1.2 over $X\sim\mu$. The resulting expected sum of $\mathcal L_j(X)$ is exactly the left side of the finite KL-to-risk identity in [F7]; substituting [F7] yields $\mathbb E[-\mathcal E(X)]=\sum_{j,i}(\alpha_{j-1}-\alpha_j)R_{j,i}$. [F7, step 1.2, algebra]

3.1 The endpoint cancellation in step 1.2 uses $Z_0=x$ from $\alpha_0=1$ and $Z_N=m^L$ from $\alpha_N=0$. If either endpoint is changed, its decoder reconstruction or terminal-prior KL factor remains in the finite log-ratio expansion unless a separate hypothesis makes it vanish. [F1, F3, step 1.2, algebra] ∎
