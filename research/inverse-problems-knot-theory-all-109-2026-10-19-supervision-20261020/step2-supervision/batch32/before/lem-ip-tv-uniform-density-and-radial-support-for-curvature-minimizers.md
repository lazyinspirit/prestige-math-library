---
id: lem-ip-tv-uniform-density-and-radial-support-for-curvature-minimizers
kind: lemma
title: Uniform density and radial support bounds for planar curvature minimizers
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-ip-tv-level-set-representatives-and-boundaries
  - def-ip-tv-variational-curvature
  - lem-ip-tv-finite-perimeter-ball-cut-calculus
  - lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets
  - lem-ip-neumann-bv-sobolev-poincare
  - thm-absolute-continuity-of-the-integral
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Iglesias, Mercier and Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems
      url: https://arxiv.org/pdf/1711.06495
      locator: Complete actual PDF14–18 read; local differential inequalities are retained, ambient Neumann boundary points and radial-tail extinction are proved explicitly here.
---

## Statement

Assume Countable Choice. Suppose $z_n\to z_\infty$ in $L^2(U)$ and $v_n=z_n+e_n$ with $\|e_n\|_2\le\eta$. Include $v_\infty=z_\infty$ with zero perturbation if desired. For each index, either sign $\sigma\in\{-1,1\}$, and any finite-measure finite-selected-perimeter set $E\subseteq U$ globally minimizing the selected perimeter minus $\int_E\sigma v_n$, use its ambient density-one representative $E^{(1)}$ and ambient boundary. The selected branch is full-space perimeter on $U=\mathbb R^2$; zero-extension Dirichlet perimeter on bounded Lipschitz $U=\Omega$ with the obstacle curvature and exterior lower bound $g\in L^2(\Omega^c)$; or relative Neumann perimeter on bounded connected Lipschitz $U=\Omega$ with specified $C_\Omega$ satisfying $\|u-u_\Omega\|_2\le C_\Omega TV(u;\Omega)$.

If $\eta<2\sqrt\pi$ in the full-space and Dirichlet branches, or $\eta<1/C_\Omega$ in the Neumann branch, there exist $c,r_0>0$, independent of the index, sign and minimizing set, such that
$$|E\cap B(x,r)|\ge c\pi r^2,\qquad |B(x,r)\setminus E|\ge c\pi r^2\quad(x\in\partial E^{(1)},\ 0<r<r_0).$$
All the full-space representatives and their boundaries lie in one common closed ball; in bounded branches they lie in $\overline\Omega$. The full-space sets also have uniform area and perimeter bounds. These conclusions include the limiting field and the empty set. They require no connected-component or Jordan decomposition of finite-perimeter sets.

## Facts & Assumptions

**Given:** The coefficient decomposition, global minimizers and actual branch hypotheses in the Statement. All minimizing comparisons are with actual finite-measure finite-selected-perimeter competitors.

[A1] Countable Choice is inherited from the measure and BV suppliers. [[def-countable-choice]]

[F1] Almost-everywhere exact ball-cut perimeters and sphere-volume derivatives, both removal and filling comparisons, and the Dirichlet obstacle extension are proved by distributional products. [[lem-ip-tv-finite-perimeter-ball-cut-calculus]]

[F2] The planar sharp estimate is $2\sqrt\pi\sqrt{|F|}\le P(F;\mathbb R^2)$. [[lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets]]

[F3] The specified Neumann inequality applies to indicators of finite-relative-perimeter subsets of $\Omega$. [[lem-ip-neumann-bv-sobolev-poincare]]

[F4] Integrals of a fixed integrable function are absolutely continuous with respect to measure; one-dimensional indefinite integrals are absolutely continuous and have the stated almost-everywhere derivative. The special integral chain identity used here is proved below, without importing a stronger-choice general converse FTC. [[thm-absolute-continuity-of-the-integral]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]

[F5] Canonical sets are density-one representatives, equal to the measurable classes almost everywhere, with ordinary ambient boundaries. [[def-ip-tv-level-set-representatives-and-boundaries]]

[F6] Cauchy–Schwarz bounds a curvature integral over a finite-area set by its L2 norm there times the square root of the area. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

1.1 Strong $L^2$ convergence gives $M:=\sup_n\|z_n\|_2<\infty$. For every $\varepsilon>0$ there is $m_\varepsilon>0$ such that $\sup_n\|z_n\|_{L^2(H)}\le\varepsilon$ whenever $|H|\le m_\varepsilon$. Indeed the limiting integral has this property by [F4]; for sufficiently large indices use $\|z_n\|_{L^2(H)}\le\|z_\infty\|_{L^2(H)}+\|z_n-z_\infty\|_2$, and apply [F4] separately to the finite prefix. The limiting field obeys the same bound. In full space there is also $R\ge1$ with $\sup_n\|z_n\|_{L^2(\mathbb R^2\setminus B(0,R))}\le\varepsilon$: use the tail of the limit, its norm approximation for large indices, and then the finite prefix. All these estimates hold for either sign. [A1, F4, given, construct]

