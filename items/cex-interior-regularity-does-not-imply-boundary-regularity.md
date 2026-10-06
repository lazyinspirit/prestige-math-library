---
id: cex-interior-regularity-does-not-imply-boundary-regularity
kind: counterexample
title: "Interior regularity does not imply boundary regularity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-interior-h-two-regularity-for-divergence-form-equations, def-local-weak-solution-for-a-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, def-hk-and-hk-zero-notation, thm-slit-plane-root-branch-biholomorphism-to-a-sector, thm-c2-holomorphic-components-are-harmonic, lem-sobolev-integration-by-parts-for-dual-exponents, thm-polar-coordinates-formula-for-lebesgue-measure, def-countable-choice]
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
      locator: "Section 10.3, Example 10.1 and the discussion of domains whose boundary is not $C^{1,1}$, printed p. 242 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.10 and its $C^2$ boundary hypothesis, printed pp. 112-113 (read in full)"
---

## Statement refuted

Assume Countable Choice. Interior smoothness of a weak solution automatically forces $H^2$ up to the
boundary of its domain, so that the interior tangential and normal estimates
suffice at every boundary point.

## Facts & Assumptions

**Given:** The slit plane $S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$, the slit disc $\Omega=S\cap B_1(0)\subset\mathbb R^2$, the principal square-root biholomorphism $R_2(z)=\exp(\operatorname{Log}z/2)$ of the published slit plane theorem, and the function $u(z)=\operatorname{Im}R_2(z)$.

[F1] $R_2$ is a biholomorphism from $S$ onto the sector $V_2=\{re^{i\theta}:r>0,\ -\pi/2<\theta<\pi/2\}$, with inverse $w\mapsto w^2$; in polar coordinates $z=re^{i\theta}$ with $\theta\in(-\pi,\pi)$ one has $u(z)=r^{1/2}\sin(\theta/2)$, and $u$ is $C^\infty$ and harmonic on $S$. ([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]], [[thm-c2-holomorphic-components-are-harmonic]])

[F2] A class $u\in H^1(\Omega)$ is a local weak solution of $-\Delta u=0$ on $\Omega$ if $\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx=0$ for every $v\in C_c^\infty(\Omega)$, equivalently for every $v\in H^1_0(\Omega_2)$ with $\Omega_2\Subset\Omega$ bounded. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F3] Assume Countable Choice. If $a\in W^{1,2}(U)$ and $b\in W^{1,2}(U)$ for an open set $U\subseteq\mathbb R^n$, and at least one of them is compactly supported in $U$, then $\int_Ua\,D_ib\,dx=-\int_Ub\,D_ia\,dx$ for every coordinate $i$, the integrals being bilinear (no conjugation) and absolutely convergent. ([[lem-sobolev-integration-by-parts-for-dual-exponents]])

[F4] For $u=r^{1/2}\sin(\theta/2)$ one has $u_r=\tfrac12r^{-1/2}\sin(\theta/2)$ and $u_\theta=\tfrac12r^{1/2}\cos(\theta/2)$, so $|\nabla u|^2=u_r^2+r^{-2}u_\theta^2=\tfrac14r^{-1}$ and $u_{rr}=-\tfrac14r^{-3/2}\sin(\theta/2)$; the polar-coordinate formula gives $\int_\Omega f\,dx=\int_0^1\int_{-\pi}^{\pi}f(r\cos\theta,r\sin\theta)\,r\,d\theta\,dr$ for every integrable $f$, the slit lying in the boundary and being $\{r>0,\theta=\pm\pi\}$, a polar-coordinate null set. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F5] The boundary of $\Omega$ is not locally the graph of a $C^1$ function at $0$: every neighbourhood of $0$ meets both components of $\Omega\cap\{x_2\ne0\}$ and the slit $\{x_2=0,\ x_1<0\}$ lies in $\partial\Omega$, so the defining graph condition of a bounded $C^k$ domain fails at $0$ (and along the slit). ([[def-bounded-c-k-domain-and-boundary-charts]])

## Counterexample

