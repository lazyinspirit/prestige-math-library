---
id: cex-boundary-h-two-regularity-needs-domain-regularity
kind: counterexample
title: "Boundary $H^2$ regularity needs domain regularity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [thm-global-h-two-dirichlet-regularity, def-local-weak-solution-for-a-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, def-uniformly-elliptic-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, lem-sobolev-integration-by-parts-for-dual-exponents, thm-polar-coordinates-formula-for-lebesgue-measure, thm-chain-rule-for-total-derivatives, lem-smooth-bump-between-concentric-euclidean-balls, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Example 10.1 (the reentrant sector, $u\\notin H^2$ for angle $>\\pi$), printed p. 242 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.10 and the boundary hypothesis, printed pp. 112-113 (read in full)"
---

## Statement refuted

Assume Countable Choice. In the global $H^2$ Dirichlet theorem the bounded $C^2$ boundary hypothesis
can be replaced by mere Lipschitz regularity: on every bounded Lipschitz
domain in $\mathbb R^2$, every zero-boundary weak solution of
$-\Delta u=f$ with $f\in L^2$ lies in $H^2(\Omega)$.

The reentrant-sector factor $v=r^{\pi/\omega}\sin(\pi\theta/\omega)$ is in
$H^1(S_\omega)\setminus H^2(S_\omega)$ and is locally weakly harmonic.
Multiplying it by a smooth cutoff equal to $1$ near the vertex and $0$ near
the circular boundary gives a zero-boundary weak solution with $L^2$ forcing
that is still not in $H^2$.

## Facts & Assumptions

**Given:** A number $\omega\in(\pi,2\pi)$, the reentrant sector $S_\omega=\{(r\cos\theta,r\sin\theta):0<r<1,\ 0<\theta<\omega\}$, the exponent $\alpha=\pi/\omega\in(0,1)$, the singular harmonic function $v(r,\theta)=r^{\alpha}\sin(\alpha\theta)$, and a smooth cutoff $\chi$ on $\mathbb R^2$ that equals $1$ on $B_{1/2}(0)$ and is supported in $B_{3/4}(0)$. Put $u=\chi v$ on $S_\omega$.

[F1] For $g\in L^2_{\mathrm{loc}}(S_\omega)$, a class $w\in H^1(S_\omega)$ is a local weak solution of $-\Delta w=g$ if $\int_{S_\omega}\nabla w\cdot\overline{\nabla\varphi}\,dx =\int_{S_\omega}g\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(S_\omega)$; if also $g\in L^2(S_\omega)$ and $w\in H^1_0(S_\omega)$, density extends this identity to every $H^1_0$ test and gives the zero-boundary weak Dirichlet solution. ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-wkp-zero-as-a-sobolev-closure]])

[F2] Assume Countable Choice. If $a,b\in W^{1,2}(U)$ on an open set $U\subseteq\mathbb R^n$ and at least one of them is compactly supported in $U$, then $\int_Ua\,D_ib\,dx=-\int_Ub\,D_ia\,dx$ for every coordinate $i$, bilinearly and absolutely convergently. ([[lem-sobolev-integration-by-parts-for-dual-exponents]])

[F3] For every $C^2$ function $w$ on an open subset of the punctured plane,
the chain rule applied to $x=r\cos\theta$, $y=r\sin\theta$ gives
$$w_{xx}+w_{yy}=w_{rr}+\frac1rw_r+\frac1{r^2}w_{\theta\theta},$$
because $r_x^2+r_y^2=1$, $\theta_x^2+\theta_y^2=r^{-2}$,
$r_x\theta_x+r_y\theta_y=0$, $r_{xx}+r_{yy}=r^{-1}$ and
$\theta_{xx}+\theta_{yy}=0$ where $r>0$.
([[thm-chain-rule-for-total-derivatives]])

