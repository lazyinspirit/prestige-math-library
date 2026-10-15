---
id: thm-tdmath-superstable-van-hove-pressure
kind: theorem
title: Free-wall pressure on arbitrary van Hove shapes under superstability
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-van-hove-sequence
  - lem-tdmath-superstable-cell-energy-bound
  - thm-tdmath-decreasing-integrable-tail-free-cube-pressure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-tdmath-poisson-configuration-reference
  - lem-tdmath-integrable-tail-diagonal-gap
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-van-hove-sequence: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  thm-tdmath-decreasing-integrable-tail-free-cube-pressure: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Equation (2.26) and Proposition 2.6, printed pp.140–141 / PDF pp.14–15: factorial correlation densities and their uniform bound for finite-volume superstable Gibbs laws; the original proof was visually inspected."
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 4, printed pp.181–184 / PDF pp.11–14: boundary comparison and shape-independent pressure method."
---

## Statement

Assume a superstable regular pair potential $\phi$ as in [[def-tdmath-superstable-regular-interaction]], with stability constant $B$, and the van Hove definition [[def-tdmath-van-hove-sequence]]. For a bounded Lebesgue-measurable $\Lambda\subset\mathbb R^d$, define $\mathcal S_N(\Lambda)=\{(q_1,\ldots,q_N)\in\Lambda^N:q_i\neq q_j\ (i\neq j)\}$ and $H_N(q)=\sum_{1\leq i<j\leq N}\phi(q_i-q_j)$. With $e^{-\beta(+\infty)}=0$, set
$$Z_\Lambda(N;\beta)=\frac1{N!}\int_{\mathcal S_N(\Lambda)}e^{-\beta H_N(q)}\,dq_1\cdots dq_N,\qquad Z_\Lambda(0;\beta)=1,\qquad \Xi_\Lambda(z,\beta)=\sum_{N\geq0}z^NZ_\Lambda(N;\beta).$$
This is the labelled positional Lebesgue integral with indistinguishable-particle normalization and includes no exterior interaction. For $\Lambda=[0,L)^d$ it agrees with $Z(L,N;\beta)$ and $\Xi(L;z,\beta)$ from [[def-tdmath-superstable-regular-interaction]]. For every van Hove sequence $(\Omega_k)$ and fixed $z,\beta>0$, the free-wall grand pressure satisfies
$$\lim_{k\to\infty}\frac1{|\Omega_k|}\log\Xi_{\Omega_k}(z,\beta)=p(z,\beta),$$
where $p(z,\beta)$ is the free-cube limit from [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]. The extra superstability hypothesis supplies the uniform cell-occupation bound used below; no arbitrary-shape theorem under stability alone is claimed.

## Facts & Assumptions

**Given:** A stable, regular, superstable interaction, $z,\beta>0$, and a bounded measurable van Hove sequence.

[F1] [[def-tdmath-superstable-regular-interaction]]: the stability constant $B$ gives $\phi(x)\geq-2B$ for nonzero separations, and regularity supplies $R_0<\infty$ and a nonnegative nonincreasing $\psi:[R_0,\infty)\to[0,\infty)$ with $|\phi(x)|\leq\psi(|x|_\infty)$ for $|x|_\infty\geq R_0$ and finite weighted tail integral.

[F2] [[def-tdmath-van-hove-sequence]]: every fixed-width boundary layer has volume $o(|\Omega_k|)$.

[F3] [[lem-tdmath-superstable-cell-energy-bound]]: the energy dominates a positive cell-square sum minus a linear count.

[F4] [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]: the free-cube pressure limit exists and is finite.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative configuration-sector sums and integrals may be interchanged over the sigma-finite product reference.

[L1] Ruelle defines the $m$-point correlation density by Eq. (2.26) and proves in Proposition 2.6 that $\rho_{\mathcal R}^{(m)}(x_1,\ldots,x_m)\leq\xi^m$ for every bounded measurable region $\mathcal R$, all $m$, and all points, for superstable lower-regular interactions. By Tonelli, this definition gives $E_{\mu_{\mathcal R}}N_A=\int_A\rho_{\mathcal R}^{(1)}$ and $E_{\mu_{\mathcal R}}[N_A(N_A-1)]=\int_{A^2}\rho_{\mathcal R}^{(2)}$ for measurable $A\subseteq\mathcal R$. Hence $E N_A^2\leq\xi|A|+\xi^2|A|^2$. The original statement and proof were visually checked on printed pp.140–141; the claim is used only under those hypotheses.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Use the half-open unit-cell partition $C_i=i+[0,1)^d$ from [[def-tdmath-poisson-configuration-reference]] and first take a finite union $\mathcal R$ of these cells. Let $\Pi_{\mathcal R}$ be the unnormalized positional sector measure whose $N$-point part is $z^N/N!$ times product Lebesgue measure, and let $\mu_{\mathcal R}$ have density $e^{-\beta H_{\mathrm{free}}}/\Xi_{\mathcal R}$ relative to $\Pi_{\mathcal R}$. The factorial-moment identities from the correlation-density definition in [L1] and Tonelli [F5] give
$$E N_i^2=E N_i+E[N_i(N_i-1)] \leq \xi |C_i\cap\mathcal R|+\xi^2|C_i\cap\mathcal R|^2 \leq M:=\xi+\xi^2.$$
This gives a uniform second-moment bound for every unit cell in every such region. [F1, F3, F5, L1, algebra]

