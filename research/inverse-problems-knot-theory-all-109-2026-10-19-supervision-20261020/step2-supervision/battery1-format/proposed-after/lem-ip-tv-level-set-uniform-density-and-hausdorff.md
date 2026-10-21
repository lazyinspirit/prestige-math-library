---
id: lem-ip-tv-level-set-uniform-density-and-hausdorff
kind: lemma
title: Uniform density and Hausdorff convergence of TV level-set boundaries
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-ip-tv-level-set-representatives-and-boundaries
  - def-ip-tv-variational-curvature
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-ip-tv-functional-on-l2-distributional-variation
  - lem-ip-tv-l2-functional-properties
  - lem-ip-tv-dual-attainment-and-certificate-limit
  - lem-ip-tv-vanishing-noise-primal-compactness
  - lem-ip-neumann-bv-sobolev-poincare
  - lem-ip-bv-coarea-formula
  - lem-ip-tv-l2-coarea-formula
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets
  - lem-ip-tv-finite-perimeter-ball-cut-calculus
  - lem-ip-tv-uniform-density-and-radial-support-for-curvature-minimizers
  - lem-ip-bv-lipschitz-trace-and-zero-extension
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
  - thm-bolzano-weierstrass
  - def-ip-tv-dual-source-certificate
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, Lemmas 3–7 and §§3.4, 4.1–4.3
      url: https://arxiv.org/pdf/1711.06495
      locator: Lemma 3, equations (23)–(27); Lemma 5 and §3.4; Lemma 8 and equations
        (29)–(33); §§4.1–4.3
    - title: Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon,
        Geometric properties of solutions to the total variation denoising
        problem
      url: https://arxiv.org/pdf/1602.00087
      locator: §2.7, Proposition 3, Proposition 8, and Theorem 1 proof
    - title: Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes,
        version 1.6
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
      locator: §§5.3 and 7.4–7.6
---

## Statement

Assume Countable Choice. Let $A:L^2(\Omega;\mathbb R)\to L^2(\Sigma,\mu;\mathbb R)$ be bounded and real-linear, let $f=Au^\dagger$, and suppose $u^\dagger$ is a minimum-TV exact solution with a source certificate $p^\dagger$. For $\alpha_n>0$ tending to zero and noises $w_n\in L^2(\Sigma,\mu;\mathbb R)$, assume $\|A^*\|\|w_n\|_2/\alpha_n\le\eta$ and let $u_n$ be supplied global minimizers of $\frac12\|Au-(f+w_n)\|_2^2+\alpha_n TV(u)$. Define $p_n=(f+w_n-Au_n)/\alpha_n$ and $v_n=A^*p_n$. Use $TV_2$ on $L^2(\mathbb R^2)$ for full-space TV, zero-extension Dirichlet TV on a bounded Lipschitz domain, and relative Neumann TV on a bounded connected Lipschitz domain; for bounded-domain geometry use the ambient zero-extended level sets and their topological boundaries in $\mathbb R^2$.

For full-space or Dirichlet TV, assume $\eta<2\sqrt\pi$; in the bounded Dirichlet case also assume $\Omega$ has global obstacle curvature $\kappa_\Omega\in L^1(\mathbb R^2;\mathbb R)$ with $\kappa_\Omega\ge g$ almost everywhere outside $\Omega$ for some real-valued $g\in L^2(\mathbb R^2\setminus\Omega;\mathbb R)$. For Neumann TV, let $C_\Omega$ be a constant from the BV Sobolev–Poincaré inequality $\|u-u_\Omega\|_2\le C_\Omega TV(u;\Omega)$ and assume $\eta<1/C_\Omega$.

For almost every nonzero $t$, the level set $E_n(t)$ has finite measure and perimeter, minimizes the branch-specific perimeter minus $\int_{E}\operatorname{sgn}(t)v_n$ under compactly supported perturbations, and satisfies $P(E_n(t))=\operatorname{sgn}(t)\int_{E_n(t)}v_n$. There are constants $c>0$ and $r_0>0$, independent of $n$ and almost every such $t$, such that for every $x\in\partial E_n(t)$ and $0<r<r_0$,
$$|B(x,r)\cap E_n(t)|\ge c|B(x,r)|,\qquad |B(x,r)\setminus E_n(t)|\ge c|B(x,r)|.$$
In the full-space branch all these level sets are contained in one common ball; in the bounded branches they lie in $\overline\Omega$. The same density and support conclusions are asserted for any selected minimum-TV exact limit that carries the inherited source certificate, using zero noise. Whenever the corresponding level sets converge in measure, their canonical boundaries converge in Hausdorff distance.

## Statement references

[[def-ip-tv-level-set-representatives-and-boundaries|Canonical level sets use density-one representatives and ambient boundaries.]]

[[def-ip-tv-variational-curvature|Variational curvature uses the full-space, Dirichlet, or Neumann perimeter convention.]]

[[def-ip-tv-dual-source-certificate|A source certificate places its adjoint image in the subdifferential at an exact minimum-TV truth.]]

[[lem-ip-neumann-bv-sobolev-poincare|The Neumann threshold uses the bounded-domain BV Sobolev–Poincaré constant.]]

