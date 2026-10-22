---
id: thm-csm-frontier-high-temperature-susceptibility
kind: theorem
title: "High-temperature susceptibility, correlation summability, and spatial-average concentration"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-csm-finite-range-lattice-interaction
  - def-csm-lattice-gibbs-specification
  - def-csm-frontier-dobrushin-matrix
  - lem-csm-frontier-finite-response-covariance
  - lem-csm-gibbs-response-covariance
  - lem-csm-lattice-specification-consistency
  - thm-csm-dobrushin-finite-range-uniqueness
  - thm-csm-frontier-dobrushin-comparison
  - thm-newton-leibniz-with-interior-derivative
  - thm-geometric-series
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-finite-range-lattice-interaction: mathematical-premise
  def-csm-lattice-gibbs-specification: mathematical-premise
  def-csm-frontier-dobrushin-matrix: mathematical-premise
  lem-csm-frontier-finite-response-covariance: mathematical-premise
  lem-csm-gibbs-response-covariance: mathematical-premise
  lem-csm-lattice-specification-consistency: mathematical-premise
  thm-csm-dobrushin-finite-range-uniqueness: mathematical-premise
  thm-csm-frontier-dobrushin-comparison: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-geometric-series: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author-hosted book, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, §3.1, finite-volume Ising Gibbs distributions with boundary conditions, printed pp. 80–82 (PDF pp. 97–99); Chapter 6, §§6.5.1–6.5.2, boundary sensitivity and Dobrushin uniqueness, printed pp. 267–271 (PDF pp. 284–288)."
    - title: "Patrick Rebeschini and Ramon van Handel, Comparison Theorems for Gibbs Measures"
      url: "https://arxiv.org/pdf/1308.4117"
      locator: "§§2.1–2.3 and §§3.1–3.3, local comparison, Neumann resolvent, and coupled-update proof, PDF pp. 4–9 and 12–23."
---

## Statement

Assume the Axiom of Countable Choice. Fix $d\geq1$, a finite interaction radius $R\geq0$, $\beta>0$, and symmetric translation-invariant couplings $J_{ij}=J_{ji}\in\mathbb R$ satisfying $J_{ii}=0$, $J_{i+k,j+k}=J_{ij}$ for every $i,j,k\in\mathbb Z^d$, and $J_{ij}=0$ whenever $\lVert i-j\rVert_\infty>R$. Spins take dimensionless values $\{-1,+1\}$; use energy units for $J_{ij}$ and the field $h$, so $\beta$ has inverse-energy units and $\lambda=\beta h$ is dimensionless. For each dimensionless field parameter $\lambda$ in an open interval $I\subseteq\mathbb R$, use the finite-volume conditional energy

$$H_{\Lambda,\lambda}(\sigma_\Lambda\mid\eta)=-\sum_{\{i,j\}:\{i,j\}\cap\Lambda\ne\varnothing}J_{ij}\widehat\sigma_i\widehat\sigma_j-\frac{\lambda}{\beta}\sum_{i\in\Lambda}\sigma_i,$$

where $\Lambda\subset\mathbb Z^d$ is finite, $\eta\in\{-1,+1\}^{\Lambda^c}$, $\widehat\sigma_i=\sigma_i$ on $\Lambda$ and $\widehat\sigma_i=\eta_i$ outside, and the pair sum runs over unordered pairs with $J_{ij}\ne0$ that meet $\Lambda$. Let $\gamma_\lambda$ be the resulting proper consistent finite-range Gibbs specification on $X=\{-1,+1\}^{\mathbb Z^d}$, as in [[def-csm-finite-range-lattice-interaction]] and [[def-csm-lattice-gibbs-specification]]. For its Dobrushin matrix $C(\lambda)$ from [[def-csm-frontier-dobrushin-matrix]], assume the uniform strict row bound

$$0\leq c_*:=\sup_{\lambda\in I}\sup_{i\in\mathbb Z^d}\sum_{j\in\mathbb Z^d}C_{ij}(\lambda)<1.$$

Assume also the common finite radius condition $C_{ij}(\lambda)=0$ whenever $\lVert i-j\rVert_\infty>R$. Let $\mu_\lambda$ be the unique DLR state, let $\sigma_i(\sigma):=\sigma_i$ be the spin coordinate, and define