[F4] The polar-coordinate formula $\int_{S_\omega}f\,dx=\int_0^\omega\int_0^1f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$ holds for every integrable $f$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F5] $S_\omega$ is a bounded Lipschitz domain: after rotating the exterior angle bisector to the upward vertical direction, its boundary near the vertex is the graph of the Lipschitz function $t\mapsto\cot((2\pi-\omega)/2)|t|$ and $S_\omega$ is the region below that graph. At the vertex the boundary is not the graph of any $C^1$ function: the two radial edges meet there at interior angle $\omega>\pi$, so the defining chart condition of a bounded $C^1$ (hence $C^{1,1}$ or $C^2$) domain fails. The circular arc is smooth, and at its two intersections with the radial edges the pieces meet transversely, giving ordinary Lipschitz corner charts. ([[def-bounded-c-k-domain-and-boundary-charts]])

[F6] The coefficients of $-\Delta$ are $a^{ij}=\delta^{ij}$, $b=c=0$ and the ellipticity constant is $\theta=1$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F7] Smooth cutoffs exist for $\chi$, the radial truncations $\rho_\epsilon$ and the angular truncations $\eta_\delta$: the ball bump is used for $\chi$, and the compact-set bump supplies the one-dimensional cutoffs on radial and angular intervals. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]])

[F8] On a bounded $C^2$ domain in dimension $n\ge2$, every weak solution $u\in H^1_0(\Omega)$ of $-\Delta u=f$ with $f\in L^2(\Omega)$ lies in $H^2(\Omega)$ with $\|u\|_{H^2}\le C(\|f\|_{L^2}+\|u\|_{L^2})$. ([[thm-global-h-two-dirichlet-regularity]])

## Counterexample

1.1 The singular factor is harmonic. For $v=r^{\alpha}\sin(\alpha\theta)$ one has $v_{rr}=\alpha(\alpha-1)r^{\alpha-2}\sin(\alpha\theta)$, $v_r=\alpha r^{\alpha-1}\sin(\alpha\theta)$ and $v_{\theta\theta}=-\alpha^2r^{\alpha}\sin(\alpha\theta)$; substituting into the polar formula of [F3] gives $\Delta v=\big(\alpha(\alpha-1)+\alpha-\alpha^2\big)r^{\alpha-2}\sin(\alpha\theta)=0$. It vanishes on both radial edges. [F3, algebra, given]

1.2 The cutoff solution lies in $H^1_0$. The cutoff $u=\chi v$ has the same $H^1$ singularity near $0$, is zero near $r=1$, and vanishes on the two radial edges. For $\epsilon>0$ choose a smooth radial cutoff $\rho_\epsilon$ that is zero for $r\le\epsilon$, one for $r\ge2\epsilon$, and satisfies $|D\rho_\epsilon|\le C/\epsilon$. For $\delta>0$ choose a smooth angular cutoff $\eta_\delta$ that vanishes within angular distance $\delta$ of the two radial edges, equals one beyond distance $2\delta$, and satisfies $|D\eta_\delta|\le C/(r\delta)$ in its transition strips. Then $u_{\epsilon,\delta}=\rho_\epsilon\eta_\delta u$ lies in $C_c^\infty(S_\omega)$. Near the vertex $|u|\le Cr^\alpha$ and $|Du|\le Cr^{\alpha-1}$, so polar integration bounds the squared $H^1$ error from $\rho_\epsilon$ by $C\epsilon^{2\alpha}$. For fixed $\epsilon$, the error from $\eta_\delta$ tends to zero as $\delta\downarrow0$: near each edge $|u|\le Cr^\alpha d(\theta)$ and $|Du|\le Cr^{\alpha-1}$, and the derivative-cutoff term has squared integral at most $C_\epsilon\delta$. Choose $\delta=\delta(\epsilon)$ so this second error tends to zero as $\epsilon\downarrow0$. Thus $u_{\epsilon,\delta(\epsilon)}\to u$ in $H^1$, proving $u\in H^1_0(S_\omega)$. [F4, F7, algebra]