2.1 For each $\Omega_k$, let $\mathcal R_k$ be the union of unit cells meeting $\Omega_k$. Then $\Xi_{\Omega_k}\leq\Xi_{\mathcal R_k}$ by domain monotonicity, and $|\mathcal R_k|/|\Omega_k|\to1$ by the van Hove boundary condition. Put $J_0=\lceil R_0+2\rceil$, where $R_0$ is the regular-tail cutoff in [[def-tdmath-superstable-regular-interaction]], and choose $M_0\geq\max\{2B,\psi(J_0-1)\}$. For $j\in\mathbb Z^d$, define $\kappa_j=M_0$ when $|j|_\infty<J_0$ and $\kappa_j=\psi(|j|_\infty-1)$ otherwise. If two particles occupy cells with offset $j$, their negative pair energy is bounded by $\kappa_j$: for near offsets, stability on a two-point configuration gives $\phi(x)\geq-2B$, and for far offsets the regularity envelope applies. Also $\sum_j\kappa_j<\infty$ by [F1]–[F2]. Partition the cells of $\mathcal R_k$ into boxes $B$ of $\ell$ unit cells per side and, for each occupied cell $i$, set $e_i=\sum_{j:\,B(j)\neq B(i)}\kappa_{i-j}$. The negative cross-box energy obeys $W^-\leq\sum_i e_iN_i^2$, by $N_iN_j\leq(N_i^2+N_j^2)/2$ and summation over ordered cross-box cell pairs. Step 1.1 gives $E W^-\leq M\sum_i e_i$, so Markov's inequality shows $W^-\leq2M\sum_i e_i$ with probability at least $1/2$ (with probability one if the sum vanishes). On this event $H_{\mathrm{total}}\geq H_{\mathrm{in}}-2M\sum_i e_i$, where $H_{\mathrm{in}}$ is the sum of within-box energies. Therefore
$$\Xi_{\mathcal R_k}/2\leq e^{2\beta M\sum_i e_i}\prod_B\Xi_{\mathcal R_k\cap B}.$$
Indeed, $\Xi_{\mathcal R_k}\mu_{\mathcal R_k}(E)=\int_Ee^{-\beta H_{\mathrm{total}}}d\Pi_{\mathcal R_k}$; bound this by $e^{2\beta M\sum_i e_i}\int_Ee^{-\beta H_{\mathrm{in}}}d\Pi_{\mathcal R_k}$, then factor the latter integral by boxes. Each unrestricted partial-box partition is at most the full $\ell$-cube partition. For one full box, put $E_\ell=\sum_{i\in B,j\notin B}\kappa_{i-j}$. For fixed $R$, cells within distance $R$ of the boundary contribute at most $O_R(\ell^{d-1})\sum_j\kappa_j$, while every other cell contributes at most $\ell^d\sum_{|j|_\infty>R}\kappa_j$. Thus $E_\ell/\ell^d\to0$, by first letting $\ell\to\infty$ and then $R\to\infty$. Consequently
$$\limsup_k|\Omega_k|^{-1}\log\Xi_{\Omega_k} \leq\ell^{-d}\bigl[\log\Xi_{\Lambda_\ell}+2\beta M E_\ell\bigr].$$
Let $\ell\to\infty$ and use [F4]. [F1, F2, F3, F4, F5, L1, step 1.1, algebra]

3.1 For the lower bound, put $q=ze^{\beta B}$ and choose $K>eq+1$. For integer core side $\ell\geq1$, let $n_\ell$ be an integer with $K\ell^d<n_\ell\leq K\ell^d+1$ and set $\Xi_\ell^{\rm cut}=\sum_{N=0}^{n_\ell}z^NZ(\Lambda_\ell,N;\beta)$. The stability tail estimate in the proof of [F4] gives $\Xi_\ell^{\rm cut}\geq(1-e^{-\ell^d})\Xi_{\Lambda_\ell}(z,\beta)$. Fix $g>2R_0$ and retain every complete $(\ell+g)$-tile whose core lies in $\Omega_k$. By [F2], the retained count $M_k$ divided by $|\Omega_k|$ tends $(\ell+g)^{-d}$. Each core has at most $(K+1)\ell^d$ particles. If two tile indices differ by maximum norm $m\geq1$, their core points are separated by at least $mg$; hence the positive cross energy per core is at most
$$C_d(K+1)^2\ell^{2d}\sum_{m\geq1}m^{d-1}\psi(mg)\leq C'_d(K+1)^2\ell^{2d}g^{-d}\eta(g).$$
Summing over cores, using the exact ordered-label assignment count to cancel the global $N!$, and discarding negative cross energy gives
$$\Xi_{\Omega_k}(z,\beta)\geq e^{-\beta D_{k,\ell,g}}(\Xi_\ell^{\rm cut})^{M_k},\qquad \frac{D_{k,\ell,g}}{|\Omega_k|}\leq C'_d(K+1)^2\left(\frac{\ell}{g}\right)^d\eta(g)+o_k(1).$$
First let $k\to\infty$. Then choose $g=g(\ell)$ from [[lem-tdmath-integrable-tail-diagonal-gap]] and let integer $\ell\to\infty$; $g/\ell\to0$, the packing fraction tends one, $(\ell/g)^d\eta(g)\to0$, and $\ell^{-d}\log(1-e^{-\ell^d})\to0$. The resulting liminf is at least the cube pressure [F4]. [F1, F2, F4, step 2.1, algebra] ∎