$$m(\lambda):=\int_X\sigma_0\,d\mu_\lambda,\qquad \operatorname{Cov}_{\mu_\lambda}(\sigma_i,\sigma_j):=\int_X\sigma_i\sigma_j\,d\mu_\lambda-\left(\int_X\sigma_i\,d\mu_\lambda\right)\left(\int_X\sigma_j\,d\mu_\lambda\right).$$

For bounded real $F$, write $\mathbb E_{\mu_\lambda}F:=\int_XF\,d\mu_\lambda$ and $\operatorname{Var}_{\mu_\lambda}(F):=\mathbb E_{\mu_\lambda}[(F-\mathbb E_{\mu_\lambda}F)^2]$. For finite $\Lambda$ and exterior configuration $\eta$, let $\nu_{\Lambda,\lambda}^{\eta}:=\gamma_{\Lambda,\lambda}(\cdot\mid\eta)$; finite-volume expectations, covariance and variance are computed in this law by the same formulas.

Then the following conditional mathematical conclusions hold for every $\lambda\in I$.

1. The correlations are absolutely summable and satisfy

$$\sum_{j\in\mathbb Z^d}|\operatorname{Cov}_{\mu_\lambda}(\sigma_0,\sigma_j)|\leq\frac1{1-c_*}.$$

For $R\geq1$ and integer $r\geq1$, their spatial tail satisfies

$$\sum_{\lVert j\rVert_\infty\geq r}|\operatorname{Cov}_{\mu_\lambda}(\sigma_0,\sigma_j)|\leq\frac{c_*^{\lceil r/R\rceil}}{1-c_*};$$

when $R=0$, all off-site covariances vanish.

2. The limiting magnetization $m$ is differentiable on $I$ and

$$m'(\lambda)=\sum_{j\in\mathbb Z^d}\operatorname{Cov}_{\mu_\lambda}(\sigma_0,\sigma_j).$$

Here $\lambda=\beta h$ if the energy is written with field term $-h\sum_i\sigma_i$; thus the derivative with respect to $h$ is $\beta$ times the displayed covariance sum. For a finite $\Lambda$ and fixed exterior configuration $\eta$, write $\mathbb E_{\Lambda,\lambda}$, $\operatorname{Cov}_{\Lambda,\lambda}$ and $\operatorname{Var}_{\Lambda,\lambda}$ for expectation, covariance and variance in its finite-volume Gibbs law. The corresponding finite-volume identity is

$$\frac{d}{d\lambda}\,\mathbb E_{\Lambda,\lambda}\!\left[\sum_{i\in\Lambda}\sigma_i\right]=\operatorname{Var}_{\Lambda,\lambda}\!\left(\sum_{i\in\Lambda}\sigma_i\right)=\sum_{i,j\in\Lambda}\operatorname{Cov}_{\Lambda,\lambda}(\sigma_i,\sigma_j).$$

3. For every finite nonempty $\Lambda\subset\mathbb Z^d$, the spatial average $\overline\sigma_\Lambda:=|\Lambda|^{-1}\sum_{i\in\Lambda}\sigma_i$ obeys the variance and Chebyshev bounds

$$\operatorname{Var}_{\mu_\lambda}(\overline\sigma_\Lambda)\leq\frac{1}{(1-c_*)|\Lambda|},\qquad \mu_\lambda\!\left(|\overline\sigma_\Lambda-\mathbb E_{\mu_\lambda}\overline\sigma_\Lambda|\geq\varepsilon\right)\leq\frac{1}{(1-c_*)|\Lambda|\varepsilon^2}\quad(\varepsilon>0).$$

These are summable-correlation and variance concentration conclusions under the strict Dobrushin condition; no exponential concentration, analyticity, or coexistence conclusion is asserted.

## Statement references

[[def-countable-choice]]

[[def-csm-finite-range-lattice-interaction]]

[[def-csm-lattice-gibbs-specification]]

[[def-csm-frontier-dobrushin-matrix]]

[[lem-csm-frontier-finite-response-covariance]]

[[lem-csm-gibbs-response-covariance]]

[[lem-csm-lattice-specification-consistency]]

[[thm-csm-dobrushin-finite-range-uniqueness]]