2.1 The singular factor lies in $H^1$ but not $H^2$. Its polar derivatives give $|\nabla v|^2=\alpha^2r^{2\alpha-2}$ and $|v|\le r^\alpha$, so by [F4] $$\int_{S_\omega}(|v|^2+|\nabla v|^2)\,dx\le\omega\left(\frac1{2\alpha+2}+\frac{\alpha^2}{2\alpha}\right)<\infty.$$ Thus $v\in H^1(S_\omega)$. Its radial second derivative has squared integral $$\int_{S_\omega}|v_{rr}|^2\,dx=\alpha^2(1-\alpha)^2\left(\int_0^\omega\sin^2(\alpha\theta)\,d\theta\right)\left(\int_0^1r^{2\alpha-3}\,dr\right)=+\infty,$$ since $0<\alpha<1$. If all Cartesian second derivatives were in $L^2$, then $v_{rr}=D^2v[e_r,e_r]$ would be in $L^2$ as well (the radial direction $e_r$ is a unit vector), a contradiction. Hence $v\notin H^2(S_\omega)$. [F4, step 1.1, algebra]

2.2 The forcing is square-integrable. The function $u=\chi v$ is smooth in the sector, and $f:=-\Delta u$ vanishes wherever $\chi$ is constant because $\Delta v=0$. The derivatives of $\chi$ are supported in the annulus $1/2\le r\le3/4$, where $v$ and its derivatives are bounded. Therefore $f\in L^2(S_\omega)$. [F3, F7, step 1.1, algebra]

3.1 The uncut factor is locally weakly harmonic. For any $\varphi\in C_c^\infty(S_\omega)$, its support lies in a compact subset of the open sector where $v$ is smooth. Integration by parts there and $\Delta v=0$ give $\int_{S_\omega}\nabla v\cdot\overline{\nabla\varphi}\,dx=0$. Thus $v$ is the local weak solution recorded in the statement. [F1, step 1.1, step 2.1, algebra]

3.2 The weak equation and boundary condition. For every $\varphi\in C_c^\infty(S_\omega)$, integration by parts on a neighborhood of its compact support gives $\int_{S_\omega}\nabla u\cdot\overline{\nabla\varphi}\,dx=\int_{S_\omega}f\overline\varphi\,dx$. By step 1.2, $u\in H^1_0(S_\omega)$; both sides are continuous in the $H^1_0$ norm because $f\in L^2$ and the principal form is bounded. Density extends the identity to every $H^1_0$ test. Thus $u$ is a zero-boundary weak Dirichlet solution of $-\Delta u=f$. [F1, F2, F5, F6, step 1.2, step 2.2, algebra]

3.3 Failure of $H^2$. On $B_{1/2}(0)\cap S_\omega$, $u=v$, so the divergent radial second-derivative integral of step 2.1 also occurs for $u$. As there $u_{rr}=D^2u[e_r,e_r]$, this precludes $u\in H^2(S_\omega)$. [F4, step 2.1, step 2.2, algebra]

4.1 Lipschitz is not enough. By [F5], $S_\omega$ is bounded Lipschitz but not $C^1$ at its vertex. Steps 1.2 and 2.2--3.2 give a zero-boundary weak solution with $f\in L^2$, while step 3.3 shows that it is not in $H^2$. The $C^2$ hypothesis of [F8] therefore cannot be replaced by Lipschitz regularity, even for the Laplacian, smooth forcing and zero boundary data. [F5, F8, step 1.2, step 2.2, step 3.2, step 3.3, algebra] ∎


## Source notes

This is [T] Example 10.1 (printed p. 242) with the sector angle $\omega>\pi$ and the singular exponent $\alpha=\pi/\omega$; Teschl uses it to show $u\notin H^2(S_\omega)$. Laugesen's Theorem 5.10 (printed p. 112) is the global estimate under a $C^2$ boundary hypothesis. The scaffold's statements of the local weak solution and of the IBP lemma are realised here by the C_c^\infty definition and the published Sobolev integration-by-parts lemma, so no boundary-smoothness theorem is used in verifying the weak equation.
