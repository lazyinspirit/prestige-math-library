---
id: thm-tdmath-canonical-interior-density-limit
kind: theorem
title: Canonical free-cube limit at every interior attainable density
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
  - thm-natural-logarithm-laws
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
  thm-natural-logarithm-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorem 4 and Lemma 7.1, printed pp.177 and 192 / PDF pp.7 and 22: attainable densities and ensemble limits. The fixed-N extension is proved locally."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 0–3, printed pp.127–145 / PDF pp.1–18: stability, lower regularity, block packing and pressure conventions."
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.3, PDF pp.10–12: finite-volume canonical and grand-canonical point-process normalization; its limit theorems assume finite range."
---

## Statement

Let $\phi$ be stable and regular as in [[def-tdmath-superstable-regular-interaction]], fix $\beta>0$, and define $Z(L,N;\beta)$ as in that definition. For sequences $L_j\to\infty$ and integers $N_j\geq0$ with $N_j/L_j^d\to\rho$, define
$$b(\rho)=\sup\left\{\limsup_{j\to\infty}L_j^{-d}\log Z(L_j,N_j;\beta):\frac{N_j}{L_j^d}\to\rho\right\}.$$
Let $F$ be the concave envelope of $b$ on $[0,\infty)$, namely the supremum of $\sum_{i=1}^m\theta_i b(\rho_i)$ over finite lists with $\theta_i\geq0$, $\sum_i\theta_i=1$, $\rho_i\geq0$, and $\sum_i\theta_i\rho_i=\rho$; the empty supremum is $-\infty$. On the interior of $\{\rho:F(\rho)>-\infty\}$, $F$ is finite and continuous. For every $\rho>0$ in that interior and every such sequence $(L_j,N_j)$,
$$\lim_{j\to\infty}L_j^{-d}\log Z(L_j,N_j;\beta)=F(\rho).$$
No claim is made at a close-packing endpoint or at any other excluded endpoint.

## Facts & Assumptions

**Given:** Stability with constant $B$, a regular even pair potential, fixed $\beta>0$, and the free-cube canonical convention in [[def-tdmath-superstable-regular-interaction]].

[F1] Stability gives $U_N\geq-BN$ for every finite configuration. Regularity supplies $R_0<\infty$ and a nonnegative nonincreasing $\psi:[R_0,\infty)\to[0,\infty)$ with $|\phi(x)|\leq\psi(|x|_\infty)$ for $|x|_\infty\geq R_0$ and $\int_{R_0}^\infty r^{d-1}\psi(r)\,dr<\infty$ ([[def-tdmath-superstable-regular-interaction]]).

[F2] For every sufficiently large gap $g$, the lattice-shell interaction tail is bounded by [[lem-tdmath-integrable-tail-diagonal-gap]], with a diagonal choice $g(\ell)/\ell\to0$ and vanishing cross-energy density.

[F3] The Lebesgue box and product-measure suppliers give volume $L^{dN}$ for the $N$-fold cube and permit factorization over disjoint cores ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] The factorial and logarithm suppliers give the integral bounds $\int_1^m\log x\,dx\leq\log(m!)\leq\int_1^{m+1}\log x\,dx$ and $\log(1+u)\leq u$ for $u>-1$ ([[def-factorial-and-falling-factorial]], [[thm-natural-logarithm-laws]]).

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Stability and [F3] give $Z(L,N;\beta)\leq e^{\beta BN}L^{dN}/N!$. If $N/L^d\to\rho>0$, the factorial integral bounds [F4] imply $$ \limsup L^{-d}\log Z(L,N;\beta)\leq \rho(1+\beta B-\log\rho), $$ so $b(\rho)$ and $F(\rho)$ are bounded above on every compact positive-density interval. The vacuum term gives $b(0)=0$: $Z(L,0)=1$ is a lower bound, and the same stability estimate with $N/L^d\to0$ gives a nonpositive upper limit. [F1, F3, F4, algebra]

1.2 The effective domain of $F$ has nonempty interior. Fix a core cube of side $s>0$ and a gap $g>2R_0$; place one particle in each selected core of a lattice of spacing $s+g$ inside a large box. The absolute interaction from any one occupied core to all others is bounded by $C\sum_{m\geq1}m^{d-1}\psi(mg)<\infty$ by [F1]–[F2], with the gap satisfying the stated hypothesis of the diagonal-gap estimate. Restricting each particle to a subcube of volume $v_0>0$ therefore gives $Z(L,N;\beta)\geq v_0^N e^{-C_0N}$ for every density strictly below $(s+g)^{-d}$, after omitting unused lattice cells. Thus $F$ is finite on a nonempty interval of positive densities; by its definition as a finite-mixture envelope it is concave. [F1, F2, F3, algebra, construct]