1.2 We will integrate only actual volume integrals, and prove the needed chain identity directly. Let $G(t)=G(a)+\int_a^t q$ be monotone on $[a,b]$, and let $h$ be $C^1$ on its compact range. On a sufficiently fine finite uniform partition, uniform continuity of $G$ makes the oscillation of $h'$ on each interval's image at most $\omega$, with $\omega\to0$ as the mesh tends to zero. The mean value theorem writes the increment of $h(G)$ on that interval as $h'(\xi)$ times the increment of $G$, the latter being exactly the integral of $q$. Its difference from the integral of $h'(G(t))q(t)$ has absolute value at most $\omega$ times the integral of $|q|$ there. Sum and let the mesh tend to zero to obtain $h(G(b))-h(G(a))=\int_a^b h'(G(t))q(t)\,dt$. This finite-partition proof uses no converse theorem for arbitrary absolutely continuous functions. It applies to $h(s)=\sqrt s$ on any interval where the volume stays positively bounded away from zero. [F4, construct, algebra]


2.1 In full space choose $\varepsilon>0$ so $\gamma=2\sqrt\pi-\eta-\varepsilon>0$, and choose $r_0$ with $\pi r_0^2\le m_\varepsilon$. At $x\in\partial E^{(1)}$ let $a(r)=|E\cap B(x,r)|$ and $b(r)=|B(x,r)\setminus E|$. Both are positive for every $r>0$: a ball of zero $E$ measure has no density-one point in a smaller ball, whereas a ball of full $E$ measure consists entirely of density-one points in its interior. Either possibility contradicts $x\in\partial E^{(1)}$. Removal comparison [F1], [F2] and Cauchy–Schwarz give $\gamma\sqrt{a(r)}\le2a'(r)$ for almost every $0<r<r_0$. Filling comparison gives the identical inequality $\gamma\sqrt{b(r)}\le2b'(r)$, using the field with opposite sign on the complementary cut; no infinite-area complement is inserted into a global functional. On any interval $[s,r]\subset(0,r_0)$ the positive increasing $a$ is bounded away from zero. Apply the actual integral chain identity in step 1.2 with $h=\sqrt{\cdot}$ and $q=a'$, so the differential inequality yields $\sqrt{a(r)}-\sqrt{a(s)}\ge\gamma(r-s)/4$. Let $s\downarrow0$, using $a(s)\le\pi s^2$, to obtain $a(r)\ge\gamma^2r^2/16$. The same reasoning gives that bound for $b(r)$. Thus the full-space density constant is $\gamma^2/(16\pi)$, for every radius, not merely the good slicing radii. [F1, F2, F4, F5, F6, step 1.1, step 1.2, algebra]

2.2 For the Neumann branch let $V=|\Omega|>0$. For a finite-relative-perimeter $F\subseteq\Omega$, direct integration gives $\|\chi_F-|F|/V\|_2^2=|F|(V-|F|)/V$. Therefore [F3] implies $P(F;\Omega)\ge C_\Omega^{-1}\sqrt{|F|}\sqrt{1-|F|/V}$. Choose $\varepsilon>0$ and then $r_0>0$ with $\pi r_0^2<V$, uniform small-set norm at most $\varepsilon$, and $\gamma_N=C_\Omega^{-1}\sqrt{1-\pi r_0^2/V}-\eta-\varepsilon>0$; this is possible by $\eta<1/C_\Omega$. Applying this perimeter bound to the inside and complementary cuts in [F1] gives $\gamma_N\sqrt{a(r)}\le2a'(r)$ and $\gamma_N\sqrt{b_\Omega(r)}\le2b_\Omega'(r)$, where $a(r)=|E\cap B(x,r)|$ and $b_\Omega(r)=|(\Omega\setminus E)\cap B(x,r)|$. The first holds at every ambient boundary point and the second whenever that complementary volume is positive at every small radius. These are relative comparisons with no added perimeter on $\partial\Omega$. [F1, F3, F4, step 1.1, algebra, construct]

2.3 It remains to prove common support in full space. Fix $\varepsilon$ and $R\ge1$ as in step 1.1 with $\gamma=2\sqrt\pi-\eta-\varepsilon>0$, and set $C=M\sqrt\pi R$. The empty set is an admissible global competitor, so $P(E)\le\int_E\sigma v_n$. Splitting the exact field inside and outside $B(0,R)$ and using the global noise bound gives $P(E)\le C+(\eta+\varepsilon)\sqrt{|E|}$. By [F2], $\sqrt{|E|}\le C/\gamma$, and consequently $P(E)\le2\sqrt\pi C/\gamma$. These estimates are uniform in the index, sign and minimizing set. If $C=0$, they imply $|E|=0$ and the canonical set is empty. [F2, F6, given, step 1.1, algebra]

