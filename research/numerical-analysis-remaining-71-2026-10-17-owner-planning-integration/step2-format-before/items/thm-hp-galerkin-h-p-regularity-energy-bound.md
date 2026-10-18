---
id: thm-hp-galerkin-h-p-regularity-energy-bound
kind: theorem
title: "Galerkin energy error with local h, trace degree and Sobolev regularity"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-hp-simplex-p-explicit-conforming-interpolant
  - thm-hp-triangle-unweighted-smooth-approximation
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-bramble-hilbert-on-reference-simplex
  - lem-shape-regular-affine-simplex-scaling
  - thm-sobolev-spaces-are-banach-spaces
  - thm-poincare-inequality-for-w-one-p-zero
  - def-wkp-zero-as-a-sobolev-closure
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice, inherited through the ordinary Sobolev triangle interpolant and its extension and point-evaluation suppliers; it also supplies Countable Choice for Céa."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 26, Basic error analysis"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "Sections 26.3.1–26.3.2: Céa transfer of conforming approximation errors. The precise local comparison functional and conservative factorial rate are supplied by the proved local triangle items."
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6, hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Chapter 6, Theorems 6.2.1 and 6.3.1: h, p and Sobolev-regularity approximation and energy-error context; the exact estimates used here have local proofs."
---

## Statement

Assume the Axiom of Choice. Let $\mathcal T$ be any finite matching shape-regular affine triangulation of a bounded polygonal open set $\Omega\subset\mathbb R^2$, with shape bound $\gamma$ and arbitrary degrees $p_K\ge1$. Set $p_E=\min(p_K,p_{K'})$ on an interior edge, $p_E=p_K$ on a boundary edge, and $m_K=\min_{E\subset\partial K}p_E$. Thus the effective degree retains neighboring shared-trace restrictions, without a bound on degree ratios.

Choose $\chi=1$ and $V=H^1(\Omega)$, or $\chi=0$ and $V=H_0^1(\Omega)$, with Hilbert norm
$$\|v\|_V^2=|v|_{H^1(\Omega)}^2+\chi\|v\|_{L^2(\Omega)}^2.$$
Let $V_{\mathcal T,p}$ be the corresponding conforming hp space, imposing zero boundary traces in the $\chi=0$ branch. Suppose the real bilinear form $a$ and real linear functional $F$ satisfy
$$|a(v,w)|\le M_a\|v\|_V\|w\|_V,\qquad a(v,v)\ge\alpha_a\|v\|_V^2,\qquad \alpha_a>0,$$
with $F$ bounded. Let $u\in V$ be the variational solution and $u_{\mathcal T,p}$ its conforming Galerkin solution. Suppose $u\in C(\overline\Omega)$ and $u|_K\in H^2(K)$; in the zero-boundary branch its continuous representative vanishes on the boundary edges.

For any cellwise comparison polynomials $q_K\in\mathbb P_{m_K}(K)$ put $w_K=u-q_K$ and
$$J_K(q_K)=|w_K|_{H^1(K)}+\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|w_K\|_{L^2(E)}+\ell_E^{1/2}\|\partial_{\tau_E}w_K\|_{L^2(E)}\right),\qquad R_K(q_K)=h_K^{-1}\|w_K\|_{L^2(K)}+J_K(q_K).$$
Then the actual energy-space error obeys
$$\|u-u_{\mathcal T,p}\|_V\le\frac{M_a}{\alpha_a}C_\gamma\left(\sum_{K\in\mathcal T}\bigl[J_K(q_K)^2+\chi h_K^2R_K(q_K)^2\bigr]\right)^{1/2}.$$
This comparison estimate applies to every degree assignment and the stated piecewise $H^2$ inputs; the comparison polynomials need not match across edges.

For any cellwise integers $s_K\ge2$ with $m_K\ge s_K-1$ and $u|_K\in H^{s_K}(K)$, this also gives the general h-refinement bound
$$\|u-u_{\mathcal T,p}\|_V\le\frac{M_a}{\alpha_a}\left(\sum_K C_{s_K,\gamma}^2(1+\chi h_K^2)h_K^{2(s_K-1)}|u|_{H^{s_K}(K)}^2\right)^{1/2}.$$
In particular every assignment $p_K\ge1$ admits the piecewise $H^2$ estimate with $s_K=2$.

For the additional explicit p-dependent refinement, let integers $r_K\ge5$ satisfy $m_K\ge2r_K-4$, assume $u|_K\in H^{r_K}(K)$, and put $n_K=\lfloor m_K/2\rfloor$ and
$$\eta_{K}=\left(\frac{(n_K-r_K+3)!}{(n_K+r_K-5)!}\right)^{1/2}.$$
There are constants $C_{r_K,\gamma}$ independent of all diameters, degrees and degree ratios such that
$$\|u-u_{\mathcal T,p}\|_V\le\frac{M_a}{\alpha_a}\left(\sum_{K\in\mathcal T}C_{r_K,\gamma}^2(1+\chi h_K^2)h_K^{2(r_K-1)}\eta_K^2|u|_{H^{r_K}(K)}^2\right)^{1/2}.$$
If $m_K\ge4(r_K-2)$, one may replace $\eta_K$ by $(4/m_K)^{r_K-4}$. For a common regularity $r$, this displays local $h_K^{r-1}$ and the proved conservative trace-degree factor $m_K^{-(r-4)}$. It does not claim the optimal $p^{-(r-1)}$ rate or any bound on growth of $C_{r,\gamma}$ as $r\to\infty$. The separate fixed-mesh tensor-analytic and weighted-corner exponential results remain independent branches.

## Facts & Assumptions

**Given:** AC; the finite matching shape-regular two-dimensional mesh, degrees and either space/norm branch; the actual boundedness and coercivity constants; the exact solution with the stated continuity and cellwise regularity; and the comparison polynomials or the additional ordinary Sobolev assumptions.

[F1] [[lem-hp-simplex-p-explicit-conforming-interpolant]] gives a single linear trace-matching interpolant $Iu$, preserving zero boundary edge values, with $|u-Iu|_{H^1(K)}\le C_\gamma J_K(q_K)$ and $h_K^{-1}\|u-Iu\|_{L^2(K)}+|u-Iu|_{H^1(K)}\le C_\gamma R_K(q_K)$. Its local $H^2$ edge trace and tangential-derivative identity are proved there from smooth density and the actual first-order trace theorem.

[F2] [[thm-hp-triangle-unweighted-smooth-approximation]] supplies $q_K=A_{K,m_K,r_K}u$ with $\bigl(\sum_{j=0}^2h_K^{2j-2}|u-q_K|_{H^j(K)}^2\bigr)^{1/2}\le C_{r_K,\gamma}h_K^{r_K-1}\eta_K|u|_{H^{r_K}(K)}$, and the stated high-degree simplification.

[F3] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]] and [[def-hp-variable-degree-spaces-on-matching-meshes]] give a finite-dimensional conforming space and identify its weak gradients with its cellwise gradients.

