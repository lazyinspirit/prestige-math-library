---
id: lem-ip-tv-finite-perimeter-ball-cut-calculus
kind: lemma
title: Almost-everywhere ball cuts and obstacle comparisons for planar perimeter
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-bv-strict-approximation
  - lem-ip-unit-vector-density-has-scalar-variation
  - lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-dominated-convergence
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - def-ip-tv-variational-curvature
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Iglesias, Mercier and Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems
      url: https://arxiv.org/pdf/1711.06495
      locator: Complete actual PDF14–18 and22–23 read; ball cuts are proved directly by distributional products below, without importing the cited Federer intersection theorem.
---

## Statement

Assume Countable Choice. In this lemma $\mathcal H^1$ means arclength, equivalently normalized one-dimensional Hausdorff measure. Let $U\subseteq\mathbb R^2$ be open, let $E\subseteq U$ have finite measure and finite relative perimeter, and fix $x\in\mathbb R^2$. Put $\mu=|D\chi_E|$ on $U$. For almost every $r>0$, $\mu(\partial B(x,r))=0$ and, with $s_E(r)=\mathcal H^1(E^{(1)}\cap U\cap\partial B(x,r))$,
$$P(E\cap B(x,r);U)=\mu(U\cap B(x,r))+s_E(r),\qquad P(E\setminus B(x,r);U)=\mu(U\setminus\overline B(x,r))+s_E(r).$$
The volume $a(r)=|E\cap B(x,r)|$ is locally absolutely continuous with $a'(r)=s_E(r)$ almost everywhere. The analogous inside-cut formula holds for $(U\setminus E)\cap B(x,r)$, with the complementary sphere slice. When $U=\mathbb R^2$ this clause requires no finite area for the uncut complement. For finite-area $E$, the outside volume $|E\setminus B(x,r)|$ has derivative $-s_E(r)$ almost everywhere.

For a real-valued measurable field $k:U\to\mathbb R$, if $E$ globally minimizes $P(F;U)-\int_F k$ among the finite-measure finite-relative-perimeter sets in $U$, with all displayed integrals finite, then for almost every $r$,
$$P(E\cap B;U)\le2s_E(r)+\int_{E\cap B}k,\qquad P((U\setminus E)\cap B;U)\le2s_{U\setminus E}(r)-\int_{(U\setminus E)\cap B}k.$$
For $U=\mathbb R^2$ one also has $P(E\setminus B)\le2s_E(r)+\int_{E\setminus B}k$. Here $B=B(x,r)$; the competitors may touch the boundary of $U$.

Full-space finite-measure finite-perimeter sets satisfy $P(F\cap G)+P(F\cup G)\le P(F)+P(G)$. Consequently, suppose bounded $\Omega$ has the global obstacle curvature $\kappa_\Omega$ and $\kappa_\Omega\ge g$ outside $\Omega$, with $g\in L^2(\mathbb R^2\setminus\Omega;\mathbb R)$. If $E\subseteq\Omega$ globally minimizes $P(F)-\int_F k$ among $F\subseteq\Omega$, then it minimizes against all full-space competitors with bounded symmetric difference for the extended field $k\chi_\Omega+g\chi_{\Omega^c}$. In particular all bounded-ball removal and filling comparisons above apply to this extended field.

## Facts & Assumptions

**Given:** The sets, finite derivative measures, integrable curvatures and the stated global minimizing or obstacle hypotheses.

[A1] Countable Choice is retained in the BV representation, differentiation and approximation suppliers. [[def-countable-choice]]

[F1] Distributional derivatives are finite vector Radon measures, their variation is their perimeter, and the test-field formula gives lower semicontinuity. [[def-ip-spatial-bv-and-distributional-tv]], [[lem-ip-bv-test-field-characterization-and-lsc]]

[F2] Smooth strict approximation and its proof give convolution approximation, the distributional product rule for smooth multipliers, and the bound $\int|\nabla(\rho_\varepsilon*u)|\le |Du|(\mathbb R^2)$. [[lem-ip-bv-strict-approximation]]

[F3] Scalar Lebesgue differentiation, dominated convergence, Fubini and change of variables hold for the displayed locally integrable functions. The normalized graph-area formula identifies circle arclength with $r\,d\theta$. Polar coordinates on annular sectors therefore integrate with Jacobian $r$, and integrals of one-dimensional integrable functions are absolutely continuous with that derivative. [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[thm-dominated-convergence]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]

[F4] The obstacle condition compares $\Omega$ with full-space competitors of compactly supported symmetric difference. [[def-ip-tv-variational-curvature]]

[F5] A continuous unit-vector density against a finite positive Radon measure has exactly that scalar variation. [[lem-ip-unit-vector-density-has-scalar-variation]]

## Proof

1.1 Write $f=\chi_E$, setting it to zero off $U$ only for the polar integrals. Polar change of variables and Fubini give $|E\cap B(x,r)|=\int_0^r\int_{S^1}f(x+s\theta)s\,d\theta\,ds$. Thus the volume is absolutely continuous on bounded radius intervals, and its derivative is the raw sphere integral for almost every radius. Since $E$ and its ambient density-one representative differ by a null set, another application of the same polar formula identifies their sphere integrals for almost every radius. For almost every fixed $r>0$, scalar differentiation in $s$ holds at $s=r$ for almost every $\theta$: apply differentiation on every compact annulus and then Fubini. In particular the averages of $|f(x+s\theta)-f(x+r\theta)|$ over shrinking radial intervals tend to zero for almost every $\theta$. They are bounded by one, so dominated convergence makes their integrals over $\theta$ tend to zero. This establishes the required radial trace in $L^1(S^1)$, not just a choice of a pointwise representative. A finite measure charges at most countably many of the disjoint circles $\partial B(x,r)$: for each positive integer $j$, only finitely many can have mass at least $1/j$. Exclude these radii as well. [A1, F1, F3, given, construct]

