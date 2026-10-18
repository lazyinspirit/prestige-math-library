---
id: lem-ewald-lattice-shell-gaussian-tail-controllers
kind: lemma
title: "Uniform lattice-shell counts and explicit Gaussian tail controllers"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-countable-choice,
    def-ewald-three-dimensional-periodic-source-data,
    def-full-rank-lattice-covolume-and-dual-lattice,
    lem-ewald-screened-coulomb-kernel-and-self-limit,
    lem-lattice-fundamental-parallelotope-partitions-euclidean-space,
    thm-integration-by-parts,
    thm-of-archimedean
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a
        Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926\
        /lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§§4–6, printed pp. 4–7: Gaussian real-space and reciprocal-space decay
        and the cutoff context."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture
        notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_No\
        tes.pdf"
      locator: "Chapter 7, printed pp. 85–90: real and reciprocal Gaussian cutoffs and
        differentiated force terms."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For an invertible real $3\times3$ matrix $B$, put
$\Gamma=B\mathbb Z^3$ and
$$C_B=\bigl(2\|B^{-1}\|_2(1+\sqrt3\|B\|_2)+1\bigr)^3.$$
Here $\|\cdot\|_2$ is the Euclidean operator norm. Uniformly over every
translate $y+\Gamma$ and every integer shell $m\ge0$,
$$\#\{z\in y+\Gamma:m\le|z|<m+1\}\le C_B(m+1)^3.$$

For $\beta>0$, any integer $p\ge0$, and integer $M\ge0$, set
$$T_p(\beta,M)=\sum_{m=M}^{\infty}(m+1)^p e^{-\beta m^2}.$$
For any integer $J\ge M$ satisfying $2\beta J(J+1)\ge p$, define
$$I_0(J,\beta)=\frac{\sqrt\pi}{2\sqrt\beta}\operatorname{erfc}(\sqrt\beta J),\quad I_1(J,\beta)=\frac{e^{-\beta J^2}}{2\beta},$$
and recursively for $2\le s\le p$,
$$I_s(J,\beta)=\frac{J^{s-1}e^{-\beta J^2}}{2\beta} +\frac{s-1}{2\beta}I_{s-2}(J,\beta).$$
Then the finite controller
$$U_p(\beta,M,J)=\sum_{m=M}^{J}(m+1)^p e^{-\beta m^2} +\sum_{s=0}^{p}\binom ps I_s(J,\beta)$$
satisfies $T_p(\beta,M)\le U_p(\beta,M,J)$. Such a $J$ exists for every
$\beta>0$, $M\ge0$, and integer $p\ge0$.

## Facts & Assumptions

**Given:** Countable Choice, the full-rank cell matrix $A$ and angular reciprocal lattice from
[[def-ewald-three-dimensional-periodic-source-data]], an arbitrary invertible
$B\in GL_3(\mathbb R)$, a translate $y+B\mathbb Z^3$, $\beta>0$,
integer $p\ge0$, and $M\in\mathbb N$.

[F1] Each coset of a full-rank lattice has a representative in its closed fundamental parallelotope, whose coordinates lie in $[0,1]^3$ ([[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]).

[F2] $\operatorname{erfc}(s)$ is the nonnegative Gaussian tail $\frac2{\sqrt\pi}\int_s^\infty e^{-t^2}dt$ for $s\ge0$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F3] For every real $X$ there is an integer greater than $X$ ([[thm-of-archimedean]]).

[F4] Integration by parts holds on a finite interval when the factors and derivatives satisfy the stated integrability hypotheses ([[thm-integration-by-parts]]).

[A1] Countable Choice is assumed by the Gaussian-tail and lattice-tiling interfaces used here ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Under Countable Choice [A1], use [F1] to replace $y$ modulo $B\mathbb Z^3$ by a vector $y_0=Bv$ with $v\in[0,1]^3$. Thus $|y_0|\le\sqrt3\|B\|_2$. If $z=y_0+Bn$ lies in the shell $m\le|z|<m+1$, then $|n|\le\|B^{-1}\|_2(m+1+\sqrt3\|B\|_2)$. The number of integer triples with this bound is at most $(2\|B^{-1}\|_2(m+1+\sqrt3\|B\|_2)+1)^3\le C_B(m+1)^3$, proving the uniform shell count. [given, A1, F1, algebra]

1.2 Choose $J\ge M$ with $2\beta J(J+1)\ge p$, which exists by [F3]. For $x\ge J$, the derivative of $f(x)=(x+1)^pe^{-\beta x^2}$ has the sign of $p/(x+1)-2\beta x\le0$, so $f$ is nonincreasing. Therefore $\sum_{m=J+1}^{\infty}f(m)\le\int_J^{\infty}f(x)dx$. Expanding $(x+1)^p$ by the binomial theorem gives $\int_J^{\infty}f(x)dx=\sum_{s=0}^p\binom ps I_s(J,\beta)$. [given, F3, algebra]

2.1 The formulas for $I_0$ and $I_1$ follow by the substitutions $t=\sqrt\beta x$ and $u=\beta x^2$. For $s\ge2$, choose an integer $L>(s+1)/2$; $e^{\beta x^2}\ge(\beta x^2)^L/L!$ shows $x^se^{-\beta x^2}=O(x^{s-2L})$ is integrable at infinity. Apply [F4] on $[J,R]$ and let $R\to\infty$; the same inequality makes the boundary term $R^{s-1}e^{-\beta R^2}$ vanish. This gives $I_s=J^{s-1}e^{-\beta J^2}/(2\beta)+(s-1)I_{s-2}/(2\beta)$. Hence the finite sum through $J$ plus the integral tail in step 1.2 equals $U_p$ and bounds $T_p$. [A1, F2, F4, step 1.2, algebra] ∎

## Remarks

- The shell estimate is intentionally coarse. Its cubic factor is enough because every later term has Gaussian decay; no asymptotic lattice-point theorem is used.
- For real-space estimates take $B=A$. For reciprocal estimates take $B=2\pi A^{-T}$, whose lattice points are exactly the angular physical frequencies $\kappa_k$.
