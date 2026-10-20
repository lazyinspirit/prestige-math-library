---
id: lem-reversed-smoothing-generator-and-martingale
kind: lemma
title: Generator and martingale problem for reversed Gaussian smoothing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 4
deps:
- def-axiom-of-choice
- def-bayes-reversed-gaussian-smoothing-kernels
- thm-dominated-convergence
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-gaussian-mixture-score-and-global-lipschitz-bound
- thm-gaussian-smoothing-density-and-forward-equation
- def-gaussian-smoothed-data-law-and-transition-density
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
  - title: 'Y. Tang and H. Zhao, Score-based diffusion models via stochastic differential
      equations: a technical tutorial, Section 2.2'
    url: https://arxiv.org/pdf/2402.07487
  - title: B. D. O. Anderson, Reverse-time diffusion equation models, Section 5
    url: https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf
---

## Statement

Assume AC and the compactly supported Gaussian smoothing setup: $X_t=X_0+\int_0^t g(r)dW_r$, with $X_0\sim\mu$ compactly supported, scalar $g\in C^1([0,T])$ bounded above and away from zero, $v(t)=\int_0^t g(r)^2dr$, $p_t(x)=\int\phi_{v(t)}(x-z)\mu(dz)$ for $t>0$, and forward transition density $q(s,x;t,y)=\phi_{v(t)-v(s)}(y-x)$. Fix $0<\epsilon<T$, put $Y_u=X_{T-u}$ for $0\le u\le T-\epsilon$, and use the Bayes-reversed kernels from the preceding definition. For $s_t=\nabla\log p_t$, define
$$\widetilde L_u\varphi(y)=g(T-u)^2\left(s_{T-u}(y)\cdot\nabla\varphi(y)+\tfrac12\Delta\varphi(y)\right),\qquad \varphi\in C_c^\infty(\mathbb R^d).$$
Then $Y$ is Markov with those reversed kernels, and for every $\varphi\in C_c^\infty$ the process
$$\varphi(Y_v)-\varphi(Y_0)-\int_0^v\widetilde L_r\varphi(Y_r)\,dr,\qquad 0\le v\le T-\epsilon,$$
is a martingale in the natural reversed filtration. The assertion is restricted to forward times at least $\epsilon$; it makes no score or density claim at $t=0$.

## Statement references