[[thm-csm-frontier-dobrushin-comparison]]

[[thm-newton-leibniz-with-interior-derivative]]

[[thm-geometric-series]]

## Facts & Assumptions

**Given:** Countable Choice, the translation-invariant finite-range Ising interaction and finite-volume Gibbs convention stated above, the uniform Dobrushin row bound $c_*<1$ on $I$, and the finite spin space $\{-1,+1\}$.

[A1] Assume Countable Choice, as required for the lattice product-measure extension in the DLR existence argument ([[def-countable-choice]]).

[F1] The interaction list, conditioned energy, finite-alphabet configuration space, specification, and DLR identity have the conventions in [[def-csm-finite-range-lattice-interaction]] and [[def-csm-lattice-gibbs-specification]].

[F2] Under the stated finite-range interaction, the Gibbs kernels are proper, consistent, and finite-range ([[lem-csm-lattice-specification-consistency]]).

[F3] The influence matrix coefficient is the half-total-variation sensitivity of the one-site conditional law to one changed boundary spin ([[def-csm-frontier-dobrushin-matrix]]).

[F4] A proper consistent finite-range finite-alphabet specification satisfying Countable Choice and a strict Dobrushin row bound has a unique DLR state; its local finite-volume expectations become uniformly insensitive to exterior boundary conditions ([[thm-csm-dobrushin-finite-range-uniqueness]]).

[F5] For a finite Gibbs family with energy $H_t=H_0-tM$, $\frac{d}{dt}\log Z=\beta\,\mathbb E_t M$ and $\frac{d^2}{dt^2}\log Z=\beta^2\operatorname{Var}_t(M)$ ([[lem-csm-gibbs-response-covariance]]).

[F6] For any finite Gibbs family with field-coupled observable $M$ and finite observable $F$, $\frac{d}{dt}\mathbb E_tF=\beta\operatorname{Cov}_t(F,M)$ ([[lem-csm-frontier-finite-response-covariance]]).

[F7] The finite-volume and infinite-volume Dobrushin comparison estimates hold with resolvent $\sum_{n\geq0}C^n$ for a finite-range influence envelope with row sum below $1$ ([[thm-csm-frontier-dobrushin-comparison]]).

[F8] If $G$ is continuous on a closed interval, differentiable in its interior, and its interior derivative has a Riemann-integrable extension, then the integral of that extension equals the endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).

[F9] For $0\leq c_*<1$, the geometric tails satisfy $\sum_{n\geq0}c_*^n=1/(1-c_*)$ and $\sum_{n\geq k}c_*^n=c_*^k/(1-c_*)$ ([[thm-geometric-series]]).

## Proof

1.1 For each $\lambda\in I$, [F1]–[F2] give a proper consistent finite-range Ising specification. Its Dobrushin row constant is at most $c_*<1$, so [A1] and [F4] give a unique DLR state $\mu_\lambda$. A lattice translation of $\mu_\lambda$ is another DLR state for the same translation-invariant kernels; uniqueness therefore makes $\mu_\lambda$ translation invariant. [A1, F1, F2, F4, given]

1.2 Fix finite $\Lambda$ containing distinct sites $i,j$ and an exterior configuration $\eta$, and write $\nu_{\Lambda,\lambda}:=\gamma_{\Lambda,\lambda}(\cdot\mid\eta)$. Every finite Gibbs weight is positive, so the finite-volume probabilities of $\sigma_j=\pm1$ are positive. Conditional on either value, consistency [F2] identifies the law on $\Lambda\setminus\{j\}$ with the corresponding finite-volume Gibbs kernel, with the same exterior spins away from $j$ and the spin at $j$ fixed to the selected sign. Apply the finite-volume comparison bound [F7] with the same specification and $b=0$ to these two boundary conditions. For $f=\sigma_i$, $\delta_i(f)=2$ and all other oscillations vanish; the bound is $2\sum_{k\in\Lambda\setminus\{j\}}D^{\Lambda\setminus\{j\}}_{ik}C_{kj}(\lambda)$. Each term is a sum of weights of paths from the boundary site $j$ to $i$ whose intermediate vertices avoid $j$, so it is at most $2\sum_{n\geq1}C(\lambda)^n_{ij}$. [F2, F3, F7, algebra]