3.1 In the Dirichlet branch extend the signed curvature as $k_{n,\sigma}=\sigma v_n\chi_\Omega+g\chi_{\Omega^c}$. By [F1] the constrained minimizer admits the full-space removal and filling comparisons for every bounded ball, even at the obstacle boundary. Its exact part $\sigma z_n\chi_\Omega+g\chi_{\Omega^c}$ has a uniform small-measure $L^2$ bound by step 1.1 and [F4] applied to the one fixed exterior function $g$; its perturbation has norm at most $\eta$. Thus choose the same positive gap with a sufficiently small radius and repeat step 2.1 literally with these extended fields. This proves both ambient density inequalities on all of $\partial E^{(1)}$. The sign on $g$ remains as required by the obstacle inequality; the complement comparison itself reverses the whole field. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

3.2 Suppose $C>0$ and let $A(r)=|E\setminus B(0,r)|$. For almost every $r\ge R$, the outside-cut comparison in [F1] gives $P(E\setminus B(0,r))\le-2A'(r)+\int_{E\setminus B(0,r)}\sigma v_n\le-2A'(r)+(\eta+\varepsilon)\sqrt{A(r)}$. Applying [F2] yields $\gamma\sqrt{A(r)}\le-2A'(r)$. The function $A$ is absolutely continuous and nonincreasing. On each compact radius interval where it is positive, step 1.2 applied to the actual integral defining $A$ gives a square-root increment at most $-\gamma/4$ times the interval length. Therefore it must vanish by radius $R+4\sqrt{A(R)}/\gamma$: otherwise integrate up to a larger radius still having positive volume to obtain a negative upper bound for its square root. By continuity it vanishes at that radius as well, and remains zero afterwards. Since $\sqrt{A(R)}\le C/\gamma$, the common choice $R_*=R+4C/\gamma^2$ works for every set. Every point outside $\overline B(0,R_*)$ has a neighborhood of zero $E$ measure and is not in $E^{(1)}$; hence $E^{(1)}$ and its topological boundary are contained in that closed ball. This is radial extinction of actual cuts, without a claim about connected components. [F1, F2, F4, F5, F6, step 1.2, step 2.3, algebra]

4.1 For completeness the bounded Lipschitz graph hypothesis supplies uniform exterior area at every $x\in\partial\Omega$. Shrink finitely many graph charts still covering this compact boundary, and choose a common radius so every such boundary point and its ball lie in one chart; take the largest chart Lipschitz constant $L$. In coordinates centered at a boundary point with $\Omega$ above its graph, the rectangle $|h|<r/(8(L+1))$, $-r/2<k<-r/4$ lies below the graph and inside $B(x,r)$. Its area is $r^2/(16(L+1))$. The reversed graph orientation gives the same estimate. In particular no point of $\partial\Omega$ is in $E^{(1)}$, so $E^{(1)}\subseteq\Omega$ and $\partial E^{(1)}\subseteq\overline\Omega$. For $x\in\partial E^{(1)}$, $a(r)>0$ for every $r>0$, as in step 2.1, so integrate the first inequality of step 2.2 to obtain $a(r)\ge\gamma_N^2r^2/16$. If $x\in\Omega$, its canonical boundary property implies $b_\Omega(r)>0$ at every radius: a smaller ball contained in $\Omega$ cannot have full $E$ measure. The second inequality integrates to the same lower bound for $b_\Omega$, hence for the ambient complement. If $x\in\partial\Omega$, the exterior rectangle already bounds the ambient complement. Take the smaller of the two constants, and shrink $r_0$ to the uniform graph radius. This includes $E=\Omega$, for which the relative complement can be empty while the required ambient complement is not. Dirichlet sets have the same bounded support simply because their representatives lie in $\Omega$. [F4, F5, step 2.1, step 3.1, step 2.2, construct, algebra]

5.1 Take the constants from the appropriate branch; they are independent of the level set or sign because only the common exact-field moduli, noise threshold and fixed domain entered their construction. The proofs apply to the limiting field by adjoining the single index $\infty$ to step 1.1 with perturbation zero. Empty canonical sets have empty boundary and satisfy the density claims vacuously. Zero area, zero perimeter and the whole-domain Neumann case were explicitly retained. All good-radius exclusions were made separately for the fixed set and center under consideration; the argument did not require one null set of radii to work simultaneously for uncountably many centers. The integrated conclusions hold at every center and every smaller radius as stated. [A1, step 2.1, step 3.1, step 4.1, step 2.3, step 3.2, algebra] ∎
