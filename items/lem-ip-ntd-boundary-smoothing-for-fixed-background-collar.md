---
id: lem-ip-ntd-boundary-smoothing-for-fixed-background-collar
kind: lemma
title: Uniform NtD estimates from a fixed harmonic boundary collar
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-mean-zero-neumann-problem-wellposedness
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - lem-ip-boundary-chart-lifting-and-fourier-projection
  - thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one
  - thm-interior-h-k-plus-two-elliptic-regularity
  - thm-plancherel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: de Hoop, Kovachki, Lassas and Nelsen, Extension and neural operator
        approximation of the electrical impedance tomography inverse map
      url: https://arxiv.org/pdf/2511.20361
      locator: Lemma 3.4 and its complete Appendix A proof, PDF pp.16,53–58. The proof
        below uses a collar Rellich identity and a symmetric matrix argument.
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega$ be a bounded connected smooth domain, let $\Omega'\Subset\Omega$, let $0<m\le1\le M<\infty$, and let $m\le\gamma\le M$ be measurable with $\gamma=1$ outside $\Omega'$. Put $M_\partial=\partial\Omega$ and give the NtD maps their total-boundary-mean-zero representatives. The spectral space $H^{1/2}_\Delta(M_\partial)$ is equivalent to the chart trace space $H^{1/2}(M_\partial)$, including their quotients by constants and mean-zero duals. Uniformly in $\gamma$,
$$\|\mathscr R_\gamma f\|_{H^1_\Delta(M_\partial)}\le C\|f\|_{L^2(M_\partial)}\quad\left(\int_{M_\partial}f=0\right).$$
For every integer $q\ge0$ there is $C_q$ such that
$$\|(\mathscr R_\gamma-\mathscr R_1)F\|_{H^q_\Delta(M_\partial)}\le C_q\|F\|_{H^{-1/2}_\Delta(M_\partial)}$$
for every mean-zero weak Neumann flux $F$. If $w_j=1+\lambda_j$ and $(e_j)$ is any orthonormal boundary Laplace–Beltrami basis on the total-mean-zero subspace, the matrix $b_{ij}=\langle(\mathscr R_\gamma-\mathscr R_{\gamma_0})e_j,e_i\rangle$ of any two such conductivities satisfies, for every $L>0$,
$$|b_{ij}|\le C_L(w_iw_j)^{-L}.$$
The constants depend only on the displayed fixed data and $q$ or $L$. More generally, any $v\in H^1$ harmonic with zero weak normal derivative on a fixed smooth boundary collar has $\|v|_{M_\partial}\|_{H^q_\Delta}\le C_q\|v\|_{H^1(\text{collar})}$ for every integer $q\ge0$, using a fixed smaller collar for the boundary estimate.

## Statement references

[[def-ip-mean-zero-ntd-and-smoothed-kernel-observation|The actual NtD and boundary spectral convention.]]

[[lem-ip-calderon-boundary-trace-quotient-identification|Chart trace spaces and quotient norms.]]

## Facts & Assumptions

**Given:** the domain, fixed collar, ellipticity bounds and spectral conventions in the Statement.

[F1] For $d\ge2$ and $\Omega\subset(0,1)^d$, weak Neumann solutions exist modulo constants and obey the uniform $H^1/\mathbb R$ energy estimate in the quotient flux norm. ([[lem-ip-mean-zero-neumann-problem-wellposedness]])

[F2] In the same normalized-domain setting, the quotient trace norm agrees up to fixed constants with the chart $H^{1/2}$ norm modulo constants. ([[lem-ip-calderon-boundary-trace-quotient-identification]])

[F3] In the same normalized-domain setting, the spectral boundary basis is complete, its $H^1_\Delta$ norm is the gradient form norm, and its counting function is at most $C(1+\Lambda)^{(d-1)/2}$. Finite chart localization and reassembly are bounded on $L^2,H^1$ and are left inverses. ([[lem-ip-boundary-spectral-counting-and-sobolev-scale]], [[lem-ip-boundary-chart-lifting-and-fourier-projection]])

