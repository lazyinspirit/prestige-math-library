---
id: lem-tdmath-superquadratic-positive-core
kind: lemma
title: Superquadratic cell coercivity from a divergent or hard core
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap]
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorem 3 and Eq. (2.26), printed pp.176–177 / PDF pp.6–7; the source's core condition is strengthened explicitly here."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–2, printed pp.132–139 / PDF pp.5–12, cell occupation bounds from a repulsive core and a summable lower-regular tail."
---

## Statement

Assume the potential of [[def-tdmath-superstable-regular-interaction]] is stable and regular. In addition, assume either (i) $\chi:(0,r_1]\to(0,\infty)$ is finite-valued and nonincreasing, $\phi(x)\geq\chi(|x|_\infty)$ for $0<|x|_\infty\leq r_1$, and $\int_0^{r_1}\chi(r)r^{d-1}dr=+\infty$; or (ii) there is a hard-core radius $r_h>0$ such that $\phi(x)=+\infty$ whenever $|x|_\infty<r_h$. Then there are a nonnegative nondecreasing $h:\mathbb N_0\to[0,+\infty]$ with $h(0)=0$ and $h(N)/N^2\to+\infty$, and a constant $b<\infty$, such that
$$H_\phi(\omega)\geq\sum_{i\in\mathbb Z^d}h(N_{C_i}(\omega))-bN(\omega).$$
The hard-core alternative permits $h(N)=+\infty$ above the finite packing capacity of a unit cell. This is stronger than ordinary superstability and is not inferred from stability or regularity alone.

## Facts & Assumptions

**Given:** Stability, regularity, the unit-cell partition, and one of the two positive-core alternatives.

[F1] [[def-tdmath-superstable-regular-interaction]]: if $H_\phi\geq-BN$, applying stability to a two-point configuration gives $\phi(x)\geq-2B$ for every nonzero separation; regularity supplies an integrable lower-tail envelope.

[F2] [[lem-tdmath-integrable-tail-diagonal-gap]]: the integrable envelope gives a finite lattice sum outside any sufficiently large fixed gap.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Write $N_i=N_{C_i}(\omega)$. The negative part of each pair potential is bounded both by $2B$, where $B$ is the stability constant of $\phi$, and, at large separation, by the lower-regular envelope. Set $\Psi_j$ to a finite constant on the finitely many near-cell offsets and to the envelope evaluated at $|j|_\infty-1$ on the remaining offsets. The shell count $|\{j:|j|_\infty=m\}|\leq c_dm^{d-1}$ and the cell-envelope conclusion of [F2] give $\sum_j\Psi_j<\infty$. Since $N_iN_j\leq(N_i^2+N_j^2)/2$, the total negative pair contribution is at most $C\sum_iN_i^2$ for a finite $C$. [F1, F2, algebra]

1.2 In case (i), choose an integer $k_0\geq2$ with $1/(k_0-1)\leq r_1$. Then $\chi(1/k)$ and $\chi(1/(k-1))$ are both defined for every $k\geq k_0$. Partition one unit cell into $k^d$ half-open cubes of side $1/k$, put $\chi_k=\chi(1/k)$, and $\Delta\chi_k=\chi_k-\chi_{k-1}\geq0$. If the cell contains $N$ points, the identity $\sum_jn_j^2-N=2\sum_j\binom{n_j}{2}$ and nonnegativity of $\sum_j(n_j-N/k^d)^2$ give at least $\frac12(N^2/k^d-N)$ same-subcube pairs at scale $k$. A fixed pair counted at scale $k$ has separation $s<1/k$, hence $k<1/s$; summing its nonnegative weights over all scales where it is counted is at most $\sum_{k=k_0}^{\lfloor1/s\rfloor}\Delta\chi_k\leq\chi(s)$. Thus the positive core energy in the cell dominates the sum of these weighted pair counts. With $K_N=\lfloor(N/2)^{1/d}\rfloor$, each $k\leq K_N$ satisfies $N^2/k^d-N\geq N^2/(2k^d)$, so the core energy is at least $$ \frac{N^2}{4}\sum_{k=k_0}^{K_N}\frac{\Delta\chi_k}{k^d}. $$ Summation by parts writes the coefficient as an initial constant plus $\sum_{k=k_0}^{K_N-1}\chi_k(k^{-d}-(k+1)^{-d})$; and $k^{-d}-(k+1)^{-d}\geq d/(2^{d+1}k^{d+1})$. The series $\sum_k\chi(1/k)k^{-d-1}$ diverges: on dyadic intervals $[2^{-j-1},2^{-j}]$, monotonicity bounds the integral above by $C_d2^{-jd}\chi(2^{-j-1})$, while the corresponding block $2^{j+1}\leq k<2^{j+2}$ contributes at least $c_d2^{-jd}\chi(2^{-j-1})$ to that series. The divergent core integral therefore forces the displayed coefficient to tend to infinity. [F1, algebra, construct]

2.1 In case (i), sum the cell core bound from step 1.2 and subtract the negative-pair bound from step 1.1. The resulting coefficient of $N_i^2$ tends to infinity with $N_i$. Above a finite threshold it dominates $2CN_i^2$; below that threshold its possible negative remainder is bounded by a constant times $N_i$. Taking $h(N)$ to be half the positive cell lower bound above the threshold and zero below it gives a nondecreasing extended-valued function with $h(N)/N^2\to\infty$ and $H_\phi\geq\sum_i h(N_i)-bN$. [F1, step 1.1, step 1.2, algebra]

3.1 In case (ii), choose $k$ with $1/k<r_h$ and partition every unit cell into $k^d$ subcubes. A finite-energy configuration has at most one point in each subcube, so $N_i\leq k^d$ for every $i$. Define $h(N)=0$ for $N\leq k^d$ and $h(N)=+\infty$ for $N>k^d$. If any cell exceeds this occupancy, the configuration has a forbidden pair and $H_\phi=+\infty$; otherwise stability gives $H_\phi\geq-BN=\sum_i h(N_i)-BN$. This proves the hard-core alternative. [F1, algebra, construct] ∎