2.1 Fix a finite list of core preparations $(s_i,n_i)$ with $0<Z(s_i,n_i;\beta)<\infty$. For each $i$, choose a gap $g_i=g(s_i)$ from [F2] along a sequence $s_i\to\infty$ so that $g_i/s_i\to0$ and the positive interaction between distinct cores in the same lattice packing, divided by core volume, tends to zero. Set tile side $a_i=s_i+g_i$ and effective density $r_i=n_i/a_i^d$. If $M_i$ such tiles carry exactly $n_i$ particles in their central $s_i$-cubes, the same shell count as in the proof of [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]] gives cross-energy penalty per occupied volume at most $C (n_i/s_i^d)^2(s_i/g_i)^d\eta(g_i)$, which tends to zero by [F2]. Exact factorization over disjoint core cubes follows because assigning the labeled coordinates to their cores contributes $N!/\prod_i(n_i!)^{M_i}$, cancelling the global $N!$. [F2, F3, step 1.2, algebra]

3.1 For any finite convex combination in the definition of $F(\rho)$, choose core preparations with densities tending to its $\rho_i$ and rates tending to $b(\rho_i)$. If their effective densities do not strictly bracket the target $\rho$, add arbitrarily small weights at one attainable density below and one above $\rho$; such densities exist because $\rho$ is interior. Their mixture coefficients can then be perturbed by quantities tending to zero so the effective mean is exactly $\rho$. Place the fixed core types in finitely many macroscopic slabs with these volume fractions, inserting fixed empty layers wider than $R_0$ between slabs. For fixed core sizes and gaps, the distinct-slab cross energy divided by total volume tends to zero: for interaction distances at most $R$, only $O(RL^{d-1})$ particles lie in the interface strips, while the remaining contribution is bounded by a constant times $L^d\sum_{|j|_\infty>R}\Psi_j$; take $L\to\infty$ and then $R\to\infty$. [F1, F2, step 2.1, construct]

4.1 First reserve an outer layer of fixed width $W$. For each large $L$, put $\rho_L=N_L/L^d$ and choose the slab fractions in the remaining volume to match the count $N_L$ at density $\rho_L L^d/(L^d-O(WL^{d-1}))$. This target tends to $\rho$, so the strict bracketing in step 3.1 applies uniformly for large $L$ and absorbs the reserved layer without assuming its one-particle capacity replaces a bulk density. Rounding the finitely many slab and core counts then leaves at most $C_1L^{d-1}$ particles unplaced, with $C_1$ depending on the fixed preparations but not on $W$; the error comes only from the finitely many slab faces and incomplete boundary tiles. Choose $W$ large enough to contain at least $C_1L^{d-1}$ small cells separated from each other and every core by more than $R_0$. Put each missing particle in one such cell. Its interaction with the fixed preparations is bounded by the same summable tail, so the correction changes log weight by only $O(L^{d-1})$. This constructs exactly $N_L$ particles for every sequence $N_L/L^d\to\rho$, and gives $$ \liminf_{L\to\infty}L^{-d}\log Z(L,N_L;\beta)\geq\sum_i\theta_i\frac{\log Z(s_i,n_i;\beta)-\mathrm{cross}_i}{a_i^d}, $$ where $\mathrm{cross}_i/a_i^d\to0$ by step 2.1. Taking preparations approaching the selected convex combination and then the supremum gives $\liminf\geq F(\rho)$. [F1, F2, F3, step 2.1, step 3.1, construct]

5.1 By the definition of $b$, every sequence with density tending $\rho$ has limsup rate at most $b(\rho)\leq F(\rho)$. Together with step 4.1 this proves the asserted limit. A finite concave function on an open interval is continuous: fix $a<\rho<b$ in the interval; the chord slopes from $a$ and $b$ bound the difference quotients on a smaller interval around $\rho$, yielding a finite local Lipschitz bound. This establishes finiteness and continuity of $F$ on its effective interior while leaving excluded endpoints undecided. [F4, step 1.1, step 1.2, step 4.1, algebra] ∎
