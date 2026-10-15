---
id: thm-tdmath-decreasing-integrable-tail-free-cube-pressure
kind: theorem
title: Free-cube grand-pressure limit for decreasing integrable tails
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-tdmath-superstable-regular-interaction
  - lem-tdmath-integrable-tail-diagonal-gap
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-product-measure-on-sigma-finite-spaces
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - def-factorial-and-falling-factorial
  - def-nonnegative-extended-series
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 4, printed pp.181–184 / PDF pp.11–14, free-cube pressure comparison and boundary terms."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–3, printed pp.131–145 / PDF pp.4–18, stable grand normalization, lattice-shell estimates and thermodynamic pressure."
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.3, PDF pp.10–12, finite-volume grand-canonical normalization; its infinite-volume variational principle is restricted to finite-range interactions."
---

## Statement

Let $\phi$ be stable and regular as in [[def-tdmath-superstable-regular-interaction]], with stability constant $B$, and fix $a,\beta>0$. For free-boundary cubes define $\Xi_L(a,\beta)=\sum_{N\geq0}a^NZ(L,N;\beta)$. Then
$$1\leq\Xi_L(a,\beta)\leq\exp(ae^{\beta B}L^d),\qquad p(a,\beta):=\lim_{L\to\infty}L^{-d}\log\Xi_L(a,\beta)$$
exists and is finite. This theorem assumes only stability and the decreasing integrable two-sided tail in regularity; it does not assert canonical fixed-density convergence, periodic-boundary equality, or arbitrary-region limits.

## Facts & Assumptions

**Given:** Dimension $d\geq1$, a stable regular pair potential, its stability constant $B$, and fixed numerical length and energy units.

[A1] Stability means $H_\phi(\omega)\geq-BN(\omega)$ for every finite configuration, and the grand partition uses the $1/N!$ normalization in [[def-tdmath-superstable-regular-interaction]].

[F1] [[def-tdmath-superstable-regular-interaction]]: for some nonnegative nonincreasing $\psi$ and $R_0<\infty$, $|\phi(x)|\leq\psi(|x|_\infty)$ for $|x|_\infty\geq R_0$, with finite weighted integral $\int_{R_0}^\infty\psi(r)r^{d-1}dr$.

[F2] [[lem-tdmath-integrable-tail-diagonal-gap]]: $\sum_{m\geq1}m^{d-1}\psi(mg)\leq 2^{d-1}g^{-d}\eta(g)$ and there are gaps $g(\ell)$ with $g(\ell)/\ell\to0$ and $(\ell/g(\ell))^d\eta(g(\ell))\to0$.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: $|[0,L)^d|=L^d$ and finite product Lebesgue measure gives $|([0,L)^d)^N|=L^{dN}$.

[F4] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[def-factorial-and-falling-factorial]], and [[def-nonnegative-extended-series]]: the nonnegative exponential series sums to $e^x$, $0!=1$, and nonnegative grand terms may be split into a finite partial sum and its tail.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative sums and product integrals factor over finitely many disjoint regions.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Put $q=ae^{\beta B}$. For every $N$-point configuration, $0\leq e^{-\beta H_\phi}\leq e^{\beta BN}$ by [A1]. Applying [F3] to the finite-volume integral gives $a^NZ(L,N;\beta)\leq(qL^d)^N/N!$. Summing by [F4] yields $\Xi_L\leq e^{qL^d}$; the empty configuration contributes exactly $1$, so $\Xi_L\geq1$. [A1, F3, F4, algebra]

2.1 Choose $K>eq+1$ and an integer cutoff $n_\ell$ with $K\ell^d<n_\ell\leq K\ell^d+1$. For $N>n_\ell$, $1\leq e^{N-K\ell^d}$, so $$ \sum_{N>n_\ell}a^NZ(\ell,N;\beta)\leq e^{-K\ell^d}\sum_{N\geq0}\frac{(eq\ell^d)^N}{N!}=e^{(eq-K)\ell^d}\leq e^{-\ell^d}. $$ Because $\Xi_\ell\geq1$, the truncated sum $\Xi_\ell^{\rm cut}=\sum_{N=0}^{n_\ell}a^NZ(\ell,N;\beta)$ satisfies $\Xi_\ell^{\rm cut}\geq(1-e^{-\ell^d})\Xi_\ell$. [A1, F3, F4, step 1.1, algebra]

3.1 Fix a core side $\ell$ and a gap $g>2R_0$. Place $M=\lfloor L/(\ell+g)\rfloor^d$ disjoint core cubes of side $\ell$ in $[0,L)^d$ on the lattice of spacing $\ell+g$. Restrict every core to at most $n_\ell$ particles. If two core indices differ by maximum norm $m\geq1$, every pair between them has separation at least $mg$ in maximum norm. The number of offsets in shell $m$ is $(2m+1)^d-(2m-1)^d\leq c_dm^{d-1}$. By [F1], the sum of positive cross-core pair energies is therefore at most $$ D_{L,\ell,g}\leq c_dM n_\ell^2\sum_{m\geq1}m^{d-1}\psi(mg). $$ Negative cross-core energies only increase the Boltzmann weight. Splitting the grand sum by the particle counts in these disjoint cores, Tonelli [F5] and the multinomial coefficient show that the global $N!$ cancels the assignments of labeled coordinates to cores. Thus $$ \Xi_L\geq e^{-\beta D_{L,\ell,g}}(\Xi_\ell^{\rm cut})^M. $$ [F1, F3, F5, step 2.1, construct]

4.1 Divide the last inequality by $L^d$ and let $L\to\infty$ with $\ell,g$ fixed. Since $M/L^d\to(\ell+g)^{-d}$, [F2] gives $$ \liminf_{L\to\infty}L^{-d}\log\Xi_L\geq\left(\frac{\ell}{\ell+g}\right)^d\left[\ell^{-d}\log\Xi_\ell+\ell^{-d}\log(1-e^{-\ell^d})-C_dK_1^2\left(\frac{\ell}{g}\right)^d\eta(g)\right], $$ where $K_1=K+1$ bounds $n_\ell/\ell^d$ for $\ell\geq1$ and $C_d$ absorbs the fixed shell-count constant and $\beta$. [F2, step 2.1, step 3.1, algebra]

5.1 The numbers $p_\ell=\ell^{-d}\log\Xi_\ell$ lie in $[0,q]$ by step 1.1, so choose $\ell_j\to\infty$ with $p_{\ell_j}\to\limsup_{\ell\to\infty}p_\ell$. Set $g=g(\ell_j)$ from [F2]. Then $g/\ell_j\to0$, the volume fraction tends to $1$, the cutoff logarithm divided by $\ell_j^d$ tends to zero, and the cross-core error tends to zero. Step 4.1 therefore yields $\liminf_{L\to\infty}p_L\geq\limsup_{L\to\infty}p_L$. The reverse inequality is automatic for every real sequence, so the limit exists; step 1.1 makes it finite. [F2, step 1.1, step 4.1, algebra] ∎