1.1 The function is smooth and harmonic inside the domain. By [F1], $R_2$ is holomorphic on the slit plane $S\supseteq\Omega$ and $u=\operatorname{Im}R_2$ has polar form $r^{1/2}\sin(\theta/2)$ with $\theta\in(-\pi,\pi)$; since a holomorphic function is $C^\infty$ in its complex variable, $u\in C^\infty(\Omega)$ and, by the published component theorem, $u$ is harmonic on $\Omega$: $\Delta u=0$ pointwise. [F1, algebra, given]

1.2 The function lies in $H^1$. By [F4], $|u|\le r^{1/2}$ and $|\nabla u|^2=\tfrac14r^{-1}$ on $\Omega$, so $\int_\Omega(|u|^2+|\nabla u|^2)\,dx\le\int_0^1\big(r+\tfrac14r^{-1}\big)\,2\pi r\,dr=2\pi\int_0^1\big(r^2+\tfrac14\big)dr$, which is finite; hence $u\in H^1(\Omega)$. [F4, algebra]

2.1 The function is a local weak solution. Fix $v\in C_c^\infty(\Omega)$, write $v=v_1+iv_2$ with real-valued $v_1,v_2$, put $d=\operatorname{dist}(\operatorname{supp}v,\partial\Omega)>0$ and $U=\{x:\operatorname{dist}(x,\operatorname{supp}v)<d/2\}$, an open bounded set with $\overline U\subseteq\Omega$ and $\operatorname{supp}v\subset U$. On $U$ the real function $u$ is $C^\infty$ by step 1.1, so each real class $\partial_iu$ lies in $W^{1,2}(U)$, while $v_1,v_2\in C_c^\infty(U)$. Applying [F3] on $U$ with $a=\partial_i u$ and $b=v_j$ gives $\int_U\nabla u\cdot\nabla v_j=-\int_Uv_j\Delta u=0$ for each $j=1,2$. Since $\overline v=v_1-iv_2$, the original pairing is $\int_U\nabla u\cdot\nabla v_1-i\int_U\nabla u\cdot\nabla v_2=0$. By [F2], $u$ is a local weak solution of $-\Delta u=0$ on $\Omega$. [F2, F3, step 1.1, algebra]

2.2 Membership in $H^2$ fails at the slit tip. By [F4], For the full Cartesian Hessian $\mathcal Hu=(\partial_i\partial_j u)_{i,j}$, $|\mathcal Hu|\ge|u_{rr}|=\tfrac14r^{-3/2}|\sin(\theta/2)|$, so $\int_\Omega|\mathcal Hu|^2\,dx\ge\tfrac1{16}\int_0^1\int_{-\pi}^{\pi}r^{-3}\sin^2(\theta/2)\,r\,d\theta\,dr=\tfrac{\pi}{16}\int_0^1r^{-2}\,dr=+\infty$; hence $u\notin H^2(\Omega)$ and no representative of $u$ is $H^2$ up to the boundary point $0$. [F4, step 1.2, algebra]

3.1 The failure is a boundary phenomenon, not an interior one. Every compactly contained open $\Omega'\Subset\Omega$ has positive distance from $0$ and from the slit, and there $u$ is $C^\infty$ and harmonic by step 1.1, so $u\in H^2_{\mathrm{loc}}(\Omega)$: the interior theorem applies on each $\Omega'$ and is not contradicted. The boundary $\partial\Omega$ fails the graph condition at $0$ by [F5], so the global boundary hypotheses are unavailable exactly where the $H^2$ integral of step 2.2 diverges. Thus interior smoothness does not imply boundary regularity. [F5, step 1.1, step 2.2, algebra] ∎

## Source notes

Teschl's Example 10.1 and the surrounding discussion (printed p. 242) exhibit reentrant boundary points at which the harmonic model function $r^{\alpha}\sin(\alpha\theta)$ is in $H^1$ but not $H^2$; the slit disc used here is the limiting case of interior angle $2\pi$ with $\alpha=1/2$, and the square-root biholomorphism of the published slit-plane theorem supplies the harmonicity without any polar-coordinate Laplacian computation. Laugesen's Theorem 5.10 (printed pp. 112-113) states the global boundary estimate under a $C^2$ boundary hypothesis, which is exactly what fails here at the slit. The scaffold's earlier witness on the punctured disc was replaced: the function $\log|x|$ there is not in $H^1$, so it is not an admissible weak solution and cannot witness the failure; the slit geometry is the minimal correct witness with the same role on this page.
