---
dependency_level: 4
id: lem-bandlimited-tools-for-weighted-decoupling
kind: lemma
title: Local Fourier tools and homogeneous weighted decoupling transfer
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- thm-fourier-inversion-on-schwartz-space
- lem-smooth-unit-mass-compact-bump-on-euclidean-space
- lem-complex-translation-and-approximate-identity-interfaces
- lem-polynomial-weight-localization
- thm-tonelli-and-fubini-for-completed-product-measures
- thm-complex-holder-minkowski-and-the-quotient-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
---

## Statement

Assume Countable Choice, $E>n$ and $1\le p\le q<\infty$. The following estimates have constants depending only on the displayed dimensions, exponents and fixed geometric dilation factors.

For every moment-curve arc $J$ of length at most $R^{-1}$, $R\ge1$,
$$ \|E_Jg\|_{L^q_\sharp(B(c,R))}\le C\|E_Jg\|_{L^p_\sharp(w_{B(c,R),E})}. $$
For a canonical interval mesh of step $R^{-1}$ on $I$ (one final shorter interval allowed),
$$ \|E_Ig\|_{L^2(w_{B(c,R),E})}^2\le C\sum_J\|E_Jg\|_{L^2(w_{B(c,R),E})}^2. $$
If $|J|=\rho$, $r=\rho^{-k}$, $L=\rho^{-(k+1)}$, $1\le k<n$, tile a fixed dilation of $B=B(c,L)$ by boxes of short length $C_nr$ along $V_k(t_J)$ and long length $C_nL$ along its complement, with $t_J\in J$. Let $F_J$ on each tile be the supremum of $\|E_Jg\|_{L^q_\sharp(w_{B(y,r),E})}$ over the doubled tile. Then
$$ \|F_J\|_{L^q_\sharp(C'_nB)}\le C\|E_Jg\|_{L^q_\sharp(w_{B,E})}. $$
Finally any local decoupling inequality whose left side is an unweighted ball integral and whose right side is the $p$th power of a finite $\ell^2$ sum of weighted $L^p$ norms globalizes to the same polynomial weight, for $p\ge2$. The analogous geometric product of such $\ell^2$ sums over a fixed number of interval families also globalizes. No same-weight reverse Holder inequality with weighted $q>p$ on the left is asserted.

## Statement references

[Source proof development](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Schwartz Fourier inversion, smooth compact bumps, convolution and approximate-identity operations, polynomial lattice localization, completed Tonelli and complex Holder/Minkowski hold in the actual dependencies, under Countable Choice. The remaining explicit interfaces are [[def-countable-choice]] [[thm-fourier-inversion-on-schwartz-space]] [[lem-smooth-unit-mass-compact-bump-on-euclidean-space]] [[lem-complex-translation-and-approximate-identity-interfaces]] [[lem-polynomial-weight-localization]] [[thm-tonelli-and-fubini-for-completed-product-measures]] [[thm-complex-holder-minkowski-and-the-quotient-norm]].

## Proof

1.1 A smooth frequency cutoff $\chi$ equal to one on a given bounded frequency ball and supported in a slightly larger ball can be formed from the compact bump by convolution with an indicator and scaling. Integration by parts in its inverse transform gives $|\check\chi(z)|\le C_N(1+|z|)^{-N}$ for every integer $N$: apply $(1-\Delta_\xi)^m$ inside the compact integral and divide by $(1+4\pi^2|z|^2)^m$. Inversion gives a reproducing kernel $\kappa_R(z)=R^{-n}\check\chi(z/R)$ for any finite frequency measure supported in a ball of radius $C/R$. Fubini is valid since the frequency measure is finite and the kernel is integrable. In particular it applies to $E_Jg$, whose frequency measure is the pushforward of $g(t)\,dt$, of total variation at most $\|g\|_1$. [given, F1, construct, algebra]

2.1 Modulate $E_Jg$ by the phase at one endpoint of $J$. Since $|\Gamma(t)-\Gamma(t_J)|\le C_n|t-t_J|$, its frequency support is in a ball of radius $C_n/R$. For $x\in B(c,R)$ the reproducing identity bounds its absolute value by $C_NR^{-n}\int|E_Jg(z)|(1+|z-c|/R)^{-N}\,dz$. Weighted Holder with weight $w_{B,E}$, taking $N>E/p+n+1$, bounds this by $C R^{-n/p}\|E_Jg\|_{L^p(w_{B,E})}$; for $p=1$ use the pointwise comparison of the kernel to $w_{B,E}$. Integrating this uniform bound over $B$ proves the first assertion, with no weighted $q$ on the left. [given, F1, construct, algebra]

3.1 For the $L^2$ assertion choose a Schwartz function $\eta\ge1$ on the unit ball with Fourier support in a sufficiently small fixed ball: start with the inverse transform of a nonnegative small-frequency bump, which is nonzero near zero, take its squared modulus and scale and multiply by a constant. Then $\eta_R(x)=\eta((x-c)/R)$ majorizes the ball and is at most $C_Ew_{B,E}$. Color the canonical $R^{-1}$ intervals with three colors; intervals of one color are separated in their first frequency coordinate by at least $R^{-1}$, including a final shorter interval. The identity
$$ \int E_Jg\,\overline{E_Hg}\,\eta_R=\int_J\int_H g(t)\overline{g(u)}\,\widehat{\eta_R}(\Gamma(u)-\Gamma(t))\,dt\,du $$
comes from absolute Fubini and vanishes for distinct same-color intervals. Orthogonality within a color and $|z_1+z_2+z_3|^2\le3\sum|z_i|^2$ prove the local unweighted assertion with weighted right side. The homogeneous transfer in the final two steps proves its weighted version. A constant integer number of adjacent colors handles any fixed comparable step. [given, F1, construct, algebra]

4.1 For local constancy, Taylor's exact polynomial formula shows $\operatorname{proj}_{V_k(t_J)^\perp}(\Gamma(t)-\Gamma(t_J))$ has norm at most $C_n\rho^{k+1}$ on $J$: all terms of orders at most $k$ project to zero and the remaining derivatives are uniformly bounded. After modulation, partial convolution along $V_k(t_J)^\perp$ with a smooth frequency cutoff equal to one on that ball therefore reproduces $E_Jg$. Its kernel has scale $L$ and rapid bounds $C_NL^{-(n-k)}(1+|z|/L)^{-N}$. Taking the supremum of its translates by vectors of length at most $C_nL$ only changes the constant in this bound. A center displacement within a doubled tile splits into a component of length $O(r)$ in $V_k$ and length $O(L)$ in its complement. The first is absorbed by comparability of the radius-$r$ polynomial weights. The second is absorbed by the translated-kernel envelope. Jensen applied to its finite positive mass gives
$$ F_J(x)^q\le C r^{-n}\bigl(|E_Jg|^q*_{V_k^\perp}K_L*w_{B(0,r),E}\bigr)(x) $$
on the tile containing $x$, with one positive rapidly decreasing $K_L$, independent of $x$ and of the selected center. [given, F1, construct, algebra]

5.1 Integrate the preceding estimate over the fixed dilation $C'_nB$ and divide by its volume. Nonnegative Tonelli applies. Direct splitting into points within a fixed dilation and outside it gives
$$ r^{-n}\int_{C'_nB}w_{B(x,r),E}(z)\,dx\le Cw_{B,E}(z). $$
For the outside region the left side is bounded by $C r^{E-n}L^n|z-c|^{-E}\le C L^E|z-c|^{-E}$; inside it use the integrable full weight. Also $K_L*_{V_k^\perp}w_{B,E}\le Cw_{B,E}$ by $(1+|x-z-c|/L)^{-E}\le(1+|z|/L)^Ew_{B,E}(x)$ and $N>E+n$. These inequalities prove the local-constancy assertion with normalized volumes. The tile supremum is measurable: the norm varies continuously with its center by dominated convergence and the tile is compact; the function is constant on a countable tile partition. [given, F1, construct, algebra]

6.1 For homogeneous transfer take a fixed-scale lattice cover by balls of radius $R$ (enlarge lattice balls by a dimensional factor if needed). Polynomial localization gives $w_{B,E}\le C\sum_cw_{B,E}(c)\mathbf1_{B_c}$ and $\sum_cw_{B,E}(c)w_{B_c,E}\le Cw_{B,E}$. The first follows by a nearest center and the second is the proved lattice estimate; changing comparable radii costs only a dimensional constant. For $p\ge2$ define
$$ O_1(v)=\int|F|^pv,\qquad O_2(v)=\left(\sum_J(\int|F_J|^pv)^{2/p}\right)^{p/2}. $$
Both are monotone and homogeneous of degree one in $v$. The second is superadditive: for $r=2/p\le1$, normalization and concavity of $t^r$ give the reverse Minkowski inequality $(\sum(a_j+b_j)^r)^{1/r}\ge(\sum a_j^r)^{1/r}+(\sum b_j^r)^{1/r}$ for nonnegative vectors. Apply it to the two vectors of integrals and then to finite partial sums. [given, F1, construct, algebra]

7.1 Apply the local inequality on every lattice ball, multiply by $w_{B,E}(c)$, sum, and use the two localization comparisons and the preceding degree-one superadditivity. Increasing finite lattice subsets pass by monotone convergence. This globalizes with the same exponent $E$. For $M$ families replace $O_2$ by $\prod_{i=1}^M O_{2,i}^{1/M}$. Each individual factor is superadditive and degree one; finite Holder gives $\prod_i(a_i+b_i)^{1/M}\ge\prod_i a_i^{1/M}+\prod_i b_i^{1/M}$, so this product functional is also superadditive and degree one. The identical argument proves multilinear globalization. All integrals are of nonnegative measurable envelopes on sigma-finite Euclidean spaces; no preexisting integrability of a product is presumed. [given, F1, construct, algebra] ∎

