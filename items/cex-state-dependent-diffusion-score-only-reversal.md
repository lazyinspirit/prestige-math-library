---
id: cex-state-dependent-diffusion-score-only-reversal
kind: counterexample
title: State-dependent diffusion needs a divergence correction
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion-examples
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-ito-sde-and-strong-solution
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - lem-reversed-kernels-and-generator-identity
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Sections 3–5"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
    - title: "Y. Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Sections 3.2 and Appendix A.3"
      url: "https://ar5iv.labs.arxiv.org/html/2011.13456"
---

## Statement refuted

Assume AC. The claim that every one-dimensional smooth diffusion with drift $b(x)$ and diffusion coefficient $\sigma(x)$ satisfying $\inf_x|\sigma(x)|>0$, $a(x)=\sigma(x)^2$, and positive smooth density $p_t(x)$ reverses with drift $-b(x)+a(x)\partial_x\log p_t(x)$ is false: for a nonconstant state-dependent diffusion, the reverse drift also contains $a'(x)$.

## Statement references

[Anderson, Sections 3–5](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): gives the state-dependent divergence correction.

[Song et al., Sections 3.2 and Appendix A.3](https://ar5iv.labs.arxiv.org/html/2011.13456): downstream use of the full state-dependent correction.

## Facts & Assumptions

**Given:** AC and a standard one-dimensional Brownian motion $W$ with $W_0=0$.

[A1] AC is required by the Itô, SDE, and reverse-time interfaces used here. [[def-axiom-of-choice]]

[F1] Itô's formula for a smooth function of a Brownian-driven process gives drift $\tfrac12h''(W_t)$ and diffusion coefficient $h'(W_t)$ for $h(W_t)$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F2] A $C^1$ diffeomorphism changes a density by multiplying by the absolute derivative of the inverse map. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F3] For a continuous Markov diffusion with positive smooth marginal and transition densities satisfying the forward equations, the backward Kolmogorov condition for its actual forward conditional expectations, and the local weighted integrability and spatial adjoint conditions, the Bayes kernels have extended martingale generator $p^{-1}(L^*(p\phi)-\phi L^*p)$. In dimension one its drift is $-b+a'+a\partial_x\log p$. [[lem-reversed-kernels-and-generator-identity]]

[F4] Globally Lipschitz coefficients with linear growth yield a unique nonexplosive strong solution. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F5] For $t>0$, $W_t$ has the positive normalized density $\phi_t(x)=(2\pi t)^{-1/2}e^{-x^2/(2t)}$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

## Counterexample
**Proof technique:** direct.

1.1 Define $\displaystyle \psi(y)=\begin{cases}\exp\!\left(-\frac1{1-y^2}\right),&|y|<1,\\0,&|y|\ge1.\end{cases}$ Every derivative extends continuously by zero at $y=\pm1$ because $u^{-m}e^{-1/u}\to0$ as $u\downarrow0$ for every integer $m\ge0$; hence $\psi\in C_c^\infty(\mathbb R)$. Its first and second derivatives are bounded, and $\psi''$ is not identically zero, since a compactly supported function with zero second derivative would be affine and therefore zero. Choose $\alpha>0$ with $\alpha\|\psi'\|_\infty<1/2$ and set $h(y)=y+\alpha\psi(y)$. Then $h'(y)=1+\alpha\psi'(y)>1/2$, $h$ equals the identity outside $[-1,1]$, and it is strictly increasing and onto; the inverse function theorem makes it a smooth diffeomorphism. [A1]

2.1 Set $X_t=h(W_t)$ and $z=h^{-1}(x)$. By Itô's formula [F1], $\displaystyle dX_t=b(X_t)dt+\sigma(X_t)dW_t,\qquad b(x)=\tfrac12h''(h^{-1}(x)),\quad \sigma(x)=h'(h^{-1}(x)).$ Because $h'$ is bounded below by $1/2$, and $h''$ and $h'''$ are bounded and vanish outside a compact set, both $b$ and $\sigma$ are globally Lipschitz and bounded. Thus this diffusion is nonexplosive and uniformly elliptic, with $a(x)=\sigma(x)^2$. [F1, F4, step 1.1]

