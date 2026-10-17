---
id: lem-csm-dk-gaussian-mixture-regularity
kind: lemma
title: "Regularity and invariance of the cutoff Gaussian-mixture class"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-reflection-collision-gain
  - lem-csm-dk-reflection-measure-and-gain-identities
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-gaussian-integral
  - thm-dominated-convergence
dependency_roles:
  def-csm-dk-reflection-collision-gain: mathematical-premise
  lem-csm-dk-reflection-measure-and-gain-identities: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Fix $u\in\mathbb R^3$ and positive velocity-squared parameters $0<a<b$ (in a physical interpretation, both have units $(\mathrm{m\,s^{-1}})^2$). Let

$$K_{a,b}:=\{\Sigma\in\mathbb R^{3\times3}:\Sigma=\Sigma^{\mathsf T},\ aI\le\Sigma\le bI\},$$

where the matrix inequalities mean $a|z|^2\le z^{\mathsf T}\Sigma z\le b|z|^2$ for every $z\in\mathbb R^3$. For $\Sigma\in K_{a,b}$, define the normalized Gaussian density

$$\gamma_{\Sigma,u}(v):=(2\pi)^{-3/2}(\det\Sigma)^{-1/2}\exp\!\left(-\tfrac12(v-u)^{\mathsf T}\Sigma^{-1}(v-u)\right).$$

Let $\mathcal M_{u,a,b}$ be the closure in the weighted space $X$ of all finite convex mixtures $\sum_{j=1}^N\alpha_j\gamma_{\Sigma_j,u}$ with $\Sigma_j\in K_{a,b}$, $\alpha_j\ge0$, and $\sum_j\alpha_j=1$. Then:

1. Every $f\in\mathcal M_{u,a,b}$ has a $C^\infty$ representative satisfying

$$ (2\pi b)^{-3/2}e^{-|v-u|^2/(2a)}\le f(v)\le(2\pi a)^{-3/2}e^{-|v-u|^2/(2b)}.$$

For every multi-index $\alpha$, there is a finite constant $C_{\alpha,a,b}$, depending only on $\alpha,a,b$ and not on $f$, such that

$$|\partial^\alpha f(v)|\le C_{\alpha,a,b}(1+|v-u|^{|\alpha|})e^{-|v-u|^2/(2b)}.$$

The common derivative bounds imply that every sequence in $\mathcal M_{u,a,b}$ has a subsequence converging locally uniformly together with all velocity derivatives.

2. The gain in [[def-csm-dk-reflection-collision-gain]] maps this class into itself: $\mathcal G(f,g)\in\mathcal M_{u,a,b}$ whenever $f,g\in\mathcal M_{u,a,b}$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $u\in\mathbb R^3$, positive velocity-squared parameters $0<a<b$, and the definitions in the Statement.

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]); it is the only choice principle used in the measurable representatives and countable diagonal subsequence arguments.

[F1] [[def-csm-dk-reflection-collision-gain]]: $\mathcal G(f,g)(v)=\int f(v')g(w')\,dw\,d\sigma(n)$, with $v'=v-((v-w)\cdot n)n$ and $w'=w+((v-w)\cdot n)n$.

[F2] [[lem-csm-dk-reflection-measure-and-gain-identities]]: the pair reflection is orthogonal with unit absolute Jacobian, and $\mathcal G$ is bilinear with $\|\mathcal G(f,g)\|_{1,w_0}\le2\|f\|_{1,w_0}\|g\|_{1,w_0}$.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F4] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$.

[F5] [[thm-dominated-convergence]]: almost-everywhere convergence dominated by a single integrable function permits passage of limits through the Lebesgue integral.

[F6] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism changes Lebesgue integrals by the absolute Jacobian determinant.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for sigma-finite factors, Tonelli permits iterated integration of nonnegative measurable functions.

## Proof

**Given:** [A1], $u$, $a$, $b$, and [F1]–[F7].

**Proof technique:** direct.

1.1 By [F3], diagonalize $\Sigma$ in an orthonormal basis with eigenvalues $s_1^2,s_2^2,s_3^2\in[a,b]$. The linear substitution $y_i=(v-u)_i/s_i$ has Jacobian $\det(\Sigma)^{-1/2}$; [F4] in each coordinate gives $\int\gamma_{\Sigma,u}(v)\,dv=1$. The same eigenvalue bounds give $(\det\Sigma)^{-1/2}\in[b^{-3/2},a^{-3/2}]$ and $|v-u|^2/b\le(v-u)^{\mathsf T}\Sigma^{-1}(v-u)\le|v-u|^2/a$, proving the two Gaussian envelopes for each component and hence for every finite mixture. [F3, F4, algebra]