[Tang and Zhao, Section 2.2, PDF pp. 3–5](https://arxiv.org/pdf/2402.07487): gives the plus-score reverse-drift formula and identifies the derivation as heuristic; the local argument below supplies the generator and martingale proof.

[Anderson, Section 5, printed pp. 322–324](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): context for the reverse Kolmogorov calculation.

## Facts & Assumptions

**Given:** AC, $\mu$, $g$, $v$, $p_t$, $q$, and $\epsilon$ as in the statement.

[A1] AC is assumed by the Gaussian smoothing, density, and score suppliers; their actual positive-time density and heat-equation claims apply to compactly supported arbitrary Borel $\mu$ and do not assert a density at zero. [[def-axiom-of-choice]] [[def-gaussian-smoothed-data-law-and-transition-density]] [[thm-gaussian-smoothing-density-and-forward-equation]] [[thm-gaussian-mixture-score-and-global-lipschitz-bound]]

[F1] For $t>0$, $p_t$ is positive and smooth and satisfies $\partial_t p_t=\tfrac12g(t)^2\Delta p_t$; $q$ is the Gaussian transition density and obeys the forward marginal and Chapman–Kolmogorov identities. [[def-gaussian-smoothed-data-law-and-transition-density]] [[thm-gaussian-smoothing-density-and-forward-equation]]

[F2] The score obeys $s_t=\nabla\log p_t$ and is smooth on every interval $[\epsilon,T]$. [[thm-gaussian-mixture-score-and-global-lipschitz-bound]]

[F3] The reverse kernels are probability kernels satisfying reverse Chapman–Kolmogorov, including the endpoint posterior against $\mu$. [[def-bayes-reversed-gaussian-smoothing-kernels]]

[F4] Dominated convergence justifies the positive-time small-interval limit on compact test supports; Fubini justifies composing the transition integrals. [[thm-dominated-convergence]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof
**Given:** the hypotheses and notation in the Statement.

1.1 The Gaussian forward process is Markov by independent increments of its deterministic Itô integral. Bayes' formula gives the reversed conditional law of $X_{T-v}$ given $X_{T-u}=y$ as $K_{u,v}(y,dx)$; the density supplier's marginal identity normalizes it, and [F3] gives reverse Chapman–Kolmogorov. Thus $Y$ is Markov with these kernels. [F3, A1, F1]

1.2 Put $t=T-u$ and $\delta v=v(t)-v(t-h)$ for $h>0$. For $u+h\le T-\epsilon$, the reverse transition formula gives $\displaystyle K_{u,u+h}\varphi(y)=\frac{1}{p_t(y)}\int \varphi(x)p_{t-h}(x)\phi_{\delta v}(y-x)\,dx.$ The heat-kernel expansion, justified on the compact support of $\varphi$ by [F1, F4], is $\displaystyle \int \varphi(x)p_{t-h}(x)\phi_{\delta v}(y-x)dx=p_t(y)\varphi(y)+\frac{\delta v}{2}\left(\Delta(p_t\varphi)(y)-\varphi(y)\Delta p_t(y)\right)+o(\delta v).$ Since $\delta v/h\to g(t)^2$, the product rule gives $\displaystyle \lim_{h\downarrow0}\frac{K_{u,u+h}\varphi(y)-\varphi(y)}h=g(t)^2\left(\nabla\log p_t(y)\cdot\nabla\varphi(y)+\tfrac12\Delta\varphi(y)\right)=\widetilde L_u\varphi(y).$ The remainder is locally uniform in $y$ and dominated on the compact test support because $t\ge\epsilon$. [F1, F4, F2]

2.1 Fix $u$, put $b=T-u$, and write $P_cf=\phi_c*f$. For $r>u$, put $a=T-r$. The explicit kernel gives $K_{u,r}\varphi(y)=P_{v(b)-v(a)}(p_a\varphi)(y)/p_b(y)$. Differentiate in $r$, using the heat equation and integrating the Gaussian Laplacian onto the compactly supported function $p_a\varphi$, to obtain $\displaystyle \partial_rK_{u,r}\varphi(y)=\frac{g(a)^2}{2p_b(y)}P_{v(b)-v(a)}\!\left(\Delta(p_a\varphi)-\varphi\Delta p_a\right)(y)=K_{u,r}(\widetilde L_r\varphi)(y).$ Away from $r=u$, differentiation is justified by [F4]: the variance is positive, the spatial support is fixed compact, and $p_a,\partial_a p_a$ and the needed state derivatives are uniformly bounded there for $a\ge\epsilon$. The product rule gives the last equality. By [F2], $|\widetilde L_r\varphi(x)|\le C$ uniformly in $x,r$ on the truncated interval, so the probability-kernel property bounds the derivative by $C$. Integrate from $u+\delta$ to $v$ and let $\delta\downarrow0$: step 1.2 gives $K_{u,u+\delta}\varphi(y)\to\varphi(y)$, while the bound $C$ controls the omitted integral. Thus $K_{u,v}\varphi-\varphi=\int_u^vK_{u,r}(\widetilde L_r\varphi)dr$. For $s<v$, Markovness and bounded conditional Fubini give $\displaystyle E\!\left[\varphi(Y_v)-\varphi(Y_s)-\int_s^v\widetilde L_r\varphi(Y_r)dr\mid\mathcal G_s\right]=K_{s,v}\varphi(Y_s)-\varphi(Y_s)-\int_s^vK_{s,r}(\widetilde L_r\varphi)(Y_s)dr=0.$ This proves the martingale claim. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
