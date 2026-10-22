---
id: lem-ip-conditional-score-and-tweedie-identities
kind: lemma
title: Conditional-score and Tweedie identities for Gaussian smoothing
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
    - title: Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations (2021), arXiv:2011.13456
      url: https://arxiv.org/pdf/2011.13456
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion Models (2026), pp. 363–387; full course notes"
      url: https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html
---

## Statement

Let $d\ge1$, let $\sigma>0$, and let $\mu$ be a probability measure on the Borel subsets of $\mathbb R^d$. Write $\varphi_\sigma(v)=c_{\sigma,d}\exp(-\|v\|^2/(2\sigma^2))$ for the normalized Gaussian density with respect to Lebesgue measure $dx$, define $P_\sigma(du,dx)=\mu(du)\varphi_\sigma(x-u)\,dx$, and set $p_\sigma(x)=\int\varphi_\sigma(x-u)\,\mu(du)$. Define $Q_\sigma(x,du)=\varphi_\sigma(x-u)\mu(du)/p_\sigma(x)$ and $m_\sigma(x)=\int u\,Q_\sigma(x,du)$; under $P_\sigma$, write $X_0(u,x)=u$ and $X_\sigma(u,x)=x$ for the coordinate random vectors, and set $Z=(X_\sigma-X_0)/\sigma$, so $Z\sim N(0,I_d)$ is independent of $X_0$. For Borel maps $h,s:\mathbb R^d\to\mathbb R^d$ that are square-integrable with respect to $p_\sigma(x)dx$, define $R(h)=\int\|h(x)-u\|^2P_\sigma(du,dx)$ and $J(s)=\int\|s(x)-(u-x)/\sigma^2\|^2P_\sigma(du,dx)$. Then $p_\sigma$ is positive and continuously differentiable, $Q_\sigma$ is the conditional law of $X_0$ given $X_\sigma=x$, and $\nabla\log p_\sigma(x)=(m_\sigma(x)-x)/\sigma^2$ for every $x\in\mathbb R^d$. If $\int\|u\|^2\,\mu(du)<\infty$, $m_\sigma$ uniquely minimizes $R$ up to $p_\sigma$-almost-everywhere equality. The unique minimizer of $J$ is $\nabla\log p_\sigma$, also up to $p_\sigma$-almost-everywhere equality. Under the same Gaussian noising, suppose an observation variable $Y$ is conditionally independent of $Z$ given $X_0$, and, for the fixed observation $y$, $\ell_y:\mathbb R^d\to(0,\infty)$ is the bounded Borel conditional density of $Y$ at $y$ given $X_0=u$, relative to a fixed sigma-finite observation measure, and assume $0<Z_y=\int\ell_y(u)\,\mu(du)<\infty$. Let $\mu_y(du)=\ell_y(u)\mu(du)/Z_y$ and $p_\sigma(x\mid y)=\int\varphi_\sigma(x-u)\,\mu_y(du)$. Then, for $r_\sigma(y\mid x)=\int\ell_y(u)\,Q_\sigma(x,du)$, the conditional score satisfies $\nabla_x\log p_\sigma(x\mid y)=\nabla_x\log p_\sigma(x)+\nabla_x\log r_\sigma(y\mid x)$. No absolute-continuity or bounded-support assumption on $\mu$ is required; $\sigma>0$ supplies the full-support smoothing density.

## Statement references