1.2 Let $O_n:\mathbb R^6\to\mathbb R^6$ be the orthogonal pair map from [F2], and let $P:\mathbb R^6\to\mathbb R^3$ project onto the first component. For component densities $\gamma_{\Sigma,u}$ and $\gamma_{\Tau,u}$, the joint centered covariance is $S=\operatorname{diag}(\Sigma,\Tau)$. Using [F6] under $O_n$, the density of the pair after reflection is the centered Gaussian with covariance $S_n=O_nSO_n^{\mathsf T}$ and mean $(u,u)$. Write $S_n$ in blocks as $\begin{pmatrix}C&D\\D^{\mathsf T}&E\end{pmatrix}$. Its first marginal is Gaussian with covariance $C$: indeed $C$ is positive definite, the Schur complement $H=E-D^{\mathsf T}C^{-1}D$ is positive definite, and block elimination gives $\det S_n=\det C\det H$ and $$(x,y)^{\mathsf T}S_n^{-1}(x,y)=x^{\mathsf T}C^{-1}x+(y-D^{\mathsf T}C^{-1}x)^{\mathsf T}H^{-1}(y-D^{\mathsf T}C^{-1}x).$$ Integrating in $y$ using [F3], [F4], and [F7] gives the normalized marginal $\gamma_{C,u}$. Also $C=PS_nP^{\mathsf T}$ satisfies $aI\le C\le bI$: for every $z$, $z^{\mathsf T}Cz=(z,0)^{\mathsf T}O_nSO_n^{\mathsf T}(z,0)$ lies between $a|z|^2$ and $b|z|^2$. [F2, F3, F4, F6, F7, algebra]

2.1 Differentiating a component $\gamma_{\Sigma,u}$ in $v$ multiplies it by a polynomial in $\Sigma^{-1}(v-u)$; each coefficient is uniformly bounded because $\|\Sigma^{-1}\|\le a^{-1}$. The exponent has the upper bound from step 1.1, so every derivative of a finite mixture has the stated polynomial-Gaussian envelope, uniformly over all finite mixtures in this class. [F3, step 1.1, algebra]

2.2 Therefore $\mathcal G(\gamma_{\Sigma,u},\gamma_{\Tau,u})$ is the pointwise angular average $\int_{S^2}\gamma_{C_n,u}\,d\sigma(n)$ with $C_n\in K_{a,b}$. The map $n\mapsto C_n$ is continuous, and $C\mapsto\gamma_{C,u}$ is continuous in $X$: pointwise convergence follows from the formula, while the weighted upper Gaussian envelope from step 1.1 is an integrable dominator and [F5] gives weighted-$L^1$ convergence. For each $n$, continuity supplies a relative-open neighborhood on which the $X$-distance from $\gamma_{C_n,u}$ is less than $\varepsilon$; compactness of $S^2$ gives a finite subcover. Successively subtracting earlier open sets makes this a finite Borel partition $E_j$, and choosing one $n_j$ in each nonempty piece gives variation at most $2\varepsilon$ on that piece. Tonelli [F7] and the triangle inequality bound the weighted-$L^1$ distance from the angular average to $\sum_j\sigma(E_j)\gamma_{C_{n_j},u}$ by $2\varepsilon\sum_j\sigma(E_j)=2\varepsilon$. Since $\varepsilon>0$ is arbitrary, the angular average belongs to $\mathcal M_{u,a,b}$. Bilinear expansion proves the same for finite convex mixtures in both inputs. [F1, F5, F7, step 1.1, step 1.2, algebra]

3.1 For general $f,g\in\mathcal M_{u,a,b}$, choose finite-mixture sequences $f_k\to f$ and $g_k\to g$ in $X$. The bound [F2] gives $$\|\mathcal G(f_k,g_k)-\mathcal G(f,g)\|_{1,w_0}\le2\|f_k-f\|_{1,w_0}\|g_k\|_{1,w_0}+2\|f\|_{1,w_0}\|g_k-g\|_{1,w_0}\longrightarrow0.$$ Each $\mathcal G(f_k,g_k)$ is in $\mathcal M_{u,a,b}$ by step 2.2, so closedness proves $\mathcal G(f,g)\in\mathcal M_{u,a,b}$. [F2, step 2.2, algebra]

4.1 Let $f_k$ be finite mixtures converging in $X$ to $f\in\mathcal M_{u,a,b}$. By step 2.1, every derivative sequence $(\partial^\alpha f_k)_k$ is uniformly bounded and equicontinuous on every closed ball, since the next derivatives have a common bound there. On the countable dense rational grid in each ball, bounded real sequences admit convergent subsequences: repeatedly bisect a bounded interval, retain a half containing infinitely many terms, and use the nested intervals of lengths tending to zero to select a convergent subsequence. A countable diagonal selection over grid points, integer-radius balls, and multi-indices makes every derivative converge on every grid. Equicontinuity and a finite rational $\delta$-net of each ball then make these subsequences uniformly Cauchy there, hence locally uniformly convergent. The fundamental theorem of calculus along coordinate segments identifies the limits as derivatives of a smooth function $\widetilde f$. Weighted-$L^1$ convergence identifies $\widetilde f=f$ almost everywhere on every ball, so $\widetilde f$ represents $f$. The pointwise envelopes and derivative bounds pass to the local uniform limit. This proves part 1 for every class element. [A1, F5, step 1.1, step 2.1, algebra] ∎
