---
id: lem-tdmath-superstable-cell-energy-bound
kind: lemma
title: Cell-quadratic lower bound from superstability
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-superstable-regular-interaction]
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 3, Lemma 3.1, printed p.178 / PDF p.8, quadratic cell-occupation coercivity from the stable-plus-repulsive decomposition."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Section 1, superstability definition and cell-energy condition, printed pp.131–133 / PDF pp.4–6."
---

## Statement

Let $\phi=\phi_s+\phi_r$ be superstable in the splitting convention of [[def-tdmath-superstable-regular-interaction]]. Suppose $H_{\phi_s}(\omega)\geq-B_sN(\omega)$ and $\phi_r(x)\geq\delta>0$ for $|x|_\infty\leq r_0$, with $\phi_r\geq0$ elsewhere. For the unit cells $C_i=i+[0,1)^d$, there are constants $A>0$ and $B\geq0$ such that every finite configuration satisfies
$$H_\phi(\omega)\geq A\sum_{i\in\mathbb Z^d}N_{C_i}(\omega)^2-BN(\omega).$$
Only finitely many summands are nonzero. This is the cell form used in the continuum pressure arguments.

## Facts & Assumptions

**Given:** The potential and splitting above.

[F1] [[def-tdmath-superstable-regular-interaction]]: superstability supplies a stable part and a nonnegative repulsive part bounded below by $\delta$ on a fixed neighborhood of the origin.

## Proof

**Given:** The assumptions and the half-open unit-cell partition.

1.1 Choose an integer $k\geq1$ with $1/k\leq r_0$. Partition each unit cell $C_i$ into $k^d$ half-open subcubes of side $1/k$, and denote their occupancies by $n_{i,j}$, $1\leq j\leq k^d$. Distinct points in one subcube have $|x-y|_\infty<1/k\leq r_0$, so their repulsive pair energy is at least $\delta$. Therefore
$$H_{\phi_r}(\omega)\geq\frac{\delta}{2}\sum_{i,j}n_{i,j}(n_{i,j}-1).$$
Writing $\bar n=N_{C_i}(\omega)/k^d$, nonnegativity of $\sum_j(n_{i,j}-\bar n)^2$ expands to $\sum_j n_{i,j}^2\geq N_{C_i}(\omega)^2/k^d$, and $\sum_{i,j}n_{i,j}=N(\omega)$. Thus $H_{\phi_r}(\omega)\geq\frac{\delta}{2k^d}\sum_iN_{C_i}^2-\frac\delta2N$. [F1, algebra]

2.1 The stable part obeys $H_{\phi_s}(\omega)\geq-B_sN$. Add this inequality to step 1.1 and take $A=\delta/(2k^d)$ and $B=B_s+\delta/2$. This proves the cell-quadratic bound. If any term is $+\infty$, the inequality holds in the extended order; otherwise all sums are finite. [F1, step 1.1, algebra] ∎