[F4] Bounded tangential difference quotients give the corresponding weak derivatives, with the integral integration-by-parts identity valid for compactly supported tests; smooth-coefficient interior equations gain arbitrarily many derivatives by nested local estimates. ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[thm-interior-h-k-plus-two-elliptic-regularity]])

[F5] Euclidean Fourier Parseval and the spectral basis Parseval hold. ([[thm-plancherel]], [[lem-ip-boundary-spectral-counting-and-sobolev-scale]])

[A1] The two choice assumptions enter at the weak Neumann, trace, spectral and Sobolev interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the fixed geometry and conductivities in the Statement.

1.1 First consider an ambient dimension of one. A bounded connected domain is an interval $(a,b)$; its boundary is the two-point set with counting measure, its tangential Laplacian is zero, and every spectral and chart boundary Sobolev norm is equivalent to the finite-dimensional Euclidean norm. A mean-zero flux has the form $f=(-j,j)$, and the weak solution satisfies $\gamma u'=j$. Hence the mean-zero NtD trace is $\mathscr R_\gamma f=(L_\gamma/2)f$, where $L_\gamma=\int_a^b\gamma^{-1}\le(b-a)/m$. This proves all the stated NtD bounds, including the matrix bound since every spectral weight is one. The same finite-dimensional argument applies to quotient fluxes. A harmonic function with zero normal derivative is constant on each of the two collar intervals; its endpoint values are bounded by its collar $H^1$ norm. This proves the final collar estimate as well. [given, construct, algebra]

1.2 For $d\ge2$, choose a fixed similarity $S(x)=a+\ell x$, $\ell>0$, with $\widehat\Omega=S(\Omega)\subset(0,1)^d$, and transport the collar and conductivity by $S$. Pullback is a bounded isomorphism on $H^1$, carries $H_0^1$ onto $H_0^1$, and preserves constants; it therefore induces bounded isomorphisms on the trace quotient and its dual. For $\widehat u=u\circ S^{-1}$, a weak flux transforms as $\widehat F([\operatorname{Tr}\widehat v])=\ell^{d-2}F([\operatorname{Tr}(\widehat v\circ S)])$: the energy change of variables is $\int_{\widehat\Omega}\widehat\gamma\nabla\widehat u\cdot\overline{\nabla\widehat v}\,dy=\ell^{d-2}\int_\Omega\gamma\nabla u\cdot\overline{\nabla(\widehat v\circ S)}\,dx=\widehat F([\operatorname{Tr}\widehat v])$. For boundary flux densities this gives $\widehat f=\ell^{-1}f\circ S^{-1}$. Thus [F1] on $\widehat\Omega$ gives the corresponding energy estimate on $\Omega$. The surface change of variables gives the unitary map $Uf=\ell^{-(d-1)/2}f\circ S^{-1}$ on boundary $L^2$; it preserves total mean zero and satisfies $\mathscr R_{\widehat\gamma}U=\ell U\mathscr R_\gamma$. The weak tangential gradient form scales by $\ell^{-2}$, so eigenvalues transform as $\widehat\lambda_j=\ell^{-2}\lambda_j$ and $1+\widehat\lambda_j$ is comparable to $1+\lambda_j$ with fixed constants. Chart Sobolev norms and their dual norms are also equivalent under this fixed smooth affine change of variables. Consequently every asserted spectral, chart, NtD and collar estimate transfers between these two domains with constants depending only on the fixed geometry. It suffices to prove the remaining assertions on $\Omega\subset(0,1)^d$, where the exact interfaces [F1]–[F3] apply. [A1, F1, F2, F3, given, construct, algebra]