2.1 Let $\Lambda_n=[-n,n]^d$ and let $\nu_{n,\lambda}:=\gamma_{\Lambda_n,\lambda}(\cdot\mid\eta^+)$, where $\eta^+_i=+1$ for all exterior sites. For any fixed cylinder function $g$, choose a finite coordinate set $K$ on which it depends (take any nonempty finite $K$ if $g$ is constant). By the DLR identity, $\mu_\lambda(g)=\int\gamma_{\Lambda_n,\lambda}(g\mid\eta)\,d\mu_\lambda(\eta)$ whenever $K\subseteq\Lambda_n$. The finite-volume comparison estimate [F7] with the same specification, $b=0$, and arbitrary boundary conditions bounds the difference between $\gamma_{\Lambda_n,\lambda}(g\mid\eta^+)$ and every integrand by $\sum_{i\in K}\delta_i(g)$ times the total influence-path weight from $i$ to $\Lambda_n^c$. If $R\geq1$, each such path has at least $q_n:=\lfloor\operatorname{dist}_\infty(K,\Lambda_n^c)/R\rfloor$ edges, and its total weight is at most $\sum_{k\geq q_n}c_*^k=c_*^{q_n}/(1-c_*)$ by [F9]; $q_n\to\infty$. If $R=0$, the boundary term is zero. Thus $\nu_{n,\lambda}(g)\to\mu_\lambda(g)$ locally uniformly on $I$. [F4, F7, F9, step 1.1, algebra]

3.1 Put $p=\nu_{\Lambda,\lambda}(\sigma_j=+1)$ and let $m_\pm=\mathbb E_{\nu_{\Lambda,\lambda}}[\sigma_i\mid\sigma_j=\pm1]$. Finite Gibbs weights are strictly positive by [F1], so $0<p<1$. Expanding the two-point expectation by the events $\sigma_j=\pm1$ gives $\operatorname{Cov}_{\nu_{\Lambda,\lambda}}(\sigma_i,\sigma_j)=2p(1-p)(m_+-m_-)$. Since $2p(1-p)\leq\frac12$, step 1.2 gives $|\operatorname{Cov}_{\nu_{\Lambda,\lambda}}(\sigma_i,\sigma_j)|\leq\sum_{n\geq1}C(\lambda)^n_{ij}$. For $i=j$, $\operatorname{Var}_{\nu_{\Lambda,\lambda}}(\sigma_i)=1-(\mathbb E\sigma_i)^2\leq1$. By step 2.1, for fixed $i,j$ the finite-volume expectations of $\sigma_i$, $\sigma_j$, and $\sigma_i\sigma_j$ converge to those under $\mu_\lambda$ as the cubes exhaust the lattice. Passing this finite covariance bound to the limit proves it for $\mu_\lambda$ as well. [F1, step 2.1, step 1.2, algebra]

4.1 For every $n\geq0$, nonnegativity and the row bound give $\sum_j C(\lambda)^{n+1}_{ij}=\sum_k C(\lambda)^n_{ik}\sum_jC_{kj}(\lambda)\leq c_*\sum_kC(\lambda)^n_{ik}$; induction from $C^0=I$ yields $\sum_jC(\lambda)^n_{ij}\leq c_*^n$. Summing the off-site bound from step 3.1 and using [F9] gives $\sum_{j\ne i}|\operatorname{Cov}(\sigma_i,\sigma_j)|\leq\sum_{n\geq1}\sum_jC(\lambda)^n_{ij}\leq c_* /(1-c_*)$. Adding the diagonal variance, at most $1$, proves the absolute covariance sum bound. If $R\geq1$ and $\lVert j-i\rVert_\infty\geq r$, then $C(\lambda)^n_{ij}=0$ for $n<\lceil r/R\rceil$, because an $n$-step path moves at most $nR$ in the $\ell^\infty$ metric. Summing the remaining row tails with [F9] proves the stated spatial-tail bound. If $R=0$, the zero diagonal and range condition make every off-site coefficient zero, so step 3.1 gives zero off-site covariance. [F3, F9, step 3.1, algebra]