[Daras et al., §2.2 and Appendix A.1–A.2](https://arxiv.org/pdf/2410.00083)

[Song et al., §§3.3 and 5](https://arxiv.org/pdf/2011.13456)

[Prince, Chapter 18, “Diffusion models”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html)

## Facts & Assumptions

**Given:** The probability measure, positive scale, normalized Gaussian density, joint law and likelihood assumptions in the Statement. The denoising risk uses the additional finite-second-moment hypothesis stated there.

[A1] The Gaussian kernel has the normalized density displayed in the Statement and $\sigma>0$. Its first and second derivatives follow by coordinate differentiation; each is a polynomial times a Gaussian exponential and is bounded.

[A2] The observation variable $Y$ is conditionally independent of $Z$ given $X_0$. For the fixed observation $y$, $\ell_y:\mathbb R^d\to(0,\infty)$ is the bounded Borel conditional density of $Y$ at $y$ given $X_0=u$, relative to a fixed sigma-finite observation measure; its normalizer $Z_y$ is finite and positive.

[A3] Denoising estimators and score predictors are Borel measurable and belong to the square-integrable classes named in the Statement.

[F1] A probability kernel assigns a measure to each source point, has measurable evaluation functions, and has total mass one at every source point. [[def-measure-kernel-and-probability-kernel]]

[F2] For sigma-finite measure spaces, nonnegative product-measurable functions have measurable section integrals and the product integral equals either iterated integral. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] A probability measure is a measure of total mass one. [[def-probability-measure]]

[F4] The Borel sigma-algebra is generated by the open sets, and its members are the Borel subsets. [[def-borel-sigma-algebra]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 For $v=x-u$, $\partial_i\varphi_\sigma(v)=-v_i\varphi_\sigma(v)/\sigma^2$ and $\partial_j\partial_i\varphi_\sigma(v)=(v_iv_j/\sigma^4-\delta_{ij}/\sigma^2)\varphi_\sigma(v)$. Each second derivative is bounded, so for every coordinate direction the difference quotient of $\varphi_\sigma(x-u)$ converges to its derivative uniformly in $u$: by the one-variable fundamental theorem of calculus, its error is at most $|h|\sup_v|\partial_{ii}\varphi_\sigma(v)|/2$. Integrating this uniform bound against $\mu$ proves $\partial_i p_\sigma(x)=\int\partial_i\varphi_\sigma(x-u)\,\mu(du)$. The bounded Hessian also makes this derivative continuous in $x$. Boundedness and [F3] give $p_\sigma(x)<\infty$, while strict positivity of $\varphi_\sigma$ and total mass one give $p_\sigma(x)>0$. [A1, F3]

2.1 Tonelli and normalization give $P_\sigma(\mathbb R^d\times\mathbb R^d)=\int\mu(du)\int\varphi_\sigma(x-u)\,dx=1$, so $P_\sigma$ is a probability law. The change of variables $x=u+\sigma z$ gives the joint law $\mu(du)\varphi_1(z)\,dz$ of $(X_0,Z)$, proving the stated Gaussian law and independence. For each Borel $A\subseteq\mathbb R^d$, the numerator $x\mapsto\int_A\varphi_\sigma(x-u)\,\mu(du)$ is continuous because the first derivative of $\varphi_\sigma$ is bounded. Dividing by the positive continuous $p_\sigma$ makes $Q_\sigma(x,A)$ Borel; for fixed $x$, $Q_\sigma(x,\cdot)$ is a probability measure by its defining ratio. Thus $Q_\sigma$ is a probability kernel by [F1]. Tonelli gives $P_\sigma(A\times B)=\int_B p_\sigma(x)Q_\sigma(x,A)\,dx$ for Borel $A,B$, so it is the conditional law of the clean coordinate given $x$. The numerator defining $m_\sigma(x)$ is finite because $\|u\|\varphi_\sigma(x-u)$ is bounded as a function of $u$. For each coordinate, the integrand $u_i\varphi_\sigma(x-u)$ is continuous in $x$ and uniformly bounded in $u$ when $x$ ranges over a compact set, so dominated convergence makes its integral continuous. Since $p_\sigma$ is positive and continuous, $m_\sigma$ is Borel. [A1, F1, F2, F4, step 1.1]

3.1 Substituting the first derivative from step 1.1 gives $\nabla p_\sigma(x)=\int (u-x)\varphi_\sigma(x-u)\,\mu(du)/\sigma^2$. Dividing by $p_\sigma(x)>0$ yields $\nabla\log p_\sigma(x)=(m_\sigma(x)-x)/\sigma^2$. Applying the same Gaussian-convolution calculation to the posterior probability $\mu_y$ shows that $p_\sigma(x\mid y)$ is positive and continuously differentiable. The definitions give $Z_y p_\sigma(x\mid y)=\int\varphi_\sigma(x-u)\ell_y(u)\mu(du)=p_\sigma(x)r_\sigma(y\mid x)$. Taking logarithms and differentiating in $x$, with $Z_y$ independent of $x$, gives the conditional-score decomposition. [A1, A2, step 1.1, step 2.1, algebra]

3.2 By step 2.1, $R(h)=\int p_\sigma(x)\int\|h(x)-u\|^2Q_\sigma(x,du)\,dx$, with the iterated-integral identity justified by [F2]. Nonnegativity of $\int\|u-m_\sigma(x)\|^2Q_\sigma(x,du)$ gives $\|m_\sigma(x)\|^2\le\int\|u\|^2Q_\sigma(x,du)$; integrating and using [F2] proves $m_\sigma\in L^2(p_\sigma)$ under the finite-second-moment hypothesis. Expanding about $m_\sigma(x)$ makes the cross term vanish because $\int u\,Q_\sigma(x,du)=m_\sigma(x)$, so $R(h)=R(m_\sigma)+\int\|h(x)-m_\sigma(x)\|^2p_\sigma(x)\,dx$. The last term is nonnegative and vanishes exactly for the same $p_\sigma$-almost-everywhere class. [A3, F2, step 2.1, algebra]

4.1 The conditional mean of $(u-x)/\sigma^2$ under $Q_\sigma(x,du)$ is $(m_\sigma(x)-x)/\sigma^2=\nabla\log p_\sigma(x)$ by step 3.1. The noise target has finite second moment because $\int\|v\|^2\varphi_\sigma(v)\,dv<\infty$; the conditional-mean square bound then puts $\nabla\log p_\sigma$ in $L^2(p_\sigma)$. Expanding the squared score risk around that conditional mean gives $J(s)=J(\nabla\log p_\sigma)+\int\|s(x)-\nabla\log p_\sigma(x)\|^2p_\sigma(x)\,dx$, so the unique score-risk minimizer is the stated score. Under the finite-second-moment hypothesis of step 3.2, $x$ and $m_\sigma(x)$ are in $L^2(p_\sigma)$; then $s\mapsto h(x)=x+\sigma^2s(x)$ is a bijection between the two predictor classes and $R(h)=\sigma^4J(s)$, proving the claimed denoiser/score minimizer equivalence. [A3, F2, step 3.1, step 3.2, algebra] ∎
