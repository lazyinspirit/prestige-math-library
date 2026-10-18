---
id: thm-signorini-mortar-contact-kkt-and-complementarity
kind: theorem
title: "The dual mortar contact system is stable and exactly complementary"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-signorini-dual-mortar-contact-pair, lem-signorini-dual-mortar-biorthogonality-and-infsup, def-signorini-nodal-p1-contact-scheme, lem-signorini-nodal-contact-set-conforming, lem-signorini-contact-nodal-test-functions-surjective, lem-signorini-elasticity-form-bounded, lem-signorini-partial-dirichlet-korn-coercivity, thm-stampacchia-variational-inequality, cor-finite-dimensional-normed-spaces-are-banach, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rolf H. Krause and Barbara I. Wohlmuth, Multigrid Methods for Mortar Finite Elements, complete 7-page paper"
      url: "https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf"
      locator: "§2, printed pp. 2–3: dual multiplier basis, biorthogonality, and equivalent mortar saddle formulation."
---

## Statement

On each fixed contact mesh in [[def-signorini-dual-mortar-contact-pair]], assume $K_h\subseteq K$, the elasticity form is bounded and coercive on $V_h$ with constants $M,\alpha>0$, and $F$ is bounded. Then the nodal contact variational inequality has a unique displacement $u_h$ and a unique multiplier $\lambda_h=\sum_i\lambda_i\chi_i\in\Lambda_h^+$ satisfying
$$a(u_h,v_h)-F(v_h)=b_h(v_h,\lambda_h)\quad(v_h\in V_h),$$
$$g_i:=u_h(a_i)\cdot n-I_h\psi(a_i)\ge0,\quad \lambda_i\ge0,\quad \lambda_i g_i=0\quad(0\le i\le N).$$
These saddle equations are equivalent to the discrete VI, and the integrated complementarity residual is exactly $\mathcal R_h:=\int_{\Gamma_C}\lambda_h(T_Cu_h\cdot n-I_h\psi)\,ds=\sum_i d_i\lambda_i g_i=0$. The trace-pair inf-sup bound is at least $1/\sqrt3$ in the stated $L^2$ norms by [[lem-signorini-dual-mortar-biorthogonality-and-infsup]], and the displacement satisfies $\|u_h\|_V\le\|F\|_{V^*}/\alpha$. The coupling uses exact edge integrals and has no contact quadrature defect.

## Facts & Assumptions

**Given:** The finite-dimensional P1 displacement space $V_h$, nonempty closed convex nodal set $K_h$, contact nodes $a_i$, edge weights $d_i>0$, exact mortar pairing $b_h$, and coercive elasticity form.

[A1] Countable Choice is used through the discrete Stampacchia theorem. ([[def-countable-choice]])

[F1] $V_h$ is finite dimensional, hence Hilbert with the inherited $H^1$ inner product; $K_h$ is nonempty, closed, and convex. ([[def-signorini-nodal-p1-contact-scheme]], [[lem-signorini-nodal-contact-set-conforming]], [[cor-finite-dimensional-normed-spaces-are-banach]])

[F2] The discrete form is bounded by $M$ and coercive with constant $\alpha>0$ inherited from $V$. ([[lem-signorini-elasticity-form-bounded]], [[lem-signorini-partial-dirichlet-korn-coercivity]])

[F3] The local dual basis satisfies $\int\chi_i\phi_j=d_i\delta_{ij}$, has trace-pair inf-sup at least $1/\sqrt3$, and $b_h(v_h,\lambda_h)=\sum_i d_i\lambda_i(v_h(a_i)\cdot n)$. ([[lem-signorini-dual-mortar-biorthogonality-and-infsup]])

[F4] For $v_h\in K_h$, each nodal gap $v_h(a_i)\cdot n-I_h\psi(a_i)$ is nonnegative, and $K_h$ is defined by these coordinate constraints. ([[def-signorini-nodal-p1-contact-scheme]], [[lem-signorini-nodal-contact-set-conforming]])

[F5] The coercive variational inequality on a Hilbert space with nonempty closed convex feasible set has exactly one solution. ([[thm-stampacchia-variational-inequality]])