3.1 For $t>0$, $W_t$ has density $\phi_t$ by [F5], and the change-of-variables formula [F2] gives $\displaystyle p_t(x)=\frac{\phi_t(h^{-1}(x))}{h'(h^{-1}(x))}.$ Likewise, for $0\le s<t$ its transition density is $\displaystyle q(s,x;t,y)=\frac{\phi_{t-s}(h^{-1}(y)-h^{-1}(x))}{h'(h^{-1}(y))}.$ These densities are positive and smooth. They satisfy the marginal and Chapman–Kolmogorov identities because they are the images under $h$ of Brownian marginal and transition laws. [F5, F2, step 2.1]

3.2 Write $z=h^{-1}(x)$. Differentiating $a(x)=h'(z)^2$ and using $dz/dx=1/h'(z)$ gives $\displaystyle a'(x)=2h'(z)h''(z)\frac1{h'(z)}=2h''(z).$ Since $h''=\alpha\psi''$ is nonzero at some $y_*$, $a'(h(y_*))\ne0$. [step 1.1, step 2.1]

4.1 Fix $0<\epsilon<T$ and reindex the actual process on $[\epsilon,T]$ as $\bar X_s=X_{\epsilon+s}$ on $[0,T-\epsilon]$. Write $\bar p_s=p_{\epsilon+s}$ and $\bar q(r,x;s,y)=q(\epsilon+r,x;\epsilon+s,y)$. The explicit formulas in step 3.1 are positive and smooth on this shifted interval, satisfy the marginal and Chapman–Kolmogorov identities because they are images of Brownian transition laws under the diffeomorphism $h$, and solve the forward density equations for the coefficients in step 2.1 by direct differentiation and the chain rule. Since $h$ equals the identity outside a compact set, these densities and their differentiated integrands have Gaussian tails; differentiation under transition integrals is absolutely integrable and integration by parts has no boundary term. The new forward analytic conditions can also be checked directly: for $f\in C_c^\infty$, put $F=f\circ h$ and $z=h^{-1}(x)$. Then $F\in C_c^\infty$ and $g_{t,f}(r,x)=\int\phi_{t-r}(w-z)F(w)dw$. Differentiation of the Gaussian convolution, followed by two integrations by parts against $F$, gives $\partial_rg_{t,f}=-L_rg_{t,f}$ and $|L_rg_{t,f}|\le\tfrac12\|F''\|_\infty$; the chain rule gives $L_rg=\tfrac12\partial_{zz}(g\circ h)$. The densities and all weighted coefficients $p b$, $p a$, and $\partial_x(pa)$ are jointly bounded on compact subsets of $[\epsilon,T]\times\mathbb R$, so the displayed local weighted integrals are finite; the spatial adjoint identity follows by compact-support integration by parts. The process is continuous, nonexplosive and Markov. Introduce reverse time $u\in[0,T-\epsilon]$ and $Y_u=\bar X_{T-\epsilon-u}=X_{T-u}$. The local generator lemma applies to this actual reversed process and gives drift $\displaystyle \widetilde b_u(x)=-b(x)+a'(x)+a(x)\partial_x\log p_{T-u}(x).$ For $|x|\ge1$, $h^{-1}(x)=x$, $h'(x)=1$, $h''(x)=0$, and $p_t(x)=\phi_t(x)$, so this drift is $-x/(T-u)$. On $|x|\le1$ it is smooth with bounded state derivative uniformly for $u\in[0,T-\epsilon]$, because $p_t$ has a positive minimum there. Thus $\widetilde b$ is globally Lipschitz with linear growth on the truncated interval; the reverse diffusion coefficient $\sigma$ is bounded, globally Lipschitz, and bounded away from zero. [F3, F4, step 2.1, step 3.1]

5.1 At $x_*=h(y_*)$, the actual reverse generator from [F3] has drift differing from the score-only expression $-b+a\partial_x\log p_t$ by the nonzero amount $a'(x_*)$. Choose $\phi\in C_c^\infty(\mathbb R)$ equal to $x-x_*$ near $x_*$; then $\phi'(x_*)=1$ and $\phi''(x_*)=0$, so the two proposed generators have different values at $x_*$. By continuity, the drift difference remains nonzero on an open interval about $x_*$, and the reversed marginal density is positive there. Thus the score-only coefficient is not the actual reverse generator on a set of positive reversed probability. This refutes the claim. [F3, step 3.2, step 4.1] ∎
