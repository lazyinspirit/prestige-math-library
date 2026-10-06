---
id: thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations
kind: theorem
title: Interior $W^{2,p}$ estimate for uniformly elliptic equations with continuous coefficients
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 2
deps: [thm-global-w-two-p-estimate-for-the-laplacian-on-rn, lem-lp-interpolation-absorbs-lower-order-derivatives, lem-cutoff-commutator-for-local-w-two-p-estimates, def-uniformly-elliptic-nondivergence-operator, def-sobolev-space-wkp-and-its-norm, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the cutoff-and-frozen-coefficient interior $W^{2,p}$ estimate, printed pp. 137-139 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.4, the local $L^p$ estimates for the nondivergence operator, printed pp. 243-247 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Part I of the proof of Theorem 3.7, the cutoff, freezing and absorption, printed pp. 105-106 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1<p<\infty$, $R>0$, $x_0\in\mathbb R^n$, and let $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ be uniformly elliptic on $B_R(x_0)$ with constants $\lambda,\Lambda$, continuous principal coefficients on the closed ball, and $\|b\|_\infty+\|c\|_\infty\le M$. Then every $u\in W^{2,p}(B_R(x_0))$ with $Lu=f\in L^p$ satisfies the scale-invariant estimate
$$\sum_{j=0}^{2}R^{j-2}\max_{|\beta|=j}\|D^\beta u\|_{L^p(B_{R/2}(x_0))}\le C\bigl(R^{-2}\|u\|_{L^p(B_R(x_0))}+\|f\|_{L^p(B_R(x_0))}\bigr),$$
where $D^0u=u$ and the maximum runs over multi-indices of order $j$,
where $C$ may depend on $n,p,\lambda,\Lambda,R\|b\|_\infty,R^2\|c\|_\infty$ and the modulus of continuity of $A$ on the ball. A radius-independent constant requires uniform control of these dimensionless lower-order bounds and of the modulus. The theorem assumes continuity of $A$; no estimate for merely measurable principal coefficients is asserted.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, $1<p<\infty$, $R>0$, $x_0$, an operator $L$ with continuous uniformly elliptic principal part on $\bar B_R(x_0)$ and $\|b\|_\infty+\|c\|_\infty\le M$, and $u\in W^{2,p}(B_R(x_0))$ with $Lu=f\in L^p(B_R(x_0))$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the Sobolev, Fourier and multiplier interfaces. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The global estimate for the Laplacian: for $1<p<\infty$ and $w\in W^{2,p}(\mathbb R^n)$, $\|D^2w\|_{L^p}\le C_{n,p}\|\Delta w\|_{L^p}$; the norm is the max over the second derivatives, equivalent to the Sobolev sum norm. ([[thm-global-w-two-p-estimate-for-the-laplacian-on-rn]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] If $A_0$ is a symmetric positive-definite matrix with spectrum in $[\lambda,\Lambda]$ and $w\in W^{2,p}(\mathbb R^n)$, put $S=A_0^{1/2}$, $\Phi(y)=x_0+Sy$, and $v=w\circ\Phi$. Testing the weak-derivative identities and changing variables by $\Phi$ gives $D_{y_i}v=\sum_k S_{ki}(D_{x_k}w)\circ\Phi$ and $D_{y_i y_j}^2v=\sum_{k,\ell}S_{ki}S_{\ell j}(D_{x_kx_\ell}^2w)\circ\Phi$ as $L^p$ classes; thus $v\in W^{2,p}(\mathbb R^n)$. The change-of-variables formula gives $\|g\circ\Phi\|_{L^p(dy)}=|\det S|^{-1/p}\|g\|_{L^p(dx)}$, so the Hessian norms before and after pullback are equivalent with constants depending only on $n,p,\lambda,\Lambda$, since $\|S\|\le\sqrt\Lambda$ and $\|S^{-1}\|\le\lambda^{-1/2}$. Finally $\Delta_yv=(A_0:D_x^2w)\circ\Phi$. Therefore the global Laplacian estimate [F1] gives $\|D^2w\|_{L^p}\le C(n,p,\lambda,\Lambda)\|A_0:D^2w\|_{L^p}$. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-sobolev-space-wkp-and-its-norm]], [[def-uniformly-elliptic-nondivergence-operator]])