[F6] The contact-coordinate map $B_i(v_h)=v_h(a_i)\cdot n$ is onto $\mathbb R^{N+1}$; for each $i$ a test function $w_i\in V_h$ has $B_j(w_i)=\delta_{ij}$. ([[lem-signorini-contact-nodal-test-functions-surjective]])


## Proof

**Proof technique:** direct.

**Given:** $V_h$, $K_h$, $a$, $F$, the nodal trace map $B_i(v_h):=v_h(a_i)\cdot n$, and the dual basis pairing.

1.1 By [F1]–[F2], the restricted form and load meet the hypotheses of [F5], so the discrete VI has exactly one solution $u_h\in K_h$. By [F6], the contact-coordinate map $B:V_h\to\mathbb R^{N+1}$ is onto; fix test functions $w_i$ with $B_j(w_i)=\delta_{ij}$. [A1, F1, F2, F5, F6, given]

2.1 Define the residual $r_h(v_h):=a(u_h,v_h)-F(v_h)$. If $k\in\ker B$, then $u_h\pm tk\in K_h$ for every real $t$, so the VI tested with both signs gives $r_h(k)=0$. If $g_i>0$, then $u_h\pm tw_i\in K_h$ for all sufficiently small $t>0$, so $r_h(w_i)=0$; if $g_i=0$, the feasible variation $u_h+tw_i$ for $t>0$ gives $r_h(w_i)\ge0$. Set $\lambda_i:=r_h(w_i)/d_i$. Then $\lambda_i\ge0$ and $\lambda_i g_i=0$. [F4, given, algebra, step 1.1]

3.1 For arbitrary $v_h\in V_h$, write $v_h=\sum_i B_i(v_h)w_i+k$ with $k:=v_h-\sum_iB_i(v_h)w_i\in\ker B$. Step 2.1 gives $r_h(v_h)=\sum_iB_i(v_h)r_h(w_i)=\sum_i d_i\lambda_iB_i(v_h)=b_h(v_h,\lambda_h)$ by [F3], with $\lambda_h:=\sum_i\lambda_i\chi_i\in\Lambda_h^+$. Thus the saddle stationarity equation holds. If another multiplier gives the same stationarity, surjectivity of $B$ and $d_i>0$ force each coefficient to equal $\lambda_i$, proving multiplier uniqueness. [F3, step 1.1, step 2.1, algebra]

4.1 Conversely, suppose a feasible displacement and nonnegative coefficients satisfy stationarity and $\lambda_i g_i=0$. For $w_h\in V_h$, define its nodal gap $g_i(w_h):=B_i(w_h)-I_h\psi(a_i)$, so $g_i=g_i(u_h)$. For any feasible $v_h$, biorthogonality [F3] gives $a(u_h,v_h-u_h)-F(v_h-u_h)=\sum_i d_i\lambda_i(B_i(v_h)-B_i(u_h))=\sum_i d_i\lambda_i(g_i(v_h)-g_i(u_h))=\sum_i d_i\lambda_i g_i(v_h)\ge0$, since $g_i(u_h)=0$ whenever $\lambda_i>0$ and $g_i(v_h)\ge0$ by [F4]. Hence the saddle system is equivalent to the VI, and $\mathcal R_h=\sum_i d_i\lambda_i g_i=0$ exactly. [F3, F4, step 3.1, algebra]

5.1 By [F4], $\psi\le0$ and the nodal interpolant satisfies $I_h\psi(a_i)=\psi(a_i)$, so the zero displacement satisfies every defining inequality of $K_h$ and $0\in K_h$. Taking $v_h=0$ in the discrete VI gives $a(u_h,u_h)\le F(u_h)\le\|F\|_{V^*}\|u_h\|_V$. Coercivity [F2] yields $\alpha\|u_h\|_V^2\le\|F\|_{V^*}\|u_h\|_V$, so either $u_h=0$ or division gives $\|u_h\|_V\le\|F\|_{V^*}/\alpha$. The trace inf-sup bound in [F3] and exact edge-integral definition of $b_h$ establish the stated discrete stability and consistency. [F1, F2, F3, F4, step 1.1, algebra] ∎
