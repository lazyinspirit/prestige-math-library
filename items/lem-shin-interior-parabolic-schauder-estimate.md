---
id: lem-shin-interior-parabolic-schauder-estimate
kind: lemma
title: "Interior parabolic Schauder estimates by freezing the Gaussian kernel"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-heat-kernel-is-the-causal-fundamental-solution
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Definitions in §2.1 and Appendix F, classical-solvability context; kernel estimate proved locally"
---

## Statement

Assume Countable Choice. Let $0<\alpha<1$, and let $O\subset\mathbb R^d\times\mathbb R$ be open. Use $\rho((x,t),(y,s))=\max\{|x-y|,\sqrt{|t-s|}\}$ and $[v]_{\alpha;E}=\sup_{z\ne z'\in E}|v(z)-v(z')|/\rho(z,z')^\alpha$. Suppose the symmetric matrix $A$, vector $\beta$ and scalar $q$ are locally $\alpha$-Hölder for this metric, and $\lambda I\le A\le\Lambda I$ with $0<\lambda\le\Lambda<\infty$. For every compact parabolic cylinder $K$ contained in the interior of a larger compact cylinder $K'\subset O$ there is $C<\infty$, depending on these cylinders, $d,\alpha,\lambda,\Lambda$ and the coefficient Hölder norms on $K'$, such that every smooth $u$ satisfying $u_t-A:D^2u-\beta\cdot Du-qu=F$ near $K'$ obeys
$$\|u\|_{C^{2+\alpha,1+\alpha/2}(K)}\le C\bigl(\|u\|_{L^\infty(K')}+\|F\|_{C^{\alpha,\alpha/2}(K')}\bigr).$$
Here the left norm consists of the suprema and parabolic $\alpha$-Hölder seminorms of $u,Du,D^2u,u_t$. The constant does not depend on derivatives of the coefficients above their displayed Hölder regularity. The assertion is an estimate for smooth solutions, not a prior assumption of classical solvability.

## Statement references

[Shin et al., §2.1 and Appendix F: parabolic regularity setting](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** Countable Choice, the cylinders, coefficients, smooth solution and source in the Statement.

[A1] Countable Choice is inherited from the Gaussian integration and distribution suppliers ([[def-countable-choice]]).

[F1] The causal heat kernel has unit spatial mass, parabolic scaling, Gaussian derivative bounds and distributional equation $(\partial_t-\Delta)\Gamma=\delta$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]], [[thm-heat-kernel-is-the-causal-fundamental-solution]]).

[F2] A smooth cutoff equal to one near a compact set and supported inside a prescribed open neighborhood exists ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

1.1 Fix a constant symmetric matrix $A_0$ with eigenvalues in $[\lambda,\Lambda]$. The linear substitution $x=A_0^{1/2}y$ in [F1] gives $$G(x,t)=\mathbf1_{t>0}(4\pi t)^{-d/2}(\det A_0)^{-1/2}\exp\bigl(-x^TA_0^{-1}x/(4t)\bigr),\qquad (\partial_t-A_0:D^2)G=\delta.$$ Put $N=d+2$ and $K_{ij}=D_{ij}G$. Direct differentiation gives $|K_{ij}(z)|\le C\rho(z,0)^{-N}$, $|D_xK_{ij}(z)|\le C\rho(z,0)^{-N-1}$ and $|\partial_tK_{ij}(z)|\le C\rho(z,0)^{-N-2}$ away from zero, with Gaussian decay as $|x|/\sqrt t$ increases. The extension across $t=0$ is smooth away from $x=0$, since that decay dominates every power. The constants are uniform over $A_0$ in the given ellipticity interval. [A1, F1, given, algebra]

1.2 For use with cutoffs, the following interpolation estimate holds on nested cylinders, with norms scaled to their outer radius $r$: for each $\varepsilon>0$, the scaled lower-order $\alpha$ norms of $u$ and $rDu$ are at most $\varepsilon r^2(\|D^2u\|_{\alpha;r}+\|u_t\|_{\alpha;r})+C_\varepsilon\|u\|_\infty$, provided the finite difference segments lie in the larger cylinder. To verify it, write $D_iu(x,t)$ as a centered first difference of step $\theta r$ plus its Taylor integral remainder, bounded by $C\theta r\|D^2u\|_\infty$. Apply the same identity to differences between two points. For separations smaller than $\theta r$ use the top Hölder norms, and for larger separations use the supremum estimate and divide by the separation to the power $\alpha$. For time differences of $u$ use $|t-s|\|u_t\|_\infty$. For time differences of $Du$ use spatial first differences of step $\sqrt{|t-s|}$, bounding their time difference by $C\sqrt{|t-s|}\|u_t\|_\infty$ and the two remainders by $C\sqrt{|t-s|}\|D^2u\|_\infty$; then split at $|t-s|=\theta^2r^2$. The coefficients of the top norms are positive powers of $\theta$ because $\alpha<1$. Choosing $\theta$ small makes them at most $\varepsilon$; the larger-separation terms have finite constants depending on that $\theta$ and the cylinder separation. [given, algebra, choose]

2.1 Each positive-time spatial integral of $K_{ij}$ is zero. Its improper integrals on parabolic balls have a bound independent of the radius. Indeed integration of $D_{ij}G$ over $|x|<R$ gives a boundary integral of $D_jG$; its absolute value is at most $CR^dt^{-d/2-1}\exp(-cR^2/t)$. Integration for $0<t<R^2$, followed by $t=R^2s$, is bounded by $C\int_0^1s^{-d/2-1}e^{-c/s}ds<\infty$. The integral is independent of $R$ by scaling. Differences of two such truncations, hence the integrals on centered parabolic annuli, are bounded uniformly as well. This is the cancellation needed at the singularity; an absolute integral of $|K_{ij}|$ there is not asserted. [F1, step 1.1, algebra]