[F3] Interpolation with $\varepsilon$-loss on the whole space: $\|Dw\|_{L^p(\mathbb R^n)}\le\varepsilon R\|D^2w\|_{L^p(\mathbb R^n)}+C(n,p,\varepsilon)R^{-1}\|w\|_{L^p(\mathbb R^n)}$ for every $w\in W^{2,p}(\mathbb R^n)$ and $R>0$. Its doubled-ball form also gives $\|Du\|_{L^p(B_\rho)}\le\varepsilon\rho\|D^2u\|_{L^p(B_{2\rho})}+C\rho^{-1}\|u\|_{L^p(B_{2\rho})}$. ([[lem-lp-interpolation-absorbs-lower-order-derivatives]])

[F4] The cutoff identity: for $\eta\in C_c^\infty(B_\rho)\subset C_c^\infty(\mathbb R^n)$ and $w\in W^{2,p}(B_\rho)$, a.e. $L(\eta w)=\eta Lw+2a^{ij}(\partial_i\eta)\partial_jw+(a^{ij}\partial_i\partial_j\eta+b^i\partial_i\eta)w$, and $\eta w$ extends by zero to a $W^{2,p}(\mathbb R^n)$ function; moreover $\eta D^2w=D^2(\eta w)-D\eta\otimes Dw-Dw\otimes D\eta-wD^2\eta$ in the sense of $L^p$ classes on $\operatorname{supp}\eta$. ([[lem-cutoff-commutator-for-local-w-two-p-estimates]])

## Proof

**Proof technique:** direct.

1.1 Frozen estimate on nested balls. Fix $x\in B_R(x_0)$ and $0<\rho<R/4$ with $B_{2\rho}(x)\subset B_R(x_0)$. Freeze $A$ at $A_0=A(x)$ and choose $\eta\in C_c^\infty(B_\rho(x))$ with $0\le\eta\le1$ and $\eta=1$ on $B_{\rho/2}(x)$, with $|D\eta|\le C_n\rho^{-1}$ and $|D^2\eta|\le C_n\rho^{-2}$. Set $w=\eta u$, extended by zero. The constant-coefficient estimate [F2] and the product identity [F4] give $\|D^2u\|_{L^p(B_{\rho/2}(x))}\le\|D^2w\|_{L^p(\mathbb R^n)}\le C\|A_0:D^2w\|_{L^p(\mathbb R^n)}\le C\Bigl(\|f\|_{L^p(B_\rho(x))}+\omega_A(\rho)\|D^2u\|_{L^p(B_\rho(x))}+\bigl(M_b+\Lambda\rho^{-1}\bigr)\|Du\|_{L^p(B_\rho(x))}+\bigl(M_c+\Lambda\rho^{-2}\bigr)\|u\|_{L^p(B_\rho(x))}\Bigr),$ where $\omega_A(\rho):=\sup\{|A(y)-A(z)|:y,z\in\bar B_R(x_0),\ |y-z|\le\rho\}$ and the constant $C$ depends only on $n,p,\lambda,\Lambda$. Apply the doubled-ball interpolation inequality [F3] to $u$ on $B_{2\rho}(x)$: $\|Du\|_{L^p(B_\rho(x))}\le\varepsilon\rho\|D^2u\|_{L^p(B_{2\rho}(x))}+C_{n,p,\varepsilon}\rho^{-1}\|u\|_{L^p(B_{2\rho}(x))}.$ Since $\|D^2u\|_{L^p(B_\rho)}\le\|D^2u\|_{L^p(B_{2\rho})}$, choose $\varepsilon>0$ small and then $\rho_* >0$ so that for every $0<\rho\le\rho_*$ the coefficient of $\|D^2u\|_{L^p(B_{2\rho}(x))}$ after substitution is at most any prescribed $\theta_0>0$; this is possible because $\omega_A(\rho)\to0$ and $\rho M_b\le R M_b$. Absorbing constants in the lower-order term yields the local estimate $\|D^2u\|_{L^p(B_{\rho/2}(x))}\le C_0\|f\|_{L^p(B_\rho(x))}+C_0\rho^{-2}\|u\|_{L^p(B_{2\rho}(x))}+\theta_0\|D^2u\|_{L^p(B_{2\rho}(x))},$ where $C_0$ depends on $n,p,\lambda,\Lambda,RM_b,R^2M_c$ and the modulus of continuity of $A$, but not on $x$ or $\rho\le\rho_*$. The cutoff is identically one on the smaller ball, so the left side is the unweighted Hessian norm there; no division by a vanishing cutoff is used. [F1, F2, F3, F4, given, A1, algebra]