5.1 For each fixed finite set of sites, step 2.1 gives locally uniform convergence of its one-point and two-point expectations under $\nu_{n,\lambda}$ to those under $\mu_\lambda$, hence locally uniform convergence of each covariance. For $i\ne j$ in $\Lambda_n$, steps 1.2 and 3.1 give $|\operatorname{Cov}_{\nu_{n,\lambda}}(\sigma_i,\sigma_j)|\leq\sum_{k\geq1}C(\lambda)^k_{ij}$; the diagonal variance is at most $1$. The same path-tail argument as in step 4.1 therefore bounds, uniformly in $n$ and $\lambda$, the sum of absolute covariances over sites outside any fixed box by a quantity tending to zero as the box grows. Splitting the covariance sum into that finite box and its uniformly small complement proves that the finite sums $S_n(\lambda):=\sum_{j\in\Lambda_n}\operatorname{Cov}_{\nu_{n,\lambda}}(\sigma_0,\sigma_j)$ converge locally uniformly on $I$ to $S(\lambda):=\sum_{j\in\mathbb Z^d}\operatorname{Cov}_{\mu_\lambda}(\sigma_0,\sigma_j)$. [step 2.1, step 1.2, step 3.1, step 4.1]

6.1 For $m_n(\lambda):=\mathbb E_{\nu_{n,\lambda}}\sigma_0$, write $H_{0,n}$ for the interaction part of the stated finite-volume energy and put $M_n=\sum_{j\in\Lambda_n}\sigma_j$; the field energy is $H_{0,n}-(\lambda/\beta)M_n$. [F6] and the chain rule $d/d\lambda=(1/\beta)d/dt$ give $m_n'(\lambda)=\sum_{j\in\Lambda_n}\operatorname{Cov}_{\nu_{n,\lambda}}(\sigma_0,\sigma_j)=S_n(\lambda)$. For the aggregate finite-volume identity, [F5] gives $d(\log Z)/dt=\beta\mathbb E_tM_n$ and $d^2(\log Z)/dt^2=\beta^2\operatorname{Var}_t(M_n)$. Since $t=\lambda/\beta$, the chain rule gives $d^2(\log Z)/d\lambda^2=\operatorname{Var}_{\nu_{n,\lambda}}(M_n)$; differentiating $d(\log Z)/d\lambda=\mathbb E_{\nu_{n,\lambda}}M_n$ therefore gives $\frac{d}{d\lambda}\mathbb E_{\nu_{n,\lambda}}M_n=\operatorname{Var}_{\nu_{n,\lambda}}(M_n)$. Expanding the square in the variance gives the displayed finite double covariance sum. [F5, F6, step 5.1, algebra]

7.1 Step 2.1 with $g=\sigma_0$ gives $m_n\to m$ locally uniformly, while step 5.1 gives $m_n'=S_n\to S$ locally uniformly. Each $S_n$ is continuous because it is a finite sum of finite Gibbs expectations, each a finite ratio of exponentials; hence $S$ is continuous as a locally uniform limit. On any closed subinterval of $I$, [F8] applied to $G=m_n$ and derivative $S_n$ gives $m_n(\lambda)-m_n(\lambda_0)=\int_{\lambda_0}^{\lambda}S_n(u)\,du$. Passing to the locally uniform limits yields $m(\lambda)-m(\lambda_0)=\int_{\lambda_0}^{\lambda}S(u)\,du$, so $m'(\lambda)=S(\lambda)$. Since $\lambda=\beta h$, the chain rule gives $d m/dh=\beta S(\beta h)$. [F8, step 2.1, step 5.1, step 6.1, algebra]

8.1 For finite nonempty $\Lambda$, expand the variance of $\overline\sigma_\Lambda$ as $|\Lambda|^{-2}\sum_{i,j\in\Lambda}\operatorname{Cov}(\sigma_i,\sigma_j)$. By the uniform row bound proved in step 4.1, the sum of the absolute values in each row is at most $1/(1-c_*)$, so the variance is at most $1/((1-c_*)|\Lambda|)$. Pointwise, $\mathbf1_{\{|X-\mathbb EX|\geq\varepsilon\}}\leq |X-\mathbb EX|^2/\varepsilon^2$; taking expectations with $X=\overline\sigma_\Lambda$ proves the Chebyshev bound. [step 4.1, algebra] ∎