1.3 Here is the needed half-order identification, without assuming an unproved equivalence for the full spectral scale. For a Hilbert pair $(E_0,E_1)$ use $K(t,f)^2=\inf_{f=f_0+f_1}(\|f_0\|_{E_0}^2+t^2\|f_1\|_{E_1}^2)$. In the spectral $L^2,H^1$ pair, independent minimization of each coefficient gives $K(t,f)^2=\sum_j|f_j|^2t^2w_j/(1+t^2w_j)$. Integration against $t^{-2}\,dt$ yields a fixed positive multiple of $\sum_jw_j^{1/2}|f_j|^2$, by substituting $t\sqrt{w_j}$ and Tonelli. Use the single-boundary versions of the chart maps: $Gf=((\psi_jf)\circ\phi_j^{-1})_j$ and $L(v)=\sum_j\psi_j(v_j\circ\phi_j)$, with zero extension. The finite chart Jacobian bounds and product rule give their $L^2,H^1$ bounds, while $\sum_j\psi_j^2=1$ gives $LG=I$, exactly as in [F3] with one chart factor. These maps bound the respective $K$ functionals in both directions (apply either map to every decomposition, using its endpoint bounds and its left inverse). For a compactly supported chart function the identical Fourier calculation gives weight $(1+|\xi|^2)^{1/2}$. This is equivalent to its Slobodeckij norm: Parseval applied to $f(\cdot+h)-f$ and integration against $|h|^{-n-1}\,dh$ give the homogeneous weight $c_n|\xi|$, with $0<c_n<\infty$ by splitting $|h|\le1$ and $|h|>1$. Smooth compact chart cutoffs and bi-Lipschitz changes of coordinates preserve this norm by the difference definition, using $|\psi(x)-\psi(y)|\le C|x-y|$ for the product term. Thus [F2] identifies the trace quotient with $H^{1/2}_\Delta/\mathbb R$, and duality identifies its mean-zero dual with $H^{-1/2}_\Delta$. Subtracting the total surface mean is bounded in every norm here, even when the boundary is disconnected. [A1, F2, F3, F5, given, construct]

1.4 We record the local homogeneous-Neumann estimate used below. In boundary normal coordinates $(y,t)$ on a fixed collar, the Laplace equation is $\partial_i(a^{ij}\partial_jv)=0$ with smooth positive coefficients, $a^{t\ell}=0$ for every tangential index $\ell$, and homogeneous conormal condition $\partial_tv=0$ on $t=0$. For a compactly supported collar cutoff $\eta$, tangential testing with $-\delta_{-h}(\eta^2\delta_hv)$ gives $c\|\eta\nabla\delta_hv\|_2^2\le C\|v\|_{H^1}^2+(c/2)\|\eta\nabla\delta_hv\|_2^2$: the coefficient difference is bounded by $C|h|$ before division by $h$, the cutoff terms by $C\|v\|_{H^1}$, and $2ab\le\epsilon a^2+\epsilon^{-1}b^2$ absorbs them. There is no boundary term because these are admissible weak Neumann tests. Applying [F4] gives all second derivatives with at least one tangential derivative. The equation then solves for $\partial_{tt}v$, since $a^{tt}\ge c>0$. Iterating with nested cutoffs proves $\|v\|_{H^k(V)}\le C_k\|v\|_{H^1(V_0)}$ for every integer $k$, with $V$ a smaller collar. In detail, tangentially differentiating $r$ times introduces only terms $\partial_i((D_y^\beta a^{ij})\partial_jD_y^{r-\beta}v)$ with $|\beta|\ge1$; their energy pairings are bounded by the already known derivatives of total order at most $r$, leaving $\nabla D_y^rv$ on the left. Derivatives with two or more normal indices are recovered successively by differentiating the equation and isolating $a^{tt}D^\alpha\partial_{tt}v$; every other derivative of the same total order has fewer normal indices, while differentiated coefficient terms have lower total order. This induction proves the asserted estimate, rather than importing a Neumann boundary theorem. For a smooth forcing the same induction includes its finitely many derivatives on the right; a smooth nonzero normal datum can first be subtracted using a smooth collar function $t f(y)$ with cutoff and the appropriate normal sign. [F4, given, construct]