## Facts & Assumptions

**Given:** Countable Choice, the linear map and TV branch, a minimum-TV exact source-certified truth, the noise condition, and supplied global regularized minimizers as in the Statement.

[A1] Countable Choice is used by the coarea, BV representation, and compactness suppliers. ([[def-countable-choice]])

[F1] [[lem-ip-tv-dual-attainment-and-certificate-limit]]: each supplied minimizer has $p_n=(f+w_n-Au_n)/\alpha_n$, $v_n=A^*p_n\in\partial TV(u_n)\cap\partial TV(0)$, the exact-data fields $v_{\alpha_n,0}$ converge strongly in $L^2$ to $v_0$, and $\|v_n-v_{\alpha_n,0}\|_2\le\|A^*\|\|w_n\|_2/\alpha_n\le\eta$.

[F2] [[def-ip-tv-dual-source-certificate]]: the initial exact truth is minimum-TV and the source certificate supplies a subgradient in the real Hilbert pairing.

[F3] [[def-ip-tv-level-set-representatives-and-boundaries]]: for $t>0$ use the density-one representative of $\{u>t\}$; for $t<0$ use that of $\{u<t\}$; bounded-domain sets are viewed by zero extension solely for their ambient geometry.

[F4] [[lem-ip-tv-l2-coarea-formula]] and [[lem-ip-bv-coarea-formula]]: full-space finite-variation $L^2$ functions and bounded-domain BV functions have the corresponding positive-superlevel/negative-sublevel coarea identities.

[F5] [[def-ip-tv-variational-curvature]]: variational curvature means minimization of the branch-specific perimeter minus the signed integral of its curvature over compactly supported symmetric-difference perturbations.

[F6] [[lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets]]: $4\pi|E|\le P(E;\mathbb R^2)^2$ for finite-area finite-perimeter planar sets.

[F7] [[lem-ip-neumann-bv-sobolev-poincare]]: on a bounded connected Lipschitz domain, $\|u-u_\Omega\|_2\le C_\Omega TV(u;\Omega)$ for the stated Neumann constant.

[F8] [[lem-ip-bv-test-field-characterization-and-lsc]]: the spatial test-field variation is lower semicontinuous under $L^1$ convergence and equals perimeter on finite-perimeter indicators.

[F9] [[thm-bolzano-weierstrass]]: every bounded scalar real sequence has a convergent subsequence. Applying it to the first coordinate and then to the second coordinate of that subsequence gives a convergent subsequence in $\mathbb R^2$, since the first-coordinate convergence is retained.

[F10] Actual ball-cut and obstacle comparisons, uniform two-sided density in all three branches, and a common full-space support bound follow from distributional ball products and radial-tail extinction. [[lem-ip-tv-finite-perimeter-ball-cut-calculus]], [[lem-ip-tv-uniform-density-and-radial-support-for-curvature-minimizers]]

[F12] The distributional L2 TV is proper, convex, lower semicontinuous and positively one-homogeneous, and agrees with BV TV on integrable functions. [[lem-ip-tv-l2-functional-properties]]

[F11] A bounded Lipschitz-domain BV indicator has a BV zero extension, so its ambient perimeter is finite even in the Neumann branch. Completed Fubini and Tonelli apply to the signed layer-cake integrals when their absolute integral is finite. [[lem-ip-bv-lipschitz-trace-and-zero-extension]], [[thm-tonelli-and-fubini-for-completed-product-measures]]

[F13] The real Hilbert pairing satisfies Cauchy–Schwarz. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

1.1 The TV functional is proper, convex, lower semicontinuous and positively one-homogeneous by [F12]. On a bounded domain $L^2\subset L^1$, so the relative functional agrees with that test-field functional by [F8]; the Dirichlet version is its composition with the linear isometric zero-extension map into full-space $L^2$. Thus the hypotheses of [F1] hold. Comparison of each objective with its finite value at zero also gives finite TV at a supplied minimizer. Put $z_n=v_{\alpha_n,0}=A^*p_{\alpha_n,0}$. By [F1], $z_n\to v_0=A^*p_0$ strongly in $L^2(\Omega)$ and $v_n=z_n+e_n$ with $\|e_n\|_2\le\eta$. Thus the exact-field sequence, its limit and the noisy fields have precisely the coefficient decomposition required by [F10]. In particular their uniform small-measure moduli and, in full space, exact-field tail moduli follow from strong convergence, as proved there, without an assumed uniform integrability of the noisy perturbations. [F1, F8, F10, F12, given, construct]