1.2 To prove submodularity, convolve $\chi_F,\chi_G$ by the same nonnegative mollifier, obtaining smooth integrable $u,v$ with gradient integrals bounded by $P(F),P(G)$ and converging in $L^1$ to the respective indicators by [F2]. For fixed $u,v$ put $h_\delta(s)=\sqrt{s^2+\delta^2}-\delta$, $m_\delta=(u+v-h_\delta(u-v))/2$ and $M_\delta=(u+v+h_\delta(u-v))/2$. Since $|h'_\delta|\le1$, each gradient is a convex combination of $\nabla u,\nabla v$, with complementary coefficients; hence $|\nabla m_\delta|+|\nabla M_\delta|\le|\nabla u|+|\nabla v|$. Both functions are integrable, and converge in $L^1$ to $\min(u,v),\max(u,v)$ as $\delta\downarrow0$: their errors are bounded by $|u-v|$ and tend pointwise to zero. Lower semicontinuity first in $\delta$, then in the mollifier radius, proves $P(F\cap G)+P(F\cup G)\le P(F)+P(G)$. The estimate is for the sum: the sum of the two lower limits is no larger than the lower limit of the two sums. No BV lattice rule is assumed. [A1, F1, F2, F3, construct, algebra]

2.1 At a remaining radius take smooth radial functions $h_\varepsilon$ decreasing from one to zero across $r-\varepsilon<|y-x|<r+\varepsilon$, with negative radial derivative a nonnegative unit-mass approximate identity. The product rule from [F2], or directly its test-function expansion, is $D(fh_\varepsilon)=h_\varepsilon Df+f\nabla h_\varepsilon\,dy$ on $U$. In tests compactly supported in $U$, the first term tends to $Df\mathbin\llcorner B$ because $|Df|(\partial B)=0$. The radial $L^1$ trace from step 1.1 and the smooth dependence of a test field on the radial variable make the second term tend to $-\nu f\,\mathcal H^1\mathbin\llcorner(U\cap\partial B)$, where $\nu=(y-x)/r$ and $f$ is the radial trace. Since $fh_\varepsilon\to f\chi_B$ locally in $L^1$, this proves the distributional measure identity $D(f\chi_B)=Df\mathbin\llcorner B-\nu f\,\mathcal H^1\mathbin\llcorner(U\cap\partial B)$. The two terms have mutually singular supports. On the sphere $f$ is zero or one almost everywhere and $|\nu|=1$, so taking their variation gives the first perimeter formula. Subtract this identity from $Df$ to obtain the outside formula, again with mutually singular bulk and sphere terms. These are identities of measures, so no reduced-boundary intersection or unproved trace theorem is used. [F1, F2, F5, step 1.1, construct, algebra]

3.1 The same test calculation for $1-f$ on $U$ gives $D((1-f)\chi_B)=-Df\mathbin\llcorner B-\nu(1-f)\mathcal H^1\mathbin\llcorner(U\cap\partial B)$. It is valid locally even when $1-f$ is not globally integrable, and its cut is integrable whenever $B$ is bounded. Its perimeter is therefore $\mu(U\cap B)+s_{U\setminus E}(r)$. Likewise $D\chi_{E\cup(U\cap B)}=Df\mathbin\llcorner(U\setminus\overline B)-\nu(1-f)\mathcal H^1\mathbin\llcorner(U\cap\partial B)$, whose perimeter is $\mu(U\setminus\overline B)+s_{U\setminus E}(r)$. The relative statement has no term on $\partial U$, since every test used has compact support in $U$. Subtracting the inside volume from $|E|$ gives the asserted outside-volume derivative. [F1, F3, step 1.1, step 2.1, algebra]

4.1 Compare the minimizing $E$ with $E\setminus B$. The exact formulas give $\mu(U\cap B)\le s_E(r)+\int_{E\cap B}k$; adding $s_E$ is the first comparison. Comparison with $E\cup(U\cap B)$ gives $\mu(U\cap B)\le s_{U\setminus E}(r)-\int_{(U\setminus E)\cap B}k$; add its slice to obtain the second. All competitors have finite measure and perimeter by steps 2.1 and 3.1, including those touching $\partial U$. In full space, comparison with $E\cap B$ instead gives $\mu(\mathbb R^2\setminus\overline B)\le s_E(r)+\int_{E\setminus B}k$. Adding its sphere slice gives the outside inequality. Global minimality, rather than merely compact-perturbation minimality of an unbounded set, justifies this last comparison. [given, step 2.1, step 3.1, algebra]

5.1 Finally let $F$ be a full-space finite-perimeter competitor with bounded symmetric difference from bounded $E\subseteq\Omega$. Thus $F$ is bounded up to null sets, so $F\cup\Omega$ is an admissible compact-perturbation competitor for the obstacle. Global constrained minimality, followed by step 1.2, gives $P(E)-\int_E k\le P(F\cap\Omega)-\int_{F\cap\Omega}k\le P(F)+P(\Omega)-P(F\cup\Omega)-\int_{F\cap\Omega}k$. The obstacle comparison says $P(\Omega)-P(F\cup\Omega)\le-\int_{F\setminus\Omega}\kappa_\Omega\le-\int_{F\setminus\Omega}g$. Combining the inequalities is exactly the claimed minimization for the extended field. Taking $F=E\setminus B$ or $E\cup B$ yields the same full-space inside-cut comparisons: both perturbations are bounded, so no global full-space minimizing hypothesis is required for those two local inequalities. Empty cuts, zero slices and zero perimeter terms remain in the identities above. [F4, given, step 4.1, step 1.2, algebra] ∎