3.1 Let $v\in C_c^\infty$ have support in a parabolic cylinder of radius at most $r$ and put $F_0=v_t-A_0:D^2v$. Integrating the derivative of the Gaussian convolution from a time before the support gives $v=G*F_0$: the initial convolution is zero, its derivative is convolution with $F_0$, and the positive-time approximate identity gives the upper endpoint. This uses only [F1] and differentiation of smooth compactly supported functions. Differentiation of this identity expresses $D_{ij}v$ as the principal-value convolution with $K_{ij}$, with a fixed bounded constant multiple of $F_0$ if the truncation is by parabolic balls rather than positive time strips. That constant is the radius-independent truncation integral in step 2.1. [F1, step 1.1, step 2.1, construct]

4.1 The singular-integral estimates follow directly as follows. At a pole subtract $F_0$ evaluated at that pole. On an annulus of radius $s$, the difference is bounded by $[F_0]_\alpha s^\alpha$, and its absolute integral against $K_{ij}$ is at most $C[F_0]_\alpha s^\alpha$. For two poles at parabolic distance $h$, the parts within distance $4h$ of either pole are therefore bounded by $C[F_0]_\alpha\int_0^{4h}s^{\alpha-1}ds\le C[F_0]_\alpha h^\alpha$. On the complement use the same subtracted constant at both poles. The kernel difference is at most $Chs^{-N-1}$: spatial displacement follows from $D_xK_{ij}$, and time displacement, of size at most $h^2$, from $\partial_tK_{ij}$ and $h^2s^{-N-2}\le hs^{-N-1}$. Its integral is bounded by $C[F_0]_\alpha h\int_{4h}^\infty s^{\alpha-2}ds\le C[F_0]_\alpha h^\alpha$. Changing the near-region truncation produces annular pieces controlled by these same estimates; changing the subtracted constant produces at most $C|F_0(z)-F_0(z')|$ by step 2.1. Thus $[D^2v]_\alpha\le C[F_0]_\alpha$. On the support neighborhood, integrating only up to radius comparable with $r$ and using the bounded truncation term gives $\|D^2v\|_\infty\le C(\|F_0\|_\infty+r^\alpha[F_0]_\alpha)$; outside that neighborhood the kernel is nonsingular and its Gaussian bound gives the same estimate. The compact time support may be used to truncate all time integrals before subtraction, so no absolutely divergent integral at infinite time is introduced. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Since $v_t=F_0+A_0:D^2v$, the same bounds hold for $v_t$. In the scaled notation $\|g\|_{\alpha;r}=\|g\|_\infty+r^\alpha[g]_\alpha$, the result is $$r^2\bigl(\|D^2v\|_{\alpha;r}+\|v_t\|_{\alpha;r}\bigr)\le Cr^2\|v_t-A_0:D^2v\|_{\alpha;r}.$$ All constants depend only on $d,\alpha,\lambda,\Lambda$ and the fixed support-radius multiple. The strict inequality $\alpha<1$ is used in the convergent far integral of step 4.1. [step 4.1, algebra]

6.1 Choose a cutoff $\eta$ supported in a cylinder of radius $r$ near $z_0$, and put $v=\eta u$, extended by zero. Freeze $A_0=A(z_0)$. Leibniz's formula gives $$v_t-A_0:D^2v=\eta F+(A-A_0):D^2v+\beta\cdot Dv+qv+u(\eta_t-A:D^2\eta-\beta\cdot D\eta)-2(A D\eta)\cdot Du.$$ The scaled product norm of $(A-A_0):D^2v$ is bounded by $Cr^\alpha[A]_\alpha\|D^2v\|_{\alpha;r}$. Choose $r$ so that this coefficient, multiplied by the constant in step 5.1, is at most $1/4$, and absorb it there. The remaining drift, zero-order and cutoff terms involve only $u,Du$ and $F$; step 1.2 absorbs their top-norm contributions after choosing its $\varepsilon$ sufficiently small. Cutoffs with derivatives bounded by powers of the inverse gap between inner and outer cylinders are supplied by [F2] after rescaling. [F2, step 5.1, step 1.2, given, construct]

7.1 The resulting nested-cylinder inequality has the form $M(s)\le\varepsilon M(S)+C_\varepsilon(S-s)^{-m}B$, where $M$ is the full scaled top norm, $m<\infty$ is fixed and $B=\|u\|_\infty+\|F\|_\alpha$. To remove the outer top norm, choose radii $s_j=s_0+a(1-2^{-j})$ whose limiting cylinder is strictly inside the domain, and take $\varepsilon<2^{-m-1}$. Iteration gives a convergent geometric sum of the $B$ terms. The remainder $\varepsilon^jM(s_j)$ tends to zero because $u$ is smooth on the fixed larger compact cylinder. Thus $M(s_0)\le CB$. A finite cover of $K$ by the small cylinders in step 6.1, and step 1.2 for the lower derivatives, gives the stated estimate. The choices used coefficient Hölder bounds and ellipticity only, proving the asserted independence from higher coefficient derivatives. [step 1.2, step 6.1, algebra] ∎

## Source notes

The full Shin source definitions and Appendix F were read. That appendix cites a classical existence theorem and does not prove the estimate above; the kernel calculation is supplied here. The published heat-kernel suppliers provide their displayed kernel/distribution interfaces, not a variable-coefficient existence theorem.