1.2 For each supplied minimizer, [F1] and positive one-homogeneity imply $R(u_n)=\langle v_n,u_n\rangle$ and $v_n\in\partial R(0)$. The selected TV is even, since its test-field class is symmetric and zero extension is linear. Applying its inequality to both $\chi_F$ and $-\chi_F$ gives $P_*(F)\ge\sigma\int_Fv_n$ for either sign $\sigma$, for every finite-area finite-selected-perimeter competitor; $P_*$ denotes the selected branch perimeter throughout this proof. Indeed these indicators belong to $L^2$ and their selected TV is exactly $P_*$ by [F8] and the boundary conventions. In full space every nonzero level has finite area by $|\{|u_n|>|t|\}|\le\|u_n\|_2^2/t^2$. Bounded-domain levels have finite area automatically. Coarea [F4] gives finite selected perimeter for almost every nonzero level. Relative-perimeter Neumann levels also have finite ambient perimeter by [F11]. Signed layer cake and Cauchy–Schwarz give an absolutely integrable level pairing: the integral over levels of $\int_{E_n(t)}|v_n|$ is $\int|u_n||v_n|\le\|u_n\|_2\|v_n\|_2$. Hence [F11] and coarea show that the integral of the nonnegative gaps $P_*(E_n(t))-\operatorname{sgn}(t)\int_{E_n(t)}v_n$ equals $R(u_n)-\langle v_n,u_n\rangle=0$. Each gap therefore vanishes almost everywhere. Their value zero is the global minimum of $P_*(F)-\operatorname{sgn}(t)\int_Fv_n$, since every competitor has nonnegative value. This proves the stated equality and even global branch minimization, which in particular implies compact-perturbation variational curvature [F5]. Taking the countable union of exceptional level sets makes this true simultaneously for all $n$. [A1, F1, F3, F4, F5, F8, F11, F13, algebra]

2.1 The threshold and actual obstacle assumptions are exactly those of [F10]. Apply it to every calibrated set from step 1.2, with either level sign. It supplies one $c,r_0>0$ for both ambient density inequalities at every point of each canonical boundary, independently of the index and the nonexceptional level. In the Dirichlet branch the actual obstacle extension uses perimeter submodularity from [F10]; in the Neumann branch its proof uses relative cuts and the specified $C_\Omega$, and at points on $\partial\Omega$ it uses the uniform Lipschitz exterior area for the ambient complement. Thus no false relative-complement estimate is imposed on the valid case $E=\Omega$. In full space [F10] compares $E$ with actual radial cuts and proves finite-radius extinction of $|E\setminus B(0,r)|$, giving one common ball containing the density-one sets and their topological boundaries. Bounded-domain representatives and boundaries lie in $\overline\Omega$. These are the full density and support conclusions, rather than assumptions for the transfer below. [F3, F6, F7, F10, step 1.1, step 1.2, given, construct]

3.1 The limiting field calibrates every minimum-TV exact solution $u_0$ under consideration. More explicitly, the dual supplier [F1] defines $p_0\in\{p:A^*p\in\partial R(0),\ \langle f,p\rangle=R(u^\dagger)\}$. For any such exact minimum $Au_0=f$ and $R(u_0)=R(u^\dagger)$, one has $\langle v_0,u_0\rangle=\langle p_0,f\rangle=R(u_0)$, while $v_0\in\partial R(0)$. Its subgradient inequality is therefore also the inequality at $u_0$. Repeat step 1.2 with $u_0,v_0$; its almost-everywhere level sets are calibrated global minimizers. Adjoin the limiting exact field with perturbation zero in [F10]. The very same coefficient moduli and noise threshold used in step 2.1 then give the same uniform density and support conclusions for this limit. This includes any selected minimum-TV exact limit carrying the inherited certificate; it does not identify that solution with $u^\dagger$ without uniqueness. [F1, F2, F4, F10, F11, step 1.2, step 2.1, algebra]

4.1 Fix a nonzero nonexceptional level for which the corresponding sets converge in measure to such a canonical limit $E_0$. If $E_0=\varnothing$ and infinitely many $E_n$ are nonempty, their bounded common support makes each boundary nonempty: a boundaryless subset of connected $\mathbb R^2$ is clopen, and the only bounded clopen set is empty. Choose a boundary point and one fixed $0<r<r_0$; the density estimate gives $|E_n\triangle E_0|\ge c\pi r^2$, a contradiction. If $E_0$ is nonempty, it has positive measure by its density-one definition, so convergence rules out infinitely many empty $E_n$. The empty status therefore agrees eventually; two empty boundaries have Hausdorff distance zero. In the nonempty case, if $x_n\in\partial E_n$ stays at distance at least $\delta>0$ from $\partial E_0$, common compact support and [F9] give a subsequence $x_n\to x$. For $r<\min(r_0,\delta/4)$ the connected ball $B(x_n,r)$ misses $\partial E_0$ and is entirely in $E_0$ or entirely outside it. The two-sided density of $E_n$ forces symmetric difference at least $c\pi r^2$, again a contradiction. Conversely, if $y_n\in\partial E_0$ stays at distance at least $\delta$ from $\partial E_n$, take a convergent subsequence with limit $y\in\partial E_0$. A fixed smaller connected ball about $y$ misses every corresponding $\partial E_n$, so along a further subsequence its status is always full or always empty. Measure convergence makes $E_0$ full or empty almost everywhere on that ball. By the density-one definition it is then actually full or empty in a smaller ball, contradicting $y\in\partial E_0$. Both directed Hausdorff distances tend to zero, with all point and subsequence selections allowed by [A1]. [A1, F3, F9, step 2.1, step 3.1, choose, construct, contradiction] ∎