2.1 It suffices first to treat real fluxes; real and imaginary parts give the complexified estimates with the same uniform dependence. Choose a smooth vector field $X$ supported in the fixed harmonic collar with $X=\nu$ on the boundary. For smooth mean-zero flux $f$, the weak solution is smooth in a smaller collar: subtract the smooth normal-data lifting in step 1.4 and apply that step's inhomogeneous induction. For its harmonic part, direct differentiation gives $\operatorname{div}(X|\nabla u|^2-2(X\cdot\nabla u)\nabla u)=(\operatorname{div}X)|\nabla u|^2-2\partial_iX_j\partial_iu\partial_ju$. Integrate on the collar, where $X$ vanishes near its inner edge. The outer flux is $|\nabla_Mu|^2-|f|^2$, so $\|\nabla_Mu\|_2^2\le\|f\|_2^2+C\|\nabla u\|_{L^2(\Omega)}^2$. With the trace normalized to surface mean zero, [F1], the bounded $L^2$-to-quotient-flux inclusion from [F2], and the trace $L^2$ estimate bound $\|u|_M\|_{H^1}\le C\|f\|_2$. Approximate an arbitrary mean-zero $L^2$ flux by smooth mean-zero fluxes. Apply the same estimate to their differences with the SAME conductivity and use [F1] for convergence of the weak solutions; their traces converge in $H^1$, proving the displayed uniform bound by [F3]. [F1, F2, F3, step 1.4, given, algebra]

2.2 For an arbitrary weak flux $F$, put $v=u_{\gamma,F}-u_{1,F}$. Its $H^1/\mathbb R$ norm is at most $C\|F\|$ by [F1], and it is harmonic with ZERO normal derivative throughout the fixed collar. Apply step 1.4 to a representative of bounded $H^1$ norm. Tangential boundary derivatives are controlled by collar derivatives: for each smooth $z(y,t)$, the one-dimensional fundamental theorem applied to $|z|^2$ between $0$ and a fixed interior slice, averaged over that slice, gives $\|z(\cdot,0)\|_2^2\le C(\|z\|_2^2+\|z\|_2\|\partial_tz\|_2)$; apply this to all tangential derivatives. Thus all integer chart norms of the trace are bounded by $C_q\|F\|$. Applying the tangential differential operator $(1-\Delta_M)^k$ to this smooth trace and using [F5] gives $\sum_jw_j^{2k}|v_j|^2\le C_k\|F\|^2$; integration by parts against the weak eigenfunctions is justified by their local smoothness from [F4] in boundary charts. Smaller spectral exponents follow from $w_j\ge1$. Finally subtract the boundary mean, a bounded operation, and use step 1.3 to obtain the second displayed estimate. [F1, F4, F5, step 1.3, step 1.4, given, algebra]

3.1 The weak energy identity makes $\mathscr R_\gamma$ self-adjoint on mean-zero $L^2$: $\langle\mathscr R_\gamma f,g\rangle=\int\gamma\nabla u_f\cdot\overline{\nabla u_g}$. Hence $b_{ij}=\overline{b_{ji}}$. By step 1.3 the quotient flux norm of $e_j$ is at most $Cw_j^{-1/4}$; step 2.2 applied twice gives $|b_{ij}|\le C_q w_i^{-q/2}w_j^{-1/4}$. Symmetry gives also $|b_{ij}|\le C_q w_j^{-q/2}w_i^{-1/4}$. Their geometric mean is $C_q(w_iw_j)^{-q/4-1/8}$. Choose an integer $q$ with $q/4+1/8\ge L$ to obtain the asserted two-sided estimate, uniformly for every pair of conductivities. This also covers additional mean-zero zero eigenmodes caused by a disconnected boundary, since all $w_j\ge1$. [step 1.3, step 2.2, given, algebra] ∎