[F4] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] gives exact and discrete solvability and the factor $M_a/\alpha_a$ under Countable Choice. [[thm-sobolev-spaces-are-banach-spaces]], [[def-wkp-zero-as-a-sobolev-closure]] and [[thm-poincare-inequality-for-w-one-p-zero]] give completeness of the two specified Hilbert norms; AC supplies their choice assumptions.

[F5] [[thm-bramble-hilbert-on-reference-simplex]] with Sobolev exponent two and $r=s_K\ge2$ supplies a degree-$(s_K-1)$ polynomial with reference $H^2$ error bounded by the $H^{s_K}$ seminorm. [[lem-shape-regular-affine-simplex-scaling]] transports that estimate with the exact factors $h_K^{j-1}$, $j=0,1,2$.

## Proof

1.1 Both norm branches are Hilbert: the Sobolev inner product is complete by [F4], the zero-boundary Sobolev closure is closed, and Poincaré makes its gradient norm equivalent to the inherited complete norm. The finite matching polynomial space is finite-dimensional and conforming by [F3]. The given exact form and load therefore meet Céa's precise hypotheses, giving unique variational solutions and $\|u-u_{\mathcal T,p}\|_V\le(M_a/\alpha_a)\inf_{v\in V_{\mathcal T,p}}\|u-v\|_V$. [F3, F4, given]

1.2 The interpolant [F1] belongs to that same trace-matching space. In the zero-boundary branch it also belongs to $H_0^1$: its finite polynomial pieces and matching vertex values give a continuous piecewise Lipschitz function with zero boundary values. Its zero extension has bounded weak first derivatives, since all boundary jumps vanish. Multiplying by a Lipschitz cutoff zero at boundary distance at most $1/k$ and one at distance at least $2/k$ approximates it in $H^1$: the cutoff-gradient error is bounded on the shrinking layer by the fixed Lipschitz bound times $2$, since $|Iu(x)|\le L\operatorname{dist}(x,\partial\Omega)$. Mollifying each compactly supported cutoff inside $\Omega$ supplies smooth compactly supported approximants. Thus the defining zero-boundary closure in [F4] contains $Iu$. No neighboring degree ratio was used. [F1, F3, F4, construct, algebra]

2.1 Sum the squared cell seminorm bounds in [F1], which gives $|u-Iu|_{H^1(\Omega)}^2\le C_\gamma^2\sum_KJ_K(q_K)^2$ by [F3]. The full scaled estimate also gives $\|u-Iu\|_{L^2(\Omega)}^2\le C_\gamma^2\sum_Kh_K^2R_K(q_K)^2$. Their sum with the exact factor $\chi$ bounds $\|u-Iu\|_V^2$. Use $Iu$ as the admissible comparison in step 1.1 and take square roots to obtain the first displayed Galerkin bound. The local comparisons may be chosen independently because the single interpolant was constructed from common edge traces of $u$, rather than by gluing the $q_K$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Choose the reference moment polynomial of degree $s_K-1$ from [F5] and transport it to $K$. The degree condition makes it an admissible $q_K\in\mathbb P_{m_K}(K)$. With $w_K=u-q_K$, scaling gives $h_K^{-1}\|w_K\|_2+|w_K|_{H^1}+h_K|w_K|_{H^2}\le C_{s_K,\gamma}h_K^{s_K-1}|u|_{H^{s_K}(K)}$. The value and derivative edge trace bounds proved in [F1] therefore give the same bound for $J_K$ and $R_K$. Substitute into step 2.1 to prove the general integer-regularity h estimate, including $s_K=2$ on every degree assignment. [F1, F5, step 2.1, algebra]

3.2 Under the stronger cellwise assumptions choose $q_K$ from [F2]. The scaled edge trace proved in [F1] gives $J_K(q_K),R_K(q_K)\le C_{r_K,\gamma}h_K^{r_K-1}\eta_K|u|_{H^{r_K}(K)}$: its value-edge term is bounded by $C(h_K^{-1}\|w_K\|_2+|w_K|_{H^1})$, and its derivative-edge term by $C(|w_K|_{H^1}+h_K|w_K|_{H^2})$, so exactly the three scaled norms in [F2] occur. Substitution into step 2.1 proves the second displayed bound with $(1+\chi h_K^2)$. Finally [F2] gives $\eta_K\le(4/m_K)^{r_K-4}$ under the stronger degree threshold. This retains the actual trace-degree and regularity constants and concludes both norm branches. [F1, F2, step 2.1, algebra] ∎