2.1 Finite-overlap cover and hole filling. Write $M(r):=\|D^2u\|_{L^p(B_r(x_0))}$ and $U:=\|u\|_{L^p(B_R(x_0))}$, $F:=\|f\|_{L^p(B_R(x_0))}$. For $r<R$ with $\delta:=s-r>0$ sufficiently small, put $\rho=\delta/4$ and cover $B_r(x_0)$ by the balls $B_{\rho/2}(x_j)$ of a cubic lattice of mesh $\rho/(4\sqrt n)$; the enlarged balls $B_{2\rho}(x_j)$ lie in $B_s(x_0)$ and have overlap bounded by a constant depending only on $n$. Applying step 1.1 on each patch and taking the $p$-sum, the finite-overlap bounds give $M(r)\le C_1F+C_1\delta^{-2}U+\theta M(s),$ where $\theta$ can be fixed in advance as small as desired by choosing $\theta_0$ small enough relative to the overlap constant, and $C_1$ is independent of $r,s$ (it may depend on $\rho_*^{-1}$ only through the permitted modulus-of-continuity dependence). Choose $\theta<1/4$. Take $\delta_j=\delta_0 2^{-j}$ with $0<2\delta_0\le R/4$ and $\delta_0/4\le\rho_*$, and put $r_0=3R/4$, $r_{j+1}=r_j+\delta_j$; then $r_j\uparrow r_\infty\le R$. Iterating gives $M(r_0)\le C_1F\sum_{j=0}^{N-1}\theta^j+C_1U\sum_{j=0}^{N-1}\theta^j\delta_j^{-2}+\theta^NM(r_N).$ The first series is bounded, the second converges because $\delta_j^{-2}=\delta_0^{-2}4^j$ and $4\theta<1$, and the final term tends to zero since $u\in W^{2,p}(B_R(x_0))$. Therefore $\|D^2u\|_{L^p(B_{3R/4})}\le C(F+R^{-2}U)$, with $\delta_0^{-2}$ written as $R^{-2}$ times a constant depending on the permitted dimensionless radius ratio. To control first derivatives on $B_{R/2}$, choose a cubic lattice of mesh $R/(32\sqrt n)$ and retain the finitely many centers $x_j\in B_{9R/16}(x_0)$ whose balls $B_{R/16}(x_j)$ meet $B_{R/2}(x_0)$. These inner balls cover $B_{R/2}$: every point is within $R/64$ of a lattice point, and such a point lies in $B_{9R/16}$. Their doubled balls $B_{R/8}(x_j)$ lie in $B_{11R/16}(x_0)\subset B_{3R/4}(x_0)$. Apply the doubled-ball interpolation inequality [F3] with radius $R/16$ on each patch and take the finite $p$-sum; bounded overlap gives $R^{-1}\|Du\|_{L^p(B_{R/2})}\le C_n\bigl(\|D^2u\|_{L^p(B_{3R/4})}+R^{-2}U\bigr)\le C\bigl(F+R^{-2}U\bigr).$ The zeroth-order term satisfies $R^{-2}\|u\|_{L^p(B_{R/2})}\le R^{-2}U$. Combining this with the Hessian bound proves the displayed scale-invariant estimate. The exponent range is $1<p<\infty$ as in [F1] and [F3], and the constant has exactly the stated dependence. [step 1.1, F1, F3, induction, algebra] ∎

## Remarks

- The proof is the standard freezing argument: the frozen constant-coefficient operator is controlled by the global Laplacian estimate after a linear change of variables, and the coefficient oscillation on a small ball is absorbed with the interpolation inequality; the patching over the cover globalizes the local estimate to $B_{R/2}(x_0)$.
- Continuity of the principal coefficients is used only to make the oscillation $\sup_{B_\rho}|A-A(x_0)|$ arbitrarily small by choosing $\rho$; no Hölder regularity is asserted or needed in this scale.
